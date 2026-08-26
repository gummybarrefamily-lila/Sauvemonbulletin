import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { DefisClient, type DefiAffiche } from "@/components/DefisClient";
import { GroupesClient, type GroupeAffiche, type EvenementAffiche } from "@/components/GroupesClient";
import { HistoriqueDefis, type PeriodeAffiche } from "@/components/HistoriqueDefis";
import { utilisateurConnecte } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { donneesRecompenses, ciblesDefis, defiReussi, historiqueDefis } from "@/lib/recompenses";
import { PROGRAMME, matiereInfo, niveauLabel } from "@content/curriculum";
import type { MatiereId, Niveau } from "@content/types";

export const metadata = { title: "Mes défis — SauveMonBulletin" };
export const dynamic = "force-dynamic";

function titreChapitre(matiere: string, niveau: string, slug: string | null): string | null {
  if (!slug) return null;
  const entrees = PROGRAMME[matiere as MatiereId]?.[niveau as Niveau] ?? [];
  return entrees.find((e) => e.slug === slug)?.titre ?? null;
}

function ilYA(date: Date): string {
  const jours = Math.floor((Date.now() - date.getTime()) / 86400000);
  if (jours === 0) return "aujourd'hui";
  if (jours === 1) return "hier";
  return `il y a ${jours} jours`;
}

function CarteStreak({ emoji, titre, valeur, unite, actif, aFaire }: { emoji: string; titre: string; valeur: number; unite: string; actif: boolean; aFaire: string }) {
  return (
    <div className={`card p-5 text-center ${valeur > 0 ? "border-amber-200" : ""}`}>
      <span className="text-4xl">{emoji}</span>
      <p className="mt-2 text-3xl font-extrabold text-slate-900">
        {valeur}
        <span className="ml-1 text-base font-semibold text-slate-400">{unite}</span>
      </p>
      <p className="text-sm font-semibold text-slate-600">{titre}</p>
      <p className={`mt-2 text-xs ${actif ? "text-green-600" : "text-amber-600"}`}>{actif ? "✅ Validé" : `⏳ ${aFaire}`}</p>
    </div>
  );
}

