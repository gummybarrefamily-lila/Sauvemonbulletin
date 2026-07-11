import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "calcul-litteral-developpement",
  titre: "Calcul littéral : développer et réduire",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Développer une expression littérale grâce à la distributivité, réduire une expression en regroupant les termes semblables, et calculer sa valeur.",
  objectifs: [
    "Comprendre ce qu'est une expression littérale et calculer sa valeur",
    "Développer une expression avec la distributivité simple k(a+b) = ka + kb",
    "Réduire une expression en regroupant les termes semblables",
    "Gérer un signe moins devant une parenthèse",
    "Développer un produit de deux parenthèses (a+b)(c+d) et réduire le résultat",
  ],
  slides: [
    {
      titre: "Rappel : une expression littérale",
      illustration: "🔤",
      visuel: "3x + 5",
      contenu: [
        "Une expression littérale contient des lettres (souvent x) qui représentent des nombres inconnus",
        "3x + 5 signifie 3 × x + 5",
        "On peut calculer sa valeur en remplaçant x par un nombre",
        "Développer = transformer un produit en somme ; réduire = simplifier une somme",
      ],
      voixOff:
        "Une expression littérale contient des lettres, souvent la lettre x, qui représentent des nombres inconnus. Trois x plus cinq signifie trois fois x, plus cinq. On peut calculer la valeur d'une expression en remplaçant la lettre par un nombre. Aujourd'hui, on apprend deux techniques essentielles : développer, c'est-à-dire transformer un produit en somme, et réduire, c'est-à-dire simplifier une somme.",
    },
    {
      titre: "La distributivité simple",
      illustration: "🎯",
      visuel: "k(a+b) = ka + kb",
      contenu: [
        "k(a+b) = ka + kb : on distribue k à chaque terme entre parenthèses",
        "3(x + 5) = 3×x + 3×5 = 3x + 15",
        "On multiplie k par a, puis k par b, puis on additionne les deux résultats",
        "C'est la règle de la distributivité",
      ],
      voixOff:
        "Voici la règle de la distributivité : k fois la parenthèse a plus b égale k fois a, plus k fois b. On distribue k à chaque terme entre parenthèses. Trois fois la parenthèse x plus cinq devient trois fois x, plus trois fois cinq, soit trois x plus quinze. On multiplie k par chaque terme, puis on additionne les résultats.",
    },
    {
      titre: "Distribuer avec une soustraction",
      illustration: "➖",
      visuel: "k(a−b) = ka − kb",
      contenu: [
        "k(a−b) = ka − kb : même principe, avec un signe moins",
        "4(x − 2) = 4×x − 4×2 = 4x − 8",
        "Attention à bien distribuer le signe moins à l'intérieur",
        "5(2x − 3) = 10x − 15",
      ],
      voixOff:
        "Le même principe s'applique avec une soustraction : k fois la parenthèse a moins b égale k fois a, moins k fois b. Quatre fois la parenthèse x moins deux devient quatre x moins huit. Attention à bien distribuer le signe moins à chaque terme. Cinq fois la parenthèse deux x moins trois devient dix x moins quinze.",
    },
    {
      titre: "Réduire une expression",
      illustration: "🧹",
      visuel: "3x + 5x = 8x",
      contenu: [
        "Des termes semblables ont la même partie littérale (x, x², ...)",
        "3x + 5x = 8x : on additionne les coefficients",
        "3x + 2 − 5x + 7 = −2x + 9",
        "On ne peut pas réduire des termes différents : 3x et 5 restent séparés",
      ],
      voixOff:
        "Réduire une expression, c'est regrouper les termes semblables, c'est-à-dire ceux qui ont la même partie littérale. Trois x plus cinq x égale huit x : on additionne simplement les coefficients. Trois x plus deux, moins cinq x, plus sept, se réduit en moins deux x plus neuf. Mais attention, on ne peut jamais réduire des termes différents : trois x et cinq restent séparés, car l'un a un x et l'autre non.",
    },
    {
      titre: "Le piège du signe moins devant une parenthèse",
      illustration: "⚠️",
      visuel: "−(x+3) = −x−3",
      contenu: [
        "−(x + 3) = −x − 3 : le signe moins change le signe de chaque terme à l'intérieur",
        "5 − (2x − 4) = 5 − 2x + 4 = 9 − 2x",
        "On peut imaginer un « −1 » invisible devant la parenthèse",
        "Il faut bien changer TOUS les signes à l'intérieur de la parenthèse",
      ],
      voixOff:
        "Voici un piège très fréquent : un signe moins devant une parenthèse change le signe de chaque terme à l'intérieur. Moins la parenthèse x plus trois devient moins x moins trois. Cinq moins la parenthèse deux x moins quatre devient cinq moins deux x plus quatre, soit neuf moins deux x. Tu peux imaginer un moins un invisible devant la parenthèse : il faut changer tous les signes à l'intérieur, sans exception.",
    },
    {
      titre: "La double distributivité",
      illustration: "🔲",
      visuel: "(a+b)(c+d) = ac + ad + bc + bd",
      contenu: [
        "Chaque terme du premier facteur multiplie chaque terme du second",
        "(x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10",
        "(x + 3)(x − 2) = x² − 2x + 3x − 6 = x² + x − 6",
        "On réduit toujours à la fin en regroupant les termes semblables",
      ],
      voixOff:
        "Quand on multiplie deux parenthèses entre elles, chaque terme du premier facteur multiplie chaque terme du second. La parenthèse x plus deux, fois la parenthèse x plus cinq, donne x carré plus cinq x plus deux x plus dix, soit x carré plus sept x plus dix après réduction. La parenthèse x plus trois, fois la parenthèse x moins deux, donne x carré plus x moins six. On réduit toujours à la fin en regroupant les termes semblables.",
    },
    {
      titre: "Calculer la valeur d'une expression",
      illustration: "🔢",
      visuel: "E = 3x+5, x=4 → E=17",
      contenu: [
        "On remplace x par sa valeur, puis on calcule",
        "E = 3x + 5, pour x = 4 : E = 3×4 + 5 = 12 + 5 = 17",
        "Développer ou réduire d'abord facilite souvent le calcul",
        "Utile pour vérifier qu'une expression développée est correcte",
      ],
      voixOff:
        "Pour calculer la valeur d'une expression, on remplace la lettre par le nombre donné, puis on calcule en respectant les priorités. Pour E égale trois x plus cinq, avec x égal quatre, on obtient trois fois quatre plus cinq, soit douze plus cinq, soit dix-sept. Développer ou réduire l'expression avant de calculer facilite souvent le travail, et permet aussi de vérifier qu'un développement est correct.",
    },
    {
      titre: "Pièges à éviter",
      illustration: "🚫",
      visuel: "3(x+5) ≠ 3x+5",
      contenu: [
        "3(x + 5) ≠ 3x + 5 : il faut distribuer à CHAQUE terme, donc 3x + 15",
        "x + x = 2x, mais x × x = x² (ne pas confondre !)",
        "−(x − 4) = −x + 4, et non −x − 4",
        "2x × 3x = 6x², pas 6x",
      ],
      voixOff:
        "Voici les pièges classiques à éviter absolument. Trois fois la parenthèse x plus cinq n'est jamais égal à trois x plus cinq : il faut distribuer à chaque terme, ce qui donne trois x plus quinze. Ne confonds pas x plus x, qui vaut deux x, avec x fois x, qui vaut x carré. Moins la parenthèse x moins quatre égale moins x plus quatre, et surtout pas moins x moins quatre. Et deux x fois trois x égale six x carré, pas six x.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Distributivité : k(a+b) = ka+kb et k(a−b) = ka−kb",
        "Réduire : additionner les coefficients des termes ayant la même partie littérale",
        "Signe moins devant parenthèse : on change le signe de chaque terme à l'intérieur",
        "Double distributivité : (a+b)(c+d) = ac+ad+bc+bd, puis on réduit",
      ],
      voixOff:
        "Résumons. La distributivité permet de développer : k fois la parenthèse a plus b égale k a plus k b, et de même avec un signe moins. Réduire, c'est additionner les coefficients des termes ayant la même partie littérale. Un signe moins devant une parenthèse change le signe de chaque terme à l'intérieur. Et pour multiplier deux parenthèses, on applique la double distributivité, puis on réduit toujours le résultat.",
    },
  ],
  fiche: {
    intro:
      "Développer, c'est transformer un produit en somme grâce à la distributivité. Réduire, c'est regrouper les termes semblables pour simplifier une expression.",
    sections: [
      {
        titre: "Distributivité simple",
        points: [
          "k(a+b) = ka + kb ; exemple : 3(x+5) = 3x+15",
          "k(a−b) = ka − kb ; exemple : 4(x−2) = 4x−8",
          "On distribue k à chaque terme entre parenthèses",
        ],
      },
      {
        titre: "Réduire une expression",
        points: [
          "Des termes semblables ont la même partie littérale (x, x², ...)",
          "On additionne les coefficients des termes semblables",
          "3x + 5x = 8x ; 3x + 2 − 5x + 7 = −2x + 9",
        ],
      },
      {
        titre: "Le signe moins devant une parenthèse",
        points: [
          "−(a+b) = −a−b : on change le signe de chaque terme à l'intérieur",
          "Exemple : 5 − (2x−4) = 5 − 2x + 4 = 9 − 2x",
          "Un moins devant une parenthèse agit comme un « −1 » distribué",
        ],
      },
      {
        titre: "Double distributivité",
        points: [
          "(a+b)(c+d) = ac + ad + bc + bd",
          "(x+2)(x+5) = x² + 7x + 10",
          "(x+3)(x−2) = x² + x − 6",
          "On réduit toujours le résultat à la fin",
        ],
      },
    ],
    audio:
      "Fiche de révision : développer et réduire une expression littérale. La distributivité permet de développer un produit en somme : k fois la parenthèse a plus b égale k a plus k b, et k fois la parenthèse a moins b égale k a moins k b. Réduire une expression consiste à regrouper les termes semblables, c'est-à-dire ceux qui ont la même partie littérale, en additionnant leurs coefficients : trois x plus cinq x égale huit x. Attention au piège du signe moins devant une parenthèse : il change le signe de chaque terme à l'intérieur, comme si on distribuait moins un. Enfin, pour multiplier deux parenthèses entre elles, on utilise la double distributivité : chaque terme du premier facteur multiplie chaque terme du second, puis on réduit le résultat obtenu.",
  },
  memoCards: [
    { recto: "k(a+b) = ?", verso: "ka + kb : on distribue k à chaque terme. Ex : 3(x+5) = 3x+15." },
    { recto: "k(a−b) = ?", verso: "ka − kb. Ex : 4(x−2) = 4x−8." },
    { recto: "Que sont des termes semblables ?", verso: "Des termes ayant la même partie littérale (x, x², ...). On peut les additionner." },
    { recto: "Réduis 3x + 5x.", verso: "8x : on additionne les coefficients (3 et 5)." },
    { recto: "−(a+b) = ?", verso: "−a − b : le signe moins change le signe de chaque terme à l'intérieur." },
    { recto: "(a+b)(c+d) = ?", verso: "ac + ad + bc + bd : chaque terme du premier facteur multiplie chaque terme du second." },
    { recto: "Comment calculer la valeur d'une expression ?", verso: "On remplace la lettre par le nombre donné, puis on calcule en respectant les priorités." },
    { recto: "x + x et x × x : même résultat ?", verso: "Non ! x + x = 2x, mais x × x = x² (une somme n'est pas un produit)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe 2(x+4).",
      choix: ["2x+4", "2x+8", "x+8", "2x+6"],
      bonneReponse: 1,
      explication: "On distribue 2 à chaque terme : 2×x + 2×4 = 2x + 8.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Réduis 5x + 3x.",
      choix: ["8x", "15x", "8x²", "2x"],
      bonneReponse: 0,
      explication: "Ce sont des termes semblables : on additionne les coefficients, 5 + 3 = 8, donc 8x.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Développe 3(x−2).",
      reponse: "3x − 6",
      explication: "On distribue 3 à chaque terme : 3×x − 3×2 = 3x − 6.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule la valeur de 2x + 1 pour x = 5.",
      choix: ["11", "10", "6", "7"],
      bonneReponse: 0,
      explication: "On remplace x par 5 : 2×5 + 1 = 10 + 1 = 11.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réduis 4x + 7 − 2x + 3.",
      reponse: "2x + 10",
      explication: "On regroupe les termes en x : 4x − 2x = 2x. Puis les nombres : 7 + 3 = 10. Résultat : 2x + 10.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Développe −(x+6).",
      choix: ["−x+6", "−x−6", "x−6", "x+6"],
      bonneReponse: 1,
      explication: "Le signe moins change le signe de chaque terme à l'intérieur : −x − 6.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Développe 5(2x−3).",
      reponse: "10x − 15",
      explication: "On distribue 5 à chaque terme : 5×2x − 5×3 = 10x − 15.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Réduis 7x − 3x + 2 − 5.",
      choix: ["4x−3", "4x+3", "10x−3", "4x−7"],
      bonneReponse: 0,
      explication: "7x − 3x = 4x et 2 − 5 = −3, donc 4x − 3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis (x+3)(x+2).",
      reponse: "x² + 5x + 6",
      explication: "(x+3)(x+2) = x² + 2x + 3x + 6 = x² + 5x + 6 après avoir regroupé 2x et 3x.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis (x−4)(x+5).",
      reponse: "x² + x − 20",
      explication: "(x−4)(x+5) = x² + 5x − 4x − 20 = x² + x − 20 après avoir regroupé 5x et −4x.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Développe et réduis 3(x+2) − 2(x−1).",
      choix: ["x+8", "5x+4", "x+4", "5x+8"],
      bonneReponse: 0,
      explication: "3(x+2) = 3x+6 et 2(x−1) = 2x−2, donc 3x+6 − (2x−2) = 3x+6−2x+2 = x+8.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un rectangle a pour longueur (x+3) cm et pour largeur x cm. Exprime son périmètre en fonction de x, sous forme développée et réduite, puis calcule ce périmètre pour x = 4 cm.",
      reponse: "P = 4x + 6 ; pour x = 4, P = 22 cm.",
      explication: "P = 2 × [(x+3) + x] = 2 × (2x+3) = 4x + 6. Pour x = 4 : P = 4×4 + 6 = 22 cm.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Développe 4(x+1).",
      choix: ["4x+1", "4x+4", "x+4", "4x+5"],
      bonneReponse: 1,
      explication: "On distribue 4 à chaque terme : 4×x + 4×1 = 4x + 4.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Réduis 6x − 2x.",
      reponse: "4x",
      explication: "Termes semblables : 6 − 2 = 4, donc 4x.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Développe −(2x−5).",
      choix: ["−2x+5", "−2x−5", "2x−5", "2x+5"],
      bonneReponse: 0,
      explication: "Le signe moins change le signe de chaque terme : −2x + 5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Développe et réduis 2(x+3) + 3(x−1).",
      reponse: "5x + 3",
      explication: "2(x+3) = 2x+6 et 3(x−1) = 3x−3, donc 2x+6+3x−3 = 5x+3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Développe et réduis (x+1)(x+4).",
      reponse: "x² + 5x + 4",
      explication: "(x+1)(x+4) = x² + 4x + x + 4 = x² + 5x + 4.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Développer et réduire",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Développe 5(x+2).",
          choix: ["5x+2", "5x+10", "x+10", "5x+7"],
          bonneReponse: 1,
          explication: "On distribue 5 à chaque terme : 5×x + 5×2 = 5x + 10.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Réduis 8x + 3x.",
          reponse: "11x",
          explication: "Termes semblables : 8 + 3 = 11, donc 11x.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Développe −(x−7).",
          choix: ["−x+7", "−x−7", "x−7", "x+7"],
          bonneReponse: 0,
          explication: "Le signe moins change le signe de chaque terme : −x + 7.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réduis 5x − 3 − 2x + 9.",
          reponse: "3x + 6",
          explication: "5x − 2x = 3x et −3 + 9 = 6, donc 3x + 6.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Développe et réduis (x+5)(x−3).",
          reponse: "x² + 2x − 15",
          explication: "(x+5)(x−3) = x² − 3x + 5x − 15 = x² + 2x − 15.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un carré a pour côté (x+2) cm. Exprime son périmètre en fonction de x, développé et réduit, puis calcule-le pour x = 3 cm.",
          reponse: "P = 4x + 8 ; pour x = 3, P = 20 cm.",
          explication: "P = 4×(x+2) = 4x + 8. Pour x = 3 : P = 4×3 + 8 = 20 cm.",
        },
      ],
    },
    {
      titre: "Examen 2 — Développer et réduire",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Développe 3(x+7).",
          choix: ["3x+7", "3x+21", "x+21", "3x+10"],
          bonneReponse: 1,
          explication: "On distribue 3 à chaque terme : 3×x + 3×7 = 3x + 21.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule la valeur de 4x − 3 pour x = 2.",
          reponse: "5",
          explication: "On remplace x par 2 : 4×2 − 3 = 8 − 3 = 5.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Réduis 9x − 4x + 6 − 2.",
          choix: ["5x+4", "5x+8", "13x+4", "5x−4"],
          bonneReponse: 0,
          explication: "9x − 4x = 5x et 6 − 2 = 4, donc 5x + 4.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Développe −(3x−8).",
          reponse: "−3x + 8",
          explication: "Le signe moins change le signe de chaque terme : −3x + 8.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Développe et réduis (x−2)(x−6).",
          reponse: "x² − 8x + 12",
          explication: "(x−2)(x−6) = x² − 6x − 2x + 12 = x² − 8x + 12.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un rectangle a pour longueur (2x+1) cm et pour largeur 3 cm. Exprime son aire en fonction de x, sous forme développée et réduite, puis calcule-la pour x = 5 cm.",
          reponse: "A = 6x + 3 ; pour x = 5, A = 33 cm².",
          explication: "A = 3 × (2x+1) = 6x + 3. Pour x = 5 : A = 6×5 + 3 = 33 cm².",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Distributivité simple : k(a+b) = ka + kb et k(a−b) = ka − kb.",
    "Réduire une expression : additionner les coefficients des termes ayant la même partie littérale.",
    "Un signe moins devant une parenthèse change le signe de chaque terme à l'intérieur : −(a+b) = −a−b.",
    "Double distributivité : (a+b)(c+d) = ac + ad + bc + bd, puis on réduit toujours le résultat.",
    "Piège à éviter : x + x = 2x mais x × x = x² ; et 3(x+5) ≠ 3x + 5.",
    "Pour calculer la valeur d'une expression, on remplace la lettre par le nombre puis on respecte les priorités opératoires.",
  ],
};

export default chapitre;
