import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