export default async function PageDefis() {
  const user = await utilisateurConnecte();
  const donnees = await donneesRecompenses(user.id);
  const cibles = await ciblesDefis(user.id);

  const defis: DefiAffiche[] = [
    { periode: "semaine", cibles: cibles.semaine, progres: donnees.semaine, reussi: defiReussi(donnees.semaine, cibles.semaine) },
    { periode: "mois", cibles: cibles.mois, progres: donnees.mois, reussi: defiReussi(donnees.mois, cibles.mois) },
  ];

  // Historique : les défis réussis des périodes passées sont jugés sur les cibles actuelles.
  const historique = await historiqueDefis(user.id);
  const histSemaines: PeriodeAffiche[] = historique.semaines.map((p) => ({
    cle: p.cle,
    progres: p.progres,
    reussi: defiReussi(p.progres, cibles.semaine),
  }));
  const histMois: PeriodeAffiche[] = historique.mois.map((p) => ({
    cle: p.cle,
    progres: p.progres,
    reussi: defiReussi(p.progres, cibles.mois),
  }));

  // Groupes : leaderboard 4 streaks + winner + fil d'activité avec réactions.
  const adhesions = await prisma.membreGroupe.findMany({
    where: { userId: user.id },
    include: { groupe: { include: { membres: { include: { user: { select: { id: true, prenom: true } } } } } } },
  });

  const ilYA14Jours = new Date(Date.now() - 14 * 86400000);
  const groupes: GroupeAffiche[] = [];
  for (const adhesion of adhesions) {
    const membresBruts = adhesion.groupe.membres;
    const membres = [];
    for (const m of membresBruts) {
      const stats = m.user.id === user.id ? donnees : await donneesRecompenses(m.user.id);
      membres.push({
        prenom: m.user.prenom,
        estMoi: m.user.id === user.id,
        auto: stats.streaks.auto,
        dictee: stats.streaks.dictee,
        problemes: stats.streaks.problemes,
        fondamentaux: stats.streaks.fondamentaux,
        moyenne: stats.streaks.moyenne,
      });
    }
    membres.sort((a, b) => b.moyenne - a.moyenne || b.auto - a.auto);
    const winner = membres.length > 1 && membres[0].moyenne > 0 ? membres[0].prenom : null;

    // Fil : chapitres complétés (examen réussi à ≥ 70 %) dans les 14 derniers jours.
    const examens = await prisma.activite.findMany({
      where: {
        userId: { in: membresBruts.map((m) => m.user.id) },
        type: "examen",
        date: { gte: ilYA14Jours },
      },
      orderBy: { date: "desc" },
      take: 40,
      include: { user: { select: { id: true, prenom: true } }, reactions: { include: { auteur: { select: { prenom: true } } } } },
    });
    const evenements: EvenementAffiche[] = [];
    for (const e of examens) {
      if (e.scoreMax <= 0 || e.score / e.scoreMax < 0.7) continue;
      const titre = titreChapitre(e.matiere, e.niveau, e.chapitre);
      if (!titre) continue;
      const info = matiereInfo(e.matiere as MatiereId);
      evenements.push({
        activiteId: e.id,
        prenom: e.user.prenom,
        estMoi: e.user.id === user.id,
        texte: `a complété le chapitre « ${titre} » en ${info.nom} (${niveauLabel(e.niveau as Niveau)})`,
        quand: ilYA(e.date),
        reactions: e.reactions.map((r) => ({ auteur: r.auteur.prenom, message: r.message })),
      });
      if (evenements.length >= 15) break;
    }

    groupes.push({ id: adhesion.groupe.id, nom: adhesion.groupe.nom, code: adhesion.groupe.code, winner, membres, evenements });
  }

  const s = donnees.streaks;

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        {/* Onglets Mon espace */}
        <div className="mb-6 flex gap-1.5 border-b border-slate-200 pb-2">
          <Link href="/tableau-de-bord" className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">
            📊 Mes progrès
          </Link>
          <span className="rounded-lg bg-brand-600 px-3.5 py-2 text-sm font-semibold text-white">🏆 Mes défis</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-4xl">🏆</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Mes défis</h1>
            <p className="text-slate-500">
              Tes streaks, tes défis de la semaine et du mois — et le classement de tes amis.
            </p>
          </div>
        </div>

        {/* Streaks */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <CarteStreak emoji="⚡" titre="Automatismes" valeur={s.auto} unite="j" actif={s.autoFaitAujourdhui} aFaire="À faire aujourd'hui !" />
          <CarteStreak emoji="✍️" titre="Dictée" valeur={s.dictee} unite="sem" actif={s.dicteeFaiteCetteSemaine} aFaire="À faire cette semaine !" />
          <CarteStreak emoji="🧩" titre="Problèmes" valeur={s.problemes} unite="sem" actif={s.problemesFaitsCetteSemaine} aFaire="À faire cette semaine !" />
          <CarteStreak emoji="📅" titre="Fondamentaux" valeur={s.fondamentaux} unite="sem" actif={s.fondamentauxFaitsCetteSemaine} aFaire="À faire cette semaine !" />
        </div>
        <p className="mt-2 text-center text-xs text-slate-400">
          ✅ Une activité n&apos;est validée qu&apos;à partir de 70 % de réussite — en dessous, refais-la pour la valider.
        </p>

        {/* Défis */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">🎯 Mes défis</h2>
          <p className="mt-1 text-sm text-slate-500">
            Les défis (et la récompense promise) sont envoyés à tes parents dans le compte rendu hebdomadaire.
          </p>
          <div className="mt-4">
            <DefisClient defis={defis} />
          </div>
        </section>

        {/* Historique */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">📈 Mon historique</h2>
          <p className="mt-1 text-sm text-slate-500">
            Seule la période en cours est affichée ci-dessus — déplie les semaines et mois passés pour voir ton évolution.
          </p>
          <div className="mt-4">
            <HistoriqueDefis semaines={histSemaines} mois={histMois} />
          </div>
        </section>

        {/* Groupes */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">👥 Mes groupes d&apos;amis</h2>
          <p className="mt-1 text-sm text-slate-500">
            Le classement se joue sur les 4 streaks. Le 👑 Winner of the week est celui qui a la meilleure streak moyenne.
          </p>
          <div className="mt-4">
            <GroupesClient groupes={groupes} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
