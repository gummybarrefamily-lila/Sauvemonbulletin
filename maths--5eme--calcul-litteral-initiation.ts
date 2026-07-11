import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "calcul-litteral-initiation",
  titre: "Initiation au calcul littéral",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Découvrir les expressions littérales, savoir substituer une lettre par une valeur, réduire une expression et utiliser le calcul littéral pour les formules de périmètre et d'aire.",
  objectifs: [
    "Comprendre qu'une lettre représente un nombre inconnu ou variable",
    "Connaître les règles d'écriture d'une expression littérale (3a, ab...)",
    "Substituer une lettre par une valeur pour calculer une expression",
    "Réduire une expression en regroupant les termes semblables",
    "Utiliser le calcul littéral dans des formules de périmètre et d'aire, et découvrir la distributivité",
  ],
  slides: [
    {
      titre: "Une lettre pour représenter un nombre",
      illustration: "🔤",
      visuel: "x",
      contenu: [
        "En calcul littéral, une lettre (x, a, n...) représente un nombre inconnu ou variable",
        "Une expression contenant des lettres s'appelle une expression littérale",
        "Exemple : 3x + 5 est une expression littérale",
        "Une expression sans lettre, comme 3×7+5, est une expression numérique",
      ],
      voixOff:
        "En calcul littéral, on utilise des lettres, comme x, a ou n, pour représenter un nombre inconnu ou qui peut varier. Une expression qui contient une ou plusieurs lettres s'appelle une expression littérale. Par exemple, 3x plus 5 est une expression littérale, alors que 3 fois 7 plus 5 est une expression numérique, car elle ne contient que des nombres.",
    },
    {
      titre: "Les règles d'écriture",
      illustration: "✍️",
      visuel: "3a et non 3×a",
      contenu: [
        "Entre un nombre et une lettre, on n'écrit pas le signe × : 3×a s'écrit 3a",
        "Entre deux lettres non plus : a×b s'écrit ab",
        "Entre deux nombres, on garde le signe × : 3×5 reste 3×5",
        "3a signifie donc « 3 fois a »",
      ],
      voixOff:
        "Pour écrire une expression littérale, on suit des règles précises. Entre un nombre et une lettre, on n'écrit plus le signe multiplié : 3 fois a s'écrit simplement 3a. De même entre deux lettres, a fois b s'écrit ab. En revanche, entre deux nombres, on garde toujours le signe multiplié.",
    },
    {
      titre: "Substituer une lettre par un nombre",
      illustration: "🔁",
      visuel: "a=5 → 3a+2=17",
      contenu: [
        "Substituer, c'est remplacer une lettre par une valeur numérique",
        "Pour calculer 3a+2 quand a=5 : on remplace a par 5",
        "3a+2 = 3×5+2 = 15+2 = 17",
        "On respecte toujours les priorités opératoires (× avant +)",
      ],
      voixOff:
        "Substituer une lettre, c'est la remplacer par un nombre pour calculer la valeur de l'expression. Si a vaut 5, alors 3a plus 2 devient 3 fois 5 plus 2, soit 15 plus 2, c'est-à-dire 17. N'oublie pas de respecter les priorités : on effectue toujours la multiplication avant l'addition.",
    },
    {
      titre: "Les termes d'une expression",
      illustration: "🧩",
      visuel: "3a + 5b − 2",
      contenu: [
        "Une expression littérale est composée de termes séparés par + ou −",
        "Dans 3a + 5b − 2, les termes sont 3a, 5b et −2",
        "3a est le terme « en a », 5b est le terme « en b »",
        "−2 est un terme constant (sans lettre)",
      ],
      voixOff:
        "Une expression littérale est formée de plusieurs termes, séparés par des signes plus ou moins. Dans l'expression 3a plus 5b moins 2, il y a trois termes : 3a, 5b, et moins 2. On dit que 3a est un terme en a, 5b est un terme en b, et moins 2 est un terme constant, car il ne contient pas de lettre.",
    },
    {
      titre: "Réduire une expression",
      illustration: "🧮",
      visuel: "3a + 5a = 8a",
      contenu: [
        "Réduire, c'est regrouper les termes semblables (même lettre)",
        "3a + 5a = 8a (on additionne les nombres devant la même lettre)",
        "7x − 2x = 5x",
        "⚠️ On ne peut PAS réduire 3a + 5b : les lettres sont différentes",
      ],
      voixOff:
        "Réduire une expression, c'est regrouper les termes qui se ressemblent, c'est-à-dire ceux qui ont la même lettre. Trois a plus cinq a égale huit a, et sept x moins deux x égale cinq x. Attention, on ne peut jamais additionner des termes avec des lettres différentes : trois a plus cinq b ne peut pas être réduit, il reste 3a plus 5b.",
    },
    {
      titre: "Le calcul littéral en géométrie",
      illustration: "📐",
      visuel: "P = 4c    A = L×l",
      contenu: [
        "Le périmètre d'un carré de côté c : P = 4×c, soit 4c",
        "Le périmètre d'un rectangle : P = 2×(L+l)",
        "L'aire d'un rectangle : A = L×l",
        "L'aire d'un carré de côté c : A = c×c = c²",
      ],
      voixOff:
        "Les formules de géométrie sont un excellent exemple de calcul littéral. Le périmètre d'un carré de côté c vaut 4 fois c. Le périmètre d'un rectangle vaut 2 fois la somme de la longueur et de la largeur. L'aire d'un rectangle vaut longueur fois largeur, et l'aire d'un carré vaut c fois c, que l'on note c au carré.",
    },
    {
      titre: "Un calcul astucieux : la distributivité",
      illustration: "💡",
      visuel: "5×98 = 5×(100−2) = 490",
      contenu: [
        "Règle : k×(a+b) = k×a + k×b",
        "On peut aussi l'utiliser avec une soustraction : k×(a−b) = k×a − k×b",
        "Exemple : 5×98 = 5×(100−2) = 5×100 − 5×2 = 500 − 10 = 490",
        "Cette astuce permet de calculer plus vite, de tête",
      ],
      voixOff:
        "Voici une propriété très utile : k fois la quantité a plus b est égal à k fois a plus k fois b. On peut l'utiliser pour calculer plus vite. Par exemple, pour calculer 5 fois 98, on écrit 98 comme 100 moins 2. On obtient 5 fois 100 moins 5 fois 2, soit 500 moins 10, c'est-à-dire 490.",
    },
    {
      titre: "Tester si une égalité est vraie",
      illustration: "🔍",
      visuel: "2x+1 = 9 ? (x=4)",
      contenu: [
        "On peut vérifier si une expression est égale à un nombre pour une valeur donnée",
        "Est-ce que 2x+1 = 9 quand x=4 ?",
        "On substitue : 2×4+1 = 8+1 = 9",
        "L'égalité est vraie pour x=4",
      ],
      voixOff:
        "On peut aussi tester si une égalité est vraie pour une valeur donnée de la lettre. Par exemple, l'expression 2x plus 1 est-elle égale à 9 quand x vaut 4 ? On substitue x par 4 : 2 fois 4 plus 1 égale 8 plus 1, c'est-à-dire 9. L'égalité est donc vraie pour x égal 4.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Une lettre représente un nombre inconnu ou variable",
        "3a, ab : on n'écrit pas le signe × entre un nombre et une lettre, ni entre deux lettres",
        "Substituer = remplacer une lettre par sa valeur pour calculer",
        "On ne réduit que des termes de même lettre : 3a+5a=8a, mais 3a+5b ne se réduit pas",
      ],
      voixOff:
        "Résumons l'essentiel. Une lettre représente un nombre inconnu ou variable. On n'écrit pas le signe multiplié entre un nombre et une lettre, ni entre deux lettres. Substituer une lettre, c'est la remplacer par sa valeur pour calculer l'expression. Enfin, on ne peut réduire que des termes qui ont la même lettre. Tu connais maintenant les bases du calcul littéral !",
    },
  ],
  fiche: {
    intro:
      "Le calcul littéral utilise des lettres pour représenter des nombres. On peut substituer une lettre par une valeur, regrouper des termes semblables, et utiliser des formules pour calculer des périmètres et des aires.",
    sections: [
      {
        titre: "Vocabulaire",
        points: [
          "Expression littérale : expression qui contient une ou plusieurs lettres (ex : 3x+5)",
          "Variable : la lettre qui représente le nombre inconnu (souvent x, a, n)",
          "Substituer : remplacer une lettre par une valeur numérique pour calculer",
        ],
      },
      {
        titre: "Écriture et termes",
        points: [
          "On n'écrit pas × entre un nombre et une lettre : 3×a s'écrit 3a",
          "On n'écrit pas × entre deux lettres : a×b s'écrit ab",
          "On garde × entre deux nombres : 3×5",
          "Une expression est composée de termes séparés par + ou − (ex : dans 3a+5b−2, les termes sont 3a, 5b et −2)",
        ],
      },
      {
        titre: "Réduire une expression",
        points: [
          "Réduire = regrouper les termes qui ont la même lettre",
          "3a+5a = 8a ; 7x−2x = 5x",
          "On ne peut pas réduire des termes de lettres différentes : 3a+5b reste 3a+5b",
        ],
      },
      {
        titre: "Formules et distributivité",
        points: [
          "Périmètre du carré : P = 4c ; périmètre du rectangle : P = 2×(L+l)",
          "Aire du rectangle : A = L×l ; aire du carré : A = c×c = c²",
          "Distributivité : k×(a+b) = k×a + k×b, utile pour calculer astucieusement (5×98 = 5×100−5×2 = 490)",
        ],
      },
    ],
    audio:
      "Fiche de révision : initiation au calcul littéral. Une lettre, comme x, a ou n, représente un nombre inconnu ou variable, et une expression qui contient des lettres s'appelle une expression littérale. Attention aux règles d'écriture : on n'écrit pas le signe multiplié entre un nombre et une lettre, ni entre deux lettres, donc 3 fois a s'écrit 3a, et a fois b s'écrit ab ; en revanche on garde le signe multiplié entre deux nombres. Substituer une lettre, c'est la remplacer par une valeur numérique pour calculer l'expression : si a vaut 5, alors 3a plus 2 égale 3 fois 5 plus 2, soit 17. Une expression littérale est composée de termes séparés par des signes plus ou moins : dans 3a plus 5b moins 2, les termes sont 3a, 5b et moins 2. Réduire une expression, c'est regrouper les termes qui ont la même lettre : 3a plus 5a égale 8a, mais on ne peut jamais réduire 3a plus 5b, car les lettres sont différentes. Le calcul littéral sert aussi en géométrie : le périmètre d'un carré est 4c, le périmètre d'un rectangle est 2 fois la somme de la longueur et de la largeur, l'aire d'un rectangle est L fois l, et l'aire d'un carré est c au carré. Enfin, la distributivité dit que k fois la quantité a plus b égale k fois a plus k fois b : c'est une astuce pratique, par exemple pour calculer 5 fois 98 en écrivant 98 comme 100 moins 2, ce qui donne 490.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce qu'une expression littérale ?",
      verso: "Une expression qui contient une ou plusieurs lettres représentant des nombres. Ex : 3x+5",
    },
    {
      recto: "Comment écrit-on 3×a ?",
      verso: "3a. On n'écrit pas le signe × entre un nombre et une lettre.",
    },
    {
      recto: "Que signifie « substituer » ?",
      verso: "Remplacer une lettre par une valeur numérique pour calculer l'expression. Ex : a=5 → 3a+2=17",
    },
    {
      recto: "Quels sont les termes de 3a+5b−2 ?",
      verso: "3a, 5b et −2 (séparés par + ou −).",
    },
    {
      recto: "Réduis 3a+5a",
      verso: "8a (on additionne les nombres devant la même lettre).",
    },
    {
      recto: "Peut-on réduire 3a+5b ?",
      verso: "Non ! Les lettres sont différentes, on ne peut pas regrouper ces termes.",
    },
    {
      recto: "Périmètre d'un carré de côté c ?",
      verso: "P = 4c (on peut aussi écrire 4×c).",
    },
    {
      recto: "Distributivité : k×(a+b) = ?",
      verso: "k×a + k×b. Ex : 5×98 = 5×(100−2) = 500−10 = 490",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment écrit-on 3×a en calcul littéral ?",
      choix: ["3×a", "3a", "a3", "3+a"],
      bonneReponse: 1,
      explication: "On n'écrit pas le signe × entre un nombre et une lettre : 3×a s'écrit 3a.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Si x = 5, que vaut 2x ?",
      choix: ["7", "10", "25", "2"],
      bonneReponse: 1,
      explication: "2x signifie 2×x. Pour x=5 : 2×5 = 10.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule la valeur de 3a+2 pour a=5.",
      reponse: "17",
      explication: "On substitue a par 5 : 3×5+2 = 15+2 = 17.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans l'expression 4x − 3, quelle est la variable (la lettre) ?",
      reponse: "x",
      explication: "La variable est la lettre qui représente le nombre inconnu : ici, c'est x.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Combien de termes contient l'expression 3a + 5b − 2 ?",
      choix: ["2", "3", "4", "1"],
      bonneReponse: 1,
      explication: "Les termes, séparés par + ou −, sont 3a, 5b et −2 : il y en a 3.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réduis l'expression 3a + 5a.",
      reponse: "8a",
      explication: "3a et 5a sont des termes semblables (même lettre a) : 3+5 = 8, donc 3a+5a = 8a.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Peut-on réduire l'expression 3a + 5b ? Justifie ta réponse.",
      reponse: "Non, on ne peut pas réduire cette expression, elle reste 3a + 5b.",
      explication: "3a et 5b n'ont pas la même lettre : ce ne sont pas des termes semblables, on ne peut donc pas les regrouper.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est l'aire d'un carré de côté c=6 cm (A = c²) ?",
      choix: ["12", "24", "36", "6"],
      bonneReponse: 2,
      explication: "A = c×c = 6×6 = 36 : l'aire vaut 36 cm².",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le périmètre d'un rectangle de longueur L=8 cm et largeur l=3 cm, avec la formule P = 2×(L+l).",
      reponse: "22 cm",
      explication: "P = 2×(8+3) = 2×11 = 22 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Réduis l'expression 7x − 2x + 3.",
      reponse: "5x + 3",
      explication: "7x et −2x sont des termes semblables : 7x−2x = 5x. Le terme constant +3 ne peut pas se regrouper avec 5x, l'expression réduite est donc 5x+3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Utilise la distributivité pour calculer astucieusement 5×98.",
      reponse: "490",
      explication: "5×98 = 5×(100−2) = 5×100 − 5×2 = 500 − 10 = 490.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pour x=4, l'expression 2x+1 est-elle égale à 9 ?",
      choix: ["Oui", "Non", "On ne peut pas savoir", "Seulement si x=9"],
      bonneReponse: 0,
      explication: "On substitue x par 4 : 2×4+1 = 8+1 = 9. L'égalité est bien vraie pour x=4.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que représente une lettre dans une expression littérale ?",
      choix: ["Toujours le nombre 1", "Un nombre inconnu ou variable", "Une unité de mesure", "Un signe d'opération"],
      bonneReponse: 1,
      explication: "Une lettre (x, a, n...) représente un nombre inconnu ou qui peut varier.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Pour a=3, calcule 5a.",
      reponse: "15",
      explication: "5a = 5×3 = 15.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réduis l'expression 9x − 4x.",
      reponse: "5x",
      explication: "9x et 4x sont des termes semblables : 9−4 = 5, donc 9x−4x = 5x.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quels termes peut-on additionner ou soustraire ensemble pour réduire une expression ?",
      choix: [
        "Des termes avec des lettres différentes",
        "Des termes avec la même lettre (même sorte)",
        "N'importe quels termes",
        "Seulement les nombres sans lettre",
      ],
      bonneReponse: 1,
      explication: "On ne peut regrouper que des termes semblables, c'est-à-dire ayant la même lettre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule astucieusement 4×102 en utilisant 4×(100+2).",
      reponse: "408",
      explication: "4×(100+2) = 4×100 + 4×2 = 400 + 8 = 408.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Initiation au calcul littéral",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment écrit-on 7×x sans le signe × ?",
          choix: ["7×x", "7x", "x7", "7+x"],
          bonneReponse: 1,
          explication: "On n'écrit pas le signe × entre un nombre et une lettre : 7×x s'écrit 7x.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Pour n=6, calcule 3n+4.",
          reponse: "22",
          explication: "3n+4 = 3×6+4 = 18+4 = 22.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réduis l'expression 6a + 2a − 3.",
          reponse: "8a − 3",
          explication: "6a et 2a sont des termes semblables : 6a+2a = 8a. Le terme −3 reste à part : l'expression réduite est 8a−3.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Le périmètre d'un carré de côté c est donné par P = 4c. Calcule P pour c=7 cm.",
          reponse: "28 cm",
          explication: "P = 4×7 = 28 cm.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Laquelle de ces expressions est égale à 3×(x+4) ?",
          choix: ["3x+4", "3x+12", "x+12", "3x+7"],
          bonneReponse: 1,
          explication: "Par distributivité : 3×(x+4) = 3×x + 3×4 = 3x+12.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule astucieusement 6×99 en écrivant 99 = 100 − 1.",
          reponse: "594",
          explication: "6×99 = 6×(100−1) = 6×100 − 6×1 = 600 − 6 = 594.",
        },
      ],
    },
    {
      titre: "Examen 2 — Initiation au calcul littéral",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que veut dire « substituer une lettre par une valeur » ?",
          choix: ["Supprimer la lettre", "Remplacer la lettre par un nombre pour calculer", "Multiplier par la lettre", "Additionner deux lettres"],
          bonneReponse: 1,
          explication: "Substituer, c'est remplacer une lettre par un nombre pour calculer la valeur de l'expression.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Pour x=2, calcule 5x − 1.",
          reponse: "9",
          explication: "5x−1 = 5×2−1 = 10−1 = 9.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans l'expression 7a − 3b + 1, quels sont les termes ?",
          reponse: "7a, −3b et 1",
          explication: "Les termes sont séparés par + ou − : ici, 7a, −3b et 1.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "L'aire d'un rectangle est A = L×l. Calcule A pour L=9 cm et l=4 cm.",
          reponse: "36 cm²",
          explication: "A = 9×4 = 36 cm².",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pour x=4, l'expression 3x+2 est-elle égale à 14 ?",
          choix: ["Oui", "Non", "Impossible à dire", "Seulement si x=14"],
          bonneReponse: 0,
          explication: "On substitue x par 4 : 3×4+2 = 12+2 = 14. L'égalité est bien vraie pour x=4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Réduis l'expression 5a + 3a − 2a.",
          reponse: "6a",
          explication: "5a+3a−2a : on additionne et soustrait les nombres devant la lettre a : 5+3−2 = 6, donc 6a.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une lettre représente un nombre inconnu ou variable : c'est la base du calcul littéral.",
    "On n'écrit jamais le signe × entre un nombre et une lettre, ni entre deux lettres (3a, ab).",
    "Substituer une lettre, c'est la remplacer par sa valeur pour calculer l'expression.",
    "On ne peut réduire (additionner ou soustraire) que des termes qui ont la même lettre.",
    "Les formules de périmètre et d'aire sont des exemples concrets de calcul littéral (P=4c, A=L×l...).",
    "La distributivité k×(a+b)=k×a+k×b permet de calculer plus vite, de tête.",
  ],
};

export default chapitre;
