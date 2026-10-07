"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { getAllNotes } from "@/lib/notes";
import { CHAPITRES } from "@content/chapitres";
import { MATIERES, matiereInfo } from "@content/curriculum";
import type { MatiereId } from "@content/types";

interface NoteEnrichie {
  id: string;
  texte: string;
  matiere: MatiereId;
  niveau: string;
  titreChapitre: string;
}

const NIVEAU_LABEL: Record<string, string> = { "5eme": "5ème", "4eme": "4ème", "3eme": "3ème" };

function enrichir(id: string, texte: string): NoteEnrichie {
  const [matiere, niveau, slug] = id.split("--");
  const chap = CHAPITRES.find((c) => c.matiere === matiere && c.niveau === niveau && c.slug === slug);
  return {
    id,
    texte,
    matiere: matiere as MatiereId,
    niveau,
    titreChapitre: chap?.titre ?? slug,
  };
}

export default function PageMesNotes() {
  const [notes, setNotes] = useState<NoteEnrichie[] | null>(null);

  useEffect(() => {
    setNotes(getAllNotes().map((n) => enrichir(n.id, n.texte)));
  }, []);

  // Regroupe par matière.
  const parMatiere = useMemo(() => {
    const map = new Map<MatiereId, NoteEnrichie[]>();
    (notes ?? []).forEach((n) => {
      const arr = map.get(n.matiere) ?? [];
      arr.push(n);
      map.set(n.matiere, arr);
    });
    return map;
  }, [notes]);

  function telecharger() {
    if (!notes || notes.length === 0) return;
    const html = genererHtml(notes);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mes-notes-sauvemonbulletin.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">📝 Mon bloc-notes</h1>
            <p className="mt-1 text-slate-500">Tes réflexions, organisées par matière et par chapitre.</p>
          </div>
          <button
            onClick={telecharger}
            disabled={!notes || notes.length === 0}
            className="btn-primary disabled:opacity-40"
          >
            ⬇️ Télécharger mon carnet
          </button>
        </div>

        {notes === null && <p className="mt-8 text-slate-400">Chargement…</p>}

        {notes !== null && notes.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <p className="text-slate-500">
              Tu n&apos;as pas encore de notes. Ouvre un chapitre et clique sur{" "}
              <span className="font-semibold text-brand-600">📝 Mes notes</span> pour commencer à écrire.
            </p>
            <Link href="/matieres" className="btn-ghost mt-4 inline-block">
              Parcourir les matières
            </Link>
          </div>
        )}

        {notes !== null && notes.length > 0 && (
          <div className="mt-8 space-y-8">
            {MATIERES.filter((m) => parMatiere.has(m.id)).map((m) => {
              const info = matiereInfo(m.id);
              return (
                <section key={m.id}>
                  <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800">
                    <span className="text-2xl">{info.emoji}</span> {info.nom}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {parMatiere.get(m.id)!.map((n) => (
                      <div key={n.id} className="card p-4">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-500">
                            {NIVEAU_LABEL[n.niveau] ?? n.niveau}
                          </span>
                          <h3 className="font-semibold text-slate-800">{n.titreChapitre}</h3>
                        </div>
                        <p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">{n.texte}</p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function genererHtml(notes: NoteEnrichie[]): string {
  const ordreMatiere = MATIERES.map((m) => m.id);
  const sections = ordreMatiere
    .filter((id) => notes.some((n) => n.matiere === id))
    .map((id) => {
      const info = matiereInfo(id);
      const blocs = notes
        .filter((n) => n.matiere === id)
        .map(
          (n) =>
            `<div class="note"><h3>${escapeHtml(NIVEAU_LABEL[n.niveau] ?? n.niveau)} — ${escapeHtml(
              n.titreChapitre
            )}</h3><p>${escapeHtml(n.texte).replace(/\n/g, "<br>")}</p></div>`
        )
        .join("");
      return `<section><h2>${info.emoji} ${escapeHtml(info.nom)}</h2>${blocs}</section>`;
    })
    .join("");
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Mes notes — SauveMonBulletin</title><style>
    body{font-family:Arial,sans-serif;margin:24px;color:#1f2937;max-width:800px}
    h1{color:#1d60f1}
    h2{margin-top:28px;border-bottom:2px solid #e2e8f0;padding-bottom:6px}
    .note{border-left:3px solid #93c5fd;background:#f8fafc;padding:8px 14px;margin:12px 0;page-break-inside:avoid}
    .note h3{margin:0 0 4px;font-size:15px;color:#334155}
    .note p{margin:0;white-space:pre-wrap}
    @media print{button{display:none}}
  </style></head><body>
    <h1>📝 Mes notes — SauveMonBulletin</h1>
    <button onclick="window.print()">🖨️ Imprimer / enregistrer en PDF</button>
    ${sections}
  </body></html>`;
}
