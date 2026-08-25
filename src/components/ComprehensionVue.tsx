"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import type { FicheComprehension } from "@content/comprehension";
import { Quiz } from "./Quiz";

/** Détail d'une fiche de compréhension : le savoir-faire + 10 séries de QCM. */
export function ComprehensionVue({ fiche }: { fiche: FicheComprehension }) {
  const { data: session } = useSession();
  const [idx, setIdx] = useState(0);
  const serie = fiche.series[idx];

  async function enregistrer(score: number, scoreMax: number) {
    if (!session) return;
    try {
      await fetch("/api/activite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "comprehension",
          matiere: "francais",
          niveau: "3eme",
          chapitre: fiche.slug,
          score,
          scoreMax,
        }),
      });
    } catch {
      /* silencieux */
    }
  }

  return (
    <div>
      {/* La fiche de savoir-faire */}
      <div className="prose-fiche mt-6 space-y-5">
        {fiche.sections.map((s, i) => (
          <div key={i} className="card p-5">
            <h3 className="text-lg font-bold text-brand-800">{s.titre}</h3>
            <ul className="mt-2 space-y-1.5 text-slate-700">
              {s.points.map((p, k) => (
                <li key={k} className="flex items-start gap-2">
                  <span className="mt-1 text-brand-500">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Les séries d'exercices */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">✏️ Entraînement</h2>
        <p className="mt-1 text-slate-500">{fiche.series.length} séries de QCM, difficulté progressive.</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {fiche.series.map((s, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                i === idx ? "bg-brand-100 text-brand-800" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              Série {i + 1}
            </button>
          ))}
        </div>

        {serie && (
          <div className="card mt-4 p-5">
            <h3 className="mb-3 font-bold text-slate-900">
              Série {idx + 1} — {serie.titre}
            </h3>
            <Quiz
              key={idx}
              questions={serie.questions}
              filtrable={false}
              onTermine={(s, m) => enregistrer(s, m)}
            />
          </div>
        )}
      </section>
    </div>
  );
}
