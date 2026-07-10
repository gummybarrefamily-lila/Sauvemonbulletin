import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "respiration-milieux",
  titre: "La respiration dans différents milieux",
  matiere: "svt",
  niveau: "5eme",
  description:
    "Découvrir que tous les êtres vivants respirent, mais avec des organes différents selon leur milieu de vie (poumons, branchies, peau, trachées), et comprendre comment cela influence leur répartition et leur comportement.",
  objectifs: [
    "Savoir que tous les êtres vivants respirent : ils prélèvent du dioxygène et rejettent du dioxyde de carbone",
    "Identifier les différents organes respiratoires selon le milieu de vie (poumons, branchies, peau, trachées)",
    "Comprendre pourquoi certains animaux aquatiques (baleines, dauphins) doivent remonter respirer à l'air",
    "Expliquer la métamorphose respiratoire des amphibiens (branchies puis poumons)",
    "Relier la répartition des êtres vivants dans un milieu à la disponibilité en dioxygène",
  ],
  slides: [
    {
      titre: "Tous les êtres vivants respirent",
      illustration: "🌬️",
      visuel: "O₂ absorbé → CO₂ rejeté",
      contenu: [
        "Respirer, c'est prélever du dioxygène (O₂) dans le milieu de vie",
        "La respiration rejette du dioxyde de carbone (CO₂)",
        "Elle a lieu dans l'air comme dans l'eau",
        "Sans respiration, un être vivant ne peut pas produire l'énergie dont il a besoin",
      ],
      voixOff:
        "Que l'on vive dans l'air ou dans l'eau, tous les êtres vivants respirent. Respirer, c'est prélever du dioxygène dans son milieu et rejeter du dioxyde de carbone. Ce dioxygène est indispensable : sans lui, aucun organe ne peut fonctionner. Voyons comment cette respiration s'organise différemment selon les milieux.",
    },
    {
      titre: "Mettre en évidence la respiration",
      illustration: "🧪",
      visuel: "eau de chaux + CO₂ → trouble",
      contenu: [
        "On peut mesurer la consommation de dioxygène d'un animal placé en enceinte close",
        "L'air ou l'eau expulsés par l'animal troublent l'eau de chaux : ils contiennent du CO₂",
        "Un animal placé dans une eau pauvre en dioxygène montre des signes de gêne (il remonte, s'agite)",
        "Ces expériences prouvent que tous les êtres vivants consomment du O₂ et rejettent du CO₂",
      ],
      voixOff:
        "Comment prouver qu'un animal respire ? On l'enferme dans une enceinte et on mesure les gaz. L'eau de chaux, normalement limpide, devient trouble au contact du dioxyde de carbone qu'il rejette. Si on réduit la quantité de dioxygène disponible, l'animal montre des signes de gêne. Ces expériences confirment que la respiration est universelle chez les êtres vivants.",
    },
    {
      titre: "Respirer dans l'air : les poumons",
      illustration: "🫁",
      visuel: "air riche en O₂ → poumons → alvéoles",
      contenu: [
        "Les poumons sont l'organe respiratoire des animaux terrestres (mammifères, oiseaux, reptiles)",
        "L'air, riche en dioxygène, y pénètre à chaque inspiration",
        "Les poumons ont une immense surface interne (alvéoles) pour capter l'O₂",
        "Le dioxyde de carbone est rejeté à l'expiration",
      ],
      voixOff:
        "Sur terre, l'air contient beaucoup de dioxygène : environ 21 pour cent. Les animaux terrestres respirent grâce à des poumons. À chaque inspiration, l'air riche en dioxygène pénètre dans de minuscules cavités appelées alvéoles, qui offrent une immense surface d'échange. Le dioxyde de carbone produit par le corps est ensuite rejeté à l'expiration.",
    },
    {
      titre: "Respirer dans l'eau : les branchies",
      illustration: "🐟",
      visuel: "eau → branchies → sang",
      contenu: [
        "Les poissons possèdent des branchies, souvent protégées par un opercule",
        "L'eau circule en permanence sur les branchies, très riches en vaisseaux sanguins",
        "Le dioxygène dissous dans l'eau y est capté et passe dans le sang",
        "L'eau contient moins d'O₂ que l'air : les branchies doivent filtrer beaucoup d'eau",
      ],
      voixOff:
        "Dans l'eau, le dioxygène est beaucoup moins abondant que dans l'air : il est simplement dissous. Les poissons utilisent des branchies, formées de fins filaments très irrigués en sang. L'eau y circule sans arrêt, ce qui permet de capter le peu de dioxygène disponible. C'est pour cela qu'un poisson doit faire passer une grande quantité d'eau sur ses branchies.",
    },
    {
      titre: "D'autres organes respiratoires",
      illustration: "🐛",
      visuel: "peau, trachées : d'autres solutions",
      contenu: [
        "La peau peut aussi servir à respirer, à condition d'être fine et humide (ver de terre)",
        "Les insectes respirent grâce à des trachées reliées à de petits orifices, les stigmates",
        "L'air circule directement dans les trachées jusqu'aux cellules, sans passer par le sang",
        "Chaque organe respiratoire est adapté au mode de vie de l'espèce",
      ],
      voixOff:
        "Poumons et branchies ne sont pas les seules solutions. Le ver de terre respire par sa peau, qui doit rester humide et fine pour laisser passer les gaz. Les insectes, eux, possèdent un réseau de tubes appelés trachées, reliés à l'extérieur par de petits orifices, les stigmates : l'air y circule directement jusqu'aux cellules.",
    },
    {
      titre: "Les amphibiens : une respiration qui change",
      illustration: "🐸",
      visuel: "têtard (branchies) → grenouille (poumons + peau)",
      contenu: [
        "Le têtard, qui vit dans l'eau, respire grâce à des branchies",
        "Devenu adulte, la grenouille respire par les poumons et par la peau",
        "Cette transformation profonde s'appelle la métamorphose",
        "Elle correspond exactement au changement de milieu de vie : de l'eau vers l'air",
      ],
      voixOff:
        "Les amphibiens offrent un exemple étonnant. Le têtard, entièrement aquatique, respire avec des branchies, comme un poisson. Mais en grandissant, il se métamorphose en grenouille adulte, qui vit surtout sur terre : ses organes respiratoires changent aussi, elle respire désormais par les poumons et par la peau.",
    },
    {
      titre: "Les mammifères aquatiques : un cas particulier",
      illustration: "🐬",
      visuel: "vit dans l'eau, respire à l'air",
      contenu: [
        "Les baleines et les dauphins vivent dans l'eau mais respirent avec des poumons",
        "Ils doivent remonter régulièrement à la surface pour respirer l'air",
        "Ils peuvent retenir leur respiration très longtemps en plongée (plusieurs dizaines de minutes)",
        "Leur organe respiratoire, hérité de leurs ancêtres terrestres, impose ce comportement",
      ],
      voixOff:
        "Certains mammifères vivent dans l'eau sans y respirer directement. Les baleines et les dauphins ont des poumons, pas des branchies : ils doivent donc remonter régulièrement à la surface pour respirer de l'air. C'est pour cela qu'on les voit souffler à la surface. Leur mode de respiration impose un comportement adapté à leur milieu.",
    },
    {
      titre: "Respiration et répartition des êtres vivants",
      illustration: "🗺️",
      visuel: "O₂ disponible → espèces présentes",
      contenu: [
        "L'eau contient nettement moins de dioxygène que l'air",
        "Certains milieux aquatiques (eau stagnante, chaude, polluée) sont pauvres en O₂",
        "Une espèce ne s'installe que là où son organe respiratoire trouve assez de dioxygène",
        "La disponibilité en O₂ explique en partie la répartition des espèces dans un milieu",
      ],
      voixOff:
        "Pourquoi certaines espèces vivent-elles ici et pas là ? La respiration donne un élément de réponse. L'eau contient beaucoup moins de dioxygène que l'air, et certains milieux, comme une mare stagnante et chaude, en manquent encore plus. Les espèces qui ont besoin de beaucoup d'O₂ ne peuvent pas s'y installer : la répartition des êtres vivants dépend donc aussi de leurs besoins respiratoires.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Tous les êtres vivants respirent : ils prélèvent O₂ et rejettent CO₂",
        "L'organe respiratoire dépend du milieu : poumons (air), branchies (eau), peau, trachées",
        "Certains animaux (mammifères aquatiques, amphibiens) ont un cas particulier",
        "La disponibilité en O₂ d'un milieu influence la répartition des espèces",
      ],
      voixOff:
        "Résumons. Tous les êtres vivants respirent : ils prélèvent du dioxygène et rejettent du dioxyde de carbone, que ce soit dans l'air ou dans l'eau. L'organe utilisé dépend du milieu : poumons pour l'air, branchies pour l'eau, mais aussi peau ou trachées selon les espèces. Certains animaux, comme les mammifères aquatiques ou les amphibiens, ont des cas particuliers passionnants. Enfin, la quantité de dioxygène disponible dans un milieu influence directement les espèces qui peuvent y vivre.",
    },
  ],
  fiche: {
    intro:
      "Tous les êtres vivants respirent : ils prélèvent du dioxygène dans leur milieu et rejettent du dioxyde de carbone. Mais l'organe utilisé varie selon le milieu de vie, ce qui explique aussi la répartition des espèces et certains comportements étonnants.",
    sections: [
      {
        titre: "La respiration, une fonction commune",
        points: [
          "Respirer, c'est prélever du dioxygène (O₂) et rejeter du dioxyde de carbone (CO₂)",
          "On le met en évidence avec l'eau de chaux, qui se trouble au contact du CO₂",
          "Cette fonction est indispensable à tous les êtres vivants, dans l'air comme dans l'eau",
        ],
      },
      {
        titre: "Des organes respiratoires adaptés au milieu",
        points: [
          "Poumons : animaux terrestres, air riche en O₂ (environ 21 %)",
          "Branchies : animaux aquatiques, O₂ dissous et moins abondant dans l'eau",
          "Peau (fine et humide) ou trachées (insectes) : d'autres solutions possibles",
        ],
      },
      {
        titre: "Des cas particuliers",
        points: [
          "Les mammifères aquatiques (baleines, dauphins) ont des poumons : ils remontent respirer à l'air",
          "Les amphibiens changent d'organe respiratoire lors de la métamorphose (branchies → poumons et peau)",
        ],
      },
      {
        titre: "Respiration et répartition des espèces",
        points: [
          "L'eau contient moins d'O₂ que l'air, surtout si elle est stagnante ou chaude",
          "Chaque espèce s'installe là où son organe respiratoire trouve assez d'O₂",
          "La quantité d'O₂ disponible dans un milieu explique en partie sa biodiversité",
        ],
      },
    ],
    audio:
      "Fiche de révision : la respiration dans différents milieux. Tous les êtres vivants respirent : ils prélèvent du dioxygène dans leur milieu et rejettent du dioxyde de carbone, ce que l'on met en évidence avec l'eau de chaux qui se trouble. L'organe respiratoire dépend du milieu de vie : les poumons pour les animaux terrestres, qui profitent d'un air riche en dioxygène, et les branchies pour les animaux aquatiques, car l'eau en contient beaucoup moins. D'autres solutions existent, comme la peau fine et humide ou les trachées des insectes. Certains cas sont particuliers : les mammifères aquatiques comme les baleines ou les dauphins ont des poumons et doivent remonter respirer à l'air, tandis que les amphibiens changent d'organe respiratoire lors de leur métamorphose, passant des branchies aux poumons et à la peau. Enfin, la quantité de dioxygène disponible dans un milieu, plus faible dans une eau stagnante et chaude, influence directement quelles espèces peuvent y vivre.",
  },
  memoCards: [
    { recto: "Que fait un être vivant en respirant ?", verso: "Il prélève du dioxygène (O₂) dans son milieu et rejette du dioxyde de carbone (CO₂)." },
    { recto: "Comment prouver que le CO₂ est rejeté ?", verso: "L'eau de chaux se trouble au contact du dioxyde de carbone." },
    { recto: "Quel organe respiratoire pour les animaux terrestres ?", verso: "Les poumons, qui captent le dioxygène de l'air grâce aux alvéoles." },
    { recto: "Quel organe respiratoire pour les poissons ?", verso: "Les branchies, qui captent le dioxygène dissous dans l'eau." },
    { recto: "Cite deux autres organes respiratoires possibles.", verso: "La peau (fine et humide) et les trachées (chez les insectes)." },
    { recto: "Pourquoi une baleine remonte-t-elle à la surface ?", verso: "Parce qu'elle respire avec des poumons : elle doit aller chercher l'air en surface." },
    { recto: "Que change la métamorphose chez la grenouille ?", verso: "Le têtard respire par des branchies ; l'adulte respire par les poumons et la peau." },
    { recto: "Pourquoi une eau stagnante et chaude abrite-t-elle peu d'espèces exigeantes en O₂ ?", verso: "Parce qu'elle contient très peu de dioxygène dissous." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que rejette un être vivant lorsqu'il respire ?",
      choix: ["Du dioxygène", "Du dioxyde de carbone", "De l'eau de chaux", "Du glucose"],
      bonneReponse: 1,
      explication: "La respiration prélève du dioxygène et rejette du dioxyde de carbone (CO₂).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel organe respiratoire possèdent les poissons ?",
      choix: ["Des poumons", "Des branchies", "Des trachées", "Une peau seulement"],
      bonneReponse: 1,
      explication: "Les poissons respirent grâce à des branchies qui captent l'O₂ dissous dans l'eau.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment reconnaît-on la présence de dioxyde de carbone dans un gaz expiré ?",
      reponse: "L'eau de chaux, normalement limpide, devient trouble au contact du dioxyde de carbone.",
      explication: "C'est l'expérience classique utilisée pour mettre en évidence le CO₂.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel organe respiratoire possèdent les animaux terrestres comme les mammifères ?",
      choix: ["Des branchies", "Des poumons", "Une carapace", "Des nageoires"],
      bonneReponse: 1,
      explication: "Les animaux terrestres respirent grâce à des poumons adaptés à l'air.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi un poisson doit-il faire passer beaucoup d'eau sur ses branchies pour respirer ?",
      reponse: "Parce que l'eau contient beaucoup moins de dioxygène dissous que l'air : il faut filtrer une grande quantité d'eau pour en récupérer assez.",
      explication: "La faible teneur en O₂ de l'eau oblige les poissons à un débit important sur leurs branchies.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi un dauphin, qui vit dans l'eau, doit-il remonter régulièrement à la surface ?",
      reponse: "Parce qu'il respire avec des poumons, comme un mammifère terrestre, et non avec des branchies : il ne peut capter le dioxygène que dans l'air.",
      explication: "L'organe respiratoire (poumons) impose ce comportement de remontée régulière.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Par quel organe le têtard respire-t-il dans l'eau ?",
      choix: ["Les poumons", "La peau uniquement", "Des branchies", "Des trachées"],
      bonneReponse: 2,
      explication: "Le têtard, aquatique, respire avec des branchies, avant sa métamorphose en grenouille adulte.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qui change dans la respiration de la grenouille entre le stade têtard et le stade adulte ?",
      reponse: "Le têtard respire par des branchies (vie aquatique) ; l'adulte respire par les poumons et par la peau (vie surtout terrestre).",
      explication: "Ce changement d'organe respiratoire accompagne le changement de milieu de vie lors de la métamorphose.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une mare stagnante et chaude, pauvre en dioxygène, abritera plutôt :",
      choix: [
        "Des espèces très exigeantes en O₂ uniquement",
        "Des espèces tolérantes à un faible taux d'O₂",
        "Aucun être vivant",
        "Uniquement des mammifères aquatiques",
      ],
      bonneReponse: 1,
      explication: "Seules les espèces adaptées à un faible taux d'O₂ peuvent survivre dans un tel milieu.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la disponibilité en dioxygène d'un milieu influence la répartition des espèces qui y vivent.",
      reponse: "Chaque espèce a des besoins en O₂ liés à son organe respiratoire ; si le milieu n'apporte pas assez de dioxygène, l'espèce ne peut pas s'y maintenir. Seules les espèces adaptées à la quantité d'O₂ disponible s'installent durablement.",
      explication: "La teneur en O₂ d'un milieu agit comme un facteur limitant la présence de certaines espèces.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un ver de terre sorti de terre après une forte pluie risque de mourir s'il reste trop longtemps sur le bitume sec. Propose une explication liée à sa respiration.",
      reponse: "Le ver de terre respire par sa peau, qui doit rester humide et fine pour laisser passer les gaz. Sur le bitume sec, sa peau se dessèche, ce qui empêche les échanges respiratoires.",
      explication: "La respiration cutanée nécessite une peau humide ; le dessèchement bloque les échanges gazeux.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Compare la respiration d'un poisson et celle d'une baleine, deux animaux qui vivent pourtant dans le même milieu aquatique.",
      reponse: "Le poisson possède des branchies et capte le dioxygène dissous dans l'eau en permanence. La baleine possède des poumons, comme un mammifère terrestre, et doit remonter régulièrement à la surface pour respirer l'air.",
      explication: "Deux animaux du même milieu peuvent avoir des organes respiratoires très différents selon leur groupe biologique.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Respirer, c'est prélever :",
      choix: ["De l'eau", "Du dioxygène", "Du glucose", "De la lumière"],
      bonneReponse: 1,
      explication: "La respiration consiste à prélever du dioxygène et à rejeter du dioxyde de carbone.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel organe respiratoire possèdent les insectes ?",
      reponse: "Des trachées, reliées à l'extérieur par des orifices appelés stigmates.",
      explication: "L'air circule directement dans les trachées jusqu'aux cellules.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les baleines doivent-elles remonter à la surface ?",
      reponse: "Parce qu'elles respirent avec des poumons et ne peuvent capter le dioxygène que dans l'air.",
      explication: "Leur organe respiratoire impose ce comportement, malgré leur vie aquatique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "L'eau de chaux se trouble au contact :",
      choix: ["Du dioxygène", "Du dioxyde de carbone", "De l'eau pure", "Du glucose"],
      bonneReponse: 1,
      explication: "C'est le test classique pour mettre en évidence le dioxyde de carbone.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel facteur du milieu influence la répartition des espèces selon leur respiration ?",
      reponse: "La quantité de dioxygène disponible dans le milieu (air ou eau).",
      explication: "Chaque espèce s'installe là où elle trouve assez d'O₂ pour son organe respiratoire.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La respiration dans différents milieux",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que prélève un être vivant lorsqu'il respire ?",
          choix: ["Du dioxyde de carbone", "Du dioxygène", "De l'eau de chaux", "Du glucose"],
          bonneReponse: 1,
          explication: "La respiration prélève du dioxygène dans le milieu.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite l'organe respiratoire des poissons et celui des mammifères terrestres.",
          reponse: "Les poissons ont des branchies ; les mammifères terrestres ont des poumons.",
          explication: "Chaque organe est adapté au milieu : eau pour les branchies, air pour les poumons.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi l'eau contient moins de dioxygène que l'air.",
          reponse: "Dans l'eau, le dioxygène est seulement dissous en faible quantité, alors que l'air en contient environ 21 %.",
          explication: "C'est pourquoi les organismes aquatiques doivent filtrer de grandes quantités d'eau pour respirer.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Le têtard respire par :",
          choix: ["Des poumons", "Des branchies", "Des trachées", "Une carapace"],
          bonneReponse: 1,
          explication: "Le têtard aquatique respire par des branchies, avant sa métamorphose.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique en quoi la respiration des mammifères aquatiques est un cas particulier.",
          reponse: "Ils vivent dans l'eau mais possèdent des poumons comme les mammifères terrestres : ils doivent donc remonter régulièrement à la surface pour respirer l'air, contrairement aux poissons qui respirent en permanence sous l'eau grâce à leurs branchies.",
          explication: "Le milieu de vie et l'organe respiratoire ne coïncident pas toujours chez ces espèces.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Pourquoi trouve-t-on peu d'espèces exigeantes en dioxygène dans une mare stagnante et chaude en été ?",
          reponse: "Une eau stagnante et chaude contient très peu de dioxygène dissous ; seules les espèces tolérantes à ce faible taux d'O₂ peuvent y survivre.",
          explication: "La disponibilité en O₂ d'un milieu est un facteur qui limite la répartition des espèces.",
        },
      ],
    },
    {
      titre: "Examen 2 — La respiration dans différents milieux",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel gaz est rejeté par la respiration ?",
          choix: ["Le dioxygène", "Le dioxyde de carbone", "L'azote", "La vapeur d'eau uniquement"],
          bonneReponse: 1,
          explication: "La respiration rejette du dioxyde de carbone (CO₂).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite un être vivant qui respire par la peau.",
          reponse: "Le ver de terre, qui a besoin d'une peau fine et humide pour respirer.",
          explication: "La respiration cutanée nécessite des échanges gazeux à travers une peau fine et humide.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris le changement d'organe respiratoire lors de la métamorphose de la grenouille.",
          reponse: "Le têtard respire par des branchies dans l'eau ; devenue adulte, la grenouille respire par les poumons et par la peau, adaptés à une vie surtout terrestre.",
          explication: "Le changement d'organe respiratoire accompagne le changement de milieu de vie.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Les insectes respirent grâce à :",
          choix: ["Des poumons", "Des branchies", "Des trachées et des stigmates", "Une peau uniquement"],
          bonneReponse: 2,
          explication: "L'air circule directement dans les trachées, via de petits orifices, les stigmates.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un aquarium mal aéré voit ses poissons remonter souvent à la surface et respirer plus vite. Propose une explication.",
          reponse: "L'eau de l'aquarium manque de dioxygène dissous ; les poissons remontent près de la surface, où l'eau est plus riche en O₂ au contact de l'air, et accélèrent leurs mouvements respiratoires pour compenser le manque d'oxygène.",
          explication: "Un manque d'O₂ dans l'eau provoque une gêne respiratoire visible chez les poissons.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi deux animaux vivant dans le même milieu aquatique peuvent avoir des organes respiratoires très différents. Donne un exemple.",
          reponse: "L'organe respiratoire dépend du groupe biologique de l'animal, pas seulement du milieu. Exemple : le poisson a des branchies adaptées à l'eau, tandis que le dauphin, mammifère, a des poumons hérités de ses ancêtres terrestres et doit remonter respirer à l'air.",
          explication: "Le milieu de vie et l'organe respiratoire peuvent diverger selon l'histoire évolutive de l'espèce.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Tous les êtres vivants respirent : ils prélèvent du dioxygène et rejettent du dioxyde de carbone.",
    "L'eau de chaux se trouble au contact du CO₂ : c'est le test qui met en évidence la respiration.",
    "L'organe respiratoire dépend du milieu : poumons (air), branchies (eau), peau ou trachées selon les espèces.",
    "Les mammifères aquatiques ont des poumons : ils doivent remonter respirer à l'air malgré leur vie aquatique.",
    "Les amphibiens changent d'organe respiratoire lors de la métamorphose (branchies → poumons et peau).",
    "La quantité de dioxygène disponible dans un milieu influence la répartition des espèces qui peuvent y vivre.",
  ],
};

export default chapitre;
