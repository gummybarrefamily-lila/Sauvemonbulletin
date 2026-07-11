import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
