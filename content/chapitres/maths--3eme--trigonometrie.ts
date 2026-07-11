import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "trigonometrie",
  titre: "La trigonométrie",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Cosinus, sinus et tangente d'un angle aigu dans un triangle rectangle : calculer une longueur ou un angle, avec la calculatrice, pour réussir les exercices de géométrie du brevet.",
  objectifs: [
    "Identifier le côté opposé, adjacent et l'hypoténuse selon un angle donné",
    "Connaître et utiliser les formules du cosinus, sinus et tangente",
    "Calculer une longueur à l'aide de la trigonométrie",
    "Calculer un angle à l'aide des fonctions réciproques (cos⁻¹, sin⁻¹, tan⁻¹)",
    "Choisir la bonne formule trigonométrique selon les données du problème",
  ],
  slides: [
    {
      titre: "Le triangle rectangle et ses côtés",
      illustration: "📐",
      visuel: "hypoténuse, côté opposé, côté adjacent",
      contenu: [
        "Dans un triangle rectangle, l'hypoténuse est le côté le plus long, face à l'angle droit",
        "Pour un angle aigu donné, le côté OPPOSÉ ne touche pas cet angle",
        "Le côté ADJACENT touche cet angle (et n'est pas l'hypoténuse)",
        "Ces noms changent selon l'angle choisi !",
      ],
      voixOff:
        "Dans un triangle rectangle, l'hypoténuse est toujours le côté le plus long, situé en face de l'angle droit. Pour un angle aigu que l'on choisit, le côté opposé est celui qui ne touche pas cet angle, et le côté adjacent est celui qui le touche, sans être l'hypoténuse. Attention, ces noms dépendent de l'angle choisi : un même côté peut être adjacent pour un angle et opposé pour l'autre.",
    },
    {
      titre: "Le cosinus",
      illustration: "①",
      visuel: "cos(angle) = côté adjacent / hypoténuse",
      contenu: [
        "cos(Â) = côté adjacent à  Â / hypoténuse",
        "Le cosinus d'un angle aigu est toujours compris entre 0 et 1",
        "Exemple : côté adjacent = 6, hypoténuse = 10 → cos(Â) = 6/10 = 0,6",
      ],
      voixOff:
        "La première formule à connaître est le cosinus. Le cosinus d'un angle aigu est égal au côté adjacent à cet angle, divisé par l'hypoténuse. Le cosinus d'un angle aigu est toujours compris entre zéro et un. Par exemple, si le côté adjacent mesure six et l'hypoténuse dix, le cosinus vaut six dixièmes, soit zéro virgule six.",
    },
    {
      titre: "Le sinus",
      illustration: "②",
      visuel: "sin(angle) = côté opposé / hypoténuse",
      contenu: [
        "sin(Â) = côté opposé à  Â / hypoténuse",
        "Le sinus d'un angle aigu est aussi compris entre 0 et 1",
        "Exemple : côté opposé = 8, hypoténuse = 10 → sin(Â) = 8/10 = 0,8",
      ],
      voixOff:
        "La deuxième formule est le sinus. Le sinus d'un angle aigu est égal au côté opposé à cet angle, divisé par l'hypoténuse. Comme le cosinus, il est toujours compris entre zéro et un. Par exemple, si le côté opposé mesure huit et l'hypoténuse dix, le sinus vaut huit dixièmes, soit zéro virgule huit.",
    },
    {
      titre: "La tangente",
      illustration: "③",
      visuel: "tan(angle) = côté opposé / côté adjacent",
      contenu: [
        "tan(Â) = côté opposé à  Â / côté adjacent à  Â",
        "La tangente ne fait PAS intervenir l'hypoténuse",
        "Exemple : côté opposé = 8, côté adjacent = 6 → tan(Â) = 8/6 ≈ 1,33",
      ],
      voixOff:
        "La troisième formule est la tangente. La tangente d'un angle aigu est égale au côté opposé, divisé par le côté adjacent. C'est la seule des trois formules qui ne fait pas intervenir l'hypoténuse. Par exemple, avec un côté opposé de huit et un côté adjacent de six, la tangente vaut huit sixièmes, soit environ un virgule trente-trois.",
    },
    {
      titre: "Moyen mnémotechnique : CAH-SOH-TOA",
      illustration: "🔤",
      visuel: "CAH · SOH · TOA",
      contenu: [
        "CAH : Cosinus = Adjacent / Hypoténuse",
        "SOH : Sinus = Opposé / Hypoténuse",
        "TOA : Tangente = Opposé / Adjacent",
        "Retiens ces trois mots pour ne jamais te tromper de formule",
      ],
      voixOff:
        "Pour retenir facilement ces trois formules, on utilise le moyen mnémotechnique CAH-SOH-TOA. CAH : cosinus égale adjacent sur hypoténuse. SOH : sinus égale opposé sur hypoténuse. TOA : tangente égale opposé sur adjacent. En retenant ces trois syllabes, tu ne te trompes plus jamais de formule.",
    },
    {
      titre: "Calculer une longueur",
      illustration: "🧮",
      visuel: "Â = 30° ; hypoténuse = 8 → côté adjacent = 8 × cos(30°)",
      contenu: [
        "On identifie l'angle connu et les côtés concernés",
        "On choisit la bonne formule (CAH, SOH ou TOA) selon ce qu'on cherche",
        "Exemple : Â = 30°, hypoténuse = 8, on cherche le côté adjacent",
        "cos(30°) = adjacent/8 → adjacent = 8 × cos(30°) ≈ 8 × 0,866 ≈ 6,93",
      ],
      voixOff:
        "Pour calculer une longueur, on identifie d'abord l'angle connu, puis les côtés concernés dans la question. On choisit ensuite la bonne formule. Par exemple, avec un angle de trente degrés et une hypoténuse de huit, si on cherche le côté adjacent, on utilise le cosinus : cosinus de trente degrés égale adjacent sur huit. On isole l'adjacent en multipliant : huit fois cosinus de trente degrés, ce qui donne environ six virgule quatre-vingt-treize.",
    },
    {
      titre: "Calculer un angle",
      illustration: "🔎",
      visuel: "sin(Â) = 0,5 → Â = sin⁻¹(0,5) = 30°",
      contenu: [
        "Si on connaît deux côtés, on peut calculer l'angle avec la fonction réciproque",
        "cos⁻¹, sin⁻¹, tan⁻¹ sur la calculatrice (touches shift + cos/sin/tan)",
        "Exemple : sin(Â) = 0,5 → Â = sin⁻¹(0,5) = 30°",
        "On calcule d'abord le rapport, puis on applique la fonction réciproque",
      ],
      voixOff:
        "Pour calculer un angle, il faut connaître deux côtés du triangle rectangle. On calcule le rapport correspondant, cosinus, sinus ou tangente, puis on utilise la fonction réciproque sur la calculatrice, en appuyant sur la touche shift suivie de cos, sin ou tan. Par exemple, si le sinus d'un angle vaut zéro virgule cinq, l'angle est égal à l'arc sinus de zéro virgule cinq, c'est-à-dire trente degrés.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "CAH-SOH-TOA : cos = adj/hyp ; sin = opp/hyp ; tan = opp/adj",
        "Trigonométrie utilisable UNIQUEMENT dans un triangle RECTANGLE",
        "Pour une longueur : formule directe. Pour un angle : fonction réciproque (cos⁻¹, sin⁻¹, tan⁻¹)",
        "Toujours identifier d'abord l'angle, l'opposé, l'adjacent et l'hypoténuse",
      ],
      voixOff:
        "Résumons. Retiens CAH-SOH-TOA : cosinus égale adjacent sur hypoténuse, sinus égale opposé sur hypoténuse, tangente égale opposé sur adjacent. La trigonométrie ne s'utilise que dans un triangle rectangle. Pour trouver une longueur, on applique directement la formule. Pour trouver un angle, on calcule le rapport puis on utilise la fonction réciproque sur la calculatrice. La première étape, toujours, est d'identifier clairement l'angle, le côté opposé, le côté adjacent et l'hypoténuse. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "La trigonométrie dans le triangle rectangle permet de calculer une longueur ou un angle inaccessibles par la mesure directe. C'est un grand classique de géométrie au brevet, à combiner parfois avec Pythagore.",
    sections: [
      {
        titre: "Vocabulaire",
        points: [
          "Hypoténuse : côté le plus long, face à l'angle droit",
          "Côté opposé à un angle : ne touche pas cet angle",
          "Côté adjacent à un angle : touche cet angle, mais n'est pas l'hypoténuse",
        ],
      },
      {
        titre: "Les trois formules (CAH-SOH-TOA)",
        points: [
          "cos(Â) = adjacent / hypoténuse",
          "sin(Â) = opposé / hypoténuse",
          "tan(Â) = opposé / adjacent",
        ],
      },
      {
        titre: "Calculer une longueur",
        points: [
          "Identifier l'angle connu et les côtés concernés",
          "Choisir la formule adaptée, poser l'égalité, isoler la longueur cherchée",
        ],
      },
      {
        titre: "Calculer un angle",
        points: [
          "Calculer le rapport (cos, sin ou tan) à partir des longueurs connues",
          "Utiliser la fonction réciproque : cos⁻¹, sin⁻¹ ou tan⁻¹ à la calculatrice",
        ],
      },
    ],
    audio:
      "Fiche de révision : la trigonométrie. Dans un triangle rectangle, l'hypoténuse est le côté le plus long, face à l'angle droit. Pour un angle aigu choisi, le côté opposé ne touche pas cet angle, tandis que le côté adjacent le touche. Trois formules sont à connaître, résumées par CAH-SOH-TOA : le cosinus égale le côté adjacent divisé par l'hypoténuse, le sinus égale le côté opposé divisé par l'hypoténuse, la tangente égale le côté opposé divisé par le côté adjacent. Pour calculer une longueur, on identifie l'angle et les côtés concernés, on choisit la bonne formule, puis on isole l'inconnue. Pour calculer un angle, on calcule d'abord le rapport à partir des longueurs connues, puis on utilise la fonction réciproque de la calculatrice : arc cosinus, arc sinus ou arc tangente.",
  },
  memoCards: [
    { recto: "Formule du cosinus ?", verso: "cos(Â) = côté adjacent / hypoténuse." },
    { recto: "Formule du sinus ?", verso: "sin(Â) = côté opposé / hypoténuse." },
    { recto: "Formule de la tangente ?", verso: "tan(Â) = côté opposé / côté adjacent." },
    { recto: "Moyen mnémotechnique ?", verso: "CAH-SOH-TOA : Cosinus-Adjacent-Hypoténuse ; Sinus-Opposé-Hypoténuse ; Tangente-Opposé-Adjacent." },
    { recto: "Dans quel type de triangle utilise-t-on la trigonométrie ?", verso: "Uniquement dans un triangle RECTANGLE." },
    { recto: "Comment calculer un angle connaissant deux côtés ?", verso: "Calculer le rapport (cos, sin ou tan), puis utiliser la fonction réciproque (cos⁻¹, sin⁻¹, tan⁻¹)." },
    { recto: "Quel côté ne dépend jamais de l'angle choisi ?", verso: "L'hypoténuse, toujours le côté le plus long, face à l'angle droit." },
    { recto: "Entre quelles valeurs sont compris cos(Â) et sin(Â) pour un angle aigu ?", verso: "Toujours entre 0 et 1." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un triangle rectangle, l'hypoténuse est :",
      choix: ["Le côté le plus court", "Le côté face à l'angle droit", "Un des deux côtés de l'angle droit", "Toujours horizontal"],
      bonneReponse: 1,
      explication: "L'hypoténuse est le côté le plus long, situé en face de l'angle droit.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie CAH ?",
      choix: [
        "Cosinus = Adjacent / Hypoténuse",
        "Cosinus = Angle / Hauteur",
        "Côté Adjacent Horizontal",
        "Cosinus Aigu Hypoténuse",
      ],
      bonneReponse: 0,
      explication: "CAH est le moyen mnémotechnique pour cos(Â) = côté adjacent / hypoténuse.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans un triangle rectangle, le côté adjacent à un angle Â mesure 5 et l'hypoténuse mesure 13. Calcule cos(Â).",
      reponse: "cos(Â) = 5/13 ≈ 0,38",
      explication: "cos(Â) = adjacent/hypoténuse = 5/13.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La tangente d'un angle fait intervenir :",
      choix: ["Opposé et hypoténuse", "Adjacent et hypoténuse", "Opposé et adjacent", "Les trois côtés"],
      bonneReponse: 2,
      explication: "tan(Â) = opposé/adjacent, sans utiliser l'hypoténuse.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle rectangle a un angle de 40° et une hypoténuse de 12 cm. Calcule le côté opposé à cet angle (arrondi au dixième).",
      reponse: "≈ 7,7 cm",
      explication: "sin(40°) = opposé/12, donc opposé = 12 × sin(40°) ≈ 12 × 0,643 ≈ 7,7 cm.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle rectangle a un côté opposé de 6 cm et un côté adjacent de 8 cm pour un angle Â. Calcule Â (arrondi au degré).",
      reponse: "Â ≈ 37°",
      explication: "tan(Â) = 6/8 = 0,75, donc Â = tan⁻¹(0,75) ≈ 36,9°, arrondi à 37°.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un triangle rectangle a un angle de 60° et un côté adjacent de 5 cm. Quelle formule permet de calculer l'hypoténuse ?",
      choix: ["hyp = 5 × cos(60°)", "hyp = 5 / cos(60°)", "hyp = 5 × sin(60°)", "hyp = 5 / sin(60°)"],
      bonneReponse: 1,
      explication: "cos(60°) = 5/hyp, donc hyp = 5 / cos(60°).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'hypoténuse d'un triangle rectangle sachant qu'un angle vaut 60° et que le côté adjacent mesure 5 cm (arrondi au dixième).",
      reponse: "≈ 10 cm",
      explication: "hyp = 5 / cos(60°) = 5 / 0,5 = 10 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un mât de bateau est maintenu par un câble de 15 m tendu depuis le sommet jusqu'au pont, à 9 m du pied du mât. Calcule l'angle que fait le câble avec le pont (arrondi au degré).",
      reponse: "≈ 53°",
      explication:
        "Le côté adjacent à l'angle cherché (au niveau du pont) est 9 m et l'hypoténuse est 15 m : cos(Â) = 9/15 = 0,6, donc Â = cos⁻¹(0,6) ≈ 53,1°.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Un triangle rectangle a un angle de 25° et un côté opposé de 4 cm. Quelle est la formule correcte pour calculer le côté adjacent ?",
      choix: [
        "adjacent = 4 × tan(25°)",
        "adjacent = 4 / tan(25°)",
        "adjacent = 4 × cos(25°)",
        "adjacent = 4 / sin(25°)",
      ],
      bonneReponse: 1,
      explication: "tan(25°) = opposé/adjacent = 4/adjacent, donc adjacent = 4 / tan(25°).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une échelle de 4,5 m est posée contre un mur. Elle fait un angle de 70° avec le sol. Calcule la hauteur atteinte sur le mur (arrondi au dixième), puis la distance du pied de l'échelle au mur (arrondi au dixième).",
      reponse: "Hauteur ≈ 4,2 m ; distance au mur ≈ 1,5 m",
      explication:
        "Hauteur = hypoténuse × sin(70°) = 4,5 × 0,940 ≈ 4,2 m. Distance = hypoténuse × cos(70°) = 4,5 × 0,342 ≈ 1,5 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans un triangle ABC rectangle en A, AB = 6 cm et BC = 10 cm. Calcule l'angle ABC (arrondi au degré).",
      reponse: "Angle ABC ≈ 53°",
      explication:
        "Par rapport à l'angle en B, AB est le côté adjacent et BC est l'hypoténuse : cos(ABC) = 6/10 = 0,6, donc ABC = cos⁻¹(0,6) ≈ 53,1°.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie SOH ?",
      choix: ["Sinus = Opposé / Hypoténuse", "Sinus = Ouvert / Horizontal", "Sinus Obtus Hauteur", "Somme Opposé Hauteur"],
      bonneReponse: 0,
      explication: "SOH rappelle que sin(Â) = côté opposé / hypoténuse.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Le côté opposé mesure 4, l'hypoténuse mesure 10. Calcule sin(Â).",
      reponse: "sin(Â) = 0,4",
      explication: "sin(Â) = opposé/hypoténuse = 4/10 = 0,4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un triangle rectangle a un angle de 35° et une hypoténuse de 9 cm. Calcule le côté adjacent (arrondi au dixième).",
      reponse: "≈ 7,4 cm",
      explication: "adjacent = 9 × cos(35°) ≈ 9 × 0,819 ≈ 7,4 cm.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pour calculer un angle connaissant le côté opposé et l'hypoténuse, on utilise :",
      choix: ["cos⁻¹", "sin⁻¹", "tan⁻¹", "Aucune de ces fonctions"],
      bonneReponse: 1,
      explication: "Le rapport opposé/hypoténuse correspond au sinus, donc on utilise sin⁻¹ pour retrouver l'angle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un triangle rectangle a un côté opposé de 7 cm et un côté adjacent de 7 cm. Calcule l'angle Â.",
      reponse: "Â = 45°",
      explication: "tan(Â) = 7/7 = 1, donc Â = tan⁻¹(1) = 45°.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La trigonométrie",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le côté adjacent à un angle Â est :",
          choix: ["Le côté face à Â", "Le côté qui touche Â, sans être l'hypoténuse", "Toujours l'hypoténuse", "Le côté le plus court"],
          bonneReponse: 1,
          explication: "Le côté adjacent touche l'angle considéré, contrairement au côté opposé.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Le côté opposé mesure 3, le côté adjacent mesure 4. Calcule tan(Â).",
          reponse: "tan(Â) = 0,75",
          explication: "tan(Â) = opposé/adjacent = 3/4 = 0,75.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a un angle de 50° et un côté opposé de 6 cm. Calcule l'hypoténuse (arrondi au dixième).",
          reponse: "≈ 7,8 cm",
          explication: "sin(50°) = 6/hyp, donc hyp = 6 / sin(50°) = 6 / 0,766 ≈ 7,8 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a un côté adjacent de 8 cm et une hypoténuse de 17 cm. Calcule l'angle Â (arrondi au degré).",
          reponse: "Â ≈ 62°",
          explication: "cos(Â) = 8/17 ≈ 0,4706, donc Â = cos⁻¹(0,4706) ≈ 61,9°, arrondi à 62°.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un angle de 30° et une hypoténuse de 20 cm. Quelle formule donne le côté opposé ?",
          choix: ["20 × cos(30°)", "20 × sin(30°)", "20 / sin(30°)", "20 / tan(30°)"],
          bonneReponse: 1,
          explication: "sin(30°) = opposé/20, donc opposé = 20 × sin(30°).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une rampe d'accès mesure 8 m de long et s'élève à 1,5 m de hauteur. Calcule l'angle que fait la rampe avec le sol (arrondi au degré).",
          reponse: "≈ 11°",
          explication:
            "Le côté opposé à l'angle recherché (la hauteur) est 1,5 m et l'hypoténuse (la rampe) est 8 m : sin(Â) = 1,5/8 = 0,1875, donc Â = sin⁻¹(0,1875) ≈ 10,8°, arrondi à 11°.",
        },
      ],
    },
    {
      titre: "Examen 2 — La trigonométrie",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie TOA ?",
          choix: ["Tangente = Opposé / Adjacent", "Triangle Obtus Aigu", "Tangente = Opposé / Aire", "Tout Ou rien Adjacent"],
          bonneReponse: 0,
          explication: "TOA rappelle que tan(Â) = côté opposé / côté adjacent.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "L'hypoténuse mesure 20, le côté adjacent mesure 12. Calcule cos(Â).",
          reponse: "cos(Â) = 0,6",
          explication: "cos(Â) = adjacent/hypoténuse = 12/20 = 0,6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a un angle de 55° et un côté adjacent de 4 cm. Calcule le côté opposé (arrondi au dixième).",
          reponse: "≈ 5,7 cm",
          explication: "tan(55°) = opposé/4, donc opposé = 4 × tan(55°) ≈ 4 × 1,428 ≈ 5,7 cm.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un triangle rectangle a un côté opposé de 9 cm et une hypoténuse de 15 cm. Calcule l'angle Â (arrondi au degré).",
          reponse: "Â ≈ 37°",
          explication: "sin(Â) = 9/15 = 0,6, donc Â = sin⁻¹(0,6) ≈ 36,9°, arrondi à 37°.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un angle de 45° et un côté opposé de 10 cm. Quelle formule donne le côté adjacent ?",
          choix: ["10 × tan(45°)", "10 / tan(45°)", "10 × cos(45°)", "10 / cos(45°)"],
          bonneReponse: 1,
          explication: "tan(45°) = 10/adjacent, donc adjacent = 10 / tan(45°).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un phare de 25 m de haut est observé depuis un bateau. L'angle entre la ligne d'horizon (le sol) et la ligne de visée vers le sommet du phare est de 18°. Calcule la distance entre le bateau et le pied du phare (arrondi au mètre), en supposant le triangle rectangle en pied du phare.",
          reponse: "≈ 77 m",
          explication:
            "Le côté opposé à l'angle de 18° est la hauteur du phare (25 m), le côté adjacent est la distance cherchée d : tan(18°) = 25/d, donc d = 25 / tan(18°) ≈ 25 / 0,3249 ≈ 77 m.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "CAH-SOH-TOA : cos(Â) = adjacent/hypoténuse ; sin(Â) = opposé/hypoténuse ; tan(Â) = opposé/adjacent.",
    "La trigonométrie s'utilise UNIQUEMENT dans un triangle rectangle.",
    "Pour calculer une longueur : identifier l'angle et les côtés, choisir la formule, isoler l'inconnue.",
    "Pour calculer un angle : calculer le rapport, puis utiliser la fonction réciproque (cos⁻¹, sin⁻¹, tan⁻¹).",
    "L'opposé et l'adjacent dépendent de l'angle choisi ; l'hypoténuse, elle, ne change jamais.",
    "cos(Â) et sin(Â) sont toujours compris entre 0 et 1 pour un angle aigu ; la tangente, elle, peut dépasser 1.",
  ],
};

export default chapitre;
