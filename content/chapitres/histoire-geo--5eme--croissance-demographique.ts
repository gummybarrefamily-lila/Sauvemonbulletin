import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
