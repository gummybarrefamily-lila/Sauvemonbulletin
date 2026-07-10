import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "seismes-volcans",
  titre: "Séismes et volcans : la tectonique",
  matiere: "svt",
  niveau: "4eme",
  description:
    "Comprendre l'origine des séismes et des éruptions volcaniques, connaître les plaques lithosphériques et leurs mouvements (dorsales, subduction), la répartition mondiale des risques et les moyens de prévention.",
  objectifs: [
    "Expliquer l'origine d'un séisme : foyer, épicentre et ondes sismiques",
    "Distinguer les deux grands types d'éruptions volcaniques (effusive et explosive)",
    "Savoir que la surface de la Terre est découpée en plaques lithosphériques mobiles",
    "Comprendre le rôle des dorsales et des zones de subduction",
    "Relier la répartition des séismes et volcans aux limites de plaques et connaître la prévention",
  ],
  slides: [
    {
      titre: "La Terre bouge",
      illustration: "🌍",
      visuel: "séismes + volcans = Terre active",
      contenu: [
        "La surface de la Terre n'est pas immobile",
        "Séismes et éruptions volcaniques en sont les manifestations",
        "Ces phénomènes libèrent l'énergie interne de la planète",
        "Ils ne se produisent pas n'importe où",
      ],
      voixOff:
        "La Terre peut sembler solide et immobile, mais sa surface est en réalité très active. Les séismes qui font trembler le sol et les volcans qui entrent en éruption en sont les preuves. Ces phénomènes libèrent l'énergie du globe. Et, comme nous allons le voir, ils ne se produisent pas au hasard.",
    },
    {
      titre: "Qu'est-ce qu'un séisme ?",
      illustration: "💥",
      visuel: "roche qui casse → tremblement",
      contenu: [
        "Les roches en profondeur subissent d'énormes forces",
        "Quand elles cassent brutalement, l'énergie est libérée",
        "Cette rupture provoque un tremblement de terre",
        "Le lieu de la rupture est le foyer (en profondeur)",
      ],
      voixOff:
        "Un séisme, c'est un tremblement de terre. En profondeur, les roches subissent d'énormes forces qui les déforment lentement. Quand elles finissent par se casser brutalement, elles libèrent une grande quantité d'énergie. L'endroit précis où la roche se rompt, sous terre, s'appelle le foyer du séisme.",
    },
    {
      titre: "Foyer, épicentre et ondes",
      illustration: "📡",
      visuel: "foyer (profond) → épicentre (surface)",
      contenu: [
        "Foyer : lieu de la rupture, en profondeur",
        "Épicentre : point à la surface, juste au-dessus du foyer",
        "Ondes sismiques : vibrations qui se propagent dans toutes les directions",
        "Les dégâts sont souvent les plus forts près de l'épicentre",
      ],
      voixOff:
        "Retiens bien trois mots. Le foyer est le lieu de la rupture, en profondeur. L'épicentre est le point situé à la surface, juste au-dessus du foyer. Depuis le foyer, des ondes sismiques, comme des vibrations, se propagent dans toutes les directions et font trembler le sol. C'est près de l'épicentre que les dégâts sont généralement les plus importants.",
    },
    {
      titre: "Mesurer un séisme",
      illustration: "📊",
      visuel: "sismomètre → magnitude",
      contenu: [
        "Un sismomètre enregistre les ondes sismiques",
        "La magnitude mesure l'énergie libérée par le séisme",
        "Plus la magnitude est élevée, plus le séisme est puissant",
        "On étudie les enregistrements pour comprendre les séismes",
      ],
      voixOff:
        "Pour étudier les séismes, les scientifiques utilisent un appareil appelé sismomètre, qui enregistre les ondes sismiques. À partir de ces enregistrements, on calcule la magnitude, une valeur qui mesure l'énergie libérée. Plus la magnitude est grande, plus le séisme est puissant.",
    },
    {
      titre: "Les volcans effusifs",
      illustration: "🌋",
      visuel: "lave fluide → coulées",
      contenu: [
        "La lave est fluide et s'écoule facilement",
        "Éruption calme : coulées de lave",
        "Les gaz s'échappent sans grande violence",
        "Exemple : les volcans d'Hawaï, le Piton de la Fournaise",
      ],
      voixOff:
        "Il existe deux grands types d'éruptions. Les éruptions effusives sont plutôt calmes : la lave est fluide et s'écoule en longues coulées le long du volcan. Les gaz s'échappent facilement, sans grande violence. Les volcans d'Hawaï ou le Piton de la Fournaise, à la Réunion, en sont de bons exemples.",
    },
    {
      titre: "Les volcans explosifs",
      illustration: "☁️",
      visuel: "lave visqueuse → explosion",
      contenu: [
        "La lave est visqueuse (épaisse) : elle bloque les gaz",
        "La pression monte puis explose violemment",
        "Projections de cendres, blocs et nuées ardentes",
        "Exemple : la montagne Pelée, le Vésuve",
      ],
      voixOff:
        "Les éruptions explosives sont bien plus dangereuses. La lave y est visqueuse, épaisse, et elle emprisonne les gaz. La pression monte jusqu'à une explosion violente qui projette cendres, blocs de roche et nuées ardentes. La montagne Pelée, en Martinique, ou le Vésuve, en Italie, sont des volcans explosifs célèbres.",
    },
    {
      titre: "Les plaques lithosphériques",
      illustration: "🧩",
      visuel: "surface = puzzle de plaques",
      contenu: [
        "La couche externe rigide de la Terre est la lithosphère",
        "Elle est découpée en grands morceaux : les plaques",
        "Ces plaques se déplacent lentement (quelques cm/an)",
        "Elles reposent sur une couche plus chaude et déformable",
      ],
      voixOff:
        "Comment expliquer ces phénomènes ? La couche externe et rigide de la Terre, appelée lithosphère, est découpée en grands morceaux : les plaques lithosphériques. Comme les pièces d'un puzzle, elles se déplacent très lentement, de quelques centimètres par an, en glissant sur une couche plus chaude et déformable située en dessous.",
    },
    {
      titre: "Dorsales et subduction",
      illustration: "↔️",
      visuel: "dorsale (écartement) / subduction (plongement)",
      contenu: [
        "Aux dorsales océaniques, deux plaques s'écartent",
        "De la nouvelle lithosphère se forme : la plaque s'agrandit",
        "En zone de subduction, une plaque plonge sous une autre",
        "Ces limites concentrent séismes et volcans",
      ],
      voixOff:
        "Aux frontières des plaques, deux mouvements importants existent. Aux dorsales, situées au fond des océans, deux plaques s'écartent et de la nouvelle lithosphère se forme. Dans les zones de subduction, au contraire, une plaque plonge sous une autre. C'est le long de ces limites que se concentrent la plupart des séismes et des volcans.",
    },
    {
      titre: "Répartition et prévention des risques",
      illustration: "🗺️",
      visuel: "risques = limites de plaques",
      contenu: [
        "Séismes et volcans se répartissent surtout aux limites de plaques",
        "Ex : « ceinture de feu » autour de l'océan Pacifique",
        "Prévention : constructions parasismiques, surveillance des volcans",
        "Alerte, plans d'évacuation et éducation des habitants",
      ],
      voixOff:
        "Sur une carte du monde, séismes et volcans dessinent des lignes : ils se situent surtout aux limites des plaques, comme la fameuse ceinture de feu autour du Pacifique. On ne peut pas empêcher ces phénomènes, mais on peut réduire les risques : construire des bâtiments parasismiques, surveiller les volcans, préparer des plans d'évacuation et informer les habitants.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Séisme : rupture au foyer, ondes jusqu'à l'épicentre",
        "Deux éruptions : effusive (lave fluide) / explosive (lave visqueuse)",
        "Plaques lithosphériques mobiles : dorsales et subduction",
        "Risques concentrés aux limites de plaques ; prévention possible",
      ],
      voixOff:
        "Résumons. Un séisme naît de la rupture des roches au foyer, d'où partent des ondes qui atteignent l'épicentre en surface. Il existe deux types d'éruptions : effusive, avec une lave fluide, et explosive, avec une lave visqueuse. Tout s'explique par les plaques lithosphériques mobiles, qui s'écartent aux dorsales et plongent en subduction. Les risques se concentrent aux limites de plaques, mais la prévention permet de sauver des vies. Bravo, tu maîtrises la tectonique !",
    },
  ],
  fiche: {
    intro:
      "La surface de la Terre est découpée en plaques lithosphériques rigides et mobiles. Leurs mouvements expliquent les séismes et le volcanisme, qui se concentrent aux limites de plaques. Connaître ces phénomènes permet de mieux prévenir les risques pour les populations.",
    sections: [
      {
        titre: "Les séismes",
        points: [
          "Un séisme provient de la rupture brutale de roches en profondeur",
          "Foyer : lieu de la rupture ; épicentre : point en surface au-dessus du foyer",
          "Des ondes sismiques se propagent depuis le foyer et font trembler le sol",
          "La magnitude, mesurée au sismomètre, indique l'énergie libérée",
        ],
      },
      {
        titre: "Les deux types d'éruptions",
        points: [
          "Effusive : lave fluide, coulées, éruption relativement calme (ex. Piton de la Fournaise)",
          "Explosive : lave visqueuse, gaz bloqués, explosions, nuées ardentes (ex. montagne Pelée)",
          "C'est la viscosité de la lave qui fait la différence",
        ],
      },
      {
        titre: "Les plaques lithosphériques",
        points: [
          "La lithosphère rigide est découpée en plaques mobiles",
          "Elles se déplacent lentement (quelques centimètres par an)",
          "Elles glissent sur une couche chaude et déformable située dessous",
        ],
      },
      {
        titre: "Dorsales et subduction",
        points: [
          "Dorsales : deux plaques s'écartent, de la lithosphère nouvelle se forme",
          "Subduction : une plaque plonge sous une autre",
          "Ces limites concentrent séismes et volcans",
        ],
      },
      {
        titre: "Risques et prévention",
        points: [
          "Séismes et volcans se répartissent surtout aux limites de plaques (ex. ceinture de feu du Pacifique)",
          "Prévention : constructions parasismiques, surveillance des volcans, alerte",
          "Plans d'évacuation et éducation des habitants réduisent les dégâts",
        ],
      },
    ],
    audio:
      "Fiche de révision : séismes et volcans. Un séisme provient de la rupture brutale de roches en profondeur ; le lieu de la rupture est le foyer, et le point situé juste au-dessus, en surface, est l'épicentre. Des ondes sismiques partent du foyer et font trembler le sol ; on mesure l'énergie libérée par la magnitude. Le volcanisme prend deux formes : les éruptions effusives, avec une lave fluide qui s'écoule en coulées, et les éruptions explosives, avec une lave visqueuse qui emprisonne les gaz et provoque des explosions. Tout s'explique par la lithosphère, découpée en plaques rigides qui se déplacent de quelques centimètres par an : elles s'écartent aux dorsales océaniques et plongent dans les zones de subduction. C'est pourquoi séismes et volcans se concentrent aux limites de plaques, comme la ceinture de feu du Pacifique. On ne peut pas les empêcher, mais la prévention, avec des constructions parasismiques, la surveillance et les plans d'évacuation, permet de sauver des vies.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un séisme ?", verso: "Un tremblement de terre dû à la rupture brutale de roches en profondeur." },
    { recto: "Différence foyer / épicentre ?", verso: "Le foyer est le lieu de la rupture (en profondeur) ; l'épicentre est le point en surface juste au-dessus." },
    { recto: "Qu'est-ce qu'une onde sismique ?", verso: "Une vibration qui part du foyer et se propage dans le sol, provoquant les tremblements." },
    { recto: "Que mesure la magnitude ?", verso: "L'énergie libérée par un séisme ; elle est déterminée à partir d'un sismomètre." },
    { recto: "Éruption effusive ?", verso: "Lave fluide qui s'écoule en coulées ; éruption plutôt calme (ex. Piton de la Fournaise)." },
    { recto: "Éruption explosive ?", verso: "Lave visqueuse qui bloque les gaz ; explosions et nuées ardentes (ex. montagne Pelée)." },
    { recto: "Qu'est-ce qu'une plaque lithosphérique ?", verso: "Un grand morceau rigide de la surface de la Terre (lithosphère) qui se déplace lentement." },
    { recto: "Que se passe-t-il à une dorsale ?", verso: "Deux plaques s'écartent et de la nouvelle lithosphère se forme." },
    { recto: "Qu'est-ce qu'une zone de subduction ?", verso: "Une zone où une plaque plonge sous une autre." },
    { recto: "Où se concentrent séismes et volcans ?", verso: "Aux limites des plaques (ex. ceinture de feu autour du Pacifique)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on le lieu, en profondeur, où se produit la rupture d'un séisme ?",
      choix: ["L'épicentre", "Le foyer", "La dorsale", "Le cratère"],
      bonneReponse: 1,
      explication: "Le foyer est le lieu de la rupture, en profondeur ; l'épicentre est le point situé à la surface, au-dessus.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel type d'éruption produit une lave fluide qui s'écoule en coulées ?",
      choix: ["Explosive", "Effusive", "Sismique", "Parasismique"],
      bonneReponse: 1,
      explication: "L'éruption effusive se caractérise par une lave fluide et des coulées, comme au Piton de la Fournaise.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que se propage depuis le foyer d'un séisme jusqu'à faire trembler le sol ?",
      reponse: "Des ondes sismiques.",
      explication: "Les ondes sismiques partent du foyer et se propagent dans toutes les directions.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La surface rigide de la Terre est découpée en :",
      choix: ["Continents uniquement", "Plaques lithosphériques", "Cratères", "Océans seulement"],
      bonneReponse: 1,
      explication: "La lithosphère rigide est découpée en plaques mobiles.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi une éruption explosive est plus dangereuse qu'une éruption effusive.",
      reponse: "Sa lave visqueuse emprisonne les gaz : la pression monte puis explose violemment, projetant cendres, blocs et nuées ardentes, alors que la lave fluide effusive s'écoule sans grande violence.",
      explication: "C'est la viscosité de la lave qui empêche les gaz de s'échapper et provoque l'explosion.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "À quelle vitesse se déplacent les plaques lithosphériques ? Est-ce visible dans une vie humaine ?",
      reponse: "Elles se déplacent de quelques centimètres par an, ce qui est trop lent pour être visible directement à l'œil au quotidien.",
      explication: "Le mouvement est lent mais continu ; sur des millions d'années, il déplace les continents.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "À une dorsale océanique, les plaques :",
      choix: ["Plongent l'une sous l'autre", "S'écartent", "Restent parfaitement immobiles", "Fusionnent en une seule roche"],
      bonneReponse: 1,
      explication: "Aux dorsales, deux plaques s'écartent et de la nouvelle lithosphère se forme.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'une zone de subduction ?",
      reponse: "Une zone où une plaque lithosphérique plonge sous une autre plaque.",
      explication: "La subduction est une limite de plaques où l'une s'enfonce sous l'autre ; elle est associée à de nombreux séismes et volcans.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "On observe qu'une carte des séismes et une carte des volcans se ressemblent beaucoup. Comment l'expliquer ?",
      reponse: "Les deux phénomènes se concentrent aux limites des plaques lithosphériques : là où les plaques bougent (écartement aux dorsales, plongement en subduction), il y a à la fois des séismes et du volcanisme.",
      explication: "C'est le mouvement des plaques qui est la cause commune des séismes et des volcans.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Cite trois mesures de prévention pour réduire les risques liés aux séismes dans une région exposée.",
      reponse: "Construire des bâtiments parasismiques, mettre en place des systèmes d'alerte et des plans d'évacuation, informer et entraîner la population (exercices).",
      explication: "On ne peut pas empêcher un séisme, mais on peut limiter ses conséquences par la prévention.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "La « ceinture de feu » qui entoure l'océan Pacifique correspond à :",
      choix: [
        "Une zone sans aucun risque",
        "Une région où se concentrent séismes et volcans, le long des limites de plaques",
        "Une dorsale unique",
        "Un désert volcanique éteint",
      ],
      bonneReponse: 1,
      explication: "La ceinture de feu suit les limites de plaques autour du Pacifique, où séismes et volcans sont très nombreux.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un volcan est surveillé en permanence par des capteurs. En quoi cela aide-t-il à protéger les habitants ?",
      reponse: "La surveillance détecte les signes d'une éruption à venir (petits séismes, gonflement du sol, gaz) et permet de déclencher une alerte et d'évacuer la population à temps.",
      explication: "La prévision permet d'anticiper l'éruption et de sauver des vies grâce à l'évacuation.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'épicentre d'un séisme est situé :",
      choix: ["En profondeur, au foyer", "À la surface, au-dessus du foyer", "Dans un volcan", "Au centre de la Terre"],
      bonneReponse: 1,
      explication: "L'épicentre est le point de la surface situé juste au-dessus du foyer.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les deux types d'éruptions volcaniques.",
      reponse: "Les éruptions effusives et les éruptions explosives.",
      explication: "Effusive : lave fluide ; explosive : lave visqueuse.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que se forme-t-il au niveau d'une dorsale océanique ?",
      reponse: "De la nouvelle lithosphère, car les deux plaques s'écartent.",
      explication: "L'écartement des plaques crée de la lithosphère neuve.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Séismes et volcans se situent surtout :",
      choix: ["Au hasard sur toute la Terre", "Aux limites des plaques", "Uniquement dans les déserts", "Aux pôles"],
      bonneReponse: 1,
      explication: "Ils se concentrent le long des limites de plaques lithosphériques.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de mesure parasismique.",
      reponse: "Construire des bâtiments renforcés capables de résister aux secousses (constructions parasismiques).",
      explication: "Les constructions parasismiques limitent les effondrements et protègent les habitants.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Séismes et volcans : la tectonique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un séisme est provoqué par :",
          choix: [
            "La pluie",
            "La rupture brutale de roches en profondeur",
            "La chaleur du Soleil",
            "Le vent",
          ],
          bonneReponse: 1,
          explication: "Le séisme naît de la rupture brutale des roches qui libère de l'énergie.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel appareil enregistre les ondes sismiques ?",
          reponse: "Le sismomètre.",
          explication: "Le sismomètre enregistre les ondes et permet de calculer la magnitude.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qui différencie la lave d'une éruption effusive de celle d'une éruption explosive.",
          reponse: "La lave effusive est fluide et s'écoule facilement ; la lave explosive est visqueuse (épaisse) et emprisonne les gaz, ce qui provoque des explosions.",
          explication: "La viscosité de la lave détermine le type d'éruption.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans une zone de subduction :",
          choix: [
            "Deux plaques s'écartent",
            "Une plaque plonge sous une autre",
            "Les plaques restent immobiles",
            "Il n'y a jamais de séisme",
          ],
          bonneReponse: 1,
          explication: "En subduction, une plaque s'enfonce sous une autre plaque.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi le Japon subit de nombreux séismes et possède beaucoup de volcans.",
          reponse: "Le Japon est situé sur une limite de plaques (zone de subduction, dans la ceinture de feu du Pacifique) : le mouvement des plaques y provoque de nombreux séismes et un volcanisme important.",
          explication: "La position sur une limite de plaques active explique la forte activité sismique et volcanique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Une ville est construite près d'une limite de plaques. Propose deux actions pour réduire les risques.",
          reponse: "Construire des bâtiments parasismiques et mettre en place des systèmes d'alerte avec des plans d'évacuation et des exercices pour la population.",
          explication: "Prévention par la construction adaptée et par l'organisation (alerte, évacuation, éducation).",
        },
      ],
    },
    {
      titre: "Examen 2 — Séismes et volcans : la tectonique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le point de la surface situé juste au-dessus du foyer s'appelle :",
          choix: ["Le cratère", "L'épicentre", "La dorsale", "La magnitude"],
          bonneReponse: 1,
          explication: "L'épicentre est à la verticale du foyer, en surface.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne un exemple de volcan effusif.",
          reponse: "Le Piton de la Fournaise (ou les volcans d'Hawaï).",
          explication: "Ces volcans produisent une lave fluide en coulées.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'appelle-t-on lithosphère et comment est-elle organisée ?",
          reponse: "La lithosphère est la couche externe rigide de la Terre ; elle est découpée en plaques mobiles.",
          explication: "Les plaques lithosphériques se déplacent de quelques centimètres par an.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "À quelle vitesse se déplacent environ les plaques ?",
          choix: ["Quelques mètres par seconde", "Quelques centimètres par an", "Un kilomètre par jour", "Elles ne bougent pas"],
          bonneReponse: 1,
          explication: "Les plaques se déplacent très lentement, de quelques centimètres par an.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "En quoi la carte mondiale des séismes est-elle utile pour la prévention ?",
          reponse: "Elle montre les zones à risque (limites de plaques), ce qui permet d'y renforcer les constructions, d'organiser l'alerte et d'informer les habitants avant qu'un séisme ne survienne.",
          explication: "Connaître la répartition des risques permet de cibler les mesures de prévention.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Relie en une phrase le mouvement des plaques à l'existence des séismes et des volcans.",
          reponse: "Le mouvement des plaques lithosphériques (écartement aux dorsales, plongement en subduction) provoque des ruptures de roches, donc des séismes, et permet la remontée de magma, donc du volcanisme, surtout aux limites de plaques.",
          explication: "La tectonique des plaques est la cause commune des séismes et des volcans.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un séisme naît de la rupture de roches au foyer ; l'épicentre est le point de surface au-dessus, atteint par les ondes sismiques.",
    "Deux types d'éruptions : effusive (lave fluide, coulées) et explosive (lave visqueuse, explosions et nuées ardentes).",
    "La lithosphère rigide est découpée en plaques mobiles qui se déplacent de quelques centimètres par an.",
    "Aux dorsales les plaques s'écartent ; en zone de subduction une plaque plonge sous une autre.",
    "Séismes et volcans se concentrent aux limites de plaques (ex. ceinture de feu du Pacifique) ; la prévention réduit les risques.",
    "Erreur à éviter : confondre foyer (en profondeur) et épicentre (à la surface).",
  ],
};

export default chapitre;
