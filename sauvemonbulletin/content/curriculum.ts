import type { EntreeProgramme, MatiereId, MatiereInfo, Niveau } from "./types";

export const NIVEAUX: { id: Niveau; nom: string }[] = [
  { id: "5eme", nom: "5ème" },
  { id: "4eme", nom: "4ème" },
  { id: "3eme", nom: "3ème" },
];

export const MATIERES: MatiereInfo[] = [
  {
    id: "francais",
    nom: "Français",
    emoji: "📚",
    couleur: "bg-rose-100 text-rose-800 border-rose-200",
    description: "Grammaire, littérature, rédaction et préparation au brevet.",
  },
  {
    id: "maths",
    nom: "Mathématiques",
    emoji: "📐",
    couleur: "bg-blue-100 text-blue-800 border-blue-200",
    description: "Nombres, géométrie, fonctions et automatismes quotidiens.",
  },
  {
    id: "physique-chimie",
    nom: "Physique-Chimie",
    emoji: "⚗️",
    couleur: "bg-violet-100 text-violet-800 border-violet-200",
    description: "Matière, énergie, mouvements, signaux et expériences.",
  },
  {
    id: "svt",
    nom: "SVT",
    emoji: "🌱",
    couleur: "bg-green-100 text-green-800 border-green-200",
    description: "Le vivant, la Terre, le corps humain et l'environnement.",
  },
  {
    id: "histoire-geo",
    nom: "Histoire-Géographie",
    emoji: "🗺️",
    couleur: "bg-amber-100 text-amber-800 border-amber-200",
    description: "Repères historiques et géographiques, EMC, analyse de documents.",
  },
  {
    id: "chinois",
    nom: "Chinois LV1 (SI)",
    emoji: "🀄",
    couleur: "bg-red-100 text-red-800 border-red-200",
    description: "Section internationale — du HSK 2 au HSK 5 : caractères, oral, écrit.",
  },
  {
    id: "russe",
    nom: "Russe LV2",
    emoji: "🪆",
    couleur: "bg-cyan-100 text-cyan-800 border-cyan-200",
    description: "Alphabet cyrillique et conversation, avec un focus danse-études.",
  },
  {
    id: "histoire-danse",
    nom: "Histoire de la danse",
    emoji: "🩰",
    couleur: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200",
    description: "Filière danse-études : du ballet de cour à la danse contemporaine.",
    danseEtudes: true,
  },
];

export function matiereInfo(id: MatiereId): MatiereInfo {
  return MATIERES.find((m) => m.id === id)!;
}

/**
 * Programme par matière et par niveau, aligné sur les programmes officiels
 * (cycle 4). `disponible: true` = chapitre entièrement rédigé dans /content/chapitres.
 */
