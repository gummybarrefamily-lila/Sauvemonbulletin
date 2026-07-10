"use client";

import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { construireBilan } from "@/lib/bilan";
import { MATIERES } from "@content/curriculum";
import type { MatiereId, Niveau, Question } from "@content/types";

export function BilanVue() {
  const { data: session } = useSession();
  const [matiere, setMatiere] = useState<MatiereId>("maths");
  const [niveau, setNiveau] = useState<Niveau>("5eme");
  const [demarre, setDemarre] = useState(false);

  const blocs = useMemo(() => construireBilan(matiere, niveau), [matiere, niveau]);
  const [reponses, setReponses] = useState<Record<string, number | boolean>>({});
  const [termine, setTermine] = useState(false);
  const [message, setMessage] = useState("");

  const dispo = blocs.length > 0;

  function cle(bi: number, qi: number) {
    return `${bi}-${qi}`;
  }

  function estJuste(q: Question, val: number | boolean | undefined) {
    if (q.type === "qcm") return val === q.bonneReponse;
    return val === true;
  }

  async function terminer() {
    setTermine(true);
    // Calcul du score par chapitre.
    const details: Record<string, { score: number; max: number }> = {};
    let total = 0;
    let max = 0;
    blocs.forEach((b, bi) => {
      let s = 0;
      b.questions.forEach((q, qi) => {
        if (estJuste(q, reponses[cle(bi, qi)])) s++;
      });
      details[b.chapitreSlug] = { score: s, max: b.questions.length };
      total += s;
      max += b.questions.length;
    });

    if (session) {
      try {
        const r = await fetch("/api/activite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "bilan",
            matiere,
            niveau,
            score: total,
            scoreMax: max,
            detailsParChapitre: details,
          }),
        });
        const data = await r.json();
        if (data.revisionsProgrammees > 0) {
          setMessage(
            `📌 ${data.revisionsProgrammees} révision(s) personnalisée(s) ont été programmées pour renforcer tes points faibles. Retrouve-les sur ton tableau de bord.`
          );
        } else {
          setMessage("🎉 Excellent ! Tu maîtrises bien les chapitres, aucune révision supplémentaire nécessaire.");
        }
      } catch {
        setMessage("");
      }
    } else {
      setMessage("Connecte-toi pour programmer automatiquement tes révisions selon tes résultats.");
    }
  }

  const matieresDispo = MATIERES.filter((m) => !m.danseEtudes);

  if (!demarre) {
    return (
      <div className="mt-6 card p-6">
        <h2 className="font-bold text-slate-800">Choisis ta matière et ton niveau</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-700">Matière</label>
            <select
              value={matiere}
              onChange={(e) => setMatiere(e.target.value as MatiereId)}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5"
            >
              {matieresDispo.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.emoji} {m.nom}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Niveau</label>
            <select
              value={niveau}
              onChange={(e) => setNiveau(e.target.value as Niveau)}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5"
            >
              <option value="5eme">5ème</option>
              <option value="4eme">4ème</option>
              <option value="3eme">3ème</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => dispo && setDemarre(true)}
          disabled={!dispo}
          className="btn-primary mt-5 w-full disabled:opacity-50"
        >
          {dispo ? "Commencer le bilan" : "Pas encore de chapitre pour cette combinaison"}
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-5">
      {blocs.map((b, bi) => (
        <div key={bi} className="card p-5">
          <h3 className="mb-3 font-bold text-brand-800">{b.chapitreTitre}</h3>
          <div className="space-y-4">
            {b.questions.map((q, qi) => {
              const val = reponses[cle(bi, qi)];
              return (
                <div key={qi}>
                  <p className="font-medium text-slate-800">{q.question}</p>
                  {q.type === "qcm" ? (
                    <div className="mt-2 grid gap-2">
                      {q.choix.map((c, ci) => {
                        const choisi = val === ci;
                        const bon = ci === q.bonneReponse;
                        let cls = "border-slate-200 hover:border-brand-300";
                        if (termine && bon) cls = "border-green-400 bg-green-50";
                        else if (termine && choisi && !bon) cls = "border-red-400 bg-red-50";
                        else if (choisi) cls = "border-brand-500 bg-brand-50";
                        return (
                          <button
                            key={ci}
                            disabled={termine}
                            onClick={() => setReponses({ ...reponses, [cle(bi, qi)]: ci })}
                            className={`rounded-xl border px-4 py-2 text-left text-sm ${cls}`}
                          >
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <OuverteAuto
                      reponse={q.reponse}
                      termine={termine}
                      onJuger={(v) => setReponses({ ...reponses, [cle(bi, qi)]: v })}
                    />
                  )}
                  {termine && (
                    <p className="mt-2 rounded-lg bg-slate-50 p-2 text-sm text-slate-600">
                      Corrigé : {q.type === "ouverte" ? `${q.reponse}. ` : ""}
                      {q.explication}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {!termine ? (
        <button onClick={terminer} className="btn-primary w-full">
          Terminer le bilan
        </button>
      ) : (
        message && <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5 text-brand-900">{message}</div>
      )}
    </div>
  );
}

function OuverteAuto({
  reponse,
  termine,
  onJuger,
}: {
  reponse: string;
  termine: boolean;
  onJuger: (v: boolean) => void;
}) {
  const [montre, setMontre] = useState(false);
  return (
    <div className="mt-2">
      <textarea
        disabled={termine}
        rows={2}
        placeholder="Ta réponse…"
        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
      />
      {!termine && (
        <div className="mt-1">
          <button onClick={() => setMontre(!montre)} className="text-xs font-semibold text-brand-600">
            {montre ? "Cacher" : "Voir la réponse et m'auto-évaluer"}
          </button>
          {montre && (
            <div className="mt-1 rounded-lg bg-amber-50 p-2 text-sm text-amber-900">
              {reponse}
              <div className="mt-1 flex gap-2">
                <button onClick={() => onJuger(true)} className="rounded bg-green-600 px-2 py-0.5 text-xs font-semibold text-white">
                  J'avais juste
                </button>
                <button onClick={() => onJuger(false)} className="rounded border border-red-300 px-2 py-0.5 text-xs font-semibold text-red-700">
                  Faux
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
