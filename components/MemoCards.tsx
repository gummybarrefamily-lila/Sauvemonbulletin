"use client";

import { useState } from "react";
import type { MemoCard } from "@content/types";

export function MemoCards({ cards, titre, lang = "fr-FR" }: { cards: MemoCard[]; titre: string; lang?: string }) {
  const [retournees, setRetournees] = useState<Record<number, boolean>>({});

  function telecharger() {
    const html = genererHtmlImprimable(cards, titre);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cartes-memo-${titre.toLowerCase().replace(/[^a-z0-9]+/gi, "-")}.html`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-500">Clique sur une carte pour la retourner. {cards.length} cartes.</p>
        <button onClick={telecharger} className="btn-ghost text-sm">
          ⬇️ Télécharger (imprimable)
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => {
          const face = retournees[i];
          return (
            <button
              key={i}
              onClick={() => setRetournees({ ...retournees, [i]: !face })}
              className={`min-h-[9rem] rounded-2xl border p-4 text-left transition ${
                face ? "border-brand-300 bg-brand-50" : "border-slate-200 bg-white hover:border-brand-300"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                {face ? "Réponse" : "Question"}
              </span>
              <p className={`mt-2 ${face ? "text-brand-900" : "font-semibold text-slate-800"}`}>
                {face ? c.verso : c.recto}
              </p>
              <span className="mt-3 block text-xs text-slate-400">↻ retourner</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function genererHtmlImprimable(cards: MemoCard[], titre: string): string {
  const cartes = cards
    .map(
      (c) => `<div class="carte"><div class="face"><span class="tag">Question</span><p>${escapeHtml(
        c.recto
      )}</p></div><div class="face verso"><span class="tag">Réponse</span><p>${escapeHtml(c.verso)}</p></div></div>`
    )
    .join("");
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Cartes mémo — ${escapeHtml(
    titre
  )}</title><style>
    body{font-family:Arial,sans-serif;margin:20px;color:#1f2937}
    h1{color:#1d60f1}
    .grille{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .carte{display:flex;gap:6px;page-break-inside:avoid}
    .face{flex:1;border:2px solid #cbd5e1;border-radius:12px;padding:12px;min-height:90px}
    .verso{border-color:#93c5fd;background:#eff6ff}
    .tag{font-size:10px;text-transform:uppercase;color:#94a3b8;font-weight:bold}
    p{margin:6px 0 0}
    @media print{button{display:none}}
  </style></head><body>
    <h1>🃏 Cartes mémo — ${escapeHtml(titre)}</h1>
    <p>Imprime cette page (recto) puis découpe le long des cartes. Astuce : plie chaque carte entre question et réponse.</p>
    <button onclick="window.print()">🖨️ Imprimer</button>
    <div class="grille">${cartes}</div>
  </body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
