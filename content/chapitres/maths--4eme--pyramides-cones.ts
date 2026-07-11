import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "pyramides-cones",
  titre: "Pyramides et cônes",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Découvrir le vocabulaire des pyramides et des cônes de révolution, et apprendre à calculer leur volume.",
  objectifs: [
    "Connaître le vocabulaire d'une pyramide et d'un cône de révolution",
    "Connaître et utiliser la formule du volume d'une pyramide",
    "Connaître et utiliser la formule du volume d'un cône",
    "Comprendre le lien entre le patron d'un solide et sa surface",
    "Comparer le volume d'une pyramide (ou d'un cône) avec celui d'un prisme (ou d'un cylindre) de même base et même hauteur",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une pyramide ?",
      illustration: "🔺",
      visuel: "base + sommet + hauteur",
      contenu: [
        "Une pyramide a une base polygonale et des faces triangulaires qui se rejoignent en un sommet",
        "La hauteur est la distance entre le sommet et le plan de la base, mesurée perpendiculairement",
        "On nomme une pyramide selon la forme de sa base (pyramide à base carrée, triangulaire...)",
        "Exemple célèbre : les pyramides d'Égypte, à base carrée",
      ],
      voixOff:
        "Une pyramide est un solide dont la base est un polygone, et dont les faces latérales sont des triangles qui se rejoignent tous en un même point, le sommet. La hauteur est la distance entre ce sommet et le plan de la base, mesurée perpendiculairement. On nomme une pyramide selon la forme de sa base : pyramide à base carrée, à base triangulaire, et ainsi de suite. Les pyramides d'Égypte sont un exemple célèbre de pyramides à base carrée.",
    },
    {
      titre: "Qu'est-ce qu'un cône de révolution ?",
      illustration: "🍦",
      visuel: "base circulaire + sommet",
      contenu: [
        "Un cône de révolution a une base circulaire et un sommet",
        "La hauteur relie le sommet au centre du cercle de base, perpendiculairement",
        "La génératrice est le segment qui relie le sommet à un point du cercle de base",
        "On obtient un cône en faisant tourner un triangle rectangle autour d'un de ses côtés",
      ],
      voixOff:
        "Un cône de révolution est un solide dont la base est un cercle, et qui possède un sommet. La hauteur relie ce sommet au centre du cercle de base, perpendiculairement. La génératrice est le segment qui relie le sommet à un point quelconque du cercle de base. On peut construire un cône en faisant tourner un triangle rectangle autour d'un de ses côtés, comme une toupie.",
    },
    {
      titre: "Le volume d'une pyramide",
      illustration: "📐",
      visuel: "V = (aire base × hauteur) / 3",
      contenu: [
        "V = (aire de la base × hauteur) ÷ 3",
        "Une pyramide a un volume 3 fois plus petit qu'un prisme de même base et de même hauteur",
        "L'aire de la base dépend de la forme (carré, triangle, rectangle...)",
        "Le résultat s'exprime en unités de volume (cm³, m³...)",
      ],
      voixOff:
        "Le volume d'une pyramide se calcule ainsi : on multiplie l'aire de la base par la hauteur, puis on divise par trois. Une pyramide a donc un volume trois fois plus petit qu'un prisme de même base et de même hauteur. L'aire de la base dépend bien sûr de sa forme : carrée, triangulaire, rectangulaire. Le résultat s'exprime toujours en unités de volume, comme le centimètre cube ou le mètre cube.",
    },
    {
      titre: "Exemple de calcul de volume de pyramide",
      illustration: "🧮",
      visuel: "base carrée 6 cm, hauteur 10 cm",
      contenu: [
        "Pyramide à base carrée de côté 6 cm, hauteur 10 cm",
        "Aire de la base = 6 × 6 = 36 cm²",
        "V = (36 × 10) ÷ 3 = 360 ÷ 3 = 120 cm³",
        "On calcule toujours l'aire de la base avant d'appliquer la formule",
      ],
      voixOff:
        "Prenons une pyramide à base carrée de six centimètres de côté, et de dix centimètres de hauteur. On calcule d'abord l'aire de la base : six fois six, soit trente-six centimètres carrés. Puis on applique la formule : trente-six fois dix, divisé par trois, soit trois cent soixante divisé par trois, soit cent vingt centimètres cubes. Retiens bien qu'il faut toujours calculer l'aire de la base avant d'appliquer la formule du volume.",
    },
    {
      titre: "Le volume d'un cône",
      illustration: "🍦",
      visuel: "V = (π × r² × h) / 3",
      contenu: [
        "V = (π × r² × hauteur) ÷ 3",
        "π × r² est l'aire du disque de base",
        "Comme pour la pyramide, on divise par 3 par rapport au cylindre de même base",
        "On utilise souvent π ≈ 3,14",
      ],
      voixOff:
        "Le volume d'un cône suit une formule très proche : pi fois le rayon au carré, fois la hauteur, le tout divisé par trois. Pi fois le rayon au carré, c'est simplement l'aire du disque de base. Comme pour la pyramide, on divise par trois par rapport à un cylindre de même base et même hauteur. On utilise souvent la valeur approchée pi environ trois virgule quatorze.",
    },
    {
      titre: "Exemple de calcul de volume de cône",
      illustration: "🧮",
      visuel: "r = 3 cm, h = 8 cm",
      contenu: [
        "Cône de rayon 3 cm et de hauteur 8 cm",
        "V = (π × 3² × 8) ÷ 3 = (π × 9 × 8) ÷ 3 = 72π ÷ 3 = 24π",
        "Avec π ≈ 3,14 : V ≈ 24 × 3,14 ≈ 75,4 cm³",
        "On peut laisser le résultat en fonction de π ou donner une valeur arrondie",
      ],
      voixOff:
        "Prenons un cône de trois centimètres de rayon et de huit centimètres de hauteur. On calcule : pi fois trois au carré, fois huit, divisé par trois, ce qui donne pi fois neuf fois huit, divisé par trois, soit soixante-douze pi divisé par trois, soit vingt-quatre pi. En prenant pi environ égal à trois virgule quatorze, on obtient environ soixante-quinze virgule quatre centimètres cubes. On peut laisser le résultat en fonction de pi, ou donner une valeur arrondie.",
    },
    {
      titre: "Le patron d'une pyramide et d'un cône",
      illustration: "✂️",
      visuel: "patron = figure à plat",
      contenu: [
        "Le patron est la figure plane qu'on obtient en « dépliant » le solide",
        "Le patron d'une pyramide : la base + autant de triangles que de côtés",
        "Le patron d'un cône : un disque (la base) + un secteur circulaire (la surface latérale)",
        "Le patron permet de calculer l'aire totale de la surface du solide",
      ],
      voixOff:
        "Le patron d'un solide, c'est la figure plane obtenue en le dépliant complètement. Le patron d'une pyramide est composé de sa base, plus un triangle pour chaque côté de cette base. Le patron d'un cône est composé d'un disque, qui est la base, et d'un secteur circulaire, qui représente la surface latérale. Le patron permet de calculer l'aire totale de la surface du solide.",
    },
    {
      titre: "Comparer avec le prisme et le cylindre",
      illustration: "⚖️",
      visuel: "V pyramide = V prisme ÷ 3",
      contenu: [
        "Un prisme droit a un volume = aire de la base × hauteur",
        "Une pyramide de même base et même hauteur a un volume 3 fois plus petit",
        "Un cylindre a un volume = π × r² × hauteur",
        "Un cône de même base et même hauteur a lui aussi un volume 3 fois plus petit",
      ],
      voixOff:
        "Il est utile de comparer ces solides à ceux que tu connais déjà. Un prisme droit a un volume égal à l'aire de la base multipliée par la hauteur. Une pyramide de même base et de même hauteur a un volume trois fois plus petit. De même, un cylindre a un volume égal à pi fois le rayon au carré, fois la hauteur. Un cône de même base et de même hauteur a lui aussi un volume trois fois plus petit que ce cylindre.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Pyramide : base polygonale + faces triangulaires se rejoignant en un sommet",
        "Cône de révolution : base circulaire + sommet, relié par la hauteur",
        "V(pyramide) = (aire base × hauteur) ÷ 3",
        "V(cône) = (π × r² × hauteur) ÷ 3",
      ],
      voixOff:
        "Résumons. Une pyramide a une base polygonale et des faces triangulaires qui se rejoignent en un sommet. Un cône de révolution a une base circulaire et un sommet, reliés par la hauteur. Le volume d'une pyramide s'obtient en multipliant l'aire de la base par la hauteur, puis en divisant par trois. Le volume d'un cône s'obtient en multipliant pi, le rayon au carré et la hauteur, puis en divisant par trois. Ces deux solides ont toujours un volume trois fois plus petit qu'un prisme ou un cylindre de même base et de même hauteur.",
    },
  ],
  fiche: {
    intro:
      "La pyramide et le cône de révolution sont des solides qui se terminent en un sommet. Leur volume s'obtient toujours en divisant par 3 le produit de l'aire de la base par la hauteur.",
    sections: [
      {
        titre: "Vocabulaire de la pyramide et du cône",
        points: [
          "Pyramide : base polygonale, faces triangulaires, sommet, hauteur perpendiculaire à la base",
          "Cône de révolution : base circulaire, sommet, hauteur, génératrice (segment sommet-cercle)",
        ],
      },
      {
        titre: "Volume de la pyramide",
        points: [
          "V = (aire de la base × hauteur) ÷ 3",
          "Exemple : base carrée de 6 cm, hauteur 10 cm → V = (36 × 10) ÷ 3 = 120 cm³",
        ],
      },
      {
        titre: "Volume du cône",
        points: [
          "V = (π × r² × hauteur) ÷ 3",
          "Exemple : rayon 3 cm, hauteur 8 cm → V = 24π ≈ 75,4 cm³",
        ],
      },
      {
        titre: "Patron et comparaison",
        points: [
          "Le patron est la figure plane obtenue en dépliant le solide",
          "Patron pyramide : base + triangles ; patron cône : disque + secteur circulaire",
          "Pyramide et cône ont un volume 3 fois plus petit qu'un prisme/cylindre de même base et même hauteur",
        ],
      },
    ],
    audio:
      "Fiche de révision : les pyramides et les cônes. Une pyramide a une base polygonale et des faces triangulaires qui se rejoignent en un sommet ; la hauteur relie ce sommet au plan de la base, perpendiculairement. Un cône de révolution a une base circulaire et un sommet, reliés par la hauteur ; la génératrice est le segment qui relie le sommet à un point du cercle de base. Le volume d'une pyramide se calcule en multipliant l'aire de la base par la hauteur, puis en divisant par trois. Le volume d'un cône se calcule en multipliant pi, le rayon au carré, et la hauteur, puis en divisant par trois également. Le patron d'un solide est la figure plane obtenue en le dépliant : celui d'une pyramide comprend la base et un triangle par côté, celui d'un cône comprend un disque et un secteur circulaire. Enfin, une pyramide ou un cône a toujours un volume trois fois plus petit qu'un prisme ou un cylindre de même base et de même hauteur.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une pyramide ?", verso: "Un solide à base polygonale dont les faces triangulaires se rejoignent en un sommet." },
    { recto: "Qu'est-ce qu'un cône de révolution ?", verso: "Un solide à base circulaire, avec un sommet relié au centre de la base par la hauteur." },
    { recto: "Formule du volume d'une pyramide ?", verso: "V = (aire de la base × hauteur) ÷ 3." },
    { recto: "Formule du volume d'un cône ?", verso: "V = (π × r² × hauteur) ÷ 3." },
    { recto: "Pyramide base carrée 6 cm, hauteur 10 cm : volume ?", verso: "Aire base = 36 cm², V = (36×10)÷3 = 120 cm³." },
    { recto: "Cône rayon 3 cm, hauteur 8 cm : volume ?", verso: "V = (π×9×8)÷3 = 24π ≈ 75,4 cm³." },
    { recto: "Qu'est-ce que le patron d'un solide ?", verso: "La figure plane obtenue en dépliant complètement le solide." },
    { recto: "Comment comparer le volume d'une pyramide à celui d'un prisme de même base et hauteur ?", verso: "Le volume de la pyramide est 3 fois plus petit que celui du prisme (idem pour cône et cylindre)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une pyramide a une base carrée et des faces triangulaires. Comment s'appelle le point où se rejoignent les faces triangulaires ?",
      choix: ["Le sommet", "La base", "L'apothème", "La génératrice"],
      bonneReponse: 0,
      explication: "Toutes les faces triangulaires d'une pyramide se rejoignent en un même point, le sommet.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la formule du volume d'une pyramide ?",
      choix: ["(aire base × hauteur) ÷ 3", "aire base × hauteur", "(aire base × hauteur) × 3", "aire base + hauteur"],
      bonneReponse: 0,
      explication: "Le volume d'une pyramide est le tiers du produit de l'aire de sa base par sa hauteur.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Une pyramide a une base d'aire 20 cm² et une hauteur de 9 cm. Calcule son volume.",
      reponse: "60 cm³",
      explication: "V = (20 × 9) ÷ 3 = 180 ÷ 3 = 60 cm³.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un cône de révolution a une base :",
      choix: ["Circulaire", "Carrée", "Triangulaire", "Rectangulaire"],
      bonneReponse: 0,
      explication: "La base d'un cône de révolution est toujours un cercle (un disque).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une pyramide à base carrée de côté 5 cm a une hauteur de 12 cm. Calcule son volume.",
      reponse: "100 cm³",
      explication: "Aire de la base = 5 × 5 = 25 cm². V = (25 × 12) ÷ 3 = 300 ÷ 3 = 100 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la formule du volume d'un cône de rayon r et de hauteur h ?",
      choix: ["(π × r² × h) ÷ 3", "π × r² × h", "(π × r × h) ÷ 3", "π × r² + h"],
      bonneReponse: 0,
      explication: "Le volume d'un cône est le tiers du produit de l'aire de sa base (π×r²) par sa hauteur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un cône a un rayon de 4 cm et une hauteur de 6 cm. Calcule son volume en fonction de π, puis une valeur arrondie (π ≈ 3,14).",
      reponse: "32π cm³ ≈ 100,48 cm³",
      explication: "V = (π × 4² × 6) ÷ 3 = (π × 16 × 6) ÷ 3 = 96π ÷ 3 = 32π ≈ 32 × 3,14 ≈ 100,48 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un prisme droit et une pyramide ont la même base et la même hauteur. Quel est le rapport entre leurs volumes ?",
      choix: [
        "Le volume de la pyramide est le tiers de celui du prisme",
        "Ils sont égaux",
        "Le volume de la pyramide est le double de celui du prisme",
        "Le volume de la pyramide représente les deux tiers de celui du prisme",
      ],
      bonneReponse: 0,
      explication: "Une pyramide a toujours un volume 3 fois plus petit qu'un prisme de même base et même hauteur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une pyramide à base rectangulaire (8 cm × 5 cm) a un volume de 200 cm³. Calcule sa hauteur.",
      reponse: "15 cm",
      explication: "Aire de la base = 8 × 5 = 40 cm². 200 = (40 × h) ÷ 3, donc 40h = 600, soit h = 15 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un cône a un volume de 150π cm³ et une hauteur de 18 cm. Calcule le rayon de sa base.",
      reponse: "5 cm",
      explication: "150π = (π × r² × 18) ÷ 3 = 6π × r², donc r² = 150 ÷ 6 = 25, soit r = 5 cm.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une pyramide à base carrée de côté 4 cm a un volume de 48 cm³. Quelle est sa hauteur ?",
      choix: ["9 cm", "12 cm", "3 cm", "16 cm"],
      bonneReponse: 0,
      explication: "Aire de la base = 4 × 4 = 16 cm². 48 = (16 × h) ÷ 3, donc 16h = 144, soit h = 9 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un silo à grains a la forme d'un cône renversé de rayon 2 m et de hauteur 4,5 m. Calcule le volume de grains qu'il peut contenir, arrondi au dixième (π ≈ 3,14).",
      reponse: "Environ 18,8 m³",
      explication: "V = (π × 2² × 4,5) ÷ 3 = (π × 4 × 4,5) ÷ 3 = 18π ÷ 3 = 6π ≈ 6 × 3,14 ≈ 18,8 m³.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment s'appelle la distance entre le sommet d'une pyramide et le plan de sa base ?",
      choix: ["La hauteur", "La génératrice", "L'apothème", "Le rayon"],
      bonneReponse: 0,
      explication: "C'est la hauteur, mesurée perpendiculairement au plan de la base.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Une pyramide a une base d'aire 15 cm² et une hauteur de 6 cm. Calcule son volume.",
      reponse: "30 cm³",
      explication: "V = (15 × 6) ÷ 3 = 90 ÷ 3 = 30 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un cône a un rayon de 5 cm et une hauteur de 9 cm. Quel est son volume en fonction de π ?",
      choix: ["75π cm³", "225π cm³", "25π cm³", "45π cm³"],
      bonneReponse: 0,
      explication: "V = (π × 5² × 9) ÷ 3 = (π × 25 × 9) ÷ 3 = 225π ÷ 3 = 75π cm³.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une pyramide à base carrée de côté 7 cm a une hauteur de 6 cm. Calcule son volume.",
      reponse: "98 cm³",
      explication: "Aire de la base = 7 × 7 = 49 cm². V = (49 × 6) ÷ 3 = 294 ÷ 3 = 98 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un cône a un volume de 100π cm³ et un rayon de 5 cm. Calcule sa hauteur.",
      reponse: "12 cm",
      explication: "100π = (π × 25 × h) ÷ 3, donc 300 = 25h, soit h = 12 cm.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Pyramides et cônes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment appelle-t-on la base d'un cône de révolution ?",
          choix: ["Un cercle (ou disque)", "Un carré", "Un triangle", "Un rectangle"],
          bonneReponse: 0,
          explication: "Un cône de révolution a toujours une base circulaire.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Une pyramide a une base d'aire 27 cm² et une hauteur de 5 cm. Calcule son volume.",
          reponse: "45 cm³",
          explication: "V = (27 × 5) ÷ 3 = 135 ÷ 3 = 45 cm³.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une pyramide à base carrée de côté 6 cm a une hauteur de 8 cm. Quel est son volume ?",
          choix: ["96 cm³", "288 cm³", "48 cm³", "24 cm³"],
          bonneReponse: 0,
          explication: "Aire de la base = 36 cm². V = (36 × 8) ÷ 3 = 288 ÷ 3 = 96 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un cône a un rayon de 3 cm et une hauteur de 10 cm. Calcule son volume en fonction de π.",
          reponse: "30π cm³",
          explication: "V = (π × 3² × 10) ÷ 3 = (π × 9 × 10) ÷ 3 = 90π ÷ 3 = 30π cm³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Une pyramide à base carrée de côté 5 cm a un volume de 75 cm³. Calcule sa hauteur.",
          reponse: "9 cm",
          explication: "Aire de la base = 25 cm². 75 = (25 × h) ÷ 3, donc 25h = 225, soit h = 9 cm.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un chapeau de fête a la forme d'un cône de rayon 6 cm et de hauteur 8 cm. Calcule le volume de ce cône, arrondi au dixième (π ≈ 3,14).",
          reponse: "Environ 301,4 cm³",
          explication: "V = (π × 6² × 8) ÷ 3 = (π × 36 × 8) ÷ 3 = 288π ÷ 3 = 96π ≈ 96 × 3,14 ≈ 301,4 cm³.",
        },
      ],
    },
    {
      titre: "Examen 2 — Pyramides et cônes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment s'appelle le segment qui relie le sommet d'un cône à un point du cercle de base ?",
          choix: ["La génératrice", "La hauteur", "Le rayon", "L'apothème"],
          bonneReponse: 0,
          explication: "C'est la génératrice du cône.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un cône a un rayon de 2 cm et une hauteur de 3 cm. Calcule son volume en fonction de π.",
          reponse: "4π cm³",
          explication: "V = (π × 2² × 3) ÷ 3 = (π × 4 × 3) ÷ 3 = 12π ÷ 3 = 4π cm³.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une pyramide à base rectangulaire (4 cm × 6 cm) a une hauteur de 9 cm. Quel est son volume ?",
          choix: ["72 cm³", "216 cm³", "36 cm³", "48 cm³"],
          bonneReponse: 0,
          explication: "Aire de la base = 4 × 6 = 24 cm². V = (24 × 9) ÷ 3 = 216 ÷ 3 = 72 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une pyramide a une base d'aire 18 cm² et une hauteur de 11 cm. Calcule son volume.",
          reponse: "66 cm³",
          explication: "V = (18 × 11) ÷ 3 = 198 ÷ 3 = 66 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un cône a un volume de 48π cm³ et une hauteur de 9 cm. Calcule le rayon de sa base.",
          reponse: "4 cm",
          explication: "48π = (π × r² × 9) ÷ 3 = 3π × r², donc r² = 48 ÷ 3 = 16, soit r = 4 cm.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un tas de sable a la forme d'un cône de rayon 1,5 m et de hauteur 2 m. Calcule le volume de sable, arrondi au centième (π ≈ 3,14).",
          reponse: "Environ 4,71 m³",
          explication: "V = (π × 1,5² × 2) ÷ 3 = (π × 2,25 × 2) ÷ 3 = 4,5π ÷ 3 = 1,5π ≈ 1,5 × 3,14 ≈ 4,71 m³.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Pyramide : base polygonale et faces triangulaires se rejoignant en un sommet ; la hauteur est perpendiculaire à la base.",
    "Cône de révolution : base circulaire et sommet ; la génératrice relie le sommet à un point du cercle de base.",
    "Volume de la pyramide : V = (aire de la base × hauteur) ÷ 3.",
    "Volume du cône : V = (π × r² × hauteur) ÷ 3.",
    "Une pyramide (ou un cône) a un volume 3 fois plus petit qu'un prisme (ou un cylindre) de même base et de même hauteur.",
    "Toujours calculer l'aire de la base en premier, puis appliquer la formule du volume sans oublier de diviser par 3.",
  ],
};

export default chapitre;
