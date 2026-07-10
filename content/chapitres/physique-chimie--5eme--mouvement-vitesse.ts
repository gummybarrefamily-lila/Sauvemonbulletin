import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
