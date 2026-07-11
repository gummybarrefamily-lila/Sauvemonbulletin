import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "amenagement-territoire",
  titre: "Aménager le territoire français",
  matiere: "histoire-geo",
  niveau: "3eme",
  description:
    "Comprendre pourquoi et comment les acteurs publics aménagent le territoire français pour réduire les inégalités entre métropoles dynamiques, espaces ruraux, périurbains et quartiers prioritaires, en intégrant les enjeux du développement durable.",
  objectifs: [
    "Définir l'aménagement du territoire et identifier ses acteurs (État, régions, communes, Union européenne)",
    "Décrire la métropolisation et les inégalités territoriales en France",
    "Expliquer les politiques de désenclavement (transports) et la politique de la ville",
    "Analyser un exemple d'aménagement métropolitain : le Grand Paris",
    "Comprendre les enjeux du développement durable dans l'aménagement des territoires",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'aménager le territoire ?",
      illustration: "🗺️",
      visuel: "Aménagement du territoire",
      contenu: [
        "Aménager le territoire : organiser un espace pour le rendre plus attractif et réduire les inégalités",
        "Objectifs : développer l'activité économique, améliorer les transports, les services publics, l'habitat",
        "Enjeu principal en France : réduire les écarts entre territoires dynamiques et territoires en difficulté",
        "L'aménagement concerne aussi bien les métropoles que les espaces ruraux ou les quartiers en difficulté",
      ],
      voixOff:
        "Aménager le territoire, c'est organiser l'espace pour le rendre plus attractif, plus équilibré et plus agréable à vivre. Cela passe par le développement économique, l'amélioration des transports, des services publics ou du logement. En France, l'enjeu principal de l'aménagement est de réduire les inégalités entre des territoires très dynamiques, comme les grandes métropoles, et des territoires plus fragiles, comme certains espaces ruraux ou certains quartiers urbains en difficulté.",
    },
    {
      titre: "Les acteurs de l'aménagement",
      illustration: "🏛️",
      visuel: "État, collectivités, Union européenne",
      contenu: [
        "L'État : grandes infrastructures nationales, péréquation financière entre territoires",
        "Les collectivités territoriales : régions, départements, communes et intercommunalités",
        "L'Union européenne : fonds européens (FEDER) pour financer des projets d'aménagement",
        "Ces acteurs coopèrent, mais leurs priorités peuvent parfois diverger",
      ],
      voixOff:
        "L'aménagement du territoire mobilise plusieurs acteurs. L'État finance les grandes infrastructures nationales et redistribue des ressources entre territoires riches et pauvres. Les collectivités territoriales, régions, départements, communes et intercommunalités, décident et financent aussi de nombreux projets locaux. L'Union européenne participe également, à travers des fonds comme le FEDER, qui soutiennent le développement des régions les moins favorisées. Ces acteurs coopèrent, mais peuvent aussi avoir des priorités différentes.",
    },
    {
      titre: "Des métropoles qui concentrent les richesses",
      illustration: "🏙️",
      visuel: "Métropolisation",
      contenu: [
        "La métropolisation : concentration croissante des activités, des emplois et des populations dans les grandes villes",
        "Paris, mais aussi Lyon, Marseille, Toulouse, Lille... concentrent emplois qualifiés, sièges d'entreprises, universités",
        "Ces métropoles sont connectées au monde par les aéroports, les gares TGV, le numérique",
        "Cette concentration crée des inégalités avec le reste du territoire",
      ],
      voixOff:
        "La France connaît un phénomène de métropolisation : les grandes villes, appelées métropoles, concentrent de plus en plus les activités économiques, les emplois qualifiés, les universités et les populations. Paris, mais aussi Lyon, Marseille, Toulouse ou Lille, sont particulièrement dynamiques et bien connectées au reste du monde, grâce aux aéroports, aux gares TGV et aux réseaux numériques. Cette concentration des richesses dans les métropoles crée cependant des inégalités avec le reste du territoire.",
    },
    {
      titre: "Des territoires en difficulté",
      illustration: "🚜",
      visuel: "Espaces ruraux et périurbains",
      contenu: [
        "Certains espaces ruraux, éloignés des métropoles, perdent des habitants et des services (écoles, commerces, médecins)",
        "On parle parfois de « diagonale des faibles densités », du Nord-Est au Sud-Ouest du pays",
        "Les espaces périurbains éloignés dépendent souvent de la voiture, faute de transports en commun suffisants",
        "Ces territoires réclament davantage d'aménagement pour rester attractifs",
      ],
      voixOff:
        "À l'inverse des métropoles, certains espaces ruraux, souvent éloignés des grandes villes, perdent des habitants et voient fermer des écoles, des commerces ou des cabinets médicaux : on parle parfois de déserts médicaux. Une large diagonale de faibles densités traverse la France du Nord-Est au Sud-Ouest. Dans les espaces périurbains les plus éloignés, les habitants dépendent souvent fortement de la voiture individuelle, faute de transports en commun suffisants. Ces territoires réclament des politiques d'aménagement pour rester attractifs.",
    },
    {
      titre: "La politique de la ville",
      illustration: "🏘️",
      visuel: "Quartiers prioritaires",
      contenu: [
        "Dans certaines métropoles, des quartiers connaissent des difficultés : chômage élevé, logements dégradés, pauvreté",
        "Ce sont les quartiers prioritaires de la politique de la ville (QPV)",
        "L'État et les collectivités y mènent des programmes de rénovation urbaine (logements, équipements publics, transports)",
        "Objectif : réduire les inégalités à l'intérieur même des métropoles",
      ],
      voixOff:
        "Même à l'intérieur des métropoles dynamiques, certains quartiers connaissent d'importantes difficultés : chômage élevé, logements dégradés, pauvreté. Ce sont les quartiers prioritaires de la politique de la ville. L'État et les collectivités y mènent des programmes de rénovation urbaine, qui réhabilitent les logements, construisent des équipements publics et améliorent les transports, afin de réduire les inégalités à l'intérieur même des villes.",
    },
    {
      titre: "Désenclaver les territoires : les transports",
      illustration: "🚄",
      visuel: "LGV, autoroutes, aéroports",
      contenu: [
        "Le réseau de lignes à grande vitesse (LGV) rapproche les métropoles françaises et européennes",
        "Les autoroutes et routes nationales relient les territoires aux grands axes économiques",
        "Certains territoires ruraux ou montagnards restent mal reliés : c'est l'enclavement",
        "Désenclaver un territoire, c'est améliorer ses connexions pour le rendre plus attractif",
      ],
      voixOff:
        "Les transports sont un outil essentiel de l'aménagement du territoire. Le réseau des lignes à grande vitesse rapproche les métropoles françaises et européennes entre elles. Les autoroutes et les routes nationales relient les territoires aux grands axes économiques. Mais certains territoires, ruraux ou montagnards, restent mal connectés : on parle d'enclavement. Désenclaver un territoire, c'est donc améliorer ses infrastructures de transport pour le rendre plus accessible et plus attractif.",
    },
    {
      titre: "Le Grand Paris, un exemple d'aménagement métropolitain",
      illustration: "🚇",
      visuel: "Grand Paris Express",
      contenu: [
        "Le Grand Paris est un vaste projet d'aménagement de la métropole parisienne",
        "Il comprend le Grand Paris Express, un nouveau réseau de métro automatique reliant les banlieues entre elles",
        "Objectifs : mieux relier les quartiers, créer des emplois, réduire les inégalités entre Paris et sa banlieue",
        "C'est l'un des plus grands chantiers d'aménagement urbain d'Europe",
      ],
      voixOff:
        "Le Grand Paris est un exemple concret de grand projet d'aménagement. Il comprend notamment le Grand Paris Express, un nouveau réseau de métro automatique qui relie directement les banlieues entre elles, sans passer par le centre de Paris. Ce projet vise à mieux connecter les quartiers, à créer des emplois et à réduire les inégalités entre la capitale et sa proche banlieue. C'est aujourd'hui l'un des plus grands chantiers d'aménagement urbain en Europe.",
    },
    {
      titre: "Aménager pour un développement durable",
      illustration: "🌱",
      visuel: "Transition écologique",
      contenu: [
        "L'aménagement doit désormais intégrer les enjeux environnementaux",
        "Objectif « zéro artificialisation nette » (ZAN) : limiter l'étalement urbain et préserver les sols",
        "Développement des transports en commun et des mobilités douces (vélo, covoiturage)",
        "Aménager durablement, c'est concilier développement économique, équité sociale et protection de l'environnement",
      ],
      voixOff:
        "L'aménagement du territoire doit aujourd'hui intégrer les enjeux du développement durable. L'objectif de « zéro artificialisation nette » vise à limiter l'étalement urbain et à préserver les sols agricoles et naturels. Les politiques d'aménagement encouragent aussi le développement des transports en commun et des mobilités douces, comme le vélo. Aménager durablement, c'est chercher à concilier développement économique, équité entre les territoires et protection de l'environnement.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "L'aménagement du territoire vise à réduire les inégalités entre territoires (État, collectivités, UE)",
        "Métropolisation : concentration des richesses dans les grandes villes",
        "Territoires en difficulté : espaces ruraux isolés, quartiers prioritaires de la politique de la ville",
        "Outils d'aménagement : transports (LGV, Grand Paris Express), politique de la ville, développement durable",
      ],
      voixOff:
        "Résumons. L'aménagement du territoire, mené par l'État, les collectivités territoriales et l'Union européenne, vise à organiser l'espace et à réduire les inégalités entre territoires. La métropolisation concentre les richesses dans les grandes villes, au risque de fragiliser certains espaces ruraux et certains quartiers urbains, comme les quartiers prioritaires de la politique de la ville. Pour y remédier, les pouvoirs publics développent les transports, comme le Grand Paris Express, et intègrent désormais les enjeux du développement durable dans leurs politiques d'aménagement. Bravo, tu es prêt pour le brevet sur ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "L'aménagement du territoire vise à organiser l'espace français et à réduire les inégalités entre des métropoles très dynamiques et des territoires ruraux ou urbains plus fragiles, tout en intégrant les enjeux du développement durable.",
    sections: [
      {
        titre: "Aménager le territoire : définitions et acteurs",
        points: [
          "Aménager le territoire : organiser l'espace pour le rendre plus attractif et réduire les inégalités",
          "Acteurs : l'État (grandes infrastructures), les collectivités territoriales (régions, départements, communes), l'Union européenne (fonds européens comme le FEDER)",
        ],
      },
      {
        titre: "Des inégalités entre territoires",
        points: [
          "Métropolisation : concentration des emplois, des populations et des richesses dans les grandes villes (Paris, Lyon, Marseille, Toulouse, Lille)",
          "Espaces ruraux isolés (« diagonale des faibles densités ») : déclin démographique, éloignement des services",
          "Quartiers prioritaires de la politique de la ville (QPV) : chômage, pauvreté, logements dégradés au sein même des métropoles",
        ],
      },
      {
        titre: "Les outils de l'aménagement",
        points: [
          "Désenclaver par les transports : lignes à grande vitesse (LGV), autoroutes, aéroports",
          "Rénover les quartiers en difficulté grâce à la politique de la ville",
          "Exemple : le Grand Paris et le Grand Paris Express, grand projet de désenclavement métropolitain",
        ],
      },
      {
        titre: "Aménager durablement",
        points: [
          "Objectif « zéro artificialisation nette » (ZAN) : limiter l'étalement urbain",
          "Développement des transports en commun et des mobilités douces",
          "Concilier développement économique, équité territoriale et protection de l'environnement",
        ],
      },
    ],
    audio:
      "Fiche de révision : aménager le territoire français. Aménager le territoire, c'est organiser l'espace pour le rendre plus attractif et réduire les inégalités entre territoires. Cette tâche est menée par l'État, qui finance les grandes infrastructures, par les collectivités territoriales, régions, départements et communes, et par l'Union européenne, à travers des fonds comme le FEDER. La France connaît un fort mouvement de métropolisation : les grandes villes, comme Paris, Lyon, Marseille, Toulouse ou Lille, concentrent de plus en plus les emplois et les richesses, au détriment de certains espaces ruraux isolés, qui perdent des habitants et des services, et de certains quartiers urbains en difficulté, appelés quartiers prioritaires de la politique de la ville. Pour réduire ces inégalités, les pouvoirs publics développent les transports, comme les lignes à grande vitesse ou le Grand Paris Express, rénovent les quartiers en difficulté, et intègrent de plus en plus les enjeux du développement durable, avec par exemple l'objectif de zéro artificialisation nette, qui vise à limiter l'étalement urbain.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'aménager le territoire ?", verso: "Organiser l'espace pour le rendre plus attractif et réduire les inégalités entre territoires." },
    { recto: "Quels sont les principaux acteurs de l'aménagement en France ?", verso: "L'État, les collectivités territoriales (régions, départements, communes) et l'Union européenne (fonds FEDER)." },
    { recto: "Qu'est-ce que la métropolisation ?", verso: "La concentration croissante des activités, des emplois et des populations dans les grandes métropoles (Paris, Lyon, Marseille, Toulouse, Lille)." },
    { recto: "Qu'est-ce que la « diagonale des faibles densités » ?", verso: "Une large bande de territoires ruraux, du Nord-Est au Sud-Ouest de la France, peu peuplée et souvent éloignée des grandes métropoles." },
    { recto: "Qu'est-ce qu'un quartier prioritaire de la politique de la ville (QPV) ?", verso: "Un quartier urbain marqué par le chômage, la pauvreté et des logements dégradés, qui bénéficie de programmes de rénovation urbaine." },
    { recto: "Qu'est-ce que le Grand Paris Express ?", verso: "Un nouveau réseau de métro automatique reliant les banlieues parisiennes entre elles, grand projet d'aménagement de la métropole parisienne." },
    { recto: "Qu'est-ce que désenclaver un territoire ?", verso: "Améliorer ses connexions (routes, LGV, aéroports) pour le rendre plus accessible et plus attractif." },
    { recto: "Qu'est-ce que l'objectif « zéro artificialisation nette » (ZAN) ?", verso: "Un objectif national qui vise à limiter l'étalement urbain et à préserver les sols agricoles et naturels." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie « aménager le territoire » ?",
      choix: [
        "Construire uniquement des routes",
        "Organiser l'espace pour le rendre plus attractif et réduire les inégalités",
        "Diviser la France en régions",
        "Créer de nouvelles frontières",
      ],
      bonneReponse: 1,
      explication: "L'aménagement du territoire vise à organiser l'espace de façon plus équilibrée et attractive.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel acteur finance les grandes infrastructures nationales ?",
      choix: ["Uniquement les communes", "L'État", "Uniquement l'Union européenne", "Les entreprises privées seules"],
      bonneReponse: 1,
      explication: "L'État est un acteur central de l'aménagement, aux côtés des collectivités territoriales et de l'Union européenne.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois exemples de métropoles françaises.",
      reponse: "Par exemple : Paris, Lyon, Marseille, Toulouse ou Lille.",
      explication: "Ces métropoles concentrent une part importante des emplois et des richesses du pays.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce qu'un quartier prioritaire de la politique de la ville ?",
      choix: [
        "Un quartier touristique",
        "Un quartier urbain en difficulté qui bénéficie de programmes de rénovation",
        "Un quartier d'affaires",
        "Un quartier rural",
      ],
      bonneReponse: 1,
      explication: "Ces quartiers cumulent souvent chômage, pauvreté et logements dégradés.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que la métropolisation ?",
      choix: [
        "Le déclin des grandes villes",
        "La concentration croissante des activités et des populations dans les métropoles",
        "La construction de nouvelles routes",
        "La création de nouvelles régions",
      ],
      bonneReponse: 1,
      explication: "La métropolisation renforce le poids économique et démographique des grandes villes par rapport au reste du territoire.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est la « diagonale des faibles densités » en France.",
      reponse:
        "C'est une large bande de territoires ruraux qui traverse la France du Nord-Est au Sud-Ouest, où la population est peu nombreuse, souvent vieillissante, et où les services publics et privés (écoles, commerces, médecins) sont parfois difficiles à maintenir.",
      explication: "Ces espaces sont l'une des cibles prioritaires des politiques d'aménagement du territoire.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne deux outils utilisés pour désenclaver un territoire.",
      reponse: "Par exemple : la construction de lignes à grande vitesse (LGV), l'amélioration du réseau routier ou autoroutier, ou le développement d'un aéroport régional.",
      explication: "Désenclaver un territoire améliore son accessibilité et donc son attractivité économique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que le Grand Paris Express ?",
      choix: [
        "Une nouvelle ligne à grande vitesse entre Paris et Lyon",
        "Un réseau de métro automatique reliant les banlieues parisiennes entre elles",
        "Un aéroport international",
        "Un fonds européen d'aménagement",
      ],
      bonneReponse: 1,
      explication: "Le Grand Paris Express est l'un des plus grands projets d'aménagement urbain en cours en Europe.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique comment la métropolisation peut créer des inégalités territoriales en France.",
      reponse:
        "La métropolisation concentre les emplois qualifiés, les investissements, les universités et les infrastructures de transport dans un petit nombre de grandes villes. Les territoires éloignés des métropoles, notamment certains espaces ruraux, en profitent moins : ils perdent des habitants, des services publics ferment et l'activité économique y est plus faible. Cette concentration accroît donc les écarts de développement entre les territoires.",
      explication: "C'est précisément pour corriger ces inégalités que les politiques d'aménagement du territoire sont mises en œuvre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre, à l'aide de l'exemple du Grand Paris, comment un aménagement peut réduire les inégalités à l'intérieur d'une métropole.",
      reponse:
        "Le projet du Grand Paris, et notamment le Grand Paris Express, vise à relier directement les banlieues parisiennes entre elles, sans passer systématiquement par le centre de Paris. Cela facilite l'accès à l'emploi et aux services pour les habitants de banlieue, attire de nouveaux investissements près des nouvelles gares, et réduit ainsi les écarts de développement entre Paris et sa périphérie, notamment les quartiers prioritaires de la politique de la ville.",
      explication: "Le Grand Paris illustre comment un aménagement de transport peut avoir des effets sociaux et économiques plus larges.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Que vise l'objectif de « zéro artificialisation nette » (ZAN) ?",
      choix: [
        "Construire davantage de zones commerciales",
        "Limiter l'étalement urbain et préserver les sols agricoles et naturels",
        "Supprimer tous les espaces ruraux",
        "Augmenter le nombre d'autoroutes",
      ],
      bonneReponse: 1,
      explication: "Le ZAN est un objectif national qui intègre les enjeux environnementaux dans l'aménagement du territoire.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Méthode brevet : tu analyses une carte montrant les inégalités de densité de population en France. Quelles étapes suis-tu ?",
      reponse:
        "1) Présenter le document : nature (carte), thème (densité de population), source, date. 2) Décrire ce que l'on observe : fortes densités autour des métropoles, faibles densités dans certains espaces ruraux (diagonale des faibles densités). 3) Expliquer avec ses connaissances : métropolisation, attractivité économique des grandes villes, difficultés des espaces ruraux isolés. 4) Porter un regard critique : une carte simplifie la réalité, elle ne montre qu'un indicateur (la densité) parmi d'autres (emplois, revenus, accès aux services).",
      explication: "Au brevet, on attend : présenter, décrire précisément la carte, expliquer avec le cours, puis nuancer.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est l'objectif principal de l'aménagement du territoire ?",
      choix: ["Créer de nouvelles régions", "Réduire les inégalités entre territoires", "Supprimer les métropoles", "Fermer les espaces ruraux"],
      bonneReponse: 1,
      explication: "L'aménagement du territoire cherche à organiser l'espace de façon plus équilibrée.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois acteurs de l'aménagement du territoire en France.",
      reponse: "L'État, les collectivités territoriales (régions, départements, communes) et l'Union européenne.",
      explication: "Ces acteurs coopèrent, parfois avec des priorités différentes.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que la métropolisation ?",
      reponse: "La concentration croissante des activités économiques, des emplois et des populations dans les grandes métropoles.",
      explication: "Ce phénomène accroît les inégalités avec les territoires ruraux et périurbains.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un quartier prioritaire de la politique de la ville ?",
      choix: ["Un quartier d'affaires", "Un quartier en difficulté bénéficiant de programmes de rénovation urbaine", "Un quartier touristique", "Un espace rural"],
      bonneReponse: 1,
      explication: "Ces quartiers, souvent situés dans les métropoles, cumulent chômage, pauvreté et logements dégradés.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de grand projet d'aménagement en France et explique son objectif.",
      reponse: "Le Grand Paris Express : un réseau de métro automatique qui relie les banlieues parisiennes entre elles, pour réduire les inégalités et faciliter l'accès à l'emploi.",
      explication: "C'est l'un des plus grands chantiers d'aménagement urbain en Europe.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Aménager le territoire français",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qu'est-ce que l'aménagement du territoire ?",
          choix: [
            "La création de nouvelles frontières",
            "L'organisation de l'espace pour le rendre plus attractif et réduire les inégalités",
            "La suppression des espaces ruraux",
            "Le déplacement de la capitale",
          ],
          bonneReponse: 1,
          explication: "L'aménagement du territoire vise à répondre aux besoins des territoires et à réduire les inégalités entre eux.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quels sont les trois grands acteurs de l'aménagement du territoire en France ?",
          reponse: "L'État, les collectivités territoriales (régions, départements, communes) et l'Union européenne.",
          explication: "Chacun de ces acteurs finance et décide de projets d'aménagement à différentes échelles.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel phénomène désigne la concentration des activités et des populations dans les grandes villes ?",
          choix: ["La désindustrialisation", "La métropolisation", "L'exode rural du XIXe siècle", "La décolonisation"],
          bonneReponse: 1,
          explication: "La métropolisation renforce le poids des grandes villes comme Paris, Lyon ou Marseille au détriment d'autres territoires.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris deux difficultés rencontrées par certains espaces ruraux isolés en France.",
          reponse: "Par exemple : la fermeture d'écoles et de commerces, l'éloignement des services de santé (déserts médicaux), le vieillissement et la baisse de la population.",
          explication: "Ces difficultés justifient des politiques spécifiques d'aménagement pour ces territoires.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que la politique de la ville et quel est son objectif ?",
          reponse: "C'est l'ensemble des actions menées par l'État et les collectivités dans les quartiers prioritaires en difficulté : rénovation des logements, création d'équipements publics, amélioration des transports, pour réduire les inégalités à l'intérieur des métropoles.",
          explication: "Elle cible les quartiers cumulant chômage, pauvreté et logements dégradés.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre comment l'aménagement du territoire cherche à réduire les inégalités entre les territoires français (une vingtaine de lignes).",
          reponse:
            "Introduction : la France connaît d'importantes inégalités entre des métropoles dynamiques et des territoires plus fragiles, que l'aménagement du territoire cherche à réduire. Première partie : des inégalités réelles ; la métropolisation concentre emplois et richesses dans les grandes villes, tandis que certains espaces ruraux, notamment dans la diagonale des faibles densités, perdent des habitants et des services, et que certains quartiers urbains, les quartiers prioritaires de la politique de la ville, cumulent chômage et pauvreté. Deuxième partie : des acteurs mobilisés ; l'État, les collectivités territoriales et l'Union européenne financent des projets pour désenclaver les territoires, par exemple grâce aux lignes à grande vitesse, et pour rénover les quartiers en difficulté. Troisième partie : des projets concrets ; le Grand Paris Express relie les banlieues parisiennes entre elles pour réduire les inégalités au sein de la métropole. Conclusion : l'aménagement du territoire reste un défi permanent pour construire une France plus équilibrée.",
          explication: "Le développement doit mobiliser les notions : métropolisation, diagonale des faibles densités, quartiers prioritaires, acteurs de l'aménagement.",
        },
      ],
    },
    {
      titre: "Examen 2 — Aménager le territoire français",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel fonds européen finance des projets d'aménagement dans les régions les moins favorisées ?",
          choix: ["Le plan Marshall", "Le FEDER", "La Sécurité sociale", "L'OTAN"],
          bonneReponse: 1,
          explication: "Le FEDER (Fonds européen de développement régional) est l'un des outils financiers de l'Union européenne pour l'aménagement.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que désenclaver un territoire ?",
          reponse: "Améliorer ses connexions, notamment par les transports (routes, LGV, aéroports), pour le rendre plus accessible et plus attractif.",
          explication: "L'enclavement est souvent un obstacle au développement de certains territoires ruraux ou montagnards.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel projet vise à relier les banlieues parisiennes entre elles par un nouveau métro automatique ?",
          choix: ["Le TGV Atlantique", "Le Grand Paris Express", "Le plan Marshall", "Le FEDER"],
          bonneReponse: 1,
          explication: "Le Grand Paris Express est un grand projet d'aménagement de la métropole parisienne.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que l'objectif « zéro artificialisation nette » (ZAN) et pourquoi est-il mis en place ?",
          reponse: "C'est un objectif national qui vise à limiter l'étalement urbain et à préserver les sols agricoles et naturels, pour intégrer les enjeux environnementaux dans les politiques d'aménagement.",
          explication: "Il illustre l'évolution récente de l'aménagement du territoire vers davantage de développement durable.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence de situation entre une métropole comme Lyon et un espace rural isolé de la diagonale des faibles densités.",
          reponse: "Lyon concentre des emplois qualifiés, des universités et de bonnes connexions de transport (aéroport, gare TGV), ce qui attire des habitants et des entreprises. À l'inverse, un espace rural isolé perd souvent des habitants, voit fermer des écoles et des commerces, et reste moins bien connecté aux grands axes de transport.",
          explication: "Cet écart illustre les effets de la métropolisation sur le territoire français.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique comment les transports participent à l'aménagement du territoire français, en donnant des exemples précis (une vingtaine de lignes).",
          reponse:
            "Introduction : les transports sont l'un des principaux outils de l'aménagement du territoire en France. Première partie : relier les métropoles entre elles ; le réseau de lignes à grande vitesse rapproche les grandes villes françaises et européennes, renforçant leur attractivité et leur connexion aux réseaux mondiaux. Deuxième partie : désenclaver les territoires isolés ; l'amélioration des routes et le développement de certains aéroports régionaux visent à réduire l'isolement de territoires ruraux ou montagnards restés à l'écart des grands axes. Troisième partie : réduire les inégalités au sein des métropoles ; le Grand Paris Express relie directement les banlieues parisiennes entre elles, sans passer par le centre, ce qui facilite l'accès à l'emploi pour les habitants de banlieue, notamment dans les quartiers prioritaires de la politique de la ville. Conclusion : en connectant les territoires entre eux, les politiques de transport contribuent directement à réduire les inégalités territoriales.",
          explication: "Le développement doit mobiliser des exemples précis : LGV, désenclavement, Grand Paris Express.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Aménager le territoire, c'est organiser l'espace pour le rendre plus attractif et réduire les inégalités entre territoires.",
    "Acteurs de l'aménagement : l'État, les collectivités territoriales (régions, départements, communes) et l'Union européenne (FEDER).",
    "Métropolisation : concentration des emplois, des populations et des richesses dans les grandes villes (Paris, Lyon, Marseille, Toulouse, Lille).",
    "Territoires en difficulté : espaces ruraux isolés (« diagonale des faibles densités »), quartiers prioritaires de la politique de la ville.",
    "Outils d'aménagement : transports (LGV, désenclavement), politique de la ville, exemple du Grand Paris Express.",
    "Aménagement durable : objectif « zéro artificialisation nette » (ZAN), développement des transports en commun et des mobilités douces.",
  ],
};

export default chapitre;
