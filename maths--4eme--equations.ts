import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "equations",
  titre: "Les équations du premier degré",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Comprendre ce qu'est une équation, apprendre à la résoudre étape par étape et l'utiliser pour résoudre des problèmes concrets.",
  objectifs: [
    "Comprendre ce qu'est une équation et ce que signifie « résoudre »",
    "Résoudre une équation en ajoutant, soustrayant, multipliant ou divisant des deux côtés",
    "Résoudre une équation avec l'inconnue des deux côtés de l'égalité",
    "Vérifier qu'une solution est correcte en la substituant dans l'équation",
    "Traduire un problème concret en équation, puis le résoudre",
  ],
  slides: [
    {
      titre: "C'est quoi une équation ?",
      illustration: "⚖️",
      visuel: "x + 3 = 7",
      contenu: [
        "Une équation est une égalité contenant une inconnue (souvent x)",
        "Résoudre l'équation = trouver la valeur de x qui rend l'égalité vraie",
        "x + 3 = 7 : la solution est x = 4, car 4 + 3 = 7",
        "On peut comparer une équation à une balance équilibrée",
      ],
      voixOff:
        "Une équation est une égalité qui contient une inconnue, le plus souvent notée x. Résoudre une équation, c'est trouver la valeur de x qui rend cette égalité vraie. Par exemple, dans x plus trois égale sept, la solution est x égale quatre, car quatre plus trois font sept. On peut comparer une équation à une balance parfaitement équilibrée.",
    },
    {
      titre: "Ajouter ou soustraire le même nombre",
      illustration: "⚖️",
      visuel: "x + 3 = 7 → x = 7 − 3 = 4",
      contenu: [
        "On peut ajouter ou soustraire le même nombre des deux côtés sans changer l'égalité",
        "x + 3 = 7 → x + 3 − 3 = 7 − 3 → x = 4",
        "x − 5 = 2 → x = 2 + 5 = 7",
        "Astuce rapide : on « fait passer » un terme de l'autre côté en changeant son signe",
      ],
      voixOff:
        "Comme une balance, une équation reste équilibrée si on ajoute ou on soustrait le même nombre des deux côtés. x plus trois égale sept devient x égale sept moins trois, soit x égale quatre. De même, x moins cinq égale deux donne x égale deux plus cinq, soit sept. L'astuce rapide : on peut faire passer un terme de l'autre côté du signe égal, à condition de changer son signe.",
    },
    {
      titre: "Multiplier ou diviser par le même nombre",
      illustration: "✖️",
      visuel: "3x = 12 → x = 4",
      contenu: [
        "On peut multiplier ou diviser les deux côtés par le même nombre non nul",
        "3x = 12 → x = 12 ÷ 3 = 4",
        "x/5 = 6 → x = 6 × 5 = 30",
        "On ne divise jamais par 0 !",
      ],
      voixOff:
        "On peut aussi multiplier ou diviser les deux côtés d'une équation par le même nombre, à condition qu'il ne soit pas nul. Trois x égale douze devient x égale douze divisé par trois, soit quatre. x divisé par cinq égale six donne x égale six fois cinq, soit trente. Attention, on ne divise jamais par zéro.",
    },
    {
      titre: "Équations à deux étapes",
      illustration: "🪜",
      visuel: "3x + 5 = 20",
      contenu: [
        "3x + 5 = 20 : d'abord isoler le terme en x, puis diviser",
        "Étape 1 : 3x = 20 − 5 = 15",
        "Étape 2 : x = 15 ÷ 3 = 5",
        "On vérifie : 3×5 + 5 = 20 ✓",
      ],
      voixOff:
        "Beaucoup d'équations demandent deux étapes. Pour trois x plus cinq égale vingt, on isole d'abord le terme en x : trois x égale vingt moins cinq, soit quinze. Puis on divise : x égale quinze divisé par trois, soit cinq. On vérifie : trois fois cinq plus cinq égale bien vingt.",
    },
    {
      titre: "L'inconnue des deux côtés",
      illustration: "↔️",
      visuel: "5x + 2 = 2x + 11",
      contenu: [
        "On regroupe les x d'un côté et les nombres de l'autre",
        "5x + 2 = 2x + 11 → 5x − 2x = 11 − 2 → 3x = 9",
        "x = 9 ÷ 3 = 3",
        "On vérifie : 5×3+2 = 17 et 2×3+11 = 17 ✓",
      ],
      voixOff:
        "Quand l'inconnue apparaît des deux côtés de l'égalité, on regroupe tous les x d'un côté et tous les nombres de l'autre. Cinq x plus deux égale deux x plus onze devient cinq x moins deux x égale onze moins deux, soit trois x égale neuf. Donc x égale trois. On vérifie : les deux côtés valent bien dix-sept.",
    },
    {
      titre: "Vérifier une solution",
      illustration: "✅",
      visuel: "remplacer x, puis comparer",
      contenu: [
        "On remplace x par la valeur trouvée dans l'équation de départ",
        "Si les deux membres sont égaux, la solution est correcte",
        "Exemple : pour 2x − 3 = 7, x = 5 : 2×5 − 3 = 7 ✓",
        "C'est un excellent réflexe pour éviter les erreurs",
      ],
      voixOff:
        "Une fois la solution trouvée, il est essentiel de la vérifier en la remplaçant dans l'équation de départ. Si les deux côtés donnent la même valeur, la solution est correcte. Pour deux x moins trois égale sept, avec x égal cinq, on obtient deux fois cinq moins trois, soit sept : c'est vérifié. Prends toujours ce réflexe, il évite beaucoup d'erreurs.",
    },
    {
      titre: "Résoudre un problème avec une équation",
      illustration: "🧩",
      visuel: "3x + 4 = 19",
      contenu: [
        "On choisit x pour représenter l'inconnue du problème",
        "On traduit l'énoncé en équation, puis on la résout",
        "Exemple : « Le triple d'un nombre augmenté de 4 vaut 19 » → 3x + 4 = 19 → x = 5",
        "On vérifie que la solution a du sens dans le contexte",
      ],
      voixOff:
        "Une équation sert aussi à résoudre des problèmes concrets. On choisit x pour représenter l'inconnue, puis on traduit l'énoncé en équation. Par exemple, le triple d'un nombre augmenté de quatre vaut dix-neuf se traduit par trois x plus quatre égale dix-neuf, ce qui donne x égale cinq. Il faut toujours vérifier que la solution a du sens dans le contexte du problème.",
    },
    {
      titre: "Pièges à éviter",
      illustration: "⚠️",
      visuel: "toujours la même opération des deux côtés",
      contenu: [
        "On doit toujours faire la MÊME opération des deux côtés de l'égalité",
        "En changeant de côté, un terme change de signe (+ devient −, et inversement)",
        "3x = 12 ne donne PAS x = 12 − 3, mais x = 12 ÷ 3",
        "Ne jamais diviser par 0",
      ],
      voixOff:
        "Attention aux erreurs classiques. Il faut toujours effectuer la même opération des deux côtés de l'égalité. Quand un terme change de côté, il change de signe : plus devient moins, et inversement. Mais attention, trois x égale douze ne donne pas x égale douze moins trois : ici, trois multiplie x, donc il faut diviser, pas soustraire. Et n'oublie jamais qu'on ne peut jamais diviser par zéro.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Une équation est une égalité avec une inconnue ; la résoudre, c'est trouver sa valeur",
        "On peut ajouter, soustraire, multiplier ou diviser (par un nombre non nul) des deux côtés",
        "Avec l'inconnue des deux côtés : regrouper les x ensemble, les nombres ensemble",
        "Toujours vérifier la solution en la remplaçant dans l'équation de départ",
      ],
      voixOff:
        "Résumons. Une équation est une égalité contenant une inconnue, et la résoudre consiste à trouver sa valeur. On peut ajouter, soustraire, multiplier ou diviser par le même nombre non nul des deux côtés de l'égalité, sans jamais la déséquilibrer. Quand l'inconnue apparaît des deux côtés, on regroupe les x ensemble et les nombres ensemble. Et surtout, prends toujours le réflexe de vérifier ta solution en la remplaçant dans l'équation de départ.",
    },
  ],
  fiche: {
    intro:
      "Une équation est une égalité contenant une inconnue. On la résout en isolant progressivement cette inconnue, en effectuant toujours la même opération des deux côtés de l'égalité.",
    sections: [
      {
        titre: "Qu'est-ce qu'une équation ?",
        points: [
          "Une égalité contenant une inconnue, souvent notée x",
          "Résoudre = trouver la valeur de x qui rend l'égalité vraie",
          "On peut comparer une équation à une balance équilibrée",
        ],
      },
      {
        titre: "Les deux règles fondamentales",
        points: [
          "On peut ajouter ou soustraire le même nombre des deux côtés",
          "On peut multiplier ou diviser par le même nombre non nul des deux côtés",
          "Astuce : un terme change de signe quand il change de côté de l'égalité",
        ],
      },
      {
        titre: "Résoudre en plusieurs étapes",
        points: [
          "3x + 5 = 20 → 3x = 15 → x = 5",
          "Avec x des deux côtés : 5x + 2 = 2x + 11 → 3x = 9 → x = 3",
          "Toujours vérifier en remplaçant x par la solution trouvée",
        ],
      },
      {
        titre: "Résoudre un problème",
        points: [
          "On choisit x pour représenter l'inconnue du problème",
          "On traduit l'énoncé en équation, puis on la résout",
          "On vérifie que la solution a un sens dans le contexte",
        ],
      },
    ],
    audio:
      "Fiche de révision : les équations du premier degré. Une équation est une égalité contenant une inconnue, généralement notée x. La résoudre, c'est trouver la valeur de x qui rend cette égalité vraie. Pour cela, on utilise deux règles fondamentales : on peut ajouter ou soustraire le même nombre des deux côtés, et on peut multiplier ou diviser par le même nombre non nul des deux côtés. Un terme change de signe quand il change de côté de l'égalité. Quand l'inconnue apparaît des deux côtés, on regroupe les termes en x d'un côté et les nombres de l'autre. Une fois la solution trouvée, il faut toujours la vérifier en la remplaçant dans l'équation de départ. Enfin, pour résoudre un problème concret, on choisit une lettre pour l'inconnue, on traduit l'énoncé en équation, on la résout, puis on vérifie que le résultat a bien un sens.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une équation ?", verso: "Une égalité contenant une inconnue. La résoudre, c'est trouver la valeur qui la rend vraie." },
    { recto: "Règle 1 : addition/soustraction ?", verso: "On peut ajouter ou soustraire le même nombre des deux côtés de l'équation." },
    { recto: "Règle 2 : multiplication/division ?", verso: "On peut multiplier ou diviser par le même nombre non nul des deux côtés." },
    { recto: "Résous 3x + 5 = 20.", verso: "3x = 15 puis x = 5. On vérifie : 3×5+5 = 20." },
    { recto: "Comment résoudre avec x des deux côtés ?", verso: "On regroupe les x d'un côté et les nombres de l'autre. Ex : 5x+2=2x+11 → 3x=9 → x=3." },
    { recto: "Comment vérifier une solution ?", verso: "On remplace x par la valeur trouvée dans l'équation de départ et on compare les deux côtés." },
    { recto: "Comment résoudre un problème avec une équation ?", verso: "On choisit x, on traduit l'énoncé en équation, on résout, puis on vérifie le sens du résultat." },
    { recto: "Piège : 3x = 12 donne x = ?", verso: "x = 12 ÷ 3 = 4 (division, pas soustraction, car 3 multiplie x)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous x + 5 = 12.",
      choix: ["x = 7", "x = 17", "x = −7", "x = 60"],
      bonneReponse: 0,
      explication: "x = 12 − 5 = 7.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous 4x = 20.",
      choix: ["x = 5", "x = 16", "x = 24", "x = 80"],
      bonneReponse: 0,
      explication: "x = 20 ÷ 4 = 5.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Résous x − 8 = 3.",
      reponse: "x = 11",
      explication: "x = 3 + 8 = 11.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous x/3 = 7.",
      choix: ["x = 21", "x = 4", "x = 10", "x = 2,33"],
      bonneReponse: 0,
      explication: "x = 7 × 3 = 21.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous 2x + 3 = 11.",
      reponse: "x = 4",
      explication: "2x = 11 − 3 = 8, puis x = 8 ÷ 2 = 4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous 5x − 4 = 16.",
      choix: ["x = 4", "x = 3", "x = 20", "x = 12"],
      bonneReponse: 0,
      explication: "5x = 16 + 4 = 20, puis x = 20 ÷ 5 = 4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous 3x − 7 = 2x + 5.",
      reponse: "x = 12",
      explication: "3x − 2x = 5 + 7, donc x = 12. Vérification : 3×12−7=29 et 2×12+5=29.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous 4x + 1 = x + 10.",
      choix: ["x = 3", "x = 9", "x = 11", "x = 2,25"],
      bonneReponse: 0,
      explication: "4x − x = 10 − 1, donc 3x = 9, puis x = 3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous 2(x + 3) = 16.",
      reponse: "x = 5",
      explication: "On développe : 2x + 6 = 16, donc 2x = 10, puis x = 5.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous 5x − 3 = 3x + 9.",
      reponse: "x = 6",
      explication: "5x − 3x = 9 + 3, donc 2x = 12, puis x = 6.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Résous 3(x − 1) = 2x + 4.",
      choix: ["x = 7", "x = 1", "x = 3", "x = −1"],
      bonneReponse: 0,
      explication: "On développe : 3x − 3 = 2x + 4, donc 3x − 2x = 4 + 3, soit x = 7.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Le double d'un nombre, diminué de 7, vaut 15. Quel est ce nombre ?",
      reponse: "x = 11",
      explication: "On traduit : 2x − 7 = 15, donc 2x = 22, puis x = 11.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Résous x + 9 = 14.",
      choix: ["x = 5", "x = 23", "x = −5", "x = 126"],
      bonneReponse: 0,
      explication: "x = 14 − 9 = 5.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Résous 6x = 42.",
      reponse: "x = 7",
      explication: "x = 42 ÷ 6 = 7.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Résous 2x + 5 = 17.",
      choix: ["x = 6", "x = 11", "x = 22", "x = 8,5"],
      bonneReponse: 0,
      explication: "2x = 17 − 5 = 12, puis x = 6.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résous 4x − 1 = 2x + 9.",
      reponse: "x = 5",
      explication: "4x − 2x = 9 + 1, donc 2x = 10, puis x = 5.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Résous 3(x + 2) = 2x + 13.",
      reponse: "x = 7",
      explication: "On développe : 3x + 6 = 2x + 13, donc 3x − 2x = 13 − 6, soit x = 7.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les équations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Résous x + 6 = 13.",
          choix: ["x = 7", "x = 19", "x = −7", "x = 78"],
          bonneReponse: 0,
          explication: "x = 13 − 6 = 7.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Résous 5x = 35.",
          reponse: "x = 7",
          explication: "x = 35 ÷ 5 = 7.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Résous 3x − 2 = 13.",
          choix: ["x = 5", "x = 11/3", "x = 15", "x = 33"],
          bonneReponse: 0,
          explication: "3x = 13 + 2 = 15, puis x = 5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous 6x + 1 = x + 16.",
          reponse: "x = 3",
          explication: "6x − x = 16 − 1, donc 5x = 15, puis x = 3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Résous 4(x − 2) = 2x + 6.",
          reponse: "x = 7",
          explication: "On développe : 4x − 8 = 2x + 6, donc 4x − 2x = 6 + 8, soit x = 7.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "La somme de trois fois un nombre et de 8 vaut 29. Quel est ce nombre ?",
          reponse: "x = 7",
          explication: "On traduit : 3x + 8 = 29, donc 3x = 21, puis x = 7.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les équations",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Résous x − 4 = 9.",
          choix: ["x = 13", "x = 5", "x = −13", "x = 36"],
          bonneReponse: 0,
          explication: "x = 9 + 4 = 13.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Résous x/4 = 6.",
          reponse: "x = 24",
          explication: "x = 6 × 4 = 24.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Résous 2x + 7 = 19.",
          choix: ["x = 6", "x = 13", "x = 26", "x = 12"],
          bonneReponse: 0,
          explication: "2x = 19 − 7 = 12, puis x = 6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Résous 7x − 3 = 4x + 15.",
          reponse: "x = 6",
          explication: "7x − 4x = 15 + 3, donc 3x = 18, puis x = 6.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Résous 5(x − 1) = 3x + 7.",
          reponse: "x = 6",
          explication: "On développe : 5x − 5 = 3x + 7, donc 5x − 3x = 7 + 5, soit 2x = 12, puis x = 6.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un nombre diminué de 5, puis multiplié par 2, donne 18. Quel est ce nombre ?",
          reponse: "x = 14",
          explication: "On traduit : 2(x − 5) = 18, donc 2x − 10 = 18, soit 2x = 28, puis x = 14.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une équation est une égalité contenant une inconnue ; la résoudre, c'est trouver la valeur qui la vérifie.",
    "Règle 1 : on peut ajouter ou soustraire le même nombre des deux côtés de l'équation.",
    "Règle 2 : on peut multiplier ou diviser par le même nombre non nul des deux côtés.",
    "Avec l'inconnue des deux côtés, on regroupe les termes en x d'un côté et les nombres de l'autre.",
    "Toujours vérifier la solution trouvée en la remplaçant dans l'équation de départ.",
    "Pour un problème : choisir x, traduire l'énoncé en équation, résoudre, puis vérifier que le résultat a du sens.",
  ],
};

export default chapitre;
