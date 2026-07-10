"use client";

import { useState } from "react";
import type { Examen as ExamenType } from "@content/types";
import { Quiz } from "./Quiz";

export function Examen({
  examen,
  onTermine,
}: {
  examen: ExamenType;
  onTermine?: (score: number, max: number) => void;
}) {
  const [demarre, setDemarre] = useState(false);

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50 p-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{examen.titre}</h3>
          <p className="text-sm text-slate-500">
            ⏱️ {examen.dureeMinutes} min · {examen.questions.length} questions
          </p>
        </div>
        {!demarre && (
          <button onClick={() => setDemarre(true)} className="btn-primary">
            Commencer l'examen
          </button>
        )}
      </div>
      {demarre && (
        <div className="p-5">
          <Quiz questions={examen.questions} filtrable={false} onTermine={onTermine} />
        </div>
      )}
    </div>
  );
}
