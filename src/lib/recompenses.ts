import { prisma } from "./prisma";

/**
 * Streaks et bons points, calculés à partir du journal d'activités :
 * - automatismes : jours consécutifs (le jour courant compte s'il est fait,
 *   sinon la streak reste vivante jusqu'à la fin de la journée).
 * - dictée / problèmes : semaines consécutives (lundi-dimanche).
 * Bons points : 2 par jour d'automatismes, 5 par dictée, 5 par série de
 * problèmes, +10 de bonus tous les 7 jours de streak d'automatismes.
 */

export interface Recompenses {
  streakAutomatismes: number;
  streakDictee: number;
  streakProblemes: number;
  automatismesFaitAujourdhui: boolean;
  dicteeFaiteCetteSemaine: boolean;
  problemesFaitsCetteSemaine: boolean;
  bonsPoints: number;
}

function cleJour(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Clé de semaine "lundi de la semaine" (AAAA-MM-JJ). */
function cleSemaine(d: Date): string {
  const x = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const jour = (x.getUTCDay() + 6) % 7; // 0 = lundi
  x.setUTCDate(x.getUTCDate() - jour);
  return x.toISOString().slice(0, 10);
}

function jourPrecedent(cle: string): string {
  const d = new Date(`${cle}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function semainePrecedente(cle: string): string {
  const d = new Date(`${cle}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 7);
  return cleSemaine(d);
}

/** Longueur de la série consécutive se terminant aujourd'hui (ou hier si aujourd'hui pas encore fait). */
function streakJours(jours: Set<string>, aujourdhui: string): number {
  let depart = jours.has(aujourdhui) ? aujourdhui : jourPrecedent(aujourdhui);
  let n = 0;
  while (jours.has(depart)) {
    n++;
    depart = jourPrecedent(depart);
  }
  return n;
}

function streakSemaines(semaines: Set<string>, semaineCourante: string): number {
  let depart = semaines.has(semaineCourante) ? semaineCourante : semainePrecedente(semaineCourante);
  let n = 0;
  while (semaines.has(depart)) {
    n++;
    depart = semainePrecedente(depart);
  }
  return n;
}

export async function recompensesUtilisateur(userId: string): Promise<Recompenses> {
  const activites = await prisma.activite.findMany({
    where: { userId, type: { in: ["automatismes", "dictee", "problemes"] } },
    select: { type: true, date: true },
  });

  const joursAutomatismes = new Set<string>();
  const semainesDictee = new Set<string>();
  const semainesProblemes = new Set<string>();
  let nbDictees = 0;
  let nbSeriesProblemes = 0;

  for (const a of activites) {
    if (a.type === "automatismes") joursAutomatismes.add(cleJour(a.date));
    else if (a.type === "dictee") {
      semainesDictee.add(cleSemaine(a.date));
      nbDictees++;
    } else if (a.type === "problemes") {
      semainesProblemes.add(cleSemaine(a.date));
      nbSeriesProblemes++;
    }
  }

  const maintenant = new Date();
  const aujourdhui = cleJour(maintenant);
  const semaineCourante = cleSemaine(maintenant);

  const streakAutomatismes = streakJours(joursAutomatismes, aujourdhui);
  const bonsPoints =
    joursAutomatismes.size * 2 +
    nbDictees * 5 +
    nbSeriesProblemes * 5 +
    Math.floor(streakAutomatismes / 7) * 10;

  return {
    streakAutomatismes,
    streakDictee: streakSemaines(semainesDictee, semaineCourante),
    streakProblemes: streakSemaines(semainesProblemes, semaineCourante),
    automatismesFaitAujourdhui: joursAutomatismes.has(aujourdhui),
    dicteeFaiteCetteSemaine: semainesDictee.has(semaineCourante),
    problemesFaitsCetteSemaine: semainesProblemes.has(semaineCourante),
    bonsPoints,
  };
}

/** Valeur courante d'un objectif selon son type. */
export function valeurObjectif(r: Recompenses, type: string): number {
  switch (type) {
    case "automatismes":
      return r.streakAutomatismes;
    case "dictee":
      return r.streakDictee;
    case "problemes":
      return r.streakProblemes;
    case "points":
      return r.bonsPoints;
    default:
      return 0;
  }
}
