import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { PROGRAMME, NIVEAUX } from "@content/curriculum";
import { METHODES } from "@content/methodes";
import { BREVETS_BLANCS } from "@content/brevet";
import { COMPREHENSION } from "@content/comprehension";
import type { MatiereId, Niveau } from "@content/types";

/**
 * Accès "découverte" : sans compte, un seul chapitre est consultable par matière
 * (le premier chapitre disponible du niveau le plus bas). Tout le reste demande
 * la création d'un compte gratuit — ce qui permet de suivre la progression.
 */
export function chapitreGratuit(matiere: MatiereId): { niveau: Niveau; slug: string } | null {
  for (const niv of NIVEAUX) {
    const entrees = PROGRAMME[matiere]?.[niv.id] ?? [];
    const dispo = entrees.find((e) => e.disponible);
    if (dispo) return { niveau: niv.id, slug: dispo.slug };
  }
  return null;
}

export function estChapitreGratuit(matiere: MatiereId, niveau: Niveau, slug: string): boolean {
  const g = chapitreGratuit(matiere);
  return !!g && g.niveau === niveau && g.slug === slug;
}

/** Vrai si un utilisateur est connecté (vérification côté serveur). */
export async function estConnecte(): Promise<boolean> {
  const session = await getServerSession(authOptions);
  return !!(session?.user as { id?: string } | undefined)?.id;
}

/** Échantillon gratuit des méthodes : la première fiche. */
export function methodeGratuite(): string | null {
  return METHODES[0]?.slug ?? null;
}

/** Échantillon gratuit des brevets blancs : le premier sujet. */
export function brevetGratuit(): string | null {
  return BREVETS_BLANCS[0]?.slug ?? null;
}

/** Échantillon gratuit de la section compréhension : la première fiche. */
export function comprehensionGratuite(): string | null {
  return COMPREHENSION[0]?.slug ?? null;
}