export const PROGRAMME: Record<MatiereId, Record<Niveau, EntreeProgramme[]>> = {
  maths: {
    "5eme": [
      { slug: "fractions", titre: "Les fractions", disponible: true },
      { slug: "enchainements-operations", titre: "Enchaînements d'opérations et priorités", disponible: false },
      { slug: "nombres-relatifs", titre: "Les nombres relatifs", disponible: false },
      { slug: "calcul-litteral-initiation", titre: "Initiation au calcul littéral", disponible: false },
      { slug: "symetrie-centrale", titre: "La symétrie centrale", disponible: false },
      { slug: "triangles", titre: "Les triangles : construction et angles", disponible: false },
      { slug: "parallelogrammes", titre: "Les parallélogrammes", disponible: false },
      { slug: "proportionnalite", titre: "La proportionnalité", disponible: false },
      { slug: "statistiques", titre: "Statistiques : moyenne et effectifs", disponible: false },
      { slug: "aires-perimetres", titre: "Aires et périmètres", disponible: false },
    ],
    "4eme": [
      { slug: "relatifs-multiplication-division", titre: "Nombres relatifs : multiplication et division", disponible: false },
      { slug: "fractions-operations", titre: "Opérations sur les fractions", disponible: false },
      { slug: "puissances", titre: "Les puissances", disponible: true },
      { slug: "calcul-litteral-developpement", titre: "Calcul littéral : développer et réduire", disponible: false },
      { slug: "equations", titre: "Les équations du premier degré", disponible: false },
      { slug: "theoreme-pythagore", titre: "Le théorème de Pythagore", disponible: false },
      { slug: "translations-rotations", titre: "Translations et rotations", disponible: false },
      { slug: "proportionnalite-pourcentages", titre: "Proportionnalité et pourcentages", disponible: false },
      { slug: "probabilites", titre: "Notion de probabilité", disponible: false },
      { slug: "pyramides-cones", titre: "Pyramides et cônes", disponible: false },
    ],
    "3eme": [
      { slug: "arithmetique", titre: "Arithmétique : diviseurs et nombres premiers", disponible: false },
      { slug: "calcul-litteral-factorisation", titre: "Calcul littéral : identités et factorisation", disponible: false },
      { slug: "equations-inequations", titre: "Équations et inéquations", disponible: false },
      { slug: "fonctions", titre: "Les fonctions", disponible: true },
      { slug: "fonctions-lineaires-affines", titre: "Fonctions linéaires et affines", disponible: false },
      { slug: "theoreme-thales", titre: "Le théorème de Thalès", disponible: false },
      { slug: "trigonometrie", titre: "La trigonométrie", disponible: false },
      { slug: "homothetie", titre: "Homothéties et agrandissements", disponible: false },
      { slug: "statistiques-probabilites", titre: "Statistiques et probabilités", disponible: false },
      { slug: "volumes-sections", titre: "Volumes et sections de solides", disponible: false },
    ],
  },
  francais: {
    "5eme": [
      { slug: "classes-grammaticales", titre: "Les classes grammaticales", disponible: true },
      { slug: "recit-aventure", titre: "Le récit d'aventures", disponible: false },
      { slug: "roman-chevalerie", titre: "Le roman de chevalerie", disponible: false },
      { slug: "imparfait-passe-simple", titre: "Imparfait et passé simple", disponible: false },
      { slug: "poesie-voyage", titre: "La poésie du voyage", disponible: false },
      { slug: "fonctions-grammaticales", titre: "Les fonctions grammaticales", disponible: false },
      { slug: "theatre-comedie", titre: "Le théâtre : la comédie", disponible: false },
      { slug: "accords-sujet-verbe", titre: "Les accords sujet-verbe et dans le GN", disponible: false },
    ],
    "4eme": [
      { slug: "lettre-journal-intime", titre: "La lettre et le journal intime", disponible: false },
      { slug: "recit-fantastique", titre: "Le récit fantastique", disponible: true },
      { slug: "subordonnees", titre: "Les propositions subordonnées", disponible: false },
      { slug: "roman-realiste", titre: "Le roman réaliste et la nouvelle", disponible: false },
      { slug: "poesie-lyrique", titre: "La poésie lyrique", disponible: false },
      { slug: "discours-direct-indirect", titre: "Discours direct et indirect", disponible: false },
      { slug: "presse-information", titre: "Informer, s'informer, déformer", disponible: false },
      { slug: "voix-active-passive", titre: "Voix active et voix passive", disponible: false },
    ],
    "3eme": [
      { slug: "autobiographie", titre: "L'autobiographie : se raconter", disponible: true },
      { slug: "recits-guerre", titre: "Récits de guerre et d'engagement", disponible: false },
      { slug: "poesie-engagee", titre: "La poésie engagée", disponible: false },
      { slug: "subjonctif-concordance", titre: "Le subjonctif et la concordance des temps", disponible: false },
      { slug: "argumentation", titre: "L'argumentation : convaincre et persuader", disponible: false },
      { slug: "figures-de-style", titre: "Les figures de style", disponible: false },
      { slug: "theatre-tragique", titre: "Le théâtre : dénoncer les travers de la société", disponible: false },
      { slug: "grammaire-brevet", titre: "La grammaire au brevet : analyse et réécriture", disponible: false },
    ],
  },
  "physique-chimie": {
    "5eme": [
      { slug: "etats-de-leau", titre: "L'eau et ses états", disponible: true },
      { slug: "melanges-corps-purs", titre: "Mélanges et corps purs", disponible: false },
      { slug: "circuits-electriques", titre: "Les circuits électriques", disponible: false },
      { slug: "sources-lumiere", titre: "Sources et propagation de la lumière", disponible: false },
      { slug: "mouvement-vitesse", titre: "Mouvement et vitesse", disponible: false },
      { slug: "systeme-solaire", titre: "La Terre dans le système solaire", disponible: false },
    ],
    "4eme": [
      { slug: "transformations-chimiques", titre: "Les transformations chimiques", disponible: false },
      { slug: "atomes-molecules", titre: "Atomes et molécules", disponible: true },
      { slug: "intensite-tension", titre: "Intensité et tension électriques", disponible: false },
      { slug: "vitesse-lumiere-son", titre: "Vitesse de la lumière et du son", disponible: false },
      { slug: "pression", titre: "La pression", disponible: false },
      { slug: "combustions", titre: "Les combustions", disponible: false },
    ],
    "3eme": [
      { slug: "ions-ph", titre: "Ions et pH", disponible: false },
      { slug: "gravitation-poids", titre: "Gravitation, poids et masse", disponible: true },
      { slug: "energie-cinetique", titre: "Énergie cinétique et sécurité routière", disponible: false },
      { slug: "resistance-loi-ohm", titre: "Résistance et loi d'Ohm", disponible: false },
      { slug: "puissance-energie-electrique", titre: "Puissance et énergie électriques", disponible: false },
      { slug: "signaux-information", titre: "Signaux et information", disponible: false },
    ],
  },
  svt: {
    "5eme": [
      { slug: "nutrition-organismes", titre: "La nutrition des organismes", disponible: true },
      { slug: "respiration-milieux", titre: "La respiration dans différents milieux", disponible: false },
      { slug: "geologie-externe", titre: "Géologie externe : érosion et paysages", disponible: false },
      { slug: "reproduction-vegetale", titre: "La reproduction des végétaux", disponible: false },
      { slug: "besoins-organes", titre: "Les besoins des organes", disponible: false },
    ],
    "4eme": [
      { slug: "seismes-volcans", titre: "Séismes et volcans : la tectonique", disponible: true },
      { slug: "reproduction-humaine", titre: "La reproduction humaine", disponible: false },
      { slug: "meteo-climat", titre: "Météorologie et climat", disponible: false },
      { slug: "systeme-nerveux", titre: "Le système nerveux et le mouvement", disponible: false },
      { slug: "biodiversite-evolution", titre: "Biodiversité et évolution", disponible: false },
    ],
    "3eme": [
      { slug: "genetique", titre: "Génétique : ADN, gènes et chromosomes", disponible: true },
      { slug: "evolution-especes", titre: "L'évolution des espèces", disponible: false },
      { slug: "systeme-immunitaire", titre: "Le système immunitaire", disponible: false },
      { slug: "responsabilite-sante", titre: "Comportements responsables et santé", disponible: false },
      { slug: "risques-geologiques", titre: "Risques géologiques et humains", disponible: false },
    ],
  },
  "histoire-geo": {
    "5eme": [
      { slug: "byzance-carolingiens", titre: "Byzance et l'Europe carolingienne", disponible: true },
      { slug: "islam-medieval", titre: "La naissance de l'islam et ses empires", disponible: false },
      { slug: "feodalite", titre: "Seigneurs et paysans : la féodalité", disponible: false },
      { slug: "grandes-decouvertes", titre: "Les grandes découvertes", disponible: false },
      { slug: "croissance-demographique", titre: "La croissance démographique et ses effets", disponible: false },
      { slug: "ressources-eau-energie", titre: "L'eau et l'énergie : des ressources à ménager", disponible: false },
    ],
    "4eme": [
      { slug: "traites-negrieres", titre: "Bourgeoisies, commerce et traites négrières", disponible: false },
      { slug: "revolution-francaise", titre: "La Révolution française et l'Empire", disponible: true },
      { slug: "industrialisation", titre: "L'Europe de la révolution industrielle", disponible: false },
      { slug: "colonisation-xixe", titre: "Conquêtes et sociétés coloniales", disponible: false },
      { slug: "urbanisation-monde", titre: "L'urbanisation du monde", disponible: false },
      { slug: "mondialisation-mers", titre: "Mers et océans dans la mondialisation", disponible: false },
    ],
    "3eme": [
      { slug: "premiere-guerre-mondiale", titre: "Civils et militaires dans la Première Guerre mondiale", disponible: true },
      { slug: "regimes-totalitaires", titre: "Démocraties et expériences totalitaires", disponible: false },
      { slug: "seconde-guerre-mondiale", titre: "La Seconde Guerre mondiale, une guerre d'anéantissement", disponible: false },
      { slug: "france-defaite-republique", titre: "La France de 1940 à nos jours", disponible: false },
      { slug: "guerre-froide", titre: "Le monde bipolaire : la guerre froide", disponible: false },
      { slug: "amenagement-territoire", titre: "Aménager le territoire français", disponible: false },
      { slug: "union-europeenne", titre: "La France et l'Union européenne", disponible: false },
    ],
  },
  chinois: {
    "5eme": [
      { slug: "hsk2-se-presenter", titre: "HSK 2 — Se présenter et parler de soi", disponible: true },
      { slug: "hsk2-famille-ecole", titre: "HSK 2 — La famille et l'école", disponible: false },
      { slug: "hsk2-quotidien", titre: "HSK 2 — La vie quotidienne : heures et dates", disponible: false },
      { slug: "hsk2-achats", titre: "HSK 2 — Faire des achats", disponible: false },
      { slug: "hsk3-preparation", titre: "Vers le HSK 3 — structures et 300 premiers mots", disponible: false },
    ],
    "4eme": [
      { slug: "hsk3-voyages", titre: "HSK 3 — Voyager et se déplacer", disponible: true },
      { slug: "hsk3-sentiments", titre: "HSK 3 — Exprimer sentiments et opinions", disponible: false },
      { slug: "hsk3-comparaison", titre: "HSK 3 — La comparaison (比) et le complément d'état", disponible: false },
      { slug: "hsk4-preparation", titre: "Vers le HSK 4 — lecture de textes courts", disponible: false },
    ],
    "3eme": [
      { slug: "hsk4-culture", titre: "HSK 4 — Culture chinoise et actualité", disponible: true },
      { slug: "hsk4-redaction", titre: "HSK 4 — Rédiger un texte structuré", disponible: false },
      { slug: "hsk4-grammaire-avancee", titre: "HSK 4 — 把, 被 et structures avancées", disponible: false },
      { slug: "hsk5-preparation", titre: "Vers le HSK 5 — compréhension fine et essais", disponible: false },
    ],
  },
  russe: {
    "5eme": [
      { slug: "alphabet-cyrillique", titre: "L'alphabet cyrillique : lire et écrire", disponible: true },
      { slug: "se-presenter", titre: "Se présenter : premiers dialogues", disponible: false },
      { slug: "nombres-age", titre: "Les nombres et l'âge", disponible: false },
      { slug: "vocabulaire-danse-1", titre: "Danse-études — le vocabulaire du studio", disponible: false },
    ],
    "4eme": [
      { slug: "conversation-quotidien", titre: "Conversation : la vie quotidienne", disponible: true },
      { slug: "cas-nominatif-accusatif", titre: "Les cas : nominatif et accusatif", disponible: false },
      { slug: "verbes-mouvement", titre: "Les verbes de mouvement", disponible: false },
      { slug: "vocabulaire-danse-2", titre: "Danse-études — en répétition avec un professeur russe", disponible: false },
    ],
    "3eme": [
      { slug: "conversation-avancee", titre: "Conversation avancée : raconter et décrire", disponible: true },
      { slug: "cas-genitif-datif", titre: "Les cas : génitif et datif", disponible: false },
      { slug: "aspect-verbal", titre: "L'aspect verbal : perfectif et imperfectif", disponible: false },
      { slug: "vocabulaire-danse-3", titre: "Danse-études — audition et scène en russe", disponible: false },
    ],
  },
  "histoire-danse": {
    "5eme": [
      { slug: "naissance-ballet", titre: "La naissance du ballet : des cours royales à l'Opéra", disponible: true },
      { slug: "danses-anciennes", titre: "Danses anciennes et danses traditionnelles", disponible: false },
      { slug: "vocabulaire-classique", titre: "Le vocabulaire de la danse classique", disponible: false },
    ],
    "4eme": [
      { slug: "ballet-romantique", titre: "Le ballet romantique : Giselle et les Sylphides", disponible: true },
      { slug: "ballets-russes", titre: "Les Ballets russes de Diaghilev", disponible: false },
      { slug: "grands-choregraphes-classiques", titre: "Petipa et les grands ballets du répertoire", disponible: false },
    ],
    "3eme": [
      { slug: "danse-moderne", titre: "La danse moderne : de Duncan à Graham", disponible: true },
      { slug: "danse-contemporaine", titre: "La danse contemporaine en France et dans le monde", disponible: false },
      { slug: "hip-hop-cultures-urbaines", titre: "Hip-hop et cultures urbaines", disponible: false },
    ],
  },
};

export function chapitresDe(matiere: MatiereId, niveau: Niveau): EntreeProgramme[] {
  return PROGRAMME[matiere]?.[niveau] ?? [];
}
