"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { PROBLEMES_MATHS } from "@content/problemes-maths";
import { Quiz } from "./Quiz";

/** Problèmes de mathématiques de la semaine (raisonnement, mises en situation). */
export function ProblemesMathsVue() {
  const { data: session } = useSession();
  const [niveau, setNiveau] = useState<"5eme" | "4eme" | "3eme">("5eme");
  const series = PROBLEMES_MATHS.filter((p) => p.niveau === niveau).sort((a, b) => a.semaine - b.semaine);

  async function enregistrer(niv: string, score: number, scoreMax: number) {
    if (!session) return;
    try {
      await fetch("/api/activite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "problemes", matiere: "maths", niveau: niv, score, scoreMax }),
      });
    } catch {
      /* silencieux */
    }
  }

  return (
    <div className="mt-6">
      <div className="mb-5 flex gap-1.5">
        {(["5eme", "4eme", "3eme"] as const).map((n) => (
          <button
            key={n}
            onClick={() => setNiveau(n)}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
              niveau === n ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {n === "5eme" ? "5ème" : n === "4eme" ? "4ème" : "3ème"}
          </button>
        ))}
      </div>

      {series.length === 0 ? (
        <p className="rounded-2xl bg-slate-50 p-6 text-center text-slate-500">
          Les problèmes de la semaine pour ce niveau arrivent bientôt.
        </p>
      ) : (
        <div className="space-y-8">
          {series.map((s, i) => (
            <div key={i} className="card p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  S{s.semaine}
                </span>
                <div>
                  <h2 className="font-bold text-slate-900">Semaine {s.semaine} — {s.titre}</h2>
                  <p className="text-sm text-slate-500">🧩 {s.theme}</p>
                </div>
              </div>
              <Quiz questions={s.questions} filtrable={false} onTermine={(sc, m) => enregistrer(s.niveau, sc, m)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
