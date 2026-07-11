import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "biodiversite-evolution",
  titre: "Biodiversité et évolution",
  matiere: "svt",
  niveau: "4eme",
  description:
    "Comprendre ce qu'est la biodiversité à différentes échelles (écosystèmes, espèces, gènes), savoir qu'elle change au cours du temps grâce aux fossiles et aux crises d'extinction, et identifier l'influence des activités humaines sur la biodiversité actuelle.",
  objectifs: [
    "Définir la biodiversité et distinguer ses trois échelles (écosystèmes, espèces, diversité génétique)",
    "Comprendre que la biodiversité a toujours changé au cours du temps grâce aux fossiles",
    "Connaître l'existence de crises d'extinction passées",
    "Identifier les principales causes de l'érosion actuelle de la biodiversité liées aux activités humaines",
    "Connaître des actions permettant de préserver la biodiversité",
  ],
  slides: [
    {
      titre: "Qu'est-ce que la biodiversité ?",
      illustration: "🌿",
      visuel: "biodiversité = diversité du vivant",
      contenu: [
        "La biodiversité désigne la diversité de tous les êtres vivants",
        "Elle concerne les milieux, les espèces et les individus au sein d'une espèce",
        "Elle est présente partout : forêts, océans, villes, sols",
        "Elle évolue en permanence, depuis toujours",
      ],
      voixOff:
        "La biodiversité, c'est la diversité de tous les êtres vivants sur Terre : les milieux de vie, les espèces qui les peuplent, et les individus au sein d'une même espèce. On la trouve partout, des forêts tropicales aux sols de nos jardins. Contrairement à une idée reçue, elle n'a jamais été figée : elle change en permanence, depuis l'apparition de la vie.",
    },
    {
      titre: "Trois échelles de biodiversité",
      illustration: "🔎",
      visuel: "écosystèmes / espèces / gènes",
      contenu: [
        "Diversité des écosystèmes : forêt, océan, désert, prairie...",
        "Diversité des espèces : le nombre et la variété des espèces présentes",
        "Diversité génétique : les différences entre individus d'une même espèce",
        "Les trois échelles sont liées et toutes nécessaires",
      ],
      voixOff:
        "On étudie la biodiversité à trois échelles. D'abord la diversité des écosystèmes, comme les forêts, les océans ou les déserts. Ensuite la diversité des espèces qui vivent dans ces écosystèmes. Enfin la diversité génétique, c'est-à-dire les différences entre individus d'une même espèce, par exemple la couleur des yeux chez les humains. Ces trois échelles sont liées entre elles.",
    },
    {
      titre: "La biodiversité change au cours du temps",
      illustration: "🦴",
      visuel: "fossiles = témoins du passé",
      contenu: [
        "Les fossiles sont les restes ou traces d'êtres vivants du passé",
        "Ils prouvent que des espèces ont existé puis ont disparu",
        "D'autres espèces sont apparues au fil du temps",
        "La biodiversité actuelle n'est qu'une étape de son histoire",
      ],
      voixOff:
        "Comment sait-on que la biodiversité a changé ? Grâce aux fossiles, ces restes ou empreintes d'êtres vivants conservés dans les roches. Ils montrent que de nombreuses espèces ont existé autrefois puis ont disparu, tandis que d'autres sont apparues plus tard. La biodiversité que nous observons aujourd'hui n'est donc qu'une étape parmi d'autres dans une longue histoire.",
    },
    {
      titre: "Extinctions et crises biologiques",
      illustration: "☄️",
      visuel: "crise = disparition massive d'espèces",
      contenu: [
        "Une crise biologique est une disparition massive d'espèces en peu de temps",
        "Plusieurs grandes crises ont marqué l'histoire de la Terre",
        "Exemple : disparition des dinosaures il y a environ 66 millions d'années",
        "Après chaque crise, de nouvelles espèces se sont diversifiées",
      ],
      voixOff:
        "Certains événements ont provoqué la disparition d'un très grand nombre d'espèces en peu de temps : ce sont des crises biologiques. La plus connue s'est produite il y a environ soixante-six millions d'années, entraînant la disparition des dinosaures, probablement à la suite de la chute d'une météorite géante. Après chaque crise, de nouvelles espèces ont profité des milieux libérés pour se diversifier.",
    },
    {
      titre: "De nouvelles espèces apparaissent",
      illustration: "🐾",
      visuel: "au fil du temps → nouvelles espèces",
      contenu: [
        "Au cours des temps géologiques, de nouvelles espèces sont apparues",
        "L'histoire de la vie montre une alternance de diversifications et de crises",
        "Les espèces actuelles sont le résultat de cette longue histoire",
        "L'être humain n'est apparu que très récemment à cette échelle de temps",
      ],
      voixOff:
        "L'histoire de la vie sur Terre, longue de plusieurs milliards d'années, montre une alternance : des périodes où nombre d'espèces nouvelles apparaissent, et des crises où beaucoup disparaissent. Toutes les espèces actuelles, y compris la nôtre, sont le résultat de cette très longue histoire. À l'échelle des temps géologiques, l'être humain n'est apparu que très récemment.",
    },
    {
      titre: "L'influence humaine sur la biodiversité actuelle",
      illustration: "🏗️",
      visuel: "activités humaines → perte de biodiversité",
      contenu: [
        "La destruction des milieux naturels (déforestation, urbanisation)",
        "La surexploitation de certaines espèces (surpêche, chasse)",
        "La pollution des sols, de l'eau et de l'air",
        "Le changement climatique, qui modifie les milieux de vie",
      ],
      voixOff:
        "Depuis quelques décennies, les activités humaines pèsent fortement sur la biodiversité. La destruction des milieux naturels, comme la déforestation, réduit l'espace disponible pour de nombreuses espèces. La surexploitation, par la surpêche ou la chasse excessive, fait chuter certaines populations. S'y ajoutent la pollution et le changement climatique, qui modifient profondément les milieux de vie.",
    },
    {
      titre: "Espèces menacées et espèces invasives",
      illustration: "⚠️",
      visuel: "espèce menacée ≠ espèce invasive",
      contenu: [
        "Une espèce menacée risque de disparaître à court ou moyen terme",
        "Une espèce invasive, introduite par l'être humain, envahit un nouveau milieu",
        "Elle peut concurrencer et faire disparaître des espèces locales",
        "Les deux phénomènes réduisent la biodiversité locale",
      ],
      voixOff:
        "Deux situations menacent particulièrement la biodiversité. D'un côté, des espèces menacées, dont les populations sont si réduites qu'elles risquent de disparaître. De l'autre, des espèces invasives, introduites volontairement ou accidentellement par l'être humain dans un nouveau milieu, où elles n'ont pas de prédateurs naturels et peuvent envahir l'espace au détriment des espèces locales.",
    },
    {
      titre: "Préserver la biodiversité",
      illustration: "🛡️",
      visuel: "aires protégées, gestes quotidiens",
      contenu: [
        "Créer des espaces protégés (parcs nationaux, réserves)",
        "Limiter la pollution et la surexploitation des ressources",
        "Réintroduire des espèces menacées, restaurer des milieux",
        "Chacun peut agir : limiter ses déchets, respecter les milieux naturels",
      ],
      voixOff:
        "Face à cette érosion de la biodiversité, des solutions existent : créer des espaces protégés comme les parcs nationaux, limiter la pollution et l'exploitation excessive des ressources, ou encore restaurer des milieux dégradés et réintroduire des espèces menacées. Chacun, à son échelle, peut aussi agir au quotidien pour préserver la biodiversité.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Biodiversité = diversité des écosystèmes, des espèces et des gènes",
        "Elle change depuis toujours : fossiles, extinctions, apparitions",
        "Des crises biologiques ont marqué l'histoire de la vie (ex. dinosaures)",
        "Les activités humaines accélèrent aujourd'hui la perte de biodiversité",
      ],
      voixOff:
        "Résumons. La biodiversité désigne la diversité des écosystèmes, des espèces et des gènes. Grâce aux fossiles, on sait qu'elle a toujours changé, entre apparitions d'espèces et crises biologiques comme celle qui a fait disparaître les dinosaures. Aujourd'hui, les activités humaines, par la destruction des milieux, la surexploitation, la pollution et le changement climatique, accélèrent fortement cette perte de biodiversité. La préserver est un enjeu majeur pour l'avenir. Bravo, tu comprends maintenant les grands enjeux de la biodiversité !",
    },
  ],
  fiche: {
    intro:
      "La biodiversité désigne la diversité du vivant à trois échelles : les écosystèmes, les espèces et les gènes au sein d'une même espèce. Grâce aux fossiles, on sait qu'elle a toujours changé au cours du temps, entre apparitions d'espèces et crises biologiques. Aujourd'hui, les activités humaines accélèrent fortement l'érosion de la biodiversité.",
    sections: [
      {
        titre: "Qu'est-ce que la biodiversité ?",
        points: [
          "Diversité des écosystèmes (forêt, océan, désert...)",
          "Diversité des espèces au sein de ces écosystèmes",
          "Diversité génétique entre individus d'une même espèce",
        ],
      },
      {
        titre: "Une biodiversité qui change au cours du temps",
        points: [
          "Les fossiles témoignent d'espèces disparues",
          "Des crises biologiques ont provoqué des extinctions massives (ex. dinosaures, il y a 66 Ma)",
          "De nouvelles espèces sont apparues après chaque crise",
        ],
      },
      {
        titre: "L'influence humaine sur la biodiversité actuelle",
        points: [
          "Destruction des milieux naturels (déforestation, urbanisation)",
          "Surexploitation des espèces (surpêche, chasse)",
          "Pollution et changement climatique",
          "Espèces invasives introduites par l'être humain",
        ],
      },
      {
        titre: "Préserver la biodiversité",
        points: [
          "Créer des espaces protégés (parcs nationaux, réserves)",
          "Limiter la pollution et l'exploitation excessive des ressources",
          "Restaurer des milieux et réintroduire des espèces menacées",
          "Agir au quotidien à son échelle",
        ],
      },
    ],
    audio:
      "Fiche de révision : biodiversité et évolution. La biodiversité désigne la diversité du vivant à trois échelles : celle des écosystèmes, comme les forêts ou les océans ; celle des espèces qui les peuplent ; et celle des gènes, c'est-à-dire les différences entre individus d'une même espèce. Grâce aux fossiles, restes ou traces d'êtres vivants du passé, on sait que la biodiversité a toujours changé : des espèces ont disparu, d'autres sont apparues, et plusieurs grandes crises biologiques ont provoqué des extinctions massives, comme celle qui a fait disparaître les dinosaures il y a environ soixante-six millions d'années. Aujourd'hui, les activités humaines accélèrent fortement l'érosion de la biodiversité, par la destruction des milieux naturels, la surexploitation des espèces, la pollution, le changement climatique et l'introduction d'espèces invasives. Pour préserver la biodiversité, on peut créer des espaces protégés, limiter la pollution et la surexploitation, restaurer des milieux dégradés et agir au quotidien.",
  },
  memoCards: [
    { recto: "Qu'est-ce que la biodiversité ?", verso: "La diversité de tous les êtres vivants : écosystèmes, espèces et gènes." },
    { recto: "Quelles sont les trois échelles de la biodiversité ?", verso: "La diversité des écosystèmes, des espèces, et la diversité génétique au sein d'une espèce." },
    { recto: "Qu'est-ce qu'un fossile ?", verso: "Un reste ou une trace d'un être vivant du passé, conservé dans une roche." },
    { recto: "Qu'est-ce qu'une crise biologique ?", verso: "Une disparition massive d'espèces en peu de temps (ex. disparition des dinosaures il y a 66 Ma)." },
    { recto: "Cite deux causes humaines de la perte de biodiversité actuelle.", verso: "La destruction des milieux naturels et la surexploitation des espèces (ou la pollution, le changement climatique)." },
    { recto: "Qu'est-ce qu'une espèce invasive ?", verso: "Une espèce introduite par l'être humain dans un nouveau milieu, où elle peut concurrencer les espèces locales." },
    { recto: "Qu'est-ce qu'une espèce menacée ?", verso: "Une espèce dont la population est si réduite qu'elle risque de disparaître." },
    { recto: "Cite une action pour préserver la biodiversité.", verso: "Créer des espaces protégés (parc national, réserve naturelle)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La biodiversité désigne :",
      choix: ["Uniquement le nombre d'espèces", "La diversité des écosystèmes, des espèces et des gènes", "Uniquement les animaux", "La météo d'une région"],
      bonneReponse: 1,
      explication: "La biodiversité se définit à trois échelles : écosystèmes, espèces et gènes.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un fossile est :",
      choix: ["Un animal vivant rare", "Un reste ou une trace d'un être vivant du passé", "Un type de roche volcanique", "Un instrument de mesure"],
      bonneReponse: 1,
      explication: "Les fossiles sont les témoins des espèces qui ont existé dans le passé.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les trois échelles auxquelles on étudie la biodiversité.",
      reponse: "Les écosystèmes, les espèces et les gènes (diversité génétique au sein d'une espèce).",
      explication: "Ces trois échelles sont complémentaires pour décrire la biodiversité.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel événement a provoqué la disparition des dinosaures ?",
      choix: ["Une crise biologique il y a environ 66 millions d'années", "La chasse par les êtres humains", "Le réchauffement climatique actuel", "Une maladie récente"],
      bonneReponse: 0,
      explication: "Une crise biologique majeure, probablement liée à la chute d'une météorite, a eu lieu il y a environ 66 millions d'années.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique comment les fossiles permettent de savoir que la biodiversité a changé au cours du temps.",
      reponse: "Les fossiles montrent des espèces qui existaient autrefois mais qui n'existent plus aujourd'hui, ou qui ont évolué. En comparant les fossiles trouvés dans des roches d'âges différents, on observe que des espèces sont apparues puis ont disparu au fil du temps.",
      explication: "L'étude des fossiles dans des couches de roches successives retrace l'histoire de la biodiversité.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de cause humaine de la perte de biodiversité actuelle et explique son effet.",
      reponse: "Par exemple la déforestation : elle détruit l'habitat de nombreuses espèces, qui perdent leur milieu de vie et peuvent alors disparaître localement, voire totalement si l'espèce est déjà rare.",
      explication: "La destruction des milieux naturels est l'une des principales causes de perte de biodiversité liées à l'être humain.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une espèce invasive est une espèce :",
      choix: [
        "Menacée d'extinction",
        "Introduite par l'être humain dans un nouveau milieu, où elle peut envahir l'espace",
        "Disparue depuis longtemps",
        "Toujours protégée par la loi"],
      bonneReponse: 1,
      explication: "L'espèce invasive colonise un nouveau milieu, souvent sans prédateur naturel, au détriment des espèces locales.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi dit-on que la biodiversité actuelle n'est qu'une étape de l'histoire de la vie ?",
      reponse: "Parce que la biodiversité a toujours changé depuis l'apparition de la vie : des espèces sont apparues, d'autres ont disparu, notamment lors de crises biologiques. La biodiversité que l'on observe aujourd'hui résulte de cette longue histoire et continuera d'évoluer.",
      explication: "L'histoire de la vie montre une alternance continue de diversifications et d'extinctions.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la diversité génétique au sein d'une espèce est importante pour sa survie face à un changement de milieu.",
      reponse: "Si les individus d'une espèce sont génétiquement variés, il est plus probable que certains d'entre eux possèdent des caractéristiques leur permettant de survivre à un changement de milieu (maladie, climat...). Une espèce peu diversifiée génétiquement risque de disparaître entièrement si les conditions changent, car aucun individu n'est capable de s'adapter.",
      explication: "La diversité génétique augmente les chances qu'une partie de la population survive à des conditions nouvelles.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Après une crise biologique, on observe généralement :",
      choix: [
        "La fin définitive de toute vie",
        "Une nouvelle diversification d'espèces dans les milieux libérés",
        "Un retour immédiat à la biodiversité d'avant la crise",
        "Aucune conséquence sur la biodiversité"],
      bonneReponse: 1,
      explication: "Après une crise, de nouvelles espèces se diversifient souvent dans les milieux laissés libres par les espèces disparues.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Propose deux actions concrètes, à l'échelle d'un pays, pour limiter la perte de biodiversité liée aux activités humaines.",
      reponse: "Créer et étendre des espaces protégés (parcs nationaux, réserves naturelles) pour préserver des milieux et des espèces ; réglementer la pêche et la chasse pour éviter la surexploitation des espèces.",
      explication: "La protection des milieux et la limitation de la surexploitation sont deux leviers efficaces pour préserver la biodiversité.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi le changement climatique actuel constitue une menace pour la biodiversité.",
      reponse: "Le changement climatique modifie les milieux de vie (température, précipitations, niveau des mers), plus vite que certaines espèces ne peuvent s'y adapter ou migrer. Cela peut réduire leur aire de répartition, fragiliser des populations déjà menacées et, dans certains cas, provoquer leur disparition.",
      explication: "La rapidité du changement climatique actuel rend l'adaptation difficile pour de nombreuses espèces.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La diversité génétique concerne :",
      choix: ["Les différences entre écosystèmes", "Les différences entre individus d'une même espèce", "Le nombre d'espèces sur Terre", "Le climat d'une région"],
      bonneReponse: 1,
      explication: "La diversité génétique désigne les variations entre individus au sein d'une même espèce.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qui prouve que des espèces ont disparu dans le passé ?",
      reponse: "Les fossiles, restes ou traces d'êtres vivants du passé.",
      explication: "Les fossiles témoignent d'espèces qui n'existent plus aujourd'hui.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de crise biologique passée.",
      reponse: "La crise qui a provoqué la disparition des dinosaures, il y a environ 66 millions d'années.",
      explication: "Il s'agit d'une des grandes crises d'extinction qui ont marqué l'histoire de la vie.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Laquelle de ces causes n'est PAS une cause humaine de perte de biodiversité ?",
      choix: ["La déforestation", "La surpêche", "Une crise biologique survenue il y a 66 millions d'années", "La pollution"],
      bonneReponse: 2,
      explication: "La disparition des dinosaures est une crise naturelle ancienne, sans lien avec l'être humain.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite une action permettant de préserver la biodiversité.",
      reponse: "Par exemple créer un espace protégé, limiter la pollution, ou restaurer un milieu dégradé.",
      explication: "Plusieurs types d'actions, individuelles et collectives, permettent de limiter l'érosion de la biodiversité.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Biodiversité et évolution",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La biodiversité des écosystèmes désigne :",
          choix: ["La diversité des milieux de vie (forêt, océan...)", "La diversité génétique uniquement", "Le nombre d'humains sur Terre", "La météo mondiale"],
          bonneReponse: 0,
          explication: "La diversité des écosystèmes est l'une des trois échelles de la biodiversité.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une espèce menacée ?",
          reponse: "Une espèce dont la population est très réduite et qui risque de disparaître.",
          explication: "Le statut d'espèce menacée signale un risque élevé d'extinction.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique en quoi les fossiles sont des preuves de l'évolution de la biodiversité au cours du temps.",
          reponse: "Les fossiles montrent des espèces qui ont existé à certaines époques puis ont disparu ; en comparant des roches d'âges différents, on constate que la composition de la biodiversité a changé au fil du temps, avec des apparitions et des disparitions d'espèces.",
          explication: "L'étude comparée de fossiles d'âges différents retrace l'histoire de la biodiversité.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une crise biologique se caractérise par :",
          choix: [
            "L'apparition lente d'une nouvelle espèce",
            "La disparition massive d'espèces en peu de temps",
            "Une amélioration du climat",
            "Une stabilité totale de la biodiversité"],
          bonneReponse: 1,
          explication: "Une crise biologique correspond à une extinction massive d'espèces sur une durée relativement courte.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi l'introduction d'une espèce invasive peut réduire la biodiversité d'un milieu.",
          reponse: "Une espèce invasive, introduite par l'être humain, n'a souvent pas de prédateur naturel dans son nouveau milieu. Elle peut alors se développer rapidement, entrer en concurrence avec les espèces locales pour la nourriture ou l'espace, et parfois provoquer leur disparition, ce qui réduit la biodiversité locale.",
          explication: "L'absence de régulation naturelle permet à l'espèce invasive de déséquilibrer l'écosystème.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Propose et justifie deux actions permettant de limiter l'impact des activités humaines sur la biodiversité.",
          reponse: "Créer des espaces protégés pour préserver des milieux naturels et les espèces qui y vivent ; réduire la pollution et la surexploitation des ressources (pêche, chasse) pour laisser aux populations d'espèces le temps de se renouveler.",
          explication: "Protection des milieux et limitation de la pression humaine sont deux leviers complémentaires.",
        },
      ],
    },
    {
      titre: "Examen 2 — Biodiversité et évolution",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un exemple de crise biologique passée est :",
          choix: ["La disparition des dinosaures", "L'apparition de l'agriculture", "La révolution industrielle", "La conquête spatiale"],
          bonneReponse: 0,
          explication: "La disparition des dinosaures, il y a environ 66 millions d'années, est un exemple de crise biologique majeure.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite une cause de la destruction des milieux naturels par l'être humain.",
          reponse: "La déforestation (ou l'urbanisation).",
          explication: "Ces activités réduisent l'espace disponible pour de nombreuses espèces.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre une espèce menacée et une espèce invasive.",
          reponse: "Une espèce menacée risque de disparaître car sa population est très réduite, alors qu'une espèce invasive, introduite par l'être humain dans un nouveau milieu, se développe au contraire de façon excessive et menace les espèces locales.",
          explication: "Les deux situations réduisent la biodiversité mais pour des raisons opposées : l'une par raréfaction, l'autre par prolifération.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La diversité génétique au sein d'une espèce est utile car elle :",
          choix: [
            "Ne sert à rien",
            "Augmente les chances qu'une partie de la population survive à un changement de milieu",
            "Empêche toute évolution",
            "Concerne uniquement les plantes"],
          bonneReponse: 1,
          explication: "Une population génétiquement diversifiée a plus de chances de contenir des individus adaptés à de nouvelles conditions.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "En t'appuyant sur l'exemple des dinosaures, explique le lien entre crise biologique et apparition de nouvelles espèces.",
          reponse: "La crise qui a fait disparaître les dinosaures a libéré de nombreux milieux ; d'autres groupes d'animaux, notamment les mammifères, ont alors pu se diversifier et occuper ces milieux, donnant naissance à nombreuses nouvelles espèces au fil du temps.",
          explication: "Les crises biologiques, en éliminant certaines espèces, favorisent souvent la diversification d'autres groupes.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi on considère que la biodiversité actuelle est aujourd'hui menacée à un rythme inhabituel.",
          reponse: "Parce que la perte de biodiversité actuelle, liée aux activités humaines (destruction des milieux, surexploitation, pollution, changement climatique, espèces invasives), se produit beaucoup plus rapidement que les variations naturelles observées dans l'histoire de la vie, ne laissant pas le temps à de nombreuses espèces de s'adapter.",
          explication: "La rapidité et l'ampleur des causes humaines distinguent la crise actuelle des variations naturelles passées.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La biodiversité se définit à trois échelles : les écosystèmes, les espèces, et les gènes au sein d'une espèce.",
    "Les fossiles montrent que la biodiversité a toujours changé au cours du temps : espèces apparues, espèces disparues.",
    "Des crises biologiques ont provoqué des extinctions massives (ex. disparition des dinosaures il y a environ 66 millions d'années).",
    "Les activités humaines (destruction des milieux, surexploitation, pollution, changement climatique, espèces invasives) accélèrent aujourd'hui la perte de biodiversité.",
    "Préserver la biodiversité passe par des espaces protégés, la limitation de la pollution et de la surexploitation, et des gestes individuels.",
    "Erreur à éviter : penser que la biodiversité a toujours été la même — elle a en réalité toujours évolué au cours des temps géologiques.",
  ],
};

export default chapitre;
