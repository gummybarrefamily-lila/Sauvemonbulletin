import type { MatiereId, Niveau } from "@content/types";
import { chapitresDe } from "@content/curriculum";
import { prisma } from "./prisma";

/**
 * Analyse le résultat d'un examen bilan et programme automatiquement des
 * révisions pour les chapitres où l'élève est en difficulté (< 60 %).
 *
 * `detailsParChapitre` : { slugChapitre: { score, max } }
 */
export async function programmerRevisions(
  userId: string,
  matiere: MatiereId,
  niveau: Niveau,
  detailsParChapitre: Record<string, { score: number; max: number }>
): Promise<number> {
  const chapitres = chapitresDe(matiere, niveau);
  let programmees = 0;
  let joursDecalage = 2;

  for (const [slug, res] of Object.entries(detailsParChapitre)) {
    if (res.max === 0) continue;
    const pourcentage = Math.round((res.score / res.max) * 100);
    if (pourcentage >= 60) continue; // maîtrisé, pas de révision

    const chap = chapitres.find((c) => c.slug === slug);
    const titre = chap?.titre ?? slug;

    // Plus la faiblesse est grande, plus la révision est programmée tôt.
    const prevueLe = new Date();
    prevueLe.setDate(prevueLe.getDate() + (pourcentage < 40 ? 1 : joursDecalage));
    joursDecalage += 2;

    await prisma.revisionProgrammee.create({
      data: {
        userId,
        matiere,
        niveau,
        chapitre: slug,
        raison: `Score de ${pourcentage}% sur « ${titre} » au dernier bilan — révision recommandée.`,
        prevueLe,
      },
    });
    programmees++;
  }

  return programmees;
}

export interface StatsMatiere {
  matiere: string;
  activites: number;
  scoreMoyen: number;
}

/** Calcule les statistiques de progression d'un utilisateur par matière. */
export async function statsUtilisateur(userId: string): Promise<StatsMatiere[]> {
  const activites = await prisma.activite.findMany({
    where: { userId, scoreMax: { gt: 0 } },
  });

  const parMatiere = new Map<string, { total: number; max: number; n: number }>();
  for (const a of activites) {
    const cur = parMatiere.get(a.matiere) ?? { total: 0, max: 0, n: 0 };
    cur.total += a.score;
    cur.max += a.scoreMax;
    cur.n += 1;
    parMatiere.set(a.matiere, cur);
  }

  return Array.from(parMatiere.entries()).map(([matiere, v]) => ({
    matiere,
    activites: v.n,
    scoreMoyen: v.max > 0 ? Math.round((v.total / v.max) * 100) : 0,
  }));
}
