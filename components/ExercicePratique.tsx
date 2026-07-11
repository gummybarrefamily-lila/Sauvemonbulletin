"use client";

import { useState } from "react";

export function ExercicePratique({
  numero,
  consigne,
  corrige,
}: {
  numero: number;
  consigne: string;
  corrige: string;
}) {
  const [montre, setMontre] = useState(false);
  return (
    <div className="card p-5">
      <p className="font-semibold text-slate-800">
        <span className="mr-2 text-slate-400">Exercice {numero}.</span>
        {consigne}
      </p>
      <textarea
        placeholder="Rédige ta réponse ici…"
        rows={3}
        className="mt-3 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
      />
      <button
        onClick={() => setMontre(!montre)}
        className="mt-2 text-sm font-semibold text-brand-600 hover:underline"
      >
        {montre ? "Cacher le corrigé" : "Voir le corrigé modèle"}
      </button>
      {montre && (
        <div className="mt-2 whitespace-pre-wrap rounded-xl bg-green-50 p-4 text-sm text-green-900">
          <strong>Corrigé modèle :</strong>
          {"\n"}
          {corrige}
        </div>
      )}
    </div>
  );
}
