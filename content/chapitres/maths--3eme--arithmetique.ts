import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "arithmetique",
  titre: "Arithmétique : diviseurs et nombres premiers",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Diviseurs, multiples, nombres premiers, décomposition en facteurs premiers et PGCD : les bases de l'arithmétique attendues au brevet, avec la méthode des divisions successives.",
  objectifs: [
    "Reconnaître un diviseur, un multiple et un nombre premier",
    "Utiliser les critères de divisibilité usuels",
    "Décomposer un entier en produit de facteurs premiers",
    "Calculer le PGCD de deux nombres par l'algorithme d'Euclide",
    "Simplifier une fraction à l'aide du PGCD",
  ],
  slides: [
    {
      titre: "Diviseurs et multiples",
      illustration: "🔢",
      visuel: "12 = 3 × 4 → 3 et 4 sont des diviseurs de 12",
      contenu: [
        "a est un diviseur de b si la division de b par a tombe juste (reste 0)",
        "On dit aussi que b est un multiple de a",
        "Exemple : 12 = 3 × 4, donc 3 et 4 sont des diviseurs de 12",
        "12 est un multiple de 3 et un multiple de 4",
      ],
      voixOff:
        "Commençons par le vocabulaire de base. On dit que a est un diviseur de b si la division de b par a tombe juste, c'est-à-dire si le reste est zéro. On dit alors aussi que b est un multiple de a. Par exemple, douze égale trois fois quatre, donc trois et quatre sont des diviseurs de douze, et douze est un multiple de trois comme de quatre.",
    },
    {
      titre: "Les critères de divisibilité",
      illustration: "✅",
      visuel: "÷2, ÷3, ÷5, ÷9, ÷10",
      contenu: [
        "Divisible par 2 : le chiffre des unités est 0, 2, 4, 6 ou 8",
        "Divisible par 3 : la somme des chiffres est divisible par 3",
        "Divisible par 5 : le chiffre des unités est 0 ou 5",
        "Divisible par 9 : la somme des chiffres est divisible par 9",
        "Exemple : 549 → 5+4+9 = 18, divisible par 9, donc 549 est divisible par 9",
      ],
      voixOff:
        "Des règles rapides permettent de savoir si un nombre est divisible par un autre, sans poser la division. Un nombre est divisible par deux si son chiffre des unités est pair. Il est divisible par cinq si son chiffre des unités est zéro ou cinq. Il est divisible par trois, ou par neuf, si la somme de ses chiffres est elle-même divisible par trois, ou par neuf. Par exemple, cinq cent quarante-neuf : cinq plus quatre plus neuf égale dix-huit, qui est divisible par neuf, donc cinq cent quarante-neuf est divisible par neuf.",
    },
    {
      titre: "Les nombres premiers",
      illustration: "💎",
      visuel: "2, 3, 5, 7, 11, 13, 17, 19, 23...",
      contenu: [
        "Un nombre premier a exactement deux diviseurs : 1 et lui-même",
        "1 n'est PAS un nombre premier (il n'a qu'un seul diviseur)",
        "2 est le seul nombre premier pair",
        "Liste à connaître : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...",
      ],
      voixOff:
        "Un nombre premier est un nombre entier qui possède exactement deux diviseurs : un et lui-même. Attention, un n'est pas un nombre premier, car il n'a qu'un seul diviseur. Deux est le seul nombre premier pair ; tous les autres nombres premiers sont impairs. Il faut connaître par cœur les premiers d'entre eux : deux, trois, cinq, sept, onze, treize, dix-sept, dix-neuf, vingt-trois...",
    },
    {
      titre: "Tester si un nombre est premier",
      illustration: "🔍",
      visuel: "√97 ≈ 9,8 → tester 2, 3, 5, 7",
      contenu: [
        "On teste la divisibilité par les nombres premiers, jusqu'à la racine carrée du nombre",
        "Exemple : 97 est-il premier ? √97 ≈ 9,8, on teste 2, 3, 5, 7",
        "97 n'est divisible ni par 2, ni par 3, ni par 5, ni par 7",
        "Donc 97 est premier",
      ],
      voixOff:
        "Pour savoir si un nombre est premier, il suffit de tester sa divisibilité par les nombres premiers successifs, jusqu'à ce que leur carré dépasse le nombre étudié. Prenons quatre-vingt-dix-sept : la racine carrée est environ neuf virgule huit, donc on teste seulement deux, trois, cinq et sept. Aucun de ces nombres ne divise quatre-vingt-dix-sept, qui est donc bien premier.",
    },
    {
      titre: "Décomposition en facteurs premiers",
      illustration: "🌳",
      visuel: "180 = 2² × 3² × 5",
      contenu: [
        "Tout entier supérieur à 1 s'écrit comme un produit de nombres premiers",
        "Méthode : diviser successivement par 2, puis 3, puis 5...",
        "180 ÷ 2 = 90 ÷ 2 = 45 ÷ 3 = 15 ÷ 3 = 5 ÷ 5 = 1",
        "Donc 180 = 2 × 2 × 3 × 3 × 5 = 2² × 3² × 5",
      ],
      voixOff:
        "Tout entier supérieur à un peut s'écrire de façon unique comme un produit de nombres premiers : c'est sa décomposition en facteurs premiers. La méthode consiste à diviser successivement par les nombres premiers, en commençant par deux. Pour cent quatre-vingt : on divise par deux deux fois, on obtient quarante-cinq, puis on divise par trois deux fois, on obtient cinq. Finalement, cent quatre-vingt égale deux au carré, fois trois au carré, fois cinq.",
    },
    {
      titre: "Le PGCD : définition",
      illustration: "🤝",
      visuel: "PGCD(18 ; 24) = 6",
      contenu: [
        "PGCD = Plus Grand Commun Diviseur de deux nombres",
        "Diviseurs de 18 : 1, 2, 3, 6, 9, 18",
        "Diviseurs de 24 : 1, 2, 3, 4, 6, 8, 12, 24",
        "Diviseurs communs : 1, 2, 3, 6 → le plus grand est 6, donc PGCD(18 ; 24) = 6",
      ],
      voixOff:
        "Le PGCD, c'est le Plus Grand Commun Diviseur de deux nombres. Pour dix-huit et vingt-quatre : les diviseurs de dix-huit sont un, deux, trois, six, neuf, dix-huit ; les diviseurs de vingt-quatre sont un, deux, trois, quatre, six, huit, douze, vingt-quatre. Les diviseurs communs sont un, deux, trois et six. Le plus grand est six, donc le PGCD de dix-huit et vingt-quatre est six.",
    },
    {
      titre: "L'algorithme d'Euclide",
      illustration: "⚙️",
      visuel: "PGCD(252 ; 108) : 252 = 2×108+36 ; 108 = 3×36+0 → PGCD = 36",
      contenu: [
        "Méthode rapide : divisions euclidiennes successives",
        "On divise le plus grand par le plus petit, on note le reste",
        "On recommence avec le diviseur et le reste, jusqu'à obtenir un reste nul",
        "Le PGCD est le DERNIER reste non nul",
      ],
      voixOff:
        "Pour des grands nombres, on utilise l'algorithme d'Euclide, plus rapide que la liste des diviseurs. On effectue la division euclidienne du plus grand nombre par le plus petit, on note le reste. Puis on recommence en divisant l'ancien diviseur par ce reste, et ainsi de suite. Le PGCD est le dernier reste non nul obtenu. Pour deux cent cinquante-deux et cent huit : deux cent cinquante-deux égale deux fois cent huit plus trente-six ; puis cent huit égale trois fois trente-six plus zéro. Le dernier reste non nul est trente-six, donc le PGCD est trente-six.",
    },
    {
      titre: "Simplifier une fraction avec le PGCD",
      illustration: "➗",
      visuel: "84/126 = (84÷42)/(126÷42) = 2/3",
      contenu: [
        "Pour simplifier une fraction, on divise numérateur et dénominateur par leur PGCD",
        "PGCD(84 ; 126) = 42",
        "84 ÷ 42 = 2 et 126 ÷ 42 = 3",
        "Donc 84/126 = 2/3, et cette fraction est irréductible",
      ],
      voixOff:
        "Le PGCD sert notamment à simplifier une fraction jusqu'à sa forme irréductible en une seule étape. On calcule le PGCD du numérateur et du dénominateur, puis on divise les deux par ce PGCD. Pour quatre-vingt-quatre sur cent vingt-six, le PGCD vaut quarante-deux. En divisant, on obtient deux tiers, qui est la fraction irréductible.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Diviseur/multiple : b = a × k, a est diviseur de b, b est multiple de a",
        "Nombre premier : exactement 2 diviseurs (1 et lui-même) ; 1 n'est pas premier",
        "Décomposition en facteurs premiers : diviser successivement par 2, 3, 5, 7...",
        "PGCD par l'algorithme d'Euclide : divisions successives, dernier reste non nul",
        "Fraction irréductible = numérateur et dénominateur divisés par leur PGCD",
      ],
      voixOff:
        "Résumons ce chapitre. Un diviseur de b permet une division exacte ; on dit alors que b est un multiple. Un nombre premier possède exactement deux diviseurs, et un n'est pas premier. Pour décomposer un nombre, on le divise successivement par les nombres premiers. Pour trouver le PGCD de deux nombres, l'algorithme d'Euclide enchaîne les divisions euclidiennes jusqu'à un reste nul : le PGCD est le dernier reste non nul. Enfin, diviser une fraction par son PGCD donne directement la fraction irréductible. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "L'arithmétique étudie les propriétés des nombres entiers : diviseurs, multiples, nombres premiers et PGCD. C'est un chapitre incontournable du brevet, souvent associé à la simplification de fractions.",
    sections: [
      {
        titre: "Diviseurs, multiples, critères de divisibilité",
        points: [
          "a est diviseur de b si b = a × k avec k entier (b est alors multiple de a)",
          "Divisible par 2 : unités paires ; par 5 : unités 0 ou 5",
          "Divisible par 3 (ou 9) : somme des chiffres divisible par 3 (ou 9)",
        ],
      },
      {
        titre: "Nombres premiers",
        points: [
          "Un nombre premier a exactement deux diviseurs : 1 et lui-même",
          "1 n'est pas premier ; 2 est le seul nombre premier pair",
          "À connaître : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
        ],
      },
      {
        titre: "Décomposition en facteurs premiers",
        points: [
          "Tout entier > 1 est un produit de nombres premiers, de façon unique",
          "Méthode : divisions successives par 2, puis 3, puis 5...",
          "Exemple : 180 = 2² × 3² × 5",
        ],
      },
      {
        titre: "PGCD et fractions irréductibles",
        points: [
          "PGCD(a ; b) = Plus Grand Commun Diviseur",
          "Algorithme d'Euclide : divisions euclidiennes successives, PGCD = dernier reste non nul",
          "Fraction irréductible : diviser numérateur et dénominateur par leur PGCD",
        ],
      },
    ],
    audio:
      "Fiche de révision : arithmétique, diviseurs et nombres premiers. Un diviseur de b permet une division exacte ; on dit que b est un multiple. Les critères de divisibilité permettent de savoir rapidement si un nombre est divisible par deux, trois, cinq ou neuf, sans poser la division. Un nombre premier possède exactement deux diviseurs, un et lui-même ; attention, un n'est pas premier. Tout entier supérieur à un se décompose de façon unique en produit de nombres premiers, en divisant successivement par deux, trois, cinq, et ainsi de suite. Le PGCD, plus grand commun diviseur de deux nombres, se calcule efficacement avec l'algorithme d'Euclide : on enchaîne les divisions euclidiennes jusqu'à obtenir un reste nul, et le PGCD est le dernier reste non nul. Diviser le numérateur et le dénominateur d'une fraction par leur PGCD donne directement la fraction irréductible.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un diviseur de b ?", verso: "Un nombre a tel que b = a × k, avec k entier. La division tombe juste." },
    { recto: "Qu'est-ce qu'un nombre premier ?", verso: "Un nombre qui a exactement deux diviseurs : 1 et lui-même. 1 n'est pas premier." },
    { recto: "Critère de divisibilité par 3 ?", verso: "La somme des chiffres du nombre est divisible par 3." },
    { recto: "Critère de divisibilité par 9 ?", verso: "La somme des chiffres du nombre est divisible par 9." },
    { recto: "Les 5 premiers nombres premiers ?", verso: "2, 3, 5, 7, 11." },
    { recto: "Comment décomposer un nombre en facteurs premiers ?", verso: "On le divise successivement par 2, puis 3, puis 5... jusqu'à obtenir 1." },
    { recto: "Comment calculer le PGCD de deux nombres avec Euclide ?", verso: "On fait des divisions euclidiennes en chaîne ; le PGCD est le dernier reste non nul." },
    { recto: "Comment rendre une fraction irréductible ?", verso: "Diviser le numérateur et le dénominateur par leur PGCD." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Lequel de ces nombres est un diviseur de 36 ?",
      choix: ["5", "8", "9", "10"],
      bonneReponse: 2,
      explication: "36 = 9 × 4, donc 9 est un diviseur de 36. 36 n'est divisible ni par 5, ni par 8, ni par 10.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Lequel de ces nombres est premier ?",
      choix: ["21", "27", "31", "33"],
      bonneReponse: 2,
      explication: "31 n'a que deux diviseurs, 1 et 31. 21 = 3×7, 27 = 3³, 33 = 3×11 ne sont pas premiers.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "127 est-il divisible par 3 ? Justifie.",
      reponse: "Non.",
      explication: "1 + 2 + 7 = 10, et 10 n'est pas divisible par 3, donc 127 n'est pas divisible par 3.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien 1 a-t-il de diviseurs ?",
      choix: ["0", "1", "2", "une infinité"],
      bonneReponse: 1,
      explication: "1 n'a qu'un seul diviseur, lui-même. C'est pour cela que 1 n'est pas considéré comme un nombre premier.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décompose 60 en produit de facteurs premiers.",
      reponse: "60 = 2² × 3 × 5",
      explication: "60 ÷ 2 = 30, 30 ÷ 2 = 15, 15 ÷ 3 = 5, 5 ÷ 5 = 1. Donc 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Détermine le PGCD de 42 et 56 en listant leurs diviseurs.",
      reponse: "PGCD(42 ; 56) = 14",
      explication: "Diviseurs de 42 : 1, 2, 3, 6, 7, 14, 21, 42. Diviseurs de 56 : 1, 2, 4, 7, 8, 14, 28, 56. Le plus grand diviseur commun est 14.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "97 est-il un nombre premier ? (On rappelle que √97 ≈ 9,8)",
      choix: [
        "Oui, il n'est divisible ni par 2, 3, 5 ni 7",
        "Non, il est divisible par 3",
        "Non, il est divisible par 7",
        "On ne peut pas savoir sans calculatrice",
      ],
      bonneReponse: 0,
      explication: "On teste les nombres premiers jusqu'à √97 ≈ 9,8, donc 2, 3, 5, 7. Aucun ne divise 97, qui est donc premier.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Simplifie la fraction 45/60 en utilisant le PGCD.",
      reponse: "45/60 = 3/4",
      explication: "PGCD(45 ; 60) = 15. 45 ÷ 15 = 3 et 60 ÷ 15 = 4, donc 45/60 = 3/4, fraction irréductible.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule le PGCD de 315 et 231 avec l'algorithme d'Euclide.",
      reponse: "PGCD(315 ; 231) = 21",
      explication:
        "315 = 1 × 231 + 84 ; 231 = 2 × 84 + 63 ; 84 = 1 × 63 + 21 ; 63 = 3 × 21 + 0. Le dernier reste non nul est 21.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un fleuriste dispose de 90 roses et de 72 tulipes. Il veut faire des bouquets identiques (même nombre de roses et même nombre de tulipes) en utilisant toutes les fleurs, avec le plus grand nombre de bouquets possible. Combien de bouquets peut-il faire, et que contient chaque bouquet ?",
      reponse: "18 bouquets, chacun avec 5 roses et 4 tulipes.",
      explication:
        "Le nombre maximal de bouquets identiques est le PGCD(90 ; 72) = 18. Chaque bouquet contient 90 ÷ 18 = 5 roses et 72 ÷ 18 = 4 tulipes.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle est la décomposition en facteurs premiers de 924 ?",
      choix: ["2² × 3 × 7 × 11", "2 × 3² × 7 × 11", "2² × 3 × 7²", "2 × 3 × 7 × 11 × 2"],
      bonneReponse: 0,
      explication: "924 = 2 × 462 = 2 × 2 × 231 = 2² × 3 × 77 = 2² × 3 × 7 × 11.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que la fraction 91/119 n'est pas irréductible, puis simplifie-la.",
      reponse: "91/119 = 13/17",
      explication:
        "91 = 7 × 13 et 119 = 7 × 17, donc PGCD(91 ; 119) = 7. En divisant par 7 : 91/119 = 13/17, qui est bien irréductible car 13 et 17 sont premiers.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "84 est-il divisible par 2 ?",
      choix: ["Oui, car son chiffre des unités est 4", "Non", "Oui, car 8+4=12", "On ne peut pas savoir"],
      bonneReponse: 0,
      explication: "Le chiffre des unités de 84 est 4, qui est pair, donc 84 est divisible par 2.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois nombres premiers compris entre 10 et 20.",
      reponse: "11, 13, 17 (ou 19)",
      explication: "Les nombres premiers entre 10 et 20 sont 11, 13, 17 et 19.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décompose 48 en produit de facteurs premiers.",
      reponse: "48 = 2⁴ × 3",
      explication: "48 = 2×24 = 2×2×12 = 2×2×2×6 = 2×2×2×2×3, donc 48 = 2⁴ × 3.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel est le PGCD de 24 et 36 ?",
      choix: ["6", "12", "4", "72"],
      bonneReponse: 1,
      explication: "24 = 2³×3, 36 = 2²×3². Le PGCD prend les facteurs communs au plus petit exposant : 2²×3 = 12.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Simplifie la fraction 54/72 à l'aide du PGCD.",
      reponse: "54/72 = 3/4",
      explication: "PGCD(54 ; 72) = 18. 54 ÷ 18 = 3 et 72 ÷ 18 = 4, donc 54/72 = 3/4.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Arithmétique",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Lequel de ces nombres n'est PAS un diviseur de 48 ?",
          choix: ["6", "8", "9", "12"],
          bonneReponse: 2,
          explication: "48 ÷ 9 n'est pas un nombre entier (48 = 9×5+3), donc 9 n'est pas un diviseur de 48.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "153 est-il divisible par 9 ? Justifie.",
          reponse: "Oui.",
          explication: "1+5+3 = 9, qui est divisible par 9, donc 153 est divisible par 9.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décompose 126 en produit de facteurs premiers.",
          reponse: "126 = 2 × 3² × 7",
          explication: "126 ÷ 2 = 63, 63 ÷ 3 = 21, 21 ÷ 3 = 7. Donc 126 = 2 × 3 × 3 × 7 = 2 × 3² × 7.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule le PGCD de 140 et 98 avec l'algorithme d'Euclide.",
          reponse: "PGCD(140 ; 98) = 14",
          explication: "140 = 1×98+42 ; 98 = 2×42+14 ; 42 = 3×14+0. Le dernier reste non nul est 14.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La fraction 36/48, une fois simplifiée avec le PGCD, devient :",
          choix: ["3/4", "6/8", "9/12", "2/3"],
          bonneReponse: 0,
          explication: "PGCD(36 ; 48) = 12. 36÷12=3 et 48÷12=4, donc 36/48 = 3/4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un pâtissier dispose de 156 macarons et de 117 éclairs. Il veut composer des coffrets identiques en utilisant tous les gâteaux, avec le plus grand nombre de coffrets possible. Combien de coffrets peut-il faire, et que contient chaque coffret ?",
          reponse: "39 coffrets, chacun avec 4 macarons et 3 éclairs.",
          explication:
            "Le nombre maximal de coffrets identiques est PGCD(156 ; 117). 156 = 1×117+39 ; 117 = 3×39+0, donc PGCD = 39. Chaque coffret contient 156÷39 = 4 macarons et 117÷39 = 3 éclairs.",
        },
      ],
    },
    {
      titre: "Examen 2 — Arithmétique",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Combien de diviseurs possède un nombre premier ?",
          choix: ["1", "2", "3", "Cela dépend du nombre"],
          bonneReponse: 1,
          explication: "Un nombre premier possède exactement deux diviseurs : 1 et lui-même.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "245 est-il divisible par 5 ? Justifie.",
          reponse: "Oui.",
          explication: "Le chiffre des unités de 245 est 5, donc 245 est divisible par 5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décompose 200 en produit de facteurs premiers.",
          reponse: "200 = 2³ × 5²",
          explication: "200 ÷ 2 = 100, 100 ÷ 2 = 50, 50 ÷ 2 = 25, 25 ÷ 5 = 5, 5 ÷ 5 = 1. Donc 200 = 2×2×2×5×5 = 2³×5².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule le PGCD de 168 et 126 avec l'algorithme d'Euclide.",
          reponse: "PGCD(168 ; 126) = 42",
          explication: "168 = 1×126+42 ; 126 = 3×42+0. Le dernier reste non nul est 42.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel est le PGCD de deux nombres premiers distincts, par exemple 7 et 11 ?",
          choix: ["77", "1", "7", "Il n'existe pas"],
          bonneReponse: 1,
          explication: "Deux nombres premiers distincts n'ont aucun diviseur commun autre que 1, donc leur PGCD est 1.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Montre que 221 n'est pas un nombre premier en trouvant un diviseur, puis donne sa décomposition en facteurs premiers.",
          reponse: "221 = 13 × 17",
          explication:
            "On teste les nombres premiers jusqu'à √221 ≈ 14,9 : 221 n'est pas divisible par 2, 3, 5, 7, 11, mais 221 = 13 × 17. Comme 13 et 17 sont premiers, c'est la décomposition cherchée.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "a est diviseur de b si b = a × k (k entier) ; on dit alors que b est multiple de a.",
    "Critères de divisibilité : par 2 (unités paires), par 5 (unités 0 ou 5), par 3 ou 9 (somme des chiffres divisible par 3 ou 9).",
    "Un nombre premier a exactement 2 diviseurs (1 et lui-même) ; 1 N'EST PAS premier.",
    "Décomposition en facteurs premiers : diviser successivement par 2, 3, 5, 7... jusqu'à obtenir 1.",
    "PGCD par l'algorithme d'Euclide : divisions euclidiennes en chaîne, le PGCD est le DERNIER reste non nul.",
    "Fraction irréductible : diviser numérateur et dénominateur par leur PGCD en une seule étape.",
  ],
};

export default chapitre;
