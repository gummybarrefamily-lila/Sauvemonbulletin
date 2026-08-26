"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface ObjectifAffiche {
  id: string;
  type: string;
  cible: number;
  recompense: string;
  valeur: number;
  atteint: boolean;
}

const TYPES: Record<string, { label: string; unite: string }> = {
  automatismes: { label: "⚡ Streak automatismes", unite: "jours d'affilée" },
  dictee: { label: "✍️ Streak dictée", unite: "semaines d'affilée" },
  problemes: { label: "🧩 Streak problèmes", unite: "semaines d'affilée" },
  points: { label: "⭐ Bons points", unite: "points" },
};

export function ObjectifsClient({ objectifs }: { objectifs: ObjectifAffiche[] }) {
  const router = useRouter();
  const [type, setType] = useState("automatismes");
  const [cible, setCible] = useState(7);
  const [recompense, setRecompense] = useState("");
  const [envoi, setEnvoi] = useState(false);

  async function ajouter(e: React.FormEvent) {
    e.preventDefault();
    if (!recompense.trim()) return;
    setEnvoi(true);
    await fetch("/api/objectifs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, cible, recompense: recompense.trim() }),
    }).catch(() => {});
    setRecompense("");
    setEnvoi(false);
    router.refresh();
  }

  async function supprimer(id: string) {
    await fetch("/api/objectifs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).catch(() => {});
    router.refresh();
  }

  return (
    <div>
      <div className="space-y-3">
        {objectifs.length === 0 && (
          <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
            Aucun objectif pour l&apos;instant. Fixe-toi un défi et choisis ta récompense avec tes parents !
          </p>
        )}
        {objectifs.map((o) => {
          const info = TYPES[o.type] ?? { label: o.type, unite: "" };
          const pct = Math.min(100, Math.round((o.valeur / o.cible) * 100));
          return (
            <div key={o.id} className={`card p-4 ${o.atteint ? "border-green-300 bg-green-50" : ""}`}>
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-slate-800">
                  {o.atteint ? "🎉 " : ""}
                  {info.label} : {o.cible} {info.unite}
                </p>
                <button onClick={() => supprimer(o.id)} aria-label="Supprimer" className="text-slate-300 hover:text-red-500">
                  🗑️
                </button>
              </div>
              <p className="mt-1 text-sm text-slate-600">🎁 Récompense : {o.recompense}</p>
              <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${o.atteint ? "bg-green-500" : "bg-brand-500"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-slate-400">
                {o.valeur} / {o.cible} {o.atteint ? "— objectif atteint, félicitations !" : ""}
              </p>
            </div>
          );
        })}
      </div>

      <form onSubmit={ajouter} className="card mt-4 flex flex-wrap items-end gap-3 p-4">
        <div>
          <label className="text-xs font-semibold text-slate-500">Type de défi</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 block rounded-lg border border-slate-200 px-2 py-1.5 text-sm">
            <option value="automatismes">⚡ Automatismes (jours)</option>
            <option value="dictee">✍️ Dictée (semaines)</option>
            <option value="problemes">🧩 Problèmes (semaines)</option>
            <option value="points">⭐ Bons points</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-500">Cible</label>
          <input
            type="number"
            min={1}
            value={cible}
            onChange={(e) => setCible(Number(e.target.value))}
            className="mt-1 block w-24 rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
          />
        </div>
        <div className="min-w-[200px] flex-1">
          <label className="text-xs font-semibold text-slate-500">Récompense (à convenir avec tes parents)</label>
          <input
            value={recompense}
            onChange={(e) => setRecompense(e.target.value)}
            placeholder="Ex. : sortie cinéma, pizza party…"
            className="mt-1 block w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
          />
        </div>
        <button disabled={envoi || !recompense.trim()} className="btn-primary px-4 py-2 text-sm disabled:opacity-40">
          Ajouter
        </button>
      </form>
    </div>
  );
}
