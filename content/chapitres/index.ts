import type { Chapitre, MatiereId, Niveau } from "../types";

import chapitres_chinois from "./chinois";
import chapitres_espagnol from "./espagnol";
import chapitres_francais from "./francais";
import chapitres_histoire_danse from "./histoire-danse";
import chapitres_histoire_geo from "./histoire-geo";
import chapitres_maths from "./maths";
import chapitres_physique_chimie from "./physique-chimie";
import chapitres_russe from "./russe";
import chapitres_svt from "./svt";

export const CHAPITRES: Chapitre[] = [
  ...chapitres_chinois,
  ...chapitres_espagnol,
  ...chapitres_francais,
  ...chapitres_histoire_danse,
  ...chapitres_histoire_geo,
  ...chapitres_maths,
  ...chapitres_physique_chimie,
  ...chapitres_russe,
  ...chapitres_svt,
];

export function trouverChapitre(
  matiere: MatiereId,
  niveau: Niveau,
  slug: string
): Chapitre | undefined {
  return CHAPITRES.find((c) => c.matiere === matiere && c.niveau === niveau && c.slug === slug);
}

export function chapitresDisponibles(matiere: MatiereId, niveau: Niveau): Chapitre[] {
  return CHAPITRES.filter((c) => c.matiere === matiere && c.niveau === niveau);
}
