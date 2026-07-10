import type { Chapitre, MatiereId, Niveau } from "../types";

import mathsFractions from "./maths--5eme--fractions";
import mathsPuissances from "./maths--4eme--puissances";
import mathsFonctions from "./maths--3eme--fonctions";
import francaisClasses from "./francais--5eme--classes-grammaticales";
import francaisFantastique from "./francais--4eme--recit-fantastique";
import francaisAutobiographie from "./francais--3eme--autobiographie";
import pcEau from "./physique-chimie--5eme--etats-de-leau";
import pcAtomes from "./physique-chimie--4eme--atomes-molecules";
import pcGravitation from "./physique-chimie--3eme--gravitation-poids";
import svtNutrition from "./svt--5eme--nutrition-organismes";
import svtSeismes from "./svt--4eme--seismes-volcans";
import svtGenetique from "./svt--3eme--genetique";
import hgByzance from "./histoire-geo--5eme--byzance-carolingiens";
import hgRevolution from "./histoire-geo--4eme--revolution-francaise";
import hgPGM from "./histoire-geo--3eme--premiere-guerre-mondiale";
import chinoisHsk2 from "./chinois--5eme--hsk2-se-presenter";
import chinoisHsk3 from "./chinois--4eme--hsk3-voyages";
import chinoisHsk4 from "./chinois--3eme--hsk4-culture";
import russeAlphabet from "./russe--5eme--alphabet-cyrillique";
import russeConversation from "./russe--4eme--conversation-quotidien";
import russeAvance from "./russe--3eme--conversation-avancee";
import danseBallet from "./histoire-danse--5eme--naissance-ballet";
import danseRomantique from "./histoire-danse--4eme--ballet-romantique";
import danseModerne from "./histoire-danse--3eme--danse-moderne";

export const CHAPITRES: Chapitre[] = [
  mathsFractions,
  mathsPuissances,
  mathsFonctions,
  francaisClasses,
  francaisFantastique,
  francaisAutobiographie,
  pcEau,
  pcAtomes,
  pcGravitation,
  svtNutrition,
  svtSeismes,
  svtGenetique,
  hgByzance,
  hgRevolution,
  hgPGM,
  chinoisHsk2,
  chinoisHsk3,
  chinoisHsk4,
  russeAlphabet,
  russeConversation,
  russeAvance,
  danseBallet,
  danseRomantique,
  danseModerne,
];

export function trouverChapitre(
  matiere: MatiereId,
  niveau: Niveau,
  slug: string
): Chapitre | undefined {
  return CHAPITRES.find(
    (c) => c.matiere === matiere && c.niveau === niveau && c.slug === slug
  );
}

export function chapitresDisponibles(matiere: MatiereId, niveau: Niveau): Chapitre[] {
  return CHAPITRES.filter((c) => c.matiere === matiere && c.niveau === niveau);
}
