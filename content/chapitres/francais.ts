import type { Chapitre } from "../types";

const chapitres: Chapitre[] = [
{
  slug: "argumentation",
  titre: "L'argumentation : convaincre et persuader",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Comprendre les stratégies argumentatives : convaincre par la raison, persuader par l'émotion. Étudier la thèse, les arguments, les exemples, les connecteurs logiques et les grands textes argumentatifs, pour réussir le brevet.",
  objectifs: [
    "Distinguer convaincre (raison) et persuader (émotion)",
    "Identifier thèse, arguments et exemples dans un texte",
    "Maîtriser les connecteurs logiques et l'organisation d'un raisonnement",
    "Reconnaître les principaux procédés argumentatifs (question rhétorique, ironie, éloge/blâme)",
    "Rédiger un texte argumentatif structuré pour le brevet",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'argumenter ?",
      illustration: "🗣️",
      visuel: "Thèse + arguments + exemples",
      contenu: [
        "Argumenter, c'est défendre une opinion, une thèse, sur un sujet",
        "On appuie cette thèse par des arguments, eux-mêmes illustrés par des exemples",
        "But : faire adhérer le destinataire à un point de vue",
        "Présent dans l'essai, le dialogue, la lettre ouverte, le discours",
      ],
      voixOff:
        "Argumenter, c'est défendre une opinion, appelée la thèse, sur un sujet donné. Pour cela, on s'appuie sur des arguments, c'est-à-dire des raisons qui justifient cette thèse, eux-mêmes illustrés par des exemples concrets. Le but de l'argumentation est de faire adhérer le destinataire, lecteur ou auditeur, à un point de vue. On trouve l'argumentation dans l'essai, le dialogue philosophique, la lettre ouverte ou le discours.",
    },
    {
      titre: "Convaincre ou persuader ?",
      illustration: "⚖️",
      visuel: "Raison (convaincre) ↔ Émotion (persuader)",
      contenu: [
        "Convaincre : s'adresser à la raison, avec des arguments logiques",
        "Persuader : s'adresser aux sentiments, à l'émotion, à l'imagination",
        "Un bon texte argumentatif mêle souvent les deux stratégies",
        "Ex. : un exemple pathétique persuade, un raisonnement logique convainc",
      ],
      voixOff:
        "Il existe deux grandes stratégies argumentatives. Convaincre, c'est s'adresser à la raison du destinataire, avec des arguments logiques et rationnels. Persuader, c'est s'adresser à ses sentiments, à son émotion, à son imagination, pour l'entraîner vers une opinion. Un bon texte argumentatif mêle souvent les deux : un exemple bouleversant persuade, tandis qu'un raisonnement logique convainc.",
    },
    {
      titre: "Thèse, arguments, exemples",
      illustration: "🏗️",
      visuel: "Thèse → Argument 1 → Exemple 1 → Argument 2 → Exemple 2",
      contenu: [
        "Thèse : l'opinion défendue, souvent énoncée dès le début",
        "Argument : une idée générale qui justifie la thèse",
        "Exemple : un fait concret, précis, qui illustre l'argument",
        "Un bon texte argumentatif structure clairement cette hiérarchie",
      ],
      voixOff:
        "Un texte argumentatif s'organise autour de trois niveaux. La thèse est l'opinion défendue, souvent énoncée dès le début du texte. L'argument est une idée générale, abstraite, qui justifie cette thèse. L'exemple est un fait concret et précis qui illustre l'argument et le rend plus convaincant. Un bon texte argumentatif structure clairement cette hiérarchie : une thèse, plusieurs arguments, chacun illustré par un ou plusieurs exemples.",
    },
    {
      titre: "Les connecteurs logiques",
      illustration: "🔗",
      visuel: "D'abord... Ensuite... De plus... Cependant... Enfin...",
      contenu: [
        "Connecteurs d'addition : de plus, en outre, par ailleurs",
        "Connecteurs d'opposition : cependant, toutefois, mais, en revanche",
        "Connecteurs de cause : car, en effet, parce que",
        "Connecteurs de conséquence : donc, ainsi, par conséquent",
      ],
      voixOff:
        "Les connecteurs logiques organisent le raisonnement et guident le lecteur. Les connecteurs d'addition, comme de plus ou en outre, ajoutent un argument. Les connecteurs d'opposition, comme cependant ou en revanche, introduisent une nuance ou un contre-argument. Les connecteurs de cause, comme car ou parce que, expliquent une idée. Les connecteurs de conséquence, comme donc ou par conséquent, tirent une conclusion logique.",
    },
    {
      titre: "Les procédés de l'argumentation",
      illustration: "🎯",
      visuel: "Question rhétorique • Ironie • Éloge/blâme",
      contenu: [
        "Question rhétorique : question qui n'attend pas de réponse, pour faire réfléchir",
        "Ironie : dire le contraire de ce qu'on pense pour dénoncer, en se moquant",
        "Éloge : valoriser une idée, une personne, pour convaincre par l'admiration",
        "Blâme : critiquer sévèrement pour dénoncer un comportement ou une idée",
      ],
      voixOff:
        "Plusieurs procédés renforcent l'efficacité d'un texte argumentatif. La question rhétorique n'attend pas de réponse : elle sert à faire réfléchir le destinataire et à l'impliquer. L'ironie consiste à dire le contraire de ce qu'on pense, pour dénoncer en se moquant, comme le fait souvent Voltaire. L'éloge valorise une idée ou une personne pour convaincre par l'admiration. Le blâme, à l'inverse, critique sévèrement pour dénoncer un comportement ou une idée.",
    },
    {
      titre: "L'apologue : convaincre par l'histoire",
      illustration: "🦊",
      visuel: "Fable • Conte philosophique",
      contenu: [
        "Apologue : court récit qui transmet une leçon morale ou philosophique",
        "La Fontaine : les Fables, animaux qui incarnent des travers humains",
        "Voltaire : les contes philosophiques (Candide) dénoncent par le récit",
        "Avantage : plaire pour instruire, l'histoire rend la leçon plus efficace",
      ],
      voixOff:
        "L'apologue est un court récit qui transmet une leçon morale ou philosophique de manière indirecte. Les Fables de La Fontaine mettent en scène des animaux qui incarnent les travers humains, comme l'orgueil ou la flatterie. Les contes philosophiques de Voltaire, comme Candide, dénoncent par le récit l'intolérance ou l'optimisme naïf. L'avantage de l'apologue est de plaire tout en instruisant : l'histoire rend la leçon plus efficace et plus mémorable qu'un discours direct.",
    },
    {
      titre: "Analyser un texte argumentatif",
      illustration: "🔍",
      visuel: "Thèse ? Destinataire ? Stratégie ?",
      contenu: [
        "Identifier la thèse défendue et, éventuellement, la thèse combattue",
        "Repérer les arguments et les classer (économique, moral, historique...)",
        "Observer si le texte convainc (logique) ou persuade (émotion)",
        "Repérer le destinataire visé : qui l'auteur cherche-t-il à convaincre ?",
      ],
      voixOff:
        "Pour analyser un texte argumentatif, identifie d'abord la thèse défendue, et éventuellement la thèse adverse qui est combattue. Repère les arguments utilisés et classe-les : argument économique, moral, historique, ou pratique. Observe si le texte cherche surtout à convaincre, par la logique, ou à persuader, par l'émotion. Enfin, demande-toi qui est le destinataire visé : le peuple, un roi, un lecteur en particulier ?",
    },
    {
      titre: "L'argumentation au brevet",
      illustration: "🎓",
      visuel: "Questions + rédaction argumentative",
      contenu: [
        "Un texte argumentatif tombe souvent à l'épreuve de français",
        "Questions : thèse, arguments, procédés, destinataire",
        "Rédaction : donner son avis avec arguments et exemples organisés",
        "Attendus : plan clair, connecteurs logiques, exemples précis et variés",
      ],
      voixOff:
        "Au brevet, le texte argumentatif est un grand classique de l'épreuve de français. Les questions portent souvent sur la thèse, les arguments, les procédés utilisés et le destinataire visé. Le sujet de rédaction peut te demander de donner ton avis sur une question, avec des arguments et des exemples bien organisés. Pour réussir, construis un plan clair, utilise des connecteurs logiques, et choisis des exemples précis et variés.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Argumenter : défendre une thèse à l'aide d'arguments et d'exemples",
        "Convaincre (raison) et persuader (émotion) : deux stratégies complémentaires",
        "Connecteurs logiques : addition, opposition, cause, conséquence",
        "Procédés clés : question rhétorique, ironie, éloge/blâme, apologue",
      ],
      voixOff:
        "Résumons. Argumenter, c'est défendre une thèse à l'aide d'arguments et d'exemples précis. Convaincre s'adresse à la raison, persuader s'adresse à l'émotion : les deux stratégies se complètent souvent. Les connecteurs logiques organisent le raisonnement : addition, opposition, cause, conséquence. Retiens les procédés clés : la question rhétorique, l'ironie, l'éloge et le blâme, et l'apologue, qui instruit en plaisant. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "L'argumentation vise à défendre une thèse pour faire adhérer un destinataire à un point de vue, en le convainquant par la raison ou en le persuadant par l'émotion. Ce chapitre s'inscrit dans le thème « Agir sur le monde » du programme de 3e et prépare aux questions et à la rédaction argumentative du brevet.",
    sections: [
      {
        titre: "Convaincre et persuader",
        points: [
          "Argumenter : défendre une thèse à l'aide d'arguments et d'exemples",
          "Convaincre : s'adresser à la raison avec des arguments logiques",
          "Persuader : s'adresser aux sentiments, à l'émotion, à l'imagination",
          "Un texte efficace combine souvent les deux stratégies",
        ],
      },
      {
        titre: "Structure du raisonnement",
        points: [
          "Thèse : l'opinion défendue, souvent énoncée dès le début",
          "Argument : idée générale qui justifie la thèse",
          "Exemple : fait concret et précis qui illustre l'argument",
          "Connecteurs logiques : addition (de plus), opposition (cependant), cause (car), conséquence (donc)",
        ],
      },
      {
        titre: "Les procédés argumentatifs",
        points: [
          "Question rhétorique : interpelle sans attendre de réponse",
          "Ironie : dire le contraire de ce qu'on pense pour dénoncer",
          "Éloge et blâme : valoriser ou critiquer pour orienter le jugement",
          "Apologue : court récit (fable, conte philosophique) qui instruit en plaisant",
        ],
      },
      {
        titre: "Réussir au brevet",
        points: [
          "Questions sur texte : identifier thèse, arguments, procédés, destinataire",
          "Rédaction argumentative : plan clair, connecteurs logiques, exemples variés",
          "Toujours illustrer chaque argument par un exemple précis",
          "Nuancer son propos en envisageant un contre-argument si besoin",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'argumentation, convaincre et persuader. Argumenter, c'est défendre une thèse à l'aide d'arguments et d'exemples, pour faire adhérer le destinataire à un point de vue. Convaincre s'adresse à la raison avec des arguments logiques ; persuader s'adresse aux sentiments et à l'émotion. Un texte efficace combine souvent les deux stratégies. La thèse est l'opinion défendue, l'argument une idée générale qui la justifie, et l'exemple un fait concret qui illustre l'argument. Les connecteurs logiques organisent le raisonnement : de plus pour l'addition, cependant pour l'opposition, car pour la cause, donc pour la conséquence. Plusieurs procédés renforcent l'argumentation : la question rhétorique, l'ironie, l'éloge et le blâme, et l'apologue, comme les Fables de La Fontaine ou les contes philosophiques de Voltaire, qui instruisent en plaisant. Au brevet, identifie toujours la thèse, les arguments, les procédés et le destinataire visé.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'argumenter ?", verso: "Défendre une thèse à l'aide d'arguments et d'exemples, pour faire adhérer le destinataire à un point de vue." },
    { recto: "Différence entre convaincre et persuader ?", verso: "Convaincre s'adresse à la raison (arguments logiques) ; persuader s'adresse à l'émotion (sentiments, imagination)." },
    { recto: "Différence entre argument et exemple ?", verso: "L'argument est une idée générale qui justifie la thèse ; l'exemple est un fait concret qui illustre l'argument." },
    { recto: "Trois connecteurs de cause et de conséquence ?", verso: "Cause : car, en effet, parce que. Conséquence : donc, ainsi, par conséquent." },
    { recto: "Qu'est-ce qu'une question rhétorique ?", verso: "Une question qui n'attend pas de réponse : elle sert à faire réfléchir le destinataire et à l'impliquer." },
    { recto: "Qu'est-ce que l'ironie en argumentation ?", verso: "Dire le contraire de ce qu'on pense, pour dénoncer en se moquant (procédé fréquent chez Voltaire)." },
    { recto: "Qu'est-ce qu'un apologue ?", verso: "Un court récit (fable, conte philosophique) qui transmet une leçon morale en plaisant au lecteur." },
    { recto: "Deux auteurs célèbres pour l'apologue ?", verso: "Jean de La Fontaine (Fables) et Voltaire (contes philosophiques, comme Candide)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce que la thèse dans un texte argumentatif ?",
      choix: ["Un exemple précis", "L'opinion défendue par l'auteur", "Un connecteur logique", "Une figure de style"],
      bonneReponse: 1,
      explication: "La thèse est l'idée centrale, l'opinion que l'auteur cherche à faire partager à son destinataire.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Convaincre, c'est s'adresser principalement :",
      choix: ["aux sentiments", "à la raison", "à l'imagination", "à la mémoire"],
      bonneReponse: 1,
      explication: "Convaincre repose sur des arguments logiques qui s'adressent à la raison, contrairement à persuader qui vise l'émotion.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne la différence entre un argument et un exemple.",
      reponse: "L'argument est une idée générale et abstraite qui justifie la thèse. L'exemple est un fait concret et précis qui illustre cet argument.",
      explication: "L'argument raisonne, l'exemple concrétise et rend l'argument plus convaincant.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel connecteur logique introduit une opposition ?",
      choix: ["de plus", "cependant", "car", "donc"],
      bonneReponse: 1,
      explication: "« Cependant » introduit une nuance ou un contre-argument, contrairement aux autres connecteurs.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans les Fables de La Fontaine, les animaux servent principalement à :",
      choix: ["décrire la nature avec précision scientifique", "incarner des travers humains pour transmettre une leçon", "amuser sans aucune portée morale", "remplacer les personnages historiques"],
      bonneReponse: 1,
      explication: "L'apologue utilise des personnages animaux ou fictifs pour dénoncer, avec légèreté, les défauts humains.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi un texte argumentatif efficace mêle souvent conviction et persuasion.",
      reponse: "Les arguments logiques convainquent la raison du lecteur, mais un exemple émouvant ou une image forte touche ses sentiments et renforce son adhésion. Combiner les deux stratégies rend le texte plus complet et plus efficace, car il agit à la fois sur l'intelligence et sur la sensibilité du destinataire.",
      explication: "C'est ce que font la plupart des grands textes argumentatifs, comme les discours ou les essais engagés.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'une question rhétorique ? Donne un exemple.",
      reponse: "Une question rhétorique n'attend pas de réponse : elle sert à faire réfléchir le lecteur ou à souligner une évidence. Exemple : « Comment rester indifférent devant une telle injustice ? »",
      explication: "Ce procédé implique directement le destinataire dans le raisonnement de l'auteur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique en quoi l'apologue permet de « plaire et instruire » en même temps.",
      reponse: "L'apologue raconte une histoire divertissante (une fable, un conte) qui plaît au lecteur par son intrigue et ses personnages ; mais cette histoire cache une leçon morale ou philosophique, que le lecteur découvre et retient plus facilement que s'il avait lu un discours théorique direct.",
      explication: "C'est la formule classique attribuée à La Fontaine : instruire en divertissant, pour toucher un public plus large.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un auteur écrit : « Quelle merveilleuse idée que d'interdire aux enfants de jouer dehors ! » alors qu'il pense l'inverse. Quel procédé utilise-t-il ?",
      choix: ["L'éloge sincère", "L'ironie", "La question rhétorique", "L'apologue"],
      bonneReponse: 1,
      explication: "L'ironie consiste à dire le contraire de ce que l'on pense réellement, pour dénoncer une idée en se moquant d'elle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "En quoi Candide, de Voltaire, est-il un apologue ? Explique le lien entre le récit et la thèse défendue.",
      reponse: "Candide est un conte philosophique dans lequel les mésaventures absurdes et répétées du héros démontrent, par l'exemple, l'absurdité de la philosophie optimiste selon laquelle « tout est pour le mieux dans le meilleur des mondes possibles ». Le récit divertissant (voyages, catastrophes) sert de support concret à une thèse philosophique que Voltaire veut faire partager au lecteur : il faut regarder le monde avec lucidité, sans optimisme naïf.",
      explication: "L'apologue permet à Voltaire de dénoncer une idée abstraite (l'optimisme de Leibniz) à travers un récit vivant et efficace.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse cet extrait inventé : « Faut-il vraiment attendre que la rivière soit morte pour agir ? Chaque jour, des tonnes de déchets s'y déversent, empoisonnant poissons et riverains. Il est donc urgent de légiférer. » Identifie la thèse, un argument, un exemple, et un procédé.",
      reponse: "Thèse : il faut agir d'urgence contre la pollution de la rivière (légiférer). Argument : la pollution progresse chaque jour et cause des dégâts graves. Exemple : « des tonnes de déchets... empoisonnant poissons et riverains ». Procédé : la question rhétorique initiale (« Faut-il vraiment attendre... ? ») interpelle le lecteur et souligne l'urgence, avant que le connecteur de conséquence « donc » n'introduise la conclusion logique.",
      explication: "Ce texte combine plusieurs outils argumentatifs pour convaincre (logique, connecteur) et persuader (question rhétorique, urgence).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Sujet d'entraînement type brevet : rédige un court paragraphe argumentatif (5 à 6 phrases) défendant la thèse suivante : « Les écrans doivent être limités chez les collégiens », avec un argument, un exemple et un connecteur logique.",
      reponse: "Exemple de corrigé : « Les écrans doivent être limités chez les collégiens, car un usage excessif nuit à la concentration et au sommeil. En effet, de nombreuses études montrent que les adolescents qui passent plus de trois heures par jour devant un écran dorment moins bien et obtiennent de moins bons résultats scolaires. Par exemple, un élève qui joue tard le soir arrive fatigué en classe et peine à suivre les cours. Il est donc essentiel d'apprendre à limiter ce temps, sans pour autant diaboliser des outils par ailleurs utiles à l'apprentissage. »",
      explication: "On vérifie : thèse claire, argument justifié, exemple concret, connecteurs logiques (« car », « en effet », « donc »), et une légère nuance finale.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Argumenter, c'est :",
      choix: ["raconter une histoire sans but", "défendre une thèse à l'aide d'arguments et d'exemples", "décrire un paysage", "réciter un poème"],
      bonneReponse: 1,
      explication: "L'argumentation vise à faire adhérer le destinataire à un point de vue défendu.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la différence entre convaincre et persuader ?",
      reponse: "Convaincre s'adresse à la raison, avec des arguments logiques. Persuader s'adresse aux sentiments et à l'émotion du destinataire.",
      explication: "Les deux stratégies sont souvent complémentaires dans un texte argumentatif efficace.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un apologue ? Donne un exemple d'auteur.",
      reponse: "Un apologue est un court récit qui transmet une leçon morale ou philosophique de façon indirecte. Exemple : Jean de La Fontaine et ses Fables, ou Voltaire et ses contes philosophiques.",
      explication: "L'apologue plaît par le récit tout en instruisant par la leçon qu'il contient.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel connecteur introduit une conséquence ?",
      choix: ["cependant", "de plus", "donc", "car"],
      bonneReponse: 2,
      explication: "« Donc » tire une conclusion logique à partir de ce qui précède.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que l'ironie et pourquoi est-elle efficace en argumentation ?",
      reponse: "L'ironie consiste à dire le contraire de ce que l'on pense pour dénoncer, en se moquant. Elle est efficace car elle frappe l'esprit du lecteur et rend la critique plus incisive et mémorable qu'une critique directe.",
      explication: "Voltaire l'utilise fréquemment pour dénoncer l'intolérance ou l'injustice de son époque.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'argumentation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'opinion défendue par l'auteur d'un texte argumentatif s'appelle :",
          choix: ["un exemple", "un connecteur", "la thèse", "une antithèse"],
          bonneReponse: 2,
          explication: "La thèse est l'idée centrale que l'auteur cherche à faire partager à son destinataire.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne un exemple de connecteur logique d'addition.",
          reponse: "De plus, en outre, par ailleurs (une réponse suffit).",
          explication: "Ces connecteurs ajoutent un nouvel argument à ceux déjà énoncés.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Persuader, c'est chercher à convaincre en s'adressant surtout :",
          choix: ["à la logique", "aux émotions et aux sentiments", "aux statistiques", "à la mémoire historique"],
          bonneReponse: 1,
          explication: "Persuader vise à toucher la sensibilité du destinataire plutôt qu'à démontrer logiquement.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle des exemples dans un texte argumentatif.",
          reponse: "Les exemples rendent les arguments concrets et crédibles en s'appuyant sur des faits précis (chiffres, anecdotes, situations réelles), ce qui aide le destinataire à mieux comprendre et à mieux accepter la thèse défendue.",
          explication: "Un argument sans exemple reste souvent trop abstrait pour convaincre pleinement.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi La Fontaine choisit-il de faire parler des animaux dans ses Fables plutôt que des humains ?",
          reponse: "Les animaux permettent de représenter des travers humains (orgueil, flatterie, cruauté) de façon détournée et plus légère, ce qui évite d'accuser directement des personnes réelles (notamment puissantes) tout en rendant la critique universelle et facile à comprendre.",
          explication: "Ce détour par la fiction animalière est typique de l'apologue et de sa dimension à la fois plaisante et critique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse cet extrait inventé : « On nous dit que rien ne changera jamais. Mais l'Histoire regorge d'exemples du contraire : l'esclavage, jugé naturel pendant des siècles, a fini par être aboli. Pourquoi le sort de notre planète serait-il différent ? » Identifie la thèse, le contre-argument évoqué, l'exemple et le procédé final.",
          reponse: "Thèse : le changement est possible, il ne faut pas se résigner face aux problèmes actuels (notamment écologiques). Contre-argument évoqué : « rien ne changera jamais » (opinion que l'auteur réfute). Exemple : l'abolition de l'esclavage, autrefois jugé naturel. Procédé final : la question rhétorique (« Pourquoi le sort de notre planète serait-il différent ? ») qui interpelle le lecteur et renforce la conclusion sans l'énoncer directement.",
          explication: "Ce texte illustre une stratégie fréquente : réfuter un contre-argument par un exemple historique avant de conclure par une question rhétorique.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'argumentation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un fait concret et précis qui illustre un argument s'appelle :",
          choix: ["une thèse", "un exemple", "un connecteur", "un apologue"],
          bonneReponse: 1,
          explication: "L'exemple concrétise et renforce l'argument auquel il est associé.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite un connecteur logique exprimant la cause.",
          reponse: "Car, en effet, parce que (une réponse suffit).",
          explication: "Ces connecteurs expliquent la raison d'un fait ou d'une idée.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel est l'objectif principal d'un apologue comme une fable ?",
          choix: ["Décrire un paysage de façon réaliste", "Transmettre une leçon morale à travers un récit plaisant", "Raconter un fait historique précis", "Faire l'éloge d'un personnage réel"],
          bonneReponse: 1,
          explication: "L'apologue instruit indirectement, en s'appuyant sur le plaisir de la fiction pour faire passer une morale.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne un exemple de question rhétorique et explique son effet sur le lecteur.",
          reponse: "Exemple : « Peut-on rester silencieux devant tant d'injustice ? » Cette question n'attend pas de réponse : elle implique directement le lecteur dans le raisonnement et souligne, par sa formulation même, que la réponse évidente est « non », renforçant ainsi la thèse de l'auteur.",
          explication: "La question rhétorique est un outil de persuasion qui simule un dialogue avec le destinataire.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre l'éloge et le blâme dans un texte argumentatif.",
          reponse: "L'éloge consiste à valoriser une idée, une personne ou un comportement pour convaincre par l'admiration qu'il suscite. Le blâme, à l'inverse, consiste à critiquer sévèrement une idée ou un comportement pour dénoncer ses défauts et détourner le lecteur d'y adhérer.",
          explication: "Ces deux procédés opposés orientent le jugement du lecteur en jouant sur la valorisation ou la dévalorisation.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève affirme dans sa copie : « Pour bien argumenter, il suffit d'être convaincu de ce qu'on dit. » Discute cette affirmation en t'appuyant sur les notions du chapitre.",
          reponse: "Cette affirmation est incomplète. Être sincèrement convaincu ne suffit pas : il faut aussi construire un raisonnement solide, avec une thèse claire, des arguments organisés par des connecteurs logiques, et des exemples précis qui rendent le propos crédible. Sans cette structure, même une conviction sincère peut sembler confuse ou peu convaincante pour le destinataire. De plus, utiliser des procédés comme la question rhétorique ou l'exemple concret permet de renforcer l'adhésion du lecteur, au-delà de la seule conviction personnelle de l'auteur.",
          explication: "Une bonne réponse distingue la sincérité de l'auteur de l'efficacité rhétorique de son texte, qui repose sur une construction méthodique.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Argumenter, c'est défendre une thèse à l'aide d'arguments et d'exemples pour faire adhérer le destinataire à un point de vue.",
    "Convaincre s'adresse à la raison (arguments logiques) ; persuader s'adresse à l'émotion (sentiments, imagination).",
    "Structure du raisonnement : thèse, argument (idée générale), exemple (fait concret qui l'illustre).",
    "Connecteurs logiques : addition (de plus), opposition (cependant), cause (car), conséquence (donc).",
    "Procédés clés : question rhétorique, ironie, éloge et blâme, apologue (fable, conte philosophique).",
    "Au brevet, identifie toujours la thèse, les arguments, les procédés et le destinataire visé par le texte.",
  ],
},
{
  slug: "autobiographie",
  titre: "L'autobiographie : se raconter",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Comprendre l'écriture de soi : le pacte autobiographique, les temps du récit, le double « je » (narrateur adulte et personnage enfant), les grandes œuvres du genre, et la méthode pour réussir les questions et la rédaction du brevet.",
  objectifs: [
    "Définir l'autobiographie et le pacte autobiographique (Lejeune)",
    "Distinguer autobiographie, journal intime, mémoires et autofiction",
    "Analyser le double « je » : narrateur adulte / personnage enfant",
    "Repérer les temps du récit autobiographique et leurs valeurs",
    "Connaître les œuvres clés et se préparer aux épreuves du brevet",
  ],
  slides: [
    {
      titre: "C'est quoi, une autobiographie ?",
      illustration: "📖",
      visuel: "auto + bio + graphie",
      contenu: [
        "Du grec : auto (soi-même) + bios (vie) + graphein (écrire)",
        "Un récit rétrospectif : on raconte sa vie passée",
        "Auteur = narrateur = personnage principal",
        "But : se raconter, se comprendre, témoigner, se justifier",
      ],
      voixOff:
        "Le mot autobiographie vient du grec : auto, soi-même, bios, la vie, et graphein, écrire. C'est donc le récit rétrospectif qu'une personne fait de sa propre vie. Sa marque de fabrique : l'auteur, le narrateur et le personnage principal sont une seule et même personne. On écrit sur soi pour se comprendre, témoigner, laisser une trace, ou parfois se justifier.",
    },
    {
      titre: "Le pacte autobiographique (Lejeune)",
      illustration: "🤝",
      visuel: "« Je promets de dire la vérité »",
      contenu: [
        "Notion définie par le critique Philippe Lejeune",
        "L'auteur s'engage à dire la vérité sur sa vie, sincèrement",
        "Le lecteur, en échange, le croit — c'est un « contrat de lecture »",
        "Limites : mémoire imparfaite, oublis, reconstruction du passé",
      ],
      voixOff:
        "Le critique Philippe Lejeune a défini le pacte autobiographique : c'est une sorte de contrat entre l'auteur et le lecteur. L'auteur s'engage à raconter sa vie sincèrement, sans mentir, et le lecteur s'engage à le croire. Mais attention, ce pacte a ses limites : la mémoire est imparfaite, on oublie, on embellit, on reconstruit son passé sans forcément le vouloir.",
    },
    {
      titre: "Autobiographie et genres voisins",
      illustration: "🗂️",
      visuel: "Autobiographie ≠ journal ≠ mémoires ≠ roman",
      contenu: [
        "Journal intime : écrit au jour le jour, sans recul (Anne Frank)",
        "Mémoires : centrés sur les événements historiques vécus",
        "Autofiction / roman autobiographique : mélange de vécu et d'invention",
        "Biographie : la vie de quelqu'un racontée par un AUTRE",
      ],
      voixOff:
        "L'autobiographie a des genres voisins qu'il faut savoir distinguer. Le journal intime s'écrit au jour le jour, sans recul, comme celui d'Anne Frank. Les mémoires racontent surtout les événements historiques auxquels l'auteur a participé. L'autofiction mélange souvenirs réels et invention romanesque. Et la biographie, elle, raconte la vie de quelqu'un... écrite par un autre.",
    },
    {
      titre: "Le double « je »",
      illustration: "👤",
      visuel: "JE narrateur (adulte) / JE personnage (enfant)",
      contenu: [
        "Le « je » qui raconte : l'adulte, au moment de l'écriture",
        "Le « je » raconté : l'enfant ou le jeune qu'il était",
        "L'adulte commente, juge, explique ce que l'enfant vivait sans comprendre",
        "Ce va-et-vient crée l'émotion et la réflexion",
      ],
      voixOff:
        "Dans une autobiographie, le mot je désigne en réalité deux figures. Le je narrateur, c'est l'adulte qui écrit, avec son recul et son expérience. Le je personnage, c'est l'enfant ou l'adolescent qu'il était autrefois. L'adulte commente et explique ce que l'enfant vivait sans le comprendre. Ce va-et-vient entre les deux je fait toute la richesse du genre.",
    },
    {
      titre: "Les temps du récit autobiographique",
      illustration: "⏳",
      visuel: "imparfait / passé simple / présent",
      contenu: [
        "Imparfait : description, habitudes, arrière-plan du passé",
        "Passé simple (ou passé composé) : événements, actions de premier plan",
        "Présent d'énonciation : le narrateur adulte commente au moment où il écrit",
        "Le changement de temps signale souvent le passage d'un « je » à l'autre",
      ],
      voixOff:
        "Les temps verbaux sont des indices précieux. L'imparfait pose le décor et les habitudes du passé : tous les jeudis, j'allais chez ma grand-mère. Le passé simple ou le passé composé racontent les événements marquants. Et le présent d'énonciation signale que le narrateur adulte intervient pour commenter, au moment où il écrit. Repérer un changement de temps, c'est souvent repérer le passage d'un je à l'autre.",
    },
    {
      titre: "Pourquoi écrire sur soi ?",
      illustration: "🎯",
      visuel: "Comprendre • Témoigner • Se justifier",
      contenu: [
        "Se comprendre : donner un sens à son parcours",
        "Témoigner : raconter une époque, une épreuve (guerre, exil)",
        "Se justifier : répondre aux accusations (Rousseau)",
        "Laisser une trace, lutter contre l'oubli et la mort",
      ],
      voixOff:
        "Pourquoi écrit-on sur soi ? D'abord pour se comprendre : mettre en ordre sa vie, c'est lui donner un sens. Ensuite pour témoigner d'une époque ou d'une épreuve, comme la guerre ou l'exil. Parfois pour se justifier : Rousseau écrit ses Confessions en partie pour répondre à ses accusateurs. Et toujours, un peu, pour laisser une trace et lutter contre l'oubli.",
    },
    {
      titre: "Œuvres clés du genre",
      illustration: "📚",
      visuel: "Rousseau • Sarraute • Anne Frank",
      contenu: [
        "Rousseau, Les Confessions (posthume, 1782) : fondateur du genre en France",
        "Nathalie Sarraute, Enfance (1983) : dialogue entre deux voix du « je »",
        "Anne Frank, Journal (1942-1944) : journal intime et témoignage",
        "Aussi : Georges Perec (W ou le Souvenir d'enfance), Romain Gary (La Promesse de l'aube)",
      ],
      voixOff:
        "Quelques œuvres à connaître absolument. Les Confessions de Jean-Jacques Rousseau, publiées après sa mort à partir de 1782, fondent le genre en France : il promet de se montrer tel qu'il fut, sans rien cacher. Enfance de Nathalie Sarraute fait dialoguer deux voix intérieures qui interrogent les souvenirs. Le Journal d'Anne Frank est à la fois journal intime et témoignage bouleversant sur la Shoah. On peut citer aussi Perec ou Romain Gary.",
    },
    {
      titre: "Analyser un texte autobiographique",
      illustration: "🔍",
      visuel: "Qui ? Quand ? Quel regard ?",
      contenu: [
        "Repérer les marques de la 1re personne (je, me, mon...)",
        "Identifier les deux « je » : qui parle, l'adulte ou l'enfant ?",
        "Observer les temps verbaux et leurs valeurs",
        "Dégager le regard du narrateur : tendresse, humour, ironie, regret ?",
      ],
      voixOff:
        "Pour analyser un texte autobiographique, adopte quatre réflexes. Repère d'abord les marques de la première personne. Demande-toi ensuite qui parle : le narrateur adulte ou le personnage enfant ? Observe les temps verbaux : imparfait du souvenir, passé simple des événements, présent du commentaire. Enfin, caractérise le regard porté sur le passé : tendresse, humour, ironie ou regret.",
    },
    {
      titre: "L'autobiographie au brevet",
      illustration: "🎓",
      visuel: "Questions + dictée + rédaction",
      contenu: [
        "Un texte autobiographique tombe souvent à l'épreuve de français",
        "Questions : les deux « je », les temps, les sentiments, le pacte",
        "Rédaction (sujet d'imagination) : raconter un souvenir personnel",
        "Attendus : 1re personne, temps du passé maîtrisés, émotions et regard rétrospectif",
      ],
      voixOff:
        "Au brevet, le texte autobiographique est un grand classique de l'épreuve de français. Les questions portent souvent sur le double je, les temps verbaux et les sentiments du narrateur. Le sujet d'imagination demande fréquemment de raconter un souvenir personnel marquant. Pour réussir, écris à la première personne, maîtrise les temps du passé, exprime des émotions, et n'oublie pas le regard rétrospectif de celui qui se souvient.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Autobiographie : récit rétrospectif de sa propre vie (auteur = narrateur = personnage)",
        "Pacte autobiographique (Lejeune) : promesse de sincérité faite au lecteur",
        "Double « je » : narrateur adulte qui commente / personnage enfant qui vit",
        "Temps : imparfait (décor), passé simple (événements), présent (commentaire)",
      ],
      voixOff:
        "Résumons. L'autobiographie est le récit rétrospectif qu'une personne fait de sa propre vie : auteur, narrateur et personnage ne font qu'un. Le pacte autobiographique, défini par Lejeune, est la promesse de sincérité faite au lecteur. Le double je fait alterner le narrateur adulte, qui commente, et le personnage enfant, qui vit les événements. Enfin, les temps verbaux guident la lecture : imparfait pour le décor, passé simple pour les événements, présent pour le commentaire. Te voilà prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "L'autobiographie est le récit rétrospectif qu'une personne réelle fait de sa propre existence : l'auteur, le narrateur et le personnage principal sont une seule et même personne. C'est un genre majeur du programme de 3e (« Se raconter, se représenter ») et un grand classique du brevet.",
    sections: [
      {
        titre: "Définition et pacte autobiographique",
        points: [
          "Auto (soi) + bios (vie) + graphein (écrire) : récit rétrospectif de sa propre vie",
          "Identité auteur = narrateur = personnage principal",
          "Pacte autobiographique (Philippe Lejeune) : l'auteur promet la sincérité, le lecteur lui fait confiance",
          "Limites du pacte : mémoire sélective, oublis, reconstruction, part de subjectivité",
        ],
      },
      {
        titre: "Genres voisins à ne pas confondre",
        points: [
          "Journal intime : écrit au jour le jour, sans recul (Anne Frank)",
          "Mémoires : l'accent est mis sur les événements historiques vécus",
          "Autofiction / roman autobiographique : vécu mêlé d'invention",
          "Biographie : vie racontée par un autre (pas de « je » identique à l'auteur)",
        ],
      },
      {
        titre: "Le double « je »",
        points: [
          "« Je » narrateur : l'adulte qui écrit, avec recul, qui commente et juge",
          "« Je » personnage : l'enfant ou l'adolescent d'autrefois, qui vit les événements",
          "Le va-et-vient entre les deux crée émotion, humour ou ironie",
        ],
      },
      {
        titre: "Les temps du récit autobiographique",
        points: [
          "Imparfait : descriptions, habitudes, arrière-plan du souvenir",
          "Passé simple / passé composé : événements de premier plan",
          "Présent d'énonciation : commentaire du narrateur adulte au moment de l'écriture",
          "Un changement de temps signale souvent un changement de « je »",
        ],
      },
      {
        titre: "Œuvres clés",
        points: [
          "Rousseau, Les Confessions (publication posthume à partir de 1782) : texte fondateur",
          "Nathalie Sarraute, Enfance (1983) : deux voix dialoguent sur les souvenirs",
          "Anne Frank, Journal (1942-1944) : journal intime et témoignage historique",
          "Georges Perec, W ou le Souvenir d'enfance ; Romain Gary, La Promesse de l'aube",
        ],
      },
      {
        titre: "Réussir au brevet",
        points: [
          "Questions sur texte : identifier les deux « je », les temps et leurs valeurs, les sentiments, le but de l'auteur",
          "Rédaction : récit d'un souvenir à la 1re personne, temps du passé, émotions, regard rétrospectif",
          "Toujours justifier une réponse par une citation précise du texte",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'autobiographie. L'autobiographie est le récit rétrospectif qu'une personne fait de sa propre vie : l'auteur, le narrateur et le personnage principal sont la même personne. Selon Philippe Lejeune, elle repose sur le pacte autobiographique : l'auteur promet au lecteur de dire la vérité sur lui-même, même si la mémoire reste imparfaite. Il ne faut pas la confondre avec le journal intime, écrit au jour le jour, avec les mémoires, centrés sur l'Histoire, ni avec l'autofiction, qui mêle vécu et invention. Le texte autobiographique fait entendre un double je : le narrateur adulte, qui se souvient et commente au présent, et le personnage enfant, qui vit les événements au passé. L'imparfait pose le décor, le passé simple raconte les événements, le présent signale le commentaire. Retiens les œuvres clés : Les Confessions de Rousseau, Enfance de Sarraute, le Journal d'Anne Frank. Au brevet, justifie toujours tes réponses en citant le texte.",
  },
  memoCards: [
    {
      recto: "Définition de l'autobiographie ?",
      verso: "Récit rétrospectif qu'une personne réelle fait de sa propre vie : auteur = narrateur = personnage principal.",
    },
    {
      recto: "Qu'est-ce que le pacte autobiographique ?",
      verso: "Contrat défini par Philippe Lejeune : l'auteur promet la sincérité sur sa vie, le lecteur s'engage à le croire.",
    },
    {
      recto: "Pourquoi le pacte a-t-il des limites ?",
      verso: "La mémoire est imparfaite : oublis, souvenirs embellis, reconstruction du passé. La sincérité n'est pas l'exactitude totale.",
    },
    {
      recto: "Autobiographie ou journal intime ?",
      verso: "L'autobiographie se rédige avec recul, longtemps après ; le journal s'écrit au jour le jour, sans connaître la suite.",
    },
    {
      recto: "Autobiographie ou biographie ?",
      verso: "Autobiographie : on raconte SA vie. Biographie : la vie de quelqu'un racontée par un AUTRE.",
    },
    {
      recto: "Qu'est-ce que le double « je » ?",
      verso: "Le « je » narrateur (l'adulte qui écrit et commente) et le « je » personnage (l'enfant qui vivait les événements).",
    },
    {
      recto: "Valeur de l'imparfait dans le récit de soi ?",
      verso: "Décor, descriptions et habitudes du passé : « Chaque été, nous partions en Bretagne. »",
    },
    {
      recto: "À quoi sert le présent dans une autobiographie ?",
      verso: "C'est souvent le présent d'énonciation : le narrateur adulte commente au moment où il écrit.",
    },
    {
      recto: "Qui a écrit Les Confessions ?",
      verso: "Jean-Jacques Rousseau (publication posthume à partir de 1782) : le texte fondateur de l'autobiographie en France.",
    },
    {
      recto: "Trois raisons d'écrire sur soi ?",
      verso: "Se comprendre, témoigner d'une époque ou d'une épreuve, se justifier ; et laisser une trace contre l'oubli.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans une autobiographie, qui sont l'auteur, le narrateur et le personnage principal ?",
      choix: [
        "Trois personnes différentes",
        "Une seule et même personne",
        "L'auteur et le narrateur seulement",
        "Des personnages inventés",
      ],
      bonneReponse: 1,
      explication:
        "C'est le critère central du genre : auteur = narrateur = personnage principal. C'est ce qui distingue l'autobiographie du roman à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui a défini le « pacte autobiographique » ?",
      choix: ["Jean-Jacques Rousseau", "Philippe Lejeune", "Nathalie Sarraute", "Tzvetan Todorov"],
      bonneReponse: 1,
      explication: "Philippe Lejeune, critique du XXe siècle, a théorisé ce « contrat de lecture » entre l'auteur et le lecteur.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Décompose le mot « autobiographie » et donne le sens de chaque élément.",
      reponse: "Auto : soi-même ; bio : la vie ; graphie : l'écriture. L'autobiographie est donc l'écriture de sa propre vie.",
      explication: "L'étymologie grecque contient toute la définition du genre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le Journal d'Anne Frank est :",
      choix: ["un roman d'aventures", "une biographie", "un journal intime", "des mémoires de guerre écrits après coup"],
      bonneReponse: 2,
      explication:
        "Anne Frank écrit au jour le jour, entre 1942 et 1944, sans connaître la suite des événements : c'est un journal intime, qui est aussi un témoignage historique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Lis cette phrase inventée : « J'avais huit ans et je croyais que le grenier abritait des trésors ; je souris aujourd'hui de cette naïveté. » Où le narrateur adulte intervient-il ?",
      choix: [
        "« J'avais huit ans »",
        "« je croyais que le grenier abritait des trésors »",
        "« je souris aujourd'hui de cette naïveté »",
        "Il n'intervient pas",
      ],
      bonneReponse: 2,
      explication:
        "Le présent (« je souris ») et l'adverbe « aujourd'hui » signalent le narrateur adulte qui commente, avec recul, ce que vivait l'enfant (à l'imparfait).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre une autobiographie et des mémoires.",
      reponse: "L'autobiographie est centrée sur la vie personnelle et intérieure de l'auteur (enfance, sentiments, formation de sa personnalité). Les mémoires racontent surtout les événements historiques et publics auxquels l'auteur a assisté ou participé.",
      explication: "Dans les mémoires, le « je » est un témoin de l'Histoire ; dans l'autobiographie, il est lui-même le sujet du livre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans l'extrait inventé « Le matin de la rentrée, ma mère boutonna mon manteau neuf ; je tremblais de peur devant la grille », identifie le temps de chaque verbe et sa valeur.",
      reponse: "« Boutonna » : passé simple, action de premier plan, événement unique. « Tremblais » : imparfait, arrière-plan, état qui dure (la peur de l'enfant pendant la scène).",
      explication: "Le passé simple fait avancer le récit ; l'imparfait installe le décor et les états des personnages.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi peut-on dire que le pacte autobiographique est fragile ? Donne deux raisons.",
      reponse: "D'abord, la mémoire est imparfaite : l'auteur oublie, déforme ou reconstruit ses souvenirs sans le vouloir. Ensuite, l'auteur peut être tenté d'embellir son image ou de se justifier, ce qui nuit à l'objectivité — la sincérité promise n'est donc jamais une vérité totale.",
      explication: "Rousseau lui-même admet des trous de mémoire dans Les Confessions : la sincérité de l'intention ne garantit pas l'exactitude des faits.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un roman commence par « Je m'appelle Arthur et je vais vous raconter ma vie », mais l'auteur s'appelle Paul Martin. Ce texte est :",
      choix: [
        "une autobiographie, car il y a un « je »",
        "un roman à la première personne, car auteur et narrateur sont différents",
        "un journal intime",
        "des mémoires",
      ],
      bonneReponse: 1,
      explication:
        "Le « je » ne suffit pas : sans identité entre l'auteur (Paul Martin) et le narrateur (Arthur), le pacte autobiographique n'existe pas. C'est une fiction à la première personne.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse cet extrait inventé : « Notre appartement sentait la cire et le café. Un soir, mon père rentra plus tôt, le visage grave. Je comprends maintenant qu'il venait de perdre son emploi, mais l'enfant que j'étais ne vit que la promenade inespérée du lendemain. » Montre comment s'y manifestent le double « je » et les temps du récit.",
      reponse: "L'imparfait (« sentait ») pose le décor du souvenir ; le passé simple (« rentra », « ne vit ») raconte l'événement vécu par le « je » personnage (l'enfant). Le présent (« je comprends maintenant ») et l'adverbe « maintenant » font entendre le « je » narrateur adulte, qui donne le sens que l'enfant ignorait : la perte d'emploi. L'expression « l'enfant que j'étais » souligne explicitement l'écart entre les deux « je ».",
      explication: "C'est le mécanisme central du genre : l'adulte relit et interprète l'expérience de l'enfant.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rousseau ouvre Les Confessions en affirmant vouloir montrer « un homme dans toute la vérité de la nature » : lui-même. Quel engagement prend-il ainsi envers le lecteur, et comment appelle-t-on cet engagement ?",
      reponse: "Il s'engage à se peindre avec une sincérité totale, sans rien cacher de ses qualités ni de ses fautes. Cet engagement de vérité envers le lecteur correspond à ce que Philippe Lejeune appellera le pacte autobiographique.",
      explication: "Les Confessions sont considérées comme le texte fondateur du genre en France précisément à cause de cette promesse initiale de sincérité.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Sujet d'entraînement type brevet : rédige le début (5 à 6 phrases) d'un récit autobiographique sur un souvenir d'école marquant, en faisant apparaître le double « je » et au moins trois temps différents.",
      reponse: "Exemple de corrigé : « L'école de mon village sentait la craie et le bois ciré ; chaque matin, je traînais mon cartable trop lourd jusqu'au dernier rang. Un jour de décembre, la maîtresse me demanda de lire mon poème devant toute la classe. Mes jambes tremblaient, ma voix se brisa sur le premier vers. Aujourd'hui, je sais que ce moment d'effroi a décidé de mon amour des mots. L'enfant terrifié que j'étais ignorait qu'il venait de monter pour la première fois sur une scène. »",
      explication: "On vérifie : 1re personne, imparfait du décor (« sentait », « traînais »), passé simple de l'événement (« demanda », « se brisa »), présent du narrateur adulte (« je sais »), regard rétrospectif et émotions.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'autobiographie est un récit :",
      choix: ["prospectif", "rétrospectif", "imaginaire", "impersonnel"],
      bonneReponse: 1,
      explication: "Rétrospectif : on se retourne sur sa vie passée pour la raconter.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que le pacte autobiographique, en une phrase ?",
      reponse: "C'est l'engagement de l'auteur à raconter sa vie avec sincérité, en échange de la confiance du lecteur (notion définie par Philippe Lejeune).",
      explication: "Un contrat de lecture : promesse de vérité contre confiance.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qui sont les deux « je » du texte autobiographique ?",
      reponse: "Le « je » narrateur, l'adulte qui écrit et commente avec recul, et le « je » personnage, l'enfant ou le jeune qui vivait les événements racontés.",
      explication: "Le passage de l'un à l'autre est souvent signalé par un changement de temps verbal.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Chaque dimanche, nous marchions jusqu'au port », l'imparfait exprime :",
      choix: ["un événement unique", "une habitude du passé", "un futur proche", "un ordre"],
      bonneReponse: 1,
      explication: "« Chaque dimanche » + imparfait : c'est une action répétée, une habitude du passé.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux œuvres autobiographiques et leurs auteurs.",
      reponse: "Par exemple : Les Confessions de Rousseau et Enfance de Nathalie Sarraute (ou le Journal d'Anne Frank, W ou le Souvenir d'enfance de Perec, La Promesse de l'aube de Romain Gary).",
      explication: "Rousseau est le fondateur du genre en France ; les autres œuvres montrent la variété de l'écriture de soi.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'autobiographie",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel texte est considéré comme fondateur de l'autobiographie en France ?",
          choix: ["Le Journal d'Anne Frank", "Les Confessions de Rousseau", "Enfance de Sarraute", "Le Horla de Maupassant"],
          bonneReponse: 1,
          explication: "Les Confessions de Jean-Jacques Rousseau, publiées après sa mort à partir de 1782, fondent le genre en France.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle est la différence entre une autobiographie et une biographie ?",
          reponse: "Dans l'autobiographie, l'auteur raconte sa propre vie ; dans la biographie, un auteur raconte la vie d'une autre personne.",
          explication: "Le préfixe auto- (soi-même) fait toute la différence.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans l'extrait inventé « Je revois encore la cour grise de l'internat ; j'y entrai un lundi d'octobre, la gorge nouée », que signale le présent « je revois » ?",
          choix: [
            "Une action de l'enfant",
            "L'intervention du narrateur adulte au moment de l'écriture",
            "Un futur proche",
            "Un discours direct",
          ],
          bonneReponse: 1,
          explication: "« Je revois encore » est un présent d'énonciation : l'adulte se souvient au moment où il écrit, avant de replonger dans le passé (« j'entrai », passé simple).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne trois raisons qui peuvent pousser un auteur à écrire son autobiographie.",
          reponse: "Se comprendre soi-même en donnant un sens à son parcours ; témoigner d'une époque ou d'une épreuve ; se justifier face à des accusations ; laisser une trace contre l'oubli (trois réponses parmi celles-ci).",
          explication: "Rousseau, par exemple, cherche à la fois à se comprendre et à se justifier.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi le journal intime n'offre-t-il pas le même regard que l'autobiographie ?",
          reponse: "Le journal est écrit au jour le jour : son auteur ne connaît pas la suite des événements et n'a aucun recul. L'autobiographie, écrite longtemps après, permet au narrateur adulte de commenter, d'interpréter et de donner un sens à son passé.",
          explication: "C'est la présence ou l'absence de recul (regard rétrospectif) qui distingue les deux genres.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse l'extrait inventé : « On m'offrit ce violon pour mes dix ans. Je le trouvais alors encombrant et criard ; je mesure aujourd'hui tout ce que je dois à cet instrument détesté. » Identifie les deux « je », les temps employés et le regard du narrateur.",
          reponse: "Le « je » personnage est l'enfant de dix ans qui reçoit le violon et le juge « encombrant et criard » (passé simple « offrit » pour l'événement, imparfait « trouvais » pour son sentiment durable). Le « je » narrateur est l'adulte qui intervient au présent (« je mesure aujourd'hui ») : son regard est reconnaissant et légèrement amusé de l'aveuglement de l'enfant, comme le montre le paradoxe « cet instrument détesté » auquel il « doit » tant.",
          explication: "L'écart entre le jugement de l'enfant et celui de l'adulte crée l'intérêt du passage : c'est le double « je » en action.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'autobiographie",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le pacte autobiographique engage l'auteur à :",
          choix: ["tout inventer", "raconter sa vie avec sincérité", "ne parler que d'Histoire", "écrire au jour le jour"],
          bonneReponse: 1,
          explication: "L'auteur promet la sincérité sur sa propre vie ; c'est le cœur du pacte défini par Lejeune.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle œuvre autobiographique Nathalie Sarraute a-t-elle publiée en 1983, et quelle en est l'originalité ?",
          reponse: "Enfance : le récit y prend la forme d'un dialogue entre deux voix intérieures de l'auteure, qui interrogent et vérifient les souvenirs.",
          explication: "Ce dispositif met en scène la méfiance de Sarraute envers la mémoire et les embellissements du souvenir.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel énoncé illustre le MIEUX les limites du pacte autobiographique ?",
          choix: [
            "L'auteur écrit à la troisième personne",
            "L'auteur raconte un souvenir d'enfance dont il a peut-être reconstruit les détails",
            "L'auteur publie son livre de son vivant",
            "L'auteur utilise le passé simple",
          ],
          bonneReponse: 1,
          explication: "La mémoire reconstruit le passé : même sincère, l'auteur peut se tromper. C'est la limite majeure du pacte.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans un récit autobiographique, quels temps utilise-t-on principalement, et pour quelles valeurs ? Cite-en trois.",
          reponse: "L'imparfait pour les descriptions et les habitudes du passé ; le passé simple (ou le passé composé) pour les événements de premier plan ; le présent d'énonciation pour les commentaires du narrateur adulte au moment de l'écriture.",
          explication: "Repérer ces temps permet d'identifier quel « je » s'exprime.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève écrit dans sa rédaction de brevet : « Je raconterai mon premier match : j'ai marqué, tout le monde applaudissait, c'était génial. » Propose-lui deux améliorations précises pour mieux répondre aux attendus du récit autobiographique.",
          reponse: "1. Ajouter le regard rétrospectif du narrateur adulte, par exemple au présent : « Aujourd'hui encore, je sens l'odeur de la pelouse mouillée » — cela crée le double « je ». 2. Enrichir l'expression des émotions et des sensations au lieu du jugement vague « c'était génial » : décrire le cœur qui bat, les mains moites, la clameur des tribunes. (On peut aussi conseiller de mieux maîtriser l'alternance imparfait / passé simple : « tout le monde applaudissait » pour l'arrière-plan, « je marquai » pour l'événement.)",
          explication: "Au brevet, le correcteur attend un vrai regard rétrospectif, des émotions développées et des temps du passé maîtrisés.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court paragraphe autobiographique (4 à 5 phrases) sur un objet de ton enfance, en utilisant l'imparfait, le passé simple et le présent, et en faisant entendre les deux « je ».",
          reponse: "Exemple de corrigé : « Sur l'étagère de ma chambre trônait un ours en peluche à l'oreille décousue. Il m'accompagnait partout, jusqu'au jour où je l'oubliai dans un train de nuit. Je pleurai toute la semaine. Je souris aujourd'hui de ce chagrin immense, mais je sais qu'avec lui, c'est un morceau de mon enfance qui est resté sur cette banquette. »",
          explication: "On vérifie : imparfait du décor (« trônait », « accompagnait »), passé simple des événements (« oubliai », « pleurai »), présent du narrateur adulte (« je souris », « je sais »), et regard rétrospectif qui donne sens au souvenir.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Autobiographie = récit rétrospectif de sa propre vie : auteur, narrateur et personnage principal sont la même personne.",
    "Pacte autobiographique (Philippe Lejeune) : promesse de sincérité de l'auteur, confiance du lecteur — mais la mémoire reste imparfaite.",
    "Double « je » : le narrateur adulte (commente, souvent au présent) et le personnage enfant (vit les événements, aux temps du passé).",
    "Temps du récit : imparfait pour le décor et les habitudes, passé simple pour les événements, présent d'énonciation pour le commentaire.",
    "Œuvres clés : Les Confessions (Rousseau), Enfance (Sarraute), le Journal d'Anne Frank — au brevet, justifie toujours par une citation.",
    "Erreur classique à éviter : croire qu'un récit à la première personne est forcément une autobiographie — sans identité auteur-narrateur-personnage, c'est une fiction.",
  ],
},
{
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
},
{
  slug: "grammaire-brevet",
  titre: "La grammaire au brevet : analyse et réécriture",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Réviser les notions de grammaire indispensables à l'épreuve de français du brevet : nature et fonction des mots, types de phrases, propositions subordonnées, voix active/passive, discours direct/indirect, et méthode de la question de réécriture.",
  objectifs: [
    "Distinguer nature et fonction des mots dans la phrase",
    "Identifier les types de propositions (indépendante, principale, subordonnée)",
    "Maîtriser la transformation voix active / voix passive",
    "Passer du discours direct au discours indirect",
    "Réussir l'exercice de réécriture typique du brevet",
  ],
  slides: [
    {
      titre: "Nature et fonction : ne pas confondre",
      illustration: "🧩",
      visuel: "Nature = catégorie / Fonction = rôle",
      contenu: [
        "Nature : la catégorie grammaticale d'un mot (nom, verbe, adjectif, adverbe...)",
        "Fonction : le rôle du mot dans la phrase (sujet, COD, complément...)",
        "Un même mot garde sa nature mais change de fonction selon la phrase",
        "Ex. : « chat » (nom) peut être sujet, COD, ou complément du nom",
      ],
      voixOff:
        "Il ne faut jamais confondre nature et fonction. La nature est la catégorie grammaticale d'un mot : nom, verbe, adjectif, adverbe, pronom, préposition. La fonction est le rôle que joue ce mot dans la phrase : sujet, complément d'objet direct, complément circonstanciel. Un même mot garde toujours la même nature, mais sa fonction change selon la phrase. Le nom chat, par exemple, peut être sujet, complément d'objet direct, ou complément du nom, selon la construction de la phrase.",
    },
    {
      titre: "Les types et formes de phrases",
      illustration: "❓",
      visuel: "Déclarative • Interrogative • Injonctive • Exclamative",
      contenu: [
        "Type déclaratif : énonce un fait (point)",
        "Type interrogatif : pose une question (point d'interrogation)",
        "Type injonctif : donne un ordre ou un conseil (impératif)",
        "Type exclamatif : exprime une émotion forte (point d'exclamation)",
        "Formes : affirmative/négative, active/passive, personnelle/impersonnelle",
      ],
      voixOff:
        "Chaque phrase a un type et une ou plusieurs formes. Les quatre types sont : déclaratif, qui énonce un fait ; interrogatif, qui pose une question ; injonctif, qui donne un ordre ou un conseil ; exclamatif, qui exprime une émotion forte. À cela s'ajoutent des formes : la phrase peut être affirmative ou négative, active ou passive, personnelle ou impersonnelle. Ces notions se combinent : une phrase peut être interrogative ET négative, par exemple.",
    },
    {
      titre: "Propositions : indépendante, principale, subordonnée",
      illustration: "🔗",
      visuel: "P. indépendante | P. principale + P. subordonnée",
      contenu: [
        "Proposition indépendante : ne dépend d'aucune autre, autonome",
        "Proposition principale : commande une ou plusieurs subordonnées",
        "Proposition subordonnée : dépend d'une principale, ne peut exister seule",
        "Types de subordonnées : relative (qui, que...), conjonctive (que, si, quand...)",
      ],
      voixOff:
        "Une proposition indépendante ne dépend d'aucune autre proposition : elle est autonome, même si elle est reliée par une virgule ou une conjonction de coordination. Une proposition principale commande une ou plusieurs propositions subordonnées, qui, elles, ne peuvent pas exister seules et dépendent grammaticalement de la principale. On distingue plusieurs types de subordonnées : la relative, introduite par qui, que, dont, où, et la conjonctive, introduite par que, si, quand, parce que.",
    },
    {
      titre: "La voix active et la voix passive",
      illustration: "🔄",
      visuel: "Le chat mange la souris → La souris est mangée par le chat",
      contenu: [
        "Voix active : le sujet fait l'action (Le chat mange la souris)",
        "Voix passive : le sujet subit l'action (La souris est mangée par le chat)",
        "Transformation : COD devient sujet ; sujet devient complément d'agent (par)",
        "Verbe passif : être + participe passé du verbe (accordé avec le sujet)",
      ],
      voixOff:
        "À la voix active, le sujet fait l'action : le chat mange la souris. À la voix passive, le sujet subit l'action : la souris est mangée par le chat. Pour transformer une phrase active en passive, le complément d'objet direct devient le sujet, et l'ancien sujet devient un complément d'agent, introduit par par. Le verbe passif se construit avec l'auxiliaire être suivi du participe passé, qui s'accorde avec le nouveau sujet.",
    },
    {
      titre: "Discours direct et discours indirect",
      illustration: "💬",
      visuel: "« Je viendrai demain » → Il a dit qu'il viendrait le lendemain",
      contenu: [
        "Discours direct : les paroles sont rapportées telles quelles, entre guillemets",
        "Discours indirect : les paroles sont intégrées dans une subordonnée (que, si...)",
        "Changements nécessaires : pronoms, temps verbaux, indicateurs de temps/lieu",
        "Ex. : « demain » devient « le lendemain » ; « ici » devient « là »",
      ],
      voixOff:
        "Le discours direct rapporte les paroles telles quelles, entre guillemets : il a dit, je viendrai demain. Le discours indirect intègre ces paroles dans une proposition subordonnée, introduite par que ou si : il a dit qu'il viendrait le lendemain. Ce passage entraîne plusieurs changements : les pronoms personnels, les temps verbaux, selon la concordance des temps, et les indicateurs de temps et de lieu. Demain devient le lendemain, ici devient là, aujourd'hui devient ce jour-là.",
    },
    {
      titre: "Les substituts et la reprise pronominale",
      illustration: "🔁",
      visuel: "Pronom • Synonyme • Périphrase",
      contenu: [
        "Éviter les répétitions grâce aux substituts (reprises) d'un nom déjà cité",
        "Substituts pronominaux : il, elle, celui-ci, qui, que...",
        "Substituts lexicaux : synonyme, périphrase, terme générique",
        "Ex. : « le chat » → « il », « ce félin », « l'animal »",
      ],
      voixOff:
        "Pour éviter les répétitions, on utilise des substituts, aussi appelés reprises, qui remplacent un nom déjà cité. Les substituts pronominaux utilisent un pronom : il, elle, celui-ci, qui, que. Les substituts lexicaux utilisent un autre mot : un synonyme, une périphrase, ou un terme générique. Par exemple, le chat peut être repris par il, par ce félin, ou par l'animal. Cette compétence est essentielle pour bien écrire, mais aussi pour analyser un texte.",
    },
    {
      titre: "La question de réécriture au brevet",
      illustration: "✍️",
      visuel: "Transformer sans changer le sens",
      contenu: [
        "Consigne typique : changer le temps, la personne, la voix, ou le discours",
        "Il faut modifier TOUS les éléments concernés, sans en oublier aucun",
        "Vérifier les accords : sujet-verbe, participe passé, pronoms",
        "Relire la phrase obtenue : elle doit rester cohérente et correcte",
      ],
      voixOff:
        "La question de réécriture est un exercice classique du brevet : elle demande de transformer une phrase donnée en respectant une consigne précise, changer le temps, la personne, la voix, ou passer du discours direct au discours indirect. Il faut modifier tous les éléments concernés par la transformation, sans en oublier aucun : verbes, pronoms, accords. Vérifie toujours les accords, sujet-verbe et participe passé notamment, et relis la phrase obtenue pour t'assurer qu'elle reste cohérente et correcte.",
    },
    {
      titre: "Méthode pour réussir la réécriture",
      illustration: "🧭",
      visuel: "Lire → Repérer → Transformer → Vérifier",
      contenu: [
        "Lire attentivement la phrase de départ et la consigne",
        "Repérer tous les éléments à transformer (verbes, pronoms, temps)",
        "Transformer élément par élément, sans se précipiter",
        "Vérifier l'accord et la cohérence de la phrase finale",
      ],
      voixOff:
        "Pour réussir la question de réécriture, adopte une méthode en quatre étapes. D'abord, lis attentivement la phrase de départ et la consigne, pour bien comprendre ce qui est demandé. Ensuite, repère tous les éléments à transformer : verbes, pronoms, temps, indicateurs. Puis transforme élément par élément, sans te précipiter, en procédant avec méthode. Enfin, vérifie les accords et relis ta phrase pour t'assurer qu'elle reste cohérente et grammaticalement correcte.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Nature (catégorie) ≠ fonction (rôle dans la phrase)",
        "Proposition principale + subordonnée(s) ; indépendante = autonome",
        "Voix passive : COD devient sujet, sujet devient complément d'agent (par)",
        "Discours indirect : changement de pronoms, temps, indicateurs de temps/lieu",
      ],
      voixOff:
        "Résumons. La nature d'un mot, sa catégorie grammaticale, ne doit jamais être confondue avec sa fonction, son rôle dans la phrase. Une proposition principale peut commander une ou plusieurs subordonnées, tandis qu'une proposition indépendante reste autonome. À la voix passive, le complément d'objet direct devient sujet, et l'ancien sujet devient complément d'agent introduit par par. Enfin, le passage au discours indirect entraîne toujours des changements de pronoms, de temps et d'indicateurs de temps et de lieu. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre rassemble les notions de grammaire les plus fréquemment évaluées à l'épreuve de français du brevet : nature et fonction, types de propositions, voix active/passive, discours direct/indirect, et la méthode de la question de réécriture.",
    sections: [
      {
        titre: "Nature, fonction et types de phrases",
        points: [
          "Nature : catégorie grammaticale d'un mot (nom, verbe, adjectif...)",
          "Fonction : rôle du mot dans la phrase (sujet, COD, complément...)",
          "Quatre types de phrases : déclaratif, interrogatif, injonctif, exclamatif",
          "Formes : affirmative/négative, active/passive, personnelle/impersonnelle",
        ],
      },
      {
        titre: "Les propositions",
        points: [
          "Indépendante : autonome, ne dépend d'aucune autre proposition",
          "Principale : commande une ou plusieurs subordonnées",
          "Subordonnée relative (qui, que, dont, où) et conjonctive (que, si, quand)",
        ],
      },
      {
        titre: "Voix active/passive et discours rapporté",
        points: [
          "Voix passive : le COD devient sujet, l'ancien sujet devient complément d'agent (par)",
          "Verbe passif : auxiliaire être + participe passé accordé avec le sujet",
          "Discours indirect : intégration dans une subordonnée (que, si), changements de pronoms, temps, indicateurs",
        ],
      },
      {
        titre: "Méthode de la réécriture au brevet",
        points: [
          "Lire attentivement la phrase de départ et la consigne",
          "Repérer tous les éléments à transformer",
          "Transformer méthodiquement, sans en oublier aucun",
          "Vérifier les accords et la cohérence finale de la phrase",
        ],
      },
    ],
    audio:
      "Fiche de révision : la grammaire au brevet, analyse et réécriture. Il ne faut jamais confondre la nature d'un mot, sa catégorie grammaticale, avec sa fonction, son rôle dans la phrase. Il existe quatre types de phrases : déclaratif, interrogatif, injonctif, exclamatif, et plusieurs formes possibles, affirmative ou négative, active ou passive. Une proposition indépendante est autonome, tandis qu'une proposition principale commande une ou plusieurs subordonnées, relatives ou conjonctives. À la voix passive, le complément d'objet direct devient sujet, et l'ancien sujet devient complément d'agent, introduit par la préposition par ; le verbe passif se construit avec l'auxiliaire être et un participe passé accordé. Le discours indirect intègre les paroles rapportées dans une subordonnée introduite par que ou si, ce qui entraîne des changements de pronoms, de temps verbaux et d'indicateurs de temps et de lieu. Pour réussir la question de réécriture du brevet, il faut lire attentivement la consigne, repérer tous les éléments à transformer, les modifier un par un, puis vérifier les accords et la cohérence de la phrase finale.",
  },
  memoCards: [
    { recto: "Différence entre nature et fonction ?", verso: "Nature = catégorie grammaticale du mot (nom, verbe...) ; fonction = rôle du mot dans la phrase (sujet, COD...)." },
    { recto: "Les quatre types de phrases ?", verso: "Déclaratif, interrogatif, injonctif, exclamatif." },
    { recto: "Proposition indépendante vs principale ?", verso: "Indépendante : autonome, ne dépend de rien. Principale : commande une ou plusieurs subordonnées." },
    { recto: "Comment transformer une phrase active en passive ?", verso: "Le COD devient sujet ; l'ancien sujet devient complément d'agent introduit par « par » ; verbe = être + participe passé." },
    { recto: "Comment se forme le discours indirect ?", verso: "Les paroles sont intégrées dans une subordonnée (que, si) ; changement de pronoms, temps, indicateurs de temps/lieu." },
    { recto: "« Demain » et « ici » au discours indirect ?", verso: "« Demain » devient « le lendemain » ; « ici » devient « là »." },
    { recto: "Qu'est-ce qu'un substitut (reprise) ?", verso: "Un mot qui remplace un nom déjà cité pour éviter la répétition : pronom, synonyme, périphrase." },
    { recto: "Les 4 étapes de la méthode de réécriture ?", verso: "Lire la consigne, repérer les éléments à transformer, transformer un par un, vérifier accords et cohérence." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans la phrase « Le vieux chat dort », quelle est la fonction de « vieux » ?",
      choix: ["Sujet", "Épithète du nom « chat »", "Complément d'objet direct", "Attribut du sujet"],
      bonneReponse: 1,
      explication: "« Vieux » est un adjectif qualificatif placé directement à côté du nom qu'il qualifie : c'est une épithète.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le type de la phrase « Range ta chambre ! » ?",
      choix: ["Déclaratif", "Interrogatif", "Injonctif", "Exclamatif"],
      bonneReponse: 2,
      explication: "La phrase donne un ordre, elle est donc de type injonctif (même si elle porte un point d'exclamation, son type reste injonctif).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Transforme cette phrase à la voix passive : « Le chat mange la souris. »",
      reponse: "La souris est mangée par le chat.",
      explication: "Le COD « la souris » devient sujet, l'ancien sujet « le chat » devient complément d'agent introduit par « par », et le verbe devient « est mangée ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une proposition subordonnée relative est introduite par :",
      choix: ["donc, or, car", "qui, que, dont, où", "mais, et, ou", "malgré, sauf, hormis"],
      bonneReponse: 1,
      explication: "Les pronoms relatifs qui, que, dont, où introduisent les propositions subordonnées relatives.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Il a dit qu'il viendrait le lendemain », à quel discours cette phrase appartient-elle ?",
      choix: ["Discours direct", "Discours indirect", "Discours narrativisé", "Aucun des trois"],
      bonneReponse: 1,
      explication: "Les paroles sont rapportées dans une subordonnée introduite par « que », avec les changements de temps et d'indicateurs typiques du discours indirect.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Transforme au discours indirect : Elle a dit : « Je pars demain. »",
      reponse: "Elle a dit qu'elle partait le lendemain.",
      explication: "« Je » devient « elle », le présent devient l'imparfait (concordance des temps), et « demain » devient « le lendemain ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Identifie la proposition principale et la proposition subordonnée dans : « Je pense que tu as raison. »",
      reponse: "Proposition principale : « Je pense » ; proposition subordonnée conjonctive complément d'objet : « que tu as raison ».",
      explication: "La subordonnée « que tu as raison » ne peut pas exister seule : elle dépend du verbe « pense » de la principale.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi il ne faut pas confondre nature et fonction, avec un exemple.",
      reponse: "La nature d'un mot ne change jamais (« chat » reste toujours un nom), alors que sa fonction change selon la phrase : dans « Le chat dort », « chat » est sujet ; dans « Je vois le chat », « chat » est complément d'objet direct. C'est donc bien la fonction, et non la nature, qui varie selon la construction de la phrase.",
      explication: "Confondre les deux est une erreur fréquente qui peut faire perdre des points aux questions de grammaire du brevet.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Réécris « Les enfants ont mangé le gâteau » à la voix passive : quelle forme est correcte ?",
      choix: [
        "Le gâteau a été mangé par les enfants.",
        "Le gâteau mange les enfants.",
        "Les enfants sont mangés par le gâteau.",
        "Le gâteau était mangeant les enfants.",
      ],
      bonneReponse: 0,
      explication: "Le COD « le gâteau » devient sujet, et le verbe au passé composé passif se construit avec « avoir été » + participe passé : « a été mangé ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Réécris la phrase suivante en respectant la consigne : « Nous partirons demain » — mets cette phrase au discours indirect après « Il nous a annoncé que... », et explique les transformations nécessaires.",
      reponse: "Il nous a annoncé que nous partirions le lendemain. Transformations : le futur simple « partirons » devient un conditionnel présent (futur dans le passé), en raison de la concordance des temps avec la principale au passé (« a annoncé ») ; l'indicateur de temps « demain » devient « le lendemain », car le repère temporel change avec le passage au discours rapporté.",
      explication: "Cette double transformation, temps verbal et indicateur temporel, est typique des questions de réécriture les plus complexes du brevet.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Réécris ce texte en mettant tous les verbes du présent au passé composé, en respectant les accords : « Le chien court dans le jardin. Il aboie fort et effraie les oiseaux, qui s'envolent aussitôt. »",
      reponse: "Le chien a couru dans le jardin. Il a aboyé fort et a effrayé les oiseaux, qui se sont envolés aussitôt.",
      explication: "On vérifie l'auxiliaire correct (avoir ou être), la formation du participe passé de chaque verbe, et l'accord du participe passé avec le sujet pour le verbe pronominal « s'envoler ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse la phrase « Bien que fatiguée, elle continua son chemin, car elle savait que son frère l'attendait. » : identifie les propositions et leur type (principale, subordonnée relative ou conjonctive).",
      reponse: "« Elle continua son chemin » : proposition principale. « Bien que fatiguée » : proposition subordonnée (elliptique, sous-entendu « elle était »), de concession. « Car elle savait » : proposition indépendante coordonnée à la principale par « car ». « Que son frère l'attendait » : proposition subordonnée conjonctive, complément d'objet du verbe « savait ».",
      explication: "Cette phrase combine plusieurs types de propositions, ce qui en fait un bon exercice d'entraînement pour l'analyse grammaticale du brevet.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La fonction d'un mot dans la phrase, c'est :",
      choix: ["sa catégorie grammaticale", "son rôle (sujet, COD, complément...)", "son genre (masculin/féminin)", "son nombre de syllabes"],
      bonneReponse: 1,
      explication: "La fonction dépend de la construction de la phrase, contrairement à la nature qui reste fixe.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne les quatre types de phrases.",
      reponse: "Déclaratif, interrogatif, injonctif, exclamatif.",
      explication: "Chaque phrase appartient à un seul type, mais peut combiner plusieurs formes (négative, passive...).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment transforme-t-on une phrase de la voix active à la voix passive ?",
      reponse: "Le complément d'objet direct devient le sujet de la phrase passive ; l'ancien sujet devient un complément d'agent introduit par « par » ; le verbe se construit avec l'auxiliaire être suivi du participe passé, accordé avec le nouveau sujet.",
      explication: "Cette transformation ne fonctionne qu'avec des verbes transitifs directs (qui ont un COD).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Au discours indirect, l'indicateur « hier » devient :",
      choix: ["aujourd'hui", "la veille", "demain", "maintenant"],
      bonneReponse: 1,
      explication: "Le repère temporel change lors du passage au discours rapporté : « hier » devient « la veille ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelles sont les quatre étapes de la méthode pour réussir une question de réécriture ?",
      reponse: "Lire attentivement la phrase et la consigne ; repérer tous les éléments à transformer ; transformer méthodiquement chaque élément ; vérifier les accords et la cohérence de la phrase finale.",
      explication: "Cette méthode évite d'oublier une transformation, erreur la plus fréquente à cet exercice.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Grammaire au brevet",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Elle regarde le film », quelle est la fonction de « le film » ?",
          choix: ["Sujet", "Complément d'objet direct", "Attribut du sujet", "Complément circonstanciel"],
          bonneReponse: 1,
          explication: "« Le film » répond à la question « regarde qui/quoi ? » et est directement rattaché au verbe : c'est un COD.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une proposition indépendante ?",
          reponse: "C'est une proposition qui ne dépend d'aucune autre proposition et qui peut se suffire à elle-même sur le plan grammatical.",
          explication: "Elle peut être seule ou coordonnée/juxtaposée à d'autres indépendantes.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Réécris à la voix passive : « Le vent a renversé l'arbre. » Quelle est la forme correcte ?",
          choix: [
            "L'arbre a renversé le vent.",
            "L'arbre a été renversé par le vent.",
            "L'arbre est renversant le vent.",
            "Le vent est renversé par l'arbre.",
          ],
          bonneReponse: 1,
          explication: "Le COD « l'arbre » devient sujet ; le verbe au passé composé actif devient « a été renversé » au passif, avec « par le vent » en complément d'agent.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme au discours indirect : Il a demandé : « Où vas-tu ? »",
          reponse: "Il a demandé où j'allais (ou : où elle/il allait, selon le contexte).",
          explication: "Dans une interrogation indirecte, on supprime le point d'interrogation et l'inversion sujet-verbe ; le mot interrogatif « où » est conservé pour introduire la subordonnée.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Identifie la nature et la fonction du mot souligné : « Je lis un livre passionnant » (mot souligné : « passionnant »).",
          reponse: "Nature : adjectif qualificatif (verbal, participe présent employé comme adjectif). Fonction : épithète du nom « livre ».",
          explication: "« Passionnant » qualifie directement le nom « livre » sans verbe d'état : c'est une épithète.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Réécris ce texte en respectant la consigne : mets à la 3e personne du singulier (au lieu de la 1re) : « Je me lève tôt, je prends mon petit-déjeuner, puis je pars à l'école en vélo. » Indique les changements nécessaires.",
          reponse: "Il/Elle se lève tôt, il/elle prend son petit-déjeuner, puis il/elle part à l'école en vélo. Changements : le pronom sujet « je » devient « il » ou « elle » ; les terminaisons verbales changent (« lève » reste identique à l'oral mais la personne grammaticale change, « prends » devient « prend », « pars » devient « part ») ; le déterminant possessif « mon » devient « son ».",
          explication: "Ce type de réécriture teste la maîtrise des accords sujet-verbe et des déterminants possessifs selon la personne grammaticale.",
        },
      ],
    },
    {
      titre: "Examen 2 — Grammaire au brevet",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Paul est content », quelle est la fonction de « content » ?",
          choix: ["Épithète", "Complément d'objet direct", "Attribut du sujet", "Complément d'agent"],
          bonneReponse: 2,
          explication: "« Content » est relié au sujet « Paul » par le verbe d'état « est » : c'est un attribut du sujet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui distingue une proposition subordonnée relative d'une proposition subordonnée conjonctive ?",
          reponse: "La subordonnée relative est introduite par un pronom relatif (qui, que, dont, où) et complète généralement un nom (antécédent). La subordonnée conjonctive est introduite par une conjonction de subordination (que, si, quand, parce que) et complète généralement un verbe.",
          explication: "Le mot introducteur et la fonction de la subordonnée permettent de les distinguer.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase est correctement mise au discours indirect à partir de « Il a dit : \"J'ai faim.\" » ?",
          choix: [
            "Il a dit qu'il a faim.",
            "Il a dit qu'il avait faim.",
            "Il a dit : qu'il a faim.",
            "Il a dit j'ai faim.",
          ],
          bonneReponse: 1,
          explication: "Le présent « j'ai faim » devient l'imparfait « il avait faim » par concordance des temps, la principale étant au passé composé.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réécris à la voix passive : « Le jury récompensera les meilleurs élèves. »",
          reponse: "Les meilleurs élèves seront récompensés par le jury.",
          explication: "Le futur simple actif « récompensera » devient « seront récompensés » au passif (auxiliaire être au futur + participe passé accordé au pluriel).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi, dans une question de réécriture, il faut vérifier tous les accords une fois la transformation effectuée.",
          reponse: "Parce qu'une transformation (changement de temps, de personne, de voix) peut modifier le nombre ou le genre du sujet, ce qui entraîne des accords en cascade : accord sujet-verbe, accord du participe passé, accord des adjectifs ou déterminants. Oublier un seul accord rend la phrase finale incorrecte, même si la transformation principale est juste.",
          explication: "C'est l'erreur la plus fréquente à cet exercice : réussir la transformation principale mais oublier un accord secondaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève doit réécrire cette phrase en mettant le verbe souligné au passé composé et en respectant les accords : « Les fleurs que Marie a cueillies (au présent : que Marie cueille) sont posées sur la table. » Corrige les éventuelles erreurs d'accord et explique la règle appliquée.",
          reponse: "La forme correcte est bien « Les fleurs que Marie a cueillies sont posées sur la table. » Le participe passé « cueillies » s'accorde avec le COD « que » (mis pour « fleurs », féminin pluriel) car ce COD est placé avant le verbe, comme l'exige la règle d'accord du participe passé conjugué avec l'auxiliaire avoir.",
          explication: "Cette règle, le COD placé avant le verbe entraîne l'accord du participe passé avec l'auxiliaire avoir, est un des pièges grammaticaux les plus fréquents au brevet.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Nature (catégorie grammaticale) ≠ fonction (rôle dans la phrase) : un mot garde sa nature mais change de fonction.",
    "Quatre types de phrases : déclaratif, interrogatif, injonctif, exclamatif ; formes : affirmative/négative, active/passive.",
    "Proposition indépendante = autonome ; proposition principale commande une ou plusieurs subordonnées (relatives ou conjonctives).",
    "Voix passive : le COD devient sujet, l'ancien sujet devient complément d'agent (« par »), verbe = être + participe passé accordé.",
    "Discours indirect : intégration dans une subordonnée, changements de pronoms, de temps (concordance) et d'indicateurs de temps/lieu.",
    "Méthode de réécriture : lire la consigne, repérer tous les éléments à transformer, transformer un par un, vérifier accords et cohérence.",
  ],
},
{
  slug: "poesie-engagee",
  titre: "La poésie engagée",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Découvrir comment la poésie peut dénoncer l'injustice, la guerre et l'oppression. Étudier les procédés poétiques au service de l'engagement, de Hugo à Éluard et Aragon, et se préparer aux questions de brevet sur un poème engagé.",
  objectifs: [
    "Définir la poésie engagée et ses grands combats (guerre, injustice, liberté)",
    "Identifier les procédés poétiques utilisés pour convaincre et émouvoir",
    "Distinguer poésie lyrique et poésie engagée",
    "Connaître les poètes et poèmes majeurs (Hugo, Éluard, Aragon, Desnos)",
    "Analyser un poème engagé et rédiger un commentaire structuré",
  ],
  slides: [
    {
      titre: "Qu'est-ce que la poésie engagée ?",
      illustration: "✊",
      visuel: "Poésie + combat",
      contenu: [
        "Poésie qui prend parti sur un sujet politique, social ou moral",
        "Le poète met son art au service d'une cause : dénoncer, mobiliser",
        "Née du besoin de dire ce que la prose ne peut pas toujours dire",
        "Une longue tradition : de Hugo à la poésie de la Résistance",
      ],
      voixOff:
        "La poésie engagée est une poésie qui prend parti sur un sujet politique, social ou moral : la guerre, l'injustice, la misère, la liberté. Le poète met son art au service d'une cause : il cherche à dénoncer, à émouvoir, à mobiliser le lecteur. Cette tradition traverse toute l'histoire de la littérature française, de Victor Hugo dénonçant Napoléon III jusqu'aux poètes résistants de la Seconde Guerre mondiale.",
    },
    {
      titre: "Poésie lyrique et poésie engagée",
      illustration: "⚖️",
      visuel: "Je / sentiments ↔ Nous / combat",
      contenu: [
        "Poésie lyrique : exprime les sentiments intimes du poète (amour, mort, nature)",
        "Poésie engagée : porte un message collectif, tourné vers l'extérieur",
        "Un même poème peut mêler les deux : émotion personnelle au service d'une cause",
        "Le « je » du poète engagé parle souvent au nom d'un « nous »",
      ],
      voixOff:
        "Il ne faut pas confondre poésie lyrique et poésie engagée. La poésie lyrique exprime les sentiments intimes du poète : l'amour, la mort, la nature, la mélancolie. La poésie engagée, elle, porte un message collectif, tourné vers l'extérieur, vers la société. Mais les deux peuvent se rencontrer : le poète engagé transforme souvent son émotion personnelle en cri collectif, et son je parle alors au nom d'un nous.",
    },
    {
      titre: "Les grands combats de la poésie engagée",
      illustration: "🌍",
      visuel: "Guerre • Injustice • Liberté • Esclavage",
      contenu: [
        "Contre la guerre : dénoncer l'horreur et la barbarie des conflits",
        "Contre l'injustice sociale : misère, exploitation, inégalités",
        "Pour la liberté : résistance à l'oppression et à la tyrannie",
        "Contre l'esclavage et le racisme : dignité humaine bafouée",
      ],
      voixOff:
        "La poésie engagée s'empare de grands combats. Elle dénonce l'horreur et la barbarie de la guerre. Elle s'élève contre l'injustice sociale, la misère et l'exploitation des plus faibles. Elle chante la liberté et la résistance face à l'oppression et à la tyrannie. Elle combat aussi l'esclavage et le racisme, au nom de la dignité humaine.",
    },
    {
      titre: "Les procédés de la poésie engagée",
      illustration: "🎭",
      visuel: "Images fortes + rythme + adresse au lecteur",
      contenu: [
        "Métaphores et images fortes pour frapper l'imagination",
        "Répétitions et anaphores pour marteler le message",
        "Antithèses pour opposer le bien et le mal, l'espoir et l'horreur",
        "Apostrophe : le poète s'adresse directement au lecteur ou à l'ennemi",
      ],
      voixOff:
        "Pour convaincre et émouvoir, le poète engagé utilise des procédés puissants. Les métaphores et les images fortes frappent l'imagination du lecteur. Les répétitions et les anaphores martèlent le message, comme un slogan. Les antithèses opposent le bien et le mal, l'espoir et l'horreur, pour créer un contraste saisissant. Et l'apostrophe permet au poète de s'adresser directement au lecteur, ou même à l'ennemi qu'il dénonce.",
    },
    {
      titre: "La Résistance et la clandestinité",
      illustration: "📜",
      visuel: "Liberté (Éluard) • Aragon",
      contenu: [
        "« Liberté » de Paul Éluard (1942) : poème diffusé clandestinement",
        "Louis Aragon, « La Rose et le Réséda » : union de résistants de tous horizons",
        "Robert Desnos, résistant, mort en déportation en 1945",
        "La poésie devient un moyen de résister sous l'Occupation",
      ],
      voixOff:
        "Pendant l'Occupation, la poésie devient une arme de résistance. Liberté, de Paul Éluard, écrit en 1942, est diffusé clandestinement puis parachuté par avion sur la France occupée. La Rose et le Réséda, de Louis Aragon, célèbre l'union de résistants de toutes convictions, catholiques et communistes, unis dans le même combat. Robert Desnos, poète résistant, est arrêté et meurt en déportation en 1945. La poésie devient alors un véritable acte de résistance.",
    },
    {
      titre: "Victor Hugo, poète engagé",
      illustration: "🕊️",
      visuel: "Les Châtiments (1853)",
      contenu: [
        "Les Châtiments (1853) : violent pamphlet contre Napoléon III",
        "Écrit depuis l'exil, après le coup d'État de 1851",
        "Hugo dénonce aussi la misère et le travail des enfants (« Melancholia »)",
        "Le poète comme « conscience » de son temps",
      ],
      voixOff:
        "Victor Hugo est l'un des plus grands poètes engagés français. Dans Les Châtiments, recueil publié en 1853, il dénonce violemment Napoléon III, qu'il a fui en exil après le coup d'État de 1851. Hugo dénonce aussi la misère sociale, notamment le travail des enfants dans le poème Melancholia. Pour lui, le poète doit être la conscience morale de son époque, celui qui voit et qui dit ce que d'autres taisent.",
    },
    {
      titre: "Analyser un poème engagé",
      illustration: "🔍",
      visuel: "Thème + procédés + effet",
      contenu: [
        "Identifier le thème et la cause défendue par le poète",
        "Repérer les destinataires : à qui le poète s'adresse-t-il ?",
        "Relever les procédés (images, répétitions, antithèses) et leur effet",
        "Dégager le ton : indignation, espoir, colère, appel à l'action",
      ],
      voixOff:
        "Pour analyser un poème engagé, commence par identifier le thème et la cause que défend le poète. Demande-toi ensuite à qui il s'adresse : au lecteur, à l'ennemi, à un peuple tout entier ? Relève les procédés utilisés, images, répétitions, antithèses, et explique leur effet sur le lecteur. Enfin, dégage le ton du poème : indignation, espoir, colère, ou appel direct à l'action.",
    },
    {
      titre: "La poésie engagée au brevet",
      illustration: "🎓",
      visuel: "Questions + rédaction",
      contenu: [
        "Un poème engagé peut tomber à l'épreuve de français",
        "Questions : la cause défendue, les procédés, le ton, le destinataire",
        "Rédaction possible : écrire un texte engagé sur une cause qui te touche",
        "Attendus : cause claire, procédés d'écriture, sincérité de l'engagement",
      ],
      voixOff:
        "Au brevet, un poème engagé peut être proposé à l'épreuve de français. Les questions portent souvent sur la cause défendue, les procédés d'écriture utilisés, le ton du texte et son destinataire. Le sujet de rédaction peut te demander d'écrire toi-même un texte engagé sur une cause qui te tient à cœur. Pour réussir, choisis une cause claire, utilise des procédés d'écriture efficaces, et fais preuve de sincérité dans ton engagement.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Poésie engagée : le poète prend parti sur une cause politique, sociale ou morale",
        "Grands combats : guerre, injustice, liberté, dignité humaine",
        "Procédés : images fortes, répétitions, antithèses, apostrophe",
        "Poètes clés : Hugo, Éluard (« Liberté »), Aragon, Desnos",
      ],
      voixOff:
        "Résumons. La poésie engagée est une poésie où le poète prend parti sur une cause politique, sociale ou morale. Elle défend de grands combats : contre la guerre, l'injustice, pour la liberté et la dignité humaine. Elle utilise des procédés puissants : images fortes, répétitions, antithèses, apostrophe au lecteur. Retiens les poètes clés : Victor Hugo, Paul Éluard et son poème Liberté, Louis Aragon, Robert Desnos. Te voilà prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "La poésie engagée met la force des mots et des images au service d'une cause : dénoncer la guerre, l'injustice, l'oppression, et défendre la liberté. Ce chapitre s'inscrit dans le thème « Agir sur le monde » du programme de 3e et prépare aux questions de brevet sur un poème engagé.",
    sections: [
      {
        titre: "Définition et enjeux",
        points: [
          "La poésie engagée prend parti sur un sujet politique, social ou moral",
          "Le poète met son art au service d'une cause : dénoncer, émouvoir, mobiliser",
          "À distinguer de la poésie lyrique, centrée sur les sentiments intimes du poète",
          "Le « je » du poète engagé parle souvent au nom d'un « nous » collectif",
        ],
      },
      {
        titre: "Les grands combats",
        points: [
          "Contre la guerre : dénoncer l'horreur et la barbarie des conflits",
          "Contre l'injustice sociale : misère, exploitation, inégalités",
          "Pour la liberté : résistance à l'oppression et à la tyrannie",
          "Contre l'esclavage et le racisme : défense de la dignité humaine",
        ],
      },
      {
        titre: "Les procédés d'écriture",
        points: [
          "Métaphores et images fortes pour frapper l'imagination",
          "Répétitions, anaphores pour marteler le message",
          "Antithèses pour opposer le bien et le mal, l'espoir et l'horreur",
          "Apostrophe : adresse directe au lecteur ou à l'adversaire",
        ],
      },
      {
        titre: "Poètes et œuvres clés",
        points: [
          "Victor Hugo, Les Châtiments (1853) : pamphlet contre Napoléon III, depuis l'exil",
          "Paul Éluard, « Liberté » (1942) : poème de résistance diffusé clandestinement",
          "Louis Aragon, « La Rose et le Réséda » : union des résistants de tous horizons",
          "Robert Desnos : poète résistant, mort en déportation en 1945",
        ],
      },
    ],
    audio:
      "Fiche de révision : la poésie engagée. La poésie engagée est une poésie où le poète prend parti sur un sujet politique, social ou moral, pour dénoncer, émouvoir et mobiliser le lecteur. Elle se distingue de la poésie lyrique, centrée sur les sentiments intimes. Elle s'empare de grands combats : contre la guerre, contre l'injustice sociale, pour la liberté, contre l'esclavage et le racisme. Le poète utilise des procédés puissants : métaphores et images fortes, répétitions et anaphores qui martèlent le message, antithèses qui opposent le bien et le mal, et apostrophes qui interpellent directement le lecteur. Victor Hugo dénonce Napoléon III dans Les Châtiments. Paul Éluard écrit Liberté en 1942, poème de résistance diffusé clandestinement puis parachuté sur la France occupée. Louis Aragon et Robert Desnos incarnent aussi cette poésie de la Résistance. Au brevet, identifie toujours la cause défendue, le destinataire et les procédés utilisés.",
  },
  memoCards: [
    { recto: "Définition de la poésie engagée ?", verso: "Une poésie où le poète prend parti sur un sujet politique, social ou moral, pour dénoncer, émouvoir et mobiliser." },
    { recto: "Différence poésie lyrique / poésie engagée ?", verso: "Lyrique : sentiments intimes du poète. Engagée : message collectif tourné vers la société." },
    { recto: "Qui a écrit « Liberté » (1942) ?", verso: "Paul Éluard, poème de résistance diffusé clandestinement puis parachuté sur la France occupée." },
    { recto: "Que dénonce Victor Hugo dans Les Châtiments (1853) ?", verso: "Napoléon III et son coup d'État de 1851, depuis l'exil de Hugo." },
    { recto: "Qui est l'auteur de « La Rose et le Réséda » ?", verso: "Louis Aragon : il célèbre l'union de résistants de toutes convictions dans le même combat." },
    { recto: "Qui est Robert Desnos ?", verso: "Poète résistant français, arrêté et mort en déportation en 1945." },
    { recto: "Trois procédés de la poésie engagée ?", verso: "Métaphores/images fortes, répétitions/anaphores, antithèses, et apostrophe au lecteur." },
    { recto: "Que dénonce Hugo dans « Melancholia » ?", verso: "La misère sociale et le travail des enfants au XIXe siècle." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La poésie engagée se définit comme une poésie qui :",
      choix: ["exprime uniquement des sentiments amoureux", "prend parti sur une cause politique, sociale ou morale", "ne parle que de la nature", "évite tout sujet d'actualité"],
      bonneReponse: 1,
      explication: "Le poète engagé met son art au service d'une cause qu'il veut défendre ou dénoncer.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui a écrit le poème « Liberté » en 1942 ?",
      choix: ["Victor Hugo", "Paul Éluard", "Louis Aragon", "Robert Desnos"],
      bonneReponse: 1,
      explication: "Paul Éluard écrit ce poème pendant l'Occupation ; il est diffusé clandestinement puis parachuté sur la France occupée.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle différence fais-tu entre poésie lyrique et poésie engagée ?",
      reponse: "La poésie lyrique exprime les sentiments intimes du poète (amour, mort, nature). La poésie engagée porte un message collectif et prend parti sur une cause politique, sociale ou morale.",
      explication: "Les deux formes peuvent parfois se rejoindre quand l'émotion personnelle sert une cause collective.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Les Châtiments, de Victor Hugo, dénoncent :",
      choix: ["Louis XVI", "Napoléon III", "la Révolution française", "la Première Guerre mondiale"],
      bonneReponse: 1,
      explication: "Hugo écrit ce recueil depuis l'exil après le coup d'État de Napoléon III en 1851.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un poème engagé, à quoi sert l'anaphore (répétition d'un mot en début de vers) ?",
      choix: ["À faire rimer les vers", "À marteler le message et frapper l'esprit du lecteur", "À raccourcir le poème", "À rendre le texte plus discret"],
      bonneReponse: 1,
      explication: "La répétition insiste sur une idée, comme un slogan, et renforce la force de conviction du poème.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi le poème « Liberté » d'Éluard a pu jouer un rôle de résistance sous l'Occupation.",
      reponse: "Diffusé clandestinement, puis parachuté par les avions alliés au-dessus de la France occupée, le poème redonnait espoir à la population et affirmait, dans un contexte de censure, l'aspiration collective à la liberté face à l'oppresseur.",
      explication: "Un poème peut avoir un impact politique concret, au-delà de sa seule valeur littéraire.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'une antithèse et pourquoi est-elle utile dans un poème engagé ?",
      reponse: "Une antithèse rapproche deux mots ou expressions de sens opposé (par exemple « la nuit » et « la lumière », « l'esclave » et « l'homme libre »). Elle est utile car elle crée un contraste saisissant qui frappe l'imagination et met en évidence l'injustice ou l'espoir défendus par le poète.",
      explication: "L'opposition brutale entre deux idées renforce la force de conviction du texte.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi peut-on dire que le « je » du poète engagé parle souvent au nom d'un « nous » ?",
      reponse: "Même quand le poète emploie la première personne du singulier, il exprime souvent un sentiment ou une revendication partagés par tout un groupe (un peuple opprimé, des résistants, des victimes) : son « je » individuel devient la voix d'une communauté.",
      explication: "C'est ce qui distingue le « je » lyrique, centré sur l'intime, du « je » engagé, porte-parole d'une cause collective.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un poème engagé multiplie les impératifs (« Levez-vous ! », « Brisez vos chaînes ! »). Quel est l'effet recherché ?",
      choix: ["Décrire un paysage", "Appeler le lecteur à l'action", "Exprimer un regret personnel", "Raconter un souvenir d'enfance"],
      bonneReponse: 1,
      explication: "L'impératif transforme le poème en appel direct à agir, typique de la poésie engagée qui vise à mobiliser.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "En quoi la poésie de la Résistance (Éluard, Aragon, Desnos) illustre-t-elle la formule « les mots sont des armes » ?",
      reponse: "Sous l'Occupation, la parole publique était censurée : écrire et diffuser un poème engagé, souvent clandestinement, devenait un acte de courage et de résistance. Les images et le rythme du poème mobilisaient les consciences et redonnaient espoir, jouant ainsi un rôle politique réel, comme une arme au service de la liberté.",
      explication: "Robert Desnos est mort en déportation pour son engagement : la poésie de résistance a eu des conséquences bien réelles pour ses auteurs.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse cet extrait inventé : « Sur mes cahiers d'écolier / Sur les murs de la cité / J'écris ton nom : Liberté. » Identifie deux procédés poétiques et explique leur effet.",
      reponse: "L'anaphore de « sur » en début de vers crée un effet d'accumulation, multipliant les lieux où la liberté est inscrite, comme si elle envahissait tout l'espace. La personnification de la Liberté, à qui l'on « écrit le nom » comme à une personne aimée, transforme une notion abstraite en présence vivante et désirée, renforçant l'émotion et l'espoir du texte.",
      explication: "Ce vers rappelle directement la structure du poème Liberté d'Éluard ; ces procédés sont typiques de la poésie engagée.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Sujet d'entraînement type brevet : rédige un court poème engagé (6 à 8 vers, sans contrainte de rimes) sur une cause qui te touche, en utilisant au moins une répétition et une image forte.",
      reponse: "Exemple de corrigé : « Je dis non à l'indifférence / Non aux mots qui blessent en silence / Je dis non à l'enfant qui a faim / Non à la terre qui perd son chemin / Levez la voix, levez les mains / Pour que demain ait un autre destin. »",
      explication: "On vérifie : cause identifiable, répétition (« je dis non », « non à »), image forte (« la terre qui perd son chemin »), appel à l'action final.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La poésie engagée met l'art de la poésie au service :",
      choix: ["d'un simple divertissement", "d'une cause politique, sociale ou morale", "d'un exercice de style sans message", "de la publicité"],
      bonneReponse: 1,
      explication: "Le poète engagé cherche à dénoncer ou défendre une cause, pas seulement à divertir.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite un poète engagé et une œuvre qu'il a écrite.",
      reponse: "Par exemple : Paul Éluard, « Liberté » (1942), ou Victor Hugo, Les Châtiments (1853).",
      explication: "Ces deux poètes illustrent deux grandes formes d'engagement : la résistance à l'oppression et la dénonciation politique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux procédés utilisés par les poètes engagés pour convaincre le lecteur.",
      reponse: "Les métaphores et images fortes, les répétitions et anaphores, les antithèses, ou l'apostrophe directe au lecteur (deux réponses parmi celles-ci).",
      explication: "Ces procédés renforcent l'émotion et la force de conviction du poème.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« La Rose et le Réséda » de Louis Aragon célèbre :",
      choix: ["l'amour impossible", "l'union de résistants de toutes convictions", "la beauté de la nature", "la vie à la cour du roi"],
      bonneReponse: 1,
      explication: "Aragon y montre des résistants de convictions différentes, catholiques et communistes, unis dans le même combat.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qui distingue le « je » du poète engagé du « je » du poète lyrique ?",
      reponse: "Le « je » lyrique exprime des sentiments intimes et personnels. Le « je » du poète engagé, même à la première personne, parle souvent au nom d'un « nous » collectif, portant la voix d'un groupe ou d'un peuple.",
      explication: "C'est cette dimension collective qui donne à la poésie engagée sa portée politique.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La poésie engagée",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qui a écrit Les Châtiments, pamphlet contre Napoléon III ?",
          choix: ["Paul Éluard", "Victor Hugo", "Louis Aragon", "Robert Desnos"],
          bonneReponse: 1,
          explication: "Victor Hugo écrit ce recueil en 1853, depuis son exil, après le coup d'État de 1851.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la définition de la poésie engagée en une phrase.",
          reponse: "C'est une poésie où le poète prend parti sur une cause politique, sociale ou morale, pour dénoncer, émouvoir ou mobiliser le lecteur.",
          explication: "L'engagement suppose que le poète mette son art au service d'un message et d'une cause.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans le poème « Liberté » d'Éluard, la répétition du mot « Liberté » à la fin de chaque strophe crée principalement :",
          choix: ["un effet comique", "un effet de martèlement qui renforce l'aspiration collective à la liberté", "une confusion pour le lecteur", "un simple effet de rime"],
          bonneReponse: 1,
          explication: "Cette anaphore finale structure tout le poème et en fait un véritable chant d'espoir collectif.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi peut-on dire que la poésie, sous l'Occupation, est devenue un acte de résistance ?",
          reponse: "Parce qu'écrire et diffuser des poèmes dénonçant l'oppresseur, souvent clandestinement, était dangereux et interdit par la censure : cela exigeait du courage et servait à mobiliser les consciences et à redonner espoir à la population, comme le montre le destin tragique de Robert Desnos, mort en déportation.",
          explication: "L'engagement poétique pouvait avoir des conséquences réelles, parfois mortelles, pour ses auteurs.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle est la différence entre une métaphore et une antithèse ? Donne un exemple de chacune en lien avec la poésie engagée.",
          reponse: "La métaphore associe deux réalités sans outil de comparaison, pour créer une image forte (par exemple, comparer la liberté à un « oiseau » sans dire « comme »). L'antithèse oppose deux termes de sens contraire pour créer un contraste (par exemple, « la nuit de l'esclavage » face à « l'aube de la liberté »).",
          explication: "Ces deux figures sont fréquentes dans la poésie engagée car elles frappent l'imagination du lecteur.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse cet extrait inventé : « Ils ont pris nos champs, nos maisons, notre pain / Mais jamais, jamais ils ne prendront nos rêves. » Identifie la cause défendue et deux procédés d'écriture.",
          reponse: "La cause défendue est la résistance à un oppresseur qui a tout confisqué (biens matériels), mais qui ne peut confisquer la liberté intérieure et l'espoir. Deux procédés : l'accumulation (« nos champs, nos maisons, notre pain ») qui énumère les pertes subies, et la répétition de « jamais » associée à l'antithèse entre ce qui a été pris et ce qui ne peut jamais l'être, qui renforce l'affirmation d'espoir final.",
          explication: "Le contraste entre la première partie (pertes) et la seconde (résistance) est typique de la rhétorique de la poésie engagée.",
        },
      ],
    },
    {
      titre: "Examen 2 — La poésie engagée",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Robert Desnos, poète résistant, est mort :",
          choix: ["de vieillesse", "en déportation en 1945", "lors d'un duel", "en exil en Angleterre"],
          bonneReponse: 1,
          explication: "Arrêté pour ses activités de résistance, Desnos meurt en déportation peu après la libération des camps.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle cause Victor Hugo défend-il dans le poème « Melancholia » ?",
          reponse: "Il dénonce la misère sociale, en particulier le travail des enfants au XIXe siècle.",
          explication: "Hugo utilise sa notoriété de poète pour sensibiliser l'opinion à une injustice sociale de son époque.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Qu'est-ce qui distingue principalement la poésie lyrique de la poésie engagée ?",
          choix: [
            "La poésie lyrique n'utilise jamais d'images poétiques",
            "La poésie lyrique exprime l'intime, la poésie engagée porte un message collectif",
            "La poésie engagée est toujours écrite en prose",
            "Il n'existe aucune différence entre les deux",
          ],
          bonneReponse: 1,
          explication: "L'orientation vers le collectif et une cause à défendre caractérise la poésie engagée, à la différence du lyrisme intime.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle de l'apostrophe dans un poème engagé, avec un exemple.",
          reponse: "L'apostrophe permet au poète de s'adresser directement à un destinataire (le lecteur, le peuple, ou même l'adversaire) pour l'interpeller et l'impliquer davantage. Par exemple : « Peuple, lève-toi ! » interpelle directement le lecteur et l'invite à agir.",
          explication: "Cette adresse directe crée une proximité et une urgence qui renforcent l'effet de mobilisation du poème.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi le poème Liberté d'Éluard a-t-il été parachuté par les Alliés au-dessus de la France occupée ?",
          reponse: "Parce que son message d'espoir et son affirmation répétée de la liberté avaient une portée symbolique et morale forte : le diffuser largement permettait de soutenir le moral de la population et de la Résistance face à l'occupant.",
          explication: "Ce fait historique montre l'impact concret que peut avoir un texte poétique engagé, au-delà de la seule littérature.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève affirme : « Un poème engagé n'a de valeur que si sa cause est encore d'actualité aujourd'hui. » Discute cette affirmation en t'appuyant sur les poèmes étudiés.",
          reponse: "Cette affirmation est discutable. Certes, certains combats (la guerre, l'injustice, la liberté) restent d'actualité, ce qui explique que Liberté d'Éluard ou Les Châtiments de Hugo continuent de toucher les lecteurs. Mais un poème engagé garde aussi une valeur historique et esthétique même quand la cause précise a disparu : il témoigne d'une époque, de ses combats, et sa force poétique (images, rythme) continue d'émouvoir indépendamment du contexte d'origine.",
          explication: "Une bonne réponse distingue la portée universelle possible d'un poème engagé de son ancrage historique précis.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Poésie engagée : le poète prend parti sur une cause politique, sociale ou morale pour dénoncer, émouvoir, mobiliser.",
    "À distinguer de la poésie lyrique, centrée sur les sentiments intimes du poète.",
    "Grands combats : contre la guerre, l'injustice sociale, pour la liberté, contre l'esclavage et le racisme.",
    "Procédés clés : métaphores et images fortes, répétitions/anaphores, antithèses, apostrophe au lecteur.",
    "Poètes majeurs : Victor Hugo (Les Châtiments), Paul Éluard (Liberté), Louis Aragon, Robert Desnos.",
    "Au brevet, identifie toujours la cause défendue, le destinataire du poème et les procédés qui créent l'émotion et la conviction.",
  ],
},
{
  slug: "recits-guerre",
  titre: "Récits de guerre et d'engagement",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Étudier les récits qui témoignent des grands conflits du XXe siècle : Première et Seconde Guerre mondiale, Résistance, Shoah. Comprendre pourquoi et comment on écrit pour témoigner, dénoncer et transmettre la mémoire.",
  objectifs: [
    "Comprendre les enjeux du témoignage littéraire sur la guerre",
    "Distinguer récit de guerre, mémoires, journal et roman historique",
    "Analyser les effets du réel et les procédés du témoignage",
    "Connaître les œuvres et auteurs majeurs (Barbusse, Vercors, Semprún, Anne Frank)",
    "Se préparer aux questions de brevet sur un texte de témoignage",
  ],
  slides: [
    {
      titre: "Pourquoi écrire sur la guerre ?",
      illustration: "⚔️",
      visuel: "Témoigner • Dénoncer • Transmettre",
      contenu: [
        "La littérature de guerre naît de l'expérience directe du conflit",
        "Fonction de témoignage : dire ce qui a été vécu, pour que cela ne soit pas oublié",
        "Fonction de dénonciation : montrer l'horreur pour la combattre",
        "Fonction de transmission : léguer une mémoire aux générations suivantes",
      ],
      voixOff:
        "Depuis la Première Guerre mondiale, des soldats, des résistants et des victimes ont pris la plume pour raconter ce qu'ils avaient vécu. Ces récits remplissent trois fonctions essentielles : témoigner, pour que les faits ne soient pas oubliés ; dénoncer, pour montrer l'horreur de la guerre et empêcher qu'elle recommence ; transmettre, pour léguer une mémoire aux générations qui n'ont pas connu le conflit.",
    },
    {
      titre: "Le devoir de mémoire",
      illustration: "🕯️",
      visuel: "« Plus jamais ça »",
      contenu: [
        "Expression née après la Shoah : ne jamais oublier les crimes commis",
        "Les survivants témoignent pour les victimes qui ne peuvent plus parler",
        "La littérature devient un outil de transmission historique",
        "Enjeu majeur : lutter contre le négationnisme et l'oubli",
      ],
      voixOff:
        "Le devoir de mémoire, c'est l'obligation morale de ne jamais oublier les crimes de l'Histoire, en particulier la Shoah. Les survivants des camps ont souvent ressenti le besoin, parfois l'urgence, de témoigner pour les millions de victimes qui ne pouvaient plus parler. La littérature devient alors un outil de transmission historique essentiel, un rempart contre l'oubli et le négationnisme.",
    },
    {
      titre: "Genres du témoignage de guerre",
      illustration: "🗂️",
      visuel: "Roman • Mémoires • Journal • Nouvelle",
      contenu: [
        "Roman de guerre : fiction inspirée du vécu (Barbusse, Le Feu, 1916)",
        "Mémoires : récit rétrospectif d'un témoin (Semprún, L'Écriture ou la vie)",
        "Journal intime : écrit au jour le jour, sans recul (Anne Frank)",
        "Nouvelle engagée : court récit à portée symbolique (Vercors, Le Silence de la mer)",
      ],
      voixOff:
        "Plusieurs genres permettent de raconter la guerre. Le roman de guerre, comme Le Feu de Henri Barbusse en 1916, mêle expérience vécue et fiction. Les mémoires, comme celles de Jorge Semprún, sont un récit rétrospectif d'un témoin direct. Le journal intime, comme celui d'Anne Frank, s'écrit au jour le jour, sans savoir ce qui va suivre. Enfin, la nouvelle engagée, comme Le Silence de la mer de Vercors, condense un message fort dans un récit court.",
    },
    {
      titre: "Les effets du réel",
      illustration: "🔎",
      visuel: "Dates • Lieux • Détails précis",
      contenu: [
        "Précision des dates, des lieux, des noms : ancrage dans l'Histoire",
        "Détails concrets et sensoriels : donner à voir, entendre, sentir l'horreur",
        "Emploi du « je » ou du « nous » : implication du narrateur-témoin",
        "Sobriété du style : parfois plus efficace que l'emphase",
      ],
      voixOff:
        "Pour rendre un récit de guerre crédible et bouleversant, l'auteur utilise des effets de réel. Il précise les dates, les lieux, les noms, ce qui ancre le texte dans l'Histoire véritable. Il multiplie les détails concrets et sensoriels, pour faire voir, entendre et sentir l'horreur au lecteur. L'emploi du je ou du nous implique directement le narrateur-témoin. Et souvent, un style sobre, presque retenu, est plus bouleversant qu'un style grandiloquent.",
    },
    {
      titre: "Auteurs et œuvres clés",
      illustration: "📚",
      visuel: "Barbusse • Vercors • Semprún",
      contenu: [
        "Henri Barbusse, Le Feu (1916) : témoignage sur la Première Guerre mondiale",
        "Vercors, Le Silence de la mer (1942) : résistance silencieuse sous l'Occupation",
        "Jorge Semprún, L'Écriture ou la vie (1994) : déportation à Buchenwald",
        "Anne Frank, Journal (1942-1944) : clandestinité et persécution des Juifs",
      ],
      voixOff:
        "Quelques œuvres à connaître absolument. Le Feu d'Henri Barbusse, publié en 1916, témoigne de l'horreur des tranchées de la Première Guerre mondiale. Le Silence de la mer de Vercors, écrit clandestinement en 1942, raconte la résistance silencieuse d'une famille française face à un officier allemand. L'Écriture ou la vie de Jorge Semprún revient sur la déportation à Buchenwald. Et le Journal d'Anne Frank raconte deux ans de clandestinité avant l'arrestation et la déportation de sa famille.",
    },
    {
      titre: "La Résistance et l'engagement",
      illustration: "✊",
      visuel: "Résister par les mots",
      contenu: [
        "Pendant l'Occupation, écrire devient un acte de résistance",
        "Publications clandestines : les Éditions de Minuit fondées en 1941",
        "Le silence comme forme de résistance (Vercors)",
        "Les mots pour dénoncer, mobiliser, redonner espoir",
      ],
      voixOff:
        "Pendant l'Occupation allemande, écrire pouvait devenir un acte de résistance à part entière. Les Éditions de Minuit, fondées clandestinement en 1941, publiaient des textes interdits, au péril de la vie de leurs auteurs. Vercors montre même que le silence peut être une arme de résistance, quand parler serait céder à l'occupant. Dans tous les cas, les mots servent à dénoncer l'oppression, à mobiliser les consciences et à redonner espoir.",
    },
    {
      titre: "Analyser un texte de guerre",
      illustration: "🧭",
      visuel: "Contexte + point de vue + effets",
      contenu: [
        "Identifier le contexte historique précis évoqué par le texte",
        "Repérer le statut du narrateur : témoin direct, personnage fictif, narrateur omniscient",
        "Relever le champ lexical de la peur, de la violence, de la souffrance",
        "Dégager le but du texte : informer, émouvoir, dénoncer, rendre hommage",
      ],
      voixOff:
        "Pour analyser un texte sur la guerre, commence par identifier le contexte historique précis qu'il évoque. Interroge-toi ensuite sur le statut du narrateur : est-il un témoin direct, un personnage fictif, ou un narrateur qui domine le récit ? Relève le champ lexical de la peur, de la violence ou de la souffrance. Enfin, dégage le but du texte : informer, émouvoir, dénoncer, ou rendre hommage aux victimes.",
    },
    {
      titre: "Récits de guerre au brevet",
      illustration: "🎓",
      visuel: "Questions + rédaction",
      contenu: [
        "Un texte de témoignage tombe souvent à l'épreuve de français",
        "Questions : le point de vue, les émotions, les effets du réel, le message",
        "Rédaction possible : lettre, journal ou récit d'un événement historique",
        "Attendus : vocabulaire précis, respect du contexte, émotion maîtrisée",
      ],
      voixOff:
        "Au brevet, les textes sur la guerre et l'engagement sont fréquents à l'épreuve de français. Les questions portent souvent sur le point de vue adopté, les émotions exprimées, les effets du réel et le message que l'auteur veut transmettre. Le sujet de rédaction peut demander d'écrire une lettre, un extrait de journal, ou de raconter un événement historique. Pour réussir, utilise un vocabulaire précis, respecte le contexte historique et maîtrise l'expression des émotions sans excès.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Récit de guerre : témoigner, dénoncer, transmettre la mémoire",
        "Devoir de mémoire : ne jamais oublier, surtout après la Shoah",
        "Effets du réel : dates, lieux, détails concrets, sobriété du style",
        "Œuvres clés : Barbusse (Le Feu), Vercors (Le Silence de la mer), Semprún, Anne Frank",
      ],
      voixOff:
        "Résumons. Les récits de guerre témoignent, dénoncent et transmettent la mémoire des conflits. Le devoir de mémoire impose de ne jamais oublier, en particulier après la Shoah. Les effets du réel, dates précises, lieux, détails concrets et style sobre, rendent ces récits bouleversants. Retiens les œuvres clés : Le Feu de Barbusse, Le Silence de la mer de Vercors, L'Écriture ou la vie de Semprún, et le Journal d'Anne Frank. Te voilà prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Les récits de guerre et d'engagement témoignent des grands conflits du XXe siècle et interrogent la capacité de la littérature à dire l'indicible. Ce chapitre s'inscrit dans le thème « Agir sur le monde » du programme de 3e et prépare aux questions de brevet sur les textes de témoignage.",
    sections: [
      {
        titre: "Pourquoi écrire sur la guerre",
        points: [
          "Témoigner : dire ce qui a été vécu pour que cela ne soit pas oublié",
          "Dénoncer : montrer l'horreur pour la combattre",
          "Transmettre : léguer une mémoire aux générations suivantes",
          "Devoir de mémoire : obligation morale née notamment après la Shoah",
        ],
      },
      {
        titre: "Les genres du témoignage",
        points: [
          "Roman de guerre : fiction inspirée du vécu (Barbusse, Le Feu, 1916)",
          "Mémoires : récit rétrospectif d'un témoin (Semprún, L'Écriture ou la vie)",
          "Journal intime : écrit au jour le jour, sans recul (Anne Frank)",
          "Nouvelle engagée : court récit à portée symbolique (Vercors, Le Silence de la mer)",
        ],
      },
      {
        titre: "Les procédés du témoignage",
        points: [
          "Effets du réel : dates, lieux, noms précis qui ancrent le récit dans l'Histoire",
          "Détails concrets et sensoriels pour faire voir, entendre, sentir",
          "Emploi du « je » ou du « nous » : implication du narrateur-témoin",
          "Sobriété du style, souvent plus bouleversante que l'emphase",
        ],
      },
      {
        titre: "Auteurs et œuvres clés",
        points: [
          "Henri Barbusse, Le Feu (1916) : les tranchées de la Première Guerre mondiale",
          "Vercors, Le Silence de la mer (1942) : résistance silencieuse sous l'Occupation",
          "Jorge Semprún, L'Écriture ou la vie (1994) : la déportation à Buchenwald",
          "Anne Frank, Journal (1942-1944) : clandestinité et persécution des Juifs",
        ],
      },
    ],
    audio:
      "Fiche de révision : récits de guerre et d'engagement. La littérature de guerre naît de l'expérience directe du conflit et remplit trois fonctions : témoigner, dénoncer, transmettre la mémoire. Le devoir de mémoire impose de ne jamais oublier les crimes de l'Histoire, en particulier la Shoah. Plusieurs genres permettent de raconter la guerre : le roman, comme Le Feu de Barbusse, les mémoires, comme L'Écriture ou la vie de Semprún, le journal intime, comme celui d'Anne Frank, et la nouvelle engagée, comme Le Silence de la mer de Vercors. Pour rendre ces récits crédibles, les auteurs utilisent des effets du réel : dates, lieux, détails concrets, et un style souvent sobre. Pendant l'Occupation, écrire devenait un acte de résistance, comme le montrent les Éditions de Minuit fondées clandestinement en 1941. Au brevet, identifie toujours le point de vue du narrateur et le message que le texte veut transmettre.",
  },
  memoCards: [
    { recto: "Trois fonctions des récits de guerre ?", verso: "Témoigner, dénoncer, transmettre la mémoire des conflits." },
    { recto: "Qu'est-ce que le devoir de mémoire ?", verso: "L'obligation morale de ne jamais oublier les crimes de l'Histoire, en particulier la Shoah." },
    { recto: "Qui a écrit Le Feu (1916) ?", verso: "Henri Barbusse, témoignage sur les tranchées de la Première Guerre mondiale." },
    { recto: "Qui a écrit Le Silence de la mer (1942) ?", verso: "Vercors, publié clandestinement aux Éditions de Minuit pendant l'Occupation." },
    { recto: "Qu'est-ce qu'un effet du réel ?", verso: "Un détail précis (date, lieu, nom) qui ancre le récit dans l'Histoire et le rend crédible." },
    { recto: "Que raconte Jorge Semprún dans L'Écriture ou la vie ?", verso: "Sa déportation au camp de Buchenwald et la difficulté d'écrire après l'horreur." },
    { recto: "Pourquoi le silence peut-il être une résistance ?", verso: "Refuser de parler à l'occupant, c'est refuser de céder ou de collaborer (Vercors)." },
    { recto: "Que sont les Éditions de Minuit ?", verso: "Une maison d'édition clandestine fondée en 1941 pour publier des textes interdits sous l'Occupation." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelles sont les trois fonctions principales des récits de guerre ?",
      choix: ["Amuser, distraire, divertir", "Témoigner, dénoncer, transmettre", "Décrire, informer, vendre", "Inventer, imaginer, rêver"],
      bonneReponse: 1,
      explication: "Les récits de guerre témoignent d'une expérience vécue, dénoncent l'horreur et transmettent la mémoire aux générations suivantes.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui a écrit Le Silence de la mer, publié clandestinement en 1942 ?",
      choix: ["Henri Barbusse", "Vercors", "Jorge Semprún", "Anne Frank"],
      bonneReponse: 1,
      explication: "Vercors publie cette nouvelle clandestinement aux Éditions de Minuit, sous l'Occupation.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que le devoir de mémoire ?",
      reponse: "C'est l'obligation morale de ne jamais oublier les crimes commis pendant les conflits, en particulier la Shoah, afin de rendre hommage aux victimes et d'éviter que de telles horreurs se reproduisent.",
      explication: "Cette notion s'est développée après la Seconde Guerre mondiale, avec le témoignage des survivants des camps.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le Journal d'Anne Frank raconte :",
      choix: ["une bataille napoléonienne", "la clandestinité d'une famille juive sous l'Occupation", "un voyage scolaire", "l'enfance d'une princesse"],
      bonneReponse: 1,
      explication: "Anne Frank écrit son journal entre 1942 et 1944, cachée avec sa famille avant d'être arrêtée et déportée.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un texte de témoignage, à quoi servent les « effets du réel » (dates, lieux précis) ?",
      choix: ["À rendre le texte plus poétique", "À ancrer le récit dans l'Histoire et à le rendre crédible", "À raccourcir le récit", "À masquer la vérité"],
      bonneReponse: 1,
      explication: "Les effets du réel donnent au texte une valeur de témoignage historique et renforcent sa crédibilité auprès du lecteur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre un roman de guerre et des mémoires de guerre.",
      reponse: "Le roman de guerre est une œuvre de fiction inspirée d'une expérience vécue, avec des personnages parfois inventés (Le Feu de Barbusse). Les mémoires sont un récit rétrospectif où l'auteur, témoin direct, raconte fidèlement ce qu'il a personnellement vécu (L'Écriture ou la vie de Semprún).",
      explication: "La fiction et le témoignage direct ne se confondent pas, même si les deux genres s'appuient sur une expérience réelle de la guerre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "En quoi écrire pouvait-il être un acte de résistance pendant l'Occupation ?",
      reponse: "Publier des textes clandestinement, comme le faisaient les Éditions de Minuit fondées en 1941, permettait de dénoncer l'occupant, de mobiliser les consciences et de redonner espoir, au péril de la vie de l'auteur et de l'éditeur.",
      explication: "L'écriture devient alors une arme quand la parole publique est censurée ou interdite.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi peut-on dire que le silence, dans Le Silence de la mer, est une forme de résistance ?",
      reponse: "La famille française refuse de parler à l'officier allemand logé chez elle : ce silence est un refus de céder, de fraterniser ou de collaborer avec l'occupant, même si la politesse imposerait de répondre.",
      explication: "Vercors montre que résister ne passe pas toujours par la violence : ici, le refus de parole est une forme de dignité et de résistance morale.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un extrait de témoignage multiplie les détails sensoriels (odeurs, bruits, froid) sur la vie dans les tranchées. Quel est l'effet principal recherché ?",
      choix: [
        "Amuser le lecteur",
        "Faire ressentir concrètement l'expérience vécue par le narrateur",
        "Raccourcir le texte",
        "Éviter de parler de la guerre",
      ],
      bonneReponse: 1,
      explication: "Les détails sensoriels rapprochent le lecteur de l'expérience du témoin et rendent l'horreur de la guerre plus tangible, plus difficile à ignorer.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Jorge Semprún écrit qu'après la déportation, il a longtemps hésité entre « l'écriture et la vie ». Que peut signifier ce titre ?",
      reponse: "Semprún suggère qu'écrire sur l'horreur vécue à Buchenwald menaçait de le ramener sans cesse dans le passé et l'empêchait de vivre pleinement le présent ; mais ne pas écrire, c'était risquer d'oublier ou de laisser l'horreur impunie. Le titre exprime ce dilemme entre le devoir de témoigner et le besoin de se reconstruire.",
      explication: "Ce titre illustre la difficulté, pour certains survivants, de trouver les mots pour dire l'indicible sans être détruits par le souvenir.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse cet extrait inventé : « Le 17 avril 1916, à l'aube, nous quittâmes la tranchée sous une pluie de fer. Je n'entendais plus rien, sinon les cris de mon camarade tombé à mes côtés. » Relève deux effets du réel et explique leur intérêt.",
      reponse: "La date précise (« le 17 avril 1916 ») ancre le récit dans l'Histoire réelle de la Première Guerre mondiale et renforce sa valeur de témoignage. Le détail sensoriel (« je n'entendais plus rien, sinon les cris ») fait ressentir au lecteur l'horreur et la confusion du combat, comme si on y était.",
      explication: "Ces deux procédés combinés créent l'illusion du vécu et donnent au texte sa force de témoignage.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Sujet d'entraînement type brevet : rédige le début (5 à 6 phrases) d'un extrait de journal fictif tenu par un enfant caché pendant la Seconde Guerre mondiale, en utilisant des détails concrets et une expression sincère des émotions.",
      reponse: "Exemple de corrigé : « Aujourd'hui, 3 mars 1943, nous n'avons pas ouvert les volets de la journée. Le grenier sent la poussière et le bois humide, et j'entends chaque bruit de pas dans la rue comme un coup de tonnerre. Maman m'a dit de ne plus parler à voix haute, même pour rire. J'ai peur, mais je n'ose pas le dire, alors j'écris. Ce carnet est le seul endroit où je peux encore être moi-même. »",
      explication: "On vérifie : date précise, détails sensoriels (odeur, bruits), expression sincère de la peur, forme du journal intime à la première personne.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le devoir de mémoire consiste à :",
      choix: ["oublier le passé", "ne jamais oublier les crimes de l'Histoire", "inventer des faits historiques", "refuser de lire des témoignages"],
      bonneReponse: 1,
      explication: "C'est une obligation morale de mémoire, née notamment après la Shoah.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite une œuvre de témoignage sur la Première Guerre mondiale et son auteur.",
      reponse: "Le Feu, d'Henri Barbusse (1916).",
      explication: "Barbusse, ancien combattant, y décrit la vie et l'horreur des tranchées.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un effet du réel dans un récit de guerre ?",
      reponse: "Un détail précis (date, lieu, nom) qui ancre le récit dans l'Histoire véritable et renforce la crédibilité du témoignage.",
      explication: "Ces détails donnent au lecteur le sentiment d'assister à des faits réellement vécus.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le Silence de la mer de Vercors a été publié :",
      choix: ["chez un grand éditeur parisien officiel", "clandestinement aux Éditions de Minuit", "après la guerre seulement", "en Angleterre en anglais"],
      bonneReponse: 1,
      explication: "Publier clandestinement était, sous l'Occupation, un acte de résistance à haut risque.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi Anne Frank est-elle un témoignage historique important ?",
      reponse: "Son journal, écrit au jour le jour entre 1942 et 1944, raconte de l'intérieur la clandestinité et la peur d'une famille juive persécutée, avant son arrestation et sa déportation. Il donne un visage humain et sensible à la Shoah.",
      explication: "C'est un document historique unique, écrit sans recul, par une adolescente qui ne connaissait pas l'issue tragique des événements.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Récits de guerre et d'engagement",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel texte témoigne des tranchées de la Première Guerre mondiale ?",
          choix: ["Le Silence de la mer", "Le Feu", "Le Journal d'Anne Frank", "L'Écriture ou la vie"],
          bonneReponse: 1,
          explication: "Le Feu, d'Henri Barbusse (1916), est un témoignage majeur sur la vie des soldats dans les tranchées.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne une raison pour laquelle un auteur choisit de témoigner sur la guerre.",
          reponse: "Pour que les faits vécus ne soient pas oubliés, pour dénoncer l'horreur, ou pour transmettre une mémoire aux générations futures (une réponse parmi celles-ci suffit).",
          explication: "Ces trois fonctions, témoigner, dénoncer, transmettre, sont au cœur de la littérature de guerre.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans un texte de témoignage, la présence d'une date précise a pour effet de :",
          choix: ["rendre le texte plus drôle", "ancrer le récit dans la réalité historique", "cacher la vérité", "rallonger inutilement le texte"],
          bonneReponse: 1,
          explication: "C'est un effet du réel : il renforce la crédibilité et la valeur documentaire du texte.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique en quoi les Éditions de Minuit illustrent le lien entre écriture et résistance.",
          reponse: "Fondées clandestinement en 1941 sous l'Occupation, elles publiaient des textes interdits par l'occupant, comme Le Silence de la mer de Vercors, au péril de la vie des auteurs et des imprimeurs. Écrire et publier devenaient alors des actes de résistance.",
          explication: "La censure de l'occupant rendait toute publication libre dangereuse et donc, potentiellement, un acte de courage engagé.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle différence fais-tu entre un journal intime et des mémoires écrits sur la guerre ?",
          reponse: "Le journal intime est écrit au jour le jour, sans recul, sans connaître la suite des événements (Anne Frank). Les mémoires sont écrits après coup, avec le recul du temps, ce qui permet à l'auteur de commenter et d'interpréter son expérience (Semprún).",
          explication: "La présence ou l'absence de recul change profondément le regard porté sur les événements racontés.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse cet extrait inventé : « Nous marchions depuis l'aube, le sac trop lourd, la faim au ventre. Un obus siffla, puis le silence, puis les cris. Aujourd'hui encore, ce silence me réveille la nuit. » Identifie le statut du narrateur et deux procédés qui rendent ce témoignage bouleversant.",
          reponse: "Le narrateur est un témoin direct et acteur des événements (emploi du « nous », puis du « je »). Deux procédés : les détails sensoriels concrets (« le sac trop lourd », « la faim au ventre », « un obus siffla ») qui font vivre la scène au lecteur, et le présent d'énonciation final (« aujourd'hui encore ») qui montre que le traumatisme reste vivant longtemps après la guerre.",
          explication: "Le passage du récit au passé au commentaire au présent est une marque forte du témoignage rétrospectif.",
        },
      ],
    },
    {
      titre: "Examen 2 — Récits de guerre et d'engagement",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le devoir de mémoire est particulièrement lié à la nécessité de ne jamais oublier :",
          choix: ["les modes vestimentaires anciennes", "la Shoah et les crimes de l'Histoire", "les records sportifs", "les inventions techniques"],
          bonneReponse: 1,
          explication: "Cette expression s'est imposée après la Seconde Guerre mondiale, face au risque d'oubli et de négationnisme.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qui est l'auteur du Silence de la mer et dans quel contexte ce texte a-t-il été publié ?",
          reponse: "Vercors, pendant l'Occupation, publié clandestinement en 1942 aux Éditions de Minuit.",
          explication: "Le contexte de publication clandestine fait partie intégrante de la valeur de résistance du texte.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que raconte L'Écriture ou la vie de Jorge Semprún ?",
          choix: ["Une histoire d'amour au XIXe siècle", "La déportation et le retour du camp de Buchenwald", "Un voyage en Amérique", "La vie quotidienne pendant la Belle Époque"],
          bonneReponse: 1,
          explication: "Semprún, résistant déporté, y raconte l'horreur des camps et la difficulté de reprendre une vie normale après.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux procédés utilisés par les auteurs pour créer des effets du réel dans un récit de guerre.",
          reponse: "La précision des dates, lieux et noms propres ; l'emploi de détails concrets et sensoriels (bruits, odeurs, sensations physiques) qui ancrent le récit dans une expérience vécue.",
          explication: "Ces procédés donnent au texte une force documentaire et renforcent son pouvoir d'émotion.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi peut-on dire que le Journal d'Anne Frank est à la fois un journal intime et un témoignage historique ?",
          reponse: "C'est un journal intime car Anne Frank y écrit au jour le jour ses pensées et sentiments personnels, sans recul. C'est aussi un témoignage historique car il documente, de l'intérieur, la persécution des Juifs et la vie dans la clandestinité sous l'Occupation nazie.",
          explication: "Ce double statut explique pourquoi ce texte est autant étudié en cours de français qu'en histoire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève affirme dans sa copie : « Les récits de guerre servent seulement à faire pleurer le lecteur. » Discute cette affirmation en t'appuyant sur les œuvres étudiées.",
          reponse: "Cette affirmation est réductrice. Certes, les récits de guerre suscitent l'émotion (compassion, horreur), mais leur portée dépasse le pathos : ils témoignent de faits réels pour la mémoire collective (Anne Frank), dénoncent l'absurdité et la violence de la guerre pour la combattre (Barbusse), et peuvent constituer un acte de résistance politique (Vercors). L'émotion est un moyen au service d'un message plus large, historique et moral, pas une fin en soi.",
          explication: "Une bonne réponse nuance l'affirmation en montrant que l'émotion sert un projet de témoignage et de dénonciation, sans s'y réduire.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Les récits de guerre remplissent trois fonctions : témoigner, dénoncer, transmettre la mémoire.",
    "Devoir de mémoire : obligation morale de ne jamais oublier les crimes de l'Histoire, en particulier la Shoah.",
    "Genres : roman de guerre (Barbusse), mémoires (Semprún), journal intime (Anne Frank), nouvelle engagée (Vercors).",
    "Effets du réel : dates, lieux, noms précis et détails sensoriels qui ancrent le récit dans l'Histoire.",
    "Sous l'Occupation, écrire et publier clandestinement (Éditions de Minuit, 1941) était un acte de résistance.",
    "Au brevet, identifie toujours le statut du narrateur (témoin ou non) et le but du texte : informer, émouvoir, dénoncer, rendre hommage.",
  ],
},
{
  slug: "subjonctif-concordance",
  titre: "Le subjonctif et la concordance des temps",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Maîtriser le mode subjonctif (présent et passé), savoir quand l'employer, et comprendre la concordance des temps entre proposition principale et proposition subordonnée, à l'oral comme à l'écrit du brevet.",
  objectifs: [
    "Conjuguer le subjonctif présent et le subjonctif passé",
    "Reconnaître les emplois du subjonctif (souhait, doute, obligation, sentiment)",
    "Distinguer indicatif et subjonctif dans une subordonnée",
    "Appliquer les règles de la concordance des temps",
    "Réussir les exercices de conjugaison et de réécriture du brevet",
  ],
  slides: [
    {
      titre: "Qu'est-ce que le subjonctif ?",
      illustration: "🎭",
      visuel: "Il faut que je... / Je veux que tu...",
      contenu: [
        "Mode verbal qui exprime le doute, le souhait, la volonté, le sentiment",
        "S'emploie presque toujours dans une proposition subordonnée",
        "Introduit par « que » : il faut que, je veux que, je doute que",
        "S'oppose à l'indicatif, mode du réel et du certain",
      ],
      voixOff:
        "Le subjonctif est un mode verbal qui exprime le doute, le souhait, la volonté ou un sentiment, et non un fait certain. Il s'emploie presque toujours dans une proposition subordonnée introduite par que : il faut que, je veux que, je doute que. Il s'oppose ainsi à l'indicatif, le mode du réel, du certain et des faits objectifs.",
    },
    {
      titre: "Le subjonctif présent : formation",
      illustration: "📐",
      visuel: "je parl-e, tu parl-es, il parl-e...",
      contenu: [
        "Radical de la 3e personne du pluriel de l'indicatif présent (ils parlent → parl-)",
        "Terminaisons : -e, -es, -e, -ions, -iez, -ent",
        "Nous et vous : mêmes formes qu'à l'imparfait de l'indicatif",
        "Verbes irréguliers à connaître : être, avoir, aller, faire, pouvoir, savoir, vouloir",
      ],
      voixOff:
        "Pour former le subjonctif présent d'un verbe régulier, on part du radical de la troisième personne du pluriel de l'indicatif présent : ils parlent donne parl. On ajoute les terminaisons -e, -es, -e, -ions, -iez, -ent : que je parle, que tu parles, qu'il parle. Attention, aux personnes nous et vous, les formes ressemblent à celles de l'imparfait de l'indicatif. Certains verbes sont irréguliers et doivent être appris par cœur : être, avoir, aller, faire, pouvoir, savoir, vouloir.",
    },
    {
      titre: "Verbes irréguliers courants",
      illustration: "⭐",
      visuel: "que je sois • que j'aie • que je fasse",
      contenu: [
        "Être : que je sois, que tu sois, qu'il soit, que nous soyons, qu'ils soient",
        "Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, qu'ils aient",
        "Faire : que je fasse, que nous fassions",
        "Aller : que j'aille, que nous allions ; Pouvoir : que je puisse ; Savoir : que je sache",
      ],
      voixOff:
        "Voici les verbes irréguliers les plus importants à connaître par cœur. Être : que je sois, que tu sois, qu'il soit, que nous soyons, qu'ils soient. Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, qu'ils aient. Faire donne que je fasse, que nous fassions. Aller donne que j'aille, que nous allions. Pouvoir donne que je puisse, et savoir donne que je sache. Ces verbes reviennent très souvent, il faut les maîtriser parfaitement.",
    },
    {
      titre: "Quand emploie-t-on le subjonctif ?",
      illustration: "💭",
      visuel: "Volonté • Doute • Sentiment • Obligation",
      contenu: [
        "Après un verbe de volonté ou de souhait : je veux que, je souhaite que",
        "Après un verbe de doute ou d'incertitude : je doute que, il est possible que",
        "Après un verbe de sentiment : je crains que, je suis content que",
        "Après une expression d'obligation ou de nécessité : il faut que, il est nécessaire que",
      ],
      voixOff:
        "Le subjonctif s'emploie dans des contextes précis. Après un verbe de volonté ou de souhait : je veux que tu viennes, je souhaite qu'il réussisse. Après un verbe de doute ou d'incertitude : je doute qu'il vienne, il est possible qu'il pleuve. Après un verbe de sentiment : je crains qu'il ne soit en retard, je suis content que tu sois là. Et après une expression d'obligation : il faut que tu partes, il est nécessaire que nous agissions.",
    },
    {
      titre: "Subjonctif ou indicatif ?",
      illustration: "⚖️",
      visuel: "Je pense qu'il vient (indicatif) / Je doute qu'il vienne (subjonctif)",
      contenu: [
        "Verbes d'opinion à la forme affirmative : indicatif (je pense que, je crois que)",
        "Mêmes verbes à la forme négative ou interrogative : souvent subjonctif",
        "Verbes de certitude : indicatif (il est certain que, il est évident que)",
        "Verbes de possibilité ou de doute : subjonctif (il est possible que, il semble que)",
      ],
      voixOff:
        "Comment choisir entre indicatif et subjonctif ? Les verbes d'opinion à la forme affirmative, comme je pense que ou je crois que, sont suivis de l'indicatif car ils expriment une certitude. Mais à la forme négative ou interrogative, je ne pense pas que, crois-tu que, on emploie souvent le subjonctif car le doute apparaît. Les expressions de certitude, il est certain que, il est évident que, gardent l'indicatif. Les expressions de possibilité ou de doute, il est possible que, il semble que, demandent le subjonctif.",
    },
    {
      titre: "Le subjonctif passé",
      illustration: "⏮️",
      visuel: "que j'aie parlé / que je sois parti",
      contenu: [
        "Auxiliaire être ou avoir au subjonctif présent + participe passé",
        "Exprime une action antérieure à celle de la principale",
        "Ex. : Je suis content qu'il ait réussi son examen (avant le moment présent)",
        "Accord du participe passé : mêmes règles qu'au passé composé",
      ],
      voixOff:
        "Le subjonctif passé se forme avec l'auxiliaire être ou avoir au subjonctif présent, suivi du participe passé du verbe. Il exprime une action antérieure à celle exprimée dans la proposition principale. Par exemple : je suis content qu'il ait réussi son examen ; la réussite a eu lieu avant le moment où je m'exprime. L'accord du participe passé suit les mêmes règles qu'au passé composé.",
    },
    {
      titre: "La concordance des temps",
      illustration: "🔗",
      visuel: "Principale → Subordonnée",
      contenu: [
        "Le temps de la subordonnée dépend du temps de la principale",
        "Principale au présent/futur → subordonnée au présent ou au passé selon le sens",
        "Principale au passé → l'imparfait remplace souvent le présent dans la subordonnée",
        "À l'oral et en 3e, le subjonctif imparfait est remplacé par le subjonctif présent",
      ],
      voixOff:
        "La concordance des temps règle le rapport entre le temps de la proposition principale et celui de la subordonnée. Si la principale est au présent ou au futur, la subordonnée peut être au présent, si l'action est simultanée, ou au passé, si elle est antérieure. Si la principale est au passé, comme dans il fallait que, l'imparfait remplace souvent le présent dans la subordonnée : il fallait qu'il parte. Aujourd'hui, à l'oral comme à l'écrit courant, le subjonctif imparfait littéraire est remplacé par le subjonctif présent, qui reste correct.",
    },
    {
      titre: "Les pièges classiques",
      illustration: "⚠️",
      visuel: "après que + indicatif / avant que + subjonctif",
      contenu: [
        "« Après que » se construit avec l'indicatif (fait réalisé) : après qu'il est parti",
        "« Avant que » se construit avec le subjonctif : avant qu'il ne parte",
        "Ne pas confondre le subjonctif avec l'indicatif à l'oral (finales muettes)",
        "« Bien que », « quoique », « pour que », « afin que » : toujours suivis du subjonctif",
      ],
      voixOff:
        "Attention à quelques pièges classiques. Après que se construit avec l'indicatif, car il introduit un fait réalisé : après qu'il est parti. Avant que, au contraire, se construit avec le subjonctif : avant qu'il ne parte. À l'oral, il ne faut pas confondre les terminaisons du subjonctif et de l'indicatif, souvent muettes et donc proches à l'oreille. Enfin, certaines conjonctions sont toujours suivies du subjonctif : bien que, quoique, pour que, afin que.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Subjonctif : mode du doute, du souhait, du sentiment, de l'obligation",
        "Formation : radical de « ils » à l'indicatif présent + terminaisons -e, -es, -e, -ions, -iez, -ent",
        "Verbes irréguliers à apprendre : être, avoir, aller, faire, pouvoir, savoir, vouloir",
        "Concordance des temps : le temps de la subordonnée dépend de celui de la principale",
      ],
      voixOff:
        "Résumons. Le subjonctif est le mode du doute, du souhait, du sentiment et de l'obligation. Il se forme, pour les verbes réguliers, à partir du radical de la troisième personne du pluriel de l'indicatif présent, avec les terminaisons -e, -es, -e, -ions, -iez, -ent. Apprends par cœur les verbes irréguliers : être, avoir, aller, faire, pouvoir, savoir, vouloir. Enfin, retiens la règle de la concordance des temps : le temps de la subordonnée dépend toujours du temps de la principale. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Le subjonctif est un mode verbal essentiel pour exprimer le doute, le souhait, le sentiment ou l'obligation. La concordance des temps règle le rapport entre le temps de la principale et celui de la subordonnée. Ce chapitre de grammaire est indispensable pour les exercices de conjugaison et de réécriture du brevet.",
    sections: [
      {
        titre: "Formation du subjonctif présent",
        points: [
          "Radical de la 3e personne du pluriel de l'indicatif présent (ils parlent → parl-)",
          "Terminaisons : -e, -es, -e, -ions, -iez, -ent",
          "Verbes irréguliers à connaître : être, avoir, aller, faire, pouvoir, savoir, vouloir",
          "Ex. : que je finisse, que nous finissions (finir) ; que je sois, que nous soyons (être)",
        ],
      },
      {
        titre: "Emplois du subjonctif",
        points: [
          "Après un verbe de volonté ou de souhait : je veux que, je souhaite que",
          "Après un verbe de doute : je doute que, il est possible que",
          "Après un verbe de sentiment : je crains que, je suis content que",
          "Après une expression d'obligation : il faut que, il est nécessaire que",
          "Après certaines conjonctions : bien que, quoique, pour que, afin que, avant que",
        ],
      },
      {
        titre: "Subjonctif passé",
        points: [
          "Auxiliaire être/avoir au subjonctif présent + participe passé",
          "Exprime une action antérieure à celle de la principale",
          "Ex. : je suis content qu'il ait réussi",
        ],
      },
      {
        titre: "La concordance des temps",
        points: [
          "Le temps de la subordonnée dépend du temps de la principale",
          "Principale au passé → l'imparfait remplace le présent dans la subordonnée à l'indicatif",
          "En usage courant, le subjonctif imparfait est remplacé par le subjonctif présent",
          "« Après que » + indicatif ; « avant que » + subjonctif",
        ],
      },
    ],
    audio:
      "Fiche de révision : le subjonctif et la concordance des temps. Le subjonctif est un mode verbal qui exprime le doute, le souhait, la volonté ou un sentiment, et s'emploie presque toujours après que. Pour le former au présent, on part du radical de la troisième personne du pluriel de l'indicatif présent, et on ajoute les terminaisons -e, -es, -e, -ions, -iez, -ent. Apprends par cœur les verbes irréguliers : être, avoir, aller, faire, pouvoir, savoir, vouloir. On emploie le subjonctif après un verbe de volonté, de doute, de sentiment, ou après une expression d'obligation comme il faut que. Le subjonctif passé se forme avec l'auxiliaire être ou avoir au subjonctif présent suivi du participe passé, et exprime une action antérieure. La concordance des temps règle le rapport entre le temps de la principale et celui de la subordonnée : au passé, l'imparfait de l'indicatif remplace souvent le présent. Attention : après que se construit avec l'indicatif, avant que avec le subjonctif.",
  },
  memoCards: [
    { recto: "Comment former le subjonctif présent d'un verbe régulier ?", verso: "Radical de « ils » à l'indicatif présent (ils parlent → parl-) + terminaisons -e, -es, -e, -ions, -iez, -ent." },
    { recto: "Conjugaison du subjonctif présent d'ÊTRE ?", verso: "Que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient." },
    { recto: "Conjugaison du subjonctif présent d'AVOIR ?", verso: "Que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient." },
    { recto: "Quand emploie-t-on le subjonctif ?", verso: "Après un verbe de volonté, de doute, de sentiment, ou une expression d'obligation (il faut que...)." },
    { recto: "Comment se forme le subjonctif passé ?", verso: "Auxiliaire être/avoir au subjonctif présent + participe passé. Il exprime une action antérieure." },
    { recto: "« Après que » se construit avec quel mode ?", verso: "L'indicatif, car il introduit un fait réalisé (après qu'il est parti)." },
    { recto: "« Avant que » se construit avec quel mode ?", verso: "Le subjonctif (avant qu'il ne parte)." },
    { recto: "Règle de la concordance des temps ?", verso: "Le temps de la subordonnée dépend du temps de la principale ; au passé, l'imparfait remplace souvent le présent." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte du verbe « finir » au subjonctif présent, 3e personne du singulier ?",
      choix: ["qu'il finit", "qu'il finisse", "qu'il finira", "qu'il finissait"],
      bonneReponse: 1,
      explication: "Le radical « finiss- » (issu de « ils finissent ») + la terminaison « -e » donne « qu'il finisse ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Complète : « Il faut que tu ... à l'heure. »",
      choix: ["viens", "viendras", "viennes", "venais"],
      bonneReponse: 2,
      explication: "« Il faut que » exprime une obligation et impose le subjonctif présent : que tu viennes.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Conjugue le verbe « avoir » au subjonctif présent, à toutes les personnes.",
      reponse: "Que j'aie, que tu aies, qu'il/elle ait, que nous ayons, que vous ayez, qu'ils/elles aient.",
      explication: "Avoir est un verbe irrégulier au subjonctif présent, à apprendre par cœur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle phrase emploie correctement le subjonctif ?",
      choix: ["Je pense qu'il vienne demain.", "Je doute qu'il vienne demain.", "Je suis sûr qu'il vienne demain.", "Il est certain qu'il vienne demain."],
      bonneReponse: 1,
      explication: "« Je doute que » exprime l'incertitude et appelle le subjonctif ; les autres verbes expriment une certitude et demandent l'indicatif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans la phrase « Je ne pense pas qu'il ... raison », quelle forme convient ?",
      choix: ["a", "aura", "ait", "avait"],
      bonneReponse: 2,
      explication: "« Ne pas penser que », à la forme négative, introduit un doute et se construit avec le subjonctif : qu'il ait raison.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi on écrit « je crois qu'il viendra » à l'indicatif, mais « je doute qu'il vienne » au subjonctif.",
      reponse: "« Je crois que » exprime une certitude, une opinion affirmée avec confiance : on utilise donc l'indicatif, le mode du réel. « Je doute que » exprime au contraire une incertitude, un fait non confirmé : on utilise donc le subjonctif, le mode du possible et de l'incertain.",
      explication: "Le choix du mode dépend du degré de certitude exprimé par le verbe de la principale.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Mets au subjonctif passé : « Je suis heureux qu'il (réussir) son brevet. »",
      reponse: "Je suis heureux qu'il ait réussi son brevet.",
      explication: "Le subjonctif passé (auxiliaire avoir au subjonctif présent + participe passé) exprime une action antérieure à celle de la principale : la réussite a déjà eu lieu.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réécris cette phrase en respectant la concordance des temps : « Il fallait qu'elle (partir) avant la nuit. »",
      reponse: "Il fallait qu'elle parte avant la nuit.",
      explication: "La principale est au passé (« il fallait »), mais en usage courant, on emploie le subjonctif présent dans la subordonnée plutôt que le subjonctif imparfait littéraire (« qu'elle partît »).",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est correctement construite ?",
      choix: [
        "Après qu'il soit parti, elle a pleuré.",
        "Après qu'il est parti, elle a pleuré.",
        "Avant qu'il est parti, elle a pleuré.",
        "Avant qu'il part, elle a pleuré.",
      ],
      bonneReponse: 1,
      explication: "« Après que » se construit avec l'indicatif, car il introduit un fait réalisé et daté : « après qu'il est parti ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Corrige l'erreur dans cette phrase et explique-la : « Bien qu'il pleut, nous sommes sortis. »",
      reponse: "Il faut écrire : « Bien qu'il pleuve, nous sommes sortis. » La conjonction « bien que » exprime une concession et impose toujours le subjonctif, jamais l'indicatif.",
      explication: "« Bien que » et « quoique » sont des conjonctions systématiquement suivies du subjonctif, quel que soit le sens de la phrase.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence de sens entre ces deux phrases : « Je cherche un livre qui explique bien la grammaire » et « Je cherche un livre qui explique bien la grammaire » (l'une à l'indicatif, l'autre au subjonctif selon le verbe).",
      reponse: "Si le livre existe et est identifié avec certitude, on emploie l'indicatif : « Je cherche le livre qui explique bien la grammaire » (celui que je connais). Si le livre est hypothétique, incertain, on emploie le subjonctif : « Je cherche un livre qui explique bien la grammaire » peut suggérer qu'on ne sait pas s'il existe, d'où l'usage du subjonctif dans certains contextes de recherche incertaine.",
      explication: "Ce cas montre que le choix du mode dépend parfois du degré de certitude sur l'existence de ce qu'on décrit, pas seulement du verbe introducteur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige trois phrases employant chacune un emploi différent du subjonctif : volonté, doute, obligation.",
      reponse: "Volonté : « Je veux que tu réussisses ton examen. » Doute : « Je doute qu'il ait raison sur ce point. » Obligation : « Il faut que nous partions avant la nuit. »",
      explication: "On vérifie la bonne conjugaison du subjonctif présent ou passé et l'emploi correct de « que » dans chaque subordonnée.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le subjonctif est le mode :",
      choix: ["du fait certain", "du doute, du souhait, du sentiment", "du futur uniquement", "du récit historique"],
      bonneReponse: 1,
      explication: "Contrairement à l'indicatif, le subjonctif n'affirme pas un fait comme certain.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne la formation du subjonctif présent pour un verbe régulier.",
      reponse: "Radical de la 3e personne du pluriel de l'indicatif présent + terminaisons -e, -es, -e, -ions, -iez, -ent.",
      explication: "Exemple : ils chantent → que je chante, que nous chantions.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quand utilise-t-on « après que » et avec quel mode ?",
      reponse: "« Après que » introduit un fait réalisé, daté dans le temps ; il se construit avec l'indicatif.",
      explication: "C'est un piège fréquent : on confond souvent avec « avant que », qui prend le subjonctif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : « Bien qu'il ... fatigué, il a terminé le marathon. »",
      choix: ["est", "était", "soit", "sera"],
      bonneReponse: 2,
      explication: "« Bien que » impose toujours le subjonctif : bien qu'il soit fatigué.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique le principe de la concordance des temps entre la principale et la subordonnée.",
      reponse: "Le temps employé dans la subordonnée dépend du temps de la proposition principale : si la principale est au passé, la subordonnée s'accorde généralement au passé (souvent à l'imparfait pour l'indicatif) ; en usage courant, le subjonctif présent remplace le subjonctif imparfait littéraire.",
      explication: "Cette règle assure la cohérence temporelle de la phrase complexe.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le subjonctif et la concordance des temps",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle forme est correcte au subjonctif présent, verbe « aller », 1re personne du singulier ?",
          choix: ["que j'aille", "que je vais", "que j'irai", "que j'allais"],
          bonneReponse: 0,
          explication: "Aller est irrégulier au subjonctif présent : que j'aille, que nous allions.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Pourquoi emploie-t-on le subjonctif après « il faut que » ?",
          reponse: "Parce que « il faut que » exprime une obligation ou une nécessité, et non un fait certain constaté ; le subjonctif est le mode qui convient pour exprimer ce qui doit être, et non ce qui est.",
          explication: "L'obligation appartient au domaine du souhaité ou du nécessaire, pas du réel constaté.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase est correctement conjuguée ?",
          choix: [
            "Je suis content que tu es venu.",
            "Je suis content que tu sois venu.",
            "Je suis content que tu viens.",
            "Je suis content que tu viendras.",
          ],
          bonneReponse: 1,
          explication: "« Je suis content que » exprime un sentiment et impose le subjonctif ; ici, l'action est antérieure, donc subjonctif passé : que tu sois venu.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue le verbe « pouvoir » au subjonctif présent à la 1re et à la 3e personne du singulier, et à la 1re personne du pluriel.",
          reponse: "Que je puisse, qu'il puisse, que nous puissions.",
          explication: "Pouvoir est un verbe irrégulier dont le radical change entièrement au subjonctif (puiss-).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réécris cette phrase en respectant la concordance des temps : « Elle voulait que nous (finir) le travail avant midi. »",
          reponse: "Elle voulait que nous finissions le travail avant midi.",
          explication: "La principale au passé (« voulait ») entraîne l'usage du subjonctif présent dans la subordonnée, en usage courant.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse cette phrase et justifie l'emploi de chaque mode : « Bien qu'il soit tard, je pense que nous pouvons encore finir, à condition que tu m'aides. »",
          reponse: "« Bien qu'il soit tard » : subjonctif imposé par la conjonction de concession « bien que ». « Je pense que nous pouvons » : indicatif, car « penser que » à la forme affirmative exprime une certitude. « À condition que tu m'aides » : subjonctif imposé par la locution conjonctive « à condition que », qui exprime une condition, non un fait certain.",
          explication: "Cette phrase combine plusieurs règles : conjonctions imposant systématiquement le subjonctif, et verbes d'opinion dont le mode dépend de la certitude exprimée.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le subjonctif et la concordance des temps",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la terminaison de la 1re personne du pluriel au subjonctif présent ?",
          choix: ["-ons", "-ions", "-ent", "-ez"],
          bonneReponse: 1,
          explication: "Les terminaisons du subjonctif présent sont -e, -es, -e, -ions, -iez, -ent.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Conjugue le verbe « faire » au subjonctif présent, à la 1re personne du singulier et à la 1re personne du pluriel.",
          reponse: "Que je fasse, que nous fassions.",
          explication: "Faire est irrégulier au subjonctif : le radical devient « fass- ».",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase emploie correctement l'indicatif ?",
          choix: [
            "Il est certain qu'il vienne demain.",
            "Il est certain qu'il viendra demain.",
            "Je doute qu'il viendra demain.",
            "Je souhaite qu'il viendra demain.",
          ],
          bonneReponse: 1,
          explication: "« Il est certain que » exprime une certitude et impose l'indicatif : qu'il viendra.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la formation et l'emploi du subjonctif passé, avec un exemple.",
          reponse: "Le subjonctif passé se forme avec l'auxiliaire être ou avoir au subjonctif présent, suivi du participe passé. Il exprime une action antérieure à celle de la principale. Exemple : « Je regrette qu'il soit parti sans nous prévenir » (le départ a eu lieu avant le moment du regret).",
          explication: "L'accord du participe passé suit les règles habituelles selon l'auxiliaire employé.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Corrige et explique l'erreur : « Il faut que tu prends tes affaires avant de partir. »",
          reponse: "Il faut écrire : « Il faut que tu prennes tes affaires avant de partir. » « Il faut que » exprime une obligation et impose le subjonctif, ici « prennes » et non l'indicatif « prends ».",
          explication: "C'est une erreur fréquente à l'oral, où les terminaisons du subjonctif et de l'indicatif se ressemblent pour certains verbes.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève écrit dans sa copie de brevet : « Je ne crois pas qu'il a raison, bien qu'il semble sûr de lui. » Corrige les erreurs de mode et explique chaque correction.",
          reponse: "Il faut écrire : « Je ne crois pas qu'il ait raison, bien qu'il semble sûr de lui. » Première correction : « je ne crois pas que », forme négative d'un verbe d'opinion, introduit un doute et appelle le subjonctif (« ait » et non « a »). La seconde partie, « bien qu'il semble », est déjà correcte au subjonctif, imposé par la conjonction de concession « bien que ».",
          explication: "Cet exercice combine deux règles essentielles : verbe d'opinion à la forme négative, et conjonction de concession, toutes deux exigeant le subjonctif.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le subjonctif exprime le doute, le souhait, la volonté, le sentiment ou l'obligation, presque toujours après « que ».",
    "Formation régulière : radical de « ils » à l'indicatif présent + terminaisons -e, -es, -e, -ions, -iez, -ent.",
    "Verbes irréguliers indispensables : être, avoir, aller, faire, pouvoir, savoir, vouloir.",
    "Subjonctif passé : auxiliaire être/avoir au subjonctif présent + participe passé, pour une action antérieure.",
    "« Après que » + indicatif (fait réalisé) ; « avant que », « bien que », « quoique », « pour que » + subjonctif.",
    "Concordance des temps : le temps de la subordonnée dépend du temps de la principale ; en usage courant, le subjonctif présent remplace le subjonctif imparfait littéraire.",
  ],
},
{
  slug: "theatre-tragique",
  titre: "Le théâtre : dénoncer les travers de la société",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Découvrir comment le théâtre, tragédie et comédie, met en scène des conflits et des personnages pour faire réfléchir le spectateur sur les travers de la société : pouvoir, injustice, hypocrisie, guerre. Vocabulaire du théâtre et méthode d'analyse pour le brevet.",
  objectifs: [
    "Connaître le vocabulaire du théâtre (acte, scène, didascalie, aparté, quiproquo)",
    "Distinguer tragédie et comédie, et leurs fonctions critiques respectives",
    "Comprendre la double énonciation propre au texte théâtral",
    "Analyser comment le théâtre dénonce les travers de la société",
    "Connaître les auteurs et pièces majeurs (Molière, Racine, Hugo, Beaumarchais)",
  ],
  slides: [
    {
      titre: "Le théâtre, un genre pour dénoncer",
      illustration: "🎭",
      visuel: "Sur scène, la société se regarde",
      contenu: [
        "Le théâtre met en scène des personnages et des conflits devant un public",
        "Il permet de dénoncer les travers de la société de façon détournée",
        "Le rire (comédie) ou l'émotion tragique servent tous deux la critique",
        "Le spectateur est invité à réfléchir sur son époque à travers la fiction",
      ],
      voixOff:
        "Le théâtre met en scène des personnages et des conflits devant un public réuni dans un même lieu, au même moment. Depuis l'Antiquité, il est un formidable outil pour dénoncer les travers de la société de façon détournée, à travers la fiction. Que ce soit par le rire de la comédie ou par l'émotion de la tragédie, le théâtre invite le spectateur à réfléchir sur son époque, sur le pouvoir, la justice, l'hypocrisie ou la guerre.",
    },
    {
      titre: "Vocabulaire du théâtre",
      illustration: "📖",
      visuel: "Acte • Scène • Réplique • Didascalie",
      contenu: [
        "Acte : grande partie de la pièce ; scène : sous-partie, change avec les personnages",
        "Réplique : ce que dit un personnage à son tour de parole",
        "Didascalie : indication scénique donnée par l'auteur (en italique)",
        "Tirade : longue réplique ; monologue : personnage seul en scène",
      ],
      voixOff:
        "Le théâtre a son propre vocabulaire technique. L'acte est une grande partie de la pièce ; la scène en est une sous-partie, qui change généralement quand un personnage entre ou sort. La réplique est ce que dit un personnage à son tour de parole. La didascalie est une indication scénique donnée par l'auteur, souvent écrite en italique, qui précise un geste, un décor ou un ton. La tirade est une longue réplique, et le monologue est le moment où un personnage seul en scène s'exprime à voix haute.",
    },
    {
      titre: "Aparté, quiproquo, double énonciation",
      illustration: "🗣️",
      visuel: "Le public sait ce que les personnages ignorent",
      contenu: [
        "Aparté : un personnage parle « à part », entendu du public mais pas des autres",
        "Quiproquo : malentendu comique ou tragique entre les personnages",
        "Double énonciation : le personnage parle à un autre ET l'auteur parle au public",
        "Le spectateur en sait souvent plus que les personnages : effet d'ironie dramatique",
      ],
      voixOff:
        "Trois notions essentielles pour analyser le théâtre. L'aparté est le moment où un personnage parle à part, entendu par le seul public, mais pas par les autres personnages sur scène. Le quiproquo est un malentendu entre les personnages, qui peut être comique ou tragique. La double énonciation caractérise tout texte théâtral : un personnage s'adresse à un autre personnage, mais en même temps, l'auteur s'adresse au public à travers cette réplique. Souvent, le spectateur en sait plus que les personnages, ce qui crée un effet d'ironie dramatique.",
    },
    {
      titre: "La tragédie : la fatalité en scène",
      illustration: "⚔️",
      visuel: "Racine, Phèdre (1677)",
      contenu: [
        "Personnages nobles, héros pris dans un destin qui les dépasse (fatalité)",
        "Registre soutenu, dénouement souvent la mort du héros",
        "But : susciter la crainte et la pitié (catharsis, purger les passions)",
        "Ex. : Racine, Phèdre (1677) ; Corneille, Le Cid (1637)",
      ],
      voixOff:
        "La tragédie met en scène des personnages nobles, souvent des héros, pris dans un destin qui les dépasse : c'est la fatalité. Le registre est soutenu, et le dénouement est souvent la mort du héros. Selon Aristote, le but de la tragédie est de susciter la crainte et la pitié chez le spectateur, pour purger ses propres passions : c'est ce qu'on appelle la catharsis. Phèdre, de Racine, en 1677, ou Le Cid, de Corneille, en 1637, sont des exemples majeurs du genre.",
    },
    {
      titre: "La comédie : dénoncer par le rire",
      illustration: "😄",
      visuel: "Molière, Le Malade imaginaire (1673)",
      contenu: [
        "Personnages issus de tous les milieux, situations quotidiennes ou exagérées",
        "But : faire rire tout en dénonçant un travers (avarice, hypocrisie, snobisme)",
        "« Castigat ridendo mores » : corriger les mœurs par le rire",
        "Ex. : Molière, L'Avare (1668), Le Malade imaginaire (1673), Tartuffe (1664)",
      ],
      voixOff:
        "La comédie met en scène des personnages de tous les milieux, dans des situations quotidiennes ou volontairement exagérées. Son but est de faire rire, tout en dénonçant un défaut humain ou social : l'avarice, l'hypocrisie, le snobisme. La devise latine castigat ridendo mores, corriger les mœurs par le rire, résume bien ce projet. Molière en est le maître incontesté, avec L'Avare, Le Malade imaginaire ou Tartuffe, qui dénonce l'hypocrisie religieuse.",
    },
    {
      titre: "Théâtre et engagement",
      illustration: "✊",
      visuel: "Beaumarchais, Le Mariage de Figaro (1784)",
      contenu: [
        "Le théâtre peut dénoncer directement les injustices sociales et politiques",
        "Beaumarchais, Le Mariage de Figaro : critique des privilèges de la noblesse",
        "Victor Hugo, Ruy Blas : dénonce la corruption de la cour",
        "Le drame romantique mélange tragique et comique pour peindre la vie réelle",
      ],
      voixOff:
        "Le théâtre peut aussi dénoncer directement les injustices sociales et politiques de son époque. Dans Le Mariage de Figaro, en 1784, Beaumarchais fait critiquer par son valet Figaro les privilèges de la noblesse, quelques années avant la Révolution française. Victor Hugo, avec Ruy Blas, dénonce la corruption de la cour espagnole. Le drame romantique, inventé par Hugo, mélange le tragique et le comique pour mieux représenter la complexité de la vie réelle.",
    },
    {
      titre: "Analyser une scène de théâtre",
      illustration: "🔍",
      visuel: "Qui parle ? À qui ? Pourquoi ?",
      contenu: [
        "Identifier les personnages en présence et leurs rapports de force",
        "Observer les didascalies : que nous apprennent-elles ?",
        "Repérer le comique ou le tragique de la scène et ses procédés",
        "Dégager la portée critique : quel travers de la société est visé ?",
      ],
      voixOff:
        "Pour analyser une scène de théâtre, identifie d'abord les personnages en présence et leurs rapports de force. Observe attentivement les didascalies : que nous apprennent-elles sur le décor, les gestes, les tons de voix ? Repère ensuite si la scène est comique ou tragique, et par quels procédés cet effet est créé. Enfin, dégage la portée critique de la scène : quel travers de la société l'auteur cherche-t-il à dénoncer à travers cette fiction ?",
    },
    {
      titre: "Le théâtre au brevet",
      illustration: "🎓",
      visuel: "Questions + rédaction dialoguée",
      contenu: [
        "Un extrait de pièce peut tomber à l'épreuve de français",
        "Questions : vocabulaire théâtral, comique/tragique, portée critique",
        "Rédaction possible : écrire une scène de dialogue avec didascalies",
        "Attendus : mise en page correcte, ponctuation du dialogue, indications scéniques",
      ],
      voixOff:
        "Au brevet, un extrait de pièce de théâtre peut être proposé à l'épreuve de français. Les questions portent souvent sur le vocabulaire théâtral, le caractère comique ou tragique de la scène, et sa portée critique. Le sujet de rédaction peut te demander d'écrire toi-même une scène de dialogue, avec des didascalies. Pour réussir, respecte la mise en page du texte théâtral, la ponctuation du dialogue, et n'oublie pas les indications scéniques entre parenthèses ou en italique.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Théâtre : genre qui met en scène des conflits pour dénoncer, devant un public",
        "Tragédie : fatalité, personnages nobles, catharsis (Racine, Corneille)",
        "Comédie : corriger les mœurs par le rire (Molière)",
        "Double énonciation : le personnage parle à un autre, l'auteur parle au public",
      ],
      voixOff:
        "Résumons. Le théâtre est un genre qui met en scène des conflits devant un public, pour dénoncer les travers de la société. La tragédie repose sur la fatalité, des personnages nobles, et vise la catharsis, comme chez Racine ou Corneille. La comédie corrige les mœurs par le rire, comme chez Molière. Retiens la double énonciation, propre au théâtre : le personnage parle à un autre personnage, mais l'auteur, à travers lui, parle aussi directement au public. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Le théâtre met en scène des conflits et des personnages devant un public, pour faire réfléchir sur les travers de la société : pouvoir, injustice, hypocrisie. Ce chapitre s'inscrit dans le thème « Agir sur le monde » du programme de 3e et prépare aux questions de brevet sur un extrait de pièce.",
    sections: [
      {
        titre: "Vocabulaire du théâtre",
        points: [
          "Acte (grande partie) et scène (sous-partie, change avec les personnages)",
          "Réplique, tirade (longue réplique), monologue (personnage seul en scène)",
          "Didascalie : indication scénique donnée par l'auteur (souvent en italique)",
          "Aparté (parole entendue du seul public) et quiproquo (malentendu)",
        ],
      },
      {
        titre: "Tragédie et comédie",
        points: [
          "Tragédie : personnages nobles, fatalité, registre soutenu, mort du héros, catharsis",
          "Comédie : personnages variés, situations quotidiennes ou exagérées, rire",
          "« Castigat ridendo mores » : la comédie corrige les mœurs par le rire",
          "Œuvres clés : Racine (Phèdre), Corneille (Le Cid), Molière (L'Avare, Tartuffe)",
        ],
      },
      {
        titre: "La double énonciation",
        points: [
          "Le personnage s'adresse à un autre personnage sur scène",
          "En même temps, l'auteur s'adresse au public à travers cette réplique",
          "Le spectateur en sait souvent plus que les personnages : ironie dramatique",
        ],
      },
      {
        titre: "Théâtre et engagement",
        points: [
          "Beaumarchais, Le Mariage de Figaro (1784) : critique des privilèges de la noblesse",
          "Victor Hugo, Ruy Blas : dénonciation de la corruption de la cour, drame romantique",
          "Le théâtre permet de critiquer la société sous couvert de fiction",
        ],
      },
    ],
    audio:
      "Fiche de révision : le théâtre, dénoncer les travers de la société. Le théâtre met en scène des conflits et des personnages devant un public, pour dénoncer, par le rire ou l'émotion, les travers de la société. Le vocabulaire technique est essentiel : l'acte, la scène, la réplique, la tirade, le monologue, la didascalie, qui est une indication scénique donnée par l'auteur, l'aparté, entendu du seul public, et le quiproquo, un malentendu entre personnages. La tragédie met en scène des personnages nobles pris dans un destin qui les dépasse, la fatalité, et vise à susciter la crainte et la pitié, c'est la catharsis, comme chez Racine ou Corneille. La comédie, elle, corrige les mœurs par le rire, selon la formule castigat ridendo mores, comme chez Molière, qui dénonce l'avarice ou l'hypocrisie. Le théâtre repose sur la double énonciation : le personnage parle à un autre personnage, mais l'auteur, à travers lui, s'adresse aussi au public. Beaumarchais et Victor Hugo ont utilisé le théâtre pour critiquer directement les injustices sociales et politiques de leur époque.",
  },
  memoCards: [
    { recto: "Différence entre acte et scène ?", verso: "L'acte est une grande partie de la pièce ; la scène est une sous-partie, qui change généralement avec l'entrée ou la sortie d'un personnage." },
    { recto: "Qu'est-ce qu'une didascalie ?", verso: "Une indication scénique donnée par l'auteur (geste, décor, ton), souvent écrite en italique." },
    { recto: "Qu'est-ce qu'un aparté ?", verso: "Une parole d'un personnage entendue par le seul public, mais pas par les autres personnages sur scène." },
    { recto: "Qu'est-ce que la double énonciation au théâtre ?", verso: "Le personnage parle à un autre personnage, et en même temps l'auteur s'adresse au public à travers cette réplique." },
    { recto: "Qu'est-ce que la catharsis ?", verso: "Selon Aristote, le fait de purger les passions du spectateur en suscitant crainte et pitié devant la tragédie." },
    { recto: "Que signifie « castigat ridendo mores » ?", verso: "« Elle corrige les mœurs par le rire » : devise résumant le projet de la comédie, notamment chez Molière." },
    { recto: "Cite une tragédie et son auteur.", verso: "Phèdre, de Jean Racine (1677), ou Le Cid, de Pierre Corneille (1637)." },
    { recto: "Que dénonce Beaumarchais dans Le Mariage de Figaro (1784) ?", verso: "Les privilèges de la noblesse, quelques années avant la Révolution française." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une didascalie est :",
      choix: ["une réplique très longue", "une indication scénique donnée par l'auteur", "un personnage secondaire", "le titre d'une scène"],
      bonneReponse: 1,
      explication: "La didascalie précise un geste, un décor ou un ton, souvent entre parenthèses ou en italique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un monologue est un moment où :",
      choix: ["deux personnages se disputent", "un personnage seul en scène parle à voix haute", "le public applaudit", "l'acte se termine"],
      bonneReponse: 1,
      explication: "Le monologue permet au spectateur d'accéder aux pensées intimes d'un personnage seul en scène.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la fonction principale de la comédie, selon la formule « castigat ridendo mores » ?",
      reponse: "Corriger les mœurs, c'est-à-dire dénoncer les défauts et les travers des hommes, en faisant rire le spectateur.",
      explication: "C'est le projet des comédies de Molière, qui dénoncent l'avarice, l'hypocrisie ou le snobisme en amusant le public.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui est l'auteur de Phèdre (1677) ?",
      choix: ["Molière", "Jean Racine", "Pierre Corneille", "Victor Hugo"],
      bonneReponse: 1,
      explication: "Phèdre est l'une des grandes tragédies classiques de Jean Racine.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'appelle-t-on la « double énonciation » au théâtre ?",
      choix: [
        "Le fait qu'il y ait toujours deux personnages sur scène",
        "Le fait que le personnage parle à un autre personnage, tandis que l'auteur s'adresse au public",
        "Le fait que la pièce soit jouée deux fois",
        "Le fait de répéter deux fois chaque réplique",
      ],
      bonneReponse: 1,
      explication: "C'est une caractéristique fondamentale du texte théâtral : chaque réplique a deux destinataires en même temps.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre une tragédie et une comédie, en précisant les personnages et le dénouement typiques de chaque genre.",
      reponse: "La tragédie met en scène des personnages nobles pris dans un destin qui les dépasse (la fatalité), avec un registre soutenu et un dénouement souvent tragique, la mort du héros. La comédie met en scène des personnages de tous les milieux, dans des situations quotidiennes ou exagérées, avec un dénouement heureux et un but comique et critique.",
      explication: "Ces deux genres partagent l'objectif de faire réfléchir le spectateur, mais par des moyens opposés : l'émotion tragique ou le rire.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un aparté ? Pourquoi est-il utile au théâtre ?",
      reponse: "Un aparté est une parole prononcée par un personnage, censée n'être entendue que du public et non des autres personnages présents sur scène. Il est utile car il permet au spectateur d'accéder aux pensées secrètes d'un personnage, créant souvent un effet comique ou une complicité avec le public, tout en informant sur ce que les autres personnages ignorent.",
      explication: "L'aparté crée un écart d'information entre le spectateur et les personnages, source d'ironie dramatique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "En quoi Le Mariage de Figaro de Beaumarchais illustre-t-il un théâtre engagé ?",
      reponse: "À travers le personnage de Figaro, simple valet qui critique ouvertement les privilèges et l'autorité de son maître aristocrate, Beaumarchais dénonce les inégalités sociales de l'Ancien Régime, quelques années avant la Révolution française. Le rire de la comédie devient ici un moyen de critique politique.",
      explication: "Cette pièce a d'ailleurs été jugée si subversive qu'elle a connu des difficultés avec la censure royale avant sa représentation.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans une scène, le spectateur sait qu'un personnage est un imposteur, mais les autres personnages l'ignorent et lui font confiance. Quel effet cela crée-t-il ?",
      choix: ["Un quiproquo entre acteurs", "Une ironie dramatique liée à la double énonciation", "Une didascalie renforcée", "Un monologue tragique"],
      bonneReponse: 1,
      explication: "Le fait que le spectateur en sache plus que les personnages, grâce à la double énonciation, crée une tension ou un comique appelé ironie dramatique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse cet extrait inventé de comédie : « HARPAGON, seul, cherchant sa cassette. — Au voleur ! Au voleur ! À l'assassin ! Au meurtrier ! Justice, juste Ciel ! Je suis perdu, je suis assassiné, on m'a coupé la gorge, on m'a dérobé mon argent ! » Identifie le registre, le procédé comique dominant, et le travers dénoncé.",
      reponse: "Le registre est comique, mais fondé sur l'excès et l'exagération. Le procédé dominant est l'hyperbole verbale : Harpagon assimile la perte de son argent à un meurtre (« assassiné », « coupé la gorge »), ce qui produit un effet comique par le décalage absurde entre la gravité du vocabulaire et la cause réelle, la perte d'une somme d'argent. Le travers dénoncé est l'avarice : pour Harpagon, l'argent compte plus que sa propre vie.",
      explication: "Ce texte s'inspire directement de la célèbre scène du monologue d'Harpagon dans L'Avare de Molière.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en quoi la catharsis, selon Aristote, justifie l'intérêt du spectateur pour des histoires tragiques et douloureuses.",
      reponse: "Selon Aristote, en assistant à une tragédie, le spectateur ressent la crainte et la pitié pour le héros pris dans un destin funeste. Ce processus permettrait de « purger » ses propres passions et angoisses : en vivant ces émotions fortes par procuration, à distance, dans la fiction, le spectateur en sortirait apaisé et mieux à même de vivre sa propre existence.",
      explication: "Cette théorie explique pourquoi le théâtre tragique, malgré sa noirceur, continue de fasciner le public depuis l'Antiquité.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Sujet d'entraînement type brevet : rédige un court dialogue de théâtre (4 à 6 répliques, avec au moins une didascalie) entre deux personnages qui se disputent à propos d'un objet perdu, dans un registre comique.",
      reponse: "Exemple de corrigé : « MARTIN, fouillant frénétiquement ses poches. — Où est mon parapluie, où est mon parapluie ?! LÉA, moqueuse. — Sur ta tête, Martin. MARTIN, s'immobilisant, ridicule. — Ah. LÉA, riant. — Tu cherches un objet que tu portes déjà, quel exploit ! MARTIN, vexé. — On peut se tromper, ce n'est pas un crime ! »",
      explication: "On vérifie : mise en page correcte (nom du personnage en majuscules), présence d'au moins une didascalie, registre comique cohérent avec un décalage ridicule.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le théâtre met en scène des conflits :",
      choix: ["uniquement pour amuser", "devant un public, souvent pour dénoncer les travers de la société", "sans aucun personnage", "uniquement par écrit, sans représentation"],
      bonneReponse: 1,
      explication: "Le théâtre est un art vivant, joué devant un public, qui invite à la réflexion à travers la fiction.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'une réplique ?",
      reponse: "C'est ce que dit un personnage à son tour de parole dans le dialogue théâtral.",
      explication: "L'ensemble des répliques d'une scène constitue le dialogue entre les personnages.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence essentielle entre tragédie et comédie ?",
      reponse: "La tragédie met en scène des personnages nobles pris dans un destin funeste (la fatalité) et se termine souvent par la mort du héros. La comédie met en scène des personnages variés dans des situations quotidiennes ou exagérées, avec un but comique et un dénouement heureux.",
      explication: "Les deux genres partagent cependant l'ambition de faire réfléchir le spectateur sur la condition humaine ou la société.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui est le grand maître de la comédie classique française, auteur de L'Avare et de Tartuffe ?",
      choix: ["Jean Racine", "Molière", "Pierre Corneille", "Beaumarchais"],
      bonneReponse: 1,
      explication: "Molière a fait de la comédie un instrument privilégié de critique sociale, à travers le rire.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est la double énonciation au théâtre.",
      reponse: "C'est le fait que chaque réplique a deux destinataires : le personnage à qui elle s'adresse sur scène, et le public, à qui l'auteur s'adresse en même temps à travers cette réplique.",
      explication: "Cette spécificité du texte théâtral permet des effets d'ironie dramatique, quand le spectateur en sait plus que les personnages.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le théâtre",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une tirade est :",
          choix: ["une courte réplique", "une longue réplique", "une indication scénique", "un personnage muet"],
          bonneReponse: 1,
          explication: "La tirade désigne une réplique particulièrement longue, prononcée par un seul personnage.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la définition d'un quiproquo.",
          reponse: "C'est un malentendu entre les personnages, qui peut produire un effet comique ou tragique selon le contexte de la pièce.",
          explication: "Le quiproquo est un ressort classique du théâtre, en particulier de la comédie.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Le drame romantique, inventé par Victor Hugo, se caractérise par :",
          choix: [
            "le refus total du comique",
            "le mélange du tragique et du comique pour représenter la vie réelle",
            "l'absence de personnages nobles",
            "l'interdiction des didascalies",
          ],
          bonneReponse: 1,
          explication: "Hugo revendique ce mélange des genres contre les règles strictes du théâtre classique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi peut-on dire que le théâtre permet de critiquer la société « sous couvert de fiction » ?",
          reponse: "Parce que l'auteur peut dénoncer des travers réels (hypocrisie, injustice, abus de pouvoir) à travers des personnages et des situations inventés, ce qui lui permet de contourner en partie la censure et de faire réfléchir le public sans l'attaquer frontalement.",
          explication: "C'est le cas de Molière avec Tartuffe, dont la critique de l'hypocrisie religieuse a d'ailleurs suscité une vive polémique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la notion de catharsis et son rôle dans la tragédie.",
          reponse: "La catharsis, selon Aristote, est le fait de purger les passions du spectateur en lui faisant ressentir crainte et pitié devant le destin funeste du héros tragique. Elle justifie l'intérêt du public pour des histoires douloureuses, qui permettent d'évacuer des émotions fortes par la fiction.",
          explication: "Cette notion explique la fascination durable du public pour le genre tragique, malgré sa noirceur apparente.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse cet extrait inventé : « (Bas, au public.) Il croit que je vais accepter son marché... quelle naïveté ! (Haut, à Monsieur Dorval.) Soit, j'accepte votre offre avec le plus grand plaisir. » Identifie la figure théâtrale employée et explique l'effet produit sur le spectateur.",
          reponse: "Il s'agit d'un aparté (« Bas, au public ») suivi d'une réplique adressée au personnage (« Haut, à Monsieur Dorval »). L'effet est un contraste ironique : le spectateur découvre la pensée réelle du personnage, hostile ou moqueuse, juste avant d'entendre sa réponse officielle, faussement enthousiaste. Cela crée un effet comique et met en évidence l'hypocrisie ou la ruse du personnage, que Dorval, sur scène, ne perçoit pas.",
          explication: "C'est un exemple typique de la double énonciation combinée à l'aparté, très utilisée dans la comédie classique.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le théâtre",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une scène change généralement :",
          choix: ["à chaque réplique", "quand un personnage entre ou sort", "à chaque didascalie", "jamais au cours d'un acte"],
          bonneReponse: 1,
          explication: "C'est la règle traditionnelle du découpage en scènes dans le théâtre classique.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite une comédie de Molière et le travers qu'elle dénonce.",
          reponse: "L'Avare dénonce l'avarice ; Tartuffe dénonce l'hypocrisie religieuse ; Le Malade imaginaire dénonce la crédulité face aux médecins charlatans (une réponse suffit).",
          explication: "Molière utilise le rire pour mettre en lumière des défauts humains universels.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que critique Beaumarchais à travers le personnage de Figaro dans Le Mariage de Figaro ?",
          choix: ["Les excès de la Révolution française", "Les privilèges de la noblesse sous l'Ancien Régime", "L'invention de l'imprimerie", "La guerre de Cent Ans"],
          bonneReponse: 1,
          explication: "Figaro, simple valet, ose critiquer l'autorité et les privilèges de son maître aristocrate, annonçant les idées de la Révolution.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique en quoi les didascalies sont indispensables à la mise en scène d'une pièce.",
          reponse: "Les didascalies donnent des indications précises sur le décor, les déplacements, les gestes, les tons de voix ou les costumes des personnages, que le texte des répliques seul ne peut pas transmettre. Elles guident le metteur en scène et les acteurs dans l'interprétation concrète de la pièce.",
          explication: "Sans elles, une grande partie de l'intention de l'auteur concernant le jeu scénique serait perdue à la simple lecture.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi la fatalité est-elle un élément central de la tragédie classique ?",
          reponse: "La fatalité est le destin auquel le héros tragique ne peut échapper, quels que soient ses efforts ou ses qualités. Elle crée la tension dramatique propre à la tragédie : le spectateur assiste, impuissant comme le héros, à l'accomplissement inéluctable d'un malheur annoncé, ce qui suscite crainte et pitié.",
          explication: "C'est ce sentiment d'impuissance face au destin qui distingue fondamentalement la tragédie du drame ou de la comédie.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève affirme dans sa copie : « Le théâtre du XVIIe siècle n'a plus rien à nous apprendre aujourd'hui, car les sociétés ont beaucoup changé. » Discute cette affirmation en t'appuyant sur les œuvres étudiées.",
          reponse: "Cette affirmation est discutable. Certes, le contexte social du XVIIe siècle (monarchie absolue, place de la religion) diffère profondément du nôtre. Mais les travers dénoncés par Molière, l'hypocrisie (Tartuffe), l'avarice (L'Avare), la crédulité (Le Malade imaginaire), restent des défauts humains universels, présents dans toutes les sociétés. De même, la fatalité tragique chez Racine interroge une question intemporelle : la liberté humaine face au destin. Le théâtre classique continue donc de nous parler, car il met en scène des passions et des défauts qui dépassent son époque.",
          explication: "Une bonne réponse distingue le contexte historique précis d'une œuvre de la portée universelle des questions morales et humaines qu'elle soulève.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le théâtre met en scène des conflits devant un public pour faire réfléchir sur les travers de la société.",
    "Vocabulaire clé : acte, scène, réplique, tirade, monologue, didascalie, aparté, quiproquo.",
    "Tragédie : personnages nobles, fatalité, registre soutenu, catharsis (Racine, Corneille).",
    "Comédie : personnages variés, rire, « castigat ridendo mores » (Molière).",
    "Double énonciation : le personnage parle à un autre personnage ET l'auteur s'adresse au public.",
    "Théâtre engagé : Beaumarchais (Le Mariage de Figaro) et Hugo (Ruy Blas) dénoncent directement l'injustice sociale et politique.",
  ],
},
{
  slug: "discours-direct-indirect",
  titre: "Discours direct et indirect",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Apprendre à rapporter les paroles d'un personnage : le discours direct, avec ses marques typographiques, et le discours indirect, qui exige des transformations de pronoms, de temps et d'indicateurs. Découvrir aussi le discours indirect libre.",
  objectifs: [
    "Reconnaître les marques du discours direct : guillemets, tirets, verbes de parole",
    "Transformer un discours direct en discours indirect (pronoms, temps, indicateurs)",
    "Maîtriser la concordance des temps dans le discours indirect",
    "Repérer le discours indirect libre et son effet",
    "Rédiger un dialogue ou un discours rapporté correctement ponctué",
  ],
  slides: [
    {
      titre: "Rapporter les paroles de quelqu'un",
      illustration: "💬",
      visuel: "Discours direct ≠ Discours indirect",
      contenu: [
        "On peut rapporter les paroles de quelqu'un de deux manières principales",
        "Discours direct : on cite les paroles exactement, telles qu'elles ont été dites",
        "Discours indirect : on rapporte le contenu des paroles sans les citer mot à mot",
        "Le choix dépend de l'effet recherché : vivacité ou fluidité du récit",
      ],
      voixOff:
        "Quand on veut rapporter les paroles de quelqu'un, on dispose de deux grandes possibilités. Le discours direct cite les paroles exactement telles qu'elles ont été prononcées. Le discours indirect rapporte le contenu de ces paroles, mais sans les citer mot à mot, en les intégrant dans une phrase complexe. Le choix entre les deux dépend de l'effet recherché : la vivacité du dialogue ou la fluidité du récit.",
    },
    {
      titre: "Les marques du discours direct",
      illustration: "❝",
      visuel: "« ... » — verbe de parole",
      contenu: [
        "Les paroles sont encadrées par des guillemets « »",
        "Un tiret marque le changement de locuteur dans un dialogue",
        "Un verbe de parole introduit ou accompagne les paroles : dire, demander, répondre, s'écrier",
        "Ponctuation expressive conservée : points d'exclamation, d'interrogation",
      ],
      voixOff:
        "Le discours direct se reconnaît à plusieurs marques typographiques. Les paroles sont encadrées par des guillemets. Dans un dialogue, un tiret signale le changement de locuteur. Un verbe de parole, comme dire, demander, répondre ou s'écrier, introduit ou accompagne les paroles. La ponctuation expressive du personnage, points d'exclamation ou d'interrogation, est conservée telle quelle.",
    },
    {
      titre: "Exemple de discours direct",
      illustration: "🗨️",
      visuel: "Marie dit : « Je pars demain. »",
      contenu: [
        "« Marie dit : “Je pars demain.” »",
        "On reconnaît le verbe de parole (dit), les deux points, les guillemets",
        "Les paroles gardent leurs pronoms et leur temps d'origine (« je », présent)",
        "Effet : vivacité, présence directe du personnage",
      ],
      voixOff:
        "Prenons un exemple : Marie dit, je pars demain. On reconnaît le verbe de parole, dit, les deux points, et les guillemets qui encadrent les paroles exactes. Les pronoms et les temps restent ceux du personnage qui parle, ici le je et le présent. Cet effet donne de la vivacité au récit et rend la présence du personnage plus directe.",
    },
    {
      titre: "Passer au discours indirect",
      illustration: "🔄",
      visuel: "« Je pars demain » → qu'elle partait le lendemain",
      contenu: [
        "Les paroles deviennent une proposition subordonnée introduite par « que » (ou « si », « ce que »...)",
        "Plus de guillemets, plus de ponctuation expressive du personnage",
        "Le verbe de parole reste, mais suivi directement de la subordonnée",
        "Exemple : « Marie dit qu'elle partait le lendemain. »",
      ],
      voixOff:
        "Pour passer au discours indirect, les paroles rapportées deviennent une proposition subordonnée, le plus souvent introduite par que. Il n'y a plus de guillemets ni de ponctuation expressive propre au personnage. Le verbe de parole reste présent, mais il est directement suivi de la subordonnée. Notre exemple devient : Marie dit qu'elle partait le lendemain.",
    },
    {
      titre: "Les changements de pronoms et de possessifs",
      illustration: "🔁",
      visuel: "je → il/elle ; mon → son",
      contenu: [
        "Les pronoms personnels changent selon qui rapporte les paroles",
        "« je » devient « il » ou « elle » (si le locuteur n'est pas celui qui rapporte)",
        "Les déterminants possessifs changent aussi : « mon » devient « son »",
        "Exemple : « Je vais chez mon frère » → « Il a dit qu'il allait chez son frère »",
      ],
      voixOff:
        "Au discours indirect, les pronoms personnels changent selon la personne qui rapporte les paroles : le je devient il ou elle. Les déterminants possessifs changent également : mon devient son. Ainsi, je vais chez mon frère devient il a dit qu'il allait chez son frère.",
    },
    {
      titre: "La concordance des temps",
      illustration: "⏳",
      visuel: "présent → imparfait / futur → conditionnel",
      contenu: [
        "Si le verbe introducteur est au passé, les temps de la subordonnée changent",
        "Présent → imparfait : « je pars » → « qu'il partait »",
        "Futur → conditionnel présent : « je partirai » → « qu'il partirait »",
        "Passé composé → plus-que-parfait : « j'ai fini » → « qu'il avait fini »",
      ],
      voixOff:
        "Lorsque le verbe introducteur est au passé, on applique la concordance des temps dans la subordonnée. Le présent devient un imparfait : je pars devient qu'il partait. Le futur devient un conditionnel présent : je partirai devient qu'il partirait. Le passé composé devient un plus-que-parfait : j'ai fini devient qu'il avait fini.",
    },
    {
      titre: "Les indicateurs de temps et de lieu qui changent",
      illustration: "🗓️",
      visuel: "aujourd'hui → ce jour-là ; ici → là",
      contenu: [
        "« aujourd'hui » → « ce jour-là » ; « hier » → « la veille » ; « demain » → « le lendemain »",
        "« ici » → « là » ; « ce matin » → « ce matin-là »",
        "Ces changements s'expliquent par le changement de moment et de lieu de l'énonciation",
        "Les questions changent aussi de forme : « Est-ce que...? » → « si... »",
      ],
      voixOff:
        "Certains indicateurs de temps et de lieu doivent aussi changer, car le moment et le lieu de l'énonciation ne sont plus les mêmes. Aujourd'hui devient ce jour-là, hier devient la veille, demain devient le lendemain, ici devient là. Les questions changent également de forme : est-ce que devient si dans le discours indirect.",
    },
    {
      titre: "Le discours indirect libre",
      illustration: "🌀",
      visuel: "Ni guillemets, ni « que » : les pensées se glissent dans le récit",
      contenu: [
        "Mélange les deux discours : pas de guillemets, pas de « que », mais les temps et pronoms du récit",
        "Les paroles ou pensées d'un personnage se glissent directement dans la narration",
        "Effet : on entend la voix du personnage sans rupture avec le récit",
        "Procédé fréquent chez Flaubert (Madame Bovary)",
      ],
      voixOff:
        "Le discours indirect libre est un procédé plus subtil : il mélange les deux discours. Il n'y a ni guillemets, ni conjonction que, mais on garde les temps et les pronoms du récit. Les paroles ou les pensées d'un personnage se glissent alors directement dans la narration, sans rupture apparente. On entend sa voix intérieure sans que le narrateur l'annonce clairement. Ce procédé est fréquent chez Flaubert, notamment dans Madame Bovary.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Discours direct : guillemets, verbe de parole, ponctuation expressive conservée",
        "Discours indirect : subordonnée introduite par « que », pas de guillemets",
        "Changements : pronoms, possessifs, temps (concordance), indicateurs de temps/lieu",
        "Discours indirect libre : les pensées se glissent dans le récit, sans guillemets ni « que »",
      ],
      voixOff:
        "Pour résumer, le discours direct cite les paroles exactes entre guillemets, avec un verbe de parole et la ponctuation expressive du personnage. Le discours indirect les intègre dans une subordonnée introduite par que, ce qui entraîne des changements de pronoms, de possessifs, de temps et d'indicateurs de temps ou de lieu. Le discours indirect libre, enfin, glisse les pensées d'un personnage dans le récit sans guillemets ni que apparent.",
    },
  ],
  fiche: {
    intro:
      "Pour rapporter les paroles d'un personnage, on peut utiliser le discours direct, qui cite les paroles exactes, ou le discours indirect, qui les intègre dans une subordonnée et impose plusieurs transformations. Le discours indirect libre mélange les deux procédés.",
    sections: [
      {
        titre: "Le discours direct",
        points: [
          "Paroles citées exactement, encadrées par des guillemets « »",
          "Verbe de parole (dire, demander, répondre, s'écrier...) et deux points",
          "Tiret pour marquer le changement de locuteur dans un dialogue",
          "Ponctuation expressive du personnage conservée (!, ?, ...)",
        ],
      },
      {
        titre: "Le discours indirect",
        points: [
          "Paroles intégrées dans une subordonnée introduite par « que » (ou « si », mots interrogatifs)",
          "Plus de guillemets ni de ponctuation expressive propre au personnage",
          "Changements de pronoms personnels et possessifs (je → il/elle ; mon → son)",
        ],
      },
      {
        titre: "La concordance des temps et les indicateurs",
        points: [
          "Si le verbe introducteur est au passé : présent → imparfait ; futur → conditionnel présent ; passé composé → plus-que-parfait",
          "aujourd'hui → ce jour-là ; hier → la veille ; demain → le lendemain ; ici → là",
        ],
      },
      {
        titre: "Le discours indirect libre",
        points: [
          "Mélange les deux discours : pas de guillemets, pas de « que », mais temps et pronoms du récit",
          "Fait entendre la voix ou les pensées du personnage sans rupture avec la narration",
          "Procédé fréquent chez Flaubert (Madame Bovary)",
        ],
      },
    ],
    audio:
      "Fiche de révision : discours direct et indirect. Le discours direct cite exactement les paroles d'un personnage, encadrées par des guillemets, avec un verbe de parole. Le discours indirect intègre ces paroles dans une proposition subordonnée introduite par que, sans guillemets. Ce passage entraîne plusieurs changements : les pronoms personnels, comme je qui devient il ou elle, les déterminants possessifs, comme mon qui devient son, et, si le verbe introducteur est au passé, la concordance des temps : le présent devient un imparfait, le futur devient un conditionnel présent. Les indicateurs de temps et de lieu changent aussi : aujourd'hui devient ce jour-là, hier devient la veille, demain devient le lendemain. Enfin, le discours indirect libre mélange les deux discours : il fait entendre la voix d'un personnage directement dans le récit, sans guillemets ni que, comme chez Flaubert.",
  },
  memoCards: [
    {
      recto: "Quelles sont les marques typographiques du discours direct ?",
      verso: "Les guillemets « », le verbe de parole suivi de deux points, et le tiret pour le changement de locuteur dans un dialogue.",
    },
    {
      recto: "Comment introduit-on un discours indirect ?",
      verso: "Par une subordonnée, le plus souvent introduite par « que » (ou « si » pour une question).",
    },
    {
      recto: "Que devient « je » au discours indirect (si le locuteur change) ?",
      verso: "« je » devient « il » ou « elle ».",
    },
    {
      recto: "Que devient un possessif comme « mon » au discours indirect ?",
      verso: "« mon » devient « son ».",
    },
    {
      recto: "Concordance des temps : que devient le présent si le verbe introducteur est au passé ?",
      verso: "Le présent devient un imparfait (« je pars » → « qu'il partait »).",
    },
    {
      recto: "Concordance des temps : que devient le futur si le verbe introducteur est au passé ?",
      verso: "Le futur devient un conditionnel présent (« je partirai » → « qu'il partirait »).",
    },
    {
      recto: "Que deviennent « aujourd'hui », « hier », « demain » au discours indirect (au passé) ?",
      verso: "« aujourd'hui » → « ce jour-là » ; « hier » → « la veille » ; « demain » → « le lendemain ».",
    },
    {
      recto: "Qu'est-ce que le discours indirect libre ?",
      verso: "Un procédé qui glisse les pensées d'un personnage dans le récit, sans guillemets ni « que », en gardant les temps et pronoms du récit.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle ponctuation encadre les paroles au discours direct ?",
      choix: ["Des parenthèses", "Des guillemets", "Des crochets", "Aucune ponctuation particulière"],
      bonneReponse: 1,
      explication: "Les guillemets « » signalent que les paroles sont citées exactement.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Il dit qu'il viendra demain. » Ce discours est :",
      choix: ["direct", "indirect", "indirect libre", "aucun des trois"],
      bonneReponse: 1,
      explication: "Les paroles sont intégrées dans une subordonnée introduite par « que », sans guillemets : c'est du discours indirect.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux verbes de parole.",
      reponse: "Par exemple : dire et demander (ou répondre, s'écrier, affirmer, murmurer).",
      explication: "Les verbes de parole introduisent ou accompagnent les paroles rapportées.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Au discours indirect, le pronom « je » devient généralement :",
      choix: ["« nous »", "« il » ou « elle »", "« vous »", "il ne change jamais"],
      bonneReponse: 1,
      explication: "Le changement de locuteur (celui qui rapporte n'est pas celui qui parlait) impose le passage à la troisième personne.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Transforme au discours indirect : « Paul a dit : “Je suis fatigué.” » Quelle phrase est correcte ?",
      choix: [
        "Paul a dit qu'il est fatigué.",
        "Paul a dit qu'il était fatigué.",
        "Paul a dit : je suis fatigué.",
        "Paul a dit qu'il sera fatigué."
      ],
      bonneReponse: 1,
      explication: "Le verbe introducteur « a dit » est au passé : le présent « suis » devient un imparfait « était », selon la concordance des temps.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Transforme au discours indirect : « Léa dit : “Je pars en vacances demain.” »",
      reponse: "Léa dit qu'elle part en vacances le lendemain. (si le verbe introducteur reste au présent, seul l'indicateur de temps change ; si l'on met « a dit », on écrit : « Léa a dit qu'elle partait en vacances le lendemain. »)",
      explication: "On adapte le pronom (je → elle) et l'indicateur temporel (demain → le lendemain) ; les temps changent seulement si le verbe introducteur est au passé.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réécris cette phrase au discours direct : « Le professeur a demandé si les élèves avaient compris la leçon. »",
      reponse: "Le professeur a demandé : « Avez-vous compris la leçon ? »",
      explication: "On rétablit les guillemets, la forme interrogative directe et le pronom d'origine (« vous »).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Est-ce que tu viens ? » devient au discours indirect :",
      choix: [
        "« Il demande que tu viens. »",
        "« Il demande si tu viens. »",
        "« Il demande est-ce que tu viens. »",
        "« Il demande tu viens. »"
      ],
      bonneReponse: 1,
      explication: "Une question totale (oui/non) introduite par « est-ce que » se transforme au discours indirect avec « si ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la phrase « Marie a dit qu'elle viendra demain » contient une erreur, et corrige-la.",
      reponse: "Le verbe introducteur « a dit » est au passé : le futur « viendra » doit devenir un conditionnel présent selon la règle de concordance des temps. Il faut écrire : « Marie a dit qu'elle viendrait le lendemain » (avec aussi le changement de « demain » en « le lendemain »).",
      explication: "La concordance des temps est une règle stricte quand le verbe introducteur est au passé.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Identifie le procédé dans cet extrait inventé et justifie ta réponse : « Elle regarda la lettre. Allait-elle vraiment devoir partir si loin, abandonner sa famille, tout recommencer ? »",
      reponse: "C'est du discours indirect libre : les pensées du personnage (« Allait-elle vraiment devoir partir... ») se glissent dans le récit sans guillemets ni « que », mais avec les temps et pronoms de la narration (imparfait, « elle »).",
      explication: "L'absence de guillemets et de subordonnée introduite par « que », combinée à la présence de pensées personnelles au style interrogatif, signale le discours indirect libre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Transforme entièrement ce dialogue au discours indirect (au passé) : « Tom demanda : “Où vas-tu ce soir ?” Léa répondit : “Je vais au cinéma avec mes amis.” »",
      reponse: "Tom demanda à Léa où elle allait ce soir-là. Léa répondit qu'elle allait au cinéma avec ses amis.",
      explication: "On observe les changements de pronoms (tu → elle, je → elle), de possessifs (mes → ses) et, pour la question, la disparition des marques interrogatives directes au profit d'une subordonnée introduite par « où ».",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel auteur est particulièrement connu pour l'usage du discours indirect libre ?",
      choix: ["Molière", "Gustave Flaubert", "Jean de La Fontaine", "Victor Hugo"],
      bonneReponse: 1,
      explication: "Flaubert utilise fréquemment le discours indirect libre dans Madame Bovary pour faire entendre les pensées d'Emma sans rupture avec le récit.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le discours direct se reconnaît notamment grâce à :",
      choix: ["l'absence de ponctuation", "des guillemets", "l'absence de verbe", "un narrateur absent"],
      bonneReponse: 1,
      explication: "Les guillemets sont la marque typographique la plus visible du discours direct.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Par quelle conjonction introduit-on le plus souvent une subordonnée de discours indirect ?",
      reponse: "Par « que ».",
      explication: "Exemple : « Il a dit qu'il partait. »",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux changements que subit une phrase quand on passe du discours direct au discours indirect (au passé).",
      reponse: "Par exemple : le changement des pronoms personnels (je → il/elle) et le changement des temps verbaux (présent → imparfait), ou encore le changement des indicateurs de temps (demain → le lendemain).",
      explication: "Ces transformations sont nécessaires pour que la phrase reste cohérente une fois les paroles rapportées.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le discours indirect libre se caractérise par :",
      choix: [
        "des guillemets et un verbe de parole",
        "une subordonnée introduite par « que »",
        "l'absence de guillemets et de « que », mais les temps et pronoms du récit",
        "l'usage exclusif du présent"
      ],
      bonneReponse: 2,
      explication: "C'est un mélange subtil entre les deux discours, sans marque typographique ni syntaxique explicite.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi utilise-t-on parfois le discours indirect libre plutôt que le discours direct ou indirect classique ?",
      reponse: "Pour faire entendre directement la voix ou les pensées d'un personnage tout en gardant la fluidité du récit, sans rupture marquée par des guillemets ou une subordonnée : cela crée un effet d'intimité avec les pensées du personnage.",
      explication: "C'est un procédé narratif très utilisé dans le roman réaliste, notamment chez Flaubert.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Discours direct et indirect",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans un dialogue, le changement de locuteur est souvent marqué par :",
          choix: ["un point d'exclamation", "un tiret", "une majuscule", "un point-virgule"],
          bonneReponse: 1,
          explication: "Le tiret de dialogue indique qu'un nouveau personnage prend la parole.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Transforme au discours direct : il faut imaginer les paroles exactes de Julie qui, au discours indirect, dit qu'elle est contente.",
          reponse: "Julie dit : « Je suis contente. »",
          explication: "On rétablit la première personne, le présent et les guillemets.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Léo a dit qu'il avait fini ses devoirs. » Au discours direct, cela donnerait :",
          choix: [
            "Léo a dit : « J'ai fini mes devoirs. »",
            "Léo a dit : « J'avais fini mes devoirs. »",
            "Léo a dit : « Il a fini ses devoirs. »",
            "Léo a dit : « Je finis mes devoirs. »"
          ],
          bonneReponse: 0,
          explication: "Le plus-que-parfait du discours indirect correspond à un passé composé au discours direct : « j'ai fini ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme cette phrase au discours indirect, sachant que le verbe introducteur est au passé : « Le maire a annoncé : “Les travaux commenceront la semaine prochaine.” »",
          reponse: "Le maire a annoncé que les travaux commenceraient la semaine suivante.",
          explication: "Futur → conditionnel présent (concordance des temps) ; « la semaine prochaine » devient « la semaine suivante » (changement d'indicateur temporel).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre le discours indirect et le discours indirect libre.",
          reponse: "Le discours indirect intègre les paroles dans une subordonnée introduite par « que » (ou un autre mot subordonnant), avec un verbe introducteur explicite. Le discours indirect libre supprime à la fois les guillemets et la subordonnée : les paroles ou pensées du personnage se glissent directement dans le récit, sans marque syntaxique visible, tout en gardant les temps et pronoms du récit.",
          explication: "Le discours indirect libre est plus discret et crée un effet de proximité avec les pensées du personnage.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court échange (3-4 répliques) au discours direct, correctement ponctué, entre deux amis qui discutent d'un film qu'ils viennent de voir.",
          reponse: "Exemple de corrigé : « — Alors, ce film t'a plu ? demanda Sarah. — Franchement, oui ! répondit Nabil. Les effets spéciaux étaient impressionnants. — Moi, j'ai trouvé la fin un peu trop rapide, ajouta Sarah. »",
          explication: "On vérifie la présence de tirets, de verbes de parole variés et d'une ponctuation expressive cohérente.",
        },
      ],
    },
    {
      titre: "Examen 2 — Discours direct et indirect",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Elle demanda pourquoi il était en retard. » Ce discours est :",
          choix: ["direct", "indirect", "indirect libre", "aucun des trois"],
          bonneReponse: 1,
          explication: "La question est intégrée dans une subordonnée (« pourquoi il était en retard »), sans guillemets : c'est du discours indirect.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Que devient l'indicateur « hier » au discours indirect, si le verbe introducteur est au passé ?",
          reponse: "« hier » devient « la veille ».",
          explication: "Ce changement s'explique car le repère temporel n'est plus le moment de la parole d'origine.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Elle sourit. Elle allait enfin revoir sa famille après tant d'années ! » Ce passage relève :",
          choix: ["du discours direct", "du discours indirect classique", "du discours indirect libre", "d'aucun discours rapporté"],
          bonneReponse: 2,
          explication: "La pensée du personnage se glisse dans le récit sans guillemets ni « que », avec les temps du récit (imparfait) : c'est du discours indirect libre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme au discours indirect (verbe introducteur au passé) : « Il a crié : “Attention, la porte est ouverte !” »",
          reponse: "Il a crié que la porte était ouverte (et qu'il fallait faire attention).",
          explication: "On perd la ponctuation expressive (le point d'exclamation) et on adapte le temps (présent → imparfait).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi le discours direct donne-t-il souvent plus de vivacité à un récit que le discours indirect ?",
          reponse: "Parce qu'il restitue les paroles exactes du personnage, avec sa ponctuation expressive et son propre point de vue, ce qui rend la scène plus vivante et plus proche du lecteur, comme s'il entendait vraiment parler le personnage.",
          explication: "Le discours indirect, en résumant les paroles dans le récit du narrateur, crée davantage de distance.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade a écrit : « Il m'a demandé si est-ce que je venais avec lui. » Explique son erreur et corrige la phrase.",
          reponse: "Erreur : il a mélangé la marque interrogative directe « est-ce que » avec la subordonnée introduite par « si », propre au discours indirect ; on ne doit garder que « si ». Phrase corrigée : « Il m'a demandé si je venais avec lui. »",
          explication: "Au discours indirect, une question totale se transforme uniquement avec « si », sans « est-ce que ».",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Discours direct : paroles citées exactement, entre guillemets, avec verbe de parole et ponctuation expressive.",
    "Discours indirect : paroles intégrées dans une subordonnée (souvent introduite par « que »), sans guillemets.",
    "Changements de pronoms et possessifs : je → il/elle ; mon → son.",
    "Concordance des temps (si verbe introducteur au passé) : présent → imparfait ; futur → conditionnel présent ; passé composé → plus-que-parfait.",
    "Indicateurs qui changent : aujourd'hui → ce jour-là ; hier → la veille ; demain → le lendemain ; ici → là.",
    "Discours indirect libre : pensées du personnage glissées dans le récit, sans guillemets ni « que » (procédé cher à Flaubert).",
  ],
},
{
  slug: "lettre-journal-intime",
  titre: "La lettre et le journal intime",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Découvrir deux formes d'écriture de soi : la lettre, qui s'adresse à un destinataire précis, et le journal intime, qui se confie à soi-même. Étudier leurs codes, leur énonciation particulière et le pacte de sincérité qui les caractérise.",
  objectifs: [
    "Distinguer lettre formelle et lettre amicale, et connaître leurs codes",
    "Repérer les marques de l'énonciation : émetteur, destinataire, embrayeurs",
    "Comprendre les caractéristiques du journal intime et le pacte de sincérité",
    "Identifier les différences entre journal intime et autobiographie",
    "Rédiger une lettre ou une page de journal intime respectant les codes du genre",
  ],
  slides: [
    {
      titre: "Deux écritures de soi",
      illustration: "✉️",
      visuel: "Lettre → un autre / Journal → soi-même",
      contenu: [
        "La lettre et le journal intime sont des écrits personnels",
        "La lettre s'adresse à quelqu'un d'autre, un destinataire réel",
        "Le journal intime se confie à soi-même, sans destinataire extérieur",
        "Les deux expriment des pensées, des sentiments, un vécu",
      ],
      voixOff:
        "La lettre et le journal intime sont deux formes d'écriture personnelle. Elles se ressemblent parce qu'elles expriment toutes deux des pensées et des sentiments intimes. Mais elles se distinguent par leur destinataire : la lettre s'adresse à une personne précise, réelle, tandis que le journal intime se confie à soi-même, sans lecteur extérieur prévu.",
    },
    {
      titre: "La lettre formelle",
      illustration: "🏛️",
      visuel: "Madame, Monsieur, ... Veuillez agréer...",
      contenu: [
        "Adressée à une personne qu'on ne connaît pas ou peu (administration, employeur)",
        "Formule d'appel : « Madame, Monsieur, » ou « Madame la Directrice, »",
        "Vouvoiement obligatoire, vocabulaire soutenu, phrases correctes",
        "Formule de politesse finale développée : « Veuillez agréer... mes salutations distinguées »",
      ],
      voixOff:
        "La lettre formelle s'adresse à une personne que l'on connaît peu ou pas, comme une administration ou un employeur. Elle commence par une formule d'appel comme Madame, Monsieur, utilise le vouvoiement et un vocabulaire soutenu. Elle se termine toujours par une formule de politesse développée, du type Veuillez agréer, Madame, Monsieur, mes salutations distinguées.",
    },
    {
      titre: "La lettre amicale ou familiale",
      illustration: "💌",
      visuel: "Cher/Chère... Je t'embrasse !",
      contenu: [
        "Adressée à un proche : ami, famille",
        "Formule d'appel affectueuse : « Cher Louis, », « Chère Maman, »",
        "Tutoiement, ton libre, vocabulaire courant, humour possible",
        "Formule finale courte et affective : « Je t'embrasse », « Amitiés »",
      ],
      voixOff:
        "La lettre amicale ou familiale s'adresse à un proche. Le ton est libre, on utilise le tutoiement et un vocabulaire courant, parfois même de l'humour. Elle commence par une formule affectueuse comme Cher Louis ou Chère Maman, et se termine par une formule brève et chaleureuse, comme je t'embrasse ou amitiés.",
    },
    {
      titre: "L'énonciation dans la lettre",
      illustration: "🗣️",
      visuel: "JE écris à TU, ICI, MAINTENANT",
      contenu: [
        "Émetteur (« je ») et destinataire (« tu » ou « vous ») clairement identifiés",
        "Présence de la date et souvent du lieu d'écriture",
        "Emploi du présent, du passé composé, des indices temporels (« hier », « demain »)",
        "Les pronoms et indices changent de sens selon qui écrit et à qui",
      ],
      voixOff:
        "Dans une lettre, la situation d'énonciation est très marquée. On sait qui écrit, le je, et à qui il s'adresse, le tu ou le vous. La lettre porte une date et souvent un lieu. Les temps utilisés sont le présent et le passé composé, avec des indices comme hier ou demain, qui se comprennent seulement si l'on connaît le moment de l'écriture.",
    },
    {
      titre: "Le journal intime",
      illustration: "🔒",
      visuel: "Cher journal... [date]",
      contenu: [
        "Texte écrit pour soi, à intervalles réguliers, généralement daté",
        "Souvent une formule d'ouverture : « Cher journal, »",
        "Le scripteur écrit au jour le jour, à chaud, sans savoir la suite",
        "Sincérité, spontanéité, absence de recherche de style",
      ],
      voixOff:
        "Le journal intime est un texte que l'on écrit pour soi-même, régulièrement, souvent chaque jour, en indiquant la date. Beaucoup commencent par une formule comme Cher journal. Celui qui écrit raconte les événements au jour le jour, sans savoir ce qui va se passer ensuite, avec sincérité et spontanéité, sans chercher un style travaillé.",
    },
    {
      titre: "Le pacte de sincérité",
      illustration: "🤝",
      visuel: "« Je promets de dire la vérité sur moi-même »",
      contenu: [
        "L'auteur du journal s'engage à être honnête envers lui-même",
        "Il n'écrit pas pour plaire à un lecteur, mais pour se comprendre",
        "Exemples célèbres : le Journal d'Anne Frank",
        "La sincérité n'empêche pas la subjectivité : c'est un point de vue personnel",
      ],
      voixOff:
        "Le journal intime repose sur un pacte de sincérité : celui qui écrit s'engage à être honnête envers lui-même, sans chercher à plaire à un lecteur puisqu'il n'y en a pas, en principe. Le Journal d'Anne Frank en est un exemple célèbre. Mais sincérité ne veut pas dire objectivité : le journal reste un point de vue personnel, subjectif, sur les événements vécus.",
    },
    {
      titre: "Journal intime et autobiographie : quelle différence ?",
      illustration: "📖",
      visuel: "Jour après jour ≠ Regard sur toute une vie",
      contenu: [
        "Journal intime : écrit au jour le jour, sans recul, sans savoir la fin",
        "Autobiographie : écrite plus tard, avec du recul sur toute une vie",
        "Le journal ignore l'avenir, l'autobiographie le connaît déjà",
        "Les deux sont des écrits à la première personne, fondés sur le vécu réel",
      ],
      voixOff:
        "Il ne faut pas confondre journal intime et autobiographie. Le journal intime est écrit au jour le jour, sans recul, sans savoir ce que l'avenir réserve. L'autobiographie, elle, est écrite plus tard, avec le recul de toute une vie : l'auteur connaît déjà la suite des événements qu'il raconte. Les deux textes restent cependant des écrits à la première personne, fondés sur une expérience réelle.",
    },
    {
      titre: "Bien écrire une lettre ou une page de journal",
      illustration: "✍️",
      visuel: "Codes + énonciation + sincérité",
      contenu: [
        "Lettre : respecter formule d'appel, registre de langue et formule finale adaptés au destinataire",
        "Journal : dater la page, écrire à la première personne, exprimer des sentiments réels ou vraisemblables",
        "Toujours vérifier la cohérence des pronoms et des temps",
        "Adapter le vocabulaire à la relation avec le destinataire (ou à soi-même)",
      ],
      voixOff:
        "Pour bien écrire une lettre, il faut choisir une formule d'appel et une formule finale adaptées à la personne à qui l'on écrit, et adopter le bon registre de langue. Pour une page de journal intime, on date sa page, on écrit à la première personne, et on exprime des sentiments sincères ou vraisemblables. Dans les deux cas, on veille à la cohérence des pronoms et des temps employés.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Lettre : destinataire réel, codes précis (formule d'appel, politesse) selon formelle/amicale",
        "Journal intime : destinataire = soi-même, écriture datée, régulière, pacte de sincérité",
        "Journal intime ≠ autobiographie : au jour le jour, sans recul, sans connaître la suite",
        "Toujours adapter le registre de langue à la situation d'énonciation",
      ],
      voixOff:
        "Pour résumer, la lettre s'adresse à un destinataire réel et suit des codes précis, différents selon qu'elle est formelle ou amicale. Le journal intime se confie à soi-même, de façon régulière et datée, dans le cadre d'un pacte de sincérité. Il se distingue de l'autobiographie car il est écrit au jour le jour, sans recul sur la suite des événements. Dans tous les cas, il faut adapter son registre de langue à la situation d'énonciation.",
    },
  ],
  fiche: {
    intro:
      "La lettre et le journal intime sont deux formes d'écriture personnelle à la première personne. La lettre s'adresse à un destinataire réel et suit des codes précis ; le journal intime se confie à soi-même, jour après jour, dans le cadre d'un pacte de sincérité.",
    sections: [
      {
        titre: "La lettre : formelle ou amicale",
        points: [
          "Lettre formelle : destinataire peu connu, vouvoiement, formule d'appel neutre (« Madame, Monsieur, »), formule de politesse développée",
          "Lettre amicale/familiale : destinataire proche, tutoiement, ton libre, formule d'appel et de fin affectueuses",
          "Toujours indiquer la date et respecter la mise en page (appel, corps, formule finale, signature)",
        ],
      },
      {
        titre: "L'énonciation dans la lettre",
        points: [
          "Émetteur (« je ») et destinataire (« tu »/« vous ») identifiés",
          "Indices de temps et de lieu liés au moment de l'écriture (« aujourd'hui », « ici », « demain »)",
          "Temps dominants : présent, passé composé",
        ],
      },
      {
        titre: "Le journal intime et le pacte de sincérité",
        points: [
          "Texte daté, écrit régulièrement, adressé à soi-même (parfois « Cher journal »)",
          "Écriture au jour le jour : le scripteur ignore la suite des événements",
          "Pacte de sincérité : engagement d'honnêteté envers soi-même, sans souci de plaire (ex. Journal d'Anne Frank)",
          "Sincérité ≠ objectivité : le regard reste subjectif",
        ],
      },
      {
        titre: "Journal intime et autobiographie",
        points: [
          "Journal intime : écrit au présent des événements, sans recul, sans connaître la fin",
          "Autobiographie : écrite après coup, avec le recul de toute une vie",
          "Points communs : première personne, vécu réel, sincérité recherchée",
        ],
      },
    ],
    audio:
      "Fiche de révision : la lettre et le journal intime. La lettre s'adresse à un destinataire réel. On distingue la lettre formelle, qui utilise le vouvoiement et des formules codifiées comme Madame, Monsieur, et Veuillez agréer mes salutations distinguées, de la lettre amicale ou familiale, plus libre, qui utilise le tutoiement. Dans une lettre, l'énonciation est très marquée : on identifie clairement qui écrit, à qui, et quand. Le journal intime, lui, est un texte daté que l'on écrit pour soi-même, régulièrement, au jour le jour, sans savoir ce que l'avenir réserve. Il repose sur un pacte de sincérité : l'auteur s'engage à être honnête envers lui-même, comme dans le Journal d'Anne Frank. Il ne faut pas confondre le journal intime, écrit sans recul, avec l'autobiographie, écrite plus tard, avec le recul de toute une vie.",
  },
  memoCards: [
    {
      recto: "Quelle est la différence essentielle entre lettre et journal intime ?",
      verso: "La lettre s'adresse à un destinataire réel ; le journal intime se confie à soi-même, sans lecteur extérieur prévu.",
    },
    {
      recto: "Quels sont les codes de la lettre formelle ?",
      verso: "Vouvoiement, formule d'appel neutre (« Madame, Monsieur, »), vocabulaire soutenu, formule de politesse développée en fin de lettre.",
    },
    {
      recto: "Quels sont les codes de la lettre amicale ?",
      verso: "Tutoiement, ton libre, formule d'appel et de fin affectueuses (« Cher... », « Je t'embrasse »).",
    },
    {
      recto: "Qu'est-ce que l'énonciation d'une lettre ?",
      verso: "L'ensemble des marques qui indiquent qui écrit (je), à qui (tu/vous), quand et où (date, lieu, indices temporels).",
    },
    {
      recto: "Qu'est-ce que le pacte de sincérité du journal intime ?",
      verso: "L'engagement de l'auteur à être honnête envers lui-même, sans chercher à plaire à un lecteur.",
    },
    {
      recto: "Cite un exemple célèbre de journal intime.",
      verso: "Le Journal d'Anne Frank, tenu pendant la Seconde Guerre mondiale.",
    },
    {
      recto: "Journal intime ou autobiographie : lequel est écrit sans recul ?",
      verso: "Le journal intime : il est écrit au jour le jour, sans savoir la suite des événements.",
    },
    {
      recto: "La sincérité d'un journal intime signifie-t-elle qu'il est objectif ?",
      verso: "Non : le journal reste un point de vue personnel et subjectif, même s'il est sincère.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "À qui s'adresse une lettre ?",
      choix: ["À personne en particulier", "À un destinataire réel et identifié", "Uniquement à soi-même", "Au lecteur du futur"],
      bonneReponse: 1,
      explication: "La lettre suppose toujours un destinataire réel, identifié, à qui elle est adressée.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle formule d'appel convient à une lettre formelle adressée à une administration ?",
      choix: ["Salut !", "Madame, Monsieur,", "Coucou toi,", "Mon pote,"],
      bonneReponse: 1,
      explication: "« Madame, Monsieur, » est la formule d'appel neutre et respectueuse d'une lettre formelle.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que le pacte de sincérité dans un journal intime ?",
      reponse: "C'est l'engagement de l'auteur à être honnête envers lui-même dans ce qu'il écrit, sans chercher à plaire à un lecteur extérieur.",
      explication: "Le journal intime n'est pas écrit pour être lu par d'autres : la sincérité y est essentielle.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un journal intime est généralement :",
      choix: ["anonyme et non daté", "daté et écrit régulièrement", "écrit une seule fois dans une vie", "toujours destiné à être publié"],
      bonneReponse: 1,
      explication: "Le journal intime se caractérise par des entrées datées, écrites à intervalles réguliers.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans une lettre amicale, quel registre de langue est le plus approprié ?",
      choix: ["Très soutenu et impersonnel", "Courant ou familier, avec tutoiement", "Uniquement des formules administratives", "Le style d'un rapport officiel"],
      bonneReponse: 1,
      explication: "La lettre amicale s'adresse à un proche : le tutoiement et un registre courant ou familier sont naturels.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre le journal intime et l'autobiographie en une ou deux phrases.",
      reponse: "Le journal intime est écrit au jour le jour, sans recul, sans que l'auteur connaisse la suite des événements. L'autobiographie est écrite plus tard, avec le recul de toute une vie, l'auteur connaissant déjà la suite de son histoire.",
      explication: "Le critère décisif est la présence ou l'absence de recul temporel au moment de l'écriture.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Relève dans cette phrase les indices d'énonciation : « Je t'écris aujourd'hui depuis Lyon, en espérant te revoir bientôt. »",
      reponse: "Émetteur : « je » ; destinataire : « tu » ; indice de temps : « aujourd'hui » ; indice de lieu : « depuis Lyon » ; indice temporel projeté : « bientôt ».",
      explication: "Une lettre contient toujours des marques qui situent l'écrit dans le temps et l'espace de l'émetteur.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Laquelle de ces formules finales convient à une lettre formelle ?",
      choix: ["Bisous !", "Veuillez agréer, Madame, Monsieur, mes salutations distinguées.", "À plus !", "Gros câlins"],
      bonneReponse: 1,
      explication: "Cette formule développée et respectueuse est typique de la lettre formelle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que le journal intime est sincère mais pas forcément objectif ?",
      reponse: "Le journal intime est sincère car l'auteur ne cherche pas à mentir ou à se mettre en valeur devant un lecteur. Mais il reste subjectif : l'auteur raconte les événements selon son propre ressenti, ses émotions du moment, ce qui n'est pas la même chose qu'un compte-rendu objectif et neutre des faits.",
      explication: "Sincérité et objectivité sont deux notions différentes : on peut être sincère tout en ayant un point de vue partial.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige le début d'une lettre formelle (formule d'appel + première phrase) à un principal de collège pour demander un rendez-vous.",
      reponse: "Exemple de corrigé : « Madame la Principale, Je me permets de vous écrire afin de solliciter un rendez-vous pour évoquer mon orientation en fin de troisième. »",
      explication: "On vérifie la formule d'appel adaptée, le vouvoiement et le registre soutenu.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige une courte page de journal intime datée (3 à 4 phrases) racontant une journée d'école, en respectant le pacte de sincérité.",
      reponse: "Exemple de corrigé : « Lundi 14 mars. Cher journal, aujourd'hui j'ai eu un contrôle de mathématiques que je redoutais depuis une semaine. J'ai eu peur en découvrant le sujet, mais finalement je crois m'en être bien sorti. Ce soir, je me sens soulagé, même si j'attends les résultats avec un peu d'angoisse. »",
      explication: "On attend une date, un ton sincère et personnel, l'expression d'émotions réelles ou vraisemblables, sans destinataire extérieur.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel élément prouve qu'un texte est un journal intime plutôt qu'une autobiographie ?",
      choix: [
        "Il est écrit à la première personne",
        "L'auteur raconte des événements passés depuis longtemps, avec du recul",
        "Le texte est daté au jour le jour et l'auteur ignore ce qui va suivre",
        "Le texte parle de la vie entière de l'auteur",
      ],
      bonneReponse: 2,
      explication: "L'absence de recul et l'écriture datée, au jour le jour, sont les marques distinctives du journal intime.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La lettre se distingue du journal intime parce qu'elle a :",
      choix: ["une date", "un destinataire réel extérieur", "des sentiments exprimés", "un style personnel"],
      bonneReponse: 1,
      explication: "Le journal intime aussi peut être daté et exprimer des sentiments, mais il n'a pas de destinataire réel extérieur.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite une formule d'appel et une formule finale d'une lettre formelle.",
      reponse: "Par exemple : « Madame, Monsieur, » et « Veuillez agréer, Madame, Monsieur, mes salutations distinguées. »",
      explication: "Ces formules codifiées marquent le respect et la distance envers le destinataire.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un embrayeur ou indice d'énonciation ? Donne un exemple.",
      reponse: "C'est un mot dont le sens dépend de la situation d'énonciation (qui parle, à qui, quand, où), comme « je », « tu », « ici », « aujourd'hui », « demain ».",
      explication: "Ces mots changent de référent selon la personne qui parle et le moment où elle parle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le Journal d'Anne Frank est un exemple de :",
      choix: ["lettre formelle", "autobiographie tardive", "journal intime", "roman réaliste"],
      bonneReponse: 2,
      explication: "Anne Frank y raconte son quotidien au jour le jour, sans savoir ce que l'avenir lui réserve.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi dit-on que le journal intime est écrit « sans savoir la suite » ?",
      reponse: "Parce que l'auteur écrit chaque page au moment où il vit les événements : il ne connaît pas encore ce qui va se passer ensuite, contrairement à l'auteur d'une autobiographie qui écrit après coup.",
      explication: "C'est la différence fondamentale entre journal intime et autobiographie.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La lettre et le journal intime",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une lettre amicale utilise en général :",
          choix: ["le vouvoiement", "le tutoiement", "aucun pronom personnel", "uniquement des questions"],
          bonneReponse: 1,
          explication: "Le tutoiement convient à une relation proche, familière ou amicale.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne deux marques d'énonciation que l'on trouve typiquement dans une lettre.",
          reponse: "Par exemple : le pronom « je » (émetteur), le pronom « tu » ou « vous » (destinataire), la date, un indice de lieu ou de temps comme « aujourd'hui » ou « ici ».",
          explication: "Ces marques situent la lettre dans une situation de communication précise.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Le pacte de sincérité concerne principalement :",
          choix: ["la lettre formelle", "le journal intime", "le mode d'emploi", "l'article de journal"],
          bonneReponse: 1,
          explication: "C'est un engagement propre au journal intime, où l'auteur s'engage à être honnête envers lui-même.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi le vocabulaire et le registre de langue changent entre une lettre formelle et une lettre amicale.",
          reponse: "Le registre de langue s'adapte à la relation avec le destinataire : plus soutenu et respectueux face à une personne peu connue ou une administration, plus courant ou familier face à un proche.",
          explication: "L'adaptation du registre au destinataire est une règle générale de la communication écrite.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans quelle mesure le journal intime est-il sincère mais subjectif ?",
          reponse: "Il est sincère car l'auteur ne ment pas et n'écrit pas pour plaire à un lecteur. Mais il reste subjectif car il exprime le ressenti personnel de l'auteur à un moment donné, non une vérité objective et vérifiable.",
          explication: "Sincérité (honnêteté envers soi) et objectivité (neutralité des faits) sont deux notions distinctes.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige les trois premières phrases d'une page de journal intime datée, racontant une nouvelle amitié, en respectant le pacte de sincérité.",
          reponse: "Exemple de corrigé : « Mardi 3 septembre. Cher journal, aujourd'hui j'ai rencontré une nouvelle élève dans ma classe, Léa. Nous avons discuté toute la récréation et j'ai tout de suite eu l'impression que nous allions bien nous entendre. J'espère ne pas me tromper, car j'ai souvent du mal à me faire de nouveaux amis. »",
          explication: "On attend une date, l'expression d'un sentiment sincère et personnel, la première personne.",
        },
      ],
    },
    {
      titre: "Examen 2 — La lettre et le journal intime",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel élément est indispensable dans presque toutes les pages de journal intime ?",
          choix: ["Une formule d'appel administrative", "Une date", "Un destinataire nommé", "Une formule de politesse finale"],
          bonneReponse: 1,
          explication: "Les pages de journal intime sont presque toujours datées, ce qui permet de suivre le fil du temps vécu.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qui est l'auteure du célèbre journal intime tenu pendant la Seconde Guerre mondiale ?",
          reponse: "Anne Frank.",
          explication: "Le Journal d'Anne Frank est l'un des journaux intimes les plus connus au monde.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées. » Cette phrase appartient à :",
          choix: ["une page de journal intime", "une lettre amicale", "une lettre formelle", "un dialogue de roman"],
          bonneReponse: 2,
          explication: "Cette formule de politesse développée et respectueuse est typique de la lettre formelle.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi ne peut-on pas dire que le journal intime « n'a pas de destinataire » ?",
          reponse: "On peut considérer que le destinataire du journal intime, c'est l'auteur lui-même, à qui il s'adresse (parfois via une formule comme « Cher journal »), et non une personne extérieure comme dans une lettre.",
          explication: "Le journal intime a bien un destinataire, mais ce destinataire est le scripteur lui-même.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Compare en deux phrases le moment de l'écriture dans le journal intime et dans l'autobiographie.",
          reponse: "Dans le journal intime, l'auteur écrit au moment même où il vit les événements, sans savoir la suite. Dans l'autobiographie, l'auteur écrit longtemps après, avec le recul et la connaissance de toute la suite de sa vie.",
          explication: "C'est le critère du recul temporel qui distingue clairement les deux formes d'écriture de soi.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade a écrit une lettre à son maire en le tutoyant et en signant « Bisous ». Explique-lui son erreur et propose une correction.",
          reponse: "Son erreur est d'avoir utilisé un registre familier (tutoiement, formule affective) pour une lettre formelle adressée à une personne qu'il ne connaît pas personnellement. Il faudrait vouvoyer le maire, utiliser une formule d'appel comme « Monsieur le Maire, » et terminer par une formule de politesse développée comme « Veuillez agréer, Monsieur le Maire, l'expression de mes salutations distinguées. »",
          explication: "Le registre de langue et les formules doivent toujours être adaptés à la relation avec le destinataire.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La lettre s'adresse à un destinataire réel ; le journal intime se confie à soi-même.",
    "Lettre formelle : vouvoiement, formules codifiées (« Madame, Monsieur, », « Veuillez agréer... »).",
    "Lettre amicale : tutoiement, ton libre, formules affectueuses.",
    "L'énonciation d'une lettre mêle émetteur (« je »), destinataire (« tu »/« vous ») et indices de temps et de lieu.",
    "Le journal intime repose sur un pacte de sincérité : honnêteté envers soi-même, sans chercher à plaire (ex. Journal d'Anne Frank).",
    "Journal intime ≠ autobiographie : le journal est écrit au jour le jour, sans recul ; l'autobiographie est écrite après coup, avec le recul de toute une vie.",
  ],
},
{
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
},
{
  slug: "presse-information",
  titre: "Informer, s'informer, déformer",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Comprendre le fonctionnement de la presse et des médias : les différents types d'articles, les règles de l'information (les 5W), la différence entre fait et opinion, et développer son esprit critique face aux sources et aux fausses informations.",
  objectifs: [
    "Connaître la composition d'un journal et d'un article (une, titre, chapô, légende)",
    "Distinguer les grands types d'articles : fait divers, reportage, éditorial, interview",
    "Répondre aux questions essentielles de l'information (les 5W)",
    "Distinguer fait et opinion, information et commentaire",
    "Développer un regard critique sur les sources et repérer une fausse information",
  ],
  slides: [
    {
      titre: "À quoi sert la presse ?",
      illustration: "📰",
      visuel: "Informer le public",
      contenu: [
        "La presse a pour mission première d'informer les citoyens",
        "Elle existe sous plusieurs formes : presse écrite, radio, télévision, presse en ligne",
        "Elle joue un rôle de « quatrième pouvoir » : elle surveille et informe sur les pouvoirs politiques",
        "Elle doit respecter des règles déontologiques : vérité, vérification des sources",
      ],
      voixOff:
        "La presse a pour mission première d'informer les citoyens sur l'actualité, qu'elle soit locale, nationale ou internationale. Elle existe sous plusieurs formes : presse écrite, radio, télévision, presse en ligne. On dit parfois qu'elle est le quatrième pouvoir, car elle surveille et informe sur l'action des pouvoirs politiques, économiques et judiciaires. Pour cela, elle doit respecter des règles déontologiques, comme la recherche de la vérité et la vérification des sources.",
    },
    {
      titre: "La une et l'organisation d'un journal",
      illustration: "🗞️",
      visuel: "Une = vitrine du journal",
      contenu: [
        "La une est la première page, la vitrine du journal",
        "Elle présente les titres et images des articles les plus importants du jour",
        "Le journal est organisé en rubriques : politique, société, sport, culture, international",
        "La hiérarchisation de l'information indique son importance (taille des titres, emplacement)",
      ],
      voixOff:
        "La une est la première page du journal, sa vitrine : elle présente les titres et les images des articles les plus importants du jour. Le journal est ensuite organisé en rubriques, comme la politique, la société, le sport, la culture ou l'international. La taille des titres et leur emplacement indiquent la hiérarchisation de l'information, c'est-à-dire son importance relative.",
    },
    {
      titre: "Les éléments d'un article",
      illustration: "📝",
      visuel: "Titre + chapô + corps + légende",
      contenu: [
        "Le titre : accroche le lecteur, résume l'information en quelques mots",
        "Le chapô (ou chapeau) : court paragraphe qui résume l'essentiel de l'article",
        "Le corps de l'article : développe l'information en détail",
        "La légende : texte qui accompagne et explique une photo ou une image",
      ],
      voixOff:
        "Un article de presse est composé de plusieurs éléments. Le titre accroche le lecteur et résume l'information en quelques mots. Le chapô, ou chapeau, est un court paragraphe qui résume l'essentiel de l'article, avant son développement. Le corps de l'article développe ensuite l'information en détail. Enfin, la légende accompagne et explique une photo ou une image.",
    },
    {
      titre: "Les 5W : les questions essentielles",
      illustration: "❓",
      visuel: "Qui ? Quoi ? Où ? Quand ? Pourquoi ?",
      contenu: [
        "Un bon article d'information répond à cinq questions essentielles",
        "Qui ? (les personnes concernées) — Quoi ? (les faits)",
        "Où ? (le lieu) — Quand ? (le moment)",
        "Pourquoi ? (les causes ou raisons) — parfois Comment ?",
      ],
      voixOff:
        "Un bon article d'information répond en général à cinq questions essentielles, que l'on appelle parfois les 5W, d'après leurs initiales en anglais. Qui est concerné ? Quoi, c'est-à-dire quels sont les faits ? Où cela se passe-t-il ? Quand cela a-t-il eu lieu ? Et pourquoi, c'est-à-dire quelles en sont les causes ou les raisons ? On y ajoute parfois une sixième question : comment ?",
    },
    {
      titre: "Les grands types d'articles",
      illustration: "🗂️",
      visuel: "Fait divers • Reportage • Éditorial • Interview",
      contenu: [
        "Fait divers : événement ponctuel, souvent local (accident, vol, incident)",
        "Reportage : enquête approfondie sur le terrain, souvent illustrée de témoignages",
        "Éditorial : article d'opinion signé, qui donne le point de vue du journal",
        "Interview : questions posées à une personnalité, retranscrites au discours direct",
      ],
      voixOff:
        "Il existe plusieurs grands types d'articles. Le fait divers relate un événement ponctuel, souvent local, comme un accident ou un incident. Le reportage est une enquête approfondie menée sur le terrain, souvent illustrée de témoignages. L'éditorial est un article d'opinion signé, qui donne le point de vue du journal sur un sujet. L'interview retranscrit les questions posées à une personnalité et ses réponses, généralement au discours direct.",
    },
    {
      titre: "Fait et opinion : ne pas confondre",
      illustration: "⚖️",
      visuel: "Fait = vérifiable / Opinion = point de vue",
      contenu: [
        "Un fait est une information vérifiable, objective : « Il a plu hier à Paris. »",
        "Une opinion est un point de vue, une appréciation personnelle : « Ce film est excellent. »",
        "Un article d'information doit distinguer clairement faits et commentaires",
        "Des expressions comme « je pense que », « à mon avis » signalent une opinion",
      ],
      voixOff:
        "Il est essentiel de distinguer le fait de l'opinion. Un fait est une information vérifiable et objective, comme il a plu hier à Paris. Une opinion est un point de vue, une appréciation personnelle, comme ce film est excellent. Un bon article d'information doit distinguer clairement les faits des commentaires. Des expressions comme je pense que ou à mon avis signalent en général une opinion et non un fait.",
    },
    {
      titre: "Vérifier ses sources et éviter les fausses informations",
      illustration: "🔍",
      visuel: "Qui dit ça ? D'où vient l'info ?",
      contenu: [
        "Une source est l'origine d'une information (témoin, document, agence de presse)",
        "Il faut croiser plusieurs sources fiables avant de croire une information",
        "Fake news (fausse information) : information inventée ou déformée, diffusée volontairement ou non",
        "Réflexes utiles : vérifier l'auteur, la date, comparer avec d'autres médias fiables",
      ],
      voixOff:
        "Une source est l'origine d'une information : un témoin, un document, une agence de presse. Avant de croire une information, il faut croiser plusieurs sources fiables. On appelle fake news une fausse information, inventée ou déformée, diffusée volontairement ou par erreur. Pour s'en méfier, quelques réflexes utiles : vérifier qui est l'auteur, à quelle date l'information a été publiée, et comparer avec d'autres médias fiables.",
    },
    {
      titre: "L'importance de l'esprit critique",
      illustration: "🧠",
      visuel: "Douter, vérifier, comparer",
      contenu: [
        "S'informer suppose de garder un esprit critique face à toute information",
        "Se demander : qui parle ? dans quel but ? avec quelles preuves ?",
        "Toute image ou vidéo peut être sortie de son contexte ou manipulée",
        "S'informer auprès de sources professionnelles et variées reste la meilleure protection",
      ],
      voixOff:
        "S'informer suppose de garder un esprit critique face à toute information reçue. Il faut se demander qui parle, dans quel but, et avec quelles preuves. Une image ou une vidéo peut très bien être sortie de son contexte ou manipulée. La meilleure protection contre la désinformation reste de s'informer auprès de sources professionnelles et variées, et de ne jamais se fier à une seule source.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "La presse informe, hiérarchise l'actualité (une, rubriques) et emploie des types d'articles variés",
        "Un article répond aux 5W : qui, quoi, où, quand, pourquoi (comment)",
        "Fait (vérifiable) ≠ opinion (point de vue) : un bon article les distingue",
        "Toujours vérifier ses sources et garder un esprit critique face aux informations",
      ],
      voixOff:
        "Pour résumer, la presse informe les citoyens, hiérarchise l'actualité sur sa une et dans ses rubriques, et emploie des types d'articles variés, du fait divers à l'éditorial. Un bon article répond aux cinq questions essentielles : qui, quoi, où, quand, pourquoi. Il faut toujours distinguer un fait, vérifiable, d'une opinion, qui reste un point de vue personnel. Enfin, garder un esprit critique et vérifier ses sources est indispensable pour ne pas se laisser tromper par de fausses informations.",
    },
  ],
  fiche: {
    intro:
      "La presse informe les citoyens à travers différents supports (écrit, radio, télévision, en ligne) et différents types d'articles. Comprendre son organisation, distinguer les faits des opinions et vérifier ses sources sont des compétences essentielles pour développer son esprit critique.",
    sections: [
      {
        titre: "L'organisation de la presse",
        points: [
          "Une : première page, présente les titres les plus importants du jour",
          "Rubriques : politique, société, sport, culture, international",
          "Article : titre, chapô, corps de l'article, légende (pour une image)",
        ],
      },
      {
        titre: "Les 5W et les types d'articles",
        points: [
          "Les 5W : Qui ? Quoi ? Où ? Quand ? Pourquoi ? (parfois + Comment ?)",
          "Fait divers, reportage, éditorial (opinion signée), interview",
        ],
      },
      {
        titre: "Fait et opinion",
        points: [
          "Fait : information vérifiable, objective",
          "Opinion : point de vue personnel, appréciation (« je pense que », « à mon avis »)",
          "Un article d'information doit distinguer clairement les deux",
        ],
      },
      {
        titre: "Vérifier ses sources et esprit critique",
        points: [
          "Source : origine d'une information (témoin, document, agence de presse)",
          "Fake news : fausse information, inventée ou déformée",
          "Réflexes : croiser les sources, vérifier auteur et date, comparer avec des médias fiables",
        ],
      },
    ],
    audio:
      "Fiche de révision : informer, s'informer, déformer. La presse informe les citoyens à travers différents supports : presse écrite, radio, télévision, presse en ligne. La une présente les titres les plus importants, et le journal s'organise en rubriques comme la politique ou le sport. Un article comprend un titre, un chapô, un corps de texte et parfois une légende. Un bon article répond aux cinq questions essentielles, les 5W : qui, quoi, où, quand et pourquoi. On distingue plusieurs types d'articles : le fait divers, le reportage, l'éditorial, qui exprime une opinion signée, et l'interview. Il est essentiel de distinguer un fait, information vérifiable, d'une opinion, point de vue personnel. Enfin, pour éviter les fausses informations, appelées fake news, il faut croiser ses sources, vérifier l'auteur et la date, et garder un esprit critique en toute circonstance.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce que la une d'un journal ?",
      verso: "La première page, qui présente les titres et images des articles les plus importants du jour.",
    },
    {
      recto: "Quels sont les éléments d'un article de presse ?",
      verso: "Le titre, le chapô (résumé), le corps de l'article, et parfois une légende pour une image.",
    },
    {
      recto: "Que signifient les 5W ?",
      verso: "Les cinq questions essentielles d'un article : Qui ? Quoi ? Où ? Quand ? Pourquoi ?",
    },
    {
      recto: "Qu'est-ce qu'un éditorial ?",
      verso: "Un article d'opinion signé, qui exprime le point de vue du journal sur un sujet.",
    },
    {
      recto: "Différence entre fait et opinion ?",
      verso: "Le fait est une information vérifiable et objective ; l'opinion est un point de vue personnel.",
    },
    {
      recto: "Qu'est-ce qu'une source d'information ?",
      verso: "L'origine d'une information : un témoin, un document, une agence de presse.",
    },
    {
      recto: "Qu'est-ce qu'une fake news ?",
      verso: "Une fausse information, inventée ou déformée, diffusée volontairement ou non.",
    },
    {
      recto: "Cite deux réflexes pour vérifier une information.",
      verso: "Croiser plusieurs sources fiables ; vérifier l'auteur et la date de publication.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La mission première de la presse est de :",
      choix: ["divertir uniquement", "informer les citoyens", "vendre des produits", "raconter des fictions"],
      bonneReponse: 1,
      explication: "Informer le public sur l'actualité est la mission première de la presse.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment s'appelle la première page d'un journal ?",
      choix: ["Le chapô", "La légende", "La une", "L'éditorial"],
      bonneReponse: 2,
      explication: "La une est la vitrine du journal, elle présente les titres les plus importants du jour.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois des cinq questions essentielles (les 5W) auxquelles répond un article d'information.",
      reponse: "Par exemple : Qui ? Quoi ? Où ? (on peut aussi citer Quand ? et Pourquoi ?)",
      explication: "Ces questions permettent de couvrir l'essentiel d'une information.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un fait divers relate en général :",
      choix: ["une opinion du journaliste", "un événement ponctuel, souvent local", "une interview de ministre", "un éditorial politique"],
      bonneReponse: 1,
      explication: "Le fait divers relate un événement isolé, comme un accident ou un incident.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« À mon avis, ce nouveau stade est une réussite. » Cette phrase est :",
      choix: ["un fait vérifiable", "une opinion", "une question", "une légende"],
      bonneReponse: 1,
      explication: "L'expression « à mon avis » signale clairement un point de vue personnel, donc une opinion.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre un fait et une opinion, avec un exemple pour chacun.",
      reponse: "Un fait est une information vérifiable et objective, par exemple « Le match a eu lieu samedi. » Une opinion est un point de vue personnel, par exemple « Ce match était le plus beau de la saison. »",
      explication: "Le fait peut être prouvé ou vérifié ; l'opinion dépend du jugement de celui qui l'exprime.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un éditorial et en quoi se distingue-t-il d'un article d'information classique ?",
      reponse: "Un éditorial est un article signé qui exprime une opinion, un point de vue du journal ou du journaliste sur un sujet d'actualité, alors qu'un article d'information classique cherche avant tout à rapporter des faits vérifiés, de façon la plus neutre possible.",
      explication: "L'éditorial assume son caractère subjectif, contrairement à l'article d'information.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que faut-il faire avant de croire une information trouvée sur internet ?",
      choix: [
        "La partager immédiatement à tout le monde",
        "Vérifier la source, l'auteur et croiser avec d'autres médias fiables",
        "Rien, si elle a beaucoup de « likes » c'est qu'elle est vraie",
        "Faire confiance uniquement au titre"
      ],
      bonneReponse: 1,
      explication: "La vérification des sources est indispensable pour éviter de propager de fausses informations.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi une image peut être trompeuse même si elle est authentique.",
      reponse: "Une image authentique peut être trompeuse si elle est sortie de son contexte : par exemple une photo ancienne présentée comme récente, ou une photo prise dans un autre pays présentée comme un événement local. La légende qui l'accompagne peut alors déformer la réalité, même sans que l'image elle-même soit truquée.",
      explication: "La manipulation ne concerne pas seulement des images truquées : le contexte et la légende jouent un rôle essentiel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un chapô (2 à 3 phrases) pour un article annonçant l'ouverture d'une nouvelle bibliothèque dans ta ville, en respectant la règle des 5W.",
      reponse: "Exemple de corrigé : « Depuis lundi, les habitants de la ville peuvent découvrir la nouvelle médiathèque municipale, installée place de la Mairie. Financé par la ville, cet équipement de 2000 mètres carrés doit permettre à tous les âges d'accéder gratuitement à la lecture et à la culture. »",
      explication: "On vérifie la présence d'au moins quatre des cinq W : quoi (ouverture d'une médiathèque), qui (la ville, les habitants), où (place de la Mairie), quand (depuis lundi), pourquoi (favoriser l'accès à la culture).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un article titre : « Une célébrité affirme que ce fruit guérit toutes les maladies. » Explique pourquoi il faut se méfier de cette information et comment la vérifier.",
      reponse: "Il faut se méfier car l'affirmation vient d'une célébrité et non d'un expert scientifique, et une affirmation aussi générale (« toutes les maladies ») est peu crédible sur le plan médical. Pour la vérifier, on peut chercher des études scientifiques sérieuses sur le sujet, consulter des sources médicales reconnues, et voir si d'autres médias fiables confirment ou démentent cette information.",
      explication: "La notoriété d'une personne ne garantit pas la fiabilité de ses propos, surtout hors de son domaine de compétence.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi dit-on parfois que la presse est le « quatrième pouvoir » ?",
      choix: [
        "Parce qu'elle a plus de pouvoir que le gouvernement",
        "Parce qu'elle surveille et informe sur l'action des pouvoirs politiques, économiques et judiciaires",
        "Parce qu'elle est financée par l'État",
        "Parce qu'elle existe depuis quatre siècles"
      ],
      bonneReponse: 1,
      explication: "La presse joue un rôle de contre-pouvoir en informant les citoyens sur l'action des autres pouvoirs.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le chapô d'un article est :",
      choix: ["le titre principal", "un court résumé au début de l'article", "une photo", "la signature du journaliste"],
      bonneReponse: 1,
      explication: "Le chapô résume l'essentiel de l'article avant son développement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'une légende, dans un article de presse ?",
      reponse: "C'est le texte qui accompagne et explique une photo ou une image.",
      explication: "La légende aide le lecteur à comprendre le contenu de l'image.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi est-il important de croiser plusieurs sources avant de croire une information ?",
      reponse: "Parce qu'une seule source peut se tromper, être partiale ou diffuser une fausse information ; en croisant plusieurs sources fiables, on peut vérifier la cohérence et la véracité de l'information.",
      explication: "C'est un réflexe essentiel d'esprit critique face à l'information.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une interview retranscrit généralement :",
      choix: ["un discours indirect", "les questions et réponses au discours direct", "uniquement des opinions du journaliste", "des statistiques uniquement"],
      bonneReponse: 1,
      explication: "L'interview rapporte fidèlement les paroles échangées, souvent au discours direct.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple d'expression qui signale généralement une opinion plutôt qu'un fait.",
      reponse: "Par exemple : « je pense que », « à mon avis », « il me semble que » (ou un adjectif évaluatif comme « magnifique », « scandaleux »).",
      explication: "Ces expressions marquent l'intervention du jugement personnel de celui qui s'exprime.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Informer, s'informer, déformer",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une rubrique de journal est :",
          choix: ["la première page", "une catégorie thématique (sport, culture...)", "une légende d'image", "une source d'information"],
          bonneReponse: 1,
          explication: "Les rubriques organisent le journal par thèmes : politique, société, sport, culture...",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite les cinq questions essentielles d'un article d'information (les 5W).",
          reponse: "Qui ? Quoi ? Où ? Quand ? Pourquoi ?",
          explication: "On peut y ajouter une sixième question : Comment ?",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel type d'article exprime une opinion signée par le journal ?",
          choix: ["Le fait divers", "L'éditorial", "L'interview", "La légende"],
          bonneReponse: 1,
          explication: "L'éditorial est un article d'opinion, contrairement à l'article d'information neutre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre un article de reportage et un fait divers.",
          reponse: "Le fait divers relate un événement ponctuel et souvent bref, généralement local, comme un accident. Le reportage est une enquête plus approfondie, menée sur le terrain, souvent enrichie de témoignages et d'une analyse plus poussée du sujet.",
          explication: "Le reportage suppose un travail d'enquête plus long que le simple compte-rendu d'un fait divers.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi une information partagée massivement sur les réseaux sociaux n'est-elle pas forcément vraie ?",
          reponse: "Parce que la popularité d'une information (nombre de partages, de « likes ») ne garantit en rien sa véracité : une fausse information peut se diffuser très rapidement, parfois plus vite qu'une information vraie, sans avoir été vérifiée par des professionnels.",
          explication: "Il faut distinguer la popularité d'une information de sa fiabilité, qui dépend de la vérification des sources.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court article de fait divers (4 à 5 phrases) sur un thème de ton choix, en respectant la règle des 5W.",
          reponse: "Exemple de corrigé : « Un chat coincé pendant deux jours dans un arbre. Hier après-midi, les pompiers de la ville sont intervenus rue des Lilas pour secourir un chat resté bloqué en haut d'un arbre depuis deux jours. Alertés par les voisins inquiets, ils ont utilisé une grande échelle pour récupérer l'animal, sain et sauf. Le chat a aussitôt retrouvé sa propriétaire, soulagée. »",
          explication: "On vérifie que le texte répond aux 5W : qui (les pompiers, le chat, la propriétaire), quoi (sauvetage), où (rue des Lilas), quand (hier après-midi), pourquoi/comment (le chat était coincé).",
        },
      ],
    },
    {
      titre: "Examen 2 — Informer, s'informer, déformer",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un fait est une information :",
          choix: ["forcément fausse", "vérifiable et objective", "toujours une opinion", "impossible à prouver"],
          bonneReponse: 1,
          explication: "Le fait se distingue de l'opinion par son caractère vérifiable et objectif.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une fake news ?",
          reponse: "Une fausse information, inventée ou déformée, diffusée volontairement ou par erreur.",
          explication: "Les fake news peuvent circuler très vite, notamment sur les réseaux sociaux.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que faut-il vérifier en priorité face à une information douteuse trouvée en ligne ?",
          choix: [
            "Le nombre de partages",
            "L'auteur, la date et la fiabilité de la source",
            "La couleur du site internet",
            "Rien, il faut la croire par principe"
          ],
          bonneReponse: 1,
          explication: "Vérifier l'auteur, la date et croiser avec d'autres sources fiables est le réflexe essentiel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi le titre d'un article doit être choisi avec soin.",
          reponse: "Parce que le titre est souvent la seule partie que beaucoup de lecteurs voient ou lisent réellement : un titre trompeur, trop sensationnel ou déformant les faits peut donner une impression fausse de l'article, même si le contenu est plus nuancé.",
          explication: "On parle parfois de titre « putaclic » quand il exagère volontairement pour attirer des clics, au détriment de l'exactitude.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Distingue le fait de l'opinion dans ces deux phrases : « Le concert a duré deux heures. » / « C'était le meilleur concert de l'année. »",
          reponse: "« Le concert a duré deux heures » est un fait, vérifiable objectivement (par exemple avec les horaires). « C'était le meilleur concert de l'année » est une opinion, un jugement personnel qui dépend des goûts de celui qui l'exprime.",
          explication: "La durée est mesurable ; la qualité « meilleur » dépend d'une appréciation subjective.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade partage une information choquante trouvée sur un site inconnu, sans vérifier. Explique-lui les risques de ce comportement et donne-lui deux conseils.",
          reponse: "Le risque est de diffuser une fausse information (fake news), de tromper d'autres personnes et de perdre en crédibilité si l'information s'avère fausse. Conseils : vérifier la fiabilité du site et de l'auteur avant de partager, et croiser l'information avec au moins un autre média reconnu avant de la relayer.",
          explication: "La diffusion rapide et non vérifiée d'informations est l'un des principaux mécanismes de propagation des fake news.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La presse informe les citoyens à travers différents supports : presse écrite, radio, télévision, presse en ligne.",
    "La une est la vitrine du journal ; le journal s'organise en rubriques (politique, sport, culture...).",
    "Un article contient un titre, un chapô, un corps de texte, parfois une légende.",
    "Les 5W : Qui ? Quoi ? Où ? Quand ? Pourquoi ? — questions essentielles d'un bon article.",
    "Distinguer fait (vérifiable, objectif) et opinion (point de vue personnel, subjectif).",
    "Toujours croiser ses sources, vérifier auteur et date, et garder un esprit critique face aux fake news.",
  ],
},
{
  slug: "recit-fantastique",
  titre: "Le récit fantastique",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Découvrir le récit fantastique : l'hésitation entre explication rationnelle et surnaturel, ses différences avec le merveilleux et la science-fiction, ses procédés d'écriture et ses grands auteurs, pour savoir écrire soi-même un début de récit fantastique.",
  objectifs: [
    "Définir le fantastique : l'hésitation entre rationnel et surnaturel",
    "Distinguer le fantastique du merveilleux et de la science-fiction",
    "Repérer les procédés d'écriture : modalisateurs, lexique de la peur, point de vue interne",
    "Connaître les grands auteurs du genre : Maupassant, Poe, Gautier",
    "Écrire un début de récit fantastique efficace",
  ],
  slides: [
    {
      titre: "C'est quoi, le fantastique ?",
      illustration: "🕯️",
      visuel: "Rêve... ou réalité ?",
      contenu: [
        "Un récit qui commence dans un monde réaliste, ordinaire",
        "Un événement étrange surgit et dérange cet ordre",
        "Deux explications possibles : rationnelle OU surnaturelle",
        "Ni le héros ni le lecteur ne peuvent trancher",
      ],
      voixOff:
        "Le récit fantastique commence toujours dans un monde ordinaire, réaliste, qui ressemble au nôtre. Puis un événement étrange surgit : un objet bouge tout seul, une ombre apparaît. Deux explications sont possibles : une explication rationnelle, comme le rêve ou la folie, ou une explication surnaturelle, comme un fantôme. Et justement, ni le héros ni le lecteur ne peuvent trancher.",
    },
    {
      titre: "L'hésitation fantastique (Todorov)",
      illustration: "⚖️",
      visuel: "Hallucination ↔ Fantôme",
      contenu: [
        "Le critique Tzvetan Todorov a défini le fantastique par l'hésitation",
        "Le fantastique dure tant que le doute dure",
        "« Ai-je rêvé ? Suis-je fou ? Ou est-ce réel ? »",
        "Si une explication l'emporte, on sort du fantastique",
      ],
      voixOff:
        "Le critique Tzvetan Todorov a proposé une définition devenue célèbre : le fantastique, c'est le temps de l'hésitation. Tant que le personnage et le lecteur se demandent s'il s'agit d'une hallucination ou d'un vrai phénomène surnaturel, on est dans le fantastique. Dès qu'une explication l'emporte définitivement, le doute disparaît, et on sort du genre.",
    },
    {
      titre: "Fantastique ≠ merveilleux",
      illustration: "🧚",
      visuel: "« Il était une fois... » ≠ « Cette nuit-là... »",
      contenu: [
        "Merveilleux (contes) : le surnaturel est normal, accepté par tous",
        "Une fée ou un ogre n'étonnent personne dans un conte",
        "Fantastique : le surnaturel fait irruption dans le réel et inquiète",
        "Le merveilleux émerveille, le fantastique fait douter et frissonner",
      ],
      voixOff:
        "Attention à ne pas confondre fantastique et merveilleux. Dans un conte merveilleux, comme Cendrillon, le surnaturel est accepté par tout le monde : une fée n'étonne personne. Dans le fantastique, au contraire, le surnaturel fait irruption dans un monde réaliste et provoque l'inquiétude. Le merveilleux émerveille, le fantastique fait douter et frissonner.",
    },
    {
      titre: "Fantastique ≠ science-fiction",
      illustration: "🚀",
      visuel: "Inexplicable ≠ expliqué par la science",
      contenu: [
        "Science-fiction : l'étrange est expliqué par des sciences ou techniques imaginaires",
        "Vaisseaux, robots, voyages dans le temps : un futur possible",
        "Fantastique : l'étrange reste inexpliqué et angoissant",
        "SF = « et si la science permettait... » ; fantastique = « et si l'impossible surgissait... »",
      ],
      voixOff:
        "Autre voisin à distinguer : la science-fiction. Dans la science-fiction, les événements étranges sont expliqués par des sciences ou des techniques imaginaires : robots, vaisseaux, voyages dans le temps. On imagine un futur possible. Dans le fantastique, rien n'explique l'étrange : il surgit dans notre monde et reste angoissant, sans justification scientifique.",
    },
    {
      titre: "Les ingrédients du récit fantastique",
      illustration: "🌫️",
      visuel: "Nuit + solitude + objet maudit",
      contenu: [
        "Un cadre réaliste, souvent nocturne et isolé (vieille maison, brouillard)",
        "Des thèmes récurrents : fantôme, double, objet maudit, folie, mort",
        "Une montée progressive de l'angoisse",
        "Une fin souvent ouverte : le doute n'est pas levé",
      ],
      voixOff:
        "Le récit fantastique a ses ingrédients favoris. Un cadre réaliste mais propice à la peur : la nuit, une vieille maison isolée, le brouillard. Des thèmes récurrents : le fantôme, le double, l'objet maudit, la folie, la mort. L'angoisse monte progressivement, et la fin reste souvent ouverte : le lecteur referme le livre sans savoir la vérité.",
    },
    {
      titre: "Procédé n°1 : les modalisateurs",
      illustration: "🤔",
      visuel: "« Il me sembla que... »",
      contenu: [
        "Modalisateurs = mots qui expriment le doute, l'incertitude",
        "« peut-être », « il me sembla », « comme si », « je crus voir »",
        "Verbes de perception au conditionnel ou avec « sembler », « paraître »",
        "Ils entretiennent l'hésitation : rien n'est jamais affirmé",
      ],
      voixOff:
        "Premier procédé d'écriture : les modalisateurs. Ce sont tous les mots qui expriment le doute et l'incertitude : peut-être, il me sembla, comme si, je crus voir. Grâce à eux, le narrateur n'affirme jamais rien : il croit voir, il pense entendre. C'est exactement ce qui entretient l'hésitation fantastique chez le lecteur.",
    },
    {
      titre: "Procédé n°2 : la peur et le point de vue interne",
      illustration: "😱",
      visuel: "JE tremble, JE doute",
      contenu: [
        "Champ lexical de la peur : frisson, terreur, angoisse, glacé, trembler...",
        "Récit souvent à la première personne : point de vue interne",
        "Le lecteur ne sait que ce que le narrateur perçoit — il doute avec lui",
        "Ponctuation expressive : points d'exclamation, de suspension, questions",
      ],
      voixOff:
        "Deuxième famille de procédés : tout ce qui fait ressentir la peur. Le champ lexical de la peur d'abord : frisson, terreur, angoisse, glacé. Ensuite le point de vue interne : le récit est souvent raconté à la première personne, si bien que le lecteur ne sait que ce que le narrateur perçoit, et doute avec lui. Enfin, la ponctuation expressive, exclamations et points de suspension, traduit le trouble du personnage.",
    },
    {
      titre: "Les grands auteurs du fantastique",
      illustration: "✒️",
      visuel: "Maupassant • Poe • Gautier",
      contenu: [
        "Guy de Maupassant : Le Horla (1887), La Main — le doute et la folie",
        "Edgar Allan Poe (américain) : Le Chat noir, La Chute de la maison Usher",
        "Théophile Gautier : La Cafetière, Le Pied de momie",
        "Aussi : Prosper Mérimée (La Vénus d'Ille), au XIXe siècle, l'âge d'or du genre",
      ],
      voixOff:
        "Le fantastique connaît son âge d'or au dix-neuvième siècle. En France, Guy de Maupassant écrit Le Horla, le journal d'un homme persuadé qu'un être invisible vit près de lui : folie ou créature réelle ? Théophile Gautier signe La Cafetière et Le Pied de momie, et Prosper Mérimée La Vénus d'Ille. Aux États-Unis, Edgar Allan Poe, traduit par Baudelaire, publie Le Chat noir et La Chute de la maison Usher.",
    },
    {
      titre: "Écrire un début de récit fantastique",
      illustration: "📝",
      visuel: "Réel → détail étrange → doute",
      contenu: [
        "1. Installer un cadre réaliste et précis (lieu, moment, narrateur « je »)",
        "2. Glisser un premier détail étrange, discret",
        "3. Utiliser des modalisateurs et le lexique de la peur",
        "4. Faire douter le narrateur : « avais-je rêvé ? »",
      ],
      voixOff:
        "Pour écrire un début de récit fantastique, suis quatre étapes. D'abord, installe un cadre réaliste et précis, de préférence avec un narrateur qui dit je. Ensuite, glisse un premier détail étrange, discret : un bruit, un reflet, un objet déplacé. Utilise des modalisateurs et le vocabulaire de la peur pour créer le doute. Enfin, fais hésiter ton narrateur : avait-il rêvé, ou était-ce bien réel ?",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Fantastique = surnaturel qui surgit dans le réel + hésitation (Todorov)",
        "Merveilleux : surnaturel accepté ; SF : étrange expliqué par la science",
        "Procédés : modalisateurs, lexique de la peur, point de vue interne, fin ouverte",
        "Auteurs clés : Maupassant, Poe, Gautier (XIXe siècle)",
      ],
      voixOff:
        "Résumons. Le fantastique, c'est l'irruption du surnaturel dans un monde réaliste, et surtout l'hésitation entre explication rationnelle et surnaturelle, comme l'a définie Todorov. Il se distingue du merveilleux, où le surnaturel est accepté, et de la science-fiction, où l'étrange est expliqué par la science. Ses armes : les modalisateurs, le lexique de la peur, le point de vue interne et la fin ouverte. Ses maîtres : Maupassant, Poe et Gautier. Tu es prêt à frissonner... et à écrire !",
    },
  ],
  fiche: {
    intro:
      "Le récit fantastique met en scène l'irruption d'un événement étrange, apparemment surnaturel, dans un monde réaliste. Son ressort essentiel est l'hésitation : le héros et le lecteur ne savent pas s'il faut croire à une explication rationnelle ou surnaturelle.",
    sections: [
      {
        titre: "Définition (d'après Todorov)",
        points: [
          "Cadre réaliste + événement inexplicable = fantastique",
          "Hésitation entre explication rationnelle (rêve, folie, illusion) et surnaturelle (fantôme, malédiction)",
          "Le fantastique dure tant que le doute dure ; la fin reste souvent ouverte",
        ],
      },
      {
        titre: "Fantastique, merveilleux, science-fiction",
        points: [
          "Merveilleux (contes) : le surnaturel est accepté comme normal (fées, ogres) — personne ne s'en étonne",
          "Science-fiction : l'étrange est expliqué par des sciences ou techniques imaginaires (robots, voyage temporel)",
          "Fantastique : l'étrange reste inexpliqué, dans notre monde, et provoque l'angoisse",
        ],
      },
      {
        titre: "Les procédés d'écriture",
        points: [
          "Modalisateurs du doute : « il me sembla », « peut-être », « comme si », « je crus voir »",
          "Champ lexical de la peur : frisson, terreur, angoisse, glacé, trembler",
          "Point de vue interne, souvent à la 1re personne : le lecteur doute avec le narrateur",
          "Ponctuation expressive (! ... ?) et montée progressive de l'angoisse",
        ],
      },
      {
        titre: "Cadres et thèmes récurrents",
        points: [
          "La nuit, la solitude, la vieille demeure, le brouillard, l'orage",
          "Le fantôme, le double, l'objet maudit ou animé, la folie, la mort",
        ],
      },
      {
        titre: "Auteurs et œuvres clés (XIXe siècle)",
        points: [
          "Guy de Maupassant : Le Horla (1887), La Main",
          "Edgar Allan Poe : Le Chat noir, La Chute de la maison Usher (traduit par Baudelaire)",
          "Théophile Gautier : La Cafetière, Le Pied de momie",
          "Prosper Mérimée : La Vénus d'Ille",
        ],
      },
      {
        titre: "Écrire un début de récit fantastique",
        points: [
          "1. Cadre réaliste précis, narrateur à la 1re personne",
          "2. Premier détail étrange, discret",
          "3. Modalisateurs + lexique de la peur pour installer le doute",
          "4. Le narrateur hésite : rêve, folie... ou réalité ?",
        ],
      },
    ],
    audio:
      "Fiche de révision : le récit fantastique. Le fantastique naît de l'irruption d'un événement étrange dans un monde réaliste. Selon le critique Todorov, il repose sur l'hésitation : le héros et le lecteur balancent entre une explication rationnelle, comme le rêve ou la folie, et une explication surnaturelle, comme le fantôme. Il ne faut pas le confondre avec le merveilleux des contes, où le surnaturel est accepté par tous, ni avec la science-fiction, où l'étrange est expliqué par des sciences imaginaires. Pour créer le doute, les auteurs emploient des modalisateurs comme il me sembla ou peut-être, le champ lexical de la peur, et un point de vue interne, souvent à la première personne, qui fait douter le lecteur avec le narrateur. Les maîtres du genre, au dix-neuvième siècle, sont Maupassant avec Le Horla, Edgar Allan Poe avec Le Chat noir, et Théophile Gautier avec La Cafetière. Pour écrire un début fantastique : cadre réaliste, détail étrange, doute.",
  },
  memoCards: [
    {
      recto: "Définition du fantastique ?",
      verso: "L'irruption d'un événement apparemment surnaturel dans un monde réaliste, avec hésitation entre explication rationnelle et surnaturelle.",
    },
    {
      recto: "Qu'est-ce que l'hésitation fantastique (Todorov) ?",
      verso: "Le doute du héros et du lecteur : rêve, folie... ou vrai surnaturel ? Le fantastique dure tant que le doute dure.",
    },
    {
      recto: "Fantastique ou merveilleux ?",
      verso: "Merveilleux : surnaturel accepté par tous (contes de fées). Fantastique : surnaturel qui dérange le réel et inquiète.",
    },
    {
      recto: "Fantastique ou science-fiction ?",
      verso: "SF : l'étrange est expliqué par des sciences ou techniques imaginaires. Fantastique : l'étrange reste inexpliqué.",
    },
    {
      recto: "Qu'est-ce qu'un modalisateur ?",
      verso: "Un mot qui exprime le doute : « il me sembla », « peut-être », « comme si », « je crus voir ».",
    },
    {
      recto: "Pourquoi le point de vue interne ?",
      verso: "Le lecteur ne perçoit que ce que voit le narrateur (souvent « je ») : il doute et a peur avec lui.",
    },
    {
      recto: "Trois mots du champ lexical de la peur ?",
      verso: "Par exemple : frisson, terreur, angoisse (aussi : glacé, trembler, épouvante).",
    },
    {
      recto: "Qui a écrit Le Horla ?",
      verso: "Guy de Maupassant (1887) : le journal d'un homme qui se croit hanté par un être invisible.",
    },
    {
      recto: "Cite un auteur américain du fantastique.",
      verso: "Edgar Allan Poe (Le Chat noir, La Chute de la maison Usher), traduit en français par Baudelaire.",
    },
    {
      recto: "Les 4 étapes d'un début de récit fantastique ?",
      verso: "1. Cadre réaliste. 2. Détail étrange. 3. Modalisateurs + lexique de la peur. 4. Doute du narrateur.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un récit fantastique, l'histoire commence dans un monde :",
      choix: ["entièrement magique", "réaliste, semblable au nôtre", "futuriste", "sans personnages"],
      bonneReponse: 1,
      explication:
        "Le fantastique a besoin d'un cadre réaliste : c'est l'irruption de l'étrange dans ce monde ordinaire qui crée l'inquiétude.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel auteur a écrit Le Horla ?",
      choix: ["Edgar Allan Poe", "Théophile Gautier", "Guy de Maupassant", "Victor Hugo"],
      bonneReponse: 2,
      explication: "Le Horla (1887) est la nouvelle fantastique la plus célèbre de Guy de Maupassant.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois mots appartenant au champ lexical de la peur.",
      reponse: "Par exemple : frisson, terreur, angoisse (ou : épouvante, glacé, trembler, effroi).",
      explication: "Le champ lexical de la peur est l'un des principaux procédés du récit fantastique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Il était une fois une fée qui vivait dans la forêt. » Ce début appartient au :",
      choix: ["fantastique", "merveilleux", "récit policier", "récit de science-fiction"],
      bonneReponse: 1,
      explication:
        "« Il était une fois » et la présence naturelle d'une fée signalent le merveilleux : le surnaturel y est accepté sans étonnement.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans la phrase « Il me sembla que le portrait avait bougé », quel procédé fantastique est utilisé ?",
      choix: ["Une comparaison", "Un modalisateur", "Une énumération", "Un dialogue"],
      bonneReponse: 1,
      explication:
        "« Il me sembla que » est un modalisateur : le narrateur n'affirme pas que le portrait a bougé, il entretient le doute.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique, en une ou deux phrases, la définition du fantastique selon Todorov.",
      reponse: "Pour Todorov, le fantastique repose sur l'hésitation du personnage et du lecteur face à un événement étrange : est-ce une illusion (rêve, folie) ou un vrai phénomène surnaturel ? Le fantastique dure tant que ce doute n'est pas levé.",
      explication: "Si l'explication rationnelle l'emporte, ou si le surnaturel est prouvé, on sort du fantastique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Lis cet extrait inventé : « Minuit sonna. Je crus entendre, derrière la porte du grenier, comme un pas très léger. Mais peut-être n'était-ce que le vent... » Relève deux modalisateurs et explique leur effet.",
      reponse: "Les modalisateurs sont « je crus entendre », « comme » et « peut-être » (deux suffisent). Ils montrent que le narrateur n'est sûr de rien : le lecteur hésite avec lui entre une explication banale (le vent) et une présence inquiétante.",
      explication: "Les modalisateurs sont le moteur de l'hésitation fantastique : ils empêchent toute certitude.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pourquoi le récit fantastique est-il souvent écrit à la première personne ?",
      choix: [
        "Parce que c'est plus court",
        "Pour que le lecteur partage les doutes et la peur du narrateur",
        "Parce que les auteurs racontent leur vraie vie",
        "Pour multiplier les points de vue",
      ],
      bonneReponse: 1,
      explication:
        "Le point de vue interne limite le lecteur aux perceptions du narrateur : impossible de vérifier ce qui est réel, le doute est total.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Classe ces trois situations dans le bon genre (fantastique, merveilleux ou science-fiction) en justifiant : 1. Un ogre parle à un chat botté. 2. En 2250, des robots explorent Mars. 3. Un homme trouve chaque matin sa carafe vide, sans savoir s'il boit en dormant ou si un être invisible vit chez lui.",
      reponse: "1. Merveilleux : le surnaturel (ogre, chat qui parle) est accepté comme normal. 2. Science-fiction : l'étrange est expliqué par la technique dans un futur imaginaire. 3. Fantastique : c'est la situation du Horla de Maupassant, l'hésitation entre explication rationnelle (il boit en dormant) et surnaturelle (un être invisible) n'est pas tranchée.",
      explication: "Le critère décisif est le statut du surnaturel : accepté (merveilleux), expliqué (SF) ou douteux (fantastique).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse ce court extrait inventé : « Ma main tremblait. La statuette, je le jure, avait tourné la tête vers moi — à moins que la fièvre ne m'ait égaré. Une sueur glacée me couvrit le front. » Relève : a) un élément du champ lexical de la peur ; b) le passage qui maintient l'hésitation fantastique.",
      reponse: "a) « Ma main tremblait » et « une sueur glacée » relèvent du champ lexical de la peur. b) « à moins que la fièvre ne m'ait égaré » maintient l'hésitation : l'explication rationnelle (la fièvre, le délire) reste possible face à l'explication surnaturelle (la statuette animée).",
      explication: "Un bon texte fantastique fait toujours coexister les deux explications sans trancher.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Laquelle de ces fins conserve le mieux le registre fantastique ?",
      choix: [
        "Le héros découvre que son voisin faisait les bruits pour lui faire peur.",
        "Une fée apparaît et explique tout au héros.",
        "Le héros ne saura jamais si la lettre s'est déplacée seule ou s'il l'a bougée dans son sommeil.",
        "Des scientifiques prouvent que la maison était traversée d'ondes magnétiques.",
      ],
      bonneReponse: 2,
      explication:
        "Le fantastique exige que le doute ne soit pas levé. Les autres fins donnent une explication rationnelle, merveilleuse ou scientifique : elles font sortir du genre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris un début de récit fantastique de 4 à 6 phrases : cadre réaliste, un détail étrange, au moins deux modalisateurs et un mot du champ lexical de la peur.",
      reponse: "Exemple de corrigé : « Ce soir de novembre, je corrigeais mes copies dans la maison silencieuse de ma grand-mère. Vers onze heures, il me sembla percevoir un grattement derrière le mur de la bibliothèque. Je posai mon stylo, le cœur serré d'une sourde angoisse. Peut-être n'était-ce qu'une souris ; pourtant, le vieux miroir parut se troubler, comme si une silhouette y glissait. Je me frottai les yeux : avais-je rêvé ? »",
      explication: "On vérifie les critères : cadre réaliste (maison, copies, novembre), détail étrange (grattement, miroir), modalisateurs (« il me sembla », « peut-être », « parut », « comme si »), lexique de la peur (« angoisse », « cœur serré »), doute final.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le ressort essentiel du fantastique est :",
      choix: ["le rire", "l'hésitation entre rationnel et surnaturel", "la magie acceptée par tous", "le progrès scientifique"],
      bonneReponse: 1,
      explication: "C'est la définition de Todorov : le fantastique dure tant que le doute dure.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la grande différence entre le fantastique et le merveilleux ?",
      reponse: "Dans le merveilleux, le surnaturel est accepté comme normal ; dans le fantastique, il fait irruption dans un monde réaliste et provoque doute et inquiétude.",
      explication: "Personne ne s'étonne d'une fée dans un conte ; tout le monde s'inquiète d'un miroir hanté dans une nouvelle fantastique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne deux exemples de modalisateurs.",
      reponse: "Par exemple : « il me sembla », « peut-être » (ou « comme si », « je crus voir », « sans doute »).",
      explication: "Les modalisateurs expriment le doute et empêchent toute certitude.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Associe correctement auteur et œuvre :",
      choix: [
        "Maupassant — Le Chat noir",
        "Poe — Le Horla",
        "Gautier — La Cafetière",
        "Poe — Le Pied de momie",
      ],
      bonneReponse: 2,
      explication: "La Cafetière est de Théophile Gautier. Le Horla est de Maupassant, Le Chat noir de Poe, Le Pied de momie de Gautier.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi la fin d'un récit fantastique est-elle souvent ouverte ?",
      reponse: "Parce que lever le doute ferait sortir du fantastique : la fin ouverte laisse le lecteur hésiter entre l'explication rationnelle et l'explication surnaturelle.",
      explication: "Le doute non résolu est la signature du genre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le récit fantastique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le fantastique connaît son âge d'or :",
          choix: ["au Moyen Âge", "au XVIIe siècle", "au XIXe siècle", "au XXIe siècle"],
          bonneReponse: 2,
          explication: "Le XIXe siècle est le grand siècle du fantastique : Maupassant, Poe, Gautier, Mérimée.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite deux thèmes récurrents du récit fantastique.",
          reponse: "Par exemple : le fantôme et l'objet maudit (ou : le double, la folie, la mort, la maison hantée).",
          explication: "Ces thèmes permettent l'irruption de l'inexplicable dans le quotidien.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« En 2300, le professeur Lan répara le moteur temporel de sa navette. » Pourquoi cette phrase n'est-elle PAS fantastique ?",
          choix: [
            "Parce qu'il n'y a pas de peur",
            "Parce que l'étrange y est expliqué par une technique imaginaire : c'est de la science-fiction",
            "Parce qu'elle est au passé simple",
            "Parce qu'il y a un personnage savant",
          ],
          bonneReponse: 1,
          explication: "Machine temporelle, futur, technique imaginaire : tous les indices de la science-fiction, où l'étrange est expliqué.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans l'extrait inventé « Je crus distinguer, dans l'ombre du couloir, une forme qui n'avait rien d'humain ; la terreur me cloua sur place », relève un modalisateur et un mot du champ lexical de la peur.",
          reponse: "Modalisateur : « je crus distinguer ». Champ lexical de la peur : « la terreur » (on peut aussi accepter « me cloua sur place » comme manifestation physique de la peur).",
          explication: "Le modalisateur maintient le doute sur la réalité de la forme ; le lexique de la peur fait partager l'angoisse du narrateur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi le point de vue interne renforce l'effet fantastique.",
          reponse: "Avec le point de vue interne, souvent à la première personne, le lecteur ne connaît que les perceptions et les pensées du narrateur. Il ne peut pas vérifier les faits de l'extérieur : si le narrateur doute ou délire, le lecteur doute avec lui.",
          explication: "Impossible de trancher entre hallucination et réalité quand on ne voit que par les yeux du personnage.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige la suite (3 à 4 phrases) de ce début, en conservant le registre fantastique : « La vieille pendule du salon s'arrêta à minuit précise. »",
          reponse: "Exemple de corrigé : « Je voulus la remonter, mais mes doigts se glacèrent au contact du bois : il me sembla qu'un souffle traversait la pièce close. Peut-être la fenêtre était-elle mal fermée. Pourtant, dans le silence, je crus entendre la pendule battre de nouveau — non pas des secondes, mais comme les pulsations sourdes d'un cœur. Je reculai, saisi d'effroi, sans oser me retourner. »",
          explication: "On attend : des modalisateurs (« il me sembla », « peut-être », « je crus », « comme »), du lexique de la peur (« glacèrent », « effroi »), le maintien du doute entre explication rationnelle et surnaturelle.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le récit fantastique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel critique a défini le fantastique par l'hésitation ?",
          choix: ["Baudelaire", "Tzvetan Todorov", "Maupassant", "Lejeune"],
          bonneReponse: 1,
          explication: "Tzvetan Todorov a défini le fantastique comme le temps de l'hésitation entre explication rationnelle et surnaturelle.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Associe chaque auteur à une de ses œuvres : Maupassant, Poe, Gautier.",
          reponse: "Maupassant : Le Horla (ou La Main). Poe : Le Chat noir (ou La Chute de la maison Usher). Gautier : La Cafetière (ou Le Pied de momie).",
          explication: "Trois maîtres du fantastique au XIXe siècle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel élément n'appartient PAS au cadre typique du récit fantastique ?",
          choix: ["Une vieille demeure isolée", "La nuit et le brouillard", "Un royaume peuplé de dragons familiers", "La solitude du héros"],
          bonneReponse: 2,
          explication: "Un royaume où les dragons sont familiers relève du merveilleux : le surnaturel y est accepté, il n'y a pas d'hésitation.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans Le Horla, le narrateur trouve sa carafe d'eau vide chaque matin. Quelles sont les deux explications entre lesquelles il hésite ?",
          reponse: "L'explication rationnelle : il boit lui-même en dormant, il est somnambule ou fou. L'explication surnaturelle : un être invisible, le Horla, vit auprès de lui et boit à sa place.",
          explication: "Cette hésitation jamais tranchée fait du Horla le modèle du récit fantastique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Transforme cette phrase neutre en phrase fantastique à l'aide d'un modalisateur et d'un mot de peur : « La porte s'est ouverte. »",
          reponse: "Exemple de corrigé : « Il me sembla que la porte s'ouvrait lentement, seule, et un frisson d'épouvante me parcourut. »",
          explication: "Le modalisateur (« il me sembla ») retire toute certitude ; le lexique de la peur (« frisson », « épouvante ») installe l'angoisse.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade termine son récit ainsi : « En fait, c'était mon frère qui bougeait les meubles pour me faire une blague. » Explique-lui pourquoi sa fin détruit le fantastique et propose-lui une fin plus adaptée.",
          reponse: "Sa fin donne une explication rationnelle certaine : le doute est levé, on sort du fantastique. Une fin adaptée maintiendrait l'hésitation, par exemple : « Mon frère jura n'avoir jamais quitté sa chambre. Aujourd'hui encore, je ne sais si mes yeux m'ont trompé cette nuit-là. »",
          explication: "La règle d'or du genre : ne jamais trancher entre le rationnel et le surnaturel.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le fantastique = un événement apparemment surnaturel qui surgit dans un monde réaliste.",
    "Définition de Todorov : le fantastique repose sur l'hésitation entre explication rationnelle et surnaturelle ; il dure tant que le doute dure.",
    "Merveilleux : surnaturel accepté (contes) ; science-fiction : étrange expliqué par la science ; fantastique : étrange inexpliqué et inquiétant.",
    "Procédés clés : modalisateurs (« il me sembla », « peut-être »), champ lexical de la peur, point de vue interne à la 1re personne, fin ouverte.",
    "Auteurs à connaître : Maupassant (Le Horla), Poe (Le Chat noir), Gautier (La Cafetière) — XIXe siècle.",
    "Erreur classique à éviter : confondre fantastique et merveilleux, ou terminer son récit par une explication certaine qui lève le doute.",
  ],
},
{
  slug: "roman-realiste",
  titre: "Le roman réaliste et la nouvelle",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Découvrir le mouvement réaliste du XIXe siècle : son ambition de peindre la société telle qu'elle est, ses grands romanciers, ainsi que la nouvelle réaliste, forme brève construite autour d'une chute.",
  objectifs: [
    "Définir le réalisme : peindre la société avec exactitude et vraisemblance",
    "Repérer les procédés du réalisme : description précise, typique, narrateur omniscient",
    "Connaître les grands auteurs réalistes : Balzac, Flaubert, Zola, Maupassant",
    "Distinguer le roman de la nouvelle, notamment grâce à la chute",
    "Analyser un extrait réaliste ou une nouvelle en identifiant ses procédés",
  ],
  slides: [
    {
      titre: "Qu'est-ce que le réalisme ?",
      illustration: "🏙️",
      visuel: "Peindre la société telle qu'elle est",
      contenu: [
        "Mouvement littéraire du XIXe siècle (à partir de 1850 environ)",
        "Ambition : représenter la société avec exactitude, sans l'idéaliser",
        "S'oppose au romantisme, qui privilégiait les sentiments exaltés et l'exceptionnel",
        "Les romanciers réalistes se documentent, observent, enquêtent",
      ],
      voixOff:
        "Le réalisme est un mouvement littéraire qui se développe en France à partir du milieu du dix-neuvième siècle. Son ambition est de représenter la société telle qu'elle est réellement, sans l'idéaliser ni l'enjoliver. Il s'oppose au romantisme, qui privilégiait les sentiments exaltés et les héros exceptionnels. Les romanciers réalistes observent, se documentent et enquêtent avant d'écrire, comme de véritables témoins de leur époque.",
    },
    {
      titre: "Peindre toutes les couches de la société",
      illustration: "👥",
      visuel: "Paysans, ouvriers, bourgeois, aristocrates",
      contenu: [
        "Les réalistes racontent la vie de personnages ordinaires, pas seulement des héros",
        "Ils montrent toutes les classes sociales : paysans, ouvriers, bourgeois",
        "Les personnages sont souvent des « types » représentatifs d'un milieu",
        "Les décors sont précis et reconnaissables : villes, campagnes, usines",
      ],
      voixOff:
        "Contrairement aux récits qui ne mettaient en scène que des héros exceptionnels, les romans réalistes racontent la vie de personnages ordinaires, issus de toutes les classes sociales : paysans, ouvriers, petits employés, grands bourgeois. Ces personnages sont souvent des types, c'est-à-dire des figures représentatives d'un milieu social entier. Les décors, villes, campagnes ou usines, sont décrits avec une grande précision.",
    },
    {
      titre: "La description réaliste",
      illustration: "🔎",
      visuel: "Précision + détails vrais",
      contenu: [
        "Descriptions longues et précises : lieux, vêtements, objets, métiers",
        "Vocabulaire technique et concret pour donner une impression de vérité",
        "Effet de réel : détails qui n'ont pas de fonction narrative, juste de la vraisemblance",
        "Le lecteur doit avoir l'impression de voir la scène",
      ],
      voixOff:
        "La description tient une place essentielle dans le roman réaliste. Elle est longue, précise, et emploie un vocabulaire concret, parfois technique, pour décrire un lieu, un vêtement ou un métier. On parle d'effet de réel lorsqu'un détail, sans utilité pour l'histoire, est là uniquement pour rendre la scène plus vraie, plus vraisemblable, comme si le lecteur pouvait la voir de ses propres yeux.",
    },
    {
      titre: "Le narrateur omniscient",
      illustration: "👁️",
      visuel: "Le narrateur sait tout, voit tout",
      contenu: [
        "Souvent un narrateur omniscient : il connaît pensées et sentiments de tous les personnages",
        "Point de vue externe ou interne possibles aussi, selon les passages",
        "Le narrateur commente parfois la société qu'il décrit",
        "Il donne l'impression d'un tableau complet et objectif du monde",
      ],
      voixOff:
        "Le roman réaliste utilise souvent un narrateur omniscient, qui sait tout des personnages : leurs pensées, leurs sentiments, leur passé. Ce narrateur peut aussi, par moments, adopter un point de vue interne ou externe. Il commente parfois la société qu'il décrit, ce qui donne l'impression d'un tableau complet, presque scientifique, du monde représenté.",
    },
    {
      titre: "Les grands romanciers réalistes",
      illustration: "✒️",
      visuel: "Balzac • Flaubert • Zola",
      contenu: [
        "Honoré de Balzac : La Comédie humaine, un vaste tableau de la société",
        "Gustave Flaubert : Madame Bovary (1857)",
        "Émile Zola : chef de file du naturalisme, cycle des Rougon-Macquart, Germinal",
        "Guy de Maupassant : romans et nouvelles réalistes, Bel-Ami, Une vie",
      ],
      voixOff:
        "Plusieurs grands auteurs incarnent le réalisme. Honoré de Balzac imagine La Comédie humaine, un ensemble de romans qui dresse le tableau de toute la société française de son temps. Gustave Flaubert publie Madame Bovary en 1857. Émile Zola pousse le réalisme vers le naturalisme, une observation quasi scientifique de la société, dans le cycle des Rougon-Macquart, dont fait partie Germinal. Guy de Maupassant, enfin, écrit à la fois romans et nouvelles réalistes, comme Bel-Ami ou Une vie.",
    },
    {
      titre: "Qu'est-ce que la nouvelle ?",
      illustration: "📄",
      visuel: "Récit bref + peu de personnages",
      contenu: [
        "Récit en prose plus court que le roman",
        "Peu de personnages, une seule intrigue resserrée",
        "Se lit en une seule fois, en général",
        "Souvent centrée sur un seul événement marquant",
      ],
      voixOff:
        "La nouvelle est un récit en prose beaucoup plus court que le roman. Elle met en scène peu de personnages et une seule intrigue, resserrée autour d'un événement marquant. On la lit généralement d'une seule traite, ce qui explique sa construction très efficace, sans temps mort.",
    },
    {
      titre: "La chute, spécificité de la nouvelle",
      illustration: "⚡",
      visuel: "Fin brève + inattendue = chute",
      contenu: [
        "La chute est la fin brutale et souvent inattendue de la nouvelle",
        "Elle peut surprendre, retourner la situation, ou révéler une vérité cachée",
        "Elle donne tout son sens rétrospectif au récit",
        "Maupassant est un maître de la chute (« La Parure », « La Ficelle »)",
      ],
      voixOff:
        "La spécificité de la nouvelle, c'est souvent sa chute : une fin brève et inattendue qui surprend le lecteur, retourne la situation ou révèle une vérité restée cachée jusque-là. Cette chute éclaire rétrospectivement tout le récit et lui donne son sens complet. Maupassant est un maître de cette technique, dans des nouvelles comme La Parure ou La Ficelle.",
    },
    {
      titre: "Roman ou nouvelle : comment les distinguer ?",
      illustration: "⚖️",
      visuel: "Long, plusieurs intrigues ≠ court, une chute",
      contenu: [
        "Roman : long, plusieurs personnages, intrigues secondaires, évolution sur la durée",
        "Nouvelle : court, peu de personnages, une intrigue unique, souvent une chute",
        "Les deux peuvent être réalistes : mêmes procédés (description, typique, vraisemblance)",
        "Le roman laisse le temps de développer une psychologie complexe",
      ],
      voixOff:
        "Pour distinguer roman et nouvelle, on regarde leur longueur et leur construction. Le roman est long, développe plusieurs personnages et parfois des intrigues secondaires, sur une durée étendue. La nouvelle est courte, resserrée autour d'une intrigue unique, souvent conclue par une chute. Les deux formes peuvent être réalistes et partager les mêmes procédés : description précise, personnages typiques, recherche de vraisemblance.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Réalisme (XIXe s.) : peindre la société telle qu'elle est, sans l'idéaliser",
        "Procédés : description précise, personnages types, narrateur souvent omniscient",
        "Auteurs clés : Balzac, Flaubert, Zola, Maupassant",
        "Nouvelle : récit bref, une intrigue, souvent une chute finale surprenante",
      ],
      voixOff:
        "Résumons. Le réalisme, mouvement du dix-neuvième siècle, cherche à peindre la société telle qu'elle est, sans l'idéaliser, en s'appuyant sur des descriptions précises et des personnages types. Ses grands noms sont Balzac, Flaubert, Zola et Maupassant. La nouvelle, forme brève centrée sur une seule intrigue, se distingue souvent par sa chute, une fin inattendue qui donne tout son sens au récit.",
    },
  ],
  fiche: {
    intro:
      "Le réalisme est un mouvement littéraire du XIXe siècle qui cherche à peindre la société telle qu'elle est, sans l'idéaliser. Le roman réaliste et la nouvelle réaliste partagent les mêmes procédés, mais se distinguent par leur longueur et leur construction, la nouvelle se terminant souvent par une chute.",
    sections: [
      {
        titre: "Définition du réalisme",
        points: [
          "Mouvement du XIXe siècle : peindre la société telle qu'elle est, sans l'idéaliser",
          "S'oppose au romantisme (sentiments exaltés, héros exceptionnels)",
          "Les auteurs se documentent et observent avant d'écrire",
        ],
      },
      {
        titre: "Les procédés du réalisme",
        points: [
          "Personnages types, représentatifs d'un milieu social, issus de toutes les classes",
          "Descriptions précises, vocabulaire concret, effet de réel",
          "Narrateur souvent omniscient, qui connaît pensées et sentiments de tous",
        ],
      },
      {
        titre: "Les grands auteurs réalistes",
        points: [
          "Balzac : La Comédie humaine",
          "Flaubert : Madame Bovary (1857)",
          "Zola : cycle des Rougon-Macquart (Germinal), chef de file du naturalisme",
          "Maupassant : Bel-Ami, Une vie, et de nombreuses nouvelles",
        ],
      },
      {
        titre: "La nouvelle et la chute",
        points: [
          "Nouvelle : récit bref, peu de personnages, une seule intrigue",
          "Chute : fin brève et inattendue qui éclaire tout le récit",
          "Maupassant, maître de la chute : La Parure, La Ficelle",
        ],
      },
    ],
    audio:
      "Fiche de révision : le roman réaliste et la nouvelle. Le réalisme est un mouvement littéraire du dix-neuvième siècle qui cherche à peindre la société telle qu'elle est, sans l'idéaliser, contrairement au romantisme. Les auteurs réalistes créent des personnages types, représentatifs de toutes les classes sociales, et emploient des descriptions précises pour créer un effet de réel. Le narrateur est souvent omniscient. Les grands noms du réalisme sont Balzac, avec La Comédie humaine, Flaubert, avec Madame Bovary, Zola, chef de file du naturalisme avec les Rougon-Macquart, et Maupassant, romancier et nouvelliste. La nouvelle est un récit bref, centré sur une seule intrigue, qui se distingue souvent par sa chute, une fin brève et inattendue qui éclaire rétrospectivement tout le récit, comme dans La Parure de Maupassant.",
  },
  memoCards: [
    {
      recto: "Définition du réalisme ?",
      verso: "Mouvement du XIXe siècle qui cherche à peindre la société telle qu'elle est, sans l'idéaliser.",
    },
    {
      recto: "Qu'est-ce qu'un personnage « type » ?",
      verso: "Un personnage représentatif d'un milieu social entier (le paysan, l'ouvrier, le bourgeois...).",
    },
    {
      recto: "Qu'est-ce que « l'effet de réel » ?",
      verso: "Un détail descriptif sans fonction narrative, présent seulement pour rendre la scène plus vraisemblable.",
    },
    {
      recto: "Qui a écrit La Comédie humaine ?",
      verso: "Honoré de Balzac, vaste ensemble de romans peignant toute la société française.",
    },
    {
      recto: "Qui est le chef de file du naturalisme et quelle œuvre ?",
      verso: "Émile Zola, avec le cycle des Rougon-Macquart, dont Germinal.",
    },
    {
      recto: "Qu'est-ce qui distingue le roman de la nouvelle ?",
      verso: "Le roman est long, avec plusieurs personnages et intrigues ; la nouvelle est courte, avec une seule intrigue.",
    },
    {
      recto: "Qu'est-ce que la chute d'une nouvelle ?",
      verso: "La fin brève et souvent inattendue qui surprend le lecteur et éclaire tout le récit.",
    },
    {
      recto: "Cite un auteur maître de la chute et une de ses nouvelles.",
      verso: "Guy de Maupassant, avec La Parure ou La Ficelle.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le réalisme est un mouvement littéraire qui se développe :",
      choix: ["au Moyen Âge", "au XVIIe siècle", "au XIXe siècle", "au XXe siècle"],
      bonneReponse: 2,
      explication: "Le réalisme se développe en France à partir du milieu du XIXe siècle.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'ambition principale du roman réaliste est de :",
      choix: ["inventer un monde magique", "peindre la société telle qu'elle est", "raconter uniquement la vie des rois", "faire rire à tout prix"],
      bonneReponse: 1,
      explication: "Le réalisme cherche à représenter le réel avec exactitude, sans l'idéaliser.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux auteurs réalistes français du XIXe siècle.",
      reponse: "Par exemple : Balzac et Zola (ou Flaubert, Maupassant).",
      explication: "Ce sont les grands noms du mouvement réaliste et naturaliste.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une nouvelle, par rapport à un roman, est en général :",
      choix: ["plus longue", "plus courte", "de la même longueur", "toujours en vers"],
      bonneReponse: 1,
      explication: "La nouvelle est un récit bref, centré sur une seule intrigue.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un personnage « type » dans le roman réaliste ?",
      choix: [
        "Un personnage magique",
        "Un personnage représentatif d'un milieu social",
        "Un personnage qui n'apparaît qu'une seule fois",
        "Un personnage historique réel",
      ],
      bonneReponse: 1,
      explication: "Le personnage type incarne les caractéristiques d'une catégorie sociale entière.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est « l'effet de réel » dans une description réaliste.",
      reponse: "C'est un détail précis, souvent sans utilité pour l'intrigue, qui donne au lecteur l'impression que la scène décrite est vraie et vraisemblable.",
      explication: "Ce procédé renforce l'illusion de réalité propre au roman réaliste.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que la chute d'une nouvelle ? Pourquoi est-elle importante ?",
      reponse: "La chute est la fin brève et souvent inattendue de la nouvelle. Elle est importante car elle surprend le lecteur, retourne parfois la situation et donne son sens complet à tout le récit, rétrospectivement.",
      explication: "Sans la chute, de nombreuses nouvelles perdraient leur intérêt principal.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Émile Zola est considéré comme le chef de file :",
      choix: ["du romantisme", "du naturalisme", "du classicisme", "du symbolisme"],
      bonneReponse: 1,
      explication: "Zola pousse le réalisme vers le naturalisme, une observation presque scientifique de la société.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en deux ou trois phrases ce qui différencie un narrateur omniscient d'un narrateur à point de vue interne.",
      reponse: "Un narrateur omniscient sait tout des personnages : leurs pensées, leurs sentiments, leur passé, même ce qu'ils se cachent à eux-mêmes. Un narrateur à point de vue interne ne connaît que ce que perçoit et ressent un seul personnage, comme s'il racontait à travers ses yeux.",
      explication: "Le roman réaliste privilégie souvent le narrateur omniscient pour donner un tableau complet de la société.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Lis ce court extrait inventé : « Le facteur portait une veste de laine grise, usée aux coudes, et sentait le tabac froid ; ses mains gercées tremblaient légèrement en triant les lettres. » Relève deux éléments qui créent un effet de réel.",
      reponse: "Par exemple : « veste de laine grise, usée aux coudes », « sentait le tabac froid », « mains gercées ». Ces détails précis et concrets, sans utilité pour l'intrigue, rendent le personnage et la scène plus vraisemblables.",
      explication: "L'accumulation de détails sensoriels et concrets est typique de l'écriture réaliste.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige la chute (2 à 3 phrases) d'une courte nouvelle réaliste dont voici le début : « Depuis des années, Julien économisait pour s'acheter la montre en or vue en vitrine. Le jour où il eut enfin la somme, il courut à la bijouterie. »",
      reponse: "Exemple de corrigé : « Mais en arrivant, il découvrit une pancarte : 'Fermeture définitive'. La bijouterie avait déménagé la veille, et personne ne sut jamais où retrouver la montre en or. »",
      explication: "On attend une fin brève, inattendue, qui retourne ou déjoue les attentes créées par le début du récit.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Laquelle de ces phrases relève le mieux de l'écriture réaliste ?",
      choix: [
        "« Il était une fois un royaume enchanté au bout du monde. »",
        "« En l'an 3000, les robots gouvernaient la Terre. »",
        "« Monsieur Duval, employé de bureau depuis vingt ans, rentrait chaque soir par la même rue grise, son cartable usé sous le bras. »",
        "« Le fantôme traversa le mur sans un bruit. »",
      ],
      bonneReponse: 2,
      explication: "Cette phrase décrit un personnage ordinaire, dans un cadre quotidien précis et vraisemblable : c'est typique du réalisme.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le réalisme s'oppose surtout :",
      choix: ["au théâtre", "au romantisme", "à la poésie", "au roman"],
      bonneReponse: 1,
      explication: "Le réalisme rejette les sentiments exaltés et les héros exceptionnels du romantisme.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel auteur a créé le cycle des Rougon-Macquart ?",
      reponse: "Émile Zola.",
      explication: "Ce cycle romanesque comprend notamment Germinal.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qui rapproche le roman réaliste et la nouvelle réaliste ?",
      reponse: "Ils partagent les mêmes procédés : description précise, personnages types, recherche de vraisemblance et souci de peindre la société telle qu'elle est.",
      explication: "Seules la longueur et la construction du récit les distinguent vraiment.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La chute d'une nouvelle se situe :",
      choix: ["au début du récit", "au milieu du récit", "à la toute fin du récit", "elle n'existe pas dans la nouvelle"],
      bonneReponse: 2,
      explication: "La chute est la conclusion brève et souvent inattendue qui clôt la nouvelle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi Maupassant est-il considéré comme un maître de la chute ?",
      reponse: "Parce que ses nouvelles, comme La Parure ou La Ficelle, se terminent souvent par un retournement de situation ou une révélation inattendue qui surprend le lecteur et éclaire tout le récit.",
      explication: "Maupassant est l'un des nouvellistes réalistes les plus étudiés pour cette technique.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le roman réaliste et la nouvelle",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le réalisme cherche avant tout à :",
          choix: ["embellir la réalité", "peindre la société telle qu'elle est", "raconter des contes de fées", "imaginer le futur"],
          bonneReponse: 1,
          explication: "C'est la définition même du réalisme : représenter le monde sans l'idéaliser.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite le titre d'un roman de Gustave Flaubert.",
          reponse: "Madame Bovary (1857).",
          explication: "C'est l'un des romans réalistes les plus célèbres du XIXe siècle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un narrateur omniscient est un narrateur qui :",
          choix: [
            "ne connaît que ses propres pensées",
            "connaît les pensées et sentiments de tous les personnages",
            "n'existe pas dans le roman réaliste",
            "raconte toujours à la première personne"
          ],
          bonneReponse: 1,
          explication: "Le narrateur omniscient a un savoir total sur l'histoire et les personnages.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence de longueur et de construction entre roman et nouvelle.",
          reponse: "Le roman est long, développe plusieurs personnages et parfois des intrigues secondaires sur une durée étendue. La nouvelle est courte, resserrée autour d'une seule intrigue et se lit généralement d'une traite.",
          explication: "Cette différence de format explique aussi des choix d'écriture différents (chute pour la nouvelle, par exemple).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que le naturalisme et qui en est le chef de file ?",
          reponse: "Le naturalisme est un prolongement du réalisme qui observe la société de façon presque scientifique, en s'intéressant notamment à l'hérédité et au milieu social. Émile Zola en est le chef de file.",
          explication: "Zola théorise le naturalisme dans ses écrits et l'applique dans le cycle des Rougon-Macquart.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court paragraphe descriptif (3 à 4 phrases) présentant un personnage « type » du monde du travail actuel (par exemple un livreur ou une caissière), avec des détails créant un effet de réel.",
          reponse: "Exemple de corrigé : « Sarah, caissière depuis huit ans dans le même supermarché, connaissait par cœur le bip régulier du scanner. Ses mains, rapides et précises, empilaient les articles sans jamais un regard pour le client. Sous la lumière blanche des néons, son badge écorné indiquait encore un prénom presque effacé. »",
          explication: "On vérifie la présence d'un personnage type, de détails concrets et précis créant un effet de réel.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le roman réaliste et la nouvelle",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel auteur a écrit La Comédie humaine ?",
          choix: ["Émile Zola", "Guy de Maupassant", "Honoré de Balzac", "Gustave Flaubert"],
          bonneReponse: 2,
          explication: "Balzac imagine cet immense ensemble romanesque pour peindre toute la société de son époque.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la chute d'une nouvelle ?",
          reponse: "C'est la fin brève et souvent inattendue du récit, qui surprend le lecteur et éclaire rétrospectivement toute l'histoire.",
          explication: "C'est une spécificité fréquente, quoique non systématique, de la nouvelle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Effet de réel » désigne :",
          choix: [
            "un événement surnaturel dans un récit réaliste",
            "un détail concret sans fonction narrative qui renforce la vraisemblance",
            "une erreur de l'auteur",
            "un dialogue entre deux personnages"
          ],
          bonneReponse: 1,
          explication: "Ce procédé, théorisé par Roland Barthes, désigne ces détails qui ne servent qu'à faire vrai.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi les romanciers réalistes se documentaient-ils autant avant d'écrire ?",
          reponse: "Parce qu'ils voulaient représenter la société avec exactitude et vraisemblance : ils enquêtaient sur des métiers, des lieux, des milieux sociaux réels afin que leurs romans paraissent crédibles et fidèles à la réalité.",
          explication: "Zola, par exemple, visitait les mines avant d'écrire Germinal.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite un titre de nouvelle de Maupassant et explique brièvement son thème.",
          reponse: "Par exemple, La Parure raconte l'histoire d'une femme qui emprunte une parure de diamants pour un bal, la perd, et se ruine pour la remplacer, avant de découvrir à la fin que les diamants d'origine étaient faux.",
          explication: "Cette nouvelle est un exemple célèbre de chute qui bouleverse le sens de tout le récit.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade affirme : « Le réalisme, c'est pareil que le fantastique, puisque les deux racontent la vraie vie. » Explique pourquoi cette affirmation est fausse.",
          reponse: "C'est faux : le réalisme peint le monde réel, ordinaire, sans surnaturel, en cherchant l'exactitude et la vraisemblance. Le fantastique, au contraire, fait irruption d'un événement surnaturel dans un monde réaliste, créant l'hésitation et le doute chez le lecteur, ce qui n'a rien à voir avec l'ambition documentaire du réalisme.",
          explication: "Les deux genres peuvent partir d'un cadre réaliste, mais leurs objectifs et leurs effets sont très différents.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le réalisme (XIXe siècle) cherche à peindre la société telle qu'elle est, sans l'idéaliser, contrairement au romantisme.",
    "Personnages « types » : représentatifs d'un milieu social entier (paysan, ouvrier, bourgeois).",
    "Description précise et « effet de réel » : détails concrets qui renforcent la vraisemblance.",
    "Auteurs clés : Balzac (La Comédie humaine), Flaubert (Madame Bovary), Zola (Rougon-Macquart, naturalisme), Maupassant.",
    "La nouvelle : récit bref, une seule intrigue, se termine souvent par une chute (fin inattendue).",
    "Maupassant, maître de la chute : La Parure, La Ficelle.",
  ],
},
{
  slug: "subordonnees",
  titre: "Les propositions subordonnées",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Comprendre la phrase complexe : proposition principale et propositions subordonnées, relatives et conjonctives (complétives et circonstancielles), pour analyser et enrichir ses phrases.",
  objectifs: [
    "Distinguer proposition principale et proposition subordonnée",
    "Reconnaître la proposition subordonnée relative et les pronoms relatifs",
    "Reconnaître la proposition subordonnée conjonctive complétive",
    "Identifier les principales subordonnées circonstancielles (temps, cause, conséquence, but)",
    "Enrichir ses phrases en utilisant des propositions subordonnées variées",
  ],
  slides: [
    {
      titre: "Phrase simple, phrase complexe",
      illustration: "🧩",
      visuel: "1 verbe = simple / 2+ verbes = complexe",
      contenu: [
        "Une phrase simple contient un seul verbe conjugué (une seule proposition)",
        "Une phrase complexe contient plusieurs verbes conjugués (plusieurs propositions)",
        "Chaque proposition s'organise autour d'un verbe conjugué",
        "Dans une phrase complexe, les propositions sont reliées entre elles",
      ],
      voixOff:
        "Une phrase simple ne contient qu'un seul verbe conjugué : c'est une seule proposition. Une phrase complexe contient plusieurs verbes conjugués, donc plusieurs propositions. Chaque proposition s'organise autour de son propre verbe conjugué, et dans une phrase complexe, ces propositions sont reliées les unes aux autres.",
    },
    {
      titre: "Proposition principale et subordonnée",
      illustration: "🌳",
      visuel: "Principale = tronc / Subordonnée = branche",
      contenu: [
        "La proposition principale peut exister seule et a un sens complet",
        "La proposition subordonnée dépend de la principale : seule, elle n'a pas de sens complet",
        "La subordonnée est reliée à la principale par un mot subordonnant",
        "On peut comparer la principale au tronc d'un arbre, la subordonnée à une branche",
      ],
      voixOff:
        "Dans une phrase complexe, on distingue la proposition principale, qui pourrait exister seule et qui a un sens complet, et la proposition subordonnée, qui dépend de la principale et n'a pas de sens complet toute seule. La subordonnée est toujours reliée à la principale par un mot subordonnant : un pronom relatif ou une conjonction de subordination.",
    },
    {
      titre: "La proposition subordonnée relative",
      illustration: "🔗",
      visuel: "qui, que, dont, où, lequel",
      contenu: [
        "Introduite par un pronom relatif : qui, que, dont, où, lequel...",
        "Elle complète un nom ou un pronom appelé antécédent",
        "Fonction : complément de l'antécédent (épithète du nom)",
        "Exemple : « Le livre que je lis me passionne. »",
      ],
      voixOff:
        "La proposition subordonnée relative est introduite par un pronom relatif : qui, que, dont, où, lequel. Elle complète toujours un nom ou un pronom qu'on appelle l'antécédent. Dans la phrase le livre que je lis me passionne, que je lis est une subordonnée relative qui complète le nom livre, son antécédent.",
    },
    {
      titre: "Bien choisir son pronom relatif",
      illustration: "🎯",
      visuel: "qui=sujet / que=COD / dont=complément en DE / où=lieu-temps",
      contenu: [
        "« qui » remplace un sujet : « la fille qui chante »",
        "« que » remplace un COD : « la fille que je vois »",
        "« dont » remplace un complément introduit par « de » : « le livre dont je parle »",
        "« où » remplace un complément de lieu ou de temps : « la ville où je suis né »",
      ],
      voixOff:
        "Le choix du pronom relatif dépend de sa fonction dans la subordonnée. Qui remplace un sujet, comme dans la fille qui chante. Que remplace un complément d'objet direct, comme dans la fille que je vois. Dont remplace un complément introduit par la préposition de, comme dans le livre dont je parle. Où remplace un complément de lieu ou de temps, comme dans la ville où je suis né.",
    },
    {
      titre: "La proposition subordonnée conjonctive complétive",
      illustration: "💬",
      visuel: "verbe + que + proposition (COD)",
      contenu: [
        "Introduite par la conjonction « que »",
        "Elle est complément d'objet direct du verbe de la principale",
        "Verbes fréquents : penser, dire, croire, espérer, souhaiter, savoir...",
        "Exemple : « Je pense que tu as raison. »",
      ],
      voixOff:
        "La proposition subordonnée conjonctive complétive est introduite par la conjonction que. Elle occupe la fonction de complément d'objet direct du verbe de la principale. On la trouve après des verbes comme penser, dire, croire, espérer, souhaiter ou savoir. Par exemple, dans je pense que tu as raison, que tu as raison est complément d'objet direct de pense.",
    },
    {
      titre: "Les subordonnées circonstancielles de temps et de cause",
      illustration: "⏰",
      visuel: "quand/lorsque (temps) — parce que/car (cause)",
      contenu: [
        "Circonstancielle de temps : « quand », « lorsque », « pendant que », « dès que »",
        "Exemple : « Quand il pleut, je reste chez moi. »",
        "Circonstancielle de cause : « parce que », « puisque », « comme »",
        "Exemple : « Je reste chez moi parce qu'il pleut. »",
      ],
      voixOff:
        "Les propositions subordonnées circonstancielles complètent la phrase en indiquant les circonstances. La circonstancielle de temps, introduite par quand, lorsque ou dès que, précise le moment, comme dans quand il pleut, je reste chez moi. La circonstancielle de cause, introduite par parce que, puisque ou comme, explique la raison, comme dans je reste chez moi parce qu'il pleut.",
    },
    {
      titre: "Les subordonnées de conséquence et de but",
      illustration: "🎯",
      visuel: "si bien que (conséquence) — pour que (but)",
      contenu: [
        "Circonstancielle de conséquence : « si bien que », « de sorte que », « tellement... que »",
        "Exemple : « Il a tellement couru qu'il est épuisé. »",
        "Circonstancielle de but : « pour que », « afin que » + subjonctif",
        "Exemple : « Je révise pour que je réussisse mon contrôle. »",
      ],
      voixOff:
        "La subordonnée circonstancielle de conséquence, introduite par si bien que ou tellement que, indique un résultat, comme dans il a tellement couru qu'il est épuisé. La subordonnée circonstancielle de but, introduite par pour que ou afin que et suivie du subjonctif, indique un objectif, comme dans je révise pour que je réussisse mon contrôle.",
    },
    {
      titre: "Repérer et analyser une subordonnée",
      illustration: "🔍",
      visuel: "1. Trouver le verbe / 2. Trouver le mot subordonnant / 3. Nommer",
      contenu: [
        "1. Repérer tous les verbes conjugués : autant de propositions",
        "2. Identifier le mot qui introduit chaque subordonnée (pronom relatif ou conjonction)",
        "3. Déterminer le type de subordonnée et sa fonction",
        "4. Vérifier que la subordonnée ne peut pas être supprimée sans changer le sens",
      ],
      voixOff:
        "Pour analyser une phrase complexe, repère d'abord tous les verbes conjugués : chacun correspond à une proposition. Identifie ensuite le mot qui introduit chaque subordonnée, pronom relatif ou conjonction. Détermine alors le type de subordonnée, relative, complétive ou circonstancielle, et sa fonction dans la phrase.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Phrase complexe = plusieurs propositions ; principale = sens complet seule",
        "Relative (qui/que/dont/où) complète un nom : l'antécédent",
        "Complétive (« que ») = COD du verbe de la principale",
        "Circonstancielles : temps, cause, conséquence, but... précisent les circonstances",
      ],
      voixOff:
        "Pour résumer, une phrase complexe contient plusieurs propositions reliées entre elles. La proposition principale a un sens complet ; la subordonnée en dépend. La relative, introduite par qui, que, dont ou où, complète un nom, son antécédent. La complétive, introduite par que, est complément d'objet direct du verbe de la principale. Les circonstancielles, comme celles de temps, de cause, de conséquence ou de but, précisent les circonstances de l'action.",
    },
  ],
  fiche: {
    intro:
      "Une phrase complexe contient plusieurs propositions, organisées autour de plusieurs verbes conjugués. On y distingue la proposition principale, qui a un sens complet, et les propositions subordonnées, qui en dépendent : relatives, conjonctives complétives et circonstancielles.",
    sections: [
      {
        titre: "Phrase simple, phrase complexe, principale et subordonnée",
        points: [
          "Phrase simple : un seul verbe conjugué (une seule proposition)",
          "Phrase complexe : plusieurs verbes conjugués (plusieurs propositions)",
          "Proposition principale : sens complet, peut exister seule",
          "Proposition subordonnée : dépend de la principale, introduite par un mot subordonnant",
        ],
      },
      {
        titre: "La subordonnée relative",
        points: [
          "Introduite par un pronom relatif : qui, que, dont, où, lequel...",
          "Complète un nom ou un pronom : l'antécédent",
          "« qui » = sujet ; « que » = COD ; « dont » = complément en « de » ; « où » = lieu/temps",
        ],
      },
      {
        titre: "La subordonnée conjonctive complétive",
        points: [
          "Introduite par « que »",
          "Fonction : complément d'objet direct du verbe de la principale",
          "Après des verbes d'opinion, de déclaration, de sentiment : penser, dire, croire, espérer...",
        ],
      },
      {
        titre: "Les subordonnées circonstancielles",
        points: [
          "Temps : quand, lorsque, dès que, pendant que",
          "Cause : parce que, puisque, comme",
          "Conséquence : si bien que, de sorte que, tellement... que",
          "But : pour que, afin que (+ subjonctif)",
        ],
      },
    ],
    audio:
      "Fiche de révision : les propositions subordonnées. Une phrase complexe contient plusieurs verbes conjugués, donc plusieurs propositions. La proposition principale a un sens complet et pourrait exister seule ; la proposition subordonnée en dépend et est introduite par un mot subordonnant. La subordonnée relative est introduite par un pronom relatif, qui, que, dont ou où, et complète un nom appelé antécédent. La subordonnée conjonctive complétive est introduite par que et occupe la fonction de complément d'objet direct, après des verbes comme penser, dire ou croire. Les subordonnées circonstancielles précisent les circonstances de l'action : le temps avec quand ou lorsque, la cause avec parce que ou puisque, la conséquence avec si bien que, le but avec pour que suivi du subjonctif.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce qu'une phrase complexe ?",
      verso: "Une phrase contenant plusieurs verbes conjugués, donc plusieurs propositions reliées entre elles.",
    },
    {
      recto: "Différence entre principale et subordonnée ?",
      verso: "La principale a un sens complet et peut exister seule. La subordonnée en dépend et n'a pas de sens complet isolée.",
    },
    {
      recto: "Par quoi est introduite une subordonnée relative ?",
      verso: "Par un pronom relatif : qui, que, dont, où, lequel...",
    },
    {
      recto: "Quelle est la fonction de la subordonnée relative ?",
      verso: "Complément de l'antécédent (le nom ou pronom qu'elle complète).",
    },
    {
      recto: "Comment choisir entre qui et que ?",
      verso: "« qui » remplace un sujet ; « que » remplace un complément d'objet direct (COD).",
    },
    {
      recto: "Quelle est la fonction de la subordonnée conjonctive complétive ?",
      verso: "Complément d'objet direct (COD) du verbe de la proposition principale.",
    },
    {
      recto: "Cite trois conjonctions de subordination de cause.",
      verso: "Parce que, puisque, comme.",
    },
    {
      recto: "Quel mode suit « pour que » et « afin que » ?",
      verso: "Le subjonctif : « pour que je réussisse », « afin que tu comprennes ».",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de propositions contient une phrase complexe ?",
      choix: ["Une seule", "Deux ou plus", "Toujours trois", "Aucune"],
      bonneReponse: 1,
      explication: "Une phrase complexe contient plusieurs verbes conjugués, donc au moins deux propositions.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Le chat qui dort est noir », quelle est la proposition subordonnée ?",
      choix: ["Le chat", "qui dort", "est noir", "Le chat est noir"],
      bonneReponse: 1,
      explication: "« qui dort » est introduite par le pronom relatif « qui » et complète l'antécédent « chat ».",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un antécédent ?",
      reponse: "C'est le nom ou le pronom que complète une proposition subordonnée relative.",
      explication: "Par exemple, dans « le livre que je lis », « livre » est l'antécédent de la relative « que je lis ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle conjonction introduit une subordonnée conjonctive complétive ?",
      choix: ["qui", "que", "où", "dont"],
      bonneReponse: 1,
      explication: "La conjonction « que » introduit la subordonnée conjonctive complétive, COD du verbe principal.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « La ville où je suis né est petite », le mot « où » remplace :",
      choix: ["un sujet", "un COD", "un complément de lieu", "un attribut"],
      bonneReponse: 2,
      explication: "« où » reprend un complément de lieu (ou de temps) : ici, il remplace « dans cette ville ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète par « qui » ou « que » : « Le professeur ... explique la leçon » et « Le professeur ... j'écoute ».",
      reponse: "« Le professeur qui explique la leçon » (qui = sujet) et « Le professeur que j'écoute » (que = COD).",
      explication: "« qui » remplace le sujet du verbe subordonné ; « que » remplace son complément d'objet direct.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Identifie le type de subordonnée dans « Je pense que tu as raison » et donne sa fonction.",
      reponse: "« que tu as raison » est une proposition subordonnée conjonctive complétive, complément d'objet direct du verbe « pense ».",
      explication: "Après un verbe d'opinion comme « penser », la subordonnée introduite par « que » est très souvent COD.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Quand la cloche sonne, les élèves sortent. » Quel type de subordonnée est « Quand la cloche sonne » ?",
      choix: ["Relative", "Conjonctive complétive", "Circonstancielle de temps", "Circonstancielle de but"],
      bonneReponse: 2,
      explication: "« Quand » introduit une subordonnée circonstancielle de temps, qui précise le moment de l'action.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse la phrase suivante : « Le film dont tout le monde parle sort demain. » Précise la proposition principale, la subordonnée, son type et sa fonction.",
      reponse: "Principale : « Le film ... sort demain. » Subordonnée : « dont tout le monde parle », introduite par le pronom relatif « dont ». C'est une subordonnée relative, complément de l'antécédent « film » (on parle DU film).",
      explication: "« dont » remplace un complément introduit par « de » : « on parle du film ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Transforme ces deux phrases simples en une seule phrase complexe contenant une subordonnée de cause : « Je suis fatigué. J'ai mal dormi. »",
      reponse: "Exemple de corrigé : « Je suis fatigué parce que j'ai mal dormi. » (ou : « Comme j'ai mal dormi, je suis fatigué. »)",
      explication: "« parce que » et « comme » sont des conjonctions de subordination qui introduisent la cause.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris une phrase complexe contenant une subordonnée circonstancielle de but, introduite par « pour que », en veillant à employer le subjonctif.",
      reponse: "Exemple de corrigé : « Je parle doucement pour que tout le monde comprenne. »",
      explication: "Après « pour que », le verbe se met au subjonctif : « comprenne » et non « comprend ».",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Il a tellement crié qu'il n'a plus de voix », la subordonnée exprime :",
      choix: ["la cause", "le but", "la conséquence", "le temps"],
      bonneReponse: 2,
      explication: "« si... que »/« tellement... que » introduisent une subordonnée de conséquence : le résultat de l'intensité du cri.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une proposition subordonnée :",
      choix: ["a toujours un sens complet seule", "dépend d'une proposition principale", "ne contient jamais de verbe", "remplace toujours un nom propre"],
      bonneReponse: 1,
      explication: "Par définition, la subordonnée dépend de la principale et ne peut pas être isolée sans perdre son sens.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux pronoms relatifs qui introduisent une subordonnée relative.",
      reponse: "Par exemple : qui et que (ou dont, où, lequel).",
      explication: "Ces pronoms remplacent l'antécédent et introduisent la relative.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la fonction d'une subordonnée conjonctive complétive introduite par « que » après un verbe comme « dire » ?",
      reponse: "Elle est complément d'objet direct (COD) du verbe de la proposition principale.",
      explication: "Exemple : « Il dit qu'il viendra » — « qu'il viendra » est COD de « dit ».",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle conjonction introduit une subordonnée de but ?",
      choix: ["parce que", "pour que", "si bien que", "quand"],
      bonneReponse: 1,
      explication: "« pour que » (ou « afin que ») introduit le but et est suivi du subjonctif.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans la phrase « L'élève dont le cahier est propre est félicité », quelle fonction a « dont le cahier est propre » ?",
      reponse: "C'est une proposition subordonnée relative, complément de l'antécédent « élève » (le cahier DE l'élève).",
      explication: "« dont » remplace un complément introduit par « de » : « le cahier de cet élève ».",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les propositions subordonnées",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une phrase simple contient :",
          choix: ["un seul verbe conjugué", "plusieurs verbes conjugués", "aucun verbe", "toujours une subordonnée"],
          bonneReponse: 0,
          explication: "Par définition, une phrase simple ne comporte qu'une seule proposition, organisée autour d'un seul verbe conjugué.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui distingue la proposition principale de la proposition subordonnée ?",
          reponse: "La proposition principale a un sens complet et pourrait exister seule ; la proposition subordonnée dépend de la principale et n'a pas de sens complet isolée.",
          explication: "C'est la définition de base de la phrase complexe.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Le sac que j'ai acheté est rouge », « que » remplace :",
          choix: ["le sujet du verbe « acheté »", "le complément d'objet direct du verbe « acheté »", "un complément de lieu", "rien, ce n'est pas un pronom relatif"],
          bonneReponse: 1,
          explication: "« que » reprend « le sac » comme COD de « ai acheté » : j'ai acheté le sac.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Construis une phrase complexe avec une subordonnée relative introduite par « dont ».",
          reponse: "Exemple de corrigé : « Le livre dont je te parle est passionnant. »",
          explication: "« dont » doit remplacer un complément introduit par « de » : on vérifie « je te parle du livre ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Identifie et nomme le type de subordonnée : « Comme il pleuvait, nous sommes restés à la maison. »",
          reponse: "« Comme il pleuvait » est une proposition subordonnée circonstancielle de cause : elle explique la raison pour laquelle nous sommes restés à la maison.",
          explication: "« comme » en tête de phrase introduit fréquemment la cause.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige une phrase complexe contenant à la fois une subordonnée relative et une subordonnée conjonctive complétive.",
          reponse: "Exemple de corrigé : « Je pense que le film que nous avons vu hier était excellent. » (« que le film... était excellent » = complétive, COD de « pense » ; « que nous avons vu hier » = relative, complément de l'antécédent « film »).",
          explication: "On vérifie la présence des deux types de subordonnées et leur bon emploi.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les propositions subordonnées",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« qui » remplace toujours :",
          choix: ["un complément d'objet direct", "un sujet", "un complément de lieu", "un attribut du sujet"],
          bonneReponse: 1,
          explication: "Le pronom relatif « qui » a toujours la fonction de sujet dans la subordonnée relative.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne un exemple de conjonction introduisant une subordonnée circonstancielle de temps.",
          reponse: "Par exemple : quand, lorsque, dès que, pendant que.",
          explication: "Ces conjonctions situent l'action dans le temps par rapport à la principale.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Il travaille si bien qu'il réussira son examen. » Cette subordonnée exprime :",
          choix: ["la cause", "la conséquence", "le but", "le temps"],
          bonneReponse: 1,
          explication: "« si... que » introduit une subordonnée de conséquence : le résultat du fait de bien travailler.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi le verbe est-il au subjonctif après « pour que » ? Illustre avec un exemple.",
          reponse: "« pour que » introduit un but, une intention non encore réalisée, ce qui appelle le mode subjonctif, mode de l'incertitude et du souhait. Exemple : « Je range ma chambre pour que ma mère soit contente. »",
          explication: "Le but exprime une action visée, non un fait certain : d'où l'emploi du subjonctif.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme en une phrase complexe avec une subordonnée conjonctive complétive : « Il fait beau. Je le crois. »",
          reponse: "Exemple de corrigé : « Je crois qu'il fait beau. »",
          explication: "« qu'il fait beau » devient COD du verbe « crois », introduit par la conjonction « que ».",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade écrit : « La maison que j'habite dedans est grande. » Explique son erreur et corrige la phrase.",
          reponse: "Erreur : il utilise à la fois le pronom relatif « que » et la préposition « dedans », ce qui est redondant. Il faut choisir un seul mot subordonnant adapté au complément de lieu : « La maison où j'habite est grande. »",
          explication: "« où » remplace directement le complément de lieu ; il ne faut pas ajouter une préposition supplémentaire après.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Phrase complexe = plusieurs propositions (plusieurs verbes conjugués), reliées entre elles.",
    "Proposition principale : sens complet, peut exister seule. Proposition subordonnée : en dépend.",
    "Subordonnée relative : introduite par qui/que/dont/où, complète un nom (l'antécédent).",
    "qui = sujet ; que = COD ; dont = complément en « de » ; où = lieu ou temps.",
    "Subordonnée conjonctive complétive : introduite par « que », COD du verbe de la principale (après penser, dire, croire...).",
    "Subordonnées circonstancielles : temps (quand, lorsque), cause (parce que, puisque), conséquence (si bien que), but (pour que + subjonctif).",
  ],
},
{
  slug: "voix-active-passive",
  titre: "Voix active et voix passive",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Comprendre la transformation entre voix active et voix passive : construction, conditions d'emploi, complément d'agent, et effets de sens produits par le choix de la voix passive dans un texte.",
  objectifs: [
    "Distinguer voix active et voix passive dans une phrase",
    "Transformer une phrase active en phrase passive et inversement",
    "Reconnaître et employer le complément d'agent",
    "Identifier les verbes qui peuvent se mettre au passif (transitifs directs)",
    "Analyser les effets de sens produits par l'emploi de la voix passive",
  ],
  slides: [
    {
      titre: "Voix active, voix passive : de quoi parle-t-on ?",
      illustration: "🔄",
      visuel: "Le chat mange la souris ↔ La souris est mangée par le chat",
      contenu: [
        "La voix indique la relation entre le sujet et l'action exprimée par le verbe",
        "Voix active : le sujet fait l'action (« Le chat mange la souris »)",
        "Voix passive : le sujet subit l'action (« La souris est mangée par le chat »)",
        "Les deux phrases décrivent le même événement, vu sous deux angles différents",
      ],
      voixOff:
        "La voix d'une phrase indique la relation entre le sujet et l'action exprimée par le verbe. À la voix active, le sujet fait l'action, comme dans le chat mange la souris. À la voix passive, le sujet subit l'action, comme dans la souris est mangée par le chat. Ces deux phrases décrivent exactement le même événement, mais vu sous deux angles différents.",
    },
    {
      titre: "Comment se construit la voix passive ?",
      illustration: "🏗️",
      visuel: "sujet + être + participe passé (+ par/de + agent)",
      contenu: [
        "Le sujet de la phrase active devient complément d'agent (introduit par « par » ou « de »)",
        "Le COD de la phrase active devient sujet de la phrase passive",
        "Le verbe se construit avec l'auxiliaire « être » suivi du participe passé",
        "Le participe passé s'accorde avec le sujet (comme un attribut)",
      ],
      voixOff:
        "Pour construire la voix passive, on suit une règle précise. Le complément d'objet direct de la phrase active devient le sujet de la phrase passive. Le sujet de la phrase active devient un complément d'agent, introduit par la préposition par, parfois de. Le verbe se construit alors avec l'auxiliaire être suivi du participe passé, qui s'accorde avec le sujet.",
    },
    {
      titre: "Un exemple pas à pas",
      illustration: "🧮",
      visuel: "Le facteur distribue le courrier → Le courrier est distribué par le facteur",
      contenu: [
        "Phrase active : « Le facteur distribue le courrier. »",
        "Sujet actif « le facteur » → complément d'agent « par le facteur »",
        "COD « le courrier » → sujet passif « Le courrier »",
        "Résultat : « Le courrier est distribué par le facteur. »",
      ],
      voixOff:
        "Prenons un exemple concret. Le facteur distribue le courrier, à la voix active. Le sujet, le facteur, devient un complément d'agent, introduit par par. Le complément d'objet direct, le courrier, devient le sujet de la phrase passive. On obtient : le courrier est distribué par le facteur.",
    },
    {
      titre: "Quels verbes peuvent se mettre au passif ?",
      illustration: "✅",
      visuel: "Verbe transitif direct (avec COD) uniquement",
      contenu: [
        "Seuls les verbes transitifs directs (qui ont un COD) peuvent se mettre au passif",
        "Un verbe intransitif (« dormir », « partir ») ne peut pas se mettre au passif",
        "Un verbe transitif indirect (« parler à », « penser à ») ne se met pas au passif non plus",
        "Vérifier : le verbe accepte-t-il un COD sans préposition ?",
      ],
      voixOff:
        "Seuls les verbes transitifs directs, c'est-à-dire ceux qui peuvent avoir un complément d'objet direct, peuvent se mettre au passif. Un verbe intransitif, comme dormir ou partir, ne peut pas se mettre au passif, car il n'a pas de COD. Un verbe transitif indirect, comme parler à ou penser à, ne se met pas non plus au passif. Pour vérifier, il suffit de se demander si le verbe accepte un complément d'objet direct, sans préposition.",
    },
    {
      titre: "Le complément d'agent",
      illustration: "👤",
      visuel: "par (le plus courant) / de (verbes de sentiment, état)",
      contenu: [
        "Le complément d'agent indique qui (ou quoi) fait l'action à la voix passive",
        "Il est le plus souvent introduit par « par » : « ...est écrit par l'auteur »",
        "Parfois introduit par « de », surtout avec des verbes de sentiment ou d'état : « aimé de tous »",
        "Le complément d'agent peut être supprimé si l'on ne veut pas préciser qui agit",
      ],
      voixOff:
        "Le complément d'agent indique qui, ou quoi, fait l'action dans une phrase passive. Il est le plus souvent introduit par la préposition par, comme dans ce roman est écrit par un auteur célèbre. Il peut parfois être introduit par de, surtout avec des verbes de sentiment ou d'état, comme dans il est aimé de tous. Ce complément d'agent peut aussi être supprimé si l'on ne veut pas, ou si l'on ne peut pas, préciser qui agit.",
    },
    {
      titre: "Pourquoi utiliser la voix passive ?",
      illustration: "🎯",
      visuel: "Mettre en valeur ce qui subit l'action",
      contenu: [
        "Pour mettre en valeur celui ou ce qui subit l'action, plutôt que celui qui agit",
        "Pour ne pas préciser qui a fait l'action (agent inconnu, évident ou volontairement caché)",
        "Fréquent dans les textes scientifiques, les articles de presse, les procès-verbaux",
        "Exemple : « Le suspect a été arrêté » (sans préciser par qui, l'important étant l'arrestation)",
      ],
      voixOff:
        "On choisit la voix passive pour plusieurs raisons. D'abord, pour mettre en valeur celui ou ce qui subit l'action, plutôt que celui qui la fait. Ensuite, pour éviter de préciser qui a fait l'action, quand l'agent est inconnu, évident, ou volontairement caché. C'est pourquoi on trouve souvent la voix passive dans les textes scientifiques, les articles de presse ou les procès-verbaux, comme dans le suspect a été arrêté.",
    },
    {
      titre: "Voix passive et temps composés",
      illustration: "⏱️",
      visuel: "présent : est + pp / passé composé : a été + pp",
      contenu: [
        "Le verbe « être » de la voix passive se conjugue au même temps que le verbe actif de départ",
        "Présent actif « écrit » → présent passif « est écrit »",
        "Passé composé actif « a écrit » → passé composé passif « a été écrit »",
        "Futur actif « écrira » → futur passif « sera écrit »",
      ],
      voixOff:
        "Un point important : le verbe être de la phrase passive se conjugue au même temps que le verbe de la phrase active de départ. Le présent actif écrit devient le présent passif est écrit. Le passé composé actif a écrit devient le passé composé passif a été écrit. Le futur actif écrira devient le futur passif sera écrit.",
    },
    {
      titre: "Reconnaître voix active et voix passive",
      illustration: "🔍",
      visuel: "être + participe passé + (par/de + agent) = passif",
      contenu: [
        "Repérer l'auxiliaire « être » suivi d'un participe passé : signe probable de passif",
        "Vérifier si l'on peut ajouter ou identifier un complément d'agent",
        "Attention : « être » + participe passé n'est pas toujours un passif (ex. verbes d'état)",
        "Astuce : essayer de transformer la phrase à l'actif pour vérifier",
      ],
      voixOff:
        "Pour reconnaître une phrase à la voix passive, repère l'auxiliaire être suivi d'un participe passé, et vérifie si l'on peut identifier ou ajouter un complément d'agent. Attention cependant : être suivi d'un participe passé n'est pas toujours un passif, certains verbes d'état comme paraître ou sembler suivis d'un adjectif ne le sont pas. Une bonne astuce consiste à essayer de transformer la phrase à l'actif pour vérifier.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Voix active : sujet = celui qui fait l'action. Voix passive : sujet = celui qui subit l'action",
        "Construction : sujet + être + participe passé (+ complément d'agent par/de)",
        "Seuls les verbes transitifs directs (avec COD) se mettent au passif",
        "Effet : mettre en valeur ce qui subit l'action, ou taire l'agent",
      ],
      voixOff:
        "Pour résumer, à la voix active, le sujet fait l'action ; à la voix passive, le sujet la subit. La voix passive se construit avec être suivi du participe passé, complété éventuellement par un complément d'agent introduit par par ou de. Seuls les verbes transitifs directs, qui acceptent un complément d'objet direct, peuvent se mettre au passif. On utilise la voix passive pour mettre en valeur ce qui subit l'action, ou pour ne pas préciser qui l'a accomplie.",
    },
  ],
  fiche: {
    intro:
      "La voix active et la voix passive expriment la même action, mais du point de vue de celui qui la fait (voix active) ou de celui qui la subit (voix passive). La transformation obéit à une règle précise et produit des effets de sens différents.",
    sections: [
      {
        titre: "Définition et construction",
        points: [
          "Voix active : le sujet fait l'action (« Le chat mange la souris »)",
          "Voix passive : le sujet subit l'action (« La souris est mangée par le chat »)",
          "Construction du passif : sujet + auxiliaire « être » + participe passé (+ complément d'agent)",
          "Le participe passé s'accorde avec le sujet",
        ],
      },
      {
        titre: "La transformation active → passive",
        points: [
          "Le COD de la phrase active devient le sujet de la phrase passive",
          "Le sujet de la phrase active devient complément d'agent (par, parfois de)",
          "Le verbe « être » se conjugue au même temps que le verbe actif de départ",
        ],
      },
      {
        titre: "Les conditions d'emploi du passif",
        points: [
          "Seuls les verbes transitifs directs (avec COD) peuvent se mettre au passif",
          "Les verbes intransitifs ou transitifs indirects ne se mettent pas au passif",
          "Le complément d'agent peut être supprimé (agent inconnu, évident ou caché)",
        ],
      },
      {
        titre: "Les effets de sens de la voix passive",
        points: [
          "Met en valeur ce qui subit l'action plutôt que celui qui la fait",
          "Permet de taire ou de ne pas préciser l'auteur de l'action",
          "Fréquente dans les textes scientifiques, la presse, les documents officiels",
        ],
      },
    ],
    audio:
      "Fiche de révision : voix active et voix passive. À la voix active, le sujet fait l'action, comme dans le chat mange la souris. À la voix passive, le sujet subit l'action, comme dans la souris est mangée par le chat. Pour construire le passif, le complément d'objet direct de la phrase active devient le sujet de la phrase passive, tandis que le sujet actif devient un complément d'agent, introduit par par, parfois par de. Le verbe se construit avec l'auxiliaire être, conjugué au même temps que le verbe actif, suivi du participe passé, qui s'accorde avec le sujet. Seuls les verbes transitifs directs, qui acceptent un complément d'objet direct, peuvent se mettre au passif. On utilise la voix passive pour mettre en valeur ce qui subit l'action, ou pour ne pas préciser qui l'a accomplie, notamment dans les textes scientifiques ou journalistiques.",
  },
  memoCards: [
    {
      recto: "Différence entre voix active et voix passive ?",
      verso: "À la voix active, le sujet fait l'action ; à la voix passive, le sujet subit l'action.",
    },
    {
      recto: "Comment se construit la voix passive ?",
      verso: "Sujet + auxiliaire « être » (conjugué au temps du verbe actif) + participe passé (+ complément d'agent).",
    },
    {
      recto: "Que devient le COD d'une phrase active en passant au passif ?",
      verso: "Il devient le sujet de la phrase passive.",
    },
    {
      recto: "Que devient le sujet d'une phrase active en passant au passif ?",
      verso: "Il devient complément d'agent, introduit par « par » (parfois « de »).",
    },
    {
      recto: "Quels verbes peuvent se mettre au passif ?",
      verso: "Seuls les verbes transitifs directs, c'est-à-dire ceux qui ont un complément d'objet direct (COD).",
    },
    {
      recto: "Avec quels verbes le complément d'agent est-il souvent introduit par « de » ?",
      verso: "Avec des verbes de sentiment ou d'état, comme « aimé de », « respecté de », « entouré de ».",
    },
    {
      recto: "Pourquoi peut-on supprimer le complément d'agent ?",
      verso: "Quand on ne veut pas, ou qu'on ne peut pas, préciser qui a fait l'action (agent inconnu, évident ou caché).",
    },
    {
      recto: "Pourquoi utilise-t-on la voix passive dans les textes scientifiques ou la presse ?",
      verso: "Pour mettre en valeur ce qui subit l'action plutôt que celui qui la fait, et parfois pour ne pas nommer l'agent.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Le vent a renversé l'arbre », le sujet :",
      choix: ["subit l'action", "fait l'action", "n'existe pas", "est un complément d'agent"],
      bonneReponse: 1,
      explication: "« Le vent » fait l'action de renverser : c'est une phrase à la voix active.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel auxiliaire est utilisé pour former la voix passive ?",
      choix: ["avoir", "être", "aller", "faire"],
      bonneReponse: 1,
      explication: "La voix passive se construit avec l'auxiliaire être suivi du participe passé.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Transforme à la voix passive : « Le chien poursuit le chat. »",
      reponse: "Le chat est poursuivi par le chien.",
      explication: "Le COD « le chat » devient sujet ; le sujet « le chien » devient complément d'agent introduit par « par ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « La lettre est écrite par Julien », « par Julien » est :",
      choix: ["le sujet", "le complément d'objet direct", "le complément d'agent", "l'attribut du sujet"],
      bonneReponse: 2,
      explication: "« par Julien » indique qui fait l'action : c'est le complément d'agent.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel verbe ne peut PAS se mettre à la voix passive ?",
      choix: ["manger", "regarder", "dormir", "construire"],
      bonneReponse: 2,
      explication: "« dormir » est un verbe intransitif : il n'a pas de COD, donc il ne peut pas se mettre au passif.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Transforme à la voix active : « Le gâteau a été préparé par ma grand-mère. »",
      reponse: "Ma grand-mère a préparé le gâteau.",
      explication: "Le complément d'agent « par ma grand-mère » devient sujet ; le sujet passif « le gâteau » devient COD.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi on ne peut pas mettre la phrase « Elle pense à ses vacances » à la voix passive.",
      reponse: "Parce que « penser à » est un verbe transitif indirect (le complément « à ses vacances » est introduit par une préposition) : seuls les verbes transitifs directs, avec un COD, peuvent se mettre à la voix passive.",
      explication: "« penser à quelque chose » n'a pas de COD, condition indispensable pour la transformation passive.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Ce roman a été lu par des millions de lecteurs. » Quel est le temps du verbe à la voix active correspondante ?",
      choix: ["présent", "imparfait", "passé composé", "futur"],
      bonneReponse: 2,
      explication: "« a été lu » (passé composé du passif) correspond à « ont lu » (passé composé actif) : « Des millions de lecteurs ont lu ce roman. »",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique l'effet produit par la voix passive dans la phrase de presse : « Un homme a été arrêté hier soir. » (sans complément d'agent)",
      reponse: "L'absence de complément d'agent permet de ne pas préciser qui a arrêté l'homme (les forces de l'ordre, sous-entendues) tout en mettant l'accent sur l'homme arrêté, qui devient le sujet et l'information principale de la phrase.",
      explication: "C'est un usage typique de la voix passive dans la presse : mettre en valeur l'événement plutôt que l'auteur de l'action.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Transforme à la voix passive, en conservant le temps du verbe : « Les élèves rendront leurs copies demain. »",
      reponse: "Les copies seront rendues par les élèves demain.",
      explication: "Le futur actif « rendront » devient le futur passif « seront rendues », avec accord du participe passé au féminin pluriel (copies).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un camarade écrit : « Le film est regardé par moi hier soir. » Explique pourquoi cette phrase sonne mal et propose une meilleure formulation.",
      reponse: "La phrase est grammaticalement correcte mais maladroite : on utilise rarement le passif avec un complément d'agent pronom personnel comme « moi », et la construction active est bien plus naturelle. Il vaut mieux écrire : « J'ai regardé le film hier soir. »",
      explication: "La voix passive est surtout utile quand l'agent est inconnu, peu important ou volontairement effacé ; sinon, la voix active reste souvent plus naturelle, surtout à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Le champion est respecté de tous », le complément d'agent est introduit par « de » car :",
      choix: [
        "c'est une règle absolue avec tous les verbes",
        "« respecter » est un verbe de sentiment/état, ce qui favorise « de »",
        "le verbe est au futur",
        "« de » remplace toujours « par »"
      ],
      bonneReponse: 1,
      explication: "Avec certains verbes de sentiment ou d'état (aimer, respecter, entourer...), le complément d'agent est souvent introduit par « de » plutôt que « par ».",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "À la voix passive, le sujet :",
      choix: ["fait l'action", "subit l'action", "n'a pas de fonction", "est toujours supprimé"],
      bonneReponse: 1,
      explication: "C'est la définition même de la voix passive : le sujet subit l'action au lieu de la faire.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Par quelles prépositions le complément d'agent peut-il être introduit ?",
      reponse: "Par « par » (le plus courant) ou par « de » (surtout avec des verbes de sentiment ou d'état).",
      explication: "Le choix de la préposition dépend souvent du verbe employé.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle catégorie de verbes peut se mettre à la voix passive ?",
      reponse: "Seuls les verbes transitifs directs, c'est-à-dire les verbes qui peuvent avoir un complément d'objet direct.",
      explication: "Les verbes intransitifs et transitifs indirects ne peuvent pas se mettre au passif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Transforme à la voix passive : « Le jardinier arrose les fleurs. »",
      choix: [
        "Les fleurs arrosent le jardinier.",
        "Les fleurs sont arrosées par le jardinier.",
        "Le jardinier est arrosé par les fleurs.",
        "Les fleurs ont arrosé le jardinier."
      ],
      bonneReponse: 1,
      explication: "Le COD « les fleurs » devient sujet, le sujet « le jardinier » devient complément d'agent.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi choisit-on parfois la voix passive plutôt que la voix active ?",
      reponse: "Pour mettre en valeur ce qui subit l'action plutôt que celui qui la fait, ou pour ne pas préciser qui a fait l'action (agent inconnu, évident ou volontairement caché).",
      explication: "C'est un choix stylistique et informatif fréquent dans la presse et les textes scientifiques.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Voix active et voix passive",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« La maison est construite par des ouvriers. » Cette phrase est à la voix :",
          choix: ["active", "passive", "ni l'une ni l'autre", "impossible à déterminer"],
          bonneReponse: 1,
          explication: "Le sujet « la maison » subit l'action : c'est la voix passive.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Transforme à la voix passive : « Le vétérinaire soigne le chien. »",
          reponse: "Le chien est soigné par le vétérinaire.",
          explication: "Le COD « le chien » devient sujet ; « le vétérinaire » devient complément d'agent.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel type de verbe ne peut jamais se mettre à la voix passive ?",
          choix: ["Transitif direct", "Intransitif", "Verbe d'action", "Verbe au présent"],
          bonneReponse: 1,
          explication: "Un verbe intransitif n'a pas de COD, condition indispensable à la transformation passive.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme à la voix active : « Les résultats seront annoncés par le jury demain. »",
          reponse: "Le jury annoncera les résultats demain.",
          explication: "Le futur passif « seront annoncés » devient le futur actif « annoncera » ; le complément d'agent devient sujet.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi on peut supprimer le complément d'agent dans « La ville a été fondée au Moyen Âge. »",
          reponse: "On peut le supprimer car on ne connaît pas précisément (ou on ne juge pas utile de préciser) qui a fondé la ville ; l'important est le fait lui-même, mis en valeur par le sujet « la ville ».",
          explication: "L'absence de complément d'agent est fréquente quand l'auteur de l'action est inconnu ou secondaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige une phrase à la voix passive avec complément d'agent introduit par « de », en utilisant un verbe de sentiment (aimer, respecter, admirer...).",
          reponse: "Exemple de corrigé : « Ce professeur est admiré de tous ses élèves. »",
          explication: "Avec les verbes de sentiment ou d'état, le complément d'agent est souvent introduit par « de » plutôt que « par ».",
        },
      ],
    },
    {
      titre: "Examen 2 — Voix active et voix passive",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le participe passé d'un verbe à la voix passive s'accorde avec :",
          choix: ["le complément d'agent", "le sujet", "le COD", "il ne s'accorde jamais"],
          bonneReponse: 1,
          explication: "Le participe passé employé avec « être » (voix passive) s'accorde avec le sujet, comme un attribut.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel élément de la phrase active devient le sujet de la phrase passive ?",
          reponse: "Le complément d'objet direct (COD).",
          explication: "C'est la règle de base de la transformation active → passive.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Le professeur explique la leçon. » Quelle transformation passive est correcte ?",
          choix: [
            "La leçon explique le professeur.",
            "La leçon est expliquée par le professeur.",
            "Le professeur est expliqué par la leçon.",
            "La leçon a expliqué le professeur."
          ],
          bonneReponse: 1,
          explication: "« la leçon » (COD) devient sujet ; « le professeur » (sujet) devient complément d'agent.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi la phrase « Il est allé à Paris » n'est-elle pas une phrase passive, bien qu'elle contienne le verbe « être » ?",
          reponse: "Parce que « aller » est un verbe intransitif qui se conjugue avec l'auxiliaire « être » aux temps composés (comme au passé composé) sans que cela forme une voix passive : il ne s'agit pas ici de « être + participe passé d'un verbe transitif direct » exprimant une action subie, mais simplement d'un temps composé du verbe actif « aller ».",
          explication: "Il ne faut pas confondre l'auxiliaire « être » des temps composés de certains verbes avec l'auxiliaire « être » de la voix passive.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme à la voix passive, en conservant le temps du verbe : « Les enfants ont cassé le vase. »",
          reponse: "Le vase a été cassé par les enfants.",
          explication: "Le passé composé actif « ont cassé » devient le passé composé passif « a été cassé ».",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade a écrit : « Sophie a dormi par sa sœur. » Explique pourquoi cette phrase est incorrecte.",
          reponse: "Cette phrase est incorrecte car « dormir » est un verbe intransitif : il n'a pas de complément d'objet direct et ne peut donc pas être mis à la voix passive. On ne peut pas non plus ajouter de complément d'agent introduit par « par » à une phrase qui n'est pas construite au passif. La phrase n'a tout simplement pas de sens grammatical correct.",
          explication: "Cet exercice permet de vérifier la condition essentielle du passif : un verbe transitif direct, avec COD, à l'origine.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Voix active : le sujet fait l'action. Voix passive : le sujet subit l'action.",
    "Construction du passif : sujet + « être » (au temps du verbe actif) + participe passé (+ complément d'agent).",
    "Le COD de la phrase active devient le sujet de la phrase passive ; le sujet actif devient complément d'agent.",
    "Complément d'agent introduit par « par » (le plus courant) ou « de » (verbes de sentiment/état).",
    "Seuls les verbes transitifs directs (avec COD) peuvent se mettre au passif.",
    "La voix passive met en valeur ce qui subit l'action, ou permet de ne pas préciser l'agent (presse, sciences, textes officiels).",
  ],
},
{
  slug: "accords-sujet-verbe",
  titre: "Les accords sujet-verbe et dans le GN",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Maîtriser l'accord du verbe avec son sujet, même éloigné ou inversé, connaître les cas particuliers piégeux (sujets coordonnés, « qui », « on », vouvoiement) et savoir accorder tous les éléments du groupe nominal.",
  objectifs: [
    "Accorder le verbe avec son sujet en personne et en nombre",
    "Repérer le sujet même lorsqu'il est éloigné ou inversé",
    "Maîtriser les cas particuliers de l'accord sujet-verbe (sujets coordonnés, « qui », sujets collectifs, « on », vouvoiement)",
    "Accorder correctement le déterminant, le nom et l'adjectif dans le groupe nominal",
    "Reconnaître les cas particuliers du GN, notamment les adjectifs de couleur composés",
  ],
  slides: [
    {
      titre: "La règle générale : le verbe s'accorde avec son sujet",
      illustration: "🎯",
      visuel: "Les enfants jouent.",
      contenu: [
        "Le verbe s'accorde toujours avec son sujet, jamais avec un autre mot de la phrase",
        "L'accord se fait en personne (1re, 2e, 3e) et en nombre (singulier ou pluriel)",
        "Pour trouver le sujet, on pose la question « qui est-ce qui » ou « qu'est-ce qui » devant le verbe",
        "« Les enfants jouent » : le sujet pluriel impose un verbe à la 3e personne du pluriel",
      ],
      voixOff:
        "Retiens bien cette règle d'or : le verbe s'accorde toujours avec son sujet, et seulement avec lui. Cet accord se fait en personne et en nombre. Pour repérer le sujet, pose la question qui est-ce qui, ou qu'est-ce qui, juste avant le verbe. Dans la phrase les enfants jouent, le sujet les enfants est au pluriel, donc jouer se conjugue à la troisième personne du pluriel : ils jouent.",
    },
    {
      titre: "Retrouver le sujet, même caché",
      illustration: "🔍",
      visuel: "Sur la branche chantent les oiseaux.",
      contenu: [
        "Le sujet n'est pas toujours juste devant le verbe",
        "Il peut être éloigné par un mot ou un groupe intercalé : « Le chat, malgré la pluie, sort. »",
        "Il peut être inversé, placé après le verbe : « Sur la branche chantent les oiseaux. »",
        "Méthode infaillible : pose toujours la question « qui est-ce qui + verbe ? »",
      ],
      voixOff:
        "Attention, le sujet n'est pas toujours collé au verbe ! Un groupe de mots peut s'intercaler entre les deux, comme dans le chat, malgré la pluie, sort. Le sujet peut aussi être inversé, c'est-à-dire placé après le verbe, surtout à l'écrit soigné : sur la branche chantent les oiseaux. Dans tous les cas, la méthode reste la même : pose la question qui est-ce qui devant le verbe pour retrouver son vrai sujet.",
    },
    {
      titre: "Sujets coordonnés : le verbe au pluriel",
      illustration: "➕",
      visuel: "Le chien et le chat dorment.",
      contenu: [
        "Deux ou plusieurs sujets reliés par « et » forment un sujet pluriel",
        "Le verbe se met alors au pluriel, même si chaque sujet pris seul est singulier",
        "« Le chien et le chat dorment » : deux sujets singuliers, un verbe pluriel",
        "Si l'un des sujets est « je » ou « tu », c'est la personne qui l'emporte : « Toi et moi partirons »",
      ],
      voixOff:
        "Quand deux sujets sont reliés par la conjonction et, ils forment ensemble un sujet pluriel : le verbe s'accorde donc au pluriel, même si chaque sujet est singulier. Le chien et le chat dorment : voilà deux sujets singuliers réunis par un verbe pluriel. Petite subtilité : si l'un des sujets est je ou tu, c'est la personne qui l'emporte sur les autres. Toi et moi partirons, car la première personne l'emporte sur la deuxième.",
    },
    {
      titre: "Sujets coordonnés par « ou » et « ni » : tout dépend du sens",
      illustration: "🤔",
      visuel: "Le maire ou son adjoint présidera. / Ni la pluie ni le vent ne l'arrêtaient.",
      contenu: [
        "Avec « ou », le verbe reste au singulier si un seul des deux sujets peut faire l'action",
        "« Le maire ou son adjoint présidera la réunion » : un seul des deux présidera",
        "Avec « ni... ni », le verbe se met le plus souvent au pluriel",
        "« Ni la pluie ni le vent ne l'arrêtaient » : aucun des deux ne l'arrêtait",
      ],
      voixOff:
        "Avec la conjonction ou, tout dépend du sens de la phrase. Si un seul des deux sujets peut réaliser l'action, le verbe reste au singulier : le maire ou son adjoint présidera la réunion, car un seul des deux occupera ce rôle. Avec ni... ni, le verbe se met le plus souvent au pluriel, car on additionne deux négations : ni la pluie ni le vent ne l'arrêtaient. Dans le doute, demande-toi si les deux sujets peuvent agir ensemble ou non.",
    },
    {
      titre: "« Qui », sujets collectifs et le pronom « on »",
      illustration: "🧩",
      visuel: "C'est nous qui gagnons. / La plupart des élèves réussissent.",
      contenu: [
        "Le pronom relatif « qui » sujet s'accorde avec son antécédent",
        "« C'est nous qui gagnons » (1re pers. pl.) / « C'est lui qui gagne » (3e pers. sing.)",
        "Après « la plupart de », « beaucoup de » + nom pluriel, le verbe se met généralement au pluriel",
        "Le pronom « on » est toujours à la 3e personne du singulier, même quand il signifie « nous »",
      ],
      voixOff:
        "Le pronom relatif qui, quand il est sujet, s'accorde avec son antécédent, le mot qu'il remplace. C'est nous qui gagnons : qui reprend nous, donc gagner se conjugue à la première personne du pluriel. Avec des expressions comme la plupart de ou beaucoup de suivies d'un nom pluriel, le verbe se met généralement au pluriel : la plupart des élèves réussissent. Enfin, ne te trompe jamais sur on : même quand il signifie nous, il reste toujours à la troisième personne du singulier.",
    },
    {
      titre: "Le vouvoiement de politesse",
      illustration: "🎩",
      visuel: "Madame, vous êtes arrivée en avance.",
      contenu: [
        "Le « vous » de politesse s'adresse à une seule personne mais reste grammaticalement pluriel",
        "Le verbe se conjugue donc à la 2e personne du pluriel : « vous êtes », « vous partirez »",
        "L'adjectif ou le participe qui se rapporte à ce « vous » reste au singulier : c'est un accord de sens",
        "« Madame, vous êtes arrivée en avance » : le verbe est au pluriel, le participe reste au féminin singulier",
      ],
      voixOff:
        "Quand on vouvoie une seule personne par politesse, le verbe se conjugue quand même à la deuxième personne du pluriel : vous êtes, vous partirez. Mais attention, l'adjectif ou le participe passé qui se rapportent à cette personne restent au singulier, puisqu'ils désignent une seule personne réelle : c'est ce qu'on appelle un accord de sens. Madame, vous êtes arrivée en avance : le verbe êtes est au pluriel, mais arrivée reste au féminin singulier.",
    },
    {
      titre: "Les accords dans le groupe nominal",
      illustration: "🧱",
      visuel: "une petite maison blanche",
      contenu: [
        "Dans un groupe nominal, tout s'accorde avec le nom noyau",
        "Le déterminant, le nom et l'adjectif ou les adjectifs s'accordent en genre et en nombre",
        "« une petite maison blanche » : féminin singulier partout",
        "« de grands arbres verts » : masculin pluriel partout",
      ],
      voixOff:
        "Dans un groupe nominal, tous les mots gravitent autour du nom, qu'on appelle le nom noyau, et s'accordent avec lui en genre et en nombre. Le déterminant, le nom et le ou les adjectifs forment ainsi un ensemble cohérent. Dans une petite maison blanche, tout est au féminin singulier. Dans de grands arbres verts, tout est au masculin pluriel : le déterminant, le nom et l'adjectif suivent le même mouvement.",
    },
    {
      titre: "Les cas particuliers du groupe nominal",
      illustration: "⚠️",
      visuel: "des yeux bleu clair / un pantalon et une veste noirs",
      contenu: [
        "Un adjectif qui qualifie plusieurs noms se met au pluriel",
        "Si les noms sont de genres différents, l'adjectif se met au masculin pluriel : « un pantalon et une veste noirs »",
        "Les adjectifs de couleur composés de deux mots restent invariables : « des yeux bleu clair », « des robes bleu marine »",
        "Dans les noms composés, l'accord varie selon le sens des mots : il faut vérifier au cas par cas",
      ],
      voixOff:
        "Certains cas demandent plus d'attention. Quand un adjectif qualifie plusieurs noms, il se met au pluriel ; si ces noms n'ont pas le même genre, l'adjectif prend le masculin pluriel, comme dans un pantalon et une veste noirs. Autre piège classique : les adjectifs de couleur composés de deux mots restent invariables, on écrit des yeux bleu clair ou des robes bleu marine, sans jamais les accorder. Enfin, dans les noms composés, l'accord dépend du sens de chaque mot, donc il faut toujours vérifier au cas par cas.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Le verbe s'accorde avec son sujet, même éloigné ou inversé, en personne et en nombre",
        "Sujets coordonnés par « et » → pluriel ; par « ou »/« ni » → tout dépend du sens",
        "« Qui » s'accorde avec son antécédent ; « on » reste toujours au singulier",
        "Dans le GN, déterminant, nom et adjectif s'accordent tous avec le nom noyau",
      ],
      voixOff:
        "Pour résumer : le verbe s'accorde toujours avec son sujet, même quand celui-ci est éloigné ou inversé, en personne et en nombre. Avec des sujets coordonnés par et, le verbe se met au pluriel ; avec ou et ni, tout dépend du sens de la phrase. Le pronom qui s'accorde avec son antécédent, tandis que on reste toujours à la troisième personne du singulier. Enfin, dans le groupe nominal, le déterminant, le nom et l'adjectif s'accordent tous ensemble avec le nom noyau. Tu es prêt à traquer les accords dans toutes tes phrases !",
    },
  ],
  fiche: {
    intro:
      "L'accord du verbe avec son sujet et l'accord dans le groupe nominal sont deux piliers de l'orthographe grammaticale. Cette fiche résume la règle générale et les cas particuliers à connaître par cœur.",
    sections: [
      {
        titre: "L'accord du verbe avec son sujet",
        points: [
          "Le verbe s'accorde toujours avec son sujet, en personne et en nombre.",
          "Pour trouver le sujet, on pose la question « qui est-ce qui » ou « qu'est-ce qui » devant le verbe.",
          "Le sujet peut être éloigné du verbe par un mot ou un groupe intercalé.",
          "Le sujet peut être inversé, placé après le verbe (« Ainsi parlaient les sages »).",
        ],
      },
      {
        titre: "Les cas particuliers de l'accord sujet-verbe",
        points: [
          "Sujets coordonnés par « et » → verbe au pluriel, même si chaque sujet est singulier.",
          "Sujets coordonnés par « ou » → singulier si un seul agit, pluriel si les deux peuvent agir ensemble.",
          "Sujets coordonnés par « ni... ni » → verbe le plus souvent au pluriel.",
          "« Qui » sujet s'accorde avec son antécédent : « C'est moi qui gagne », « Ce sont eux qui gagnent ».",
          "Sujets collectifs (« la plupart de », « beaucoup de » + nom pluriel) → verbe généralement au pluriel.",
          "« On » est toujours à la 3e personne du singulier, même s'il signifie « nous ».",
          "Le « vous » de politesse impose un verbe au pluriel, mais l'adjectif ou le participe qui s'y rapporte reste au singulier.",
        ],
      },
      {
        titre: "Les accords dans le groupe nominal (GN)",
        points: [
          "Dans un GN, le déterminant, le nom et l'adjectif s'accordent en genre et en nombre avec le nom noyau.",
          "« une petite maison blanche » (féminin singulier) ; « de grands arbres verts » (masculin pluriel).",
          "Un adjectif qui qualifie plusieurs noms se met au pluriel.",
        ],
      },
      {
        titre: "Les cas particuliers du groupe nominal",
        points: [
          "Si un adjectif qualifie des noms de genres différents, il se met au masculin pluriel : « un pantalon et une veste noirs ».",
          "Les adjectifs de couleur composés de deux mots restent invariables : « des robes bleu marine », « des yeux bleu clair ».",
          "Dans les noms composés, l'accord varie selon le sens des mots qui les composent : il faut vérifier au cas par cas.",
        ],
      },
    ],
    audio:
      "Fiche de révision : les accords sujet-verbe et dans le groupe nominal. Le verbe s'accorde toujours avec son sujet, en personne et en nombre. Pour trouver le sujet, on pose la question qui est-ce qui, ou qu'est-ce qui, devant le verbe. Attention, le sujet peut être éloigné du verbe par un mot ou un groupe intercalé, ou même inversé, placé après le verbe, comme dans ainsi parlaient les sages. Plusieurs cas particuliers demandent de la vigilance. Quand deux sujets sont coordonnés par et, le verbe se met au pluriel, même si chaque sujet est singulier. Avec ou, on accorde au singulier si un seul des deux sujets peut faire l'action, et au pluriel si les deux peuvent agir ensemble. Avec ni... ni, le verbe se met le plus souvent au pluriel. Le pronom relatif qui, quand il est sujet, s'accorde avec son antécédent : c'est moi qui gagne, ce sont eux qui gagnent. Après des expressions comme la plupart de ou beaucoup de suivies d'un nom pluriel, le verbe se met généralement au pluriel. Le pronom on, lui, reste toujours à la troisième personne du singulier, même quand il signifie nous. Enfin, le vous de politesse impose un verbe au pluriel, mais l'adjectif ou le participe qui s'y rapporte reste au singulier, puisqu'il désigne une seule personne. Dans le groupe nominal, le déterminant, le nom et l'adjectif s'accordent tous ensemble en genre et en nombre avec le nom noyau, comme dans une petite maison blanche ou de grands arbres verts. Un adjectif qui qualifie plusieurs noms se met au pluriel, et au masculin pluriel si ces noms sont de genres différents, comme dans un pantalon et une veste noirs. Enfin, les adjectifs de couleur composés de deux mots restent invariables : on écrit des robes bleu marine ou des yeux bleu clair, sans jamais les accorder.",
  },
  memoCards: [
    {
      recto: "Comment trouver le sujet d'un verbe ?",
      verso:
        "En posant la question « qui est-ce qui » ou « qu'est-ce qui » devant le verbe ; le sujet peut être éloigné ou inversé.",
    },
    {
      recto: "Deux sujets reliés par « et » : quel accord ?",
      verso: "Le verbe se met au pluriel, même si chaque sujet est singulier (« Le chien et le chat dorment »).",
    },
    {
      recto: "Sujets reliés par « ou » : singulier ou pluriel ?",
      verso: "Singulier si un seul des deux sujets peut faire l'action ; pluriel si les deux peuvent agir ensemble.",
    },
    {
      recto: "Comment accorder le verbe après « qui » sujet ?",
      verso: "Il s'accorde avec l'antécédent de « qui » : « C'est moi qui gagne », « Ce sont eux qui gagnent ».",
    },
    {
      recto: "« La plupart de », « beaucoup de » + nom pluriel : quel accord du verbe ?",
      verso: "Le verbe se met généralement au pluriel, accordé avec le nom complément (« La plupart des élèves réussissent »).",
    },
    {
      recto: "Quelle est la personne du pronom « on » ?",
      verso: "Toujours la 3e personne du singulier, même quand « on » signifie « nous ».",
    },
    {
      recto: "Le « vous » de politesse : verbe et adjectif s'accordent-ils pareil ?",
      verso: "Non : le verbe est au pluriel (« vous êtes »), mais l'adjectif ou le participe reste au singulier (« vous êtes arrivée »).",
    },
    {
      recto: "Les adjectifs de couleur composés de deux mots sont-ils variables ?",
      verso: "Non, ils sont invariables : « des yeux bleu clair », « des robes bleu marine ».",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Accorde le verbe : « Les élèves ___ (finir) leur exercice. »",
      choix: ["finit", "finissent", "finissons", "finiras"],
      bonneReponse: 1,
      explication: "Le sujet « les élèves » est au pluriel (3e personne), donc « finir » se conjugue « finissent ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Accorde le verbe : « Sur la branche ___ (chanter) les oiseaux. »",
      choix: ["chante", "chantent", "chantons", "chantez"],
      bonneReponse: 1,
      explication:
        "Le sujet « les oiseaux » est placé après le verbe (sujet inversé) : c'est bien lui qui commande l'accord, au pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde le verbe et justifie : « Le chat, que ses maîtres adorent, ___ (dormir) toute la journée. »",
      reponse: "« Le chat, que ses maîtres adorent, dort toute la journée. »",
      explication:
        "Le sujet réel du verbe « dormir » est « le chat » (singulier). Le groupe « que ses maîtres adorent » est une proposition intercalée qui ne change pas l'accord.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Accorde le verbe : « Le vent et la pluie ___ (redoubler) de violence. »",
      choix: ["redouble", "redoublent", "redoublons", "redoubliez"],
      bonneReponse: 1,
      explication:
        "« Le vent » et « la pluie » sont deux sujets coordonnés par « et » : ils forment un sujet pluriel, donc le verbe se met au pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde le verbe et justifie : « Le maire ou son adjoint ___ (présider) la réunion. »",
      reponse: "« Le maire ou son adjoint présidera la réunion. »",
      explication:
        "Un seul des deux, le maire ou son adjoint, présidera la réunion : l'action ne peut pas être faite par les deux à la fois, donc le verbe reste au singulier.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Accorde le verbe : « Ni le froid ni la pluie ne ___ (décourager) les randonneurs. »",
      choix: ["décourage", "découragent", "décourageons", "décourageais"],
      bonneReponse: 1,
      explication:
        "Avec « ni... ni », on additionne les deux négations : ni le froid, ni la pluie, séparément ou ensemble, ne les décourage. Le verbe se met donc au pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Accorde le verbe et justifie : « C'est nous qui ___ (avoir) raison. »",
      reponse: "« C'est nous qui avons raison. »",
      explication:
        "Le pronom relatif « qui » sujet s'accorde avec son antécédent, ici « nous » (1re personne du pluriel), donc « avoir » se conjugue « avons ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Accorde le verbe : « On ___ (partir) demain matin. »",
      choix: ["pars", "part", "partons", "partez"],
      bonneReponse: 1,
      explication: "« On » est toujours à la 3e personne du singulier, même quand il signifie « nous » : « on part ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde le verbe et justifie : « La plupart des élèves ___ (réussir) leur examen. »",
      reponse: "« La plupart des élèves réussissent leur examen. »",
      explication:
        "Après « la plupart de » suivi d'un nom pluriel, le verbe s'accorde généralement avec ce nom complément, au pluriel.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel groupe nominal est correctement accordé ?",
      choix: ["une grand fenêtre ouvert", "une grande fenêtre ouverte", "un grande fenêtre ouverte", "une grande fenêtres ouvertes"],
      bonneReponse: 1,
      explication:
        "« Fenêtre » est féminin singulier : le déterminant, l'adjectif et le participe doivent tous s'accorder au féminin singulier : « une grande fenêtre ouverte ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Accorde les adjectifs de couleur et justifie : « Elle avait acheté des jupes (bleu foncé) et des chemisiers (blanc). »",
      reponse: "« Elle avait acheté des jupes bleu foncé et des chemisiers blancs. »",
      explication:
        "« Bleu foncé » est un adjectif de couleur composé de deux mots : il reste invariable. « Blanc » est un adjectif de couleur simple : il s'accorde normalement, ici au masculin pluriel avec « chemisiers ».",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Accorde l'adjectif : « Un pantalon et une veste ___ (noir). »",
      choix: ["noir", "noire", "noirs", "noires"],
      bonneReponse: 2,
      explication:
        "L'adjectif « noir » qualifie deux noms de genres différents (« pantalon », masculin, et « veste », féminin) : il se met au masculin pluriel, « noirs ».",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Accorde le verbe : « Léa et Sami ___ (jouer) au foot. »",
      choix: ["joue", "jouent", "jouons", "jouez"],
      bonneReponse: 1,
      explication: "Deux sujets coordonnés par « et » forment un sujet pluriel : le verbe se met au pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle question permet de retrouver le sujet d'un verbe ?",
      reponse: "« Qui est-ce qui » ou « qu'est-ce qui » + verbe.",
      explication: "Cette question fonctionne même si le sujet est éloigné ou inversé.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Accorde le verbe : « On ___ (être) content du résultat. »",
      choix: ["suis", "es", "est", "sommes"],
      bonneReponse: 2,
      explication: "« On » est toujours à la 3e personne du singulier : « on est ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde le verbe et justifie : « Madame, vous ___ (être) trop aimable. »",
      reponse: "« Madame, vous êtes trop aimable. »",
      explication: "Le « vous » de politesse impose un verbe à la 2e personne du pluriel, même quand on s'adresse à une seule personne.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Les adjectifs de couleur composés de deux mots sont-ils variables ou invariables ? Donne un exemple.",
      reponse: "Ils sont invariables. Exemple : « des yeux bleu clair ».",
      explication: "Contrairement aux adjectifs de couleur simples, les couleurs composées de deux mots ne s'accordent jamais.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les accords sujet-verbe et dans le GN",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le sujet d'un verbe répond à la question :",
          choix: ["Qui est-ce qui ? / Qu'est-ce qui ?", "Comment ?", "Où ?", "Pourquoi ?"],
          bonneReponse: 0,
          explication:
            "C'est en posant cette question devant le verbe qu'on retrouve son sujet, même s'il est éloigné ou inversé.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Accorde le verbe : « Les enfants ___ (chanter) une chanson. »",
          reponse: "« Les enfants chantent une chanson. »",
          explication: "Le sujet « les enfants » est au pluriel (3e personne), donc « chanter » se conjugue « chantent ».",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Accorde le verbe : « Où ___ (se trouver) les clés ? »",
          choix: ["se trouve", "se trouvent", "se trouvons", "se trouvez"],
          bonneReponse: 1,
          explication: "Le sujet « les clés » est inversé, placé après le verbe : il est pluriel, donc « se trouvent ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Accorde le verbe et justifie : « Le vent, la pluie et le froid ne ___ (arrêter) pas les coureurs. »",
          reponse: "« Le vent, la pluie et le froid n'arrêtent pas les coureurs. »",
          explication: "Trois sujets coordonnés par « et » forment un sujet pluriel : le verbe se met au pluriel.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Accorde le verbe : « Beaucoup de spectateurs ___ (applaudir) à la fin du spectacle. »",
          choix: ["applaudit", "applaudissent", "applaudissons", "applaudissais"],
          bonneReponse: 1,
          explication:
            "Après « beaucoup de » suivi d'un nom pluriel, le verbe s'accorde au pluriel avec ce nom complément.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Accorde et justifie : « Elle a acheté des rideaux (vert olive) et un tapis (rouge). »",
          reponse: "« Elle a acheté des rideaux vert olive et un tapis rouge. »",
          explication:
            "« Vert olive » est un adjectif de couleur composé : il reste invariable. « Rouge » est un adjectif de couleur simple : il s'accorde normalement, ici au masculin singulier avec « tapis ».",
        },
      ],
    },
    {
      titre: "Examen 2 — Les accords sujet-verbe et dans le GN",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Les oiseaux migrateurs traversent le ciel », quel est le sujet du verbe « traversent » ?",
          choix: ["traversent", "les oiseaux migrateurs", "le ciel", "migrateurs"],
          bonneReponse: 1,
          explication:
            "« Les oiseaux migrateurs » est le groupe qui répond à la question « qui est-ce qui traverse ? » : c'est le sujet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Accorde les mots du groupe nominal : « une (joli) robe (rouge). »",
          reponse: "« une jolie robe rouge »",
          explication:
            "« Robe » est féminin singulier : le déterminant, l'adjectif « joli » et l'adjectif « rouge » s'accordent tous au féminin singulier.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Accorde le verbe : « Le professeur ou les élèves ___ (pouvoir) répondre à cette question. »",
          choix: ["peut", "peux", "peuvent", "pouvons"],
          bonneReponse: 2,
          explication:
            "Ici, le professeur et les élèves peuvent tous répondre : l'action n'est pas réservée à un seul des deux sujets, donc le verbe se met au pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Accorde le verbe et justifie : « C'est toi qui ___ (avoir) commencé. »",
          reponse: "« C'est toi qui as commencé. »",
          explication:
            "Le pronom « qui » sujet s'accorde avec son antécédent « toi » (2e personne du singulier), donc « avoir » se conjugue « as ».",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Accorde le verbe : « Monsieur, vous ___ (sembler) fatigué. »",
          choix: ["semble", "sembles", "semblez", "semblons"],
          bonneReponse: 2,
          explication:
            "Le « vous » de politesse impose un verbe à la 2e personne du pluriel, « semblez », même si l'adjectif « fatigué » qui suit reste au masculin singulier.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Accorde l'adjectif et justifie : « Une jupe et un chemisier (blanc). »",
          reponse: "« Une jupe et un chemisier blancs. »",
          explication:
            "L'adjectif « blanc » qualifie deux noms de genres différents (« jupe », féminin, et « chemisier », masculin) : il se met au masculin pluriel, la forme qui l'emporte.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le verbe s'accorde toujours avec son sujet, en personne et en nombre, même si celui-ci est éloigné ou inversé.",
    "Sujets coordonnés par « et » → verbe au pluriel ; par « ou »/« ni » → l'accord dépend du sens de la phrase.",
    "« Qui » sujet s'accorde avec son antécédent ; « on » reste toujours à la 3e personne du singulier.",
    "Le « vous » de politesse veut un verbe au pluriel, mais l'adjectif ou le participe qui s'y rapporte reste au singulier.",
    "Dans le groupe nominal, déterminant, nom et adjectif s'accordent tous en genre et en nombre avec le nom noyau.",
    "Les adjectifs de couleur composés de deux mots (bleu marine, vert olive...) sont invariables.",
  ],
},
{
  slug: "classes-grammaticales",
  titre: "Les classes grammaticales",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Reconnaître la classe grammaticale d'un mot : les cinq classes variables (nom, déterminant, adjectif, pronom, verbe) et les quatre classes invariables (adverbe, préposition, conjonction, interjection), avec les pièges à éviter.",
  objectifs: [
    "Distinguer classe grammaticale (nature) et fonction d'un mot",
    "Connaître les cinq classes de mots variables",
    "Connaître les quatre classes de mots invariables",
    "Savoir identifier la classe d'un mot grâce à des tests simples",
    "Déjouer les pièges : un même mot peut appartenir à plusieurs classes",
  ],
  slides: [
    {
      titre: "Classe grammaticale : la carte d'identité du mot",
      illustration: "🪪",
      visuel: "Nature ≠ fonction",
      contenu: [
        "La classe grammaticale (ou nature) dit ce qu'EST un mot",
        "La fonction dit ce qu'il FAIT dans la phrase",
        "« Chat » est un nom (nature), il peut être sujet ou COD (fonction)",
        "La classe se vérifie dans le dictionnaire, la fonction non",
      ],
      voixOff:
        "La classe grammaticale, qu'on appelle aussi la nature, c'est la carte d'identité d'un mot : elle dit ce qu'il est. La fonction, elle, dit ce qu'il fait dans la phrase. Le mot chat est toujours un nom, mais selon la phrase, il peut être sujet ou complément. Retiens bien : la nature est indiquée dans le dictionnaire, la fonction change avec la phrase.",
    },
    {
      titre: "Variable ou invariable ?",
      illustration: "🔀",
      visuel: "5 variables + 4 invariables",
      contenu: [
        "Mots variables : ils changent de forme (genre, nombre, personne...)",
        "Nom, déterminant, adjectif, pronom, verbe",
        "Mots invariables : ils s'écrivent toujours pareil",
        "Adverbe, préposition, conjonction, interjection",
      ],
      voixOff:
        "On classe les mots en deux grandes familles. Les mots variables changent de forme : ils s'accordent en genre, en nombre, ou se conjuguent. Ce sont le nom, le déterminant, l'adjectif, le pronom et le verbe. Les mots invariables, eux, s'écrivent toujours de la même façon : l'adverbe, la préposition, la conjonction et l'interjection.",
    },
    {
      titre: "Le nom et le déterminant",
      illustration: "🏷️",
      visuel: "le chat, une idée, la France",
      contenu: [
        "Le nom désigne un être, une chose, une idée : chat, table, courage",
        "Nom commun (chat) ou nom propre (Paris, Léa)",
        "Le déterminant introduit le nom : le, une, ces, mon, deux...",
        "Test : un nom accepte presque toujours un déterminant devant lui",
      ],
      voixOff:
        "Le nom désigne un être, une chose ou même une idée abstraite comme le courage. Il peut être commun ou propre. Le déterminant est le petit mot placé devant le nom pour l'introduire : le, une, ces, mon. Un test très pratique : si tu peux mettre un déterminant devant un mot, c'est presque toujours un nom.",
    },
    {
      titre: "L'adjectif qualificatif",
      illustration: "🎨",
      visuel: "un ciel bleu → des mers bleues",
      contenu: [
        "L'adjectif donne une caractéristique du nom : grand, bleu, curieux",
        "Il s'accorde en genre et en nombre avec le nom",
        "Test : on peut souvent l'encadrer par « très... » (très grand)",
        "Il peut être épithète (un chat noir) ou attribut (le chat est noir)",
      ],
      voixOff:
        "L'adjectif qualificatif précise une caractéristique du nom : un ciel bleu, une élève curieuse. Il s'accorde en genre et en nombre avec le nom qu'il qualifie. Petit test : on peut souvent placer très devant un adjectif, comme très grand ou très curieux. Attention, épithète et attribut sont ses fonctions, pas sa nature.",
    },
    {
      titre: "Le pronom",
      illustration: "🔁",
      visuel: "Léa lit. → Elle lit.",
      contenu: [
        "Le pronom remplace un nom ou un groupe nominal",
        "Pronoms personnels : je, tu, il, nous, le, lui...",
        "Autres pronoms : celui-ci, le mien, qui, chacun...",
        "Il évite les répétitions : « Léa lit un livre. Elle l'adore. »",
      ],
      voixOff:
        "Le pronom sert à remplacer un nom ou un groupe nominal, souvent pour éviter une répétition. Dans Léa lit un livre, elle l'adore, le pronom elle remplace Léa, et le pronom l' remplace le livre. Il existe plusieurs sortes de pronoms : personnels, démonstratifs, possessifs, relatifs ou encore indéfinis.",
    },
    {
      titre: "Le verbe",
      illustration: "🏃",
      visuel: "courir → je cours, nous courions",
      contenu: [
        "Le verbe exprime une action (courir) ou un état (être, sembler)",
        "C'est le seul mot qui se conjugue",
        "Test : on peut changer sa personne ou son temps",
        "« Je mange » → « nous mangions » : mange est bien un verbe",
      ],
      voixOff:
        "Le verbe exprime une action, comme courir, ou un état, comme être ou sembler. C'est le seul mot de la langue qui se conjugue. Pour le repérer, change la personne ou le temps de la phrase : si le mot se transforme, c'est un verbe. Je mange devient nous mangions : mange est bien un verbe.",
    },
    {
      titre: "L'adverbe et la préposition",
      illustration: "🧭",
      visuel: "Il court vite. / Il court vers la mer.",
      contenu: [
        "L'adverbe modifie un verbe, un adjectif ou un autre adverbe : vite, très, hier",
        "Beaucoup d'adverbes se terminent en -ment : lentement, vraiment",
        "La préposition introduit un complément : à, de, pour, sans, chez, vers...",
        "Moyen mnémotechnique : « Adam part pour Anvers avec deux cents sous »",
      ],
      voixOff:
        "L'adverbe est un mot invariable qui modifie le sens d'un verbe, d'un adjectif ou d'un autre adverbe : il court vite, il est très grand. Beaucoup se terminent en ment. La préposition, elle, introduit un complément : à, de, pour, sans, chez. Pour retenir les principales, pense à la phrase Adam part pour Anvers avec deux cents sous.",
    },
    {
      titre: "Conjonctions et interjection",
      illustration: "🔗",
      visuel: "mais, ou, et, donc, or, ni, car",
      contenu: [
        "Conjonction de coordination : relie des éléments de même niveau (mais, ou, et, donc, or, ni, car)",
        "Conjonction de subordination : introduit une proposition subordonnée (que, quand, parce que, si...)",
        "L'interjection exprime une émotion : Ah ! Oh ! Hélas ! Aïe !",
        "Toutes sont invariables",
      ],
      voixOff:
        "Les conjonctions relient des éléments entre eux. Les conjonctions de coordination, mais, ou, et, donc, or, ni, car, relient des mots ou des propositions de même niveau. Les conjonctions de subordination, comme que, quand ou parce que, introduisent une proposition subordonnée. Enfin, l'interjection exprime une émotion : ah, hélas, aïe ! Tous ces mots sont invariables.",
    },
    {
      titre: "Les pièges : un mot, plusieurs classes",
      illustration: "⚠️",
      visuel: "Il ferme la porte. / Une porte fermée. / La ferme.",
      contenu: [
        "Un même mot peut changer de classe selon la phrase !",
        "« ferme » : verbe (il ferme), nom (la ferme), adjectif (un ton ferme)",
        "« que » : pronom relatif, conjonction... ; « la » : déterminant ou pronom",
        "Toujours observer le mot DANS sa phrase, jamais tout seul",
      ],
      voixOff:
        "Attention au piège classique : un même mot peut appartenir à plusieurs classes selon la phrase. Ferme est un verbe dans il ferme la porte, un nom dans la ferme de mon oncle, et un adjectif dans un ton ferme. De même, la est déterminant devant un nom, mais pronom devant un verbe, comme dans je la vois. Il faut donc toujours observer le mot dans sa phrase, jamais isolé.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Classe grammaticale = nature du mot (fixe, dans le dictionnaire)",
        "5 classes variables : nom, déterminant, adjectif, pronom, verbe",
        "4 classes invariables : adverbe, préposition, conjonction, interjection",
        "Un même mot peut changer de classe : on l'analyse dans sa phrase",
      ],
      voixOff:
        "Résumons. La classe grammaticale, c'est la nature du mot, celle que donne le dictionnaire. Il existe cinq classes variables : le nom, le déterminant, l'adjectif, le pronom et le verbe. Et quatre classes invariables : l'adverbe, la préposition, la conjonction et l'interjection. Dernier réflexe à garder : un même mot peut changer de classe selon la phrase, alors analyse-le toujours en contexte. Bravo, tu maîtrises l'essentiel !",
    },
  ],
  fiche: {
    intro:
      "La classe grammaticale (ou nature) d'un mot dit ce qu'il est : nom, verbe, adverbe... Elle ne doit pas être confondue avec la fonction, qui dit ce que le mot fait dans la phrase (sujet, COD...).",
    sections: [
      {
        titre: "Les 5 classes variables",
        points: [
          "Nom : désigne un être, une chose, une idée (chat, Paris, courage)",
          "Déterminant : introduit le nom (le, une, ces, mon, deux)",
          "Adjectif : caractérise le nom et s'accorde avec lui (bleu, curieux)",
          "Pronom : remplace un nom ou un groupe nominal (elle, celui-ci, qui)",
          "Verbe : exprime une action ou un état, seul mot qui se conjugue",
        ],
      },
      {
        titre: "Les 4 classes invariables",
        points: [
          "Adverbe : modifie un verbe, un adjectif ou un adverbe (vite, très, lentement)",
          "Préposition : introduit un complément (à, de, pour, sans, chez, vers)",
          "Conjonction : de coordination (mais, ou, et, donc, or, ni, car) ou de subordination (que, quand, parce que, si)",
          "Interjection : exprime une émotion (Ah ! Hélas ! Aïe !)",
        ],
      },
      {
        titre: "Tests pour identifier une classe",
        points: [
          "Nom : on peut placer un déterminant devant (le/une + mot)",
          "Adjectif : on peut souvent ajouter « très » devant",
          "Verbe : il change si on change le temps ou la personne",
          "Adverbe : invariable, on peut souvent le supprimer sans rendre la phrase incorrecte",
        ],
      },
      {
        titre: "Pièges classiques",
        points: [
          "Un même mot peut avoir plusieurs classes : « ferme » (verbe, nom, adjectif)",
          "« la » : déterminant (la porte) ou pronom (je la vois)",
          "« que » : pronom relatif (le livre que je lis) ou conjonction (je crois que...)",
          "« tout » : déterminant, pronom ou adverbe selon la phrase",
        ],
      },
      {
        titre: "Méthode d'analyse",
        points: [
          "1. Observer le mot dans sa phrase, jamais isolé",
          "2. Regarder les mots qui l'entourent (déterminant ? verbe ?)",
          "3. Appliquer un test (remplacement, ajout de « très », changement de temps)",
          "4. Donner la classe précise (ex. pronom personnel, déterminant possessif)",
        ],
      },
    ],
    audio:
      "Fiche de révision : les classes grammaticales. La classe grammaticale, ou nature, dit ce qu'est un mot ; la fonction dit ce qu'il fait dans la phrase. Il existe cinq classes variables. Le nom désigne un être, une chose ou une idée. Le déterminant introduit le nom. L'adjectif caractérise le nom et s'accorde avec lui. Le pronom remplace un nom ou un groupe nominal. Le verbe exprime une action ou un état : c'est le seul mot qui se conjugue. Il existe aussi quatre classes invariables. L'adverbe modifie un verbe, un adjectif ou un autre adverbe. La préposition introduit un complément, comme à, de, pour ou sans. La conjonction relie des éléments : mais, ou, et, donc, or, ni, car pour la coordination. L'interjection exprime une émotion. Attention au piège principal : un même mot peut changer de classe selon la phrase, comme ferme, qui peut être verbe, nom ou adjectif. Analyse donc toujours le mot dans son contexte.",
  },
  memoCards: [
    {
      recto: "Classe grammaticale ou fonction ?",
      verso: "La classe (nature) dit ce qu'EST le mot (nom, verbe...) ; la fonction dit ce qu'il FAIT (sujet, COD...).",
    },
    {
      recto: "Les 5 classes variables ?",
      verso: "Nom, déterminant, adjectif, pronom, verbe.",
    },
    {
      recto: "Les 4 classes invariables ?",
      verso: "Adverbe, préposition, conjonction, interjection.",
    },
    {
      recto: "Comment reconnaître un verbe ?",
      verso: "C'est le seul mot qui se conjugue : il change si on change le temps ou la personne.",
    },
    {
      recto: "Comment reconnaître un adjectif ?",
      verso: "Il caractérise un nom, s'accorde avec lui, et on peut souvent placer « très » devant.",
    },
    {
      recto: "Les 7 conjonctions de coordination ?",
      verso: "Mais, ou, et, donc, or, ni, car.",
    },
    {
      recto: "Que fait une préposition ?",
      verso: "Elle introduit un complément : à, de, pour, sans, chez, vers, avec...",
    },
    {
      recto: "« la » : déterminant ou pronom ?",
      verso: "Déterminant devant un nom (la porte) ; pronom devant un verbe (je la vois).",
    },
    {
      recto: "« ferme » peut être de quelles classes ?",
      verso: "Verbe (il ferme), nom (la ferme), adjectif (un ton ferme). Toujours analyser en contexte !",
    },
    {
      recto: "Que fait un adverbe ?",
      verso: "Mot invariable qui modifie un verbe, un adjectif ou un autre adverbe : vite, très, lentement.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la classe grammaticale du mot « courage » ?",
      choix: ["Verbe", "Adjectif", "Nom", "Adverbe"],
      bonneReponse: 2,
      explication:
        "« Courage » désigne une idée : c'est un nom commun. Le test fonctionne : on peut dire « le courage ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Léa mange une pomme », quelle est la classe de « une » ?",
      choix: ["Pronom", "Déterminant", "Adjectif", "Préposition"],
      bonneReponse: 1,
      explication: "« Une » introduit le nom « pomme » : c'est un déterminant (article indéfini).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les quatre classes de mots invariables.",
      reponse: "L'adverbe, la préposition, la conjonction et l'interjection.",
      explication: "Ces mots s'écrivent toujours de la même façon : ils ne s'accordent pas et ne se conjuguent pas.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel mot de la liste est un adverbe ?",
      choix: ["rapide", "rapidement", "rapidité", "rapides"],
      bonneReponse: 1,
      explication:
        "« Rapidement » est un adverbe en -ment, invariable. « Rapide » est un adjectif et « rapidité » un nom.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Je la regarde », quelle est la classe de « la » ?",
      choix: ["Déterminant", "Pronom", "Nom", "Conjonction"],
      bonneReponse: 1,
      explication:
        "Placé devant le verbe « regarde », « la » remplace un nom : c'est un pronom personnel, pas un déterminant.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne la classe grammaticale de chaque mot souligné : « Il marche vers la rivière » (vers) ; « Hélas ! Tout est perdu » (Hélas).",
      reponse: "« Vers » est une préposition (elle introduit le complément « la rivière ») ; « Hélas » est une interjection (elle exprime une émotion).",
      explication: "La préposition introduit un complément ; l'interjection exprime un sentiment et est souvent suivie d'un point d'exclamation.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans « Cette histoire est vraiment passionnante », donne la classe de « vraiment » et de « passionnante ».",
      reponse: "« Vraiment » est un adverbe (il modifie l'adjectif « passionnante ») ; « passionnante » est un adjectif qualificatif (il caractérise le nom « histoire »).",
      explication: "L'adverbe est invariable et modifie ici un adjectif ; l'adjectif s'accorde au féminin singulier avec « histoire ».",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Je pense que tu réussiras », quelle est la classe de « que » ?",
      choix: ["Pronom relatif", "Conjonction de subordination", "Adverbe", "Déterminant"],
      bonneReponse: 1,
      explication:
        "Ici « que » introduit la proposition subordonnée « que tu réussiras » après le verbe « pense » : c'est une conjonction de subordination. Dans « le livre que je lis », ce serait un pronom relatif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Donne la classe de « ferme » dans chacune de ces trois phrases : 1. « Ma tante habite une ferme. » 2. « Ferme la fenêtre ! » 3. « Elle a répondu d'une voix ferme. »",
      reponse: "1. Nom (précédé du déterminant « une »). 2. Verbe (à l'impératif : on peut dire « fermez »). 3. Adjectif (il caractérise le nom « voix » ; on peut dire « très ferme »).",
      explication: "C'est le piège classique : un même mot change de classe selon la phrase. Les tests (déterminant, conjugaison, « très ») permettent de trancher.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Dans « Tout le village dort ; tout est calme ; elle est tout étonnée », donne la classe de « tout » dans chaque emploi.",
      reponse: "1. Déterminant (il accompagne « le village »). 2. Pronom (il est sujet du verbe « est »). 3. Adverbe (il modifie l'adjectif « étonnée » et signifie « tout à fait »).",
      explication: "« Tout » est l'un des mots les plus polyvalents du français : déterminant, pronom ou adverbe selon le contexte.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Le rire est le propre de l'homme », quelle est la classe de « rire » ?",
      choix: ["Verbe", "Nom", "Adjectif", "Adverbe"],
      bonneReponse: 1,
      explication:
        "Précédé du déterminant « le », « rire » est ici un nom. C'est un verbe à l'infinitif devenu nom : le déterminant est l'indice décisif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse la phrase « Mais elle attendait patiemment son tour » : donne la classe grammaticale de chacun des six mots.",
      reponse: "« Mais » : conjonction de coordination. « Elle » : pronom personnel. « Attendait » : verbe (attendre, à l'imparfait). « Patiemment » : adverbe. « Son » : déterminant possessif. « Tour » : nom commun.",
      explication: "On analyse mot à mot en s'appuyant sur les tests : « elle » remplace un nom, « attendait » se conjugue, « patiemment » est invariable en -ment, « son » introduit le nom « tour ».",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien y a-t-il de classes de mots variables ?",
      choix: ["3", "4", "5", "9"],
      bonneReponse: 2,
      explication: "Cinq : nom, déterminant, adjectif, pronom, verbe.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la seule classe de mots qui se conjugue ?",
      reponse: "Le verbe.",
      explication: "Si un mot change quand on change le temps ou la personne, c'est un verbe.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Il court vite », « vite » est :",
      choix: ["un adjectif", "un adverbe", "une préposition", "un nom"],
      bonneReponse: 1,
      explication: "« Vite » est invariable et modifie le verbe « court » : c'est un adverbe.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans « Je la vois » et « la mer », quelle est la classe de « la » dans chaque cas ?",
      reponse: "Pronom personnel dans « je la vois » (devant un verbe) ; déterminant dans « la mer » (devant un nom).",
      explication: "La position du mot (devant un verbe ou devant un nom) permet de trancher.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Récite les sept conjonctions de coordination.",
      reponse: "Mais, ou, et, donc, or, ni, car.",
      explication: "Elles relient des mots ou des propositions de même niveau.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les classes grammaticales",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La classe grammaticale d'un mot est aussi appelée :",
          choix: ["sa fonction", "sa nature", "son accord", "son radical"],
          bonneReponse: 1,
          explication: "Classe grammaticale et nature sont deux noms pour la même chose : ce qu'est le mot.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite les cinq classes de mots variables.",
          reponse: "Le nom, le déterminant, l'adjectif, le pronom et le verbe.",
          explication: "Ce sont les mots qui changent de forme : accord en genre et en nombre, ou conjugaison.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Nous partons chez nos cousins », « chez » est :",
          choix: ["un adverbe", "une préposition", "une conjonction", "un déterminant"],
          bonneReponse: 1,
          explication: "« Chez » introduit le complément « nos cousins » : c'est une préposition.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans « Le vieux chêne perdait lentement ses feuilles », donne la classe de « vieux », « lentement » et « ses ».",
          reponse: "« Vieux » : adjectif qualificatif (il caractérise « chêne »). « Lentement » : adverbe (il modifie « perdait »). « Ses » : déterminant possessif (il introduit « feuilles »).",
          explication: "L'adjectif accepte « très » devant lui, l'adverbe en -ment est invariable, et le déterminant précède toujours un nom.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre la classe grammaticale et la fonction d'un mot, avec un exemple.",
          reponse: "La classe dit ce qu'est le mot (elle ne change pas et figure dans le dictionnaire) ; la fonction dit ce qu'il fait dans la phrase (elle change selon la phrase). Exemple : « chat » est toujours un nom, mais il est sujet dans « Le chat dort » et COD dans « Je vois le chat ».",
          explication: "C'est la distinction fondamentale du chapitre : nature = identité, fonction = rôle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Donne la classe de « que » dans : 1. « Le film que tu regardes est long. » 2. « Je sais que tu viendras. »",
          reponse: "1. Pronom relatif : il remplace « le film » et introduit une proposition subordonnée relative. 2. Conjonction de subordination : il introduit la subordonnée complétive « que tu viendras » et ne remplace rien.",
          explication: "Le test : si « que » remplace un nom déjà cité (son antécédent), c'est un pronom relatif ; sinon, c'est une conjonction.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les classes grammaticales",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel mot est invariable ?",
          choix: ["cheval", "joyeux", "toujours", "celui-ci"],
          bonneReponse: 2,
          explication: "« Toujours » est un adverbe : il s'écrit toujours de la même façon.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans « Aïe ! Je me suis pincé le doigt », quelle est la classe de « Aïe » ?",
          reponse: "Une interjection.",
          explication: "Elle exprime une émotion (la douleur) et est suivie d'un point d'exclamation.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Elle semble fatiguée », « semble » est :",
          choix: ["un adjectif", "un adverbe", "un verbe", "un nom"],
          bonneReponse: 2,
          explication: "« Semble » se conjugue (« elles semblaient ») : c'est un verbe, ici un verbe d'état.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quel test simple permet de vérifier qu'un mot est un nom ? Applique-le au mot « liberté ».",
          reponse: "On essaie de placer un déterminant devant le mot. « La liberté » fonctionne : « liberté » est donc un nom.",
          explication: "Le nom est presque toujours précédé (ou précédable) d'un déterminant.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Dans « Le dîner refroidit » et « Nous allons dîner », le mot « dîner » a-t-il la même classe ? Justifie.",
          reponse: "Non. Dans « Le dîner refroidit », « dîner » est un nom (précédé du déterminant « le »). Dans « Nous allons dîner », c'est un verbe à l'infinitif (après « aller », on peut le remplacer par un autre infinitif comme « partir »).",
          explication: "Même forme, deux classes : le contexte et les tests (déterminant, remplacement) permettent de trancher.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse la phrase « Or, ils avancèrent prudemment vers cette grotte sombre » : donne la classe de « or », « prudemment », « vers » et « sombre ».",
          reponse: "« Or » : conjonction de coordination. « Prudemment » : adverbe (invariable, en -ment). « Vers » : préposition (elle introduit « cette grotte sombre »). « Sombre » : adjectif qualificatif (il caractérise « grotte »).",
          explication: "On retrouve trois classes invariables et un adjectif : « or » fait partie de la liste mais, ou, et, donc, or, ni, car.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La classe grammaticale (nature) dit ce qu'EST un mot ; la fonction dit ce qu'il FAIT dans la phrase.",
    "5 classes variables : nom, déterminant, adjectif, pronom, verbe.",
    "4 classes invariables : adverbe, préposition, conjonction, interjection.",
    "Tests utiles : déterminant devant → nom ; « très » devant → adjectif ; se conjugue → verbe.",
    "Les 7 conjonctions de coordination : mais, ou, et, donc, or, ni, car.",
    "Erreur classique à éviter : donner la classe d'un mot sans regarder sa phrase — « ferme », « la » ou « tout » changent de classe selon le contexte.",
  ],
},
{
  slug: "fonctions-grammaticales",
  titre: "Les fonctions grammaticales",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Identifier la fonction d'un mot ou d'un groupe de mots dans la phrase : sujet, COD, COI, attribut du sujet, compléments circonstanciels, épithète, apposition et complément du nom, sans les confondre avec la classe grammaticale.",
  objectifs: [
    "Distinguer la fonction (rôle dans la phrase) de la classe grammaticale (nature du mot)",
    "Identifier le sujet grâce aux tests « qui est-ce qui/qu'est-ce qui » et « c'est... qui »",
    "Reconnaître le COD, le COI et l'attribut du sujet, et ne pas les confondre",
    "Repérer les compléments circonstanciels grâce à leur mobilité et leur suppressibilité",
    "Distinguer épithète, apposition et complément du nom",
  ],
  slides: [
    {
      titre: "Fonction et classe : deux questions différentes",
      illustration: "🎭",
      visuel: "Nature = carte d'identité / Fonction = rôle",
      contenu: [
        "La fonction dit ce que le mot FAIT dans la phrase",
        "La classe grammaticale (déjà étudiée) dit ce que le mot EST",
        "« Chat » est toujours un nom (classe), mais tantôt sujet, tantôt COD (fonction)",
        "Une même classe peut occuper plusieurs fonctions, selon la phrase",
      ],
      voixOff:
        "Dans ce chapitre, on ne demande plus ce qu'est un mot, mais ce qu'il fait dans la phrase : c'est sa fonction. Ne confonds pas fonction et classe grammaticale, que tu as déjà étudiée. Le mot chat, par exemple, est toujours un nom, c'est sa classe, mais il peut être sujet dans une phrase et complément d'objet direct dans une autre : c'est sa fonction, et elle change. Retiens bien cette différence, c'est la base de tout ce chapitre.",
    },
    {
      titre: "Le sujet : qui fait l'action ?",
      illustration: "🙋",
      visuel: "Qui est-ce qui... ? / Qu'est-ce qui... ?",
      contenu: [
        "Le sujet fait l'action ou est dans l'état exprimé par le verbe",
        "Test : « qui est-ce qui + verbe ? » ou « qu'est-ce qui + verbe ? »",
        "Autre test : encadrement par « c'est... qui » (c'est le chat qui dort)",
        "Le sujet peut être placé après le verbe : sujet inversé",
      ],
      voixOff:
        "Le sujet, c'est celui qui fait l'action ou qui est dans l'état décrit par le verbe. Pour le trouver, pose la question qui est-ce qui, ou qu'est-ce qui, devant le verbe. Tu peux aussi encadrer le groupe par c'est... qui, comme dans c'est le chat qui dort. Attention, le sujet n'est pas toujours placé juste avant le verbe : dans certaines phrases, il se trouve après, on parle alors de sujet inversé.",
    },
    {
      titre: "Le complément d'objet direct (COD)",
      illustration: "🎯",
      visuel: "Léa mange une pomme. → mange quoi ?",
      contenu: [
        "Le COD complète directement le verbe, sans préposition",
        "Test : « verbe + qui ? » ou « verbe + quoi ? »",
        "Il se remplace par un pronom : le, la, les, l'",
        "Exemple : Léa mange une pomme → mange quoi ? une pomme (COD)",
      ],
      voixOff:
        "Le complément d'objet direct, ou COD, complète directement le verbe, sans préposition entre les deux. Pour le trouver, pose la question verbe plus qui, ou verbe plus quoi. Dans Léa mange une pomme, on demande mange quoi : une pomme, c'est le COD. Astuce : le COD se remplace facilement par le, la, les ou l', comme dans Léa la mange.",
    },
    {
      titre: "Le complément d'objet indirect (COI)",
      illustration: "🔗",
      visuel: "Elle parle à son frère. → parle à qui ?",
      contenu: [
        "Le COI complète le verbe par l'intermédiaire d'une préposition (à, de...)",
        "Test : « verbe + à qui/quoi ? » ou « verbe + de qui/quoi ? »",
        "Il se remplace par lui, leur, y, en",
        "Exemple : Elle parle à son frère → parle à qui ? à son frère (COI)",
      ],
      voixOff:
        "Le complément d'objet indirect, ou COI, complète lui aussi le verbe, mais par l'intermédiaire d'une préposition, le plus souvent à ou de. On le trouve en posant verbe plus à qui, à quoi, de qui ou de quoi. Dans elle parle à son frère, on demande parle à qui : à son frère, voilà le COI. On peut souvent le remplacer par lui, leur, y ou en.",
    },
    {
      titre: "L'attribut du sujet",
      illustration: "🪞",
      visuel: "Le ciel est bleu. (état, pas action)",
      contenu: [
        "L'attribut suit un verbe d'état : être, sembler, paraître, devenir, rester...",
        "Il caractérise le sujet et s'accorde souvent avec lui",
        "Piège : ne pas confondre avec le COD (verbe d'action)",
        "Exemple : Le ciel est bleu → « bleu » caractérise « le ciel » (attribut)",
      ],
      voixOff:
        "L'attribut du sujet apparaît après un verbe d'état, comme être, sembler, paraître, devenir ou rester. Il ne décrit pas une action, mais une qualité ou un état du sujet, avec lequel il s'accorde souvent. Dans le ciel est bleu, bleu caractérise le ciel : c'est l'attribut du sujet. Attention à ne pas le confondre avec le COD : il faut regarder si le verbe exprime une action ou un état.",
    },
    {
      titre: "Les compléments circonstanciels (CC)",
      illustration: "🧩",
      visuel: "Hier, Léa a chanté avec joie dans le jardin.",
      contenu: [
        "Ils précisent les circonstances : temps, lieu, manière, cause...",
        "CC de temps (quand ?), de lieu (où ?), de manière (comment ?), de cause (pourquoi ?)",
        "Ils sont souvent mobiles : on peut les déplacer dans la phrase",
        "Ils sont souvent supprimables, sans rendre la phrase incorrecte",
      ],
      voixOff:
        "Les compléments circonstanciels précisent les circonstances de l'action : quand, où, comment ou pourquoi elle se produit. On distingue notamment le complément de temps, de lieu, de manière et de cause. Leur grande particularité, c'est qu'on peut presque toujours les déplacer dans la phrase et les supprimer sans que la phrase devienne incorrecte. Dans hier, Léa a chanté avec joie dans le jardin, on pourrait dire simplement Léa a chanté.",
    },
    {
      titre: "Épithète et apposition",
      illustration: "🖌️",
      visuel: "un chat noir / Paris, capitale de la France",
      contenu: [
        "L'épithète est un adjectif directement rattaché au nom, sans verbe",
        "Épithète liée (un chat noir) ou détachée par une virgule (Le chat, noir, dort.)",
        "L'apposition est un nom ou groupe nominal qui renomme un autre nom",
        "Elle est séparée par une virgule, sans mot de liaison (Paris, capitale de la France...)",
      ],
      voixOff:
        "L'épithète est un adjectif directement collé au nom qu'il qualifie, sans passer par un verbe : un chat noir. Elle peut aussi être détachée, séparée par une virgule, comme dans le chat, noir, dort. L'apposition, elle, est un nom ou un groupe nominal qui renomme un autre nom, sans aucun mot de liaison, et le plus souvent entre virgules : Paris, capitale de la France, est une grande ville.",
    },
    {
      titre: "Le complément du nom",
      illustration: "🧷",
      visuel: "le vélo de Paul / une tasse à café",
      contenu: [
        "Le complément du nom précise un nom, introduit par une préposition",
        "Prépositions fréquentes : de, à, en, sans, avec...",
        "Il se place juste après le nom qu'il complète",
        "Exemple : le vélo de Paul → « de Paul » précise « vélo » (complément du nom)",
      ],
      voixOff:
        "Le complément du nom vient préciser un nom, en général grâce à une préposition comme de, à ou en. Il se place juste après le nom qu'il complète. Dans le vélo de Paul, de Paul précise à qui appartient le vélo : c'est un complément du nom. De même, dans une tasse à café, à café précise à quoi sert la tasse.",
    },
    {
      titre: "Les pièges à éviter",
      illustration: "⚠️",
      visuel: "COD (action) ≠ attribut (état) / sujet inversé",
      contenu: [
        "Piège 1 : confondre COD et attribut → regarde si le verbe exprime une action ou un état",
        "« Il rencontre un champion » (COD) / « Il devient un champion » (attribut)",
        "Piège 2 : ne pas repérer un sujet inversé, placé après le verbe",
        "Le test « qui est-ce qui/qu'est-ce qui + verbe » fonctionne toujours, même si le sujet est après",
      ],
      voixOff:
        "Deux pièges reviennent souvent. Le premier consiste à confondre le complément d'objet direct et l'attribut du sujet : il faut toujours regarder si le verbe exprime une action, comme rencontrer, ou un état, comme devenir. Il rencontre un champion, c'est un COD ; il devient un champion, c'est un attribut. Le second piège, c'est de ne pas reconnaître un sujet placé après le verbe, un sujet inversé. Dans ce cas, le test qui est-ce qui, ou qu'est-ce qui, plus le verbe, fonctionne toujours et te donnera la bonne réponse.",
    },
  ],
  fiche: {
    intro:
      "La fonction d'un mot ou d'un groupe de mots indique le rôle qu'il joue dans la phrase : sujet, complément d'objet, attribut, complément circonstanciel... Contrairement à la classe grammaticale, la fonction change selon la phrase.",
    sections: [
      {
        titre: "Fonction vs classe : ne pas confondre",
        points: [
          "La classe grammaticale (nature) dit ce qu'EST un mot : nom, verbe, adjectif... (déjà étudiée dans un autre chapitre)",
          "La fonction dit ce que le mot FAIT dans la phrase : sujet, COD, attribut...",
          "Un même mot (même classe) peut avoir des fonctions différentes selon la phrase",
          "Exemple : « chat » est un nom (classe) ; sujet dans « Le chat dort », COD dans « Je vois le chat »",
        ],
      },
      {
        titre: "Sujet, COD et COI : les fonctions liées au verbe",
        points: [
          "Sujet : fait l'action ou est dans l'état exprimé par le verbe. Test : « qui est-ce qui / qu'est-ce qui + verbe ? » ou encadrement « c'est... qui »",
          "COD : complète directement le verbe, sans préposition. Test : « verbe + qui/quoi ? ». Pronoms : le, la, les, l'",
          "COI : complète le verbe par une préposition (à, de...). Test : « verbe + à/de qui/quoi ? ». Pronoms : lui, leur, y, en",
          "Le sujet peut être placé après le verbe : on parle de sujet inversé",
        ],
      },
      {
        titre: "Attribut du sujet et compléments circonstanciels",
        points: [
          "Attribut du sujet : suit un verbe d'état (être, sembler, paraître, devenir, rester...) et caractérise le sujet, avec lequel il s'accorde souvent",
          "Piège : COD (verbe d'action) ≠ attribut (verbe d'état) — comparer « il rencontre un champion » / « il devient un champion »",
          "Complément circonstanciel (CC) : précise les circonstances (temps, lieu, manière, cause...)",
          "Les CC sont en général mobiles (on peut les déplacer) et supprimables, contrairement au COD et au COI",
        ],
      },
      {
        titre: "Épithète, apposition et complément du nom",
        points: [
          "Épithète : adjectif directement rattaché à un nom, sans verbe, liée (un chat noir) ou détachée par une virgule (le chat, noir, dort)",
          "Apposition : nom ou groupe nominal qui renomme un autre nom, séparé par une virgule, sans mot de liaison (Paris, capitale de la France)",
          "Complément du nom : groupe introduit par une préposition (de, à, en...) qui précise un nom (le vélo de Paul)",
          "Ces trois fonctions complètent un nom, mais de manières différentes : par un adjectif, par un autre nom, ou par un groupe prépositionnel",
        ],
      },
    ],
    audio:
      "Fiche de révision : les fonctions grammaticales. La fonction indique le rôle que joue un mot ou un groupe de mots dans la phrase ; elle ne doit pas être confondue avec la classe grammaticale, qui dit ce qu'est le mot et qui a été étudiée dans un autre chapitre. Un même mot, comme chat, garde toujours la même classe, un nom, mais peut avoir des fonctions différentes selon la phrase : sujet dans le chat dort, complément d'objet direct dans je vois le chat. Pour trouver le sujet, on pose la question qui est-ce qui, ou qu'est-ce qui, devant le verbe, ou on encadre le groupe par c'est... qui ; attention, le sujet peut aussi être placé après le verbe, on parle alors de sujet inversé. Le complément d'objet direct, le COD, complète directement le verbe sans préposition et répond à la question verbe plus qui ou verbe plus quoi ; il se remplace par le, la, les ou l'. Le complément d'objet indirect, le COI, est introduit par une préposition, à ou de le plus souvent, et répond à verbe plus à qui, à quoi, de qui ou de quoi ; il se remplace par lui, leur, y ou en. L'attribut du sujet suit un verbe d'état comme être, sembler, paraître, devenir ou rester : il caractérise le sujet et s'accorde souvent avec lui. Attention à ne pas confondre le COD, qui suit un verbe d'action, et l'attribut, qui suit un verbe d'état : il rencontre un champion, c'est un COD ; il devient un champion, c'est un attribut. Les compléments circonstanciels précisent les circonstances : le temps, le lieu, la manière ou la cause ; ils sont en général mobiles et supprimables, contrairement au COD et au COI. Enfin, trois fonctions complètent un nom de façons différentes : l'épithète, qui est un adjectif directement rattaché au nom, comme dans un chat noir ; l'apposition, qui est un nom ou un groupe nominal séparé par une virgule et qui renomme un autre nom, comme dans Paris, capitale de la France ; et le complément du nom, qui est un groupe introduit par une préposition, comme dans le vélo de Paul.",
  },
  memoCards: [
    {
      recto: "Fonction ou classe grammaticale ?",
      verso:
        "La fonction dit ce que le mot FAIT dans la phrase (sujet, COD...) ; la classe dit ce qu'il EST (nom, verbe...). Un même mot change souvent de fonction, mais pas de classe.",
    },
    {
      recto: "Comment trouver le sujet ?",
      verso: "On pose « qui est-ce qui + verbe ? » (ou « qu'est-ce qui »), ou on encadre par « c'est... qui ».",
    },
    {
      recto: "Comment trouver le COD ?",
      verso:
        "On pose « verbe + qui ? » ou « verbe + quoi ? » juste après le verbe, sans préposition. Il se remplace par le, la, les, l'.",
    },
    {
      recto: "Comment trouver le COI ?",
      verso:
        "On pose « verbe + à qui/quoi ? » ou « verbe + de qui/quoi ? » : le complément est introduit par une préposition. Il se remplace par lui, leur, y, en.",
    },
    {
      recto: "Comment reconnaître l'attribut du sujet ?",
      verso: "Il suit un verbe d'état (être, sembler, paraître, devenir, rester...) et caractérise le sujet, avec lequel il s'accorde souvent.",
    },
    {
      recto: "Comment reconnaître un complément circonstanciel (CC) ?",
      verso:
        "Il précise les circonstances (temps, lieu, manière, cause...) ; on peut souvent le déplacer et le supprimer sans rendre la phrase incorrecte.",
    },
    {
      recto: "Épithète ou apposition ?",
      verso:
        "L'épithète est un adjectif directement lié au nom (un chat noir) ; l'apposition est un nom ou GN séparé par une virgule qui renomme un autre nom (Paris, capitale de la France).",
    },
    {
      recto: "Qu'est-ce qu'un complément du nom ?",
      verso: "Un groupe introduit par une préposition (souvent « de ») qui complète un nom : le vélo de Paul.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Le chien aboie. », quelle est la fonction de « Le chien » ?",
      choix: ["COD", "Sujet", "Attribut du sujet", "Complément du nom"],
      bonneReponse: 1,
      explication: "Test : qui est-ce qui aboie ? Le chien. « Le chien » est donc sujet du verbe « aboie ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Léa lit un roman. », quelle est la fonction de « un roman » ?",
      choix: ["Sujet", "COI", "COD", "Épithète"],
      bonneReponse: 2,
      explication: "Léa lit quoi ? un roman, directement après le verbe, sans préposition : c'est le COD.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Indique la fonction du groupe « à sa sœur » dans la phrase « Il écrit à sa sœur. »",
      reponse: "« À sa sœur » est complément d'objet indirect (COI) du verbe « écrit ».",
      explication:
        "Le groupe est introduit par la préposition « à » après le verbe (écrit à qui ?) ; on ne peut pas dire « il écrit sa sœur ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Lequel de ces verbes peut introduire un attribut du sujet ?",
      choix: ["Manger", "Sembler", "Regarder", "Écrire"],
      bonneReponse: 1,
      explication: "« Sembler » est un verbe d'état ; les trois autres sont des verbes d'action, qui n'introduisent pas d'attribut.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Indique la fonction du groupe « le soir » dans « Nous révisons le soir. »",
      reponse: "« Le soir » est complément circonstanciel de temps (CC de temps).",
      explication:
        "Il répond à la question « quand ? » et peut être déplacé (« Le soir, nous révisons. ») ou supprimé (« Nous révisons. »).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Elle paraît fatiguée. », quelle est la fonction de « fatiguée » ?",
      choix: ["COD", "CC de manière", "Attribut du sujet", "Épithète"],
      bonneReponse: 2,
      explication: "« Paraître » est un verbe d'état ; « fatiguée » caractérise le sujet « elle » et s'accorde avec lui : c'est l'attribut du sujet.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Indique la fonction du groupe « un champion » dans « Il devient un champion. » puis dans « Il rencontre un champion. »",
      reponse:
        "Dans la première phrase, « un champion » est attribut du sujet (verbe d'état « devenir », il caractérise « il »). Dans la seconde, « un champion » est COD (verbe d'action « rencontrer », il répond à « rencontre quoi ? »).",
      explication: "C'est le piège classique attribut/COD : il faut toujours regarder si le verbe exprime une action ou un état.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Mon frère, un grand gourmand, a tout mangé. », que désigne « un grand gourmand » par rapport à « Mon frère » ?",
      choix: ["Une épithète", "Un complément du nom", "Une apposition", "Un attribut du sujet"],
      bonneReponse: 2,
      explication:
        "« Un grand gourmand » est un groupe nominal séparé par une virgule qui renomme « mon frère », sans verbe d'état : c'est une apposition.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans « Ainsi vivaient nos ancêtres. », identifie le sujet du verbe « vivaient » et explique comment tu l'as trouvé malgré sa place dans la phrase.",
      reponse:
        "Le sujet est « nos ancêtres » (sujet inversé, placé après le verbe). On le trouve avec le test : qui est-ce qui vivaient ? Nos ancêtres.",
      explication:
        "La position du sujet peut varier (sujet inversé), mais le test « qui est-ce qui / qu'est-ce qui + verbe » fonctionne toujours.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Le livre que je lis est passionnant. », quelle est la fonction du groupe « passionnant » ?",
      choix: ["COD", "Épithète", "Attribut du sujet", "Complément du nom"],
      bonneReponse: 2,
      explication: "« Est » est un verbe d'état ; « passionnant » caractérise le sujet « le livre que je lis » : c'est l'attribut du sujet.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Analyse la phrase « La vieille maison de pierre semblait abandonnée. » : donne la fonction des groupes « de pierre » et « abandonnée ».",
      reponse:
        "« De pierre » est complément du nom « maison » (il précise en quoi la maison est faite). « Abandonnée » est attribut du sujet « La vieille maison de pierre » (après le verbe d'état « semblait »).",
      explication:
        "On distingue le complément du nom, rattaché à un nom par une préposition, de l'attribut du sujet, rattaché au sujet par un verbe d'état.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans « Sur la table traînaient de vieux journaux jaunis. », indique la fonction de « Sur la table » et celle de « de vieux journaux jaunis ».",
      reponse:
        "« Sur la table » est complément circonstanciel de lieu (déplaçable et supprimable). « De vieux journaux jaunis » est le sujet inversé du verbe « traînaient » (qu'est-ce qui traînait ? de vieux journaux jaunis).",
      explication: "Cette phrase cumule un CC de lieu en tête de phrase et un sujet inversé placé après le verbe.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle question pose-t-on pour trouver le sujet ?",
      choix: ["Où ça ?", "Qui est-ce qui / Qu'est-ce qui + verbe ?", "Comment ?", "Pourquoi ?"],
      bonneReponse: 1,
      explication: "On peut aussi encadrer le groupe par « c'est... qui ».",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la différence entre COD et COI ?",
      reponse:
        "Le COD suit directement le verbe, sans préposition (verbe + qui/quoi ?) ; le COI est introduit par une préposition (verbe + à/de qui/quoi ?).",
      explication: "Le COD se remplace par le/la/les, le COI par lui/leur/y/en.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Après quel type de verbe trouve-t-on un attribut du sujet ?",
      choix: ["Un verbe d'action", "Un verbe d'état", "Un verbe pronominal", "Un verbe transitif direct"],
      bonneReponse: 1,
      explication: "Être, sembler, paraître, devenir, rester... sont des verbes d'état qui introduisent un attribut du sujet.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment reconnaît-on un complément circonstanciel ?",
      reponse:
        "Il peut généralement être déplacé dans la phrase et supprimé sans la rendre incorrecte, contrairement au COD ou au COI.",
      explication: "COD et COI sont des compléments essentiels du verbe : on ne peut ni les déplacer ni les supprimer aussi librement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Quelle est la différence entre une épithète détachée et une apposition ?",
      reponse:
        "L'épithète détachée est un adjectif séparé par une virgule qui qualifie le nom (Le chat, noir, dort.) ; l'apposition est un nom ou un groupe nominal séparé par une virgule qui renomme le nom (Paris, capitale de la France, est une grande ville.).",
      explication: "L'épithète est toujours un adjectif ; l'apposition est toujours un nom ou un groupe nominal.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les fonctions grammaticales",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Les enfants jouent dans le parc. », quelle est la fonction de « Les enfants » ?",
          choix: ["COD", "Sujet", "Attribut du sujet", "Épithète"],
          bonneReponse: 1,
          explication: "Test : qui est-ce qui joue ? Les enfants.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Léa offre un cadeau à son ami. », quelle est la fonction de « à son ami » ?",
          choix: ["COD", "COI", "CC de lieu", "Complément du nom"],
          bonneReponse: 1,
          explication: "Léa offre à qui ? à son ami, introduit par la préposition « à » : c'est le COI.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Le ciel devient gris. », quelle est la fonction de « gris » ?",
          choix: ["COD", "CC de manière", "Attribut du sujet", "Épithète"],
          bonneReponse: 2,
          explication: "« Devenir » est un verbe d'état ; « gris » caractérise et s'accorde avec le sujet « le ciel ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Indique la fonction du groupe « avec prudence » dans « Il traverse la rue avec prudence. », et justifie en donnant un test.",
          reponse:
            "« Avec prudence » est un complément circonstanciel de manière : il répond à la question « comment ? » et peut être supprimé (« Il traverse la rue. ») ou déplacé (« Avec prudence, il traverse la rue. »).",
          explication: "La mobilité et la suppressibilité sont les deux tests caractéristiques des compléments circonstanciels.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Dans « Mon oncle, pêcheur passionné, part tous les matins au bord du lac. », indique la fonction de « pêcheur passionné » et celle de « au bord du lac ».",
          reponse:
            "« Pêcheur passionné » est apposé à « mon oncle » (apposition, séparée par une virgule, sans verbe). « Au bord du lac » est complément circonstanciel de lieu (répond à « où ? », déplaçable et supprimable).",
          explication: "L'apposition renomme un nom ; le CC de lieu précise l'endroit de l'action.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Compare les fonctions de « une glace au chocolat » dans « Elle adore une glace au chocolat. » et de « fraîche » dans « Cette glace est fraîche. »",
          reponse:
            "« Une glace au chocolat » est COD du verbe d'action « adore » (elle adore quoi ?). « Fraîche » est attribut du sujet « Cette glace », relié par le verbe d'état « est », et s'accorde avec lui.",
          explication: "Il faut distinguer le verbe d'action, qui introduit un COD, du verbe d'état, qui introduit un attribut.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les fonctions grammaticales",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Le vent souffle très fort. », quelle est la fonction de « très fort » ?",
          choix: ["COD", "CC de manière", "Attribut du sujet", "Sujet"],
          bonneReponse: 1,
          explication: "« Très fort » répond à « comment ? » et peut être déplacé ou supprimé : c'est un CC de manière.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel test permet de vérifier qu'un groupe est le sujet d'un verbe ?",
          choix: [
            "L'encadrer par « c'est... qui »",
            "Le remplacer par « très »",
            "Le supprimer sans problème",
            "Le déplacer en début de phrase",
          ],
          bonneReponse: 0,
          explication: "On peut aussi poser la question « qui est-ce qui / qu'est-ce qui + verbe ? ».",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Le sac en cuir appartient à Sarah. », quelle est la fonction de « en cuir » ?",
          choix: ["Épithète", "Complément du nom", "Attribut du sujet", "CC de manière"],
          bonneReponse: 1,
          explication: "« En cuir » est un groupe introduit par la préposition « en » qui précise le nom « sac » : c'est un complément du nom.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Indique la fonction de « ses devoirs » dans « Léo termine ses devoirs avant le dîner. » et celle de « avant le dîner ».",
          reponse:
            "« Ses devoirs » est COD du verbe « termine » (termine quoi ?). « Avant le dîner » est complément circonstanciel de temps (répond à « quand ? », déplaçable : « Avant le dîner, Léo termine ses devoirs. »).",
          explication: "Le COD est un complément essentiel du verbe ; le CC de temps est mobile et supprimable.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Dans « Peut-être reviendra-t-elle demain. », quel est le sujet du verbe « reviendra » ? Explique la difficulté de cette phrase.",
          reponse:
            "Le sujet est « elle », placé après le verbe : c'est un sujet inversé (fréquent après « peut-être » en tête de phrase). Le test « qui est-ce qui reviendra ? » donne toujours la bonne réponse : elle.",
          explication: "Le sujet inversé peut dérouter car il ne se trouve pas avant le verbe, mais le test reste valable.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Explique pourquoi, dans « Le chat guette la souris. », « la souris » est COD, alors que dans « Le chat reste immobile. », « immobile » est attribut du sujet.",
          reponse:
            "« La souris » est COD car « guetter » est un verbe d'action et « la souris » répond à « guette quoi ? » sans préposition. « Immobile » est attribut du sujet car « rester » est un verbe d'état : il ne décrit pas une action mais caractérise le sujet « le chat », avec lequel il s'accorde.",
          explication: "C'est la distinction clé entre verbe d'action (qui peut introduire un COD) et verbe d'état (qui introduit un attribut).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La fonction dit ce que le mot FAIT dans la phrase (sujet, COD...) ; ne pas la confondre avec la classe grammaticale, qui dit ce qu'il EST (nom, verbe...).",
    "Le sujet se trouve avec « qui est-ce qui / qu'est-ce qui + verbe ? » ou l'encadrement « c'est... qui » — même quand il est placé après le verbe (sujet inversé).",
    "Le COD suit directement le verbe sans préposition (verbe + qui/quoi ?) ; le COI est introduit par une préposition (verbe + à/de qui/quoi ?).",
    "L'attribut du sujet suit un verbe d'état (être, sembler, paraître, devenir, rester...) et caractérise le sujet, avec lequel il s'accorde souvent — ne pas le confondre avec le COD, qui suit un verbe d'action.",
    "Les compléments circonstanciels (temps, lieu, manière, cause...) sont en général mobiles et supprimables, contrairement aux compléments essentiels du verbe (COD, COI).",
    "Épithète (adjectif lié au nom), apposition (nom/GN séparé par une virgule) et complément du nom (GN introduit par une préposition) sont trois façons différentes de compléter un nom.",
  ],
},
{
  slug: "imparfait-passe-simple",
  titre: "Imparfait et passé simple",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Conjuguer l'imparfait et le passé simple de l'indicatif, et savoir choisir le bon temps pour raconter un récit : description et habitudes à l'imparfait, actions qui font avancer l'histoire au passé simple.",
  objectifs: [
    "Former l'imparfait de l'indicatif pour tous les verbes",
    "Former le passé simple des verbes des trois groupes, réguliers et irréguliers",
    "Distinguer les valeurs d'emploi de l'imparfait et du passé simple dans un récit",
    "Choisir le temps adapté à chaque action, au premier plan ou à l'arrière-plan",
    "Éviter les pièges d'orthographe liés à ces deux temps (accents, terminaisons homophones)",
  ],
  slides: [
    {
      titre: "Deux temps pour raconter",
      illustration: "📖",
      visuel: "Il faisait nuit... quand un bruit retentit.",
      contenu: [
        "Le récit au passé combine souvent l'imparfait et le passé simple",
        "Ils ne racontent pas la même chose ni de la même façon",
        "Bien les choisir rend un récit clair et vivant",
        "Objectif : savoir les conjuguer, puis savoir quand les employer",
      ],
      voixOff:
        "Quand on raconte une histoire au passé, en français, on utilise très souvent deux temps ensemble : l'imparfait et le passé simple. Ces deux temps ne se conjuguent pas de la même façon, et surtout, ils ne servent pas à la même chose dans un récit. Dans ce chapitre, tu vas apprendre à les former correctement, puis à choisir le bon temps selon ce que tu veux exprimer. C'est une compétence essentielle pour réussir tes rédactions.",
    },
    {
      titre: "Former l'imparfait : la règle générale",
      illustration: "⏳",
      visuel: "nous chantONS → je chantais",
      contenu: [
        "Radical = celui de « nous » au présent, sans -ons",
        "Terminaisons, pour tous les verbes : -ais, -ais, -ait, -ions, -iez, -aient",
        "chanter : nous chantons → je chantais, tu chantais, il chantait...",
        "finir : nous finissons → je finissais ; prendre : nous prenons → je prenais",
      ],
      voixOff:
        "Pour former l'imparfait, on prend le radical du verbe à la première personne du pluriel du présent, celle qui se termine par -ons, et on lui retire cette terminaison. On ajoute ensuite les six terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient. Ainsi, nous chantons devient je chantais, et nous finissons devient je finissais. Cette règle fonctionne pour la quasi-totalité des verbes français, à une seule exception près.",
    },
    {
      titre: "Être à l'imparfait : l'exception",
      illustration: "❗",
      visuel: "j'étais, tu étais, il était...",
      contenu: [
        "Être ne suit pas la règle générale : son radical est ét-",
        "j'étais, tu étais, il était",
        "nous étions, vous étiez, ils étaient",
        "Les terminaisons restent les mêmes : -ais, -ais, -ait, -ions, -iez, -aient",
      ],
      voixOff:
        "Le verbe être est le seul verbe vraiment irrégulier à l'imparfait, car son radical, ét-, ne vient pas du présent nous sommes. On dit donc j'étais, tu étais, il était, nous étions, vous étiez, ils étaient. Les terminaisons, elles, restent parfaitement régulières. C'est pourquoi il faut apprendre cette conjugaison par cœur.",
    },
    {
      titre: "Le passé simple des verbes en -er",
      illustration: "1️⃣",
      visuel: "il chanta, ils chantèrent",
      contenu: [
        "Terminaisons : -ai, -as, -a, -âmes, -âtes, -èrent",
        "chanter : je chantai, tu chantas, il chanta",
        "nous chantâmes, vous chantâtes, ils chantèrent",
        "Tous les verbes en -er suivent ce modèle, y compris aller",
      ],
      voixOff:
        "Tous les verbes du premier groupe, ceux qui se terminent par -er à l'infinitif, forment leur passé simple de la même façon. On ajoute au radical les terminaisons -ai, -as, -a, -âmes, -âtes, -èrent. Cela donne je chantai, tu chantas, il chanta, nous chantâmes, vous chantâtes, ils chantèrent. Le verbe aller, pourtant irrégulier ailleurs, suit lui aussi ce modèle : il alla, ils allèrent.",
    },
    {
      titre: "Le passé simple en -is",
      illustration: "2️⃣",
      visuel: "il finit, il prit, il vit, il fit",
      contenu: [
        "Terminaisons : -is, -is, -it, -îmes, -îtes, -irent",
        "finir (2e groupe) : je finis, tu finis, il finit, nous finîmes...",
        "prendre : il prit ; dire : il dit ; voir : il vit",
        "faire : je fis, il fit (radical irrégulier fi-)",
      ],
      voixOff:
        "Beaucoup de verbes du deuxième groupe et du troisième groupe forment leur passé simple en -is : -is, -is, -it, -îmes, -îtes, -irent. C'est le cas de tous les verbes en -ir comme finir : je finis, tu finis, il finit. On retrouve ce même modèle dans prendre, qui donne il prit, dans dire, qui donne il dit, et dans voir, qui donne il vit. Le verbe faire suit aussi ce modèle, avec un radical irrégulier : je fis, il fit.",
    },
    {
      titre: "Le passé simple en -us",
      illustration: "3️⃣",
      visuel: "il put, il voulut, il eut",
      contenu: [
        "Terminaisons : -us, -us, -ut, -ûmes, -ûtes, -urent",
        "pouvoir : je pus, il put ; vouloir : je voulus, il voulut",
        "avoir : j'eus, il eut (radical irrégulier eu-)",
        "courir : je courus, il courut",
      ],
      voixOff:
        "D'autres verbes du troisième groupe utilisent les terminaisons -us, -us, -ut, -ûmes, -ûtes, -urent. Pouvoir donne je pus, tu pus, il put ; vouloir donne je voulus, il voulut. Le verbe avoir suit ce même modèle, mais avec un radical très irrégulier, eu- : j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent. On retrouve aussi ce modèle dans courir : il courut.",
    },
    {
      titre: "Être et venir : les irréguliers à part",
      illustration: "🌀",
      visuel: "il fut / il vint",
      contenu: [
        "être : je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent",
        "venir : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent",
        "tenir se conjugue comme venir : il tint, ils tinrent",
        "Ces formes sont irrégulières : elles s'apprennent par cœur",
      ],
      voixOff:
        "Deux verbes ont un passé simple totalement à part. Être donne je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent. Venir, lui, a ses propres terminaisons en -ins : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent. Le verbe tenir, et tous ses composés, se conjugue exactement sur le même modèle que venir. Ces formes ne suivent aucune règle générale : il faut les mémoriser.",
    },
    {
      titre: "Choisir le bon temps dans un récit",
      illustration: "🎬",
      visuel: "Il pleuvait (décor)... quand la porte s'ouvrit (événement).",
      contenu: [
        "Imparfait : description, arrière-plan, habitudes, actions qui durent",
        "Passé simple : actions ponctuelles de premier plan qui font avancer l'histoire",
        "« Il pleuvait quand la porte s'ouvrit soudain »",
        "Le passé simple répond à « et alors, que se passa-t-il ? »",
      ],
      voixOff:
        "Dans un récit, ces deux temps ne jouent pas le même rôle. L'imparfait sert à décrire le décor, les personnages, les habitudes, ou une action qui dure en arrière-plan. Le passé simple, lui, exprime les actions brèves et successives qui font avancer l'histoire, au premier plan. Dans la phrase il pleuvait quand la porte s'ouvrit soudain, il pleuvait plante le décor à l'imparfait, tandis que s'ouvrit marque l'événement au passé simple.",
    },
    {
      titre: "Pièges d'orthographe et bilan",
      illustration: "⚠️",
      visuel: "il fut, il vint, il chanta : jamais d'accent circonflexe",
      contenu: [
        "Ne pas confondre les terminaisons homophones : imparfait -ait / passé simple -a",
        "Accent circonflexe : seulement à « nous » et « vous » (nous chantâmes, vous finîtes)",
        "À la 3e personne du singulier, jamais d'accent circonflexe : il fut, il vint, il chanta",
        "Bilan : imparfait = arrière-plan qui dure ; passé simple = événement bref au premier plan",
      ],
      voixOff:
        "Attention à deux pièges fréquents. D'abord, ne confonds pas les terminaisons homophones : il chantait, à l'imparfait, et il chanta, au passé simple, ne s'écrivent pas pareil. Ensuite, l'accent circonflexe du passé simple n'apparaît qu'aux personnes nous et vous, jamais à la troisième personne du singulier : on écrit il fut, il vint, il chanta, sans aucun accent. Pour résumer tout le chapitre, retiens que l'imparfait installe un décor qui dure, tandis que le passé simple raconte les événements brefs qui font avancer l'histoire.",
    },
  ],
  fiche: {
    intro:
      "L'imparfait et le passé simple sont les deux temps du passé les plus utilisés dans un récit. Ils se forment selon des règles précises et jouent des rôles complémentaires : l'un décrit, l'autre fait avancer l'action.",
    sections: [
      {
        titre: "Former l'imparfait de l'indicatif",
        points: [
          "Radical = celui de la 1re personne du pluriel (« nous ») au présent, sans -ons",
          "Terminaisons, pour tous les verbes : -ais, -ais, -ait, -ions, -iez, -aient",
          "chanter → nous chantons → je chantais, tu chantais, il chantait, nous chantions, vous chantiez, ils chantaient",
          "Exception : être a un radical irrégulier, ét- (j'étais, il était, nous étions...)",
        ],
      },
      {
        titre: "Former le passé simple",
        points: [
          "1er groupe (-er) : -ai, -as, -a, -âmes, -âtes, -èrent → il chanta, ils chantèrent",
          "2e groupe et une partie du 3e groupe : -is, -is, -it, -îmes, -îtes, -irent → il finit, il prit, il dit, il vit, il fit",
          "Autre partie du 3e groupe : -us, -us, -ut, -ûmes, -ûtes, -urent → il put, il voulut, il eut, il courut",
          "Verbes très irréguliers à apprendre par cœur : être (il fut), venir/tenir (il vint, il tint)",
        ],
      },
      {
        titre: "Choisir le bon temps dans un récit",
        points: [
          "Imparfait : description, décor, personnages, habitudes, actions qui durent ou se répètent",
          "Passé simple : actions brèves, ponctuelles, successives, qui font avancer l'histoire (premier plan)",
          "Exemple : « Le vieux moulin dominait la vallée quand, soudain, il s'effondra. »",
          "Astuce : le passé simple répond à la question « et que se passa-t-il alors ? »",
        ],
      },
      {
        titre: "Les pièges d'orthographe",
        points: [
          "Terminaisons homophones à distinguer : imparfait -ais/-ait (« il chantait ») et passé simple -a (« il chanta »)",
          "Accent circonflexe : uniquement aux personnes « nous » et « vous » du passé simple (nous chantâmes, vous finîtes, nous fûmes)",
          "À la 3e personne du singulier, jamais d'accent circonflexe : il fut, il vint, il chanta, il fit",
          "Pour vérifier un passé simple, essaie la forme « nous » : si elle existe en -âmes/-îmes/-ûmes, l'orthographe est confirmée",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'imparfait et le passé simple. L'imparfait se forme à partir du radical de la première personne du pluriel du présent, celle qui se termine par -ons, à laquelle on retire cette terminaison. On ajoute ensuite les terminaisons -ais, -ais, -ait, -ions, -iez, -aient, qui sont les mêmes pour tous les verbes. Ainsi, nous chantons devient je chantais, tu chantais, il chantait, nous chantions, vous chantiez, ils chantaient. Le seul verbe vraiment irrégulier est être, dont le radical est ét- : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient. Le passé simple, lui, se forme différemment selon les groupes. Les verbes du premier groupe, en -er, prennent les terminaisons -ai, -as, -a, -âmes, -âtes, -èrent : il chanta, ils chantèrent. Beaucoup de verbes du deuxième groupe et du troisième groupe prennent les terminaisons -is, -is, -it, -îmes, -îtes, -irent, comme finir qui donne il finit, prendre qui donne il prit, dire qui donne il dit, voir qui donne il vit, ou encore faire qui donne il fit. D'autres verbes du troisième groupe utilisent les terminaisons -us, -us, -ut, -ûmes, -ûtes, -urent, comme pouvoir qui donne il put, vouloir qui donne il voulut, ou avoir qui donne il eut. Enfin, être et venir ont des formes tout à fait à part : il fut pour être, il vint pour venir ; le verbe tenir se conjugue comme venir. Dans un récit, ces deux temps jouent des rôles complémentaires. L'imparfait sert à décrire le décor, les personnages ou les habitudes, et à exprimer des actions qui durent ou se répètent : c'est l'arrière-plan. Le passé simple, lui, exprime des actions brèves et ponctuelles qui se succèdent et font avancer l'histoire : c'est le premier plan. Par exemple, le vieux moulin dominait la vallée, à l'imparfait, plante le décor, quand soudain il s'effondra, au passé simple, marque l'événement qui fait basculer le récit. Enfin, attention aux pièges d'orthographe. Il ne faut pas confondre les terminaisons homophones de l'imparfait, en -ais ou -ait, et celles du passé simple, en -a pour les verbes en -er. L'accent circonflexe n'apparaît qu'aux personnes nous et vous du passé simple, comme dans nous chantâmes ou vous finîtes, jamais à la troisième personne du singulier : on écrit il fut, il vint, il chanta ou il fit, sans aucun accent circonflexe.",
  },
  memoCards: [
    {
      recto: "Comment former l'imparfait ?",
      verso: "Radical du présent (« nous ») sans -ons + terminaisons -ais, -ais, -ait, -ions, -iez, -aient.",
    },
    {
      recto: "Être à l'imparfait ?",
      verso: "J'étais, tu étais, il était, nous étions, vous étiez, ils étaient.",
    },
    {
      recto: "Passé simple des verbes en -er (1er groupe) ?",
      verso: "-ai, -as, -a, -âmes, -âtes, -èrent → il chanta, ils chantèrent.",
    },
    {
      recto: "Passé simple en -is : exemples ?",
      verso: "Finir → il finit ; prendre → il prit ; dire → il dit ; voir → il vit ; faire → il fit.",
    },
    {
      recto: "Passé simple en -us : exemples ?",
      verso: "Pouvoir → il put ; vouloir → il voulut ; avoir → il eut ; courir → il courut.",
    },
    {
      recto: "Être et venir au passé simple ?",
      verso: "Être : je fus, il fut, nous fûmes, ils furent. Venir : je vins, il vint, nous vînmes, ils vinrent.",
    },
    {
      recto: "Rôle de l'imparfait et du passé simple dans un récit ?",
      verso: "Imparfait = décor, habitude, durée (arrière-plan) ; passé simple = action brève, ponctuelle (premier plan).",
    },
    {
      recto: "Accent circonflexe au passé simple : où ?",
      verso: "Seulement à « nous » et « vous » (nous chantâmes, vous finîtes) ; jamais à la 3e personne du singulier (il fut, il vint, il chanta).",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la terminaison de l'imparfait à la 3e personne du singulier ?",
      choix: ["-ait", "-a", "-it", "-ut"],
      bonneReponse: 0,
      explication: "L'imparfait se termine toujours par -ait à la 3e personne du singulier, quel que soit le verbe (sauf être : il était).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Conjugue « jouer » à l'imparfait, 1re personne du singulier :",
      choix: ["je jouais", "je jouai", "je jouerai", "je joue"],
      bonneReponse: 0,
      explication: "Radical « jou- » (nous jouons) + terminaison -ais de l'imparfait : je jouais.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Conjugue le verbe « finir » à l'imparfait aux six personnes.",
      reponse: "Je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient.",
      explication: "Le radical vient de « nous finissons » : finiss-, auquel on ajoute les terminaisons régulières de l'imparfait.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le radical utilisé pour former l'imparfait de « prendre » ?",
      choix: ["pren-", "prend-", "prid-", "pris-"],
      bonneReponse: 0,
      explication: "« Nous prenons » donne le radical pren-, d'où je prenais, tu prenais, il prenait...",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « chanter » au passé simple aux six personnes.",
      reponse: "Je chantai, tu chantas, il chanta, nous chantâmes, vous chantâtes, ils chantèrent.",
      explication: "Les verbes du 1er groupe prennent les terminaisons -ai, -as, -a, -âmes, -âtes, -èrent.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte du passé simple de « voir » à la 3e personne du singulier ?",
      choix: ["il voyait", "il vit", "il voit", "il vut"],
      bonneReponse: 1,
      explication: "« Voir » suit le modèle en -is : je vis, tu vis, il vit, nous vîmes, vous vîtes, ils virent.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Parmi ces verbes, lequel forme son passé simple en -us ?",
      choix: ["finir", "pouvoir", "dire", "chanter"],
      bonneReponse: 1,
      explication: "« Pouvoir » donne je pus, tu pus, il put... Finir et dire suivent le modèle en -is, chanter le modèle en -a.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Complète en conjuguant les verbes entre parenthèses puis justifie le choix de chaque temps : « Elle ______ (marcher, imparfait) dans la forêt quand elle ______ (entendre, passé simple) un bruit étrange. »",
      reponse:
        "« Elle marchait dans la forêt quand elle entendit un bruit étrange. » Marchait est à l'imparfait car c'est une action qui dure, à l'arrière-plan (le décor) ; entendit est au passé simple car c'est une action brève et ponctuelle qui fait avancer le récit.",
      explication: "L'imparfait installe la durée, le passé simple fait surgir l'événement qui rompt cette durée.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans la phrase « Le ciel était gris et le vent soufflait fort », à quel temps sont les verbes, et pourquoi ?",
      choix: [
        "Passé simple, car ce sont des actions ponctuelles",
        "Imparfait, car ce sont des descriptions qui durent",
        "Présent, car l'action se déroule maintenant",
        "Passé composé, car les actions sont terminées",
      ],
      bonneReponse: 1,
      explication: "« Était » et « soufflait » décrivent un état et une action qui durent : c'est le rôle typique de l'imparfait dans une description.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Conjugue le verbe « venir » au passé simple aux six personnes, et précise quel autre verbe très courant se conjugue sur le même modèle.",
      reponse:
        "Je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent. Le verbe tenir (et ses composés comme retenir ou obtenir) se conjugue sur le même modèle.",
      explication: "Venir et tenir forment une famille de passé simple totalement irrégulière, à apprendre par cœur.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est correctement orthographiée ?",
      choix: [
        "Il fût très surpris par cette nouvelle.",
        "Il fut très surpris par cette nouvelle.",
        "Il fus très surpris par cette nouvelle.",
        "Il fu très surpris par cette nouvelle.",
      ],
      bonneReponse: 1,
      explication: "Au passé simple, la 3e personne du singulier de « être » s'écrit « il fut », sans accent circonflexe et sans -s final.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Réécris ce texte au passé en choisissant entre l'imparfait et le passé simple : « Il fait nuit. La lune brille. Soudain, un chien aboie et réveille tout le village. »",
      reponse: "Il faisait nuit. La lune brillait. Soudain, un chien aboya et réveilla tout le village.",
      explication:
        "« Faisait » et « brillait » décrivent le décor qui dure (imparfait) ; « aboya » et « réveilla » sont des actions ponctuelles et successives qui font avancer le récit (passé simple).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelles sont les terminaisons de l'imparfait ?",
      choix: [
        "-ais, -ais, -ait, -ions, -iez, -aient",
        "-ai, -as, -a, -âmes, -âtes, -èrent",
        "-is, -is, -it, -îmes, -îtes, -irent",
        "-e, -es, -e, -ons, -ez, -ent",
      ],
      bonneReponse: 0,
      explication: "Ces six terminaisons valent pour tous les verbes à l'imparfait, y compris être.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel est le seul verbe irrégulier à l'imparfait, et pourquoi ?",
      reponse: "Être, car son radical (ét-) ne vient pas de la forme « nous » du présent.",
      explication: "Tous les autres verbes se forment à partir de « nous » + terminaisons régulières.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel temps exprime une action ponctuelle qui fait avancer le récit ?",
      choix: ["L'imparfait", "Le passé simple", "Le présent", "Le futur"],
      bonneReponse: 1,
      explication: "Le passé simple raconte les événements brefs et successifs, au premier plan du récit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « avoir » au passé simple, 3e personne du singulier et du pluriel.",
      reponse: "Il eut ; ils eurent.",
      explication: "Avoir suit le modèle en -us, avec un radical irrégulier eu-.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi n'écrit-on jamais « il chantât » avec un accent circonflexe pour un passé simple ?",
      reponse:
        "Parce qu'à la 3e personne du singulier, le passé simple ne prend jamais d'accent circonflexe : on écrit il chanta. L'accent circonflexe n'apparaît qu'aux personnes « nous » et « vous » (nous chantâmes, vous chantâtes).",
      explication: "C'est l'un des pièges d'orthographe les plus fréquents du chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Imparfait et passé simple",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle terminaison correspond à la 1re personne du singulier de l'imparfait ?",
          choix: ["-ai", "-ais", "-as", "-is"],
          bonneReponse: 1,
          explication: "Je + radical + -ais : par exemple je chantais.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Conjugue « aimer » à l'imparfait, 3e personne du pluriel.",
          reponse: "Ils aimaient.",
          explication: "Radical « aim- » (nous aimons) + terminaison -aient.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel verbe forme son passé simple en -is comme « finir » ?",
          choix: ["chanter", "prendre", "pouvoir", "avoir"],
          bonneReponse: 1,
          explication: "« Prendre » donne il prit, sur le modèle en -is. Chanter suit le modèle en -a, pouvoir et avoir le modèle en -us.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « partir » au passé simple, 1re et 2e personnes du pluriel.",
          reponse: "Nous partîmes, vous partîtes.",
          explication: "Partir suit le modèle en -is, comme finir : radical part-, terminaisons -îmes, -îtes.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Ils vinrent nombreux au rendez-vous », le verbe « vinrent » est le passé simple de :",
          choix: ["voir", "venir", "vouloir", "vivre"],
          bonneReponse: 1,
          explication: "« Vinrent » vient de venir, qui a un passé simple irrégulier en -ins : je vins, il vint, ils vinrent.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Réécris cette phrase en choisissant le bon temps, puis justifie tes choix : « Le vieil homme (regarder, imparfait) la mer depuis des heures quand un bateau (apparaître, passé simple) à l'horizon. »",
          reponse:
            "« Le vieil homme regardait la mer depuis des heures quand un bateau apparut à l'horizon. » Regardait est à l'imparfait car c'est une action longue et habituelle, en arrière-plan ; apparut est au passé simple car c'est un événement bref et ponctuel qui fait avancer le récit.",
          explication: "On retrouve l'opposition classique entre durée (imparfait) et rupture ponctuelle (passé simple).",
        },
      ],
    },
    {
      titre: "Examen 2 — Imparfait et passé simple",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est le radical de l'imparfait pour le verbe « lire » (nous lisons) ?",
          choix: ["li-", "lis-", "lit-", "lis"],
          bonneReponse: 1,
          explication: "« Nous lisons » donne le radical lis-, d'où je lisais, tu lisais, il lisait...",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Conjugue « être » à l'imparfait, 1re personne du singulier et du pluriel.",
          reponse: "J'étais ; nous étions.",
          explication: "Le radical ét- est irrégulier, mais les terminaisons -ais et -ions restent régulières.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est la bonne terminaison du passé simple des verbes en -er, à la 3e personne du pluriel ?",
          choix: ["-irent", "-urent", "-èrent", "-aient"],
          bonneReponse: 2,
          explication: "Ils chantèrent, ils jouèrent, ils allèrent : les verbes en -er prennent -èrent à cette personne.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « vouloir » au passé simple, 3e personne du singulier et du pluriel.",
          reponse: "Il voulut ; ils voulurent.",
          explication: "Vouloir suit le modèle en -us : je voulus, tu voulus, il voulut, nous voulûmes, vous voulûtes, ils voulurent.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle phrase respecte la règle de l'accent circonflexe au passé simple ?",
          choix: [
            "Nous chantames la même chanson.",
            "Nous chantâmes la même chanson.",
            "Il chantâ la même chanson.",
            "Ils chantâmes la même chanson.",
          ],
          bonneReponse: 1,
          explication:
            "L'accent circonflexe apparaît uniquement aux personnes « nous » et « vous » du passé simple : nous chantâmes est correct. « Il chantâ » et « ils chantâmes » sont fautifs (3e personne du singulier sans accent, 3e personne du pluriel en -èrent).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Explique en une phrase la différence d'emploi entre l'imparfait et le passé simple dans un récit, puis illustre avec un exemple de ton invention.",
          reponse:
            "L'imparfait décrit le décor et les actions qui durent ou se répètent, tandis que le passé simple raconte les actions brèves qui font avancer l'histoire ; par exemple : « Le silence régnait dans la maison quand, soudain, la porte claqua. »",
          explication: "« Régnait » installe la durée à l'imparfait, « claqua » marque l'événement ponctuel au passé simple.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'imparfait se forme avec le radical du présent (« nous ») + -ais, -ais, -ait, -ions, -iez, -aient ; seul « être » a un radical irrégulier (ét-).",
    "Le passé simple a trois séries de terminaisons : -ai/-as/-a... (1er groupe), -is/-is/-it... (2e groupe et une partie du 3e), -us/-us/-ut... (autre partie du 3e groupe).",
    "Être et venir (et tenir) ont un passé simple tout à fait irrégulier, à apprendre par cœur : il fut, il vint.",
    "Dans un récit : l'imparfait décrit le décor et les actions qui durent (arrière-plan) ; le passé simple raconte les actions brèves qui font avancer l'histoire (premier plan).",
    "L'accent circonflexe du passé simple n'apparaît qu'aux personnes « nous » et « vous » ; jamais à la 3e personne du singulier (il fut, il vint, il chanta).",
  ],
},
{
  slug: "poesie-voyage",
  titre: "La poésie du voyage",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Découvrir les outils de la poésie (vers, strophe, rime, rythme, formes fixes) et les figures de style pour comprendre comment les poètes racontent le voyage, réel ou rêvé, à travers du Bellay, Baudelaire et Rimbaud.",
  objectifs: [
    "Connaître le vocabulaire de base de la versification (vers, strophe, rime, rythme)",
    "Distinguer les formes fixes (sonnet, ode) du vers libre",
    "Repérer et nommer les principales figures de style du texte poétique",
    "Comprendre comment la poésie exprime le thème du voyage, de l'ailleurs et de la nostalgie",
    "Lire et réciter un poème de façon expressive, en respectant son rythme",
  ],
  slides: [
    {
      titre: "La poésie, un texte pas comme les autres",
      illustration: "📜",
      visuel: "vers · strophe · rime · rythme",
      contenu: [
        "Un poème s'écrit en vers, pas en phrases ordinaires",
        "Les vers sont regroupés en strophes",
        "Il joue avec les sons (rimes) et la musique des mots (rythme)",
        "Il exprime des émotions, des images, parfois des rêves",
      ],
      voixOff:
        "La poésie ne raconte pas une histoire comme un roman : elle joue avec la forme des mots autant qu'avec leur sens. Un poème est composé de vers, regroupés en strophes, et il utilise des sons qui se répètent, les rimes, ainsi qu'une musique particulière, le rythme. Grâce à cette forme si particulière, le poète peut exprimer des émotions fortes, créer des images et même nous faire voyager par l'imagination.",
    },
    {
      titre: "Vers et strophes : le vocabulaire de base",
      illustration: "📏",
      visuel: "8 syllabes = octosyllabe · 12 = alexandrin",
      contenu: [
        "Un vers est une ligne de poème : on compte ses syllabes",
        "Octosyllabe (8 syllabes), décasyllabe (10), alexandrin (12)",
        "Une strophe est un groupe de vers séparé par un espace blanc",
        "Distique (2 vers), tercet (3 vers), quatrain (4 vers)",
      ],
      voixOff:
        "Pour parler de poésie, il faut connaître quelques mots précis. Un vers, c'est une ligne du poème, et on peut compter le nombre de syllabes qu'elle contient : huit pour un octosyllabe, dix pour un décasyllabe, douze pour un alexandrin, le vers le plus utilisé en poésie classique. Quand plusieurs vers sont regroupés et séparés du reste par un blanc, on obtient une strophe : deux vers forment un distique, trois un tercet, quatre un quatrain.",
    },
    {
      titre: "La rime : la musique des sons",
      illustration: "🎵",
      visuel: "plates AABB · croisées ABAB · embrassées ABBA",
      contenu: [
        "La rime : répétition d'un même son à la fin de deux vers ou plus",
        "Rime pauvre (1 son), suffisante (2 sons), riche (3 sons et plus)",
        "Rimes plates (AABB), croisées (ABAB), embrassées (ABBA)",
        "Le rythme naît aussi de la ponctuation et des sonorités du vers",
      ],
      voixOff:
        "La rime, c'est la répétition d'un même son à la fin des vers : elle peut être pauvre, suffisante ou riche selon le nombre de sons qui se répètent. Les rimes peuvent aussi s'organiser de différentes façons : plates quand elles se suivent deux par deux, croisées quand elles alternent, ou embrassées quand une paire en enferme une autre. Mais la musique d'un poème ne vient pas que des rimes : la ponctuation, les pauses et les sonorités des mots créent aussi son rythme.",
    },
    {
      titre: "Sonnet, ode et vers libre",
      illustration: "📖",
      visuel: "sonnet = 14 vers (2 quatrains + 2 tercets)",
      contenu: [
        "Le sonnet : forme fixe de 14 vers, 2 quatrains puis 2 tercets",
        "L'ode : poème qui célèbre, à la manière d'un chant, un thème ou une personne",
        "Le vers libre : ni rimes ni nombre de syllabes imposés",
        "Rimbaud a bousculé les règles classiques avec des vers plus libres",
      ],
      voixOff:
        "Certains poèmes suivent des règles très strictes : c'est le cas des formes fixes. Le sonnet est composé de quatorze vers organisés en deux quatrains suivis de deux tercets, tandis que l'ode est un poème au ton élevé qui célèbre un thème ou une personne, un peu comme un chant. À l'inverse, le vers libre s'affranchit des règles de rimes et de syllabes comptées : des poètes comme Rimbaud ont ouvert la voie à cette liberté nouvelle.",
    },
    {
      titre: "Les figures de style pour évoquer l'ailleurs",
      illustration: "🎭",
      visuel: "comparaison · métaphore · personnification · énumération · anaphore",
      contenu: [
        "Comparaison : rapproche deux éléments avec un mot-outil (comme, tel que)",
        "Métaphore : rapproche deux éléments sans mot-outil",
        "Personnification : donne des sentiments ou des actions humaines à une chose",
        "Énumération et anaphore : accumulent ou répètent pour amplifier l'émotion",
      ],
      voixOff:
        "Pour faire voyager le lecteur, les poètes utilisent des figures de style. La comparaison rapproche deux éléments grâce à un mot-outil comme « comme » ou « tel que », alors que la métaphore fait le même rapprochement sans ce mot-outil, de façon plus directe. La personnification, elle, donne des sentiments ou des gestes humains à une chose, un animal ou une idée, comme un vent qui chanterait. Enfin, l'énumération accumule des mots ou des images, et l'anaphore répète un même mot en début de vers pour renforcer une émotion.",
    },
    {
      titre: "Le voyage en poésie : réel ou rêvé",
      illustration: "🌍",
      visuel: "ailleurs · exotisme · rêve · départ · nostalgie",
      contenu: [
        "Le poète voyage vraiment (mers, pays lointains) ou par l'imagination",
        "L'exotisme : fascination pour des paysages et des cultures lointaines",
        "Le départ appelle souvent la nostalgie du pays natal",
        "Le voyage peut symboliser la vie, la liberté, la fuite du quotidien",
      ],
      voixOff:
        "Depuis des siècles, le voyage inspire les poètes, qu'il soit réellement vécu ou simplement rêvé sur le papier. Certains textes célèbrent l'exotisme, cette fascination pour des paysages et des cultures lointaines, tandis que d'autres racontent le départ et, en miroir, la nostalgie du pays natal qu'on a quitté. Au-delà du simple déplacement géographique, le voyage devient souvent le symbole de la vie elle-même, de la liberté ou du désir d'échapper au quotidien.",
    },
    {
      titre: "Du Bellay : l'appel du pays natal",
      illustration: "🏛️",
      visuel: "« Heureux qui, comme Ulysse, a fait un beau voyage »",
      contenu: [
        "Joachim du Bellay, poète du XVIe siècle, recueil Les Regrets",
        "Sonnet écrit loin de la France, alors qu'il séjourne à Rome",
        "Ulysse : héros grec qui voyage longtemps avant de rentrer chez lui",
        "Le poème regrette le pays natal plus qu'il ne célèbre les voyages lointains",
      ],
      voixOff:
        "Joachim du Bellay est un poète français du seizième siècle qui, exilé à Rome, écrit le recueil Les Regrets. Son sonnet le plus célèbre commence ainsi : « Heureux qui, comme Ulysse, a fait un beau voyage. » En évoquant Ulysse, ce héros grec qui met de longues années à rentrer chez lui après la guerre de Troie, du Bellay ne célèbre pas vraiment les voyages lointains : il exprime surtout le regret de son petit village natal, qu'il préfère à toutes les splendeurs de Rome.",
    },
    {
      titre: "Baudelaire et Rimbaud : l'ivresse de l'ailleurs",
      illustration: "⛵",
      visuel: "« Là, tout n'est qu'ordre et beauté, luxe, calme et volupté »",
      contenu: [
        "Baudelaire, « L'Invitation au voyage » : un pays idéal rêvé avec l'être aimé",
        "Rimbaud, « Le Bateau ivre » : un bateau sans pilote traverse des mers imaginaires",
        "Rimbaud, « Sensation » : un voyage simple, à pied, au contact de la nature",
        "Ces poèmes montrent un voyage autant intérieur qu'extérieur",
      ],
      voixOff:
        "Au dix-neuvième siècle, d'autres poètes transforment le voyage en rêve. Dans « L'Invitation au voyage », Charles Baudelaire imagine un pays idéal à partager avec la femme aimée, résumé par ce refrain : « Là, tout n'est qu'ordre et beauté, luxe, calme et volupté. » Arthur Rimbaud, lui, invente dans « Le Bateau ivre » un bateau sans pilote qui dérive à travers des mers extraordinaires, tandis que dans le poème « Sensation », il évoque un voyage beaucoup plus simple, à pied, par les soirs bleus d'été. Chez ces poètes, le voyage devient autant une aventure intérieure qu'un déplacement réel.",
    },
    {
      titre: "Lire et réciter un poème",
      illustration: "🎤",
      visuel: "📌 ton + rythme + respiration",
      contenu: [
        "Repérer strophes, rimes et figures de style avant de réciter",
        "Respecter la ponctuation : les pauses marquent le rythme",
        "Adapter le ton à l'émotion du poème (rêverie, nostalgie, enthousiasme)",
        "S'entraîner à voix haute pour mémoriser la musique des mots",
      ],
      voixOff:
        "Bien réciter un poème, ce n'est pas seulement le connaître par cœur : c'est comprendre sa construction. Avant de le dire à voix haute, repère les strophes, les rimes et les figures de style, puis respecte la ponctuation, car les virgules et les points marquent les pauses du rythme. Adapte ensuite ton ton à l'émotion du texte, qu'il s'agisse de rêverie, de nostalgie ou d'enthousiasme, et entraîne-toi plusieurs fois à voix haute pour que la musique des mots devienne naturelle.",
    },
  ],
  fiche: {
    intro:
      "Cette fiche reprend le vocabulaire essentiel de la poésie (vers, strophe, rime, formes fixes), les figures de style utiles pour parler du voyage, ainsi que les grands repères d'auteurs sur ce thème.",
    sections: [
      {
        titre: "Le vocabulaire de la poésie",
        points: [
          "Vers : ligne d'un poème, dont on compte les syllabes (octosyllabe 8, décasyllabe 10, alexandrin 12)",
          "Strophe : groupe de vers séparé par un blanc (distique 2, tercet 3, quatrain 4)",
          "Rime : répétition d'un son en fin de vers, pauvre/suffisante/riche, disposée en rimes plates (AABB), croisées (ABAB) ou embrassées (ABBA)",
          "Sonnet : forme fixe de 14 vers (2 quatrains + 2 tercets) ; ode : poème qui célèbre un thème ; vers libre : sans rimes ni syllabes imposées",
        ],
      },
      {
        titre: "Les figures de style du voyage",
        points: [
          "Comparaison : rapproche deux éléments avec un mot-outil (comme, tel que, semblable à)",
          "Métaphore : rapproche deux éléments sans mot-outil",
          "Personnification : donne des sentiments ou des actions humaines à une chose, un animal, une idée",
          "Énumération : accumule des mots ou des images ; anaphore : répète un mot en tête de vers pour amplifier l'émotion",
        ],
      },
      {
        titre: "Le thème du voyage en poésie",
        points: [
          "Le voyage peut être réel (mers, pays lointains) ou purement imaginaire",
          "L'exotisme exprime la fascination pour des paysages et des cultures lointaines",
          "Le départ s'accompagne souvent de la nostalgie du pays natal",
          "Le voyage symbolise parfois la vie, la liberté ou le désir d'échapper au quotidien",
        ],
      },
      {
        titre: "Repères d'auteurs et récitation",
        points: [
          "Joachim du Bellay, « Heureux qui, comme Ulysse... » (Les Regrets) : regret du pays natal plus que goût du voyage",
          "Charles Baudelaire, « L'Invitation au voyage » (Les Fleurs du mal) : rêve d'un pays idéal partagé avec l'être aimé",
          "Arthur Rimbaud, « Le Bateau ivre » et « Sensation » : voyage extraordinaire ou voyage simple, à pied, dans la nature",
          "Pour réciter : repérer la structure, respecter la ponctuation, adapter le ton, s'entraîner à voix haute",
        ],
      },
    ],
    audio:
      "Fiche de révision : la poésie du voyage. La poésie s'écrit en vers, regroupés en strophes. Un vers se compte en syllabes : huit pour un octosyllabe, dix pour un décasyllabe, douze pour un alexandrin. Une strophe est un groupe de vers séparé par un blanc : deux vers forment un distique, trois un tercet, quatre un quatrain. La rime, répétition d'un son en fin de vers, peut être pauvre, suffisante ou riche, et se dispose en rimes plates, croisées ou embrassées. Certains poèmes suivent des formes fixes, comme le sonnet, quatorze vers répartis en deux quatrains et deux tercets, ou l'ode, qui célèbre un thème. D'autres adoptent le vers libre, sans rimes ni syllabes imposées. Pour évoquer le voyage, les poètes utilisent des figures de style : la comparaison, qui utilise un mot-outil comme « comme », la métaphore, qui rapproche deux éléments sans mot-outil, la personnification, qui donne des traits humains à une chose, ainsi que l'énumération et l'anaphore, qui amplifient une émotion par l'accumulation ou la répétition. Le thème du voyage traverse toute la poésie française : le voyage peut être réel ou rêvé, il exprime l'exotisme, la fascination pour l'ailleurs, mais aussi la nostalgie du pays natal après le départ. Joachim du Bellay, dans son sonnet « Heureux qui, comme Ulysse, a fait un beau voyage », regrette son village plus qu'il ne célèbre ses voyages. Charles Baudelaire, dans « L'Invitation au voyage », rêve d'un pays idéal partagé avec l'être aimé. Arthur Rimbaud imagine, dans « Le Bateau ivre », une traversée extraordinaire, et dans « Sensation », un simple voyage à pied dans la nature. Enfin, pour bien réciter un poème, il faut repérer sa structure, respecter sa ponctuation, adapter son ton à l'émotion du texte et s'entraîner à voix haute.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce qu'un vers ?",
      verso: "Une ligne d'un poème ; on compte ses syllabes (octosyllabe 8, décasyllabe 10, alexandrin 12).",
    },
    {
      recto: "Qu'est-ce qu'une strophe ?",
      verso: "Un groupe de vers séparé du reste du poème par un blanc (distique 2, tercet 3, quatrain 4 vers).",
    },
    {
      recto: "Qu'est-ce qu'un sonnet ?",
      verso: "Une forme fixe de 14 vers : deux quatrains suivis de deux tercets.",
    },
    {
      recto: "Différence entre comparaison et métaphore ?",
      verso: "La comparaison utilise un mot-outil (comme, tel que) ; la métaphore rapproche deux éléments sans mot-outil.",
    },
    {
      recto: "Qu'est-ce qu'une personnification ?",
      verso: "Donner des sentiments ou des actions humaines à une chose, un animal ou une idée.",
    },
    {
      recto: "Qu'est-ce qu'une anaphore ?",
      verso: "La répétition d'un mot ou d'un groupe de mots en début de vers ou de phrase, pour créer un effet d'insistance.",
    },
    {
      recto: "Qui a écrit « Heureux qui, comme Ulysse... » ?",
      verso: "Joachim du Bellay, dans le recueil Les Regrets (XVIe siècle).",
    },
    {
      recto: "Qui a écrit « L'Invitation au voyage » et « Le Bateau ivre » ?",
      verso: "« L'Invitation au voyage » est de Charles Baudelaire ; « Le Bateau ivre » est d'Arthur Rimbaud.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de syllabes compte un alexandrin ?",
      choix: ["8", "10", "12", "14"],
      bonneReponse: 2,
      explication: "L'alexandrin est le vers de douze syllabes, le plus utilisé en poésie classique française.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on un groupe de vers séparé du reste du poème par un blanc ?",
      choix: ["Une rime", "Une strophe", "Une figure de style", "Un alexandrin"],
      bonneReponse: 1,
      explication: "Une strophe est un ensemble de vers regroupés visuellement, comme un paragraphe dans un poème.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle figure de style utilise un mot-outil comme « comme » ou « tel que » ?",
      choix: ["La métaphore", "La comparaison", "La personnification", "L'anaphore"],
      bonneReponse: 1,
      explication: "La comparaison rapproche deux éléments grâce à un mot-outil ; sans ce mot-outil, ce serait une métaphore.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois thèmes souvent associés au voyage en poésie.",
      reponse: "Par exemple : l'exotisme, le rêve, le départ, la nostalgie du pays natal, ou encore la liberté.",
      explication: "Le voyage en poésie peut être réel ou imaginaire, et il évoque souvent l'ailleurs, le rêve ou le regret du pays quitté.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « La mer est un miroir immense », quelle figure de style est utilisée ?",
      choix: ["Une comparaison", "Une métaphore", "Une énumération", "Une anaphore"],
      bonneReponse: 1,
      explication: "Il n'y a pas de mot-outil comme « comme » : les deux éléments (la mer, un miroir) sont directement rapprochés, c'est une métaphore.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans le vers « Le vent chantait doucement dans les voiles du bateau », quelle figure de style reconnais-tu ? Justifie.",
      reponse: "C'est une personnification : le vent, qui est un élément naturel, reçoit une action humaine, « chanter ».",
      explication: "La personnification donne des traits ou des actions humaines à quelque chose qui n'en a pas naturellement.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment appelle-t-on des rimes disposées selon le schéma AABB ?",
      choix: ["Des rimes croisées", "Des rimes embrassées", "Des rimes plates", "Des rimes pauvres"],
      bonneReponse: 2,
      explication: "Les rimes plates se suivent deux par deux (AABB), contrairement aux rimes croisées (ABAB) ou embrassées (ABBA).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la structure exacte d'un sonnet ?",
      reponse: "Un sonnet compte quatorze vers, organisés en deux quatrains (quatre vers chacun) suivis de deux tercets (trois vers chacun).",
      explication: "C'est une forme fixe très utilisée depuis la Renaissance, notamment par Joachim du Bellay.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Qui est l'auteur du poème « L'Invitation au voyage » ?",
      choix: ["Arthur Rimbaud", "Charles Baudelaire", "Joachim du Bellay", "Victor Hugo"],
      bonneReponse: 1,
      explication: "« L'Invitation au voyage » est un poème de Charles Baudelaire, tiré du recueil Les Fleurs du mal.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Quel type de voyage Arthur Rimbaud évoque-t-il dans son poème « Sensation » ?",
      reponse: "Un voyage simple et proche : le poète marche à pied, par les soirs bleus d'été, au contact direct de la nature. Ce n'est pas un voyage exotique ou lointain, mais une expérience sensorielle et intérieure.",
      explication: "Contrairement au « Bateau ivre », qui imagine une traversée extraordinaire, « Sensation » évoque un voyage modeste, ancré dans les sensations simples de la marche et de la nature.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Compare en quelques phrases le rapport au voyage chez Joachim du Bellay et chez Charles Baudelaire.",
      reponse: "Du Bellay, exilé à Rome, regrette son pays natal : son sonnet célèbre finalement moins le voyage que le retour et l'attachement au village d'origine. Baudelaire, au contraire, rêve d'un ailleurs idéal, un pays imaginaire de calme et de beauté partagé avec l'être aimé : chez lui, le voyage est un désir d'évasion, pas un regret.",
      explication: "Ces deux poèmes montrent deux visions opposées du voyage : la nostalgie du pays natal chez du Bellay, l'appel de l'ailleurs rêvé chez Baudelaire.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "À quoi sert principalement une énumération dans un poème sur le voyage ?",
      choix: [
        "À raccourcir le poème",
        "À accumuler des mots ou des images pour amplifier une impression",
        "À créer une rime riche",
        "À transformer le poème en vers libre",
      ],
      bonneReponse: 1,
      explication: "L'énumération accumule plusieurs termes ou images à la suite, ce qui donne une impression de richesse, d'abondance ou d'ampleur, très utile pour décrire des paysages lointains.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de vers compte un sonnet ?",
      choix: ["10", "12", "14", "16"],
      bonneReponse: 2,
      explication: "Un sonnet compte quatorze vers : deux quatrains puis deux tercets.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'une métaphore ?",
      reponse: "Une figure de style qui rapproche deux éléments sans utiliser de mot-outil comme « comme ».",
      explication: "Contrairement à la comparaison, la métaphore ne contient pas de mot-outil : le rapprochement est direct.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel poète a écrit « Le Bateau ivre » ?",
      choix: ["Charles Baudelaire", "Arthur Rimbaud", "Joachim du Bellay", "Victor Hugo"],
      bonneReponse: 1,
      explication: "« Le Bateau ivre » est un poème d'Arthur Rimbaud, qui imagine un bateau sans pilote traversant des mers imaginaires.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux thèmes liés au voyage que l'on retrouve souvent en poésie.",
      reponse: "Par exemple l'exotisme et la nostalgie du pays natal, ou le rêve et le départ.",
      explication: "Le voyage en poésie mêle souvent le désir d'ailleurs et le regret de ce qu'on a quitté.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi le rythme et la ponctuation sont-ils importants quand on récite un poème ?",
      reponse: "Parce qu'ils indiquent où faire des pauses et comment respirer : bien les respecter permet de faire entendre la musique du poème et de mieux transmettre son émotion.",
      explication: "Une récitation réussie ne se limite pas à dire le texte par cœur : elle restitue le rythme voulu par le poète.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La poésie du voyage",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qu'est-ce qu'un vers ?",
          choix: [
            "Une strophe entière",
            "Une ligne d'un poème",
            "Une rime en fin de phrase",
            "Un poème sans rimes",
          ],
          bonneReponse: 1,
          explication: "Un vers est une ligne d'un poème, dont on peut compter les syllabes.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la définition d'une strophe et cite un exemple de nom de strophe selon son nombre de vers.",
          reponse: "Une strophe est un groupe de vers séparé du reste du poème par un blanc. Par exemple, un quatrain est une strophe de quatre vers.",
          explication: "Distique (2 vers), tercet (3 vers) et quatrain (4 vers) sont les strophes les plus courantes.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est la structure exacte du sonnet ?",
          choix: [
            "Trois quatrains",
            "Deux quatrains puis deux tercets",
            "Quatre tercets",
            "Un seul quatorzain sans strophes",
          ],
          bonneReponse: 1,
          explication: "Le sonnet, forme fixe de quatorze vers, est composé de deux quatrains suivis de deux tercets.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans le vers « Les nuages voyageaient, curieux, vers des pays inconnus », quelle figure de style est employée ? Justifie ta réponse.",
          reponse: "C'est une personnification : les nuages, qui sont un élément naturel, reçoivent une caractéristique humaine, « curieux », et l'action « voyager ».",
          explication: "La personnification prête des sentiments ou des comportements humains à une chose non humaine.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans un poème où les rimes suivent le schéma ABAB, comment appelle-t-on cette disposition ?",
          choix: ["Rimes plates", "Rimes croisées", "Rimes embrassées", "Rimes pauvres"],
          bonneReponse: 1,
          explication: "Le schéma ABAB correspond aux rimes croisées, où les sons s'alternent d'un vers sur deux.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "En t'appuyant sur « L'Invitation au voyage » de Baudelaire, explique comment un poème peut évoquer un voyage entièrement imaginaire.",
          reponse: "Baudelaire n'a pas réellement voyagé vers le pays qu'il décrit : il l'invente pour exprimer un idéal de calme, de beauté et de bonheur partagé avec l'être aimé. Le voyage devient alors un rêve, une évasion par l'imagination plutôt qu'un déplacement réel.",
          explication: "La poésie peut créer des paysages et des voyages purement mentaux, qui expriment des désirs ou des émotions plutôt que des lieux réels.",
        },
      ],
    },
    {
      titre: "Examen 2 — La poésie du voyage",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Combien de syllabes compte un octosyllabe ?",
          choix: ["6", "8", "10", "12"],
          bonneReponse: 1,
          explication: "L'octosyllabe est un vers de huit syllabes.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qui a écrit le sonnet qui commence par « Heureux qui, comme Ulysse, a fait un beau voyage » ?",
          reponse: "Joachim du Bellay, dans le recueil Les Regrets.",
          explication: "Du Bellay écrit ce sonnet alors qu'il est loin de la France, à Rome, et qu'il regrette son pays natal.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Le soleil se couchait, épuisé par sa course », quelle figure de style reconnais-tu ?",
          choix: ["Une comparaison", "Une personnification", "Une énumération", "Une anaphore"],
          bonneReponse: 1,
          explication: "Le soleil est présenté comme fatigué, « épuisé » : c'est une action humaine attribuée à un élément naturel, donc une personnification.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre l'exotisme et la nostalgie dans la poésie du voyage.",
          reponse: "L'exotisme est la fascination pour des paysages, des cultures ou des pays lointains et différents. La nostalgie, elle, est le regret du pays natal ou d'un temps passé, ressenti souvent après un départ ou un exil.",
          explication: "Ces deux notions sont souvent liées : le voyage vers l'ailleurs exotique peut faire naître, en retour, la nostalgie du pays quitté, comme chez du Bellay.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quel poème d'Arthur Rimbaud met en scène un bateau sans pilote traversant des mers imaginaires ?",
          choix: ["« Sensation »", "« Le Bateau ivre »", "« L'Invitation au voyage »", "« Les Regrets »"],
          bonneReponse: 1,
          explication: "« Le Bateau ivre » raconte, à travers un vocabulaire riche en images, la dérive extraordinaire d'un bateau livré à lui-même.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique en quelques phrases comment bien lire et réciter un poème à voix haute, en citant au moins trois éléments à respecter.",
          reponse: "Il faut d'abord repérer la structure du poème (strophes, rimes, figures de style) pour en comprendre le sens. Il faut ensuite respecter la ponctuation, qui indique les pauses et le rythme, et adapter son ton à l'émotion du texte (rêverie, nostalgie, enthousiasme...). Enfin, s'entraîner plusieurs fois à voix haute permet de mémoriser la musique des mots et de gagner en aisance.",
          explication: "Une bonne récitation combine compréhension du texte, respect du rythme et expressivité du ton.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un vers se compte en syllabes (octosyllabe 8, décasyllabe 10, alexandrin 12) ; une strophe regroupe plusieurs vers.",
    "Le sonnet est une forme fixe de 14 vers (2 quatrains + 2 tercets) ; le vers libre s'affranchit des rimes et du compte des syllabes.",
    "Comparaison (avec mot-outil) et métaphore (sans mot-outil) rapprochent deux éléments ; personnification, énumération et anaphore amplifient l'émotion.",
    "Le voyage en poésie peut être réel ou imaginaire : il exprime l'exotisme, le rêve, le départ ou la nostalgie du pays natal.",
    "Du Bellay regrette son pays natal (« Heureux qui, comme Ulysse... »), Baudelaire rêve d'un ailleurs idéal, Rimbaud imagine un voyage extraordinaire ou une simple marche dans la nature.",
    "Pour réciter un poème : repérer sa structure, respecter la ponctuation, adapter le ton et s'entraîner à voix haute.",
  ],
},
{
  slug: "recit-aventure",
  titre: "Le récit d'aventures",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Découvrir les caractéristiques du récit d'aventures : un héros lancé dans une quête risquée, un schéma narratif en 5 étapes, des personnages types et des procédés d'écriture qui font vivre le danger et l'exotisme.",
  objectifs: [
    "Reconnaître les caractéristiques du récit d'aventures",
    "Identifier les 5 étapes du schéma narratif",
    "Distinguer héros, adjuvants et opposants",
    "Repérer les procédés d'écriture qui créent le rythme et le suspense",
    "Connaître quelques œuvres et auteurs classiques du genre",
  ],
  slides: [
    {
      titre: "Le récit d'aventures : un genre à part",
      illustration: "🏝️",
      visuel: "Héros + Quête + Dangers",
      contenu: [
        "Un récit qui raconte les péripéties d'un héros parti vivre une aventure",
        "Un héros lancé dans une quête : trésor, survie, exploration...",
        "Des obstacles et des dangers à chaque étape du parcours",
        "Un cadre souvent exotique et dépaysant : île, mer, jungle, désert",
      ],
      voixOff:
        "Le récit d'aventures raconte les péripéties d'un héros qui quitte son quotidien pour vivre une expérience extraordinaire. Ce héros poursuit un but précis : retrouver un trésor, survivre, explorer un territoire inconnu. Sur son chemin, il affronte de nombreux obstacles et des dangers réels. L'histoire se déroule souvent dans un décor exotique, loin de chez lui : une île déserte, la mer, la jungle ou le grand froid.",
    },
    {
      titre: "Le schéma narratif en 5 étapes",
      illustration: "🧭",
      visuel: "Situation initiale → Élément perturbateur → Péripéties → Dénouement → Situation finale",
      contenu: [
        "Situation initiale : le héros et son cadre de vie habituel",
        "Élément perturbateur : un événement bouleverse cet équilibre",
        "Péripéties : une suite d'actions, d'obstacles, de dangers",
        "Dénouement puis situation finale : l'aventure se résout, un nouvel équilibre s'installe",
      ],
      voixOff:
        "Comme tout récit, le récit d'aventures suit un schéma narratif en cinq étapes. D'abord la situation initiale, qui présente le héros dans son cadre de vie habituel. Puis un élément perturbateur vient bouleverser cet équilibre et lance l'aventure. Viennent ensuite les péripéties, cette longue suite d'actions et de dangers surmontés. Enfin, le dénouement résout l'aventure, et la situation finale installe un nouvel équilibre : le héros n'est plus tout à fait le même.",
    },
    {
      titre: "Le héros d'aventures",
      illustration: "🦸",
      visuel: "Courage + curiosité + détermination",
      contenu: [
        "Souvent jeune, parfois un peu naïf au début de l'histoire",
        "Doté de qualités : courage, curiosité, débrouillardise, ténacité",
        "Il grandit et se transforme au fil des épreuves",
        "Le lecteur s'identifie facilement à lui",
      ],
      voixOff:
        "Le héros du récit d'aventures est souvent jeune, et parfois un peu naïf au début de l'histoire. Il possède ou développe des qualités précieuses : le courage, la curiosité, la débrouillardise et la ténacité face au danger. Ce qui rend ce héros attachant, c'est qu'il évolue : les épreuves qu'il traverse le font grandir. C'est pour cela que le lecteur s'identifie si facilement à lui, comme s'il vivait l'aventure à ses côtés.",
    },
    {
      titre: "Adjuvants et opposants",
      illustration: "⚔️",
      visuel: "Adjuvant ↔ Opposant",
      contenu: [
        "L'adjuvant aide le héros dans sa quête : ami, guide, animal fidèle...",
        "L'opposant se dresse sur son chemin : rival, pirate, élément hostile...",
        "Un même personnage peut changer de camp au fil du récit",
        "Ces personnages font avancer ou freinent l'action",
      ],
      voixOff:
        "Autour du héros gravitent d'autres personnages essentiels. L'adjuvant l'aide dans sa quête : ce peut être un ami fidèle, un guide expérimenté, ou même un animal. L'opposant, au contraire, se dresse sur son chemin : un rival, un pirate, ou parfois simplement la nature elle-même, hostile et dangereuse. Attention, un même personnage peut parfois changer de camp au cours du récit, trahissant le héros ou, au contraire, lui venant en aide de façon inattendue.",
    },
    {
      titre: "Le rythme et le suspense",
      illustration: "⏱️",
      visuel: "Phrases courtes = tension",
      contenu: [
        "Phrases courtes et verbes d'action pour accélérer le rythme dans le danger",
        "Phrases plus longues et descriptives pour installer le décor exotique",
        "Suspense : dangers imminents, informations cachées au lecteur",
        "Fins de chapitre en suspens pour donner envie de continuer",
      ],
      voixOff:
        "Un bon récit d'aventures joue habilement sur le rythme. Dans les scènes de danger, l'auteur utilise des phrases courtes et des verbes d'action, pour donner l'impression que tout va très vite. À l'inverse, pour installer un décor exotique, les phrases s'allongent et se font plus descriptives. L'auteur crée aussi du suspense en cachant des informations au lecteur, ou en terminant un chapitre juste avant un moment décisif, pour donner envie de tourner la page.",
    },
    {
      titre: "Connecteurs temporels et logiques",
      illustration: "🔗",
      visuel: "Soudain... / Alors... / Mais...",
      contenu: [
        "Connecteurs temporels : soudain, aussitôt, alors, quelques instants plus tard, enfin",
        "Ils organisent la succession des actions et créent la tension",
        "Connecteurs logiques : car, donc, pourtant, mais, en effet",
        "Ils expliquent les causes et les conséquences des événements",
      ],
      voixOff:
        "Pour enchaîner les actions, les auteurs utilisent des connecteurs temporels comme soudain, aussitôt, alors, ou quelques instants plus tard. Ces mots organisent le récit dans le temps et renforcent la tension du moment. Les connecteurs logiques, eux, comme car, donc, pourtant ou mais, expliquent les causes et les conséquences des événements. Ensemble, ces petits mots donnent au récit sa cohérence et son dynamisme.",
    },
    {
      titre: "Le vocabulaire de l'action et des sensations",
      illustration: "🌊",
      visuel: "Verbes d'action + sens en éveil",
      contenu: [
        "Verbes de mouvement énergiques : bondir, s'élancer, grimper, plonger, fuir",
        "Vocabulaire des sensations : bruits, odeurs, couleurs, peur, chaleur",
        "Ce vocabulaire plonge le lecteur au cœur de l'aventure",
        "Il rend le décor exotique plus vivant et plus réel",
      ],
      voixOff:
        "Le récit d'aventures utilise un vocabulaire précis pour faire ressentir l'action. Des verbes de mouvement énergiques comme bondir, s'élancer, grimper ou plonger donnent de l'élan au récit. À cela s'ajoute un vocabulaire des sensations : les bruits de la jungle, les odeurs de la mer, les couleurs éclatantes, la peur qui serre la gorge ou la chaleur qui écrase. Ce vocabulaire plonge littéralement le lecteur au cœur de l'aventure.",
    },
    {
      titre: "Quel point de vue pour raconter l'aventure ?",
      illustration: "👁️",
      visuel: "Point de vue interne : « je » vis l'aventure",
      contenu: [
        "Le récit d'aventures utilise souvent un narrateur-personnage (point de vue interne)",
        "Le lecteur découvre les événements en même temps que le héros",
        "Ce choix crée une forte identification et renforce le suspense",
        "Un narrateur omniscient est parfois utilisé pour élargir le regard sur l'histoire",
      ],
      voixOff:
        "Le point de vue choisi par l'auteur change beaucoup la façon de vivre l'aventure. Très souvent, le récit d'aventures utilise un narrateur-personnage, qui raconte à la première personne ce qu'il vit et voit : c'est le point de vue interne. Le lecteur découvre alors les dangers en même temps que le héros, ce qui renforce l'identification et le suspense. Parfois, l'auteur choisit plutôt un narrateur omniscient, qui connaît tout de l'histoire, pour élargir le regard sur les événements.",
    },
    {
      titre: "Des œuvres qui ont marqué le genre",
      illustration: "📚",
      visuel: "Stevenson, Verne, London",
      contenu: [
        "Robert Louis Stevenson : L'Île au trésor, chasse au trésor et pirates",
        "Jules Verne : voyages extraordinaires et exploration scientifique",
        "Jack London : survie dans le Grand Nord, appel de la nature sauvage",
        "Ces récits ont inspiré des générations de lecteurs et de films",
      ],
      voixOff:
        "Le récit d'aventures a donné naissance à des œuvres devenues des classiques. Robert Louis Stevenson, avec L'Île au trésor, raconte la chasse au trésor du jeune Jim Hawkins face à des pirates redoutables. Jules Verne, lui, emmène ses lecteurs dans des voyages extraordinaires, mêlant exploration et science, comme dans Voyage au centre de la Terre. Jack London, enfin, situe ses récits dans le Grand Nord glacé, où ses héros luttent pour survivre. Ces œuvres continuent d'inspirer des générations de lecteurs, et de nombreux films.",
    },
  ],
  fiche: {
    intro:
      "Le récit d'aventures raconte les péripéties d'un héros lancé dans une quête risquée, souvent au cœur d'un décor exotique. Il obéit à des codes précis : personnages, schéma narratif, rythme et point de vue.",
    sections: [
      {
        titre: "Les caractéristiques du récit d'aventures",
        points: [
          "Un héros part vivre une aventure hors du commun, loin de son quotidien",
          "Une quête à accomplir : trouver un trésor, survivre, explorer un territoire inconnu",
          "De nombreux obstacles et dangers jalonnent le parcours du héros",
          "Un cadre exotique et dépaysant : île déserte, mer, jungle, désert, grand froid...",
          "Un texte qui mêle action, tension et parfois un peu de merveilleux",
        ],
      },
      {
        titre: "Le schéma narratif en 5 étapes",
        points: [
          "Situation initiale : présentation du héros, de son cadre de vie, de son équilibre habituel",
          "Élément perturbateur : un événement rompt cet équilibre et lance l'aventure",
          "Péripéties : succession d'actions, d'épreuves, de dangers surmontés par le héros",
          "Dénouement : l'aventure trouve sa résolution (succès ou échec de la quête)",
          "Situation finale : un nouvel équilibre s'installe, le héros a changé",
        ],
      },
      {
        titre: "Les personnages types",
        points: [
          "Le héros : souvent jeune, courageux, curieux ; il se transforme au fil du récit",
          "Les adjuvants : personnages, animaux ou objets qui aident le héros dans sa quête",
          "Les opposants : personnages ou forces qui s'opposent à lui (rivaux, nature hostile...)",
          "Un même personnage peut se révéler ambigu, entre alliance et trahison",
        ],
      },
      {
        titre: "Les procédés d'écriture et le point de vue",
        points: [
          "Un rythme qui alterne phrases courtes (action) et phrases plus longues (description)",
          "Le suspense : informations cachées, dangers imminents, fins de chapitre en attente",
          "Connecteurs temporels (soudain, alors, aussitôt) et logiques (car, mais, donc) pour organiser le récit",
          "Vocabulaire de l'action (verbes de mouvement) et des sensations (bruits, odeurs, couleurs)",
          "Point de vue interne fréquent (narrateur-personnage) pour vivre l'aventure de l'intérieur",
          "Repères d'œuvres : Stevenson (L'Île au trésor), Jules Verne (Voyage au centre de la Terre...), Jack London (Croc-Blanc)",
        ],
      },
    ],
    audio:
      "Fiche de révision : le récit d'aventures. Le récit d'aventures raconte les péripéties d'un héros lancé dans une quête risquée, souvent dans un décor exotique et dangereux : une île déserte, la mer, la jungle ou le grand froid. Comme tout récit, il suit un schéma narratif en cinq étapes. La situation initiale présente le héros dans son cadre de vie habituel. Un élément perturbateur vient ensuite bouleverser cet équilibre. Les péripéties forment la longue suite d'actions et d'épreuves que le héros doit surmonter. Le dénouement résout l'aventure, et la situation finale installe un nouvel équilibre : le héros a changé. Ce type de récit met en scène des personnages types : le héros, souvent jeune et courageux, les adjuvants qui l'aident dans sa quête, et les opposants qui lui font obstacle. Pour faire vivre cette aventure, les auteurs utilisent des procédés d'écriture précis : un rythme qui accélère dans les scènes de danger grâce à des phrases courtes, du suspense entretenu en cachant des informations au lecteur, des connecteurs temporels comme soudain ou alors, des connecteurs logiques comme car ou mais, ainsi qu'un vocabulaire riche de l'action et des sensations. Le point de vue interne, où un narrateur-personnage raconte à la première personne, est très fréquent : il permet au lecteur de vivre l'aventure de l'intérieur. Parmi les auteurs classiques du genre, on retient Robert Louis Stevenson et L'Île au trésor, Jules Verne et ses voyages extraordinaires, et Jack London avec ses récits de survie dans le Grand Nord.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce qu'un récit d'aventures ?",
      verso: "Un récit qui raconte les péripéties d'un héros lancé dans une quête risquée, dans un cadre souvent exotique et dangereux.",
    },
    {
      recto: "Quelles sont les 5 étapes du schéma narratif ?",
      verso: "Situation initiale, élément perturbateur, péripéties, dénouement, situation finale.",
    },
    {
      recto: "Qu'est-ce qu'un adjuvant ?",
      verso: "Un personnage (ou un animal, un objet) qui aide le héros à accomplir sa quête.",
    },
    {
      recto: "Qu'est-ce qu'un opposant ?",
      verso: "Un personnage ou une force qui s'oppose au héros et freine sa quête.",
    },
    {
      recto: "Quel point de vue domine souvent dans un récit d'aventures ?",
      verso: "Le point de vue interne : un narrateur-personnage qui raconte à la première personne ce qu'il vit et voit.",
    },
    {
      recto: "Cite trois auteurs classiques du récit d'aventures.",
      verso: "Robert Louis Stevenson, Jules Verne, Jack London.",
    },
    {
      recto: "Donne des exemples de connecteurs temporels.",
      verso: "Soudain, alors, aussitôt, quelques instants plus tard, enfin.",
    },
    {
      recto: "Comment un auteur crée-t-il du suspense ?",
      verso: "En cachant des informations au lecteur, en multipliant les dangers, et en terminant les chapitres sur une tension non résolue.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le but principal du héros dans un récit d'aventures ?",
      choix: ["Décrire son quotidien", "Accomplir une quête ou une mission", "Résoudre une énigme policière", "Écrire une lettre"],
      bonneReponse: 1,
      explication: "Le héros du récit d'aventures est toujours mû par un but précis : retrouver un trésor, survivre, explorer un lieu inconnu.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment s'appelle l'événement qui vient bouleverser la situation initiale ?",
      choix: ["Le dénouement", "L'élément perturbateur", "La situation finale", "L'épilogue"],
      bonneReponse: 1,
      explication: "L'élément perturbateur rompt l'équilibre de départ et déclenche l'aventure.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux caractéristiques typiques du décor dans un récit d'aventures.",
      reponse: "Un décor exotique et dépaysant (île, jungle, désert, mer...) et souvent dangereux.",
      explication: "Le dépaysement et le danger sont deux ingrédients essentiels du genre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui est l'adjuvant dans un récit d'aventures ?",
      choix: ["Celui qui aide le héros", "Celui qui s'oppose au héros", "Le narrateur", "Le lecteur"],
      bonneReponse: 0,
      explication: "L'adjuvant apporte son aide au héros, contrairement à l'opposant qui lui fait obstacle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans quel ordre se déroulent les 5 étapes du schéma narratif ? Cite-les.",
      reponse: "Situation initiale, élément perturbateur, péripéties, dénouement, situation finale.",
      explication: "Ce schéma organise la structure de la plupart des récits, y compris le récit d'aventures.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel connecteur logique introduit une explication ou une cause ?",
      choix: ["Soudain", "Car", "Enfin", "Alors"],
      bonneReponse: 1,
      explication: "« Car » est un connecteur logique de cause. « Soudain », « alors » et « enfin » sont des connecteurs temporels.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les auteurs utilisent-ils souvent des phrases courtes dans les scènes de danger ?",
      reponse: "Pour accélérer le rythme du récit et faire ressentir au lecteur l'urgence et la tension de l'action.",
      explication: "Le rythme de la phrase reflète le rythme de l'action : plus les phrases sont courtes, plus l'action semble rapide.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel point de vue est le plus fréquent dans le récit d'aventures pour faire vivre l'histoire de l'intérieur ?",
      choix: ["Le point de vue omniscient uniquement", "Le point de vue interne (narrateur-personnage)", "Le point de vue externe uniquement", "Aucun point de vue particulier"],
      bonneReponse: 1,
      explication: "Le point de vue interne fait vivre l'aventure à travers les yeux du héros, ce qui renforce l'identification et le suspense.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en quoi le personnage du héros peut évoluer entre la situation initiale et la situation finale d'un récit d'aventures.",
      reponse: "Le héros, souvent naïf ou inexpérimenté au début, affronte des épreuves qui le rendent plus courageux, plus mature et plus sûr de lui : il change au contact du danger et de ses découvertes.",
      explication: "Cette transformation du héros est l'un des ressorts principaux du récit d'aventures.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel auteur a écrit L'Île au trésor ?",
      choix: ["Jules Verne", "Jack London", "Robert Louis Stevenson", "Victor Hugo"],
      bonneReponse: 2,
      explication: "Robert Louis Stevenson a publié L'Île au trésor en 1883, un des grands classiques du récit d'aventures.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Relève dans la phrase suivante les procédés d'écriture propres au récit d'aventures : « Soudain, un cri déchira le silence de la jungle ; le jeune marin bondit, le cœur battant, vers la clairière. »",
      reponse:
        "Le connecteur temporel « soudain » crée la surprise ; les verbes d'action « déchira » et « bondit » donnent du rythme ; le vocabulaire des sensations (« cri », « silence », « cœur battant ») plonge le lecteur dans l'action ; le décor (« jungle », « clairière ») installe un cadre exotique.",
      explication: "Cette phrase concentre plusieurs procédés typiques : connecteur, verbes d'action, sensations et décor exotique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Cite un roman de Jules Verne et explique brièvement de quoi il parle.",
      reponse:
        "Exemple : Vingt mille lieues sous les mers raconte le voyage du capitaine Nemo et de son sous-marin, le Nautilus, à travers les mers du globe. On peut aussi citer Le Tour du monde en quatre-vingts jours ou Voyage au centre de la Terre.",
      explication: "Jules Verne est un auteur du XIXe siècle connu pour ses romans d'aventures mêlant exploration et anticipation scientifique.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelles sont les deux premières étapes du schéma narratif ?",
      choix: ["Péripéties et dénouement", "Situation initiale et élément perturbateur", "Dénouement et situation finale", "Situation finale et péripéties"],
      bonneReponse: 1,
      explication: "Le récit commence toujours par la présentation du cadre (situation initiale), puis un événement vient le bouleverser (élément perturbateur).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un opposant ?",
      reponse: "Un personnage ou une force qui s'oppose au héros et complique sa quête.",
      explication: "L'opposant peut être un rival, un pirate, ou même un élément naturel hostile.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel est le point de vue le plus utilisé dans le récit d'aventures ?",
      choix: ["Le point de vue interne", "Le point de vue externe uniquement", "Il n'y en a jamais", "Le dialogue seul"],
      bonneReponse: 0,
      explication: "Le point de vue interne (narrateur-personnage) permet au lecteur de vivre l'aventure à travers les yeux du héros.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite un connecteur temporel et un connecteur logique.",
      reponse: "Par exemple « soudain » (temporel) et « car » (logique).",
      explication: "Les connecteurs temporels organisent la chronologie, les connecteurs logiques expliquent les causes et conséquences.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Nomme un auteur classique du récit d'aventures et une de ses œuvres.",
      reponse: "Robert Louis Stevenson et L'Île au trésor (on peut aussi citer Jules Verne ou Jack London).",
      explication: "Ces auteurs du XIXe siècle ont fondé les codes modernes du récit d'aventures.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le récit d'aventures",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment s'appelle le personnage qui aide le héros dans sa quête ?",
          choix: ["L'opposant", "L'adjuvant", "Le narrateur", "L'auteur"],
          bonneReponse: 1,
          explication: "L'adjuvant est le personnage (ou l'animal, l'objet) qui vient en aide au héros.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite trois éléments typiques du décor d'un récit d'aventures.",
          reponse: "Une île déserte, la mer, la jungle (on peut aussi citer le désert, la montagne, le grand froid...).",
          explication: "Le récit d'aventures privilégie des décors exotiques et dépaysants.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle étape du schéma narratif correspond à la suite des actions et des obstacles rencontrés par le héros ?",
          choix: ["La situation initiale", "L'élément perturbateur", "Les péripéties", "La situation finale"],
          bonneReponse: 2,
          explication: "Les péripéties constituent le cœur de l'aventure : une succession d'actions et d'épreuves.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle des connecteurs temporels dans un récit d'aventures. Donne un exemple.",
          reponse: "Ils organisent la succession des actions dans le temps et créent du rythme et de la tension. Exemple : « Soudain, un bruit retentit derrière les rochers. »",
          explication: "Les connecteurs temporels comme soudain, alors ou aussitôt rythment le déroulement de l'action.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Pourquoi le point de vue interne est-il particulièrement adapté au récit d'aventures ? Justifie ta réponse.",
          reponse: "Parce qu'il permet au lecteur de découvrir les dangers et les événements en même temps que le héros, sans en savoir plus que lui : cela crée du suspense et une forte identification avec le personnage principal.",
          explication: "Le point de vue interne limite l'information du lecteur à celle du héros, ce qui entretient la tension narrative.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans quel roman de Jack London un héros doit-il survivre dans le Grand Nord ?",
          choix: ["L'Île au trésor", "Croc-Blanc", "Vingt mille lieues sous les mers", "Le Tour du monde en quatre-vingts jours"],
          bonneReponse: 1,
          explication: "Croc-Blanc (comme L'Appel de la forêt) se déroule dans le Grand Nord et met en scène la lutte pour la survie.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le récit d'aventures",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est le but d'un héros dans un récit d'aventures ?",
          choix: ["Rester chez lui", "Accomplir une quête risquée", "Écrire un poème", "Ne rien faire"],
          bonneReponse: 1,
          explication: "Le héros est toujours engagé dans une quête qui le pousse hors de son quotidien.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la situation finale dans un schéma narratif ?",
          reponse: "C'est le nouvel équilibre qui s'installe à la fin du récit, une fois l'aventure terminée et le héros transformé par ce qu'il a vécu.",
          explication: "La situation finale clôt le récit et montre les conséquences de l'aventure sur le héros.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel connecteur logique exprime une opposition ?",
          choix: ["Donc", "Pourtant", "Alors", "Enfin"],
          bonneReponse: 1,
          explication: "« Pourtant » marque une opposition, contrairement à « donc » (conséquence) ou « alors » et « enfin » (temporels).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne deux verbes d'action typiques du vocabulaire du récit d'aventures.",
          reponse: "Par exemple : bondir, s'élancer, grimper, plonger, fuir...",
          explication: "Ces verbes de mouvement énergiques donnent du rythme aux scènes d'action.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare le rôle d'un adjuvant et celui d'un opposant dans la progression du récit.",
          reponse: "L'adjuvant facilite la progression du héros vers son but : il l'aide, le conseille ou le protège. L'opposant, au contraire, freine cette progression : il crée des obstacles, des dangers ou des conflits que le héros doit surmonter pour continuer sa quête.",
          explication: "Adjuvants et opposants structurent les péripéties en alternant aides et obstacles.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quel auteur du XIXe siècle est connu pour ses romans d'aventures mêlant exploration et science, comme Voyage au centre de la Terre ?",
          choix: ["Robert Louis Stevenson", "Jack London", "Jules Verne", "Victor Hugo"],
          bonneReponse: 2,
          explication: "Jules Verne est célèbre pour ses « Voyages extraordinaires », mêlant aventure et anticipation scientifique.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le récit d'aventures met en scène un héros lancé dans une quête risquée, dans un cadre exotique et dangereux.",
    "Le schéma narratif comprend 5 étapes : situation initiale, élément perturbateur, péripéties, dénouement, situation finale.",
    "Le héros est entouré d'adjuvants (qui l'aident) et d'opposants (qui lui font obstacle).",
    "Les procédés d'écriture clés : rythme (phrases courtes = action), suspense, connecteurs temporels et logiques, vocabulaire de l'action et des sensations.",
    "Le point de vue interne (narrateur-personnage) est fréquent : il fait vivre l'aventure de l'intérieur et crée le suspense.",
    "Repères d'œuvres : Robert Louis Stevenson (L'Île au trésor), Jules Verne (Voyage au centre de la Terre...), Jack London (Croc-Blanc).",
  ],
},
{
  slug: "roman-chevalerie",
  titre: "Le roman de chevalerie",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Découvrir le roman de chevalerie médiéval : la société féodale, la figure du chevalier et son code, la quête chevaleresque, le merveilleux, et les grandes œuvres de Chrétien de Troyes et de la légende arthurienne.",
  objectifs: [
    "Situer le roman de chevalerie dans son contexte historique, celui du Moyen Âge et de la société féodale",
    "Décrire la figure du chevalier et les valeurs de son code (courage, loyauté, fin'amor, protection des faibles)",
    "Identifier les étapes de la quête chevaleresque : adoubement, épreuves, combats, honneur",
    "Repérer les éléments du merveilleux médiéval dans un récit (enchanteurs, créatures, objets magiques)",
    "Connaître Chrétien de Troyes et la légende du roi Arthur, et maîtriser le vocabulaire du monde chevaleresque",
  ],
  slides: [
    {
      titre: "Le Moyen Âge et la société féodale",
      illustration: "🏰",
      visuel: "Roi → seigneurs → chevaliers → paysans",
      contenu: [
        "Le Moyen Âge s'étend environ du Ve au XVe siècle en Europe",
        "La société est organisée en ordres : ceux qui prient, ceux qui combattent, ceux qui travaillent",
        "Le roi accorde des terres (des fiefs) à des seigneurs, qui lui doivent fidélité",
        "Le château fort est le centre du pouvoir seigneurial",
      ],
      voixOff:
        "Le roman de chevalerie naît au Moyen Âge, une période qui s'étend environ du cinquième au quinzième siècle. La société de l'époque est organisée en trois grands ordres : ceux qui prient, comme les moines, ceux qui combattent, comme les chevaliers, et ceux qui travaillent la terre, comme les paysans. Le roi confie des terres, appelées fiefs, à des seigneurs qui lui jurent fidélité en échange. C'est ce système d'échange de terres contre loyauté et service militaire qu'on appelle la féodalité.",
    },
    {
      titre: "Le chevalier et son code",
      illustration: "⚔️",
      visuel: "Courage + loyauté + fin'amor + protection des faibles",
      contenu: [
        "Le chevalier est un guerrier noble, monté à cheval, au service d'un seigneur",
        "Son code d'honneur : courage au combat, loyauté envers son seigneur et sa dame",
        "La fin'amor (ou amour courtois) : un amour idéalisé et respectueux pour une dame",
        "Il doit protéger les faibles, les veuves, les orphelins et l'Église",
      ],
      voixOff:
        "Le chevalier n'est pas seulement un soldat : il obéit à un véritable code d'honneur. Ce code lui impose le courage au combat, la loyauté envers son seigneur, et la fin'amor, c'est-à-dire un amour courtois, idéalisé et plein de respect pour une dame. Le bon chevalier doit aussi protéger les plus faibles : les pauvres, les veuves, les orphelins, et défendre l'Église. C'est cet ensemble de valeurs que les romans de chevalerie mettent sans cesse en scène.",
    },
    {
      titre: "L'adoubement, naissance d'un chevalier",
      illustration: "🗡️",
      visuel: "Écuyer → veillée d'armes → adoubement → chevalier",
      contenu: [
        "Avant d'être chevalier, le jeune noble est page puis écuyer",
        "L'adoubement est la cérémonie qui fait de lui un chevalier",
        "Il reçoit son épée et souvent un coup donné sur l'épaule (la colée)",
        "Il prête alors serment de respecter le code chevaleresque",
      ],
      voixOff:
        "Devenir chevalier ne se fait pas en un jour. Le jeune noble commence comme page, puis devient écuyer au service d'un chevalier plus âgé, qu'il assiste et observe. Vers l'âge de vingt ans, il peut enfin recevoir l'adoubement, la cérémonie qui le fait chevalier : on lui remet son épée, parfois accompagnée d'un coup symbolique sur l'épaule appelé la colée. Ce jour-là, il jure de respecter le code chevaleresque toute sa vie.",
    },
    {
      titre: "La quête chevaleresque",
      illustration: "🧭",
      visuel: "Départ → épreuves → adversaire → honneur retrouvé",
      contenu: [
        "Le héros quitte la cour pour partir à l'aventure, souvent seul",
        "Il traverse des épreuves : forêts, combats, énigmes",
        "Il affronte des adversaires (chevaliers félons, monstres, géants)",
        "La quête se termine par la victoire, l'honneur ou une leçon de sagesse",
      ],
      voixOff:
        "Le roman de chevalerie raconte presque toujours une quête. Le héros quitte la cour du roi pour partir à l'aventure, souvent seul, à cheval. Sur sa route, il traverse des forêts mystérieuses, résout des énigmes et doit livrer des combats. Il affronte des adversaires redoutables : des chevaliers félons, des monstres ou des géants. À la fin de la quête, le chevalier retrouve son honneur, gagne une victoire, ou tire une leçon de sagesse de ses épreuves.",
    },
    {
      titre: "Le merveilleux médiéval",
      illustration: "🔮",
      visuel: "Enchanteurs, fées, dragons, objets magiques",
      contenu: [
        "Le merveilleux : des éléments surnaturels acceptés sans étonnement par les personnages",
        "Des enchanteurs et des fées (comme Merlin ou la fée Morgane)",
        "Des créatures fabuleuses : dragons, géants, animaux qui parlent",
        "Des objets magiques : épées enchantées, anneaux, fontaines merveilleuses",
      ],
      voixOff:
        "Les romans de chevalerie mêlent souvent la réalité et le merveilleux. On appelle merveilleux les éléments surnaturels que les personnages acceptent sans s'étonner, comme s'ils faisaient partie du monde normal. On y croise des enchanteurs et des fées, tel Merlin l'enchanteur ou la fée Morgane, des créatures fabuleuses comme des dragons ou des géants, et des objets magiques : épées enchantées, anneaux d'invisibilité, fontaines aux pouvoirs étranges. Ce merveilleux donne aux récits leur atmosphère si particulière.",
    },
    {
      titre: "Chrétien de Troyes, le père du roman arthurien",
      illustration: "🖋️",
      visuel: "XIIe siècle — \"Yvain\" et \"Perceval\"",
      contenu: [
        "Chrétien de Troyes écrit au XIIe siècle, à la cour de Champagne",
        "Il invente le roman arthurien en vers, mêlant amour et aventure",
        "\"Yvain ou le Chevalier au Lion\" : un chevalier aidé par un lion reconquiert l'amour de sa dame",
        "\"Perceval ou le Conte du Graal\" : un jeune homme naïf devient chevalier et cherche le Graal",
      ],
      voixOff:
        "Chrétien de Troyes est le plus grand auteur de romans de chevalerie du Moyen Âge. Il écrit au douzième siècle, à la cour de Champagne, et invente une nouvelle façon de raconter les aventures des chevaliers du roi Arthur. Dans Yvain ou le Chevalier au Lion, le héros, aidé par un lion reconnaissant, doit prouver sa loyauté pour reconquérir l'amour de sa dame. Dans Perceval ou le Conte du Graal, un jeune homme naïf élevé loin du monde devient chevalier et part à la recherche du mystérieux Graal.",
    },
    {
      titre: "Le roi Arthur et les chevaliers de la Table Ronde",
      illustration: "🛡️",
      visuel: "Camelot — Table Ronde — Excalibur",
      contenu: [
        "Arthur est un roi légendaire de Bretagne, entouré de ses chevaliers à Camelot",
        "La Table Ronde n'a pas de bout : tous les chevaliers y sont égaux en honneur",
        "Excalibur, son épée magique, symbolise sa légitimité de roi",
        "Merlin l'enchanteur conseille Arthur et intervient souvent dans les récits",
      ],
      voixOff:
        "Le roi Arthur est le souverain légendaire d'une Bretagne idéale, entouré de ses meilleurs chevaliers dans son château de Camelot. Autour de la Table Ronde, aucun chevalier n'a de place plus importante qu'un autre : la table n'a pas de bout, ce qui symbolise l'égalité d'honneur entre tous les compagnons du roi. Excalibur, l'épée magique d'Arthur, symbolise sa légitimité à régner. Et Merlin l'enchanteur, conseiller et protecteur du roi, intervient souvent grâce à ses pouvoirs magiques dans les récits.",
    },
    {
      titre: "Le vocabulaire du monde chevaleresque",
      illustration: "📜",
      visuel: "destrier, écuyer, tournoi, quête, dame, félon",
      contenu: [
        "Destrier : le cheval de bataille du chevalier",
        "Écuyer : jeune noble au service d'un chevalier, avant l'adoubement",
        "Tournoi : compétition de combats à cheval pour s'entraîner et gagner de l'honneur",
        "Félon : un chevalier déloyal, traître à son seigneur ou à son code",
      ],
      voixOff:
        "Pour bien comprendre un roman de chevalerie, il faut connaître son vocabulaire. Le destrier est le grand cheval de bataille du chevalier. L'écuyer est le jeune noble qui le sert avant de devenir chevalier lui-même. Le tournoi est une compétition de combats à cheval, organisée pour s'entraîner et gagner de la gloire. La dame désigne la femme noble que le chevalier honore par sa fin'amor. Enfin, un félon est un chevalier déloyal, un traître à son seigneur ou à son code d'honneur.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Le roman de chevalerie naît au Moyen Âge, dans la société féodale",
        "Le chevalier suit un code : courage, loyauté, fin'amor, protection des faibles",
        "La quête chevaleresque alterne épreuves, combats et merveilleux",
        "Chrétien de Troyes et la légende arthurienne fondent ce genre littéraire",
      ],
      voixOff:
        "Résumons l'essentiel. Le roman de chevalerie naît au Moyen Âge, dans une société féodale organisée autour du roi et des seigneurs. Le chevalier suit un code d'honneur fondé sur le courage, la loyauté et la fin'amor, et doit protéger les plus faibles. Son récit typique est celui d'une quête, faite d'épreuves, de combats et d'éléments merveilleux comme les enchanteurs ou les objets magiques. Chrétien de Troyes, avec Yvain et Perceval, et la légende du roi Arthur et de la Table Ronde, sont les piliers de ce genre littéraire. Tu es prêt à explorer ces récits d'aventure et d'honneur !",
    },
  ],
  fiche: {
    intro:
      "Le roman de chevalerie est un genre littéraire né au Moyen Âge : il raconte les aventures de chevaliers courageux et loyaux, souvent liés à la légende du roi Arthur, dans un monde où se mêlent combats, amour courtois et merveilleux.",
    sections: [
      {
        titre: "Le contexte : Moyen Âge et société féodale",
        points: [
          "Le Moyen Âge s'étend environ du Ve au XVe siècle en Europe",
          "La société féodale repose sur des liens de fidélité : le roi accorde des fiefs (des terres) à des seigneurs",
          "La société est divisée en trois ordres : ceux qui prient, ceux qui combattent, ceux qui travaillent",
          "Le château fort est le centre du pouvoir et de la vie seigneuriale",
        ],
      },
      {
        titre: "Le chevalier et son code d'honneur",
        points: [
          "Le chevalier est un guerrier noble, formé comme page puis écuyer avant l'adoubement",
          "L'adoubement est la cérémonie qui fait de lui un chevalier (remise de l'épée, parfois la colée)",
          "Son code d'honneur : courage, loyauté envers son seigneur, protection des faibles",
          "La fin'amor (amour courtois) : un amour respectueux et idéalisé pour une dame, qui pousse le chevalier à se dépasser",
        ],
      },
      {
        titre: "La quête et le merveilleux",
        points: [
          "La quête est le voyage initiatique du héros, ponctué d'épreuves et de combats",
          "Il affronte des adversaires : chevaliers félons, monstres, géants",
          "Le merveilleux médiéval mêle enchanteurs, fées, créatures fabuleuses et objets magiques",
          "La quête s'achève par une victoire, l'honneur retrouvé ou une leçon de sagesse",
        ],
      },
      {
        titre: "Des œuvres et un vocabulaire à connaître",
        points: [
          "Chrétien de Troyes (XIIe siècle) invente le roman arthurien en vers",
          "\"Yvain ou le Chevalier au Lion\" : un chevalier aidé d'un lion reconquiert l'amour de sa dame",
          "\"Perceval ou le Conte du Graal\" : un jeune homme naïf devient chevalier et cherche le Graal",
          "Le roi Arthur, la Table Ronde, l'épée Excalibur et Merlin l'enchanteur forment la légende arthurienne",
          "Vocabulaire clé : destrier, écuyer, tournoi, quête, dame, félon",
        ],
      },
    ],
    audio:
      "Fiche de révision : le roman de chevalerie. Ce genre littéraire naît au Moyen Âge, une période qui s'étend environ du cinquième au quinzième siècle. La société de l'époque est féodale : le roi accorde des terres, appelées fiefs, à des seigneurs qui lui doivent fidélité, et la société se divise en trois ordres, ceux qui prient, ceux qui combattent et ceux qui travaillent. Le chevalier est un guerrier noble : il commence sa formation comme page, puis comme écuyer, avant de recevoir l'adoubement, la cérémonie qui fait de lui un chevalier. Il suit alors un code d'honneur exigeant : le courage au combat, la loyauté envers son seigneur, la protection des faibles, et la fin'amor, un amour courtois et idéalisé pour une dame. Le récit typique du roman de chevalerie est celui d'une quête : le héros part à l'aventure, traverse des épreuves, affronte des adversaires comme des chevaliers félons ou des monstres, avant de retrouver l'honneur ou d'acquérir la sagesse. Ces récits mêlent souvent le réel et le merveilleux, avec des enchanteurs, des fées, des créatures fabuleuses et des objets magiques. Chrétien de Troyes, au douzième siècle, est l'auteur le plus célèbre de ce genre : il écrit Yvain ou le Chevalier au Lion et Perceval ou le Conte du Graal. Ces récits appartiennent à la légende du roi Arthur, souverain entouré de ses chevaliers autour de la Table Ronde, aidé de son épée Excalibur et conseillé par l'enchanteur Merlin. Enfin, retiens le vocabulaire spécifique : le destrier est le cheval de bataille, l'écuyer sert le chevalier avant l'adoubement, le tournoi est une compétition de combats, et le félon est un chevalier déloyal.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce que la société féodale ?",
      verso: "Un système où le roi accorde des terres (fiefs) à des seigneurs en échange de leur fidélité et de leur service militaire.",
    },
    {
      recto: "Qu'est-ce que l'adoubement ?",
      verso: "La cérémonie qui fait d'un écuyer un chevalier : on lui remet son épée, parfois avec la colée, un coup symbolique sur l'épaule.",
    },
    {
      recto: "Qu'est-ce que la fin'amor (amour courtois) ?",
      verso: "Un amour idéalisé et respectueux qu'un chevalier voue à une dame, et qui le pousse à se montrer digne d'elle par ses exploits.",
    },
    {
      recto: "Qui est Chrétien de Troyes ?",
      verso: "Un auteur français du XIIe siècle qui invente le roman de chevalerie en vers, avec des œuvres comme Yvain et Perceval.",
    },
    {
      recto: "Que raconte \"Yvain ou le Chevalier au Lion\" ?",
      verso: "Un chevalier, aidé par un lion reconnaissant, doit multiplier les exploits pour reconquérir l'amour de sa dame perdue.",
    },
    {
      recto: "Que cherchent les chevaliers de la Table Ronde ?",
      verso: "Notamment le Graal, un objet mystérieux et sacré, dans le roman Perceval ou le Conte du Graal.",
    },
    {
      recto: "Que sont un destrier et un écuyer ?",
      verso: "Le destrier est le cheval de bataille du chevalier ; l'écuyer est le jeune noble à son service avant de devenir chevalier.",
    },
    {
      recto: "Qu'est-ce que le merveilleux médiéval ?",
      verso: "Des éléments surnaturels (enchanteurs, fées, dragons, objets magiques) que les personnages acceptent sans étonnement dans le récit.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "À quelle période historique appartient le roman de chevalerie ?",
      choix: ["L'Antiquité", "Le Moyen Âge", "La Renaissance", "Le XIXe siècle"],
      bonneReponse: 1,
      explication: "Le roman de chevalerie se développe au Moyen Âge, en particulier à partir du XIIe siècle.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on la cérémonie qui fait d'un écuyer un chevalier ?",
      choix: ["Le sacre", "L'adoubement", "Le tournoi", "Le serment"],
      bonneReponse: 1,
      explication: "L'adoubement est la cérémonie au cours de laquelle le jeune noble reçoit son épée et devient officiellement chevalier.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois valeurs du code d'honneur du chevalier.",
      reponse: "Le courage au combat, la loyauté envers son seigneur (ou sa dame), et la protection des faibles.",
      explication: "On peut aussi citer la fin'amor, l'amour courtois voué à une dame.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on le cheval de bataille du chevalier ?",
      choix: ["Le palefroi", "Le destrier", "Le poulain", "Le mulet"],
      bonneReponse: 1,
      explication: "Le destrier est le grand cheval de bataille, réservé au combat et aux tournois.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que la fin'amor ?",
      choix: [
        "Un combat entre deux chevaliers",
        "Un amour idéalisé et respectueux voué à une dame",
        "Le dernier repas avant l'adoubement",
        "Une prière dite avant la bataille",
      ],
      bonneReponse: 1,
      explication: "La fin'amor, ou amour courtois, pousse le chevalier à se rendre digne de sa dame par ses exploits et sa loyauté.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique en une ou deux phrases ce qu'est la société féodale.",
      reponse: "C'est une organisation sociale où le roi accorde des terres, appelées fiefs, à des seigneurs, qui lui doivent en échange fidélité et service militaire ; ces seigneurs peuvent eux-mêmes avoir des vassaux.",
      explication: "Cette organisation en chaîne de fidélité structure toute la société médiévale, du roi jusqu'aux paysans.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qui est l'auteur d'\"Yvain ou le Chevalier au Lion\" et de \"Perceval ou le Conte du Graal\" ?",
      reponse: "Chrétien de Troyes, un écrivain du XIIe siècle considéré comme le fondateur du roman arthurien.",
      explication: "Il écrit à la cour de Champagne et invente une nouvelle manière de raconter les aventures des chevaliers du roi Arthur.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans \"Yvain ou le Chevalier au Lion\", qui aide le héros dans ses aventures ?",
      choix: ["Un enchanteur", "Un lion reconnaissant", "Son écuyer", "Le roi Arthur en personne"],
      bonneReponse: 1,
      explication: "Yvain sauve un lion d'un combat contre un serpent ; l'animal reconnaissant devient son fidèle compagnon.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris les principales étapes d'une quête chevaleresque type, dans l'ordre.",
      reponse: "Le chevalier quitte la cour, souvent seul ; il traverse des épreuves (forêts, énigmes) ; il affronte un ou plusieurs adversaires (monstre, chevalier félon) ; il triomphe et retrouve honneur, amour ou sagesse.",
      explication: "Ce schéma narratif, proche du conte, structure la plupart des romans de chevalerie médiévaux.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Quel rôle joue le merveilleux dans les romans de chevalerie ? Donne deux exemples d'éléments merveilleux.",
      reponse: "Le merveilleux crée une atmosphère fascinante et symbolise souvent les épreuves morales ou intérieures du héros. Exemples : Merlin l'enchanteur, qui use de magie pour aider Arthur ; une épée magique comme Excalibur ou une fontaine aux pouvoirs étranges.",
      explication: "Le merveilleux médiéval n'étonne jamais les personnages : il fait partie intégrante de leur monde.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Que symbolise la forme ronde de la Table Ronde du roi Arthur ?",
      choix: [
        "La richesse du royaume",
        "L'égalité d'honneur entre tous les chevaliers",
        "Le cycle des saisons",
        "La puissance militaire d'Arthur"
      ],
      bonneReponse: 1,
      explication: "Une table ronde n'a pas de bout : aucun chevalier n'occupe une place plus prestigieuse qu'un autre, ce qui symbolise leur égalité.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Qu'est-ce qu'un chevalier félon, et pourquoi ce personnage est-il important dans les romans de chevalerie ?",
      reponse: "Un félon est un chevalier déloyal, traître à son seigneur ou à son code d'honneur. Il est important car il incarne le contraire des valeurs chevaleresques et permet, par opposition, de mieux faire ressortir les qualités du héros.",
      explication: "Le félon sert souvent d'adversaire au héros et met en valeur, par contraste, la loyauté et le courage attendus d'un vrai chevalier.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le roman de chevalerie se développe surtout à quel siècle ?",
      choix: ["Le VIIIe siècle", "Le XIIe siècle", "Le XVIe siècle", "Le XXe siècle"],
      bonneReponse: 1,
      explication: "C'est au XIIe siècle, notamment avec Chrétien de Troyes, que le roman de chevalerie connaît son plus grand essor.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un écuyer ?",
      reponse: "Un jeune noble au service d'un chevalier, avant de recevoir lui-même l'adoubement.",
      explication: "C'est l'étape juste avant de devenir chevalier, après celle de page.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment s'appelle l'épée magique du roi Arthur ?",
      choix: ["Durandal", "Excalibur", "Joyeuse", "Caliburn le Terrible"],
      bonneReponse: 1,
      explication: "Excalibur est l'épée légendaire d'Arthur, symbole de sa légitimité à régner.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite le titre d'une œuvre de Chrétien de Troyes et résume-la en une phrase.",
      reponse: "Par exemple, Perceval ou le Conte du Graal : un jeune homme naïf, élevé loin du monde, devient chevalier et part à la recherche du Graal.",
      explication: "On peut aussi citer Yvain ou le Chevalier au Lion, l'histoire d'un chevalier aidé par un lion.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique ce qui distingue un chevalier fidèle à son code d'un chevalier félon.",
      reponse: "Le chevalier fidèle respecte le courage, la loyauté et la protection des faibles ; le félon trahit son seigneur ou son code d'honneur pour son intérêt personnel.",
      explication: "Cette opposition structure de nombreux conflits dans les romans de chevalerie.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le roman de chevalerie",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qu'est-ce qu'un fief, dans la société féodale ?",
          choix: [
            "Une arme du chevalier",
            "Une terre accordée par le roi à un seigneur",
            "Un titre de noblesse héréditaire",
            "Une cérémonie religieuse"
          ],
          bonneReponse: 1,
          explication: "Le fief est la terre que le roi (ou un grand seigneur) accorde à un vassal en échange de sa fidélité et de son aide militaire.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la fin'amor ?",
          reponse: "Un amour idéalisé, respectueux et courtois qu'un chevalier voue à une dame, qui le pousse à accomplir des exploits pour se montrer digne d'elle.",
          explication: "C'est l'une des valeurs centrales du code chevaleresque, présente dans presque tous les romans de Chrétien de Troyes.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans \"Yvain ou le Chevalier au Lion\", pourquoi le héros doit-il multiplier les exploits ?",
          choix: [
            "Pour devenir roi à la place d'Arthur",
            "Pour reconquérir l'amour de sa dame, qu'il a perdu en manquant à sa promesse",
            "Pour retrouver le Graal",
            "Pour venger la mort de son père"
          ],
          bonneReponse: 1,
          explication: "Yvain a manqué à sa promesse de revenir auprès de sa dame ; il doit prouver sa loyauté par de nombreux exploits pour regagner son amour.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite trois éléments qui peuvent appartenir au merveilleux médiéval dans un roman de chevalerie.",
          reponse: "Par exemple : un enchanteur comme Merlin, une créature fabuleuse comme un dragon, et un objet magique comme une épée enchantée ou une fontaine aux pouvoirs étranges.",
          explication: "Le merveilleux mêle le surnaturel au réel sans jamais surprendre les personnages du récit.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Décris les grandes étapes du parcours d'un jeune noble avant de devenir chevalier.",
          reponse: "Il est d'abord page dans l'enfance, puis écuyer au service d'un chevalier, à qui il apprend le maniement des armes et les valeurs chevaleresques. Vers vingt ans, il reçoit l'adoubement, cérémonie au cours de laquelle on lui remet son épée, parfois accompagnée de la colée, et il jure de respecter le code chevaleresque.",
          explication: "Ce parcours en trois étapes (page, écuyer, chevalier) reflète l'apprentissage progressif des valeurs et des techniques du combat.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi la Table Ronde du roi Arthur n'a-t-elle pas de bout ?",
          choix: [
            "Pour des raisons pratiques de fabrication",
            "Pour symboliser l'égalité d'honneur entre tous les chevaliers",
            "Parce qu'elle représente le Graal",
            "Pour rappeler la forme du bouclier d'Arthur"
          ],
          bonneReponse: 1,
          explication: "Sans bout, aucun chevalier n'occupe une place plus prestigieuse qu'un autre : la forme de la table symbolise leur égalité.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le roman de chevalerie",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qui est l'auteur de \"Perceval ou le Conte du Graal\" ?",
          choix: ["Chrétien de Troyes", "Merlin l'enchanteur", "Le roi Arthur", "Guillaume de Lorris"],
          bonneReponse: 0,
          explication: "Chrétien de Troyes est l'auteur de ce roman inachevé, écrit au XIIe siècle.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un tournoi, au Moyen Âge ?",
          reponse: "Une compétition de combats à cheval organisée pour permettre aux chevaliers de s'entraîner et de gagner de l'honneur.",
          explication: "Les tournois permettaient aussi aux chevaliers de faire leurs preuves devant leur seigneur et devant leur dame.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que représente Merlin dans la légende arthurienne ?",
          choix: [
            "Un chevalier félon",
            "Un enchanteur qui conseille et protège le roi Arthur",
            "Le fils du roi Arthur",
            "Un simple paysan devenu roi"
          ],
          bonneReponse: 1,
          explication: "Merlin est un enchanteur doté de pouvoirs magiques qui guide et protège Arthur tout au long de son règne.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce qu'un chevalier félon ? Pourquoi ce type de personnage apparaît-il souvent dans les romans de chevalerie ?",
          reponse: "C'est un chevalier déloyal, qui trahit son seigneur ou son code d'honneur. Il apparaît souvent comme adversaire du héros, ce qui permet de mieux mettre en valeur, par contraste, les qualités attendues d'un bon chevalier.",
          explication: "L'opposition entre le héros loyal et l'adversaire félon est un ressort narratif classique du genre.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "En t'appuyant sur les œuvres de Chrétien de Troyes, explique pourquoi on peut dire que la quête chevaleresque est aussi un parcours initiatique.",
          reponse: "Le héros ne se contente pas d'accumuler des exploits : à travers les épreuves qu'il traverse, il apprend à mieux se connaître et corrige ses défauts. Perceval, naïf au départ, apprend la courtoisie et la sagesse ; Yvain apprend la loyauté et la mesure après avoir manqué à sa promesse. La quête transforme donc intérieurement le héros, pas seulement extérieurement.",
          explication: "C'est cette dimension d'apprentissage moral qui distingue la quête chevaleresque d'une simple suite d'aventures.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quel objet symbolise la légitimité du roi Arthur à régner ?",
          choix: ["Le Graal", "Excalibur", "La Table Ronde", "Le château de Camelot"],
          bonneReponse: 1,
          explication: "L'épée Excalibur, souvent liée à un pouvoir magique ou à une origine surnaturelle, symbolise le droit d'Arthur à être roi.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le roman de chevalerie naît au Moyen Âge, dans une société féodale organisée autour du roi, des seigneurs et de leurs vassaux.",
    "Le chevalier suit un code d'honneur : courage, loyauté, fin'amor (amour courtois) et protection des faibles.",
    "L'adoubement est la cérémonie qui fait d'un écuyer un chevalier.",
    "La quête chevaleresque suit un schéma récurrent : départ, épreuves, adversaires, victoire ou sagesse retrouvée.",
    "Le merveilleux médiéval (enchanteurs, créatures, objets magiques) est accepté sans étonnement par les personnages du récit.",
    "Chrétien de Troyes (Yvain, Perceval) et la légende du roi Arthur, de la Table Ronde et d'Excalibur sont les piliers du genre.",
  ],
},
{
  slug: "theatre-comedie",
  titre: "Le théâtre : la comédie",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Découvrir le texte théâtral et son vocabulaire (didascalies, répliques, actes et scènes), comprendre la double énonciation propre à la scène, et repérer les procédés du comique à travers l'œuvre de Molière.",
  objectifs: [
    "Reconnaître les spécificités du texte théâtral (dialogue, didascalies, répliques)",
    "Distinguer acte, scène, tirade, aparté et monologue",
    "Comprendre la double énonciation propre au théâtre",
    "Identifier les différents procédés comiques : mots, gestes, situation, caractère",
    "Découvrir Molière et la fonction sociale de la comédie",
  ],
  slides: [
    {
      titre: "Le texte théâtral : un texte fait pour être joué",
      illustration: "🎭",
      visuel: "Texte écrit → Scène jouée",
      contenu: [
        "Une pièce de théâtre est un texte écrit pour être représenté sur scène",
        "Elle est composée de dialogues échangés entre les personnages",
        "Les didascalies (en italique) donnent des indications de jeu, de décor, de ton",
        "Chaque prise de parole d'un personnage s'appelle une réplique",
      ],
      voixOff:
        "Le théâtre n'est pas fait pour être seulement lu : c'est un texte écrit pour être joué devant un public. Il est construit à partir de dialogues entre les personnages. Au milieu de ces dialogues, l'auteur glisse des didascalies, en italique, qui indiquent comment jouer une scène, quel décor installer ou quel ton employer. Chaque prise de parole d'un personnage, courte ou longue, s'appelle une réplique.",
    },
    {
      titre: "Actes, scènes et grandes répliques",
      illustration: "📖",
      visuel: "Acte I, scène 3",
      contenu: [
        "La pièce est découpée en actes, eux-mêmes divisés en scènes",
        "Une nouvelle scène commence souvent quand un personnage entre ou sort",
        "La tirade : une longue réplique qu'un personnage prononce sans être interrompu",
        "Le monologue : un personnage seul en scène qui parle à voix haute pour lui-même",
      ],
      voixOff:
        "Une pièce de théâtre s'organise comme un livre : elle est découpée en actes, qui sont eux-mêmes divisés en scènes. En général, une nouvelle scène commence dès qu'un personnage entre ou sort de la pièce. Certaines répliques sont très longues : on les appelle des tirades, quand un personnage parle longuement sans être coupé. Et lorsqu'un personnage reste seul en scène et parle à voix haute pour lui-même, c'est un monologue.",
    },
    {
      titre: "L'aparté, un secret partagé avec le public",
      illustration: "🤫",
      visuel: "(À part) ...",
      contenu: [
        "L'aparté : le personnage dit une phrase que les autres personnages ne sont pas censés entendre",
        "Seul le spectateur est mis dans la confidence",
        "Il crée souvent un effet comique ou de complicité avec le public",
        "Différent du monologue : dans l'aparté, d'autres personnages sont présents sur scène",
      ],
      voixOff:
        "Il existe un procédé encore plus surprenant : l'aparté. Le personnage dit alors une phrase que les autres personnages présents sur scène ne sont pas censés entendre. Seul le spectateur est mis dans la confidence, comme si le personnage lui glissait un secret à l'oreille. Cela crée souvent un effet comique ou une complicité amusante avec le public. Attention à ne pas confondre l'aparté avec le monologue : dans l'aparté, d'autres personnages restent bien présents sur scène.",
    },
    {
      titre: "La double énonciation",
      illustration: "🎙️",
      visuel: "Personnage → Personnage  /  Auteur → Spectateur",
      contenu: [
        "Au théâtre, chaque réplique a deux destinataires à la fois",
        "Le personnage s'adresse à un autre personnage, sur scène",
        "En même temps, l'auteur s'adresse au spectateur, dans la salle",
        "On appelle cela la double énonciation",
      ],
      voixOff:
        "Voici l'une des règles les plus importantes du théâtre : la double énonciation. Chaque réplique est en réalité adressée à deux destinataires en même temps. D'un côté, le personnage parle à un autre personnage, sur scène, dans l'histoire racontée. De l'autre, à travers cette même réplique, l'auteur s'adresse directement au spectateur assis dans la salle. C'est ce qui permet au public de comprendre des choses que les personnages, eux, ignorent encore.",
    },
    {
      titre: "Le comique de mots et de gestes",
      illustration: "😂",
      visuel: "Jeux de mots + gestes exagérés",
      contenu: [
        "Comique de mots (ou de langage) : jeux de mots, répétitions, déformations, jurons inventés",
        "Comique de gestes : mimiques, chutes, gifles, coups de bâton, gestes exagérés",
        "Ces deux comiques s'appuient sur le langage ou sur le jeu physique de l'acteur",
        "Ils déclenchent souvent un rire immédiat, sans réfléchir",
      ],
      voixOff:
        "Molière et les auteurs comiques disposent de plusieurs outils pour faire rire. Le comique de mots, aussi appelé comique de langage, joue avec les jeux de mots, les répétitions ou les déformations amusantes du vocabulaire. Le comique de gestes, lui, passe par le corps de l'acteur : une mimique, une chute, une gifle bien sentie ou un coup de bâton. Ces deux procédés font rire tout de suite, sans même avoir besoin de réfléchir.",
    },
    {
      titre: "Le comique de situation",
      illustration: "🙈",
      visuel: "Quiproquo  /  Malentendu",
      contenu: [
        "Le comique de situation naît d'un enchaînement d'événements inattendus",
        "Le quiproquo : un personnage prend une personne ou une chose pour une autre",
        "Le malentendu : deux personnages se comprennent mal sans le savoir",
        "Le spectateur, lui, sait ce que les personnages ignorent : c'est encore plus drôle",
      ],
      voixOff:
        "Le comique de situation ne dépend pas des mots ni des gestes, mais de l'enchaînement des événements eux-mêmes. Le quiproquo en est l'exemple le plus célèbre : un personnage prend une personne, ou une chose, pour une autre. Le malentendu fonctionne de façon proche, quand deux personnages se comprennent mal sans même s'en rendre compte. Grâce à la double énonciation, le spectateur sait exactement ce que les personnages ignorent, ce qui rend la scène encore plus drôle.",
    },
    {
      titre: "Le comique de caractère",
      illustration: "🎩",
      visuel: "L'avare, le prétentieux, le naïf",
      contenu: [
        "Le comique de caractère repose sur un défaut humain poussé à l'extrême",
        "Le personnage devient un « type » : l'avare, le prétentieux, le jaloux, le naïf",
        "Ce défaut exagéré le rend ridicule aux yeux du spectateur",
        "Ces types de personnages traversent toute l'histoire du théâtre comique",
      ],
      voixOff:
        "Le dernier grand procédé comique s'appuie sur la personnalité même des personnages : c'est le comique de caractère. Un défaut humain bien réel, comme l'avarice ou la vanité, est poussé jusqu'à l'excès, jusqu'à la caricature. Le personnage devient alors un véritable type : l'avare, le prétentieux, le jaloux ou le naïf. C'est justement cet excès qui le rend ridicule, et qui fait rire le spectateur tout en lui tendant un miroir.",
    },
    {
      titre: "Molière, le maître de la comédie",
      illustration: "🖋️",
      visuel: "Molière (1622-1673)",
      contenu: [
        "Jean-Baptiste Poquelin, dit Molière, auteur et acteur français du XVIIe siècle",
        "Il écrit et joue ses comédies pour la cour de Louis XIV et pour le public parisien",
        "« Le Médecin malgré lui », « Les Fourberies de Scapin » : des comédies pleines de rebondissements",
        "Il combine tous les procédés comiques pour dénoncer les défauts humains",
      ],
      voixOff:
        "Impossible de parler de comédie sans évoquer Molière. Jean-Baptiste Poquelin, qui prend le nom de scène de Molière, est un auteur et acteur français du dix-septième siècle. Il écrit et joue ses pièces aussi bien pour la cour du roi Louis quatorze que pour le public parisien. Des comédies comme le Médecin malgré lui ou les Fourberies de Scapin regorgent de quiproquos, de déguisements et de personnages ridicules. Molière combine avec génie tous les procédés comiques pour dénoncer les défauts de son époque.",
    },
    {
      titre: "Rire pour mieux réfléchir",
      illustration: "🏆",
      visuel: "Castigat ridendo mores",
      contenu: [
        "La comédie divertit, mais elle a aussi une fonction sociale",
        "Elle critique les défauts humains en les tournant en ridicule",
        "Devise latine : « castigat ridendo mores » (elle corrige les mœurs par le rire)",
        "En riant des personnages, le spectateur est amené à réfléchir à ses propres travers",
      ],
      voixOff:
        "Pour conclure, retenons que la comédie ne cherche pas seulement à divertir. Elle a aussi une véritable fonction sociale : critiquer les défauts humains en les tournant en ridicule. Les auteurs classiques résumaient cette idée par une devise latine, castigat ridendo mores, qui signifie qu'elle corrige les mœurs par le rire. En riant d'un avare ou d'un prétentieux sur scène, le spectateur est invité, sans s'en rendre compte, à réfléchir à ses propres défauts.",
    },
  ],
  fiche: {
    intro:
      "Le théâtre est un texte écrit pour être joué : il se caractérise par des dialogues, des didascalies et un découpage précis en actes et en scènes. La comédie utilise des procédés comiques variés pour faire rire tout en critiquant les défauts humains.",
    sections: [
      {
        titre: "Le vocabulaire du texte théâtral",
        points: [
          "Dialogue : échange de répliques entre les personnages",
          "Didascalies : indications scéniques données par l'auteur, en italique (décor, gestes, ton)",
          "Réplique : chaque prise de parole d'un personnage",
          "Acte / scène : grandes divisions de la pièce (acte), sous-divisées en scènes",
          "Tirade : longue réplique prononcée sans interruption",
          "Monologue : un personnage seul en scène parle à voix haute pour lui-même",
          "Aparté : parole destinée au seul spectateur, que les autres personnages n'entendent pas",
        ],
      },
      {
        titre: "La mise en scène et la double énonciation",
        points: [
          "La mise en scène : choix du décor, des costumes, des déplacements et du jeu des acteurs",
          "Les didascalies guident le metteur en scène et les comédiens",
          "Double énonciation : chaque réplique s'adresse à la fois à un personnage (sur scène) et au spectateur (dans la salle)",
          "Grâce à cela, le public peut en savoir plus que certains personnages",
        ],
      },
      {
        titre: "Les quatre procédés du comique",
        points: [
          "Comique de mots (ou de langage) : jeux de mots, répétitions, déformations",
          "Comique de gestes : mimiques, chutes, gifles, gestes exagérés de l'acteur",
          "Comique de situation : quiproquo (confondre une personne/chose avec une autre), malentendu",
          "Comique de caractère : un défaut humain poussé à l'extrême (l'avare, le prétentieux, le naïf...)",
        ],
      },
      {
        titre: "Molière et la fonction de la comédie",
        points: [
          "Molière (Jean-Baptiste Poquelin, 1622-1673) : auteur et acteur incontournable de la comédie française",
          "Œuvres typiques du programme : « Le Médecin malgré lui », « Les Fourberies de Scapin »",
          "La comédie divertit mais critique aussi les défauts humains",
          "« Castigat ridendo mores » : elle corrige les mœurs par le rire",
        ],
      },
    ],
    audio:
      "Fiche de révision : le théâtre et la comédie. Le théâtre est un texte écrit pour être joué sur scène. Il est composé de dialogues, c'est-à-dire d'échanges de répliques entre les personnages. Les didascalies, écrites en italique, donnent des indications de mise en scène, de décor ou de ton. La pièce est découpée en actes, eux-mêmes divisés en scènes. Une longue réplique ininterrompue s'appelle une tirade ; quand un personnage seul en scène parle pour lui-même, on parle de monologue ; et quand il dit une phrase que seul le spectateur entend, c'est un aparté. Le théâtre repose sur un principe essentiel : la double énonciation. Chaque réplique s'adresse à la fois à un autre personnage, sur scène, et au spectateur, dans la salle. C'est ce qui permet au public de comprendre des choses que les personnages ignorent encore. La comédie utilise quatre grands procédés pour faire rire : le comique de mots, avec les jeux de langage et les répétitions ; le comique de gestes, avec les mimiques et les chutes ; le comique de situation, avec le quiproquo et le malentendu ; et le comique de caractère, quand un défaut humain, comme l'avarice ou la vanité, est poussé jusqu'au ridicule. Molière, de son vrai nom Jean-Baptiste Poquelin, est l'auteur incontournable de la comédie française du dix-septième siècle, avec des pièces comme le Médecin malgré lui ou les Fourberies de Scapin. Sa comédie ne se contente pas de divertir : elle critique aussi les défauts humains, selon la devise castigat ridendo mores, elle corrige les mœurs par le rire.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce qu'une didascalie ?",
      verso: "Une indication scénique donnée par l'auteur, en italique, sur le décor, les gestes ou le ton.",
    },
    {
      recto: "Que signifie « aparté » ?",
      verso: "Une réplique que seul le spectateur entend, les autres personnages présents sur scène ne l'entendent pas.",
    },
    {
      recto: "Différence entre tirade et monologue ?",
      verso: "La tirade est une longue réplique adressée à d'autres personnages ; le monologue est prononcé par un personnage seul en scène.",
    },
    {
      recto: "Qu'est-ce que la double énonciation ?",
      verso: "Chaque réplique s'adresse à la fois à un personnage sur scène et à l'auteur qui s'adresse au spectateur.",
    },
    {
      recto: "Qu'est-ce qu'un quiproquo ?",
      verso: "Une situation comique où un personnage prend une personne ou une chose pour une autre.",
    },
    {
      recto: "Cite les quatre types de comique.",
      verso: "Comique de mots, comique de gestes, comique de situation, comique de caractère.",
    },
    {
      recto: "Qui est Molière ?",
      verso: "Jean-Baptiste Poquelin, auteur et acteur français du XVIIe siècle, maître de la comédie (Le Médecin malgré lui, Les Fourberies de Scapin).",
    },
    {
      recto: "Que signifie « castigat ridendo mores » ?",
      verso: "« Elle corrige les mœurs par le rire » : la comédie critique les défauts humains en faisant rire.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on chaque prise de parole d'un personnage au théâtre ?",
      choix: ["Une didascalie", "Une réplique", "Un acte", "Un aparté"],
      bonneReponse: 1,
      explication: "Chaque fois qu'un personnage parle, on appelle cela une réplique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Où trouve-t-on généralement les didascalies dans un texte de théâtre ?",
      choix: ["En majuscules", "En italique", "Soulignées en rouge", "À la fin de la pièce"],
      bonneReponse: 1,
      explication: "Les didascalies, indications de mise en scène données par l'auteur, sont écrites en italique pour se distinguer des paroles des personnages.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment s'appelle la grande division d'une pièce de théâtre, elle-même partagée en scènes ?",
      reponse: "L'acte.",
      explication: "Une pièce est découpée en actes, eux-mêmes divisés en scènes.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un personnage seul en scène qui parle à voix haute pour lui-même prononce :",
      choix: ["Une tirade", "Un aparté", "Un monologue", "Une réplique"],
      bonneReponse: 2,
      explication: "Le monologue est le discours d'un personnage seul en scène qui parle pour lui-même.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est la double énonciation au théâtre, en une ou deux phrases.",
      reponse: "Au théâtre, chaque réplique a deux destinataires en même temps : le personnage s'adresse à un autre personnage sur scène, tandis que l'auteur, à travers cette même réplique, s'adresse au spectateur dans la salle.",
      explication: "C'est une notion centrale : elle explique pourquoi le spectateur peut comprendre des choses que les personnages ignorent, comme dans un quiproquo.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans une scène, un valet se trompe et remet une lettre au mauvais destinataire, provoquant une confusion comique. Quel type de comique est ici mis en œuvre ?",
      choix: ["Comique de mots", "Comique de gestes", "Comique de situation", "Comique de caractère"],
      bonneReponse: 2,
      explication: "C'est un quiproquo, qui relève du comique de situation : la confusion naît d'un enchaînement d'événements, pas des mots ni du caractère d'un personnage.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un personnage répète sans cesse la même expression déformée et provoque le rire par ses jeux de mots. De quel type de comique s'agit-il ? Justifie.",
      reponse: "Il s'agit du comique de mots (ou de langage), car le rire naît directement du langage utilisé : répétitions, déformations et jeux de mots.",
      explication: "Le comique de mots repose sur la façon dont les personnages s'expriment, contrairement au comique de gestes qui repose sur le jeu physique de l'acteur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de didascalie que l'on pourrait trouver dans une comédie, et explique à quoi elle sert.",
      reponse: "Exemple : « (Il trébuche et tombe sur son valet.) ». Cette didascalie indique aux acteurs le geste à réaliser et guide la mise en scène ; ici, elle prépare un effet de comique de gestes.",
      explication: "Les didascalies ne sont pas dites par les acteurs : elles servent uniquement de guide pour le jeu et la mise en scène.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un personnage avare refuse de dépenser le moindre centime tout au long de la pièce, au point de devenir ridicule. Quel procédé comique cela illustre-t-il ?",
      choix: ["Comique de situation", "Comique de caractère", "Comique de mots", "Aucun, ce n'est pas comique"],
      bonneReponse: 1,
      explication: "Un défaut humain (l'avarice) poussé à l'extrême jusqu'à devenir ridicule relève du comique de caractère : le personnage devient un « type ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en quoi la comédie de Molière ne se contente pas de faire rire. Utilise l'expression « castigat ridendo mores » dans ta réponse.",
      reponse: "La comédie de Molière divertit le public, mais elle a aussi une fonction sociale : en tournant en ridicule des défauts humains comme l'avarice ou la vanité, elle invite le spectateur à réfléchir sur ses propres travers. C'est ce que résume la devise latine « castigat ridendo mores », c'est-à-dire qu'elle corrige les mœurs par le rire.",
      explication: "Cette double fonction, divertir et critiquer, est au cœur de la comédie classique et explique pourquoi les pièces de Molière restent d'actualité.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un personnage dit à voix basse, face au public, « Quel idiot, il ne se doute de rien ! » pendant qu'un autre personnage, à côté de lui, continue de parler sans l'avoir entendu. Nomme ce procédé et explique son effet sur le spectateur.",
      reponse: "Il s'agit d'un aparté : le personnage s'adresse directement au spectateur sans que l'autre personnage présent sur scène ne l'entende. Cet effet renforce la complicité entre le personnage et le public, et met en valeur la double énonciation propre au théâtre, puisque le spectateur en sait alors plus que certains personnages.",
      explication: "L'aparté est un excellent exemple de double énonciation : la réplique s'adresse uniquement au spectateur, en dehors de la fiction jouée par les autres personnages.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Laquelle de ces œuvres est une comédie de Molière typique du programme de 5ème ?",
      choix: ["Les Fourberies de Scapin", "Le Petit Prince", "Les Fables de La Fontaine", "Le Rouge et le Noir"],
      bonneReponse: 0,
      explication: "Les Fourberies de Scapin, comme Le Médecin malgré lui, est une comédie de Molière étudiée au collège, riche en quiproquos et en personnages comiques.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on les indications de mise en scène écrites en italique par l'auteur ?",
      choix: ["Des répliques", "Des didascalies", "Des tirades", "Des actes"],
      bonneReponse: 1,
      explication: "Les didascalies guident le jeu des comédiens et la mise en scène.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un aparté ?",
      reponse: "Une réplique qu'un personnage adresse au seul spectateur, sans que les autres personnages sur scène ne l'entendent.",
      explication: "L'aparté crée une complicité directe entre le personnage et le public.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Deux personnages se comprennent mal, chacun pensant parler d'une chose différente : c'est...",
      choix: ["Un comique de gestes", "Un malentendu", "Une didascalie", "Un monologue"],
      bonneReponse: 1,
      explication: "Le malentendu, comme le quiproquo, relève du comique de situation.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite les quatre procédés du comique étudiés dans ce chapitre.",
      reponse: "Le comique de mots, le comique de gestes, le comique de situation et le comique de caractère.",
      explication: "Chaque procédé fait rire différemment : par le langage, par le corps, par les événements ou par les défauts d'un personnage.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Qui est Molière et quelle est la fonction sociale de la comédie selon la devise « castigat ridendo mores » ?",
      reponse: "Molière est un auteur et acteur français du XVIIe siècle, maître de la comédie (Le Médecin malgré lui, Les Fourberies de Scapin). La devise « castigat ridendo mores » signifie que la comédie corrige les mœurs par le rire : elle divertit tout en critiquant les défauts humains.",
      explication: "Cette question relie l'auteur emblématique du genre à la fonction sociale de la comédie.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le théâtre : la comédie",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un texte de théâtre est avant tout écrit pour être :",
          choix: ["Lu en silence", "Joué sur scène", "Appris par cœur uniquement", "Chanté"],
          bonneReponse: 1,
          explication: "Le théâtre est un genre destiné à la représentation devant un public.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la définition du mot « réplique ».",
          reponse: "Une réplique est chaque prise de parole d'un personnage dans un dialogue de théâtre.",
          explication: "Les répliques s'enchaînent pour former le dialogue entre les personnages.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans une scène, un personnage se cogne contre un meuble et fait une grimace exagérée : quel comique est utilisé ?",
          choix: ["Comique de mots", "Comique de gestes", "Comique de caractère", "Comique de situation"],
          bonneReponse: 1,
          explication: "Le jeu physique de l'acteur (chute, grimace) relève du comique de gestes.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre une tirade et un aparté.",
          reponse: "La tirade est une longue réplique qu'un personnage adresse à un ou plusieurs autres personnages, sans être interrompu. L'aparté, lui, est une réplique courte destinée au seul spectateur, que les autres personnages présents sur scène n'entendent pas.",
          explication: "Les deux sont de longueur différente et n'ont pas le même destinataire.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi dit-on que le théâtre repose sur une « double énonciation » ? Donne un exemple.",
          reponse: "Parce que chaque réplique s'adresse à la fois à un personnage sur scène et, à travers lui, au spectateur dans la salle. Par exemple, dans un aparté, un personnage confie un secret au public pendant qu'un autre personnage, sur scène, ne l'entend pas : le spectateur en sait alors plus que ce dernier.",
          explication: "La double énonciation est ce qui distingue fondamentalement le texte théâtral du récit.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Dans « Le Médecin malgré lui », Sganarelle, un simple bûcheron, se fait passer pour un grand médecin. Quel(s) procédé(s) comique(s) cette situation met-elle en jeu ? Justifie ta réponse.",
          reponse: "Cette situation relève à la fois du comique de situation, car un quiproquo pousse les autres personnages à croire que Sganarelle est vraiment médecin, et du comique de caractère, car Sganarelle joue sur son propre culot et sa vantardise ridicule pour maintenir la supercherie.",
          explication: "De nombreuses scènes de Molière combinent plusieurs procédés comiques à la fois pour amplifier l'effet de rire.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le théâtre : la comédie",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une pièce de théâtre est découpée en grandes parties appelées :",
          choix: ["Chapitres", "Actes", "Paragraphes", "Strophes"],
          bonneReponse: 1,
          explication: "Les actes sont eux-mêmes divisés en scènes.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "À quoi reconnaît-on une didascalie dans un texte de théâtre ?",
          reponse: "Elle est généralement écrite en italique et donne des indications de mise en scène (décor, gestes, ton), sans être prononcée par les personnages.",
          explication: "Les didascalies s'adressent aux comédiens et au metteur en scène, pas au public.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un valet prend son maître pour un voleur dans l'obscurité et le frappe par erreur : quel procédé comique cela illustre-t-il ?",
          choix: ["Comique de mots", "Comique de caractère", "Comique de situation (quiproquo)", "Aucune de ces réponses"],
          bonneReponse: 2,
          explication: "Confondre une personne avec une autre est la définition même du quiproquo, une forme de comique de situation.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne la définition du comique de caractère et cite deux exemples de « types » de personnages ridicules.",
          reponse: "Le comique de caractère repose sur un défaut humain poussé à l'extrême, qui rend le personnage ridicule. Exemples de types : l'avare (obsédé par l'argent) et le prétentieux (imbu de lui-même).",
          explication: "On peut aussi citer le jaloux ou le naïf : ces personnages incarnent un défaut plutôt qu'une personnalité complexe.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quel est le rôle de la mise en scène par rapport au texte écrit par l'auteur ?",
          reponse: "La mise en scène donne vie au texte écrit : elle choisit le décor, les costumes, les déplacements et le jeu des acteurs, souvent en s'appuyant sur les didascalies laissées par l'auteur.",
          explication: "Une même pièce peut donner lieu à des mises en scène très différentes selon les choix du metteur en scène.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Qui était Molière et pourquoi ses comédies sont-elles encore étudiées aujourd'hui ? Réponds en évoquant la fonction sociale de la comédie.",
          reponse: "Molière (Jean-Baptiste Poquelin, 1622-1673) était un auteur et acteur français, célèbre pour des comédies comme Le Médecin malgré lui ou Les Fourberies de Scapin. Ses pièces sont encore étudiées car elles combinent tous les procédés comiques pour faire rire tout en critiquant des défauts humains universels (avarice, vanité, hypocrisie), selon la devise « castigat ridendo mores » : la comédie corrige les mœurs par le rire.",
          explication: "Cette question de synthèse relie l'auteur, les procédés comiques et la fonction sociale de la comédie étudiés dans le chapitre.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le théâtre est un texte écrit pour être joué : il se compose de dialogues, de didascalies et de répliques.",
    "Une pièce se découpe en actes puis en scènes ; on distingue la tirade, le monologue et l'aparté.",
    "La double énonciation : chaque réplique s'adresse à la fois à un personnage sur scène et au spectateur dans la salle.",
    "Quatre procédés comiques : comique de mots, comique de gestes, comique de situation (quiproquo, malentendu), comique de caractère.",
    "Molière (1622-1673) est l'auteur incontournable de la comédie française, avec Le Médecin malgré lui et Les Fourberies de Scapin.",
    "La comédie ne fait pas que divertir : elle critique les défauts humains, « castigat ridendo mores », elle corrige les mœurs par le rire.",
  ],
}
];

export default chapitres;
