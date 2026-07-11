import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "islam-medieval",
  titre: "La naissance de l'islam et ses empires",
  matiere: "histoire-geo",
  niveau: "5eme",
  description:
    "Découvrir la naissance de l'islam en Arabie au VIIe siècle, son expansion fulgurante et la brillante civilisation des califats omeyyade et abbasside.",
  objectifs: [
    "Connaître Mahomet, la révélation du Coran et l'Hégire de 622",
    "Connaître les cinq piliers de l'islam",
    "Comprendre l'expansion rapide du monde musulman après la mort de Mahomet",
    "Connaître les califats omeyyade (Damas) et abbasside (Bagdad)",
    "Savoir que le monde musulman médiéval a connu un grand rayonnement scientifique et culturel",
  ],
  slides: [
    {
      titre: "L'Arabie avant l'islam",
      illustration: "🏜️",
      visuel: "Arabie, VIe siècle",
      contenu: [
        "Au VIe siècle, l'Arabie est peuplée de tribus nomades et sédentaires",
        "La Mecque est une ville-carrefour du commerce caravanier",
        "Les Arabes pratiquent des religions polythéistes",
        "La Kaaba, à La Mecque, est déjà un lieu de pèlerinage",
      ],
      voixOff:
        "Avant le septième siècle, l'Arabie est un vaste désert habité par des tribus, certaines nomades, d'autres installées dans des villes. La Mecque est une cité prospère, étape importante des caravanes de commerce. La plupart des Arabes sont alors polythéistes. La Kaaba, un sanctuaire au centre de La Mecque, est déjà un lieu de pèlerinage très fréquenté.",
    },
    {
      titre: "Mahomet et la révélation",
      illustration: "📖",
      visuel: "610 : première révélation",
      contenu: [
        "Mahomet naît vers 570 à La Mecque",
        "Vers 610, il reçoit les premières révélations de l'ange Gabriel",
        "Ces révélations forment le Coran, livre sacré des musulmans",
        "Mahomet prêche l'existence d'un dieu unique, Allah",
      ],
      voixOff:
        "Mahomet naît vers cinq cent soixante-dix à La Mecque. Vers l'an six cent dix, il reçoit, selon la tradition musulmane, les premières révélations de l'ange Gabriel. Ces messages, transmis pendant plus de vingt ans, seront rassemblés dans le Coran, le livre sacré de l'islam. Mahomet annonce l'existence d'un dieu unique, Allah, et devient le prophète de cette nouvelle religion.",
    },
    {
      titre: "L'Hégire, an 1 du calendrier musulman",
      illustration: "🐫",
      visuel: "622 : l'Hégire",
      contenu: [
        "Rejeté par les notables de La Mecque, Mahomet quitte la ville en 622",
        "Il s'installe à Médine avec ses premiers fidèles : c'est l'Hégire",
        "Cette date marque le début du calendrier musulman",
        "Repère à retenir : 622, l'Hégire",
      ],
      voixOff:
        "À La Mecque, les prédications de Mahomet dérangent les notables. En six cent vingt-deux, il quitte la ville avec ses fidèles pour s'installer à Médine : c'est l'Hégire, qui signifie l'émigration. Cet événement est si important qu'il marque le début du calendrier musulman. Retiens bien cette date : six cent vingt-deux, l'Hégire.",
    },
    {
      titre: "Les cinq piliers de l'islam",
      illustration: "🕌",
      visuel: "5 piliers",
      contenu: [
        "La chahada : profession de foi (« il n'y a de dieu qu'Allah »)",
        "La prière, cinq fois par jour, tournée vers La Mecque",
        "L'aumône aux pauvres et le jeûne du ramadan",
        "Le pèlerinage à La Mecque au moins une fois dans sa vie",
      ],
      voixOff:
        "L'islam repose sur cinq obligations appelées les cinq piliers. La chahada, la profession de foi. La prière, cinq fois par jour, tournée vers La Mecque. L'aumône, qui aide les plus pauvres, et le jeûne du mois de ramadan. Enfin, le pèlerinage à La Mecque, que tout musulman qui le peut doit accomplir une fois dans sa vie.",
    },
    {
      titre: "L'expansion fulgurante du monde musulman",
      illustration: "🗺️",
      visuel: "VIIe-VIIIe siècle",
      contenu: [
        "Après la mort de Mahomet en 632, des califes lui succèdent",
        "Les conquêtes s'étendent très vite : Perse, Égypte, Afrique du Nord",
        "En 711, les musulmans conquièrent une grande partie de l'Espagne",
        "En un siècle, un immense empire s'étend de l'Espagne à l'Inde",
      ],
      voixOff:
        "Mahomet meurt en six cent trente-deux. Des califes, ses successeurs, prennent alors la tête de la communauté musulmane et lancent de grandes conquêtes. En quelques décennies, les armées musulmanes soumettent la Perse, l'Égypte et l'Afrique du Nord. En sept cent onze, elles franchissent le détroit de Gibraltar et conquièrent une grande partie de l'Espagne. En un siècle à peine, un immense empire s'étend de l'Espagne jusqu'à l'Inde.",
    },
    {
      titre: "Le califat omeyyade puis abbasside",
      illustration: "🕋",
      visuel: "Damas → Bagdad",
      contenu: [
        "De 661 à 750, la dynastie omeyyade règne depuis Damas",
        "En 750, la dynastie abbasside prend le pouvoir",
        "Les Abbassides fondent Bagdad en 762, nouvelle capitale",
        "Bagdad devient une ville immense et brillante",
      ],
      voixOff:
        "De six cent soixante et un à sept cent cinquante, la dynastie des Omeyyades dirige l'empire musulman depuis Damas. En sept cent cinquante, une nouvelle famille, les Abbassides, prend le pouvoir. Ils fondent une nouvelle capitale, Bagdad, en sept cent soixante-deux. Cette ville devient rapidement l'une des plus grandes et des plus brillantes du monde.",
    },
    {
      titre: "Bagdad, capitale des sciences",
      illustration: "🔬",
      visuel: "Maison de la Sagesse",
      contenu: [
        "À Bagdad, les califes créent la Maison de la Sagesse",
        "Savants et traducteurs y étudient les textes grecs, perses et indiens",
        "Al-Khwarizmi invente l'algèbre et diffuse les chiffres dits « arabes »",
        "Progrès en médecine, astronomie et architecture",
      ],
      voixOff:
        "Bagdad devient un immense centre du savoir. Les califes y font construire la Maison de la Sagesse, où des savants traduisent et étudient les textes grecs, perses et indiens. Le mathématicien al-Khwarizmi y invente l'algèbre et fait connaître les chiffres que l'on appellera plus tard les chiffres arabes. Cette civilisation brillante progresse aussi en médecine, en astronomie et en architecture, avec ses mosquées ornées de calligraphies.",
    },
    {
      titre: "Une société organisée et tolérante",
      illustration: "⚖️",
      visuel: "Calife, cadi, dhimmis",
      contenu: [
        "Le calife dirige l'empire, aidé par des vizirs (ministres)",
        "Les cadis sont les juges qui appliquent le droit musulman",
        "Juifs et chrétiens, appelés dhimmis, sont protégés mais paient un impôt spécial",
        "Le commerce prospère grâce aux grandes routes caravanières",
      ],
      voixOff:
        "Le calife dirige l'empire musulman avec l'aide de vizirs, ses ministres. Les cadis sont les juges qui rendent la justice selon le droit musulman. Les juifs et les chrétiens, appelés dhimmis, ont le droit de pratiquer leur religion en échange du paiement d'un impôt spécial. Grâce à sa position entre l'Europe, l'Afrique et l'Asie, le monde musulman profite aussi d'un commerce très actif sur les routes caravanières.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "610 : premières révélations à Mahomet ; 622 : l'Hégire, an 1 du calendrier musulman",
        "Cinq piliers de l'islam : chahada, prière, aumône, jeûne, pèlerinage",
        "Expansion rapide au VIIe-VIIIe siècle : Omeyyades (Damas) puis Abbassides (Bagdad, 762)",
        "Bagdad, brillant centre scientifique et culturel du monde médiéval",
      ],
      voixOff:
        "Résumons. En six cent dix, Mahomet reçoit les premières révélations qui formeront le Coran. En six cent vingt-deux, l'Hégire marque le début du calendrier musulman. L'islam repose sur cinq piliers essentiels. Après la mort de Mahomet, l'empire musulman s'étend très vite, dirigé d'abord par les Omeyyades depuis Damas, puis par les Abbassides depuis Bagdad à partir de sept cent soixante-deux. Bagdad devient alors un extraordinaire centre de sciences et de savoirs. Bravo, tu connais l'essentiel de ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "Au VIIe siècle, une nouvelle religion, l'islam, naît en Arabie avec le prophète Mahomet. En quelques décennies, elle donne naissance à un immense empire, brillant sur le plan scientifique et culturel.",
    sections: [
      {
        titre: "La naissance de l'islam",
        points: [
          "Mahomet naît vers 570 à La Mecque",
          "Vers 610, il reçoit les révélations rassemblées dans le Coran",
          "622 : l'Hégire, départ pour Médine, an 1 du calendrier musulman",
          "Mahomet meurt en 632, après avoir unifié l'Arabie autour de l'islam",
        ],
      },
      {
        titre: "Les cinq piliers de l'islam",
        points: [
          "La chahada (profession de foi)",
          "La prière (cinq fois par jour)",
          "L'aumône aux pauvres",
          "Le jeûne du ramadan",
          "Le pèlerinage à La Mecque",
        ],
      },
      {
        titre: "Un empire en pleine expansion",
        points: [
          "Après 632, les califes conquièrent la Perse, l'Égypte, l'Afrique du Nord",
          "711 : conquête d'une grande partie de l'Espagne",
          "661-750 : dynastie omeyyade, capitale Damas",
          "750 : les Abbassides prennent le pouvoir ; 762 : fondation de Bagdad",
        ],
      },
      {
        titre: "Une brillante civilisation",
        points: [
          "Bagdad : la Maison de la Sagesse, traduction des textes grecs et perses",
          "Al-Khwarizmi invente l'algèbre, diffusion des chiffres « arabes »",
          "Progrès en médecine, astronomie, architecture (mosquées, calligraphie)",
          "Société organisée : calife, vizirs, cadis ; juifs et chrétiens protégés (dhimmis)",
        ],
      },
    ],
    audio:
      "Fiche de révision : la naissance de l'islam et ses empires. Au septième siècle, Mahomet, né vers cinq cent soixante-dix à La Mecque, reçoit à partir de six cent dix des révélations rassemblées dans le Coran. En six cent vingt-deux, l'Hégire, son départ pour Médine, marque le début du calendrier musulman. L'islam repose sur cinq piliers : la profession de foi, la prière, l'aumône, le jeûne du ramadan et le pèlerinage à La Mecque. Après la mort de Mahomet en six cent trente-deux, les califes lancent de grandes conquêtes : en un siècle, l'empire musulman s'étend de l'Espagne, conquise en sept cent onze, jusqu'à l'Inde. Les Omeyyades dirigent l'empire depuis Damas jusqu'en sept cent cinquante, puis les Abbassides depuis leur nouvelle capitale, Bagdad, fondée en sept cent soixante-deux. Bagdad devient un centre scientifique brillant, avec la Maison de la Sagesse et des savants comme al-Khwarizmi, inventeur de l'algèbre.",
  },
  memoCards: [
    { recto: "Qui est Mahomet ?", verso: "Le prophète de l'islam, né vers 570 à La Mecque, qui reçoit les révélations du Coran à partir de 610." },
    { recto: "Qu'est-ce que l'Hégire ?", verso: "Le départ de Mahomet de La Mecque vers Médine en 622 ; c'est l'an 1 du calendrier musulman." },
    { recto: "Quels sont les cinq piliers de l'islam ?", verso: "La chahada, la prière, l'aumône, le jeûne du ramadan et le pèlerinage à La Mecque." },
    { recto: "Qu'est-ce que le Coran ?", verso: "Le livre sacré des musulmans, rassemblant les révélations reçues par Mahomet." },
    { recto: "Qui sont les Omeyyades ?", verso: "La première grande dynastie de califes (661-750), qui gouverne depuis Damas." },
    { recto: "Qui sont les Abbassides ?", verso: "La dynastie qui succède aux Omeyyades en 750 et fonde Bagdad en 762." },
    { recto: "Qu'est-ce que la Maison de la Sagesse ?", verso: "Un centre savant de Bagdad où l'on traduit et étudie les textes grecs, perses et indiens." },
    { recto: "Qui sont les dhimmis ?", verso: "Les juifs et les chrétiens, protégés dans l'empire musulman en échange d'un impôt spécial." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Où naît Mahomet ?",
      choix: ["Bagdad", "Médine", "La Mecque", "Damas"],
      bonneReponse: 2,
      explication: "Mahomet naît vers 570 à La Mecque, ville d'Arabie où se trouve la Kaaba.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que marque l'Hégire, en 622 ?",
      choix: [
        "La mort de Mahomet",
        "Le début du calendrier musulman",
        "La fondation de Bagdad",
        "La conquête de l'Espagne",
      ],
      bonneReponse: 1,
      explication: "L'Hégire, le départ de Mahomet vers Médine en 622, marque le début du calendrier musulman.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment s'appelle le livre sacré des musulmans ?",
      reponse: "Le Coran.",
      explication: "Le Coran rassemble les révélations reçues par Mahomet à partir de 610.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de piliers compte l'islam ?",
      choix: ["Trois", "Quatre", "Cinq", "Sept"],
      bonneReponse: 2,
      explication: "L'islam repose sur cinq piliers : chahada, prière, aumône, jeûne et pèlerinage.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "En quelle année les musulmans conquièrent-ils une grande partie de l'Espagne ?",
      choix: ["622", "632", "711", "762"],
      bonneReponse: 2,
      explication: "En 711, les armées musulmanes franchissent le détroit de Gibraltar et conquièrent une grande partie de l'Espagne.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle dynastie dirige l'empire musulman depuis Damas, de 661 à 750 ?",
      reponse: "La dynastie omeyyade.",
      explication: "Les Omeyyades gouvernent l'empire musulman depuis Damas jusqu'à leur remplacement par les Abbassides en 750.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle ville les Abbassides fondent-ils en 762 ?",
      reponse: "Bagdad, leur nouvelle capitale.",
      explication: "Bagdad devient rapidement une ville immense, riche et brillante sur le plan scientifique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui sont les dhimmis dans l'empire musulman ?",
      choix: [
        "Les juges qui appliquent le droit musulman",
        "Les juifs et les chrétiens protégés en échange d'un impôt",
        "Les savants de la Maison de la Sagesse",
        "Les ministres du calife",
      ],
      bonneReponse: 1,
      explication: "Les dhimmis sont les juifs et les chrétiens, autorisés à pratiquer leur religion en échange du paiement d'un impôt spécial.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi Bagdad est considérée comme un grand centre scientifique au Moyen Âge.",
      reponse:
        "Les califes abbassides y font construire la Maison de la Sagesse, où des savants traduisent et étudient les textes grecs, perses et indiens. Des savants comme al-Khwarizmi y font progresser les mathématiques, la médecine et l'astronomie.",
      explication: "Bagdad rassemble des savoirs venus de plusieurs civilisations et les fait progresser, notamment grâce à al-Khwarizmi, inventeur de l'algèbre.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Qu'invente le savant al-Khwarizmi ?",
      choix: ["La boussole", "L'algèbre", "L'imprimerie", "L'astrolabe"],
      bonneReponse: 1,
      explication: "Al-Khwarizmi, savant de Bagdad, invente l'algèbre et diffuse les chiffres dits « arabes ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Comment l'empire musulman a-t-il pu s'étendre aussi rapidement entre 632 et 750 ?",
      reponse:
        "Après la mort de Mahomet, les califes qui lui succèdent organisent de grandes conquêtes militaires. En un siècle, ils soumettent la Perse, l'Égypte, l'Afrique du Nord puis une grande partie de l'Espagne, profitant de l'affaiblissement des puissances voisines.",
      explication: "Les conquêtes rapides s'expliquent par l'organisation militaire des califes et la faiblesse des empires perse et byzantin voisins.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Cite deux apports scientifiques ou culturels du monde musulman médiéval.",
      reponse:
        "L'invention de l'algèbre par al-Khwarizmi et la diffusion des chiffres « arabes » ; la traduction et la conservation des textes grecs, perses et indiens à la Maison de la Sagesse de Bagdad.",
      explication: "Le monde musulman médiéval a transmis et enrichi de nombreux savoirs, notamment en mathématiques, médecine et astronomie.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année Mahomet reçoit-il les premières révélations ?",
      choix: ["570", "610", "622", "632"],
      bonneReponse: 1,
      explication: "Vers 610, Mahomet reçoit, selon la tradition musulmane, les premières révélations de l'ange Gabriel.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux des cinq piliers de l'islam.",
      reponse: "Par exemple : la prière et le jeûne du ramadan (ou la chahada, l'aumône, le pèlerinage).",
      explication: "Les cinq piliers sont la chahada, la prière, l'aumône, le jeûne du ramadan et le pèlerinage à La Mecque.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle capitale les Abbassides fondent-ils en 762 ?",
      reponse: "Bagdad.",
      explication: "Bagdad devient la capitale du califat abbasside et un grand centre scientifique et culturel.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel est le rôle du calife dans l'empire musulman ?",
      choix: ["Il est juge local", "Il dirige l'empire", "Il traduit les textes grecs", "Il collecte l'impôt des dhimmis"],
      bonneReponse: 1,
      explication: "Le calife est le chef politique et religieux de l'empire musulman, aidé par des vizirs.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que le monde musulman médiéval est une civilisation brillante ?",
      reponse:
        "Parce qu'il connaît de grands progrès scientifiques (mathématiques, médecine, astronomie), un commerce florissant et une architecture remarquable, tout en conservant et transmettant les savoirs des civilisations grecque, perse et indienne.",
      explication: "Cette question demande de relier expansion territoriale, tolérance religieuse et rayonnement scientifique.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La naissance de l'islam et ses empires",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel livre rassemble les révélations reçues par Mahomet ?",
          choix: ["La Torah", "Le Coran", "La Bible", "Le Talmud"],
          bonneReponse: 1,
          explication: "Le Coran est le livre sacré de l'islam, rassemblant les révélations de Mahomet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "En quelle année a lieu l'Hégire, et que marque-t-elle ?",
          reponse: "En 622 ; elle marque le début du calendrier musulman.",
          explication: "L'Hégire est le départ de Mahomet de La Mecque vers Médine.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle dynastie succède aux Omeyyades en 750 ?",
          choix: ["Les Abbassides", "Les Carolingiens", "Les Rachidun", "Les Ottomans"],
          bonneReponse: 0,
          explication: "En 750, les Abbassides prennent le pouvoir et fondent Bagdad en 762.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que la Maison de la Sagesse de Bagdad ?",
          reponse:
            "Un centre savant où des traducteurs et des savants étudient et traduisent les textes grecs, perses et indiens, faisant progresser les sciences.",
          explication: "La Maison de la Sagesse illustre le rayonnement intellectuel du califat abbasside.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux territoires conquis par les musulmans entre 632 et 750.",
          reponse: "Par exemple : la Perse et l'Égypte (ou l'Afrique du Nord, l'Espagne).",
          explication: "En un siècle, l'empire musulman s'étend de l'Espagne à l'Inde.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre comment l'islam est né en Arabie au VIIe siècle et comment il a donné naissance à un vaste empire (une quinzaine de lignes, avec des exemples précis).",
          reponse:
            "Introduction : au septième siècle, une nouvelle religion naît en Arabie. Première partie : Mahomet, né vers 570 à La Mecque, reçoit à partir de 610 des révélations rassemblées dans le Coran ; en 622, l'Hégire marque son départ vers Médine et le début du calendrier musulman ; l'islam repose sur cinq piliers. Deuxième partie : après sa mort en 632, les califes lancent de grandes conquêtes ; en un siècle, l'empire s'étend de l'Espagne, conquise en 711, jusqu'à l'Inde, dirigé d'abord par les Omeyyades depuis Damas puis par les Abbassides depuis Bagdad, fondée en 762. Conclusion : cet empire devient aussi un brillant centre scientifique et culturel.",
          explication:
            "Un bon développement construit comporte une introduction, deux parties organisées avec des dates précises (610, 622, 632, 711, 762) et une conclusion.",
        },
      ],
    },
    {
      titre: "Examen 2 — La naissance de l'islam et ses empires",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle ville est le lieu de pèlerinage des musulmans ?",
          choix: ["Médine", "Bagdad", "La Mecque", "Damas"],
          bonneReponse: 2,
          explication: "La Mecque, où se trouve la Kaaba, est le lieu du pèlerinage, un des cinq piliers de l'islam.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Comment s'appelle le mois de jeûne des musulmans ?",
          reponse: "Le ramadan.",
          explication: "Le jeûne du ramadan est l'un des cinq piliers de l'islam.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel savant invente l'algèbre à Bagdad ?",
          choix: ["Avicenne", "Al-Khwarizmi", "Ibn Battuta", "Averroès"],
          bonneReponse: 1,
          explication: "Al-Khwarizmi, mathématicien de Bagdad, invente l'algèbre et diffuse les chiffres dits « arabes ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qui sont les dhimmis et quel est leur statut dans l'empire musulman ?",
          reponse:
            "Ce sont les juifs et les chrétiens : ils sont autorisés à pratiquer leur religion mais doivent payer un impôt spécial.",
          explication: "Le statut de dhimmi illustre une certaine tolérance religieuse dans l'empire musulman médiéval.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle ville devient la capitale du califat abbasside et en quelle année ?",
          reponse: "Bagdad, fondée en 762.",
          explication: "Bagdad remplace Damas comme capitale et devient un immense centre urbain et savant.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique en quoi la civilisation musulmane médiévale a été un grand foyer de sciences et de savoirs.",
          reponse:
            "Introduction : à partir du huitième siècle, le monde musulman devient un centre intellectuel majeur. Première partie : à Bagdad, la Maison de la Sagesse rassemble des savants qui traduisent les textes grecs, perses et indiens. Deuxième partie : ces travaux permettent de grandes avancées, comme l'invention de l'algèbre par al-Khwarizmi, les progrès en médecine et en astronomie, et une architecture raffinée avec les mosquées. Conclusion : ce savoir circule ensuite vers l'Europe, notamment via l'Espagne musulmane, et influence durablement les sciences occidentales.",
          explication:
            "On attend un développement organisé avec des exemples précis (Maison de la Sagesse, al-Khwarizmi) et une réflexion sur la transmission des savoirs.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 610, premières révélations reçues par Mahomet, rassemblées dans le Coran.",
    "Repère brevet : 622, l'Hégire, an 1 du calendrier musulman.",
    "Les cinq piliers de l'islam : chahada, prière, aumône, jeûne du ramadan, pèlerinage à La Mecque.",
    "Expansion rapide après 632 : Omeyyades (Damas, 661-750) puis Abbassides (Bagdad, fondée en 762).",
    "Bagdad, brillant centre scientifique : Maison de la Sagesse, al-Khwarizmi et l'algèbre.",
    "Société tolérante : calife, vizirs, cadis ; juifs et chrétiens protégés (dhimmis).",
  ],
};

export default chapitre;
