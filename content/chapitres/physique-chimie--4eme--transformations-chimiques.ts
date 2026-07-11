import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "transformations-chimiques",
  titre: "Les transformations chimiques",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Distinguer transformation physique et transformation chimique, identifier réactifs et produits, utiliser les tests caractéristiques des espèces chimiques courantes, écrire l'équation d'une réaction et comprendre la conservation de la masse.",
  objectifs: [
    "Distinguer une transformation physique d'une transformation chimique",
    "Identifier les réactifs (consommés) et les produits (formés) d'une réaction chimique",
    "Connaître les tests caractéristiques du dioxygène, du dioxyde de carbone, du dihydrogène et de l'eau",
    "Écrire l'équation d'une réaction chimique avec les noms des espèces",
    "Savoir que la masse totale se conserve au cours d'une transformation chimique (loi de Lavoisier)",
  ],
  slides: [
    {
      titre: "Reconnaître une transformation chimique",
      illustration: "⚗️",
      visuel: "Réactifs → Produits",
      contenu: [
        "Une transformation chimique change la nature de la matière",
        "De nouvelles substances apparaissent, différentes de celles du début",
        "Elle s'accompagne souvent d'un signe observable : gaz, changement de couleur, flamme, dégagement de chaleur",
        "Exemples : le fer qui rouille, une bougie qui brûle, un fruit qui mûrit",
      ],
      voixOff:
        "Une transformation chimique est une transformation au cours de laquelle la matière change de nature : de nouvelles substances apparaissent, différentes de celles de départ. On la repère souvent grâce à un signe observable : un dégagement de gaz, un changement de couleur, une flamme, ou un dégagement de chaleur. Le fer qui rouille, une bougie qui brûle, ou un fruit qui mûrit sont des exemples de transformations chimiques.",
    },
    {
      titre: "Réactifs et produits",
      illustration: "🧪",
      visuel: "Réactifs → Produits",
      contenu: [
        "Les réactifs sont les espèces chimiques consommées, présentes au début",
        "Les produits sont les espèces chimiques formées, présentes à la fin",
        "La flèche → se lit « réagissent pour donner »",
        "Exemple : fer + acide chlorhydrique → chlorure de fer + dihydrogène",
      ],
      voixOff:
        "Dans toute réaction chimique, on distingue deux familles d'espèces chimiques. Les réactifs sont les espèces consommées, présentes au tout début de la transformation. Les produits sont les espèces formées, présentes à la fin. On les relie par une flèche, qui se lit « réagissent pour donner ». Par exemple : fer plus acide chlorhydrique donnent chlorure de fer plus dihydrogène.",
    },
    {
      titre: "Identifier le dioxygène et le dioxyde de carbone",
      illustration: "🔥",
      visuel: "Bûchette incandescente • Eau de chaux",
      contenu: [
        "Test du dioxygène (O2) : une bûchette incandescente se ranime (se rallume) au contact du gaz",
        "Test du dioxyde de carbone (CO2) : l'eau de chaux se trouble et devient blanche laiteuse",
        "Ces tests permettent d'identifier un gaz incolore sans le voir",
        "Chaque espèce chimique possède un test caractéristique qui lui est propre",
      ],
      voixOff:
        "Comment reconnaître un gaz incolore ? Grâce à des tests caractéristiques. Pour identifier le dioxygène, on approche une bûchette incandescente, qui vient de s'éteindre : si elle se ranime, c'est-à-dire si elle se rallume, le gaz est bien du dioxygène. Pour identifier le dioxyde de carbone, on fait barboter le gaz dans de l'eau de chaux : si elle se trouble et devient blanche laiteuse, le gaz est bien du dioxyde de carbone.",
    },
    {
      titre: "Identifier le dihydrogène et l'eau",
      illustration: "💧",
      visuel: "Flamme + « pop » • Sulfate de cuivre bleu",
      contenu: [
        "Test du dihydrogène (H2) : approché d'une flamme, il produit une petite détonation, un « pop »",
        "Test de l'eau : le sulfate de cuivre anhydre, blanc, devient bleu au contact de l'eau",
        "Ces deux tests sont à connaître par cœur",
        "Ils permettent de vérifier la présence d'une espèce, pas de la quantifier",
      ],
      voixOff:
        "Deux autres tests à connaître. Pour identifier le dihydrogène, on approche le gaz recueilli d'une flamme : s'il produit une petite détonation, un « pop » caractéristique, c'est bien du dihydrogène. Pour identifier l'eau liquide, on utilise du sulfate de cuivre anhydre, une poudre blanche : au contact de l'eau, elle devient bleue. Ces tests confirment la présence d'une espèce chimique, mais ne disent pas combien il y en a.",
    },
    {
      titre: "Une réaction chimique : le fer et l'acide",
      illustration: "⚙️",
      visuel: "fer + acide chlorhydrique → chlorure de fer + dihydrogène",
      contenu: [
        "Quand on plonge un clou de fer dans de l'acide chlorhydrique, des bulles de gaz apparaissent",
        "Le test à la flamme montre que ce gaz est du dihydrogène",
        "Le fer disparaît peu à peu : c'est un réactif consommé",
        "Équation : fer + acide chlorhydrique → chlorure de fer + dihydrogène",
      ],
      voixOff:
        "Prenons un exemple concret. On plonge un clou de fer dans de l'acide chlorhydrique : des bulles de gaz se forment aussitôt. Le test à la flamme confirme que ce gaz est du dihydrogène. Le clou de fer, lui, disparaît peu à peu : c'est un réactif consommé. On écrit l'équation de cette réaction ainsi : fer plus acide chlorhydrique donnent chlorure de fer plus dihydrogène.",
    },
    {
      titre: "Écrire l'équation d'une réaction",
      illustration: "✍️",
      visuel: "réactif 1 + réactif 2 → produit 1 + produit 2",
      contenu: [
        "On écrit les noms des réactifs à gauche de la flèche, séparés par le signe +",
        "On écrit les noms des produits à droite de la flèche, séparés par le signe +",
        "La flèche indique le sens de la transformation",
        "Exemple : carbone + dioxygène → dioxyde de carbone",
      ],
      voixOff:
        "Pour écrire l'équation d'une réaction chimique avec des mots, on place les réactifs à gauche d'une flèche, séparés par un signe plus s'il y en a plusieurs. On place les produits à droite de la flèche, séparés eux aussi par un signe plus. La flèche indique le sens dans lequel la transformation se produit. Par exemple : carbone plus dioxygène donnent dioxyde de carbone.",
    },
    {
      titre: "La conservation de la masse",
      illustration: "⚖️",
      visuel: "masse des réactifs = masse des produits",
      contenu: [
        "Le chimiste Lavoisier a pesé des réactions dans des récipients fermés",
        "Il a montré que la masse totale ne change pas au cours d'une transformation chimique",
        "Masse des réactifs consommés = masse des produits formés",
        "« Rien ne se perd, rien ne se crée, tout se transforme »",
      ],
      voixOff:
        "Au dix-huitième siècle, le chimiste Antoine Lavoisier a réalisé des réactions dans des récipients fermés, en pesant soigneusement avant et après. Il a montré que la masse totale ne change jamais au cours d'une transformation chimique : la masse des réactifs consommés est exactement égale à la masse des produits formés. C'est la célèbre loi de Lavoisier : rien ne se perd, rien ne se crée, tout se transforme.",
    },
    {
      titre: "Transformation physique ou chimique ?",
      illustration: "🧊",
      visuel: "Physique ≠ chimique",
      contenu: [
        "Transformation physique : changement d'état, de forme, dissolution — les espèces chimiques ne changent pas",
        "Transformation chimique : de nouvelles espèces apparaissent, différentes des espèces de départ",
        "Exemple physique : le sucre dissous dans l'eau (le sucre existe toujours, dissous)",
        "Exemple chimique : le sucre qui brûle (il se transforme en carbone et en gaz)",
      ],
      voixOff:
        "Il ne faut pas confondre les deux types de transformations. Une transformation physique, comme un changement d'état ou une dissolution, ne change pas la nature des espèces chimiques : le sucre dissous dans l'eau est toujours du sucre, simplement mélangé à l'eau. Une transformation chimique, elle, fait apparaître de nouvelles espèces chimiques : quand le sucre brûle, il se transforme en carbone et en différents gaz, des espèces totalement nouvelles.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Transformation chimique = apparition de nouvelles espèces chimiques (produits) à partir des réactifs",
        "Tests à connaître : bûchette incandescente (O2), eau de chaux (CO2), détonation (H2), sulfate de cuivre (eau)",
        "Équation de réaction : réactifs → produits, avec les noms des espèces",
        "La masse totale se conserve toujours (loi de Lavoisier)",
      ],
      voixOff:
        "Résumons. Une transformation chimique fait apparaître de nouvelles espèces chimiques, les produits, à partir des réactifs qui sont consommés. Pour identifier les gaz et les liquides, on utilise des tests caractéristiques : la bûchette incandescente pour le dioxygène, l'eau de chaux pour le dioxyde de carbone, la détonation pour le dihydrogène, et le sulfate de cuivre pour l'eau. On écrit l'équation de la réaction avec les noms des réactifs et des produits, reliés par une flèche. Et surtout, retiens que la masse totale se conserve toujours : c'est la loi de Lavoisier.",
    },
  ],
  fiche: {
    intro:
      "Une transformation chimique fait apparaître de nouvelles espèces chimiques (les produits) à partir des réactifs consommés. Des tests caractéristiques permettent d'identifier les espèces formées, et la masse totale se conserve toujours.",
    sections: [
      {
        titre: "Reconnaître une transformation chimique",
        points: [
          "La matière change de nature : de nouvelles substances apparaissent",
          "Signes observables : gaz, changement de couleur, flamme, dégagement de chaleur",
          "Réactifs : espèces consommées (présentes au début) — Produits : espèces formées (présentes à la fin)",
        ],
      },
      {
        titre: "Les tests caractéristiques à connaître",
        points: [
          "Dioxygène O2 : une bûchette incandescente se ranime",
          "Dioxyde de carbone CO2 : l'eau de chaux se trouble (devient blanche laiteuse)",
          "Dihydrogène H2 : détonation (« pop ») à l'approche d'une flamme",
          "Eau : le sulfate de cuivre anhydre, blanc, devient bleu",
        ],
      },
      {
        titre: "L'équation de la réaction",
        points: [
          "Réactifs à gauche de la flèche, séparés par +",
          "Produits à droite de la flèche, séparés par +",
          "Exemple : fer + acide chlorhydrique → chlorure de fer + dihydrogène",
        ],
      },
      {
        titre: "La conservation de la masse",
        points: [
          "Loi de Lavoisier : masse des réactifs consommés = masse des produits formés",
          "« Rien ne se perd, rien ne se crée, tout se transforme »",
          "À ne pas confondre avec une transformation physique (changement d'état, dissolution), où les espèces chimiques ne changent pas",
        ],
      },
    ],
    audio:
      "Fiche de révision : les transformations chimiques. Une transformation chimique fait apparaître de nouvelles espèces chimiques, appelées produits, à partir de réactifs qui sont consommés. On la repère grâce à des signes observables : un dégagement de gaz, un changement de couleur, une flamme. Pour identifier les espèces formées, on utilise des tests caractéristiques : la bûchette incandescente se ranime en présence de dioxygène, l'eau de chaux se trouble en présence de dioxyde de carbone, le dihydrogène produit une détonation à l'approche d'une flamme, et le sulfate de cuivre anhydre, blanc, devient bleu au contact de l'eau. On écrit l'équation d'une réaction en plaçant les réactifs à gauche d'une flèche et les produits à droite, par exemple fer plus acide chlorhydrique donnent chlorure de fer plus dihydrogène. Enfin, la loi de Lavoisier affirme que la masse totale se conserve toujours au cours d'une transformation chimique : rien ne se perd, rien ne se crée, tout se transforme.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un réactif ?", verso: "Une espèce chimique consommée au cours de la réaction, présente au début." },
    { recto: "Qu'est-ce qu'un produit ?", verso: "Une espèce chimique formée au cours de la réaction, présente à la fin." },
    { recto: "Test caractéristique du dioxygène ?", verso: "Une bûchette incandescente se ranime (se rallume) au contact du gaz." },
    { recto: "Test caractéristique du dioxyde de carbone ?", verso: "L'eau de chaux se trouble et devient blanche laiteuse." },
    { recto: "Test caractéristique du dihydrogène ?", verso: "Une détonation, un petit « pop », à l'approche d'une flamme." },
    { recto: "Test caractéristique de l'eau ?", verso: "Le sulfate de cuivre anhydre, blanc, devient bleu au contact de l'eau." },
    { recto: "Que dit la loi de Lavoisier ?", verso: "La masse totale se conserve : masse des réactifs = masse des produits. « Rien ne se perd, rien ne se crée, tout se transforme »." },
    { recto: "Différence entre transformation physique et chimique ?", verso: "Physique : les espèces chimiques ne changent pas (ex : dissolution). Chimique : de nouvelles espèces apparaissent (ex : combustion)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans une réaction chimique, les réactifs sont :",
      choix: [
        "les espèces formées à la fin",
        "les espèces consommées, présentes au début",
        "toujours des gaz",
        "toujours de l'eau",
      ],
      bonneReponse: 1,
      explication: "Les réactifs sont les espèces chimiques présentes au départ, qui sont consommées au cours de la réaction.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel test permet d'identifier le dioxyde de carbone ?",
      choix: [
        "La bûchette incandescente se ranime",
        "L'eau de chaux se trouble",
        "Le sulfate de cuivre bleuit",
        "Une détonation se produit",
      ],
      bonneReponse: 1,
      explication: "L'eau de chaux se trouble et devient blanche laiteuse en présence de dioxyde de carbone CO2.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel test permet d'identifier le dihydrogène ?",
      reponse: "On approche le gaz d'une flamme : s'il produit une détonation (un « pop »), c'est du dihydrogène.",
      explication: "C'est le test caractéristique du dihydrogène, à ne pas confondre avec celui du dioxygène (bûchette incandescente).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le sucre dissous dans un verre d'eau : est-ce une transformation chimique ?",
      choix: [
        "Oui, une nouvelle espèce apparaît",
        "Non, c'est une transformation physique, le sucre existe toujours",
        "Oui, car l'eau devient sucrée",
        "On ne peut pas savoir",
      ],
      bonneReponse: 1,
      explication: "Dissoudre du sucre ne change pas sa nature chimique : c'est une transformation physique, pas chimique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "On plonge un clou de fer dans de l'acide chlorhydrique. Des bulles apparaissent. Écris l'équation de cette réaction avec les noms des espèces.",
      reponse: "fer + acide chlorhydrique → chlorure de fer + dihydrogène",
      explication: "Les réactifs (fer, acide chlorhydrique) sont à gauche de la flèche, les produits (chlorure de fer, dihydrogène) à droite.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment reconnaît-on le sulfate de cuivre anhydre en présence d'eau ?",
      choix: [
        "Il devient rouge",
        "Il se solidifie",
        "Il devient bleu",
        "Il disparaît sans laisser de trace",
      ],
      bonneReponse: 2,
      explication: "Le sulfate de cuivre anhydre est blanc ; au contact de l'eau, il devient bleu. C'est le test caractéristique de l'eau.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre une transformation physique et une transformation chimique.",
      reponse:
        "Dans une transformation physique (changement d'état, dissolution...), les espèces chimiques ne changent pas de nature. Dans une transformation chimique, de nouvelles espèces chimiques (produits) apparaissent, différentes des espèces de départ (réactifs).",
      explication: "Le critère décisif est l'apparition ou non de nouvelles espèces chimiques.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que signifie la flèche dans une équation de réaction du type « réactifs → produits » ?",
      choix: [
        "Un signe mathématique d'égalité stricte",
        "« réagissent pour donner »",
        "Une addition simple",
        "Le sens du temps qui passe",
      ],
      bonneReponse: 1,
      explication: "La flèche se lit « réagissent pour donner » : elle relie les réactifs consommés aux produits formés.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "On fait réagir 4 g de réactif A avec 10 g de réactif B dans un récipient fermé. Après la réaction complète, quelle est la masse totale des produits formés ? Justifie.",
      reponse: "14 g, car la masse se conserve : 4 g + 10 g = 14 g (loi de Lavoisier).",
      explication: "Dans un récipient fermé, aucune matière n'entre ni ne sort : la masse totale des produits est égale à la masse totale des réactifs.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un élève chauffe du sucre dans une cuillère : le sucre noircit et une odeur âcre se dégage. Est-ce une transformation physique ou chimique ? Justifie avec des arguments précis.",
      reponse:
        "C'est une transformation chimique : le sucre (blanc, cristallisé) se transforme en une nouvelle espèce, le carbone (noir), avec dégagement de gaz odorants. Ce ne sont plus les mêmes espèces chimiques qu'au départ.",
      explication: "Le changement de couleur irréversible et l'apparition d'une odeur signalent la formation de nouvelles espèces chimiques.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Dans un flacon fermé, on fait réagir des réactifs de masse totale 25 g. On pèse ensuite les produits obtenus. Que doit indiquer la balance ?",
      choix: ["Moins de 25 g", "Exactement 25 g", "Plus de 25 g", "0 g, toute la matière a disparu"],
      bonneReponse: 1,
      explication: "Dans un système fermé, la masse se conserve exactement : la balance doit indiquer 25 g.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une bougie qui brûle à l'air libre semble perdre de la masse au fil du temps. Cela contredit-il la loi de Lavoisier ? Explique.",
      reponse:
        "Non. La cire réagit avec le dioxygène de l'air (réactifs) et forme des gaz (dioxyde de carbone, vapeur d'eau) qui s'échappent dans l'air (produits). Si l'on pesait tous les réactifs et tous les produits, y compris les gaz, la masse totale serait bien conservée.",
      explication: "La masse ne semble diminuer que parce que le système n'est pas fermé : des produits gazeux s'échappent sans être pesés.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel test identifie le dioxygène ?",
      choix: [
        "L'eau de chaux se trouble",
        "Une bûchette incandescente se ranime",
        "Une détonation se produit",
        "Le sulfate de cuivre bleuit",
      ],
      bonneReponse: 1,
      explication: "Une bûchette incandescente qui se ranime (se rallume) indique la présence de dioxygène.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne un exemple de transformation chimique de la vie courante.",
      reponse: "Le fer qui rouille, une bougie qui brûle, ou un fruit qui mûrit, par exemple.",
      explication: "Toute transformation qui fait apparaître de nouvelles espèces chimiques est une transformation chimique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète l'équation : carbone + dioxygène → ...",
      reponse: "dioxyde de carbone",
      explication: "La combustion du carbone dans le dioxygène produit du dioxyde de carbone.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que dit la loi de Lavoisier ?",
      choix: [
        "La masse des produits est toujours inférieure à celle des réactifs",
        "La masse totale se conserve au cours d'une transformation chimique",
        "Les atomes disparaissent lors d'une réaction",
        "Le volume se conserve toujours",
      ],
      bonneReponse: 1,
      explication: "Lavoisier a montré que la masse des réactifs consommés est égale à la masse des produits formés.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dissoudre du sel dans l'eau est-il une transformation physique ou chimique ?",
      reponse: "Une transformation physique : le sel garde sa nature chimique, il est seulement dispersé dans l'eau.",
      explication: "Aucune nouvelle espèce chimique n'apparaît lors d'une dissolution.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les transformations chimiques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Les produits d'une réaction chimique sont :",
          choix: [
            "les espèces consommées",
            "les espèces formées à la fin",
            "toujours des liquides",
            "toujours identiques aux réactifs",
          ],
          bonneReponse: 1,
          explication: "Les produits sont les nouvelles espèces chimiques formées au cours de la réaction.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite les quatre tests caractéristiques vus en cours et l'espèce qu'ils permettent d'identifier.",
          reponse:
            "Bûchette incandescente qui se ranime → dioxygène. Eau de chaux qui se trouble → dioxyde de carbone. Détonation à la flamme → dihydrogène. Sulfate de cuivre anhydre qui bleuit → eau.",
          explication: "Ces quatre tests sont à connaître par cœur pour identifier les espèces chimiques les plus courantes.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une transformation chimique se reconnaît souvent par :",
          choix: [
            "l'absence de tout changement visible",
            "un signe observable : gaz, couleur, flamme, chaleur",
            "une diminution du volume uniquement",
            "un changement de température toujours identique",
          ],
          bonneReponse: 1,
          explication: "Un dégagement de gaz, un changement de couleur, une flamme ou un dégagement de chaleur sont des signes typiques d'une transformation chimique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris l'équation de la réaction entre le carbone et le dioxygène qui produit du dioxyde de carbone.",
          reponse: "carbone + dioxygène → dioxyde de carbone",
          explication: "Les réactifs (carbone, dioxygène) sont à gauche de la flèche, le produit (dioxyde de carbone) à droite.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Dans un flacon fermé, 8 g de réactif A réagissent entièrement avec du réactif B. On obtient 22 g de produits au total. Quelle était la masse du réactif B ?",
          reponse: "14 g, car la masse se conserve : masse des produits = masse des réactifs, donc masse de B = 22 g − 8 g = 14 g.",
          explication: "On applique la loi de Lavoisier : la masse totale des réactifs est égale à la masse totale des produits.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Le fer qui rouille lentement à l'air humide est :",
          choix: [
            "une transformation physique rapide",
            "une transformation chimique lente",
            "une simple dissolution",
            "un changement d'état",
          ],
          bonneReponse: 1,
          explication: "La rouille (oxyde de fer) est une nouvelle espèce chimique : c'est bien une transformation chimique, mais lente.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les transformations chimiques",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'eau de chaux se trouble en présence de :",
          choix: ["dioxygène", "dihydrogène", "dioxyde de carbone", "eau"],
          bonneReponse: 2,
          explication: "L'eau de chaux se trouble (devient blanche laiteuse) en présence de dioxyde de carbone.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un réactif ? Qu'est-ce qu'un produit ?",
          reponse: "Un réactif est une espèce chimique consommée pendant la réaction. Un produit est une espèce chimique formée pendant la réaction.",
          explication: "Les réactifs sont présents au début, les produits apparaissent à la fin de la transformation.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Faire fondre un glaçon est :",
          choix: [
            "une transformation chimique",
            "une transformation physique",
            "ni l'une ni l'autre",
            "impossible à classer",
          ],
          bonneReponse: 1,
          explication: "L'eau reste de l'eau : seul son état change. C'est une transformation physique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "On approche une flamme d'un gaz recueilli dans un tube et on entend un « pop ». De quel gaz s'agit-il ? Comment le sais-tu ?",
          reponse: "Il s'agit de dihydrogène : la détonation (le « pop ») à l'approche d'une flamme est le test caractéristique du dihydrogène.",
          explication: "Ce test permet de distinguer le dihydrogène du dioxygène (bûchette incandescente) et du dioxyde de carbone (eau de chaux).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Explique, à l'aide de la loi de Lavoisier, pourquoi la masse totale d'un système fermé ne change jamais au cours d'une réaction chimique, même si des gaz sont formés.",
          reponse:
            "Dans un système fermé, aucune matière n'entre ni ne sort. Même si des gaz sont formés, ils restent dans le récipient fermé et sont pesés avec les autres produits. La masse totale des produits est donc toujours égale à la masse totale des réactifs.",
          explication: "C'est uniquement dans un système ouvert (comme une bougie à l'air libre) que la masse semble diminuer, car des gaz s'échappent sans être pesés.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "12 g de magnésium réagissent complètement avec du dioxygène pour donner 20 g d'oxyde de magnésium. Quelle masse de dioxygène a été consommée ?",
          choix: ["8 g", "12 g", "20 g", "32 g"],
          bonneReponse: 0,
          explication: "La masse se conserve : masse de dioxygène = masse des produits − masse de magnésium = 20 g − 12 g = 8 g.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Une transformation chimique fait apparaître de nouvelles espèces chimiques (produits) à partir des réactifs consommés.",
    "Tests à connaître : bûchette incandescente (dioxygène), eau de chaux (dioxyde de carbone), détonation (dihydrogène), sulfate de cuivre anhydre qui bleuit (eau).",
    "Équation de réaction : réactifs → produits, avec les noms des espèces séparés par des signes +.",
    "La masse totale se conserve toujours au cours d'une transformation chimique en système fermé (loi de Lavoisier).",
    "Une transformation physique (changement d'état, dissolution) ne change pas la nature des espèces chimiques, contrairement à une transformation chimique.",
    "Erreur classique à éviter : croire que la masse diminue lors d'une combustion à l'air libre — en réalité, des produits gazeux invisibles s'échappent, mais la masse totale (système fermé) se conserve.",
  ],
};

export default chapitre;
