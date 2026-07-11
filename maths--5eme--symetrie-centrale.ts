import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
