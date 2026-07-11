import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
