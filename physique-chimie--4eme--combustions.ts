import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "combustions",
  titre: "Les combustions",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Comprendre ce qu'est une combustion, connaître les trois conditions nécessaires (combustible, comburant, source d'énergie), écrire les équations des combustions du carbone et du méthane, distinguer combustion complète et incomplète, et connaître les règles de sécurité incendie.",
  objectifs: [
    "Définir une combustion comme une transformation chimique entre un combustible et un comburant",
    "Connaître le triangle du feu : combustible, comburant, source d'énergie",
    "Écrire les équations des combustions du carbone et du méthane",
    "Distinguer combustion complète et combustion incomplète, et connaître le danger du monoxyde de carbone",
    "Savoir que la masse se conserve lors d'une combustion et connaître les règles de sécurité incendie",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une combustion ?",
      illustration: "🔥",
      visuel: "Combustible + Comburant → Produits + Énergie",
      contenu: [
        "Une combustion est une transformation chimique rapide qui dégage de la chaleur et souvent de la lumière",
        "Elle fait réagir un combustible (ce qui brûle) avec un comburant (ce qui permet de brûler)",
        "Le comburant le plus courant est le dioxygène de l'air",
        "Exemples : une bougie, un feu de bois, la flamme d'un briquet",
      ],
      voixOff:
        "Une combustion est une transformation chimique particulière : elle est rapide, dégage de la chaleur, et souvent de la lumière sous forme de flamme. Elle fait réagir deux réactifs bien identifiés : un combustible, c'est-à-dire ce qui brûle, et un comburant, c'est-à-dire ce qui permet la combustion. Le comburant le plus courant, présent dans l'air, est le dioxygène. Une bougie qui brûle, un feu de bois, la flamme d'un briquet sont tous des exemples de combustions.",
    },
    {
      titre: "Le triangle du feu",
      illustration: "🔺",
      visuel: "Combustible • Comburant • Énergie",
      contenu: [
        "Trois conditions sont nécessaires pour qu'une combustion démarre et se poursuive",
        "Un combustible (bois, gaz, essence...)",
        "Un comburant (le plus souvent le dioxygène de l'air)",
        "Une source d'énergie (étincelle, flamme, chaleur) pour démarrer la réaction",
      ],
      voixOff:
        "On représente souvent les trois conditions nécessaires à une combustion par un triangle, appelé le triangle du feu. Il faut d'abord un combustible, comme du bois, du gaz ou de l'essence. Il faut ensuite un comburant, le plus souvent le dioxygène présent dans l'air. Et il faut enfin une source d'énergie, comme une étincelle, une flamme ou de la chaleur, pour démarrer la réaction. Si l'un de ces trois éléments manque, la combustion ne peut pas avoir lieu, ou elle s'arrête.",
    },
    {
      titre: "La combustion du carbone",
      illustration: "⚫",
      visuel: "C + O2 → CO2",
      contenu: [
        "Le charbon (carbone) brûle dans le dioxygène de l'air",
        "Équation : carbone + dioxygène → dioxyde de carbone",
        "Formule chimique : C + O2 → CO2",
        "Le test à l'eau de chaux, qui se trouble, confirme la présence de dioxyde de carbone",
      ],
      voixOff:
        "Prenons l'exemple de la combustion du carbone, comme celle du charbon de bois. Le carbone réagit avec le dioxygène de l'air pour former du dioxyde de carbone. On écrit cette réaction : carbone plus dioxygène donnent dioxyde de carbone, ou en formules chimiques, C plus O deux donnent C O deux. On peut vérifier la présence de ce gaz en le faisant barboter dans de l'eau de chaux, qui se trouble et devient blanche laiteuse.",
    },
    {
      titre: "La combustion du méthane",
      illustration: "🔵",
      visuel: "CH4 + 2 O2 → CO2 + 2 H2O",
      contenu: [
        "Le méthane (gaz naturel, gaz de ville) brûle dans le dioxygène de l'air",
        "Équation : méthane + dioxygène → dioxyde de carbone + eau",
        "Formule chimique : CH4 + 2 O2 → CO2 + 2 H2O",
        "De la buée (eau) se forme sur une paroi froide au-dessus de la flamme",
      ],
      voixOff:
        "Autre exemple important : la combustion du méthane, le gaz naturel utilisé pour la cuisson et le chauffage. Le méthane réagit avec le dioxygène de l'air pour former du dioxyde de carbone et de l'eau. On écrit : méthane plus dioxygène donnent dioxyde de carbone plus eau, soit C H quatre plus deux O deux donnent C O deux plus deux H deux O. On peut observer la formation d'eau grâce à de la buée qui se dépose sur une paroi froide tenue au-dessus de la flamme.",
    },
    {
      titre: "Identifier les produits d'une combustion",
      illustration: "🔍",
      visuel: "Eau de chaux • Buée",
      contenu: [
        "Le dioxyde de carbone trouble l'eau de chaux",
        "L'eau forme de la buée sur une surface froide, et bleuit le sulfate de cuivre anhydre",
        "Ces tests permettent de vérifier la composition des produits formés",
        "Toute combustion d'un combustible carboné produit du dioxyde de carbone",
      ],
      voixOff:
        "Pour vérifier ce qui se forme au cours d'une combustion, on utilise les tests caractéristiques déjà connus. Le dioxyde de carbone trouble l'eau de chaux. L'eau forme de la buée sur une surface froide, et fait bleuir le sulfate de cuivre anhydre. Retiens que la combustion de tout combustible carboné, comme le bois, le charbon, le gaz ou l'essence, produit toujours du dioxyde de carbone.",
    },
    {
      titre: "Combustion complète et incomplète",
      illustration: "🌫️",
      visuel: "Assez d'O2 vs pas assez d'O2",
      contenu: [
        "Combustion complète : assez de dioxygène, flamme bleue, produit du CO2 (et de l'eau)",
        "Combustion incomplète : pas assez de dioxygène, flamme jaune-orangée, dépôt de suie (carbone non brûlé)",
        "Une combustion incomplète produit aussi du monoxyde de carbone (CO), un gaz toxique",
        "Le monoxyde de carbone est incolore, inodore et invisible : c'est un poison dangereux",
      ],
      voixOff:
        "Une combustion peut être complète ou incomplète, selon la quantité de dioxygène disponible. Une combustion complète, avec assez de dioxygène, donne une flamme bleue et produit du dioxyde de carbone. Une combustion incomplète, quand le dioxygène manque, donne une flamme jaune-orangée et forme un dépôt noir de suie, du carbone non brûlé. Elle produit aussi un gaz très dangereux : le monoxyde de carbone, de formule CO. Ce gaz est incolore, inodore et invisible, ce qui en fait un poison redoutable.",
    },
    {
      titre: "Le danger du monoxyde de carbone",
      illustration: "☠️",
      visuel: "CO : gaz mortel invisible",
      contenu: [
        "Le monoxyde de carbone (CO) empêche le sang de transporter correctement le dioxygène",
        "Il provoque des intoxications, parfois mortelles, en particulier en espace mal ventilé",
        "Cause fréquente : chauffage défectueux, appareil à gaz mal entretenu, groupe électrogène en intérieur",
        "Prévention : aérer régulièrement, entretenir les appareils, installer un détecteur de CO",
      ],
      voixOff:
        "Le monoxyde de carbone est particulièrement dangereux : il se fixe sur le sang à la place du dioxygène, empêchant celui-ci d'être correctement transporté dans le corps. Il provoque chaque année des intoxications, parfois mortelles, surtout dans des espaces mal ventilés. Les causes fréquentes sont un chauffage défectueux, un appareil à gaz mal entretenu, ou un groupe électrogène utilisé à l'intérieur. Pour se protéger, il faut aérer régulièrement son logement, faire entretenir ses appareils de chauffage, et installer un détecteur de monoxyde de carbone.",
    },
    {
      titre: "Conservation de la masse et sécurité incendie",
      illustration: "🧯",
      visuel: "masse conservée • éteindre un feu",
      contenu: [
        "La masse totale se conserve lors d'une combustion (loi de Lavoisier), même si les gaz produits sont invisibles",
        "Pour éteindre un feu, il faut supprimer un des trois éléments du triangle du feu",
        "Étouffer les flammes (priver d'air), refroidir (eau) ou isoler le combustible",
        "Ne jamais éteindre un feu d'huile ou d'électricité avec de l'eau",
      ],
      voixOff:
        "Comme toute transformation chimique, une combustion respecte la loi de Lavoisier : la masse totale se conserve, même si l'on ne pèse pas les gaz invisibles qui se forment. Pour éteindre un feu, il suffit de supprimer l'un des trois éléments du triangle du feu : étouffer les flammes en les privant d'air, refroidir avec de l'eau, ou isoler le combustible. Attention cependant : il ne faut jamais éteindre un feu d'huile ou un feu d'origine électrique avec de l'eau, cela peut aggraver dangereusement l'incendie.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Combustion = transformation chimique entre un combustible et un comburant (souvent O2), avec une source d'énergie",
        "C + O2 → CO2 (carbone) ; CH4 + 2 O2 → CO2 + 2 H2O (méthane)",
        "Combustion incomplète (manque de dioxygène) : suie + monoxyde de carbone (CO), un gaz mortel",
        "La masse se conserve toujours ; pour éteindre un feu, on supprime un élément du triangle du feu",
      ],
      voixOff:
        "Résumons. Une combustion est une transformation chimique entre un combustible et un comburant, le plus souvent le dioxygène de l'air, déclenchée par une source d'énergie. Le carbone brûle selon C plus O deux donnent C O deux, et le méthane selon C H quatre plus deux O deux donnent C O deux plus deux H deux O. Attention à la combustion incomplète, qui se produit quand le dioxygène manque : elle forme de la suie et du monoxyde de carbone, un gaz mortel et invisible. Enfin, la masse se conserve toujours lors d'une combustion, et pour éteindre un feu, il suffit de supprimer l'un des trois éléments du triangle du feu.",
    },
  ],
  fiche: {
    intro:
      "Une combustion est une transformation chimique rapide entre un combustible et un comburant, qui dégage chaleur et souvent lumière. Elle produit du dioxyde de carbone (et de l'eau pour les combustibles hydrogénés), mais peut aussi former des produits dangereux si elle est incomplète.",
    sections: [
      {
        titre: "Le triangle du feu",
        points: [
          "Combustible : ce qui brûle (bois, gaz, essence...)",
          "Comburant : ce qui permet la combustion, le plus souvent le dioxygène de l'air",
          "Source d'énergie : étincelle, flamme, chaleur, nécessaire pour démarrer",
        ],
      },
      {
        titre: "Les équations de combustion à connaître",
        points: [
          "Carbone : C + O2 → CO2 (carbone + dioxygène → dioxyde de carbone)",
          "Méthane : CH4 + 2 O2 → CO2 + 2 H2O (méthane + dioxygène → dioxyde de carbone + eau)",
          "Tests : eau de chaux qui se trouble (CO2), buée et sulfate de cuivre qui bleuit (eau)",
        ],
      },
      {
        titre: "Combustion complète et incomplète",
        points: [
          "Complète (assez de O2) : flamme bleue, produit du CO2",
          "Incomplète (manque de O2) : flamme jaune-orangée, suie, et monoxyde de carbone (CO)",
          "CO : gaz incolore, inodore, très toxique, empêche le sang de transporter le dioxygène",
        ],
      },
      {
        titre: "Conservation de la masse et sécurité",
        points: [
          "La masse totale se conserve lors d'une combustion (loi de Lavoisier)",
          "Pour éteindre un feu : supprimer un élément du triangle du feu (étouffer, refroidir, isoler)",
          "Prévention CO : aérer, entretenir les appareils, installer un détecteur",
        ],
      },
    ],
    audio:
      "Fiche de révision : les combustions. Une combustion est une transformation chimique rapide, qui dégage de la chaleur et souvent de la lumière, entre un combustible et un comburant, le plus souvent le dioxygène de l'air. Trois conditions sont nécessaires : un combustible, un comburant, et une source d'énergie pour démarrer, c'est le triangle du feu. La combustion du carbone s'écrit C plus O deux donnent C O deux. La combustion du méthane s'écrit C H quatre plus deux O deux donnent C O deux plus deux H deux O. Une combustion complète, avec assez de dioxygène, donne une flamme bleue. Une combustion incomplète, quand le dioxygène manque, donne une flamme jaune-orangée, forme de la suie, et surtout du monoxyde de carbone, un gaz incolore, inodore et très toxique qui empêche le sang de transporter correctement le dioxygène. La masse totale se conserve toujours lors d'une combustion. Pour éteindre un feu, il suffit de supprimer l'un des trois éléments du triangle du feu : étouffer les flammes, les refroidir, ou isoler le combustible.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une combustion ?", verso: "Une transformation chimique rapide entre un combustible et un comburant, qui dégage chaleur et souvent lumière." },
    { recto: "Quels sont les trois éléments du triangle du feu ?", verso: "Combustible, comburant (souvent le dioxygène), source d'énergie (étincelle, flamme, chaleur)." },
    { recto: "Équation de la combustion du carbone ?", verso: "C + O2 → CO2 (carbone + dioxygène → dioxyde de carbone)." },
    { recto: "Équation de la combustion du méthane ?", verso: "CH4 + 2 O2 → CO2 + 2 H2O (méthane + dioxygène → dioxyde de carbone + eau)." },
    { recto: "Différence entre combustion complète et incomplète ?", verso: "Complète : assez de O2, flamme bleue, CO2. Incomplète : manque de O2, flamme jaune-orangée, suie et monoxyde de carbone (CO)." },
    { recto: "Pourquoi le monoxyde de carbone (CO) est-il dangereux ?", verso: "Il est incolore, inodore, invisible, et empêche le sang de transporter correctement le dioxygène : il peut être mortel." },
    { recto: "Comment éteindre un feu ?", verso: "En supprimant un des trois éléments du triangle du feu : étouffer (priver d'air), refroidir (eau), ou isoler le combustible." },
    { recto: "La masse se conserve-t-elle lors d'une combustion ?", verso: "Oui, toujours (loi de Lavoisier), même si des gaz invisibles sont produits." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une combustion nécessite obligatoirement :",
      choix: [
        "un combustible et un comburant",
        "seulement de l'eau",
        "seulement de l'électricité",
        "aucune condition particulière",
      ],
      bonneReponse: 0,
      explication: "Une combustion nécessite un combustible, un comburant et une source d'énergie pour démarrer (triangle du feu).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le comburant le plus courant ?",
      choix: ["l'azote", "le dioxygène", "le dioxyde de carbone", "l'eau"],
      bonneReponse: 1,
      explication: "Le dioxygène de l'air est le comburant le plus courant dans les combustions.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les trois éléments du triangle du feu.",
      reponse: "Le combustible, le comburant, et la source d'énergie.",
      explication: "Si l'un des trois manque, la combustion ne peut pas démarrer ou s'arrête.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La combustion du carbone dans le dioxygène produit :",
      choix: ["du dihydrogène", "du dioxyde de carbone", "de l'azote", "du méthane"],
      bonneReponse: 1,
      explication: "C + O2 → CO2 : la combustion du carbone produit du dioxyde de carbone.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris l'équation de la combustion du méthane dans le dioxygène.",
      reponse: "CH4 + 2 O2 → CO2 + 2 H2O",
      explication: "Le méthane brûle dans le dioxygène pour former du dioxyde de carbone et de l'eau.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une flamme jaune-orangée qui dépose de la suie indique :",
      choix: [
        "une combustion complète",
        "une combustion incomplète, par manque de dioxygène",
        "l'absence de toute combustion",
        "une combustion sans combustible",
      ],
      bonneReponse: 1,
      explication: "Une combustion incomplète, due à un manque de dioxygène, donne une flamme jaune-orangée et dépose de la suie (carbone non brûlé).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel test permet de vérifier la présence de dioxyde de carbone parmi les produits d'une combustion ?",
      reponse: "Le test à l'eau de chaux : elle se trouble et devient blanche laiteuse en présence de dioxyde de carbone.",
      explication: "C'est le test caractéristique du dioxyde de carbone, à connaître par cœur.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pourquoi le monoxyde de carbone (CO) est-il particulièrement dangereux ?",
      choix: [
        "Il a une odeur très forte qui prévient du danger",
        "Il est incolore et inodore, donc impossible à détecter sans appareil",
        "Il n'est dangereux qu'en très grande quantité",
        "Il n'est pas toxique pour l'être humain",
      ],
      bonneReponse: 1,
      explication: "Le CO est incolore et inodore : on ne peut pas le détecter sans détecteur spécifique, ce qui le rend très dangereux.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "On brûle 3 g de carbone dans du dioxygène en excès et on obtient 11 g de dioxyde de carbone. Quelle masse de dioxygène a été consommée ?",
      reponse: "Masse de dioxygène = masse de CO2 − masse de carbone = 11 − 3 = 8 g.",
      explication: "La masse se conserve : masse des réactifs (carbone + dioxygène) = masse des produits (dioxyde de carbone).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi il ne faut jamais utiliser un groupe électrogène ou un barbecue à l'intérieur d'un logement fermé.",
      reponse:
        "Ces appareils fonctionnent grâce à une combustion qui peut devenir incomplète si l'espace n'est pas assez ventilé (manque de dioxygène). Cela produit du monoxyde de carbone, un gaz incolore, inodore et très toxique, qui peut provoquer une intoxication mortelle dans un espace fermé mal aéré.",
      explication: "Le manque de ventilation limite l'apport en dioxygène, favorisant une combustion incomplète et la production de CO.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pour éteindre un feu de casserole d'huile enflammée, la bonne méthode est :",
      choix: [
        "verser de l'eau dessus",
        "poser un couvercle sur la casserole pour étouffer les flammes",
        "souffler très fort dessus",
        "ajouter de l'essence",
      ],
      bonneReponse: 1,
      explication: "Un couvercle prive le feu de dioxygène (comburant) et l'éteint. L'eau est à proscrire sur un feu d'huile : elle provoque une projection violente et dangereuse.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "On réalise la combustion complète de 16 g de méthane dans du dioxygène en excès. Sachant que l'équation est CH4 + 2 O2 → CO2 + 2 H2O et que l'on obtient 44 g de CO2 et 36 g de H2O, calcule la masse de dioxygène consommée. Vérifie la conservation de la masse.",
      reponse:
        "Masse de dioxygène = masse des produits − masse de méthane = (44 + 36) − 16 = 80 − 16 = 64 g. Vérification : masse des réactifs = 16 + 64 = 80 g = masse des produits (44 + 36 = 80 g). La masse est bien conservée.",
      explication: "On applique la loi de Lavoisier : la masse totale des réactifs est égale à la masse totale des produits.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le triangle du feu regroupe :",
      choix: [
        "combustible, comburant, source d'énergie",
        "eau, air, terre",
        "carbone, hydrogène, oxygène",
        "flamme, fumée, cendre",
      ],
      bonneReponse: 0,
      explication: "Ces trois éléments sont nécessaires pour qu'une combustion démarre et se poursuive.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel gaz produit toujours la combustion d'un combustible carboné ?",
      reponse: "Du dioxyde de carbone (CO2).",
      explication: "Le carbone du combustible se combine au dioxygène de l'air pour former du dioxyde de carbone.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence de couleur de flamme entre une combustion complète et une combustion incomplète ?",
      reponse: "Complète : flamme bleue. Incomplète : flamme jaune-orangée, avec dépôt de suie.",
      explication: "La couleur de la flamme renseigne sur la quantité de dioxygène disponible pour la combustion.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le monoxyde de carbone (CO) est dangereux car il :",
      choix: [
        "a une odeur très reconnaissable",
        "empêche le sang de transporter correctement le dioxygène",
        "n'est produit que par les volcans",
        "n'a aucun effet sur la santé",
      ],
      bonneReponse: 1,
      explication: "Le CO se fixe à la place du dioxygène dans le sang, provoquant une intoxication pouvant être mortelle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite un moyen d'éteindre un feu en agissant sur le triangle du feu.",
      reponse: "Étouffer les flammes pour supprimer le comburant (dioxygène), par exemple avec un couvercle ou une couverture anti-feu.",
      explication: "On peut aussi refroidir avec de l'eau (sauf sur feu d'huile ou électrique) ou isoler le combustible.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les combustions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le comburant d'une combustion est le plus souvent :",
          choix: ["le dioxyde de carbone", "le dioxygène", "l'azote", "le méthane"],
          bonneReponse: 1,
          explication: "Le dioxygène de l'air est le comburant le plus courant.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne l'équation de la combustion du carbone dans le dioxygène.",
          reponse: "C + O2 → CO2",
          explication: "Le carbone réagit avec le dioxygène pour former du dioxyde de carbone.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une combustion incomplète se produit lorsque :",
          choix: [
            "il y a trop de dioxygène",
            "il n'y a pas assez de dioxygène",
            "il n'y a pas de combustible",
            "la température est trop basse pour démarrer",
          ],
          bonneReponse: 1,
          explication: "Le manque de dioxygène empêche une combustion complète, produisant suie et monoxyde de carbone.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quels sont les deux produits formés par la combustion complète du méthane ? Écris l'équation.",
          reponse: "Le dioxyde de carbone et l'eau. Équation : CH4 + 2 O2 → CO2 + 2 H2O",
          explication: "Le méthane contient du carbone et de l'hydrogène, d'où la formation de CO2 et de H2O.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On brûle 8 g de méthane dans du dioxygène en excès. On obtient 22 g de dioxyde de carbone et 18 g d'eau. Calcule la masse de dioxygène consommée, en utilisant la conservation de la masse.",
          reponse: "Masse de dioxygène = (22 + 18) − 8 = 40 − 8 = 32 g.",
          explication: "La masse totale des réactifs (méthane + dioxygène) est égale à la masse totale des produits (dioxyde de carbone + eau).",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi faut-il installer un détecteur de monoxyde de carbone chez soi ?",
          choix: [
            "Parce que le CO a une odeur très forte qu'il faut confirmer",
            "Parce que le CO est incolore et inodore, donc indétectable par les sens humains",
            "Parce que le CO n'est dangereux qu'en très petite quantité",
            "Ce n'est pas utile si on ne possède pas de cheminée",
          ],
          bonneReponse: 1,
          explication: "Le CO ne peut pas être détecté par l'odorat ou la vue : seul un détecteur spécifique permet de repérer sa présence.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les combustions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quels sont les trois éléments nécessaires à une combustion ?",
          choix: [
            "combustible, comburant, source d'énergie",
            "eau, sel, sucre",
            "carbone, azote, hydrogène",
            "chaleur, froid, lumière",
          ],
          bonneReponse: 0,
          explication: "C'est le triangle du feu : combustible, comburant, source d'énergie.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel test permet de vérifier la présence d'eau formée lors d'une combustion ?",
          reponse: "On approche une paroi froide de la flamme : de la buée s'y dépose. On peut aussi utiliser du sulfate de cuivre anhydre, qui bleuit au contact de l'eau.",
          explication: "Ces deux tests confirment la présence d'eau parmi les produits d'une combustion.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une flamme bleue, sans suie, indique en général :",
          choix: [
            "une combustion incomplète",
            "une combustion complète, avec assez de dioxygène",
            "l'absence de combustion",
            "la présence de monoxyde de carbone uniquement",
          ],
          bonneReponse: 1,
          explication: "Une flamme bleue est le signe d'une combustion complète, avec un apport suffisant de dioxygène.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi il ne faut jamais utiliser de l'eau pour éteindre un feu d'origine électrique.",
          reponse:
            "L'eau est conductrice de l'électricité : l'utiliser sur un feu électrique risque de provoquer une électrocution de la personne qui tente d'éteindre le feu, et peut aggraver l'incendie.",
          explication: "Pour un feu électrique, il faut d'abord couper le courant, puis utiliser un extincteur adapté (jamais à eau).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On réalise la combustion de 6 g de carbone dans 16 g de dioxygène ; tout est consommé. Quelle masse de dioxyde de carbone obtient-on ? Justifie avec la loi de conservation de la masse.",
          reponse: "22 g de CO2, car la masse se conserve : masse des produits = masse des réactifs = 6 + 16 = 22 g.",
          explication: "C'est une application directe de la loi de Lavoisier à la combustion du carbone.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Un radiateur à gaz mal entretenu, utilisé dans une pièce mal ventilée, présente un risque de :",
          choix: [
            "combustion complète uniquement, sans danger",
            "production de monoxyde de carbone par combustion incomplète",
            "absence totale de combustion",
            "production exclusive de dioxygène",
          ],
          bonneReponse: 1,
          explication: "Un mauvais entretien et un manque de ventilation favorisent une combustion incomplète, dangereuse car elle produit du monoxyde de carbone.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une combustion est une transformation chimique rapide entre un combustible et un comburant (souvent le dioxygène), déclenchée par une source d'énergie : c'est le triangle du feu.",
    "Combustion du carbone : C + O2 → CO2. Combustion du méthane : CH4 + 2 O2 → CO2 + 2 H2O.",
    "Combustion complète (assez de O2) : flamme bleue. Combustion incomplète (manque de O2) : flamme jaune-orangée, suie, et monoxyde de carbone (CO).",
    "Le monoxyde de carbone (CO) est incolore, inodore et très toxique : il empêche le sang de transporter correctement le dioxygène.",
    "La masse totale se conserve toujours lors d'une combustion (loi de Lavoisier).",
    "Pour éteindre un feu, on supprime un élément du triangle du feu ; jamais d'eau sur un feu d'huile ou d'origine électrique.",
  ],
};

export default chapitre;
