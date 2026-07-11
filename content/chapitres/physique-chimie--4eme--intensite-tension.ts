import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "intensite-tension",
  titre: "Intensité et tension électriques",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Mesurer l'intensité du courant avec un ampèremètre et la tension avec un voltmètre, connaître les lois d'unicité et d'additivité de l'intensité et de la tension dans les circuits série et en dérivation, et comprendre le danger du court-circuit.",
  objectifs: [
    "Mesurer une intensité (en ampères) avec un ampèremètre branché en série",
    "Mesurer une tension (en volts) avec un voltmètre branché en dérivation",
    "Connaître les lois de l'intensité et de la tension dans un circuit série",
    "Connaître les lois de l'intensité et de la tension dans un circuit en dérivation",
    "Comprendre pourquoi un court-circuit est dangereux",
  ],
  slides: [
    {
      titre: "Rappels sur le circuit électrique",
      illustration: "⚡",
      visuel: "Générateur → Récepteurs → Fils",
      contenu: [
        "Un circuit électrique est une boucle fermée de dipôles reliés par des fils",
        "Il comporte un générateur (pile) et un ou plusieurs récepteurs",
        "Deux types de montages : le circuit série (un seul chemin) et le circuit en dérivation (plusieurs branches)",
        "Le courant circule du + vers le − à l'extérieur du générateur (sens conventionnel)",
      ],
      voixOff:
        "Avant d'aller plus loin, rappelons qu'un circuit électrique est une boucle fermée de dipôles reliés par des fils conducteurs, avec un générateur qui fait circuler le courant et un ou plusieurs récepteurs qui l'utilisent. On distingue deux montages : le circuit série, où il n'existe qu'un seul chemin pour le courant, et le circuit en dérivation, qui comporte plusieurs branches. Le courant circule, par convention, de la borne plus vers la borne moins à l'extérieur du générateur.",
    },
    {
      titre: "L'intensité du courant électrique",
      illustration: "🔢",
      visuel: "I en ampères (A)",
      contenu: [
        "L'intensité, notée I, mesure le débit du courant électrique dans un circuit",
        "Elle s'exprime en ampères, symbole A",
        "Sous-unités courantes : le milliampère (1 mA = 0,001 A)",
        "Plus l'intensité est grande, plus le courant qui circule est important",
      ],
      voixOff:
        "L'intensité du courant électrique, notée I, mesure en quelque sorte le débit de courant qui circule dans le circuit. Elle s'exprime en ampères, de symbole A, en hommage au physicien André-Marie Ampère. On utilise parfois le milliampère, qui vaut un millième d'ampère, pour les très petites intensités. Plus l'intensité est élevée, plus le courant qui traverse le circuit est important.",
    },
    {
      titre: "Mesurer l'intensité : l'ampèremètre",
      illustration: "📟",
      visuel: "Ampèremètre EN SÉRIE",
      contenu: [
        "L'ampèremètre mesure l'intensité I dans un circuit",
        "Il se branche TOUJOURS en série, directement inséré dans le circuit",
        "Il faut choisir un calibre adapté, supérieur à la valeur attendue",
        "Erreur à éviter : brancher l'ampèremètre en dérivation risque de l'endommager",
      ],
      voixOff:
        "Pour mesurer l'intensité du courant, on utilise un ampèremètre. Il doit toujours être branché en série, c'est-à-dire directement inséré sur le chemin du courant, comme un maillon de la chaîne. Il faut aussi choisir un calibre adapté, c'est-à-dire une plage de mesure supérieure à la valeur que l'on s'attend à mesurer. Attention : brancher un ampèremètre en dérivation est une erreur qui peut l'endommager, voire le détruire.",
    },
    {
      titre: "La tension électrique",
      illustration: "🔋",
      visuel: "U en volts (V)",
      contenu: [
        "La tension, notée U, mesure la différence électrique entre deux points d'un circuit",
        "Elle s'exprime en volts, symbole V",
        "Exemples : pile plate 4,5 V, pile ronde 1,5 V, prise secteur 230 V",
        "Chaque dipôle branché dans un circuit possède une tension à ses bornes",
      ],
      voixOff:
        "La tension électrique, notée U, mesure une différence électrique entre deux points d'un circuit, souvent les deux bornes d'un dipôle. Elle s'exprime en volts, de symbole V, en hommage au physicien Alessandro Volta. Une pile plate délivre une tension de quatre virgule cinq volts, une pile ronde un virgule cinq volts, et la prise secteur en France deux cent trente volts. Chaque dipôle branché dans un circuit possède une tension à ses bornes.",
    },
    {
      titre: "Mesurer la tension : le voltmètre",
      illustration: "🎛️",
      visuel: "Voltmètre EN DÉRIVATION",
      contenu: [
        "Le voltmètre mesure la tension U aux bornes d'un dipôle",
        "Il se branche TOUJOURS en dérivation, aux bornes du dipôle étudié",
        "Le multimètre peut fonctionner en ampèremètre ou en voltmètre selon le réglage et les bornes utilisées",
        "Il faut aussi choisir un calibre adapté à la tension mesurée",
      ],
      voixOff:
        "Pour mesurer une tension, on utilise un voltmètre. Contrairement à l'ampèremètre, il se branche toujours en dérivation, directement aux bornes du dipôle que l'on étudie, sans faire partie du chemin principal du courant. En pratique, on utilise souvent un multimètre, un appareil unique qui peut fonctionner en ampèremètre ou en voltmètre selon le réglage choisi et les bornes utilisées. Là encore, il faut sélectionner un calibre adapté à la tension attendue.",
    },
    {
      titre: "Circuit série : les lois de l'intensité et de la tension",
      illustration: "➖",
      visuel: "I = I1 = I2 • U = U1 + U2",
      contenu: [
        "Loi d'unicité de l'intensité : dans un circuit série, l'intensité est la même en tout point : I = I1 = I2",
        "Loi d'additivité des tensions : la tension aux bornes du générateur est égale à la somme des tensions aux bornes des récepteurs : U = U1 + U2",
        "Ces deux lois sont valables quel que soit le nombre de récepteurs en série",
      ],
      voixOff:
        "Dans un circuit série, deux lois essentielles sont à connaître. La loi d'unicité de l'intensité : l'intensité du courant est la même partout dans le circuit, I égale I1 égale I2. La loi d'additivité des tensions : la tension délivrée par le générateur est égale à la somme des tensions aux bornes de chaque récepteur, U égale U1 plus U2. Ces deux lois restent valables, même avec plus de deux récepteurs en série.",
    },
    {
      titre: "Circuit en dérivation : les lois de l'intensité et de la tension",
      illustration: "🔀",
      visuel: "U = U1 = U2 • I = I1 + I2",
      contenu: [
        "Loi d'unicité de la tension : chaque branche a la même tension à ses bornes que le générateur : U = U1 = U2",
        "Loi d'additivité des intensités : l'intensité principale se répartit entre les branches : I = I1 + I2",
        "C'est l'inverse du circuit série : ici, c'est la tension qui est unique et l'intensité qui s'additionne",
      ],
      voixOff:
        "Dans un circuit en dérivation, les lois s'inversent. La loi d'unicité de la tension : chaque branche possède la même tension à ses bornes, égale à celle du générateur, U égale U1 égale U2. La loi d'additivité des intensités : l'intensité qui sort du générateur se répartit entre les différentes branches, puis se retrouve à l'arrivée, I égale I1 plus I2. Retiens bien la différence avec le circuit série : ici, c'est la tension qui est unique et l'intensité qui s'additionne.",
    },
    {
      titre: "Le court-circuit : un danger électrique",
      illustration: "⚠️",
      visuel: "I très grande !",
      contenu: [
        "Un court-circuit relie directement les deux bornes d'un générateur sans récepteur",
        "L'intensité devient alors très grande, rien ne la limite",
        "Conséquences : échauffement des fils, risque d'incendie, pile ou appareil endommagé",
        "Un fusible ou un disjoncteur coupe le circuit en cas de court-circuit pour protéger l'installation",
      ],
      voixOff:
        "Un court-circuit se produit quand un simple fil relie directement les deux bornes d'un générateur, sans passer par un récepteur qui limiterait le courant. L'intensité devient alors très grande, car rien ne s'y oppose. Cela provoque un échauffement important des fils, un risque d'incendie et peut détruire la pile ou l'appareil. C'est pour cette raison que les installations électriques sont équipées de fusibles ou de disjoncteurs, qui coupent automatiquement le circuit en cas de court-circuit.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Intensité I (ampères, A) : mesurée avec un ampèremètre EN SÉRIE",
        "Tension U (volts, V) : mesurée avec un voltmètre EN DÉRIVATION",
        "Circuit série : I unique partout, U s'additionne (U = U1 + U2)",
        "Circuit dérivation : U unique par branche, I s'additionne (I = I1 + I2)",
      ],
      voixOff:
        "Résumons. L'intensité, notée I et mesurée en ampères, se mesure avec un ampèremètre branché en série. La tension, notée U et mesurée en volts, se mesure avec un voltmètre branché en dérivation. Dans un circuit série, l'intensité est la même partout et les tensions s'additionnent. Dans un circuit en dérivation, c'est l'inverse : la tension est la même dans chaque branche et ce sont les intensités qui s'additionnent. Et surtout, méfie-toi du court-circuit, qui provoque une intensité dangereusement grande.",
    },
  ],
  fiche: {
    intro:
      "L'intensité (I, en ampères) et la tension (U, en volts) sont les deux grandeurs électriques essentielles. Elles obéissent à des lois différentes selon que le circuit est monté en série ou en dérivation.",
    sections: [
      {
        titre: "L'intensité et sa mesure",
        points: [
          "Intensité I : mesurée en ampères (A), avec un ampèremètre",
          "L'ampèremètre se branche TOUJOURS en série, dans le circuit",
          "Choisir un calibre adapté et supérieur à la valeur attendue",
        ],
      },
      {
        titre: "La tension et sa mesure",
        points: [
          "Tension U : mesurée en volts (V), avec un voltmètre",
          "Le voltmètre se branche TOUJOURS en dérivation, aux bornes du dipôle",
          "Le multimètre permet de mesurer I ou U selon le réglage choisi",
        ],
      },
      {
        titre: "Lois dans un circuit série",
        points: [
          "Loi d'unicité de l'intensité : I = I1 = I2 (même intensité partout)",
          "Loi d'additivité des tensions : U = U1 + U2 (la tension du générateur se répartit entre les récepteurs)",
        ],
      },
      {
        titre: "Lois dans un circuit en dérivation et danger du court-circuit",
        points: [
          "Loi d'unicité de la tension : U = U1 = U2 (même tension dans chaque branche)",
          "Loi d'additivité des intensités : I = I1 + I2 (l'intensité se répartit entre les branches)",
          "Court-circuit : intensité très grande, danger d'échauffement et d'incendie",
        ],
      },
    ],
    audio:
      "Fiche de révision : intensité et tension électriques. L'intensité, notée I, se mesure en ampères avec un ampèremètre, toujours branché en série dans le circuit. La tension, notée U, se mesure en volts avec un voltmètre, toujours branché en dérivation aux bornes du dipôle étudié. Dans un circuit série, l'intensité est la même en tout point du circuit : c'est la loi d'unicité de l'intensité. Les tensions aux bornes de chaque récepteur s'additionnent pour donner la tension du générateur : c'est la loi d'additivité des tensions. Dans un circuit en dérivation, c'est l'inverse : la tension est la même aux bornes de chaque branche, c'est la loi d'unicité de la tension, tandis que les intensités des différentes branches s'additionnent pour donner l'intensité totale, c'est la loi d'additivité des intensités. Enfin, un court-circuit, qui relie directement les deux bornes d'un générateur sans récepteur, provoque une intensité dangereusement grande, avec un risque d'échauffement et d'incendie.",
  },
  memoCards: [
    { recto: "Que mesure l'intensité I et dans quelle unité ?", verso: "Le débit du courant électrique, en ampères (A)." },
    { recto: "Que mesure la tension U et dans quelle unité ?", verso: "La différence électrique entre deux points d'un circuit, en volts (V)." },
    { recto: "Comment brancher un ampèremètre ?", verso: "Toujours en série, directement inséré dans le circuit." },
    { recto: "Comment brancher un voltmètre ?", verso: "Toujours en dérivation, aux bornes du dipôle étudié." },
    { recto: "Loi de l'intensité dans un circuit série ?", verso: "L'intensité est la même partout : I = I1 = I2 (loi d'unicité)." },
    { recto: "Loi de la tension dans un circuit série ?", verso: "Les tensions s'additionnent : U = U1 + U2 (loi d'additivité)." },
    { recto: "Loi de la tension dans un circuit en dérivation ?", verso: "La tension est la même dans chaque branche : U = U1 = U2 (loi d'unicité)." },
    { recto: "Loi de l'intensité dans un circuit en dérivation ?", verso: "Les intensités s'additionnent : I = I1 + I2 (loi d'additivité)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'intensité du courant électrique se mesure en :",
      choix: ["volts (V)", "ampères (A)", "watts (W)", "ohms (Ω)"],
      bonneReponse: 1,
      explication: "L'intensité I s'exprime en ampères, symbole A.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se branche un ampèremètre dans un circuit ?",
      choix: ["En dérivation", "En série", "N'importe où", "En parallèle du générateur uniquement"],
      bonneReponse: 1,
      explication: "L'ampèremètre se branche toujours en série, directement inséré dans le circuit.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans quelle unité s'exprime la tension électrique et avec quel appareil la mesure-t-on ?",
      reponse: "La tension s'exprime en volts (V) et se mesure avec un voltmètre.",
      explication: "Le voltmètre se branche en dérivation, aux bornes du dipôle étudié.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se branche un voltmètre ?",
      choix: ["En série", "En dérivation, aux bornes du dipôle", "Il n'a pas besoin d'être branché", "En série avec l'ampèremètre uniquement"],
      bonneReponse: 1,
      explication: "Le voltmètre se branche en dérivation, aux bornes du dipôle dont on veut mesurer la tension.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un circuit série avec deux lampes, U1 = 2 V aux bornes de la première lampe et U2 = 2,5 V aux bornes de la deuxième. Quelle est la tension U du générateur ?",
      reponse: "U = U1 + U2 = 2 + 2,5 = 4,5 V",
      explication: "Loi d'additivité des tensions dans un circuit série : la tension du générateur est la somme des tensions aux bornes des récepteurs.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un circuit série, si l'intensité vaut 0,3 A à un endroit du circuit, que vaut-elle ailleurs dans ce même circuit ?",
      choix: ["Elle est toujours plus faible", "Elle est toujours plus forte", "Elle vaut 0,3 A partout", "Elle dépend du nombre de récepteurs"],
      bonneReponse: 2,
      explication: "Loi d'unicité de l'intensité : dans un circuit série, l'intensité est la même en tout point du circuit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un circuit en dérivation à deux branches, I1 = 0,4 A et I2 = 0,6 A. Quelle est l'intensité I délivrée par le générateur ?",
      reponse: "I = I1 + I2 = 0,4 + 0,6 = 1 A",
      explication: "Loi d'additivité des intensités dans un circuit en dérivation : l'intensité totale est la somme des intensités des branches.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un circuit en dérivation, la tension aux bornes de chaque branche est :",
      choix: [
        "toujours différente d'une branche à l'autre",
        "la somme des tensions des autres branches",
        "égale à la tension du générateur, la même pour chaque branche",
        "toujours nulle",
      ],
      bonneReponse: 2,
      explication: "Loi d'unicité de la tension : dans un circuit en dérivation, chaque branche a la même tension à ses bornes, égale à celle du générateur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi un court-circuit est dangereux, en utilisant le vocabulaire de l'intensité.",
      reponse:
        "Un court-circuit relie directement les deux bornes du générateur, sans récepteur pour limiter le courant. L'intensité devient alors très grande, ce qui provoque un échauffement important des fils et peut causer un incendie ou détruire la pile.",
      explication: "Sans résistance pour limiter le passage du courant, l'intensité augmente fortement et dégage beaucoup de chaleur.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un circuit série comporte trois lampes identiques. U1 = U2 = U3 = 1,5 V. Quelle est la tension totale du générateur ?",
      choix: ["1,5 V", "3 V", "4,5 V", "6 V"],
      bonneReponse: 2,
      explication: "U = U1 + U2 + U3 = 1,5 + 1,5 + 1,5 = 4,5 V, par la loi d'additivité des tensions.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un circuit en dérivation comporte deux branches. L'intensité totale délivrée par le générateur est 0,8 A. La première branche a une intensité de 0,3 A. Quelle est l'intensité dans la deuxième branche ?",
      reponse: "I2 = I − I1 = 0,8 − 0,3 = 0,5 A",
      explication: "D'après la loi d'additivité des intensités, I = I1 + I2, donc I2 = I − I1.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un élève veut mesurer la tension aux bornes d'une lampe. Il branche par erreur son voltmètre en série dans le circuit. Que va-t-il probablement observer, et pourquoi ?",
      reponse:
        "La lampe risque de ne pas s'allumer ou de briller très faiblement, car un voltmètre branché en série se comporte comme un obstacle qui empêche presque tout le courant de passer. Le voltmètre doit être branché en dérivation, pas en série.",
      explication: "Un voltmètre est conçu pour mesurer une tension sans être traversé par un courant important ; branché en série, il bloque quasiment le passage du courant.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'unité de la tension électrique est :",
      choix: ["l'ampère", "le volt", "le watt", "le joule"],
      bonneReponse: 1,
      explication: "La tension U s'exprime en volts (V).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel appareil mesure l'intensité et comment se branche-t-il ?",
      reponse: "L'ampèremètre, branché en série dans le circuit.",
      explication: "À ne pas confondre avec le voltmètre, qui se branche en dérivation.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un circuit série à deux lampes, si l'une des lampes grille :",
      choix: [
        "seule cette lampe s'éteint, l'autre continue",
        "les deux lampes s'éteignent, le circuit est interrompu",
        "les deux lampes brillent plus fort",
        "rien ne change",
      ],
      bonneReponse: 1,
      explication: "Un circuit série n'offre qu'un seul chemin : la moindre coupure arrête tout le circuit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un circuit en dérivation, U1 = U2 = 4,5 V. Que peux-tu dire de la tension du générateur ?",
      reponse: "Elle vaut aussi 4,5 V, car dans un circuit en dérivation, la tension est la même dans chaque branche que celle du générateur.",
      explication: "C'est la loi d'unicité de la tension dans un circuit en dérivation.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi un court-circuit provoque-t-il un échauffement dangereux ?",
      reponse: "Parce que l'intensité devient très grande, rien ne la limitant, ce qui dégage beaucoup de chaleur dans les fils.",
      explication: "C'est pourquoi les installations électriques sont protégées par des fusibles ou des disjoncteurs.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Intensité et tension électriques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel appareil mesure une tension électrique ?",
          choix: ["L'ampèremètre", "Le voltmètre", "Le thermomètre", "Le baromètre"],
          bonneReponse: 1,
          explication: "Le voltmètre mesure la tension U, en volts, branché en dérivation.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne l'unité de l'intensité et l'unité de la tension, avec leurs symboles.",
          reponse: "Intensité : ampère (A). Tension : volt (V).",
          explication: "I se mesure en ampères, U se mesure en volts.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans un circuit série, la loi d'additivité concerne :",
          choix: ["l'intensité", "la tension", "la résistance", "la puissance"],
          bonneReponse: 1,
          explication: "Dans un circuit série, ce sont les tensions qui s'additionnent (U = U1 + U2), tandis que l'intensité est unique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un circuit série comporte deux lampes. La tension du générateur est 9 V, la tension aux bornes de la première lampe est 3,5 V. Quelle est la tension aux bornes de la deuxième lampe ?",
          reponse: "U2 = U − U1 = 9 − 3,5 = 5,5 V",
          explication: "D'après la loi d'additivité des tensions, U = U1 + U2, donc U2 = U − U1.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique la différence entre les lois de l'intensité et de la tension dans un circuit série et dans un circuit en dérivation.",
          reponse:
            "Circuit série : l'intensité est unique (I = I1 = I2) et les tensions s'additionnent (U = U1 + U2). Circuit en dérivation : la tension est unique dans chaque branche (U = U1 = U2) et les intensités s'additionnent (I = I1 + I2).",
          explication: "Ces deux couples de lois sont symétriques : ce qui est unique dans un montage devient additif dans l'autre.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi ne faut-il jamais brancher un ampèremètre en dérivation dans un circuit ?",
          choix: [
            "Cela ne mesure rien du tout",
            "Cela risque de provoquer un courant très intense et d'endommager l'appareil",
            "Cela n'a aucune conséquence",
            "Cela mesure une tension au lieu d'une intensité",
          ],
          bonneReponse: 1,
          explication: "Un ampèremètre a une résistance très faible ; branché en dérivation, il court-circuite le dipôle et laisse passer un courant très intense qui peut l'endommager.",
        },
      ],
    },
    {
      titre: "Examen 2 — Intensité et tension électriques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un ampèremètre se branche :",
          choix: ["en dérivation", "en série", "hors du circuit", "en parallèle de la pile uniquement"],
          bonneReponse: 1,
          explication: "L'ampèremètre se branche toujours en série, dans le chemin du courant.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un court-circuit ?",
          reponse: "Une liaison directe entre les deux bornes d'un générateur, sans récepteur pour limiter le courant.",
          explication: "Cela provoque une intensité très grande et dangereuse.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans un circuit en dérivation à deux branches, I1 = 0,5 A et I = 1,2 A (intensité totale). Quelle est l'intensité I2 ?",
          choix: ["0,5 A", "0,7 A", "1,2 A", "1,7 A"],
          bonneReponse: 1,
          explication: "I = I1 + I2, donc I2 = I − I1 = 1,2 − 0,5 = 0,7 A.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique comment tu procéderais pour mesurer la tension aux bornes d'une lampe dans un circuit.",
          reponse:
            "Je règle le multimètre en voltmètre, je choisis un calibre adapté, puis je branche les deux bornes du voltmètre directement aux deux bornes de la lampe (en dérivation), sans modifier le reste du circuit.",
          explication: "Le voltmètre ne doit jamais être inséré dans le circuit principal : il se pose « à côté », en dérivation.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un circuit série alimente trois lampes identiques avec un générateur de 6 V. Sachant que les trois lampes ont la même tension à leurs bornes, calcule la tension aux bornes d'une lampe.",
          reponse: "U = U1 + U2 + U3 et U1 = U2 = U3, donc U1 = 6 / 3 = 2 V.",
          explication: "La tension totale se répartit également entre des récepteurs identiques placés en série.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Que se passe-t-il si on ajoute une troisième branche à un circuit en dérivation, sans rien changer d'autre ?",
          choix: [
            "La tension dans chaque branche change forcément",
            "L'intensité totale délivrée par le générateur peut augmenter, car elle est la somme des intensités des branches",
            "L'intensité totale diminue obligatoirement",
            "Rien ne change jamais",
          ],
          bonneReponse: 1,
          explication: "Selon la loi d'additivité des intensités, ajouter une branche ajoute généralement une intensité supplémentaire à la somme totale, tandis que la tension de chaque branche reste égale à celle du générateur.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'intensité I (ampères, A) se mesure avec un ampèremètre branché EN SÉRIE.",
    "La tension U (volts, V) se mesure avec un voltmètre branché EN DÉRIVATION.",
    "Circuit série : loi d'unicité de l'intensité (I = I1 = I2) et loi d'additivité des tensions (U = U1 + U2).",
    "Circuit en dérivation : loi d'unicité de la tension (U = U1 = U2) et loi d'additivité des intensités (I = I1 + I2).",
    "Un court-circuit relie directement les bornes du générateur : l'intensité devient très grande, danger d'échauffement et d'incendie.",
    "Erreur classique à éviter : confondre les branchements — l'ampèremètre en série, le voltmètre en dérivation, jamais l'inverse.",
  ],
};

export default chapitre;
