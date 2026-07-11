import type { Chapitre } from "../types";

const chapitres: Chapitre[] = [
{
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
},
{
  slug: "gravitation-poids",
  titre: "Gravitation, poids et masse",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Comprendre la gravitation universelle, distinguer la masse du poids, utiliser la relation P = m × g et savoir mener les calculs de poids attendus au brevet.",
  objectifs: [
    "Décrire qualitativement la gravitation universelle",
    "Distinguer la masse (en kg) du poids (en N)",
    "Connaître et utiliser la relation P = m × g",
    "Connaître g ≈ 9,8 N/kg sur Terre et g ≈ 1,6 N/kg sur la Lune",
    "Savoir mesurer un poids avec un dynamomètre et convertir les unités",
  ],
  slides: [
    {
      titre: "La gravitation universelle",
      illustration: "🌍",
      visuel: "Tout objet attire tout objet",
      contenu: [
        "Deux objets qui ont une masse s'attirent mutuellement",
        "C'est une attraction à distance, toujours présente",
        "Elle a été décrite par Isaac Newton au XVIIe siècle",
        "C'est elle qui te maintient au sol !",
      ],
      voixOff:
        "La gravitation universelle, c'est une idée simple et puissante décrite par Isaac Newton : deux objets qui possèdent une masse s'attirent toujours mutuellement, même à distance et sans se toucher. C'est cette attraction qui te maintient au sol, et qui fait tomber une pomme de l'arbre.",
    },
    {
      titre: "De quoi dépend cette attraction ?",
      illustration: "🧲",
      visuel: "Masses ↑ et distance ↓ → attraction ↑",
      contenu: [
        "L'attraction est d'autant plus forte que les masses sont grandes",
        "Elle est d'autant plus faible que la distance est grande",
        "Entre deux stylos, elle est trop faible pour être sentie",
        "Entre la Terre et toi, elle est bien réelle : c'est ton poids",
      ],
      voixOff:
        "L'attraction gravitationnelle dépend de deux choses. Plus les masses des objets sont grandes, plus l'attraction est forte. Et plus les objets sont éloignés, plus elle est faible. Entre deux stylos, elle existe mais elle est beaucoup trop faible pour être ressentie. Entre la Terre, énorme, et toi, elle est bien réelle : c'est ton poids.",
    },
    {
      titre: "La gravitation dans le système solaire",
      illustration: "🪐",
      visuel: "Soleil ⟲ planètes ⟲ satellites",
      contenu: [
        "La gravitation maintient les planètes en orbite autour du Soleil",
        "Elle maintient la Lune en orbite autour de la Terre",
        "Sans elle, chaque astre partirait en ligne droite",
        "Même principe pour les satellites artificiels",
      ],
      voixOff:
        "C'est la gravitation qui organise tout le système solaire. Elle maintient les planètes en orbite autour du Soleil, et la Lune en orbite autour de la Terre. Sans cette attraction, chaque astre partirait tout droit dans l'espace. Les satellites artificiels, comme ceux du GPS, obéissent exactement au même principe.",
    },
    {
      titre: "La masse",
      illustration: "⚖️",
      visuel: "m en kilogrammes (kg)",
      contenu: [
        "La masse mesure la quantité de matière d'un objet",
        "Unité : le kilogramme (kg)",
        "Instrument de mesure : la balance",
        "La masse ne change pas selon le lieu : 70 kg sur Terre = 70 kg sur la Lune",
      ],
      voixOff:
        "La masse, notée m, mesure la quantité de matière contenue dans un objet. Son unité est le kilogramme, et on la mesure avec une balance. Point essentiel : la masse ne dépend pas du lieu. Un astronaute de soixante-dix kilogrammes sur Terre a toujours une masse de soixante-dix kilogrammes sur la Lune.",
    },
    {
      titre: "Le poids",
      illustration: "🎯",
      visuel: "P en newtons (N)",
      contenu: [
        "Le poids est la force d'attraction exercée par la Terre sur un objet",
        "Unité : le newton (N)",
        "Instrument de mesure : le dynamomètre",
        "Direction verticale, sens vers le bas (vers le centre de la Terre)",
      ],
      voixOff:
        "Le poids, noté P, est la force d'attraction gravitationnelle exercée par la Terre sur un objet. Comme toutes les forces, il se mesure en newtons, avec un dynamomètre. Le poids a une direction verticale et il est dirigé vers le bas, c'est-à-dire vers le centre de la Terre. Contrairement à la masse, le poids dépend du lieu.",
    },
    {
      titre: "La relation P = m × g",
      illustration: "🧮",
      visuel: "P = m × g",
      contenu: [
        "P : poids en newtons (N)",
        "m : masse en kilogrammes (kg)",
        "g : intensité de la pesanteur en N/kg",
        "Formules dérivées : m = P ÷ g et g = P ÷ m",
      ],
      voixOff:
        "Le poids et la masse sont liés par la relation P égale m fois g. P est le poids en newtons, m la masse en kilogrammes, et g l'intensité de la pesanteur, en newtons par kilogramme. Cette formule se retourne facilement : m égale P divisé par g, et g égale P divisé par m. Vérifie toujours tes unités avant de calculer !",
    },
    {
      titre: "g sur Terre, g sur la Lune",
      illustration: "🌗",
      visuel: "g(Terre) ≈ 9,8 N/kg • g(Lune) ≈ 1,6 N/kg",
      contenu: [
        "Sur Terre : g ≈ 9,8 N/kg",
        "Sur la Lune : g ≈ 1,6 N/kg, environ 6 fois moins",
        "Le poids d'un objet est donc environ 6 fois plus faible sur la Lune",
        "Sa masse, elle, reste identique",
      ],
      voixOff:
        "L'intensité de la pesanteur g dépend de l'astre. Sur Terre, g vaut environ neuf virgule huit newtons par kilogramme. Sur la Lune, seulement un virgule six : environ six fois moins. Un objet pèse donc six fois moins sur la Lune que sur la Terre, alors que sa masse reste exactement la même. Voilà pourquoi les astronautes font des bonds immenses !",
    },
    {
      titre: "Exemple de calcul",
      illustration: "👨‍🚀",
      visuel: "50 kg → 490 N sur Terre, 80 N sur la Lune",
      contenu: [
        "Un élève a une masse m = 50 kg",
        "Sur Terre : P = m × g = 50 × 9,8 = 490 N",
        "Sur la Lune : P = 50 × 1,6 = 80 N",
        "La masse reste 50 kg dans les deux cas",
      ],
      voixOff:
        "Prenons un élève de cinquante kilogrammes. Sur Terre, son poids vaut P égale m fois g, soit cinquante fois neuf virgule huit, c'est-à-dire quatre cent quatre-vingt-dix newtons. Sur la Lune, cinquante fois un virgule six égale quatre-vingts newtons. Son poids a changé, mais sa masse est toujours de cinquante kilogrammes.",
    },
    {
      titre: "Ne confonds plus masse et poids !",
      illustration: "⚠️",
      visuel: "masse ≠ poids",
      contenu: [
        "Masse : quantité de matière, en kg, mesurée à la balance, invariable",
        "Poids : force d'attraction, en N, mesuré au dynamomètre, dépend du lieu",
        "Dans la vie courante, « peser 60 kilos » est un abus de langage",
        "En physique : m = 60 kg et P = 60 × 9,8 = 588 N sur Terre",
      ],
      voixOff:
        "C'est l'erreur la plus fréquente au brevet : confondre masse et poids. La masse est une quantité de matière, en kilogrammes, mesurée avec une balance, et elle ne change jamais. Le poids est une force, en newtons, mesurée avec un dynamomètre, et il dépend du lieu. Dire qu'on pèse soixante kilos est un abus de langage : en physique, la masse est de soixante kilogrammes et le poids vaut cinq cent quatre-vingt-huit newtons sur Terre.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Gravitation : attraction entre objets ayant une masse, dépend des masses et de la distance",
        "Masse en kg (invariable) ≠ poids en N (dépend du lieu)",
        "P = m × g, avec g ≈ 9,8 N/kg sur Terre et 1,6 N/kg sur la Lune",
        "Poids mesuré au dynamomètre, masse à la balance",
      ],
      voixOff:
        "Résumons. La gravitation est une attraction entre tous les objets qui ont une masse : elle augmente avec les masses et diminue avec la distance. La masse, en kilogrammes, ne change jamais ; le poids, en newtons, dépend du lieu. On les relie par P égale m fois g, avec g environ neuf virgule huit newtons par kilogramme sur Terre et un virgule six sur la Lune. Bravo, tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "La gravitation universelle est l'attraction entre tous les objets qui ont une masse. Le poids d'un objet est la force d'attraction que la Terre exerce sur lui : il se calcule avec P = m × g.",
    sections: [
      {
        titre: "La gravitation universelle",
        points: [
          "Deux objets qui ont une masse s'attirent mutuellement, à distance",
          "L'attraction est d'autant plus forte que les masses sont grandes et que la distance est petite",
          "Elle maintient les planètes en orbite autour du Soleil et la Lune autour de la Terre",
        ],
      },
      {
        titre: "La masse",
        points: [
          "Quantité de matière d'un objet, notée m",
          "Unité : le kilogramme (kg) ; instrument : la balance",
          "La masse ne dépend PAS du lieu (identique sur Terre et sur la Lune)",
        ],
      },
      {
        titre: "Le poids",
        points: [
          "Force d'attraction exercée par la Terre (ou un autre astre) sur un objet, notée P",
          "Unité : le newton (N) ; instrument : le dynamomètre",
          "Direction verticale, sens vers le bas (vers le centre de la Terre)",
          "Le poids DÉPEND du lieu",
        ],
      },
      {
        titre: "La relation P = m × g",
        points: [
          "P en newtons (N), m en kilogrammes (kg), g en N/kg",
          "Formules dérivées : m = P ÷ g et g = P ÷ m",
          "⚠️ Toujours convertir la masse en kg avant de calculer (500 g = 0,5 kg)",
        ],
      },
      {
        titre: "Valeurs de g à connaître",
        points: [
          "Sur Terre : g ≈ 9,8 N/kg",
          "Sur la Lune : g ≈ 1,6 N/kg (environ 6 fois moins)",
          "Exemple : m = 50 kg → P = 490 N sur Terre, P = 80 N sur la Lune",
        ],
      },
    ],
    audio:
      "Fiche de révision : gravitation, poids et masse. La gravitation universelle est une attraction entre tous les objets qui possèdent une masse : elle est d'autant plus forte que les masses sont grandes et que la distance est petite. C'est elle qui maintient les planètes en orbite autour du Soleil et la Lune autour de la Terre. Il ne faut pas confondre masse et poids. La masse mesure la quantité de matière : elle s'exprime en kilogrammes, se mesure avec une balance et ne dépend pas du lieu. Le poids est la force d'attraction exercée par la Terre sur un objet : il s'exprime en newtons, se mesure avec un dynamomètre et dépend du lieu. On les relie par la formule P égale m fois g, avec P en newtons, m en kilogrammes et g en newtons par kilogramme. Sur Terre, g vaut environ neuf virgule huit newtons par kilogramme ; sur la Lune, environ un virgule six, soit six fois moins. Ainsi, un élève de cinquante kilogrammes pèse quatre cent quatre-vingt-dix newtons sur Terre, mais seulement quatre-vingts newtons sur la Lune.",
  },
  memoCards: [
    { recto: "Qu'est-ce que la gravitation universelle ?", verso: "Une attraction mutuelle, à distance, entre tous les objets qui ont une masse." },
    { recto: "De quoi dépend l'attraction gravitationnelle ?", verso: "Des masses des deux objets (plus fortes = plus d'attraction) et de leur distance (plus loin = moins d'attraction)." },
    { recto: "Unité et instrument de mesure de la masse ?", verso: "Le kilogramme (kg), mesurée avec une balance. La masse ne dépend pas du lieu." },
    { recto: "Unité et instrument de mesure du poids ?", verso: "Le newton (N), mesuré avec un dynamomètre. Le poids dépend du lieu." },
    { recto: "Formule reliant poids et masse ?", verso: "P = m × g, avec P en N, m en kg et g en N/kg." },
    { recto: "Valeur de g sur Terre ?", verso: "g ≈ 9,8 N/kg" },
    { recto: "Valeur de g sur la Lune ?", verso: "g ≈ 1,6 N/kg, soit environ 6 fois moins que sur Terre." },
    { recto: "Poids d'un objet de 10 kg sur Terre ?", verso: "P = 10 × 9,8 = 98 N" },
    { recto: "Un astronaute va sur la Lune. Sa masse ? Son poids ?", verso: "Sa masse ne change pas ; son poids est divisé par environ 6." },
    { recto: "Comment retrouver m à partir de P ?", verso: "m = P ÷ g. Exemple : P = 49 N sur Terre → m = 49 ÷ 9,8 = 5 kg." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quelle unité s'exprime le poids ?",
      choix: ["Le kilogramme (kg)", "Le newton (N)", "Le gramme (g)", "Le N/kg"],
      bonneReponse: 1,
      explication: "Le poids est une force : il s'exprime en newtons (N). Le kilogramme est l'unité de la masse.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Avec quel instrument mesure-t-on un poids ?",
      choix: ["Une balance", "Un dynamomètre", "Un thermomètre", "Une éprouvette graduée"],
      bonneReponse: 1,
      explication: "Le dynamomètre mesure les forces, donc le poids. La balance mesure la masse.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule le poids sur Terre d'un objet de masse m = 2 kg (g = 9,8 N/kg).",
      reponse: "P = m × g = 2 × 9,8 = 19,6 N",
      explication: "On applique P = m × g avec la masse en kg : 2 × 9,8 = 19,6 N.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un astronaute quitte la Terre pour la Lune. Sa masse :",
      choix: ["diminue", "augmente", "reste identique", "devient nulle"],
      bonneReponse: 2,
      explication: "La masse est une quantité de matière : elle ne dépend pas du lieu. C'est le poids qui change.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le poids sur Terre d'une personne de masse 60 kg (g = 9,8 N/kg).",
      reponse: "P = 60 × 9,8 = 588 N",
      explication: "P = m × g = 60 × 9,8 = 588 N. Attention : on ne « pèse » pas 60 kg, on a une masse de 60 kg !",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Sur Terre (g = 9,8 N/kg), un objet a un poids de 49 N. Quelle est sa masse ?",
      choix: ["49 kg", "5 kg", "4,9 kg", "480,2 kg"],
      bonneReponse: 1,
      explication: "m = P ÷ g = 49 ÷ 9,8 = 5 kg.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une valise a une masse de 20 kg. Quel serait son poids sur la Lune (g = 1,6 N/kg) ?",
      reponse: "P = 20 × 1,6 = 32 N",
      explication: "On utilise la valeur de g de la Lune : P = m × g = 20 × 1,6 = 32 N.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un sac de farine de 500 g est posé sur Terre (g = 9,8 N/kg). Son poids vaut environ :",
      choix: ["4,9 N", "49 N", "500 N", "0,5 N"],
      bonneReponse: 0,
      explication: "Il faut d'abord convertir : 500 g = 0,5 kg. Puis P = 0,5 × 9,8 = 4,9 N.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un astronaute a une masse de 80 kg. Calcule son poids sur Terre (g = 9,8 N/kg) puis sur la Lune (g = 1,6 N/kg). Que remarques-tu ?",
      reponse:
        "Sur Terre : P = 80 × 9,8 = 784 N. Sur la Lune : P = 80 × 1,6 = 128 N. Le poids est environ 6 fois plus faible sur la Lune, mais la masse reste 80 kg.",
      explication: "784 ÷ 128 ≈ 6,1 : le rapport correspond au rapport des valeurs de g (9,8 ÷ 1,6 ≈ 6,1).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Sur la Lune (g = 1,6 N/kg), un équipement a un poids de 24 N. Calcule sa masse, puis son poids sur Terre (g = 9,8 N/kg).",
      reponse: "m = P ÷ g = 24 ÷ 1,6 = 15 kg. Sur Terre : P = 15 × 9,8 = 147 N.",
      explication: "La masse est la même partout (15 kg) ; on recalcule ensuite le poids avec le g terrestre.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Sur Mars, g ≈ 3,7 N/kg. Quel est le poids d'un rover de 900 kg sur Mars ?",
      choix: ["3 330 N", "8 820 N", "900 N", "243 N"],
      bonneReponse: 0,
      explication: "P = m × g = 900 × 3,7 = 3 330 N. (8 820 N serait son poids sur Terre.)",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la Lune reste en orbite autour de la Terre au lieu de partir tout droit dans l'espace.",
      reponse:
        "La Terre exerce sur la Lune une attraction gravitationnelle qui la dévie en permanence de sa trajectoire rectiligne : cette attraction la maintient sur une trajectoire quasi circulaire autour de la Terre.",
      explication: "Sans gravitation, la Lune poursuivrait un mouvement rectiligne ; l'attraction de la Terre courbe sans cesse sa trajectoire.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La masse se mesure avec :",
      choix: ["un dynamomètre", "une balance", "un voltmètre", "un chronomètre"],
      bonneReponse: 1,
      explication: "La balance mesure la masse (en kg) ; le dynamomètre mesure le poids (en N).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris la relation entre le poids, la masse et l'intensité de la pesanteur, avec les unités.",
      reponse: "P = m × g, avec P en newtons (N), m en kilogrammes (kg) et g en newtons par kilogramme (N/kg).",
      explication: "Formule centrale du chapitre, à connaître avec ses unités.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le poids sur Terre d'un cartable de 8 kg (g = 9,8 N/kg).",
      reponse: "P = 8 × 9,8 = 78,4 N",
      explication: "P = m × g avec m en kg.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le poids d'un objet sur la Lune est environ :",
      choix: ["6 fois plus grand que sur Terre", "identique à celui sur Terre", "6 fois plus petit que sur Terre", "nul"],
      bonneReponse: 2,
      explication: "g(Lune) ≈ 1,6 N/kg contre 9,8 N/kg sur Terre : le poids est environ 6 fois plus faible.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux différences entre la masse et le poids.",
      reponse:
        "La masse s'exprime en kg et ne dépend pas du lieu ; le poids s'exprime en N et dépend du lieu. (Aussi : balance pour la masse, dynamomètre pour le poids ; le poids est une force, pas la masse.)",
      explication: "C'est LA distinction à maîtriser pour le brevet.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Gravitation, poids et masse",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le poids d'un objet est :",
          choix: [
            "sa quantité de matière",
            "la force d'attraction exercée par la Terre sur lui",
            "son volume",
            "sa masse exprimée en newtons",
          ],
          bonneReponse: 1,
          explication: "Le poids est une force : l'attraction gravitationnelle exercée par la Terre (ou un autre astre) sur l'objet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule le poids sur Terre d'un élève de masse 45 kg (g = 9,8 N/kg).",
          reponse: "P = m × g = 45 × 9,8 = 441 N",
          explication: "On applique directement la formule avec la masse en kg.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Sur Terre, un objet a un poids de 98 N (g = 9,8 N/kg). Calcule sa masse.",
          reponse: "m = P ÷ g = 98 ÷ 9,8 = 10 kg",
          explication: "On isole m dans la formule : m = P ÷ g.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est la valeur approximative de l'intensité de la pesanteur sur la Lune ?",
          choix: ["9,8 N/kg", "1,6 N/kg", "6 N/kg", "0 N/kg"],
          bonneReponse: 1,
          explication: "g(Lune) ≈ 1,6 N/kg, environ 6 fois moins que sur Terre (9,8 N/kg).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un colis de 7 kg est déposé sur la Lune (g = 1,6 N/kg). Calcule son poids.",
          reponse: "P = 7 × 1,6 = 11,2 N",
          explication: "On utilise la valeur lunaire de g : P = m × g = 11,2 N.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un astronaute affirme : « Sur la Lune, j'ai perdu de la masse, je pèse 6 fois moins ! » Corrige ses propos en utilisant le vocabulaire scientifique.",
          reponse:
            "Sa masse n'a pas changé : elle est la même sur Terre et sur la Lune. C'est son poids (la force d'attraction, en newtons) qui est environ 6 fois plus faible, car g(Lune) ≈ 1,6 N/kg au lieu de 9,8 N/kg sur Terre.",
          explication: "La masse (kg) est invariable ; seul le poids (N) dépend de l'astre, car il dépend de g.",
        },
      ],
    },
    {
      titre: "Examen 2 — Gravitation, poids et masse",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'attraction gravitationnelle entre deux objets est d'autant plus forte que :",
          choix: [
            "leurs masses sont grandes et leur distance petite",
            "leurs masses sont petites et leur distance grande",
            "leur température est élevée",
            "leur vitesse est grande",
          ],
          bonneReponse: 0,
          explication: "La gravitation augmente avec les masses et diminue quand la distance augmente.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule le poids sur Terre d'un ballon de masse 0,6 kg (g = 9,8 N/kg).",
          reponse: "P = 0,6 × 9,8 = 5,88 N",
          explication: "P = m × g, avec la masse déjà en kg.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel rôle joue la gravitation dans le système solaire ?",
          choix: [
            "Elle repousse les planètes loin du Soleil",
            "Elle maintient les planètes en orbite autour du Soleil",
            "Elle n'agit que sur la Terre",
            "Elle réchauffe les planètes",
          ],
          bonneReponse: 1,
          explication: "L'attraction du Soleil dévie en permanence les planètes et les maintient sur leurs orbites ; de même, la Terre maintient la Lune en orbite.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Sur Terre, une personne a un poids de 735 N (g = 9,8 N/kg). Calcule sa masse, puis son poids sur la Lune (g = 1,6 N/kg).",
          reponse: "m = 735 ÷ 9,8 = 75 kg. Sur la Lune : P = 75 × 1,6 = 120 N.",
          explication: "On calcule d'abord la masse (invariable), puis on applique P = m × g avec le g lunaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Sur une planète inconnue, un objet de masse 4 kg a un poids de 35,2 N. Calcule l'intensité de la pesanteur g sur cette planète.",
          reponse: "g = P ÷ m = 35,2 ÷ 4 = 8,8 N/kg",
          explication: "On isole g dans la formule P = m × g : g = P ÷ m.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une pomme a une masse de 250 g. Calcule son poids sur Terre (g = 9,8 N/kg). Attention aux unités !",
          reponse: "250 g = 0,25 kg, donc P = 0,25 × 9,8 = 2,45 N",
          explication: "Erreur fréquente : oublier de convertir les grammes en kilogrammes avant d'appliquer P = m × g.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La gravitation universelle est une attraction à distance entre tous les objets qui ont une masse ; elle augmente avec les masses et diminue avec la distance.",
    "C'est la gravitation qui maintient les planètes en orbite autour du Soleil et la Lune autour de la Terre.",
    "Masse : quantité de matière, en kg, mesurée à la balance, invariable. Poids : force, en N, mesuré au dynamomètre, dépend du lieu.",
    "Formule à connaître : P = m × g (P en N, m en kg, g en N/kg), avec m = P ÷ g et g = P ÷ m.",
    "Valeurs à retenir : g ≈ 9,8 N/kg sur Terre et g ≈ 1,6 N/kg sur la Lune (poids environ 6 fois plus faible sur la Lune).",
    "Erreur classique à éviter : confondre masse et poids (« je pèse 60 kg ») et oublier de convertir les grammes en kilogrammes avant d'appliquer P = m × g.",
  ],
},
{
  slug: "ions-ph",
  titre: "Ions et pH",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Découvrir les ions, écrire leur formule, distinguer solutions acides, basiques et neutres grâce au pH, et savoir utiliser un papier pH ou un pH-mètre.",
  objectifs: [
    "Savoir ce qu'est un ion et écrire la formule d'ions courants",
    "Distinguer un cation (+) d'un anion (−)",
    "Utiliser l'échelle de pH pour classer une solution (acide, neutre, basique)",
    "Mesurer un pH avec du papier pH ou un pH-mètre",
    "Relier le pH à la sécurité (dangers des produits très acides ou très basiques)",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un ion ?",
      illustration: "⚛️",
      visuel: "Atome + ou − électron(s) → ion",
      contenu: [
        "Un atome est électriquement neutre",
        "Un ion est un atome (ou groupe d'atomes) qui a perdu ou gagné des électrons",
        "Il porte alors une charge électrique",
        "Les ions existent dans de nombreuses solutions (eau de mer, sang, eau du robinet...)",
      ],
      voixOff:
        "Un atome est normalement électriquement neutre : il a autant de charges positives que négatives. Mais quand un atome perd ou gagne des électrons, il devient un ion, chargé électriquement. On trouve des ions absolument partout : dans l'eau de mer, dans ton sang, dans l'eau du robinet.",
    },
    {
      titre: "Cations et anions",
      illustration: "➕➖",
      visuel: "Cation = ion + • Anion = ion −",
      contenu: [
        "Un cation a perdu des électrons : il est chargé positivement",
        "Un anion a gagné des électrons : il est chargé négativement",
        "Exemples de cations : Na⁺ (sodium), Cu²⁺ (cuivre), H⁺ (hydrogène)",
        "Exemples d'anions : Cl⁻ (chlorure), OH⁻ (hydroxyde)",
      ],
      voixOff:
        "On distingue deux familles d'ions. Le cation a perdu des électrons : il porte une charge positive, comme le sodium Na plus, ou le cuivre Cu deux plus. L'anion a gagné des électrons : il porte une charge négative, comme l'ion chlorure Cl moins ou l'ion hydroxyde O H moins.",
    },
    {
      titre: "Lire la formule d'un ion",
      illustration: "🔤",
      visuel: "Cu²⁺ : cuivre, charge +2",
      contenu: [
        "Le symbole rappelle l'élément chimique (Na, Cl, Cu...)",
        "L'exposant indique le nombre de charges et leur signe",
        "Na⁺ : un sodium ayant perdu un électron",
        "Cu²⁺ : un cuivre ayant perdu deux électrons",
      ],
      voixOff:
        "Pour lire la formule d'un ion, on regarde d'abord le symbole de l'élément, puis l'exposant qui indique la charge. Na plus est un ion sodium ayant perdu un électron. Cu deux plus est un ion cuivre ayant perdu deux électrons : le chiffre 2 indique le nombre de charges, et le signe plus leur nature.",
    },
    {
      titre: "L'ion hydrogène H⁺ et l'acidité",
      illustration: "🧪",
      visuel: "Beaucoup d'ions H⁺ → solution acide",
      contenu: [
        "L'ion H⁺ (ion hydrogène) est responsable de l'acidité d'une solution",
        "Plus une solution contient d'ions H⁺, plus elle est acide",
        "L'ion HO⁻ (ion hydroxyde) est responsable de la basicité",
        "Plus une solution contient d'ions HO⁻, plus elle est basique",
      ],
      voixOff:
        "Deux ions jouent un rôle clé dans les solutions aqueuses. L'ion hydrogène H plus rend une solution acide : plus il y en a, plus la solution est acide. À l'inverse, l'ion hydroxyde H O moins rend une solution basique : plus il y en a, plus la solution est basique.",
    },
    {
      titre: "L'échelle de pH",
      illustration: "🌈",
      visuel: "0 ─ acide ─ 7 neutre ─ basique ─ 14",
      contenu: [
        "Le pH est un nombre sans unité, compris entre 0 et 14",
        "pH < 7 : solution acide",
        "pH = 7 : solution neutre (eau pure)",
        "pH > 7 : solution basique",
      ],
      voixOff:
        "Pour comparer facilement les solutions, on utilise le pH, un nombre sans unité compris entre 0 et 14. En dessous de 7, la solution est acide. À 7 exactement, comme pour l'eau pure, elle est neutre. Au-dessus de 7, elle est basique.",
    },
    {
      titre: "Mesurer le pH",
      illustration: "📏",
      visuel: "Papier pH ou pH-mètre",
      contenu: [
        "Le papier pH change de couleur selon le pH de la solution",
        "On compare la couleur obtenue à une échelle de teintes",
        "Le pH-mètre donne directement une valeur précise et chiffrée",
        "Il faut rincer et étalonner le pH-mètre avant utilisation",
      ],
      voixOff:
        "Pour mesurer un pH, on peut tremper un papier pH dans la solution : il change de couleur, que l'on compare ensuite à une échelle de teintes de référence. Pour une mesure plus précise, on utilise un pH-mètre, un appareil électronique qui affiche directement une valeur chiffrée, à condition de bien l'étalonner avant de l'utiliser.",
    },
    {
      titre: "Exemples de pH du quotidien",
      illustration: "🍋",
      visuel: "Citron ≈ 2 • Eau ≈ 7 • Savon ≈ 9-10",
      contenu: [
        "Jus de citron : pH ≈ 2 (très acide)",
        "Vinaigre : pH ≈ 3 (acide)",
        "Eau pure : pH = 7 (neutre)",
        "Savon : pH ≈ 9 à 10 (basique)",
        "Déboucheur pour canalisations : pH ≈ 13-14 (très basique)",
      ],
      voixOff:
        "Dans la vie de tous les jours, le jus de citron a un pH d'environ 2, très acide. Le vinaigre est acide aussi, avec un pH proche de 3. L'eau pure est neutre, à pH 7. Le savon est basique, autour de 9 ou 10. Et un déboucheur de canalisations est extrêmement basique, avec un pH proche de 14.",
    },
    {
      titre: "Danger et sécurité",
      illustration: "⚠️",
      visuel: "pH loin de 7 = danger",
      contenu: [
        "Un pH très proche de 0 ou de 14 signale un produit dangereux (corrosif)",
        "Les produits corrosifs peuvent brûler la peau et les yeux",
        "Toujours porter des lunettes et des gants en laboratoire",
        "Ne jamais mélanger des produits sans l'accord du professeur",
      ],
      voixOff:
        "Plus le pH s'éloigne de 7, dans un sens ou dans l'autre, plus le produit est potentiellement dangereux et corrosif : il peut brûler la peau ou les yeux. C'est pourquoi on porte toujours des lunettes de protection et des gants en laboratoire, et qu'on ne mélange jamais des produits chimiques sans l'accord du professeur.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Un ion est un atome ayant perdu (cation, +) ou gagné (anion, −) des électrons",
        "L'ion H⁺ rend une solution acide, l'ion HO⁻ la rend basique",
        "pH < 7 acide, pH = 7 neutre, pH > 7 basique",
        "Mesure au papier pH (couleur) ou au pH-mètre (valeur précise)",
      ],
      voixOff:
        "Résumons. Un ion est un atome qui a perdu des électrons, on parle alors de cation chargé positivement, ou qui en a gagné, on parle alors d'anion chargé négativement. L'ion H plus rend une solution acide, l'ion H O moins la rend basique. L'échelle de pH va de 0 à 14 : en dessous de 7 c'est acide, à 7 c'est neutre, au-dessus c'est basique. On la mesure avec du papier pH ou un pH-mètre. Tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "Un ion est un atome (ou groupe d'atomes) qui a perdu ou gagné des électrons. Le pH est un nombre entre 0 et 14 qui permet de classer une solution comme acide, neutre ou basique.",
    sections: [
      {
        titre: "Les ions",
        points: [
          "Un ion est un atome ayant perdu ou gagné un ou plusieurs électrons",
          "Cation : ion positif (a perdu des électrons), exemples Na⁺, Cu²⁺",
          "Anion : ion négatif (a gagné des électrons), exemples Cl⁻, HO⁻",
          "Une solution est électriquement neutre : autant de charges + que de charges −",
        ],
      },
      {
        titre: "Acidité et basicité",
        points: [
          "L'ion H⁺ (hydrogène) rend une solution acide",
          "L'ion HO⁻ (hydroxyde) rend une solution basique",
          "Plus il y a d'ions H⁺, plus la solution est acide",
        ],
      },
      {
        titre: "L'échelle de pH",
        points: [
          "Le pH est un nombre sans unité, compris entre 0 et 14",
          "pH < 7 : solution acide (ex. citron, vinaigre)",
          "pH = 7 : solution neutre (ex. eau pure)",
          "pH > 7 : solution basique (ex. savon, déboucheur)",
        ],
      },
      {
        titre: "Mesure et sécurité",
        points: [
          "Papier pH : change de couleur, à comparer à une échelle de teintes",
          "pH-mètre : appareil électronique donnant une valeur précise, à étalonner",
          "Un pH proche de 0 ou de 14 signale un produit corrosif et dangereux",
          "En laboratoire : lunettes, gants, jamais de mélange sans autorisation",
        ],
      },
    ],
    audio:
      "Fiche de révision : ions et pH. Un ion est un atome, ou un groupe d'atomes, qui a perdu ou gagné des électrons. S'il a perdu des électrons, il devient un cation, chargé positivement, comme l'ion sodium Na plus. S'il a gagné des électrons, il devient un anion, chargé négativement, comme l'ion chlorure Cl moins. Dans les solutions, deux ions jouent un rôle particulier : l'ion hydrogène H plus rend une solution acide, et l'ion hydroxyde H O moins la rend basique. Pour classer une solution, on utilise le pH, un nombre sans unité compris entre 0 et 14. En dessous de 7, la solution est acide ; à 7, elle est neutre, comme l'eau pure ; au-dessus de 7, elle est basique. On mesure le pH avec du papier pH, qui change de couleur, ou avec un pH-mètre, qui donne une valeur précise. Attention : un pH très proche de 0 ou de 14 indique un produit corrosif et dangereux, il faut alors se protéger avec des lunettes et des gants.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un ion ?", verso: "Un atome (ou groupe d'atomes) qui a perdu ou gagné des électrons, et qui porte donc une charge électrique." },
    { recto: "Qu'est-ce qu'un cation ?", verso: "Un ion chargé positivement, car il a perdu un ou plusieurs électrons. Exemple : Na⁺." },
    { recto: "Qu'est-ce qu'un anion ?", verso: "Un ion chargé négativement, car il a gagné un ou plusieurs électrons. Exemple : Cl⁻." },
    { recto: "Quel ion rend une solution acide ?", verso: "L'ion hydrogène H⁺. Plus il y en a, plus la solution est acide." },
    { recto: "Quel ion rend une solution basique ?", verso: "L'ion hydroxyde HO⁻. Plus il y en a, plus la solution est basique." },
    { recto: "Échelle de pH : que signifient les valeurs ?", verso: "pH < 7 : acide. pH = 7 : neutre. pH > 7 : basique. Échelle de 0 à 14." },
    { recto: "Comment mesurer un pH ?", verso: "Avec du papier pH (comparaison de couleur) ou avec un pH-mètre (valeur précise, à étalonner)." },
    { recto: "Pourquoi un pH proche de 0 ou de 14 est dangereux ?", verso: "Il signale un produit corrosif, pouvant brûler la peau ou les yeux : il faut porter lunettes et gants." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce qu'un ion ?",
      choix: [
        "Un atome électriquement neutre",
        "Un atome ayant perdu ou gagné des électrons",
        "Une molécule d'eau",
        "Un mélange de deux liquides",
      ],
      bonneReponse: 1,
      explication: "Un ion est un atome (ou groupe d'atomes) qui a perdu ou gagné un ou plusieurs électrons, ce qui lui donne une charge électrique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'ion Na⁺ est :",
      choix: ["un anion", "un cation", "un atome neutre", "une molécule"],
      bonneReponse: 1,
      explication: "Na⁺ porte une charge positive : c'est un cation, formé quand l'atome de sodium perd un électron.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Une solution a un pH = 3. Est-elle acide, neutre ou basique ?",
      reponse: "Elle est acide, car son pH est inférieur à 7.",
      explication: "pH < 7 correspond toujours à une solution acide.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'eau pure a un pH égal à :",
      choix: ["0", "7", "14", "3"],
      bonneReponse: 1,
      explication: "L'eau pure est neutre : son pH vaut 7.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "L'ion chlorure a pour formule Cl⁻. S'agit-il d'un cation ou d'un anion ? Justifie.",
      reponse: "C'est un anion, car il porte une charge négative (il a gagné un électron).",
      explication: "Le signe moins en exposant indique un ion négatif, donc un anion.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel ion est responsable de la basicité d'une solution ?",
      choix: ["H⁺", "Na⁺", "HO⁻", "Cl⁻"],
      bonneReponse: 2,
      explication: "L'ion hydroxyde HO⁻ rend une solution basique ; plus sa concentration est élevée, plus le pH est grand.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Classe ces trois solutions de la plus acide à la plus basique : eau savonneuse (pH 9), vinaigre (pH 3), eau pure (pH 7).",
      reponse: "Vinaigre (pH 3) < eau pure (pH 7) < eau savonneuse (pH 9).",
      explication: "Plus le pH est petit, plus la solution est acide ; plus il est grand, plus elle est basique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pour mesurer précisément une valeur de pH, on utilise de préférence :",
      choix: ["une balance", "un dynamomètre", "un pH-mètre", "un thermomètre"],
      bonneReponse: 2,
      explication: "Le pH-mètre donne une valeur numérique précise, contrairement au papier pH qui donne seulement une estimation par couleur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "On teste trois liquides au papier pH : le liquide A vire au rouge (pH ≈ 2), le liquide B reste vert (pH ≈ 7), le liquide C vire au bleu foncé (pH ≈ 12). Identifie la nature de chaque liquide et indique lequel nécessite le plus de précautions.",
      reponse:
        "Le liquide A est acide (pH ≈ 2), le liquide B est neutre (pH ≈ 7), le liquide C est basique (pH ≈ 12). Le liquide C (le plus loin de 7) nécessite le plus de précautions, car il est le plus corrosif.",
      explication: "Plus le pH s'éloigne de 7, plus le risque de brûlure chimique augmente.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi une solution est toujours électriquement neutre, même si elle contient des ions.",
      reponse:
        "Une solution contient autant de charges positives (cations) que de charges négatives (anions) : les charges se compensent exactement, donc la solution globale est neutre.",
      explication: "C'est la condition d'électroneutralité : la matière ne crée pas de charge globale de rien.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "On ajoute progressivement de l'acide chlorhydrique (source d'ions H⁺) dans de l'eau pure. Le pH de la solution :",
      choix: ["augmente", "diminue", "reste égal à 7", "devient négatif immédiatement"],
      bonneReponse: 1,
      explication: "Ajouter des ions H⁺ rend la solution plus acide, donc le pH diminue en dessous de 7.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un élève trempe du papier pH dans un produit ménager et obtient une couleur correspondant à pH = 13. Que peut-il en conclure sur la nature et la dangerosité du produit ?",
      reponse:
        "Le produit est fortement basique (pH très supérieur à 7), donc probablement corrosif : il présente un danger pour la peau et les yeux, et doit être manipulé avec des gants et des lunettes de protection.",
      explication: "Un pH proche de 14 est caractéristique des produits basiques corrosifs (ex. déboucheur de canalisations).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un cation est un ion :",
      choix: ["chargé positivement", "chargé négativement", "neutre", "gazeux"],
      bonneReponse: 0,
      explication: "Le cation a perdu des électrons : il est chargé positivement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne les trois zones de l'échelle de pH et leurs bornes.",
      reponse: "pH de 0 à moins de 7 : acide. pH = 7 : neutre. pH de plus de 7 à 14 : basique.",
      explication: "L'échelle de pH va de 0 à 14, avec 7 comme valeur neutre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un produit a un pH = 11. Est-il acide ou basique ? Est-il potentiellement dangereux ?",
      reponse: "Il est basique (pH > 7). Comme il est assez loin de 7, il peut être corrosif et nécessite des précautions (gants, lunettes).",
      explication: "Plus le pH s'éloigne de 7, plus le risque de brûlure chimique augmente.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "L'ion H⁺ est responsable :",
      choix: ["de la basicité", "de l'acidité", "de la neutralité", "de la couleur de l'eau"],
      bonneReponse: 1,
      explication: "Plus il y a d'ions H⁺ dans une solution, plus elle est acide.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle différence fais-tu entre un papier pH et un pH-mètre ?",
      reponse:
        "Le papier pH donne une estimation du pH par changement de couleur, à comparer à une échelle de teintes. Le pH-mètre est un appareil électronique qui donne une valeur numérique précise, mais il doit être étalonné avant usage.",
      explication: "Les deux méthodes mesurent le pH, mais avec une précision différente.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Ions et pH",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un anion est un ion :",
          choix: ["ayant perdu des électrons", "ayant gagné des électrons", "sans charge", "toujours gazeux"],
          bonneReponse: 1,
          explication: "L'anion a gagné des électrons : il est chargé négativement.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Le vinaigre a un pH proche de 3. Est-ce une solution acide, neutre ou basique ?",
          reponse: "C'est une solution acide, car son pH est inférieur à 7.",
          explication: "pH < 7 signifie toujours une solution acide.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "L'ion responsable de la basicité d'une solution est :",
          choix: ["H⁺", "HO⁻", "Na⁺", "Cl⁻"],
          bonneReponse: 1,
          explication: "L'ion hydroxyde HO⁻ rend une solution basique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite un instrument permettant de mesurer précisément le pH d'une solution et un autre permettant d'en avoir une estimation rapide.",
          reponse: "Le pH-mètre donne une mesure précise. Le papier pH donne une estimation rapide par comparaison de couleur.",
          explication: "Les deux outils mesurent le pH, avec des précisions différentes.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Range dans l'ordre croissant de pH : savon (pH 9), citron (pH 2), eau pure (pH 7).",
          reponse: "Citron (pH 2) < eau pure (pH 7) < savon (pH 9).",
          explication: "On classe simplement les valeurs de pH de la plus petite à la plus grande.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un produit d'entretien a un pH = 13,5. Explique pourquoi ce produit doit être manipulé avec des précautions particulières, en utilisant le vocabulaire scientifique.",
          reponse:
            "Ce produit est fortement basique, car son pH est très supérieur à 7 et proche de 14. Un pH aussi éloigné de 7 caractérise un produit corrosif, susceptible de brûler la peau ou les yeux : il faut porter des gants et des lunettes de protection lors de sa manipulation.",
          explication: "Plus le pH s'éloigne de la neutralité (7), plus le caractère corrosif et dangereux du produit augmente.",
        },
      ],
    },
    {
      titre: "Examen 2 — Ions et pH",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est l'unité du pH ?",
          choix: ["Le newton", "Le pH n'a pas d'unité", "Le kilogramme", "Le volt"],
          bonneReponse: 1,
          explication: "Le pH est un nombre sans unité, compris entre 0 et 14.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "L'ion Cu²⁺ est-il un cation ou un anion ? Explique.",
          reponse: "C'est un cation, car il porte une charge positive (il a perdu deux électrons).",
          explication: "Le signe plus en exposant indique un ion chargé positivement, donc un cation.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une solution de pH = 8 est :",
          choix: ["acide", "neutre", "légèrement basique", "très corrosive"],
          bonneReponse: 2,
          explication: "Un pH légèrement supérieur à 7 indique une solution légèrement basique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi il faut étalonner un pH-mètre avant de l'utiliser.",
          reponse:
            "L'étalonnage permet de vérifier et d'ajuster l'appareil avec des solutions de pH connu, afin de garantir que les mesures affichées sur d'autres solutions soient exactes.",
          explication: "Sans étalonnage, le pH-mètre peut donner des valeurs fausses.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi une solution contenant des ions Na⁺ et des ions Cl⁻ est-elle électriquement neutre ?",
          reponse: "Parce que les charges positives des ions Na⁺ compensent exactement les charges négatives des ions Cl⁻ présentes dans la solution.",
          explication: "C'est le principe d'électroneutralité d'une solution ionique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux solutions A et B ont respectivement pH = 4 et pH = 11. Laquelle contient le plus d'ions H⁺ ? Laquelle contient le plus d'ions HO⁻ ? Justifie.",
          reponse:
            "La solution A (pH = 4) contient le plus d'ions H⁺, car un pH faible correspond à une forte concentration en ions H⁺. La solution B (pH = 11) contient le plus d'ions HO⁻, car un pH élevé correspond à une forte concentration en ions HO⁻.",
          explication: "Le pH traduit directement la quantité relative d'ions H⁺ et HO⁻ présents dans la solution.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un ion est un atome (ou groupe d'atomes) ayant perdu ou gagné des électrons : cation (positif) s'il en a perdu, anion (négatif) s'il en a gagné.",
    "Une solution reste toujours électriquement neutre : les charges positives et négatives des ions présents se compensent.",
    "L'ion H⁺ rend une solution acide ; l'ion HO⁻ la rend basique.",
    "Le pH est un nombre sans unité entre 0 et 14 : pH < 7 acide, pH = 7 neutre, pH > 7 basique.",
    "On mesure le pH avec du papier pH (estimation par couleur) ou un pH-mètre (valeur précise, à étalonner).",
    "Un pH très proche de 0 ou de 14 signale un produit corrosif et dangereux : lunettes et gants sont indispensables.",
  ],
},
{
  slug: "puissance-energie-electrique",
  titre: "Puissance et énergie électriques",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Comprendre la puissance électrique d'un appareil, utiliser la relation P = U × I, calculer une énergie électrique consommée avec E = P × t, et savoir lire une facture d'électricité.",
  objectifs: [
    "Connaître et utiliser la relation P = U × I",
    "Distinguer puissance (en watts) et énergie électrique (en joules ou kWh)",
    "Connaître et utiliser la relation E = P × t",
    "Convertir entre joules et kilowattheures (kWh)",
    "Comprendre l'effet Joule et savoir lire une facture d'électricité",
  ],
  slides: [
    {
      titre: "Qu'est-ce que la puissance électrique ?",
      illustration: "💡",
      visuel: "P en watts (W)",
      contenu: [
        "La puissance électrique, notée P, mesure l'énergie électrique consommée par seconde",
        "Unité : le watt (W), ou le kilowatt (kW) pour les grandes puissances",
        "Elle est indiquée sur les appareils (ex. ampoule 60 W, four 2000 W)",
        "Plus la puissance est grande, plus l'appareil consomme vite de l'énergie",
      ],
      voixOff:
        "La puissance électrique, notée P, indique quelle quantité d'énergie électrique un appareil consomme chaque seconde. Elle s'exprime en watts, ou en kilowatts pour les appareils plus puissants. Cette valeur est généralement indiquée sur l'appareil lui-même : une ampoule de soixante watts, un four de deux mille watts. Plus la puissance est élevée, plus l'appareil consomme rapidement de l'énergie.",
    },
    {
      titre: "La relation P = U × I",
      illustration: "🧮",
      visuel: "P = U × I",
      contenu: [
        "P : puissance électrique en watts (W)",
        "U : tension aux bornes de l'appareil, en volts (V)",
        "I : intensité du courant qui le traverse, en ampères (A)",
        "Formules dérivées : U = P ÷ I et I = P ÷ U",
      ],
      voixOff:
        "La puissance électrique se calcule avec la relation P égale U fois I. P est la puissance en watts, U la tension en volts, et I l'intensité en ampères. On peut retourner cette formule : U égale P divisé par I, et I égale P divisé par U, selon la grandeur que l'on cherche.",
    },
    {
      titre: "Exemple de calcul de puissance",
      illustration: "🔌",
      visuel: "U = 230 V, I = 4 A → P = 920 W",
      contenu: [
        "Un appareil est branché sous une tension U = 230 V (tension du secteur en France)",
        "Il est traversé par un courant I = 4 A",
        "P = U × I = 230 × 4 = 920 W",
        "C'est la puissance typique d'un petit four ou d'un aspirateur",
      ],
      voixOff:
        "Prenons un appareil branché sous la tension du secteur français, deux cent trente volts, et traversé par un courant de quatre ampères. Sa puissance vaut P égale U fois I, soit deux cent trente fois quatre, c'est-à-dire neuf cent vingt watts. C'est à peu près la puissance d'un petit four ou d'un aspirateur.",
    },
    {
      titre: "L'énergie électrique",
      illustration: "⚡",
      visuel: "E en joules (J)",
      contenu: [
        "L'énergie électrique, notée E, mesure la quantité totale d'électricité consommée",
        "Elle dépend de la puissance de l'appareil ET de la durée d'utilisation",
        "Unité légale : le joule (J)",
        "Unité pratique utilisée sur les factures : le kilowattheure (kWh)",
      ],
      voixOff:
        "Contrairement à la puissance, qui mesure une consommation instantanée, l'énergie électrique, notée E, mesure la quantité totale d'électricité consommée sur une durée donnée. Elle dépend à la fois de la puissance de l'appareil et du temps pendant lequel il fonctionne. Son unité légale est le joule, mais sur les factures, on utilise plutôt le kilowattheure.",
    },
    {
      titre: "La relation E = P × t",
      illustration: "⏳",
      visuel: "E = P × t",
      contenu: [
        "E : énergie électrique en joules (J)",
        "P : puissance en watts (W)",
        "t : durée de fonctionnement en secondes (s)",
        "Attention aux unités : bien convertir minutes et heures en secondes !",
      ],
      voixOff:
        "L'énergie électrique consommée se calcule avec E égale P fois t. E est en joules, P en watts, et t est la durée de fonctionnement en secondes. Attention, c'est un piège classique : si la durée est donnée en minutes ou en heures, il faut impérativement la convertir en secondes avant de calculer.",
    },
    {
      titre: "Le kilowattheure (kWh)",
      illustration: "🏠",
      visuel: "1 kWh = 1000 W pendant 1 heure",
      contenu: [
        "Le kilowattheure est l'énergie consommée par un appareil de 1000 W pendant 1 heure",
        "1 kWh = 3 600 000 J = 3,6 × 10⁶ J",
        "C'est l'unité utilisée par les fournisseurs d'électricité pour facturer",
        "Exemple : un radiateur de 1000 W allumé 3 h consomme 3 kWh",
      ],
      voixOff:
        "Dans la vie courante, on utilise le kilowattheure, noté kWh, qui correspond à l'énergie consommée par un appareil de mille watts pendant une heure. Cela équivaut à trois millions six cent mille joules. C'est cette unité que les fournisseurs d'électricité utilisent pour facturer notre consommation. Par exemple, un radiateur de mille watts allumé pendant trois heures consomme trois kilowattheures.",
    },
    {
      titre: "L'effet Joule",
      illustration: "🔥",
      visuel: "Courant électrique → chaleur",
      contenu: [
        "Le passage du courant dans un conducteur produit toujours de la chaleur",
        "C'est l'effet Joule, dû à la résistance électrique du conducteur",
        "Utile dans certains appareils : radiateur, grille-pain, fer à repasser",
        "Gênant dans d'autres cas : échauffement des fils, pertes d'énergie",
      ],
      voixOff:
        "Chaque fois qu'un courant électrique traverse un conducteur, une partie de l'énergie électrique se transforme en chaleur : c'est l'effet Joule, lié à la résistance du conducteur. Cet effet est recherché dans des appareils comme les radiateurs, les grille-pain ou les fers à repasser. Mais il peut aussi être gênant, en provoquant l'échauffement des fils électriques et des pertes d'énergie.",
    },
    {
      titre: "Lire une facture d'électricité",
      illustration: "🧾",
      visuel: "Consommation (kWh) × prix du kWh = montant",
      contenu: [
        "La facture indique la consommation en kilowattheures (kWh) sur la période",
        "Le montant à payer = consommation (kWh) × prix du kWh",
        "Éteindre les appareils en veille et privilégier les appareils économes réduit la facture",
        "Un appareil plus puissant ou utilisé plus longtemps consomme plus d'énergie",
      ],
      voixOff:
        "Sur une facture d'électricité, on retrouve la consommation totale en kilowattheures sur la période concernée. Le montant à payer s'obtient en multipliant cette consommation par le prix du kilowattheure. Pour réduire sa facture, on peut éteindre les appareils en veille et choisir des appareils économes : un appareil plus puissant, ou utilisé plus longtemps, consomme toujours plus d'énergie.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Puissance : P = U × I, en watts (W)",
        "Énergie : E = P × t, en joules (J) si t en secondes",
        "1 kWh = 3 600 000 J, unité pratique pour les factures",
        "L'effet Joule transforme une partie de l'énergie électrique en chaleur",
      ],
      voixOff:
        "Résumons. La puissance électrique se calcule avec P égale U fois I, en watts. L'énergie électrique consommée se calcule avec E égale P fois t, en joules si le temps est en secondes. Un kilowattheure vaut trois millions six cent mille joules : c'est l'unité pratique utilisée sur les factures. Et l'effet Joule transforme toujours une partie de l'énergie électrique en chaleur lors du passage du courant. Tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "La puissance électrique P (en watts) mesure l'énergie consommée par seconde par un appareil. L'énergie électrique E (en joules ou kWh) dépend de la puissance et de la durée d'utilisation.",
    sections: [
      {
        titre: "La puissance électrique",
        points: [
          "Notée P, unité : le watt (W)",
          "P = U × I, avec U en volts et I en ampères",
          "Indiquée sur les appareils électriques",
        ],
      },
      {
        titre: "L'énergie électrique",
        points: [
          "Notée E, unité légale : le joule (J)",
          "E = P × t, avec P en watts et t en secondes",
          "Dépend à la fois de la puissance et de la durée d'utilisation",
        ],
      },
      {
        titre: "Le kilowattheure",
        points: [
          "1 kWh = énergie consommée par un appareil de 1000 W pendant 1 h",
          "1 kWh = 3 600 000 J",
          "Unité utilisée sur les factures d'électricité",
        ],
      },
      {
        titre: "Effet Joule et facture",
        points: [
          "Le passage du courant produit toujours de la chaleur (effet Joule)",
          "Utile (radiateur, grille-pain) ou gênant (pertes, échauffement des fils)",
          "Montant facture = consommation (kWh) × prix du kWh",
        ],
      },
    ],
    audio:
      "Fiche de révision : puissance et énergie électriques. La puissance électrique, notée P, indique l'énergie consommée chaque seconde par un appareil ; elle s'exprime en watts et se calcule avec la formule P égale U fois I, où U est la tension en volts et I l'intensité en ampères. L'énergie électrique, notée E, dépend à la fois de la puissance de l'appareil et de la durée de son utilisation : elle se calcule avec E égale P fois t, en joules si le temps est exprimé en secondes. Dans la vie courante, on utilise plutôt le kilowattheure, qui correspond à l'énergie consommée par un appareil de mille watts pendant une heure, soit trois millions six cent mille joules ; c'est cette unité qui figure sur les factures d'électricité. Le passage du courant électrique dans un conducteur produit toujours de la chaleur : c'est l'effet Joule, exploité dans les radiateurs ou les grille-pain, mais responsable aussi de pertes d'énergie dans les fils électriques.",
  },
  memoCards: [
    { recto: "Formule de la puissance électrique ?", verso: "P = U × I, avec P en watts, U en volts, I en ampères." },
    { recto: "Formule de l'énergie électrique ?", verso: "E = P × t, avec E en joules, P en watts, t en secondes." },
    { recto: "Que vaut 1 kWh en joules ?", verso: "1 kWh = 3 600 000 J (énergie d'un appareil de 1000 W pendant 1 h)." },
    { recto: "Qu'est-ce que l'effet Joule ?", verso: "La transformation d'une partie de l'énergie électrique en chaleur lors du passage du courant dans un conducteur." },
    { recto: "Différence entre puissance et énergie ?", verso: "La puissance (W) est une consommation instantanée ; l'énergie (J ou kWh) dépend en plus de la durée d'utilisation." },
    { recto: "Comment calculer le montant d'une facture d'électricité ?", verso: "Montant = consommation en kWh × prix du kWh." },
    { recto: "Puissance d'un appareil sous 230 V traversé par 2 A ?", verso: "P = U × I = 230 × 2 = 460 W." },
    { recto: "Énergie consommée par une ampoule de 60 W allumée 2 heures (en Wh puis J) ?", verso: "E = 60 × 2 = 120 Wh = 0,12 kWh = 432 000 J." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quelle unité s'exprime la puissance électrique ?",
      choix: ["Le joule (J)", "Le watt (W)", "L'ampère (A)", "Le volt (V)"],
      bonneReponse: 1,
      explication: "La puissance électrique s'exprime en watts (W).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La formule de la puissance électrique est :",
      choix: ["P = U + I", "P = U × I", "P = U ÷ I", "P = U − I"],
      bonneReponse: 1,
      explication: "P = U × I, avec P en watts, U en volts, I en ampères.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un appareil est sous une tension U = 230 V et traversé par un courant I = 2 A. Calcule sa puissance.",
      reponse: "P = U × I = 230 × 2 = 460 W",
      explication: "Application directe de P = U × I.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le kilowattheure (kWh) est une unité :",
      choix: ["de puissance", "d'énergie", "de tension", "d'intensité"],
      bonneReponse: 1,
      explication: "Le kilowattheure est une unité pratique d'énergie, utilisée notamment sur les factures.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une bouilloire de puissance P = 2000 W fonctionne pendant t = 180 s. Calcule l'énergie électrique consommée en joules.",
      reponse: "E = P × t = 2000 × 180 = 360 000 J",
      explication: "On applique E = P × t avec le temps déjà en secondes.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un radiateur de 1000 W fonctionne pendant 2 heures. Son énergie consommée, en kWh, vaut :",
      choix: ["0,5 kWh", "2 kWh", "500 kWh", "1000 kWh"],
      bonneReponse: 1,
      explication: "1000 W = 1 kW ; sur 2 heures, l'énergie consommée est 1 kW × 2 h = 2 kWh.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un appareil a une puissance de 800 W et fonctionne pendant 30 minutes. Calcule l'énergie consommée en joules (convertis d'abord le temps en secondes).",
      reponse: "t = 30 × 60 = 1800 s. E = P × t = 800 × 1800 = 1 440 000 J",
      explication: "Il faut convertir les minutes en secondes avant d'appliquer E = P × t.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un appareil a une puissance P = 460 W sous une tension U = 230 V. Quelle est l'intensité du courant ?",
      choix: ["2 A", "0,5 A", "690 A", "230 A"],
      bonneReponse: 0,
      explication: "I = P ÷ U = 460 ÷ 230 = 2 A.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un four électrique de puissance 2500 W fonctionne pendant 45 minutes. Calcule l'énergie consommée en kWh, puis le coût de cette utilisation si le kWh coûte 0,20 €.",
      reponse:
        "45 min = 0,75 h. E = P × t = 2,5 kW × 0,75 h = 1,875 kWh. Coût = 1,875 × 0,20 = 0,375 €, soit environ 0,38 €.",
      explication: "Pour calculer une énergie en kWh, on peut directement multiplier la puissance en kW par la durée en heures.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une ampoule LED de 8 W et une ampoule à incandescence de 60 W éclairent chacune pendant 5 heures. Compare leurs énergies consommées en Wh et explique l'intérêt des LED.",
      reponse:
        "LED : E = 8 × 5 = 40 Wh. Incandescence : E = 60 × 5 = 300 Wh. L'ampoule LED consomme 7,5 fois moins d'énergie pour un même éclairage : elle permet de réaliser des économies d'électricité importantes.",
      explication: "Pour un service rendu comparable, une puissance plus faible consomme moins d'énergie sur une même durée.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Deux appareils identiques fonctionnent, l'un pendant 1 heure, l'autre pendant 3 heures. Le second consomme :",
      choix: ["la même énergie que le premier", "3 fois plus d'énergie que le premier", "3 fois moins d'énergie que le premier", "une énergie non calculable"],
      bonneReponse: 1,
      explication: "E = P × t : à puissance égale, l'énergie consommée est proportionnelle à la durée de fonctionnement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique pourquoi un fil électrique parcouru par un courant trop intense peut chauffer dangereusement, en utilisant la notion d'effet Joule.",
      reponse:
        "Le passage du courant dans un fil, qui possède une résistance, transforme une partie de l'énergie électrique en chaleur (effet Joule). Plus l'intensité du courant est grande, plus cette chaleur produite est importante, ce qui peut échauffer dangereusement le fil et provoquer un incendie.",
      explication: "L'effet Joule est d'autant plus important que l'intensité du courant est élevée, d'où les précautions sur les intensités maximales admissibles dans les fils.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'énergie électrique se calcule avec la formule :",
      choix: ["E = P × t", "E = P ÷ t", "E = P + t", "E = U × I"],
      bonneReponse: 0,
      explication: "E = P × t, avec E en joules si P est en watts et t en secondes.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que vaut 1 kWh en joules ?",
      reponse: "1 kWh = 3 600 000 J",
      explication: "C'est l'énergie consommée par un appareil de 1000 W pendant 3600 secondes (1 heure).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un appareil de 1500 W fonctionne pendant 2 heures. Calcule son énergie consommée en kWh.",
      reponse: "E = 1,5 kW × 2 h = 3 kWh",
      explication: "En kW et heures, on obtient directement l'énergie en kWh.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "L'effet Joule correspond à :",
      choix: [
        "la production de lumière par un courant",
        "la transformation d'énergie électrique en chaleur",
        "la transformation de chaleur en électricité",
        "la disparition du courant électrique",
      ],
      bonneReponse: 1,
      explication: "L'effet Joule est le dégagement de chaleur dû au passage du courant dans un conducteur résistant.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un appareil a une puissance de 300 W sous une tension de 150 V. Calcule l'intensité du courant qui le traverse.",
      reponse: "I = P ÷ U = 300 ÷ 150 = 2 A",
      explication: "On isole I dans la formule P = U × I : I = P ÷ U.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Puissance et énergie électriques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La puissance électrique dépend de :",
          choix: ["la tension et l'intensité", "uniquement de la tension", "uniquement de l'intensité", "de la résistance seule"],
          bonneReponse: 0,
          explication: "P = U × I : la puissance dépend à la fois de la tension et de l'intensité.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un appareil est sous 230 V et traversé par 3 A. Calcule sa puissance.",
          reponse: "P = U × I = 230 × 3 = 690 W",
          explication: "Application directe de P = U × I.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un appareil de 500 W fonctionne pendant 4 heures. Son énergie consommée est :",
          choix: ["0,5 kWh", "2 kWh", "4 kWh", "500 kWh"],
          bonneReponse: 1,
          explication: "E = 0,5 kW × 4 h = 2 kWh.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un sèche-cheveux de puissance 1200 W fonctionne pendant 300 s. Calcule l'énergie consommée en joules.",
          reponse: "E = P × t = 1200 × 300 = 360 000 J",
          explication: "Application directe de E = P × t avec t en secondes.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre puissance et énergie électriques, avec leurs unités respectives.",
          reponse:
            "La puissance (en watts) mesure la consommation instantanée d'un appareil. L'énergie (en joules ou en kWh) mesure la quantité totale d'électricité consommée sur une durée donnée : elle dépend de la puissance ET du temps de fonctionnement.",
          explication: "La puissance est indépendante du temps ; l'énergie en tient compte via E = P × t.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un lave-linge de puissance 2000 W fonctionne 1 h 30 min. Calcule l'énergie consommée en kWh, puis son coût si le kWh coûte 0,25 €.",
          reponse:
            "1 h 30 = 1,5 h. E = 2 kW × 1,5 h = 3 kWh. Coût = 3 × 0,25 = 0,75 €.",
          explication: "On convertit la durée en heures puis on multiplie la puissance en kW par la durée en h pour obtenir l'énergie en kWh.",
        },
      ],
    },
    {
      titre: "Examen 2 — Puissance et énergie électriques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "1 kilowattheure (kWh) correspond à :",
          choix: [
            "l'énergie d'un appareil de 1 W pendant 1000 h",
            "l'énergie d'un appareil de 1000 W pendant 1 h",
            "une puissance de 1000 W",
            "une tension de 1000 V",
          ],
          bonneReponse: 1,
          explication: "1 kWh est l'énergie consommée par un appareil de 1000 W pendant 1 heure.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un appareil de puissance P = 100 W fonctionne pendant t = 10 s. Calcule l'énergie consommée en joules.",
          reponse: "E = P × t = 100 × 10 = 1000 J",
          explication: "Application directe de E = P × t.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un appareil a une puissance de 690 W sous une tension de 230 V. Quelle est l'intensité qui le traverse ?",
          choix: ["1,5 A", "3 A", "460 A", "0,33 A"],
          bonneReponse: 1,
          explication: "I = P ÷ U = 690 ÷ 230 = 3 A.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qu'est l'effet Joule et donne un exemple d'appareil qui l'exploite volontairement.",
          reponse:
            "L'effet Joule est la transformation d'une partie de l'énergie électrique en chaleur lors du passage d'un courant dans un conducteur résistant. Un radiateur électrique, un grille-pain ou un fer à repasser exploitent volontairement cet effet pour produire de la chaleur.",
          explication: "L'effet Joule est systématique dans tout conducteur parcouru par un courant ; certains appareils l'utilisent comme fonction principale.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une facture indique une consommation de 350 kWh sur deux mois, au prix de 0,22 € le kWh. Calcule le montant de la facture.",
          reponse: "Montant = 350 × 0,22 = 77 €",
          explication: "Montant = consommation (kWh) × prix du kWh.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un chauffe-eau de 2000 W fonctionne 2 h par jour. Calcule l'énergie consommée en une semaine (en kWh), puis convertis cette énergie en joules.",
          reponse:
            "Par jour : E = 2 kW × 2 h = 4 kWh. Sur une semaine (7 jours) : 4 × 7 = 28 kWh. En joules : 28 × 3 600 000 = 100 800 000 J.",
          explication: "On calcule d'abord l'énergie journalière, puis on multiplie par le nombre de jours, avant de convertir en joules avec 1 kWh = 3 600 000 J.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La puissance électrique P (en watts) se calcule avec P = U × I, avec U en volts et I en ampères.",
    "L'énergie électrique E (en joules) se calcule avec E = P × t, avec P en watts et t en secondes.",
    "1 kWh = 3 600 000 J : c'est l'énergie consommée par un appareil de 1000 W pendant 1 heure.",
    "Sur une facture, montant = consommation (kWh) × prix du kWh.",
    "L'effet Joule transforme une partie de l'énergie électrique en chaleur lors du passage du courant dans un conducteur.",
    "À puissance égale, l'énergie consommée augmente avec la durée d'utilisation ; à durée égale, elle augmente avec la puissance.",
  ],
},
{
  slug: "resistance-loi-ohm",
  titre: "Résistance et loi d'Ohm",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Comprendre le rôle d'un résistor (résistance) dans un circuit électrique, connaître et utiliser la loi d'Ohm U = R × I, et savoir tracer et exploiter une caractéristique tension-intensité.",
  objectifs: [
    "Connaître le rôle d'un résistor dans un circuit électrique",
    "Mesurer une résistance à l'ohmmètre et l'exprimer en ohms (Ω)",
    "Connaître et utiliser la loi d'Ohm U = R × I",
    "Savoir tracer et lire une caractéristique U = f(I) d'un résistor",
    "Résoudre des exercices de calcul de tension, résistance ou intensité",
  ],
  slides: [
    {
      titre: "Le résistor dans un circuit",
      illustration: "🔌",
      visuel: "Résistor = s'oppose au passage du courant",
      contenu: [
        "Un résistor est un composant électrique qui s'oppose au passage du courant",
        "Il transforme une partie de l'énergie électrique en chaleur",
        "Symbole normalisé : un rectangle",
        "Il protège les autres composants d'un circuit (ex. une DEL)",
      ],
      voixOff:
        "Le résistor est un composant qui s'oppose au passage du courant électrique dans un circuit. En s'opposant au courant, il transforme une partie de l'énergie électrique en chaleur. Son symbole normalisé est un simple rectangle. On l'utilise très souvent pour protéger d'autres composants, comme une diode électroluminescente, qui serait détruite par un courant trop fort.",
    },
    {
      titre: "La résistance électrique",
      illustration: "⚙️",
      visuel: "R en ohms (Ω)",
      contenu: [
        "La résistance, notée R, mesure l'opposition d'un résistor au passage du courant",
        "Unité : l'ohm, symbole Ω",
        "Plus R est grande, plus le résistor s'oppose fortement au courant",
        "On la mesure avec un ohmmètre, hors tension, sur le résistor seul",
      ],
      voixOff:
        "La résistance électrique, notée R, mesure à quel point un résistor s'oppose au passage du courant. Elle s'exprime en ohms, symbole oméga majuscule. Plus la résistance est grande, plus elle limite fortement le courant. On la mesure avec un ohmmètre, en le branchant directement sur le résistor, hors tension et hors circuit.",
    },
    {
      titre: "La loi d'Ohm",
      illustration: "🧮",
      visuel: "U = R × I",
      contenu: [
        "U : tension aux bornes du résistor, en volts (V)",
        "R : résistance du résistor, en ohms (Ω)",
        "I : intensité du courant qui le traverse, en ampères (A)",
        "Formules dérivées : I = U ÷ R et R = U ÷ I",
      ],
      voixOff:
        "La loi d'Ohm relie ces trois grandeurs par la relation U égale R fois I. U est la tension en volts aux bornes du résistor, R sa résistance en ohms, et I l'intensité du courant qui le traverse, en ampères. Cette relation se retourne facilement : I égale U divisé par R, et R égale U divisé par I.",
    },
    {
      titre: "Mesurer U et I dans un circuit",
      illustration: "🔋",
      visuel: "Voltmètre en dérivation • Ampèremètre en série",
      contenu: [
        "Le voltmètre mesure la tension : il se branche en dérivation (en parallèle)",
        "L'ampèremètre mesure l'intensité : il se branche en série, dans le circuit",
        "Bien respecter les bornes + et − des appareils",
        "Toujours vérifier le calibre avant de mesurer",
      ],
      voixOff:
        "Pour mesurer la tension aux bornes d'un résistor, on utilise un voltmètre, branché en dérivation, c'est-à-dire en parallèle du résistor. Pour mesurer l'intensité du courant qui le traverse, on utilise un ampèremètre, branché en série, directement dans le circuit. Il faut toujours respecter les bornes plus et moins des appareils, et vérifier le calibre avant de mesurer.",
    },
    {
      titre: "La caractéristique U = f(I)",
      illustration: "📈",
      visuel: "Droite passant par l'origine",
      contenu: [
        "On mesure plusieurs couples (I, U) pour un même résistor",
        "On place les points sur un graphique U en fonction de I",
        "Pour un résistor, les points sont alignés sur une droite passant par l'origine",
        "Le résistor est un dipôle dit « ohmique » (ou linéaire)",
      ],
      voixOff:
        "Pour vérifier la loi d'Ohm expérimentalement, on mesure plusieurs couples de valeurs intensité-tension pour un même résistor, puis on place ces points sur un graphique représentant U en fonction de I. Pour un résistor, tous les points sont alignés sur une droite qui passe par l'origine : on dit que c'est un dipôle ohmique, ou linéaire.",
    },
    {
      titre: "Lire le coefficient directeur",
      illustration: "📐",
      visuel: "Coefficient directeur de la droite = R",
      contenu: [
        "Sur le graphique U = f(I), la droite a un coefficient directeur",
        "Ce coefficient directeur est égal à la résistance R du résistor",
        "Pour le calculer : R = ΔU ÷ ΔI (variation de U divisée par variation de I)",
        "Plus la droite est pentue (verticale), plus R est grande",
      ],
      voixOff:
        "Sur le graphique de la caractéristique, le coefficient directeur de la droite obtenue est justement égal à la résistance R du résistor. On le calcule en prenant une variation de tension divisée par la variation d'intensité correspondante. Plus la droite est pentue, plus la résistance est grande, car il faut alors plus de tension pour obtenir la même intensité.",
    },
    {
      titre: "Exemple de calcul",
      illustration: "💡",
      visuel: "R = 100 Ω, I = 0,05 A → U = 5 V",
      contenu: [
        "Un résistor de résistance R = 100 Ω est traversé par un courant I = 0,05 A",
        "U = R × I = 100 × 0,05 = 5 V",
        "Si on double l'intensité (I = 0,1 A), la tension double aussi : U = 10 V",
        "La tension est donc proportionnelle à l'intensité",
      ],
      voixOff:
        "Prenons un résistor de cent ohms traversé par un courant de zéro virgule zéro cinq ampère. La tension à ses bornes vaut U égale R fois I, soit cent fois zéro virgule zéro cinq, c'est-à-dire cinq volts. Si l'intensité double, la tension double aussi : elle passe à dix volts. Cela confirme que la tension est proportionnelle à l'intensité pour un résistor donné.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Résistor : s'oppose au passage du courant, protège les composants fragiles",
        "R en ohms (Ω), mesurée à l'ohmmètre",
        "Loi d'Ohm : U = R × I, avec U en V, R en Ω et I en A",
        "Caractéristique U = f(I) : droite passant par l'origine, pente = R",
      ],
      voixOff:
        "Résumons. Le résistor est un composant qui s'oppose au passage du courant, ce qui permet de protéger les composants fragiles d'un circuit. Sa résistance R, en ohms, se mesure à l'ohmmètre. La loi d'Ohm relie tension, résistance et intensité par U égale R fois I. Et la caractéristique U égale f de I d'un résistor est une droite qui passe par l'origine, dont la pente est justement égale à R. Tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "Un résistor s'oppose au passage du courant électrique. Sa résistance R, exprimée en ohms, relie la tension U et l'intensité I par la loi d'Ohm : U = R × I.",
    sections: [
      {
        titre: "Le résistor",
        points: [
          "Composant qui s'oppose au passage du courant électrique",
          "Transforme une partie de l'énergie électrique en chaleur",
          "Sert à protéger d'autres composants (ex. une DEL)",
        ],
      },
      {
        titre: "La résistance électrique",
        points: [
          "Notée R, unité : l'ohm (Ω)",
          "Se mesure à l'ohmmètre, sur le résistor seul, hors tension",
          "Plus R est grande, plus le résistor limite le courant",
        ],
      },
      {
        titre: "La loi d'Ohm",
        points: [
          "U = R × I, avec U en volts (V), R en ohms (Ω), I en ampères (A)",
          "Formules dérivées : I = U ÷ R et R = U ÷ I",
          "Voltmètre en dérivation pour U, ampèremètre en série pour I",
        ],
      },
      {
        titre: "La caractéristique U = f(I)",
        points: [
          "Pour un résistor : droite passant par l'origine (dipôle ohmique)",
          "Le coefficient directeur de la droite est égal à R",
          "R = ΔU ÷ ΔI",
        ],
      },
    ],
    audio:
      "Fiche de révision : résistance et loi d'Ohm. Le résistor est un composant électrique qui s'oppose au passage du courant et transforme une partie de l'énergie électrique en chaleur ; il sert souvent à protéger d'autres composants, comme une diode électroluminescente. Sa résistance, notée R, s'exprime en ohms et se mesure à l'ohmmètre, hors tension. La loi d'Ohm relie la tension U, en volts, la résistance R, en ohms, et l'intensité I, en ampères, par la formule U égale R fois I. On mesure la tension avec un voltmètre branché en dérivation, et l'intensité avec un ampèremètre branché en série. Si l'on trace la caractéristique d'un résistor, c'est-à-dire la tension en fonction de l'intensité, on obtient une droite qui passe par l'origine : le résistor est un dipôle dit ohmique. Le coefficient directeur de cette droite est justement égal à la résistance R du résistor.",
  },
  memoCards: [
    { recto: "Quel est le rôle d'un résistor dans un circuit ?", verso: "Il s'oppose au passage du courant et transforme une partie de l'énergie électrique en chaleur, protégeant ainsi les composants fragiles." },
    { recto: "Unité et instrument de mesure de la résistance ?", verso: "L'ohm (Ω), mesurée avec un ohmmètre, hors tension, sur le résistor seul." },
    { recto: "Énoncé de la loi d'Ohm ?", verso: "U = R × I, avec U en volts, R en ohms, I en ampères." },
    { recto: "Comment brancher un voltmètre ?", verso: "En dérivation (en parallèle) aux bornes du composant dont on mesure la tension." },
    { recto: "Comment brancher un ampèremètre ?", verso: "En série, directement dans le circuit, pour que tout le courant le traverse." },
    { recto: "Forme de la caractéristique U = f(I) d'un résistor ?", verso: "Une droite qui passe par l'origine : le résistor est un dipôle ohmique (linéaire)." },
    { recto: "Que représente le coefficient directeur de la droite U = f(I) ?", verso: "Il est égal à la résistance R du résistor : R = ΔU ÷ ΔI." },
    { recto: "Calculer I à partir de U et R ?", verso: "I = U ÷ R. Exemple : U = 12 V, R = 6 Ω → I = 2 A." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quelle unité s'exprime la résistance électrique ?",
      choix: ["Le volt (V)", "L'ampère (A)", "L'ohm (Ω)", "Le watt (W)"],
      bonneReponse: 2,
      explication: "La résistance électrique se mesure en ohms, symbole Ω.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se branche un ampèremètre dans un circuit ?",
      choix: ["En dérivation", "En série", "Il ne se branche pas", "Aux deux endroits indifféremment"],
      bonneReponse: 1,
      explication: "L'ampèremètre mesure l'intensité qui traverse le circuit : il doit être branché en série.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris la loi d'Ohm avec les unités de chaque grandeur.",
      reponse: "U = R × I, avec U en volts (V), R en ohms (Ω) et I en ampères (A).",
      explication: "C'est la relation centrale du chapitre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Avec quel appareil mesure-t-on directement une résistance ?",
      choix: ["Un voltmètre", "Un ampèremètre", "Un ohmmètre", "Un thermomètre"],
      bonneReponse: 2,
      explication: "L'ohmmètre mesure directement la résistance d'un composant, hors tension.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un résistor de résistance R = 50 Ω est traversé par un courant I = 0,2 A. Calcule la tension U à ses bornes.",
      reponse: "U = R × I = 50 × 0,2 = 10 V",
      explication: "Application directe de la loi d'Ohm U = R × I.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un résistor a une tension de 6 V à ses bornes pour une intensité de 0,3 A. Sa résistance vaut :",
      choix: ["1,8 Ω", "20 Ω", "0,05 Ω", "6,3 Ω"],
      bonneReponse: 1,
      explication: "R = U ÷ I = 6 ÷ 0,3 = 20 Ω.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un résistor de 200 Ω est soumis à une tension de 8 V. Calcule l'intensité du courant qui le traverse.",
      reponse: "I = U ÷ R = 8 ÷ 200 = 0,04 A",
      explication: "On isole I dans la loi d'Ohm : I = U ÷ R.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Sur un graphique U = f(I) d'un résistor, on obtient :",
      choix: [
        "une courbe quelconque",
        "une droite passant par l'origine",
        "une droite horizontale",
        "des points non alignés",
      ],
      bonneReponse: 1,
      explication: "Le résistor est un dipôle ohmique : sa caractéristique est une droite passant par l'origine.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Lors d'une expérience, on mesure U = 3 V pour I = 0,15 A, puis U = 6 V pour I = 0,3 A sur le même résistor. Calcule R à chaque fois et conclus.",
      reponse:
        "1er cas : R = 3 ÷ 0,15 = 20 Ω. 2e cas : R = 6 ÷ 0,3 = 20 Ω. On retrouve la même résistance dans les deux cas : R = 20 Ω, ce qui confirme que U est proportionnelle à I (loi d'Ohm).",
      explication: "Le rapport U/I est constant pour un résistor donné : c'est la définition même de la loi d'Ohm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Sur un graphique U = f(I), une droite passe par les points (0 A ; 0 V) et (0,4 A ; 8 V). Détermine la résistance du résistor étudié.",
      reponse: "R = ΔU ÷ ΔI = (8 − 0) ÷ (0,4 − 0) = 8 ÷ 0,4 = 20 Ω",
      explication: "Le coefficient directeur de la droite U = f(I) est égal à la résistance R.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "On remplace un résistor de 10 Ω par un résistor de 40 Ω dans un circuit, à tension U constante. L'intensité I :",
      choix: ["est multipliée par 4", "est divisée par 4", "reste identique", "est multipliée par 2"],
      bonneReponse: 1,
      explication: "I = U ÷ R : si R est multipliée par 4 à U constante, I est divisée par 4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique pourquoi on place toujours un résistor en série avec une diode électroluminescente (DEL) dans un circuit.",
      reponse:
        "La DEL est un composant fragile qui serait détruite par un courant trop intense. Le résistor, en s'opposant au passage du courant, limite l'intensité à une valeur raisonnable et protège ainsi la DEL.",
      explication: "Le résistor joue ici un rôle de protection en limitant l'intensité dans le circuit.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La loi d'Ohm s'écrit :",
      choix: ["U = R + I", "U = R × I", "U = R ÷ I", "U = R − I"],
      bonneReponse: 1,
      explication: "La loi d'Ohm relie tension, résistance et intensité par U = R × I.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment se branche un voltmètre pour mesurer la tension aux bornes d'un résistor ?",
      reponse: "En dérivation (en parallèle) aux bornes du résistor.",
      explication: "Contrairement à l'ampèremètre (série), le voltmètre se branche toujours en dérivation.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un résistor de 25 Ω est traversé par un courant de 0,4 A. Calcule la tension à ses bornes.",
      reponse: "U = R × I = 25 × 0,4 = 10 V",
      explication: "Application directe de U = R × I.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La caractéristique U = f(I) d'un résistor est une droite passant par l'origine. On dit que c'est un dipôle :",
      choix: ["ohmique", "magnétique", "isolant", "capacitif"],
      bonneReponse: 0,
      explication: "Un résistor qui vérifie la loi d'Ohm est appelé dipôle ohmique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un résistor a une tension de 15 V pour une intensité de 0,5 A. Calcule sa résistance.",
      reponse: "R = U ÷ I = 15 ÷ 0,5 = 30 Ω",
      explication: "On isole R dans la loi d'Ohm : R = U ÷ I.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Résistance et loi d'Ohm",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le rôle principal d'un résistor est de :",
          choix: [
            "produire du courant",
            "s'opposer au passage du courant",
            "mesurer une tension",
            "stocker de l'énergie chimique",
          ],
          bonneReponse: 1,
          explication: "Le résistor s'oppose au passage du courant électrique dans un circuit.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un résistor de résistance R = 15 Ω est traversé par I = 0,4 A. Calcule la tension U à ses bornes.",
          reponse: "U = R × I = 15 × 0,4 = 6 V",
          explication: "Application directe de la loi d'Ohm.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un résistor a U = 9 V et I = 0,3 A. Sa résistance vaut :",
          choix: ["2,7 Ω", "30 Ω", "0,033 Ω", "9,3 Ω"],
          bonneReponse: 1,
          explication: "R = U ÷ I = 9 ÷ 0,3 = 30 Ω.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un résistor de 40 Ω est soumis à une tension de 12 V. Calcule l'intensité qui le traverse.",
          reponse: "I = U ÷ R = 12 ÷ 40 = 0,3 A",
          explication: "On isole I dans la loi d'Ohm : I = U ÷ R.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Que représente le coefficient directeur de la droite U = f(I) tracée pour un résistor ?",
          reponse: "Il est égal à la valeur de la résistance R du résistor étudié.",
          explication: "Pente de la droite = ΔU/ΔI = R.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux résistors, l'un de 10 Ω, l'autre de 100 Ω, sont soumis à la même tension U = 5 V. Calcule l'intensité traversant chacun d'eux et compare.",
          reponse:
            "Résistor 10 Ω : I = 5 ÷ 10 = 0,5 A. Résistor 100 Ω : I = 5 ÷ 100 = 0,05 A. Le résistor de plus faible résistance est traversé par une intensité dix fois plus grande, car I = U ÷ R.",
          explication: "À tension égale, plus la résistance est grande, plus l'intensité qui traverse le résistor est faible.",
        },
      ],
    },
    {
      titre: "Examen 2 — Résistance et loi d'Ohm",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'ampèremètre mesure :",
          choix: ["la tension", "la résistance", "l'intensité", "la masse"],
          bonneReponse: 2,
          explication: "L'ampèremètre mesure l'intensité du courant, en ampères.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un résistor de R = 60 Ω est traversé par I = 0,1 A. Calcule U.",
          reponse: "U = R × I = 60 × 0,1 = 6 V",
          explication: "Application directe de U = R × I.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pour mesurer une résistance à l'ohmmètre, il faut :",
          choix: [
            "que le circuit soit sous tension",
            "que le résistor soit isolé du circuit, hors tension",
            "brancher l'ohmmètre en série dans le circuit sous tension",
            "chauffer le résistor avant la mesure",
          ],
          bonneReponse: 1,
          explication: "L'ohmmètre se branche sur le composant seul, débranché du circuit et hors tension.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un résistor a U = 4 V pour I = 0,08 A. Calcule sa résistance R.",
          reponse: "R = U ÷ I = 4 ÷ 0,08 = 50 Ω",
          explication: "On isole R dans la loi d'Ohm : R = U ÷ I.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi la caractéristique U = f(I) d'un résistor passe par l'origine du graphique.",
          reponse: "Parce que lorsqu'aucun courant ne traverse le résistor (I = 0), la tension à ses bornes est nulle (U = 0) : le point (0 ; 0) appartient donc à la droite.",
          explication: "S'il n'y a pas de courant, il n'y a pas de tension aux bornes du résistor, d'où le passage par l'origine.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un élève trace la caractéristique d'un résistor et trouve les points (0,1 A ; 2 V) et (0,3 A ; 6 V). Vérifie que ces points sont cohérents avec la loi d'Ohm et détermine R.",
          reponse:
            "Pour le premier point : R = 2 ÷ 0,1 = 20 Ω. Pour le second : R = 6 ÷ 0,3 = 20 Ω. Les deux points donnent la même résistance, ce qui est cohérent avec la loi d'Ohm : R = 20 Ω.",
          explication: "Le rapport U/I doit être constant pour un résistor obéissant à la loi d'Ohm.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le résistor s'oppose au passage du courant électrique et protège les composants fragiles d'un circuit.",
    "La résistance R s'exprime en ohms (Ω) et se mesure à l'ohmmètre, sur le composant seul, hors tension.",
    "Loi d'Ohm : U = R × I, avec U en volts, R en ohms, I en ampères ; formules dérivées I = U ÷ R et R = U ÷ I.",
    "Le voltmètre se branche en dérivation, l'ampèremètre se branche en série.",
    "La caractéristique U = f(I) d'un résistor est une droite passant par l'origine : c'est un dipôle ohmique.",
    "Le coefficient directeur de la droite U = f(I) est égal à la résistance R du résistor.",
  ],
},
{
  slug: "signaux-information",
  titre: "Signaux et information",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Comprendre comment une information est codée, transmise et reçue, distinguer signal analogique et signal numérique, et connaître le codage binaire utilisé par les appareils numériques.",
  objectifs: [
    "Décrire la chaîne de transmission d'une information : émetteur, canal, récepteur",
    "Distinguer signal analogique et signal numérique",
    "Comprendre le codage binaire (bits, 0 et 1) utilisé par le numérique",
    "Connaître différents supports de transmission (câble, fibre optique, ondes)",
    "Relier vitesse de propagation, distance et durée de transmission",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une information ?",
      illustration: "📡",
      visuel: "Émetteur → Signal → Récepteur",
      contenu: [
        "Une information est un message que l'on veut transmettre (son, image, texte...)",
        "Elle est transportée par un signal, physique et mesurable",
        "Trois éléments : un émetteur, un canal de transmission, un récepteur",
        "Exemple : une voix (émetteur) → un câble (canal) → un haut-parleur (récepteur)",
      ],
      voixOff:
        "Une information est un message que l'on souhaite transmettre : un son, une image, un texte. Pour voyager, elle est portée par un signal, une grandeur physique mesurable. Toute chaîne de transmission comporte trois éléments : un émetteur qui produit le signal, un canal de transmission qui le transporte, et un récepteur qui le reçoit. Par exemple, une voix est l'émetteur, un câble le canal, et un haut-parleur le récepteur.",
    },
    {
      titre: "Signal analogique",
      illustration: "〰️",
      visuel: "Variation continue dans le temps",
      contenu: [
        "Un signal analogique varie de façon continue au cours du temps",
        "Il peut prendre une infinité de valeurs possibles",
        "Exemple : le son capté par un microphone classique",
        "Il est sensible aux parasites qui peuvent le déformer",
      ],
      voixOff:
        "Un signal analogique est un signal qui varie de façon continue au cours du temps : il peut prendre une infinité de valeurs différentes, comme le son capté par un microphone classique. Son inconvénient majeur, c'est sa sensibilité aux parasites : le moindre bruit électrique peut le déformer et l'information transmise devient alors moins fidèle.",
    },
    {
      titre: "Signal numérique",
      illustration: "🔢",
      visuel: "Suite de valeurs 0 et 1",
      contenu: [
        "Un signal numérique ne prend que deux valeurs possibles : 0 ou 1",
        "Ces deux valeurs sont appelées des bits (binary digit)",
        "Il est beaucoup plus résistant aux parasites que le signal analogique",
        "Les ordinateurs, smartphones et appareils modernes utilisent le numérique",
      ],
      voixOff:
        "Un signal numérique, lui, ne prend que deux valeurs possibles : zéro ou un. Chacune de ces valeurs est appelée un bit, pour binary digit. Ce type de signal est beaucoup plus résistant aux parasites qu'un signal analogique, car il est plus facile de distinguer un zéro d'un un que de reconnaître une valeur précise parmi une infinité. C'est pourquoi les ordinateurs, les smartphones et la plupart des appareils modernes utilisent le numérique.",
    },
    {
      titre: "Le codage binaire",
      illustration: "💻",
      visuel: "8 bits = 1 octet",
      contenu: [
        "Toute information numérique est codée en une suite de 0 et de 1",
        "Un bit est la plus petite unité d'information (0 ou 1)",
        "Un octet regroupe 8 bits (ex. 01001010)",
        "Avec 8 bits, on peut coder 256 valeurs différentes (2⁸ = 256)",
      ],
      voixOff:
        "Toute information numérique, qu'il s'agisse d'un texte, d'une image ou d'un son, est finalement codée sous la forme d'une longue suite de zéros et de uns. Le bit est la plus petite unité d'information possible. On regroupe généralement les bits par paquets de huit, appelés octets. Avec huit bits, on peut coder deux cent cinquante-six valeurs différentes, car deux puissance huit égale deux cent cinquante-six.",
    },
    {
      titre: "Convertir le monde réel en numérique",
      illustration: "🎙️",
      visuel: "Analogique → (échantillonnage) → Numérique",
      contenu: [
        "Un capteur transforme une grandeur physique en signal électrique analogique",
        "Un convertisseur analogique-numérique échantillonne ce signal",
        "Il transforme les valeurs mesurées en une suite de 0 et de 1",
        "Exemple : un micro capte un son (analogique) puis une carte son le numérise",
      ],
      voixOff:
        "Pour transformer un phénomène du monde réel en information numérique, on utilise d'abord un capteur, qui produit un signal électrique analogique. Ce signal est ensuite envoyé à un convertisseur analogique-numérique, qui l'échantillonne, c'est-à-dire qu'il prélève des valeurs à intervalles réguliers pour les transformer en une suite de zéros et de uns. C'est exactement ce que fait une carte son lorsqu'un microphone capte ta voix.",
    },
    {
      titre: "Les supports de transmission",
      illustration: "🌐",
      visuel: "Câble • Fibre optique • Ondes",
      contenu: [
        "Câble électrique : le signal est transporté par un courant électrique",
        "Fibre optique : le signal est transporté par de la lumière",
        "Ondes électromagnétiques : transmission sans fil (Wi-Fi, 4G/5G, satellite)",
        "Chaque support a une vitesse de propagation et une portée différentes",
      ],
      voixOff:
        "L'information numérique peut voyager par différents supports. Dans un câble électrique, elle est transportée par un courant électrique. Dans une fibre optique, elle est transportée par de la lumière, ce qui permet des débits très élevés. Et sans fil, elle voyage sous forme d'ondes électromagnétiques, comme le Wi-Fi, la 4G, la 5G, ou les liaisons satellites. Chaque support a sa propre vitesse de propagation et sa propre portée.",
    },
    {
      titre: "Vitesse de propagation et durée",
      illustration: "⏱️",
      visuel: "durée = distance ÷ vitesse",
      contenu: [
        "Dans le vide ou l'air, les ondes se propagent à environ 300 000 km/s",
        "Dans un câble ou une fibre optique, le signal est un peu plus lent",
        "La durée de transmission dépend de la distance à parcourir",
        "Formule : durée (s) = distance (m) ÷ vitesse (m/s)",
      ],
      voixOff:
        "Les ondes électromagnétiques, comme la lumière, se propagent dans le vide ou dans l'air à environ trois cent mille kilomètres par seconde. Dans un câble ou une fibre optique, le signal est un peu plus lent. La durée nécessaire pour transmettre un signal dépend de la distance à parcourir : elle se calcule simplement en divisant la distance par la vitesse de propagation.",
    },
    {
      titre: "Exemple de calcul",
      illustration: "🛰️",
      visuel: "36 000 km ÷ 300 000 km/s = 0,12 s",
      contenu: [
        "Un signal satellite doit parcourir 36 000 km jusqu'à un satellite géostationnaire",
        "Vitesse de propagation ≈ 300 000 km/s",
        "durée = distance ÷ vitesse = 36 000 ÷ 300 000 = 0,12 s",
        "C'est ce petit délai qui explique le léger décalage lors d'un appel satellite",
      ],
      voixOff:
        "Prenons l'exemple d'un signal envoyé vers un satellite géostationnaire, situé à trente-six mille kilomètres. À une vitesse d'environ trois cent mille kilomètres par seconde, la durée de trajet vaut trente-six mille divisé par trois cent mille, soit zéro virgule douze seconde. C'est ce petit délai, à l'aller comme au retour, qui explique le léger décalage que l'on perçoit parfois lors d'un appel téléphonique par satellite.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Chaîne de transmission : émetteur → canal → récepteur",
        "Analogique : variation continue, sensible aux parasites",
        "Numérique : suite de bits (0 et 1), résistant aux parasites",
        "durée de transmission = distance ÷ vitesse de propagation",
      ],
      voixOff:
        "Résumons. Toute transmission d'information suit une chaîne : un émetteur, un canal de transmission, un récepteur. Un signal analogique varie de façon continue et reste sensible aux parasites, alors qu'un signal numérique, codé en bits de zéros et de uns, y résiste beaucoup mieux. L'information peut voyager par câble, fibre optique ou ondes, et la durée de transmission se calcule en divisant la distance par la vitesse de propagation. Tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "Une information est transportée par un signal, analogique ou numérique, le long d'une chaîne de transmission : émetteur, canal, récepteur. Le numérique code l'information en bits (0 et 1).",
    sections: [
      {
        titre: "La chaîne de transmission",
        points: [
          "Émetteur : produit le signal porteur de l'information",
          "Canal de transmission : transporte le signal (câble, fibre, ondes)",
          "Récepteur : reçoit et restitue l'information",
        ],
      },
      {
        titre: "Signal analogique vs signal numérique",
        points: [
          "Analogique : variation continue, infinité de valeurs, sensible aux parasites",
          "Numérique : seulement deux valeurs (0 et 1), résistant aux parasites",
          "Un bit = plus petite unité d'information ; un octet = 8 bits",
        ],
      },
      {
        titre: "Supports de transmission",
        points: [
          "Câble électrique : transport par courant électrique",
          "Fibre optique : transport par la lumière, débits très élevés",
          "Ondes électromagnétiques : transmission sans fil (Wi-Fi, 4G/5G, satellite)",
        ],
      },
      {
        titre: "Vitesse et durée de transmission",
        points: [
          "Les ondes se propagent à environ 300 000 km/s dans le vide/l'air",
          "durée (s) = distance (m) ÷ vitesse (m/s)",
          "Plus la distance est grande, plus la durée de transmission est longue",
        ],
      },
    ],
    audio:
      "Fiche de révision : signaux et information. Une information est transportée par un signal, le long d'une chaîne de transmission comprenant un émetteur, un canal de transmission et un récepteur. On distingue le signal analogique, qui varie de façon continue et prend une infinité de valeurs, mais qui reste sensible aux parasites, du signal numérique, qui ne prend que deux valeurs, zéro et un, appelées bits, et qui résiste beaucoup mieux aux parasites. Un octet regroupe huit bits. L'information peut être transportée par différents supports : un câble électrique, une fibre optique qui utilise la lumière, ou des ondes électromagnétiques pour les transmissions sans fil comme le Wi-Fi ou la téléphonie mobile. Les ondes se propagent dans le vide ou dans l'air à environ trois cent mille kilomètres par seconde. La durée de transmission d'un signal se calcule en divisant la distance parcourue par la vitesse de propagation.",
  },
  memoCards: [
    { recto: "Quels sont les trois éléments d'une chaîne de transmission ?", verso: "L'émetteur, le canal de transmission, le récepteur." },
    { recto: "Qu'est-ce qu'un signal analogique ?", verso: "Un signal qui varie de façon continue et peut prendre une infinité de valeurs ; sensible aux parasites." },
    { recto: "Qu'est-ce qu'un signal numérique ?", verso: "Un signal qui ne prend que deux valeurs, 0 ou 1 (bits) ; résistant aux parasites." },
    { recto: "Qu'est-ce qu'un bit et un octet ?", verso: "Le bit est la plus petite unité d'information (0 ou 1). Un octet regroupe 8 bits." },
    { recto: "Cite trois supports de transmission de l'information.", verso: "Le câble électrique, la fibre optique (lumière), les ondes électromagnétiques (sans fil)." },
    { recto: "Vitesse de propagation des ondes dans le vide/l'air ?", verso: "Environ 300 000 km/s (soit 3 × 10⁸ m/s)." },
    { recto: "Formule reliant durée, distance et vitesse de propagation ?", verso: "durée (s) = distance (m) ÷ vitesse (m/s)." },
    { recto: "Pourquoi préfère-t-on le numérique à l'analogique aujourd'hui ?", verso: "Car le signal numérique résiste beaucoup mieux aux parasites, ce qui limite les pertes d'information." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Les trois éléments d'une chaîne de transmission sont :",
      choix: [
        "émetteur, canal, récepteur",
        "capteur, câble, ampoule",
        "signal, bit, octet",
        "microphone, satellite, antenne",
      ],
      bonneReponse: 0,
      explication: "Toute chaîne de transmission comporte un émetteur, un canal de transmission et un récepteur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un signal numérique ne peut prendre que :",
      choix: ["une infinité de valeurs", "deux valeurs (0 et 1)", "dix valeurs", "aucune valeur"],
      bonneReponse: 1,
      explication: "Un signal numérique est codé en bits, qui valent 0 ou 1.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Combien de bits contient un octet ?",
      reponse: "Un octet contient 8 bits.",
      explication: "C'est la définition de l'octet, unité de base en informatique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel signal est le plus sensible aux parasites ?",
      choix: ["Le signal numérique", "Le signal analogique", "Aucun des deux", "Les deux de la même façon"],
      bonneReponse: 1,
      explication: "Le signal analogique, qui prend une infinité de valeurs, est plus facilement déformé par les parasites que le signal numérique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un signal doit parcourir 1500 m dans un câble à une vitesse de 200 000 000 m/s. Calcule la durée de transmission.",
      reponse: "durée = distance ÷ vitesse = 1500 ÷ 200 000 000 = 0,0000075 s = 7,5 µs",
      explication: "On applique directement durée = distance ÷ vitesse.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La fibre optique transporte l'information sous forme de :",
      choix: ["courant électrique", "lumière", "ondes sonores", "champ magnétique"],
      bonneReponse: 1,
      explication: "Dans une fibre optique, l'information est codée par des impulsions lumineuses.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Avec 8 bits (1 octet), combien de valeurs différentes peut-on coder ? Justifie le calcul.",
      reponse: "2⁸ = 256 valeurs différentes, car chaque bit peut prendre 2 valeurs (0 ou 1) et il y a 8 bits.",
      explication: "Le nombre de combinaisons possibles avec n bits est 2ⁿ.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un satellite est à 30 000 km. À la vitesse de 300 000 km/s, la durée du trajet du signal est de :",
      choix: ["0,1 s", "1 s", "10 s", "0,01 s"],
      bonneReponse: 0,
      explication: "durée = 30 000 ÷ 300 000 = 0,1 s.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un appel téléphonique passe par un satellite géostationnaire situé à 36 000 km. Calcule la durée d'un aller-retour du signal (émission puis réponse), sachant que la vitesse de propagation est d'environ 300 000 km/s.",
      reponse:
        "Aller : 36 000 ÷ 300 000 = 0,12 s. Aller-retour : 0,12 × 2 = 0,24 s.",
      explication: "Il faut compter le trajet aller (vers le satellite puis vers le correspondant) et le trajet retour pour la réponse.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique pourquoi convertir un signal analogique en signal numérique permet de mieux conserver la qualité d'une information transmise sur une longue distance.",
      reponse:
        "Un signal numérique ne prend que deux valeurs (0 ou 1), ce qui permet de facilement distinguer ces valeurs même en présence de parasites qui viendraient légèrement modifier le signal. Un signal analogique, lui, peut prendre une infinité de valeurs : le moindre parasite modifie sa valeur exacte, et l'information est alors dégradée de façon irréversible.",
      explication: "La robustesse du numérique face aux parasites est la raison principale de son adoption généralisée pour les transmissions longue distance.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un signal parcourt une fibre optique de 2000 km à une vitesse d'environ 200 000 km/s. La durée du trajet est d'environ :",
      choix: ["0,01 s", "0,1 s", "1 s", "10 s"],
      bonneReponse: 0,
      explication: "durée = 2000 ÷ 200 000 = 0,01 s.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un capteur de température mesure une grandeur physique continue. Décris les étapes qui permettent d'obtenir une suite de bits représentant cette température, à partir de la grandeur mesurée.",
      reponse:
        "Le capteur transforme la température en un signal électrique analogique. Ce signal analogique est ensuite envoyé à un convertisseur analogique-numérique qui l'échantillonne (prélève des valeurs à intervalles réguliers) et code chaque valeur mesurée sous la forme d'une suite de bits (0 et 1).",
      explication: "C'est la chaîne classique de numérisation : capteur (analogique) → conversion analogique-numérique → signal numérique.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le bit est :",
      choix: ["la plus petite unité d'information (0 ou 1)", "un groupe de 8 valeurs", "une unité de vitesse", "une unité de distance"],
      bonneReponse: 0,
      explication: "Le bit (binary digit) vaut 0 ou 1 : c'est la plus petite unité d'information numérique.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les trois éléments d'une chaîne de transmission d'information.",
      reponse: "L'émetteur, le canal de transmission, le récepteur.",
      explication: "C'est le schéma de base de toute transmission d'information.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un signal parcourt 900 m à une vitesse de 300 000 000 m/s. Calcule la durée du trajet.",
      reponse: "durée = 900 ÷ 300 000 000 = 0,000003 s = 3 µs",
      explication: "Application directe de durée = distance ÷ vitesse.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel support de transmission utilise la lumière pour transporter l'information ?",
      choix: ["Le câble électrique", "La fibre optique", "Les ondes radio", "Le papier"],
      bonneReponse: 1,
      explication: "La fibre optique transporte l'information sous forme d'impulsions lumineuses.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi le signal numérique est préféré au signal analogique pour les transmissions modernes.",
      reponse:
        "Parce qu'il ne prend que deux valeurs (0 ou 1), ce qui le rend beaucoup plus résistant aux parasites qu'un signal analogique, qui peut prendre une infinité de valeurs et se dégrader facilement.",
      explication: "C'est la raison principale de la généralisation du numérique dans les technologies de communication.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Signaux et information",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un signal analogique :",
          choix: [
            "ne prend que deux valeurs",
            "varie de façon continue avec une infinité de valeurs possibles",
            "n'existe pas dans la nature",
            "est toujours numérique",
          ],
          bonneReponse: 1,
          explication: "Le signal analogique varie continûment et peut prendre une infinité de valeurs.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la formule permettant de calculer la durée de transmission d'un signal à partir de la distance et de la vitesse.",
          reponse: "durée (s) = distance (m) ÷ vitesse (m/s)",
          explication: "C'est la relation de base entre distance, vitesse et durée.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un octet est composé de :",
          choix: ["2 bits", "4 bits", "8 bits", "16 bits"],
          bonneReponse: 2,
          explication: "Un octet regroupe 8 bits.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un signal parcourt 4500 km à une vitesse de 300 000 km/s. Calcule la durée du trajet.",
          reponse: "durée = 4500 ÷ 300 000 = 0,015 s",
          explication: "Application directe de durée = distance ÷ vitesse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux supports de transmission de l'information et précise ce qui les transporte physiquement.",
          reponse:
            "Le câble électrique transporte l'information sous forme de courant électrique. La fibre optique la transporte sous forme de lumière. (On peut aussi citer les ondes électromagnétiques pour les transmissions sans fil.)",
          explication: "Chaque support utilise un phénomène physique différent pour transporter le signal.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un signal GPS parcourt 20 000 km entre un satellite et un récepteur au sol, à une vitesse d'environ 300 000 km/s. Calcule la durée du trajet, et explique pourquoi cette durée doit être prise en compte pour un calcul de position précis.",
          reponse:
            "durée = 20 000 ÷ 300 000 ≈ 0,067 s. Ce délai, bien que très court, doit être pris en compte car le GPS calcule une position en mesurant précisément le temps de trajet du signal entre plusieurs satellites et le récepteur ; une petite erreur de temps entraînerait une erreur de position importante.",
          explication: "Le GPS repose sur une mesure très précise des durées de propagation des signaux, converties en distances grâce à la vitesse de propagation connue.",
        },
      ],
    },
    {
      titre: "Examen 2 — Signaux et information",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un signal numérique est codé à l'aide de :",
          choix: ["ondes sonores uniquement", "bits (0 et 1)", "couleurs", "unités de masse"],
          bonneReponse: 1,
          explication: "Le codage numérique utilise des suites de bits, valant 0 ou 1.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel est le rôle du récepteur dans une chaîne de transmission ?",
          reponse: "Le récepteur reçoit le signal transmis et restitue l'information (par exemple, un haut-parleur restitue le son).",
          explication: "Le récepteur est le dernier maillon de la chaîne de transmission.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Avec 8 bits, le nombre de valeurs différentes que l'on peut coder est :",
          choix: ["8", "16", "128", "256"],
          bonneReponse: 3,
          explication: "2⁸ = 256 valeurs possibles avec 8 bits.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un signal parcourt 600 000 m à une vitesse de 200 000 000 m/s dans une fibre optique. Calcule la durée du trajet.",
          reponse: "durée = 600 000 ÷ 200 000 000 = 0,003 s",
          explication: "Application directe de durée = distance ÷ vitesse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi dit-on que le numérique est plus robuste face aux parasites que l'analogique ?",
          reponse:
            "Parce qu'un signal numérique ne prend que deux valeurs (0 ou 1), bien distinctes, alors qu'un signal analogique peut prendre une infinité de valeurs proches les unes des autres, plus facilement confondues en cas de parasite.",
          explication: "La distinction binaire (0/1) tolère de petites perturbations sans changer l'interprétation du signal.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux techniciens comparent un câble électrique et une fibre optique pour relier deux villes distantes de 500 km. Sachant que le signal se propage à 200 000 km/s dans le câble et à 200 000 km/s également dans la fibre, mais que la fibre a un débit d'information beaucoup plus élevé, explique la différence entre durée de propagation et débit d'information.",
          reponse:
            "La durée de propagation (ici 500 ÷ 200 000 = 0,0025 s dans les deux cas) correspond au temps que met le signal pour parcourir la distance ; elle est identique pour les deux supports dans cet exemple. Le débit d'information, lui, correspond à la quantité de bits transmis par seconde : la fibre optique peut transmettre beaucoup plus de bits par seconde que le câble électrique, ce qui la rend plus performante pour transporter de grandes quantités de données, même si la vitesse de propagation du signal est la même.",
          explication: "Il ne faut pas confondre la vitesse de propagation du signal (durée de trajet) et le débit (quantité d'information transmise par seconde).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Toute transmission d'information suit une chaîne : émetteur → canal de transmission → récepteur.",
    "Le signal analogique varie de façon continue (infinité de valeurs) et est sensible aux parasites.",
    "Le signal numérique ne prend que deux valeurs, 0 et 1 (bits), et résiste beaucoup mieux aux parasites ; un octet = 8 bits.",
    "L'information peut être transportée par câble électrique, fibre optique (lumière) ou ondes électromagnétiques (sans fil).",
    "Les ondes se propagent à environ 300 000 km/s dans le vide ou l'air ; durée (s) = distance (m) ÷ vitesse (m/s).",
    "Numériser un signal analogique passe par un capteur puis un convertisseur analogique-numérique qui échantillonne le signal.",
  ],
},
{
  slug: "atomes-molecules",
  titre: "Atomes et molécules",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Comprendre que la matière est constituée d'atomes et de molécules, savoir lire et interpréter une formule chimique, et expliquer les états de la matière et les transformations chimiques avec le modèle moléculaire.",
  objectifs: [
    "Savoir que la matière est constituée d'atomes, briques élémentaires",
    "Connaître les symboles des atomes courants : H, O, C, N, Fe",
    "Lire et interpréter une formule chimique : H2O, CO2, O2, CH4",
    "Décrire les états de la matière avec le modèle moléculaire",
    "Comprendre qu'une transformation chimique est un réarrangement d'atomes qui conserve la masse",
  ],
  slides: [
    {
      titre: "De quoi est faite la matière ?",
      illustration: "🔬",
      visuel: "Atome = brique de la matière",
      contenu: [
        "Toute la matière est constituée d'atomes",
        "Un atome est extrêmement petit : environ 0,000 000 000 1 m (10⁻¹⁰ m)",
        "Il existe une centaine de sortes d'atomes différents",
        "On les représente par des sphères de couleurs différentes",
      ],
      voixOff:
        "Toute la matière qui nous entoure, l'eau, l'air, le fer, ton propre corps, est constituée de briques minuscules : les atomes. Un atome est extrêmement petit, environ un dixième de milliardième de mètre. Il existe une centaine de sortes d'atomes, que l'on représente souvent par des sphères de couleurs différentes.",
    },
    {
      titre: "Les symboles des atomes",
      illustration: "🔤",
      visuel: "H • O • C • N • Fe",
      contenu: [
        "Chaque sorte d'atome a un symbole : 1 ou 2 lettres",
        "H : hydrogène, O : oxygène, C : carbone, N : azote",
        "Fe : fer, Cu : cuivre",
        "1ère lettre en MAJUSCULE, 2ème en minuscule",
      ],
      voixOff:
        "Chaque sorte d'atome possède un symbole, formé d'une ou deux lettres. H pour l'hydrogène, O pour l'oxygène, C pour le carbone, N pour l'azote, et Fe pour le fer. Attention à l'écriture : la première lettre est toujours une majuscule, et la deuxième, s'il y en a une, toujours une minuscule.",
    },
    {
      titre: "Les molécules",
      illustration: "🧩",
      visuel: "Molécule = assemblage d'atomes",
      contenu: [
        "Une molécule est un assemblage d'atomes liés entre eux",
        "La molécule d'eau : 2 atomes d'hydrogène + 1 atome d'oxygène",
        "Deux molécules identiques ont exactement les mêmes atomes",
        "Certains corps, comme le fer, sont faits d'atomes non assemblés en molécules",
      ],
      voixOff:
        "Les atomes s'assemblent souvent pour former des molécules. Une molécule d'eau, par exemple, est un assemblage de deux atomes d'hydrogène et d'un atome d'oxygène. Toutes les molécules d'eau du monde sont identiques ! Certains corps, comme le fer, sont constitués directement d'atomes, sans former de molécules.",
    },
    {
      titre: "Les formules chimiques",
      illustration: "✍️",
      visuel: "H2O • CO2 • O2 • CH4",
      contenu: [
        "Chaque molécule s'écrit avec une formule chimique",
        "Eau : H2O — Dioxyde de carbone : CO2",
        "Dioxygène : O2 — Méthane : CH4",
        "Diazote : N2 (le gaz le plus abondant de l'air)",
      ],
      voixOff:
        "Chaque molécule possède une formule chimique, qui indique sa composition. L'eau s'écrit H deux O. Le dioxyde de carbone, C O deux. Le dioxygène, que nous respirons, O deux. Le méthane, le gaz naturel, C H quatre. Et le diazote, le gaz le plus abondant de l'air, N deux.",
    },
    {
      titre: "Interpréter une formule",
      illustration: "🔍",
      visuel: "CO2 = 1 C + 2 O",
      contenu: [
        "Le chiffre en indice (en bas à droite) compte les atomes du symbole qui le précède",
        "Pas de chiffre = 1 seul atome",
        "CO2 : 1 atome de carbone et 2 atomes d'oxygène",
        "CH4 : 1 atome de carbone et 4 atomes d'hydrogène → 5 atomes en tout",
      ],
      voixOff:
        "Pour lire une formule, on regarde les indices : le petit chiffre en bas à droite d'un symbole indique le nombre d'atomes de cette sorte. S'il n'y a pas de chiffre, il n'y a qu'un seul atome. Ainsi, C O deux contient un atome de carbone et deux atomes d'oxygène. Et C H quatre contient un atome de carbone et quatre atomes d'hydrogène, soit cinq atomes en tout.",
    },
    {
      titre: "Le modèle moléculaire des états",
      illustration: "🧊",
      visuel: "Solide • Liquide • Gaz",
      contenu: [
        "Solide : molécules serrées, ordonnées, qui vibrent sur place",
        "Liquide : molécules en contact mais désordonnées, elles glissent les unes sur les autres",
        "Gaz : molécules dispersées, très agitées, avec du vide entre elles",
        "C'est pourquoi un gaz est compressible, pas un liquide",
      ],
      voixOff:
        "Le modèle moléculaire explique les états de la matière. Dans un solide, les molécules sont serrées, bien ordonnées, et vibrent sur place. Dans un liquide, elles restent en contact mais sont désordonnées et glissent les unes sur les autres. Dans un gaz, elles sont dispersées, très agitées, avec beaucoup de vide entre elles : c'est pour cela qu'on peut comprimer un gaz, mais pas un liquide.",
    },
    {
      titre: "Transformation physique ou chimique ?",
      illustration: "⚗️",
      visuel: "Molécules conservées ou transformées ?",
      contenu: [
        "Transformation physique (ex : fusion de la glace) : les molécules ne changent pas, seule leur disposition change",
        "Transformation chimique (ex : combustion) : des molécules disparaissent, de nouvelles apparaissent",
        "Réactifs = espèces consommées / Produits = espèces formées",
      ],
      voixOff:
        "Il faut bien distinguer deux types de transformations. Dans une transformation physique, comme la fonte d'un glaçon, les molécules d'eau restent les mêmes : seule leur disposition change. Dans une transformation chimique, comme une combustion, des molécules disparaissent, les réactifs, et de nouvelles molécules apparaissent, les produits.",
    },
    {
      titre: "Un réarrangement d'atomes",
      illustration: "🔥",
      visuel: "C + O2 → CO2",
      contenu: [
        "Lors d'une transformation chimique, les atomes se réarrangent",
        "Combustion du carbone : C + O2 → CO2",
        "Aucun atome n'est créé, aucun n'est détruit",
        "On retrouve les mêmes atomes avant et après : 1 C et 2 O",
      ],
      voixOff:
        "Lors d'une transformation chimique, les atomes des réactifs se détachent puis se réassemblent autrement : c'est un réarrangement d'atomes. Prenons la combustion du carbone : un atome de carbone réagit avec une molécule de dioxygène pour former une molécule de dioxyde de carbone. Avant comme après, on compte un atome de carbone et deux atomes d'oxygène : aucun atome n'est créé ni détruit.",
    },
    {
      titre: "La conservation de la masse",
      illustration: "⚖️",
      visuel: "masse des réactifs = masse des produits",
      contenu: [
        "Les atomes se conservent → la masse se conserve",
        "Exemple : 12 g de carbone + 32 g de dioxygène → 44 g de dioxyde de carbone",
        "C'est la loi de Lavoisier : « Rien ne se perd, rien ne se crée, tout se transforme »",
      ],
      voixOff:
        "Puisque les atomes se conservent, la masse totale se conserve aussi lors d'une transformation chimique. Par exemple, douze grammes de carbone qui brûlent dans trente-deux grammes de dioxygène donnent exactement quarante-quatre grammes de dioxyde de carbone. C'est la célèbre loi de Lavoisier : rien ne se perd, rien ne se crée, tout se transforme.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "La matière est faite d'atomes (H, O, C, N, Fe...)",
        "Une molécule = assemblage d'atomes, décrite par sa formule (H2O, CO2, O2, CH4)",
        "L'indice compte les atomes du symbole qui le précède",
        "Transformation chimique = réarrangement d'atomes → conservation de la masse",
      ],
      voixOff:
        "Résumons. La matière est constituée d'atomes, désignés par des symboles comme H, O, C, N ou Fe. Les atomes s'assemblent en molécules, décrites par des formules chimiques comme H deux O ou C O deux, où l'indice compte les atomes. Le modèle moléculaire explique les états de la matière par la disposition et l'agitation des molécules. Enfin, une transformation chimique est un réarrangement d'atomes : les atomes se conservent, donc la masse se conserve. Bravo, tu maîtrises maintenant les atomes et les molécules !",
    },
  ],
  fiche: {
    intro:
      "La matière est constituée d'atomes, qui s'assemblent en molécules décrites par des formules chimiques. Ce modèle explique les états de la matière et les transformations chimiques.",
    sections: [
      {
        titre: "Les atomes",
        points: [
          "Briques élémentaires de la matière, extrêmement petits (≈ 10⁻¹⁰ m)",
          "Chaque sorte d'atome a un symbole : H (hydrogène), O (oxygène), C (carbone), N (azote), Fe (fer)",
          "Écriture : 1ère lettre majuscule, 2ème lettre minuscule (Fe, Cu)",
        ],
      },
      {
        titre: "Les molécules et leurs formules",
        points: [
          "Une molécule est un assemblage d'atomes liés entre eux",
          "Formules à connaître : eau H2O, dioxyde de carbone CO2, dioxygène O2, diazote N2, méthane CH4",
          "L'indice (petit chiffre en bas à droite) compte les atomes du symbole qui le précède ; pas de chiffre = 1 atome",
          "Exemple : CH4 = 1 atome de carbone + 4 atomes d'hydrogène",
        ],
      },
      {
        titre: "Le modèle moléculaire des états de la matière",
        points: [
          "Solide : molécules serrées et ordonnées, qui vibrent sur place",
          "Liquide : molécules en contact, désordonnées, qui glissent les unes sur les autres",
          "Gaz : molécules dispersées et très agitées, séparées par du vide → gaz compressible",
        ],
      },
      {
        titre: "Transformation physique / transformation chimique",
        points: [
          "Physique (changement d'état) : les molécules sont conservées, seule leur disposition change",
          "Chimique : des espèces disparaissent (réactifs) et de nouvelles apparaissent (produits)",
        ],
      },
      {
        titre: "Réarrangement et conservation",
        points: [
          "Une transformation chimique est un réarrangement d'atomes : aucun atome n'est créé ni détruit",
          "Exemples : C + O2 → CO2 ; CH4 + 2 O2 → CO2 + 2 H2O",
          "Conséquence : la masse totale se conserve (loi de Lavoisier), ex. 12 g de C + 32 g de O2 → 44 g de CO2",
        ],
      },
    ],
    audio:
      "Fiche de révision : atomes et molécules. Toute la matière est constituée d'atomes, des briques minuscules désignées par des symboles : H pour l'hydrogène, O pour l'oxygène, C pour le carbone, N pour l'azote, Fe pour le fer. Les atomes s'assemblent en molécules, décrites par des formules chimiques : H deux O pour l'eau, C O deux pour le dioxyde de carbone, O deux pour le dioxygène, C H quatre pour le méthane. Dans une formule, l'indice compte les atomes du symbole qui le précède ; sans chiffre, il n'y a qu'un atome. Le modèle moléculaire explique les états de la matière : molécules serrées et ordonnées dans un solide, en contact mais désordonnées dans un liquide, dispersées et très agitées dans un gaz. Enfin, une transformation chimique est un réarrangement d'atomes : les molécules des réactifs se défont et de nouvelles molécules, les produits, se forment. Comme aucun atome n'est créé ni détruit, la masse totale se conserve : c'est la loi de Lavoisier.",
  },
  memoCards: [
    { recto: "Quel est le symbole de l'atome d'hydrogène ?", verso: "H. Autres symboles : O (oxygène), C (carbone), N (azote), Fe (fer)." },
    { recto: "Qu'est-ce qu'une molécule ?", verso: "Un assemblage d'atomes liés entre eux. Ex : la molécule d'eau H2O." },
    { recto: "Formule de l'eau ?", verso: "H2O : 2 atomes d'hydrogène et 1 atome d'oxygène." },
    { recto: "Formule du dioxyde de carbone ?", verso: "CO2 : 1 atome de carbone et 2 atomes d'oxygène." },
    { recto: "Formule du méthane ?", verso: "CH4 : 1 atome de carbone et 4 atomes d'hydrogène (5 atomes en tout)." },
    { recto: "Que signifie l'indice dans une formule ?", verso: "Le nombre d'atomes du symbole qui le précède. Pas de chiffre = 1 atome." },
    { recto: "Comment sont les molécules dans un gaz ?", verso: "Dispersées, très agitées, séparées par du vide : c'est pourquoi un gaz est compressible." },
    { recto: "Fusion de la glace : transformation physique ou chimique ?", verso: "Physique : les molécules d'eau sont conservées, seule leur disposition change." },
    { recto: "Qu'est-ce qu'une transformation chimique au niveau des atomes ?", verso: "Un réarrangement d'atomes : les atomes des réactifs se réassemblent en nouveaux produits, sans être créés ni détruits." },
    { recto: "Pourquoi la masse se conserve-t-elle lors d'une réaction ?", verso: "Parce que les atomes se conservent (loi de Lavoisier : rien ne se perd, rien ne se crée, tout se transforme)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le symbole de l'atome d'oxygène ?",
      choix: ["O", "Ox", "H", "C"],
      bonneReponse: 0,
      explication: "L'oxygène a pour symbole O. H est l'hydrogène et C le carbone.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "H2O est la formule de la molécule :",
      choix: ["de dioxygène", "d'eau", "de dioxyde de carbone", "de méthane"],
      bonneReponse: 1,
      explication: "H2O est la molécule d'eau : 2 atomes d'hydrogène et 1 atome d'oxygène.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Combien d'atomes contient une molécule de dioxygène O2, et de quelle sorte ?",
      reponse: "2 atomes d'oxygène.",
      explication: "L'indice 2 indique que la molécule est formée de deux atomes d'oxygène liés entre eux.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le symbole de l'atome de fer ?",
      choix: ["F", "Fe", "Fr", "FE"],
      bonneReponse: 1,
      explication: "Le fer s'écrit Fe : première lettre majuscule, deuxième lettre minuscule.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne la composition de la molécule de dioxyde de carbone CO2.",
      reponse: "1 atome de carbone et 2 atomes d'oxygène.",
      explication: "C sans indice = 1 atome de carbone ; O2 = 2 atomes d'oxygène.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La molécule de méthane CH4 est constituée de :",
      choix: [
        "1 atome de carbone et 4 atomes d'hydrogène",
        "4 atomes de carbone et 1 atome d'hydrogène",
        "1 atome de carbone et 4 atomes d'oxygène",
        "2 atomes de carbone et 4 atomes d'hydrogène",
      ],
      bonneReponse: 0,
      explication: "C sans indice = 1 atome de carbone ; H4 = 4 atomes d'hydrogène. Soit 5 atomes en tout.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans 3 molécules d'eau (H2O), combien y a-t-il d'atomes d'hydrogène et d'atomes d'oxygène ?",
      reponse: "6 atomes d'hydrogène et 3 atomes d'oxygène.",
      explication: "Chaque molécule contient 2 H et 1 O : pour 3 molécules, 3 × 2 = 6 H et 3 × 1 = 3 O.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un gaz, les molécules sont :",
      choix: [
        "serrées et bien ordonnées",
        "en contact mais désordonnées",
        "dispersées et très agitées",
        "immobiles",
      ],
      bonneReponse: 2,
      explication: "Dans un gaz, les molécules sont éloignées les unes des autres, très agitées, avec du vide entre elles : le gaz est compressible.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La combustion du carbone s'écrit : C + O2 → CO2. Montre que les atomes sont conservés au cours de cette transformation.",
      reponse: "Avant : 1 atome de carbone (C) et 2 atomes d'oxygène (O2). Après : 1 atome de carbone et 2 atomes d'oxygène dans CO2. Les atomes sont donc conservés.",
      explication: "La transformation chimique est un simple réarrangement : les mêmes atomes se retrouvent assemblés autrement dans les produits.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La combustion complète du méthane s'écrit : CH4 + 2 O2 → CO2 + 2 H2O. Vérifie la conservation des atomes de carbone, d'hydrogène et d'oxygène.",
      reponse:
        "Réactifs : 1 C, 4 H (dans CH4) et 4 O (dans 2 O2). Produits : 1 C et 2 O (dans CO2) + 4 H et 2 O (dans 2 H2O), soit 1 C, 4 H et 4 O. Chaque sorte d'atome est conservée.",
      explication: "On compte chaque sorte d'atome de part et d'autre de la flèche : les nombres sont identiques, la réaction est bien équilibrée.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "On brûle 12 g de carbone dans 32 g de dioxygène ; tout est consommé. Quelle masse de dioxyde de carbone se forme-t-il ?",
      choix: ["12 g", "32 g", "44 g", "20 g"],
      bonneReponse: 2,
      explication: "La masse se conserve : 12 g + 32 g = 44 g de CO2 (loi de Lavoisier).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La fonte d'un glaçon est-elle une transformation physique ou chimique ? Justifie avec le modèle moléculaire.",
      reponse:
        "C'est une transformation physique : les molécules d'eau H2O sont conservées. Seule leur disposition change (ordonnées et serrées dans la glace, désordonnées et en contact dans l'eau liquide).",
      explication: "Aucune nouvelle molécule n'apparaît : il n'y a pas de réarrangement d'atomes, donc pas de transformation chimique.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le symbole N désigne l'atome :",
      choix: ["de nickel", "d'azote", "de néon", "d'oxygène"],
      bonneReponse: 1,
      explication: "N est le symbole de l'azote. Le diazote N2 est le gaz le plus abondant de l'air.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne la formule chimique du dioxygène.",
      reponse: "O2",
      explication: "La molécule de dioxygène est formée de 2 atomes d'oxygène.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Combien d'atomes en tout contient une molécule de méthane CH4 ?",
      reponse: "5 atomes : 1 de carbone et 4 d'hydrogène.",
      explication: "On additionne : 1 C + 4 H = 5 atomes.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Lors d'une transformation chimique :",
      choix: [
        "des atomes sont détruits",
        "des atomes sont créés",
        "les atomes se réarrangent et la masse se conserve",
        "les molécules restent identiques",
      ],
      bonneReponse: 2,
      explication: "Les atomes ne sont ni créés ni détruits : ils se réassemblent en nouvelles molécules, donc la masse totale se conserve.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment sont disposées les molécules dans un solide ?",
      reponse: "Serrées, bien ordonnées, et elles vibrent sur place.",
      explication: "C'est ce qui donne au solide sa forme propre, contrairement au liquide et au gaz.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Atomes et molécules",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Associe la bonne formule au dioxyde de carbone :",
          choix: ["CO", "CO2", "C2O", "O2"],
          bonneReponse: 1,
          explication: "Le dioxyde de carbone est CO2 : 1 atome de carbone et 2 atomes d'oxygène.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le nom des atomes de symboles H, C et Fe.",
          reponse: "H : hydrogène ; C : carbone ; Fe : fer.",
          explication: "Ce sont trois symboles à connaître par cœur, avec O (oxygène) et N (azote).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne la composition atomique de la molécule d'eau H2O, puis celle de 4 molécules d'eau.",
          reponse: "H2O : 2 atomes d'hydrogène et 1 atome d'oxygène. Pour 4 molécules : 8 atomes d'hydrogène et 4 atomes d'oxygène.",
          explication: "On multiplie la composition d'une molécule par le nombre de molécules : 4 × 2 = 8 H et 4 × 1 = 4 O.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pourquoi peut-on comprimer un gaz mais pas un liquide ?",
          choix: [
            "Parce que les molécules d'un gaz sont plus petites",
            "Parce qu'il y a beaucoup de vide entre les molécules d'un gaz",
            "Parce que les molécules d'un gaz sont plus lourdes",
            "Parce qu'un liquide ne contient pas de molécules",
          ],
          bonneReponse: 1,
          explication: "Dans un gaz, les molécules sont dispersées avec du vide entre elles : on peut les rapprocher. Dans un liquide, elles sont déjà en contact.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "L'ébullition de l'eau est-elle une transformation chimique ? Justifie.",
          reponse: "Non, c'est une transformation physique : les molécules d'eau H2O sont conservées, elles passent simplement de l'état liquide à l'état gazeux.",
          explication: "Il n'y a ni disparition ni apparition d'espèces chimiques : pas de réarrangement d'atomes.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On réalise la combustion du carbone : C + O2 → CO2. On brûle 6 g de carbone dans 16 g de dioxygène (tout est consommé). Quelle masse de dioxyde de carbone obtient-on ? Justifie.",
          reponse: "22 g de CO2, car la masse se conserve : 6 g + 16 g = 22 g.",
          explication: "Les atomes se conservent lors d'une transformation chimique, donc la masse des produits est égale à la masse des réactifs (loi de Lavoisier).",
        },
      ],
    },
    {
      titre: "Examen 2 — Atomes et molécules",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans la formule CH4, le chiffre 4 indique :",
          choix: [
            "4 molécules de méthane",
            "4 atomes de carbone",
            "4 atomes d'hydrogène",
            "4 atomes d'oxygène",
          ],
          bonneReponse: 2,
          explication: "L'indice 4 compte les atomes du symbole qui le précède, ici H : 4 atomes d'hydrogène.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une molécule ?",
          reponse: "Un assemblage d'atomes liés entre eux.",
          explication: "Exemple : la molécule d'eau H2O assemble 2 atomes d'hydrogène et 1 atome d'oxygène.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel gaz, de formule N2, est le plus abondant dans l'air ?",
          choix: ["Le dioxygène", "Le dioxyde de carbone", "Le diazote", "Le méthane"],
          bonneReponse: 2,
          explication: "L'air contient environ 78 % de diazote N2 et 21 % de dioxygène O2.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris, avec le modèle moléculaire, la différence entre l'état liquide et l'état gazeux.",
          reponse:
            "Liquide : molécules en contact mais désordonnées, qui glissent les unes sur les autres. Gaz : molécules dispersées, très agitées, séparées par du vide.",
          explication: "C'est cette différence qui explique qu'un gaz est compressible et occupe tout l'espace, contrairement au liquide.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Compte les atomes de chaque sorte dans les réactifs puis dans les produits de la réaction CH4 + 2 O2 → CO2 + 2 H2O. Que constates-tu ?",
          reponse:
            "Réactifs : 1 C, 4 H, 4 O. Produits : 1 C (CO2), 4 H (2 H2O), 2 + 2 = 4 O. Les nombres sont identiques : les atomes sont conservés.",
          explication: "Une transformation chimique est un réarrangement d'atomes : chaque sorte d'atome se retrouve en même quantité avant et après.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une bougie qui brûle perd de la masse. Est-ce en contradiction avec la loi de Lavoisier ? Explique.",
          reponse:
            "Non : la cire réagit avec le dioxygène de l'air et forme du dioxyde de carbone et de la vapeur d'eau, qui s'échappent dans l'air. Si on tenait compte de tous les réactifs et de tous les produits (y compris les gaz), la masse totale serait conservée.",
          explication: "La masse semble diminuer parce que des produits gazeux quittent la bougie ; en système fermé, la conservation de la masse est vérifiée.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La matière est constituée d'atomes ; symboles à connaître : H, O, C, N, Fe (majuscule puis minuscule).",
    "Une molécule est un assemblage d'atomes ; formules à connaître : H2O, CO2, O2, N2, CH4.",
    "Dans une formule, l'indice compte les atomes du symbole qui le précède ; pas de chiffre = 1 atome (CO2 = 1 C + 2 O).",
    "Modèle moléculaire : solide = molécules serrées et ordonnées ; liquide = en contact et désordonnées ; gaz = dispersées et très agitées.",
    "Transformation chimique = réarrangement d'atomes : les atomes (donc la masse) se conservent — loi de Lavoisier.",
    "Erreur classique à éviter : croire que des atomes disparaissent lors d'une combustion — ils se retrouvent tous dans les produits, parfois gazeux et invisibles.",
  ],
},
{
  slug: "combustions",
  titre: "Les combustions",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Comprendre ce qu'est une combustion, connaître les trois conditions nécessaires (combustible, comburant, source d'énergie), écrire les équations des combustions du carbone et du méthane, distinguer combustion complète et incomplète, et connaître les règles de sécurité incendie.",
  objectifs: [
    "Définir une combustion comme une transformation chimique entre un combustible et un comburant",
    "Connaître le triangle du feu : combustible, comburant, source d'énergie",
    "Écrire les équations des combustions du carbone et du méthane",
    "Distinguer combustion complète et combustion incomplète, et connaître le danger du monoxyde de carbone",
    "Savoir que la masse se conserve lors d'une combustion et connaître les règles de sécurité incendie",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une combustion ?",
      illustration: "🔥",
      visuel: "Combustible + Comburant → Produits + Énergie",
      contenu: [
        "Une combustion est une transformation chimique rapide qui dégage de la chaleur et souvent de la lumière",
        "Elle fait réagir un combustible (ce qui brûle) avec un comburant (ce qui permet de brûler)",
        "Le comburant le plus courant est le dioxygène de l'air",
        "Exemples : une bougie, un feu de bois, la flamme d'un briquet",
      ],
      voixOff:
        "Une combustion est une transformation chimique particulière : elle est rapide, dégage de la chaleur, et souvent de la lumière sous forme de flamme. Elle fait réagir deux réactifs bien identifiés : un combustible, c'est-à-dire ce qui brûle, et un comburant, c'est-à-dire ce qui permet la combustion. Le comburant le plus courant, présent dans l'air, est le dioxygène. Une bougie qui brûle, un feu de bois, la flamme d'un briquet sont tous des exemples de combustions.",
    },
    {
      titre: "Le triangle du feu",
      illustration: "🔺",
      visuel: "Combustible • Comburant • Énergie",
      contenu: [
        "Trois conditions sont nécessaires pour qu'une combustion démarre et se poursuive",
        "Un combustible (bois, gaz, essence...)",
        "Un comburant (le plus souvent le dioxygène de l'air)",
        "Une source d'énergie (étincelle, flamme, chaleur) pour démarrer la réaction",
      ],
      voixOff:
        "On représente souvent les trois conditions nécessaires à une combustion par un triangle, appelé le triangle du feu. Il faut d'abord un combustible, comme du bois, du gaz ou de l'essence. Il faut ensuite un comburant, le plus souvent le dioxygène présent dans l'air. Et il faut enfin une source d'énergie, comme une étincelle, une flamme ou de la chaleur, pour démarrer la réaction. Si l'un de ces trois éléments manque, la combustion ne peut pas avoir lieu, ou elle s'arrête.",
    },
    {
      titre: "La combustion du carbone",
      illustration: "⚫",
      visuel: "C + O2 → CO2",
      contenu: [
        "Le charbon (carbone) brûle dans le dioxygène de l'air",
        "Équation : carbone + dioxygène → dioxyde de carbone",
        "Formule chimique : C + O2 → CO2",
        "Le test à l'eau de chaux, qui se trouble, confirme la présence de dioxyde de carbone",
      ],
      voixOff:
        "Prenons l'exemple de la combustion du carbone, comme celle du charbon de bois. Le carbone réagit avec le dioxygène de l'air pour former du dioxyde de carbone. On écrit cette réaction : carbone plus dioxygène donnent dioxyde de carbone, ou en formules chimiques, C plus O deux donnent C O deux. On peut vérifier la présence de ce gaz en le faisant barboter dans de l'eau de chaux, qui se trouble et devient blanche laiteuse.",
    },
    {
      titre: "La combustion du méthane",
      illustration: "🔵",
      visuel: "CH4 + 2 O2 → CO2 + 2 H2O",
      contenu: [
        "Le méthane (gaz naturel, gaz de ville) brûle dans le dioxygène de l'air",
        "Équation : méthane + dioxygène → dioxyde de carbone + eau",
        "Formule chimique : CH4 + 2 O2 → CO2 + 2 H2O",
        "De la buée (eau) se forme sur une paroi froide au-dessus de la flamme",
      ],
      voixOff:
        "Autre exemple important : la combustion du méthane, le gaz naturel utilisé pour la cuisson et le chauffage. Le méthane réagit avec le dioxygène de l'air pour former du dioxyde de carbone et de l'eau. On écrit : méthane plus dioxygène donnent dioxyde de carbone plus eau, soit C H quatre plus deux O deux donnent C O deux plus deux H deux O. On peut observer la formation d'eau grâce à de la buée qui se dépose sur une paroi froide tenue au-dessus de la flamme.",
    },
    {
      titre: "Identifier les produits d'une combustion",
      illustration: "🔍",
      visuel: "Eau de chaux • Buée",
      contenu: [
        "Le dioxyde de carbone trouble l'eau de chaux",
        "L'eau forme de la buée sur une surface froide, et bleuit le sulfate de cuivre anhydre",
        "Ces tests permettent de vérifier la composition des produits formés",
        "Toute combustion d'un combustible carboné produit du dioxyde de carbone",
      ],
      voixOff:
        "Pour vérifier ce qui se forme au cours d'une combustion, on utilise les tests caractéristiques déjà connus. Le dioxyde de carbone trouble l'eau de chaux. L'eau forme de la buée sur une surface froide, et fait bleuir le sulfate de cuivre anhydre. Retiens que la combustion de tout combustible carboné, comme le bois, le charbon, le gaz ou l'essence, produit toujours du dioxyde de carbone.",
    },
    {
      titre: "Combustion complète et incomplète",
      illustration: "🌫️",
      visuel: "Assez d'O2 vs pas assez d'O2",
      contenu: [
        "Combustion complète : assez de dioxygène, flamme bleue, produit du CO2 (et de l'eau)",
        "Combustion incomplète : pas assez de dioxygène, flamme jaune-orangée, dépôt de suie (carbone non brûlé)",
        "Une combustion incomplète produit aussi du monoxyde de carbone (CO), un gaz toxique",
        "Le monoxyde de carbone est incolore, inodore et invisible : c'est un poison dangereux",
      ],
      voixOff:
        "Une combustion peut être complète ou incomplète, selon la quantité de dioxygène disponible. Une combustion complète, avec assez de dioxygène, donne une flamme bleue et produit du dioxyde de carbone. Une combustion incomplète, quand le dioxygène manque, donne une flamme jaune-orangée et forme un dépôt noir de suie, du carbone non brûlé. Elle produit aussi un gaz très dangereux : le monoxyde de carbone, de formule CO. Ce gaz est incolore, inodore et invisible, ce qui en fait un poison redoutable.",
    },
    {
      titre: "Le danger du monoxyde de carbone",
      illustration: "☠️",
      visuel: "CO : gaz mortel invisible",
      contenu: [
        "Le monoxyde de carbone (CO) empêche le sang de transporter correctement le dioxygène",
        "Il provoque des intoxications, parfois mortelles, en particulier en espace mal ventilé",
        "Cause fréquente : chauffage défectueux, appareil à gaz mal entretenu, groupe électrogène en intérieur",
        "Prévention : aérer régulièrement, entretenir les appareils, installer un détecteur de CO",
      ],
      voixOff:
        "Le monoxyde de carbone est particulièrement dangereux : il se fixe sur le sang à la place du dioxygène, empêchant celui-ci d'être correctement transporté dans le corps. Il provoque chaque année des intoxications, parfois mortelles, surtout dans des espaces mal ventilés. Les causes fréquentes sont un chauffage défectueux, un appareil à gaz mal entretenu, ou un groupe électrogène utilisé à l'intérieur. Pour se protéger, il faut aérer régulièrement son logement, faire entretenir ses appareils de chauffage, et installer un détecteur de monoxyde de carbone.",
    },
    {
      titre: "Conservation de la masse et sécurité incendie",
      illustration: "🧯",
      visuel: "masse conservée • éteindre un feu",
      contenu: [
        "La masse totale se conserve lors d'une combustion (loi de Lavoisier), même si les gaz produits sont invisibles",
        "Pour éteindre un feu, il faut supprimer un des trois éléments du triangle du feu",
        "Étouffer les flammes (priver d'air), refroidir (eau) ou isoler le combustible",
        "Ne jamais éteindre un feu d'huile ou d'électricité avec de l'eau",
      ],
      voixOff:
        "Comme toute transformation chimique, une combustion respecte la loi de Lavoisier : la masse totale se conserve, même si l'on ne pèse pas les gaz invisibles qui se forment. Pour éteindre un feu, il suffit de supprimer l'un des trois éléments du triangle du feu : étouffer les flammes en les privant d'air, refroidir avec de l'eau, ou isoler le combustible. Attention cependant : il ne faut jamais éteindre un feu d'huile ou un feu d'origine électrique avec de l'eau, cela peut aggraver dangereusement l'incendie.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Combustion = transformation chimique entre un combustible et un comburant (souvent O2), avec une source d'énergie",
        "C + O2 → CO2 (carbone) ; CH4 + 2 O2 → CO2 + 2 H2O (méthane)",
        "Combustion incomplète (manque de dioxygène) : suie + monoxyde de carbone (CO), un gaz mortel",
        "La masse se conserve toujours ; pour éteindre un feu, on supprime un élément du triangle du feu",
      ],
      voixOff:
        "Résumons. Une combustion est une transformation chimique entre un combustible et un comburant, le plus souvent le dioxygène de l'air, déclenchée par une source d'énergie. Le carbone brûle selon C plus O deux donnent C O deux, et le méthane selon C H quatre plus deux O deux donnent C O deux plus deux H deux O. Attention à la combustion incomplète, qui se produit quand le dioxygène manque : elle forme de la suie et du monoxyde de carbone, un gaz mortel et invisible. Enfin, la masse se conserve toujours lors d'une combustion, et pour éteindre un feu, il suffit de supprimer l'un des trois éléments du triangle du feu.",
    },
  ],
  fiche: {
    intro:
      "Une combustion est une transformation chimique rapide entre un combustible et un comburant, qui dégage chaleur et souvent lumière. Elle produit du dioxyde de carbone (et de l'eau pour les combustibles hydrogénés), mais peut aussi former des produits dangereux si elle est incomplète.",
    sections: [
      {
        titre: "Le triangle du feu",
        points: [
          "Combustible : ce qui brûle (bois, gaz, essence...)",
          "Comburant : ce qui permet la combustion, le plus souvent le dioxygène de l'air",
          "Source d'énergie : étincelle, flamme, chaleur, nécessaire pour démarrer",
        ],
      },
      {
        titre: "Les équations de combustion à connaître",
        points: [
          "Carbone : C + O2 → CO2 (carbone + dioxygène → dioxyde de carbone)",
          "Méthane : CH4 + 2 O2 → CO2 + 2 H2O (méthane + dioxygène → dioxyde de carbone + eau)",
          "Tests : eau de chaux qui se trouble (CO2), buée et sulfate de cuivre qui bleuit (eau)",
        ],
      },
      {
        titre: "Combustion complète et incomplète",
        points: [
          "Complète (assez de O2) : flamme bleue, produit du CO2",
          "Incomplète (manque de O2) : flamme jaune-orangée, suie, et monoxyde de carbone (CO)",
          "CO : gaz incolore, inodore, très toxique, empêche le sang de transporter le dioxygène",
        ],
      },
      {
        titre: "Conservation de la masse et sécurité",
        points: [
          "La masse totale se conserve lors d'une combustion (loi de Lavoisier)",
          "Pour éteindre un feu : supprimer un élément du triangle du feu (étouffer, refroidir, isoler)",
          "Prévention CO : aérer, entretenir les appareils, installer un détecteur",
        ],
      },
    ],
    audio:
      "Fiche de révision : les combustions. Une combustion est une transformation chimique rapide, qui dégage de la chaleur et souvent de la lumière, entre un combustible et un comburant, le plus souvent le dioxygène de l'air. Trois conditions sont nécessaires : un combustible, un comburant, et une source d'énergie pour démarrer, c'est le triangle du feu. La combustion du carbone s'écrit C plus O deux donnent C O deux. La combustion du méthane s'écrit C H quatre plus deux O deux donnent C O deux plus deux H deux O. Une combustion complète, avec assez de dioxygène, donne une flamme bleue. Une combustion incomplète, quand le dioxygène manque, donne une flamme jaune-orangée, forme de la suie, et surtout du monoxyde de carbone, un gaz incolore, inodore et très toxique qui empêche le sang de transporter correctement le dioxygène. La masse totale se conserve toujours lors d'une combustion. Pour éteindre un feu, il suffit de supprimer l'un des trois éléments du triangle du feu : étouffer les flammes, les refroidir, ou isoler le combustible.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une combustion ?", verso: "Une transformation chimique rapide entre un combustible et un comburant, qui dégage chaleur et souvent lumière." },
    { recto: "Quels sont les trois éléments du triangle du feu ?", verso: "Combustible, comburant (souvent le dioxygène), source d'énergie (étincelle, flamme, chaleur)." },
    { recto: "Équation de la combustion du carbone ?", verso: "C + O2 → CO2 (carbone + dioxygène → dioxyde de carbone)." },
    { recto: "Équation de la combustion du méthane ?", verso: "CH4 + 2 O2 → CO2 + 2 H2O (méthane + dioxygène → dioxyde de carbone + eau)." },
    { recto: "Différence entre combustion complète et incomplète ?", verso: "Complète : assez de O2, flamme bleue, CO2. Incomplète : manque de O2, flamme jaune-orangée, suie et monoxyde de carbone (CO)." },
    { recto: "Pourquoi le monoxyde de carbone (CO) est-il dangereux ?", verso: "Il est incolore, inodore, invisible, et empêche le sang de transporter correctement le dioxygène : il peut être mortel." },
    { recto: "Comment éteindre un feu ?", verso: "En supprimant un des trois éléments du triangle du feu : étouffer (priver d'air), refroidir (eau), ou isoler le combustible." },
    { recto: "La masse se conserve-t-elle lors d'une combustion ?", verso: "Oui, toujours (loi de Lavoisier), même si des gaz invisibles sont produits." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une combustion nécessite obligatoirement :",
      choix: [
        "un combustible et un comburant",
        "seulement de l'eau",
        "seulement de l'électricité",
        "aucune condition particulière",
      ],
      bonneReponse: 0,
      explication: "Une combustion nécessite un combustible, un comburant et une source d'énergie pour démarrer (triangle du feu).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le comburant le plus courant ?",
      choix: ["l'azote", "le dioxygène", "le dioxyde de carbone", "l'eau"],
      bonneReponse: 1,
      explication: "Le dioxygène de l'air est le comburant le plus courant dans les combustions.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les trois éléments du triangle du feu.",
      reponse: "Le combustible, le comburant, et la source d'énergie.",
      explication: "Si l'un des trois manque, la combustion ne peut pas démarrer ou s'arrête.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La combustion du carbone dans le dioxygène produit :",
      choix: ["du dihydrogène", "du dioxyde de carbone", "de l'azote", "du méthane"],
      bonneReponse: 1,
      explication: "C + O2 → CO2 : la combustion du carbone produit du dioxyde de carbone.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris l'équation de la combustion du méthane dans le dioxygène.",
      reponse: "CH4 + 2 O2 → CO2 + 2 H2O",
      explication: "Le méthane brûle dans le dioxygène pour former du dioxyde de carbone et de l'eau.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une flamme jaune-orangée qui dépose de la suie indique :",
      choix: [
        "une combustion complète",
        "une combustion incomplète, par manque de dioxygène",
        "l'absence de toute combustion",
        "une combustion sans combustible",
      ],
      bonneReponse: 1,
      explication: "Une combustion incomplète, due à un manque de dioxygène, donne une flamme jaune-orangée et dépose de la suie (carbone non brûlé).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel test permet de vérifier la présence de dioxyde de carbone parmi les produits d'une combustion ?",
      reponse: "Le test à l'eau de chaux : elle se trouble et devient blanche laiteuse en présence de dioxyde de carbone.",
      explication: "C'est le test caractéristique du dioxyde de carbone, à connaître par cœur.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pourquoi le monoxyde de carbone (CO) est-il particulièrement dangereux ?",
      choix: [
        "Il a une odeur très forte qui prévient du danger",
        "Il est incolore et inodore, donc impossible à détecter sans appareil",
        "Il n'est dangereux qu'en très grande quantité",
        "Il n'est pas toxique pour l'être humain",
      ],
      bonneReponse: 1,
      explication: "Le CO est incolore et inodore : on ne peut pas le détecter sans détecteur spécifique, ce qui le rend très dangereux.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "On brûle 3 g de carbone dans du dioxygène en excès et on obtient 11 g de dioxyde de carbone. Quelle masse de dioxygène a été consommée ?",
      reponse: "Masse de dioxygène = masse de CO2 − masse de carbone = 11 − 3 = 8 g.",
      explication: "La masse se conserve : masse des réactifs (carbone + dioxygène) = masse des produits (dioxyde de carbone).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi il ne faut jamais utiliser un groupe électrogène ou un barbecue à l'intérieur d'un logement fermé.",
      reponse:
        "Ces appareils fonctionnent grâce à une combustion qui peut devenir incomplète si l'espace n'est pas assez ventilé (manque de dioxygène). Cela produit du monoxyde de carbone, un gaz incolore, inodore et très toxique, qui peut provoquer une intoxication mortelle dans un espace fermé mal aéré.",
      explication: "Le manque de ventilation limite l'apport en dioxygène, favorisant une combustion incomplète et la production de CO.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pour éteindre un feu de casserole d'huile enflammée, la bonne méthode est :",
      choix: [
        "verser de l'eau dessus",
        "poser un couvercle sur la casserole pour étouffer les flammes",
        "souffler très fort dessus",
        "ajouter de l'essence",
      ],
      bonneReponse: 1,
      explication: "Un couvercle prive le feu de dioxygène (comburant) et l'éteint. L'eau est à proscrire sur un feu d'huile : elle provoque une projection violente et dangereuse.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "On réalise la combustion complète de 16 g de méthane dans du dioxygène en excès. Sachant que l'équation est CH4 + 2 O2 → CO2 + 2 H2O et que l'on obtient 44 g de CO2 et 36 g de H2O, calcule la masse de dioxygène consommée. Vérifie la conservation de la masse.",
      reponse:
        "Masse de dioxygène = masse des produits − masse de méthane = (44 + 36) − 16 = 80 − 16 = 64 g. Vérification : masse des réactifs = 16 + 64 = 80 g = masse des produits (44 + 36 = 80 g). La masse est bien conservée.",
      explication: "On applique la loi de Lavoisier : la masse totale des réactifs est égale à la masse totale des produits.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le triangle du feu regroupe :",
      choix: [
        "combustible, comburant, source d'énergie",
        "eau, air, terre",
        "carbone, hydrogène, oxygène",
        "flamme, fumée, cendre",
      ],
      bonneReponse: 0,
      explication: "Ces trois éléments sont nécessaires pour qu'une combustion démarre et se poursuive.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel gaz produit toujours la combustion d'un combustible carboné ?",
      reponse: "Du dioxyde de carbone (CO2).",
      explication: "Le carbone du combustible se combine au dioxygène de l'air pour former du dioxyde de carbone.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence de couleur de flamme entre une combustion complète et une combustion incomplète ?",
      reponse: "Complète : flamme bleue. Incomplète : flamme jaune-orangée, avec dépôt de suie.",
      explication: "La couleur de la flamme renseigne sur la quantité de dioxygène disponible pour la combustion.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le monoxyde de carbone (CO) est dangereux car il :",
      choix: [
        "a une odeur très reconnaissable",
        "empêche le sang de transporter correctement le dioxygène",
        "n'est produit que par les volcans",
        "n'a aucun effet sur la santé",
      ],
      bonneReponse: 1,
      explication: "Le CO se fixe à la place du dioxygène dans le sang, provoquant une intoxication pouvant être mortelle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite un moyen d'éteindre un feu en agissant sur le triangle du feu.",
      reponse: "Étouffer les flammes pour supprimer le comburant (dioxygène), par exemple avec un couvercle ou une couverture anti-feu.",
      explication: "On peut aussi refroidir avec de l'eau (sauf sur feu d'huile ou électrique) ou isoler le combustible.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les combustions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le comburant d'une combustion est le plus souvent :",
          choix: ["le dioxyde de carbone", "le dioxygène", "l'azote", "le méthane"],
          bonneReponse: 1,
          explication: "Le dioxygène de l'air est le comburant le plus courant.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne l'équation de la combustion du carbone dans le dioxygène.",
          reponse: "C + O2 → CO2",
          explication: "Le carbone réagit avec le dioxygène pour former du dioxyde de carbone.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une combustion incomplète se produit lorsque :",
          choix: [
            "il y a trop de dioxygène",
            "il n'y a pas assez de dioxygène",
            "il n'y a pas de combustible",
            "la température est trop basse pour démarrer",
          ],
          bonneReponse: 1,
          explication: "Le manque de dioxygène empêche une combustion complète, produisant suie et monoxyde de carbone.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quels sont les deux produits formés par la combustion complète du méthane ? Écris l'équation.",
          reponse: "Le dioxyde de carbone et l'eau. Équation : CH4 + 2 O2 → CO2 + 2 H2O",
          explication: "Le méthane contient du carbone et de l'hydrogène, d'où la formation de CO2 et de H2O.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On brûle 8 g de méthane dans du dioxygène en excès. On obtient 22 g de dioxyde de carbone et 18 g d'eau. Calcule la masse de dioxygène consommée, en utilisant la conservation de la masse.",
          reponse: "Masse de dioxygène = (22 + 18) − 8 = 40 − 8 = 32 g.",
          explication: "La masse totale des réactifs (méthane + dioxygène) est égale à la masse totale des produits (dioxyde de carbone + eau).",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi faut-il installer un détecteur de monoxyde de carbone chez soi ?",
          choix: [
            "Parce que le CO a une odeur très forte qu'il faut confirmer",
            "Parce que le CO est incolore et inodore, donc indétectable par les sens humains",
            "Parce que le CO n'est dangereux qu'en très petite quantité",
            "Ce n'est pas utile si on ne possède pas de cheminée",
          ],
          bonneReponse: 1,
          explication: "Le CO ne peut pas être détecté par l'odorat ou la vue : seul un détecteur spécifique permet de repérer sa présence.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les combustions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quels sont les trois éléments nécessaires à une combustion ?",
          choix: [
            "combustible, comburant, source d'énergie",
            "eau, sel, sucre",
            "carbone, azote, hydrogène",
            "chaleur, froid, lumière",
          ],
          bonneReponse: 0,
          explication: "C'est le triangle du feu : combustible, comburant, source d'énergie.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel test permet de vérifier la présence d'eau formée lors d'une combustion ?",
          reponse: "On approche une paroi froide de la flamme : de la buée s'y dépose. On peut aussi utiliser du sulfate de cuivre anhydre, qui bleuit au contact de l'eau.",
          explication: "Ces deux tests confirment la présence d'eau parmi les produits d'une combustion.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une flamme bleue, sans suie, indique en général :",
          choix: [
            "une combustion incomplète",
            "une combustion complète, avec assez de dioxygène",
            "l'absence de combustion",
            "la présence de monoxyde de carbone uniquement",
          ],
          bonneReponse: 1,
          explication: "Une flamme bleue est le signe d'une combustion complète, avec un apport suffisant de dioxygène.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi il ne faut jamais utiliser de l'eau pour éteindre un feu d'origine électrique.",
          reponse:
            "L'eau est conductrice de l'électricité : l'utiliser sur un feu électrique risque de provoquer une électrocution de la personne qui tente d'éteindre le feu, et peut aggraver l'incendie.",
          explication: "Pour un feu électrique, il faut d'abord couper le courant, puis utiliser un extincteur adapté (jamais à eau).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On réalise la combustion de 6 g de carbone dans 16 g de dioxygène ; tout est consommé. Quelle masse de dioxyde de carbone obtient-on ? Justifie avec la loi de conservation de la masse.",
          reponse: "22 g de CO2, car la masse se conserve : masse des produits = masse des réactifs = 6 + 16 = 22 g.",
          explication: "C'est une application directe de la loi de Lavoisier à la combustion du carbone.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Un radiateur à gaz mal entretenu, utilisé dans une pièce mal ventilée, présente un risque de :",
          choix: [
            "combustion complète uniquement, sans danger",
            "production de monoxyde de carbone par combustion incomplète",
            "absence totale de combustion",
            "production exclusive de dioxygène",
          ],
          bonneReponse: 1,
          explication: "Un mauvais entretien et un manque de ventilation favorisent une combustion incomplète, dangereuse car elle produit du monoxyde de carbone.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une combustion est une transformation chimique rapide entre un combustible et un comburant (souvent le dioxygène), déclenchée par une source d'énergie : c'est le triangle du feu.",
    "Combustion du carbone : C + O2 → CO2. Combustion du méthane : CH4 + 2 O2 → CO2 + 2 H2O.",
    "Combustion complète (assez de O2) : flamme bleue. Combustion incomplète (manque de O2) : flamme jaune-orangée, suie, et monoxyde de carbone (CO).",
    "Le monoxyde de carbone (CO) est incolore, inodore et très toxique : il empêche le sang de transporter correctement le dioxygène.",
    "La masse totale se conserve toujours lors d'une combustion (loi de Lavoisier).",
    "Pour éteindre un feu, on supprime un élément du triangle du feu ; jamais d'eau sur un feu d'huile ou d'origine électrique.",
  ],
},
{
  slug: "intensite-tension",
  titre: "Intensité et tension électriques",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Mesurer l'intensité du courant avec un ampèremètre et la tension avec un voltmètre, connaître les lois d'unicité et d'additivité de l'intensité et de la tension dans les circuits série et en dérivation, et comprendre le danger du court-circuit.",
  objectifs: [
    "Mesurer une intensité (en ampères) avec un ampèremètre branché en série",
    "Mesurer une tension (en volts) avec un voltmètre branché en dérivation",
    "Connaître les lois de l'intensité et de la tension dans un circuit série",
    "Connaître les lois de l'intensité et de la tension dans un circuit en dérivation",
    "Comprendre pourquoi un court-circuit est dangereux",
  ],
  slides: [
    {
      titre: "Rappels sur le circuit électrique",
      illustration: "⚡",
      visuel: "Générateur → Récepteurs → Fils",
      contenu: [
        "Un circuit électrique est une boucle fermée de dipôles reliés par des fils",
        "Il comporte un générateur (pile) et un ou plusieurs récepteurs",
        "Deux types de montages : le circuit série (un seul chemin) et le circuit en dérivation (plusieurs branches)",
        "Le courant circule du + vers le − à l'extérieur du générateur (sens conventionnel)",
      ],
      voixOff:
        "Avant d'aller plus loin, rappelons qu'un circuit électrique est une boucle fermée de dipôles reliés par des fils conducteurs, avec un générateur qui fait circuler le courant et un ou plusieurs récepteurs qui l'utilisent. On distingue deux montages : le circuit série, où il n'existe qu'un seul chemin pour le courant, et le circuit en dérivation, qui comporte plusieurs branches. Le courant circule, par convention, de la borne plus vers la borne moins à l'extérieur du générateur.",
    },
    {
      titre: "L'intensité du courant électrique",
      illustration: "🔢",
      visuel: "I en ampères (A)",
      contenu: [
        "L'intensité, notée I, mesure le débit du courant électrique dans un circuit",
        "Elle s'exprime en ampères, symbole A",
        "Sous-unités courantes : le milliampère (1 mA = 0,001 A)",
        "Plus l'intensité est grande, plus le courant qui circule est important",
      ],
      voixOff:
        "L'intensité du courant électrique, notée I, mesure en quelque sorte le débit de courant qui circule dans le circuit. Elle s'exprime en ampères, de symbole A, en hommage au physicien André-Marie Ampère. On utilise parfois le milliampère, qui vaut un millième d'ampère, pour les très petites intensités. Plus l'intensité est élevée, plus le courant qui traverse le circuit est important.",
    },
    {
      titre: "Mesurer l'intensité : l'ampèremètre",
      illustration: "📟",
      visuel: "Ampèremètre EN SÉRIE",
      contenu: [
        "L'ampèremètre mesure l'intensité I dans un circuit",
        "Il se branche TOUJOURS en série, directement inséré dans le circuit",
        "Il faut choisir un calibre adapté, supérieur à la valeur attendue",
        "Erreur à éviter : brancher l'ampèremètre en dérivation risque de l'endommager",
      ],
      voixOff:
        "Pour mesurer l'intensité du courant, on utilise un ampèremètre. Il doit toujours être branché en série, c'est-à-dire directement inséré sur le chemin du courant, comme un maillon de la chaîne. Il faut aussi choisir un calibre adapté, c'est-à-dire une plage de mesure supérieure à la valeur que l'on s'attend à mesurer. Attention : brancher un ampèremètre en dérivation est une erreur qui peut l'endommager, voire le détruire.",
    },
    {
      titre: "La tension électrique",
      illustration: "🔋",
      visuel: "U en volts (V)",
      contenu: [
        "La tension, notée U, mesure la différence électrique entre deux points d'un circuit",
        "Elle s'exprime en volts, symbole V",
        "Exemples : pile plate 4,5 V, pile ronde 1,5 V, prise secteur 230 V",
        "Chaque dipôle branché dans un circuit possède une tension à ses bornes",
      ],
      voixOff:
        "La tension électrique, notée U, mesure une différence électrique entre deux points d'un circuit, souvent les deux bornes d'un dipôle. Elle s'exprime en volts, de symbole V, en hommage au physicien Alessandro Volta. Une pile plate délivre une tension de quatre virgule cinq volts, une pile ronde un virgule cinq volts, et la prise secteur en France deux cent trente volts. Chaque dipôle branché dans un circuit possède une tension à ses bornes.",
    },
    {
      titre: "Mesurer la tension : le voltmètre",
      illustration: "🎛️",
      visuel: "Voltmètre EN DÉRIVATION",
      contenu: [
        "Le voltmètre mesure la tension U aux bornes d'un dipôle",
        "Il se branche TOUJOURS en dérivation, aux bornes du dipôle étudié",
        "Le multimètre peut fonctionner en ampèremètre ou en voltmètre selon le réglage et les bornes utilisées",
        "Il faut aussi choisir un calibre adapté à la tension mesurée",
      ],
      voixOff:
        "Pour mesurer une tension, on utilise un voltmètre. Contrairement à l'ampèremètre, il se branche toujours en dérivation, directement aux bornes du dipôle que l'on étudie, sans faire partie du chemin principal du courant. En pratique, on utilise souvent un multimètre, un appareil unique qui peut fonctionner en ampèremètre ou en voltmètre selon le réglage choisi et les bornes utilisées. Là encore, il faut sélectionner un calibre adapté à la tension attendue.",
    },
    {
      titre: "Circuit série : les lois de l'intensité et de la tension",
      illustration: "➖",
      visuel: "I = I1 = I2 • U = U1 + U2",
      contenu: [
        "Loi d'unicité de l'intensité : dans un circuit série, l'intensité est la même en tout point : I = I1 = I2",
        "Loi d'additivité des tensions : la tension aux bornes du générateur est égale à la somme des tensions aux bornes des récepteurs : U = U1 + U2",
        "Ces deux lois sont valables quel que soit le nombre de récepteurs en série",
      ],
      voixOff:
        "Dans un circuit série, deux lois essentielles sont à connaître. La loi d'unicité de l'intensité : l'intensité du courant est la même partout dans le circuit, I égale I1 égale I2. La loi d'additivité des tensions : la tension délivrée par le générateur est égale à la somme des tensions aux bornes de chaque récepteur, U égale U1 plus U2. Ces deux lois restent valables, même avec plus de deux récepteurs en série.",
    },
    {
      titre: "Circuit en dérivation : les lois de l'intensité et de la tension",
      illustration: "🔀",
      visuel: "U = U1 = U2 • I = I1 + I2",
      contenu: [
        "Loi d'unicité de la tension : chaque branche a la même tension à ses bornes que le générateur : U = U1 = U2",
        "Loi d'additivité des intensités : l'intensité principale se répartit entre les branches : I = I1 + I2",
        "C'est l'inverse du circuit série : ici, c'est la tension qui est unique et l'intensité qui s'additionne",
      ],
      voixOff:
        "Dans un circuit en dérivation, les lois s'inversent. La loi d'unicité de la tension : chaque branche possède la même tension à ses bornes, égale à celle du générateur, U égale U1 égale U2. La loi d'additivité des intensités : l'intensité qui sort du générateur se répartit entre les différentes branches, puis se retrouve à l'arrivée, I égale I1 plus I2. Retiens bien la différence avec le circuit série : ici, c'est la tension qui est unique et l'intensité qui s'additionne.",
    },
    {
      titre: "Le court-circuit : un danger électrique",
      illustration: "⚠️",
      visuel: "I très grande !",
      contenu: [
        "Un court-circuit relie directement les deux bornes d'un générateur sans récepteur",
        "L'intensité devient alors très grande, rien ne la limite",
        "Conséquences : échauffement des fils, risque d'incendie, pile ou appareil endommagé",
        "Un fusible ou un disjoncteur coupe le circuit en cas de court-circuit pour protéger l'installation",
      ],
      voixOff:
        "Un court-circuit se produit quand un simple fil relie directement les deux bornes d'un générateur, sans passer par un récepteur qui limiterait le courant. L'intensité devient alors très grande, car rien ne s'y oppose. Cela provoque un échauffement important des fils, un risque d'incendie et peut détruire la pile ou l'appareil. C'est pour cette raison que les installations électriques sont équipées de fusibles ou de disjoncteurs, qui coupent automatiquement le circuit en cas de court-circuit.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Intensité I (ampères, A) : mesurée avec un ampèremètre EN SÉRIE",
        "Tension U (volts, V) : mesurée avec un voltmètre EN DÉRIVATION",
        "Circuit série : I unique partout, U s'additionne (U = U1 + U2)",
        "Circuit dérivation : U unique par branche, I s'additionne (I = I1 + I2)",
      ],
      voixOff:
        "Résumons. L'intensité, notée I et mesurée en ampères, se mesure avec un ampèremètre branché en série. La tension, notée U et mesurée en volts, se mesure avec un voltmètre branché en dérivation. Dans un circuit série, l'intensité est la même partout et les tensions s'additionnent. Dans un circuit en dérivation, c'est l'inverse : la tension est la même dans chaque branche et ce sont les intensités qui s'additionnent. Et surtout, méfie-toi du court-circuit, qui provoque une intensité dangereusement grande.",
    },
  ],
  fiche: {
    intro:
      "L'intensité (I, en ampères) et la tension (U, en volts) sont les deux grandeurs électriques essentielles. Elles obéissent à des lois différentes selon que le circuit est monté en série ou en dérivation.",
    sections: [
      {
        titre: "L'intensité et sa mesure",
        points: [
          "Intensité I : mesurée en ampères (A), avec un ampèremètre",
          "L'ampèremètre se branche TOUJOURS en série, dans le circuit",
          "Choisir un calibre adapté et supérieur à la valeur attendue",
        ],
      },
      {
        titre: "La tension et sa mesure",
        points: [
          "Tension U : mesurée en volts (V), avec un voltmètre",
          "Le voltmètre se branche TOUJOURS en dérivation, aux bornes du dipôle",
          "Le multimètre permet de mesurer I ou U selon le réglage choisi",
        ],
      },
      {
        titre: "Lois dans un circuit série",
        points: [
          "Loi d'unicité de l'intensité : I = I1 = I2 (même intensité partout)",
          "Loi d'additivité des tensions : U = U1 + U2 (la tension du générateur se répartit entre les récepteurs)",
        ],
      },
      {
        titre: "Lois dans un circuit en dérivation et danger du court-circuit",
        points: [
          "Loi d'unicité de la tension : U = U1 = U2 (même tension dans chaque branche)",
          "Loi d'additivité des intensités : I = I1 + I2 (l'intensité se répartit entre les branches)",
          "Court-circuit : intensité très grande, danger d'échauffement et d'incendie",
        ],
      },
    ],
    audio:
      "Fiche de révision : intensité et tension électriques. L'intensité, notée I, se mesure en ampères avec un ampèremètre, toujours branché en série dans le circuit. La tension, notée U, se mesure en volts avec un voltmètre, toujours branché en dérivation aux bornes du dipôle étudié. Dans un circuit série, l'intensité est la même en tout point du circuit : c'est la loi d'unicité de l'intensité. Les tensions aux bornes de chaque récepteur s'additionnent pour donner la tension du générateur : c'est la loi d'additivité des tensions. Dans un circuit en dérivation, c'est l'inverse : la tension est la même aux bornes de chaque branche, c'est la loi d'unicité de la tension, tandis que les intensités des différentes branches s'additionnent pour donner l'intensité totale, c'est la loi d'additivité des intensités. Enfin, un court-circuit, qui relie directement les deux bornes d'un générateur sans récepteur, provoque une intensité dangereusement grande, avec un risque d'échauffement et d'incendie.",
  },
  memoCards: [
    { recto: "Que mesure l'intensité I et dans quelle unité ?", verso: "Le débit du courant électrique, en ampères (A)." },
    { recto: "Que mesure la tension U et dans quelle unité ?", verso: "La différence électrique entre deux points d'un circuit, en volts (V)." },
    { recto: "Comment brancher un ampèremètre ?", verso: "Toujours en série, directement inséré dans le circuit." },
    { recto: "Comment brancher un voltmètre ?", verso: "Toujours en dérivation, aux bornes du dipôle étudié." },
    { recto: "Loi de l'intensité dans un circuit série ?", verso: "L'intensité est la même partout : I = I1 = I2 (loi d'unicité)." },
    { recto: "Loi de la tension dans un circuit série ?", verso: "Les tensions s'additionnent : U = U1 + U2 (loi d'additivité)." },
    { recto: "Loi de la tension dans un circuit en dérivation ?", verso: "La tension est la même dans chaque branche : U = U1 = U2 (loi d'unicité)." },
    { recto: "Loi de l'intensité dans un circuit en dérivation ?", verso: "Les intensités s'additionnent : I = I1 + I2 (loi d'additivité)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'intensité du courant électrique se mesure en :",
      choix: ["volts (V)", "ampères (A)", "watts (W)", "ohms (Ω)"],
      bonneReponse: 1,
      explication: "L'intensité I s'exprime en ampères, symbole A.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se branche un ampèremètre dans un circuit ?",
      choix: ["En dérivation", "En série", "N'importe où", "En parallèle du générateur uniquement"],
      bonneReponse: 1,
      explication: "L'ampèremètre se branche toujours en série, directement inséré dans le circuit.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans quelle unité s'exprime la tension électrique et avec quel appareil la mesure-t-on ?",
      reponse: "La tension s'exprime en volts (V) et se mesure avec un voltmètre.",
      explication: "Le voltmètre se branche en dérivation, aux bornes du dipôle étudié.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se branche un voltmètre ?",
      choix: ["En série", "En dérivation, aux bornes du dipôle", "Il n'a pas besoin d'être branché", "En série avec l'ampèremètre uniquement"],
      bonneReponse: 1,
      explication: "Le voltmètre se branche en dérivation, aux bornes du dipôle dont on veut mesurer la tension.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un circuit série avec deux lampes, U1 = 2 V aux bornes de la première lampe et U2 = 2,5 V aux bornes de la deuxième. Quelle est la tension U du générateur ?",
      reponse: "U = U1 + U2 = 2 + 2,5 = 4,5 V",
      explication: "Loi d'additivité des tensions dans un circuit série : la tension du générateur est la somme des tensions aux bornes des récepteurs.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un circuit série, si l'intensité vaut 0,3 A à un endroit du circuit, que vaut-elle ailleurs dans ce même circuit ?",
      choix: ["Elle est toujours plus faible", "Elle est toujours plus forte", "Elle vaut 0,3 A partout", "Elle dépend du nombre de récepteurs"],
      bonneReponse: 2,
      explication: "Loi d'unicité de l'intensité : dans un circuit série, l'intensité est la même en tout point du circuit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un circuit en dérivation à deux branches, I1 = 0,4 A et I2 = 0,6 A. Quelle est l'intensité I délivrée par le générateur ?",
      reponse: "I = I1 + I2 = 0,4 + 0,6 = 1 A",
      explication: "Loi d'additivité des intensités dans un circuit en dérivation : l'intensité totale est la somme des intensités des branches.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un circuit en dérivation, la tension aux bornes de chaque branche est :",
      choix: [
        "toujours différente d'une branche à l'autre",
        "la somme des tensions des autres branches",
        "égale à la tension du générateur, la même pour chaque branche",
        "toujours nulle",
      ],
      bonneReponse: 2,
      explication: "Loi d'unicité de la tension : dans un circuit en dérivation, chaque branche a la même tension à ses bornes, égale à celle du générateur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi un court-circuit est dangereux, en utilisant le vocabulaire de l'intensité.",
      reponse:
        "Un court-circuit relie directement les deux bornes du générateur, sans récepteur pour limiter le courant. L'intensité devient alors très grande, ce qui provoque un échauffement important des fils et peut causer un incendie ou détruire la pile.",
      explication: "Sans résistance pour limiter le passage du courant, l'intensité augmente fortement et dégage beaucoup de chaleur.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un circuit série comporte trois lampes identiques. U1 = U2 = U3 = 1,5 V. Quelle est la tension totale du générateur ?",
      choix: ["1,5 V", "3 V", "4,5 V", "6 V"],
      bonneReponse: 2,
      explication: "U = U1 + U2 + U3 = 1,5 + 1,5 + 1,5 = 4,5 V, par la loi d'additivité des tensions.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un circuit en dérivation comporte deux branches. L'intensité totale délivrée par le générateur est 0,8 A. La première branche a une intensité de 0,3 A. Quelle est l'intensité dans la deuxième branche ?",
      reponse: "I2 = I − I1 = 0,8 − 0,3 = 0,5 A",
      explication: "D'après la loi d'additivité des intensités, I = I1 + I2, donc I2 = I − I1.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un élève veut mesurer la tension aux bornes d'une lampe. Il branche par erreur son voltmètre en série dans le circuit. Que va-t-il probablement observer, et pourquoi ?",
      reponse:
        "La lampe risque de ne pas s'allumer ou de briller très faiblement, car un voltmètre branché en série se comporte comme un obstacle qui empêche presque tout le courant de passer. Le voltmètre doit être branché en dérivation, pas en série.",
      explication: "Un voltmètre est conçu pour mesurer une tension sans être traversé par un courant important ; branché en série, il bloque quasiment le passage du courant.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'unité de la tension électrique est :",
      choix: ["l'ampère", "le volt", "le watt", "le joule"],
      bonneReponse: 1,
      explication: "La tension U s'exprime en volts (V).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel appareil mesure l'intensité et comment se branche-t-il ?",
      reponse: "L'ampèremètre, branché en série dans le circuit.",
      explication: "À ne pas confondre avec le voltmètre, qui se branche en dérivation.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un circuit série à deux lampes, si l'une des lampes grille :",
      choix: [
        "seule cette lampe s'éteint, l'autre continue",
        "les deux lampes s'éteignent, le circuit est interrompu",
        "les deux lampes brillent plus fort",
        "rien ne change",
      ],
      bonneReponse: 1,
      explication: "Un circuit série n'offre qu'un seul chemin : la moindre coupure arrête tout le circuit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un circuit en dérivation, U1 = U2 = 4,5 V. Que peux-tu dire de la tension du générateur ?",
      reponse: "Elle vaut aussi 4,5 V, car dans un circuit en dérivation, la tension est la même dans chaque branche que celle du générateur.",
      explication: "C'est la loi d'unicité de la tension dans un circuit en dérivation.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi un court-circuit provoque-t-il un échauffement dangereux ?",
      reponse: "Parce que l'intensité devient très grande, rien ne la limitant, ce qui dégage beaucoup de chaleur dans les fils.",
      explication: "C'est pourquoi les installations électriques sont protégées par des fusibles ou des disjoncteurs.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Intensité et tension électriques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel appareil mesure une tension électrique ?",
          choix: ["L'ampèremètre", "Le voltmètre", "Le thermomètre", "Le baromètre"],
          bonneReponse: 1,
          explication: "Le voltmètre mesure la tension U, en volts, branché en dérivation.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne l'unité de l'intensité et l'unité de la tension, avec leurs symboles.",
          reponse: "Intensité : ampère (A). Tension : volt (V).",
          explication: "I se mesure en ampères, U se mesure en volts.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans un circuit série, la loi d'additivité concerne :",
          choix: ["l'intensité", "la tension", "la résistance", "la puissance"],
          bonneReponse: 1,
          explication: "Dans un circuit série, ce sont les tensions qui s'additionnent (U = U1 + U2), tandis que l'intensité est unique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un circuit série comporte deux lampes. La tension du générateur est 9 V, la tension aux bornes de la première lampe est 3,5 V. Quelle est la tension aux bornes de la deuxième lampe ?",
          reponse: "U2 = U − U1 = 9 − 3,5 = 5,5 V",
          explication: "D'après la loi d'additivité des tensions, U = U1 + U2, donc U2 = U − U1.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique la différence entre les lois de l'intensité et de la tension dans un circuit série et dans un circuit en dérivation.",
          reponse:
            "Circuit série : l'intensité est unique (I = I1 = I2) et les tensions s'additionnent (U = U1 + U2). Circuit en dérivation : la tension est unique dans chaque branche (U = U1 = U2) et les intensités s'additionnent (I = I1 + I2).",
          explication: "Ces deux couples de lois sont symétriques : ce qui est unique dans un montage devient additif dans l'autre.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi ne faut-il jamais brancher un ampèremètre en dérivation dans un circuit ?",
          choix: [
            "Cela ne mesure rien du tout",
            "Cela risque de provoquer un courant très intense et d'endommager l'appareil",
            "Cela n'a aucune conséquence",
            "Cela mesure une tension au lieu d'une intensité",
          ],
          bonneReponse: 1,
          explication: "Un ampèremètre a une résistance très faible ; branché en dérivation, il court-circuite le dipôle et laisse passer un courant très intense qui peut l'endommager.",
        },
      ],
    },
    {
      titre: "Examen 2 — Intensité et tension électriques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un ampèremètre se branche :",
          choix: ["en dérivation", "en série", "hors du circuit", "en parallèle de la pile uniquement"],
          bonneReponse: 1,
          explication: "L'ampèremètre se branche toujours en série, dans le chemin du courant.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un court-circuit ?",
          reponse: "Une liaison directe entre les deux bornes d'un générateur, sans récepteur pour limiter le courant.",
          explication: "Cela provoque une intensité très grande et dangereuse.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans un circuit en dérivation à deux branches, I1 = 0,5 A et I = 1,2 A (intensité totale). Quelle est l'intensité I2 ?",
          choix: ["0,5 A", "0,7 A", "1,2 A", "1,7 A"],
          bonneReponse: 1,
          explication: "I = I1 + I2, donc I2 = I − I1 = 1,2 − 0,5 = 0,7 A.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique comment tu procéderais pour mesurer la tension aux bornes d'une lampe dans un circuit.",
          reponse:
            "Je règle le multimètre en voltmètre, je choisis un calibre adapté, puis je branche les deux bornes du voltmètre directement aux deux bornes de la lampe (en dérivation), sans modifier le reste du circuit.",
          explication: "Le voltmètre ne doit jamais être inséré dans le circuit principal : il se pose « à côté », en dérivation.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un circuit série alimente trois lampes identiques avec un générateur de 6 V. Sachant que les trois lampes ont la même tension à leurs bornes, calcule la tension aux bornes d'une lampe.",
          reponse: "U = U1 + U2 + U3 et U1 = U2 = U3, donc U1 = 6 / 3 = 2 V.",
          explication: "La tension totale se répartit également entre des récepteurs identiques placés en série.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Que se passe-t-il si on ajoute une troisième branche à un circuit en dérivation, sans rien changer d'autre ?",
          choix: [
            "La tension dans chaque branche change forcément",
            "L'intensité totale délivrée par le générateur peut augmenter, car elle est la somme des intensités des branches",
            "L'intensité totale diminue obligatoirement",
            "Rien ne change jamais",
          ],
          bonneReponse: 1,
          explication: "Selon la loi d'additivité des intensités, ajouter une branche ajoute généralement une intensité supplémentaire à la somme totale, tandis que la tension de chaque branche reste égale à celle du générateur.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'intensité I (ampères, A) se mesure avec un ampèremètre branché EN SÉRIE.",
    "La tension U (volts, V) se mesure avec un voltmètre branché EN DÉRIVATION.",
    "Circuit série : loi d'unicité de l'intensité (I = I1 = I2) et loi d'additivité des tensions (U = U1 + U2).",
    "Circuit en dérivation : loi d'unicité de la tension (U = U1 = U2) et loi d'additivité des intensités (I = I1 + I2).",
    "Un court-circuit relie directement les bornes du générateur : l'intensité devient très grande, danger d'échauffement et d'incendie.",
    "Erreur classique à éviter : confondre les branchements — l'ampèremètre en série, le voltmètre en dérivation, jamais l'inverse.",
  ],
},
{
  slug: "pression",
  titre: "La pression",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Comprendre la notion de pression, connaître son unité (le pascal), savoir mesurer une pression, découvrir la pression atmosphérique et la relation entre pression et volume d'un gaz à température constante.",
  objectifs: [
    "Définir la pression comme une force exercée sur une surface",
    "Connaître l'unité de pression, le pascal (Pa), et utiliser la formule P = F / S",
    "Comprendre ce qu'est la pression atmosphérique et savoir la mesurer avec un baromètre",
    "Savoir mesurer la pression d'un gaz avec un manomètre",
    "Comprendre la relation entre pression et volume d'un gaz à température constante (loi de Boyle-Mariotte)",
  ],
  slides: [
    {
      titre: "Qu'est-ce que la pression ?",
      illustration: "🖐️",
      visuel: "Force répartie sur une surface",
      contenu: [
        "La pression traduit l'effet d'une force répartie sur une surface",
        "À force égale, plus la surface est petite, plus la pression est grande",
        "Exemple : un talon aiguille marque plus le sol qu'une chaussure plate, à poids égal",
        "La pression s'exerce aussi bien dans les liquides et les gaz que sur les solides",
      ],
      voixOff:
        "La pression traduit l'effet d'une force qui se répartit sur une surface. À force égale, plus la surface sur laquelle elle s'applique est petite, plus la pression exercée est grande. C'est pour cela qu'un talon aiguille marque bien plus le sol qu'une chaussure à semelle plate, alors que la personne pèse exactement le même poids. La notion de pression s'applique aussi bien aux solides qu'aux liquides et aux gaz.",
    },
    {
      titre: "L'unité de pression : le pascal",
      illustration: "🧮",
      visuel: "P = F / S",
      contenu: [
        "La pression P se calcule avec la formule P = F / S",
        "F : force en newtons (N), S : surface en mètres carrés (m²)",
        "L'unité de pression est le pascal, symbole Pa (1 Pa = 1 N/m²)",
        "Le pascal est une unité petite : on utilise souvent l'hectopascal (1 hPa = 100 Pa) ou le bar (1 bar = 100 000 Pa)",
      ],
      voixOff:
        "La pression, notée P, se calcule en divisant la force F, exprimée en newtons, par la surface S sur laquelle elle s'applique, exprimée en mètres carrés. L'unité de pression est le pascal, de symbole Pa, en hommage au scientifique Blaise Pascal : un pascal correspond à une force d'un newton répartie sur une surface d'un mètre carré. Le pascal étant une unité assez petite pour un usage courant, on utilise souvent l'hectopascal, qui vaut cent pascals, ou le bar, qui vaut cent mille pascals.",
    },
    {
      titre: "La pression atmosphérique",
      illustration: "🌍",
      visuel: "P atm ≈ 1013 hPa",
      contenu: [
        "L'air qui nous entoure exerce une pression sur tout ce qu'il touche : la pression atmosphérique",
        "Au niveau de la mer, elle vaut environ 1013 hPa (soit 101 300 Pa)",
        "Elle diminue avec l'altitude : il y a moins d'air au-dessus de nous en montagne",
        "C'est pour cela que l'air se raréfie en haute montagne",
      ],
      voixOff:
        "L'atmosphère qui nous entoure, bien qu'invisible, exerce une pression sur tout ce qu'elle touche : c'est la pression atmosphérique. Au niveau de la mer, elle vaut environ mille treize hectopascals, soit cent un mille trois cents pascals. Cette pression diminue avec l'altitude, car il y a de moins en moins d'air au-dessus de nous à mesure que l'on monte : c'est pour cette raison que l'air se raréfie en haute montagne, ce qui rend la respiration plus difficile.",
    },
    {
      titre: "Mesurer une pression : baromètre et manomètre",
      illustration: "📊",
      visuel: "Baromètre • Manomètre",
      contenu: [
        "Le baromètre mesure la pression atmosphérique",
        "Le manomètre mesure la pression d'un gaz dans une enceinte fermée (pneu, bouteille de plongée...)",
        "Une baisse de pression atmosphérique annonce souvent un temps pluvieux",
        "Un pneu de voiture est gonflé à environ 2 à 2,5 bar",
      ],
      voixOff:
        "Pour mesurer la pression atmosphérique, on utilise un baromètre : une baisse de pression annonce souvent l'arrivée d'un temps pluvieux, tandis qu'une hausse annonce plutôt du beau temps. Pour mesurer la pression d'un gaz enfermé dans une enceinte, comme un pneu ou une bouteille de plongée, on utilise un manomètre. À titre d'exemple, un pneu de voiture est habituellement gonflé à une pression d'environ deux à deux virgule cinq bars.",
    },
    {
      titre: "Un gaz enfermé exerce une pression",
      illustration: "🎈",
      visuel: "Chocs des molécules sur les parois",
      contenu: [
        "Les molécules d'un gaz sont en mouvement permanent et désordonné",
        "Elles frappent sans cesse les parois du récipient qui les contient",
        "C'est l'ensemble de ces chocs qui produit la pression du gaz",
        "Plus les chocs sont nombreux ou violents, plus la pression est grande",
      ],
      voixOff:
        "À l'échelle microscopique, les molécules d'un gaz sont en mouvement permanent et désordonné, se déplaçant dans toutes les directions à grande vitesse. Lorsqu'elles rencontrent la paroi du récipient qui les contient, elles la percutent, puis rebondissent. C'est l'ensemble de ces innombrables chocs qui produit ce que l'on appelle la pression du gaz. Plus les chocs sont nombreux ou violents, plus la pression est grande.",
    },
    {
      titre: "Pression et volume d'un gaz",
      illustration: "🔄",
      visuel: "P × V = constante (à température constante)",
      contenu: [
        "À température constante, si l'on diminue le volume d'un gaz, sa pression augmente",
        "À température constante, si l'on augmente le volume d'un gaz, sa pression diminue",
        "C'est la loi de Boyle-Mariotte : le produit P × V reste constant",
        "Explication microscopique : dans un volume plus petit, les chocs sur les parois sont plus fréquents",
      ],
      voixOff:
        "Il existe une relation entre la pression et le volume d'un gaz, à température constante : c'est la loi de Boyle-Mariotte. Si l'on comprime un gaz, c'est-à-dire si l'on diminue son volume, sa pression augmente. À l'inverse, si l'on augmente son volume, sa pression diminue. Le produit de la pression par le volume reste alors constant. On comprend facilement pourquoi grâce au modèle des chocs : dans un volume plus petit, les molécules percutent les parois plus souvent, donc la pression augmente.",
    },
    {
      titre: "La pression dans la vie courante",
      illustration: "🚲",
      visuel: "Pneu • Seringue • Ventouse • Plongée",
      contenu: [
        "Gonfler un pneu, c'est enfermer de plus en plus d'air dans un volume presque constant : la pression augmente",
        "Boucher la sortie d'une seringue et pousser le piston comprime l'air : la pression augmente, le piston résiste",
        "Une ventouse colle grâce à la pression atmosphérique qui la plaque contre la surface",
        "Un plongeur ressent une pression plus forte en profondeur, car l'eau au-dessus de lui pèse davantage",
      ],
      voixOff:
        "La pression est présente partout dans la vie courante. Gonfler un pneu revient à enfermer de plus en plus d'air dans un volume presque constant : la pression augmente. Si l'on bouche la sortie d'une seringue et que l'on pousse le piston, on comprime l'air à l'intérieur, et le piston résiste de plus en plus. Une ventouse tient grâce à la pression atmosphérique qui la plaque contre la surface. Et un plongeur ressent une pression de plus en plus forte à mesure qu'il descend, car l'eau au-dessus de lui devient de plus en plus lourde.",
    },
    {
      titre: "Sécurité : les récipients sous pression",
      illustration: "⚠️",
      visuel: "Attention : danger !",
      contenu: [
        "Une bombe aérosol, une cocotte-minute ou une bouteille de gaz contiennent un gaz ou un liquide sous pression",
        "Il ne faut jamais les percer, les chauffer fortement, ou les jeter au feu",
        "Une trop forte pression peut faire exploser le récipient",
        "Les valves et soupapes de sécurité limitent la pression maximale",
      ],
      voixOff:
        "Certains objets du quotidien contiennent un gaz ou un liquide sous pression, comme une bombe aérosol, une cocotte-minute ou une bouteille de gaz. Il est très dangereux de les percer, de les chauffer fortement, ou de les jeter au feu : la pression à l'intérieur augmenterait fortement et pourrait faire exploser le récipient. C'est pourquoi ces objets sont équipés de valves ou de soupapes de sécurité, qui limitent la pression maximale en laissant échapper le gaz avant qu'elle ne devienne dangereuse.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Pression P = F / S, en pascals (Pa) ; 1 Pa = 1 N/m²",
        "Pression atmosphérique au niveau de la mer ≈ 1013 hPa, diminue avec l'altitude",
        "Baromètre (pression atmosphérique), manomètre (pression d'un gaz enfermé)",
        "À température constante, quand le volume d'un gaz diminue, sa pression augmente (et inversement)",
      ],
      voixOff:
        "Résumons. La pression se calcule avec la formule P égale F sur S, et s'exprime en pascals. La pression atmosphérique, au niveau de la mer, vaut environ mille treize hectopascals, et diminue avec l'altitude. On la mesure avec un baromètre, tandis qu'un manomètre mesure la pression d'un gaz enfermé. Enfin, retiens la loi de Boyle-Mariotte : à température constante, si l'on diminue le volume d'un gaz, sa pression augmente, et inversement.",
    },
  ],
  fiche: {
    intro:
      "La pression traduit l'effet d'une force répartie sur une surface. Elle s'exprime en pascals et se retrouve partout : dans l'air qui nous entoure (pression atmosphérique), dans les gaz enfermés (pneu, bouteille), et dans les liquides.",
    sections: [
      {
        titre: "Définir la pression",
        points: [
          "La pression traduit l'effet d'une force répartie sur une surface",
          "Formule : P = F / S (F en newtons, S en mètres carrés)",
          "Unité : le pascal (Pa) ; 1 Pa = 1 N/m² ; sous-multiples : hectopascal (1 hPa = 100 Pa), bar (1 bar = 100 000 Pa)",
        ],
      },
      {
        titre: "La pression atmosphérique",
        points: [
          "L'air exerce une pression sur tout ce qu'il touche : la pression atmosphérique",
          "Au niveau de la mer : environ 1013 hPa",
          "Elle diminue avec l'altitude (moins d'air au-dessus de nous)",
          "Se mesure avec un baromètre",
        ],
      },
      {
        titre: "La pression d'un gaz enfermé",
        points: [
          "Due aux chocs incessants des molécules du gaz sur les parois du récipient",
          "Se mesure avec un manomètre",
          "Exemples : pneu de voiture (≈ 2 à 2,5 bar), bouteille de plongée",
        ],
      },
      {
        titre: "Pression et volume : la loi de Boyle-Mariotte",
        points: [
          "À température constante, P × V reste constant",
          "Diminuer le volume d'un gaz augmente sa pression (compression)",
          "Augmenter le volume d'un gaz diminue sa pression",
          "Sécurité : ne jamais percer ou chauffer un récipient sous pression",
        ],
      },
    ],
    audio:
      "Fiche de révision : la pression. La pression traduit l'effet d'une force répartie sur une surface : elle se calcule avec la formule P égale F sur S, où F est la force en newtons et S la surface en mètres carrés. Elle s'exprime en pascals. L'air qui nous entoure exerce lui aussi une pression, la pression atmosphérique, qui vaut environ mille treize hectopascals au niveau de la mer et qui diminue avec l'altitude ; on la mesure avec un baromètre. La pression d'un gaz enfermé, comme dans un pneu, est due aux chocs incessants des molécules sur les parois du récipient ; on la mesure avec un manomètre. Enfin, la loi de Boyle-Mariotte relie la pression et le volume d'un gaz à température constante : si l'on diminue le volume, la pression augmente, et inversement, le produit de la pression par le volume restant constant. Il faut toujours faire attention aux récipients sous pression, qui peuvent exploser s'ils sont percés ou chauffés fortement.",
  },
  memoCards: [
    { recto: "Formule de la pression ?", verso: "P = F / S (F : force en newtons, S : surface en m²)." },
    { recto: "Unité de la pression ?", verso: "Le pascal (Pa). 1 Pa = 1 N/m². On utilise aussi l'hectopascal (100 Pa) et le bar (100 000 Pa)." },
    { recto: "Valeur de la pression atmosphérique au niveau de la mer ?", verso: "Environ 1013 hPa (101 300 Pa)." },
    { recto: "Comment évolue la pression atmosphérique avec l'altitude ?", verso: "Elle diminue : il y a moins d'air au-dessus de nous en altitude." },
    { recto: "Quel appareil mesure la pression atmosphérique ?", verso: "Le baromètre." },
    { recto: "Quel appareil mesure la pression d'un gaz enfermé ?", verso: "Le manomètre." },
    { recto: "D'où vient la pression d'un gaz enfermé, à l'échelle microscopique ?", verso: "Des chocs incessants des molécules du gaz sur les parois du récipient." },
    { recto: "Que dit la loi de Boyle-Mariotte ?", verso: "À température constante, P × V reste constant : diminuer le volume augmente la pression, et inversement." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'unité de la pression est :",
      choix: ["le newton", "le pascal", "le mètre carré", "le bar uniquement"],
      bonneReponse: 1,
      explication: "L'unité légale de pression est le pascal (Pa). Le bar et l'hectopascal sont des unités dérivées, plus pratiques dans la vie courante.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La formule de la pression est :",
      choix: ["P = F × S", "P = F / S", "P = S / F", "P = F + S"],
      bonneReponse: 1,
      explication: "P = F / S, avec F en newtons et S en mètres carrés, donne une pression en pascals.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel appareil utilise-t-on pour mesurer la pression atmosphérique ?",
      reponse: "Le baromètre.",
      explication: "Le manomètre, lui, sert à mesurer la pression d'un gaz enfermé (pneu, bouteille...).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La pression atmosphérique au niveau de la mer vaut environ :",
      choix: ["10 Pa", "1013 hPa", "1013 Pa", "100 bar"],
      bonneReponse: 1,
      explication: "La pression atmosphérique moyenne au niveau de la mer est d'environ 1013 hectopascals, soit 101 300 pascals.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une force de 200 N s'exerce sur une surface de 0,5 m². Calcule la pression exercée.",
      reponse: "P = F / S = 200 / 0,5 = 400 Pa",
      explication: "On applique directement la formule P = F / S avec des unités cohérentes (N et m²).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "À force égale, si l'on diminue la surface de contact, la pression :",
      choix: ["diminue", "augmente", "reste identique", "devient nulle"],
      bonneReponse: 1,
      explication: "P = F / S : à force constante, réduire S fait augmenter P. C'est pour cela qu'un talon fin marque plus le sol qu'une semelle large.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique, à l'échelle des molécules, pourquoi un gaz enfermé exerce une pression sur les parois de son récipient.",
      reponse:
        "Les molécules du gaz sont en mouvement permanent et désordonné. Elles frappent sans cesse les parois du récipient, et c'est l'ensemble de ces chocs qui produit la pression.",
      explication: "C'est le modèle moléculaire qui explique l'origine microscopique de la pression d'un gaz.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "À température constante, si l'on diminue le volume d'un gaz enfermé :",
      choix: [
        "sa pression diminue",
        "sa pression augmente",
        "sa pression reste identique",
        "le gaz disparaît",
      ],
      bonneReponse: 1,
      explication: "Loi de Boyle-Mariotte : comprimer un gaz (réduire son volume) à température constante augmente sa pression.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un skieur de poids 700 N chausse des skis de surface totale 0,4 m². Sans les skis, ses chaussures ont une surface totale au sol de 0,04 m². Calcule la pression exercée sur la neige dans les deux cas, et explique l'intérêt des skis.",
      reponse:
        "Avec skis : P = 700 / 0,4 = 1750 Pa. Sans skis : P = 700 / 0,04 = 17 500 Pa. Les skis répartissent le poids sur une surface dix fois plus grande, ce qui divise la pression par dix : le skieur s'enfonce beaucoup moins dans la neige.",
      explication: "À force égale, augmenter la surface de contact diminue fortement la pression exercée.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une seringue fermée contient de l'air à un volume de 20 mL sous une pression de 1000 hPa. On pousse le piston jusqu'à un volume de 10 mL, sans changement de température. Quelle est la nouvelle pression, sachant que P × V reste constant ?",
      reponse: "P1 × V1 = P2 × V2, donc 1000 × 20 = P2 × 10, donc P2 = 20 000 / 10 = 2000 hPa.",
      explication: "En divisant le volume par 2, la pression est multipliée par 2 : c'est la loi de Boyle-Mariotte.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Pourquoi ne faut-il jamais jeter une bombe aérosol vide dans le feu ?",
      choix: [
        "Parce qu'elle est toujours pleine de liquide dangereux",
        "Parce que la chaleur augmente la pression du gaz restant à l'intérieur, risquant de faire exploser le récipient",
        "Parce que le métal fond instantanément sans risque",
        "Il n'y a aucun risque, une bombe vide est totalement sûre",
      ],
      bonneReponse: 1,
      explication: "Même « vide » d'usage, l'aérosol contient encore du gaz sous pression : le chauffer augmente cette pression jusqu'à un risque d'explosion.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un plongeur descend en profondeur. Explique pourquoi la pression qu'il subit augmente avec la profondeur.",
      reponse:
        "Plus le plongeur descend, plus la colonne d'eau au-dessus de lui est haute et donc plus elle est lourde. Le poids de cette eau, ajouté à la pression atmosphérique en surface, augmente la pression totale subie par le plongeur.",
      explication: "La pression dans un liquide augmente avec la profondeur, car elle dépend du poids du liquide situé au-dessus du point considéré.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est l'unité légale de la pression ?",
      choix: ["le newton", "le pascal", "le litre", "le mètre"],
      bonneReponse: 1,
      explication: "La pression s'exprime en pascals (Pa).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris la formule de la pression avec les unités de chaque grandeur.",
      reponse: "P = F / S, avec P en pascals (Pa), F en newtons (N), S en mètres carrés (m²).",
      explication: "C'est la relation fondamentale entre force, surface et pression.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment évolue la pression atmosphérique quand on monte en altitude ?",
      reponse: "Elle diminue, car il y a de moins en moins d'air au-dessus de nous.",
      explication: "C'est pourquoi l'air se raréfie en haute montagne.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que dit la loi de Boyle-Mariotte ?",
      choix: [
        "La pression est indépendante du volume",
        "À température constante, le produit P × V reste constant",
        "Le volume d'un gaz est toujours constant",
        "La pression d'un gaz est toujours nulle",
      ],
      bonneReponse: 1,
      explication: "Comprimer un gaz (diminuer son volume) à température constante augmente sa pression, en gardant P × V constant.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel appareil utilise-t-on pour mesurer la pression d'un pneu de voiture ?",
      reponse: "Un manomètre.",
      explication: "Le manomètre mesure la pression d'un gaz enfermé dans une enceinte, comme un pneu ou une bouteille de plongée.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La pression",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "1 hectopascal (hPa) est égal à :",
          choix: ["1 Pa", "10 Pa", "100 Pa", "1000 Pa"],
          bonneReponse: 2,
          explication: "Le préfixe « hecto » signifie cent : 1 hPa = 100 Pa.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la pression atmosphérique ?",
          reponse: "C'est la pression exercée par l'air qui nous entoure sur tout ce qu'il touche.",
          explication: "Elle vaut environ 1013 hPa au niveau de la mer et diminue avec l'altitude.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une force de 60 N s'exerce sur une surface de 0,2 m². Quelle est la pression ?",
          choix: ["12 Pa", "30 Pa", "300 Pa", "0,003 Pa"],
          bonneReponse: 2,
          explication: "P = F / S = 60 / 0,2 = 300 Pa.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique, avec le modèle des chocs de molécules, ce qui se passe quand on comprime un gaz dans un récipient fermé (volume qui diminue, température constante).",
          reponse:
            "En diminuant le volume, les molécules du gaz sont plus rapprochées et disposent de moins d'espace. Elles percutent donc les parois du récipient plus fréquemment, ce qui augmente la pression du gaz.",
          explication: "C'est l'explication microscopique de la loi de Boyle-Mariotte.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un gaz occupe un volume de 4 L sous une pression de 2 bar. On le comprime à volume constant de température jusqu'à un volume de 1 L. Calcule la nouvelle pression.",
          reponse: "P1 × V1 = P2 × V2, donc 2 × 4 = P2 × 1, donc P2 = 8 bar.",
          explication: "En divisant le volume par 4, la pression est multipliée par 4, conformément à la loi de Boyle-Mariotte.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Pourquoi les alpinistes en très haute altitude doivent-ils souvent utiliser des bouteilles d'oxygène ?",
          choix: [
            "Parce que la pression atmosphérique, très faible en altitude, rend l'air trop raréfié pour respirer normalement",
            "Parce qu'il n'y a plus du tout d'air en montagne",
            "Parce que la pression atmosphérique est plus forte en altitude",
            "Cela n'a aucun rapport avec la pression",
          ],
          bonneReponse: 0,
          explication: "En haute altitude, la pression atmosphérique diminue fortement, l'air se raréfie et devient insuffisant pour une respiration normale.",
        },
      ],
    },
    {
      titre: "Examen 2 — La pression",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel appareil mesure la pression d'un gaz enfermé dans une bouteille ?",
          choix: ["Le baromètre", "Le manomètre", "Le thermomètre", "Le voltmètre"],
          bonneReponse: 1,
          explication: "Le manomètre mesure la pression d'un gaz enfermé, contrairement au baromètre qui mesure la pression atmosphérique.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la formule de la pression et précise l'unité de chaque grandeur.",
          reponse: "P = F / S. P en pascals (Pa), F en newtons (N), S en mètres carrés (m²).",
          explication: "1 Pa correspond à une force de 1 N répartie sur une surface de 1 m².",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "À force constante, si la surface de contact double, la pression :",
          choix: ["double", "est divisée par deux", "reste identique", "devient nulle"],
          bonneReponse: 1,
          explication: "P = F / S : si S double à F constant, P est divisée par deux.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une raquette de neige répartit le poids d'un randonneur sur une plus grande surface que sa chaussure seule. Explique pourquoi cela l'empêche de s'enfoncer dans la neige.",
          reponse:
            "À poids (force) identique, augmenter la surface de contact avec la raquette diminue la pression exercée sur la neige (P = F / S). La neige, moins comprimée localement, supporte mieux le randonneur qui s'enfonce donc moins.",
          explication: "C'est le même principe que les skis ou les pneus larges : augmenter la surface diminue la pression.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On enferme 500 mL d'air dans une seringue fermée, à une pression de 1 bar. On tire le piston pour porter le volume à 1000 mL, sans changer la température. Calcule la nouvelle pression.",
          reponse: "P1 × V1 = P2 × V2, donc 1 × 500 = P2 × 1000, donc P2 = 0,5 bar.",
          explication: "En doublant le volume, la pression est divisée par deux, conformément à la loi de Boyle-Mariotte.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Quel danger principal présente une cocotte-minute que l'on chaufferait en bloquant sa soupape de sécurité ?",
          choix: [
            "Aucun danger, la cocotte est parfaitement étanche",
            "La pression intérieure augmenterait sans limite et pourrait faire exploser la cocotte",
            "La nourriture cuirait plus lentement",
            "La température resterait toujours identique",
          ],
          bonneReponse: 1,
          explication: "Sans soupape pour évacuer l'excès de gaz, la pression à l'intérieur augmenterait dangereusement avec la chaleur, jusqu'au risque d'explosion.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La pression traduit l'effet d'une force répartie sur une surface : P = F / S, en pascals (Pa).",
    "À force égale, plus la surface est petite, plus la pression est grande.",
    "La pression atmosphérique (≈ 1013 hPa au niveau de la mer) diminue avec l'altitude ; elle se mesure avec un baromètre.",
    "La pression d'un gaz enfermé provient des chocs des molécules sur les parois ; elle se mesure avec un manomètre.",
    "Loi de Boyle-Mariotte : à température constante, P × V reste constant (diminuer le volume augmente la pression, et inversement).",
    "Sécurité : ne jamais percer ni chauffer fortement un récipient contenant un gaz sous pression (aérosol, cocotte-minute, bouteille de gaz).",
  ],
},
{
  slug: "transformations-chimiques",
  titre: "Les transformations chimiques",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Distinguer transformation physique et transformation chimique, identifier réactifs et produits, utiliser les tests caractéristiques des espèces chimiques courantes, écrire l'équation d'une réaction et comprendre la conservation de la masse.",
  objectifs: [
    "Distinguer une transformation physique d'une transformation chimique",
    "Identifier les réactifs (consommés) et les produits (formés) d'une réaction chimique",
    "Connaître les tests caractéristiques du dioxygène, du dioxyde de carbone, du dihydrogène et de l'eau",
    "Écrire l'équation d'une réaction chimique avec les noms des espèces",
    "Savoir que la masse totale se conserve au cours d'une transformation chimique (loi de Lavoisier)",
  ],
  slides: [
    {
      titre: "Reconnaître une transformation chimique",
      illustration: "⚗️",
      visuel: "Réactifs → Produits",
      contenu: [
        "Une transformation chimique change la nature de la matière",
        "De nouvelles substances apparaissent, différentes de celles du début",
        "Elle s'accompagne souvent d'un signe observable : gaz, changement de couleur, flamme, dégagement de chaleur",
        "Exemples : le fer qui rouille, une bougie qui brûle, un fruit qui mûrit",
      ],
      voixOff:
        "Une transformation chimique est une transformation au cours de laquelle la matière change de nature : de nouvelles substances apparaissent, différentes de celles de départ. On la repère souvent grâce à un signe observable : un dégagement de gaz, un changement de couleur, une flamme, ou un dégagement de chaleur. Le fer qui rouille, une bougie qui brûle, ou un fruit qui mûrit sont des exemples de transformations chimiques.",
    },
    {
      titre: "Réactifs et produits",
      illustration: "🧪",
      visuel: "Réactifs → Produits",
      contenu: [
        "Les réactifs sont les espèces chimiques consommées, présentes au début",
        "Les produits sont les espèces chimiques formées, présentes à la fin",
        "La flèche → se lit « réagissent pour donner »",
        "Exemple : fer + acide chlorhydrique → chlorure de fer + dihydrogène",
      ],
      voixOff:
        "Dans toute réaction chimique, on distingue deux familles d'espèces chimiques. Les réactifs sont les espèces consommées, présentes au tout début de la transformation. Les produits sont les espèces formées, présentes à la fin. On les relie par une flèche, qui se lit « réagissent pour donner ». Par exemple : fer plus acide chlorhydrique donnent chlorure de fer plus dihydrogène.",
    },
    {
      titre: "Identifier le dioxygène et le dioxyde de carbone",
      illustration: "🔥",
      visuel: "Bûchette incandescente • Eau de chaux",
      contenu: [
        "Test du dioxygène (O2) : une bûchette incandescente se ranime (se rallume) au contact du gaz",
        "Test du dioxyde de carbone (CO2) : l'eau de chaux se trouble et devient blanche laiteuse",
        "Ces tests permettent d'identifier un gaz incolore sans le voir",
        "Chaque espèce chimique possède un test caractéristique qui lui est propre",
      ],
      voixOff:
        "Comment reconnaître un gaz incolore ? Grâce à des tests caractéristiques. Pour identifier le dioxygène, on approche une bûchette incandescente, qui vient de s'éteindre : si elle se ranime, c'est-à-dire si elle se rallume, le gaz est bien du dioxygène. Pour identifier le dioxyde de carbone, on fait barboter le gaz dans de l'eau de chaux : si elle se trouble et devient blanche laiteuse, le gaz est bien du dioxyde de carbone.",
    },
    {
      titre: "Identifier le dihydrogène et l'eau",
      illustration: "💧",
      visuel: "Flamme + « pop » • Sulfate de cuivre bleu",
      contenu: [
        "Test du dihydrogène (H2) : approché d'une flamme, il produit une petite détonation, un « pop »",
        "Test de l'eau : le sulfate de cuivre anhydre, blanc, devient bleu au contact de l'eau",
        "Ces deux tests sont à connaître par cœur",
        "Ils permettent de vérifier la présence d'une espèce, pas de la quantifier",
      ],
      voixOff:
        "Deux autres tests à connaître. Pour identifier le dihydrogène, on approche le gaz recueilli d'une flamme : s'il produit une petite détonation, un « pop » caractéristique, c'est bien du dihydrogène. Pour identifier l'eau liquide, on utilise du sulfate de cuivre anhydre, une poudre blanche : au contact de l'eau, elle devient bleue. Ces tests confirment la présence d'une espèce chimique, mais ne disent pas combien il y en a.",
    },
    {
      titre: "Une réaction chimique : le fer et l'acide",
      illustration: "⚙️",
      visuel: "fer + acide chlorhydrique → chlorure de fer + dihydrogène",
      contenu: [
        "Quand on plonge un clou de fer dans de l'acide chlorhydrique, des bulles de gaz apparaissent",
        "Le test à la flamme montre que ce gaz est du dihydrogène",
        "Le fer disparaît peu à peu : c'est un réactif consommé",
        "Équation : fer + acide chlorhydrique → chlorure de fer + dihydrogène",
      ],
      voixOff:
        "Prenons un exemple concret. On plonge un clou de fer dans de l'acide chlorhydrique : des bulles de gaz se forment aussitôt. Le test à la flamme confirme que ce gaz est du dihydrogène. Le clou de fer, lui, disparaît peu à peu : c'est un réactif consommé. On écrit l'équation de cette réaction ainsi : fer plus acide chlorhydrique donnent chlorure de fer plus dihydrogène.",
    },
    {
      titre: "Écrire l'équation d'une réaction",
      illustration: "✍️",
      visuel: "réactif 1 + réactif 2 → produit 1 + produit 2",
      contenu: [
        "On écrit les noms des réactifs à gauche de la flèche, séparés par le signe +",
        "On écrit les noms des produits à droite de la flèche, séparés par le signe +",
        "La flèche indique le sens de la transformation",
        "Exemple : carbone + dioxygène → dioxyde de carbone",
      ],
      voixOff:
        "Pour écrire l'équation d'une réaction chimique avec des mots, on place les réactifs à gauche d'une flèche, séparés par un signe plus s'il y en a plusieurs. On place les produits à droite de la flèche, séparés eux aussi par un signe plus. La flèche indique le sens dans lequel la transformation se produit. Par exemple : carbone plus dioxygène donnent dioxyde de carbone.",
    },
    {
      titre: "La conservation de la masse",
      illustration: "⚖️",
      visuel: "masse des réactifs = masse des produits",
      contenu: [
        "Le chimiste Lavoisier a pesé des réactions dans des récipients fermés",
        "Il a montré que la masse totale ne change pas au cours d'une transformation chimique",
        "Masse des réactifs consommés = masse des produits formés",
        "« Rien ne se perd, rien ne se crée, tout se transforme »",
      ],
      voixOff:
        "Au dix-huitième siècle, le chimiste Antoine Lavoisier a réalisé des réactions dans des récipients fermés, en pesant soigneusement avant et après. Il a montré que la masse totale ne change jamais au cours d'une transformation chimique : la masse des réactifs consommés est exactement égale à la masse des produits formés. C'est la célèbre loi de Lavoisier : rien ne se perd, rien ne se crée, tout se transforme.",
    },
    {
      titre: "Transformation physique ou chimique ?",
      illustration: "🧊",
      visuel: "Physique ≠ chimique",
      contenu: [
        "Transformation physique : changement d'état, de forme, dissolution — les espèces chimiques ne changent pas",
        "Transformation chimique : de nouvelles espèces apparaissent, différentes des espèces de départ",
        "Exemple physique : le sucre dissous dans l'eau (le sucre existe toujours, dissous)",
        "Exemple chimique : le sucre qui brûle (il se transforme en carbone et en gaz)",
      ],
      voixOff:
        "Il ne faut pas confondre les deux types de transformations. Une transformation physique, comme un changement d'état ou une dissolution, ne change pas la nature des espèces chimiques : le sucre dissous dans l'eau est toujours du sucre, simplement mélangé à l'eau. Une transformation chimique, elle, fait apparaître de nouvelles espèces chimiques : quand le sucre brûle, il se transforme en carbone et en différents gaz, des espèces totalement nouvelles.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Transformation chimique = apparition de nouvelles espèces chimiques (produits) à partir des réactifs",
        "Tests à connaître : bûchette incandescente (O2), eau de chaux (CO2), détonation (H2), sulfate de cuivre (eau)",
        "Équation de réaction : réactifs → produits, avec les noms des espèces",
        "La masse totale se conserve toujours (loi de Lavoisier)",
      ],
      voixOff:
        "Résumons. Une transformation chimique fait apparaître de nouvelles espèces chimiques, les produits, à partir des réactifs qui sont consommés. Pour identifier les gaz et les liquides, on utilise des tests caractéristiques : la bûchette incandescente pour le dioxygène, l'eau de chaux pour le dioxyde de carbone, la détonation pour le dihydrogène, et le sulfate de cuivre pour l'eau. On écrit l'équation de la réaction avec les noms des réactifs et des produits, reliés par une flèche. Et surtout, retiens que la masse totale se conserve toujours : c'est la loi de Lavoisier.",
    },
  ],
  fiche: {
    intro:
      "Une transformation chimique fait apparaître de nouvelles espèces chimiques (les produits) à partir des réactifs consommés. Des tests caractéristiques permettent d'identifier les espèces formées, et la masse totale se conserve toujours.",
    sections: [
      {
        titre: "Reconnaître une transformation chimique",
        points: [
          "La matière change de nature : de nouvelles substances apparaissent",
          "Signes observables : gaz, changement de couleur, flamme, dégagement de chaleur",
          "Réactifs : espèces consommées (présentes au début) — Produits : espèces formées (présentes à la fin)",
        ],
      },
      {
        titre: "Les tests caractéristiques à connaître",
        points: [
          "Dioxygène O2 : une bûchette incandescente se ranime",
          "Dioxyde de carbone CO2 : l'eau de chaux se trouble (devient blanche laiteuse)",
          "Dihydrogène H2 : détonation (« pop ») à l'approche d'une flamme",
          "Eau : le sulfate de cuivre anhydre, blanc, devient bleu",
        ],
      },
      {
        titre: "L'équation de la réaction",
        points: [
          "Réactifs à gauche de la flèche, séparés par +",
          "Produits à droite de la flèche, séparés par +",
          "Exemple : fer + acide chlorhydrique → chlorure de fer + dihydrogène",
        ],
      },
      {
        titre: "La conservation de la masse",
        points: [
          "Loi de Lavoisier : masse des réactifs consommés = masse des produits formés",
          "« Rien ne se perd, rien ne se crée, tout se transforme »",
          "À ne pas confondre avec une transformation physique (changement d'état, dissolution), où les espèces chimiques ne changent pas",
        ],
      },
    ],
    audio:
      "Fiche de révision : les transformations chimiques. Une transformation chimique fait apparaître de nouvelles espèces chimiques, appelées produits, à partir de réactifs qui sont consommés. On la repère grâce à des signes observables : un dégagement de gaz, un changement de couleur, une flamme. Pour identifier les espèces formées, on utilise des tests caractéristiques : la bûchette incandescente se ranime en présence de dioxygène, l'eau de chaux se trouble en présence de dioxyde de carbone, le dihydrogène produit une détonation à l'approche d'une flamme, et le sulfate de cuivre anhydre, blanc, devient bleu au contact de l'eau. On écrit l'équation d'une réaction en plaçant les réactifs à gauche d'une flèche et les produits à droite, par exemple fer plus acide chlorhydrique donnent chlorure de fer plus dihydrogène. Enfin, la loi de Lavoisier affirme que la masse totale se conserve toujours au cours d'une transformation chimique : rien ne se perd, rien ne se crée, tout se transforme.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un réactif ?", verso: "Une espèce chimique consommée au cours de la réaction, présente au début." },
    { recto: "Qu'est-ce qu'un produit ?", verso: "Une espèce chimique formée au cours de la réaction, présente à la fin." },
    { recto: "Test caractéristique du dioxygène ?", verso: "Une bûchette incandescente se ranime (se rallume) au contact du gaz." },
    { recto: "Test caractéristique du dioxyde de carbone ?", verso: "L'eau de chaux se trouble et devient blanche laiteuse." },
    { recto: "Test caractéristique du dihydrogène ?", verso: "Une détonation, un petit « pop », à l'approche d'une flamme." },
    { recto: "Test caractéristique de l'eau ?", verso: "Le sulfate de cuivre anhydre, blanc, devient bleu au contact de l'eau." },
    { recto: "Que dit la loi de Lavoisier ?", verso: "La masse totale se conserve : masse des réactifs = masse des produits. « Rien ne se perd, rien ne se crée, tout se transforme »." },
    { recto: "Différence entre transformation physique et chimique ?", verso: "Physique : les espèces chimiques ne changent pas (ex : dissolution). Chimique : de nouvelles espèces apparaissent (ex : combustion)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans une réaction chimique, les réactifs sont :",
      choix: [
        "les espèces formées à la fin",
        "les espèces consommées, présentes au début",
        "toujours des gaz",
        "toujours de l'eau",
      ],
      bonneReponse: 1,
      explication: "Les réactifs sont les espèces chimiques présentes au départ, qui sont consommées au cours de la réaction.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel test permet d'identifier le dioxyde de carbone ?",
      choix: [
        "La bûchette incandescente se ranime",
        "L'eau de chaux se trouble",
        "Le sulfate de cuivre bleuit",
        "Une détonation se produit",
      ],
      bonneReponse: 1,
      explication: "L'eau de chaux se trouble et devient blanche laiteuse en présence de dioxyde de carbone CO2.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel test permet d'identifier le dihydrogène ?",
      reponse: "On approche le gaz d'une flamme : s'il produit une détonation (un « pop »), c'est du dihydrogène.",
      explication: "C'est le test caractéristique du dihydrogène, à ne pas confondre avec celui du dioxygène (bûchette incandescente).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le sucre dissous dans un verre d'eau : est-ce une transformation chimique ?",
      choix: [
        "Oui, une nouvelle espèce apparaît",
        "Non, c'est une transformation physique, le sucre existe toujours",
        "Oui, car l'eau devient sucrée",
        "On ne peut pas savoir",
      ],
      bonneReponse: 1,
      explication: "Dissoudre du sucre ne change pas sa nature chimique : c'est une transformation physique, pas chimique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "On plonge un clou de fer dans de l'acide chlorhydrique. Des bulles apparaissent. Écris l'équation de cette réaction avec les noms des espèces.",
      reponse: "fer + acide chlorhydrique → chlorure de fer + dihydrogène",
      explication: "Les réactifs (fer, acide chlorhydrique) sont à gauche de la flèche, les produits (chlorure de fer, dihydrogène) à droite.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment reconnaît-on le sulfate de cuivre anhydre en présence d'eau ?",
      choix: [
        "Il devient rouge",
        "Il se solidifie",
        "Il devient bleu",
        "Il disparaît sans laisser de trace",
      ],
      bonneReponse: 2,
      explication: "Le sulfate de cuivre anhydre est blanc ; au contact de l'eau, il devient bleu. C'est le test caractéristique de l'eau.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre une transformation physique et une transformation chimique.",
      reponse:
        "Dans une transformation physique (changement d'état, dissolution...), les espèces chimiques ne changent pas de nature. Dans une transformation chimique, de nouvelles espèces chimiques (produits) apparaissent, différentes des espèces de départ (réactifs).",
      explication: "Le critère décisif est l'apparition ou non de nouvelles espèces chimiques.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que signifie la flèche dans une équation de réaction du type « réactifs → produits » ?",
      choix: [
        "Un signe mathématique d'égalité stricte",
        "« réagissent pour donner »",
        "Une addition simple",
        "Le sens du temps qui passe",
      ],
      bonneReponse: 1,
      explication: "La flèche se lit « réagissent pour donner » : elle relie les réactifs consommés aux produits formés.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "On fait réagir 4 g de réactif A avec 10 g de réactif B dans un récipient fermé. Après la réaction complète, quelle est la masse totale des produits formés ? Justifie.",
      reponse: "14 g, car la masse se conserve : 4 g + 10 g = 14 g (loi de Lavoisier).",
      explication: "Dans un récipient fermé, aucune matière n'entre ni ne sort : la masse totale des produits est égale à la masse totale des réactifs.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un élève chauffe du sucre dans une cuillère : le sucre noircit et une odeur âcre se dégage. Est-ce une transformation physique ou chimique ? Justifie avec des arguments précis.",
      reponse:
        "C'est une transformation chimique : le sucre (blanc, cristallisé) se transforme en une nouvelle espèce, le carbone (noir), avec dégagement de gaz odorants. Ce ne sont plus les mêmes espèces chimiques qu'au départ.",
      explication: "Le changement de couleur irréversible et l'apparition d'une odeur signalent la formation de nouvelles espèces chimiques.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Dans un flacon fermé, on fait réagir des réactifs de masse totale 25 g. On pèse ensuite les produits obtenus. Que doit indiquer la balance ?",
      choix: ["Moins de 25 g", "Exactement 25 g", "Plus de 25 g", "0 g, toute la matière a disparu"],
      bonneReponse: 1,
      explication: "Dans un système fermé, la masse se conserve exactement : la balance doit indiquer 25 g.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une bougie qui brûle à l'air libre semble perdre de la masse au fil du temps. Cela contredit-il la loi de Lavoisier ? Explique.",
      reponse:
        "Non. La cire réagit avec le dioxygène de l'air (réactifs) et forme des gaz (dioxyde de carbone, vapeur d'eau) qui s'échappent dans l'air (produits). Si l'on pesait tous les réactifs et tous les produits, y compris les gaz, la masse totale serait bien conservée.",
      explication: "La masse ne semble diminuer que parce que le système n'est pas fermé : des produits gazeux s'échappent sans être pesés.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel test identifie le dioxygène ?",
      choix: [
        "L'eau de chaux se trouble",
        "Une bûchette incandescente se ranime",
        "Une détonation se produit",
        "Le sulfate de cuivre bleuit",
      ],
      bonneReponse: 1,
      explication: "Une bûchette incandescente qui se ranime (se rallume) indique la présence de dioxygène.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne un exemple de transformation chimique de la vie courante.",
      reponse: "Le fer qui rouille, une bougie qui brûle, ou un fruit qui mûrit, par exemple.",
      explication: "Toute transformation qui fait apparaître de nouvelles espèces chimiques est une transformation chimique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète l'équation : carbone + dioxygène → ...",
      reponse: "dioxyde de carbone",
      explication: "La combustion du carbone dans le dioxygène produit du dioxyde de carbone.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que dit la loi de Lavoisier ?",
      choix: [
        "La masse des produits est toujours inférieure à celle des réactifs",
        "La masse totale se conserve au cours d'une transformation chimique",
        "Les atomes disparaissent lors d'une réaction",
        "Le volume se conserve toujours",
      ],
      bonneReponse: 1,
      explication: "Lavoisier a montré que la masse des réactifs consommés est égale à la masse des produits formés.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dissoudre du sel dans l'eau est-il une transformation physique ou chimique ?",
      reponse: "Une transformation physique : le sel garde sa nature chimique, il est seulement dispersé dans l'eau.",
      explication: "Aucune nouvelle espèce chimique n'apparaît lors d'une dissolution.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les transformations chimiques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Les produits d'une réaction chimique sont :",
          choix: [
            "les espèces consommées",
            "les espèces formées à la fin",
            "toujours des liquides",
            "toujours identiques aux réactifs",
          ],
          bonneReponse: 1,
          explication: "Les produits sont les nouvelles espèces chimiques formées au cours de la réaction.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite les quatre tests caractéristiques vus en cours et l'espèce qu'ils permettent d'identifier.",
          reponse:
            "Bûchette incandescente qui se ranime → dioxygène. Eau de chaux qui se trouble → dioxyde de carbone. Détonation à la flamme → dihydrogène. Sulfate de cuivre anhydre qui bleuit → eau.",
          explication: "Ces quatre tests sont à connaître par cœur pour identifier les espèces chimiques les plus courantes.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une transformation chimique se reconnaît souvent par :",
          choix: [
            "l'absence de tout changement visible",
            "un signe observable : gaz, couleur, flamme, chaleur",
            "une diminution du volume uniquement",
            "un changement de température toujours identique",
          ],
          bonneReponse: 1,
          explication: "Un dégagement de gaz, un changement de couleur, une flamme ou un dégagement de chaleur sont des signes typiques d'une transformation chimique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris l'équation de la réaction entre le carbone et le dioxygène qui produit du dioxyde de carbone.",
          reponse: "carbone + dioxygène → dioxyde de carbone",
          explication: "Les réactifs (carbone, dioxygène) sont à gauche de la flèche, le produit (dioxyde de carbone) à droite.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Dans un flacon fermé, 8 g de réactif A réagissent entièrement avec du réactif B. On obtient 22 g de produits au total. Quelle était la masse du réactif B ?",
          reponse: "14 g, car la masse se conserve : masse des produits = masse des réactifs, donc masse de B = 22 g − 8 g = 14 g.",
          explication: "On applique la loi de Lavoisier : la masse totale des réactifs est égale à la masse totale des produits.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Le fer qui rouille lentement à l'air humide est :",
          choix: [
            "une transformation physique rapide",
            "une transformation chimique lente",
            "une simple dissolution",
            "un changement d'état",
          ],
          bonneReponse: 1,
          explication: "La rouille (oxyde de fer) est une nouvelle espèce chimique : c'est bien une transformation chimique, mais lente.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les transformations chimiques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'eau de chaux se trouble en présence de :",
          choix: ["dioxygène", "dihydrogène", "dioxyde de carbone", "eau"],
          bonneReponse: 2,
          explication: "L'eau de chaux se trouble (devient blanche laiteuse) en présence de dioxyde de carbone.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un réactif ? Qu'est-ce qu'un produit ?",
          reponse: "Un réactif est une espèce chimique consommée pendant la réaction. Un produit est une espèce chimique formée pendant la réaction.",
          explication: "Les réactifs sont présents au début, les produits apparaissent à la fin de la transformation.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Faire fondre un glaçon est :",
          choix: [
            "une transformation chimique",
            "une transformation physique",
            "ni l'une ni l'autre",
            "impossible à classer",
          ],
          bonneReponse: 1,
          explication: "L'eau reste de l'eau : seul son état change. C'est une transformation physique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "On approche une flamme d'un gaz recueilli dans un tube et on entend un « pop ». De quel gaz s'agit-il ? Comment le sais-tu ?",
          reponse: "Il s'agit de dihydrogène : la détonation (le « pop ») à l'approche d'une flamme est le test caractéristique du dihydrogène.",
          explication: "Ce test permet de distinguer le dihydrogène du dioxygène (bûchette incandescente) et du dioxyde de carbone (eau de chaux).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Explique, à l'aide de la loi de Lavoisier, pourquoi la masse totale d'un système fermé ne change jamais au cours d'une réaction chimique, même si des gaz sont formés.",
          reponse:
            "Dans un système fermé, aucune matière n'entre ni ne sort. Même si des gaz sont formés, ils restent dans le récipient fermé et sont pesés avec les autres produits. La masse totale des produits est donc toujours égale à la masse totale des réactifs.",
          explication: "C'est uniquement dans un système ouvert (comme une bougie à l'air libre) que la masse semble diminuer, car des gaz s'échappent sans être pesés.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "12 g de magnésium réagissent complètement avec du dioxygène pour donner 20 g d'oxyde de magnésium. Quelle masse de dioxygène a été consommée ?",
          choix: ["8 g", "12 g", "20 g", "32 g"],
          bonneReponse: 0,
          explication: "La masse se conserve : masse de dioxygène = masse des produits − masse de magnésium = 20 g − 12 g = 8 g.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une transformation chimique fait apparaître de nouvelles espèces chimiques (produits) à partir des réactifs consommés.",
    "Tests à connaître : bûchette incandescente (dioxygène), eau de chaux (dioxyde de carbone), détonation (dihydrogène), sulfate de cuivre anhydre qui bleuit (eau).",
    "Équation de réaction : réactifs → produits, avec les noms des espèces séparés par des signes +.",
    "La masse totale se conserve toujours au cours d'une transformation chimique en système fermé (loi de Lavoisier).",
    "Une transformation physique (changement d'état, dissolution) ne change pas la nature des espèces chimiques, contrairement à une transformation chimique.",
    "Erreur classique à éviter : croire que la masse diminue lors d'une combustion à l'air libre — en réalité, des produits gazeux invisibles s'échappent, mais la masse totale (système fermé) se conserve.",
  ],
},
{
  slug: "vitesse-lumiere-son",
  titre: "Vitesse de la lumière et du son",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Comprendre ce qu'est un signal lumineux et un signal sonore, connaître leurs vitesses de propagation, savoir que le son a besoin d'un milieu matériel pour se propager contrairement à la lumière, et calculer une distance à partir d'une vitesse et d'une durée.",
  objectifs: [
    "Savoir que la lumière se propage en ligne droite et connaître sa vitesse dans le vide (300 000 km/s)",
    "Connaître la notion d'année-lumière comme unité de distance",
    "Savoir que le son est une vibration qui se propage dans un milieu matériel, avec une vitesse d'environ 340 m/s dans l'air",
    "Comprendre que le son ne se propage pas dans le vide, contrairement à la lumière",
    "Calculer une distance à partir d'une vitesse et d'une durée avec la formule d = v × t",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un signal ?",
      illustration: "📡",
      visuel: "Signal = information qui se déplace",
      contenu: [
        "Un signal transporte une information d'un point à un autre",
        "Le signal lumineux (la lumière) et le signal sonore (le son) sont deux exemples de signaux",
        "Un signal met toujours une certaine durée pour parcourir une distance",
        "Cette durée dépend de la vitesse de propagation du signal",
      ],
      voixOff:
        "Un signal est ce qui transporte une information d'un point à un autre : un flash lumineux, un cri, le bip d'un radar. La lumière et le son sont deux exemples de signaux très différents. Chacun met une certaine durée pour parcourir une distance donnée, et cette durée dépend de sa vitesse de propagation.",
    },
    {
      titre: "La lumière se propage en ligne droite",
      illustration: "🔦",
      visuel: "Trajet rectiligne",
      contenu: [
        "Dans un milieu transparent et homogène, la lumière se propage en ligne droite",
        "C'est ce qui explique les ombres nettes derrière un obstacle",
        "La lumière peut se propager dans le vide, contrairement au son",
        "Elle traverse aussi certains milieux transparents : l'air, l'eau, le verre",
      ],
      voixOff:
        "Dans un milieu transparent et homogène, comme l'air ou le vide, la lumière se propage toujours en ligne droite : c'est ce qui explique la formation d'ombres nettes derrière un obstacle. Une propriété essentielle de la lumière est qu'elle peut se propager dans le vide, ce qui lui permet de traverser l'espace et de nous parvenir depuis les étoiles. Elle traverse aussi des milieux transparents comme l'air, l'eau ou le verre.",
    },
    {
      titre: "La vitesse de la lumière",
      illustration: "💫",
      visuel: "c ≈ 300 000 km/s",
      contenu: [
        "Dans le vide, la lumière se propage à environ 300 000 km/s (soit 3×10⁸ m/s)",
        "C'est la vitesse la plus grande connue dans l'Univers",
        "À l'échelle humaine, la propagation de la lumière paraît instantanée",
        "La lumière du Soleil met environ 8 minutes à nous parvenir",
      ],
      voixOff:
        "Dans le vide, la lumière se propage à une vitesse extraordinaire : environ trois cent mille kilomètres par seconde, soit trois fois dix puissance huit mètres par seconde. C'est la plus grande vitesse connue dans l'Univers. À l'échelle humaine, cette vitesse est si grande que la propagation de la lumière nous paraît instantanée. Pourtant, la lumière du Soleil met environ huit minutes pour parcourir les cent cinquante millions de kilomètres qui nous en séparent.",
    },
    {
      titre: "L'année-lumière, une unité de distance",
      illustration: "🌌",
      visuel: "1 année-lumière ≈ 9 461 milliards de km",
      contenu: [
        "L'année-lumière est la distance parcourue par la lumière en une année",
        "1 année-lumière ≈ 9 461 milliards de km",
        "Elle sert à mesurer les très grandes distances en astronomie",
        "Observer une étoile éloignée, c'est voir de la lumière émise il y a très longtemps",
      ],
      voixOff:
        "Pour mesurer les distances astronomiques, gigantesques, on utilise une unité adaptée : l'année-lumière. C'est la distance parcourue par la lumière en une année, soit environ neuf mille quatre cent soixante et un milliards de kilomètres. Quand on observe une étoile située à plusieurs années-lumière, on reçoit en réalité une lumière qui a été émise il y a très longtemps : on regarde en quelque sorte dans le passé.",
    },
    {
      titre: "Le son, une vibration qui se propage",
      illustration: "🔊",
      visuel: "Vibration → onde sonore",
      contenu: [
        "Un son est produit par la vibration d'un objet (corde, membrane, corde vocale...)",
        "Cette vibration se propage de proche en proche dans un milieu matériel",
        "Le son a besoin d'un support matériel : air, eau, solide",
        "Le son ne transporte pas de matière, seulement une vibration",
      ],
      voixOff:
        "Un son est toujours produit par la vibration d'un objet : une corde de guitare, une membrane de haut-parleur, nos cordes vocales. Cette vibration se propage ensuite de proche en proche, en faisant vibrer les molécules du milieu qui l'entoure. Le son a donc besoin d'un support matériel pour se propager : l'air, l'eau, ou un solide. Il ne transporte pas de matière, seulement une vibration qui se transmet d'une molécule à l'autre.",
    },
    {
      titre: "La vitesse du son",
      illustration: "🐇",
      visuel: "v ≈ 340 m/s dans l'air",
      contenu: [
        "Dans l'air, à température ambiante, le son se propage à environ 340 m/s",
        "Cette vitesse dépend du milieu : plus rapide dans l'eau (≈ 1 500 m/s) et dans les solides (≈ 5 000 m/s dans l'acier)",
        "La vitesse du son est bien plus faible que celle de la lumière",
        "C'est pour cela qu'on voit l'éclair avant d'entendre le tonnerre",
      ],
      voixOff:
        "Dans l'air, à température ambiante, le son se propage à environ trois cent quarante mètres par seconde. Cette vitesse dépend fortement du milieu : elle est plus grande dans l'eau, environ mille cinq cents mètres par seconde, et encore plus grande dans les solides, environ cinq mille mètres par seconde dans l'acier. Mais dans tous les cas, la vitesse du son reste bien plus faible que celle de la lumière : c'est pour cela qu'on voit l'éclair d'un orage avant d'en entendre le tonnerre.",
    },
    {
      titre: "Le son ne se propage pas dans le vide",
      illustration: "🌑",
      visuel: "Vide = silence total",
      contenu: [
        "Sans matière pour vibrer, le son ne peut pas se propager",
        "Dans le vide spatial, il n'y a donc pas de son : le silence total règne",
        "Au contraire, la lumière se propage très bien dans le vide",
        "Différence fondamentale entre lumière (n'a pas besoin de milieu) et son (a besoin d'un milieu)",
      ],
      voixOff:
        "Contrairement à la lumière, le son a absolument besoin d'un milieu matériel, avec des molécules à faire vibrer. Dans le vide, il n'y a aucune matière, donc le son ne peut pas s'y propager : c'est pourquoi le silence règne dans l'espace, malgré ce que montrent parfois les films de science-fiction. C'est la différence fondamentale entre les deux signaux : la lumière n'a pas besoin de milieu matériel, alors que le son en a absolument besoin.",
    },
    {
      titre: "Calculer une distance : d = v × t",
      illustration: "🧮",
      visuel: "d = v × t",
      contenu: [
        "Formule : d = v × t (d : distance en m, v : vitesse en m/s, t : durée en s)",
        "Pour un écho ou l'orage, le son fait un aller (ou un aller-retour)",
        "Exemple : entre l'éclair et le tonnerre, 3 secondes → distance ≈ 340 × 3 = 1020 m",
        "Attention aux unités : elles doivent être cohérentes avant de calculer",
      ],
      voixOff:
        "Pour calculer la distance parcourue par un signal, on utilise la formule d égale v fois t, où d est la distance en mètres, v la vitesse en mètres par seconde, et t la durée en secondes. Par exemple, si l'on compte trois secondes entre l'éclair et le tonnerre, la distance de l'orage est d'environ trois cent quarante fois trois, soit environ mille vingt mètres. Attention à toujours vérifier que les unités de vitesse et de durée sont cohérentes avant de calculer.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Lumière : vitesse ≈ 300 000 km/s dans le vide, se propage en ligne droite, n'a pas besoin de milieu",
        "Son : vitesse ≈ 340 m/s dans l'air, a besoin d'un milieu matériel pour se propager",
        "Le son ne se propage pas dans le vide, la lumière si",
        "Formule à retenir : d = v × t",
      ],
      voixOff:
        "Résumons. La lumière se propage dans le vide à environ trois cent mille kilomètres par seconde, en ligne droite, et n'a besoin d'aucun milieu matériel. Le son se propage bien plus lentement, environ trois cent quarante mètres par seconde dans l'air, et a absolument besoin d'un milieu matériel : il ne peut pas exister dans le vide. Enfin, pour calculer une distance à partir d'une vitesse et d'une durée, retiens la formule d égale v fois t.",
    },
  ],
  fiche: {
    intro:
      "La lumière et le son sont deux signaux qui se propagent à des vitesses très différentes. La lumière se propage en ligne droite, y compris dans le vide, à environ 300 000 km/s. Le son, lui, a besoin d'un milieu matériel et se propage bien plus lentement, environ 340 m/s dans l'air.",
    sections: [
      {
        titre: "La lumière",
        points: [
          "Se propage en ligne droite dans un milieu transparent et homogène",
          "Se propage dans le vide et dans les milieux transparents (air, eau, verre)",
          "Vitesse dans le vide : environ 300 000 km/s (3×10⁸ m/s)",
          "L'année-lumière (≈ 9 461 milliards de km) mesure les distances astronomiques",
        ],
      },
      {
        titre: "Le son",
        points: [
          "Produit par la vibration d'un objet, se propage de proche en proche",
          "A besoin d'un milieu matériel : air, eau, solide",
          "Vitesse dans l'air ≈ 340 m/s ; plus rapide dans l'eau et les solides",
        ],
      },
      {
        titre: "Une différence fondamentale",
        points: [
          "La lumière se propage dans le vide ; le son ne le peut pas (pas de matière à faire vibrer)",
          "C'est pourquoi le silence règne dans l'espace",
          "On voit l'éclair avant d'entendre le tonnerre : la lumière va beaucoup plus vite que le son",
        ],
      },
      {
        titre: "Calculer une distance",
        points: [
          "Formule : d = v × t (d en m, v en m/s, t en s)",
          "Bien vérifier la cohérence des unités avant de calculer",
          "Exemple : orage à 3 s d'intervalle éclair/tonnerre → d ≈ 340 × 3 = 1020 m",
        ],
      },
    ],
    audio:
      "Fiche de révision : vitesse de la lumière et du son. La lumière se propage en ligne droite dans un milieu transparent et homogène, et elle peut aussi se propager dans le vide. Sa vitesse est extraordinaire : environ trois cent mille kilomètres par seconde. On utilise l'année-lumière, la distance parcourue par la lumière en une année, pour mesurer les distances astronomiques. Le son, lui, est produit par la vibration d'un objet et se propage de proche en proche, mais il a absolument besoin d'un milieu matériel : l'air, l'eau ou un solide. Sa vitesse dans l'air est d'environ trois cent quarante mètres par seconde, bien plus faible que celle de la lumière. C'est pourquoi le son ne se propage pas dans le vide, contrairement à la lumière : dans l'espace, le silence est total. Pour calculer une distance à partir d'une vitesse et d'une durée, on utilise la formule d égale v fois t.",
  },
  memoCards: [
    { recto: "Vitesse de la lumière dans le vide ?", verso: "Environ 300 000 km/s (soit 3×10⁸ m/s)." },
    { recto: "Qu'est-ce qu'une année-lumière ?", verso: "La distance parcourue par la lumière en une année, environ 9 461 milliards de km." },
    { recto: "Vitesse du son dans l'air ?", verso: "Environ 340 m/s (à température ambiante)." },
    { recto: "Le son se propage-t-il dans le vide ?", verso: "Non, il a besoin d'un milieu matériel (air, eau, solide) pour se propager." },
    { recto: "La lumière se propage-t-elle dans le vide ?", verso: "Oui, contrairement au son. C'est ainsi que la lumière des étoiles nous parvient." },
    { recto: "Qu'est-ce qui produit un son ?", verso: "La vibration d'un objet (corde, membrane, corde vocale...) qui se propage de proche en proche." },
    { recto: "Pourquoi voit-on l'éclair avant d'entendre le tonnerre ?", verso: "Parce que la lumière va beaucoup plus vite que le son (300 000 km/s contre 340 m/s)." },
    { recto: "Formule pour calculer une distance à partir d'une vitesse et d'une durée ?", verso: "d = v × t (d en m, v en m/s, t en s)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La vitesse de la lumière dans le vide est d'environ :",
      choix: ["340 m/s", "3 000 km/s", "300 000 km/s", "1 500 m/s"],
      bonneReponse: 2,
      explication: "La lumière se propage dans le vide à environ 300 000 km/s, soit 3×10⁸ m/s.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La vitesse du son dans l'air est d'environ :",
      choix: ["340 m/s", "300 000 km/s", "3,4 m/s", "34 000 m/s"],
      bonneReponse: 0,
      explication: "Le son se propage dans l'air à environ 340 m/s, bien plus lentement que la lumière.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Pourquoi le son ne peut-il pas se propager dans le vide ?",
      reponse: "Parce que le son a besoin d'un milieu matériel (des molécules à faire vibrer) pour se propager, et le vide n'en contient pas.",
      explication: "Contrairement à la lumière, qui n'a besoin d'aucun support matériel, le son se propage par vibration de la matière.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une année-lumière est :",
      choix: [
        "une durée d'un an",
        "une distance, celle parcourue par la lumière en un an",
        "une vitesse",
        "une unité de masse",
      ],
      bonneReponse: 1,
      explication: "Malgré son nom, l'année-lumière est bien une unité de distance : environ 9 461 milliards de km.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un randonneur crie face à une falaise et entend l'écho 2 secondes plus tard. Sachant que le son fait un aller-retour, calcule la distance jusqu'à la falaise (vitesse du son : 340 m/s).",
      reponse: "Distance aller-retour = v × t = 340 × 2 = 680 m. Distance jusqu'à la falaise = 680 / 2 = 340 m.",
      explication: "Le son parcourt un aller ET un retour en 2 s : il faut diviser par 2 pour obtenir la distance jusqu'à l'obstacle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Entre un éclair et le tonnerre qui le suit, on compte 5 secondes. À quelle distance environ se trouve l'orage ?",
      choix: ["17 m", "170 m", "1700 m", "17 000 m"],
      bonneReponse: 2,
      explication: "d = v × t = 340 × 5 = 1700 m. On néglige le temps de propagation de la lumière, quasi instantané.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi, lors d'un orage, on voit toujours l'éclair avant d'entendre le tonnerre, même s'ils sont produits au même instant.",
      reponse: "La lumière de l'éclair se propage à environ 300 000 km/s, tandis que le son du tonnerre ne se propage qu'à environ 340 m/s. La lumière nous parvient donc quasi instantanément, alors que le son met un temps mesurable pour arriver.",
      explication: "L'écart entre les deux vitesses est énorme (presque un million de fois plus rapide pour la lumière).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La vitesse du son dans l'eau, comparée à celle dans l'air, est :",
      choix: ["plus faible", "à peu près la même", "plus élevée", "nulle"],
      bonneReponse: 2,
      explication: "Le son se propage plus vite dans l'eau (≈ 1500 m/s) que dans l'air (≈ 340 m/s), car les molécules y sont plus proches.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "La lumière du Soleil met environ 8 minutes (480 s) pour arriver sur Terre. Sachant que la vitesse de la lumière est d'environ 300 000 km/s, calcule la distance Terre-Soleil.",
      reponse: "d = v × t = 300 000 × 480 = 144 000 000 km, soit environ 150 millions de km (valeur réelle admise).",
      explication: "On applique directement la formule d = v × t avec des unités cohérentes (km/s et s).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "L'étoile Proxima du Centaure est à 4,2 années-lumière de la Terre. Que peux-tu dire de la lumière que nous recevons d'elle aujourd'hui ?",
      reponse: "Cette lumière a été émise par l'étoile il y a 4,2 ans : nous voyons Proxima du Centaure telle qu'elle était il y a 4,2 ans, pas telle qu'elle est aujourd'hui.",
      explication: "Comme la lumière met du temps à voyager, observer une étoile lointaine revient à regarder son passé.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Un sonar sous-marin émet un signal sonore qui revient après avoir été réfléchi par le fond marin, en 0,8 s (aller-retour). La vitesse du son dans l'eau est 1500 m/s. Quelle est la profondeur de l'eau ?",
      choix: ["600 m", "1200 m", "300 m", "1875 m"],
      bonneReponse: 0,
      explication: "Distance aller-retour = 1500 × 0,8 = 1200 m ; profondeur = 1200 / 2 = 600 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Deux amis, Léa et Tom, testent une expérience : Tom tape sur un long rail métallique, Léa colle son oreille à l'autre extrémité. Elle entend deux sons : un très rapproché, puis un léger écho un peu après. Explique ce phénomène.",
      reponse:
        "Léa entend d'abord le son qui s'est propagé dans le métal du rail (vitesse très élevée, environ 5000 m/s), puis un peu plus tard le même son qui s'est propagé dans l'air (vitesse d'environ 340 m/s, donc plus lent). Les deux sons voyagent par des milieux différents, à des vitesses très différentes.",
      explication: "La vitesse du son dépend du milieu de propagation : elle est bien plus élevée dans un solide que dans l'air.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La lumière se propage-t-elle dans le vide ?",
      choix: ["Oui", "Non", "Seulement si elle est très intense", "Seulement la nuit"],
      bonneReponse: 0,
      explication: "La lumière n'a besoin d'aucun milieu matériel pour se propager, contrairement au son.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne la valeur approximative de la vitesse de la lumière dans le vide.",
      reponse: "Environ 300 000 km/s.",
      explication: "C'est la plus grande vitesse connue dans l'Univers.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris la formule permettant de calculer une distance à partir d'une vitesse et d'une durée.",
      reponse: "d = v × t",
      explication: "d en mètres, v en mètres par seconde, t en secondes (unités cohérentes).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pourquoi le son ne peut-il pas se propager dans le vide ?",
      choix: [
        "Parce qu'il est trop rapide",
        "Parce qu'il a besoin d'un milieu matériel pour se propager",
        "Parce qu'il est trop lent",
        "Le son se propage très bien dans le vide",
      ],
      bonneReponse: 1,
      explication: "Le son est une vibration de la matière : sans matière, il ne peut pas exister.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "On compte 4 secondes entre un éclair et le tonnerre. Calcule la distance approximative de l'orage (vitesse du son : 340 m/s).",
      reponse: "d = v × t = 340 × 4 = 1360 m",
      explication: "On néglige le temps de propagation de la lumière, quasi instantané à cette échelle.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Vitesse de la lumière et du son",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le son est produit par :",
          choix: ["un rayon lumineux", "la vibration d'un objet", "une réaction chimique", "un champ magnétique"],
          bonneReponse: 1,
          explication: "Tout son provient de la vibration d'un objet, qui se propage ensuite de proche en proche dans la matière.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la valeur approximative de la vitesse du son dans l'air.",
          reponse: "Environ 340 m/s.",
          explication: "Cette vitesse varie légèrement avec la température, mais on retient 340 m/s dans l'air à température ambiante.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une année-lumière vaut environ :",
          choix: ["300 000 km", "9 461 milliards de km", "1 500 m", "365 jours"],
          bonneReponse: 1,
          explication: "C'est la distance parcourue par la lumière en une année, soit environ 9 461 milliards de km.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une chauve-souris émet un ultrason qui revient après avoir été réfléchi par un obstacle, en 0,1 s (aller-retour). La vitesse du son dans l'air est 340 m/s. Calcule la distance jusqu'à l'obstacle.",
          reponse: "Distance aller-retour = 340 × 0,1 = 34 m. Distance jusqu'à l'obstacle = 34 / 2 = 17 m.",
          explication: "Il s'agit d'un aller-retour : on divise la distance totale par 2 pour obtenir la distance jusqu'à l'obstacle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Explique pourquoi les astronautes en sortie extravéhiculaire dans l'espace ne peuvent pas se parler directement, à l'air libre, et doivent utiliser une radio.",
          reponse:
            "Dans l'espace, il y a le vide : il n'y a pas de matière pour transmettre les vibrations sonores. Le son ne peut donc pas s'y propager. La radio utilise des ondes électromagnétiques, qui se propagent comme la lumière, sans avoir besoin de milieu matériel.",
          explication: "Cette question distingue bien les deux types de signaux : le son (a besoin de matière) et les ondes électromagnétiques comme les ondes radio ou la lumière (n'en ont pas besoin).",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Un signal sonore parcourt 850 m dans l'air. Sachant que la vitesse du son est 340 m/s, combien de temps a-t-il mis ?",
          choix: ["0,4 s", "2,5 s", "25 s", "289 000 s"],
          bonneReponse: 1,
          explication: "t = d / v = 850 / 340 = 2,5 s.",
        },
      ],
    },
    {
      titre: "Examen 2 — Vitesse de la lumière et du son",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans quel milieu la lumière peut-elle se propager, contrairement au son ?",
          choix: ["L'air", "L'eau", "Le vide", "Le verre"],
          bonneReponse: 2,
          explication: "Le son a besoin d'un milieu matériel ; le vide en est dépourvu, donc seule la lumière peut s'y propager.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite deux milieux matériels dans lesquels le son peut se propager.",
          reponse: "L'air et l'eau (ou aussi un solide, comme le métal ou le bois).",
          explication: "Le son a besoin de matière pour se propager, quel que soit son état (gaz, liquide, solide).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La formule permettant de calculer une distance connaissant la vitesse et la durée est :",
          choix: ["d = v / t", "d = v × t", "d = t / v", "d = v + t"],
          bonneReponse: 1,
          explication: "La distance est le produit de la vitesse par la durée : d = v × t.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique, avec le modèle de la vibration, comment le son se propage de la source à l'oreille.",
          reponse:
            "La source (par exemple une corde vocale) vibre, ce qui fait vibrer les molécules d'air à proximité. Ces molécules transmettent leur vibration aux molécules voisines, de proche en proche, jusqu'à atteindre le tympan de l'oreille, qui se met à vibrer à son tour.",
          explication: "Le son se propage par transmission de la vibration entre molécules voisines, sans déplacement net de matière sur de grandes distances.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un navire envoie un signal sonore vers le fond marin pour mesurer la profondeur avec un sonar. Le signal revient après 4 s (aller-retour). La vitesse du son dans l'eau est 1500 m/s. Calcule la profondeur.",
          reponse: "Distance aller-retour = 1500 × 4 = 6000 m. Profondeur = 6000 / 2 = 3000 m.",
          explication: "On applique d = v × t pour l'aller-retour, puis on divise par 2 pour obtenir la profondeur (un seul trajet).",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Pourquoi la vitesse du son est-elle plus grande dans un solide que dans l'air ?",
          choix: [
            "Parce que les molécules d'un solide sont plus proches les unes des autres et transmettent la vibration plus efficacement",
            "Parce que les solides sont plus légers",
            "Parce que le son ne se propage pas du tout dans les solides",
            "Il n'y a pas de différence entre les milieux",
          ],
          bonneReponse: 0,
          explication: "Plus les molécules du milieu sont proches et liées entre elles, plus la vibration se transmet rapidement d'une molécule à l'autre.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La lumière se propage en ligne droite dans un milieu transparent et homogène, et peut se propager dans le vide.",
    "Vitesse de la lumière dans le vide : environ 300 000 km/s (3×10⁸ m/s).",
    "L'année-lumière est une unité de distance : environ 9 461 milliards de km.",
    "Le son est produit par une vibration qui se propage de proche en proche ; il a besoin d'un milieu matériel (air, eau, solide) et ne se propage pas dans le vide.",
    "Vitesse du son dans l'air : environ 340 m/s (bien plus lente que la lumière).",
    "Formule à retenir : d = v × t (distance = vitesse × durée), et pour un aller-retour, la distance jusqu'à l'obstacle est divisée par 2.",
  ],
},
{
  slug: "circuits-electriques",
  titre: "Les circuits électriques",
  matiere: "physique-chimie",
  niveau: "5eme",
  description:
    "Comprendre ce qu'est un circuit électrique fermé, reconnaître les dipôles et leurs symboles normalisés, distinguer circuit série et circuit en dérivation, connaître le danger du court-circuit et savoir mesurer l'intensité et la tension.",
  objectifs: [
    "Identifier les dipôles d'un circuit et connaître leurs symboles normalisés",
    "Distinguer un circuit fermé (qui fonctionne) d'un circuit ouvert (qui ne fonctionne pas)",
    "Différencier un circuit série d'un circuit en dérivation et leurs propriétés",
    "Expliquer ce qu'est un court-circuit et pourquoi il est dangereux",
    "Savoir comment brancher un ampèremètre et un voltmètre pour mesurer I et U",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un circuit électrique ?",
      illustration: "⚡",
      visuel: "Générateur + Récepteur + Fils",
      contenu: [
        "Un circuit électrique est une chaîne fermée de dipôles reliés par des fils conducteurs",
        "Il comprend toujours au moins un générateur (la pile) qui fait circuler le courant",
        "Il comprend aussi au moins un récepteur (lampe, moteur...) qui utilise ce courant",
        "Sans boucle complète, aucun courant ne circule",
      ],
      voixOff:
        "Un circuit électrique, c'est une chaîne continue de dipôles reliés entre eux par des fils conducteurs, qui forme une boucle fermée. Il faut toujours au moins un générateur, comme une pile, qui fait circuler le courant. Et il faut au moins un récepteur, comme une lampe ou un moteur, qui utilise ce courant. Si la boucle n'est pas complète, rien ne se passe.",
    },
    {
      titre: "Les dipôles et leurs symboles",
      illustration: "🔌",
      visuel: "Pile ⎓ • Lampe ⊗ • Interrupteur",
      contenu: [
        "Un dipôle est un objet relié au circuit par deux bornes",
        "Pile (générateur) : un trait long et un trait court, côte à côte",
        "Lampe : un cercle avec une croix à l'intérieur",
        "Interrupteur, fil, moteur (M dans un cercle), DEL, résistor : chacun a son symbole normalisé",
      ],
      voixOff:
        "Un dipôle est un composant électrique relié au reste du circuit par deux bornes. Chaque dipôle a un symbole normalisé, le même pour tout le monde. La pile se dessine avec un trait long, qui représente la borne plus, et un trait court, qui représente la borne moins. La lampe est un cercle avec une croix à l'intérieur. Il existe aussi des symboles pour l'interrupteur, le fil, le moteur, la diode électroluminescente et le résistor.",
    },
    {
      titre: "Circuit fermé, circuit ouvert",
      illustration: "🔓",
      visuel: "Fermé = ça marche / Ouvert = rien",
      contenu: [
        "Circuit fermé : la boucle est complète, le courant circule, la lampe s'allume",
        "Circuit ouvert : la boucle est interrompue (interrupteur ouvert, fil coupé), rien ne fonctionne",
        "Un seul point de coupure suffit à arrêter tout le circuit série",
        "L'interrupteur sert justement à ouvrir ou fermer le circuit à volonté",
      ],
      voixOff:
        "Pour qu'un circuit fonctionne, il doit être fermé : la boucle formée par les dipôles et les fils doit être complète, sans aucune coupure. Si l'interrupteur est ouvert, ou si un fil est coupé, le circuit est ouvert et plus rien ne fonctionne : la lampe reste éteinte. C'est justement le rôle de l'interrupteur de fermer ou d'ouvrir le circuit quand on le souhaite.",
    },
    {
      titre: "Le sens du courant",
      illustration: "➡️",
      visuel: "Borne + → Borne −",
      contenu: [
        "Le sens conventionnel du courant a été choisi par les scientifiques",
        "À l'extérieur du générateur, le courant circule de la borne + vers la borne −",
        "On représente ce sens par une flèche sur le schéma du circuit",
        "C'est une convention : elle est la même pour tous les circuits",
      ],
      voixOff:
        "Le courant électrique circule dans un sens précis, appelé le sens conventionnel du courant. À l'extérieur du générateur, c'est-à-dire dans les fils et les récepteurs, le courant circule toujours de la borne plus vers la borne moins de la pile. On représente ce sens par une petite flèche sur le schéma. C'est une convention, choisie une fois pour toutes, que tous les scientifiques utilisent.",
    },
    {
      titre: "Le circuit en série",
      illustration: "➖",
      visuel: "Un seul chemin possible",
      contenu: [
        "Dans un circuit série, les dipôles sont branchés les uns à la suite des autres",
        "Il n'existe qu'un seul chemin possible pour le courant",
        "Si un dipôle est débranché, grillé, ou si l'interrupteur s'ouvre, tout le circuit s'arrête",
        "L'intensité du courant est la même en tout point du circuit série",
      ],
      voixOff:
        "Dans un circuit série, tous les dipôles sont branchés les uns après les autres, à la file, et il n'existe qu'un seul chemin pour le courant. C'est pour cela que si on débranche un seul dipôle, ou si une lampe grille, tout le circuit s'arrête d'un coup : plus rien ne fonctionne. Une propriété importante à retenir : dans un circuit série, l'intensité du courant est la même partout, en tout point du circuit.",
    },
    {
      titre: "Le circuit en dérivation",
      illustration: "🔀",
      visuel: "Plusieurs branches",
      contenu: [
        "Dans un circuit en dérivation, il existe plusieurs branches en parallèle",
        "Chaque récepteur peut être commandé indépendamment des autres",
        "Si on débranche une lampe, les autres branches continuent de fonctionner",
        "L'intensité totale se répartit entre les différentes branches",
      ],
      voixOff:
        "Dans un circuit en dérivation, aussi appelé circuit parallèle, il existe plusieurs branches distinctes entre les deux bornes du générateur. L'avantage, c'est que chaque récepteur peut fonctionner de façon indépendante : si on débranche une lampe, ou si son interrupteur s'ouvre, les autres branches continuent de fonctionner normalement. L'intensité délivrée par le générateur se répartit entre les différentes branches du circuit.",
    },
    {
      titre: "Le court-circuit : danger !",
      illustration: "⚠️",
      visuel: "Fil direct + à − = danger",
      contenu: [
        "Un court-circuit relie directement les deux bornes d'un générateur par un simple fil",
        "L'intensité devient alors très forte, sans aucun récepteur pour la limiter",
        "Conséquences : échauffement important, risque d'incendie, pile détériorée",
        "Un court-circuit est toujours à éviter, dans un montage comme à la maison",
      ],
      voixOff:
        "Un court-circuit se produit quand un simple fil relie directement la borne plus et la borne moins d'un générateur, sans passer par un récepteur qui limiterait le courant. L'intensité devient alors extrêmement forte, beaucoup trop forte. Cela provoque un échauffement important des fils, un risque d'incendie, et cela détériore rapidement la pile. Un court-circuit est dangereux et doit toujours être évité.",
    },
    {
      titre: "Mesurer l'intensité et la tension",
      illustration: "📟",
      visuel: "Ampèremètre en série, Voltmètre en dérivation",
      contenu: [
        "L'intensité (I) se mesure en ampères (A) avec un ampèremètre",
        "L'ampèremètre se branche EN SÉRIE, directement dans le circuit",
        "La tension (U) se mesure en volts (V) avec un voltmètre",
        "Le voltmètre se branche EN DÉRIVATION, aux bornes du dipôle étudié",
      ],
      voixOff:
        "Pour mesurer l'intensité du courant, notée I et exprimée en ampères, on utilise un ampèremètre. Attention, il doit être branché en série, directement inséré dans le circuit, sur le chemin du courant. Pour mesurer la tension, notée U et exprimée en volts, on utilise un voltmètre. Lui, au contraire, se branche en dérivation, c'est-à-dire directement aux bornes du dipôle que l'on étudie, sans l'intégrer au chemin principal du courant.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Circuit fermé = ça fonctionne ; circuit ouvert = rien ne fonctionne",
        "Courant : de la borne + vers la borne − à l'extérieur du générateur",
        "Série : un seul chemin, même intensité partout ; Dérivation : plusieurs branches indépendantes",
        "Ampèremètre en série (I en A), voltmètre en dérivation (U en V) ; jamais de court-circuit",
      ],
      voixOff:
        "Résumons ce chapitre. Un circuit doit être fermé pour fonctionner, et le courant circule toujours de la borne plus vers la borne moins à l'extérieur du générateur. Dans un circuit série, il n'y a qu'un seul chemin et l'intensité est la même partout. Dans un circuit en dérivation, plusieurs branches fonctionnent indépendamment les unes des autres. Pour mesurer, on branche l'ampèremètre en série et le voltmètre en dérivation. Et surtout, on évite toujours le court-circuit, qui est dangereux. Bravo, tu maîtrises maintenant les bases des circuits électriques !",
    },
  ],
  fiche: {
    intro:
      "Un circuit électrique est une chaîne fermée de dipôles reliés par des fils conducteurs. Il faut connaître les symboles normalisés, la différence entre circuit série et circuit en dérivation, le danger du court-circuit, et savoir mesurer l'intensité et la tension.",
    sections: [
      {
        titre: "Dipôles et symboles normalisés",
        points: [
          "Générateur (pile) : trait long (borne +) et trait court (borne −)",
          "Lampe : cercle avec une croix à l'intérieur",
          "Interrupteur, fil conducteur, moteur (M dans un cercle), résistor",
          "DEL (diode électroluminescente) : dipôle polarisé, ne s'allume que si elle est branchée dans le bon sens",
        ],
      },
      {
        titre: "Circuit fermé et sens du courant",
        points: [
          "Circuit fermé : boucle complète, le courant circule, les récepteurs fonctionnent",
          "Circuit ouvert (interrupteur ouvert, fil coupé) : le courant ne circule pas",
          "Sens conventionnel du courant : à l'extérieur du générateur, de la borne + vers la borne −",
        ],
      },
      {
        titre: "Circuit série et circuit en dérivation",
        points: [
          "Série : dipôles à la suite, un seul chemin, même intensité en tout point",
          "Série : un dipôle débranché ou grillé arrête tout le circuit",
          "Dérivation : plusieurs branches, chaque récepteur peut être commandé indépendamment",
          "Dérivation : l'intensité totale se répartit entre les branches",
        ],
      },
      {
        titre: "Court-circuit et mesures",
        points: [
          "Court-circuit : fil reliant directement les deux bornes du générateur, intensité très forte et dangereuse (échauffement, incendie, pile détériorée) — à éviter",
          "Ampèremètre : mesure l'intensité I (en ampères, A), branché en série",
          "Voltmètre : mesure la tension U (en volts, V), branché en dérivation aux bornes du dipôle",
          "Sécurité : ne jamais toucher un fil dénudé, ne jamais manipuler le secteur 230 V",
        ],
      },
    ],
    audio:
      "Fiche de révision : les circuits électriques. Un circuit électrique est une chaîne fermée de dipôles reliés par des fils conducteurs, comprenant au moins un générateur, comme une pile, et au moins un récepteur, comme une lampe ou un moteur. Chaque dipôle a un symbole normalisé : la pile se dessine avec un trait long pour la borne plus et un trait court pour la borne moins, la lampe est un cercle avec une croix, et il existe aussi des symboles pour l'interrupteur, le fil, le moteur, le résistor et la diode électroluminescente, qui est un dipôle polarisé ne s'allumant que dans un seul sens. Pour fonctionner, un circuit doit être fermé : si l'interrupteur est ouvert ou si un fil est coupé, aucun courant ne circule. Le sens conventionnel du courant va, à l'extérieur du générateur, de la borne plus vers la borne moins. Dans un circuit série, les dipôles sont branchés les uns après les autres, il n'existe qu'un seul chemin pour le courant, l'intensité est la même en tout point, et un seul dipôle débranché arrête tout le circuit. Dans un circuit en dérivation, il existe plusieurs branches, chaque récepteur peut être commandé indépendamment des autres, et l'intensité totale se répartit entre les branches. Un court-circuit, c'est un fil qui relie directement les deux bornes du générateur sans récepteur : l'intensité devient alors très forte et dangereuse, provoquant échauffement, risque d'incendie et détérioration de la pile, il faut toujours l'éviter. Enfin, on mesure l'intensité avec un ampèremètre branché en série, en ampères, et la tension avec un voltmètre branché en dérivation aux bornes du dipôle, en volts.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un circuit électrique ?", verso: "Une chaîne fermée de dipôles reliés par des fils conducteurs, avec au moins un générateur et un récepteur." },
    { recto: "Symbole de la pile ?", verso: "Un trait long (borne +) et un trait court (borne −), côte à côte." },
    { recto: "Sens conventionnel du courant à l'extérieur du générateur ?", verso: "De la borne + vers la borne −." },
    { recto: "Circuit série : que se passe-t-il si on débranche une lampe ?", verso: "Tout le circuit s'arrête : il n'y a qu'un seul chemin pour le courant." },
    { recto: "Circuit en dérivation : que se passe-t-il si on débranche une lampe ?", verso: "Les autres branches continuent de fonctionner normalement, car elles sont indépendantes." },
    { recto: "Qu'est-ce qu'un court-circuit ?", verso: "Un fil qui relie directement les deux bornes d'un générateur : intensité très forte et dangereuse." },
    { recto: "Comment brancher un ampèremètre ?", verso: "En série, directement dans le circuit, pour mesurer l'intensité I en ampères (A)." },
    { recto: "Comment brancher un voltmètre ?", verso: "En dérivation, aux bornes du dipôle étudié, pour mesurer la tension U en volts (V)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un circuit électrique fonctionne quand il est :",
      choix: ["ouvert", "fermé", "coupé", "débranché"],
      bonneReponse: 1,
      explication: "Un circuit doit être fermé, c'est-à-dire former une boucle complète, pour que le courant puisse circuler.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel symbole représente une lampe ?",
      choix: ["Un trait long et un trait court", "Un cercle avec une croix à l'intérieur", "Un triangle", "Deux lignes parallèles"],
      bonneReponse: 1,
      explication: "La lampe se représente par un cercle avec une croix à l'intérieur.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les deux dipôles indispensables pour qu'un circuit électrique fonctionne.",
      reponse: "Un générateur (par exemple une pile) et un récepteur (par exemple une lampe).",
      explication: "Sans générateur, rien ne fait circuler le courant. Sans récepteur, le courant n'a rien à alimenter.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "À l'extérieur du générateur, le courant circule :",
      choix: ["de la borne − vers la borne +", "de la borne + vers la borne −", "dans les deux sens en même temps", "cela dépend du dipôle"],
      bonneReponse: 1,
      explication: "Par convention, le sens du courant à l'extérieur du générateur va toujours de la borne + vers la borne −.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un circuit série comportant deux lampes, si l'une d'elles grille :",
      choix: ["seule cette lampe s'éteint", "les deux lampes s'éteignent", "les deux lampes brillent plus fort", "rien ne change"],
      bonneReponse: 1,
      explication: "En série, il n'y a qu'un seul chemin pour le courant : si une lampe grille, la boucle est coupée et tout le circuit s'arrête.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi, dans un circuit en dérivation, on peut éteindre une lampe sans éteindre les autres.",
      reponse: "Parce que chaque lampe est placée sur une branche indépendante : couper une branche n'empêche pas le courant de circuler dans les autres branches.",
      explication: "C'est l'intérêt principal du circuit en dérivation : chaque récepteur peut être commandé séparément.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un ampèremètre doit être branché :",
      choix: ["en dérivation, aux bornes du générateur", "en série, dans le circuit", "en dehors du circuit", "uniquement sur une lampe allumée"],
      bonneReponse: 1,
      explication: "L'ampèremètre mesure l'intensité qui traverse le circuit : il doit donc être inséré en série, sur le chemin du courant.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un court-circuit et pourquoi est-il dangereux ?",
      reponse: "C'est un fil qui relie directement les deux bornes d'un générateur, sans passer par un récepteur. L'intensité devient alors très forte, ce qui provoque un échauffement dangereux, un risque d'incendie et détériore la pile.",
      explication: "Sans récepteur pour limiter le courant, l'intensité augmente fortement : c'est pour cela qu'un court-circuit est toujours à éviter.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un voltmètre est branché aux bornes d'une lampe éteinte dans un circuit en dérivation dont les autres lampes fonctionnent. Que peut-on dire de son branchement ?",
      choix: ["Il est mal branché, un voltmètre ne se branche jamais aux bornes d'un dipôle", "Il est correctement branché : le voltmètre se branche toujours en dérivation", "Il faudrait le brancher en série pour que ça fonctionne", "Un voltmètre ne peut mesurer que des piles"],
      bonneReponse: 1,
      explication: "Le voltmètre se branche toujours en dérivation aux bornes du dipôle étudié, quel que soit l'état de ce dipôle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Dans un circuit série avec une pile, un interrupteur et deux lampes, on mesure l'intensité à trois endroits différents du circuit. Que peut-on dire des trois mesures obtenues ?",
      reponse: "Les trois mesures sont identiques : dans un circuit série, l'intensité du courant est la même en tout point du circuit.",
      explication: "C'est la loi d'unicité de l'intensité dans un circuit série : le courant ne se divise pas, il n'y a qu'un seul chemin.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une DEL (diode électroluminescente) ne s'allume pas dans un montage, alors que le circuit est bien fermé et que la pile fonctionne. Propose une explication et une solution.",
      reponse: "La DEL est un dipôle polarisé : elle ne s'allume que si elle est branchée dans le bon sens. Il faut inverser le branchement de la DEL dans le circuit pour qu'elle s'allume.",
      explication: "Contrairement à une lampe classique, la DEL ne fonctionne que dans un sens précis de branchement, contrôlé par le sens du courant.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Que se passe-t-il pour l'intensité totale débitée par le générateur quand on ajoute une deuxième lampe en dérivation dans un circuit qui en comportait déjà une ?",
      choix: ["Elle diminue fortement", "Elle reste strictement identique", "Elle augmente, car le courant se répartit entre les deux branches", "Elle devient nulle"],
      bonneReponse: 2,
      explication: "Chaque branche supplémentaire ajoute son propre courant : l'intensité totale débitée par le générateur augmente et se répartit entre les branches.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel appareil mesure la tension aux bornes d'un dipôle ?",
      choix: ["L'ampèremètre", "Le voltmètre", "L'interrupteur", "Le générateur"],
      bonneReponse: 1,
      explication: "Le voltmètre mesure la tension U, en volts, et se branche en dérivation aux bornes du dipôle.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment appelle-t-on un circuit dans lequel il n'existe qu'un seul chemin pour le courant ?",
      reponse: "Un circuit série.",
      explication: "Dans un circuit série, tous les dipôles sont placés à la suite les uns des autres.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un circuit en dérivation, si une branche est coupée :",
      choix: ["tout le circuit s'arrête", "les autres branches continuent de fonctionner", "l'intensité devient infinie", "la pile explose"],
      bonneReponse: 1,
      explication: "Les branches d'un circuit en dérivation sont indépendantes : couper l'une d'elles n'affecte pas les autres.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi ne faut-il jamais réaliser un court-circuit ?",
      reponse: "Parce que l'intensité devient très forte, ce qui échauffe les fils, présente un risque d'incendie et détériore la pile.",
      explication: "Sans récepteur pour limiter le courant, l'intensité grimpe fortement dans un court-circuit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un ampèremètre a été branché en dérivation aux bornes d'une lampe par erreur. Quelle est l'erreur commise et quel est le bon branchement ?",
      reponse: "L'ampèremètre a été branché comme un voltmètre. Il doit être branché en série, inséré directement dans le circuit, et non en dérivation aux bornes d'un dipôle.",
      explication: "L'ampèremètre mesure l'intensité qui circule : il doit être traversé par le courant, donc placé en série.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les circuits électriques",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un circuit électrique doit obligatoirement comporter :",
          choix: ["deux lampes", "un générateur et un récepteur", "un voltmètre", "une DEL"],
          bonneReponse: 1,
          explication: "Il faut au moins un générateur (qui fait circuler le courant) et un récepteur (qui l'utilise).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Que se passe-t-il si l'on ouvre l'interrupteur d'un circuit série ?",
          reponse: "Le circuit devient ouvert : le courant ne circule plus et tous les récepteurs s'arrêtent.",
          explication: "L'interrupteur ouvert interrompt la boucle du circuit : plus aucun courant ne peut circuler.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans un circuit série, l'intensité mesurée en différents points du circuit est :",
          choix: ["toujours différente", "toujours la même", "nulle près du générateur", "plus forte près de la lampe"],
          bonneReponse: 1,
          explication: "C'est une propriété du circuit série : l'intensité est la même en tout point, il n'y a qu'un seul chemin pour le courant.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris comment brancher un voltmètre pour mesurer la tension aux bornes d'une lampe.",
          reponse: "On branche le voltmètre en dérivation, directement sur les deux bornes de la lampe, sans le connecter en série dans le circuit.",
          explication: "Le voltmètre se branche toujours en dérivation aux bornes du dipôle dont on veut mesurer la tension.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Qu'est-ce qui distingue une DEL des autres dipôles comme la lampe ?",
          choix: ["Elle ne consomme jamais de courant", "Elle est polarisée : elle ne s'allume que dans un sens", "Elle fonctionne uniquement en dérivation", "Elle ne peut pas être associée à une pile"],
          bonneReponse: 1,
          explication: "La DEL est un dipôle polarisé : si elle est branchée à l'envers, elle ne s'allume pas.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "On réalise par erreur un fil reliant directement les deux bornes d'une pile, sans aucun récepteur. Nomme ce phénomène et explique ses conséquences.",
          reponse: "C'est un court-circuit. L'intensité devient très forte car rien ne la limite, ce qui provoque un échauffement important, un risque d'incendie et une détérioration rapide de la pile.",
          explication: "Sans récepteur pour limiter le courant, un court-circuit est toujours dangereux et doit être évité.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les circuits électriques",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le symbole d'un interrupteur ouvert représente :",
          choix: ["un circuit qui fonctionne toujours", "une coupure possible du circuit", "un générateur", "un voltmètre"],
          bonneReponse: 1,
          explication: "L'interrupteur permet d'ouvrir ou de fermer volontairement le circuit.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans quelle unité s'exprime l'intensité du courant électrique ?",
          reponse: "En ampères (A).",
          explication: "L'intensité, notée I, se mesure en ampères à l'aide d'un ampèremètre.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Deux lampes sont montées en dérivation aux bornes d'une pile. On débranche une lampe. L'autre lampe :",
          choix: ["s'éteint aussi", "continue de briller", "brille beaucoup moins fort", "explose"],
          bonneReponse: 1,
          explication: "Les branches d'un circuit en dérivation sont indépendantes : l'autre lampe continue de fonctionner normalement.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre le branchement d'un ampèremètre et celui d'un voltmètre.",
          reponse: "L'ampèremètre se branche en série, inséré directement dans le circuit, pour mesurer l'intensité. Le voltmètre se branche en dérivation, aux bornes d'un dipôle, pour mesurer la tension.",
          explication: "Ces deux appareils de mesure ne se branchent jamais de la même façon : l'un est traversé par le courant, l'autre est placé en parallèle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Le sens conventionnel du courant, à l'extérieur du générateur, va :",
          choix: ["de la borne + vers la borne −", "de la borne − vers la borne +", "il n'y a pas de sens défini", "cela dépend de la couleur des fils"],
          bonneReponse: 0,
          explication: "C'est une convention scientifique : le courant circule, à l'extérieur du générateur, de la borne + vers la borne −.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un circuit en dérivation comporte trois lampes identiques allumées. On mesure l'intensité totale débitée par le générateur, puis l'intensité dans chaque branche. Que peux-tu dire de la relation entre ces mesures ?",
          reponse: "L'intensité totale débitée par le générateur se répartit entre les trois branches : elle est égale à la somme des intensités mesurées dans chaque branche.",
          explication: "C'est la loi d'additivité des intensités dans un circuit en dérivation : l'intensité totale correspond à la somme des intensités des différentes branches.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un circuit électrique fermé forme une boucle continue de dipôles avec au moins un générateur et un récepteur ; un circuit ouvert ne fonctionne pas.",
    "Chaque dipôle a un symbole normalisé à connaître : pile, lampe, interrupteur, fil, moteur, DEL (polarisée), résistor.",
    "Le courant circule, à l'extérieur du générateur, de la borne + vers la borne − (sens conventionnel).",
    "Circuit série : un seul chemin, même intensité partout, un dipôle en panne arrête tout ; circuit en dérivation : branches indépendantes, intensités qui s'additionnent.",
    "Le court-circuit (fil reliant directement les deux bornes du générateur) est toujours dangereux et doit être évité.",
    "Ampèremètre = intensité I (ampères, A), branché en série ; voltmètre = tension U (volts, V), branché en dérivation aux bornes du dipôle.",
  ],
},
{
  slug: "etats-de-leau",
  titre: "L'eau et ses états",
  matiere: "physique-chimie",
  niveau: "5eme",
  description:
    "Connaître les trois états de l'eau et leurs propriétés, nommer les changements d'état, comprendre les paliers de température à 0 °C et 100 °C, la conservation de la masse et le cycle de l'eau.",
  objectifs: [
    "Décrire les propriétés des états solide, liquide et gazeux de l'eau",
    "Nommer les changements d'état : fusion, solidification, vaporisation, liquéfaction",
    "Connaître les paliers de température de l'eau pure : 0 °C et 100 °C",
    "Savoir que la masse se conserve lors d'un changement d'état (mais pas le volume)",
    "Expliquer les grandes étapes du cycle de l'eau",
  ],
  slides: [
    {
      titre: "Les trois états de l'eau",
      illustration: "🧊",
      visuel: "Solide • Liquide • Gaz",
      contenu: [
        "L'eau existe sous trois états physiques",
        "Solide : la glace, la neige, le givre",
        "Liquide : l'eau du robinet, la pluie, les océans",
        "Gazeux : la vapeur d'eau, invisible dans l'air",
      ],
      voixOff:
        "L'eau est partout autour de nous, et elle peut exister sous trois états physiques. À l'état solide, c'est la glace, la neige ou le givre. À l'état liquide, c'est l'eau du robinet, la pluie ou les océans. Et à l'état gazeux, c'est la vapeur d'eau, présente dans l'air mais invisible.",
    },
    {
      titre: "L'état solide",
      illustration: "🧊",
      visuel: "Forme propre",
      contenu: [
        "Un solide a une forme propre : il garde sa forme",
        "Un glaçon reste un glaçon, quel que soit le récipient",
        "On peut le saisir avec les doigts",
        "Son volume ne change pas quand on le déplace",
      ],
      voixOff:
        "À l'état solide, l'eau a une forme propre : elle garde sa forme. Un glaçon reste un glaçon, que tu le poses dans un verre ou dans une assiette. On peut le saisir avec les doigts, et son volume ne change pas quand on le déplace.",
    },
    {
      titre: "L'état liquide",
      illustration: "💧",
      visuel: "Surface libre horizontale",
      contenu: [
        "Un liquide n'a pas de forme propre : il prend la forme du récipient",
        "Sa surface libre au repos est plane et horizontale",
        "On ne peut pas le saisir, il coule",
        "Son volume, lui, ne change pas",
      ],
      voixOff:
        "À l'état liquide, l'eau n'a pas de forme propre : elle prend la forme du récipient qui la contient. Au repos, sa surface libre est toujours plane et horizontale, même si on penche le récipient. On ne peut pas la saisir, elle coule entre les doigts. En revanche, son volume ne change pas.",
    },
    {
      titre: "L'état gazeux",
      illustration: "☁️",
      visuel: "Vapeur d'eau = invisible",
      contenu: [
        "Un gaz n'a ni forme propre, ni volume propre",
        "Il occupe tout l'espace disponible",
        "Il est compressible et expansible",
        "⚠️ La vapeur d'eau est invisible : la buée et les nuages sont de l'eau liquide !",
      ],
      voixOff:
        "À l'état gazeux, l'eau n'a ni forme propre, ni volume propre : elle occupe tout l'espace disponible. Un gaz peut être comprimé ou détendu. Attention au piège classique : la vapeur d'eau est invisible ! La buée, le brouillard et les nuages, ce sont de minuscules gouttelettes d'eau liquide.",
    },
    {
      titre: "Les changements d'état",
      illustration: "🔄",
      visuel: "Solide ⇄ Liquide ⇄ Gaz",
      contenu: [
        "Fusion : solide → liquide (le glaçon fond)",
        "Solidification : liquide → solide (l'eau gèle)",
        "Vaporisation : liquide → gaz (l'eau s'évapore ou bout)",
        "Liquéfaction : gaz → liquide (la buée se forme)",
      ],
      voixOff:
        "L'eau peut passer d'un état à un autre : ce sont les changements d'état. La fusion, c'est le passage du solide au liquide, quand le glaçon fond. La solidification, c'est l'inverse : l'eau qui gèle. La vaporisation, c'est le passage du liquide au gaz. Et la liquéfaction, c'est le passage du gaz au liquide, comme la buée qui se forme sur une vitre froide.",
    },
    {
      titre: "Les paliers de température",
      illustration: "🌡️",
      visuel: "0 °C et 100 °C",
      contenu: [
        "L'eau pure fond et se solidifie à 0 °C",
        "L'eau pure bout à 100 °C (à pression atmosphérique normale)",
        "Pendant le changement d'état, la température reste constante : c'est un palier",
        "Ce palier est la signature d'un corps pur",
      ],
      voixOff:
        "L'eau pure change d'état à des températures bien précises : elle fond et se solidifie à zéro degré Celsius, et elle bout à cent degrés Celsius, à la pression atmosphérique normale. Pendant tout le changement d'état, la température ne bouge plus : on observe un palier de température. Ce palier est la signature d'un corps pur.",
    },
    {
      titre: "La masse se conserve",
      illustration: "⚖️",
      visuel: "200 g d'eau → 200 g de glace",
      contenu: [
        "Lors d'un changement d'état, la masse ne change pas",
        "200 g d'eau liquide donnent exactement 200 g de glace",
        "⚠️ Le volume, lui, change : la glace occupe plus de place que l'eau liquide",
        "C'est pourquoi une bouteille pleine éclate au congélateur",
      ],
      voixOff:
        "Lors d'un changement d'état, la masse de l'eau se conserve : deux cents grammes d'eau liquide donnent exactement deux cents grammes de glace. Attention, le volume, lui, change ! En gelant, l'eau prend plus de place. C'est pour cela qu'une bouteille pleine d'eau, fermée et placée au congélateur, finit par éclater.",
    },
    {
      titre: "Le cycle de l'eau",
      illustration: "🌍",
      visuel: "Océan → Nuage → Pluie → Rivière",
      contenu: [
        "Le Soleil fait évaporer l'eau des océans (vaporisation)",
        "En altitude, la vapeur se liquéfie en gouttelettes : les nuages",
        "L'eau retombe en pluie ou en neige : les précipitations",
        "Elle ruisselle, s'infiltre et rejoint les rivières puis l'océan",
      ],
      voixOff:
        "Sur Terre, l'eau circule sans cesse : c'est le cycle de l'eau. Le Soleil chauffe les océans et fait évaporer l'eau. En altitude, l'air est froid : la vapeur se liquéfie en minuscules gouttelettes qui forment les nuages. L'eau retombe ensuite en pluie ou en neige, ruisselle, s'infiltre dans le sol, puis rejoint les rivières et l'océan. Et le cycle recommence.",
    },
    {
      titre: "Évaporation ou ébullition ?",
      illustration: "♨️",
      visuel: "2 façons de se vaporiser",
      contenu: [
        "L'évaporation : lente, à la surface, à toute température (linge qui sèche)",
        "L'ébullition : rapide, avec de grosses bulles, à 100 °C pour l'eau pure",
        "Dans les deux cas, c'est une vaporisation",
      ],
      voixOff:
        "Il existe deux façons pour l'eau liquide de devenir un gaz. L'évaporation est lente, se produit à la surface du liquide et à n'importe quelle température : c'est ainsi que le linge sèche. L'ébullition est rapide, avec de grosses bulles dans tout le liquide, et se produit à cent degrés pour l'eau pure. Dans les deux cas, il s'agit bien d'une vaporisation.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Solide : forme propre / Liquide : surface horizontale / Gaz : occupe tout l'espace",
        "Fusion, solidification, vaporisation, liquéfaction",
        "Paliers de l'eau pure : 0 °C et 100 °C",
        "La masse se conserve, le volume change ; l'eau circule dans le cycle de l'eau",
      ],
      voixOff:
        "Résumons. L'eau existe sous trois états : le solide a une forme propre, le liquide a une surface libre horizontale, et le gaz occupe tout l'espace disponible. Les changements d'état s'appellent fusion, solidification, vaporisation et liquéfaction. L'eau pure fond à zéro degré et bout à cent degrés, avec un palier de température. Lors d'un changement d'état, la masse se conserve mais le volume change. Bravo, tu connais maintenant l'essentiel sur l'eau et ses états !",
    },
  ],
  fiche: {
    intro:
      "L'eau existe sous trois états physiques — solide, liquide et gazeux — et passe de l'un à l'autre lors des changements d'état, à des températures précises pour l'eau pure.",
    sections: [
      {
        titre: "Les trois états et leurs propriétés",
        points: [
          "Solide (glace) : forme propre, on peut le saisir",
          "Liquide : pas de forme propre, prend la forme du récipient, surface libre plane et horizontale au repos",
          "Gaz (vapeur d'eau) : ni forme ni volume propres, occupe tout l'espace, compressible — et invisible",
        ],
      },
      {
        titre: "Les changements d'état",
        points: [
          "Fusion : solide → liquide",
          "Solidification : liquide → solide",
          "Vaporisation : liquide → gaz (évaporation lente ou ébullition à 100 °C)",
          "Liquéfaction : gaz → liquide (buée, nuages)",
        ],
      },
      {
        titre: "Les paliers de température",
        points: [
          "Eau pure : fusion et solidification à 0 °C, ébullition à 100 °C (pression atmosphérique normale)",
          "Pendant le changement d'état, la température reste constante : c'est le palier",
          "Le palier est la signature d'un corps pur (l'eau salée n'a pas de palier net)",
        ],
      },
      {
        titre: "Masse et volume",
        points: [
          "La masse se conserve lors d'un changement d'état : 200 g d'eau → 200 g de glace",
          "Le volume, lui, change : la glace occupe plus de place que l'eau liquide",
          "Conséquence : une bouteille pleine et fermée éclate au congélateur",
        ],
      },
      {
        titre: "Le cycle de l'eau",
        points: [
          "Évaporation des océans sous l'action du Soleil",
          "Liquéfaction en altitude : formation des nuages",
          "Précipitations (pluie, neige), ruissellement, infiltration",
          "Retour aux rivières et aux océans, et le cycle recommence",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'eau et ses états. L'eau existe sous trois états. Le solide, comme la glace, a une forme propre. Le liquide n'a pas de forme propre : il prend la forme du récipient et sa surface libre au repos est plane et horizontale. Le gaz, la vapeur d'eau, est invisible et occupe tout l'espace disponible. Les changements d'état ont chacun un nom : la fusion du solide vers le liquide, la solidification du liquide vers le solide, la vaporisation du liquide vers le gaz, et la liquéfaction du gaz vers le liquide. L'eau pure fond à zéro degré Celsius et bout à cent degrés Celsius : pendant le changement d'état, la température reste constante, c'est un palier. Lors d'un changement d'état, la masse se conserve mais le volume change : la glace occupe plus de place que l'eau liquide. Enfin, l'eau circule sans cesse sur Terre grâce au cycle de l'eau : évaporation, formation des nuages, précipitations, puis retour aux rivières et aux océans.",
  },
  memoCards: [
    { recto: "Quels sont les trois états de l'eau ?", verso: "Solide (glace), liquide (eau), gazeux (vapeur d'eau)." },
    { recto: "Propriété d'un solide ?", verso: "Il a une forme propre : il garde sa forme, on peut le saisir." },
    { recto: "Comment est la surface libre d'un liquide au repos ?", verso: "Plane et horizontale, quel que soit le récipient." },
    { recto: "La vapeur d'eau est-elle visible ?", verso: "Non ! Elle est invisible. La buée et les nuages sont de l'eau LIQUIDE (gouttelettes)." },
    { recto: "Fusion = ?", verso: "Passage de l'état solide à l'état liquide (le glaçon fond)." },
    { recto: "Liquéfaction = ?", verso: "Passage de l'état gazeux à l'état liquide (formation de la buée)." },
    { recto: "À quelle température l'eau pure fond-elle ?", verso: "À 0 °C. La température reste constante pendant la fusion : c'est un palier." },
    { recto: "À quelle température l'eau pure bout-elle ?", verso: "À 100 °C, à pression atmosphérique normale." },
    { recto: "On congèle 200 g d'eau. Masse de la glace ?", verso: "200 g : la masse se conserve lors d'un changement d'état (mais le volume augmente)." },
    { recto: "Les 4 grandes étapes du cycle de l'eau ?", verso: "Évaporation → formation des nuages (liquéfaction) → précipitations → ruissellement/infiltration vers rivières et océans." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un glaçon, l'eau est à l'état :",
      choix: ["liquide", "solide", "gazeux", "invisible"],
      bonneReponse: 1,
      explication: "Un glaçon est de l'eau à l'état solide : il a une forme propre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le passage de l'état solide à l'état liquide s'appelle :",
      choix: ["la solidification", "la fusion", "la vaporisation", "la liquéfaction"],
      bonneReponse: 1,
      explication: "La fusion est le passage du solide au liquide, comme un glaçon qui fond.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quelle température l'eau pure se transforme-t-elle en glace ?",
      reponse: "À 0 °C",
      explication: "L'eau pure se solidifie à 0 °C, et la température reste constante pendant toute la solidification (palier).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Au repos, la surface libre d'un liquide est toujours :",
      choix: ["inclinée", "verticale", "plane et horizontale", "en forme de vague"],
      bonneReponse: 2,
      explication: "Quel que soit le récipient, même penché, la surface libre d'un liquide au repos est plane et horizontale.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "On place 150 g d'eau liquide au congélateur. Quelle est la masse de la glace obtenue ?",
      reponse: "150 g",
      explication: "La masse se conserve lors d'un changement d'état : 150 g d'eau donnent 150 g de glace. Seul le volume change.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La vaporisation est le passage de l'état :",
      choix: ["gazeux à liquide", "liquide à gazeux", "solide à gazeux", "solide à liquide"],
      bonneReponse: 1,
      explication: "La vaporisation transforme un liquide en gaz. Elle peut être lente (évaporation) ou rapide (ébullition).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi une bouteille en verre pleine d'eau et bien fermée éclate-t-elle au congélateur ?",
      reponse: "Parce que le volume de l'eau augmente quand elle se solidifie.",
      explication: "La masse ne change pas, mais la glace occupe plus de place que l'eau liquide : le volume augmente et fait éclater la bouteille.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pendant toute l'ébullition de l'eau pure, la température :",
      choix: ["augmente régulièrement", "diminue lentement", "reste constante à 100 °C", "dépend du récipient utilisé"],
      bonneReponse: 2,
      explication: "Pendant le changement d'état d'un corps pur, la température reste constante : c'est le palier à 100 °C pour l'ébullition de l'eau.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "On refroidit de l'eau liquide et on trace la courbe de température. On observe un palier à 0 °C. Que se passe-t-il pendant ce palier ?",
      reponse: "L'eau se solidifie : eau liquide et glace coexistent, et la température reste à 0 °C tant que la solidification n'est pas terminée.",
      explication: "Le palier correspond au changement d'état. Tant qu'il reste de l'eau liquide à transformer en glace, la température ne descend pas sous 0 °C.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Après une douche chaude, de la buée se forme sur le miroir froid de la salle de bain. Explique ce phénomène en nommant le changement d'état.",
      reponse: "La vapeur d'eau de l'air se liquéfie au contact du miroir froid : c'est une liquéfaction, qui forme de fines gouttelettes d'eau liquide.",
      explication: "La buée n'est pas de la vapeur (invisible) : c'est de l'eau liquide formée par liquéfaction du gaz au contact d'une surface froide.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un glaçon de 20 g fond entièrement dans un verre vide. Quelle masse d'eau liquide obtient-on ?",
      choix: ["Moins de 20 g", "Exactement 20 g", "Plus de 20 g", "On ne peut pas le prévoir"],
      bonneReponse: 1,
      explication: "La masse se conserve lors de la fusion : 20 g de glace donnent exactement 20 g d'eau liquide.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris les grandes étapes du cycle de l'eau en nommant les changements d'état concernés.",
      reponse:
        "1) Le Soleil fait évaporer l'eau des océans (vaporisation). 2) En altitude, la vapeur se liquéfie en gouttelettes qui forment les nuages (liquéfaction). 3) L'eau retombe en pluie ou en neige (précipitations). 4) Elle ruisselle et s'infiltre, puis rejoint les rivières et les océans.",
      explication: "Le cycle enchaîne une vaporisation (évaporation) puis une liquéfaction (nuages), avant le retour de l'eau liquide (ou solide, la neige) vers le sol et les océans.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le passage de l'état gazeux à l'état liquide s'appelle :",
      choix: ["la fusion", "la vaporisation", "la liquéfaction", "la solidification"],
      bonneReponse: 2,
      explication: "La liquéfaction transforme un gaz en liquide, comme la buée sur une vitre froide.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quelle température l'eau pure bout-elle, à pression atmosphérique normale ?",
      reponse: "À 100 °C",
      explication: "L'ébullition de l'eau pure se fait à 100 °C, avec un palier de température.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Lors d'un changement d'état de l'eau :",
      choix: ["la masse et le volume changent", "la masse se conserve, le volume peut changer", "le volume se conserve, la masse change", "rien ne change"],
      bonneReponse: 1,
      explication: "La masse se conserve toujours ; le volume, lui, change (la glace prend plus de place que l'eau liquide).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "La vapeur d'eau est-elle visible ? Et la buée, qu'est-ce que c'est ?",
      reponse: "La vapeur d'eau est invisible. La buée est de l'eau liquide : de fines gouttelettes formées par liquéfaction.",
      explication: "C'est le piège classique : tout ce qu'on voit (buée, brouillard, nuages) est de l'eau liquide, pas du gaz.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment se forment les nuages dans le cycle de l'eau ?",
      reponse: "La vapeur d'eau issue de l'évaporation se liquéfie en altitude, où l'air est froid, en minuscules gouttelettes : c'est la liquéfaction.",
      explication: "Les nuages sont constitués de gouttelettes d'eau liquide (ou de cristaux de glace), pas de vapeur.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'eau et ses états",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel état de l'eau possède une forme propre ?",
          choix: ["L'état liquide", "L'état gazeux", "L'état solide", "Aucun"],
          bonneReponse: 2,
          explication: "Seul le solide (la glace) a une forme propre : il garde sa forme.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Comment s'appelle le passage de l'état liquide à l'état solide ?",
          reponse: "La solidification",
          explication: "C'est ce qui se produit quand l'eau gèle à 0 °C.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "On fait fondre 80 g de glace. Quelle masse d'eau liquide obtient-on ? Justifie.",
          reponse: "80 g, car la masse se conserve lors d'un changement d'état.",
          explication: "La fusion ne change pas la masse : 80 g de glace donnent 80 g d'eau liquide.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "On chauffe de l'eau pure. À 100 °C, elle bout. Si on continue de chauffer pendant l'ébullition, la température :",
          choix: ["monte au-dessus de 100 °C", "reste à 100 °C", "redescend vers 90 °C", "monte jusqu'à 200 °C"],
          bonneReponse: 1,
          explication: "Tant qu'il reste de l'eau liquide, la température reste au palier de 100 °C : l'énergie sert au changement d'état.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite les deux formes de vaporisation et donne une différence entre elles.",
          reponse: "L'évaporation (lente, à la surface, à toute température) et l'ébullition (rapide, dans tout le liquide, à 100 °C pour l'eau pure).",
          explication: "Les deux transforment le liquide en gaz, mais l'ébullition ne se produit qu'à la température d'ébullition.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un pot de yaourt gradué contient 100 mL d'eau (soit 100 g). On le place au congélateur. Donne la masse de la glace obtenue et indique si le niveau dans le pot a monté, baissé ou est resté identique. Justifie.",
          reponse: "La masse est toujours de 100 g (conservation de la masse). Le niveau a monté, car le volume de l'eau augmente lors de la solidification.",
          explication: "Changement d'état : masse conservée, mais la glace occupe un volume plus grand que l'eau liquide.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'eau et ses états",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un gaz :",
          choix: ["a une forme propre", "a une surface libre horizontale", "occupe tout l'espace disponible", "ne peut pas être comprimé"],
          bonneReponse: 2,
          explication: "Un gaz n'a ni forme ni volume propres : il occupe tout l'espace disponible et il est compressible.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la température de fusion de la glace (eau pure).",
          reponse: "0 °C",
          explication: "L'eau pure fond à 0 °C, avec un palier de température pendant toute la fusion.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Le brouillard est constitué :",
          choix: ["de vapeur d'eau", "de fines gouttelettes d'eau liquide", "de cristaux de sel", "d'air pur"],
          bonneReponse: 1,
          explication: "La vapeur d'eau est invisible. Le brouillard, comme la buée et les nuages, est fait de gouttelettes d'eau liquide.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Du linge mouillé sèche sur un fil, même par temps frais. Nomme et explique le changement d'état.",
          reponse: "C'est une vaporisation par évaporation : l'eau liquide passe lentement à l'état gazeux, à la surface du tissu, sans avoir besoin d'atteindre 100 °C.",
          explication: "L'évaporation se produit à toute température, contrairement à l'ébullition.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On chauffe de l'eau salée : la température d'ébullition dépasse 100 °C et il n'y a pas de palier net. Qu'en déduis-tu sur l'eau salée ?",
          reponse: "L'eau salée n'est pas un corps pur : c'est un mélange. Le palier de température net est la signature d'un corps pur comme l'eau pure.",
          explication: "Un mélange ne change pas d'état à température constante : l'absence de palier net révèle que ce n'est pas un corps pur.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Dans le cycle de l'eau, cite dans l'ordre les deux changements d'état qui se produisent entre l'océan et la pluie.",
          reponse: "1) La vaporisation (évaporation de l'eau des océans). 2) La liquéfaction (la vapeur devient gouttelettes dans les nuages), avant les précipitations.",
          explication: "Océan → vapeur (vaporisation) → nuages (liquéfaction) → pluie.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Trois états de l'eau : solide (forme propre), liquide (surface libre plane et horizontale), gaz (occupe tout l'espace, compressible).",
    "Quatre changements d'état à connaître : fusion (solide→liquide), solidification (liquide→solide), vaporisation (liquide→gaz), liquéfaction (gaz→liquide).",
    "Eau pure : palier à 0 °C (fusion/solidification) et à 100 °C (ébullition) — la température reste constante pendant le changement d'état.",
    "La masse se conserve lors d'un changement d'état ; le volume, lui, change (la glace occupe plus de place que l'eau liquide).",
    "Cycle de l'eau : évaporation → nuages (liquéfaction) → précipitations → ruissellement et retour aux océans.",
    "Erreur classique à éviter : croire que la buée, le brouillard ou les nuages sont de la vapeur d'eau — la vapeur est invisible, ce qu'on voit est de l'eau liquide.",
  ],
},
{
  slug: "melanges-corps-purs",
  titre: "Mélanges et corps purs",
  matiere: "physique-chimie",
  niveau: "5eme",
  description:
    "Distinguer un corps pur d'un mélange, reconnaître un mélange homogène ou hétérogène, comprendre la solubilité et la miscibilité, et connaître les techniques de séparation : décantation, filtration, distillation.",
  objectifs: [
    "Différencier un corps pur d'un mélange",
    "Distinguer mélange homogène et mélange hétérogène",
    "Connaître le vocabulaire de la dissolution : soluté, solvant, solution, saturation",
    "Savoir si deux liquides sont miscibles ou non miscibles",
    "Choisir la technique adaptée pour séparer un mélange : décantation, filtration ou distillation",
  ],
  slides: [
    {
      titre: "Corps pur ou mélange ?",
      illustration: "🧪",
      visuel: "1 espèce chimique = corps pur",
      contenu: [
        "Un corps pur ne contient qu'une seule espèce chimique",
        "Exemples : eau distillée, dioxygène, sucre pur",
        "Un mélange contient plusieurs espèces chimiques",
        "Exemples : eau salée, air, eau boueuse",
      ],
      voixOff:
        "En chimie, on classe la matière en deux grandes familles. Un corps pur ne contient qu'une seule espèce chimique, comme l'eau distillée, le dioxygène ou le sucre pur. Un mélange, au contraire, contient plusieurs espèces chimiques différentes, comme l'eau salée, l'air que tu respires ou l'eau boueuse d'une flaque.",
    },
    {
      titre: "Reconnaître un corps pur : transparence et palier de température",
      illustration: "🌡️",
      visuel: "Palier constant = corps pur",
      contenu: [
        "⚠️ Une eau peut être transparente et être un mélange (ex : l'eau minérale, avec des sels dissous)",
        "L'eau distillée, elle, ne contient rien d'autre que de l'eau : c'est un corps pur",
        "Un corps pur a des températures de fusion et d'ébullition bien définies, avec un palier constant",
        "Un mélange n'a pas de palier net : sa température continue de varier",
      ],
      voixOff:
        "Attention à un piège classique : une eau transparente n'est pas forcément un corps pur ! L'eau minérale, par exemple, est parfaitement transparente, mais elle contient des sels minéraux dissous : c'est un mélange. L'eau distillée, elle, ne contient rien d'autre que des molécules d'eau : c'est un corps pur. Pour vérifier la pureté d'une substance, on peut aussi observer sa température de changement d'état : un corps pur possède un palier constant, alors qu'un mélange n'a pas de palier net.",
    },
    {
      titre: "Mélange homogène",
      illustration: "🥃",
      visuel: "On ne distingue rien à l'œil nu",
      contenu: [
        "Dans un mélange homogène, on ne distingue pas les constituants à l'œil nu",
        "Exemples : eau salée, eau sucrée, l'air",
        "L'aspect est uniforme dans tout le mélange",
        "On dit aussi que c'est une solution",
        "L'air est un mélange homogène de gaz : environ 78 % de diazote et 21 % de dioxygène",
      ],
      voixOff:
        "Un mélange homogène est un mélange dans lequel on ne distingue pas les différents constituants à l'œil nu : l'aspect est uniforme partout. C'est le cas de l'eau salée, de l'eau sucrée, ou encore de l'air que nous respirons, qui est un mélange homogène de gaz composé d'environ soixante-dix-huit pour cent de diazote et vingt et un pour cent de dioxygène. On appelle aussi ce type de mélange une solution.",
    },
    {
      titre: "Mélange hétérogène",
      illustration: "🫙",
      visuel: "On distingue les constituants",
      contenu: [
        "Dans un mélange hétérogène, on distingue les constituants à l'œil nu",
        "Exemples : eau et huile, eau et sable, eau boueuse",
        "L'aspect n'est pas uniforme : on voit des phases ou des particules",
        "Avec le temps, les constituants peuvent se séparer",
      ],
      voixOff:
        "Un mélange hétérogène est un mélange dans lequel on distingue les différents constituants à l'œil nu. Quand on mélange de l'eau et de l'huile, ou de l'eau et du sable, on voit clairement deux parties différentes : ce n'est pas uniforme. C'est aussi le cas de l'eau boueuse, où l'on distingue des particules en suspension.",
    },
    {
      titre: "Solubilité : soluté, solvant, solution",
      illustration: "🧂",
      visuel: "Soluté + Solvant → Solution",
      contenu: [
        "Le soluté est la substance qui se dissout (solide, liquide ou gaz)",
        "Le solvant est le liquide qui dissout le soluté (souvent l'eau)",
        "La solution est le mélange homogène obtenu",
        "La solubilité est limitée : au-delà, le mélange est saturé et des cristaux restent visibles",
      ],
      voixOff:
        "Quand on dissout du sucre dans de l'eau, le sucre est le soluté, l'eau est le solvant, et le mélange obtenu est appelé solution. Mais la solubilité d'un soluté dans un solvant n'est pas infinie : elle est limitée. Si on ajoute trop de sucre, il finit par ne plus se dissoudre : la solution est saturée, et on observe des cristaux au fond du récipient.",
    },
    {
      titre: "Miscibilité de deux liquides",
      illustration: "🫧",
      visuel: "Eau + huile = non miscibles",
      contenu: [
        "Deux liquides miscibles forment un mélange homogène (eau + alcool)",
        "Deux liquides non miscibles forment un mélange hétérogène (eau + huile)",
        "Les liquides non miscibles se séparent en deux phases : c'est la décantation",
        "Le liquide le moins dense se place au-dessus",
      ],
      voixOff:
        "Deux liquides sont dits miscibles quand ils se mélangent complètement pour former un mélange homogène, comme l'eau et l'alcool. Ils sont non miscibles quand ils ne se mélangent pas et restent séparés, comme l'eau et l'huile. Dans ce cas, les deux liquides forment deux phases distinctes, appelées la décantation, avec le liquide le moins dense qui se place toujours au-dessus.",
    },
    {
      titre: "Séparer un mélange hétérogène",
      illustration: "⚗️",
      visuel: "Décantation • Filtration",
      contenu: [
        "Décantation : on laisse reposer, les constituants se séparent selon leur densité",
        "Filtration : on fait passer le mélange à travers un filtre",
        "La filtration retient le solide non dissous, le liquide passe à travers",
        "Exemple : filtrer de l'eau boueuse avec un filtre en papier",
      ],
      voixOff:
        "Pour séparer un mélange hétérogène, deux techniques sont utilisées en classe. La décantation consiste à laisser reposer le mélange : les constituants se séparent selon leur densité, comme l'eau et l'huile. La filtration consiste à faire passer le mélange à travers un filtre : le solide non dissous est retenu par le filtre, tandis que le liquide passe à travers, comme quand on filtre de l'eau boueuse.",
    },
    {
      titre: "Séparer un mélange homogène : la distillation",
      illustration: "🔥",
      visuel: "Chauffage → Évaporation → Condensation",
      contenu: [
        "La distillation sépare les constituants d'un mélange homogène",
        "On chauffe le mélange : le constituant le plus volatil s'évapore en premier",
        "La vapeur est ensuite refroidie et se condense : on récupère un liquide pur",
        "Exemple : séparer l'alcool de l'eau, ou obtenir de l'eau pure à partir d'eau salée",
      ],
      voixOff:
        "Pour séparer les constituants d'un mélange homogène, on utilise la distillation. On chauffe le mélange : le constituant qui a la température d'ébullition la plus basse s'évapore en premier. Sa vapeur est ensuite refroidie dans un tube, ce qui la fait se condenser en liquide, que l'on récupère à part. C'est ainsi que l'on peut séparer l'alcool de l'eau, ou obtenir de l'eau pure à partir d'eau salée.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Corps pur : une seule espèce chimique, températures de changement d'état bien définies",
        "Mélange homogène (invisible à l'œil nu) ou hétérogène (constituants visibles)",
        "Soluté + solvant = solution ; deux liquides sont miscibles ou non miscibles",
        "Décantation et filtration séparent un mélange hétérogène, la distillation sépare un mélange homogène",
      ],
      voixOff:
        "Résumons. Un corps pur ne contient qu'une seule espèce chimique et possède des températures de changement d'état bien définies, avec un palier. Un mélange contient plusieurs espèces chimiques : il est homogène si l'on ne distingue rien à l'œil nu, hétérogène si l'on distingue les constituants. Un soluté dissous dans un solvant forme une solution, et deux liquides peuvent être miscibles ou non miscibles. Enfin, pour séparer un mélange hétérogène on utilise la décantation ou la filtration, et pour séparer un mélange homogène on utilise la distillation. Bravo, tu maîtrises maintenant les mélanges et les corps purs !",
    },
  ],
  fiche: {
    intro:
      "La matière qui nous entoure est soit un corps pur, constitué d'une seule espèce chimique, soit un mélange, constitué de plusieurs espèces chimiques. On apprend ici à les distinguer et à séparer les constituants d'un mélange.",
    sections: [
      {
        titre: "Corps pur et mélange",
        points: [
          "Corps pur : une seule espèce chimique (eau distillée, dioxygène, sucre pur)",
          "Un corps pur a des températures de fusion et d'ébullition bien définies, avec un palier constant",
          "Mélange : plusieurs espèces chimiques (eau salée, air, eau boueuse)",
          "Un mélange n'a pas de palier net de température lors d'un changement d'état",
          "Piège à éviter : transparent ne signifie pas pur (l'eau minérale est transparente mais c'est un mélange)",
        ],
      },
      {
        titre: "Mélange homogène ou hétérogène",
        points: [
          "Homogène : on ne distingue pas les constituants à l'œil nu (eau salée, eau sucrée, air)",
          "Hétérogène : on distingue les constituants à l'œil nu (eau et huile, eau et sable, eau boueuse)",
          "Un mélange homogène est aussi appelé une solution",
        ],
      },
      {
        titre: "Solubilité et miscibilité",
        points: [
          "Soluté : substance qui se dissout ; solvant : liquide qui dissout (souvent l'eau) ; solution : mélange homogène obtenu",
          "La solubilité est limitée : au-delà, la solution est saturée et des cristaux apparaissent",
          "Deux liquides miscibles forment un mélange homogène (eau + alcool)",
          "Deux liquides non miscibles forment un mélange hétérogène et se séparent en deux phases : le moins dense au-dessus (eau + huile)",
        ],
      },
      {
        titre: "Techniques de séparation des mélanges",
        points: [
          "Décantation : on laisse reposer, les constituants se séparent selon leur densité",
          "Filtration : le mélange passe à travers un filtre, qui retient le solide non dissous",
          "Distillation : on chauffe le mélange homogène, le constituant le plus volatil s'évapore puis se condense, ce qui permet de le récupérer séparément",
        ],
      },
    ],
    audio:
      "Fiche de révision : mélanges et corps purs. Un corps pur ne contient qu'une seule espèce chimique, comme l'eau distillée, le dioxygène ou le sucre pur. Il possède des températures de fusion et d'ébullition bien définies, avec un palier de température constant pendant le changement d'état. Un mélange, lui, contient plusieurs espèces chimiques, comme l'eau salée, l'air ou l'eau boueuse, et n'a pas de palier net. Attention, une eau transparente n'est pas forcément pure : l'eau minérale est transparente mais c'est un mélange, car elle contient des sels dissous. Un mélange est homogène quand on ne distingue pas ses constituants à l'œil nu, comme l'eau salée, l'eau sucrée ou l'air : on parle alors de solution. Il est hétérogène quand on distingue ses constituants, comme l'eau et l'huile, ou l'eau et le sable. Dans une solution, le soluté est la substance qui se dissout, le solvant est le liquide qui la dissout, souvent l'eau. La solubilité d'un soluté est limitée : au-delà d'une certaine quantité, la solution est saturée et des cristaux apparaissent. Deux liquides sont miscibles s'ils se mélangent complètement, comme l'eau et l'alcool, ou non miscibles s'ils restent séparés en deux phases, comme l'eau et l'huile, le liquide le moins dense se plaçant au-dessus. Pour séparer un mélange hétérogène, on utilise la décantation, qui consiste à laisser reposer le mélange, ou la filtration, qui retient le solide non dissous grâce à un filtre. Pour séparer un mélange homogène, on utilise la distillation : on chauffe le mélange, le constituant le plus volatil s'évapore, puis sa vapeur se condense pour donner un liquide que l'on récupère séparément.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un corps pur ?", verso: "Une substance constituée d'une seule espèce chimique (ex : eau distillée, dioxygène, sucre pur)." },
    { recto: "Qu'est-ce qu'un mélange ?", verso: "Une substance constituée de plusieurs espèces chimiques (ex : eau salée, air, eau boueuse)." },
    { recto: "Différence entre mélange homogène et hétérogène ?", verso: "Homogène : on ne distingue pas les constituants à l'œil nu. Hétérogène : on les distingue." },
    { recto: "Soluté, solvant, solution : définis chacun des trois mots.", verso: "Soluté : ce qui se dissout. Solvant : ce qui dissout (souvent l'eau). Solution : le mélange homogène obtenu." },
    { recto: "Que veut dire 'solution saturée' ?", verso: "On a dissous la quantité maximale de soluté possible : au-delà, il ne se dissout plus et forme des cristaux visibles." },
    { recto: "Miscibles vs non miscibles : donne un exemple de chaque.", verso: "Miscibles (mélange homogène) : eau + alcool. Non miscibles (deux phases séparées) : eau + huile, le moins dense reste au-dessus." },
    { recto: "Quelle technique sépare un mélange hétérogène liquide-solide non dissous ?", verso: "La filtration : le filtre retient le solide, le liquide passe à travers." },
    { recto: "Quelle technique sépare les constituants d'un mélange homogène ?", verso: "La distillation : chauffage, évaporation du constituant le plus volatil, puis condensation." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'eau distillée est :",
      choix: ["un mélange homogène", "un mélange hétérogène", "un corps pur", "un solvant impur"],
      bonneReponse: 2,
      explication: "L'eau distillée ne contient qu'une seule espèce chimique, l'eau : c'est un corps pur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'eau salée est :",
      choix: ["un corps pur", "un mélange hétérogène", "un mélange homogène", "un solide"],
      bonneReponse: 2,
      explication: "On ne distingue pas le sel dissous à l'œil nu dans l'eau salée : c'est un mélange homogène.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne un exemple de mélange hétérogène et explique pourquoi c'en est un.",
      reponse: "Eau et sable : on distingue clairement le sable et l'eau à l'œil nu, ce n'est pas uniforme.",
      explication: "Un mélange hétérogène se reconnaît car on distingue ses constituants à l'œil nu, contrairement à un mélange homogène.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans une solution de sucre dans l'eau, l'eau est appelée :",
      choix: ["le soluté", "le solvant", "la solution saturée", "le corps pur"],
      bonneReponse: 1,
      explication: "L'eau est le liquide qui dissout le sucre : c'est le solvant. Le sucre, lui, est le soluté.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "L'eau minérale est-elle un corps pur ? Justifie.",
      reponse: "Non, c'est un mélange, car elle contient des sels minéraux dissous en plus de l'eau.",
      explication: "L'eau minérale laisse un résidu à l'évaporation, contrairement à l'eau distillée qui est un corps pur.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "On verse de l'huile dans de l'eau et on laisse reposer. On observe :",
      choix: ["un mélange homogène", "deux phases séparées, l'huile au-dessus", "deux phases séparées, l'huile en dessous", "une dissolution complète"],
      bonneReponse: 1,
      explication: "L'eau et l'huile sont non miscibles : elles se séparent en deux phases par décantation, et l'huile, moins dense, se place au-dessus.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle technique utiliser pour séparer de l'eau boueuse (eau + particules de terre non dissoutes) ? Décris le principe.",
      reponse: "La filtration : on fait passer le mélange à travers un filtre en papier, qui retient les particules de terre tandis que l'eau passe à travers.",
      explication: "La filtration sépare un solide non dissous d'un liquide grâce à un filtre.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "On ajoute du sel dans un verre d'eau jusqu'à ce que des cristaux restent visibles au fond, même en remuant. La solution est alors :",
      choix: ["diluée", "saturée", "hétérogène dès le départ", "un corps pur"],
      bonneReponse: 1,
      explication: "Quand on ne peut plus dissoudre de soluté et que des cristaux restent visibles, la solution est saturée : la solubilité a une limite.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment peut-on prouver qu'une eau du robinet n'est pas un corps pur, sans matériel de laboratoire compliqué ?",
      reponse: "En faisant évaporer une petite quantité d'eau du robinet : un résidu (traces de calcaire, sels) reste au fond du récipient, ce qui prouve que ce n'est pas de l'eau pure.",
      explication: "L'eau distillée, corps pur, ne laisse aucun résidu à l'évaporation, contrairement à l'eau du robinet qui contient des substances dissoutes.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "On veut séparer l'eau et l'alcool d'un mélange homogène. La technique adaptée est :",
      choix: ["la décantation", "la filtration", "la distillation", "l'aimantation"],
      bonneReponse: 2,
      explication: "L'eau et l'alcool forment un mélange homogène : on les sépare grâce à la distillation, qui exploite leurs températures d'ébullition différentes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique le principe de la distillation en trois étapes, en citant le phénomène physique de chaque étape.",
      reponse: "1) On chauffe le mélange : le constituant ayant la température d'ébullition la plus basse s'évapore (vaporisation). 2) La vapeur monte dans un tube et est refroidie. 3) Elle se condense (liquéfaction) et on récupère un liquide, séparé du reste du mélange.",
      explication: "La distillation enchaîne un chauffage, une vaporisation sélective, puis une liquéfaction par refroidissement, pour séparer les constituants d'un mélange homogène.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "L'air est-il un corps pur ou un mélange ? Précise sa composition principale et le type de mélange.",
      reponse: "L'air est un mélange homogène, composé d'environ 78 % de diazote et 21 % de dioxygène, avec d'autres gaz en faible quantité (dioxyde de carbone, vapeur d'eau...).",
      explication: "On ne distingue pas les différents gaz de l'air à l'œil nu : c'est donc un mélange homogène, et non un corps pur.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un corps pur est constitué de :",
      choix: ["plusieurs espèces chimiques", "une seule espèce chimique", "toujours un liquide", "toujours un solide"],
      bonneReponse: 1,
      explication: "Un corps pur ne contient qu'une seule espèce chimique, quel que soit son état physique.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite un exemple de mélange homogène et un exemple de mélange hétérogène.",
      reponse: "Homogène : eau salée. Hétérogène : eau et sable.",
      explication: "Dans le mélange homogène, on ne distingue pas les constituants ; dans le mélange hétérogène, on les distingue.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Deux liquides non miscibles :",
      choix: ["se mélangent complètement", "restent séparés en deux phases", "forment toujours un corps pur", "sont toujours colorés"],
      bonneReponse: 1,
      explication: "Des liquides non miscibles, comme l'eau et l'huile, ne se mélangent pas et restent séparés en deux phases.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle technique de séparation choisir pour un mélange homogène comme de l'eau salée, si l'on veut récupérer de l'eau pure ?",
      reponse: "La distillation, car le sel et l'eau forment un mélange homogène qu'on ne peut pas séparer par simple filtration.",
      explication: "La distillation utilise la différence de température d'ébullition entre l'eau et le sel pour séparer les deux constituants.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi dit-on que le palier de température lors d'un changement d'état est la signature d'un corps pur ?",
      reponse: "Parce qu'un corps pur change d'état à une température fixe et constante, alors qu'un mélange n'a pas de palier net et sa température continue de varier.",
      explication: "Ce palier permet d'identifier une substance et de vérifier si elle est pure.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Mélanges et corps purs",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le dioxygène pur est :",
          choix: ["un mélange homogène", "un mélange hétérogène", "un corps pur", "une solution saturée"],
          bonneReponse: 2,
          explication: "Le dioxygène pur ne contient qu'une seule espèce chimique : c'est un corps pur.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui distingue un mélange homogène d'un mélange hétérogène ?",
          reponse: "Dans un mélange homogène, on ne distingue pas les constituants à l'œil nu ; dans un mélange hétérogène, on les distingue.",
          explication: "C'est le critère visuel qui permet de classer un mélange en homogène ou hétérogène.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "On mélange de l'eau et de l'huile puis on laisse reposer. Ce phénomène de séparation s'appelle :",
          choix: ["la filtration", "la décantation", "la distillation", "la dissolution"],
          bonneReponse: 1,
          explication: "Les liquides non miscibles se séparent en deux phases en reposant : c'est la décantation.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "On verse du sucre dans un verre d'eau et on remue : tout se dissout. On continue d'ajouter du sucre jusqu'à ce qu'il en reste au fond, non dissous. Comment appelle-t-on cet état de la solution ?",
          reponse: "La solution est saturée : la solubilité du sucre dans l'eau a atteint sa limite.",
          explication: "La solubilité d'un soluté dans un solvant est limitée ; au-delà, le soluté ne se dissout plus.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite les deux techniques permettant de séparer un mélange hétérogène et donne le principe de chacune.",
          reponse: "La décantation (laisser reposer, les constituants se séparent selon leur densité) et la filtration (le mélange passe à travers un filtre qui retient le solide non dissous).",
          explication: "Ces deux techniques s'appliquent aux mélanges hétérogènes, contrairement à la distillation réservée aux mélanges homogènes.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "On chauffe de l'eau salée jusqu'à ébullition et on note la température. Elle dépasse 100 °C et il n'y a pas de palier net. Que peut-on en déduire sur l'eau salée ?",
          reponse: "L'eau salée n'est pas un corps pur : c'est un mélange. L'absence de palier net à température constante est la preuve qu'il ne s'agit pas d'une substance pure.",
          explication: "Un corps pur possède un palier de température net lors d'un changement d'état ; un mélange n'en a pas.",
        },
      ],
    },
    {
      titre: "Examen 2 — Mélanges et corps purs",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'air que nous respirons est :",
          choix: ["un corps pur", "un mélange hétérogène", "un mélange homogène", "uniquement du dioxygène"],
          bonneReponse: 2,
          explication: "L'air est un mélange homogène de plusieurs gaz : diazote, dioxygène, et d'autres gaz en faible quantité.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans une solution d'eau sucrée, nomme le soluté et le solvant.",
          reponse: "Le soluté est le sucre, le solvant est l'eau.",
          explication: "Le soluté est la substance qui se dissout, le solvant est le liquide qui la dissout.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Deux liquides miscibles, comme l'eau et l'alcool, forment :",
          choix: ["un mélange hétérogène", "un mélange homogène", "un corps pur", "deux phases séparées"],
          bonneReponse: 1,
          explication: "Des liquides miscibles se mélangent complètement et forment un mélange homogène, sans phases séparées.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une eau minérale, bien que transparente, n'est pas un corps pur. Explique pourquoi, et propose une expérience simple pour le vérifier.",
          reponse: "Elle contient des sels minéraux dissous, donc plusieurs espèces chimiques : c'est un mélange. On peut le vérifier en faisant évaporer un peu de cette eau : un résidu reste au fond du récipient.",
          explication: "La transparence ne garantit pas la pureté ; seul un test comme l'évaporation ou la mesure du palier de température permet de vérifier si une eau est un corps pur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi utilise-t-on la distillation, et non la filtration, pour séparer l'eau et le sel dissous dans l'eau de mer ?",
          reponse: "Parce que l'eau salée est un mélange homogène : le sel est dissous et ne peut pas être retenu par un filtre. Seule la distillation, qui utilise les différentes températures d'ébullition, permet de les séparer.",
          explication: "La filtration ne sépare que les solides non dissous d'un liquide ; elle est inefficace sur un soluté dissous.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Décris les étapes de la distillation permettant d'obtenir de l'eau pure à partir d'eau salée, en nommant les changements d'état mis en jeu.",
          reponse: "On chauffe l'eau salée : l'eau, dont la température d'ébullition est plus basse que celle du sel, s'évapore (vaporisation). Le sel reste dans le récipient de chauffe. La vapeur d'eau est ensuite refroidie dans un tube et se condense (liquéfaction), ce qui permet de récupérer de l'eau pure.",
          explication: "La distillation enchaîne une vaporisation sélective du constituant le plus volatil puis une liquéfaction par refroidissement.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un corps pur ne contient qu'une seule espèce chimique et possède des températures de changement d'état bien définies, avec un palier constant.",
    "Un mélange contient plusieurs espèces chimiques ; il est homogène si l'on ne distingue pas ses constituants à l'œil nu, hétérogène si on les distingue.",
    "Transparent ne veut pas dire pur : l'eau minérale est transparente mais reste un mélange (sels dissous, résidu à l'évaporation).",
    "Dans une solution, le soluté se dissout dans le solvant ; la solubilité est limitée, au-delà la solution est saturée.",
    "Deux liquides sont miscibles (mélange homogène) ou non miscibles (mélange hétérogène, séparation par décantation, le moins dense au-dessus).",
    "Pour séparer un mélange hétérogène : décantation ou filtration. Pour séparer un mélange homogène : distillation.",
  ],
},
{
  slug: "mouvement-vitesse",
  titre: "Mouvement et vitesse",
  matiere: "physique-chimie",
  niveau: "5eme",
  description:
    "Comprendre la notion de référentiel et la relativité du mouvement, décrire une trajectoire (rectiligne, curviligne, circulaire), calculer une vitesse moyenne avec la formule v = d / t, convertir entre m/s et km/h, et distinguer mouvement uniforme, accéléré et ralenti.",
  objectifs: [
    "Définir un référentiel et comprendre que le caractère immobile ou en mouvement d'un objet est relatif",
    "Identifier une trajectoire rectiligne, curviligne ou circulaire",
    "Calculer une vitesse moyenne à partir d'une distance et d'une durée avec la formule v = d / t",
    "Convertir une vitesse entre mètres par seconde (m/s) et kilomètres par heure (km/h)",
    "Distinguer un mouvement uniforme, accéléré et ralenti, et relier la vitesse à la sécurité routière",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un référentiel ?",
      illustration: "🧭",
      visuel: "Objet de référence",
      contenu: [
        "Un mouvement se décrit toujours par rapport à un objet appelé référentiel",
        "Le référentiel est l'objet (ou le système) choisi comme repère",
        "Exemples de référentiels courants : le sol, la Terre, un train, une salle de classe",
        "Sans référentiel précisé, on ne peut pas dire si un objet bouge ou non",
      ],
      voixOff:
        "Pour décrire le mouvement d'un objet, il faut toujours choisir un repère par rapport auquel on observe ce mouvement : c'est ce qu'on appelle le référentiel. Le référentiel peut être le sol, la Terre, une salle de classe, ou même un véhicule en mouvement comme un train. Sans préciser de référentiel, on ne peut pas dire si un objet est immobile ou en mouvement. C'est la toute première question à se poser en physique du mouvement.",
    },
    {
      titre: "Le mouvement est relatif",
      illustration: "🚆",
      visuel: "Immobile ET en mouvement ?",
      contenu: [
        "Un même objet peut être immobile dans un référentiel et en mouvement dans un autre",
        "Exemple : un passager assis dans un train est immobile par rapport au train",
        "Ce même passager est en mouvement par rapport au sol et à un observateur sur le quai",
        "On dit que le mouvement est relatif : il dépend du référentiel choisi",
      ],
      voixOff:
        "Voici une idée essentielle : le mouvement est relatif. Un passager assis dans un train est immobile par rapport au train, puisqu'il ne bouge pas dans son siège. Mais ce même passager est en mouvement par rapport au sol et par rapport à un observateur qui l'attend sur le quai de la gare. Le caractère immobile ou en mouvement d'un objet dépend donc toujours du référentiel choisi.",
    },
    {
      titre: "La trajectoire",
      illustration: "🌀",
      visuel: "Rectiligne • Curviligne • Circulaire",
      contenu: [
        "La trajectoire est la ligne décrite par un point de l'objet en mouvement, dans un référentiel donné",
        "Trajectoire rectiligne : une ligne droite (ex : un ascenseur, une chute libre verticale)",
        "Trajectoire curviligne : une ligne courbe quelconque (ex : une balle lancée)",
        "Trajectoire circulaire : un cercle (ex : un point sur un manège)",
      ],
      voixOff:
        "Quand un objet se déplace, on peut observer la ligne qu'il dessine dans l'espace : c'est sa trajectoire. Elle dépend elle aussi du référentiel choisi. Si cette ligne est droite, on parle de trajectoire rectiligne, comme un ascenseur qui monte ou une chute libre verticale. Si la ligne est une courbe quelconque, la trajectoire est curviligne, comme une balle lancée en l'air. Et si elle dessine un cercle, comme un point sur un manège, la trajectoire est circulaire.",
    },
    {
      titre: "La vitesse moyenne",
      illustration: "⏱️",
      visuel: "v = d / t",
      contenu: [
        "La vitesse moyenne mesure la distance parcourue pendant une durée donnée",
        "Formule : v = d / t (v : vitesse, d : distance, t : durée)",
        "En mètres par seconde (m/s) si d est en mètres et t en secondes",
        "En kilomètres par heure (km/h) si d est en kilomètres et t en heures",
      ],
      voixOff:
        "La vitesse moyenne d'un objet, c'est la distance qu'il parcourt divisée par la durée de son parcours. On la calcule avec la formule v égale d sur t, où v est la vitesse, d la distance et t la durée. Si la distance est en mètres et la durée en secondes, la vitesse s'exprime en mètres par seconde. Si la distance est en kilomètres et la durée en heures, la vitesse s'exprime en kilomètres par heure. Attention à toujours vérifier que les unités sont cohérentes avant de calculer !",
    },
    {
      titre: "Convertir et comparer des vitesses",
      illustration: "🔁",
      visuel: "1 m/s = 3,6 km/h",
      contenu: [
        "Pour passer de m/s à km/h, on multiplie par 3,6 (ex : 10 m/s = 36 km/h)",
        "Pour passer de km/h à m/s, on divise par 3,6 (ex : 90 km/h = 25 m/s)",
        "Repères : piéton ≈ 4 à 5 km/h, cycliste ≈ 15 à 20 km/h, voiture en ville ≈ 50 km/h",
        "Le TGV peut atteindre 300 km/h, soit environ 83 m/s",
      ],
      voixOff:
        "Il faut souvent convertir une vitesse entre mètres par seconde et kilomètres par heure. Pour passer de mètres par seconde à kilomètres par heure, on multiplie par trois virgule six : par exemple, dix mètres par seconde correspondent à trente-six kilomètres par heure. Pour l'inverse, on divise par trois virgule six : quatre-vingt-dix kilomètres par heure correspondent à vingt-cinq mètres par seconde. Pour te donner des repères, un piéton marche à environ quatre à cinq kilomètres par heure, un cycliste roule entre quinze et vingt kilomètres par heure, une voiture en ville avance à environ cinquante kilomètres par heure, et le TGV peut atteindre trois cents kilomètres par heure, soit environ quatre-vingt-trois mètres par seconde.",
    },
    {
      titre: "Mouvement uniforme, accéléré, ralenti",
      illustration: "📈",
      visuel: "Constante / ↑ / ↓",
      contenu: [
        "Mouvement uniforme : la vitesse reste constante au cours du temps",
        "Mouvement accéléré : la vitesse augmente au cours du temps",
        "Mouvement ralenti (ou décéléré) : la vitesse diminue au cours du temps",
        "On observe ces variations grâce au compteur de vitesse ou à des mesures régulières",
      ],
      voixOff:
        "Un mouvement peut évoluer de trois façons. S'il est uniforme, la vitesse reste constante au cours du temps : c'est le cas d'une voiture qui roule à vitesse stabilisée sur autoroute. S'il est accéléré, la vitesse augmente, comme une voiture qui démarre. S'il est ralenti, ou décéléré, la vitesse diminue, comme une voiture qui freine avant un feu rouge.",
    },
    {
      titre: "Vitesse moyenne ou vitesse instantanée ?",
      illustration: "🚗",
      visuel: "Compteur = vitesse instantanée",
      contenu: [
        "La vitesse moyenne se calcule sur tout un trajet, arrêts compris",
        "La vitesse instantanée est la vitesse à un instant précis, donnée par le compteur de la voiture",
        "Ces deux vitesses peuvent être très différentes sur un même trajet",
        "Exemple : vitesse moyenne de 40 km/h sur un trajet, mais vitesse instantanée de 90 km/h sur une portion",
      ],
      voixOff:
        "Il ne faut pas confondre deux notions. La vitesse moyenne se calcule sur la totalité d'un trajet, en comptant même les arrêts aux feux rouges ou dans les bouchons. La vitesse instantanée, elle, est la vitesse à un instant précis, celle que tu peux lire sur le compteur d'une voiture. Sur un même trajet, la vitesse moyenne peut être beaucoup plus faible que certaines vitesses instantanées, si le conducteur a dû s'arrêter plusieurs fois.",
    },
    {
      titre: "Vitesse et sécurité routière",
      illustration: "🚦",
      visuel: "Vitesse ↑ = distance de freinage ↑",
      contenu: [
        "Plus la vitesse d'un véhicule est grande, plus sa distance de freinage est grande",
        "Le véhicule a besoin de plus de temps et plus d'espace pour s'arrêter",
        "C'est pourquoi les vitesses sont limitées, surtout en ville et près des écoles",
        "Respecter les limitations de vitesse permet de réduire les risques d'accident",
      ],
      voixOff:
        "La notion de vitesse a aussi un lien direct avec la sécurité routière. Plus un véhicule roule vite, plus sa distance de freinage est grande : il lui faut plus de temps et plus d'espace pour s'arrêter complètement. C'est pour cette raison que les vitesses sont limitées, en particulier en ville et près des écoles. Respecter les limitations de vitesse, c'est se laisser le temps de réagir et réduire le risque d'accident.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Référentiel : objet de repère ; le mouvement est relatif",
        "Trajectoire : rectiligne, curviligne ou circulaire",
        "Vitesse moyenne : v = d / t ; 1 m/s = 3,6 km/h",
        "Mouvement uniforme (vitesse constante), accéléré (vitesse ↑) ou ralenti (vitesse ↓)",
      ],
      voixOff:
        "Résumons. Le mouvement d'un objet se décrit toujours par rapport à un référentiel, et il est relatif : un objet peut être immobile dans un référentiel et en mouvement dans un autre. La trajectoire peut être rectiligne, curviligne ou circulaire. La vitesse moyenne se calcule avec la formule v égale d sur t, et on retient qu'un mètre par seconde correspond à trois virgule six kilomètres par heure. Enfin, un mouvement peut être uniforme, accéléré ou ralenti selon que la vitesse reste constante, augmente ou diminue. Bravo, tu maîtrises maintenant les bases du mouvement et de la vitesse !",
    },
  ],
  fiche: {
    intro:
      "Le mouvement d'un objet se décrit toujours par rapport à un référentiel : il est relatif. On caractérise un mouvement par sa trajectoire et par sa vitesse, calculée avec la formule v = d / t.",
    sections: [
      {
        titre: "Référentiel et relativité du mouvement",
        points: [
          "Le référentiel est l'objet (ou le système) choisi comme repère pour décrire un mouvement",
          "Un objet peut être immobile dans un référentiel et en mouvement dans un autre : le mouvement est relatif",
          "Exemple : un passager assis est immobile par rapport au train, mais en mouvement par rapport au sol",
        ],
      },
      {
        titre: "La trajectoire",
        points: [
          "La trajectoire est la ligne décrite par un point de l'objet en mouvement, dans un référentiel donné",
          "Rectiligne (ligne droite), curviligne (courbe quelconque), circulaire (cercle)",
          "La trajectoire dépend elle aussi du référentiel choisi",
        ],
      },
      {
        titre: "La vitesse moyenne et ses unités",
        points: [
          "v = d / t, avec v en m/s (d en m, t en s) ou en km/h (d en km, t en h)",
          "Conversion : 1 m/s = 3,6 km/h (on multiplie par 3,6 pour passer en km/h, on divise par 3,6 pour passer en m/s)",
          "Repères utiles : piéton ≈ 4 à 5 km/h, cycliste ≈ 15 à 20 km/h, TGV ≈ 300 km/h",
        ],
      },
      {
        titre: "Types de mouvement et vitesse instantanée",
        points: [
          "Mouvement uniforme (vitesse constante), accéléré (vitesse qui augmente), ralenti (vitesse qui diminue)",
          "Vitesse moyenne (calculée sur tout un trajet) ≠ vitesse instantanée (à un instant donné, lue sur le compteur)",
          "Plus la vitesse est grande, plus la distance de freinage est grande : d'où les limitations de vitesse",
        ],
      },
    ],
    audio:
      "Fiche de révision : mouvement et vitesse. Le mouvement d'un objet se décrit toujours par rapport à un référentiel, c'est-à-dire l'objet choisi comme repère : le sol, la Terre, un train... Un même objet peut être immobile dans un référentiel et en mouvement dans un autre : par exemple, un passager assis est immobile par rapport au train, mais en mouvement par rapport au sol. On dit que le mouvement est relatif. La trajectoire est la ligne décrite par un point de l'objet en mouvement : elle peut être rectiligne, c'est-à-dire une ligne droite, curviligne, une courbe quelconque, ou circulaire, un cercle. La vitesse moyenne se calcule avec la formule v égale d sur t, où d est la distance parcourue et t la durée du parcours : elle s'exprime en mètres par seconde si d est en mètres et t en secondes, ou en kilomètres par heure si d est en kilomètres et t en heures. Pour convertir, on retient qu'un mètre par seconde correspond à trois virgule six kilomètres par heure : on multiplie par trois virgule six pour passer de m/s à km/h, et on divise par trois virgule six pour l'inverse. Pour te donner des repères, un piéton marche à environ quatre à cinq kilomètres par heure, un cycliste roule entre quinze et vingt kilomètres par heure, et un TGV peut atteindre trois cents kilomètres par heure. Un mouvement est dit uniforme si la vitesse reste constante, accéléré si elle augmente, et ralenti si elle diminue. Enfin, il ne faut pas confondre la vitesse moyenne, calculée sur tout un trajet, et la vitesse instantanée, celle que l'on lit à un instant précis sur le compteur d'un véhicule : plus la vitesse est grande, plus la distance de freinage est grande, c'est pourquoi les vitesses sont limitées, notamment en ville.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un référentiel ?", verso: "L'objet (ou le système) choisi comme repère pour décrire un mouvement." },
    { recto: "Pourquoi dit-on que le mouvement est relatif ?", verso: "Parce qu'un même objet peut être immobile dans un référentiel et en mouvement dans un autre." },
    { recto: "Quels sont les trois types de trajectoire ?", verso: "Rectiligne (ligne droite), curviligne (courbe quelconque), circulaire (cercle)." },
    { recto: "Quelle est la formule de la vitesse moyenne ?", verso: "v = d / t (distance parcourue divisée par la durée du parcours)." },
    { recto: "Comment convertir des m/s en km/h ?", verso: "On multiplie par 3,6 (ex : 10 m/s = 36 km/h)." },
    { recto: "Comment convertir des km/h en m/s ?", verso: "On divise par 3,6 (ex : 90 km/h = 25 m/s)." },
    { recto: "Différence entre mouvement uniforme et mouvement accéléré ?", verso: "Uniforme : la vitesse reste constante. Accéléré : la vitesse augmente au cours du temps." },
    { recto: "Vitesse moyenne ou vitesse instantanée : que donne le compteur d'une voiture ?", verso: "La vitesse instantanée, à un instant précis (différente de la vitesse moyenne calculée sur tout le trajet)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le référentiel est :",
      choix: [
        "la vitesse d'un objet",
        "l'objet choisi comme repère pour décrire un mouvement",
        "la trajectoire d'un objet",
        "la distance parcourue par un objet",
      ],
      bonneReponse: 1,
      explication: "Le référentiel est l'objet par rapport auquel on décrit le mouvement d'un autre objet.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Un passager est assis dans un train qui roule. Est-il immobile ou en mouvement par rapport au train ? Et par rapport au sol ?",
      reponse: "Il est immobile par rapport au train, mais en mouvement par rapport au sol.",
      explication: "Le caractère immobile ou en mouvement d'un objet dépend du référentiel choisi : c'est la relativité du mouvement.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La trajectoire d'un point situé sur un manège qui tourne est :",
      choix: ["rectiligne", "curviligne quelconque", "circulaire", "impossible à déterminer"],
      bonneReponse: 2,
      explication: "Le point décrit un cercle autour de l'axe du manège : sa trajectoire est circulaire.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle formule permet de calculer une vitesse moyenne ?",
      choix: ["v = d × t", "v = d / t", "v = t / d", "v = d + t"],
      bonneReponse: 1,
      explication: "La vitesse moyenne est égale à la distance parcourue divisée par la durée du parcours : v = d / t.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un coureur parcourt 100 m en 10 s. Calcule sa vitesse moyenne en m/s.",
      reponse: "v = 100 / 10 = 10 m/s",
      explication: "On applique v = d / t avec d = 100 m et t = 10 s, ce qui donne 10 m/s (soit 36 km/h).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Convertis la vitesse précédente (10 m/s) en km/h.",
      reponse: "10 × 3,6 = 36 km/h",
      explication: "Pour passer de m/s à km/h, on multiplie par 3,6.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un cycliste parcourt 20 km en 1 h. Quelle est sa vitesse moyenne ?",
      choix: ["10 km/h", "15 km/h", "20 km/h", "40 km/h"],
      bonneReponse: 2,
      explication: "v = d / t = 20 / 1 = 20 km/h.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une voiture parcourt 150 km en 2 h. Calcule sa vitesse moyenne en km/h.",
      reponse: "v = 150 / 2 = 75 km/h",
      explication: "On divise la distance parcourue par la durée du trajet : 150 km / 2 h = 75 km/h.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une voiture freine avant un feu rouge : sa vitesse diminue au cours du temps. Ce mouvement est :",
      choix: ["uniforme", "accéléré", "ralenti", "circulaire"],
      bonneReponse: 2,
      explication: "Quand la vitesse diminue au cours du temps, le mouvement est ralenti (ou décéléré).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un piéton parcourt 6 km en 1 h 30 min. Calcule sa vitesse moyenne en km/h.",
      reponse: "1 h 30 min = 1,5 h ; v = 6 / 1,5 = 4 km/h",
      explication: "Il faut d'abord convertir la durée en heures décimales (1,5 h), puis diviser la distance par la durée.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une voiture roule à 90 km/h. Cette vitesse correspond, en m/s, à :",
      choix: ["9 m/s", "25 m/s", "32,4 m/s", "90 m/s"],
      bonneReponse: 1,
      explication: "Pour passer de km/h à m/s, on divise par 3,6 : 90 ÷ 3,6 = 25 m/s.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un automobiliste effectue un trajet de 60 km en 1 h, avec plusieurs arrêts. Sa vitesse moyenne est donc de 60 km/h. Peut-il avoir roulé, à un instant donné, à 100 km/h ? Explique en utilisant les notions de vitesse moyenne et de vitesse instantanée.",
      reponse:
        "Oui, c'est possible. La vitesse moyenne (60 km/h) est calculée sur tout le trajet, arrêts compris, alors que la vitesse instantanée est la vitesse à un instant précis, qui peut être différente (par exemple 100 km/h sur une portion d'autoroute).",
      explication: "La vitesse moyenne et la vitesse instantanée sont deux grandeurs différentes : l'une résume tout le trajet, l'autre décrit un instant précis.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le référentiel sert à :",
      choix: ["mesurer une distance", "décrire un mouvement par rapport à un repère", "calculer une masse", "mesurer une durée"],
      bonneReponse: 1,
      explication: "Le référentiel est le repère par rapport auquel on décrit un mouvement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les trois types de trajectoire.",
      reponse: "Rectiligne, curviligne, circulaire.",
      explication: "Rectiligne : ligne droite. Curviligne : courbe quelconque. Circulaire : cercle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un vélo parcourt 12 km en 40 min, sachant que 40 min = 2/3 h. Calcule sa vitesse moyenne en km/h.",
      reponse: "v = 12 / (2/3) = 18 km/h",
      explication: "Diviser par une fraction revient à multiplier par son inverse : 12 × 3/2 = 18 km/h.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "1 m/s correspond à :",
      choix: ["1 km/h", "3,6 km/h", "10 km/h", "36 km/h"],
      bonneReponse: 1,
      explication: "1 m/s = 3,6 km/h : c'est la conversion à connaître par cœur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre un mouvement uniforme et un mouvement accéléré ?",
      reponse: "Dans un mouvement uniforme, la vitesse reste constante ; dans un mouvement accéléré, la vitesse augmente au cours du temps.",
      explication: "On observe ces variations grâce au compteur de vitesse ou à des mesures régulières de distance et de durée.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Mouvement et vitesse",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un objet est immobile dans un référentiel s'il :",
          choix: [
            "change de position par rapport à ce référentiel au cours du temps",
            "ne change pas de position par rapport à ce référentiel au cours du temps",
            "se déplace très vite",
            "n'a pas de trajectoire",
          ],
          bonneReponse: 1,
          explication: "Un objet immobile dans un référentiel garde la même position par rapport à ce référentiel au cours du temps.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la formule permettant de calculer une vitesse moyenne, en précisant ce que représente chaque lettre.",
          reponse: "v = d / t, avec v la vitesse, d la distance parcourue et t la durée du parcours.",
          explication: "C'est la relation de base à connaître pour tous les calculs de vitesse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un TGV parcourt 240 km en 1 h 30 min. Calcule sa vitesse moyenne en km/h.",
          reponse: "1 h 30 min = 1,5 h ; v = 240 / 1,5 = 160 km/h",
          explication: "On convertit d'abord la durée en heures décimales, puis on applique v = d / t.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une trajectoire en forme de ligne droite est dite :",
          choix: ["curviligne", "circulaire", "rectiligne", "aléatoire"],
          bonneReponse: 2,
          explication: "Une trajectoire rectiligne est une trajectoire en ligne droite.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un cycliste roule à 18 km/h. Convertis cette vitesse en m/s, puis explique dans quel type de situation on utilise plutôt le m/s et dans quel type on utilise plutôt le km/h.",
          reponse:
            "18 ÷ 3,6 = 5 m/s. Le m/s est plutôt utilisé pour des vitesses faibles ou en physique (chute, sport), tandis que le km/h est plutôt utilisé pour des vitesses de déplacement plus grandes, comme celles des véhicules routiers.",
          explication: "18 km/h correspond bien à 5 m/s ; les deux unités mesurent la même grandeur, seule l'échelle utilisée change.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Une voiture A parcourt 100 km en 1 h 15 min (soit 1,25 h), une voiture B parcourt 100 km en 1 h. Laquelle roule le plus vite en moyenne ?",
          choix: ["La voiture A", "La voiture B", "Elles roulent à la même vitesse", "On ne peut pas savoir"],
          bonneReponse: 1,
          explication: "La voiture A roule à 100 / 1,25 = 80 km/h, la voiture B roule à 100 / 1 = 100 km/h : la voiture B est donc plus rapide en moyenne.",
        },
      ],
    },
    {
      titre: "Examen 2 — Mouvement et vitesse",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le mouvement d'un objet est relatif, cela signifie que :",
          choix: ["il est toujours en mouvement", "il dépend du référentiel choisi", "il ne dépend d'aucun référentiel", "il est toujours immobile"],
          bonneReponse: 1,
          explication: "Un même objet peut être immobile dans un référentiel et en mouvement dans un autre : le mouvement dépend du référentiel choisi.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Comment appelle-t-on la ligne décrite par un point d'un objet en mouvement ?",
          reponse: "La trajectoire.",
          explication: "La trajectoire peut être rectiligne, curviligne ou circulaire, et dépend elle aussi du référentiel choisi.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quand la vitesse d'un objet augmente au cours du temps, son mouvement est dit :",
          choix: ["uniforme", "ralenti", "accéléré", "circulaire"],
          bonneReponse: 2,
          explication: "Un mouvement dont la vitesse augmente au cours du temps est un mouvement accéléré.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un avion parcourt 1 800 km en 2 h. Calcule sa vitesse moyenne en km/h, puis convertis-la en m/s.",
          reponse: "v = 1800 / 2 = 900 km/h ; 900 ÷ 3,6 = 250 m/s",
          explication: "On calcule d'abord la vitesse en km/h avec v = d / t, puis on convertit en m/s en divisant par 3,6.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi les vitesses sont limitées en ville, en utilisant la notion de distance de freinage.",
          reponse:
            "Plus la vitesse d'un véhicule est grande, plus sa distance de freinage est grande : le véhicule met plus de temps et plus d'espace pour s'arrêter complètement. En ville, où les piétons peuvent traverser à tout moment, limiter la vitesse permet de réduire cette distance de freinage et donc le risque d'accident.",
          explication: "C'est le lien direct entre la notion physique de vitesse et la sécurité routière.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Un piéton met 20 min pour parcourir 1,5 km, sachant que 20 min = 1/3 h. Quelle est sa vitesse moyenne ?",
          choix: ["3 km/h", "4,5 km/h", "6 km/h", "7,5 km/h"],
          bonneReponse: 1,
          explication: "v = 1,5 / (1/3) = 1,5 × 3 = 4,5 km/h.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le référentiel est l'objet de repère choisi pour décrire un mouvement ; le mouvement est relatif, il dépend du référentiel.",
    "La trajectoire peut être rectiligne, curviligne ou circulaire, selon le référentiel choisi.",
    "La vitesse moyenne se calcule avec v = d / t (m/s si d en m et t en s ; km/h si d en km et t en h).",
    "Conversion à connaître par cœur : 1 m/s = 3,6 km/h (on multiplie pour passer en km/h, on divise pour passer en m/s).",
    "Un mouvement peut être uniforme (vitesse constante), accéléré (vitesse qui augmente) ou ralenti (vitesse qui diminue).",
    "Attention à ne pas confondre vitesse moyenne (sur tout le trajet) et vitesse instantanée (à un instant donné) ; plus la vitesse est grande, plus la distance de freinage augmente.",
  ],
},
{
  slug: "sources-lumiere",
  titre: "Sources et propagation de la lumière",
  matiere: "physique-chimie",
  niveau: "5eme",
  description:
    "Distinguer source primaire et objet diffusant, comprendre pourquoi on voit un objet, connaître la propagation rectiligne de la lumière, sa vitesse, les milieux transparents/translucides/opaques, les ombres et les éclipses.",
  objectifs: [
    "Distinguer une source de lumière primaire d'un objet diffusant (source secondaire)",
    "Expliquer pourquoi on voit un objet : de la lumière doit atteindre l'œil",
    "Connaître le principe de propagation rectiligne de la lumière et modéliser un rayon lumineux",
    "Différencier milieux transparents, translucides et opaques, et savoir ce qu'est la vitesse de la lumière",
    "Expliquer la formation d'une ombre propre, d'une ombre portée, et le principe d'une éclipse",
  ],
  slides: [
    {
      titre: "Sources primaires et objets diffusants",
      illustration: "☀️",
      visuel: "Source primaire ≠ objet diffusant",
      contenu: [
        "Une source primaire produit elle-même sa lumière",
        "Exemples : le Soleil, une lampe allumée, une flamme, un écran allumé",
        "Un objet diffusant ne produit pas de lumière : il renvoie celle qu'il reçoit",
        "Exemples : la Lune, une table, un mur, un livre",
      ],
      voixOff:
        "Il existe deux façons pour un objet d'émettre de la lumière vers nos yeux. Une source primaire produit elle-même sa propre lumière : c'est le cas du Soleil, d'une lampe allumée, d'une flamme ou d'un écran allumé. Un objet diffusant, lui, ne produit aucune lumière : il se contente de renvoyer une partie de la lumière qu'il reçoit d'une source. La Lune, une table ou un livre sont des objets diffusants, pas des sources primaires.",
    },
    {
      titre: "Pourquoi voit-on un objet ?",
      illustration: "👁️",
      visuel: "Objet → lumière → œil",
      contenu: [
        "On voit un objet uniquement si de la lumière issue de cet objet entre dans notre œil",
        "Pour une source primaire : c'est sa propre lumière",
        "Pour un objet diffusant : c'est la lumière qu'il renvoie",
        "Dans le noir total, sans aucune lumière, on ne voit plus rien",
      ],
      voixOff:
        "On ne voit un objet que si de la lumière provenant de cet objet arrive jusqu'à notre œil. Pour une source primaire comme une lampe, c'est sa propre lumière qui nous atteint directement. Pour un objet diffusant comme un livre, c'est la lumière qu'il reçoit d'une source et qu'il renvoie vers nous. C'est pour cela que dans une pièce totalement plongée dans le noir, sans aucune source de lumière, on ne voit plus rien du tout.",
    },
    {
      titre: "La propagation rectiligne",
      illustration: "📏",
      visuel: "Rayon lumineux : une droite avec une flèche",
      contenu: [
        "Dans un milieu transparent et homogène, la lumière se propage en ligne droite",
        "On la modélise par un rayon lumineux : une droite fléchée",
        "La flèche indique le sens de propagation de la lumière",
        "C'est pour cela qu'on ne voit pas un objet caché derrière un obstacle",
      ],
      voixOff:
        "Dans un milieu transparent et homogène, comme l'air ou le vide, la lumière se propage toujours en ligne droite. On représente ce trajet par un rayon lumineux : une droite sur laquelle on dessine une flèche qui indique le sens de propagation, de la source vers l'objet éclairé. C'est justement parce que la lumière va tout droit qu'on ne peut pas voir un objet caché derrière un mur ou un obstacle opaque.",
    },
    {
      titre: "Les faisceaux lumineux",
      illustration: "🔦",
      visuel: "Parallèle • Divergent • Convergent",
      contenu: [
        "Un faisceau lumineux est un ensemble de rayons lumineux",
        "Faisceau parallèle : rayons qui restent à égale distance (lumière du Soleil sur Terre)",
        "Faisceau divergent : rayons qui s'écartent (lampe de poche)",
        "Faisceau convergent : rayons qui se rapprochent puis se croisent",
      ],
      voixOff:
        "Un faisceau lumineux est simplement un ensemble de rayons lumineux. Il peut être parallèle : les rayons restent à égale distance les uns des autres, comme la lumière du Soleil qui arrive sur Terre. Il peut être divergent : les rayons s'écartent en s'éloignant de la source, comme la lumière d'une lampe de poche. Ou il peut être convergent : les rayons se rapprochent et finissent par se croiser en un point.",
    },
    {
      titre: "Une vitesse extrêmement grande",
      illustration: "⚡",
      visuel: "300 000 km/s",
      contenu: [
        "Dans le vide ou dans l'air, la lumière se déplace à environ 300 000 km par seconde",
        "C'est la vitesse la plus grande connue dans l'Univers",
        "La lumière du Soleil met environ 8 minutes pour atteindre la Terre",
        "Malgré cette vitesse énorme, le trajet n'est pas instantané",
      ],
      voixOff:
        "La lumière se déplace extrêmement vite : dans le vide ou dans l'air, sa vitesse est d'environ trois cent mille kilomètres par seconde. C'est la vitesse la plus grande que l'on connaisse dans l'Univers. Pourtant, même à cette vitesse, le trajet n'est pas instantané : la lumière du Soleil met environ huit minutes pour parcourir les cent cinquante millions de kilomètres qui nous séparent de lui et atteindre la Terre.",
    },
    {
      titre: "Transparent, translucide, opaque",
      illustration: "🪟",
      visuel: "Verre • Papier calque • Mur",
      contenu: [
        "Transparent : laisse bien passer la lumière, on voit nettement à travers (verre, air, eau claire)",
        "Translucide : laisse passer une partie de la lumière, mais on ne voit pas net à travers (papier calque, verre dépoli)",
        "Opaque : ne laisse pas passer la lumière (mur, bois, métal)",
        "Un objet opaque éclairé bloque la lumière et crée une zone d'ombre",
      ],
      voixOff:
        "Les matériaux ne se comportent pas tous de la même façon face à la lumière. Un matériau transparent laisse bien passer la lumière, et on voit nettement à travers, comme le verre, l'air ou l'eau claire. Un matériau translucide laisse passer seulement une partie de la lumière, mais on ne distingue pas nettement les objets à travers, comme le papier calque ou le verre dépoli. Un matériau opaque, enfin, ne laisse pas passer la lumière du tout, comme un mur, du bois ou du métal.",
    },
    {
      titre: "Ombre propre et ombre portée",
      illustration: "🌑",
      visuel: "Objet opaque + source → ombre",
      contenu: [
        "Un objet opaque éclairé par une source bloque une partie de la lumière",
        "Ombre propre : la partie de l'objet lui-même qui n'est pas éclairée",
        "Ombre portée : la zone sombre projetée sur un écran ou le sol, derrière l'objet",
        "L'ombre portée se trouve dans le prolongement rectiligne des rayons bloqués",
      ],
      voixOff:
        "Quand un objet opaque est éclairé par une source de lumière, il bloque une partie des rayons lumineux et forme une ombre. L'ombre propre, c'est la partie de l'objet lui-même qui n'est pas directement éclairée. L'ombre portée, c'est la zone sombre que l'objet projette sur un écran ou sur le sol, derrière lui. Comme la lumière se propage en ligne droite, l'ombre portée se trouve exactement dans le prolongement des rayons lumineux bloqués par l'objet.",
    },
    {
      titre: "Les éclipses",
      illustration: "🌘",
      visuel: "Éclipse de Soleil / Éclipse de Lune",
      contenu: [
        "Une éclipse se produit quand un astre opaque bloque la lumière du Soleil",
        "Éclipse de Soleil : la Lune passe entre le Soleil et la Terre, son ombre balaie la Terre",
        "Éclipse de Lune : la Terre passe entre le Soleil et la Lune, son ombre couvre la Lune",
        "Les éclipses illustrent la propagation rectiligne de la lumière à très grande échelle",
      ],
      voixOff:
        "Une éclipse se produit lorsqu'un astre opaque bloque la lumière du Soleil et projette son ombre sur un autre astre. Lors d'une éclipse de Soleil, la Lune se place entre le Soleil et la Terre, et son ombre balaie une partie de la surface terrestre. Lors d'une éclipse de Lune, c'est la Terre qui se place entre le Soleil et la Lune, et l'ombre de la Terre vient couvrir la Lune. Ces deux phénomènes montrent, à l'échelle de l'espace, que la lumière se propage bien en ligne droite.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Source primaire (produit sa lumière) ≠ objet diffusant (renvoie la lumière reçue)",
        "On voit un objet quand de la lumière issue de lui entre dans notre œil",
        "La lumière se propage en ligne droite dans un milieu transparent et homogène, à 300 000 km/s",
        "Objet opaque + source → ombre propre et ombre portée ; à grande échelle, cela donne les éclipses",
      ],
      voixOff:
        "Résumons. Une source primaire produit sa propre lumière, alors qu'un objet diffusant se contente de renvoyer la lumière qu'il reçoit. On ne voit un objet que si de la lumière issue de lui entre dans notre œil. Dans un milieu transparent et homogène, la lumière se propage en ligne droite, à l'incroyable vitesse d'environ trois cent mille kilomètres par seconde. Enfin, un objet opaque éclairé forme une ombre propre et une ombre portée, et c'est ce même principe qui explique les éclipses de Soleil et de Lune. Bravo, tu connais maintenant l'essentiel sur les sources et la propagation de la lumière !",
    },
  ],
  fiche: {
    intro:
      "La lumière est produite par des sources primaires ou renvoyée par des objets diffusants ; elle se propage en ligne droite à très grande vitesse, ce qui explique la formation des ombres et des éclipses.",
    sections: [
      {
        titre: "Sources primaires et objets diffusants",
        points: [
          "Source primaire : produit sa propre lumière (Soleil, lampe allumée, flamme, écran allumé, étoile)",
          "Objet diffusant (source secondaire) : ne produit pas de lumière, renvoie celle qu'il reçoit (Lune, table, mur, livre)",
          "On voit un objet uniquement si de la lumière issue de cet objet atteint notre œil",
        ],
      },
      {
        titre: "Propagation rectiligne, faisceaux et vitesse",
        points: [
          "Dans un milieu transparent et homogène, la lumière se propage en ligne droite",
          "Rayon lumineux : droite fléchée qui modélise le trajet de la lumière, la flèche donne le sens de propagation",
          "Faisceau lumineux : ensemble de rayons, parallèle, divergent ou convergent",
          "Vitesse de la lumière dans l'air ou le vide : environ 300 000 km/s ; la lumière du Soleil met 8 minutes pour atteindre la Terre",
        ],
      },
      {
        titre: "Transparent, translucide, opaque",
        points: [
          "Transparent : laisse bien passer la lumière, vision nette à travers (verre, air, eau claire)",
          "Translucide : laisse passer une partie de la lumière, vision floue à travers (papier calque, verre dépoli)",
          "Opaque : ne laisse pas passer la lumière (mur, bois, métal)",
        ],
      },
      {
        titre: "Ombres et éclipses",
        points: [
          "Ombre propre : partie non éclairée de l'objet opaque lui-même",
          "Ombre portée : zone sombre projetée sur un écran ou le sol, dans le prolongement rectiligne des rayons bloqués",
          "Éclipse de Soleil : la Lune passe entre le Soleil et la Terre, son ombre balaie la Terre",
          "Éclipse de Lune : la Terre passe entre le Soleil et la Lune, son ombre couvre la Lune",
        ],
      },
    ],
    audio:
      "Fiche de révision : sources et propagation de la lumière. On distingue deux types d'objets lumineux. Une source primaire produit elle-même sa lumière, comme le Soleil, une lampe allumée, une flamme ou un écran allumé. Un objet diffusant, comme la Lune, une table ou un livre, ne produit aucune lumière : il renvoie seulement une partie de la lumière qu'il reçoit. On ne voit un objet que si de la lumière issue de lui atteint notre œil. Dans un milieu transparent et homogène, comme l'air ou le vide, la lumière se propage en ligne droite : on modélise son trajet par un rayon lumineux, une droite fléchée dont la flèche indique le sens de propagation. Un ensemble de rayons forme un faisceau lumineux, qui peut être parallèle, divergent ou convergent. La lumière se déplace extrêmement vite, environ trois cent mille kilomètres par seconde dans l'air ou le vide : la lumière du Soleil met ainsi environ huit minutes pour atteindre la Terre. Les matériaux se classent en trois familles selon leur comportement face à la lumière : transparents, comme le verre, qui laissent bien passer la lumière et permettent de voir nettement à travers ; translucides, comme le papier calque, qui laissent passer seulement une partie de la lumière sans permettre une vision nette ; et opaques, comme un mur, qui ne laissent pas passer la lumière du tout. Un objet opaque éclairé par une source bloque une partie des rayons lumineux et forme une ombre : l'ombre propre est la partie non éclairée de l'objet lui-même, tandis que l'ombre portée est la zone sombre projetée sur un écran ou sur le sol, dans le prolongement rectiligne des rayons bloqués. À très grande échelle, ce même principe explique les éclipses : lors d'une éclipse de Soleil, la Lune passe entre le Soleil et la Terre et son ombre balaie la Terre ; lors d'une éclipse de Lune, c'est la Terre qui passe entre le Soleil et la Lune et son ombre couvre la Lune.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une source de lumière primaire ?", verso: "Un objet qui produit lui-même sa propre lumière (Soleil, lampe allumée, flamme)." },
    { recto: "Qu'est-ce qu'un objet diffusant ?", verso: "Un objet qui ne produit pas de lumière mais renvoie celle qu'il reçoit (Lune, table, livre)." },
    { recto: "Pourquoi voit-on un objet ?", verso: "Parce que de la lumière issue de cet objet (produite ou diffusée) entre dans notre œil." },
    { recto: "Comment se propage la lumière dans un milieu transparent et homogène ?", verso: "En ligne droite : on la modélise par un rayon lumineux, une droite fléchée." },
    { recto: "Quelle est la vitesse de la lumière dans l'air ou le vide ?", verso: "Environ 300 000 km/s, la plus grande vitesse connue dans l'Univers." },
    { recto: "Différence entre transparent, translucide et opaque ?", verso: "Transparent : vision nette à travers. Translucide : passage partiel, vision floue. Opaque : la lumière ne passe pas du tout." },
    { recto: "Différence entre ombre propre et ombre portée ?", verso: "L'ombre propre est sur l'objet lui-même ; l'ombre portée est projetée sur un écran ou le sol, derrière l'objet." },
    { recto: "Quelle est la différence entre une éclipse de Soleil et une éclipse de Lune ?", verso: "Éclipse de Soleil : la Lune est entre le Soleil et la Terre. Éclipse de Lune : la Terre est entre le Soleil et la Lune." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Laquelle de ces sources de lumière est une source primaire ?",
      choix: ["La Lune", "Une table éclairée", "Une bougie allumée", "Un miroir"],
      bonneReponse: 2,
      explication: "Une bougie allumée produit elle-même sa lumière : c'est une source primaire. La Lune, la table et le miroir ne font que renvoyer la lumière qu'ils reçoivent.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La Lune brille dans le ciel la nuit. Est-ce une source primaire ?",
      choix: ["Oui, elle produit sa propre lumière", "Non, elle diffuse la lumière du Soleil", "Oui, mais seulement en été", "Non, elle ne brille pas vraiment"],
      bonneReponse: 1,
      explication: "La Lune ne produit aucune lumière : elle renvoie (diffuse) la lumière du Soleil qu'elle reçoit. C'est un objet diffusant, pas une source primaire.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Pourquoi ne voit-on rien dans une pièce totalement plongée dans le noir ?",
      reponse: "Parce qu'il n'y a aucune lumière : aucun objet ne peut donc en renvoyer ou en produire vers notre œil.",
      explication: "On ne voit un objet que si de la lumière provenant de lui atteint notre œil. Sans aucune source de lumière, rien n'est visible.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un milieu transparent et homogène, la lumière se propage :",
      choix: ["en zigzag", "en ligne droite", "en cercle", "elle ne se propage pas"],
      bonneReponse: 1,
      explication: "C'est le principe de la propagation rectiligne de la lumière, modélisée par des rayons lumineux (droites fléchées).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite un matériau transparent, un matériau translucide et un matériau opaque.",
      reponse: "Transparent : le verre (ou l'air, l'eau claire). Translucide : le papier calque (ou le verre dépoli). Opaque : le bois (ou un mur, le métal).",
      explication: "Ces trois familles se distinguent par la quantité de lumière qu'elles laissent passer et par la netteté de la vision à travers.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La lumière du Soleil met environ 8 minutes pour atteindre la Terre. Que peut-on en conclure ?",
      choix: [
        "La lumière ne se déplace pas vraiment",
        "La vitesse de la lumière est infinie",
        "Même très rapide, la lumière met un certain temps pour parcourir une grande distance",
        "Le Soleil est très proche de la Terre",
      ],
      bonneReponse: 2,
      explication: "La lumière va extrêmement vite (environ 300 000 km/s), mais la distance Terre-Soleil est si grande que le trajet prend quand même environ 8 minutes.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre un faisceau lumineux divergent et un faisceau lumineux convergent.",
      reponse: "Dans un faisceau divergent, les rayons lumineux s'écartent les uns des autres en s'éloignant de la source (ex : lampe de poche). Dans un faisceau convergent, les rayons se rapprochent et finissent par se croiser en un point.",
      explication: "Un faisceau lumineux est un ensemble de rayons ; sa forme (parallèle, divergent ou convergent) dépend de la façon dont les rayons qui le composent évoluent.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un objet opaque est éclairé par une lampe. Que forme la zone sombre projetée sur le mur derrière lui ?",
      choix: ["L'ombre propre", "L'ombre portée", "Une éclipse", "Un faisceau convergent"],
      bonneReponse: 1,
      explication: "L'ombre portée est la zone sombre projetée sur un écran ou une surface, dans le prolongement rectiligne des rayons bloqués par l'objet. L'ombre propre, elle, se trouve sur l'objet lui-même.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un papier calque laisse-t-il passer la lumière ? Peut-on voir nettement à travers ? Comment appelle-t-on ce type de matériau ?",
      reponse: "Le papier calque laisse passer une partie de la lumière, mais on ne voit pas nettement à travers : c'est un matériau translucide.",
      explication: "Le translucide se distingue du transparent par l'absence de vision nette, et de l'opaque car il laisse quand même passer une partie de la lumière.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Lors d'une éclipse de Soleil, quel astre se place entre le Soleil et la Terre ?",
      choix: ["La Terre", "La Lune", "Une étoile", "Aucun, l'éclipse se produit sans astre intermédiaire"],
      bonneReponse: 1,
      explication: "Lors d'une éclipse de Soleil, la Lune passe entre le Soleil et la Terre, et son ombre balaie une partie de la surface terrestre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on ne peut pas voir un objet caché derrière un mur, en utilisant le principe de propagation de la lumière.",
      reponse: "La lumière se propage en ligne droite. Le mur, opaque, bloque tous les rayons lumineux qui pourraient aller de l'objet caché jusqu'à notre œil : aucune lumière issue de l'objet ne peut donc nous atteindre.",
      explication: "Comme la lumière ne peut pas contourner un obstacle opaque et suit une trajectoire rectiligne, un objet caché derrière un mur ne peut envoyer aucun rayon lumineux jusqu'à notre œil.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Différencie une éclipse de Soleil et une éclipse de Lune en précisant, pour chacune, quel astre bloque la lumière et où se forme l'ombre.",
      reponse: "Éclipse de Soleil : la Lune bloque la lumière du Soleil, et son ombre se forme sur la Terre. Éclipse de Lune : la Terre bloque la lumière du Soleil, et son ombre se forme sur la Lune.",
      explication: "Dans les deux cas, un astre opaque s'interpose entre le Soleil et un autre astre, projetant son ombre par propagation rectiligne de la lumière.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une lampe allumée est :",
      choix: ["un objet diffusant", "une source primaire", "un objet opaque uniquement", "un objet translucide"],
      bonneReponse: 1,
      explication: "Une lampe allumée produit elle-même sa lumière : c'est une source primaire.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que faut-il pour qu'on puisse voir un objet ?",
      reponse: "Il faut que de la lumière issue de cet objet (produite ou diffusée) entre dans notre œil.",
      explication: "Sans lumière atteignant l'œil, aucun objet n'est visible, qu'il soit une source primaire ou un objet diffusant.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un rayon lumineux se représente par :",
      choix: ["une courbe", "une droite fléchée", "un point", "un cercle"],
      bonneReponse: 1,
      explication: "Un rayon lumineux est modélisé par une droite, avec une flèche indiquant le sens de propagation de la lumière.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre l'ombre propre et l'ombre portée d'un objet ?",
      reponse: "L'ombre propre est la partie non éclairée de l'objet lui-même. L'ombre portée est la zone sombre projetée sur un écran ou le sol, derrière l'objet.",
      explication: "Les deux ombres résultent du blocage de la lumière par un objet opaque, mais elles ne se situent pas au même endroit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que les éclipses sont une preuve de la propagation rectiligne de la lumière ?",
      reponse: "Parce qu'un astre opaque bloque la lumière du Soleil et projette une ombre exactement dans le prolongement des rayons lumineux bloqués, sur un autre astre situé derrière lui.",
      explication: "Si la lumière ne se propageait pas en ligne droite, l'ombre d'un astre ne se formerait pas de façon aussi précise et prévisible sur un autre astre aligné avec lui.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Sources et propagation de la lumière",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le Soleil est :",
          choix: ["un objet diffusant", "une source primaire", "un objet opaque seulement", "un objet translucide"],
          bonneReponse: 1,
          explication: "Le Soleil produit lui-même sa lumière : c'est une source primaire, comme toutes les étoiles.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne un exemple de source primaire et un exemple d'objet diffusant.",
          reponse: "Source primaire : une flamme (ou le Soleil, une lampe allumée). Objet diffusant : un mur (ou la Lune, un livre).",
          explication: "La source primaire produit sa lumière, l'objet diffusant la renvoie sans en produire.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un morceau de verre dépoli laisse passer une partie de la lumière mais on ne voit pas net à travers. C'est un matériau :",
          choix: ["transparent", "translucide", "opaque", "diffusant uniquement"],
          bonneReponse: 1,
          explication: "Un matériau translucide laisse passer une partie de la lumière sans permettre une vision nette, contrairement au transparent.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une lampe de poche éclaire un mur. Explique, en une ou deux phrases, comment se forme l'ombre portée d'un objet placé devant le faisceau.",
          reponse: "L'objet opaque placé devant le faisceau bloque une partie des rayons lumineux. La zone où ces rayons n'arrivent pas, sur le mur, forme l'ombre portée, dans le prolongement rectiligne des rayons bloqués.",
          explication: "L'ombre portée résulte directement de la propagation rectiligne de la lumière et du blocage des rayons par un objet opaque.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle est, approximativement, la vitesse de la lumière dans l'air ?",
          choix: ["300 km/s", "3 000 km/s", "300 000 km/s", "3 000 000 km/s"],
          bonneReponse: 2,
          explication: "La lumière se déplace à environ 300 000 km par seconde dans l'air ou le vide, c'est la plus grande vitesse connue dans l'Univers.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Décris le principe d'une éclipse de Lune : quel astre bloque la lumière, et où se forme l'ombre ?",
          reponse: "La Terre se place entre le Soleil et la Lune. La Terre bloque la lumière du Soleil et projette son ombre sur la Lune, qui s'assombrit.",
          explication: "L'éclipse de Lune est le résultat direct de la propagation rectiligne de la lumière bloquée par un astre opaque, la Terre.",
        },
      ],
    },
    {
      titre: "Examen 2 — Sources et propagation de la lumière",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "On voit un livre posé sur une table éclairée parce que :",
          choix: [
            "le livre produit sa propre lumière",
            "le livre diffuse la lumière qu'il reçoit vers notre œil",
            "notre œil produit de la lumière vers le livre",
            "on ne peut pas voir un livre sans lampe intégrée",
          ],
          bonneReponse: 1,
          explication: "Le livre est un objet diffusant : il ne produit pas de lumière, mais il renvoie vers notre œil une partie de la lumière qu'il reçoit d'une source.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite un matériau opaque de la vie courante et explique ce que cela signifie.",
          reponse: "Un mur (ou du métal, du bois). Opaque signifie que ce matériau ne laisse pas passer la lumière du tout.",
          explication: "Un matériau opaque bloque entièrement la lumière, contrairement au transparent et au translucide.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un faisceau lumineux dont les rayons restent à égale distance les uns des autres est dit :",
          choix: ["divergent", "convergent", "parallèle", "opaque"],
          bonneReponse: 2,
          explication: "C'est un faisceau parallèle, comme celui de la lumière du Soleil qui arrive sur Terre depuis une source très éloignée.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre un matériau transparent et un matériau opaque, à l'aide d'un exemple pour chacun.",
          reponse: "Un matériau transparent laisse bien passer la lumière et on voit net à travers (exemple : une vitre en verre). Un matériau opaque ne laisse pas passer la lumière du tout (exemple : un mur en béton).",
          explication: "La différence porte sur la quantité de lumière transmise : totale et nette pour le transparent, nulle pour l'opaque.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Lors d'une éclipse de Soleil, l'ombre de la Lune se forme :",
          choix: ["sur le Soleil", "sur la Terre", "sur une autre étoile", "il n'y a pas d'ombre lors d'une éclipse de Soleil"],
          bonneReponse: 1,
          explication: "La Lune se place entre le Soleil et la Terre : elle bloque la lumière du Soleil et son ombre balaie une partie de la surface terrestre.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève affirme : « La vapeur d'eau des nuages produit de la lumière la nuit, c'est pour cela qu'on voit la Lune briller. » Corrige cette affirmation en utilisant le vocabulaire du chapitre.",
          reponse: "C'est faux : la Lune ne produit aucune lumière, ce n'est pas une source primaire. Elle brille car elle diffuse (renvoie) une partie de la lumière du Soleil qu'elle reçoit ; c'est un objet diffusant.",
          explication: "Cette question réutilise la distinction essentielle du chapitre entre source primaire (qui produit sa lumière) et objet diffusant (qui la renvoie sans en produire).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Source primaire : produit sa propre lumière (Soleil, lampe allumée, flamme). Objet diffusant : renvoie la lumière reçue sans en produire (Lune, table, livre).",
    "On voit un objet uniquement si de la lumière issue de lui (produite ou diffusée) entre dans notre œil.",
    "Dans un milieu transparent et homogène, la lumière se propage en ligne droite : rayon lumineux (droite fléchée) et faisceau (parallèle, divergent ou convergent).",
    "Vitesse de la lumière dans l'air ou le vide : environ 300 000 km/s ; la lumière du Soleil met 8 minutes pour atteindre la Terre.",
    "Transparent (vision nette à travers), translucide (passage partiel, vision floue), opaque (la lumière ne passe pas).",
    "Un objet opaque éclairé forme une ombre propre (sur lui-même) et une ombre portée (projetée derrière) ; à grande échelle, ce principe explique les éclipses de Soleil et de Lune.",
  ],
},
{
  slug: "systeme-solaire",
  titre: "La Terre dans le système solaire",
  matiere: "physique-chimie",
  niveau: "5eme",
  description:
    "Découvrir l'organisation du système solaire autour du Soleil, distinguer étoile et planète, comprendre les mouvements de rotation et de révolution de la Terre, l'origine des saisons, les phases de la Lune et la gravitation universelle.",
  objectifs: [
    "Décrire l'organisation du système solaire et distinguer une étoile d'une planète",
    "Différencier les planètes telluriques et les planètes gazeuses",
    "Expliquer le mouvement de rotation de la Terre et l'alternance jour/nuit",
    "Expliquer le mouvement de révolution de la Terre et la véritable origine des saisons",
    "Décrire le mouvement et les phases de la Lune, et comprendre la gravitation universelle",
  ],
  slides: [
    {
      titre: "Le Soleil, une étoile",
      illustration: "🌟",
      visuel: "Étoile = produit sa propre lumière",
      contenu: [
        "Le Soleil est une étoile : il produit lui-même sa lumière",
        "Cette lumière vient de réactions au cœur du Soleil (fusion nucléaire)",
        "Une planète, elle, ne produit pas de lumière",
        "Une planète est visible car elle diffuse la lumière reçue d'une étoile",
      ],
      voixOff:
        "Au centre de notre système, il y a le Soleil, qui est une étoile. Une étoile produit elle-même sa propre lumière, grâce à des réactions qui se déroulent en son cœur. Une planète, au contraire, ne produit aucune lumière : si on peut la voir, c'est parce qu'elle renvoie la lumière qu'elle reçoit d'une étoile, comme un miroir. C'est cette différence qui distingue une étoile d'une planète.",
    },
    {
      titre: "Le système solaire",
      illustration: "🪐",
      visuel: "Soleil + 8 planètes + satellites + astéroïdes + comètes",
      contenu: [
        "Le système solaire, c'est le Soleil et tout ce qui gravite autour de lui",
        "8 planètes, leurs satellites naturels (comme la Lune), des astéroïdes, des comètes",
        "Les distances y sont immenses : on les mesure parfois en unités astronomiques (UA)",
        "1 UA ≈ 150 millions de km, c'est la distance moyenne Terre-Soleil",
      ],
      voixOff:
        "Le système solaire, c'est l'ensemble formé par le Soleil et par tous les objets qui tournent autour de lui : huit planètes, leurs satellites naturels comme notre Lune, mais aussi des astéroïdes et des comètes. Les distances dans le système solaire sont immenses, alors on utilise parfois une unité pratique, l'unité astronomique. Une unité astronomique vaut environ cent cinquante millions de kilomètres : c'est la distance moyenne qui sépare la Terre du Soleil.",
    },
    {
      titre: "Les planètes telluriques",
      illustration: "🪨",
      visuel: "Mercure • Vénus • Terre • Mars",
      contenu: [
        "Ce sont les 4 planètes les plus proches du Soleil",
        "Mercure, Vénus, Terre, Mars",
        "Elles sont petites, rocheuses et denses",
        "On les appelle aussi planètes rocheuses",
      ],
      voixOff:
        "Les quatre planètes les plus proches du Soleil sont Mercure, Vénus, la Terre et Mars. On les appelle les planètes telluriques, ou planètes rocheuses, parce qu'elles ont une surface solide faite de roches. Ce sont des planètes plutôt petites, mais très denses.",
    },
    {
      titre: "Les planètes géantes gazeuses",
      illustration: "🌀",
      visuel: "Jupiter • Saturne • Uranus • Neptune",
      contenu: [
        "Ce sont les 4 planètes les plus éloignées du Soleil",
        "Jupiter, Saturne, Uranus, Neptune",
        "Elles sont très grandes mais peu denses, faites surtout de gaz",
        "Jupiter est la plus grande planète du système solaire",
      ],
      voixOff:
        "Plus loin du Soleil se trouvent les quatre planètes géantes gazeuses : Jupiter, Saturne, Uranus et Neptune. Elles sont beaucoup plus grandes que les planètes telluriques, mais elles sont faites surtout de gaz, ce qui les rend peu denses. Jupiter, la plus grande de toutes les planètes du système solaire, pourrait à elle seule contenir plus de mille fois le volume de la Terre.",
    },
    {
      titre: "La rotation de la Terre : jour et nuit",
      illustration: "🔄",
      visuel: "1 tour sur elle-même en 24 h",
      contenu: [
        "La Terre tourne sur elle-même autour de l'axe des pôles",
        "Un tour complet dure environ 24 heures : c'est un jour",
        "La moitié éclairée par le Soleil vit le jour",
        "La moitié à l'ombre vit la nuit",
      ],
      voixOff:
        "La Terre tourne sur elle-même, autour d'un axe qui passe par le pôle Nord et le pôle Sud : c'est le mouvement de rotation. Un tour complet dure environ vingt-quatre heures, ce qui correspond à une journée. À chaque instant, la moitié de la Terre tournée vers le Soleil est éclairée : c'est le jour. L'autre moitié, dans l'ombre, vit la nuit. C'est la rotation de la Terre qui explique l'alternance entre le jour et la nuit.",
    },
    {
      titre: "La révolution de la Terre : les saisons",
      illustration: "☀️",
      visuel: "1 tour autour du Soleil en 365,25 jours",
      contenu: [
        "La Terre tourne aussi autour du Soleil : c'est la révolution",
        "Un tour complet dure environ 365,25 jours, soit une année",
        "L'axe de la Terre est incliné d'environ 23,5°",
        "⚠️ Les saisons sont dues à cette inclinaison, PAS à la distance au Soleil",
      ],
      voixOff:
        "En plus de tourner sur elle-même, la Terre tourne aussi autour du Soleil : c'est le mouvement de révolution, qui dure environ trois cent soixante-cinq jours et quart, c'est-à-dire une année. Attention à un piège très fréquent : ce n'est pas parce que la Terre se rapproche du Soleil qu'il fait plus chaud en été ! En réalité, les saisons sont dues à l'inclinaison de l'axe de la Terre, d'environ vingt-trois virgule cinq degrés par rapport à son plan de trajectoire. Cette inclinaison fait que les rayons du Soleil arrivent plus ou moins directement selon la période de l'année, et que la durée du jour varie.",
    },
    {
      titre: "La Lune, satellite de la Terre",
      illustration: "🌙",
      visuel: "1 tour autour de la Terre en 29,5 jours",
      contenu: [
        "La Lune est le satellite naturel de la Terre",
        "Elle tourne autour de la Terre en environ 29,5 jours",
        "Elle ne produit pas de lumière : elle diffuse celle du Soleil",
        "On voit une portion variable de sa face éclairée : ce sont les phases de la Lune",
      ],
      voixOff:
        "La Lune est le satellite naturel de la Terre : elle tourne autour de notre planète en environ vingt-neuf jours et demi. Comme une planète, la Lune ne produit aucune lumière propre : elle se contente de renvoyer la lumière qu'elle reçoit du Soleil. Selon les positions du Soleil, de la Terre et de la Lune, on voit depuis la Terre une portion plus ou moins grande de sa face éclairée : c'est ce qui crée les phases de la Lune, comme la nouvelle lune, le premier quartier, la pleine lune et le dernier quartier.",
    },
    {
      titre: "La gravitation universelle",
      illustration: "🧲",
      visuel: "Attraction entre 2 objets ⇔ masse et distance",
      contenu: [
        "Tous les objets s'attirent mutuellement : c'est la gravitation",
        "Cette attraction dépend de la masse des objets et de la distance entre eux",
        "Elle maintient les planètes en orbite autour du Soleil",
        "Elle maintient aussi la Lune en orbite autour de la Terre, et nous garde au sol",
      ],
      voixOff:
        "Tous les objets de l'Univers s'attirent mutuellement : c'est la gravitation universelle. Cette force d'attraction est plus grande quand les objets sont plus massifs, et plus faible quand ils sont plus éloignés. C'est cette force de gravitation qui maintient les planètes en orbite autour du Soleil, qui garde la Lune en orbite autour de la Terre, et qui nous maintient les pieds sur le sol, sous la forme de notre poids.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Le Soleil est une étoile ; les 8 planètes tournent autour de lui",
        "4 planètes telluriques (rocheuses) puis 4 planètes géantes gazeuses",
        "Rotation (24 h, jour/nuit) ≠ Révolution (365,25 jours, année)",
        "Saisons = inclinaison de l'axe, pas distance au Soleil ; gravitation = attraction entre tous les objets",
      ],
      voixOff:
        "Résumons. Le Soleil est une étoile, au centre du système solaire, autour duquel tournent huit planètes : d'abord les quatre planètes telluriques, rocheuses, puis les quatre planètes géantes gazeuses. La Terre tourne sur elle-même en environ vingt-quatre heures, ce qui donne le jour et la nuit : c'est la rotation. Elle tourne aussi autour du Soleil en environ trois cent soixante-cinq jours, ce qui donne l'année : c'est la révolution. Les saisons viennent de l'inclinaison de l'axe de la Terre, surtout pas de sa distance au Soleil. Enfin, la gravitation universelle attire tous les objets entre eux, et c'est elle qui maintient l'ordre dans le système solaire. Bravo, tu connais maintenant l'essentiel sur la Terre dans le système solaire !",
    },
  ],
  fiche: {
    intro:
      "Le système solaire est formé du Soleil, une étoile, et de tous les objets qui gravitent autour de lui, dont la Terre. La Terre tourne sur elle-même (rotation) et autour du Soleil (révolution), et c'est l'inclinaison de son axe, et non sa distance au Soleil, qui provoque les saisons.",
    sections: [
      {
        titre: "Le Soleil et le système solaire",
        points: [
          "Le Soleil est une étoile : il produit sa propre lumière (fusion nucléaire en son cœur)",
          "Une planète ne produit pas de lumière : elle diffuse celle reçue du Soleil",
          "Le système solaire = le Soleil + 8 planètes + leurs satellites + astéroïdes + comètes",
          "Les distances sont immenses : 1 unité astronomique (UA) ≈ 150 millions de km (distance Terre-Soleil)",
        ],
      },
      {
        titre: "Les 8 planètes",
        points: [
          "Dans l'ordre depuis le Soleil : Mercure, Vénus, Terre, Mars, puis Jupiter, Saturne, Uranus, Neptune",
          "Planètes telluriques (Mercure, Vénus, Terre, Mars) : petites, rocheuses, denses",
          "Planètes géantes gazeuses (Jupiter, Saturne, Uranus, Neptune) : grandes, faites surtout de gaz, peu denses",
        ],
      },
      {
        titre: "Rotation et révolution de la Terre",
        points: [
          "Rotation : la Terre tourne sur elle-même autour de l'axe des pôles en environ 24 heures → alternance jour/nuit",
          "Révolution : la Terre tourne autour du Soleil en environ 365,25 jours → une année",
          "Saisons : dues à l'inclinaison de l'axe de la Terre (environ 23,5°) par rapport au plan de son orbite",
          "⚠️ Les saisons ne sont PAS dues à la distance entre la Terre et le Soleil",
        ],
      },
      {
        titre: "La Lune et la gravitation universelle",
        points: [
          "La Lune est le satellite naturel de la Terre : elle tourne autour d'elle en environ 29,5 jours",
          "La Lune ne produit pas de lumière propre, elle diffuse la lumière du Soleil",
          "Les phases de la Lune (nouvelle lune, premier quartier, pleine lune, dernier quartier) dépendent des positions relatives Soleil-Terre-Lune",
          "Gravitation universelle : tous les objets s'attirent, selon leur masse et leur distance ; elle maintient les planètes et satellites en orbite, et nous garde au sol",
        ],
      },
    ],
    audio:
      "Fiche de révision : la Terre dans le système solaire. Le Soleil est une étoile : il produit lui-même sa lumière, grâce à des réactions en son cœur. Une planète, elle, ne produit pas de lumière : elle diffuse celle qu'elle reçoit du Soleil. Le système solaire est formé du Soleil et de tout ce qui gravite autour de lui : huit planètes, leurs satellites naturels, des astéroïdes et des comètes. Les distances y sont immenses, et on les exprime parfois en unités astronomiques : une unité astronomique vaut environ cent cinquante millions de kilomètres, la distance moyenne entre la Terre et le Soleil. Dans l'ordre depuis le Soleil, on trouve d'abord les quatre planètes telluriques, petites et rocheuses : Mercure, Vénus, la Terre et Mars. Puis viennent les quatre planètes géantes gazeuses, grandes mais peu denses : Jupiter, Saturne, Uranus et Neptune. La Terre a deux mouvements à ne pas confondre. La rotation, c'est le tour que la Terre fait sur elle-même en environ vingt-quatre heures, ce qui explique l'alternance entre le jour et la nuit. La révolution, c'est le tour que la Terre fait autour du Soleil en environ trois cent soixante-cinq jours et quart, ce qui correspond à une année. Les saisons sont dues à l'inclinaison de l'axe de la Terre, d'environ vingt-trois virgule cinq degrés, et surtout pas à la distance entre la Terre et le Soleil. Enfin, la Lune est le satellite naturel de la Terre : elle tourne autour d'elle en environ vingt-neuf jours et demi, ne produit aucune lumière propre, et ses phases s'expliquent par les positions relatives du Soleil, de la Terre et de la Lune. Tout cet équilibre est maintenu grâce à la gravitation universelle, la force qui attire entre eux tous les objets de l'Univers, selon leur masse et la distance qui les sépare.",
  },
  memoCards: [
    { recto: "Qu'est-ce qui distingue une étoile d'une planète ?", verso: "Une étoile produit sa propre lumière (comme le Soleil). Une planète n'en produit pas : elle diffuse la lumière reçue d'une étoile." },
    { recto: "Que contient le système solaire ?", verso: "Le Soleil (étoile) et tout ce qui gravite autour : 8 planètes, leurs satellites naturels, des astéroïdes, des comètes." },
    { recto: "Cite les 4 planètes telluriques, dans l'ordre depuis le Soleil.", verso: "Mercure, Vénus, Terre, Mars : petites, rocheuses et denses." },
    { recto: "Cite les 4 planètes géantes gazeuses, dans l'ordre depuis le Soleil.", verso: "Jupiter, Saturne, Uranus, Neptune : grandes, faites surtout de gaz, peu denses." },
    { recto: "Rotation de la Terre : quoi et en combien de temps ?", verso: "La Terre tourne sur elle-même en environ 24 heures : cela explique l'alternance jour/nuit." },
    { recto: "Révolution de la Terre : quoi et en combien de temps ?", verso: "La Terre tourne autour du Soleil en environ 365,25 jours : cela correspond à une année." },
    { recto: "Qu'est-ce qui cause vraiment les saisons ?", verso: "L'inclinaison de l'axe de la Terre (≈ 23,5°) — PAS la distance entre la Terre et le Soleil." },
    { recto: "La Lune tourne autour de la Terre en combien de temps ?", verso: "Environ 29,5 jours (un mois lunaire). Elle ne produit pas de lumière, elle diffuse celle du Soleil." },
    { recto: "Qu'est-ce que la gravitation universelle ?", verso: "L'attraction mutuelle entre tous les objets, qui dépend de leur masse et de la distance qui les sépare." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le Soleil est :",
      choix: ["une planète", "un satellite", "une étoile", "un astéroïde"],
      bonneReponse: 2,
      explication: "Le Soleil est une étoile : il produit lui-même sa propre lumière, contrairement aux planètes.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de planètes compte le système solaire ?",
      choix: ["6", "7", "8", "9"],
      bonneReponse: 2,
      explication: "Le système solaire compte 8 planètes, de Mercure jusqu'à Neptune.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment s'appelle le satellite naturel de la Terre ?",
      reponse: "La Lune",
      explication: "La Lune tourne autour de la Terre en environ 29,5 jours et ne produit pas de lumière propre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La rotation de la Terre sur elle-même dure environ :",
      choix: ["24 heures", "29,5 jours", "365,25 jours", "12 heures"],
      bonneReponse: 0,
      explication: "Un tour complet de la Terre sur elle-même dure environ 24 heures : cela explique l'alternance jour/nuit.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Pourquoi une planète comme la Terre est-elle visible depuis l'espace, alors qu'elle ne produit pas de lumière ?",
      reponse: "Parce qu'elle diffuse (renvoie) la lumière qu'elle reçoit du Soleil.",
      explication: "Contrairement à une étoile, une planète n'émet pas sa propre lumière ; elle est visible car elle réfléchit la lumière d'une étoile.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Parmi ces planètes, laquelle est une planète tellurique (rocheuse) ?",
      choix: ["Jupiter", "Saturne", "Mars", "Neptune"],
      bonneReponse: 2,
      explication: "Mars fait partie des 4 planètes telluriques (Mercure, Vénus, Terre, Mars), petites et rocheuses.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre la rotation et la révolution de la Terre ?",
      reponse: "La rotation est le tour que la Terre fait sur elle-même en 24 h (jour/nuit). La révolution est le tour que la Terre fait autour du Soleil en 365,25 jours (l'année).",
      explication: "Il ne faut pas confondre ces deux mouvements : rotation = jour/nuit, révolution = année.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Les saisons sont dues :",
      choix: [
        "à la distance variable entre la Terre et le Soleil",
        "à l'inclinaison de l'axe de rotation de la Terre",
        "à la vitesse de rotation de la Terre",
        "à la Lune",
      ],
      bonneReponse: 1,
      explication: "C'est l'inclinaison de l'axe de la Terre (environ 23,5°) qui fait varier l'angle des rayons du Soleil et la durée d'ensoleillement selon les saisons, pas la distance au Soleil.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un camarade affirme : « Il fait plus chaud en été parce que la Terre est plus proche du Soleil. » Corrige cette erreur.",
      reponse: "C'est faux : la distance Terre-Soleil ne provoque pas les saisons. Les saisons viennent de l'inclinaison de l'axe de la Terre, qui fait varier l'angle d'arrivée des rayons du Soleil selon la période de l'année.",
      explication: "C'est une erreur très fréquente. La cause réelle des saisons est l'inclinaison de l'axe terrestre, pas la distance au Soleil.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "La force qui maintient la Lune en orbite autour de la Terre et les planètes en orbite autour du Soleil s'appelle :",
      choix: ["la révolution", "la gravitation universelle", "la fusion nucléaire", "la rotation"],
      bonneReponse: 1,
      explication: "La gravitation universelle est la force d'attraction qui s'exerce entre tous les objets ayant une masse ; c'est elle qui maintient les orbites.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "De quoi dépend l'intensité de la force de gravitation entre deux objets ? Donne un exemple concret dans le système solaire.",
      reponse: "Elle dépend de la masse des deux objets et de la distance qui les sépare : plus les objets sont massifs et proches, plus l'attraction est forte. Exemple : la gravitation du Soleil, très massif, maintient les planètes en orbite autour de lui.",
      explication: "La gravitation universelle s'applique à tous les objets de l'Univers, mais son effet n'est perceptible que pour des objets très massifs comme les planètes et les étoiles, ou à faible distance.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on voit la Lune changer d'aspect au cours du mois (phases de la Lune).",
      reponse: "La Lune ne produit pas de lumière : une moitié est toujours éclairée par le Soleil. Selon les positions relatives du Soleil, de la Terre et de la Lune, on voit depuis la Terre une portion plus ou moins grande de cette face éclairée, ce qui donne les phases (nouvelle lune, premier quartier, pleine lune, dernier quartier).",
      explication: "Les phases ne sont pas dues à une ombre de la Terre sur la Lune (cela, c'est une éclipse), mais à la géométrie Soleil-Terre-Lune qui change chaque jour.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le point commun entre Mercure, Vénus, la Terre et Mars ?",
      choix: ["Ce sont des étoiles", "Ce sont des planètes telluriques", "Ce sont des satellites", "Ce sont des géantes gazeuses"],
      bonneReponse: 1,
      explication: "Ces quatre planètes proches du Soleil sont petites, rocheuses et denses : ce sont les planètes telluriques.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Combien de temps dure environ la révolution de la Terre autour du Soleil ?",
      reponse: "Environ 365,25 jours (une année)",
      explication: "C'est le temps que met la Terre pour faire un tour complet autour du Soleil.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "L'alternance entre le jour et la nuit s'explique par :",
      choix: ["la révolution de la Terre", "la rotation de la Terre sur elle-même", "les phases de la Lune", "la distance au Soleil"],
      bonneReponse: 1,
      explication: "C'est la rotation de la Terre sur elle-même, en environ 24 heures, qui fait alterner jour et nuit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Vrai ou faux : la Terre est plus proche du Soleil en été. Justifie.",
      reponse: "Faux. Les saisons sont dues à l'inclinaison de l'axe de la Terre, pas à sa distance au Soleil.",
      explication: "C'est une confusion fréquente à corriger : la distance Terre-Soleil ne détermine pas les saisons.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Qu'est-ce que la gravitation universelle, et donne deux exemples de son effet dans le système solaire.",
      reponse: "C'est la force d'attraction qui s'exerce entre tous les objets, selon leur masse et leur distance. Exemples : elle maintient les planètes en orbite autour du Soleil, et la Lune en orbite autour de la Terre.",
      explication: "La gravitation universelle explique aussi pourquoi les objets ont un poids et restent au sol.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La Terre dans le système solaire",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une étoile se distingue d'une planète car elle :",
          choix: ["est toujours plus grosse", "produit sa propre lumière", "tourne plus vite", "n'a pas de satellite"],
          bonneReponse: 1,
          explication: "Une étoile comme le Soleil produit elle-même sa lumière ; une planète ne fait que la diffuser.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite dans l'ordre les 4 planètes telluriques, en partant de la plus proche du Soleil.",
          reponse: "Mercure, Vénus, Terre, Mars",
          explication: "Ce sont les 4 planètes rocheuses les plus proches du Soleil.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Le mouvement de révolution de la Terre correspond :",
          choix: ["au jour et à la nuit", "à l'année", "aux phases de la Lune", "à la gravitation"],
          bonneReponse: 1,
          explication: "La révolution, le tour de la Terre autour du Soleil en environ 365,25 jours, correspond à une année.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la véritable cause des saisons sur Terre.",
          reponse: "Les saisons sont dues à l'inclinaison de l'axe de rotation de la Terre (environ 23,5°) par rapport au plan de son orbite, ce qui fait varier l'angle d'arrivée des rayons du Soleil et la durée d'ensoleillement au cours de l'année.",
          explication: "Ce n'est pas la distance Terre-Soleil qui varie de façon significative selon les saisons, contrairement à une idée reçue.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La Lune est visible depuis la Terre car :",
          choix: ["elle produit sa propre lumière", "elle diffuse la lumière du Soleil", "elle brille la nuit uniquement", "elle est une étoile"],
          bonneReponse: 1,
          explication: "Comme une planète, la Lune ne produit pas de lumière : elle renvoie celle qu'elle reçoit du Soleil.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève dit : « Les planètes tournent autour du Soleil sans raison, elles flottent simplement dans l'espace. » Corrige et complète cette affirmation avec la notion scientifique adaptée.",
          reponse: "C'est incomplet : les planètes restent en orbite grâce à la gravitation universelle, la force d'attraction qui s'exerce entre tous les objets massifs, ici entre le Soleil et chaque planète, en fonction de leur masse et de leur distance.",
          explication: "La gravitation universelle est la notion clé qui explique pourquoi les planètes ne s'échappent pas dans l'espace : elles sont attirées en permanence par le Soleil.",
        },
      ],
    },
    {
      titre: "Examen 2 — La Terre dans le système solaire",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le système solaire est composé du Soleil et :",
          choix: [
            "uniquement des 8 planètes",
            "des 8 planètes, de leurs satellites, d'astéroïdes et de comètes",
            "uniquement de la Terre et de la Lune",
            "d'autres étoiles",
          ],
          bonneReponse: 1,
          explication: "Le système solaire regroupe le Soleil et tous les objets qui gravitent autour de lui : planètes, satellites, astéroïdes, comètes.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite dans l'ordre les 4 planètes géantes gazeuses, en partant de la plus proche du Soleil.",
          reponse: "Jupiter, Saturne, Uranus, Neptune",
          explication: "Ce sont les 4 planètes les plus éloignées du Soleil, grandes et faites surtout de gaz.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "En combien de temps environ la Lune fait-elle un tour complet autour de la Terre ?",
          choix: ["24 heures", "7 jours", "29,5 jours", "365,25 jours"],
          bonneReponse: 2,
          explication: "La Lune tourne autour de la Terre en environ 29,5 jours, ce qui correspond à un mois lunaire.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle est l'unité utilisée pour comparer les grandes distances dans le système solaire, et à combien de kilomètres correspond-elle environ ?",
          reponse: "L'unité astronomique (UA), qui vaut environ 150 millions de kilomètres — la distance moyenne entre la Terre et le Soleil.",
          explication: "Cette unité permet de comparer facilement les distances entre les objets du système solaire sans manipuler de très grands nombres.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pourquoi le jour et la nuit alternent-ils sur Terre ?",
          choix: [
            "Parce que le Soleil s'éteint la nuit",
            "Parce que la Terre tourne sur elle-même, et une moitié seulement est éclairée à la fois",
            "Parce que la Terre s'approche et s'éloigne du Soleil",
            "Parce que la Lune cache le Soleil chaque nuit",
          ],
          bonneReponse: 1,
          explication: "La rotation de la Terre sur elle-même fait qu'à chaque instant, une moitié de la Terre est éclairée (jour) et l'autre est dans l'ombre (nuit).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi les planètes telluriques et les planètes géantes gazeuses ont des caractéristiques si différentes, en citant un exemple de chaque groupe.",
          reponse: "Les planètes telluriques (par exemple la Terre) sont petites, rocheuses et denses, tandis que les planètes géantes gazeuses (par exemple Jupiter) sont beaucoup plus grandes mais composées surtout de gaz, donc peu denses.",
          explication: "Cette distinction est une classification fondamentale des 8 planètes du système solaire, liée à leur composition et à leur position par rapport au Soleil.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le Soleil est une étoile (il produit sa propre lumière) ; les 8 planètes, elles, diffusent la lumière qu'elles reçoivent de lui.",
    "Dans l'ordre depuis le Soleil : 4 planètes telluriques rocheuses (Mercure, Vénus, Terre, Mars), puis 4 planètes géantes gazeuses (Jupiter, Saturne, Uranus, Neptune).",
    "Rotation de la Terre (≈ 24 h) → alternance jour/nuit. Révolution de la Terre autour du Soleil (≈ 365,25 jours) → l'année. Ne pas confondre les deux.",
    "Les saisons sont dues à l'inclinaison de l'axe de la Terre (≈ 23,5°), et non à une variation de la distance Terre-Soleil.",
    "La Lune tourne autour de la Terre en ≈ 29,5 jours, ne produit pas de lumière propre, et ses phases s'expliquent par les positions relatives Soleil-Terre-Lune.",
    "La gravitation universelle attire entre eux tous les objets selon leur masse et leur distance : elle maintient les orbites des planètes et des satellites, et nous garde au sol.",
  ],
}
];

export default chapitres;
