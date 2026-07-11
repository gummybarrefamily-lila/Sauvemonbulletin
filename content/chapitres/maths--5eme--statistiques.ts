import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "statistiques",
  titre: "Statistiques : moyenne et effectifs",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Comprendre le vocabulaire des statistiques, lire un tableau d'effectifs ou un graphique, calculer une moyenne (simple ou pondérée) et l'étendue d'une série pour comparer des résultats.",
  objectifs: [
    "Connaître le vocabulaire des statistiques (population, caractère, valeurs, effectif, effectif total)",
    "Lire et construire un tableau d'effectifs",
    "Lire des représentations graphiques (diagramme en bâtons, diagramme circulaire, histogramme)",
    "Calculer une moyenne simple et une moyenne pondérée",
    "Calculer l'étendue d'une série et comparer deux séries statistiques",
  ],
  slides: [
    {
      titre: "Le vocabulaire de la statistique",
      illustration: "📋",
      visuel: "Population, caractère, valeurs",
      contenu: [
        "La population étudiée : l'ensemble des individus observés (ex : les élèves d'une classe)",
        "Le caractère étudié : ce qu'on observe chez chaque individu (ex : la note obtenue)",
        "Les valeurs (ou modalités) : les résultats possibles du caractère (ex : 8, 12, 15...)",
      ],
      voixOff:
        "En statistique, on étudie une population, c'est-à-dire un ensemble d'individus, par exemple les élèves d'une classe. Chez chaque individu, on observe un caractère, comme la note obtenue à un contrôle ou la couleur préférée. Les résultats possibles de ce caractère s'appellent les valeurs, ou les modalités.",
    },
    {
      titre: "Effectif et effectif total",
      illustration: "🔢",
      visuel: "effectif total = somme des effectifs",
      contenu: [
        "L'effectif d'une valeur : le nombre d'individus qui ont cette valeur",
        "L'effectif total : la somme de tous les effectifs",
        "Exemple : notes 8 (eff. 3), 12 (eff. 5), 15 (eff. 2) → effectif total = 3+5+2 = 10",
      ],
      voixOff:
        "L'effectif d'une valeur, c'est le nombre d'individus de la population qui ont obtenu cette valeur. Si trois élèves ont eu huit, cinq ont eu douze et deux ont eu quinze, alors l'effectif total de la classe est trois plus cinq plus deux, soit dix élèves. L'effectif total correspond donc toujours au nombre total d'individus étudiés.",
    },
    {
      titre: "Le tableau d'effectifs",
      illustration: "📊",
      visuel: "tableau à deux lignes",
      contenu: [
        "Une ligne pour les valeurs du caractère étudié",
        "Une ligne juste en dessous pour les effectifs correspondants",
        "Permet d'organiser des données brutes de façon claire",
      ],
      voixOff:
        "Pour présenter des données statistiques, on utilise souvent un tableau d'effectifs. Sur la première ligne, on écrit les valeurs du caractère étudié. Sur la deuxième ligne, juste en dessous, on écrit l'effectif correspondant à chaque valeur. C'est un outil essentiel pour organiser et lire rapidement des données.",
    },
    {
      titre: "Lire un diagramme en bâtons",
      illustration: "📈",
      visuel: "hauteur du bâton = effectif",
      contenu: [
        "Chaque bâton correspond à une valeur du caractère",
        "La hauteur du bâton indique l'effectif de cette valeur",
        "Utile pour comparer rapidement les effectifs entre eux",
      ],
      voixOff:
        "Un diagramme en bâtons est une autre façon de représenter des effectifs. Chaque bâton est associé à une valeur, et la hauteur du bâton indique l'effectif de cette valeur. Plus le bâton est haut, plus il y a d'individus qui ont obtenu cette valeur.",
    },
    {
      titre: "Diagramme circulaire et histogramme",
      illustration: "🥧",
      visuel: "camembert = parts proportionnelles",
      contenu: [
        "Diagramme circulaire (camembert) : chaque part représente un effectif proportionnel",
        "Histogramme : des rectangles pour des valeurs regroupées en classes",
        "On choisit la représentation selon ce qu'on veut montrer",
      ],
      voixOff:
        "On peut aussi représenter des statistiques avec un diagramme circulaire, aussi appelé camembert, où chaque part est proportionnelle à l'effectif qu'elle représente. Un histogramme, lui, utilise des rectangles pour représenter des valeurs regroupées en classes, comme des tranches d'âge. Ces représentations permettent de visualiser d'un coup d'œil la répartition d'une population.",
    },
    {
      titre: "Calculer une moyenne",
      illustration: "🎯",
      visuel: "moyenne = somme ÷ nombre de valeurs",
      contenu: [
        "La moyenne = somme de toutes les valeurs ÷ nombre de valeurs",
        "Exemple : notes 12, 15, 8, 17, 13 → (12+15+8+17+13) ÷ 5",
        "65 ÷ 5 = 13 : la moyenne de la série est 13",
      ],
      voixOff:
        "La moyenne d'une série, c'est la somme de toutes les valeurs, divisée par le nombre de valeurs. Prenons les notes douze, quinze, huit, dix-sept et treize : la somme fait soixante-cinq, et il y a cinq notes. Soixante-cinq divisé par cinq égale treize : la moyenne de la série est donc treize.",
    },
    {
      titre: "Moyenne pondérée (avec un tableau d'effectifs)",
      illustration: "🧮",
      visuel: "(Σ valeur × effectif) ÷ effectif total",
      contenu: [
        "Quand des valeurs se répètent, on utilise un tableau d'effectifs",
        "Moyenne = (somme des valeur × effectif) ÷ effectif total",
        "Exemple : 8 (eff. 2), 12 (eff. 5), 16 (eff. 3) → (16+60+48) ÷ 10 = 12,4",
      ],
      voixOff:
        "Quand plusieurs individus ont la même valeur, on calcule une moyenne pondérée à partir d'un tableau d'effectifs. On multiplie chaque valeur par son effectif, on additionne tous ces résultats, puis on divise par l'effectif total. Par exemple, avec la note huit obtenue deux fois, douze obtenue cinq fois et seize obtenue trois fois, on trouve une moyenne de douze virgule quatre.",
    },
    {
      titre: "L'étendue d'une série",
      illustration: "📏",
      visuel: "étendue = maximum − minimum",
      contenu: [
        "L'étendue mesure la dispersion d'une série",
        "Étendue = valeur maximale − valeur minimale",
        "Exemple : notes de 6 à 18 → étendue = 18 − 6 = 12",
      ],
      voixOff:
        "L'étendue d'une série statistique permet de savoir si les valeurs sont proches les unes des autres ou très dispersées. Elle se calcule en faisant la différence entre la valeur maximale et la valeur minimale de la série. Si les notes d'une classe vont de six à dix-huit, l'étendue est de douze.",
    },
    {
      titre: "Comparer des séries",
      illustration: "🏆",
      visuel: "moyenne + étendue",
      contenu: [
        "Deux séries peuvent avoir la même moyenne mais une étendue différente",
        "Une étendue petite = des valeurs resserrées, plus homogènes",
        "Pour comparer deux séries, on regarde à la fois la moyenne et l'étendue",
      ],
      voixOff:
        "Pour comparer deux séries statistiques, il ne suffit pas de regarder la moyenne. Deux classes peuvent avoir exactement la même moyenne, mais des résultats très différents : l'une avec des notes resserrées, l'autre avec des notes très dispersées. C'est l'étendue qui permet de repérer cette différence : plus l'étendue est petite, plus les valeurs sont homogènes, c'est-à-dire proches les unes des autres.",
    },
  ],
  fiche: {
    intro:
      "Une série statistique décrit un caractère observé sur une population. On peut la résumer avec un effectif total, une moyenne et une étendue.",
    sections: [
      {
        titre: "Vocabulaire",
        points: [
          "Population étudiée : l'ensemble des individus observés (ex : les élèves d'une classe)",
          "Caractère étudié : ce qu'on observe chez chaque individu (ex : la note obtenue)",
          "Valeurs (ou modalités) : les résultats possibles du caractère",
          "Effectif d'une valeur : le nombre d'individus qui ont cette valeur",
          "Effectif total : la somme de tous les effectifs (= nombre total d'individus)",
        ],
      },
      {
        titre: "Tableaux et graphiques",
        points: [
          "Tableau d'effectifs : une ligne pour les valeurs, une ligne pour les effectifs",
          "Diagramme en bâtons : la hauteur du bâton donne l'effectif de chaque valeur",
          "Diagramme circulaire (camembert) : chaque part est proportionnelle à l'effectif",
          "Histogramme : des rectangles pour des valeurs regroupées en classes",
        ],
      },
      {
        titre: "Calculer une moyenne",
        points: [
          "Moyenne simple = (somme des valeurs) ÷ (nombre de valeurs). Ex : (12+15+8+17+13) ÷ 5 = 13",
          "Moyenne pondérée = (somme des [valeur × effectif]) ÷ (effectif total). Ex : (8×2+12×5+16×3) ÷ 10 = 12,4",
          "La moyenne peut être décimale : elle n'est pas forcément une valeur de la série",
        ],
      },
      {
        titre: "L'étendue et comparer des séries",
        points: [
          "Étendue = valeur maximale − valeur minimale. Ex : de 6 à 18 → étendue = 12",
          "Une étendue petite signifie des valeurs resserrées (série homogène)",
          "Pour comparer deux séries, on utilise ensemble la moyenne et l'étendue",
        ],
      },
    ],
    audio:
      "Fiche de révision : les statistiques. Une série statistique décrit un caractère étudié chez les individus d'une population : par exemple, la note obtenue par les élèves d'une classe. Les résultats possibles s'appellent les valeurs, et l'effectif d'une valeur est le nombre d'individus qui ont obtenu cette valeur ; l'effectif total est la somme de tous les effectifs, c'est-à-dire le nombre total d'individus étudiés. Ces données peuvent être organisées dans un tableau d'effectifs, ou représentées par un diagramme en bâtons, un diagramme circulaire appelé camembert, ou un histogramme. Pour résumer une série, on calcule sa moyenne : la moyenne simple est la somme de toutes les valeurs divisée par le nombre de valeurs, par exemple douze, quinze, huit, dix-sept et treize donnent une moyenne de treize. Quand les valeurs se répètent, on calcule une moyenne pondérée à partir d'un tableau d'effectifs : on multiplie chaque valeur par son effectif, on additionne, puis on divise par l'effectif total ; par exemple huit obtenu deux fois, douze obtenu cinq fois et seize obtenu trois fois donnent une moyenne de douze virgule quatre. Attention, la moyenne peut très bien ne pas être une des valeurs réellement obtenues. Enfin, l'étendue d'une série est la différence entre la valeur maximale et la valeur minimale : elle mesure si les valeurs sont proches les unes des autres ou très dispersées. Pour comparer deux séries statistiques, on utilise à la fois leur moyenne et leur étendue.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce que la population étudiée ?",
      verso: "L'ensemble des individus sur lesquels porte l'étude (ex : les 25 élèves d'une classe).",
    },
    {
      recto: "Qu'est-ce que le caractère étudié ?",
      verso: "Ce que l'on observe chez chaque individu de la population (ex : la note obtenue, la couleur préférée).",
    },
    {
      recto: "Qu'est-ce que l'effectif d'une valeur ?",
      verso: "Le nombre d'individus qui ont cette valeur du caractère étudié.",
    },
    {
      recto: "Qu'est-ce que l'effectif total ?",
      verso: "La somme de tous les effectifs = le nombre total d'individus de la population.",
    },
    {
      recto: "Comment calculer une moyenne simple ?",
      verso: "Moyenne = (somme de toutes les valeurs) ÷ (nombre de valeurs). Ex : 12, 15, 8, 17, 13 → 65 ÷ 5 = 13.",
    },
    {
      recto: "Comment calculer une moyenne pondérée ?",
      verso: "Moyenne = (somme des valeur × effectif) ÷ (effectif total). Ex : 8 (×2), 12 (×5), 16 (×3) → 124 ÷ 10 = 12,4.",
    },
    {
      recto: "Qu'est-ce que l'étendue d'une série ?",
      verso: "Étendue = valeur maximale − valeur minimale. Ex : notes de 6 à 18 → étendue = 12.",
    },
    {
      recto: "Comment comparer deux séries statistiques ?",
      verso: "En comparant leur moyenne (niveau général) et leur étendue (dispersion) : plus l'étendue est petite, plus la série est homogène.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question:
        "Dans une enquête sur la couleur préférée des 25 élèves d'une classe, quelle est la population étudiée ?",
      choix: ["Les couleurs", "Les 25 élèves de la classe", "La couleur préférée", "Le nombre 25"],
      bonneReponse: 1,
      explication: "La population étudiée, ce sont les individus observés : ici, les 25 élèves de la classe.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans cette même enquête, quel est le caractère étudié ?",
      choix: ["Les 25 élèves", "La classe", "La couleur préférée de chaque élève", "Le nombre de couleurs"],
      bonneReponse: 2,
      explication: "Le caractère étudié est ce qu'on observe chez chaque individu : ici, la couleur préférée.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question:
        "Voici les notes obtenues par une classe : la valeur 8 a un effectif de 3, la valeur 12 a un effectif de 5, la valeur 15 a un effectif de 2. Quel est l'effectif total de la classe ?",
      reponse: "10 élèves",
      explication: "L'effectif total est la somme de tous les effectifs : 3 + 5 + 2 = 10.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question:
        "Sur un diagramme en bâtons représentant le nombre de buts marqués par match, la barre au-dessus de la valeur « 2 buts » atteint 7. Que représente ce nombre 7 ?",
      choix: [
        "Il y a eu 7 matchs en tout",
        "7 matchs se sont terminés avec 2 buts marqués",
        "Le nombre moyen de buts est 7",
        "L'équipe a gagné 7 fois",
      ],
      bonneReponse: 1,
      explication: "La hauteur du bâton donne l'effectif de la valeur : 7 matchs ont eu exactement 2 buts marqués.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule la moyenne des notes suivantes : 12, 15, 8, 17, 13.",
      reponse: "13",
      explication: "(12+15+8+17+13) ÷ 5 = 65 ÷ 5 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Une classe a obtenu les notes suivantes à un contrôle : 8 (effectif 2), 12 (effectif 5), 16 (effectif 3). Calcule la moyenne de la classe.",
      reponse: "12,4",
      explication:
        "Effectif total = 2+5+3 = 10. Moyenne = (8×2 + 12×5 + 16×3) ÷ 10 = (16+60+48) ÷ 10 = 124 ÷ 10 = 12,4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Les températures relevées chaque jour d'une semaine sont : 14°C, 18°C, 16°C, 9°C, 20°C, 17°C, 15°C. Calcule l'étendue de cette série.",
      reponse: "11°C",
      explication: "La valeur maximale est 20°C, la valeur minimale est 9°C. Étendue = 20 − 9 = 11.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question:
        "Deux classes ont eu la même moyenne de 12 à un contrôle : la classe A a une étendue de 8, la classe B a une étendue de 3. Que peut-on en conclure ?",
      choix: [
        "La classe A est plus homogène (les notes sont plus proches les unes des autres)",
        "La classe B est plus homogène (les notes sont plus proches les unes des autres)",
        "Les deux classes sont aussi homogènes l'une que l'autre",
        "La classe A a de meilleures notes",
      ],
      bonneReponse: 1,
      explication: "Une étendue plus petite signifie des notes plus resserrées autour de la moyenne : la classe B est plus homogène.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un sondage sur le nombre d'enfants par famille dans un quartier donne : 0 enfant (4 familles), 1 enfant (6 familles), 2 enfants (8 familles), 3 enfants (2 familles). Calcule le nombre moyen d'enfants par famille.",
      reponse: "1,4 enfant",
      explication:
        "Effectif total = 4+6+8+2 = 20. Somme = 0×4 + 1×6 + 2×8 + 3×2 = 0+6+16+6 = 28. Moyenne = 28 ÷ 20 = 1,4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Le tableau suivant donne les tailles, en cm, de 20 élèves d'une classe : 150 cm (effectif 4), 155 cm (effectif a), 160 cm (effectif 6), 165 cm (effectif 3). Sachant que l'effectif total est 20, calcule a.",
      reponse: "a = 7",
      explication: "4 + a + 6 + 3 = 20, donc a = 20 − 4 − 6 − 3 = 7.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Voici les buts marqués par une équipe lors de 6 matchs : 1, 3, 0, 2, 4, 2. Calcule la moyenne et l'étendue de cette série.",
      reponse: "Moyenne = 2 buts ; étendue = 4",
      explication:
        "Moyenne = (1+3+0+2+4+2) ÷ 6 = 12 ÷ 6 = 2. Étendue = valeur maximale (4) − valeur minimale (0) = 4.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Après avoir calculé une moyenne, on trouve 12,4. Que peut-on dire ?",
      choix: [
        "C'est forcément une erreur, la moyenne doit être un nombre entier",
        "La moyenne n'est pas obligatoirement une des valeurs de la série de départ",
        "La moyenne est toujours la valeur la plus fréquente",
        "La moyenne est toujours égale à l'effectif total",
      ],
      bonneReponse: 1,
      explication:
        "La moyenne peut être décimale et ne correspond pas forcément à une valeur réellement obtenue dans la série.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on le nombre total d'individus dans une population étudiée ?",
      choix: ["Le caractère", "L'effectif total", "La valeur", "La moyenne"],
      bonneReponse: 1,
      explication: "L'effectif total est la somme de tous les effectifs, c'est-à-dire le nombre total d'individus.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule la moyenne de 10, 14, 12, 16.",
      reponse: "13",
      explication: "(10+14+12+16) ÷ 4 = 52 ÷ 4 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une série de notes va de 6 à 19. Quelle est son étendue ?",
      reponse: "13",
      explication: "Étendue = valeur maximale − valeur minimale = 19 − 6 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule la moyenne pondérée : 10 (effectif 2) et 14 (effectif 3).",
      reponse: "12,4",
      explication: "Effectif total = 2+3 = 5. Moyenne = (10×2 + 14×3) ÷ 5 = (20+42) ÷ 5 = 62 ÷ 5 = 12,4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pour comparer deux séries statistiques, quels sont les deux indicateurs les plus utiles ?",
      choix: [
        "La population et le caractère",
        "La moyenne et l'étendue",
        "Le numérateur et le dénominateur",
        "L'effectif et la valeur maximale seule",
      ],
      bonneReponse: 1,
      explication: "La moyenne donne le niveau général de la série, et l'étendue indique si les valeurs sont dispersées ou resserrées.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Statistiques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question:
            "On interroge 28 élèves sur leur moyen de transport pour aller au collège. La valeur « à pied » a un effectif de 9. Que signifie ce nombre 9 ?",
          choix: [
            "9 élèves viennent à pied",
            "Il y a 9 moyens de transport différents",
            "La moyenne est 9",
            "9 % des élèves viennent à pied",
          ],
          bonneReponse: 0,
          explication: "L'effectif d'une valeur est le nombre d'individus qui ont cette valeur : ici, 9 élèves viennent à pied.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question:
            "Voici la répartition des 28 élèves selon leur moyen de transport : à pied (9), en bus (12), en voiture (5), à vélo (2). Vérifie que l'effectif total correspond bien aux 28 élèves annoncés.",
          reponse: "9 + 12 + 5 + 2 = 28, l'effectif total correspond bien aux 28 élèves.",
          explication: "L'effectif total est la somme de tous les effectifs du tableau.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule la moyenne des 5 notes suivantes : 9, 11, 14, 16, 10.",
          reponse: "12",
          explication: "(9+11+14+16+10) ÷ 5 = 60 ÷ 5 = 12.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Une classe de 25 élèves a obtenu les notes suivantes à une évaluation : 6 (effectif 3), 10 (effectif 8), 14 (effectif 10), 18 (effectif 4). Calcule la moyenne de la classe.",
          reponse: "12,4",
          explication:
            "Effectif total = 3+8+10+4 = 25. Somme = 6×3 + 10×8 + 14×10 + 18×4 = 18+80+140+72 = 310. Moyenne = 310 ÷ 25 = 12,4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Les températures maximales relevées à Paris durant une semaine sont : 22°C, 25°C, 19°C, 28°C, 24°C, 20°C, 23°C. Calcule l'étendue de cette série de températures.",
          reponse: "9°C",
          explication: "La valeur maximale est 28°C, la valeur minimale est 19°C. Étendue = 28 − 19 = 9.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Deux groupes d'élèves ont passé le même test. Groupe 1 : moyenne 14, étendue 4. Groupe 2 : moyenne 14, étendue 10. Quelle affirmation est correcte ?",
          choix: [
            "Le groupe 1 est plus hétérogène que le groupe 2",
            "Les résultats du groupe 1 sont plus resserrés autour de la moyenne que ceux du groupe 2",
            "Le groupe 2 a une meilleure moyenne que le groupe 1",
            "On ne peut rien dire sans connaître l'effectif total",
          ],
          bonneReponse: 1,
          explication: "Avec la même moyenne, une étendue plus petite (4 contre 10) signifie des résultats plus resserrés, donc plus homogènes.",
        },
      ],
    },
    {
      titre: "Examen 2 — Statistiques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question:
            "Dans une enquête sur le nombre de frères et sœurs des élèves d'une classe, quelles sont les « valeurs » possibles du caractère étudié ?",
          choix: [
            "Les élèves de la classe",
            "Le nombre de frères et sœurs (0, 1, 2, 3...)",
            "L'effectif total de la classe",
            "Le nom de chaque élève",
          ],
          bonneReponse: 1,
          explication: "Les valeurs (ou modalités) sont les résultats possibles du caractère étudié : ici, le nombre de frères et sœurs.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question:
            "Un sondage sur le sport préféré donne : football (10), basket (6), natation (4), tennis (5). Quel est l'effectif total de ce sondage ?",
          reponse: "25 personnes",
          explication: "Effectif total = 10 + 6 + 4 + 5 = 25.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule la moyenne des notes suivantes : 7, 10, 13, 15.",
          reponse: "11,25",
          explication: "(7+10+13+15) ÷ 4 = 45 ÷ 4 = 11,25. La moyenne n'est pas forcément un nombre entier.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Voici le nombre de buts marqués par une équipe de handball lors de 12 matchs, sous forme de tableau d'effectifs : 0 but (effectif 2), 1 but (effectif 4), 2 buts (effectif 4), 3 buts (effectif 2). Calcule le nombre moyen de buts marqués par match.",
          reponse: "1,5 but par match",
          explication:
            "Effectif total = 2+4+4+2 = 12. Somme = 0×2 + 1×4 + 2×4 + 3×2 = 0+4+8+6 = 18. Moyenne = 18 ÷ 12 = 1,5.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Les tailles, en cm, de 6 élèves d'un groupe A sont : 150, 152, 149, 151, 153, 150. Les tailles de 6 élèves d'un groupe B sont : 130, 160, 145, 170, 140, 165. Calcule l'étendue de chaque groupe, puis dis lequel est le plus homogène.",
          reponse:
            "Étendue du groupe A = 4 cm ; étendue du groupe B = 40 cm. Le groupe A est plus homogène.",
          explication:
            "Groupe A : maximum 153, minimum 149, étendue = 4. Groupe B : maximum 170, minimum 130, étendue = 40. Une étendue plus petite signifie des tailles plus proches les unes des autres.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Pour calculer la moyenne d'une série donnée par un tableau d'effectifs, quelle formule utilise-t-on ?",
          choix: [
            "(somme des valeurs) ÷ (nombre de valeurs différentes)",
            "(somme des [valeur × effectif]) ÷ (effectif total)",
            "(valeur maximale − valeur minimale) ÷ 2",
            "(effectif total) ÷ (nombre de valeurs différentes)",
          ],
          bonneReponse: 1,
          explication: "La moyenne pondérée se calcule en multipliant chaque valeur par son effectif, en additionnant, puis en divisant par l'effectif total.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La population est l'ensemble étudié, le caractère est ce qu'on observe, et les valeurs sont les résultats possibles.",
    "L'effectif d'une valeur compte les individus concernés ; l'effectif total est la somme de tous les effectifs.",
    "La moyenne simple = (somme des valeurs) ÷ (nombre de valeurs) ; la moyenne pondérée = (somme des [valeur × effectif]) ÷ (effectif total).",
    "L'étendue = valeur maximale − valeur minimale : elle mesure la dispersion d'une série.",
    "La moyenne n'est pas forcément une valeur de la série : elle peut être décimale.",
    "Pour comparer deux séries, on utilise à la fois la moyenne et l'étendue.",
  ],
};

export default chapitre;
