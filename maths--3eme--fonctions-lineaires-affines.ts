import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "fonctions-lineaires-affines",
  titre: "Fonctions linéaires et affines",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Fonctions linéaires f(x) = ax et affines f(x) = ax + b, coefficient directeur, ordonnée à l'origine et représentation graphique : un grand classique du brevet.",
  objectifs: [
    "Reconnaître une fonction linéaire et une fonction affine",
    "Calculer et interpréter le coefficient a et l'ordonnée à l'origine b",
    "Tracer la représentation graphique d'une fonction affine",
    "Déterminer l'expression d'une fonction affine à partir de données",
    "Relier proportionnalité et fonction linéaire",
  ],
  slides: [
    {
      titre: "La fonction linéaire",
      illustration: "📏",
      visuel: "f(x) = ax",
      contenu: [
        "Une fonction linéaire s'écrit f(x) = ax, où a est un nombre fixé",
        "Exemple : f(x) = 3x → f(2) = 6, f(5) = 15",
        "Elle correspond à une situation de proportionnalité",
        "a est appelé le coefficient de proportionnalité (ou coefficient directeur)",
      ],
      voixOff:
        "Une fonction linéaire est une fonction qui s'écrit sous la forme f de x égale a fois x, où a est un nombre fixé. Par exemple, avec f de x égale trois x, l'image de deux est six, et l'image de cinq est quinze. Ce type de fonction correspond exactement à une situation de proportionnalité, et le nombre a s'appelle le coefficient de proportionnalité.",
    },
    {
      titre: "La fonction affine",
      illustration: "➕",
      visuel: "f(x) = ax + b",
      contenu: [
        "Une fonction affine s'écrit f(x) = ax + b, où a et b sont des nombres fixés",
        "Exemple : f(x) = 2x + 3 → f(1) = 5, f(4) = 11",
        "Si b = 0, la fonction affine est aussi linéaire",
        "Si a = 0, f(x) = b est une fonction constante",
      ],
      voixOff:
        "Une fonction affine généralise la fonction linéaire : elle s'écrit f de x égale a x plus b, avec a et b deux nombres fixés. Par exemple, avec f de x égale deux x plus trois, l'image de un est cinq, et l'image de quatre est onze. Si b est nul, on retrouve une fonction linéaire. Si a est nul, la fonction est constante, elle renvoie toujours la même valeur b.",
    },
    {
      titre: "Le coefficient directeur a",
      illustration: "📈",
      visuel: "a = variation de f(x) / variation de x",
      contenu: [
        "a indique comment f(x) varie quand x augmente de 1",
        "Si a > 0, la fonction est croissante (elle monte)",
        "Si a < 0, la fonction est décroissante (elle descend)",
        "Si a = 0, la fonction est constante (droite horizontale)",
      ],
      voixOff:
        "Le nombre a s'appelle le coefficient directeur : il indique de combien varie f de x quand x augmente de un. Si a est positif, la fonction est croissante, sa représentation graphique monte de gauche à droite. Si a est négatif, la fonction est décroissante, elle descend. Si a est nul, la fonction est constante et sa courbe est une droite horizontale.",
    },
    {
      titre: "Calculer a à partir de deux points",
      illustration: "🧮",
      visuel: "a = (yB − yA) / (xB − xA)",
      contenu: [
        "Avec deux points A(xA ; yA) et B(xB ; yB) de la droite",
        "a = (yB − yA) / (xB − xA)",
        "Exemple : A(1 ; 5) et B(3 ; 11) → a = (11 − 5)/(3 − 1) = 6/2 = 3",
        "Puis on trouve b en remplaçant dans f(x) = ax + b avec un point",
      ],
      voixOff:
        "Pour calculer le coefficient directeur a à partir de deux points connus de la droite, on utilise la formule : a égale la variation de y divisée par la variation de x, c'est-à-dire y de B moins y de A, sur x de B moins x de A. Avec les points A un, cinq et B trois, onze, on obtient a égale onze moins cinq, sur trois moins un, soit six sur deux, donc trois.",
    },
    {
      titre: "Déterminer l'expression complète",
      illustration: "🔍",
      visuel: "f(x) = 3x + b, avec f(1) = 5",
      contenu: [
        "On a trouvé a = 3, donc f(x) = 3x + b",
        "On utilise un point connu, par exemple f(1) = 5",
        "3 × 1 + b = 5 → b = 5 − 3 = 2",
        "L'expression complète est f(x) = 3x + 2",
      ],
      voixOff:
        "Une fois a trouvé, on cherche b en utilisant un point connu de la droite. Ici, a vaut trois, et on sait que f de un égale cinq. On remplace dans f de x égale trois x plus b : trois fois un plus b égale cinq, donc b égale deux. L'expression complète de la fonction est donc f de x égale trois x plus deux.",
    },
    {
      titre: "La droite représentative",
      illustration: "📉",
      visuel: "b = ordonnée à l'origine (point où la droite coupe l'axe des y)",
      contenu: [
        "La représentation graphique d'une fonction affine est une DROITE",
        "b est l'ordonnée à l'origine : la droite coupe l'axe des ordonnées au point (0 ; b)",
        "Pour tracer la droite, il suffit de deux points",
        "Méthode rapide : placer (0 ; b), puis avancer de 1 en x et de a en y",
      ],
      voixOff:
        "La représentation graphique d'une fonction affine est toujours une droite. Le nombre b s'appelle l'ordonnée à l'origine, car la droite coupe l'axe vertical au point de coordonnées zéro, b. Pour tracer cette droite, deux points suffisent : on peut placer le point d'ordonnée à l'origine, puis se déplacer d'une unité vers la droite et de a unités vers le haut ou le bas, selon le signe de a.",
    },
    {
      titre: "Fonction linéaire et proportionnalité",
      illustration: "🔗",
      visuel: "f(x) = ax → droite passant par l'ORIGINE (0 ; 0)",
      contenu: [
        "La droite d'une fonction linéaire passe toujours par l'origine du repère",
        "C'est logique : f(0) = a × 0 = 0",
        "Un tableau de proportionnalité correspond à une fonction linéaire f(x) = ax",
        "a est alors le coefficient de proportionnalité (produit en croix)",
      ],
      voixOff:
        "Il y a un lien fort entre fonction linéaire et proportionnalité. La droite représentant une fonction linéaire passe toujours par l'origine du repère, car l'image de zéro est toujours zéro. Un tableau de proportionnalité peut donc toujours se traduire par une fonction linéaire f de x égale a x, où a est le coefficient de proportionnalité que l'on retrouve avec un produit en croix.",
    },
    {
      titre: "Lire graphiquement a et b",
      illustration: "👀",
      visuel: "droite qui coupe l'axe des y en 2, qui monte de 3 quand x avance de 1",
      contenu: [
        "b se lit directement : c'est l'ordonnée du point où la droite coupe l'axe vertical",
        "a se lit en comptant : de combien la droite monte (ou descend) quand x avance de 1",
        "Si la droite monte : a > 0 ; si elle descend : a < 0",
        "Une droite horizontale correspond à a = 0",
      ],
      voixOff:
        "Sur un graphique, on peut lire directement a et b. L'ordonnée à l'origine b se lit à l'endroit où la droite coupe l'axe vertical. Le coefficient directeur a se lit en comptant de combien la droite monte ou descend lorsque x avance d'une unité. Si la droite monte, a est positif ; si elle descend, a est négatif ; si elle est horizontale, a est nul.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Fonction linéaire : f(x) = ax, droite passant par l'origine, proportionnalité",
        "Fonction affine : f(x) = ax + b, droite quelconque",
        "a = coefficient directeur (pente) ; b = ordonnée à l'origine",
        "a = (yB − yA) / (xB − xA) avec deux points A et B de la droite",
      ],
      voixOff:
        "Résumons. Une fonction linéaire s'écrit f de x égale a x, sa droite passe par l'origine, et elle correspond à une situation de proportionnalité. Une fonction affine s'écrit f de x égale a x plus b, sa droite coupe l'axe vertical au point d'ordonnée b. Le coefficient a indique la pente de la droite, et se calcule à partir de deux points connus avec la formule variation de y sur variation de x. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Les fonctions linéaires et affines sont représentées par des droites. Ce chapitre relie l'algèbre (calcul de a et b) et la géométrie (lecture et tracé de droites), très présent au brevet.",
    sections: [
      {
        titre: "Fonction linéaire",
        points: [
          "f(x) = ax : la droite passe par l'origine (0 ; 0)",
          "Correspond à une situation de proportionnalité",
          "a = coefficient de proportionnalité",
        ],
      },
      {
        titre: "Fonction affine",
        points: [
          "f(x) = ax + b : la droite coupe l'axe des ordonnées en (0 ; b)",
          "a = coefficient directeur (pente) ; b = ordonnée à l'origine",
          "Si b = 0 : fonction linéaire ; si a = 0 : fonction constante",
        ],
      },
      {
        titre: "Calculer a et b",
        points: [
          "a = (yB − yA) / (xB − xA) avec deux points A et B connus",
          "b se trouve en remplaçant un point connu dans f(x) = ax + b",
        ],
      },
      {
        titre: "Lecture graphique",
        points: [
          "Signe de a : droite qui monte (a > 0), qui descend (a < 0), horizontale (a = 0)",
          "b se lit au point d'intersection avec l'axe des ordonnées",
          "Pour tracer : placer (0 ; b), puis avancer de 1 en x et de a en y",
        ],
      },
    ],
    audio:
      "Fiche de révision : fonctions linéaires et affines. Une fonction linéaire s'écrit f de x égale a x ; sa représentation graphique est une droite qui passe par l'origine du repère, et elle correspond à une situation de proportionnalité. Une fonction affine s'écrit f de x égale a x plus b ; sa droite coupe l'axe des ordonnées au point d'ordonnée b. Le coefficient a, appelé coefficient directeur, indique la pente de la droite : positif, la droite monte ; négatif, elle descend ; nul, elle est horizontale. On calcule a à partir de deux points connus avec la formule variation de y divisée par variation de x. On trouve ensuite b en remplaçant les coordonnées d'un point connu dans l'expression de la fonction.",
  },
  memoCards: [
    { recto: "Forme générale d'une fonction linéaire ?", verso: "f(x) = ax. Sa droite passe par l'origine (0 ; 0)." },
    { recto: "Forme générale d'une fonction affine ?", verso: "f(x) = ax + b. Sa droite coupe l'axe des ordonnées en (0 ; b)." },
    { recto: "Que représente a ?", verso: "Le coefficient directeur : la pente de la droite." },
    { recto: "Que représente b ?", verso: "L'ordonnée à l'origine : où la droite coupe l'axe vertical." },
    { recto: "Formule pour calculer a avec deux points A et B ?", verso: "a = (yB − yA) / (xB − xA)." },
    { recto: "Signe de a si la droite est croissante ?", verso: "a > 0 (la droite monte de gauche à droite)." },
    { recto: "Lien entre fonction linéaire et proportionnalité ?", verso: "Un tableau de proportionnalité se traduit toujours par f(x) = ax, où a est le coefficient de proportionnalité." },
    { recto: "Comment tracer une fonction affine avec 2 points ?", verso: "Choisir deux valeurs de x, calculer leurs images, placer les points, tracer la droite." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Laquelle de ces fonctions est linéaire ?",
      choix: ["f(x) = 2x + 3", "f(x) = 5x", "f(x) = x²", "f(x) = 4"],
      bonneReponse: 1,
      explication: "f(x) = 5x est de la forme ax, sans terme constant : c'est une fonction linéaire.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Soit f(x) = 4x − 3. Que vaut f(2) ?",
      choix: ["5", "8", "1", "11"],
      bonneReponse: 0,
      explication: "f(2) = 4 × 2 − 3 = 8 − 3 = 5.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Soit f(x) = 3x + 1. Quelle est l'ordonnée à l'origine de sa droite représentative ?",
      reponse: "1",
      explication: "L'ordonnée à l'origine est le terme constant b, ici égal à 1 : la droite coupe l'axe des y en (0 ; 1).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La droite d'une fonction linéaire passe toujours par le point :",
      choix: ["(1 ; 1)", "(0 ; 0)", "(0 ; 1)", "(1 ; 0)"],
      bonneReponse: 1,
      explication: "Pour une fonction linéaire f(x) = ax, f(0) = a × 0 = 0, donc la droite passe par l'origine (0 ; 0).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une droite passe par A(0 ; 4) et B(2 ; 10). Détermine le coefficient directeur a.",
      reponse: "a = 3",
      explication: "a = (10 − 4)/(2 − 0) = 6/2 = 3.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une fonction affine f a pour coefficient directeur a = 2 et vérifie f(3) = 11. Détermine b, puis l'expression de f.",
      reponse: "b = 5 ; f(x) = 2x + 5",
      explication: "2 × 3 + b = 11, donc 6 + b = 11, donc b = 5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une droite passe par les points A(1 ; 7) et B(4 ; 1). La fonction est :",
      choix: ["croissante", "décroissante", "constante", "on ne peut pas savoir"],
      bonneReponse: 1,
      explication: "a = (1 − 7)/(4 − 1) = −6/3 = −2 < 0 : la fonction est décroissante.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un jardinier facture 25 € de déplacement puis 15 € par heure de travail. Exprime le prix f(x) en fonction du nombre d'heures x, puis calcule f(3).",
      reponse: "f(x) = 15x + 25 ; f(3) = 70 €",
      explication: "f(3) = 15 × 3 + 25 = 45 + 25 = 70.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une droite passe par A(2 ; 3) et B(5 ; 12). Détermine l'expression complète de la fonction affine correspondante.",
      reponse: "f(x) = 3x − 3",
      explication:
        "a = (12 − 3)/(5 − 2) = 9/3 = 3. Puis avec A : 3 × 2 + b = 3, donc 6 + b = 3, donc b = −3. Donc f(x) = 3x − 3.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une fonction linéaire f vérifie f(4) = 20. Que vaut f(7) ?",
      choix: ["23", "35", "5", "28"],
      bonneReponse: 1,
      explication: "f(x) = ax avec 4a = 20, donc a = 5. Donc f(7) = 5 × 7 = 35 (on peut aussi faire un produit en croix : 20/4 × 7 = 35).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Deux entreprises de location de vélos proposent : Entreprise A : f(x) = 4x (4 € de l'heure, sans forfait). Entreprise B : g(x) = 2x + 10 (10 € de forfait puis 2 € de l'heure). Pour quelle durée x les deux entreprises coûtent-elles le même prix ?",
      reponse: "x = 5 heures (prix commun : 20 €)",
      explication: "On résout 4x = 2x + 10, donc 2x = 10, donc x = 5. Vérification : f(5) = 20 et g(5) = 10 + 10 = 20.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La droite représentant une fonction affine f passe par le point (0 ; −2) et a un coefficient directeur a = −3. Détermine f(x), puis calcule l'antécédent de 7 par f.",
      reponse: "f(x) = −3x − 2 ; l'antécédent de 7 est x = −3",
      explication:
        "Le point (0 ; −2) donne directement b = −2, donc f(x) = −3x − 2. Pour l'antécédent de 7 : −3x − 2 = 7, donc −3x = 9, donc x = −3.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Soit f(x) = 2x + 5. Que vaut f(0) ?",
      choix: ["0", "2", "5", "7"],
      bonneReponse: 2,
      explication: "f(0) = 2 × 0 + 5 = 5 : c'est l'ordonnée à l'origine.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Soit f(x) = −4x. La fonction est-elle croissante ou décroissante ? Justifie.",
      reponse: "Décroissante, car a = −4 est négatif.",
      explication: "Quand a < 0, la fonction est décroissante : sa droite représentative descend de gauche à droite.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une droite passe par A(0 ; 3) et B(1 ; 8). Détermine le coefficient directeur a.",
      reponse: "a = 5",
      explication: "a = (8 − 3)/(1 − 0) = 5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une fonction linéaire vérifie f(5) = 15. Que vaut a ?",
      choix: ["3", "5", "15", "75"],
      bonneReponse: 0,
      explication: "f(x) = ax avec 5a = 15, donc a = 3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une droite passe par A(1 ; 6) et B(3 ; 2). Détermine l'expression de la fonction affine correspondante.",
      reponse: "f(x) = −2x + 8",
      explication: "a = (2 − 6)/(3 − 1) = −4/2 = −2. Avec A : −2×1 + b = 6, donc b = 8.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Fonctions linéaires et affines",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Soit f(x) = 6x. Que vaut f(4) ?",
          choix: ["10", "24", "2", "64"],
          bonneReponse: 1,
          explication: "f(4) = 6 × 4 = 24.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Soit f(x) = 3x − 7. Quel est le coefficient directeur de sa droite ?",
          reponse: "a = 3",
          explication: "Dans f(x) = ax + b, le coefficient directeur est a, ici 3.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une droite passe par A(0 ; −1) et B(3 ; 8). Détermine son coefficient directeur a et son ordonnée à l'origine b.",
          reponse: "a = 3 ; b = −1",
          explication: "a = (8 − (−1))/(3 − 0) = 9/3 = 3. b se lit directement au point A(0 ; −1), donc b = −1.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un taxi facture 3 € de prise en charge puis 1,50 € par kilomètre. Exprime le prix f(x) selon la distance x en km, puis calcule le prix pour 12 km.",
          reponse: "f(x) = 1,5x + 3 ; f(12) = 21 €",
          explication: "f(12) = 1,5 × 12 + 3 = 18 + 3 = 21.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une fonction linéaire vérifie f(6) = 18. Que vaut f(2) ?",
          choix: ["3", "6", "9", "36"],
          bonneReponse: 1,
          explication: "a = 18/6 = 3, donc f(2) = 3 × 2 = 6.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux opérateurs téléphoniques proposent : Opérateur A : f(x) = 30 (forfait fixe de 30 €, quel que soit x). Opérateur B : g(x) = 5x + 10 (10 € de forfait puis 5 € par Go). Pour combien de Go x les deux opérateurs coûtent-ils le même prix ?",
          reponse: "x = 4 Go (prix commun : 30 €)",
          explication: "On résout 30 = 5x + 10, donc 5x = 20, donc x = 4.",
        },
      ],
    },
    {
      titre: "Examen 2 — Fonctions linéaires et affines",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Laquelle de ces fonctions est affine mais pas linéaire ?",
          choix: ["f(x) = 7x", "f(x) = x", "f(x) = 2x − 5", "f(x) = 0,5x"],
          bonneReponse: 2,
          explication: "f(x) = 2x − 5 a un terme constant (b = −5 ≠ 0) : elle est affine mais pas linéaire.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Soit f(x) = −x + 8. Que vaut f(3) ?",
          reponse: "f(3) = 5",
          explication: "f(3) = −3 + 8 = 5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une droite passe par A(0 ; 2) et B(4 ; −6). Détermine son coefficient directeur a.",
          reponse: "a = −2",
          explication: "a = (−6 − 2)/(4 − 0) = −8/4 = −2.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une fonction affine f a pour coefficient directeur a = −5 et vérifie f(2) = 1. Détermine b, puis l'expression de f.",
          reponse: "b = 11 ; f(x) = −5x + 11",
          explication: "−5 × 2 + b = 1, donc −10 + b = 1, donc b = 11.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Sur un graphique, une droite coupe l'axe des ordonnées en (0 ; −3) et monte de 2 quand x avance de 1. Quelle est son expression ?",
          choix: ["f(x) = 2x − 3", "f(x) = −3x + 2", "f(x) = 2x + 3", "f(x) = −2x − 3"],
          bonneReponse: 0,
          explication: "b = −3 (ordonnée à l'origine) et a = 2 (monte de 2 par unité de x), donc f(x) = 2x − 3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un artisan facture ses interventions selon f(x) = 40x + 20, où x est le nombre d'heures. Un client dispose d'un budget de 220 €. Combien d'heures d'intervention peut-il financer au maximum ?",
          reponse: "5 heures maximum.",
          explication: "On résout 40x + 20 ≤ 220, donc 40x ≤ 200, donc x ≤ 5. Le client peut financer au maximum 5 heures.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Fonction linéaire : f(x) = ax, droite passant par l'origine, correspond à une proportionnalité.",
    "Fonction affine : f(x) = ax + b, droite quelconque coupant l'axe des ordonnées en (0 ; b).",
    "a = coefficient directeur (pente) ; b = ordonnée à l'origine.",
    "a = (yB − yA) / (xB − xA) avec deux points A et B connus de la droite.",
    "Signe de a : positif → fonction croissante ; négatif → fonction décroissante ; nul → fonction constante.",
    "Pour trouver b, remplacer les coordonnées d'un point connu dans f(x) = ax + b.",
  ],
};

export default chapitre;
