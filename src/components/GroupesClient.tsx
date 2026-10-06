"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface MembreAffiche {
  prenom: string;
  estMoi: boolean;
  auto: number;
  dictee: number;
  problemes: number;
  fondamentaux: number;
  moyenne: number;
}

export interface EvenementAffiche {
  activiteId: string;
  prenom: string;
  estMoi: boolean;
  texte: string; // ex : a complété le chapitre « … » en Physique-Chimie
  quand: string; // ex : "il y a 2 jours"
  reactions: { auteur: string; message: string }[];
}

export interface GroupeAffiche {
  id: string;
  nom: string;
  code: string;
  winner: string | null;
  membres: MembreAffiche[];
  evenements: EvenementAffiche[];
}

const REACTIONS = ["👏 Bien joué !", "🎉 Félicitations !", "🔥 Trop fort !", "💪 Impressionnant !", "😅 Je te bats la prochaine fois !"];

export function GroupesClient({ groupes }: { groupes: GroupeAffiche[] }) {
  const router = useRouter();
  const [nom, setNom] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [reactionOuverte, setReactionOuverte] = useState<string | null>(null);

  async function action(corps: object, url = "/api/groupe") {
    setMessage(null);
    const rep = await fetch(url, {
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
              <span className="rounded-lg bg-brand-50 px-2 py-1 font-mono font-bold text-brand-700">Code : {g.code}</span>
              <button onClick={() => action({ action: "quitter", groupeId: g.id })} className="text-slate-400 hover:text-red-500">
                Quitter
              </button>
            </div>
          </div>

          {g.winner && (
            <p className="mt-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900">
              👑 Winner of the week : {g.winner} — meilleure streak moyenne du groupe !
            </p>
          )}

          {/* Leaderboard sur les 4 activités */}
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[430px] text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                  <th className="py-1">#</th>
                  <th className="py-1">Prénom</th>
                  <th className="py-1 text-center">⚡ Auto</th>
                  <th className="py-1 text-center">✍️ Dictée</th>
                  <th className="py-1 text-center">🧩 Probl.</th>
                  <th className="py-1 text-center">📅 Fondam.</th>
                  <th className="py-1 text-center">Moy.</th>
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
                    <td className="py-1.5 text-center">{m.auto} j</td>
                    <td className="py-1.5 text-center">{m.dictee} sem</td>
                    <td className="py-1.5 text-center">{m.problemes} sem</td>
                    <td className="py-1.5 text-center">{m.fondamentaux} sem</td>
                    <td className="py-1.5 text-center font-bold">{m.moyenne}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fil d'activité du groupe */}
          {g.evenements.length > 0 && (
            <div className="mt-4 border-t border-slate-100 pt-3">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Dernières réussites</p>
              <ul className="mt-2 space-y-3">
                {g.evenements.map((e) => (
                  <li key={e.activiteId} className="rounded-xl bg-slate-50 p-3">
                    <p className="text-sm text-slate-700">
                      🎓 <strong>{e.prenom}</strong> {e.texte}
                      <span className="ml-1 text-xs text-slate-400">· {e.quand}</span>
                    </p>
                    {e.reactions.length > 0 && (
                      <p className="mt-1.5 flex flex-wrap gap-1.5">
                        {e.reactions.map((r, k) => (
                          <span key={k} className="rounded-full bg-white px-2 py-0.5 text-xs text-slate-600 shadow-sm">
                            {r.message} <span className="text-slate-400">— {r.auteur}</span>
                          </span>
                        ))}
                      </p>
                    )}
                    {!e.estMoi && (
                      <div className="mt-1.5">
                        {reactionOuverte === e.activiteId ? (
                          <div className="flex flex-wrap gap-1.5">
                            {REACTIONS.map((r) => (
                              <button
                                key={r}
                                onClick={() => {
                                  setReactionOuverte(null);
                                  action({ activiteId: e.activiteId, message: r }, "/api/reaction");
                                }}
                                className="rounded-full border border-brand-200 bg-white px-2 py-0.5 text-xs text-brand-700 hover:bg-brand-50"
                              >
                                {r}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <button
                            onClick={() => setReactionOuverte(e.activiteId)}
                            className="text-xs font-semibold text-brand-600 hover:underline"
                          >
                            💬 Réagir
                          </button>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
