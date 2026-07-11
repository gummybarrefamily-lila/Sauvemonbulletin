import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "risques-geologiques",
  titre: "Risques géologiques et humains",
  matiere: "svt",
  niveau: "3eme",
  description:
    "Comprendre la notion de risque géologique à partir des notions d'aléa et de vulnérabilité, connaître différents aléas (séismes, volcans, mouvements de terrain, tsunamis) et les moyens de prévention et de gestion des risques, ainsi que les bons comportements à adopter en cas de danger.",
  objectifs: [
    "Distinguer aléa, vulnérabilité et risque géologique",
    "Comprendre pourquoi un même aléa peut représenter un risque très différent selon les populations exposées",
    "Connaître plusieurs types d'aléas géologiques (séisme, volcan, mouvement de terrain, tsunami)",
    "Connaître les outils de prévention des risques (cartes d'aléas, plans de prévention, constructions adaptées)",
    "Connaître les bons comportements à adopter face à un risque géologique",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un risque géologique ?",
      illustration: "🌍",
      visuel: "phénomène naturel + population exposée = risque",
      contenu: [
        "Un phénomène géologique (séisme, éruption...) n'est pas toujours un risque",
        "Il ne devient un risque que s'il menace des populations ou des biens",
        "Un séisme au milieu d'un désert inhabité ne cause pas de risque humain",
        "Le risque géologique combine un phénomène naturel et une présence humaine",
      ],
      voixOff:
        "Un phénomène géologique, comme un séisme ou une éruption volcanique, n'est pas en soi un risque. Il ne le devient que s'il menace des populations, des habitations ou des activités humaines. Un séisme se produisant au milieu d'un désert totalement inhabité ne représente aucun risque pour l'être humain, alors que le même séisme, sous une grande ville, peut être catastrophique. Le risque géologique naît donc de la rencontre entre un phénomène naturel et une présence humaine.",
    },
    {
      titre: "Aléa et vulnérabilité : deux notions clés",
      illustration: "⚖️",
      visuel: "aléa (le phénomène) + vulnérabilité (la fragilité humaine)",
      contenu: [
        "L'aléa est le phénomène naturel lui-même (probabilité, intensité)",
        "La vulnérabilité est la fragilité des personnes et des biens exposés",
        "Une population bien préparée est moins vulnérable qu'une population non préparée",
        "Un même aléa peut avoir des conséquences très différentes selon la vulnérabilité",
      ],
      voixOff:
        "Pour comprendre un risque géologique, il faut distinguer deux notions. L'aléa désigne le phénomène naturel lui-même : sa probabilité de se produire et son intensité possible. La vulnérabilité désigne la fragilité des populations et des biens exposés à cet aléa : une construction solide et une population bien préparée sont moins vulnérables qu'une construction fragile et une population non informée.",
    },
    {
      titre: "Risque = aléa et vulnérabilité",
      illustration: "🧮",
      visuel: "risque dépend de l'aléa ET de la vulnérabilité",
      contenu: [
        "Le risque dépend à la fois de l'aléa et de la vulnérabilité",
        "Un aléa fort avec une faible vulnérabilité peut causer peu de dégâts",
        "Un aléa modéré avec une forte vulnérabilité peut être catastrophique",
        "Réduire le risque, c'est agir sur la vulnérabilité (on ne contrôle pas l'aléa)",
      ],
      voixOff:
        "Le risque dépend donc à la fois de l'aléa et de la vulnérabilité. Un aléa très fort, comme un séisme puissant, peut causer relativement peu de dégâts si les bâtiments sont parasismiques et la population bien préparée. À l'inverse, un aléa modéré peut devenir catastrophique si la vulnérabilité est très élevée. Comme on ne peut pas empêcher les phénomènes naturels, la prévention agit surtout en réduisant la vulnérabilité.",
    },
    {
      titre: "Les séismes : aléa et vulnérabilité",
      illustration: "🏚️",
      visuel: "séisme fort + bâtiments fragiles = catastrophe",
      contenu: [
        "L'aléa sismique est plus élevé aux limites de plaques lithosphériques",
        "La vulnérabilité dépend de la solidité des constructions",
        "Des bâtiments parasismiques réduisent fortement les dégâts",
        "Un séisme identique peut faire très peu ou énormément de victimes",
      ],
      voixOff:
        "Reprenons l'exemple des séismes. L'aléa sismique est plus élevé dans les régions situées près des limites de plaques lithosphériques. Mais à aléa équivalent, deux régions peuvent connaître des conséquences très différentes selon leur vulnérabilité : là où les constructions sont parasismiques et la population entraînée, un séisme fait beaucoup moins de victimes que dans une région où les bâtiments sont fragiles et la population non préparée.",
    },
    {
      titre: "Les volcans : aléa et vulnérabilité",
      illustration: "🌋",
      visuel: "surveillance + évacuation = vulnérabilité réduite",
      contenu: [
        "L'aléa volcanique dépend du type de volcan (effusif ou explosif)",
        "La surveillance permet souvent d'anticiper une éruption",
        "L'évacuation à temps réduit fortement la vulnérabilité de la population",
        "Certaines zones proches de volcans actifs restent densément peuplées",
      ],
      voixOff:
        "Pour les volcans, l'aléa dépend notamment du type d'éruption, effusive ou explosive, cette dernière étant plus dangereuse. Grâce à des capteurs, on peut souvent détecter les signes annonciateurs d'une éruption et déclencher une évacuation à temps, ce qui réduit fortement la vulnérabilité de la population. Le risque reste cependant important dans certaines zones densément peuplées situées près de volcans actifs.",
    },
    {
      titre: "Mouvements de terrain et tsunamis",
      illustration: "🌊",
      visuel: "glissement de terrain / vague géante",
      contenu: [
        "Un mouvement de terrain est un déplacement de roches ou de sol (glissement, éboulement)",
        "Il peut être déclenché par de fortes pluies, un séisme ou l'activité humaine",
        "Un tsunami est une vague géante, souvent provoquée par un séisme sous-marin",
        "Des systèmes d'alerte permettent parfois d'évacuer les côtes à temps",
      ],
      voixOff:
        "D'autres aléas géologiques existent. Un mouvement de terrain correspond au déplacement de roches ou de sol, comme un glissement ou un éboulement, souvent déclenché par de fortes pluies, un séisme ou des travaux humains. Un tsunami, lui, est une vague géante, le plus souvent provoquée par un séisme sous-marin, qui peut ravager des côtes entières. Des systèmes d'alerte, quand ils existent, permettent parfois d'évacuer les populations côtières avant l'arrivée de la vague.",
    },
    {
      titre: "Prévenir : cartes d'aléas et plans de prévention",
      illustration: "🗺️",
      visuel: "carte des risques → construction adaptée",
      contenu: [
        "Des cartes d'aléas identifient les zones les plus exposées",
        "Des plans de prévention des risques réglementent la construction dans ces zones",
        "Ils peuvent interdire de construire dans les zones les plus dangereuses",
        "Ils imposent parfois des normes de construction renforcées",
      ],
      voixOff:
        "Pour réduire la vulnérabilité, les autorités s'appuient sur des cartes d'aléas, qui identifient les zones les plus exposées à un risque donné. À partir de ces cartes, des plans de prévention des risques réglementent la construction : certaines zones très exposées sont interdites à la construction, tandis que d'autres imposent des normes renforcées, comme des bâtiments parasismiques.",
    },
    {
      titre: "Réagir : consignes de sécurité",
      illustration: "🚨",
      visuel: "connaître les bons réflexes sauve des vies",
      contenu: [
        "Connaître les consignes de sécurité réduit sa propre vulnérabilité",
        "En cas de séisme : s'abriter sous un meuble solide, s'éloigner des vitres",
        "En cas d'alerte à un tsunami ou une éruption : évacuer vers un point haut ou éloigné",
        "Des exercices réguliers préparent la population à réagir vite et bien",
      ],
      voixOff:
        "Enfin, chaque personne peut réduire sa propre vulnérabilité en connaissant les bons réflexes. En cas de séisme, il faut s'abriter sous un meuble solide et s'éloigner des vitres. En cas d'alerte à un tsunami ou d'évacuation volcanique, il faut suivre rapidement les consignes des autorités et rejoindre un point sûr. Des exercices réguliers, à l'école ou dans la vie quotidienne, permettent à chacun de savoir réagir efficacement le jour où un événement survient réellement.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Risque géologique = rencontre entre un aléa naturel et une vulnérabilité humaine",
        "On ne peut pas empêcher l'aléa, mais on peut réduire la vulnérabilité",
        "Cartes d'aléas et plans de prévention orientent la construction",
        "Connaître les bons comportements en cas de danger sauve des vies",
      ],
      voixOff:
        "Résumons. Un risque géologique naît de la rencontre entre un aléa, le phénomène naturel, et la vulnérabilité des populations et des biens exposés. Comme on ne peut pas empêcher l'aléa, la prévention agit sur la vulnérabilité : cartes d'aléas, plans de prévention, constructions adaptées, systèmes d'alerte et exercices d'évacuation. Enfin, connaître les bons comportements à adopter face à un séisme, une éruption ou un tsunami peut réellement sauver des vies. Bravo, tu comprends maintenant comment on gère les risques géologiques !",
    },
  ],
  fiche: {
    intro:
      "Un risque géologique naît de la rencontre entre un aléa, le phénomène naturel (séisme, volcan, mouvement de terrain, tsunami), et la vulnérabilité des populations et des biens exposés. On ne peut généralement pas empêcher l'aléa, mais on peut réduire la vulnérabilité grâce à des cartes d'aléas, des plans de prévention, des constructions adaptées et des consignes de sécurité connues de tous.",
    sections: [
      {
        titre: "Aléa, vulnérabilité et risque",
        points: [
          "L'aléa est le phénomène naturel lui-même (probabilité, intensité)",
          "La vulnérabilité est la fragilité des populations et des biens exposés",
          "Le risque dépend à la fois de l'aléa et de la vulnérabilité",
          "On ne contrôle pas l'aléa, mais on peut réduire la vulnérabilité",
        ],
      },
      {
        titre: "Les principaux aléas géologiques",
        points: [
          "Séismes : plus fréquents aux limites de plaques lithosphériques",
          "Volcans : aléa plus fort pour les éruptions explosives",
          "Mouvements de terrain : glissements, éboulements, souvent liés aux pluies",
          "Tsunamis : vagues géantes souvent provoquées par un séisme sous-marin",
        ],
      },
      {
        titre: "Prévenir les risques",
        points: [
          "Cartes d'aléas : identifient les zones les plus exposées",
          "Plans de prévention des risques : réglementent la construction",
          "Constructions parasismiques et normes renforcées",
          "Systèmes d'alerte et de surveillance",
        ],
      },
      {
        titre: "Réagir face à un risque géologique",
        points: [
          "Connaître les consignes de sécurité réduit sa propre vulnérabilité",
          "Séisme : s'abriter sous un meuble solide, s'éloigner des vitres",
          "Tsunami/éruption : évacuer rapidement vers un point sûr",
          "Les exercices réguliers préparent à réagir efficacement",
        ],
      },
    ],
    audio:
      "Fiche de révision : risques géologiques et humains. Un risque géologique naît de la rencontre entre un aléa, le phénomène naturel comme un séisme, une éruption volcanique, un mouvement de terrain ou un tsunami, et la vulnérabilité des populations et des biens exposés. Le risque dépend à la fois de l'intensité de l'aléa et du niveau de vulnérabilité : un même aléa peut causer très peu de dégâts dans une région bien préparée, ou une catastrophe dans une région vulnérable. Comme on ne peut généralement pas empêcher l'aléa, la prévention agit surtout sur la vulnérabilité, grâce à des cartes d'aléas qui identifient les zones exposées, des plans de prévention des risques qui réglementent la construction, des bâtiments parasismiques, des systèmes de surveillance et d'alerte, et des exercices d'évacuation réguliers. Enfin, connaître les bons comportements à adopter, comme s'abriter sous un meuble solide en cas de séisme ou évacuer rapidement vers un point sûr en cas d'alerte à un tsunami ou une éruption, permet à chacun de réduire sa propre vulnérabilité et de sauver des vies.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un aléa géologique ?", verso: "Le phénomène naturel lui-même (séisme, éruption, mouvement de terrain, tsunami)." },
    { recto: "Qu'est-ce que la vulnérabilité ?", verso: "La fragilité des populations et des biens exposés à un aléa." },
    { recto: "De quoi dépend le risque géologique ?", verso: "À la fois de l'aléa et de la vulnérabilité." },
    { recto: "Peut-on réduire l'aléa lui-même ?", verso: "Non en général ; la prévention agit surtout sur la vulnérabilité." },
    { recto: "Qu'est-ce qu'un plan de prévention des risques ?", verso: "Un document qui réglemente la construction dans les zones exposées à un aléa." },
    { recto: "Qu'est-ce qu'un tsunami ?", verso: "Une vague géante, le plus souvent provoquée par un séisme sous-marin." },
    { recto: "Que faire en cas de séisme ?", verso: "S'abriter sous un meuble solide et s'éloigner des vitres." },
    { recto: "Pourquoi les exercices d'évacuation sont-ils utiles ?", verso: "Ils préparent la population à réagir vite et efficacement en cas de danger réel." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'aléa géologique désigne :",
      choix: ["La fragilité d'une population", "Le phénomène naturel lui-même", "Le nombre de victimes", "Un plan de prévention"],
      bonneReponse: 1,
      explication: "L'aléa est le phénomène naturel, indépendamment de la présence humaine.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La vulnérabilité désigne :",
      choix: ["La fragilité des personnes et des biens exposés à un aléa", "L'intensité d'un séisme", "La composition des roches", "La vitesse d'un tsunami"],
      bonneReponse: 0,
      explication: "La vulnérabilité mesure à quel point une population ou des biens sont fragiles face à un aléa.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Pourquoi un séisme au milieu d'un désert inhabité ne représente-t-il pas un risque géologique ?",
      reponse: "Parce qu'un risque nécessite la présence de populations ou de biens exposés ; sans présence humaine, l'aléa ne menace personne et ne constitue donc pas un risque.",
      explication: "Le risque naît de la rencontre entre un aléa et une vulnérabilité humaine.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un tsunami est le plus souvent provoqué par :",
      choix: ["Un vent violent", "Un séisme sous-marin", "Une éruption effusive calme", "Un mouvement de terrain uniquement"],
      bonneReponse: 1,
      explication: "Un séisme sous-marin peut déplacer brutalement une grande masse d'eau et provoquer un tsunami.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi un séisme de même magnitude peut faire beaucoup plus de victimes dans un pays que dans un autre.",
      reponse: "Parce que la vulnérabilité diffère selon les pays : des bâtiments parasismiques et une population bien préparée réduisent fortement les dégâts et les victimes, alors que des constructions fragiles et une population non informée subissent des conséquences bien plus graves pour un aléa équivalent.",
      explication: "À aléa identique, c'est la vulnérabilité qui explique la différence de conséquences entre deux régions.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi on dit que la prévention agit surtout sur la vulnérabilité plutôt que sur l'aléa.",
      reponse: "Parce qu'il est généralement impossible d'empêcher un phénomène naturel comme un séisme ou une éruption de se produire (on ne contrôle pas l'aléa) ; en revanche, on peut réduire la fragilité des populations et des constructions face à ce phénomène, par exemple en construisant des bâtiments plus solides ou en préparant la population, ce qui diminue la vulnérabilité et donc le risque.",
      explication: "La prévention agit sur le terme du risque que l'on peut effectivement modifier : la vulnérabilité.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un plan de prévention des risques peut notamment :",
      choix: [
        "Empêcher totalement un séisme de se produire",
        "Interdire ou réglementer la construction dans les zones les plus exposées",
        "Prévoir la date exacte d'une future éruption",
        "Supprimer l'aléa sismique d'une région"],
      bonneReponse: 1,
      explication: "Le plan de prévention réglemente l'urbanisme pour réduire la vulnérabilité, sans agir sur l'aléa lui-même.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la bonne conduite à tenir en cas de séisme, à l'intérieur d'un bâtiment ?",
      reponse: "S'abriter sous un meuble solide et s'éloigner des fenêtres et des objets qui pourraient tomber, jusqu'à la fin des secousses.",
      explication: "Ces gestes réduisent le risque de blessure par chute d'objets ou de vitres brisées.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une ville décide de construire des digues et de renforcer les bâtiments côtiers face au risque de tsunami. Sur quel terme du risque agit-elle, et pourquoi n'agit-elle pas sur l'autre ?",
      reponse: "Elle agit sur la vulnérabilité, en rendant les bâtiments et les infrastructures plus résistants face à une vague. Elle n'agit pas sur l'aléa, car il est impossible d'empêcher un séisme sous-marin de se produire ou une vague de se former : seule la préparation face au phénomène peut être améliorée.",
      explication: "Les mesures de protection des constructions et des infrastructures visent à réduire la vulnérabilité, pas l'aléa lui-même.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Deux villes sont exposées au même aléa sismique. La ville A a des bâtiments anciens non renforcés et aucun exercice d'évacuation ; la ville B a des bâtiments parasismiques et des exercices réguliers. On peut prédire que :",
      choix: [
        "Les deux villes subiront exactement les mêmes conséquences",
        "La ville A a une vulnérabilité plus élevée et risque de subir davantage de dégâts et de victimes",
        "La ville B subira plus de dégâts car elle est mieux préparée",
        "L'aléa sera plus faible dans la ville B"],
      bonneReponse: 1,
      explication: "À aléa identique, la ville avec la vulnérabilité la plus élevée (bâtiments fragiles, population non préparée) subit généralement plus de conséquences.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi les exercices d'évacuation réguliers, comme ceux organisés à l'école, contribuent à réduire un risque géologique.",
      reponse: "Ces exercices permettent à chacun de connaître à l'avance les gestes et le trajet à suivre en cas de danger réel, ce qui réduit le temps de réaction et les erreurs de panique le jour d'un événement réel. En améliorant la préparation des personnes, ces exercices réduisent leur vulnérabilité face à l'aléa, donc le risque global.",
      explication: "La préparation humaine (savoir réagir) est un levier essentiel de réduction de la vulnérabilité.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une carte d'aléas montre qu'une zone est fortement exposée aux glissements de terrain. Pourtant, des habitations y sont déjà construites. Que peuvent faire les autorités pour réduire le risque dans cette situation ?",
      reponse: "Elles peuvent renforcer les constructions existantes ou stabiliser les terrains (drainage, murs de soutènement), mettre en place une surveillance et un système d'alerte, informer les habitants des consignes de sécurité, voire, dans les cas les plus dangereux, envisager un déplacement des habitations vers une zone moins exposée.",
      explication: "Plusieurs leviers, techniques et organisationnels, permettent de réduire la vulnérabilité même quand des habitations sont déjà construites en zone à risque.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le risque géologique dépend de :",
      choix: ["L'aléa uniquement", "La vulnérabilité uniquement", "L'aléa et la vulnérabilité", "Aucun de ces facteurs"],
      bonneReponse: 2,
      explication: "Le risque résulte de la combinaison de l'aléa (le phénomène) et de la vulnérabilité (la fragilité humaine).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un mouvement de terrain ?",
      reponse: "Un déplacement de roches ou de sol, comme un glissement ou un éboulement.",
      explication: "Il peut être déclenché par de fortes pluies, un séisme ou une activité humaine.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Sur quel élément du risque agit principalement la prévention ?",
      reponse: "Sur la vulnérabilité, car on ne peut généralement pas empêcher l'aléa lui-même.",
      explication: "Réduire la vulnérabilité est le principal levier d'action contre les risques géologiques.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "En cas de séisme à l'intérieur d'un bâtiment, il faut :",
      choix: ["Prendre l'ascenseur immédiatement", "S'abriter sous un meuble solide", "Rester près des fenêtres", "Ne rien faire"],
      bonneReponse: 1,
      explication: "S'abriter sous un meuble solide protège des chutes d'objets et de débris.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite un outil utilisé pour prévenir les risques géologiques.",
      reponse: "Par exemple une carte d'aléas ou un plan de prévention des risques.",
      explication: "Ces outils identifient les zones exposées et réglementent la construction.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Risques géologiques et humains",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un aléa géologique devient un risque quand :",
          choix: ["Il se produit dans un lieu inhabité", "Il menace des populations ou des biens", "Il est prévu à l'avance", "Il est de faible intensité"],
          bonneReponse: 1,
          explication: "Le risque naît de la rencontre entre l'aléa et une présence humaine vulnérable.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui rend une population plus vulnérable face à un séisme ?",
          reponse: "Des constructions fragiles, non parasismiques, et une population non informée ou non préparée.",
          explication: "La qualité des constructions et la préparation de la population sont deux facteurs clés de la vulnérabilité.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre aléa et vulnérabilité à l'aide d'un exemple de ton choix.",
          reponse: "L'aléa est le phénomène naturel lui-même, par exemple un séisme de magnitude 7. La vulnérabilité est la fragilité des personnes et des bâtiments face à ce séisme : une ville avec des constructions parasismiques et une population entraînée est moins vulnérable qu'une ville avec des bâtiments anciens et une population non préparée, même face au même séisme.",
          explication: "L'exemple illustre bien que l'aléa est fixe alors que la vulnérabilité peut être réduite par l'action humaine.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un plan de prévention des risques peut :",
          choix: [
            "Empêcher un mouvement de terrain de se produire",
            "Interdire de construire dans les zones les plus exposées",
            "Prévoir la date exacte d'un futur séisme",
            "Supprimer tout aléa dans une région"],
          bonneReponse: 1,
          explication: "Il réglemente l'occupation des zones exposées pour réduire la vulnérabilité, sans agir sur l'aléa.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Une région volcanique très peuplée met en place un système de surveillance performant. Explique comment cela réduit le risque, alors que le volcan reste tout aussi actif.",
          reponse: "Le volcan reste tout aussi actif, donc l'aléa ne change pas ; mais la surveillance permet de détecter les signes annonciateurs d'une éruption et de déclencher une évacuation à temps, ce qui réduit fortement la vulnérabilité de la population exposée, donc le risque global, même si l'aléa demeure identique.",
          explication: "Le risque diminue grâce à la réduction de la vulnérabilité, indépendamment du niveau de l'aléa.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Propose une explication à la phrase : « On ne peut pas empêcher un séisme, mais on peut réduire ses conséquences. »",
          reponse: "On ne peut pas agir sur l'aléa sismique lui-même : il est impossible d'empêcher les plaques lithosphériques de bouger ou les roches de se rompre. En revanche, on peut réduire la vulnérabilité des populations exposées, par des constructions parasismiques, des cartes d'aléas, des plans de prévention et des consignes de sécurité connues de tous, ce qui limite les dégâts et le nombre de victimes lorsqu'un séisme survient.",
          explication: "La phrase résume l'idée centrale du chapitre : agir sur la vulnérabilité plutôt que sur l'aléa.",
        },
      ],
    },
    {
      titre: "Examen 2 — Risques géologiques et humains",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une carte d'aléas sert à :",
          choix: ["Prévoir la météo", "Identifier les zones les plus exposées à un phénomène naturel", "Mesurer la population d'une ville", "Calculer le climat d'une région"],
          bonneReponse: 1,
          explication: "La carte d'aléas montre où un phénomène naturel donné est le plus susceptible de se produire ou d'avoir des conséquences fortes.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Que faut-il faire en cas d'alerte à un tsunami sur une côte ?",
          reponse: "Évacuer rapidement vers un point haut ou éloigné du rivage, en suivant les consignes des autorités.",
          explication: "S'éloigner rapidement du littoral est essentiel face à un risque de vague géante.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi deux régions soumises au même aléa sismique peuvent connaître des risques très différents.",
          reponse: "Parce que le risque dépend aussi de la vulnérabilité, qui peut être très différente entre deux régions : qualité des constructions, préparation de la population, existence de systèmes d'alerte. À aléa égal, la région la plus vulnérable subira des conséquences plus graves.",
          explication: "Le risque combine aléa et vulnérabilité, qui peuvent varier indépendamment l'un de l'autre.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un mouvement de terrain peut être déclenché par :",
          choix: ["De fortes pluies", "Un séisme", "Des travaux humains", "Toutes ces réponses"],
          bonneReponse: 3,
          explication: "Les mouvements de terrain ont plusieurs causes possibles, naturelles ou humaines.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique en quoi la connaissance des bons comportements par la population est un élément de prévention au même titre qu'un bâtiment parasismique.",
          reponse: "Un bâtiment parasismique réduit la vulnérabilité physique des constructions face à un séisme, tandis que la connaissance des bons comportements (s'abriter, évacuer) réduit la vulnérabilité humaine directe, en diminuant le risque de blessure ou de décès lors de l'événement. Les deux agissent donc sur la vulnérabilité, l'un sur les biens, l'autre sur les personnes, et sont complémentaires pour réduire le risque global.",
          explication: "Prévention matérielle (constructions) et prévention comportementale (consignes) agissent ensemble sur la vulnérabilité.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un pays riche et un pays pauvre sont tous deux exposés à un aléa sismique équivalent. Propose une explication aux différences souvent observées en termes de conséquences humaines.",
          reponse: "Un pays disposant de plus de moyens peut investir dans des constructions parasismiques, des systèmes de surveillance et d'alerte, et l'éducation de la population aux bons comportements, ce qui réduit fortement sa vulnérabilité. Un pays avec moins de moyens dispose souvent de constructions plus fragiles et de moins de dispositifs de prévention, ce qui augmente sa vulnérabilité et donc les conséquences humaines d'un séisme équivalent.",
          explication: "Les moyens disponibles pour la prévention influencent directement le niveau de vulnérabilité d'une population.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le risque géologique naît de la rencontre entre un aléa (le phénomène naturel) et la vulnérabilité (la fragilité des populations et des biens exposés).",
    "On ne peut généralement pas empêcher l'aléa ; la prévention agit surtout en réduisant la vulnérabilité.",
    "Les principaux aléas géologiques : séismes, éruptions volcaniques, mouvements de terrain, tsunamis.",
    "Cartes d'aléas et plans de prévention des risques réglementent la construction dans les zones exposées.",
    "Connaître les bons comportements (s'abriter, évacuer) et s'entraîner par des exercices réguliers réduit la vulnérabilité humaine.",
    "Erreur à éviter : confondre aléa (le phénomène) et risque (la conséquence pour les populations exposées, qui dépend aussi de la vulnérabilité).",
  ],
};

export default chapitre;
