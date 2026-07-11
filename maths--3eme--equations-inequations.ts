import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "equations-inequations",
  titre: "Équations et inéquations",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Résoudre des équations du premier degré, des équations produit-nul, des inéquations, et mettre un problème en équation : les outils indispensables pour le brevet.",
  objectifs: [
    "Résoudre une équation du premier degré à une inconnue",
    "Résoudre une équation produit-nul",
    "Résoudre une inéquation et représenter sa solution sur une droite graduée",
    "Mettre un problème concret en équation",
    "Vérifier une solution en la substituant dans l'équation",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une équation ?",
      illustration: "⚖️",
      visuel: "3x + 2 = 11",
      contenu: [
        "Une équation est une égalité contenant une inconnue, souvent notée x",
        "Résoudre l'équation, c'est trouver la ou les valeurs de x qui rendent l'égalité vraie",
        "Exemple : 3x + 2 = 11 → la solution est x = 3",
        "On vérifie : 3 × 3 + 2 = 9 + 2 = 11 ✔",
      ],
      voixOff:
        "Une équation est une égalité qui contient une inconnue, en général appelée x. Résoudre une équation, c'est trouver la valeur ou les valeurs de x qui rendent cette égalité vraie. Par exemple, dans trois x plus deux égale onze, la solution est x égale trois. On vérifie toujours en remplaçant x par la valeur trouvée : trois fois trois plus deux égale onze, c'est correct.",
    },
    {
      titre: "Les deux règles pour résoudre",
      illustration: "🔧",
      visuel: "règle 1 : + / − ; règle 2 : × / ÷",
      contenu: [
        "Règle 1 : on peut ajouter ou soustraire le même nombre des deux côtés",
        "Règle 2 : on peut multiplier ou diviser les deux côtés par le même nombre non nul",
        "Le but : isoler x tout seul d'un côté de l'égalité",
        "On garde toujours l'égalité équilibrée, comme une balance",
      ],
      voixOff:
        "Deux règles permettent de résoudre une équation, comme si on manipulait une balance. Première règle : on peut ajouter ou soustraire le même nombre des deux côtés sans changer l'égalité. Deuxième règle : on peut multiplier ou diviser les deux côtés par un même nombre non nul. Le but est toujours d'isoler x tout seul d'un côté.",
    },
    {
      titre: "Résoudre une équation, étape par étape",
      illustration: "📝",
      visuel: "5x − 7 = 2x + 8",
      contenu: [
        "5x − 7 = 2x + 8",
        "On regroupe les x à gauche : 5x − 2x − 7 = 8, soit 3x − 7 = 8",
        "On isole 3x : 3x = 8 + 7 = 15",
        "On isole x : x = 15 ÷ 3 = 5",
      ],
      voixOff:
        "Prenons un exemple complet : cinq x moins sept égale deux x plus huit. On regroupe d'abord les termes en x du même côté, en soustrayant deux x de chaque côté : il reste trois x moins sept égale huit. On isole ensuite trois x en ajoutant sept des deux côtés : trois x égale quinze. Enfin, on divise par trois : x égale cinq.",
    },
    {
      titre: "Équation produit-nul",
      illustration: "🎯",
      visuel: "(x − 4)(2x + 6) = 0",
      contenu: [
        "Un produit de facteurs est nul si et seulement si l'un des facteurs est nul",
        "(x − 4)(2x + 6) = 0",
        "x − 4 = 0 ou 2x + 6 = 0",
        "x = 4 ou x = −3 : deux solutions",
      ],
      voixOff:
        "Quand une équation se présente sous forme d'un produit égal à zéro, on utilise la règle du produit nul : un produit est nul si et seulement si l'un au moins de ses facteurs est nul. Pour x moins quatre, fois deux x plus six, égale zéro, on résout chaque facteur séparément : x égale quatre, ou x égale moins trois.",
    },
    {
      titre: "Qu'est-ce qu'une inéquation ?",
      illustration: "📏",
      visuel: "2x + 3 < 11  →  x < 4",
      contenu: [
        "Une inéquation compare deux expressions avec <, >, ≤ ou ≥",
        "On résout comme une équation, avec les mêmes règles d'addition/soustraction",
        "Attention : en multipliant/divisant par un nombre NÉGATIF, on inverse le sens de l'inégalité !",
        "Exemple : 2x + 3 < 11 → 2x < 8 → x < 4",
      ],
      voixOff:
        "Une inéquation ressemble à une équation, mais avec un signe d'inégalité : plus petit que, plus grand que, ou leurs versions avec égalité. On la résout avec les mêmes règles que pour une équation, mais il y a un piège important : si on multiplie ou si on divise les deux côtés par un nombre négatif, il faut inverser le sens de l'inégalité. Par exemple, deux x plus trois plus petit que onze donne deux x plus petit que huit, donc x plus petit que quatre.",
    },
    {
      titre: "Le piège du nombre négatif",
      illustration: "⚠️",
      visuel: "−3x > 12  →  x < −4",
      contenu: [
        "−3x > 12",
        "On divise par −3 (nombre négatif) : le sens de l'inégalité s'inverse",
        "x < 12 ÷ (−3) = −4",
        "Vérification avec x = −5 : −3 × (−5) = 15 > 12 ✔",
      ],
      voixOff:
        "Illustrons le piège du nombre négatif avec moins trois x plus grand que douze. Pour isoler x, on divise par moins trois, un nombre négatif, donc le sens de l'inégalité s'inverse : plus grand que devient plus petit que. On obtient x plus petit que moins quatre. On peut vérifier avec x égale moins cinq : moins trois fois moins cinq égale quinze, qui est bien plus grand que douze.",
    },
    {
      titre: "Représenter la solution sur une droite graduée",
      illustration: "📈",
      visuel: "x ≥ 2 : ○ ou ● en 2, hachures vers la droite",
      contenu: [
        "Crochet fermé [ ou point plein ● : la borne est incluse (≤ ou ≥)",
        "Crochet ouvert ] ou point vide ○ : la borne est exclue (< ou >)",
        "x ≥ 2 : point plein en 2, hachures vers la droite (vers les grands nombres)",
        "x < 5 : point vide en 5, hachures vers la gauche",
      ],
      voixOff:
        "La solution d'une inéquation se représente sur une droite graduée. On utilise un point plein, ou un crochet fermé, quand la valeur limite est incluse, c'est-à-dire avec les signes inférieur ou égal, ou supérieur ou égal. On utilise un point vide, ou un crochet ouvert, quand la valeur est exclue, avec les signes strictement inférieur ou strictement supérieur. Ensuite, on hachure la partie de la droite qui correspond aux solutions.",
    },
    {
      titre: "Mettre un problème en équation",
      illustration: "🧠",
      visuel: "périmètre = 2(L + l) = 30",
      contenu: [
        "1. Choisir l'inconnue et la nommer clairement (« soit x... »)",
        "2. Traduire l'énoncé en expression mathématique",
        "3. Résoudre l'équation obtenue",
        "4. Vérifier et répondre à la question posée avec une phrase",
      ],
      voixOff:
        "Pour résoudre un problème concret, on suit toujours la même méthode. D'abord, on choisit l'inconnue et on la nomme clairement, par exemple : soit x la longueur cherchée. Ensuite, on traduit les informations de l'énoncé par une équation. On résout cette équation avec les règles vues précédemment. Enfin, on vérifie le résultat et on répond à la question posée par une phrase complète, avec l'unité.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Résoudre une équation : regrouper les x d'un côté, les nombres de l'autre",
        "Produit nul : A × B = 0 ⟺ A = 0 ou B = 0",
        "Inéquation : mêmes règles, MAIS on inverse le sens en multipliant/divisant par un négatif",
        "Toujours vérifier la solution en la substituant dans l'équation ou l'inéquation de départ",
      ],
      voixOff:
        "Résumons ce chapitre essentiel pour le brevet. Pour résoudre une équation, on regroupe les termes en x d'un côté et les nombres de l'autre, en gardant l'égalité équilibrée. Pour une équation produit-nul, on annule chaque facteur séparément. Pour une inéquation, les mêmes règles s'appliquent, mais attention : multiplier ou diviser par un nombre négatif inverse le sens de l'inégalité. Et n'oublie jamais de vérifier ta solution en la remplaçant dans l'équation de départ !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre regroupe la résolution d'équations et d'inéquations du premier degré, la mise en équation de problèmes concrets, et la représentation des solutions sur une droite graduée : des compétences testées à chaque brevet.",
    sections: [
      {
        titre: "Résoudre une équation",
        points: [
          "On peut ajouter/soustraire le même nombre des deux côtés",
          "On peut multiplier/diviser les deux côtés par un même nombre NON NUL",
          "Méthode : regrouper les x d'un côté, les nombres de l'autre, puis isoler x",
        ],
      },
      {
        titre: "Équation produit-nul",
        points: [
          "A × B = 0 équivaut à A = 0 ou B = 0",
          "On factorise d'abord si nécessaire, puis on résout chaque facteur",
        ],
      },
      {
        titre: "Inéquations",
        points: [
          "Mêmes règles que pour une équation pour additionner/soustraire",
          "Multiplier/diviser par un nombre NÉGATIF inverse le sens de l'inégalité",
          "Solution représentée sur une droite graduée : point plein (inclus) ou vide (exclu)",
        ],
      },
      {
        titre: "Mettre un problème en équation",
        points: [
          "Choisir et nommer l'inconnue",
          "Traduire l'énoncé en équation",
          "Résoudre, vérifier, puis répondre par une phrase avec l'unité",
        ],
      },
    ],
    audio:
      "Fiche de révision : équations et inéquations. Résoudre une équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie. On peut ajouter ou soustraire un même nombre des deux côtés, ou multiplier ou diviser par un même nombre non nul, pour isoler x. Pour une équation produit-nul, un produit de facteurs est nul si et seulement si l'un des facteurs est nul : on résout alors chaque facteur séparément. Pour une inéquation, les mêmes règles s'appliquent, avec un piège important : multiplier ou diviser par un nombre négatif inverse le sens de l'inégalité. La solution d'une inéquation se représente sur une droite graduée, avec un point plein si la valeur est incluse, un point vide si elle est exclue. Enfin, pour mettre un problème concret en équation, on nomme l'inconnue, on traduit l'énoncé, on résout, puis on répond par une phrase.",
  },
  memoCards: [
    { recto: "Comment résoudre 4x + 3 = 19 ?", verso: "4x = 19 − 3 = 16, donc x = 16 ÷ 4 = 4." },
    { recto: "Règle du produit nul ?", verso: "A × B = 0 équivaut à A = 0 ou B = 0." },
    { recto: "Que se passe-t-il quand on divise une inéquation par un nombre négatif ?", verso: "Le sens de l'inégalité s'inverse." },
    { recto: "Comment noter une borne incluse sur une droite graduée ?", verso: "Un point plein ● ou un crochet fermé [ (signes ≤ ou ≥)." },
    { recto: "Comment noter une borne exclue sur une droite graduée ?", verso: "Un point vide ○ ou un crochet ouvert ] (signes < ou >)." },
    { recto: "Les 4 étapes pour mettre un problème en équation ?", verso: "1. Nommer l'inconnue. 2. Traduire en équation. 3. Résoudre. 4. Vérifier et répondre par une phrase." },
    { recto: "Comment vérifier une solution d'équation ?", verso: "On remplace x par la valeur trouvée dans l'équation de départ et on vérifie l'égalité." },
    { recto: "Peut-on diviser une équation par 0 ?", verso: "Non, jamais : la division par 0 est impossible." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous l'équation x + 7 = 12.",
      choix: ["x = 5", "x = 19", "x = −5", "x = 84"],
      bonneReponse: 0,
      explication: "x = 12 − 7 = 5.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous l'équation 6x = 24.",
      choix: ["x = 18", "x = 4", "x = 144", "x = 30"],
      bonneReponse: 1,
      explication: "x = 24 ÷ 6 = 4.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Résous l'équation 3x − 5 = 10.",
      reponse: "x = 5",
      explication: "3x = 10 + 5 = 15, donc x = 15 ÷ 3 = 5.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Sur une droite graduée, comment représente-t-on x ≤ 3 ?",
      choix: [
        "Point vide en 3, hachures vers la gauche",
        "Point plein en 3, hachures vers la droite",
        "Point plein en 3, hachures vers la gauche",
        "Point vide en 3, hachures vers la droite",
      ],
      bonneReponse: 2,
      explication: "≤ inclut la valeur 3 (point plein) et concerne les nombres plus petits (hachures vers la gauche).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous l'équation 5x + 4 = 2x + 19.",
      reponse: "x = 5",
      explication: "5x − 2x = 19 − 4, donc 3x = 15, donc x = 5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous l'inéquation 3x − 2 > 10.",
      reponse: "x > 4",
      explication: "3x > 10 + 2 = 12, donc x > 12 ÷ 3 = 4. On divise par 3, positif, le sens ne change pas.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous l'inéquation −2x ≤ 8.",
      choix: ["x ≤ −4", "x ≥ −4", "x ≤ 4", "x ≥ 4"],
      bonneReponse: 1,
      explication: "On divise par −2 (négatif) : le sens s'inverse. x ≥ 8 ÷ (−2) = −4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous l'équation (x − 6)(x + 1) = 0.",
      reponse: "x = 6 ou x = −1",
      explication: "x − 6 = 0 donne x = 6 ; x + 1 = 0 donne x = −1.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un rectangle a une longueur qui mesure 5 cm de plus que sa largeur. Son périmètre est 46 cm. Détermine la largeur et la longueur de ce rectangle.",
      reponse: "Largeur = 9 cm ; longueur = 14 cm",
      explication:
        "Soit x la largeur. Longueur = x + 5. Périmètre = 2(x + x + 5) = 46, donc 2(2x + 5) = 46, donc 4x + 10 = 46, donc 4x = 36, donc x = 9. Largeur = 9 cm, longueur = 9 + 5 = 14 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous l'inéquation 4(x − 1) ≤ 2x + 8, puis représente la solution sur une droite graduée (décris-la).",
      reponse: "x ≤ 6 ; sur la droite graduée, point plein en 6, hachures vers la gauche.",
      explication: "4x − 4 ≤ 2x + 8, donc 4x − 2x ≤ 8 + 4, donc 2x ≤ 12, donc x ≤ 6.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Léa a 15 ans de plus que son frère. Dans 5 ans, elle aura le double de l'âge de son frère. Quel est l'âge actuel du frère ?",
      choix: ["10 ans", "15 ans", "20 ans", "25 ans"],
      bonneReponse: 0,
      explication:
        "Soit x l'âge actuel du frère. Dans 5 ans : frère = x+5, Léa = x+15+5 = x+20. On résout x+20 = 2(x+5), donc x+20 = 2x+10, donc x = 10.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une salle de sport propose deux formules : Formule A : 20 € par mois. Formule B : 50 € d'inscription puis 12 € par mois. À partir de combien de mois la formule B devient-elle plus avantageuse que la formule A ?",
      reponse: "À partir de 7 mois.",
      explication:
        "On résout 50 + 12x < 20x, donc 50 < 20x − 12x, donc 50 < 8x, donc x > 6,25. Le nombre de mois étant entier, la formule B devient plus avantageuse à partir de 7 mois.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous l'équation x − 4 = 9.",
      choix: ["x = 5", "x = 13", "x = −5", "x = 36"],
      bonneReponse: 1,
      explication: "x = 9 + 4 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Résous l'équation 2x + 6 = 20.",
      reponse: "x = 7",
      explication: "2x = 20 − 6 = 14, donc x = 7.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous l'inéquation 5x − 3 ≤ 17.",
      reponse: "x ≤ 4",
      explication: "5x ≤ 20, donc x ≤ 4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous l'équation (x + 3)(x − 8) = 0.",
      choix: ["x = 3 et x = 8", "x = −3 ou x = 8", "x = 3 ou x = −8", "x = −3 et x = −8"],
      bonneReponse: 1,
      explication: "x + 3 = 0 donne x = −3 ; x − 8 = 0 donne x = 8.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "La somme de trois nombres entiers consécutifs est 72. Détermine ces trois nombres.",
      reponse: "23, 24 et 25.",
      explication: "Soit x, x+1, x+2 les trois nombres. x + x+1 + x+2 = 72, donc 3x+3 = 72, donc 3x = 69, donc x = 23.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Équations et inéquations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Résous l'équation 7x = 63.",
          choix: ["x = 9", "x = 56", "x = 70", "x = 7"],
          bonneReponse: 0,
          explication: "x = 63 ÷ 7 = 9.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Résous l'équation 4x + 5 = 33.",
          reponse: "x = 7",
          explication: "4x = 33 − 5 = 28, donc x = 7.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous l'équation 6x − 3 = 3x + 15.",
          reponse: "x = 6",
          explication: "6x − 3x = 15 + 3, donc 3x = 18, donc x = 6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous l'inéquation −4x + 5 > 21.",
          reponse: "x < −4",
          explication: "−4x > 16, on divise par −4 (négatif), le sens s'inverse : x < −4.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Résous l'équation (2x − 4)(x + 9) = 0.",
          choix: ["x = 2 ou x = −9", "x = 4 ou x = 9", "x = 2 ou x = 9", "x = −2 ou x = −9"],
          bonneReponse: 0,
          explication: "2x − 4 = 0 donne x = 2 ; x + 9 = 0 donne x = −9.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un triangle a un périmètre de 39 cm. Le deuxième côté mesure le double du premier, et le troisième côté mesure 3 cm de plus que le premier. Détermine la longueur de chaque côté.",
          reponse: "Premier côté : 9 cm ; deuxième côté : 18 cm ; troisième côté : 12 cm.",
          explication:
            "Soit x le premier côté. Deuxième = 2x, troisième = x + 3. x + 2x + x + 3 = 39, donc 4x + 3 = 39, donc 4x = 36, donc x = 9. Les côtés mesurent 9, 18 et 12 cm.",
        },
      ],
    },
    {
      titre: "Examen 2 — Équations et inéquations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Résous l'équation x ÷ 3 = 8.",
          choix: ["x = 11", "x = 24", "x = 5", "x = 2,67"],
          bonneReponse: 1,
          explication: "x = 8 × 3 = 24.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Résous l'équation 2x − 9 = 1.",
          reponse: "x = 5",
          explication: "2x = 1 + 9 = 10, donc x = 5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous l'inéquation 3x + 7 ≥ 22.",
          reponse: "x ≥ 5",
          explication: "3x ≥ 15, donc x ≥ 5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous l'équation 8x − 5 = 3x + 20.",
          reponse: "x = 5",
          explication: "8x − 3x = 20 + 5, donc 5x = 25, donc x = 5.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel est le sens de l'inégalité après avoir divisé les deux membres de x/(−5) < 2 par... on multiplie par −5 pour isoler x. Que devient l'inégalité ?",
          choix: ["x < −10", "x > −10", "x < 10", "x > 10"],
          bonneReponse: 1,
          explication: "On multiplie par −5 (négatif), donc le sens s'inverse : x > 2 × (−5) = −10.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux forfaits de téléphone existent. Forfait A : 15 € par mois. Forfait B : 40 € d'inscription puis 10 € par mois. À partir de combien de mois le forfait B devient-il plus avantageux que le forfait A ?",
          reponse: "À partir de 9 mois.",
          explication:
            "On résout 40 + 10x < 15x, donc 40 < 5x, donc x > 8. Le nombre de mois étant entier, le forfait B devient plus avantageux à partir de 9 mois.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Résoudre une équation : regrouper les termes en x d'un côté, les nombres de l'autre, puis isoler x.",
    "On peut multiplier/diviser une équation ou une inéquation par un nombre non nul.",
    "Piège : diviser ou multiplier une INÉQUATION par un nombre NÉGATIF inverse le sens de l'inégalité.",
    "Équation produit-nul : A × B = 0 équivaut à A = 0 ou B = 0.",
    "Mise en équation : nommer l'inconnue, traduire l'énoncé, résoudre, vérifier, répondre par une phrase.",
    "Toujours vérifier sa solution en la substituant dans l'équation ou l'inéquation de départ.",
  ],
};

export default chapitre;
