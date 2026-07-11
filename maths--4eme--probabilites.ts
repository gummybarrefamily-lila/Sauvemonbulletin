import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "probabilites",
  titre: "Notion de probabilité",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Découvrir le vocabulaire du hasard et apprendre à calculer une probabilité dans une situation d'équiprobabilité, avec l'événement contraire et des exemples concrets.",
  objectifs: [
    "Connaître le vocabulaire du hasard : expérience aléatoire, issue, événement",
    "Calculer une probabilité en situation d'équiprobabilité",
    "Savoir qu'une probabilité est toujours comprise entre 0 et 1",
    "Utiliser l'événement contraire pour simplifier un calcul",
    "Appliquer ces notions à des exemples concrets (dé, pièce, boules, cartes)",
  ],
  slides: [
    {
      titre: "Le vocabulaire du hasard",
      illustration: "🎲",
      visuel: "expérience, issue, événement",
      contenu: [
        "Une expérience aléatoire a un résultat qu'on ne peut pas prévoir à l'avance",
        "Une issue est un résultat possible de l'expérience (ex : obtenir un 4 en lançant un dé)",
        "Un événement est un ensemble d'issues (ex : obtenir un nombre pair)",
        "L'ensemble de toutes les issues possibles s'appelle l'univers",
      ],
      voixOff:
        "Une expérience aléatoire est une expérience dont on ne peut pas prévoir le résultat à l'avance, comme lancer un dé. Une issue est un résultat possible de cette expérience, par exemple obtenir un quatre. Un événement est un ensemble d'issues, par exemple obtenir un nombre pair. L'ensemble de toutes les issues possibles s'appelle l'univers de l'expérience.",
    },
    {
      titre: "La probabilité : définition",
      illustration: "🔢",
      visuel: "P = issues favorables / issues possibles",
      contenu: [
        "La probabilité mesure la chance qu'un événement se réalise",
        "Elle est toujours comprise entre 0 et 1 (ou entre 0 % et 100 %)",
        "En situation d'équiprobabilité (toutes les issues ont la même chance), on calcule : P = nombre d'issues favorables ÷ nombre d'issues possibles",
        "Une probabilité peut s'écrire en fraction, en décimal ou en pourcentage",
      ],
      voixOff:
        "La probabilité mesure la chance qu'un événement se réalise. Elle est toujours comprise entre zéro et un, ou entre zéro et cent pour cent. Quand toutes les issues ont la même chance de se produire, on parle d'équiprobabilité, et on calcule la probabilité en divisant le nombre d'issues favorables par le nombre total d'issues possibles. Une probabilité peut s'écrire sous forme de fraction, de nombre décimal ou de pourcentage.",
    },
    {
      titre: "Calculer une probabilité",
      illustration: "🎯",
      visuel: "P(obtenir 3) = 1/6",
      contenu: [
        "On lance un dé à 6 faces équilibré : chaque face a la même chance de sortir",
        "P(obtenir 3) = 1 issue favorable ÷ 6 issues possibles = 1/6",
        "P(obtenir un nombre pair) = 3 issues favorables (2, 4, 6) ÷ 6 = 3/6 = 1/2",
        "On simplifie toujours la fraction obtenue",
      ],
      voixOff:
        "Prenons un dé à six faces parfaitement équilibré : chaque face a la même chance de sortir. La probabilité d'obtenir un trois, c'est une issue favorable sur six issues possibles, soit un sixième. La probabilité d'obtenir un nombre pair, c'est trois issues favorables, deux, quatre et six, sur six, soit trois sixièmes, que l'on simplifie en un demi. Pense toujours à simplifier la fraction obtenue.",
    },
    {
      titre: "Événement certain, impossible",
      illustration: "⚖️",
      visuel: "P = 1 certain ; P = 0 impossible",
      contenu: [
        "Un événement impossible a une probabilité de 0",
        "Un événement certain a une probabilité de 1",
        "La somme des probabilités de toutes les issues possibles vaut toujours 1",
        "Exemple : P(obtenir 7 avec un dé classique à 6 faces) = 0 (impossible)",
      ],
      voixOff:
        "Un événement impossible a une probabilité de zéro, il ne peut jamais se produire. Un événement certain a une probabilité de un, il se produit à chaque fois. Et la somme des probabilités de toutes les issues possibles d'une expérience vaut toujours un. Par exemple, avec un dé classique à six faces, obtenir un sept est impossible : sa probabilité est nulle.",
    },
    {
      titre: "L'événement contraire",
      illustration: "🔄",
      visuel: "P(A) + P(non A) = 1",
      contenu: [
        "L'événement contraire de A, noté « non A », se réalise quand A ne se réalise pas",
        "P(A) + P(non A) = 1, donc P(non A) = 1 − P(A)",
        "Exemple : P(obtenir un 6) = 1/6, donc P(ne pas obtenir 6) = 1 − 1/6 = 5/6",
        "C'est souvent plus rapide de calculer le contraire !",
      ],
      voixOff:
        "L'événement contraire d'un événement A, noté non A, se réalise exactement quand A ne se réalise pas. On a toujours P de A plus P de non A égale un, donc P de non A égale un moins P de A. Par exemple, la probabilité d'obtenir un six est un sixième, donc la probabilité de ne pas obtenir un six est un moins un sixième, soit cinq sixièmes. C'est souvent beaucoup plus rapide de calculer l'événement contraire.",
    },
    {
      titre: "Exemple avec un dé",
      illustration: "🎲",
      visuel: "P(nombre ≥ 4) = 3/6 = 1/2",
      contenu: [
        "On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un nombre supérieur ou égal à 4 ?",
        "Issues favorables : 4, 5, 6 → 3 issues",
        "P = 3/6 = 1/2",
        "Une chance sur deux, comme pile ou face",
      ],
      voixOff:
        "Prenons un exemple complet. On lance un dé à six faces : quelle est la probabilité d'obtenir un nombre supérieur ou égal à quatre ? Les issues favorables sont quatre, cinq et six, soit trois issues. La probabilité vaut donc trois sixièmes, soit un demi : une chance sur deux, comme pile ou face.",
    },
    {
      titre: "Exemple avec un sac de boules",
      illustration: "🎱",
      visuel: "5 rouges, 3 bleues, 2 vertes",
      contenu: [
        "Un sac contient 5 boules rouges, 3 bleues et 2 vertes (10 boules en tout)",
        "P(tirer une boule rouge) = 5/10 = 1/2",
        "P(tirer une boule verte) = 2/10 = 1/5",
        "On vérifie toujours : 5/10 + 3/10 + 2/10 = 10/10 = 1",
      ],
      voixOff:
        "Voici un autre exemple classique. Un sac contient cinq boules rouges, trois bleues et deux vertes, soit dix boules en tout. La probabilité de tirer une boule rouge est cinq dixièmes, soit un demi. La probabilité de tirer une boule verte est deux dixièmes, soit un cinquième. On vérifie toujours que la somme des probabilités de toutes les couleurs fait bien un.",
    },
    {
      titre: "Fréquence et probabilité",
      illustration: "📊",
      visuel: "grand nombre de répétitions",
      contenu: [
        "La fréquence est le résultat observé en répétant une expérience plusieurs fois",
        "Plus on répète l'expérience, plus la fréquence se rapproche de la probabilité théorique",
        "C'est la loi des grands nombres",
        "Exemple : sur 1 000 lancers de dé, on obtient environ un sixième de « 6 », soit environ 167 fois",
      ],
      voixOff:
        "La fréquence est le résultat qu'on observe réellement en répétant une expérience plusieurs fois. Plus on répète l'expérience, plus cette fréquence se rapproche de la probabilité théorique : c'est ce qu'on appelle la loi des grands nombres. Par exemple, sur mille lancers d'un dé, on obtient environ un sixième de six, soit environ cent soixante-sept fois.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Expérience aléatoire, issue, événement : le vocabulaire de base du hasard",
        "En équiprobabilité : P = nombre d'issues favorables ÷ nombre d'issues possibles",
        "0 ≤ P ≤ 1 ; P = 0 impossible ; P = 1 certain ; la somme des probabilités vaut 1",
        "Événement contraire : P(non A) = 1 − P(A)",
      ],
      voixOff:
        "Résumons. Une expérience aléatoire a un résultat imprévisible, une issue est un résultat possible, et un événement est un ensemble d'issues. En situation d'équiprobabilité, la probabilité s'obtient en divisant le nombre d'issues favorables par le nombre d'issues possibles. Elle est toujours comprise entre zéro et un : zéro pour l'impossible, un pour le certain, et la somme des probabilités de toutes les issues vaut toujours un. Enfin, la probabilité de l'événement contraire s'obtient en faisant un moins la probabilité de l'événement.",
    },
  ],
  fiche: {
    intro:
      "La probabilité mesure la chance qu'un événement se réalise. En situation d'équiprobabilité, elle se calcule en divisant le nombre d'issues favorables par le nombre d'issues possibles.",
    sections: [
      {
        titre: "Vocabulaire du hasard",
        points: [
          "Expérience aléatoire : résultat imprévisible à l'avance",
          "Issue : un résultat possible de l'expérience",
          "Événement : un ensemble d'issues",
          "Univers : l'ensemble de toutes les issues possibles",
        ],
      },
      {
        titre: "Calculer une probabilité",
        points: [
          "En équiprobabilité : P = issues favorables ÷ issues possibles",
          "Exemple : P(obtenir 3 avec un dé) = 1/6",
          "On exprime le résultat en fraction, en décimal ou en pourcentage, et on simplifie",
        ],
      },
      {
        titre: "Certain, impossible et contraire",
        points: [
          "0 ≤ P ≤ 1 ; P = 0 événement impossible ; P = 1 événement certain",
          "La somme des probabilités de toutes les issues possibles vaut toujours 1",
          "Événement contraire : P(non A) = 1 − P(A)",
        ],
      },
      {
        titre: "Exemples et fréquence",
        points: [
          "Dé : P(nombre pair) = 3/6 = 1/2",
          "Boules dans un sac : P = nombre de boules de la couleur ÷ nombre total de boules",
          "La fréquence observée se rapproche de la probabilité quand on répète l'expérience (loi des grands nombres)",
        ],
      },
    ],
    audio:
      "Fiche de révision : la notion de probabilité. Une expérience aléatoire a un résultat imprévisible ; une issue est un résultat possible ; un événement est un ensemble d'issues. Quand toutes les issues ont la même chance de se produire, on est en situation d'équiprobabilité, et la probabilité d'un événement s'obtient en divisant le nombre d'issues favorables par le nombre d'issues possibles. Une probabilité est toujours comprise entre zéro et un : elle vaut zéro pour un événement impossible, et un pour un événement certain. La somme des probabilités de toutes les issues possibles vaut toujours un. La probabilité de l'événement contraire s'obtient en soustrayant la probabilité de l'événement à un. Enfin, plus on répète une expérience aléatoire, plus la fréquence observée se rapproche de la probabilité théorique : c'est la loi des grands nombres.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une expérience aléatoire, une issue, un événement ?", verso: "Expérience aléatoire : résultat imprévisible. Issue : un résultat possible. Événement : un ensemble d'issues." },
    { recto: "Comment calculer une probabilité en équiprobabilité ?", verso: "P = nombre d'issues favorables ÷ nombre d'issues possibles." },
    { recto: "Entre quelles valeurs est comprise une probabilité ?", verso: "Toujours entre 0 et 1 (ou entre 0 % et 100 %)." },
    { recto: "Que vaut la probabilité d'un événement certain ? impossible ?", verso: "Certain : P = 1. Impossible : P = 0." },
    { recto: "Que vaut la somme des probabilités de toutes les issues possibles ?", verso: "Toujours 1." },
    { recto: "Qu'est-ce que l'événement contraire ?", verso: "Non A se réalise quand A ne se réalise pas : P(non A) = 1 − P(A)." },
    { recto: "P(obtenir un nombre pair avec un dé à 6 faces) = ?", verso: "3/6 = 1/2 (issues favorables : 2, 4, 6)." },
    { recto: "Qu'est-ce que la loi des grands nombres ?", verso: "Plus on répète une expérience, plus la fréquence observée se rapproche de la probabilité théorique." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un 5 ?",
      choix: ["1/6", "1/5", "5/6", "1/2"],
      bonneReponse: 0,
      explication: "Une seule face porte le 5, sur 6 faces possibles : P = 1/6.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une pièce de monnaie a deux faces : pile et face. Quelle est la probabilité d'obtenir pile ?",
      choix: ["1/2", "1/3", "1", "0"],
      bonneReponse: 0,
      explication: "Il y a 2 issues équiprobables, dont 1 favorable : P = 1/2.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la probabilité d'un événement impossible ?",
      reponse: "0",
      explication: "Un événement qui ne peut jamais se produire a une probabilité nulle.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La probabilité d'un événement est toujours comprise entre :",
      choix: ["0 et 1", "−1 et 1", "0 et 100", "1 et 10"],
      bonneReponse: 0,
      explication: "Une probabilité est toujours un nombre compris entre 0 (impossible) et 1 (certain).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
      reponse: "1/2",
      explication: "Les issues favorables sont 2, 4 et 6, soit 3 sur 6 : P = 3/6 = 1/2.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un sac contient 4 boules rouges et 6 boules bleues (10 boules en tout). Quelle est la probabilité de tirer une boule rouge ?",
      choix: ["2/5", "1/2", "3/5", "4/6"],
      bonneReponse: 0,
      explication: "P = 4/10, que l'on simplifie en 2/5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "P(obtenir un 6 en lançant un dé) = 1/6. Quelle est la probabilité de NE PAS obtenir un 6 ?",
      reponse: "5/6",
      explication: "P(non A) = 1 − P(A) = 1 − 1/6 = 5/6.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un jeu de 32 cartes, il y a 4 as. Quelle est la probabilité de tirer un as ?",
      choix: ["1/8", "1/4", "1/32", "4"],
      bonneReponse: 0,
      explication: "P = 4/32, que l'on simplifie en 1/8.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un sac contient 5 boules rouges, 3 bleues et 2 vertes. Quelle est la probabilité de NE PAS tirer une boule rouge ?",
      reponse: "1/2 (5/10)",
      explication: "P(rouge) = 5/10 = 1/2, donc P(non rouge) = 1 − 1/2 = 1/2.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "On lance deux fois de suite une pièce de monnaie. Quelle est la probabilité d'obtenir « pile » les deux fois ?",
      reponse: "1/4",
      explication: "Il y a 4 issues équiprobables (PP, PF, FP, FF), dont 1 favorable (PP) : P = 1/4. On peut aussi multiplier les probabilités des deux lancers : 1/2 × 1/2 = 1/4.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un nombre strictement inférieur à 3 ?",
      choix: ["1/3", "1/6", "1/2", "2/3"],
      bonneReponse: 0,
      explication: "Les issues favorables sont 1 et 2, soit 2 sur 6 : P = 2/6 = 1/3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une urne contient 20 billets dont 3 gagnants. On tire un billet au hasard. Quelle est la probabilité qu'il soit perdant ?",
      reponse: "17/20",
      explication: "P(gagnant) = 3/20, donc P(perdant) = 1 − 3/20 = 17/20.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un 2 ?",
      choix: ["1/6", "1/3", "1/2", "1"],
      bonneReponse: 0,
      explication: "Une seule face porte le 2, sur 6 faces possibles : P = 1/6.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la probabilité d'un événement certain ?",
      reponse: "1",
      explication: "Un événement qui se produit toujours a une probabilité de 1.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un sac contient 3 boules rouges et 7 boules bleues (10 boules en tout). Quelle est la probabilité de tirer une boule bleue ?",
      choix: ["7/10", "3/10", "1/2", "7"],
      bonneReponse: 0,
      explication: "P = 7/10.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "P(obtenir un nombre pair en lançant un dé) = 1/2. Quelle est la probabilité d'obtenir un nombre impair ?",
      reponse: "1/2",
      explication: "P(non A) = 1 − P(A) = 1 − 1/2 = 1/2.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "On lance deux fois de suite une pièce de monnaie. Quelle est la probabilité d'obtenir exactement une fois « pile » ?",
      reponse: "1/2",
      explication: "Il y a 4 issues équiprobables (PP, PF, FP, FF), dont 2 favorables (PF, FP) : P = 2/4 = 1/2.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Notion de probabilité",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un 1 ?",
          choix: ["1/6", "1/2", "1", "0"],
          bonneReponse: 0,
          explication: "Une seule face porte le 1, sur 6 faces possibles : P = 1/6.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle est la somme des probabilités de toutes les issues possibles d'une expérience aléatoire ?",
          reponse: "1",
          explication: "La somme des probabilités de toutes les issues vaut toujours 1.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un sac contient 6 boules vertes et 4 boules jaunes (10 boules en tout). Quelle est la probabilité de tirer une boule jaune ?",
          choix: ["2/5", "3/5", "1/2", "4"],
          bonneReponse: 0,
          explication: "P = 4/10, que l'on simplifie en 2/5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans un jeu de 32 cartes, il y a 4 rois. Quelle est la probabilité de tirer un roi ?",
          reponse: "1/8",
          explication: "P = 4/32, que l'on simplifie en 1/8.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un sac contient 5 boules rouges, 3 bleues et 2 vertes. Quelle est la probabilité de tirer une boule rouge OU bleue ?",
          reponse: "4/5",
          explication: "Issues favorables : 5 + 3 = 8, sur 10 : P = 8/10 = 4/5.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "On lance deux fois de suite un dé à 6 faces. Quelle est la probabilité d'obtenir un 6 les deux fois ?",
          reponse: "1/36",
          explication: "P = 1/6 × 1/6 = 1/36 (on multiplie les probabilités des deux lancers indépendants).",
        },
      ],
    },
    {
      titre: "Examen 2 — Notion de probabilité",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la probabilité d'obtenir « face » en lançant une pièce de monnaie équilibrée ?",
          choix: ["1/2", "1/3", "1", "0"],
          bonneReponse: 0,
          explication: "Il y a 2 issues équiprobables, dont 1 favorable : P = 1/2.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle est la probabilité d'un événement impossible ?",
          reponse: "0",
          explication: "Un événement qui ne peut jamais se produire a une probabilité nulle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un sac contient 8 boules blanches et 2 boules noires (10 boules en tout). Quelle est la probabilité de tirer une boule noire ?",
          choix: ["1/5", "4/5", "1/2", "2"],
          bonneReponse: 0,
          explication: "P = 2/10, que l'on simplifie en 1/5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans un jeu de 32 cartes, il y a 8 cœurs. Quelle est la probabilité de tirer un cœur ?",
          reponse: "1/4",
          explication: "P = 8/32, que l'on simplifie en 1/4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Une urne contient 25 billets dont 5 gagnants. On tire un billet au hasard. Quelle est la probabilité qu'il soit gagnant ?",
          reponse: "1/5",
          explication: "P = 5/25, que l'on simplifie en 1/5.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "On lance un dé à 6 faces deux fois de suite. Quelle est la probabilité d'obtenir un nombre pair les deux fois ?",
          reponse: "1/4",
          explication: "P(pair) = 1/2 à chaque lancer, donc P = 1/2 × 1/2 = 1/4 (lancers indépendants).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une expérience aléatoire a un résultat imprévisible ; une issue est un résultat possible ; un événement est un ensemble d'issues.",
    "En situation d'équiprobabilité : P(événement) = nombre d'issues favorables ÷ nombre d'issues possibles.",
    "Une probabilité est toujours comprise entre 0 (impossible) et 1 (certain).",
    "La somme des probabilités de toutes les issues possibles d'une expérience vaut toujours 1.",
    "Événement contraire : P(non A) = 1 − P(A) ; souvent plus rapide à calculer que l'événement lui-même.",
    "Pour deux expériences indépendantes successives, on multiplie les probabilités (ex : deux lancers de dé).",
  ],
};

export default chapitre;
