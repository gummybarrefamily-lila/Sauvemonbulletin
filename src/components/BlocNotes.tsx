"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getNote, setNote } from "@/lib/notes";

/**
 * Bloc-notes flottant, disponible pendant la lecture d'un chapitre.
 * L'élève peut l'ouvrir/fermer, écrire ses réflexions, et tout est
 * sauvegardé automatiquement sur son appareil (localStorage).
 * `id` est l'identifiant unique du chapitre : "matiere--niveau--slug".
 */
export function BlocNotes({ id, titre }: { id: string; titre: string }) {
  const [ouvert, setOuvert] = useState(false);
  const [texte, setTexte] = useState("");
  const [charge, setCharge] = useState(false);
  const [sauve, setSauve] = useState(false);

  useEffect(() => {
    setTexte(getNote(id));
    setCharge(true);
  }, [id]);

  // Sauvegarde automatique (avec un léger délai après la dernière frappe).
  useEffect(() => {
    if (!charge) return;
    const t = setTimeout(() => {
      setNote(id, texte);
      setSauve(true);
    }, 500);
    return () => clearTimeout(t);
  }, [texte, id, charge]);

  return (
    <>
      <button
        onClick={() => setOuvert((o) => !o)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-700"
        aria-label="Ouvrir mon bloc-notes"
      >
        📝 Mes notes
      </button>

      {ouvert && (
        <div className="fixed bottom-20 right-5 z-40 flex w-[90vw] max-w-sm flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
            <div>
              <p className="text-sm font-bold text-slate-800">📝 Bloc-notes</p>
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
          <textarea
            value={texte}
            onChange={(e) => {
              setTexte(e.target.value);
              setSauve(false);
            }}
            placeholder="Note ici tes réflexions, les points à revoir, tes questions pour le prof ou le tuteur…"
            className="h-56 w-full resize-none border-0 p-4 text-sm text-slate-700 focus:outline-none focus:ring-0"
          />
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
