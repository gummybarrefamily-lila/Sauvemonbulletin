import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
