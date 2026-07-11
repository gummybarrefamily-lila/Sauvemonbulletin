import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "fonctions",
  titre: "Les fonctions",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Comprendre la notion de fonction, maîtriser le vocabulaire image et antécédent, utiliser un tableau de valeurs et lire une courbe représentative : l'essentiel pour le brevet.",
  objectifs: [
    "Comprendre qu'une fonction associe à un nombre un unique nombre",
    "Utiliser les notations f(x) et f : x ↦ ...",
    "Calculer une image et déterminer un antécédent",
    "Construire et exploiter un tableau de valeurs",
    "Lire des images et des antécédents sur une courbe représentative",
  ],
  slides: [
    {
      titre: "C'est quoi, une fonction ?",
      illustration: "⚙️",
      visuel: "nombre → MACHINE → résultat",
      contenu: [
        "Une fonction est une « machine à calculer »",
        "On lui donne un nombre, elle en renvoie UN SEUL",
        "Exemple : la machine « je multiplie par 2 puis j'ajoute 1 »",
        "Si on lui donne 3, elle renvoie 2 × 3 + 1 = 7",
      ],
      voixOff:
        "Une fonction, c'est comme une machine à calculer. On lui donne un nombre en entrée, elle applique toujours le même programme de calcul, et elle renvoie un seul nombre en sortie. Par exemple, la machine qui multiplie par deux puis ajoute un : si on lui donne trois, elle renvoie deux fois trois plus un, c'est-à-dire sept.",
    },
    {
      titre: "Les notations",
      illustration: "✍️",
      visuel: "f(x) = 2x + 1  ⟺  f : x ↦ 2x + 1",
      contenu: [
        "La fonction s'appelle f (ou g, h...)",
        "f(x) = 2x + 1 se lit « f de x égale 2x plus 1 »",
        "f : x ↦ 2x + 1 se lit « f qui à x associe 2x plus 1 »",
        "Les deux notations disent exactement la même chose",
      ],
      voixOff:
        "On donne un nom à la fonction, souvent f, g ou h. Deux notations existent. La première : f de x égale deux x plus un. La seconde : f qui à x associe deux x plus un, avec une flèche. Ces deux écritures signifient exactement la même chose : elles décrivent le programme de calcul de la fonction.",
    },
    {
      titre: "L'image d'un nombre",
      illustration: "📤",
      visuel: "f(3) = 7 → 7 est l'image de 3",
      contenu: [
        "L'image de x, c'est le résultat que renvoie la fonction",
        "Avec f(x) = 2x + 1 : f(3) = 2 × 3 + 1 = 7",
        "On dit : l'image de 3 par f est 7",
        "Un nombre a toujours UNE SEULE image",
      ],
      voixOff:
        "L'image d'un nombre, c'est le résultat que renvoie la fonction. Avec f de x égale deux x plus un, l'image de trois est f de trois, c'est-à-dire deux fois trois plus un, égale sept. Retiens bien : un nombre a toujours une seule image, car la machine renvoie toujours un seul résultat.",
    },
    {
      titre: "L'antécédent d'un nombre",
      illustration: "📥",
      visuel: "f(?) = 9 → chercher x tel que 2x + 1 = 9",
      contenu: [
        "Un antécédent de y, c'est un nombre de départ qui donne y",
        "Antécédent de 9 par f : on résout 2x + 1 = 9",
        "2x = 8 donc x = 4 : l'antécédent de 9 est 4",
        "Vérification : f(4) = 2 × 4 + 1 = 9 ✔",
      ],
      voixOff:
        "Un antécédent, c'est le chemin inverse : on connaît le résultat, on cherche le nombre de départ. Quel est l'antécédent de neuf par f ? On résout l'équation deux x plus un égale neuf. On trouve x égale quatre. On vérifie : f de quatre égale deux fois quatre plus un, égale neuf. C'est bon !",
    },
    {
      titre: "Image unique, antécédents multiples",
      illustration: "🎭",
      visuel: "g(x) = x² : g(3) = 9 et g(−3) = 9",
      contenu: [
        "Une image est unique, mais un nombre peut avoir PLUSIEURS antécédents",
        "Avec g(x) = x² : g(3) = 9 et g(−3) = 9",
        "9 a donc deux antécédents par g : 3 et −3",
        "Certains nombres n'en ont aucun : −4 n'a pas d'antécédent par g (un carré n'est jamais négatif)",
      ],
      voixOff:
        "Attention, il y a une différence importante entre image et antécédent. Chaque nombre a une seule image, mais un nombre peut avoir plusieurs antécédents, ou même aucun. Prenons g de x égale x au carré : trois au carré égale neuf, et moins trois au carré égale neuf aussi. Le nombre neuf a donc deux antécédents, trois et moins trois. Et moins quatre n'en a aucun, car un carré n'est jamais négatif.",
    },
    {
      titre: "Le tableau de valeurs",
      illustration: "📋",
      visuel: "x : −1 | 0 | 2 | 5 → f(x) : −1 | 1 | 5 | 11",
      contenu: [
        "Ligne du haut : les valeurs de x ; ligne du bas : les images f(x)",
        "Avec f(x) = 2x + 1 : f(−1) = −1 ; f(0) = 1 ; f(2) = 5 ; f(5) = 11",
        "Lecture verticale : image (haut → bas), antécédent (bas → haut)",
        "C'est la première étape pour tracer une courbe",
      ],
      voixOff:
        "Un tableau de valeurs résume la fonction : la ligne du haut contient les valeurs de x, la ligne du bas contient leurs images. Avec f de x égale deux x plus un, l'image de zéro est un, l'image de deux est cinq, l'image de cinq est onze. On lit une image en descendant, et un antécédent en remontant. Ce tableau sert ensuite à tracer la courbe de la fonction.",
    },
    {
      titre: "La courbe représentative",
      illustration: "📈",
      visuel: "M(x ; f(x))",
      contenu: [
        "La courbe de f est l'ensemble des points de coordonnées (x ; f(x))",
        "Abscisse = nombre de départ, ordonnée = son image",
        "Le point (2 ; 5) est sur la courbe de f car f(2) = 5",
        "Pour vérifier qu'un point est sur la courbe : calculer f(abscisse) et comparer à l'ordonnée",
      ],
      voixOff:
        "La courbe représentative d'une fonction est l'ensemble des points dont l'abscisse est un nombre de départ et l'ordonnée son image. Le point de coordonnées deux, cinq, appartient à la courbe de f, car f de deux égale cinq. Pour savoir si un point est sur la courbe, on calcule l'image de son abscisse et on compare avec son ordonnée.",
    },
    {
      titre: "Lecture graphique : trouver une image",
      illustration: "🔎",
      visuel: "x → courbe → ordonnée = f(x)",
      contenu: [
        "Pour lire f(2) : partir de 2 sur l'axe des abscisses",
        "Monter (ou descendre) verticalement jusqu'à la courbe",
        "Lire l'ordonnée du point atteint : c'est l'image",
        "Une seule lecture possible : l'image est unique",
      ],
      voixOff:
        "Pour lire une image sur un graphique, par exemple f de deux, on part de deux sur l'axe horizontal, l'axe des abscisses. On se déplace verticalement jusqu'à rencontrer la courbe, puis horizontalement jusqu'à l'axe vertical. Le nombre lu sur l'axe des ordonnées est l'image cherchée. Il n'y a qu'une seule lecture possible, car l'image est unique.",
    },
    {
      titre: "Lecture graphique : trouver des antécédents",
      illustration: "🧭",
      visuel: "y → courbe → abscisses des points",
      contenu: [
        "Pour trouver les antécédents de 4 : partir de 4 sur l'axe des ordonnées",
        "Tracer une droite horizontale : elle peut couper la courbe en plusieurs points",
        "Les abscisses de TOUS ces points sont les antécédents",
        "0, 1, 2 points d'intersection ou plus : autant d'antécédents",
      ],
      voixOff:
        "Pour trouver les antécédents d'un nombre, on fait le chemin inverse. On part de ce nombre sur l'axe des ordonnées et on trace une droite horizontale. Cette droite peut couper la courbe en un point, en plusieurs points, ou pas du tout. Les abscisses de tous les points d'intersection sont les antécédents. C'est pour cela qu'un nombre peut avoir plusieurs antécédents, ou aucun.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Une fonction associe à chaque nombre UN unique nombre : f(x) ou f : x ↦ ...",
        "Image = résultat (on calcule f(x)) ; antécédent = départ (on résout f(x) = y)",
        "Une image est unique ; un nombre peut avoir 0, 1 ou plusieurs antécédents",
        "Courbe : points (x ; f(x)) ; image = ordonnée, antécédents = abscisses",
      ],
      voixOff:
        "Résumons. Une fonction est un programme de calcul qui associe à chaque nombre un unique résultat. Pour trouver une image, on calcule f de x. Pour trouver un antécédent, on résout l'équation f de x égale le nombre donné. Une image est toujours unique, mais il peut y avoir zéro, un ou plusieurs antécédents. Sur un graphique, l'image se lit sur l'axe des ordonnées, et les antécédents sur l'axe des abscisses. Bravo, tu es prêt pour les fonctions au brevet !",
    },
  ],
  fiche: {
    intro:
      "Une fonction f est un programme de calcul qui, à chaque nombre x, associe un unique nombre noté f(x). C'est un chapitre clé du brevet : vocabulaire, calculs et lectures graphiques.",
    sections: [
      {
        titre: "Notations",
        points: [
          "f(x) = 2x + 1 se lit « f de x égale 2x + 1 »",
          "f : x ↦ 2x + 1 se lit « f qui à x associe 2x + 1 »",
          "Les deux notations décrivent le même programme de calcul",
        ],
      },
      {
        titre: "Image et antécédent",
        points: [
          "Image de a : le résultat f(a). Ex : si f(x) = 2x + 1, alors f(3) = 7 → 7 est l'image de 3",
          "Antécédent de b : un nombre x tel que f(x) = b. On résout une équation : 2x + 1 = 9 donne x = 4",
          "Une image est unique ; un antécédent peut ne pas être unique",
        ],
      },
      {
        titre: "Plusieurs antécédents possibles",
        points: [
          "Avec g(x) = x² : g(3) = 9 et g(−3) = 9, donc 9 a deux antécédents (3 et −3)",
          "−4 n'a aucun antécédent par g, car un carré n'est jamais négatif",
        ],
      },
      {
        titre: "Tableau de valeurs",
        points: [
          "Ligne du haut : valeurs de x ; ligne du bas : images f(x)",
          "Image : lecture de haut en bas ; antécédent : lecture de bas en haut",
        ],
      },
      {
        titre: "Courbe représentative",
        points: [
          "Ensemble des points de coordonnées (x ; f(x))",
          "Un point (a ; b) est sur la courbe si et seulement si f(a) = b",
          "Ex : (2 ; 5) est sur la courbe de f(x) = 2x + 1 car f(2) = 5",
        ],
      },
      {
        titre: "Lecture graphique",
        points: [
          "Image de a : partir de a sur l'axe des abscisses, monter à la courbe, lire l'ordonnée",
          "Antécédents de b : tracer l'horizontale d'ordonnée b, lire les abscisses de TOUS les points d'intersection",
        ],
      },
    ],
    audio:
      "Fiche de révision : les fonctions. Une fonction est un programme de calcul qui associe à chaque nombre un unique résultat. On la note f de x égale, par exemple, deux x plus un, ou f qui à x associe deux x plus un : les deux écritures sont équivalentes. L'image d'un nombre est le résultat du calcul : l'image de trois par cette fonction est sept. Un antécédent est un nombre de départ : pour trouver un antécédent de neuf, on résout deux x plus un égale neuf, et on trouve quatre. Attention : une image est toujours unique, mais un nombre peut avoir plusieurs antécédents ou aucun, comme avec la fonction carré. Le tableau de valeurs rassemble des nombres et leurs images. La courbe représentative est l'ensemble des points d'abscisse x et d'ordonnée f de x. Sur un graphique, on lit une image sur l'axe des ordonnées, et les antécédents sur l'axe des abscisses.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une fonction ?", verso: "Un programme de calcul qui associe à chaque nombre UN unique nombre." },
    { recto: "Comment se lit f : x ↦ 3x − 2 ?", verso: "« f qui à x associe 3x − 2 ». Même sens que f(x) = 3x − 2." },
    { recto: "Qu'est-ce que l'image de a par f ?", verso: "Le résultat f(a). Ex : f(x) = 2x + 1 → l'image de 3 est f(3) = 7." },
    { recto: "Qu'est-ce qu'un antécédent de b par f ?", verso: "Un nombre x tel que f(x) = b. On le trouve en résolvant une équation." },
    { recto: "Combien d'images pour un nombre ?", verso: "Toujours UNE seule." },
    { recto: "Combien d'antécédents pour un nombre ?", verso: "0, 1 ou plusieurs. Ex : avec g(x) = x², 9 a deux antécédents : 3 et −3." },
    { recto: "Que représente la courbe de f ?", verso: "L'ensemble des points de coordonnées (x ; f(x))." },
    { recto: "Le point (a ; b) est sur la courbe de f si...", verso: "... f(a) = b : l'ordonnée est l'image de l'abscisse." },
    { recto: "Lire une image sur un graphique ?", verso: "Partir de x sur l'axe des abscisses, aller à la courbe, lire l'ordonnée." },
    { recto: "Lire des antécédents sur un graphique ?", verso: "Tracer l'horizontale d'ordonnée y, lire les abscisses de tous les points d'intersection avec la courbe." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Soit f(x) = 3x. Que vaut f(5) ?",
      choix: ["15", "8", "35", "3"],
      bonneReponse: 0,
      explication: "f(5) = 3 × 5 = 15.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie la notation f : x ↦ 2x − 1 ?",
      choix: [
        "f est le nombre 2x − 1",
        "La fonction f associe à x le nombre 2x − 1",
        "x est l'image de 2x − 1",
        "f et x sont égaux",
      ],
      bonneReponse: 1,
      explication: "La flèche ↦ se lit « associe » : f est la fonction qui à x associe 2x − 1, c'est-à-dire f(x) = 2x − 1.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Soit f(x) = x + 4. Calcule f(6).",
      reponse: "f(6) = 10",
      explication: "On remplace x par 6 : f(6) = 6 + 4 = 10. L'image de 6 par f est 10.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Si f(2) = 5, alors 5 est...",
      choix: ["un antécédent de 2", "l'image de 2", "la courbe de f", "l'abscisse de 2"],
      bonneReponse: 1,
      explication: "f(2) = 5 signifie que 5 est l'image de 2 par f (et que 2 est un antécédent de 5).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Soit g(x) = x². Calcule g(−4).",
      reponse: "g(−4) = 16",
      explication: "g(−4) = (−4)² = (−4) × (−4) = 16. Attention au piège : le carré d'un nombre négatif est positif.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Soit f(x) = 2x + 3. Détermine l'antécédent de 11 par f.",
      reponse: "x = 4",
      explication: "On résout 2x + 3 = 11, donc 2x = 8, donc x = 4. Vérification : f(4) = 2 × 4 + 3 = 11.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Soit h(x) = 5x − 2. Dans un tableau de valeurs, quelle est l'image de 3 ?",
      choix: ["17", "13", "15", "1"],
      bonneReponse: 1,
      explication: "h(3) = 5 × 3 − 2 = 15 − 2 = 13.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Soit f(x) = x². Calcule f(3) et f(−3). Que remarques-tu ?",
      reponse: "f(3) = 9 et f(−3) = 9 : deux nombres différents peuvent avoir la même image.",
      explication: "3² = 9 et (−3)² = 9. Le nombre 9 a donc deux antécédents par f : 3 et −3.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Soit f(x) = x² − 5. Détermine tous les antécédents de 4 par f.",
      reponse: "x = 3 et x = −3",
      explication: "On résout x² − 5 = 4, donc x² = 9, donc x = 3 ou x = −3. Il y a deux antécédents.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La courbe d'une fonction f passe par le point A(2 ; 5). Traduis cette information avec le vocabulaire des fonctions (deux phrases).",
      reponse: "f(2) = 5 : l'image de 2 par f est 5, et 2 est un antécédent de 5 par f.",
      explication: "Un point (a ; b) de la courbe signifie f(a) = b : l'abscisse est le nombre de départ, l'ordonnée est son image.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Soit g(x) = 4x − 1. Le point M(3 ; 11) appartient-il à la courbe de g ?",
      choix: [
        "Oui, car g(3) = 11",
        "Non, car g(3) = 12",
        "Non, car g(11) = 3",
        "On ne peut pas savoir sans tracer la courbe",
      ],
      bonneReponse: 0,
      explication: "g(3) = 4 × 3 − 1 = 11 : l'ordonnée de M est bien l'image de son abscisse, donc M est sur la courbe.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Soit f(x) = 3x − 7. Trouve le nombre x tel que f(x) = x + 1.",
      reponse: "x = 4",
      explication: "On résout 3x − 7 = x + 1, donc 2x = 8, donc x = 4. Vérification : f(4) = 5 et 4 + 1 = 5.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Soit f(x) = x − 3. Que vaut f(10) ?",
      choix: ["13", "7", "30", "−7"],
      bonneReponse: 1,
      explication: "f(10) = 10 − 3 = 7.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "On sait que f(4) = 9. Complète : 9 est ... de 4, et 4 est ... de 9.",
      reponse: "9 est l'image de 4, et 4 est un antécédent de 9.",
      explication: "f(4) = 9 : on part de 4 (antécédent) et on arrive à 9 (image).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Soit f(x) = 5x. Détermine l'antécédent de 20 par f.",
      reponse: "x = 4",
      explication: "On résout 5x = 20, donc x = 4.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Soit g(x) = x². Combien le nombre 25 a-t-il d'antécédents par g ?",
      choix: ["Aucun", "Un seul : 5", "Deux : 5 et −5", "Une infinité"],
      bonneReponse: 2,
      explication: "x² = 25 donne x = 5 ou x = −5 : deux antécédents.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Sur un graphique, comment lit-on l'image de 3 par une fonction f ?",
      reponse: "On part de 3 sur l'axe des abscisses, on rejoint verticalement la courbe, puis on lit l'ordonnée du point obtenu.",
      explication: "L'image se lit toujours sur l'axe des ordonnées ; les antécédents se lisent sur l'axe des abscisses.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les fonctions",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Soit f : x ↦ 4x + 2. Que vaut f(1) ?",
          choix: ["6", "42", "8", "4"],
          bonneReponse: 0,
          explication: "f(1) = 4 × 1 + 2 = 6.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Soit f(x) = x² + 1. Calcule f(3).",
          reponse: "f(3) = 10",
          explication: "f(3) = 3² + 1 = 9 + 1 = 10.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Soit f(x) = 2x − 5. Détermine l'antécédent de 7 par f.",
          reponse: "x = 6",
          explication: "On résout 2x − 5 = 7, donc 2x = 12, donc x = 6. Vérification : f(6) = 12 − 5 = 7.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Soit f(x) = −2x + 4. Complète le tableau de valeurs pour x = 0 ; 1 ; 3.",
          reponse: "f(0) = 4 ; f(1) = 2 ; f(3) = −2",
          explication: "f(0) = −2 × 0 + 4 = 4 ; f(1) = −2 + 4 = 2 ; f(3) = −6 + 4 = −2.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La courbe d'une fonction f passe par le point (2 ; 3). Cela signifie que :",
          choix: ["f(3) = 2", "f(2) = 3", "f(2) = 2", "3 est un antécédent de 2"],
          bonneReponse: 1,
          explication: "Sur la courbe, l'ordonnée est l'image de l'abscisse : f(2) = 3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Soit g(x) = x(x − 4). Calcule g(0) et g(4), puis donne deux antécédents de 0 par g.",
          reponse: "g(0) = 0 et g(4) = 0 ; les nombres 0 et 4 sont deux antécédents de 0.",
          explication: "g(0) = 0 × (−4) = 0 et g(4) = 4 × 0 = 0. Un produit est nul quand l'un de ses facteurs est nul.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les fonctions",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "On sait que h(5) = 2. Alors 2 est...",
          choix: ["un antécédent de 5", "l'image de 5", "l'abscisse du point", "égal à 5"],
          bonneReponse: 1,
          explication: "h(5) = 2 : la fonction transforme 5 en 2, donc 2 est l'image de 5 (et 5 est un antécédent de 2).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Soit f(x) = 7 − x. Calcule f(3).",
          reponse: "f(3) = 4",
          explication: "f(3) = 7 − 3 = 4.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Soit g : x ↦ 3x². Calcule g(2).",
          reponse: "g(2) = 12",
          explication: "g(2) = 3 × 2² = 3 × 4 = 12. Attention : on calcule d'abord le carré, pas (3 × 2)² = 36.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Soit f(x) = 4x + 1. Le point A(2 ; 8) appartient-il à la courbe de f ? Justifie.",
          reponse: "Non, car f(2) = 9 et non 8.",
          explication: "f(2) = 4 × 2 + 1 = 9. L'ordonnée de A (8) n'est pas l'image de son abscisse (2), donc A n'est pas sur la courbe.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Soit f(x) = x² − 9. Détermine tous les antécédents de 0 par f.",
          reponse: "x = 3 et x = −3",
          explication: "On résout x² − 9 = 0, donc x² = 9, donc x = 3 ou x = −3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un club de sport facture un abonnement de 10 € puis 2 € par séance : le prix pour x séances est f(x) = 2x + 10. Calcule le prix pour 8 séances, puis le nombre de séances possible avec 30 €.",
          reponse: "f(8) = 26 € ; avec 30 €, on peut faire 10 séances.",
          explication: "f(8) = 2 × 8 + 10 = 26. Puis on résout 2x + 10 = 30, donc 2x = 20, donc x = 10.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une fonction est un programme de calcul qui associe à chaque nombre UN unique nombre : f(x) = ... et f : x ↦ ... signifient la même chose.",
    "Image : le résultat. Pour la trouver, on CALCULE f(a) en remplaçant x par a.",
    "Antécédent : le nombre de départ. Pour le trouver, on RÉSOUT l'équation f(x) = b.",
    "Une image est toujours unique ; un nombre peut avoir 0, 1 ou plusieurs antécédents (avec x², 9 a deux antécédents : 3 et −3).",
    "La courbe de f est l'ensemble des points (x ; f(x)) : un point (a ; b) est sur la courbe si et seulement si f(a) = b.",
    "Erreur à éviter absolument : confondre image et antécédent. f(2) = 5 signifie que 5 est l'image de 2, pas l'inverse !",
  ],
};

export default chapitre;
