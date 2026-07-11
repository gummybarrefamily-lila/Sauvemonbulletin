import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "genetique",
  titre: "Génétique : ADN, gènes et chromosomes",
  matiere: "svt",
  niveau: "3eme",
  description:
    "Comprendre où se trouve l'information génétique (noyau, chromosomes, ADN), lire un caryotype humain, distinguer gènes et allèles, comprendre la mitose et l'unicité génétique de chaque individu.",
  objectifs: [
    "Localiser l'information génétique : noyau, chromosomes, ADN",
    "Lire un caryotype humain (23 paires, chromosomes sexuels XX/XY)",
    "Distinguer un gène de ses allèles et comprendre leur rôle dans les caractères",
    "Comprendre que la division cellulaire (mitose) conserve l'information génétique",
    "Expliquer pourquoi chaque individu est génétiquement unique",
  ],
  slides: [
    {
      titre: "Où est l'information génétique ?",
      illustration: "🔬",
      visuel: "cellule → noyau → ADN",
      contenu: [
        "Le corps est fait de milliards de cellules",
        "Chaque cellule possède un noyau",
        "Le noyau contient l'information génétique",
        "Cette information est portée par l'ADN",
      ],
      voixOff:
        "Notre corps est constitué de milliards de cellules. Au cœur de presque chacune d'elles se trouve un noyau. C'est là qu'est rangée l'information génétique, une sorte de « notice » de fabrication et de fonctionnement de l'organisme. Cette information est portée par une molécule : l'ADN.",
    },
    {
      titre: "Du noyau aux chromosomes",
      illustration: "🧬",
      visuel: "noyau → chromosomes → ADN",
      contenu: [
        "Dans le noyau, l'ADN est organisé en chromosomes",
        "Un chromosome est une molécule d'ADN très compactée",
        "L'ADN est le support de l'information génétique",
        "On peut observer les chromosomes au microscope",
      ],
      voixOff:
        "À l'intérieur du noyau, l'ADN n'est pas en vrac : il est organisé en chromosomes. Un chromosome, c'est en réalité une longue molécule d'ADN repliée et compactée. L'ADN est le support de l'information génétique. Lors de certaines étapes, les chromosomes deviennent bien visibles au microscope.",
    },
    {
      titre: "Le caryotype humain",
      illustration: "📇",
      visuel: "46 chromosomes = 23 paires",
      contenu: [
        "Le caryotype est la photo classée des chromosomes",
        "L'être humain possède 46 chromosomes",
        "Ils sont regroupés en 23 paires",
        "Chaque paire : un chromosome de chaque parent",
      ],
      voixOff:
        "Pour étudier les chromosomes d'une personne, on réalise un caryotype : une photographie où les chromosomes sont classés et rangés. Chez l'être humain, on compte quarante-six chromosomes, regroupés en vingt-trois paires. Dans chaque paire, un chromosome vient de la mère et l'autre du père.",
    },
    {
      titre: "Les chromosomes sexuels",
      illustration: "⚧️",
      visuel: "XX (fille) / XY (garçon)",
      contenu: [
        "La 23ᵉ paire détermine le sexe biologique",
        "Deux chromosomes X (XX) : sexe féminin",
        "Un X et un Y (XY) : sexe masculin",
        "Les 22 autres paires sont identiques chez tous",
      ],
      voixOff:
        "Parmi les vingt-trois paires, la vingt-troisième est particulière : c'est elle qui détermine le sexe biologique. Deux chromosomes X, c'est-à-dire XX, correspondent au sexe féminin ; un chromosome X et un chromosome Y, c'est-à-dire XY, correspondent au sexe masculin. Les vingt-deux autres paires sont du même type chez tout le monde.",
    },
    {
      titre: "Les gènes",
      illustration: "📖",
      visuel: "chromosome = livre, gène = page",
      contenu: [
        "Un chromosome porte de très nombreux gènes",
        "Un gène est une portion d'ADN",
        "Chaque gène gouverne un caractère (ex. groupe sanguin)",
        "L'ensemble des gènes forme le programme génétique",
      ],
      voixOff:
        "Sur chaque chromosome se trouvent de très nombreux gènes. Un gène est une petite portion d'ADN qui contient l'information pour un caractère précis, comme le groupe sanguin ou la couleur des yeux. Si le chromosome est un livre, chaque gène en est une page qui donne une instruction particulière.",
    },
    {
      titre: "Les allèles",
      illustration: "🎨",
      visuel: "même gène → versions différentes",
      contenu: [
        "Un gène peut exister en plusieurs versions : les allèles",
        "Ex : le gène du groupe sanguin a les allèles A, B et O",
        "On possède deux allèles par gène (un par chromosome de la paire)",
        "Les allèles expliquent les différences entre individus",
      ],
      voixOff:
        "Un même gène peut exister en plusieurs versions, appelées allèles. Par exemple, le gène du groupe sanguin possède les allèles A, B et O. Comme les chromosomes vont par paires, on possède deux allèles pour chaque gène : un sur chaque chromosome. Ce sont ces différences d'allèles qui expliquent que les individus ne sont pas identiques.",
    },
    {
      titre: "La division cellulaire (mitose)",
      illustration: "➗",
      visuel: "1 cellule → 2 cellules identiques",
      contenu: [
        "Pour grandir et se réparer, les cellules se divisent",
        "La mitose donne deux cellules filles identiques",
        "L'ADN est copié avant la division",
        "Chaque cellule fille reçoit la même information génétique",
      ],
      voixOff:
        "Pour grandir, se renouveler et cicatriser, nos cellules se multiplient. Cette division s'appelle la mitose : une cellule donne deux cellules filles identiques. Avant de se diviser, la cellule copie tout son ADN, de sorte que chaque cellule fille reçoit exactement la même information génétique que la cellule d'origine.",
    },
    {
      titre: "Une information conservée",
      illustration: "🗂️",
      visuel: "copie fidèle de l'ADN",
      contenu: [
        "Toutes les cellules du corps ont la même information génétique",
        "La mitose conserve l'information au fil des divisions",
        "C'est pourquoi tes cellules gardent la même « notice »",
        "Des erreurs de copie (mutations) restent rares",
      ],
      voixOff:
        "Grâce à la mitose, l'information génétique se conserve : toutes les cellules de ton corps possèdent la même « notice », copiée fidèlement à chaque division. C'est ce qui fait qu'une cellule de peau et une cellule de foie contiennent la même information. Des erreurs de copie, appelées mutations, peuvent survenir, mais elles restent rares.",
    },
    {
      titre: "Chacun est unique",
      illustration: "🌟",
      visuel: "combinaison d'allèles = individu unique",
      contenu: [
        "Chaque personne reçoit une moitié de ses chromosomes de chaque parent",
        "Les combinaisons d'allèles possibles sont innombrables",
        "Sauf vrais jumeaux, chaque individu est génétiquement unique",
        "Cette unicité fait la diversité des êtres humains",
      ],
      voixOff:
        "À la formation d'un individu, chaque parent transmet la moitié de ses chromosomes. Comme les combinaisons d'allèles possibles sont innombrables, chaque personne reçoit un assortiment génétique qui lui est propre. À l'exception des vrais jumeaux, chaque individu est génétiquement unique : c'est ce qui fait toute la diversité de l'espèce humaine.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Information génétique : noyau → chromosomes → ADN",
        "Caryotype humain : 46 chromosomes, 23 paires, XX ou XY",
        "Gène = portion d'ADN ; allèles = versions d'un gène",
        "Mitose : deux cellules identiques ; chaque individu est unique",
      ],
      voixOff:
        "Résumons. L'information génétique se trouve dans le noyau, portée par l'ADN organisé en chromosomes. Le caryotype humain compte quarante-six chromosomes en vingt-trois paires, dont la paire sexuelle XX ou XY. Un gène est une portion d'ADN, qui existe en plusieurs versions : les allèles. La mitose produit deux cellules identiques et conserve l'information, et pourtant, grâce aux combinaisons d'allèles, chaque individu est unique. Bravo, tu es prêt pour le brevet sur la génétique !",
    },
  ],
  fiche: {
    intro:
      "L'information génétique est contenue dans le noyau des cellules, portée par l'ADN organisé en chromosomes. Chez l'être humain, le caryotype compte 46 chromosomes (23 paires). Les gènes, portions d'ADN, existent en plusieurs versions (allèles). La division cellulaire conserve cette information, et pourtant chaque individu est génétiquement unique.",
    sections: [
      {
        titre: "Localisation de l'information génétique",
        points: [
          "L'information génétique est dans le noyau des cellules",
          "Elle est portée par l'ADN, organisé en chromosomes",
          "Un chromosome est une molécule d'ADN compactée",
        ],
      },
      {
        titre: "Le caryotype humain",
        points: [
          "Le caryotype est la photographie classée des chromosomes",
          "L'être humain possède 46 chromosomes, soit 23 paires",
          "Dans chaque paire, un chromosome vient de chaque parent",
          "La 23ᵉ paire détermine le sexe : XX (féminin) ou XY (masculin)",
        ],
      },
      {
        titre: "Gènes et allèles",
        points: [
          "Un gène est une portion d'ADN gouvernant un caractère",
          "Un gène existe en plusieurs versions appelées allèles (ex. A, B, O)",
          "On possède deux allèles par gène, un sur chaque chromosome de la paire",
          "Les allèles expliquent les différences entre individus",
        ],
      },
      {
        titre: "La division cellulaire (mitose)",
        points: [
          "La mitose produit deux cellules filles identiques",
          "L'ADN est copié avant la division",
          "Chaque cellule fille reçoit la même information génétique",
          "La mitose permet la croissance, le renouvellement et la cicatrisation",
        ],
      },
      {
        titre: "L'unicité génétique",
        points: [
          "Chaque parent transmet la moitié de ses chromosomes",
          "Les combinaisons d'allèles possibles sont innombrables",
          "Sauf vrais jumeaux, chaque individu est génétiquement unique",
        ],
      },
    ],
    audio:
      "Fiche de révision : ADN, gènes et chromosomes. L'information génétique est contenue dans le noyau de chaque cellule ; elle est portée par l'ADN, qui s'organise en chromosomes. On les observe grâce au caryotype, une photographie où les chromosomes sont classés : l'être humain en possède quarante-six, soit vingt-trois paires, dont un chromosome de chaque parent. La vingt-troisième paire détermine le sexe : XX pour le sexe féminin, XY pour le sexe masculin. Sur les chromosomes se trouvent les gènes, des portions d'ADN qui gouvernent les caractères ; un gène existe en plusieurs versions appelées allèles, et l'on en possède deux par gène. Pour grandir et se renouveler, les cellules se divisent par mitose : après avoir copié son ADN, une cellule donne deux cellules filles identiques, ce qui conserve l'information génétique. Pourtant, comme les combinaisons d'allèles sont innombrables, chaque individu, sauf les vrais jumeaux, est génétiquement unique.",
  },
  memoCards: [
    { recto: "Où se trouve l'information génétique dans une cellule ?", verso: "Dans le noyau, portée par l'ADN organisé en chromosomes." },
    { recto: "Qu'est-ce qu'un chromosome ?", verso: "Une molécule d'ADN compactée ; c'est le support de l'information génétique." },
    { recto: "Combien de chromosomes possède l'être humain ?", verso: "46 chromosomes, regroupés en 23 paires." },
    { recto: "Qu'est-ce qu'un caryotype ?", verso: "La photographie des chromosomes d'une cellule, classés par paires." },
    { recto: "Quelle paire détermine le sexe ?", verso: "La 23ᵉ paire : XX pour le sexe féminin, XY pour le sexe masculin." },
    { recto: "Qu'est-ce qu'un gène ?", verso: "Une portion d'ADN qui gouverne un caractère (ex. le groupe sanguin)." },
    { recto: "Qu'est-ce qu'un allèle ?", verso: "Une version possible d'un gène ; on possède deux allèles par gène." },
    { recto: "Qu'est-ce que la mitose ?", verso: "Une division qui donne deux cellules filles identiques, après copie de l'ADN." },
    { recto: "Pourquoi chaque individu est-il unique ?", verso: "Parce que les combinaisons d'allèles reçues des deux parents sont innombrables (sauf vrais jumeaux)." },
    { recto: "Combien de chromosomes chaque parent transmet-il ?", verso: "La moitié : un chromosome de chaque paire vient de chaque parent." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Où se trouve l'information génétique dans une cellule ?",
      choix: ["Dans le noyau", "Dans la membrane", "À l'extérieur de la cellule", "Dans le sang"],
      bonneReponse: 0,
      explication: "L'information génétique est contenue dans le noyau, portée par l'ADN.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de chromosomes possède l'être humain ?",
      choix: ["23", "46", "48", "92"],
      bonneReponse: 1,
      explication: "L'être humain possède 46 chromosomes, soit 23 paires.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle molécule porte l'information génétique ?",
      reponse: "L'ADN.",
      explication: "L'ADN est le support de l'information génétique ; il est organisé en chromosomes.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quels chromosomes sexuels correspondent au sexe masculin ?",
      choix: ["XX", "XY", "YY", "XO"],
      bonneReponse: 1,
      explication: "Le sexe masculin correspond à XY ; le sexe féminin à XX.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre un gène et un allèle.",
      reponse: "Un gène est une portion d'ADN qui gouverne un caractère ; un allèle est une version particulière de ce gène. Un même gène peut avoir plusieurs allèles.",
      explication: "Exemple : le gène du groupe sanguin possède les allèles A, B et O.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Combien d'allèles possède-t-on pour un gène donné, et pourquoi ?",
      reponse: "On en possède deux, car les chromosomes vont par paires : un allèle est porté par chaque chromosome de la paire.",
      explication: "Un chromosome de chaque paire vient de chaque parent, d'où deux allèles par gène.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La mitose produit :",
      choix: [
        "Deux cellules filles identiques à la cellule d'origine",
        "Quatre cellules toutes différentes",
        "Une seule cellule plus grosse",
        "Des cellules sans noyau",
      ],
      bonneReponse: 0,
      explication: "La mitose donne deux cellules filles identiques, après copie de l'ADN.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les cellules copient-elles leur ADN avant de se diviser ?",
      reponse: "Pour que chaque cellule fille reçoive une information génétique complète et identique à celle de la cellule d'origine.",
      explication: "La copie de l'ADN garantit la conservation de l'information génétique au cours de la mitose.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Sur un caryotype, on observe 47 chromosomes avec trois chromosomes 21. Que peut-on en déduire ?",
      reponse: "Il y a un chromosome 21 supplémentaire (trisomie 21) : la personne possède 47 chromosomes au lieu de 46. Le caryotype permet de repérer cette anomalie du nombre de chromosomes.",
      explication: "Le caryotype sert notamment à détecter des anomalies chromosomiques comme la trisomie 21.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi une cellule de peau et une cellule de foie d'une même personne ont-elles la même information génétique ?",
      choix: [
        "Parce qu'elles proviennent, par mitoses successives, de la même cellule initiale",
        "Parce qu'elles échangent leur ADN en permanence",
        "Parce qu'elles n'ont pas de noyau",
        "Parce qu'elles fabriquent le même organe",
      ],
      bonneReponse: 0,
      explication: "Toutes les cellules du corps descendent par mitose de la même cellule initiale, d'où la même information génétique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi, en dehors des vrais jumeaux, deux personnes ne sont jamais génétiquement identiques.",
      reponse: "Chaque parent transmet la moitié de ses chromosomes, et les combinaisons d'allèles possibles sont innombrables. Chaque individu reçoit donc un assortiment d'allèles qui lui est propre, ce qui le rend génétiquement unique.",
      explication: "La diversité vient des innombrables combinaisons d'allèles transmises par les deux parents.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Les vrais jumeaux ont le même caryotype et les mêmes allèles. Explique pourquoi.",
      reponse: "Ils proviennent d'une même cellule initiale qui s'est divisée par mitose en deux embryons : ils possèdent donc la même information génétique, les mêmes chromosomes et les mêmes allèles.",
      explication: "Issus de la même cellule de départ, les vrais jumeaux sont génétiquement identiques.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans le noyau, l'ADN est organisé en :",
      choix: ["Cellules", "Chromosomes", "Organes", "Allèles uniquement"],
      bonneReponse: 1,
      explication: "L'ADN est organisé en chromosomes dans le noyau.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "En combien de paires les 46 chromosomes humains sont-ils regroupés ?",
      reponse: "23 paires.",
      explication: "46 chromosomes forment 23 paires, un chromosome de chaque parent par paire.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que détermine la 23ᵉ paire de chromosomes ?",
      reponse: "Le sexe biologique : XX (féminin) ou XY (masculin).",
      explication: "La paire sexuelle est la 23ᵉ paire du caryotype.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un allèle est :",
      choix: ["Un organe", "Une version d'un gène", "Une cellule", "Un noyau"],
      bonneReponse: 1,
      explication: "Un allèle est l'une des versions possibles d'un gène.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que produit une cellule à l'issue d'une mitose ?",
      reponse: "Deux cellules filles identiques à la cellule de départ.",
      explication: "La mitose conserve l'information génétique en produisant deux cellules identiques.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Génétique : ADN, gènes et chromosomes",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le support de l'information génétique est :",
          choix: ["L'ADN", "Le sang", "Le noyau vide", "La membrane"],
          bonneReponse: 0,
          explication: "L'ADN porte l'information génétique ; il est organisé en chromosomes dans le noyau.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel outil permet de classer et d'observer les chromosomes d'une personne ?",
          reponse: "Le caryotype.",
          explication: "Le caryotype est la photographie des chromosomes classés par paires.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris l'organisation de l'information génétique, du plus grand au plus petit niveau (cellule, ADN, noyau, chromosome).",
          reponse: "La cellule contient un noyau ; dans le noyau se trouvent les chromosomes ; chaque chromosome est une molécule d'ADN.",
          explication: "Cellule → noyau → chromosomes → ADN : c'est l'emboîtement de l'information génétique.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Le gène du groupe sanguin existe sous les allèles A, B et O. Cela signifie que :",
          choix: [
            "Un gène peut avoir plusieurs versions (allèles)",
            "Il existe trois gènes différents",
            "Le groupe sanguin n'est pas héréditaire",
            "On possède 46 allèles",
          ],
          bonneReponse: 0,
          explication: "A, B et O sont trois allèles, c'est-à-dire trois versions du même gène.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un caryotype montre 46 chromosomes dont la 23ᵉ paire est XY. Que peut-on en déduire ?",
          reponse: "Le nombre de chromosomes est normal (46) et la présence d'un chromosome X et d'un chromosome Y indique un sexe masculin.",
          explication: "On lit le nombre de chromosomes et la paire sexuelle pour interpréter un caryotype.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique comment la mitose permet à toutes les cellules d'un individu de posséder la même information génétique.",
          reponse: "Avant chaque division, la cellule copie tout son ADN ; la mitose répartit ensuite une copie identique dans chacune des deux cellules filles. De division en division, l'information génétique reste la même dans toutes les cellules.",
          explication: "La copie de l'ADN puis la mitose assurent la conservation de l'information génétique.",
        },
      ],
    },
    {
      titre: "Examen 2 — Génétique : ADN, gènes et chromosomes",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une paire de chromosomes est formée de :",
          choix: [
            "Deux chromosomes, un de chaque parent",
            "Deux cellules",
            "Deux noyaux",
            "Deux gènes uniquement",
          ],
          bonneReponse: 0,
          explication: "Dans chaque paire, un chromosome vient de la mère et l'autre du père.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quels chromosomes sexuels correspondent au sexe féminin ?",
          reponse: "XX.",
          explication: "Le sexe féminin correspond à deux chromosomes X (XX).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce qu'un gène et à quoi sert-il ?",
          reponse: "Un gène est une portion d'ADN située sur un chromosome ; il contient l'information pour un caractère (comme le groupe sanguin).",
          explication: "Chaque chromosome porte de nombreux gènes, chacun gouvernant un caractère.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Combien d'allèles possède-t-on pour un même gène ?",
          choix: ["Un seul", "Deux", "Vingt-trois", "Quarante-six"],
          bonneReponse: 1,
          explication: "On possède deux allèles par gène, un sur chaque chromosome de la paire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi chaque être humain (sauf vrais jumeaux) est génétiquement unique.",
          reponse: "Chaque parent transmet la moitié de ses chromosomes, et les combinaisons d'allèles possibles sont innombrables : chaque individu reçoit donc un assortiment d'allèles qui lui est propre.",
          explication: "L'unicité vient de l'immense nombre de combinaisons d'allèles héritées des deux parents.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Deux vrais jumeaux ont exactement les mêmes allèles. Explique cette particularité.",
          reponse: "Ils sont issus d'une même cellule initiale qui s'est divisée en deux embryons par mitose : ils possèdent donc la même information génétique et les mêmes allèles.",
          explication: "Provenant de la même cellule de départ, les vrais jumeaux sont génétiquement identiques.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'information génétique est dans le noyau, portée par l'ADN organisé en chromosomes.",
    "Le caryotype humain compte 46 chromosomes (23 paires), dont la paire sexuelle XX (féminin) ou XY (masculin).",
    "Un gène est une portion d'ADN gouvernant un caractère ; ses versions sont les allèles (on en possède deux par gène).",
    "La mitose produit deux cellules filles identiques et conserve l'information génétique (l'ADN est copié avant la division).",
    "Chaque individu est génétiquement unique grâce aux innombrables combinaisons d'allèles (sauf les vrais jumeaux).",
    "Erreur à éviter : confondre gène (la portion d'ADN) et allèle (une version de ce gène).",
  ],
};

export default chapitre;
