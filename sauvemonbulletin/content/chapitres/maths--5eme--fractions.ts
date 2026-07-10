import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "fractions",
  titre: "Les fractions",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Comprendre ce qu'est une fraction, savoir la simplifier, comparer des fractions et les additionner quand elles ont le même dénominateur.",
  objectifs: [
    "Savoir ce que représentent le numérateur et le dénominateur",
    "Reconnaître des fractions égales et simplifier une fraction",
    "Comparer des fractions et les placer sur une droite graduée",
    "Additionner et soustraire des fractions de même dénominateur",
    "Prendre une fraction d'une quantité (ex. les 3/4 de 20)",
  ],
  slides: [
    {
      titre: "C'est quoi, une fraction ?",
      illustration: "🍕",
      visuel: "3/4",
      contenu: [
        "Une fraction représente un partage en parts égales",
        "Le dénominateur (en bas) : en combien de parts on coupe",
        "Le numérateur (en haut) : combien de parts on prend",
        "3/4 d'une pizza = on coupe en 4, on prend 3 parts",
      ],
      voixOff:
        "Une fraction, c'est une façon d'écrire un partage en parts égales. Le nombre du bas, le dénominateur, indique en combien de parts on coupe. Le nombre du haut, le numérateur, indique combien de parts on prend. Par exemple, trois quarts d'une pizza : on coupe la pizza en quatre parts égales, et on en prend trois.",
    },
    {
      titre: "Une fraction est un nombre",
      illustration: "📏",
      visuel: "7/4 = 1,75",
      contenu: [
        "Une fraction, c'est aussi le résultat d'une division",
        "7/4 = 7 ÷ 4 = 1,75",
        "On peut placer une fraction sur une droite graduée",
        "7/4 est entre 1 et 2, car 4/4 = 1 et 8/4 = 2",
      ],
      voixOff:
        "Attention, une fraction n'est pas seulement un partage : c'est un vrai nombre. Sept quarts, c'est sept divisé par quatre, c'est-à-dire un virgule soixante-quinze. On peut donc placer une fraction sur une droite graduée : sept quarts se trouve entre un et deux.",
    },
    {
      titre: "Fractions égales",
      illustration: "⚖️",
      visuel: "1/2 = 2/4 = 5/10",
      contenu: [
        "Deux fractions peuvent être égales sans se ressembler",
        "Règle d'or : multiplier (ou diviser) le haut ET le bas par le même nombre",
        "1/2 = 2/4 (on a multiplié haut et bas par 2)",
        "50/100 = 1/2 (on a divisé haut et bas par 50)",
      ],
      voixOff:
        "Deux fractions peuvent être égales même si elles s'écrivent différemment. La règle d'or : si on multiplie ou si on divise le numérateur et le dénominateur par le même nombre, la fraction ne change pas de valeur. Un demi égale deux quarts, égale cinq dixièmes.",
    },
    {
      titre: "Simplifier une fraction",
      illustration: "✂️",
      visuel: "12/18 = 2/3",
      contenu: [
        "Simplifier = trouver une écriture plus simple de la même fraction",
        "On divise haut et bas par un diviseur commun",
        "12/18 : on divise par 6 → 2/3",
        "Une fraction est irréductible quand on ne peut plus simplifier",
      ],
      voixOff:
        "Simplifier une fraction, c'est trouver une écriture plus simple du même nombre. Pour cela, on divise le numérateur et le dénominateur par un même diviseur. Douze dix-huitièmes : douze et dix-huit sont tous les deux dans la table de six, donc on divise par six, et on obtient deux tiers. Quand on ne peut plus simplifier, la fraction est dite irréductible.",
    },
    {
      titre: "Comparer des fractions (même dénominateur)",
      illustration: "🥇",
      visuel: "5/7 > 3/7",
      contenu: [
        "Même dénominateur = parts de même taille",
        "La plus grande fraction est celle qui a le plus grand numérateur",
        "5/7 > 3/7 car 5 parts, c'est plus que 3 parts",
      ],
      voixOff:
        "Quand deux fractions ont le même dénominateur, les parts ont la même taille. Il suffit donc de comparer les numérateurs : cinq septièmes est plus grand que trois septièmes, car cinq parts, c'est plus que trois parts.",
    },
    {
      titre: "Comparer une fraction à 1",
      illustration: "🎯",
      visuel: "9/5 > 1 ;  4/9 < 1",
      contenu: [
        "Si le numérateur < dénominateur : la fraction est plus petite que 1",
        "Si le numérateur > dénominateur : la fraction est plus grande que 1",
        "Si numérateur = dénominateur : la fraction vaut exactement 1",
      ],
      voixOff:
        "Pour comparer une fraction à un, on regarde le haut et le bas. Si le numérateur est plus petit que le dénominateur, la fraction est plus petite que un. S'il est plus grand, la fraction dépasse un. Et s'ils sont égaux, la fraction vaut exactement un.",
    },
    {
      titre: "Mettre au même dénominateur",
      illustration: "🔧",
      visuel: "2/3 = 8/12  et  3/4 = 9/12",
      contenu: [
        "Pour comparer 2/3 et 3/4, on cherche un dénominateur commun : 12",
        "2/3 = 8/12 (×4)  ;  3/4 = 9/12 (×3)",
        "Donc 3/4 > 2/3",
        "Astuce : le produit des dénominateurs marche toujours (3 × 4 = 12)",
      ],
      voixOff:
        "Pour comparer deux tiers et trois quarts, on les écrit avec le même dénominateur. Douze est dans la table de trois et dans la table de quatre. Deux tiers égale huit douzièmes, trois quarts égale neuf douzièmes. On voit alors que trois quarts est plus grand que deux tiers.",
    },
    {
      titre: "Additionner des fractions (même dénominateur)",
      illustration: "➕",
      visuel: "2/9 + 5/9 = 7/9",
      contenu: [
        "On additionne les numérateurs",
        "On garde le dénominateur",
        "2/9 + 5/9 = 7/9",
        "⚠️ On n'additionne JAMAIS les dénominateurs !",
      ],
      voixOff:
        "Pour additionner deux fractions qui ont le même dénominateur, on additionne les numérateurs et on garde le dénominateur. Deux neuvièmes plus cinq neuvièmes égale sept neuvièmes. Attention, l'erreur classique : on n'additionne jamais les dénominateurs entre eux !",
    },
    {
      titre: "Prendre une fraction d'une quantité",
      illustration: "🧮",
      visuel: "3/4 de 20 = 15",
      contenu: [
        "« Prendre les 3/4 de 20 » = calculer (20 ÷ 4) × 3",
        "20 ÷ 4 = 5, puis 5 × 3 = 15",
        "Autre méthode : (3 × 20) ÷ 4 = 60 ÷ 4 = 15",
        "Utile partout : soldes, recettes, statistiques...",
      ],
      voixOff:
        "Prendre une fraction d'une quantité, c'est très utile dans la vie courante. Les trois quarts de vingt : on divise vingt par quatre, ce qui donne cinq, puis on multiplie par trois, ce qui donne quinze. On peut aussi multiplier d'abord : trois fois vingt égale soixante, divisé par quatre égale quinze.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Fraction = partage ET nombre (a/b = a ÷ b)",
        "Multiplier ou diviser haut et bas par le même nombre → fraction égale",
        "Même dénominateur → on compare/additionne les numérateurs",
        "Fraction d'une quantité : diviser puis multiplier",
      ],
      voixOff:
        "Résumons. Une fraction est à la fois un partage et un nombre. On obtient une fraction égale en multipliant ou divisant le haut et le bas par le même nombre. Avec un même dénominateur, on compare ou on additionne simplement les numérateurs. Et pour prendre une fraction d'une quantité, on divise puis on multiplie. Bravo, tu connais maintenant l'essentiel sur les fractions !",
    },
  ],
  fiche: {
    intro:
      "Une fraction a/b représente un partage en b parts égales dont on prend a parts. C'est aussi le nombre a ÷ b.",
    sections: [
      {
        titre: "Vocabulaire",
        points: [
          "Numérateur : nombre du haut (parts prises)",
          "Dénominateur : nombre du bas (parts du partage)",
          "Fraction irréductible : fraction qu'on ne peut plus simplifier",
        ],
      },
      {
        titre: "Fractions égales et simplification",
        points: [
          "a/b ne change pas si on multiplie ou divise haut ET bas par le même nombre",
          "Simplifier : diviser haut et bas par un diviseur commun (12/18 = 2/3 en divisant par 6)",
        ],
      },
      {
        titre: "Comparaison",
        points: [
          "Même dénominateur → plus grand numérateur = plus grande fraction",
          "Comparer à 1 : numérateur < dénominateur → fraction < 1",
          "Dénominateurs différents → mettre au même dénominateur d'abord",
        ],
      },
      {
        titre: "Addition et soustraction",
        points: [
          "Même dénominateur : on additionne (ou soustrait) les numérateurs, on garde le dénominateur",
          "2/9 + 5/9 = 7/9 — ne jamais additionner les dénominateurs",
        ],
      },
      {
        titre: "Fraction d'une quantité",
        points: [
          "Les a/b de N = (N ÷ b) × a",
          "Exemple : les 3/4 de 20 = (20 ÷ 4) × 3 = 15",
        ],
      },
    ],
    audio:
      "Fiche de révision : les fractions. Une fraction représente un partage en parts égales : le dénominateur, en bas, indique en combien de parts on coupe, et le numérateur, en haut, combien de parts on prend. Une fraction est aussi un nombre : a sur b égale a divisé par b. Pour obtenir une fraction égale, on multiplie ou on divise le numérateur et le dénominateur par le même nombre ; simplifier, c'est diviser haut et bas par un diviseur commun. Pour comparer deux fractions de même dénominateur, on compare les numérateurs. Si les dénominateurs sont différents, on les met d'abord au même dénominateur. Pour additionner deux fractions de même dénominateur, on additionne les numérateurs et on garde le dénominateur : attention, on n'additionne jamais les dénominateurs. Enfin, pour prendre une fraction d'une quantité, on divise par le dénominateur puis on multiplie par le numérateur : les trois quarts de vingt font quinze.",
  },
  memoCards: [
    { recto: "Que représente le dénominateur ?", verso: "Le nombre de parts égales du partage (le nombre du bas)." },
    { recto: "Que représente le numérateur ?", verso: "Le nombre de parts que l'on prend (le nombre du haut)." },
    { recto: "a/b, c'est quelle opération ?", verso: "a ÷ b. Une fraction est un nombre. Ex : 7/4 = 1,75" },
    { recto: "Comment obtenir une fraction égale ?", verso: "Multiplier ou diviser le haut ET le bas par le même nombre. Ex : 1/2 = 5/10" },
    { recto: "Simplifier 12/18", verso: "12/18 = 2/3 (on divise haut et bas par 6)." },
    { recto: "Comparer 5/7 et 3/7", verso: "5/7 > 3/7 : même dénominateur, on compare les numérateurs." },
    { recto: "Quand une fraction est-elle plus petite que 1 ?", verso: "Quand le numérateur est plus petit que le dénominateur. Ex : 4/9 < 1" },
    { recto: "2/9 + 5/9 = ?", verso: "7/9 : on additionne les numérateurs, on GARDE le dénominateur." },
    { recto: "Les 3/4 de 20 = ?", verso: "(20 ÷ 4) × 3 = 15. Diviser par le bas, multiplier par le haut." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans la fraction 5/8, que représente le 8 ?",
      choix: ["Le numérateur", "Le dénominateur", "Le quotient", "Le reste"],
      bonneReponse: 1,
      explication: "Le 8 est en bas : c'est le dénominateur, le nombre de parts égales du partage.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle fraction est égale à 1/2 ?",
      choix: ["2/3", "3/6", "1/4", "2/5"],
      bonneReponse: 1,
      explication: "3/6 = 1/2 car on divise le haut et le bas par 3.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule : 3/11 + 6/11",
      reponse: "9/11",
      explication: "Même dénominateur : on additionne les numérateurs (3 + 6 = 9) et on garde le dénominateur 11.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle fraction est plus grande que 1 ?",
      choix: ["3/5", "7/7", "9/4", "2/9"],
      bonneReponse: 2,
      explication: "9/4 > 1 car le numérateur (9) est plus grand que le dénominateur (4).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Simplifie la fraction 24/36 pour la rendre irréductible.",
      reponse: "2/3",
      explication: "On divise haut et bas par 12 : 24 ÷ 12 = 2 et 36 ÷ 12 = 3. On peut aussi simplifier en plusieurs étapes (par 2, puis 2, puis 3).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Compare 2/3 et 3/5 (utilise un dénominateur commun).",
      reponse: "2/3 > 3/5",
      explication: "Dénominateur commun 15 : 2/3 = 10/15 et 3/5 = 9/15. Donc 2/3 > 3/5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un collège compte 600 élèves. Les 2/5 sont demi-pensionnaires. Combien cela fait-il d'élèves ?",
      reponse: "240 élèves",
      explication: "Les 2/5 de 600 = (600 ÷ 5) × 2 = 120 × 2 = 240.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Range dans l'ordre croissant : 5/6 ; 1/6 ; 7/6",
      choix: ["5/6 < 1/6 < 7/6", "1/6 < 5/6 < 7/6", "7/6 < 5/6 < 1/6", "1/6 < 7/6 < 5/6"],
      bonneReponse: 1,
      explication: "Même dénominateur : on range selon les numérateurs, 1 < 5 < 7.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule 7/12 + 5/12 − 3/12 et simplifie le résultat.",
      reponse: "9/12 = 3/4",
      explication: "7 + 5 − 3 = 9, donc 9/12. On simplifie en divisant haut et bas par 3 : 3/4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Lors des soldes, un jean à 48 € est vendu aux 3/4 de son prix. Quel est son nouveau prix ?",
      reponse: "36 €",
      explication: "Les 3/4 de 48 = (48 ÷ 4) × 3 = 12 × 3 = 36 €.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Trouve le nombre manquant : 4/9 = ?/63",
      reponse: "28",
      explication: "9 × 7 = 63, donc on multiplie aussi le numérateur par 7 : 4 × 7 = 28.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Emma a lu les 2/3 d'un livre de 270 pages, puis 45 pages de plus. Combien de pages lui reste-t-il à lire ?",
      reponse: "45 pages",
      explication: "2/3 de 270 = 180 pages, plus 45 = 225 pages lues. Il reste 270 − 225 = 45 pages.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans 7/10, le numérateur est :",
      choix: ["10", "7", "0,7", "17"],
      bonneReponse: 1,
      explication: "Le numérateur est le nombre du haut : 7.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Simplifie 10/15.",
      reponse: "2/3",
      explication: "On divise haut et bas par 5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule 8/13 + 4/13.",
      reponse: "12/13",
      explication: "Même dénominateur : 8 + 4 = 12, on garde 13.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "13/13 est égal à :",
      choix: ["0", "1", "13", "26"],
      bonneReponse: 1,
      explication: "Quand numérateur = dénominateur, la fraction vaut 1.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule les 4/5 de 35.",
      reponse: "28",
      explication: "(35 ÷ 5) × 4 = 7 × 4 = 28.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les fractions",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle écriture correspond à « on partage en 6 et on prend 5 parts » ?",
          choix: ["6/5", "5/6", "5,6", "6 − 5"],
          bonneReponse: 1,
          explication: "On prend 5 parts (numérateur) d'un partage en 6 (dénominateur) : 5/6.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne l'écriture décimale de 3/4.",
          reponse: "0,75",
          explication: "3/4 = 3 ÷ 4 = 0,75.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Simplifie 18/24 au maximum.",
          reponse: "3/4",
          explication: "On divise haut et bas par 6 : 18/24 = 3/4.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Compare 4/7 et 5/7, puis 5/8 et 5/6 (justifie).",
          reponse: "4/7 < 5/7 et 5/8 < 5/6",
          explication:
            "Même dénominateur : 4/7 < 5/7. Même numérateur : plus le dénominateur est grand, plus les parts sont petites, donc 5/8 < 5/6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule 11/15 − 4/15 + 2/15.",
          reponse: "9/15 = 3/5",
          explication: "11 − 4 + 2 = 9, donc 9/15, qui se simplifie par 3 en 3/5.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une classe de 30 élèves : les 3/5 pratiquent un sport, et parmi les sportifs, la moitié fait de la danse. Combien d'élèves font de la danse ?",
          reponse: "9 élèves",
          explication: "3/5 de 30 = 18 sportifs. La moitié de 18 = 9 élèves font de la danse.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les fractions",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle fraction vaut exactement 1 ?",
          choix: ["1/2", "9/9", "10/9", "0/9"],
          bonneReponse: 1,
          explication: "Numérateur = dénominateur → la fraction vaut 1.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Complète : 3/5 = 12/?",
          reponse: "20",
          explication: "3 × 4 = 12, donc 5 × 4 = 20.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Place 5/4 entre deux entiers consécutifs.",
          reponse: "1 < 5/4 < 2",
          explication: "4/4 = 1 et 8/4 = 2, donc 5/4 est entre 1 et 2 (5/4 = 1,25).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule 5/9 + 7/9 et compare le résultat à 1.",
          reponse: "12/9 > 1",
          explication: "5 + 7 = 12, donc 12/9. Comme 12 > 9, la fraction est supérieure à 1 (12/9 = 4/3).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Range dans l'ordre croissant : 2/3 ; 3/4 ; 7/12 (mets-les au même dénominateur).",
          reponse: "7/12 < 2/3 < 3/4",
          explication: "Au dénominateur 12 : 2/3 = 8/12, 3/4 = 9/12, 7/12 = 7/12. Donc 7/12 < 8/12 < 9/12.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un réservoir de 60 L est rempli aux 2/3. On ajoute 12 L. Quelle fraction du réservoir est alors remplie ?",
          reponse: "13/15 (soit 52 L sur 60 L)",
          explication: "2/3 de 60 = 40 L, plus 12 L = 52 L. 52/60 se simplifie par 4 : 13/15.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une fraction a/b est un partage (b parts, on en prend a) ET un nombre (a ÷ b).",
    "Fractions égales : multiplier ou diviser le haut et le bas par le même nombre.",
    "Simplifier = diviser haut et bas par un diviseur commun, jusqu'à la fraction irréductible.",
    "Même dénominateur : on compare et on additionne avec les numérateurs uniquement.",
    "Fraction d'une quantité : (quantité ÷ dénominateur) × numérateur.",
    "Erreur à éviter absolument : additionner les dénominateurs entre eux.",
  ],
};

export default chapitre;
