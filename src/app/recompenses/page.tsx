import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ObjectifsClient, type ObjectifAffiche } from "@/components/ObjectifsClient";
import { GroupesClient, type GroupeAffiche } from "@/components/GroupesClient";
import { utilisateurConnecte } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { recompensesUtilisateur, valeurObjectif } from "@/lib/recompenses";

export const metadata = { title: "Mes récompenses — SauveMonBulletin" };
export const dynamic = "force-dynamic";

function CarteStreak({
  emoji,
  titre,
  valeur,
  unite,
  actif,
  aFaire,
}: {
  emoji: string;
  titre: string;
  valeur: number;
  unite: string;
  actif: boolean;
  aFaire: string;
}) {
  return (
    <div className={`card p-5 text-center ${valeur > 0 ? "border-amber-200" : ""}`}>
      <span className="text-4xl">{emoji}</span>
      <p className="mt-2 text-3xl font-extrabold text-slate-900">
        {valeur}
        <span className="ml-1 text-base font-semibold text-slate-400">{unite}</span>
      </p>
      <p className="text-sm font-semibold text-slate-600">{titre}</p>
      <p className={`mt-2 text-xs ${actif ? "text-green-600" : "text-amber-600"}`}>
        {actif ? "✅ Validé pour cette période" : `⏳ ${aFaire}`}
      </p>
    </div>
  );
}

export default async function PageRecompenses() {
  const user = await utilisateurConnecte();
  const r = await recompensesUtilisateur(user.id);

  // Objectifs : marque comme atteints ceux qui viennent de l'être.
  const objectifs = await prisma.objectif.findMany({ where: { userId: user.id }, orderBy: { creeLe: "asc" } });
  const affiches: ObjectifAffiche[] = [];
  for (const o of objectifs) {
    const valeur = valeurObjectif(r, o.type);
    const atteint = o.atteint || valeur >= o.cible;
    if (atteint && !o.atteint) {
      await prisma.objectif.update({ where: { id: o.id }, data: { atteint: true, atteintLe: new Date() } });
    }
    affiches.push({ id: o.id, type: o.type, cible: o.cible, recompense: o.recompense, valeur, atteint });
  }

  // Groupes : classement des membres par streak d'automatismes puis points.
  const adhesions = await prisma.membreGroupe.findMany({
    where: { userId: user.id },
    include: { groupe: { include: { membres: { include: { user: { select: { id: true, prenom: true } } } } } } },
  });
  const groupes: GroupeAffiche[] = [];
  for (const adhesion of adhesions) {
    const membres = [];
    for (const m of adhesion.groupe.membres) {
      const stats = m.user.id === user.id ? r : await recompensesUtilisateur(m.user.id);
      membres.push({
        prenom: m.user.prenom,
        estMoi: m.user.id === user.id,
        streakAutomatismes: stats.streakAutomatismes,
        bonsPoints: stats.bonsPoints,
      });
    }
    membres.sort((a, b) => b.streakAutomatismes - a.streakAutomatismes || b.bonsPoints - a.bonsPoints);
    groupes.push({ id: adhesion.groupe.id, nom: adhesion.groupe.nom, code: adhesion.groupe.code, membres });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🏆</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Mes récompenses</h1>
            <p className="text-slate-500">Tes streaks, tes bons points, tes objectifs — et le classement de tes amis.</p>
          </div>
        </div>

        {/* Streaks */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <CarteStreak
            emoji="🔥"
            titre="Automatismes"
            valeur={r.streakAutomatismes}
            unite="j"
            actif={r.automatismesFaitAujourdhui}
            aFaire="À faire aujourd'hui pour continuer !"
          />
          <CarteStreak
            emoji="✍️"
            titre="Dictée"
            valeur={r.streakDictee}
            unite="sem"
            actif={r.dicteeFaiteCetteSemaine}
            aFaire="À faire cette semaine !"
          />
          <CarteStreak
            emoji="🧩"
            titre="Problèmes de maths"
            valeur={r.streakProblemes}
            unite="sem"
            actif={r.problemesFaitsCetteSemaine}
            aFaire="À faire cette semaine !"
          />
          <div className="card border-amber-200 bg-amber-50 p-5 text-center">
            <span className="text-4xl">⭐</span>
            <p className="mt-2 text-3xl font-extrabold text-amber-900">{r.bonsPoints}</p>
            <p className="text-sm font-semibold text-amber-800">Bons points</p>
            <p className="mt-2 text-xs text-amber-700">2/jour d&apos;automatismes · 5/dictée · 5/série · bonus streaks</p>
          </div>
        </div>

        {/* Objectifs */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">🎯 Mes objectifs</h2>
          <p className="mt-1 text-sm text-slate-500">
            Fixe un défi, choisis la récompense avec tes parents, et suis ta progression.
          </p>
          <div className="mt-4">
            <ObjectifsClient objectifs={affiches} />
          </div>
        </section>

        {/* Groupes */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">👥 Mes groupes d&apos;amis</h2>
          <p className="mt-1 text-sm text-slate-500">
            Crée un groupe ou rejoins celui de tes amis avec leur code — et voyez qui garde la meilleure streak.
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
