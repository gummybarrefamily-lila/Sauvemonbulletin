import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "calcul-litteral-factorisation",
  titre: "Calcul littéral : identités et factorisation",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Développer avec les identités remarquables, factoriser une expression et résoudre des équations produit-nul : le calcul littéral avancé, indispensable pour le brevet.",
  objectifs: [
    "Développer une expression avec la double distributivité",
    "Connaître et utiliser les trois identités remarquables",
    "Factoriser une expression en repérant un facteur commun",
    "Factoriser une expression grâce aux identités remarquables",
    "Résoudre une équation produit-nul",
  ],
  slides: [
    {
      titre: "Rappel : la double distributivité",
      illustration: "🔀",
      visuel: "(a + b)(c + d) = ac + ad + bc + bd",
      contenu: [
        "Pour développer (a+b)(c+d), chaque terme du premier facteur multiplie chaque terme du second",
        "(x + 2)(x + 5) = x×x + x×5 + 2×x + 2×5",
        "= x² + 5x + 2x + 10",
        "= x² + 7x + 10",
      ],
      voixOff:
        "Rappelons la double distributivité. Pour développer un produit de deux sommes, chaque terme du premier facteur doit multiplier chaque terme du second facteur. Prenons x plus deux, fois x plus cinq. On obtient x fois x, plus x fois cinq, plus deux fois x, plus deux fois cinq, soit x carré plus cinq x plus deux x plus dix, que l'on réduit en x carré plus sept x plus dix.",
    },
    {
      titre: "Identité remarquable n°1 : (a+b)²",
      illustration: "①",
      visuel: "(a + b)² = a² + 2ab + b²",
      contenu: [
        "(a + b)² = a² + 2ab + b²",
        "Exemple : (x + 3)² = x² + 2×x×3 + 3² = x² + 6x + 9",
        "Le carré de la somme = carré + double produit + carré",
      ],
      voixOff:
        "Voici la première identité remarquable à connaître par cœur : a plus b, le tout au carré, égale a carré plus deux a b plus b carré. Par exemple, x plus trois au carré égale x carré, plus deux fois x fois trois, plus trois au carré, c'est-à-dire x carré plus six x plus neuf.",
    },
    {
      titre: "Identité remarquable n°2 : (a−b)²",
      illustration: "②",
      visuel: "(a − b)² = a² − 2ab + b²",
      contenu: [
        "(a − b)² = a² − 2ab + b²",
        "Exemple : (x − 4)² = x² − 2×x×4 + 4² = x² − 8x + 16",
        "Le carré de la différence = carré − double produit + carré",
      ],
      voixOff:
        "Deuxième identité : a moins b, le tout au carré, égale a carré moins deux a b plus b carré. Attention, le double produit est soustrait, mais le dernier terme reste positif. Par exemple, x moins quatre au carré égale x carré moins huit x plus seize.",
    },
    {
      titre: "Identité remarquable n°3 : (a+b)(a−b)",
      illustration: "③",
      visuel: "(a + b)(a − b) = a² − b²",
      contenu: [
        "(a + b)(a − b) = a² − b²",
        "Exemple : (x + 6)(x − 6) = x² − 6² = x² − 36",
        "C'est la seule identité qui donne une différence de deux carrés",
      ],
      voixOff:
        "Troisième et dernière identité : a plus b, fois a moins b, égale a carré moins b carré. C'est ce qu'on appelle une différence de deux carrés. Par exemple, x plus six, fois x moins six, égale x carré moins trente-six. Les termes doubles s'annulent, il ne reste que les carrés.",
    },
    {
      titre: "Factoriser : facteur commun",
      illustration: "🧩",
      visuel: "3x² + 6x = 3x(x + 2)",
      contenu: [
        "Factoriser, c'est transformer une somme en produit",
        "On repère le plus grand facteur commun à tous les termes",
        "3x² + 6x : facteur commun 3x → 3x(x + 2)",
        "Vérification en développant : 3x × x + 3x × 2 = 3x² + 6x ✔",
      ],
      voixOff:
        "Factoriser, c'est l'opération inverse de développer : on transforme une somme en produit. La méthode de base consiste à repérer le facteur commun à tous les termes. Dans trois x carré plus six x, le facteur commun est trois x. On écrit trois x fois, entre parenthèses, x plus deux. On vérifie toujours en redéveloppant.",
    },
    {
      titre: "Factoriser avec les identités remarquables",
      illustration: "🔄",
      visuel: "x² − 25 = (x − 5)(x + 5)",
      contenu: [
        "On reconnaît la forme a² − b², a² + 2ab + b² ou a² − 2ab + b²",
        "x² − 25 = x² − 5² = (x − 5)(x + 5)",
        "x² + 10x + 25 = x² + 2×x×5 + 5² = (x + 5)²",
        "x² − 8x + 16 = x² − 2×x×4 + 4² = (x − 4)²",
      ],
      voixOff:
        "On peut aussi factoriser en reconnaissant la forme d'une identité remarquable, à l'envers. x carré moins vingt-cinq, c'est x carré moins cinq au carré, donc cela se factorise en x moins cinq, fois x plus cinq. De même, x carré plus dix x plus vingt-cinq est le carré de x plus cinq, et x carré moins huit x plus seize est le carré de x moins quatre.",
    },
    {
      titre: "Développer PUIS factoriser un exercice type",
      illustration: "📝",
      visuel: "(x+2)² − (x−3)(x+3)",
      contenu: [
        "(x + 2)² − (x − 3)(x + 3)",
        "= (x² + 4x + 4) − (x² − 9)",
        "= x² + 4x + 4 − x² + 9",
        "= 4x + 13",
      ],
      voixOff:
        "Les exercices de brevet combinent souvent plusieurs identités. Prenons x plus deux au carré, moins x moins trois fois x plus trois. On développe chaque partie séparément : x plus deux au carré donne x carré plus quatre x plus quatre ; x moins trois fois x plus trois donne x carré moins neuf. On soustrait en faisant bien attention aux signes : il reste quatre x plus treize.",
    },
    {
      titre: "Équation produit-nul",
      illustration: "🎯",
      visuel: "A × B = 0 ⟺ A = 0 ou B = 0",
      contenu: [
        "Un produit de facteurs est nul si et seulement si l'un des facteurs est nul",
        "Résoudre (x − 2)(x + 5) = 0",
        "x − 2 = 0 ou x + 5 = 0",
        "x = 2 ou x = −5 : deux solutions",
      ],
      voixOff:
        "La factorisation est très utile pour résoudre des équations, grâce à la règle du produit nul : un produit de facteurs est nul si et seulement si au moins l'un des facteurs est nul. Pour résoudre x moins deux, fois x plus cinq, égale zéro, on écrit x moins deux égale zéro, ou x plus cinq égale zéro. On trouve deux solutions : x égale deux, ou x égale moins cinq.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "(a+b)² = a² + 2ab + b² ; (a−b)² = a² − 2ab + b² ; (a+b)(a−b) = a² − b²",
        "Factoriser : chercher un facteur commun ou reconnaître une identité remarquable",
        "Une expression factorisée est un PRODUIT, une expression développée est une SOMME",
        "Équation produit-nul : A × B = 0 ⟺ A = 0 ou B = 0",
      ],
      voixOff:
        "Résumons. Les trois identités remarquables permettent de développer très rapidement des expressions particulières. Pour factoriser, on cherche d'abord un facteur commun, sinon on reconnaît la forme d'une identité remarquable. Retiens bien la différence : une expression factorisée est un produit, une expression développée est une somme. Enfin, la règle du produit nul, un produit égal à zéro si et seulement si un facteur est nul, permet de résoudre des équations que l'on ne saurait pas résoudre autrement. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Le calcul littéral avancé regroupe les identités remarquables, la factorisation et la résolution d'équations produit-nul. C'est un chapitre central du brevet, très lié à la résolution d'équations.",
    sections: [
      {
        titre: "Les trois identités remarquables",
        points: [
          "(a + b)² = a² + 2ab + b²",
          "(a − b)² = a² − 2ab + b²",
          "(a + b)(a − b) = a² − b²",
        ],
      },
      {
        titre: "Développer",
        points: [
          "Double distributivité : (a+b)(c+d) = ac + ad + bc + bd",
          "Reconnaître une identité remarquable accélère le développement",
          "Toujours réduire l'expression obtenue (regrouper les termes semblables)",
        ],
      },
      {
        titre: "Factoriser",
        points: [
          "Facteur commun : 3x² + 6x = 3x(x + 2)",
          "Différence de carrés : a² − b² = (a − b)(a + b)",
          "Carré parfait : a² + 2ab + b² = (a + b)² ; a² − 2ab + b² = (a − b)²",
        ],
      },
      {
        titre: "Équation produit-nul",
        points: [
          "A × B = 0 équivaut à A = 0 ou B = 0",
          "On factorise l'expression, puis on applique cette règle",
          "Une équation factorisée du 2nd degré peut avoir 0, 1 ou 2 solutions",
        ],
      },
    ],
    audio:
      "Fiche de révision : calcul littéral, identités et factorisation. Les trois identités remarquables sont à connaître par cœur : a plus b au carré égale a carré plus deux a b plus b carré ; a moins b au carré égale a carré moins deux a b plus b carré ; a plus b fois a moins b égale a carré moins b carré. Elles servent à développer rapidement, mais aussi à factoriser en sens inverse. Pour factoriser, on cherche d'abord un facteur commun à tous les termes, sinon on reconnaît la forme d'une identité remarquable. La factorisation est indispensable pour résoudre une équation produit-nul : un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul. On résout alors chaque facteur égalé à zéro séparément.",
  },
  memoCards: [
    { recto: "(a + b)² = ?", verso: "a² + 2ab + b²" },
    { recto: "(a − b)² = ?", verso: "a² − 2ab + b²" },
    { recto: "(a + b)(a − b) = ?", verso: "a² − b²" },
    { recto: "Comment factoriser 5x² + 15x ?", verso: "On repère le facteur commun 5x : 5x² + 15x = 5x(x + 3)." },
    { recto: "Comment factoriser x² − 49 ?", verso: "C'est une différence de carrés : x² − 49 = (x − 7)(x + 7)." },
    { recto: "Comment factoriser x² + 6x + 9 ?", verso: "C'est le carré de x + 3 : x² + 6x + 9 = (x + 3)²." },
    { recto: "Règle du produit nul ?", verso: "A × B = 0 équivaut à A = 0 ou B = 0." },
    { recto: "Différence entre développer et factoriser ?", verso: "Développer transforme un produit en somme ; factoriser transforme une somme en produit." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe (x + 4)².",
      choix: ["x² + 16", "x² + 4x + 16", "x² + 8x + 16", "x² + 8x + 4"],
      bonneReponse: 2,
      explication: "(x + 4)² = x² + 2×x×4 + 4² = x² + 8x + 16.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe (x − 2)(x + 2).",
      choix: ["x² − 4", "x² + 4", "x² − 4x + 4", "x² − 2x + 4"],
      bonneReponse: 0,
      explication: "C'est une différence de carrés : (x − 2)(x + 2) = x² − 2² = x² − 4.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Factorise l'expression 4x² + 8x en repérant le facteur commun.",
      reponse: "4x² + 8x = 4x(x + 2)",
      explication: "Le facteur commun aux deux termes est 4x. On vérifie : 4x × x + 4x × 2 = 4x² + 8x.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une expression factorisée se présente sous la forme d'une :",
      choix: ["Somme", "Différence", "Produit", "Fraction"],
      bonneReponse: 2,
      explication: "Factoriser, c'est transformer une somme en produit de facteurs.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Développe et réduis (2x + 3)².",
      reponse: "4x² + 12x + 9",
      explication: "(2x + 3)² = (2x)² + 2×2x×3 + 3² = 4x² + 12x + 9.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Factorise x² − 81.",
      reponse: "x² − 81 = (x − 9)(x + 9)",
      explication: "81 = 9², donc x² − 81 = x² − 9² = (x − 9)(x + 9) grâce à la 3ème identité remarquable.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous (x − 3)(x + 7) = 0.",
      choix: ["x = 3 et x = 7", "x = 3 ou x = −7", "x = −3 ou x = 7", "x = 3 uniquement"],
      bonneReponse: 1,
      explication: "Produit nul : x − 3 = 0 donne x = 3 ; x + 7 = 0 donne x = −7. Deux solutions : 3 et −7.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Factorise x² − 10x + 25.",
      reponse: "x² − 10x + 25 = (x − 5)²",
      explication: "On reconnaît a² − 2ab + b² avec a = x et b = 5, car 2×x×5 = 10x et 5² = 25.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis l'expression E = (x + 1)² − (x − 2)(x + 2).",
      reponse: "E = 2x + 5",
      explication:
        "(x+1)² = x² + 2x + 1. (x−2)(x+2) = x² − 4. E = x² + 2x + 1 − (x² − 4) = x² + 2x + 1 − x² + 4 = 2x + 5.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Factorise F = (2x + 1)² − (x − 3)².",
      reponse: "F = (3x − 2)(x + 4)",
      explication:
        "F est une différence de deux carrés A² − B² avec A = 2x+1 et B = x−3, donc F = (A−B)(A+B) = (2x+1−x+3)(2x+1+x−3) = (x+4)(3x−2).",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelles sont les solutions de l'équation (x + 5)(2x − 6) = 0 ?",
      choix: ["x = −5 et x = 3", "x = 5 et x = −3", "x = −5 et x = −3", "x = 5 et x = 3"],
      bonneReponse: 0,
      explication: "x + 5 = 0 donne x = −5 ; 2x − 6 = 0 donne x = 3. Les solutions sont −5 et 3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous l'équation x² − 36 = 0 en utilisant une factorisation.",
      reponse: "x = 6 ou x = −6",
      explication: "x² − 36 = (x − 6)(x + 6) = 0, donc x − 6 = 0 ou x + 6 = 0, soit x = 6 ou x = −6.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe (x − 5)².",
      choix: ["x² − 25", "x² − 10x + 25", "x² + 10x + 25", "x² − 5x + 25"],
      bonneReponse: 1,
      explication: "(x − 5)² = x² − 2×x×5 + 5² = x² − 10x + 25.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Factorise 7x + 21 en repérant le facteur commun.",
      reponse: "7x + 21 = 7(x + 3)",
      explication: "7 est le facteur commun à 7x et 21 (car 21 = 7×3).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Factorise x² − 16.",
      reponse: "x² − 16 = (x − 4)(x + 4)",
      explication: "16 = 4², c'est une différence de deux carrés.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous (x − 1)(x + 9) = 0.",
      choix: ["x = 1 ou x = −9", "x = 1 ou x = 9", "x = −1 ou x = 9", "x = −1 ou x = −9"],
      bonneReponse: 0,
      explication: "x − 1 = 0 donne x = 1 ; x + 9 = 0 donne x = −9.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis (x + 3)² − x².",
      reponse: "6x + 9",
      explication: "(x+3)² − x² = x² + 6x + 9 − x² = 6x + 9.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Calcul littéral : identités et factorisation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Développe (x + 6)².",
          choix: ["x² + 36", "x² + 12x + 36", "x² + 6x + 36", "x² + 12x + 6"],
          bonneReponse: 1,
          explication: "(x + 6)² = x² + 2×x×6 + 6² = x² + 12x + 36.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Factorise 6x² − 9x en repérant le facteur commun.",
          reponse: "6x² − 9x = 3x(2x − 3)",
          explication: "Le facteur commun est 3x. On vérifie : 3x × 2x − 3x × 3 = 6x² − 9x.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Développe et réduis (x − 4)(x + 4) + 5x.",
          reponse: "x² + 5x − 16",
          explication: "(x−4)(x+4) = x² − 16, donc l'expression vaut x² − 16 + 5x = x² + 5x − 16.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Factorise x² + 14x + 49.",
          reponse: "x² + 14x + 49 = (x + 7)²",
          explication: "2×x×7 = 14x et 7² = 49, on reconnaît a² + 2ab + b² avec a = x et b = 7.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelles sont les solutions de (3x − 6)(x + 2) = 0 ?",
          choix: ["x = 2 et x = −2", "x = −2 et x = 2", "x = 6 et x = 2", "x = 2 uniquement"],
          bonneReponse: 0,
          explication: "3x − 6 = 0 donne x = 2 ; x + 2 = 0 donne x = −2.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Soit E = (2x − 1)² − (x + 3)(x − 3). Développe, réduis, puis calcule E pour x = 1.",
          reponse: "E = 3x² − 4x + 10 ; pour x = 1, E = 9",
          explication:
            "(2x−1)² = 4x² − 4x + 1. (x+3)(x−3) = x² − 9. E = 4x² − 4x + 1 − x² + 9 = 3x² − 4x + 10. Pour x = 1 : E = 3 − 4 + 10 = 9.",
        },
      ],
    },
    {
      titre: "Examen 2 — Calcul littéral : identités et factorisation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Développe (x − 7)(x + 7).",
          choix: ["x² − 49", "x² + 49", "x² − 14x + 49", "x² − 14x − 49"],
          bonneReponse: 0,
          explication: "(x − 7)(x + 7) = x² − 7² = x² − 49.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Factorise 12x + 18 en repérant le facteur commun.",
          reponse: "12x + 18 = 6(2x + 3)",
          explication: "6 est le PGCD de 12 et 18 : le facteur commun est 6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Factorise x² − 12x + 36.",
          reponse: "x² − 12x + 36 = (x − 6)²",
          explication: "2×x×6 = 12x et 6² = 36 : c'est (x − 6)².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Développe et réduis (x + 2)² + (x − 2)².",
          reponse: "2x² + 8",
          explication: "(x+2)² = x²+4x+4 et (x−2)² = x²−4x+4. La somme donne 2x² + 8 (les termes en x s'annulent).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Résous l'équation x² − 100 = 0.",
          choix: ["x = 10 ou x = −10", "x = 10 uniquement", "x = 50", "Il n'y a pas de solution"],
          bonneReponse: 0,
          explication: "x² − 100 = (x − 10)(x + 10) = 0, donc x = 10 ou x = −10.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un carré a pour côté (x + 3) et un autre carré a pour côté x. Écris et factorise l'expression de la différence de leurs aires.",
          reponse: "Différence d'aires = (x + 3)² − x² = (2x + 3) × 3 = 6x + 9",
          explication:
            "(x+3)² − x² = x² + 6x + 9 − x² = 6x + 9, que l'on peut aussi factoriser en 3(2x + 3) en repérant le facteur commun 3.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "(a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b².",
    "Pour factoriser, on cherche d'abord un facteur commun à tous les termes.",
    "Sinon, on reconnaît la forme d'une identité remarquable (souvent une différence de deux carrés a² − b²).",
    "Une expression factorisée est un PRODUIT ; une expression développée est une SOMME.",
    "Règle du produit nul : A × B = 0 équivaut à A = 0 ou B = 0.",
    "Erreur fréquente à éviter : (a + b)² n'est JAMAIS égal à a² + b², il manque le double produit 2ab.",
  ],
};

export default chapitre;
