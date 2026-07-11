import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "fractions-operations",
  titre: "Opérations sur les fractions",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Additionner, soustraire, multiplier et diviser des fractions, en sachant simplifier et réduire au même dénominateur quand c'est nécessaire.",
  objectifs: [
    "Simplifier une fraction en cherchant un diviseur commun",
    "Additionner et soustraire des fractions de même dénominateur ou de dénominateurs différents",
    "Multiplier deux fractions entre elles",
    "Diviser une fraction par une autre en utilisant l'inverse",
    "Éviter les erreurs classiques et simplifier systématiquement les résultats",
  ],
  slides: [
    {
      titre: "Rappel : qu'est-ce qu'une fraction ?",
      illustration: "🍕",
      visuel: "3/4",
      contenu: [
        "a/b représente a parts sur b parts égales (avec b différent de 0)",
        "3/4 d'une pizza : on la partage en 4 parts égales, on en prend 3",
        "a est le numérateur, b est le dénominateur",
        "Une fraction représente aussi le quotient a ÷ b",
      ],
      voixOff:
        "Petit rappel avant de commencer. Une fraction a sur b représente a parts sur b parts égales, avec b différent de zéro. Trois quarts d'une pizza, c'est la pizza partagée en quatre parts égales, dont on prend trois. Le nombre du haut s'appelle le numérateur, celui du bas le dénominateur. Une fraction, c'est aussi une autre façon d'écrire une division.",
    },
    {
      titre: "Fractions égales et simplification",
      illustration: "🔍",
      visuel: "6/8 = 3/4",
      contenu: [
        "On ne change pas la valeur d'une fraction en multipliant ou divisant numérateur ET dénominateur par le même nombre",
        "6/8 = (6÷2)/(8÷2) = 3/4",
        "Une fraction est irréductible quand on ne peut plus la simplifier",
        "Astuce : chercher le plus grand diviseur commun au numérateur et au dénominateur",
      ],
      voixOff:
        "On ne change jamais la valeur d'une fraction en multipliant ou en divisant le numérateur ET le dénominateur par le même nombre. Six huitièmes, divisé en haut et en bas par deux, donne trois quarts. Une fraction est dite irréductible quand on ne peut plus la simplifier. L'astuce, c'est de chercher le plus grand diviseur commun aux deux nombres.",
    },
    {
      titre: "Additionner : même dénominateur",
      illustration: "➕",
      visuel: "2/5 + 1/5 = 3/5",
      contenu: [
        "a/c + b/c = (a+b)/c : on additionne les numérateurs, le dénominateur ne change pas",
        "2/5 + 1/5 = 3/5",
        "7/9 − 4/9 = 3/9 = 1/3 (ne pas oublier de simplifier !)",
        "Cette règle vaut aussi bien pour l'addition que pour la soustraction",
      ],
      voixOff:
        "Quand deux fractions ont le même dénominateur, c'est simple : on additionne les numérateurs et on garde le même dénominateur. Deux cinquièmes plus un cinquième égale trois cinquièmes. Sept neuvièmes moins quatre neuvièmes égale trois neuvièmes, qu'il ne faut pas oublier de simplifier en un tiers. Cette règle marche aussi bien pour l'addition que pour la soustraction.",
    },
    {
      titre: "Dénominateurs différents",
      illustration: "🔗",
      visuel: "1/2 + 1/3 = 3/6 + 2/6 = 5/6",
      contenu: [
        "Il faut d'abord trouver un dénominateur commun aux deux fractions",
        "1/2 = 3/6 et 1/3 = 2/6, donc 1/2 + 1/3 = 3/6 + 2/6 = 5/6",
        "Astuce simple : multiplier les deux dénominateurs entre eux (ici 2 × 3 = 6)",
        "2/3 + 1/4 = 8/12 + 3/12 = 11/12",
      ],
      voixOff:
        "Si les dénominateurs sont différents, il faut d'abord réduire les deux fractions au même dénominateur. Un demi devient trois sixièmes, un tiers devient deux sixièmes, et un demi plus un tiers égale cinq sixièmes. L'astuce la plus simple, c'est de multiplier les deux dénominateurs entre eux. Deux tiers plus un quart devient huit douzièmes plus trois douzièmes, soit onze douzièmes.",
    },
    {
      titre: "Soustraire des fractions",
      illustration: "➖",
      visuel: "5/6 − 1/4 = 7/12",
      contenu: [
        "Même méthode que l'addition : dénominateur commun, puis on soustrait les numérateurs",
        "5/6 − 1/4 : dénominateur commun 12 → 10/12 − 3/12 = 7/12",
        "3/4 − 3/4 = 0",
        "Toujours vérifier si le résultat peut être simplifié",
      ],
      voixOff:
        "La soustraction suit exactement la même méthode que l'addition : on réduit au même dénominateur, puis on soustrait les numérateurs. Cinq sixièmes moins un quart : le dénominateur commun est douze, cela donne dix douzièmes moins trois douzièmes, soit sept douzièmes. Trois quarts moins trois quarts égale zéro. Pense toujours à vérifier si le résultat peut être simplifié.",
    },
    {
      titre: "Multiplier des fractions",
      illustration: "✖️",
      visuel: "2/3 × 4/5 = 8/15",
      contenu: [
        "a/b × c/d = (a×c)/(b×d) : on multiplie les numérateurs entre eux et les dénominateurs entre eux",
        "2/3 × 4/5 = (2×4)/(3×5) = 8/15",
        "Pas besoin de dénominateur commun pour multiplier !",
        "On peut simplifier avant ou après avoir multiplié",
      ],
      voixOff:
        "Pour multiplier deux fractions, rien de plus simple : on multiplie les numérateurs entre eux, et les dénominateurs entre eux. Deux tiers fois quatre cinquièmes égale huit quinzièmes. Contrairement à l'addition, pas besoin de dénominateur commun pour multiplier. Et tu peux simplifier avant ou après avoir fait le calcul.",
    },
    {
      titre: "Diviser des fractions",
      illustration: "🔄",
      visuel: "2/3 ÷ 4/5 = 2/3 × 5/4 = 5/6",
      contenu: [
        "Diviser par une fraction = multiplier par son inverse",
        "L'inverse de a/b est b/a (a et b non nuls)",
        "2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6",
        "5 ÷ 2/3 = 5 × 3/2 = 15/2",
      ],
      voixOff:
        "Diviser par une fraction, c'est la même chose que multiplier par son inverse. L'inverse de a sur b, c'est b sur a. Deux tiers divisé par quatre cinquièmes devient deux tiers multiplié par cinq quarts, ce qui donne dix douzièmes, soit cinq sixièmes une fois simplifié. Cinq divisé par deux tiers devient cinq multiplié par trois demis, soit quinze demis.",
    },
    {
      titre: "Priorités et pièges",
      illustration: "⚠️",
      visuel: "2/3 + 1/4 ≠ 3/7",
      contenu: [
        "Piège fréquent : on n'additionne jamais numérateurs et dénominateurs séparément !",
        "2/3 + 1/4 n'est PAS égal à 3/7",
        "Comme pour tous les nombres : parenthèses, puis × et ÷, puis + et −",
        "Toujours simplifier le résultat final si possible",
      ],
      voixOff:
        "Attention au piège le plus fréquent avec les fractions : on n'additionne jamais les numérateurs entre eux et les dénominateurs entre eux séparément. Deux tiers plus un quart n'est absolument pas égal à trois septièmes. Les priorités opératoires restent les mêmes que d'habitude : parenthèses d'abord, puis multiplications et divisions, puis additions et soustractions. Et pense toujours à simplifier ton résultat final.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Simplifier : diviser numérateur et dénominateur par un diviseur commun",
        "Addition/soustraction : même dénominateur obligatoire, puis on combine les numérateurs",
        "Multiplication : numérateurs entre eux, dénominateurs entre eux (pas de dénominateur commun requis)",
        "Division : multiplier par l'inverse de la fraction diviseur",
      ],
      voixOff:
        "Résumons. Pour simplifier une fraction, on divise le numérateur et le dénominateur par un même diviseur commun. Pour additionner ou soustraire, il faut d'abord un dénominateur commun, puis on combine les numérateurs. Pour multiplier, on multiplie simplement les numérateurs entre eux et les dénominateurs entre eux. Pour diviser, on multiplie par l'inverse de la fraction diviseur. Et n'oublie jamais de simplifier ton résultat final !",
    },
  ],
  fiche: {
    intro:
      "Les quatre opérations sur les fractions suivent des règles précises : dénominateur commun pour additionner ou soustraire, multiplication directe des numérateurs et des dénominateurs, et inverse pour diviser.",
    sections: [
      {
        titre: "Simplifier une fraction",
        points: [
          "On divise le numérateur et le dénominateur par un même diviseur commun",
          "6/8 = 3/4 (on a divisé par 2)",
          "Une fraction est irréductible quand on ne peut plus la simplifier",
        ],
      },
      {
        titre: "Addition et soustraction",
        points: [
          "Même dénominateur : on combine directement les numérateurs (2/5 + 1/5 = 3/5)",
          "Dénominateurs différents : on réduit d'abord au même dénominateur",
          "Astuce : multiplier les deux dénominateurs entre eux pour en trouver un commun",
          "1/2 + 1/3 = 3/6 + 2/6 = 5/6",
        ],
      },
      {
        titre: "Multiplication",
        points: [
          "a/b × c/d = (a×c)/(b×d) : numérateurs entre eux, dénominateurs entre eux",
          "2/3 × 4/5 = 8/15",
          "Pas besoin de dénominateur commun",
        ],
      },
      {
        titre: "Division",
        points: [
          "Diviser par une fraction = multiplier par son inverse",
          "L'inverse de a/b est b/a",
          "2/3 ÷ 4/5 = 2/3 × 5/4 = 5/6",
          "Piège à éviter : ne jamais additionner numérateurs et dénominateurs séparément",
        ],
      },
    ],
    audio:
      "Fiche de révision : les opérations sur les fractions. Pour simplifier une fraction, on divise le numérateur et le dénominateur par un même diviseur commun. Pour additionner ou soustraire deux fractions, il faut d'abord qu'elles aient le même dénominateur : si ce n'est pas le cas, on les réduit au même dénominateur, par exemple en multipliant les deux dénominateurs entre eux. Ensuite, on combine simplement les numérateurs. Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux, sans besoin de dénominateur commun. Pour diviser par une fraction, on multiplie par son inverse : l'inverse de a sur b est b sur a. Attention au piège le plus fréquent : on n'additionne jamais numérateurs et dénominateurs séparément. Et pense toujours à simplifier ton résultat final.",
  },
  memoCards: [
    { recto: "Que représente la fraction a/b ?", verso: "a parts sur b parts égales (b non nul) ; c'est aussi le quotient a ÷ b." },
    { recto: "Comment simplifier une fraction ?", verso: "On divise le numérateur et le dénominateur par un même diviseur commun. Ex : 6/8 = 3/4." },
    { recto: "Additionner deux fractions de même dénominateur ?", verso: "On additionne les numérateurs, le dénominateur ne change pas. Ex : 2/5 + 1/5 = 3/5." },
    { recto: "Additionner deux fractions de dénominateurs différents ?", verso: "On les réduit d'abord au même dénominateur. Ex : 1/2 + 1/3 = 3/6 + 2/6 = 5/6." },
    { recto: "Multiplier deux fractions ?", verso: "a/b × c/d = (a×c)/(b×d). Ex : 2/3 × 4/5 = 8/15. Pas besoin de dénominateur commun." },
    { recto: "Diviser par une fraction ?", verso: "On multiplie par son inverse. Ex : 2/3 ÷ 4/5 = 2/3 × 5/4 = 5/6." },
    { recto: "L'inverse de a/b, c'est quoi ?", verso: "b/a (avec a et b non nuls). Ex : l'inverse de 3/5 est 5/3." },
    { recto: "Piège fréquent à éviter ?", verso: "Ne jamais additionner numérateurs et dénominateurs séparément : 2/3 + 1/4 ≠ 3/7." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Simplifie 8/12.",
      choix: ["2/3", "4/6", "3/4", "1/2"],
      bonneReponse: 0,
      explication: "8 et 12 ont pour diviseur commun 4 : 8÷4 = 2 et 12÷4 = 3, donc 8/12 = 2/3.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "3/7 + 2/7 = ?",
      choix: ["5/7", "5/14", "6/7", "1"],
      bonneReponse: 0,
      explication: "Même dénominateur : on additionne les numérateurs. 3 + 2 = 5, donc 5/7.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule 4/9 − 1/9.",
      reponse: "1/3",
      explication: "Même dénominateur : 4 − 1 = 3, soit 3/9, que l'on simplifie en 1/3.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'inverse de 3/5 est :",
      choix: ["5/3", "3/5", "−3/5", "1/5"],
      bonneReponse: 0,
      explication: "L'inverse de a/b est b/a. L'inverse de 3/5 est donc 5/3.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule 1/2 + 1/3.",
      reponse: "5/6",
      explication: "Dénominateur commun 6 : 1/2 = 3/6 et 1/3 = 2/6, donc 3/6 + 2/6 = 5/6.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "2/3 × 3/4 = ?",
      choix: ["1/2", "5/7", "6/7", "1"],
      bonneReponse: 0,
      explication: "2×3 = 6 et 3×4 = 12, donc 6/12, que l'on simplifie en 1/2.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule 5/6 − 1/4.",
      reponse: "7/12",
      explication: "Dénominateur commun 12 : 5/6 = 10/12 et 1/4 = 3/12, donc 10/12 − 3/12 = 7/12.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "3/4 ÷ 1/2 = ?",
      choix: ["3/8", "3/2", "2/3", "4/3"],
      bonneReponse: 1,
      explication: "On multiplie par l'inverse : 3/4 × 2/1 = 6/4, que l'on simplifie en 3/2.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule 2/3 + 1/4 − 1/6.",
      reponse: "3/4",
      explication: "Dénominateur commun 12 : 8/12 + 3/12 − 2/12 = 9/12, que l'on simplifie en 3/4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule (2/3 × 3/5) ÷ 4/5.",
      reponse: "1/2",
      explication: "2/3 × 3/5 = 6/15 = 2/5. Puis 2/5 ÷ 4/5 = 2/5 × 5/4 = 10/20 = 1/2.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel est le résultat de 5 ÷ 2/3 ?",
      choix: ["15/2", "10/3", "2/15", "3/10"],
      bonneReponse: 0,
      explication: "5 ÷ 2/3 = 5 × 3/2 = 15/2 (5 s'écrit 5/1).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Léa mange 1/4 d'une tarte, puis 1/3 de la même tarte. Quelle fraction de la tarte a-t-elle mangée en tout, et quelle fraction reste-t-il ?",
      reponse: "Elle a mangé 7/12 de la tarte, et il en reste 5/12.",
      explication: "1/4 + 1/3 = 3/12 + 4/12 = 7/12 mangés. Il reste donc 12/12 − 7/12 = 5/12.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Simplifie 10/15.",
      choix: ["2/3", "1/2", "5/10", "3/5"],
      bonneReponse: 0,
      explication: "10 et 15 ont pour diviseur commun 5 : 10÷5 = 2 et 15÷5 = 3, donc 2/3.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule 5/8 + 1/8.",
      reponse: "3/4",
      explication: "Même dénominateur : 5 + 1 = 6, soit 6/8, que l'on simplifie en 3/4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "3/5 − 1/4 = ?",
      choix: ["7/20", "2/1", "2/9", "7/9"],
      bonneReponse: 0,
      explication: "Dénominateur commun 20 : 3/5 = 12/20 et 1/4 = 5/20, donc 12/20 − 5/20 = 7/20.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule 3/4 × 2/9.",
      reponse: "1/6",
      explication: "3×2 = 6 et 4×9 = 36, donc 6/36, que l'on simplifie en 1/6.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule 7/10 ÷ 14/5.",
      reponse: "1/4",
      explication: "7/10 ÷ 14/5 = 7/10 × 5/14 = 35/140, que l'on simplifie en 1/4.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Opérations sur les fractions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "2/9 + 5/9 = ?",
          choix: ["7/9", "7/18", "10/9", "2/5"],
          bonneReponse: 0,
          explication: "Même dénominateur : 2 + 5 = 7, donc 7/9.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Simplifie 12/18.",
          reponse: "2/3",
          explication: "12 et 18 ont pour diviseur commun 6 : 12÷6 = 2 et 18÷6 = 3, donc 2/3.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "1/3 + 1/6 = ?",
          choix: ["1/2", "2/9", "1/9", "2/6"],
          bonneReponse: 0,
          explication: "Dénominateur commun 6 : 1/3 = 2/6, donc 2/6 + 1/6 = 3/6 = 1/2.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule 5/6 − 1/3.",
          reponse: "1/2",
          explication: "Dénominateur commun 6 : 1/3 = 2/6, donc 5/6 − 2/6 = 3/6 = 1/2.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule 3/5 × 10/9.",
          reponse: "2/3",
          explication: "3×10 = 30 et 5×9 = 45, donc 30/45, que l'on simplifie en 2/3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un jardinier plante des fleurs sur 2/5 d'un terrain la première semaine, puis sur 1/4 du terrain la seconde semaine. Quelle fraction du terrain a-t-il plantée en tout ?",
          reponse: "13/20 du terrain",
          explication: "Dénominateur commun 20 : 2/5 = 8/20 et 1/4 = 5/20, donc 8/20 + 5/20 = 13/20.",
        },
      ],
    },
    {
      titre: "Examen 2 — Opérations sur les fractions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "7/10 − 3/10 = ?",
          choix: ["2/5", "1/5", "3/5", "4/5"],
          bonneReponse: 0,
          explication: "Même dénominateur : 7 − 3 = 4, soit 4/10, que l'on simplifie en 2/5.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne l'inverse de 7/2.",
          reponse: "2/7",
          explication: "L'inverse de a/b est b/a. L'inverse de 7/2 est donc 2/7.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "2/5 × 5/8 = ?",
          choix: ["1/4", "10/13", "2/3", "7/40"],
          bonneReponse: 0,
          explication: "2×5 = 10 et 5×8 = 40, donc 10/40, que l'on simplifie en 1/4.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule 4/9 ÷ 2/3.",
          reponse: "2/3",
          explication: "4/9 ÷ 2/3 = 4/9 × 3/2 = 12/18, que l'on simplifie en 2/3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule 5/6 − 1/4 + 1/3.",
          reponse: "11/12",
          explication: "Dénominateur commun 12 : 10/12 − 3/12 + 4/12 = 11/12.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une recette nécessite 3/4 de litre de lait pour la quantité totale. On veut préparer seulement 2/3 de la recette. Quelle quantité de lait faut-il ?",
          reponse: "1/2 litre de lait",
          explication: "3/4 × 2/3 = 6/12, que l'on simplifie en 1/2 litre.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "a/b représente a parts sur b parts égales (b non nul) ; simplifier consiste à diviser numérateur et dénominateur par un diviseur commun.",
    "Addition et soustraction : il faut le même dénominateur. Si ce n'est pas le cas, on réduit d'abord au même dénominateur avant de combiner les numérateurs.",
    "Multiplication : on multiplie directement les numérateurs entre eux et les dénominateurs entre eux, sans dénominateur commun.",
    "Division : diviser par une fraction revient à multiplier par son inverse (l'inverse de a/b est b/a).",
    "Piège à éviter absolument : ne jamais additionner numérateurs et dénominateurs séparément (2/3 + 1/4 ≠ 3/7).",
    "Toujours simplifier le résultat final quand c'est possible.",
  ],
};

export default chapitre;
