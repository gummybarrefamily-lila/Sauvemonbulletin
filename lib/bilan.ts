import type { MatiereId, Niveau, Question } from "@content/types";
import { chapitresDisponibles } from "@content/chapitres";

/**
 * Construit un examen bilan pour une matière/niveau : quelques questions
 * tirées de chaque chapitre disponible, pour couvrir tout le programme vu.
 */
export function construireBilan(
  matiere: MatiereId,
  niveau: Niveau
): { chapitreSlug: string; chapitreTitre: string; questions: Question[] }[] {
  const chapitres = chapitresDisponibles(matiere, niveau);
  return chapitres.map((c) => ({
    chapitreSlug: c.slug,
    chapitreTitre: c.titre,
    // On prend la révision de fin de chapitre (questions synthétiques).
    questions: c.revisionFinChapitre.slice(0, 3),
  }));
}
