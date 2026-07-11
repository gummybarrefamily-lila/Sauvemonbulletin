import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "aires-perimetres",
  titre: "Aires et périmètres",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Comprendre la différence entre périmètre et aire, connaître les formules du carré, du rectangle, du triangle, du parallélogramme et du disque, et savoir convertir les unités d'aire.",
  objectifs: [
    "Distinguer clairement le périmètre (une longueur) et l'aire (une surface)",
    "Connaître et utiliser les formules de périmètre et d'aire du carré et du rectangle",
    "Calculer l'aire d'un triangle et d'un parallélogramme",
    "Calculer l'aire et la circonférence d'un disque avec π ≈ 3,14",
    "Convertir des aires entre mm², cm², dm², m² et km²",
  ],
  slides: [
    {
      titre: "Périmètre et aire : deux idées différentes",
      illustration: "📐",
      visuel: "Contour ≠ Surface",
      contenu: [
        "Le périmètre mesure le tour d'une figure (une longueur)",
        "L'aire mesure la surface à l'intérieur (une étendue)",
        "Périmètre en cm, m... ; Aire en cm², m²...",
        "Deux figures peuvent avoir le même périmètre et des aires différentes",
      ],
      voixOff:
        "Le périmètre et l'aire mesurent deux choses très différentes. Le périmètre, c'est la longueur du contour d'une figure : on additionne tous les côtés. L'aire, c'est la mesure de la surface à l'intérieur de la figure. Attention à ne jamais confondre les unités : le périmètre se mesure en centimètres ou en mètres, alors que l'aire se mesure en centimètres carrés ou en mètres carrés.",
    },
    {
      titre: "Périmètre du carré et du rectangle",
      illustration: "🟦",
      visuel: "P = 2×(L+l)",
      contenu: [
        "Carré de côté c : P = 4 × c",
        "Rectangle de longueur L et largeur l : P = 2 × (L + l)",
        "Exemple : rectangle 8 cm × 5 cm → P = 2×(8+5) = 26 cm",
        "On peut aussi additionner directement les 4 côtés",
      ],
      voixOff:
        "Pour un carré de côté c, le périmètre vaut quatre fois c, puisque les quatre côtés sont égaux. Pour un rectangle de longueur L et de largeur l, le périmètre vaut deux fois la somme de la longueur et de la largeur. Par exemple, un rectangle de 8 centimètres sur 5 centimètres a un périmètre de 2 fois 8 plus 5, soit 26 centimètres.",
    },
    {
      titre: "Aire du carré et du rectangle",
      illustration: "🟩",
      visuel: "A = L × l",
      contenu: [
        "Carré de côté c : A = c × c = c²",
        "Rectangle : A = longueur × largeur",
        "Exemple : rectangle 8 cm × 5 cm → A = 8×5 = 40 cm²",
        "On compte le nombre de carreaux de 1 cm² qui recouvrent la figure",
      ],
      voixOff:
        "L'aire d'un rectangle s'obtient en multipliant la longueur par la largeur. Pour un carré de côté c, cela donne c fois c, que l'on note c au carré. Reprenons le rectangle de 8 centimètres sur 5 centimètres : son aire vaut 8 fois 5, soit 40 centimètres carrés. On peut imaginer qu'on recouvre le rectangle avec des petits carreaux d'un centimètre carré chacun.",
    },
    {
      titre: "Aire du triangle",
      illustration: "🔺",
      visuel: "A = (base × hauteur) ÷ 2",
      contenu: [
        "Un triangle, c'est la moitié d'un rectangle (ou d'un parallélogramme)",
        "Formule : A = (base × hauteur) ÷ 2",
        "Exemple : base 6 cm, hauteur 4 cm → A = (6×4)÷2 = 12 cm²",
        "La hauteur est toujours perpendiculaire à la base choisie",
      ],
      voixOff:
        "L'aire d'un triangle est la moitié de l'aire du rectangle qui l'entoure. On multiplie la base par la hauteur, puis on divise par deux. Prenons un triangle de base 6 centimètres et de hauteur 4 centimètres : son aire vaut 6 fois 4 divisé par 2, soit 12 centimètres carrés. Il faut bien choisir la hauteur qui est perpendiculaire à la base.",
    },
    {
      titre: "Aire du parallélogramme",
      illustration: "▱",
      visuel: "A = base × hauteur",
      contenu: [
        "Un parallélogramme a deux paires de côtés parallèles",
        "Formule : A = base × hauteur",
        "Exemple : base 7 cm, hauteur 3 cm → A = 7×3 = 21 cm²",
        "Pas de division par 2 ici, contrairement au triangle !",
      ],
      voixOff:
        "Le parallélogramme est un quadrilatère dont les côtés opposés sont parallèles. Son aire se calcule simplement en multipliant la base par la hauteur, sans diviser par deux. Un parallélogramme de base 7 centimètres et de hauteur 3 centimètres a donc une aire de 21 centimètres carrés.",
    },
    {
      titre: "Le cercle et le disque",
      illustration: "⭕",
      visuel: "Cercle = contour, Disque = surface",
      contenu: [
        "Le cercle est la ligne qui fait le tour (le contour)",
        "Le disque est la surface à l'intérieur du cercle",
        "Le rayon (r) va du centre au bord ; le diamètre (d) = 2 × r",
        "Circonférence du cercle : C = π × d = 2 × π × r",
      ],
      voixOff:
        "Il ne faut pas confondre le cercle et le disque. Le cercle, c'est seulement la ligne courbe qui fait le tour, comme le contour d'une roue. Le disque, c'est toute la surface à l'intérieur. Le tour du cercle s'appelle la circonférence, et elle se calcule avec pi fois le diamètre, ou deux fois pi fois le rayon.",
    },
    {
      titre: "Périmètre et aire du disque",
      illustration: "🎯",
      visuel: "A = π × r²",
      contenu: [
        "Aire du disque : A = π × r²",
        "On utilise π ≈ 3,14 pour calculer une valeur approchée",
        "Exemple : disque de rayon 5 cm → A ≈ 3,14×5×5 = 78,5 cm²",
        "Circonférence : ≈ 2×3,14×5 = 31,4 cm",
      ],
      voixOff:
        "L'aire d'un disque se calcule avec la formule pi fois rayon au carré. On utilise en général la valeur approchée pi environ égal à 3,14. Pour un disque de rayon 5 centimètres, l'aire vaut environ 3,14 fois 5 fois 5, soit 78,5 centimètres carrés, et sa circonférence vaut environ 2 fois 3,14 fois 5, soit 31,4 centimètres. Attention à ne pas confondre rayon au carré et 2 fois le rayon !",
    },
    {
      titre: "Les unités d'aire",
      illustration: "📏",
      visuel: "1 cm² = 100 mm²",
      contenu: [
        "Unités d'aire : mm², cm², dm², m², km²",
        "Chaque unité d'aire vaut 100 fois l'unité juste en dessous",
        "1 cm² = 100 mm² ; 1 m² = 10 000 cm²",
        "Pour les longueurs, on multiplie/divise par 10 ; pour les aires, par 100 !",
      ],
      voixOff:
        "Les unités d'aire ne fonctionnent pas comme les unités de longueur. Pour les longueurs, on passe d'une unité à l'autre en multipliant ou en divisant par 10. Mais pour les aires, comme on a une unité au carré, on multiplie ou on divise par 100. Ainsi, un centimètre carré vaut 100 millimètres carrés, et un mètre carré vaut 10 000 centimètres carrés.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Périmètre = longueur du contour (cm, m...) ; Aire = surface (cm², m²...)",
        "Rectangle : P = 2×(L+l) ; A = L×l",
        "Triangle : A = (base×hauteur)÷2 ; Parallélogramme : A = base×hauteur",
        "Disque : A = π×r² ; Circonférence = 2×π×r",
      ],
      voixOff:
        "Résumons l'essentiel. Le périmètre est une longueur qui mesure le contour d'une figure, alors que l'aire est une surface qui mesure l'intérieur. Pour un rectangle, le périmètre vaut deux fois la somme des côtés, et l'aire vaut longueur fois largeur. Pour un triangle, on divise par deux le produit base fois hauteur, mais pas pour un parallélogramme. Enfin, pour un disque, l'aire vaut pi fois rayon au carré, et la circonférence vaut deux fois pi fois rayon. Bravo, tu maîtrises maintenant les aires et les périmètres !",
    },
  ],
  fiche: {
    intro:
      "Le périmètre est la longueur du contour d'une figure. L'aire est la mesure de la surface qu'elle occupe. Ce sont deux grandeurs différentes, avec des unités différentes.",
    sections: [
      {
        titre: "Périmètre : la longueur du contour",
        points: [
          "Polygone : on additionne la longueur de tous les côtés",
          "Carré de côté c : P = 4 × c",
          "Rectangle de longueur L et largeur l : P = 2 × (L + l)",
          "Cercle de rayon r : circonférence C = 2 × π × r ≈ 2 × 3,14 × r",
        ],
      },
      {
        titre: "Aire : la mesure de la surface",
        points: [
          "Carré : A = c × c = c² ; Rectangle : A = L × l",
          "Triangle : A = (base × hauteur) ÷ 2",
          "Parallélogramme : A = base × hauteur",
          "Disque de rayon r : A = π × r² ≈ 3,14 × r²",
        ],
      },
      {
        titre: "Unités et conversions",
        points: [
          "Longueurs : mm, cm, dm, m, km (on multiplie/divise par 10 entre unités voisines)",
          "Aires : mm², cm², dm², m², km² (on multiplie/divise par 100 entre unités voisines)",
          "1 cm² = 100 mm² ; 1 m² = 10 000 cm²",
        ],
      },
      {
        titre: "Applications concrètes",
        points: [
          "Peinture, gazon, carrelage → on calcule une aire",
          "Clôture, bordure, cadre → on calcule un périmètre",
          "Toujours vérifier l'unité de la réponse (cm ou cm² ?)",
        ],
      },
    ],
    audio:
      "Fiche de révision : aires et périmètres. Le périmètre est la longueur du contour d'une figure : pour un polygone, on additionne la longueur de tous les côtés. Pour un carré de côté c, le périmètre vaut 4 fois c. Pour un rectangle de longueur L et de largeur l, le périmètre vaut 2 fois la somme de L et l. L'aire, elle, mesure la surface à l'intérieur de la figure. L'aire d'un carré vaut c fois c, celle d'un rectangle vaut longueur fois largeur, celle d'un triangle vaut base fois hauteur divisé par 2, et celle d'un parallélogramme vaut base fois hauteur, sans division. Pour un disque de rayon r, l'aire vaut pi fois r au carré, et la circonférence, c'est-à-dire le tour du cercle, vaut 2 fois pi fois r, avec pi environ égal à 3,14. Attention aux unités : pour les longueurs, on multiplie ou on divise par 10 entre deux unités voisines, mais pour les aires, comme ce sont des unités au carré, on multiplie ou on divise par 100 : un centimètre carré vaut 100 millimètres carrés, et un mètre carré vaut 10 000 centimètres carrés. Dans la vie courante, on calcule une aire pour de la peinture, du gazon ou du carrelage, et un périmètre pour une clôture ou une bordure.",
  },
  memoCards: [
    { recto: "Différence entre périmètre et aire ?", verso: "Le périmètre est une longueur (le tour) ; l'aire est une surface (l'intérieur)." },
    { recto: "Périmètre d'un rectangle L × l ?", verso: "P = 2 × (L + l)" },
    { recto: "Aire d'un rectangle L × l ?", verso: "A = L × l" },
    { recto: "Aire d'un triangle (base × hauteur) ?", verso: "A = (base × hauteur) ÷ 2" },
    { recto: "Aire d'un parallélogramme ?", verso: "A = base × hauteur (pas de division par 2)" },
    { recto: "Aire d'un disque de rayon r ?", verso: "A = π × r² ≈ 3,14 × r²" },
    { recto: "Circonférence d'un cercle de rayon r ?", verso: "C = 2 × π × r ≈ 2 × 3,14 × r" },
    { recto: "1 m² = combien de cm² ?", verso: "1 m² = 10 000 cm² (on multiplie par 100 entre unités d'aire voisines)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un rectangle mesure 6 cm de longueur et 4 cm de largeur. Quel est son périmètre ?",
      choix: ["10 cm", "20 cm", "24 cm", "40 cm"],
      bonneReponse: 1,
      explication: "P = 2×(6+4) = 2×10 = 20 cm.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Ce même rectangle (6 cm × 4 cm) a pour aire :",
      choix: ["10 cm²", "20 cm²", "24 cm²", "40 cm²"],
      bonneReponse: 2,
      explication: "A = 6×4 = 24 cm².",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un carré a un côté de 9 cm. Calcule son périmètre et son aire.",
      reponse: "P = 36 cm et A = 81 cm²",
      explication: "P = 4×9 = 36 cm ; A = 9×9 = 81 cm².",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'aire d'un triangle de base 10 cm et de hauteur 6 cm.",
      reponse: "30 cm²",
      explication: "A = (base×hauteur)÷2 = (10×6)÷2 = 60÷2 = 30 cm².",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un parallélogramme a une base de 8 cm et une hauteur de 5 cm. Son aire est :",
      choix: ["20 cm²", "40 cm²", "13 cm²", "80 cm²"],
      bonneReponse: 1,
      explication: "A = base×hauteur = 8×5 = 40 cm² (pas de division par 2 pour un parallélogramme).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'aire d'un disque de rayon 4 cm (π ≈ 3,14).",
      reponse: "≈ 50,24 cm²",
      explication: "A = π×r² ≈ 3,14×4×4 = 3,14×16 = 50,24 cm².",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule la circonférence d'un cercle de rayon 3 cm (π ≈ 3,14).",
      reponse: "≈ 18,84 cm",
      explication: "C = 2×π×r ≈ 2×3,14×3 = 18,84 cm.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "5 cm², cela représente combien de mm² ?",
      choix: ["50 mm²", "500 mm²", "5 000 mm²", "0,5 mm²"],
      bonneReponse: 1,
      explication: "1 cm² = 100 mm², donc 5 cm² = 5×100 = 500 mm².",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Convertis 3,2 m² en cm².",
      reponse: "32 000 cm²",
      explication: "1 m² = 10 000 cm², donc 3,2 m² = 3,2×10 000 = 32 000 cm².",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un jardin rectangulaire mesure 12 m de long et 7 m de large. On veut poser du gazon sur toute la surface et une clôture tout autour. Calcule la quantité de gazon (aire) et la longueur de clôture (périmètre) nécessaires.",
      reponse: "Gazon : 84 m² ; Clôture : 38 m",
      explication: "Aire = 12×7 = 84 m² (surface de gazon). Périmètre = 2×(12+7) = 2×19 = 38 m (longueur de clôture).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un terrain de basket est un rectangle de 28 m sur 15 m. Combien de m² de peinture faut-il pour couvrir tout le terrain, et quelle longueur fait le tour du terrain ?",
      reponse: "Aire à peindre : 420 m² ; Tour du terrain : 86 m",
      explication: "A = 28×15 = 420 m². P = 2×(28+15) = 2×43 = 86 m.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un carré a un périmètre de 24 cm. Quelle est son aire ?",
      choix: ["24 cm²", "36 cm²", "144 cm²", "6 cm²"],
      bonneReponse: 1,
      explication: "Côté = 24÷4 = 6 cm. Aire = 6×6 = 36 cm².",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle unité mesure une aire ?",
      choix: ["cm", "cm²", "cm³", "km"],
      bonneReponse: 1,
      explication: "L'aire se mesure en unités carrées, comme cm².",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule le périmètre d'un carré de côté 7 cm.",
      reponse: "28 cm",
      explication: "P = 4×7 = 28 cm.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'aire d'un rectangle de 9 cm sur 3 cm.",
      reponse: "27 cm²",
      explication: "A = 9×3 = 27 cm².",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la formule de l'aire d'un triangle ?",
      choix: ["base×hauteur", "base×hauteur÷2", "(base+hauteur)×2", "base÷hauteur"],
      bonneReponse: 1,
      explication: "A = (base×hauteur)÷2.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule l'aire d'un disque de rayon 2 cm (π ≈ 3,14).",
      reponse: "≈ 12,56 cm²",
      explication: "A = π×r² ≈ 3,14×2×2 = 12,56 cm².",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Aires et périmètres",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le périmètre d'une figure, c'est :",
          choix: ["La surface intérieure", "La longueur du contour", "Le nombre de côtés", "La moitié de l'aire"],
          bonneReponse: 1,
          explication: "Le périmètre est la longueur totale du contour de la figure.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule le périmètre d'un rectangle de longueur 11 cm et de largeur 4 cm.",
          reponse: "30 cm",
          explication: "P = 2×(11+4) = 2×15 = 30 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule l'aire de ce même rectangle (11 cm × 4 cm).",
          reponse: "44 cm²",
          explication: "A = 11×4 = 44 cm².",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un triangle a une base de 12 cm et une hauteur de 5 cm. Son aire est :",
          choix: ["60 cm²", "17 cm²", "30 cm²", "6 cm²"],
          bonneReponse: 2,
          explication: "A = (12×5)÷2 = 60÷2 = 30 cm².",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un disque a un rayon de 10 cm. Calcule son aire et sa circonférence (π ≈ 3,14).",
          reponse: "Aire ≈ 314 cm² ; Circonférence ≈ 62,8 cm",
          explication: "A = π×r² ≈ 3,14×100 = 314 cm². C = 2×π×r ≈ 2×3,14×10 = 62,8 cm.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une salle rectangulaire mesure 6 m de long sur 4,5 m de large. On veut poser du carrelage sur tout le sol et une plinthe tout autour. Calcule la surface à carreler et la longueur de plinthe nécessaire.",
          reponse: "Carrelage : 27 m² ; Plinthe : 21 m",
          explication: "A = 6×4,5 = 27 m² (surface à carreler). P = 2×(6+4,5) = 2×10,5 = 21 m (longueur de plinthe).",
        },
      ],
    },
    {
      titre: "Examen 2 — Aires et périmètres",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'aire d'une figure se mesure en :",
          choix: ["mètres", "mètres carrés", "mètres cubes", "litres"],
          bonneReponse: 1,
          explication: "L'aire est une surface, elle se mesure en unités carrées (m², cm²...).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule l'aire d'un carré de côté 8 cm.",
          reponse: "64 cm²",
          explication: "A = 8×8 = 64 cm².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule le périmètre d'un triangle dont les côtés mesurent 5 cm, 7 cm et 9 cm.",
          reponse: "21 cm",
          explication: "On additionne les trois côtés : 5+7+9 = 21 cm.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un parallélogramme a une base de 9 cm et une hauteur de 4 cm. Son aire est :",
          choix: ["13 cm²", "18 cm²", "36 cm²", "26 cm²"],
          bonneReponse: 2,
          explication: "A = base×hauteur = 9×4 = 36 cm² (pas de division par 2 pour un parallélogramme).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Convertis 2,5 m² en cm², puis 750 mm² en cm².",
          reponse: "2,5 m² = 25 000 cm² ; 750 mm² = 7,5 cm²",
          explication: "1 m² = 10 000 cm², donc 2,5×10 000 = 25 000 cm². 1 cm² = 100 mm², donc 750÷100 = 7,5 cm².",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un rond-point circulaire a un rayon de 15 m. On veut engazonner tout le disque central et poser une bordure tout autour. Calcule l'aire à engazonner et la longueur de bordure (π ≈ 3,14).",
          reponse: "Aire ≈ 706,5 m² ; Bordure ≈ 94,2 m",
          explication: "A = π×r² ≈ 3,14×225 = 706,5 m². C = 2×π×r ≈ 2×3,14×15 = 94,2 m.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le périmètre mesure une longueur (le tour d'une figure) ; l'aire mesure une surface (l'intérieur).",
    "Rectangle : P = 2×(L+l) et A = L×l ; Carré : P = 4×c et A = c².",
    "Triangle : A = (base×hauteur)÷2 ; Parallélogramme : A = base×hauteur (sans diviser par 2).",
    "Disque de rayon r : aire A = π×r² et circonférence C = 2×π×r, avec π ≈ 3,14.",
    "Entre deux unités d'aire voisines (mm², cm², dm², m², km²), on multiplie ou on divise par 100, alors que pour les longueurs on multiplie ou on divise par 10.",
    "Erreur à éviter absolument : mélanger périmètre et aire, ou confondre π×r² avec 2×π×r.",
  ],
};

export default chapitre;
