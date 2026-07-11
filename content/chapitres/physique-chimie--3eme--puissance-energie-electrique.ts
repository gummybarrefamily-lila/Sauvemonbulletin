import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "puissance-energie-electrique",
  titre: "Puissance et énergie électriques",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Comprendre la puissance électrique d'un appareil, utiliser la relation P = U × I, calculer une énergie électrique consommée avec E = P × t, et savoir lire une facture d'électricité.",
  objectifs: [
    "Connaître et utiliser la relation P = U × I",
    "Distinguer puissance (en watts) et énergie électrique (en joules ou kWh)",
    "Connaître et utiliser la relation E = P × t",
    "Convertir entre joules et kilowattheures (kWh)",
    "Comprendre l'effet Joule et savoir lire une facture d'électricité",
  ],
  slides: [
    {
      titre: "Qu'est-ce que la puissance électrique ?",
      illustration: "💡",
      visuel: "P en watts (W)",
      contenu: [
        "La puissance électrique, notée P, mesure l'énergie électrique consommée par seconde",
        "Unité : le watt (W), ou le kilowatt (kW) pour les grandes puissances",
        "Elle est indiquée sur les appareils (ex. ampoule 60 W, four 2000 W)",
        "Plus la puissance est grande, plus l'appareil consomme vite de l'énergie",
      ],
      voixOff:
        "La puissance électrique, notée P, indique quelle quantité d'énergie électrique un appareil consomme chaque seconde. Elle s'exprime en watts, ou en kilowatts pour les appareils plus puissants. Cette valeur est généralement indiquée sur l'appareil lui-même : une ampoule de soixante watts, un four de deux mille watts. Plus la puissance est élevée, plus l'appareil consomme rapidement de l'énergie.",
    },
    {
      titre: "La relation P = U × I",
      illustration: "🧮",
      visuel: "P = U × I",
      contenu: [
        "P : puissance électrique en watts (W)",
        "U : tension aux bornes de l'appareil, en volts (V)",
        "I : intensité du courant qui le traverse, en ampères (A)",
        "Formules dérivées : U = P ÷ I et I = P ÷ U",
      ],
      voixOff:
        "La puissance électrique se calcule avec la relation P égale U fois I. P est la puissance en watts, U la tension en volts, et I l'intensité en ampères. On peut retourner cette formule : U égale P divisé par I, et I égale P divisé par U, selon la grandeur que l'on cherche.",
    },
    {
      titre: "Exemple de calcul de puissance",
      illustration: "🔌",
      visuel: "U = 230 V, I = 4 A → P = 920 W",
      contenu: [
        "Un appareil est branché sous une tension U = 230 V (tension du secteur en France)",
        "Il est traversé par un courant I = 4 A",
        "P = U × I = 230 × 4 = 920 W",
        "C'est la puissance typique d'un petit four ou d'un aspirateur",
      ],
      voixOff:
        "Prenons un appareil branché sous la tension du secteur français, deux cent trente volts, et traversé par un courant de quatre ampères. Sa puissance vaut P égale U fois I, soit deux cent trente fois quatre, c'est-à-dire neuf cent vingt watts. C'est à peu près la puissance d'un petit four ou d'un aspirateur.",
    },
    {
      titre: "L'énergie électrique",
      illustration: "⚡",
      visuel: "E en joules (J)",
      contenu: [
        "L'énergie électrique, notée E, mesure la quantité totale d'électricité consommée",
        "Elle dépend de la puissance de l'appareil ET de la durée d'utilisation",
        "Unité légale : le joule (J)",
        "Unité pratique utilisée sur les factures : le kilowattheure (kWh)",
      ],
      voixOff:
        "Contrairement à la puissance, qui mesure une consommation instantanée, l'énergie électrique, notée E, mesure la quantité totale d'électricité consommée sur une durée donnée. Elle dépend à la fois de la puissance de l'appareil et du temps pendant lequel il fonctionne. Son unité légale est le joule, mais sur les factures, on utilise plutôt le kilowattheure.",
    },
    {
      titre: "La relation E = P × t",
      illustration: "⏳",
      visuel: "E = P × t",
      contenu: [
        "E : énergie électrique en joules (J)",
        "P : puissance en watts (W)",
        "t : durée de fonctionnement en secondes (s)",
        "Attention aux unités : bien convertir minutes et heures en secondes !",
      ],
      voixOff:
        "L'énergie électrique consommée se calcule avec E égale P fois t. E est en joules, P en watts, et t est la durée de fonctionnement en secondes. Attention, c'est un piège classique : si la durée est donnée en minutes ou en heures, il faut impérativement la convertir en secondes avant de calculer.",
    },
    {
      titre: "Le kilowattheure (kWh)",
      illustration: "🏠",
      visuel: "1 kWh = 1000 W pendant 1 heure",
      contenu: [
        "Le kilowattheure est l'énergie consommée par un appareil de 1000 W pendant 1 heure",
        "1 kWh = 3 600 000 J = 3,6 × 10⁶ J",
        "C'est l'unité utilisée par les fournisseurs d'électricité pour facturer",
        "Exemple : un radiateur de 1000 W allumé 3 h consomme 3 kWh",
      ],
      voixOff:
        "Dans la vie courante, on utilise le kilowattheure, noté kWh, qui correspond à l'énergie consommée par un appareil de mille watts pendant une heure. Cela équivaut à trois millions six cent mille joules. C'est cette unité que les fournisseurs d'électricité utilisent pour facturer notre consommation. Par exemple, un radiateur de mille watts allumé pendant trois heures consomme trois kilowattheures.",
    },
    {
      titre: "L'effet Joule",
      illustration: "🔥",
      visuel: "Courant électrique → chaleur",
      contenu: [
        "Le passage du courant dans un conducteur produit toujours de la chaleur",
        "C'est l'effet Joule, dû à la résistance électrique du conducteur",
        "Utile dans certains appareils : radiateur, grille-pain, fer à repasser",
        "Gênant dans d'autres cas : échauffement des fils, pertes d'énergie",
      ],
      voixOff:
        "Chaque fois qu'un courant électrique traverse un conducteur, une partie de l'énergie électrique se transforme en chaleur : c'est l'effet Joule, lié à la résistance du conducteur. Cet effet est recherché dans des appareils comme les radiateurs, les grille-pain ou les fers à repasser. Mais il peut aussi être gênant, en provoquant l'échauffement des fils électriques et des pertes d'énergie.",
    },
    {
      titre: "Lire une facture d'électricité",
      illustration: "🧾",
      visuel: "Consommation (kWh) × prix du kWh = montant",
      contenu: [
        "La facture indique la consommation en kilowattheures (kWh) sur la période",
        "Le montant à payer = consommation (kWh) × prix du kWh",
        "Éteindre les appareils en veille et privilégier les appareils économes réduit la facture",
        "Un appareil plus puissant ou utilisé plus longtemps consomme plus d'énergie",
      ],
      voixOff:
        "Sur une facture d'électricité, on retrouve la consommation totale en kilowattheures sur la période concernée. Le montant à payer s'obtient en multipliant cette consommation par le prix du kilowattheure. Pour réduire sa facture, on peut éteindre les appareils en veille et choisir des appareils économes : un appareil plus puissant, ou utilisé plus longtemps, consomme toujours plus d'énergie.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Puissance : P = U × I, en watts (W)",
        "Énergie : E = P × t, en joules (J) si t en secondes",
        "1 kWh = 3 600 000 J, unité pratique pour les factures",
        "L'effet Joule transforme une partie de l'énergie électrique en chaleur",
      ],
      voixOff:
        "Résumons. La puissance électrique se calcule avec P égale U fois I, en watts. L'énergie électrique consommée se calcule avec E égale P fois t, en joules si le temps est en secondes. Un kilowattheure vaut trois millions six cent mille joules : c'est l'unité pratique utilisée sur les factures. Et l'effet Joule transforme toujours une partie de l'énergie électrique en chaleur lors du passage du courant. Tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "La puissance électrique P (en watts) mesure l'énergie consommée par seconde par un appareil. L'énergie électrique E (en joules ou kWh) dépend de la puissance et de la durée d'utilisation.",
    sections: [
      {
        titre: "La puissance électrique",
        points: [
          "Notée P, unité : le watt (W)",
          "P = U × I, avec U en volts et I en ampères",
          "Indiquée sur les appareils électriques",
        ],
      },
      {
        titre: "L'énergie électrique",
        points: [
          "Notée E, unité légale : le joule (J)",
          "E = P × t, avec P en watts et t en secondes",
          "Dépend à la fois de la puissance et de la durée d'utilisation",
        ],
      },
      {
        titre: "Le kilowattheure",
        points: [
          "1 kWh = énergie consommée par un appareil de 1000 W pendant 1 h",
          "1 kWh = 3 600 000 J",
          "Unité utilisée sur les factures d'électricité",
        ],
      },
      {
        titre: "Effet Joule et facture",
        points: [
          "Le passage du courant produit toujours de la chaleur (effet Joule)",
          "Utile (radiateur, grille-pain) ou gênant (pertes, échauffement des fils)",
          "Montant facture = consommation (kWh) × prix du kWh",
        ],
      },
    ],
    audio:
      "Fiche de révision : puissance et énergie électriques. La puissance électrique, notée P, indique l'énergie consommée chaque seconde par un appareil ; elle s'exprime en watts et se calcule avec la formule P égale U fois I, où U est la tension en volts et I l'intensité en ampères. L'énergie électrique, notée E, dépend à la fois de la puissance de l'appareil et de la durée de son utilisation : elle se calcule avec E égale P fois t, en joules si le temps est exprimé en secondes. Dans la vie courante, on utilise plutôt le kilowattheure, qui correspond à l'énergie consommée par un appareil de mille watts pendant une heure, soit trois millions six cent mille joules ; c'est cette unité qui figure sur les factures d'électricité. Le passage du courant électrique dans un conducteur produit toujours de la chaleur : c'est l'effet Joule, exploité dans les radiateurs ou les grille-pain, mais responsable aussi de pertes d'énergie dans les fils électriques.",
  },
  memoCards: [
    { recto: "Formule de la puissance électrique ?", verso: "P = U × I, avec P en watts, U en volts, I en ampères." },
    { recto: "Formule de l'énergie électrique ?", verso: "E = P × t, avec E en joules, P en watts, t en secondes." },
    { recto: "Que vaut 1 kWh en joules ?", verso: "1 kWh = 3 600 000 J (énergie d'un appareil de 1000 W pendant 1 h)." },
    { recto: "Qu'est-ce que l'effet Joule ?", verso: "La transformation d'une partie de l'énergie électrique en chaleur lors du passage du courant dans un conducteur." },
    { recto: "Différence entre puissance et énergie ?", verso: "La puissance (W) est une consommation instantanée ; l'énergie (J ou kWh) dépend en plus de la durée d'utilisation." },
    { recto: "Comment calculer le montant d'une facture d'électricité ?", verso: "Montant = consommation en kWh × prix du kWh." },
    { recto: "Puissance d'un appareil sous 230 V traversé par 2 A ?", verso: "P = U × I = 230 × 2 = 460 W." },
    { recto: "Énergie consommée par une ampoule de 60 W allumée 2 heures (en Wh puis J) ?", verso: "E = 60 × 2 = 120 Wh = 0,12 kWh = 432 000 J." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quelle unité s'exprime la puissance électrique ?",
      choix: ["Le joule (J)", "Le watt (W)", "L'ampère (A)", "Le volt (V)"],
      bonneReponse: 1,
      explication: "La puissance électrique s'exprime en watts (W).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La formule de la puissance électrique est :",
      choix: ["P = U + I", "P = U × I", "P = U ÷ I", "P = U − I"],
      bonneReponse: 1,
      explication: "P = U × I, avec P en watts, U en volts, I en ampères.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un appareil est sous une tension U = 230 V et traversé par un courant I = 2 A. Calcule sa puissance.",
      reponse: "P = U × I = 230 × 2 = 460 W",
      explication: "Application directe de P = U × I.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le kilowattheure (kWh) est une unité :",
      choix: ["de puissance", "d'énergie", "de tension", "d'intensité"],
      bonneReponse: 1,
      explication: "Le kilowattheure est une unité pratique d'énergie, utilisée notamment sur les factures.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une bouilloire de puissance P = 2000 W fonctionne pendant t = 180 s. Calcule l'énergie électrique consommée en joules.",
      reponse: "E = P × t = 2000 × 180 = 360 000 J",
      explication: "On applique E = P × t avec le temps déjà en secondes.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un radiateur de 1000 W fonctionne pendant 2 heures. Son énergie consommée, en kWh, vaut :",
      choix: ["0,5 kWh", "2 kWh", "500 kWh", "1000 kWh"],
      bonneReponse: 1,
      explication: "1000 W = 1 kW ; sur 2 heures, l'énergie consommée est 1 kW × 2 h = 2 kWh.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un appareil a une puissance de 800 W et fonctionne pendant 30 minutes. Calcule l'énergie consommée en joules (convertis d'abord le temps en secondes).",
      reponse: "t = 30 × 60 = 1800 s. E = P × t = 800 × 1800 = 1 440 000 J",
      explication: "Il faut convertir les minutes en secondes avant d'appliquer E = P × t.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un appareil a une puissance P = 460 W sous une tension U = 230 V. Quelle est l'intensité du courant ?",
      choix: ["2 A", "0,5 A", "690 A", "230 A"],
      bonneReponse: 0,
      explication: "I = P ÷ U = 460 ÷ 230 = 2 A.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un four électrique de puissance 2500 W fonctionne pendant 45 minutes. Calcule l'énergie consommée en kWh, puis le coût de cette utilisation si le kWh coûte 0,20 €.",
      reponse:
        "45 min = 0,75 h. E = P × t = 2,5 kW × 0,75 h = 1,875 kWh. Coût = 1,875 × 0,20 = 0,375 €, soit environ 0,38 €.",
      explication: "Pour calculer une énergie en kWh, on peut directement multiplier la puissance en kW par la durée en heures.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une ampoule LED de 8 W et une ampoule à incandescence de 60 W éclairent chacune pendant 5 heures. Compare leurs énergies consommées en Wh et explique l'intérêt des LED.",
      reponse:
        "LED : E = 8 × 5 = 40 Wh. Incandescence : E = 60 × 5 = 300 Wh. L'ampoule LED consomme 7,5 fois moins d'énergie pour un même éclairage : elle permet de réaliser des économies d'électricité importantes.",
      explication: "Pour un service rendu comparable, une puissance plus faible consomme moins d'énergie sur une même durée.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Deux appareils identiques fonctionnent, l'un pendant 1 heure, l'autre pendant 3 heures. Le second consomme :",
      choix: ["la même énergie que le premier", "3 fois plus d'énergie que le premier", "3 fois moins d'énergie que le premier", "une énergie non calculable"],
      bonneReponse: 1,
      explication: "E = P × t : à puissance égale, l'énergie consommée est proportionnelle à la durée de fonctionnement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique pourquoi un fil électrique parcouru par un courant trop intense peut chauffer dangereusement, en utilisant la notion d'effet Joule.",
      reponse:
        "Le passage du courant dans un fil, qui possède une résistance, transforme une partie de l'énergie électrique en chaleur (effet Joule). Plus l'intensité du courant est grande, plus cette chaleur produite est importante, ce qui peut échauffer dangereusement le fil et provoquer un incendie.",
      explication: "L'effet Joule est d'autant plus important que l'intensité du courant est élevée, d'où les précautions sur les intensités maximales admissibles dans les fils.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'énergie électrique se calcule avec la formule :",
      choix: ["E = P × t", "E = P ÷ t", "E = P + t", "E = U × I"],
      bonneReponse: 0,
      explication: "E = P × t, avec E en joules si P est en watts et t en secondes.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que vaut 1 kWh en joules ?",
      reponse: "1 kWh = 3 600 000 J",
      explication: "C'est l'énergie consommée par un appareil de 1000 W pendant 3600 secondes (1 heure).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un appareil de 1500 W fonctionne pendant 2 heures. Calcule son énergie consommée en kWh.",
      reponse: "E = 1,5 kW × 2 h = 3 kWh",
      explication: "En kW et heures, on obtient directement l'énergie en kWh.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "L'effet Joule correspond à :",
      choix: [
        "la production de lumière par un courant",
        "la transformation d'énergie électrique en chaleur",
        "la transformation de chaleur en électricité",
        "la disparition du courant électrique",
      ],
      bonneReponse: 1,
      explication: "L'effet Joule est le dégagement de chaleur dû au passage du courant dans un conducteur résistant.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un appareil a une puissance de 300 W sous une tension de 150 V. Calcule l'intensité du courant qui le traverse.",
      reponse: "I = P ÷ U = 300 ÷ 150 = 2 A",
      explication: "On isole I dans la formule P = U × I : I = P ÷ U.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Puissance et énergie électriques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La puissance électrique dépend de :",
          choix: ["la tension et l'intensité", "uniquement de la tension", "uniquement de l'intensité", "de la résistance seule"],
          bonneReponse: 0,
          explication: "P = U × I : la puissance dépend à la fois de la tension et de l'intensité.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un appareil est sous 230 V et traversé par 3 A. Calcule sa puissance.",
          reponse: "P = U × I = 230 × 3 = 690 W",
          explication: "Application directe de P = U × I.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un appareil de 500 W fonctionne pendant 4 heures. Son énergie consommée est :",
          choix: ["0,5 kWh", "2 kWh", "4 kWh", "500 kWh"],
          bonneReponse: 1,
          explication: "E = 0,5 kW × 4 h = 2 kWh.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un sèche-cheveux de puissance 1200 W fonctionne pendant 300 s. Calcule l'énergie consommée en joules.",
          reponse: "E = P × t = 1200 × 300 = 360 000 J",
          explication: "Application directe de E = P × t avec t en secondes.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre puissance et énergie électriques, avec leurs unités respectives.",
          reponse:
            "La puissance (en watts) mesure la consommation instantanée d'un appareil. L'énergie (en joules ou en kWh) mesure la quantité totale d'électricité consommée sur une durée donnée : elle dépend de la puissance ET du temps de fonctionnement.",
          explication: "La puissance est indépendante du temps ; l'énergie en tient compte via E = P × t.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un lave-linge de puissance 2000 W fonctionne 1 h 30 min. Calcule l'énergie consommée en kWh, puis son coût si le kWh coûte 0,25 €.",
          reponse:
            "1 h 30 = 1,5 h. E = 2 kW × 1,5 h = 3 kWh. Coût = 3 × 0,25 = 0,75 €.",
          explication: "On convertit la durée en heures puis on multiplie la puissance en kW par la durée en h pour obtenir l'énergie en kWh.",
        },
      ],
    },
    {
      titre: "Examen 2 — Puissance et énergie électriques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "1 kilowattheure (kWh) correspond à :",
          choix: [
            "l'énergie d'un appareil de 1 W pendant 1000 h",
            "l'énergie d'un appareil de 1000 W pendant 1 h",
            "une puissance de 1000 W",
            "une tension de 1000 V",
          ],
          bonneReponse: 1,
          explication: "1 kWh est l'énergie consommée par un appareil de 1000 W pendant 1 heure.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un appareil de puissance P = 100 W fonctionne pendant t = 10 s. Calcule l'énergie consommée en joules.",
          reponse: "E = P × t = 100 × 10 = 1000 J",
          explication: "Application directe de E = P × t.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un appareil a une puissance de 690 W sous une tension de 230 V. Quelle est l'intensité qui le traverse ?",
          choix: ["1,5 A", "3 A", "460 A", "0,33 A"],
          bonneReponse: 1,
          explication: "I = P ÷ U = 690 ÷ 230 = 3 A.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qu'est l'effet Joule et donne un exemple d'appareil qui l'exploite volontairement.",
          reponse:
            "L'effet Joule est la transformation d'une partie de l'énergie électrique en chaleur lors du passage d'un courant dans un conducteur résistant. Un radiateur électrique, un grille-pain ou un fer à repasser exploitent volontairement cet effet pour produire de la chaleur.",
          explication: "L'effet Joule est systématique dans tout conducteur parcouru par un courant ; certains appareils l'utilisent comme fonction principale.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une facture indique une consommation de 350 kWh sur deux mois, au prix de 0,22 € le kWh. Calcule le montant de la facture.",
          reponse: "Montant = 350 × 0,22 = 77 €",
          explication: "Montant = consommation (kWh) × prix du kWh.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un chauffe-eau de 2000 W fonctionne 2 h par jour. Calcule l'énergie consommée en une semaine (en kWh), puis convertis cette énergie en joules.",
          reponse:
            "Par jour : E = 2 kW × 2 h = 4 kWh. Sur une semaine (7 jours) : 4 × 7 = 28 kWh. En joules : 28 × 3 600 000 = 100 800 000 J.",
          explication: "On calcule d'abord l'énergie journalière, puis on multiplie par le nombre de jours, avant de convertir en joules avec 1 kWh = 3 600 000 J.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La puissance électrique P (en watts) se calcule avec P = U × I, avec U en volts et I en ampères.",
    "L'énergie électrique E (en joules) se calcule avec E = P × t, avec P en watts et t en secondes.",
    "1 kWh = 3 600 000 J : c'est l'énergie consommée par un appareil de 1000 W pendant 1 heure.",
    "Sur une facture, montant = consommation (kWh) × prix du kWh.",
    "L'effet Joule transforme une partie de l'énergie électrique en chaleur lors du passage du courant dans un conducteur.",
    "À puissance égale, l'énergie consommée augmente avec la durée d'utilisation ; à durée égale, elle augmente avec la puissance.",
  ],
};

export default chapitre;
