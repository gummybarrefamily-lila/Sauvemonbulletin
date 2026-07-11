import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "melanges-corps-purs",
  titre: "Mélanges et corps purs",
  matiere: "physique-chimie",
  niveau: "5eme",
  description:
    "Distinguer un corps pur d'un mélange, reconnaître un mélange homogène ou hétérogène, comprendre la solubilité et la miscibilité, et connaître les techniques de séparation : décantation, filtration, distillation.",
  objectifs: [
    "Différencier un corps pur d'un mélange",
    "Distinguer mélange homogène et mélange hétérogène",
    "Connaître le vocabulaire de la dissolution : soluté, solvant, solution, saturation",
    "Savoir si deux liquides sont miscibles ou non miscibles",
    "Choisir la technique adaptée pour séparer un mélange : décantation, filtration ou distillation",
  ],
  slides: [
    {
      titre: "Corps pur ou mélange ?",
      illustration: "🧪",
      visuel: "1 espèce chimique = corps pur",
      contenu: [
        "Un corps pur ne contient qu'une seule espèce chimique",
        "Exemples : eau distillée, dioxygène, sucre pur",
        "Un mélange contient plusieurs espèces chimiques",
        "Exemples : eau salée, air, eau boueuse",
      ],
      voixOff:
        "En chimie, on classe la matière en deux grandes familles. Un corps pur ne contient qu'une seule espèce chimique, comme l'eau distillée, le dioxygène ou le sucre pur. Un mélange, au contraire, contient plusieurs espèces chimiques différentes, comme l'eau salée, l'air que tu respires ou l'eau boueuse d'une flaque.",
    },
    {
      titre: "Reconnaître un corps pur : transparence et palier de température",
      illustration: "🌡️",
      visuel: "Palier constant = corps pur",
      contenu: [
        "⚠️ Une eau peut être transparente et être un mélange (ex : l'eau minérale, avec des sels dissous)",
        "L'eau distillée, elle, ne contient rien d'autre que de l'eau : c'est un corps pur",
        "Un corps pur a des températures de fusion et d'ébullition bien définies, avec un palier constant",
        "Un mélange n'a pas de palier net : sa température continue de varier",
      ],
      voixOff:
        "Attention à un piège classique : une eau transparente n'est pas forcément un corps pur ! L'eau minérale, par exemple, est parfaitement transparente, mais elle contient des sels minéraux dissous : c'est un mélange. L'eau distillée, elle, ne contient rien d'autre que des molécules d'eau : c'est un corps pur. Pour vérifier la pureté d'une substance, on peut aussi observer sa température de changement d'état : un corps pur possède un palier constant, alors qu'un mélange n'a pas de palier net.",
    },
    {
      titre: "Mélange homogène",
      illustration: "🥃",
      visuel: "On ne distingue rien à l'œil nu",
      contenu: [
        "Dans un mélange homogène, on ne distingue pas les constituants à l'œil nu",
        "Exemples : eau salée, eau sucrée, l'air",
        "L'aspect est uniforme dans tout le mélange",
        "On dit aussi que c'est une solution",
        "L'air est un mélange homogène de gaz : environ 78 % de diazote et 21 % de dioxygène",
      ],
      voixOff:
        "Un mélange homogène est un mélange dans lequel on ne distingue pas les différents constituants à l'œil nu : l'aspect est uniforme partout. C'est le cas de l'eau salée, de l'eau sucrée, ou encore de l'air que nous respirons, qui est un mélange homogène de gaz composé d'environ soixante-dix-huit pour cent de diazote et vingt et un pour cent de dioxygène. On appelle aussi ce type de mélange une solution.",
    },
    {
      titre: "Mélange hétérogène",
      illustration: "🫙",
      visuel: "On distingue les constituants",
      contenu: [
        "Dans un mélange hétérogène, on distingue les constituants à l'œil nu",
        "Exemples : eau et huile, eau et sable, eau boueuse",
        "L'aspect n'est pas uniforme : on voit des phases ou des particules",
        "Avec le temps, les constituants peuvent se séparer",
      ],
      voixOff:
        "Un mélange hétérogène est un mélange dans lequel on distingue les différents constituants à l'œil nu. Quand on mélange de l'eau et de l'huile, ou de l'eau et du sable, on voit clairement deux parties différentes : ce n'est pas uniforme. C'est aussi le cas de l'eau boueuse, où l'on distingue des particules en suspension.",
    },
    {
      titre: "Solubilité : soluté, solvant, solution",
      illustration: "🧂",
      visuel: "Soluté + Solvant → Solution",
      contenu: [
        "Le soluté est la substance qui se dissout (solide, liquide ou gaz)",
        "Le solvant est le liquide qui dissout le soluté (souvent l'eau)",
        "La solution est le mélange homogène obtenu",
        "La solubilité est limitée : au-delà, le mélange est saturé et des cristaux restent visibles",
      ],
      voixOff:
        "Quand on dissout du sucre dans de l'eau, le sucre est le soluté, l'eau est le solvant, et le mélange obtenu est appelé solution. Mais la solubilité d'un soluté dans un solvant n'est pas infinie : elle est limitée. Si on ajoute trop de sucre, il finit par ne plus se dissoudre : la solution est saturée, et on observe des cristaux au fond du récipient.",
    },
    {
      titre: "Miscibilité de deux liquides",
      illustration: "🫧",
      visuel: "Eau + huile = non miscibles",
      contenu: [
        "Deux liquides miscibles forment un mélange homogène (eau + alcool)",
        "Deux liquides non miscibles forment un mélange hétérogène (eau + huile)",
        "Les liquides non miscibles se séparent en deux phases : c'est la décantation",
        "Le liquide le moins dense se place au-dessus",
      ],
      voixOff:
        "Deux liquides sont dits miscibles quand ils se mélangent complètement pour former un mélange homogène, comme l'eau et l'alcool. Ils sont non miscibles quand ils ne se mélangent pas et restent séparés, comme l'eau et l'huile. Dans ce cas, les deux liquides forment deux phases distinctes, appelées la décantation, avec le liquide le moins dense qui se place toujours au-dessus.",
    },
    {
      titre: "Séparer un mélange hétérogène",
      illustration: "⚗️",
      visuel: "Décantation • Filtration",
      contenu: [
        "Décantation : on laisse reposer, les constituants se séparent selon leur densité",
        "Filtration : on fait passer le mélange à travers un filtre",
        "La filtration retient le solide non dissous, le liquide passe à travers",
        "Exemple : filtrer de l'eau boueuse avec un filtre en papier",
      ],
      voixOff:
        "Pour séparer un mélange hétérogène, deux techniques sont utilisées en classe. La décantation consiste à laisser reposer le mélange : les constituants se séparent selon leur densité, comme l'eau et l'huile. La filtration consiste à faire passer le mélange à travers un filtre : le solide non dissous est retenu par le filtre, tandis que le liquide passe à travers, comme quand on filtre de l'eau boueuse.",
    },
    {
      titre: "Séparer un mélange homogène : la distillation",
      illustration: "🔥",
      visuel: "Chauffage → Évaporation → Condensation",
      contenu: [
        "La distillation sépare les constituants d'un mélange homogène",
        "On chauffe le mélange : le constituant le plus volatil s'évapore en premier",
        "La vapeur est ensuite refroidie et se condense : on récupère un liquide pur",
        "Exemple : séparer l'alcool de l'eau, ou obtenir de l'eau pure à partir d'eau salée",
      ],
      voixOff:
        "Pour séparer les constituants d'un mélange homogène, on utilise la distillation. On chauffe le mélange : le constituant qui a la température d'ébullition la plus basse s'évapore en premier. Sa vapeur est ensuite refroidie dans un tube, ce qui la fait se condenser en liquide, que l'on récupère à part. C'est ainsi que l'on peut séparer l'alcool de l'eau, ou obtenir de l'eau pure à partir d'eau salée.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Corps pur : une seule espèce chimique, températures de changement d'état bien définies",
        "Mélange homogène (invisible à l'œil nu) ou hétérogène (constituants visibles)",
        "Soluté + solvant = solution ; deux liquides sont miscibles ou non miscibles",
        "Décantation et filtration séparent un mélange hétérogène, la distillation sépare un mélange homogène",
      ],
      voixOff:
        "Résumons. Un corps pur ne contient qu'une seule espèce chimique et possède des températures de changement d'état bien définies, avec un palier. Un mélange contient plusieurs espèces chimiques : il est homogène si l'on ne distingue rien à l'œil nu, hétérogène si l'on distingue les constituants. Un soluté dissous dans un solvant forme une solution, et deux liquides peuvent être miscibles ou non miscibles. Enfin, pour séparer un mélange hétérogène on utilise la décantation ou la filtration, et pour séparer un mélange homogène on utilise la distillation. Bravo, tu maîtrises maintenant les mélanges et les corps purs !",
    },
  ],
  fiche: {
    intro:
      "La matière qui nous entoure est soit un corps pur, constitué d'une seule espèce chimique, soit un mélange, constitué de plusieurs espèces chimiques. On apprend ici à les distinguer et à séparer les constituants d'un mélange.",
    sections: [
      {
        titre: "Corps pur et mélange",
        points: [
          "Corps pur : une seule espèce chimique (eau distillée, dioxygène, sucre pur)",
          "Un corps pur a des températures de fusion et d'ébullition bien définies, avec un palier constant",
          "Mélange : plusieurs espèces chimiques (eau salée, air, eau boueuse)",
          "Un mélange n'a pas de palier net de température lors d'un changement d'état",
          "Piège à éviter : transparent ne signifie pas pur (l'eau minérale est transparente mais c'est un mélange)",
        ],
      },
      {
        titre: "Mélange homogène ou hétérogène",
        points: [
          "Homogène : on ne distingue pas les constituants à l'œil nu (eau salée, eau sucrée, air)",
          "Hétérogène : on distingue les constituants à l'œil nu (eau et huile, eau et sable, eau boueuse)",
          "Un mélange homogène est aussi appelé une solution",
        ],
      },
      {
        titre: "Solubilité et miscibilité",
        points: [
          "Soluté : substance qui se dissout ; solvant : liquide qui dissout (souvent l'eau) ; solution : mélange homogène obtenu",
          "La solubilité est limitée : au-delà, la solution est saturée et des cristaux apparaissent",
          "Deux liquides miscibles forment un mélange homogène (eau + alcool)",
          "Deux liquides non miscibles forment un mélange hétérogène et se séparent en deux phases : le moins dense au-dessus (eau + huile)",
        ],
      },
      {
        titre: "Techniques de séparation des mélanges",
        points: [
          "Décantation : on laisse reposer, les constituants se séparent selon leur densité",
          "Filtration : le mélange passe à travers un filtre, qui retient le solide non dissous",
          "Distillation : on chauffe le mélange homogène, le constituant le plus volatil s'évapore puis se condense, ce qui permet de le récupérer séparément",
        ],
      },
    ],
    audio:
      "Fiche de révision : mélanges et corps purs. Un corps pur ne contient qu'une seule espèce chimique, comme l'eau distillée, le dioxygène ou le sucre pur. Il possède des températures de fusion et d'ébullition bien définies, avec un palier de température constant pendant le changement d'état. Un mélange, lui, contient plusieurs espèces chimiques, comme l'eau salée, l'air ou l'eau boueuse, et n'a pas de palier net. Attention, une eau transparente n'est pas forcément pure : l'eau minérale est transparente mais c'est un mélange, car elle contient des sels dissous. Un mélange est homogène quand on ne distingue pas ses constituants à l'œil nu, comme l'eau salée, l'eau sucrée ou l'air : on parle alors de solution. Il est hétérogène quand on distingue ses constituants, comme l'eau et l'huile, ou l'eau et le sable. Dans une solution, le soluté est la substance qui se dissout, le solvant est le liquide qui la dissout, souvent l'eau. La solubilité d'un soluté est limitée : au-delà d'une certaine quantité, la solution est saturée et des cristaux apparaissent. Deux liquides sont miscibles s'ils se mélangent complètement, comme l'eau et l'alcool, ou non miscibles s'ils restent séparés en deux phases, comme l'eau et l'huile, le liquide le moins dense se plaçant au-dessus. Pour séparer un mélange hétérogène, on utilise la décantation, qui consiste à laisser reposer le mélange, ou la filtration, qui retient le solide non dissous grâce à un filtre. Pour séparer un mélange homogène, on utilise la distillation : on chauffe le mélange, le constituant le plus volatil s'évapore, puis sa vapeur se condense pour donner un liquide que l'on récupère séparément.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un corps pur ?", verso: "Une substance constituée d'une seule espèce chimique (ex : eau distillée, dioxygène, sucre pur)." },
    { recto: "Qu'est-ce qu'un mélange ?", verso: "Une substance constituée de plusieurs espèces chimiques (ex : eau salée, air, eau boueuse)." },
    { recto: "Différence entre mélange homogène et hétérogène ?", verso: "Homogène : on ne distingue pas les constituants à l'œil nu. Hétérogène : on les distingue." },
    { recto: "Soluté, solvant, solution : définis chacun des trois mots.", verso: "Soluté : ce qui se dissout. Solvant : ce qui dissout (souvent l'eau). Solution : le mélange homogène obtenu." },
    { recto: "Que veut dire 'solution saturée' ?", verso: "On a dissous la quantité maximale de soluté possible : au-delà, il ne se dissout plus et forme des cristaux visibles." },
    { recto: "Miscibles vs non miscibles : donne un exemple de chaque.", verso: "Miscibles (mélange homogène) : eau + alcool. Non miscibles (deux phases séparées) : eau + huile, le moins dense reste au-dessus." },
    { recto: "Quelle technique sépare un mélange hétérogène liquide-solide non dissous ?", verso: "La filtration : le filtre retient le solide, le liquide passe à travers." },
    { recto: "Quelle technique sépare les constituants d'un mélange homogène ?", verso: "La distillation : chauffage, évaporation du constituant le plus volatil, puis condensation." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'eau distillée est :",
      choix: ["un mélange homogène", "un mélange hétérogène", "un corps pur", "un solvant impur"],
      bonneReponse: 2,
      explication: "L'eau distillée ne contient qu'une seule espèce chimique, l'eau : c'est un corps pur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'eau salée est :",
      choix: ["un corps pur", "un mélange hétérogène", "un mélange homogène", "un solide"],
      bonneReponse: 2,
      explication: "On ne distingue pas le sel dissous à l'œil nu dans l'eau salée : c'est un mélange homogène.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne un exemple de mélange hétérogène et explique pourquoi c'en est un.",
      reponse: "Eau et sable : on distingue clairement le sable et l'eau à l'œil nu, ce n'est pas uniforme.",
      explication: "Un mélange hétérogène se reconnaît car on distingue ses constituants à l'œil nu, contrairement à un mélange homogène.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans une solution de sucre dans l'eau, l'eau est appelée :",
      choix: ["le soluté", "le solvant", "la solution saturée", "le corps pur"],
      bonneReponse: 1,
      explication: "L'eau est le liquide qui dissout le sucre : c'est le solvant. Le sucre, lui, est le soluté.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "L'eau minérale est-elle un corps pur ? Justifie.",
      reponse: "Non, c'est un mélange, car elle contient des sels minéraux dissous en plus de l'eau.",
      explication: "L'eau minérale laisse un résidu à l'évaporation, contrairement à l'eau distillée qui est un corps pur.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "On verse de l'huile dans de l'eau et on laisse reposer. On observe :",
      choix: ["un mélange homogène", "deux phases séparées, l'huile au-dessus", "deux phases séparées, l'huile en dessous", "une dissolution complète"],
      bonneReponse: 1,
      explication: "L'eau et l'huile sont non miscibles : elles se séparent en deux phases par décantation, et l'huile, moins dense, se place au-dessus.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle technique utiliser pour séparer de l'eau boueuse (eau + particules de terre non dissoutes) ? Décris le principe.",
      reponse: "La filtration : on fait passer le mélange à travers un filtre en papier, qui retient les particules de terre tandis que l'eau passe à travers.",
      explication: "La filtration sépare un solide non dissous d'un liquide grâce à un filtre.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "On ajoute du sel dans un verre d'eau jusqu'à ce que des cristaux restent visibles au fond, même en remuant. La solution est alors :",
      choix: ["diluée", "saturée", "hétérogène dès le départ", "un corps pur"],
      bonneReponse: 1,
      explication: "Quand on ne peut plus dissoudre de soluté et que des cristaux restent visibles, la solution est saturée : la solubilité a une limite.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment peut-on prouver qu'une eau du robinet n'est pas un corps pur, sans matériel de laboratoire compliqué ?",
      reponse: "En faisant évaporer une petite quantité d'eau du robinet : un résidu (traces de calcaire, sels) reste au fond du récipient, ce qui prouve que ce n'est pas de l'eau pure.",
      explication: "L'eau distillée, corps pur, ne laisse aucun résidu à l'évaporation, contrairement à l'eau du robinet qui contient des substances dissoutes.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "On veut séparer l'eau et l'alcool d'un mélange homogène. La technique adaptée est :",
      choix: ["la décantation", "la filtration", "la distillation", "l'aimantation"],
      bonneReponse: 2,
      explication: "L'eau et l'alcool forment un mélange homogène : on les sépare grâce à la distillation, qui exploite leurs températures d'ébullition différentes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique le principe de la distillation en trois étapes, en citant le phénomène physique de chaque étape.",
      reponse: "1) On chauffe le mélange : le constituant ayant la température d'ébullition la plus basse s'évapore (vaporisation). 2) La vapeur monte dans un tube et est refroidie. 3) Elle se condense (liquéfaction) et on récupère un liquide, séparé du reste du mélange.",
      explication: "La distillation enchaîne un chauffage, une vaporisation sélective, puis une liquéfaction par refroidissement, pour séparer les constituants d'un mélange homogène.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "L'air est-il un corps pur ou un mélange ? Précise sa composition principale et le type de mélange.",
      reponse: "L'air est un mélange homogène, composé d'environ 78 % de diazote et 21 % de dioxygène, avec d'autres gaz en faible quantité (dioxyde de carbone, vapeur d'eau...).",
      explication: "On ne distingue pas les différents gaz de l'air à l'œil nu : c'est donc un mélange homogène, et non un corps pur.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un corps pur est constitué de :",
      choix: ["plusieurs espèces chimiques", "une seule espèce chimique", "toujours un liquide", "toujours un solide"],
      bonneReponse: 1,
      explication: "Un corps pur ne contient qu'une seule espèce chimique, quel que soit son état physique.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite un exemple de mélange homogène et un exemple de mélange hétérogène.",
      reponse: "Homogène : eau salée. Hétérogène : eau et sable.",
      explication: "Dans le mélange homogène, on ne distingue pas les constituants ; dans le mélange hétérogène, on les distingue.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Deux liquides non miscibles :",
      choix: ["se mélangent complètement", "restent séparés en deux phases", "forment toujours un corps pur", "sont toujours colorés"],
      bonneReponse: 1,
      explication: "Des liquides non miscibles, comme l'eau et l'huile, ne se mélangent pas et restent séparés en deux phases.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle technique de séparation choisir pour un mélange homogène comme de l'eau salée, si l'on veut récupérer de l'eau pure ?",
      reponse: "La distillation, car le sel et l'eau forment un mélange homogène qu'on ne peut pas séparer par simple filtration.",
      explication: "La distillation utilise la différence de température d'ébullition entre l'eau et le sel pour séparer les deux constituants.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi dit-on que le palier de température lors d'un changement d'état est la signature d'un corps pur ?",
      reponse: "Parce qu'un corps pur change d'état à une température fixe et constante, alors qu'un mélange n'a pas de palier net et sa température continue de varier.",
      explication: "Ce palier permet d'identifier une substance et de vérifier si elle est pure.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Mélanges et corps purs",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le dioxygène pur est :",
          choix: ["un mélange homogène", "un mélange hétérogène", "un corps pur", "une solution saturée"],
          bonneReponse: 2,
          explication: "Le dioxygène pur ne contient qu'une seule espèce chimique : c'est un corps pur.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui distingue un mélange homogène d'un mélange hétérogène ?",
          reponse: "Dans un mélange homogène, on ne distingue pas les constituants à l'œil nu ; dans un mélange hétérogène, on les distingue.",
          explication: "C'est le critère visuel qui permet de classer un mélange en homogène ou hétérogène.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "On mélange de l'eau et de l'huile puis on laisse reposer. Ce phénomène de séparation s'appelle :",
          choix: ["la filtration", "la décantation", "la distillation", "la dissolution"],
          bonneReponse: 1,
          explication: "Les liquides non miscibles se séparent en deux phases en reposant : c'est la décantation.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "On verse du sucre dans un verre d'eau et on remue : tout se dissout. On continue d'ajouter du sucre jusqu'à ce qu'il en reste au fond, non dissous. Comment appelle-t-on cet état de la solution ?",
          reponse: "La solution est saturée : la solubilité du sucre dans l'eau a atteint sa limite.",
          explication: "La solubilité d'un soluté dans un solvant est limitée ; au-delà, le soluté ne se dissout plus.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite les deux techniques permettant de séparer un mélange hétérogène et donne le principe de chacune.",
          reponse: "La décantation (laisser reposer, les constituants se séparent selon leur densité) et la filtration (le mélange passe à travers un filtre qui retient le solide non dissous).",
          explication: "Ces deux techniques s'appliquent aux mélanges hétérogènes, contrairement à la distillation réservée aux mélanges homogènes.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "On chauffe de l'eau salée jusqu'à ébullition et on note la température. Elle dépasse 100 °C et il n'y a pas de palier net. Que peut-on en déduire sur l'eau salée ?",
          reponse: "L'eau salée n'est pas un corps pur : c'est un mélange. L'absence de palier net à température constante est la preuve qu'il ne s'agit pas d'une substance pure.",
          explication: "Un corps pur possède un palier de température net lors d'un changement d'état ; un mélange n'en a pas.",
        },
      ],
    },
    {
      titre: "Examen 2 — Mélanges et corps purs",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'air que nous respirons est :",
          choix: ["un corps pur", "un mélange hétérogène", "un mélange homogène", "uniquement du dioxygène"],
          bonneReponse: 2,
          explication: "L'air est un mélange homogène de plusieurs gaz : diazote, dioxygène, et d'autres gaz en faible quantité.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans une solution d'eau sucrée, nomme le soluté et le solvant.",
          reponse: "Le soluté est le sucre, le solvant est l'eau.",
          explication: "Le soluté est la substance qui se dissout, le solvant est le liquide qui la dissout.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Deux liquides miscibles, comme l'eau et l'alcool, forment :",
          choix: ["un mélange hétérogène", "un mélange homogène", "un corps pur", "deux phases séparées"],
          bonneReponse: 1,
          explication: "Des liquides miscibles se mélangent complètement et forment un mélange homogène, sans phases séparées.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une eau minérale, bien que transparente, n'est pas un corps pur. Explique pourquoi, et propose une expérience simple pour le vérifier.",
          reponse: "Elle contient des sels minéraux dissous, donc plusieurs espèces chimiques : c'est un mélange. On peut le vérifier en faisant évaporer un peu de cette eau : un résidu reste au fond du récipient.",
          explication: "La transparence ne garantit pas la pureté ; seul un test comme l'évaporation ou la mesure du palier de température permet de vérifier si une eau est un corps pur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi utilise-t-on la distillation, et non la filtration, pour séparer l'eau et le sel dissous dans l'eau de mer ?",
          reponse: "Parce que l'eau salée est un mélange homogène : le sel est dissous et ne peut pas être retenu par un filtre. Seule la distillation, qui utilise les différentes températures d'ébullition, permet de les séparer.",
          explication: "La filtration ne sépare que les solides non dissous d'un liquide ; elle est inefficace sur un soluté dissous.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Décris les étapes de la distillation permettant d'obtenir de l'eau pure à partir d'eau salée, en nommant les changements d'état mis en jeu.",
          reponse: "On chauffe l'eau salée : l'eau, dont la température d'ébullition est plus basse que celle du sel, s'évapore (vaporisation). Le sel reste dans le récipient de chauffe. La vapeur d'eau est ensuite refroidie dans un tube et se condense (liquéfaction), ce qui permet de récupérer de l'eau pure.",
          explication: "La distillation enchaîne une vaporisation sélective du constituant le plus volatil puis une liquéfaction par refroidissement.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un corps pur ne contient qu'une seule espèce chimique et possède des températures de changement d'état bien définies, avec un palier constant.",
    "Un mélange contient plusieurs espèces chimiques ; il est homogène si l'on ne distingue pas ses constituants à l'œil nu, hétérogène si on les distingue.",
    "Transparent ne veut pas dire pur : l'eau minérale est transparente mais reste un mélange (sels dissous, résidu à l'évaporation).",
    "Dans une solution, le soluté se dissout dans le solvant ; la solubilité est limitée, au-delà la solution est saturée.",
    "Deux liquides sont miscibles (mélange homogène) ou non miscibles (mélange hétérogène, séparation par décantation, le moins dense au-dessus).",
    "Pour séparer un mélange hétérogène : décantation ou filtration. Pour séparer un mélange homogène : distillation.",
  ],
};

export default chapitre;
