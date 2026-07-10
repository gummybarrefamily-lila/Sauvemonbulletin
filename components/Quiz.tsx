"use client";

import { useState } from "react";
import type { Question, Difficulte } from "@content/types";
import { AudioPlayer } from "./AudioPlayer";

const COULEUR_DIFF: Record<Difficulte, string> = {
  facile: "bg-green-100 text-green-800",
  moyen: "bg-amber-100 text-amber-800",
  avance: "bg-red-100 text-red-800",
};
const LABEL_DIFF: Record<Difficulte, string> = {
  facile: "Facile",
  moyen: "Moyen",
  avance: "Avancé",
};

/**
 * Quiz interactif : QCM auto-corrigés + questions ouvertes avec corrigé révélé.
 * `onTermine(score, max)` remonte le résultat pour l'enregistrer côté serveur.
 */
export function Quiz({
  questions,
  titre,
  filtrable = true,
  onTermine,
}: {
  questions: Question[];
  titre?: string;
  filtrable?: boolean;
  onTermine?: (score: number, max: number) => void;
}) {
  const [filtre, setFiltre] = useState<Difficulte | "tous">("tous");
  const liste = filtre === "tous" ? questions : questions.filter((q) => q.difficulte === filtre);

  return (
    <div className="space-y-4">
      {(titre || filtrable) && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          {titre && <h2 className="text-xl font-bold text-slate-800">{titre}</h2>}
          {filtrable && (
            <div className="flex gap-1.5">
              {(["tous", "facile", "moyen", "avance"] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setFiltre(d)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                    filtre === d ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {d === "tous" ? "Tous" : LABEL_DIFF[d]}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      <QuizInterne key={filtre} questions={liste} onTermine={onTermine} />
    </div>
  );
}

function QuizInterne({
  questions,
  onTermine,
}: {
  questions: Question[];
  onTermine?: (score: number, max: number) => void;
}) {
  const [reponses, setReponses] = useState<Record<number, number | boolean>>({});
  const [termine, setTermine] = useState(false);

  function score() {
    let s = 0;
    questions.forEach((q, i) => {
      if (q.type === "qcm" && reponses[i] === q.bonneReponse) s++;
      if (q.type === "ouverte" && reponses[i] === true) s++;
    });
    return s;
  }

  return (
    <div className="space-y-4">
      {questions.map((q, i) => (
        <div key={i} className="card p-5">
          <div className="mb-2 flex items-start justify-between gap-3">
            <p className="font-semibold text-slate-800">
              <span className="mr-2 text-slate-400">{i + 1}.</span>
              {q.question}
            </p>
            <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${COULEUR_DIFF[q.difficulte]}`}>
              {LABEL_DIFF[q.difficulte]}
            </span>
          </div>

          {q.type === "qcm" ? (
            <div className="mt-3 grid gap-2">
              {q.choix.map((choix, j) => {
                const choisi = reponses[i] === j;
                const estBon = j === q.bonneReponse;
                let cls = "border-slate-200 hover:border-brand-300";
                if (termine && estBon) cls = "border-green-400 bg-green-50";
                else if (termine && choisi && !estBon) cls = "border-red-400 bg-red-50";
                else if (choisi) cls = "border-brand-500 bg-brand-50";
                return (
                  <button
                    key={j}
                    disabled={termine}
                    onClick={() => setReponses({ ...reponses, [i]: j })}
                    className={`rounded-xl border px-4 py-2.5 text-left text-sm transition ${cls}`}
                  >
                    {choix}
                    {termine && estBon && " ✅"}
                    {termine && choisi && !estBon && " ❌"}
                  </button>
                );
              })}
            </div>
          ) : (
            <OuverteBlock
              q={q}
              termine={termine}
              juste={reponses[i] === true}
              onJuger={(v) => setReponses({ ...reponses, [i]: v })}
            />
          )}

          {termine && (
            <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
              <strong className="text-slate-700">Corrigé :</strong>{" "}
              {q.type === "ouverte" ? `${q.reponse}. ` : ""}
              {q.explication}
            </div>
          )}
        </div>
      ))}

      {!termine ? (
        <button
          onClick={() => {
            setTermine(true);
            onTermine?.(score(), questions.length);
          }}
          className="btn-primary w-full"
        >
          Voir les corrigés
        </button>
      ) : (
        <div className="card flex items-center justify-between p-5">
          <p className="text-lg font-bold">
            Score : <span className="text-brand-700">{score()}</span> / {questions.length}
          </p>
          <button
            onClick={() => {
              setReponses({});
              setTermine(false);
            }}
            className="btn-ghost"
          >
            Recommencer
          </button>
        </div>
      )}
    </div>
  );
}

function OuverteBlock({
  q,
  termine,
  juste,
  onJuger,
}: {
  q: Extract<Question, { type: "ouverte" }>;
  termine: boolean;
  juste: boolean;
  onJuger: (v: boolean) => void;
}) {
  const [montre, setMontre] = useState(false);
  return (
    <div className="mt-3">
      <textarea
        disabled={termine}
        placeholder="Écris ta réponse ici…"
        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        rows={2}
      />
      {!termine && (
        <div className="mt-2 flex items-center gap-2">
          <button onClick={() => setMontre(!montre)} className="text-xs font-semibold text-brand-600 hover:underline">
            {montre ? "Cacher" : "Voir la réponse attendue"}
          </button>
          {montre && (
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <AudioPlayer texte={q.reponse} compact label="Lire" />
            </span>
          )}
        </div>
      )}
      {montre && !termine && (
        <div className="mt-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
          {q.reponse}
          <div className="mt-2 flex gap-2">
            <button onClick={() => onJuger(true)} className={`rounded-lg px-3 py-1 text-xs font-semibold ${juste ? "bg-green-600 text-white" : "bg-white text-green-700 border border-green-300"}`}>
              J'avais juste ✅
            </button>
            <button onClick={() => onJuger(false)} className="rounded-lg border border-red-300 bg-white px-3 py-1 text-xs font-semibold text-red-700">
              J'avais faux
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
