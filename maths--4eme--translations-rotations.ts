import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
