import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
