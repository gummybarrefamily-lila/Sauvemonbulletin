import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "poesie-lyrique",
  titre: "La poésie lyrique",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Explorer la poésie lyrique : l'expression des sentiments personnels en vers, ses grands thèmes (amour, nature, fuite du temps), ses formes fixes comme le sonnet, et les figures de style qui donnent sa force au chant du « je ».",
  objectifs: [
    "Définir le lyrisme : l'expression des sentiments personnels en poésie",
    "Reconnaître les grands thèmes lyriques : amour, nature, fuite du temps, mélancolie",
    "Connaître la forme du sonnet et le vocabulaire de la versification",
    "Repérer les principales figures de style employées en poésie lyrique",
    "Analyser et écrire un court poème lyrique",
  ],
  slides: [
    {
      titre: "Qu'est-ce que la poésie lyrique ?",
      illustration: "🎵",
      visuel: "JE ressens → JE chante en vers",
      contenu: [
        "Le mot « lyrique » vient de la lyre, instrument des poètes-chanteurs de l'Antiquité",
        "La poésie lyrique exprime les sentiments personnels du poète",
        "Le poète parle souvent à la première personne (« je »)",
        "Elle cherche à faire partager une émotion intime au lecteur",
      ],
      voixOff:
        "Le mot lyrique vient de la lyre, l'instrument que les poètes de l'Antiquité grecque utilisaient pour accompagner leurs chants. La poésie lyrique exprime les sentiments personnels du poète : il parle souvent à la première personne, en disant je, pour faire partager au lecteur une émotion intime, comme la joie, l'amour ou la tristesse.",
    },
    {
      titre: "Les grands thèmes du lyrisme",
      illustration: "💖",
      visuel: "Amour • Nature • Temps qui passe",
      contenu: [
        "L'amour : joie, souffrance, absence, souvenir de l'être aimé",
        "La nature : miroir des sentiments du poète (paysages, saisons)",
        "La fuite du temps : le regret du passé, la conscience de la mort",
        "La mélancolie et le souvenir : nostalgie d'un bonheur disparu",
      ],
      voixOff:
        "La poésie lyrique revient sans cesse à quelques grands thèmes. L'amour, d'abord, avec sa joie mais aussi sa souffrance et son absence. La nature ensuite, qui devient souvent le miroir des sentiments du poète : un paysage triste ou lumineux reflète son état d'âme. Enfin, la fuite du temps et la mélancolie, ce regret d'un bonheur passé qui ne reviendra plus.",
    },
    {
      titre: "Le vers et la strophe",
      illustration: "📏",
      visuel: "Alexandrin = 12 syllabes",
      contenu: [
        "Le vers est une ligne de poésie, mesurée en syllabes (le compte des syllabes)",
        "L'alexandrin compte 12 syllabes ; l'octosyllabe, 8 ; le décasyllabe, 10",
        "La strophe regroupe plusieurs vers : quatrain (4 vers), tercet (3 vers)",
        "Le « e » muet compte parfois comme une syllabe (sauf devant une voyelle ou en fin de vers)",
      ],
      voixOff:
        "Le vers est une ligne de poésie, dont on compte les syllabes. L'alexandrin, le plus célèbre, compte douze syllabes ; l'octosyllabe en compte huit, le décasyllabe dix. Plusieurs vers regroupés forment une strophe : quatre vers forment un quatrain, trois vers un tercet. Attention, le e muet compte parfois comme une syllabe, sauf devant une voyelle ou à la fin du vers.",
    },
    {
      titre: "Les rimes",
      illustration: "🔁",
      visuel: "Suivies AABB / Croisées ABAB / Embrassées ABBA",
      contenu: [
        "La rime est la répétition d'un même son à la fin de deux vers ou plus",
        "Rimes suivies (AABB) : deux par deux",
        "Rimes croisées (ABAB) : alternées",
        "Rimes embrassées (ABBA) : la deuxième paire encadre la première",
      ],
      voixOff:
        "La rime est la répétition d'un même son à la fin de plusieurs vers. On distingue trois grandes dispositions : les rimes suivies, notées AABB, qui riment deux par deux ; les rimes croisées, notées ABAB, qui alternent ; et les rimes embrassées, notées ABBA, où la deuxième paire de rimes encadre la première.",
    },
    {
      titre: "Le sonnet, forme fixe emblématique",
      illustration: "🏛️",
      visuel: "2 quatrains + 2 tercets = 14 vers",
      contenu: [
        "Forme fixe née en Italie, très utilisée par les poètes lyriques (Ronsard, Du Bellay, Baudelaire)",
        "14 vers : deux quatrains suivis de deux tercets",
        "Souvent une chute ou un effet final dans le dernier vers",
        "Exemple célèbre : « Mignonne, allons voir si la rose... » de Ronsard",
      ],
      voixOff:
        "Le sonnet est une forme fixe très employée par les poètes lyriques, comme Ronsard, Du Bellay ou plus tard Baudelaire. Il comporte quatorze vers organisés en deux quatrains suivis de deux tercets. Le dernier vers apporte souvent une chute, un effet final marquant. Le sonnet de Ronsard Mignonne, allons voir si la rose en est un exemple célèbre, sur le thème du temps qui passe.",
    },
    {
      titre: "Les figures de style au service des sentiments",
      illustration: "🎭",
      visuel: "Comparaison, métaphore, personnification",
      contenu: [
        "Comparaison : rapproche deux éléments à l'aide d'un outil de comparaison (« comme »)",
        "Métaphore : rapproche deux éléments sans outil de comparaison",
        "Personnification : donne des caractéristiques humaines à une chose ou une idée",
        "Ces figures rendent les sentiments plus concrets et plus forts",
      ],
      voixOff:
        "Pour exprimer ses sentiments, le poète lyrique utilise des figures de style. La comparaison rapproche deux éléments à l'aide d'un mot comme comme. La métaphore fait le même rapprochement mais sans outil de comparaison. La personnification donne des caractéristiques humaines à une chose ou à une idée, comme lorsqu'on dit que le vent gémit ou que la lune pleure. Ces figures rendent les sentiments plus concrets et plus intenses.",
    },
    {
      titre: "Les grands poètes lyriques",
      illustration: "🖋️",
      visuel: "Ronsard • Lamartine • Hugo • Verlaine",
      contenu: [
        "Pierre de Ronsard (XVIe s.) : la fuite du temps, l'amour, « Carpe diem »",
        "Alphonse de Lamartine (XIXe s.) : la nature, le souvenir (« Le Lac »)",
        "Victor Hugo (XIXe s.) : le deuil, la nature, les souvenirs personnels",
        "Paul Verlaine (XIXe s.) : la mélancolie, la musicalité des vers",
      ],
      voixOff:
        "Plusieurs poètes ont marqué l'histoire du lyrisme. Pierre de Ronsard, au seizième siècle, chante l'amour et la fuite du temps, invitant à profiter de l'instant présent. Alphonse de Lamartine, au dix-neuvième siècle, célèbre la nature et le souvenir dans Le Lac. Victor Hugo exprime son deuil et ses souvenirs personnels dans ses poèmes. Paul Verlaine, enfin, est connu pour la mélancolie et la grande musicalité de ses vers.",
    },
    {
      titre: "Écrire un court poème lyrique",
      illustration: "📝",
      visuel: "JE + sentiment + image poétique",
      contenu: [
        "Choisir un sentiment précis à exprimer (joie, tristesse, nostalgie...)",
        "Utiliser la première personne et un ton personnel",
        "Employer des images poétiques : comparaison, métaphore, personnification",
        "Travailler la musicalité : rimes, rythme, sonorités",
      ],
      voixOff:
        "Pour écrire un court poème lyrique, choisis d'abord un sentiment précis que tu veux exprimer. Utilise la première personne pour donner un ton personnel et sincère. Emploie des images poétiques comme la comparaison, la métaphore ou la personnification pour rendre ce sentiment plus fort. Enfin, travaille la musicalité de tes vers grâce aux rimes, au rythme et aux sonorités choisies.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Lyrisme = expression des sentiments personnels, souvent à la première personne",
        "Thèmes majeurs : amour, nature, fuite du temps, mélancolie",
        "Le sonnet : 14 vers, 2 quatrains + 2 tercets",
        "Figures de style (comparaison, métaphore, personnification) pour intensifier l'émotion",
      ],
      voixOff:
        "Pour résumer, la poésie lyrique exprime les sentiments personnels du poète, souvent à la première personne, autour de grands thèmes comme l'amour, la nature ou la fuite du temps. Le sonnet, forme fixe de quatorze vers organisée en deux quatrains et deux tercets, est l'une de ses formes emblématiques. Les figures de style comme la comparaison, la métaphore ou la personnification permettent d'intensifier l'émotion exprimée.",
    },
  ],
  fiche: {
    intro:
      "La poésie lyrique exprime les sentiments personnels du poète, souvent à la première personne, autour de thèmes comme l'amour, la nature ou la fuite du temps. Elle s'appuie sur la versification (vers, rimes, strophes), des formes fixes comme le sonnet, et des figures de style qui intensifient l'émotion.",
    sections: [
      {
        titre: "Définition et thèmes du lyrisme",
        points: [
          "Lyrisme : expression des sentiments personnels, souvent à la 1re personne",
          "Thèmes majeurs : amour, nature (miroir des sentiments), fuite du temps, mélancolie",
        ],
      },
      {
        titre: "Vocabulaire de la versification",
        points: [
          "Vers = ligne de poésie, mesurée en syllabes (alexandrin = 12, octosyllabe = 8, décasyllabe = 10)",
          "Strophe = groupe de vers (quatrain = 4 vers, tercet = 3 vers)",
          "Rimes suivies (AABB), croisées (ABAB), embrassées (ABBA)",
        ],
      },
      {
        titre: "Le sonnet et les grands poètes",
        points: [
          "Sonnet : 14 vers, 2 quatrains + 2 tercets, souvent une chute au dernier vers",
          "Ronsard, Du Bellay (XVIe s.) ; Lamartine, Hugo, Verlaine (XIXe s.)",
        ],
      },
      {
        titre: "Les figures de style du lyrisme",
        points: [
          "Comparaison (avec outil de comparaison) et métaphore (sans outil)",
          "Personnification : donner des traits humains à une chose ou une idée",
          "Ces figures rendent les sentiments plus concrets et intenses",
        ],
      },
    ],
    audio:
      "Fiche de révision : la poésie lyrique. Le lyrisme est l'expression des sentiments personnels du poète, souvent à la première personne, sur des thèmes comme l'amour, la nature ou la fuite du temps. Le vers, ligne de poésie mesurée en syllabes, comme l'alexandrin de douze syllabes, se regroupe en strophes, quatrains ou tercets. Les rimes peuvent être suivies, croisées ou embrassées. Le sonnet, forme fixe de quatorze vers organisée en deux quatrains et deux tercets, est emblématique du lyrisme, chez Ronsard notamment. Les figures de style, comparaison, métaphore et personnification, permettent au poète de rendre ses sentiments plus concrets et plus intenses.",
  },
  memoCards: [
    {
      recto: "Définition de la poésie lyrique ?",
      verso: "Poésie qui exprime les sentiments personnels du poète, souvent à la première personne.",
    },
    {
      recto: "Cite trois grands thèmes lyriques.",
      verso: "L'amour, la nature, la fuite du temps (aussi : la mélancolie, le souvenir).",
    },
    {
      recto: "Combien de syllabes compte un alexandrin ?",
      verso: "12 syllabes.",
    },
    {
      recto: "Qu'est-ce qu'un quatrain ? Un tercet ?",
      verso: "Un quatrain est une strophe de 4 vers ; un tercet, une strophe de 3 vers.",
    },
    {
      recto: "Décris la structure du sonnet.",
      verso: "14 vers : deux quatrains suivis de deux tercets, souvent avec une chute au dernier vers.",
    },
    {
      recto: "Différence entre comparaison et métaphore ?",
      verso: "La comparaison utilise un outil de comparaison (« comme ») ; la métaphore rapproche deux éléments sans cet outil.",
    },
    {
      recto: "Qu'est-ce qu'une personnification ?",
      verso: "Une figure de style qui donne des caractéristiques humaines à une chose ou une idée.",
    },
    {
      recto: "Cite un poète lyrique et l'un de ses thèmes.",
      verso: "Par exemple, Ronsard : la fuite du temps et l'amour (« Mignonne, allons voir si la rose... »).",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La poésie lyrique exprime avant tout :",
      choix: ["des faits historiques précis", "les sentiments personnels du poète", "des règles de grammaire", "une recette de cuisine"],
      bonneReponse: 1,
      explication: "Le lyrisme est le genre de l'expression des émotions et sentiments personnels.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de vers compte un sonnet ?",
      choix: ["8", "10", "12", "14"],
      bonneReponse: 3,
      explication: "Le sonnet comporte 14 vers : deux quatrains et deux tercets.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux thèmes fréquents de la poésie lyrique.",
      reponse: "Par exemple : l'amour et la fuite du temps (ou la nature, la mélancolie).",
      explication: "Ces thèmes reviennent très souvent dans les poèmes lyriques, de Ronsard à Verlaine.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un alexandrin compte :",
      choix: ["8 syllabes", "10 syllabes", "12 syllabes", "14 syllabes"],
      bonneReponse: 2,
      explication: "L'alexandrin est le vers de douze syllabes, le plus utilisé en poésie française classique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans le schéma de rimes ABAB, on parle de rimes :",
      choix: ["suivies", "croisées", "embrassées", "libres"],
      bonneReponse: 1,
      explication: "Les rimes croisées alternent régulièrement selon le schéma ABAB.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Identifie la figure de style dans « Mes larmes coulaient comme une rivière » et explique-la.",
      reponse: "C'est une comparaison : elle rapproche les larmes et la rivière à l'aide de l'outil de comparaison « comme », pour montrer l'intensité du chagrin.",
      explication: "L'outil de comparaison « comme » signale clairement la présence d'une comparaison.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi la nature est souvent utilisée comme « miroir des sentiments » dans la poésie lyrique.",
      reponse: "Parce que le poète projette ses émotions sur un paysage : un ciel gris ou une pluie battante peuvent traduire sa tristesse, tandis qu'un ciel bleu et un jardin fleuri traduisent sa joie. La nature reflète alors l'état d'âme du poète.",
      explication: "Ce procédé permet d'exprimer des sentiments intimes à travers des images concrètes et sensibles.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle figure de style est employée dans « Le vent gémissait dans les branches » ?",
      choix: ["Une comparaison", "Une personnification", "Une énumération", "Une antithèse"],
      bonneReponse: 1,
      explication: "Le verbe « gémir », habituellement humain, est attribué au vent : c'est une personnification.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse le schéma des rimes de ce quatrain (indique si elles sont suivies, croisées ou embrassées), justifie ta réponse. Vers : A - route ; B - lumière ; A - déroute ; B - fière.",
      reponse: "Les rimes sont croisées (ABAB) : « route » (A) rime avec « déroute » (A) et « lumière » (B) rime avec « fière » (B), en alternance régulière.",
      explication: "Le repérage des sons de fin de vers permet de nommer précisément le schéma des rimes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en quelques phrases pourquoi Ronsard invite « Mignonne » à profiter du présent dans son poème sur la rose (thème du Carpe diem).",
      reponse: "Ronsard compare la jeunesse de la femme aimée à une rose qui se fane rapidement : de même que la beauté de la fleur est éphémère, la beauté humaine et la jeunesse passent vite. Il invite donc Mignonne à profiter du temps présent avant qu'il ne soit trop tard, c'est le thème du Carpe diem, « cueille le jour présent ».",
      explication: "Ce thème classique du lyrisme associe la fuite du temps à une invitation à savourer l'instant.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris un quatrain (4 vers, pas besoin de compter les syllabes exactement) exprimant la nostalgie d'un été passé, en utilisant au moins une métaphore ou une comparaison.",
      reponse: "Exemple de corrigé : « L'été s'en est allé, doux voleur de lumière, / Emportant dans ses mains le sable de nos jours. / Il ne reste qu'un rire, une image légère, / Un soleil de mémoire au fond de mon amour. »",
      explication: "On attend l'expression d'un sentiment personnel (nostalgie), une image poétique et un minimum de musicalité.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel poète du XIXe siècle est particulièrement connu pour la musicalité mélancolique de ses vers ?",
      choix: ["Pierre de Ronsard", "Paul Verlaine", "Molière", "Jean de La Fontaine"],
      bonneReponse: 1,
      explication: "Paul Verlaine est célèbre pour la musicalité et la mélancolie de sa poésie, notamment dans Chanson d'automne.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le lyrisme tire son nom :",
      choix: ["d'un instrument, la lyre", "d'un pays", "d'un roi", "d'un fleuve"],
      bonneReponse: 0,
      explication: "La lyre était l'instrument des poètes-chanteurs de l'Antiquité grecque.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Combien de vers comporte un quatrain ? Un tercet ?",
      reponse: "Un quatrain comporte 4 vers ; un tercet comporte 3 vers.",
      explication: "Ces deux types de strophes composent notamment le sonnet.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de comparaison et un exemple de métaphore.",
      reponse: "Comparaison : « Ses yeux brillaient comme des étoiles. » Métaphore : « Ses yeux étaient deux étoiles. »",
      explication: "La différence tient à la présence ou non de l'outil de comparaison « comme ».",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La structure du sonnet est :",
      choix: ["3 quatrains", "2 quatrains + 2 tercets", "4 tercets", "1 quatrain + 1 tercet"],
      bonneReponse: 1,
      explication: "C'est la structure classique du sonnet : 4+4+3+3 vers, soit 14 vers.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi dit-on que la poésie lyrique est souvent écrite à la première personne ?",
      reponse: "Parce que le poète exprime ses propres sentiments et émotions personnelles : il parle en son nom, en disant « je », pour partager une expérience intime avec le lecteur.",
      explication: "Ce n'est pas systématique, mais c'est une caractéristique fréquente du genre lyrique.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La poésie lyrique",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le lyrisme est le genre poétique qui exprime avant tout :",
          choix: ["des connaissances scientifiques", "les sentiments personnels", "l'actualité politique", "des règles de conduite"],
          bonneReponse: 1,
          explication: "Le lyrisme, par définition, met en avant l'expression des sentiments du poète.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un vers ?",
          reponse: "C'est une ligne de poésie, dont on compte généralement les syllabes.",
          explication: "Le vers est l'unité de base de la versification.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans le schéma de rimes ABBA, on parle de rimes :",
          choix: ["suivies", "croisées", "embrassées", "libres"],
          bonneReponse: 2,
          explication: "Les rimes embrassées encadrent une paire de rimes par une autre, selon le schéma ABBA.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Identifie la figure de style : « La lune, pâle et triste, veillait sur la ville endormie. » Justifie ta réponse.",
          reponse: "C'est une personnification : la lune, un astre, se voit attribuer des caractéristiques humaines (« pâle et triste », « veillait »), comme si elle éprouvait des sentiments.",
          explication: "Attribuer un comportement ou une émotion humaine à un élément non humain caractérise la personnification.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le thème du Carpe diem en poésie lyrique et cite un poète associé à ce thème.",
          reponse: "Le Carpe diem, « cueille le jour présent », est l'invitation à profiter de l'instant présent car le temps passe vite et la jeunesse ou la beauté sont éphémères. Pierre de Ronsard est le poète le plus associé à ce thème, notamment dans « Mignonne, allons voir si la rose... ».",
          explication: "Ce thème est étroitement lié à celui de la fuite du temps, très présent dans le lyrisme.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Écris deux vers (pas besoin de rimes parfaites) exprimant la joie du retour du printemps, en utilisant une comparaison ou une métaphore.",
          reponse: "Exemple de corrigé : « Le printemps revient, léger comme un sourire, / Et la terre s'éveille, avide de nous dire. »",
          explication: "On attend l'expression d'un sentiment de joie et l'emploi d'une image poétique claire.",
        },
      ],
    },
    {
      titre: "Examen 2 — La poésie lyrique",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel poète du XVIe siècle a écrit « Mignonne, allons voir si la rose... » ?",
          choix: ["Victor Hugo", "Pierre de Ronsard", "Paul Verlaine", "Alphonse de Lamartine"],
          bonneReponse: 1,
          explication: "Ronsard, poète de la Renaissance, y développe le thème du Carpe diem.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel est le nom du vers de dix syllabes ?",
          reponse: "Le décasyllabe.",
          explication: "L'octosyllabe compte 8 syllabes, le décasyllabe 10, et l'alexandrin 12.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans quel type de rimes deux vers qui se suivent riment-ils toujours ensemble ?",
          choix: ["Rimes croisées", "Rimes embrassées", "Rimes suivies", "Rimes libres"],
          bonneReponse: 2,
          explication: "Les rimes suivies (AABB) font rimer les vers deux par deux, consécutivement.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "En quoi la nature peut-elle être un « miroir des sentiments » du poète ? Donne un exemple.",
          reponse: "Le poète projette son état d'âme sur le paysage décrit : par exemple, un ciel d'orage et une pluie battante peuvent exprimer sa tristesse ou son angoisse, comme dans de nombreux poèmes romantiques et lyriques.",
          explication: "Ce procédé permet de rendre visible et sensible une émotion intérieure abstraite.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle est la différence entre une comparaison et une métaphore ? Donne un exemple pour chacune.",
          reponse: "La comparaison utilise un outil de comparaison (« comme », « tel que », « pareil à ») pour rapprocher deux éléments : « Il pleure comme un enfant. » La métaphore fait le même rapprochement sans cet outil : « Il est un enfant qui pleure. »",
          explication: "La métaphore est souvent considérée comme plus forte, plus condensée que la comparaison.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade dit : « Tous les poèmes qui parlent de la nature sont lyriques. » Explique pourquoi cette affirmation est trop générale.",
          reponse: "Ce n'est pas exact : un poème peut décrire la nature sans exprimer de sentiment personnel (par exemple un poème purement descriptif ou scientifique). Un poème n'est lyrique que s'il exprime les émotions et sentiments intimes du poète, la nature n'étant alors qu'un moyen, parmi d'autres, de traduire cette émotion.",
          explication: "Le critère du lyrisme est l'expression du sentiment personnel, pas seulement le thème abordé.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Lyrisme = expression des sentiments personnels du poète, souvent à la première personne.",
    "Grands thèmes : l'amour, la nature (miroir des sentiments), la fuite du temps, la mélancolie.",
    "Vers = ligne de poésie (alexandrin = 12 syllabes) ; strophe = groupe de vers (quatrain = 4, tercet = 3).",
    "Rimes suivies (AABB), croisées (ABAB), embrassées (ABBA).",
    "Le sonnet : 14 vers, deux quatrains et deux tercets, souvent une chute au dernier vers (Ronsard, Du Bellay, Baudelaire).",
    "Figures de style clés du lyrisme : comparaison, métaphore, personnification.",
  ],
};

export default chapitre;
