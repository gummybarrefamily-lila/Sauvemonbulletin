"use client";

import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { serieDuJour } from "@/lib/automatismes";
import type { Niveau } from "@content/types";

export function AutomatismesDuJour({ dateISO }: { dateISO: string }) {
  const { data: session } = useSession();
  const [niveau, setNiveau] = useState<Niveau>("5eme");
  const serie = useMemo(() => serieDuJour(dateISO, niveau), [dateISO, niveau]);
  const [reponses, setReponses] = useState<Record<number, string>>({});
  const [corrige, setCorrige] = useState(false);
  const [enregistre, setEnregistre] = useState(false);

  function normaliser(s: string) {
    return s.replace(/\s/g, "").replace(",", ".").toLowerCase();
  }

  function score() {
    return serie.reduce((acc, a, i) => acc + (normaliser(reponses[i] ?? "") === normaliser(a.reponse) ? 1 : 0), 0);
  }

  async function valider() {
    setCorrige(true);
    if (session && !enregistre) {
      setEnregistre(true);
      try {
        await fetch("/api/activite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "automatismes", matiere: "maths", niveau, score: score(), scoreMax: serie.length }),
        });
      } catch {
        /* silencieux */
      }
    }
  }

  return (
    <div className="mt-6">
      <div className="mb-4 flex gap-1.5">
        {(["5eme", "4eme", "3eme"] as Niveau[]).map((n) => (
          <button
            key={n}
            onClick={() => {
              setNiveau(n);
              setReponses({});
              setCorrige(false);
              setEnregistre(false);
            }}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${niveau === n ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}
          >
            {n === "5eme" ? "5ème" : n === "4eme" ? "4ème" : "3ème"}
          </button>
        ))}
      </div>

      <div className="space-y-2.5">
        {serie.map((a, i) => {
          const bon = corrige && normaliser(reponses[i] ?? "") === normaliser(a.reponse);
          const faux = corrige && !bon;
          return (
            <div key={i} className="card p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-slate-800">
                  <span className="mr-2 text-slate-400">{i + 1}.</span>
                  {a.question}
                </p>
                <input
                  value={reponses[i] ?? ""}
                  onChange={(e) => setReponses({ ...reponses, [i]: e.target.value })}
                  disabled={corrige}
                  className={`w-28 rounded-lg border px-3 py-1.5 text-center focus:outline-none ${
                    bon ? "border-green-400 bg-green-50" : faux ? "border-red-400 bg-red-50" : "border-slate-300 focus:border-brand-500"
                  }`}
                  placeholder="?"
                />
              </div>
              {corrige && (
                <p className="mt-2 text-sm text-slate-500">
                  {bon ? "✅ " : `❌ Réponse : ${a.reponse}. `}
                  {a.explication}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {!corrige ? (
        <button onClick={valider} className="btn-primary mt-5 w-full">
          Vérifier mes réponses
        </button>
      ) : (
        <div className="card mt-5 flex items-center justify-between p-5">
          <p className="text-lg font-bold">
            Score : <span className="text-brand-700">{score()}</span> / {serie.length}
          </p>
          <button
            onClick={() => {
              setReponses({});
              setCorrige(false);
            }}
            className="btn-ghost"
          >
            Refaire
          </button>
        </div>
      )}
      {!session && <p className="mt-3 text-center text-xs text-slate-400">Connecte-toi pour enregistrer tes résultats.</p>}
    </div>
  );
}
