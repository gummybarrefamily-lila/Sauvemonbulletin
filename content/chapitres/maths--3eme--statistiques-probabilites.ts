import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "statistiques-probabilites",
  titre: "Statistiques et probabilités",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Moyenne, médiane, étendue, quartiles pour résumer une série statistique, et calcul de probabilités d'événements : les deux grands thèmes de fin de collège, très présents au brevet.",
  objectifs: [
    "Calculer la moyenne, la médiane et l'étendue d'une série statistique",
    "Déterminer les quartiles d'une série et construire un diagramme en boîte",
    "Calculer la probabilité d'un événement dans une situation d'équiprobabilité",
    "Utiliser les probabilités avec un arbre ou un tableau à double entrée",
    "Calculer la probabilité de l'événement contraire",
  ],
  slides: [
    {
      titre: "La moyenne",
      illustration: "➗",
      visuel: "moyenne = somme des valeurs / nombre de valeurs",
      contenu: [
        "La moyenne résume une série de valeurs par un seul nombre",
        "Moyenne = (somme de toutes les valeurs) ÷ (nombre de valeurs)",
        "Exemple : notes 12, 15, 8, 17, 13 → moyenne = (12+15+8+17+13)/5 = 65/5 = 13",
        "Avec un effectif (tableau), on pondère : Σ(valeur × effectif) / effectif total",
      ],
      voixOff:
        "La moyenne est l'indicateur le plus utilisé pour résumer une série de valeurs. Elle se calcule en additionnant toutes les valeurs, puis en divisant par le nombre de valeurs. Par exemple, pour les notes douze, quinze, huit, dix-sept et treize, la somme est soixante-cinq, divisée par cinq valeurs, ce qui donne une moyenne de treize. Quand les données sont regroupées dans un tableau d'effectifs, on multiplie chaque valeur par son effectif avant de sommer, puis on divise par l'effectif total.",
    },
    {
      titre: "La médiane",
      illustration: "🎯",
      visuel: "valeurs triées : la médiane partage en 2 groupes égaux",
      contenu: [
        "On trie d'abord la série par ordre croissant",
        "Effectif impair : la médiane est la valeur du milieu",
        "Effectif pair : la médiane est la moyenne des deux valeurs du milieu",
        "Exemple (5 valeurs triées) : 8, 12, 13, 15, 17 → médiane = 13",
      ],
      voixOff:
        "La médiane est une autre façon de résumer une série : elle partage les valeurs, triées par ordre croissant, en deux groupes de même effectif. Si le nombre de valeurs est impair, la médiane est simplement la valeur du milieu. Si le nombre de valeurs est pair, la médiane est la moyenne des deux valeurs centrales. Par exemple, avec les valeurs triées huit, douze, treize, quinze, dix-sept, la médiane est treize, la valeur du milieu.",
    },
    {
      titre: "L'étendue",
      illustration: "📏",
      visuel: "étendue = valeur maximale − valeur minimale",
      contenu: [
        "L'étendue mesure la dispersion (l'écart) d'une série",
        "Étendue = valeur maximale − valeur minimale",
        "Exemple : 8, 12, 13, 15, 17 → étendue = 17 − 8 = 9",
        "Plus l'étendue est grande, plus les valeurs sont dispersées",
      ],
      voixOff:
        "L'étendue mesure la dispersion d'une série de valeurs, c'est-à-dire à quel point elles sont éloignées les unes des autres. Elle se calcule simplement en soustrayant la plus petite valeur de la plus grande. Pour la série huit, douze, treize, quinze, dix-sept, l'étendue vaut dix-sept moins huit, soit neuf. Plus l'étendue est grande, plus les valeurs de la série sont dispersées.",
    },
    {
      titre: "Les quartiles",
      illustration: "📊",
      visuel: "Q1 · médiane · Q3 : découpent la série en 4 parties égales",
      contenu: [
        "Q1 (premier quartile) : au moins 25% des valeurs lui sont inférieures ou égales",
        "Q3 (troisième quartile) : au moins 75% des valeurs lui sont inférieures ou égales",
        "Avec la série triée, Q1 est la médiane de la moitié inférieure, Q3 celle de la moitié supérieure",
        "L'écart interquartile Q3 − Q1 mesure la dispersion des valeurs centrales",
      ],
      voixOff:
        "Les quartiles découpent une série triée en quatre parties égales. Le premier quartile Q1 est la valeur en dessous de laquelle se trouvent au moins un quart des valeurs. Le troisième quartile Q3 est la valeur en dessous de laquelle se trouvent au moins trois quarts des valeurs. On calcule Q1 comme la médiane de la première moitié des valeurs, et Q3 comme la médiane de la seconde moitié. L'écart interquartile, Q3 moins Q1, permet de mesurer la dispersion de la partie centrale des données.",
    },
    {
      titre: "Le diagramme en boîte",
      illustration: "📦",
      visuel: "min ─[ Q1 | médiane | Q3 ]─ max",
      contenu: [
        "Aussi appelé « boîte à moustaches »",
        "La boîte va de Q1 à Q3, avec un trait à la médiane",
        "Les « moustaches » relient la boîte aux valeurs min et max",
        "Il permet de comparer visuellement plusieurs séries",
      ],
      voixOff:
        "Le diagramme en boîte, aussi appelé boîte à moustaches, représente visuellement une série statistique. La boîte s'étend du premier quartile au troisième quartile, avec un trait vertical marquant la médiane. Des segments, appelés moustaches, relient la boîte à la valeur minimale et à la valeur maximale. Ce diagramme est très pratique pour comparer rapidement plusieurs séries de données.",
    },
    {
      titre: "Vocabulaire des probabilités",
      illustration: "🎲",
      visuel: "issue, événement, univers",
      contenu: [
        "Une expérience aléatoire a plusieurs résultats possibles, appelés ISSUES",
        "L'ensemble de toutes les issues s'appelle l'UNIVERS",
        "Un ÉVÉNEMENT est un ensemble d'issues (ex : « obtenir un nombre pair »)",
        "Une situation d'ÉQUIPROBABILITÉ : toutes les issues ont la même chance de se produire",
      ],
      voixOff:
        "Passons aux probabilités. Une expérience aléatoire, comme lancer un dé, a plusieurs résultats possibles, appelés issues. L'ensemble de toutes les issues possibles s'appelle l'univers. Un événement est un ensemble d'issues qui nous intéresse, par exemple obtenir un nombre pair. On parle d'équiprobabilité quand toutes les issues ont exactement la même chance de se produire, comme avec un dé non truqué.",
    },
    {
      titre: "Calculer une probabilité",
      illustration: "🧮",
      visuel: "P(événement) = nombre d'issues favorables / nombre d'issues possibles",
      contenu: [
        "En situation d'équiprobabilité : P(événement) = issues favorables / issues totales",
        "Exemple : dé à 6 faces, P(« obtenir un multiple de 3 ») = 2/6 = 1/3 (issues : 3 et 6)",
        "Une probabilité est toujours comprise entre 0 et 1 (ou entre 0% et 100%)",
        "P = 0 : événement impossible ; P = 1 : événement certain",
      ],
      voixOff:
        "En situation d'équiprobabilité, la probabilité d'un événement se calcule en divisant le nombre d'issues favorables par le nombre total d'issues possibles. Par exemple, avec un dé à six faces, la probabilité d'obtenir un multiple de trois est deux sur six, car les issues favorables sont trois et six, soit un tiers. Une probabilité est toujours un nombre compris entre zéro et un : zéro pour un événement impossible, un pour un événement certain.",
    },
    {
      titre: "L'événement contraire",
      illustration: "🔄",
      visuel: "P(événement) + P(événement contraire) = 1",
      contenu: [
        "L'événement contraire de A, noté « non A », regroupe toutes les issues qui ne réalisent pas A",
        "P(A) + P(non A) = 1, donc P(non A) = 1 − P(A)",
        "Exemple : P(« obtenir un 6 ») = 1/6, donc P(« ne pas obtenir un 6 ») = 1 − 1/6 = 5/6",
        "Utile quand l'événement contraire est plus facile à compter",
      ],
      voixOff:
        "L'événement contraire d'un événement A regroupe toutes les issues qui ne réalisent pas A. La somme des probabilités d'un événement et de son contraire vaut toujours un, donc la probabilité du contraire est un moins la probabilité de A. Par exemple, la probabilité d'obtenir un six avec un dé est un sixième, donc la probabilité de ne pas obtenir de six est un moins un sixième, soit cinq sixièmes. Cette astuce est très utile quand l'événement contraire est plus simple à dénombrer.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Moyenne = somme / effectif ; médiane = valeur centrale (série triée)",
        "Étendue = max − min ; quartiles Q1, Q3 découpent en 4 parties égales",
        "Probabilité (équiprobabilité) = issues favorables / issues possibles",
        "P(A) + P(non A) = 1 ; probabilité toujours entre 0 et 1",
      ],
      voixOff:
        "Résumons ce chapitre qui mêle statistiques et probabilités. La moyenne se calcule en divisant la somme des valeurs par leur nombre ; la médiane est la valeur centrale d'une série triée. L'étendue mesure l'écart entre le maximum et le minimum, et les quartiles découpent la série en quatre parties égales. Pour les probabilités, en situation d'équiprobabilité, on divise le nombre d'issues favorables par le nombre d'issues possibles. Et n'oublie jamais que la probabilité d'un événement et celle de son contraire s'additionnent toujours pour donner un. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre regroupe deux grandes notions de fin de collège : les statistiques (résumer une série de données avec moyenne, médiane, quartiles) et les probabilités (mesurer la chance qu'un événement se réalise).",
    sections: [
      {
        titre: "Indicateurs statistiques",
        points: [
          "Moyenne = somme des valeurs / effectif total",
          "Médiane = valeur centrale d'une série triée (moyenne des deux valeurs centrales si effectif pair)",
          "Étendue = valeur maximale − valeur minimale",
        ],
      },
      {
        titre: "Quartiles et diagramme en boîte",
        points: [
          "Q1 : au moins 25% des valeurs lui sont inférieures ou égales",
          "Q3 : au moins 75% des valeurs lui sont inférieures ou égales",
          "Diagramme en boîte : boîte de Q1 à Q3, moustaches jusqu'au min et au max",
        ],
      },
      {
        titre: "Vocabulaire des probabilités",
        points: [
          "Issue : un résultat possible ; univers : ensemble de toutes les issues",
          "Événement : ensemble d'issues qui nous intéresse",
          "Équiprobabilité : toutes les issues ont la même chance de se produire",
        ],
      },
      {
        titre: "Calculer une probabilité",
        points: [
          "P(événement) = issues favorables / issues possibles (en équiprobabilité)",
          "0 ≤ P(événement) ≤ 1",
          "P(A) + P(non A) = 1",
        ],
      },
    ],
    audio:
      "Fiche de révision : statistiques et probabilités. La moyenne d'une série se calcule en divisant la somme des valeurs par leur effectif. La médiane est la valeur centrale d'une série triée par ordre croissant. L'étendue mesure la dispersion : c'est la différence entre la valeur maximale et la valeur minimale. Les quartiles découpent la série triée en quatre parties égales, et se représentent avec un diagramme en boîte. Pour les probabilités, une expérience aléatoire a plusieurs issues possibles, formant l'univers ; un événement est un ensemble d'issues. En situation d'équiprobabilité, la probabilité d'un événement se calcule en divisant le nombre d'issues favorables par le nombre total d'issues. Une probabilité est toujours comprise entre zéro et un, et la probabilité d'un événement s'ajoute à celle de son contraire pour donner un.",
  },
  memoCards: [
    { recto: "Comment calculer la moyenne d'une série ?", verso: "Moyenne = somme de toutes les valeurs ÷ nombre de valeurs." },
    { recto: "Comment trouver la médiane ?", verso: "On trie la série, puis on prend la valeur du milieu (ou la moyenne des deux valeurs centrales si effectif pair)." },
    { recto: "Comment calculer l'étendue ?", verso: "Étendue = valeur maximale − valeur minimale." },
    { recto: "Que représente le premier quartile Q1 ?", verso: "La valeur en dessous de laquelle se trouvent au moins 25% des données." },
    { recto: "Comment se construit un diagramme en boîte ?", verso: "Boîte de Q1 à Q3 avec un trait à la médiane, moustaches jusqu'au min et au max." },
    { recto: "Formule de probabilité en équiprobabilité ?", verso: "P(événement) = nombre d'issues favorables / nombre d'issues possibles." },
    { recto: "Relation entre un événement et son contraire ?", verso: "P(A) + P(non A) = 1, donc P(non A) = 1 − P(A)." },
    { recto: "Entre quelles valeurs est comprise une probabilité ?", verso: "Toujours entre 0 (impossible) et 1 (certain)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule la moyenne des notes 10, 14, 16, 12.",
      choix: ["12", "13", "14", "15"],
      bonneReponse: 1,
      explication: "Moyenne = (10+14+16+12)/4 = 52/4 = 13.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un 4 ?",
      choix: ["1/2", "1/4", "1/6", "4/6"],
      bonneReponse: 2,
      explication: "Il y a une seule issue favorable (le 4) sur six issues possibles, donc P = 1/6.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule l'étendue de la série : 5, 9, 3, 12, 7.",
      reponse: "Étendue = 9",
      explication: "Étendue = valeur maximale − valeur minimale = 12 − 3 = 9.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une probabilité peut-elle valoir 1,5 ?",
      choix: ["Oui, toujours", "Non, jamais (max 1)", "Oui si l'événement est certain", "Cela dépend du contexte"],
      bonneReponse: 1,
      explication: "Une probabilité est toujours comprise entre 0 et 1, elle ne peut jamais dépasser 1.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Détermine la médiane de la série triée : 4, 6, 9, 11, 15, 18 (6 valeurs).",
      reponse: "Médiane = 10",
      explication: "Effectif pair (6 valeurs) : la médiane est la moyenne des 2 valeurs centrales, 9 et 11 : (9+11)/2 = 10.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Dans un sac, il y a 3 boules rouges, 5 boules bleues et 2 boules vertes (10 boules en tout, indiscernables au toucher). On tire une boule au hasard. Quelle est la probabilité de tirer une boule bleue ?",
      reponse: "P = 5/10 = 1/2",
      explication: "Il y a 5 issues favorables (boules bleues) sur 10 issues possibles, donc P = 5/10 = 1/2.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Avec les données précédentes (3 rouges, 5 bleues, 2 vertes), quelle est la probabilité de NE PAS tirer une boule rouge ?",
      choix: ["3/10", "7/10", "1/10", "5/10"],
      bonneReponse: 1,
      explication: "P(rouge) = 3/10, donc P(non rouge) = 1 − 3/10 = 7/10.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Une série de 20 valeurs triées a pour médiane 14. La première moitié (10 valeurs) a pour médiane 9, et la seconde moitié a pour médiane 19. Donne Q1 et Q3.",
      reponse: "Q1 = 9 et Q3 = 19",
      explication: "Q1 est la médiane de la première moitié des valeurs, Q3 est la médiane de la seconde moitié.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Les notes d'une classe de 8 élèves à un contrôle sont : 8, 11, 12, 12, 14, 15, 16, 18. Calcule la moyenne, la médiane et l'étendue de cette série.",
      reponse: "Moyenne = 13,25 ; médiane = 13 ; étendue = 10",
      explication:
        "Moyenne = (8+11+12+12+14+15+16+18)/8 = 106/8 = 13,25. Effectif pair : médiane = (12+14)/2 = 13. Étendue = 18 − 8 = 10.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "On lance deux fois de suite une pièce équilibrée. Quelle est la probabilité d'obtenir exactement une fois « pile » ?",
      choix: ["1/4", "1/2", "3/4", "1/3"],
      bonneReponse: 1,
      explication:
        "Les 4 issues équiprobables sont PP, PF, FP, FF. Exactement une fois pile : PF et FP, soit 2 issues favorables sur 4, donc P = 2/4 = 1/2.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un tableau à double entrée croise le sexe (garçon/fille) et la pratique d'un sport (oui/non) chez 40 élèves : 12 garçons pratiquent un sport, 8 garçons n'en pratiquent pas, 15 filles pratiquent un sport, 5 filles n'en pratiquent pas. On choisit un élève au hasard. Quelle est la probabilité que ce soit une fille qui pratique un sport ?",
      reponse: "P = 15/40 = 3/8",
      explication: "Il y a 15 filles sportives sur un total de 40 élèves (12+8+15+5=40), donc P = 15/40 = 3/8.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La moyenne de 5 notes est 12. On ajoute une sixième note et la nouvelle moyenne devient 13. Quelle est la valeur de cette sixième note ?",
      reponse: "18",
      explication:
        "Somme des 5 premières notes = 5 × 12 = 60. Somme des 6 notes = 6 × 13 = 78. La sixième note = 78 − 60 = 18.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Calcule la moyenne de 6, 10, 8.",
      choix: ["7", "8", "9", "24"],
      bonneReponse: 1,
      explication: "Moyenne = (6+10+8)/3 = 24/3 = 8.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule l'étendue de la série : 2, 15, 7, 20, 9.",
      reponse: "Étendue = 18",
      explication: "Étendue = 20 − 2 = 18.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Détermine la médiane de la série triée : 3, 5, 8, 9, 12 (5 valeurs).",
      reponse: "Médiane = 8",
      explication: "Effectif impair (5 valeurs) : la médiane est la valeur du milieu, ici 8.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un sac contient 4 boules jaunes et 6 boules noires. Quelle est la probabilité de tirer une boule jaune ?",
      choix: ["4/10", "6/10", "4/6", "1/4"],
      bonneReponse: 0,
      explication: "P(jaune) = 4 issues favorables / 10 issues possibles = 4/10.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "La probabilité qu'il pleuve demain est de 0,3. Quelle est la probabilité qu'il ne pleuve pas ?",
      reponse: "0,7",
      explication: "P(non pluie) = 1 − P(pluie) = 1 − 0,3 = 0,7.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Statistiques et probabilités",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Calcule la moyenne de la série 20, 15, 25, 10, 30.",
          choix: ["18", "20", "22", "25"],
          bonneReponse: 1,
          explication: "Moyenne = (20+15+25+10+30)/5 = 100/5 = 20.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
          reponse: "P = 3/6 = 1/2",
          explication: "Les nombres pairs sont 2, 4, 6 : 3 issues favorables sur 6 possibles, donc P = 3/6 = 1/2.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Détermine la médiane de la série triée : 2, 4, 6, 8, 10, 12 (6 valeurs).",
          reponse: "Médiane = 7",
          explication: "Effectif pair : médiane = (6+8)/2 = 7.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Un jeu contient 20 cartes numérotées de 1 à 20. On tire une carte au hasard. Quelle est la probabilité d'obtenir un multiple de 5 ?",
          reponse: "P = 4/20 = 1/5",
          explication: "Les multiples de 5 entre 1 et 20 sont 5, 10, 15, 20 : 4 issues favorables sur 20, donc P = 4/20 = 1/5.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une série a une étendue de 15 et un minimum de 4. Quel est le maximum de cette série ?",
          choix: ["11", "15", "19", "4"],
          bonneReponse: 2,
          explication: "Étendue = max − min, donc max = étendue + min = 15 + 4 = 19.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Les tailles (en cm) de 8 plants de tomates sont : 45, 52, 38, 60, 55, 48, 42, 50. Calcule la moyenne et la médiane de cette série (arrondir la moyenne au dixième si nécessaire).",
          reponse: "Moyenne = 48,75 cm ; médiane = 49 cm",
          explication:
            "Somme = 45+52+38+60+55+48+42+50 = 390. Moyenne = 390/8 = 48,75. Triée : 38, 42, 45, 48, 50, 52, 55, 60. Effectif pair : médiane = (48+50)/2 = 49.",
        },
      ],
    },
    {
      titre: "Examen 2 — Statistiques et probabilités",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Calcule la moyenne de la série 7, 9, 11, 13.",
          choix: ["9", "10", "11", "40"],
          bonneReponse: 1,
          explication: "Moyenne = (7+9+11+13)/4 = 40/4 = 10.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un sac contient 10 jetons numérotés de 1 à 10. Quelle est la probabilité de tirer un nombre supérieur à 7 ?",
          reponse: "P = 3/10",
          explication: "Les nombres supérieurs à 7 sont 8, 9, 10 : 3 issues favorables sur 10, donc P = 3/10.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Détermine l'étendue de la série : 12, 5, 19, 8, 15, 3.",
          reponse: "Étendue = 16",
          explication: "Étendue = 19 − 3 = 16.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Une urne contient 6 boules blanches et 4 boules noires. On tire une boule au hasard. Quelle est la probabilité de ne PAS tirer une boule noire ?",
          reponse: "P = 6/10 = 3/5",
          explication: "P(noire) = 4/10, donc P(non noire) = 1 − 4/10 = 6/10 = 3/5 (ce qui correspond aussi directement aux boules blanches).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La moyenne de 4 notes est 11. La somme de ces 4 notes est :",
          choix: ["15", "44", "40", "11"],
          bonneReponse: 1,
          explication: "Somme = moyenne × effectif = 11 × 4 = 44.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un enseignant relève les notes de 10 élèves à un devoir : 6, 8, 9, 10, 11, 12, 12, 14, 16, 18. Détermine la médiane, puis Q1 et Q3 (Q1 = médiane des 5 premières valeurs, Q3 = médiane des 5 dernières).",
          reponse: "Médiane = 11,5 ; Q1 = 9 ; Q3 = 14",
          explication:
            "Effectif pair (10 valeurs) : médiane = (11+12)/2 = 11,5. Q1 = médiane de {6,8,9,10,11} = 9. Q3 = médiane de {12,12,14,16,18} = 14.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Moyenne = somme des valeurs / effectif total.",
    "Médiane = valeur centrale d'une série TRIÉE (moyenne des 2 valeurs centrales si effectif pair).",
    "Étendue = valeur maximale − valeur minimale (mesure la dispersion).",
    "Q1 et Q3 découpent la série triée en 4 parties égales ; diagramme en boîte pour les représenter.",
    "En équiprobabilité : P(événement) = nombre d'issues favorables / nombre d'issues possibles.",
    "P(A) + P(non A) = 1 ; une probabilité est toujours comprise entre 0 et 1.",
  ],
};

export default chapitre;
