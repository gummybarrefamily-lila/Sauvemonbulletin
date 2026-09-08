"use client";

import { useRef, useState } from "react";
import { HEBDO } from "@content/hebdo";
import { matiereInfo } from "@content/curriculum";
import { Quiz } from "./Quiz";
import { useSession } from "next-auth/react";
import { EtatEnregistrement, type EtatSauvegarde } from "./EtatEnregistrement";

export function HebdoVue() {
  const { data: session } = useSession();
  const [niveau, setNiveau] = useState<"5eme" | "4eme" | "3eme">("5eme");
  const series = HEBDO.filter((h) => h.niveau === niveau);
  // Un état d'enregistrement par matière (chaque série a son propre quiz).
  const [sauvegardes, setSauvegardes] = useState<Record<string, EtatSauvegarde>>({});
  const derniersResultats = useRef<Record<string, { niv: string; score: number; scoreMax: number }>>({});

  async function enregistrer(matiere: string, niv: string, score: number, scoreMax: number) {
    derniersResultats.current[matiere] = { niv, score, scoreMax };
    if (!session) {
      setSauvegardes((s) => ({ ...s, [matiere]: "invite" }));
      return;
    }
    setSauvegardes((s) => ({ ...s, [matiere]: "envoi" }));
    try {
      const rep = await fetch("/api/activite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "hebdo", matiere, niveau: niv, score, scoreMax }),
      });
      setSauvegardes((s) => ({ ...s, [matiere]: rep.ok ? "ok" : "erreur" }));
    } catch {
      setSauvegardes((s) => ({ ...s, [matiere]: "erreur" }));
    }
  }

  function renvoyer(matiere: string) {
    const d = derniersResultats.current[matiere];
    if (d) enregistrer(matiere, d.niv, d.score, d.scoreMax);
  }

  return (
    <div className="mt-6">
      <div className="mb-5 flex gap-1.5">
        {(["5eme", "4eme", "3eme"] as const).map((n) => (
          <button
            key={n}
            onClick={() => setNiveau(n)}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${niveau === n ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}
          >
            {n === "5eme" ? "5ème" : n === "4eme" ? "4ème" : "3ème"}
          </button>
        ))}
      </div>

      {series.length === 0 ? (
        <p className="rounded-2xl bg-slate-50 p-6 text-center text-slate-500">
          Les séries hebdomadaires pour ce niveau arrivent bientôt.
        </p>
      ) : (
        <div className="space-y-8">
          {series.map((s, i) => {
            const info = matiereInfo(s.matiere);
            return (
              <div key={i} className="card p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{info.emoji}</span>
                  <div>
                    <h2 className="font-bold text-slate-900">{info.nom}</h2>
                    <p className="text-sm text-slate-500">{s.titre}</p>
                  </div>
                </div>
                <Quiz
                  questions={s.questions}
                  filtrable={false}
                  onTermine={(sc, m) => enregistrer(s.matiere, s.niveau, sc, m)}
                />
                <EtatEnregistrement etat={sauvegardes[s.matiere] ?? null} onRenvoyer={() => renvoyer(s.matiere)} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
