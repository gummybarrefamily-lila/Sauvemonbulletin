import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "vitesse-lumiere-son",
  titre: "Vitesse de la lumière et du son",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Comprendre ce qu'est un signal lumineux et un signal sonore, connaître leurs vitesses de propagation, savoir que le son a besoin d'un milieu matériel pour se propager contrairement à la lumière, et calculer une distance à partir d'une vitesse et d'une durée.",
  objectifs: [
    "Savoir que la lumière se propage en ligne droite et connaître sa vitesse dans le vide (300 000 km/s)",
    "Connaître la notion d'année-lumière comme unité de distance",
    "Savoir que le son est une vibration qui se propage dans un milieu matériel, avec une vitesse d'environ 340 m/s dans l'air",
    "Comprendre que le son ne se propage pas dans le vide, contrairement à la lumière",
    "Calculer une distance à partir d'une vitesse et d'une durée avec la formule d = v × t",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un signal ?",
      illustration: "📡",
      visuel: "Signal = information qui se déplace",
      contenu: [
        "Un signal transporte une information d'un point à un autre",
        "Le signal lumineux (la lumière) et le signal sonore (le son) sont deux exemples de signaux",
        "Un signal met toujours une certaine durée pour parcourir une distance",
        "Cette durée dépend de la vitesse de propagation du signal",
      ],
      voixOff:
        "Un signal est ce qui transporte une information d'un point à un autre : un flash lumineux, un cri, le bip d'un radar. La lumière et le son sont deux exemples de signaux très différents. Chacun met une certaine durée pour parcourir une distance donnée, et cette durée dépend de sa vitesse de propagation.",
    },
    {
      titre: "La lumière se propage en ligne droite",
      illustration: "🔦",
      visuel: "Trajet rectiligne",
      contenu: [
        "Dans un milieu transparent et homogène, la lumière se propage en ligne droite",
        "C'est ce qui explique les ombres nettes derrière un obstacle",
        "La lumière peut se propager dans le vide, contrairement au son",
        "Elle traverse aussi certains milieux transparents : l'air, l'eau, le verre",
      ],
      voixOff:
        "Dans un milieu transparent et homogène, comme l'air ou le vide, la lumière se propage toujours en ligne droite : c'est ce qui explique la formation d'ombres nettes derrière un obstacle. Une propriété essentielle de la lumière est qu'elle peut se propager dans le vide, ce qui lui permet de traverser l'espace et de nous parvenir depuis les étoiles. Elle traverse aussi des milieux transparents comme l'air, l'eau ou le verre.",
    },
    {
      titre: "La vitesse de la lumière",
      illustration: "💫",
      visuel: "c ≈ 300 000 km/s",
      contenu: [
        "Dans le vide, la lumière se propage à environ 300 000 km/s (soit 3×10⁸ m/s)",
        "C'est la vitesse la plus grande connue dans l'Univers",
        "À l'échelle humaine, la propagation de la lumière paraît instantanée",
        "La lumière du Soleil met environ 8 minutes à nous parvenir",
      ],
      voixOff:
        "Dans le vide, la lumière se propage à une vitesse extraordinaire : environ trois cent mille kilomètres par seconde, soit trois fois dix puissance huit mètres par seconde. C'est la plus grande vitesse connue dans l'Univers. À l'échelle humaine, cette vitesse est si grande que la propagation de la lumière nous paraît instantanée. Pourtant, la lumière du Soleil met environ huit minutes pour parcourir les cent cinquante millions de kilomètres qui nous en séparent.",
    },
    {
      titre: "L'année-lumière, une unité de distance",
      illustration: "🌌",
      visuel: "1 année-lumière ≈ 9 461 milliards de km",
      contenu: [
        "L'année-lumière est la distance parcourue par la lumière en une année",
        "1 année-lumière ≈ 9 461 milliards de km",
        "Elle sert à mesurer les très grandes distances en astronomie",
        "Observer une étoile éloignée, c'est voir de la lumière émise il y a très longtemps",
      ],
      voixOff:
        "Pour mesurer les distances astronomiques, gigantesques, on utilise une unité adaptée : l'année-lumière. C'est la distance parcourue par la lumière en une année, soit environ neuf mille quatre cent soixante et un milliards de kilomètres. Quand on observe une étoile située à plusieurs années-lumière, on reçoit en réalité une lumière qui a été émise il y a très longtemps : on regarde en quelque sorte dans le passé.",
    },
    {
      titre: "Le son, une vibration qui se propage",
      illustration: "🔊",
      visuel: "Vibration → onde sonore",
      contenu: [
        "Un son est produit par la vibration d'un objet (corde, membrane, corde vocale...)",
        "Cette vibration se propage de proche en proche dans un milieu matériel",
        "Le son a besoin d'un support matériel : air, eau, solide",
        "Le son ne transporte pas de matière, seulement une vibration",
      ],
      voixOff:
        "Un son est toujours produit par la vibration d'un objet : une corde de guitare, une membrane de haut-parleur, nos cordes vocales. Cette vibration se propage ensuite de proche en proche, en faisant vibrer les molécules du milieu qui l'entoure. Le son a donc besoin d'un support matériel pour se propager : l'air, l'eau, ou un solide. Il ne transporte pas de matière, seulement une vibration qui se transmet d'une molécule à l'autre.",
    },
    {
      titre: "La vitesse du son",
      illustration: "🐇",
      visuel: "v ≈ 340 m/s dans l'air",
      contenu: [
        "Dans l'air, à température ambiante, le son se propage à environ 340 m/s",
        "Cette vitesse dépend du milieu : plus rapide dans l'eau (≈ 1 500 m/s) et dans les solides (≈ 5 000 m/s dans l'acier)",
        "La vitesse du son est bien plus faible que celle de la lumière",
        "C'est pour cela qu'on voit l'éclair avant d'entendre le tonnerre",
      ],
      voixOff:
        "Dans l'air, à température ambiante, le son se propage à environ trois cent quarante mètres par seconde. Cette vitesse dépend fortement du milieu : elle est plus grande dans l'eau, environ mille cinq cents mètres par seconde, et encore plus grande dans les solides, environ cinq mille mètres par seconde dans l'acier. Mais dans tous les cas, la vitesse du son reste bien plus faible que celle de la lumière : c'est pour cela qu'on voit l'éclair d'un orage avant d'en entendre le tonnerre.",
    },
    {
      titre: "Le son ne se propage pas dans le vide",
      illustration: "🌑",
      visuel: "Vide = silence total",
      contenu: [
        "Sans matière pour vibrer, le son ne peut pas se propager",
        "Dans le vide spatial, il n'y a donc pas de son : le silence total règne",
        "Au contraire, la lumière se propage très bien dans le vide",
        "Différence fondamentale entre lumière (n'a pas besoin de milieu) et son (a besoin d'un milieu)",
      ],
      voixOff:
        "Contrairement à la lumière, le son a absolument besoin d'un milieu matériel, avec des molécules à faire vibrer. Dans le vide, il n'y a aucune matière, donc le son ne peut pas s'y propager : c'est pourquoi le silence règne dans l'espace, malgré ce que montrent parfois les films de science-fiction. C'est la différence fondamentale entre les deux signaux : la lumière n'a pas besoin de milieu matériel, alors que le son en a absolument besoin.",
    },
    {
      titre: "Calculer une distance : d = v × t",
      illustration: "🧮",
      visuel: "d = v × t",
      contenu: [
        "Formule : d = v × t (d : distance en m, v : vitesse en m/s, t : durée en s)",
        "Pour un écho ou l'orage, le son fait un aller (ou un aller-retour)",
        "Exemple : entre l'éclair et le tonnerre, 3 secondes → distance ≈ 340 × 3 = 1020 m",
        "Attention aux unités : elles doivent être cohérentes avant de calculer",
      ],
      voixOff:
        "Pour calculer la distance parcourue par un signal, on utilise la formule d égale v fois t, où d est la distance en mètres, v la vitesse en mètres par seconde, et t la durée en secondes. Par exemple, si l'on compte trois secondes entre l'éclair et le tonnerre, la distance de l'orage est d'environ trois cent quarante fois trois, soit environ mille vingt mètres. Attention à toujours vérifier que les unités de vitesse et de durée sont cohérentes avant de calculer.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Lumière : vitesse ≈ 300 000 km/s dans le vide, se propage en ligne droite, n'a pas besoin de milieu",
        "Son : vitesse ≈ 340 m/s dans l'air, a besoin d'un milieu matériel pour se propager",
        "Le son ne se propage pas dans le vide, la lumière si",
        "Formule à retenir : d = v × t",
      ],
      voixOff:
        "Résumons. La lumière se propage dans le vide à environ trois cent mille kilomètres par seconde, en ligne droite, et n'a besoin d'aucun milieu matériel. Le son se propage bien plus lentement, environ trois cent quarante mètres par seconde dans l'air, et a absolument besoin d'un milieu matériel : il ne peut pas exister dans le vide. Enfin, pour calculer une distance à partir d'une vitesse et d'une durée, retiens la formule d égale v fois t.",
    },
  ],
  fiche: {
    intro:
      "La lumière et le son sont deux signaux qui se propagent à des vitesses très différentes. La lumière se propage en ligne droite, y compris dans le vide, à environ 300 000 km/s. Le son, lui, a besoin d'un milieu matériel et se propage bien plus lentement, environ 340 m/s dans l'air.",
    sections: [
      {
        titre: "La lumière",
        points: [
          "Se propage en ligne droite dans un milieu transparent et homogène",
          "Se propage dans le vide et dans les milieux transparents (air, eau, verre)",
          "Vitesse dans le vide : environ 300 000 km/s (3×10⁸ m/s)",
          "L'année-lumière (≈ 9 461 milliards de km) mesure les distances astronomiques",
        ],
      },
      {
        titre: "Le son",
        points: [
          "Produit par la vibration d'un objet, se propage de proche en proche",
          "A besoin d'un milieu matériel : air, eau, solide",
          "Vitesse dans l'air ≈ 340 m/s ; plus rapide dans l'eau et les solides",
        ],
      },
      {
        titre: "Une différence fondamentale",
        points: [
          "La lumière se propage dans le vide ; le son ne le peut pas (pas de matière à faire vibrer)",
          "C'est pourquoi le silence règne dans l'espace",
          "On voit l'éclair avant d'entendre le tonnerre : la lumière va beaucoup plus vite que le son",
        ],
      },
      {
        titre: "Calculer une distance",
        points: [
          "Formule : d = v × t (d en m, v en m/s, t en s)",
          "Bien vérifier la cohérence des unités avant de calculer",
          "Exemple : orage à 3 s d'intervalle éclair/tonnerre → d ≈ 340 × 3 = 1020 m",
        ],
      },
    ],
    audio:
      "Fiche de révision : vitesse de la lumière et du son. La lumière se propage en ligne droite dans un milieu transparent et homogène, et elle peut aussi se propager dans le vide. Sa vitesse est extraordinaire : environ trois cent mille kilomètres par seconde. On utilise l'année-lumière, la distance parcourue par la lumière en une année, pour mesurer les distances astronomiques. Le son, lui, est produit par la vibration d'un objet et se propage de proche en proche, mais il a absolument besoin d'un milieu matériel : l'air, l'eau ou un solide. Sa vitesse dans l'air est d'environ trois cent quarante mètres par seconde, bien plus faible que celle de la lumière. C'est pourquoi le son ne se propage pas dans le vide, contrairement à la lumière : dans l'espace, le silence est total. Pour calculer une distance à partir d'une vitesse et d'une durée, on utilise la formule d égale v fois t.",
  },
  memoCards: [
    { recto: "Vitesse de la lumière dans le vide ?", verso: "Environ 300 000 km/s (soit 3×10⁸ m/s)." },
    { recto: "Qu'est-ce qu'une année-lumière ?", verso: "La distance parcourue par la lumière en une année, environ 9 461 milliards de km." },
    { recto: "Vitesse du son dans l'air ?", verso: "Environ 340 m/s (à température ambiante)." },
    { recto: "Le son se propage-t-il dans le vide ?", verso: "Non, il a besoin d'un milieu matériel (air, eau, solide) pour se propager." },
    { recto: "La lumière se propage-t-elle dans le vide ?", verso: "Oui, contrairement au son. C'est ainsi que la lumière des étoiles nous parvient." },
    { recto: "Qu'est-ce qui produit un son ?", verso: "La vibration d'un objet (corde, membrane, corde vocale...) qui se propage de proche en proche." },
    { recto: "Pourquoi voit-on l'éclair avant d'entendre le tonnerre ?", verso: "Parce que la lumière va beaucoup plus vite que le son (300 000 km/s contre 340 m/s)." },
    { recto: "Formule pour calculer une distance à partir d'une vitesse et d'une durée ?", verso: "d = v × t (d en m, v en m/s, t en s)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La vitesse de la lumière dans le vide est d'environ :",
      choix: ["340 m/s", "3 000 km/s", "300 000 km/s", "1 500 m/s"],
      bonneReponse: 2,
      explication: "La lumière se propage dans le vide à environ 300 000 km/s, soit 3×10⁸ m/s.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La vitesse du son dans l'air est d'environ :",
      choix: ["340 m/s", "300 000 km/s", "3,4 m/s", "34 000 m/s"],
      bonneReponse: 0,
      explication: "Le son se propage dans l'air à environ 340 m/s, bien plus lentement que la lumière.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Pourquoi le son ne peut-il pas se propager dans le vide ?",
      reponse: "Parce que le son a besoin d'un milieu matériel (des molécules à faire vibrer) pour se propager, et le vide n'en contient pas.",
      explication: "Contrairement à la lumière, qui n'a besoin d'aucun support matériel, le son se propage par vibration de la matière.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une année-lumière est :",
      choix: [
        "une durée d'un an",
        "une distance, celle parcourue par la lumière en un an",
        "une vitesse",
        "une unité de masse",
      ],
      bonneReponse: 1,
      explication: "Malgré son nom, l'année-lumière est bien une unité de distance : environ 9 461 milliards de km.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un randonneur crie face à une falaise et entend l'écho 2 secondes plus tard. Sachant que le son fait un aller-retour, calcule la distance jusqu'à la falaise (vitesse du son : 340 m/s).",
      reponse: "Distance aller-retour = v × t = 340 × 2 = 680 m. Distance jusqu'à la falaise = 680 / 2 = 340 m.",
      explication: "Le son parcourt un aller ET un retour en 2 s : il faut diviser par 2 pour obtenir la distance jusqu'à l'obstacle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Entre un éclair et le tonnerre qui le suit, on compte 5 secondes. À quelle distance environ se trouve l'orage ?",
      choix: ["17 m", "170 m", "1700 m", "17 000 m"],
      bonneReponse: 2,
      explication: "d = v × t = 340 × 5 = 1700 m. On néglige le temps de propagation de la lumière, quasi instantané.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi, lors d'un orage, on voit toujours l'éclair avant d'entendre le tonnerre, même s'ils sont produits au même instant.",
      reponse: "La lumière de l'éclair se propage à environ 300 000 km/s, tandis que le son du tonnerre ne se propage qu'à environ 340 m/s. La lumière nous parvient donc quasi instantanément, alors que le son met un temps mesurable pour arriver.",
      explication: "L'écart entre les deux vitesses est énorme (presque un million de fois plus rapide pour la lumière).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La vitesse du son dans l'eau, comparée à celle dans l'air, est :",
      choix: ["plus faible", "à peu près la même", "plus élevée", "nulle"],
      bonneReponse: 2,
      explication: "Le son se propage plus vite dans l'eau (≈ 1500 m/s) que dans l'air (≈ 340 m/s), car les molécules y sont plus proches.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "La lumière du Soleil met environ 8 minutes (480 s) pour arriver sur Terre. Sachant que la vitesse de la lumière est d'environ 300 000 km/s, calcule la distance Terre-Soleil.",
      reponse: "d = v × t = 300 000 × 480 = 144 000 000 km, soit environ 150 millions de km (valeur réelle admise).",
      explication: "On applique directement la formule d = v × t avec des unités cohérentes (km/s et s).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "L'étoile Proxima du Centaure est à 4,2 années-lumière de la Terre. Que peux-tu dire de la lumière que nous recevons d'elle aujourd'hui ?",
      reponse: "Cette lumière a été émise par l'étoile il y a 4,2 ans : nous voyons Proxima du Centaure telle qu'elle était il y a 4,2 ans, pas telle qu'elle est aujourd'hui.",
      explication: "Comme la lumière met du temps à voyager, observer une étoile lointaine revient à regarder son passé.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Un sonar sous-marin émet un signal sonore qui revient après avoir été réfléchi par le fond marin, en 0,8 s (aller-retour). La vitesse du son dans l'eau est 1500 m/s. Quelle est la profondeur de l'eau ?",
      choix: ["600 m", "1200 m", "300 m", "1875 m"],
      bonneReponse: 0,
      explication: "Distance aller-retour = 1500 × 0,8 = 1200 m ; profondeur = 1200 / 2 = 600 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Deux amis, Léa et Tom, testent une expérience : Tom tape sur un long rail métallique, Léa colle son oreille à l'autre extrémité. Elle entend deux sons : un très rapproché, puis un léger écho un peu après. Explique ce phénomène.",
      reponse:
        "Léa entend d'abord le son qui s'est propagé dans le métal du rail (vitesse très élevée, environ 5000 m/s), puis un peu plus tard le même son qui s'est propagé dans l'air (vitesse d'environ 340 m/s, donc plus lent). Les deux sons voyagent par des milieux différents, à des vitesses très différentes.",
      explication: "La vitesse du son dépend du milieu de propagation : elle est bien plus élevée dans un solide que dans l'air.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La lumière se propage-t-elle dans le vide ?",
      choix: ["Oui", "Non", "Seulement si elle est très intense", "Seulement la nuit"],
      bonneReponse: 0,
      explication: "La lumière n'a besoin d'aucun milieu matériel pour se propager, contrairement au son.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne la valeur approximative de la vitesse de la lumière dans le vide.",
      reponse: "Environ 300 000 km/s.",
      explication: "C'est la plus grande vitesse connue dans l'Univers.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris la formule permettant de calculer une distance à partir d'une vitesse et d'une durée.",
      reponse: "d = v × t",
      explication: "d en mètres, v en mètres par seconde, t en secondes (unités cohérentes).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pourquoi le son ne peut-il pas se propager dans le vide ?",
      choix: [
        "Parce qu'il est trop rapide",
        "Parce qu'il a besoin d'un milieu matériel pour se propager",
        "Parce qu'il est trop lent",
        "Le son se propage très bien dans le vide",
      ],
      bonneReponse: 1,
      explication: "Le son est une vibration de la matière : sans matière, il ne peut pas exister.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "On compte 4 secondes entre un éclair et le tonnerre. Calcule la distance approximative de l'orage (vitesse du son : 340 m/s).",
      reponse: "d = v × t = 340 × 4 = 1360 m",
      explication: "On néglige le temps de propagation de la lumière, quasi instantané à cette échelle.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Vitesse de la lumière et du son",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le son est produit par :",
          choix: ["un rayon lumineux", "la vibration d'un objet", "une réaction chimique", "un champ magnétique"],
          bonneReponse: 1,
          explication: "Tout son provient de la vibration d'un objet, qui se propage ensuite de proche en proche dans la matière.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la valeur approximative de la vitesse du son dans l'air.",
          reponse: "Environ 340 m/s.",
          explication: "Cette vitesse varie légèrement avec la température, mais on retient 340 m/s dans l'air à température ambiante.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une année-lumière vaut environ :",
          choix: ["300 000 km", "9 461 milliards de km", "1 500 m", "365 jours"],
          bonneReponse: 1,
          explication: "C'est la distance parcourue par la lumière en une année, soit environ 9 461 milliards de km.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une chauve-souris émet un ultrason qui revient après avoir été réfléchi par un obstacle, en 0,1 s (aller-retour). La vitesse du son dans l'air est 340 m/s. Calcule la distance jusqu'à l'obstacle.",
          reponse: "Distance aller-retour = 340 × 0,1 = 34 m. Distance jusqu'à l'obstacle = 34 / 2 = 17 m.",
          explication: "Il s'agit d'un aller-retour : on divise la distance totale par 2 pour obtenir la distance jusqu'à l'obstacle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Explique pourquoi les astronautes en sortie extravéhiculaire dans l'espace ne peuvent pas se parler directement, à l'air libre, et doivent utiliser une radio.",
          reponse:
            "Dans l'espace, il y a le vide : il n'y a pas de matière pour transmettre les vibrations sonores. Le son ne peut donc pas s'y propager. La radio utilise des ondes électromagnétiques, qui se propagent comme la lumière, sans avoir besoin de milieu matériel.",
          explication: "Cette question distingue bien les deux types de signaux : le son (a besoin de matière) et les ondes électromagnétiques comme les ondes radio ou la lumière (n'en ont pas besoin).",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Un signal sonore parcourt 850 m dans l'air. Sachant que la vitesse du son est 340 m/s, combien de temps a-t-il mis ?",
          choix: ["0,4 s", "2,5 s", "25 s", "289 000 s"],
          bonneReponse: 1,
          explication: "t = d / v = 850 / 340 = 2,5 s.",
        },
      ],
    },
    {
      titre: "Examen 2 — Vitesse de la lumière et du son",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans quel milieu la lumière peut-elle se propager, contrairement au son ?",
          choix: ["L'air", "L'eau", "Le vide", "Le verre"],
          bonneReponse: 2,
          explication: "Le son a besoin d'un milieu matériel ; le vide en est dépourvu, donc seule la lumière peut s'y propager.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite deux milieux matériels dans lesquels le son peut se propager.",
          reponse: "L'air et l'eau (ou aussi un solide, comme le métal ou le bois).",
          explication: "Le son a besoin de matière pour se propager, quel que soit son état (gaz, liquide, solide).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La formule permettant de calculer une distance connaissant la vitesse et la durée est :",
          choix: ["d = v / t", "d = v × t", "d = t / v", "d = v + t"],
          bonneReponse: 1,
          explication: "La distance est le produit de la vitesse par la durée : d = v × t.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique, avec le modèle de la vibration, comment le son se propage de la source à l'oreille.",
          reponse:
            "La source (par exemple une corde vocale) vibre, ce qui fait vibrer les molécules d'air à proximité. Ces molécules transmettent leur vibration aux molécules voisines, de proche en proche, jusqu'à atteindre le tympan de l'oreille, qui se met à vibrer à son tour.",
          explication: "Le son se propage par transmission de la vibration entre molécules voisines, sans déplacement net de matière sur de grandes distances.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un navire envoie un signal sonore vers le fond marin pour mesurer la profondeur avec un sonar. Le signal revient après 4 s (aller-retour). La vitesse du son dans l'eau est 1500 m/s. Calcule la profondeur.",
          reponse: "Distance aller-retour = 1500 × 4 = 6000 m. Profondeur = 6000 / 2 = 3000 m.",
          explication: "On applique d = v × t pour l'aller-retour, puis on divise par 2 pour obtenir la profondeur (un seul trajet).",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Pourquoi la vitesse du son est-elle plus grande dans un solide que dans l'air ?",
          choix: [
            "Parce que les molécules d'un solide sont plus proches les unes des autres et transmettent la vibration plus efficacement",
            "Parce que les solides sont plus légers",
            "Parce que le son ne se propage pas du tout dans les solides",
            "Il n'y a pas de différence entre les milieux",
          ],
          bonneReponse: 0,
          explication: "Plus les molécules du milieu sont proches et liées entre elles, plus la vibration se transmet rapidement d'une molécule à l'autre.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La lumière se propage en ligne droite dans un milieu transparent et homogène, et peut se propager dans le vide.",
    "Vitesse de la lumière dans le vide : environ 300 000 km/s (3×10⁸ m/s).",
    "L'année-lumière est une unité de distance : environ 9 461 milliards de km.",
    "Le son est produit par une vibration qui se propage de proche en proche ; il a besoin d'un milieu matériel (air, eau, solide) et ne se propage pas dans le vide.",
    "Vitesse du son dans l'air : environ 340 m/s (bien plus lente que la lumière).",
    "Formule à retenir : d = v × t (distance = vitesse × durée), et pour un aller-retour, la distance jusqu'à l'obstacle est divisée par 2.",
  ],
};

export default chapitre;
