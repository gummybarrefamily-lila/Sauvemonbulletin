import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "figures-de-style",
  titre: "Les figures de style",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Identifier et interpréter les principales figures de style (comparaison, métaphore, personnification, antithèse, hyperbole, anaphore, litote, euphémisme) pour analyser un texte littéraire et enrichir sa propre écriture.",
  objectifs: [
    "Reconnaître les figures d'analogie : comparaison, métaphore, personnification",
    "Reconnaître les figures d'opposition et d'insistance : antithèse, hyperbole, anaphore",
    "Reconnaître les figures d'atténuation : litote, euphémisme",
    "Analyser l'effet produit par une figure de style dans un texte",
    "Réutiliser des figures de style dans une production écrite",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une figure de style ?",
      illustration: "🎨",
      visuel: "Dire autrement, pour mieux dire",
      contenu: [
        "Procédé d'écriture qui s'écarte du sens littéral ou de l'expression neutre",
        "But : créer une image, une émotion, un effet particulier chez le lecteur",
        "Présentes en poésie, mais aussi dans le roman, le théâtre, le discours",
        "Savoir les identifier aide à comprendre le sens profond d'un texte",
      ],
      voixOff:
        "Une figure de style est un procédé d'écriture qui s'écarte du sens littéral ou de l'expression neutre, pour créer une image, une émotion ou un effet particulier chez le lecteur. On les trouve en poésie, bien sûr, mais aussi dans le roman, le théâtre ou le discours argumentatif. Savoir les identifier et les interpréter est essentiel pour comprendre le sens profond d'un texte, et pour enrichir sa propre écriture.",
    },
    {
      titre: "La comparaison",
      illustration: "🔗",
      visuel: "A est comme B (outil de comparaison)",
      contenu: [
        "Rapproche deux réalités grâce à un outil de comparaison (comme, tel, pareil à...)",
        "Comparant (l'image) et comparé (ce qu'on décrit) restent distincts",
        "Ex. : « Ses yeux brillaient comme des étoiles »",
        "Effet : rendre une idée plus concrète, plus visuelle",
      ],
      voixOff:
        "La comparaison rapproche deux réalités à l'aide d'un outil grammatical de comparaison, comme, tel que, pareil à, semblable à. On distingue le comparé, la réalité que l'on décrit, et le comparant, l'image à laquelle on la compare. Par exemple : ses yeux brillaient comme des étoiles. Le comparé est les yeux, le comparant les étoiles, reliés par l'outil comme. L'effet est de rendre une idée abstraite plus concrète et plus visuelle.",
    },
    {
      titre: "La métaphore",
      illustration: "🌟",
      visuel: "A est B (sans outil de comparaison)",
      contenu: [
        "Rapproche deux réalités SANS outil de comparaison",
        "Le comparant remplace ou se substitue directement au comparé",
        "Ex. : « Ses yeux sont deux étoiles » (métaphore) vs « comme des étoiles » (comparaison)",
        "Effet : image plus forte, plus frappante, plus poétique que la comparaison",
      ],
      voixOff:
        "La métaphore rapproche elle aussi deux réalités, mais sans outil de comparaison : le comparant remplace ou se substitue directement au comparé. Par exemple, ses yeux sont deux étoiles est une métaphore, alors que comme des étoiles serait une comparaison. En supprimant l'outil de comparaison, l'image devient plus forte, plus frappante, plus poétique. C'est l'une des figures les plus puissantes de la langue française.",
    },
    {
      titre: "La personnification",
      illustration: "🌳",
      visuel: "Le vent hurlait de colère",
      contenu: [
        "Attribue des caractéristiques humaines à un objet, un animal, une abstraction",
        "Ex. : « Le vent hurlait de colère », « La ville dormait »",
        "Effet : rend le monde plus vivant, crée une atmosphère, une émotion",
        "Fréquente dans les fables et la poésie descriptive",
      ],
      voixOff:
        "La personnification attribue des caractéristiques humaines, des actions, des sentiments, à un objet, un animal ou une notion abstraite. Par exemple : le vent hurlait de colère, ou la ville dormait paisiblement. Cette figure rend le monde plus vivant, crée une atmosphère particulière et suscite une émotion chez le lecteur. Elle est très fréquente dans les fables, où les animaux parlent et pensent, et dans la poésie descriptive.",
    },
    {
      titre: "L'antithèse et l'oxymore",
      illustration: "⚡",
      visuel: "obscure clarté (oxymore)",
      contenu: [
        "Antithèse : rapproche deux idées ou mots de sens opposé dans une même phrase",
        "Ex. : « Il fait nuit en plein jour dans mon cœur »",
        "Oxymore : associe deux mots contradictoires dans un même groupe (« obscure clarté »)",
        "Effet : souligner un contraste, une tension, un déchirement intérieur",
      ],
      voixOff:
        "L'antithèse rapproche deux idées ou deux mots de sens opposé dans une même phrase, pour créer un contraste saisissant. Par exemple : il fait nuit en plein jour dans mon cœur. L'oxymore va plus loin : il associe directement deux mots contradictoires dans le même groupe, comme l'obscure clarté qui tombe des étoiles, chez Corneille. Ces figures soulignent une tension, un déchirement intérieur ou une situation paradoxale.",
    },
    {
      titre: "L'hyperbole et l'anaphore",
      illustration: "📢",
      visuel: "Je meurs de faim ! / Je me souviens... Je me souviens...",
      contenu: [
        "Hyperbole : exagération volontaire pour amplifier une idée ou une émotion",
        "Ex. : « Je meurs de faim », « un torrent de larmes »",
        "Anaphore : répétition d'un mot ou groupe de mots en tête de phrase ou de vers",
        "Effet de l'anaphore : insister, rythmer, marteler un message",
      ],
      voixOff:
        "L'hyperbole exagère volontairement une idée ou une émotion pour lui donner plus de force. Par exemple : je meurs de faim, ou un torrent de larmes. Personne ne meurt vraiment de faim en disant cela, mais l'exagération frappe l'esprit. L'anaphore, elle, répète un mot ou un groupe de mots en tête de phrase ou de vers, comme dans je me souviens, je me souviens. Cette répétition insiste sur une idée, rythme le texte et le rend plus mémorable.",
    },
    {
      titre: "La litote et l'euphémisme",
      illustration: "🤫",
      visuel: "« Va, je ne te hais point » (litote)",
      contenu: [
        "Litote : dire moins pour suggérer plus (« Va, je ne te hais point » = je t'aime)",
        "Euphémisme : atténuer une réalité choquante ou pénible",
        "Ex. : « il nous a quittés » pour « il est mort »",
        "Effet commun : atténuer, suggérer, avec pudeur ou stratégie",
      ],
      voixOff:
        "La litote consiste à dire moins pour suggérer plus. La célèbre réplique de Chimène dans Le Cid, va, je ne te hais point, signifie en réalité je t'aime, mais la litote atténue l'aveu par pudeur. L'euphémisme, lui, atténue une réalité choquante ou pénible : on dit il nous a quittés plutôt que il est mort. Ces deux figures partagent un même but : atténuer ou suggérer, par pudeur, par politesse, ou parfois par stratégie rhétorique.",
    },
    {
      titre: "Identifier une figure de style",
      illustration: "🔍",
      visuel: "Quel rapprochement ? Quel effet ?",
      contenu: [
        "Repérer un écart par rapport au sens habituel ou à l'expression neutre",
        "Identifier le type de figure : analogie, opposition, insistance, atténuation",
        "Analyser toujours l'EFFET produit, pas seulement nommer la figure",
        "Une bonne analyse relie la figure au sens général du texte",
      ],
      voixOff:
        "Pour identifier une figure de style, repère d'abord un écart par rapport au sens habituel ou à l'expression neutre. Détermine ensuite le type de figure : s'agit-il d'une analogie, comme la comparaison ou la métaphore, d'une opposition, comme l'antithèse, d'une insistance, comme l'anaphore ou l'hyperbole, ou d'une atténuation, comme la litote ? Le plus important, au brevet, n'est pas seulement de nommer la figure, mais d'analyser l'effet qu'elle produit et de le relier au sens général du texte.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Comparaison (avec outil) et métaphore (sans outil) : rapprocher deux réalités",
        "Personnification : donner des traits humains à ce qui ne l'est pas",
        "Antithèse/oxymore : opposer ; hyperbole/anaphore : insister",
        "Litote/euphémisme : atténuer pour suggérer ou adoucir",
      ],
      voixOff:
        "Résumons. La comparaison utilise un outil de comparaison, la métaphore n'en utilise pas : toutes deux rapprochent deux réalités. La personnification donne des traits humains à ce qui n'en a pas. L'antithèse et l'oxymore créent un effet d'opposition, tandis que l'hyperbole et l'anaphore créent un effet d'insistance. Enfin, la litote et l'euphémisme atténuent une idée pour la suggérer ou l'adoucir. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Les figures de style sont des procédés d'écriture qui s'écartent du sens littéral pour créer une image, une émotion ou un effet particulier. Leur maîtrise est indispensable pour analyser un texte littéraire et pour enrichir sa propre expression écrite, notamment lors de l'épreuve de français du brevet.",
    sections: [
      {
        titre: "Les figures d'analogie",
        points: [
          "Comparaison : rapproche deux réalités avec un outil de comparaison (comme, tel que)",
          "Métaphore : rapproche deux réalités SANS outil de comparaison, image plus forte",
          "Personnification : attribue des traits humains à un objet, un animal, une abstraction",
        ],
      },
      {
        titre: "Les figures d'opposition et d'insistance",
        points: [
          "Antithèse : rapproche deux idées ou mots de sens opposé dans une phrase",
          "Oxymore : associe deux mots contradictoires dans un même groupe (« obscure clarté »)",
          "Hyperbole : exagération volontaire pour amplifier une idée",
          "Anaphore : répétition d'un mot ou groupe de mots en tête de phrase ou de vers",
        ],
      },
      {
        titre: "Les figures d'atténuation",
        points: [
          "Litote : dire moins pour suggérer plus (« je ne te hais point » = je t'aime)",
          "Euphémisme : atténuer une réalité choquante ou pénible (« il nous a quittés »)",
        ],
      },
      {
        titre: "Méthode d'analyse",
        points: [
          "Repérer l'écart par rapport au sens habituel de l'expression",
          "Nommer précisément la figure de style employée",
          "Analyser toujours l'effet produit sur le lecteur, pas seulement la nommer",
          "Relier la figure au sens général et à la tonalité du texte",
        ],
      },
    ],
    audio:
      "Fiche de révision : les figures de style. Une figure de style est un procédé d'écriture qui s'écarte du sens littéral pour créer une image ou une émotion. Les figures d'analogie rapprochent deux réalités : la comparaison utilise un outil comme « comme » ou « tel que », la métaphore n'en utilise pas et crée une image plus forte, et la personnification attribue des traits humains à ce qui n'en a pas. Les figures d'opposition et d'insistance créent un contraste ou martèlent un message : l'antithèse et l'oxymore opposent deux idées ou deux mots, l'hyperbole exagère volontairement, et l'anaphore répète un mot en tête de phrase ou de vers. Les figures d'atténuation adoucissent une idée : la litote dit moins pour suggérer plus, comme « je ne te hais point » qui signifie je t'aime, et l'euphémisme atténue une réalité pénible, comme dire « il nous a quittés » pour « il est mort ». Au brevet, il faut toujours analyser l'effet produit par la figure, pas seulement savoir la nommer.",
  },
  memoCards: [
    { recto: "Différence entre comparaison et métaphore ?", verso: "La comparaison utilise un outil (comme, tel que) ; la métaphore rapproche deux réalités sans outil, avec une image plus forte." },
    { recto: "Qu'est-ce qu'une personnification ?", verso: "Donner des caractéristiques humaines à un objet, un animal ou une abstraction (« le vent hurlait »)." },
    { recto: "Qu'est-ce qu'une antithèse ?", verso: "Le rapprochement de deux idées ou mots de sens opposé dans une même phrase, pour créer un contraste." },
    { recto: "Qu'est-ce qu'un oxymore ?", verso: "L'association de deux mots contradictoires dans un même groupe (« obscure clarté », « silence assourdissant »)." },
    { recto: "Qu'est-ce qu'une hyperbole ?", verso: "Une exagération volontaire pour amplifier une idée ou une émotion (« je meurs de faim »)." },
    { recto: "Qu'est-ce qu'une anaphore ?", verso: "La répétition d'un mot ou groupe de mots en tête de phrase ou de vers, pour insister et rythmer le texte." },
    { recto: "Qu'est-ce qu'une litote ?", verso: "Dire moins pour suggérer plus (« Va, je ne te hais point » = je t'aime, dans Le Cid)." },
    { recto: "Qu'est-ce qu'un euphémisme ?", verso: "Atténuer une réalité choquante ou pénible (« il nous a quittés » pour « il est mort »)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Ses cheveux étaient comme de l'or », quelle figure de style est employée ?",
      choix: ["Une métaphore", "Une comparaison", "Une personnification", "Une litote"],
      bonneReponse: 1,
      explication: "L'outil « comme » relie le comparé (cheveux) et le comparant (or) : c'est une comparaison.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Le soleil est un roi doré », quelle figure de style est employée ?",
      choix: ["Une comparaison", "Une métaphore", "Un euphémisme", "Une antithèse"],
      bonneReponse: 1,
      explication: "Il n'y a pas d'outil de comparaison : le soleil est directement identifié à un roi doré, c'est une métaphore.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'une personnification ? Donne un exemple.",
      reponse: "C'est le fait d'attribuer des caractéristiques humaines à un objet, un animal ou une notion abstraite. Exemple : « La mer se fâchait contre les rochers. »",
      explication: "La personnification rend le monde plus vivant et crée une atmosphère particulière.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Je meurs de soif ! » est un exemple de :",
      choix: ["litote", "hyperbole", "euphémisme", "antithèse"],
      bonneReponse: 1,
      explication: "C'est une exagération volontaire pour amplifier l'expression d'un besoin, typique de l'hyperbole.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Cette obscure clarté qui tombe des étoiles » (Corneille) est un exemple de :",
      choix: ["comparaison", "personnification", "oxymore", "anaphore"],
      bonneReponse: 2,
      explication: "« Obscure » et « clarté » sont deux mots contradictoires associés dans le même groupe nominal : c'est un oxymore.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi « Va, je ne te hais point » est une litote, et donne le sens réel de cette phrase.",
      reponse: "C'est une litote car Chimène dit moins qu'elle ne pense pour suggérer un sentiment plus fort : en affirmant ne pas haïr Rodrigue, elle laisse entendre, avec pudeur, qu'elle l'aime toujours malgré tout.",
      explication: "La litote atténue l'expression d'un sentiment fort, souvent par pudeur ou par retenue, tout en le laissant deviner.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Identifie la figure de style dans « Je me souviens des jours anciens, je me souviens de ton sourire, je me souviens de tout » et explique son effet.",
      reponse: "C'est une anaphore : la répétition de « je me souviens » en tête de chaque proposition insiste sur l'importance du souvenir et crée un effet de rythme et d'obsession, comme si le narrateur ne pouvait s'empêcher d'y revenir.",
      explication: "L'anaphore martèle une idée et structure le texte autour d'elle, renforçant l'émotion exprimée.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que signifie « il a fermé les yeux pour toujours » ? Quelle figure de style reconnais-tu, et pourquoi l'utilise-t-on ?",
      reponse: "Cela signifie « il est mort ». C'est un euphémisme : on atténue une réalité pénible et douloureuse, la mort, en utilisant une expression plus douce, par respect ou par pudeur envers le destinataire.",
      explication: "L'euphémisme est très fréquent pour parler de la mort, de la maladie ou d'autres sujets sensibles.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Ce géant à l'échelle d'une fourmi », quelle figure de style permet de souligner le contraste de taille ?",
      choix: ["Une hyperbole seule", "Une antithèse", "Une litote", "Un euphémisme"],
      bonneReponse: 1,
      explication: "Le rapprochement de deux termes opposés (géant / fourmi) dans la même expression crée une antithèse qui souligne le contraste.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse cet extrait inventé : « La ville, immense monstre endormi, respirait doucement sous la lune, tandis que ses mille lumières clignotaient comme des yeux malicieux. » Identifie deux figures de style et explique leur effet combiné.",
      reponse: "La personnification/métaphore (« la ville, immense monstre endormi », « respirait ») donne à la ville une vie propre, presque animale, et crée une atmosphère mystérieuse et inquiétante. La comparaison (« ses mille lumières clignotaient comme des yeux malicieux ») prolonge cette image en associant les lumières de la ville à un regard vivant et espiègle. Ensemble, ces figures transforment un paysage urbain banal en une créature fascinante et légèrement inquiétante.",
      explication: "La combinaison de plusieurs figures de style crée un univers cohérent et une tonalité particulière tout au long du texte.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi dit-on que la métaphore a souvent un effet plus fort que la comparaison, alors que les deux rapprochent deux réalités ?",
      reponse: "Dans la comparaison, l'outil de comparaison (comme, tel que) maintient une distance : le lecteur sait que les deux éléments restent distincts, seulement rapprochés. Dans la métaphore, cette distance disparaît : le comparant se substitue directement au comparé, comme s'ils ne faisaient plus qu'un, ce qui rend l'image plus immédiate, plus surprenante et souvent plus poétique.",
      explication: "C'est cette absence d'outil grammatical qui explique la force particulière de la métaphore en poésie.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Sujet d'entraînement type brevet : rédige trois phrases décrivant un orage, en utilisant chacune une figure de style différente parmi celles étudiées (comparaison, métaphore, personnification, hyperbole).",
      reponse: "Exemple de corrigé : « Le tonnerre grondait comme une meute de loups affamés » (comparaison). « L'orage était un monstre de fureur s'abattant sur la ville » (métaphore/personnification). « La pluie tombait si fort qu'elle aurait pu noyer le monde entier » (hyperbole).",
      explication: "On vérifie que chaque phrase illustre correctement la figure demandée et produit un effet cohérent sur le lecteur.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une figure de style sert principalement à :",
      choix: ["respecter la grammaire", "créer une image ou un effet particulier", "raccourcir une phrase", "éviter les répétitions uniquement"],
      bonneReponse: 1,
      explication: "Les figures de style enrichissent l'expression en créant des images et des effets sur le lecteur.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la différence essentielle entre comparaison et métaphore ?",
      reponse: "La comparaison utilise un outil de comparaison (comme, tel que) ; la métaphore n'en utilise pas, ce qui rend l'image plus directe et plus forte.",
      explication: "C'est la présence ou l'absence de cet outil grammatical qui distingue les deux figures.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'une hyperbole ? Donne un exemple.",
      reponse: "Une exagération volontaire pour amplifier une idée ou une émotion. Exemple : « J'ai une montagne de devoirs à faire. »",
      explication: "L'hyperbole frappe l'esprit du lecteur par son caractère excessif et volontairement irréaliste.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Un silence assourdissant régnait dans la salle » est un exemple de :",
      choix: ["comparaison", "oxymore", "litote", "anaphore"],
      bonneReponse: 1,
      explication: "« Silence » et « assourdissant » sont deux termes contradictoires réunis dans le même groupe : c'est un oxymore.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi utilise-t-on un euphémisme plutôt qu'un mot direct pour évoquer un sujet difficile ?",
      reponse: "Pour atténuer une réalité choquante, douloureuse ou pénible, par pudeur, respect ou politesse envers le destinataire, tout en restant compris.",
      explication: "L'euphémisme adoucit le propos sans en trahir le sens, contrairement à une expression brutale.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les figures de style",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Cet homme est un renard » est un exemple de :",
          choix: ["comparaison", "métaphore", "litote", "hyperbole"],
          bonneReponse: 1,
          explication: "Aucun outil de comparaison n'est employé : l'homme est directement assimilé à un renard, c'est une métaphore.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la définition de la personnification.",
          reponse: "C'est le fait d'attribuer des caractéristiques, des actions ou des sentiments humains à un objet, un animal ou une notion abstraite.",
          explication: "Elle rend le monde décrit plus vivant et plus expressif.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Ni tout à fait la même, ni tout à fait une autre », quelle figure repère-t-on ?",
          choix: ["Une antithèse", "Une hyperbole", "Un euphémisme", "Une comparaison"],
          bonneReponse: 0,
          explication: "Le rapprochement de deux idées opposées (« la même » / « une autre ») dans une même phrase crée une antithèse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Identifie la figure de style dans « Toute la nuit, toute la nuit, j'ai attendu » et explique son effet.",
          reponse: "C'est une anaphore : la répétition de « toute la nuit » en début de phrase insiste sur la durée de l'attente et crée un effet d'obsession et de lassitude ressenties par le narrateur.",
          explication: "La répétition en tête de proposition est la marque caractéristique de l'anaphore.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi la litote est souvent utilisée pour exprimer un sentiment fort avec pudeur.",
          reponse: "La litote dit moins pour suggérer plus : en atténuant volontairement l'expression d'un sentiment, l'auteur ou le personnage laisse deviner une émotion plus intense qu'il n'ose pas exprimer directement, par pudeur, retenue ou discrétion.",
          explication: "C'est le cas célèbre de « Va, je ne te hais point », qui exprime un amour puissant sous une formule presque neutre.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse cet extrait inventé : « Le vieux chêne, sentinelle immobile depuis des siècles, semblait veiller sur le village avec une patience infinie. Ses branches, bras noueux tendus vers le ciel, réclamaient la pluie. » Identifie deux figures de style et explique ce qu'elles apportent au texte.",
          reponse: "La métaphore (« sentinelle immobile », « bras noueux ») transforme l'arbre en gardien vivant et protecteur, ce qui personnalise le paysage. La personnification (« semblait veiller », « réclamaient la pluie ») renforce cette impression en attribuant à l'arbre une intention et un désir humains. Ensemble, ces figures créent une atmosphère quasi mythique autour de cet arbre ancien, qui devient presque un personnage du texte.",
          explication: "Les figures d'analogie combinées permettent de construire une véritable image poétique cohérente sur plusieurs phrases.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les figures de style",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Ses larmes coulaient comme une rivière » est un exemple de :",
          choix: ["métaphore", "comparaison", "personnification", "oxymore"],
          bonneReponse: 1,
          explication: "L'outil « comme » relie explicitement les larmes et la rivière : c'est une comparaison.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne un exemple d'euphémisme et explique ce qu'il permet d'exprimer.",
          reponse: "Exemple : « il s'est éteint » pour « il est mort ». L'euphémisme permet d'évoquer une réalité douloureuse en l'atténuant, par respect ou par pudeur.",
          explication: "L'euphémisme est particulièrement fréquent pour parler de la mort ou de sujets sensibles.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle figure de style consiste à exagérer volontairement une réalité ?",
          choix: ["La litote", "L'hyperbole", "L'euphémisme", "L'antithèse"],
          bonneReponse: 1,
          explication: "L'hyperbole amplifie volontairement l'expression pour renforcer une idée ou une émotion.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre une antithèse et un oxymore.",
          reponse: "L'antithèse rapproche deux idées ou mots de sens opposé dans une même phrase, mais qui restent distincts grammaticalement. L'oxymore va plus loin en associant directement deux mots contradictoires dans le même groupe (par exemple un adjectif et le nom qu'il qualifie), créant une union plus resserrée et plus surprenante.",
          explication: "L'oxymore est en quelque sorte une antithèse condensée à l'extrême, en un seul groupe de mots.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi dit-on que l'analyse d'une figure de style ne doit jamais s'arrêter à sa simple identification ?",
          reponse: "Parce que nommer une figure de style ne suffit pas à montrer qu'on a compris le texte : il faut expliquer l'effet qu'elle produit sur le lecteur (émotion, image, insistance, atténuation) et relier cet effet au sens général et à la tonalité du passage étudié.",
          explication: "Au brevet, les questions demandent presque toujours d'identifier ET d'analyser l'effet d'une figure, pas seulement de la nommer.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève écrit dans sa copie : « L'auteur utilise une métaphore, ce qui rend le texte joli. » Explique pourquoi cette phrase est insuffisante pour une bonne analyse littéraire, et propose une meilleure formulation à partir de l'exemple « Le désespoir noya son cœur ».",
          reponse: "Cette phrase est insuffisante car elle se contente de nommer la figure sans analyser son effet précis ni le relier au sens du texte. Une meilleure formulation : « La métaphore \"le désespoir noya son cœur\" assimile le sentiment de tristesse à une noyade, ce qui suggère une souffrance intense et irrépressible, comme si le personnage était submergé et incapable de résister à son chagrin. »",
          explication: "Une bonne analyse explicite toujours le rapport entre les deux termes de la métaphore et l'émotion ou le sens qu'elle traduit.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Comparaison (avec outil : comme, tel que) et métaphore (sans outil) : rapprocher deux réalités pour créer une image.",
    "Personnification : attribuer des traits humains à un objet, un animal ou une abstraction.",
    "Antithèse (deux mots opposés dans une phrase) et oxymore (deux mots contradictoires dans un même groupe) : créer un contraste.",
    "Hyperbole (exagération) et anaphore (répétition en tête de phrase/vers) : insister, amplifier, rythmer.",
    "Litote et euphémisme : dire moins ou atténuer pour suggérer davantage ou adoucir une réalité pénible.",
    "Au brevet, il faut toujours analyser l'EFFET produit par une figure de style, pas seulement savoir la nommer.",
  ],
};

export default chapitre;
