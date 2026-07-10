import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "puissances",
  titre: "Les puissances",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Comprendre la notation puissance, maîtriser les puissances de 10 et la notation scientifique, et appliquer les règles de calcul sur les exposants.",
  objectifs: [
    "Savoir ce que signifie la notation aⁿ et calculer des puissances simples",
    "Connaître les puissances de 10, positives et négatives",
    "Écrire un nombre en notation scientifique",
    "Appliquer les règles de calcul : produit, quotient, puissance de puissance",
    "Utiliser les préfixes (kilo, milli...) liés aux puissances de 10",
  ],
  slides: [
    {
      titre: "C'est quoi, une puissance ?",
      illustration: "✖️",
      visuel: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
      contenu: [
        "aⁿ = a multiplié par lui-même n fois",
        "a est la base, n est l'exposant",
        "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
        "C'est une écriture raccourcie d'une multiplication répétée",
      ],
      voixOff:
        "Une puissance, c'est une écriture raccourcie d'une multiplication répétée. a puissance n, c'est a multiplié par lui-même n fois. On appelle a la base et n l'exposant. Par exemple, deux puissance cinq, c'est deux multiplié par lui-même cinq fois, ce qui donne trente-deux.",
    },
    {
      titre: "Attention aux pièges !",
      illustration: "⚠️",
      visuel: "2³ = 8, PAS 6 !",
      contenu: [
        "2³ = 2 × 2 × 2 = 8, et non 2 × 3 = 6",
        "a¹ = a (exemple : 7¹ = 7)",
        "a⁰ = 1 pour tout nombre a non nul (exemple : 7⁰ = 1)",
        "(−2)⁴ = 16 mais −2⁴ = −16 : les parenthèses comptent !",
      ],
      voixOff:
        "Attention à l'erreur la plus fréquente : deux puissance trois, c'est deux fois deux fois deux, donc huit, et surtout pas deux fois trois. Retiens aussi deux cas particuliers : un nombre puissance un, c'est le nombre lui-même, et un nombre non nul puissance zéro vaut toujours un. Enfin, les parenthèses comptent : moins deux, entre parenthèses, puissance quatre, égale seize, alors que moins deux puissance quatre, sans parenthèses, égale moins seize.",
    },
    {
      titre: "Les puissances de 10",
      illustration: "🔟",
      visuel: "10⁴ = 10 000",
      contenu: [
        "10ⁿ = 1 suivi de n zéros",
        "10² = 100 ; 10³ = 1 000 ; 10⁶ = 1 000 000",
        "Multiplier par 10ⁿ = décaler la virgule de n rangs vers la droite",
        "Très utile pour les grands nombres (astronomie, informatique...)",
      ],
      voixOff:
        "Les puissances de dix sont les plus utilisées. Dix puissance n, c'est tout simplement un un suivi de n zéros. Dix puissance quatre, c'est dix mille. Multiplier un nombre par dix puissance n revient à décaler sa virgule de n rangs vers la droite. C'est très pratique pour écrire les grands nombres, comme les distances en astronomie.",
    },
    {
      titre: "Les exposants négatifs",
      illustration: "🔬",
      visuel: "10⁻³ = 0,001",
      contenu: [
        "a⁻ⁿ est l'inverse de aⁿ : a⁻ⁿ = 1/aⁿ",
        "10⁻³ = 1/10³ = 1/1000 = 0,001",
        "2⁻³ = 1/2³ = 1/8 = 0,125",
        "Les exposants négatifs servent aux nombres très petits",
      ],
      voixOff:
        "Un exposant négatif ne donne pas un nombre négatif ! a puissance moins n, c'est l'inverse de a puissance n, c'est-à-dire un divisé par a puissance n. Dix puissance moins trois, c'est un millième, soit zéro virgule zéro zéro un. Les exposants négatifs servent à écrire les nombres très petits, comme la taille d'une bactérie.",
    },
    {
      titre: "La notation scientifique",
      illustration: "🚀",
      visuel: "45 000 = 4,5 × 10⁴",
      contenu: [
        "Écriture : a × 10ⁿ avec 1 ≤ a < 10",
        "45 000 = 4,5 × 10⁴",
        "0,00072 = 7,2 × 10⁻⁴",
        "Un seul chiffre non nul avant la virgule !",
      ],
      voixOff:
        "La notation scientifique permet d'écrire tous les nombres de la même façon : un nombre a compris entre un inclus et dix exclu, multiplié par une puissance de dix. Quarante-cinq mille s'écrit quatre virgule cinq fois dix puissance quatre. Zéro virgule zéro zéro zéro soixante-douze s'écrit sept virgule deux fois dix puissance moins quatre. Retiens la règle : un seul chiffre non nul avant la virgule.",
    },
    {
      titre: "Produit de puissances",
      illustration: "➕",
      visuel: "aᵐ × aⁿ = aᵐ⁺ⁿ",
      contenu: [
        "Même base : on ADDITIONNE les exposants",
        "3⁴ × 3² = 3⁴⁺² = 3⁶",
        "Logique : (3×3×3×3) × (3×3) = six facteurs 3",
        "⚠️ Valable uniquement si les bases sont identiques",
      ],
      voixOff:
        "Pour multiplier deux puissances d'une même base, on additionne les exposants. Trois puissance quatre fois trois puissance deux égale trois puissance six. C'est logique : quatre facteurs trois multipliés par deux facteurs trois, cela fait six facteurs trois en tout. Attention, cette règle ne fonctionne que si les bases sont identiques.",
    },
    {
      titre: "Quotient de puissances",
      illustration: "➗",
      visuel: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
      contenu: [
        "Même base : on SOUSTRAIT les exposants",
        "10⁷ ÷ 10⁴ = 10⁷⁻⁴ = 10³",
        "Logique : les facteurs communs se simplifient",
        "Le résultat peut avoir un exposant négatif : 10² ÷ 10⁵ = 10⁻³",
      ],
      voixOff:
        "Pour diviser deux puissances d'une même base, on soustrait les exposants. Dix puissance sept divisé par dix puissance quatre égale dix puissance trois, car quatre facteurs dix se simplifient en haut et en bas. Et si l'exposant du bas est plus grand, le résultat a un exposant négatif : dix puissance deux divisé par dix puissance cinq égale dix puissance moins trois.",
    },
    {
      titre: "Puissance de puissance",
      illustration: "🎁",
      visuel: "(aᵐ)ⁿ = aᵐⁿ",
      contenu: [
        "On MULTIPLIE les exposants",
        "(10³)⁴ = 10³ˣ⁴ = 10¹²",
        "Logique : 10³ × 10³ × 10³ × 10³ = 10¹²",
        "Récap : produit → +, quotient → −, puissance de puissance → ×",
      ],
      voixOff:
        "Pour élever une puissance à une puissance, on multiplie les exposants. Dix puissance trois, le tout puissance quatre, égale dix puissance douze. En effet, c'est dix puissance trois multiplié par lui-même quatre fois. Pour t'y retrouver : produit, on additionne ; quotient, on soustrait ; puissance de puissance, on multiplie.",
    },
    {
      titre: "Les préfixes du quotidien",
      illustration: "📐",
      visuel: "kilo = 10³ ; milli = 10⁻³",
      contenu: [
        "kilo = 10³ (1 km = 10³ m) ; méga = 10⁶ ; giga = 10⁹",
        "centi = 10⁻² (1 cm = 10⁻² m)",
        "milli = 10⁻³ ; micro = 10⁻⁶ ; nano = 10⁻⁹",
        "Un gigaoctet = 10⁹ octets, un nanomètre = 10⁻⁹ m",
      ],
      voixOff:
        "Les puissances de dix se cachent dans les unités de tous les jours. Kilo signifie dix puissance trois : un kilomètre, c'est mille mètres. Méga, c'est dix puissance six, et giga, dix puissance neuf, comme dans gigaoctet. Du côté des petits nombres : centi, c'est dix puissance moins deux, milli, dix puissance moins trois, micro, dix puissance moins six, et nano, dix puissance moins neuf.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "aⁿ = a multiplié par lui-même n fois ; a⁰ = 1 ; a⁻ⁿ = 1/aⁿ",
        "10ⁿ = 1 suivi de n zéros ; 10⁻ⁿ pour les nombres très petits",
        "Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10",
        "Règles : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐⁿ",
      ],
      voixOff:
        "Résumons. Une puissance est une multiplication répétée : a puissance n, c'est a multiplié par lui-même n fois. Un exposant zéro donne un, un exposant négatif donne un inverse. Dix puissance n, c'est un un suivi de n zéros. La notation scientifique s'écrit a fois dix puissance n, avec a entre un et dix. Et pour les calculs : produit, on additionne les exposants ; quotient, on les soustrait ; puissance de puissance, on les multiplie. Bravo, tu maîtrises maintenant les puissances !",
    },
  ],
  fiche: {
    intro:
      "La puissance aⁿ est le produit de n facteurs tous égaux à a. Les puissances de 10 et la notation scientifique permettent d'écrire simplement les très grands et les très petits nombres.",
    sections: [
      {
        titre: "Définition et cas particuliers",
        points: [
          "aⁿ = a × a × ... × a (n facteurs) ; a est la base, n l'exposant",
          "2⁵ = 32 ; attention 2³ = 8 et non 6 !",
          "a¹ = a et a⁰ = 1 (pour a non nul)",
          "a⁻ⁿ = 1/aⁿ (l'inverse de aⁿ) ; exemple : 2⁻³ = 1/8 = 0,125",
        ],
      },
      {
        titre: "Puissances de 10",
        points: [
          "10ⁿ = 1 suivi de n zéros (10⁴ = 10 000)",
          "10⁻ⁿ = 0,00...1 avec le 1 au n-ième rang après la virgule (10⁻³ = 0,001)",
          "Multiplier par 10ⁿ décale la virgule de n rangs vers la droite",
        ],
      },
      {
        titre: "Notation scientifique",
        points: [
          "Forme a × 10ⁿ avec 1 ≤ a < 10 (un seul chiffre non nul avant la virgule)",
          "45 000 = 4,5 × 10⁴ ; 0,00072 = 7,2 × 10⁻⁴",
          "Exposant positif pour les grands nombres, négatif pour les petits",
        ],
      },
      {
        titre: "Règles de calcul (même base)",
        points: [
          "Produit : aᵐ × aⁿ = aᵐ⁺ⁿ (3⁴ × 3² = 3⁶)",
          "Quotient : aᵐ ÷ aⁿ = aᵐ⁻ⁿ (10⁷ ÷ 10⁴ = 10³)",
          "Puissance de puissance : (aᵐ)ⁿ = aᵐⁿ ((10³)⁴ = 10¹²)",
        ],
      },
      {
        titre: "Préfixes des unités",
        points: [
          "kilo = 10³ ; méga = 10⁶ ; giga = 10⁹",
          "centi = 10⁻² ; milli = 10⁻³ ; micro = 10⁻⁶ ; nano = 10⁻⁹",
          "Exemples : 1 km = 10³ m ; 1 mm = 10⁻³ m ; 1 Go = 10⁹ octets",
        ],
      },
    ],
    audio:
      "Fiche de révision : les puissances. La puissance a exposant n est le produit de n facteurs tous égaux à a : deux puissance cinq égale trente-deux. Retiens les cas particuliers : a puissance un égale a, a puissance zéro égale un, et a puissance moins n est l'inverse de a puissance n. Dix puissance n s'écrit un suivi de n zéros, et dix puissance moins n est un nombre très petit : dix puissance moins trois égale zéro virgule zéro zéro un. La notation scientifique écrit tout nombre sous la forme a fois dix puissance n, avec a compris entre un inclus et dix exclu. Pour calculer avec une même base : dans un produit, on additionne les exposants ; dans un quotient, on les soustrait ; pour une puissance de puissance, on les multiplie. Enfin, les préfixes traduisent des puissances de dix : kilo pour dix puissance trois, milli pour dix puissance moins trois, giga pour dix puissance neuf.",
  },
  memoCards: [
    { recto: "Que signifie aⁿ ?", verso: "a multiplié par lui-même n fois. Ex : 2⁵ = 2×2×2×2×2 = 32." },
    { recto: "a⁰ = ? et a¹ = ?", verso: "a⁰ = 1 (pour a non nul) et a¹ = a." },
    { recto: "Que vaut a⁻ⁿ ?", verso: "L'inverse de aⁿ : a⁻ⁿ = 1/aⁿ. Ex : 2⁻³ = 1/8." },
    { recto: "10⁶ = ?", verso: "1 000 000 : un 1 suivi de 6 zéros." },
    { recto: "10⁻³ = ?", verso: "0,001 (un millième)." },
    { recto: "aᵐ × aⁿ = ?", verso: "aᵐ⁺ⁿ : on additionne les exposants. Ex : 3⁴ × 3² = 3⁶." },
    { recto: "aᵐ ÷ aⁿ = ?", verso: "aᵐ⁻ⁿ : on soustrait les exposants. Ex : 10⁷ ÷ 10⁴ = 10³." },
    { recto: "(aᵐ)ⁿ = ?", verso: "aᵐⁿ : on multiplie les exposants. Ex : (10³)⁴ = 10¹²." },
    { recto: "Notation scientifique : la règle ?", verso: "a × 10ⁿ avec 1 ≤ a < 10. Ex : 45 000 = 4,5 × 10⁴." },
    { recto: "kilo, milli, giga = quelles puissances ?", verso: "kilo = 10³ ; milli = 10⁻³ ; giga = 10⁹." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que vaut 5³ ?",
      choix: ["15", "125", "53", "243"],
      bonneReponse: 1,
      explication: "5³ = 5 × 5 × 5 = 125. Attention à ne pas calculer 5 × 3 = 15 !",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que vaut 10⁴ ?",
      choix: ["40", "1 000", "10 000", "100 000"],
      bonneReponse: 2,
      explication: "10⁴ = 1 suivi de 4 zéros = 10 000.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris 2 × 2 × 2 × 2 × 2 sous forme d'une puissance, puis calcule.",
      reponse: "2⁵ = 32",
      explication: "Il y a 5 facteurs égaux à 2, donc 2⁵. Et 2⁵ = 32.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que vaut 7⁰ ?",
      choix: ["0", "7", "1", "70"],
      bonneReponse: 2,
      explication: "Tout nombre non nul élevé à la puissance 0 vaut 1.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne l'écriture décimale de 10⁻³.",
      reponse: "0,001",
      explication: "10⁻³ = 1/10³ = 1/1000 = 0,001.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "3⁴ × 3² = ?",
      choix: ["3⁸", "9⁶", "3⁶", "3²"],
      bonneReponse: 2,
      explication: "Même base : on additionne les exposants. 3⁴ × 3² = 3⁴⁺² = 3⁶.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris 45 000 en notation scientifique.",
      reponse: "4,5 × 10⁴",
      explication: "On place la virgule après le premier chiffre non nul : 4,5, puis on compte le décalage : 4 rangs, donc × 10⁴.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule 10⁷ ÷ 10⁴ et donne le résultat en écriture décimale.",
      reponse: "10³ = 1 000",
      explication: "Quotient de puissances de même base : on soustrait les exposants, 7 − 4 = 3, donc 10³ = 1 000.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris (10³)⁴ sous la forme d'une seule puissance de 10.",
      reponse: "10¹²",
      explication: "Puissance de puissance : on multiplie les exposants, 3 × 4 = 12, donc 10¹².",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris 0,00072 en notation scientifique.",
      reponse: "7,2 × 10⁻⁴",
      explication: "Le premier chiffre non nul est 7 : on écrit 7,2. La virgule a été décalée de 4 rangs vers la droite, donc l'exposant est −4.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Que vaut (2⁵ × 2³) ÷ 2⁶ ?",
      choix: ["2", "4", "8", "16"],
      bonneReponse: 1,
      explication: "2⁵ × 2³ = 2⁸, puis 2⁸ ÷ 2⁶ = 2² = 4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un virus mesure 2 × 10⁻⁷ m. Combien de virus faut-il aligner pour atteindre 1 mm (soit 10⁻³ m) ?",
      reponse: "5 000 virus",
      explication: "10⁻³ ÷ (2 × 10⁻⁷) = (1/2) × 10⁻³⁻⁽⁻⁷⁾ = 0,5 × 10⁴ = 5 000.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "2⁴ = ?",
      choix: ["8", "16", "24", "6"],
      bonneReponse: 1,
      explication: "2⁴ = 2 × 2 × 2 × 2 = 16.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris 10⁵ en écriture décimale.",
      reponse: "100 000",
      explication: "10⁵ = 1 suivi de 5 zéros.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris 5⁶ × 5⁻² sous la forme d'une seule puissance de 5.",
      reponse: "5⁴",
      explication: "On additionne les exposants : 6 + (−2) = 4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la notation scientifique de 3 200 ?",
      choix: ["32 × 10²", "3,2 × 10³", "0,32 × 10⁴", "3,2 × 10²"],
      bonneReponse: 1,
      explication: "Il faut 1 ≤ a < 10 : 3 200 = 3,2 × 10³. Les écritures 32 × 10² et 0,32 × 10⁴ sont égales mais ne respectent pas la règle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Exprime 1 km en mètres à l'aide d'une puissance de 10, puis 1 mm en mètres.",
      reponse: "1 km = 10³ m et 1 mm = 10⁻³ m",
      explication: "kilo = 10³ (mille) et milli = 10⁻³ (un millième).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les puissances",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que vaut 4² ?",
          choix: ["8", "16", "42", "24"],
          bonneReponse: 1,
          explication: "4² = 4 × 4 = 16.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Écris 10 000 sous la forme d'une puissance de 10.",
          reponse: "10⁴",
          explication: "10 000 = 1 suivi de 4 zéros = 10⁴.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule 2⁻³ et donne le résultat en écriture fractionnaire puis décimale.",
          reponse: "2⁻³ = 1/8 = 0,125",
          explication: "2⁻³ est l'inverse de 2³ = 8, donc 1/8 = 0,125.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris 7⁵ × 7³ sous la forme d'une seule puissance de 7.",
          reponse: "7⁸",
          explication: "Produit de puissances de même base : on additionne les exposants, 5 + 3 = 8.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris 0,0056 en notation scientifique.",
          reponse: "5,6 × 10⁻³",
          explication: "0,0056 = 5,6 ÷ 1000 = 5,6 × 10⁻³.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "La distance Terre-Soleil est d'environ 150 000 000 km. Écris cette distance en notation scientifique, en km puis en m.",
          reponse: "1,5 × 10⁸ km = 1,5 × 10¹¹ m",
          explication: "150 000 000 = 1,5 × 10⁸. Comme 1 km = 10³ m, on a 1,5 × 10⁸ × 10³ = 1,5 × 10¹¹ m.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les puissances",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle écriture vaut 1 000 000 ?",
          choix: ["10⁵", "6¹⁰", "10⁶", "10⁷"],
          bonneReponse: 2,
          explication: "1 000 000 = 1 suivi de 6 zéros = 10⁶.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule 3³.",
          reponse: "27",
          explication: "3³ = 3 × 3 × 3 = 27 (et non 3 × 3 = 9 ni 3 + 3 + 3 = 9).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris 10⁹ ÷ 10⁵ sous la forme d'une puissance de 10, puis en écriture décimale.",
          reponse: "10⁴ = 10 000",
          explication: "On soustrait les exposants : 9 − 5 = 4, donc 10⁴ = 10 000.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "(5²)³ = ?",
          choix: ["5⁵", "5⁶", "5⁸", "25⁶"],
          bonneReponse: 1,
          explication: "Puissance de puissance : on multiplie les exposants, 2 × 3 = 6, donc 5⁶.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule 8 × 10⁵ + 3 × 10⁴ et écris le résultat en notation scientifique.",
          reponse: "8,3 × 10⁵",
          explication: "8 × 10⁵ = 800 000 et 3 × 10⁴ = 30 000, donc 830 000 = 8,3 × 10⁵.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une bactérie se divise en deux toutes les heures. On part d'une seule bactérie. Combien y en a-t-il après 10 heures ? Donne le résultat sous forme de puissance puis en écriture décimale.",
          reponse: "2¹⁰ = 1 024 bactéries",
          explication: "Le nombre double 10 fois : 2¹⁰ = 1 024.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "aⁿ = a multiplié par lui-même n fois : c'est une multiplication répétée, pas a × n.",
    "Cas particuliers : a¹ = a, a⁰ = 1, et a⁻ⁿ = 1/aⁿ (un exposant négatif donne un inverse, pas un nombre négatif).",
    "10ⁿ = 1 suivi de n zéros ; 10⁻ⁿ sert aux nombres très petits (10⁻³ = 0,001).",
    "Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10 (un seul chiffre non nul avant la virgule).",
    "Règles de calcul (même base) : produit → on additionne les exposants, quotient → on soustrait, puissance de puissance → on multiplie.",
    "Erreur à éviter absolument : écrire 2³ = 6. Non ! 2³ = 2 × 2 × 2 = 8.",
  ],
};

export default chapitre;
