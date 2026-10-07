/**
 * Baromètre de réussite (feu tricolore) :
 * vert au-dessus de 75 %, orange de 50 à 75 %, rouge sous 50 %.
 * Seule exception à la règle « pas de vert » de la charte : ici la couleur porte un sens.
 */
export type NiveauReussite = "bon" | "moyen" | "faible";

export function niveauReussite(score: number): NiveauReussite {
  if (score > 75) return "bon";
  if (score >= 50) return "moyen";
  return "faible";
}

/** Classes Tailwind : texte du pourcentage (foncé, lisible sur blanc) et barre. */
export const BAROMETRE: Record<NiveauReussite, { texte: string; barre: string; hex: string }> = {
  bon: { texte: "text-green-700", barre: "bg-green-500", hex: "#15803d" },
  moyen: { texte: "text-orange-700", barre: "bg-orange-500", hex: "#c2410c" },
  faible: { texte: "text-red-700", barre: "bg-red-500", hex: "#b91c1c" },
};
