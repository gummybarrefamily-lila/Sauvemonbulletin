import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "homothetie",
  titre: "Homothéties et agrandissements",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Construire l'image d'une figure par une homothétie, comprendre l'effet du rapport k sur les longueurs, aires et volumes : agrandissements et réductions au programme du brevet.",
  objectifs: [
    "Construire l'image d'un point par une homothétie de centre et de rapport donnés",
    "Distinguer agrandissement (k > 1), réduction (0 < k < 1) et rapport négatif",
    "Utiliser les propriétés de conservation de l'homothétie (angles, parallélisme, alignement)",
    "Calculer l'effet d'un rapport k sur les longueurs, les aires et les volumes",
    "Résoudre des problèmes d'échelle et de plans à l'échelle",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une homothétie ?",
      illustration: "🔍",
      visuel: "O, M, M' alignés avec OM' = k × OM",
      contenu: [
        "Une homothétie transforme une figure en l'agrandissant ou la réduisant",
        "Elle est définie par un CENTRE O et un RAPPORT k (un nombre non nul)",
        "L'image M' d'un point M vérifie : O, M, M' alignés et OM' = k × OM",
        "Si k > 0, M' est du même côté que M par rapport à O",
      ],
      voixOff:
        "Une homothétie est une transformation géométrique qui agrandit ou réduit une figure, sans changer sa forme. Elle est définie par un centre, noté O, et un rapport, noté k, qui est un nombre non nul. L'image M prime d'un point M est telle que les trois points O, M, M prime sont alignés, et que la distance O M prime est égale à k fois la distance O M. Si k est positif, M prime se trouve du même côté que M par rapport au centre O.",
    },
    {
      titre: "Construire l'image d'un point",
      illustration: "✏️",
      visuel: "O, M, M' : tracer (OM), placer M' tel que OM' = k × OM",
      contenu: [
        "1. Tracer la droite (OM)",
        "2. Mesurer OM",
        "3. Calculer OM' = k × OM",
        "4. Placer M' sur la droite (OM), du bon côté selon le signe de k",
      ],
      voixOff:
        "Pour construire l'image d'un point M par une homothétie de centre O et de rapport k, on suit quatre étapes. On trace d'abord la droite passant par O et M. On mesure ensuite la longueur OM. On calcule alors OM prime en multipliant OM par k. Enfin, on place le point M prime sur la droite, du côté indiqué par le signe de k : même côté que M si k est positif, côté opposé si k est négatif.",
    },
    {
      titre: "Agrandissement, réduction, rapport négatif",
      illustration: "📏",
      visuel: "k > 1 : agrandit ; 0 < k < 1 : réduit ; k < 0 : symétrique et change d'échelle",
      contenu: [
        "Si k > 1, l'image est un AGRANDISSEMENT (plus grande que la figure de départ)",
        "Si 0 < k < 1, l'image est une RÉDUCTION (plus petite)",
        "Si k = 1, l'image est identique à la figure de départ",
        "Si k < 0, l'image est retournée par rapport à O (comme une symétrie centrale combinée à un agrandissement)",
      ],
      voixOff:
        "Le signe et la valeur du rapport k déterminent l'effet de l'homothétie. Si k est supérieur à un, l'image est plus grande que la figure de départ : c'est un agrandissement. Si k est compris entre zéro et un, l'image est plus petite : c'est une réduction. Si k vaut exactement un, l'image est superposable à la figure de départ. Enfin, si k est négatif, l'image se retrouve de l'autre côté du centre, comme si elle avait subi une symétrie en plus du changement de taille.",
    },
    {
      titre: "Propriétés conservées par l'homothétie",
      illustration: "✅",
      visuel: "angles ✔ · parallélisme ✔ · alignement ✔ · longueurs ✘",
      contenu: [
        "L'homothétie conserve les angles : l'image d'un triangle a les mêmes angles",
        "Elle conserve le parallélisme : deux droites parallèles restent parallèles",
        "Elle conserve l'alignement des points",
        "Elle NE conserve PAS les longueurs (sauf si k = 1 ou k = −1)",
      ],
      voixOff:
        "L'homothétie conserve plusieurs propriétés importantes. Elle conserve les angles : la figure image a exactement les mêmes angles que la figure de départ. Elle conserve le parallélisme entre les droites, ainsi que l'alignement des points. En revanche, elle ne conserve pas les longueurs, sauf dans les cas particuliers où le rapport vaut un ou moins un : c'est justement ce changement de longueur qui produit l'agrandissement ou la réduction.",
    },
    {
      titre: "Effet de k sur les longueurs",
      illustration: "📐",
      visuel: "longueur image = k × longueur de départ",
      contenu: [
        "Si une figure a une longueur L, son image a pour longueur k × L (en valeur absolue)",
        "Exemple : un segment de 4 cm, homothétie de rapport 3 → image de 12 cm",
        "Exemple : un segment de 9 cm, homothétie de rapport 1/3 → image de 3 cm",
        "Le rapport k s'applique à TOUTES les longueurs de la figure",
      ],
      voixOff:
        "Sur les longueurs, l'effet de l'homothétie est simple : chaque longueur de la figure image est égale à la valeur absolue de k, multipliée par la longueur correspondante de la figure de départ. Par exemple, un segment de quatre centimètres, transformé par une homothétie de rapport trois, donne une image de douze centimètres. Un segment de neuf centimètres, transformé par une homothétie de rapport un tiers, donne une image de trois centimètres.",
    },
    {
      titre: "Effet de k sur les aires",
      illustration: "🟦",
      visuel: "aire image = k² × aire de départ",
      contenu: [
        "Les aires sont multipliées par k², le CARRÉ du rapport",
        "Exemple : un rectangle de 20 cm², homothétie de rapport 2 → image de 20 × 2² = 80 cm²",
        "Exemple : un carré de 36 cm², homothétie de rapport 1/3 → image de 36 × (1/3)² = 4 cm²",
        "Ne pas confondre : le rapport des longueurs n'est pas le rapport des aires !",
      ],
      voixOff:
        "Pour les aires, l'effet est différent : l'aire de l'image est égale à l'aire de départ multipliée par k au carré. Par exemple, un rectangle de vingt centimètres carrés, transformé par une homothétie de rapport deux, donne une image de quatre-vingts centimètres carrés, car vingt fois deux au carré, c'est-à-dire vingt fois quatre. Attention à ne jamais confondre le rapport des longueurs avec le rapport des aires : ce dernier est toujours le carré du premier.",
    },
    {
      titre: "Effet de k sur les volumes",
      illustration: "📦",
      visuel: "volume image = k³ × volume de départ",
      contenu: [
        "Les volumes sont multipliés par k³, le CUBE du rapport",
        "Exemple : un cube de 8 cm³, homothétie de rapport 2 → image de 8 × 2³ = 64 cm³",
        "Exemple : une pyramide de 27 cm³, homothétie de rapport 1/3 → image de 27 × (1/3)³ = 1 cm³",
        "Récapitulatif : longueurs × k, aires × k², volumes × k³",
      ],
      voixOff:
        "Pour les volumes, l'effet est encore différent : le volume de l'image est égal au volume de départ multiplié par k au cube. Par exemple, un cube de huit centimètres cubes, transformé par une homothétie de rapport deux, donne une image de soixante-quatre centimètres cubes. Retiens bien ce récapitulatif : les longueurs sont multipliées par k, les aires par k au carré, et les volumes par k au cube.",
    },
    {
      titre: "Échelles et plans",
      illustration: "🗺️",
      visuel: "échelle 1/100 : 1 cm sur le plan = 100 cm en réalité",
      contenu: [
        "Un plan à l'échelle est une réduction, une application concrète de l'homothétie",
        "Échelle 1/100 : 1 cm sur le plan représente 100 cm (1 m) dans la réalité",
        "Pour passer du plan à la réalité : multiplier par le dénominateur de l'échelle",
        "Pour passer de la réalité au plan : diviser par le dénominateur de l'échelle",
      ],
      voixOff:
        "Les plans à l'échelle sont une application très concrète de l'homothétie, sous forme de réduction. Une échelle de un centième signifie qu'un centimètre sur le plan représente cent centimètres, soit un mètre, dans la réalité. Pour retrouver une dimension réelle à partir du plan, on multiplie par le dénominateur de l'échelle. Pour représenter une dimension réelle sur le plan, on divise au contraire par ce même dénominateur.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Homothétie : centre O, rapport k, OM' = k × OM (O, M, M' alignés)",
        "k > 1 agrandit ; 0 < k < 1 réduit ; k < 0 retourne la figure",
        "Conserve : angles, parallélisme, alignement. Ne conserve PAS les longueurs",
        "Longueurs × k ; aires × k² ; volumes × k³",
      ],
      voixOff:
        "Résumons. Une homothétie est définie par un centre O et un rapport k, avec la relation O M prime égale k fois O M. Un rapport supérieur à un agrandit la figure, un rapport entre zéro et un la réduit, et un rapport négatif la retourne par rapport au centre. L'homothétie conserve les angles, le parallélisme et l'alignement, mais pas les longueurs. Retiens bien le triplet essentiel : les longueurs sont multipliées par k, les aires par k au carré, et les volumes par k au cube. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "L'homothétie est une transformation qui agrandit ou réduit une figure à partir d'un centre et d'un rapport. Elle relie géométrie et calcul, notamment via l'effet du rapport sur les longueurs, les aires et les volumes.",
    sections: [
      {
        titre: "Définition",
        points: [
          "Homothétie de centre O et de rapport k (k ≠ 0)",
          "Image M' d'un point M : O, M, M' alignés et OM' = k × OM",
          "k > 1 : agrandissement ; 0 < k < 1 : réduction ; k < 0 : figure retournée",
        ],
      },
      {
        titre: "Propriétés conservées",
        points: [
          "Les angles sont conservés",
          "Le parallélisme entre droites est conservé",
          "L'alignement des points est conservé",
          "Les longueurs ne sont PAS conservées (sauf k = ±1)",
        ],
      },
      {
        titre: "Effet du rapport k",
        points: [
          "Longueurs : multipliées par |k|",
          "Aires : multipliées par k²",
          "Volumes : multipliés par k³",
        ],
      },
      {
        titre: "Échelles",
        points: [
          "Un plan à l'échelle est une réduction (application de l'homothétie)",
          "Échelle 1/n : 1 unité sur le plan = n unités dans la réalité",
          "Plan → réalité : multiplier par n ; réalité → plan : diviser par n",
        ],
      },
    ],
    audio:
      "Fiche de révision : homothéties et agrandissements. Une homothétie est définie par un centre O et un rapport k non nul. L'image M prime d'un point M vérifie que O, M, M prime sont alignés et que O M prime égale k fois O M. Si k est supérieur à un, la figure est agrandie ; si k est compris entre zéro et un, elle est réduite ; si k est négatif, la figure est retournée par rapport au centre. L'homothétie conserve les angles, le parallélisme et l'alignement des points, mais elle ne conserve pas les longueurs. C'est là tout son intérêt : les longueurs sont multipliées par la valeur absolue de k, les aires par k au carré, et les volumes par k au cube. Les plans à l'échelle sont une application concrète de la réduction homothétique.",
  },
  memoCards: [
    { recto: "Comment est définie une homothétie ?", verso: "Par un centre O et un rapport k non nul." },
    { recto: "Relation entre M, M' et le centre O ?", verso: "O, M, M' sont alignés et OM' = k × OM." },
    { recto: "Effet d'un rapport k > 1 ?", verso: "Agrandissement de la figure." },
    { recto: "Effet d'un rapport 0 < k < 1 ?", verso: "Réduction de la figure." },
    { recto: "Effet d'un rapport k < 0 ?", verso: "La figure est retournée par rapport au centre (et agrandie ou réduite selon |k|)." },
    { recto: "Que conserve une homothétie ?", verso: "Les angles, le parallélisme, l'alignement des points. PAS les longueurs." },
    { recto: "Effet du rapport k sur les longueurs, aires, volumes ?", verso: "Longueurs × k ; aires × k² ; volumes × k³." },
    { recto: "Que représente une échelle 1/50 sur un plan ?", verso: "1 unité sur le plan représente 50 unités dans la réalité." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une homothétie est définie par :",
      choix: ["Un centre et un angle", "Un centre et un rapport", "Deux points", "Un rayon"],
      bonneReponse: 1,
      explication: "Une homothétie est caractérisée par son centre O et son rapport k.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un rapport k = 2 correspond à :",
      choix: ["Une réduction", "Un agrandissement", "Une figure identique", "Une rotation"],
      bonneReponse: 1,
      explication: "Comme k = 2 > 1, l'image est plus grande que la figure de départ : c'est un agrandissement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un segment mesure 5 cm. Quelle est la longueur de son image par une homothétie de rapport 4 ?",
      reponse: "20 cm",
      explication: "Longueur image = k × longueur de départ = 4 × 5 = 20 cm.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une homothétie conserve :",
      choix: ["Les longueurs", "Les aires", "Les angles", "Les volumes"],
      bonneReponse: 2,
      explication: "L'homothétie conserve les angles (ainsi que le parallélisme et l'alignement), mais pas les longueurs, aires ou volumes.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un carré a une aire de 16 cm². Quelle est l'aire de son image par une homothétie de rapport 3 ?",
      reponse: "144 cm²",
      explication: "Aire image = k² × aire de départ = 3² × 16 = 9 × 16 = 144 cm².",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un cube a un volume de 27 cm³. Quel est le volume de son image par une homothétie de rapport 1/3 ?",
      reponse: "1 cm³",
      explication: "Volume image = k³ × volume de départ = (1/3)³ × 27 = (1/27) × 27 = 1 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un point M est à 6 cm du centre O. Où se trouve son image M' par une homothétie de centre O et de rapport −2 ?",
      choix: [
        "À 12 cm de O, du même côté que M",
        "À 12 cm de O, du côté opposé à M",
        "À 3 cm de O, du même côté que M",
        "À 3 cm de O, du côté opposé à M",
      ],
      bonneReponse: 1,
      explication: "OM' = |−2| × 6 = 12 cm. Comme k est négatif, M' est du côté opposé à M par rapport à O.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Sur un plan à l'échelle 1/200, une pièce mesure 3 cm de longueur. Quelle est la longueur réelle de cette pièce ?",
      reponse: "6 m (600 cm)",
      explication: "Longueur réelle = 3 × 200 = 600 cm = 6 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un triangle a une aire de 12 cm² et son image par une homothétie a une aire de 108 cm². Détermine le rapport k de cette homothétie (k > 0).",
      reponse: "k = 3",
      explication: "108 = k² × 12, donc k² = 108/12 = 9, donc k = √9 = 3 (car k > 0).",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une pyramide a un volume de 20 cm³. Son image par une homothétie de rapport 5 a pour volume :",
      choix: ["100 cm³", "500 cm³", "2 500 cm³", "160 cm³"],
      bonneReponse: 2,
      explication: "Volume image = 5³ × 20 = 125 × 20 = 2 500 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un jardin réel mesure 15 m sur 10 m. On souhaite le représenter sur un plan avec une échelle de 1/500. Calcule les dimensions du jardin sur le plan (en cm).",
      reponse: "3 cm sur 2 cm",
      explication:
        "15 m = 1500 cm ; 1500 ÷ 500 = 3 cm. 10 m = 1000 cm ; 1000 ÷ 500 = 2 cm. Le jardin mesure donc 3 cm sur 2 cm sur le plan.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un modèle réduit d'avion est construit à l'échelle 1/48. Le volume réel de l'avion est de 331 776 dm³. Quel est le volume du modèle réduit, en dm³ ?",
      reponse: "3 dm³",
      explication: "Le rapport des longueurs est 1/48, donc le rapport des volumes est (1/48)³ = 1/110 592. Volume du modèle = 331 776 ÷ 110 592 = 3 dm³.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un rapport k = 0,5 correspond à :",
      choix: ["Un agrandissement", "Une réduction", "Une figure identique", "Impossible à déterminer"],
      bonneReponse: 1,
      explication: "Comme 0 < 0,5 < 1, l'image est plus petite que la figure de départ : c'est une réduction.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un segment mesure 8 cm. Quelle est la longueur de son image par une homothétie de rapport 0,5 ?",
      reponse: "4 cm",
      explication: "Longueur image = 0,5 × 8 = 4 cm.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un rectangle a une aire de 10 cm². Quelle est l'aire de son image par une homothétie de rapport 4 ?",
      reponse: "160 cm²",
      explication: "Aire image = 4² × 10 = 16 × 10 = 160 cm².",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une homothétie conserve :",
      choix: ["Les longueurs", "Le parallélisme", "Les aires", "Les volumes"],
      bonneReponse: 1,
      explication: "L'homothétie conserve le parallélisme, les angles et l'alignement, mais pas les longueurs, aires et volumes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un cube a un volume de 8 cm³. Quel est le volume de son image par une homothétie de rapport 2 ?",
      reponse: "64 cm³",
      explication: "Volume image = 2³ × 8 = 8 × 8 = 64 cm³.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Homothéties et agrandissements",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le rapport d'une homothétie doit être :",
          choix: ["Un nombre positif uniquement", "Un nombre non nul", "Un nombre entier", "Toujours supérieur à 1"],
          bonneReponse: 1,
          explication: "Le rapport k d'une homothétie peut être n'importe quel nombre non nul, positif ou négatif.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un segment mesure 7 cm. Quelle est la longueur de son image par une homothétie de rapport 6 ?",
          reponse: "42 cm",
          explication: "Longueur image = 6 × 7 = 42 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle a une aire de 9 cm². Quelle est l'aire de son image par une homothétie de rapport 5 ?",
          reponse: "225 cm²",
          explication: "Aire image = 5² × 9 = 25 × 9 = 225 cm².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un point M est à 4 cm du centre O d'une homothétie de rapport −3. À quelle distance de O se trouve M' ?",
          reponse: "12 cm",
          explication: "OM' = |−3| × 4 = 12 cm (M' est du côté opposé à M par rapport à O).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un cône a un volume de 15 cm³. Son image par une homothétie de rapport 2 a pour volume :",
          choix: ["30 cm³", "60 cm³", "120 cm³", "225 cm³"],
          bonneReponse: 2,
          explication: "Volume image = 2³ × 15 = 8 × 15 = 120 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une maquette de bâtiment est réalisée à l'échelle 1/75. Sur la maquette, la façade mesure 40 cm de large et 24 cm de haut. Calcule les dimensions réelles de la façade en mètres.",
          reponse: "Largeur réelle = 30 m ; hauteur réelle = 18 m",
          explication:
            "Largeur réelle = 40 × 75 = 3000 cm = 30 m. Hauteur réelle = 24 × 75 = 1800 cm = 18 m.",
        },
      ],
    },
    {
      titre: "Examen 2 — Homothéties et agrandissements",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Si k = 1, l'image d'une figure par une homothétie est :",
          choix: ["Plus grande", "Plus petite", "Identique à la figure de départ", "Retournée"],
          bonneReponse: 2,
          explication: "Quand k = 1, chaque point est sa propre image : la figure image est superposable à la figure de départ.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un segment mesure 12 cm. Quelle est la longueur de son image par une homothétie de rapport 1/4 ?",
          reponse: "3 cm",
          explication: "Longueur image = (1/4) × 12 = 3 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un carré a une aire de 25 cm². Quelle est l'aire de son image par une homothétie de rapport 1/5 ?",
          reponse: "1 cm²",
          explication: "Aire image = (1/5)² × 25 = (1/25) × 25 = 1 cm².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un pentagone a une aire de 40 cm² ; son image a une aire de 360 cm². Détermine le rapport k de l'homothétie (k > 0).",
          reponse: "k = 3",
          explication: "360 = k² × 40, donc k² = 9, donc k = 3.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une sphère a un volume de 10 cm³. Son image par une homothétie de rapport 1/2 a pour volume :",
          choix: ["5 cm³", "2,5 cm³", "1,25 cm³", "0,625 cm³"],
          bonneReponse: 2,
          explication: "Volume image = (1/2)³ × 10 = (1/8) × 10 = 1,25 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un terrain réel mesure 60 m sur 40 m. On souhaite le dessiner sur une feuille avec une échelle 1/1000. Calcule les dimensions du dessin en cm, puis calcule l'aire réelle du terrain en m².",
          reponse: "Dessin : 6 cm sur 4 cm ; aire réelle : 2400 m²",
          explication:
            "60 m = 6000 cm ; 6000 ÷ 1000 = 6 cm. 40 m = 4000 cm ; 4000 ÷ 1000 = 4 cm. Aire réelle = 60 × 40 = 2400 m².",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Homothétie de centre O et de rapport k (k ≠ 0) : image M' de M telle que O, M, M' alignés et OM' = k × OM.",
    "k > 1 : agrandissement ; 0 < k < 1 : réduction ; k = 1 : figure identique ; k < 0 : figure retournée.",
    "L'homothétie conserve les angles, le parallélisme et l'alignement, mais PAS les longueurs.",
    "Longueurs multipliées par |k| ; aires multipliées par k² ; volumes multipliés par k³.",
    "Un plan à l'échelle 1/n est une réduction homothétique : plan → réalité (× n), réalité → plan (÷ n).",
    "Erreur fréquente à éviter : appliquer le rapport k directement aux aires ou aux volumes sans l'élever au carré ou au cube.",
  ],
};

export default chapitre;
