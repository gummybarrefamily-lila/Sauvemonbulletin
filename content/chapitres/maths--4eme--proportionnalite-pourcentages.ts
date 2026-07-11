import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "proportionnalite-pourcentages",
  titre: "Proportionnalité et pourcentages",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Reconnaître une situation de proportionnalité, utiliser le coefficient de proportionnalité et le produit en croix, et maîtriser les calculs de pourcentages.",
  objectifs: [
    "Reconnaître une situation de proportionnalité et déterminer son coefficient",
    "Utiliser le produit en croix pour trouver une valeur manquante",
    "Calculer le pourcentage d'une quantité",
    "Calculer une augmentation ou une diminution exprimée en pourcentage",
    "Retrouver une valeur initiale à partir d'une valeur après évolution en pourcentage",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une situation de proportionnalité ?",
      illustration: "📊",
      visuel: "tableau proportionnel",
      contenu: [
        "Deux grandeurs sont proportionnelles si l'une est obtenue en multipliant l'autre par un même nombre",
        "Exemple : le prix payé est proportionnel à la quantité achetée (prix fixe par kg)",
        "Dans un tableau de proportionnalité, toutes les colonnes ont le même rapport",
        "Une situation n'est PAS proportionnelle s'il y a un forfait ou un tarif fixe",
      ],
      voixOff:
        "Deux grandeurs sont proportionnelles quand l'une s'obtient toujours en multipliant l'autre par le même nombre. Par exemple, le prix payé pour des fruits est proportionnel à la quantité achetée, si le prix au kilo est constant. Dans un tableau de proportionnalité, toutes les colonnes ont le même rapport entre les deux lignes. Attention, une situation n'est pas proportionnelle s'il existe un forfait fixe, comme un abonnement.",
    },
    {
      titre: "Le coefficient de proportionnalité",
      illustration: "🔑",
      visuel: "y = k × x",
      contenu: [
        "y = k × x, où k est le coefficient de proportionnalité",
        "Exemple : 3 kg de pommes coûtent 6 € → 1 kg coûte 2 € (k = 2)",
        "On trouve k en divisant une valeur par la valeur correspondante",
        "Une fois k connu, on peut calculer n'importe quelle valeur",
      ],
      voixOff:
        "Dans une situation de proportionnalité, on écrit y égale k fois x, où k est le coefficient de proportionnalité. Si trois kilos de pommes coûtent six euros, alors un kilo coûte deux euros : le coefficient k vaut deux. On trouve k en divisant une valeur par la valeur qui lui correspond. Une fois k connu, on peut calculer n'importe quelle autre valeur du tableau.",
    },
    {
      titre: "Le produit en croix",
      illustration: "❌",
      visuel: "a/b = c/d → a×d = b×c",
      contenu: [
        "Dans un tableau à deux lignes proportionnelles, on peut utiliser le produit en croix",
        "Si 4 kg coûtent 10 €, combien coûtent 6 kg ? On pose 4/10 = 6/x",
        "x = (6 × 10) ÷ 4 = 15 €",
        "Le produit en croix est très pratique quand le coefficient n'est pas un nombre simple",
      ],
      voixOff:
        "Le produit en croix est une autre méthode très utile dans les tableaux de proportionnalité. Si quatre kilos coûtent dix euros, combien coûtent six kilos ? On multiplie en croix : six fois dix, divisé par quatre, ce qui donne quinze euros. Cette méthode est très pratique quand le coefficient de proportionnalité n'est pas un nombre simple à calculer directement.",
    },
    {
      titre: "Compléter un tableau de proportionnalité",
      illustration: "📋",
      visuel: "2→6 et 3→9 donc 5→15",
      contenu: [
        "On peut multiplier ou diviser une colonne entière par le même nombre",
        "On peut aussi additionner deux colonnes pour en obtenir une troisième",
        "Exemple : si 2 → 6 et 3 → 9, alors 2+3=5 → 6+9=15",
        "Ces propriétés permettent de compléter rapidement un tableau",
      ],
      voixOff:
        "Un tableau de proportionnalité possède des propriétés très pratiques. On peut multiplier ou diviser une colonne entière par le même nombre sans casser la proportionnalité. On peut aussi additionner deux colonnes pour en obtenir une troisième : si deux correspond à six, et trois à neuf, alors deux plus trois, soit cinq, correspond à six plus neuf, soit quinze. Ces propriétés permettent de compléter rapidement un tableau.",
    },
    {
      titre: "Les pourcentages : calculer une partie",
      illustration: "%",
      visuel: "25 % de 80 = 20",
      contenu: [
        "x % d'une quantité N se calcule ainsi : (x × N) ÷ 100",
        "25 % de 80 = (25 × 80) ÷ 100 = 20",
        "Un pourcentage est un cas particulier de proportionnalité (coefficient x/100)",
        "50 % = la moitié ; 25 % = le quart ; 10 % = le dixième",
      ],
      voixOff:
        "Un pourcentage est un cas particulier de proportionnalité. Pour calculer x pour cent d'une quantité N, on effectue x fois N, divisé par cent. Vingt-cinq pour cent de quatre-vingts, c'est vingt-cinq fois quatre-vingts, divisé par cent, soit vingt. Il faut connaître quelques repères : cinquante pour cent, c'est la moitié ; vingt-cinq pour cent, c'est le quart ; dix pour cent, c'est le dixième.",
    },
    {
      titre: "Augmentation et diminution",
      illustration: "📈",
      visuel: "augmenter de 20 % = × 1,2",
      contenu: [
        "Augmenter de t % revient à multiplier par (1 + t/100)",
        "Exemple : augmenter 50 € de 20 % → 50 × 1,2 = 60 €",
        "Diminuer de t % revient à multiplier par (1 − t/100)",
        "Exemple : diminuer 80 € de 25 % → 80 × 0,75 = 60 €",
      ],
      voixOff:
        "Augmenter une quantité de t pour cent revient à la multiplier par un plus t sur cent. Augmenter cinquante euros de vingt pour cent, c'est multiplier par un virgule deux, ce qui donne soixante euros. À l'inverse, diminuer une quantité de t pour cent revient à la multiplier par un moins t sur cent. Diminuer quatre-vingts euros de vingt-cinq pour cent, c'est multiplier par zéro virgule soixante-quinze, ce qui donne aussi soixante euros.",
    },
    {
      titre: "Retrouver la valeur initiale",
      illustration: "🔙",
      visuel: "prix après réduction → prix initial",
      contenu: [
        "Si le prix final est connu après une évolution, on peut retrouver le prix initial",
        "Un article coûte 60 € après une réduction de 20 % : 60 = prix initial × 0,8",
        "prix initial = 60 ÷ 0,8 = 75 €",
        "On divise par le coefficient multiplicateur, on ne multiplie pas !",
      ],
      voixOff:
        "Quand on connaît le prix final après une évolution en pourcentage, on peut retrouver le prix initial. Si un article coûte soixante euros après une réduction de vingt pour cent, cela signifie que soixante égale le prix initial multiplié par zéro virgule huit. Le prix initial vaut donc soixante divisé par zéro virgule huit, soit soixante-quinze euros. Attention, on divise par le coefficient multiplicateur, on ne multiplie surtout pas.",
    },
    {
      titre: "Exemples d'applications",
      illustration: "🗺️",
      visuel: "échelle, vitesse",
      contenu: [
        "Une échelle de carte (par exemple 1 cm = 200 000 cm réels) est une situation de proportionnalité",
        "La vitesse constante : distance = vitesse × temps",
        "Une voiture à 90 km/h parcourt 180 km en 2 h (90 × 2 = 180)",
        "Ces situations se résolvent avec un tableau ou un produit en croix",
      ],
      voixOff:
        "La proportionnalité intervient dans de nombreuses situations concrètes. L'échelle d'une carte, par exemple un centimètre pour deux cent mille centimètres réels, est une situation de proportionnalité. La vitesse constante en est une autre : la distance parcourue est égale à la vitesse multipliée par le temps. Une voiture roulant à quatre-vingt-dix kilomètres par heure parcourt cent quatre-vingts kilomètres en deux heures. Ces situations se résolvent toujours avec un tableau de proportionnalité ou un produit en croix.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Proportionnalité : y = k × x, avec k le coefficient de proportionnalité",
        "Produit en croix : a/b = c/d équivaut à a×d = b×c",
        "x % de N = (x × N) ÷ 100",
        "Augmenter de t % = × (1 + t/100) ; diminuer de t % = × (1 − t/100)",
      ],
      voixOff:
        "Résumons. Une situation de proportionnalité s'écrit y égale k fois x, où k est le coefficient de proportionnalité. Le produit en croix permet de trouver une valeur manquante dans un tableau. Pour calculer x pour cent d'une quantité N, on effectue x fois N, divisé par cent. Augmenter de t pour cent, c'est multiplier par un plus t sur cent, et diminuer de t pour cent, c'est multiplier par un moins t sur cent. Et pour retrouver une valeur initiale, on divise toujours par le coefficient multiplicateur.",
    },
  ],
  fiche: {
    intro:
      "Une situation de proportionnalité relie deux grandeurs par un coefficient constant. Les pourcentages en sont un cas particulier, très utile pour calculer des évolutions.",
    sections: [
      {
        titre: "Proportionnalité et coefficient",
        points: [
          "Deux grandeurs sont proportionnelles si l'une est k fois l'autre (y = k × x)",
          "On trouve k en divisant une valeur par la valeur correspondante",
          "Une situation avec un forfait fixe n'est pas proportionnelle",
        ],
      },
      {
        titre: "Produit en croix et tableau",
        points: [
          "a/b = c/d équivaut à a×d = b×c",
          "On peut multiplier/diviser une colonne, ou additionner deux colonnes",
          "Exemple : 4 kg → 10 € donc 6 kg → (6×10)÷4 = 15 €",
        ],
      },
      {
        titre: "Pourcentages : calculer une partie",
        points: [
          "x % de N = (x × N) ÷ 100",
          "50 % = la moitié ; 25 % = le quart ; 10 % = le dixième",
          "Un pourcentage est une proportionnalité de coefficient x/100",
        ],
      },
      {
        titre: "Évolutions en pourcentage",
        points: [
          "Augmenter de t % = multiplier par (1 + t/100)",
          "Diminuer de t % = multiplier par (1 − t/100)",
          "Pour retrouver la valeur initiale, on divise par le coefficient multiplicateur",
        ],
      },
    ],
    audio:
      "Fiche de révision : la proportionnalité et les pourcentages. Deux grandeurs sont proportionnelles quand l'une s'obtient en multipliant l'autre par un coefficient constant k. Le produit en croix permet de trouver une valeur manquante dans un tableau de proportionnalité : a sur b égale c sur d équivaut à a fois d égale b fois c. Un pourcentage est un cas particulier de proportionnalité : x pour cent d'une quantité N se calcule en effectuant x fois N, divisé par cent. Pour augmenter une quantité de t pour cent, on la multiplie par un plus t sur cent ; pour la diminuer de t pour cent, on la multiplie par un moins t sur cent. Enfin, pour retrouver une valeur initiale à partir d'une valeur finale, on divise toujours par le coefficient multiplicateur, on ne soustrait jamais directement le pourcentage.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une situation de proportionnalité ?", verso: "Deux grandeurs telles que l'une s'obtient en multipliant l'autre par un même nombre k." },
    { recto: "Comment trouver le coefficient de proportionnalité k ?", verso: "On divise une valeur par la valeur correspondante : k = y ÷ x." },
    { recto: "Qu'est-ce que le produit en croix ?", verso: "a/b = c/d équivaut à a×d = b×c. Utile pour trouver une valeur manquante." },
    { recto: "Comment calculer x % d'une quantité N ?", verso: "(x × N) ÷ 100. Ex : 25 % de 80 = (25×80)÷100 = 20." },
    { recto: "Augmenter de t % revient à multiplier par ?", verso: "(1 + t/100). Ex : +20 % → × 1,2." },
    { recto: "Diminuer de t % revient à multiplier par ?", verso: "(1 − t/100). Ex : −25 % → × 0,75." },
    { recto: "Comment retrouver la valeur initiale après une évolution ?", verso: "On divise la valeur finale par le coefficient multiplicateur (pas de soustraction du pourcentage)." },
    { recto: "Cite deux exemples de situations de proportionnalité.", verso: "Les pourcentages, les échelles de carte, et la distance parcourue à vitesse constante." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "5 kg de pommes coûtent 10 €. Combien coûte 1 kg ?",
      choix: ["2 €", "5 €", "10 €", "0,5 €"],
      bonneReponse: 0,
      explication: "Le coefficient de proportionnalité est 10 ÷ 5 = 2 €/kg.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule 10 % de 200.",
      choix: ["20", "10", "2", "200"],
      bonneReponse: 0,
      explication: "10 % de 200 = (10 × 200) ÷ 100 = 20.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule 50 % de 46.",
      reponse: "23",
      explication: "50 % correspond à la moitié : 46 ÷ 2 = 23.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un tableau de proportionnalité, 3 correspond à 12. À quoi correspond 6 ?",
      choix: ["24", "15", "36", "9"],
      bonneReponse: 0,
      explication: "Le coefficient est 12 ÷ 3 = 4, donc 6 correspond à 6 × 4 = 24.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "4 kg de cerises coûtent 18 €. Combien coûtent 7 kg ?",
      reponse: "31,50 €",
      explication: "Coefficient : 18 ÷ 4 = 4,5 €/kg. Pour 7 kg : 7 × 4,5 = 31,50 €.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Augmenter un prix de 60 € de 15 % donne :",
      choix: ["69 €", "75 €", "51 €", "60,15 €"],
      bonneReponse: 0,
      explication: "60 × 1,15 = 69 €.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Diminue 120 € de 30 %.",
      reponse: "84 €",
      explication: "120 × 0,70 = 84 €.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un article coûte 45 € après une réduction de 10 %. Quel était son prix initial ?",
      choix: ["50 €", "49,5 €", "40,5 €", "55 €"],
      bonneReponse: 0,
      explication: "45 = prix initial × 0,9, donc prix initial = 45 ÷ 0,9 = 50 €.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une voiture roule à vitesse constante et parcourt 150 km en 2 h 30 (2,5 h). Quelle est sa vitesse en km/h ?",
      reponse: "60 km/h",
      explication: "Vitesse = distance ÷ temps = 150 ÷ 2,5 = 60 km/h.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un article à 80 € subit une hausse de 25 %, puis une baisse de 20 % sur le nouveau prix. Quel est le prix final ?",
      reponse: "80 €",
      explication: "80 × 1,25 = 100 €, puis 100 × 0,80 = 80 €. Le prix revient à sa valeur initiale.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Sur une carte à l'échelle 1/50 000, une distance de 3 cm sur la carte correspond en réalité à :",
      choix: ["1,5 km", "15 km", "150 km", "0,15 km"],
      bonneReponse: 0,
      explication: "3 × 50 000 = 150 000 cm = 1 500 m = 1,5 km.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Dans une classe de 25 élèves, 40 % sont des filles. Combien y a-t-il de filles et combien de garçons ?",
      reponse: "10 filles et 15 garçons",
      explication: "40 % de 25 = (40 × 25) ÷ 100 = 10 filles, donc 25 − 10 = 15 garçons.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule 20 % de 50.",
      choix: ["10", "20", "5", "100"],
      bonneReponse: 0,
      explication: "20 % de 50 = (20 × 50) ÷ 100 = 10.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "2 kg de tomates coûtent 6 €. Combien coûtent 5 kg ?",
      reponse: "15 €",
      explication: "Coefficient : 6 ÷ 2 = 3 €/kg. Pour 5 kg : 5 × 3 = 15 €.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Augmenter 40 € de 10 % donne :",
      choix: ["44 €", "50 €", "36 €", "41 €"],
      bonneReponse: 0,
      explication: "40 × 1,10 = 44 €.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Diminue 90 € de 20 %.",
      reponse: "72 €",
      explication: "90 × 0,80 = 72 €.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un article coûte 55 € après une hausse de 10 %. Quel était son prix initial ?",
      reponse: "50 €",
      explication: "55 = prix initial × 1,10, donc prix initial = 55 ÷ 1,10 = 50 €.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Proportionnalité et pourcentages",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Calcule 25 % de 60.",
          choix: ["15", "25", "20", "30"],
          bonneReponse: 0,
          explication: "25 % de 60 = (25 × 60) ÷ 100 = 15.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "3 kg de pêches coûtent 9 €. Combien coûte 1 kg ?",
          reponse: "3 €",
          explication: "Coefficient : 9 ÷ 3 = 3 €/kg.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Augmenter 200 € de 5 % donne :",
          choix: ["210 €", "205 €", "195 €", "220 €"],
          bonneReponse: 0,
          explication: "200 × 1,05 = 210 €.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Diminue 150 € de 40 %.",
          reponse: "90 €",
          explication: "150 × 0,60 = 90 €.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Une pizzeria vend une pizza 12 € après une réduction de 20 % pendant une promotion. Quel était son prix avant la promotion ?",
          reponse: "15 €",
          explication: "12 = prix initial × 0,80, donc prix initial = 12 ÷ 0,80 = 15 €.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Sur une carte à l'échelle 1/25 000, une distance réelle de 5 km correspond à quelle distance sur la carte, en cm ?",
          reponse: "20 cm",
          explication: "5 km = 500 000 cm. 500 000 ÷ 25 000 = 20 cm.",
        },
      ],
    },
    {
      titre: "Examen 2 — Proportionnalité et pourcentages",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Calcule 10 % de 350.",
          choix: ["35", "10", "3,5", "350"],
          bonneReponse: 0,
          explication: "10 % de 350 = (10 × 350) ÷ 100 = 35.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "6 kg de farine coûtent 12 €. Combien coûte 1 kg ?",
          reponse: "2 €",
          explication: "Coefficient : 12 ÷ 6 = 2 €/kg.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Diminuer 80 € de 25 % donne :",
          choix: ["60 €", "20 €", "100 €", "55 €"],
          bonneReponse: 0,
          explication: "80 × 0,75 = 60 €.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Augmente 250 € de 8 %.",
          reponse: "270 €",
          explication: "250 × 1,08 = 270 €.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un vélo coûte 180 € après une hausse de 20 %. Quel était son prix initial ?",
          reponse: "150 €",
          explication: "180 = prix initial × 1,20, donc prix initial = 180 ÷ 1,20 = 150 €.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Dans un lycée de 400 élèves, 35 % pratiquent un sport en club. Combien d'élèves cela représente-t-il ?",
          reponse: "140 élèves",
          explication: "35 % de 400 = (35 × 400) ÷ 100 = 140.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Deux grandeurs sont proportionnelles si l'une s'obtient en multipliant l'autre par un même coefficient k (y = k × x).",
    "Produit en croix : a/b = c/d équivaut à a×d = b×c ; très utile pour trouver une valeur manquante.",
    "x % d'une quantité N se calcule ainsi : (x × N) ÷ 100.",
    "Augmenter de t % revient à multiplier par (1 + t/100) ; diminuer de t % revient à multiplier par (1 − t/100).",
    "Pour retrouver la valeur initiale après une évolution, on divise par le coefficient multiplicateur (jamais de soustraction directe du pourcentage).",
    "Les pourcentages, les échelles de carte et les vitesses constantes sont toutes des situations de proportionnalité.",
  ],
};

export default chapitre;
