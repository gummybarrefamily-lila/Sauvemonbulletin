"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface DefiAffiche {
  periode: "semaine" | "mois";
  cibles: { automatismes: number; dictees: number; problemes: number; fondamentaux: number; recompense: string };
  progres: { automatismes: number; dictees: number; problemes: number; fondamentaux: number };
  reussi: boolean;
}

const LIGNES: { cle: "automatismes" | "dictees" | "problemes" | "fondamentaux"; label: string }[] = [
  { cle: "automatismes", label: "⚡ Automatismes (jours)" },
  { cle: "dictees", label: "✍️ Dictées" },
  { cle: "problemes", label: "🧩 Problèmes de maths" },
  { cle: "fondamentaux", label: "📅 Fondamentaux hebdo" },
];

function CarteDefi({ defi }: { defi: DefiAffiche }) {
  const router = useRouter();
  const [edition, setEdition] = useState(false);
  const [cibles, setCibles] = useState(defi.cibles);
  const [envoi, setEnvoi] = useState(false);

  async function sauver() {
    setEnvoi(true);
    await fetch("/api/defis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ periode: defi.periode, ...cibles }),
    }).catch(() => {});
    setEnvoi(false);
    setEdition(false);
    router.refresh();
  }

  const titre = defi.periode === "semaine" ? "🗓️ Défi de la semaine" : "📆 Défi du mois";

  return (
    <div className={`card p-5 ${defi.reussi ? "border-green-300 bg-green-50" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-slate-900">
          {titre} {defi.reussi && "— 🎉 réussi !"}
        </h3>
        {!edition ? (
          <button onClick={() => setEdition(true)} className="text-sm font-semibold text-brand-600 hover:underline">
            Modifier
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={() => { setEdition(false); setCibles(defi.cibles); }} className="text-sm text-slate-400">
              Annuler
            </button>
            <button onClick={sauver} disabled={envoi} className="btn-primary px-3 py-1 text-sm disabled:opacity-40">
              Enregistrer
            </button>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-2.5">
        {LIGNES.map((l) => {
          const cible = cibles[l.cle];
          const fait = defi.progres[l.cle];
          const pct = cible > 0 ? Math.min(100, Math.round((fait / cible) * 100)) : 100;
          return (
            <div key={l.cle}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">{l.label}</span>
                {edition ? (
                  <input
                    type="number"
                    min={0}
                    value={cible}
                    onChange={(e) => setCibles({ ...cibles, [l.cle]: Number(e.target.value) })}
                    className="w-16 rounded-lg border border-slate-200 px-2 py-0.5 text-right text-sm"
                  />
                ) : (
                  <span className={`font-bold ${fait >= cible ? "text-green-600" : "text-slate-500"}`}>
                    {fait} / {cible} {fait >= cible && "✓"}
                  </span>
                )}
              </div>
              {!edition && (
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${fait >= cible ? "bg-green-500" : "bg-brand-500"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        {edition ? (
          <div>
            <label className="text-xs font-semibold text-slate-500">🎁 Récompense promise (visible dans l&apos;email aux parents)</label>
            <input
              value={cibles.recompense}
              onChange={(e) => setCibles({ ...cibles, recompense: e.target.value })}
              placeholder="Ex. : sortie cinéma, soirée pizza…"
              className="mt-1 w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
            />
          </div>
        ) : (
          <p className="text-sm text-slate-600">
            🎁 Récompense : {defi.cibles.recompense ? <strong>{defi.cibles.recompense}</strong> : <span className="text-slate-400">à définir avec tes parents (bouton Modifier)</span>}
          </p>
        )}
      </div>
    </div>
  );
}

export function DefisClient({ defis }: { defis: DefiAffiche[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {defis.map((d) => (
        <CarteDefi key={d.periode} defi={d} />
      ))}
    </div>
  );
}
