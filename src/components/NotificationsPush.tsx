"use client";

import { useEffect, useState } from "react";

function base64VersUint8Array(base64: string): Uint8Array {
  const rembourrage = "=".repeat((4 - (base64.length % 4)) % 4);
  const brut = atob((base64 + rembourrage).replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(Array.from(brut).map((c) => c.charCodeAt(0)));
}

type Etat = "chargement" | "non-supporte" | "refuse" | "inactif" | "actif";

/** Active/désactive les rappels push (streak en jeu, défis du week-end) sur cet appareil. */
export function NotificationsPush() {
  const [etat, setEtat] = useState<Etat>("chargement");
  const [occupe, setOccupe] = useState(false);
  const clePublique = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

  useEffect(() => {
    (async () => {
      if (!clePublique || !("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) {
        setEtat("non-supporte");
        return;
      }
      if (Notification.permission === "denied") {
        setEtat("refuse");
        return;
      }
      try {
        const sw = await navigator.serviceWorker.ready;
        const abonnement = await sw.pushManager.getSubscription();
        setEtat(abonnement ? "actif" : "inactif");
      } catch {
        setEtat("inactif");
      }
    })();
  }, [clePublique]);

  async function activer() {
    if (!clePublique) return;
    setOccupe(true);
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setEtat(permission === "denied" ? "refuse" : "inactif");
        return;
      }
      const sw = await navigator.serviceWorker.ready;
      const abonnement = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64VersUint8Array(clePublique) as BufferSource,
      });
      const rep = await fetch("/api/push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(abonnement.toJSON()),
      });
      setEtat(rep.ok ? "actif" : "inactif");
    } catch {
      setEtat("inactif");
    } finally {
      setOccupe(false);
    }
  }

  async function desactiver() {
    setOccupe(true);
    try {
      const sw = await navigator.serviceWorker.ready;
      const abonnement = await sw.pushManager.getSubscription();
      if (abonnement) {
        await fetch("/api/push", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: abonnement.endpoint }),
        }).catch(() => {});
        await abonnement.unsubscribe();
      }
      setEtat("inactif");
    } catch {
      /* ignore */
    } finally {
      setOccupe(false);
    }
  }

  if (etat === "chargement" || etat === "non-supporte") return null;

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 px-4 py-3">
      <p className="text-sm text-slate-700">
        🔔 <strong>Rappels de streak</strong> — une notification quand ta série est en jeu, et le samedi si un défi n&apos;est pas fini.
      </p>
      {etat === "refuse" ? (
        <p className="text-xs text-amber-600">
          Notifications bloquées : autorise-les pour ce site dans les réglages du téléphone.
        </p>
      ) : etat === "actif" ? (
        <button onClick={desactiver} disabled={occupe} className="btn-ghost px-4 py-2 text-sm disabled:opacity-40">
          ✅ Activés — toucher pour désactiver
        </button>
      ) : (
        <button onClick={activer} disabled={occupe} className="btn-primary px-4 py-2 text-sm disabled:opacity-40">
          {occupe ? "Activation…" : "Activer sur cet appareil"}
        </button>
      )}
    </div>
  );
}
