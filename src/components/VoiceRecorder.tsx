"use client";

import { useEffect, useRef, useState } from "react";
import { saveRecording, loadRecording, deleteRecording } from "@/lib/recordings";

type Etat = "vide" | "enregistrement" | "pret";

/**
 * Enregistreur vocal : l'élève lit le texte à voix haute, s'enregistre,
 * puis se réécoute. L'enregistrement est conservé sur son appareil (IndexedDB),
 * jamais envoyé au serveur. Remplace l'ancienne voix off automatique.
 */
export function VoiceRecorder({
  id,
  label = "M'enregistrer",
  compact = false,
}: {
  id: string;
  label?: string;
  compact?: boolean;
}) {
  const [supporte, setSupporte] = useState(true);
  const [etat, setEtat] = useState<Etat>("vide");
  const [url, setUrl] = useState<string | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const urlRef = useRef<string | null>(null);

  // Vérifie le support et recharge un éventuel enregistrement déjà fait.
  useEffect(() => {
    const ok =
      typeof window !== "undefined" &&
      typeof navigator !== "undefined" &&
      !!navigator.mediaDevices &&
      typeof window.MediaRecorder !== "undefined";
    setSupporte(ok);
    if (!ok) return;
    setEtat("vide");
    setUrl(null);
    loadRecording(id)
      .then((blob) => {
        if (blob) {
          const u = URL.createObjectURL(blob);
          urlRef.current = u;
          setUrl(u);
          setEtat("pret");
        }
      })
      .catch(() => {});
    return () => {
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current);
        urlRef.current = null;
      }
    };
  }, [id]);

  async function demarrer() {
    setErreur(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      rec.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunksRef.current, { type: rec.mimeType || "audio/webm" });
        try {
          await saveRecording(id, blob);
        } catch {
          /* stockage indisponible : la lecture reste possible pour cette session */
        }
        if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        const u = URL.createObjectURL(blob);
        urlRef.current = u;
        setUrl(u);
        setEtat("pret");
      };
      recorderRef.current = rec;
      rec.start();
      setEtat("enregistrement");
    } catch {
      setErreur("Micro indisponible — autorise l'accès au microphone dans ton navigateur.");
    }
  }

  function arreter() {
    recorderRef.current?.stop();
  }

  async function effacer() {
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current);
      urlRef.current = null;
    }
    setUrl(null);
    setEtat("vide");
    try {
      await deleteRecording(id);
    } catch {
      /* ignore */
    }
  }

  if (!supporte) {
    return <span className="text-xs text-slate-400">🎙️ Enregistrement non disponible sur ce navigateur.</span>;
  }

  const btnClass = compact
    ? "inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-2.5 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-100"
    : "btn-ghost text-sm";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {etat === "enregistrement" ? (
        <button
          onClick={arreter}
          className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700"
        >
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
          Arrêter
        </button>
      ) : (
        <button onClick={demarrer} className={btnClass} aria-label={label}>
          <span>🎙️</span>
          {etat === "pret" ? "Refaire" : label}
        </button>
      )}

      {url && etat !== "enregistrement" && (
        <>
          <audio controls src={url} className="h-9 max-w-[220px]" />
          <button
            onClick={effacer}
            aria-label="Supprimer mon enregistrement"
            className="text-slate-400 transition hover:text-red-500"
          >
            🗑️
          </button>
        </>
      )}

      {erreur && <span className="text-xs text-red-500">{erreur}</span>}
    </div>
  );
}
