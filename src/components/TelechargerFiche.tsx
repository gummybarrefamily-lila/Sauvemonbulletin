"use client";

import type { Chapitre } from "@content/types";
import { niveauLabel } from "@content/curriculum";

/** Bouton de téléchargement de la fiche de révision en PDF (via la boîte d'impression). */
export function TelechargerFiche({ chapitre }: { chapitre: Chapitre }) {
  function telecharger() {
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(genererHtml(chapitre));
    w.document.close();
  }

  return (
    <button onClick={telecharger} className="btn-ghost text-sm">
      ⬇️ Télécharger en PDF
    </button>
  );
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function genererHtml(c: Chapitre): string {
  const sections = c.fiche.sections
    .map(
      (s) => `<section>
        <h2>${escapeHtml(s.titre)}</h2>
        <ul>${s.points.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
      </section>`
    )
    .join("");
  const synthese = c.syntheseRevisions.map((s) => `<li>${escapeHtml(s)}</li>`).join("");

  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
  <title>Fiche — ${escapeHtml(c.titre)}</title>
  <style>
    body{font-family:Arial,Helvetica,sans-serif;margin:28px auto;max-width:760px;color:#1f2937;line-height:1.5}
    .entete{border-bottom:3px solid #1d60f1;padding-bottom:10px;margin-bottom:18px}
    .entete p{margin:0;color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:.05em}
    h1{margin:4px 0 0;color:#153a8a;font-size:26px}
    .intro{background:#eef6ff;border-radius:10px;padding:12px 16px;font-size:14px}
    section{margin-top:18px;page-break-inside:avoid}
    h2{color:#1d60f1;font-size:17px;border-left:4px solid #1d60f1;padding-left:10px;margin:0 0 6px}
    ul{margin:6px 0 0;padding-left:22px}
    li{margin-bottom:4px;font-size:14px}
    .retenir{margin-top:22px;background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:12px 16px;page-break-inside:avoid}
    .retenir h2{border:none;padding:0;color:#92400e;font-size:16px}
    .pied{margin-top:26px;text-align:center;color:#94a3b8;font-size:11px}
    .imprimer{position:fixed;top:12px;right:12px;background:#1d60f1;color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:14px;cursor:pointer}
    @media print{.imprimer{display:none}body{margin:0;max-width:none}}
  </style></head><body>
    <button class="imprimer" onclick="window.print()">🖨️ Imprimer / Enregistrer en PDF</button>
    <div class="entete">
      <p>Fiche de révision · ${escapeHtml(niveauLabel(c.niveau))}</p>
      <h1>${escapeHtml(c.titre)}</h1>
    </div>
    <p class="intro">${escapeHtml(c.fiche.intro)}</p>
    ${sections}
    <div class="retenir">
      <h2>⭐ À retenir absolument</h2>
      <ul>${synthese}</ul>
    </div>
    <p class="pied">SauveMonBulletin — réviser le collège autrement</p>
    <script>setTimeout(function(){ window.print(); }, 400);</script>
  </body></html>`;
}
