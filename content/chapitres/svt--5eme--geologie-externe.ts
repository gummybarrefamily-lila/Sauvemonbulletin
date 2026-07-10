import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "geologie-externe",
  titre: "Géologie externe : érosion et paysages",
  matiere: "svt",
  niveau: "5eme",
  description:
    "Comprendre comment l'eau, le vent et le gel transforment les roches et façonnent les paysages au fil du temps, du démantèlement des reliefs jusqu'à la formation de nouvelles roches sédimentaires.",
  objectifs: [
    "Savoir qu'un paysage évolue lentement sous l'action de l'érosion",
    "Identifier les agents d'érosion : eau, vent, gel et dégel",
    "Comprendre les étapes érosion → transport → dépôt des sédiments",
    "Expliquer comment se forme une roche sédimentaire à partir de sédiments",
    "Distinguer roches dures et roches meubles face à l'érosion",
  ],
  slides: [
    {
      titre: "Un paysage qui change",
      illustration: "🏞️",
      visuel: "paysage stable en apparence, mais évolue",
      contenu: [
        "Un paysage semble immobile à l'échelle d'une vie humaine",
        "En réalité, il se transforme sans cesse, très lentement",
        "Ces transformations résultent de l'action de l'eau, du vent et du gel",
        "On appelle cela l'érosion",
      ],
      voixOff:
        "Une montagne, une falaise, une vallée : ces paysages paraissent immobiles. Pourtant, ils se transforment en permanence, mais si lentement que nous ne le voyons pas à l'échelle d'une vie humaine. Cette transformation des paysages s'appelle l'érosion, et elle est due à l'action de l'eau, du vent et du gel sur les roches.",
    },
    {
      titre: "L'érosion : l'eau, agent principal",
      illustration: "💧",
      visuel: "pluie + rivière → fragmentation des roches",
      contenu: [
        "L'eau de pluie ruisselle sur les roches et les use peu à peu",
        "Les rivières creusent leur lit et emportent des particules de roche",
        "Les vagues fragmentent les falaises côtières",
        "Plus le courant est puissant, plus l'érosion est efficace",
      ],
      voixOff:
        "L'eau est le principal agent d'érosion. La pluie qui ruisselle use la surface des roches. Les rivières, en coulant, creusent leur lit et arrachent des fragments de roche. Sur les côtes, les vagues frappent sans cesse les falaises et finissent par les fragmenter. Plus l'eau circule vite et fort, plus son pouvoir d'érosion est important.",
    },
    {
      titre: "Le gel et le dégel fragmentent les roches",
      illustration: "🧊",
      visuel: "eau dans une fissure → gel → roche fissurée",
      contenu: [
        "L'eau s'infiltre dans les fissures des roches",
        "En gelant, l'eau augmente de volume et élargit la fissure",
        "Ce cycle gel-dégel répété finit par faire éclater la roche",
        "C'est la gélifraction, fréquente en montagne",
      ],
      voixOff:
        "En montagne, un autre phénomène agit : la gélifraction. L'eau s'infiltre dans les fissures des roches. Quand elle gèle, elle augmente de volume et exerce une pression énorme, qui élargit la fissure. Répété de nombreuses fois, ce cycle de gel et de dégel finit par faire éclater la roche en fragments plus petits.",
    },
    {
      titre: "Le vent, agent d'érosion",
      illustration: "🌬️",
      visuel: "vent + particules → usure des roches",
      contenu: [
        "Le vent transporte des particules fines (sable, poussière)",
        "Ces particules frappent les roches et les usent par frottement",
        "Cet effet est surtout important dans les régions sèches et désertiques",
        "Le vent façonne des formes de roches parfois spectaculaires",
      ],
      voixOff:
        "Dans les régions sèches, le vent joue un rôle important. Il transporte du sable et des poussières qui, en frappant les roches, les usent peu à peu par frottement, un peu comme du papier de verre. Ce phénomène sculpte parfois des formes rocheuses étonnantes dans les déserts.",
    },
    {
      titre: "Transport et dépôt des sédiments",
      illustration: "🏔️",
      visuel: "érosion → transport → dépôt",
      contenu: [
        "Les fragments de roche arrachés (sédiments) sont transportés par l'eau ou le vent",
        "Ils sont d'abord de grande taille, puis s'usent et deviennent plus petits et arrondis",
        "Quand le courant ralentit, les sédiments se déposent",
        "Les plus gros se déposent en premier, les plus fins en dernier",
      ],
      voixOff:
        "Une fois arrachés, les fragments de roche, appelés sédiments, sont transportés par l'eau ou le vent. Pendant le transport, ils s'usent, se fragmentent et deviennent plus petits et plus arrondis. Quand le courant perd de sa force, les sédiments se déposent : les plus gros et les plus lourds d'abord, les plus fins ensuite.",
    },
    {
      titre: "Formation de nouvelles roches sédimentaires",
      illustration: "🪨",
      visuel: "sédiments empilés → compactés → roche",
      contenu: [
        "Les sédiments s'accumulent en couches, souvent au fond de l'eau (lacs, mers)",
        "Sous le poids des couches suivantes, ils sont compactés",
        "Avec le temps, ils se soudent et forment une nouvelle roche sédimentaire",
        "Exemples : le sable donne du grès, la boue donne de l'argile compactée",
      ],
      voixOff:
        "Les sédiments déposés au fond de l'eau s'accumulent en couches successives. Le poids des couches qui s'ajoutent au fil du temps compacte les sédiments plus anciens, qui finissent par se souder entre eux pour former une nouvelle roche : c'est une roche sédimentaire. Par exemple, du sable compacté donne du grès.",
    },
    {
      titre: "Le rôle du relief et du climat",
      illustration: "⛰️",
      visuel: "pente forte → érosion rapide",
      contenu: [
        "Sur une pente forte, l'eau ruisselle vite : l'érosion est plus intense",
        "En climat froid, le gel-dégel fragmente davantage les roches",
        "En climat sec, le vent est l'agent d'érosion dominant",
        "Le relief et le climat déterminent quel agent d'érosion domine",
      ],
      voixOff:
        "L'érosion ne se manifeste pas de la même façon partout. Sur une pente raide, l'eau de ruissellement est rapide et érode fortement. En montagne et en climat froid, c'est le gel-dégel qui domine. Dans les régions désertiques, c'est le vent. Le relief et le climat déterminent donc quel agent d'érosion est le plus actif.",
    },
    {
      titre: "L'action de l'être humain",
      illustration: "🚜",
      visuel: "activités humaines → érosion modifiée",
      contenu: [
        "La déforestation expose davantage les sols à l'érosion",
        "L'agriculture intensive peut accélérer l'érosion des sols",
        "Certains aménagements (digues, murets) peuvent au contraire ralentir l'érosion",
        "L'être humain influence donc l'évolution des paysages",
      ],
      voixOff:
        "L'être humain influence lui aussi l'érosion. Couper des arbres laisse le sol nu, plus vulnérable au ruissellement. Certaines pratiques agricoles accélèrent l'érosion des sols. À l'inverse, construire des digues ou planter des haies peut ralentir ce phénomène. L'action humaine modifie donc, en bien ou en mal, l'évolution naturelle des paysages.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Un paysage évolue lentement sous l'action de l'érosion (eau, vent, gel)",
        "Les roches sont fragmentées, transportées puis déposées en sédiments",
        "Les sédiments compactés forment de nouvelles roches sédimentaires",
        "Relief, climat et activités humaines influencent l'intensité de l'érosion",
      ],
      voixOff:
        "Résumons. Un paysage évolue en permanence, mais très lentement, sous l'action de l'érosion causée par l'eau, le vent et le gel. Les roches sont fragmentées, puis les sédiments obtenus sont transportés et finissent par se déposer. Accumulés et compactés, ces sédiments peuvent former de nouvelles roches sédimentaires. Enfin, le relief, le climat et les activités humaines influencent l'intensité de ce phénomène.",
    },
  ],
  fiche: {
    intro:
      "Les paysages ne sont pas figés : ils évoluent lentement sous l'action de l'érosion. L'eau, le vent et le gel fragmentent les roches, dont les fragments (sédiments) sont transportés puis déposés, avant parfois de former de nouvelles roches sédimentaires.",
    sections: [
      {
        titre: "Les agents d'érosion",
        points: [
          "L'eau (pluie, rivières, vagues) est le principal agent d'érosion",
          "Le gel-dégel fait éclater les roches en s'infiltrant dans leurs fissures (gélifraction)",
          "Le vent use les roches en régions sèches, en transportant sable et poussière",
        ],
      },
      {
        titre: "Transport et dépôt des sédiments",
        points: [
          "Les fragments de roche arrachés (sédiments) sont transportés par l'eau ou le vent",
          "Ils s'usent et s'arrondissent pendant le transport",
          "Ils se déposent quand le courant ralentit : les plus gros d'abord, les plus fins ensuite",
        ],
      },
      {
        titre: "La formation des roches sédimentaires",
        points: [
          "Les sédiments s'accumulent en couches, souvent au fond de l'eau",
          "Le poids des couches compacte les sédiments plus anciens",
          "Avec le temps, ils se soudent et forment une nouvelle roche sédimentaire (ex. grès)",
        ],
      },
      {
        titre: "Facteurs qui influencent l'érosion",
        points: [
          "Le relief : une forte pente accélère l'érosion par ruissellement",
          "Le climat : gel-dégel en montagne, vent en région sèche",
          "L'être humain : déforestation et agriculture peuvent accélérer l'érosion, certains aménagements la ralentissent",
        ],
      },
    ],
    audio:
      "Fiche de révision : géologie externe, érosion et paysages. Les paysages évoluent sans cesse, mais très lentement, sous l'action de l'érosion. L'eau est le principal agent d'érosion : la pluie, les rivières et les vagues usent et fragmentent les roches. Le gel, en s'infiltrant dans les fissures des roches et en augmentant de volume, provoque la gélifraction. Le vent, surtout en région sèche, use les roches par le transport de sable et de poussière. Les fragments de roche obtenus, appelés sédiments, sont transportés puis se déposent quand le courant ralentit, les plus gros en premier. Accumulés en couches, notamment au fond de l'eau, ces sédiments sont compactés par le poids des couches suivantes et finissent par former une nouvelle roche sédimentaire, comme le grès. L'intensité de l'érosion dépend du relief, du climat, et aussi des activités humaines comme la déforestation ou l'agriculture.",
  },
  memoCards: [
    { recto: "Qu'est-ce que l'érosion ?", verso: "La transformation lente des paysages sous l'action de l'eau, du vent et du gel." },
    { recto: "Quel est le principal agent d'érosion ?", verso: "L'eau (pluie, rivières, vagues)." },
    { recto: "Qu'est-ce que la gélifraction ?", verso: "La fragmentation d'une roche par le gel de l'eau infiltrée dans ses fissures." },
    { recto: "Comment le vent érode-t-il les roches ?", verso: "En transportant du sable et des poussières qui usent les roches par frottement, surtout en région sèche." },
    { recto: "Qu'est-ce qu'un sédiment ?", verso: "Un fragment de roche arraché par l'érosion, transporté par l'eau ou le vent." },
    { recto: "Comment se déposent les sédiments ?", verso: "Quand le courant ralentit : les plus gros se déposent en premier, les plus fins en dernier." },
    { recto: "Comment se forme une roche sédimentaire ?", verso: "Les sédiments s'accumulent en couches, sont compactés par le poids des couches suivantes puis se soudent." },
    { recto: "Cite deux facteurs qui influencent l'intensité de l'érosion.", verso: "Le relief (pente) et le climat (froid, sec) ; l'être humain peut aussi l'accélérer ou la ralentir." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le principal agent d'érosion des paysages ?",
      choix: ["Le vent", "L'eau", "Le gel", "Les animaux"],
      bonneReponse: 1,
      explication: "L'eau (pluie, rivières, vagues) est le principal agent d'érosion des paysages.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un fragment de roche arraché par l'érosion et transporté s'appelle :",
      choix: ["Un magma", "Un sédiment", "Un séisme", "Un cristal"],
      bonneReponse: 1,
      explication: "Les fragments de roche transportés par l'eau ou le vent sont appelés sédiments.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux agents d'érosion, en plus de l'eau.",
      reponse: "Le vent et le gel (gélifraction).",
      explication: "L'eau, le vent et le gel sont les trois principaux agents d'érosion des roches.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La gélifraction est due à :",
      choix: ["La chaleur", "Le gel de l'eau dans les fissures", "Le vent", "Les racines des arbres"],
      bonneReponse: 1,
      explication: "L'eau infiltrée dans les fissures gèle, augmente de volume et fait éclater la roche.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi les sédiments s'arrondissent au cours de leur transport.",
      reponse: "En étant transportés par l'eau ou le vent, les sédiments frottent contre d'autres roches et particules, ce qui les use progressivement et arrondit leurs angles.",
      explication: "L'usure due au frottement pendant le transport modifie la forme des sédiments.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quand et comment les sédiments transportés par une rivière se déposent-ils ?",
      reponse: "Ils se déposent quand le courant ralentit et perd de la force à transporter les particules ; les plus gros et les plus lourds se déposent en premier, les plus fins en dernier.",
      explication: "La vitesse du courant détermine la capacité de transport et donc le moment du dépôt.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une roche sédimentaire se forme par :",
      choix: [
        "Le refroidissement d'un magma",
        "La compaction et la soudure de sédiments accumulés",
        "La fonte d'un glacier",
        "Une éruption volcanique",
      ],
      bonneReponse: 1,
      explication: "Les sédiments accumulés en couches sont compactés par le poids des couches suivantes puis se soudent.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi l'érosion est-elle plus forte sur une pente raide que sur un terrain plat ?",
      reponse: "Sur une pente raide, l'eau de pluie ruisselle plus vite et avec plus de force, ce qui augmente sa capacité à arracher et transporter des fragments de roche.",
      explication: "La vitesse de l'eau de ruissellement dépend de la pente et influence l'intensité de l'érosion.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans quel type de région le vent est-il l'agent d'érosion dominant ?",
      choix: ["Une région très humide", "Une région désertique et sèche", "Un fond marin profond", "Une forêt tropicale"],
      bonneReponse: 1,
      explication: "En région sèche, avec peu de végétation et de pluie, le vent transporte sable et poussière qui usent les roches.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique comment la déforestation peut accélérer l'érosion d'un sol.",
      reponse: "Les racines des arbres retiennent normalement le sol et ralentissent le ruissellement. Sans végétation, le sol est directement exposé à la pluie, qui l'entraîne plus facilement : l'érosion s'accélère.",
      explication: "La végétation joue un rôle protecteur contre l'érosion en stabilisant le sol.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "On trouve du grès (roche sédimentaire) sur un plateau situé à 500 mètres d'altitude, loin de toute mer actuelle. Que peut-on en déduire sur l'histoire de ce paysage ?",
      reponse: "Cette zone a probablement été recouverte par une mer ou un lac dans le passé, où des sédiments (sable) se sont accumulés et compactés pour former le grès ; le paysage a ensuite évolué (soulèvement, retrait de l'eau) jusqu'à sa forme actuelle.",
      explication: "La présence de roches sédimentaires renseigne sur l'histoire ancienne d'un paysage.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Deux roches identiques sont exposées, l'une en climat tropical humide, l'autre en climat montagnard froid. Leur érosion sera-t-elle identique ? Justifie.",
      reponse: "Non : en climat tropical humide, l'érosion sera surtout due à l'eau de pluie et au ruissellement ; en climat montagnard froid, la gélifraction (gel-dégel) jouera un rôle majeur. Le climat détermine quel agent d'érosion domine.",
      explication: "Le climat local détermine quel agent d'érosion est le plus actif sur une roche donnée.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'érosion transforme les paysages :",
      choix: ["Instantanément", "Très lentement, sur de longues durées", "Seulement en une nuit", "Jamais"],
      bonneReponse: 1,
      explication: "L'érosion agit très lentement, sur des durées bien plus longues qu'une vie humaine.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un sédiment ?",
      reponse: "Un fragment de roche arraché par l'érosion et transporté par l'eau ou le vent.",
      explication: "Les sédiments sont ensuite déposés puis parfois compactés en nouvelle roche.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment se forme une roche sédimentaire ?",
      reponse: "Par accumulation de sédiments en couches, puis compaction et soudure sous le poids des couches suivantes.",
      explication: "C'est un processus lent qui se déroule souvent au fond de l'eau.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La gélifraction est provoquée par :",
      choix: ["Le vent", "L'augmentation de volume de l'eau qui gèle", "La chaleur du soleil", "Les vagues"],
      bonneReponse: 1,
      explication: "L'eau gelée dans une fissure augmente de volume et fait éclater la roche.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment l'être humain peut-il influencer l'érosion d'un sol ?",
      reponse: "La déforestation et certaines pratiques agricoles peuvent l'accélérer ; des aménagements comme des digues ou des haies peuvent au contraire la ralentir.",
      explication: "L'activité humaine peut aggraver ou limiter l'érosion naturelle.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Géologie externe : érosion et paysages",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est le principal agent d'érosion des paysages ?",
          choix: ["Le vent", "L'eau", "La lumière", "Le magma"],
          bonneReponse: 1,
          explication: "L'eau, sous forme de pluie, de rivières et de vagues, est le principal agent d'érosion.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne les trois grandes étapes qui mènent des roches à une nouvelle roche sédimentaire.",
          reponse: "Érosion (fragmentation de la roche) → transport des sédiments → dépôt et compaction des sédiments.",
          explication: "Ces trois étapes forment le cycle qui aboutit à une nouvelle roche sédimentaire.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le phénomène de gélifraction.",
          reponse: "L'eau s'infiltre dans les fissures d'une roche ; en gelant, elle augmente de volume et exerce une pression qui élargit la fissure, jusqu'à faire éclater la roche après plusieurs cycles de gel-dégel.",
          explication: "C'est un processus fréquent en montagne, où les températures oscillent autour de 0°C.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pendant le transport, les sédiments :",
          choix: [
            "Grossissent et deviennent plus anguleux",
            "S'usent, deviennent plus petits et arrondis",
            "Se transforment en magma",
            "Ne changent jamais de forme",
          ],
          bonneReponse: 1,
          explication: "Le frottement pendant le transport use les sédiments et arrondit leurs angles.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Sur un même relief montagneux, l'érosion est plus forte en hiver-printemps (alternance gel-dégel) qu'en été. Explique pourquoi.",
          reponse: "En hiver et au printemps, les températures oscillent souvent autour de 0°C, ce qui provoque de nombreux cycles de gel-dégel de l'eau infiltrée dans les roches : la gélifraction est alors très active, ce qui n'est pas le cas en été où les températures restent au-dessus de 0°C.",
          explication: "L'intensité de la gélifraction dépend directement de la fréquence des cycles gel-dégel.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Propose deux mesures humaines qui permettent de limiter l'érosion d'un sol agricole en pente.",
          reponse: "Planter des haies ou des arbres pour retenir le sol, et cultiver en suivant les courbes de niveau (terrasses) plutôt que dans le sens de la pente, pour ralentir le ruissellement de l'eau.",
          explication: "Ces pratiques limitent la vitesse et la force du ruissellement, principal facteur d'érosion sur une pente.",
        },
      ],
    },
    {
      titre: "Examen 2 — Géologie externe : érosion et paysages",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans quelle région le vent est-il l'agent d'érosion le plus actif ?",
          choix: ["Une forêt tropicale humide", "Une région désertique", "Un fond de mer profond", "Une zone très pluvieuse"],
          bonneReponse: 1,
          explication: "En région sèche, le vent transporte sable et poussière qui usent les roches par frottement.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une roche sédimentaire ? Donne un exemple.",
          reponse: "Une roche formée par l'accumulation, la compaction et la soudure de sédiments. Exemple : le grès, formé à partir de sable compacté.",
          explication: "Les roches sédimentaires se forment souvent au fond de l'eau, en couches successives.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi les sédiments les plus gros se déposent avant les plus fins.",
          reponse: "Quand le courant d'eau ralentit, il perd d'abord la capacité à transporter les particules les plus lourdes, qui se déposent en premier ; les particules fines, plus légères, restent en suspension plus longtemps et se déposent ensuite.",
          explication: "La force du courant nécessaire pour transporter un sédiment dépend de sa taille et de son poids.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Sur une pente forte, le ruissellement de l'eau :",
          choix: [
            "Ralentit l'érosion",
            "N'a aucun effet sur l'érosion",
            "Accélère l'érosion",
            "Transforme la roche en magma",
          ],
          bonneReponse: 2,
          explication: "Plus la pente est forte, plus l'eau ruisselle vite et fort, ce qui augmente l'érosion.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "On trouve des galets bien arrondis dans le lit d'une rivière en plaine, alors que les blocs de roche en montagne, en amont, sont anguleux. Explique cette différence.",
          reponse: "Les blocs de roche fraîchement arrachés en montagne sont anguleux. En étant transportés par la rivière vers la plaine, ils frottent contre d'autres roches et le lit de la rivière, ce qui les use progressivement et les arrondit en galets.",
          explication: "La distance et la durée de transport influencent le degré d'usure et d'arrondissement des sédiments.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un géologue trouve une roche sédimentaire contenant des coquillages marins au sommet d'une montagne, loin de toute mer. Que peut-il en conclure sur l'histoire de ce paysage ?",
          reponse: "Cette zone était autrefois recouverte par la mer, où se sont accumulés des sédiments contenant des coquillages, formant la roche sédimentaire. Le paysage a ensuite évolué, probablement soulevé, jusqu'à se retrouver en altitude, loin de la mer actuelle.",
          explication: "La composition d'une roche sédimentaire renseigne sur l'environnement ancien dans lequel elle s'est formée.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un paysage évolue lentement sous l'action de l'érosion : eau, vent et gel fragmentent les roches.",
    "La gélifraction est due au gel de l'eau infiltrée dans les fissures des roches, qui les fait éclater.",
    "Les sédiments (fragments de roche) sont transportés puis se déposent quand le courant ralentit.",
    "Les sédiments accumulés et compactés en couches forment de nouvelles roches sédimentaires (ex. grès).",
    "L'intensité de l'érosion dépend du relief (pente), du climat (froid, sec) et des activités humaines.",
    "Erreur à éviter : croire qu'un paysage est figé — il se transforme en permanence, mais très lentement.",
  ],
};

export default chapitre;
