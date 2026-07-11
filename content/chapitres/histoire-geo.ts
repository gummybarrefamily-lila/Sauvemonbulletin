import type { Chapitre } from "../types";

const chapitres: Chapitre[] = [
{
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
},
{
  slug: "france-defaite-republique",
  titre: "La France de 1940 à nos jours",
  matiere: "histoire-geo",
  niveau: "3eme",
  description:
    "Comprendre la défaite de 1940, le régime de Vichy et la collaboration, l'engagement de la France libre et de la Résistance, la refondation républicaine à la Libération, puis la naissance et l'évolution de la Ve République jusqu'à nos jours.",
  objectifs: [
    "Expliquer la défaite de 1940 et caractériser le régime de Vichy (collaboration, répression, antisémitisme d'État)",
    "Présenter la France libre et la Résistance intérieure (appel du 18 juin 1940, Jean Moulin, CNR)",
    "Comprendre la refondation démocratique et sociale à la Libération (vote des femmes, Sécurité sociale)",
    "Expliquer la naissance de la Ve République en 1958 et le rôle du président de la République",
    "Situer les grandes évolutions politiques de la France jusqu'à nos jours",
  ],
  slides: [
    {
      titre: "Juin 1940 : la défaite de la France",
      illustration: "🇫🇷",
      visuel: "22 juin 1940 : armistice",
      contenu: [
        "Mai-juin 1940 : l'armée allemande envahit la France, c'est la débâcle",
        "16 juin 1940 : le maréchal Pétain devient chef du gouvernement",
        "22 juin 1940 : la France signe l'armistice avec l'Allemagne",
        "La France est coupée en deux : zone occupée au nord, zone « libre » au sud",
      ],
      voixOff:
        "En mai et juin 1940, l'armée allemande envahit la France en quelques semaines : c'est la débâcle. Le 16 juin 1940, le maréchal Pétain, héros de Verdun, devient chef du gouvernement. Le 22 juin, il signe l'armistice avec l'Allemagne. La France est alors coupée en deux : une zone occupée au nord et à l'ouest, et une zone dite « libre » au sud, où s'installe le nouveau régime.",
    },
    {
      titre: "Le régime de Vichy",
      illustration: "⚖️",
      visuel: "10 juillet 1940 : l'État français",
      contenu: [
        "10 juillet 1940 : le Parlement vote les pleins pouvoirs à Pétain, qui met fin à la République",
        "Pétain instaure l'« État français », un régime autoritaire (devise : Travail, Famille, Patrie)",
        "Le régime pratique la collaboration avec l'Allemagne nazie",
        "Antisémitisme d'État : statut des Juifs (octobre 1940), participation aux persécutions et aux déportations",
      ],
      voixOff:
        "Le 10 juillet 1940, le Parlement vote les pleins pouvoirs à Pétain, qui met fin à la République et instaure l'État français, un régime autoritaire dont la devise, Travail, Famille, Patrie, remplace Liberté, Égalité, Fraternité. Ce régime pratique la collaboration avec l'Allemagne nazie. Il mène aussi une politique antisémite d'État : dès octobre 1940, un statut exclut les Juifs de nombreux droits, avant que le régime ne participe activement à leur persécution et à leur déportation.",
    },
    {
      titre: "L'appel du 18 juin 1940",
      illustration: "📻",
      visuel: "Le général de Gaulle, à Londres",
      contenu: [
        "Le général Charles de Gaulle refuse la défaite et rejoint Londres",
        "18 juin 1940 : à la radio britannique BBC, il appelle les Français à continuer le combat",
        "Il fonde la France libre, qui rassemble des volontaires et poursuit la guerre aux côtés des Alliés",
        "De Gaulle devient le symbole de la résistance à l'extérieur du pays",
      ],
      voixOff:
        "Refusant la défaite, le général Charles de Gaulle rejoint Londres. Le 18 juin 1940, sur les ondes de la radio britannique BBC, il lance un appel aux Français : il les invite à continuer le combat aux côtés des Alliés. C'est l'acte fondateur de la France libre, qui rassemble des volontaires et poursuit la lutte contre l'Allemagne. De Gaulle devient le symbole de la résistance française à l'extérieur du pays.",
    },
    {
      titre: "La Résistance intérieure",
      illustration: "✊",
      visuel: "Jean Moulin et le CNR",
      contenu: [
        "En France occupée, des résistants s'organisent : réseaux de renseignement, presse clandestine, sabotages, maquis",
        "Jean Moulin, envoyé par de Gaulle, unifie les mouvements de résistance",
        "Mai 1943 : création du Conseil National de la Résistance (CNR)",
        "Les résistants risquent la torture, la déportation ou l'exécution s'ils sont arrêtés",
      ],
      voixOff:
        "À l'intérieur de la France occupée, des femmes et des hommes s'organisent en résistants : ils créent des réseaux de renseignement, diffusent une presse clandestine, sabotent les installations ennemies ou rejoignent les maquis. Jean Moulin, envoyé par le général de Gaulle, parvient à unifier les différents mouvements de résistance et crée, en mai 1943, le Conseil National de la Résistance. Ces engagements sont extrêmement dangereux : arrêtés, les résistants risquent la torture, la déportation ou l'exécution.",
    },
    {
      titre: "1944 : la Libération",
      illustration: "🕊️",
      visuel: "Été 1944",
      contenu: [
        "6 juin 1944 : débarquement allié en Normandie",
        "25 août 1944 : libération de Paris",
        "Le Gouvernement provisoire de la République française (GPRF), dirigé par de Gaulle, s'installe",
        "La France retrouve la République et prépare sa refondation",
      ],
      voixOff:
        "Après le débarquement allié en Normandie, le 6 juin 1944, la France est progressivement libérée. Paris est libérée le 25 août 1944. Le Gouvernement provisoire de la République française, dirigé par le général de Gaulle, s'installe et rétablit la légalité républicaine. La France peut désormais reconstruire son État et sa démocratie.",
    },
    {
      titre: "La refondation de la République",
      illustration: "🗳️",
      visuel: "1944-1946",
      contenu: [
        "21 avril 1944 : les femmes obtiennent le droit de vote et d'éligibilité",
        "1945 : création de la Sécurité sociale, grandes nationalisations, comités d'entreprise",
        "1946 : nouvelle Constitution, naissance de la IVe République",
        "Le programme du CNR inspire ces réformes sociales et démocratiques",
      ],
      voixOff:
        "À la Libération, la République se refonde et s'approfondit. Le 21 avril 1944, les femmes obtiennent enfin le droit de vote et d'éligibilité. En 1945, la Sécurité sociale est créée pour protéger tous les Français face à la maladie, aux accidents ou à la vieillesse, tandis que de grandes entreprises sont nationalisées. En 1946, une nouvelle Constitution donne naissance à la IVe République. Ces réformes s'inspirent largement du programme du Conseil National de la Résistance.",
    },
    {
      titre: "1958 : la naissance de la Ve République",
      illustration: "🏛️",
      visuel: "4 octobre 1958",
      contenu: [
        "La IVe République, instable, est fragilisée par la guerre d'Algérie (1954-1962)",
        "1958 : le général de Gaulle revient au pouvoir et fait rédiger une nouvelle Constitution",
        "4 octobre 1958 : la Constitution de la Ve République est adoptée par référendum",
        "Elle renforce les pouvoirs du président de la République",
      ],
      voixOff:
        "La IVe République, marquée par une grande instabilité gouvernementale, est fragilisée par la guerre d'Algérie qui débute en 1954. En 1958, le général de Gaulle revient au pouvoir et fait rédiger une nouvelle Constitution, approuvée par référendum le 4 octobre 1958 : c'est la naissance de la Ve République, qui renforce nettement les pouvoirs du président.",
    },
    {
      titre: "La Ve République : institutions et évolutions",
      illustration: "🇫🇷",
      visuel: "1962 → aujourd'hui",
      contenu: [
        "1962 : le président de la République est élu au suffrage universel direct",
        "1962 : indépendance de l'Algérie, fin de la décolonisation française",
        "2000 : le mandat présidentiel passe de sept ans (septennat) à cinq ans (quinquennat)",
        "La Ve République connaît des alternances politiques régulières entre droite et gauche",
      ],
      voixOff:
        "En 1962, un référendum instaure l'élection du président de la République au suffrage universel direct, ce qui renforce sa légitimité. La même année, les accords d'Évian mettent fin à la guerre d'Algérie, qui devient indépendante. En 2000, le mandat présidentiel passe de sept à cinq ans : c'est le quinquennat. Depuis 1958, la Ve République a connu plusieurs alternances politiques entre la droite et la gauche, preuve de sa stabilité démocratique.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1940 : défaite, armistice, régime de Vichy (collaboration, antisémitisme d'État)",
        "18 juin 1940 : appel de De Gaulle, France libre ; Résistance intérieure (Jean Moulin, CNR)",
        "1944-1946 : Libération, refondation républicaine (vote des femmes, Sécurité sociale, IVe République)",
        "1958 : naissance de la Ve République ; 1962 : élection présidentielle au suffrage universel",
      ],
      voixOff:
        "Résumons. En 1940, la France est vaincue et occupée ; le régime de Vichy, dirigé par Pétain, collabore avec l'Allemagne nazie. Dès le 18 juin 1940, le général de Gaulle appelle à poursuivre le combat et fonde la France libre, tandis que la Résistance intérieure s'organise autour de Jean Moulin et du Conseil National de la Résistance. La Libération, en 1944, permet de refonder la République : droit de vote des femmes, Sécurité sociale, puis IVe République en 1946. En 1958, la Ve République naît sous l'impulsion du général de Gaulle, et depuis 1962, le président est élu au suffrage universel direct. Bravo, tu es prêt pour le brevet sur ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "Après la défaite de 1940 et le régime de collaboration de Vichy, la France libre et la Résistance permettent la Libération et la refondation démocratique et sociale de la République, avant la naissance de la Ve République en 1958.",
    sections: [
      {
        titre: "La défaite et le régime de Vichy",
        points: [
          "Mai-juin 1940 : défaite militaire ; 22 juin 1940 : armistice signé par Pétain",
          "10 juillet 1940 : fin de la République, instauration de l'État français (régime autoritaire)",
          "Collaboration avec l'Allemagne nazie et antisémitisme d'État (statut des Juifs, participation aux persécutions)",
        ],
      },
      {
        titre: "La France libre et la Résistance",
        points: [
          "18 juin 1940 : appel du général de Gaulle depuis Londres, naissance de la France libre",
          "Résistance intérieure : réseaux, presse clandestine, maquis ; Jean Moulin unifie les mouvements",
          "Mai 1943 : création du Conseil National de la Résistance (CNR)",
        ],
      },
      {
        titre: "La Libération et la refondation républicaine",
        points: [
          "6 juin 1944 : débarquement ; 25 août 1944 : libération de Paris ; GPRF dirigé par de Gaulle",
          "21 avril 1944 : droit de vote des femmes ; 1945 : Sécurité sociale, nationalisations",
          "1946 : nouvelle Constitution, naissance de la IVe République",
        ],
      },
      {
        titre: "La Ve République, de 1958 à nos jours",
        points: [
          "1958 : retour de de Gaulle, nouvelle Constitution adoptée par référendum (4 octobre 1958)",
          "1962 : élection du président au suffrage universel direct ; indépendance de l'Algérie",
          "2000 : passage au quinquennat ; alternances politiques régulières depuis 1958",
        ],
      },
    ],
    audio:
      "Fiche de révision : la France de 1940 à nos jours. Vaincue en juin 1940, la France signe l'armistice le 22 juin. Le maréchal Pétain met fin à la République et instaure l'État français, un régime autoritaire qui collabore avec l'Allemagne nazie et participe aux persécutions antisémites. Dès le 18 juin 1940, le général de Gaulle appelle depuis Londres à poursuivre le combat : c'est la naissance de la France libre. En France occupée, la Résistance intérieure s'organise, notamment autour de Jean Moulin, qui unifie les mouvements dans le Conseil National de la Résistance créé en mai 1943. Après le débarquement du 6 juin 1944 et la libération de Paris le 25 août, la République se refonde : les femmes obtiennent le droit de vote en avril 1944, la Sécurité sociale est créée en 1945, et une nouvelle Constitution fait naître la IVe République en 1946. Face à l'instabilité de ce régime et à la guerre d'Algérie, le général de Gaulle revient au pouvoir en 1958 et fait adopter la Constitution de la Ve République. En 1962, le président de la République commence à être élu au suffrage universel direct, tandis que l'Algérie devient indépendante. Depuis, la Ve République a connu de nombreuses alternances politiques, jusqu'à nos jours.",
  },
  memoCards: [
    { recto: "Que se passe-t-il le 22 juin 1940 ?", verso: "La France signe l'armistice avec l'Allemagne après sa défaite militaire." },
    { recto: "Qu'est-ce que le régime de Vichy ?", verso: "L'« État français », régime autoritaire dirigé par Pétain à partir du 10 juillet 1940, qui met fin à la République et collabore avec l'Allemagne nazie." },
    { recto: "Que se passe-t-il le 18 juin 1940 ?", verso: "Le général de Gaulle lance depuis Londres, sur les ondes de la BBC, un appel à poursuivre le combat : naissance de la France libre." },
    { recto: "Qui est Jean Moulin ?", verso: "Résistant envoyé par de Gaulle pour unifier les mouvements de résistance intérieure ; il crée le Conseil National de la Résistance (CNR) en mai 1943." },
    { recto: "Quelles réformes majeures ont lieu à la Libération ?", verso: "21 avril 1944 : droit de vote des femmes. 1945 : création de la Sécurité sociale et nationalisations." },
    { recto: "Quand naît la Ve République ?", verso: "En 1958 : nouvelle Constitution rédigée sous l'impulsion du général de Gaulle, adoptée par référendum le 4 octobre 1958." },
    { recto: "Depuis quand le président est-il élu au suffrage universel direct ?", verso: "Depuis 1962, à la suite d'un référendum voulu par le général de Gaulle." },
    { recto: "Quand l'Algérie devient-elle indépendante ?", verso: "En 1962, après les accords d'Évian, mettant fin à la guerre d'Algérie (1954-1962)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui devient chef du gouvernement français en juin 1940 et signe l'armistice ?",
      choix: ["Charles de Gaulle", "Léon Blum", "Le maréchal Pétain", "Jean Moulin"],
      bonneReponse: 2,
      explication: "Pétain devient chef du gouvernement le 16 juin 1940 et signe l'armistice le 22 juin 1940.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que fait le général de Gaulle le 18 juin 1940 ?",
      choix: [
        "Il signe l'armistice",
        "Il lance un appel à poursuivre le combat depuis Londres",
        "Il devient président de la République",
        "Il crée la Sécurité sociale",
      ],
      bonneReponse: 1,
      explication: "Depuis Londres, sur les ondes de la BBC, de Gaulle appelle les Français à continuer la résistance : c'est la naissance de la France libre.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle réforme importante pour les femmes est adoptée en avril 1944 ?",
      reponse: "Le droit de vote et d'éligibilité pour les femmes.",
      explication: "Cette réforme est décidée par le Gouvernement provisoire de la République française, avant même la fin de la guerre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année la Ve République est-elle instaurée ?",
      choix: ["1946", "1958", "1962", "1944"],
      bonneReponse: 1,
      explication: "La Constitution de la Ve République est adoptée par référendum le 4 octobre 1958.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que la collaboration ?",
      choix: [
        "L'aide apportée par le régime de Vichy à l'Allemagne nazie",
        "L'union des résistants français",
        "L'alliance entre la France et le Royaume-Uni",
        "Le programme du CNR",
      ],
      bonneReponse: 0,
      explication: "Le régime de Vichy collabore avec l'occupant allemand sur le plan économique, policier et idéologique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qui est Jean Moulin et quel est son rôle ?",
      reponse:
        "Jean Moulin est un résistant envoyé en France par le général de Gaulle pour unifier les différents mouvements de résistance. Il crée le Conseil National de la Résistance en mai 1943. Arrêté par la Gestapo en 1943, il meurt sous la torture sans avoir parlé.",
      explication: "Jean Moulin symbolise l'unité et le sacrifice de la Résistance française.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux réformes de la Libération inspirées du programme du CNR.",
      reponse: "Par exemple : la création de la Sécurité sociale en 1945 et le droit de vote des femmes en 1944, ou encore les nationalisations de grandes entreprises et de banques.",
      explication: "Le programme du Conseil National de la Résistance prévoyait un vaste plan de réformes économiques, sociales et démocratiques.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel événement de 1962 renforce les pouvoirs et la légitimité du président de la République ?",
      choix: [
        "La création de la Sécurité sociale",
        "L'élection du président au suffrage universel direct",
        "La libération de Paris",
        "La création du CNR",
      ],
      bonneReponse: 1,
      explication: "Depuis un référendum de 1962, le président de la République est élu directement par les citoyens.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi le régime de Vichy est un régime antirépublicain et collaborationniste.",
      reponse:
        "Antirépublicain, car en juillet 1940 il met fin à la République en concentrant tous les pouvoirs entre les mains de Pétain, remplace la devise républicaine par « Travail, Famille, Patrie » et supprime les libertés. Collaborationniste, car il coopère volontairement avec l'occupant allemand : il livre une main-d'œuvre française (STO), participe à la répression des résistants et organise lui-même les persécutions et déportations des Juifs de France, comme lors de la rafle du Vél d'Hiv en 1942.",
      explication: "Le régime de Vichy ne se contente pas de subir l'occupation : il choisit activement de collaborer avec l'Allemagne nazie.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que la Libération est un moment de refondation démocratique et sociale de la France.",
      reponse:
        "Sur le plan démocratique : la République est rétablie, les femmes obtiennent le droit de vote en avril 1944, une nouvelle Constitution instaure la IVe République en 1946. Sur le plan social : la Sécurité sociale, créée en 1945, protège tous les Français contre les risques de la vie ; des nationalisations et la mise en place de comités d'entreprise renforcent les droits des travailleurs. Ces réformes s'inspirent du programme du Conseil National de la Résistance.",
      explication: "La refondation touche à la fois les institutions politiques et l'organisation sociale du pays.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi la IVe République est-elle fragilisée avant 1958 ?",
      choix: [
        "Elle connaît une grande instabilité gouvernementale et la guerre d'Algérie",
        "Elle refuse d'accorder le droit de vote aux femmes",
        "Elle est dirigée par Pétain",
        "Elle collabore avec l'Allemagne",
      ],
      bonneReponse: 0,
      explication: "Les nombreux changements de gouvernement et la crise de la guerre d'Algérie (à partir de 1954) provoquent la chute de la IVe République en 1958.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Méthode brevet : présente en quelques lignes l'évolution des pouvoirs du président de la République sous la Ve République depuis 1958.",
      reponse:
        "En 1958, la Constitution de la Ve République renforce déjà les pouvoirs du président par rapport à la IVe République. En 1962, un référendum voulu par le général de Gaulle instaure son élection au suffrage universel direct, ce qui accroît encore sa légitimité et son autorité. En 2000, la durée de son mandat est réduite de sept à cinq ans (quinquennat), pour le faire coïncider avec les élections législatives et éviter des périodes de cohabitation. Depuis 1958, la fonction reste centrale malgré plusieurs alternances politiques.",
      explication: "On attend une frise chronologique claire des évolutions institutionnelles : 1958, 1962, 2000.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel régime dirige la France de 1940 à 1944 ?",
      choix: ["La IVe République", "Le régime de Vichy", "La Ve République", "La France libre"],
      bonneReponse: 1,
      explication: "Le régime de Vichy, dirigé par Pétain, collabore avec l'Allemagne nazie de 1940 à 1944.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qui lance l'appel du 18 juin 1940 et depuis où ?",
      reponse: "Le général de Gaulle, depuis Londres, sur les ondes de la BBC.",
      explication: "Cet appel fonde la France libre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux réformes de la refondation républicaine à la Libération.",
      reponse: "Le droit de vote des femmes (1944) et la création de la Sécurité sociale (1945).",
      explication: "Ces réformes s'inspirent du programme du Conseil National de la Résistance.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "En quelle année la Ve République est-elle instaurée ?",
      choix: ["1946", "1958", "1962", "1944"],
      bonneReponse: 1,
      explication: "La Constitution de la Ve République est adoptée par référendum le 4 octobre 1958.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Depuis quand le président de la République est-il élu au suffrage universel direct ?",
      reponse: "Depuis 1962.",
      explication: "Ce mode d'élection renforce la légitimité du président sous la Ve République.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La France de 1940 à nos jours",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "À quelle date la France signe-t-elle l'armistice avec l'Allemagne ?",
          choix: ["18 juin 1940", "22 juin 1940", "10 juillet 1940", "6 juin 1944"],
          bonneReponse: 1,
          explication: "L'armistice, signé le 22 juin 1940, met fin aux combats et organise l'occupation d'une partie de la France.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la France libre ?",
          reponse: "Le mouvement fondé par le général de Gaulle depuis Londres après son appel du 18 juin 1940, qui rassemble des Français décidés à poursuivre le combat aux côtés des Alliés.",
          explication: "La France libre s'oppose au régime de Vichy et à la collaboration.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel organisme Jean Moulin crée-t-il en mai 1943 ?",
          choix: ["Le Gouvernement provisoire", "Le Conseil National de la Résistance", "L'État français", "La Sécurité sociale"],
          bonneReponse: 1,
          explication: "Le CNR unifie les mouvements de résistance intérieure sous l'autorité du général de Gaulle.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique en quoi consiste l'antisémitisme d'État sous le régime de Vichy.",
          reponse:
            "Dès octobre 1940, un statut des Juifs les exclut de nombreuses professions et droits. Le régime organise ensuite le recensement des Juifs et participe activement à leur arrestation et à leur déportation, notamment lors de la rafle du Vél d'Hiv en juillet 1942, en collaboration avec l'occupant nazi.",
          explication: "Cette politique montre que Vichy ne subit pas seulement l'occupation mais participe activement aux persécutions.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelles réformes sociales sont adoptées en 1945 à la Libération ?",
          reponse: "La création de la Sécurité sociale, qui protège les Français contre la maladie, les accidents du travail et la vieillesse, ainsi que d'importantes nationalisations d'entreprises et de banques.",
          explication: "Ces réformes s'inspirent du programme du Conseil National de la Résistance.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : raconte comment la France passe de la défaite de 1940 à la refondation républicaine de la Libération (une vingtaine de lignes).",
          reponse:
            "Introduction : entre 1940 et 1946, la France connaît la défaite, l'occupation puis la refondation de sa démocratie. Première partie : la défaite et le régime de Vichy ; après la débâcle de mai-juin 1940, Pétain signe l'armistice le 22 juin puis instaure, le 10 juillet, un régime autoritaire et collaborationniste, l'État français. Deuxième partie : la résistance à l'occupation ; dès le 18 juin 1940, de Gaulle appelle depuis Londres à poursuivre le combat et fonde la France libre, tandis qu'à l'intérieur, des résistants s'organisent en réseaux et en maquis, unifiés par Jean Moulin au sein du CNR en 1943. Troisième partie : la refondation à la Libération ; après le débarquement du 6 juin 1944 et la libération de Paris, le Gouvernement provisoire rétablit la République, accorde le droit de vote aux femmes et crée la Sécurité sociale en 1945, avant qu'une nouvelle Constitution ne fonde la IVe République en 1946. Conclusion : la France sort de ces années sombres avec une démocratie refondée et approfondie.",
          explication: "Le développement doit mobiliser les repères : juin 1940, 18 juin 1940, 1943 (CNR), 1944-1946 (réformes, IVe République).",
        },
      ],
    },
    {
      titre: "Examen 2 — La France de 1940 à nos jours",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel événement empêche le fonctionnement stable de la IVe République et provoque son remplacement en 1958 ?",
          choix: ["La Seconde Guerre mondiale", "La guerre d'Algérie et l'instabilité gouvernementale", "La création de la Sécurité sociale", "L'appel du 18 juin"],
          bonneReponse: 1,
          explication: "L'instabilité chronique des gouvernements et la crise de la guerre d'Algérie provoquent le retour au pouvoir du général de Gaulle en 1958.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quand la Constitution de la Ve République est-elle adoptée ?",
          reponse: "Le 4 octobre 1958, par référendum.",
          explication: "Cette Constitution renforce les pouvoirs du président de la République.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que change le référendum de 1962 pour l'élection présidentielle ?",
          choix: [
            "Le président est désormais élu par les députés",
            "Le président est élu au suffrage universel direct",
            "Le mandat présidentiel passe à cinq ans",
            "Le président n'est plus élu",
          ],
          bonneReponse: 1,
          explication: "Depuis 1962, tous les citoyens français majeurs élisent directement le président de la République.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Que se passe-t-il en 1962 concernant l'Algérie ?",
          reponse: "Les accords d'Évian mettent fin à la guerre d'Algérie (1954-1962) et l'Algérie devient indépendante.",
          explication: "Cet événement marque une étape majeure de la décolonisation française sous la Ve République naissante.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que le quinquennat et depuis quand s'applique-t-il ?",
          reponse: "C'est le mandat présidentiel de cinq ans, qui remplace le septennat (sept ans) depuis une réforme adoptée par référendum en 2000.",
          explication: "Le quinquennat vise notamment à faire coïncider les élections présidentielle et législatives.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre comment la Ve République s'installe et évolue depuis 1958 jusqu'à nos jours (une vingtaine de lignes).",
          reponse:
            "Introduction : née en 1958 dans un contexte de crise, la Ve République est le régime politique encore en vigueur en France aujourd'hui. Première partie : une naissance dans la crise ; face à l'instabilité de la IVe République et à la guerre d'Algérie, le général de Gaulle revient au pouvoir en 1958 et fait adopter une Constitution qui renforce les pouvoirs du président, approuvée par référendum le 4 octobre 1958. Deuxième partie : un régime qui se démocratise et se stabilise ; en 1962, le président est élu au suffrage universel direct, ce qui accroît sa légitimité, tandis que la même année l'indépendance de l'Algérie referme le temps des grandes guerres coloniales. Troisième partie : un régime qui évolue jusqu'à nos jours ; en 2000, le quinquennat remplace le septennat, et la France connaît depuis 1958 plusieurs alternances politiques entre droite et gauche, preuve de la solidité démocratique du régime. Conclusion : la Ve République, née il y a plus de soixante ans, reste le cadre institutionnel de la France contemporaine.",
          explication: "Le développement doit mobiliser les repères : 1958, 1962, 2000, et la notion d'alternance politique.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 22 juin 1940, armistice ; 10 juillet 1940, instauration du régime de Vichy (Pétain), collaboration et antisémitisme d'État.",
    "Repère brevet : 18 juin 1940, appel du général de Gaulle depuis Londres, naissance de la France libre.",
    "Résistance intérieure : Jean Moulin unifie les mouvements et crée le Conseil National de la Résistance (mai 1943).",
    "Repères brevet : 6 juin 1944, débarquement ; 25 août 1944, libération de Paris ; 21 avril 1944, droit de vote des femmes ; 1945, Sécurité sociale.",
    "Repère brevet : 1946, naissance de la IVe République ; 1958, naissance de la Ve République (Constitution du 4 octobre 1958).",
    "Repère brevet : 1962, élection du président au suffrage universel direct et indépendance de l'Algérie ; 2000, passage au quinquennat.",
  ],
},
{
  slug: "guerre-froide",
  titre: "Le monde bipolaire : la guerre froide",
  matiere: "histoire-geo",
  niveau: "3eme",
  description:
    "Comprendre l'affrontement entre les États-Unis et l'URSS de 1947 à 1991, l'organisation du monde en deux blocs, les grandes crises de la guerre froide (Berlin, Cuba) et la fin du conflit avec la chute du mur de Berlin puis la disparition de l'URSS.",
  objectifs: [
    "Expliquer la rupture de la Grande Alliance et la formation de deux blocs à partir de 1947",
    "Caractériser la guerre froide : affrontement indirect, course aux armements, dissuasion nucléaire",
    "Analyser les grandes crises de la guerre froide (blocus de Berlin, mur de Berlin, crise de Cuba)",
    "Comprendre la notion de guerre par procuration à travers un exemple (Corée ou Vietnam)",
    "Expliquer la fin de la guerre froide : chute du mur de Berlin (1989) et disparition de l'URSS (1991)",
  ],
  slides: [
    {
      titre: "1947 : la rupture de la Grande Alliance",
      illustration: "🌍",
      visuel: "1947 : début de la guerre froide",
      contenu: [
        "Après 1945, les vainqueurs de la guerre, États-Unis et URSS, deviennent rivaux",
        "1947 : doctrine Truman (endiguement du communisme) et plan Marshall (aide économique américaine à l'Europe)",
        "L'URSS réplique en imposant des régimes communistes en Europe de l'Est",
        "Le monde se divise en deux blocs opposés : c'est le début de la guerre froide",
      ],
      voixOff:
        "Après leur victoire commune en 1945, les États-Unis et l'URSS, les deux grandes puissances issues de la guerre, deviennent rapidement rivales. En 1947, le président américain Truman annonce sa doctrine d'endiguement du communisme et lance le plan Marshall, une aide économique massive pour reconstruire l'Europe de l'Ouest. En réponse, l'URSS impose des régimes communistes dans les pays d'Europe de l'Est qu'elle occupe. Le monde se divise alors en deux blocs opposés : c'est le début de la guerre froide.",
    },
    {
      titre: "Deux blocs, deux modèles",
      illustration: "⚔️",
      visuel: "OTAN (1949) / Pacte de Varsovie (1955)",
      contenu: [
        "Bloc de l'Ouest : démocraties libérales, économie de marché, dirigé par les États-Unis",
        "Bloc de l'Est : régimes communistes, économie planifiée, dirigé par l'URSS",
        "1949 : création de l'OTAN, alliance militaire occidentale",
        "1955 : création du pacte de Varsovie, alliance militaire des pays communistes",
      ],
      voixOff:
        "Le monde se retrouve organisé autour de deux blocs. À l'Ouest, les États-Unis dirigent un ensemble de démocraties libérales fondées sur l'économie de marché. À l'Est, l'URSS dirige un bloc de régimes communistes à économie planifiée. Sur le plan militaire, l'Organisation du traité de l'Atlantique Nord, l'OTAN, est créée en 1949 par les pays occidentaux, tandis que le pacte de Varsovie rassemble les pays communistes à partir de 1955.",
    },
    {
      titre: "Le blocus de Berlin (1948-1949)",
      illustration: "🛫",
      visuel: "Berlin, 1948-1949",
      contenu: [
        "Berlin, comme l'Allemagne, est divisée en zones d'occupation entre Alliés occidentaux et URSS",
        "Juin 1948 : l'URSS bloque toutes les routes vers Berlin-Ouest pour l'isoler",
        "Les Occidentaux ravitaillent la ville par un pont aérien pendant près d'un an",
        "1949 : l'URSS lève le blocus ; l'Allemagne est ensuite officiellement divisée en deux États (RFA/RDA)",
      ],
      voixOff:
        "Berlin, comme l'ensemble de l'Allemagne, est divisée en zones d'occupation entre les Alliés occidentaux et l'URSS. En juin 1948, l'URSS bloque toutes les routes terrestres menant à Berlin-Ouest pour tenter de l'isoler et de la faire céder. Les Occidentaux répondent par un pont aérien impressionnant, ravitaillant la ville par avion pendant près d'un an. En 1949, l'URSS renonce et lève le blocus. Peu après, l'Allemagne est officiellement divisée en deux États : la République fédérale à l'ouest et la République démocratique à l'est.",
    },
    {
      titre: "La course aux armements",
      illustration: "☢️",
      visuel: "L'équilibre de la terreur",
      contenu: [
        "États-Unis et URSS développent des arsenaux nucléaires de plus en plus puissants",
        "Chaque camp cherche à dissuader l'autre d'attaquer : c'est la dissuasion nucléaire",
        "On parle d'« équilibre de la terreur » : une guerre directe deviendrait la destruction des deux camps",
        "La guerre froide reste donc « froide » : pas d'affrontement militaire direct entre les deux grands",
      ],
      voixOff:
        "Les deux superpuissances se lancent dans une course aux armements nucléaires. Chacune développe un arsenal capable de détruire l'autre plusieurs fois, dans une logique de dissuasion : attaquer l'adversaire reviendrait à s'exposer à des représailles dévastatrices. On parle d'équilibre de la terreur. C'est pourquoi la guerre froide ne devient jamais une guerre directe entre les États-Unis et l'URSS, même si le monde reste sous la menace permanente d'un conflit nucléaire.",
    },
    {
      titre: "1961 : le mur de Berlin",
      illustration: "🧱",
      visuel: "13 août 1961",
      contenu: [
        "De nombreux Allemands de l'Est fuient vers Berlin-Ouest, plus prospère et plus libre",
        "13 août 1961 : la RDA construit un mur pour fermer hermétiquement la frontière à Berlin",
        "Le mur de Berlin devient le symbole de la division du monde et de l'Europe",
        "Il sépare familles et amis pendant près de trente ans",
      ],
      voixOff:
        "Face au départ massif d'Allemands de l'Est vers Berlin-Ouest, plus prospère et plus libre, les autorités est-allemandes décident, dans la nuit du 13 août 1961, de construire un mur qui coupe la ville en deux. Le mur de Berlin devient le symbole le plus fort de la division du monde en deux blocs. Il séparera des familles entières pendant près de trente ans, jusqu'en 1989.",
    },
    {
      titre: "1962 : la crise des missiles de Cuba",
      illustration: "🚀",
      visuel: "Octobre 1962",
      contenu: [
        "L'URSS installe secrètement des missiles nucléaires à Cuba, à proximité des États-Unis",
        "Octobre 1962 : le président Kennedy exige leur retrait et impose un blocus naval",
        "Pendant treize jours, le monde est au bord de la guerre nucléaire",
        "Un accord met fin à la crise : l'URSS retire ses missiles, les États-Unis retirent les leurs de Turquie",
      ],
      voixOff:
        "En octobre 1962, l'URSS installe secrètement des missiles nucléaires à Cuba, à quelques kilomètres seulement des côtes américaines. Le président américain Kennedy exige leur retrait immédiat et impose un blocus naval autour de l'île. Pendant treize jours, le monde entier retient son souffle, au bord d'une guerre nucléaire. Finalement, un compromis est trouvé : l'URSS retire ses missiles de Cuba, et les États-Unis retirent discrètement les leurs de Turquie. C'est le point culminant de la guerre froide.",
    },
    {
      titre: "Des guerres par procuration",
      illustration: "🪖",
      visuel: "Corée (1950-1953), Vietnam (1955-1975)",
      contenu: [
        "Même s'ils ne s'affrontent jamais directement, les deux blocs se combattent par pays alliés interposés",
        "Guerre de Corée (1950-1953) : la Corée du Nord communiste contre la Corée du Sud, soutenue par l'ONU et les États-Unis",
        "Guerre du Vietnam (1955-1975) : le Nord communiste, soutenu par l'URSS et la Chine, contre le Sud, soutenu par les États-Unis",
        "Ces conflits, très meurtriers, illustrent la rivalité indirecte des deux blocs",
      ],
      voixOff:
        "La guerre froide se joue aussi loin d'Europe, à travers des conflits appelés guerres par procuration : les deux blocs ne s'affrontent jamais directement, mais soutiennent chacun un camp dans des guerres régionales. La guerre de Corée, de 1950 à 1953, oppose ainsi la Corée du Nord communiste à la Corée du Sud soutenue par les États-Unis et l'ONU. La guerre du Vietnam, de 1955 à 1975, voit le Nord communiste, appuyé par l'URSS et la Chine, combattre le Sud, soutenu par les États-Unis. Ces guerres, très meurtrières, montrent que la rivalité entre les deux blocs se joue partout dans le monde.",
    },
    {
      titre: "1989-1991 : la fin de la guerre froide",
      illustration: "🎉",
      visuel: "9 novembre 1989 → 1991",
      contenu: [
        "Fin des années 1980 : l'URSS, affaiblie économiquement, entame des réformes (Gorbatchev)",
        "9 novembre 1989 : chute du mur de Berlin, les Allemands célèbrent la fin de la division",
        "1990 : réunification de l'Allemagne",
        "Décembre 1991 : dissolution de l'URSS, la Russie et d'autres États indépendants lui succèdent",
      ],
      voixOff:
        "À la fin des années 1980, l'URSS, économiquement affaiblie, engage des réformes sous la direction de Gorbatchev. Le 9 novembre 1989, le mur de Berlin tombe : c'est un moment de liesse immense, symbole de la fin de la division de l'Europe. L'Allemagne se réunifie en 1990. Enfin, en décembre 1991, l'URSS est officiellement dissoute : la Russie et d'autres républiques deviennent des États indépendants. La guerre froide, qui avait duré plus de quarante ans, s'achève.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1947 : début de la guerre froide (doctrine Truman, plan Marshall)",
        "Deux blocs opposés : OTAN (1949) contre pacte de Varsovie (1955)",
        "Crises majeures : blocus de Berlin (1948-1949), mur de Berlin (1961), crise de Cuba (1962)",
        "Guerres par procuration : Corée, Vietnam",
        "1989 : chute du mur de Berlin ; 1991 : dissolution de l'URSS, fin de la guerre froide",
      ],
      voixOff:
        "Résumons. À partir de 1947, le monde se divise en deux blocs rivaux, dirigés par les États-Unis et l'URSS : c'est la guerre froide. Les deux camps s'affrontent indirectement, par la course aux armements et par des crises comme le blocus de Berlin en 1948, la construction du mur de Berlin en 1961 ou la crise des missiles de Cuba en 1962, sans jamais se combattre directement. Ils s'opposent aussi par pays interposés, comme en Corée ou au Vietnam. La guerre froide s'achève avec la chute du mur de Berlin le 9 novembre 1989, puis la dissolution de l'URSS en décembre 1991. Bravo, tu es prêt pour le brevet sur ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "De 1947 à 1991, le monde est divisé en deux blocs rivaux dirigés par les États-Unis et l'URSS : c'est la guerre froide, un affrontement indirect marqué par de graves crises et par la course aux armements nucléaires.",
    sections: [
      {
        titre: "Le début de la guerre froide (1947)",
        points: [
          "1947 : doctrine Truman (endiguement du communisme) et plan Marshall (aide économique américaine)",
          "L'URSS impose des régimes communistes en Europe de l'Est",
          "Le monde se divise en deux blocs : Ouest (États-Unis) et Est (URSS)",
        ],
      },
      {
        titre: "Deux blocs, des crises majeures",
        points: [
          "1949 : création de l'OTAN ; 1955 : création du pacte de Varsovie",
          "1948-1949 : blocus de Berlin, contourné par un pont aérien",
          "13 août 1961 : construction du mur de Berlin ; octobre 1962 : crise des missiles de Cuba, point culminant de la guerre froide",
        ],
      },
      {
        titre: "Une guerre « froide » mais des affrontements indirects",
        points: [
          "Course aux armements nucléaires et dissuasion (« équilibre de la terreur »)",
          "Guerres par procuration : guerre de Corée (1950-1953), guerre du Vietnam (1955-1975)",
          "Les deux Grands ne s'affrontent jamais militairement de façon directe",
        ],
      },
      {
        titre: "La fin de la guerre froide",
        points: [
          "Fin des années 1980 : réformes de Gorbatchev en URSS",
          "9 novembre 1989 : chute du mur de Berlin ; 1990 : réunification allemande",
          "Décembre 1991 : dissolution de l'URSS, fin de la guerre froide",
        ],
      },
    ],
    audio:
      "Fiche de révision : le monde bipolaire, la guerre froide. À partir de 1947, avec la doctrine Truman et le plan Marshall, les États-Unis et l'URSS, alliés pendant la Seconde Guerre mondiale, deviennent rivaux : le monde se divise en deux blocs, l'Ouest capitaliste et démocratique, l'Est communiste, organisés militairement autour de l'OTAN, créée en 1949, et du pacte de Varsovie, créé en 1955. La guerre froide est marquée par de grandes crises : le blocus de Berlin en 1948 et 1949, la construction du mur de Berlin le 13 août 1961, et surtout la crise des missiles de Cuba en octobre 1962, qui amène le monde au bord de la guerre nucléaire. Grâce à la dissuasion nucléaire, les deux Grands ne s'affrontent jamais directement, mais se combattent par pays alliés interposés, comme lors de la guerre de Corée ou de la guerre du Vietnam. La guerre froide s'achève à la fin des années 1980 : le mur de Berlin tombe le 9 novembre 1989, l'Allemagne se réunifie en 1990, et l'URSS est dissoute en décembre 1991.",
  },
  memoCards: [
    { recto: "Quand commence la guerre froide et pourquoi ?", verso: "En 1947, avec la doctrine Truman et le plan Marshall : les États-Unis et l'URSS, alliés en 1945, deviennent rivaux et le monde se divise en deux blocs." },
    { recto: "Quelles sont les deux alliances militaires de la guerre froide ?", verso: "L'OTAN (bloc occidental, 1949) et le pacte de Varsovie (bloc communiste, 1955)." },
    { recto: "Qu'est-ce que le blocus de Berlin (1948-1949) ?", verso: "L'URSS bloque les routes vers Berlin-Ouest ; les Occidentaux répondent par un pont aérien pendant près d'un an." },
    { recto: "Que symbolise le mur de Berlin (13 août 1961) ?", verso: "La division du monde en deux blocs : il coupe Berlin en deux jusqu'en 1989." },
    { recto: "Qu'est-ce que la crise des missiles de Cuba (octobre 1962) ?", verso: "L'URSS installe des missiles nucléaires à Cuba ; pendant 13 jours, le monde est au bord de la guerre nucléaire, avant un compromis. C'est le sommet de la guerre froide." },
    { recto: "Qu'est-ce qu'une guerre par procuration ?", verso: "Un conflit régional où les deux blocs soutiennent chacun un camp sans s'affronter directement (ex. Corée 1950-1953, Vietnam 1955-1975)." },
    { recto: "Que se passe-t-il le 9 novembre 1989 ?", verso: "La chute du mur de Berlin, symbole de la fin de la division de l'Europe." },
    { recto: "Quand la guerre froide se termine-t-elle officiellement ?", verso: "En décembre 1991, avec la dissolution de l'URSS." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelles sont les deux superpuissances qui s'affrontent pendant la guerre froide ?",
      choix: ["La France et le Royaume-Uni", "Les États-Unis et l'URSS", "L'Allemagne et la Russie", "La Chine et le Japon"],
      bonneReponse: 1,
      explication: "La guerre froide oppose le bloc occidental, dirigé par les États-Unis, au bloc communiste, dirigé par l'URSS.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année la guerre froide commence-t-elle ?",
      choix: ["1945", "1947", "1949", "1961"],
      bonneReponse: 1,
      explication: "En 1947, la doctrine Truman et le plan Marshall marquent le début officiel de la rivalité entre les deux blocs.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quelle date le mur de Berlin est-il construit ?",
      reponse: "Le 13 août 1961.",
      explication: "Le mur sépare Berlin-Est et Berlin-Ouest jusqu'à sa chute en 1989.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que se passe-t-il le 9 novembre 1989 ?",
      choix: ["Le blocus de Berlin commence", "La chute du mur de Berlin", "La crise des missiles de Cuba", "La dissolution de l'URSS"],
      bonneReponse: 1,
      explication: "La chute du mur de Berlin symbolise la fin de la division de l'Europe et annonce la fin de la guerre froide.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que le plan Marshall ?",
      choix: [
        "Une alliance militaire occidentale",
        "Une aide économique américaine pour reconstruire l'Europe de l'Ouest",
        "Un traité de paix avec l'Allemagne",
        "Le nom du mur de Berlin",
      ],
      bonneReponse: 1,
      explication: "Lancé en 1947, le plan Marshall vise à reconstruire l'Europe de l'Ouest et à l'éloigner du communisme.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est le blocus de Berlin et comment les Occidentaux y répondent.",
      reponse:
        "En juin 1948, l'URSS bloque toutes les routes terrestres vers Berlin-Ouest pour isoler la ville et forcer les Occidentaux à l'abandonner. Ces derniers organisent un pont aérien : pendant près d'un an, des avions ravitaillent quotidiennement la ville en vivres et en charbon. Face à cet échec, l'URSS lève le blocus en 1949.",
      explication: "Le blocus de Berlin est la première grande crise de la guerre froide.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi dit-on que la crise de Cuba (1962) est le point culminant de la guerre froide ?",
      reponse:
        "Parce que l'installation de missiles nucléaires soviétiques à Cuba, à proximité immédiate des États-Unis, place les deux superpuissances à un doigt d'un affrontement nucléaire direct. Pendant treize jours, la tension est extrême, avant qu'un compromis diplomatique ne permette d'éviter la guerre.",
      explication: "Après cette crise, les deux Grands cherchent à limiter les risques d'escalade, par exemple avec l'installation d'un « téléphone rouge » entre Washington et Moscou.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qu'une guerre par procuration ?",
      choix: [
        "Une guerre directe entre les États-Unis et l'URSS",
        "Un conflit régional où chaque bloc soutient un camp sans s'affronter directement",
        "Une guerre civile en Russie",
        "La guerre du Vietnam uniquement",
      ],
      bonneReponse: 1,
      explication: "Les guerres de Corée et du Vietnam en sont des exemples : les deux Grands y soutiennent des camps opposés sans combattre directement l'un contre l'autre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la guerre froide reste « froide » malgré des tensions extrêmes.",
      reponse:
        "Les deux superpuissances possèdent des arsenaux nucléaires capables de s'anéantir mutuellement : c'est la dissuasion, ou « équilibre de la terreur ». Un affrontement militaire direct entrainerait la destruction des deux camps, ce qui pousse les États-Unis et l'URSS à éviter tout combat frontal, même lors de crises graves comme celle de Cuba en 1962, et à privilégier des affrontements indirects (course aux armements, guerres par procuration, propagande).",
      explication: "La dissuasion nucléaire explique l'absence de conflit armé direct entre les deux Grands durant toute la guerre froide.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre, à partir de deux exemples précis, que Berlin est un lieu symbolique de la guerre froide.",
      reponse:
        "En 1948-1949, le blocus de Berlin, contourné par le pont aérien allié, en fait le premier grand point de tension entre les deux blocs. En 1961, la construction du mur de Berlin, qui coupe la ville en deux pour empêcher les départs vers l'Ouest, devient le symbole le plus fort de la division du monde. Sa chute, le 9 novembre 1989, symbolise à l'inverse la fin de la guerre froide.",
      explication: "Berlin concentre, du début à la fin du conflit, les grandes étapes de la guerre froide.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel enchaînement d'événements marque la fin de la guerre froide ?",
      choix: [
        "Blocus de Berlin puis crise de Cuba",
        "Chute du mur de Berlin (1989) puis dissolution de l'URSS (1991)",
        "Doctrine Truman puis plan Marshall",
        "Guerre de Corée puis guerre du Vietnam",
      ],
      bonneReponse: 1,
      explication: "Après les réformes de Gorbatchev, le mur de Berlin tombe en 1989, l'Allemagne se réunifie en 1990, et l'URSS disparaît en décembre 1991.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Méthode brevet : tu analyses une photographie de la chute du mur de Berlin en novembre 1989. Quelles étapes suis-tu ?",
      reponse:
        "1) Présenter le document : nature (photographie de presse), date (novembre 1989), lieu (Berlin), contexte (fin de la guerre froide). 2) Décrire ce que l'on voit : des habitants sur et autour du mur, liesse populaire, symboles de la division qui tombent. 3) Expliquer avec ses connaissances : construction du mur en 1961, réformes de Gorbatchev, affaiblissement du bloc communiste. 4) Porter un regard critique : image forte et symbolique, mais qui ne montre qu'un instant ; la réunification et la fin de l'URSS se poursuivent jusqu'en 1990-1991.",
      explication: "Au brevet, on attend : présenter, décrire, expliquer avec le cours, puis évaluer la portée du document.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelles sont les deux superpuissances de la guerre froide ?",
      choix: ["France et Royaume-Uni", "États-Unis et URSS", "Allemagne et Japon", "Chine et Russie"],
      bonneReponse: 1,
      explication: "La guerre froide oppose le bloc occidental (États-Unis) au bloc communiste (URSS) de 1947 à 1991.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que symbolise le mur de Berlin ?",
      reponse: "La division du monde en deux blocs pendant la guerre froide.",
      explication: "Construit en 1961, il tombe en 1989.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle crise de 1962 amène le monde au bord de la guerre nucléaire ?",
      reponse: "La crise des missiles de Cuba.",
      explication: "L'installation de missiles soviétiques à Cuba provoque une tension extrême entre les États-Unis et l'URSS.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel type de conflit oppose indirectement les deux blocs, par pays interposés ?",
      choix: ["Une guerre nucléaire directe", "Une guerre par procuration", "Un blocus", "Une guerre civile"],
      bonneReponse: 1,
      explication: "Corée (1950-1953) et Vietnam (1955-1975) sont des exemples de guerres par procuration.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quand la guerre froide se termine-t-elle ?",
      reponse: "En 1991, avec la dissolution de l'URSS, après la chute du mur de Berlin en 1989.",
      explication: "Ces deux dates marquent la fin de plus de quarante ans de guerre froide.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le monde bipolaire : la guerre froide",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "En quelle année la guerre froide débute-t-elle ?",
          choix: ["1945", "1947", "1955", "1961"],
          bonneReponse: 1,
          explication: "1947 est l'année de la doctrine Truman et du plan Marshall, marquant le début de la rivalité Est-Ouest.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelles sont les deux alliances militaires qui organisent les blocs ?",
          reponse: "L'OTAN pour le bloc occidental (1949) et le pacte de Varsovie pour le bloc communiste (1955).",
          explication: "Ces alliances structurent l'opposition militaire entre les deux blocs.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Comment les Occidentaux répondent-ils au blocus de Berlin en 1948 ?",
          choix: ["Par une invasion militaire", "Par un pont aérien", "En abandonnant Berlin-Ouest", "Par des négociations immédiates"],
          bonneReponse: 1,
          explication: "Le pont aérien allié ravitaille Berlin-Ouest par avion pendant près d'un an, forçant l'URSS à lever le blocus en 1949.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le déroulement de la crise des missiles de Cuba en octobre 1962.",
          reponse:
            "L'URSS installe secrètement des missiles nucléaires à Cuba. Le président Kennedy exige leur retrait et impose un blocus naval. Pendant treize jours, la tension est extrême, avant qu'un accord ne mette fin à la crise : l'URSS retire ses missiles de Cuba, les États-Unis retirent discrètement les leurs de Turquie.",
          explication: "Cette crise est considérée comme le moment le plus dangereux de la guerre froide.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne un exemple de guerre par procuration et explique pourquoi on utilise ce terme.",
          reponse:
            "La guerre de Corée (1950-1953) oppose la Corée du Nord communiste, soutenue par la Chine et l'URSS, à la Corée du Sud, soutenue par les États-Unis et l'ONU. On parle de guerre par procuration car les deux Grands ne combattent pas directement l'un contre l'autre, mais soutiennent chacun un camp local.",
          explication: "Ce type de conflit permet aux deux blocs de s'affronter indirectement sans déclencher une guerre nucléaire directe.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que Berlin est au cœur des tensions de la guerre froide, de 1948 à 1989 (une vingtaine de lignes).",
          reponse:
            "Introduction : divisée entre les Alliés occidentaux et l'URSS après 1945, Berlin devient un symbole des tensions de la guerre froide. Première partie : le blocus de Berlin (1948-1949) ; l'URSS bloque les routes terrestres vers Berlin-Ouest, les Occidentaux répliquent par un pont aérien qui ravitaille la ville pendant près d'un an, jusqu'à la levée du blocus. Deuxième partie : la construction du mur (1961) ; pour empêcher la fuite des Allemands de l'Est vers l'Ouest, plus prospère, la RDA construit un mur qui coupe la ville en deux à partir du 13 août 1961, séparant des familles entières. Troisième partie : la chute du mur (1989) ; affaiblie économiquement, l'URSS engage des réformes, et le 9 novembre 1989, le mur tombe dans la liesse, annonçant la fin de la division de l'Allemagne, réunifiée en 1990. Conclusion : de 1948 à 1989, Berlin concentre à elle seule toute l'histoire de la guerre froide.",
          explication: "Le développement doit mobiliser les repères : 1948-1949, 1961, 1989.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le monde bipolaire : la guerre froide",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel événement du 13 août 1961 divise Berlin en deux ?",
          choix: ["Le blocus de Berlin", "La construction du mur de Berlin", "La crise de Cuba", "La chute du mur"],
          bonneReponse: 1,
          explication: "Le mur de Berlin est construit pour empêcher les Allemands de l'Est de fuir vers Berlin-Ouest.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Que se passe-t-il en décembre 1991 ?",
          reponse: "L'URSS est officiellement dissoute, ce qui marque la fin de la guerre froide.",
          explication: "La Russie et d'autres républiques deviennent des États indépendants.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Qu'est-ce que la dissuasion nucléaire ?",
          choix: [
            "Une alliance militaire",
            "Une stratégie qui vise à décourager l'ennemi d'attaquer en menaçant de représailles nucléaires massives",
            "Un traité de désarmement",
            "Le nom du mur de Berlin",
          ],
          bonneReponse: 1,
          explication: "La dissuasion, ou « équilibre de la terreur », explique pourquoi les deux Grands évitent tout affrontement militaire direct.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Comment se manifeste la rivalité entre les deux blocs en dehors de l'Europe ?",
          reponse:
            "Par des guerres par procuration, comme la guerre de Corée (1950-1953) ou la guerre du Vietnam (1955-1975), où chaque bloc soutient militairement et financièrement un camp local sans combattre directement l'autre superpuissance.",
          explication: "Ces conflits régionaux, souvent très meurtriers, prolongent la rivalité Est-Ouest hors d'Europe.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle de Gorbatchev dans la fin de la guerre froide.",
          reponse:
            "Arrivé au pouvoir en URSS en 1985, Gorbatchev engage des réformes politiques et économiques (glasnost, perestroïka) pour redresser un pays affaibli. Il renonce à intervenir militairement pour maintenir les régimes communistes d'Europe de l'Est, ce qui permet la chute du mur de Berlin en 1989 et accélère la fin du bloc communiste.",
          explication: "Les réformes de Gorbatchev sont un facteur essentiel de la fin de la guerre froide.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique pourquoi on peut parler d'un monde bipolaire de 1947 à 1991 (une vingtaine de lignes).",
          reponse:
            "Introduction : de 1947 à 1991, le monde est organisé autour de deux superpuissances rivales, les États-Unis et l'URSS. Première partie : deux blocs idéologiques et militaires opposés ; à l'Ouest, des démocraties libérales alliées au sein de l'OTAN (1949) ; à l'Est, des régimes communistes regroupés dans le pacte de Varsovie (1955). Deuxième partie : une rivalité permanente mais indirecte ; la course aux armements nucléaires et la dissuasion empêchent tout affrontement direct, mais des crises très graves éclatent, comme le blocus de Berlin en 1948-1949 ou la crise des missiles de Cuba en 1962. Troisième partie : une rivalité mondiale ; les deux blocs s'affrontent aussi par pays interposés, en Corée puis au Vietnam. Conclusion : cette organisation bipolaire du monde prend fin avec la chute du mur de Berlin en 1989 et la disparition de l'URSS en 1991.",
          explication: "Le développement doit mobiliser les repères : 1947, 1949/1955, 1948-1949, 1962, 1989, 1991.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 1947, début de la guerre froide (doctrine Truman, plan Marshall) — le monde se divise en deux blocs.",
    "Deux alliances militaires : OTAN (bloc occidental, 1949) et pacte de Varsovie (bloc communiste, 1955).",
    "Repère brevet : blocus de Berlin (1948-1949), première grande crise de la guerre froide.",
    "Repère brevet : 13 août 1961, construction du mur de Berlin ; octobre 1962, crise des missiles de Cuba, sommet de la tension entre les deux Grands.",
    "Guerres par procuration : Corée (1950-1953), Vietnam (1955-1975) — les deux blocs s'affrontent indirectement.",
    "Repères brevet : 9 novembre 1989, chute du mur de Berlin ; décembre 1991, dissolution de l'URSS, fin de la guerre froide.",
  ],
},
{
  slug: "premiere-guerre-mondiale",
  titre: "Civils et militaires dans la Première Guerre mondiale",
  matiere: "histoire-geo",
  niveau: "3eme",
  description:
    "Comprendre les phases de la Grande Guerre (1914-1918), la violence de masse subie par les soldats et les civils, la notion de guerre totale, et retenir les repères exigés au brevet : Verdun 1916, révolution russe 1917, armistice du 11 novembre 1918, traité de Versailles 1919.",
  objectifs: [
    "Connaître les grandes phases de la guerre : mouvement, position, retour du mouvement",
    "Expliquer la bataille de Verdun (1916) et la vie des soldats dans les tranchées",
    "Définir la guerre totale et le rôle de l'arrière (civils, femmes, économie)",
    "Identifier les violences de masse, dont le génocide des Arméniens (1915)",
    "Mémoriser les repères brevet : 1914-1918, 1916, 1917, 11 novembre 1918, 1919",
  ],
  slides: [
    {
      titre: "1914 : l'Europe entre en guerre",
      illustration: "🌍",
      visuel: "28 juin 1914 → août 1914",
      contenu: [
        "28 juin 1914 : assassinat de l'archiduc François-Ferdinand à Sarajevo",
        "Le jeu des alliances entraîne toute l'Europe en guerre en août 1914",
        "Triple-Entente (France, Royaume-Uni, Russie) contre Triple-Alliance (Allemagne, Autriche-Hongrie, Italie)",
        "Chacun croit à une guerre courte... elle durera plus de quatre ans",
      ],
      voixOff:
        "Le vingt-huit juin 1914, l'archiduc François-Ferdinand, héritier du trône d'Autriche-Hongrie, est assassiné à Sarajevo. Par le jeu des alliances, toute l'Europe bascule dans la guerre en août 1914 : la Triple-Entente, avec la France, le Royaume-Uni et la Russie, affronte les empires allemand et austro-hongrois. Tout le monde croit à une guerre courte. Elle durera plus de quatre ans.",
    },
    {
      titre: "Les phases de la guerre",
      illustration: "🗺️",
      visuel: "Mouvement → Position → Mouvement",
      contenu: [
        "1914 : guerre de mouvement (invasion allemande, arrêtée à la Marne en septembre)",
        "1915-1917 : guerre de position, les fronts se figent dans les tranchées",
        "1917 : année de crise (mutineries, révolution russe, entrée en guerre des États-Unis)",
        "1918 : retour de la guerre de mouvement, victoire des Alliés",
      ],
      voixOff:
        "La guerre connaît trois grandes phases. En 1914, c'est la guerre de mouvement : l'armée allemande envahit la Belgique et la France, avant d'être arrêtée sur la Marne en septembre. De 1915 à 1917, les fronts se figent : c'est la guerre de position, dans les tranchées. En 1918, grâce notamment à l'aide américaine, le mouvement reprend et les Alliés l'emportent.",
    },
    {
      titre: "Verdun 1916 : l'enfer des soldats",
      illustration: "💥",
      visuel: "Verdun, février-décembre 1916",
      contenu: [
        "De février à décembre 1916, l'Allemagne attaque Verdun pour « saigner » l'armée française",
        "Environ 300 000 morts et des centaines de milliers de blessés en dix mois",
        "Déluge d'obus, gaz, boue, froid : une violence de masse inédite",
        "Repère brevet : 1916, bataille de Verdun",
      ],
      voixOff:
        "En février 1916, l'armée allemande lance une offensive massive sur Verdun pour épuiser l'armée française. La bataille dure dix mois, jusqu'en décembre. Sous un déluge d'obus, dans la boue et le froid, environ trois cent mille soldats meurent. Verdun devient le symbole de la violence de masse et du sacrifice des soldats français. C'est un repère essentiel du brevet.",
    },
    {
      titre: "La vie dans les tranchées",
      illustration: "🪖",
      visuel: "Les poilus",
      contenu: [
        "Les soldats français sont surnommés les « poilus »",
        "Conditions terribles : boue, rats, poux, froid, peur permanente",
        "Nouvelles armes : artillerie lourde, gaz de combat, mitrailleuses, chars",
        "Pour tenir : lettres, camaraderie, permissions... et parfois mutineries (1917)",
      ],
      voixOff:
        "Dans les tranchées, les soldats français, surnommés les poilus, vivent dans des conditions terribles : la boue, les rats, les poux, le froid et la peur permanente des bombardements. Les nouvelles armes, artillerie lourde, gaz de combat, mitrailleuses, rendent les assauts meurtriers. Pour tenir, les soldats comptent sur les lettres et la camaraderie. En 1917, épuisés, certains refusent de monter à l'assaut : ce sont les mutineries.",
    },
    {
      titre: "Une guerre totale",
      illustration: "🏭",
      visuel: "Guerre totale",
      contenu: [
        "Guerre totale = toutes les ressources des pays sont mobilisées pour la victoire",
        "Économie : usines reconverties dans l'armement (obus, canons)",
        "États : emprunts, propagande, censure ; sciences au service de la guerre",
        "Sociétés : toute la population participe à l'effort de guerre",
      ],
      voixOff:
        "La Première Guerre mondiale est une guerre totale : les États mobilisent toutes leurs ressources pour vaincre. Les usines sont reconverties pour produire des obus et des canons. Les gouvernements lancent des emprunts, utilisent la propagande et censurent la presse. Les sciences elles-mêmes sont mises au service de la guerre. Toute la société, à l'avant comme à l'arrière, participe à l'effort de guerre.",
    },
    {
      titre: "L'arrière : les civils dans la guerre",
      illustration: "👩‍🏭",
      visuel: "L'arrière",
      contenu: [
        "Les femmes remplacent les hommes : usines d'armement (« munitionnettes »), champs",
        "Pénuries, rationnement, deuil dans presque toutes les familles",
        "Civils victimes : bombardements, occupation, travail forcé dans les zones occupées",
        "La frontière entre civils et militaires s'efface",
      ],
      voixOff:
        "À l'arrière, les civils sont pleinement engagés dans la guerre. Les femmes remplacent les hommes partis au front, dans les champs comme dans les usines d'armement, où on les surnomme les munitionnettes. Les familles subissent les pénuries et le deuil. Dans les régions occupées, les civils connaissent réquisitions et travail forcé. La frontière entre civils et militaires s'efface : c'est une des marques de la guerre totale.",
    },
    {
      titre: "1915 : le génocide des Arméniens",
      illustration: "🕯️",
      visuel: "1915",
      contenu: [
        "L'Empire ottoman accuse les Arméniens de trahison",
        "À partir d'avril 1915 : massacres et déportations vers les déserts de Syrie",
        "Environ 1,2 million d'Arméniens meurent : c'est un génocide",
        "Génocide = destruction programmée d'un peuple entier",
      ],
      voixOff:
        "La violence de masse frappe aussi des populations civiles entières. En 1915, le gouvernement de l'Empire ottoman, allié de l'Allemagne, accuse les Arméniens de trahison. À partir d'avril, hommes, femmes et enfants sont massacrés ou déportés vers les déserts de Syrie. Environ un million deux cent mille Arméniens meurent. C'est un génocide : la destruction programmée et organisée d'un peuple entier.",
    },
    {
      titre: "1917 : la révolution russe",
      illustration: "🚩",
      visuel: "Octobre 1917",
      contenu: [
        "Février 1917 : le tsar Nicolas II est renversé, épuisement de la Russie en guerre",
        "Octobre 1917 : les bolcheviks de Lénine prennent le pouvoir",
        "Mars 1918 : paix de Brest-Litovsk, la Russie sort de la guerre",
        "Repère brevet : 1917, révolution russe (et entrée en guerre des États-Unis)",
      ],
      voixOff:
        "En 1917, la Russie, épuisée par la guerre, bascule dans la révolution. En février, le tsar Nicolas deux est renversé. En octobre, les bolcheviks, dirigés par Lénine, prennent le pouvoir et promettent la paix. En mars 1918, la Russie signe la paix de Brest-Litovsk et sort du conflit. La même année 1917, les États-Unis entrent en guerre aux côtés des Alliés : c'est le grand tournant de la guerre.",
    },
    {
      titre: "1918-1919 : bilan et traités",
      illustration: "🕊️",
      visuel: "11 novembre 1918 → 28 juin 1919",
      contenu: [
        "11 novembre 1918 : l'Allemagne signe l'armistice, les combats cessent",
        "Bilan : environ 10 millions de soldats morts, des millions d'invalides (« gueules cassées »)",
        "28 juin 1919 : traité de Versailles, l'Allemagne jugée responsable (article 231)",
        "Pertes territoriales, armée réduite, réparations ; création de la SDN ; l'Europe est bouleversée",
      ],
      voixOff:
        "Le onze novembre 1918, l'Allemagne signe l'armistice : les combats cessent enfin. Le bilan est effroyable : environ dix millions de soldats sont morts, et des millions d'autres restent mutilés, comme les gueules cassées. Le vingt-huit juin 1919, le traité de Versailles déclare l'Allemagne responsable de la guerre : elle perd des territoires, dont l'Alsace-Moselle rendue à la France, doit payer des réparations et voit son armée réduite. La Société des Nations est créée pour préserver la paix, mais l'Allemagne humiliée parle de diktat.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1914-1918 : guerre de mouvement, puis de position (tranchées), puis de mouvement",
        "Violence de masse : Verdun 1916, génocide des Arméniens 1915",
        "Guerre totale : économies, États et civils (l'arrière) entièrement mobilisés",
        "1917 : révolution russe ; 11 novembre 1918 : armistice ; 1919 : traité de Versailles",
      ],
      voixOff:
        "Résumons. De 1914 à 1918, l'Europe vit une guerre d'un genre nouveau : après la guerre de mouvement, les soldats s'enterrent dans les tranchées, comme à Verdun en 1916. La violence de masse touche aussi les civils, jusqu'au génocide des Arméniens en 1915. C'est une guerre totale, qui mobilise l'arrière tout entier. En 1917, la Russie sort de la guerre par la révolution tandis que les États-Unis y entrent. L'armistice du onze novembre 1918 puis le traité de Versailles de 1919 referment le conflit sur une Europe bouleversée. Bravo, tu es prêt pour le brevet sur ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "La Première Guerre mondiale (1914-1918) est une guerre totale marquée par une violence de masse inédite, qui frappe les soldats comme les civils et bouleverse durablement l'Europe.",
    sections: [
      {
        titre: "Les phases de la guerre (1914-1918)",
        points: [
          "1914 : guerre de mouvement ; l'invasion allemande est stoppée à la Marne (septembre)",
          "1915-1917 : guerre de position, les armées s'enterrent dans les tranchées",
          "1917 : tournant — révolution russe, mutineries, entrée en guerre des États-Unis",
          "1918 : retour de la guerre de mouvement, victoire des Alliés, armistice le 11 novembre",
        ],
      },
      {
        titre: "Verdun et la violence de masse",
        points: [
          "Février-décembre 1916 : bataille de Verdun, environ 300 000 morts",
          "Objectif allemand : « saigner » l'armée française",
          "Poilus dans les tranchées : boue, rats, obus, gaz de combat, peur permanente",
          "1917 : mutineries de soldats épuisés",
        ],
      },
      {
        titre: "Une guerre totale",
        points: [
          "Mobilisation de toutes les ressources : économie (usines d'armement), finances (emprunts), esprits (propagande, censure)",
          "L'arrière participe : femmes dans les usines (« munitionnettes ») et les champs",
          "Civils victimes : pénuries, bombardements, occupation, travail forcé",
        ],
      },
      {
        titre: "Le génocide des Arméniens (1915)",
        points: [
          "L'Empire ottoman accuse les Arméniens de trahison",
          "Massacres et déportations à partir d'avril 1915 : environ 1,2 million de morts",
          "Génocide : destruction programmée et organisée d'un peuple entier",
        ],
      },
      {
        titre: "1917 : la révolution russe",
        points: [
          "Février 1917 : abdication du tsar Nicolas II",
          "Octobre 1917 : les bolcheviks de Lénine prennent le pouvoir",
          "Mars 1918 : paix de Brest-Litovsk, la Russie quitte la guerre",
        ],
      },
      {
        titre: "Bilan et traité de Versailles (1919)",
        points: [
          "Environ 10 millions de soldats morts, dont 1,4 million de Français ; des millions de mutilés",
          "28 juin 1919 : traité de Versailles, Allemagne déclarée responsable (article 231)",
          "Allemagne : pertes territoriales (Alsace-Moselle rendue à la France), réparations, armée limitée — un « diktat » pour les Allemands",
          "Création de la Société des Nations (SDN) pour maintenir la paix",
        ],
      },
    ],
    audio:
      "Fiche de révision : civils et militaires dans la Première Guerre mondiale. De 1914 à 1918, l'Europe s'enfonce dans une guerre d'un type nouveau. Après la guerre de mouvement de 1914, arrêtée sur la Marne, les fronts se figent : c'est la guerre de position dans les tranchées. La bataille de Verdun, de février à décembre 1916, fait environ trois cent mille morts et symbolise la violence de masse subie par les soldats. Cette guerre est totale : les usines produisent des armes, les femmes remplacent les hommes, la propagande mobilise les esprits, et les civils deviennent des victimes, jusqu'au génocide des Arméniens perpétré par l'Empire ottoman en 1915. L'année 1917 est un tournant : la révolution russe porte Lénine et les bolcheviks au pouvoir et la Russie quitte la guerre, tandis que les États-Unis y entrent. L'armistice est signé le 11 novembre 1918. Le traité de Versailles, en 1919, déclare l'Allemagne responsable et redessine l'Europe.",
  },
  memoCards: [
    { recto: "Dates de la Première Guerre mondiale ?", verso: "1914-1918. Déclenchée après l'assassinat de Sarajevo (28 juin 1914), terminée par l'armistice du 11 novembre 1918." },
    { recto: "Quelles sont les phases de la guerre ?", verso: "Guerre de mouvement (1914), guerre de position dans les tranchées (1915-1917), retour du mouvement et victoire alliée (1918)." },
    { recto: "Bataille de Verdun : dates et bilan ?", verso: "Février à décembre 1916 ; environ 300 000 morts. Symbole de la violence de masse. Repère brevet : 1916." },
    { recto: "Qui sont les « poilus » ?", verso: "Les soldats français des tranchées : boue, rats, obus, gaz, peur permanente." },
    { recto: "Qu'est-ce qu'une guerre totale ?", verso: "Une guerre qui mobilise toutes les ressources d'un pays : économie, finances, sciences, propagande et population civile." },
    { recto: "Qu'est-ce que le génocide des Arméniens ?", verso: "En 1915, l'Empire ottoman massacre et déporte les Arméniens : environ 1,2 million de morts. Un génocide est la destruction programmée d'un peuple." },
    { recto: "Que se passe-t-il en Russie en 1917 ?", verso: "Le tsar est renversé en février ; en octobre, les bolcheviks de Lénine prennent le pouvoir. La Russie quitte la guerre en mars 1918 (Brest-Litovsk)." },
    { recto: "Que se passe-t-il le 11 novembre 1918 ?", verso: "L'Allemagne signe l'armistice : les combats de la Première Guerre mondiale cessent." },
    { recto: "Traité de Versailles : date et contenu ?", verso: "28 juin 1919 : l'Allemagne est déclarée responsable (article 231), perd des territoires, paie des réparations, voit son armée limitée." },
    { recto: "Bilan humain de la guerre ?", verso: "Environ 10 millions de soldats morts (dont 1,4 million de Français), des millions de blessés et de « gueules cassées »." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelles sont les dates de la Première Guerre mondiale ?",
      choix: ["1912-1916", "1914-1918", "1915-1919", "1914-1917"],
      bonneReponse: 1,
      explication: "La guerre commence en août 1914 et s'achève avec l'armistice du 11 novembre 1918.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on les soldats français des tranchées ?",
      choix: ["Les grognards", "Les poilus", "Les bolcheviks", "Les munitionnettes"],
      bonneReponse: 1,
      explication: "Les soldats français de 14-18 sont surnommés les « poilus ». Les munitionnettes sont les ouvrières des usines d'armement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "En quelle année a lieu la bataille de Verdun ?",
      reponse: "En 1916 (de février à décembre).",
      explication: "Verdun, en 1916, est un repère de date exigé au brevet : environ 300 000 morts en dix mois.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que se passe-t-il le 11 novembre 1918 ?",
      choix: [
        "La signature du traité de Versailles",
        "Le début de la bataille de Verdun",
        "La signature de l'armistice",
        "La révolution russe",
      ],
      bonneReponse: 2,
      explication: "Le 11 novembre 1918, l'Allemagne signe l'armistice qui met fin aux combats. Le traité de Versailles est signé en 1919.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans quel ordre se succèdent les phases de la guerre sur le front ouest ?",
      choix: [
        "Position → mouvement → position",
        "Mouvement → position → mouvement",
        "Mouvement → position → armistice immédiat",
        "Position → armistice → mouvement",
      ],
      bonneReponse: 1,
      explication: "Guerre de mouvement en 1914, guerre de position dans les tranchées de 1915 à 1917, puis retour du mouvement en 1918.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Définis la notion de « guerre totale » et donne deux exemples.",
      reponse:
        "Une guerre totale mobilise toutes les ressources d'un pays pour la victoire. Exemples : les usines reconverties dans l'armement où travaillent les femmes (munitionnettes), la propagande et la censure pour mobiliser les esprits, les emprunts de guerre.",
      explication: "L'économie, les finances, les sciences, les esprits et les civils sont tous mis au service de la guerre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi dit-on que le génocide des Arméniens est une violence de masse contre des civils ?",
      reponse:
        "En 1915, l'Empire ottoman organise le massacre et la déportation de tout un peuple, hommes, femmes et enfants, sans distinction : environ 1,2 million d'Arméniens meurent. C'est une destruction programmée d'un peuple entier, donc un génocide.",
      explication: "Un génocide vise l'extermination planifiée d'un groupe entier : ici, des civils arméniens, non des combattants.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui prend le pouvoir en Russie en octobre 1917 ?",
      choix: ["Le tsar Nicolas II", "Les bolcheviks dirigés par Lénine", "Staline", "Le gouvernement de Versailles"],
      bonneReponse: 1,
      explication: "En octobre 1917, les bolcheviks, dirigés par Lénine, renversent le gouvernement provisoire issu de la révolution de février.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi l'année 1917 est un tournant de la guerre.",
      reponse:
        "En 1917, la Russie connaît deux révolutions : le tsar abdique en février, puis les bolcheviks de Lénine prennent le pouvoir en octobre et sortent la Russie de la guerre (paix de Brest-Litovsk, mars 1918). La même année, les États-Unis entrent en guerre aux côtés des Alliés, et des mutineries éclatent dans l'armée française. Le rapport de forces bascule en faveur des Alliés pour 1918.",
      explication: "1917 combine crises (mutineries, sortie de la Russie) et espoir allié (renfort américain) : c'est le tournant du conflit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que les civils sont à la fois acteurs et victimes de la guerre.",
      reponse:
        "Acteurs : à l'arrière, les femmes travaillent dans les usines d'armement et les champs, les civils financent la guerre par les emprunts et soutiennent le moral. Victimes : ils subissent les pénuries et le deuil, les bombardements, l'occupation et le travail forcé dans les zones envahies, et des violences extrêmes comme le génocide des Arméniens en 1915.",
      explication: "Dans une guerre totale, la frontière entre le front et l'arrière, entre combattants et civils, s'efface.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Que prévoit le traité de Versailles (28 juin 1919) pour l'Allemagne ?",
      choix: [
        "Elle est déclarée responsable de la guerre, perd des territoires et doit payer des réparations",
        "Elle conserve toutes ses colonies et son armée",
        "Elle est intégrée immédiatement à la Société des Nations",
        "Elle reçoit l'Alsace-Moselle",
      ],
      bonneReponse: 0,
      explication:
        "L'article 231 déclare l'Allemagne responsable : pertes territoriales (dont l'Alsace-Moselle rendue à la France), réparations, armée limitée à 100 000 hommes. Les Allemands parlent de « diktat ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Méthode brevet : tu analyses une lettre de poilu écrite à Verdun en 1916. Quelles étapes suis-tu et quels éléments cherches-tu ?",
      reponse:
        "1) Présenter le document : nature (lettre privée), auteur (un soldat), date (1916), contexte (bataille de Verdun). 2) Décrire ce qu'il dit : conditions de vie (boue, rats, froid), violence (obus, gaz, morts), sentiments (peur, camaraderie). 3) Expliquer avec ses connaissances : guerre de position, violence de masse, bataille destinée à épuiser l'armée française. 4) Porter un regard critique : témoignage vécu donc précieux, mais point de vue individuel, parfois soumis à la censure militaire.",
      explication:
        "Au brevet, on attend : présenter (nature, auteur, date, contexte), décrire, expliquer avec le cours, et montrer l'intérêt et les limites du document.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel événement déclenche l'engrenage vers la guerre en 1914 ?",
      choix: [
        "La prise de la Bastille",
        "L'assassinat de l'archiduc François-Ferdinand à Sarajevo",
        "La révolution russe",
        "Le traité de Versailles",
      ],
      bonneReponse: 1,
      explication: "L'attentat de Sarajevo, le 28 juin 1914, déclenche le jeu des alliances qui mène à la guerre en août 1914.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle bataille de 1916 symbolise la violence de masse pour les soldats français ?",
      reponse: "La bataille de Verdun (février-décembre 1916, environ 300 000 morts).",
      explication: "Verdun 1916 est un repère exigé au brevet.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux caractéristiques de la guerre totale.",
      reponse:
        "Par exemple : la reconversion des usines dans l'armement, le travail des femmes à l'arrière, la propagande et la censure, les emprunts de guerre.",
      explication: "La guerre totale mobilise l'économie, les esprits et l'ensemble de la société.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "En quelle année a lieu le génocide des Arméniens ?",
      choix: ["1914", "1915", "1917", "1919"],
      bonneReponse: 1,
      explication: "Le génocide des Arméniens est perpétré par l'Empire ottoman à partir d'avril 1915 : environ 1,2 million de morts.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne la date de l'armistice et celle du traité de Versailles.",
      reponse: "Armistice : 11 novembre 1918. Traité de Versailles : 28 juin 1919.",
      explication: "L'armistice arrête les combats ; le traité de Versailles organise la paix et sanctionne l'Allemagne.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Civils et militaires dans la Première Guerre mondiale",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle bataille de septembre 1914 arrête l'avancée allemande en France ?",
          choix: ["Verdun", "La Marne", "La Somme", "Waterloo"],
          bonneReponse: 1,
          explication: "La bataille de la Marne, en septembre 1914, stoppe l'invasion allemande et met fin à la guerre de mouvement.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la guerre de position ?",
          reponse:
            "La phase de la guerre (1915-1917) où les fronts sont figés : les soldats s'enterrent dans des tranchées qui se font face.",
          explication: "Après l'échec de la guerre de mouvement, les armées creusent des tranchées de la mer du Nord à la Suisse.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel était l'objectif allemand à Verdun en 1916 ?",
          choix: [
            "Prendre Paris en quelques jours",
            "« Saigner » l'armée française pour l'épuiser",
            "Forcer la Russie à capituler",
            "Détruire la flotte britannique",
          ],
          bonneReponse: 1,
          explication: "L'état-major allemand voulait infliger des pertes insupportables à l'armée française pour la faire craquer.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris trois aspects de la vie quotidienne des poilus dans les tranchées.",
          reponse:
            "La boue, le froid, les rats et les poux ; la peur permanente des bombardements d'obus et des attaques au gaz ; l'attente entre les assauts, avec les lettres et la camaraderie pour tenir.",
          explication: "Les conditions matérielles épouvantables et la violence des combats expliquent l'épuisement des soldats, jusqu'aux mutineries de 1917.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quel rôle jouent les femmes à l'arrière pendant la guerre ?",
          reponse:
            "Elles remplacent les hommes mobilisés : elles travaillent dans les usines d'armement (les « munitionnettes »), dans les champs, dans les hôpitaux comme infirmières, et font vivre les familles.",
          explication: "Le travail des femmes est indispensable à l'effort de guerre : c'est une facette de la guerre totale.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que la Première Guerre mondiale est une guerre totale (une vingtaine de lignes, avec des exemples précis).",
          reponse:
            "Introduction : de 1914 à 1918, la guerre mobilise bien plus que les armées ; elle engage des sociétés entières. Première partie : une mobilisation économique et financière ; les usines sont reconverties dans l'armement, les femmes y remplacent les hommes (munitionnettes), les États financent le conflit par des emprunts de guerre. Deuxième partie : une mobilisation des esprits ; la propagande exalte l'effort national et diabolise l'ennemi, la presse est censurée, le « bourrage de crâne » entretient le moral. Troisième partie : des civils dans la guerre ; l'arrière subit pénuries et deuils, les zones occupées connaissent réquisitions et travail forcé, et la violence extrême frappe des peuples entiers, comme les Arméniens victimes d'un génocide en 1915. Conclusion : parce qu'elle mobilise toutes les ressources et efface la frontière entre le front et l'arrière, la Grande Guerre est bien une guerre totale.",
          explication:
            "Le développement construit doit être organisé (introduction, deux ou trois parties, conclusion) et mobiliser les mots-clés : mobilisation économique, propagande, arrière, génocide des Arméniens 1915.",
        },
      ],
    },
    {
      titre: "Examen 2 — Civils et militaires dans la Première Guerre mondiale",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qui dirige les bolcheviks lors de la révolution d'octobre 1917 ?",
          choix: ["Nicolas II", "Staline", "Lénine", "Clemenceau"],
          bonneReponse: 2,
          explication: "Lénine dirige les bolcheviks qui prennent le pouvoir en Russie en octobre 1917.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un génocide ? Donne l'exemple étudié dans ce chapitre.",
          reponse:
            "Un génocide est la destruction programmée et organisée d'un peuple entier. Exemple : le génocide des Arméniens par l'Empire ottoman en 1915 (environ 1,2 million de morts).",
          explication: "Le génocide vise un groupe entier, y compris femmes et enfants, de façon planifiée.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est la conséquence de la révolution d'octobre 1917 pour la guerre ?",
          choix: [
            "La Russie intensifie les combats",
            "La Russie signe la paix et sort de la guerre (Brest-Litovsk, mars 1918)",
            "La Russie envahit l'Allemagne",
            "La Russie rejoint la Triple-Alliance",
          ],
          bonneReponse: 1,
          explication: "Les bolcheviks, arrivés au pouvoir en promettant la paix, signent le traité de Brest-Litovsk en mars 1918 : la Russie quitte le conflit.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Présente le bilan humain de la Première Guerre mondiale.",
          reponse:
            "Environ 10 millions de soldats sont morts, dont près de 1,4 million de Français. Des millions d'hommes reviennent blessés ou mutilés (les « gueules cassées »), et presque toutes les familles sont en deuil. Les civils ont aussi payé un lourd tribut.",
          explication: "Ce bilan sans précédent explique le traumatisme durable des sociétés européennes après 1918.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi les Allemands qualifient-ils le traité de Versailles de « diktat » ?",
          reponse:
            "Parce qu'il leur est imposé sans négociation : l'article 231 déclare l'Allemagne seule responsable de la guerre, elle perd des territoires (dont l'Alsace-Moselle rendue à la France) et ses colonies, doit payer de lourdes réparations et voit son armée limitée à 100 000 hommes.",
          explication: "L'humiliation ressentie par les Allemands nourrira le désir de revanche dans l'entre-deux-guerres.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : raconte l'expérience combattante des soldats pendant la Grande Guerre, en prenant appui sur l'exemple de Verdun (une vingtaine de lignes).",
          reponse:
            "Introduction : entre 1914 et 1918, des millions de soldats vivent une violence de masse inédite ; la bataille de Verdun en est le symbole. Première partie : des conditions de vie inhumaines ; dans les tranchées, les poilus affrontent la boue, le froid, les rats et les poux, la faim et le manque de sommeil. Deuxième partie : une violence de masse ; à Verdun, de février à décembre 1916, le déluge d'obus, les gaz de combat et les assauts font environ 300 000 morts ; l'objectif allemand était de « saigner » l'armée française. Troisième partie : tenir malgré tout ; les soldats résistent grâce aux lettres, à la camaraderie et aux permissions, mais l'épuisement provoque en 1917 des mutineries, sévèrement réprimées. Conclusion : l'expérience combattante de la Grande Guerre, faite de souffrance et de violence extrême, marque durablement les survivants et les sociétés européennes.",
          explication:
            "On attend un récit organisé avec des connaissances précises : tranchées, poilus, Verdun février-décembre 1916, environ 300 000 morts, mutineries de 1917.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 1914-1918, la Grande Guerre — guerre de mouvement (1914), guerre de position (1915-1917), retour du mouvement (1918).",
    "Repère brevet : 1916, bataille de Verdun (février-décembre, environ 300 000 morts), symbole de la violence de masse subie par les poilus.",
    "Guerre totale : économies, États, propagande et civils de l'arrière (femmes « munitionnettes ») entièrement mobilisés.",
    "1915 : génocide des Arméniens par l'Empire ottoman (environ 1,2 million de morts) — violence de masse contre des civils.",
    "Repère brevet : 1917, révolution russe (Lénine et les bolcheviks) et entrée en guerre des États-Unis ; la Russie quitte la guerre en mars 1918.",
    "Repères brevet : 11 novembre 1918, armistice ; 1919, traité de Versailles (article 231, Allemagne responsable, SDN créée).",
  ],
},
{
  slug: "regimes-totalitaires",
  titre: "Démocraties et expériences totalitaires",
  matiere: "histoire-geo",
  niveau: "3eme",
  description:
    "Comprendre comment la crise économique de 1929 fragilise les démocraties européennes et permet l'installation de régimes totalitaires en URSS, en Italie et en Allemagne, tout en étudiant la résistance de la démocratie française avec le Front populaire (1936).",
  objectifs: [
    "Expliquer la crise économique de 1929 et ses conséquences politiques et sociales en Europe",
    "Caractériser le régime totalitaire soviétique de Staline : parti unique, collectivisation, terreur, culte de la personnalité",
    "Caractériser le fascisme italien de Mussolini et le nazisme d'Hitler",
    "Identifier les points communs des régimes totalitaires : parti unique, propagande, embrigadement, terreur, culte du chef",
    "Montrer comment la démocratie française réagit à la crise avec le Front populaire (1936)",
  ],
  slides: [
    {
      titre: "1929 : une crise mondiale",
      illustration: "📉",
      visuel: "24 octobre 1929 : krach de Wall Street",
      contenu: [
        "24 octobre 1929 : krach boursier à Wall Street, aux États-Unis",
        "La crise financière se transforme en crise économique mondiale",
        "Faillites d'entreprises, chômage de masse, misère sociale",
        "L'Europe, dépendante des capitaux américains, est durement touchée",
      ],
      voixOff:
        "Le 24 octobre 1929, la Bourse de New York s'effondre : c'est le krach de Wall Street. La panique financière se propage à toute l'économie mondiale. Les entreprises ferment, le chômage explose, la misère s'installe. L'Europe, qui dépend des capitaux américains, est frappée de plein fouet. Cette crise fragilise durablement les démocraties.",
    },
    {
      titre: "L'URSS de Staline : un régime totalitaire",
      illustration: "☭",
      visuel: "Staline, au pouvoir à partir de 1924",
      contenu: [
        "Après la mort de Lénine (1924), Staline élimine ses rivaux et prend tout le pouvoir",
        "Parti communiste unique, État tout-puissant, culte de la personnalité",
        "Collectivisation forcée des terres (kolkhozes) : famines, résistance des paysans écrasée",
        "Plans quinquennaux pour industrialiser rapidement l'URSS",
      ],
      voixOff:
        "En Union soviétique, après la mort de Lénine en 1924, Staline élimine peu à peu tous ses rivaux et concentre tout le pouvoir entre ses mains. Le parti communiste est unique, l'État contrôle toute la société, et un véritable culte de la personnalité se développe autour de Staline. Il impose la collectivisation forcée des terres, provoquant des famines, et lance des plans quinquennaux pour industrialiser le pays à marche forcée.",
    },
    {
      titre: "La terreur stalinienne et le Goulag",
      illustration: "⛓️",
      visuel: "Le Goulag",
      contenu: [
        "Grandes Terreurs des années 1930 : procès truqués, purges du parti et de l'armée",
        "Le Goulag : système de camps de travail forcé où sont déportés des millions de personnes",
        "La police politique (NKVD) surveille et réprime toute opposition",
        "La propagande et la censure contrôlent l'information et les esprits",
      ],
      voixOff:
        "Pour asseoir son pouvoir, Staline organise une terreur de masse. Dans les années 1930, des procès truqués éliminent ses rivaux réels ou supposés. Des millions de personnes sont déportées dans le Goulag, un immense système de camps de travail forcé. La police politique surveille la population, tandis que la propagande glorifie le régime et censure toute critique.",
    },
    {
      titre: "L'Italie fasciste de Mussolini",
      illustration: "🖤",
      visuel: "1922 : marche sur Rome",
      contenu: [
        "Benito Mussolini fonde le parti fasciste après la Première Guerre mondiale",
        "Octobre 1922 : la « marche sur Rome » lui permet d'accéder au pouvoir",
        "Il installe progressivement une dictature : parti unique, chef tout-puissant (le « Duce »)",
        "Encadrement de la jeunesse, propagande, répression des opposants",
      ],
      voixOff:
        "En Italie, Benito Mussolini fonde le parti fasciste au sortir de la Première Guerre mondiale. En octobre 1922, il organise la marche sur Rome et obtient le pouvoir. Il installe peu à peu une dictature : le parti fasciste devient unique, Mussolini, surnommé le Duce, concentre tous les pouvoirs. La jeunesse est encadrée dans des organisations fascistes, la propagande est partout et les opposants sont réprimés.",
    },
    {
      titre: "1933 : Hitler chancelier",
      illustration: "🦅",
      visuel: "30 janvier 1933",
      contenu: [
        "L'Allemagne, très touchée par la crise de 1929, connaît un chômage massif",
        "Adolf Hitler et le parti nazi profitent du mécontentement pour progresser aux élections",
        "30 janvier 1933 : Hitler est nommé chancelier par le président Hindenburg",
        "En quelques mois, il instaure une dictature : parti unique, suppression des libertés",
      ],
      voixOff:
        "L'Allemagne est très durement frappée par la crise de 1929 : le chômage touche des millions de personnes. Adolf Hitler et le parti national-socialiste, ou parti nazi, exploitent cette misère et cette colère pour progresser aux élections. Le 30 janvier 1933, Hitler est nommé chancelier. En quelques mois seulement, il détruit la démocratie allemande et installe une dictature totale.",
    },
    {
      titre: "Le régime nazi : embrigadement et persécutions",
      illustration: "🚫",
      visuel: "1935 : lois de Nuremberg",
      contenu: [
        "Hitler, le « Führer », impose un parti unique et supprime toutes les libertés",
        "Embrigadement de la jeunesse (Jeunesses hitlériennes), propagande omniprésente",
        "1935 : les lois de Nuremberg excluent les Juifs de la citoyenneté allemande",
        "Novembre 1938 : la Nuit de Cristal, pogrom contre les Juifs dans toute l'Allemagne",
      ],
      voixOff:
        "Hitler, appelé le Führer, concentre tous les pouvoirs. Le régime nazi encadre la jeunesse dans des organisations comme les Jeunesses hitlériennes, et la propagande envahit tous les aspects de la vie. Dès 1935, les lois de Nuremberg excluent les Juifs de la citoyenneté allemande et leur interdisent de nombreux droits. En novembre 1938, la Nuit de Cristal marque une nouvelle étape : des synagogues et des commerces juifs sont détruits dans toute l'Allemagne.",
    },
    {
      titre: "Les points communs des régimes totalitaires",
      illustration: "🔺",
      visuel: "Parti unique + chef + terreur + propagande",
      contenu: [
        "Un parti unique qui contrôle l'État et écrase toute opposition",
        "Un chef charismatique, objet d'un culte de la personnalité",
        "Une propagande et un embrigadement de la population, dès l'enfance",
        "Une terreur d'État : police politique, camps, exécutions, censure totale",
      ],
      voixOff:
        "Malgré leurs différences d'idéologie, les régimes totalitaires soviétique, fasciste et nazi partagent des points communs. Un parti unique contrôle entièrement l'État et écrase toute opposition. Un chef, objet d'un véritable culte, incarne le régime. La population, encadrée dès l'enfance, est soumise à une intense propagande. Enfin, une terreur d'État, avec sa police politique et ses camps, réduit au silence tous les opposants.",
    },
    {
      titre: "La France résiste : le Front populaire (1936)",
      illustration: "✊",
      visuel: "Mai-juin 1936",
      contenu: [
        "En France, la crise nourrit aussi des tensions et la montée des ligues d'extrême droite",
        "Mai 1936 : victoire électorale du Front populaire (union des gauches), Léon Blum au pouvoir",
        "Accords de Matignon : hausse des salaires, congés payés, semaine de 40 heures",
        "La démocratie française résiste à la crise, contrairement à l'Italie et à l'Allemagne",
      ],
      voixOff:
        "En France aussi, la crise nourrit des tensions politiques et la montée de ligues d'extrême droite. Mais en mai 1936, le Front populaire, une union des partis de gauche, remporte les élections. Léon Blum devient président du Conseil. Les accords de Matignon apportent des avancées sociales majeures : hausse des salaires, congés payés, semaine de quarante heures. Contrairement à l'Italie et à l'Allemagne, la démocratie française résiste à la crise.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1929 : krach de Wall Street, crise économique mondiale qui fragilise les démocraties",
        "URSS : dictature de Staline, collectivisation, Goulag, terreur",
        "1922 : Mussolini au pouvoir en Italie ; 1933 : Hitler chancelier en Allemagne",
        "Points communs des totalitarismes : parti unique, culte du chef, propagande, terreur",
        "1936 : la démocratie française résiste avec le Front populaire",
      ],
      voixOff:
        "Résumons. La crise de 1929, née du krach de Wall Street, fragilise les démocraties européennes. En URSS, Staline installe une dictature communiste fondée sur la collectivisation et la terreur du Goulag. En Italie, Mussolini prend le pouvoir dès 1922 ; en Allemagne, Hitler devient chancelier en 1933 et détruit la démocratie. Ces régimes totalitaires partagent un parti unique, un culte du chef, une propagande intense et une terreur d'État. En France, en 1936, la démocratie résiste grâce au Front populaire. Bravo, tu es prêt pour le brevet sur ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "La crise économique de 1929 fragilise les démocraties européennes et favorise l'installation de régimes totalitaires en URSS, en Italie et en Allemagne, tandis que la démocratie française résiste grâce au Front populaire.",
    sections: [
      {
        titre: "La crise de 1929",
        points: [
          "24 octobre 1929 : krach de Wall Street, point de départ d'une crise économique mondiale",
          "Faillites, chômage de masse, misère sociale en Europe",
          "La crise fragilise les démocraties et favorise la montée des régimes autoritaires",
        ],
      },
      {
        titre: "L'URSS stalinienne, un totalitarisme communiste",
        points: [
          "Staline au pouvoir après la mort de Lénine (1924) ; culte de la personnalité",
          "Collectivisation forcée des terres (kolkhozes), plans quinquennaux, famines",
          "Grandes Terreurs des années 1930 : procès truqués, purges, déportations au Goulag",
        ],
      },
      {
        titre: "L'Italie fasciste et l'Allemagne nazie",
        points: [
          "1922 : Mussolini accède au pouvoir en Italie (marche sur Rome) et instaure le fascisme",
          "30 janvier 1933 : Hitler nommé chancelier en Allemagne, instaure une dictature nazie",
          "Embrigadement de la jeunesse, propagande ; 1935 : lois de Nuremberg contre les Juifs ; 1938 : Nuit de Cristal",
        ],
      },
      {
        titre: "Points communs des totalitarismes et réaction démocratique",
        points: [
          "Points communs : parti unique, culte du chef, propagande et embrigadement, terreur d'État",
          "En France, la démocratie résiste : victoire du Front populaire en mai 1936, Léon Blum",
          "Accords de Matignon (1936) : hausse des salaires, congés payés, semaine de 40 heures",
        ],
      },
    ],
    audio:
      "Fiche de révision : démocraties et expériences totalitaires. Le 24 octobre 1929, le krach de Wall Street déclenche une crise économique mondiale qui fragilise les démocraties européennes. En Union soviétique, Staline installe un régime totalitaire communiste fondé sur la collectivisation forcée des terres, les plans quinquennaux et une terreur d'État qui envoie des millions de personnes au Goulag. En Italie, Mussolini prend le pouvoir dès 1922 après la marche sur Rome et instaure le fascisme. En Allemagne, Hitler devient chancelier le 30 janvier 1933 et détruit rapidement la démocratie : dès 1935, les lois de Nuremberg excluent les Juifs de la citoyenneté, et la Nuit de Cristal, en novembre 1938, marque une nouvelle étape des persécutions. Ces régimes totalitaires partagent un parti unique, un culte du chef, une propagande omniprésente et une terreur d'État. En France, à l'inverse, la démocratie résiste : le Front populaire remporte les élections en mai 1936 et Léon Blum, à la tête du gouvernement, fait adopter les accords de Matignon, qui apportent des avancées sociales majeures comme les congés payés.",
  },
  memoCards: [
    { recto: "Que se passe-t-il le 24 octobre 1929 ?", verso: "Krach de Wall Street : la Bourse de New York s'effondre, déclenchant une crise économique mondiale." },
    { recto: "Qui dirige l'URSS à partir de 1924 et comment ?", verso: "Staline, après la mort de Lénine. Régime totalitaire : parti unique, collectivisation forcée, terreur, culte de la personnalité." },
    { recto: "Qu'est-ce que le Goulag ?", verso: "Le système de camps de travail forcé soviétique où sont déportés des millions d'opposants réels ou supposés au régime de Staline." },
    { recto: "Que se passe-t-il en Italie en octobre 1922 ?", verso: "La « marche sur Rome » permet à Mussolini d'accéder au pouvoir et d'installer le régime fasciste." },
    { recto: "Que se passe-t-il en Allemagne le 30 janvier 1933 ?", verso: "Hitler est nommé chancelier. Il installe rapidement une dictature nazie qui supprime les libertés." },
    { recto: "Que prévoient les lois de Nuremberg (1935) ?", verso: "Elles excluent les Juifs de la citoyenneté allemande et leur interdisent de nombreux droits : première étape de leur persécution légale." },
    { recto: "Quels sont les points communs des régimes totalitaires ?", verso: "Parti unique, culte du chef, propagande et embrigadement de la population, terreur d'État (police politique, camps, censure)." },
    { recto: "Qu'est-ce que le Front populaire (1936) ?", verso: "Une coalition de gauche menée par Léon Blum, victorieuse aux élections de mai 1936, qui fait adopter les accords de Matignon (congés payés, hausse des salaires, semaine de 40 heures)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel événement déclenche la crise économique mondiale de 1929 ?",
      choix: ["La révolution russe", "Le krach de Wall Street", "La marche sur Rome", "L'assassinat de Sarajevo"],
      bonneReponse: 1,
      explication: "Le 24 octobre 1929, la Bourse de New York s'effondre : c'est le krach de Wall Street, point de départ de la crise mondiale.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui dirige l'URSS à partir du milieu des années 1920 ?",
      choix: ["Lénine", "Trotski", "Staline", "Nicolas II"],
      bonneReponse: 2,
      explication: "Après la mort de Lénine en 1924, Staline élimine ses rivaux et prend tout le pouvoir en URSS.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "En quelle année Mussolini accède-t-il au pouvoir en Italie ?",
      reponse: "En 1922, grâce à la « marche sur Rome ».",
      explication: "Mussolini installe ensuite progressivement une dictature fasciste en Italie.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "À quelle date Hitler est-il nommé chancelier d'Allemagne ?",
      choix: ["11 novembre 1918", "30 janvier 1933", "28 juin 1919", "1er septembre 1939"],
      bonneReponse: 1,
      explication: "Le 30 janvier 1933, Hitler est nommé chancelier par le président Hindenburg. Il détruit ensuite la démocratie allemande.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que le Goulag ?",
      choix: [
        "Le parlement soviétique",
        "Le système de camps de travail forcé en URSS",
        "La police secrète nazie",
        "Le plan de collectivisation des terres",
      ],
      bonneReponse: 1,
      explication: "Le Goulag est le système de camps de travail forcé où Staline déporte des millions d'opposants réels ou supposés.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est la collectivisation des terres en URSS et ses conséquences.",
      reponse:
        "Staline impose la mise en commun forcée des terres agricoles dans des kolkhozes, pour contrôler la production et financer l'industrialisation. Les paysans qui résistent sont déportés ou exécutés. Cette politique provoque de terribles famines, notamment en Ukraine.",
      explication: "La collectivisation illustre la terreur d'État stalinienne appliquée au monde paysan.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que prévoient les lois de Nuremberg de 1935 ?",
      reponse:
        "Adoptées en Allemagne nazie en 1935, elles retirent aux Juifs la citoyenneté allemande, leur interdisent d'épouser des non-Juifs et leur ferment de nombreux emplois. Elles marquent le début de la persécution légale des Juifs par le régime nazi.",
      explication: "Ces lois préparent les persécutions plus violentes qui suivront, comme la Nuit de Cristal en 1938.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que sont les accords de Matignon (1936) ?",
      choix: [
        "Un traité de paix entre la France et l'Allemagne",
        "Des accords sociaux obtenus par le Front populaire (congés payés, hausse des salaires)",
        "Un accord commercial franco-italien",
        "La loi créant le Goulag",
      ],
      bonneReponse: 1,
      explication: "Signés en juin 1936 sous le gouvernement de Léon Blum, ils apportent des avancées sociales majeures aux travailleurs français.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Quels sont les points communs entre le régime stalinien, le régime fasciste et le régime nazi ?",
      reponse:
        "Les trois régimes reposent sur un parti unique qui contrôle l'État, un chef qui fait l'objet d'un culte de la personnalité, une propagande intense diffusée par tous les médias, un embrigadement de la population dès l'enfance, et une terreur d'État (police politique, camps, censure, exécutions) qui écrase toute opposition.",
      explication: "On parle de « totalitarisme » car l'État cherche à contrôler la totalité de la vie sociale et privée des citoyens.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que la démocratie française résiste à la crise des années 1930, contrairement à l'Italie et à l'Allemagne ?",
      reponse:
        "Malgré les tensions politiques et la montée de ligues d'extrême droite, la France conserve un système démocratique pluraliste : des élections libres ont lieu en 1936 et une coalition de gauche, le Front populaire, l'emporte légalement. Léon Blum gouverne dans le cadre des institutions républicaines et fait voter des réformes sociales (accords de Matignon), sans jamais instaurer de parti unique ni supprimer les libertés.",
      explication: "Contrairement à l'Italie de Mussolini ou à l'Allemagne d'Hitler, aucun parti unique ni dictature ne s'installe en France dans les années 1930.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel événement de novembre 1938 marque une nouvelle étape des persécutions contre les Juifs en Allemagne ?",
      choix: ["Les lois de Nuremberg", "La Nuit de Cristal", "La marche sur Rome", "Les accords de Matignon"],
      bonneReponse: 1,
      explication: "La Nuit de Cristal, dans la nuit du 9 au 10 novembre 1938, est un pogrom organisé dans toute l'Allemagne : synagogues et commerces juifs sont détruits.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Méthode brevet : tu analyses une affiche de propagande soviétique glorifiant Staline. Quelles étapes suis-tu ?",
      reponse:
        "1) Présenter le document : nature (affiche de propagande), auteur/origine (État soviétique), date, contexte (URSS stalinienne). 2) Décrire ce que l'on voit : représentation de Staline, symboles du pouvoir, slogans. 3) Expliquer avec ses connaissances : culte de la personnalité, propagande d'État, embrigadement des esprits. 4) Porter un regard critique : document officiel qui déforme la réalité (terreur, famines, Goulag) pour glorifier le régime.",
      explication: "Au brevet, on attend : présenter, décrire, expliquer avec le cours, puis critiquer le document (intérêt et limites).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel événement de 1929 fragilise les démocraties européennes ?",
      choix: ["Le krach de Wall Street", "La révolution russe", "L'armistice", "Le traité de Versailles"],
      bonneReponse: 0,
      explication: "Le krach de Wall Street, le 24 octobre 1929, déclenche une crise économique mondiale.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qui prend le pouvoir en Allemagne le 30 janvier 1933 ?",
      reponse: "Adolf Hitler, nommé chancelier.",
      explication: "C'est un repère de date exigé au brevet.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux caractéristiques communes aux régimes totalitaires.",
      reponse: "Par exemple : parti unique, culte du chef, propagande, embrigadement, terreur d'État.",
      explication: "Ces caractéristiques se retrouvent en URSS, en Italie fasciste et en Allemagne nazie.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel événement français de 1936 illustre la résistance de la démocratie face à la crise ?",
      choix: ["La marche sur Rome", "La victoire du Front populaire", "Le krach de Wall Street", "Les lois de Nuremberg"],
      bonneReponse: 1,
      explication: "En mai 1936, le Front populaire, mené par Léon Blum, remporte les élections en France.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que le Goulag et à quel régime est-il associé ?",
      reponse: "Le Goulag est le système de camps de travail forcé de l'URSS stalinienne, où sont déportés des millions d'opposants.",
      explication: "Le Goulag est l'un des instruments de la terreur d'État sous Staline.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Démocraties et expériences totalitaires",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que se passe-t-il le 24 octobre 1929 ?",
          choix: ["Le krach de Wall Street", "La marche sur Rome", "L'arrivée de Hitler au pouvoir", "La victoire du Front populaire"],
          bonneReponse: 0,
          explication: "Le krach boursier de New York déclenche la crise économique mondiale des années 1930.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qui est Staline et quand accède-t-il au pouvoir en URSS ?",
          reponse: "Staline dirige l'URSS à partir de 1924, après avoir éliminé ses rivaux à la mort de Lénine.",
          explication: "Il installe un régime totalitaire fondé sur le parti unique et la terreur.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel est l'objectif de la collectivisation des terres décidée par Staline ?",
          choix: [
            "Rendre les terres aux paysans",
            "Mettre en commun les terres pour contrôler la production agricole",
            "Créer des entreprises privées",
            "Développer le commerce avec l'Europe",
          ],
          bonneReponse: 1,
          explication: "La collectivisation forcée regroupe les terres dans des kolkhozes contrôlés par l'État, provoquant des famines.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris trois moyens utilisés par les régimes totalitaires pour contrôler la population.",
          reponse:
            "La propagande (affiches, cinéma, discours) qui glorifie le régime ; l'embrigadement de la jeunesse dans des organisations dédiées ; la terreur d'État exercée par une police politique, avec camps, procès truqués et censure.",
          explication: "Ces moyens permettent au parti unique et au chef de contrôler la totalité de la société.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Que décident les lois de Nuremberg en 1935 ?",
          reponse: "Elles retirent la citoyenneté allemande aux Juifs et leur interdisent de nombreux droits, marquant le début de leur persécution légale par le régime nazi.",
          explication: "Ces lois préparent des persécutions de plus en plus violentes, jusqu'à la Nuit de Cristal en 1938.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que l'URSS de Staline est un régime totalitaire (une quinzaine de lignes, avec des exemples précis).",
          reponse:
            "Introduction : après la mort de Lénine en 1924, Staline installe en URSS un régime qui contrôle la totalité de la société. Première partie : un pouvoir absolu ; le parti communiste est unique, Staline élimine ses rivaux et fait l'objet d'un culte de la personnalité. Deuxième partie : une économie et une société encadrées ; la collectivisation forcée des terres et les plans quinquennaux transforment le pays au prix de famines. Troisième partie : une terreur d'État ; les Grandes Terreurs des années 1930 envoient des millions de personnes au Goulag, tandis que la propagande et la censure contrôlent les esprits. Conclusion : par le parti unique, le culte du chef, l'embrigadement et la terreur, l'URSS stalinienne est bien un régime totalitaire.",
          explication: "Le développement doit être organisé et mobiliser les mots-clés : parti unique, collectivisation, Goulag, terreur, culte de la personnalité.",
        },
      ],
    },
    {
      titre: "Examen 2 — Démocraties et expériences totalitaires",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment Mussolini accède-t-il au pouvoir en Italie en 1922 ?",
          choix: ["Par des élections libres", "Par la marche sur Rome", "Par un coup d'État militaire étranger", "Par un référendum"],
          bonneReponse: 1,
          explication: "En octobre 1922, la marche sur Rome des fascistes conduit à la nomination de Mussolini à la tête du gouvernement.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui permet au parti nazi de progresser en Allemagne au début des années 1930 ?",
          reponse: "Le chômage de masse et la misère provoqués par la crise de 1929, qui nourrissent le mécontentement et le vote en faveur du parti nazi.",
          explication: "L'Allemagne est l'un des pays les plus touchés par la crise économique mondiale.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que se passe-t-il lors de la Nuit de Cristal, en novembre 1938 ?",
          choix: [
            "La signature des lois de Nuremberg",
            "Un pogrom : synagogues et commerces juifs sont détruits dans toute l'Allemagne",
            "L'arrivée de Hitler au pouvoir",
            "La victoire du Front populaire",
          ],
          bonneReponse: 1,
          explication: "La Nuit de Cristal marque une intensification brutale des persécutions antisémites en Allemagne nazie.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Présente le Front populaire et ses principales réalisations en France.",
          reponse:
            "Le Front populaire est une coalition des partis de gauche qui remporte les élections de mai 1936. Dirigé par Léon Blum, il fait adopter les accords de Matignon : hausse des salaires, instauration des congés payés, semaine de travail limitée à 40 heures.",
          explication: "Le Front populaire illustre la capacité de la démocratie française à répondre à la crise sociale des années 1930.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qu'est le culte de la personnalité et donne un exemple.",
          reponse:
            "C'est la glorification permanente d'un chef par la propagande d'État, qui le présente comme infaillible et indispensable. Exemple : Staline en URSS, dont le portrait et les discours sont omniprésents, ou Hitler, appelé le Führer, présenté comme le sauveur de l'Allemagne.",
          explication: "Le culte de la personnalité est un trait commun aux régimes totalitaires étudiés.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : compare le régime fasciste italien et le régime nazi allemand (une quinzaine de lignes).",
          reponse:
            "Introduction : dans l'entre-deux-guerres, l'Italie et l'Allemagne connaissent l'installation de régimes totalitaires proches par leurs méthodes. Première partie : une arrivée au pouvoir différente mais rapide ; Mussolini s'impose par la marche sur Rome en 1922, Hitler est nommé chancelier en 1933 avant de détruire la démocratie en quelques mois. Deuxième partie : des méthodes communes ; parti unique, culte du chef (le Duce, le Führer), embrigadement de la jeunesse, propagande et répression des opposants. Troisième partie : une radicalisation propre au nazisme ; dès 1935, les lois de Nuremberg puis, en 1938, la Nuit de Cristal, montrent une persécution antisémite plus systématique en Allemagne qu'en Italie à la même période. Conclusion : ces deux régimes partagent la logique totalitaire, mais le nazisme développe très tôt un projet raciste qui le distingue.",
          explication: "On attend une comparaison organisée mobilisant les repères : 1922, 1933, 1935, 1938.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 24 octobre 1929, krach de Wall Street, origine de la crise économique mondiale.",
    "Repère brevet : 1922, Mussolini accède au pouvoir en Italie (marche sur Rome) et instaure le fascisme.",
    "URSS : Staline au pouvoir à partir de 1924, régime totalitaire (collectivisation, plans quinquennaux, Goulag, terreur).",
    "Repère brevet : 30 janvier 1933, Hitler nommé chancelier en Allemagne ; il détruit rapidement la démocratie.",
    "Points communs des totalitarismes : parti unique, culte du chef, propagande et embrigadement, terreur d'État. 1935 : lois de Nuremberg ; 1938 : Nuit de Cristal.",
    "Repère brevet : mai 1936, victoire du Front populaire en France (Léon Blum) — la démocratie française résiste à la crise.",
  ],
},
{
  slug: "seconde-guerre-mondiale",
  titre: "La Seconde Guerre mondiale, une guerre d'anéantissement",
  matiere: "histoire-geo",
  niveau: "3eme",
  description:
    "Comprendre les grandes phases de la Seconde Guerre mondiale (1939-1945), la notion de guerre d'anéantissement, et le génocide des Juifs et des Tsiganes perpétré par l'Allemagne nazie, en retenant les repères exigés au brevet.",
  objectifs: [
    "Connaître les grandes phases de la guerre : 1939, 1941, le tournant de 1942-1943, 1944-1945",
    "Expliquer la notion de guerre d'anéantissement (violence contre les soldats et les civils)",
    "Décrire la persécution puis l'extermination des Juifs et des Tsiganes (la Shoah)",
    "Identifier les repères brevet : 1939, 1941, Stalingrad, 6 juin 1944, 8 mai 1945",
    "Comprendre le bilan de la guerre : bombes atomiques, procès de Nuremberg, ampleur des pertes",
  ],
  slides: [
    {
      titre: "1er septembre 1939 : le début de la guerre",
      illustration: "⚔️",
      visuel: "1er septembre 1939",
      contenu: [
        "1er septembre 1939 : l'Allemagne nazie envahit la Pologne",
        "3 septembre 1939 : la France et le Royaume-Uni déclarent la guerre à l'Allemagne",
        "1940 : « guerre éclair » (Blitzkrieg), l'Allemagne envahit le Danemark, la Norvège, les Pays-Bas, la Belgique et la France",
        "22 juin 1940 : la France signe l'armistice, elle est occupée",
      ],
      voixOff:
        "Le premier septembre 1939, l'Allemagne nazie envahit la Pologne. Deux jours plus tard, la France et le Royaume-Uni lui déclarent la guerre : la Seconde Guerre mondiale commence. En 1940, l'Allemagne mène une guerre éclair, la Blitzkrieg, et envahit rapidement plusieurs pays d'Europe, dont la France, qui signe l'armistice le 22 juin 1940 et se trouve occupée.",
    },
    {
      titre: "1941 : la guerre devient mondiale",
      illustration: "🌐",
      visuel: "Juin et décembre 1941",
      contenu: [
        "22 juin 1941 : l'Allemagne envahit l'URSS (opération Barbarossa), malgré le pacte germano-soviétique de 1939",
        "7 décembre 1941 : le Japon attaque la base américaine de Pearl Harbor",
        "Les États-Unis entrent en guerre contre le Japon puis l'Allemagne",
        "Le conflit devient véritablement mondial, sur plusieurs continents",
      ],
      voixOff:
        "L'année 1941 transforme le conflit européen en guerre mondiale. Le 22 juin, l'Allemagne envahit l'URSS malgré le pacte de non-agression signé en 1939. Le 7 décembre, le Japon attaque par surprise la base américaine de Pearl Harbor. Les États-Unis entrent alors en guerre contre le Japon, puis contre l'Allemagne. Désormais, les combats se déroulent en Europe, en Afrique du Nord, dans le Pacifique et en Asie.",
    },
    {
      titre: "Le tournant de la guerre : Stalingrad",
      illustration: "🔄",
      visuel: "Stalingrad, 1942-1943",
      contenu: [
        "De l'été 1942 à février 1943 : la bataille de Stalingrad, en URSS",
        "L'armée allemande, encerclée, doit capituler en février 1943",
        "Autres victoires alliées : El Alamein (Afrique, 1942), Midway (Pacifique, 1942)",
        "À partir de 1943, l'initiative militaire passe du côté des Alliés",
      ],
      voixOff:
        "Le tournant de la guerre a lieu entre 1942 et 1943. À Stalingrad, en URSS, l'armée allemande, engagée dans une bataille acharnée, se retrouve encerclée et doit capituler en février 1943. Au même moment, les Alliés remportent d'autres victoires décisives, à El Alamein en Afrique et à Midway dans le Pacifique. À partir de 1943, l'initiative militaire change de camp : les Alliés reprennent l'avantage.",
    },
    {
      titre: "La persécution des Juifs et des Tsiganes",
      illustration: "⭐",
      visuel: "Ghettos et persécutions",
      contenu: [
        "Dans les territoires occupés, les nazis persécutent les Juifs : port de l'étoile jaune, spoliations",
        "Les Juifs d'Europe de l'Est sont enfermés dans des ghettos surpeuplés (ex. Varsovie)",
        "Les Tsiganes (Roms) sont eux aussi persécutés et déportés",
        "En France, le régime de Vichy collabore aux persécutions (rafle du Vél d'Hiv, juillet 1942)",
      ],
      voixOff:
        "Partout où ils s'installent, les nazis persécutent les Juifs : port obligatoire de l'étoile jaune, spoliation des biens, interdictions professionnelles. En Europe de l'Est, les Juifs sont enfermés dans des ghettos surpeuplés, comme celui de Varsovie. Les Tsiganes subissent eux aussi des persécutions et des déportations. En France occupée, le régime de Vichy collabore à ces persécutions, comme lors de la rafle du Vél d'Hiv en juillet 1942.",
    },
    {
      titre: "La Shoah : le génocide des Juifs",
      illustration: "🕯️",
      visuel: "1942 : la « Solution finale »",
      contenu: [
        "Janvier 1942 : la conférence de Wannsee organise la « Solution finale », l'extermination des Juifs d'Europe",
        "Des camps de concentration (travail forcé) et des camps d'extermination (mise à mort immédiate) sont créés",
        "Auschwitz-Birkenau, en Pologne, est le plus grand camp d'extermination",
        "Environ 6 millions de Juifs et des centaines de milliers de Tsiganes sont exterminés : c'est la Shoah",
      ],
      voixOff:
        "En janvier 1942, lors de la conférence de Wannsee, les responsables nazis organisent la « Solution finale » : l'extermination systématique des Juifs d'Europe. Des camps de concentration, où l'on exploite les déportés par le travail forcé, et des camps d'extermination, où l'on met à mort immédiatement, sont construits. Le plus grand, Auschwitz-Birkenau, en Pologne, devient le symbole de ce génocide. Environ six millions de Juifs et des centaines de milliers de Tsiganes sont exterminés : c'est la Shoah.",
    },
    {
      titre: "Une guerre d'anéantissement",
      illustration: "💀",
      visuel: "Guerre d'anéantissement",
      contenu: [
        "Violences de masse contre les soldats : combats acharnés, prisonniers maltraités ou exécutés",
        "Bombardements massifs de villes (Londres, Dresde, villes japonaises) qui tuent des civils par milliers",
        "Massacres de populations civiles (ex. Oradour-sur-Glane, juin 1944, en France)",
        "Volonté d'anéantir totalement l'adversaire, y compris ses civils : c'est une guerre d'anéantissement",
      ],
      voixOff:
        "La Seconde Guerre mondiale est une guerre d'anéantissement : elle vise à détruire totalement l'adversaire, y compris les populations civiles. Les combats sont d'une violence extrême, les prisonniers sont parfois exécutés. Les bombardements massifs frappent des villes entières, comme Londres, Dresde ou les villes japonaises. En France, le massacre d'Oradour-sur-Glane, en juin 1944, illustre la violence exercée contre les civils.",
    },
    {
      titre: "6 juin 1944 : le débarquement",
      illustration: "🚢",
      visuel: "6 juin 1944, Normandie",
      contenu: [
        "6 juin 1944 : débarquement des Alliés en Normandie (« D-Day »)",
        "L'Armée rouge, à l'est, repousse les Allemands vers Berlin",
        "25 août 1944 : libération de Paris",
        "L'Allemagne est prise en étau entre les Alliés à l'ouest et l'URSS à l'est",
      ],
      voixOff:
        "Le 6 juin 1944, les Alliés débarquent en Normandie : c'est le début de la libération de l'Europe de l'Ouest. À l'est, l'Armée rouge repousse les troupes allemandes en direction de Berlin. Paris est libérée le 25 août 1944. Prise en étau entre les Alliés occidentaux et l'URSS, l'Allemagne nazie recule sur tous les fronts.",
    },
    {
      titre: "1945 : la fin de la guerre",
      illustration: "☮️",
      visuel: "8 mai 1945 → 2 septembre 1945",
      contenu: [
        "8 mai 1945 : capitulation de l'Allemagne, après la prise de Berlin par l'Armée rouge",
        "6 et 9 août 1945 : les États-Unis lancent des bombes atomiques sur Hiroshima et Nagasaki",
        "2 septembre 1945 : capitulation du Japon, fin de la guerre",
        "1945-1946 : le procès de Nuremberg juge les dirigeants nazis pour crimes contre l'humanité",
      ],
      voixOff:
        "Le 8 mai 1945, l'Allemagne capitule après la prise de Berlin par l'Armée rouge. Dans le Pacifique, le Japon continue de résister. Pour l'obliger à capituler, les États-Unis lancent deux bombes atomiques, sur Hiroshima le 6 août puis sur Nagasaki le 9 août 1945. Le Japon capitule le 2 septembre 1945 : la guerre est terminée. À partir de 1945, le procès de Nuremberg juge les principaux dirigeants nazis pour crimes contre l'humanité.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1939-1945 : la guerre commence en Europe puis devient mondiale en 1941",
        "Tournant de la guerre : Stalingrad (1942-1943)",
        "La Shoah : extermination d'environ 6 millions de Juifs, décidée à Wannsee en janvier 1942",
        "6 juin 1944 : débarquement ; 8 mai 1945 : capitulation allemande ; 2 septembre 1945 : capitulation japonaise",
        "Bilan : environ 60 millions de morts, en majorité des civils",
      ],
      voixOff:
        "Résumons. La Seconde Guerre mondiale commence le 1er septembre 1939 avec l'invasion de la Pologne et devient mondiale en 1941. La bataille de Stalingrad, entre 1942 et 1943, marque le tournant du conflit en faveur des Alliés. C'est une guerre d'anéantissement, marquée par la Shoah, l'extermination d'environ six millions de Juifs organisée à partir de 1942. Le débarquement du 6 juin 1944 ouvre la voie à la libération de l'Europe. La guerre s'achève avec la capitulation allemande le 8 mai 1945, puis japonaise le 2 septembre 1945, après les bombes atomiques d'Hiroshima et Nagasaki. Avec environ soixante millions de morts, c'est le conflit le plus meurtrier de l'histoire. Bravo, tu es prêt pour le brevet sur ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "La Seconde Guerre mondiale (1939-1945) est une guerre d'anéantissement d'une violence inédite, marquée par la Shoah, le génocide des Juifs d'Europe, et qui s'achève sur un bilan humain sans précédent.",
    sections: [
      {
        titre: "Les grandes phases de la guerre",
        points: [
          "1er septembre 1939 : invasion de la Pologne, début de la guerre ; 1940 : guerre éclair, occupation de la France",
          "1941 : la guerre devient mondiale (invasion de l'URSS en juin, Pearl Harbor en décembre)",
          "1942-1943 : tournant de la guerre, bataille de Stalingrad",
          "1944-1945 : débarquement (6 juin 1944), libération de l'Europe, capitulations allemande (8 mai 1945) et japonaise (2 septembre 1945)",
        ],
      },
      {
        titre: "Une guerre d'anéantissement",
        points: [
          "Violences de masse contre les soldats et prisonniers, bombardements massifs de villes",
          "Massacres de civils (ex. Oradour-sur-Glane, juin 1944)",
          "Volonté de détruire totalement l'adversaire, y compris les populations civiles",
        ],
      },
      {
        titre: "La Shoah, génocide des Juifs",
        points: [
          "Persécutions dès 1933-1935, puis ghettos en Europe de l'Est",
          "Janvier 1942 : conférence de Wannsee, décision de la « Solution finale »",
          "Camps de concentration et d'extermination (Auschwitz-Birkenau) ; environ 6 millions de Juifs et des centaines de milliers de Tsiganes exterminés",
          "En France : collaboration du régime de Vichy (rafle du Vél d'Hiv, juillet 1942)",
        ],
      },
      {
        titre: "Bilan et sortie de guerre",
        points: [
          "Environ 60 millions de morts, en majorité des civils",
          "6 et 9 août 1945 : bombes atomiques sur Hiroshima et Nagasaki",
          "Procès de Nuremberg (1945-1946) : les crimes contre l'humanité sont jugés pour la première fois",
        ],
      },
    ],
    audio:
      "Fiche de révision : la Seconde Guerre mondiale, une guerre d'anéantissement. Le 1er septembre 1939, l'Allemagne nazie envahit la Pologne : la guerre commence. En 1940, la France est vaincue et occupée. En 1941, le conflit devient mondial avec l'invasion de l'URSS et l'entrée en guerre des États-Unis après Pearl Harbor. Entre 1942 et 1943, la bataille de Stalingrad marque le tournant de la guerre en faveur des Alliés. C'est une guerre d'anéantissement : bombardements massifs, massacres de civils comme à Oradour-sur-Glane, et surtout la Shoah, décidée lors de la conférence de Wannsee en janvier 1942, qui extermine environ six millions de Juifs et des centaines de milliers de Tsiganes dans des camps comme Auschwitz-Birkenau. Le débarquement du 6 juin 1944 ouvre la libération de l'Europe. L'Allemagne capitule le 8 mai 1945 ; après les bombes atomiques d'Hiroshima et Nagasaki, le Japon capitule le 2 septembre 1945. Le bilan, environ soixante millions de morts, fait de ce conflit le plus meurtrier de l'histoire, jugé ensuite lors du procès de Nuremberg.",
  },
  memoCards: [
    { recto: "Quelle date marque le début de la Seconde Guerre mondiale ?", verso: "Le 1er septembre 1939 : l'Allemagne nazie envahit la Pologne." },
    { recto: "Quels événements font basculer la guerre en 1941 ?", verso: "L'invasion de l'URSS par l'Allemagne (22 juin) et l'attaque japonaise sur Pearl Harbor (7 décembre), qui fait entrer les États-Unis en guerre." },
    { recto: "Quelle bataille marque le tournant de la guerre ?", verso: "La bataille de Stalingrad (été 1942 - février 1943) : l'armée allemande capitule, l'initiative passe aux Alliés." },
    { recto: "Qu'est-ce que la Shoah ?", verso: "Le génocide des Juifs d'Europe par l'Allemagne nazie, décidé lors de la conférence de Wannsee (janvier 1942) : environ 6 millions de morts." },
    { recto: "Quelle est la différence entre camp de concentration et camp d'extermination ?", verso: "Le camp de concentration exploite les déportés par le travail forcé ; le camp d'extermination (ex. Auschwitz-Birkenau) est conçu pour la mise à mort immédiate et systématique." },
    { recto: "Que se passe-t-il le 6 juin 1944 ?", verso: "Le débarquement allié en Normandie, qui ouvre la libération de l'Europe de l'Ouest." },
    { recto: "Quelles sont les dates des capitulations en 1945 ?", verso: "8 mai 1945 : capitulation allemande. 2 septembre 1945 : capitulation japonaise, après les bombes atomiques d'Hiroshima (6 août) et Nagasaki (9 août)." },
    { recto: "Qu'est-ce que le procès de Nuremberg ?", verso: "Le procès (1945-1946) où les Alliés jugent les principaux dirigeants nazis pour crimes contre l'humanité, une notion juridique créée à cette occasion." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel pays est envahi le 1er septembre 1939, déclenchant la Seconde Guerre mondiale ?",
      choix: ["La France", "La Pologne", "L'URSS", "La Belgique"],
      bonneReponse: 1,
      explication: "L'invasion allemande de la Pologne le 1er septembre 1939 provoque la déclaration de guerre franco-britannique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle attaque fait entrer les États-Unis dans la guerre en décembre 1941 ?",
      choix: ["L'invasion de l'URSS", "L'attaque de Pearl Harbor", "Le débarquement de Normandie", "La bataille de Stalingrad"],
      bonneReponse: 1,
      explication: "Le 7 décembre 1941, le Japon attaque la base navale américaine de Pearl Harbor.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quelle date a lieu le débarquement allié en Normandie ?",
      reponse: "Le 6 juin 1944.",
      explication: "C'est un repère de date exigé au brevet, qui marque le début de la libération de l'Europe de l'Ouest.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel camp est le symbole de l'extermination des Juifs ?",
      choix: ["Le Vél d'Hiv", "Auschwitz-Birkenau", "Verdun", "Oradour-sur-Glane"],
      bonneReponse: 1,
      explication: "Auschwitz-Birkenau, en Pologne occupée, est le plus grand camp de concentration et d'extermination nazi.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle bataille marque le tournant de la guerre en 1942-1943 ?",
      choix: ["La bataille de la Marne", "La bataille de Stalingrad", "Le débarquement de Normandie", "La bataille d'Angleterre"],
      bonneReponse: 1,
      explication: "L'encerclement et la capitulation de l'armée allemande à Stalingrad, en février 1943, marquent le début du recul allemand.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que la conférence de Wannsee (janvier 1942) ?",
      reponse:
        "C'est une réunion de hauts responsables nazis qui organise la « Solution finale », c'est-à-dire l'extermination systématique et industrielle des Juifs d'Europe.",
      explication: "Cette conférence marque le passage de la persécution des Juifs à leur extermination planifiée.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est une guerre d'anéantissement et donne un exemple.",
      reponse:
        "C'est une guerre qui vise à détruire totalement l'adversaire, y compris les populations civiles, et non plus seulement à vaincre son armée. Exemple : le massacre d'Oradour-sur-Glane en juin 1944, où des civils français sont exécutés par des soldats allemands, ou les bombardements massifs de villes comme Dresde.",
      explication: "Cette notion distingue la Seconde Guerre mondiale des conflits antérieurs par l'ampleur de la violence contre les civils.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que se passe-t-il le 8 mai 1945 ?",
      choix: ["La capitulation du Japon", "La capitulation de l'Allemagne", "Le débarquement de Normandie", "La conférence de Wannsee"],
      bonneReponse: 1,
      explication: "L'Allemagne capitule le 8 mai 1945, après la prise de Berlin par l'Armée rouge.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique le rôle du régime de Vichy dans les persécutions antisémites en France.",
      reponse:
        "Le régime de Vichy, dirigé par le maréchal Pétain, collabore avec l'occupant allemand. Il fait recenser les Juifs, promulgue des lois d'exclusion (statut des Juifs, 1940) et participe activement à leur arrestation : la police française organise par exemple la rafle du Vél d'Hiv en juillet 1942, qui conduit des milliers de Juifs, dont des enfants, vers les camps.",
      explication: "La collaboration d'État distingue la France occupée d'autres pays où l'administration nationale résistait davantage aux exigences nazies.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que la Seconde Guerre mondiale a un bilan humain sans précédent ?",
      reponse:
        "Le conflit fait environ 60 millions de morts, en majorité des civils, à cause des bombardements massifs, des massacres, des famines provoquées par la guerre et surtout de la Shoah, qui extermine environ 6 millions de Juifs et des centaines de milliers de Tsiganes. Ce bilan dépasse largement celui de la Première Guerre mondiale et inclut, pour la première fois à cette échelle, un génocide industrialisé.",
      explication: "L'ampleur des pertes civiles et l'existence d'un génocide planifié caractérisent la nouveauté de cette guerre par rapport à 1914-1918.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi les États-Unis lancent-ils des bombes atomiques sur Hiroshima et Nagasaki en août 1945 ?",
      choix: [
        "Pour empêcher l'URSS d'entrer en guerre contre l'Allemagne",
        "Pour obtenir la capitulation rapide du Japon, qui continuait de résister",
        "Pour libérer la France",
        "Pour venger la bataille de Stalingrad",
      ],
      bonneReponse: 1,
      explication: "Après la capitulation allemande, le Japon continue le combat dans le Pacifique ; les bombes du 6 et du 9 août 1945 précipitent sa capitulation, le 2 septembre 1945.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Méthode brevet : tu analyses un témoignage de survivant d'un camp d'extermination. Quelles étapes suis-tu ?",
      reponse:
        "1) Présenter le document : nature (témoignage), auteur (un survivant), date (souvent écrit après-guerre), contexte (la Shoah). 2) Décrire ce qu'il raconte : arrestation, déportation, conditions de vie dans le camp, violence. 3) Expliquer avec ses connaissances : Solution finale décidée à Wannsee en 1942, distinction camps de concentration/extermination, ampleur du génocide. 4) Porter un regard critique : témoignage précieux car vécu, mais mémoire individuelle, parfois écrite longtemps après les faits.",
      explication: "Au brevet, on attend : présenter, décrire, expliquer avec le cours, puis discuter la nature et les limites du document.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle date marque le début de la Seconde Guerre mondiale ?",
      choix: ["1er septembre 1939", "22 juin 1941", "6 juin 1944", "8 mai 1945"],
      bonneReponse: 0,
      explication: "L'invasion de la Pologne le 1er septembre 1939 déclenche la guerre.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle bataille marque le tournant de la guerre en Europe ?",
      reponse: "La bataille de Stalingrad (1942-1943).",
      explication: "Repère brevet essentiel : après Stalingrad, les Allemands reculent sur le front de l'Est.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que la Shoah ?",
      reponse: "Le génocide des Juifs d'Europe par l'Allemagne nazie, environ 6 millions de morts, organisé dans des camps comme Auschwitz-Birkenau.",
      explication: "La Shoah est décidée lors de la conférence de Wannsee en janvier 1942.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quand a lieu la capitulation du Japon ?",
      choix: ["8 mai 1945", "6 juin 1944", "2 septembre 1945", "1er septembre 1939"],
      bonneReponse: 2,
      explication: "Après les bombes atomiques d'Hiroshima et Nagasaki, le Japon capitule le 2 septembre 1945.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de massacre de civils commis pendant la guerre.",
      reponse: "Le massacre d'Oradour-sur-Glane, en juin 1944, où des soldats allemands exécutent les habitants du village.",
      explication: "Ce massacre illustre la violence de la guerre d'anéantissement contre les populations civiles.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La Seconde Guerre mondiale, une guerre d'anéantissement",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel pays envahit la Pologne le 1er septembre 1939 ?",
          choix: ["La France", "L'Allemagne nazie", "L'URSS", "Le Royaume-Uni"],
          bonneReponse: 1,
          explication: "L'invasion allemande de la Pologne déclenche la Seconde Guerre mondiale.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quels deux événements de 1941 rendent la guerre mondiale ?",
          reponse: "L'invasion de l'URSS par l'Allemagne (juin 1941) et l'attaque japonaise sur Pearl Harbor (décembre 1941), qui fait entrer les États-Unis en guerre.",
          explication: "À partir de 1941, les combats se déroulent sur plusieurs continents.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que sont les camps d'extermination comme Auschwitz-Birkenau ?",
          choix: [
            "Des camps de prisonniers de guerre",
            "Des lieux conçus pour la mise à mort systématique des déportés",
            "Des usines d'armement",
            "Des ghettos urbains",
          ],
          bonneReponse: 1,
          explication: "Contrairement aux camps de concentration axés sur le travail forcé, les camps d'extermination sont conçus pour tuer en masse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce que décide la conférence de Wannsee en janvier 1942.",
          reponse: "Des hauts responsables nazis y organisent la « Solution finale » : l'extermination systématique et planifiée des Juifs d'Europe.",
          explication: "Cette conférence marque le basculement vers un génocide industrialisé.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris le déroulement du débarquement de Normandie et ses conséquences.",
          reponse:
            "Le 6 juin 1944, les Alliés débarquent sur les plages de Normandie. Ils repoussent progressivement les troupes allemandes et libèrent Paris le 25 août 1944. C'est le début de la libération de l'Europe de l'Ouest, tandis que l'Armée rouge avance à l'est.",
          explication: "Le débarquement ouvre un second front à l'ouest, en plus du front de l'Est où recule déjà l'Allemagne.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que la Seconde Guerre mondiale est une guerre d'anéantissement, en t'appuyant sur l'exemple de la Shoah (une vingtaine de lignes).",
          reponse:
            "Introduction : entre 1939 et 1945, la guerre atteint un degré de violence inédit qui vise l'anéantissement total de l'adversaire, y compris les civils. Première partie : une violence généralisée contre les populations ; bombardements massifs de villes, massacres comme celui d'Oradour-sur-Glane en juin 1944. Deuxième partie : la Shoah, sommet de cette violence ; dès 1940, les Juifs sont persécutés (étoile jaune, ghettos) ; en janvier 1942, la conférence de Wannsee décide la « Solution finale » ; des camps d'extermination comme Auschwitz-Birkenau organisent la mise à mort industrielle d'environ six millions de Juifs et de centaines de milliers de Tsiganes. Troisième partie : une violence organisée par les États ; le régime nazi planifie ce génocide avec l'aide de collaborateurs, comme le régime de Vichy en France lors de la rafle du Vél d'Hiv en 1942. Conclusion : par l'ampleur des violences contre les civils et l'existence d'un génocide planifié, la Seconde Guerre mondiale est bien une guerre d'anéantissement.",
          explication: "Le développement doit mobiliser les repères : Wannsee 1942, Auschwitz-Birkenau, Vél d'Hiv, Oradour-sur-Glane.",
        },
      ],
    },
    {
      titre: "Examen 2 — La Seconde Guerre mondiale, une guerre d'anéantissement",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle bataille marque le tournant de la guerre entre 1942 et 1943 ?",
          choix: ["La bataille de Verdun", "La bataille de Stalingrad", "La bataille de la Marne", "La bataille d'Angleterre"],
          bonneReponse: 1,
          explication: "L'encerclement et la reddition de l'armée allemande à Stalingrad marquent le début du recul allemand.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la Shoah ?",
          reponse: "Le génocide des Juifs d'Europe par l'Allemagne nazie, qui fait environ 6 millions de morts entre 1941 et 1945.",
          explication: "La Shoah est organisée à partir de la conférence de Wannsee (janvier 1942).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que se passe-t-il les 6 et 9 août 1945 ?",
          choix: [
            "Le débarquement de Normandie",
            "La capitulation de l'Allemagne",
            "Les bombardements atomiques d'Hiroshima et de Nagasaki",
            "La conférence de Wannsee",
          ],
          bonneReponse: 2,
          explication: "Ces bombardements atomiques précipitent la capitulation du Japon, le 2 septembre 1945.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que le procès de Nuremberg et pourquoi est-il important ?",
          reponse:
            "C'est le procès, entre 1945 et 1946, où les Alliés jugent les principaux dirigeants nazis. Il est important car il crée la notion juridique de « crime contre l'humanité », permettant de juger l'organisation de la Shoah et les autres crimes du régime nazi.",
          explication: "Ce procès marque la naissance du droit pénal international moderne.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris les persécutions subies par les Juifs avant la mise en place de la « Solution finale ».",
          reponse:
            "Dès les années 1930 en Allemagne (lois de Nuremberg, 1935), puis dans les territoires occupés à partir de 1940 : port obligatoire de l'étoile jaune, spoliation des biens, interdictions professionnelles, enfermement dans des ghettos surpeuplés en Europe de l'Est, comme à Varsovie.",
          explication: "Ces persécutions précèdent et préparent le passage à l'extermination systématique décidée en 1942.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : raconte les grandes phases de la Seconde Guerre mondiale, de 1939 à 1945 (une vingtaine de lignes).",
          reponse:
            "Introduction : de 1939 à 1945, le conflit passe par plusieurs phases avant la victoire des Alliés. Première partie : les victoires de l'Axe (1939-1941) ; l'Allemagne envahit la Pologne en septembre 1939, puis mène une guerre éclair qui soumet une grande partie de l'Europe, dont la France en 1940. Deuxième partie : la guerre devient mondiale et bascule (1941-1943) ; l'invasion de l'URSS et l'attaque de Pearl Harbor élargissent le conflit en 1941, avant que la défaite allemande à Stalingrad, en février 1943, ne marque le tournant. Troisième partie : la victoire des Alliés (1944-1945) ; le débarquement de Normandie, le 6 juin 1944, ouvre la libération de l'Europe de l'Ouest tandis que l'Armée rouge progresse à l'est ; l'Allemagne capitule le 8 mai 1945, puis le Japon le 2 septembre 1945, après les bombes atomiques. Conclusion : cette guerre, la plus meurtrière de l'histoire avec environ soixante millions de morts, s'achève par la défaite totale des puissances de l'Axe.",
          explication: "On attend une chronologie précise mobilisant les repères : 1939, 1941, 1943, 6 juin 1944, 8 mai 1945, 2 septembre 1945.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 1er septembre 1939, invasion de la Pologne, début de la Seconde Guerre mondiale ; la France capitule le 22 juin 1940.",
    "Repère brevet : 1941, la guerre devient mondiale (invasion de l'URSS en juin, Pearl Harbor en décembre).",
    "Repère brevet : bataille de Stalingrad (1942-1943), tournant de la guerre en faveur des Alliés.",
    "La Shoah : conférence de Wannsee (janvier 1942), extermination d'environ 6 millions de Juifs et de Tsiganes dans des camps comme Auschwitz-Birkenau — une guerre d'anéantissement.",
    "Repère brevet : 6 juin 1944, débarquement en Normandie ; libération de Paris le 25 août 1944.",
    "Repères brevet : 8 mai 1945, capitulation allemande ; 6 et 9 août 1945, bombes atomiques ; 2 septembre 1945, capitulation japonaise. Bilan : environ 60 millions de morts.",
  ],
},
{
  slug: "union-europeenne",
  titre: "La France et l'Union européenne",
  matiere: "histoire-geo",
  niveau: "3eme",
  description:
    "Comprendre les grandes étapes de la construction européenne depuis 1951, le fonctionnement des institutions de l'Union européenne, la place de la France dans l'UE, ainsi que les avantages et les limites de cette construction commune.",
  objectifs: [
    "Retracer les grandes étapes de la construction européenne : CECA (1951), traité de Rome (1957), traité de Maastricht (1992)",
    "Identifier les principales institutions de l'Union européenne et leur rôle",
    "Comprendre les avantages concrets de l'UE pour la France : marché unique, euro, espace Schengen, politique agricole commune",
    "Analyser la place et le poids de la France, État fondateur, au sein de l'Union européenne",
    "Identifier les limites et les défis actuels de la construction européenne (Brexit, décisions communes, disparités)",
  ],
  slides: [
    {
      titre: "Pourquoi construire l'Europe après 1945 ?",
      illustration: "🕊️",
      visuel: "Après 1945 : plus jamais la guerre",
      contenu: [
        "Après deux guerres mondiales, l'Europe est ruinée et divisée",
        "Objectif : garantir la paix entre des pays qui se sont longtemps affrontés, en particulier la France et l'Allemagne",
        "Idée : lier les économies européennes pour rendre la guerre impossible entre elles",
        "Le contexte de la guerre froide encourage aussi l'union des pays d'Europe de l'Ouest",
      ],
      voixOff:
        "Après les destructions de deux guerres mondiales, les pays d'Europe cherchent à garantir une paix durable, en particulier entre la France et l'Allemagne, qui se sont affrontées à plusieurs reprises. L'idée centrale est de lier étroitement les économies européennes pour rendre une nouvelle guerre impossible entre elles. Le contexte de la guerre froide, qui divise le continent, encourage également les pays d'Europe de l'Ouest à s'unir.",
    },
    {
      titre: "1951-1957 : les débuts de la construction européenne",
      illustration: "⚙️",
      visuel: "1951 : CECA — 1957 : traité de Rome",
      contenu: [
        "1951 : traité de Paris, création de la Communauté européenne du charbon et de l'acier (CECA), six pays fondateurs",
        "La CECA met en commun les productions de charbon et d'acier, ressources essentielles à la guerre",
        "1957 : traité de Rome, création de la Communauté économique européenne (CEE)",
        "Objectif de la CEE : créer un marché commun, sans droits de douane entre les pays membres",
      ],
      voixOff:
        "En 1951, le traité de Paris crée la Communauté européenne du charbon et de l'acier, la CECA, qui rassemble six pays fondateurs, dont la France et l'Allemagne. En mettant en commun ces ressources essentielles à l'industrie de guerre, l'objectif est de rendre un nouveau conflit impossible. En 1957, le traité de Rome va plus loin en créant la Communauté économique européenne, la CEE, qui vise à établir un marché commun, sans droits de douane entre les pays membres.",
    },
    {
      titre: "Élargissements et approfondissement",
      illustration: "➕",
      visuel: "De 6 à 27 pays membres",
      contenu: [
        "La Communauté européenne s'élargit progressivement : Royaume-Uni, Irlande, Danemark (1973), Espagne, Portugal (1986)...",
        "1995 : entrée de l'Autriche, de la Finlande et de la Suède",
        "2004 : élargissement majeur vers l'Europe centrale et orientale (10 nouveaux pays)",
        "Aujourd'hui, l'Union européenne compte 27 États membres",
      ],
      voixOff:
        "Au fil des décennies, la Communauté européenne s'élargit à de nouveaux pays : le Royaume-Uni, l'Irlande et le Danemark en 1973, l'Espagne et le Portugal en 1986, puis l'Autriche, la Finlande et la Suède en 1995. En 2004, un élargissement majeur intègre dix nouveaux pays d'Europe centrale et orientale, qui avaient longtemps appartenu au bloc communiste. Aujourd'hui, l'Union européenne rassemble vingt-sept États membres.",
    },
    {
      titre: "1992 : le traité de Maastricht",
      illustration: "🇪🇺",
      visuel: "Traité de Maastricht, 1992",
      contenu: [
        "1992 : le traité de Maastricht transforme la CEE en Union européenne (UE)",
        "Il crée une citoyenneté européenne, en plus de la citoyenneté nationale",
        "Il prépare la création d'une monnaie unique, l'euro",
        "L'UE développe des compétences au-delà de l'économie : environnement, sécurité, justice",
      ],
      voixOff:
        "En 1992, le traité de Maastricht marque une étape décisive : il transforme la Communauté économique européenne en Union européenne. Il crée une citoyenneté européenne, qui s'ajoute à la citoyenneté nationale de chaque habitant, et prépare la création d'une monnaie unique. L'Union européenne développe alors des compétences qui dépassent largement le seul domaine économique, comme l'environnement, la sécurité ou la justice.",
    },
    {
      titre: "L'euro et l'espace Schengen",
      illustration: "💶",
      visuel: "Euro (2002) — Schengen",
      contenu: [
        "1er janvier 2002 : l'euro devient la monnaie de la plupart des pays de l'UE, dont la France",
        "L'espace Schengen supprime les contrôles aux frontières entre les pays qui en font partie",
        "Ces deux outils facilitent la libre circulation des personnes, des biens et des capitaux",
        "Tous les pays de l'UE n'utilisent pas l'euro ni ne font partie de l'espace Schengen",
      ],
      voixOff:
        "Le 1er janvier 2002, l'euro devient la monnaie utilisée par la plupart des pays de l'Union européenne, dont la France, remplaçant le franc. L'espace Schengen, quant à lui, supprime les contrôles aux frontières entre les pays qui y participent, ce qui facilite grandement les déplacements. Ensemble, l'euro et l'espace Schengen symbolisent la libre circulation des personnes, des biens et des capitaux au sein de l'Union, même si tous les États membres n'y participent pas.",
    },
    {
      titre: "Les institutions de l'Union européenne",
      illustration: "🏛️",
      visuel: "Parlement, Commission, Conseil",
      contenu: [
        "Le Parlement européen : élu au suffrage universel par les citoyens européens, vote les lois",
        "La Commission européenne : propose les lois et veille à leur application",
        "Le Conseil de l'Union européenne et le Conseil européen : représentent les États membres",
        "Ces institutions travaillent ensemble pour décider des politiques communes",
      ],
      voixOff:
        "L'Union européenne fonctionne grâce à plusieurs institutions. Le Parlement européen, élu directement par les citoyens de tous les pays membres, vote les lois européennes. La Commission européenne propose ces lois et veille à leur bonne application. Le Conseil de l'Union européenne et le Conseil européen réunissent les représentants des gouvernements des États membres. Ensemble, ces institutions décident des politiques communes de l'Union.",
    },
    {
      titre: "La France, État fondateur au cœur de l'UE",
      illustration: "🇫🇷",
      visuel: "La France dans l'UE",
      contenu: [
        "La France est l'un des six États fondateurs de la construction européenne",
        "Elle bénéficie fortement de la politique agricole commune (PAC), qui soutient les agriculteurs",
        "Elle reçoit aussi des fonds européens (comme le FEDER) pour ses régions les moins développées",
        "La France a le siège du Parlement européen à Strasbourg",
      ],
      voixOff:
        "La France est l'un des six États fondateurs de la construction européenne. Elle est l'une des principales bénéficiaires de la politique agricole commune, qui soutient financièrement les agriculteurs européens. Elle reçoit également des fonds européens pour développer certaines de ses régions. Symbole de cette place centrale, le Parlement européen tient une partie de ses séances à Strasbourg, en France.",
    },
    {
      titre: "Les limites et les défis de l'Union européenne",
      illustration: "⚠️",
      visuel: "Brexit, 2020",
      contenu: [
        "Les décisions communes sont parfois difficiles à prendre entre 27 États aux intérêts différents",
        "31 janvier 2020 : le Royaume-Uni quitte l'Union européenne, c'est le « Brexit »",
        "Des inégalités de développement subsistent entre les régions de l'UE",
        "L'UE doit aussi répondre à de nouveaux défis : migrations, climat, sécurité",
      ],
      voixOff:
        "L'Union européenne rencontre aussi des limites. Prendre des décisions communes entre vingt-sept États, aux intérêts parfois très différents, n'est pas toujours facile. Le 31 janvier 2020, le Royaume-Uni quitte officiellement l'Union européenne : c'est le Brexit, une première dans l'histoire de la construction européenne. Des inégalités de développement subsistent également entre les régions de l'Union, qui doit aussi faire face à de nouveaux défis, comme les migrations, le changement climatique ou la sécurité.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1951 : CECA ; 1957 : traité de Rome, CEE ; 1992 : traité de Maastricht, naissance de l'UE",
        "2002 : mise en circulation de l'euro ; espace Schengen : libre circulation des personnes",
        "Institutions : Parlement européen, Commission européenne, Conseil de l'UE",
        "La France, État fondateur, bénéficie de la PAC et des fonds européens",
        "2020 : Brexit, le Royaume-Uni quitte l'UE — l'Union doit relever de nouveaux défis",
      ],
      voixOff:
        "Résumons. La construction européenne débute en 1951 avec la CECA, se poursuit avec le traité de Rome en 1957, puis franchit une étape décisive en 1992 avec le traité de Maastricht, qui crée l'Union européenne. L'euro, en circulation depuis 2002, et l'espace Schengen facilitent la vie quotidienne des citoyens européens. Les institutions, Parlement, Commission et Conseil, décident ensemble des politiques communes. La France, État fondateur, occupe une place centrale dans l'UE, notamment grâce à la politique agricole commune. Mais l'Union rencontre aussi des limites, illustrées par le Brexit en 2020. Bravo, tu es prêt pour le brevet sur ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "Depuis 1951, la construction européenne unit progressivement les pays d'Europe pour garantir la paix et développer une intégration économique et politique de plus en plus poussée, dont la France, État fondateur, est un acteur central.",
    sections: [
      {
        titre: "Les grandes étapes de la construction européenne",
        points: [
          "1951 : traité de Paris, création de la CECA (six pays fondateurs, dont la France)",
          "1957 : traité de Rome, création de la Communauté économique européenne (CEE), marché commun",
          "1992 : traité de Maastricht, naissance de l'Union européenne (UE), citoyenneté européenne",
          "Élargissements successifs : de 6 pays en 1957 à 27 pays aujourd'hui",
        ],
      },
      {
        titre: "Une intégration économique poussée",
        points: [
          "2002 : mise en circulation de l'euro, monnaie unique de la plupart des pays de l'UE",
          "Espace Schengen : suppression des contrôles aux frontières internes",
          "Politique agricole commune (PAC) : soutien financier aux agriculteurs européens",
        ],
      },
      {
        titre: "Le fonctionnement des institutions européennes",
        points: [
          "Le Parlement européen : élu au suffrage universel, vote les lois",
          "La Commission européenne : propose les lois, veille à leur application",
          "Le Conseil de l'UE et le Conseil européen : représentent les gouvernements des États membres",
        ],
      },
      {
        titre: "La France dans l'UE : atouts et défis communs",
        points: [
          "La France, État fondateur, bénéficie fortement de la PAC et des fonds européens",
          "Le Parlement européen siège en partie à Strasbourg",
          "Défis : décisions communes difficiles, disparités régionales, Brexit (2020), migrations, climat",
        ],
      },
    ],
    audio:
      "Fiche de révision : la France et l'Union européenne. Après les destructions de la Seconde Guerre mondiale, les pays d'Europe cherchent à garantir la paix en unissant leurs économies. En 1951, le traité de Paris crée la Communauté européenne du charbon et de l'acier, avec six pays fondateurs dont la France. En 1957, le traité de Rome crée la Communauté économique européenne et son marché commun. En 1992, le traité de Maastricht transforme cette communauté en Union européenne, qui compte aujourd'hui vingt-sept États membres après plusieurs élargissements. Depuis 2002, l'euro est la monnaie de la plupart des pays membres, et l'espace Schengen permet la libre circulation des personnes sans contrôle aux frontières internes. L'Union européenne fonctionne grâce à ses institutions : le Parlement européen, élu par les citoyens, la Commission européenne, qui propose les lois, et le Conseil de l'Union européenne, qui représente les gouvernements. La France, État fondateur, occupe une place centrale, notamment grâce à la politique agricole commune. Mais l'Union européenne rencontre aussi des limites, comme le montre le départ du Royaume-Uni en 2020, le Brexit, et doit relever de nouveaux défis communs comme les migrations ou le changement climatique.",
  },
  memoCards: [
    { recto: "Pourquoi les pays d'Europe s'unissent-ils après 1945 ?", verso: "Pour garantir la paix, notamment entre la France et l'Allemagne, en liant étroitement leurs économies." },
    { recto: "Qu'est-ce que la CECA (1951) ?", verso: "La Communauté européenne du charbon et de l'acier, créée par six pays fondateurs (dont la France), qui met en commun ces ressources stratégiques." },
    { recto: "Que crée le traité de Rome (1957) ?", verso: "La Communauté économique européenne (CEE) et un marché commun sans droits de douane entre les pays membres." },
    { recto: "Que change le traité de Maastricht (1992) ?", verso: "Il transforme la CEE en Union européenne (UE), crée la citoyenneté européenne et prépare la monnaie unique." },
    { recto: "Depuis quand l'euro est-il en circulation ?", verso: "Depuis le 1er janvier 2002, dans la plupart des pays de l'UE, dont la France." },
    { recto: "Quelles sont les principales institutions de l'UE ?", verso: "Le Parlement européen (élu, vote les lois), la Commission européenne (propose les lois) et le Conseil de l'UE (représente les États membres)." },
    { recto: "Qu'est-ce que la politique agricole commune (PAC) ?", verso: "Une politique européenne qui soutient financièrement les agriculteurs ; la France en est l'une des principales bénéficiaires." },
    { recto: "Qu'est-ce que le Brexit ?", verso: "Le départ du Royaume-Uni de l'Union européenne, effectif le 31 janvier 2020." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année la CECA est-elle créée ?",
      choix: ["1945", "1951", "1957", "1992"],
      bonneReponse: 1,
      explication: "Le traité de Paris crée la Communauté européenne du charbon et de l'acier en 1951.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que crée le traité de Rome en 1957 ?",
      choix: ["L'Union européenne", "La Communauté économique européenne (CEE)", "L'euro", "L'espace Schengen"],
      bonneReponse: 1,
      explication: "La CEE établit un marché commun entre les pays membres, sans droits de douane.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Depuis quelle année l'euro est-il en circulation ?",
      reponse: "Depuis le 1er janvier 2002.",
      explication: "L'euro remplace les monnaies nationales, dont le franc en France.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de pays étaient membres fondateurs de la construction européenne en 1951 et 1957 ?",
      choix: ["Deux", "Six", "Douze", "Vingt-sept"],
      bonneReponse: 1,
      explication: "Six pays, dont la France et l'Allemagne, fondent la CECA en 1951 puis la CEE en 1957.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que crée le traité de Maastricht en 1992 ?",
      choix: ["La CECA", "L'Union européenne (UE) et la citoyenneté européenne", "L'espace Schengen uniquement", "Le Brexit"],
      bonneReponse: 1,
      explication: "Le traité de Maastricht transforme la CEE en Union européenne et prépare la monnaie unique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel est le rôle du Parlement européen ?",
      reponse: "Élu au suffrage universel direct par les citoyens des pays membres, il vote les lois européennes, aux côtés du Conseil de l'Union européenne.",
      explication: "C'est la seule institution européenne directement élue par les citoyens.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'apporte l'espace Schengen aux citoyens européens.",
      reponse: "L'espace Schengen supprime les contrôles aux frontières entre les pays qui en font partie, ce qui permet de voyager librement d'un pays à l'autre sans passeport ni contrôle douanier.",
      explication: "Cet espace facilite la libre circulation des personnes, l'un des principes fondamentaux de l'UE.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que la politique agricole commune (PAC) ?",
      choix: [
        "Une politique de sécurité commune",
        "Une politique européenne qui soutient financièrement les agriculteurs",
        "Un traité fondateur de l'UE",
        "La monnaie unique européenne",
      ],
      bonneReponse: 1,
      explication: "La France est l'une des principales bénéficiaires de la PAC, qui représente une part importante du budget européen.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la construction européenne débute par une mise en commun du charbon et de l'acier en 1951.",
      reponse:
        "Le charbon et l'acier sont des ressources essentielles à la fabrication d'armes. En les plaçant sous le contrôle d'une autorité commune, la CECA rend une guerre entre la France et l'Allemagne matériellement plus difficile, et instaure une solidarité économique entre pays qui viennent de s'affronter. C'est une manière concrète de garantir la paix par l'économie, plutôt que par des discours politiques.",
      explication: "Cette méthode, dite « fonctionnaliste », consiste à construire l'unité européenne étape par étape, à partir de secteurs économiques concrets.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre en quoi la France occupe une place centrale dans l'Union européenne.",
      reponse:
        "La France est l'un des six États fondateurs de la construction européenne dès 1951 et 1957. Elle est l'une des principales bénéficiaires de la politique agricole commune, qui soutient ses agriculteurs. Elle accueille une partie des institutions européennes, comme le Parlement européen à Strasbourg. Enfin, avec l'Allemagne, elle forme souvent un moteur politique qui propose des initiatives pour faire avancer la construction européenne.",
      explication: "Le couple franco-allemand joue traditionnellement un rôle moteur dans les décisions de l'Union européenne.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi le Brexit (2020) est-il considéré comme un défi pour l'Union européenne ?",
      choix: [
        "Parce qu'il renforce automatiquement l'UE",
        "Parce que c'est la première fois qu'un État membre quitte l'Union, ce qui interroge sa cohésion",
        "Parce qu'il crée l'espace Schengen",
        "Parce qu'il instaure l'euro au Royaume-Uni",
      ],
      bonneReponse: 1,
      explication: "Le départ du Royaume-Uni, effectif le 31 janvier 2020, montre que la construction européenne n'est pas irréversible et pose la question de sa cohésion future.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Méthode brevet : tu analyses un extrait du traité de Rome (1957). Quelles étapes suis-tu pour l'étudier ?",
      reponse:
        "1) Présenter le document : nature (texte de traité international), date (1957), auteurs (les six pays fondateurs), contexte (reconstruction de l'Europe après-guerre). 2) Décrire ce qu'il prévoit : création d'un marché commun, suppression des droits de douane entre pays membres. 3) Expliquer avec ses connaissances : volonté de garantir la paix par l'intégration économique, suite logique de la CECA de 1951. 4) Porter un regard critique : texte fondateur, mais qui ne prévoit encore ni monnaie unique ni citoyenneté européenne, obtenues seulement avec le traité de Maastricht en 1992.",
      explication: "Au brevet, on attend : présenter, décrire, expliquer avec le cours, puis situer le document dans la chronologie de la construction européenne.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année le traité de Rome crée-t-il la CEE ?",
      choix: ["1951", "1957", "1992", "2002"],
      bonneReponse: 1,
      explication: "Le traité de Rome, signé en 1957, crée la Communauté économique européenne et son marché commun.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que crée le traité de Maastricht en 1992 ?",
      reponse: "L'Union européenne et la citoyenneté européenne.",
      explication: "Ce traité marque une étape majeure de la construction européenne.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux institutions de l'Union européenne et leur rôle.",
      reponse: "Le Parlement européen, élu par les citoyens, vote les lois ; la Commission européenne propose les lois et veille à leur application.",
      explication: "Le Conseil de l'Union européenne, qui représente les gouvernements des États membres, peut aussi être cité.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel événement de 2020 marque le départ d'un État membre de l'UE ?",
      choix: ["Le traité de Maastricht", "Le Brexit", "La création de l'euro", "L'élargissement de 2004"],
      bonneReponse: 1,
      explication: "Le Royaume-Uni quitte officiellement l'Union européenne le 31 janvier 2020.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle politique européenne soutient particulièrement les agriculteurs français ?",
      reponse: "La politique agricole commune (PAC).",
      explication: "La France est l'une des principales bénéficiaires de cette politique européenne.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La France et l'Union européenne",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pourquoi les pays d'Europe entament-ils leur union après 1945 ?",
          choix: [
            "Pour créer une monnaie unique immédiatement",
            "Pour garantir la paix en liant leurs économies, notamment entre la France et l'Allemagne",
            "Pour former une alliance militaire contre les États-Unis",
            "Pour coloniser d'autres continents",
          ],
          bonneReponse: 1,
          explication: "L'objectif premier de la construction européenne est de rendre la guerre impossible entre pays européens.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la CECA et quand est-elle créée ?",
          reponse: "La Communauté européenne du charbon et de l'acier, créée en 1951 par six pays fondateurs, dont la France.",
          explication: "La CECA met en commun deux ressources essentielles à l'industrie de guerre.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que permet l'espace Schengen ?",
          choix: [
            "L'utilisation d'une monnaie unique",
            "La libre circulation des personnes sans contrôle aux frontières internes",
            "L'élection du Parlement européen",
            "La création de la PAC",
          ],
          bonneReponse: 1,
          explication: "L'espace Schengen supprime les contrôles aux frontières entre les pays qui y participent.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Présente le rôle de la Commission européenne.",
          reponse: "La Commission européenne propose les projets de lois européennes et veille à leur bonne application par les États membres.",
          explication: "Elle travaille aux côtés du Parlement européen et du Conseil de l'Union européenne.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique en quoi la France est un État fondateur de l'Union européenne.",
          reponse: "La France fait partie des six pays qui créent la CECA en 1951 puis la CEE en 1957, les premières étapes de la construction européenne. Elle participe depuis à toutes les décisions majeures de l'Union.",
          explication: "Ce statut de fondateur donne à la France un rôle particulièrement important dans l'UE.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : retrace les grandes étapes de la construction européenne, de 1951 à nos jours (une vingtaine de lignes).",
          reponse:
            "Introduction : depuis 1951, la construction européenne progresse par étapes pour unir les pays d'Europe. Première partie : les débuts économiques ; en 1951, le traité de Paris crée la CECA, qui met en commun le charbon et l'acier ; en 1957, le traité de Rome crée la CEE et son marché commun. Deuxième partie : l'approfondissement politique ; en 1992, le traité de Maastricht transforme la CEE en Union européenne, crée la citoyenneté européenne et prépare l'euro, mis en circulation en 2002 ; l'espace Schengen facilite la libre circulation des personnes. Troisième partie : élargissements et défis actuels ; l'Union passe de six à vingt-sept membres au fil des élargissements, mais rencontre aussi des limites, comme le montre le départ du Royaume-Uni en 2020. Conclusion : la construction européenne reste un projet en évolution permanente, entre approfondissement et nouveaux défis.",
          explication: "Le développement doit mobiliser la chronologie précise : 1951, 1957, 1992, 2002, 2020.",
        },
      ],
    },
    {
      titre: "Examen 2 — La France et l'Union européenne",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle monnaie unique circule dans la plupart des pays de l'UE depuis 2002 ?",
          choix: ["Le franc", "L'euro", "Le mark", "Le dollar"],
          bonneReponse: 1,
          explication: "L'euro est mis en circulation le 1er janvier 2002 et remplace les monnaies nationales dans de nombreux pays de l'UE.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Combien de pays composent aujourd'hui l'Union européenne ?",
          reponse: "27 États membres, après plusieurs élargissements successifs.",
          explication: "L'Union est passée de six pays fondateurs à vingt-sept membres aujourd'hui.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle institution européenne est directement élue par les citoyens ?",
          choix: ["La Commission européenne", "Le Parlement européen", "Le Conseil européen", "La Banque centrale"],
          bonneReponse: 1,
          explication: "Le Parlement européen est élu au suffrage universel direct par les citoyens des États membres.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qu'est le Brexit et quand il a lieu.",
          reponse: "Le Brexit est le départ du Royaume-Uni de l'Union européenne, effectif le 31 janvier 2020. C'est la première fois qu'un État membre quitte l'Union.",
          explication: "Cet événement illustre les limites et les tensions au sein de la construction européenne.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quels avantages concrets l'Union européenne apporte-t-elle aux citoyens français au quotidien ?",
          reponse:
            "Par exemple : voyager sans contrôle aux frontières grâce à l'espace Schengen, payer avec la même monnaie dans de nombreux pays européens grâce à l'euro, étudier ou travailler plus facilement dans un autre pays de l'UE, ou encore bénéficier du soutien de la politique agricole commune pour les agriculteurs.",
          explication: "Ces avantages concrets illustrent l'intégration économique et sociale poussée entre les États membres.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre les avantages et les limites de l'appartenance de la France à l'Union européenne (une vingtaine de lignes).",
          reponse:
            "Introduction : État fondateur de la construction européenne, la France bénéficie de son appartenance à l'UE tout en étant confrontée à ses limites. Première partie : des avantages concrets ; la France profite du marché commun, de la libre circulation des personnes grâce à l'espace Schengen, de l'euro pour ses échanges commerciaux, et surtout de la politique agricole commune, qui soutient fortement ses agriculteurs. Deuxième partie : une influence politique renforcée ; en tant que membre fondateur, la France participe à toutes les décisions importantes et accueille des institutions européennes, comme le Parlement à Strasbourg. Troisième partie : des limites et des défis ; les décisions communes sont parfois difficiles à prendre entre vingt-sept États aux intérêts différents, des inégalités subsistent entre les régions de l'UE, et le Brexit, en 2020, a montré que la construction européenne n'était pas irréversible. Conclusion : malgré ces défis, l'appartenance à l'UE reste un atout majeur pour la France dans un monde globalisé.",
          explication: "Le développement doit mobiliser des exemples précis : PAC, Schengen, euro, Brexit.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 1951, traité de Paris, création de la CECA par six pays fondateurs dont la France.",
    "Repère brevet : 1957, traité de Rome, création de la CEE et d'un marché commun.",
    "Repère brevet : 1992, traité de Maastricht, naissance de l'Union européenne et de la citoyenneté européenne.",
    "2002 : mise en circulation de l'euro ; espace Schengen : libre circulation des personnes sans contrôle aux frontières internes.",
    "Institutions de l'UE : Parlement européen (élu, vote les lois), Commission européenne (propose les lois), Conseil de l'UE (représente les États).",
    "La France, État fondateur, bénéficie de la politique agricole commune (PAC) ; repère brevet : 31 janvier 2020, le Brexit (départ du Royaume-Uni de l'UE).",
  ],
},
{
  slug: "colonisation-xixe",
  titre: "Conquêtes et sociétés coloniales",
  matiere: "histoire-geo",
  niveau: "4eme",
  description:
    "Comprendre comment les puissances européennes, en particulier la France et le Royaume-Uni, se partagent l'Afrique et l'Asie à la fin du XIXe siècle, et comment fonctionnent les sociétés coloniales fondées sur la domination et l'inégalité.",
  objectifs: [
    "Expliquer les raisons de l'expansion coloniale européenne à la fin du XIXe siècle",
    "Connaître les grandes étapes de la conquête coloniale française (Algérie, Afrique, Indochine)",
    "Décrire l'organisation et les inégalités de la société coloniale (colons, indigènes, Code de l'indigénat)",
    "Comprendre les justifications de la colonisation et les résistances qu'elle suscite",
    "Mémoriser les repères : 1830 (Algérie), 1885 (conférence de Berlin), Empire colonial français",
  ],
  slides: [
    {
      titre: "L'expansion coloniale européenne à la fin du XIXe siècle",
      illustration: "🌍",
      visuel: "Europe → Afrique, Asie",
      contenu: [
        "À la fin du XIXe siècle, les puissances européennes se lancent dans une intense conquête coloniale",
        "La France et le Royaume-Uni possèdent les plus vastes empires coloniaux",
        "Cette période est appelée la « ruée vers l'Afrique » ou le partage colonial",
        "En 1914, la quasi-totalité de l'Afrique et une grande partie de l'Asie sont sous domination européenne",
      ],
      voixOff:
        "À la fin du dix-neuvième siècle, les puissances européennes se lancent dans une intense course à la conquête de territoires en Afrique et en Asie. La France et le Royaume-Uni constituent alors les plus vastes empires coloniaux du monde. Cette période est parfois appelée la ruée vers l'Afrique. En 1914, la quasi-totalité du continent africain et une grande partie de l'Asie sont sous domination européenne.",
    },
    {
      titre: "Pourquoi les Européens colonisent-ils ?",
      illustration: "💰",
      visuel: "Économie, prestige, mission civilisatrice",
      contenu: [
        "Des raisons économiques : trouver des matières premières et de nouveaux marchés",
        "Des raisons politiques : affirmer la puissance et le prestige d'une nation",
        "Une idéologie de « mission civilisatrice », qui prétend apporter le progrès aux colonisés",
        "Des raisons scientifiques et religieuses : explorations, missions chrétiennes",
      ],
      voixOff:
        "Plusieurs raisons expliquent cette expansion. Des raisons économiques d'abord : les Européens cherchent des matières premières et de nouveaux marchés pour vendre leurs produits industriels. Des raisons politiques ensuite : posséder un grand empire colonial est un signe de puissance et de prestige. Les Européens invoquent aussi une prétendue « mission civilisatrice », qui justifie la domination en prétendant apporter le progrès aux peuples colonisés. Enfin, des explorateurs et des missionnaires religieux jouent également un rôle important.",
    },
    {
      titre: "La conquête de l'Algérie et de l'Afrique du Nord",
      illustration: "🏜️",
      visuel: "1830 : Alger",
      contenu: [
        "1830 : la France envahit Alger, début de la conquête de l'Algérie",
        "La conquête complète du territoire algérien dure plusieurs décennies et rencontre de fortes résistances",
        "L'Algérie devient une colonie de peuplement : de nombreux Européens s'y installent",
        "La Tunisie (1881) et le Maroc (1912) deviennent des protectorats français",
      ],
      voixOff:
        "La conquête coloniale française commence en Afrique du Nord : en 1830, la France envahit Alger. La conquête complète de l'Algérie dure ensuite plusieurs décennies et se heurte à de fortes résistances, notamment celle de l'émir Abd el-Kader. L'Algérie devient une colonie de peuplement, où de nombreux Européens viennent s'installer. Plus tard, la Tunisie en 1881 puis le Maroc en 1912 deviennent des protectorats français.",
    },
    {
      titre: "Le partage de l'Afrique",
      illustration: "🗺️",
      visuel: "Conférence de Berlin, 1884-1885",
      contenu: [
        "Entre 1884 et 1885, la conférence de Berlin réunit les puissances européennes",
        "Elles fixent entre elles les règles du partage du continent africain, sans consulter les Africains",
        "Les frontières sont tracées de façon arbitraire, souvent en ligne droite sur les cartes",
        "En quelques décennies, la France, le Royaume-Uni, la Belgique et d'autres pays se partagent l'Afrique",
      ],
      voixOff:
        "Entre 1884 et 1885, les grandes puissances européennes se réunissent à Berlin pour fixer les règles du partage du continent africain, sans jamais consulter les populations africaines concernées. Les frontières sont souvent tracées de façon arbitraire, en lignes droites sur les cartes, sans tenir compte des peuples et des cultures locales. En quelques décennies, la France, le Royaume-Uni, la Belgique et d'autres puissances européennes se partagent la quasi-totalité du continent.",
    },
    {
      titre: "L'Empire colonial français",
      illustration: "🇫🇷",
      visuel: "Afrique, Asie, Antilles",
      contenu: [
        "En 1914, l'Empire colonial français est le deuxième plus vaste du monde après l'Empire britannique",
        "Il comprend l'Afrique du Nord, l'Afrique occidentale et équatoriale, Madagascar",
        "En Asie, la France colonise l'Indochine (actuels Vietnam, Laos, Cambodge)",
        "La France garde aussi d'anciennes colonies antillaises (Martinique, Guadeloupe)",
      ],
      voixOff:
        "En 1914, l'Empire colonial français est le deuxième plus vaste du monde, juste derrière l'Empire britannique. Il comprend une grande partie de l'Afrique du Nord, de l'Afrique occidentale et équatoriale, ainsi que Madagascar. En Asie, la France colonise l'Indochine, qui correspond aujourd'hui au Vietnam, au Laos et au Cambodge. Elle conserve également d'anciennes colonies antillaises comme la Martinique et la Guadeloupe.",
    },
    {
      titre: "L'organisation inégalitaire de la société coloniale",
      illustration: "⚖️",
      visuel: "Colons / indigènes",
      contenu: [
        "La société coloniale est fondée sur une forte inégalité entre colons européens et populations colonisées",
        "Les colons occupent les meilleures terres et les postes de pouvoir et d'administration",
        "Les populations colonisées, appelées « indigènes », n'ont pas les mêmes droits que les colons",
        "Le Code de l'indigénat impose aux colonisés des travaux forcés, des impôts et des punitions arbitraires",
      ],
      voixOff:
        "La société coloniale repose sur une forte inégalité. Les colons européens occupent les meilleures terres et détiennent les postes de pouvoir et d'administration. Les populations colonisées, que les Européens appellent alors « indigènes », n'ont pas les mêmes droits que les colons : elles ne votent pas et sont souvent soumises au Code de l'indigénat, qui impose des travaux forcés, des impôts particuliers et des punitions arbitraires décidées par l'administration coloniale.",
    },
    {
      titre: "Exploitation économique et résistances",
      illustration: "🌾",
      visuel: "Matières premières",
      contenu: [
        "Les colonies fournissent des matières premières (coton, caoutchouc, minerais) à la métropole",
        "Les populations colonisées sont souvent contraintes au travail forcé dans les plantations et les mines",
        "Des résistances éclatent régulièrement contre la domination coloniale",
        "Ces résistances sont sévèrement réprimées par les autorités coloniales",
      ],
      voixOff:
        "Économiquement, les colonies sont exploitées pour fournir des matières premières à la métropole : coton, caoutchouc, minerais. Les populations colonisées sont souvent contraintes au travail forcé dans les plantations et les mines. Face à cette domination, des résistances éclatent régulièrement, comme des révoltes locales contre l'occupation coloniale. Ces mouvements sont presque toujours sévèrement réprimés par les autorités coloniales, qui disposent d'une puissance militaire bien supérieure.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "À la fin du XIXe siècle, les puissances européennes se partagent l'Afrique et une partie de l'Asie",
        "La conférence de Berlin (1884-1885) fixe les règles de ce partage colonial sans consulter les Africains",
        "En 1914, la France possède le deuxième plus vaste empire colonial du monde",
        "La société coloniale est fondée sur de fortes inégalités entre colons et populations colonisées",
      ],
      voixOff:
        "Résumons. À la fin du dix-neuvième siècle, les puissances européennes se lancent dans une intense conquête coloniale et se partagent l'Afrique lors de la conférence de Berlin, en 1884-1885, sans jamais consulter les Africains. En 1914, la France possède le deuxième plus vaste empire colonial du monde, en Afrique, en Asie et aux Antilles. Partout, la société coloniale repose sur de fortes inégalités entre colons et populations colonisées, ce qui suscite des résistances sévèrement réprimées. Tu connais maintenant les grandes étapes et les mécanismes de la colonisation du XIXe siècle.",
    },
  ],
  fiche: {
    intro:
      "À la fin du XIXe siècle, les puissances européennes, notamment la France et le Royaume-Uni, se lancent dans une intense conquête coloniale en Afrique et en Asie. Elles fondent des sociétés coloniales fortement inégalitaires, où les colons dominent des populations privées de droits.",
    sections: [
      {
        titre: "Les raisons de l'expansion coloniale",
        points: [
          "Raisons économiques : matières premières, nouveaux marchés pour les produits industriels",
          "Raisons politiques : prestige et puissance des nations européennes",
          "Idéologie de la « mission civilisatrice », prétexte pour justifier la domination",
          "Rôle des explorateurs et des missionnaires religieux",
        ],
      },
      {
        titre: "Les grandes étapes de la conquête française",
        points: [
          "1830 : début de la conquête de l'Algérie (prise d'Alger)",
          "1881 : protectorat français sur la Tunisie ; 1912 : protectorat sur le Maroc",
          "Conquête de l'Afrique occidentale et équatoriale, et de Madagascar",
          "Colonisation de l'Indochine en Asie (actuels Vietnam, Laos, Cambodge)",
        ],
      },
      {
        titre: "Le partage colonial de l'Afrique",
        points: [
          "Conférence de Berlin (1884-1885) : les puissances européennes fixent les règles du partage de l'Afrique",
          "Les Africains ne sont pas consultés ; les frontières sont tracées arbitrairement",
          "En 1914, la quasi-totalité de l'Afrique est sous domination européenne",
          "En 1914, l'Empire colonial français est le deuxième du monde, après l'Empire britannique",
        ],
      },
      {
        titre: "La société coloniale et ses inégalités",
        points: [
          "Les colons occupent les meilleures terres et les postes de pouvoir",
          "Les « indigènes » n'ont pas les mêmes droits : pas de vote, Code de l'indigénat (travaux forcés, impôts, punitions arbitraires)",
          "Exploitation économique des colonies : matières premières, travail forcé",
          "Des résistances locales éclatent régulièrement mais sont sévèrement réprimées",
        ],
      },
    ],
    audio:
      "Fiche de révision : conquêtes et sociétés coloniales. À la fin du dix-neuvième siècle, les puissances européennes se lancent dans une intense conquête coloniale en Afrique et en Asie, pour des raisons économiques, politiques et idéologiques, au nom d'une prétendue mission civilisatrice. La France commence la conquête de l'Algérie en 1830, puis étend son empire à la Tunisie, au Maroc, à l'Afrique occidentale et équatoriale, à Madagascar et à l'Indochine en Asie. Entre 1884 et 1885, la conférence de Berlin fixe entre puissances européennes les règles du partage du continent africain, sans consulter les populations concernées. En 1914, l'Empire colonial français est le deuxième plus vaste du monde. Partout, la société coloniale repose sur de fortes inégalités : les colons occupent les meilleures terres et le pouvoir, tandis que les populations colonisées, appelées indigènes, sont privées de droits et soumises au Code de l'indigénat, qui impose travaux forcés et punitions arbitraires. Ces injustices provoquent des résistances, sévèrement réprimées par les autorités coloniales.",
  },
  memoCards: [
    { recto: "Quand commence la conquête française de l'Algérie ?", verso: "En 1830, avec la prise d'Alger." },
    { recto: "Qu'est-ce que la conférence de Berlin (1884-1885) ?", verso: "Une réunion des puissances européennes qui fixe les règles du partage colonial de l'Afrique, sans consulter les Africains." },
    { recto: "Quel est le deuxième plus vaste empire colonial du monde en 1914 ?", verso: "L'Empire colonial français, derrière l'Empire britannique." },
    { recto: "Qu'est-ce que l'Indochine ?", verso: "La colonie française en Asie du Sud-Est, correspondant aujourd'hui au Vietnam, au Laos et au Cambodge." },
    { recto: "Qu'est-ce que le Code de l'indigénat ?", verso: "Un ensemble de règles imposées aux populations colonisées : travaux forcés, impôts spécifiques, punitions arbitraires, sans les mêmes droits que les colons." },
    { recto: "Que justifie la « mission civilisatrice » ?", verso: "L'idée, utilisée par les Européens, que la colonisation apporterait le progrès aux peuples colonisés, servant à légitimer la domination." },
    { recto: "Quelles matières premières les colonies fournissent-elles à la métropole ?", verso: "Coton, caoutchouc, minerais, entre autres." },
    { recto: "Comment les résistances à la colonisation sont-elles traitées ?", verso: "Elles sont régulièrement et sévèrement réprimées par les autorités coloniales, disposant d'une puissance militaire supérieure." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année la France commence-t-elle la conquête de l'Algérie ?",
      choix: ["1789", "1830", "1885", "1914"],
      bonneReponse: 1,
      explication: "La conquête de l'Algérie débute en 1830 avec la prise d'Alger.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel pays possède le plus vaste empire colonial en 1914 ?",
      choix: ["La France", "Le Royaume-Uni", "L'Allemagne", "L'Espagne"],
      bonneReponse: 1,
      explication: "L'Empire britannique est le plus vaste en 1914 ; la France possède le deuxième.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que signifie le terme « indigène » dans le contexte colonial ?",
      reponse: "Il désigne les populations colonisées, considérées comme inférieures et privées des mêmes droits que les colons européens.",
      explication: "Ce terme, utilisé à l'époque coloniale, reflète la hiérarchie inégalitaire de la société coloniale.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle colonie française d'Asie correspond aujourd'hui au Vietnam, au Laos et au Cambodge ?",
      choix: ["L'Algérie", "Madagascar", "L'Indochine", "La Tunisie"],
      bonneReponse: 2,
      explication: "L'Indochine française regroupait ces trois territoires d'Asie du Sud-Est.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux raisons qui poussent les puissances européennes à coloniser l'Afrique et l'Asie.",
      reponse:
        "Par exemple : des raisons économiques (trouver des matières premières et de nouveaux marchés) et des raisons politiques (affirmer la puissance et le prestige de la nation), ou encore l'idéologie de la « mission civilisatrice ».",
      explication: "L'expansion coloniale combine des intérêts économiques, politiques et idéologiques.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que décide la conférence de Berlin en 1884-1885 ?",
      choix: [
        "L'indépendance des colonies africaines",
        "Le partage de l'Afrique entre puissances européennes",
        "L'abolition du travail forcé",
        "La création de l'Indochine française",
      ],
      bonneReponse: 1,
      explication: "Les puissances européennes se réunissent à Berlin pour fixer entre elles les règles du partage de l'Afrique, sans consulter les Africains.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est le Code de l'indigénat.",
      reponse:
        "C'est un ensemble de règles appliquées aux populations colonisées dans les colonies françaises : elles sont soumises à des travaux forcés, à des impôts spécifiques et à des punitions arbitraires décidées par l'administration coloniale, sans bénéficier des mêmes droits que les colons.",
      explication: "Le Code de l'indigénat illustre l'inégalité juridique fondamentale de la société coloniale.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel territoire devient un protectorat français en 1881 ?",
      choix: ["Le Maroc", "La Tunisie", "Madagascar", "Le Sénégal"],
      bonneReponse: 1,
      explication: "La Tunisie devient un protectorat français en 1881, avant le Maroc en 1912.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on peut dire que la société coloniale est fondée sur des inégalités.",
      reponse:
        "Les colons européens occupent les meilleures terres et les postes de pouvoir, tandis que les populations colonisées, appelées indigènes, n'ont pas les mêmes droits : elles ne votent pas, sont soumises au Code de l'indigénat, subissent le travail forcé et des impôts spécifiques. Cette hiérarchie place systématiquement les colons au-dessus des populations locales.",
      explication: "L'inégalité juridique, économique et politique est au cœur du fonctionnement de toute société coloniale.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle idée les Européens utilisent-ils pour justifier la colonisation ?",
      choix: [
        "La liberté de circulation",
        "La mission civilisatrice",
        "Le droit des peuples à disposer d'eux-mêmes",
        "L'égalité entre les peuples",
      ],
      bonneReponse: 1,
      explication: "La « mission civilisatrice » prétend que la colonisation apporte le progrès aux peuples colonisés, ce qui sert à légitimer la domination.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Comment les colonies sont-elles exploitées économiquement, et comment les populations colonisées réagissent-elles ?",
      reponse:
        "Les colonies fournissent des matières premières comme le coton, le caoutchouc ou les minerais à la métropole, souvent grâce au travail forcé imposé aux populations locales. Face à cette exploitation et à ces inégalités, des résistances locales éclatent régulièrement, mais elles sont presque toujours sévèrement réprimées par les autorités coloniales, qui disposent d'une supériorité militaire.",
      explication: "L'exploitation économique et la répression des résistances sont deux aspects centraux du système colonial.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que la colonisation transforme durablement la carte de l'Afrique.",
      reponse:
        "Lors de la conférence de Berlin (1884-1885), les puissances européennes tracent les frontières des territoires africains de façon arbitraire, sans tenir compte des peuples, des langues et des cultures locales. Ces frontières coloniales, souvent en lignes droites, ont perduré après les indépendances et sont encore celles des États africains actuels, ce qui explique certaines tensions territoriales encore présentes aujourd'hui.",
      explication: "Le tracé arbitraire des frontières coloniales a des conséquences géopolitiques durables jusqu'à aujourd'hui.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année la France envahit-elle Alger ?",
      choix: ["1789", "1830", "1848", "1885"],
      bonneReponse: 1,
      explication: "1830 marque le début de la conquête française de l'Algérie.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelles sont les deux plus grandes puissances coloniales en 1914 ?",
      reponse: "Le Royaume-Uni (premier empire colonial) et la France (deuxième empire colonial).",
      explication: "Ces deux pays possèdent à eux seuls la majeure partie des colonies du monde en 1914.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle conférence organise le partage de l'Afrique entre puissances européennes ?",
      choix: ["La conférence de Paris", "La conférence de Berlin", "La conférence de Londres", "La conférence de Vienne"],
      bonneReponse: 1,
      explication: "La conférence de Berlin (1884-1885) fixe les règles du partage colonial de l'Afrique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'une colonie de peuplement ? Donne un exemple.",
      reponse: "Une colonie où de nombreux Européens viennent s'installer durablement. L'Algérie en est un exemple.",
      explication: "Contrairement à une simple exploitation économique, une colonie de peuplement accueille une importante population européenne.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi le Code de l'indigénat est-il injuste ?",
      reponse: "Parce qu'il impose aux populations colonisées des travaux forcés, des impôts spécifiques et des punitions arbitraires, sans leur accorder les mêmes droits qu'aux colons européens, notamment le droit de vote.",
      explication: "Le Code de l'indigénat institutionnalise l'inégalité entre colons et colonisés.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Conquêtes et sociétés coloniales",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel territoire la France commence-t-elle à conquérir en 1830 ?",
          choix: ["Madagascar", "L'Algérie", "L'Indochine", "Le Maroc"],
          bonneReponse: 1,
          explication: "La prise d'Alger en 1830 marque le début de la conquête française de l'Algérie.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite une matière première que les colonies fournissent à la métropole.",
          reponse: "Par exemple le coton, le caoutchouc ou des minerais.",
          explication: "Les colonies sont exploitées comme sources de matières premières pour l'économie de la métropole.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que se passe-t-il lors de la conférence de Berlin (1884-1885) ?",
          choix: [
            "Les Africains obtiennent leur indépendance",
            "Les puissances européennes fixent les règles du partage de l'Afrique",
            "La France perd toutes ses colonies",
            "Le Code de l'indigénat est aboli",
          ],
          bonneReponse: 1,
          explication: "Cette conférence organise le partage colonial de l'Afrique entre puissances européennes, sans les Africains.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la notion de « mission civilisatrice » et son rôle dans la colonisation.",
          reponse:
            "C'est l'idée, défendue par les Européens, que la colonisation apporterait le progrès, l'éducation et la civilisation aux peuples colonisés. Cette idée sert en réalité à justifier et légitimer la domination coloniale et l'exploitation des colonies.",
          explication: "La mission civilisatrice est une idéologie qui masque les intérêts économiques et politiques réels de la colonisation.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris les inégalités entre colons et populations colonisées dans la société coloniale.",
          reponse:
            "Les colons occupent les meilleures terres et les postes de pouvoir et d'administration. Les populations colonisées, appelées indigènes, n'ont pas les mêmes droits : elles ne votent pas, subissent le Code de l'indigénat avec travaux forcés, impôts spécifiques et punitions arbitraires.",
          explication: "Cette inégalité structurelle est au fondement du système colonial du XIXe et du début du XXe siècle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique comment et pourquoi les puissances européennes se partagent l'Afrique à la fin du XIXe siècle (une quinzaine de lignes).",
          reponse:
            "Introduction : à la fin du dix-neuvième siècle, les puissances européennes se lancent dans une intense conquête du continent africain. Première partie : plusieurs raisons expliquent cette expansion, des raisons économiques (matières premières, nouveaux marchés), politiques (prestige des nations) et idéologiques (la prétendue mission civilisatrice), soutenues par des explorateurs et des missionnaires. Deuxième partie : entre 1884 et 1885, la conférence de Berlin réunit les puissances européennes pour fixer les règles de ce partage, sans jamais consulter les populations africaines ; les frontières sont tracées de façon arbitraire. Troisième partie : en quelques décennies, la quasi-totalité du continent africain passe sous domination européenne ; en 1914, la France possède le deuxième plus vaste empire colonial du monde, après le Royaume-Uni, avec notamment l'Afrique du Nord et l'Afrique occidentale et équatoriale. Conclusion : ce partage colonial impose une domination européenne durable sur l'Afrique, dont les frontières et les tensions se font encore sentir aujourd'hui.",
          explication: "On attend la mention des raisons de la colonisation, de la conférence de Berlin et de l'ampleur de l'Empire colonial français en 1914.",
        },
      ],
    },
    {
      titre: "Examen 2 — Conquêtes et sociétés coloniales",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle colonie française d'Asie du Sud-Est regroupe le Vietnam, le Laos et le Cambodge ?",
          choix: ["L'Indochine", "L'Algérie", "Madagascar", "La Tunisie"],
          bonneReponse: 0,
          explication: "L'Indochine française est la colonie asiatique de l'Empire colonial français.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que le Code de l'indigénat ?",
          reponse: "Un ensemble de règles imposées aux populations colonisées : travaux forcés, impôts spécifiques et punitions arbitraires, sans les mêmes droits que les colons.",
          explication: "Le Code de l'indigénat symbolise l'inégalité juridique de la société coloniale.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel territoire devient un protectorat français en 1912 ?",
          choix: ["La Tunisie", "Le Maroc", "L'Algérie", "Madagascar"],
          bonneReponse: 1,
          explication: "Le Maroc devient un protectorat français en 1912, après la Tunisie en 1881.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Comment réagissent les populations colonisées face à la domination européenne ?",
          reponse: "Des résistances locales éclatent régulièrement contre l'occupation coloniale, mais elles sont presque toujours sévèrement réprimées par les autorités coloniales, qui disposent d'une puissance militaire bien supérieure.",
          explication: "Malgré la répression, ces résistances témoignent du rejet de la domination coloniale par les populations colonisées.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi peut-on dire que les frontières africaines actuelles sont en partie héritées de la colonisation ?",
          reponse:
            "Lors de la conférence de Berlin (1884-1885), les puissances européennes ont tracé les frontières des territoires africains de façon arbitraire, sans tenir compte des peuples et des cultures locales. Beaucoup de ces frontières coloniales ont été conservées après les indépendances et forment encore aujourd'hui les frontières des États africains.",
          explication: "Le tracé arbitraire des frontières coloniales a des conséquences géopolitiques encore visibles aujourd'hui.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : décris l'organisation et les inégalités de la société coloniale française (une quinzaine de lignes).",
          reponse:
            "Introduction : dans les colonies françaises, la société est organisée autour d'une profonde inégalité entre colons et populations colonisées. Première partie : les colons européens occupent les meilleures terres agricoles et détiennent les postes de pouvoir et d'administration, formant une minorité dominante. Deuxième partie : les populations colonisées, appelées à l'époque « indigènes », sont privées des mêmes droits : elles ne votent pas et sont soumises au Code de l'indigénat, qui impose des travaux forcés, des impôts spécifiques et des punitions arbitraires décidées par l'administration. Troisième partie : sur le plan économique, les colonies sont exploitées pour fournir des matières premières comme le coton ou le caoutchouc à la métropole, souvent grâce à ce travail forcé ; les résistances locales à cette domination sont sévèrement réprimées. Conclusion : la société coloniale française repose ainsi sur une hiérarchie stricte entre colons et colonisés, qui sera de plus en plus contestée au XXe siècle.",
          explication: "On attend une description structurée des inégalités politiques, juridiques et économiques de la société coloniale.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 1830, début de la conquête française de l'Algérie.",
    "Les puissances européennes colonisent pour des raisons économiques, politiques et idéologiques (mission civilisatrice).",
    "Repère brevet : conférence de Berlin (1884-1885), partage de l'Afrique entre puissances européennes.",
    "En 1914, l'Empire colonial français est le deuxième du monde : Afrique du Nord, Afrique occidentale et équatoriale, Madagascar, Indochine.",
    "La société coloniale est fondée sur l'inégalité : colons dominants face à des populations colonisées privées de droits (Code de l'indigénat).",
    "Les colonies sont exploitées économiquement (matières premières, travail forcé) ; les résistances locales sont sévèrement réprimées.",
  ],
},
{
  slug: "industrialisation",
  titre: "L'Europe de la révolution industrielle",
  matiere: "histoire-geo",
  niveau: "4eme",
  description:
    "Comprendre comment la machine à vapeur, le charbon et les usines transforment l'Europe au XIXe siècle : essor des villes, naissance de la classe ouvrière, nouvelles conditions de travail et premiers combats sociaux.",
  objectifs: [
    "Expliquer les innovations techniques à l'origine de la révolution industrielle",
    "Décrire la transformation du travail : de l'atelier artisanal à l'usine",
    "Comprendre la formation de la bourgeoisie industrielle et de la classe ouvrière",
    "Connaître les conditions de vie et de travail des ouvriers et les premières luttes sociales",
    "Mémoriser les repères : fin du XVIIIe siècle (Royaume-Uni), 1830-1840 (essor en France), 1841, 1864",
  ],
  slides: [
    {
      titre: "La révolution industrielle : où et quand ?",
      illustration: "⚙️",
      visuel: "Royaume-Uni, fin XVIIIe siècle",
      contenu: [
        "La révolution industrielle commence au Royaume-Uni à la fin du XVIIIe siècle",
        "Elle se diffuse en France, en Belgique et en Allemagne au cours du XIXe siècle",
        "Elle repose sur de nouvelles sources d'énergie : le charbon puis la machine à vapeur",
        "Elle transforme profondément l'économie, les paysages et la société européenne",
      ],
      voixOff:
        "La révolution industrielle débute au Royaume-Uni à la fin du dix-huitième siècle, avant de se diffuser en France, en Belgique et en Allemagne tout au long du dix-neuvième siècle. Elle repose sur l'exploitation du charbon et sur une innovation majeure : la machine à vapeur. En quelques décennies, elle transforme radicalement l'économie, les paysages et la société de l'Europe.",
    },
    {
      titre: "Les innovations techniques",
      illustration: "🚂",
      visuel: "Machine à vapeur",
      contenu: [
        "La machine à vapeur, perfectionnée par James Watt, remplace la force humaine et animale",
        "Le charbon devient la principale source d'énergie, extrait dans les mines",
        "Le chemin de fer se développe à partir des années 1830 et révolutionne les transports",
        "La métallurgie se transforme grâce au fer puis à l'acier produits en grande quantité",
      ],
      voixOff:
        "Plusieurs innovations bouleversent la production. La machine à vapeur, perfectionnée par l'ingénieur écossais James Watt, remplace la force des bras et des animaux. Le charbon, extrait des mines, devient la principale source d'énergie. À partir des années 1830, le chemin de fer se développe et révolutionne le transport des hommes et des marchandises. La métallurgie produit du fer puis de l'acier en quantités inédites.",
    },
    {
      titre: "De l'atelier artisanal à l'usine",
      illustration: "🏭",
      visuel: "Atelier → Usine",
      contenu: [
        "Avant, les artisans travaillaient chez eux ou dans de petits ateliers",
        "Avec l'industrialisation, la production se concentre dans de grandes usines",
        "Les machines remplacent une partie du travail manuel : c'est le machinisme",
        "Les usines se regroupent près des mines de charbon et des voies ferrées",
      ],
      voixOff:
        "Avant l'industrialisation, les artisans travaillaient chez eux ou dans de petits ateliers. Avec les machines, la production se concentre désormais dans de grandes usines qui emploient parfois des centaines d'ouvriers. C'est le machinisme : les machines remplacent une partie du travail manuel. Ces usines s'installent près des bassins de charbon, comme dans le Nord de la France, ou le long des voies ferrées.",
    },
    {
      titre: "Les paysages transformés : bassins industriels et villes",
      illustration: "🏙️",
      visuel: "Manchester, Le Creusot",
      contenu: [
        "Des villes industrielles se développent rapidement, comme Manchester ou Le Creusot",
        "Les paysages sont marqués par les usines, les cheminées et le charbon",
        "L'exode rural pousse des millions de paysans vers les villes industrielles",
        "Les villes grandissent très vite, souvent sans plan d'organisation",
      ],
      voixOff:
        "L'industrialisation transforme les paysages. Des villes se développent très rapidement autour des usines, comme Manchester au Royaume-Uni ou Le Creusot en France, marquées par les cheminées et la fumée du charbon. Des millions de paysans quittent les campagnes pour venir travailler en ville : c'est l'exode rural. Ces villes grandissent souvent de façon anarchique, sans plan d'organisation.",
    },
    {
      titre: "La bourgeoisie industrielle",
      illustration: "🎩",
      visuel: "Patrons d'usine",
      contenu: [
        "Les patrons d'usine, banquiers et grands commerçants forment la bourgeoisie industrielle",
        "Ils possèdent les usines, les machines et les capitaux nécessaires à la production",
        "Cette bourgeoisie s'enrichit et devient une classe sociale dominante",
        "Elle habite dans de beaux quartiers, loin des quartiers ouvriers",
      ],
      voixOff:
        "L'industrialisation fait émerger une nouvelle élite : la bourgeoisie industrielle, composée de patrons d'usine, de banquiers et de grands commerçants. Ils possèdent les usines, les machines et l'argent nécessaire pour investir. Cette bourgeoisie s'enrichit considérablement et devient une classe sociale dominante, qui habite dans de beaux quartiers, bien à l'écart des quartiers populaires.",
    },
    {
      titre: "La classe ouvrière et ses conditions de vie",
      illustration: "👷",
      visuel: "Conditions difficiles",
      contenu: [
        "Les ouvriers, hommes, femmes et enfants, travaillent de longues heures pour un faible salaire",
        "Les journées de travail atteignent souvent 12 à 15 heures, six jours sur sept",
        "Les conditions de travail sont dangereuses : accidents, maladies, absence de sécurité",
        "Les ouvriers vivent dans des logements insalubres, surpeuplés, près des usines",
      ],
      voixOff:
        "Les ouvriers, y compris des femmes et de très jeunes enfants, travaillent de longues journées, parfois douze à quinze heures, six jours sur sept, pour un salaire très faible. Le travail est souvent dangereux : accidents fréquents, maladies liées au charbon ou aux machines, sans aucune sécurité. Les ouvriers vivent entassés dans des logements insalubres et surpeuplés, à proximité immédiate des usines.",
    },
    {
      titre: "Les premières lois sociales et les luttes ouvrières",
      illustration: "✊",
      visuel: "1841 : loi sur le travail des enfants",
      contenu: [
        "1841 : première loi française limitant le travail des enfants dans les usines",
        "1864 : le droit de grève est reconnu en France",
        "Les ouvriers commencent à se réunir dans des syndicats pour défendre leurs droits",
        "Ces luttes sociales amélioreront progressivement les conditions de travail",
      ],
      voixOff:
        "Face à ces conditions très dures, l'État commence à intervenir : en 1841, une loi française limite pour la première fois le travail des enfants dans les usines. En 1864, le droit de grève est reconnu en France. Les ouvriers s'organisent de plus en plus dans des syndicats pour défendre collectivement leurs droits. Ces luttes sociales permettront, au fil des décennies, d'améliorer progressivement les conditions de travail.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "La révolution industrielle débute au Royaume-Uni à la fin du XVIIIe siècle",
        "Elle repose sur le charbon, la machine à vapeur et le chemin de fer",
        "Elle fait naître deux nouvelles classes sociales : la bourgeoisie industrielle et la classe ouvrière",
        "Les ouvriers vivent et travaillent dans des conditions très dures, à l'origine des premières luttes sociales",
      ],
      voixOff:
        "Résumons. La révolution industrielle naît au Royaume-Uni à la fin du dix-huitième siècle et repose sur le charbon, la machine à vapeur et le chemin de fer. Elle transforme l'économie et fait naître deux nouvelles classes sociales : la bourgeoisie industrielle, qui possède les usines, et la classe ouvrière, qui y travaille dans des conditions très difficiles. Ces inégalités sont à l'origine des premières lois sociales et des luttes ouvrières. Tu maîtrises maintenant les grandes transformations de l'Europe industrielle.",
    },
  ],
  fiche: {
    intro:
      "À partir de la fin du XVIIIe siècle, la révolution industrielle transforme l'Europe : de nouvelles sources d'énergie, la machine à vapeur et le chemin de fer bouleversent la production, les villes et la société, avec l'apparition de la bourgeoisie industrielle et de la classe ouvrière.",
    sections: [
      {
        titre: "Les innovations techniques",
        points: [
          "La machine à vapeur, perfectionnée par James Watt, remplace la force humaine et animale",
          "Le charbon devient la principale source d'énergie ; le chemin de fer se développe dès les années 1830",
          "La métallurgie produit du fer puis de l'acier en grande quantité",
          "L'industrialisation débute au Royaume-Uni à la fin du XVIIIe siècle, puis gagne la France, la Belgique et l'Allemagne",
        ],
      },
      {
        titre: "L'usine et la ville industrielle",
        points: [
          "La production se concentre dans de grandes usines, près des mines et des voies ferrées",
          "Des villes industrielles se développent rapidement (Manchester, Le Creusot)",
          "L'exode rural pousse des millions de paysans vers les villes",
          "Les villes grandissent souvent sans organisation, avec des quartiers ouvriers insalubres",
        ],
      },
      {
        titre: "Deux nouvelles classes sociales",
        points: [
          "La bourgeoisie industrielle : patrons, banquiers, grands commerçants, propriétaires des usines et des capitaux",
          "La classe ouvrière : hommes, femmes et enfants qui travaillent en usine pour un faible salaire",
          "Conditions de travail dures : journées de 12 à 15 heures, dangers, absence de sécurité",
          "Logements ouvriers insalubres et surpeuplés, contrastant avec les beaux quartiers bourgeois",
        ],
      },
      {
        titre: "Les premières réponses sociales",
        points: [
          "1841 : première loi française limitant le travail des enfants dans les usines",
          "1864 : reconnaissance du droit de grève en France",
          "Développement des syndicats pour défendre les droits des ouvriers",
          "Ces luttes amélioreront progressivement les conditions de vie et de travail au tournant du XXe siècle",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'Europe de la révolution industrielle. À la fin du dix-huitième siècle, le Royaume-Uni connaît une révolution industrielle fondée sur le charbon et la machine à vapeur, perfectionnée par James Watt. Cette révolution se diffuse en France, en Belgique et en Allemagne au dix-neuvième siècle, portée notamment par le développement du chemin de fer à partir des années 1830. La production se concentre dans de grandes usines, ce qui transforme les paysages et fait naître des villes industrielles comme Manchester ou Le Creusot, alimentées par l'exode rural. Deux nouvelles classes sociales apparaissent : la bourgeoisie industrielle, qui possède les usines et s'enrichit, et la classe ouvrière, qui travaille de longues heures dans des conditions très dures pour un faible salaire. Face à ces inégalités, l'État intervient progressivement : en 1841, une loi limite le travail des enfants ; en 1864, le droit de grève est reconnu en France, marquant le début des luttes sociales organisées.",
  },
  memoCards: [
    { recto: "Où et quand commence la révolution industrielle ?", verso: "Au Royaume-Uni, à la fin du XVIIIe siècle." },
    { recto: "Qui perfectionne la machine à vapeur ?", verso: "James Watt, ingénieur écossais." },
    { recto: "Quelle est la principale source d'énergie de la révolution industrielle ?", verso: "Le charbon." },
    { recto: "Quel moyen de transport se développe à partir des années 1830 ?", verso: "Le chemin de fer." },
    { recto: "Qui compose la bourgeoisie industrielle ?", verso: "Les patrons d'usine, les banquiers et les grands commerçants, propriétaires des usines et des capitaux." },
    { recto: "Qu'est-ce que l'exode rural ?", verso: "Le départ massif des paysans des campagnes vers les villes industrielles pour y trouver du travail." },
    { recto: "Que dit la loi de 1841 en France ?", verso: "Elle limite pour la première fois le travail des enfants dans les usines." },
    { recto: "Que se passe-t-il en 1864 en France ?", verso: "Le droit de grève est reconnu, marquant une étape importante des luttes ouvrières." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quel pays commence la révolution industrielle ?",
      choix: ["La France", "Le Royaume-Uni", "L'Allemagne", "L'Italie"],
      bonneReponse: 1,
      explication: "La révolution industrielle débute au Royaume-Uni à la fin du XVIIIe siècle, avant de se diffuser en Europe.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle innovation remplace la force humaine et animale dans les usines ?",
      choix: ["Le moulin à eau", "La machine à vapeur", "L'électricité", "Le moteur à essence"],
      bonneReponse: 1,
      explication: "La machine à vapeur, perfectionnée par James Watt, est l'innovation clé de la révolution industrielle.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la principale source d'énergie utilisée au XIXe siècle ?",
      reponse: "Le charbon.",
      explication: "Le charbon alimente les machines à vapeur et les usines pendant toute la révolution industrielle.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on le regroupement de la production dans de grands bâtiments équipés de machines ?",
      choix: ["L'atelier artisanal", "L'usine", "La ferme", "Le marché"],
      bonneReponse: 1,
      explication: "L'usine remplace progressivement l'atelier artisanal comme lieu principal de production.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est l'exode rural et pourquoi il se produit au XIXe siècle.",
      reponse:
        "L'exode rural est le départ massif des paysans des campagnes vers les villes. Il se produit parce que les usines industrielles, installées en ville, offrent du travail, alors que les campagnes ne peuvent plus nourrir toute leur population.",
      explication: "L'exode rural alimente la croissance rapide des villes industrielles comme Manchester ou Le Creusot.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui possède les usines et les capitaux pendant la révolution industrielle ?",
      choix: ["Les ouvriers", "La bourgeoisie industrielle", "Les paysans", "Le clergé"],
      bonneReponse: 1,
      explication: "La bourgeoisie industrielle (patrons, banquiers, commerçants) possède les moyens de production et s'enrichit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris les conditions de travail des ouvriers au XIXe siècle.",
      reponse:
        "Les ouvriers, y compris des femmes et des enfants, travaillent de très longues journées, souvent 12 à 15 heures, six jours sur sept, pour un salaire très faible. Le travail est dangereux, sans mesures de sécurité, et provoque de nombreux accidents et maladies.",
      explication: "Ces conditions extrêmement dures expliquent la naissance des premières lois sociales et des luttes ouvrières.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que fait la loi française de 1841 ?",
      choix: [
        "Elle instaure le droit de grève",
        "Elle limite le travail des enfants dans les usines",
        "Elle crée la Sécurité sociale",
        "Elle interdit le travail des femmes",
      ],
      bonneReponse: 1,
      explication: "La loi de 1841 est la première loi sociale française : elle encadre, sans l'interdire totalement, le travail des enfants.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique comment la révolution industrielle transforme le paysage urbain.",
      reponse:
        "Des villes se développent très rapidement autour des usines et des bassins de charbon, comme Manchester ou Le Creusot. Elles grandissent souvent sans organisation, avec des quartiers ouvriers surpeuplés et insalubres à proximité des usines, tandis que la bourgeoisie industrielle habite des quartiers plus aisés, à l'écart.",
      explication: "L'urbanisation rapide et désordonnée est une conséquence directe de l'industrialisation et de l'exode rural.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel droit est reconnu aux ouvriers français en 1864 ?",
      choix: ["Le droit de vote", "Le droit de grève", "Le droit à la retraite", "Le droit aux congés payés"],
      bonneReponse: 1,
      explication: "Le droit de grève est reconnu en France en 1864, une étape majeure dans l'histoire du mouvement ouvrier.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que la révolution industrielle crée de nouvelles inégalités sociales.",
      reponse:
        "La bourgeoisie industrielle s'enrichit considérablement en possédant les usines et les capitaux, et vit dans des quartiers aisés. À l'inverse, la classe ouvrière, qui produit les richesses par son travail, vit dans la pauvreté, avec de faibles salaires, des journées très longues et des logements insalubres. Cette opposition entre bourgeoisie et classe ouvrière est au cœur des tensions sociales du XIXe siècle.",
      explication: "L'écart entre bourgeoisie industrielle et classe ouvrière illustre les inégalités nées de l'industrialisation.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que 1841 et 1864 marquent des étapes des luttes sociales en France ?",
      reponse:
        "En 1841, l'État intervient pour la première fois pour limiter le travail des enfants, reconnaissant les excès de l'industrialisation. En 1864, le droit de grève est reconnu, ce qui permet aux ouvriers de s'organiser collectivement et de peser sur leurs conditions de travail. Ce sont les premières étapes d'un long processus qui aboutira à des droits sociaux plus larges au XXe siècle.",
      explication: "Ces deux dates jalonnent la construction progressive du droit du travail en France.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle énergie alimente les machines à vapeur au XIXe siècle ?",
      choix: ["Le pétrole", "Le charbon", "L'électricité", "Le gaz naturel"],
      bonneReponse: 1,
      explication: "Le charbon est la principale source d'énergie de la révolution industrielle.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les deux nouvelles classes sociales nées de la révolution industrielle.",
      reponse: "La bourgeoisie industrielle et la classe ouvrière.",
      explication: "L'une possède les usines et les capitaux, l'autre y travaille pour un salaire.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle ville anglaise est un symbole des villes industrielles du XIXe siècle ?",
      choix: ["Londres", "Manchester", "Édimbourg", "Oxford"],
      bonneReponse: 1,
      explication: "Manchester, entourée d'usines textiles, est un symbole de la ville industrielle britannique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que change la loi de 1841 en France ?",
      reponse: "Elle limite pour la première fois le travail des enfants dans les usines.",
      explication: "C'est la première loi sociale française encadrant les conditions de travail.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les conditions de vie des ouvriers sont-elles très difficiles au XIXe siècle ?",
      reponse: "Ils travaillent de très longues journées pour un faible salaire, dans des conditions dangereuses, et vivent dans des logements insalubres et surpeuplés près des usines.",
      explication: "Ces conditions expliquent la naissance des premières luttes sociales et lois protectrices.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'Europe de la révolution industrielle",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qui perfectionne la machine à vapeur à la fin du XVIIIe siècle ?",
          choix: ["Thomas Edison", "James Watt", "Louis Pasteur", "Gustave Eiffel"],
          bonneReponse: 1,
          explication: "L'ingénieur écossais James Watt améliore la machine à vapeur, clé de voûte de la révolution industrielle.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans quel pays et à quelle époque commence la révolution industrielle ?",
          reponse: "Au Royaume-Uni, à la fin du XVIIIe siècle.",
          explication: "Elle se diffuse ensuite en France, en Belgique et en Allemagne durant le XIXe siècle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pourquoi les villes industrielles connaissent-elles une croissance très rapide au XIXe siècle ?",
          choix: [
            "À cause de l'exode rural",
            "À cause de la baisse de la population",
            "À cause de la fin des impôts",
            "À cause de l'abolition de l'esclavage",
          ],
          bonneReponse: 0,
          explication: "L'exode rural pousse des millions de paysans vers les villes industrielles à la recherche de travail.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qui compose la bourgeoisie industrielle et que possède-t-elle ?",
          reponse:
            "La bourgeoisie industrielle regroupe les patrons d'usine, les banquiers et les grands commerçants. Elle possède les usines, les machines et les capitaux nécessaires à la production, ce qui lui permet de s'enrichir considérablement.",
          explication: "Cette classe sociale domine l'économie et la société du XIXe siècle industriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris les conditions de travail des enfants dans les usines avant 1841.",
          reponse:
            "Avant 1841, les enfants travaillent dans les usines sans aucune protection légale, parfois dès l'âge de six ou sept ans, pour de très longues journées et un salaire très faible, dans des conditions dangereuses.",
          explication: "La loi de 1841 marque le début, encore timide, de l'encadrement du travail des enfants en France.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique comment la révolution industrielle transforme l'économie, les villes et la société en Europe au XIXe siècle (une quinzaine de lignes).",
          reponse:
            "Introduction : à partir de la fin du dix-huitième siècle, la révolution industrielle transforme profondément l'Europe. Première partie : de nouvelles techniques bouleversent la production ; la machine à vapeur, perfectionnée par James Watt, et le charbon remplacent la force humaine et animale, tandis que le chemin de fer se développe à partir des années 1830. Deuxième partie : ces innovations transforment les paysages ; la production se concentre dans de grandes usines, ce qui provoque un exode rural massif et la croissance rapide de villes industrielles comme Manchester ou Le Creusot. Troisième partie : la société se recompose ; une bourgeoisie industrielle s'enrichit en possédant les usines et les capitaux, tandis qu'une classe ouvrière nombreuse travaille dans des conditions très difficiles, ce qui provoque les premières lois sociales, comme celle de 1841 sur le travail des enfants, et les premières luttes ouvrières. Conclusion : en quelques décennies, la révolution industrielle a créé une nouvelle économie, de nouvelles villes et de nouvelles inégalités sociales en Europe.",
          explication: "Le développement doit articuler innovations techniques, transformations urbaines et transformations sociales.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'Europe de la révolution industrielle",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel moyen de transport se développe fortement à partir des années 1830 ?",
          choix: ["L'automobile", "Le chemin de fer", "L'avion", "Le métro"],
          bonneReponse: 1,
          explication: "Le chemin de fer révolutionne le transport des hommes et des marchandises au XIXe siècle.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel droit est reconnu aux ouvriers français en 1864 ?",
          reponse: "Le droit de grève.",
          explication: "Cette reconnaissance marque une étape importante de l'histoire du mouvement ouvrier en France.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Où s'installent en priorité les usines industrielles ?",
          choix: [
            "Loin des villes, en pleine campagne",
            "Près des mines de charbon et des voies ferrées",
            "Uniquement dans les ports",
            "Dans les zones montagneuses",
          ],
          bonneReponse: 1,
          explication: "Les usines ont besoin de charbon pour fonctionner et de voies de communication pour transporter leur production.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Compare les conditions de vie de la bourgeoisie industrielle et de la classe ouvrière.",
          reponse:
            "La bourgeoisie industrielle s'enrichit grâce aux usines et aux capitaux qu'elle possède ; elle vit dans de beaux quartiers, loin des usines. La classe ouvrière, qui travaille de longues heures pour un faible salaire, vit dans des logements insalubres et surpeuplés, à proximité immédiate des usines.",
          explication: "Cette opposition illustre les fortes inégalités sociales créées par l'industrialisation.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi peut-on parler de progrès social entre 1841 et 1864 en France ?",
          reponse:
            "En 1841, une première loi limite le travail des enfants dans les usines. En 1864, le droit de grève est reconnu, ce qui permet aux ouvriers de défendre collectivement leurs conditions de travail. Ce sont les débuts d'une législation protectrice des travailleurs.",
          explication: "Ces deux dates marquent le point de départ du droit du travail en France, encore très incomplet à l'époque.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que la révolution industrielle est à l'origine de nouvelles inégalités sociales et des premières luttes ouvrières.",
          reponse:
            "Introduction : la révolution industrielle enrichit l'Europe mais creuse aussi de profondes inégalités entre les classes sociales. Première partie : une nouvelle bourgeoisie industrielle, composée de patrons, de banquiers et de commerçants, possède les usines et les capitaux et s'enrichit considérablement. Deuxième partie : à l'inverse, la classe ouvrière, qui produit ces richesses par son travail, vit dans des conditions très dures, avec des journées de douze à quinze heures, des salaires faibles et des logements insalubres, y compris pour les femmes et les enfants. Troisième partie : face à ces inégalités, les ouvriers commencent à s'organiser et l'État intervient timidement, avec la loi de 1841 sur le travail des enfants puis la reconnaissance du droit de grève en 1864, qui permet la naissance des syndicats. Conclusion : la révolution industrielle fait ainsi naître, avec les inégalités qu'elle crée, les premières formes du mouvement ouvrier et de la législation sociale en Europe.",
          explication: "On attend une mise en relation claire entre l'enrichissement de la bourgeoisie, la pauvreté ouvrière et les réponses sociales de 1841 et 1864.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La révolution industrielle débute au Royaume-Uni à la fin du XVIIIe siècle, puis se diffuse en Europe au XIXe siècle.",
    "Repère brevet : la machine à vapeur (James Watt) et le charbon sont au cœur de la révolution industrielle.",
    "Le chemin de fer se développe à partir des années 1830 et transforme les transports.",
    "L'exode rural alimente la croissance rapide des villes industrielles (Manchester, Le Creusot).",
    "Deux nouvelles classes sociales : la bourgeoisie industrielle (usines, capitaux) et la classe ouvrière (travail dur, faibles salaires).",
    "Repère brevet : loi de 1841 sur le travail des enfants ; reconnaissance du droit de grève en 1864.",
  ],
},
{
  slug: "mondialisation-mers",
  titre: "Mers et océans dans la mondialisation",
  matiere: "histoire-geo",
  niveau: "4eme",
  description:
    "Comprendre pourquoi les mers et les océans sont au cœur de la mondialisation : routes maritimes, grands ports, porte-conteneurs, mais aussi ressources, tensions et enjeux environnementaux.",
  objectifs: [
    "Expliquer pourquoi les mers et océans sont essentiels au commerce mondial",
    "Localiser les grandes routes maritimes, les détroits stratégiques et les grands ports mondiaux",
    "Comprendre le rôle des porte-conteneurs et des façades maritimes dans la mondialisation",
    "Identifier les tensions (appropriation des espaces maritimes) et les enjeux environnementaux des océans",
    "Mémoriser les repères : 90 % du commerce mondial par voie maritime, détroits de Malacca, d'Ormuz, canal de Suez, canal de Panama",
  ],
  slides: [
    {
      titre: "Les mers et océans, cœur du commerce mondial",
      illustration: "🚢",
      visuel: "90 % du commerce mondial",
      contenu: [
        "Environ 90 % du commerce mondial en volume passe par la voie maritime",
        "Les navires transportent des matières premières, des produits manufacturés et de l'énergie",
        "Le transport maritime est peu coûteux pour de très grandes quantités de marchandises",
        "Les mers et océans sont donc indispensables au fonctionnement de la mondialisation",
      ],
      voixOff:
        "Les mers et les océans sont au cœur de la mondialisation : environ quatre-vingt-dix pour cent du commerce mondial, en volume, transite par la voie maritime. Les navires transportent des matières premières, des produits manufacturés et de l'énergie d'un continent à l'autre. Le transport maritime reste en effet le moyen le moins coûteux pour déplacer de très grandes quantités de marchandises. Les mers et les océans sont donc absolument indispensables au fonctionnement de l'économie mondiale.",
    },
    {
      titre: "Les grandes routes maritimes mondiales",
      illustration: "🗺️",
      visuel: "Asie – Europe – Amérique",
      contenu: [
        "Les routes maritimes les plus fréquentées relient l'Asie, l'Europe et l'Amérique du Nord",
        "La route Asie-Europe, via l'océan Indien et la mer Méditerranée, est la plus empruntée",
        "Ces routes passent par des points de passage stratégiques : détroits et canaux",
        "Les grandes façades maritimes concentrent les échanges et l'activité économique",
      ],
      voixOff:
        "Les routes maritimes les plus fréquentées relient les grandes puissances économiques : l'Asie, l'Europe et l'Amérique du Nord. La route reliant l'Asie à l'Europe, via l'océan Indien et la mer Méditerranée, est la plus empruntée au monde. Ces routes passent par des points de passage stratégiques, comme des détroits ou des canaux, où le trafic maritime est particulièrement dense. Autour de ces routes se concentrent aussi les grandes façades maritimes, ces littoraux très actifs économiquement.",
    },
    {
      titre: "Détroits et canaux : des points de passage stratégiques",
      illustration: "⛴️",
      visuel: "Suez, Panama, Malacca, Ormuz",
      contenu: [
        "Le canal de Suez relie la mer Méditerranée à la mer Rouge, évitant le tour de l'Afrique",
        "Le canal de Panama relie l'océan Atlantique à l'océan Pacifique en Amérique centrale",
        "Le détroit de Malacca, entre l'Indonésie et la Malaisie, est un passage essentiel vers l'Asie",
        "Le détroit d'Ormuz, dans le golfe Persique, est vital pour le transport du pétrole",
      ],
      voixOff:
        "Certains points de passage sont si stratégiques qu'on les appelle des « points chauds » du commerce mondial. Le canal de Suez relie la mer Méditerranée à la mer Rouge et évite aux navires de contourner l'Afrique. Le canal de Panama relie l'Atlantique au Pacifique en Amérique centrale. Le détroit de Malacca, entre l'Indonésie et la Malaisie, est emprunté par une immense partie du trafic vers l'Asie. Le détroit d'Ormuz, dans le golfe Persique, est quant à lui vital pour le transport mondial du pétrole.",
    },
    {
      titre: "Les porte-conteneurs, symboles de la mondialisation",
      illustration: "📦",
      visuel: "Porte-conteneurs géants",
      contenu: [
        "Depuis les années 1960, la conteneurisation révolutionne le transport maritime",
        "Les porte-conteneurs géants peuvent transporter plus de 20 000 conteneurs",
        "Cette standardisation rend le chargement et le déchargement des navires très rapides",
        "Ces navires géants relient les plus grands ports mondiaux entre eux",
      ],
      voixOff:
        "Depuis les années 1960, l'invention du conteneur a révolutionné le transport maritime : c'est la conteneurisation. Les plus grands porte-conteneurs actuels peuvent transporter plus de vingt mille conteneurs en une seule traversée. Cette standardisation permet de charger et décharger les navires beaucoup plus rapidement dans les ports. Ces navires géants, véritables symboles de la mondialisation, relient en permanence les plus grands ports du monde.",
    },
    {
      titre: "Les grands ports mondiaux",
      illustration: "⚓",
      visuel: "Shanghai, Singapour, Rotterdam",
      contenu: [
        "Les plus grands ports mondiaux se situent aujourd'hui en Asie : Shanghai, Singapour, Ningbo",
        "Rotterdam (Pays-Bas) est le premier port d'Europe",
        "Ces ports sont de véritables interfaces entre la mer et le continent",
        "Ils sont équipés de zones industrialo-portuaires et connectés aux réseaux de transport terrestres",
      ],
      voixOff:
        "Les plus grands ports mondiaux se situent aujourd'hui en Asie, portés par l'essor économique de la région : Shanghai, Singapour ou Ningbo figurent parmi les premiers ports mondiaux. En Europe, Rotterdam, aux Pays-Bas, reste le port le plus actif. Ces ports sont de véritables interfaces entre la mer et le continent : ils sont équipés de vastes zones industrialo-portuaires et reliés aux réseaux de transport terrestres, comme le rail et la route.",
    },
    {
      titre: "Des ressources convoitées et des tensions",
      illustration: "⚡",
      visuel: "Pêche, hydrocarbures",
      contenu: [
        "Les mers et océans fournissent des ressources essentielles : poissons, hydrocarbures, minerais",
        "Les États cherchent à agrandir leurs zones économiques exclusives (ZEE) pour exploiter ces ressources",
        "Ces appropriations d'espaces maritimes provoquent des tensions entre pays voisins",
        "La piraterie maritime menace aussi certaines routes commerciales, comme au large de la Somalie",
      ],
      voixOff:
        "Les mers et les océans fournissent des ressources essentielles : poissons, hydrocarbures, minerais présents sur les fonds marins. Pour exploiter ces ressources, les États cherchent à étendre leurs zones économiques exclusives, appelées ZEE, ce qui provoque parfois des tensions avec les pays voisins qui revendiquent les mêmes espaces. Certaines routes commerciales sont aussi menacées par la piraterie maritime, notamment au large de la Somalie ou dans le golfe de Guinée.",
    },
    {
      titre: "Les océans face aux enjeux environnementaux",
      illustration: "🌊",
      visuel: "Pollution, réchauffement",
      contenu: [
        "Le trafic maritime intense provoque une pollution importante (hydrocarbures, déchets plastiques)",
        "Le réchauffement climatique fait monter le niveau des océans et menace les littoraux",
        "La surpêche épuise certaines ressources halieutiques (poissons)",
        "Des espaces marins protégés sont créés pour préserver la biodiversité océanique",
      ],
      voixOff:
        "L'intense trafic maritime provoque une pollution importante des océans, liée aux hydrocarbures et aux déchets plastiques. Le réchauffement climatique fait monter le niveau des mers, ce qui menace directement les littoraux et certaines îles. La surpêche épuise par ailleurs certaines ressources en poissons. Face à ces menaces, des espaces marins protégés sont créés dans le monde entier pour préserver la biodiversité des océans.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Environ 90 % du commerce mondial passe par la voie maritime",
        "Les routes maritimes passent par des points stratégiques : Suez, Panama, Malacca, Ormuz",
        "Les grands ports mondiaux (Shanghai, Singapour, Rotterdam) sont des interfaces essentielles",
        "Les mers et océans sont aussi des espaces de tensions et de défis environnementaux",
      ],
      voixOff:
        "Résumons. Environ quatre-vingt-dix pour cent du commerce mondial passe aujourd'hui par la voie maritime, grâce notamment aux porte-conteneurs géants qui empruntent des points de passage stratégiques comme les canaux de Suez et de Panama ou les détroits de Malacca et d'Ormuz. Les plus grands ports mondiaux, comme Shanghai, Singapour ou Rotterdam, sont des interfaces essentielles entre la mer et le continent. Mais les mers et les océans sont aussi des espaces de tensions, liées aux ressources et à la piraterie, et confrontés à d'importants défis environnementaux. Tu connais maintenant le rôle central des mers et des océans dans la mondialisation.",
    },
  ],
  fiche: {
    intro:
      "Les mers et les océans sont au cœur de la mondialisation : environ 90 % du commerce mondial y transite. Cette maritimisation des échanges s'appuie sur des routes maritimes, des points de passage stratégiques et de grands ports, mais elle génère aussi des tensions et des défis environnementaux.",
    sections: [
      {
        titre: "Le commerce maritime mondial",
        points: [
          "Environ 90 % du commerce mondial en volume passe par la voie maritime",
          "Les porte-conteneurs géants, depuis les années 1960, symbolisent cette mondialisation maritime",
          "Les grandes routes maritimes relient l'Asie, l'Europe et l'Amérique du Nord",
          "La route Asie-Europe, via l'océan Indien et la Méditerranée, est la plus fréquentée",
        ],
      },
      {
        titre: "Les points de passage stratégiques",
        points: [
          "Le canal de Suez relie la Méditerranée à la mer Rouge",
          "Le canal de Panama relie l'Atlantique au Pacifique",
          "Le détroit de Malacca, entre Indonésie et Malaisie, est essentiel vers l'Asie",
          "Le détroit d'Ormuz, dans le golfe Persique, est vital pour le transport du pétrole",
        ],
      },
      {
        titre: "Les grands ports mondiaux",
        points: [
          "Les premiers ports mondiaux sont en Asie : Shanghai, Singapour, Ningbo",
          "Rotterdam (Pays-Bas) reste le premier port d'Europe",
          "Les ports sont des interfaces entre la mer et le continent, avec zones industrialo-portuaires",
          "Ils sont connectés aux réseaux de transport terrestre (rail, route)",
        ],
      },
      {
        titre: "Tensions et enjeux environnementaux",
        points: [
          "Ressources convoitées : pêche, hydrocarbures, minerais des fonds marins",
          "Extension des zones économiques exclusives (ZEE), sources de tensions entre États",
          "Piraterie maritime sur certaines routes (au large de la Somalie, golfe de Guinée)",
          "Pollution, réchauffement climatique, surpêche : les océans sont fragilisés",
        ],
      },
    ],
    audio:
      "Fiche de révision : mers et océans dans la mondialisation. Environ quatre-vingt-dix pour cent du commerce mondial en volume passe aujourd'hui par la voie maritime, grâce notamment aux porte-conteneurs géants apparus depuis les années 1960. Les grandes routes maritimes relient l'Asie, l'Europe et l'Amérique du Nord, en particulier via l'océan Indien et la mer Méditerranée. Elles passent par des points de passage stratégiques : le canal de Suez, le canal de Panama, le détroit de Malacca et le détroit d'Ormuz. Les plus grands ports mondiaux se situent aujourd'hui en Asie, comme Shanghai ou Singapour, tandis que Rotterdam reste le premier port d'Europe ; ce sont des interfaces essentielles entre la mer et le continent. Mais les mers et les océans sont aussi des espaces de tensions, liées à l'appropriation des ressources et des zones économiques exclusives, ainsi qu'à la piraterie maritime. Enfin, ils font face à d'importants défis environnementaux : pollution, réchauffement climatique et surpêche, qui menacent la biodiversité océanique.",
  },
  memoCards: [
    { recto: "Quelle part du commerce mondial passe par la voie maritime ?", verso: "Environ 90 % du commerce mondial en volume." },
    { recto: "Qu'est-ce que la conteneurisation ?", verso: "L'usage de conteneurs standardisés depuis les années 1960, qui a révolutionné et accéléré le transport maritime." },
    { recto: "Que relie le canal de Suez ?", verso: "La mer Méditerranée à la mer Rouge, en évitant le tour de l'Afrique." },
    { recto: "Que relie le canal de Panama ?", verso: "L'océan Atlantique à l'océan Pacifique, en Amérique centrale." },
    { recto: "Pourquoi le détroit de Malacca est-il stratégique ?", verso: "Il est un passage essentiel entre l'océan Indien et l'Asie du Sud-Est, très emprunté par le trafic maritime mondial." },
    { recto: "Pourquoi le détroit d'Ormuz est-il stratégique ?", verso: "Il est vital pour le transport mondial du pétrole, situé dans le golfe Persique." },
    { recto: "Quels sont les plus grands ports mondiaux aujourd'hui ?", verso: "Principalement en Asie : Shanghai, Singapour, Ningbo ; Rotterdam est le premier port d'Europe." },
    { recto: "Qu'est-ce qu'une ZEE (zone économique exclusive) ?", verso: "Un espace maritime où un État a des droits exclusifs d'exploitation des ressources (pêche, hydrocarbures), source de tensions entre pays voisins." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle part du commerce mondial en volume passe par la voie maritime ?",
      choix: ["Environ 30 %", "Environ 50 %", "Environ 90 %", "Environ 10 %"],
      bonneReponse: 2,
      explication: "Environ 90 % du commerce mondial en volume est transporté par voie maritime, ce qui en fait un espace essentiel de la mondialisation.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on les grands navires qui transportent des conteneurs ?",
      choix: ["Des pétroliers", "Des porte-conteneurs", "Des ferries", "Des sous-marins"],
      bonneReponse: 1,
      explication: "Les porte-conteneurs, dont certains transportent plus de 20 000 conteneurs, sont les symboles du commerce maritime mondialisé.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que relie le canal de Suez ?",
      reponse: "La mer Méditerranée à la mer Rouge.",
      explication: "Le canal de Suez permet d'éviter aux navires de contourner l'Afrique par le cap de Bonne-Espérance.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Où se trouve le premier port d'Europe ?",
      choix: ["Marseille", "Rotterdam", "Hambourg", "Le Havre"],
      bonneReponse: 1,
      explication: "Rotterdam, aux Pays-Bas, est le premier port d'Europe par le volume de marchandises traitées.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi les points de passage comme les canaux et les détroits sont dits stratégiques.",
      reponse:
        "Ce sont des passages obligés pour de nombreuses routes maritimes mondiales : ils permettent de raccourcir considérablement les trajets (comme le canal de Suez ou de Panama) ou sont les seuls chemins maritimes possibles entre deux zones (comme les détroits de Malacca ou d'Ormuz). Leur fermeture ou leur blocage perturberait fortement le commerce mondial.",
      explication: "Ces points de passage concentrent un trafic maritime très dense et sont donc essentiels au bon fonctionnement du commerce mondial.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pourquoi le détroit d'Ormuz est-il particulièrement stratégique ?",
      choix: [
        "Il est le passage principal pour le tourisme",
        "Il est vital pour le transport mondial du pétrole",
        "Il relie l'Atlantique au Pacifique",
        "Il est situé en Europe",
      ],
      bonneReponse: 1,
      explication: "Le détroit d'Ormuz, dans le golfe Persique, est emprunté par une grande partie du pétrole exporté dans le monde.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Où se situent aujourd'hui les plus grands ports mondiaux et pourquoi ?",
      reponse:
        "Les plus grands ports mondiaux se situent aujourd'hui principalement en Asie (Shanghai, Singapour, Ningbo), en raison de la forte croissance économique et industrielle de cette région, qui exporte et importe d'immenses quantités de marchandises.",
      explication: "La montée en puissance économique de l'Asie explique le déplacement des principaux ports mondiaux vers ce continent.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qu'une zone économique exclusive (ZEE) ?",
      choix: [
        "Un espace maritime interdit à tous les navires",
        "Un espace maritime où un État a des droits exclusifs d'exploitation des ressources",
        "Une route maritime commerciale",
        "Un port franc sans taxes",
      ],
      bonneReponse: 1,
      explication: "La ZEE permet à un État d'exploiter les ressources (pêche, hydrocarbures) d'un espace maritime proche de ses côtes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en quoi les mers et océans peuvent être des espaces de tensions entre États.",
      reponse:
        "Les États cherchent à agrandir leurs zones économiques exclusives pour exploiter les ressources maritimes (pêche, hydrocarbures, minerais), ce qui peut provoquer des conflits territoriaux avec des pays voisins revendiquant les mêmes espaces. Le contrôle de points de passage stratégiques, comme certains détroits, peut aussi être source de tensions géopolitiques. Enfin, la piraterie maritime menace la sécurité de certaines routes commerciales.",
      explication: "Les mers et océans ne sont pas seulement des espaces d'échanges pacifiques : ils sont aussi des enjeux de pouvoir et de rivalités.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Depuis quand la conteneurisation révolutionne-t-elle le transport maritime ?",
      choix: ["Les années 1900", "Les années 1930", "Les années 1960", "Les années 2000"],
      bonneReponse: 2,
      explication: "L'invention et la généralisation du conteneur standardisé datent des années 1960.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris deux enjeux environnementaux liés aux mers et aux océans dans la mondialisation.",
      reponse:
        "Le trafic maritime intense provoque une pollution importante des océans (hydrocarbures, déchets plastiques). Le réchauffement climatique fait aussi monter le niveau des mers, ce qui menace les littoraux et certaines îles, tandis que la surpêche épuise certaines ressources en poissons, menaçant la biodiversité marine.",
      explication: "La mondialisation maritime a un impact environnemental important, ce qui pousse à créer des espaces marins protégés.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que les grands ports mondiaux sont des interfaces essentielles de la mondialisation.",
      reponse:
        "Un grand port comme Shanghai ou Rotterdam relie la mer au continent : il reçoit et expédie des marchandises par porte-conteneurs, tout en étant connecté aux réseaux de transport terrestre (routes, voies ferrées) qui distribuent ces marchandises vers l'intérieur des terres. Ces ports concentrent aussi des zones industrialo-portuaires qui transforment les matières premières importées, ce qui en fait de véritables moteurs économiques régionaux.",
      explication: "Une interface est un lieu de contact et d'échange entre deux espaces différents ; le port relie ainsi l'espace maritime mondial et l'espace continental.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle part du commerce mondial en volume passe par la mer ?",
      choix: ["Environ 50 %", "Environ 70 %", "Environ 90 %", "Environ 100 %"],
      bonneReponse: 2,
      explication: "Environ 90 % du commerce mondial en volume transite par la voie maritime.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux canaux stratégiques pour le commerce maritime mondial.",
      reponse: "Le canal de Suez et le canal de Panama.",
      explication: "Ces deux canaux permettent de raccourcir considérablement les trajets maritimes mondiaux.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel détroit est vital pour le transport mondial du pétrole ?",
      choix: ["Le détroit de Gibraltar", "Le détroit de Malacca", "Le détroit d'Ormuz", "Le détroit de Béring"],
      bonneReponse: 2,
      explication: "Le détroit d'Ormuz, dans le golfe Persique, est emprunté par une grande partie des exportations mondiales de pétrole.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les plus grands ports mondiaux se situent-ils aujourd'hui en Asie ?",
      reponse: "En raison de la forte croissance économique et industrielle de l'Asie, qui exporte et importe d'énormes quantités de marchandises.",
      explication: "Shanghai, Singapour ou Ningbo dominent aujourd'hui le classement des plus grands ports mondiaux.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite un enjeu environnemental lié aux océans dans la mondialisation.",
      reponse: "Par exemple la pollution par les hydrocarbures et les déchets plastiques, le réchauffement climatique et la montée des eaux, ou la surpêche.",
      explication: "Les océans sont fortement fragilisés par l'intensité des activités humaines liées à la mondialisation.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Mers et océans dans la mondialisation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel pourcentage du commerce mondial en volume transite par la mer ?",
          choix: ["Environ 30 %", "Environ 60 %", "Environ 90 %", "Environ 15 %"],
          bonneReponse: 2,
          explication: "Le transport maritime assure environ 90 % du commerce mondial en volume.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un porte-conteneurs ?",
          reponse: "Un très grand navire spécialisé dans le transport de conteneurs standardisés, pouvant en transporter plus de 20 000 sur les plus grands modèles.",
          explication: "Les porte-conteneurs sont les symboles du commerce mondialisé depuis les années 1960.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle route maritime est la plus fréquentée au monde ?",
          choix: [
            "La route entre l'Amérique du Nord et l'Amérique du Sud",
            "La route entre l'Asie et l'Europe, via l'océan Indien",
            "La route entre l'Afrique et l'Océanie",
            "La route entre l'Arctique et l'Antarctique",
          ],
          bonneReponse: 1,
          explication: "La route reliant l'Asie à l'Europe, via l'océan Indien et la Méditerranée, est la plus empruntée au monde.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle du canal de Suez dans le commerce mondial.",
          reponse:
            "Le canal de Suez relie la mer Méditerranée à la mer Rouge. Il permet aux navires reliant l'Europe à l'Asie d'éviter de contourner tout le continent africain, ce qui raccourcit considérablement les trajets et les coûts de transport.",
          explication: "Le canal de Suez est l'un des points de passage maritimes les plus stratégiques au monde.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce qu'une zone économique exclusive (ZEE) et pourquoi peut-elle être source de tensions ?",
          reponse:
            "C'est un espace maritime dans lequel un État a des droits exclusifs pour exploiter les ressources (pêche, hydrocarbures). Ces zones peuvent être source de tensions lorsque plusieurs États revendiquent les mêmes espaces maritimes riches en ressources.",
          explication: "L'appropriation des espaces maritimes est un enjeu géopolitique majeur de la mondialisation.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que les mers et les océans sont indispensables à la mondialisation, à travers les routes maritimes, les points de passage stratégiques et les grands ports (une quinzaine de lignes).",
          reponse:
            "Introduction : les mers et les océans sont aujourd'hui au cœur du fonctionnement de l'économie mondiale. Première partie : environ quatre-vingt-dix pour cent du commerce mondial en volume passe par la voie maritime, grâce notamment aux porte-conteneurs géants qui empruntent de grandes routes maritimes, en particulier entre l'Asie, l'Europe et l'Amérique du Nord. Deuxième partie : ces routes passent par des points de passage stratégiques, comme le canal de Suez, le canal de Panama, ou les détroits de Malacca et d'Ormuz, qui concentrent un trafic maritime très dense et raccourcissent considérablement les trajets. Troisième partie : les grands ports mondiaux, comme Shanghai, Singapour ou Rotterdam, sont de véritables interfaces entre la mer et le continent, équipées de zones industrialo-portuaires et connectées aux réseaux de transport terrestre. Conclusion : les mers et les océans forment ainsi un réseau mondial indispensable, mais aussi fragile et parfois source de tensions.",
          explication: "On attend l'articulation entre commerce maritime, points de passage stratégiques et grands ports, avec des exemples précis.",
        },
      ],
    },
    {
      titre: "Examen 2 — Mers et océans dans la mondialisation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que relie le canal de Panama ?",
          choix: ["L'océan Atlantique et l'océan Pacifique", "La mer Méditerranée et la mer Rouge", "L'océan Indien et le Pacifique", "L'Europe et l'Afrique"],
          bonneReponse: 0,
          explication: "Le canal de Panama, en Amérique centrale, relie l'océan Atlantique à l'océan Pacifique.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite un grand port mondial situé en Asie.",
          reponse: "Par exemple Shanghai, Singapour ou Ningbo.",
          explication: "Les plus grands ports mondiaux se situent aujourd'hui majoritairement en Asie.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel phénomène menace certaines routes commerciales maritimes, notamment au large de la Somalie ?",
          choix: ["La piraterie maritime", "La surpêche", "Le réchauffement climatique", "La conteneurisation"],
          bonneReponse: 0,
          explication: "La piraterie maritime menace la sécurité de certaines routes commerciales, en particulier au large de la Somalie ou dans le golfe de Guinée.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qu'est la conteneurisation et pourquoi elle a transformé le commerce mondial.",
          reponse:
            "La conteneurisation est l'usage de conteneurs standardisés, développé depuis les années 1960, qui permet de charger et décharger rapidement les marchandises entre les navires, les trains et les camions. Elle a fortement réduit les coûts et les délais de transport, favorisant l'explosion des échanges mondiaux.",
          explication: "Le conteneur standardisé est une innovation technique majeure qui a rendu possible la mondialisation actuelle des échanges.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux enjeux environnementaux liés à l'intensification du trafic maritime.",
          reponse: "La pollution des océans par les hydrocarbures et les déchets plastiques, et le réchauffement climatique qui fait monter le niveau des mers et menace les littoraux.",
          explication: "L'intensification des échanges maritimes a un coût environnemental important, qui pousse à créer des espaces marins protégés.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique pourquoi les mers et océans sont aussi des espaces de tensions et de fragilités dans la mondialisation.",
          reponse:
            "Introduction : si les mers et les océans permettent les échanges mondiaux, ils sont aussi des espaces de rivalités et de fragilités. Première partie : les États cherchent à étendre leurs zones économiques exclusives pour exploiter les ressources maritimes, comme la pêche, les hydrocarbures ou les minerais des fonds marins, ce qui provoque des tensions territoriales avec les pays voisins. Deuxième partie : certaines routes commerciales sont aussi menacées par la piraterie maritime, notamment au large de la Somalie ou dans le golfe de Guinée, ce qui oblige parfois à sécuriser militairement certains trajets. Troisième partie : les océans subissent également d'importants dommages environnementaux liés à l'intensité du trafic maritime : pollution par les hydrocarbures et les déchets plastiques, réchauffement climatique et montée des eaux, surpêche qui épuise certaines ressources halieutiques. Conclusion : les mers et océans, essentiels à la mondialisation, sont donc aussi des espaces vulnérables qui nécessitent une coopération internationale accrue.",
          explication: "On attend la mention des tensions liées aux ZEE, de la piraterie, et des enjeux environnementaux (pollution, réchauffement, surpêche).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : environ 90 % du commerce mondial en volume passe par la voie maritime.",
    "Les porte-conteneurs, développés depuis les années 1960, sont les symboles du commerce maritime mondialisé.",
    "Repère brevet : canal de Suez (Méditerranée-mer Rouge) et canal de Panama (Atlantique-Pacifique), points de passage stratégiques.",
    "Repère brevet : détroit de Malacca (vers l'Asie) et détroit d'Ormuz (transport du pétrole).",
    "Les plus grands ports mondiaux sont en Asie (Shanghai, Singapour) ; Rotterdam est le premier port d'Europe.",
    "Les mers et océans sont des espaces de tensions (ZEE, piraterie) et de fragilités environnementales (pollution, réchauffement, surpêche).",
  ],
},
{
  slug: "revolution-francaise",
  titre: "La Révolution française et l'Empire",
  matiere: "histoire-geo",
  niveau: "4eme",
  description:
    "Comprendre pourquoi la Révolution éclate en 1789, comment la France passe de la monarchie absolue à la République, puis à l'Empire de Napoléon, et retenir les grandes dates de cette période fondatrice.",
  objectifs: [
    "Expliquer les causes de la Révolution (société d'ordres, crise financière)",
    "Connaître les grands événements de 1789 : États généraux, 14 juillet, 4 août, DDHC",
    "Comprendre le passage de la monarchie constitutionnelle à la Ière République (1792)",
    "Savoir ce qu'est la Terreur et comment Napoléon arrive au pouvoir",
    "Mémoriser les repères : 1789, 26 août 1789, 21 septembre 1792, 1804",
  ],
  slides: [
    {
      titre: "La France d'avant 1789 : la société d'ordres",
      illustration: "⚖️",
      visuel: "3 ordres",
      contenu: [
        "La société est divisée en trois ordres : clergé, noblesse, tiers état",
        "Clergé et noblesse ont des privilèges (pas d'impôts, honneurs)",
        "Le tiers état (97 % des Français) paie presque tous les impôts",
        "Le roi Louis XVI gouverne en monarque absolu",
      ],
      voixOff:
        "Avant 1789, la société française est divisée en trois ordres. Le clergé et la noblesse possèdent des privilèges : ils ne paient presque pas d'impôts et occupent les meilleures places. Le tiers état, qui représente environ quatre-vingt-dix-sept pour cent des Français, paie presque tous les impôts. Au sommet, le roi Louis XVI gouverne en monarque absolu.",
    },
    {
      titre: "Les causes de la Révolution",
      illustration: "💸",
      visuel: "Crise + injustice",
      contenu: [
        "L'État est ruiné : dettes énormes, notamment après la guerre d'Amérique",
        "Mauvaises récoltes en 1788 : le pain devient très cher",
        "Les idées des Lumières critiquent l'absolutisme et les privilèges",
        "Le tiers état exprime son mécontentement dans les cahiers de doléances",
      ],
      voixOff:
        "Plusieurs causes se combinent. L'État est ruiné par ses dettes, notamment à cause de la guerre d'indépendance américaine. Les mauvaises récoltes de 1788 font grimper le prix du pain. Les idées des philosophes des Lumières critiquent l'absolutisme et les privilèges. Dans les cahiers de doléances, les Français expriment leurs plaintes et leurs espoirs de réforme.",
    },
    {
      titre: "Mai-juin 1789 : les États généraux",
      illustration: "🏛️",
      visuel: "5 mai 1789",
      contenu: [
        "Le 5 mai 1789, Louis XVI réunit les États généraux à Versailles",
        "Le vote par ordre défavorise le tiers état",
        "17 juin : les députés du tiers état se proclament Assemblée nationale",
        "20 juin : serment du Jeu de paume, ils jurent de donner une constitution à la France",
      ],
      voixOff:
        "Pour résoudre la crise financière, Louis XVI réunit les États généraux à Versailles le cinq mai 1789. Mais le vote par ordre défavorise le tiers état. Le dix-sept juin, ses députés se proclament Assemblée nationale. Le vingt juin, réunis dans la salle du Jeu de paume, ils jurent de ne pas se séparer avant d'avoir donné une constitution à la France. La souveraineté change de mains.",
    },
    {
      titre: "Le 14 juillet 1789 : la prise de la Bastille",
      illustration: "🏰",
      visuel: "14 juillet 1789",
      contenu: [
        "Le peuple de Paris craint que le roi n'écrase l'Assemblée par la force",
        "Le 14 juillet 1789, les Parisiens prennent la forteresse de la Bastille",
        "La Bastille est le symbole de l'arbitraire royal",
        "Repère à retenir : 14 juillet 1789",
      ],
      voixOff:
        "À Paris, la peur monte : le roi rassemble des troupes et le peuple craint qu'il n'écrase l'Assemblée. Le quatorze juillet 1789, les Parisiens partent chercher des armes et s'emparent de la Bastille, une forteresse-prison qui symbolise l'arbitraire royal. Cet événement marque le début de la Révolution populaire. C'est un repère de date essentiel.",
    },
    {
      titre: "L'été 1789 : la fin de l'Ancien Régime",
      illustration: "📜",
      visuel: "4 août + 26 août 1789",
      contenu: [
        "Nuit du 4 août 1789 : l'Assemblée abolit les privilèges",
        "26 août 1789 : Déclaration des droits de l'homme et du citoyen",
        "Liberté, égalité devant la loi, souveraineté de la nation",
        "L'Ancien Régime (société d'ordres, absolutisme) s'effondre",
      ],
      voixOff:
        "Dans la nuit du quatre août 1789, les députés abolissent les privilèges : la société d'ordres disparaît. Le vingt-six août, ils adoptent la Déclaration des droits de l'homme et du citoyen, qui proclame la liberté, l'égalité devant la loi et la souveraineté de la nation. En quelques semaines, l'Ancien Régime s'est effondré.",
    },
    {
      titre: "La monarchie constitutionnelle (1789-1792)",
      illustration: "👑",
      visuel: "Constitution de 1791",
      contenu: [
        "La Constitution de 1791 limite les pouvoirs du roi",
        "L'Assemblée vote les lois, le roi dirige le gouvernement",
        "Juin 1791 : Louis XVI tente de fuir, il est arrêté à Varennes",
        "La confiance envers le roi est brisée ; la guerre éclate en avril 1792",
      ],
      voixOff:
        "La France devient une monarchie constitutionnelle : la Constitution de 1791 partage le pouvoir entre le roi et une assemblée élue. Mais en juin 1791, Louis XVI tente de fuir à l'étranger et il est arrêté à Varennes : la confiance est brisée. En avril 1792, la France déclare la guerre à l'Autriche, et les défaites aggravent la crise.",
    },
    {
      titre: "1792 : la Ière République",
      illustration: "🇫🇷",
      visuel: "21-22 septembre 1792",
      contenu: [
        "10 août 1792 : le peuple prend le palais des Tuileries, le roi est suspendu",
        "21 septembre 1792 : la Convention abolit la royauté",
        "22 septembre 1792 : début de la Ière République",
        "21 janvier 1793 : Louis XVI, condamné pour trahison, est guillotiné",
      ],
      voixOff:
        "Le dix août 1792, les Parisiens prennent d'assaut le palais des Tuileries et le roi est suspendu. Une nouvelle assemblée, la Convention, élue au suffrage universel masculin, abolit la royauté le vingt-et-un septembre 1792 : c'est le début de la Première République. Jugé pour trahison, Louis XVI est guillotiné le vingt-et-un janvier 1793.",
    },
    {
      titre: "La Terreur (1793-1794)",
      illustration: "🗡️",
      visuel: "1793-1794",
      contenu: [
        "La République est menacée : guerre étrangère, révoltes intérieures (Vendée)",
        "Robespierre et le Comité de salut public imposent la Terreur",
        "Les suspects sont jugés et souvent guillotinés",
        "27 juillet 1794 (9 thermidor an II) : Robespierre est renversé et exécuté",
      ],
      voixOff:
        "En 1793, la République est en danger : guerre contre l'Europe, révoltes comme celle de Vendée. Robespierre et le Comité de salut public gouvernent alors par la Terreur : les suspects sont arrêtés, jugés rapidement et souvent guillotinés. Le vingt-sept juillet 1794, le neuf thermidor selon le calendrier révolutionnaire, Robespierre est renversé et exécuté à son tour. La Terreur prend fin.",
    },
    {
      titre: "Napoléon : du Consulat à l'Empire",
      illustration: "🦅",
      visuel: "2 décembre 1804",
      contenu: [
        "9-10 novembre 1799 (18 brumaire) : coup d'État du général Bonaparte",
        "Consul, il rétablit l'ordre et fait rédiger le Code civil (1804)",
        "2 décembre 1804 : Napoléon se fait sacrer empereur à Notre-Dame de Paris",
        "L'Empire conserve l'égalité devant la loi mais limite les libertés",
      ],
      voixOff:
        "Le dix-huit brumaire, c'est-à-dire les neuf et dix novembre 1799, le général Napoléon Bonaparte prend le pouvoir par un coup d'État. Devenu Premier consul, il rétablit l'ordre et fait rédiger le Code civil en 1804, qui garantit l'égalité devant la loi. Le deux décembre 1804, il se fait sacrer empereur des Français à Notre-Dame de Paris. L'Empire conserve certains acquis de la Révolution, mais limite fortement les libertés.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Causes : société d'ordres injuste, crise financière, idées des Lumières",
        "1789 : États généraux, 14 juillet, abolition des privilèges (4 août), DDHC (26 août)",
        "1792 : chute de la monarchie, proclamation de la Ière République",
        "1793-1794 : la Terreur ; 1804 : Napoléon empereur, Code civil",
      ],
      voixOff:
        "Résumons. La Révolution naît de l'injustice de la société d'ordres, de la crise financière et des idées des Lumières. En 1789, tout bascule : États généraux, prise de la Bastille le quatorze juillet, abolition des privilèges le quatre août, Déclaration des droits de l'homme le vingt-six août. En 1792, la monarchie tombe et la Première République est proclamée. Après la Terreur, Napoléon prend le pouvoir et se fait sacrer empereur en 1804. Bravo, tu maîtrises les grandes étapes de la Révolution et de l'Empire !",
    },
  ],
  fiche: {
    intro:
      "Entre 1789 et 1815, la France passe de la monarchie absolue à la République puis à l'Empire. La Révolution française détruit l'Ancien Régime et fonde une société nouvelle basée sur la liberté et l'égalité devant la loi.",
    sections: [
      {
        titre: "Les causes de la Révolution",
        points: [
          "Société d'ordres inégalitaire : clergé et noblesse privilégiés, tiers état qui paie l'impôt",
          "Crise financière : l'État est endetté (notamment par la guerre d'Amérique)",
          "Crise économique : mauvaises récoltes de 1788, pain très cher",
          "Idées des Lumières contre l'absolutisme et les privilèges ; cahiers de doléances",
        ],
      },
      {
        titre: "L'année 1789",
        points: [
          "5 mai : ouverture des États généraux à Versailles",
          "17 juin : Assemblée nationale ; 20 juin : serment du Jeu de paume",
          "14 juillet : prise de la Bastille par le peuple de Paris",
          "Nuit du 4 août : abolition des privilèges ; 26 août : Déclaration des droits de l'homme et du citoyen",
        ],
      },
      {
        titre: "De la monarchie constitutionnelle à la République",
        points: [
          "Constitution de 1791 : le roi partage le pouvoir avec une assemblée élue",
          "Juin 1791 : fuite du roi arrêtée à Varennes ; avril 1792 : guerre contre l'Autriche",
          "10 août 1792 : prise des Tuileries, chute de la monarchie",
          "21 septembre 1792 : abolition de la royauté, la Ière République commence ; 21 janvier 1793 : exécution de Louis XVI",
        ],
      },
      {
        titre: "La Terreur (1793-1794)",
        points: [
          "République menacée : guerre étrangère et révoltes intérieures (Vendée)",
          "Robespierre et le Comité de salut public gouvernent par la Terreur : arrestations et exécutions des suspects",
          "27 juillet 1794 (9 thermidor) : chute et exécution de Robespierre",
        ],
      },
      {
        titre: "Napoléon Bonaparte",
        points: [
          "Coup d'État du 18 brumaire (9-10 novembre 1799) : Bonaparte devient Premier consul",
          "1804 : Code civil, qui fixe l'égalité devant la loi",
          "2 décembre 1804 : sacre de Napoléon Ier, empereur des Français",
          "L'Empire garde des acquis de 1789 mais restreint les libertés ; il s'effondre en 1815 (Waterloo)",
        ],
      },
      {
        titre: "Repères de dates",
        points: [
          "14 juillet 1789 : prise de la Bastille",
          "26 août 1789 : Déclaration des droits de l'homme et du citoyen",
          "21-22 septembre 1792 : proclamation de la Ière République",
          "1804 : sacre de Napoléon et Code civil",
        ],
      },
    ],
    audio:
      "Fiche de révision : la Révolution française et l'Empire. En 1789, la France est une monarchie absolue avec une société divisée en trois ordres, où le tiers état paie presque tous les impôts. La crise financière et les idées des Lumières poussent Louis XVI à réunir les États généraux le 5 mai 1789. Les députés du tiers état se proclament Assemblée nationale, puis le peuple prend la Bastille le 14 juillet 1789. Dans la nuit du 4 août, les privilèges sont abolis, et le 26 août est adoptée la Déclaration des droits de l'homme et du citoyen. Après l'échec de la monarchie constitutionnelle et la fuite du roi à Varennes, la royauté est abolie le 21 septembre 1792 : c'est la Première République. Louis XVI est guillotiné en janvier 1793, puis Robespierre impose la Terreur jusqu'en 1794. Enfin, Napoléon Bonaparte prend le pouvoir en 1799, fait rédiger le Code civil et se fait sacrer empereur le 2 décembre 1804.",
  },
  memoCards: [
    { recto: "Quels sont les trois ordres de la société d'Ancien Régime ?", verso: "Le clergé, la noblesse et le tiers état (environ 97 % de la population)." },
    { recto: "Que se passe-t-il le 14 juillet 1789 ?", verso: "Le peuple de Paris prend la Bastille, symbole de l'arbitraire royal." },
    { recto: "Que se passe-t-il dans la nuit du 4 août 1789 ?", verso: "L'Assemblée nationale abolit les privilèges : fin de la société d'ordres." },
    { recto: "Qu'est-ce que la DDHC et sa date ?", verso: "La Déclaration des droits de l'homme et du citoyen, adoptée le 26 août 1789 : liberté, égalité devant la loi, souveraineté de la nation." },
    { recto: "Qu'est-ce que le serment du Jeu de paume ?", verso: "Le 20 juin 1789, les députés jurent de ne pas se séparer avant d'avoir donné une constitution à la France." },
    { recto: "Quand la Ière République est-elle proclamée ?", verso: "La royauté est abolie le 21 septembre 1792 ; la République commence le 22 septembre 1792." },
    { recto: "Qu'est-ce que la Terreur ?", verso: "Politique menée par Robespierre et le Comité de salut public en 1793-1794 : arrestation et exécution des suspects pour sauver la République." },
    { recto: "Que se passe-t-il le 21 janvier 1793 ?", verso: "Louis XVI, condamné pour trahison par la Convention, est guillotiné à Paris." },
    { recto: "Que se passe-t-il le 2 décembre 1804 ?", verso: "Napoléon Bonaparte se fait sacrer empereur des Français à Notre-Dame de Paris." },
    { recto: "Qu'est-ce que le Code civil (1804) ?", verso: "Recueil de lois voulu par Napoléon : il garantit l'égalité devant la loi et la propriété, encore en vigueur aujourd'hui." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel ordre paie presque tous les impôts avant 1789 ?",
      choix: ["Le clergé", "La noblesse", "Le tiers état", "Les trois ordres à égalité"],
      bonneReponse: 2,
      explication: "Le tiers état, environ 97 % de la population, supporte presque toute la charge fiscale, contrairement aux deux ordres privilégiés.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que prend le peuple de Paris le 14 juillet 1789 ?",
      choix: ["Le château de Versailles", "La Bastille", "Les Tuileries", "Notre-Dame"],
      bonneReponse: 1,
      explication: "Le 14 juillet 1789, les Parisiens s'emparent de la Bastille, forteresse-prison symbole de l'arbitraire royal.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quelle date la Déclaration des droits de l'homme et du citoyen est-elle adoptée ?",
      reponse: "Le 26 août 1789.",
      explication: "La DDHC, adoptée le 26 août 1789, proclame la liberté, l'égalité devant la loi et la souveraineté de la nation.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui se fait sacrer empereur des Français le 2 décembre 1804 ?",
      choix: ["Louis XVI", "Robespierre", "Napoléon Bonaparte", "Louis XVIII"],
      bonneReponse: 2,
      explication: "Napoléon Bonaparte se fait sacrer empereur à Notre-Dame de Paris le 2 décembre 1804.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux causes de la Révolution française.",
      reponse:
        "Par exemple : l'injustice de la société d'ordres (privilèges du clergé et de la noblesse), la crise financière de l'État, la cherté du pain après les mauvaises récoltes de 1788, ou la diffusion des idées des Lumières.",
      explication: "La Révolution résulte de causes sociales, financières, économiques et intellectuelles qui se combinent en 1789.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que jurent les députés lors du serment du Jeu de paume (20 juin 1789) ?",
      choix: [
        "De renverser le roi",
        "De ne pas se séparer avant d'avoir donné une constitution à la France",
        "De supprimer les impôts",
        "De déclarer la guerre à l'Autriche",
      ],
      bonneReponse: 1,
      explication: "Les députés jurent de rester unis jusqu'à ce que la France ait une constitution : c'est un acte fondateur de la souveraineté nationale.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que se passe-t-il dans la nuit du 4 août 1789 et pourquoi est-ce important ?",
      reponse:
        "L'Assemblée nationale abolit les privilèges. C'est la fin de la société d'ordres : tous les Français deviennent égaux en droits, l'Ancien Régime s'effondre.",
      explication: "L'abolition des privilèges met fin à des siècles d'inégalités juridiques entre les ordres.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel événement provoque la perte de confiance envers Louis XVI en juin 1791 ?",
      choix: [
        "La prise de la Bastille",
        "Sa fuite arrêtée à Varennes",
        "Le sacre de Napoléon",
        "La nuit du 4 août",
      ],
      bonneReponse: 1,
      explication: "En juin 1791, Louis XVI tente de fuir à l'étranger ; arrêté à Varennes, il apparaît comme un traître à la Révolution.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la monarchie tombe en 1792.",
      reponse:
        "La fuite à Varennes (juin 1791) a brisé la confiance envers le roi. La guerre déclarée à l'Autriche en avril 1792 tourne mal et le roi est soupçonné de trahison. Le 10 août 1792, le peuple prend les Tuileries et le roi est suspendu. Le 21 septembre 1792, la Convention abolit la royauté et la Ière République est proclamée.",
      explication: "La chute de la monarchie s'explique par la trahison supposée du roi et par la guerre, qui radicalisent la Révolution.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Qu'est-ce que la Terreur ? Donne ses dates, son principal acteur et sa fin.",
      reponse:
        "La Terreur (1793-1794) est une politique d'exception menée par Robespierre et le Comité de salut public pour sauver la République menacée par la guerre et les révoltes : les suspects sont arrêtés et souvent guillotinés. Elle prend fin avec la chute et l'exécution de Robespierre le 27 juillet 1794 (9 thermidor an II).",
      explication: "La Terreur sacrifie les libertés au nom du salut de la République ; elle s'arrête au 9 thermidor.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Comment Napoléon Bonaparte prend-il le pouvoir en novembre 1799 ?",
      choix: [
        "Il est élu président de la République",
        "Il est sacré empereur par le pape",
        "Par le coup d'État du 18 brumaire",
        "Il hérite du trône de Louis XVI",
      ],
      bonneReponse: 2,
      explication: "Les 9 et 10 novembre 1799 (18 brumaire an VIII), le général Bonaparte renverse le Directoire par un coup d'État et devient Premier consul.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que Napoléon conserve certains acquis de la Révolution mais en abandonne d'autres.",
      reponse:
        "Il conserve l'égalité devant la loi et la fin des privilèges, inscrites dans le Code civil de 1804, ainsi que la propriété garantie. Mais il abandonne la liberté politique : presse censurée, opposants surveillés, et il rétablit un pouvoir personnel héréditaire en se faisant sacrer empereur en 1804.",
      explication: "Napoléon stabilise l'héritage social de 1789 (égalité, Code civil) tout en supprimant la liberté politique et la République.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année commence la Révolution française ?",
      choix: ["1789", "1792", "1799", "1804"],
      bonneReponse: 0,
      explication: "La Révolution commence en 1789, avec les États généraux puis la prise de la Bastille le 14 juillet.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que proclame la Déclaration des droits de l'homme et du citoyen ?",
      reponse: "La liberté, l'égalité devant la loi et la souveraineté de la nation.",
      explication: "Adoptée le 26 août 1789, la DDHC fonde les principes de la France nouvelle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quand la royauté est-elle abolie en France ?",
      choix: ["Le 14 juillet 1789", "Le 21 septembre 1792", "Le 21 janvier 1793", "Le 2 décembre 1804"],
      bonneReponse: 1,
      explication: "La Convention abolit la royauté le 21 septembre 1792 ; la Ière République commence le 22 septembre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qui dirige la France pendant la Terreur ?",
      reponse: "Robespierre et le Comité de salut public (1793-1794).",
      explication: "Robespierre domine le Comité de salut public jusqu'à sa chute le 27 juillet 1794.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux réalisations de Napoléon en 1804.",
      reponse: "Le Code civil (égalité devant la loi) et son sacre comme empereur des Français le 2 décembre 1804.",
      explication: "1804 est l'année du Code civil et du sacre : un repère à connaître.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La Révolution française et l'Empire",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pourquoi Louis XVI réunit-il les États généraux le 5 mai 1789 ?",
          choix: [
            "Pour déclarer la guerre à l'Angleterre",
            "Pour résoudre la crise financière de l'État",
            "Pour abolir la monarchie",
            "Pour rédiger le Code civil",
          ],
          bonneReponse: 1,
          explication: "L'État est ruiné : le roi convoque les États généraux pour trouver de nouvelles ressources, notamment de nouveaux impôts.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quels sont les trois ordres de la société française avant 1789 ?",
          reponse: "Le clergé, la noblesse et le tiers état.",
          explication: "Les deux premiers ordres sont privilégiés ; le tiers état regroupe environ 97 % des Français.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Classe ces événements de 1789 dans l'ordre chronologique :",
          choix: [
            "Bastille → États généraux → DDHC → 4 août",
            "États généraux → Bastille → 4 août → DDHC",
            "DDHC → 4 août → Bastille → États généraux",
            "États généraux → DDHC → Bastille → 4 août",
          ],
          bonneReponse: 1,
          explication: "5 mai : États généraux ; 14 juillet : Bastille ; nuit du 4 août : abolition des privilèges ; 26 août : DDHC.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce qu'une monarchie constitutionnelle ? Quand la France en devient-elle une ?",
          reponse:
            "Un régime où les pouvoirs du roi sont limités par une constitution : le roi gouverne mais une assemblée élue vote les lois. La France devient une monarchie constitutionnelle avec la Constitution de 1791.",
          explication: "La Constitution de 1791 met fin à la monarchie absolue en séparant les pouvoirs.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi Louis XVI est-il exécuté le 21 janvier 1793 ?",
          reponse:
            "Après la chute de la monarchie le 10 août 1792, la Convention le juge pour trahison (notamment ses contacts avec les ennemis de la France en guerre) et le condamne à mort. Il est guillotiné le 21 janvier 1793.",
          explication: "Le procès du roi marque la rupture définitive avec la monarchie.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre comment l'année 1789 met fin à l'Ancien Régime (une quinzaine de lignes, avec des dates précises).",
          reponse:
            "Introduction : en quelques mois, l'année 1789 détruit la monarchie absolue et la société d'ordres. Première partie : la souveraineté change de mains ; le 5 mai, les États généraux s'ouvrent à Versailles, le 17 juin les députés du tiers état se proclament Assemblée nationale et jurent le 20 juin, au Jeu de paume, de donner une constitution à la France. Deuxième partie : le peuple entre en révolution ; le 14 juillet, les Parisiens prennent la Bastille, symbole de l'arbitraire royal, et les campagnes s'embrasent pendant la Grande Peur. Troisième partie : l'Ancien Régime est aboli en droit ; dans la nuit du 4 août, les privilèges sont supprimés, et le 26 août la Déclaration des droits de l'homme et du citoyen proclame la liberté, l'égalité devant la loi et la souveraineté de la nation. Conclusion : à la fin de l'été 1789, la monarchie absolue et la société d'ordres ont disparu ; une France nouvelle commence.",
          explication:
            "Le développement construit doit être organisé (introduction, parties, conclusion) et s'appuyer sur les dates clés : 5 mai, 20 juin, 14 juillet, 4 août, 26 août 1789.",
        },
      ],
    },
    {
      titre: "Examen 2 — La Révolution française et l'Empire",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel document adopté le 26 août 1789 proclame la liberté et l'égalité ?",
          choix: [
            "La Constitution de 1791",
            "Le Code civil",
            "La Déclaration des droits de l'homme et du citoyen",
            "Les cahiers de doléances",
          ],
          bonneReponse: 2,
          explication: "La DDHC du 26 août 1789 proclame les droits naturels : liberté, égalité devant la loi, souveraineté nationale.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quand la Ière République est-elle proclamée ?",
          reponse: "La royauté est abolie le 21 septembre 1792 et la République commence le 22 septembre 1792.",
          explication: "Septembre 1792 est un repère de date essentiel du programme.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pourquoi la Terreur est-elle mise en place en 1793 ?",
          choix: [
            "Pour préparer le sacre de Napoléon",
            "Parce que la République est menacée par la guerre et les révoltes",
            "Pour rétablir Louis XVI sur le trône",
            "Pour abolir les privilèges",
          ],
          bonneReponse: 1,
          explication: "Face à la guerre étrangère et aux révoltes intérieures comme la Vendée, la Convention adopte des mesures d'exception : la Terreur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Comment se termine la Terreur ?",
          reponse: "Par la chute de Robespierre, arrêté et guillotiné le 27 juillet 1794 (9 thermidor an II).",
          explication: "Le 9 thermidor met fin à la Terreur et ouvre une nouvelle phase de la Révolution.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux acquis de la Révolution conservés par Napoléon et une liberté qu'il supprime ou limite.",
          reponse:
            "Il conserve l'égalité devant la loi et l'abolition des privilèges (inscrites dans le Code civil de 1804). En revanche, il limite la liberté de la presse et la liberté politique (censure, surveillance des opposants).",
          explication: "L'Empire consolide l'héritage social de 1789 mais établit un pouvoir autoritaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : raconte comment Napoléon Bonaparte arrive au pouvoir et transforme la France entre 1799 et 1804.",
          reponse:
            "Introduction : après la Terreur et le Directoire, la France cherche la stabilité ; un général ambitieux en profite. Première partie : la prise du pouvoir ; auréolé de ses victoires militaires, Bonaparte renverse le Directoire par le coup d'État du 18 brumaire (9-10 novembre 1799) et devient Premier consul, concentrant l'essentiel du pouvoir. Deuxième partie : la réorganisation de la France ; il rétablit l'ordre et la paix religieuse, crée les lycées et la Banque de France, et fait rédiger le Code civil (1804), qui garantit l'égalité devant la loi et la propriété. Troisième partie : vers l'Empire ; le 2 décembre 1804, il se fait sacrer empereur des Français à Notre-Dame de Paris ; le régime devient autoritaire et héréditaire, les libertés sont limitées. Conclusion : en cinq ans, Napoléon passe de général à empereur, stabilisant certains acquis de la Révolution tout en mettant fin à la République.",
          explication:
            "On attend les étapes datées (18 brumaire 1799, Code civil 1804, sacre du 2 décembre 1804) et l'idée d'un pouvoir de plus en plus personnel.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Causes de la Révolution : société d'ordres injuste, crise financière, cherté du pain, idées des Lumières.",
    "Repère brevet : 14 juillet 1789, prise de la Bastille ; nuit du 4 août 1789, abolition des privilèges.",
    "Repère brevet : 26 août 1789, Déclaration des droits de l'homme et du citoyen (liberté, égalité, souveraineté de la nation).",
    "Repère brevet : 21-22 septembre 1792, proclamation de la Ière République ; 21 janvier 1793, exécution de Louis XVI.",
    "1793-1794 : la Terreur, menée par Robespierre et le Comité de salut public, s'achève au 9 thermidor (27 juillet 1794).",
    "Repère brevet : 1804, Napoléon Ier sacré empereur (2 décembre) et Code civil ; l'Empire garde l'égalité mais limite les libertés.",
  ],
},
{
  slug: "traites-negrieres",
  titre: "Bourgeoisies, commerce et traites négrières",
  matiere: "histoire-geo",
  niveau: "4eme",
  description:
    "Comprendre comment le commerce triangulaire et les traites négrières transatlantique et intra-africaine enrichissent les bourgeoisies marchandes européennes du XVIIIe siècle, au prix de la déportation et de l'exploitation de millions d'Africains dans les colonies d'Amérique.",
  objectifs: [
    "Décrire le fonctionnement du commerce triangulaire et de la traite transatlantique",
    "Expliquer le système de la société coloniale et de l'esclavage dans les Antilles",
    "Comprendre comment ce commerce enrichit les grands ports et les bourgeoisies négociantes",
    "Connaître les combats abolitionnistes et les grandes dates de l'abolition de l'esclavage",
    "Mémoriser les repères : XVIIIe siècle, Code noir (1685), 1794, 1848",
  ],
  slides: [
    {
      titre: "Le commerce triangulaire : une carte à connaître",
      illustration: "🗺️",
      visuel: "Europe → Afrique → Amérique → Europe",
      contenu: [
        "Départ d'Europe (Nantes, Bordeaux, Liverpool) avec des marchandises (armes, tissus, alcool)",
        "En Afrique, ces marchandises sont échangées contre des captifs africains",
        "Traversée de l'Atlantique (le « passage du milieu ») vers les Antilles et l'Amérique",
        "Les navires reviennent en Europe chargés de sucre, café, coton et tabac",
      ],
      voixOff:
        "Au dix-huitième siècle, un grand commerce relie trois continents : c'est le commerce triangulaire. Les navires partent des ports européens comme Nantes ou Bordeaux avec des marchandises. En Afrique, ces marchandises sont échangées contre des hommes, des femmes et des enfants réduits en esclavage. Les navires traversent ensuite l'Atlantique vers les Antilles, avant de revenir en Europe chargés de sucre, de café et de coton.",
    },
    {
      titre: "La traite négrière transatlantique",
      illustration: "⛓️",
      visuel: "12 millions de captifs",
      contenu: [
        "Entre le XVe et le XIXe siècle, environ 12 millions d'Africains sont déportés vers l'Amérique",
        "Les captifs, capturés ou achetés en Afrique, sont entassés dans les cales des navires négriers",
        "La traversée, appelée le passage du milieu, dure plusieurs semaines dans des conditions inhumaines",
        "Une grande partie des captifs meurt pendant le voyage ou peu après l'arrivée",
      ],
      voixOff:
        "Du quinzième au dix-neuvième siècle, environ douze millions d'Africains sont capturés puis déportés vers l'Amérique. Entassés dans les cales des navires négriers, ils traversent l'Atlantique pendant plusieurs semaines : c'est le passage du milieu. Les conditions sont si terribles que beaucoup meurent pendant la traversée ou juste après leur arrivée dans les colonies.",
    },
    {
      titre: "La société coloniale et l'esclavage dans les Antilles",
      illustration: "🌴",
      visuel: "Code noir, 1685",
      contenu: [
        "Dans les colonies (Saint-Domingue, Martinique, Guadeloupe), les esclaves travaillent dans les plantations",
        "Ils cultivent la canne à sucre, le café et le coton pour les colons européens",
        "Le Code noir (1685) fixe le statut des esclaves : ce sont des biens, sans droits",
        "Les esclaves résistent : fuites (marronnage), révoltes, sabotage du travail",
      ],
      voixOff:
        "Dans les colonies comme Saint-Domingue, la Martinique ou la Guadeloupe, les esclaves travaillent sans relâche dans les plantations de canne à sucre, de café et de coton. Le Code noir, promulgué en 1685, considère les esclaves comme des biens appartenant à leur maître, sans aucun droit. Mais les esclaves résistent : certains s'enfuient et forment des communautés libres, on parle de marronnage, d'autres se révoltent.",
    },
    {
      titre: "L'enrichissement des ports et des bourgeoisies négociantes",
      illustration: "⚓",
      visuel: "Nantes, Bordeaux, Liverpool",
      contenu: [
        "Les grands ports négriers (Nantes, Bordeaux, Liverpool, Lisbonne) s'enrichissent considérablement",
        "Une bourgeoisie marchande investit dans les navires négriers et dans les plantations",
        "Cet argent finance de beaux hôtels particuliers et développe l'industrie du sucre raffiné",
        "Toute l'économie du port (armateurs, tonneliers, assureurs) profite de ce commerce",
      ],
      voixOff:
        "Ce commerce enrichit considérablement les grands ports négriers comme Nantes, Bordeaux ou Liverpool. Une bourgeoisie de négociants et d'armateurs investit dans les expéditions et dans les plantations coloniales. Avec cet argent, elle fait construire de somptueux hôtels particuliers, encore visibles aujourd'hui, et développe des industries comme les raffineries de sucre. Tout un tissu économique profite indirectement de la traite.",
    },
    {
      titre: "Les Lumières et les premières critiques de l'esclavage",
      illustration: "💡",
      visuel: "Montesquieu, Condorcet",
      contenu: [
        "Au XVIIIe siècle, des philosophes des Lumières critiquent l'esclavage au nom de la liberté et de l'égalité",
        "Montesquieu, dans L'Esprit des lois, dénonce l'absurdité de l'esclavage",
        "Des sociétés abolitionnistes se créent, comme la Société des amis des Noirs (1788)",
        "Mais le commerce continue car il est très lucratif pour les colons et les négociants",
      ],
      voixOff:
        "Au dix-huitième siècle, les idées des Lumières commencent à remettre en cause l'esclavage. Le philosophe Montesquieu dénonce l'absurdité et l'injustice de ce système. En 1788, en France, se crée la Société des amis des Noirs, qui milite pour l'abolition. Mais le commerce se poursuit, car il rapporte énormément d'argent aux colons et aux négociants.",
    },
    {
      titre: "La révolte de Saint-Domingue et la première abolition",
      illustration: "✊",
      visuel: "1791-1804 : Haïti",
      contenu: [
        "En août 1791, les esclaves de Saint-Domingue se soulèvent, menés notamment par Toussaint Louverture",
        "Le 4 février 1794, la Convention abolit l'esclavage dans toutes les colonies françaises",
        "En 1802, Napoléon rétablit l'esclavage dans la plupart des colonies",
        "En 1804, les anciens esclaves de Saint-Domingue proclament l'indépendance d'Haïti",
      ],
      voixOff:
        "En août 1791, les esclaves de la colonie de Saint-Domingue se révoltent, notamment sous la direction de Toussaint Louverture. Sous la pression de cette révolte, la Convention abolit l'esclavage dans toutes les colonies françaises le quatre février 1794. Mais en 1802, Napoléon Bonaparte le rétablit dans la plupart des colonies. Les anciens esclaves de Saint-Domingue continuent le combat et proclament l'indépendance d'Haïti en 1804.",
    },
    {
      titre: "L'abolition définitive de l'esclavage",
      illustration: "📜",
      visuel: "27 avril 1848",
      contenu: [
        "Le Royaume-Uni abolit l'esclavage dans son empire en 1833",
        "En France, Victor Schœlcher fait signer le décret d'abolition définitive",
        "27 avril 1848 : abolition de l'esclavage dans toutes les colonies françaises",
        "Les traites et l'esclavage laissent des traces durables : racisme, inégalités, diaspora africaine",
      ],
      voixOff:
        "Le mouvement abolitionniste progresse au dix-neuvième siècle : le Royaume-Uni abolit l'esclavage dans son empire en 1833. En France, sous la Deuxième République, Victor Schœlcher fait signer le décret d'abolition définitive de l'esclavage, appliqué dans toutes les colonies le vingt-sept avril 1848. Mais les traites négrières laissent des traces durables : le racisme envers les Noirs, des inégalités économiques et une importante diaspora africaine dans les Amériques.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Le commerce triangulaire relie l'Europe, l'Afrique et l'Amérique aux XVIIe-XVIIIe siècles",
        "Environ 12 millions d'Africains sont déportés vers l'Amérique par la traite transatlantique",
        "Ce commerce enrichit les ports négriers et une bourgeoisie marchande européenne",
        "L'esclavage est aboli une première fois en 1794 puis définitivement en 1848 en France",
      ],
      voixOff:
        "Résumons. Le commerce triangulaire relie l'Europe, l'Afrique et l'Amérique du dix-septième au dix-neuvième siècle. Environ douze millions d'Africains sont déportés par la traite transatlantique vers les colonies, où ils travaillent comme esclaves dans les plantations. Ce commerce enrichit considérablement les ports négriers et leurs bourgeoisies. Après une première abolition en 1794, vite annulée par Napoléon, l'esclavage est définitivement aboli en France en 1848. Tu connais maintenant les grandes étapes de cette histoire essentielle.",
    },
  ],
  fiche: {
    intro:
      "Aux XVIIe et XVIIIe siècles, l'Europe, l'Afrique et l'Amérique sont reliées par un commerce triangulaire fondé sur la déportation et l'exploitation d'esclaves africains. Ce commerce enrichit les grands ports négriers et une bourgeoisie marchande, avant d'être progressivement condamné puis aboli au XIXe siècle.",
    sections: [
      {
        titre: "Le commerce triangulaire",
        points: [
          "Trois étapes : Europe (marchandises) → Afrique (achat de captifs) → Amérique (vente d'esclaves, achat de sucre et coton) → Europe",
          "Les grands ports négriers : Nantes, Bordeaux, La Rochelle, Liverpool, Lisbonne",
          "Environ 12 millions d'Africains déportés par la traite transatlantique entre le XVe et le XIXe siècle",
          "Le passage du milieu : traversée de l'Atlantique dans des conditions inhumaines, forte mortalité",
        ],
      },
      {
        titre: "La société coloniale esclavagiste",
        points: [
          "Les esclaves travaillent dans les plantations de canne à sucre, café, coton (Antilles, Amérique)",
          "Le Code noir (1685) : les esclaves sont considérés comme des biens, sans droits",
          "Résistances des esclaves : marronnage (fuite), révoltes, sabotage",
          "La traite et les plantations enrichissent les colons et les négociants européens",
        ],
      },
      {
        titre: "Les critiques et les combats abolitionnistes",
        points: [
          "Les Lumières critiquent l'esclavage au nom de la liberté et de l'égalité (Montesquieu)",
          "Société des amis des Noirs, fondée en 1788 en France",
          "Révolte des esclaves de Saint-Domingue (1791), menée notamment par Toussaint Louverture",
          "Indépendance d'Haïti en 1804, première République noire issue d'une révolte d'esclaves",
        ],
      },
      {
        titre: "Les abolitions de l'esclavage",
        points: [
          "4 février 1794 : première abolition de l'esclavage par la Convention",
          "1802 : Napoléon rétablit l'esclavage dans les colonies françaises",
          "1833 : abolition dans l'Empire britannique",
          "27 avril 1848 : abolition définitive de l'esclavage dans les colonies françaises, sous l'impulsion de Victor Schœlcher",
        ],
      },
    ],
    audio:
      "Fiche de révision : bourgeoisies, commerce et traites négrières. Du dix-septième au dix-neuvième siècle, un commerce triangulaire relie l'Europe, l'Afrique et l'Amérique. Les navires partent des ports négriers comme Nantes ou Bordeaux, échangent des marchandises contre des captifs en Afrique, puis traversent l'Atlantique pendant le passage du milieu vers les colonies d'Amérique. Environ douze millions d'Africains sont ainsi déportés et réduits en esclavage dans les plantations, sous le régime du Code noir de 1685. Ce commerce enrichit les ports négriers et une bourgeoisie marchande européenne. Face aux critiques des Lumières et à la révolte des esclaves de Saint-Domingue en 1791, la Convention abolit une première fois l'esclavage en 1794, mais Napoléon le rétablit en 1802. L'esclavage est définitivement aboli dans les colonies françaises le 27 avril 1848, grâce à l'action de Victor Schœlcher.",
  },
  memoCards: [
    { recto: "Qu'est-ce que le commerce triangulaire ?", verso: "Un commerce entre l'Europe (marchandises), l'Afrique (captifs) et l'Amérique (sucre, café, coton), organisé du XVIIe au XIXe siècle." },
    { recto: "Combien d'Africains sont déportés par la traite transatlantique ?", verso: "Environ 12 millions, entre le XVe et le XIXe siècle." },
    { recto: "Qu'est-ce que le passage du milieu ?", verso: "La traversée de l'Atlantique par les navires négriers, dans des conditions inhumaines et avec une forte mortalité." },
    { recto: "Qu'est-ce que le Code noir (1685) ?", verso: "Un texte qui fixe le statut des esclaves dans les colonies françaises : ce sont des biens, sans droits." },
    { recto: "Quels sont les grands ports négriers ?", verso: "Nantes, Bordeaux, La Rochelle en France ; Liverpool en Angleterre ; Lisbonne au Portugal." },
    { recto: "Qui est Toussaint Louverture ?", verso: "Un ancien esclave qui dirige la révolte des esclaves de Saint-Domingue à partir de 1791." },
    { recto: "Quand l'esclavage est-il aboli une première fois en France ?", verso: "Le 4 février 1794, par la Convention, avant d'être rétabli par Napoléon en 1802." },
    { recto: "Quand l'esclavage est-il définitivement aboli en France ?", verso: "Le 27 avril 1848, sous l'impulsion de Victor Schœlcher." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on le commerce reliant l'Europe, l'Afrique et l'Amérique aux XVIIe-XVIIIe siècles ?",
      choix: ["Le commerce triangulaire", "Le commerce colonial simple", "La route de la soie", "Le grand commerce atlantique"],
      bonneReponse: 0,
      explication: "On parle de commerce triangulaire car il relie trois continents en trois étapes : Europe, Afrique, Amérique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que deviennent les Africains déportés vers l'Amérique ?",
      choix: ["Des ouvriers salariés", "Des esclaves dans les plantations", "Des soldats", "Des marins"],
      bonneReponse: 1,
      explication: "Les Africains déportés sont vendus et réduits en esclavage pour travailler dans les plantations de sucre, café ou coton.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux ports négriers européens.",
      reponse: "Par exemple Nantes et Bordeaux en France, ou Liverpool en Angleterre.",
      explication: "Ces ports se sont considérablement enrichis grâce au commerce triangulaire et à la traite négrière.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce que le Code noir de 1685 ?",
      choix: [
        "Une loi qui abolit l'esclavage",
        "Un texte qui fixe le statut des esclaves comme des biens sans droits",
        "Un traité de paix entre puissances européennes",
        "Un règlement interdisant la traite négrière",
      ],
      bonneReponse: 1,
      explication: "Le Code noir organise juridiquement l'esclavage dans les colonies françaises : les esclaves sont considérés comme des biens.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris les trois étapes du commerce triangulaire.",
      reponse:
        "Les navires partent d'Europe avec des marchandises (armes, tissus, alcool) qu'ils échangent en Afrique contre des captifs. Ils traversent ensuite l'Atlantique pour vendre ces captifs comme esclaves en Amérique. Enfin, ils reviennent en Europe chargés de produits coloniaux comme le sucre, le café et le coton.",
      explication: "Ce triangle Europe-Afrique-Amérique-Europe est au cœur du système économique atlantique du XVIIIe siècle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui dirige la révolte des esclaves de Saint-Domingue en 1791 ?",
      choix: ["Victor Schœlcher", "Toussaint Louverture", "Montesquieu", "Napoléon Bonaparte"],
      bonneReponse: 1,
      explication: "Toussaint Louverture, ancien esclave, devient le chef de la révolte de Saint-Domingue qui mènera à l'indépendance d'Haïti en 1804.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi peut-on dire que le commerce triangulaire enrichit les bourgeoisies européennes ?",
      reponse:
        "Les négociants et armateurs investissent dans les navires négriers et dans les plantations coloniales, et gagnent beaucoup d'argent grâce à la vente des esclaves et des produits coloniaux (sucre, café, coton). Cet argent finance des hôtels particuliers et des industries comme les raffineries de sucre dans les ports.",
      explication: "La traite négrière est un moteur économique majeur pour les ports atlantiques et leurs élites marchandes au XVIIIe siècle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle assemblée abolit l'esclavage une première fois en 1794 ?",
      choix: ["L'Assemblée nationale constituante", "La Convention", "Le Directoire", "Le Consulat"],
      bonneReponse: 1,
      explication: "La Convention vote l'abolition de l'esclavage dans toutes les colonies françaises le 4 février 1794.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi l'abolition de 1794 n'est pas définitive.",
      reponse:
        "En 1802, Napoléon Bonaparte, sous la pression des colons qui veulent retrouver la main-d'œuvre esclave pour leurs plantations, rétablit l'esclavage dans la plupart des colonies françaises. Il faudra attendre 1848 pour une abolition définitive.",
      explication: "Le rétablissement de 1802 montre le poids économique des intérêts coloniaux face aux idéaux révolutionnaires.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Qui joue un rôle majeur dans l'abolition définitive de l'esclavage en France en 1848 ?",
      choix: ["Toussaint Louverture", "Montesquieu", "Victor Schœlcher", "Robespierre"],
      bonneReponse: 2,
      explication: "Victor Schœlcher, sous-secrétaire d'État aux colonies, fait signer le décret d'abolition définitive du 27 avril 1848.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Quelles traces durables les traites négrières et l'esclavage ont-ils laissées ?",
      reponse:
        "Elles ont créé une importante diaspora africaine dans les Amériques, des inégalités économiques et sociales entre descendants d'esclaves et descendants de colons, et ont nourri des idéologies racistes utilisées pour justifier l'esclavage, dont les effets se font encore sentir aujourd'hui.",
      explication: "L'histoire de la traite éclaire des enjeux mémoriels et sociaux encore présents dans les sociétés américaines et européennes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi l'indépendance d'Haïti en 1804 est-elle un événement historique majeur ?",
      reponse:
        "C'est la première fois qu'une révolte d'esclaves aboutit à la création d'un État indépendant dirigé par d'anciens esclaves. Haïti devient la première République noire de l'histoire, une victoire symbolique contre l'esclavage et le colonialisme.",
      explication: "Haïti montre que les peuples asservis peuvent conquérir eux-mêmes leur liberté, un exemple unique au monde à cette époque.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de continents relie le commerce triangulaire ?",
      choix: ["Deux", "Trois", "Quatre", "Cinq"],
      bonneReponse: 1,
      explication: "Le commerce triangulaire relie l'Europe, l'Afrique et l'Amérique.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que la traite négrière transatlantique ?",
      reponse: "La déportation d'environ 12 millions d'Africains vers l'Amérique pour y être réduits en esclavage, du XVe au XIXe siècle.",
      explication: "C'est l'un des plus grands déplacements forcés de population de l'histoire.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "En quelle année l'esclavage est-il définitivement aboli dans les colonies françaises ?",
      choix: ["1794", "1802", "1833", "1848"],
      bonneReponse: 3,
      explication: "L'abolition définitive est votée le 27 avril 1848, sous l'impulsion de Victor Schœlcher.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite une forme de résistance des esclaves.",
      reponse: "Le marronnage (la fuite pour former des communautés libres), les révoltes, ou le sabotage du travail dans les plantations.",
      explication: "Les esclaves n'acceptent pas passivement leur condition et résistent de multiples façons.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les grands ports comme Nantes et Bordeaux s'enrichissent-ils au XVIIIe siècle ?",
      reponse: "Grâce au commerce triangulaire et à la traite négrière : les armateurs et négociants financent les expéditions et les plantations, et en tirent d'énormes profits.",
      explication: "L'architecture de ces villes porte encore aujourd'hui les traces de cet enrichissement.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Bourgeoisies, commerce et traites négrières",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelles marchandises les navires européens échangent-ils en Afrique contre des captifs ?",
          choix: ["Du sucre et du café", "Des armes, des tissus, de l'alcool", "De l'or et des épices", "Des esclaves déjà capturés en Europe"],
          bonneReponse: 1,
          explication: "Les navires partent d'Europe avec des marchandises manufacturées échangées contre des captifs sur les côtes africaines.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que le Code noir ?",
          reponse: "Un texte de 1685 qui organise le statut des esclaves dans les colonies françaises : ils sont considérés comme des biens sans droits.",
          explication: "Le Code noir légalise et encadre l'esclavage dans l'Empire colonial français.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel événement de 1791 conduit à l'indépendance d'Haïti en 1804 ?",
          choix: [
            "La signature du Code noir",
            "La révolte des esclaves de Saint-Domingue",
            "L'abolition de l'esclavage par Napoléon",
            "La création de la Société des amis des Noirs",
          ],
          bonneReponse: 1,
          explication: "La révolte de 1791, menée notamment par Toussaint Louverture, aboutit à la première République noire indépendante en 1804.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle des idées des Lumières dans la critique de l'esclavage.",
          reponse:
            "Des philosophes comme Montesquieu dénoncent l'injustice et l'absurdité de l'esclavage au nom de la liberté et de l'égalité naturelle des hommes. Ces idées inspirent la création de sociétés abolitionnistes, comme la Société des amis des Noirs en 1788.",
          explication: "Les Lumières préparent le terrain intellectuel des combats abolitionnistes du XIXe siècle.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi Napoléon rétablit-il l'esclavage en 1802 ?",
          reponse:
            "Sous la pression des colons et des négociants qui veulent retrouver la main-d'œuvre esclave, indispensable selon eux à la rentabilité des plantations, Napoléon rétablit l'esclavage dans la plupart des colonies françaises en 1802.",
          explication: "Cette décision montre le poids des intérêts économiques coloniaux sur les choix politiques de l'époque.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique comment le commerce triangulaire et la traite négrière enrichissent l'Europe au XVIIIe siècle (une quinzaine de lignes).",
          reponse:
            "Introduction : au dix-huitième siècle, l'Europe s'enrichit grâce à un commerce fondé sur la déportation et l'exploitation d'êtres humains. Première partie : le commerce triangulaire organise des échanges entre trois continents ; les navires partent des ports négriers comme Nantes ou Bordeaux avec des marchandises échangées en Afrique contre des captifs, qui sont ensuite déportés vers l'Amérique lors du passage du milieu. Deuxième partie : dans les colonies, les esclaves travaillent dans les plantations de sucre, de café et de coton, sous le régime du Code noir qui les prive de tout droit ; les produits récoltés sont ensuite rapportés en Europe et revendus à fort profit. Troisième partie : cet argent enrichit considérablement les ports atlantiques et une bourgeoisie de négociants et d'armateurs, qui investissent dans de nouvelles industries comme le raffinage du sucre. Conclusion : la prospérité de nombreuses villes européennes du dix-huitième siècle repose ainsi directement sur la traite négrière et l'exploitation des esclaves.",
          explication: "Le développement doit articuler les trois étapes du commerce triangulaire et montrer le lien avec l'enrichissement des ports et bourgeoisies européennes.",
        },
      ],
    },
    {
      titre: "Examen 2 — Bourgeoisies, commerce et traites négrières",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment appelle-t-on la traversée de l'Atlantique par les navires négriers ?",
          choix: ["Le grand voyage", "Le passage du milieu", "La route triangulaire", "La traversée coloniale"],
          bonneReponse: 1,
          explication: "Le passage du milieu désigne la traversée de l'Atlantique, dans des conditions inhumaines pour les captifs.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Combien d'Africains ont été déportés par la traite transatlantique ?",
          reponse: "Environ 12 millions, entre le XVe et le XIXe siècle.",
          explication: "C'est l'un des plus grands déplacements forcés de l'histoire humaine.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel pays abolit l'esclavage dans son empire colonial en 1833 ?",
          choix: ["La France", "L'Espagne", "Le Royaume-Uni", "Le Portugal"],
          bonneReponse: 2,
          explication: "Le Royaume-Uni abolit l'esclavage dans son empire en 1833, quinze ans avant la France.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qui est Victor Schœlcher et quel est son rôle ?",
          reponse: "C'est un homme politique français qui fait signer le décret d'abolition définitive de l'esclavage dans les colonies françaises, appliqué le 27 avril 1848.",
          explication: "Victor Schœlcher est la figure principale de l'abolition définitive de l'esclavage en France.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne deux formes de résistance des esclaves dans les colonies.",
          reponse: "Le marronnage, c'est-à-dire la fuite des plantations pour former des communautés libres, et les révoltes armées comme celle de Saint-Domingue en 1791.",
          explication: "Ces résistances montrent que les esclaves n'ont jamais accepté passivement leur condition.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : retrace les étapes de l'abolition de l'esclavage en France, de 1794 à 1848.",
          reponse:
            "Introduction : l'abolition de l'esclavage en France est un long processus, marqué par des avancées et des reculs. Première partie : sous la pression de la révolte des esclaves de Saint-Domingue, la Convention abolit une première fois l'esclavage le 4 février 1794 dans toutes les colonies françaises. Deuxième partie : ce progrès est remis en cause en 1802, quand Napoléon Bonaparte, sous la pression des colons, rétablit l'esclavage dans la plupart des colonies ; les anciens esclaves de Saint-Domingue poursuivent alors leur lutte et proclament l'indépendance d'Haïti en 1804. Troisième partie : le mouvement abolitionniste reprend au dix-neuvième siècle, porté par des figures comme Victor Schœlcher ; sous la Deuxième République, le décret d'abolition définitive est appliqué le 27 avril 1848 dans toutes les colonies françaises. Conclusion : il faut plus de cinquante ans, entre 1794 et 1848, pour que l'abolition de l'esclavage devienne définitive en France.",
          explication: "On attend les dates clés (1794, 1802, 1804, 1848) et la compréhension que l'abolition n'est pas linéaire.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le commerce triangulaire relie l'Europe, l'Afrique et l'Amérique du XVIIe au XIXe siècle.",
    "Repère brevet : environ 12 millions d'Africains déportés par la traite transatlantique.",
    "Le Code noir (1685) organise le statut des esclaves comme des biens sans droits dans les colonies françaises.",
    "Repère brevet : révolte des esclaves de Saint-Domingue en 1791, indépendance d'Haïti en 1804.",
    "Repère brevet : première abolition de l'esclavage en 1794, rétabli par Napoléon en 1802.",
    "Repère brevet : abolition définitive de l'esclavage en France le 27 avril 1848, grâce à Victor Schœlcher.",
  ],
},
{
  slug: "urbanisation-monde",
  titre: "L'urbanisation du monde",
  matiere: "histoire-geo",
  niveau: "4eme",
  description:
    "Comprendre comment et pourquoi la population mondiale devient majoritairement urbaine, découvrir les mégapoles et les métropoles mondiales, et analyser les inégalités et les défis liés à la croissance des villes.",
  objectifs: [
    "Définir l'urbanisation et connaître son ampleur à l'échelle mondiale",
    "Localiser les grandes mégapoles et métropoles mondiales",
    "Comprendre les inégalités socio-spatiales au sein des villes (bidonvilles, quartiers riches)",
    "Identifier les défis de l'urbanisation : étalement urbain, transports, environnement",
    "Mémoriser les repères : plus de 50 % de citadins depuis 2007, mégapoles de plus de 10 millions d'habitants",
  ],
  slides: [
    {
      titre: "Qu'est-ce que l'urbanisation ?",
      illustration: "🏙️",
      visuel: "+50 % de citadins",
      contenu: [
        "L'urbanisation est l'augmentation de la part de la population qui vit dans les villes",
        "Depuis 2007, plus de la moitié de l'humanité vit en ville",
        "Aujourd'hui, environ 57 % de la population mondiale est urbaine",
        "Ce chiffre pourrait atteindre près de 70 % d'ici 2050",
      ],
      voixOff:
        "L'urbanisation désigne l'augmentation de la part de la population qui vit dans les villes plutôt qu'à la campagne. Depuis 2007, pour la première fois dans l'histoire de l'humanité, plus de la moitié des habitants de la planète vivent en ville. Aujourd'hui, environ cinquante-sept pour cent de la population mondiale est urbaine, et ce chiffre pourrait approcher soixante-dix pour cent d'ici 2050.",
    },
    {
      titre: "Une urbanisation inégale selon les régions du monde",
      illustration: "🌐",
      visuel: "Nord / Sud",
      contenu: [
        "Les pays développés (Europe, Amérique du Nord) sont déjà très majoritairement urbains",
        "L'urbanisation progresse très vite en Asie et en Afrique, continents les moins urbanisés",
        "L'Afrique et l'Asie concentreront la majorité de la croissance urbaine mondiale d'ici 2050",
        "Cette urbanisation rapide s'accompagne souvent d'un manque d'infrastructures",
      ],
      voixOff:
        "L'urbanisation est très inégale selon les régions du monde. En Europe et en Amérique du Nord, la population est déjà très majoritairement urbaine, avec une croissance des villes qui ralentit. En revanche, l'urbanisation progresse extrêmement vite en Afrique et en Asie, continents encore moins urbanisés mais qui concentreront l'essentiel de la croissance urbaine mondiale d'ici 2050. Cette urbanisation rapide dépasse souvent la capacité des villes à construire des infrastructures suffisantes.",
    },
    {
      titre: "Mégapoles et métropoles mondiales",
      illustration: "🌆",
      visuel: "Tokyo, Shanghai, New York",
      contenu: [
        "Une mégapole est une agglomération urbaine de plus de 10 millions d'habitants",
        "Le monde compte aujourd'hui plus de 30 mégapoles, surtout en Asie",
        "Tokyo, Delhi, Shanghai ou São Paulo sont parmi les plus grandes agglomérations mondiales",
        "Les métropoles mondiales (New York, Londres, Paris, Tokyo) concentrent pouvoir, finance et innovation",
      ],
      voixOff:
        "On appelle mégapole une agglomération urbaine qui dépasse dix millions d'habitants. Le monde en compte aujourd'hui plus d'une trentaine, principalement en Asie : Tokyo, Delhi, Shanghai ou encore São Paulo figurent parmi les plus peuplées. Certaines de ces très grandes villes sont aussi des métropoles mondiales, comme New York, Londres, Paris ou Tokyo, qui concentrent des fonctions de commandement : pouvoir politique, finance, innovation et culture.",
    },
    {
      titre: "Pourquoi les villes attirent-elles autant ?",
      illustration: "🧲",
      visuel: "Exode rural",
      contenu: [
        "Les villes concentrent les emplois, notamment dans l'industrie et les services",
        "Elles offrent un meilleur accès à l'éducation, à la santé et aux loisirs",
        "L'exode rural pousse de nombreux habitants des campagnes vers les villes",
        "Dans les pays du Sud, cette attraction dépasse souvent les capacités d'accueil des villes",
      ],
      voixOff:
        "Les villes attirent car elles concentrent les emplois, notamment dans l'industrie et les services, ainsi qu'un meilleur accès à l'éducation, à la santé et aux loisirs. Cette attractivité provoque un exode rural : de nombreux habitants des campagnes viennent s'installer en ville dans l'espoir d'une vie meilleure. Dans les pays du Sud, cette arrivée massive dépasse souvent les capacités d'accueil des villes, qui manquent de logements et d'infrastructures.",
    },
    {
      titre: "Des inégalités fortes au sein des villes",
      illustration: "🏚️",
      visuel: "Bidonvilles",
      contenu: [
        "Dans de nombreuses villes du Sud, une partie importante de la population vit dans des bidonvilles",
        "Ces quartiers informels manquent souvent d'eau potable, d'électricité et d'assainissement",
        "Plus d'un milliard de personnes dans le monde vivent aujourd'hui dans des bidonvilles ou des quartiers précaires",
        "À l'inverse, des quartiers résidentiels fermés et sécurisés accueillent les populations les plus aisées",
      ],
      voixOff:
        "Les villes concentrent aussi de fortes inégalités. Dans de nombreuses villes des pays du Sud, une partie importante de la population vit dans des bidonvilles, des quartiers informels souvent privés d'eau potable, d'électricité et d'assainissement. On estime que plus d'un milliard de personnes dans le monde vivent dans de tels quartiers précaires. À l'inverse, des quartiers résidentiels fermés et sécurisés accueillent les populations les plus aisées, à quelques kilomètres seulement.",
    },
    {
      titre: "L'étalement urbain et ses conséquences",
      illustration: "🚗",
      visuel: "Étalement urbain",
      contenu: [
        "Les villes s'étendent de plus en plus loin dans les campagnes environnantes : c'est l'étalement urbain",
        "Cet étalement se traduit par des zones pavillonnaires, des zones commerciales et industrielles",
        "Il augmente les distances domicile-travail et la dépendance à la voiture",
        "Il consomme des terres agricoles et des espaces naturels",
      ],
      voixOff:
        "De nombreuses villes s'étendent de plus en plus loin dans les campagnes environnantes : c'est l'étalement urbain. Il se traduit par le développement de zones pavillonnaires, commerciales et industrielles en périphérie des villes. Cet étalement allonge les distances entre le domicile et le travail et renforce la dépendance à la voiture individuelle. Il consomme aussi de nombreuses terres agricoles et des espaces naturels.",
    },
    {
      titre: "Vers des villes plus durables ?",
      illustration: "🌱",
      visuel: "Transports en commun, espaces verts",
      contenu: [
        "Face aux défis environnementaux, de nombreuses villes cherchent à devenir plus durables",
        "Développement des transports en commun et des pistes cyclables",
        "Création d'espaces verts et lutte contre la pollution de l'air",
        "Certaines villes expérimentent des « villes intelligentes » (smart cities)",
      ],
      voixOff:
        "Face aux défis environnementaux liés à leur croissance, de nombreuses villes cherchent aujourd'hui à devenir plus durables. Elles développent les transports en commun et les pistes cyclables pour réduire l'usage de la voiture, créent des espaces verts et cherchent à limiter la pollution de l'air. Certaines villes expérimentent également des technologies numériques pour mieux gérer l'énergie, les déchets ou la circulation : on parle de villes intelligentes.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Depuis 2007, plus de la moitié de l'humanité vit en ville",
        "L'urbanisation progresse surtout en Asie et en Afrique",
        "Les mégapoles (plus de 10 millions d'habitants) et les métropoles mondiales structurent l'espace mondial",
        "Les villes concentrent à la fois attractivité, inégalités et défis environnementaux",
      ],
      voixOff:
        "Résumons. Depuis 2007, plus de la moitié de l'humanité vit en ville, et ce chiffre continue d'augmenter, notamment en Asie et en Afrique. Les mégapoles, qui dépassent dix millions d'habitants, et les métropoles mondiales comme New York, Londres, Paris ou Tokyo structurent l'espace mondial. Mais les villes concentrent aussi de fortes inégalités, entre bidonvilles et quartiers aisés, ainsi que des défis environnementaux liés à l'étalement urbain. Tu connais maintenant les grands enjeux de l'urbanisation du monde.",
    },
  ],
  fiche: {
    intro:
      "L'urbanisation, c'est-à-dire l'augmentation de la part de la population vivant en ville, est l'une des transformations majeures du monde actuel. Depuis 2007, plus de la moitié de l'humanité est urbaine, avec de fortes inégalités et de nouveaux défis environnementaux.",
    sections: [
      {
        titre: "Une urbanisation mondiale et inégale",
        points: [
          "Depuis 2007, plus de 50 % de la population mondiale vit en ville (environ 57 % aujourd'hui)",
          "L'Europe et l'Amérique du Nord sont déjà très majoritairement urbaines",
          "L'Asie et l'Afrique connaissent la croissance urbaine la plus rapide",
          "D'ici 2050, environ 70 % de la population mondiale pourrait être urbaine",
        ],
      },
      {
        titre: "Mégapoles et métropoles mondiales",
        points: [
          "Une mégapole est une agglomération de plus de 10 millions d'habitants",
          "Le monde compte plus de 30 mégapoles, surtout en Asie (Tokyo, Delhi, Shanghai)",
          "Les métropoles mondiales (New York, Londres, Paris, Tokyo) concentrent pouvoir, finance et innovation",
          "L'exode rural alimente la croissance des villes, surtout dans les pays du Sud",
        ],
      },
      {
        titre: "Des villes marquées par de fortes inégalités",
        points: [
          "Plus d'un milliard de personnes vivent dans des bidonvilles ou des quartiers précaires",
          "Ces quartiers manquent souvent d'eau potable, d'électricité et d'assainissement",
          "Des quartiers résidentiels aisés et sécurisés côtoient ces zones de pauvreté",
          "Ces inégalités socio-spatiales sont particulièrement fortes dans les villes du Sud",
        ],
      },
      {
        titre: "L'étalement urbain et les villes durables",
        points: [
          "L'étalement urbain : extension des villes vers les campagnes environnantes",
          "Conséquences : dépendance à la voiture, consommation de terres agricoles",
          "Réponses : transports en commun, pistes cyclables, espaces verts",
          "Développement des « villes intelligentes » (smart cities) pour une gestion plus durable",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'urbanisation du monde. Depuis 2007, plus de la moitié de la population mondiale vit en ville, un seuil historique. Cette urbanisation est très inégale : l'Europe et l'Amérique du Nord sont déjà très majoritairement urbaines, tandis que l'Asie et l'Afrique connaissent aujourd'hui la croissance urbaine la plus rapide, portée par l'exode rural. Le monde compte plus de trente mégapoles, des agglomérations de plus de dix millions d'habitants, en majorité situées en Asie, comme Tokyo, Delhi ou Shanghai. Certaines très grandes villes, comme New York, Londres, Paris ou Tokyo, sont aussi des métropoles mondiales qui concentrent le pouvoir, la finance et l'innovation. Mais les villes concentrent également de fortes inégalités : plus d'un milliard de personnes vivent dans des bidonvilles, privés d'eau potable, d'électricité et d'assainissement, à proximité de quartiers résidentiels aisés. Enfin, l'étalement urbain pose des défis environnementaux importants, ce qui pousse de nombreuses villes à développer les transports en commun, les espaces verts et des solutions plus durables.",
  },
  memoCards: [
    { recto: "Depuis quand plus de la moitié de l'humanité vit-elle en ville ?", verso: "Depuis 2007." },
    { recto: "Qu'est-ce qu'une mégapole ?", verso: "Une agglomération urbaine de plus de 10 millions d'habitants." },
    { recto: "Combien de mégapoles le monde compte-t-il environ ?", verso: "Plus de 30, principalement en Asie." },
    { recto: "Qu'est-ce qu'une métropole mondiale ?", verso: "Une très grande ville qui concentre des fonctions de commandement : pouvoir, finance, innovation (ex. New York, Londres, Paris, Tokyo)." },
    { recto: "Sur quels continents l'urbanisation progresse-t-elle le plus vite aujourd'hui ?", verso: "En Asie et en Afrique." },
    { recto: "Qu'est-ce qu'un bidonville ?", verso: "Un quartier urbain informel et précaire, souvent privé d'eau potable, d'électricité et d'assainissement." },
    { recto: "Qu'est-ce que l'étalement urbain ?", verso: "L'extension des villes vers les campagnes environnantes, avec zones pavillonnaires, commerciales et industrielles." },
    { recto: "Qu'est-ce qu'une smart city (ville intelligente) ?", verso: "Une ville qui utilise des technologies numériques pour mieux gérer l'énergie, les déchets ou la circulation." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Depuis quelle année plus de la moitié de la population mondiale vit-elle en ville ?",
      choix: ["1950", "1990", "2007", "2020"],
      bonneReponse: 2,
      explication: "Depuis 2007, plus de 50 % de l'humanité vit en ville, un seuil historique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce qu'une mégapole ?",
      choix: [
        "Une ville de plus d'un million d'habitants",
        "Une agglomération de plus de 10 millions d'habitants",
        "La capitale d'un pays",
        "Un quartier pauvre d'une grande ville",
      ],
      bonneReponse: 1,
      explication: "Une mégapole est une très grande agglomération urbaine dépassant les dix millions d'habitants.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux continents où l'urbanisation progresse le plus rapidement aujourd'hui.",
      reponse: "L'Asie et l'Afrique.",
      explication: "Ces deux continents, encore moins urbanisés que l'Europe ou l'Amérique du Nord, connaissent la croissance urbaine la plus rapide.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce qu'un bidonville ?",
      choix: [
        "Un quartier d'affaires",
        "Un quartier informel et précaire manquant d'infrastructures",
        "Un quartier résidentiel sécurisé",
        "Une zone industrielle",
      ],
      bonneReponse: 1,
      explication: "Un bidonville est un quartier urbain informel, souvent privé d'eau potable, d'électricité et d'assainissement.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi les villes attirent autant de population.",
      reponse:
        "Les villes concentrent les emplois, notamment dans l'industrie et les services, ainsi qu'un meilleur accès à l'éducation, à la santé et aux loisirs. Cette attractivité provoque un exode rural, les habitants des campagnes espérant y trouver une vie meilleure.",
      explication: "L'attractivité économique et sociale des villes explique la poursuite de l'urbanisation mondiale.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est une caractéristique des métropoles mondiales comme New York, Londres ou Tokyo ?",
      choix: [
        "Elles n'ont aucune influence internationale",
        "Elles concentrent le pouvoir, la finance et l'innovation",
        "Elles sont exclusivement rurales",
        "Elles n'accueillent aucun bidonville",
      ],
      bonneReponse: 1,
      explication: "Les métropoles mondiales exercent des fonctions de commandement à l'échelle de la planète : politique, économique, financière, culturelle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que l'étalement urbain et quelles en sont les conséquences ?",
      reponse:
        "L'étalement urbain est l'extension des villes vers les campagnes environnantes, avec le développement de zones pavillonnaires, commerciales et industrielles. Il augmente les distances domicile-travail, renforce la dépendance à la voiture et consomme des terres agricoles et des espaces naturels.",
      explication: "L'étalement urbain est l'un des principaux défis environnementaux liés à la croissance des villes.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Combien de personnes vivent environ dans des bidonvilles ou des quartiers précaires dans le monde ?",
      choix: ["100 millions", "500 millions", "plus d'un milliard", "10 millions"],
      bonneReponse: 2,
      explication: "On estime que plus d'un milliard de personnes vivent aujourd'hui dans des bidonvilles ou des quartiers informels précaires.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que les grandes villes du monde sont marquées par de fortes inégalités socio-spatiales.",
      reponse:
        "Dans de nombreuses villes du Sud, une partie importante de la population vit dans des bidonvilles, des quartiers informels privés d'eau potable, d'électricité et d'assainissement. À proximité immédiate, des quartiers résidentiels fermés et sécurisés accueillent les populations les plus aisées, avec un accès très différent aux services urbains. Ces contrastes illustrent une ségrégation spatiale forte au sein d'une même ville.",
      explication: "Les inégalités socio-spatiales sont un enjeu majeur de l'étude géographique des villes.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel pourcentage de la population mondiale pourrait être urbain vers 2050 ?",
      choix: ["Environ 30 %", "Environ 50 %", "Environ 70 %", "Environ 90 %"],
      bonneReponse: 2,
      explication: "Les projections estiment qu'environ 70 % de la population mondiale pourrait vivre en ville d'ici 2050.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Quelles solutions les villes mettent-elles en place pour devenir plus durables ?",
      reponse:
        "Elles développent les transports en commun et les pistes cyclables pour réduire l'usage de la voiture, créent des espaces verts pour améliorer le cadre de vie et lutter contre la pollution, et certaines expérimentent des technologies numériques (villes intelligentes) pour mieux gérer l'énergie, les déchets ou la circulation.",
      explication: "Ces solutions visent à limiter l'impact environnemental de la croissance urbaine tout en améliorant la qualité de vie des habitants.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi l'urbanisation est un phénomène mondial mais très inégal.",
      reponse:
        "L'urbanisation touche toutes les régions du monde, mais à des rythmes très différents : elle est déjà très avancée en Europe et en Amérique du Nord, où elle progresse peu, alors qu'elle s'accélère fortement en Asie et surtout en Afrique, portée par l'exode rural. Cette urbanisation rapide dans les pays du Sud dépasse souvent les capacités des villes à fournir logements et infrastructures, ce qui explique le développement des bidonvilles.",
      explication: "Le rythme et les conséquences de l'urbanisation varient fortement selon le niveau de développement des régions du monde.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle part de la population mondiale vit environ en ville aujourd'hui ?",
      choix: ["Environ 30 %", "Environ 57 %", "Environ 80 %", "Environ 95 %"],
      bonneReponse: 1,
      explication: "Environ 57 % de la population mondiale est urbaine aujourd'hui, un chiffre en constante augmentation.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne un exemple de mégapole asiatique.",
      reponse: "Par exemple Tokyo, Delhi ou Shanghai.",
      explication: "L'Asie concentre la majorité des mégapoles mondiales, agglomérations de plus de 10 millions d'habitants.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qui alimente principalement la croissance urbaine dans les pays du Sud ?",
      choix: ["Le tourisme", "L'exode rural", "Le vieillissement de la population", "La baisse des naissances"],
      bonneReponse: 1,
      explication: "L'exode rural, le départ des campagnes vers les villes, alimente fortement la croissance urbaine dans les pays du Sud.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les bidonvilles se développent-ils dans certaines villes ?",
      reponse: "Parce que la croissance urbaine y est plus rapide que la capacité des villes à construire des logements et des infrastructures suffisantes pour accueillir tous les nouveaux habitants.",
      explication: "Les bidonvilles résultent d'une urbanisation rapide et mal maîtrisée, en particulier dans les pays du Sud.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite une solution pour rendre les villes plus durables.",
      reponse: "Par exemple développer les transports en commun, créer des espaces verts, ou expérimenter des villes intelligentes (smart cities).",
      explication: "Ces solutions cherchent à réduire l'impact environnemental de la croissance urbaine.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'urbanisation du monde",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment appelle-t-on l'augmentation de la part de la population qui vit en ville ?",
          choix: ["La mondialisation", "L'urbanisation", "L'industrialisation", "La démographie"],
          bonneReponse: 1,
          explication: "L'urbanisation désigne la croissance de la part urbaine de la population.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une métropole mondiale ? Donne un exemple.",
          reponse: "Une très grande ville qui concentre des fonctions de commandement : pouvoir, finance, innovation, culture. Par exemple New York, Londres, Paris ou Tokyo.",
          explication: "Les métropoles mondiales exercent une influence à l'échelle de la planète.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pourquoi les habitants des campagnes viennent-ils s'installer en ville (exode rural) ?",
          choix: [
            "Pour fuir la pollution",
            "Pour trouver un emploi et un meilleur accès aux services (éducation, santé)",
            "Pour éviter les impôts",
            "Pour se rapprocher de la campagne",
          ],
          bonneReponse: 1,
          explication: "Les villes concentrent les emplois et les services, ce qui attire les populations rurales.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris les conditions de vie dans un bidonville.",
          reponse: "Les habitants vivent souvent dans des logements précaires et informels, sans accès garanti à l'eau potable, à l'électricité ou à l'assainissement, dans des conditions d'hygiène et de sécurité difficiles.",
          explication: "Les bidonvilles concentrent les populations les plus pauvres des villes, en particulier dans les pays du Sud.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que l'étalement urbain ?",
          reponse: "L'extension progressive des villes vers les campagnes environnantes, avec le développement de zones pavillonnaires, commerciales et industrielles en périphérie.",
          explication: "L'étalement urbain consomme des terres agricoles et augmente la dépendance à la voiture.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique pourquoi et comment le monde devient de plus en plus urbain, en évoquant les inégalités que cela crée (une quinzaine de lignes).",
          reponse:
            "Introduction : depuis 2007, plus de la moitié de l'humanité vit en ville, un seuil historique qui continue d'augmenter. Première partie : les villes attirent car elles concentrent les emplois, l'éducation, la santé et les loisirs, ce qui provoque un exode rural massif, en particulier en Asie et en Afrique, continents où l'urbanisation progresse le plus vite. Deuxième partie : cette croissance urbaine rapide crée de fortes inégalités : plus d'un milliard de personnes vivent dans des bidonvilles, privés d'eau potable, d'électricité et d'assainissement, alors que des quartiers résidentiels aisés et sécurisés se développent à proximité. Troisième partie : les villes doivent aussi faire face à l'étalement urbain et à ses conséquences environnementales, ce qui pousse certaines à développer des solutions plus durables, comme les transports en commun ou les espaces verts. Conclusion : l'urbanisation du monde est donc un phénomène global mais profondément inégal, porteur à la fois d'opportunités et de défis.",
          explication: "On attend la mention du seuil de 2007, des mégapoles/métropoles, des inégalités (bidonvilles) et des défis environnementaux.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'urbanisation du monde",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Combien d'habitants au minimum compte une mégapole ?",
          choix: ["1 million", "5 millions", "10 millions", "50 millions"],
          bonneReponse: 2,
          explication: "Une mégapole est une agglomération urbaine qui dépasse les dix millions d'habitants.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Sur quels continents se trouvent la majorité des mégapoles mondiales ?",
          reponse: "En Asie, notamment (Tokyo, Delhi, Shanghai).",
          explication: "L'Asie concentre la majorité des plus grandes agglomérations urbaines du monde.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est une conséquence de l'étalement urbain ?",
          choix: [
            "La baisse de la population urbaine",
            "La consommation de terres agricoles et l'augmentation de l'usage de la voiture",
            "La disparition des bidonvilles",
            "La diminution des embouteillages",
          ],
          bonneReponse: 1,
          explication: "L'étalement urbain consomme des espaces agricoles et naturels et renforce la dépendance à la voiture.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi on parle d'inégalités socio-spatiales dans les grandes villes.",
          reponse: "Parce que des quartiers très pauvres, comme les bidonvilles, côtoient parfois directement des quartiers très riches et sécurisés, avec des différences très marquées d'accès à l'eau, à l'électricité, à l'éducation ou à la santé selon le quartier où l'on habite.",
          explication: "Ces contrastes spatiaux témoignent de fortes inégalités économiques et sociales au sein d'une même ville.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux mesures qu'une ville peut prendre pour devenir plus durable.",
          reponse: "Développer les transports en commun et les pistes cyclables, créer des espaces verts, ou utiliser des technologies numériques pour mieux gérer l'énergie et les déchets (ville intelligente).",
          explication: "Ces mesures visent à réduire l'impact environnemental et à améliorer la qualité de vie en ville.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : présente les mégapoles et les métropoles mondiales et explique leur rôle dans l'organisation du monde.",
          reponse:
            "Introduction : les très grandes villes jouent un rôle central dans l'organisation du monde actuel. Première partie : une mégapole est une agglomération de plus de dix millions d'habitants ; le monde en compte plus d'une trentaine, principalement en Asie, comme Tokyo, Delhi ou Shanghai, qui concentrent une population immense sur un espace réduit. Deuxième partie : certaines de ces très grandes villes sont aussi des métropoles mondiales, comme New York, Londres, Paris ou Tokyo ; elles concentrent des fonctions de commandement, politique, financière, économique et culturelle, et exercent une influence sur le monde entier. Troisième partie : ces très grandes villes concentrent aussi de fortes inégalités internes, entre quartiers d'affaires modernes, quartiers résidentiels aisés et parfois bidonvilles, ce qui pose des défis d'aménagement et de durabilité. Conclusion : mégapoles et métropoles mondiales structurent donc l'espace mondial tout en concentrant des inégalités et des défis considérables.",
          explication: "On attend la distinction entre mégapole (critère démographique) et métropole mondiale (fonctions de commandement), avec des exemples précis.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : depuis 2007, plus de la moitié de l'humanité vit en ville.",
    "L'urbanisation progresse le plus vite en Asie et en Afrique, portée par l'exode rural.",
    "Repère brevet : une mégapole compte plus de 10 millions d'habitants (ex. Tokyo, Delhi, Shanghai).",
    "Les métropoles mondiales (New York, Londres, Paris, Tokyo) concentrent pouvoir, finance et innovation.",
    "Plus d'un milliard de personnes vivent dans des bidonvilles, marqués par de fortes inégalités socio-spatiales.",
    "L'étalement urbain pose des défis environnementaux, qui poussent au développement de villes plus durables.",
  ],
},
{
  slug: "byzance-carolingiens",
  titre: "Byzance et l'Europe carolingienne",
  matiere: "histoire-geo",
  niveau: "5eme",
  description:
    "Découvrir les deux grands empires chrétiens héritiers de l'Empire romain : l'Empire byzantin de Justinien et l'Empire carolingien de Charlemagne, jusqu'au schisme de 1054.",
  objectifs: [
    "Savoir que Byzance et l'Empire carolingien sont deux héritiers de l'Empire romain",
    "Connaître Justinien, Constantinople et Sainte-Sophie",
    "Connaître Charlemagne, son couronnement en 800 et Aix-la-Chapelle",
    "Comprendre la différence entre christianisme d'Orient et d'Occident (schisme de 1054)",
    "Mémoriser les repères chronologiques : 800 et 1054",
  ],
  slides: [
    {
      titre: "Deux empires héritiers de Rome",
      illustration: "🏛️",
      visuel: "Rome → Byzance + Carolingiens",
      contenu: [
        "En 476, l'Empire romain d'Occident disparaît",
        "L'Empire romain d'Orient continue : c'est l'Empire byzantin",
        "En Occident, les Francs bâtissent l'Empire carolingien",
        "Les deux empires se disent héritiers de Rome et sont chrétiens",
      ],
      voixOff:
        "En 476, l'Empire romain d'Occident disparaît sous les coups des peuples germaniques. Mais à l'Est, l'Empire romain d'Orient continue d'exister : on l'appelle l'Empire byzantin. En Occident, les Francs construisent un nouvel empire, l'Empire carolingien. Ces deux empires chrétiens se présentent tous les deux comme les héritiers de Rome.",
    },
    {
      titre: "Justinien, empereur byzantin",
      illustration: "👑",
      visuel: "Justinien (527-565)",
      contenu: [
        "Justinien règne de 527 à 565 à Constantinople",
        "Il veut reconstituer l'Empire romain : il reconquiert l'Italie et l'Afrique du Nord",
        "Il fait rassembler les lois romaines dans le Code de Justinien",
        "L'empereur byzantin est appelé le basileus",
      ],
      voixOff:
        "Justinien est le plus célèbre des empereurs byzantins. Il règne de 527 à 565 depuis sa capitale, Constantinople. Son rêve est de reconstituer l'ancien Empire romain : ses armées reconquièrent l'Italie et l'Afrique du Nord. Il fait aussi rassembler toutes les lois romaines dans un grand recueil, le Code de Justinien. En grec, l'empereur byzantin porte le titre de basileus.",
    },
    {
      titre: "Constantinople, la nouvelle Rome",
      illustration: "🌆",
      visuel: "Constantinople",
      contenu: [
        "Capitale de l'Empire byzantin, sur le détroit du Bosphore",
        "Ville immense, riche et très peuplée, carrefour du commerce",
        "Justinien y fait construire la basilique Sainte-Sophie (537)",
        "On la surnomme la « nouvelle Rome »",
      ],
      voixOff:
        "Constantinople est la capitale de l'Empire byzantin. Située sur le détroit du Bosphore, entre l'Europe et l'Asie, c'est une ville immense et très riche, un grand carrefour du commerce. Justinien y fait construire la magnifique basilique Sainte-Sophie, achevée en 537, avec son immense coupole. Constantinople est si prestigieuse qu'on la surnomme la nouvelle Rome.",
    },
    {
      titre: "Charlemagne, roi des Francs",
      illustration: "⚔️",
      visuel: "Charlemagne",
      contenu: [
        "Charlemagne devient roi des Francs en 768",
        "Il agrandit son royaume par de nombreuses conquêtes",
        "Il impose le christianisme aux peuples vaincus (comme les Saxons)",
        "Son empire couvre une grande partie de l'Europe de l'Ouest",
      ],
      voixOff:
        "En Occident, Charlemagne devient roi des Francs en 768. C'est un grand guerrier : il mène de nombreuses conquêtes et agrandit énormément son royaume. Il impose le christianisme aux peuples vaincus, comme les Saxons. À la fin de son règne, son empire couvre une grande partie de l'Europe de l'Ouest.",
    },
    {
      titre: "Le couronnement de l'an 800",
      illustration: "✝️",
      visuel: "25 décembre 800",
      contenu: [
        "Le 25 décembre 800, le pape Léon III couronne Charlemagne empereur",
        "La cérémonie a lieu à Rome, dans la basilique Saint-Pierre",
        "L'Empire d'Occident renaît, 300 ans après sa chute",
        "Repère à retenir : 800, couronnement de Charlemagne",
      ],
      voixOff:
        "Le jour de Noël de l'an 800, à Rome, le pape Léon III pose une couronne sur la tête de Charlemagne : il devient empereur d'Occident. Plus de trois cents ans après la chute de Rome, un empire renaît en Occident. C'est un repère de date essentiel à retenir : huit cents, le couronnement de Charlemagne.",
    },
    {
      titre: "Aix-la-Chapelle, capitale de l'empire",
      illustration: "🏰",
      visuel: "Aix-la-Chapelle",
      contenu: [
        "Charlemagne installe sa capitale à Aix-la-Chapelle",
        "Il y fait construire un grand palais et une chapelle",
        "De là, il gouverne avec l'aide des comtes et des missi dominici",
        "Il encourage l'école et la copie des manuscrits",
      ],
      voixOff:
        "Charlemagne installe sa capitale à Aix-la-Chapelle, où il fait construire un grand palais et une chapelle célèbre. Pour gouverner son immense empire, il s'appuie sur les comtes, qui dirigent les régions, et sur les missi dominici, des envoyés qui les surveillent. Charlemagne encourage aussi les écoles et la copie des manuscrits dans les monastères.",
    },
    {
      titre: "Un christianisme, deux visages",
      illustration: "⛪",
      visuel: "Rome ↔ Constantinople",
      contenu: [
        "À l'Ouest : christianisme d'Occident, dirigé par le pape à Rome, langue latine",
        "À l'Est : christianisme d'Orient, autour du patriarche de Constantinople, langue grecque",
        "Les Byzantins vénèrent des icônes, images saintes",
        "Chaque Église convertit de nouveaux peuples en Europe",
      ],
      voixOff:
        "Les deux empires sont chrétiens, mais leur christianisme n'a pas le même visage. En Occident, l'Église est dirigée par le pape, à Rome, et utilise le latin. En Orient, elle s'organise autour du patriarche de Constantinople et utilise le grec. Les Byzantins vénèrent des icônes, des images saintes. Chaque Église cherche à convertir de nouveaux peuples en Europe.",
    },
    {
      titre: "Cyrille et Méthode, missionnaires byzantins",
      illustration: "📜",
      visuel: "Alphabet cyrillique",
      contenu: [
        "Au IXe siècle, les moines Cyrille et Méthode évangélisent les Slaves",
        "Ils inventent un alphabet pour écrire les langues slaves",
        "Cet alphabet donnera le cyrillique, encore utilisé en Russie",
        "Le christianisme d'Orient se diffuse en Europe de l'Est",
      ],
      voixOff:
        "Au neuvième siècle, deux moines byzantins, Cyrille et Méthode, partent convertir les peuples slaves d'Europe de l'Est. Pour traduire les textes chrétiens, ils inventent un alphabet adapté aux langues slaves. Cet alphabet donnera naissance au cyrillique, encore utilisé aujourd'hui en Russie. Grâce à eux, le christianisme d'Orient se diffuse largement en Europe de l'Est.",
    },
    {
      titre: "1054 : le schisme",
      illustration: "💔",
      visuel: "1054",
      contenu: [
        "En 1054, le pape et le patriarche de Constantinople s'excommunient",
        "C'est le schisme : la chrétienté se sépare en deux",
        "À l'Ouest : les catholiques ; à l'Est : les orthodoxes",
        "Repère à retenir : 1054, schisme entre les deux Églises",
      ],
      voixOff:
        "Les désaccords entre les deux Églises s'aggravent au fil des siècles. En 1054, la rupture est consommée : le représentant du pape et le patriarche de Constantinople s'excommunient mutuellement. C'est le schisme : la chrétienté se divise en deux. À l'Ouest, les chrétiens catholiques ; à l'Est, les chrétiens orthodoxes. Retiens bien cette date : mille cinquante-quatre.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Deux empires chrétiens héritiers de Rome : Byzance et les Carolingiens",
        "Justinien (527-565) : Constantinople, Sainte-Sophie, Code de Justinien",
        "800 : Charlemagne couronné empereur ; capitale à Aix-la-Chapelle",
        "1054 : schisme entre catholiques (Occident) et orthodoxes (Orient)",
      ],
      voixOff:
        "Résumons. Au Moyen Âge, deux empires chrétiens se disent héritiers de Rome. À l'Est, l'Empire byzantin de Justinien, avec Constantinople et la basilique Sainte-Sophie. À l'Ouest, l'Empire carolingien de Charlemagne, couronné empereur en huit cents, avec sa capitale à Aix-la-Chapelle. En mille cinquante-quatre, le schisme sépare définitivement catholiques et orthodoxes. Bravo, tu connais l'essentiel de ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "Après la chute de l'Empire romain d'Occident en 476, deux empires chrétiens se présentent comme les héritiers de Rome : l'Empire byzantin à l'Est et l'Empire carolingien à l'Ouest.",
    sections: [
      {
        titre: "L'Empire byzantin",
        points: [
          "Héritier direct de l'Empire romain d'Orient, capitale : Constantinople",
          "Justinien (527-565) : reconquêtes en Italie et en Afrique du Nord, Code de Justinien",
          "Basilique Sainte-Sophie achevée en 537",
          "L'empereur porte le titre de basileus et parle grec",
        ],
      },
      {
        titre: "L'Empire carolingien",
        points: [
          "Charlemagne, roi des Francs en 768, conquiert une grande partie de l'Europe de l'Ouest",
          "25 décembre 800 : couronné empereur à Rome par le pape Léon III",
          "Capitale : Aix-la-Chapelle (palais et chapelle)",
          "Gouvernement : comtes dans les régions, missi dominici pour les contrôler",
        ],
      },
      {
        titre: "Deux christianismes",
        points: [
          "Occident : Église dirigée par le pape à Rome, langue latine (catholiques)",
          "Orient : patriarche de Constantinople, langue grecque, icônes (orthodoxes)",
          "Cyrille et Méthode évangélisent les Slaves au IXe siècle (alphabet cyrillique)",
        ],
      },
      {
        titre: "Le schisme de 1054",
        points: [
          "En 1054, le pape et le patriarche de Constantinople s'excommunient mutuellement",
          "La chrétienté se sépare en deux : catholiques à l'Ouest, orthodoxes à l'Est",
          "Cette séparation existe encore aujourd'hui",
        ],
      },
      {
        titre: "Repères de dates",
        points: [
          "527-565 : règne de Justinien",
          "800 : couronnement de Charlemagne",
          "843 : traité de Verdun, partage de l'Empire carolingien entre les petits-fils de Charlemagne",
          "1054 : schisme entre les Églises d'Orient et d'Occident",
        ],
      },
    ],
    audio:
      "Fiche de révision : Byzance et l'Europe carolingienne. Après la chute de Rome en 476, deux empires chrétiens se disent héritiers de l'Empire romain. À l'Est, l'Empire byzantin a pour capitale Constantinople. Son empereur le plus célèbre, Justinien, règne de 527 à 565 : il reconquiert l'Italie et l'Afrique du Nord, fait rassembler les lois romaines dans son Code et fait construire la basilique Sainte-Sophie. À l'Ouest, Charlemagne, roi des Francs, conquiert une grande partie de l'Europe et se fait couronner empereur par le pape à Rome, le 25 décembre 800. Sa capitale est Aix-la-Chapelle. Après sa mort, son empire est partagé au traité de Verdun en 843. Les deux empires sont chrétiens, mais leurs Églises s'éloignent : latin et pape à l'Ouest, grec et patriarche à l'Est. En 1054, le schisme sépare définitivement les catholiques et les orthodoxes.",
  },
  memoCards: [
    { recto: "Quels sont les deux empires héritiers de Rome au Moyen Âge ?", verso: "L'Empire byzantin (à l'Est) et l'Empire carolingien (à l'Ouest)." },
    { recto: "Qui est Justinien ?", verso: "Empereur byzantin (527-565) : reconquêtes, Code de Justinien, basilique Sainte-Sophie." },
    { recto: "Capitale de l'Empire byzantin ?", verso: "Constantinople, sur le Bosphore, surnommée la « nouvelle Rome »." },
    { recto: "Que se passe-t-il le 25 décembre 800 ?", verso: "Charlemagne est couronné empereur à Rome par le pape Léon III." },
    { recto: "Capitale de Charlemagne ?", verso: "Aix-la-Chapelle, où il fait construire son palais et sa chapelle." },
    { recto: "Qui sont les missi dominici ?", verso: "Les envoyés de Charlemagne chargés de surveiller les comtes dans tout l'empire." },
    { recto: "Que se passe-t-il en 1054 ?", verso: "Le schisme : la chrétienté se sépare entre catholiques (Occident) et orthodoxes (Orient)." },
    { recto: "Qui sont Cyrille et Méthode ?", verso: "Deux moines byzantins qui évangélisent les Slaves au IXe siècle et créent un alphabet (origine du cyrillique)." },
    { recto: "Qu'est-ce qu'une icône ?", verso: "Une image sainte vénérée par les chrétiens d'Orient (orthodoxes)." },
    { recto: "Que prévoit le traité de Verdun (843) ?", verso: "Le partage de l'Empire carolingien entre les trois petits-fils de Charlemagne." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la capitale de l'Empire byzantin ?",
      choix: ["Rome", "Constantinople", "Aix-la-Chapelle", "Athènes"],
      bonneReponse: 1,
      explication: "Constantinople, sur le détroit du Bosphore, est la capitale de l'Empire byzantin, surnommée la « nouvelle Rome ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année Charlemagne est-il couronné empereur ?",
      choix: ["768", "800", "843", "1054"],
      bonneReponse: 1,
      explication: "Charlemagne est couronné empereur le 25 décembre 800 à Rome par le pape Léon III. C'est un repère de date à connaître.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la capitale de l'empire de Charlemagne ?",
      reponse: "Aix-la-Chapelle",
      explication: "Charlemagne installe sa capitale à Aix-la-Chapelle, où il fait construire un palais et une chapelle.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle grande basilique Justinien fait-il construire à Constantinople ?",
      choix: ["Saint-Pierre", "Notre-Dame", "Sainte-Sophie", "Saint-Marc"],
      bonneReponse: 2,
      explication: "Justinien fait construire la basilique Sainte-Sophie, achevée en 537, célèbre pour son immense coupole.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel titre porte l'empereur byzantin ?",
      choix: ["Le calife", "Le basileus", "Le tsar", "Le doge"],
      bonneReponse: 1,
      explication: "L'empereur byzantin porte le titre grec de basileus.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que le Code de Justinien ?",
      reponse: "Un grand recueil rassemblant les lois romaines, réalisé sur ordre de l'empereur Justinien.",
      explication: "Justinien fait rassembler et classer les lois romaines : ce Code montre que Byzance se veut l'héritière de Rome.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel est le rôle des missi dominici dans l'Empire carolingien ?",
      reponse: "Ce sont des envoyés de Charlemagne qui parcourent l'empire pour surveiller les comtes et faire appliquer les décisions de l'empereur.",
      explication: "L'empire est immense : les missi dominici (« envoyés du maître ») permettent à Charlemagne de contrôler ses comtes à distance.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que se passe-t-il en 1054 ?",
      choix: [
        "Le couronnement de Charlemagne",
        "La chute de Constantinople",
        "Le schisme entre les Églises d'Orient et d'Occident",
        "Le traité de Verdun",
      ],
      bonneReponse: 2,
      explication: "En 1054, le pape et le patriarche de Constantinople s'excommunient : c'est le schisme entre catholiques et orthodoxes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Cite deux différences entre le christianisme d'Occident et le christianisme d'Orient.",
      reponse:
        "En Occident : l'Église est dirigée par le pape à Rome et utilise le latin. En Orient : elle s'organise autour du patriarche de Constantinople, utilise le grec et vénère les icônes.",
      explication: "Chef religieux (pape / patriarche), langue (latin / grec) et pratiques (comme le culte des icônes) distinguent les deux christianismes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi dit-on que Byzance et l'Empire carolingien sont tous les deux « héritiers de Rome » ?",
      reponse:
        "Byzance est la continuation directe de l'Empire romain d'Orient (lois romaines, titre impérial, Constantinople « nouvelle Rome »). Charlemagne fait renaître le titre d'empereur d'Occident en 800 et se fait couronner à Rome, comme les empereurs romains.",
      explication: "Les deux empires reprennent le titre impérial, les lois et les symboles de Rome pour affirmer leur puissance.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel traité partage l'Empire carolingien en 843 ?",
      choix: ["Le traité de Rome", "Le traité de Verdun", "Le traité d'Aix-la-Chapelle", "Le traité de Constantinople"],
      bonneReponse: 1,
      explication: "En 843, le traité de Verdun partage l'empire entre les trois petits-fils de Charlemagne, fils de Louis le Pieux.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Comment Cyrille et Méthode ont-ils contribué à la diffusion du christianisme d'Orient ?",
      reponse:
        "Ces deux moines byzantins ont évangélisé les peuples slaves au IXe siècle. Pour traduire les textes chrétiens, ils ont inventé un alphabet adapté aux langues slaves, à l'origine de l'alphabet cyrillique.",
      explication: "Grâce à leur mission et à leur alphabet, le christianisme orthodoxe s'est diffusé en Europe de l'Est, jusqu'en Russie.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui couronne Charlemagne empereur en 800 ?",
      choix: ["Le basileus", "Le pape Léon III", "Le patriarche de Constantinople", "Justinien"],
      bonneReponse: 1,
      explication: "C'est le pape Léon III qui couronne Charlemagne à Rome, le 25 décembre 800.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelles sont les dates du règne de Justinien ?",
      reponse: "De 527 à 565.",
      explication: "Justinien règne sur l'Empire byzantin de 527 à 565.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment appelle-t-on les chrétiens d'Occident et les chrétiens d'Orient après 1054 ?",
      reponse: "Les catholiques (Occident) et les orthodoxes (Orient).",
      explication: "Après le schisme de 1054, la chrétienté se divise en Église catholique et Église orthodoxe.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle langue utilise l'Église d'Orient ?",
      choix: ["Le latin", "Le grec", "L'arabe", "Le français"],
      bonneReponse: 1,
      explication: "L'Église d'Orient utilise le grec, tandis que l'Église d'Occident utilise le latin.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite les deux repères de dates essentiels de ce chapitre.",
      reponse: "800 : couronnement de Charlemagne. 1054 : schisme entre les Églises d'Orient et d'Occident.",
      explication: "Ces deux dates sont les repères chronologiques majeurs du chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Byzance et l'Europe carolingienne",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'Empire byzantin est l'héritier direct de :",
          choix: ["L'Empire romain d'Occident", "L'Empire romain d'Orient", "L'Empire carolingien", "L'Empire grec d'Alexandre"],
          bonneReponse: 1,
          explication: "L'Empire byzantin est la continuation de l'Empire romain d'Orient, qui n'a pas disparu en 476.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "En quelle année et dans quelle ville Charlemagne est-il couronné empereur ?",
          reponse: "En 800, à Rome (le 25 décembre, dans la basilique Saint-Pierre).",
          explication: "Le couronnement de Charlemagne en 800 est un repère de date à connaître.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle réalisation n'est PAS l'œuvre de Justinien ?",
          choix: ["La basilique Sainte-Sophie", "Le Code de Justinien", "La reconquête de l'Italie", "La chapelle d'Aix-la-Chapelle"],
          bonneReponse: 3,
          explication: "La chapelle d'Aix-la-Chapelle est l'œuvre de Charlemagne, pas de Justinien.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi Constantinople est-elle surnommée la « nouvelle Rome » ?",
          reponse:
            "Parce qu'elle est la capitale de l'empire qui continue l'Empire romain : c'est une ville immense, riche et puissante, siège de l'empereur, comme Rome autrefois.",
          explication: "Le surnom souligne l'héritage romain revendiqué par Byzance.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qu'est le schisme de 1054.",
          reponse:
            "En 1054, le représentant du pape et le patriarche de Constantinople s'excommunient mutuellement. La chrétienté se sépare alors en deux Églises : catholique à l'Ouest, orthodoxe à l'Est.",
          explication: "Le schisme est la rupture définitive entre les christianismes d'Occident et d'Orient.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que l'Empire byzantin et l'Empire carolingien sont deux héritiers de l'Empire romain (une quinzaine de lignes, avec des exemples précis).",
          reponse:
            "Introduction : après 476, deux empires chrétiens se réclament de Rome. Première partie : l'Empire byzantin continue directement l'Empire romain d'Orient ; Justinien (527-565) reconquiert d'anciennes provinces romaines (Italie, Afrique du Nord), fait rassembler les lois romaines dans son Code et embellit Constantinople, la « nouvelle Rome », avec Sainte-Sophie. Deuxième partie : en Occident, Charlemagne fait renaître l'empire ; couronné empereur par le pape à Rome le 25 décembre 800, il reprend le titre des empereurs romains, gouverne un vaste territoire depuis Aix-la-Chapelle et encourage l'écrit et l'école comme les Romains. Conclusion : chacun à sa manière, par la loi, le titre impérial et la religion chrétienne, les deux empires se veulent les héritiers de Rome, avant de s'éloigner jusqu'au schisme de 1054.",
          explication:
            "Un bon développement construit comporte une introduction, deux parties organisées avec des exemples datés (527-565, 800) et une conclusion.",
        },
      ],
    },
    {
      titre: "Examen 2 — Byzance et l'Europe carolingienne",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel empereur byzantin fait construire Sainte-Sophie ?",
          choix: ["Constantin", "Justinien", "Charlemagne", "Léon III"],
          bonneReponse: 1,
          explication: "Justinien fait construire la basilique Sainte-Sophie à Constantinople, achevée en 537.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Comment s'appellent les images saintes vénérées par les chrétiens d'Orient ?",
          reponse: "Les icônes.",
          explication: "Les icônes sont des images saintes typiques du christianisme orthodoxe.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Qui surveille les comtes dans l'Empire carolingien ?",
          choix: ["Les évêques", "Les missi dominici", "Les patriarches", "Les basileis"],
          bonneReponse: 1,
          explication: "Les missi dominici, envoyés par deux (un laïc et un religieux), contrôlent les comtes au nom de l'empereur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Que devient l'Empire carolingien après la mort de Charlemagne ? Cite le traité et sa date.",
          reponse: "Il est partagé entre les trois petits-fils de Charlemagne par le traité de Verdun, en 843.",
          explication: "Le traité de Verdun (843) divise l'empire en trois royaumes, dont la Francie occidentale, ancêtre de la France.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux moyens utilisés par les Byzantins pour diffuser le christianisme d'Orient en Europe de l'Est.",
          reponse:
            "L'envoi de missionnaires comme Cyrille et Méthode chez les Slaves, et la création d'un alphabet (à l'origine du cyrillique) pour traduire les textes chrétiens dans les langues slaves.",
          explication: "Mission et traduction sont les deux grands outils de l'évangélisation byzantine.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : raconte comment le christianisme s'est divisé entre Orient et Occident, du temps des deux empires jusqu'au schisme de 1054.",
          reponse:
            "Introduction : les empires byzantin et carolingien sont chrétiens, mais leurs Églises s'éloignent peu à peu. Première partie : deux organisations différentes ; à l'Ouest, le pape dirige l'Église depuis Rome et le latin est la langue religieuse ; à l'Est, le patriarche de Constantinople guide une Église de langue grecque où l'on vénère les icônes. Deuxième partie : des rivalités croissantes ; chaque Église convertit de nouveaux peuples (Cyrille et Méthode chez les Slaves pour Byzance), et pape et patriarche se disputent l'autorité sur la chrétienté. Troisième partie : la rupture ; en 1054, excommunications mutuelles, c'est le schisme, qui sépare catholiques et orthodoxes. Conclusion : cette division de la chrétienté, née au Moyen Âge, existe toujours aujourd'hui.",
          explication:
            "On attend un récit organisé : différences entre les deux Églises, montée des rivalités, puis le schisme de 1054, avec les mots-clés pape, patriarche, catholique, orthodoxe.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Après 476, deux empires chrétiens se disent héritiers de Rome : Byzance à l'Est, les Carolingiens à l'Ouest.",
    "Justinien (527-565) : Constantinople, Sainte-Sophie (537), Code de Justinien, reconquêtes.",
    "Repère brevet : 800, couronnement de Charlemagne empereur à Rome par le pape Léon III ; capitale Aix-la-Chapelle.",
    "843 : traité de Verdun, partage de l'Empire carolingien entre les petits-fils de Charlemagne.",
    "Deux christianismes : catholique (pape, Rome, latin) et orthodoxe (patriarche, Constantinople, grec, icônes).",
    "Repère brevet : 1054, schisme entre l'Église d'Occident et l'Église d'Orient.",
  ],
},
{
  slug: "croissance-demographique",
  titre: "La croissance démographique et ses effets",
  matiere: "histoire-geo",
  niveau: "5eme",
  description:
    "Comprendre pourquoi la population mondiale a fortement augmenté depuis le XXe siècle, comment elle se répartit sur la planète et quels défis cette croissance pose pour se loger, se nourrir et se déplacer.",
  objectifs: [
    "Savoir que la population mondiale atteint environ 8 milliards d'habitants",
    "Comprendre le mécanisme de la transition démographique",
    "Décrire la répartition inégale de la population sur Terre",
    "Comprendre les effets de la croissance démographique : urbanisation, besoins alimentaires, migrations",
    "Savoir lire une carte de la répartition de la population mondiale",
  ],
  slides: [
    {
      titre: "Une population mondiale en forte croissance",
      illustration: "📈",
      visuel: "8 milliards d'habitants",
      contenu: [
        "En 2024, la Terre compte environ 8 milliards d'habitants",
        "En 1950, la population mondiale n'était que d'environ 2,5 milliards",
        "Cette croissance s'est fortement accélérée au XXe siècle",
        "Elle devrait ralentir progressivement au cours du XXIe siècle",
      ],
      voixOff:
        "Aujourd'hui, la Terre compte environ huit milliards d'habitants. En mille neuf cent cinquante, la population mondiale n'était que d'environ deux milliards et demi de personnes. En moins d'un siècle, la population mondiale a donc plus que triplé. Cette croissance très rapide s'est accélérée au vingtième siècle, mais les démographes prévoient qu'elle ralentira progressivement au cours du vingt et unième siècle.",
    },
    {
      titre: "La transition démographique",
      illustration: "⚖️",
      visuel: "Natalité ↓ / Mortalité ↓",
      contenu: [
        "D'abord, les progrès médicaux et l'hygiène font baisser la mortalité",
        "La natalité reste élevée : la population augmente très vite",
        "Puis la natalité baisse à son tour : la croissance ralentit",
        "Ce passage s'appelle la transition démographique",
      ],
      voixOff:
        "La forte croissance de la population s'explique par un phénomène appelé la transition démographique. D'abord, les progrès de la médecine, l'amélioration de l'hygiène et de l'alimentation font fortement baisser la mortalité. Mais la natalité reste élevée pendant un temps, ce qui entraîne une croissance très rapide de la population. Puis, avec le temps, la natalité baisse à son tour, et la croissance démographique ralentit.",
    },
    {
      titre: "Une population inégalement répartie",
      illustration: "🗺️",
      visuel: "Foyers de peuplement",
      contenu: [
        "L'Asie de l'Est et du Sud concentre plus de la moitié de la population mondiale",
        "L'Europe et certaines côtes sont aussi très densément peuplées",
        "Des zones sont presque vides : déserts, forêts équatoriales, régions polaires",
        "Les hommes se concentrent surtout dans les plaines et sur les littoraux",
      ],
      voixOff:
        "La population mondiale n'est pas répartie de façon égale sur la planète. L'Asie de l'Est et du Sud, avec la Chine et l'Inde, concentre à elle seule plus de la moitié de la population mondiale. L'Europe et de nombreuses régions côtières sont aussi très densément peuplées. À l'inverse, certains espaces restent presque vides d'habitants, comme les grands déserts, les forêts équatoriales ou les régions polaires. Les populations se concentrent surtout dans les plaines fertiles et le long des littoraux.",
    },
    {
      titre: "Une urbanisation croissante",
      illustration: "🏙️",
      visuel: "Plus de 50 % en ville",
      contenu: [
        "Depuis 2007, plus de la moitié de la population mondiale vit en ville",
        "Les mégapoles, plus de 10 millions d'habitants, se multiplient",
        "L'exode rural pousse les populations des campagnes vers les villes",
        "Cette urbanisation est très rapide dans les pays du Sud",
      ],
      voixOff:
        "Depuis deux mille sept, plus de la moitié de la population mondiale vit désormais en ville. Les mégapoles, ces immenses villes de plus de dix millions d'habitants, se multiplient, en Asie, en Afrique et en Amérique latine. De nombreux habitants quittent les campagnes pour la ville, c'est l'exode rural, en espérant y trouver du travail. Cette urbanisation est particulièrement rapide dans les pays du Sud.",
    },
    {
      titre: "Nourrir une population croissante",
      illustration: "🌾",
      visuel: "Sécurité alimentaire",
      contenu: [
        "Il faut produire davantage de nourriture pour nourrir 8 milliards d'humains",
        "L'agriculture s'intensifie, parfois au détriment de l'environnement",
        "Des inégalités persistent : sous-nutrition dans certaines régions",
        "Le défi est de nourrir tout le monde durablement",
      ],
      voixOff:
        "Nourrir près de huit milliards d'êtres humains est un défi majeur. Pour augmenter la production, l'agriculture s'intensifie, ce qui pèse parfois lourdement sur l'environnement, avec la déforestation ou l'usage massif d'engrais. Malgré des progrès, de fortes inégalités persistent : certaines régions du monde souffrent encore de sous-nutrition. Le grand défi du vingt et unième siècle est donc de nourrir toute la population, de façon durable.",
    },
    {
      titre: "Des migrations liées à la démographie",
      illustration: "🧳",
      visuel: "Migrations",
      contenu: [
        "Certaines régions, très peuplées et pauvres, voient partir des habitants",
        "D'autres régions, vieillissantes, attirent une main-d'œuvre migrante",
        "Les migrations peuvent être internes (exode rural) ou internationales",
        "Elles sont souvent liées à la recherche de meilleures conditions de vie",
      ],
      voixOff:
        "La croissance démographique s'accompagne aussi de nombreuses migrations. Dans certaines régions très peuplées et pauvres, des habitants partent chercher de meilleures conditions de vie ailleurs. À l'inverse, des régions au vieillissement marqué, comme certains pays d'Europe, ont besoin d'une main-d'œuvre venue d'ailleurs. Ces migrations peuvent être internes à un pays, comme l'exode rural, ou internationales, entre continents.",
    },
    {
      titre: "Des situations démographiques contrastées",
      illustration: "👶",
      visuel: "Nord vieillissant / Sud jeune",
      contenu: [
        "Dans de nombreux pays du Nord, la population vieillit et la natalité est faible",
        "En Afrique subsaharienne, la population reste très jeune et la natalité est élevée",
        "Ces différences créent des besoins et des défis très différents",
        "La pyramide des âges permet de visualiser ces situations",
      ],
      voixOff:
        "Toutes les régions du monde ne connaissent pas la même situation démographique. Dans de nombreux pays du Nord, comme le Japon ou certains pays d'Europe, la population vieillit et la natalité est faible. À l'inverse, en Afrique subsaharienne, la population reste très jeune, avec une natalité encore élevée. Ces différences créent des besoins très différents : écoles et emplois d'un côté, retraites et soins aux personnes âgées de l'autre. La pyramide des âges est un outil qui permet de visualiser ces situations.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "La population mondiale atteint environ 8 milliards d'habitants en 2024",
        "La transition démographique explique la forte croissance depuis le XXe siècle",
        "La population est très inégalement répartie sur la planète",
        "Cette croissance pose des défis : nourrir, loger, employer une population croissante",
      ],
      voixOff:
        "Résumons. La population mondiale atteint aujourd'hui environ huit milliards d'habitants, contre deux milliards et demi en mille neuf cent cinquante. Cette croissance s'explique par la transition démographique, une baisse de la mortalité suivie d'une baisse de la natalité. La population se répartit très inégalement sur la Terre, concentrée en Asie, en Europe et sur les littoraux. Cette croissance pose de grands défis : nourrir, loger et employer une population toujours plus urbaine, dans des situations démographiques très contrastées selon les régions du monde. Bravo, tu connais l'essentiel de ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "Depuis le XXe siècle, la population mondiale a connu une croissance très rapide, passant de 2,5 milliards en 1950 à environ 8 milliards d'habitants aujourd'hui. Cette croissance, inégale selon les régions, pose de nombreux défis.",
    sections: [
      {
        titre: "Une croissance rapide",
        points: [
          "8 milliards d'habitants sur Terre en 2024",
          "2,5 milliards d'habitants en 1950",
          "La croissance démographique devrait ralentir au cours du XXIe siècle",
        ],
      },
      {
        titre: "La transition démographique",
        points: [
          "Baisse de la mortalité grâce aux progrès médicaux et à l'hygiène",
          "La natalité reste élevée un temps : forte croissance de la population",
          "Puis la natalité baisse à son tour : la croissance ralentit",
        ],
      },
      {
        titre: "Une répartition inégale",
        points: [
          "Forte concentration en Asie de l'Est et du Sud, en Europe, sur les littoraux",
          "Espaces presque vides : déserts, forêts équatoriales, régions polaires",
          "Urbanisation croissante : plus de la moitié de l'humanité vit en ville depuis 2007",
        ],
      },
      {
        titre: "Des défis et des contrastes",
        points: [
          "Nourrir, loger, employer une population croissante",
          "Nord vieillissant / Sud jeune (Afrique subsaharienne)",
          "Migrations internes (exode rural) et internationales",
        ],
      },
    ],
    audio:
      "Fiche de révision : la croissance démographique et ses effets. En 2024, la Terre compte environ huit milliards d'habitants, contre deux milliards et demi en mille neuf cent cinquante. Cette forte croissance s'explique par la transition démographique : la mortalité baisse d'abord grâce aux progrès médicaux, tandis que la natalité reste élevée, puis la natalité baisse à son tour et la croissance ralentit. La population mondiale est très inégalement répartie : elle se concentre en Asie de l'Est et du Sud, en Europe et sur les littoraux, tandis que de vastes espaces restent presque vides, comme les déserts ou les forêts équatoriales. Depuis deux mille sept, plus de la moitié de l'humanité vit en ville, et les mégapoles se multiplient. Cette croissance démographique pose de grands défis : nourrir, loger et employer une population croissante, dans un monde marqué par des contrastes, entre un Nord vieillissant et un Sud, notamment l'Afrique subsaharienne, à la population beaucoup plus jeune.",
  },
  memoCards: [
    { recto: "Combien d'habitants compte la Terre aujourd'hui ?", verso: "Environ 8 milliards d'habitants (en 2024)." },
    { recto: "Qu'est-ce que la transition démographique ?", verso: "Le passage d'une forte mortalité et natalité à une faible mortalité et natalité, avec une phase de forte croissance entre les deux." },
    { recto: "Où se concentre la population mondiale ?", verso: "En Asie de l'Est et du Sud, en Europe et sur les littoraux." },
    { recto: "Qu'est-ce qu'une mégapole ?", verso: "Une très grande ville de plus de 10 millions d'habitants." },
    { recto: "Qu'est-ce que l'exode rural ?", verso: "Le départ des habitants des campagnes vers les villes." },
    { recto: "Depuis quand plus de la moitié de l'humanité vit-elle en ville ?", verso: "Depuis 2007." },
    { recto: "Qu'est-ce qu'une pyramide des âges ?", verso: "Un graphique qui représente la répartition d'une population par âge et par sexe." },
    { recto: "Quelle est la population mondiale en 1950 ?", verso: "Environ 2,5 milliards d'habitants." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est approximativement la population mondiale aujourd'hui ?",
      choix: ["2,5 milliards", "5 milliards", "8 milliards", "12 milliards"],
      bonneReponse: 2,
      explication: "La population mondiale atteint environ 8 milliards d'habitants en 2024.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Depuis quand plus de la moitié de la population mondiale vit-elle en ville ?",
      choix: ["1950", "1990", "2007", "2020"],
      bonneReponse: 2,
      explication: "Depuis 2007, plus de la moitié des humains vivent en ville.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'une mégapole ?",
      reponse: "Une très grande ville qui compte plus de 10 millions d'habitants.",
      explication: "Les mégapoles se multiplient, en particulier en Asie et en Afrique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel continent concentre plus de la moitié de la population mondiale ?",
      choix: ["L'Europe", "L'Afrique", "L'Asie", "L'Amérique"],
      bonneReponse: 2,
      explication: "L'Asie, notamment l'Asie de l'Est et du Sud, concentre plus de la moitié des habitants du monde.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelles sont les deux étapes principales de la transition démographique ?",
      choix: [
        "Hausse de la natalité puis hausse de la mortalité",
        "Baisse de la mortalité puis baisse de la natalité",
        "Baisse de la natalité puis baisse de la mortalité",
        "Hausse de la mortalité puis baisse de la natalité",
      ],
      bonneReponse: 1,
      explication: "La mortalité baisse d'abord, ce qui crée une forte croissance, puis la natalité baisse à son tour, ce qui ralentit la croissance.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux zones du monde presque vides d'habitants et explique pourquoi.",
      reponse: "Les grands déserts (comme le Sahara), trop secs, et les forêts équatoriales ou régions polaires, difficiles à habiter en raison du climat.",
      explication: "Ces espaces sont peu habités en raison de contraintes climatiques ou naturelles fortes.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est l'exode rural et pourquoi il se produit.",
      reponse: "C'est le départ des habitants des campagnes vers les villes, souvent pour chercher du travail et de meilleures conditions de vie.",
      explication: "L'exode rural alimente fortement la croissance des villes, en particulier dans les pays du Sud.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle région du monde a une population particulièrement jeune ?",
      choix: ["L'Europe", "Le Japon", "L'Afrique subsaharienne", "L'Amérique du Nord"],
      bonneReponse: 2,
      explication: "En Afrique subsaharienne, la natalité reste élevée et la population est très jeune.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la croissance démographique pose un défi pour l'alimentation mondiale.",
      reponse:
        "Il faut produire de plus en plus de nourriture pour nourrir une population croissante, ce qui pousse à intensifier l'agriculture, parfois au détriment de l'environnement, alors que des inégalités persistent et que certaines régions souffrent encore de sous-nutrition.",
      explication: "Ce défi doit être relié à la fois à la production agricole et aux inégalités de répartition des ressources.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Compare la situation démographique d'un pays du Nord vieillissant et d'un pays d'Afrique subsaharienne.",
      reponse:
        "Dans un pays du Nord, la natalité est faible et la population vieillit, ce qui pose des défis liés aux retraites et aux soins aux personnes âgées. En Afrique subsaharienne, la natalité reste élevée et la population est jeune, ce qui pose des défis liés à l'éducation et à l'emploi des jeunes.",
      explication: "Cette comparaison montre que la croissance démographique n'a pas les mêmes effets partout dans le monde.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi la croissance démographique mondiale devrait-elle ralentir au cours du XXIe siècle ?",
      choix: [
        "Parce que la mortalité va augmenter partout",
        "Parce que la natalité continue de baisser dans de plus en plus de pays",
        "Parce que les migrations vont s'arrêter",
        "Parce que l'urbanisation va reculer",
      ],
      bonneReponse: 1,
      explication: "À mesure que davantage de pays achèvent leur transition démographique, la natalité baisse et la croissance ralentit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que la répartition de la population mondiale reflète les inégalités entre les territoires ?",
      reponse:
        "Les populations se concentrent là où les conditions de vie sont favorables (plaines fertiles, littoraux, emplois urbains), tandis que les espaces aux conditions difficiles (déserts, forêts denses, régions polaires) restent peu peuplés, ce qui montre le lien entre peuplement et ressources disponibles.",
      explication: "Cette question invite à relier répartition de la population et attractivité des territoires.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle était la population mondiale en 1950 ?",
      choix: ["1 milliard", "2,5 milliards", "5 milliards", "8 milliards"],
      bonneReponse: 1,
      explication: "En 1950, la population mondiale était d'environ 2,5 milliards d'habitants.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que la transition démographique ?",
      reponse: "Le passage d'une population à forte mortalité et natalité vers une population à faible mortalité et natalité, avec une phase de forte croissance entre les deux.",
      explication: "Ce mécanisme explique la forte croissance de la population mondiale depuis le XXe siècle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux régions très densément peuplées dans le monde.",
      reponse: "Par exemple : l'Asie de l'Est (Chine, Japon) et l'Asie du Sud (Inde), ou encore l'Europe.",
      explication: "Ces régions concentrent une grande partie de la population mondiale.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel phénomène explique la croissance rapide des villes dans le monde ?",
      choix: ["L'exode rural", "Le vieillissement", "La transition démographique uniquement", "La désertification"],
      bonneReponse: 0,
      explication: "L'exode rural, le départ des campagnes vers les villes, alimente la croissance urbaine.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Quels sont les principaux défis posés par la croissance démographique mondiale ?",
      reponse: "Nourrir, loger et employer une population croissante, tout en gérant des situations démographiques très différentes selon les régions (vieillissement au Nord, jeunesse au Sud).",
      explication: "Cette synthèse reprend les grands enjeux du chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La croissance démographique et ses effets",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est approximativement la population mondiale en 2024 ?",
          choix: ["4 milliards", "6 milliards", "8 milliards", "10 milliards"],
          bonneReponse: 2,
          explication: "La population mondiale atteint environ 8 milliards d'habitants en 2024.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une mégapole ? Donne un exemple.",
          reponse: "Une ville de plus de 10 millions d'habitants, comme Tokyo, Mexico ou Lagos.",
          explication: "Les mégapoles se multiplient surtout en Asie et en Afrique.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est la cause principale de la forte croissance de la population au XXe siècle ?",
          choix: [
            "La hausse de la mortalité",
            "La baisse de la mortalité alors que la natalité reste élevée",
            "La baisse de la natalité alors que la mortalité reste élevée",
            "L'augmentation des migrations",
          ],
          bonneReponse: 1,
          explication: "C'est la phase centrale de la transition démographique, où la mortalité baisse avant la natalité.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris la répartition de la population mondiale à l'aide de deux exemples.",
          reponse: "La population est très dense en Asie de l'Est et du Sud (Chine, Inde) et sur de nombreux littoraux, alors que des espaces comme le Sahara ou l'Amazonie sont presque vides d'habitants.",
          explication: "La répartition dépend des conditions naturelles et économiques des territoires.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi certains pays connaissent-ils un vieillissement de leur population ?",
          reponse: "Parce que la natalité y est devenue faible et l'espérance de vie élevée, ce qui augmente la part des personnes âgées dans la population.",
          explication: "Ce phénomène concerne surtout des pays du Nord ayant achevé leur transition démographique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique comment et pourquoi la population mondiale a fortement augmenté depuis le XXe siècle, et quels défis cette croissance pose aujourd'hui (une quinzaine de lignes).",
          reponse:
            "Introduction : la population mondiale a plus que triplé depuis 1950. Première partie : cette croissance s'explique par la transition démographique, la baisse de la mortalité grâce aux progrès médicaux précédant la baisse de la natalité. Deuxième partie : la population se répartit très inégalement, concentrée en Asie, en Europe et sur les littoraux, et de plus en plus urbaine depuis 2007. Troisième partie : cette croissance pose des défis majeurs, nourrir, loger et employer davantage d'habitants, dans un monde marqué par des contrastes entre un Nord vieillissant et un Sud plus jeune. Conclusion : gérer durablement cette croissance est un enjeu majeur du XXIe siècle.",
          explication:
            "Un bon développement construit comporte une introduction, plusieurs parties organisées avec du vocabulaire précis (transition démographique, urbanisation, exode rural) et une conclusion.",
        },
      ],
    },
    {
      titre: "Examen 2 — La croissance démographique et ses effets",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment appelle-t-on le départ des habitants des campagnes vers les villes ?",
          choix: ["La transition démographique", "L'exode rural", "L'urbanisation", "La migration internationale"],
          bonneReponse: 1,
          explication: "L'exode rural désigne le départ des campagnes vers les villes.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite un continent où la population est très jeune.",
          reponse: "L'Afrique (en particulier l'Afrique subsaharienne).",
          explication: "La natalité y reste élevée, ce qui donne une population jeune.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel outil permet de représenter la répartition d'une population par âge et par sexe ?",
          choix: ["La carte topographique", "La pyramide des âges", "Le diagramme climatique", "La courbe de niveau"],
          bonneReponse: 1,
          explication: "La pyramide des âges est un graphique utilisé pour étudier la structure d'une population.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi de nombreux pays du Nord ont besoin de main-d'œuvre migrante.",
          reponse: "Parce que leur population vieillit et que la natalité y est faible, ce qui crée un manque de travailleurs dans certains secteurs économiques.",
          explication: "Les migrations internationales répondent en partie à ces besoins démographiques.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quels problèmes environnementaux peut poser l'intensification de l'agriculture pour nourrir une population croissante ?",
          reponse: "La déforestation, l'usage massif d'engrais et de pesticides, l'épuisement des sols et la surexploitation de l'eau.",
          explication: "Nourrir davantage d'habitants peut se faire au détriment de l'environnement si l'agriculture n'est pas durable.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que la croissance démographique se traduit par une urbanisation rapide et des inégalités entre les territoires du monde (une quinzaine de lignes).",
          reponse:
            "Introduction : la croissance démographique s'accompagne d'une urbanisation sans précédent. Première partie : depuis 2007, plus de la moitié de l'humanité vit en ville, et les mégapoles se multiplient, en particulier dans les pays du Sud, alimentées par l'exode rural. Deuxième partie : cette urbanisation crée des inégalités, entre quartiers riches et bidonvilles, et pose des défis d'accès au logement, à l'eau et à l'emploi. Troisième partie : à l'échelle mondiale, les situations démographiques restent très contrastées, entre un Nord vieillissant qui doit financer les retraites, et un Sud jeune qui doit scolariser et employer sa jeunesse. Conclusion : gérer ces inégalités est un défi essentiel pour un développement durable de la planète.",
          explication:
            "On attend un développement organisé reliant urbanisation, inégalités territoriales et contrastes démographiques mondiaux.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère : environ 8 milliards d'habitants sur Terre en 2024, contre 2,5 milliards en 1950.",
    "La transition démographique : baisse de la mortalité puis baisse de la natalité.",
    "Population très inégalement répartie : forte densité en Asie, en Europe, sur les littoraux ; espaces presque vides (déserts, forêts équatoriales, pôles).",
    "Depuis 2007, plus de la moitié de l'humanité vit en ville ; multiplication des mégapoles.",
    "Défis majeurs : nourrir, loger, employer une population croissante de façon durable.",
    "Contrastes démographiques : Nord vieillissant / Sud jeune (Afrique subsaharienne).",
  ],
},
{
  slug: "feodalite",
  titre: "Seigneurs et paysans : la féodalité",
  matiere: "histoire-geo",
  niveau: "5eme",
  description:
    "Comprendre l'organisation de la société féodale en Occident, entre le Xe et le XIIe siècle : le château fort, les liens de vassalité, les trois ordres et la vie des paysans.",
  objectifs: [
    "Comprendre pourquoi le pouvoir se fragmente après l'Empire carolingien",
    "Connaître le lien de vassalité : hommage, suzerain, vassal, fief",
    "Connaître l'organisation de la seigneurie et la vie des paysans",
    "Connaître la théorie des trois ordres de la société médiévale",
    "Savoir décrire un château fort et le rôle du chevalier",
  ],
  slides: [
    {
      titre: "La fin de l'ordre carolingien",
      illustration: "⚔️",
      visuel: "IXe-Xe siècle",
      contenu: [
        "Après Charlemagne, l'Empire carolingien se divise (traité de Verdun, 843)",
        "De nouvelles invasions frappent l'Europe : Vikings, Hongrois, Sarrasins",
        "Le pouvoir royal s'affaiblit face à ces menaces",
        "De grands seigneurs locaux prennent en charge la défense des populations",
      ],
      voixOff:
        "Après la mort de Charlemagne, l'empire est partagé entre ses petits-fils par le traité de Verdun, en huit cent quarante-trois. L'Europe subit alors nourvelles invasions : les Vikings venus du nord, les Hongrois venus de l'est, les Sarrasins venus du sud. Le roi, trop loin et trop faible, ne peut plus protéger tout le royaume. Ce sont des seigneurs locaux qui prennent en charge la défense des populations.",
    },
    {
      titre: "Le château fort, cœur du pouvoir seigneurial",
      illustration: "🏰",
      visuel: "Château fort",
      contenu: [
        "D'abord en bois sur une motte, puis en pierre à partir du XIe siècle",
        "Le château protège le seigneur et les habitants en cas d'attaque",
        "Il abrite le donjon, les remparts, les douves",
        "Depuis son château, le seigneur exerce le ban : commander, juger, punir",
      ],
      voixOff:
        "Le château fort devient le symbole du pouvoir seigneurial. D'abord construit en bois sur une butte de terre, la motte, il est ensuite bâti en pierre à partir du onzième siècle, avec son donjon, ses remparts et parfois des douves. En cas d'attaque, il sert de refuge à la population. Depuis son château, le seigneur exerce ce qu'on appelle le ban : le droit de commander, de juger et de punir les habitants de sa seigneurie.",
    },
    {
      titre: "Le lien de vassalité",
      illustration: "🤝",
      visuel: "Suzerain ↔ Vassal",
      contenu: [
        "Un seigneur puissant, le suzerain, accorde un fief à un vassal",
        "En échange, le vassal lui prête un serment de fidélité : l'hommage",
        "Le vassal doit aide militaire (l'ost) et conseil à son suzerain",
        "Le suzerain doit protection et justice à son vassal",
      ],
      voixOff:
        "Pour organiser la société, les seigneurs tissent entre eux des liens de vassalité. Un seigneur puissant, le suzerain, accorde une terre, le fief, à un autre seigneur, le vassal. En échange, le vassal lui prête un serment de fidélité lors d'une cérémonie appelée l'hommage. Le vassal doit alors aide militaire et conseil à son suzerain, qui lui doit en retour protection et justice.",
    },
    {
      titre: "La seigneurie",
      illustration: "🌾",
      visuel: "Réserve + tenures",
      contenu: [
        "La seigneurie est divisée entre la réserve (terres du seigneur) et les tenures",
        "Les tenures sont louées aux paysans en échange de redevances",
        "Les paysans doivent aussi des corvées : travail gratuit pour le seigneur",
        "Le seigneur possède les banalités : four, moulin, pressoir, payants",
      ],
      voixOff:
        "La seigneurie est le territoire dirigé par le seigneur. Elle se divise entre la réserve, que le seigneur garde pour lui, et les tenures, des parcelles louées aux paysans en échange de redevances, souvent payées en nature. Les paysans doivent aussi des corvées, des jours de travail gratuit pour le seigneur. Enfin, ils sont obligés d'utiliser le four, le moulin et le pressoir du seigneur, appelés banalités, en payant une taxe.",
    },
    {
      titre: "Serfs et vilains, la vie des paysans",
      illustration: "🧑‍🌾",
      visuel: "Openfield",
      contenu: [
        "Les vilains sont des paysans libres, les serfs dépendent totalement du seigneur",
        "Les paysans travaillent la terre avec des outils simples (charrue, faucille)",
        "L'assolement triennal permet de reposer une partie des terres chaque année",
        "La vie paysanne est rude : famines et maladies sont fréquentes",
      ],
      voixOff:
        "Parmi les paysans, on distingue les vilains, des hommes libres, et les serfs, qui dépendent entièrement du seigneur et ne peuvent pas quitter la terre sans son accord. Les paysans travaillent avec des outils simples comme la charrue ou la faucille. Beaucoup pratiquent l'assolement triennal : chaque année, un tiers des terres est laissé au repos pour rester fertile. La vie paysanne reste rude, marquée par des famines et des maladies fréquentes.",
    },
    {
      titre: "Les trois ordres de la société",
      illustration: "⛪",
      visuel: "Prier / Combattre / Travailler",
      contenu: [
        "Ceux qui prient : le clergé (évêques, moines, curés)",
        "Ceux qui combattent : la noblesse (seigneurs et chevaliers)",
        "Ceux qui travaillent : les paysans, très largement majoritaires",
        "Cette organisation est présentée comme voulue par Dieu",
      ],
      voixOff:
        "Les hommes du Moyen Âge pensent que la société doit être divisée en trois ordres. Ceux qui prient : c'est le clergé, avec les évêques, les moines et les curés. Ceux qui combattent : c'est la noblesse, seigneurs et chevaliers. Ceux qui travaillent : ce sont les paysans, de très loin les plus nombreux. Cette organisation est présentée à l'époque comme voulue par Dieu.",
    },
    {
      titre: "Le chevalier et l'adoubement",
      illustration: "🗡️",
      visuel: "Adoubement",
      contenu: [
        "Le chevalier est un guerrier à cheval, équipé d'une épée et d'un bouclier",
        "Il devient chevalier lors d'une cérémonie appelée l'adoubement",
        "Il doit respecter un code d'honneur : courage, loyauté, protection des faibles",
        "L'Église tente d'encadrer la violence des chevaliers (paix et trêve de Dieu)",
      ],
      voixOff:
        "Le chevalier est un guerrier combattant à cheval, équipé d'une épée, d'un bouclier et d'une armure. Il devient officiellement chevalier lors d'une cérémonie, l'adoubement. On attend de lui qu'il respecte un code d'honneur : courage au combat, loyauté envers son suzerain, protection des plus faibles. Face à la violence de ces guerriers, l'Église tente d'imposer des règles, comme la paix de Dieu et la trêve de Dieu, qui limitent les combats.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Xe-XIIe siècle : la société féodale s'organise autour du château fort",
        "Vassalité : suzerain, vassal, fief, hommage",
        "Seigneurie : réserve, tenures, corvées, banalités",
        "Trois ordres : clergé, noblesse, paysans",
      ],
      voixOff:
        "Résumons. Entre le dixième et le douzième siècle, la société féodale s'organise autour du château fort et du pouvoir des seigneurs. Les liens de vassalité unissent suzerains et vassaux autour du fief et de l'hommage. Dans la seigneurie, les paysans travaillent la réserve et leurs tenures, paient des redevances et subissent corvées et banalités. Enfin, la société est pensée en trois ordres : ceux qui prient, ceux qui combattent, ceux qui travaillent. Bravo, tu connais l'essentiel de ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "Entre le Xe et le XIIe siècle, face à l'affaiblissement du pouvoir royal et aux invasions, la société d'Occident s'organise autour des seigneurs, des châteaux forts et de liens personnels de fidélité : c'est la féodalité.",
    sections: [
      {
        titre: "Un pouvoir qui se fragmente",
        points: [
          "843 : traité de Verdun, partage de l'Empire carolingien",
          "Nouvelles invasions : Vikings, Hongrois, Sarrasins",
          "Le roi ne peut plus protéger tout son royaume",
          "Des seigneurs locaux prennent en charge la défense, depuis leur château fort",
        ],
      },
      {
        titre: "Le lien de vassalité",
        points: [
          "Le suzerain accorde un fief à un vassal",
          "Le vassal prête serment de fidélité lors de l'hommage",
          "Le vassal doit aide militaire et conseil, le suzerain doit protection et justice",
        ],
      },
      {
        titre: "La seigneurie et les paysans",
        points: [
          "Réserve (terres du seigneur) et tenures (louées aux paysans)",
          "Redevances, corvées et banalités (four, moulin, pressoir)",
          "Serfs (dépendants) et vilains (libres) ; assolement triennal",
        ],
      },
      {
        titre: "Les trois ordres",
        points: [
          "Le clergé : ceux qui prient",
          "La noblesse : ceux qui combattent (chevaliers, adoubement)",
          "Les paysans : ceux qui travaillent, très majoritaires",
        ],
      },
    ],
    audio:
      "Fiche de révision : seigneurs et paysans, la féodalité. Après le partage de l'Empire carolingien au traité de Verdun en huit cent quarante-trois, l'Europe subit de nouvelles invasions, vikings, hongroises et sarrasines. Le pouvoir royal s'affaiblit et des seigneurs locaux prennent en charge la protection des populations depuis leur château fort. Une société de liens personnels se met en place : le suzerain accorde un fief à son vassal, qui lui prête serment de fidélité lors de l'hommage et lui doit aide militaire et conseil, en échange de protection et de justice. Dans la seigneurie, les paysans, serfs ou vilains, cultivent leur tenure, versent des redevances au seigneur, effectuent des corvées et utilisent ses banalités, comme le four ou le moulin. La société médiévale est pensée en trois ordres : le clergé qui prie, la noblesse qui combat, et les paysans qui travaillent.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un fief ?", verso: "Une terre accordée par un suzerain à son vassal en échange de fidélité." },
    { recto: "Qu'est-ce que l'hommage ?", verso: "La cérémonie où le vassal jure fidélité à son suzerain." },
    { recto: "Qu'est-ce que le ban ?", verso: "Le pouvoir du seigneur de commander, juger et punir ses habitants." },
    { recto: "Quelle est la différence entre serf et vilain ?", verso: "Le vilain est un paysan libre ; le serf dépend entièrement du seigneur et ne peut quitter la terre sans son accord." },
    { recto: "Que sont les banalités ?", verso: "Le four, le moulin et le pressoir du seigneur, que les paysans doivent utiliser en payant une taxe." },
    { recto: "Quels sont les trois ordres de la société médiévale ?", verso: "Le clergé (prier), la noblesse (combattre), les paysans (travailler)." },
    { recto: "Qu'est-ce que l'adoubement ?", verso: "La cérémonie au cours de laquelle un jeune noble devient officiellement chevalier." },
    { recto: "Qu'est-ce que l'assolement triennal ?", verso: "Une technique agricole où un tiers des terres est laissé au repos chaque année pour rester fertile." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel traité partage l'Empire carolingien en 843 ?",
      choix: ["Le traité de Verdun", "Le traité de Rome", "Le traité d'Aix-la-Chapelle", "Le traité de Damas"],
      bonneReponse: 0,
      explication: "Le traité de Verdun, en 843, partage l'empire entre les trois petits-fils de Charlemagne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on la terre accordée par un suzerain à son vassal ?",
      choix: ["La réserve", "Le fief", "La tenure", "Le ban"],
      bonneReponse: 1,
      explication: "Le fief est la terre accordée par le suzerain à son vassal en échange de fidélité.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment s'appelle la cérémonie où un jeune noble devient chevalier ?",
      reponse: "L'adoubement.",
      explication: "L'adoubement est la cérémonie officielle qui fait d'un jeune noble un chevalier.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le rôle des paysans dans la théorie des trois ordres ?",
      choix: ["Prier", "Combattre", "Travailler", "Juger"],
      bonneReponse: 2,
      explication: "Les paysans forment l'ordre de « ceux qui travaillent », très largement majoritaire.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que doit le vassal à son suzerain ?",
      choix: ["Un fief", "Aide militaire et conseil", "La construction d'un château", "Le jugement des paysans"],
      bonneReponse: 1,
      explication: "En échange du fief, le vassal doit aide militaire (l'ost) et conseil à son suzerain.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que sont les corvées ?",
      reponse: "Des jours de travail gratuit que les paysans doivent effectuer pour le seigneur, sur ses terres (la réserve).",
      explication: "Les corvées s'ajoutent aux redevances payées par les paysans pour l'usage des tenures.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les seigneurs font-ils construire des châteaux forts à partir du Xe siècle ?",
      reponse: "Pour se protéger et protéger les populations locales face aux invasions (Vikings, Hongrois, Sarrasins) et affirmer leur pouvoir.",
      explication: "Le château fort est à la fois un refuge et le symbole du pouvoir du seigneur sur sa seigneurie.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que la réserve dans une seigneurie ?",
      choix: [
        "La partie des terres gardée directement par le seigneur",
        "La terre louée aux paysans",
        "Le four et le moulin du seigneur",
        "L'impôt payé par les vilains",
      ],
      bonneReponse: 0,
      explication: "La réserve est la partie de la seigneurie que le seigneur exploite directement, souvent avec le travail des corvées.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre un serf et un vilain.",
      reponse:
        "Le vilain est un paysan libre : il peut se déplacer et transmettre ses biens. Le serf dépend entièrement du seigneur, il est attaché à la terre et ne peut pas la quitter, ni se marier, sans l'autorisation du seigneur.",
      explication: "Cette distinction est essentielle pour comprendre les différents statuts paysans au Moyen Âge.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique le lien de vassalité entre un suzerain et son vassal, en citant les obligations de chacun.",
      reponse:
        "Le suzerain accorde un fief à son vassal lors de la cérémonie de l'hommage. Le vassal jure fidélité et doit aide militaire (l'ost) et conseil à son suzerain. En retour, le suzerain doit protection et justice à son vassal.",
      explication: "Ce lien réciproque de droits et de devoirs structure l'ensemble de la société féodale.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle règle l'Église impose-t-elle pour limiter la violence des chevaliers ?",
      choix: ["Le droit d'aînesse", "La paix de Dieu et la trêve de Dieu", "Le droit de banalité", "L'ost féodal"],
      bonneReponse: 1,
      explication: "La paix de Dieu protège certaines personnes (paysans, clercs) et la trêve de Dieu interdit les combats certains jours.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que la théorie des trois ordres justifie les inégalités de la société médiévale ?",
      reponse:
        "En présentant cette organisation comme voulue par Dieu, elle légitime le fait que les paysans, très majoritaires, travaillent pour nourrir et entretenir le clergé et la noblesse, sans possibilité de changer d'ordre.",
      explication: "La théorie des trois ordres sert à justifier une société très hiérarchisée et inégalitaire.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui construit les châteaux forts au Moyen Âge ?",
      choix: ["Les rois uniquement", "Les seigneurs", "Les paysans", "Les moines"],
      bonneReponse: 1,
      explication: "Les seigneurs font construire des châteaux forts pour se protéger et affirmer leur pouvoir.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que doit un vassal à son suzerain ?",
      reponse: "Fidélité, aide militaire et conseil.",
      explication: "En échange du fief reçu, le vassal a des obligations envers son suzerain.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quels sont les trois ordres de la société médiévale ?",
      reponse: "Le clergé (ceux qui prient), la noblesse (ceux qui combattent) et les paysans (ceux qui travaillent).",
      explication: "Cette organisation en trois ordres structure toute la pensée sociale du Moyen Âge.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que sont les banalités ?",
      choix: [
        "Des redevances en argent",
        "Des équipements du seigneur (four, moulin, pressoir) payants pour les paysans",
        "Des jours de travail gratuit",
        "Des impôts royaux",
      ],
      bonneReponse: 1,
      explication: "Les banalités désignent l'obligation d'utiliser, moyennant une taxe, les équipements du seigneur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique en une phrase ce qu'est la vassalité.",
      reponse: "C'est un lien personnel entre un suzerain, qui accorde un fief, et un vassal, qui lui jure fidélité et aide en échange.",
      explication: "La vassalité organise les relations entre seigneurs dans la société féodale.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Seigneurs et paysans : la féodalité",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie être vassal d'un suzerain ?",
          choix: [
            "Recevoir un fief et jurer fidélité en échange",
            "Être propriétaire du château",
            "Diriger l'Église",
            "Être un paysan libre",
          ],
          bonneReponse: 0,
          explication: "Le vassal reçoit un fief de son suzerain et lui prête un serment de fidélité lors de l'hommage.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Pourquoi le pouvoir royal s'affaiblit-il aux Xe et XIe siècles ?",
          reponse: "À cause du partage de l'Empire carolingien et des nouvelles invasions (Vikings, Hongrois, Sarrasins) que le roi ne peut pas empêcher seul.",
          explication: "Ce contexte explique la montée en puissance des seigneurs locaux et de leurs châteaux forts.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Qu'est-ce qu'une tenure ?",
          choix: [
            "La terre gardée par le seigneur",
            "Une parcelle louée à un paysan en échange de redevances",
            "Le château du seigneur",
            "Le serment de fidélité",
          ],
          bonneReponse: 1,
          explication: "La tenure est la terre que le paysan cultive pour lui-même, en échange de redevances versées au seigneur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris le rôle et l'équipement d'un chevalier au Moyen Âge.",
          reponse:
            "Le chevalier est un guerrier combattant à cheval, équipé d'une épée, d'un bouclier et d'une armure. Il devient chevalier lors de l'adoubement et doit respecter un code d'honneur (courage, loyauté, protection des faibles).",
          explication: "Le chevalier appartient à la noblesse, l'ordre de « ceux qui combattent ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle différence fait-on entre la réserve et les tenures dans une seigneurie ?",
          reponse:
            "La réserve est cultivée directement pour le seigneur, souvent grâce aux corvées des paysans, tandis que les tenures sont louées aux paysans en échange de redevances.",
          explication: "Cette organisation permet au seigneur de vivre des revenus de sa seigneurie.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique comment s'organise la société féodale entre le Xe et le XIIe siècle, à travers les liens de vassalité, la seigneurie et les trois ordres (une quinzaine de lignes).",
          reponse:
            "Introduction : après l'affaiblissement du pouvoir royal, la société s'organise autour des seigneurs. Première partie : les liens de vassalité unissent les seigneurs entre eux, le suzerain accordant un fief à son vassal lors de l'hommage, en échange d'aide militaire, de conseil, de protection et de justice. Deuxième partie : dans la seigneurie, les paysans, serfs ou vilains, cultivent leur tenure et versent redevances, corvées et banalités au seigneur, tout en subissant une vie rude. Troisième partie : la société est pensée en trois ordres, le clergé qui prie, la noblesse qui combat, les paysans qui travaillent, ce qui justifie les inégalités. Conclusion : cette organisation féodale structure durablement l'Occident médiéval.",
          explication:
            "Un bon développement construit comporte une introduction, plusieurs parties organisées avec du vocabulaire précis (fief, hommage, corvée, banalité, trois ordres) et une conclusion.",
        },
      ],
    },
    {
      titre: "Examen 2 — Seigneurs et paysans : la féodalité",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qu'est-ce que le ban seigneurial ?",
          choix: [
            "Le droit du seigneur de commander, juger et punir",
            "La terre du seigneur",
            "L'impôt payé par les nobles",
            "Le serment du vassal",
          ],
          bonneReponse: 0,
          explication: "Le ban désigne les pouvoirs de commandement, de justice et de punition exercés par le seigneur.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle est la différence entre un serf et un vilain ?",
          reponse: "Le vilain est un paysan libre ; le serf dépend entièrement du seigneur et ne peut quitter la terre sans son accord.",
          explication: "Ces deux statuts coexistent dans la société paysanne médiévale.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelles invasions frappent l'Europe aux IXe et Xe siècles ?",
          choix: [
            "Les Vikings, les Hongrois et les Sarrasins",
            "Les Romains et les Grecs",
            "Les Ottomans et les Perses",
            "Les Mongols et les Huns",
          ],
          bonneReponse: 0,
          explication: "Ces invasions successives affaiblissent le pouvoir royal et favorisent la montée des seigneurs locaux.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qu'est l'assolement triennal et pourquoi il est utile aux paysans.",
          reponse:
            "C'est une technique qui divise les terres en trois parties, dont une est laissée au repos chaque année, afin de préserver la fertilité des sols et d'améliorer les récoltes.",
          explication: "L'assolement triennal est un progrès agricole important du Moyen Âge central.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux obligations des paysans envers leur seigneur.",
          reponse: "Par exemple : payer des redevances pour leur tenure et effectuer des corvées (ou utiliser les banalités en payant une taxe).",
          explication: "Ces obligations montrent la dépendance économique des paysans envers le seigneur.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : décris la vie quotidienne des paysans dans une seigneurie médiévale (une quinzaine de lignes).",
          reponse:
            "Introduction : les paysans forment l'immense majorité de la population et vivent dans les seigneuries. Première partie : ils cultivent leur tenure avec des outils simples et pratiquent l'assolement triennal, mais restent dépendants du seigneur, surtout s'ils sont serfs. Deuxième partie : ils doivent verser des redevances, effectuer des corvées sur la réserve et utiliser les banalités du seigneur en payant une taxe. Troisième partie : leur vie est rude, marquée par de mauvaises récoltes, des famines et des maladies fréquentes, dans un monde où l'Église occupe une place centrale. Conclusion : malgré leurs conditions difficiles, les paysans sont indispensables à toute la société féodale.",
          explication:
            "On attend une description organisée intégrant le vocabulaire précis du chapitre : tenure, redevance, corvée, banalité, assolement triennal, serf, vilain.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "843 : traité de Verdun, partage de l'Empire carolingien, début de l'affaiblissement du pouvoir royal.",
    "Le château fort, symbole du pouvoir du seigneur et refuge en cas d'attaque.",
    "Vassalité : suzerain, vassal, fief, hommage, aide militaire et protection.",
    "Seigneurie : réserve, tenures, redevances, corvées, banalités.",
    "Serfs (dépendants) et vilains (libres), assolement triennal.",
    "Trois ordres de la société médiévale : clergé, noblesse, paysans.",
  ],
},
{
  slug: "grandes-decouvertes",
  titre: "Les grandes découvertes",
  matiere: "histoire-geo",
  niveau: "5eme",
  description:
    "Comprendre comment, à la fin du XVe et au début du XVIe siècle, les navigateurs européens explorent le monde, découvrent l'Amérique et bouleversent la vision du monde des Européens.",
  objectifs: [
    "Connaître les motivations et les progrès techniques des grandes découvertes",
    "Connaître les voyages de Christophe Colomb, Vasco de Gama et Magellan",
    "Savoir situer 1492 (découverte de l'Amérique) et 1519-1522 (premier tour du monde)",
    "Comprendre les conséquences des découvertes pour les Amérindiens et pour l'Europe",
    "Savoir lire une carte des grandes explorations",
  ],
  slides: [
    {
      titre: "L'Europe à la fin du Moyen Âge",
      illustration: "🧭",
      visuel: "XVe siècle",
      contenu: [
        "À la fin du XVe siècle, l'Europe connaît des progrès techniques",
        "La caravelle, navire rapide et maniable, permet des voyages lointains",
        "La boussole et l'astrolabe facilitent l'orientation en haute mer",
        "Les Européens cherchent une nouvelle route vers l'Asie et ses épices",
      ],
      voixOff:
        "À la fin du quinzième siècle, l'Europe connaît d'importants progrès techniques. La caravelle, un navire rapide et maniable, permet aux marins de s'aventurer loin des côtes. La boussole et l'astrolabe les aident à s'orienter en haute mer. Les royaumes d'Europe, en particulier le Portugal et l'Espagne, cherchent une nouvelle route maritime vers l'Asie, riche en épices et en soieries.",
    },
    {
      titre: "Les Portugais explorent les côtes africaines",
      illustration: "⛵",
      visuel: "Henri le Navigateur",
      contenu: [
        "Le prince Henri le Navigateur lance l'exploration des côtes d'Afrique",
        "En 1488, Bartolomeu Dias franchit le cap de Bonne-Espérance",
        "En 1498, Vasco de Gama atteint l'Inde en contournant l'Afrique",
        "Le Portugal ouvre ainsi une route maritime directe vers l'Asie",
      ],
      voixOff:
        "Les Portugais sont pionniers de l'exploration. Le prince Henri le Navigateur encourage les expéditions le long des côtes africaines. En mille quatre cent quatre-vingt-huit, Bartolomeu Dias franchit le cap de Bonne-Espérance, à la pointe sud de l'Afrique. Dix ans plus tard, en mille quatre cent quatre-vingt-dix-huit, Vasco de Gama atteint l'Inde en contournant l'Afrique, ouvrant une route maritime directe vers l'Asie.",
    },
    {
      titre: "1492 : Christophe Colomb atteint l'Amérique",
      illustration: "🌎",
      visuel: "1492",
      contenu: [
        "Christophe Colomb pense pouvoir atteindre l'Asie en naviguant vers l'ouest",
        "Financé par les rois d'Espagne, il quitte l'Espagne en 1492",
        "Le 12 octobre 1492, il aborde une île des Caraïbes",
        "Il croit avoir atteint les Indes : c'est en réalité un continent inconnu des Européens",
      ],
      voixOff:
        "Le navigateur génois Christophe Colomb pense qu'il est possible d'atteindre l'Asie en naviguant vers l'ouest. Financé par les rois d'Espagne, il quitte le port de Palos en mille quatre cent quatre-vingt-douze. Le douze octobre mille quatre cent quatre-vingt-douze, il aborde une île des Caraïbes. Persuadé d'avoir atteint les Indes, il ne sait pas qu'il vient de découvrir, pour les Européens, un continent immense : l'Amérique.",
    },
    {
      titre: "Le partage du monde",
      illustration: "📜",
      visuel: "Traité de Tordesillas, 1494",
      contenu: [
        "Espagnols et Portugais se disputent les nouvelles terres découvertes",
        "En 1494, le traité de Tordesillas partage le monde entre les deux royaumes",
        "Une ligne imaginaire sépare les possessions espagnoles et portugaises",
        "Le Brésil revient ainsi au Portugal, le reste de l'Amérique à l'Espagne",
      ],
      voixOff:
        "Les royaumes d'Espagne et du Portugal se disputent les terres nouvellement découvertes. Pour éviter le conflit, ils signent en mille quatre cent quatre-vingt-quatorze le traité de Tordesillas, qui trace une ligne imaginaire séparant le monde en deux zones d'influence. C'est ainsi que le Brésil reviendra au Portugal, tandis que le reste de l'Amérique reviendra à l'Espagne.",
    },
    {
      titre: "Magellan, le premier tour du monde",
      illustration: "🌐",
      visuel: "1519-1522",
      contenu: [
        "En 1519, Magellan part vers l'ouest pour atteindre l'Asie par une nouvelle route",
        "Il découvre un passage au sud de l'Amérique (détroit de Magellan)",
        "Il traverse l'océan Pacifique et meurt aux Philippines en 1521",
        "En 1522, un seul de ses navires rentre en Espagne : premier tour du monde",
      ],
      voixOff:
        "En mille cinq cent dix-neuf, le Portugais Magellan, au service de l'Espagne, part vers l'ouest pour rejoindre l'Asie par une nouvelle route. Il découvre un passage au sud du continent américain, aujourd'hui appelé le détroit de Magellan, puis traverse l'immense océan Pacifique. Magellan meurt aux Philippines en mille cinq cent vingt et un. Mais en mille cinq cent vingt-deux, un seul de ses navires parvient à rentrer en Espagne, réalisant ainsi le premier tour du monde, qui prouve que la Terre est bien ronde.",
    },
    {
      titre: "Les conquistadors en Amérique",
      illustration: "🗡️",
      visuel: "Cortés, Pizarro",
      contenu: [
        "Les conquistadors espagnols conquièrent les grands empires amérindiens",
        "Hernán Cortés soumet l'empire aztèque du Mexique entre 1519 et 1521",
        "Francisco Pizarro conquiert l'empire inca du Pérou en 1532-1533",
        "Ces conquêtes sont d'une extrême violence pour les populations amérindiennes",
      ],
      voixOff:
        "Après les premiers voyages, des conquérants espagnols, appelés conquistadors, s'emparent des grands empires d'Amérique. Hernán Cortés soumet l'empire aztèque, au Mexique, entre mille cinq cent dix-neuf et mille cinq cent vingt et un. Francisco Pizarro conquiert l'empire inca, au Pérou, en mille cinq cent trente-deux et mille cinq cent trente-trois. Ces conquêtes sont d'une extrême violence pour les populations amérindiennes.",
    },
    {
      titre: "Un choc pour les Amérindiens",
      illustration: "💔",
      visuel: "Échange colombien",
      contenu: [
        "Les Amérindiens n'ont aucune immunité contre les maladies européennes",
        "Variole et autres épidémies déciment une grande partie de la population",
        "Les Européens exploitent les mines et les terres avec un travail forcé",
        "Pour remplacer la main-d'œuvre, la traite des esclaves africains commence",
      ],
      voixOff:
        "La rencontre entre deux mondes a des conséquences dramatiques pour les Amérindiens. N'ayant aucune immunité contre les maladies venues d'Europe, comme la variole, ils sont décimés par de terribles épidémies. Les Européens exploitent aussi les mines et les terres grâce à un travail forcé imposé aux populations locales. Pour remplacer une main-d'œuvre décimée, les Européens développent alors la traite des esclaves africains vers l'Amérique.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1488 : Bartolomeu Dias franchit le cap de Bonne-Espérance",
        "1492 : Christophe Colomb découvre l'Amérique pour les Européens",
        "1498 : Vasco de Gama atteint l'Inde",
        "1519-1522 : premier tour du monde de Magellan",
      ],
      voixOff:
        "Résumons. À la fin du quinzième siècle, grâce à la caravelle, la boussole et l'astrolabe, les Européens partent explorer le monde. En mille quatre cent quatre-vingt-huit, Bartolomeu Dias franchit le cap de Bonne-Espérance. En mille quatre cent quatre-vingt-douze, Christophe Colomb découvre l'Amérique. En mille quatre cent quatre-vingt-dix-huit, Vasco de Gama atteint l'Inde. Entre mille cinq cent dix-neuf et mille cinq cent vingt-deux, l'expédition de Magellan réalise le premier tour du monde. Ces découvertes bouleversent la vision du monde des Européens, mais entraînent aussi la conquête violente des empires amérindiens. Bravo, tu connais l'essentiel de ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "À la fin du XVe et au début du XVIe siècle, les navigateurs portugais et espagnols explorent le monde à la recherche d'une nouvelle route vers l'Asie. Ils découvrent l'Amérique et réalisent le premier tour du monde, bouleversant la vision européenne de la Terre.",
    sections: [
      {
        titre: "Des progrès techniques et de nouvelles ambitions",
        points: [
          "La caravelle, navire rapide et maniable",
          "La boussole et l'astrolabe facilitent la navigation en haute mer",
          "Recherche d'une nouvelle route vers l'Asie et ses épices",
        ],
      },
      {
        titre: "Les grands voyages",
        points: [
          "1488 : Bartolomeu Dias franchit le cap de Bonne-Espérance",
          "1492 : Christophe Colomb découvre l'Amérique",
          "1498 : Vasco de Gama atteint l'Inde en contournant l'Afrique",
          "1519-1522 : premier tour du monde par l'expédition de Magellan",
        ],
      },
      {
        titre: "Le partage du monde",
        points: [
          "1494 : traité de Tordesillas entre l'Espagne et le Portugal",
          "Cortés conquiert l'empire aztèque (1519-1521)",
          "Pizarro conquiert l'empire inca (1532-1533)",
        ],
      },
      {
        titre: "Les conséquences des découvertes",
        points: [
          "Épidémies (variole) qui déciment les populations amérindiennes",
          "Exploitation des mines et des terres par un travail forcé",
          "Début de la traite des esclaves africains vers l'Amérique",
          "Échanges de plantes, d'animaux et de produits entre les deux mondes",
        ],
      },
    ],
    audio:
      "Fiche de révision : les grandes découvertes. À la fin du quinzième siècle, grâce à la caravelle, à la boussole et à l'astrolabe, les navigateurs portugais puis espagnols partent explorer le monde à la recherche d'une nouvelle route vers l'Asie. En mille quatre cent quatre-vingt-huit, Bartolomeu Dias franchit le cap de Bonne-Espérance, et en mille quatre cent quatre-vingt-dix-huit, Vasco de Gama atteint l'Inde. En mille quatre cent quatre-vingt-douze, Christophe Colomb, financé par les rois d'Espagne, découvre l'Amérique en pensant avoir atteint l'Asie. En mille quatre cent quatre-vingt-quatorze, le traité de Tordesillas partage les nouvelles terres entre l'Espagne et le Portugal. Entre mille cinq cent dix-neuf et mille cinq cent vingt-deux, l'expédition de Magellan réalise le premier tour du monde. Des conquistadors comme Cortés et Pizarro soumettent ensuite les empires aztèque et inca, dans une violence extrême. Ces découvertes ont des conséquences dramatiques pour les Amérindiens, décimés par les épidémies, et marquent le début de la traite des esclaves africains vers l'Amérique.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une caravelle ?", verso: "Un navire rapide et maniable qui permet aux Européens de s'aventurer loin des côtes à la fin du Moyen Âge." },
    { recto: "Que se passe-t-il en 1492 ?", verso: "Christophe Colomb, financé par l'Espagne, découvre l'Amérique en pensant avoir atteint l'Asie." },
    { recto: "Qui atteint l'Inde en 1498 ?", verso: "Le Portugais Vasco de Gama, en contournant l'Afrique par le cap de Bonne-Espérance." },
    { recto: "Qu'est-ce que le traité de Tordesillas (1494) ?", verso: "Un accord qui partage les terres nouvellement découvertes entre l'Espagne et le Portugal." },
    { recto: "Qui réalise le premier tour du monde (1519-1522) ?", verso: "L'expédition de Magellan ; lui-même meurt en route, mais un de ses navires rentre en Espagne." },
    { recto: "Qui sont Cortés et Pizarro ?", verso: "Des conquistadors espagnols : Cortés soumet l'empire aztèque, Pizarro l'empire inca." },
    { recto: "Pourquoi les Amérindiens sont-ils décimés ?", verso: "Ils n'ont aucune immunité contre les maladies européennes, comme la variole." },
    { recto: "Pourquoi la traite des esclaves africains se développe-t-elle vers l'Amérique ?", verso: "Pour remplacer une main-d'œuvre amérindienne décimée par les épidémies et le travail forcé." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année Christophe Colomb atteint-il l'Amérique ?",
      choix: ["1453", "1488", "1492", "1519"],
      bonneReponse: 2,
      explication: "Christophe Colomb aborde une île des Caraïbes le 12 octobre 1492.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel navire permet aux Européens d'explorer le monde à la fin du Moyen Âge ?",
      choix: ["Le drakkar", "La caravelle", "La trirème", "Le paquebot"],
      bonneReponse: 1,
      explication: "La caravelle, rapide et maniable, permet aux navigateurs de s'aventurer loin des côtes.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel navigateur atteint l'Inde en 1498 en contournant l'Afrique ?",
      reponse: "Vasco de Gama.",
      explication: "Vasco de Gama ouvre pour le Portugal une route maritime directe vers l'Inde.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel instrument aide les marins à s'orienter en haute mer ?",
      choix: ["Le télescope", "La boussole", "Le sextant moderne", "Le baromètre"],
      bonneReponse: 1,
      explication: "La boussole, avec l'astrolabe, permet aux navigateurs de s'orienter loin des côtes.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que prévoit le traité de Tordesillas (1494) ?",
      choix: [
        "Le partage des terres découvertes entre l'Espagne et le Portugal",
        "La fin de l'esclavage",
        "L'indépendance des colonies américaines",
        "L'alliance entre Colomb et Magellan",
      ],
      bonneReponse: 0,
      explication: "Le traité de Tordesillas trace une ligne imaginaire séparant les possessions espagnoles et portugaises.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi peut-on dire que l'expédition de Magellan (1519-1522) est une découverte majeure ?",
      reponse: "Parce qu'elle réalise le premier tour du monde, prouvant que la Terre est ronde et qu'un seul océan mondial relie tous les continents.",
      explication: "Magellan meurt en route, mais un seul de ses navires termine le voyage en 1522, prouvant la sphéricité de la Terre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qui est Hernán Cortés et que fait-il entre 1519 et 1521 ?",
      reponse: "C'est un conquistador espagnol qui conquiert l'empire aztèque, au Mexique, entre 1519 et 1521.",
      explication: "La conquête de Cortés met fin à l'empire aztèque et impose la domination espagnole au Mexique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel empire Francisco Pizarro conquiert-il entre 1532 et 1533 ?",
      choix: ["L'empire aztèque", "L'empire inca", "L'empire ottoman", "L'empire maya"],
      bonneReponse: 1,
      explication: "Pizarro conquiert l'empire inca, situé dans les Andes, au Pérou actuel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi les grandes découvertes ont des conséquences dramatiques pour les Amérindiens.",
      reponse:
        "Les Amérindiens n'ont aucune immunité contre les maladies européennes, comme la variole, qui déciment une grande partie de la population. Ils subissent aussi la violence des conquêtes et le travail forcé imposé par les Européens dans les mines et sur les terres.",
      explication: "Cette question doit relier le choc microbien, la violence militaire et l'exploitation économique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique le lien entre les grandes découvertes et le début de la traite des esclaves africains.",
      reponse:
        "La population amérindienne étant décimée par les épidémies et le travail forcé, les Européens cherchent une nouvelle main-d'œuvre pour exploiter les mines et les plantations d'Amérique : ils développent alors la traite des esclaves africains, déportés de force vers l'Amérique.",
      explication: "Ce lien montre comment les découvertes déclenchent un vaste système d'exploitation à l'échelle mondiale.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi Christophe Colomb pense-t-il avoir atteint l'Asie en 1492 ?",
      choix: [
        "Parce qu'il avait déjà une carte précise de l'Amérique",
        "Parce qu'il ignore l'existence du continent américain et sous-estime la taille de la Terre",
        "Parce qu'il suit un plan portugais",
        "Parce qu'il rencontre Vasco de Gama en chemin",
      ],
      bonneReponse: 1,
      explication: "Colomb ne connaît pas l'existence de l'Amérique et pense que la Terre est plus petite qu'elle ne l'est réellement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Cite deux progrès techniques qui rendent possibles les grandes découvertes.",
      reponse: "La caravelle, navire rapide et maniable, et des instruments de navigation comme la boussole ou l'astrolabe.",
      explication: "Ces progrès techniques permettent aux navigateurs de s'aventurer loin des côtes connues.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel pays finance le voyage de Christophe Colomb en 1492 ?",
      choix: ["Le Portugal", "L'Espagne", "L'Angleterre", "La France"],
      bonneReponse: 1,
      explication: "Colomb est financé par les rois d'Espagne, Isabelle de Castille et Ferdinand d'Aragon.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel cap Bartolomeu Dias franchit-il en 1488 ?",
      reponse: "Le cap de Bonne-Espérance, à la pointe sud de l'Afrique.",
      explication: "Ce passage ouvre la voie à Vasco de Gama pour atteindre l'Inde dix ans plus tard.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelles années marquent le début et la fin du premier tour du monde ?",
      reponse: "1519 (départ de Magellan) et 1522 (retour d'un des navires en Espagne).",
      explication: "Magellan meurt en 1521 aux Philippines ; c'est son second, Elcano, qui termine le voyage.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel empire amérindien Cortés conquiert-il ?",
      choix: ["L'empire inca", "L'empire aztèque", "L'empire maya", "L'empire ottoman"],
      bonneReponse: 1,
      explication: "Cortés conquiert l'empire aztèque du Mexique entre 1519 et 1521.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en une phrase pourquoi les grandes découvertes transforment la vision du monde des Européens.",
      reponse: "Elles révèlent l'existence d'un continent inconnu, l'Amérique, et prouvent, avec le tour du monde de Magellan, que la Terre est ronde et qu'un océan mondial relie tous les continents.",
      explication: "Cette réflexion synthétique doit relier découverte de l'Amérique et premier tour du monde.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les grandes découvertes",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel navigateur atteint l'Amérique en 1492 ?",
          choix: ["Vasco de Gama", "Christophe Colomb", "Magellan", "Bartolomeu Dias"],
          bonneReponse: 1,
          explication: "Christophe Colomb, financé par l'Espagne, aborde une île des Caraïbes le 12 octobre 1492.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite deux instruments qui facilitent la navigation en haute mer à la fin du Moyen Âge.",
          reponse: "La boussole et l'astrolabe.",
          explication: "Ces instruments permettent aux navigateurs de s'orienter loin des côtes.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel traité partage le monde entre l'Espagne et le Portugal en 1494 ?",
          choix: ["Le traité de Verdun", "Le traité de Tordesillas", "Le traité de Westphalie", "Le traité de Rome"],
          bonneReponse: 1,
          explication: "Le traité de Tordesillas fixe une ligne de partage entre les possessions espagnoles et portugaises.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi le voyage de Magellan (1519-1522) est considéré comme le premier tour du monde.",
          reponse:
            "Parti vers l'ouest en 1519, l'un des navires de son expédition rentre en Espagne en 1522 après avoir traversé l'Atlantique, contourné l'Amérique du Sud, traversé le Pacifique et l'océan Indien : il a ainsi fait le tour de la Terre.",
          explication: "Magellan meurt en chemin, aux Philippines, mais son expédition achève le voyage.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelles sont les conséquences des grandes découvertes pour les populations amérindiennes ?",
          reponse:
            "Elles subissent des épidémies dévastatrices (comme la variole), la conquête violente de leurs empires par les conquistadors, et un travail forcé dans les mines et sur les terres.",
          explication: "Le choc de la rencontre entre les deux mondes est catastrophique pour les Amérindiens.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : présente les grandes étapes des découvertes européennes entre 1488 et 1522 et leurs conséquences (une quinzaine de lignes).",
          reponse:
            "Introduction : à la fin du quinzième siècle, les Européens explorent le monde grâce à des progrès techniques. Première partie : les Portugais ouvrent la route de l'Asie, avec Bartolomeu Dias au cap de Bonne-Espérance en 1488 puis Vasco de Gama en Inde en 1498, tandis que Christophe Colomb découvre l'Amérique pour l'Espagne en 1492. Deuxième partie : le monde est partagé par le traité de Tordesillas en 1494, puis l'expédition de Magellan réalise le premier tour du monde entre 1519 et 1522. Troisième partie : ces découvertes ont des conséquences dramatiques pour les Amérindiens, décimés par les épidémies et soumis par les conquistadors comme Cortés et Pizarro. Conclusion : elles transforment durablement la vision du monde et l'économie mondiale, avec le début de la traite des esclaves africains.",
          explication:
            "Un bon développement construit comporte une introduction, plusieurs parties avec des dates précises (1488, 1492, 1494, 1498, 1519-1522) et une conclusion.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les grandes découvertes",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel pays est pionnier dans l'exploration des côtes africaines ?",
          choix: ["L'Espagne", "Le Portugal", "L'Angleterre", "La France"],
          bonneReponse: 1,
          explication: "Le Portugal, sous l'impulsion d'Henri le Navigateur, explore les côtes africaines dès le XVe siècle.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Où et quand meurt Magellan ?",
          reponse: "Aux Philippines, en 1521.",
          explication: "Magellan meurt lors d'un combat aux Philippines avant la fin de son expédition.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel empire Pizarro conquiert-il ?",
          choix: ["L'empire aztèque", "L'empire inca", "L'empire maya", "L'empire portugais"],
          bonneReponse: 1,
          explication: "Pizarro conquiert l'empire inca, dans les Andes, entre 1532 et 1533.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi peut-on dire que le traité de Tordesillas (1494) illustre une vision européenne du monde ?",
          reponse:
            "Parce que l'Espagne et le Portugal se partagent des terres découvertes sans consulter les populations qui y vivent déjà, considérant qu'ils ont le droit de se les approprier.",
          explication: "Cette question invite à un regard critique sur la colonisation naissante.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que l'échange colombien ?",
          reponse:
            "L'ensemble des échanges de plantes, d'animaux, de produits et de maladies entre l'Amérique et l'Europe après 1492 (par exemple maïs et pomme de terre vers l'Europe, blé et chevaux vers l'Amérique).",
          explication: "Cet échange transforme durablement l'alimentation et l'agriculture des deux continents.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique pourquoi les grandes découvertes marquent le début d'une nouvelle relation, souvent violente, entre l'Europe et le reste du monde (une quinzaine de lignes).",
          reponse:
            "Introduction : les découvertes européennes de la fin du XVe et du début du XVIe siècle ouvrent une ère nouvelle de contacts mondiaux. Première partie : les Européens explorent et cartographient le monde, motivés par le commerce des épices et la recherche de nouvelles routes. Deuxième partie : ces contacts se transforment vite en domination : les conquistadors soumettent par la force les empires aztèque et inca, imposent leur religion et exploitent les ressources locales par le travail forcé. Troisième partie : les conséquences sont dramatiques pour les Amérindiens, décimés par les épidémies, et entraînent le développement de la traite des esclaves africains pour remplacer la main-d'œuvre. Conclusion : les grandes découvertes ouvrent ainsi la voie à la colonisation européenne du monde.",
          explication:
            "On attend un développement organisé qui relie exploration, conquête violente et exploitation, avec du vocabulaire précis (conquistador, travail forcé, traite).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 1488, Bartolomeu Dias franchit le cap de Bonne-Espérance.",
    "Repère brevet : 1492, Christophe Colomb découvre l'Amérique pour les Européens.",
    "Repère brevet : 1498, Vasco de Gama atteint l'Inde.",
    "Repère brevet : 1519-1522, premier tour du monde de l'expédition de Magellan.",
    "1494 : traité de Tordesillas, partage du monde entre l'Espagne et le Portugal.",
    "Conséquences : conquête violente des empires amérindiens, épidémies, début de la traite des esclaves africains.",
  ],
},
{
  slug: "islam-medieval",
  titre: "La naissance de l'islam et ses empires",
  matiere: "histoire-geo",
  niveau: "5eme",
  description:
    "Découvrir la naissance de l'islam en Arabie au VIIe siècle, son expansion fulgurante et la brillante civilisation des califats omeyyade et abbasside.",
  objectifs: [
    "Connaître Mahomet, la révélation du Coran et l'Hégire de 622",
    "Connaître les cinq piliers de l'islam",
    "Comprendre l'expansion rapide du monde musulman après la mort de Mahomet",
    "Connaître les califats omeyyade (Damas) et abbasside (Bagdad)",
    "Savoir que le monde musulman médiéval a connu un grand rayonnement scientifique et culturel",
  ],
  slides: [
    {
      titre: "L'Arabie avant l'islam",
      illustration: "🏜️",
      visuel: "Arabie, VIe siècle",
      contenu: [
        "Au VIe siècle, l'Arabie est peuplée de tribus nomades et sédentaires",
        "La Mecque est une ville-carrefour du commerce caravanier",
        "Les Arabes pratiquent des religions polythéistes",
        "La Kaaba, à La Mecque, est déjà un lieu de pèlerinage",
      ],
      voixOff:
        "Avant le septième siècle, l'Arabie est un vaste désert habité par des tribus, certaines nomades, d'autres installées dans des villes. La Mecque est une cité prospère, étape importante des caravanes de commerce. La plupart des Arabes sont alors polythéistes. La Kaaba, un sanctuaire au centre de La Mecque, est déjà un lieu de pèlerinage très fréquenté.",
    },
    {
      titre: "Mahomet et la révélation",
      illustration: "📖",
      visuel: "610 : première révélation",
      contenu: [
        "Mahomet naît vers 570 à La Mecque",
        "Vers 610, il reçoit les premières révélations de l'ange Gabriel",
        "Ces révélations forment le Coran, livre sacré des musulmans",
        "Mahomet prêche l'existence d'un dieu unique, Allah",
      ],
      voixOff:
        "Mahomet naît vers cinq cent soixante-dix à La Mecque. Vers l'an six cent dix, il reçoit, selon la tradition musulmane, les premières révélations de l'ange Gabriel. Ces messages, transmis pendant plus de vingt ans, seront rassemblés dans le Coran, le livre sacré de l'islam. Mahomet annonce l'existence d'un dieu unique, Allah, et devient le prophète de cette nouvelle religion.",
    },
    {
      titre: "L'Hégire, an 1 du calendrier musulman",
      illustration: "🐫",
      visuel: "622 : l'Hégire",
      contenu: [
        "Rejeté par les notables de La Mecque, Mahomet quitte la ville en 622",
        "Il s'installe à Médine avec ses premiers fidèles : c'est l'Hégire",
        "Cette date marque le début du calendrier musulman",
        "Repère à retenir : 622, l'Hégire",
      ],
      voixOff:
        "À La Mecque, les prédications de Mahomet dérangent les notables. En six cent vingt-deux, il quitte la ville avec ses fidèles pour s'installer à Médine : c'est l'Hégire, qui signifie l'émigration. Cet événement est si important qu'il marque le début du calendrier musulman. Retiens bien cette date : six cent vingt-deux, l'Hégire.",
    },
    {
      titre: "Les cinq piliers de l'islam",
      illustration: "🕌",
      visuel: "5 piliers",
      contenu: [
        "La chahada : profession de foi (« il n'y a de dieu qu'Allah »)",
        "La prière, cinq fois par jour, tournée vers La Mecque",
        "L'aumône aux pauvres et le jeûne du ramadan",
        "Le pèlerinage à La Mecque au moins une fois dans sa vie",
      ],
      voixOff:
        "L'islam repose sur cinq obligations appelées les cinq piliers. La chahada, la profession de foi. La prière, cinq fois par jour, tournée vers La Mecque. L'aumône, qui aide les plus pauvres, et le jeûne du mois de ramadan. Enfin, le pèlerinage à La Mecque, que tout musulman qui le peut doit accomplir une fois dans sa vie.",
    },
    {
      titre: "L'expansion fulgurante du monde musulman",
      illustration: "🗺️",
      visuel: "VIIe-VIIIe siècle",
      contenu: [
        "Après la mort de Mahomet en 632, des califes lui succèdent",
        "Les conquêtes s'étendent très vite : Perse, Égypte, Afrique du Nord",
        "En 711, les musulmans conquièrent une grande partie de l'Espagne",
        "En un siècle, un immense empire s'étend de l'Espagne à l'Inde",
      ],
      voixOff:
        "Mahomet meurt en six cent trente-deux. Des califes, ses successeurs, prennent alors la tête de la communauté musulmane et lancent de grandes conquêtes. En quelques décennies, les armées musulmanes soumettent la Perse, l'Égypte et l'Afrique du Nord. En sept cent onze, elles franchissent le détroit de Gibraltar et conquièrent une grande partie de l'Espagne. En un siècle à peine, un immense empire s'étend de l'Espagne jusqu'à l'Inde.",
    },
    {
      titre: "Le califat omeyyade puis abbasside",
      illustration: "🕋",
      visuel: "Damas → Bagdad",
      contenu: [
        "De 661 à 750, la dynastie omeyyade règne depuis Damas",
        "En 750, la dynastie abbasside prend le pouvoir",
        "Les Abbassides fondent Bagdad en 762, nouvelle capitale",
        "Bagdad devient une ville immense et brillante",
      ],
      voixOff:
        "De six cent soixante et un à sept cent cinquante, la dynastie des Omeyyades dirige l'empire musulman depuis Damas. En sept cent cinquante, une nouvelle famille, les Abbassides, prend le pouvoir. Ils fondent une nouvelle capitale, Bagdad, en sept cent soixante-deux. Cette ville devient rapidement l'une des plus grandes et des plus brillantes du monde.",
    },
    {
      titre: "Bagdad, capitale des sciences",
      illustration: "🔬",
      visuel: "Maison de la Sagesse",
      contenu: [
        "À Bagdad, les califes créent la Maison de la Sagesse",
        "Savants et traducteurs y étudient les textes grecs, perses et indiens",
        "Al-Khwarizmi invente l'algèbre et diffuse les chiffres dits « arabes »",
        "Progrès en médecine, astronomie et architecture",
      ],
      voixOff:
        "Bagdad devient un immense centre du savoir. Les califes y font construire la Maison de la Sagesse, où des savants traduisent et étudient les textes grecs, perses et indiens. Le mathématicien al-Khwarizmi y invente l'algèbre et fait connaître les chiffres que l'on appellera plus tard les chiffres arabes. Cette civilisation brillante progresse aussi en médecine, en astronomie et en architecture, avec ses mosquées ornées de calligraphies.",
    },
    {
      titre: "Une société organisée et tolérante",
      illustration: "⚖️",
      visuel: "Calife, cadi, dhimmis",
      contenu: [
        "Le calife dirige l'empire, aidé par des vizirs (ministres)",
        "Les cadis sont les juges qui appliquent le droit musulman",
        "Juifs et chrétiens, appelés dhimmis, sont protégés mais paient un impôt spécial",
        "Le commerce prospère grâce aux grandes routes caravanières",
      ],
      voixOff:
        "Le calife dirige l'empire musulman avec l'aide de vizirs, ses ministres. Les cadis sont les juges qui rendent la justice selon le droit musulman. Les juifs et les chrétiens, appelés dhimmis, ont le droit de pratiquer leur religion en échange du paiement d'un impôt spécial. Grâce à sa position entre l'Europe, l'Afrique et l'Asie, le monde musulman profite aussi d'un commerce très actif sur les routes caravanières.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "610 : premières révélations à Mahomet ; 622 : l'Hégire, an 1 du calendrier musulman",
        "Cinq piliers de l'islam : chahada, prière, aumône, jeûne, pèlerinage",
        "Expansion rapide au VIIe-VIIIe siècle : Omeyyades (Damas) puis Abbassides (Bagdad, 762)",
        "Bagdad, brillant centre scientifique et culturel du monde médiéval",
      ],
      voixOff:
        "Résumons. En six cent dix, Mahomet reçoit les premières révélations qui formeront le Coran. En six cent vingt-deux, l'Hégire marque le début du calendrier musulman. L'islam repose sur cinq piliers essentiels. Après la mort de Mahomet, l'empire musulman s'étend très vite, dirigé d'abord par les Omeyyades depuis Damas, puis par les Abbassides depuis Bagdad à partir de sept cent soixante-deux. Bagdad devient alors un extraordinaire centre de sciences et de savoirs. Bravo, tu connais l'essentiel de ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "Au VIIe siècle, une nouvelle religion, l'islam, naît en Arabie avec le prophète Mahomet. En quelques décennies, elle donne naissance à un immense empire, brillant sur le plan scientifique et culturel.",
    sections: [
      {
        titre: "La naissance de l'islam",
        points: [
          "Mahomet naît vers 570 à La Mecque",
          "Vers 610, il reçoit les révélations rassemblées dans le Coran",
          "622 : l'Hégire, départ pour Médine, an 1 du calendrier musulman",
          "Mahomet meurt en 632, après avoir unifié l'Arabie autour de l'islam",
        ],
      },
      {
        titre: "Les cinq piliers de l'islam",
        points: [
          "La chahada (profession de foi)",
          "La prière (cinq fois par jour)",
          "L'aumône aux pauvres",
          "Le jeûne du ramadan",
          "Le pèlerinage à La Mecque",
        ],
      },
      {
        titre: "Un empire en pleine expansion",
        points: [
          "Après 632, les califes conquièrent la Perse, l'Égypte, l'Afrique du Nord",
          "711 : conquête d'une grande partie de l'Espagne",
          "661-750 : dynastie omeyyade, capitale Damas",
          "750 : les Abbassides prennent le pouvoir ; 762 : fondation de Bagdad",
        ],
      },
      {
        titre: "Une brillante civilisation",
        points: [
          "Bagdad : la Maison de la Sagesse, traduction des textes grecs et perses",
          "Al-Khwarizmi invente l'algèbre, diffusion des chiffres « arabes »",
          "Progrès en médecine, astronomie, architecture (mosquées, calligraphie)",
          "Société organisée : calife, vizirs, cadis ; juifs et chrétiens protégés (dhimmis)",
        ],
      },
    ],
    audio:
      "Fiche de révision : la naissance de l'islam et ses empires. Au septième siècle, Mahomet, né vers cinq cent soixante-dix à La Mecque, reçoit à partir de six cent dix des révélations rassemblées dans le Coran. En six cent vingt-deux, l'Hégire, son départ pour Médine, marque le début du calendrier musulman. L'islam repose sur cinq piliers : la profession de foi, la prière, l'aumône, le jeûne du ramadan et le pèlerinage à La Mecque. Après la mort de Mahomet en six cent trente-deux, les califes lancent de grandes conquêtes : en un siècle, l'empire musulman s'étend de l'Espagne, conquise en sept cent onze, jusqu'à l'Inde. Les Omeyyades dirigent l'empire depuis Damas jusqu'en sept cent cinquante, puis les Abbassides depuis leur nouvelle capitale, Bagdad, fondée en sept cent soixante-deux. Bagdad devient un centre scientifique brillant, avec la Maison de la Sagesse et des savants comme al-Khwarizmi, inventeur de l'algèbre.",
  },
  memoCards: [
    { recto: "Qui est Mahomet ?", verso: "Le prophète de l'islam, né vers 570 à La Mecque, qui reçoit les révélations du Coran à partir de 610." },
    { recto: "Qu'est-ce que l'Hégire ?", verso: "Le départ de Mahomet de La Mecque vers Médine en 622 ; c'est l'an 1 du calendrier musulman." },
    { recto: "Quels sont les cinq piliers de l'islam ?", verso: "La chahada, la prière, l'aumône, le jeûne du ramadan et le pèlerinage à La Mecque." },
    { recto: "Qu'est-ce que le Coran ?", verso: "Le livre sacré des musulmans, rassemblant les révélations reçues par Mahomet." },
    { recto: "Qui sont les Omeyyades ?", verso: "La première grande dynastie de califes (661-750), qui gouverne depuis Damas." },
    { recto: "Qui sont les Abbassides ?", verso: "La dynastie qui succède aux Omeyyades en 750 et fonde Bagdad en 762." },
    { recto: "Qu'est-ce que la Maison de la Sagesse ?", verso: "Un centre savant de Bagdad où l'on traduit et étudie les textes grecs, perses et indiens." },
    { recto: "Qui sont les dhimmis ?", verso: "Les juifs et les chrétiens, protégés dans l'empire musulman en échange d'un impôt spécial." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Où naît Mahomet ?",
      choix: ["Bagdad", "Médine", "La Mecque", "Damas"],
      bonneReponse: 2,
      explication: "Mahomet naît vers 570 à La Mecque, ville d'Arabie où se trouve la Kaaba.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que marque l'Hégire, en 622 ?",
      choix: [
        "La mort de Mahomet",
        "Le début du calendrier musulman",
        "La fondation de Bagdad",
        "La conquête de l'Espagne",
      ],
      bonneReponse: 1,
      explication: "L'Hégire, le départ de Mahomet vers Médine en 622, marque le début du calendrier musulman.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment s'appelle le livre sacré des musulmans ?",
      reponse: "Le Coran.",
      explication: "Le Coran rassemble les révélations reçues par Mahomet à partir de 610.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de piliers compte l'islam ?",
      choix: ["Trois", "Quatre", "Cinq", "Sept"],
      bonneReponse: 2,
      explication: "L'islam repose sur cinq piliers : chahada, prière, aumône, jeûne et pèlerinage.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "En quelle année les musulmans conquièrent-ils une grande partie de l'Espagne ?",
      choix: ["622", "632", "711", "762"],
      bonneReponse: 2,
      explication: "En 711, les armées musulmanes franchissent le détroit de Gibraltar et conquièrent une grande partie de l'Espagne.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle dynastie dirige l'empire musulman depuis Damas, de 661 à 750 ?",
      reponse: "La dynastie omeyyade.",
      explication: "Les Omeyyades gouvernent l'empire musulman depuis Damas jusqu'à leur remplacement par les Abbassides en 750.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle ville les Abbassides fondent-ils en 762 ?",
      reponse: "Bagdad, leur nouvelle capitale.",
      explication: "Bagdad devient rapidement une ville immense, riche et brillante sur le plan scientifique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui sont les dhimmis dans l'empire musulman ?",
      choix: [
        "Les juges qui appliquent le droit musulman",
        "Les juifs et les chrétiens protégés en échange d'un impôt",
        "Les savants de la Maison de la Sagesse",
        "Les ministres du calife",
      ],
      bonneReponse: 1,
      explication: "Les dhimmis sont les juifs et les chrétiens, autorisés à pratiquer leur religion en échange du paiement d'un impôt spécial.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi Bagdad est considérée comme un grand centre scientifique au Moyen Âge.",
      reponse:
        "Les califes abbassides y font construire la Maison de la Sagesse, où des savants traduisent et étudient les textes grecs, perses et indiens. Des savants comme al-Khwarizmi y font progresser les mathématiques, la médecine et l'astronomie.",
      explication: "Bagdad rassemble des savoirs venus de plusieurs civilisations et les fait progresser, notamment grâce à al-Khwarizmi, inventeur de l'algèbre.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Qu'invente le savant al-Khwarizmi ?",
      choix: ["La boussole", "L'algèbre", "L'imprimerie", "L'astrolabe"],
      bonneReponse: 1,
      explication: "Al-Khwarizmi, savant de Bagdad, invente l'algèbre et diffuse les chiffres dits « arabes ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Comment l'empire musulman a-t-il pu s'étendre aussi rapidement entre 632 et 750 ?",
      reponse:
        "Après la mort de Mahomet, les califes qui lui succèdent organisent de grandes conquêtes militaires. En un siècle, ils soumettent la Perse, l'Égypte, l'Afrique du Nord puis une grande partie de l'Espagne, profitant de l'affaiblissement des puissances voisines.",
      explication: "Les conquêtes rapides s'expliquent par l'organisation militaire des califes et la faiblesse des empires perse et byzantin voisins.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Cite deux apports scientifiques ou culturels du monde musulman médiéval.",
      reponse:
        "L'invention de l'algèbre par al-Khwarizmi et la diffusion des chiffres « arabes » ; la traduction et la conservation des textes grecs, perses et indiens à la Maison de la Sagesse de Bagdad.",
      explication: "Le monde musulman médiéval a transmis et enrichi de nombreux savoirs, notamment en mathématiques, médecine et astronomie.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année Mahomet reçoit-il les premières révélations ?",
      choix: ["570", "610", "622", "632"],
      bonneReponse: 1,
      explication: "Vers 610, Mahomet reçoit, selon la tradition musulmane, les premières révélations de l'ange Gabriel.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux des cinq piliers de l'islam.",
      reponse: "Par exemple : la prière et le jeûne du ramadan (ou la chahada, l'aumône, le pèlerinage).",
      explication: "Les cinq piliers sont la chahada, la prière, l'aumône, le jeûne du ramadan et le pèlerinage à La Mecque.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle capitale les Abbassides fondent-ils en 762 ?",
      reponse: "Bagdad.",
      explication: "Bagdad devient la capitale du califat abbasside et un grand centre scientifique et culturel.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel est le rôle du calife dans l'empire musulman ?",
      choix: ["Il est juge local", "Il dirige l'empire", "Il traduit les textes grecs", "Il collecte l'impôt des dhimmis"],
      bonneReponse: 1,
      explication: "Le calife est le chef politique et religieux de l'empire musulman, aidé par des vizirs.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que le monde musulman médiéval est une civilisation brillante ?",
      reponse:
        "Parce qu'il connaît de grands progrès scientifiques (mathématiques, médecine, astronomie), un commerce florissant et une architecture remarquable, tout en conservant et transmettant les savoirs des civilisations grecque, perse et indienne.",
      explication: "Cette question demande de relier expansion territoriale, tolérance religieuse et rayonnement scientifique.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La naissance de l'islam et ses empires",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel livre rassemble les révélations reçues par Mahomet ?",
          choix: ["La Torah", "Le Coran", "La Bible", "Le Talmud"],
          bonneReponse: 1,
          explication: "Le Coran est le livre sacré de l'islam, rassemblant les révélations de Mahomet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "En quelle année a lieu l'Hégire, et que marque-t-elle ?",
          reponse: "En 622 ; elle marque le début du calendrier musulman.",
          explication: "L'Hégire est le départ de Mahomet de La Mecque vers Médine.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle dynastie succède aux Omeyyades en 750 ?",
          choix: ["Les Abbassides", "Les Carolingiens", "Les Rachidun", "Les Ottomans"],
          bonneReponse: 0,
          explication: "En 750, les Abbassides prennent le pouvoir et fondent Bagdad en 762.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que la Maison de la Sagesse de Bagdad ?",
          reponse:
            "Un centre savant où des traducteurs et des savants étudient et traduisent les textes grecs, perses et indiens, faisant progresser les sciences.",
          explication: "La Maison de la Sagesse illustre le rayonnement intellectuel du califat abbasside.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux territoires conquis par les musulmans entre 632 et 750.",
          reponse: "Par exemple : la Perse et l'Égypte (ou l'Afrique du Nord, l'Espagne).",
          explication: "En un siècle, l'empire musulman s'étend de l'Espagne à l'Inde.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre comment l'islam est né en Arabie au VIIe siècle et comment il a donné naissance à un vaste empire (une quinzaine de lignes, avec des exemples précis).",
          reponse:
            "Introduction : au septième siècle, une nouvelle religion naît en Arabie. Première partie : Mahomet, né vers 570 à La Mecque, reçoit à partir de 610 des révélations rassemblées dans le Coran ; en 622, l'Hégire marque son départ vers Médine et le début du calendrier musulman ; l'islam repose sur cinq piliers. Deuxième partie : après sa mort en 632, les califes lancent de grandes conquêtes ; en un siècle, l'empire s'étend de l'Espagne, conquise en 711, jusqu'à l'Inde, dirigé d'abord par les Omeyyades depuis Damas puis par les Abbassides depuis Bagdad, fondée en 762. Conclusion : cet empire devient aussi un brillant centre scientifique et culturel.",
          explication:
            "Un bon développement construit comporte une introduction, deux parties organisées avec des dates précises (610, 622, 632, 711, 762) et une conclusion.",
        },
      ],
    },
    {
      titre: "Examen 2 — La naissance de l'islam et ses empires",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle ville est le lieu de pèlerinage des musulmans ?",
          choix: ["Médine", "Bagdad", "La Mecque", "Damas"],
          bonneReponse: 2,
          explication: "La Mecque, où se trouve la Kaaba, est le lieu du pèlerinage, un des cinq piliers de l'islam.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Comment s'appelle le mois de jeûne des musulmans ?",
          reponse: "Le ramadan.",
          explication: "Le jeûne du ramadan est l'un des cinq piliers de l'islam.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel savant invente l'algèbre à Bagdad ?",
          choix: ["Avicenne", "Al-Khwarizmi", "Ibn Battuta", "Averroès"],
          bonneReponse: 1,
          explication: "Al-Khwarizmi, mathématicien de Bagdad, invente l'algèbre et diffuse les chiffres dits « arabes ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qui sont les dhimmis et quel est leur statut dans l'empire musulman ?",
          reponse:
            "Ce sont les juifs et les chrétiens : ils sont autorisés à pratiquer leur religion mais doivent payer un impôt spécial.",
          explication: "Le statut de dhimmi illustre une certaine tolérance religieuse dans l'empire musulman médiéval.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle ville devient la capitale du califat abbasside et en quelle année ?",
          reponse: "Bagdad, fondée en 762.",
          explication: "Bagdad remplace Damas comme capitale et devient un immense centre urbain et savant.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique en quoi la civilisation musulmane médiévale a été un grand foyer de sciences et de savoirs.",
          reponse:
            "Introduction : à partir du huitième siècle, le monde musulman devient un centre intellectuel majeur. Première partie : à Bagdad, la Maison de la Sagesse rassemble des savants qui traduisent les textes grecs, perses et indiens. Deuxième partie : ces travaux permettent de grandes avancées, comme l'invention de l'algèbre par al-Khwarizmi, les progrès en médecine et en astronomie, et une architecture raffinée avec les mosquées. Conclusion : ce savoir circule ensuite vers l'Europe, notamment via l'Espagne musulmane, et influence durablement les sciences occidentales.",
          explication:
            "On attend un développement organisé avec des exemples précis (Maison de la Sagesse, al-Khwarizmi) et une réflexion sur la transmission des savoirs.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 610, premières révélations reçues par Mahomet, rassemblées dans le Coran.",
    "Repère brevet : 622, l'Hégire, an 1 du calendrier musulman.",
    "Les cinq piliers de l'islam : chahada, prière, aumône, jeûne du ramadan, pèlerinage à La Mecque.",
    "Expansion rapide après 632 : Omeyyades (Damas, 661-750) puis Abbassides (Bagdad, fondée en 762).",
    "Bagdad, brillant centre scientifique : Maison de la Sagesse, al-Khwarizmi et l'algèbre.",
    "Société tolérante : calife, vizirs, cadis ; juifs et chrétiens protégés (dhimmis).",
  ],
},
{
  slug: "ressources-eau-energie",
  titre: "L'eau et l'énergie : des ressources à ménager",
  matiere: "histoire-geo",
  niveau: "5eme",
  description:
    "Comprendre que l'eau et l'énergie sont des ressources essentielles mais inégalement réparties et menacées par la croissance des besoins, et découvrir les solutions pour les gérer durablement.",
  objectifs: [
    "Comprendre pourquoi l'eau et l'énergie sont des ressources vitales mais limitées",
    "Savoir que ces ressources sont inégalement réparties dans le monde",
    "Connaître les tensions et conflits liés à l'accès à l'eau",
    "Distinguer énergies fossiles et énergies renouvelables",
    "Comprendre les enjeux d'une gestion durable de l'eau et de l'énergie",
  ],
  slides: [
    {
      titre: "L'eau, une ressource vitale mais inégale",
      illustration: "💧",
      visuel: "Eau douce",
      contenu: [
        "L'eau douce ne représente qu'une petite partie de l'eau sur Terre",
        "Elle est répartie très inégalement selon les régions du monde",
        "Certaines régions arides connaissent un fort stress hydrique",
        "D'autres régions, plus humides, disposent de ressources abondantes",
      ],
      voixOff:
        "L'eau douce, celle que l'on peut boire ou utiliser pour l'agriculture, ne représente qu'une toute petite partie de l'eau présente sur Terre. Elle est répartie de façon très inégale selon les régions du monde. Certaines zones arides, comme le Sahara ou le Moyen-Orient, connaissent un fort stress hydrique, c'est-à-dire un manque d'eau disponible. D'autres régions, plus humides, comme l'Amazonie ou l'Europe du Nord, disposent au contraire de ressources en eau abondantes.",
    },
    {
      titre: "À quoi sert l'eau ?",
      illustration: "🚿",
      visuel: "Agriculture / Industrie / Usage domestique",
      contenu: [
        "L'agriculture utilise environ 70 % de l'eau douce prélevée dans le monde",
        "L'industrie consomme aussi de grandes quantités d'eau",
        "L'usage domestique (boire, cuisiner, se laver) reste indispensable",
        "Les besoins en eau augmentent avec la croissance démographique",
      ],
      voixOff:
        "L'eau douce sert à des usages très variés. L'agriculture, notamment l'irrigation des cultures, utilise environ soixante-dix pour cent de l'eau douce prélevée dans le monde. L'industrie en consomme aussi de grandes quantités pour fabriquer de nombreux produits. Enfin, l'usage domestique, pour boire, cuisiner ou se laver, reste indispensable à chaque être humain. Avec la croissance de la population mondiale, les besoins en eau ne cessent d'augmenter.",
    },
    {
      titre: "Des tensions autour de l'eau",
      illustration: "🌊",
      visuel: "Fleuves transfrontaliers",
      contenu: [
        "De nombreux fleuves traversent plusieurs pays (Nil, Mékong, Jourdain)",
        "Le partage de l'eau entre ces pays peut créer des tensions",
        "La construction de barrages en amont inquiète les pays situés en aval",
        "L'accès à l'eau potable reste inégal, surtout dans les pays pauvres",
      ],
      voixOff:
        "De nombreux grands fleuves, comme le Nil, le Mékong ou le Jourdain, traversent plusieurs pays avant de rejoindre la mer. Le partage de leurs eaux peut alors créer des tensions entre les États concernés. Par exemple, la construction d'un grand barrage en amont d'un fleuve peut inquiéter les pays situés en aval, qui craignent de manquer d'eau. Par ailleurs, l'accès à une eau potable de qualité reste très inégal dans le monde, en particulier dans certains pays pauvres.",
    },
    {
      titre: "Les énergies fossiles",
      illustration: "🛢️",
      visuel: "Pétrole, gaz, charbon",
      contenu: [
        "Le pétrole, le gaz et le charbon sont des énergies fossiles",
        "Elles fournissent encore la majorité de l'énergie consommée dans le monde",
        "Elles sont épuisables et inégalement réparties sur la planète",
        "Leur usage rejette du CO2 et aggrave le réchauffement climatique",
      ],
      voixOff:
        "Le pétrole, le gaz naturel et le charbon sont appelés énergies fossiles. Elles fournissent encore aujourd'hui la majorité de l'énergie consommée dans le monde, pour les transports, l'industrie ou le chauffage. Ces ressources sont épuisables et se trouvent surtout dans certaines régions du globe, comme le Moyen-Orient pour le pétrole. Leur utilisation rejette du dioxyde de carbone dans l'atmosphère, ce qui aggrave le réchauffement climatique.",
    },
    {
      titre: "Les énergies renouvelables",
      illustration: "☀️",
      visuel: "Soleil, vent, eau",
      contenu: [
        "Le solaire, l'éolien et l'hydraulique sont des énergies renouvelables",
        "Elles se renouvellent naturellement et rejettent peu de CO2",
        "Leur part augmente dans de nombreux pays du monde",
        "Elles dépendent cependant des conditions naturelles locales (soleil, vent, relief)",
      ],
      voixOff:
        "Face aux limites des énergies fossiles, les énergies renouvelables se développent. L'énergie solaire, l'énergie éolienne et l'énergie hydraulique, produite par les barrages, se renouvellent naturellement et rejettent peu de dioxyde de carbone. Leur part dans la production d'électricité augmente dans de nombreux pays du monde. Elles dépendent toutefois des conditions naturelles locales, comme l'ensoleillement, le vent ou la présence de cours d'eau.",
    },
    {
      titre: "Une répartition inégale de l'énergie",
      illustration: "⚡",
      visuel: "Accès à l'électricité",
      contenu: [
        "Certaines régions, comme le Moyen-Orient, sont riches en pétrole et en gaz",
        "D'autres régions manquent de ressources énergétiques propres",
        "Des centaines de millions de personnes n'ont toujours pas accès à l'électricité",
        "Cette inégalité freine le développement de certains pays",
      ],
      voixOff:
        "Les ressources énergétiques sont réparties très inégalement dans le monde. Certaines régions, comme le Moyen-Orient, possèdent d'immenses réserves de pétrole et de gaz. D'autres régions, notamment en Afrique subsaharienne, manquent de ressources énergétiques et de moyens pour les exploiter. Aujourd'hui encore, des centaines de millions de personnes dans le monde n'ont pas accès à l'électricité, ce qui freine leur développement économique et social.",
    },
    {
      titre: "Vers une gestion durable des ressources",
      illustration: "♻️",
      visuel: "Sobriété + transition",
      contenu: [
        "Il faut économiser l'eau et l'énergie au quotidien",
        "Le recyclage de l'eau et l'amélioration de l'irrigation limitent le gaspillage",
        "La transition énergétique développe les énergies renouvelables",
        "Des accords internationaux, comme l'accord de Paris (2015), fixent des objectifs communs",
      ],
      voixOff:
        "Pour préserver ces ressources essentielles, plusieurs solutions existent. Il est possible d'économiser l'eau et l'énergie au quotidien, de recycler l'eau ou d'améliorer les techniques d'irrigation pour limiter le gaspillage. La transition énergétique vise à développer davantage les énergies renouvelables, moins polluantes. Enfin, des accords internationaux, comme l'accord de Paris signé en deux mille quinze, fixent des objectifs communs pour lutter contre le réchauffement climatique et mieux gérer les ressources de la planète.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "L'eau douce est une ressource vitale, inégalement répartie et parfois source de tensions",
        "L'agriculture utilise environ 70 % de l'eau douce prélevée dans le monde",
        "Les énergies fossiles (pétrole, gaz, charbon) sont épuisables et polluantes",
        "Les énergies renouvelables se développent pour une gestion plus durable",
      ],
      voixOff:
        "Résumons. L'eau douce est une ressource vitale, mais inégalement répartie dans le monde, ce qui peut créer des tensions entre les pays qui partagent un même fleuve. L'agriculture utilise l'essentiel de l'eau douce prélevée sur la planète. Concernant l'énergie, le monde dépend encore largement des énergies fossiles, comme le pétrole, le gaz et le charbon, qui sont épuisables et polluantes. Pour préserver l'avenir, les énergies renouvelables se développent et des accords internationaux, comme l'accord de Paris, encouragent une gestion plus durable de ces ressources précieuses. Bravo, tu connais l'essentiel de ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "L'eau et l'énergie sont des ressources indispensables à la vie humaine et au développement, mais elles sont inégalement réparties sur la planète et parfois menacées par une surexploitation. Il est donc nécessaire de les gérer durablement.",
    sections: [
      {
        titre: "L'eau, une ressource inégale",
        points: [
          "L'eau douce ne représente qu'une petite partie de l'eau présente sur Terre",
          "Répartition inégale : régions en stress hydrique / régions bien arrosées",
          "L'agriculture utilise environ 70 % de l'eau douce prélevée dans le monde",
          "Des tensions existent autour des fleuves transfrontaliers (Nil, Mékong, Jourdain)",
        ],
      },
      {
        titre: "Les énergies fossiles",
        points: [
          "Pétrole, gaz, charbon : encore la majorité de l'énergie mondiale",
          "Ressources épuisables et inégalement réparties (Moyen-Orient pour le pétrole)",
          "Leur usage aggrave le réchauffement climatique (rejets de CO2)",
        ],
      },
      {
        titre: "Les énergies renouvelables",
        points: [
          "Solaire, éolien, hydraulique : ressources qui se renouvellent naturellement",
          "Elles rejettent peu de CO2, mais dépendent des conditions naturelles locales",
          "Leur part augmente dans le cadre de la transition énergétique",
        ],
      },
      {
        titre: "Vers une gestion durable",
        points: [
          "Économiser l'eau et l'énergie, recycler, améliorer l'irrigation",
          "Développer les énergies renouvelables",
          "Accords internationaux : accord de Paris (2015) sur le climat",
          "Des centaines de millions de personnes n'ont toujours pas accès à l'électricité",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'eau et l'énergie, des ressources à ménager. L'eau douce, essentielle à la vie, ne représente qu'une petite partie de l'eau présente sur Terre et elle est répartie de façon très inégale, entre régions en stress hydrique et régions bien arrosées. L'agriculture utilise à elle seule environ soixante-dix pour cent de l'eau douce prélevée dans le monde, et le partage des grands fleuves transfrontaliers, comme le Nil, le Mékong ou le Jourdain, peut créer des tensions entre pays. Concernant l'énergie, le monde dépend encore largement des énergies fossiles, pétrole, gaz et charbon, des ressources épuisables et inégalement réparties, dont l'usage aggrave le réchauffement climatique. Face à ces limites, les énergies renouvelables, solaire, éolien et hydraulique, se développent dans le cadre de la transition énergétique. Pour préserver ces ressources, il faut économiser l'eau et l'énergie, recycler, et s'appuyer sur des accords internationaux comme l'accord de Paris signé en deux mille quinze.",
  },
  memoCards: [
    { recto: "Quelle part de l'eau douce mondiale est utilisée par l'agriculture ?", verso: "Environ 70 % de l'eau douce prélevée dans le monde." },
    { recto: "Qu'est-ce que le stress hydrique ?", verso: "Une situation où la demande en eau dépasse les ressources disponibles dans une région." },
    { recto: "Cite trois énergies fossiles.", verso: "Le pétrole, le gaz naturel et le charbon." },
    { recto: "Cite trois énergies renouvelables.", verso: "L'énergie solaire, l'énergie éolienne et l'énergie hydraulique." },
    { recto: "Pourquoi les énergies fossiles posent-elles problème ?", verso: "Elles sont épuisables, inégalement réparties, et leur usage aggrave le réchauffement climatique." },
    { recto: "Qu'est-ce que la transition énergétique ?", verso: "Le passage progressif des énergies fossiles vers des énergies renouvelables, moins polluantes." },
    { recto: "Cite un exemple de fleuve transfrontalier source de tensions.", verso: "Le Nil (traverse plusieurs pays d'Afrique de l'Est et du Nord-Est)." },
    { recto: "Que fixe l'accord de Paris de 2015 ?", verso: "Des objectifs internationaux communs pour lutter contre le réchauffement climatique." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel secteur utilise environ 70 % de l'eau douce prélevée dans le monde ?",
      choix: ["L'industrie", "L'agriculture", "L'usage domestique", "Le tourisme"],
      bonneReponse: 1,
      explication: "L'agriculture, notamment l'irrigation, est le premier secteur consommateur d'eau douce dans le monde.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Lesquelles de ces énergies sont des énergies fossiles ?",
      choix: ["Solaire, éolien, hydraulique", "Pétrole, gaz, charbon", "Nucléaire, géothermie, marée", "Bois, biomasse, biogaz"],
      bonneReponse: 1,
      explication: "Le pétrole, le gaz et le charbon sont des énergies fossiles, issues de la transformation de matière organique ancienne.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'une énergie renouvelable ? Donne un exemple.",
      reponse: "Une énergie qui se renouvelle naturellement et ne s'épuise pas, comme l'énergie solaire.",
      explication: "Le solaire, l'éolien et l'hydraulique sont des exemples d'énergies renouvelables.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce que le stress hydrique ?",
      choix: [
        "Un excès d'eau dans une région",
        "Un manque d'eau disponible par rapport aux besoins",
        "Une pollution de l'eau",
        "Un accord international sur l'eau",
      ],
      bonneReponse: 1,
      explication: "Le stress hydrique désigne une situation où la demande en eau dépasse les ressources disponibles.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pourquoi l'usage des énergies fossiles aggrave-t-il le réchauffement climatique ?",
      choix: [
        "Parce qu'elles sont trop chères",
        "Parce que leur combustion rejette du dioxyde de carbone dans l'atmosphère",
        "Parce qu'elles sont renouvelables",
        "Parce qu'elles ne sont pas assez utilisées",
      ],
      bonneReponse: 1,
      explication: "La combustion du pétrole, du gaz et du charbon libère du CO2, un gaz à effet de serre qui réchauffe l'atmosphère.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi le partage des fleuves transfrontaliers peut-il créer des tensions entre pays ?",
      reponse: "Parce que plusieurs pays dépendent d'un même fleuve pour leur eau, et que la construction d'un barrage ou une forte utilisation en amont peut réduire la quantité d'eau disponible pour les pays situés en aval.",
      explication: "Le Nil, le Mékong ou le Jourdain sont des exemples de fleuves partagés par plusieurs États.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux solutions pour économiser l'eau au quotidien.",
      reponse: "Par exemple : réduire le gaspillage domestique (douches plus courtes, réparation des fuites) et améliorer les techniques d'irrigation agricole (goutte-à-goutte).",
      explication: "Ces solutions permettent de préserver une ressource limitée face à des besoins croissants.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel accord international, signé en 2015, fixe des objectifs pour lutter contre le réchauffement climatique ?",
      choix: ["Le traité de Tordesillas", "L'accord de Paris", "Le protocole de Kyoto de 2015", "L'accord de Bagdad"],
      bonneReponse: 1,
      explication: "L'accord de Paris, signé en 2015, engage de nombreux pays à limiter le réchauffement climatique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi les énergies fossiles restent majoritaires malgré leurs inconvénients.",
      reponse:
        "Elles sont pour l'instant moins coûteuses à exploiter dans de nombreux pays, les infrastructures existantes (centrales, véhicules) sont conçues pour elles, et la transition vers les énergies renouvelables demande du temps et des investissements importants.",
      explication: "Cette question invite à réfléchir aux freins économiques et techniques de la transition énergétique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en quoi l'accès à l'eau et à l'énergie reste inégal dans le monde.",
      reponse:
        "Certaines régions, riches en ressources (pétrole au Moyen-Orient, eau abondante en Europe du Nord), ont un accès facile à l'eau et à l'énergie, tandis que d'autres régions, notamment en Afrique, manquent de ressources ou d'infrastructures, et des centaines de millions de personnes n'ont pas accès à l'électricité ou à l'eau potable.",
      explication: "Cette inégalité freine le développement économique et social de nombreux pays.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Qu'est-ce que la transition énergétique ?",
      choix: [
        "Le passage progressif des énergies fossiles vers des énergies renouvelables",
        "Le partage de l'eau entre plusieurs pays",
        "La construction de nouveaux barrages hydroélectriques uniquement",
        "L'augmentation de la consommation de pétrole",
      ],
      bonneReponse: 0,
      explication: "La transition énergétique désigne le passage progressif d'une consommation dominée par les énergies fossiles vers des énergies renouvelables.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Propose deux mesures qui permettraient une gestion plus durable des ressources en eau et en énergie à l'échelle mondiale.",
      reponse:
        "Par exemple : développer davantage les énergies renouvelables (solaire, éolien) pour réduire la dépendance aux énergies fossiles, et mettre en place des accords internationaux sur le partage équitable de l'eau des grands fleuves transfrontaliers.",
      explication: "Ces mesures combinent solutions techniques (énergies renouvelables) et solutions politiques (coopération internationale).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle proportion de l'eau douce mondiale l'agriculture utilise-t-elle environ ?",
      choix: ["30 %", "50 %", "70 %", "90 %"],
      bonneReponse: 2,
      explication: "L'agriculture utilise environ 70 % de l'eau douce prélevée dans le monde, principalement pour l'irrigation.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois énergies renouvelables.",
      reponse: "L'énergie solaire, l'énergie éolienne et l'énergie hydraulique.",
      explication: "Ces énergies se renouvellent naturellement et rejettent peu de CO2.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi dit-on que les énergies fossiles sont épuisables ?",
      reponse: "Parce qu'elles se sont formées sur des millions d'années et que leurs réserves diminuent à mesure qu'on les consomme, sans pouvoir se reconstituer à l'échelle humaine.",
      explication: "Contrairement aux énergies renouvelables, les stocks de pétrole, gaz et charbon ne se renouvellent pas rapidement.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel accord international de 2015 vise à limiter le réchauffement climatique ?",
      choix: ["L'accord de Paris", "Le traité de Verdun", "Le traité de Tordesillas", "L'accord de Bagdad"],
      bonneReponse: 0,
      explication: "L'accord de Paris engage de nombreux pays dans la lutte contre le réchauffement climatique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en une phrase pourquoi l'eau et l'énergie doivent être « ménagées », c'est-à-dire gérées avec précaution.",
      reponse: "Parce que ce sont des ressources limitées, inégalement réparties et de plus en plus sollicitées par une population et des besoins croissants, ce qui nécessite de les économiser et de développer des solutions durables.",
      explication: "Cette synthèse reprend l'idée centrale du chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'eau et l'énergie : des ressources à ménager",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel secteur consomme le plus d'eau douce dans le monde ?",
          choix: ["L'industrie", "L'agriculture", "Les loisirs", "Le transport"],
          bonneReponse: 1,
          explication: "L'agriculture, avec l'irrigation, consomme environ 70 % de l'eau douce prélevée dans le monde.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite deux énergies fossiles.",
          reponse: "Par exemple : le pétrole et le charbon (ou le gaz naturel).",
          explication: "Ces énergies sont issues de la transformation de matière organique très ancienne.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pourquoi certains grands fleuves sont-ils sources de tensions entre États ?",
          choix: [
            "Parce qu'ils sont pollués par les usines",
            "Parce qu'ils traversent plusieurs pays qui doivent se partager leurs eaux",
            "Parce qu'ils ne contiennent pas d'eau douce",
            "Parce qu'ils sont uniquement utilisés pour le tourisme",
          ],
          bonneReponse: 1,
          explication: "Des fleuves comme le Nil ou le Mékong traversent plusieurs pays, ce qui peut créer des conflits d'usage.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi les énergies renouvelables sont considérées comme plus durables que les énergies fossiles.",
          reponse: "Parce qu'elles se renouvellent naturellement (soleil, vent, eau) et rejettent beaucoup moins de CO2, contrairement aux énergies fossiles qui sont épuisables et polluantes.",
          explication: "Cette différence explique le développement de la transition énergétique dans de nombreux pays.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi des centaines de millions de personnes n'ont-elles toujours pas accès à l'électricité ?",
          reponse: "Parce que certaines régions, notamment en Afrique subsaharienne, manquent d'infrastructures énergétiques et d'investissements suffisants pour distribuer l'électricité à l'ensemble de la population.",
          explication: "Cette inégalité d'accès freine le développement économique et social de ces régions.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que l'eau et l'énergie sont des ressources essentielles mais inégalement réparties et menacées, et présente des solutions pour les gérer durablement (une quinzaine de lignes).",
          reponse:
            "Introduction : l'eau et l'énergie sont indispensables à la vie et au développement, mais elles sont limitées. Première partie : l'eau douce est inégalement répartie, avec des régions en stress hydrique et des tensions autour de fleuves transfrontaliers, tandis que l'agriculture en consomme la majeure partie. Deuxième partie : l'énergie mondiale dépend encore largement des énergies fossiles, épuisables, inégalement réparties et responsables du réchauffement climatique, alors que certaines régions manquent encore d'accès à l'électricité. Troisième partie : des solutions existent, comme économiser l'eau, développer les énergies renouvelables et coopérer à l'échelle internationale, par exemple avec l'accord de Paris de 2015. Conclusion : une gestion durable de ces ressources est indispensable pour l'avenir de la planète.",
          explication:
            "Un bon développement construit comporte une introduction, plusieurs parties organisées avec du vocabulaire précis (stress hydrique, énergies fossiles/renouvelables, transition énergétique) et une conclusion.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'eau et l'énergie : des ressources à ménager",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelles énergies sont dites renouvelables ?",
          choix: ["Pétrole, gaz, charbon", "Solaire, éolien, hydraulique", "Uranium et charbon", "Bois fossile uniquement"],
          bonneReponse: 1,
          explication: "Le solaire, l'éolien et l'hydraulique se renouvellent naturellement, contrairement aux énergies fossiles.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la transition énergétique ?",
          reponse: "Le passage progressif d'une consommation dominée par les énergies fossiles vers davantage d'énergies renouvelables.",
          explication: "Cette transition vise à limiter la pollution et le réchauffement climatique.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle région du monde possède d'importantes réserves de pétrole ?",
          choix: ["L'Europe du Nord", "Le Moyen-Orient", "L'Antarctique", "L'Amérique du Nord uniquement"],
          bonneReponse: 1,
          explication: "Le Moyen-Orient concentre une grande partie des réserves mondiales de pétrole.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le lien entre l'usage des énergies fossiles et le réchauffement climatique.",
          reponse: "La combustion du pétrole, du gaz et du charbon libère du dioxyde de carbone (CO2), un gaz à effet de serre qui contribue au réchauffement de l'atmosphère terrestre.",
          explication: "C'est pourquoi la réduction de l'usage des énergies fossiles est un enjeu climatique majeur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux façons de mieux gérer l'eau à l'échelle d'un pays.",
          reponse: "Par exemple : améliorer les réseaux de distribution pour limiter les fuites, et développer des techniques d'irrigation plus économes comme le goutte-à-goutte.",
          explication: "Ces mesures permettent de réduire le gaspillage d'une ressource limitée.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique pourquoi la gestion de l'eau et de l'énergie est un enjeu mondial qui nécessite une coopération internationale (une quinzaine de lignes).",
          reponse:
            "Introduction : l'eau et l'énergie sont des ressources partagées à l'échelle de la planète, ce qui rend leur gestion difficile sans coopération. Première partie : de nombreux fleuves traversent plusieurs pays, ce qui nécessite des accords pour éviter les conflits liés au partage de l'eau. Deuxième partie : le réchauffement climatique, causé notamment par l'usage des énergies fossiles, touche tous les pays, quelle que soit leur responsabilité, ce qui rend nécessaire une action commune. Troisième partie : des accords internationaux, comme l'accord de Paris de 2015, tentent de fixer des objectifs communs pour réduire les émissions de CO2 et développer les énergies renouvelables. Conclusion : sans coopération internationale, il sera difficile de garantir un accès durable à l'eau et à l'énergie pour tous les habitants de la planète.",
          explication:
            "On attend un développement organisé qui relie ressources partagées, réchauffement climatique mondial et coopération internationale.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'eau douce, ressource vitale, est inégalement répartie ; l'agriculture en utilise environ 70 %.",
    "Des tensions existent autour des fleuves transfrontaliers (Nil, Mékong, Jourdain).",
    "Énergies fossiles (pétrole, gaz, charbon) : épuisables, inégalement réparties, responsables du réchauffement climatique.",
    "Énergies renouvelables (solaire, éolien, hydraulique) : se renouvellent naturellement, moins polluantes.",
    "Repère : accord de Paris (2015), coopération internationale pour le climat.",
    "Gestion durable : économiser, recycler, développer la transition énergétique.",
  ],
}
];

export default chapitres;
