"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getNote, setNote } from "@/lib/notes";

/**
 * Bloc-notes d'un chapitre. Deux affichages :
 *  - variant="flottant" (défaut) : bouton flottant + panneau, pour écrire tout en lisant.
 *  - variant="inline" : éditeur pleine largeur, affiché dans l'onglet « Bloc-notes ».
 * Tout est sauvegardé automatiquement sur l'appareil (localStorage).
 * `id` = identifiant unique du chapitre : "matiere--niveau--slug".
 */
export function BlocNotes({
  id,
  titre,
  variant = "flottant",
  onClose,
}: {
  id: string;
  titre: string;
  variant?: "flottant" | "inline";
  onClose?: () => void;
}) {
  const [ouvert, setOuvert] = useState(false);
  const [texte, setTexte] = useState("");
  const [charge, setCharge] = useState(false);
  const [sauve, setSauve] = useState(false);
  const texteRef = useRef("");
  const idRef = useRef(id);
  idRef.current = id;

  useEffect(() => {
    const t = getNote(id);
    setTexte(t);
    texteRef.current = t;
    setCharge(true);
  }, [id]);

  // Sauvegarde automatique (léger délai après la dernière frappe).
  useEffect(() => {
    if (!charge) return;
    const t = setTimeout(() => {
      setNote(id, texte);
      setSauve(true);
    }, 500);
    return () => clearTimeout(t);
  }, [texte, id, charge]);

  // Sauvegarde de sécurité au démontage (changement d'onglet, fermeture).
  useEffect(() => {
    return () => {
      setNote(idRef.current, texteRef.current);
    };
  }, []);

  function onChange(v: string) {
    setTexte(v);
    texteRef.current = v;
    setSauve(false);
  }

  const zoneTexte = (
    <textarea
      value={texte}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Note ici tes réflexions, les points à revoir, tes questions pour le prof ou le tuteur…"
      className="w-full resize-none border-0 p-4 text-sm text-slate-700 focus:outline-none focus:ring-0"
    />
  );

  // Affichage intégré dans l'onglet « Bloc-notes ».
  if (variant === "inline") {
    return (
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">📝 Mon bloc-notes</h2>
            <p className="text-xs text-slate-400">{titre}</p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="rounded-lg px-2 py-1 text-slate-400 hover:bg-slate-100"
              aria-label="Masquer le bloc-notes"
            >
              ✕
            </button>
          )}
        </div>
        <div className="[&>textarea]:h-72 lg:[&>textarea]:h-[26rem]">{zoneTexte}</div>
        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2 text-xs text-slate-400">
          <span>{sauve ? "Enregistré ✓ (sur cet appareil)" : "Enregistrement automatique…"}</span>
          <Link href="/mes-notes" className="font-semibold text-brand-600 hover:underline">
            Tout voir / télécharger →
          </Link>
        </div>
      </div>
    );
  }

  // Bouton + panneau flottant.
  return (
    <>
      <button
        onClick={() => setOuvert((o) => !o)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-700"
        aria-label="Ouvrir mon bloc-notes"
      >
        📝 Mon bloc-notes
      </button>

      {ouvert && (
        <div className="fixed bottom-20 right-5 z-40 flex w-[90vw] max-w-sm flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
            <div>
              <p className="text-sm font-bold text-slate-800">📝 Mon bloc-notes</p>
              <p className="text-xs text-slate-400">{titre}</p>
            </div>
            <button
              onClick={() => setOuvert(false)}
              className="rounded-lg px-2 py-1 text-slate-400 hover:bg-slate-100"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>
          <div className="[&>textarea]:h-56">{zoneTexte}</div>
          <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2 text-xs text-slate-400">
            <span>{sauve ? "Enregistré ✓" : "…"}</span>
            <Link href="/mes-notes" className="font-semibold text-brand-600 hover:underline">
              Tout voir / télécharger →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
