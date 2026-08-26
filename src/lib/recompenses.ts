import { prisma } from "./prisma";

/**
 * Streaks et défis, calculés à partir du journal d'activités.
 * RÈGLE DES 70 % : une activité ne compte (streaks et défis) que si
 * l'élève a obtenu au moins 70 % — sinon il doit la refaire pour valider.
 * - automatismes : jours consécutifs.
 * - dictée / problèmes / fondamentaux hebdo : semaines consécutives (lundi-dimanche).
 */

export interface Streaks {
  auto: number;
  dictee: number;
  problemes: number;
  fondamentaux: number;
  autoFaitAujourdhui: boolean;
  dicteeFaiteCetteSemaine: boolean;
  problemesFaitsCetteSemaine: boolean;
  fondamentauxFaitsCetteSemaine: boolean;
  /** Score moyen de streak (auto ramené en semaines), pour le Winner of the week. */
  moyenne: number;
}

export interface ProgresDefi {
  automatismes: number;
  dictees: number;
  problemes: number;
  fondamentaux: number;
}

export interface CiblesDefi {
  automatismes: number;
  dictees: number;
  problemes: number;
  fondamentaux: number;
  recompense: string;
}

export const DEFI_SEMAINE_DEFAUT: CiblesDefi = {
  automatismes: 5,
  dictees: 1,
  problemes: 1,
  fondamentaux: 1,
  recompense: "",
};

export const DEFI_MOIS_DEFAUT: CiblesDefi = {
  automatismes: 20,
  dictees: 4,
  problemes: 4,
  fondamentaux: 4,
  recompense: "",
};

