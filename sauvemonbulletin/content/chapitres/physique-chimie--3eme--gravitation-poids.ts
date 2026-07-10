import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "gravitation-poids",
  titre: "Gravitation, poids et masse",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Comprendre la gravitation universelle, distinguer la masse du poids, utiliser la relation P = m × g et savoir mener les calculs de poids attendus au brevet.",
  objectifs: [
    "Décrire qualitativement la gravitation universelle",
    "Distinguer la masse (en kg) du poids (en N)",
    "Connaître et utiliser la relation P = m × g",
    "Connaître g ≈ 9,8 N/kg sur Terre et g ≈ 1,6 N/kg sur la Lune",
    "Savoir mesurer un poids avec un dynamomètre et convertir les unités",
  ],
  slides: [
    {
      titre: "La gravitation universelle",
      illustration: "🌍",
      visuel: "Tout objet attire tout objet",
      contenu: [
        "Deux objets qui ont une masse s'attirent mutuellement",
        "C'est une attraction à distance, toujours présente",
        "Elle a été décrite par Isaac Newton au XVIIe siècle",
        "C'est elle qui te maintient au sol !",
      ],
      voixOff:
        "La gravitation universelle, c'est une idée simple et puissante décrite par Isaac Newton : deux objets qui possèdent une masse s'attirent toujours mutuellement, même à distance et sans se toucher. C'est cette attraction qui te maintient au sol, et qui fait tomber une pomme de l'arbre.",
    },
    {
      titre: "De quoi dépend cette attraction ?",
      illustration: "🧲",
      visuel: "Masses ↑ et distance ↓ → attraction ↑",
      contenu: [
        "L'attraction est d'autant plus forte que les masses sont grandes",
        "Elle est d'autant plus faible que la distance est grande",
        "Entre deux stylos, elle est trop faible pour être sentie",
        "Entre la Terre et toi, elle est bien réelle : c'est ton poids",
      ],
      voixOff:
        "L'attraction gravitationnelle dépend de deux choses. Plus les masses des objets sont grandes, plus l'attraction est forte. Et plus les objets sont éloignés, plus elle est faible. Entre deux stylos, elle existe mais elle est beaucoup trop faible pour être ressentie. Entre la Terre, énorme, et toi, elle est bien réelle : c'est ton poids.",
    },
    {
      titre: "La gravitation dans le système solaire",
      illustration: "🪐",
      visuel: "Soleil ⟲ planètes ⟲ satellites",
      contenu: [
        "La gravitation maintient les planètes en orbite autour du Soleil",
        "Elle maintient la Lune en orbite autour de la Terre",
        "Sans elle, chaque astre partirait en ligne droite",
        "Même principe pour les satellites artificiels",
      ],
      voixOff:
        "C'est la gravitation qui organise tout le système solaire. Elle maintient les planètes en orbite autour du Soleil, et la Lune en orbite autour de la Terre. Sans cette attraction, chaque astre partirait tout droit dans l'espace. Les satellites artificiels, comme ceux du GPS, obéissent exactement au même principe.",
    },
    {
      titre: "La masse",
      illustration: "⚖️",
      visuel: "m en kilogrammes (kg)",
      contenu: [
        "La masse mesure la quantité de matière d'un objet",
        "Unité : le kilogramme (kg)",
        "Instrument de mesure : la balance",
        "La masse ne change pas selon le lieu : 70 kg sur Terre = 70 kg sur la Lune",
      ],
      voixOff:
        "La masse, notée m, mesure la quantité de matière contenue dans un objet. Son unité est le kilogramme, et on la mesure avec une balance. Point essentiel : la masse ne dépend pas du lieu. Un astronaute de soixante-dix kilogrammes sur Terre a toujours une masse de soixante-dix kilogrammes sur la Lune.",
    },
    {
      titre: "Le poids",
      illustration: "🎯",
      visuel: "P en newtons (N)",
      contenu: [
        "Le poids est la force d'attraction exercée par la Terre sur un objet",
        "Unité : le newton (N)",
        "Instrument de mesure : le dynamomètre",
        "Direction verticale, sens vers le bas (vers le centre de la Terre)",
      ],
      voixOff:
        "Le poids, noté P, est la force d'attraction gravitationnelle exercée par la Terre sur un objet. Comme toutes les forces, il se mesure en newtons, avec un dynamomètre. Le poids a une direction verticale et il est dirigé vers le bas, c'est-à-dire vers le centre de la Terre. Contrairement à la masse, le poids dépend du lieu.",
    },
    {
      titre: "La relation P = m × g",
      illustration: "🧮",
      visuel: "P = m × g",
      contenu: [
        "P : poids en newtons (N)",
        "m : masse en kilogrammes (kg)",
        "g : intensité de la pesanteur en N/kg",
        "Formules dérivées : m = P ÷ g et g = P ÷ m",
      ],
      voixOff:
        "Le poids et la masse sont liés par la relation P égale m fois g. P est le poids en newtons, m la masse en kilogrammes, et g l'intensité de la pesanteur, en newtons par kilogramme. Cette formule se retourne facilement : m égale P divisé par g, et g égale P divisé par m. Vérifie toujours tes unités avant de calculer !",
    },
    {
      titre: "g sur Terre, g sur la Lune",
      illustration: "🌗",
      visuel: "g(Terre) ≈ 9,8 N/kg • g(Lune) ≈ 1,6 N/kg",
      contenu: [
        "Sur Terre : g ≈ 9,8 N/kg",
        "Sur la Lune : g ≈ 1,6 N/kg, environ 6 fois moins",
        "Le poids d'un objet est donc environ 6 fois plus faible sur la Lune",
        "Sa masse, elle, reste identique",
      ],
      voixOff:
        "L'intensité de la pesanteur g dépend de l'astre. Sur Terre, g vaut environ neuf virgule huit newtons par kilogramme. Sur la Lune, seulement un virgule six : environ six fois moins. Un objet pèse donc six fois moins sur la Lune que sur la Terre, alors que sa masse reste exactement la même. Voilà pourquoi les astronautes font des bonds immenses !",
    },
    {
      titre: "Exemple de calcul",
      illustration: "👨‍🚀",
      visuel: "50 kg → 490 N sur Terre, 80 N sur la Lune",
      contenu: [
        "Un élève a une masse m = 50 kg",
        "Sur Terre : P = m × g = 50 × 9,8 = 490 N",
        "Sur la Lune : P = 50 × 1,6 = 80 N",
        "La masse reste 50 kg dans les deux cas",
      ],
      voixOff:
        "Prenons un élève de cinquante kilogrammes. Sur Terre, son poids vaut P égale m fois g, soit cinquante fois neuf virgule huit, c'est-à-dire quatre cent quatre-vingt-dix newtons. Sur la Lune, cinquante fois un virgule six égale quatre-vingts newtons. Son poids a changé, mais sa masse est toujours de cinquante kilogrammes.",
    },
    {
      titre: "Ne confonds plus masse et poids !",
      illustration: "⚠️",
      visuel: "masse ≠ poids",
      contenu: [
        "Masse : quantité de matière, en kg, mesurée à la balance, invariable",
        "Poids : force d'attraction, en N, mesuré au dynamomètre, dépend du lieu",
        "Dans la vie courante, « peser 60 kilos » est un abus de langage",
        "En physique : m = 60 kg et P = 60 × 9,8 = 588 N sur Terre",
      ],
      voixOff:
        "C'est l'erreur la plus fréquente au brevet : confondre masse et poids. La masse est une quantité de matière, en kilogrammes, mesurée avec une balance, et elle ne change jamais. Le poids est une force, en newtons, mesurée avec un dynamomètre, et il dépend du lieu. Dire qu'on pèse soixante kilos est un abus de langage : en physique, la masse est de soixante kilogrammes et le poids vaut cinq cent quatre-vingt-huit newtons sur Terre.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Gravitation : attraction entre objets ayant une masse, dépend des masses et de la distance",
        "Masse en kg (invariable) ≠ poids en N (dépend du lieu)",
        "P = m × g, avec g ≈ 9,8 N/kg sur Terre et 1,6 N/kg sur la Lune",
        "Poids mesuré au dynamomètre, masse à la balance",
      ],
      voixOff:
        "Résumons. La gravitation est une attraction entre tous les objets qui ont une masse : elle augmente avec les masses et diminue avec la distance. La masse, en kilogrammes, ne change jamais ; le poids, en newtons, dépend du lieu. On les relie par P égale m fois g, avec g environ neuf virgule huit newtons par kilogramme sur Terre et un virgule six sur la Lune. Bravo, tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "La gravitation universelle est l'attraction entre tous les objets qui ont une masse. Le poids d'un objet est la force d'attraction que la Terre exerce sur lui : il se calcule avec P = m × g.",
    sections: [
      {
        titre: "La gravitation universelle",
        points: [
          "Deux objets qui ont une masse s'attirent mutuellement, à distance",
          "L'attraction est d'autant plus forte que les masses sont grandes et que la distance est petite",
          "Elle maintient les planètes en orbite autour du Soleil et la Lune autour de la Terre",
        ],
      },
      {
        titre: "La masse",
        points: [
          "Quantité de matière d'un objet, notée m",
          "Unité : le kilogramme (kg) ; instrument : la balance",
          "La masse ne dépend PAS du lieu (identique sur Terre et sur la Lune)",
        ],
      },
      {
        titre: "Le poids",
        points: [
          "Force d'attraction exercée par la Terre (ou un autre astre) sur un objet, notée P",
          "Unité : le newton (N) ; instrument : le dynamomètre",
          "Direction verticale, sens vers le bas (vers le centre de la Terre)",
          "Le poids DÉPEND du lieu",
        ],
      },
      {
        titre: "La relation P = m × g",
        points: [
          "P en newtons (N), m en kilogrammes (kg), g en N/kg",
          "Formules dérivées : m = P ÷ g et g = P ÷ m",
          "⚠️ Toujours convertir la masse en kg avant de calculer (500 g = 0,5 kg)",
        ],
      },
      {
        titre: "Valeurs de g à connaître",
        points: [
          "Sur Terre : g ≈ 9,8 N/kg",
          "Sur la Lune : g ≈ 1,6 N/kg (environ 6 fois moins)",
          "Exemple : m = 50 kg → P = 490 N sur Terre, P = 80 N sur la Lune",
        ],
      },
    ],
    audio:
      "Fiche de révision : gravitation, poids et masse. La gravitation universelle est une attraction entre tous les objets qui possèdent une masse : elle est d'autant plus forte que les masses sont grandes et que la distance est petite. C'est elle qui maintient les planètes en orbite autour du Soleil et la Lune autour de la Terre. Il ne faut pas confondre masse et poids. La masse mesure la quantité de matière : elle s'exprime en kilogrammes, se mesure avec une balance et ne dépend pas du lieu. Le poids est la force d'attraction exercée par la Terre sur un objet : il s'exprime en newtons, se mesure avec un dynamomètre et dépend du lieu. On les relie par la formule P égale m fois g, avec P en newtons, m en kilogrammes et g en newtons par kilogramme. Sur Terre, g vaut environ neuf virgule huit newtons par kilogramme ; sur la Lune, environ un virgule six, soit six fois moins. Ainsi, un élève de cinquante kilogrammes pèse quatre cent quatre-vingt-dix newtons sur Terre, mais seulement quatre-vingts newtons sur la Lune.",
  },
  memoCards: [
    { recto: "Qu'est-ce que la gravitation universelle ?", verso: "Une attraction mutuelle, à distance, entre tous les objets qui ont une masse." },
    { recto: "De quoi dépend l'attraction gravitationnelle ?", verso: "Des masses des deux objets (plus fortes = plus d'attraction) et de leur distance (plus loin = moins d'attraction)." },
    { recto: "Unité et instrument de mesure de la masse ?", verso: "Le kilogramme (kg), mesurée avec une balance. La masse ne dépend pas du lieu." },
    { recto: "Unité et instrument de mesure du poids ?", verso: "Le newton (N), mesuré avec un dynamomètre. Le poids dépend du lieu." },
    { recto: "Formule reliant poids et masse ?", verso: "P = m × g, avec P en N, m en kg et g en N/kg." },
    { recto: "Valeur de g sur Terre ?", verso: "g ≈ 9,8 N/kg" },
    { recto: "Valeur de g sur la Lune ?", verso: "g ≈ 1,6 N/kg, soit environ 6 fois moins que sur Terre." },
    { recto: "Poids d'un objet de 10 kg sur Terre ?", verso: "P = 10 × 9,8 = 98 N" },
    { recto: "Un astronaute va sur la Lune. Sa masse ? Son poids ?", verso: "Sa masse ne change pas ; son poids est divisé par environ 6." },
    { recto: "Comment retrouver m à partir de P ?", verso: "m = P ÷ g. Exemple : P = 49 N sur Terre → m = 49 ÷ 9,8 = 5 kg." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quelle unité s'exprime le poids ?",
      choix: ["Le kilogramme (kg)", "Le newton (N)", "Le gramme (g)", "Le N/kg"],
      bonneReponse: 1,
      explication: "Le poids est une force : il s'exprime en newtons (N). Le kilogramme est l'unité de la masse.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Avec quel instrument mesure-t-on un poids ?",
      choix: ["Une balance", "Un dynamomètre", "Un thermomètre", "Une éprouvette graduée"],
      bonneReponse: 1,
      explication: "Le dynamomètre mesure les forces, donc le poids. La balance mesure la masse.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule le poids sur Terre d'un objet de masse m = 2 kg (g = 9,8 N/kg).",
      reponse: "P = m × g = 2 × 9,8 = 19,6 N",
      explication: "On applique P = m × g avec la masse en kg : 2 × 9,8 = 19,6 N.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un astronaute quitte la Terre pour la Lune. Sa masse :",
      choix: ["diminue", "augmente", "reste identique", "devient nulle"],
      bonneReponse: 2,
      explication: "La masse est une quantité de matière : elle ne dépend pas du lieu. C'est le poids qui change.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le poids sur Terre d'une personne de masse 60 kg (g = 9,8 N/kg).",
      reponse: "P = 60 × 9,8 = 588 N",
      explication: "P = m × g = 60 × 9,8 = 588 N. Attention : on ne « pèse » pas 60 kg, on a une masse de 60 kg !",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Sur Terre (g = 9,8 N/kg), un objet a un poids de 49 N. Quelle est sa masse ?",
      choix: ["49 kg", "5 kg", "4,9 kg", "480,2 kg"],
      bonneReponse: 1,
      explication: "m = P ÷ g = 49 ÷ 9,8 = 5 kg.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une valise a une masse de 20 kg. Quel serait son poids sur la Lune (g = 1,6 N/kg) ?",
      reponse: "P = 20 × 1,6 = 32 N",
      explication: "On utilise la valeur de g de la Lune : P = m × g = 20 × 1,6 = 32 N.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un sac de farine de 500 g est posé sur Terre (g = 9,8 N/kg). Son poids vaut environ :",
      choix: ["4,9 N", "49 N", "500 N", "0,5 N"],
      bonneReponse: 0,
      explication: "Il faut d'abord convertir : 500 g = 0,5 kg. Puis P = 0,5 × 9,8 = 4,9 N.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un astronaute a une masse de 80 kg. Calcule son poids sur Terre (g = 9,8 N/kg) puis sur la Lune (g = 1,6 N/kg). Que remarques-tu ?",
      reponse:
        "Sur Terre : P = 80 × 9,8 = 784 N. Sur la Lune : P = 80 × 1,6 = 128 N. Le poids est environ 6 fois plus faible sur la Lune, mais la masse reste 80 kg.",
      explication: "784 ÷ 128 ≈ 6,1 : le rapport correspond au rapport des valeurs de g (9,8 ÷ 1,6 ≈ 6,1).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Sur la Lune (g = 1,6 N/kg), un équipement a un poids de 24 N. Calcule sa masse, puis son poids sur Terre (g = 9,8 N/kg).",
      reponse: "m = P ÷ g = 24 ÷ 1,6 = 15 kg. Sur Terre : P = 15 × 9,8 = 147 N.",
      explication: "La masse est la même partout (15 kg) ; on recalcule ensuite le poids avec le g terrestre.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Sur Mars, g ≈ 3,7 N/kg. Quel est le poids d'un rover de 900 kg sur Mars ?",
      choix: ["3 330 N", "8 820 N", "900 N", "243 N"],
      bonneReponse: 0,
      explication: "P = m × g = 900 × 3,7 = 3 330 N. (8 820 N serait son poids sur Terre.)",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la Lune reste en orbite autour de la Terre au lieu de partir tout droit dans l'espace.",
      reponse:
        "La Terre exerce sur la Lune une attraction gravitationnelle qui la dévie en permanence de sa trajectoire rectiligne : cette attraction la maintient sur une trajectoire quasi circulaire autour de la Terre.",
      explication: "Sans gravitation, la Lune poursuivrait un mouvement rectiligne ; l'attraction de la Terre courbe sans cesse sa trajectoire.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La masse se mesure avec :",
      choix: ["un dynamomètre", "une balance", "un voltmètre", "un chronomètre"],
      bonneReponse: 1,
      explication: "La balance mesure la masse (en kg) ; le dynamomètre mesure le poids (en N).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris la relation entre le poids, la masse et l'intensité de la pesanteur, avec les unités.",
      reponse: "P = m × g, avec P en newtons (N), m en kilogrammes (kg) et g en newtons par kilogramme (N/kg).",
      explication: "Formule centrale du chapitre, à connaître avec ses unités.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le poids sur Terre d'un cartable de 8 kg (g = 9,8 N/kg).",
      reponse: "P = 8 × 9,8 = 78,4 N",
      explication: "P = m × g avec m en kg.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le poids d'un objet sur la Lune est environ :",
      choix: ["6 fois plus grand que sur Terre", "identique à celui sur Terre", "6 fois plus petit que sur Terre", "nul"],
      bonneReponse: 2,
      explication: "g(Lune) ≈ 1,6 N/kg contre 9,8 N/kg sur Terre : le poids est environ 6 fois plus faible.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux différences entre la masse et le poids.",
      reponse:
        "La masse s'exprime en kg et ne dépend pas du lieu ; le poids s'exprime en N et dépend du lieu. (Aussi : balance pour la masse, dynamomètre pour le poids ; le poids est une force, pas la masse.)",
      explication: "C'est LA distinction à maîtriser pour le brevet.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Gravitation, poids et masse",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le poids d'un objet est :",
          choix: [
            "sa quantité de matière",
            "la force d'attraction exercée par la Terre sur lui",
            "son volume",
            "sa masse exprimée en newtons",
          ],
          bonneReponse: 1,
          explication: "Le poids est une force : l'attraction gravitationnelle exercée par la Terre (ou un autre astre) sur l'objet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule le poids sur Terre d'un élève de masse 45 kg (g = 9,8 N/kg).",
          reponse: "P = m × g = 45 × 9,8 = 441 N",
          explication: "On applique directement la formule avec la masse en kg.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Sur Terre, un objet a un poids de 98 N (g = 9,8 N/kg). Calcule sa masse.",
          reponse: "m = P ÷ g = 98 ÷ 9,8 = 10 kg",
          explication: "On isole m dans la formule : m = P ÷ g.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est la valeur approximative de l'intensité de la pesanteur sur la Lune ?",
          choix: ["9,8 N/kg", "1,6 N/kg", "6 N/kg", "0 N/kg"],
          bonneReponse: 1,
          explication: "g(Lune) ≈ 1,6 N/kg, environ 6 fois moins que sur Terre (9,8 N/kg).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un colis de 7 kg est déposé sur la Lune (g = 1,6 N/kg). Calcule son poids.",
          reponse: "P = 7 × 1,6 = 11,2 N",
          explication: "On utilise la valeur lunaire de g : P = m × g = 11,2 N.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un astronaute affirme : « Sur la Lune, j'ai perdu de la masse, je pèse 6 fois moins ! » Corrige ses propos en utilisant le vocabulaire scientifique.",
          reponse:
            "Sa masse n'a pas changé : elle est la même sur Terre et sur la Lune. C'est son poids (la force d'attraction, en newtons) qui est environ 6 fois plus faible, car g(Lune) ≈ 1,6 N/kg au lieu de 9,8 N/kg sur Terre.",
          explication: "La masse (kg) est invariable ; seul le poids (N) dépend de l'astre, car il dépend de g.",
        },
      ],
    },
    {
      titre: "Examen 2 — Gravitation, poids et masse",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'attraction gravitationnelle entre deux objets est d'autant plus forte que :",
          choix: [
            "leurs masses sont grandes et leur distance petite",
            "leurs masses sont petites et leur distance grande",
            "leur température est élevée",
            "leur vitesse est grande",
          ],
          bonneReponse: 0,
          explication: "La gravitation augmente avec les masses et diminue quand la distance augmente.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule le poids sur Terre d'un ballon de masse 0,6 kg (g = 9,8 N/kg).",
          reponse: "P = 0,6 × 9,8 = 5,88 N",
          explication: "P = m × g, avec la masse déjà en kg.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel rôle joue la gravitation dans le système solaire ?",
          choix: [
            "Elle repousse les planètes loin du Soleil",
            "Elle maintient les planètes en orbite autour du Soleil",
            "Elle n'agit que sur la Terre",
            "Elle réchauffe les planètes",
          ],
          bonneReponse: 1,
          explication: "L'attraction du Soleil dévie en permanence les planètes et les maintient sur leurs orbites ; de même, la Terre maintient la Lune en orbite.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Sur Terre, une personne a un poids de 735 N (g = 9,8 N/kg). Calcule sa masse, puis son poids sur la Lune (g = 1,6 N/kg).",
          reponse: "m = 735 ÷ 9,8 = 75 kg. Sur la Lune : P = 75 × 1,6 = 120 N.",
          explication: "On calcule d'abord la masse (invariable), puis on applique P = m × g avec le g lunaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Sur une planète inconnue, un objet de masse 4 kg a un poids de 35,2 N. Calcule l'intensité de la pesanteur g sur cette planète.",
          reponse: "g = P ÷ m = 35,2 ÷ 4 = 8,8 N/kg",
          explication: "On isole g dans la formule P = m × g : g = P ÷ m.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une pomme a une masse de 250 g. Calcule son poids sur Terre (g = 9,8 N/kg). Attention aux unités !",
          reponse: "250 g = 0,25 kg, donc P = 0,25 × 9,8 = 2,45 N",
          explication: "Erreur fréquente : oublier de convertir les grammes en kilogrammes avant d'appliquer P = m × g.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La gravitation universelle est une attraction à distance entre tous les objets qui ont une masse ; elle augmente avec les masses et diminue avec la distance.",
    "C'est la gravitation qui maintient les planètes en orbite autour du Soleil et la Lune autour de la Terre.",
    "Masse : quantité de matière, en kg, mesurée à la balance, invariable. Poids : force, en N, mesuré au dynamomètre, dépend du lieu.",
    "Formule à connaître : P = m × g (P en N, m en kg, g en N/kg), avec m = P ÷ g et g = P ÷ m.",
    "Valeurs à retenir : g ≈ 9,8 N/kg sur Terre et g ≈ 1,6 N/kg sur la Lune (poids environ 6 fois plus faible sur la Lune).",
    "Erreur classique à éviter : confondre masse et poids (« je pèse 60 kg ») et oublier de convertir les grammes en kilogrammes avant d'appliquer P = m × g.",
  ],
};

export default chapitre;
