"use client";

import { useState } from "react";

interface Partie {
  titre: string;
  enonce: string[];
  corrige: string[];
}

export function SujetBrevet({ parties }: { parties: Partie[] }) {
  const [corriges, setCorriges] = useState<Record<number, boolean>>({});
  const [toutMontre, setToutMontre] = useState(false);

  function basculerTout() {
    const v = !toutMontre;
    setToutMontre(v);
    const map: Record<number, boolean> = {};
    parties.forEach((_, i) => (map[i] = v));
    setCorriges(map);
  }

  return (
    <div className="mt-6">
      <div className="mb-4 flex justify-end">
        <button onClick={basculerTout} className="btn-ghost text-sm">
          {toutMontre ? "Masquer tous les corrigés" : "Afficher tous les corrigés"}
        </button>
      </div>
      <div className="space-y-5">
        {parties.map((p, i) => (
          <div key={i} className="card overflow-hidden">
            <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
              <h2 className="font-bold text-slate-900">{p.titre}</h2>
            </div>
            <div className="p-5">
              <div className="space-y-1.5 text-slate-700">
                {p.enonce.map((ligne, k) => (
                  <p key={k} className={ligne.trim() === "" ? "h-2" : ""}>
                    {ligne}
                  </p>
                ))}
              </div>
              <button
                onClick={() => setCorriges({ ...corriges, [i]: !corriges[i] })}
                className="mt-4 text-sm font-semibold text-brand-600 hover:underline"
              >
                {corriges[i] ? "Cacher le corrigé" : "Voir le corrigé"}
              </button>
              {corriges[i] && (
                <div className="mt-3 space-y-1.5 rounded-xl bg-green-50 p-4 text-sm text-green-900">
                  <p className="font-bold">Corrigé :</p>
                  {p.corrige.map((ligne, k) => (
                    <p key={k} className={ligne.trim() === "" ? "h-2" : ""}>
                      {ligne}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
