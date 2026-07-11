import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "meteo-climat",
  titre: "Météorologie et climat",
  matiere: "svt",
  niveau: "4eme",
  description:
    "Distinguer météorologie et climat, connaître les paramètres météorologiques et leurs instruments de mesure, comprendre les facteurs qui déterminent le climat d'une région, l'effet de serre naturel et le changement climatique actuel d'origine humaine.",
  objectifs: [
    "Distinguer la météorologie (le temps qu'il fait à un instant donné) du climat (les conditions moyennes sur une longue durée)",
    "Connaître les principaux paramètres météorologiques et les instruments qui les mesurent",
    "Identifier les facteurs qui influencent le climat d'une région (latitude, altitude, proximité de la mer)",
    "Expliquer le principe de l'effet de serre naturel",
    "Comprendre les causes humaines du changement climatique actuel et des pistes pour l'atténuer",
  ],
  slides: [
    {
      titre: "Météo ou climat ?",
      illustration: "🌦️",
      visuel: "météo = aujourd'hui / climat = moyenne sur 30 ans",
      contenu: [
        "La météo décrit le temps qu'il fait à un endroit et un moment précis",
        "Le climat décrit les conditions moyennes sur une longue période (30 ans)",
        "On peut avoir un jour froid dans une région au climat chaud",
        "Ne pas confondre un épisode météo et une tendance climatique",
      ],
      voixOff:
        "Il faut bien distinguer deux mots que l'on confond souvent. La météorologie décrit le temps qu'il fait ici et maintenant : il pleut, il fait 20 degrés, le ciel est dégagé. Le climat, lui, décrit les conditions moyennes observées sur une longue période, environ trente ans. Un jour de neige ne remet donc pas en cause un climat qui se réchauffe globalement.",
    },
    {
      titre: "Les paramètres météorologiques",
      illustration: "🌡️",
      visuel: "température / pression / humidité / vent / précipitations",
      contenu: [
        "Température de l'air, mesurée en degrés Celsius",
        "Pression atmosphérique, en hectopascals",
        "Humidité de l'air et précipitations (pluie, neige)",
        "Vitesse et direction du vent",
      ],
      voixOff:
        "Pour décrire le temps qu'il fait, les scientifiques mesurent plusieurs paramètres : la température de l'air, la pression atmosphérique, l'humidité, les précipitations comme la pluie ou la neige, ainsi que la vitesse et la direction du vent. Ensemble, ces mesures donnent une image complète de la situation météorologique.",
    },
    {
      titre: "Mesurer le temps qu'il fait",
      illustration: "📡",
      visuel: "thermomètre, baromètre, pluviomètre, anémomètre",
      contenu: [
        "Le thermomètre mesure la température",
        "Le baromètre mesure la pression atmosphérique",
        "Le pluviomètre mesure les précipitations",
        "L'anémomètre mesure la vitesse du vent ; satellites et stations complètent ces mesures",
      ],
      voixOff:
        "Des instruments précis permettent ces mesures : le thermomètre pour la température, le baromètre pour la pression, le pluviomètre pour la quantité de pluie tombée, l'anémomètre pour la vitesse du vent. Des milliers de stations météorologiques au sol, complétées par des satellites, transmettent en continu ces données.",
    },
    {
      titre: "Qu'est-ce que le climat ?",
      illustration: "📈",
      visuel: "climat = statistiques sur des décennies",
      contenu: [
        "Le climat est calculé à partir de moyennes de température et de précipitations",
        "Ces moyennes sont établies sur au moins 30 années d'observations",
        "Chaque région du globe possède son propre climat",
        "Le climat évolue lentement, sauf changement climatique rapide",
      ],
      voixOff:
        "Le climat d'une région correspond aux valeurs moyennes de température, de précipitations et d'autres paramètres, calculées sur au moins trente années d'observations. Chaque région de la planète a ainsi son propre climat : tempéré, tropical, désertique, polaire... Ce climat évolue normalement très lentement.",
    },
    {
      titre: "Les facteurs qui influencent le climat",
      illustration: "🗺️",
      visuel: "latitude / altitude / proximité de la mer",
      contenu: [
        "La latitude : plus on s'éloigne de l'équateur, moins l'énergie solaire reçue est concentrée",
        "L'altitude : la température diminue quand l'altitude augmente",
        "La proximité de la mer adoucit les températures (climat océanique)",
        "Les courants marins peuvent réchauffer ou refroidir les côtes",
      ],
      voixOff:
        "Plusieurs facteurs expliquent pourquoi le climat varie d'un lieu à un autre. La latitude joue un rôle majeur : l'énergie solaire reçue est plus concentrée près de l'équateur qu'aux pôles. L'altitude compte aussi : plus on monte en montagne, plus la température baisse. Enfin, la proximité de la mer et les courants marins adoucissent ou modifient les climats côtiers.",
    },
    {
      titre: "L'effet de serre naturel",
      illustration: "🌡️",
      visuel: "gaz à effet de serre = couverture de la Terre",
      contenu: [
        "L'atmosphère contient des gaz à effet de serre (CO₂, vapeur d'eau...)",
        "Ces gaz retiennent une partie de la chaleur du Soleil renvoyée par la Terre",
        "Sans effet de serre naturel, la Terre serait glaciale (environ -18 °C)",
        "L'effet de serre naturel est indispensable à la vie",
      ],
      voixOff:
        "L'atmosphère contient naturellement des gaz à effet de serre, comme le dioxyde de carbone et la vapeur d'eau. Ils agissent comme une couverture : ils laissent passer l'énergie du Soleil, mais retiennent une partie de la chaleur que la Terre renvoie vers l'espace. Sans cet effet de serre naturel, la température moyenne du globe serait d'environ moins dix-huit degrés : la vie telle que nous la connaissons n'existerait pas.",
    },
    {
      titre: "Le changement climatique actuel",
      illustration: "🏭",
      visuel: "activités humaines → plus de CO₂ → réchauffement",
      contenu: [
        "Depuis la révolution industrielle, les activités humaines émettent beaucoup de CO₂",
        "Combustion des énergies fossiles (charbon, pétrole, gaz), déforestation",
        "Ce surplus de gaz à effet de serre renforce l'effet de serre naturel",
        "La température moyenne du globe augmente : c'est le réchauffement climatique",
      ],
      voixOff:
        "Depuis environ deux siècles, les activités humaines, en particulier la combustion des énergies fossiles comme le charbon, le pétrole et le gaz, ainsi que la déforestation, rejettent d'énormes quantités de dioxyde de carbone dans l'atmosphère. Ce surplus de gaz à effet de serre renforce l'effet de serre naturel et fait augmenter la température moyenne du globe : c'est le réchauffement climatique actuel, largement dû à l'être humain.",
    },
    {
      titre: "Conséquences et adaptation",
      illustration: "🧊",
      visuel: "fonte des glaces, montée des mers, événements extrêmes",
      contenu: [
        "Fonte des glaciers et de la banquise",
        "Montée du niveau des mers, événements météorologiques extrêmes plus fréquents",
        "Atténuer : réduire les émissions de gaz à effet de serre, énergies renouvelables",
        "S'adapter : construire différemment, économiser l'eau et l'énergie",
      ],
      voixOff:
        "Le réchauffement climatique a des conséquences déjà visibles : fonte des glaciers et de la banquise, montée du niveau des mers, événements extrêmes comme les canicules ou les inondations plus fréquents. Pour limiter ces effets, il faut réduire nos émissions de gaz à effet de serre, par exemple en développant les énergies renouvelables, tout en adaptant nos modes de vie et nos constructions.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Météo = temps qu'il fait maintenant ; climat = moyennes sur ~30 ans",
        "Paramètres météo mesurés par thermomètre, baromètre, pluviomètre, anémomètre",
        "Climat dépend de la latitude, de l'altitude, de la proximité de la mer",
        "Effet de serre naturel indispensable, mais renforcé par l'être humain → réchauffement climatique",
      ],
      voixOff:
        "Résumons. La météo décrit le temps qu'il fait à un instant donné, alors que le climat correspond aux moyennes observées sur environ trente ans. Le climat d'une région dépend surtout de sa latitude, de son altitude et de sa proximité avec la mer. L'effet de serre naturel, dû à des gaz comme le CO₂, rend la vie possible sur Terre, mais les activités humaines en rejettent trop et renforcent cet effet, provoquant le réchauffement climatique actuel. Bravo, tu comprends maintenant les enjeux du climat !",
    },
  ],
  fiche: {
    intro:
      "La météorologie décrit le temps qu'il fait à un instant donné, alors que le climat correspond aux conditions moyennes observées sur une longue période. Le climat d'une région dépend de sa latitude, de son altitude et de sa proximité avec la mer. L'effet de serre naturel rend la vie possible sur Terre, mais les activités humaines le renforcent, provoquant le changement climatique actuel.",
    sections: [
      {
        titre: "Météo et climat",
        points: [
          "Météo : le temps qu'il fait à un endroit et un moment précis",
          "Climat : les conditions moyennes calculées sur au moins 30 ans",
          "Un épisode météo isolé ne remet pas en cause une tendance climatique",
        ],
      },
      {
        titre: "Mesurer le temps qu'il fait",
        points: [
          "Paramètres mesurés : température, pression, humidité, précipitations, vent",
          "Instruments : thermomètre, baromètre, pluviomètre, anémomètre",
          "Stations météo et satellites transmettent ces données en continu",
        ],
      },
      {
        titre: "Les facteurs du climat",
        points: [
          "La latitude détermine la quantité d'énergie solaire reçue",
          "L'altitude fait baisser la température",
          "La proximité de la mer et les courants marins adoucissent le climat",
        ],
      },
      {
        titre: "Effet de serre et changement climatique",
        points: [
          "L'effet de serre naturel retient une partie de la chaleur terrestre (gaz comme le CO₂)",
          "Il est indispensable à la vie : sans lui, la Terre serait glaciale",
          "Les activités humaines (énergies fossiles, déforestation) renforcent l'effet de serre",
          "Conséquences : réchauffement, fonte des glaces, montée des mers, événements extrêmes",
        ],
      },
    ],
    audio:
      "Fiche de révision : météorologie et climat. La météorologie décrit le temps qu'il fait à un endroit et un instant précis ; le climat correspond aux conditions moyennes de température et de précipitations calculées sur au moins trente années. Les paramètres météorologiques, comme la température, la pression, l'humidité ou le vent, sont mesurés par des instruments tels que le thermomètre, le baromètre, le pluviomètre ou l'anémomètre. Le climat d'une région dépend surtout de sa latitude, qui détermine l'énergie solaire reçue, de son altitude, et de sa proximité avec la mer. Dans l'atmosphère, des gaz à effet de serre comme le dioxyde de carbone retiennent naturellement une partie de la chaleur terrestre : cet effet de serre naturel est indispensable à la vie. Mais depuis la révolution industrielle, les activités humaines, en particulier la combustion des énergies fossiles et la déforestation, rejettent un surplus de gaz à effet de serre qui renforce ce phénomène et provoque le réchauffement climatique actuel, avec des conséquences comme la fonte des glaces, la montée du niveau des mers et des événements météorologiques extrêmes plus fréquents.",
  },
  memoCards: [
    { recto: "Différence entre météo et climat ?", verso: "La météo décrit le temps à un instant donné ; le climat correspond aux moyennes sur au moins 30 ans." },
    { recto: "Quel instrument mesure la pression atmosphérique ?", verso: "Le baromètre." },
    { recto: "Quel instrument mesure les précipitations ?", verso: "Le pluviomètre." },
    { recto: "Quels sont les trois grands facteurs du climat d'une région ?", verso: "La latitude, l'altitude et la proximité de la mer." },
    { recto: "Qu'est-ce que l'effet de serre naturel ?", verso: "La rétention par certains gaz atmosphériques (CO₂, vapeur d'eau) d'une partie de la chaleur terrestre." },
    { recto: "Pourquoi l'effet de serre naturel est-il indispensable ?", verso: "Sans lui, la température moyenne du globe serait d'environ -18 °C : la vie ne serait pas possible." },
    { recto: "Quelle est la cause principale du changement climatique actuel ?", verso: "Les activités humaines (énergies fossiles, déforestation) qui rejettent un surplus de gaz à effet de serre." },
    { recto: "Cite deux conséquences du réchauffement climatique.", verso: "La fonte des glaciers et de la banquise, la montée du niveau des mers (ou des événements extrêmes plus fréquents)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le climat d'une région correspond :",
      choix: ["Au temps qu'il fait aujourd'hui", "Aux conditions moyennes sur une longue période", "À la température maximale jamais observée", "À la météo du lendemain"],
      bonneReponse: 1,
      explication: "Le climat est calculé à partir de moyennes sur au moins 30 ans, contrairement à la météo qui décrit un instant précis.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel instrument mesure la température de l'air ?",
      choix: ["Le baromètre", "Le thermomètre", "L'anémomètre", "Le pluviomètre"],
      bonneReponse: 1,
      explication: "Le thermomètre mesure la température, exprimée en degrés Celsius.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux paramètres que l'on mesure pour décrire le temps qu'il fait.",
      reponse: "Par exemple la température et les précipitations (ou la pression, l'humidité, le vent).",
      explication: "Ces paramètres, mesurés régulièrement, définissent la météo à un instant donné.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un gaz à effet de serre présent naturellement dans l'atmosphère est :",
      choix: ["Le dioxygène", "Le dioxyde de carbone", "L'azote pur", "L'hélium"],
      bonneReponse: 1,
      explication: "Le dioxyde de carbone (CO₂) et la vapeur d'eau sont des gaz à effet de serre naturellement présents.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi il peut neiger un jour dans une région dont le climat se réchauffe globalement.",
      reponse: "Parce que la météo (le temps d'un jour précis) peut varier fortement même dans une région dont le climat, c'est-à-dire les moyennes sur des décennies, se réchauffe. Un épisode isolé ne contredit pas une tendance de long terme.",
      explication: "Il ne faut pas confondre un événement météo ponctuel et l'évolution du climat sur le long terme.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi la température diminue quand on monte en altitude, à une même latitude.",
      reponse: "L'altitude fait partie des facteurs qui influencent le climat local : plus on s'élève, plus la température moyenne baisse, ce qui explique par exemple la présence de neige au sommet de montagnes situées dans des régions chaudes.",
      explication: "L'altitude est l'un des trois grands facteurs du climat, avec la latitude et la proximité de la mer.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Sans effet de serre naturel, la température moyenne du globe serait :",
      choix: ["Plus élevée qu'aujourd'hui", "Environ -18 °C", "Identique à aujourd'hui", "Impossible à estimer"],
      bonneReponse: 1,
      explication: "L'effet de serre naturel réchauffe la Terre d'une trentaine de degrés par rapport à ce qu'elle serait sans lui.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la principale cause humaine du renforcement de l'effet de serre depuis la révolution industrielle ?",
      reponse: "La combustion des énergies fossiles (charbon, pétrole, gaz) et la déforestation, qui rejettent un surplus de dioxyde de carbone dans l'atmosphère.",
      explication: "Ces activités augmentent la concentration de gaz à effet de serre, renforçant l'effet de serre naturel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique le lien entre effet de serre naturel et réchauffement climatique actuel : sont-ils le même phénomène ?",
      reponse: "Non. L'effet de serre naturel est indispensable à la vie et existe depuis toujours grâce aux gaz atmosphériques. Le réchauffement climatique actuel vient du fait que les activités humaines ajoutent trop de gaz à effet de serre, ce qui renforce ce phénomène naturel et augmente la température moyenne du globe au-delà de l'équilibre habituel.",
      explication: "Le changement climatique n'est pas la création d'un nouveau phénomène mais le renforcement excessif d'un phénomène naturel.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une ville côtière a des hivers plus doux qu'une ville située à la même latitude mais loin des côtes. Cela s'explique par :",
      choix: [
        "La latitude uniquement",
        "La proximité de la mer, qui adoucit les températures",
        "L'altitude uniquement",
        "Le hasard, aucune explication scientifique"],
      bonneReponse: 1,
      explication: "La proximité de la mer et les courants marins modèrent les températures des régions côtières.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Cite deux actions permettant de réduire les émissions de gaz à effet de serre à l'échelle d'un pays.",
      reponse: "Développer les énergies renouvelables (solaire, éolien...) pour remplacer les énergies fossiles, et lutter contre la déforestation en protégeant ou en replantant des forêts.",
      explication: "Réduire la combustion d'énergies fossiles et préserver les puits de carbone naturels comme les forêts limitent les émissions de CO₂.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi dit-on que le climat évolue normalement très lentement, alors que le changement climatique actuel est qualifié de rapide ?",
      reponse: "Naturellement, le climat varie sur des milliers d'années sous l'effet de phénomènes lents (variations de l'orbite terrestre, activité volcanique...). Le réchauffement actuel, lui, se produit en quelques décennies seulement, à un rythme largement accéléré par les activités humaines.",
      explication: "La rapidité du changement climatique actuel, liée à l'ajout massif de gaz à effet de serre par l'être humain, le distingue des variations climatiques naturelles passées.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le climat se calcule sur une durée d'environ :",
      choix: ["Un jour", "Une semaine", "30 ans", "1000 ans"],
      bonneReponse: 2,
      explication: "Le climat correspond à des moyennes établies sur au moins 30 années d'observations.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel instrument mesure la vitesse du vent ?",
      reponse: "L'anémomètre.",
      explication: "L'anémomètre mesure la vitesse (et parfois la direction) du vent.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite les trois grands facteurs qui influencent le climat d'une région.",
      reponse: "La latitude, l'altitude et la proximité de la mer.",
      explication: "Ces trois facteurs expliquent la diversité des climats sur Terre.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le réchauffement climatique actuel est principalement dû à :",
      choix: ["Une augmentation naturelle de l'activité solaire", "Un surplus de gaz à effet de serre d'origine humaine", "Une diminution de l'effet de serre", "Un phénomène sans cause connue"],
      bonneReponse: 1,
      explication: "Les activités humaines rejettent un surplus de gaz à effet de serre qui renforce l'effet de serre naturel.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite une conséquence du réchauffement climatique.",
      reponse: "Par exemple la fonte des glaciers et de la banquise, ou la montée du niveau des mers, ou des événements extrêmes plus fréquents.",
      explication: "Le réchauffement climatique a de nombreuses conséquences observables déjà aujourd'hui.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Météorologie et climat",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La météorologie décrit :",
          choix: ["Les moyennes sur 30 ans", "Le temps qu'il fait à un instant donné", "Uniquement la température", "Le climat du siècle prochain"],
          bonneReponse: 1,
          explication: "La météorologie s'intéresse au temps qu'il fait ici et maintenant.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel instrument mesure les précipitations ?",
          reponse: "Le pluviomètre.",
          explication: "Le pluviomètre mesure la quantité de pluie ou de neige tombée.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi les régions proches de l'équateur sont globalement plus chaudes que les régions proches des pôles.",
          reponse: "Parce que la latitude détermine la quantité d'énergie solaire reçue : elle est plus concentrée près de l'équateur qu'aux hautes latitudes, où les rayons du Soleil arrivent de façon plus rasante.",
          explication: "La latitude est l'un des principaux facteurs expliquant la répartition des climats sur Terre.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "L'effet de serre naturel est dû notamment à :",
          choix: ["L'azote de l'atmosphère", "Le dioxyde de carbone et la vapeur d'eau", "L'oxygène uniquement", "L'absence de gaz dans l'atmosphère"],
          bonneReponse: 1,
          explication: "Le CO₂ et la vapeur d'eau sont des gaz à effet de serre qui retiennent la chaleur terrestre.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique, en deux étapes, comment les activités humaines provoquent le réchauffement climatique actuel.",
          reponse: "D'abord, la combustion des énergies fossiles et la déforestation rejettent un surplus de gaz à effet de serre dans l'atmosphère. Ensuite, ce surplus renforce l'effet de serre naturel, ce qui retient davantage de chaleur et fait augmenter la température moyenne du globe.",
          explication: "Le mécanisme relie les émissions humaines de gaz à effet de serre au renforcement de l'effet de serre naturel.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Une région observe des étés de plus en plus chauds sur les 40 dernières années. S'agit-il de météo ou de climat ? Justifie.",
          reponse: "Il s'agit d'une évolution du climat, car on observe une tendance sur une longue période (40 ans), et non le temps qu'il fait un jour donné, qui relève de la météo.",
          explication: "Une tendance observée sur plusieurs décennies relève du climat, pas de la météo.",
        },
      ],
    },
    {
      titre: "Examen 2 — Météorologie et climat",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le baromètre mesure :",
          choix: ["La température", "La pression atmosphérique", "Le vent", "Les précipitations"],
          bonneReponse: 1,
          explication: "Le baromètre mesure la pression atmosphérique, en hectopascals.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Sur combien d'années calcule-t-on en général le climat d'une région ?",
          reponse: "Environ 30 ans.",
          explication: "Le climat correspond à des moyennes calculées sur une longue période, au moins 30 ans.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi l'effet de serre naturel est-il indispensable à la vie sur Terre ?",
          reponse: "Parce qu'il retient une partie de la chaleur terrestre ; sans lui, la température moyenne serait d'environ -18 °C, ce qui rendrait la vie telle que nous la connaissons impossible.",
          explication: "L'effet de serre naturel maintient une température moyenne compatible avec la vie.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une région montagneuse a généralement un climat plus froid car :",
          choix: ["Elle est plus proche du Soleil", "La température diminue avec l'altitude", "Elle reçoit moins de gaz à effet de serre", "Elle est toujours proche de la mer"],
          bonneReponse: 1,
          explication: "L'altitude fait partie des facteurs qui déterminent le climat local ; la température y baisse en général.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Propose deux mesures permettant de limiter le réchauffement climatique et explique brièvement leur effet.",
          reponse: "Développer les énergies renouvelables pour réduire la combustion d'énergies fossiles, ce qui diminue les émissions de gaz à effet de serre ; et protéger ou replanter les forêts, qui absorbent du CO₂ et limitent son accumulation dans l'atmosphère.",
          explication: "Réduire les émissions et préserver les puits de carbone sont deux leviers complémentaires pour atténuer le changement climatique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi un hiver particulièrement froid ne prouve pas que le changement climatique n'existe pas.",
          reponse: "Un hiver froid est un événement météorologique ponctuel, qui peut se produire même dans un contexte de réchauffement climatique global, car le climat se définit par des moyennes sur des décennies et non par un épisode isolé.",
          explication: "Il ne faut pas confondre variabilité météorologique locale et tendance climatique de long terme.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La météo décrit le temps qu'il fait à un instant donné ; le climat correspond aux moyennes sur au moins 30 ans.",
    "Les paramètres météorologiques (température, pression, humidité, vent, précipitations) sont mesurés par des instruments précis (thermomètre, baromètre, pluviomètre, anémomètre).",
    "Le climat d'une région dépend surtout de sa latitude, de son altitude et de sa proximité avec la mer.",
    "L'effet de serre naturel, dû à des gaz comme le CO₂, retient une partie de la chaleur terrestre et rend la vie possible.",
    "Les activités humaines (énergies fossiles, déforestation) renforcent l'effet de serre et provoquent le réchauffement climatique actuel.",
    "Erreur à éviter : confondre un épisode météo isolé (un jour froid) avec une évolution du climat sur le long terme.",
  ],
};

export default chapitre;
