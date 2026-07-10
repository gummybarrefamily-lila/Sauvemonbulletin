import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "etats-de-leau",
  titre: "L'eau et ses états",
  matiere: "physique-chimie",
  niveau: "5eme",
  description:
    "Connaître les trois états de l'eau et leurs propriétés, nommer les changements d'état, comprendre les paliers de température à 0 °C et 100 °C, la conservation de la masse et le cycle de l'eau.",
  objectifs: [
    "Décrire les propriétés des états solide, liquide et gazeux de l'eau",
    "Nommer les changements d'état : fusion, solidification, vaporisation, liquéfaction",
    "Connaître les paliers de température de l'eau pure : 0 °C et 100 °C",
    "Savoir que la masse se conserve lors d'un changement d'état (mais pas le volume)",
    "Expliquer les grandes étapes du cycle de l'eau",
  ],
  slides: [
    {
      titre: "Les trois états de l'eau",
      illustration: "🧊",
      visuel: "Solide • Liquide • Gaz",
      contenu: [
        "L'eau existe sous trois états physiques",
        "Solide : la glace, la neige, le givre",
        "Liquide : l'eau du robinet, la pluie, les océans",
        "Gazeux : la vapeur d'eau, invisible dans l'air",
      ],
      voixOff:
        "L'eau est partout autour de nous, et elle peut exister sous trois états physiques. À l'état solide, c'est la glace, la neige ou le givre. À l'état liquide, c'est l'eau du robinet, la pluie ou les océans. Et à l'état gazeux, c'est la vapeur d'eau, présente dans l'air mais invisible.",
    },
    {
      titre: "L'état solide",
      illustration: "🧊",
      visuel: "Forme propre",
      contenu: [
        "Un solide a une forme propre : il garde sa forme",
        "Un glaçon reste un glaçon, quel que soit le récipient",
        "On peut le saisir avec les doigts",
        "Son volume ne change pas quand on le déplace",
      ],
      voixOff:
        "À l'état solide, l'eau a une forme propre : elle garde sa forme. Un glaçon reste un glaçon, que tu le poses dans un verre ou dans une assiette. On peut le saisir avec les doigts, et son volume ne change pas quand on le déplace.",
    },
    {
      titre: "L'état liquide",
      illustration: "💧",
      visuel: "Surface libre horizontale",
      contenu: [
        "Un liquide n'a pas de forme propre : il prend la forme du récipient",
        "Sa surface libre au repos est plane et horizontale",
        "On ne peut pas le saisir, il coule",
        "Son volume, lui, ne change pas",
      ],
      voixOff:
        "À l'état liquide, l'eau n'a pas de forme propre : elle prend la forme du récipient qui la contient. Au repos, sa surface libre est toujours plane et horizontale, même si on penche le récipient. On ne peut pas la saisir, elle coule entre les doigts. En revanche, son volume ne change pas.",
    },
    {
      titre: "L'état gazeux",
      illustration: "☁️",
      visuel: "Vapeur d'eau = invisible",
      contenu: [
        "Un gaz n'a ni forme propre, ni volume propre",
        "Il occupe tout l'espace disponible",
        "Il est compressible et expansible",
        "⚠️ La vapeur d'eau est invisible : la buée et les nuages sont de l'eau liquide !",
      ],
      voixOff:
        "À l'état gazeux, l'eau n'a ni forme propre, ni volume propre : elle occupe tout l'espace disponible. Un gaz peut être comprimé ou détendu. Attention au piège classique : la vapeur d'eau est invisible ! La buée, le brouillard et les nuages, ce sont de minuscules gouttelettes d'eau liquide.",
    },
    {
      titre: "Les changements d'état",
      illustration: "🔄",
      visuel: "Solide ⇄ Liquide ⇄ Gaz",
      contenu: [
        "Fusion : solide → liquide (le glaçon fond)",
        "Solidification : liquide → solide (l'eau gèle)",
        "Vaporisation : liquide → gaz (l'eau s'évapore ou bout)",
        "Liquéfaction : gaz → liquide (la buée se forme)",
      ],
      voixOff:
        "L'eau peut passer d'un état à un autre : ce sont les changements d'état. La fusion, c'est le passage du solide au liquide, quand le glaçon fond. La solidification, c'est l'inverse : l'eau qui gèle. La vaporisation, c'est le passage du liquide au gaz. Et la liquéfaction, c'est le passage du gaz au liquide, comme la buée qui se forme sur une vitre froide.",
    },
    {
      titre: "Les paliers de température",
      illustration: "🌡️",
      visuel: "0 °C et 100 °C",
      contenu: [
        "L'eau pure fond et se solidifie à 0 °C",
        "L'eau pure bout à 100 °C (à pression atmosphérique normale)",
        "Pendant le changement d'état, la température reste constante : c'est un palier",
        "Ce palier est la signature d'un corps pur",
      ],
      voixOff:
        "L'eau pure change d'état à des températures bien précises : elle fond et se solidifie à zéro degré Celsius, et elle bout à cent degrés Celsius, à la pression atmosphérique normale. Pendant tout le changement d'état, la température ne bouge plus : on observe un palier de température. Ce palier est la signature d'un corps pur.",
    },
    {
      titre: "La masse se conserve",
      illustration: "⚖️",
      visuel: "200 g d'eau → 200 g de glace",
      contenu: [
        "Lors d'un changement d'état, la masse ne change pas",
        "200 g d'eau liquide donnent exactement 200 g de glace",
        "⚠️ Le volume, lui, change : la glace occupe plus de place que l'eau liquide",
        "C'est pourquoi une bouteille pleine éclate au congélateur",
      ],
      voixOff:
        "Lors d'un changement d'état, la masse de l'eau se conserve : deux cents grammes d'eau liquide donnent exactement deux cents grammes de glace. Attention, le volume, lui, change ! En gelant, l'eau prend plus de place. C'est pour cela qu'une bouteille pleine d'eau, fermée et placée au congélateur, finit par éclater.",
    },
    {
      titre: "Le cycle de l'eau",
      illustration: "🌍",
      visuel: "Océan → Nuage → Pluie → Rivière",
      contenu: [
        "Le Soleil fait évaporer l'eau des océans (vaporisation)",
        "En altitude, la vapeur se liquéfie en gouttelettes : les nuages",
        "L'eau retombe en pluie ou en neige : les précipitations",
        "Elle ruisselle, s'infiltre et rejoint les rivières puis l'océan",
      ],
      voixOff:
        "Sur Terre, l'eau circule sans cesse : c'est le cycle de l'eau. Le Soleil chauffe les océans et fait évaporer l'eau. En altitude, l'air est froid : la vapeur se liquéfie en minuscules gouttelettes qui forment les nuages. L'eau retombe ensuite en pluie ou en neige, ruisselle, s'infiltre dans le sol, puis rejoint les rivières et l'océan. Et le cycle recommence.",
    },
    {
      titre: "Évaporation ou ébullition ?",
      illustration: "♨️",
      visuel: "2 façons de se vaporiser",
      contenu: [
        "L'évaporation : lente, à la surface, à toute température (linge qui sèche)",
        "L'ébullition : rapide, avec de grosses bulles, à 100 °C pour l'eau pure",
        "Dans les deux cas, c'est une vaporisation",
      ],
      voixOff:
        "Il existe deux façons pour l'eau liquide de devenir un gaz. L'évaporation est lente, se produit à la surface du liquide et à n'importe quelle température : c'est ainsi que le linge sèche. L'ébullition est rapide, avec de grosses bulles dans tout le liquide, et se produit à cent degrés pour l'eau pure. Dans les deux cas, il s'agit bien d'une vaporisation.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Solide : forme propre / Liquide : surface horizontale / Gaz : occupe tout l'espace",
        "Fusion, solidification, vaporisation, liquéfaction",
        "Paliers de l'eau pure : 0 °C et 100 °C",
        "La masse se conserve, le volume change ; l'eau circule dans le cycle de l'eau",
      ],
      voixOff:
        "Résumons. L'eau existe sous trois états : le solide a une forme propre, le liquide a une surface libre horizontale, et le gaz occupe tout l'espace disponible. Les changements d'état s'appellent fusion, solidification, vaporisation et liquéfaction. L'eau pure fond à zéro degré et bout à cent degrés, avec un palier de température. Lors d'un changement d'état, la masse se conserve mais le volume change. Bravo, tu connais maintenant l'essentiel sur l'eau et ses états !",
    },
  ],
  fiche: {
    intro:
      "L'eau existe sous trois états physiques — solide, liquide et gazeux — et passe de l'un à l'autre lors des changements d'état, à des températures précises pour l'eau pure.",
    sections: [
      {
        titre: "Les trois états et leurs propriétés",
        points: [
          "Solide (glace) : forme propre, on peut le saisir",
          "Liquide : pas de forme propre, prend la forme du récipient, surface libre plane et horizontale au repos",
          "Gaz (vapeur d'eau) : ni forme ni volume propres, occupe tout l'espace, compressible — et invisible",
        ],
      },
      {
        titre: "Les changements d'état",
        points: [
          "Fusion : solide → liquide",
          "Solidification : liquide → solide",
          "Vaporisation : liquide → gaz (évaporation lente ou ébullition à 100 °C)",
          "Liquéfaction : gaz → liquide (buée, nuages)",
        ],
      },
      {
        titre: "Les paliers de température",
        points: [
          "Eau pure : fusion et solidification à 0 °C, ébullition à 100 °C (pression atmosphérique normale)",
          "Pendant le changement d'état, la température reste constante : c'est le palier",
          "Le palier est la signature d'un corps pur (l'eau salée n'a pas de palier net)",
        ],
      },
      {
        titre: "Masse et volume",
        points: [
          "La masse se conserve lors d'un changement d'état : 200 g d'eau → 200 g de glace",
          "Le volume, lui, change : la glace occupe plus de place que l'eau liquide",
          "Conséquence : une bouteille pleine et fermée éclate au congélateur",
        ],
      },
      {
        titre: "Le cycle de l'eau",
        points: [
          "Évaporation des océans sous l'action du Soleil",
          "Liquéfaction en altitude : formation des nuages",
          "Précipitations (pluie, neige), ruissellement, infiltration",
          "Retour aux rivières et aux océans, et le cycle recommence",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'eau et ses états. L'eau existe sous trois états. Le solide, comme la glace, a une forme propre. Le liquide n'a pas de forme propre : il prend la forme du récipient et sa surface libre au repos est plane et horizontale. Le gaz, la vapeur d'eau, est invisible et occupe tout l'espace disponible. Les changements d'état ont chacun un nom : la fusion du solide vers le liquide, la solidification du liquide vers le solide, la vaporisation du liquide vers le gaz, et la liquéfaction du gaz vers le liquide. L'eau pure fond à zéro degré Celsius et bout à cent degrés Celsius : pendant le changement d'état, la température reste constante, c'est un palier. Lors d'un changement d'état, la masse se conserve mais le volume change : la glace occupe plus de place que l'eau liquide. Enfin, l'eau circule sans cesse sur Terre grâce au cycle de l'eau : évaporation, formation des nuages, précipitations, puis retour aux rivières et aux océans.",
  },
  memoCards: [
    { recto: "Quels sont les trois états de l'eau ?", verso: "Solide (glace), liquide (eau), gazeux (vapeur d'eau)." },
    { recto: "Propriété d'un solide ?", verso: "Il a une forme propre : il garde sa forme, on peut le saisir." },
    { recto: "Comment est la surface libre d'un liquide au repos ?", verso: "Plane et horizontale, quel que soit le récipient." },
    { recto: "La vapeur d'eau est-elle visible ?", verso: "Non ! Elle est invisible. La buée et les nuages sont de l'eau LIQUIDE (gouttelettes)." },
    { recto: "Fusion = ?", verso: "Passage de l'état solide à l'état liquide (le glaçon fond)." },
    { recto: "Liquéfaction = ?", verso: "Passage de l'état gazeux à l'état liquide (formation de la buée)." },
    { recto: "À quelle température l'eau pure fond-elle ?", verso: "À 0 °C. La température reste constante pendant la fusion : c'est un palier." },
    { recto: "À quelle température l'eau pure bout-elle ?", verso: "À 100 °C, à pression atmosphérique normale." },
    { recto: "On congèle 200 g d'eau. Masse de la glace ?", verso: "200 g : la masse se conserve lors d'un changement d'état (mais le volume augmente)." },
    { recto: "Les 4 grandes étapes du cycle de l'eau ?", verso: "Évaporation → formation des nuages (liquéfaction) → précipitations → ruissellement/infiltration vers rivières et océans." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un glaçon, l'eau est à l'état :",
      choix: ["liquide", "solide", "gazeux", "invisible"],
      bonneReponse: 1,
      explication: "Un glaçon est de l'eau à l'état solide : il a une forme propre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le passage de l'état solide à l'état liquide s'appelle :",
      choix: ["la solidification", "la fusion", "la vaporisation", "la liquéfaction"],
      bonneReponse: 1,
      explication: "La fusion est le passage du solide au liquide, comme un glaçon qui fond.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quelle température l'eau pure se transforme-t-elle en glace ?",
      reponse: "À 0 °C",
      explication: "L'eau pure se solidifie à 0 °C, et la température reste constante pendant toute la solidification (palier).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Au repos, la surface libre d'un liquide est toujours :",
      choix: ["inclinée", "verticale", "plane et horizontale", "en forme de vague"],
      bonneReponse: 2,
      explication: "Quel que soit le récipient, même penché, la surface libre d'un liquide au repos est plane et horizontale.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "On place 150 g d'eau liquide au congélateur. Quelle est la masse de la glace obtenue ?",
      reponse: "150 g",
      explication: "La masse se conserve lors d'un changement d'état : 150 g d'eau donnent 150 g de glace. Seul le volume change.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La vaporisation est le passage de l'état :",
      choix: ["gazeux à liquide", "liquide à gazeux", "solide à gazeux", "solide à liquide"],
      bonneReponse: 1,
      explication: "La vaporisation transforme un liquide en gaz. Elle peut être lente (évaporation) ou rapide (ébullition).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi une bouteille en verre pleine d'eau et bien fermée éclate-t-elle au congélateur ?",
      reponse: "Parce que le volume de l'eau augmente quand elle se solidifie.",
      explication: "La masse ne change pas, mais la glace occupe plus de place que l'eau liquide : le volume augmente et fait éclater la bouteille.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pendant toute l'ébullition de l'eau pure, la température :",
      choix: ["augmente régulièrement", "diminue lentement", "reste constante à 100 °C", "dépend du récipient utilisé"],
      bonneReponse: 2,
      explication: "Pendant le changement d'état d'un corps pur, la température reste constante : c'est le palier à 100 °C pour l'ébullition de l'eau.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "On refroidit de l'eau liquide et on trace la courbe de température. On observe un palier à 0 °C. Que se passe-t-il pendant ce palier ?",
      reponse: "L'eau se solidifie : eau liquide et glace coexistent, et la température reste à 0 °C tant que la solidification n'est pas terminée.",
      explication: "Le palier correspond au changement d'état. Tant qu'il reste de l'eau liquide à transformer en glace, la température ne descend pas sous 0 °C.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Après une douche chaude, de la buée se forme sur le miroir froid de la salle de bain. Explique ce phénomène en nommant le changement d'état.",
      reponse: "La vapeur d'eau de l'air se liquéfie au contact du miroir froid : c'est une liquéfaction, qui forme de fines gouttelettes d'eau liquide.",
      explication: "La buée n'est pas de la vapeur (invisible) : c'est de l'eau liquide formée par liquéfaction du gaz au contact d'une surface froide.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un glaçon de 20 g fond entièrement dans un verre vide. Quelle masse d'eau liquide obtient-on ?",
      choix: ["Moins de 20 g", "Exactement 20 g", "Plus de 20 g", "On ne peut pas le prévoir"],
      bonneReponse: 1,
      explication: "La masse se conserve lors de la fusion : 20 g de glace donnent exactement 20 g d'eau liquide.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris les grandes étapes du cycle de l'eau en nommant les changements d'état concernés.",
      reponse:
        "1) Le Soleil fait évaporer l'eau des océans (vaporisation). 2) En altitude, la vapeur se liquéfie en gouttelettes qui forment les nuages (liquéfaction). 3) L'eau retombe en pluie ou en neige (précipitations). 4) Elle ruisselle et s'infiltre, puis rejoint les rivières et les océans.",
      explication: "Le cycle enchaîne une vaporisation (évaporation) puis une liquéfaction (nuages), avant le retour de l'eau liquide (ou solide, la neige) vers le sol et les océans.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le passage de l'état gazeux à l'état liquide s'appelle :",
      choix: ["la fusion", "la vaporisation", "la liquéfaction", "la solidification"],
      bonneReponse: 2,
      explication: "La liquéfaction transforme un gaz en liquide, comme la buée sur une vitre froide.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quelle température l'eau pure bout-elle, à pression atmosphérique normale ?",
      reponse: "À 100 °C",
      explication: "L'ébullition de l'eau pure se fait à 100 °C, avec un palier de température.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Lors d'un changement d'état de l'eau :",
      choix: ["la masse et le volume changent", "la masse se conserve, le volume peut changer", "le volume se conserve, la masse change", "rien ne change"],
      bonneReponse: 1,
      explication: "La masse se conserve toujours ; le volume, lui, change (la glace prend plus de place que l'eau liquide).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "La vapeur d'eau est-elle visible ? Et la buée, qu'est-ce que c'est ?",
      reponse: "La vapeur d'eau est invisible. La buée est de l'eau liquide : de fines gouttelettes formées par liquéfaction.",
      explication: "C'est le piège classique : tout ce qu'on voit (buée, brouillard, nuages) est de l'eau liquide, pas du gaz.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment se forment les nuages dans le cycle de l'eau ?",
      reponse: "La vapeur d'eau issue de l'évaporation se liquéfie en altitude, où l'air est froid, en minuscules gouttelettes : c'est la liquéfaction.",
      explication: "Les nuages sont constitués de gouttelettes d'eau liquide (ou de cristaux de glace), pas de vapeur.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'eau et ses états",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel état de l'eau possède une forme propre ?",
          choix: ["L'état liquide", "L'état gazeux", "L'état solide", "Aucun"],
          bonneReponse: 2,
          explication: "Seul le solide (la glace) a une forme propre : il garde sa forme.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Comment s'appelle le passage de l'état liquide à l'état solide ?",
          reponse: "La solidification",
          explication: "C'est ce qui se produit quand l'eau gèle à 0 °C.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "On fait fondre 80 g de glace. Quelle masse d'eau liquide obtient-on ? Justifie.",
          reponse: "80 g, car la masse se conserve lors d'un changement d'état.",
          explication: "La fusion ne change pas la masse : 80 g de glace donnent 80 g d'eau liquide.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "On chauffe de l'eau pure. À 100 °C, elle bout. Si on continue de chauffer pendant l'ébullition, la température :",
          choix: ["monte au-dessus de 100 °C", "reste à 100 °C", "redescend vers 90 °C", "monte jusqu'à 200 °C"],
          bonneReponse: 1,
          explication: "Tant qu'il reste de l'eau liquide, la température reste au palier de 100 °C : l'énergie sert au changement d'état.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite les deux formes de vaporisation et donne une différence entre elles.",
          reponse: "L'évaporation (lente, à la surface, à toute température) et l'ébullition (rapide, dans tout le liquide, à 100 °C pour l'eau pure).",
          explication: "Les deux transforment le liquide en gaz, mais l'ébullition ne se produit qu'à la température d'ébullition.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un pot de yaourt gradué contient 100 mL d'eau (soit 100 g). On le place au congélateur. Donne la masse de la glace obtenue et indique si le niveau dans le pot a monté, baissé ou est resté identique. Justifie.",
          reponse: "La masse est toujours de 100 g (conservation de la masse). Le niveau a monté, car le volume de l'eau augmente lors de la solidification.",
          explication: "Changement d'état : masse conservée, mais la glace occupe un volume plus grand que l'eau liquide.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'eau et ses états",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un gaz :",
          choix: ["a une forme propre", "a une surface libre horizontale", "occupe tout l'espace disponible", "ne peut pas être comprimé"],
          bonneReponse: 2,
          explication: "Un gaz n'a ni forme ni volume propres : il occupe tout l'espace disponible et il est compressible.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la température de fusion de la glace (eau pure).",
          reponse: "0 °C",
          explication: "L'eau pure fond à 0 °C, avec un palier de température pendant toute la fusion.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Le brouillard est constitué :",
          choix: ["de vapeur d'eau", "de fines gouttelettes d'eau liquide", "de cristaux de sel", "d'air pur"],
          bonneReponse: 1,
          explication: "La vapeur d'eau est invisible. Le brouillard, comme la buée et les nuages, est fait de gouttelettes d'eau liquide.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Du linge mouillé sèche sur un fil, même par temps frais. Nomme et explique le changement d'état.",
          reponse: "C'est une vaporisation par évaporation : l'eau liquide passe lentement à l'état gazeux, à la surface du tissu, sans avoir besoin d'atteindre 100 °C.",
          explication: "L'évaporation se produit à toute température, contrairement à l'ébullition.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On chauffe de l'eau salée : la température d'ébullition dépasse 100 °C et il n'y a pas de palier net. Qu'en déduis-tu sur l'eau salée ?",
          reponse: "L'eau salée n'est pas un corps pur : c'est un mélange. Le palier de température net est la signature d'un corps pur comme l'eau pure.",
          explication: "Un mélange ne change pas d'état à température constante : l'absence de palier net révèle que ce n'est pas un corps pur.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Dans le cycle de l'eau, cite dans l'ordre les deux changements d'état qui se produisent entre l'océan et la pluie.",
          reponse: "1) La vaporisation (évaporation de l'eau des océans). 2) La liquéfaction (la vapeur devient gouttelettes dans les nuages), avant les précipitations.",
          explication: "Océan → vapeur (vaporisation) → nuages (liquéfaction) → pluie.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Trois états de l'eau : solide (forme propre), liquide (surface libre plane et horizontale), gaz (occupe tout l'espace, compressible).",
    "Quatre changements d'état à connaître : fusion (solide→liquide), solidification (liquide→solide), vaporisation (liquide→gaz), liquéfaction (gaz→liquide).",
    "Eau pure : palier à 0 °C (fusion/solidification) et à 100 °C (ébullition) — la température reste constante pendant le changement d'état.",
    "La masse se conserve lors d'un changement d'état ; le volume, lui, change (la glace occupe plus de place que l'eau liquide).",
    "Cycle de l'eau : évaporation → nuages (liquéfaction) → précipitations → ruissellement et retour aux océans.",
    "Erreur classique à éviter : croire que la buée, le brouillard ou les nuages sont de la vapeur d'eau — la vapeur est invisible, ce qu'on voit est de l'eau liquide.",
  ],
};

export default chapitre;
