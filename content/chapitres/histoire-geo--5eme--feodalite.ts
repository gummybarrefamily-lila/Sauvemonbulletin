import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "feodalite",
  titre: "Seigneurs et paysans : la féodalité",
  matiere: "histoire-geo",
  niveau: "5eme",
  description:
    "Comprendre l'organisation de la société féodale en Occident, entre le Xe et le XIIe siècle : le château fort, les liens de vassalité, les trois ordres et la vie des paysans.",
  objectifs: [
    "Comprendre pourquoi le pouvoir se fragmente après l'Empire carolingien",
    "Connaître le lien de vassalité : hommage, suzerain, vassal, fief",
    "Connaître l'organisation de la seigneurie et la vie des paysans",
    "Connaître la théorie des trois ordres de la société médiévale",
    "Savoir décrire un château fort et le rôle du chevalier",
  ],
  slides: [
    {
      titre: "La fin de l'ordre carolingien",
      illustration: "⚔️",
      visuel: "IXe-Xe siècle",
      contenu: [
        "Après Charlemagne, l'Empire carolingien se divise (traité de Verdun, 843)",
        "De nouvelles invasions frappent l'Europe : Vikings, Hongrois, Sarrasins",
        "Le pouvoir royal s'affaiblit face à ces menaces",
        "De grands seigneurs locaux prennent en charge la défense des populations",
      ],
      voixOff:
        "Après la mort de Charlemagne, l'empire est partagé entre ses petits-fils par le traité de Verdun, en huit cent quarante-trois. L'Europe subit alors nourvelles invasions : les Vikings venus du nord, les Hongrois venus de l'est, les Sarrasins venus du sud. Le roi, trop loin et trop faible, ne peut plus protéger tout le royaume. Ce sont des seigneurs locaux qui prennent en charge la défense des populations.",
    },
    {
      titre: "Le château fort, cœur du pouvoir seigneurial",
      illustration: "🏰",
      visuel: "Château fort",
      contenu: [
        "D'abord en bois sur une motte, puis en pierre à partir du XIe siècle",
        "Le château protège le seigneur et les habitants en cas d'attaque",
        "Il abrite le donjon, les remparts, les douves",
        "Depuis son château, le seigneur exerce le ban : commander, juger, punir",
      ],
      voixOff:
        "Le château fort devient le symbole du pouvoir seigneurial. D'abord construit en bois sur une butte de terre, la motte, il est ensuite bâti en pierre à partir du onzième siècle, avec son donjon, ses remparts et parfois des douves. En cas d'attaque, il sert de refuge à la population. Depuis son château, le seigneur exerce ce qu'on appelle le ban : le droit de commander, de juger et de punir les habitants de sa seigneurie.",
    },
    {
      titre: "Le lien de vassalité",
      illustration: "🤝",
      visuel: "Suzerain ↔ Vassal",
      contenu: [
        "Un seigneur puissant, le suzerain, accorde un fief à un vassal",
        "En échange, le vassal lui prête un serment de fidélité : l'hommage",
        "Le vassal doit aide militaire (l'ost) et conseil à son suzerain",
        "Le suzerain doit protection et justice à son vassal",
      ],
      voixOff:
        "Pour organiser la société, les seigneurs tissent entre eux des liens de vassalité. Un seigneur puissant, le suzerain, accorde une terre, le fief, à un autre seigneur, le vassal. En échange, le vassal lui prête un serment de fidélité lors d'une cérémonie appelée l'hommage. Le vassal doit alors aide militaire et conseil à son suzerain, qui lui doit en retour protection et justice.",
    },
    {
      titre: "La seigneurie",
      illustration: "🌾",
      visuel: "Réserve + tenures",
      contenu: [
        "La seigneurie est divisée entre la réserve (terres du seigneur) et les tenures",
        "Les tenures sont louées aux paysans en échange de redevances",
        "Les paysans doivent aussi des corvées : travail gratuit pour le seigneur",
        "Le seigneur possède les banalités : four, moulin, pressoir, payants",
      ],
      voixOff:
        "La seigneurie est le territoire dirigé par le seigneur. Elle se divise entre la réserve, que le seigneur garde pour lui, et les tenures, des parcelles louées aux paysans en échange de redevances, souvent payées en nature. Les paysans doivent aussi des corvées, des jours de travail gratuit pour le seigneur. Enfin, ils sont obligés d'utiliser le four, le moulin et le pressoir du seigneur, appelés banalités, en payant une taxe.",
    },
    {
      titre: "Serfs et vilains, la vie des paysans",
      illustration: "🧑‍🌾",
      visuel: "Openfield",
      contenu: [
        "Les vilains sont des paysans libres, les serfs dépendent totalement du seigneur",
        "Les paysans travaillent la terre avec des outils simples (charrue, faucille)",
        "L'assolement triennal permet de reposer une partie des terres chaque année",
        "La vie paysanne est rude : famines et maladies sont fréquentes",
      ],
      voixOff:
        "Parmi les paysans, on distingue les vilains, des hommes libres, et les serfs, qui dépendent entièrement du seigneur et ne peuvent pas quitter la terre sans son accord. Les paysans travaillent avec des outils simples comme la charrue ou la faucille. Beaucoup pratiquent l'assolement triennal : chaque année, un tiers des terres est laissé au repos pour rester fertile. La vie paysanne reste rude, marquée par des famines et des maladies fréquentes.",
    },
    {
      titre: "Les trois ordres de la société",
      illustration: "⛪",
      visuel: "Prier / Combattre / Travailler",
      contenu: [
        "Ceux qui prient : le clergé (évêques, moines, curés)",
        "Ceux qui combattent : la noblesse (seigneurs et chevaliers)",
        "Ceux qui travaillent : les paysans, très largement majoritaires",
        "Cette organisation est présentée comme voulue par Dieu",
      ],
      voixOff:
        "Les hommes du Moyen Âge pensent que la société doit être divisée en trois ordres. Ceux qui prient : c'est le clergé, avec les évêques, les moines et les curés. Ceux qui combattent : c'est la noblesse, seigneurs et chevaliers. Ceux qui travaillent : ce sont les paysans, de très loin les plus nombreux. Cette organisation est présentée à l'époque comme voulue par Dieu.",
    },
    {
      titre: "Le chevalier et l'adoubement",
      illustration: "🗡️",
      visuel: "Adoubement",
      contenu: [
        "Le chevalier est un guerrier à cheval, équipé d'une épée et d'un bouclier",
        "Il devient chevalier lors d'une cérémonie appelée l'adoubement",
        "Il doit respecter un code d'honneur : courage, loyauté, protection des faibles",
        "L'Église tente d'encadrer la violence des chevaliers (paix et trêve de Dieu)",
      ],
      voixOff:
        "Le chevalier est un guerrier combattant à cheval, équipé d'une épée, d'un bouclier et d'une armure. Il devient officiellement chevalier lors d'une cérémonie, l'adoubement. On attend de lui qu'il respecte un code d'honneur : courage au combat, loyauté envers son suzerain, protection des plus faibles. Face à la violence de ces guerriers, l'Église tente d'imposer des règles, comme la paix de Dieu et la trêve de Dieu, qui limitent les combats.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Xe-XIIe siècle : la société féodale s'organise autour du château fort",
        "Vassalité : suzerain, vassal, fief, hommage",
        "Seigneurie : réserve, tenures, corvées, banalités",
        "Trois ordres : clergé, noblesse, paysans",
      ],
      voixOff:
        "Résumons. Entre le dixième et le douzième siècle, la société féodale s'organise autour du château fort et du pouvoir des seigneurs. Les liens de vassalité unissent suzerains et vassaux autour du fief et de l'hommage. Dans la seigneurie, les paysans travaillent la réserve et leurs tenures, paient des redevances et subissent corvées et banalités. Enfin, la société est pensée en trois ordres : ceux qui prient, ceux qui combattent, ceux qui travaillent. Bravo, tu connais l'essentiel de ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "Entre le Xe et le XIIe siècle, face à l'affaiblissement du pouvoir royal et aux invasions, la société d'Occident s'organise autour des seigneurs, des châteaux forts et de liens personnels de fidélité : c'est la féodalité.",
    sections: [
      {
        titre: "Un pouvoir qui se fragmente",
        points: [
          "843 : traité de Verdun, partage de l'Empire carolingien",
          "Nouvelles invasions : Vikings, Hongrois, Sarrasins",
          "Le roi ne peut plus protéger tout son royaume",
          "Des seigneurs locaux prennent en charge la défense, depuis leur château fort",
        ],
      },
      {
        titre: "Le lien de vassalité",
        points: [
          "Le suzerain accorde un fief à un vassal",
          "Le vassal prête serment de fidélité lors de l'hommage",
          "Le vassal doit aide militaire et conseil, le suzerain doit protection et justice",
        ],
      },
      {
        titre: "La seigneurie et les paysans",
        points: [
          "Réserve (terres du seigneur) et tenures (louées aux paysans)",
          "Redevances, corvées et banalités (four, moulin, pressoir)",
          "Serfs (dépendants) et vilains (libres) ; assolement triennal",
        ],
      },
      {
        titre: "Les trois ordres",
        points: [
          "Le clergé : ceux qui prient",
          "La noblesse : ceux qui combattent (chevaliers, adoubement)",
          "Les paysans : ceux qui travaillent, très majoritaires",
        ],
      },
    ],
    audio:
      "Fiche de révision : seigneurs et paysans, la féodalité. Après le partage de l'Empire carolingien au traité de Verdun en huit cent quarante-trois, l'Europe subit de nouvelles invasions, vikings, hongroises et sarrasines. Le pouvoir royal s'affaiblit et des seigneurs locaux prennent en charge la protection des populations depuis leur château fort. Une société de liens personnels se met en place : le suzerain accorde un fief à son vassal, qui lui prête serment de fidélité lors de l'hommage et lui doit aide militaire et conseil, en échange de protection et de justice. Dans la seigneurie, les paysans, serfs ou vilains, cultivent leur tenure, versent des redevances au seigneur, effectuent des corvées et utilisent ses banalités, comme le four ou le moulin. La société médiévale est pensée en trois ordres : le clergé qui prie, la noblesse qui combat, et les paysans qui travaillent.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un fief ?", verso: "Une terre accordée par un suzerain à son vassal en échange de fidélité." },
    { recto: "Qu'est-ce que l'hommage ?", verso: "La cérémonie où le vassal jure fidélité à son suzerain." },
    { recto: "Qu'est-ce que le ban ?", verso: "Le pouvoir du seigneur de commander, juger et punir ses habitants." },
    { recto: "Quelle est la différence entre serf et vilain ?", verso: "Le vilain est un paysan libre ; le serf dépend entièrement du seigneur et ne peut quitter la terre sans son accord." },
    { recto: "Que sont les banalités ?", verso: "Le four, le moulin et le pressoir du seigneur, que les paysans doivent utiliser en payant une taxe." },
    { recto: "Quels sont les trois ordres de la société médiévale ?", verso: "Le clergé (prier), la noblesse (combattre), les paysans (travailler)." },
    { recto: "Qu'est-ce que l'adoubement ?", verso: "La cérémonie au cours de laquelle un jeune noble devient officiellement chevalier." },
    { recto: "Qu'est-ce que l'assolement triennal ?", verso: "Une technique agricole où un tiers des terres est laissé au repos chaque année pour rester fertile." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel traité partage l'Empire carolingien en 843 ?",
      choix: ["Le traité de Verdun", "Le traité de Rome", "Le traité d'Aix-la-Chapelle", "Le traité de Damas"],
      bonneReponse: 0,
      explication: "Le traité de Verdun, en 843, partage l'empire entre les trois petits-fils de Charlemagne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on la terre accordée par un suzerain à son vassal ?",
      choix: ["La réserve", "Le fief", "La tenure", "Le ban"],
      bonneReponse: 1,
      explication: "Le fief est la terre accordée par le suzerain à son vassal en échange de fidélité.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment s'appelle la cérémonie où un jeune noble devient chevalier ?",
      reponse: "L'adoubement.",
      explication: "L'adoubement est la cérémonie officielle qui fait d'un jeune noble un chevalier.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le rôle des paysans dans la théorie des trois ordres ?",
      choix: ["Prier", "Combattre", "Travailler", "Juger"],
      bonneReponse: 2,
      explication: "Les paysans forment l'ordre de « ceux qui travaillent », très largement majoritaire.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que doit le vassal à son suzerain ?",
      choix: ["Un fief", "Aide militaire et conseil", "La construction d'un château", "Le jugement des paysans"],
      bonneReponse: 1,
      explication: "En échange du fief, le vassal doit aide militaire (l'ost) et conseil à son suzerain.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que sont les corvées ?",
      reponse: "Des jours de travail gratuit que les paysans doivent effectuer pour le seigneur, sur ses terres (la réserve).",
      explication: "Les corvées s'ajoutent aux redevances payées par les paysans pour l'usage des tenures.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les seigneurs font-ils construire des châteaux forts à partir du Xe siècle ?",
      reponse: "Pour se protéger et protéger les populations locales face aux invasions (Vikings, Hongrois, Sarrasins) et affirmer leur pouvoir.",
      explication: "Le château fort est à la fois un refuge et le symbole du pouvoir du seigneur sur sa seigneurie.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que la réserve dans une seigneurie ?",
      choix: [
        "La partie des terres gardée directement par le seigneur",
        "La terre louée aux paysans",
        "Le four et le moulin du seigneur",
        "L'impôt payé par les vilains",
      ],
      bonneReponse: 0,
      explication: "La réserve est la partie de la seigneurie que le seigneur exploite directement, souvent avec le travail des corvées.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre un serf et un vilain.",
      reponse:
        "Le vilain est un paysan libre : il peut se déplacer et transmettre ses biens. Le serf dépend entièrement du seigneur, il est attaché à la terre et ne peut pas la quitter, ni se marier, sans l'autorisation du seigneur.",
      explication: "Cette distinction est essentielle pour comprendre les différents statuts paysans au Moyen Âge.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique le lien de vassalité entre un suzerain et son vassal, en citant les obligations de chacun.",
      reponse:
        "Le suzerain accorde un fief à son vassal lors de la cérémonie de l'hommage. Le vassal jure fidélité et doit aide militaire (l'ost) et conseil à son suzerain. En retour, le suzerain doit protection et justice à son vassal.",
      explication: "Ce lien réciproque de droits et de devoirs structure l'ensemble de la société féodale.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle règle l'Église impose-t-elle pour limiter la violence des chevaliers ?",
      choix: ["Le droit d'aînesse", "La paix de Dieu et la trêve de Dieu", "Le droit de banalité", "L'ost féodal"],
      bonneReponse: 1,
      explication: "La paix de Dieu protège certaines personnes (paysans, clercs) et la trêve de Dieu interdit les combats certains jours.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que la théorie des trois ordres justifie les inégalités de la société médiévale ?",
      reponse:
        "En présentant cette organisation comme voulue par Dieu, elle légitime le fait que les paysans, très majoritaires, travaillent pour nourrir et entretenir le clergé et la noblesse, sans possibilité de changer d'ordre.",
      explication: "La théorie des trois ordres sert à justifier une société très hiérarchisée et inégalitaire.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui construit les châteaux forts au Moyen Âge ?",
      choix: ["Les rois uniquement", "Les seigneurs", "Les paysans", "Les moines"],
      bonneReponse: 1,
      explication: "Les seigneurs font construire des châteaux forts pour se protéger et affirmer leur pouvoir.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que doit un vassal à son suzerain ?",
      reponse: "Fidélité, aide militaire et conseil.",
      explication: "En échange du fief reçu, le vassal a des obligations envers son suzerain.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quels sont les trois ordres de la société médiévale ?",
      reponse: "Le clergé (ceux qui prient), la noblesse (ceux qui combattent) et les paysans (ceux qui travaillent).",
      explication: "Cette organisation en trois ordres structure toute la pensée sociale du Moyen Âge.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que sont les banalités ?",
      choix: [
        "Des redevances en argent",
        "Des équipements du seigneur (four, moulin, pressoir) payants pour les paysans",
        "Des jours de travail gratuit",
        "Des impôts royaux",
      ],
      bonneReponse: 1,
      explication: "Les banalités désignent l'obligation d'utiliser, moyennant une taxe, les équipements du seigneur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique en une phrase ce qu'est la vassalité.",
      reponse: "C'est un lien personnel entre un suzerain, qui accorde un fief, et un vassal, qui lui jure fidélité et aide en échange.",
      explication: "La vassalité organise les relations entre seigneurs dans la société féodale.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Seigneurs et paysans : la féodalité",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie être vassal d'un suzerain ?",
          choix: [
            "Recevoir un fief et jurer fidélité en échange",
            "Être propriétaire du château",
            "Diriger l'Église",
            "Être un paysan libre",
          ],
          bonneReponse: 0,
          explication: "Le vassal reçoit un fief de son suzerain et lui prête un serment de fidélité lors de l'hommage.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Pourquoi le pouvoir royal s'affaiblit-il aux Xe et XIe siècles ?",
          reponse: "À cause du partage de l'Empire carolingien et des nouvelles invasions (Vikings, Hongrois, Sarrasins) que le roi ne peut pas empêcher seul.",
          explication: "Ce contexte explique la montée en puissance des seigneurs locaux et de leurs châteaux forts.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Qu'est-ce qu'une tenure ?",
          choix: [
            "La terre gardée par le seigneur",
            "Une parcelle louée à un paysan en échange de redevances",
            "Le château du seigneur",
            "Le serment de fidélité",
          ],
          bonneReponse: 1,
          explication: "La tenure est la terre que le paysan cultive pour lui-même, en échange de redevances versées au seigneur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris le rôle et l'équipement d'un chevalier au Moyen Âge.",
          reponse:
            "Le chevalier est un guerrier combattant à cheval, équipé d'une épée, d'un bouclier et d'une armure. Il devient chevalier lors de l'adoubement et doit respecter un code d'honneur (courage, loyauté, protection des faibles).",
          explication: "Le chevalier appartient à la noblesse, l'ordre de « ceux qui combattent ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle différence fait-on entre la réserve et les tenures dans une seigneurie ?",
          reponse:
            "La réserve est cultivée directement pour le seigneur, souvent grâce aux corvées des paysans, tandis que les tenures sont louées aux paysans en échange de redevances.",
          explication: "Cette organisation permet au seigneur de vivre des revenus de sa seigneurie.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique comment s'organise la société féodale entre le Xe et le XIIe siècle, à travers les liens de vassalité, la seigneurie et les trois ordres (une quinzaine de lignes).",
          reponse:
            "Introduction : après l'affaiblissement du pouvoir royal, la société s'organise autour des seigneurs. Première partie : les liens de vassalité unissent les seigneurs entre eux, le suzerain accordant un fief à son vassal lors de l'hommage, en échange d'aide militaire, de conseil, de protection et de justice. Deuxième partie : dans la seigneurie, les paysans, serfs ou vilains, cultivent leur tenure et versent redevances, corvées et banalités au seigneur, tout en subissant une vie rude. Troisième partie : la société est pensée en trois ordres, le clergé qui prie, la noblesse qui combat, les paysans qui travaillent, ce qui justifie les inégalités. Conclusion : cette organisation féodale structure durablement l'Occident médiéval.",
          explication:
            "Un bon développement construit comporte une introduction, plusieurs parties organisées avec du vocabulaire précis (fief, hommage, corvée, banalité, trois ordres) et une conclusion.",
        },
      ],
    },
    {
      titre: "Examen 2 — Seigneurs et paysans : la féodalité",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qu'est-ce que le ban seigneurial ?",
          choix: [
            "Le droit du seigneur de commander, juger et punir",
            "La terre du seigneur",
            "L'impôt payé par les nobles",
            "Le serment du vassal",
          ],
          bonneReponse: 0,
          explication: "Le ban désigne les pouvoirs de commandement, de justice et de punition exercés par le seigneur.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle est la différence entre un serf et un vilain ?",
          reponse: "Le vilain est un paysan libre ; le serf dépend entièrement du seigneur et ne peut quitter la terre sans son accord.",
          explication: "Ces deux statuts coexistent dans la société paysanne médiévale.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelles invasions frappent l'Europe aux IXe et Xe siècles ?",
          choix: [
            "Les Vikings, les Hongrois et les Sarrasins",
            "Les Romains et les Grecs",
            "Les Ottomans et les Perses",
            "Les Mongols et les Huns",
          ],
          bonneReponse: 0,
          explication: "Ces invasions successives affaiblissent le pouvoir royal et favorisent la montée des seigneurs locaux.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qu'est l'assolement triennal et pourquoi il est utile aux paysans.",
          reponse:
            "C'est une technique qui divise les terres en trois parties, dont une est laissée au repos chaque année, afin de préserver la fertilité des sols et d'améliorer les récoltes.",
          explication: "L'assolement triennal est un progrès agricole important du Moyen Âge central.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux obligations des paysans envers leur seigneur.",
          reponse: "Par exemple : payer des redevances pour leur tenure et effectuer des corvées (ou utiliser les banalités en payant une taxe).",
          explication: "Ces obligations montrent la dépendance économique des paysans envers le seigneur.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : décris la vie quotidienne des paysans dans une seigneurie médiévale (une quinzaine de lignes).",
          reponse:
            "Introduction : les paysans forment l'immense majorité de la population et vivent dans les seigneuries. Première partie : ils cultivent leur tenure avec des outils simples et pratiquent l'assolement triennal, mais restent dépendants du seigneur, surtout s'ils sont serfs. Deuxième partie : ils doivent verser des redevances, effectuer des corvées sur la réserve et utiliser les banalités du seigneur en payant une taxe. Troisième partie : leur vie est rude, marquée par de mauvaises récoltes, des famines et des maladies fréquentes, dans un monde où l'Église occupe une place centrale. Conclusion : malgré leurs conditions difficiles, les paysans sont indispensables à toute la société féodale.",
          explication:
            "On attend une description organisée intégrant le vocabulaire précis du chapitre : tenure, redevance, corvée, banalité, assolement triennal, serf, vilain.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "843 : traité de Verdun, partage de l'Empire carolingien, début de l'affaiblissement du pouvoir royal.",
    "Le château fort, symbole du pouvoir du seigneur et refuge en cas d'attaque.",
    "Vassalité : suzerain, vassal, fief, hommage, aide militaire et protection.",
    "Seigneurie : réserve, tenures, redevances, corvées, banalités.",
    "Serfs (dépendants) et vilains (libres), assolement triennal.",
    "Trois ordres de la société médiévale : clergé, noblesse, paysans.",
  ],
};

export default chapitre;