function cleJour(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Clé de semaine = lundi de la semaine (AAAA-MM-JJ). */
function cleSemaine(d: Date): string {
  const x = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const jour = (x.getUTCDay() + 6) % 7; // 0 = lundi
  x.setUTCDate(x.getUTCDate() - jour);
  return x.toISOString().slice(0, 10);
}

function cleMois(d: Date): string {
  return d.toISOString().slice(0, 7); // AAAA-MM
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

interface Donnees {
  streaks: Streaks;
  semaine: ProgresDefi;
  mois: ProgresDefi;
}

export async function donneesRecompenses(userId: string): Promise<Donnees> {
  const activites = await prisma.activite.findMany({
    where: { userId, type: { in: ["automatismes", "dictee", "problemes", "hebdo"] } },
    select: { type: true, date: true, score: true, scoreMax: true },
  });

  const maintenant = new Date();
  const aujourdhui = cleJour(maintenant);
  const semaineCourante = cleSemaine(maintenant);
  const moisCourant = cleMois(maintenant);

  const joursAuto = new Set<string>();
  const semDictee = new Set<string>();
  const semProblemes = new Set<string>();
  const semFondamentaux = new Set<string>();
  const semaine: ProgresDefi = { automatismes: 0, dictees: 0, problemes: 0, fondamentaux: 0 };
  const mois: ProgresDefi = { automatismes: 0, dictees: 0, problemes: 0, fondamentaux: 0 };
  const joursAutoSemaine = new Set<string>();
  const joursAutoMois = new Set<string>();

  for (const a of activites) {
    // Règle des 70 % : en dessous, l'activité ne valide rien.
    if (a.scoreMax <= 0 || a.score / a.scoreMax < 0.7) continue;
    const jour = cleJour(a.date);
    const sem = cleSemaine(a.date);
    const m = cleMois(a.date);

    if (a.type === "automatismes") {
      joursAuto.add(jour);
      if (sem === semaineCourante) joursAutoSemaine.add(jour);
      if (m === moisCourant) joursAutoMois.add(jour);
    } else if (a.type === "dictee") {
      semDictee.add(sem);
      if (sem === semaineCourante) semaine.dictees++;
      if (m === moisCourant) mois.dictees++;
    } else if (a.type === "problemes") {
      semProblemes.add(sem);
      if (sem === semaineCourante) semaine.problemes++;
      if (m === moisCourant) mois.problemes++;
    } else if (a.type === "hebdo") {
      semFondamentaux.add(sem);
      if (sem === semaineCourante) semaine.fondamentaux++;
      if (m === moisCourant) mois.fondamentaux++;
    }
  }
  semaine.automatismes = joursAutoSemaine.size;
  mois.automatismes = joursAutoMois.size;

  const auto = streakJours(joursAuto, aujourdhui);
  const dictee = streakSemaines(semDictee, semaineCourante);
  const problemes = streakSemaines(semProblemes, semaineCourante);
  const fondamentaux = streakSemaines(semFondamentaux, semaineCourante);

  return {
    streaks: {
      auto,
      dictee,
      problemes,
      fondamentaux,
      autoFaitAujourdhui: joursAuto.has(aujourdhui),
      dicteeFaiteCetteSemaine: semDictee.has(semaineCourante),
      problemesFaitsCetteSemaine: semProblemes.has(semaineCourante),
      fondamentauxFaitsCetteSemaine: semFondamentaux.has(semaineCourante),
      moyenne: Math.round(((auto / 7 + dictee + problemes + fondamentaux) / 4) * 100) / 100,
    },
    semaine,
    mois,
  };
}

/** Les cibles de défi de l'élève (personnalisées ou par défaut). */
export async function ciblesDefis(userId: string): Promise<{ semaine: CiblesDefi; mois: CiblesDefi }> {
  const defis = await prisma.defi.findMany({ where: { userId } });
  const s = defis.find((d) => d.periode === "semaine");
  const m = defis.find((d) => d.periode === "mois");
  return {
    semaine: s
      ? { automatismes: s.automatismes, dictees: s.dictees, problemes: s.problemes, fondamentaux: s.fondamentaux, recompense: s.recompense }
      : DEFI_SEMAINE_DEFAUT,
    mois: m
      ? { automatismes: m.automatismes, dictees: m.dictees, problemes: m.problemes, fondamentaux: m.fondamentaux, recompense: m.recompense }
      : DEFI_MOIS_DEFAUT,
  };
}

export interface PeriodeHistorique {
  /** Lundi de la semaine (AAAA-MM-JJ) ou mois (AAAA-MM). */
  cle: string;
  progres: ProgresDefi;
}

function moisPrecedent(cle: string): string {
  const [a, m] = cle.split("-").map(Number);
  return m === 1 ? `${a - 1}-12` : `${a}-${String(m - 1).padStart(2, "0")}`;
}

/**
 * Historique des activités validées (règle des 70 %) par semaine et par mois,
 * de la période courante (en tête) jusqu'à la première activité —
 * au plus 36 semaines et 12 mois. Les périodes sans activité sont incluses à zéro.
 */
export async function historiqueDefis(
  userId: string
): Promise<{ semaines: PeriodeHistorique[]; mois: PeriodeHistorique[] }> {
  const activites = await prisma.activite.findMany({
    where: { userId, type: { in: ["automatismes", "dictee", "problemes", "hebdo"] } },
    select: { type: true, date: true, score: true, scoreMax: true },
  });

  const parSemaine = new Map<string, { joursAuto: Set<string>; progres: ProgresDefi }>();
  const parMois = new Map<string, { joursAuto: Set<string>; progres: ProgresDefi }>();
  const seau = (map: Map<string, { joursAuto: Set<string>; progres: ProgresDefi }>, cle: string) => {
    let s = map.get(cle);
    if (!s) {
      s = { joursAuto: new Set(), progres: { automatismes: 0, dictees: 0, problemes: 0, fondamentaux: 0 } };
      map.set(cle, s);
    }
    return s;
  };

  for (const a of activites) {
    if (a.scoreMax <= 0 || a.score / a.scoreMax < 0.7) continue;
    const jour = cleJour(a.date);
    for (const [map, cle] of [
      [parSemaine, cleSemaine(a.date)],
      [parMois, cleMois(a.date)],
    ] as const) {
      const s = seau(map, cle);
      if (a.type === "automatismes") s.joursAuto.add(jour);
      else if (a.type === "dictee") s.progres.dictees++;
      else if (a.type === "problemes") s.progres.problemes++;
      else if (a.type === "hebdo") s.progres.fondamentaux++;
    }
  }
  Array.from(parSemaine.values()).forEach((s) => (s.progres.automatismes = s.joursAuto.size));
  Array.from(parMois.values()).forEach((s) => (s.progres.automatismes = s.joursAuto.size));

  const vide = (): ProgresDefi => ({ automatismes: 0, dictees: 0, problemes: 0, fondamentaux: 0 });
  const maintenant = new Date();

  const semaines: PeriodeHistorique[] = [];
  const clesSemaines = Array.from(parSemaine.keys()).sort();
  let sem = cleSemaine(maintenant);
  for (let i = 0; i < 36; i++) {
    semaines.push({ cle: sem, progres: parSemaine.get(sem)?.progres ?? vide() });
    if (clesSemaines.length === 0 || sem <= clesSemaines[0]) break;
    sem = semainePrecedente(sem);
  }

  const mois: PeriodeHistorique[] = [];
  const clesMois = Array.from(parMois.keys()).sort();
  let m = cleMois(maintenant);
  for (let i = 0; i < 12; i++) {
    mois.push({ cle: m, progres: parMois.get(m)?.progres ?? vide() });
    if (clesMois.length === 0 || m <= clesMois[0]) break;
    m = moisPrecedent(m);
  }

  return { semaines, mois };
}

export function defiReussi(progres: ProgresDefi, cibles: CiblesDefi): boolean {
  return (
    progres.automatismes >= cibles.automatismes &&
    progres.dictees >= cibles.dictees &&
    progres.problemes >= cibles.problemes &&
    progres.fondamentaux >= cibles.fondamentaux
  );
}
