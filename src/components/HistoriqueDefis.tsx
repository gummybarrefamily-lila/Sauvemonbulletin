"use client";

export interface PeriodeAffiche {
  /** Lundi de la semaine (AAAA-MM-JJ) ou mois (AAAA-MM). */
  cle: string;
  progres: { automatismes: number; dictees: number; problemes: number; fondamentaux: number; ecritures: number };
  reussi: boolean;
}

const COLONNES: { cle: "automatismes" | "dictees" | "problemes" | "fondamentaux" | "ecritures"; emoji: string; titre: string }[] = [
  { cle: "automatismes", emoji: "⚡", titre: "Automatismes (jours)" },
  { cle: "dictees", emoji: "✍️", titre: "Dictées" },
  { cle: "problemes", emoji: "🧩", titre: "Problèmes" },
  { cle: "fondamentaux", emoji: "📅", titre: "Fondamentaux" },
  { cle: "ecritures", emoji: "📝", titre: "Rédactions" },
];

function labelSemaine(cle: string): string {
  const d = new Date(`${cle}T12:00:00Z`);
  return `Sem. du ${d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}`;
}

function labelMois(cle: string): string {
  const [a, m] = cle.split("-").map(Number);
  const label = new Date(a, m - 1, 15).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function total(p: PeriodeAffiche["progres"]): number {
  return p.automatismes + p.dictees + p.problemes + p.fondamentaux + p.ecritures;
}

/** Petit graphique en barres : activités validées par semaine (ordre chronologique). */
function Graphique({ semaines }: { semaines: PeriodeAffiche[] }) {
  const chrono = [...semaines].reverse().slice(-12);
  if (chrono.length < 2) return null;
  const max = Math.max(1, ...chrono.map((s) => total(s.progres)));
  return (
    <div className="card p-4">
      <p className="mb-3 text-sm font-semibold text-slate-700">📈 Activités validées par semaine</p>
      <div className="flex items-end gap-1.5" style={{ height: 96 }}>
        {chrono.map((s, i) => {
          const t = total(s.progres);
          const courante = i === chrono.length - 1;
          return (
            <div key={s.cle} className="group relative flex h-full flex-1 flex-col justify-end" title={`${labelSemaine(s.cle)} : ${t} activité${t > 1 ? "s" : ""}`}>
              <div
                className={`w-full rounded-t-md ${courante ? "bg-brand-600" : s.reussi ? "bg-green-400" : "bg-slate-200"}`}
                style={{ height: `${Math.max(4, Math.round((t / max) * 100))}%` }}
              />
              <span className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 opacity-0 group-hover:opacity-100">
                {t}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-slate-400">
        <span>{labelSemaine(chrono[0].cle)}</span>
        <span className="font-semibold text-brand-600">Cette semaine</span>
      </div>
      <p className="mt-2 text-[11px] text-slate-400">
        <span className="mr-3 inline-flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm bg-green-400" /> défi de la semaine réussi</span>
        <span className="inline-flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm bg-brand-600" /> semaine en cours</span>
      </p>
    </div>
  );
}

function TableHistorique({ periodes, label }: { periodes: PeriodeAffiche[]; label: (cle: string) => string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-400">
            <th className="px-3 py-2">Période</th>
            {COLONNES.map((c) => (
              <th key={c.cle} className="px-2 py-2 text-center" title={c.titre}>{c.emoji}</th>
            ))}
            <th className="px-3 py-2 text-center">Défi</th>
          </tr>
        </thead>
        <tbody>
          {periodes.map((p) => (
            <tr key={p.cle} className="border-b border-slate-100">
              <td className="px-3 py-2 font-medium text-slate-700">{label(p.cle)}</td>
              {COLONNES.map((c) => (
                <td key={c.cle} className={`px-2 py-2 text-center ${p.progres[c.cle] > 0 ? "font-semibold text-slate-700" : "text-slate-300"}`}>
                  {p.progres[c.cle]}
                </td>
              ))}
              <td className="px-3 py-2 text-center">{p.reussi ? "🎉" : <span className="text-slate-300">—</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Historique des défis : seule la période en cours est visible en haut de page ;
 * les semaines et mois passés se déplient ici (avec un graphique d'évolution).
 */
export function HistoriqueDefis({ semaines, mois }: { semaines: PeriodeAffiche[]; mois: PeriodeAffiche[] }) {
  const semainesPassees = semaines.slice(1);
  const moisPasses = mois.slice(1);

  return (
    <div className="space-y-4">
      <Graphique semaines={semaines} />

      {semainesPassees.length === 0 && moisPasses.length === 0 ? (
        <p className="text-sm text-slate-400">L&apos;historique apparaîtra ici dès ta deuxième semaine d&apos;activité.</p>
      ) : (
        <>
          {semainesPassees.length > 0 && (
            <details className="card p-0">
              <summary className="cursor-pointer select-none rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                🗓️ Semaines précédentes ({semainesPassees.length})
              </summary>
              <div className="border-t border-slate-100 px-2 pb-2">
                <TableHistorique periodes={semainesPassees} label={labelSemaine} />
              </div>
            </details>
          )}
          {moisPasses.length > 0 && (
            <details className="card p-0">
              <summary className="cursor-pointer select-none rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                📆 Mois précédents ({moisPasses.length})
              </summary>
              <div className="border-t border-slate-100 px-2 pb-2">
                <TableHistorique periodes={moisPasses} label={labelMois} />
              </div>
            </details>
          )}
        </>
      )}
    </div>
  );
}
