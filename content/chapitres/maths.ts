import type { Chapitre } from "../types";

const chapitres: Chapitre[] = [
{
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
},
{
  slug: "calcul-litteral-factorisation",
  titre: "Calcul littéral : identités et factorisation",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Développer avec les identités remarquables, factoriser une expression et résoudre des équations produit-nul : le calcul littéral avancé, indispensable pour le brevet.",
  objectifs: [
    "Développer une expression avec la double distributivité",
    "Connaître et utiliser les trois identités remarquables",
    "Factoriser une expression en repérant un facteur commun",
    "Factoriser une expression grâce aux identités remarquables",
    "Résoudre une équation produit-nul",
  ],
  slides: [
    {
      titre: "Rappel : la double distributivité",
      illustration: "🔀",
      visuel: "(a + b)(c + d) = ac + ad + bc + bd",
      contenu: [
        "Pour développer (a+b)(c+d), chaque terme du premier facteur multiplie chaque terme du second",
        "(x + 2)(x + 5) = x×x + x×5 + 2×x + 2×5",
        "= x² + 5x + 2x + 10",
        "= x² + 7x + 10",
      ],
      voixOff:
        "Rappelons la double distributivité. Pour développer un produit de deux sommes, chaque terme du premier facteur doit multiplier chaque terme du second facteur. Prenons x plus deux, fois x plus cinq. On obtient x fois x, plus x fois cinq, plus deux fois x, plus deux fois cinq, soit x carré plus cinq x plus deux x plus dix, que l'on réduit en x carré plus sept x plus dix.",
    },
    {
      titre: "Identité remarquable n°1 : (a+b)²",
      illustration: "①",
      visuel: "(a + b)² = a² + 2ab + b²",
      contenu: [
        "(a + b)² = a² + 2ab + b²",
        "Exemple : (x + 3)² = x² + 2×x×3 + 3² = x² + 6x + 9",
        "Le carré de la somme = carré + double produit + carré",
      ],
      voixOff:
        "Voici la première identité remarquable à connaître par cœur : a plus b, le tout au carré, égale a carré plus deux a b plus b carré. Par exemple, x plus trois au carré égale x carré, plus deux fois x fois trois, plus trois au carré, c'est-à-dire x carré plus six x plus neuf.",
    },
    {
      titre: "Identité remarquable n°2 : (a−b)²",
      illustration: "②",
      visuel: "(a − b)² = a² − 2ab + b²",
      contenu: [
        "(a − b)² = a² − 2ab + b²",
        "Exemple : (x − 4)² = x² − 2×x×4 + 4² = x² − 8x + 16",
        "Le carré de la différence = carré − double produit + carré",
      ],
      voixOff:
        "Deuxième identité : a moins b, le tout au carré, égale a carré moins deux a b plus b carré. Attention, le double produit est soustrait, mais le dernier terme reste positif. Par exemple, x moins quatre au carré égale x carré moins huit x plus seize.",
    },
    {
      titre: "Identité remarquable n°3 : (a+b)(a−b)",
      illustration: "③",
      visuel: "(a + b)(a − b) = a² − b²",
      contenu: [
        "(a + b)(a − b) = a² − b²",
        "Exemple : (x + 6)(x − 6) = x² − 6² = x² − 36",
        "C'est la seule identité qui donne une différence de deux carrés",
      ],
      voixOff:
        "Troisième et dernière identité : a plus b, fois a moins b, égale a carré moins b carré. C'est ce qu'on appelle une différence de deux carrés. Par exemple, x plus six, fois x moins six, égale x carré moins trente-six. Les termes doubles s'annulent, il ne reste que les carrés.",
    },
    {
      titre: "Factoriser : facteur commun",
      illustration: "🧩",
      visuel: "3x² + 6x = 3x(x + 2)",
      contenu: [
        "Factoriser, c'est transformer une somme en produit",
        "On repère le plus grand facteur commun à tous les termes",
        "3x² + 6x : facteur commun 3x → 3x(x + 2)",
        "Vérification en développant : 3x × x + 3x × 2 = 3x² + 6x ✔",
      ],
      voixOff:
        "Factoriser, c'est l'opération inverse de développer : on transforme une somme en produit. La méthode de base consiste à repérer le facteur commun à tous les termes. Dans trois x carré plus six x, le facteur commun est trois x. On écrit trois x fois, entre parenthèses, x plus deux. On vérifie toujours en redéveloppant.",
    },
    {
      titre: "Factoriser avec les identités remarquables",
      illustration: "🔄",
      visuel: "x² − 25 = (x − 5)(x + 5)",
      contenu: [
        "On reconnaît la forme a² − b², a² + 2ab + b² ou a² − 2ab + b²",
        "x² − 25 = x² − 5² = (x − 5)(x + 5)",
        "x² + 10x + 25 = x² + 2×x×5 + 5² = (x + 5)²",
        "x² − 8x + 16 = x² − 2×x×4 + 4² = (x − 4)²",
      ],
      voixOff:
        "On peut aussi factoriser en reconnaissant la forme d'une identité remarquable, à l'envers. x carré moins vingt-cinq, c'est x carré moins cinq au carré, donc cela se factorise en x moins cinq, fois x plus cinq. De même, x carré plus dix x plus vingt-cinq est le carré de x plus cinq, et x carré moins huit x plus seize est le carré de x moins quatre.",
    },
    {
      titre: "Développer PUIS factoriser un exercice type",
      illustration: "📝",
      visuel: "(x+2)² − (x−3)(x+3)",
      contenu: [
        "(x + 2)² − (x − 3)(x + 3)",
        "= (x² + 4x + 4) − (x² − 9)",
        "= x² + 4x + 4 − x² + 9",
        "= 4x + 13",
      ],
      voixOff:
        "Les exercices de brevet combinent souvent plusieurs identités. Prenons x plus deux au carré, moins x moins trois fois x plus trois. On développe chaque partie séparément : x plus deux au carré donne x carré plus quatre x plus quatre ; x moins trois fois x plus trois donne x carré moins neuf. On soustrait en faisant bien attention aux signes : il reste quatre x plus treize.",
    },
    {
      titre: "Équation produit-nul",
      illustration: "🎯",
      visuel: "A × B = 0 ⟺ A = 0 ou B = 0",
      contenu: [
        "Un produit de facteurs est nul si et seulement si l'un des facteurs est nul",
        "Résoudre (x − 2)(x + 5) = 0",
        "x − 2 = 0 ou x + 5 = 0",
        "x = 2 ou x = −5 : deux solutions",
      ],
      voixOff:
        "La factorisation est très utile pour résoudre des équations, grâce à la règle du produit nul : un produit de facteurs est nul si et seulement si au moins l'un des facteurs est nul. Pour résoudre x moins deux, fois x plus cinq, égale zéro, on écrit x moins deux égale zéro, ou x plus cinq égale zéro. On trouve deux solutions : x égale deux, ou x égale moins cinq.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "(a+b)² = a² + 2ab + b² ; (a−b)² = a² − 2ab + b² ; (a+b)(a−b) = a² − b²",
        "Factoriser : chercher un facteur commun ou reconnaître une identité remarquable",
        "Une expression factorisée est un PRODUIT, une expression développée est une SOMME",
        "Équation produit-nul : A × B = 0 ⟺ A = 0 ou B = 0",
      ],
      voixOff:
        "Résumons. Les trois identités remarquables permettent de développer très rapidement des expressions particulières. Pour factoriser, on cherche d'abord un facteur commun, sinon on reconnaît la forme d'une identité remarquable. Retiens bien la différence : une expression factorisée est un produit, une expression développée est une somme. Enfin, la règle du produit nul, un produit égal à zéro si et seulement si un facteur est nul, permet de résoudre des équations que l'on ne saurait pas résoudre autrement. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Le calcul littéral avancé regroupe les identités remarquables, la factorisation et la résolution d'équations produit-nul. C'est un chapitre central du brevet, très lié à la résolution d'équations.",
    sections: [
      {
        titre: "Les trois identités remarquables",
        points: [
          "(a + b)² = a² + 2ab + b²",
          "(a − b)² = a² − 2ab + b²",
          "(a + b)(a − b) = a² − b²",
        ],
      },
      {
        titre: "Développer",
        points: [
          "Double distributivité : (a+b)(c+d) = ac + ad + bc + bd",
          "Reconnaître une identité remarquable accélère le développement",
          "Toujours réduire l'expression obtenue (regrouper les termes semblables)",
        ],
      },
      {
        titre: "Factoriser",
        points: [
          "Facteur commun : 3x² + 6x = 3x(x + 2)",
          "Différence de carrés : a² − b² = (a − b)(a + b)",
          "Carré parfait : a² + 2ab + b² = (a + b)² ; a² − 2ab + b² = (a − b)²",
        ],
      },
      {
        titre: "Équation produit-nul",
        points: [
          "A × B = 0 équivaut à A = 0 ou B = 0",
          "On factorise l'expression, puis on applique cette règle",
          "Une équation factorisée du 2nd degré peut avoir 0, 1 ou 2 solutions",
        ],
      },
    ],
    audio:
      "Fiche de révision : calcul littéral, identités et factorisation. Les trois identités remarquables sont à connaître par cœur : a plus b au carré égale a carré plus deux a b plus b carré ; a moins b au carré égale a carré moins deux a b plus b carré ; a plus b fois a moins b égale a carré moins b carré. Elles servent à développer rapidement, mais aussi à factoriser en sens inverse. Pour factoriser, on cherche d'abord un facteur commun à tous les termes, sinon on reconnaît la forme d'une identité remarquable. La factorisation est indispensable pour résoudre une équation produit-nul : un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul. On résout alors chaque facteur égalé à zéro séparément.",
  },
  memoCards: [
    { recto: "(a + b)² = ?", verso: "a² + 2ab + b²" },
    { recto: "(a − b)² = ?", verso: "a² − 2ab + b²" },
    { recto: "(a + b)(a − b) = ?", verso: "a² − b²" },
    { recto: "Comment factoriser 5x² + 15x ?", verso: "On repère le facteur commun 5x : 5x² + 15x = 5x(x + 3)." },
    { recto: "Comment factoriser x² − 49 ?", verso: "C'est une différence de carrés : x² − 49 = (x − 7)(x + 7)." },
    { recto: "Comment factoriser x² + 6x + 9 ?", verso: "C'est le carré de x + 3 : x² + 6x + 9 = (x + 3)²." },
    { recto: "Règle du produit nul ?", verso: "A × B = 0 équivaut à A = 0 ou B = 0." },
    { recto: "Différence entre développer et factoriser ?", verso: "Développer transforme un produit en somme ; factoriser transforme une somme en produit." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe (x + 4)².",
      choix: ["x² + 16", "x² + 4x + 16", "x² + 8x + 16", "x² + 8x + 4"],
      bonneReponse: 2,
      explication: "(x + 4)² = x² + 2×x×4 + 4² = x² + 8x + 16.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe (x − 2)(x + 2).",
      choix: ["x² − 4", "x² + 4", "x² − 4x + 4", "x² − 2x + 4"],
      bonneReponse: 0,
      explication: "C'est une différence de carrés : (x − 2)(x + 2) = x² − 2² = x² − 4.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Factorise l'expression 4x² + 8x en repérant le facteur commun.",
      reponse: "4x² + 8x = 4x(x + 2)",
      explication: "Le facteur commun aux deux termes est 4x. On vérifie : 4x × x + 4x × 2 = 4x² + 8x.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une expression factorisée se présente sous la forme d'une :",
      choix: ["Somme", "Différence", "Produit", "Fraction"],
      bonneReponse: 2,
      explication: "Factoriser, c'est transformer une somme en produit de facteurs.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Développe et réduis (2x + 3)².",
      reponse: "4x² + 12x + 9",
      explication: "(2x + 3)² = (2x)² + 2×2x×3 + 3² = 4x² + 12x + 9.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Factorise x² − 81.",
      reponse: "x² − 81 = (x − 9)(x + 9)",
      explication: "81 = 9², donc x² − 81 = x² − 9² = (x − 9)(x + 9) grâce à la 3ème identité remarquable.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous (x − 3)(x + 7) = 0.",
      choix: ["x = 3 et x = 7", "x = 3 ou x = −7", "x = −3 ou x = 7", "x = 3 uniquement"],
      bonneReponse: 1,
      explication: "Produit nul : x − 3 = 0 donne x = 3 ; x + 7 = 0 donne x = −7. Deux solutions : 3 et −7.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Factorise x² − 10x + 25.",
      reponse: "x² − 10x + 25 = (x − 5)²",
      explication: "On reconnaît a² − 2ab + b² avec a = x et b = 5, car 2×x×5 = 10x et 5² = 25.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis l'expression E = (x + 1)² − (x − 2)(x + 2).",
      reponse: "E = 2x + 5",
      explication:
        "(x+1)² = x² + 2x + 1. (x−2)(x+2) = x² − 4. E = x² + 2x + 1 − (x² − 4) = x² + 2x + 1 − x² + 4 = 2x + 5.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Factorise F = (2x + 1)² − (x − 3)².",
      reponse: "F = (3x − 2)(x + 4)",
      explication:
        "F est une différence de deux carrés A² − B² avec A = 2x+1 et B = x−3, donc F = (A−B)(A+B) = (2x+1−x+3)(2x+1+x−3) = (x+4)(3x−2).",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelles sont les solutions de l'équation (x + 5)(2x − 6) = 0 ?",
      choix: ["x = −5 et x = 3", "x = 5 et x = −3", "x = −5 et x = −3", "x = 5 et x = 3"],
      bonneReponse: 0,
      explication: "x + 5 = 0 donne x = −5 ; 2x − 6 = 0 donne x = 3. Les solutions sont −5 et 3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous l'équation x² − 36 = 0 en utilisant une factorisation.",
      reponse: "x = 6 ou x = −6",
      explication: "x² − 36 = (x − 6)(x + 6) = 0, donc x − 6 = 0 ou x + 6 = 0, soit x = 6 ou x = −6.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe (x − 5)².",
      choix: ["x² − 25", "x² − 10x + 25", "x² + 10x + 25", "x² − 5x + 25"],
      bonneReponse: 1,
      explication: "(x − 5)² = x² − 2×x×5 + 5² = x² − 10x + 25.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Factorise 7x + 21 en repérant le facteur commun.",
      reponse: "7x + 21 = 7(x + 3)",
      explication: "7 est le facteur commun à 7x et 21 (car 21 = 7×3).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Factorise x² − 16.",
      reponse: "x² − 16 = (x − 4)(x + 4)",
      explication: "16 = 4², c'est une différence de deux carrés.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous (x − 1)(x + 9) = 0.",
      choix: ["x = 1 ou x = −9", "x = 1 ou x = 9", "x = −1 ou x = 9", "x = −1 ou x = −9"],
      bonneReponse: 0,
      explication: "x − 1 = 0 donne x = 1 ; x + 9 = 0 donne x = −9.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis (x + 3)² − x².",
      reponse: "6x + 9",
      explication: "(x+3)² − x² = x² + 6x + 9 − x² = 6x + 9.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Calcul littéral : identités et factorisation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Développe (x + 6)².",
          choix: ["x² + 36", "x² + 12x + 36", "x² + 6x + 36", "x² + 12x + 6"],
          bonneReponse: 1,
          explication: "(x + 6)² = x² + 2×x×6 + 6² = x² + 12x + 36.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Factorise 6x² − 9x en repérant le facteur commun.",
          reponse: "6x² − 9x = 3x(2x − 3)",
          explication: "Le facteur commun est 3x. On vérifie : 3x × 2x − 3x × 3 = 6x² − 9x.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Développe et réduis (x − 4)(x + 4) + 5x.",
          reponse: "x² + 5x − 16",
          explication: "(x−4)(x+4) = x² − 16, donc l'expression vaut x² − 16 + 5x = x² + 5x − 16.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Factorise x² + 14x + 49.",
          reponse: "x² + 14x + 49 = (x + 7)²",
          explication: "2×x×7 = 14x et 7² = 49, on reconnaît a² + 2ab + b² avec a = x et b = 7.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelles sont les solutions de (3x − 6)(x + 2) = 0 ?",
          choix: ["x = 2 et x = −2", "x = −2 et x = 2", "x = 6 et x = 2", "x = 2 uniquement"],
          bonneReponse: 0,
          explication: "3x − 6 = 0 donne x = 2 ; x + 2 = 0 donne x = −2.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Soit E = (2x − 1)² − (x + 3)(x − 3). Développe, réduis, puis calcule E pour x = 1.",
          reponse: "E = 3x² − 4x + 10 ; pour x = 1, E = 9",
          explication:
            "(2x−1)² = 4x² − 4x + 1. (x+3)(x−3) = x² − 9. E = 4x² − 4x + 1 − x² + 9 = 3x² − 4x + 10. Pour x = 1 : E = 3 − 4 + 10 = 9.",
        },
      ],
    },
    {
      titre: "Examen 2 — Calcul littéral : identités et factorisation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Développe (x − 7)(x + 7).",
          choix: ["x² − 49", "x² + 49", "x² − 14x + 49", "x² − 14x − 49"],
          bonneReponse: 0,
          explication: "(x − 7)(x + 7) = x² − 7² = x² − 49.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Factorise 12x + 18 en repérant le facteur commun.",
          reponse: "12x + 18 = 6(2x + 3)",
          explication: "6 est le PGCD de 12 et 18 : le facteur commun est 6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Factorise x² − 12x + 36.",
          reponse: "x² − 12x + 36 = (x − 6)²",
          explication: "2×x×6 = 12x et 6² = 36 : c'est (x − 6)².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Développe et réduis (x + 2)² + (x − 2)².",
          reponse: "2x² + 8",
          explication: "(x+2)² = x²+4x+4 et (x−2)² = x²−4x+4. La somme donne 2x² + 8 (les termes en x s'annulent).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Résous l'équation x² − 100 = 0.",
          choix: ["x = 10 ou x = −10", "x = 10 uniquement", "x = 50", "Il n'y a pas de solution"],
          bonneReponse: 0,
          explication: "x² − 100 = (x − 10)(x + 10) = 0, donc x = 10 ou x = −10.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un carré a pour côté (x + 3) et un autre carré a pour côté x. Écris et factorise l'expression de la différence de leurs aires.",
          reponse: "Différence d'aires = (x + 3)² − x² = (2x + 3) × 3 = 6x + 9",
          explication:
            "(x+3)² − x² = x² + 6x + 9 − x² = 6x + 9, que l'on peut aussi factoriser en 3(2x + 3) en repérant le facteur commun 3.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "(a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b².",
    "Pour factoriser, on cherche d'abord un facteur commun à tous les termes.",
    "Sinon, on reconnaît la forme d'une identité remarquable (souvent une différence de deux carrés a² − b²).",
    "Une expression factorisée est un PRODUIT ; une expression développée est une SOMME.",
    "Règle du produit nul : A × B = 0 équivaut à A = 0 ou B = 0.",
    "Erreur fréquente à éviter : (a + b)² n'est JAMAIS égal à a² + b², il manque le double produit 2ab.",
  ],
},
{
  slug: "equations-inequations",
  titre: "Équations et inéquations",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Résoudre des équations du premier degré, des équations produit-nul, des inéquations, et mettre un problème en équation : les outils indispensables pour le brevet.",
  objectifs: [
    "Résoudre une équation du premier degré à une inconnue",
    "Résoudre une équation produit-nul",
    "Résoudre une inéquation et représenter sa solution sur une droite graduée",
    "Mettre un problème concret en équation",
    "Vérifier une solution en la substituant dans l'équation",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une équation ?",
      illustration: "⚖️",
      visuel: "3x + 2 = 11",
      contenu: [
        "Une équation est une égalité contenant une inconnue, souvent notée x",
        "Résoudre l'équation, c'est trouver la ou les valeurs de x qui rendent l'égalité vraie",
        "Exemple : 3x + 2 = 11 → la solution est x = 3",
        "On vérifie : 3 × 3 + 2 = 9 + 2 = 11 ✔",
      ],
      voixOff:
        "Une équation est une égalité qui contient une inconnue, en général appelée x. Résoudre une équation, c'est trouver la valeur ou les valeurs de x qui rendent cette égalité vraie. Par exemple, dans trois x plus deux égale onze, la solution est x égale trois. On vérifie toujours en remplaçant x par la valeur trouvée : trois fois trois plus deux égale onze, c'est correct.",
    },
    {
      titre: "Les deux règles pour résoudre",
      illustration: "🔧",
      visuel: "règle 1 : + / − ; règle 2 : × / ÷",
      contenu: [
        "Règle 1 : on peut ajouter ou soustraire le même nombre des deux côtés",
        "Règle 2 : on peut multiplier ou diviser les deux côtés par le même nombre non nul",
        "Le but : isoler x tout seul d'un côté de l'égalité",
        "On garde toujours l'égalité équilibrée, comme une balance",
      ],
      voixOff:
        "Deux règles permettent de résoudre une équation, comme si on manipulait une balance. Première règle : on peut ajouter ou soustraire le même nombre des deux côtés sans changer l'égalité. Deuxième règle : on peut multiplier ou diviser les deux côtés par un même nombre non nul. Le but est toujours d'isoler x tout seul d'un côté.",
    },
    {
      titre: "Résoudre une équation, étape par étape",
      illustration: "📝",
      visuel: "5x − 7 = 2x + 8",
      contenu: [
        "5x − 7 = 2x + 8",
        "On regroupe les x à gauche : 5x − 2x − 7 = 8, soit 3x − 7 = 8",
        "On isole 3x : 3x = 8 + 7 = 15",
        "On isole x : x = 15 ÷ 3 = 5",
      ],
      voixOff:
        "Prenons un exemple complet : cinq x moins sept égale deux x plus huit. On regroupe d'abord les termes en x du même côté, en soustrayant deux x de chaque côté : il reste trois x moins sept égale huit. On isole ensuite trois x en ajoutant sept des deux côtés : trois x égale quinze. Enfin, on divise par trois : x égale cinq.",
    },
    {
      titre: "Équation produit-nul",
      illustration: "🎯",
      visuel: "(x − 4)(2x + 6) = 0",
      contenu: [
        "Un produit de facteurs est nul si et seulement si l'un des facteurs est nul",
        "(x − 4)(2x + 6) = 0",
        "x − 4 = 0 ou 2x + 6 = 0",
        "x = 4 ou x = −3 : deux solutions",
      ],
      voixOff:
        "Quand une équation se présente sous forme d'un produit égal à zéro, on utilise la règle du produit nul : un produit est nul si et seulement si l'un au moins de ses facteurs est nul. Pour x moins quatre, fois deux x plus six, égale zéro, on résout chaque facteur séparément : x égale quatre, ou x égale moins trois.",
    },
    {
      titre: "Qu'est-ce qu'une inéquation ?",
      illustration: "📏",
      visuel: "2x + 3 < 11  →  x < 4",
      contenu: [
        "Une inéquation compare deux expressions avec <, >, ≤ ou ≥",
        "On résout comme une équation, avec les mêmes règles d'addition/soustraction",
        "Attention : en multipliant/divisant par un nombre NÉGATIF, on inverse le sens de l'inégalité !",
        "Exemple : 2x + 3 < 11 → 2x < 8 → x < 4",
      ],
      voixOff:
        "Une inéquation ressemble à une équation, mais avec un signe d'inégalité : plus petit que, plus grand que, ou leurs versions avec égalité. On la résout avec les mêmes règles que pour une équation, mais il y a un piège important : si on multiplie ou si on divise les deux côtés par un nombre négatif, il faut inverser le sens de l'inégalité. Par exemple, deux x plus trois plus petit que onze donne deux x plus petit que huit, donc x plus petit que quatre.",
    },
    {
      titre: "Le piège du nombre négatif",
      illustration: "⚠️",
      visuel: "−3x > 12  →  x < −4",
      contenu: [
        "−3x > 12",
        "On divise par −3 (nombre négatif) : le sens de l'inégalité s'inverse",
        "x < 12 ÷ (−3) = −4",
        "Vérification avec x = −5 : −3 × (−5) = 15 > 12 ✔",
      ],
      voixOff:
        "Illustrons le piège du nombre négatif avec moins trois x plus grand que douze. Pour isoler x, on divise par moins trois, un nombre négatif, donc le sens de l'inégalité s'inverse : plus grand que devient plus petit que. On obtient x plus petit que moins quatre. On peut vérifier avec x égale moins cinq : moins trois fois moins cinq égale quinze, qui est bien plus grand que douze.",
    },
    {
      titre: "Représenter la solution sur une droite graduée",
      illustration: "📈",
      visuel: "x ≥ 2 : ○ ou ● en 2, hachures vers la droite",
      contenu: [
        "Crochet fermé [ ou point plein ● : la borne est incluse (≤ ou ≥)",
        "Crochet ouvert ] ou point vide ○ : la borne est exclue (< ou >)",
        "x ≥ 2 : point plein en 2, hachures vers la droite (vers les grands nombres)",
        "x < 5 : point vide en 5, hachures vers la gauche",
      ],
      voixOff:
        "La solution d'une inéquation se représente sur une droite graduée. On utilise un point plein, ou un crochet fermé, quand la valeur limite est incluse, c'est-à-dire avec les signes inférieur ou égal, ou supérieur ou égal. On utilise un point vide, ou un crochet ouvert, quand la valeur est exclue, avec les signes strictement inférieur ou strictement supérieur. Ensuite, on hachure la partie de la droite qui correspond aux solutions.",
    },
    {
      titre: "Mettre un problème en équation",
      illustration: "🧠",
      visuel: "périmètre = 2(L + l) = 30",
      contenu: [
        "1. Choisir l'inconnue et la nommer clairement (« soit x... »)",
        "2. Traduire l'énoncé en expression mathématique",
        "3. Résoudre l'équation obtenue",
        "4. Vérifier et répondre à la question posée avec une phrase",
      ],
      voixOff:
        "Pour résoudre un problème concret, on suit toujours la même méthode. D'abord, on choisit l'inconnue et on la nomme clairement, par exemple : soit x la longueur cherchée. Ensuite, on traduit les informations de l'énoncé par une équation. On résout cette équation avec les règles vues précédemment. Enfin, on vérifie le résultat et on répond à la question posée par une phrase complète, avec l'unité.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Résoudre une équation : regrouper les x d'un côté, les nombres de l'autre",
        "Produit nul : A × B = 0 ⟺ A = 0 ou B = 0",
        "Inéquation : mêmes règles, MAIS on inverse le sens en multipliant/divisant par un négatif",
        "Toujours vérifier la solution en la substituant dans l'équation ou l'inéquation de départ",
      ],
      voixOff:
        "Résumons ce chapitre essentiel pour le brevet. Pour résoudre une équation, on regroupe les termes en x d'un côté et les nombres de l'autre, en gardant l'égalité équilibrée. Pour une équation produit-nul, on annule chaque facteur séparément. Pour une inéquation, les mêmes règles s'appliquent, mais attention : multiplier ou diviser par un nombre négatif inverse le sens de l'inégalité. Et n'oublie jamais de vérifier ta solution en la remplaçant dans l'équation de départ !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre regroupe la résolution d'équations et d'inéquations du premier degré, la mise en équation de problèmes concrets, et la représentation des solutions sur une droite graduée : des compétences testées à chaque brevet.",
    sections: [
      {
        titre: "Résoudre une équation",
        points: [
          "On peut ajouter/soustraire le même nombre des deux côtés",
          "On peut multiplier/diviser les deux côtés par un même nombre NON NUL",
          "Méthode : regrouper les x d'un côté, les nombres de l'autre, puis isoler x",
        ],
      },
      {
        titre: "Équation produit-nul",
        points: [
          "A × B = 0 équivaut à A = 0 ou B = 0",
          "On factorise d'abord si nécessaire, puis on résout chaque facteur",
        ],
      },
      {
        titre: "Inéquations",
        points: [
          "Mêmes règles que pour une équation pour additionner/soustraire",
          "Multiplier/diviser par un nombre NÉGATIF inverse le sens de l'inégalité",
          "Solution représentée sur une droite graduée : point plein (inclus) ou vide (exclu)",
        ],
      },
      {
        titre: "Mettre un problème en équation",
        points: [
          "Choisir et nommer l'inconnue",
          "Traduire l'énoncé en équation",
          "Résoudre, vérifier, puis répondre par une phrase avec l'unité",
        ],
      },
    ],
    audio:
      "Fiche de révision : équations et inéquations. Résoudre une équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie. On peut ajouter ou soustraire un même nombre des deux côtés, ou multiplier ou diviser par un même nombre non nul, pour isoler x. Pour une équation produit-nul, un produit de facteurs est nul si et seulement si l'un des facteurs est nul : on résout alors chaque facteur séparément. Pour une inéquation, les mêmes règles s'appliquent, avec un piège important : multiplier ou diviser par un nombre négatif inverse le sens de l'inégalité. La solution d'une inéquation se représente sur une droite graduée, avec un point plein si la valeur est incluse, un point vide si elle est exclue. Enfin, pour mettre un problème concret en équation, on nomme l'inconnue, on traduit l'énoncé, on résout, puis on répond par une phrase.",
  },
  memoCards: [
    { recto: "Comment résoudre 4x + 3 = 19 ?", verso: "4x = 19 − 3 = 16, donc x = 16 ÷ 4 = 4." },
    { recto: "Règle du produit nul ?", verso: "A × B = 0 équivaut à A = 0 ou B = 0." },
    { recto: "Que se passe-t-il quand on divise une inéquation par un nombre négatif ?", verso: "Le sens de l'inégalité s'inverse." },
    { recto: "Comment noter une borne incluse sur une droite graduée ?", verso: "Un point plein ● ou un crochet fermé [ (signes ≤ ou ≥)." },
    { recto: "Comment noter une borne exclue sur une droite graduée ?", verso: "Un point vide ○ ou un crochet ouvert ] (signes < ou >)." },
    { recto: "Les 4 étapes pour mettre un problème en équation ?", verso: "1. Nommer l'inconnue. 2. Traduire en équation. 3. Résoudre. 4. Vérifier et répondre par une phrase." },
    { recto: "Comment vérifier une solution d'équation ?", verso: "On remplace x par la valeur trouvée dans l'équation de départ et on vérifie l'égalité." },
    { recto: "Peut-on diviser une équation par 0 ?", verso: "Non, jamais : la division par 0 est impossible." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous l'équation x + 7 = 12.",
      choix: ["x = 5", "x = 19", "x = −5", "x = 84"],
      bonneReponse: 0,
      explication: "x = 12 − 7 = 5.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous l'équation 6x = 24.",
      choix: ["x = 18", "x = 4", "x = 144", "x = 30"],
      bonneReponse: 1,
      explication: "x = 24 ÷ 6 = 4.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Résous l'équation 3x − 5 = 10.",
      reponse: "x = 5",
      explication: "3x = 10 + 5 = 15, donc x = 15 ÷ 3 = 5.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Sur une droite graduée, comment représente-t-on x ≤ 3 ?",
      choix: [
        "Point vide en 3, hachures vers la gauche",
        "Point plein en 3, hachures vers la droite",
        "Point plein en 3, hachures vers la gauche",
        "Point vide en 3, hachures vers la droite",
      ],
      bonneReponse: 2,
      explication: "≤ inclut la valeur 3 (point plein) et concerne les nombres plus petits (hachures vers la gauche).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous l'équation 5x + 4 = 2x + 19.",
      reponse: "x = 5",
      explication: "5x − 2x = 19 − 4, donc 3x = 15, donc x = 5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous l'inéquation 3x − 2 > 10.",
      reponse: "x > 4",
      explication: "3x > 10 + 2 = 12, donc x > 12 ÷ 3 = 4. On divise par 3, positif, le sens ne change pas.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous l'inéquation −2x ≤ 8.",
      choix: ["x ≤ −4", "x ≥ −4", "x ≤ 4", "x ≥ 4"],
      bonneReponse: 1,
      explication: "On divise par −2 (négatif) : le sens s'inverse. x ≥ 8 ÷ (−2) = −4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous l'équation (x − 6)(x + 1) = 0.",
      reponse: "x = 6 ou x = −1",
      explication: "x − 6 = 0 donne x = 6 ; x + 1 = 0 donne x = −1.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un rectangle a une longueur qui mesure 5 cm de plus que sa largeur. Son périmètre est 46 cm. Détermine la largeur et la longueur de ce rectangle.",
      reponse: "Largeur = 9 cm ; longueur = 14 cm",
      explication:
        "Soit x la largeur. Longueur = x + 5. Périmètre = 2(x + x + 5) = 46, donc 2(2x + 5) = 46, donc 4x + 10 = 46, donc 4x = 36, donc x = 9. Largeur = 9 cm, longueur = 9 + 5 = 14 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous l'inéquation 4(x − 1) ≤ 2x + 8, puis représente la solution sur une droite graduée (décris-la).",
      reponse: "x ≤ 6 ; sur la droite graduée, point plein en 6, hachures vers la gauche.",
      explication: "4x − 4 ≤ 2x + 8, donc 4x − 2x ≤ 8 + 4, donc 2x ≤ 12, donc x ≤ 6.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Léa a 15 ans de plus que son frère. Dans 5 ans, elle aura le double de l'âge de son frère. Quel est l'âge actuel du frère ?",
      choix: ["10 ans", "15 ans", "20 ans", "25 ans"],
      bonneReponse: 0,
      explication:
        "Soit x l'âge actuel du frère. Dans 5 ans : frère = x+5, Léa = x+15+5 = x+20. On résout x+20 = 2(x+5), donc x+20 = 2x+10, donc x = 10.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une salle de sport propose deux formules : Formule A : 20 € par mois. Formule B : 50 € d'inscription puis 12 € par mois. À partir de combien de mois la formule B devient-elle plus avantageuse que la formule A ?",
      reponse: "À partir de 7 mois.",
      explication:
        "On résout 50 + 12x < 20x, donc 50 < 20x − 12x, donc 50 < 8x, donc x > 6,25. Le nombre de mois étant entier, la formule B devient plus avantageuse à partir de 7 mois.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous l'équation x − 4 = 9.",
      choix: ["x = 5", "x = 13", "x = −5", "x = 36"],
      bonneReponse: 1,
      explication: "x = 9 + 4 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Résous l'équation 2x + 6 = 20.",
      reponse: "x = 7",
      explication: "2x = 20 − 6 = 14, donc x = 7.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous l'inéquation 5x − 3 ≤ 17.",
      reponse: "x ≤ 4",
      explication: "5x ≤ 20, donc x ≤ 4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous l'équation (x + 3)(x − 8) = 0.",
      choix: ["x = 3 et x = 8", "x = −3 ou x = 8", "x = 3 ou x = −8", "x = −3 et x = −8"],
      bonneReponse: 1,
      explication: "x + 3 = 0 donne x = −3 ; x − 8 = 0 donne x = 8.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "La somme de trois nombres entiers consécutifs est 72. Détermine ces trois nombres.",
      reponse: "23, 24 et 25.",
      explication: "Soit x, x+1, x+2 les trois nombres. x + x+1 + x+2 = 72, donc 3x+3 = 72, donc 3x = 69, donc x = 23.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Équations et inéquations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Résous l'équation 7x = 63.",
          choix: ["x = 9", "x = 56", "x = 70", "x = 7"],
          bonneReponse: 0,
          explication: "x = 63 ÷ 7 = 9.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Résous l'équation 4x + 5 = 33.",
          reponse: "x = 7",
          explication: "4x = 33 − 5 = 28, donc x = 7.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous l'équation 6x − 3 = 3x + 15.",
          reponse: "x = 6",
          explication: "6x − 3x = 15 + 3, donc 3x = 18, donc x = 6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous l'inéquation −4x + 5 > 21.",
          reponse: "x < −4",
          explication: "−4x > 16, on divise par −4 (négatif), le sens s'inverse : x < −4.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Résous l'équation (2x − 4)(x + 9) = 0.",
          choix: ["x = 2 ou x = −9", "x = 4 ou x = 9", "x = 2 ou x = 9", "x = −2 ou x = −9"],
          bonneReponse: 0,
          explication: "2x − 4 = 0 donne x = 2 ; x + 9 = 0 donne x = −9.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un triangle a un périmètre de 39 cm. Le deuxième côté mesure le double du premier, et le troisième côté mesure 3 cm de plus que le premier. Détermine la longueur de chaque côté.",
          reponse: "Premier côté : 9 cm ; deuxième côté : 18 cm ; troisième côté : 12 cm.",
          explication:
            "Soit x le premier côté. Deuxième = 2x, troisième = x + 3. x + 2x + x + 3 = 39, donc 4x + 3 = 39, donc 4x = 36, donc x = 9. Les côtés mesurent 9, 18 et 12 cm.",
        },
      ],
    },
    {
      titre: "Examen 2 — Équations et inéquations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Résous l'équation x ÷ 3 = 8.",
          choix: ["x = 11", "x = 24", "x = 5", "x = 2,67"],
          bonneReponse: 1,
          explication: "x = 8 × 3 = 24.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Résous l'équation 2x − 9 = 1.",
          reponse: "x = 5",
          explication: "2x = 1 + 9 = 10, donc x = 5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous l'inéquation 3x + 7 ≥ 22.",
          reponse: "x ≥ 5",
          explication: "3x ≥ 15, donc x ≥ 5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous l'équation 8x − 5 = 3x + 20.",
          reponse: "x = 5",
          explication: "8x − 3x = 20 + 5, donc 5x = 25, donc x = 5.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel est le sens de l'inégalité après avoir divisé les deux membres de x/(−5) < 2 par... on multiplie par −5 pour isoler x. Que devient l'inégalité ?",
          choix: ["x < −10", "x > −10", "x < 10", "x > 10"],
          bonneReponse: 1,
          explication: "On multiplie par −5 (négatif), donc le sens s'inverse : x > 2 × (−5) = −10.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux forfaits de téléphone existent. Forfait A : 15 € par mois. Forfait B : 40 € d'inscription puis 10 € par mois. À partir de combien de mois le forfait B devient-il plus avantageux que le forfait A ?",
          reponse: "À partir de 9 mois.",
          explication:
            "On résout 40 + 10x < 15x, donc 40 < 5x, donc x > 8. Le nombre de mois étant entier, le forfait B devient plus avantageux à partir de 9 mois.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Résoudre une équation : regrouper les termes en x d'un côté, les nombres de l'autre, puis isoler x.",
    "On peut multiplier/diviser une équation ou une inéquation par un nombre non nul.",
    "Piège : diviser ou multiplier une INÉQUATION par un nombre NÉGATIF inverse le sens de l'inégalité.",
    "Équation produit-nul : A × B = 0 équivaut à A = 0 ou B = 0.",
    "Mise en équation : nommer l'inconnue, traduire l'énoncé, résoudre, vérifier, répondre par une phrase.",
    "Toujours vérifier sa solution en la substituant dans l'équation ou l'inéquation de départ.",
  ],
},
{
  slug: "fonctions-lineaires-affines",
  titre: "Fonctions linéaires et affines",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Fonctions linéaires f(x) = ax et affines f(x) = ax + b, coefficient directeur, ordonnée à l'origine et représentation graphique : un grand classique du brevet.",
  objectifs: [
    "Reconnaître une fonction linéaire et une fonction affine",
    "Calculer et interpréter le coefficient a et l'ordonnée à l'origine b",
    "Tracer la représentation graphique d'une fonction affine",
    "Déterminer l'expression d'une fonction affine à partir de données",
    "Relier proportionnalité et fonction linéaire",
  ],
  slides: [
    {
      titre: "La fonction linéaire",
      illustration: "📏",
      visuel: "f(x) = ax",
      contenu: [
        "Une fonction linéaire s'écrit f(x) = ax, où a est un nombre fixé",
        "Exemple : f(x) = 3x → f(2) = 6, f(5) = 15",
        "Elle correspond à une situation de proportionnalité",
        "a est appelé le coefficient de proportionnalité (ou coefficient directeur)",
      ],
      voixOff:
        "Une fonction linéaire est une fonction qui s'écrit sous la forme f de x égale a fois x, où a est un nombre fixé. Par exemple, avec f de x égale trois x, l'image de deux est six, et l'image de cinq est quinze. Ce type de fonction correspond exactement à une situation de proportionnalité, et le nombre a s'appelle le coefficient de proportionnalité.",
    },
    {
      titre: "La fonction affine",
      illustration: "➕",
      visuel: "f(x) = ax + b",
      contenu: [
        "Une fonction affine s'écrit f(x) = ax + b, où a et b sont des nombres fixés",
        "Exemple : f(x) = 2x + 3 → f(1) = 5, f(4) = 11",
        "Si b = 0, la fonction affine est aussi linéaire",
        "Si a = 0, f(x) = b est une fonction constante",
      ],
      voixOff:
        "Une fonction affine généralise la fonction linéaire : elle s'écrit f de x égale a x plus b, avec a et b deux nombres fixés. Par exemple, avec f de x égale deux x plus trois, l'image de un est cinq, et l'image de quatre est onze. Si b est nul, on retrouve une fonction linéaire. Si a est nul, la fonction est constante, elle renvoie toujours la même valeur b.",
    },
    {
      titre: "Le coefficient directeur a",
      illustration: "📈",
      visuel: "a = variation de f(x) / variation de x",
      contenu: [
        "a indique comment f(x) varie quand x augmente de 1",
        "Si a > 0, la fonction est croissante (elle monte)",
        "Si a < 0, la fonction est décroissante (elle descend)",
        "Si a = 0, la fonction est constante (droite horizontale)",
      ],
      voixOff:
        "Le nombre a s'appelle le coefficient directeur : il indique de combien varie f de x quand x augmente de un. Si a est positif, la fonction est croissante, sa représentation graphique monte de gauche à droite. Si a est négatif, la fonction est décroissante, elle descend. Si a est nul, la fonction est constante et sa courbe est une droite horizontale.",
    },
    {
      titre: "Calculer a à partir de deux points",
      illustration: "🧮",
      visuel: "a = (yB − yA) / (xB − xA)",
      contenu: [
        "Avec deux points A(xA ; yA) et B(xB ; yB) de la droite",
        "a = (yB − yA) / (xB − xA)",
        "Exemple : A(1 ; 5) et B(3 ; 11) → a = (11 − 5)/(3 − 1) = 6/2 = 3",
        "Puis on trouve b en remplaçant dans f(x) = ax + b avec un point",
      ],
      voixOff:
        "Pour calculer le coefficient directeur a à partir de deux points connus de la droite, on utilise la formule : a égale la variation de y divisée par la variation de x, c'est-à-dire y de B moins y de A, sur x de B moins x de A. Avec les points A un, cinq et B trois, onze, on obtient a égale onze moins cinq, sur trois moins un, soit six sur deux, donc trois.",
    },
    {
      titre: "Déterminer l'expression complète",
      illustration: "🔍",
      visuel: "f(x) = 3x + b, avec f(1) = 5",
      contenu: [
        "On a trouvé a = 3, donc f(x) = 3x + b",
        "On utilise un point connu, par exemple f(1) = 5",
        "3 × 1 + b = 5 → b = 5 − 3 = 2",
        "L'expression complète est f(x) = 3x + 2",
      ],
      voixOff:
        "Une fois a trouvé, on cherche b en utilisant un point connu de la droite. Ici, a vaut trois, et on sait que f de un égale cinq. On remplace dans f de x égale trois x plus b : trois fois un plus b égale cinq, donc b égale deux. L'expression complète de la fonction est donc f de x égale trois x plus deux.",
    },
    {
      titre: "La droite représentative",
      illustration: "📉",
      visuel: "b = ordonnée à l'origine (point où la droite coupe l'axe des y)",
      contenu: [
        "La représentation graphique d'une fonction affine est une DROITE",
        "b est l'ordonnée à l'origine : la droite coupe l'axe des ordonnées au point (0 ; b)",
        "Pour tracer la droite, il suffit de deux points",
        "Méthode rapide : placer (0 ; b), puis avancer de 1 en x et de a en y",
      ],
      voixOff:
        "La représentation graphique d'une fonction affine est toujours une droite. Le nombre b s'appelle l'ordonnée à l'origine, car la droite coupe l'axe vertical au point de coordonnées zéro, b. Pour tracer cette droite, deux points suffisent : on peut placer le point d'ordonnée à l'origine, puis se déplacer d'une unité vers la droite et de a unités vers le haut ou le bas, selon le signe de a.",
    },
    {
      titre: "Fonction linéaire et proportionnalité",
      illustration: "🔗",
      visuel: "f(x) = ax → droite passant par l'ORIGINE (0 ; 0)",
      contenu: [
        "La droite d'une fonction linéaire passe toujours par l'origine du repère",
        "C'est logique : f(0) = a × 0 = 0",
        "Un tableau de proportionnalité correspond à une fonction linéaire f(x) = ax",
        "a est alors le coefficient de proportionnalité (produit en croix)",
      ],
      voixOff:
        "Il y a un lien fort entre fonction linéaire et proportionnalité. La droite représentant une fonction linéaire passe toujours par l'origine du repère, car l'image de zéro est toujours zéro. Un tableau de proportionnalité peut donc toujours se traduire par une fonction linéaire f de x égale a x, où a est le coefficient de proportionnalité que l'on retrouve avec un produit en croix.",
    },
    {
      titre: "Lire graphiquement a et b",
      illustration: "👀",
      visuel: "droite qui coupe l'axe des y en 2, qui monte de 3 quand x avance de 1",
      contenu: [
        "b se lit directement : c'est l'ordonnée du point où la droite coupe l'axe vertical",
        "a se lit en comptant : de combien la droite monte (ou descend) quand x avance de 1",
        "Si la droite monte : a > 0 ; si elle descend : a < 0",
        "Une droite horizontale correspond à a = 0",
      ],
      voixOff:
        "Sur un graphique, on peut lire directement a et b. L'ordonnée à l'origine b se lit à l'endroit où la droite coupe l'axe vertical. Le coefficient directeur a se lit en comptant de combien la droite monte ou descend lorsque x avance d'une unité. Si la droite monte, a est positif ; si elle descend, a est négatif ; si elle est horizontale, a est nul.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Fonction linéaire : f(x) = ax, droite passant par l'origine, proportionnalité",
        "Fonction affine : f(x) = ax + b, droite quelconque",
        "a = coefficient directeur (pente) ; b = ordonnée à l'origine",
        "a = (yB − yA) / (xB − xA) avec deux points A et B de la droite",
      ],
      voixOff:
        "Résumons. Une fonction linéaire s'écrit f de x égale a x, sa droite passe par l'origine, et elle correspond à une situation de proportionnalité. Une fonction affine s'écrit f de x égale a x plus b, sa droite coupe l'axe vertical au point d'ordonnée b. Le coefficient a indique la pente de la droite, et se calcule à partir de deux points connus avec la formule variation de y sur variation de x. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Les fonctions linéaires et affines sont représentées par des droites. Ce chapitre relie l'algèbre (calcul de a et b) et la géométrie (lecture et tracé de droites), très présent au brevet.",
    sections: [
      {
        titre: "Fonction linéaire",
        points: [
          "f(x) = ax : la droite passe par l'origine (0 ; 0)",
          "Correspond à une situation de proportionnalité",
          "a = coefficient de proportionnalité",
        ],
      },
      {
        titre: "Fonction affine",
        points: [
          "f(x) = ax + b : la droite coupe l'axe des ordonnées en (0 ; b)",
          "a = coefficient directeur (pente) ; b = ordonnée à l'origine",
          "Si b = 0 : fonction linéaire ; si a = 0 : fonction constante",
        ],
      },
      {
        titre: "Calculer a et b",
        points: [
          "a = (yB − yA) / (xB − xA) avec deux points A et B connus",
          "b se trouve en remplaçant un point connu dans f(x) = ax + b",
        ],
      },
      {
        titre: "Lecture graphique",
        points: [
          "Signe de a : droite qui monte (a > 0), qui descend (a < 0), horizontale (a = 0)",
          "b se lit au point d'intersection avec l'axe des ordonnées",
          "Pour tracer : placer (0 ; b), puis avancer de 1 en x et de a en y",
        ],
      },
    ],
    audio:
      "Fiche de révision : fonctions linéaires et affines. Une fonction linéaire s'écrit f de x égale a x ; sa représentation graphique est une droite qui passe par l'origine du repère, et elle correspond à une situation de proportionnalité. Une fonction affine s'écrit f de x égale a x plus b ; sa droite coupe l'axe des ordonnées au point d'ordonnée b. Le coefficient a, appelé coefficient directeur, indique la pente de la droite : positif, la droite monte ; négatif, elle descend ; nul, elle est horizontale. On calcule a à partir de deux points connus avec la formule variation de y divisée par variation de x. On trouve ensuite b en remplaçant les coordonnées d'un point connu dans l'expression de la fonction.",
  },
  memoCards: [
    { recto: "Forme générale d'une fonction linéaire ?", verso: "f(x) = ax. Sa droite passe par l'origine (0 ; 0)." },
    { recto: "Forme générale d'une fonction affine ?", verso: "f(x) = ax + b. Sa droite coupe l'axe des ordonnées en (0 ; b)." },
    { recto: "Que représente a ?", verso: "Le coefficient directeur : la pente de la droite." },
    { recto: "Que représente b ?", verso: "L'ordonnée à l'origine : où la droite coupe l'axe vertical." },
    { recto: "Formule pour calculer a avec deux points A et B ?", verso: "a = (yB − yA) / (xB − xA)." },
    { recto: "Signe de a si la droite est croissante ?", verso: "a > 0 (la droite monte de gauche à droite)." },
    { recto: "Lien entre fonction linéaire et proportionnalité ?", verso: "Un tableau de proportionnalité se traduit toujours par f(x) = ax, où a est le coefficient de proportionnalité." },
    { recto: "Comment tracer une fonction affine avec 2 points ?", verso: "Choisir deux valeurs de x, calculer leurs images, placer les points, tracer la droite." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Laquelle de ces fonctions est linéaire ?",
      choix: ["f(x) = 2x + 3", "f(x) = 5x", "f(x) = x²", "f(x) = 4"],
      bonneReponse: 1,
      explication: "f(x) = 5x est de la forme ax, sans terme constant : c'est une fonction linéaire.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Soit f(x) = 4x − 3. Que vaut f(2) ?",
      choix: ["5", "8", "1", "11"],
      bonneReponse: 0,
      explication: "f(2) = 4 × 2 − 3 = 8 − 3 = 5.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Soit f(x) = 3x + 1. Quelle est l'ordonnée à l'origine de sa droite représentative ?",
      reponse: "1",
      explication: "L'ordonnée à l'origine est le terme constant b, ici égal à 1 : la droite coupe l'axe des y en (0 ; 1).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La droite d'une fonction linéaire passe toujours par le point :",
      choix: ["(1 ; 1)", "(0 ; 0)", "(0 ; 1)", "(1 ; 0)"],
      bonneReponse: 1,
      explication: "Pour une fonction linéaire f(x) = ax, f(0) = a × 0 = 0, donc la droite passe par l'origine (0 ; 0).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une droite passe par A(0 ; 4) et B(2 ; 10). Détermine le coefficient directeur a.",
      reponse: "a = 3",
      explication: "a = (10 − 4)/(2 − 0) = 6/2 = 3.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une fonction affine f a pour coefficient directeur a = 2 et vérifie f(3) = 11. Détermine b, puis l'expression de f.",
      reponse: "b = 5 ; f(x) = 2x + 5",
      explication: "2 × 3 + b = 11, donc 6 + b = 11, donc b = 5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une droite passe par les points A(1 ; 7) et B(4 ; 1). La fonction est :",
      choix: ["croissante", "décroissante", "constante", "on ne peut pas savoir"],
      bonneReponse: 1,
      explication: "a = (1 − 7)/(4 − 1) = −6/3 = −2 < 0 : la fonction est décroissante.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un jardinier facture 25 € de déplacement puis 15 € par heure de travail. Exprime le prix f(x) en fonction du nombre d'heures x, puis calcule f(3).",
      reponse: "f(x) = 15x + 25 ; f(3) = 70 €",
      explication: "f(3) = 15 × 3 + 25 = 45 + 25 = 70.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une droite passe par A(2 ; 3) et B(5 ; 12). Détermine l'expression complète de la fonction affine correspondante.",
      reponse: "f(x) = 3x − 3",
      explication:
        "a = (12 − 3)/(5 − 2) = 9/3 = 3. Puis avec A : 3 × 2 + b = 3, donc 6 + b = 3, donc b = −3. Donc f(x) = 3x − 3.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une fonction linéaire f vérifie f(4) = 20. Que vaut f(7) ?",
      choix: ["23", "35", "5", "28"],
      bonneReponse: 1,
      explication: "f(x) = ax avec 4a = 20, donc a = 5. Donc f(7) = 5 × 7 = 35 (on peut aussi faire un produit en croix : 20/4 × 7 = 35).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Deux entreprises de location de vélos proposent : Entreprise A : f(x) = 4x (4 € de l'heure, sans forfait). Entreprise B : g(x) = 2x + 10 (10 € de forfait puis 2 € de l'heure). Pour quelle durée x les deux entreprises coûtent-elles le même prix ?",
      reponse: "x = 5 heures (prix commun : 20 €)",
      explication: "On résout 4x = 2x + 10, donc 2x = 10, donc x = 5. Vérification : f(5) = 20 et g(5) = 10 + 10 = 20.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La droite représentant une fonction affine f passe par le point (0 ; −2) et a un coefficient directeur a = −3. Détermine f(x), puis calcule l'antécédent de 7 par f.",
      reponse: "f(x) = −3x − 2 ; l'antécédent de 7 est x = −3",
      explication:
        "Le point (0 ; −2) donne directement b = −2, donc f(x) = −3x − 2. Pour l'antécédent de 7 : −3x − 2 = 7, donc −3x = 9, donc x = −3.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Soit f(x) = 2x + 5. Que vaut f(0) ?",
      choix: ["0", "2", "5", "7"],
      bonneReponse: 2,
      explication: "f(0) = 2 × 0 + 5 = 5 : c'est l'ordonnée à l'origine.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Soit f(x) = −4x. La fonction est-elle croissante ou décroissante ? Justifie.",
      reponse: "Décroissante, car a = −4 est négatif.",
      explication: "Quand a < 0, la fonction est décroissante : sa droite représentative descend de gauche à droite.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une droite passe par A(0 ; 3) et B(1 ; 8). Détermine le coefficient directeur a.",
      reponse: "a = 5",
      explication: "a = (8 − 3)/(1 − 0) = 5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une fonction linéaire vérifie f(5) = 15. Que vaut a ?",
      choix: ["3", "5", "15", "75"],
      bonneReponse: 0,
      explication: "f(x) = ax avec 5a = 15, donc a = 3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une droite passe par A(1 ; 6) et B(3 ; 2). Détermine l'expression de la fonction affine correspondante.",
      reponse: "f(x) = −2x + 8",
      explication: "a = (2 − 6)/(3 − 1) = −4/2 = −2. Avec A : −2×1 + b = 6, donc b = 8.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Fonctions linéaires et affines",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Soit f(x) = 6x. Que vaut f(4) ?",
          choix: ["10", "24", "2", "64"],
          bonneReponse: 1,
          explication: "f(4) = 6 × 4 = 24.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Soit f(x) = 3x − 7. Quel est le coefficient directeur de sa droite ?",
          reponse: "a = 3",
          explication: "Dans f(x) = ax + b, le coefficient directeur est a, ici 3.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une droite passe par A(0 ; −1) et B(3 ; 8). Détermine son coefficient directeur a et son ordonnée à l'origine b.",
          reponse: "a = 3 ; b = −1",
          explication: "a = (8 − (−1))/(3 − 0) = 9/3 = 3. b se lit directement au point A(0 ; −1), donc b = −1.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un taxi facture 3 € de prise en charge puis 1,50 € par kilomètre. Exprime le prix f(x) selon la distance x en km, puis calcule le prix pour 12 km.",
          reponse: "f(x) = 1,5x + 3 ; f(12) = 21 €",
          explication: "f(12) = 1,5 × 12 + 3 = 18 + 3 = 21.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une fonction linéaire vérifie f(6) = 18. Que vaut f(2) ?",
          choix: ["3", "6", "9", "36"],
          bonneReponse: 1,
          explication: "a = 18/6 = 3, donc f(2) = 3 × 2 = 6.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux opérateurs téléphoniques proposent : Opérateur A : f(x) = 30 (forfait fixe de 30 €, quel que soit x). Opérateur B : g(x) = 5x + 10 (10 € de forfait puis 5 € par Go). Pour combien de Go x les deux opérateurs coûtent-ils le même prix ?",
          reponse: "x = 4 Go (prix commun : 30 €)",
          explication: "On résout 30 = 5x + 10, donc 5x = 20, donc x = 4.",
        },
      ],
    },
    {
      titre: "Examen 2 — Fonctions linéaires et affines",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Laquelle de ces fonctions est affine mais pas linéaire ?",
          choix: ["f(x) = 7x", "f(x) = x", "f(x) = 2x − 5", "f(x) = 0,5x"],
          bonneReponse: 2,
          explication: "f(x) = 2x − 5 a un terme constant (b = −5 ≠ 0) : elle est affine mais pas linéaire.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Soit f(x) = −x + 8. Que vaut f(3) ?",
          reponse: "f(3) = 5",
          explication: "f(3) = −3 + 8 = 5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une droite passe par A(0 ; 2) et B(4 ; −6). Détermine son coefficient directeur a.",
          reponse: "a = −2",
          explication: "a = (−6 − 2)/(4 − 0) = −8/4 = −2.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une fonction affine f a pour coefficient directeur a = −5 et vérifie f(2) = 1. Détermine b, puis l'expression de f.",
          reponse: "b = 11 ; f(x) = −5x + 11",
          explication: "−5 × 2 + b = 1, donc −10 + b = 1, donc b = 11.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Sur un graphique, une droite coupe l'axe des ordonnées en (0 ; −3) et monte de 2 quand x avance de 1. Quelle est son expression ?",
          choix: ["f(x) = 2x − 3", "f(x) = −3x + 2", "f(x) = 2x + 3", "f(x) = −2x − 3"],
          bonneReponse: 0,
          explication: "b = −3 (ordonnée à l'origine) et a = 2 (monte de 2 par unité de x), donc f(x) = 2x − 3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un artisan facture ses interventions selon f(x) = 40x + 20, où x est le nombre d'heures. Un client dispose d'un budget de 220 €. Combien d'heures d'intervention peut-il financer au maximum ?",
          reponse: "5 heures maximum.",
          explication: "On résout 40x + 20 ≤ 220, donc 40x ≤ 200, donc x ≤ 5. Le client peut financer au maximum 5 heures.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Fonction linéaire : f(x) = ax, droite passant par l'origine, correspond à une proportionnalité.",
    "Fonction affine : f(x) = ax + b, droite quelconque coupant l'axe des ordonnées en (0 ; b).",
    "a = coefficient directeur (pente) ; b = ordonnée à l'origine.",
    "a = (yB − yA) / (xB − xA) avec deux points A et B connus de la droite.",
    "Signe de a : positif → fonction croissante ; négatif → fonction décroissante ; nul → fonction constante.",
    "Pour trouver b, remplacer les coordonnées d'un point connu dans f(x) = ax + b.",
  ],
},
{
  slug: "fonctions",
  titre: "Les fonctions",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Comprendre la notion de fonction, maîtriser le vocabulaire image et antécédent, utiliser un tableau de valeurs et lire une courbe représentative : l'essentiel pour le brevet.",
  objectifs: [
    "Comprendre qu'une fonction associe à un nombre un unique nombre",
    "Utiliser les notations f(x) et f : x ↦ ...",
    "Calculer une image et déterminer un antécédent",
    "Construire et exploiter un tableau de valeurs",
    "Lire des images et des antécédents sur une courbe représentative",
  ],
  slides: [
    {
      titre: "C'est quoi, une fonction ?",
      illustration: "⚙️",
      visuel: "nombre → MACHINE → résultat",
      contenu: [
        "Une fonction est une « machine à calculer »",
        "On lui donne un nombre, elle en renvoie UN SEUL",
        "Exemple : la machine « je multiplie par 2 puis j'ajoute 1 »",
        "Si on lui donne 3, elle renvoie 2 × 3 + 1 = 7",
      ],
      voixOff:
        "Une fonction, c'est comme une machine à calculer. On lui donne un nombre en entrée, elle applique toujours le même programme de calcul, et elle renvoie un seul nombre en sortie. Par exemple, la machine qui multiplie par deux puis ajoute un : si on lui donne trois, elle renvoie deux fois trois plus un, c'est-à-dire sept.",
    },
    {
      titre: "Les notations",
      illustration: "✍️",
      visuel: "f(x) = 2x + 1  ⟺  f : x ↦ 2x + 1",
      contenu: [
        "La fonction s'appelle f (ou g, h...)",
        "f(x) = 2x + 1 se lit « f de x égale 2x plus 1 »",
        "f : x ↦ 2x + 1 se lit « f qui à x associe 2x plus 1 »",
        "Les deux notations disent exactement la même chose",
      ],
      voixOff:
        "On donne un nom à la fonction, souvent f, g ou h. Deux notations existent. La première : f de x égale deux x plus un. La seconde : f qui à x associe deux x plus un, avec une flèche. Ces deux écritures signifient exactement la même chose : elles décrivent le programme de calcul de la fonction.",
    },
    {
      titre: "L'image d'un nombre",
      illustration: "📤",
      visuel: "f(3) = 7 → 7 est l'image de 3",
      contenu: [
        "L'image de x, c'est le résultat que renvoie la fonction",
        "Avec f(x) = 2x + 1 : f(3) = 2 × 3 + 1 = 7",
        "On dit : l'image de 3 par f est 7",
        "Un nombre a toujours UNE SEULE image",
      ],
      voixOff:
        "L'image d'un nombre, c'est le résultat que renvoie la fonction. Avec f de x égale deux x plus un, l'image de trois est f de trois, c'est-à-dire deux fois trois plus un, égale sept. Retiens bien : un nombre a toujours une seule image, car la machine renvoie toujours un seul résultat.",
    },
    {
      titre: "L'antécédent d'un nombre",
      illustration: "📥",
      visuel: "f(?) = 9 → chercher x tel que 2x + 1 = 9",
      contenu: [
        "Un antécédent de y, c'est un nombre de départ qui donne y",
        "Antécédent de 9 par f : on résout 2x + 1 = 9",
        "2x = 8 donc x = 4 : l'antécédent de 9 est 4",
        "Vérification : f(4) = 2 × 4 + 1 = 9 ✔",
      ],
      voixOff:
        "Un antécédent, c'est le chemin inverse : on connaît le résultat, on cherche le nombre de départ. Quel est l'antécédent de neuf par f ? On résout l'équation deux x plus un égale neuf. On trouve x égale quatre. On vérifie : f de quatre égale deux fois quatre plus un, égale neuf. C'est bon !",
    },
    {
      titre: "Image unique, antécédents multiples",
      illustration: "🎭",
      visuel: "g(x) = x² : g(3) = 9 et g(−3) = 9",
      contenu: [
        "Une image est unique, mais un nombre peut avoir PLUSIEURS antécédents",
        "Avec g(x) = x² : g(3) = 9 et g(−3) = 9",
        "9 a donc deux antécédents par g : 3 et −3",
        "Certains nombres n'en ont aucun : −4 n'a pas d'antécédent par g (un carré n'est jamais négatif)",
      ],
      voixOff:
        "Attention, il y a une différence importante entre image et antécédent. Chaque nombre a une seule image, mais un nombre peut avoir plusieurs antécédents, ou même aucun. Prenons g de x égale x au carré : trois au carré égale neuf, et moins trois au carré égale neuf aussi. Le nombre neuf a donc deux antécédents, trois et moins trois. Et moins quatre n'en a aucun, car un carré n'est jamais négatif.",
    },
    {
      titre: "Le tableau de valeurs",
      illustration: "📋",
      visuel: "x : −1 | 0 | 2 | 5 → f(x) : −1 | 1 | 5 | 11",
      contenu: [
        "Ligne du haut : les valeurs de x ; ligne du bas : les images f(x)",
        "Avec f(x) = 2x + 1 : f(−1) = −1 ; f(0) = 1 ; f(2) = 5 ; f(5) = 11",
        "Lecture verticale : image (haut → bas), antécédent (bas → haut)",
        "C'est la première étape pour tracer une courbe",
      ],
      voixOff:
        "Un tableau de valeurs résume la fonction : la ligne du haut contient les valeurs de x, la ligne du bas contient leurs images. Avec f de x égale deux x plus un, l'image de zéro est un, l'image de deux est cinq, l'image de cinq est onze. On lit une image en descendant, et un antécédent en remontant. Ce tableau sert ensuite à tracer la courbe de la fonction.",
    },
    {
      titre: "La courbe représentative",
      illustration: "📈",
      visuel: "M(x ; f(x))",
      contenu: [
        "La courbe de f est l'ensemble des points de coordonnées (x ; f(x))",
        "Abscisse = nombre de départ, ordonnée = son image",
        "Le point (2 ; 5) est sur la courbe de f car f(2) = 5",
        "Pour vérifier qu'un point est sur la courbe : calculer f(abscisse) et comparer à l'ordonnée",
      ],
      voixOff:
        "La courbe représentative d'une fonction est l'ensemble des points dont l'abscisse est un nombre de départ et l'ordonnée son image. Le point de coordonnées deux, cinq, appartient à la courbe de f, car f de deux égale cinq. Pour savoir si un point est sur la courbe, on calcule l'image de son abscisse et on compare avec son ordonnée.",
    },
    {
      titre: "Lecture graphique : trouver une image",
      illustration: "🔎",
      visuel: "x → courbe → ordonnée = f(x)",
      contenu: [
        "Pour lire f(2) : partir de 2 sur l'axe des abscisses",
        "Monter (ou descendre) verticalement jusqu'à la courbe",
        "Lire l'ordonnée du point atteint : c'est l'image",
        "Une seule lecture possible : l'image est unique",
      ],
      voixOff:
        "Pour lire une image sur un graphique, par exemple f de deux, on part de deux sur l'axe horizontal, l'axe des abscisses. On se déplace verticalement jusqu'à rencontrer la courbe, puis horizontalement jusqu'à l'axe vertical. Le nombre lu sur l'axe des ordonnées est l'image cherchée. Il n'y a qu'une seule lecture possible, car l'image est unique.",
    },
    {
      titre: "Lecture graphique : trouver des antécédents",
      illustration: "🧭",
      visuel: "y → courbe → abscisses des points",
      contenu: [
        "Pour trouver les antécédents de 4 : partir de 4 sur l'axe des ordonnées",
        "Tracer une droite horizontale : elle peut couper la courbe en plusieurs points",
        "Les abscisses de TOUS ces points sont les antécédents",
        "0, 1, 2 points d'intersection ou plus : autant d'antécédents",
      ],
      voixOff:
        "Pour trouver les antécédents d'un nombre, on fait le chemin inverse. On part de ce nombre sur l'axe des ordonnées et on trace une droite horizontale. Cette droite peut couper la courbe en un point, en plusieurs points, ou pas du tout. Les abscisses de tous les points d'intersection sont les antécédents. C'est pour cela qu'un nombre peut avoir plusieurs antécédents, ou aucun.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Une fonction associe à chaque nombre UN unique nombre : f(x) ou f : x ↦ ...",
        "Image = résultat (on calcule f(x)) ; antécédent = départ (on résout f(x) = y)",
        "Une image est unique ; un nombre peut avoir 0, 1 ou plusieurs antécédents",
        "Courbe : points (x ; f(x)) ; image = ordonnée, antécédents = abscisses",
      ],
      voixOff:
        "Résumons. Une fonction est un programme de calcul qui associe à chaque nombre un unique résultat. Pour trouver une image, on calcule f de x. Pour trouver un antécédent, on résout l'équation f de x égale le nombre donné. Une image est toujours unique, mais il peut y avoir zéro, un ou plusieurs antécédents. Sur un graphique, l'image se lit sur l'axe des ordonnées, et les antécédents sur l'axe des abscisses. Bravo, tu es prêt pour les fonctions au brevet !",
    },
  ],
  fiche: {
    intro:
      "Une fonction f est un programme de calcul qui, à chaque nombre x, associe un unique nombre noté f(x). C'est un chapitre clé du brevet : vocabulaire, calculs et lectures graphiques.",
    sections: [
      {
        titre: "Notations",
        points: [
          "f(x) = 2x + 1 se lit « f de x égale 2x + 1 »",
          "f : x ↦ 2x + 1 se lit « f qui à x associe 2x + 1 »",
          "Les deux notations décrivent le même programme de calcul",
        ],
      },
      {
        titre: "Image et antécédent",
        points: [
          "Image de a : le résultat f(a). Ex : si f(x) = 2x + 1, alors f(3) = 7 → 7 est l'image de 3",
          "Antécédent de b : un nombre x tel que f(x) = b. On résout une équation : 2x + 1 = 9 donne x = 4",
          "Une image est unique ; un antécédent peut ne pas être unique",
        ],
      },
      {
        titre: "Plusieurs antécédents possibles",
        points: [
          "Avec g(x) = x² : g(3) = 9 et g(−3) = 9, donc 9 a deux antécédents (3 et −3)",
          "−4 n'a aucun antécédent par g, car un carré n'est jamais négatif",
        ],
      },
      {
        titre: "Tableau de valeurs",
        points: [
          "Ligne du haut : valeurs de x ; ligne du bas : images f(x)",
          "Image : lecture de haut en bas ; antécédent : lecture de bas en haut",
        ],
      },
      {
        titre: "Courbe représentative",
        points: [
          "Ensemble des points de coordonnées (x ; f(x))",
          "Un point (a ; b) est sur la courbe si et seulement si f(a) = b",
          "Ex : (2 ; 5) est sur la courbe de f(x) = 2x + 1 car f(2) = 5",
        ],
      },
      {
        titre: "Lecture graphique",
        points: [
          "Image de a : partir de a sur l'axe des abscisses, monter à la courbe, lire l'ordonnée",
          "Antécédents de b : tracer l'horizontale d'ordonnée b, lire les abscisses de TOUS les points d'intersection",
        ],
      },
    ],
    audio:
      "Fiche de révision : les fonctions. Une fonction est un programme de calcul qui associe à chaque nombre un unique résultat. On la note f de x égale, par exemple, deux x plus un, ou f qui à x associe deux x plus un : les deux écritures sont équivalentes. L'image d'un nombre est le résultat du calcul : l'image de trois par cette fonction est sept. Un antécédent est un nombre de départ : pour trouver un antécédent de neuf, on résout deux x plus un égale neuf, et on trouve quatre. Attention : une image est toujours unique, mais un nombre peut avoir plusieurs antécédents ou aucun, comme avec la fonction carré. Le tableau de valeurs rassemble des nombres et leurs images. La courbe représentative est l'ensemble des points d'abscisse x et d'ordonnée f de x. Sur un graphique, on lit une image sur l'axe des ordonnées, et les antécédents sur l'axe des abscisses.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une fonction ?", verso: "Un programme de calcul qui associe à chaque nombre UN unique nombre." },
    { recto: "Comment se lit f : x ↦ 3x − 2 ?", verso: "« f qui à x associe 3x − 2 ». Même sens que f(x) = 3x − 2." },
    { recto: "Qu'est-ce que l'image de a par f ?", verso: "Le résultat f(a). Ex : f(x) = 2x + 1 → l'image de 3 est f(3) = 7." },
    { recto: "Qu'est-ce qu'un antécédent de b par f ?", verso: "Un nombre x tel que f(x) = b. On le trouve en résolvant une équation." },
    { recto: "Combien d'images pour un nombre ?", verso: "Toujours UNE seule." },
    { recto: "Combien d'antécédents pour un nombre ?", verso: "0, 1 ou plusieurs. Ex : avec g(x) = x², 9 a deux antécédents : 3 et −3." },
    { recto: "Que représente la courbe de f ?", verso: "L'ensemble des points de coordonnées (x ; f(x))." },
    { recto: "Le point (a ; b) est sur la courbe de f si...", verso: "... f(a) = b : l'ordonnée est l'image de l'abscisse." },
    { recto: "Lire une image sur un graphique ?", verso: "Partir de x sur l'axe des abscisses, aller à la courbe, lire l'ordonnée." },
    { recto: "Lire des antécédents sur un graphique ?", verso: "Tracer l'horizontale d'ordonnée y, lire les abscisses de tous les points d'intersection avec la courbe." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Soit f(x) = 3x. Que vaut f(5) ?",
      choix: ["15", "8", "35", "3"],
      bonneReponse: 0,
      explication: "f(5) = 3 × 5 = 15.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie la notation f : x ↦ 2x − 1 ?",
      choix: [
        "f est le nombre 2x − 1",
        "La fonction f associe à x le nombre 2x − 1",
        "x est l'image de 2x − 1",
        "f et x sont égaux",
      ],
      bonneReponse: 1,
      explication: "La flèche ↦ se lit « associe » : f est la fonction qui à x associe 2x − 1, c'est-à-dire f(x) = 2x − 1.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Soit f(x) = x + 4. Calcule f(6).",
      reponse: "f(6) = 10",
      explication: "On remplace x par 6 : f(6) = 6 + 4 = 10. L'image de 6 par f est 10.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Si f(2) = 5, alors 5 est...",
      choix: ["un antécédent de 2", "l'image de 2", "la courbe de f", "l'abscisse de 2"],
      bonneReponse: 1,
      explication: "f(2) = 5 signifie que 5 est l'image de 2 par f (et que 2 est un antécédent de 5).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Soit g(x) = x². Calcule g(−4).",
      reponse: "g(−4) = 16",
      explication: "g(−4) = (−4)² = (−4) × (−4) = 16. Attention au piège : le carré d'un nombre négatif est positif.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Soit f(x) = 2x + 3. Détermine l'antécédent de 11 par f.",
      reponse: "x = 4",
      explication: "On résout 2x + 3 = 11, donc 2x = 8, donc x = 4. Vérification : f(4) = 2 × 4 + 3 = 11.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Soit h(x) = 5x − 2. Dans un tableau de valeurs, quelle est l'image de 3 ?",
      choix: ["17", "13", "15", "1"],
      bonneReponse: 1,
      explication: "h(3) = 5 × 3 − 2 = 15 − 2 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Soit f(x) = x². Calcule f(3) et f(−3). Que remarques-tu ?",
      reponse: "f(3) = 9 et f(−3) = 9 : deux nombres différents peuvent avoir la même image.",
      explication: "3² = 9 et (−3)² = 9. Le nombre 9 a donc deux antécédents par f : 3 et −3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Soit f(x) = x² − 5. Détermine tous les antécédents de 4 par f.",
      reponse: "x = 3 et x = −3",
      explication: "On résout x² − 5 = 4, donc x² = 9, donc x = 3 ou x = −3. Il y a deux antécédents.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La courbe d'une fonction f passe par le point A(2 ; 5). Traduis cette information avec le vocabulaire des fonctions (deux phrases).",
      reponse: "f(2) = 5 : l'image de 2 par f est 5, et 2 est un antécédent de 5 par f.",
      explication: "Un point (a ; b) de la courbe signifie f(a) = b : l'abscisse est le nombre de départ, l'ordonnée est son image.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Soit g(x) = 4x − 1. Le point M(3 ; 11) appartient-il à la courbe de g ?",
      choix: [
        "Oui, car g(3) = 11",
        "Non, car g(3) = 12",
        "Non, car g(11) = 3",
        "On ne peut pas savoir sans tracer la courbe",
      ],
      bonneReponse: 0,
      explication: "g(3) = 4 × 3 − 1 = 11 : l'ordonnée de M est bien l'image de son abscisse, donc M est sur la courbe.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Soit f(x) = 3x − 7. Trouve le nombre x tel que f(x) = x + 1.",
      reponse: "x = 4",
      explication: "On résout 3x − 7 = x + 1, donc 2x = 8, donc x = 4. Vérification : f(4) = 5 et 4 + 1 = 5.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Soit f(x) = x − 3. Que vaut f(10) ?",
      choix: ["13", "7", "30", "−7"],
      bonneReponse: 1,
      explication: "f(10) = 10 − 3 = 7.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "On sait que f(4) = 9. Complète : 9 est ... de 4, et 4 est ... de 9.",
      reponse: "9 est l'image de 4, et 4 est un antécédent de 9.",
      explication: "f(4) = 9 : on part de 4 (antécédent) et on arrive à 9 (image).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Soit f(x) = 5x. Détermine l'antécédent de 20 par f.",
      reponse: "x = 4",
      explication: "On résout 5x = 20, donc x = 4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Soit g(x) = x². Combien le nombre 25 a-t-il d'antécédents par g ?",
      choix: ["Aucun", "Un seul : 5", "Deux : 5 et −5", "Une infinité"],
      bonneReponse: 2,
      explication: "x² = 25 donne x = 5 ou x = −5 : deux antécédents.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Sur un graphique, comment lit-on l'image de 3 par une fonction f ?",
      reponse: "On part de 3 sur l'axe des abscisses, on rejoint verticalement la courbe, puis on lit l'ordonnée du point obtenu.",
      explication: "L'image se lit toujours sur l'axe des ordonnées ; les antécédents se lisent sur l'axe des abscisses.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les fonctions",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Soit f : x ↦ 4x + 2. Que vaut f(1) ?",
          choix: ["6", "42", "8", "4"],
          bonneReponse: 0,
          explication: "f(1) = 4 × 1 + 2 = 6.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Soit f(x) = x² + 1. Calcule f(3).",
          reponse: "f(3) = 10",
          explication: "f(3) = 3² + 1 = 9 + 1 = 10.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Soit f(x) = 2x − 5. Détermine l'antécédent de 7 par f.",
          reponse: "x = 6",
          explication: "On résout 2x − 5 = 7, donc 2x = 12, donc x = 6. Vérification : f(6) = 12 − 5 = 7.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Soit f(x) = −2x + 4. Complète le tableau de valeurs pour x = 0 ; 1 ; 3.",
          reponse: "f(0) = 4 ; f(1) = 2 ; f(3) = −2",
          explication: "f(0) = −2 × 0 + 4 = 4 ; f(1) = −2 + 4 = 2 ; f(3) = −6 + 4 = −2.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La courbe d'une fonction f passe par le point (2 ; 3). Cela signifie que :",
          choix: ["f(3) = 2", "f(2) = 3", "f(2) = 2", "3 est un antécédent de 2"],
          bonneReponse: 1,
          explication: "Sur la courbe, l'ordonnée est l'image de l'abscisse : f(2) = 3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Soit g(x) = x(x − 4). Calcule g(0) et g(4), puis donne deux antécédents de 0 par g.",
          reponse: "g(0) = 0 et g(4) = 0 ; les nombres 0 et 4 sont deux antécédents de 0.",
          explication: "g(0) = 0 × (−4) = 0 et g(4) = 4 × 0 = 0. Un produit est nul quand l'un de ses facteurs est nul.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les fonctions",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "On sait que h(5) = 2. Alors 2 est...",
          choix: ["un antécédent de 5", "l'image de 5", "l'abscisse du point", "égal à 5"],
          bonneReponse: 1,
          explication: "h(5) = 2 : la fonction transforme 5 en 2, donc 2 est l'image de 5 (et 5 est un antécédent de 2).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Soit f(x) = 7 − x. Calcule f(3).",
          reponse: "f(3) = 4",
          explication: "f(3) = 7 − 3 = 4.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Soit g : x ↦ 3x². Calcule g(2).",
          reponse: "g(2) = 12",
          explication: "g(2) = 3 × 2² = 3 × 4 = 12. Attention : on calcule d'abord le carré, pas (3 × 2)² = 36.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Soit f(x) = 4x + 1. Le point A(2 ; 8) appartient-il à la courbe de f ? Justifie.",
          reponse: "Non, car f(2) = 9 et non 8.",
          explication: "f(2) = 4 × 2 + 1 = 9. L'ordonnée de A (8) n'est pas l'image de son abscisse (2), donc A n'est pas sur la courbe.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Soit f(x) = x² − 9. Détermine tous les antécédents de 0 par f.",
          reponse: "x = 3 et x = −3",
          explication: "On résout x² − 9 = 0, donc x² = 9, donc x = 3 ou x = −3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un club de sport facture un abonnement de 10 € puis 2 € par séance : le prix pour x séances est f(x) = 2x + 10. Calcule le prix pour 8 séances, puis le nombre de séances possible avec 30 €.",
          reponse: "f(8) = 26 € ; avec 30 €, on peut faire 10 séances.",
          explication: "f(8) = 2 × 8 + 10 = 26. Puis on résout 2x + 10 = 30, donc 2x = 20, donc x = 10.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une fonction est un programme de calcul qui associe à chaque nombre UN unique nombre : f(x) = ... et f : x ↦ ... signifient la même chose.",
    "Image : le résultat. Pour la trouver, on CALCULE f(a) en remplaçant x par a.",
    "Antécédent : le nombre de départ. Pour le trouver, on RÉSOUT l'équation f(x) = b.",
    "Une image est toujours unique ; un nombre peut avoir 0, 1 ou plusieurs antécédents (avec x², 9 a deux antécédents : 3 et −3).",
    "La courbe de f est l'ensemble des points (x ; f(x)) : un point (a ; b) est sur la courbe si et seulement si f(a) = b.",
    "Erreur à éviter absolument : confondre image et antécédent. f(2) = 5 signifie que 5 est l'image de 2, pas l'inverse !",
  ],
},
{
  slug: "homothetie",
  titre: "Homothéties et agrandissements",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Construire l'image d'une figure par une homothétie, comprendre l'effet du rapport k sur les longueurs, aires et volumes : agrandissements et réductions au programme du brevet.",
  objectifs: [
    "Construire l'image d'un point par une homothétie de centre et de rapport donnés",
    "Distinguer agrandissement (k > 1), réduction (0 < k < 1) et rapport négatif",
    "Utiliser les propriétés de conservation de l'homothétie (angles, parallélisme, alignement)",
    "Calculer l'effet d'un rapport k sur les longueurs, les aires et les volumes",
    "Résoudre des problèmes d'échelle et de plans à l'échelle",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une homothétie ?",
      illustration: "🔍",
      visuel: "O, M, M' alignés avec OM' = k × OM",
      contenu: [
        "Une homothétie transforme une figure en l'agrandissant ou la réduisant",
        "Elle est définie par un CENTRE O et un RAPPORT k (un nombre non nul)",
        "L'image M' d'un point M vérifie : O, M, M' alignés et OM' = k × OM",
        "Si k > 0, M' est du même côté que M par rapport à O",
      ],
      voixOff:
        "Une homothétie est une transformation géométrique qui agrandit ou réduit une figure, sans changer sa forme. Elle est définie par un centre, noté O, et un rapport, noté k, qui est un nombre non nul. L'image M prime d'un point M est telle que les trois points O, M, M prime sont alignés, et que la distance O M prime est égale à k fois la distance O M. Si k est positif, M prime se trouve du même côté que M par rapport au centre O.",
    },
    {
      titre: "Construire l'image d'un point",
      illustration: "✏️",
      visuel: "O, M, M' : tracer (OM), placer M' tel que OM' = k × OM",
      contenu: [
        "1. Tracer la droite (OM)",
        "2. Mesurer OM",
        "3. Calculer OM' = k × OM",
        "4. Placer M' sur la droite (OM), du bon côté selon le signe de k",
      ],
      voixOff:
        "Pour construire l'image d'un point M par une homothétie de centre O et de rapport k, on suit quatre étapes. On trace d'abord la droite passant par O et M. On mesure ensuite la longueur OM. On calcule alors OM prime en multipliant OM par k. Enfin, on place le point M prime sur la droite, du côté indiqué par le signe de k : même côté que M si k est positif, côté opposé si k est négatif.",
    },
    {
      titre: "Agrandissement, réduction, rapport négatif",
      illustration: "📏",
      visuel: "k > 1 : agrandit ; 0 < k < 1 : réduit ; k < 0 : symétrique et change d'échelle",
      contenu: [
        "Si k > 1, l'image est un AGRANDISSEMENT (plus grande que la figure de départ)",
        "Si 0 < k < 1, l'image est une RÉDUCTION (plus petite)",
        "Si k = 1, l'image est identique à la figure de départ",
        "Si k < 0, l'image est retournée par rapport à O (comme une symétrie centrale combinée à un agrandissement)",
      ],
      voixOff:
        "Le signe et la valeur du rapport k déterminent l'effet de l'homothétie. Si k est supérieur à un, l'image est plus grande que la figure de départ : c'est un agrandissement. Si k est compris entre zéro et un, l'image est plus petite : c'est une réduction. Si k vaut exactement un, l'image est superposable à la figure de départ. Enfin, si k est négatif, l'image se retrouve de l'autre côté du centre, comme si elle avait subi une symétrie en plus du changement de taille.",
    },
    {
      titre: "Propriétés conservées par l'homothétie",
      illustration: "✅",
      visuel: "angles ✔ · parallélisme ✔ · alignement ✔ · longueurs ✘",
      contenu: [
        "L'homothétie conserve les angles : l'image d'un triangle a les mêmes angles",
        "Elle conserve le parallélisme : deux droites parallèles restent parallèles",
        "Elle conserve l'alignement des points",
        "Elle NE conserve PAS les longueurs (sauf si k = 1 ou k = −1)",
      ],
      voixOff:
        "L'homothétie conserve plusieurs propriétés importantes. Elle conserve les angles : la figure image a exactement les mêmes angles que la figure de départ. Elle conserve le parallélisme entre les droites, ainsi que l'alignement des points. En revanche, elle ne conserve pas les longueurs, sauf dans les cas particuliers où le rapport vaut un ou moins un : c'est justement ce changement de longueur qui produit l'agrandissement ou la réduction.",
    },
    {
      titre: "Effet de k sur les longueurs",
      illustration: "📐",
      visuel: "longueur image = k × longueur de départ",
      contenu: [
        "Si une figure a une longueur L, son image a pour longueur k × L (en valeur absolue)",
        "Exemple : un segment de 4 cm, homothétie de rapport 3 → image de 12 cm",
        "Exemple : un segment de 9 cm, homothétie de rapport 1/3 → image de 3 cm",
        "Le rapport k s'applique à TOUTES les longueurs de la figure",
      ],
      voixOff:
        "Sur les longueurs, l'effet de l'homothétie est simple : chaque longueur de la figure image est égale à la valeur absolue de k, multipliée par la longueur correspondante de la figure de départ. Par exemple, un segment de quatre centimètres, transformé par une homothétie de rapport trois, donne une image de douze centimètres. Un segment de neuf centimètres, transformé par une homothétie de rapport un tiers, donne une image de trois centimètres.",
    },
    {
      titre: "Effet de k sur les aires",
      illustration: "🟦",
      visuel: "aire image = k² × aire de départ",
      contenu: [
        "Les aires sont multipliées par k², le CARRÉ du rapport",
        "Exemple : un rectangle de 20 cm², homothétie de rapport 2 → image de 20 × 2² = 80 cm²",
        "Exemple : un carré de 36 cm², homothétie de rapport 1/3 → image de 36 × (1/3)² = 4 cm²",
        "Ne pas confondre : le rapport des longueurs n'est pas le rapport des aires !",
      ],
      voixOff:
        "Pour les aires, l'effet est différent : l'aire de l'image est égale à l'aire de départ multipliée par k au carré. Par exemple, un rectangle de vingt centimètres carrés, transformé par une homothétie de rapport deux, donne une image de quatre-vingts centimètres carrés, car vingt fois deux au carré, c'est-à-dire vingt fois quatre. Attention à ne jamais confondre le rapport des longueurs avec le rapport des aires : ce dernier est toujours le carré du premier.",
    },
    {
      titre: "Effet de k sur les volumes",
      illustration: "📦",
      visuel: "volume image = k³ × volume de départ",
      contenu: [
        "Les volumes sont multipliés par k³, le CUBE du rapport",
        "Exemple : un cube de 8 cm³, homothétie de rapport 2 → image de 8 × 2³ = 64 cm³",
        "Exemple : une pyramide de 27 cm³, homothétie de rapport 1/3 → image de 27 × (1/3)³ = 1 cm³",
        "Récapitulatif : longueurs × k, aires × k², volumes × k³",
      ],
      voixOff:
        "Pour les volumes, l'effet est encore différent : le volume de l'image est égal au volume de départ multiplié par k au cube. Par exemple, un cube de huit centimètres cubes, transformé par une homothétie de rapport deux, donne une image de soixante-quatre centimètres cubes. Retiens bien ce récapitulatif : les longueurs sont multipliées par k, les aires par k au carré, et les volumes par k au cube.",
    },
    {
      titre: "Échelles et plans",
      illustration: "🗺️",
      visuel: "échelle 1/100 : 1 cm sur le plan = 100 cm en réalité",
      contenu: [
        "Un plan à l'échelle est une réduction, une application concrète de l'homothétie",
        "Échelle 1/100 : 1 cm sur le plan représente 100 cm (1 m) dans la réalité",
        "Pour passer du plan à la réalité : multiplier par le dénominateur de l'échelle",
        "Pour passer de la réalité au plan : diviser par le dénominateur de l'échelle",
      ],
      voixOff:
        "Les plans à l'échelle sont une application très concrète de l'homothétie, sous forme de réduction. Une échelle de un centième signifie qu'un centimètre sur le plan représente cent centimètres, soit un mètre, dans la réalité. Pour retrouver une dimension réelle à partir du plan, on multiplie par le dénominateur de l'échelle. Pour représenter une dimension réelle sur le plan, on divise au contraire par ce même dénominateur.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Homothétie : centre O, rapport k, OM' = k × OM (O, M, M' alignés)",
        "k > 1 agrandit ; 0 < k < 1 réduit ; k < 0 retourne la figure",
        "Conserve : angles, parallélisme, alignement. Ne conserve PAS les longueurs",
        "Longueurs × k ; aires × k² ; volumes × k³",
      ],
      voixOff:
        "Résumons. Une homothétie est définie par un centre O et un rapport k, avec la relation O M prime égale k fois O M. Un rapport supérieur à un agrandit la figure, un rapport entre zéro et un la réduit, et un rapport négatif la retourne par rapport au centre. L'homothétie conserve les angles, le parallélisme et l'alignement, mais pas les longueurs. Retiens bien le triplet essentiel : les longueurs sont multipliées par k, les aires par k au carré, et les volumes par k au cube. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "L'homothétie est une transformation qui agrandit ou réduit une figure à partir d'un centre et d'un rapport. Elle relie géométrie et calcul, notamment via l'effet du rapport sur les longueurs, les aires et les volumes.",
    sections: [
      {
        titre: "Définition",
        points: [
          "Homothétie de centre O et de rapport k (k ≠ 0)",
          "Image M' d'un point M : O, M, M' alignés et OM' = k × OM",
          "k > 1 : agrandissement ; 0 < k < 1 : réduction ; k < 0 : figure retournée",
        ],
      },
      {
        titre: "Propriétés conservées",
        points: [
          "Les angles sont conservés",
          "Le parallélisme entre droites est conservé",
          "L'alignement des points est conservé",
          "Les longueurs ne sont PAS conservées (sauf k = ±1)",
        ],
      },
      {
        titre: "Effet du rapport k",
        points: [
          "Longueurs : multipliées par |k|",
          "Aires : multipliées par k²",
          "Volumes : multipliés par k³",
        ],
      },
      {
        titre: "Échelles",
        points: [
          "Un plan à l'échelle est une réduction (application de l'homothétie)",
          "Échelle 1/n : 1 unité sur le plan = n unités dans la réalité",
          "Plan → réalité : multiplier par n ; réalité → plan : diviser par n",
        ],
      },
    ],
    audio:
      "Fiche de révision : homothéties et agrandissements. Une homothétie est définie par un centre O et un rapport k non nul. L'image M prime d'un point M vérifie que O, M, M prime sont alignés et que O M prime égale k fois O M. Si k est supérieur à un, la figure est agrandie ; si k est compris entre zéro et un, elle est réduite ; si k est négatif, la figure est retournée par rapport au centre. L'homothétie conserve les angles, le parallélisme et l'alignement des points, mais elle ne conserve pas les longueurs. C'est là tout son intérêt : les longueurs sont multipliées par la valeur absolue de k, les aires par k au carré, et les volumes par k au cube. Les plans à l'échelle sont une application concrète de la réduction homothétique.",
  },
  memoCards: [
    { recto: "Comment est définie une homothétie ?", verso: "Par un centre O et un rapport k non nul." },
    { recto: "Relation entre M, M' et le centre O ?", verso: "O, M, M' sont alignés et OM' = k × OM." },
    { recto: "Effet d'un rapport k > 1 ?", verso: "Agrandissement de la figure." },
    { recto: "Effet d'un rapport 0 < k < 1 ?", verso: "Réduction de la figure." },
    { recto: "Effet d'un rapport k < 0 ?", verso: "La figure est retournée par rapport au centre (et agrandie ou réduite selon |k|)." },
    { recto: "Que conserve une homothétie ?", verso: "Les angles, le parallélisme, l'alignement des points. PAS les longueurs." },
    { recto: "Effet du rapport k sur les longueurs, aires, volumes ?", verso: "Longueurs × k ; aires × k² ; volumes × k³." },
    { recto: "Que représente une échelle 1/50 sur un plan ?", verso: "1 unité sur le plan représente 50 unités dans la réalité." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une homothétie est définie par :",
      choix: ["Un centre et un angle", "Un centre et un rapport", "Deux points", "Un rayon"],
      bonneReponse: 1,
      explication: "Une homothétie est caractérisée par son centre O et son rapport k.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un rapport k = 2 correspond à :",
      choix: ["Une réduction", "Un agrandissement", "Une figure identique", "Une rotation"],
      bonneReponse: 1,
      explication: "Comme k = 2 > 1, l'image est plus grande que la figure de départ : c'est un agrandissement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un segment mesure 5 cm. Quelle est la longueur de son image par une homothétie de rapport 4 ?",
      reponse: "20 cm",
      explication: "Longueur image = k × longueur de départ = 4 × 5 = 20 cm.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une homothétie conserve :",
      choix: ["Les longueurs", "Les aires", "Les angles", "Les volumes"],
      bonneReponse: 2,
      explication: "L'homothétie conserve les angles (ainsi que le parallélisme et l'alignement), mais pas les longueurs, aires ou volumes.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un carré a une aire de 16 cm². Quelle est l'aire de son image par une homothétie de rapport 3 ?",
      reponse: "144 cm²",
      explication: "Aire image = k² × aire de départ = 3² × 16 = 9 × 16 = 144 cm².",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un cube a un volume de 27 cm³. Quel est le volume de son image par une homothétie de rapport 1/3 ?",
      reponse: "1 cm³",
      explication: "Volume image = k³ × volume de départ = (1/3)³ × 27 = (1/27) × 27 = 1 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un point M est à 6 cm du centre O. Où se trouve son image M' par une homothétie de centre O et de rapport −2 ?",
      choix: [
        "À 12 cm de O, du même côté que M",
        "À 12 cm de O, du côté opposé à M",
        "À 3 cm de O, du même côté que M",
        "À 3 cm de O, du côté opposé à M",
      ],
      bonneReponse: 1,
      explication: "OM' = |−2| × 6 = 12 cm. Comme k est négatif, M' est du côté opposé à M par rapport à O.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Sur un plan à l'échelle 1/200, une pièce mesure 3 cm de longueur. Quelle est la longueur réelle de cette pièce ?",
      reponse: "6 m (600 cm)",
      explication: "Longueur réelle = 3 × 200 = 600 cm = 6 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un triangle a une aire de 12 cm² et son image par une homothétie a une aire de 108 cm². Détermine le rapport k de cette homothétie (k > 0).",
      reponse: "k = 3",
      explication: "108 = k² × 12, donc k² = 108/12 = 9, donc k = √9 = 3 (car k > 0).",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une pyramide a un volume de 20 cm³. Son image par une homothétie de rapport 5 a pour volume :",
      choix: ["100 cm³", "500 cm³", "2 500 cm³", "160 cm³"],
      bonneReponse: 2,
      explication: "Volume image = 5³ × 20 = 125 × 20 = 2 500 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un jardin réel mesure 15 m sur 10 m. On souhaite le représenter sur un plan avec une échelle de 1/500. Calcule les dimensions du jardin sur le plan (en cm).",
      reponse: "3 cm sur 2 cm",
      explication:
        "15 m = 1500 cm ; 1500 ÷ 500 = 3 cm. 10 m = 1000 cm ; 1000 ÷ 500 = 2 cm. Le jardin mesure donc 3 cm sur 2 cm sur le plan.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un modèle réduit d'avion est construit à l'échelle 1/48. Le volume réel de l'avion est de 331 776 dm³. Quel est le volume du modèle réduit, en dm³ ?",
      reponse: "3 dm³",
      explication: "Le rapport des longueurs est 1/48, donc le rapport des volumes est (1/48)³ = 1/110 592. Volume du modèle = 331 776 ÷ 110 592 = 3 dm³.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un rapport k = 0,5 correspond à :",
      choix: ["Un agrandissement", "Une réduction", "Une figure identique", "Impossible à déterminer"],
      bonneReponse: 1,
      explication: "Comme 0 < 0,5 < 1, l'image est plus petite que la figure de départ : c'est une réduction.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un segment mesure 8 cm. Quelle est la longueur de son image par une homothétie de rapport 0,5 ?",
      reponse: "4 cm",
      explication: "Longueur image = 0,5 × 8 = 4 cm.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un rectangle a une aire de 10 cm². Quelle est l'aire de son image par une homothétie de rapport 4 ?",
      reponse: "160 cm²",
      explication: "Aire image = 4² × 10 = 16 × 10 = 160 cm².",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une homothétie conserve :",
      choix: ["Les longueurs", "Le parallélisme", "Les aires", "Les volumes"],
      bonneReponse: 1,
      explication: "L'homothétie conserve le parallélisme, les angles et l'alignement, mais pas les longueurs, aires et volumes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un cube a un volume de 8 cm³. Quel est le volume de son image par une homothétie de rapport 2 ?",
      reponse: "64 cm³",
      explication: "Volume image = 2³ × 8 = 8 × 8 = 64 cm³.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Homothéties et agrandissements",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le rapport d'une homothétie doit être :",
          choix: ["Un nombre positif uniquement", "Un nombre non nul", "Un nombre entier", "Toujours supérieur à 1"],
          bonneReponse: 1,
          explication: "Le rapport k d'une homothétie peut être n'importe quel nombre non nul, positif ou négatif.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un segment mesure 7 cm. Quelle est la longueur de son image par une homothétie de rapport 6 ?",
          reponse: "42 cm",
          explication: "Longueur image = 6 × 7 = 42 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle a une aire de 9 cm². Quelle est l'aire de son image par une homothétie de rapport 5 ?",
          reponse: "225 cm²",
          explication: "Aire image = 5² × 9 = 25 × 9 = 225 cm².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un point M est à 4 cm du centre O d'une homothétie de rapport −3. À quelle distance de O se trouve M' ?",
          reponse: "12 cm",
          explication: "OM' = |−3| × 4 = 12 cm (M' est du côté opposé à M par rapport à O).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un cône a un volume de 15 cm³. Son image par une homothétie de rapport 2 a pour volume :",
          choix: ["30 cm³", "60 cm³", "120 cm³", "225 cm³"],
          bonneReponse: 2,
          explication: "Volume image = 2³ × 15 = 8 × 15 = 120 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une maquette de bâtiment est réalisée à l'échelle 1/75. Sur la maquette, la façade mesure 40 cm de large et 24 cm de haut. Calcule les dimensions réelles de la façade en mètres.",
          reponse: "Largeur réelle = 30 m ; hauteur réelle = 18 m",
          explication:
            "Largeur réelle = 40 × 75 = 3000 cm = 30 m. Hauteur réelle = 24 × 75 = 1800 cm = 18 m.",
        },
      ],
    },
    {
      titre: "Examen 2 — Homothéties et agrandissements",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Si k = 1, l'image d'une figure par une homothétie est :",
          choix: ["Plus grande", "Plus petite", "Identique à la figure de départ", "Retournée"],
          bonneReponse: 2,
          explication: "Quand k = 1, chaque point est sa propre image : la figure image est superposable à la figure de départ.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un segment mesure 12 cm. Quelle est la longueur de son image par une homothétie de rapport 1/4 ?",
          reponse: "3 cm",
          explication: "Longueur image = (1/4) × 12 = 3 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un carré a une aire de 25 cm². Quelle est l'aire de son image par une homothétie de rapport 1/5 ?",
          reponse: "1 cm²",
          explication: "Aire image = (1/5)² × 25 = (1/25) × 25 = 1 cm².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un pentagone a une aire de 40 cm² ; son image a une aire de 360 cm². Détermine le rapport k de l'homothétie (k > 0).",
          reponse: "k = 3",
          explication: "360 = k² × 40, donc k² = 9, donc k = 3.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une sphère a un volume de 10 cm³. Son image par une homothétie de rapport 1/2 a pour volume :",
          choix: ["5 cm³", "2,5 cm³", "1,25 cm³", "0,625 cm³"],
          bonneReponse: 2,
          explication: "Volume image = (1/2)³ × 10 = (1/8) × 10 = 1,25 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un terrain réel mesure 60 m sur 40 m. On souhaite le dessiner sur une feuille avec une échelle 1/1000. Calcule les dimensions du dessin en cm, puis calcule l'aire réelle du terrain en m².",
          reponse: "Dessin : 6 cm sur 4 cm ; aire réelle : 2400 m²",
          explication:
            "60 m = 6000 cm ; 6000 ÷ 1000 = 6 cm. 40 m = 4000 cm ; 4000 ÷ 1000 = 4 cm. Aire réelle = 60 × 40 = 2400 m².",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Homothétie de centre O et de rapport k (k ≠ 0) : image M' de M telle que O, M, M' alignés et OM' = k × OM.",
    "k > 1 : agrandissement ; 0 < k < 1 : réduction ; k = 1 : figure identique ; k < 0 : figure retournée.",
    "L'homothétie conserve les angles, le parallélisme et l'alignement, mais PAS les longueurs.",
    "Longueurs multipliées par |k| ; aires multipliées par k² ; volumes multipliés par k³.",
    "Un plan à l'échelle 1/n est une réduction homothétique : plan → réalité (× n), réalité → plan (÷ n).",
    "Erreur fréquente à éviter : appliquer le rapport k directement aux aires ou aux volumes sans l'élever au carré ou au cube.",
  ],
},
{
  slug: "statistiques-probabilites",
  titre: "Statistiques et probabilités",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Moyenne, médiane, étendue, quartiles pour résumer une série statistique, et calcul de probabilités d'événements : les deux grands thèmes de fin de collège, très présents au brevet.",
  objectifs: [
    "Calculer la moyenne, la médiane et l'étendue d'une série statistique",
    "Déterminer les quartiles d'une série et construire un diagramme en boîte",
    "Calculer la probabilité d'un événement dans une situation d'équiprobabilité",
    "Utiliser les probabilités avec un arbre ou un tableau à double entrée",
    "Calculer la probabilité de l'événement contraire",
  ],
  slides: [
    {
      titre: "La moyenne",
      illustration: "➗",
      visuel: "moyenne = somme des valeurs / nombre de valeurs",
      contenu: [
        "La moyenne résume une série de valeurs par un seul nombre",
        "Moyenne = (somme de toutes les valeurs) ÷ (nombre de valeurs)",
        "Exemple : notes 12, 15, 8, 17, 13 → moyenne = (12+15+8+17+13)/5 = 65/5 = 13",
        "Avec un effectif (tableau), on pondère : Σ(valeur × effectif) / effectif total",
      ],
      voixOff:
        "La moyenne est l'indicateur le plus utilisé pour résumer une série de valeurs. Elle se calcule en additionnant toutes les valeurs, puis en divisant par le nombre de valeurs. Par exemple, pour les notes douze, quinze, huit, dix-sept et treize, la somme est soixante-cinq, divisée par cinq valeurs, ce qui donne une moyenne de treize. Quand les données sont regroupées dans un tableau d'effectifs, on multiplie chaque valeur par son effectif avant de sommer, puis on divise par l'effectif total.",
    },
    {
      titre: "La médiane",
      illustration: "🎯",
      visuel: "valeurs triées : la médiane partage en 2 groupes égaux",
      contenu: [
        "On trie d'abord la série par ordre croissant",
        "Effectif impair : la médiane est la valeur du milieu",
        "Effectif pair : la médiane est la moyenne des deux valeurs du milieu",
        "Exemple (5 valeurs triées) : 8, 12, 13, 15, 17 → médiane = 13",
      ],
      voixOff:
        "La médiane est une autre façon de résumer une série : elle partage les valeurs, triées par ordre croissant, en deux groupes de même effectif. Si le nombre de valeurs est impair, la médiane est simplement la valeur du milieu. Si le nombre de valeurs est pair, la médiane est la moyenne des deux valeurs centrales. Par exemple, avec les valeurs triées huit, douze, treize, quinze, dix-sept, la médiane est treize, la valeur du milieu.",
    },
    {
      titre: "L'étendue",
      illustration: "📏",
      visuel: "étendue = valeur maximale − valeur minimale",
      contenu: [
        "L'étendue mesure la dispersion (l'écart) d'une série",
        "Étendue = valeur maximale − valeur minimale",
        "Exemple : 8, 12, 13, 15, 17 → étendue = 17 − 8 = 9",
        "Plus l'étendue est grande, plus les valeurs sont dispersées",
      ],
      voixOff:
        "L'étendue mesure la dispersion d'une série de valeurs, c'est-à-dire à quel point elles sont éloignées les unes des autres. Elle se calcule simplement en soustrayant la plus petite valeur de la plus grande. Pour la série huit, douze, treize, quinze, dix-sept, l'étendue vaut dix-sept moins huit, soit neuf. Plus l'étendue est grande, plus les valeurs de la série sont dispersées.",
    },
    {
      titre: "Les quartiles",
      illustration: "📊",
      visuel: "Q1 · médiane · Q3 : découpent la série en 4 parties égales",
      contenu: [
        "Q1 (premier quartile) : au moins 25% des valeurs lui sont inférieures ou égales",
        "Q3 (troisième quartile) : au moins 75% des valeurs lui sont inférieures ou égales",
        "Avec la série triée, Q1 est la médiane de la moitié inférieure, Q3 celle de la moitié supérieure",
        "L'écart interquartile Q3 − Q1 mesure la dispersion des valeurs centrales",
      ],
      voixOff:
        "Les quartiles découpent une série triée en quatre parties égales. Le premier quartile Q1 est la valeur en dessous de laquelle se trouvent au moins un quart des valeurs. Le troisième quartile Q3 est la valeur en dessous de laquelle se trouvent au moins trois quarts des valeurs. On calcule Q1 comme la médiane de la première moitié des valeurs, et Q3 comme la médiane de la seconde moitié. L'écart interquartile, Q3 moins Q1, permet de mesurer la dispersion de la partie centrale des données.",
    },
    {
      titre: "Le diagramme en boîte",
      illustration: "📦",
      visuel: "min ─[ Q1 | médiane | Q3 ]─ max",
      contenu: [
        "Aussi appelé « boîte à moustaches »",
        "La boîte va de Q1 à Q3, avec un trait à la médiane",
        "Les « moustaches » relient la boîte aux valeurs min et max",
        "Il permet de comparer visuellement plusieurs séries",
      ],
      voixOff:
        "Le diagramme en boîte, aussi appelé boîte à moustaches, représente visuellement une série statistique. La boîte s'étend du premier quartile au troisième quartile, avec un trait vertical marquant la médiane. Des segments, appelés moustaches, relient la boîte à la valeur minimale et à la valeur maximale. Ce diagramme est très pratique pour comparer rapidement plusieurs séries de données.",
    },
    {
      titre: "Vocabulaire des probabilités",
      illustration: "🎲",
      visuel: "issue, événement, univers",
      contenu: [
        "Une expérience aléatoire a plusieurs résultats possibles, appelés ISSUES",
        "L'ensemble de toutes les issues s'appelle l'UNIVERS",
        "Un ÉVÉNEMENT est un ensemble d'issues (ex : « obtenir un nombre pair »)",
        "Une situation d'ÉQUIPROBABILITÉ : toutes les issues ont la même chance de se produire",
      ],
      voixOff:
        "Passons aux probabilités. Une expérience aléatoire, comme lancer un dé, a plusieurs résultats possibles, appelés issues. L'ensemble de toutes les issues possibles s'appelle l'univers. Un événement est un ensemble d'issues qui nous intéresse, par exemple obtenir un nombre pair. On parle d'équiprobabilité quand toutes les issues ont exactement la même chance de se produire, comme avec un dé non truqué.",
    },
    {
      titre: "Calculer une probabilité",
      illustration: "🧮",
      visuel: "P(événement) = nombre d'issues favorables / nombre d'issues possibles",
      contenu: [
        "En situation d'équiprobabilité : P(événement) = issues favorables / issues totales",
        "Exemple : dé à 6 faces, P(« obtenir un multiple de 3 ») = 2/6 = 1/3 (issues : 3 et 6)",
        "Une probabilité est toujours comprise entre 0 et 1 (ou entre 0% et 100%)",
        "P = 0 : événement impossible ; P = 1 : événement certain",
      ],
      voixOff:
        "En situation d'équiprobabilité, la probabilité d'un événement se calcule en divisant le nombre d'issues favorables par le nombre total d'issues possibles. Par exemple, avec un dé à six faces, la probabilité d'obtenir un multiple de trois est deux sur six, car les issues favorables sont trois et six, soit un tiers. Une probabilité est toujours un nombre compris entre zéro et un : zéro pour un événement impossible, un pour un événement certain.",
    },
    {
      titre: "L'événement contraire",
      illustration: "🔄",
      visuel: "P(événement) + P(événement contraire) = 1",
      contenu: [
        "L'événement contraire de A, noté « non A », regroupe toutes les issues qui ne réalisent pas A",
        "P(A) + P(non A) = 1, donc P(non A) = 1 − P(A)",
        "Exemple : P(« obtenir un 6 ») = 1/6, donc P(« ne pas obtenir un 6 ») = 1 − 1/6 = 5/6",
        "Utile quand l'événement contraire est plus facile à compter",
      ],
      voixOff:
        "L'événement contraire d'un événement A regroupe toutes les issues qui ne réalisent pas A. La somme des probabilités d'un événement et de son contraire vaut toujours un, donc la probabilité du contraire est un moins la probabilité de A. Par exemple, la probabilité d'obtenir un six avec un dé est un sixième, donc la probabilité de ne pas obtenir de six est un moins un sixième, soit cinq sixièmes. Cette astuce est très utile quand l'événement contraire est plus simple à dénombrer.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Moyenne = somme / effectif ; médiane = valeur centrale (série triée)",
        "Étendue = max − min ; quartiles Q1, Q3 découpent en 4 parties égales",
        "Probabilité (équiprobabilité) = issues favorables / issues possibles",
        "P(A) + P(non A) = 1 ; probabilité toujours entre 0 et 1",
      ],
      voixOff:
        "Résumons ce chapitre qui mêle statistiques et probabilités. La moyenne se calcule en divisant la somme des valeurs par leur nombre ; la médiane est la valeur centrale d'une série triée. L'étendue mesure l'écart entre le maximum et le minimum, et les quartiles découpent la série en quatre parties égales. Pour les probabilités, en situation d'équiprobabilité, on divise le nombre d'issues favorables par le nombre d'issues possibles. Et n'oublie jamais que la probabilité d'un événement et celle de son contraire s'additionnent toujours pour donner un. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre regroupe deux grandes notions de fin de collège : les statistiques (résumer une série de données avec moyenne, médiane, quartiles) et les probabilités (mesurer la chance qu'un événement se réalise).",
    sections: [
      {
        titre: "Indicateurs statistiques",
        points: [
          "Moyenne = somme des valeurs / effectif total",
          "Médiane = valeur centrale d'une série triée (moyenne des deux valeurs centrales si effectif pair)",
          "Étendue = valeur maximale − valeur minimale",
        ],
      },
      {
        titre: "Quartiles et diagramme en boîte",
        points: [
          "Q1 : au moins 25% des valeurs lui sont inférieures ou égales",
          "Q3 : au moins 75% des valeurs lui sont inférieures ou égales",
          "Diagramme en boîte : boîte de Q1 à Q3, moustaches jusqu'au min et au max",
        ],
      },
      {
        titre: "Vocabulaire des probabilités",
        points: [
          "Issue : un résultat possible ; univers : ensemble de toutes les issues",
          "Événement : ensemble d'issues qui nous intéresse",
          "Équiprobabilité : toutes les issues ont la même chance de se produire",
        ],
      },
      {
        titre: "Calculer une probabilité",
        points: [
          "P(événement) = issues favorables / issues possibles (en équiprobabilité)",
          "0 ≤ P(événement) ≤ 1",
          "P(A) + P(non A) = 1",
        ],
      },
    ],
    audio:
      "Fiche de révision : statistiques et probabilités. La moyenne d'une série se calcule en divisant la somme des valeurs par leur effectif. La médiane est la valeur centrale d'une série triée par ordre croissant. L'étendue mesure la dispersion : c'est la différence entre la valeur maximale et la valeur minimale. Les quartiles découpent la série triée en quatre parties égales, et se représentent avec un diagramme en boîte. Pour les probabilités, une expérience aléatoire a plusieurs issues possibles, formant l'univers ; un événement est un ensemble d'issues. En situation d'équiprobabilité, la probabilité d'un événement se calcule en divisant le nombre d'issues favorables par le nombre total d'issues. Une probabilité est toujours comprise entre zéro et un, et la probabilité d'un événement s'ajoute à celle de son contraire pour donner un.",
  },
  memoCards: [
    { recto: "Comment calculer la moyenne d'une série ?", verso: "Moyenne = somme de toutes les valeurs ÷ nombre de valeurs." },
    { recto: "Comment trouver la médiane ?", verso: "On trie la série, puis on prend la valeur du milieu (ou la moyenne des deux valeurs centrales si effectif pair)." },
    { recto: "Comment calculer l'étendue ?", verso: "Étendue = valeur maximale − valeur minimale." },
    { recto: "Que représente le premier quartile Q1 ?", verso: "La valeur en dessous de laquelle se trouvent au moins 25% des données." },
    { recto: "Comment se construit un diagramme en boîte ?", verso: "Boîte de Q1 à Q3 avec un trait à la médiane, moustaches jusqu'au min et au max." },
    { recto: "Formule de probabilité en équiprobabilité ?", verso: "P(événement) = nombre d'issues favorables / nombre d'issues possibles." },
    { recto: "Relation entre un événement et son contraire ?", verso: "P(A) + P(non A) = 1, donc P(non A) = 1 − P(A)." },
    { recto: "Entre quelles valeurs est comprise une probabilité ?", verso: "Toujours entre 0 (impossible) et 1 (certain)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule la moyenne des notes 10, 14, 16, 12.",
      choix: ["12", "13", "14", "15"],
      bonneReponse: 1,
      explication: "Moyenne = (10+14+16+12)/4 = 52/4 = 13.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un 4 ?",
      choix: ["1/2", "1/4", "1/6", "4/6"],
      bonneReponse: 2,
      explication: "Il y a une seule issue favorable (le 4) sur six issues possibles, donc P = 1/6.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule l'étendue de la série : 5, 9, 3, 12, 7.",
      reponse: "Étendue = 9",
      explication: "Étendue = valeur maximale − valeur minimale = 12 − 3 = 9.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une probabilité peut-elle valoir 1,5 ?",
      choix: ["Oui, toujours", "Non, jamais (max 1)", "Oui si l'événement est certain", "Cela dépend du contexte"],
      bonneReponse: 1,
      explication: "Une probabilité est toujours comprise entre 0 et 1, elle ne peut jamais dépasser 1.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Détermine la médiane de la série triée : 4, 6, 9, 11, 15, 18 (6 valeurs).",
      reponse: "Médiane = 10",
      explication: "Effectif pair (6 valeurs) : la médiane est la moyenne des 2 valeurs centrales, 9 et 11 : (9+11)/2 = 10.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Dans un sac, il y a 3 boules rouges, 5 boules bleues et 2 boules vertes (10 boules en tout, indiscernables au toucher). On tire une boule au hasard. Quelle est la probabilité de tirer une boule bleue ?",
      reponse: "P = 5/10 = 1/2",
      explication: "Il y a 5 issues favorables (boules bleues) sur 10 issues possibles, donc P = 5/10 = 1/2.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Avec les données précédentes (3 rouges, 5 bleues, 2 vertes), quelle est la probabilité de NE PAS tirer une boule rouge ?",
      choix: ["3/10", "7/10", "1/10", "5/10"],
      bonneReponse: 1,
      explication: "P(rouge) = 3/10, donc P(non rouge) = 1 − 3/10 = 7/10.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Une série de 20 valeurs triées a pour médiane 14. La première moitié (10 valeurs) a pour médiane 9, et la seconde moitié a pour médiane 19. Donne Q1 et Q3.",
      reponse: "Q1 = 9 et Q3 = 19",
      explication: "Q1 est la médiane de la première moitié des valeurs, Q3 est la médiane de la seconde moitié.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Les notes d'une classe de 8 élèves à un contrôle sont : 8, 11, 12, 12, 14, 15, 16, 18. Calcule la moyenne, la médiane et l'étendue de cette série.",
      reponse: "Moyenne = 13,25 ; médiane = 13 ; étendue = 10",
      explication:
        "Moyenne = (8+11+12+12+14+15+16+18)/8 = 106/8 = 13,25. Effectif pair : médiane = (12+14)/2 = 13. Étendue = 18 − 8 = 10.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "On lance deux fois de suite une pièce équilibrée. Quelle est la probabilité d'obtenir exactement une fois « pile » ?",
      choix: ["1/4", "1/2", "3/4", "1/3"],
      bonneReponse: 1,
      explication:
        "Les 4 issues équiprobables sont PP, PF, FP, FF. Exactement une fois pile : PF et FP, soit 2 issues favorables sur 4, donc P = 2/4 = 1/2.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un tableau à double entrée croise le sexe (garçon/fille) et la pratique d'un sport (oui/non) chez 40 élèves : 12 garçons pratiquent un sport, 8 garçons n'en pratiquent pas, 15 filles pratiquent un sport, 5 filles n'en pratiquent pas. On choisit un élève au hasard. Quelle est la probabilité que ce soit une fille qui pratique un sport ?",
      reponse: "P = 15/40 = 3/8",
      explication: "Il y a 15 filles sportives sur un total de 40 élèves (12+8+15+5=40), donc P = 15/40 = 3/8.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La moyenne de 5 notes est 12. On ajoute une sixième note et la nouvelle moyenne devient 13. Quelle est la valeur de cette sixième note ?",
      reponse: "18",
      explication:
        "Somme des 5 premières notes = 5 × 12 = 60. Somme des 6 notes = 6 × 13 = 78. La sixième note = 78 − 60 = 18.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule la moyenne de 6, 10, 8.",
      choix: ["7", "8", "9", "24"],
      bonneReponse: 1,
      explication: "Moyenne = (6+10+8)/3 = 24/3 = 8.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule l'étendue de la série : 2, 15, 7, 20, 9.",
      reponse: "Étendue = 18",
      explication: "Étendue = 20 − 2 = 18.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Détermine la médiane de la série triée : 3, 5, 8, 9, 12 (5 valeurs).",
      reponse: "Médiane = 8",
      explication: "Effectif impair (5 valeurs) : la médiane est la valeur du milieu, ici 8.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un sac contient 4 boules jaunes et 6 boules noires. Quelle est la probabilité de tirer une boule jaune ?",
      choix: ["4/10", "6/10", "4/6", "1/4"],
      bonneReponse: 0,
      explication: "P(jaune) = 4 issues favorables / 10 issues possibles = 4/10.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "La probabilité qu'il pleuve demain est de 0,3. Quelle est la probabilité qu'il ne pleuve pas ?",
      reponse: "0,7",
      explication: "P(non pluie) = 1 − P(pluie) = 1 − 0,3 = 0,7.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Statistiques et probabilités",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Calcule la moyenne de la série 20, 15, 25, 10, 30.",
          choix: ["18", "20", "22", "25"],
          bonneReponse: 1,
          explication: "Moyenne = (20+15+25+10+30)/5 = 100/5 = 20.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
          reponse: "P = 3/6 = 1/2",
          explication: "Les nombres pairs sont 2, 4, 6 : 3 issues favorables sur 6 possibles, donc P = 3/6 = 1/2.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Détermine la médiane de la série triée : 2, 4, 6, 8, 10, 12 (6 valeurs).",
          reponse: "Médiane = 7",
          explication: "Effectif pair : médiane = (6+8)/2 = 7.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Un jeu contient 20 cartes numérotées de 1 à 20. On tire une carte au hasard. Quelle est la probabilité d'obtenir un multiple de 5 ?",
          reponse: "P = 4/20 = 1/5",
          explication: "Les multiples de 5 entre 1 et 20 sont 5, 10, 15, 20 : 4 issues favorables sur 20, donc P = 4/20 = 1/5.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une série a une étendue de 15 et un minimum de 4. Quel est le maximum de cette série ?",
          choix: ["11", "15", "19", "4"],
          bonneReponse: 2,
          explication: "Étendue = max − min, donc max = étendue + min = 15 + 4 = 19.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Les tailles (en cm) de 8 plants de tomates sont : 45, 52, 38, 60, 55, 48, 42, 50. Calcule la moyenne et la médiane de cette série (arrondir la moyenne au dixième si nécessaire).",
          reponse: "Moyenne = 48,75 cm ; médiane = 49 cm",
          explication:
            "Somme = 45+52+38+60+55+48+42+50 = 390. Moyenne = 390/8 = 48,75. Triée : 38, 42, 45, 48, 50, 52, 55, 60. Effectif pair : médiane = (48+50)/2 = 49.",
        },
      ],
    },
    {
      titre: "Examen 2 — Statistiques et probabilités",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Calcule la moyenne de la série 7, 9, 11, 13.",
          choix: ["9", "10", "11", "40"],
          bonneReponse: 1,
          explication: "Moyenne = (7+9+11+13)/4 = 40/4 = 10.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un sac contient 10 jetons numérotés de 1 à 10. Quelle est la probabilité de tirer un nombre supérieur à 7 ?",
          reponse: "P = 3/10",
          explication: "Les nombres supérieurs à 7 sont 8, 9, 10 : 3 issues favorables sur 10, donc P = 3/10.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Détermine l'étendue de la série : 12, 5, 19, 8, 15, 3.",
          reponse: "Étendue = 16",
          explication: "Étendue = 19 − 3 = 16.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Une urne contient 6 boules blanches et 4 boules noires. On tire une boule au hasard. Quelle est la probabilité de ne PAS tirer une boule noire ?",
          reponse: "P = 6/10 = 3/5",
          explication: "P(noire) = 4/10, donc P(non noire) = 1 − 4/10 = 6/10 = 3/5 (ce qui correspond aussi directement aux boules blanches).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La moyenne de 4 notes est 11. La somme de ces 4 notes est :",
          choix: ["15", "44", "40", "11"],
          bonneReponse: 1,
          explication: "Somme = moyenne × effectif = 11 × 4 = 44.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un enseignant relève les notes de 10 élèves à un devoir : 6, 8, 9, 10, 11, 12, 12, 14, 16, 18. Détermine la médiane, puis Q1 et Q3 (Q1 = médiane des 5 premières valeurs, Q3 = médiane des 5 dernières).",
          reponse: "Médiane = 11,5 ; Q1 = 9 ; Q3 = 14",
          explication:
            "Effectif pair (10 valeurs) : médiane = (11+12)/2 = 11,5. Q1 = médiane de {6,8,9,10,11} = 9. Q3 = médiane de {12,12,14,16,18} = 14.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Moyenne = somme des valeurs / effectif total.",
    "Médiane = valeur centrale d'une série TRIÉE (moyenne des 2 valeurs centrales si effectif pair).",
    "Étendue = valeur maximale − valeur minimale (mesure la dispersion).",
    "Q1 et Q3 découpent la série triée en 4 parties égales ; diagramme en boîte pour les représenter.",
    "En équiprobabilité : P(événement) = nombre d'issues favorables / nombre d'issues possibles.",
    "P(A) + P(non A) = 1 ; une probabilité est toujours comprise entre 0 et 1.",
  ],
},
{
  slug: "theoreme-thales",
  titre: "Le théorème de Thalès",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Calculer une longueur dans une configuration de triangles avec le théorème de Thalès, et démontrer que deux droites sont parallèles avec sa réciproque : un grand classique de géométrie du brevet.",
  objectifs: [
    "Reconnaître une configuration de Thalès (triangles emboîtés ou papillon)",
    "Écrire correctement les rapports de longueurs égaux",
    "Calculer une longueur manquante grâce au théorème de Thalès",
    "Utiliser la réciproque de Thalès pour démontrer un parallélisme",
    "Utiliser la contraposée pour démontrer que deux droites ne sont pas parallèles",
  ],
  slides: [
    {
      titre: "La configuration de Thalès",
      illustration: "🔺",
      visuel: "triangle AMN avec (MN) // (BC)",
      contenu: [
        "Deux triangles emboîtés, ou en « papillon », avec deux côtés parallèles",
        "Configuration : A, M, B alignés et A, N, C alignés, avec (MN) parallèle à (BC)",
        "C'est la figure de base pour utiliser le théorème de Thalès",
        "Il existe aussi la configuration « papillon », où les droites se croisent en A",
      ],
      voixOff:
        "Le théorème de Thalès s'applique dans une configuration bien particulière : deux triangles emboîtés qui partagent un sommet commun, avec deux côtés parallèles entre eux. Les points A, M, B doivent être alignés, ainsi que A, N, C, et la droite (MN) doit être parallèle à la droite (BC). Il existe une variante appelée configuration papillon, où les deux droites se croisent en leur sommet commun A.",
    },
    {
      titre: "L'énoncé du théorème",
      illustration: "📐",
      visuel: "AM/AB = AN/AC = MN/BC",
      contenu: [
        "Si A, M, B sont alignés, A, N, C sont alignés, et (MN) // (BC), alors :",
        "AM/AB = AN/AC = MN/BC",
        "Les trois rapports sont égaux",
        "On retrouve les longueurs à partir des sommets communs A",
      ],
      voixOff:
        "Voici l'énoncé du théorème de Thalès. Si les points A, M, B sont alignés, si les points A, N, C sont alignés, et si la droite MN est parallèle à la droite BC, alors les rapports AM sur AB, AN sur AC, et MN sur BC, sont tous égaux entre eux. Attention à toujours écrire les longueurs à partir du sommet commun A en premier.",
    },
    {
      titre: "Calculer une longueur : exemple",
      illustration: "🧮",
      visuel: "AM=3 ; AB=5 ; AN=4 → AC = ?",
      contenu: [
        "Triangle ABC avec M sur (AB) et N sur (AC), (MN) // (BC)",
        "AM = 3 cm ; AB = 5 cm ; AN = 4 cm ; on cherche AC",
        "AM/AB = AN/AC → 3/5 = 4/AC",
        "AC = 4 × 5 / 3 = 20/3 ≈ 6,67 cm",
      ],
      voixOff:
        "Prenons un exemple concret. Dans un triangle A B C, M est sur le côté AB, N est sur le côté AC, et MN est parallèle à BC. On connaît AM égale trois centimètres, AB égale cinq centimètres, AN égale quatre centimètres, et on cherche AC. On pose l'égalité AM sur AB égale AN sur AC, soit trois cinquièmes égale quatre sur AC. On résout par produit en croix : AC égale quatre fois cinq, divisé par trois, soit vingt tiers, environ six virgule six sept centimètres.",
    },
    {
      titre: "Calculer la troisième longueur",
      illustration: "📏",
      visuel: "BC = MN × AB/AM",
      contenu: [
        "Avec les mêmes données, si BC = 8 cm, on peut calculer MN",
        "AM/AB = MN/BC → 3/5 = MN/8",
        "MN = 3 × 8 / 5 = 24/5 = 4,8 cm",
        "On utilise toujours le rapport commun connu pour trouver l'inconnu",
      ],
      voixOff:
        "On peut aussi calculer le troisième côté. Toujours avec AM égale trois, AB égale cinq, si BC égale huit centimètres, on cherche MN. On pose trois cinquièmes égale MN sur huit, donc MN égale trois fois huit, divisé par cinq, soit vingt-quatre cinquièmes, c'est-à-dire quatre virgule huit centimètres.",
    },
    {
      titre: "La configuration papillon",
      illustration: "🦋",
      visuel: "droites (BC) et (DE) sécantes en A, avec (BD) // (CE)",
      contenu: [
        "Les droites (BD) et (CE) se coupent en A",
        "Si (BD) // (CE), alors AB/AC = AD/AE = BD/CE",
        "Attention : les points B, A, C sont alignés ET D, A, E sont alignés",
        "Mais A est cette fois ENTRE les deux points sur chaque droite",
      ],
      voixOff:
        "Dans la configuration papillon, les droites BC et DE se coupent en un point A, avec cette fois A situé entre les deux extrémités sur chaque droite. Si BD est parallèle à CE, alors les rapports AB sur AC, AD sur AE, et BD sur CE sont égaux, exactement comme dans la configuration classique. Il faut juste faire attention à l'ordre des points, puisque A n'est plus une extrémité mais un point d'intersection au milieu.",
    },
    {
      titre: "La réciproque de Thalès",
      illustration: "🔄",
      visuel: "si AM/AB = AN/AC, alors (MN) // (BC)",
      contenu: [
        "La réciproque sert à démontrer que deux droites sont PARALLÈLES",
        "Si A, M, B alignés dans le même ordre que A, N, C, et si AM/AB = AN/AC",
        "Alors on peut conclure que (MN) est parallèle à (BC)",
        "Condition importante : les points doivent être dans le même ordre sur chaque droite",
      ],
      voixOff:
        "La réciproque du théorème de Thalès permet de démontrer que deux droites sont parallèles. Si les points A, M, B sont alignés dans le même ordre que les points A, N, C, et si le rapport AM sur AB est égal au rapport AN sur AC, alors on peut conclure que la droite MN est parallèle à la droite BC. Il est essentiel de vérifier que les points sont dans le même ordre sur les deux droites avant de conclure.",
    },
    {
      titre: "Utiliser la réciproque : exemple",
      illustration: "✅",
      visuel: "AM=2 ; AB=6 ; AN=3 ; AC=9 → (MN) // (BC) ?",
      contenu: [
        "AM = 2 ; AB = 6 → AM/AB = 2/6 = 1/3",
        "AN = 3 ; AC = 9 → AN/AC = 3/9 = 1/3",
        "Les deux rapports sont égaux, et les points sont bien alignés dans le même ordre",
        "Donc, d'après la réciproque de Thalès, (MN) est parallèle à (BC)",
      ],
      voixOff:
        "Voyons un exemple d'utilisation de la réciproque. On calcule le rapport AM sur AB : deux sixièmes, qui se simplifie en un tiers. On calcule ensuite AN sur AC : trois neuvièmes, qui se simplifie aussi en un tiers. Les deux rapports sont égaux, et les points sont alignés dans le bon ordre. On peut donc conclure, grâce à la réciproque de Thalès, que la droite MN est parallèle à la droite BC.",
    },
    {
      titre: "La contraposée : prouver que ce n'est PAS parallèle",
      illustration: "❌",
      visuel: "AM/AB ≠ AN/AC → (MN) n'est PAS parallèle à (BC)",
      contenu: [
        "Si les rapports AM/AB et AN/AC sont DIFFÉRENTS",
        "Alors (MN) n'est PAS parallèle à (BC)",
        "C'est la contraposée : elle permet de prouver un NON-parallélisme",
        "Méthode : calculer les deux rapports séparément et les comparer",
      ],
      voixOff:
        "Enfin, la contraposée du théorème de Thalès permet de prouver que deux droites ne sont pas parallèles. Si l'on calcule les deux rapports AM sur AB et AN sur AC, et qu'ils sont différents, alors on peut affirmer que la droite MN n'est pas parallèle à la droite BC. La méthode consiste simplement à calculer chaque rapport séparément, sous forme de fraction simplifiée, et à les comparer.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Théorème de Thalès : configuration + parallélisme connu → calcul de longueur",
        "AM/AB = AN/AC = MN/BC (toujours à partir du sommet commun)",
        "Réciproque : rapports égaux + même ordre des points → parallélisme démontré",
        "Contraposée : rapports différents → droites NON parallèles",
      ],
      voixOff:
        "Résumons ce théorème incontournable du brevet. Le théorème de Thalès s'utilise quand on connaît un parallélisme et qu'on cherche une longueur : les trois rapports de longueurs, calculés à partir du sommet commun, sont égaux. La réciproque s'utilise dans l'autre sens : quand deux rapports de longueurs sont égaux et les points bien alignés dans le même ordre, on peut affirmer que les droites sont parallèles. Et la contraposée permet de prouver l'inverse, que des droites ne sont pas parallèles, si les rapports sont différents.",
    },
  ],
  fiche: {
    intro:
      "Le théorème de Thalès relie longueurs et parallélisme dans une configuration de triangles emboîtés ou en papillon. Il se décline en trois usages : théorème (calculer), réciproque (prouver un parallélisme), contraposée (prouver un non-parallélisme).",
    sections: [
      {
        titre: "Configuration de Thalès",
        points: [
          "A, M, B alignés et A, N, C alignés (ou configuration papillon)",
          "(MN) parallèle à (BC)",
          "Toujours faire une figure claire avant de commencer",
        ],
      },
      {
        titre: "Théorème (calculer une longueur)",
        points: [
          "AM/AB = AN/AC = MN/BC",
          "On connaît le parallélisme, on cherche une longueur par produit en croix",
        ],
      },
      {
        titre: "Réciproque (prouver un parallélisme)",
        points: [
          "Points alignés dans le même ordre + rapports AM/AB et AN/AC égaux ⟹ (MN) // (BC)",
          "Toujours vérifier l'ordre des points avant de conclure",
        ],
      },
      {
        titre: "Contraposée (prouver un non-parallélisme)",
        points: [
          "Si AM/AB ≠ AN/AC, alors (MN) n'est pas parallèle à (BC)",
          "On compare deux fractions simplifiées",
        ],
      },
    ],
    audio:
      "Fiche de révision : le théorème de Thalès. Ce théorème s'applique dans une configuration de triangles emboîtés, ou en papillon, avec deux côtés parallèles. Le théorème permet de calculer une longueur quand on connaît le parallélisme : les rapports AM sur AB, AN sur AC, et MN sur BC sont égaux, en partant toujours du sommet commun. La réciproque de Thalès permet de démontrer qu'un parallélisme existe : si les points sont alignés dans le même ordre et que les rapports AM sur AB et AN sur AC sont égaux, alors les droites MN et BC sont parallèles. Enfin, la contraposée permet de démontrer que deux droites ne sont pas parallèles, lorsque les deux rapports calculés sont différents.",
  },
  memoCards: [
    { recto: "Configuration de Thalès ?", verso: "A, M, B alignés ; A, N, C alignés ; (MN) parallèle à (BC)." },
    { recto: "Formule du théorème de Thalès ?", verso: "AM/AB = AN/AC = MN/BC." },
    { recto: "Quand utiliser le théorème de Thalès ?", verso: "Quand le parallélisme est connu et qu'on cherche une longueur." },
    { recto: "Quand utiliser la réciproque de Thalès ?", verso: "Quand on veut prouver que deux droites sont parallèles (rapports égaux, points dans le même ordre)." },
    { recto: "Quand utiliser la contraposée de Thalès ?", verso: "Quand on veut prouver que deux droites ne sont PAS parallèles (rapports différents)." },
    { recto: "Erreur fréquente à éviter dans les rapports ?", verso: "Toujours écrire les longueurs à partir du sommet commun A en premier (AM/AB, pas AB/AM)." },
    { recto: "Qu'est-ce que la configuration papillon ?", verso: "Deux droites sécantes en A, avec A entre les extrémités sur chaque droite." },
    { recto: "Comment calculer une longueur inconnue avec Thalès ?", verso: "Poser l'égalité des rapports, puis résoudre par un produit en croix." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans une configuration de Thalès avec sommet commun A, quelle égalité est correcte ?",
      choix: ["AB/AM = AC/AN = BC/MN", "AM/AB = AN/AC = MN/BC", "AM/AN = AB/AC = MN/BC", "AM × AB = AN × AC"],
      bonneReponse: 1,
      explication: "Les rapports s'écrivent à partir du sommet commun A : AM/AB = AN/AC = MN/BC.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le théorème de Thalès nécessite dans sa configuration :",
      choix: ["Deux droites perpendiculaires", "Deux droites parallèles", "Un angle droit", "Un cercle"],
      bonneReponse: 1,
      explication: "La configuration de Thalès repose sur deux droites parallèles, (MN) et (BC).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans une configuration de Thalès, AM = 4 cm, AB = 6 cm, AN = 5 cm. Écris l'égalité des rapports (sans calculer AC).",
      reponse: "AM/AB = AN/AC, soit 4/6 = 5/AC",
      explication: "On applique directement le théorème de Thalès avec les longueurs connues.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La réciproque de Thalès permet de démontrer :",
      choix: ["Qu'un triangle est rectangle", "Qu'un parallélisme existe", "Qu'un angle est droit", "Qu'un cercle passe par 3 points"],
      bonneReponse: 1,
      explication: "La réciproque de Thalès sert à démontrer qu'une droite est parallèle à une autre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un triangle ABC, M sur (AB) et N sur (AC), (MN) // (BC). AM = 3 cm, AB = 4,5 cm, AC = 6 cm. Calcule AN.",
      reponse: "AN = 4 cm",
      explication: "AM/AB = AN/AC → 3/4,5 = AN/6, donc AN = 3 × 6 / 4,5 = 18/4,5 = 4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Avec les mêmes données que la question précédente (AM = 3 ; AB = 4,5 ; AC = 6 ; AN = 4) et BC = 9 cm, calcule MN.",
      reponse: "MN = 6 cm",
      explication: "AM/AB = MN/BC → 3/4,5 = MN/9, donc MN = 3 × 9 / 4,5 = 27/4,5 = 6.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question:
        "A, M, B alignés et A, N, C alignés dans le même ordre. AM = 2 ; AB = 5 ; AN = 3 ; AC = 7,5. Peut-on conclure que (MN) // (BC) ?",
      choix: [
        "Oui, car AM/AB = AN/AC = 0,4",
        "Non, car les rapports sont différents",
        "On ne peut pas savoir sans mesurer BC",
        "Oui, car AM et AN sont différents",
      ],
      bonneReponse: 0,
      explication: "AM/AB = 2/5 = 0,4 et AN/AC = 3/7,5 = 0,4. Les rapports sont égaux, donc (MN) // (BC) par la réciproque de Thalès.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Dans une configuration papillon, les droites (BC) et (DE) se coupent en A. AB = 3 ; AC = 4,5 ; AD = 2 ; AE = 3. Les droites (BD) et (CE) sont-elles parallèles ? Justifie.",
      reponse: "Oui, car AB/AC = AD/AE = 2/3.",
      explication: "AB/AC = 3/4,5 = 2/3 et AD/AE = 2/3. Les rapports sont égaux, donc d'après la réciproque de Thalès, (BD) // (CE).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un triangle ABC est tel que AB = 8 cm, AC = 10 cm, BC = 6 cm. M est sur (AB) avec AM = 6 cm, et N sur (AC) avec AN = 7,5 cm. Démontre que (MN) est parallèle à (BC), puis calcule MN.",
      reponse: "(MN) // (BC) car AM/AB = AN/AC = 0,75 ; MN = 4,5 cm.",
      explication:
        "AM/AB = 6/8 = 0,75 et AN/AC = 7,5/10 = 0,75. Les rapports sont égaux et les points alignés dans le même ordre, donc (MN) // (BC) par la réciproque de Thalès. On en déduit MN/BC = 0,75, donc MN = 0,75 × 6 = 4,5 cm.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "A, M, B alignés et A, N, C alignés dans le même ordre. AM = 3 ; AB = 8 ; AN = 5 ; AC = 12. Que peut-on conclure ?",
      choix: [
        "(MN) est parallèle à (BC)",
        "(MN) n'est pas parallèle à (BC), car 3/8 ≠ 5/12",
        "On ne peut rien conclure sans connaître MN",
        "(MN) est perpendiculaire à (BC)",
      ],
      bonneReponse: 1,
      explication: "AM/AB = 3/8 = 0,375 et AN/AC = 5/12 ≈ 0,417. Les rapports sont différents, donc par contraposée, (MN) n'est pas parallèle à (BC).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une échelle de 5 m est posée contre un mur, son pied étant à 3 m du mur (elle touche donc le mur à une hauteur de 4 m, car 3² + 4² = 5²). Un tabouret de 1,2 m de haut est placé sous l'échelle et touche exactement le bord de l'échelle. Calcule à quelle distance d du PIED de l'échelle se trouve le tabouret.",
      reponse: "d = 0,9 m",
      explication:
        "Le pied de l'échelle est le sommet commun aux deux triangles emboîtés (grand triangle : hauteur 4 m, base 3 m ; petit triangle : hauteur 1,2 m, base d). Par Thalès : d/3 = 1,2/4, donc d = 3 × 1,2 / 4 = 3,6/4 = 0,9 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans un triangle ABC rectangle en A, un point M est sur [AB] avec AM = 4 cm, AB = 10 cm. Un point N est sur [AC] avec AN = 6 cm, AC = 15 cm. Prouve que (MN) // (BC), sachant que BC = 20 cm, calcule aussi MN.",
      reponse: "(MN) // (BC) car AM/AB = AN/AC = 0,4 ; MN = 8 cm.",
      explication: "AM/AB = 4/10 = 0,4 et AN/AC = 6/15 = 0,4 : les rapports sont égaux, donc (MN) // (BC). Alors MN/BC = 0,4, donc MN = 0,4 × 20 = 8 cm.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le théorème de Thalès permet de calculer :",
      choix: ["Un angle", "Une longueur", "Une aire", "Un volume"],
      bonneReponse: 1,
      explication: "Le théorème de Thalès s'utilise pour calculer une longueur manquante dans une configuration de triangles.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans une configuration de Thalès, quel est le sommet commun aux deux triangles ?",
      reponse: "Le point A.",
      explication: "C'est à partir du sommet commun A que l'on écrit tous les rapports de longueurs.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "AM = 2 ; AB = 5 ; AN = 3. En configuration de Thalès avec (MN) // (BC), calcule AC.",
      reponse: "AC = 7,5",
      explication: "AM/AB = AN/AC → 2/5 = 3/AC, donc AC = 3 × 5 / 2 = 7,5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pour utiliser la réciproque de Thalès, il faut que :",
      choix: [
        "Les droites soient perpendiculaires",
        "Les rapports de longueurs soient égaux et les points alignés dans le même ordre",
        "Le triangle soit rectangle",
        "Les longueurs soient toutes égales",
      ],
      bonneReponse: 1,
      explication: "La réciproque de Thalès exige l'égalité des rapports et le même ordre des points alignés sur chaque droite.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "AM = 4 ; AB = 6 ; AN = 5 ; AC = 8. Les points sont alignés dans le même ordre. (MN) est-elle parallèle à (BC) ? Justifie.",
      reponse: "Non, car AM/AB = 4/6 ≈ 0,67 et AN/AC = 5/8 = 0,625, les rapports sont différents.",
      explication: "Par la contraposée de Thalès, des rapports différents montrent que (MN) n'est pas parallèle à (BC).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le théorème de Thalès",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans le théorème de Thalès, les rapports sont écrits à partir :",
          choix: ["Du milieu de BC", "Du sommet commun A", "D'un point quelconque", "De l'angle droit"],
          bonneReponse: 1,
          explication: "On écrit toujours les rapports à partir du sommet commun A : AM/AB = AN/AC = MN/BC.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans une configuration de Thalès, écris l'égalité des trois rapports de longueurs (lettres génériques A, M, N, B, C).",
          reponse: "AM/AB = AN/AC = MN/BC",
          explication: "C'est la formule générale du théorème de Thalès.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Triangle ABC, M sur (AB), N sur (AC), (MN) // (BC). AM = 5 ; AB = 8 ; AC = 12. Calcule AN.",
          reponse: "AN = 7,5",
          explication: "AM/AB = AN/AC → 5/8 = AN/12, donc AN = 5 × 12 / 8 = 60/8 = 7,5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Avec les mêmes données (AM = 5 ; AB = 8 ; AC = 12 ; AN = 7,5) et BC = 10, calcule MN.",
          reponse: "MN = 6,25",
          explication: "AM/AB = MN/BC → 5/8 = MN/10, donc MN = 5 × 10 / 8 = 50/8 = 6,25.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question:
            "A, M, B alignés et A, N, C alignés dans le même ordre. AM = 6 ; AB = 9 ; AN = 4 ; AC = 6. (MN) est-elle parallèle à (BC) ?",
          choix: ["Oui, car AM/AB = AN/AC = 2/3", "Non, car les rapports sont différents", "On ne peut pas savoir", "Oui, car AM = AN"],
          bonneReponse: 0,
          explication: "AM/AB = 6/9 = 2/3 et AN/AC = 4/6 = 2/3 : rapports égaux, donc (MN) // (BC) par la réciproque de Thalès.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un panneau de signalisation de 2 m de haut projette une ombre de 3 m au sol. Au même moment, un arbre projette une ombre de 12 m. En modélisant la situation avec le théorème de Thalès (triangles semblables formés par les rayons du soleil), calcule la hauteur de l'arbre.",
          reponse: "8 m",
          explication:
            "Les triangles formés par le soleil sont en configuration de Thalès : hauteur/ombre est constant. 2/3 = h/12, donc h = 2 × 12 / 3 = 8 m.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le théorème de Thalès",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pour appliquer le théorème de Thalès, quelle information doit être connue ?",
          choix: ["Un angle droit", "Un parallélisme entre deux droites", "Une aire", "Un cercle circonscrit"],
          bonneReponse: 1,
          explication: "Le théorème de Thalès nécessite de connaître un parallélisme entre deux droites de la configuration.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Que permet de démontrer la réciproque du théorème de Thalès ?",
          reponse: "Qu'une droite est parallèle à une autre.",
          explication: "La réciproque de Thalès permet de conclure à un parallélisme quand les rapports de longueurs sont égaux.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Triangle ABC, M sur (AB), N sur (AC), (MN) // (BC). AM = 4 ; AB = 10 ; BC = 15. Calcule MN.",
          reponse: "MN = 6",
          explication: "AM/AB = MN/BC → 4/10 = MN/15, donc MN = 4 × 15 / 10 = 60/10 = 6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans une configuration papillon, AB = 4 ; AC = 6 ; AD = 6 ; AE = 9. Les droites (BD) et (CE) sont-elles parallèles ? Justifie.",
          reponse: "Oui, car AB/AC = AD/AE = 2/3.",
          explication: "AB/AC = 4/6 = 2/3 et AD/AE = 6/9 = 2/3 : les rapports sont égaux, donc (BD) // (CE) par la réciproque de Thalès.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "AM = 3 ; AB = 7 ; AN = 4 ; AC = 9,5, points alignés dans le même ordre. Que peut-on conclure sur (MN) et (BC) ?",
          choix: [
            "(MN) est parallèle à (BC)",
            "(MN) n'est pas parallèle à (BC), car 3/7 ≠ 4/9,5",
            "Elles sont perpendiculaires",
            "On ne peut rien dire",
          ],
          bonneReponse: 1,
          explication: "AM/AB = 3/7 ≈ 0,43 et AN/AC = 4/9,5 ≈ 0,42. Les rapports sont différents (arrondis proches mais pas égaux exactement), donc (MN) n'est pas parallèle à (BC).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une pyramide de hauteur SH = 12 m est coupée par un plan parallèle à sa base, à une hauteur SM = 8 m à partir du sommet S. Si le côté de la base mesure 9 m, calcule le côté de la section obtenue par ce plan (utilise le théorème de Thalès).",
          reponse: "6 m",
          explication: "Par Thalès, le rapport des longueurs correspond au rapport des hauteurs : SM/SH = 8/12 = 2/3. Le côté de la section = 2/3 × 9 = 6 m.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Configuration de Thalès : sommet commun A, points alignés A-M-B et A-N-C, avec (MN) parallèle à (BC).",
    "Théorème (pour calculer) : AM/AB = AN/AC = MN/BC. Toujours écrire les rapports à partir de A.",
    "Réciproque (pour prouver un parallélisme) : rapports égaux + points dans le même ordre ⟹ droites parallèles.",
    "Contraposée (pour prouver un non-parallélisme) : rapports différents ⟹ droites NON parallèles.",
    "Méthode de calcul : poser l'égalité des rapports, puis résoudre par un produit en croix.",
    "Erreur fréquente à éviter : inverser les rapports (écrire AB/AM au lieu de AM/AB), ou oublier de vérifier l'ordre des points pour la réciproque.",
  ],
},
{
  slug: "trigonometrie",
  titre: "La trigonométrie",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Cosinus, sinus et tangente d'un angle aigu dans un triangle rectangle : calculer une longueur ou un angle, avec la calculatrice, pour réussir les exercices de géométrie du brevet.",
  objectifs: [
    "Identifier le côté opposé, adjacent et l'hypoténuse selon un angle donné",
    "Connaître et utiliser les formules du cosinus, sinus et tangente",
    "Calculer une longueur à l'aide de la trigonométrie",
    "Calculer un angle à l'aide des fonctions réciproques (cos⁻¹, sin⁻¹, tan⁻¹)",
    "Choisir la bonne formule trigonométrique selon les données du problème",
  ],
  slides: [
    {
      titre: "Le triangle rectangle et ses côtés",
      illustration: "📐",
      visuel: "hypoténuse, côté opposé, côté adjacent",
      contenu: [
        "Dans un triangle rectangle, l'hypoténuse est le côté le plus long, face à l'angle droit",
        "Pour un angle aigu donné, le côté OPPOSÉ ne touche pas cet angle",
        "Le côté ADJACENT touche cet angle (et n'est pas l'hypoténuse)",
        "Ces noms changent selon l'angle choisi !",
      ],
      voixOff:
        "Dans un triangle rectangle, l'hypoténuse est toujours le côté le plus long, situé en face de l'angle droit. Pour un angle aigu que l'on choisit, le côté opposé est celui qui ne touche pas cet angle, et le côté adjacent est celui qui le touche, sans être l'hypoténuse. Attention, ces noms dépendent de l'angle choisi : un même côté peut être adjacent pour un angle et opposé pour l'autre.",
    },
    {
      titre: "Le cosinus",
      illustration: "①",
      visuel: "cos(angle) = côté adjacent / hypoténuse",
      contenu: [
        "cos(Â) = côté adjacent à  Â / hypoténuse",
        "Le cosinus d'un angle aigu est toujours compris entre 0 et 1",
        "Exemple : côté adjacent = 6, hypoténuse = 10 → cos(Â) = 6/10 = 0,6",
      ],
      voixOff:
        "La première formule à connaître est le cosinus. Le cosinus d'un angle aigu est égal au côté adjacent à cet angle, divisé par l'hypoténuse. Le cosinus d'un angle aigu est toujours compris entre zéro et un. Par exemple, si le côté adjacent mesure six et l'hypoténuse dix, le cosinus vaut six dixièmes, soit zéro virgule six.",
    },
    {
      titre: "Le sinus",
      illustration: "②",
      visuel: "sin(angle) = côté opposé / hypoténuse",
      contenu: [
        "sin(Â) = côté opposé à  Â / hypoténuse",
        "Le sinus d'un angle aigu est aussi compris entre 0 et 1",
        "Exemple : côté opposé = 8, hypoténuse = 10 → sin(Â) = 8/10 = 0,8",
      ],
      voixOff:
        "La deuxième formule est le sinus. Le sinus d'un angle aigu est égal au côté opposé à cet angle, divisé par l'hypoténuse. Comme le cosinus, il est toujours compris entre zéro et un. Par exemple, si le côté opposé mesure huit et l'hypoténuse dix, le sinus vaut huit dixièmes, soit zéro virgule huit.",
    },
    {
      titre: "La tangente",
      illustration: "③",
      visuel: "tan(angle) = côté opposé / côté adjacent",
      contenu: [
        "tan(Â) = côté opposé à  Â / côté adjacent à  Â",
        "La tangente ne fait PAS intervenir l'hypoténuse",
        "Exemple : côté opposé = 8, côté adjacent = 6 → tan(Â) = 8/6 ≈ 1,33",
      ],
      voixOff:
        "La troisième formule est la tangente. La tangente d'un angle aigu est égale au côté opposé, divisé par le côté adjacent. C'est la seule des trois formules qui ne fait pas intervenir l'hypoténuse. Par exemple, avec un côté opposé de huit et un côté adjacent de six, la tangente vaut huit sixièmes, soit environ un virgule trente-trois.",
    },
    {
      titre: "Moyen mnémotechnique : CAH-SOH-TOA",
      illustration: "🔤",
      visuel: "CAH · SOH · TOA",
      contenu: [
        "CAH : Cosinus = Adjacent / Hypoténuse",
        "SOH : Sinus = Opposé / Hypoténuse",
        "TOA : Tangente = Opposé / Adjacent",
        "Retiens ces trois mots pour ne jamais te tromper de formule",
      ],
      voixOff:
        "Pour retenir facilement ces trois formules, on utilise le moyen mnémotechnique CAH-SOH-TOA. CAH : cosinus égale adjacent sur hypoténuse. SOH : sinus égale opposé sur hypoténuse. TOA : tangente égale opposé sur adjacent. En retenant ces trois syllabes, tu ne te trompes plus jamais de formule.",
    },
    {
      titre: "Calculer une longueur",
      illustration: "🧮",
      visuel: "Â = 30° ; hypoténuse = 8 → côté adjacent = 8 × cos(30°)",
      contenu: [
        "On identifie l'angle connu et les côtés concernés",
        "On choisit la bonne formule (CAH, SOH ou TOA) selon ce qu'on cherche",
        "Exemple : Â = 30°, hypoténuse = 8, on cherche le côté adjacent",
        "cos(30°) = adjacent/8 → adjacent = 8 × cos(30°) ≈ 8 × 0,866 ≈ 6,93",
      ],
      voixOff:
        "Pour calculer une longueur, on identifie d'abord l'angle connu, puis les côtés concernés dans la question. On choisit ensuite la bonne formule. Par exemple, avec un angle de trente degrés et une hypoténuse de huit, si on cherche le côté adjacent, on utilise le cosinus : cosinus de trente degrés égale adjacent sur huit. On isole l'adjacent en multipliant : huit fois cosinus de trente degrés, ce qui donne environ six virgule quatre-vingt-treize.",
    },
    {
      titre: "Calculer un angle",
      illustration: "🔎",
      visuel: "sin(Â) = 0,5 → Â = sin⁻¹(0,5) = 30°",
      contenu: [
        "Si on connaît deux côtés, on peut calculer l'angle avec la fonction réciproque",
        "cos⁻¹, sin⁻¹, tan⁻¹ sur la calculatrice (touches shift + cos/sin/tan)",
        "Exemple : sin(Â) = 0,5 → Â = sin⁻¹(0,5) = 30°",
        "On calcule d'abord le rapport, puis on applique la fonction réciproque",
      ],
      voixOff:
        "Pour calculer un angle, il faut connaître deux côtés du triangle rectangle. On calcule le rapport correspondant, cosinus, sinus ou tangente, puis on utilise la fonction réciproque sur la calculatrice, en appuyant sur la touche shift suivie de cos, sin ou tan. Par exemple, si le sinus d'un angle vaut zéro virgule cinq, l'angle est égal à l'arc sinus de zéro virgule cinq, c'est-à-dire trente degrés.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "CAH-SOH-TOA : cos = adj/hyp ; sin = opp/hyp ; tan = opp/adj",
        "Trigonométrie utilisable UNIQUEMENT dans un triangle RECTANGLE",
        "Pour une longueur : formule directe. Pour un angle : fonction réciproque (cos⁻¹, sin⁻¹, tan⁻¹)",
        "Toujours identifier d'abord l'angle, l'opposé, l'adjacent et l'hypoténuse",
      ],
      voixOff:
        "Résumons. Retiens CAH-SOH-TOA : cosinus égale adjacent sur hypoténuse, sinus égale opposé sur hypoténuse, tangente égale opposé sur adjacent. La trigonométrie ne s'utilise que dans un triangle rectangle. Pour trouver une longueur, on applique directement la formule. Pour trouver un angle, on calcule le rapport puis on utilise la fonction réciproque sur la calculatrice. La première étape, toujours, est d'identifier clairement l'angle, le côté opposé, le côté adjacent et l'hypoténuse. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "La trigonométrie dans le triangle rectangle permet de calculer une longueur ou un angle inaccessibles par la mesure directe. C'est un grand classique de géométrie au brevet, à combiner parfois avec Pythagore.",
    sections: [
      {
        titre: "Vocabulaire",
        points: [
          "Hypoténuse : côté le plus long, face à l'angle droit",
          "Côté opposé à un angle : ne touche pas cet angle",
          "Côté adjacent à un angle : touche cet angle, mais n'est pas l'hypoténuse",
        ],
      },
      {
        titre: "Les trois formules (CAH-SOH-TOA)",
        points: [
          "cos(Â) = adjacent / hypoténuse",
          "sin(Â) = opposé / hypoténuse",
          "tan(Â) = opposé / adjacent",
        ],
      },
      {
        titre: "Calculer une longueur",
        points: [
          "Identifier l'angle connu et les côtés concernés",
          "Choisir la formule adaptée, poser l'égalité, isoler la longueur cherchée",
        ],
      },
      {
        titre: "Calculer un angle",
        points: [
          "Calculer le rapport (cos, sin ou tan) à partir des longueurs connues",
          "Utiliser la fonction réciproque : cos⁻¹, sin⁻¹ ou tan⁻¹ à la calculatrice",
        ],
      },
    ],
    audio:
      "Fiche de révision : la trigonométrie. Dans un triangle rectangle, l'hypoténuse est le côté le plus long, face à l'angle droit. Pour un angle aigu choisi, le côté opposé ne touche pas cet angle, tandis que le côté adjacent le touche. Trois formules sont à connaître, résumées par CAH-SOH-TOA : le cosinus égale le côté adjacent divisé par l'hypoténuse, le sinus égale le côté opposé divisé par l'hypoténuse, la tangente égale le côté opposé divisé par le côté adjacent. Pour calculer une longueur, on identifie l'angle et les côtés concernés, on choisit la bonne formule, puis on isole l'inconnue. Pour calculer un angle, on calcule d'abord le rapport à partir des longueurs connues, puis on utilise la fonction réciproque de la calculatrice : arc cosinus, arc sinus ou arc tangente.",
  },
  memoCards: [
    { recto: "Formule du cosinus ?", verso: "cos(Â) = côté adjacent / hypoténuse." },
    { recto: "Formule du sinus ?", verso: "sin(Â) = côté opposé / hypoténuse." },
    { recto: "Formule de la tangente ?", verso: "tan(Â) = côté opposé / côté adjacent." },
    { recto: "Moyen mnémotechnique ?", verso: "CAH-SOH-TOA : Cosinus-Adjacent-Hypoténuse ; Sinus-Opposé-Hypoténuse ; Tangente-Opposé-Adjacent." },
    { recto: "Dans quel type de triangle utilise-t-on la trigonométrie ?", verso: "Uniquement dans un triangle RECTANGLE." },
    { recto: "Comment calculer un angle connaissant deux côtés ?", verso: "Calculer le rapport (cos, sin ou tan), puis utiliser la fonction réciproque (cos⁻¹, sin⁻¹, tan⁻¹)." },
    { recto: "Quel côté ne dépend jamais de l'angle choisi ?", verso: "L'hypoténuse, toujours le côté le plus long, face à l'angle droit." },
    { recto: "Entre quelles valeurs sont compris cos(Â) et sin(Â) pour un angle aigu ?", verso: "Toujours entre 0 et 1." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un triangle rectangle, l'hypoténuse est :",
      choix: ["Le côté le plus court", "Le côté face à l'angle droit", "Un des deux côtés de l'angle droit", "Toujours horizontal"],
      bonneReponse: 1,
      explication: "L'hypoténuse est le côté le plus long, situé en face de l'angle droit.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie CAH ?",
      choix: [
        "Cosinus = Adjacent / Hypoténuse",
        "Cosinus = Angle / Hauteur",
        "Côté Adjacent Horizontal",
        "Cosinus Aigu Hypoténuse",
      ],
      bonneReponse: 0,
      explication: "CAH est le moyen mnémotechnique pour cos(Â) = côté adjacent / hypoténuse.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans un triangle rectangle, le côté adjacent à un angle Â mesure 5 et l'hypoténuse mesure 13. Calcule cos(Â).",
      reponse: "cos(Â) = 5/13 ≈ 0,38",
      explication: "cos(Â) = adjacent/hypoténuse = 5/13.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La tangente d'un angle fait intervenir :",
      choix: ["Opposé et hypoténuse", "Adjacent et hypoténuse", "Opposé et adjacent", "Les trois côtés"],
      bonneReponse: 2,
      explication: "tan(Â) = opposé/adjacent, sans utiliser l'hypoténuse.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle rectangle a un angle de 40° et une hypoténuse de 12 cm. Calcule le côté opposé à cet angle (arrondi au dixième).",
      reponse: "≈ 7,7 cm",
      explication: "sin(40°) = opposé/12, donc opposé = 12 × sin(40°) ≈ 12 × 0,643 ≈ 7,7 cm.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle rectangle a un côté opposé de 6 cm et un côté adjacent de 8 cm pour un angle Â. Calcule Â (arrondi au degré).",
      reponse: "Â ≈ 37°",
      explication: "tan(Â) = 6/8 = 0,75, donc Â = tan⁻¹(0,75) ≈ 36,9°, arrondi à 37°.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un triangle rectangle a un angle de 60° et un côté adjacent de 5 cm. Quelle formule permet de calculer l'hypoténuse ?",
      choix: ["hyp = 5 × cos(60°)", "hyp = 5 / cos(60°)", "hyp = 5 × sin(60°)", "hyp = 5 / sin(60°)"],
      bonneReponse: 1,
      explication: "cos(60°) = 5/hyp, donc hyp = 5 / cos(60°).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'hypoténuse d'un triangle rectangle sachant qu'un angle vaut 60° et que le côté adjacent mesure 5 cm (arrondi au dixième).",
      reponse: "≈ 10 cm",
      explication: "hyp = 5 / cos(60°) = 5 / 0,5 = 10 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un mât de bateau est maintenu par un câble de 15 m tendu depuis le sommet jusqu'au pont, à 9 m du pied du mât. Calcule l'angle que fait le câble avec le pont (arrondi au degré).",
      reponse: "≈ 53°",
      explication:
        "Le côté adjacent à l'angle cherché (au niveau du pont) est 9 m et l'hypoténuse est 15 m : cos(Â) = 9/15 = 0,6, donc Â = cos⁻¹(0,6) ≈ 53,1°.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Un triangle rectangle a un angle de 25° et un côté opposé de 4 cm. Quelle est la formule correcte pour calculer le côté adjacent ?",
      choix: [
        "adjacent = 4 × tan(25°)",
        "adjacent = 4 / tan(25°)",
        "adjacent = 4 × cos(25°)",
        "adjacent = 4 / sin(25°)",
      ],
      bonneReponse: 1,
      explication: "tan(25°) = opposé/adjacent = 4/adjacent, donc adjacent = 4 / tan(25°).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une échelle de 4,5 m est posée contre un mur. Elle fait un angle de 70° avec le sol. Calcule la hauteur atteinte sur le mur (arrondi au dixième), puis la distance du pied de l'échelle au mur (arrondi au dixième).",
      reponse: "Hauteur ≈ 4,2 m ; distance au mur ≈ 1,5 m",
      explication:
        "Hauteur = hypoténuse × sin(70°) = 4,5 × 0,940 ≈ 4,2 m. Distance = hypoténuse × cos(70°) = 4,5 × 0,342 ≈ 1,5 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans un triangle ABC rectangle en A, AB = 6 cm et BC = 10 cm. Calcule l'angle ABC (arrondi au degré).",
      reponse: "Angle ABC ≈ 53°",
      explication:
        "Par rapport à l'angle en B, AB est le côté adjacent et BC est l'hypoténuse : cos(ABC) = 6/10 = 0,6, donc ABC = cos⁻¹(0,6) ≈ 53,1°.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie SOH ?",
      choix: ["Sinus = Opposé / Hypoténuse", "Sinus = Ouvert / Horizontal", "Sinus Obtus Hauteur", "Somme Opposé Hauteur"],
      bonneReponse: 0,
      explication: "SOH rappelle que sin(Â) = côté opposé / hypoténuse.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Le côté opposé mesure 4, l'hypoténuse mesure 10. Calcule sin(Â).",
      reponse: "sin(Â) = 0,4",
      explication: "sin(Â) = opposé/hypoténuse = 4/10 = 0,4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle rectangle a un angle de 35° et une hypoténuse de 9 cm. Calcule le côté adjacent (arrondi au dixième).",
      reponse: "≈ 7,4 cm",
      explication: "adjacent = 9 × cos(35°) ≈ 9 × 0,819 ≈ 7,4 cm.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pour calculer un angle connaissant le côté opposé et l'hypoténuse, on utilise :",
      choix: ["cos⁻¹", "sin⁻¹", "tan⁻¹", "Aucune de ces fonctions"],
      bonneReponse: 1,
      explication: "Le rapport opposé/hypoténuse correspond au sinus, donc on utilise sin⁻¹ pour retrouver l'angle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un triangle rectangle a un côté opposé de 7 cm et un côté adjacent de 7 cm. Calcule l'angle Â.",
      reponse: "Â = 45°",
      explication: "tan(Â) = 7/7 = 1, donc Â = tan⁻¹(1) = 45°.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La trigonométrie",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le côté adjacent à un angle Â est :",
          choix: ["Le côté face à Â", "Le côté qui touche Â, sans être l'hypoténuse", "Toujours l'hypoténuse", "Le côté le plus court"],
          bonneReponse: 1,
          explication: "Le côté adjacent touche l'angle considéré, contrairement au côté opposé.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Le côté opposé mesure 3, le côté adjacent mesure 4. Calcule tan(Â).",
          reponse: "tan(Â) = 0,75",
          explication: "tan(Â) = opposé/adjacent = 3/4 = 0,75.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a un angle de 50° et un côté opposé de 6 cm. Calcule l'hypoténuse (arrondi au dixième).",
          reponse: "≈ 7,8 cm",
          explication: "sin(50°) = 6/hyp, donc hyp = 6 / sin(50°) = 6 / 0,766 ≈ 7,8 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a un côté adjacent de 8 cm et une hypoténuse de 17 cm. Calcule l'angle Â (arrondi au degré).",
          reponse: "Â ≈ 62°",
          explication: "cos(Â) = 8/17 ≈ 0,4706, donc Â = cos⁻¹(0,4706) ≈ 61,9°, arrondi à 62°.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un angle de 30° et une hypoténuse de 20 cm. Quelle formule donne le côté opposé ?",
          choix: ["20 × cos(30°)", "20 × sin(30°)", "20 / sin(30°)", "20 / tan(30°)"],
          bonneReponse: 1,
          explication: "sin(30°) = opposé/20, donc opposé = 20 × sin(30°).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une rampe d'accès mesure 8 m de long et s'élève à 1,5 m de hauteur. Calcule l'angle que fait la rampe avec le sol (arrondi au degré).",
          reponse: "≈ 11°",
          explication:
            "Le côté opposé à l'angle recherché (la hauteur) est 1,5 m et l'hypoténuse (la rampe) est 8 m : sin(Â) = 1,5/8 = 0,1875, donc Â = sin⁻¹(0,1875) ≈ 10,8°, arrondi à 11°.",
        },
      ],
    },
    {
      titre: "Examen 2 — La trigonométrie",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie TOA ?",
          choix: ["Tangente = Opposé / Adjacent", "Triangle Obtus Aigu", "Tangente = Opposé / Aire", "Tout Ou rien Adjacent"],
          bonneReponse: 0,
          explication: "TOA rappelle que tan(Â) = côté opposé / côté adjacent.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "L'hypoténuse mesure 20, le côté adjacent mesure 12. Calcule cos(Â).",
          reponse: "cos(Â) = 0,6",
          explication: "cos(Â) = adjacent/hypoténuse = 12/20 = 0,6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a un angle de 55° et un côté adjacent de 4 cm. Calcule le côté opposé (arrondi au dixième).",
          reponse: "≈ 5,7 cm",
          explication: "tan(55°) = opposé/4, donc opposé = 4 × tan(55°) ≈ 4 × 1,428 ≈ 5,7 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a un côté opposé de 9 cm et une hypoténuse de 15 cm. Calcule l'angle Â (arrondi au degré).",
          reponse: "Â ≈ 37°",
          explication: "sin(Â) = 9/15 = 0,6, donc Â = sin⁻¹(0,6) ≈ 36,9°, arrondi à 37°.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un angle de 45° et un côté opposé de 10 cm. Quelle formule donne le côté adjacent ?",
          choix: ["10 × tan(45°)", "10 / tan(45°)", "10 × cos(45°)", "10 / cos(45°)"],
          bonneReponse: 1,
          explication: "tan(45°) = 10/adjacent, donc adjacent = 10 / tan(45°).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un phare de 25 m de haut est observé depuis un bateau. L'angle entre la ligne d'horizon (le sol) et la ligne de visée vers le sommet du phare est de 18°. Calcule la distance entre le bateau et le pied du phare (arrondi au mètre), en supposant le triangle rectangle en pied du phare.",
          reponse: "≈ 77 m",
          explication:
            "Le côté opposé à l'angle de 18° est la hauteur du phare (25 m), le côté adjacent est la distance cherchée d : tan(18°) = 25/d, donc d = 25 / tan(18°) ≈ 25 / 0,3249 ≈ 77 m.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "CAH-SOH-TOA : cos(Â) = adjacent/hypoténuse ; sin(Â) = opposé/hypoténuse ; tan(Â) = opposé/adjacent.",
    "La trigonométrie s'utilise UNIQUEMENT dans un triangle rectangle.",
    "Pour calculer une longueur : identifier l'angle et les côtés, choisir la formule, isoler l'inconnue.",
    "Pour calculer un angle : calculer le rapport, puis utiliser la fonction réciproque (cos⁻¹, sin⁻¹, tan⁻¹).",
    "L'opposé et l'adjacent dépendent de l'angle choisi ; l'hypoténuse, elle, ne change jamais.",
    "cos(Â) et sin(Â) sont toujours compris entre 0 et 1 pour un angle aigu ; la tangente, elle, peut dépasser 1.",
  ],
},
{
  slug: "volumes-sections",
  titre: "Volumes et sections de solides",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Calculer le volume d'une sphère, d'un cône, d'une pyramide, et déterminer la section d'un solide par un plan parallèle à la base : la géométrie dans l'espace attendue au brevet.",
  objectifs: [
    "Connaître et utiliser les formules de volume du cône, de la pyramide et de la sphère",
    "Convertir des unités de volume et de contenance (L, mL, cm³, dm³, m³)",
    "Déterminer la nature et les dimensions d'une section plane d'un solide",
    "Calculer les dimensions d'une réduction ou d'un agrandissement de solide (lien avec l'homothétie)",
    "Résoudre des problèmes concrets de volumes (remplissage, patron, comparaison)",
  ],
  slides: [
    {
      titre: "Rappel : les solides au programme",
      illustration: "📦",
      visuel: "cube · pavé · cylindre · cône · pyramide · sphère",
      contenu: [
        "Solides déjà connus : cube, pavé droit, cylindre (volumes vus en 4ème/5ème)",
        "Nouveaux solides en 3ème : la pyramide, le cône et la sphère",
        "Chaque solide a sa propre formule de volume, à connaître par cœur",
        "Bien identifier la base et la hauteur avant de calculer",
      ],
      voixOff:
        "Rappelons les solides étudiés au collège. Le cube, le pavé droit et le cylindre ont déjà été vus les années précédentes. Cette année, on étudie trois nouveaux solides : la pyramide, le cône et la sphère. Chacun possède sa propre formule de volume, qu'il faut absolument connaître par cœur. Avant tout calcul, il faut bien identifier la base et la hauteur du solide.",
    },
    {
      titre: "Le volume du cône",
      illustration: "🍦",
      visuel: "V = (π × r² × h) / 3",
      contenu: [
        "V = (π × r² × h) / 3, où r est le rayon de la base et h la hauteur",
        "C'est le tiers du volume d'un cylindre de même base et même hauteur",
        "Exemple : r = 3 cm, h = 8 cm → V = π × 3² × 8 / 3 = π × 72/3 = 24π ≈ 75,4 cm³",
      ],
      voixOff:
        "Le volume d'un cône se calcule avec la formule : pi fois le rayon au carré, fois la hauteur, le tout divisé par trois. On retrouve le rayon de la base circulaire et la hauteur du cône. C'est exactement le tiers du volume d'un cylindre qui aurait la même base et la même hauteur. Par exemple, pour un rayon de trois centimètres et une hauteur de huit centimètres, le volume vaut vingt-quatre pi, soit environ soixante-quinze virgule quatre centimètres cubes.",
    },
    {
      titre: "Le volume de la pyramide",
      illustration: "🔺",
      visuel: "V = (aire de la base × h) / 3",
      contenu: [
        "V = (aire de la base × hauteur) / 3",
        "La base peut être n'importe quel polygone (carré, triangle, rectangle...)",
        "Exemple : base carrée de côté 6 cm, hauteur 10 cm → V = (36 × 10)/3 = 360/3 = 120 cm³",
        "C'est le tiers du volume d'un prisme de même base et même hauteur",
      ],
      voixOff:
        "Le volume d'une pyramide se calcule avec la formule : l'aire de la base, multipliée par la hauteur, le tout divisé par trois. La base peut être n'importe quel polygone. Par exemple, pour une base carrée de six centimètres de côté et une hauteur de dix centimètres, l'aire de la base vaut trente-six centimètres carrés, donc le volume vaut trente-six fois dix, divisé par trois, soit cent vingt centimètres cubes.",
    },
    {
      titre: "Le volume de la sphère",
      illustration: "⚽",
      visuel: "V = (4/3) × π × r³",
      contenu: [
        "V = (4/3) × π × r³, où r est le rayon de la sphère",
        "Attention : le rayon est élevé au CUBE, pas au carré",
        "Exemple : r = 6 cm → V = (4/3) × π × 6³ = (4/3) × π × 216 = 288π ≈ 904,8 cm³",
        "Ne pas confondre avec l'aire de la sphère (formule différente, hors programme brevet)",
      ],
      voixOff:
        "Le volume d'une sphère se calcule avec la formule : quatre tiers, fois pi, fois le rayon au cube. Attention à ne pas confondre : c'est bien le rayon au cube, et non au carré. Par exemple, pour un rayon de six centimètres, le volume vaut quatre tiers fois pi fois deux cent seize, soit deux cent quatre-vingt-huit pi, environ neuf cent quatre virgule huit centimètres cubes.",
    },
    {
      titre: "Conversions d'unités de volume",
      illustration: "🔄",
      visuel: "1 L = 1 dm³ = 1000 cm³ ; 1 m³ = 1000 L",
      contenu: [
        "1 dm³ = 1 L ; 1 cm³ = 1 mL",
        "1 m³ = 1000 dm³ = 1000 L",
        "Pour passer d'une unité de volume à l'unité juste en dessous : × 1000",
        "Exemple : 2,5 dm³ = 2,5 L = 2500 cm³ = 2500 mL",
      ],
      voixOff:
        "Il faut aussi savoir convertir les unités de volume et de contenance. Un décimètre cube équivaut à un litre, et un centimètre cube équivaut à un millilitre. Un mètre cube équivaut à mille décimètres cubes, donc à mille litres. Pour passer d'une unité de volume à l'unité directement inférieure, on multiplie par mille, car chaque dimension est multipliée par dix. Par exemple, deux virgule cinq décimètres cubes valent deux virgule cinq litres, soit deux mille cinq cents centimètres cubes.",
    },
    {
      titre: "Section d'un solide par un plan parallèle à la base",
      illustration: "✂️",
      visuel: "cône coupé horizontalement → section = un disque",
      contenu: [
        "Couper une pyramide ou un cône par un plan parallèle à la base donne une figure semblable à la base",
        "La section d'un cône (plan parallèle à la base) est un CERCLE",
        "La section d'une pyramide à base carrée (plan parallèle à la base) est un CARRÉ",
        "La section d'un cylindre par un plan parallèle à la base est un cercle identique à la base",
      ],
      voixOff:
        "Quand on coupe une pyramide ou un cône par un plan parallèle à la base, on obtient une figure de même forme que la base, mais réduite : c'est une application de l'homothétie. La section d'un cône est toujours un cercle. La section d'une pyramide à base carrée est toujours un carré. Pour le cylindre, la section par un plan parallèle à la base est un cercle identique à la base, car le cylindre ne se rétrécit pas en hauteur.",
    },
    {
      titre: "Calculer les dimensions d'une section",
      illustration: "📐",
      visuel: "SM/SH = rapport de réduction",
      contenu: [
        "On utilise le théorème de Thalès (ou les propriétés de l'homothétie)",
        "Exemple : pyramide de hauteur SH = 12 cm, coupée à SM = 4 cm du sommet, base de côté 9 cm",
        "Rapport k = SM/SH = 4/12 = 1/3",
        "Côté de la section = k × côté de la base = (1/3) × 9 = 3 cm",
      ],
      voixOff:
        "Pour calculer les dimensions d'une section, on utilise le théorème de Thalès. Prenons une pyramide de hauteur totale douze centimètres, coupée par un plan situé à quatre centimètres du sommet, avec une base carrée de neuf centimètres de côté. Le rapport de réduction est le rapport des hauteurs, quatre sur douze, soit un tiers. Le côté de la section est donc un tiers de neuf, soit trois centimètres.",
    },
    {
      titre: "Effet de la section sur le volume",
      illustration: "🧊",
      visuel: "volume de la petite pyramide = k³ × volume de la grande",
      contenu: [
        "Le petit solide (au sommet) est une réduction du grand, de rapport k",
        "Son volume vaut k³ × volume du solide complet",
        "Exemple : rapport k = 1/3 → volume du petit solide = (1/3)³ = 1/27 du volume total",
        "Utile pour calculer le volume d'un solide « tronqué » (par différence)",
      ],
      voixOff:
        "Le petit solide obtenu au sommet, après la coupe, est une réduction du solide complet, avec le même rapport k que celui trouvé pour les longueurs. Son volume vaut donc k au cube fois le volume du solide complet. Par exemple, avec un rapport d'un tiers, le petit solide a un volume égal à un vingt-septième du volume total. Cette propriété est très utile pour calculer le volume d'un solide tronqué, en effectuant une différence de volumes.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "V(cône) = πr²h/3 ; V(pyramide) = (aire base × h)/3 ; V(sphère) = (4/3)πr³",
        "1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1000 L",
        "Section parallèle à la base : figure semblable à la base (cercle pour un cône, carré pour une pyramide à base carrée)",
        "Rapport de réduction k (Thalès) : longueurs × k, volumes × k³",
      ],
      voixOff:
        "Résumons ce chapitre de géométrie dans l'espace. Retiens les trois formules de volume : pi r carré h sur trois pour le cône, aire de la base fois hauteur sur trois pour la pyramide, et quatre tiers pi r cube pour la sphère. N'oublie pas les conversions : un décimètre cube égale un litre, un centimètre cube égale un millilitre. Enfin, une section parallèle à la base donne toujours une figure semblable à la base, et le rapport de réduction, calculé avec Thalès, s'applique aux longueurs directement, mais au cube pour les volumes. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre de géométrie dans l'espace regroupe les formules de volume du cône, de la pyramide et de la sphère, ainsi que l'étude des sections de solides par un plan parallèle à la base, en lien avec le théorème de Thalès.",
    sections: [
      {
        titre: "Formules de volume",
        points: [
          "Cône : V = π × r² × h / 3",
          "Pyramide : V = aire de la base × h / 3",
          "Sphère : V = (4/3) × π × r³",
        ],
      },
      {
        titre: "Conversions d'unités",
        points: [
          "1 dm³ = 1 L ; 1 cm³ = 1 mL",
          "1 m³ = 1000 dm³ = 1000 L",
          "Passer à l'unité inférieure : × 1000 ; à l'unité supérieure : ÷ 1000",
        ],
      },
      {
        titre: "Sections de solides",
        points: [
          "Plan parallèle à la base : figure semblable à la base",
          "Section d'un cône : un cercle ; section d'une pyramide à base carrée : un carré",
          "Rapport de réduction k = distance au sommet / hauteur totale (Thalès)",
        ],
      },
      {
        titre: "Volume et réduction",
        points: [
          "Longueurs de la section × k par rapport à la base",
          "Volume du petit solide (au sommet) = k³ × volume du solide complet",
          "Pour un solide tronqué : volume tronqué = volume total − volume du petit solide",
        ],
      },
    ],
    audio:
      "Fiche de révision : volumes et sections de solides. Trois formules de volume à connaître : pour le cône, pi fois le rayon au carré fois la hauteur, divisé par trois ; pour la pyramide, l'aire de la base fois la hauteur, divisé par trois ; pour la sphère, quatre tiers fois pi fois le rayon au cube. Pour les conversions, un décimètre cube équivaut à un litre, un centimètre cube équivaut à un millilitre, et un mètre cube équivaut à mille litres. Quand on coupe un cône ou une pyramide par un plan parallèle à la base, on obtient une section semblable à la base : un cercle pour le cône, un polygone identique à la base pour la pyramide. Le rapport de réduction se calcule avec le théorème de Thalès, en comparant les hauteurs. Ce même rapport, élevé au cube, donne le rapport des volumes entre le petit solide obtenu au sommet et le solide complet.",
  },
  memoCards: [
    { recto: "Formule du volume du cône ?", verso: "V = π × r² × h / 3" },
    { recto: "Formule du volume de la pyramide ?", verso: "V = aire de la base × hauteur / 3" },
    { recto: "Formule du volume de la sphère ?", verso: "V = (4/3) × π × r³ (attention, le rayon est au cube)" },
    { recto: "Équivalence entre dm³ et litres ?", verso: "1 dm³ = 1 L. Et 1 cm³ = 1 mL." },
    { recto: "Combien de litres dans 1 m³ ?", verso: "1 m³ = 1000 L." },
    { recto: "Quelle est la section d'un cône par un plan parallèle à la base ?", verso: "Un cercle (plus petit que la base)." },
    { recto: "Comment calculer le rapport de réduction k d'une section ?", verso: "k = distance du sommet au plan de coupe / hauteur totale (théorème de Thalès)." },
    { recto: "Comment le volume du petit solide (au sommet) se calcule-t-il ?", verso: "Volume du petit solide = k³ × volume du solide complet." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la formule du volume d'une pyramide ?",
      choix: ["aire base × h", "aire base × h / 3", "périmètre base × h", "aire base × h / 2"],
      bonneReponse: 1,
      explication: "Le volume d'une pyramide est le tiers du produit de l'aire de la base par la hauteur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien vaut 3 dm³ en litres ?",
      choix: ["0,3 L", "3 L", "30 L", "3000 L"],
      bonneReponse: 1,
      explication: "1 dm³ = 1 L, donc 3 dm³ = 3 L.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule le volume d'une pyramide de base carrée de côté 5 cm et de hauteur 12 cm.",
      reponse: "V = 100 cm³",
      explication: "Aire de la base = 5² = 25 cm². V = (25 × 12)/3 = 300/3 = 100 cm³.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La section d'un cône par un plan parallèle à sa base est :",
      choix: ["Un carré", "Un cercle", "Un triangle", "Un rectangle"],
      bonneReponse: 1,
      explication: "Le cône a une base circulaire, donc toute section parallèle à la base est aussi un cercle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le volume d'un cône de rayon 4 cm et de hauteur 9 cm (donner le résultat en fonction de π, puis arrondi au dixième).",
      reponse: "V = 48π cm³ ≈ 150,8 cm³",
      explication: "V = π × 4² × 9 / 3 = π × 16 × 9 / 3 = π × 144/3 = 48π ≈ 150,8 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le volume d'une sphère de rayon 3 cm (donner le résultat en fonction de π, puis arrondi au dixième).",
      reponse: "V = 36π cm³ ≈ 113,1 cm³",
      explication: "V = (4/3) × π × 3³ = (4/3) × π × 27 = 36π ≈ 113,1 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un réservoir cubique de 2 m d'arête est rempli d'eau. Quel volume d'eau, en litres, peut-il contenir ?",
      choix: ["8 L", "800 L", "8000 L", "80000 L"],
      bonneReponse: 2,
      explication: "V = 2³ = 8 m³. Comme 1 m³ = 1000 L, V = 8 × 1000 = 8000 L.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Une pyramide de hauteur SH = 15 cm est coupée par un plan parallèle à la base, à une distance SM = 5 cm du sommet. La base a un côté de 12 cm. Calcule le côté de la section obtenue.",
      reponse: "4 cm",
      explication: "k = SM/SH = 5/15 = 1/3. Côté de la section = (1/3) × 12 = 4 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un cône de hauteur totale 18 cm et de rayon de base 6 cm est coupé par un plan parallèle à la base, à 6 cm du sommet. Calcule le rayon de la section obtenue, puis le volume du petit cône (au sommet), en fonction de π.",
      reponse: "Rayon de la section = 2 cm ; volume du petit cône = 8π cm³",
      explication:
        "k = 6/18 = 1/3. Rayon de la section = (1/3) × 6 = 2 cm. Volume du grand cône = π×6²×18/3 = π×36×6 = 216π cm³. Volume du petit cône = k³ × 216π = (1/27) × 216π = 8π cm³.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Une pyramide complète a un volume de 270 cm³. Une réduction de cette pyramide, de rapport k = 1/3, a pour volume :",
      choix: ["90 cm³", "30 cm³", "10 cm³", "22,5 cm³"],
      bonneReponse: 2,
      explication: "Volume de la réduction = k³ × volume total = (1/3)³ × 270 = (1/27) × 270 = 10 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un glacier vend des cônes de glace de rayon 3 cm et de hauteur 10 cm, entièrement remplis. Une boule de glace supplémentaire, de rayon 3 cm, est ajoutée au-dessus (une demi-sphère). Calcule le volume total de glace (cône + demi-sphère), en fonction de π.",
      reponse: "V total = 48π cm³",
      explication:
        "Volume du cône = π×3²×10/3 = π×9×10/3 = 30π cm³. Volume de la demi-sphère = (1/2)×(4/3)×π×3³ = (1/2)×(4/3)×π×27 = 18π cm³. V total = 30π + 18π = 48π cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un silo à grains a la forme d'un cylindre surmonté d'un cône. Le cylindre a un rayon de 2 m et une hauteur de 5 m ; le cône a le même rayon et une hauteur de 3 m. Calcule le volume total du silo, en fonction de π.",
      reponse: "V total = 24π m³",
      explication:
        "Volume du cylindre = π × 2² × 5 = 20π m³. Volume du cône = π × 2² × 3 / 3 = π × 4 = 4π m³. V total = 20π + 4π = 24π m³.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la formule du volume d'une sphère ?",
      choix: ["(4/3)πr³", "4πr²", "πr²h", "(4/3)πr²"],
      bonneReponse: 0,
      explication: "Le volume d'une sphère est (4/3) × π × r³.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule le volume d'un cône de rayon 5 cm et de hauteur 6 cm (en fonction de π).",
      reponse: "V = 50π cm³",
      explication: "V = π × 5² × 6 / 3 = π × 25 × 2 = 50π cm³.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Combien de litres contient un récipient de 4500 cm³ ?",
      reponse: "4,5 L",
      explication: "1000 cm³ = 1 L, donc 4500 cm³ = 4,5 L.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une pyramide de base rectangulaire (4 cm × 6 cm) a une hauteur de 9 cm. Son volume est :",
      choix: ["72 cm³", "216 cm³", "24 cm³", "108 cm³"],
      bonneReponse: 0,
      explication: "Aire de la base = 4 × 6 = 24 cm². V = (24 × 9)/3 = 216/3 = 72 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une pyramide de hauteur 20 cm est coupée à 5 cm du sommet par un plan parallèle à la base. Quel est le rapport k de la section, et quelle fraction du volume total représente le petit solide obtenu ?",
      reponse: "k = 1/4 ; le petit solide représente 1/64 du volume total",
      explication: "k = 5/20 = 1/4. Le rapport des volumes est k³ = (1/4)³ = 1/64.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Volumes et sections de solides",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le volume d'un cône se calcule avec la formule :",
          choix: ["πr²h", "πr²h/3", "πr³/3", "2πrh"],
          bonneReponse: 1,
          explication: "V(cône) = π × r² × h / 3.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule le volume d'une pyramide de base carrée de côté 4 cm et de hauteur 6 cm.",
          reponse: "V = 32 cm³",
          explication: "Aire de la base = 4² = 16 cm². V = (16 × 6)/3 = 96/3 = 32 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule le volume d'une sphère de rayon 5 cm (en fonction de π, puis arrondi au dixième).",
          reponse: "V = (500/3)π cm³ ≈ 523,6 cm³",
          explication: "V = (4/3) × π × 5³ = (4/3) × π × 125 = (500/3)π cm³, soit environ 523,6 cm³ (avec π ≈ 3,14159).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un récipient cylindrique a un volume de 6,28 L. Combien cela représente-t-il de cm³ ?",
          reponse: "6280 cm³",
          explication: "1 L = 1000 cm³, donc 6,28 L = 6,28 × 1000 = 6280 cm³.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question:
            "Un cône de hauteur 12 cm est coupé par un plan parallèle à la base, à 4 cm du sommet. Quel est le rapport de réduction k ?",
          choix: ["1/4", "1/3", "1/2", "4/12"],
          bonneReponse: 1,
          explication: "k = distance au sommet / hauteur totale = 4/12 = 1/3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un cône a un volume de 150 cm³. Il est coupé par un plan parallèle à la base, avec un rapport de réduction k = 1/5 pour le petit cône obtenu au sommet. Calcule le volume de ce petit cône, puis le volume du tronc de cône restant.",
          reponse: "Volume du petit cône = 1,2 cm³ ; volume du tronc de cône = 148,8 cm³",
          explication:
            "Volume du petit cône = k³ × 150 = (1/125) × 150 = 1,2 cm³. Volume du tronc de cône = 150 − 1,2 = 148,8 cm³.",
        },
      ],
    },
    {
      titre: "Examen 2 — Volumes et sections de solides",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le volume d'une sphère se calcule avec la formule :",
          choix: ["(4/3)πr³", "4πr²", "(4/3)πr²", "πr²h/3"],
          bonneReponse: 0,
          explication: "V(sphère) = (4/3) × π × r³.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Combien de mL représentent 2 dm³ ?",
          reponse: "2000 mL",
          explication: "1 dm³ = 1 L = 1000 mL, donc 2 dm³ = 2000 mL.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule le volume d'un cône de rayon 6 cm et de hauteur 10 cm (en fonction de π).",
          reponse: "V = 120π cm³",
          explication: "V = π × 6² × 10 / 3 = π × 36 × 10 / 3 = π × 360/3 = 120π cm³.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une pyramide de base rectangulaire (5 cm × 8 cm) a un volume de 80 cm³. Calcule sa hauteur.",
          reponse: "h = 6 cm",
          explication: "Aire de la base = 5 × 8 = 40 cm². V = (40 × h)/3 = 80, donc 40h = 240, donc h = 6 cm.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une pyramide de hauteur 24 cm est coupée à 18 cm du sommet. Le rapport de réduction k vaut :",
          choix: ["1/3", "2/3", "3/4", "18/24"],
          bonneReponse: 2,
          explication: "k = 18/24 = 3/4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une piscine a la forme d'un pavé droit de 8 m de long, 4 m de large et 1,5 m de profondeur. Elle est remplie aux trois quarts. Calcule le volume d'eau dans la piscine, en m³ puis en litres.",
          reponse: "36 m³, soit 36 000 L",
          explication:
            "Volume total = 8 × 4 × 1,5 = 48 m³. Volume aux trois quarts = 48 × 3/4 = 36 m³. En litres : 36 × 1000 = 36 000 L.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "V(cône) = π × r² × h / 3 ; V(pyramide) = aire de la base × h / 3 ; V(sphère) = (4/3) × π × r³.",
    "1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1000 L.",
    "Une section parallèle à la base donne une figure semblable à la base (cercle pour un cône, polygone identique pour une pyramide).",
    "Rapport de réduction k = distance du sommet au plan / hauteur totale (théorème de Thalès).",
    "Volume du petit solide obtenu au sommet = k³ × volume du solide complet.",
    "Pour un solide tronqué : volume tronqué = volume total − volume du petit solide retiré.",
  ],
},
{
  slug: "calcul-litteral-developpement",
  titre: "Calcul littéral : développer et réduire",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Développer une expression littérale grâce à la distributivité, réduire une expression en regroupant les termes semblables, et calculer sa valeur.",
  objectifs: [
    "Comprendre ce qu'est une expression littérale et calculer sa valeur",
    "Développer une expression avec la distributivité simple k(a+b) = ka + kb",
    "Réduire une expression en regroupant les termes semblables",
    "Gérer un signe moins devant une parenthèse",
    "Développer un produit de deux parenthèses (a+b)(c+d) et réduire le résultat",
  ],
  slides: [
    {
      titre: "Rappel : une expression littérale",
      illustration: "🔤",
      visuel: "3x + 5",
      contenu: [
        "Une expression littérale contient des lettres (souvent x) qui représentent des nombres inconnus",
        "3x + 5 signifie 3 × x + 5",
        "On peut calculer sa valeur en remplaçant x par un nombre",
        "Développer = transformer un produit en somme ; réduire = simplifier une somme",
      ],
      voixOff:
        "Une expression littérale contient des lettres, souvent la lettre x, qui représentent des nombres inconnus. Trois x plus cinq signifie trois fois x, plus cinq. On peut calculer la valeur d'une expression en remplaçant la lettre par un nombre. Aujourd'hui, on apprend deux techniques essentielles : développer, c'est-à-dire transformer un produit en somme, et réduire, c'est-à-dire simplifier une somme.",
    },
    {
      titre: "La distributivité simple",
      illustration: "🎯",
      visuel: "k(a+b) = ka + kb",
      contenu: [
        "k(a+b) = ka + kb : on distribue k à chaque terme entre parenthèses",
        "3(x + 5) = 3×x + 3×5 = 3x + 15",
        "On multiplie k par a, puis k par b, puis on additionne les deux résultats",
        "C'est la règle de la distributivité",
      ],
      voixOff:
        "Voici la règle de la distributivité : k fois la parenthèse a plus b égale k fois a, plus k fois b. On distribue k à chaque terme entre parenthèses. Trois fois la parenthèse x plus cinq devient trois fois x, plus trois fois cinq, soit trois x plus quinze. On multiplie k par chaque terme, puis on additionne les résultats.",
    },
    {
      titre: "Distribuer avec une soustraction",
      illustration: "➖",
      visuel: "k(a−b) = ka − kb",
      contenu: [
        "k(a−b) = ka − kb : même principe, avec un signe moins",
        "4(x − 2) = 4×x − 4×2 = 4x − 8",
        "Attention à bien distribuer le signe moins à l'intérieur",
        "5(2x − 3) = 10x − 15",
      ],
      voixOff:
        "Le même principe s'applique avec une soustraction : k fois la parenthèse a moins b égale k fois a, moins k fois b. Quatre fois la parenthèse x moins deux devient quatre x moins huit. Attention à bien distribuer le signe moins à chaque terme. Cinq fois la parenthèse deux x moins trois devient dix x moins quinze.",
    },
    {
      titre: "Réduire une expression",
      illustration: "🧹",
      visuel: "3x + 5x = 8x",
      contenu: [
        "Des termes semblables ont la même partie littérale (x, x², ...)",
        "3x + 5x = 8x : on additionne les coefficients",
        "3x + 2 − 5x + 7 = −2x + 9",
        "On ne peut pas réduire des termes différents : 3x et 5 restent séparés",
      ],
      voixOff:
        "Réduire une expression, c'est regrouper les termes semblables, c'est-à-dire ceux qui ont la même partie littérale. Trois x plus cinq x égale huit x : on additionne simplement les coefficients. Trois x plus deux, moins cinq x, plus sept, se réduit en moins deux x plus neuf. Mais attention, on ne peut jamais réduire des termes différents : trois x et cinq restent séparés, car l'un a un x et l'autre non.",
    },
    {
      titre: "Le piège du signe moins devant une parenthèse",
      illustration: "⚠️",
      visuel: "−(x+3) = −x−3",
      contenu: [
        "−(x + 3) = −x − 3 : le signe moins change le signe de chaque terme à l'intérieur",
        "5 − (2x − 4) = 5 − 2x + 4 = 9 − 2x",
        "On peut imaginer un « −1 » invisible devant la parenthèse",
        "Il faut bien changer TOUS les signes à l'intérieur de la parenthèse",
      ],
      voixOff:
        "Voici un piège très fréquent : un signe moins devant une parenthèse change le signe de chaque terme à l'intérieur. Moins la parenthèse x plus trois devient moins x moins trois. Cinq moins la parenthèse deux x moins quatre devient cinq moins deux x plus quatre, soit neuf moins deux x. Tu peux imaginer un moins un invisible devant la parenthèse : il faut changer tous les signes à l'intérieur, sans exception.",
    },
    {
      titre: "La double distributivité",
      illustration: "🔲",
      visuel: "(a+b)(c+d) = ac + ad + bc + bd",
      contenu: [
        "Chaque terme du premier facteur multiplie chaque terme du second",
        "(x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10",
        "(x + 3)(x − 2) = x² − 2x + 3x − 6 = x² + x − 6",
        "On réduit toujours à la fin en regroupant les termes semblables",
      ],
      voixOff:
        "Quand on multiplie deux parenthèses entre elles, chaque terme du premier facteur multiplie chaque terme du second. La parenthèse x plus deux, fois la parenthèse x plus cinq, donne x carré plus cinq x plus deux x plus dix, soit x carré plus sept x plus dix après réduction. La parenthèse x plus trois, fois la parenthèse x moins deux, donne x carré plus x moins six. On réduit toujours à la fin en regroupant les termes semblables.",
    },
    {
      titre: "Calculer la valeur d'une expression",
      illustration: "🔢",
      visuel: "E = 3x+5, x=4 → E=17",
      contenu: [
        "On remplace x par sa valeur, puis on calcule",
        "E = 3x + 5, pour x = 4 : E = 3×4 + 5 = 12 + 5 = 17",
        "Développer ou réduire d'abord facilite souvent le calcul",
        "Utile pour vérifier qu'une expression développée est correcte",
      ],
      voixOff:
        "Pour calculer la valeur d'une expression, on remplace la lettre par le nombre donné, puis on calcule en respectant les priorités. Pour E égale trois x plus cinq, avec x égal quatre, on obtient trois fois quatre plus cinq, soit douze plus cinq, soit dix-sept. Développer ou réduire l'expression avant de calculer facilite souvent le travail, et permet aussi de vérifier qu'un développement est correct.",
    },
    {
      titre: "Pièges à éviter",
      illustration: "🚫",
      visuel: "3(x+5) ≠ 3x+5",
      contenu: [
        "3(x + 5) ≠ 3x + 5 : il faut distribuer à CHAQUE terme, donc 3x + 15",
        "x + x = 2x, mais x × x = x² (ne pas confondre !)",
        "−(x − 4) = −x + 4, et non −x − 4",
        "2x × 3x = 6x², pas 6x",
      ],
      voixOff:
        "Voici les pièges classiques à éviter absolument. Trois fois la parenthèse x plus cinq n'est jamais égal à trois x plus cinq : il faut distribuer à chaque terme, ce qui donne trois x plus quinze. Ne confonds pas x plus x, qui vaut deux x, avec x fois x, qui vaut x carré. Moins la parenthèse x moins quatre égale moins x plus quatre, et surtout pas moins x moins quatre. Et deux x fois trois x égale six x carré, pas six x.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Distributivité : k(a+b) = ka+kb et k(a−b) = ka−kb",
        "Réduire : additionner les coefficients des termes ayant la même partie littérale",
        "Signe moins devant parenthèse : on change le signe de chaque terme à l'intérieur",
        "Double distributivité : (a+b)(c+d) = ac+ad+bc+bd, puis on réduit",
      ],
      voixOff:
        "Résumons. La distributivité permet de développer : k fois la parenthèse a plus b égale k a plus k b, et de même avec un signe moins. Réduire, c'est additionner les coefficients des termes ayant la même partie littérale. Un signe moins devant une parenthèse change le signe de chaque terme à l'intérieur. Et pour multiplier deux parenthèses, on applique la double distributivité, puis on réduit toujours le résultat.",
    },
  ],
  fiche: {
    intro:
      "Développer, c'est transformer un produit en somme grâce à la distributivité. Réduire, c'est regrouper les termes semblables pour simplifier une expression.",
    sections: [
      {
        titre: "Distributivité simple",
        points: [
          "k(a+b) = ka + kb ; exemple : 3(x+5) = 3x+15",
          "k(a−b) = ka − kb ; exemple : 4(x−2) = 4x−8",
          "On distribue k à chaque terme entre parenthèses",
        ],
      },
      {
        titre: "Réduire une expression",
        points: [
          "Des termes semblables ont la même partie littérale (x, x², ...)",
          "On additionne les coefficients des termes semblables",
          "3x + 5x = 8x ; 3x + 2 − 5x + 7 = −2x + 9",
        ],
      },
      {
        titre: "Le signe moins devant une parenthèse",
        points: [
          "−(a+b) = −a−b : on change le signe de chaque terme à l'intérieur",
          "Exemple : 5 − (2x−4) = 5 − 2x + 4 = 9 − 2x",
          "Un moins devant une parenthèse agit comme un « −1 » distribué",
        ],
      },
      {
        titre: "Double distributivité",
        points: [
          "(a+b)(c+d) = ac + ad + bc + bd",
          "(x+2)(x+5) = x² + 7x + 10",
          "(x+3)(x−2) = x² + x − 6",
          "On réduit toujours le résultat à la fin",
        ],
      },
    ],
    audio:
      "Fiche de révision : développer et réduire une expression littérale. La distributivité permet de développer un produit en somme : k fois la parenthèse a plus b égale k a plus k b, et k fois la parenthèse a moins b égale k a moins k b. Réduire une expression consiste à regrouper les termes semblables, c'est-à-dire ceux qui ont la même partie littérale, en additionnant leurs coefficients : trois x plus cinq x égale huit x. Attention au piège du signe moins devant une parenthèse : il change le signe de chaque terme à l'intérieur, comme si on distribuait moins un. Enfin, pour multiplier deux parenthèses entre elles, on utilise la double distributivité : chaque terme du premier facteur multiplie chaque terme du second, puis on réduit le résultat obtenu.",
  },
  memoCards: [
    { recto: "k(a+b) = ?", verso: "ka + kb : on distribue k à chaque terme. Ex : 3(x+5) = 3x+15." },
    { recto: "k(a−b) = ?", verso: "ka − kb. Ex : 4(x−2) = 4x−8." },
    { recto: "Que sont des termes semblables ?", verso: "Des termes ayant la même partie littérale (x, x², ...). On peut les additionner." },
    { recto: "Réduis 3x + 5x.", verso: "8x : on additionne les coefficients (3 et 5)." },
    { recto: "−(a+b) = ?", verso: "−a − b : le signe moins change le signe de chaque terme à l'intérieur." },
    { recto: "(a+b)(c+d) = ?", verso: "ac + ad + bc + bd : chaque terme du premier facteur multiplie chaque terme du second." },
    { recto: "Comment calculer la valeur d'une expression ?", verso: "On remplace la lettre par le nombre donné, puis on calcule en respectant les priorités." },
    { recto: "x + x et x × x : même résultat ?", verso: "Non ! x + x = 2x, mais x × x = x² (une somme n'est pas un produit)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe 2(x+4).",
      choix: ["2x+4", "2x+8", "x+8", "2x+6"],
      bonneReponse: 1,
      explication: "On distribue 2 à chaque terme : 2×x + 2×4 = 2x + 8.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Réduis 5x + 3x.",
      choix: ["8x", "15x", "8x²", "2x"],
      bonneReponse: 0,
      explication: "Ce sont des termes semblables : on additionne les coefficients, 5 + 3 = 8, donc 8x.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Développe 3(x−2).",
      reponse: "3x − 6",
      explication: "On distribue 3 à chaque terme : 3×x − 3×2 = 3x − 6.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule la valeur de 2x + 1 pour x = 5.",
      choix: ["11", "10", "6", "7"],
      bonneReponse: 0,
      explication: "On remplace x par 5 : 2×5 + 1 = 10 + 1 = 11.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réduis 4x + 7 − 2x + 3.",
      reponse: "2x + 10",
      explication: "On regroupe les termes en x : 4x − 2x = 2x. Puis les nombres : 7 + 3 = 10. Résultat : 2x + 10.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Développe −(x+6).",
      choix: ["−x+6", "−x−6", "x−6", "x+6"],
      bonneReponse: 1,
      explication: "Le signe moins change le signe de chaque terme à l'intérieur : −x − 6.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Développe 5(2x−3).",
      reponse: "10x − 15",
      explication: "On distribue 5 à chaque terme : 5×2x − 5×3 = 10x − 15.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Réduis 7x − 3x + 2 − 5.",
      choix: ["4x−3", "4x+3", "10x−3", "4x−7"],
      bonneReponse: 0,
      explication: "7x − 3x = 4x et 2 − 5 = −3, donc 4x − 3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis (x+3)(x+2).",
      reponse: "x² + 5x + 6",
      explication: "(x+3)(x+2) = x² + 2x + 3x + 6 = x² + 5x + 6 après avoir regroupé 2x et 3x.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis (x−4)(x+5).",
      reponse: "x² + x − 20",
      explication: "(x−4)(x+5) = x² + 5x − 4x − 20 = x² + x − 20 après avoir regroupé 5x et −4x.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Développe et réduis 3(x+2) − 2(x−1).",
      choix: ["x+8", "5x+4", "x+4", "5x+8"],
      bonneReponse: 0,
      explication: "3(x+2) = 3x+6 et 2(x−1) = 2x−2, donc 3x+6 − (2x−2) = 3x+6−2x+2 = x+8.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un rectangle a pour longueur (x+3) cm et pour largeur x cm. Exprime son périmètre en fonction de x, sous forme développée et réduite, puis calcule ce périmètre pour x = 4 cm.",
      reponse: "P = 4x + 6 ; pour x = 4, P = 22 cm.",
      explication: "P = 2 × [(x+3) + x] = 2 × (2x+3) = 4x + 6. Pour x = 4 : P = 4×4 + 6 = 22 cm.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe 4(x+1).",
      choix: ["4x+1", "4x+4", "x+4", "4x+5"],
      bonneReponse: 1,
      explication: "On distribue 4 à chaque terme : 4×x + 4×1 = 4x + 4.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Réduis 6x − 2x.",
      reponse: "4x",
      explication: "Termes semblables : 6 − 2 = 4, donc 4x.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Développe −(2x−5).",
      choix: ["−2x+5", "−2x−5", "2x−5", "2x+5"],
      bonneReponse: 0,
      explication: "Le signe moins change le signe de chaque terme : −2x + 5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Développe et réduis 2(x+3) + 3(x−1).",
      reponse: "5x + 3",
      explication: "2(x+3) = 2x+6 et 3(x−1) = 3x−3, donc 2x+6+3x−3 = 5x+3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis (x+1)(x+4).",
      reponse: "x² + 5x + 4",
      explication: "(x+1)(x+4) = x² + 4x + x + 4 = x² + 5x + 4.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Développer et réduire",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Développe 5(x+2).",
          choix: ["5x+2", "5x+10", "x+10", "5x+7"],
          bonneReponse: 1,
          explication: "On distribue 5 à chaque terme : 5×x + 5×2 = 5x + 10.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Réduis 8x + 3x.",
          reponse: "11x",
          explication: "Termes semblables : 8 + 3 = 11, donc 11x.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Développe −(x−7).",
          choix: ["−x+7", "−x−7", "x−7", "x+7"],
          bonneReponse: 0,
          explication: "Le signe moins change le signe de chaque terme : −x + 7.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réduis 5x − 3 − 2x + 9.",
          reponse: "3x + 6",
          explication: "5x − 2x = 3x et −3 + 9 = 6, donc 3x + 6.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Développe et réduis (x+5)(x−3).",
          reponse: "x² + 2x − 15",
          explication: "(x+5)(x−3) = x² − 3x + 5x − 15 = x² + 2x − 15.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un carré a pour côté (x+2) cm. Exprime son périmètre en fonction de x, développé et réduit, puis calcule-le pour x = 3 cm.",
          reponse: "P = 4x + 8 ; pour x = 3, P = 20 cm.",
          explication: "P = 4×(x+2) = 4x + 8. Pour x = 3 : P = 4×3 + 8 = 20 cm.",
        },
      ],
    },
    {
      titre: "Examen 2 — Développer et réduire",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Développe 3(x+7).",
          choix: ["3x+7", "3x+21", "x+21", "3x+10"],
          bonneReponse: 1,
          explication: "On distribue 3 à chaque terme : 3×x + 3×7 = 3x + 21.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule la valeur de 4x − 3 pour x = 2.",
          reponse: "5",
          explication: "On remplace x par 2 : 4×2 − 3 = 8 − 3 = 5.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Réduis 9x − 4x + 6 − 2.",
          choix: ["5x+4", "5x+8", "13x+4", "5x−4"],
          bonneReponse: 0,
          explication: "9x − 4x = 5x et 6 − 2 = 4, donc 5x + 4.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Développe −(3x−8).",
          reponse: "−3x + 8",
          explication: "Le signe moins change le signe de chaque terme : −3x + 8.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Développe et réduis (x−2)(x−6).",
          reponse: "x² − 8x + 12",
          explication: "(x−2)(x−6) = x² − 6x − 2x + 12 = x² − 8x + 12.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un rectangle a pour longueur (2x+1) cm et pour largeur 3 cm. Exprime son aire en fonction de x, sous forme développée et réduite, puis calcule-la pour x = 5 cm.",
          reponse: "A = 6x + 3 ; pour x = 5, A = 33 cm².",
          explication: "A = 3 × (2x+1) = 6x + 3. Pour x = 5 : A = 6×5 + 3 = 33 cm².",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Distributivité simple : k(a+b) = ka + kb et k(a−b) = ka − kb.",
    "Réduire une expression : additionner les coefficients des termes ayant la même partie littérale.",
    "Un signe moins devant une parenthèse change le signe de chaque terme à l'intérieur : −(a+b) = −a−b.",
    "Double distributivité : (a+b)(c+d) = ac + ad + bc + bd, puis on réduit toujours le résultat.",
    "Piège à éviter : x + x = 2x mais x × x = x² ; et 3(x+5) ≠ 3x + 5.",
    "Pour calculer la valeur d'une expression, on remplace la lettre par le nombre puis on respecte les priorités opératoires.",
  ],
},
{
  slug: "equations",
  titre: "Les équations du premier degré",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Comprendre ce qu'est une équation, apprendre à la résoudre étape par étape et l'utiliser pour résoudre des problèmes concrets.",
  objectifs: [
    "Comprendre ce qu'est une équation et ce que signifie « résoudre »",
    "Résoudre une équation en ajoutant, soustrayant, multipliant ou divisant des deux côtés",
    "Résoudre une équation avec l'inconnue des deux côtés de l'égalité",
    "Vérifier qu'une solution est correcte en la substituant dans l'équation",
    "Traduire un problème concret en équation, puis le résoudre",
  ],
  slides: [
    {
      titre: "C'est quoi une équation ?",
      illustration: "⚖️",
      visuel: "x + 3 = 7",
      contenu: [
        "Une équation est une égalité contenant une inconnue (souvent x)",
        "Résoudre l'équation = trouver la valeur de x qui rend l'égalité vraie",
        "x + 3 = 7 : la solution est x = 4, car 4 + 3 = 7",
        "On peut comparer une équation à une balance équilibrée",
      ],
      voixOff:
        "Une équation est une égalité qui contient une inconnue, le plus souvent notée x. Résoudre une équation, c'est trouver la valeur de x qui rend cette égalité vraie. Par exemple, dans x plus trois égale sept, la solution est x égale quatre, car quatre plus trois font sept. On peut comparer une équation à une balance parfaitement équilibrée.",
    },
    {
      titre: "Ajouter ou soustraire le même nombre",
      illustration: "⚖️",
      visuel: "x + 3 = 7 → x = 7 − 3 = 4",
      contenu: [
        "On peut ajouter ou soustraire le même nombre des deux côtés sans changer l'égalité",
        "x + 3 = 7 → x + 3 − 3 = 7 − 3 → x = 4",
        "x − 5 = 2 → x = 2 + 5 = 7",
        "Astuce rapide : on « fait passer » un terme de l'autre côté en changeant son signe",
      ],
      voixOff:
        "Comme une balance, une équation reste équilibrée si on ajoute ou on soustrait le même nombre des deux côtés. x plus trois égale sept devient x égale sept moins trois, soit x égale quatre. De même, x moins cinq égale deux donne x égale deux plus cinq, soit sept. L'astuce rapide : on peut faire passer un terme de l'autre côté du signe égal, à condition de changer son signe.",
    },
    {
      titre: "Multiplier ou diviser par le même nombre",
      illustration: "✖️",
      visuel: "3x = 12 → x = 4",
      contenu: [
        "On peut multiplier ou diviser les deux côtés par le même nombre non nul",
        "3x = 12 → x = 12 ÷ 3 = 4",
        "x/5 = 6 → x = 6 × 5 = 30",
        "On ne divise jamais par 0 !",
      ],
      voixOff:
        "On peut aussi multiplier ou diviser les deux côtés d'une équation par le même nombre, à condition qu'il ne soit pas nul. Trois x égale douze devient x égale douze divisé par trois, soit quatre. x divisé par cinq égale six donne x égale six fois cinq, soit trente. Attention, on ne divise jamais par zéro.",
    },
    {
      titre: "Équations à deux étapes",
      illustration: "🪜",
      visuel: "3x + 5 = 20",
      contenu: [
        "3x + 5 = 20 : d'abord isoler le terme en x, puis diviser",
        "Étape 1 : 3x = 20 − 5 = 15",
        "Étape 2 : x = 15 ÷ 3 = 5",
        "On vérifie : 3×5 + 5 = 20 ✓",
      ],
      voixOff:
        "Beaucoup d'équations demandent deux étapes. Pour trois x plus cinq égale vingt, on isole d'abord le terme en x : trois x égale vingt moins cinq, soit quinze. Puis on divise : x égale quinze divisé par trois, soit cinq. On vérifie : trois fois cinq plus cinq égale bien vingt.",
    },
    {
      titre: "L'inconnue des deux côtés",
      illustration: "↔️",
      visuel: "5x + 2 = 2x + 11",
      contenu: [
        "On regroupe les x d'un côté et les nombres de l'autre",
        "5x + 2 = 2x + 11 → 5x − 2x = 11 − 2 → 3x = 9",
        "x = 9 ÷ 3 = 3",
        "On vérifie : 5×3+2 = 17 et 2×3+11 = 17 ✓",
      ],
      voixOff:
        "Quand l'inconnue apparaît des deux côtés de l'égalité, on regroupe tous les x d'un côté et tous les nombres de l'autre. Cinq x plus deux égale deux x plus onze devient cinq x moins deux x égale onze moins deux, soit trois x égale neuf. Donc x égale trois. On vérifie : les deux côtés valent bien dix-sept.",
    },
    {
      titre: "Vérifier une solution",
      illustration: "✅",
      visuel: "remplacer x, puis comparer",
      contenu: [
        "On remplace x par la valeur trouvée dans l'équation de départ",
        "Si les deux membres sont égaux, la solution est correcte",
        "Exemple : pour 2x − 3 = 7, x = 5 : 2×5 − 3 = 7 ✓",
        "C'est un excellent réflexe pour éviter les erreurs",
      ],
      voixOff:
        "Une fois la solution trouvée, il est essentiel de la vérifier en la remplaçant dans l'équation de départ. Si les deux côtés donnent la même valeur, la solution est correcte. Pour deux x moins trois égale sept, avec x égal cinq, on obtient deux fois cinq moins trois, soit sept : c'est vérifié. Prends toujours ce réflexe, il évite beaucoup d'erreurs.",
    },
    {
      titre: "Résoudre un problème avec une équation",
      illustration: "🧩",
      visuel: "3x + 4 = 19",
      contenu: [
        "On choisit x pour représenter l'inconnue du problème",
        "On traduit l'énoncé en équation, puis on la résout",
        "Exemple : « Le triple d'un nombre augmenté de 4 vaut 19 » → 3x + 4 = 19 → x = 5",
        "On vérifie que la solution a du sens dans le contexte",
      ],
      voixOff:
        "Une équation sert aussi à résoudre des problèmes concrets. On choisit x pour représenter l'inconnue, puis on traduit l'énoncé en équation. Par exemple, le triple d'un nombre augmenté de quatre vaut dix-neuf se traduit par trois x plus quatre égale dix-neuf, ce qui donne x égale cinq. Il faut toujours vérifier que la solution a du sens dans le contexte du problème.",
    },
    {
      titre: "Pièges à éviter",
      illustration: "⚠️",
      visuel: "toujours la même opération des deux côtés",
      contenu: [
        "On doit toujours faire la MÊME opération des deux côtés de l'égalité",
        "En changeant de côté, un terme change de signe (+ devient −, et inversement)",
        "3x = 12 ne donne PAS x = 12 − 3, mais x = 12 ÷ 3",
        "Ne jamais diviser par 0",
      ],
      voixOff:
        "Attention aux erreurs classiques. Il faut toujours effectuer la même opération des deux côtés de l'égalité. Quand un terme change de côté, il change de signe : plus devient moins, et inversement. Mais attention, trois x égale douze ne donne pas x égale douze moins trois : ici, trois multiplie x, donc il faut diviser, pas soustraire. Et n'oublie jamais qu'on ne peut jamais diviser par zéro.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Une équation est une égalité avec une inconnue ; la résoudre, c'est trouver sa valeur",
        "On peut ajouter, soustraire, multiplier ou diviser (par un nombre non nul) des deux côtés",
        "Avec l'inconnue des deux côtés : regrouper les x ensemble, les nombres ensemble",
        "Toujours vérifier la solution en la remplaçant dans l'équation de départ",
      ],
      voixOff:
        "Résumons. Une équation est une égalité contenant une inconnue, et la résoudre consiste à trouver sa valeur. On peut ajouter, soustraire, multiplier ou diviser par le même nombre non nul des deux côtés de l'égalité, sans jamais la déséquilibrer. Quand l'inconnue apparaît des deux côtés, on regroupe les x ensemble et les nombres ensemble. Et surtout, prends toujours le réflexe de vérifier ta solution en la remplaçant dans l'équation de départ.",
    },
  ],
  fiche: {
    intro:
      "Une équation est une égalité contenant une inconnue. On la résout en isolant progressivement cette inconnue, en effectuant toujours la même opération des deux côtés de l'égalité.",
    sections: [
      {
        titre: "Qu'est-ce qu'une équation ?",
        points: [
          "Une égalité contenant une inconnue, souvent notée x",
          "Résoudre = trouver la valeur de x qui rend l'égalité vraie",
          "On peut comparer une équation à une balance équilibrée",
        ],
      },
      {
        titre: "Les deux règles fondamentales",
        points: [
          "On peut ajouter ou soustraire le même nombre des deux côtés",
          "On peut multiplier ou diviser par le même nombre non nul des deux côtés",
          "Astuce : un terme change de signe quand il change de côté de l'égalité",
        ],
      },
      {
        titre: "Résoudre en plusieurs étapes",
        points: [
          "3x + 5 = 20 → 3x = 15 → x = 5",
          "Avec x des deux côtés : 5x + 2 = 2x + 11 → 3x = 9 → x = 3",
          "Toujours vérifier en remplaçant x par la solution trouvée",
        ],
      },
      {
        titre: "Résoudre un problème",
        points: [
          "On choisit x pour représenter l'inconnue du problème",
          "On traduit l'énoncé en équation, puis on la résout",
          "On vérifie que la solution a un sens dans le contexte",
        ],
      },
    ],
    audio:
      "Fiche de révision : les équations du premier degré. Une équation est une égalité contenant une inconnue, généralement notée x. La résoudre, c'est trouver la valeur de x qui rend cette égalité vraie. Pour cela, on utilise deux règles fondamentales : on peut ajouter ou soustraire le même nombre des deux côtés, et on peut multiplier ou diviser par le même nombre non nul des deux côtés. Un terme change de signe quand il change de côté de l'égalité. Quand l'inconnue apparaît des deux côtés, on regroupe les termes en x d'un côté et les nombres de l'autre. Une fois la solution trouvée, il faut toujours la vérifier en la remplaçant dans l'équation de départ. Enfin, pour résoudre un problème concret, on choisit une lettre pour l'inconnue, on traduit l'énoncé en équation, on la résout, puis on vérifie que le résultat a bien un sens.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une équation ?", verso: "Une égalité contenant une inconnue. La résoudre, c'est trouver la valeur qui la rend vraie." },
    { recto: "Règle 1 : addition/soustraction ?", verso: "On peut ajouter ou soustraire le même nombre des deux côtés de l'équation." },
    { recto: "Règle 2 : multiplication/division ?", verso: "On peut multiplier ou diviser par le même nombre non nul des deux côtés." },
    { recto: "Résous 3x + 5 = 20.", verso: "3x = 15 puis x = 5. On vérifie : 3×5+5 = 20." },
    { recto: "Comment résoudre avec x des deux côtés ?", verso: "On regroupe les x d'un côté et les nombres de l'autre. Ex : 5x+2=2x+11 → 3x=9 → x=3." },
    { recto: "Comment vérifier une solution ?", verso: "On remplace x par la valeur trouvée dans l'équation de départ et on compare les deux côtés." },
    { recto: "Comment résoudre un problème avec une équation ?", verso: "On choisit x, on traduit l'énoncé en équation, on résout, puis on vérifie le sens du résultat." },
    { recto: "Piège : 3x = 12 donne x = ?", verso: "x = 12 ÷ 3 = 4 (division, pas soustraction, car 3 multiplie x)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous x + 5 = 12.",
      choix: ["x = 7", "x = 17", "x = −7", "x = 60"],
      bonneReponse: 0,
      explication: "x = 12 − 5 = 7.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous 4x = 20.",
      choix: ["x = 5", "x = 16", "x = 24", "x = 80"],
      bonneReponse: 0,
      explication: "x = 20 ÷ 4 = 5.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Résous x − 8 = 3.",
      reponse: "x = 11",
      explication: "x = 3 + 8 = 11.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous x/3 = 7.",
      choix: ["x = 21", "x = 4", "x = 10", "x = 2,33"],
      bonneReponse: 0,
      explication: "x = 7 × 3 = 21.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous 2x + 3 = 11.",
      reponse: "x = 4",
      explication: "2x = 11 − 3 = 8, puis x = 8 ÷ 2 = 4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous 5x − 4 = 16.",
      choix: ["x = 4", "x = 3", "x = 20", "x = 12"],
      bonneReponse: 0,
      explication: "5x = 16 + 4 = 20, puis x = 20 ÷ 5 = 4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous 3x − 7 = 2x + 5.",
      reponse: "x = 12",
      explication: "3x − 2x = 5 + 7, donc x = 12. Vérification : 3×12−7=29 et 2×12+5=29.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous 4x + 1 = x + 10.",
      choix: ["x = 3", "x = 9", "x = 11", "x = 2,25"],
      bonneReponse: 0,
      explication: "4x − x = 10 − 1, donc 3x = 9, puis x = 3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous 2(x + 3) = 16.",
      reponse: "x = 5",
      explication: "On développe : 2x + 6 = 16, donc 2x = 10, puis x = 5.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous 5x − 3 = 3x + 9.",
      reponse: "x = 6",
      explication: "5x − 3x = 9 + 3, donc 2x = 12, puis x = 6.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Résous 3(x − 1) = 2x + 4.",
      choix: ["x = 7", "x = 1", "x = 3", "x = −1"],
      bonneReponse: 0,
      explication: "On développe : 3x − 3 = 2x + 4, donc 3x − 2x = 4 + 3, soit x = 7.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Le double d'un nombre, diminué de 7, vaut 15. Quel est ce nombre ?",
      reponse: "x = 11",
      explication: "On traduit : 2x − 7 = 15, donc 2x = 22, puis x = 11.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous x + 9 = 14.",
      choix: ["x = 5", "x = 23", "x = −5", "x = 126"],
      bonneReponse: 0,
      explication: "x = 14 − 9 = 5.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Résous 6x = 42.",
      reponse: "x = 7",
      explication: "x = 42 ÷ 6 = 7.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous 2x + 5 = 17.",
      choix: ["x = 6", "x = 11", "x = 22", "x = 8,5"],
      bonneReponse: 0,
      explication: "2x = 17 − 5 = 12, puis x = 6.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous 4x − 1 = 2x + 9.",
      reponse: "x = 5",
      explication: "4x − 2x = 9 + 1, donc 2x = 10, puis x = 5.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous 3(x + 2) = 2x + 13.",
      reponse: "x = 7",
      explication: "On développe : 3x + 6 = 2x + 13, donc 3x − 2x = 13 − 6, soit x = 7.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les équations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Résous x + 6 = 13.",
          choix: ["x = 7", "x = 19", "x = −7", "x = 78"],
          bonneReponse: 0,
          explication: "x = 13 − 6 = 7.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Résous 5x = 35.",
          reponse: "x = 7",
          explication: "x = 35 ÷ 5 = 7.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Résous 3x − 2 = 13.",
          choix: ["x = 5", "x = 11/3", "x = 15", "x = 33"],
          bonneReponse: 0,
          explication: "3x = 13 + 2 = 15, puis x = 5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous 6x + 1 = x + 16.",
          reponse: "x = 3",
          explication: "6x − x = 16 − 1, donc 5x = 15, puis x = 3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Résous 4(x − 2) = 2x + 6.",
          reponse: "x = 7",
          explication: "On développe : 4x − 8 = 2x + 6, donc 4x − 2x = 6 + 8, soit x = 7.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "La somme de trois fois un nombre et de 8 vaut 29. Quel est ce nombre ?",
          reponse: "x = 7",
          explication: "On traduit : 3x + 8 = 29, donc 3x = 21, puis x = 7.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les équations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Résous x − 4 = 9.",
          choix: ["x = 13", "x = 5", "x = −13", "x = 36"],
          bonneReponse: 0,
          explication: "x = 9 + 4 = 13.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Résous x/4 = 6.",
          reponse: "x = 24",
          explication: "x = 6 × 4 = 24.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Résous 2x + 7 = 19.",
          choix: ["x = 6", "x = 13", "x = 26", "x = 12"],
          bonneReponse: 0,
          explication: "2x = 19 − 7 = 12, puis x = 6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous 7x − 3 = 4x + 15.",
          reponse: "x = 6",
          explication: "7x − 4x = 15 + 3, donc 3x = 18, puis x = 6.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Résous 5(x − 1) = 3x + 7.",
          reponse: "x = 6",
          explication: "On développe : 5x − 5 = 3x + 7, donc 5x − 3x = 7 + 5, soit 2x = 12, puis x = 6.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un nombre diminué de 5, puis multiplié par 2, donne 18. Quel est ce nombre ?",
          reponse: "x = 14",
          explication: "On traduit : 2(x − 5) = 18, donc 2x − 10 = 18, soit 2x = 28, puis x = 14.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une équation est une égalité contenant une inconnue ; la résoudre, c'est trouver la valeur qui la vérifie.",
    "Règle 1 : on peut ajouter ou soustraire le même nombre des deux côtés de l'équation.",
    "Règle 2 : on peut multiplier ou diviser par le même nombre non nul des deux côtés.",
    "Avec l'inconnue des deux côtés, on regroupe les termes en x d'un côté et les nombres de l'autre.",
    "Toujours vérifier la solution trouvée en la remplaçant dans l'équation de départ.",
    "Pour un problème : choisir x, traduire l'énoncé en équation, résoudre, puis vérifier que le résultat a du sens.",
  ],
},
{
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
},
{
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
},
{
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
},
{
  slug: "puissances",
  titre: "Les puissances",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Comprendre la notation puissance, maîtriser les puissances de 10 et la notation scientifique, et appliquer les règles de calcul sur les exposants.",
  objectifs: [
    "Savoir ce que signifie la notation aⁿ et calculer des puissances simples",
    "Connaître les puissances de 10, positives et négatives",
    "Écrire un nombre en notation scientifique",
    "Appliquer les règles de calcul : produit, quotient, puissance de puissance",
    "Utiliser les préfixes (kilo, milli...) liés aux puissances de 10",
  ],
  slides: [
    {
      titre: "C'est quoi, une puissance ?",
      illustration: "✖️",
      visuel: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
      contenu: [
        "aⁿ = a multiplié par lui-même n fois",
        "a est la base, n est l'exposant",
        "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
        "C'est une écriture raccourcie d'une multiplication répétée",
      ],
      voixOff:
        "Une puissance, c'est une écriture raccourcie d'une multiplication répétée. a puissance n, c'est a multiplié par lui-même n fois. On appelle a la base et n l'exposant. Par exemple, deux puissance cinq, c'est deux multiplié par lui-même cinq fois, ce qui donne trente-deux.",
    },
    {
      titre: "Attention aux pièges !",
      illustration: "⚠️",
      visuel: "2³ = 8, PAS 6 !",
      contenu: [
        "2³ = 2 × 2 × 2 = 8, et non 2 × 3 = 6",
        "a¹ = a (exemple : 7¹ = 7)",
        "a⁰ = 1 pour tout nombre a non nul (exemple : 7⁰ = 1)",
        "(−2)⁴ = 16 mais −2⁴ = −16 : les parenthèses comptent !",
      ],
      voixOff:
        "Attention à l'erreur la plus fréquente : deux puissance trois, c'est deux fois deux fois deux, donc huit, et surtout pas deux fois trois. Retiens aussi deux cas particuliers : un nombre puissance un, c'est le nombre lui-même, et un nombre non nul puissance zéro vaut toujours un. Enfin, les parenthèses comptent : moins deux, entre parenthèses, puissance quatre, égale seize, alors que moins deux puissance quatre, sans parenthèses, égale moins seize.",
    },
    {
      titre: "Les puissances de 10",
      illustration: "🔟",
      visuel: "10⁴ = 10 000",
      contenu: [
        "10ⁿ = 1 suivi de n zéros",
        "10² = 100 ; 10³ = 1 000 ; 10⁶ = 1 000 000",
        "Multiplier par 10ⁿ = décaler la virgule de n rangs vers la droite",
        "Très utile pour les grands nombres (astronomie, informatique...)",
      ],
      voixOff:
        "Les puissances de dix sont les plus utilisées. Dix puissance n, c'est tout simplement un un suivi de n zéros. Dix puissance quatre, c'est dix mille. Multiplier un nombre par dix puissance n revient à décaler sa virgule de n rangs vers la droite. C'est très pratique pour écrire les grands nombres, comme les distances en astronomie.",
    },
    {
      titre: "Les exposants négatifs",
      illustration: "🔬",
      visuel: "10⁻³ = 0,001",
      contenu: [
        "a⁻ⁿ est l'inverse de aⁿ : a⁻ⁿ = 1/aⁿ",
        "10⁻³ = 1/10³ = 1/1000 = 0,001",
        "2⁻³ = 1/2³ = 1/8 = 0,125",
        "Les exposants négatifs servent aux nombres très petits",
      ],
      voixOff:
        "Un exposant négatif ne donne pas un nombre négatif ! a puissance moins n, c'est l'inverse de a puissance n, c'est-à-dire un divisé par a puissance n. Dix puissance moins trois, c'est un millième, soit zéro virgule zéro zéro un. Les exposants négatifs servent à écrire les nombres très petits, comme la taille d'une bactérie.",
    },
    {
      titre: "La notation scientifique",
      illustration: "🚀",
      visuel: "45 000 = 4,5 × 10⁴",
      contenu: [
        "Écriture : a × 10ⁿ avec 1 ≤ a < 10",
        "45 000 = 4,5 × 10⁴",
        "0,00072 = 7,2 × 10⁻⁴",
        "Un seul chiffre non nul avant la virgule !",
      ],
      voixOff:
        "La notation scientifique permet d'écrire tous les nombres de la même façon : un nombre a compris entre un inclus et dix exclu, multiplié par une puissance de dix. Quarante-cinq mille s'écrit quatre virgule cinq fois dix puissance quatre. Zéro virgule zéro zéro zéro soixante-douze s'écrit sept virgule deux fois dix puissance moins quatre. Retiens la règle : un seul chiffre non nul avant la virgule.",
    },
    {
      titre: "Produit de puissances",
      illustration: "➕",
      visuel: "aᵐ × aⁿ = aᵐ⁺ⁿ",
      contenu: [
        "Même base : on ADDITIONNE les exposants",
        "3⁴ × 3² = 3⁴⁺² = 3⁶",
        "Logique : (3×3×3×3) × (3×3) = six facteurs 3",
        "⚠️ Valable uniquement si les bases sont identiques",
      ],
      voixOff:
        "Pour multiplier deux puissances d'une même base, on additionne les exposants. Trois puissance quatre fois trois puissance deux égale trois puissance six. C'est logique : quatre facteurs trois multipliés par deux facteurs trois, cela fait six facteurs trois en tout. Attention, cette règle ne fonctionne que si les bases sont identiques.",
    },
    {
      titre: "Quotient de puissances",
      illustration: "➗",
      visuel: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
      contenu: [
        "Même base : on SOUSTRAIT les exposants",
        "10⁷ ÷ 10⁴ = 10⁷⁻⁴ = 10³",
        "Logique : les facteurs communs se simplifient",
        "Le résultat peut avoir un exposant négatif : 10² ÷ 10⁵ = 10⁻³",
      ],
      voixOff:
        "Pour diviser deux puissances d'une même base, on soustrait les exposants. Dix puissance sept divisé par dix puissance quatre égale dix puissance trois, car quatre facteurs dix se simplifient en haut et en bas. Et si l'exposant du bas est plus grand, le résultat a un exposant négatif : dix puissance deux divisé par dix puissance cinq égale dix puissance moins trois.",
    },
    {
      titre: "Puissance de puissance",
      illustration: "🎁",
      visuel: "(aᵐ)ⁿ = aᵐⁿ",
      contenu: [
        "On MULTIPLIE les exposants",
        "(10³)⁴ = 10³ˣ⁴ = 10¹²",
        "Logique : 10³ × 10³ × 10³ × 10³ = 10¹²",
        "Récap : produit → +, quotient → −, puissance de puissance → ×",
      ],
      voixOff:
        "Pour élever une puissance à une puissance, on multiplie les exposants. Dix puissance trois, le tout puissance quatre, égale dix puissance douze. En effet, c'est dix puissance trois multiplié par lui-même quatre fois. Pour t'y retrouver : produit, on additionne ; quotient, on soustrait ; puissance de puissance, on multiplie.",
    },
    {
      titre: "Les préfixes du quotidien",
      illustration: "📐",
      visuel: "kilo = 10³ ; milli = 10⁻³",
      contenu: [
        "kilo = 10³ (1 km = 10³ m) ; méga = 10⁶ ; giga = 10⁹",
        "centi = 10⁻² (1 cm = 10⁻² m)",
        "milli = 10⁻³ ; micro = 10⁻⁶ ; nano = 10⁻⁹",
        "Un gigaoctet = 10⁹ octets, un nanomètre = 10⁻⁹ m",
      ],
      voixOff:
        "Les puissances de dix se cachent dans les unités de tous les jours. Kilo signifie dix puissance trois : un kilomètre, c'est mille mètres. Méga, c'est dix puissance six, et giga, dix puissance neuf, comme dans gigaoctet. Du côté des petits nombres : centi, c'est dix puissance moins deux, milli, dix puissance moins trois, micro, dix puissance moins six, et nano, dix puissance moins neuf.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "aⁿ = a multiplié par lui-même n fois ; a⁰ = 1 ; a⁻ⁿ = 1/aⁿ",
        "10ⁿ = 1 suivi de n zéros ; 10⁻ⁿ pour les nombres très petits",
        "Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10",
        "Règles : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐⁿ",
      ],
      voixOff:
        "Résumons. Une puissance est une multiplication répétée : a puissance n, c'est a multiplié par lui-même n fois. Un exposant zéro donne un, un exposant négatif donne un inverse. Dix puissance n, c'est un un suivi de n zéros. La notation scientifique s'écrit a fois dix puissance n, avec a entre un et dix. Et pour les calculs : produit, on additionne les exposants ; quotient, on les soustrait ; puissance de puissance, on les multiplie. Bravo, tu maîtrises maintenant les puissances !",
    },
  ],
  fiche: {
    intro:
      "La puissance aⁿ est le produit de n facteurs tous égaux à a. Les puissances de 10 et la notation scientifique permettent d'écrire simplement les très grands et les très petits nombres.",
    sections: [
      {
        titre: "Définition et cas particuliers",
        points: [
          "aⁿ = a × a × ... × a (n facteurs) ; a est la base, n l'exposant",
          "2⁵ = 32 ; attention 2³ = 8 et non 6 !",
          "a¹ = a et a⁰ = 1 (pour a non nul)",
          "a⁻ⁿ = 1/aⁿ (l'inverse de aⁿ) ; exemple : 2⁻³ = 1/8 = 0,125",
        ],
      },
      {
        titre: "Puissances de 10",
        points: [
          "10ⁿ = 1 suivi de n zéros (10⁴ = 10 000)",
          "10⁻ⁿ = 0,00...1 avec le 1 au n-ième rang après la virgule (10⁻³ = 0,001)",
          "Multiplier par 10ⁿ décale la virgule de n rangs vers la droite",
        ],
      },
      {
        titre: "Notation scientifique",
        points: [
          "Forme a × 10ⁿ avec 1 ≤ a < 10 (un seul chiffre non nul avant la virgule)",
          "45 000 = 4,5 × 10⁴ ; 0,00072 = 7,2 × 10⁻⁴",
          "Exposant positif pour les grands nombres, négatif pour les petits",
        ],
      },
      {
        titre: "Règles de calcul (même base)",
        points: [
          "Produit : aᵐ × aⁿ = aᵐ⁺ⁿ (3⁴ × 3² = 3⁶)",
          "Quotient : aᵐ ÷ aⁿ = aᵐ⁻ⁿ (10⁷ ÷ 10⁴ = 10³)",
          "Puissance de puissance : (aᵐ)ⁿ = aᵐⁿ ((10³)⁴ = 10¹²)",
        ],
      },
      {
        titre: "Préfixes des unités",
        points: [
          "kilo = 10³ ; méga = 10⁶ ; giga = 10⁹",
          "centi = 10⁻² ; milli = 10⁻³ ; micro = 10⁻⁶ ; nano = 10⁻⁹",
          "Exemples : 1 km = 10³ m ; 1 mm = 10⁻³ m ; 1 Go = 10⁹ octets",
        ],
      },
    ],
    audio:
      "Fiche de révision : les puissances. La puissance a exposant n est le produit de n facteurs tous égaux à a : deux puissance cinq égale trente-deux. Retiens les cas particuliers : a puissance un égale a, a puissance zéro égale un, et a puissance moins n est l'inverse de a puissance n. Dix puissance n s'écrit un suivi de n zéros, et dix puissance moins n est un nombre très petit : dix puissance moins trois égale zéro virgule zéro zéro un. La notation scientifique écrit tout nombre sous la forme a fois dix puissance n, avec a compris entre un inclus et dix exclu. Pour calculer avec une même base : dans un produit, on additionne les exposants ; dans un quotient, on les soustrait ; pour une puissance de puissance, on les multiplie. Enfin, les préfixes traduisent des puissances de dix : kilo pour dix puissance trois, milli pour dix puissance moins trois, giga pour dix puissance neuf.",
  },
  memoCards: [
    { recto: "Que signifie aⁿ ?", verso: "a multiplié par lui-même n fois. Ex : 2⁵ = 2×2×2×2×2 = 32." },
    { recto: "a⁰ = ? et a¹ = ?", verso: "a⁰ = 1 (pour a non nul) et a¹ = a." },
    { recto: "Que vaut a⁻ⁿ ?", verso: "L'inverse de aⁿ : a⁻ⁿ = 1/aⁿ. Ex : 2⁻³ = 1/8." },
    { recto: "10⁶ = ?", verso: "1 000 000 : un 1 suivi de 6 zéros." },
    { recto: "10⁻³ = ?", verso: "0,001 (un millième)." },
    { recto: "aᵐ × aⁿ = ?", verso: "aᵐ⁺ⁿ : on additionne les exposants. Ex : 3⁴ × 3² = 3⁶." },
    { recto: "aᵐ ÷ aⁿ = ?", verso: "aᵐ⁻ⁿ : on soustrait les exposants. Ex : 10⁷ ÷ 10⁴ = 10³." },
    { recto: "(aᵐ)ⁿ = ?", verso: "aᵐⁿ : on multiplie les exposants. Ex : (10³)⁴ = 10¹²." },
    { recto: "Notation scientifique : la règle ?", verso: "a × 10ⁿ avec 1 ≤ a < 10. Ex : 45 000 = 4,5 × 10⁴." },
    { recto: "kilo, milli, giga = quelles puissances ?", verso: "kilo = 10³ ; milli = 10⁻³ ; giga = 10⁹." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que vaut 5³ ?",
      choix: ["15", "125", "53", "243"],
      bonneReponse: 1,
      explication: "5³ = 5 × 5 × 5 = 125. Attention à ne pas calculer 5 × 3 = 15 !",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que vaut 10⁴ ?",
      choix: ["40", "1 000", "10 000", "100 000"],
      bonneReponse: 2,
      explication: "10⁴ = 1 suivi de 4 zéros = 10 000.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris 2 × 2 × 2 × 2 × 2 sous forme d'une puissance, puis calcule.",
      reponse: "2⁵ = 32",
      explication: "Il y a 5 facteurs égaux à 2, donc 2⁵. Et 2⁵ = 32.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que vaut 7⁰ ?",
      choix: ["0", "7", "1", "70"],
      bonneReponse: 2,
      explication: "Tout nombre non nul élevé à la puissance 0 vaut 1.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne l'écriture décimale de 10⁻³.",
      reponse: "0,001",
      explication: "10⁻³ = 1/10³ = 1/1000 = 0,001.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "3⁴ × 3² = ?",
      choix: ["3⁸", "9⁶", "3⁶", "3²"],
      bonneReponse: 2,
      explication: "Même base : on additionne les exposants. 3⁴ × 3² = 3⁴⁺² = 3⁶.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris 45 000 en notation scientifique.",
      reponse: "4,5 × 10⁴",
      explication: "On place la virgule après le premier chiffre non nul : 4,5, puis on compte le décalage : 4 rangs, donc × 10⁴.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule 10⁷ ÷ 10⁴ et donne le résultat en écriture décimale.",
      reponse: "10³ = 1 000",
      explication: "Quotient de puissances de même base : on soustrait les exposants, 7 − 4 = 3, donc 10³ = 1 000.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris (10³)⁴ sous la forme d'une seule puissance de 10.",
      reponse: "10¹²",
      explication: "Puissance de puissance : on multiplie les exposants, 3 × 4 = 12, donc 10¹².",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris 0,00072 en notation scientifique.",
      reponse: "7,2 × 10⁻⁴",
      explication: "Le premier chiffre non nul est 7 : on écrit 7,2. La virgule a été décalée de 4 rangs vers la droite, donc l'exposant est −4.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Que vaut (2⁵ × 2³) ÷ 2⁶ ?",
      choix: ["2", "4", "8", "16"],
      bonneReponse: 1,
      explication: "2⁵ × 2³ = 2⁸, puis 2⁸ ÷ 2⁶ = 2² = 4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un virus mesure 2 × 10⁻⁷ m. Combien de virus faut-il aligner pour atteindre 1 mm (soit 10⁻³ m) ?",
      reponse: "5 000 virus",
      explication: "10⁻³ ÷ (2 × 10⁻⁷) = (1/2) × 10⁻³⁻⁽⁻⁷⁾ = 0,5 × 10⁴ = 5 000.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "2⁴ = ?",
      choix: ["8", "16", "24", "6"],
      bonneReponse: 1,
      explication: "2⁴ = 2 × 2 × 2 × 2 = 16.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris 10⁵ en écriture décimale.",
      reponse: "100 000",
      explication: "10⁵ = 1 suivi de 5 zéros.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris 5⁶ × 5⁻² sous la forme d'une seule puissance de 5.",
      reponse: "5⁴",
      explication: "On additionne les exposants : 6 + (−2) = 4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la notation scientifique de 3 200 ?",
      choix: ["32 × 10²", "3,2 × 10³", "0,32 × 10⁴", "3,2 × 10²"],
      bonneReponse: 1,
      explication: "Il faut 1 ≤ a < 10 : 3 200 = 3,2 × 10³. Les écritures 32 × 10² et 0,32 × 10⁴ sont égales mais ne respectent pas la règle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Exprime 1 km en mètres à l'aide d'une puissance de 10, puis 1 mm en mètres.",
      reponse: "1 km = 10³ m et 1 mm = 10⁻³ m",
      explication: "kilo = 10³ (mille) et milli = 10⁻³ (un millième).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les puissances",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que vaut 4² ?",
          choix: ["8", "16", "42", "24"],
          bonneReponse: 1,
          explication: "4² = 4 × 4 = 16.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Écris 10 000 sous la forme d'une puissance de 10.",
          reponse: "10⁴",
          explication: "10 000 = 1 suivi de 4 zéros = 10⁴.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule 2⁻³ et donne le résultat en écriture fractionnaire puis décimale.",
          reponse: "2⁻³ = 1/8 = 0,125",
          explication: "2⁻³ est l'inverse de 2³ = 8, donc 1/8 = 0,125.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris 7⁵ × 7³ sous la forme d'une seule puissance de 7.",
          reponse: "7⁸",
          explication: "Produit de puissances de même base : on additionne les exposants, 5 + 3 = 8.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris 0,0056 en notation scientifique.",
          reponse: "5,6 × 10⁻³",
          explication: "0,0056 = 5,6 ÷ 1000 = 5,6 × 10⁻³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "La distance Terre-Soleil est d'environ 150 000 000 km. Écris cette distance en notation scientifique, en km puis en m.",
          reponse: "1,5 × 10⁸ km = 1,5 × 10¹¹ m",
          explication: "150 000 000 = 1,5 × 10⁸. Comme 1 km = 10³ m, on a 1,5 × 10⁸ × 10³ = 1,5 × 10¹¹ m.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les puissances",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle écriture vaut 1 000 000 ?",
          choix: ["10⁵", "6¹⁰", "10⁶", "10⁷"],
          bonneReponse: 2,
          explication: "1 000 000 = 1 suivi de 6 zéros = 10⁶.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule 3³.",
          reponse: "27",
          explication: "3³ = 3 × 3 × 3 = 27 (et non 3 × 3 = 9 ni 3 + 3 + 3 = 9).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris 10⁹ ÷ 10⁵ sous la forme d'une puissance de 10, puis en écriture décimale.",
          reponse: "10⁴ = 10 000",
          explication: "On soustrait les exposants : 9 − 5 = 4, donc 10⁴ = 10 000.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "(5²)³ = ?",
          choix: ["5⁵", "5⁶", "5⁸", "25⁶"],
          bonneReponse: 1,
          explication: "Puissance de puissance : on multiplie les exposants, 2 × 3 = 6, donc 5⁶.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule 8 × 10⁵ + 3 × 10⁴ et écris le résultat en notation scientifique.",
          reponse: "8,3 × 10⁵",
          explication: "8 × 10⁵ = 800 000 et 3 × 10⁴ = 30 000, donc 830 000 = 8,3 × 10⁵.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une bactérie se divise en deux toutes les heures. On part d'une seule bactérie. Combien y en a-t-il après 10 heures ? Donne le résultat sous forme de puissance puis en écriture décimale.",
          reponse: "2¹⁰ = 1 024 bactéries",
          explication: "Le nombre double 10 fois : 2¹⁰ = 1 024.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "aⁿ = a multiplié par lui-même n fois : c'est une multiplication répétée, pas a × n.",
    "Cas particuliers : a¹ = a, a⁰ = 1, et a⁻ⁿ = 1/aⁿ (un exposant négatif donne un inverse, pas un nombre négatif).",
    "10ⁿ = 1 suivi de n zéros ; 10⁻ⁿ sert aux nombres très petits (10⁻³ = 0,001).",
    "Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10 (un seul chiffre non nul avant la virgule).",
    "Règles de calcul (même base) : produit → on additionne les exposants, quotient → on soustrait, puissance de puissance → on multiplie.",
    "Erreur à éviter absolument : écrire 2³ = 6. Non ! 2³ = 2 × 2 × 2 = 8.",
  ],
},
{
  slug: "pyramides-cones",
  titre: "Pyramides et cônes",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Découvrir le vocabulaire des pyramides et des cônes de révolution, et apprendre à calculer leur volume.",
  objectifs: [
    "Connaître le vocabulaire d'une pyramide et d'un cône de révolution",
    "Connaître et utiliser la formule du volume d'une pyramide",
    "Connaître et utiliser la formule du volume d'un cône",
    "Comprendre le lien entre le patron d'un solide et sa surface",
    "Comparer le volume d'une pyramide (ou d'un cône) avec celui d'un prisme (ou d'un cylindre) de même base et même hauteur",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une pyramide ?",
      illustration: "🔺",
      visuel: "base + sommet + hauteur",
      contenu: [
        "Une pyramide a une base polygonale et des faces triangulaires qui se rejoignent en un sommet",
        "La hauteur est la distance entre le sommet et le plan de la base, mesurée perpendiculairement",
        "On nomme une pyramide selon la forme de sa base (pyramide à base carrée, triangulaire...)",
        "Exemple célèbre : les pyramides d'Égypte, à base carrée",
      ],
      voixOff:
        "Une pyramide est un solide dont la base est un polygone, et dont les faces latérales sont des triangles qui se rejoignent tous en un même point, le sommet. La hauteur est la distance entre ce sommet et le plan de la base, mesurée perpendiculairement. On nomme une pyramide selon la forme de sa base : pyramide à base carrée, à base triangulaire, et ainsi de suite. Les pyramides d'Égypte sont un exemple célèbre de pyramides à base carrée.",
    },
    {
      titre: "Qu'est-ce qu'un cône de révolution ?",
      illustration: "🍦",
      visuel: "base circulaire + sommet",
      contenu: [
        "Un cône de révolution a une base circulaire et un sommet",
        "La hauteur relie le sommet au centre du cercle de base, perpendiculairement",
        "La génératrice est le segment qui relie le sommet à un point du cercle de base",
        "On obtient un cône en faisant tourner un triangle rectangle autour d'un de ses côtés",
      ],
      voixOff:
        "Un cône de révolution est un solide dont la base est un cercle, et qui possède un sommet. La hauteur relie ce sommet au centre du cercle de base, perpendiculairement. La génératrice est le segment qui relie le sommet à un point quelconque du cercle de base. On peut construire un cône en faisant tourner un triangle rectangle autour d'un de ses côtés, comme une toupie.",
    },
    {
      titre: "Le volume d'une pyramide",
      illustration: "📐",
      visuel: "V = (aire base × hauteur) / 3",
      contenu: [
        "V = (aire de la base × hauteur) ÷ 3",
        "Une pyramide a un volume 3 fois plus petit qu'un prisme de même base et de même hauteur",
        "L'aire de la base dépend de la forme (carré, triangle, rectangle...)",
        "Le résultat s'exprime en unités de volume (cm³, m³...)",
      ],
      voixOff:
        "Le volume d'une pyramide se calcule ainsi : on multiplie l'aire de la base par la hauteur, puis on divise par trois. Une pyramide a donc un volume trois fois plus petit qu'un prisme de même base et de même hauteur. L'aire de la base dépend bien sûr de sa forme : carrée, triangulaire, rectangulaire. Le résultat s'exprime toujours en unités de volume, comme le centimètre cube ou le mètre cube.",
    },
    {
      titre: "Exemple de calcul de volume de pyramide",
      illustration: "🧮",
      visuel: "base carrée 6 cm, hauteur 10 cm",
      contenu: [
        "Pyramide à base carrée de côté 6 cm, hauteur 10 cm",
        "Aire de la base = 6 × 6 = 36 cm²",
        "V = (36 × 10) ÷ 3 = 360 ÷ 3 = 120 cm³",
        "On calcule toujours l'aire de la base avant d'appliquer la formule",
      ],
      voixOff:
        "Prenons une pyramide à base carrée de six centimètres de côté, et de dix centimètres de hauteur. On calcule d'abord l'aire de la base : six fois six, soit trente-six centimètres carrés. Puis on applique la formule : trente-six fois dix, divisé par trois, soit trois cent soixante divisé par trois, soit cent vingt centimètres cubes. Retiens bien qu'il faut toujours calculer l'aire de la base avant d'appliquer la formule du volume.",
    },
    {
      titre: "Le volume d'un cône",
      illustration: "🍦",
      visuel: "V = (π × r² × h) / 3",
      contenu: [
        "V = (π × r² × hauteur) ÷ 3",
        "π × r² est l'aire du disque de base",
        "Comme pour la pyramide, on divise par 3 par rapport au cylindre de même base",
        "On utilise souvent π ≈ 3,14",
      ],
      voixOff:
        "Le volume d'un cône suit une formule très proche : pi fois le rayon au carré, fois la hauteur, le tout divisé par trois. Pi fois le rayon au carré, c'est simplement l'aire du disque de base. Comme pour la pyramide, on divise par trois par rapport à un cylindre de même base et même hauteur. On utilise souvent la valeur approchée pi environ trois virgule quatorze.",
    },
    {
      titre: "Exemple de calcul de volume de cône",
      illustration: "🧮",
      visuel: "r = 3 cm, h = 8 cm",
      contenu: [
        "Cône de rayon 3 cm et de hauteur 8 cm",
        "V = (π × 3² × 8) ÷ 3 = (π × 9 × 8) ÷ 3 = 72π ÷ 3 = 24π",
        "Avec π ≈ 3,14 : V ≈ 24 × 3,14 ≈ 75,4 cm³",
        "On peut laisser le résultat en fonction de π ou donner une valeur arrondie",
      ],
      voixOff:
        "Prenons un cône de trois centimètres de rayon et de huit centimètres de hauteur. On calcule : pi fois trois au carré, fois huit, divisé par trois, ce qui donne pi fois neuf fois huit, divisé par trois, soit soixante-douze pi divisé par trois, soit vingt-quatre pi. En prenant pi environ égal à trois virgule quatorze, on obtient environ soixante-quinze virgule quatre centimètres cubes. On peut laisser le résultat en fonction de pi, ou donner une valeur arrondie.",
    },
    {
      titre: "Le patron d'une pyramide et d'un cône",
      illustration: "✂️",
      visuel: "patron = figure à plat",
      contenu: [
        "Le patron est la figure plane qu'on obtient en « dépliant » le solide",
        "Le patron d'une pyramide : la base + autant de triangles que de côtés",
        "Le patron d'un cône : un disque (la base) + un secteur circulaire (la surface latérale)",
        "Le patron permet de calculer l'aire totale de la surface du solide",
      ],
      voixOff:
        "Le patron d'un solide, c'est la figure plane obtenue en le dépliant complètement. Le patron d'une pyramide est composé de sa base, plus un triangle pour chaque côté de cette base. Le patron d'un cône est composé d'un disque, qui est la base, et d'un secteur circulaire, qui représente la surface latérale. Le patron permet de calculer l'aire totale de la surface du solide.",
    },
    {
      titre: "Comparer avec le prisme et le cylindre",
      illustration: "⚖️",
      visuel: "V pyramide = V prisme ÷ 3",
      contenu: [
        "Un prisme droit a un volume = aire de la base × hauteur",
        "Une pyramide de même base et même hauteur a un volume 3 fois plus petit",
        "Un cylindre a un volume = π × r² × hauteur",
        "Un cône de même base et même hauteur a lui aussi un volume 3 fois plus petit",
      ],
      voixOff:
        "Il est utile de comparer ces solides à ceux que tu connais déjà. Un prisme droit a un volume égal à l'aire de la base multipliée par la hauteur. Une pyramide de même base et de même hauteur a un volume trois fois plus petit. De même, un cylindre a un volume égal à pi fois le rayon au carré, fois la hauteur. Un cône de même base et de même hauteur a lui aussi un volume trois fois plus petit que ce cylindre.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Pyramide : base polygonale + faces triangulaires se rejoignant en un sommet",
        "Cône de révolution : base circulaire + sommet, relié par la hauteur",
        "V(pyramide) = (aire base × hauteur) ÷ 3",
        "V(cône) = (π × r² × hauteur) ÷ 3",
      ],
      voixOff:
        "Résumons. Une pyramide a une base polygonale et des faces triangulaires qui se rejoignent en un sommet. Un cône de révolution a une base circulaire et un sommet, reliés par la hauteur. Le volume d'une pyramide s'obtient en multipliant l'aire de la base par la hauteur, puis en divisant par trois. Le volume d'un cône s'obtient en multipliant pi, le rayon au carré et la hauteur, puis en divisant par trois. Ces deux solides ont toujours un volume trois fois plus petit qu'un prisme ou un cylindre de même base et de même hauteur.",
    },
  ],
  fiche: {
    intro:
      "La pyramide et le cône de révolution sont des solides qui se terminent en un sommet. Leur volume s'obtient toujours en divisant par 3 le produit de l'aire de la base par la hauteur.",
    sections: [
      {
        titre: "Vocabulaire de la pyramide et du cône",
        points: [
          "Pyramide : base polygonale, faces triangulaires, sommet, hauteur perpendiculaire à la base",
          "Cône de révolution : base circulaire, sommet, hauteur, génératrice (segment sommet-cercle)",
        ],
      },
      {
        titre: "Volume de la pyramide",
        points: [
          "V = (aire de la base × hauteur) ÷ 3",
          "Exemple : base carrée de 6 cm, hauteur 10 cm → V = (36 × 10) ÷ 3 = 120 cm³",
        ],
      },
      {
        titre: "Volume du cône",
        points: [
          "V = (π × r² × hauteur) ÷ 3",
          "Exemple : rayon 3 cm, hauteur 8 cm → V = 24π ≈ 75,4 cm³",
        ],
      },
      {
        titre: "Patron et comparaison",
        points: [
          "Le patron est la figure plane obtenue en dépliant le solide",
          "Patron pyramide : base + triangles ; patron cône : disque + secteur circulaire",
          "Pyramide et cône ont un volume 3 fois plus petit qu'un prisme/cylindre de même base et même hauteur",
        ],
      },
    ],
    audio:
      "Fiche de révision : les pyramides et les cônes. Une pyramide a une base polygonale et des faces triangulaires qui se rejoignent en un sommet ; la hauteur relie ce sommet au plan de la base, perpendiculairement. Un cône de révolution a une base circulaire et un sommet, reliés par la hauteur ; la génératrice est le segment qui relie le sommet à un point du cercle de base. Le volume d'une pyramide se calcule en multipliant l'aire de la base par la hauteur, puis en divisant par trois. Le volume d'un cône se calcule en multipliant pi, le rayon au carré, et la hauteur, puis en divisant par trois également. Le patron d'un solide est la figure plane obtenue en le dépliant : celui d'une pyramide comprend la base et un triangle par côté, celui d'un cône comprend un disque et un secteur circulaire. Enfin, une pyramide ou un cône a toujours un volume trois fois plus petit qu'un prisme ou un cylindre de même base et de même hauteur.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une pyramide ?", verso: "Un solide à base polygonale dont les faces triangulaires se rejoignent en un sommet." },
    { recto: "Qu'est-ce qu'un cône de révolution ?", verso: "Un solide à base circulaire, avec un sommet relié au centre de la base par la hauteur." },
    { recto: "Formule du volume d'une pyramide ?", verso: "V = (aire de la base × hauteur) ÷ 3." },
    { recto: "Formule du volume d'un cône ?", verso: "V = (π × r² × hauteur) ÷ 3." },
    { recto: "Pyramide base carrée 6 cm, hauteur 10 cm : volume ?", verso: "Aire base = 36 cm², V = (36×10)÷3 = 120 cm³." },
    { recto: "Cône rayon 3 cm, hauteur 8 cm : volume ?", verso: "V = (π×9×8)÷3 = 24π ≈ 75,4 cm³." },
    { recto: "Qu'est-ce que le patron d'un solide ?", verso: "La figure plane obtenue en dépliant complètement le solide." },
    { recto: "Comment comparer le volume d'une pyramide à celui d'un prisme de même base et hauteur ?", verso: "Le volume de la pyramide est 3 fois plus petit que celui du prisme (idem pour cône et cylindre)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une pyramide a une base carrée et des faces triangulaires. Comment s'appelle le point où se rejoignent les faces triangulaires ?",
      choix: ["Le sommet", "La base", "L'apothème", "La génératrice"],
      bonneReponse: 0,
      explication: "Toutes les faces triangulaires d'une pyramide se rejoignent en un même point, le sommet.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la formule du volume d'une pyramide ?",
      choix: ["(aire base × hauteur) ÷ 3", "aire base × hauteur", "(aire base × hauteur) × 3", "aire base + hauteur"],
      bonneReponse: 0,
      explication: "Le volume d'une pyramide est le tiers du produit de l'aire de sa base par sa hauteur.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Une pyramide a une base d'aire 20 cm² et une hauteur de 9 cm. Calcule son volume.",
      reponse: "60 cm³",
      explication: "V = (20 × 9) ÷ 3 = 180 ÷ 3 = 60 cm³.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un cône de révolution a une base :",
      choix: ["Circulaire", "Carrée", "Triangulaire", "Rectangulaire"],
      bonneReponse: 0,
      explication: "La base d'un cône de révolution est toujours un cercle (un disque).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une pyramide à base carrée de côté 5 cm a une hauteur de 12 cm. Calcule son volume.",
      reponse: "100 cm³",
      explication: "Aire de la base = 5 × 5 = 25 cm². V = (25 × 12) ÷ 3 = 300 ÷ 3 = 100 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la formule du volume d'un cône de rayon r et de hauteur h ?",
      choix: ["(π × r² × h) ÷ 3", "π × r² × h", "(π × r × h) ÷ 3", "π × r² + h"],
      bonneReponse: 0,
      explication: "Le volume d'un cône est le tiers du produit de l'aire de sa base (π×r²) par sa hauteur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un cône a un rayon de 4 cm et une hauteur de 6 cm. Calcule son volume en fonction de π, puis une valeur arrondie (π ≈ 3,14).",
      reponse: "32π cm³ ≈ 100,48 cm³",
      explication: "V = (π × 4² × 6) ÷ 3 = (π × 16 × 6) ÷ 3 = 96π ÷ 3 = 32π ≈ 32 × 3,14 ≈ 100,48 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un prisme droit et une pyramide ont la même base et la même hauteur. Quel est le rapport entre leurs volumes ?",
      choix: [
        "Le volume de la pyramide est le tiers de celui du prisme",
        "Ils sont égaux",
        "Le volume de la pyramide est le double de celui du prisme",
        "Le volume de la pyramide représente les deux tiers de celui du prisme",
      ],
      bonneReponse: 0,
      explication: "Une pyramide a toujours un volume 3 fois plus petit qu'un prisme de même base et même hauteur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une pyramide à base rectangulaire (8 cm × 5 cm) a un volume de 200 cm³. Calcule sa hauteur.",
      reponse: "15 cm",
      explication: "Aire de la base = 8 × 5 = 40 cm². 200 = (40 × h) ÷ 3, donc 40h = 600, soit h = 15 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un cône a un volume de 150π cm³ et une hauteur de 18 cm. Calcule le rayon de sa base.",
      reponse: "5 cm",
      explication: "150π = (π × r² × 18) ÷ 3 = 6π × r², donc r² = 150 ÷ 6 = 25, soit r = 5 cm.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une pyramide à base carrée de côté 4 cm a un volume de 48 cm³. Quelle est sa hauteur ?",
      choix: ["9 cm", "12 cm", "3 cm", "16 cm"],
      bonneReponse: 0,
      explication: "Aire de la base = 4 × 4 = 16 cm². 48 = (16 × h) ÷ 3, donc 16h = 144, soit h = 9 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un silo à grains a la forme d'un cône renversé de rayon 2 m et de hauteur 4,5 m. Calcule le volume de grains qu'il peut contenir, arrondi au dixième (π ≈ 3,14).",
      reponse: "Environ 18,8 m³",
      explication: "V = (π × 2² × 4,5) ÷ 3 = (π × 4 × 4,5) ÷ 3 = 18π ÷ 3 = 6π ≈ 6 × 3,14 ≈ 18,8 m³.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment s'appelle la distance entre le sommet d'une pyramide et le plan de sa base ?",
      choix: ["La hauteur", "La génératrice", "L'apothème", "Le rayon"],
      bonneReponse: 0,
      explication: "C'est la hauteur, mesurée perpendiculairement au plan de la base.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Une pyramide a une base d'aire 15 cm² et une hauteur de 6 cm. Calcule son volume.",
      reponse: "30 cm³",
      explication: "V = (15 × 6) ÷ 3 = 90 ÷ 3 = 30 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un cône a un rayon de 5 cm et une hauteur de 9 cm. Quel est son volume en fonction de π ?",
      choix: ["75π cm³", "225π cm³", "25π cm³", "45π cm³"],
      bonneReponse: 0,
      explication: "V = (π × 5² × 9) ÷ 3 = (π × 25 × 9) ÷ 3 = 225π ÷ 3 = 75π cm³.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une pyramide à base carrée de côté 7 cm a une hauteur de 6 cm. Calcule son volume.",
      reponse: "98 cm³",
      explication: "Aire de la base = 7 × 7 = 49 cm². V = (49 × 6) ÷ 3 = 294 ÷ 3 = 98 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un cône a un volume de 100π cm³ et un rayon de 5 cm. Calcule sa hauteur.",
      reponse: "12 cm",
      explication: "100π = (π × 25 × h) ÷ 3, donc 300 = 25h, soit h = 12 cm.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Pyramides et cônes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment appelle-t-on la base d'un cône de révolution ?",
          choix: ["Un cercle (ou disque)", "Un carré", "Un triangle", "Un rectangle"],
          bonneReponse: 0,
          explication: "Un cône de révolution a toujours une base circulaire.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Une pyramide a une base d'aire 27 cm² et une hauteur de 5 cm. Calcule son volume.",
          reponse: "45 cm³",
          explication: "V = (27 × 5) ÷ 3 = 135 ÷ 3 = 45 cm³.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une pyramide à base carrée de côté 6 cm a une hauteur de 8 cm. Quel est son volume ?",
          choix: ["96 cm³", "288 cm³", "48 cm³", "24 cm³"],
          bonneReponse: 0,
          explication: "Aire de la base = 36 cm². V = (36 × 8) ÷ 3 = 288 ÷ 3 = 96 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un cône a un rayon de 3 cm et une hauteur de 10 cm. Calcule son volume en fonction de π.",
          reponse: "30π cm³",
          explication: "V = (π × 3² × 10) ÷ 3 = (π × 9 × 10) ÷ 3 = 90π ÷ 3 = 30π cm³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Une pyramide à base carrée de côté 5 cm a un volume de 75 cm³. Calcule sa hauteur.",
          reponse: "9 cm",
          explication: "Aire de la base = 25 cm². 75 = (25 × h) ÷ 3, donc 25h = 225, soit h = 9 cm.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un chapeau de fête a la forme d'un cône de rayon 6 cm et de hauteur 8 cm. Calcule le volume de ce cône, arrondi au dixième (π ≈ 3,14).",
          reponse: "Environ 301,4 cm³",
          explication: "V = (π × 6² × 8) ÷ 3 = (π × 36 × 8) ÷ 3 = 288π ÷ 3 = 96π ≈ 96 × 3,14 ≈ 301,4 cm³.",
        },
      ],
    },
    {
      titre: "Examen 2 — Pyramides et cônes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment s'appelle le segment qui relie le sommet d'un cône à un point du cercle de base ?",
          choix: ["La génératrice", "La hauteur", "Le rayon", "L'apothème"],
          bonneReponse: 0,
          explication: "C'est la génératrice du cône.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un cône a un rayon de 2 cm et une hauteur de 3 cm. Calcule son volume en fonction de π.",
          reponse: "4π cm³",
          explication: "V = (π × 2² × 3) ÷ 3 = (π × 4 × 3) ÷ 3 = 12π ÷ 3 = 4π cm³.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une pyramide à base rectangulaire (4 cm × 6 cm) a une hauteur de 9 cm. Quel est son volume ?",
          choix: ["72 cm³", "216 cm³", "36 cm³", "48 cm³"],
          bonneReponse: 0,
          explication: "Aire de la base = 4 × 6 = 24 cm². V = (24 × 9) ÷ 3 = 216 ÷ 3 = 72 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une pyramide a une base d'aire 18 cm² et une hauteur de 11 cm. Calcule son volume.",
          reponse: "66 cm³",
          explication: "V = (18 × 11) ÷ 3 = 198 ÷ 3 = 66 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un cône a un volume de 48π cm³ et une hauteur de 9 cm. Calcule le rayon de sa base.",
          reponse: "4 cm",
          explication: "48π = (π × r² × 9) ÷ 3 = 3π × r², donc r² = 48 ÷ 3 = 16, soit r = 4 cm.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un tas de sable a la forme d'un cône de rayon 1,5 m et de hauteur 2 m. Calcule le volume de sable, arrondi au centième (π ≈ 3,14).",
          reponse: "Environ 4,71 m³",
          explication: "V = (π × 1,5² × 2) ÷ 3 = (π × 2,25 × 2) ÷ 3 = 4,5π ÷ 3 = 1,5π ≈ 1,5 × 3,14 ≈ 4,71 m³.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Pyramide : base polygonale et faces triangulaires se rejoignant en un sommet ; la hauteur est perpendiculaire à la base.",
    "Cône de révolution : base circulaire et sommet ; la génératrice relie le sommet à un point du cercle de base.",
    "Volume de la pyramide : V = (aire de la base × hauteur) ÷ 3.",
    "Volume du cône : V = (π × r² × hauteur) ÷ 3.",
    "Une pyramide (ou un cône) a un volume 3 fois plus petit qu'un prisme (ou un cylindre) de même base et de même hauteur.",
    "Toujours calculer l'aire de la base en premier, puis appliquer la formule du volume sans oublier de diviser par 3.",
  ],
},
{
  slug: "relatifs-multiplication-division",
  titre: "Nombres relatifs : multiplication et division",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Maîtriser la règle des signes pour multiplier et diviser des nombres relatifs, gérer plusieurs facteurs et respecter les priorités opératoires.",
  objectifs: [
    "Connaître la règle des signes pour la multiplication et la division",
    "Multiplier et diviser des nombres relatifs simples",
    "Déterminer le signe d'un produit de plusieurs facteurs relatifs",
    "Appliquer les priorités opératoires dans un calcul avec des relatifs",
    "Éviter les pièges classiques (−3² ≠ (−3)², division par zéro impossible)",
  ],
  slides: [
    {
      titre: "Les nombres relatifs, un rappel",
      illustration: "🔢",
      visuel: "−5 ... 0 ... +5",
      contenu: [
        "Un nombre relatif a un signe (+ ou −) et une distance à zéro",
        "+7 et −7 sont opposés : même distance à zéro, signes contraires",
        "Sur une droite graduée, les positifs sont à droite de 0, les négatifs à gauche",
        "On va maintenant apprendre à multiplier et à diviser ces nombres",
      ],
      voixOff:
        "Petit rappel avant de commencer : un nombre relatif possède un signe, plus ou moins, et une distance à zéro. Plus sept et moins sept sont des nombres opposés : ils ont la même distance à zéro mais des signes contraires. Sur une droite graduée, les nombres positifs sont à droite de zéro, les négatifs à gauche. Aujourd'hui, on apprend à les multiplier et à les diviser.",
    },
    {
      titre: "La règle des signes : la multiplication",
      illustration: "✖️",
      visuel: "(+)×(+)=+ ; (−)×(−)=+ ; (+)×(−)=−",
      contenu: [
        "Signes identiques → résultat positif : (+)×(+) = + et (−)×(−) = +",
        "Signes différents → résultat négatif : (+)×(−) = − et (−)×(+) = −",
        "On multiplie d'abord les distances à zéro (les nombres sans signe)",
        "Exemple : (−4) × (−6) = +24 ; (−4) × 6 = −24",
      ],
      voixOff:
        "Voici la règle des signes pour la multiplication. Quand les deux signes sont identiques, le résultat est positif. Quand les deux signes sont différents, le résultat est négatif. Concrètement, on multiplie les distances à zéro, puis on applique cette règle pour trouver le signe du résultat. Par exemple, moins quatre fois moins six égale plus vingt-quatre, alors que moins quatre fois six égale moins vingt-quatre.",
    },
    {
      titre: "Plusieurs facteurs : la règle de parité",
      illustration: "🔁",
      visuel: "nombre pair de signes − → résultat +",
      contenu: [
        "(−2) × (−3) × (−5) = −30 : trois facteurs négatifs (nombre impair) → résultat négatif",
        "(−2) × (−3) × (−1) × (−5) = 30 : quatre facteurs négatifs (nombre pair) → résultat positif",
        "Astuce : compte le nombre de signes « − ». Pair → +, impair → −",
        "Le résultat final s'obtient en multipliant toutes les distances à zéro",
      ],
      voixOff:
        "Quand il y a plusieurs facteurs, on compte simplement le nombre de signes moins. Si ce nombre est pair, le résultat est positif. S'il est impair, le résultat est négatif. Par exemple, moins deux fois moins trois fois moins cinq contient trois facteurs négatifs, un nombre impair, donc le résultat est négatif : moins trente. Il ne reste plus qu'à multiplier toutes les distances à zéro pour obtenir la valeur.",
    },
    {
      titre: "Exemples pas à pas",
      illustration: "📝",
      visuel: "(−3) × 5 = −15",
      contenu: [
        "(−3) × 5 = −15 (signes différents)",
        "(−7) × (−2) = 14 (signes identiques)",
        "6 × (−9) = −54",
        "0 × (−12) = 0 : zéro multiplié par n'importe quel nombre donne toujours zéro",
      ],
      voixOff:
        "Entraînons-nous avec quelques exemples. Moins trois fois cinq égale moins quinze, car les signes sont différents. Moins sept fois moins deux égale quatorze, car les signes sont identiques. Six fois moins neuf égale moins cinquante-quatre. Et n'oublie jamais que zéro multiplié par n'importe quel nombre donne toujours zéro.",
    },
    {
      titre: "La règle des signes : la division",
      illustration: "➗",
      visuel: "(−20) ÷ (−4) = 5",
      contenu: [
        "Même règle que pour la multiplication : signes identiques → +, signes différents → −",
        "(−20) ÷ (−4) = 5 ; (−20) ÷ 4 = −5 ; 20 ÷ (−4) = −5",
        "On divise les distances à zéro, puis on applique la règle du signe",
        "On ne peut jamais diviser par 0",
      ],
      voixOff:
        "Pour la division, on applique exactement la même règle des signes que pour la multiplication. Signes identiques donnent un résultat positif, signes différents donnent un résultat négatif. Moins vingt divisé par moins quatre égale cinq. Moins vingt divisé par quatre égale moins cinq. On commence par diviser les distances à zéro, puis on détermine le signe. Et surtout, rappelle-toi qu'on ne peut jamais diviser par zéro.",
    },
    {
      titre: "Exemples de divisions",
      illustration: "🧮",
      visuel: "(−36) ÷ 9 = −4",
      contenu: [
        "(−36) ÷ 9 = −4",
        "(−45) ÷ (−9) = 5",
        "54 ÷ (−6) = −9",
        "Le quotient de deux relatifs de même signe est toujours positif",
      ],
      voixOff:
        "Continuons avec des exemples de divisions. Moins trente-six divisé par neuf égale moins quatre. Moins quarante-cinq divisé par moins neuf égale cinq. Cinquante-quatre divisé par moins six égale moins neuf. Retiens bien : le quotient de deux nombres relatifs de même signe est toujours positif.",
    },
    {
      titre: "Priorités : × et ÷ avant + et −",
      illustration: "⏳",
      visuel: "5 − 3 × (−4) = 5 + 12 = 17",
      contenu: [
        "Comme pour tous les nombres, on effectue d'abord × et ÷, puis + et −",
        "5 − 3 × (−4) = 5 − (−12) = 5 + 12 = 17",
        "Les parenthèses sont toujours prioritaires sur tout le reste",
        "(−2 + 5) × (−3) = 3 × (−3) = −9",
      ],
      voixOff:
        "Avec les relatifs, les priorités opératoires ne changent pas : on effectue toujours les multiplications et les divisions avant les additions et les soustractions. Cinq moins trois fois moins quatre égale cinq moins moins douze, c'est-à-dire cinq plus douze, soit dix-sept. Et bien sûr, les parenthèses restent prioritaires sur tout le reste : entre parenthèses, moins deux plus cinq fait trois, puis trois fois moins trois égale moins neuf.",
    },
    {
      titre: "Pièges à éviter",
      illustration: "⚠️",
      visuel: "−3² ≠ (−3)²",
      contenu: [
        "−3² = −9 (on élève 3 au carré, puis on applique le signe moins) ; (−3)² = 9",
        "Ne pas confondre le signe « − » de soustraction et le signe négatif d'un nombre",
        "(−1) × (−1) × (−1) = −1 : nombre impair de facteurs négatifs",
        "Toujours bien écrire les parenthèses autour des nombres négatifs dans un calcul",
      ],
      voixOff:
        "Attention à un piège très fréquent : moins trois au carré, sans parenthèses, égale moins neuf, car on élève trois au carré puis on applique le signe moins. Alors que moins trois, entre parenthèses, au carré, égale neuf. Ne confonds jamais le signe moins d'une soustraction avec le signe négatif d'un nombre, et pense toujours à bien écrire les parenthèses autour des nombres négatifs.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Signes identiques → résultat positif ; signes différents → résultat négatif",
        "Avec plusieurs facteurs : nombre pair de signes − → + ; nombre impair de signes − → −",
        "On multiplie/divise d'abord les distances à zéro, puis on applique la règle du signe",
        "Priorités : × et ÷ avant + et − ; parenthèses en premier ; jamais de division par 0",
      ],
      voixOff:
        "Résumons. Pour multiplier ou diviser des relatifs : signes identiques donnent un résultat positif, signes différents donnent un résultat négatif. Avec plusieurs facteurs, on compte le nombre de signes moins : pair, c'est positif ; impair, c'est négatif. On calcule d'abord avec les distances à zéro, puis on applique la règle du signe. Et n'oublie jamais les priorités : multiplications et divisions avant additions et soustractions, parenthèses en premier, et une division par zéro est toujours impossible.",
    },
  ],
  fiche: {
    intro:
      "Multiplier ou diviser des nombres relatifs suit toujours la même règle des signes : signes identiques donnent un résultat positif, signes différents donnent un résultat négatif.",
    sections: [
      {
        titre: "Multiplier des relatifs",
        points: [
          "(+) × (+) = + et (−) × (−) = + (signes identiques)",
          "(+) × (−) = − et (−) × (+) = − (signes différents)",
          "On multiplie les distances à zéro, puis on applique la règle du signe",
          "Exemple : (−4) × (−6) = 24 ; (−4) × 6 = −24",
        ],
      },
      {
        titre: "Diviser des relatifs",
        points: [
          "Même règle des signes que pour la multiplication",
          "(−20) ÷ (−4) = 5 ; (−20) ÷ 4 = −5 ; 20 ÷ (−4) = −5",
          "Une division par 0 est toujours impossible",
        ],
      },
      {
        titre: "Plusieurs facteurs (règle de parité)",
        points: [
          "On compte le nombre de signes « − » parmi les facteurs",
          "Nombre pair de signes − → résultat positif",
          "Nombre impair de signes − → résultat négatif",
          "Exemple : (−2) × (−3) × (−5) = −30 (3 signes −, impair)",
        ],
      },
      {
        titre: "Priorités et pièges",
        points: [
          "Priorités : × et ÷ avant + et − ; parenthèses en premier",
          "5 − 3 × (−4) = 5 + 12 = 17",
          "Piège : −3² = −9 alors que (−3)² = 9",
          "0 multiplié par n'importe quel nombre donne toujours 0",
        ],
      },
    ],
    audio:
      "Fiche de révision : la multiplication et la division des nombres relatifs. La règle des signes est la même pour les deux opérations : quand les deux signes sont identiques, le résultat est positif ; quand les deux signes sont différents, le résultat est négatif. On multiplie ou on divise d'abord les distances à zéro, puis on applique cette règle. Avec plusieurs facteurs, on compte le nombre de signes moins : s'il est pair, le résultat est positif ; s'il est impair, le résultat est négatif. Une division par zéro est toujours impossible. Enfin, n'oublie jamais les priorités opératoires : multiplications et divisions avant additions et soustractions, et les parenthèses en premier. Attention au piège classique : moins trois au carré, sans parenthèses, égale moins neuf, alors que moins trois entre parenthèses au carré égale neuf.",
  },
  memoCards: [
    { recto: "Règle des signes : signes identiques ?", verso: "Le résultat est positif. (+)×(+) = + et (−)×(−) = +." },
    { recto: "Règle des signes : signes différents ?", verso: "Le résultat est négatif. (+)×(−) = − et (−)×(+) = −." },
    { recto: "(−4) × (−6) = ?", verso: "24 : signes identiques, donc résultat positif." },
    { recto: "(−20) ÷ 4 = ?", verso: "−5 : signes différents, donc résultat négatif." },
    { recto: "Plusieurs facteurs négatifs : comment trouver le signe ?", verso: "On compte les signes − : nombre pair → +, nombre impair → −." },
    { recto: "(−2) × (−3) × (−5) = ?", verso: "−30 : trois facteurs négatifs (impair), donc résultat négatif." },
    { recto: "Priorités opératoires avec les relatifs ?", verso: "× et ÷ avant + et − ; les parenthèses sont toujours prioritaires." },
    { recto: "−3² et (−3)² : même résultat ?", verso: "Non ! −3² = −9 (on met le signe après le carré) mais (−3)² = 9." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "(−4) × 5 = ?",
      choix: ["−20", "20", "−9", "9"],
      bonneReponse: 0,
      explication: "Signes différents (− et +) : le résultat est négatif. 4 × 5 = 20, donc (−4) × 5 = −20.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "(−6) × (−3) = ?",
      choix: ["18", "−18", "−9", "9"],
      bonneReponse: 0,
      explication: "Signes identiques (− et −) : le résultat est positif. 6 × 3 = 18, donc (−6) × (−3) = 18.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule 7 × (−8).",
      reponse: "−56",
      explication: "Signes différents : le résultat est négatif. 7 × 8 = 56, donc 7 × (−8) = −56.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "(−12) ÷ (−4) = ?",
      choix: ["3", "−3", "8", "−8"],
      bonneReponse: 0,
      explication: "Signes identiques : le résultat est positif. 12 ÷ 4 = 3, donc (−12) ÷ (−4) = 3.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−45) ÷ 9.",
      reponse: "−5",
      explication: "Signes différents : le résultat est négatif. 45 ÷ 9 = 5, donc (−45) ÷ 9 = −5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "(−2) × (−3) × (−4) = ?",
      choix: ["24", "−24", "9", "−9"],
      bonneReponse: 1,
      explication: "Trois facteurs négatifs (nombre impair) : le résultat est négatif. 2 × 3 × 4 = 24, donc le résultat est −24.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−5) × 6 × (−2).",
      reponse: "60",
      explication: "Deux facteurs négatifs (nombre pair) : le résultat est positif. 5 × 6 × 2 = 60, donc le résultat est 60.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel est le signe de (−7) × (−7) × (−7) × (−7) ?",
      choix: ["Positif", "Négatif", "Nul", "Impossible à savoir"],
      bonneReponse: 0,
      explication: "Il y a quatre facteurs négatifs, un nombre pair, donc le résultat est positif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule 8 − 3 × (−5).",
      reponse: "23",
      explication: "On calcule d'abord la multiplication : 3 × (−5) = −15. Puis 8 − (−15) = 8 + 15 = 23.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule (−6 + 2) × (−3 − 1).",
      reponse: "16",
      explication: "On calcule d'abord les parenthèses : (−6 + 2) = −4 et (−3 − 1) = −4. Puis (−4) × (−4) = 16.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Calcule (−2)² − (−2)³.",
      choix: ["12", "−4", "−12", "4"],
      bonneReponse: 0,
      explication: "(−2)² = 4 et (−2)³ = −8. Donc 4 − (−8) = 4 + 8 = 12.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un plongeur descend de 3 m sous l'eau chaque minute, pendant 5 minutes, en partant de la surface (altitude 0). Exprime sa profondeur finale par un produit de deux nombres relatifs, puis calcule-la.",
      reponse: "(−3) × 5 = −15, donc le plongeur est à −15 m (15 m sous la surface).",
      explication: "Chaque minute fait perdre 3 m d'altitude, soit un déplacement de −3 m, répété 5 fois : (−3) × 5 = −15.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "(−9) × (−2) = ?",
      choix: ["18", "−18", "11", "−11"],
      bonneReponse: 0,
      explication: "Signes identiques : le résultat est positif. 9 × 2 = 18.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule (−63) ÷ 7.",
      reponse: "−9",
      explication: "Signes différents : le résultat est négatif. 63 ÷ 7 = 9, donc (−63) ÷ 7 = −9.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "(−1) × (−1) × (−1) × (−1) × (−1) = ?",
      choix: ["1", "−1", "5", "−5"],
      bonneReponse: 1,
      explication: "Cinq facteurs négatifs (nombre impair) : le résultat est négatif, et 1 × 1 × 1 × 1 × 1 = 1, donc −1.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule 4 × (−3) − (−10).",
      reponse: "−2",
      explication: "4 × (−3) = −12. Puis −12 − (−10) = −12 + 10 = −2.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule (−7 + 3) × (−2)².",
      reponse: "−16",
      explication: "(−7 + 3) = −4 et (−2)² = 4. Donc (−4) × 4 = −16.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Multiplication et division des relatifs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "(−5) × 8 = ?",
          choix: ["−40", "40", "−13", "13"],
          bonneReponse: 0,
          explication: "Signes différents : le résultat est négatif. 5 × 8 = 40, donc (−5) × 8 = −40.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule (−54) ÷ (−6).",
          reponse: "9",
          explication: "Signes identiques : le résultat est positif. 54 ÷ 6 = 9.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "(−3) × (−3) × (−3) = ?",
          choix: ["27", "−27", "9", "−9"],
          bonneReponse: 1,
          explication: "Trois facteurs négatifs (nombre impair) : le résultat est négatif. 3 × 3 × 3 = 27, donc −27.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule 5 × (−4) + (−3) × (−2).",
          reponse: "−14",
          explication: "5 × (−4) = −20 et (−3) × (−2) = 6. Donc −20 + 6 = −14.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule (−8 + 3) × (−2 − 4).",
          reponse: "30",
          explication: "(−8 + 3) = −5 et (−2 − 4) = −6. Donc (−5) × (−6) = 30.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un ballon perd 4 m d'altitude chaque minute pendant 6 minutes, en partant de l'altitude 0. Exprime son altitude finale par un produit de deux relatifs, puis calcule-la.",
          reponse: "(−4) × 6 = −24, donc l'altitude finale est −24 m.",
          explication: "La perte d'altitude est de −4 m à chaque minute, répétée 6 fois : (−4) × 6 = −24.",
        },
      ],
    },
    {
      titre: "Examen 2 — Multiplication et division des relatifs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "(−9) ÷ 3 = ?",
          choix: ["−3", "3", "−27", "27"],
          bonneReponse: 0,
          explication: "Signes différents : le résultat est négatif. 9 ÷ 3 = 3, donc (−9) ÷ 3 = −3.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule (−7) × (−9).",
          reponse: "63",
          explication: "Signes identiques : le résultat est positif. 7 × 9 = 63.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel est le signe de (−4) × 5 × (−1) × (−3) ?",
          choix: ["Positif", "Négatif", "Nul", "Impossible à déterminer"],
          bonneReponse: 1,
          explication: "Il y a trois facteurs négatifs (−4, −1, −3), un nombre impair, donc le résultat est négatif.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule (−72) ÷ (−8) − 5.",
          reponse: "4",
          explication: "(−72) ÷ (−8) = 9 (signes identiques). Puis 9 − 5 = 4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule 3 × (−2)³.",
          reponse: "−24",
          explication: "(−2)³ = −8. Puis 3 × (−8) = −24.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un ascenseur descend de 2 étages à chaque déplacement, pendant 5 déplacements successifs, en partant de l'étage 0. Exprime sa position finale par un produit de relatifs, puis calcule-la.",
          reponse: "(−2) × 5 = −10, l'ascenseur se trouve à l'étage −10.",
          explication: "Chaque déplacement fait perdre 2 étages, soit −2, répété 5 fois : (−2) × 5 = −10.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Règle des signes : signes identiques → résultat positif ; signes différents → résultat négatif.",
    "On multiplie ou on divise d'abord les distances à zéro, puis on applique la règle du signe.",
    "Avec plusieurs facteurs : on compte le nombre de signes négatifs. Pair → résultat positif, impair → résultat négatif.",
    "Priorités opératoires inchangées : × et ÷ avant + et − ; les parenthèses restent toujours prioritaires.",
    "Piège classique : −3² = −9 (le signe s'applique après le carré) alors que (−3)² = 9.",
    "Diviser par 0 est toujours impossible, quel que soit le signe du nombre.",
  ],
},
{
  slug: "theoreme-pythagore",
  titre: "Le théorème de Pythagore",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Découvrir le théorème de Pythagore pour calculer une longueur dans un triangle rectangle, et sa réciproque pour vérifier si un triangle est rectangle.",
  objectifs: [
    "Connaître le vocabulaire du triangle rectangle (hypoténuse, côtés de l'angle droit)",
    "Énoncer et appliquer le théorème de Pythagore pour calculer l'hypoténuse",
    "Calculer un côté de l'angle droit connaissant l'hypoténuse",
    "Utiliser la réciproque du théorème pour vérifier si un triangle est rectangle",
    "Appliquer le théorème à des problèmes concrets",
  ],
  slides: [
    {
      titre: "Le triangle rectangle : vocabulaire",
      illustration: "📐",
      visuel: "hypoténuse = côté opposé à l'angle droit",
      contenu: [
        "Un triangle rectangle a un angle droit (90°)",
        "L'hypoténuse est le côté opposé à l'angle droit : c'est toujours le plus long côté",
        "Les deux autres côtés sont appelés les côtés de l'angle droit",
        "Le petit carré dans un angle indique qu'il est droit",
      ],
      voixOff:
        "Un triangle rectangle possède un angle droit, c'est-à-dire un angle de quatre-vingt-dix degrés. Le côté opposé à cet angle droit s'appelle l'hypoténuse : c'est toujours le côté le plus long du triangle. Les deux autres côtés, qui forment l'angle droit, sont appelés les côtés de l'angle droit. Sur un dessin, un petit carré dans l'angle indique qu'il est droit.",
    },
    {
      titre: "Le théorème de Pythagore",
      illustration: "🔺",
      visuel: "a² + b² = c²",
      contenu: [
        "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés",
        "Si c est l'hypoténuse : a² + b² = c²",
        "Ce théorème permet de calculer un côté quand on connaît les deux autres",
        "Il ne fonctionne QUE dans un triangle rectangle",
      ],
      voixOff:
        "Voici le théorème de Pythagore : dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés. Si c désigne l'hypoténuse, on écrit a carré plus b carré égale c carré. Ce théorème permet de calculer la longueur d'un côté dès qu'on connaît les deux autres. Attention, il ne fonctionne que dans un triangle rectangle.",
    },
    {
      titre: "Calculer l'hypoténuse",
      illustration: "📏",
      visuel: "3² + 4² = 5² → BC = 5",
      contenu: [
        "On connaît les deux côtés de l'angle droit, on cherche l'hypoténuse",
        "Triangle rectangle en A, AB = 3 cm, AC = 4 cm : BC² = AB² + AC² = 3² + 4² = 9 + 16 = 25",
        "BC = √25 = 5 cm",
        "On additionne les carrés des deux côtés connus",
      ],
      voixOff:
        "Pour calculer l'hypoténuse, on additionne les carrés des deux côtés de l'angle droit. Dans un triangle rectangle en A, avec AB égal trois centimètres et AC égal quatre centimètres, on calcule BC carré égale trois carré plus quatre carré, soit neuf plus seize, soit vingt-cinq. BC égale la racine carrée de vingt-cinq, soit cinq centimètres.",
    },
    {
      titre: "Calculer un côté de l'angle droit",
      illustration: "🧮",
      visuel: "13² − 12² = 5² → côté = 5",
      contenu: [
        "On connaît l'hypoténuse et un côté, on cherche l'autre côté",
        "Triangle rectangle en A, BC = 13 cm (hypoténuse), AB = 12 cm : AC² = BC² − AB² = 13² − 12² = 169 − 144 = 25",
        "AC = √25 = 5 cm",
        "Ici on SOUSTRAIT les carrés, car on cherche un côté de l'angle droit",
      ],
      voixOff:
        "Si on connaît l'hypoténuse et un côté de l'angle droit, on cherche l'autre côté en soustrayant les carrés. Dans un triangle rectangle en A, avec BC égal treize centimètres l'hypoténuse et AB égal douze centimètres, on calcule AC carré égale treize carré moins douze carré, soit cent soixante-neuf moins cent quarante-quatre, soit vingt-cinq. AC égale cinq centimètres. Ici, on soustrait les carrés, car on cherche un côté de l'angle droit, pas l'hypoténuse.",
    },
    {
      titre: "La racine carrée",
      illustration: "√",
      visuel: "√25 = 5 car 5² = 25",
      contenu: [
        "√n est le nombre positif dont le carré vaut n",
        "√25 = 5 car 5² = 25 ; √49 = 7 car 7² = 49",
        "On utilise la racine carrée pour « annuler » le carré et trouver la longueur",
        "Une longueur est toujours positive",
      ],
      voixOff:
        "La racine carrée d'un nombre n est le nombre positif dont le carré vaut n. La racine carrée de vingt-cinq est cinq, car cinq au carré fait vingt-cinq. La racine carrée de quarante-neuf est sept, car sept au carré fait quarante-neuf. On utilise la racine carrée pour annuler le carré et retrouver la longueur, qui est toujours un nombre positif.",
    },
    {
      titre: "La réciproque de Pythagore",
      illustration: "🔍",
      visuel: "vérifier si un triangle est rectangle",
      contenu: [
        "Si a² + b² = c² (avec c le plus grand côté), alors le triangle est rectangle",
        "Exemple : 6 cm, 8 cm, 10 cm → 6²+8² = 36+64 = 100 = 10² → triangle rectangle !",
        "Exemple : 5 cm, 6 cm, 8 cm → 5²+6² = 61 ≠ 8² = 64 → PAS rectangle",
        "On compare toujours la somme des carrés des deux plus petits côtés au carré du plus grand",
      ],
      voixOff:
        "La réciproque du théorème de Pythagore permet de vérifier si un triangle est rectangle, sans mesurer d'angle. Si le carré du plus grand côté est égal à la somme des carrés des deux autres, alors le triangle est rectangle. Pour six, huit et dix centimètres : six carré plus huit carré égale cent, qui est bien égal à dix carré, donc le triangle est rectangle. Pour cinq, six et huit centimètres, cinq carré plus six carré égale soixante et un, différent de huit carré qui vaut soixante-quatre : ce triangle n'est pas rectangle.",
    },
    {
      titre: "Une application concrète",
      illustration: "🪜",
      visuel: "échelle contre un mur",
      contenu: [
        "Une échelle de 5 m est posée contre un mur, son pied est à 3 m du mur",
        "À quelle hauteur touche-t-elle le mur ? hauteur² = 5² − 3² = 25 − 9 = 16",
        "hauteur = √16 = 4 m",
        "Le théorème de Pythagore sert souvent à calculer des distances impossibles à mesurer directement",
      ],
      voixOff:
        "Voyons une application concrète. Une échelle de cinq mètres est posée contre un mur, avec son pied à trois mètres du mur. Le mur, le sol et l'échelle forment un triangle rectangle. La hauteur atteinte au carré vaut cinq carré moins trois carré, soit vingt-cinq moins neuf, soit seize. La hauteur vaut donc la racine carrée de seize, soit quatre mètres. Le théorème de Pythagore sert très souvent à calculer des distances qu'on ne peut pas mesurer directement.",
    },
    {
      titre: "Pièges à éviter",
      illustration: "⚠️",
      visuel: "a²+b² ≠ (a+b)²",
      contenu: [
        "Le théorème ne s'applique QUE dans un triangle rectangle",
        "Il faut bien identifier l'hypoténuse (le côté le plus long, opposé à l'angle droit)",
        "a² + b² ≠ (a+b)² : ne pas confondre les deux !",
        "Toujours vérifier que le résultat obtenu est cohérent (positif, plausible)",
      ],
      voixOff:
        "Attention à quelques pièges. Le théorème de Pythagore ne s'applique que dans un triangle rectangle, jamais dans les autres. Il faut toujours bien identifier l'hypoténuse, le côté le plus long, opposé à l'angle droit. Ne confonds jamais a carré plus b carré avec la parenthèse a plus b, le tout au carré : ce ne sont pas les mêmes calculs. Et vérifie toujours que ton résultat est cohérent, c'est-à-dire positif et plausible.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "L'hypoténuse est le côté opposé à l'angle droit, le plus long du triangle rectangle",
        "Théorème : a² + b² = c² (c = hypoténuse)",
        "Hypoténuse inconnue : on additionne les carrés ; côté de l'angle droit inconnu : on soustrait",
        "Réciproque : si a²+b² = c², alors le triangle est rectangle",
      ],
      voixOff:
        "Résumons. Dans un triangle rectangle, l'hypoténuse est le côté opposé à l'angle droit, le plus long du triangle. Le théorème de Pythagore s'écrit a carré plus b carré égale c carré, où c est l'hypoténuse. Pour calculer l'hypoténuse, on additionne les carrés des deux autres côtés. Pour calculer un côté de l'angle droit, on soustrait les carrés. Et grâce à la réciproque, si a carré plus b carré égale c carré, alors on peut affirmer que le triangle est rectangle.",
    },
  ],
  fiche: {
    intro:
      "Le théorème de Pythagore relie les longueurs des côtés d'un triangle rectangle : le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.",
    sections: [
      {
        titre: "Vocabulaire du triangle rectangle",
        points: [
          "L'hypoténuse est le côté opposé à l'angle droit : c'est le plus long côté",
          "Les deux autres côtés sont les côtés de l'angle droit",
          "Un petit carré dans l'angle indique qu'il est droit (90°)",
        ],
      },
      {
        titre: "Calculer l'hypoténuse",
        points: [
          "a² + b² = c² (c = hypoténuse)",
          "On additionne les carrés des deux côtés de l'angle droit, puis on prend la racine carrée",
          "Exemple : 3² + 4² = 25, donc l'hypoténuse vaut √25 = 5",
        ],
      },
      {
        titre: "Calculer un côté de l'angle droit",
        points: [
          "On soustrait : (côté)² = (hypoténuse)² − (autre côté)²",
          "Exemple : 13² − 12² = 25, donc le côté cherché vaut √25 = 5",
          "On soustrait toujours le plus petit carré au plus grand (celui de l'hypoténuse)",
        ],
      },
      {
        titre: "La réciproque de Pythagore",
        points: [
          "Si a² + b² = c² (c = plus grand côté), alors le triangle est rectangle",
          "Exemple : 6, 8, 10 → 6²+8² = 100 = 10² → rectangle",
          "Sert à vérifier si un triangle est rectangle sans mesurer d'angle",
        ],
      },
    ],
    audio:
      "Fiche de révision : le théorème de Pythagore. Dans un triangle rectangle, l'hypoténuse est le côté opposé à l'angle droit, c'est le plus long côté du triangle. Le théorème de Pythagore affirme que le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés : a carré plus b carré égale c carré. Pour calculer l'hypoténuse, on additionne les carrés des deux côtés connus, puis on prend la racine carrée du résultat. Pour calculer un côté de l'angle droit, on soustrait le carré du côté connu au carré de l'hypoténuse, puis on prend à nouveau la racine carrée. La réciproque du théorème permet de vérifier si un triangle est rectangle : si le carré du plus grand côté est égal à la somme des carrés des deux autres, alors le triangle est rectangle.",
  },
  memoCards: [
    { recto: "Qu'est-ce que l'hypoténuse ?", verso: "Le côté opposé à l'angle droit dans un triangle rectangle : c'est toujours le plus long côté." },
    { recto: "Énonce le théorème de Pythagore.", verso: "Dans un triangle rectangle, a² + b² = c², où c est l'hypoténuse." },
    { recto: "Comment calculer l'hypoténuse ?", verso: "On additionne les carrés des deux côtés de l'angle droit, puis on prend la racine carrée." },
    { recto: "Comment calculer un côté de l'angle droit ?", verso: "On soustrait le carré du côté connu au carré de l'hypoténuse, puis on prend la racine carrée." },
    { recto: "Qu'est-ce que √n ?", verso: "Le nombre positif dont le carré vaut n. Ex : √25 = 5 car 5² = 25." },
    { recto: "Qu'est-ce que la réciproque de Pythagore ?", verso: "Si a²+b² = c² (c le plus grand côté), alors le triangle est rectangle." },
    { recto: "Le triplet 3-4-5, ça donne quoi ?", verso: "3²+4² = 9+16 = 25 = 5² : c'est un triangle rectangle classique à connaître." },
    { recto: "Piège à éviter ?", verso: "a² + b² ≠ (a+b)² ; le théorème ne s'applique que dans un triangle rectangle." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un triangle rectangle, comment appelle-t-on le côté opposé à l'angle droit ?",
      choix: ["L'hypoténuse", "Un côté de l'angle droit", "La médiane", "La bissectrice"],
      bonneReponse: 0,
      explication: "Le côté opposé à l'angle droit s'appelle toujours l'hypoténuse : c'est le plus long côté.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un triangle rectangle a des côtés de l'angle droit de 3 cm et 4 cm. Quelle est la longueur de l'hypoténuse ?",
      choix: ["5 cm", "7 cm", "25 cm", "12 cm"],
      bonneReponse: 0,
      explication: "3² + 4² = 9 + 16 = 25, donc l'hypoténuse vaut √25 = 5 cm.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule √64.",
      reponse: "8",
      explication: "8² = 64, donc √64 = 8.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quel type de triangle peut-on appliquer a² + b² = c² ?",
      choix: ["Un triangle rectangle", "Un triangle isocèle", "Un triangle équilatéral", "N'importe quel triangle"],
      bonneReponse: 0,
      explication: "Le théorème de Pythagore ne s'applique que dans un triangle rectangle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle rectangle a des côtés de l'angle droit de 6 cm et 8 cm. Calcule la longueur de l'hypoténuse.",
      reponse: "10 cm",
      explication: "6² + 8² = 36 + 64 = 100, donc l'hypoténuse vaut √100 = 10 cm.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un triangle rectangle a une hypoténuse de 13 cm et un côté de l'angle droit de 5 cm. Quelle est la longueur de l'autre côté ?",
      choix: ["12 cm", "8 cm", "18 cm", "144 cm"],
      bonneReponse: 0,
      explication: "13² − 5² = 169 − 25 = 144, donc le côté cherché vaut √144 = 12 cm.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle a des côtés de 9 cm, 12 cm et 15 cm. Est-il rectangle ? Justifie.",
      reponse: "Oui, 9² + 12² = 81 + 144 = 225 = 15², donc le triangle est rectangle (réciproque de Pythagore).",
      explication: "On compare la somme des carrés des deux plus petits côtés au carré du plus grand : 225 = 15², l'égalité est vérifiée.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un triangle a des côtés de 4 cm, 5 cm et 7 cm. Est-il rectangle ?",
      choix: ["Oui", "Non", "On ne peut pas savoir", "Cela dépend de l'unité"],
      bonneReponse: 1,
      explication: "4² + 5² = 16 + 25 = 41, alors que 7² = 49. Comme 41 ≠ 49, le triangle n'est pas rectangle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une échelle de 5 m est appuyée contre un mur, avec son pied à 3 m du mur. Calcule la hauteur atteinte par l'échelle sur le mur.",
      reponse: "4 m",
      explication: "hauteur² = 5² − 3² = 25 − 9 = 16, donc la hauteur vaut √16 = 4 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un rectangle a pour longueur 8 cm et pour largeur 6 cm. Calcule la longueur de sa diagonale.",
      reponse: "10 cm",
      explication: "La diagonale partage le rectangle en deux triangles rectangles : diagonale² = 8² + 6² = 64 + 36 = 100, donc diagonale = √100 = 10 cm.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un triangle rectangle a une hypoténuse de 17 cm et un côté de l'angle droit de 8 cm. Quelle est la longueur de l'autre côté ?",
      choix: ["15 cm", "9 cm", "25 cm", "225 cm"],
      bonneReponse: 0,
      explication: "17² − 8² = 289 − 64 = 225, donc le côté cherché vaut √225 = 15 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un bateau part d'un port et navigue 12 km vers le nord, puis 9 km vers l'est. À quelle distance se trouve-t-il du port en ligne droite ?",
      reponse: "15 km",
      explication: "Les deux trajets forment un angle droit : distance² = 12² + 9² = 144 + 81 = 225, donc distance = √225 = 15 km.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment s'appelle le côté le plus long d'un triangle rectangle ?",
      choix: ["L'hypoténuse", "La base", "La hauteur", "Le côté adjacent"],
      bonneReponse: 0,
      explication: "C'est l'hypoténuse, le côté opposé à l'angle droit.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule √36.",
      reponse: "6",
      explication: "6² = 36, donc √36 = 6.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un triangle rectangle a des côtés de l'angle droit de 9 cm et 12 cm. Quelle est la longueur de l'hypoténuse ?",
      choix: ["15 cm", "21 cm", "225 cm", "10,5 cm"],
      bonneReponse: 0,
      explication: "9² + 12² = 81 + 144 = 225, donc l'hypoténuse vaut √225 = 15 cm.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle rectangle a une hypoténuse de 10 cm et un côté de l'angle droit de 6 cm. Calcule la longueur de l'autre côté.",
      reponse: "8 cm",
      explication: "10² − 6² = 100 − 36 = 64, donc le côté cherché vaut √64 = 8 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un triangle a pour côtés 7 cm, 24 cm et 25 cm. Est-il rectangle ? Justifie.",
      reponse: "Oui, 7² + 24² = 49 + 576 = 625 = 25², donc le triangle est rectangle.",
      explication: "La somme des carrés des deux plus petits côtés est égale au carré du plus grand côté.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le théorème de Pythagore",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le théorème de Pythagore s'applique dans un triangle :",
          choix: ["Rectangle", "Isocèle", "Quelconque", "Équilatéral"],
          bonneReponse: 0,
          explication: "Le théorème de Pythagore ne s'applique que dans un triangle rectangle.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule √81.",
          reponse: "9",
          explication: "9² = 81, donc √81 = 9.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un triangle rectangle a des côtés de l'angle droit de 5 cm et 12 cm. Quelle est la longueur de l'hypoténuse ?",
          choix: ["13 cm", "17 cm", "169 cm", "8,5 cm"],
          bonneReponse: 0,
          explication: "5² + 12² = 25 + 144 = 169, donc l'hypoténuse vaut √169 = 13 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a une hypoténuse de 25 cm et un côté de l'angle droit de 7 cm. Calcule la longueur de l'autre côté.",
          reponse: "24 cm",
          explication: "25² − 7² = 625 − 49 = 576, donc le côté cherché vaut √576 = 24 cm.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un triangle a pour côtés 8 cm, 15 cm et 17 cm. Est-il rectangle ? Justifie.",
          reponse: "Oui, 8² + 15² = 64 + 225 = 289 = 17², donc le triangle est rectangle.",
          explication: "La somme des carrés des deux plus petits côtés est égale au carré du plus grand côté.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Une échelle de 13 m est posée contre un mur, avec son pied à 5 m du mur. Calcule la hauteur atteinte sur le mur.",
          reponse: "12 m",
          explication: "hauteur² = 13² − 5² = 169 − 25 = 144, donc la hauteur vaut √144 = 12 m.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le théorème de Pythagore",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment appelle-t-on les deux côtés qui forment l'angle droit ?",
          choix: ["Les côtés de l'angle droit", "Les hypoténuses", "Les diagonales", "Les médianes"],
          bonneReponse: 0,
          explication: "Ce sont les côtés de l'angle droit, aussi appelés côtés adjacents à l'angle droit.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule √100.",
          reponse: "10",
          explication: "10² = 100, donc √100 = 10.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un triangle rectangle a des côtés de l'angle droit de 7 cm et 24 cm. Quelle est la longueur de l'hypoténuse ?",
          choix: ["25 cm", "31 cm", "17 cm", "625 cm"],
          bonneReponse: 0,
          explication: "7² + 24² = 49 + 576 = 625, donc l'hypoténuse vaut √625 = 25 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a une hypoténuse de 15 cm et un côté de l'angle droit de 9 cm. Calcule la longueur de l'autre côté.",
          reponse: "12 cm",
          explication: "15² − 9² = 225 − 81 = 144, donc le côté cherché vaut √144 = 12 cm.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un triangle a pour côtés 6 cm, 8 cm et 11 cm. Est-il rectangle ? Justifie.",
          reponse: "Non, 6² + 8² = 36 + 64 = 100, alors que 11² = 121. Comme 100 ≠ 121, le triangle n'est pas rectangle.",
          explication: "La somme des carrés des deux plus petits côtés ne correspond pas au carré du plus grand côté.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un cerf-volant est retenu par un fil de 25 m attaché au sol. Il vole à une distance horizontale de 15 m du point d'attache. À quelle hauteur vole-t-il ?",
          reponse: "20 m",
          explication: "hauteur² = 25² − 15² = 625 − 225 = 400, donc la hauteur vaut √400 = 20 m.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Dans un triangle rectangle, l'hypoténuse est le côté opposé à l'angle droit : c'est toujours le plus long côté.",
    "Théorème de Pythagore : a² + b² = c², où c est l'hypoténuse.",
    "Pour calculer l'hypoténuse : on additionne les carrés des deux côtés de l'angle droit, puis on prend la racine carrée.",
    "Pour calculer un côté de l'angle droit : on soustrait (le carré du côté connu au carré de l'hypoténuse), puis on prend la racine carrée.",
    "Réciproque de Pythagore : si a² + b² = c² (c le plus grand côté), alors le triangle est rectangle.",
    "Piège à éviter : a² + b² ≠ (a+b)² ; le théorème ne s'applique que dans un triangle rectangle.",
  ],
},
{
  slug: "translations-rotations",
  titre: "Translations et rotations",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Découvrir deux transformations du plan qui conservent les longueurs et les angles : la translation, qui fait glisser une figure, et la rotation, qui la fait tourner autour d'un point.",
  objectifs: [
    "Comprendre ce qu'est une translation et le rôle du vecteur de translation",
    "Construire l'image d'une figure par une translation, y compris dans un repère",
    "Comprendre ce qu'est une rotation, son centre, son angle et son sens",
    "Construire l'image d'une figure par une rotation",
    "Connaître les propriétés conservées par ces deux transformations (longueurs, angles, aires)",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une translation ?",
      illustration: "➡️",
      visuel: "glisser sans tourner",
      contenu: [
        "Une translation fait « glisser » une figure sans la faire tourner ni la déformer",
        "Chaque point se déplace de la même distance, dans la même direction",
        "L'image d'un point A par la translation est souvent notée A'",
        "La figure obtenue est superposable à la figure de départ",
      ],
      voixOff:
        "Une translation fait glisser une figure dans le plan, sans jamais la faire tourner ni la déformer. Chaque point de la figure se déplace exactement de la même distance, dans la même direction. L'image d'un point A par une translation se note généralement A prime. La figure obtenue est parfaitement superposable à la figure de départ.",
    },
    {
      titre: "Le vecteur de translation",
      illustration: "🏹",
      visuel: "vecteur u",
      contenu: [
        "Le vecteur de translation indique la direction, le sens et la longueur du déplacement",
        "On le note avec une flèche, par exemple le vecteur u",
        "Tous les points bougent selon EXACTEMENT ce même vecteur",
        "AA' = BB' = CC' : même longueur et même direction pour tous les points",
      ],
      voixOff:
        "Toute translation est définie par un vecteur, qui indique la direction, le sens et la longueur du déplacement. On le note avec une flèche, par exemple le vecteur u. Le point important, c'est que tous les points de la figure bougent selon exactement ce même vecteur : le déplacement de A vers A prime a la même longueur et la même direction que celui de B vers B prime.",
    },
    {
      titre: "Construire l'image d'une figure",
      illustration: "📐",
      visuel: "reporter le vecteur depuis chaque sommet",
      contenu: [
        "On reporte le vecteur de translation à partir de chaque sommet de la figure",
        "Pour un triangle ABC, on construit A', B' et C' en suivant le même vecteur",
        "On relie ensuite A', B' et C' pour obtenir le triangle image",
        "Le quadrillage facilite souvent le comptage des déplacements",
      ],
      voixOff:
        "Pour construire l'image d'une figure par translation, on reporte le vecteur de translation à partir de chaque sommet. Pour un triangle A, B, C, on construit A prime, B prime et C prime en suivant exactement le même vecteur depuis chaque point. Il ne reste plus qu'à relier ces trois points pour obtenir le triangle image. Sur un quadrillage, il suffit souvent de compter les cases pour se déplacer.",
    },
    {
      titre: "Propriétés conservées par une translation",
      illustration: "✅",
      visuel: "longueurs et angles conservés",
      contenu: [
        "Une translation conserve les longueurs : A'B' = AB",
        "Elle conserve aussi les angles et le parallélisme",
        "L'aire de la figure image est égale à l'aire de la figure de départ",
        "La figure et son image ont la même forme et la même taille",
      ],
      voixOff:
        "Une translation conserve toujours les longueurs : A prime B prime est égal à AB. Elle conserve également les angles et le parallélisme des droites. L'aire de la figure image est exactement égale à l'aire de la figure de départ. Autrement dit, une figure et son image par translation ont toujours la même forme et la même taille.",
    },
    {
      titre: "Qu'est-ce qu'une rotation ?",
      illustration: "🔄",
      visuel: "tourner autour d'un point",
      contenu: [
        "Une rotation fait tourner une figure autour d'un point fixe, appelé centre",
        "Elle est définie par un centre O, un angle et un sens de rotation",
        "Chaque point tourne autour de O du même angle",
        "Le sens peut être horaire (comme une montre) ou anti-horaire",
      ],
      voixOff:
        "Une rotation fait tourner une figure autour d'un point fixe, appelé centre de la rotation. Elle est entièrement définie par trois éléments : un centre O, un angle et un sens de rotation. Chaque point de la figure tourne autour de O exactement du même angle. Le sens peut être horaire, comme les aiguilles d'une montre, ou anti-horaire, dans le sens inverse.",
    },
    {
      titre: "Centre, angle et sens",
      illustration: "🧭",
      visuel: "rotation de centre O, angle 90°, sens anti-horaire",
      contenu: [
        "Le centre O est le seul point qui ne bouge pas",
        "L'angle indique de combien de degrés on fait tourner la figure",
        "Le sens anti-horaire tourne comme les aiguilles d'une montre, mais à l'envers",
        "OA = OA' pour tout point A : la distance au centre est conservée",
      ],
      voixOff:
        "Le centre O est le seul point qui ne bouge jamais pendant une rotation. L'angle indique de combien de degrés on fait tourner la figure, par exemple quatre-vingt-dix degrés. Le sens anti-horaire correspond au sens inverse des aiguilles d'une montre. Et pour tout point A de la figure, la distance O A est toujours égale à la distance O A prime : la distance au centre est conservée.",
    },
    {
      titre: "Construire l'image par rotation",
      illustration: "📏",
      visuel: "OA = OA' et angle AOA' = angle donné",
      contenu: [
        "Pour chaque point, on trace le segment qui le relie au centre O",
        "On reporte l'angle de rotation à partir de ce segment, dans le bon sens",
        "On place le point image à la même distance de O",
        "On répète l'opération pour chaque sommet de la figure",
      ],
      voixOff:
        "Pour construire l'image d'un point par rotation, on trace d'abord le segment qui le relie au centre O. On reporte ensuite l'angle de rotation à partir de ce segment, dans le sens indiqué. On place le point image sur cette nouvelle direction, à la même distance de O que le point de départ. On répète cette opération pour chaque sommet de la figure, puis on relie les points obtenus.",
    },
    {
      titre: "Propriétés conservées par une rotation",
      illustration: "✅",
      visuel: "longueurs, angles et aires conservés",
      contenu: [
        "Comme la translation, la rotation conserve les longueurs, les angles et les aires",
        "La figure et son image sont superposables (mêmes dimensions)",
        "Le centre de rotation reste toujours fixe : O = O'",
        "Une rotation de 180° donne le symétrique par rapport au centre O",
      ],
      voixOff:
        "Comme la translation, la rotation conserve toujours les longueurs, les angles et les aires. La figure et son image sont donc superposables, elles ont exactement les mêmes dimensions. Le centre de rotation, lui, ne bouge jamais : son image est lui-même. Cas particulier à retenir : une rotation de cent quatre-vingts degrés donne exactement le symétrique de la figure par rapport au centre O.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Translation : glissement selon un vecteur (direction, sens, longueur)",
        "Rotation : mouvement circulaire autour d'un centre, selon un angle et un sens",
        "Les deux transformations conservent longueurs, angles et aires",
        "Dans un repère, l'image de (x;y) par la translation de vecteur (a;b) est (x+a ; y+b)",
      ],
      voixOff:
        "Résumons. La translation est un glissement défini par un vecteur, qui fixe la direction, le sens et la longueur du déplacement. La rotation est un mouvement circulaire autour d'un centre fixe, défini par un angle et un sens. Ces deux transformations conservent toujours les longueurs, les angles et les aires : la figure et son image ont toujours la même forme et la même taille. Et dans un repère, l'image du point de coordonnées x, y par la translation de vecteur a, b a pour coordonnées x plus a, y plus b.",
    },
  ],
  fiche: {
    intro:
      "La translation et la rotation sont deux transformations du plan qui conservent toujours les longueurs, les angles et les aires : la figure et son image sont superposables.",
    sections: [
      {
        titre: "La translation",
        points: [
          "Fait glisser une figure selon un vecteur (direction, sens, longueur)",
          "Tous les points se déplacent du même vecteur : AA' = BB' = CC'",
          "Dans un repère, l'image de (x;y) par la translation de vecteur (a;b) est (x+a ; y+b)",
        ],
      },
      {
        titre: "Construction et propriétés de la translation",
        points: [
          "On reporte le vecteur depuis chaque sommet de la figure",
          "Elle conserve les longueurs, les angles, le parallélisme et les aires",
        ],
      },
      {
        titre: "La rotation",
        points: [
          "Fait tourner une figure autour d'un centre O fixe, selon un angle et un sens",
          "Le centre O ne bouge jamais ; OA = OA' pour tout point A",
          "Une rotation de 180° équivaut à la symétrie centrale de centre O",
        ],
      },
      {
        titre: "Construction et propriétés de la rotation",
        points: [
          "On reporte l'angle depuis le segment reliant le point au centre O",
          "Le point image est à la même distance de O que le point de départ",
          "Elle conserve les longueurs, les angles et les aires, comme la translation",
        ],
      },
    ],
    audio:
      "Fiche de révision : les translations et les rotations. Une translation fait glisser une figure selon un vecteur, qui fixe la direction, le sens et la longueur du déplacement : tous les points se déplacent exactement du même vecteur. Dans un repère, l'image du point de coordonnées x, y par la translation de vecteur a, b a pour coordonnées x plus a et y plus b. Une rotation fait tourner une figure autour d'un centre fixe O, selon un angle et un sens donnés : le centre ne bouge jamais, et la distance entre le centre et un point est toujours égale à la distance entre le centre et son image. Une rotation de cent quatre-vingts degrés équivaut à la symétrie centrale par rapport au centre. Ces deux transformations conservent toujours les longueurs, les angles et les aires : la figure et son image sont donc superposables.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une translation ?", verso: "Un déplacement qui fait glisser une figure selon un vecteur, sans la tourner ni la déformer." },
    { recto: "Que définit un vecteur de translation ?", verso: "La direction, le sens et la longueur du déplacement. Tous les points bougent du même vecteur." },
    { recto: "Que conserve une translation ?", verso: "Les longueurs, les angles, le parallélisme et les aires." },
    { recto: "Qu'est-ce qu'une rotation ?", verso: "Un déplacement qui fait tourner une figure autour d'un point fixe appelé centre." },
    { recto: "Quels sont les trois éléments d'une rotation ?", verso: "Le centre O, l'angle de rotation et le sens (horaire ou anti-horaire)." },
    { recto: "Que vaut OA' par rapport à OA lors d'une rotation de centre O ?", verso: "OA' = OA : la distance au centre est toujours conservée." },
    { recto: "Que conserve une rotation ?", verso: "Les longueurs, les angles et les aires, comme la translation." },
    { recto: "Que représente une rotation de 180° ?", verso: "Le symétrique de la figure par rapport au centre de rotation O." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une translation fait « glisser » une figure. Que deviennent sa forme et sa taille ?",
      choix: ["Elles restent identiques", "La forme change", "La taille double", "La figure se retourne"],
      bonneReponse: 0,
      explication: "Une translation conserve toujours la forme et la taille de la figure : elle est simplement déplacée.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le vecteur de translation indique :",
      choix: ["la direction, le sens et la longueur du déplacement", "seulement la longueur", "seulement la direction", "l'angle de rotation"],
      bonneReponse: 0,
      explication: "Un vecteur regroupe trois informations : la direction, le sens et la longueur (norme) du déplacement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans une translation de vecteur u, si AB = 5 cm, que vaut A'B' (l'image du segment AB) ?",
      reponse: "5 cm",
      explication: "Une translation conserve toujours les longueurs : A'B' = AB = 5 cm.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le point qui ne bouge jamais lors d'une rotation s'appelle :",
      choix: ["le centre", "le sommet", "l'axe", "le rayon"],
      bonneReponse: 0,
      explication: "Le centre de rotation est le seul point fixe de la transformation.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "On applique une rotation de centre O et d'angle 90° à un point A tel que OA = 4 cm. Que vaut OA' (distance entre le centre et l'image de A) ?",
      reponse: "4 cm",
      explication: "Une rotation conserve la distance au centre : OA' = OA = 4 cm.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une rotation conserve :",
      choix: ["les longueurs et les angles", "seulement les longueurs", "seulement les angles", "rien du tout"],
      bonneReponse: 0,
      explication: "Une rotation conserve les longueurs, les angles et les aires : c'est une transformation qui ne déforme jamais la figure.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle ABC a une aire de 12 cm². Quelle est l'aire de son image par une translation ?",
      reponse: "12 cm²",
      explication: "Une translation conserve toujours l'aire d'une figure.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un repère, l'image du point A(2;3) par la translation de vecteur (3;−1) est :",
      choix: ["A'(5;2)", "A'(−1;4)", "A'(6;−3)", "A'(2;3)"],
      bonneReponse: 0,
      explication: "On ajoute les coordonnées du vecteur : x' = 2+3 = 5 et y' = 3−1 = 2, donc A'(5;2).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Le point B(−1;4) subit la translation de vecteur (4;−2). Détermine les coordonnées de son image B'.",
      reponse: "B'(3 ; 2)",
      explication: "x' = −1+4 = 3 et y' = 4−2 = 2, donc B'(3 ; 2).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un carré de côté 6 cm subit une rotation de centre O et d'angle 180°. Quelle est la longueur du côté de l'image ?",
      reponse: "6 cm",
      explication: "Une rotation conserve les longueurs, quel que soit l'angle : le côté de l'image mesure toujours 6 cm.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une rotation de 180° de centre O transforme un point A en A'. Que peut-on dire de O par rapport au segment [AA'] ?",
      choix: ["O est le milieu de [AA']", "O est un sommet", "O est à l'extérieur du segment", "On ne peut rien dire"],
      bonneReponse: 0,
      explication: "Une rotation de 180° équivaut à la symétrie centrale de centre O, donc O est le milieu de [AA'].",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Le point C(5;−2) subit la translation de vecteur (−3;6), puis l'image obtenue subit la translation de vecteur (1;−1). Détermine les coordonnées finales du point.",
      reponse: "(3 ; 3)",
      explication: "Première étape : (5−3 ; −2+6) = (2 ; 4). Deuxième étape : (2+1 ; 4−1) = (3 ; 3).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une translation change-t-elle la taille d'une figure ?",
      choix: ["Non, jamais", "Oui, toujours", "Seulement si l'angle est grand", "Cela dépend du vecteur"],
      bonneReponse: 0,
      explication: "Une translation conserve toujours la taille de la figure, elle la déplace simplement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment s'appelle le point fixe autour duquel tourne une figure lors d'une rotation ?",
      reponse: "Le centre de rotation.",
      explication: "C'est le seul point de la figure (ou du plan) qui ne bouge pas pendant la rotation.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "L'image du point A(1;2) par la translation de vecteur (2;3) est :",
      choix: ["A'(3;5)", "A'(−1;−1)", "A'(2;6)", "A'(1;2)"],
      bonneReponse: 0,
      explication: "x' = 1+2 = 3 et y' = 2+3 = 5, donc A'(3;5).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un segment de 8 cm subit une rotation de centre O et d'angle 45°. Quelle est la longueur de son image ?",
      reponse: "8 cm",
      explication: "Une rotation conserve toujours les longueurs, quel que soit l'angle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Le point D(−2;−3) subit la translation de vecteur (5;1). Détermine les coordonnées de son image D'.",
      reponse: "D'(3 ; −2)",
      explication: "x' = −2+5 = 3 et y' = −3+1 = −2, donc D'(3 ; −2).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Translations et rotations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qu'est-ce qu'une translation ?",
          choix: [
            "Un déplacement qui fait glisser une figure sans la faire tourner",
            "Une rotation autour d'un point",
            "Un agrandissement",
            "Une réduction",
          ],
          bonneReponse: 0,
          explication: "Une translation déplace une figure selon un vecteur, sans rotation ni déformation.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Une translation conserve-t-elle les longueurs ?",
          reponse: "Oui, toujours.",
          explication: "C'est une des propriétés fondamentales de la translation.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "L'image du point A(4;1) par la translation de vecteur (−2;5) est :",
          choix: ["A'(2;6)", "A'(6;−4)", "A'(−2;5)", "A'(2;−4)"],
          bonneReponse: 0,
          explication: "x' = 4−2 = 2 et y' = 1+5 = 6, donc A'(2;6).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle a un angle de 60°. Quelle est la mesure de cet angle dans son image par une rotation ?",
          reponse: "60°",
          explication: "Une rotation conserve toujours les angles.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Le point E(3;−5) subit la translation de vecteur (−1;4), puis l'image obtenue subit la translation de vecteur (2;−2). Détermine les coordonnées finales.",
          reponse: "(4 ; −3)",
          explication: "Étape 1 : (3−1 ; −5+4) = (2 ; −1). Étape 2 : (2+2 ; −1−2) = (4 ; −3).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un carré de côté 5 cm (d'aire 25 cm²) subit une rotation de centre O et d'angle 90°. Quelle est l'aire de son image ?",
          reponse: "25 cm²",
          explication: "Une rotation conserve toujours l'aire d'une figure.",
        },
      ],
    },
    {
      titre: "Examen 2 — Translations et rotations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qu'est-ce qu'une rotation ?",
          choix: [
            "Un déplacement qui fait tourner une figure autour d'un point fixe",
            "Un déplacement qui fait glisser une figure",
            "Un agrandissement",
            "Une symétrie axiale",
          ],
          bonneReponse: 0,
          explication: "Une rotation fait tourner une figure autour d'un centre fixe, selon un angle et un sens.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Comment s'appelle le segment orienté qui indique la direction, le sens et la longueur d'une translation ?",
          reponse: "Le vecteur de translation.",
          explication: "Le vecteur regroupe les trois informations nécessaires pour définir une translation.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "L'image du point B(−3;2) par la translation de vecteur (5;−4) est :",
          choix: ["B'(2;−2)", "B'(−8;6)", "B'(2;6)", "B'(5;−4)"],
          bonneReponse: 0,
          explication: "x' = −3+5 = 2 et y' = 2−4 = −2, donc B'(2;−2).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une rotation de centre O envoie le point A sur A' avec OA = 7 cm. Que vaut OA' ?",
          reponse: "7 cm",
          explication: "Une rotation conserve la distance au centre : OA' = OA.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Le point F(0;3) subit une rotation de 180° de centre O(0;0). Sachant qu'une rotation de 180° donne le symétrique par rapport au centre, détermine les coordonnées de l'image F'.",
          reponse: "F'(0 ; −3)",
          explication: "Une rotation de 180° autour de l'origine transforme (x;y) en (−x;−y), donc (0;3) devient (0;−3).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un rectangle de longueur 10 cm et de largeur 4 cm subit une translation puis une rotation. Quelles sont la longueur et la largeur de la figure finale ?",
          reponse: "10 cm et 4 cm : la translation et la rotation conservent toujours les longueurs.",
          explication: "Ces deux transformations ne modifient jamais les dimensions d'une figure.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une translation fait glisser une figure selon un vecteur (direction, sens, longueur), sans la tourner ni la déformer.",
    "Le vecteur de translation est le même pour tous les points de la figure : AA' = BB' = CC'.",
    "Une rotation fait tourner une figure autour d'un centre fixe O, selon un angle et un sens donnés ; OA = OA' pour tout point A.",
    "Translation et rotation conservent toujours les longueurs, les angles et les aires : la figure et son image sont superposables.",
    "Une rotation de 180° équivaut à la symétrie centrale par rapport au centre de rotation.",
    "Dans un repère, l'image d'un point (x;y) par la translation de vecteur (a;b) est (x+a ; y+b).",
  ],
},
{
  slug: "aires-perimetres",
  titre: "Aires et périmètres",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Comprendre la différence entre périmètre et aire, connaître les formules du carré, du rectangle, du triangle, du parallélogramme et du disque, et savoir convertir les unités d'aire.",
  objectifs: [
    "Distinguer clairement le périmètre (une longueur) et l'aire (une surface)",
    "Connaître et utiliser les formules de périmètre et d'aire du carré et du rectangle",
    "Calculer l'aire d'un triangle et d'un parallélogramme",
    "Calculer l'aire et la circonférence d'un disque avec π ≈ 3,14",
    "Convertir des aires entre mm², cm², dm², m² et km²",
  ],
  slides: [
    {
      titre: "Périmètre et aire : deux idées différentes",
      illustration: "📐",
      visuel: "Contour ≠ Surface",
      contenu: [
        "Le périmètre mesure le tour d'une figure (une longueur)",
        "L'aire mesure la surface à l'intérieur (une étendue)",
        "Périmètre en cm, m... ; Aire en cm², m²...",
        "Deux figures peuvent avoir le même périmètre et des aires différentes",
      ],
      voixOff:
        "Le périmètre et l'aire mesurent deux choses très différentes. Le périmètre, c'est la longueur du contour d'une figure : on additionne tous les côtés. L'aire, c'est la mesure de la surface à l'intérieur de la figure. Attention à ne jamais confondre les unités : le périmètre se mesure en centimètres ou en mètres, alors que l'aire se mesure en centimètres carrés ou en mètres carrés.",
    },
    {
      titre: "Périmètre du carré et du rectangle",
      illustration: "🟦",
      visuel: "P = 2×(L+l)",
      contenu: [
        "Carré de côté c : P = 4 × c",
        "Rectangle de longueur L et largeur l : P = 2 × (L + l)",
        "Exemple : rectangle 8 cm × 5 cm → P = 2×(8+5) = 26 cm",
        "On peut aussi additionner directement les 4 côtés",
      ],
      voixOff:
        "Pour un carré de côté c, le périmètre vaut quatre fois c, puisque les quatre côtés sont égaux. Pour un rectangle de longueur L et de largeur l, le périmètre vaut deux fois la somme de la longueur et de la largeur. Par exemple, un rectangle de 8 centimètres sur 5 centimètres a un périmètre de 2 fois 8 plus 5, soit 26 centimètres.",
    },
    {
      titre: "Aire du carré et du rectangle",
      illustration: "🟩",
      visuel: "A = L × l",
      contenu: [
        "Carré de côté c : A = c × c = c²",
        "Rectangle : A = longueur × largeur",
        "Exemple : rectangle 8 cm × 5 cm → A = 8×5 = 40 cm²",
        "On compte le nombre de carreaux de 1 cm² qui recouvrent la figure",
      ],
      voixOff:
        "L'aire d'un rectangle s'obtient en multipliant la longueur par la largeur. Pour un carré de côté c, cela donne c fois c, que l'on note c au carré. Reprenons le rectangle de 8 centimètres sur 5 centimètres : son aire vaut 8 fois 5, soit 40 centimètres carrés. On peut imaginer qu'on recouvre le rectangle avec des petits carreaux d'un centimètre carré chacun.",
    },
    {
      titre: "Aire du triangle",
      illustration: "🔺",
      visuel: "A = (base × hauteur) ÷ 2",
      contenu: [
        "Un triangle, c'est la moitié d'un rectangle (ou d'un parallélogramme)",
        "Formule : A = (base × hauteur) ÷ 2",
        "Exemple : base 6 cm, hauteur 4 cm → A = (6×4)÷2 = 12 cm²",
        "La hauteur est toujours perpendiculaire à la base choisie",
      ],
      voixOff:
        "L'aire d'un triangle est la moitié de l'aire du rectangle qui l'entoure. On multiplie la base par la hauteur, puis on divise par deux. Prenons un triangle de base 6 centimètres et de hauteur 4 centimètres : son aire vaut 6 fois 4 divisé par 2, soit 12 centimètres carrés. Il faut bien choisir la hauteur qui est perpendiculaire à la base.",
    },
    {
      titre: "Aire du parallélogramme",
      illustration: "▱",
      visuel: "A = base × hauteur",
      contenu: [
        "Un parallélogramme a deux paires de côtés parallèles",
        "Formule : A = base × hauteur",
        "Exemple : base 7 cm, hauteur 3 cm → A = 7×3 = 21 cm²",
        "Pas de division par 2 ici, contrairement au triangle !",
      ],
      voixOff:
        "Le parallélogramme est un quadrilatère dont les côtés opposés sont parallèles. Son aire se calcule simplement en multipliant la base par la hauteur, sans diviser par deux. Un parallélogramme de base 7 centimètres et de hauteur 3 centimètres a donc une aire de 21 centimètres carrés.",
    },
    {
      titre: "Le cercle et le disque",
      illustration: "⭕",
      visuel: "Cercle = contour, Disque = surface",
      contenu: [
        "Le cercle est la ligne qui fait le tour (le contour)",
        "Le disque est la surface à l'intérieur du cercle",
        "Le rayon (r) va du centre au bord ; le diamètre (d) = 2 × r",
        "Circonférence du cercle : C = π × d = 2 × π × r",
      ],
      voixOff:
        "Il ne faut pas confondre le cercle et le disque. Le cercle, c'est seulement la ligne courbe qui fait le tour, comme le contour d'une roue. Le disque, c'est toute la surface à l'intérieur. Le tour du cercle s'appelle la circonférence, et elle se calcule avec pi fois le diamètre, ou deux fois pi fois le rayon.",
    },
    {
      titre: "Périmètre et aire du disque",
      illustration: "🎯",
      visuel: "A = π × r²",
      contenu: [
        "Aire du disque : A = π × r²",
        "On utilise π ≈ 3,14 pour calculer une valeur approchée",
        "Exemple : disque de rayon 5 cm → A ≈ 3,14×5×5 = 78,5 cm²",
        "Circonférence : ≈ 2×3,14×5 = 31,4 cm",
      ],
      voixOff:
        "L'aire d'un disque se calcule avec la formule pi fois rayon au carré. On utilise en général la valeur approchée pi environ égal à 3,14. Pour un disque de rayon 5 centimètres, l'aire vaut environ 3,14 fois 5 fois 5, soit 78,5 centimètres carrés, et sa circonférence vaut environ 2 fois 3,14 fois 5, soit 31,4 centimètres. Attention à ne pas confondre rayon au carré et 2 fois le rayon !",
    },
    {
      titre: "Les unités d'aire",
      illustration: "📏",
      visuel: "1 cm² = 100 mm²",
      contenu: [
        "Unités d'aire : mm², cm², dm², m², km²",
        "Chaque unité d'aire vaut 100 fois l'unité juste en dessous",
        "1 cm² = 100 mm² ; 1 m² = 10 000 cm²",
        "Pour les longueurs, on multiplie/divise par 10 ; pour les aires, par 100 !",
      ],
      voixOff:
        "Les unités d'aire ne fonctionnent pas comme les unités de longueur. Pour les longueurs, on passe d'une unité à l'autre en multipliant ou en divisant par 10. Mais pour les aires, comme on a une unité au carré, on multiplie ou on divise par 100. Ainsi, un centimètre carré vaut 100 millimètres carrés, et un mètre carré vaut 10 000 centimètres carrés.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Périmètre = longueur du contour (cm, m...) ; Aire = surface (cm², m²...)",
        "Rectangle : P = 2×(L+l) ; A = L×l",
        "Triangle : A = (base×hauteur)÷2 ; Parallélogramme : A = base×hauteur",
        "Disque : A = π×r² ; Circonférence = 2×π×r",
      ],
      voixOff:
        "Résumons l'essentiel. Le périmètre est une longueur qui mesure le contour d'une figure, alors que l'aire est une surface qui mesure l'intérieur. Pour un rectangle, le périmètre vaut deux fois la somme des côtés, et l'aire vaut longueur fois largeur. Pour un triangle, on divise par deux le produit base fois hauteur, mais pas pour un parallélogramme. Enfin, pour un disque, l'aire vaut pi fois rayon au carré, et la circonférence vaut deux fois pi fois rayon. Bravo, tu maîtrises maintenant les aires et les périmètres !",
    },
  ],
  fiche: {
    intro:
      "Le périmètre est la longueur du contour d'une figure. L'aire est la mesure de la surface qu'elle occupe. Ce sont deux grandeurs différentes, avec des unités différentes.",
    sections: [
      {
        titre: "Périmètre : la longueur du contour",
        points: [
          "Polygone : on additionne la longueur de tous les côtés",
          "Carré de côté c : P = 4 × c",
          "Rectangle de longueur L et largeur l : P = 2 × (L + l)",
          "Cercle de rayon r : circonférence C = 2 × π × r ≈ 2 × 3,14 × r",
        ],
      },
      {
        titre: "Aire : la mesure de la surface",
        points: [
          "Carré : A = c × c = c² ; Rectangle : A = L × l",
          "Triangle : A = (base × hauteur) ÷ 2",
          "Parallélogramme : A = base × hauteur",
          "Disque de rayon r : A = π × r² ≈ 3,14 × r²",
        ],
      },
      {
        titre: "Unités et conversions",
        points: [
          "Longueurs : mm, cm, dm, m, km (on multiplie/divise par 10 entre unités voisines)",
          "Aires : mm², cm², dm², m², km² (on multiplie/divise par 100 entre unités voisines)",
          "1 cm² = 100 mm² ; 1 m² = 10 000 cm²",
        ],
      },
      {
        titre: "Applications concrètes",
        points: [
          "Peinture, gazon, carrelage → on calcule une aire",
          "Clôture, bordure, cadre → on calcule un périmètre",
          "Toujours vérifier l'unité de la réponse (cm ou cm² ?)",
        ],
      },
    ],
    audio:
      "Fiche de révision : aires et périmètres. Le périmètre est la longueur du contour d'une figure : pour un polygone, on additionne la longueur de tous les côtés. Pour un carré de côté c, le périmètre vaut 4 fois c. Pour un rectangle de longueur L et de largeur l, le périmètre vaut 2 fois la somme de L et l. L'aire, elle, mesure la surface à l'intérieur de la figure. L'aire d'un carré vaut c fois c, celle d'un rectangle vaut longueur fois largeur, celle d'un triangle vaut base fois hauteur divisé par 2, et celle d'un parallélogramme vaut base fois hauteur, sans division. Pour un disque de rayon r, l'aire vaut pi fois r au carré, et la circonférence, c'est-à-dire le tour du cercle, vaut 2 fois pi fois r, avec pi environ égal à 3,14. Attention aux unités : pour les longueurs, on multiplie ou on divise par 10 entre deux unités voisines, mais pour les aires, comme ce sont des unités au carré, on multiplie ou on divise par 100 : un centimètre carré vaut 100 millimètres carrés, et un mètre carré vaut 10 000 centimètres carrés. Dans la vie courante, on calcule une aire pour de la peinture, du gazon ou du carrelage, et un périmètre pour une clôture ou une bordure.",
  },
  memoCards: [
    { recto: "Différence entre périmètre et aire ?", verso: "Le périmètre est une longueur (le tour) ; l'aire est une surface (l'intérieur)." },
    { recto: "Périmètre d'un rectangle L × l ?", verso: "P = 2 × (L + l)" },
    { recto: "Aire d'un rectangle L × l ?", verso: "A = L × l" },
    { recto: "Aire d'un triangle (base × hauteur) ?", verso: "A = (base × hauteur) ÷ 2" },
    { recto: "Aire d'un parallélogramme ?", verso: "A = base × hauteur (pas de division par 2)" },
    { recto: "Aire d'un disque de rayon r ?", verso: "A = π × r² ≈ 3,14 × r²" },
    { recto: "Circonférence d'un cercle de rayon r ?", verso: "C = 2 × π × r ≈ 2 × 3,14 × r" },
    { recto: "1 m² = combien de cm² ?", verso: "1 m² = 10 000 cm² (on multiplie par 100 entre unités d'aire voisines)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un rectangle mesure 6 cm de longueur et 4 cm de largeur. Quel est son périmètre ?",
      choix: ["10 cm", "20 cm", "24 cm", "40 cm"],
      bonneReponse: 1,
      explication: "P = 2×(6+4) = 2×10 = 20 cm.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Ce même rectangle (6 cm × 4 cm) a pour aire :",
      choix: ["10 cm²", "20 cm²", "24 cm²", "40 cm²"],
      bonneReponse: 2,
      explication: "A = 6×4 = 24 cm².",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un carré a un côté de 9 cm. Calcule son périmètre et son aire.",
      reponse: "P = 36 cm et A = 81 cm²",
      explication: "P = 4×9 = 36 cm ; A = 9×9 = 81 cm².",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'aire d'un triangle de base 10 cm et de hauteur 6 cm.",
      reponse: "30 cm²",
      explication: "A = (base×hauteur)÷2 = (10×6)÷2 = 60÷2 = 30 cm².",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un parallélogramme a une base de 8 cm et une hauteur de 5 cm. Son aire est :",
      choix: ["20 cm²", "40 cm²", "13 cm²", "80 cm²"],
      bonneReponse: 1,
      explication: "A = base×hauteur = 8×5 = 40 cm² (pas de division par 2 pour un parallélogramme).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'aire d'un disque de rayon 4 cm (π ≈ 3,14).",
      reponse: "≈ 50,24 cm²",
      explication: "A = π×r² ≈ 3,14×4×4 = 3,14×16 = 50,24 cm².",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule la circonférence d'un cercle de rayon 3 cm (π ≈ 3,14).",
      reponse: "≈ 18,84 cm",
      explication: "C = 2×π×r ≈ 2×3,14×3 = 18,84 cm.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "5 cm², cela représente combien de mm² ?",
      choix: ["50 mm²", "500 mm²", "5 000 mm²", "0,5 mm²"],
      bonneReponse: 1,
      explication: "1 cm² = 100 mm², donc 5 cm² = 5×100 = 500 mm².",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Convertis 3,2 m² en cm².",
      reponse: "32 000 cm²",
      explication: "1 m² = 10 000 cm², donc 3,2 m² = 3,2×10 000 = 32 000 cm².",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un jardin rectangulaire mesure 12 m de long et 7 m de large. On veut poser du gazon sur toute la surface et une clôture tout autour. Calcule la quantité de gazon (aire) et la longueur de clôture (périmètre) nécessaires.",
      reponse: "Gazon : 84 m² ; Clôture : 38 m",
      explication: "Aire = 12×7 = 84 m² (surface de gazon). Périmètre = 2×(12+7) = 2×19 = 38 m (longueur de clôture).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un terrain de basket est un rectangle de 28 m sur 15 m. Combien de m² de peinture faut-il pour couvrir tout le terrain, et quelle longueur fait le tour du terrain ?",
      reponse: "Aire à peindre : 420 m² ; Tour du terrain : 86 m",
      explication: "A = 28×15 = 420 m². P = 2×(28+15) = 2×43 = 86 m.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un carré a un périmètre de 24 cm. Quelle est son aire ?",
      choix: ["24 cm²", "36 cm²", "144 cm²", "6 cm²"],
      bonneReponse: 1,
      explication: "Côté = 24÷4 = 6 cm. Aire = 6×6 = 36 cm².",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle unité mesure une aire ?",
      choix: ["cm", "cm²", "cm³", "km"],
      bonneReponse: 1,
      explication: "L'aire se mesure en unités carrées, comme cm².",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule le périmètre d'un carré de côté 7 cm.",
      reponse: "28 cm",
      explication: "P = 4×7 = 28 cm.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'aire d'un rectangle de 9 cm sur 3 cm.",
      reponse: "27 cm²",
      explication: "A = 9×3 = 27 cm².",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la formule de l'aire d'un triangle ?",
      choix: ["base×hauteur", "base×hauteur÷2", "(base+hauteur)×2", "base÷hauteur"],
      bonneReponse: 1,
      explication: "A = (base×hauteur)÷2.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule l'aire d'un disque de rayon 2 cm (π ≈ 3,14).",
      reponse: "≈ 12,56 cm²",
      explication: "A = π×r² ≈ 3,14×2×2 = 12,56 cm².",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Aires et périmètres",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le périmètre d'une figure, c'est :",
          choix: ["La surface intérieure", "La longueur du contour", "Le nombre de côtés", "La moitié de l'aire"],
          bonneReponse: 1,
          explication: "Le périmètre est la longueur totale du contour de la figure.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule le périmètre d'un rectangle de longueur 11 cm et de largeur 4 cm.",
          reponse: "30 cm",
          explication: "P = 2×(11+4) = 2×15 = 30 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule l'aire de ce même rectangle (11 cm × 4 cm).",
          reponse: "44 cm²",
          explication: "A = 11×4 = 44 cm².",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un triangle a une base de 12 cm et une hauteur de 5 cm. Son aire est :",
          choix: ["60 cm²", "17 cm²", "30 cm²", "6 cm²"],
          bonneReponse: 2,
          explication: "A = (12×5)÷2 = 60÷2 = 30 cm².",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un disque a un rayon de 10 cm. Calcule son aire et sa circonférence (π ≈ 3,14).",
          reponse: "Aire ≈ 314 cm² ; Circonférence ≈ 62,8 cm",
          explication: "A = π×r² ≈ 3,14×100 = 314 cm². C = 2×π×r ≈ 2×3,14×10 = 62,8 cm.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une salle rectangulaire mesure 6 m de long sur 4,5 m de large. On veut poser du carrelage sur tout le sol et une plinthe tout autour. Calcule la surface à carreler et la longueur de plinthe nécessaire.",
          reponse: "Carrelage : 27 m² ; Plinthe : 21 m",
          explication: "A = 6×4,5 = 27 m² (surface à carreler). P = 2×(6+4,5) = 2×10,5 = 21 m (longueur de plinthe).",
        },
      ],
    },
    {
      titre: "Examen 2 — Aires et périmètres",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'aire d'une figure se mesure en :",
          choix: ["mètres", "mètres carrés", "mètres cubes", "litres"],
          bonneReponse: 1,
          explication: "L'aire est une surface, elle se mesure en unités carrées (m², cm²...).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule l'aire d'un carré de côté 8 cm.",
          reponse: "64 cm²",
          explication: "A = 8×8 = 64 cm².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule le périmètre d'un triangle dont les côtés mesurent 5 cm, 7 cm et 9 cm.",
          reponse: "21 cm",
          explication: "On additionne les trois côtés : 5+7+9 = 21 cm.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un parallélogramme a une base de 9 cm et une hauteur de 4 cm. Son aire est :",
          choix: ["13 cm²", "18 cm²", "36 cm²", "26 cm²"],
          bonneReponse: 2,
          explication: "A = base×hauteur = 9×4 = 36 cm² (pas de division par 2 pour un parallélogramme).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Convertis 2,5 m² en cm², puis 750 mm² en cm².",
          reponse: "2,5 m² = 25 000 cm² ; 750 mm² = 7,5 cm²",
          explication: "1 m² = 10 000 cm², donc 2,5×10 000 = 25 000 cm². 1 cm² = 100 mm², donc 750÷100 = 7,5 cm².",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un rond-point circulaire a un rayon de 15 m. On veut engazonner tout le disque central et poser une bordure tout autour. Calcule l'aire à engazonner et la longueur de bordure (π ≈ 3,14).",
          reponse: "Aire ≈ 706,5 m² ; Bordure ≈ 94,2 m",
          explication: "A = π×r² ≈ 3,14×225 = 706,5 m². C = 2×π×r ≈ 2×3,14×15 = 94,2 m.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le périmètre mesure une longueur (le tour d'une figure) ; l'aire mesure une surface (l'intérieur).",
    "Rectangle : P = 2×(L+l) et A = L×l ; Carré : P = 4×c et A = c².",
    "Triangle : A = (base×hauteur)÷2 ; Parallélogramme : A = base×hauteur (sans diviser par 2).",
    "Disque de rayon r : aire A = π×r² et circonférence C = 2×π×r, avec π ≈ 3,14.",
    "Entre deux unités d'aire voisines (mm², cm², dm², m², km²), on multiplie ou on divise par 100, alors que pour les longueurs on multiplie ou on divise par 10.",
    "Erreur à éviter absolument : mélanger périmètre et aire, ou confondre π×r² avec 2×π×r.",
  ],
},
{
  slug: "calcul-litteral-initiation",
  titre: "Initiation au calcul littéral",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Découvrir les expressions littérales, savoir substituer une lettre par une valeur, réduire une expression et utiliser le calcul littéral pour les formules de périmètre et d'aire.",
  objectifs: [
    "Comprendre qu'une lettre représente un nombre inconnu ou variable",
    "Connaître les règles d'écriture d'une expression littérale (3a, ab...)",
    "Substituer une lettre par une valeur pour calculer une expression",
    "Réduire une expression en regroupant les termes semblables",
    "Utiliser le calcul littéral dans des formules de périmètre et d'aire, et découvrir la distributivité",
  ],
  slides: [
    {
      titre: "Une lettre pour représenter un nombre",
      illustration: "🔤",
      visuel: "x",
      contenu: [
        "En calcul littéral, une lettre (x, a, n...) représente un nombre inconnu ou variable",
        "Une expression contenant des lettres s'appelle une expression littérale",
        "Exemple : 3x + 5 est une expression littérale",
        "Une expression sans lettre, comme 3×7+5, est une expression numérique",
      ],
      voixOff:
        "En calcul littéral, on utilise des lettres, comme x, a ou n, pour représenter un nombre inconnu ou qui peut varier. Une expression qui contient une ou plusieurs lettres s'appelle une expression littérale. Par exemple, 3x plus 5 est une expression littérale, alors que 3 fois 7 plus 5 est une expression numérique, car elle ne contient que des nombres.",
    },
    {
      titre: "Les règles d'écriture",
      illustration: "✍️",
      visuel: "3a et non 3×a",
      contenu: [
        "Entre un nombre et une lettre, on n'écrit pas le signe × : 3×a s'écrit 3a",
        "Entre deux lettres non plus : a×b s'écrit ab",
        "Entre deux nombres, on garde le signe × : 3×5 reste 3×5",
        "3a signifie donc « 3 fois a »",
      ],
      voixOff:
        "Pour écrire une expression littérale, on suit des règles précises. Entre un nombre et une lettre, on n'écrit plus le signe multiplié : 3 fois a s'écrit simplement 3a. De même entre deux lettres, a fois b s'écrit ab. En revanche, entre deux nombres, on garde toujours le signe multiplié.",
    },
    {
      titre: "Substituer une lettre par un nombre",
      illustration: "🔁",
      visuel: "a=5 → 3a+2=17",
      contenu: [
        "Substituer, c'est remplacer une lettre par une valeur numérique",
        "Pour calculer 3a+2 quand a=5 : on remplace a par 5",
        "3a+2 = 3×5+2 = 15+2 = 17",
        "On respecte toujours les priorités opératoires (× avant +)",
      ],
      voixOff:
        "Substituer une lettre, c'est la remplacer par un nombre pour calculer la valeur de l'expression. Si a vaut 5, alors 3a plus 2 devient 3 fois 5 plus 2, soit 15 plus 2, c'est-à-dire 17. N'oublie pas de respecter les priorités : on effectue toujours la multiplication avant l'addition.",
    },
    {
      titre: "Les termes d'une expression",
      illustration: "🧩",
      visuel: "3a + 5b − 2",
      contenu: [
        "Une expression littérale est composée de termes séparés par + ou −",
        "Dans 3a + 5b − 2, les termes sont 3a, 5b et −2",
        "3a est le terme « en a », 5b est le terme « en b »",
        "−2 est un terme constant (sans lettre)",
      ],
      voixOff:
        "Une expression littérale est formée de plusieurs termes, séparés par des signes plus ou moins. Dans l'expression 3a plus 5b moins 2, il y a trois termes : 3a, 5b, et moins 2. On dit que 3a est un terme en a, 5b est un terme en b, et moins 2 est un terme constant, car il ne contient pas de lettre.",
    },
    {
      titre: "Réduire une expression",
      illustration: "🧮",
      visuel: "3a + 5a = 8a",
      contenu: [
        "Réduire, c'est regrouper les termes semblables (même lettre)",
        "3a + 5a = 8a (on additionne les nombres devant la même lettre)",
        "7x − 2x = 5x",
        "⚠️ On ne peut PAS réduire 3a + 5b : les lettres sont différentes",
      ],
      voixOff:
        "Réduire une expression, c'est regrouper les termes qui se ressemblent, c'est-à-dire ceux qui ont la même lettre. Trois a plus cinq a égale huit a, et sept x moins deux x égale cinq x. Attention, on ne peut jamais additionner des termes avec des lettres différentes : trois a plus cinq b ne peut pas être réduit, il reste 3a plus 5b.",
    },
    {
      titre: "Le calcul littéral en géométrie",
      illustration: "📐",
      visuel: "P = 4c    A = L×l",
      contenu: [
        "Le périmètre d'un carré de côté c : P = 4×c, soit 4c",
        "Le périmètre d'un rectangle : P = 2×(L+l)",
        "L'aire d'un rectangle : A = L×l",
        "L'aire d'un carré de côté c : A = c×c = c²",
      ],
      voixOff:
        "Les formules de géométrie sont un excellent exemple de calcul littéral. Le périmètre d'un carré de côté c vaut 4 fois c. Le périmètre d'un rectangle vaut 2 fois la somme de la longueur et de la largeur. L'aire d'un rectangle vaut longueur fois largeur, et l'aire d'un carré vaut c fois c, que l'on note c au carré.",
    },
    {
      titre: "Un calcul astucieux : la distributivité",
      illustration: "💡",
      visuel: "5×98 = 5×(100−2) = 490",
      contenu: [
        "Règle : k×(a+b) = k×a + k×b",
        "On peut aussi l'utiliser avec une soustraction : k×(a−b) = k×a − k×b",
        "Exemple : 5×98 = 5×(100−2) = 5×100 − 5×2 = 500 − 10 = 490",
        "Cette astuce permet de calculer plus vite, de tête",
      ],
      voixOff:
        "Voici une propriété très utile : k fois la quantité a plus b est égal à k fois a plus k fois b. On peut l'utiliser pour calculer plus vite. Par exemple, pour calculer 5 fois 98, on écrit 98 comme 100 moins 2. On obtient 5 fois 100 moins 5 fois 2, soit 500 moins 10, c'est-à-dire 490.",
    },
    {
      titre: "Tester si une égalité est vraie",
      illustration: "🔍",
      visuel: "2x+1 = 9 ? (x=4)",
      contenu: [
        "On peut vérifier si une expression est égale à un nombre pour une valeur donnée",
        "Est-ce que 2x+1 = 9 quand x=4 ?",
        "On substitue : 2×4+1 = 8+1 = 9",
        "L'égalité est vraie pour x=4",
      ],
      voixOff:
        "On peut aussi tester si une égalité est vraie pour une valeur donnée de la lettre. Par exemple, l'expression 2x plus 1 est-elle égale à 9 quand x vaut 4 ? On substitue x par 4 : 2 fois 4 plus 1 égale 8 plus 1, c'est-à-dire 9. L'égalité est donc vraie pour x égal 4.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Une lettre représente un nombre inconnu ou variable",
        "3a, ab : on n'écrit pas le signe × entre un nombre et une lettre, ni entre deux lettres",
        "Substituer = remplacer une lettre par sa valeur pour calculer",
        "On ne réduit que des termes de même lettre : 3a+5a=8a, mais 3a+5b ne se réduit pas",
      ],
      voixOff:
        "Résumons l'essentiel. Une lettre représente un nombre inconnu ou variable. On n'écrit pas le signe multiplié entre un nombre et une lettre, ni entre deux lettres. Substituer une lettre, c'est la remplacer par sa valeur pour calculer l'expression. Enfin, on ne peut réduire que des termes qui ont la même lettre. Tu connais maintenant les bases du calcul littéral !",
    },
  ],
  fiche: {
    intro:
      "Le calcul littéral utilise des lettres pour représenter des nombres. On peut substituer une lettre par une valeur, regrouper des termes semblables, et utiliser des formules pour calculer des périmètres et des aires.",
    sections: [
      {
        titre: "Vocabulaire",
        points: [
          "Expression littérale : expression qui contient une ou plusieurs lettres (ex : 3x+5)",
          "Variable : la lettre qui représente le nombre inconnu (souvent x, a, n)",
          "Substituer : remplacer une lettre par une valeur numérique pour calculer",
        ],
      },
      {
        titre: "Écriture et termes",
        points: [
          "On n'écrit pas × entre un nombre et une lettre : 3×a s'écrit 3a",
          "On n'écrit pas × entre deux lettres : a×b s'écrit ab",
          "On garde × entre deux nombres : 3×5",
          "Une expression est composée de termes séparés par + ou − (ex : dans 3a+5b−2, les termes sont 3a, 5b et −2)",
        ],
      },
      {
        titre: "Réduire une expression",
        points: [
          "Réduire = regrouper les termes qui ont la même lettre",
          "3a+5a = 8a ; 7x−2x = 5x",
          "On ne peut pas réduire des termes de lettres différentes : 3a+5b reste 3a+5b",
        ],
      },
      {
        titre: "Formules et distributivité",
        points: [
          "Périmètre du carré : P = 4c ; périmètre du rectangle : P = 2×(L+l)",
          "Aire du rectangle : A = L×l ; aire du carré : A = c×c = c²",
          "Distributivité : k×(a+b) = k×a + k×b, utile pour calculer astucieusement (5×98 = 5×100−5×2 = 490)",
        ],
      },
    ],
    audio:
      "Fiche de révision : initiation au calcul littéral. Une lettre, comme x, a ou n, représente un nombre inconnu ou variable, et une expression qui contient des lettres s'appelle une expression littérale. Attention aux règles d'écriture : on n'écrit pas le signe multiplié entre un nombre et une lettre, ni entre deux lettres, donc 3 fois a s'écrit 3a, et a fois b s'écrit ab ; en revanche on garde le signe multiplié entre deux nombres. Substituer une lettre, c'est la remplacer par une valeur numérique pour calculer l'expression : si a vaut 5, alors 3a plus 2 égale 3 fois 5 plus 2, soit 17. Une expression littérale est composée de termes séparés par des signes plus ou moins : dans 3a plus 5b moins 2, les termes sont 3a, 5b et moins 2. Réduire une expression, c'est regrouper les termes qui ont la même lettre : 3a plus 5a égale 8a, mais on ne peut jamais réduire 3a plus 5b, car les lettres sont différentes. Le calcul littéral sert aussi en géométrie : le périmètre d'un carré est 4c, le périmètre d'un rectangle est 2 fois la somme de la longueur et de la largeur, l'aire d'un rectangle est L fois l, et l'aire d'un carré est c au carré. Enfin, la distributivité dit que k fois la quantité a plus b égale k fois a plus k fois b : c'est une astuce pratique, par exemple pour calculer 5 fois 98 en écrivant 98 comme 100 moins 2, ce qui donne 490.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce qu'une expression littérale ?",
      verso: "Une expression qui contient une ou plusieurs lettres représentant des nombres. Ex : 3x+5",
    },
    {
      recto: "Comment écrit-on 3×a ?",
      verso: "3a. On n'écrit pas le signe × entre un nombre et une lettre.",
    },
    {
      recto: "Que signifie « substituer » ?",
      verso: "Remplacer une lettre par une valeur numérique pour calculer l'expression. Ex : a=5 → 3a+2=17",
    },
    {
      recto: "Quels sont les termes de 3a+5b−2 ?",
      verso: "3a, 5b et −2 (séparés par + ou −).",
    },
    {
      recto: "Réduis 3a+5a",
      verso: "8a (on additionne les nombres devant la même lettre).",
    },
    {
      recto: "Peut-on réduire 3a+5b ?",
      verso: "Non ! Les lettres sont différentes, on ne peut pas regrouper ces termes.",
    },
    {
      recto: "Périmètre d'un carré de côté c ?",
      verso: "P = 4c (on peut aussi écrire 4×c).",
    },
    {
      recto: "Distributivité : k×(a+b) = ?",
      verso: "k×a + k×b. Ex : 5×98 = 5×(100−2) = 500−10 = 490",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment écrit-on 3×a en calcul littéral ?",
      choix: ["3×a", "3a", "a3", "3+a"],
      bonneReponse: 1,
      explication: "On n'écrit pas le signe × entre un nombre et une lettre : 3×a s'écrit 3a.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Si x = 5, que vaut 2x ?",
      choix: ["7", "10", "25", "2"],
      bonneReponse: 1,
      explication: "2x signifie 2×x. Pour x=5 : 2×5 = 10.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule la valeur de 3a+2 pour a=5.",
      reponse: "17",
      explication: "On substitue a par 5 : 3×5+2 = 15+2 = 17.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans l'expression 4x − 3, quelle est la variable (la lettre) ?",
      reponse: "x",
      explication: "La variable est la lettre qui représente le nombre inconnu : ici, c'est x.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Combien de termes contient l'expression 3a + 5b − 2 ?",
      choix: ["2", "3", "4", "1"],
      bonneReponse: 1,
      explication: "Les termes, séparés par + ou −, sont 3a, 5b et −2 : il y en a 3.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réduis l'expression 3a + 5a.",
      reponse: "8a",
      explication: "3a et 5a sont des termes semblables (même lettre a) : 3+5 = 8, donc 3a+5a = 8a.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Peut-on réduire l'expression 3a + 5b ? Justifie ta réponse.",
      reponse: "Non, on ne peut pas réduire cette expression, elle reste 3a + 5b.",
      explication: "3a et 5b n'ont pas la même lettre : ce ne sont pas des termes semblables, on ne peut donc pas les regrouper.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est l'aire d'un carré de côté c=6 cm (A = c²) ?",
      choix: ["12", "24", "36", "6"],
      bonneReponse: 2,
      explication: "A = c×c = 6×6 = 36 : l'aire vaut 36 cm².",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le périmètre d'un rectangle de longueur L=8 cm et largeur l=3 cm, avec la formule P = 2×(L+l).",
      reponse: "22 cm",
      explication: "P = 2×(8+3) = 2×11 = 22 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Réduis l'expression 7x − 2x + 3.",
      reponse: "5x + 3",
      explication: "7x et −2x sont des termes semblables : 7x−2x = 5x. Le terme constant +3 ne peut pas se regrouper avec 5x, l'expression réduite est donc 5x+3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Utilise la distributivité pour calculer astucieusement 5×98.",
      reponse: "490",
      explication: "5×98 = 5×(100−2) = 5×100 − 5×2 = 500 − 10 = 490.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pour x=4, l'expression 2x+1 est-elle égale à 9 ?",
      choix: ["Oui", "Non", "On ne peut pas savoir", "Seulement si x=9"],
      bonneReponse: 0,
      explication: "On substitue x par 4 : 2×4+1 = 8+1 = 9. L'égalité est bien vraie pour x=4.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que représente une lettre dans une expression littérale ?",
      choix: ["Toujours le nombre 1", "Un nombre inconnu ou variable", "Une unité de mesure", "Un signe d'opération"],
      bonneReponse: 1,
      explication: "Une lettre (x, a, n...) représente un nombre inconnu ou qui peut varier.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Pour a=3, calcule 5a.",
      reponse: "15",
      explication: "5a = 5×3 = 15.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réduis l'expression 9x − 4x.",
      reponse: "5x",
      explication: "9x et 4x sont des termes semblables : 9−4 = 5, donc 9x−4x = 5x.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quels termes peut-on additionner ou soustraire ensemble pour réduire une expression ?",
      choix: [
        "Des termes avec des lettres différentes",
        "Des termes avec la même lettre (même sorte)",
        "N'importe quels termes",
        "Seulement les nombres sans lettre",
      ],
      bonneReponse: 1,
      explication: "On ne peut regrouper que des termes semblables, c'est-à-dire ayant la même lettre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule astucieusement 4×102 en utilisant 4×(100+2).",
      reponse: "408",
      explication: "4×(100+2) = 4×100 + 4×2 = 400 + 8 = 408.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Initiation au calcul littéral",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment écrit-on 7×x sans le signe × ?",
          choix: ["7×x", "7x", "x7", "7+x"],
          bonneReponse: 1,
          explication: "On n'écrit pas le signe × entre un nombre et une lettre : 7×x s'écrit 7x.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Pour n=6, calcule 3n+4.",
          reponse: "22",
          explication: "3n+4 = 3×6+4 = 18+4 = 22.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réduis l'expression 6a + 2a − 3.",
          reponse: "8a − 3",
          explication: "6a et 2a sont des termes semblables : 6a+2a = 8a. Le terme −3 reste à part : l'expression réduite est 8a−3.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Le périmètre d'un carré de côté c est donné par P = 4c. Calcule P pour c=7 cm.",
          reponse: "28 cm",
          explication: "P = 4×7 = 28 cm.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Laquelle de ces expressions est égale à 3×(x+4) ?",
          choix: ["3x+4", "3x+12", "x+12", "3x+7"],
          bonneReponse: 1,
          explication: "Par distributivité : 3×(x+4) = 3×x + 3×4 = 3x+12.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule astucieusement 6×99 en écrivant 99 = 100 − 1.",
          reponse: "594",
          explication: "6×99 = 6×(100−1) = 6×100 − 6×1 = 600 − 6 = 594.",
        },
      ],
    },
    {
      titre: "Examen 2 — Initiation au calcul littéral",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que veut dire « substituer une lettre par une valeur » ?",
          choix: ["Supprimer la lettre", "Remplacer la lettre par un nombre pour calculer", "Multiplier par la lettre", "Additionner deux lettres"],
          bonneReponse: 1,
          explication: "Substituer, c'est remplacer une lettre par un nombre pour calculer la valeur de l'expression.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Pour x=2, calcule 5x − 1.",
          reponse: "9",
          explication: "5x−1 = 5×2−1 = 10−1 = 9.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans l'expression 7a − 3b + 1, quels sont les termes ?",
          reponse: "7a, −3b et 1",
          explication: "Les termes sont séparés par + ou − : ici, 7a, −3b et 1.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "L'aire d'un rectangle est A = L×l. Calcule A pour L=9 cm et l=4 cm.",
          reponse: "36 cm²",
          explication: "A = 9×4 = 36 cm².",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pour x=4, l'expression 3x+2 est-elle égale à 14 ?",
          choix: ["Oui", "Non", "Impossible à dire", "Seulement si x=14"],
          bonneReponse: 0,
          explication: "On substitue x par 4 : 3×4+2 = 12+2 = 14. L'égalité est bien vraie pour x=4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Réduis l'expression 5a + 3a − 2a.",
          reponse: "6a",
          explication: "5a+3a−2a : on additionne et soustrait les nombres devant la lettre a : 5+3−2 = 6, donc 6a.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une lettre représente un nombre inconnu ou variable : c'est la base du calcul littéral.",
    "On n'écrit jamais le signe × entre un nombre et une lettre, ni entre deux lettres (3a, ab).",
    "Substituer une lettre, c'est la remplacer par sa valeur pour calculer l'expression.",
    "On ne peut réduire (additionner ou soustraire) que des termes qui ont la même lettre.",
    "Les formules de périmètre et d'aire sont des exemples concrets de calcul littéral (P=4c, A=L×l...).",
    "La distributivité k×(a+b)=k×a+k×b permet de calculer plus vite, de tête.",
  ],
},
{
  slug: "enchainements-operations",
  titre: "Enchaînements d'opérations et priorités",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Apprendre à calculer une expression avec plusieurs opérations en respectant l'ordre des priorités : parenthèses, carrés, multiplications/divisions, puis additions/soustractions.",
  objectifs: [
    "Connaître l'ordre des priorités opératoires (parenthèses, carrés, × ÷, puis + −)",
    "Calculer une expression sans parenthèses en respectant les priorités",
    "Calculer une expression avec parenthèses, y compris des parenthèses imbriquées",
    "Calculer de gauche à droite les opérations de même priorité",
    "Utiliser les priorités opératoires pour résoudre des problèmes concrets (prix, distances...)",
  ],
  slides: [
    {
      titre: "Pourquoi des priorités ?",
      illustration: "🛒",
      visuel: "5 + 3 × 2 = ?",
      contenu: [
        "Une expression avec plusieurs opérations peut donner des résultats différents selon l'ordre choisi",
        "Il faut des règles communes pour que tout le monde trouve le même résultat",
        "Ces règles s'appellent les priorités opératoires",
        "Elles servent tous les jours : calculer un prix total, une distance...",
      ],
      voixOff:
        "Quand une expression contient plusieurs opérations, comme une addition et une multiplication, il ne faut surtout pas calculer dans l'ordre où on lit ! Il existe des règles précises, appelées priorités opératoires, qui permettent à tout le monde de trouver le même résultat. Nous allons les découvrir ensemble.",
    },
    {
      titre: "La règle principale",
      illustration: "✖️",
      visuel: "× ÷ avant + −",
      contenu: [
        "Dans une expression sans parenthèses...",
        "On effectue d'abord les multiplications et les divisions",
        "Ensuite seulement les additions et les soustractions",
        "On dit que × et ÷ sont prioritaires sur + et −",
      ],
      voixOff:
        "La règle la plus importante à retenir : dans une expression sans parenthèses, on effectue toujours en premier les multiplications et les divisions. Ce n'est qu'ensuite qu'on effectue les additions et les soustractions. On dit que la multiplication et la division sont prioritaires.",
    },
    {
      titre: "Un exemple simple",
      illustration: "🧮",
      visuel: "5 + 3 × 2 = 5 + 6 = 11",
      contenu: [
        "On repère d'abord la multiplication : 3 × 2 = 6",
        "On calcule ensuite l'addition : 5 + 6 = 11",
        "Réponse : 5 + 3 × 2 = 11 (et surtout pas 16 !)",
        "En calculant de gauche à droite on obtiendrait 8 × 2 = 16, ce qui est faux",
      ],
      voixOff:
        "Prenons un exemple : cinq plus trois fois deux. On repère d'abord la multiplication, trois fois deux, qui vaut six. On calcule ensuite cinq plus six, ce qui donne onze. Attention, si on avait additionné cinq et trois en premier, on aurait obtenu un résultat faux, seize.",
    },
    {
      titre: "Autre exemple avec une division",
      illustration: "➗",
      visuel: "20 − 8 ÷ 4 = 20 − 2 = 18",
      contenu: [
        "La division est prioritaire sur la soustraction",
        "On calcule d'abord 8 ÷ 4 = 2",
        "Puis 20 − 2 = 18",
        "Le résultat final est 18",
      ],
      voixOff:
        "Même principe avec une division : vingt moins huit divisé par quatre. On calcule d'abord huit divisé par quatre, qui vaut deux. Puis on calcule vingt moins deux, ce qui donne dix-huit.",
    },
    {
      titre: "À priorité égale : de gauche à droite",
      illustration: "↔️",
      visuel: "12 − 5 + 3 = 7 + 3 = 10",
      contenu: [
        "Quand il y a plusieurs + et − (ou plusieurs × et ÷), on calcule de gauche à droite",
        "12 − 5 + 3 : on calcule d'abord 12 − 5 = 7",
        "Puis 7 + 3 = 10",
        "Erreur fréquente : faire 5 + 3 = 8 puis 12 − 8 = 4 (FAUX !)",
      ],
      voixOff:
        "Quand plusieurs opérations ont la même priorité, comme une soustraction suivie d'une addition, on les effectue dans l'ordre, de gauche à droite. Douze moins cinq plus trois : on calcule d'abord douze moins cinq, qui fait sept, puis sept plus trois, qui fait dix. Une erreur fréquente serait de calculer cinq plus trois en premier, ce qui donnerait un résultat faux.",
    },
    {
      titre: "Les parenthèses d'abord",
      illustration: "🔵",
      visuel: "(5 + 3) × 2 = 8 × 2 = 16",
      contenu: [
        "Les parenthèses imposent l'ordre : on les calcule toujours en premier",
        "(5 + 3) × 2 : on calcule d'abord ce qu'il y a dans les parenthèses",
        "5 + 3 = 8, puis 8 × 2 = 16",
        "Sans les parenthèses, 5 + 3 × 2 aurait donné 11 : un résultat différent !",
      ],
      voixOff:
        "Les parenthèses permettent de changer l'ordre des calculs : on effectue toujours en premier ce qui se trouve à l'intérieur. Cinq plus trois entre parenthèses, multiplié par deux : on calcule d'abord cinq plus trois qui fait huit, puis huit fois deux qui fait seize. Remarque que sans les parenthèses, ce calcul aurait donné un résultat complètement différent, onze.",
    },
    {
      titre: "Parenthèses imbriquées",
      illustration: "🪆",
      visuel: "2 × (3 + (4 − 1)) = 12",
      contenu: [
        "Quand il y a des parenthèses dans des parenthèses, on commence par les plus intérieures",
        "4 − 1 = 3 (parenthèse la plus intérieure)",
        "3 + 3 = 6 (parenthèse extérieure)",
        "2 × 6 = 12",
      ],
      voixOff:
        "Il arrive qu'il y ait des parenthèses à l'intérieur d'autres parenthèses. Dans ce cas, on commence toujours par les parenthèses les plus intérieures. Deux fois, entre parenthèses, trois plus, entre parenthèses, quatre moins un : on calcule d'abord quatre moins un qui fait trois, puis trois plus trois qui fait six, et enfin deux fois six qui fait douze.",
    },
    {
      titre: "Et les carrés ?",
      illustration: "🔢",
      visuel: "5² = 25, calcul prioritaire",
      contenu: [
        "Le carré d'un nombre (5² = 5 × 5 = 25) se calcule avant les × et ÷",
        "Exemple : 3 + 4² = 3 + 16 = 19 (et pas 7² = 49 !)",
        "On calcule d'abord le carré, puis on applique les priorités habituelles",
        "Le carré est un calcul prioritaire, un peu comme les parenthèses",
      ],
      voixOff:
        "Un dernier cas particulier : le carré d'un nombre, comme cinq au carré qui vaut vingt-cinq, se calcule avant les multiplications, les divisions, les additions et les soustractions. Par exemple, trois plus quatre au carré : on calcule d'abord quatre au carré qui fait seize, puis trois plus seize qui fait dix-neuf. Il ne faut surtout pas additionner trois et quatre avant d'élever au carré.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 ( ) → ² → × ÷ → + −",
      contenu: [
        "Ordre des priorités : parenthèses (des plus intérieures aux extérieures), puis carrés, puis × et ÷, puis + et −",
        "À priorité égale, on calcule de gauche à droite",
        "Les priorités évitent les ambiguïtés et donnent un résultat unique",
        "Utile partout : prix total, distances, budgets...",
      ],
      voixOff:
        "Résumons l'ordre des priorités : on calcule d'abord les parenthèses, en partant des plus intérieures ; puis les carrés ; puis les multiplications et les divisions, de gauche à droite ; et enfin les additions et les soustractions, de gauche à droite. Grâce à ces règles, un calcul a toujours un seul et même résultat, ce qui est essentiel pour calculer un prix total ou une distance dans la vie de tous les jours.",
    },
  ],
  fiche: {
    intro:
      "Dans une expression avec plusieurs opérations, il existe un ordre précis à respecter : les priorités opératoires. Les respecter permet d'obtenir toujours le même résultat, quelle que soit la personne qui calcule.",
    sections: [
      {
        titre: "Règle sans parenthèses",
        points: [
          "On effectue d'abord les multiplications et les divisions",
          "Ensuite seulement les additions et les soustractions",
          "Exemple : 5 + 3 × 2 = 5 + 6 = 11",
          "Exemple : 20 − 8 ÷ 4 = 20 − 2 = 18",
        ],
      },
      {
        titre: "Même priorité : de gauche à droite",
        points: [
          "Entre plusieurs + et − (ou plusieurs × et ÷), on calcule dans l'ordre, de gauche à droite",
          "Exemple : 12 − 5 + 3 = 7 + 3 = 10",
          "Exemple : 20 ÷ 4 × 2 = 5 × 2 = 10",
        ],
      },
      {
        titre: "Les parenthèses",
        points: [
          "Les parenthèses sont toujours calculées en premier",
          "S'il y a des parenthèses imbriquées, on commence par les plus intérieures",
          "Exemple : (5 + 3) × 2 = 8 × 2 = 16",
          "Exemple : 2 × (3 + (4 − 1)) = 2 × (3 + 3) = 2 × 6 = 12",
        ],
      },
      {
        titre: "Le carré d'un nombre",
        points: [
          "5² = 5 × 5 = 25 : le carré se calcule avant × ÷ + −",
          "Exemple : 3 + 4² = 3 + 16 = 19",
        ],
      },
      {
        titre: "Erreurs à éviter",
        points: [
          "Ne pas calculer dans l'ordre de lecture sans respecter les priorités",
          "Ne pas oublier de résoudre les parenthèses avant tout le reste",
          "Bien repérer les opérations de même priorité et les traiter de gauche à droite",
        ],
      },
    ],
    audio:
      "Fiche de révision : les enchaînements d'opérations et les priorités. Dans une expression sans parenthèses, on effectue toujours en premier les multiplications et les divisions, et ensuite seulement les additions et les soustractions : cinq plus trois fois deux égale cinq plus six, soit onze. Quand plusieurs opérations ont la même priorité, comme plusieurs additions et soustractions, ou plusieurs multiplications et divisions, on les calcule dans l'ordre, de gauche à droite : douze moins cinq plus trois égale sept plus trois, soit dix. Les parenthèses sont toujours calculées en premier, et s'il y a des parenthèses à l'intérieur d'autres parenthèses, on commence par les plus intérieures : deux fois, entre parenthèses, trois plus, entre parenthèses, quatre moins un, égale deux fois six, soit douze. Le carré d'un nombre, comme cinq au carré qui vaut vingt-cinq, se calcule aussi avant les multiplications, les divisions, les additions et les soustractions. L'erreur la plus fréquente est de calculer dans l'ordre où l'on lit l'expression, sans respecter ces priorités : il faut toujours bien repérer les parenthèses, puis les carrés, puis les multiplications et les divisions, et enfin les additions et les soustractions.",
  },
  memoCards: [
    {
      recto: "Quel est l'ordre des priorités opératoires ?",
      verso: "1) Parenthèses (des plus intérieures aux extérieures) 2) Carrés 3) × et ÷ (de gauche à droite) 4) + et − (de gauche à droite).",
    },
    {
      recto: "5 + 3 × 2 = ?",
      verso: "11 : on calcule 3 × 2 = 6 d'abord, puis 5 + 6 = 11.",
    },
    {
      recto: "20 − 8 ÷ 4 = ?",
      verso: "18 : on calcule 8 ÷ 4 = 2 d'abord, puis 20 − 2 = 18.",
    },
    {
      recto: "12 − 5 + 3 = ?",
      verso: "10 : même priorité, on calcule de gauche à droite. 12 − 5 = 7, puis 7 + 3 = 10.",
    },
    {
      recto: "(5 + 3) × 2 = ?",
      verso: "16 : on calcule d'abord la parenthèse, 5 + 3 = 8, puis 8 × 2 = 16.",
    },
    {
      recto: "2 × (3 + (4 − 1)) = ?",
      verso: "12 : parenthèse la plus intérieure d'abord, 4 − 1 = 3, puis 3 + 3 = 6, puis 2 × 6 = 12.",
    },
    {
      recto: "3 + 4² = ?",
      verso: "19 : le carré se calcule avant, 4² = 16, puis 3 + 16 = 19.",
    },
    {
      recto: "Quelle est l'erreur classique à éviter ?",
      verso: "Calculer dans l'ordre où on lit, sans respecter les priorités. Il faut toujours faire × et ÷ avant + et −, sauf indication contraire par des parenthèses.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule : 4 + 2 × 3",
      choix: ["6", "9", "10", "18"],
      bonneReponse: 2,
      explication: "On calcule d'abord 2 × 3 = 6, puis 4 + 6 = 10.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule : 15 − 6 ÷ 3",
      choix: ["3", "9", "13", "18"],
      bonneReponse: 2,
      explication: "On calcule d'abord 6 ÷ 3 = 2, puis 15 − 2 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule : 7 × 2 + 5",
      reponse: "19",
      explication: "La multiplication est prioritaire : 7 × 2 = 14, puis 14 + 5 = 19.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule : 30 ÷ 5 − 2",
      reponse: "4",
      explication: "La division est prioritaire : 30 ÷ 5 = 6, puis 6 − 2 = 4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Calcule : 10 − 4 + 6",
      choix: ["0", "12", "20", "8"],
      bonneReponse: 1,
      explication: "Addition et soustraction ont la même priorité : on calcule de gauche à droite. 10 − 4 = 6, puis 6 + 6 = 12.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Calcule : 3 × 4 ÷ 2",
      choix: ["6", "1,5", "24", "2"],
      bonneReponse: 0,
      explication: "Multiplication et division ont la même priorité : on calcule de gauche à droite. 3 × 4 = 12, puis 12 ÷ 2 = 6.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule : (7 + 3) × 4",
      reponse: "40",
      explication: "On calcule d'abord la parenthèse : 7 + 3 = 10, puis 10 × 4 = 40.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule : 50 − (12 + 8)",
      reponse: "30",
      explication: "On calcule d'abord la parenthèse : 12 + 8 = 20, puis 50 − 20 = 30.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Léo achète 3 baguettes à 1 € l'une et un gâteau à 4 €. Écris le calcul du prix total et calcule-le.",
      reponse: "3 × 1 + 4 = 3 + 4 = 7 €",
      explication: "On calcule d'abord la multiplication, le prix des 3 baguettes : 3 × 1 = 3, puis on ajoute le gâteau : 3 + 4 = 7 €.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule : 2 × (3 + (4 − 1)) − 5",
      reponse: "7",
      explication: "On commence par la parenthèse la plus intérieure : 4 − 1 = 3. Puis 3 + 3 = 6. Puis 2 × 6 = 12. Enfin 12 − 5 = 7.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Calcule : 5² − 3 × 4",
      choix: ["13", "4", "17", "88"],
      bonneReponse: 0,
      explication: "Le carré est prioritaire : 5² = 25. Puis la multiplication : 3 × 4 = 12. Enfin la soustraction : 25 − 12 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une voiture roule à 80 km/h pendant 2 h, s'arrête 1 h, puis repart 1 h à la même vitesse. Écris un calcul avec des parenthèses pour trouver la distance totale parcourue, puis calcule-la.",
      reponse: "80 × (2 + 1) = 80 × 3 = 240 km",
      explication: "Le temps de conduite total est 2 + 1 = 3 h (l'heure d'arrêt ne compte pas). On calcule ensuite la distance : 80 × 3 = 240 km. On peut aussi écrire 80 × 2 + 80 × 1 = 160 + 80 = 240 km.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule : 6 + 2 × 5",
      choix: ["16", "40", "13", "8"],
      bonneReponse: 0,
      explication: "On calcule d'abord 2 × 5 = 10 (priorité), puis 6 + 10 = 16.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule : 18 ÷ 3 + 4",
      reponse: "10",
      explication: "La division est prioritaire : 18 ÷ 3 = 6, puis 6 + 4 = 10.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Calcule : (9 − 4) × 3",
      choix: ["15", "23", "9", "5"],
      bonneReponse: 0,
      explication: "On calcule d'abord la parenthèse : 9 − 4 = 5, puis 5 × 3 = 15.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule : 20 − 3 × 5",
      reponse: "5",
      explication: "La multiplication est prioritaire : 3 × 5 = 15, puis 20 − 15 = 5.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule : 2² + 3 × (7 − 4)",
      reponse: "13",
      explication: "Parenthèse d'abord : 7 − 4 = 3. Puis le carré : 2² = 4. Puis la multiplication : 3 × 3 = 9. Enfin l'addition : 4 + 9 = 13.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Enchaînements d'opérations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Calcule : 8 + 3 × 2",
          choix: ["14", "22", "13", "24"],
          bonneReponse: 0,
          explication: "On calcule d'abord 3 × 2 = 6, puis 8 + 6 = 14.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule : 40 − 5 × 6",
          reponse: "10",
          explication: "La multiplication est prioritaire : 5 × 6 = 30, puis 40 − 30 = 10.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule : 15 ÷ 3 + 2 × 4",
          reponse: "13",
          explication: "On effectue les deux multiplications/divisions d'abord : 15 ÷ 3 = 5 et 2 × 4 = 8. Puis on additionne : 5 + 8 = 13.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Calcule : (6 + 4) × (9 − 6)",
          choix: ["30", "19", "54", "13"],
          bonneReponse: 0,
          explication: "On calcule chaque parenthèse : 6 + 4 = 10 et 9 − 6 = 3. Puis 10 × 3 = 30.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule : 3 × (2 + (5 − 2)) + 4²",
          reponse: "31",
          explication: "Parenthèse la plus intérieure : 5 − 2 = 3. Puis 2 + 3 = 5. Puis 3 × 5 = 15. Le carré : 4² = 16. Enfin 15 + 16 = 31.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un plombier facture 45 € de déplacement, puis 30 € par heure de travail. Il travaille 3 heures. Écris le calcul du prix total et calcule-le.",
          reponse: "45 + 30 × 3 = 45 + 90 = 135 €",
          explication: "On calcule d'abord le coût des heures travaillées (priorité de la multiplication) : 30 × 3 = 90. Puis on ajoute le déplacement : 45 + 90 = 135 €.",
        },
      ],
    },
    {
      titre: "Examen 2 — Enchaînements d'opérations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Calcule : 9 − 2 × 3",
          choix: ["3", "21", "7", "1"],
          bonneReponse: 0,
          explication: "On calcule d'abord 2 × 3 = 6, puis 9 − 6 = 3.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule : 12 + 24 ÷ 4",
          reponse: "18",
          explication: "La division est prioritaire : 24 ÷ 4 = 6, puis 12 + 6 = 18.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Calcule : 16 − 6 + 2",
          choix: ["12", "8", "18", "14"],
          bonneReponse: 0,
          explication: "Même priorité : on calcule de gauche à droite. 16 − 6 = 10, puis 10 + 2 = 12.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule : 5 × (8 − 3) ÷ 5",
          reponse: "5",
          explication: "Parenthèse d'abord : 8 − 3 = 5. Puis de gauche à droite : 5 × 5 = 25, puis 25 ÷ 5 = 5.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule : 6² − (10 + (3 × 2))",
          reponse: "20",
          explication: "Parenthèse la plus intérieure : 3 × 2 = 6. Puis 10 + 6 = 16. Le carré : 6² = 36. Enfin 36 − 16 = 20.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un cinéma vend des places à 8 € et des places à tarif réduit à 5 €. Un groupe achète 4 places plein tarif et 6 places tarif réduit. Écris le calcul de la dépense totale et calcule-la.",
          reponse: "4 × 8 + 6 × 5 = 32 + 30 = 62 €",
          explication: "On calcule chaque type de place (priorité des multiplications) : 4 × 8 = 32 et 6 × 5 = 30. Puis on additionne : 32 + 30 = 62 €.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Sans parenthèses, on calcule toujours les multiplications et les divisions avant les additions et les soustractions.",
    "À priorité égale (plusieurs + et −, ou plusieurs × et ÷), on calcule dans l'ordre, de gauche à droite.",
    "Les parenthèses sont calculées en premier, des plus intérieures vers les plus extérieures.",
    "Le carré d'un nombre (comme 5² = 25) se calcule avant les multiplications, divisions, additions et soustractions.",
    "Erreur à éviter absolument : calculer dans l'ordre de lecture sans respecter les priorités.",
    "Ces règles garantissent qu'un calcul donne toujours le même résultat, utile pour un prix, une distance ou un budget.",
  ],
},
{
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
},
{
  slug: "nombres-relatifs",
  titre: "Les nombres relatifs",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Découvrir les nombres relatifs, savoir les comparer, les placer sur une droite graduée, et apprendre à les additionner et à les soustraire.",
  objectifs: [
    "Comprendre ce qu'est un nombre relatif (positif, négatif, nul)",
    "Repérer un nombre relatif sur une droite graduée et déterminer sa distance à zéro",
    "Comparer des nombres relatifs entre eux",
    "Additionner deux nombres relatifs, de même signe ou de signes contraires",
    "Soustraire un nombre relatif en utilisant son opposé",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un nombre relatif ?",
      illustration: "➕➖",
      visuel: "+5 ; −3 ; 0",
      contenu: [
        "Un nombre relatif est un nombre positif ou négatif",
        "Le signe + peut être omis devant un nombre positif : +5 s'écrit aussi 5",
        "Le signe − est obligatoire devant un nombre négatif",
        "0 n'est ni positif ni négatif",
      ],
      voixOff:
        "Un nombre relatif est un nombre qui possède un signe : il peut être positif ou négatif. Devant un nombre positif, le signe plus peut être écrit ou omis : plus cinq s'écrit aussi simplement cinq. En revanche, devant un nombre négatif, le signe moins est obligatoire. Le nombre zéro, lui, n'est ni positif ni négatif.",
    },
    {
      titre: "La droite graduée",
      illustration: "📏",
      visuel: "←−3 −2 −1 0 1 2 3→",
      contenu: [
        "On place les nombres relatifs sur une droite graduée",
        "Les nombres positifs sont à droite de 0",
        "Les nombres négatifs sont à gauche de 0",
        "L'abscisse d'un point est le nombre relatif qui lui correspond",
      ],
      voixOff:
        "Les nombres relatifs se placent sur une droite graduée. Le nombre zéro est au centre. Les nombres positifs sont placés à droite de zéro, les nombres négatifs à gauche. Le nombre associé à un point de la droite s'appelle son abscisse.",
    },
    {
      titre: "Distance à zéro et nombres opposés",
      illustration: "↔️",
      visuel: "−7 et +7 sont opposés",
      contenu: [
        "La distance à zéro d'un nombre relatif est toujours positive",
        "La distance à zéro de −7 est 7 ; celle de +7 est aussi 7",
        "Deux nombres opposés ont la même distance à zéro mais des signes contraires",
        "Exemple : +4 et −4 sont opposés",
      ],
      voixOff:
        "Chaque nombre relatif a une distance à zéro : c'est sa distance sur la droite graduée, et elle est toujours positive. Par exemple, la distance à zéro de moins sept est sept. Deux nombres qui ont la même distance à zéro mais des signes contraires sont appelés des nombres opposés : plus quatre et moins quatre sont opposés.",
    },
    {
      titre: "Comparer des nombres relatifs",
      illustration: "⚖️",
      visuel: "−2 > −8",
      contenu: [
        "Sur la droite graduée, le plus grand nombre est le plus à droite",
        "Tout nombre positif est plus grand que tout nombre négatif",
        "Entre deux négatifs, le plus grand a la plus petite distance à zéro",
        "Exemple : −2 > −8 car −2 est plus proche de 0",
      ],
      voixOff:
        "Pour comparer deux nombres relatifs, on regarde leur position sur la droite graduée : le plus grand est celui qui est le plus à droite. Un nombre positif est toujours plus grand qu'un nombre négatif. Entre deux nombres négatifs, c'est celui qui a la plus petite distance à zéro qui est le plus grand : par exemple, moins deux est plus grand que moins huit.",
    },
    {
      titre: "Additionner deux relatifs de même signe",
      illustration: "➕",
      visuel: "(−3) + (−5) = −8",
      contenu: [
        "On additionne les distances à zéro",
        "On garde le signe commun aux deux nombres",
        "Exemple : (−3) + (−5) = −8",
        "Autre exemple : (+2) + (+6) = +8",
      ],
      voixOff:
        "Pour additionner deux nombres relatifs de même signe, on additionne leurs distances à zéro, et on garde ce signe commun. Moins trois plus moins cinq : on additionne trois et cinq, ce qui donne huit, et on garde le signe moins. Le résultat est moins huit.",
    },
    {
      titre: "Additionner deux relatifs de signes contraires",
      illustration: "⚡",
      visuel: "(+7) + (−2) = +5",
      contenu: [
        "On soustrait la plus petite distance à zéro de la plus grande",
        "On garde le signe du nombre qui a la plus grande distance à zéro",
        "Exemple : (+7) + (−2) = +5",
        "Autre exemple : (−9) + (+4) = −5",
      ],
      voixOff:
        "Quand les deux nombres ont des signes contraires, on soustrait la plus petite distance à zéro de la plus grande, et on garde le signe du nombre qui a la plus grande distance à zéro. Plus sept plus moins deux : sept moins deux égale cinq, et on garde le signe plus, car sept est plus grand que deux. Le résultat est plus cinq.",
    },
    {
      titre: "Soustraire un nombre relatif",
      illustration: "➖",
      visuel: "a − b = a + (−b)",
      contenu: [
        "Soustraire un nombre relatif revient à ajouter son opposé",
        "Exemple : (+3) − (+8) = (+3) + (−8) = −5",
        "Exemple : (−4) − (−6) = (−4) + (+6) = +2",
        "On applique ensuite les règles de l'addition",
      ],
      voixOff:
        "Soustraire un nombre relatif revient toujours à ajouter son opposé. Par exemple, plus trois moins plus huit devient plus trois plus moins huit, ce qui donne moins cinq. De même, moins quatre moins moins six devient moins quatre plus plus six, ce qui donne plus deux. Il suffit ensuite d'appliquer les règles de l'addition que l'on connaît déjà.",
    },
    {
      titre: "Les relatifs dans la vie de tous les jours",
      illustration: "🌡️",
      visuel: "−5°C ... +12°C",
      contenu: [
        "Températures : −5°C le matin, +12°C l'après-midi",
        "Altitudes : −155 m pour le niveau de la mer Morte",
        "Soldes bancaires : un compte peut être négatif (découvert)",
        "Étages : le sous-sol −1 est sous le rez-de-chaussée",
      ],
      voixOff:
        "Les nombres relatifs sont partout dans la vie courante. On les utilise pour les températures, par exemple moins cinq degrés le matin et plus douze degrés l'après-midi. On les utilise aussi pour les altitudes, comme moins cent cinquante-cinq mètres pour la mer Morte, pour les soldes bancaires, ou encore pour les étages en dessous du rez-de-chaussée.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Un nombre relatif est positif, négatif, ou nul",
        "Même signe : on additionne les distances, on garde le signe",
        "Signes contraires : on soustrait les distances, on garde le signe du plus grand",
        "Soustraire, c'est ajouter l'opposé : a − b = a + (−b)",
      ],
      voixOff:
        "Résumons l'essentiel. Un nombre relatif est positif, négatif, ou nul. Pour additionner deux nombres de même signe, on additionne leurs distances à zéro et on garde le signe commun. Pour des signes contraires, on soustrait les distances à zéro et on garde le signe du nombre qui a la plus grande distance. Enfin, soustraire un nombre relatif revient toujours à ajouter son opposé. Tu maîtrises maintenant les bases des nombres relatifs !",
    },
  ],
  fiche: {
    intro:
      "Un nombre relatif est un nombre positif, négatif ou nul. On le repère sur une droite graduée grâce à sa distance à zéro, et on sait le comparer, l'additionner et le soustraire.",
    sections: [
      {
        titre: "Vocabulaire et repérage",
        points: [
          "Un nombre relatif est positif, négatif ou nul (le signe + peut être omis)",
          "La distance à zéro d'un nombre relatif est sa distance sur la droite graduée (toujours positive)",
          "Deux nombres opposés ont la même distance à zéro mais des signes contraires (ex : +4 et −4)",
          "L'abscisse d'un point est le nombre relatif qui lui correspond sur la droite graduée",
        ],
      },
      {
        titre: "Comparaison",
        points: [
          "Sur la droite graduée, le plus grand nombre est le plus à droite",
          "Tout nombre positif est plus grand que tout nombre négatif",
          "Entre deux négatifs, le plus grand est celui qui a la plus petite distance à zéro (−2 > −8)",
        ],
      },
      {
        titre: "Addition de nombres relatifs",
        points: [
          "Même signe : on additionne les distances à zéro, on garde le signe commun. Ex : (−3) + (−5) = −8",
          "Signes contraires : on soustrait la plus petite distance à zéro de la plus grande, on garde le signe du nombre qui a la plus grande distance. Ex : (+7) + (−2) = +5",
        ],
      },
      {
        titre: "Soustraction de nombres relatifs",
        points: [
          "Soustraire un nombre relatif revient à ajouter son opposé : a − b = a + (−b)",
          "Ex : (+3) − (+8) = (+3) + (−8) = −5",
          "Ex : (−4) − (−6) = (−4) + (+6) = +2",
        ],
      },
    ],
    audio:
      "Fiche de révision : les nombres relatifs. Un nombre relatif est un nombre positif, négatif ou nul ; devant un nombre positif, le signe plus peut être omis, mais devant un nombre négatif, le signe moins est obligatoire. On repère les nombres relatifs sur une droite graduée : les positifs à droite de zéro, les négatifs à gauche. La distance à zéro d'un nombre relatif est toujours positive ; deux nombres opposés ont la même distance à zéro mais des signes contraires, comme plus quatre et moins quatre. Pour comparer deux nombres relatifs, le plus grand est celui qui est placé le plus à droite sur la droite graduée : tout nombre positif est plus grand que tout nombre négatif, et entre deux négatifs, le plus grand est celui qui a la plus petite distance à zéro. Pour additionner deux nombres relatifs de même signe, on additionne leurs distances à zéro et on garde le signe commun. Pour additionner deux nombres relatifs de signes contraires, on soustrait la plus petite distance à zéro de la plus grande, et on garde le signe du nombre qui a la plus grande distance à zéro. Enfin, soustraire un nombre relatif revient toujours à ajouter son opposé.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un nombre relatif ?", verso: "Un nombre positif ou négatif : par exemple +5, −3, ou 0. Le signe + est parfois sous-entendu." },
    { recto: "Qu'est-ce que la distance à zéro d'un nombre relatif ?", verso: "Sa distance sur la droite graduée, toujours positive. Ex : la distance à zéro de −7 est 7." },
    { recto: "Qu'est-ce que deux nombres opposés ?", verso: "Deux nombres qui ont la même distance à zéro mais des signes contraires. Ex : +4 et −4." },
    { recto: "Comment comparer deux nombres relatifs ?", verso: "Le plus grand est le plus à droite sur la droite graduée. Tout positif > tout négatif. Entre deux négatifs, le plus grand a la plus petite distance à zéro (−2 > −8)." },
    { recto: "Comment additionner deux relatifs de même signe ?", verso: "On additionne les distances à zéro et on garde le signe commun. Ex : (−3) + (−5) = −8." },
    { recto: "Comment additionner deux relatifs de signes contraires ?", verso: "On soustrait la plus petite distance à zéro de la plus grande, et on garde le signe du nombre qui a la plus grande distance à zéro. Ex : (+7) + (−2) = +5." },
    { recto: "Comment soustraire un nombre relatif ?", verso: "Soustraire un nombre, c'est ajouter son opposé : a − b = a + (−b). Ex : (−4) − (−6) = (−4) + (+6) = +2." },
    { recto: "Donne un exemple concret de nombres relatifs.", verso: "Les températures (−5°C le matin), les altitudes (−155 m pour la mer Morte), les étages sous le rez-de-chaussée." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la distance à zéro du nombre −9 ?",
      choix: ["−9", "9", "0", "18"],
      bonneReponse: 1,
      explication: "La distance à zéro est toujours positive : la distance à zéro de −9 est 9.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est l'opposé de +6 ?",
      choix: ["+6", "−6", "0", "−12"],
      bonneReponse: 1,
      explication: "L'opposé a la même distance à zéro (6) mais un signe contraire : c'est −6.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Compare −3 et −8 à l'aide du symbole > ou <.",
      reponse: "−3 > −8",
      explication: "−3 a une distance à zéro plus petite que −8 (3 < 8), donc −3 est plus proche de zéro, donc plus grand.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Parmi ces nombres, lequel est le plus grand ?",
      choix: ["−12", "−9", "−1", "+2"],
      bonneReponse: 3,
      explication: "+2 est positif, donc il est plus grand que tous les nombres négatifs proposés.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−5) + (−7).",
      reponse: "−12",
      explication: "Même signe : on additionne les distances à zéro (5 + 7 = 12) et on garde le signe commun (−). Résultat : −12.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (+9) + (−4).",
      reponse: "+5",
      explication: "Signes contraires : on soustrait les distances à zéro (9 − 4 = 5) et on garde le signe du nombre qui a la plus grande distance, +9. Résultat : +5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Calcule (−6) + (+2).",
      choix: ["−4", "−8", "+4", "+8"],
      bonneReponse: 0,
      explication: "Signes contraires : distances 6 et 2, on soustrait (6 − 2 = 4), on garde le signe du nombre ayant la plus grande distance, −6. Résultat : −4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (+3) − (+8).",
      reponse: "−5",
      explication: "Soustraire +8 revient à ajouter −8 : (+3) + (−8). Signes contraires : 8 − 3 = 5, on garde le signe −. Résultat : −5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−4) − (−6).",
      reponse: "+2",
      explication: "Soustraire −6 revient à ajouter +6 : (−4) + (+6). Signes contraires : 6 − 4 = 2, on garde le signe du nombre ayant la plus grande distance, +6. Résultat : +2.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Ce matin, il faisait −5°C. Cet après-midi, il fait +12°C. Quelle est la variation de température entre le matin et l'après-midi ?",
      choix: ["7°C", "17°C", "−17°C", "12°C"],
      bonneReponse: 1,
      explication: "La variation est (+12) − (−5) = (+12) + (+5) = +17. La température a augmenté de 17°C.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un plongeur se trouve à −25 m sous la surface. Il remonte de 10 m. À quelle profondeur se trouve-t-il maintenant ?",
      reponse: "−15 m",
      explication: "−25 + 10 = −25 + (+10). Signes contraires : distances 25 et 10, on soustrait (25 − 10 = 15), on garde le signe du nombre ayant la plus grande distance, −25. Résultat : −15 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule (−7) + (+15) + (−4).",
      reponse: "+4",
      explication: "On calcule de gauche à droite : (−7) + (+15) = +8 (signes contraires, 15 − 7 = 8, signe +). Puis (+8) + (−4) = +4 (signes contraires, 8 − 4 = 4, signe +).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la distance à zéro de −15 ?",
      choix: ["−15", "0", "15", "30"],
      bonneReponse: 2,
      explication: "La distance à zéro est toujours positive : la distance à zéro de −15 est 15.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel est l'opposé de −20 ?",
      reponse: "+20",
      explication: "L'opposé a la même distance à zéro (20) mais un signe contraire.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−9) + (−3).",
      reponse: "−12",
      explication: "Même signe : distances 9 + 3 = 12, on garde le signe −.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Calcule (+6) + (−10).",
      choix: ["−4", "−16", "+4", "+16"],
      bonneReponse: 0,
      explication: "Signes contraires : distances 10 et 6, on soustrait (10 − 6 = 4), on garde le signe du nombre ayant la plus grande distance, −10. Résultat : −4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule (−2) − (+7).",
      reponse: "−9",
      explication: "Soustraire +7 revient à ajouter −7 : (−2) + (−7). Même signe : distances 2 + 7 = 9, on garde le signe −. Résultat : −9.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les nombres relatifs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est l'opposé de −8 ?",
          choix: ["+8", "−8", "0", "−16"],
          bonneReponse: 0,
          explication: "L'opposé a la même distance à zéro (8) mais un signe contraire : c'est +8.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle est la distance à zéro de +14 ?",
          reponse: "14",
          explication: "La distance à zéro est toujours positive, quel que soit le signe du nombre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Range dans l'ordre croissant : −6 ; +2 ; −1.",
          reponse: "−6 < −1 < +2",
          explication: "−6 est le plus à gauche sur la droite graduée ; −1 a une distance à zéro plus petite que −6 ; +2 est positif donc le plus grand.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule (−14) + (+9).",
          reponse: "−5",
          explication: "Signes contraires : distances 14 et 9, on soustrait (14 − 9 = 5), on garde le signe du nombre ayant la plus grande distance, −14. Résultat : −5.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule (+5) − (−3).",
          reponse: "+8",
          explication: "Soustraire −3 revient à ajouter +3 : (+5) + (+3). Même signe : distances 5 + 3 = 8, on garde le signe +. Résultat : +8.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un sous-marin est à −120 m. Il remonte de 45 m, puis descend de 30 m. À quelle profondeur se trouve-t-il finalement ?",
          reponse: "−105 m",
          explication: "−120 + 45 = −75 (signes contraires, 120 − 45 = 75, signe −). Puis −75 − 30 = −75 + (−30) = −105 (même signe, 75 + 30 = 105, signe −).",
        },
      ],
    },
    {
      titre: "Examen 2 — Les nombres relatifs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle affirmation est vraie ?",
          choix: ["−3 > −10", "−10 > −3", "−3 = −10", "−10 > 3"],
          bonneReponse: 0,
          explication: "−3 a une distance à zéro plus petite que −10 (3 < 10), donc −3 est plus proche de zéro, donc plus grand : −3 > −10.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel est l'opposé de +17 ?",
          reponse: "−17",
          explication: "L'opposé a la même distance à zéro (17) mais un signe contraire.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule (−8) + (−15).",
          reponse: "−23",
          explication: "Même signe : distances 8 + 15 = 23, on garde le signe −.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Calcule (+7) + (−20).",
          choix: ["−13", "+13", "−27", "+27"],
          bonneReponse: 0,
          explication: "Signes contraires : distances 20 et 7, on soustrait (20 − 7 = 13), on garde le signe du nombre ayant la plus grande distance, −20. Résultat : −13.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule (−9) − (+6).",
          reponse: "−15",
          explication: "Soustraire +6 revient à ajouter −6 : (−9) + (−6). Même signe : distances 9 + 6 = 15, on garde le signe −. Résultat : −15.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Ce matin, il faisait −4°C. La température a augmenté de 9°C dans la journée, puis a baissé de 6°C en soirée. Quelle température fait-il en soirée ?",
          reponse: "−1°C",
          explication: "−4 + 9 = +5 (signes contraires, 9 − 4 = 5, signe +). Puis +5 − 6 = +5 + (−6) = −1 (signes contraires, 6 − 5 = 1, signe −).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un nombre relatif est positif, négatif ou nul ; le signe + est parfois sous-entendu.",
    "La distance à zéro est toujours positive ; deux nombres opposés ont la même distance à zéro mais des signes contraires.",
    "Pour comparer, le plus grand nombre est le plus à droite sur la droite graduée ; tout positif est plus grand que tout négatif.",
    "Même signe : on additionne les distances à zéro et on garde le signe commun.",
    "Signes contraires : on soustrait les distances à zéro et on garde le signe du nombre qui a la plus grande distance.",
    "Soustraire un nombre relatif, c'est toujours ajouter son opposé : a − b = a + (−b).",
  ],
},
{
  slug: "parallelogrammes",
  titre: "Les parallélogrammes",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Découvrir la définition et les propriétés du parallélogramme (côtés, angles, diagonales), apprendre à démontrer qu'un quadrilatère est un parallélogramme, et distinguer ses cas particuliers : rectangle, losange et carré.",
  objectifs: [
    "Connaître la définition d'un parallélogramme et son vocabulaire (côtés opposés, diagonales)",
    "Connaître et utiliser les propriétés des côtés, des angles et des diagonales d'un parallélogramme",
    "Savoir démontrer qu'un quadrilatère est un parallélogramme à l'aide des réciproques du cours",
    "Reconnaître et caractériser les cas particuliers : rectangle, losange et carré",
    "Construire un parallélogramme à partir de données (côtés, angle, sommets)",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un parallélogramme ?",
      illustration: "▱",
      visuel: "(AB) // (DC) et (AD) // (BC)",
      contenu: [
        "Un parallélogramme est un quadrilatère (4 côtés)",
        "Ses côtés opposés sont parallèles deux à deux",
        "ABCD est un parallélogramme si (AB) // (DC) et (AD) // (BC)",
        "[AB] et [DC] sont opposés ; [AD] et [BC] sont opposés",
      ],
      voixOff:
        "Un parallélogramme est un quadrilatère, c'est-à-dire une figure à quatre côtés, dont les côtés opposés sont parallèles deux à deux. Pour le quadrilatère ABCD, cela veut dire que la droite (AB) est parallèle à la droite (DC), et que la droite (AD) est parallèle à la droite (BC). C'est cette double propriété de parallélisme qui définit un parallélogramme.",
    },
    {
      titre: "Les côtés opposés sont égaux",
      illustration: "📏",
      visuel: "AB = DC et AD = BC",
      contenu: [
        "Conséquence directe du parallélisme des côtés opposés",
        "Dans un parallélogramme ABCD : AB = DC et AD = BC",
        "Attention à l'ordre des lettres : A, B, C, D doivent se suivre",
        "Exemple : si AB = 6 cm et BC = 4 cm, alors DC = 6 cm et AD = 4 cm",
      ],
      voixOff:
        "Une conséquence importante de la définition : dans un parallélogramme, les côtés opposés ont toujours la même longueur. Pour ABCD, cela donne AB égale DC, et AD égale BC. Il faut bien respecter l'ordre des sommets quand on nomme le parallélogramme, pour savoir quels côtés sont réellement opposés.",
    },
    {
      titre: "Les angles d'un parallélogramme",
      illustration: "📐",
      visuel: "Â = Ĉ ; B̂ = D̂ ; Â + B̂ = 180°",
      contenu: [
        "Les angles opposés sont égaux : Â = Ĉ et B̂ = D̂",
        "Deux angles consécutifs sont supplémentaires (somme = 180°)",
        "Exemple : si Â = 70°, alors B̂ = 110°, Ĉ = 70°, D̂ = 110°",
        "70 + 110 = 180 : on retrouve bien des angles supplémentaires",
      ],
      voixOff:
        "Les angles d'un parallélogramme obéissent aussi à des règles précises. Les angles opposés sont égaux : l'angle en A est égal à l'angle en C, et l'angle en B est égal à l'angle en D. De plus, deux angles consécutifs, c'est-à-dire côte à côte, sont supplémentaires : leur somme fait toujours cent quatre-vingts degrés. Par exemple, si l'angle en A mesure soixante-dix degrés, l'angle en B mesure cent dix degrés.",
    },
    {
      titre: "Les diagonales se coupent en leur milieu",
      illustration: "✖️",
      visuel: "O = milieu de [AC] et de [BD]",
      contenu: [
        "Les diagonales [AC] et [BD] se coupent en un point O",
        "O est le milieu de [AC] : OA = OC",
        "O est aussi le milieu de [BD] : OB = OD",
        "O est le centre de symétrie du parallélogramme",
      ],
      voixOff:
        "La dernière grande propriété concerne les diagonales. Dans un parallélogramme, les deux diagonales, AC et BD, se coupent en un même point que l'on appelle O. Ce point O est à la fois le milieu de la diagonale AC et le milieu de la diagonale BD. On dit que O est le centre de symétrie du parallélogramme : la figure entière est symétrique par rapport à ce point.",
    },
    {
      titre: "Prouver qu'un quadrilatère est un parallélogramme",
      illustration: "🔍",
      visuel: "3 méthodes possibles",
      contenu: [
        "Méthode 1 : les diagonales se coupent en leur milieu",
        "Méthode 2 : les côtés opposés sont égaux deux à deux",
        "Méthode 3 : un côté est parallèle ET de même longueur que son opposé",
        "Une seule de ces trois méthodes suffit pour conclure",
      ],
      voixOff:
        "Comment démontrer qu'un quadrilatère est un parallélogramme sans mesurer tous les angles ? Trois méthodes existent. Première méthode : si les diagonales se coupent en leur milieu, c'est un parallélogramme. Deuxième méthode : si les côtés opposés sont égaux deux à deux, c'est un parallélogramme. Troisième méthode : si un côté est à la fois parallèle et de même longueur que son côté opposé, c'est aussi un parallélogramme. Une seule de ces méthodes suffit.",
    },
    {
      titre: "Le rectangle, un parallélogramme particulier",
      illustration: "🟦",
      visuel: "4 angles droits",
      contenu: [
        "Un rectangle est un parallélogramme qui a un angle droit",
        "Angles opposés égaux + angles consécutifs supplémentaires → les 4 angles sont droits",
        "Ses côtés opposés restent égaux deux à deux",
        "En plus : ses diagonales ont la même longueur",
      ],
      voixOff:
        "Le rectangle est un cas particulier de parallélogramme : c'est un parallélogramme qui possède un angle droit. Comme les angles opposés sont égaux et que les angles consécutifs sont supplémentaires, dès qu'un angle est droit, les quatre angles du rectangle sont droits. Autre propriété propre au rectangle : ses deux diagonales ont exactement la même longueur.",
    },
    {
      titre: "Le losange, un parallélogramme particulier",
      illustration: "🔷",
      visuel: "4 côtés égaux",
      contenu: [
        "Un losange est un parallélogramme avec deux côtés consécutifs égaux",
        "Du coup, les 4 côtés du losange sont égaux",
        "Ses angles opposés restent égaux, ses angles consécutifs restent supplémentaires",
        "En plus : ses diagonales sont perpendiculaires",
      ],
      voixOff:
        "Le losange est un autre parallélogramme particulier : c'est un parallélogramme qui a deux côtés consécutifs de même longueur. Comme les côtés opposés d'un parallélogramme sont déjà égaux, cela entraîne que les quatre côtés du losange sont égaux. La propriété propre au losange concerne ses diagonales : en plus de se couper en leur milieu, elles sont perpendiculaires.",
    },
    {
      titre: "Le carré, à la fois rectangle et losange",
      illustration: "⬜",
      visuel: "4 côtés égaux + 4 angles droits",
      contenu: [
        "Un carré est à la fois un rectangle ET un losange",
        "4 côtés égaux (propriété du losange)",
        "4 angles droits (propriété du rectangle)",
        "Diagonales de même longueur ET perpendiculaires, qui se coupent en leur milieu",
      ],
      voixOff:
        "Le carré cumule les deux propriétés précédentes : c'est à la fois un rectangle et un losange. Il a donc quatre côtés égaux, comme le losange, et quatre angles droits, comme le rectangle. Ses diagonales ont la même longueur, comme dans un rectangle, et elles sont perpendiculaires, comme dans un losange, tout en se coupant toujours en leur milieu.",
    },
    {
      titre: "Construire un parallélogramme et retenir l'essentiel",
      illustration: "🏆",
      visuel: "Aire = base × hauteur",
      contenu: [
        "Pour placer le 4e sommet : reporter les longueurs au compas en utilisant le parallélisme",
        "Astuce rapide : le milieu de [AC] doit être le même point que le milieu de [BD]",
        "L'aire d'un parallélogramme se calcule par base × hauteur (vu en détail plus tard)",
        "Retenir : côtés opposés égaux, angles opposés égaux, angles consécutifs supplémentaires, diagonales de même milieu",
      ],
      voixOff:
        "Pour construire un parallélogramme connaissant trois sommets, on plante le compas pour reporter les longueurs des côtés parallèles, ou on utilise une équerre pour tracer les parallèles. Une astuce rapide consiste à utiliser la propriété des diagonales : le milieu de la diagonale AC doit être exactement le même point que le milieu de la diagonale BD. Pour terminer, retiens l'essentiel : dans un parallélogramme, les côtés opposés sont égaux, les angles opposés sont égaux, les angles consécutifs sont supplémentaires, et les diagonales se coupent en leur milieu. Bravo, tu maîtrises maintenant les parallélogrammes !",
    },
  ],
  fiche: {
    intro:
      "Un parallélogramme ABCD est un quadrilatère dont les côtés opposés sont parallèles deux à deux : (AB) // (DC) et (AD) // (BC).",
    sections: [
      {
        titre: "Définition et vocabulaire",
        points: [
          "Parallélogramme ABCD : (AB) // (DC) et (AD) // (BC)",
          "Côtés opposés : [AB] et [DC] d'une part, [AD] et [BC] d'autre part",
          "Diagonales : [AC] et [BD], qui relient les sommets opposés",
        ],
      },
      {
        titre: "Propriétés à connaître",
        points: [
          "Côtés opposés de même longueur : AB = DC et AD = BC",
          "Angles opposés égaux : Â = Ĉ et B̂ = D̂",
          "Deux angles consécutifs sont supplémentaires (leur somme fait 180°)",
          "Les diagonales se coupent en leur milieu commun O (centre de symétrie)",
        ],
      },
      {
        titre: "Prouver qu'un quadrilatère est un parallélogramme",
        points: [
          "Si les diagonales se coupent en leur milieu → c'est un parallélogramme",
          "Si les côtés opposés sont égaux deux à deux → c'est un parallélogramme",
          "Si un côté est parallèle ET de même longueur que son opposé → c'est un parallélogramme",
        ],
      },
      {
        titre: "Cas particuliers",
        points: [
          "Rectangle : parallélogramme avec un angle droit (donc les 4 le sont) ; diagonales de même longueur",
          "Losange : parallélogramme avec deux côtés consécutifs égaux (donc les 4 côtés égaux) ; diagonales perpendiculaires",
          "Carré : à la fois rectangle et losange (4 côtés égaux, 4 angles droits, diagonales égales et perpendiculaires)",
          "Aire d'un parallélogramme = base × hauteur",
        ],
      },
    ],
    audio:
      "Fiche de révision : les parallélogrammes. Un parallélogramme ABCD est un quadrilatère dont les côtés opposés sont parallèles deux à deux : la droite AB est parallèle à la droite DC, et la droite AD est parallèle à la droite BC. Les diagonales sont les segments AC et BD, qui relient les sommets opposés. Trois propriétés sont à connaître par cœur : les côtés opposés sont de même longueur, AB égale DC et AD égale BC ; les angles opposés sont égaux, l'angle en A égale l'angle en C, et l'angle en B égale l'angle en D ; deux angles consécutifs sont supplémentaires, leur somme fait cent quatre-vingts degrés. Enfin, les diagonales se coupent en leur milieu commun, appelé O, qui est le centre de symétrie de la figure. Pour prouver qu'un quadrilatère est un parallélogramme, trois méthodes suffisent : montrer que ses diagonales se coupent en leur milieu, ou montrer que ses côtés opposés sont égaux deux à deux, ou montrer qu'un côté est à la fois parallèle et de même longueur que son côté opposé. Le rectangle, le losange et le carré sont des parallélogrammes particuliers. Le rectangle est un parallélogramme qui a un angle droit, ce qui entraîne que ses quatre angles sont droits ; ses diagonales sont en plus de même longueur. Le losange est un parallélogramme qui a deux côtés consécutifs égaux, ce qui entraîne que ses quatre côtés sont égaux ; ses diagonales sont en plus perpendiculaires. Le carré cumule les deux : quatre côtés égaux, quatre angles droits, diagonales de même longueur et perpendiculaires. Pour finir, retiens que l'aire d'un parallélogramme se calcule en multipliant la base par la hauteur.",
  },
  memoCards: [
    { recto: "Définition d'un parallélogramme ABCD ?", verso: "Quadrilatère dont les côtés opposés sont parallèles deux à deux : (AB) // (DC) et (AD) // (BC)." },
    { recto: "Que dire des côtés opposés d'un parallélogramme ?", verso: "Ils sont de même longueur : AB = DC et AD = BC." },
    { recto: "Que dire des angles opposés d'un parallélogramme ?", verso: "Ils sont égaux : Â = Ĉ et B̂ = D̂." },
    { recto: "Que dire de deux angles consécutifs d'un parallélogramme ?", verso: "Ils sont supplémentaires : leur somme vaut 180°." },
    { recto: "Propriété des diagonales d'un parallélogramme ?", verso: "Elles se coupent en leur milieu commun O, qui est le centre de symétrie de la figure." },
    { recto: "Comment prouver qu'un quadrilatère est un parallélogramme ?", verso: "Diagonales de même milieu, OU côtés opposés égaux deux à deux, OU un côté parallèle ET égal à son opposé." },
    { recto: "Qu'est-ce qu'un rectangle ?", verso: "Un parallélogramme avec un angle droit (donc les 4 angles sont droits) ; ses diagonales sont de même longueur." },
    { recto: "Qu'est-ce qu'un losange ?", verso: "Un parallélogramme avec deux côtés consécutifs égaux (donc les 4 côtés sont égaux) ; ses diagonales sont perpendiculaires." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce qu'un parallélogramme ?",
      choix: [
        "Un quadrilatère qui a un angle droit",
        "Un quadrilatère dont les côtés opposés sont parallèles deux à deux",
        "Un quadrilatère dont les diagonales sont perpendiculaires",
        "Un quadrilatère qui a quatre côtés égaux",
      ],
      bonneReponse: 1,
      explication: "Par définition, ABCD est un parallélogramme si (AB) est parallèle à (DC) et si (AD) est parallèle à (BC).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "ABCD est un parallélogramme. Que peut-on dire de ses côtés opposés ?",
      choix: ["Ils sont perpendiculaires", "Ils sont de longueurs différentes", "Ils sont de même longueur", "Ils se coupent en leur milieu"],
      bonneReponse: 2,
      explication: "Dans un parallélogramme, les côtés opposés sont parallèles et de même longueur : AB = DC et AD = BC.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "ABCD est un parallélogramme tel que AB = 6 cm et BC = 4 cm. Donne les longueurs CD et DA.",
      reponse: "CD = 6 cm et DA = 4 cm",
      explication: "Dans un parallélogramme, les côtés opposés sont égaux : CD = AB = 6 cm et DA = BC = 4 cm.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un parallélogramme ABCD, quels angles sont forcément égaux ?",
      choix: ["Tous les quatre angles", "Les angles opposés : Â et Ĉ, puis B̂ et D̂", "Aucun angle n'est forcément égal à un autre", "Seulement Â et B̂"],
      bonneReponse: 1,
      explication: "Dans un parallélogramme, ce sont les angles opposés qui sont égaux deux à deux, pas forcément les quatre angles.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un parallélogramme ABCD, l'angle  vaut 72°. Quelle est la mesure de l'angle B̂ ?",
      reponse: "108°",
      explication: " et B̂ sont deux angles consécutifs, donc supplémentaires : 180° − 72° = 108°.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "En reprenant la question précédente (Â = 72°, B̂ = 108°), donne les mesures de Ĉ et D̂.",
      reponse: "Ĉ = 72° et D̂ = 108°",
      explication: "Les angles opposés sont égaux : Ĉ = Â = 72° et D̂ = B̂ = 108°.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un parallélogramme ABCD, les diagonales [AC] et [BD] se coupent en O. Que peut-on affirmer ?",
      choix: ["O est le milieu de [AC] seulement", "O est le milieu de [AC] et de [BD]", "[AC] et [BD] sont perpendiculaires", "[AC] et [BD] ont la même longueur"],
      bonneReponse: 1,
      explication: "Dans tout parallélogramme, les diagonales se coupent en leur milieu commun O.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un parallélogramme ABCD, les diagonales se coupent en O, avec OA = 4,5 cm et OB = 3 cm. Donne les longueurs OC, OD, AC et BD.",
      reponse: "OC = 4,5 cm ; OD = 3 cm ; AC = 9 cm ; BD = 6 cm",
      explication: "O est le milieu des deux diagonales, donc OC = OA = 4,5 cm et OD = OB = 3 cm. Donc AC = OA + OC = 9 cm et BD = OB + OD = 6 cm.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un quadrilatère MNPQ a ses diagonales [MP] et [NQ] qui se coupent en leur milieu commun O. Que peut-on en conclure ?",
      choix: ["MNPQ est un losange", "MNPQ est un rectangle", "MNPQ est un parallélogramme", "On ne peut rien conclure"],
      bonneReponse: 2,
      explication: "Si les diagonales d'un quadrilatère se coupent en leur milieu, alors ce quadrilatère est un parallélogramme (réciproque du cours).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "EFGH est un quadrilatère tel que EF = 7 cm, GH = 7 cm, FG = 4,5 cm et EH = 4,5 cm (EF et GH sont opposés, FG et EH sont opposés). Peut-on affirmer que EFGH est un parallélogramme ? Justifie.",
      reponse: "Oui, EFGH est un parallélogramme.",
      explication: "Ses côtés opposés sont égaux deux à deux (EF = GH et FG = EH). Or, si un quadrilatère a ses côtés opposés égaux deux à deux, alors c'est un parallélogramme.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "ABCD est un rectangle de diagonale AC = 8 cm. Que vaut la diagonale BD ?",
      choix: ["4 cm", "8 cm", "16 cm", "On ne peut pas savoir"],
      bonneReponse: 1,
      explication: "Un rectangle est un parallélogramme particulier dont les diagonales ont, en plus de se couper en leur milieu, la même longueur : BD = AC = 8 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "RSTU est un losange. L'angle en R mesure 50°. Donne les mesures des trois autres angles, et précise la propriété particulière des diagonales d'un losange.",
      reponse: "Angle en T = 50°, angles en S et en U = 130° chacun. Les diagonales du losange sont perpendiculaires.",
      explication:
        "Un losange est un parallélogramme : l'angle opposé à R, en T, est égal, donc 50°. Les angles consécutifs, en S et en U, sont supplémentaires : 180° − 50° = 130°. De plus, comme le losange a ses quatre côtés égaux, ses diagonales sont perpendiculaires, en plus de se couper en leur milieu.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un parallélogramme ABCD, quelle est la propriété des diagonales [AC] et [BD] ?",
      choix: ["Elles sont perpendiculaires", "Elles se coupent en leur milieu", "Elles ont la même longueur", "Elles ne se coupent jamais"],
      bonneReponse: 1,
      explication: "Dans tout parallélogramme, les diagonales se coupent en leur milieu.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "ABCD est un parallélogramme avec AB = 5 cm. Que vaut DC ?",
      reponse: "5 cm",
      explication: "Les côtés opposés d'un parallélogramme sont égaux : DC = AB.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un parallélogramme, un angle mesure 110°. Que vaut l'angle consécutif ?",
      reponse: "70°",
      explication: "Deux angles consécutifs d'un parallélogramme sont supplémentaires : 180° − 110° = 70°.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la particularité d'un losange par rapport à un parallélogramme quelconque ?",
      choix: ["Ses angles sont tous droits", "Ses diagonales sont perpendiculaires (et ses 4 côtés sont égaux)", "Ses diagonales sont égales", "Ses côtés opposés ne sont plus parallèles"],
      bonneReponse: 1,
      explication: "Un losange est un parallélogramme qui a deux côtés consécutifs égaux (donc ses 4 côtés sont égaux) ; ses diagonales sont perpendiculaires.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un quadrilatère a un côté parallèle ET de même longueur que son côté opposé. Quelle figure est-ce nécessairement ?",
      reponse: "Un parallélogramme",
      explication: "Un côté parallèle et de même longueur que son opposé suffit à prouver qu'un quadrilatère est un parallélogramme.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les parallélogrammes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle propriété caractérise un parallélogramme ?",
          choix: ["Ses diagonales sont perpendiculaires", "Ses côtés opposés sont parallèles deux à deux", "Il a un angle droit", "Ses quatre côtés sont égaux"],
          bonneReponse: 1,
          explication: "C'est la définition même du parallélogramme.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "ABCD est un parallélogramme. AD = 3,8 cm. Que vaut BC ? Justifie.",
          reponse: "BC = 3,8 cm",
          explication: "[AD] et [BC] sont des côtés opposés d'un parallélogramme, donc ils ont la même longueur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans un parallélogramme IJKL, l'angle en I mesure 118°. Calcule les angles en J, K et L.",
          reponse: "K = 118° ; J = 62° ; L = 62°",
          explication: "L'angle opposé à I est K, donc K = 118°. Les angles J et L, consécutifs à I, sont supplémentaires : 180° − 118° = 62°.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans un parallélogramme ABCD, les diagonales se coupent en O. On donne AC = 11 cm. Que vaut OA ?",
          reponse: "OA = 5,5 cm",
          explication: "O est le milieu de la diagonale [AC], donc OA = AC ÷ 2 = 5,5 cm.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Un quadrilatère a ses côtés opposés de même longueur deux à deux (on ne sait rien sur ses angles). Que peut-on en conclure ?",
          choix: ["C'est forcément un rectangle", "C'est forcément un losange", "C'est un parallélogramme", "On ne peut rien conclure"],
          bonneReponse: 2,
          explication: "La réciproque du cours : un quadrilatère dont les côtés opposés sont égaux deux à deux est un parallélogramme.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "ABCD est un rectangle. Ses diagonales se coupent en O et OA = 6,5 cm. Quelle est la longueur de la diagonale BD ? Explique ta démarche.",
          reponse: "BD = 13 cm",
          explication: "Dans un rectangle, les diagonales ont la même longueur : BD = AC. Comme O est le milieu de [AC], AC = 2 × OA = 13 cm, donc BD = AC = 13 cm.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les parallélogrammes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Parmi ces quadrilatères, lequel n'est pas nécessairement un parallélogramme ?",
          choix: ["Le rectangle", "Le losange", "Le carré", "Le trapèze"],
          bonneReponse: 3,
          explication: "Un trapèze n'a qu'une seule paire de côtés opposés parallèles ; ce n'est pas forcément un parallélogramme, qui en exige deux paires.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "ABCD est un parallélogramme. CD = 9 cm. Que vaut AB ?",
          reponse: "AB = 9 cm",
          explication: "[AB] et [CD] sont des côtés opposés, donc ils ont la même longueur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Dans un parallélogramme, deux angles consécutifs mesurent (3x)° et (x + 40)°, et sont donc supplémentaires. Trouve x, puis la mesure des deux angles.",
          reponse: "x = 35 ; les deux angles mesurent 105° et 75°",
          explication:
            "Deux angles consécutifs d'un parallélogramme sont supplémentaires : 3x + (x + 40) = 180, donc 4x + 40 = 180, donc 4x = 140, donc x = 35. On obtient alors 3 × 35 = 105° et 35 + 40 = 75°, et 105 + 75 = 180. ✓",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Dans un parallélogramme MNPQ, les diagonales se coupent en O avec ON = 3,5 cm. Que vaut OQ ? Que vaut la diagonale NQ ?",
          reponse: "OQ = 3,5 cm et NQ = 7 cm",
          explication: "O est le milieu des deux diagonales [MP] et [NQ], donc OQ = ON = 3,5 cm, et NQ = ON + OQ = 7 cm.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "ABCD est un losange. Que peut-on affirmer sur ses diagonales [AC] et [BD] ?",
          choix: ["Elles sont parallèles", "Elles sont perpendiculaires et se coupent en leur milieu", "Elles ont la même longueur", "Elles ne se coupent pas"],
          bonneReponse: 1,
          explication: "Dans un losange (parallélogramme à côtés consécutifs égaux), les diagonales se coupent en leur milieu et sont en plus perpendiculaires.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un quadrilatère WXYZ est un parallélogramme et son angle en W est droit. Démontre que ses quatre angles sont droits.",
          reponse: "Les quatre angles de WXYZ mesurent chacun 90°.",
          explication:
            "L'angle en W vaut 90°. L'angle opposé en Y est égal à l'angle en W (angles opposés égaux dans un parallélogramme), donc l'angle en Y vaut aussi 90°. Les angles en X et en Z sont consécutifs à W, donc supplémentaires à 90°, ce qui donne 180° − 90° = 90°. Les quatre angles valent donc 90° : WXYZ est un rectangle.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles deux à deux.",
    "Ses côtés opposés sont égaux, ses angles opposés sont égaux, et deux angles consécutifs sont supplémentaires (somme = 180°).",
    "Ses diagonales se coupent en leur milieu commun, qui est le centre de symétrie de la figure.",
    "Pour prouver qu'un quadrilatère est un parallélogramme : diagonales de même milieu, OU côtés opposés égaux deux à deux, OU un côté parallèle et égal à son opposé.",
    "Le rectangle, le losange et le carré sont des parallélogrammes particuliers : rectangle = un angle droit (donc 4), losange = deux côtés consécutifs égaux (donc 4), carré = les deux à la fois.",
    "L'aire d'un parallélogramme se calcule par base × hauteur (approfondi dans un autre chapitre).",
  ],
},
{
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
},
{
  slug: "statistiques",
  titre: "Statistiques : moyenne et effectifs",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Comprendre le vocabulaire des statistiques, lire un tableau d'effectifs ou un graphique, calculer une moyenne (simple ou pondérée) et l'étendue d'une série pour comparer des résultats.",
  objectifs: [
    "Connaître le vocabulaire des statistiques (population, caractère, valeurs, effectif, effectif total)",
    "Lire et construire un tableau d'effectifs",
    "Lire des représentations graphiques (diagramme en bâtons, diagramme circulaire, histogramme)",
    "Calculer une moyenne simple et une moyenne pondérée",
    "Calculer l'étendue d'une série et comparer deux séries statistiques",
  ],
  slides: [
    {
      titre: "Le vocabulaire de la statistique",
      illustration: "📋",
      visuel: "Population, caractère, valeurs",
      contenu: [
        "La population étudiée : l'ensemble des individus observés (ex : les élèves d'une classe)",
        "Le caractère étudié : ce qu'on observe chez chaque individu (ex : la note obtenue)",
        "Les valeurs (ou modalités) : les résultats possibles du caractère (ex : 8, 12, 15...)",
      ],
      voixOff:
        "En statistique, on étudie une population, c'est-à-dire un ensemble d'individus, par exemple les élèves d'une classe. Chez chaque individu, on observe un caractère, comme la note obtenue à un contrôle ou la couleur préférée. Les résultats possibles de ce caractère s'appellent les valeurs, ou les modalités.",
    },
    {
      titre: "Effectif et effectif total",
      illustration: "🔢",
      visuel: "effectif total = somme des effectifs",
      contenu: [
        "L'effectif d'une valeur : le nombre d'individus qui ont cette valeur",
        "L'effectif total : la somme de tous les effectifs",
        "Exemple : notes 8 (eff. 3), 12 (eff. 5), 15 (eff. 2) → effectif total = 3+5+2 = 10",
      ],
      voixOff:
        "L'effectif d'une valeur, c'est le nombre d'individus de la population qui ont obtenu cette valeur. Si trois élèves ont eu huit, cinq ont eu douze et deux ont eu quinze, alors l'effectif total de la classe est trois plus cinq plus deux, soit dix élèves. L'effectif total correspond donc toujours au nombre total d'individus étudiés.",
    },
    {
      titre: "Le tableau d'effectifs",
      illustration: "📊",
      visuel: "tableau à deux lignes",
      contenu: [
        "Une ligne pour les valeurs du caractère étudié",
        "Une ligne juste en dessous pour les effectifs correspondants",
        "Permet d'organiser des données brutes de façon claire",
      ],
      voixOff:
        "Pour présenter des données statistiques, on utilise souvent un tableau d'effectifs. Sur la première ligne, on écrit les valeurs du caractère étudié. Sur la deuxième ligne, juste en dessous, on écrit l'effectif correspondant à chaque valeur. C'est un outil essentiel pour organiser et lire rapidement des données.",
    },
    {
      titre: "Lire un diagramme en bâtons",
      illustration: "📈",
      visuel: "hauteur du bâton = effectif",
      contenu: [
        "Chaque bâton correspond à une valeur du caractère",
        "La hauteur du bâton indique l'effectif de cette valeur",
        "Utile pour comparer rapidement les effectifs entre eux",
      ],
      voixOff:
        "Un diagramme en bâtons est une autre façon de représenter des effectifs. Chaque bâton est associé à une valeur, et la hauteur du bâton indique l'effectif de cette valeur. Plus le bâton est haut, plus il y a d'individus qui ont obtenu cette valeur.",
    },
    {
      titre: "Diagramme circulaire et histogramme",
      illustration: "🥧",
      visuel: "camembert = parts proportionnelles",
      contenu: [
        "Diagramme circulaire (camembert) : chaque part représente un effectif proportionnel",
        "Histogramme : des rectangles pour des valeurs regroupées en classes",
        "On choisit la représentation selon ce qu'on veut montrer",
      ],
      voixOff:
        "On peut aussi représenter des statistiques avec un diagramme circulaire, aussi appelé camembert, où chaque part est proportionnelle à l'effectif qu'elle représente. Un histogramme, lui, utilise des rectangles pour représenter des valeurs regroupées en classes, comme des tranches d'âge. Ces représentations permettent de visualiser d'un coup d'œil la répartition d'une population.",
    },
    {
      titre: "Calculer une moyenne",
      illustration: "🎯",
      visuel: "moyenne = somme ÷ nombre de valeurs",
      contenu: [
        "La moyenne = somme de toutes les valeurs ÷ nombre de valeurs",
        "Exemple : notes 12, 15, 8, 17, 13 → (12+15+8+17+13) ÷ 5",
        "65 ÷ 5 = 13 : la moyenne de la série est 13",
      ],
      voixOff:
        "La moyenne d'une série, c'est la somme de toutes les valeurs, divisée par le nombre de valeurs. Prenons les notes douze, quinze, huit, dix-sept et treize : la somme fait soixante-cinq, et il y a cinq notes. Soixante-cinq divisé par cinq égale treize : la moyenne de la série est donc treize.",
    },
    {
      titre: "Moyenne pondérée (avec un tableau d'effectifs)",
      illustration: "🧮",
      visuel: "(Σ valeur × effectif) ÷ effectif total",
      contenu: [
        "Quand des valeurs se répètent, on utilise un tableau d'effectifs",
        "Moyenne = (somme des valeur × effectif) ÷ effectif total",
        "Exemple : 8 (eff. 2), 12 (eff. 5), 16 (eff. 3) → (16+60+48) ÷ 10 = 12,4",
      ],
      voixOff:
        "Quand plusieurs individus ont la même valeur, on calcule une moyenne pondérée à partir d'un tableau d'effectifs. On multiplie chaque valeur par son effectif, on additionne tous ces résultats, puis on divise par l'effectif total. Par exemple, avec la note huit obtenue deux fois, douze obtenue cinq fois et seize obtenue trois fois, on trouve une moyenne de douze virgule quatre.",
    },
    {
      titre: "L'étendue d'une série",
      illustration: "📏",
      visuel: "étendue = maximum − minimum",
      contenu: [
        "L'étendue mesure la dispersion d'une série",
        "Étendue = valeur maximale − valeur minimale",
        "Exemple : notes de 6 à 18 → étendue = 18 − 6 = 12",
      ],
      voixOff:
        "L'étendue d'une série statistique permet de savoir si les valeurs sont proches les unes des autres ou très dispersées. Elle se calcule en faisant la différence entre la valeur maximale et la valeur minimale de la série. Si les notes d'une classe vont de six à dix-huit, l'étendue est de douze.",
    },
    {
      titre: "Comparer des séries",
      illustration: "🏆",
      visuel: "moyenne + étendue",
      contenu: [
        "Deux séries peuvent avoir la même moyenne mais une étendue différente",
        "Une étendue petite = des valeurs resserrées, plus homogènes",
        "Pour comparer deux séries, on regarde à la fois la moyenne et l'étendue",
      ],
      voixOff:
        "Pour comparer deux séries statistiques, il ne suffit pas de regarder la moyenne. Deux classes peuvent avoir exactement la même moyenne, mais des résultats très différents : l'une avec des notes resserrées, l'autre avec des notes très dispersées. C'est l'étendue qui permet de repérer cette différence : plus l'étendue est petite, plus les valeurs sont homogènes, c'est-à-dire proches les unes des autres.",
    },
  ],
  fiche: {
    intro:
      "Une série statistique décrit un caractère observé sur une population. On peut la résumer avec un effectif total, une moyenne et une étendue.",
    sections: [
      {
        titre: "Vocabulaire",
        points: [
          "Population étudiée : l'ensemble des individus observés (ex : les élèves d'une classe)",
          "Caractère étudié : ce qu'on observe chez chaque individu (ex : la note obtenue)",
          "Valeurs (ou modalités) : les résultats possibles du caractère",
          "Effectif d'une valeur : le nombre d'individus qui ont cette valeur",
          "Effectif total : la somme de tous les effectifs (= nombre total d'individus)",
        ],
      },
      {
        titre: "Tableaux et graphiques",
        points: [
          "Tableau d'effectifs : une ligne pour les valeurs, une ligne pour les effectifs",
          "Diagramme en bâtons : la hauteur du bâton donne l'effectif de chaque valeur",
          "Diagramme circulaire (camembert) : chaque part est proportionnelle à l'effectif",
          "Histogramme : des rectangles pour des valeurs regroupées en classes",
        ],
      },
      {
        titre: "Calculer une moyenne",
        points: [
          "Moyenne simple = (somme des valeurs) ÷ (nombre de valeurs). Ex : (12+15+8+17+13) ÷ 5 = 13",
          "Moyenne pondérée = (somme des [valeur × effectif]) ÷ (effectif total). Ex : (8×2+12×5+16×3) ÷ 10 = 12,4",
          "La moyenne peut être décimale : elle n'est pas forcément une valeur de la série",
        ],
      },
      {
        titre: "L'étendue et comparer des séries",
        points: [
          "Étendue = valeur maximale − valeur minimale. Ex : de 6 à 18 → étendue = 12",
          "Une étendue petite signifie des valeurs resserrées (série homogène)",
          "Pour comparer deux séries, on utilise ensemble la moyenne et l'étendue",
        ],
      },
    ],
    audio:
      "Fiche de révision : les statistiques. Une série statistique décrit un caractère étudié chez les individus d'une population : par exemple, la note obtenue par les élèves d'une classe. Les résultats possibles s'appellent les valeurs, et l'effectif d'une valeur est le nombre d'individus qui ont obtenu cette valeur ; l'effectif total est la somme de tous les effectifs, c'est-à-dire le nombre total d'individus étudiés. Ces données peuvent être organisées dans un tableau d'effectifs, ou représentées par un diagramme en bâtons, un diagramme circulaire appelé camembert, ou un histogramme. Pour résumer une série, on calcule sa moyenne : la moyenne simple est la somme de toutes les valeurs divisée par le nombre de valeurs, par exemple douze, quinze, huit, dix-sept et treize donnent une moyenne de treize. Quand les valeurs se répètent, on calcule une moyenne pondérée à partir d'un tableau d'effectifs : on multiplie chaque valeur par son effectif, on additionne, puis on divise par l'effectif total ; par exemple huit obtenu deux fois, douze obtenu cinq fois et seize obtenu trois fois donnent une moyenne de douze virgule quatre. Attention, la moyenne peut très bien ne pas être une des valeurs réellement obtenues. Enfin, l'étendue d'une série est la différence entre la valeur maximale et la valeur minimale : elle mesure si les valeurs sont proches les unes des autres ou très dispersées. Pour comparer deux séries statistiques, on utilise à la fois leur moyenne et leur étendue.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce que la population étudiée ?",
      verso: "L'ensemble des individus sur lesquels porte l'étude (ex : les 25 élèves d'une classe).",
    },
    {
      recto: "Qu'est-ce que le caractère étudié ?",
      verso: "Ce que l'on observe chez chaque individu de la population (ex : la note obtenue, la couleur préférée).",
    },
    {
      recto: "Qu'est-ce que l'effectif d'une valeur ?",
      verso: "Le nombre d'individus qui ont cette valeur du caractère étudié.",
    },
    {
      recto: "Qu'est-ce que l'effectif total ?",
      verso: "La somme de tous les effectifs = le nombre total d'individus de la population.",
    },
    {
      recto: "Comment calculer une moyenne simple ?",
      verso: "Moyenne = (somme de toutes les valeurs) ÷ (nombre de valeurs). Ex : 12, 15, 8, 17, 13 → 65 ÷ 5 = 13.",
    },
    {
      recto: "Comment calculer une moyenne pondérée ?",
      verso: "Moyenne = (somme des valeur × effectif) ÷ (effectif total). Ex : 8 (×2), 12 (×5), 16 (×3) → 124 ÷ 10 = 12,4.",
    },
    {
      recto: "Qu'est-ce que l'étendue d'une série ?",
      verso: "Étendue = valeur maximale − valeur minimale. Ex : notes de 6 à 18 → étendue = 12.",
    },
    {
      recto: "Comment comparer deux séries statistiques ?",
      verso: "En comparant leur moyenne (niveau général) et leur étendue (dispersion) : plus l'étendue est petite, plus la série est homogène.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question:
        "Dans une enquête sur la couleur préférée des 25 élèves d'une classe, quelle est la population étudiée ?",
      choix: ["Les couleurs", "Les 25 élèves de la classe", "La couleur préférée", "Le nombre 25"],
      bonneReponse: 1,
      explication: "La population étudiée, ce sont les individus observés : ici, les 25 élèves de la classe.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans cette même enquête, quel est le caractère étudié ?",
      choix: ["Les 25 élèves", "La classe", "La couleur préférée de chaque élève", "Le nombre de couleurs"],
      bonneReponse: 2,
      explication: "Le caractère étudié est ce qu'on observe chez chaque individu : ici, la couleur préférée.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question:
        "Voici les notes obtenues par une classe : la valeur 8 a un effectif de 3, la valeur 12 a un effectif de 5, la valeur 15 a un effectif de 2. Quel est l'effectif total de la classe ?",
      reponse: "10 élèves",
      explication: "L'effectif total est la somme de tous les effectifs : 3 + 5 + 2 = 10.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question:
        "Sur un diagramme en bâtons représentant le nombre de buts marqués par match, la barre au-dessus de la valeur « 2 buts » atteint 7. Que représente ce nombre 7 ?",
      choix: [
        "Il y a eu 7 matchs en tout",
        "7 matchs se sont terminés avec 2 buts marqués",
        "Le nombre moyen de buts est 7",
        "L'équipe a gagné 7 fois",
      ],
      bonneReponse: 1,
      explication: "La hauteur du bâton donne l'effectif de la valeur : 7 matchs ont eu exactement 2 buts marqués.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule la moyenne des notes suivantes : 12, 15, 8, 17, 13.",
      reponse: "13",
      explication: "(12+15+8+17+13) ÷ 5 = 65 ÷ 5 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Une classe a obtenu les notes suivantes à un contrôle : 8 (effectif 2), 12 (effectif 5), 16 (effectif 3). Calcule la moyenne de la classe.",
      reponse: "12,4",
      explication:
        "Effectif total = 2+5+3 = 10. Moyenne = (8×2 + 12×5 + 16×3) ÷ 10 = (16+60+48) ÷ 10 = 124 ÷ 10 = 12,4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Les températures relevées chaque jour d'une semaine sont : 14°C, 18°C, 16°C, 9°C, 20°C, 17°C, 15°C. Calcule l'étendue de cette série.",
      reponse: "11°C",
      explication: "La valeur maximale est 20°C, la valeur minimale est 9°C. Étendue = 20 − 9 = 11.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question:
        "Deux classes ont eu la même moyenne de 12 à un contrôle : la classe A a une étendue de 8, la classe B a une étendue de 3. Que peut-on en conclure ?",
      choix: [
        "La classe A est plus homogène (les notes sont plus proches les unes des autres)",
        "La classe B est plus homogène (les notes sont plus proches les unes des autres)",
        "Les deux classes sont aussi homogènes l'une que l'autre",
        "La classe A a de meilleures notes",
      ],
      bonneReponse: 1,
      explication: "Une étendue plus petite signifie des notes plus resserrées autour de la moyenne : la classe B est plus homogène.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un sondage sur le nombre d'enfants par famille dans un quartier donne : 0 enfant (4 familles), 1 enfant (6 familles), 2 enfants (8 familles), 3 enfants (2 familles). Calcule le nombre moyen d'enfants par famille.",
      reponse: "1,4 enfant",
      explication:
        "Effectif total = 4+6+8+2 = 20. Somme = 0×4 + 1×6 + 2×8 + 3×2 = 0+6+16+6 = 28. Moyenne = 28 ÷ 20 = 1,4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Le tableau suivant donne les tailles, en cm, de 20 élèves d'une classe : 150 cm (effectif 4), 155 cm (effectif a), 160 cm (effectif 6), 165 cm (effectif 3). Sachant que l'effectif total est 20, calcule a.",
      reponse: "a = 7",
      explication: "4 + a + 6 + 3 = 20, donc a = 20 − 4 − 6 − 3 = 7.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Voici les buts marqués par une équipe lors de 6 matchs : 1, 3, 0, 2, 4, 2. Calcule la moyenne et l'étendue de cette série.",
      reponse: "Moyenne = 2 buts ; étendue = 4",
      explication:
        "Moyenne = (1+3+0+2+4+2) ÷ 6 = 12 ÷ 6 = 2. Étendue = valeur maximale (4) − valeur minimale (0) = 4.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Après avoir calculé une moyenne, on trouve 12,4. Que peut-on dire ?",
      choix: [
        "C'est forcément une erreur, la moyenne doit être un nombre entier",
        "La moyenne n'est pas obligatoirement une des valeurs de la série de départ",
        "La moyenne est toujours la valeur la plus fréquente",
        "La moyenne est toujours égale à l'effectif total",
      ],
      bonneReponse: 1,
      explication:
        "La moyenne peut être décimale et ne correspond pas forcément à une valeur réellement obtenue dans la série.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on le nombre total d'individus dans une population étudiée ?",
      choix: ["Le caractère", "L'effectif total", "La valeur", "La moyenne"],
      bonneReponse: 1,
      explication: "L'effectif total est la somme de tous les effectifs, c'est-à-dire le nombre total d'individus.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule la moyenne de 10, 14, 12, 16.",
      reponse: "13",
      explication: "(10+14+12+16) ÷ 4 = 52 ÷ 4 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une série de notes va de 6 à 19. Quelle est son étendue ?",
      reponse: "13",
      explication: "Étendue = valeur maximale − valeur minimale = 19 − 6 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule la moyenne pondérée : 10 (effectif 2) et 14 (effectif 3).",
      reponse: "12,4",
      explication: "Effectif total = 2+3 = 5. Moyenne = (10×2 + 14×3) ÷ 5 = (20+42) ÷ 5 = 62 ÷ 5 = 12,4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pour comparer deux séries statistiques, quels sont les deux indicateurs les plus utiles ?",
      choix: [
        "La population et le caractère",
        "La moyenne et l'étendue",
        "Le numérateur et le dénominateur",
        "L'effectif et la valeur maximale seule",
      ],
      bonneReponse: 1,
      explication: "La moyenne donne le niveau général de la série, et l'étendue indique si les valeurs sont dispersées ou resserrées.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Statistiques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question:
            "On interroge 28 élèves sur leur moyen de transport pour aller au collège. La valeur « à pied » a un effectif de 9. Que signifie ce nombre 9 ?",
          choix: [
            "9 élèves viennent à pied",
            "Il y a 9 moyens de transport différents",
            "La moyenne est 9",
            "9 % des élèves viennent à pied",
          ],
          bonneReponse: 0,
          explication: "L'effectif d'une valeur est le nombre d'individus qui ont cette valeur : ici, 9 élèves viennent à pied.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question:
            "Voici la répartition des 28 élèves selon leur moyen de transport : à pied (9), en bus (12), en voiture (5), à vélo (2). Vérifie que l'effectif total correspond bien aux 28 élèves annoncés.",
          reponse: "9 + 12 + 5 + 2 = 28, l'effectif total correspond bien aux 28 élèves.",
          explication: "L'effectif total est la somme de tous les effectifs du tableau.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule la moyenne des 5 notes suivantes : 9, 11, 14, 16, 10.",
          reponse: "12",
          explication: "(9+11+14+16+10) ÷ 5 = 60 ÷ 5 = 12.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Une classe de 25 élèves a obtenu les notes suivantes à une évaluation : 6 (effectif 3), 10 (effectif 8), 14 (effectif 10), 18 (effectif 4). Calcule la moyenne de la classe.",
          reponse: "12,4",
          explication:
            "Effectif total = 3+8+10+4 = 25. Somme = 6×3 + 10×8 + 14×10 + 18×4 = 18+80+140+72 = 310. Moyenne = 310 ÷ 25 = 12,4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Les températures maximales relevées à Paris durant une semaine sont : 22°C, 25°C, 19°C, 28°C, 24°C, 20°C, 23°C. Calcule l'étendue de cette série de températures.",
          reponse: "9°C",
          explication: "La valeur maximale est 28°C, la valeur minimale est 19°C. Étendue = 28 − 19 = 9.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Deux groupes d'élèves ont passé le même test. Groupe 1 : moyenne 14, étendue 4. Groupe 2 : moyenne 14, étendue 10. Quelle affirmation est correcte ?",
          choix: [
            "Le groupe 1 est plus hétérogène que le groupe 2",
            "Les résultats du groupe 1 sont plus resserrés autour de la moyenne que ceux du groupe 2",
            "Le groupe 2 a une meilleure moyenne que le groupe 1",
            "On ne peut rien dire sans connaître l'effectif total",
          ],
          bonneReponse: 1,
          explication: "Avec la même moyenne, une étendue plus petite (4 contre 10) signifie des résultats plus resserrés, donc plus homogènes.",
        },
      ],
    },
    {
      titre: "Examen 2 — Statistiques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question:
            "Dans une enquête sur le nombre de frères et sœurs des élèves d'une classe, quelles sont les « valeurs » possibles du caractère étudié ?",
          choix: [
            "Les élèves de la classe",
            "Le nombre de frères et sœurs (0, 1, 2, 3...)",
            "L'effectif total de la classe",
            "Le nom de chaque élève",
          ],
          bonneReponse: 1,
          explication: "Les valeurs (ou modalités) sont les résultats possibles du caractère étudié : ici, le nombre de frères et sœurs.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question:
            "Un sondage sur le sport préféré donne : football (10), basket (6), natation (4), tennis (5). Quel est l'effectif total de ce sondage ?",
          reponse: "25 personnes",
          explication: "Effectif total = 10 + 6 + 4 + 5 = 25.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule la moyenne des notes suivantes : 7, 10, 13, 15.",
          reponse: "11,25",
          explication: "(7+10+13+15) ÷ 4 = 45 ÷ 4 = 11,25. La moyenne n'est pas forcément un nombre entier.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Voici le nombre de buts marqués par une équipe de handball lors de 12 matchs, sous forme de tableau d'effectifs : 0 but (effectif 2), 1 but (effectif 4), 2 buts (effectif 4), 3 buts (effectif 2). Calcule le nombre moyen de buts marqués par match.",
          reponse: "1,5 but par match",
          explication:
            "Effectif total = 2+4+4+2 = 12. Somme = 0×2 + 1×4 + 2×4 + 3×2 = 0+4+8+6 = 18. Moyenne = 18 ÷ 12 = 1,5.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Les tailles, en cm, de 6 élèves d'un groupe A sont : 150, 152, 149, 151, 153, 150. Les tailles de 6 élèves d'un groupe B sont : 130, 160, 145, 170, 140, 165. Calcule l'étendue de chaque groupe, puis dis lequel est le plus homogène.",
          reponse:
            "Étendue du groupe A = 4 cm ; étendue du groupe B = 40 cm. Le groupe A est plus homogène.",
          explication:
            "Groupe A : maximum 153, minimum 149, étendue = 4. Groupe B : maximum 170, minimum 130, étendue = 40. Une étendue plus petite signifie des tailles plus proches les unes des autres.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Pour calculer la moyenne d'une série donnée par un tableau d'effectifs, quelle formule utilise-t-on ?",
          choix: [
            "(somme des valeurs) ÷ (nombre de valeurs différentes)",
            "(somme des [valeur × effectif]) ÷ (effectif total)",
            "(valeur maximale − valeur minimale) ÷ 2",
            "(effectif total) ÷ (nombre de valeurs différentes)",
          ],
          bonneReponse: 1,
          explication: "La moyenne pondérée se calcule en multipliant chaque valeur par son effectif, en additionnant, puis en divisant par l'effectif total.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La population est l'ensemble étudié, le caractère est ce qu'on observe, et les valeurs sont les résultats possibles.",
    "L'effectif d'une valeur compte les individus concernés ; l'effectif total est la somme de tous les effectifs.",
    "La moyenne simple = (somme des valeurs) ÷ (nombre de valeurs) ; la moyenne pondérée = (somme des [valeur × effectif]) ÷ (effectif total).",
    "L'étendue = valeur maximale − valeur minimale : elle mesure la dispersion d'une série.",
    "La moyenne n'est pas forcément une valeur de la série : elle peut être décimale.",
    "Pour comparer deux séries, on utilise à la fois la moyenne et l'étendue.",
  ],
},
{
  slug: "symetrie-centrale",
  titre: "La symétrie centrale",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Comprendre ce qu'est le symétrique d'un point par rapport à un centre, savoir le construire, connaître les propriétés conservées et reconnaître les figures qui possèdent un centre de symétrie.",
  objectifs: [
    "Comprendre la définition du symétrique d'un point par rapport à un centre O",
    "Construire le symétrique d'un point, d'un segment, d'une droite ou d'un cercle",
    "Connaître les propriétés conservées par la symétrie centrale (longueurs, angles, aires, alignement, parallélisme)",
    "Reconnaître les figures qui ont un centre de symétrie",
    "Distinguer la symétrie centrale (par rapport à un point) de la symétrie axiale (par rapport à une droite)",
  ],
  slides: [
    {
      titre: "La symétrie centrale : un demi-tour autour d'un point",
      illustration: "🔄",
      visuel: "M • O • M'",
      contenu: [
        "La symétrie centrale se fait par rapport à un point, appelé le centre",
        "C'est comme faire un demi-tour de 180° autour de ce point",
        "Le symétrique de M par rapport à O est noté M'",
        "Chaque point de la figure a son propre symétrique",
      ],
      voixOff:
        "La symétrie centrale est une transformation qui se fait par rapport à un point, qu'on appelle le centre de la symétrie. On peut l'imaginer comme un demi-tour de cent quatre-vingts degrés autour de ce point. Le symétrique du point M par rapport au centre O se note M prime. Dans ce chapitre, tu vas apprendre à construire ces symétriques et à reconnaître ce qui change et ce qui ne change pas.",
    },
    {
      titre: "Le symétrique d'un point : la définition",
      illustration: "🎯",
      visuel: "O milieu de [MM']",
      contenu: [
        "M' est le symétrique de M par rapport à O signifie : O est le milieu de [MM']",
        "M, O et M' sont alignés, et OM = OM'",
        "Réciprocité : si M' est le symétrique de M, alors M est le symétrique de M'",
        "Cas particulier : le symétrique de O par rapport à lui-même est O",
      ],
      voixOff:
        "Dire que M prime est le symétrique de M par rapport au point O signifie exactement une chose : O est le milieu du segment M M prime. Les trois points M, O et M prime sont donc alignés, et les distances O M et O M prime sont égales. Cette relation fonctionne dans les deux sens : si M prime est le symétrique de M, alors M est aussi le symétrique de M prime. Et il existe un point très particulier : le symétrique du centre O par rapport à lui-même est O lui-même.",
    },
    {
      titre: "Construire le symétrique d'un point",
      illustration: "📐",
      visuel: "(MO) puis OM' = OM",
      contenu: [
        "1) Tracer la droite (MO)",
        "2) Placer M' sur cette droite, de l'autre côté de O",
        "3) Mesurer OM' = OM (avec un compas ou une règle graduée)",
        "Sur un quadrillage : compter les carreaux entre M et O, reporter le même nombre de l'autre côté",
      ],
      voixOff:
        "Pour construire le symétrique d'un point M par rapport à un centre O, on trace d'abord la droite qui passe par M et par O. Ensuite, on place le point M prime sur cette droite, de l'autre côté du point O, à la même distance : O M prime doit être égal à O M. Sur un quadrillage, c'est encore plus simple : on compte le nombre de carreaux entre M et O, dans chaque direction, puis on reporte exactement le même nombre de carreaux de l'autre côté de O.",
    },
    {
      titre: "Symétrique d'un segment et d'une droite",
      illustration: "📏",
      visuel: "[AB] → [A'B'] avec A'B' = AB",
      contenu: [
        "Le symétrique d'un segment [AB] est le segment [A'B'], de la même longueur",
        "Le symétrique d'une droite est une droite parallèle à la droite de départ",
        "Si la droite passe par O, son symétrique est elle-même (confondue)",
        "Des points alignés restent alignés après la symétrie",
      ],
      voixOff:
        "La symétrie centrale transforme un segment en un autre segment de la même longueur. Elle transforme une droite en une droite parallèle à la droite de départ. Il y a une exception importante : si la droite passe déjà par le centre O, alors son symétrique est la droite elle-même, on dit qu'elle est confondue avec son image. Enfin, des points alignés restent toujours alignés après une symétrie centrale.",
    },
    {
      titre: "Symétrique d'un cercle",
      illustration: "⭕",
      visuel: "cercle(C, r) → cercle(C', r)",
      contenu: [
        "Le symétrique d'un cercle de centre C et de rayon r est un cercle de même rayon r",
        "Le nouveau centre C' est le symétrique de C par rapport à O",
        "Le rayon ne change jamais dans une symétrie centrale",
      ],
      voixOff:
        "Pour trouver le symétrique d'un cercle, il suffit de trouver le symétrique de son centre. Si un cercle a pour centre C et pour rayon r, son symétrique par rapport à O est un cercle de même rayon r, dont le centre C prime est le symétrique de C par rapport à O. Le rayon, lui, ne change jamais : seule la position du cercle est modifiée.",
    },
    {
      titre: "Ce que conserve la symétrie centrale",
      illustration: "✅",
      visuel: "longueurs • angles • aires • parallélisme",
      contenu: [
        "Les longueurs (AB = A'B')",
        "Les angles (même mesure)",
        "Les aires et le parallélisme entre les droites",
        "L'alignement des points",
      ],
      voixOff:
        "La symétrie centrale conserve de nombreuses propriétés des figures. Elle conserve les longueurs, donc une figure et son symétrique ont exactement la même taille. Elle conserve aussi les angles, les aires, et le parallélisme entre les droites. C'est ce qu'on appelle une transformation qui conserve les distances : la figure obtenue est superposable à la figure de départ, juste retournée d'un demi-tour.",
    },
    {
      titre: "Une figure peut avoir un centre de symétrie",
      illustration: "🌀",
      visuel: "parallélogramme, cercle, rectangle...",
      contenu: [
        "Une figure a un centre de symétrie O si elle se superpose à elle-même par la symétrie de centre O",
        "Le parallélogramme a un centre de symétrie : le point d'intersection de ses diagonales",
        "Le rectangle, le losange et le carré (parallélogrammes particuliers) ont donc aussi un centre de symétrie",
        "Le cercle a un centre de symétrie : son propre centre. Un triangle quelconque n'en a pas",
      ],
      voixOff:
        "Certaines figures possèdent un centre de symétrie : elles se superposent exactement à elles-mêmes après un demi-tour autour de ce point. C'est le cas du parallélogramme, dont le centre de symétrie est le point où se croisent les diagonales. Comme le rectangle, le losange et le carré sont des parallélogrammes particuliers, ils ont eux aussi un centre de symétrie. C'est aussi le cas du cercle, dont le centre de symétrie est son propre centre. En revanche, un triangle quelconque n'a pas de centre de symétrie.",
    },
    {
      titre: "Symétrie centrale ou symétrie axiale, et ce qu'il faut retenir",
      illustration: "🪞",
      visuel: "point (demi-tour) vs droite (miroir)",
      contenu: [
        "Symétrie centrale : par rapport à un POINT (demi-tour de 180°)",
        "Symétrie axiale (vue en 6e) : par rapport à une DROITE (effet miroir)",
        "Les deux conservent longueurs, angles et aires",
        "Certaines figures ont un centre de symétrie (parallélogramme, cercle...) ; pas le triangle quelconque",
      ],
      voixOff:
        "Attention à ne pas confondre les deux symétries apprises au collège. La symétrie centrale se fait par rapport à un point, comme un demi-tour de cent quatre-vingts degrés. La symétrie axiale, vue en sixième, se fait par rapport à une droite, comme un effet miroir. Dans les deux cas, les longueurs, les angles et les aires sont conservés, mais il faut toujours bien lire l'énoncé pour savoir si on te parle d'un point ou d'une droite. Bravo, tu connais maintenant l'essentiel sur la symétrie centrale !",
    },
  ],
  fiche: {
    intro:
      "Le symétrique d'un point M par rapport à un centre O est le point M' tel que O est le milieu du segment [MM']. La symétrie centrale conserve les longueurs, les angles, les aires et l'alignement.",
    sections: [
      {
        titre: "Définition et vocabulaire",
        points: [
          "M' est le symétrique de M par rapport à O signifie : O est le milieu de [MM']",
          "M, O et M' sont alignés, et OM = OM'",
          "Réciprocité : si M' est le symétrique de M par rapport à O, alors M est le symétrique de M' par rapport à O",
          "Cas particulier : le symétrique de O par rapport à lui-même est O (point invariant)",
        ],
      },
      {
        titre: "Construire le symétrique d'un point",
        points: [
          "Tracer la droite (MO), puis placer M' sur cette droite, de l'autre côté de O, tel que OM' = OM",
          "Utiliser un compas (reporter la longueur OM) ou une règle graduée",
          "Sur un quadrillage : compter les carreaux entre M et O, puis reporter le même nombre de carreaux de l'autre côté de O",
          "Dans un repère d'origine O, le symétrique du point de coordonnées (x ; y) a pour coordonnées (−x ; −y)",
        ],
      },
      {
        titre: "Propriétés conservées par la symétrie centrale",
        points: [
          "Un segment [AB] devient un segment [A'B'] de même longueur : A'B' = AB",
          "Une droite devient une droite parallèle (ou confondue si elle passe par O)",
          "Un cercle de centre C et de rayon r devient un cercle de même rayon r, de centre C' symétrique de C",
          "Les longueurs, les angles, les aires, le parallélisme et l'alignement des points sont conservés",
        ],
      },
      {
        titre: "Centre de symétrie d'une figure",
        points: [
          "Une figure a un centre de symétrie O si elle se superpose à elle-même par la symétrie de centre O",
          "Le parallélogramme (donc le rectangle, le losange, le carré) a pour centre de symétrie le point d'intersection de ses diagonales",
          "Le cercle a pour centre de symétrie son propre centre",
          "Un triangle quelconque n'a pas de centre de symétrie",
          "Différence avec la symétrie axiale : la symétrie centrale se fait par rapport à un point (demi-tour), la symétrie axiale par rapport à une droite (miroir)",
        ],
      },
    ],
    audio:
      "Fiche de révision : la symétrie centrale. Le symétrique d'un point M par rapport à un centre O est le point M prime tel que O est le milieu du segment M M prime : les points M, O et M prime sont alignés, et les distances O M et O M prime sont égales. Cette relation est réciproque, et le symétrique du centre O par rapport à lui-même est O. Pour construire M prime, on trace la droite qui passe par M et par O, puis on place M prime sur cette droite, de l'autre côté de O, à la même distance, à l'aide d'un compas, d'une règle graduée, ou en comptant les carreaux sur un quadrillage. La symétrie centrale conserve les longueurs, les angles, les aires, le parallélisme et l'alignement des points : un segment devient un segment de même longueur, une droite devient une droite parallèle, sauf si elle passe par le centre, auquel cas elle est confondue avec son image, et un cercle devient un cercle de même rayon dont le centre est le symétrique de l'ancien centre. Certaines figures possèdent un centre de symétrie, c'est-à-dire qu'elles se superposent à elles-mêmes après un demi-tour : c'est le cas du parallélogramme, dont le centre de symétrie est le point d'intersection de ses diagonales, et donc aussi du rectangle, du losange et du carré, ainsi que du cercle, dont le centre de symétrie est son propre centre. Un triangle quelconque, en revanche, n'a pas de centre de symétrie. Enfin, il ne faut pas confondre la symétrie centrale, qui se fait par rapport à un point, avec la symétrie axiale, qui se fait par rapport à une droite.",
  },
  memoCards: [
    {
      recto: "Que signifie « M' est le symétrique de M par rapport à O » ?",
      verso: "O est le milieu du segment [MM']. M, O et M' sont alignés et OM = OM'.",
    },
    {
      recto: "Comment construire le symétrique M' d'un point M par rapport à O ?",
      verso: "On trace la droite (MO), puis on place M' sur cette droite, de l'autre côté de O, tel que OM' = OM.",
    },
    {
      recto: "Quel est le symétrique du point O par rapport à lui-même ?",
      verso: "Le point O lui-même : c'est le seul point invariant de la symétrie de centre O.",
    },
    {
      recto: "Le symétrique d'un segment [AB] par rapport à O ?",
      verso: "Un segment [A'B'] de même longueur : A'B' = AB.",
    },
    {
      recto: "Le symétrique d'une droite d par rapport à O ?",
      verso: "Une droite parallèle à d (ou confondue avec d si d passe par O).",
    },
    {
      recto: "Le symétrique d'un cercle de centre C et de rayon r ?",
      verso: "Un cercle de même rayon r, dont le centre est le symétrique de C par rapport à O.",
    },
    {
      recto: "Que conserve la symétrie centrale ?",
      verso: "Les longueurs, les angles, les aires, le parallélisme et l'alignement des points.",
    },
    {
      recto: "Quelles figures ont un centre de symétrie ?",
      verso: "Le parallélogramme (intersection des diagonales), donc le rectangle, le losange, le carré, et le cercle. Pas le triangle quelconque.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "M' est le symétrique de M par rapport à O. Que peut-on dire du point O ?",
      choix: [
        "O est le milieu de [MM']",
        "O appartient à [MM'] mais n'est pas forcément le milieu",
        "O est plus proche de M que de M'",
        "O n'a aucun lien particulier avec M et M'",
      ],
      bonneReponse: 0,
      explication: "Par définition, le symétrique de M par rapport à O est le point M' tel que O est le milieu du segment [MM'].",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le symétrique du point O par rapport à lui-même ?",
      choix: ["Un point différent de O", "Le point O lui-même", "Cela dépend de la figure", "Il n'existe pas de symétrique"],
      bonneReponse: 1,
      explication: "Le centre O est le seul point invariant : son symétrique par rapport à lui-même est lui-même.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question:
        "Sur ton cahier, place un point O. Place un point M à 4 carreaux à droite de O et 1 carreau au-dessus. Construis le symétrique M' de M par rapport à O. Décris la position de M' par rapport à O.",
      reponse: "M' se trouve à 4 carreaux à gauche de O et 1 carreau en-dessous de O.",
      explication: "On reporte le même nombre de carreaux, de l'autre côté de O : les directions droite/gauche et haut/bas s'inversent.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "[AB] est un segment. [A'B'] est son symétrique par rapport à O. Que peut-on dire des longueurs ?",
      choix: ["A'B' est deux fois plus long que AB", "A'B' = AB", "A'B' dépend de la position de O", "On ne peut pas savoir"],
      bonneReponse: 1,
      explication: "La symétrie centrale conserve les longueurs : le segment symétrique a toujours la même longueur que le segment de départ.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "d est une droite qui ne passe pas par O. Que peut-on dire de la droite d', symétrique de d par rapport à O ?",
      reponse: "d' est une droite parallèle à d.",
      explication: "La symétrie centrale transforme une droite en une droite parallèle ; elles ne sont confondues que si la droite de départ passe par O.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un cercle de centre C et de rayon 5 cm a pour symétrique, par rapport à O, un cercle de rayon :",
      choix: ["2,5 cm", "5 cm", "10 cm", "Cela dépend de la position de O"],
      bonneReponse: 1,
      explication: "Le rayon est toujours conservé par la symétrie centrale ; seul le centre du cercle change de position.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "ABCD est un parallélogramme. Où se trouve son centre de symétrie ?",
      reponse: "Au point d'intersection de ses diagonales [AC] et [BD].",
      explication: "Dans un parallélogramme, les diagonales se coupent en leur milieu commun, qui est le centre de symétrie de la figure.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Parmi ces figures, laquelle n'a PAS de centre de symétrie ?",
      choix: ["Un rectangle", "Un cercle", "Un triangle quelconque", "Un losange"],
      bonneReponse: 2,
      explication: "Un triangle quelconque n'est jamais superposable à lui-même par une symétrie centrale, contrairement au rectangle, au losange ou au cercle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans un repère, O est l'origine. Le point A a pour coordonnées (5 ; −2). Donne les coordonnées du symétrique A' de A par rapport à O.",
      reponse: "A'(−5 ; 2)",
      explication: "Le symétrique par rapport à l'origine O change le signe de chaque coordonnée : (x ; y) devient (−x ; −y).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un triangle MNP a un angle en M de 70°. Le triangle M'N'P' est le symétrique de MNP par rapport à un point O. Quelle est la mesure de l'angle en M' ?",
      reponse: "70°",
      explication: "La symétrie centrale conserve les angles : l'angle en M', image de l'angle en M, a exactement la même mesure.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Construction : place un point O, puis un segment [AB] ne passant pas par O. Construis le symétrique [A'B'] de [AB] par rapport à O. Vérifie que A'B' = AB à l'aide d'un compas ou d'une règle. Explique pourquoi cette égalité est garantie.",
      reponse: "On trouve A'B' = AB.",
      explication:
        "Après avoir construit A' (aligné avec A et O, avec OA' = OA) puis B' de même façon, on mesure A'B' : on retrouve la même longueur que AB, car la symétrie centrale conserve toujours les longueurs.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une droite d passe par le centre O. Quel est son symétrique d' par rapport à O ?",
      choix: ["Une droite parallèle mais différente", "La droite d elle-même", "Un point", "Un segment"],
      bonneReponse: 1,
      explication: "Quand la droite de départ passe par le centre O, elle est sa propre image : d' est confondue avec d.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La symétrie centrale se fait par rapport à :",
      choix: ["Une droite", "Un point", "Un plan", "Un angle"],
      bonneReponse: 1,
      explication: "La symétrie centrale a pour référence un point, appelé le centre de la symétrie.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "M' est le symétrique de M par rapport à O. Que représente O pour le segment [MM'] ?",
      reponse: "Le milieu de [MM'].",
      explication: "C'est la définition même du symétrique d'un point par rapport à un centre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Le symétrique d'un cercle de rayon 8 cm par rapport à un point O est un cercle. Quel est son rayon ?",
      reponse: "8 cm",
      explication: "Le rayon d'un cercle est toujours conservé par la symétrie centrale.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le symétrique d'une droite d par rapport à O (avec O n'appartenant pas à d) est :",
      choix: ["une droite perpendiculaire à d", "une droite parallèle à d", "un cercle", "le point O"],
      bonneReponse: 1,
      explication: "Une droite qui ne passe pas par O a pour symétrique une droite parallèle à elle-même.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans un repère d'origine O, le point B a pour coordonnées (−3 ; 4). Donne les coordonnées de son symétrique B' par rapport à O.",
      reponse: "B'(3 ; −4)",
      explication: "On change le signe de chaque coordonnée : (−3 ; 4) devient (3 ; −4).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La symétrie centrale",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie « A' est le symétrique de A par rapport à O » ?",
          choix: [
            "OA = OA' et O est le milieu de [AA']",
            "A et A' sont confondus",
            "O est plus proche de A que de A'",
            "A' est situé n'importe où sur le plan",
          ],
          bonneReponse: 0,
          explication: "Le symétrique de A par rapport à O est le point A' tel que O est le milieu de [AA'], donc OA = OA'.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel est le symétrique du point O par rapport à O ?",
          reponse: "O",
          explication: "Le centre d'une symétrie centrale est toujours son propre symétrique : c'est le seul point invariant.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Construction : place un point O au centre de ta feuille. Place un point M à 3 carreaux à droite et 2 carreaux en dessous de O. Construis M', symétrique de M par rapport à O, et donne sa position.",
          reponse: "M' est situé à 3 carreaux à gauche et 2 carreaux au-dessus de O.",
          explication: "On reporte le même nombre de carreaux de l'autre côté de O : les déplacements horizontal et vertical sont inversés.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "ABCD est un parallélogramme. Son centre de symétrie est :",
          choix: ["Le sommet A", "Le point d'intersection des diagonales", "Le milieu du côté [AB]", "Il n'en a pas"],
          bonneReponse: 1,
          explication: "Le centre de symétrie d'un parallélogramme est le point où se croisent ses deux diagonales.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un segment [EF] mesure 6 cm. [E'F'] est son symétrique par rapport à un point O. Quelle est la longueur de E'F' ? Justifie.",
          reponse: "6 cm",
          explication: "La symétrie centrale conserve les longueurs, donc E'F' = EF = 6 cm.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Dans un repère d'origine O, un point R a pour coordonnées (7 ; −1). Donne les coordonnées de R', symétrique de R par rapport à O, puis vérifie que O est bien le milieu de [RR'].",
          reponse: "R'(−7 ; 1). Milieu de [RR'] : ((7 + (−7)) ÷ 2 ; (−1 + 1) ÷ 2) = (0 ; 0) = O.",
          explication: "On change le signe de chaque coordonnée pour obtenir R', puis le calcul du milieu confirme que O est bien le milieu de [RR'].",
        },
      ],
    },
    {
      titre: "Examen 2 — La symétrie centrale",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La symétrie centrale peut être vue comme :",
          choix: [
            "Un effet miroir par rapport à une droite",
            "Un demi-tour de 180° autour d'un point",
            "Un agrandissement",
            "Une translation",
          ],
          bonneReponse: 1,
          explication: "La symétrie centrale correspond à une rotation d'un demi-tour (180°) autour du centre.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "M' est le symétrique de M par rapport à O. Que peut-on dire des points M, O, M' ?",
          reponse: "Ils sont alignés, et O est le milieu de [MM'].",
          explication: "C'est la définition même du symétrique d'un point par rapport à un centre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Un cercle a pour centre C et pour rayon 4,5 cm. Son symétrique par rapport à un point O a pour centre C'. Quel est le rayon de ce nouveau cercle ? Comment obtient-on C' ?",
          reponse: "Le rayon reste 4,5 cm. C' est le symétrique de C par rapport à O.",
          explication: "La symétrie centrale conserve le rayon d'un cercle ; seul son centre change, en devenant le symétrique de l'ancien centre.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Parmi ces figures, laquelle a un centre de symétrie ?",
          choix: ["Un triangle équilatéral", "Un rectangle", "Un triangle rectangle quelconque", "Un triangle isocèle quelconque"],
          bonneReponse: 1,
          explication: "Le rectangle est un parallélogramme particulier : il a un centre de symétrie (l'intersection de ses diagonales). Aucun triangle n'a de centre de symétrie.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Une droite d passe par le point O. Que peut-on dire de son symétrique d' par rapport à O ? Justifie.",
          reponse: "d' est confondue avec d (d est sa propre symétrique).",
          explication: "Comme O appartient à d, le symétrique de chaque point de d reste sur d : l'image de d est donc d elle-même.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Dans un repère d'origine O, un point S a pour coordonnées (−4 ; −6). Donne les coordonnées de S', symétrique de S par rapport à O.",
          reponse: "S'(4 ; 6)",
          explication: "On change le signe des deux coordonnées : (−4 ; −6) devient (4 ; 6).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "M' est le symétrique de M par rapport à O signifie que O est le milieu du segment [MM'].",
    "Pour construire M', on trace la droite (MO) puis on place M' tel que OM' = OM, de l'autre côté de O.",
    "Le symétrique de O par rapport à lui-même est O : c'est le seul point invariant.",
    "La symétrie centrale conserve les longueurs, les angles, les aires, le parallélisme et l'alignement.",
    "Un segment devient un segment de même longueur, une droite devient une droite parallèle (ou confondue si elle passe par O), un cercle devient un cercle de même rayon.",
    "Certaines figures ont un centre de symétrie (parallélogramme, rectangle, losange, carré, cercle) ; ce n'est jamais le cas d'un triangle quelconque.",
  ],
},
{
  slug: "triangles",
  titre: "Les triangles : construction et angles",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Découvrir le vocabulaire du triangle, apprendre que la somme de ses angles vaut toujours 180°, savoir si un triangle est constructible grâce à l'inégalité triangulaire, classer les triangles et les construire avec la règle, le compas et le rapporteur.",
  objectifs: [
    "Connaître le vocabulaire du triangle (sommet, côté, angle, côté opposé)",
    "Savoir que la somme des angles d'un triangle vaut toujours 180°",
    "Utiliser l'inégalité triangulaire pour savoir si un triangle est constructible",
    "Classer un triangle selon ses côtés (quelconque, isocèle, équilatéral) et selon ses angles (rectangle, acutangle, obtusangle)",
    "Construire un triangle à la règle, au compas et au rapporteur selon les données fournies",
  ],
  slides: [
    {
      titre: "Le triangle : sommets, côtés, angles",
      illustration: "🔺",
      visuel: "A, B, C",
      contenu: [
        "Un triangle a 3 sommets, 3 côtés et 3 angles",
        "On le nomme avec les 3 lettres de ses sommets : triangle ABC",
        "Le côté [BC] est le côté opposé au sommet A (et à l'angle en A)",
        "Outils : règle graduée pour les longueurs, rapporteur pour les angles",
      ],
      voixOff:
        "Un triangle est une figure formée de trois sommets, trois côtés et trois angles. On le nomme grâce à ses trois sommets, par exemple le triangle ABC. Chaque côté est opposé à un sommet et à l'angle qui s'y trouve : le côté BC est opposé au sommet A. Pour étudier un triangle, on utilise la règle graduée pour les longueurs et le rapporteur pour les angles.",
    },
    {
      titre: "La somme des angles fait toujours 180°",
      illustration: "📐",
      visuel: "180°",
      contenu: [
        "Dans TOUT triangle, la somme des 3 angles vaut 180°",
        "Si on connaît 2 angles, on trouve le 3e par soustraction",
        "Exemple : 50° + 70° + ? = 180° → le 3e angle mesure 60°",
        "Cette règle permet de vérifier ou de compléter une figure",
      ],
      voixOff:
        "Voici la règle la plus importante sur les triangles : dans n'importe quel triangle, la somme des trois angles vaut toujours cent quatre-vingts degrés. Si on connaît deux angles, on peut donc calculer le troisième par soustraction. Par exemple, avec un angle de cinquante degrés et un angle de soixante-dix degrés, le troisième angle mesure cent quatre-vingts moins cinquante moins soixante-dix, soit soixante degrés.",
    },
    {
      titre: "Peut-on toujours construire un triangle ?",
      illustration: "📏",
      visuel: "8 > 3+4",
      contenu: [
        "Pas toujours ! Il faut respecter l'inégalité triangulaire",
        "Chaque côté doit être PLUS PETIT que la somme des deux autres",
        "Exemple impossible : 3 cm, 4 cm, 8 cm → 8 > 3+4=7",
        "Exemple possible : 5 cm, 6 cm, 9 cm → 9 < 5+6=11 ✓",
      ],
      voixOff:
        "Attention, on ne peut pas toujours construire un triangle avec trois longueurs choisies au hasard. Il faut respecter l'inégalité triangulaire : chaque côté doit être plus petit que la somme des deux autres. Avec trois centimètres, quatre centimètres et huit centimètres, c'est impossible, car huit est plus grand que trois plus quatre qui fait sept : les côtés ne peuvent pas se refermer. En revanche, avec cinq, six et neuf centimètres, la construction est possible.",
    },
    {
      titre: "Classer les triangles selon leurs côtés",
      illustration: "⚖️",
      visuel: "quelconque / isocèle / équilatéral",
      contenu: [
        "Triangle quelconque : les 3 côtés ont des longueurs différentes",
        "Triangle isocèle : 2 côtés de même longueur (donc 2 angles égaux à la base)",
        "Triangle équilatéral : les 3 côtés sont égaux (et les 3 angles valent 60°)",
        "Pour vérifier, on mesure avec la règle ou on reporte avec le compas",
      ],
      voixOff:
        "Les triangles se classent d'abord selon leurs côtés. Un triangle quelconque a trois côtés de longueurs différentes. Un triangle isocèle a deux côtés de même longueur, et par conséquent deux angles égaux à la base. Un triangle équilatéral a ses trois côtés égaux, ce qui donne automatiquement trois angles égaux de soixante degrés chacun.",
    },
    {
      titre: "Classer les triangles selon leurs angles",
      illustration: "📐",
      visuel: "rectangle / acutangle / obtusangle",
      contenu: [
        "Triangle rectangle : il a un angle droit (90°)",
        "Triangle acutangle : tous les angles sont aigus (moins de 90°)",
        "Triangle obtusangle : il a un angle obtus (plus de 90°)",
        "On repère l'angle droit avec l'équerre, les autres avec le rapporteur",
      ],
      voixOff:
        "On peut aussi classer les triangles selon leurs angles. Un triangle rectangle possède un angle droit de quatre-vingt-dix degrés. Un triangle acutangle a tous ses angles aigus, c'est-à-dire inférieurs à quatre-vingt-dix degrés. Un triangle obtusangle possède un angle obtus, supérieur à quatre-vingt-dix degrés.",
    },
    {
      titre: "Construire un triangle avec ses 3 côtés",
      illustration: "🧭",
      visuel: "compas",
      contenu: [
        "Données : les longueurs des 3 côtés",
        "On trace un premier côté à la règle",
        "Au compas, on trace un arc de rayon = au 2e côté depuis une extrémité",
        "On trace un autre arc de rayon = au 3e côté depuis l'autre extrémité : l'intersection donne le 3e sommet",
      ],
      voixOff:
        "Pour construire un triangle dont on connaît les trois côtés, on utilise le compas. On trace d'abord un côté à la règle. Puis, à l'aide du compas, on trace un arc de cercle dont le rayon est égal à la longueur du deuxième côté, depuis une extrémité. On trace ensuite un second arc, de rayon égal au troisième côté, depuis l'autre extrémité. Le point où les deux arcs se croisent est le troisième sommet du triangle.",
    },
    {
      titre: "Construire un triangle avec 2 côtés et l'angle entre eux",
      illustration: "✏️",
      visuel: "règle + rapporteur",
      contenu: [
        "Données : 2 longueurs et l'angle compris entre elles",
        "On trace le premier côté à la règle",
        "On place le rapporteur sur une extrémité pour reporter l'angle donné",
        "On trace le second côté sur cette direction, puis on relie les deux extrémités",
      ],
      voixOff:
        "Quand on connaît deux côtés et l'angle formé entre eux, on utilise la règle et le rapporteur. On trace d'abord le premier côté. On place ensuite le rapporteur sur une extrémité pour reporter précisément l'angle donné, et on trace le second côté le long de cette direction. Il ne reste plus qu'à relier les deux extrémités libres pour obtenir le triangle.",
    },
    {
      titre: "Construire un triangle avec un côté et 2 angles",
      illustration: "📝",
      visuel: "angle-côté-angle",
      contenu: [
        "Données : un côté et les 2 angles à ses extrémités",
        "On trace le côté connu à la règle",
        "On reporte le premier angle à une extrémité au rapporteur, puis le second angle à l'autre extrémité",
        "Les deux nouvelles droites se coupent au troisième sommet",
      ],
      voixOff:
        "Dernier cas : on connaît un côté et les deux angles situés à ses extrémités. On trace ce côté à la règle, puis on reporte le premier angle donné à une extrémité à l'aide du rapporteur, et le second angle à l'autre extrémité. Les deux droites tracées se rejoignent alors au troisième sommet du triangle.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Somme des angles d'un triangle = toujours 180°",
        "Inégalité triangulaire : chaque côté < somme des deux autres, sinon impossible",
        "Classement par côtés : quelconque, isocèle, équilatéral",
        "Classement par angles : rectangle, acutangle, obtusangle",
      ],
      voixOff:
        "Résumons l'essentiel sur les triangles. La somme des trois angles vaut toujours cent quatre-vingts degrés. L'inégalité triangulaire dit que chaque côté doit être plus petit que la somme des deux autres, sinon le triangle ne peut pas être construit. On classe les triangles selon leurs côtés en quelconque, isocèle ou équilatéral, et selon leurs angles en rectangle, acutangle ou obtusangle. Avec la règle, le compas et le rapporteur, tu sais maintenant construire un triangle dans les trois cas les plus courants.",
    },
  ],
  fiche: {
    intro:
      "Un triangle possède 3 sommets, 3 côtés et 3 angles dont la somme vaut toujours 180°. Pour qu'il soit constructible, chaque côté doit être plus petit que la somme des deux autres (inégalité triangulaire).",
    sections: [
      {
        titre: "Vocabulaire et somme des angles",
        points: [
          "Un triangle ABC a 3 sommets (A, B, C), 3 côtés ([AB], [AC], [BC]) et 3 angles",
          "Le côté [BC] est opposé au sommet A (et à l'angle en A)",
          "La somme des 3 angles d'un triangle vaut toujours 180°",
          "Exemple : 45° + 95° + ? = 180° → le 3e angle mesure 40°",
        ],
      },
      {
        titre: "Inégalité triangulaire",
        points: [
          "Chaque côté d'un triangle doit être strictement plus petit que la somme des deux autres côtés",
          "Sinon, le triangle ne peut pas se refermer : il est impossible à construire",
          "Exemple impossible : 3 cm, 4 cm, 8 cm (8 > 3+4=7)",
          "Exemple possible : 5 cm, 6 cm, 9 cm (9 < 5+6=11)",
        ],
      },
      {
        titre: "Classer les triangles",
        points: [
          "Selon les côtés : quelconque (3 côtés différents), isocèle (2 côtés égaux), équilatéral (3 côtés égaux, angles de 60°)",
          "Selon les angles : rectangle (un angle de 90°), acutangle (tous les angles < 90°), obtusangle (un angle > 90°)",
          "Un triangle isocèle a 2 angles égaux à la base",
        ],
      },
      {
        titre: "Construire un triangle",
        points: [
          "Avec les 3 côtés : on trace un côté puis 2 arcs de cercle au compas depuis chaque extrémité",
          "Avec 2 côtés et l'angle entre eux : règle pour les longueurs, rapporteur pour l'angle",
          "Avec un côté et ses 2 angles adjacents : on reporte les 2 angles au rapporteur, les droites se coupent au 3e sommet",
        ],
      },
    ],
    audio:
      "Fiche de révision : les triangles. Un triangle possède trois sommets, trois côtés et trois angles ; on le nomme avec les trois lettres de ses sommets, comme le triangle ABC, et chaque côté est opposé à un sommet : le côté BC est opposé au sommet A. Règle essentielle : la somme des trois angles d'un triangle vaut toujours cent quatre-vingts degrés, ce qui permet de calculer un angle manquant par soustraction. On ne peut pas toujours construire un triangle avec trois longueurs choisies au hasard : il faut respecter l'inégalité triangulaire, c'est-à-dire que chaque côté doit être strictement plus petit que la somme des deux autres côtés. Par exemple, trois, quatre et huit centimètres, c'est impossible car huit est plus grand que trois plus quatre. Les triangles se classent selon leurs côtés : quelconque quand les trois côtés sont différents, isocèle quand deux côtés sont égaux, équilatéral quand les trois côtés sont égaux, avec alors trois angles de soixante degrés. Ils se classent aussi selon leurs angles : rectangle avec un angle droit, acutangle quand tous les angles sont aigus, obtusangle quand un angle est obtus. Enfin, on sait construire un triangle dans trois situations : en connaissant ses trois côtés, avec la règle et le compas ; en connaissant deux côtés et l'angle entre eux, avec la règle et le rapporteur ; ou en connaissant un côté et ses deux angles adjacents, toujours avec la règle et le rapporteur.",
  },
  memoCards: [
    {
      recto: "Somme des angles d'un triangle ?",
      verso: "Toujours 180°. Ex : 50° + 70° + ? = 180° → le 3e angle mesure 60°.",
    },
    {
      recto: "Inégalité triangulaire, c'est quoi ?",
      verso: "Chaque côté doit être strictement plus petit que la somme des deux autres, sinon le triangle n'existe pas.",
    },
    {
      recto: "Construire un triangle 3 cm, 4 cm, 8 cm : possible ?",
      verso: "Non : 8 > 3+4=7, les côtés ne peuvent pas se refermer.",
    },
    {
      recto: "Triangle isocèle, définition ?",
      verso: "2 côtés de même longueur, donc 2 angles égaux à la base.",
    },
    {
      recto: "Triangle équilatéral, définition ?",
      verso: "3 côtés égaux, donc 3 angles égaux de 60° chacun.",
    },
    {
      recto: "Rectangle, acutangle, obtusangle : différences ?",
      verso: "Rectangle : un angle de 90°. Acutangle : tous les angles < 90°. Obtusangle : un angle > 90°.",
    },
    {
      recto: "Comment construire un triangle connaissant ses 3 côtés ?",
      verso: "On trace un côté, puis avec le compas on trace 2 arcs (rayons = aux 2 autres côtés) depuis chaque extrémité ; leur intersection est le 3e sommet.",
    },
    {
      recto: "Quels outils pour construire un triangle ?",
      verso: "La règle pour les longueurs, le rapporteur pour les angles, le compas pour reporter des longueurs égales.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un triangle a deux angles de 50° et 70°. Combien mesure le troisième angle ?",
      choix: ["50°", "60°", "70°", "120°"],
      bonneReponse: 1,
      explication: "La somme des angles vaut 180° : 180 − 50 − 70 = 60°.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un triangle a un angle de 90° et un angle de 40°. Combien mesure le troisième angle ?",
      choix: ["40°", "50°", "60°", "90°"],
      bonneReponse: 1,
      explication: "180 − 90 − 40 = 50°.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un triangle a deux angles de 35° et 65°. Calcule le troisième angle.",
      reponse: "80°",
      explication: "La somme des trois angles vaut 180° : 180 − 35 − 65 = 80°.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un triangle ABC, quel est le côté opposé au sommet A ?",
      choix: ["[AB]", "[AC]", "[BC]", "Aucun côté n'est opposé à un sommet"],
      bonneReponse: 2,
      explication: "Le côté [BC] ne touche pas le sommet A : c'est donc le côté opposé à A (et à l'angle en A).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Peut-on construire un triangle dont les côtés mesurent 3 cm, 4 cm et 8 cm ? Justifie.",
      reponse: "Non, c'est impossible.",
      explication: "Il faut que chaque côté soit inférieur à la somme des deux autres. Or 8 > 3 + 4 = 7 : l'inégalité triangulaire n'est pas respectée, les côtés ne peuvent pas se refermer.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Peut-on construire un triangle dont les côtés mesurent 5 cm, 6 cm et 9 cm ? Justifie.",
      reponse: "Oui, c'est possible.",
      explication: "9 < 5 + 6 = 11, 6 < 5 + 9 = 14 et 5 < 6 + 9 = 15 : l'inégalité triangulaire est vérifiée pour les trois côtés.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un triangle isocèle a un angle au sommet de 40°. Combien mesure chacun des deux angles à la base ?",
      choix: ["40°", "70°", "80°", "100°"],
      bonneReponse: 1,
      explication: "Les deux angles à la base sont égaux : (180 − 40) ÷ 2 = 70° chacun (vérification : 40 + 70 + 70 = 180).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un triangle possède un angle de 110°. Comment le classe-t-on selon ses angles ?",
      choix: ["Rectangle", "Acutangle", "Obtusangle", "Isocèle"],
      bonneReponse: 2,
      explication: "Un angle de plus de 90° est un angle obtus : le triangle est donc obtusangle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un triangle rectangle a un angle aigu de 35°. Calcule les deux autres angles.",
      reponse: "90° et 55°",
      explication: "Un triangle rectangle a un angle droit de 90°. Le troisième angle vaut 180 − 90 − 35 = 55°.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Peut-on construire un triangle dont les côtés mesurent 7 cm, 7 cm et 14 cm ? Justifie.",
      reponse: "Non, c'est impossible.",
      explication: "Il faudrait que 14 soit strictement inférieur à 7 + 7 = 14, ce qui est faux (14 n'est pas inférieur à 14). Les trois points seraient alignés : on obtiendrait un segment plat, pas un triangle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris comment construire un triangle ABC tel que AB = 6 cm, AC = 4 cm et BC = 5 cm, en utilisant une règle et un compas.",
      reponse: "On trace [AB] = 6 cm à la règle, puis avec le compas on trace un arc de rayon 4 cm centré en A et un arc de rayon 5 cm centré en B ; le point d'intersection des deux arcs est le sommet C.",
      explication: "La construction est possible car l'inégalité triangulaire est vérifiée : 6 < 4+5=9, 5 < 6+4=10, 4 < 6+5=11.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris comment construire un triangle ABC tel que AB = 5 cm, l'angle BAC = 50° et AC = 4 cm.",
      reponse: "On trace [AB] = 5 cm à la règle. On place le rapporteur en A pour reporter un angle de 50° à partir de la demi-droite [AB). On trace ensuite [AC] = 4 cm sur ce nouveau rayon, puis on relie B et C.",
      explication: "C'est une construction 'côté-angle-côté' : deux longueurs et l'angle compris entre elles suffisent toujours à construire un triangle unique.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La somme des angles d'un triangle vaut toujours :",
      choix: ["90°", "180°", "270°", "360°"],
      bonneReponse: 1,
      explication: "Dans tout triangle, la somme des trois angles vaut 180°.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un triangle a deux angles de 45° et 95°. Calcule le troisième angle.",
      reponse: "40°",
      explication: "180 − 45 − 95 = 40°.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment reconnaît-on un triangle équilatéral ?",
      choix: ["Il a un angle droit", "Ses 3 côtés ont la même longueur", "2 de ses côtés seulement sont égaux", "Aucun de ses angles n'est égal à un autre"],
      bonneReponse: 1,
      explication: "Un triangle équilatéral a ses 3 côtés égaux, ce qui donne aussi 3 angles égaux de 60°.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Peut-on construire un triangle de côtés 2 cm, 3 cm et 6 cm ? Justifie.",
      reponse: "Non, c'est impossible.",
      explication: "2 + 3 = 5, et 5 < 6 : le côté de 6 cm est plus grand que la somme des deux autres, l'inégalité triangulaire n'est pas respectée.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un triangle rectangle isocèle a un angle droit. Combien mesurent les deux autres angles ?",
      reponse: "45° chacun",
      explication: "Les deux angles restants sont égaux (triangle isocèle) et leur somme vaut 180 − 90 = 90°, donc chacun mesure 45°.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les triangles",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un triangle a deux angles de 20° et 110°. Combien mesure le troisième angle ?",
          choix: ["30°", "40°", "50°", "70°"],
          bonneReponse: 2,
          explication: "180 − 20 − 110 = 50°.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans un triangle RST, quel est le côté opposé au sommet S ?",
          reponse: "[RT]",
          explication: "Le côté opposé à un sommet est celui qui ne le touche pas : [RT] ne contient pas S.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Peut-on construire un triangle de côtés 4 cm, 5 cm et 10 cm ? Justifie.",
          reponse: "Non, c'est impossible.",
          explication: "4 + 5 = 9, et 9 < 10 : le côté de 10 cm est plus grand que la somme des deux autres côtés.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un triangle isocèle a un angle au sommet de 100°. Combien mesure chaque angle à la base ?",
          choix: ["30°", "40°", "50°", "80°"],
          bonneReponse: 1,
          explication: "(180 − 100) ÷ 2 = 40° (vérification : 100 + 40 + 40 = 180).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Décris la construction d'un triangle ABC tel que AB = 7 cm, AC = 5 cm et BC = 6 cm.",
          reponse: "On trace [AB] = 7 cm à la règle, puis on trace au compas un arc de rayon 5 cm centré en A et un arc de rayon 6 cm centré en B ; leur point d'intersection est le sommet C.",
          explication: "La construction est possible : 7 < 5+6=11, 6 < 7+5=12, 5 < 7+6=13, l'inégalité triangulaire est vérifiée.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un triangle a des angles de 20°, 40° et 120°. Vérifie que la somme fait bien 180° puis classe ce triangle selon ses angles.",
          reponse: "20 + 40 + 120 = 180°. C'est un triangle obtusangle.",
          explication: "La somme est correcte (180°) et il possède un angle de 120°, supérieur à 90° : c'est donc un triangle obtusangle.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les triangles",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un triangle a deux angles de 33° et 89°. Combien mesure le troisième angle ?",
          choix: ["48°", "58°", "68°", "78°"],
          bonneReponse: 1,
          explication: "180 − 33 − 89 = 58°.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui définit un triangle rectangle ?",
          reponse: "Un triangle rectangle possède un angle droit, c'est-à-dire un angle de 90°.",
          explication: "C'est la seule condition : un des trois angles doit mesurer exactement 90°.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Peut-on construire un triangle de côtés 8 cm, 9 cm et 17 cm ? Justifie.",
          reponse: "Non, c'est impossible.",
          explication: "8 + 9 = 17, ce qui n'est pas strictement inférieur à 17 : les trois points seraient alignés, on obtiendrait un segment plat, pas un triangle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans un triangle équilatéral, combien mesure chaque angle ?",
          choix: ["45°", "60°", "90°", "100°"],
          bonneReponse: 1,
          explication: "Les 3 côtés étant égaux, les 3 angles sont égaux, et 180 ÷ 3 = 60° chacun.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Décris la construction d'un triangle ABC connaissant BC = 6 cm, l'angle en B = 50° et l'angle en C = 70°.",
          reponse: "On trace [BC] = 6 cm à la règle. Au rapporteur, on reporte un angle de 50° en B et un angle de 70° en C, sur le même côté de [BC]. Les deux nouvelles droites se coupent au sommet A.",
          explication: "C'est une construction 'côté-angle-angle'. Le troisième angle, en A, mesure 180 − 50 − 70 = 60°.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un jardinier veut délimiter un massif triangulaire dont les côtés mesurent 12 m, 9 m et 5 m. Est-ce réalisable ? Justifie.",
          reponse: "Oui, c'est réalisable.",
          explication: "12 < 9+5=14, 9 < 12+5=17 et 5 < 12+9=21 : les trois inégalités sont vérifiées, le triangle est constructible.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Dans tout triangle, la somme des trois angles vaut toujours 180° : on peut donc calculer un angle manquant par soustraction.",
    "Inégalité triangulaire : chaque côté doit être strictement plus petit que la somme des deux autres, sinon le triangle est impossible à construire.",
    "Classement selon les côtés : quelconque (3 côtés différents), isocèle (2 côtés égaux), équilatéral (3 côtés égaux et 3 angles de 60°).",
    "Classement selon les angles : rectangle (un angle de 90°), acutangle (tous les angles < 90°), obtusangle (un angle > 90°).",
    "Trois méthodes de construction : avec les 3 côtés (règle + compas), avec 2 côtés et l'angle entre eux (règle + rapporteur), avec un côté et ses 2 angles adjacents (règle + rapporteur).",
    "Erreur à éviter absolument : oublier de vérifier l'inégalité triangulaire avant d'essayer de construire un triangle à partir de trois longueurs.",
  ],
}
];

export default chapitres;
