import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "proportionnalite",
  titre: "La proportionnalité",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Reconnaître deux grandeurs proportionnelles, compléter un tableau de proportionnalité (coefficient, produit en croix, passage à l'unité) et appliquer la proportionnalité aux pourcentages, aux échelles et à la vitesse.",
  objectifs: [
    "Reconnaître si deux grandeurs sont proportionnelles à partir d'un tableau",
    "Calculer et utiliser un coefficient de proportionnalité",
    "Calculer une quatrième proportionnelle par produit en croix ou passage à l'unité",
    "Reconnaître une situation de proportionnalité sur un graphique",
    "Appliquer la proportionnalité aux pourcentages, aux échelles et à la vitesse",
  ],
  slides: [
    {
      titre: "Deux grandeurs proportionnelles",
      illustration: "🛒",
      visuel: "Prix = Quantité × prix unitaire",
      contenu: [
        "Deux grandeurs sont proportionnelles si on passe de l'une à l'autre en multipliant toujours par le même nombre",
        "Exemple : le prix payé est proportionnel à la quantité achetée si le prix au kilo est fixe",
        "Ce nombre fixe s'appelle le coefficient de proportionnalité",
      ],
      voixOff:
        "Deux grandeurs sont proportionnelles quand les valeurs de l'une s'obtiennent en multipliant les valeurs de l'autre par un même nombre. Par exemple, si les pommes coûtent 2 euros le kilo, le prix payé est proportionnel à la quantité achetée : pour connaître le prix, on multiplie toujours la quantité par 2. Ce nombre fixe s'appelle le coefficient de proportionnalité.",
    },
    {
      titre: "Reconnaître un tableau de proportionnalité",
      illustration: "📊",
      visuel: "6/2 = 9/3 = 15/5 = 3",
      contenu: [
        "Dans un tableau à deux lignes, on calcule les quotients colonne du bas ÷ colonne du haut",
        "Si tous les quotients sont égaux, le tableau est un tableau de proportionnalité",
        "Exemple : 2→6, 3→9, 5→15 : 6÷2=3, 9÷3=3, 15÷5=3 → proportionnel, coefficient 3",
      ],
      voixOff:
        "Pour savoir si un tableau est un tableau de proportionnalité, on calcule le quotient de chaque colonne, toujours dans le même sens. Si on trouve à chaque fois le même quotient, alors les deux grandeurs sont proportionnelles. Par exemple, avec 2 qui donne 6, 3 qui donne 9 et 5 qui donne 15, le quotient vaut toujours 3 : le tableau est bien proportionnel, de coefficient 3.",
    },
    {
      titre: "Utiliser le coefficient de proportionnalité",
      illustration: "✖️",
      visuel: "valeur manquante = valeur connue × coefficient",
      contenu: [
        "Une fois le coefficient trouvé, on l'utilise pour compléter le tableau",
        "On multiplie la valeur de la première ligne par le coefficient",
        "Exemple : coefficient 3, pour 8 on calcule 8 × 3 = 24",
      ],
      voixOff:
        "Une fois qu'on a trouvé le coefficient de proportionnalité, calculer une valeur manquante devient très simple : il suffit de multiplier par ce coefficient. Par exemple, si le coefficient est 3, pour la valeur 8 on calcule 8 fois 3, ce qui donne 24. Cette valeur manquante s'appelle une quatrième proportionnelle.",
    },
    {
      titre: "Le produit en croix",
      illustration: "❌",
      visuel: "a × x = b × c  →  x = (b × c) ÷ a",
      contenu: [
        "Méthode utilisable même quand le coefficient n'est pas évident",
        "4 kg de pommes coûtent 10 €. Combien coûtent 6 kg ?",
        "x = (6 × 10) ÷ 4 = 60 ÷ 4 = 15 €",
      ],
      voixOff:
        "Quand on ne voit pas facilement le coefficient, on peut utiliser la méthode du produit en croix. Si 4 kilogrammes coûtent 10 euros, combien coûtent 6 kilogrammes ? On multiplie en croix : 6 fois 10, divisé par 4, ce qui donne 60 divisé par 4, soit 15 euros.",
    },
    {
      titre: "Le passage à l'unité",
      illustration: "1️⃣",
      visuel: "10 € ÷ 4 kg = 2,50 € le kg",
      contenu: [
        "On calcule d'abord la valeur pour une seule unité",
        "10 € pour 4 kg → 10 ÷ 4 = 2,50 € le kg",
        "Puis on multiplie par la quantité voulue : 6 × 2,50 = 15 €",
      ],
      voixOff:
        "Autre méthode possible : le passage à l'unité. On calcule d'abord le prix d'un seul kilogramme : 10 euros divisé par 4, cela fait 2 euros 50 le kilogramme. Ensuite, on multiplie par la quantité recherchée : 6 fois 2 euros 50, cela fait bien 15 euros, comme avec le produit en croix.",
    },
    {
      titre: "Voir la proportionnalité sur un graphique",
      illustration: "📈",
      visuel: "Points alignés avec l'origine (0 ; 0)",
      contenu: [
        "Dans un repère, on place les points (quantité ; prix)",
        "Si la situation est proportionnelle, les points sont alignés avec l'origine",
        "La droite obtenue passe par le point (0 ; 0)",
      ],
      voixOff:
        "On peut aussi reconnaître une situation de proportionnalité grâce à un graphique. Dans un repère, on place les points correspondant à chaque couple de valeurs. Si la situation est proportionnelle, tous ces points sont alignés avec l'origine du repère, c'est-à-dire le point de coordonnées zéro zéro.",
    },
    {
      titre: "Les pourcentages",
      illustration: "💯",
      visuel: "20 % de 150 = 30",
      contenu: [
        "Un pourcentage est un cas particulier de proportionnalité",
        "p % d'une quantité N se calcule par (N × p) ÷ 100",
        "Exemple : 20 % de 150 = (150 × 20) ÷ 100 = 3000 ÷ 100 = 30",
      ],
      voixOff:
        "Les pourcentages sont un exemple de situation proportionnelle. Pour calculer p pour cent d'une quantité N, on multiplie N par p puis on divise par 100. Par exemple, 20 pour cent de 150 : on calcule 150 fois 20, divisé par 100, ce qui donne 30.",
    },
    {
      titre: "L'échelle d'une carte ou d'un plan",
      illustration: "🗺️",
      visuel: "Échelle 1/25000 : 1 cm → 250 m",
      contenu: [
        "Une échelle relie une distance sur un plan à une distance réelle",
        "Échelle 1/25000 : 1 cm sur la carte = 25000 cm dans la réalité",
        "25000 cm = 250 m",
      ],
      voixOff:
        "La proportionnalité sert aussi à lire une carte ou un plan grâce à son échelle. Une échelle de 1 sur 25000 signifie qu'1 centimètre sur la carte représente 25000 centimètres dans la réalité, c'est-à-dire 250 mètres. Pour une autre distance sur la carte, il suffit d'utiliser le coefficient de proportionnalité, ici 25000.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Proportionnel = on multiplie toujours par le même coefficient",
        "Quatrième proportionnelle : produit en croix ou passage à l'unité",
        "Graphique proportionnel = points alignés avec l'origine",
        "Pourcentages, échelles, vitesse constante : des situations de proportionnalité",
      ],
      voixOff:
        "Résumons. Deux grandeurs sont proportionnelles quand on multiplie toujours par le même coefficient pour passer de l'une à l'autre. Pour trouver une valeur manquante, on utilise le produit en croix ou le passage à l'unité. Sur un graphique, les points d'une situation proportionnelle sont alignés avec l'origine. Et les pourcentages, les échelles ou une vitesse constante sont des exemples très concrets de proportionnalité. Bravo, tu connais maintenant l'essentiel !",
    },
  ],
  fiche: {
    intro:
      "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant toujours par le même nombre, appelé coefficient de proportionnalité.",
    sections: [
      {
        titre: "Reconnaître la proportionnalité",
        points: [
          "Dans un tableau à deux lignes, on calcule les quotients colonne du bas ÷ colonne du haut",
          "Si tous les quotients sont égaux, le tableau est un tableau de proportionnalité",
          "Ce quotient commun est le coefficient de proportionnalité",
        ],
      },
      {
        titre: "Calculer une valeur manquante",
        points: [
          "Méthode du coefficient : valeur manquante = valeur connue × coefficient",
          "Produit en croix : a × x = b × c donc x = (b × c) ÷ a",
          "Passage à l'unité : on calcule d'abord la valeur pour 1, puis on multiplie",
        ],
      },
      {
        titre: "Représentation graphique",
        points: [
          "On place les points (grandeur 1 ; grandeur 2) dans un repère",
          "Situation proportionnelle → points alignés avec l'origine (0 ; 0)",
        ],
      },
      {
        titre: "Applications de la proportionnalité",
        points: [
          "Pourcentage : p % de N = (N × p) ÷ 100",
          "Échelle d'une carte : distance réelle = distance sur la carte × échelle",
          "Vitesse constante : distance = vitesse × temps",
        ],
      },
    ],
    audio:
      "Fiche de révision : la proportionnalité. Deux grandeurs sont proportionnelles quand les valeurs de l'une s'obtiennent en multipliant les valeurs de l'autre par un même nombre, appelé coefficient de proportionnalité. Dans un tableau à deux lignes, on reconnaît une situation proportionnelle en calculant les quotients colonne du bas divisé par colonne du haut : si tous ces quotients sont égaux, le tableau est proportionnel. Pour calculer une valeur manquante, on peut multiplier par le coefficient, utiliser le produit en croix, avec a fois x égale b fois c, ou passer par l'unité en calculant d'abord la valeur pour 1. Sur un graphique, une situation proportionnelle donne des points alignés avec l'origine du repère. Enfin, la proportionnalité se retrouve partout : les pourcentages, où p pour cent de N se calcule par N fois p divisé par 100 ; les échelles de cartes et de plans ; et les situations à vitesse constante, où la distance parcourue est proportionnelle au temps.",
  },
  memoCards: [
    { recto: "Qu'est-ce que deux grandeurs proportionnelles ?", verso: "On passe de l'une à l'autre en multipliant toujours par le même nombre, le coefficient de proportionnalité." },
    { recto: "Comment reconnaître un tableau de proportionnalité ?", verso: "Tous les quotients colonne du bas ÷ colonne du haut sont égaux." },
    { recto: "Formule du produit en croix", verso: "a × x = b × c donc x = (b × c) ÷ a" },
    { recto: "En quoi consiste le passage à l'unité ?", verso: "Calculer d'abord la valeur pour 1 unité, puis multiplier par la quantité voulue." },
    { recto: "À quoi ressemble le graphique d'une situation proportionnelle ?", verso: "Des points alignés avec l'origine du repère (0 ; 0)." },
    { recto: "Formule pour calculer p % de N", verso: "(N × p) ÷ 100. Ex : 20 % de 150 = (150 × 20) ÷ 100 = 30" },
    { recto: "Échelle 1/25000 : 1 cm sur la carte, ça fait quoi en réalité ?", verso: "25000 cm, soit 250 m dans la réalité." },
    { recto: "Vitesse constante : comment calculer une distance ?", verso: "Distance = vitesse × temps (la distance est proportionnelle au temps)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Chaque bille coûte 0,50 €. Le prix payé est-il proportionnel au nombre de billes achetées ?",
      choix: ["Oui", "Non", "On ne peut pas savoir", "Cela dépend du magasin"],
      bonneReponse: 0,
      explication: "Le prix s'obtient toujours en multipliant le nombre de billes par 0,50 € : le coefficient est constant, donc c'est proportionnel.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on le nombre par lequel on multiplie une grandeur pour obtenir l'autre, dans un tableau de proportionnalité ?",
      choix: ["Le quotient inverse", "Le coefficient de proportionnalité", "Le produit en croix", "Le pourcentage"],
      bonneReponse: 1,
      explication: "Ce nombre fixe qui permet de passer d'une grandeur à l'autre s'appelle le coefficient de proportionnalité.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Ce tableau est-il proportionnel ? 2 → 8 ; 5 → 20 ; 7 → ? Complète la valeur manquante.",
      reponse: "28",
      explication: "Coefficient : 8 ÷ 2 = 4 et 20 ÷ 5 = 4, c'est bien proportionnel. Pour 7 : 7 × 4 = 28.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Ce tableau est-il un tableau de proportionnalité ? 3 → 15 ; 4 → 20 ; 6 → 27",
      reponse: "Non, ce n'est pas un tableau de proportionnalité.",
      explication: "Les quotients sont 15 ÷ 3 = 5, 20 ÷ 4 = 5, mais 27 ÷ 6 = 4,5. Comme tous les quotients ne sont pas égaux, le tableau n'est pas proportionnel.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "3 kg de cerises coûtent 15 €. Combien coûtent 5 kg de cerises ?",
      choix: ["20 €", "25 €", "30 €", "22 €"],
      bonneReponse: 1,
      explication: "Produit en croix : x = (5 × 15) ÷ 3 = 75 ÷ 3 = 25 €.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "6 stylos coûtent 9 €. Quel est le prix d'un stylo, puis le prix de 10 stylos ?",
      reponse: "1,50 € le stylo ; 15 € pour 10 stylos",
      explication: "Passage à l'unité : 9 ÷ 6 = 1,50 € le stylo. Puis 10 × 1,50 = 15 €.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "20 % de 150 = ?",
      choix: ["30", "20", "35", "25"],
      bonneReponse: 0,
      explication: "20 % de 150 = (150 × 20) ÷ 100 = 3000 ÷ 100 = 30.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans une classe de 25 élèves, 40 % sont des filles. Combien de filles y a-t-il ?",
      reponse: "10 filles",
      explication: "40 % de 25 = (25 × 40) ÷ 100 = 1000 ÷ 100 = 10.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Sur une carte à l'échelle 1/50000, deux villes sont distantes de 8 cm. Quelle est la distance réelle, en km ?",
      reponse: "4 km",
      explication: "8 cm sur la carte représentent 8 × 50000 = 400000 cm dans la réalité. Or 1 km = 100000 cm, donc 400000 ÷ 100000 = 4 km.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une voiture roule à vitesse constante de 90 km/h. Quelle distance parcourt-elle en 2 h 30 min ?",
      reponse: "225 km",
      explication: "2 h 30 min = 2,5 h. La distance est proportionnelle au temps : 90 × 2,5 = 225 km.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Le graphique représentant deux grandeurs proportionnelles est formé de points alignés. Par quel point cette droite passe-t-elle toujours ?",
      choix: ["Le point (1 ; 1)", "Le point (0 ; 0), l'origine du repère", "Le point (1 ; 0)", "Aucun point particulier"],
      bonneReponse: 1,
      explication: "Une situation de proportionnalité est représentée par des points alignés avec l'origine du repère, le point (0 ; 0).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une recette pour 4 personnes nécessite 250 g de farine. Quelle quantité de farine faut-il pour 6 personnes ?",
      reponse: "375 g",
      explication: "Produit en croix : x = (6 × 250) ÷ 4 = 1500 ÷ 4 = 375 g.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Deux grandeurs sont proportionnelles quand :",
      choix: [
        "On passe de l'une à l'autre en ajoutant toujours le même nombre",
        "On passe de l'une à l'autre en multipliant toujours par le même nombre",
        "Elles augmentent toutes les deux",
        "Elles ont la même unité",
      ],
      bonneReponse: 1,
      explication: "C'est la définition de la proportionnalité : multiplier toujours par le même coefficient.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Tableau proportionnel : 2 → 10 ; 4 → 20 ; 6 → ? Complète la valeur manquante.",
      reponse: "30",
      explication: "Coefficient 10 ÷ 2 = 5, donc 6 × 5 = 30.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "3 kg de pommes de terre coûtent 9 €. Combien coûtent 5 kg ?",
      reponse: "15 €",
      explication: "Produit en croix : x = (5 × 9) ÷ 3 = 45 ÷ 3 = 15 €.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "10 % de 80 = ?",
      choix: ["8", "10", "18", "80"],
      bonneReponse: 0,
      explication: "10 % de 80 = (80 × 10) ÷ 100 = 800 ÷ 100 = 8.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle particularité a le graphique d'une situation de proportionnalité ?",
      reponse: "Les points sont alignés avec l'origine du repère.",
      explication: "C'est le repère visuel le plus simple pour reconnaître une proportionnalité sur un graphique.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La proportionnalité",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le tableau 4 → 8 ; 6 → 12 ; 9 → 18 est-il un tableau de proportionnalité ?",
          choix: ["Oui, coefficient 2", "Oui, coefficient 3", "Non", "On ne peut pas savoir"],
          bonneReponse: 0,
          explication: "8 ÷ 4 = 2, 12 ÷ 6 = 2, 18 ÷ 9 = 2 : tous les quotients sont égaux à 2, c'est un tableau proportionnel de coefficient 2.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans le tableau précédent (coefficient 2), quelle valeur correspond à 11 ?",
          reponse: "22",
          explication: "11 × 2 = 22.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "7 cahiers coûtent 21 €. Combien coûtent 5 cahiers ?",
          reponse: "15 €",
          explication: "Produit en croix : x = (5 × 21) ÷ 7 = 105 ÷ 7 = 15 €.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une voiture roule à vitesse constante et parcourt 180 km en 2 h. Quelle distance parcourt-elle en 5 h ?",
          reponse: "450 km",
          explication: "Vitesse = 180 ÷ 2 = 90 km/h. En 5 h : 90 × 5 = 450 km.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un article coûte 80 €. Il est soldé à −25 %. Quel est son prix après réduction ?",
          reponse: "60 €",
          explication: "Réduction : (80 × 25) ÷ 100 = 2000 ÷ 100 = 20 €. Nouveau prix : 80 − 20 = 60 €.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Sur un plan à l'échelle 1/200, une pièce mesure 3,5 cm de long sur le plan. Quelle est sa longueur réelle, en mètres ?",
          reponse: "7 m",
          explication: "3,5 × 200 = 700 cm, soit 7 m dans la réalité.",
        },
      ],
    },
    {
      titre: "Examen 2 — La proportionnalité",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment appelle-t-on le nombre qui permet de passer d'une grandeur à l'autre dans un tableau proportionnel ?",
          choix: ["Le quotient inverse", "Le coefficient de proportionnalité", "Le pourcentage", "Le produit"],
          bonneReponse: 1,
          explication: "C'est le coefficient de proportionnalité.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Tableau proportionnel : 6 → 18 ; 9 → 27 ; 12 → ? Complète la valeur manquante.",
          reponse: "36",
          explication: "Coefficient 18 ÷ 6 = 3, donc 12 × 3 = 36.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une recette pour 6 personnes utilise 300 g de sucre. Quelle quantité faut-il pour 10 personnes ?",
          reponse: "500 g",
          explication: "Produit en croix : x = (10 × 300) ÷ 6 = 3000 ÷ 6 = 500 g.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "35 % de 200 = ?",
          choix: ["60", "65", "70", "75"],
          bonneReponse: 2,
          explication: "35 % de 200 = (200 × 35) ÷ 100 = 7000 ÷ 100 = 70.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un cycliste roule à vitesse constante et parcourt 60 km en 4 h. Quelle distance parcourt-il en 6 h ?",
          reponse: "90 km",
          explication: "Vitesse = 60 ÷ 4 = 15 km/h. En 6 h : 15 × 6 = 90 km.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Sur une carte à l'échelle 1/100000, quelle distance sur la carte correspond à 12 km dans la réalité ?",
          reponse: "12 cm",
          explication: "12 km = 1 200 000 cm. On divise par l'échelle : 1 200 000 ÷ 100000 = 12 cm sur la carte.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Deux grandeurs sont proportionnelles si on passe de l'une à l'autre en multipliant toujours par le même coefficient.",
    "Dans un tableau, on vérifie la proportionnalité en calculant les quotients colonne du bas ÷ colonne du haut : ils doivent tous être égaux.",
    "Pour trouver une valeur manquante : coefficient, produit en croix (a × x = b × c), ou passage à l'unité.",
    "Sur un graphique, une situation proportionnelle donne des points alignés avec l'origine (0 ; 0).",
    "Un pourcentage p % de N se calcule par (N × p) ÷ 100.",
    "Échelles de cartes et vitesse constante sont deux applications très fréquentes de la proportionnalité.",
  ],
};

export default chapitre;
