"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface GroupeAffiche {
  id: string;
  nom: string;
  code: string;
  membres: {
    prenom: string;
    estMoi: boolean;
    streakAutomatismes: number;
    bonsPoints: number;
  }[];
}

export function GroupesClient({ groupes }: { groupes: GroupeAffiche[] }) {
  const router = useRouter();
  const [nom, setNom] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  async function action(corps: object) {
    setMessage(null);
    const rep = await fetch("/api/groupe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(corps),
    }).catch(() => null);
    if (rep && !rep.ok) {
      const data = (await rep.json().catch(() => ({}))) as { erreur?: string };
      setMessage(data.erreur ?? "Une erreur est survenue.");
    }
    router.refresh();
  }

  return (
    <div>
      {groupes.map((g) => (
        <div key={g.id} className="card mb-4 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-bold text-slate-900">👥 {g.nom}</h3>
            <div className="flex items-center gap-3 text-sm">
              <span className="rounded-lg bg-brand-50 px-2 py-1 font-mono font-bold text-brand-700">
                Code : {g.code}
              </span>
              <button onClick={() => action({ action: "quitter", groupeId: g.id })} className="text-slate-400 hover:text-red-500">
                Quitter
              </button>
            </div>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Partage le code avec tes amis pour qu&apos;ils rejoignent le groupe.
          </p>
          <table className="mt-3 w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                <th className="py-1">#</th>
                <th className="py-1">Prénom</th>
                <th className="py-1 text-center">🔥 Streak</th>
                <th className="py-1 text-center">⭐ Points</th>
              </tr>
            </thead>
            <tbody>
              {g.membres.map((m, i) => (
                <tr key={i} className={`border-t border-slate-100 ${m.estMoi ? "bg-brand-50/60 font-semibold" : ""}`}>
                  <td className="py-1.5">{i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}</td>
                  <td className="py-1.5">
                    {m.prenom}
                    {m.estMoi ? " (toi)" : ""}
                  </td>
                  <td className="py-1.5 text-center">{m.streakAutomatismes} j</td>
                  <td className="py-1.5 text-center">{m.bonsPoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className="grid gap-3 sm:grid-cols-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (nom.trim()) action({ action: "creer", nom: nom.trim() });
            setNom("");
          }}
          className="card p-4"
        >
          <h4 className="font-bold text-slate-800">Créer un groupe</h4>
          <input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Nom du groupe (ex. Les cracks de 5ème B)"
            className="mt-2 w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
          />
          <button disabled={!nom.trim()} className="btn-primary mt-2 px-4 py-1.5 text-sm disabled:opacity-40">
            Créer
          </button>
        </form>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (code.trim()) action({ action: "rejoindre", code: code.trim() });
            setCode("");
          }}
          className="card p-4"
        >
          <h4 className="font-bold text-slate-800">Rejoindre un groupe</h4>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code d'invitation (ex. K7X2PM)"
            className="mt-2 w-full rounded-lg border border-slate-200 px-2 py-1.5 font-mono text-sm uppercase"
          />
          <button disabled={!code.trim()} className="btn-primary mt-2 px-4 py-1.5 text-sm disabled:opacity-40">
            Rejoindre
          </button>
        </form>
      </div>

      {message && <p className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600">{message}</p>}
    </div>
  );
}
