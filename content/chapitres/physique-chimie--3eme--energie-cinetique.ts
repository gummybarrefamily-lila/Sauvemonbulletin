import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "energie-cinetique",
  titre: "Énergie cinétique et sécurité routière",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Comprendre l'énergie cinétique d'un objet en mouvement, utiliser la relation Ec = ½ × m × v², et relier ces notions à la distance de freinage et à la sécurité routière.",
  objectifs: [
    "Savoir ce qu'est l'énergie cinétique et dans quelle unité elle s'exprime",
    "Connaître et utiliser la relation Ec = ½ × m × v²",
    "Comprendre l'effet de la vitesse et de la masse sur l'énergie cinétique",
    "Distinguer distance de réaction, distance de freinage et distance d'arrêt",
    "Relier l'énergie cinétique aux règles de sécurité routière",
  ],
  slides: [
    {
      titre: "Qu'est-ce que l'énergie cinétique ?",
      illustration: "🚴",
      visuel: "Objet en mouvement → énergie cinétique",
      contenu: [
        "Tout objet en mouvement possède de l'énergie cinétique, notée Ec",
        "Un objet immobile a une énergie cinétique nulle",
        "Elle s'exprime en joules (J)",
        "Plus un objet est rapide ou lourd, plus son énergie cinétique est grande",
      ],
      voixOff:
        "L'énergie cinétique, notée Ec, est l'énergie que possède tout objet en mouvement. Un objet immobile a une énergie cinétique nulle. Elle s'exprime en joules, comme toutes les énergies. Intuitivement, plus un objet va vite ou plus il est lourd, plus il transporte d'énergie cinétique.",
    },
    {
      titre: "La relation Ec = ½ × m × v²",
      illustration: "🧮",
      visuel: "Ec = ½ × m × v²",
      contenu: [
        "Ec : énergie cinétique en joules (J)",
        "m : masse de l'objet en kilogrammes (kg)",
        "v : vitesse de l'objet en mètres par seconde (m/s)",
        "Attention : la vitesse doit être en m/s, pas en km/h !",
      ],
      voixOff:
        "L'énergie cinétique se calcule avec la relation Ec égale un demi fois m fois v au carré. Ec est en joules, m est la masse en kilogrammes, et v est la vitesse en mètres par seconde. Attention, c'est le piège classique : il faut absolument convertir la vitesse en mètres par seconde avant de calculer, et surtout ne pas oublier d'élever la vitesse au carré.",
    },
    {
      titre: "Convertir une vitesse en m/s",
      illustration: "🔄",
      visuel: "v(m/s) = v(km/h) ÷ 3,6",
      contenu: [
        "1 km/h = 1000 m ÷ 3600 s ≈ 0,278 m/s",
        "Pour convertir : diviser la vitesse en km/h par 3,6",
        "Exemple : 90 km/h = 90 ÷ 3,6 = 25 m/s",
        "Exemple : 50 km/h = 50 ÷ 3,6 ≈ 13,9 m/s",
      ],
      voixOff:
        "Pour convertir une vitesse de kilomètres par heure en mètres par seconde, il suffit de diviser par trois virgule six. Par exemple, quatre-vingt-dix kilomètres par heure correspondent à vingt-cinq mètres par seconde. Cette conversion est indispensable avant tout calcul d'énergie cinétique.",
    },
    {
      titre: "L'effet de la vitesse sur Ec",
      illustration: "🏎️",
      visuel: "v ×2 → Ec ×4",
      contenu: [
        "La vitesse intervient au carré dans la formule",
        "Si la vitesse double, l'énergie cinétique est multipliée par 4",
        "Si la vitesse triple, l'énergie cinétique est multipliée par 9",
        "C'est pourquoi rouler vite augmente énormément le danger",
      ],
      voixOff:
        "Comme la vitesse intervient au carré dans la formule, son effet est considérable. Si tu doubles ta vitesse, ton énergie cinétique n'est pas doublée, mais multipliée par quatre. Si tu la triples, elle est multipliée par neuf. C'est cette loi mathématique qui explique pourquoi rouler vite augmente énormément la gravité des accidents.",
    },
    {
      titre: "L'effet de la masse sur Ec",
      illustration: "🚛",
      visuel: "m ×2 → Ec ×2",
      contenu: [
        "La masse intervient de façon simple (pas au carré) dans la formule",
        "Si la masse double, l'énergie cinétique double aussi",
        "Un camion a une énergie cinétique bien plus grande qu'une voiture à la même vitesse",
        "C'est pourquoi les distances d'arrêt des poids lourds sont plus longues",
      ],
      voixOff:
        "La masse, elle, intervient simplement dans la formule, sans être élevée au carré. Si la masse double, l'énergie cinétique double aussi, ni plus ni moins. À la même vitesse, un camion possède une énergie cinétique bien plus grande qu'une voiture, ce qui explique pourquoi les poids lourds ont besoin de distances d'arrêt plus longues.",
    },
    {
      titre: "Distance de réaction",
      illustration: "⏱️",
      visuel: "Dr = v × temps de réaction",
      contenu: [
        "C'est la distance parcourue pendant le temps de réaction du conducteur",
        "Temps de réaction moyen : environ 1 seconde",
        "Elle augmente avec la vitesse",
        "Fatigue, téléphone, alcool augmentent le temps de réaction",
      ],
      voixOff:
        "La distance de réaction est la distance parcourue par le véhicule pendant le temps que met le conducteur à réagir, environ une seconde en moyenne. Plus on roule vite, plus cette distance est grande. Et la fatigue, l'utilisation du téléphone ou l'alcool augmentent ce temps de réaction, donc cette distance.",
    },
    {
      titre: "Distance de freinage et distance d'arrêt",
      illustration: "🛑",
      visuel: "Distance d'arrêt = Dr + Df",
      contenu: [
        "La distance de freinage est parcourue une fois le frein actionné",
        "Elle dépend de l'énergie cinétique : plus Ec est grande, plus elle est longue",
        "Distance d'arrêt = distance de réaction + distance de freinage",
        "Elle augmente aussi avec un sol mouillé ou des pneus usés",
      ],
      voixOff:
        "La distance de freinage est la distance parcourue une fois que le frein est actionné, jusqu'à l'arrêt complet. Elle dépend directement de l'énergie cinétique du véhicule : plus elle est grande, plus la distance de freinage est longue. La distance d'arrêt totale additionne la distance de réaction et la distance de freinage. Un sol mouillé ou des pneus usés l'allongent encore.",
    },
    {
      titre: "Exemple de calcul",
      illustration: "🚗",
      visuel: "1000 kg à 25 m/s → Ec = 312 500 J",
      contenu: [
        "Une voiture de masse m = 1000 kg roule à 90 km/h, soit v = 25 m/s",
        "Ec = ½ × m × v² = ½ × 1000 × 25²",
        "Ec = ½ × 1000 × 625 = 312 500 J",
        "Si la vitesse passe à 50 km/h (≈13,9 m/s), Ec ≈ 96 500 J, bien plus faible",
      ],
      voixOff:
        "Prenons une voiture de mille kilogrammes roulant à quatre-vingt-dix kilomètres par heure, soit vingt-cinq mètres par seconde. Son énergie cinétique vaut un demi fois mille fois vingt-cinq au carré, c'est-à-dire trois cent douze mille cinq cents joules. En ville, à cinquante kilomètres par heure, cette énergie tombe à environ quatre-vingt-seize mille cinq cents joules : beaucoup plus faible, d'où l'intérêt de ralentir en agglomération.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Ec = ½ × m × v², avec Ec en J, m en kg et v en m/s",
        "Convertir : v(m/s) = v(km/h) ÷ 3,6",
        "Doubler la vitesse multiplie Ec par 4 (et non par 2)",
        "Distance d'arrêt = distance de réaction + distance de freinage",
      ],
      voixOff:
        "Résumons. L'énergie cinétique se calcule avec Ec égale un demi fois m fois v au carré, en joules, kilogrammes et mètres par seconde. N'oublie jamais de convertir la vitesse en divisant par trois virgule six. Retiens surtout que doubler la vitesse multiplie l'énergie cinétique par quatre, pas par deux. Et la distance d'arrêt d'un véhicule est la somme de la distance de réaction et de la distance de freinage. Tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "L'énergie cinétique est l'énergie que possède un objet en mouvement. Elle se calcule avec Ec = ½ × m × v² et permet de comprendre les distances de freinage en sécurité routière.",
    sections: [
      {
        titre: "L'énergie cinétique",
        points: [
          "Notée Ec, elle s'exprime en joules (J)",
          "Tout objet en mouvement en possède ; un objet immobile a Ec = 0",
          "Formule : Ec = ½ × m × v², avec m en kg et v en m/s",
        ],
      },
      {
        titre: "Convertir une vitesse",
        points: [
          "v(m/s) = v(km/h) ÷ 3,6",
          "Exemple : 90 km/h = 25 m/s ; 50 km/h ≈ 13,9 m/s",
          "Toujours convertir avant de calculer Ec",
        ],
      },
      {
        titre: "Effets de la vitesse et de la masse",
        points: [
          "La vitesse intervient au carré : doubler v multiplie Ec par 4",
          "La masse intervient simplement : doubler m double Ec",
          "Un véhicule lourd et/ou rapide a une énergie cinétique très grande",
        ],
      },
      {
        titre: "Sécurité routière",
        points: [
          "Distance de réaction : parcourue pendant le temps de réaction du conducteur (≈1 s)",
          "Distance de freinage : parcourue après le freinage, liée à l'énergie cinétique",
          "Distance d'arrêt = distance de réaction + distance de freinage",
          "Fatigue, téléphone, alcool, pluie et pneus usés allongent ces distances",
        ],
      },
    ],
    audio:
      "Fiche de révision : énergie cinétique et sécurité routière. L'énergie cinétique, notée Ec, est l'énergie que possède tout objet en mouvement ; elle s'exprime en joules. Elle se calcule avec la formule Ec égale un demi fois m fois v au carré, où m est la masse en kilogrammes et v la vitesse en mètres par seconde. Il faut toujours convertir une vitesse donnée en kilomètres par heure en la divisant par trois virgule six. La vitesse intervenant au carré dans la formule, doubler la vitesse multiplie l'énergie cinétique par quatre, alors que doubler la masse la multiplie seulement par deux. En sécurité routière, la distance d'arrêt d'un véhicule est la somme de la distance de réaction, parcourue pendant le temps de réaction du conducteur, et de la distance de freinage, qui dépend directement de l'énergie cinétique. La fatigue, l'usage du téléphone, l'alcool, la pluie et des pneus usés allongent toujours ces distances et augmentent le risque d'accident.",
  },
  memoCards: [
    { recto: "Qu'est-ce que l'énergie cinétique ?", verso: "L'énergie que possède un objet en mouvement, notée Ec, exprimée en joules (J)." },
    { recto: "Formule de l'énergie cinétique ?", verso: "Ec = ½ × m × v², avec Ec en J, m en kg, v en m/s." },
    { recto: "Comment convertir une vitesse de km/h en m/s ?", verso: "On divise par 3,6. Exemple : 90 km/h = 25 m/s." },
    { recto: "Que se passe-t-il si la vitesse double ?", verso: "L'énergie cinétique est multipliée par 4, car v est au carré dans la formule." },
    { recto: "Que se passe-t-il si la masse double ?", verso: "L'énergie cinétique double aussi, car m intervient simplement (pas au carré)." },
    { recto: "Qu'est-ce que la distance de réaction ?", verso: "La distance parcourue pendant le temps de réaction du conducteur (environ 1 seconde)." },
    { recto: "Qu'est-ce que la distance de freinage ?", verso: "La distance parcourue une fois le frein actionné, jusqu'à l'arrêt ; elle dépend de l'énergie cinétique." },
    { recto: "Comment calculer la distance d'arrêt ?", verso: "Distance d'arrêt = distance de réaction + distance de freinage." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quelle unité s'exprime l'énergie cinétique ?",
      choix: ["Le newton (N)", "Le joule (J)", "Le kilogramme (kg)", "Le mètre par seconde (m/s)"],
      bonneReponse: 1,
      explication: "L'énergie cinétique, comme toute énergie, s'exprime en joules (J).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'énergie cinétique d'un objet immobile est :",
      choix: ["très grande", "nulle", "négative", "égale à sa masse"],
      bonneReponse: 1,
      explication: "Sans vitesse (v = 0), l'énergie cinétique Ec = ½ × m × v² est nulle.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Convertis 36 km/h en m/s.",
      reponse: "36 ÷ 3,6 = 10 m/s",
      explication: "On divise la vitesse en km/h par 3,6 pour l'obtenir en m/s.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La distance d'arrêt d'un véhicule est égale à :",
      choix: [
        "la distance de freinage seule",
        "la distance de réaction seule",
        "la distance de réaction + la distance de freinage",
        "la vitesse × la masse",
      ],
      bonneReponse: 2,
      explication: "La distance d'arrêt totale est la somme de la distance de réaction et de la distance de freinage.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'énergie cinétique d'un cycliste et de son vélo de masse totale 80 kg roulant à v = 5 m/s.",
      reponse: "Ec = ½ × 80 × 5² = ½ × 80 × 25 = 1000 J",
      explication: "On applique Ec = ½ × m × v² avec v déjà en m/s.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une voiture double sa vitesse sans changer de masse. Son énergie cinétique est :",
      choix: ["multipliée par 2", "multipliée par 4", "multipliée par 8", "inchangée"],
      bonneReponse: 1,
      explication: "La vitesse est au carré dans la formule : doubler v multiplie Ec par 2² = 4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une voiture de masse 1200 kg roule à 20 m/s. Calcule son énergie cinétique.",
      reponse: "Ec = ½ × 1200 × 20² = ½ × 1200 × 400 = 240 000 J",
      explication: "Ec = ½ × m × v², ici v est déjà exprimée en m/s.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un camion et une voiture roulent à la même vitesse. Le camion a une masse 3 fois plus grande. Son énergie cinétique est :",
      choix: ["3 fois plus grande", "9 fois plus grande", "identique", "3 fois plus petite"],
      bonneReponse: 0,
      explication: "La masse intervient simplement (pas au carré) : une masse 3 fois plus grande donne une Ec 3 fois plus grande.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une voiture de masse 1000 kg roule à 108 km/h. Convertis la vitesse en m/s puis calcule l'énergie cinétique.",
      reponse:
        "v = 108 ÷ 3,6 = 30 m/s. Ec = ½ × 1000 × 30² = ½ × 1000 × 900 = 450 000 J",
      explication: "Il faut d'abord convertir la vitesse, puis appliquer la formule en élevant v au carré.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique, en utilisant la formule Ec = ½ × m × v², pourquoi rouler à 90 km/h au lieu de 50 km/h en ville est particulièrement dangereux.",
      reponse:
        "Comme la vitesse est élevée au carré dans la formule, passer de 50 à 90 km/h (presque un doublement) multiplie l'énergie cinétique par un facteur bien supérieur à 2 (environ 3,2 fois plus grande), ce qui augmente fortement la distance de freinage et la gravité d'un choc éventuel.",
      explication: "50 km/h ≈ 13,9 m/s (Ec ≈ 96 500 J pour 1000 kg) ; 90 km/h = 25 m/s (Ec = 312 500 J pour 1000 kg) : le rapport est bien supérieur à 2.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une moto de 200 kg et une voiture de 1000 kg ont la même énergie cinétique. On peut en déduire que :",
      choix: [
        "la moto roule forcément moins vite que la voiture",
        "la moto roule forcément plus vite que la voiture",
        "les deux roulent à la même vitesse",
        "on ne peut rien dire sans connaître les vitesses exactes",
      ],
      bonneReponse: 1,
      explication: "Pour une Ec identique avec une masse plus petite, la vitesse doit être plus grande (Ec = ½mv², donc v² = 2Ec/m est plus grand si m est plus petit).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un conducteur roulant à 50 km/h a un temps de réaction de 1 s. Calcule sa distance de réaction en mètres (convertis d'abord la vitesse en m/s).",
      reponse: "v = 50 ÷ 3,6 ≈ 13,9 m/s. Distance de réaction = v × t = 13,9 × 1 ≈ 13,9 m.",
      explication: "La distance de réaction se calcule comme une distance parcourue à vitesse constante : d = v × t.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La formule de l'énergie cinétique est :",
      choix: ["Ec = m × v", "Ec = ½ × m × v²", "Ec = m × g", "Ec = m ÷ v"],
      bonneReponse: 1,
      explication: "Ec = ½ × m × v², avec Ec en joules, m en kg, v en m/s.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans quelle unité doit être exprimée la vitesse pour calculer Ec ?",
      reponse: "En mètres par seconde (m/s).",
      explication: "Il faut convertir une vitesse en km/h en la divisant par 3,6.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule l'énergie cinétique d'un skieur de masse 60 kg allant à 15 m/s.",
      reponse: "Ec = ½ × 60 × 15² = ½ × 60 × 225 = 6750 J",
      explication: "Application directe de Ec = ½ × m × v².",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La distance de freinage dépend principalement de :",
      choix: ["la couleur du véhicule", "l'énergie cinétique du véhicule", "l'âge du conducteur", "la marque des pneus uniquement"],
      bonneReponse: 1,
      explication: "Plus l'énergie cinétique est grande, plus il faut d'énergie à dissiper par le freinage, donc plus la distance de freinage est longue.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux facteurs qui augmentent la distance de réaction et deux facteurs qui augmentent la distance de freinage.",
      reponse:
        "Distance de réaction : fatigue, téléphone au volant, alcool. Distance de freinage : route mouillée, pneus usés (ou vitesse/masse élevée).",
      explication: "Il faut bien distinguer les facteurs liés au conducteur (réaction) de ceux liés au véhicule et à la route (freinage).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Énergie cinétique et sécurité routière",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'énergie cinétique dépend :",
          choix: ["uniquement de la masse", "uniquement de la vitesse", "de la masse et de la vitesse", "de la couleur de l'objet"],
          bonneReponse: 2,
          explication: "Ec = ½ × m × v² dépend à la fois de la masse et de la vitesse.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Convertis 72 km/h en m/s.",
          reponse: "72 ÷ 3,6 = 20 m/s",
          explication: "On divise par 3,6 pour passer de km/h à m/s.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Si la vitesse d'un véhicule triple (masse inchangée), son énergie cinétique est multipliée par :",
          choix: ["3", "6", "9", "1"],
          bonneReponse: 2,
          explication: "La vitesse étant au carré, tripler v multiplie Ec par 3² = 9.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule l'énergie cinétique d'une voiture de masse 900 kg roulant à 20 m/s.",
          reponse: "Ec = ½ × 900 × 20² = ½ × 900 × 400 = 180 000 J",
          explication: "Application directe de la formule Ec = ½ × m × v².",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'appelle-t-on distance d'arrêt ? Comment se calcule-t-elle ?",
          reponse:
            "C'est la distance totale parcourue entre le moment où le danger est perçu et l'arrêt complet du véhicule. Distance d'arrêt = distance de réaction + distance de freinage.",
          explication: "Il s'agit de la somme des deux distances étudiées dans le chapitre.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux voitures identiques (même masse) roulent, l'une à 50 km/h, l'autre à 100 km/h. Sans calculer, explique pourquoi l'énergie cinétique de la seconde n'est pas seulement le double de la première.",
          reponse:
            "Parce que la vitesse intervient au carré dans la formule Ec = ½ × m × v² : doubler la vitesse multiplie l'énergie cinétique par 2² = 4, et non par 2.",
          explication: "C'est la conséquence directe du carré de la vitesse dans la formule de l'énergie cinétique.",
        },
      ],
    },
    {
      titre: "Examen 2 — Énergie cinétique et sécurité routière",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un objet immobile possède une énergie cinétique :",
          choix: ["maximale", "nulle", "négative", "égale à son poids"],
          bonneReponse: 1,
          explication: "Sans vitesse, Ec = ½ × m × 0² = 0.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule l'énergie cinétique d'un objet de masse 4 kg se déplaçant à 3 m/s.",
          reponse: "Ec = ½ × 4 × 3² = ½ × 4 × 9 = 18 J",
          explication: "Application directe de Ec = ½ × m × v².",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Le temps de réaction moyen d'un conducteur est d'environ :",
          choix: ["0,1 seconde", "1 seconde", "10 secondes", "1 minute"],
          bonneReponse: 1,
          explication: "On considère un temps de réaction moyen d'environ 1 seconde dans les conditions normales.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une voiture de 1000 kg possède une énergie cinétique de 128 000 J. Calcule sa vitesse en m/s (indice : isole v² puis calcule la racine carrée).",
          reponse: "v² = 2Ec ÷ m = 2 × 128 000 ÷ 1000 = 256. v = √256 = 16 m/s.",
          explication: "On isole v² dans la formule Ec = ½mv², puis on prend la racine carrée.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi les distances de sécurité recommandées sont-elles plus grandes sur autoroute qu'en ville ?",
          reponse:
            "Parce que la vitesse y est plus élevée, ce qui augmente fortement l'énergie cinétique (au carré de la vitesse) et donc les distances de réaction et de freinage nécessaires pour s'arrêter en sécurité.",
          explication: "Vitesse plus grande → énergie cinétique plus grande → distances de réaction et de freinage plus longues.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un camion de 8000 kg roule à 15 m/s. Une voiture de 1000 kg roule à 30 m/s. Calcule et compare leurs énergies cinétiques.",
          reponse:
            "Camion : Ec = ½ × 8000 × 15² = ½ × 8000 × 225 = 900 000 J. Voiture : Ec = ½ × 1000 × 30² = ½ × 1000 × 900 = 450 000 J. Le camion a une énergie cinétique deux fois plus grande que la voiture, malgré une vitesse plus faible, car sa masse est bien plus élevée.",
          explication: "Ce calcul montre que la masse (facteur simple) et la vitesse (facteur au carré) peuvent avoir des poids comparables selon les valeurs.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'énergie cinétique Ec (en joules) est l'énergie d'un objet en mouvement : Ec = ½ × m × v², avec m en kg et v en m/s.",
    "Toujours convertir une vitesse en km/h en m/s en divisant par 3,6 avant de calculer Ec.",
    "La vitesse est au carré dans la formule : doubler v multiplie Ec par 4, tripler v la multiplie par 9.",
    "La masse intervient simplement : doubler m double Ec.",
    "Distance d'arrêt = distance de réaction (liée au conducteur) + distance de freinage (liée à l'énergie cinétique et à la route).",
    "Fatigue, téléphone, alcool, pluie et pneus usés allongent les distances de réaction et/ou de freinage, augmentant le risque d'accident.",
  ],
};

export default chapitre;
