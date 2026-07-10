import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "hsk4-culture",
  titre: "HSK 4 — Culture chinoise et actualité",
  matiere: "chinois",
  niveau: "3eme",
  description:
    "Parler des grandes fêtes traditionnelles chinoises (春节, 中秋节), exprimer et nuancer une opinion (我觉得, 我认为, 对我来说) et argumenter avec les structures 虽然...但是..., 因为...所以... et 不但...而且..., avec le vocabulaire HSK 4.",
  objectifs: [
    "Présenter les fêtes traditionnelles : 春节 (Nouvel An chinois) et 中秋节 (fête de la mi-automne)",
    "Exprimer une opinion : 我觉得, 我认为, 对我来说, 我同意",
    "Argumenter avec 因为...所以... (cause) et 虽然...但是... (concession)",
    "Enrichir une idée avec 不但...而且...",
    "Lire et comprendre un court texte culturel authentique",
  ],
  slides: [
    {
      titre: "春节, le Nouvel An chinois",
      illustration: "🧧",
      visuel: "春节 (Chūnjié)",
      contenu: [
        "春节 (Chūnjié) : la fête du Printemps, le Nouvel An chinois",
        "过年 (guònián) : passer le Nouvel An",
        "全家人在一起吃饭 : toute la famille mange ensemble",
        "新年快乐！(xīnnián kuàilè!) : bonne année !",
      ],
      voixOff:
        "Chūnjié, la fête du Printemps, est la fête la plus importante de l'année en Chine : c'est le Nouvel An du calendrier lunaire, entre fin janvier et mi-février. Les familles se réunissent pour un grand repas, on décore les portes en rouge et les enfants reçoivent des enveloppes rouges. On se souhaite xīnnián kuàilè, bonne année !",
    },
    {
      titre: "Les traditions du 春节",
      illustration: "🥟",
      visuel: "饺子 (jiǎozi) · 热闹 (rènao)",
      contenu: [
        "饺子 (jiǎozi) : les raviolis, plat du réveillon dans le Nord",
        "热闹 (rènao) : animé, plein de vie et de bruit joyeux",
        "礼物 (lǐwù) : cadeau ; 客人 (kèrén) : invité",
        "节日 (jiérì) : fête, jour de fête",
      ],
      voixOff:
        "Le soir du réveillon, les familles du nord de la Chine préparent ensemble des jiǎozi, des raviolis, dont la forme rappelle les lingots d'or de l'ancienne Chine. L'adjectif rènao, difficile à traduire, décrit cette ambiance animée, bruyante et joyeuse typique des fêtes chinoises. C'est un mot très positif : une fête réussie est forcément rènao !",
    },
    {
      titre: "中秋节, la fête de la mi-automne",
      illustration: "🌕",
      visuel: "中秋节 (Zhōngqiūjié)",
      contenu: [
        "中秋节 (Zhōngqiūjié) : la fête de la mi-automne",
        "月亮 (yuèliang) : la lune — la plus ronde de l'année ce soir-là",
        "月饼 (yuèbǐng) : les gâteaux de lune (mot culturel à connaître)",
        "La lune ronde symbolise la famille réunie",
      ],
      voixOff:
        "Zhōngqiūjié, la fête de la mi-automne, a lieu au huitième mois du calendrier lunaire, quand la lune, yuèliang, est la plus ronde de l'année. Comme la lune ronde symbolise la famille au complet, on se réunit pour l'admirer et déguster des yuèbǐng, les fameux gâteaux de lune. C'est un peu la deuxième fête familiale la plus importante après le Nouvel An.",
    },
    {
      titre: "Exprimer une opinion",
      illustration: "💭",
      visuel: "我觉得... · 我认为...",
      contenu: [
        "我觉得 (wǒ juéde) : je trouve que, j'ai l'impression que",
        "我认为 (wǒ rènwéi) : je pense que, j'estime que (plus formel)",
        "对我来说 (duì wǒ lái shuō) : pour moi, à mes yeux",
        "我同意 (wǒ tóngyì) : je suis d'accord ; 意见 (yìjiàn) : avis, opinion",
      ],
      voixOff:
        "Pour donner ton avis, trois expressions essentielles. Wǒ juéde, « je trouve que », est la plus courante et la plus orale. Wǒ rènwéi, « j'estime que », est plus formelle et plus réfléchie : parfaite à l'écrit. Enfin, duì wǒ lái shuō, « pour moi », se place en début de phrase pour annoncer un point de vue personnel. Et pour approuver quelqu'un, on dit wǒ tóngyì, je suis d'accord.",
    },
    {
      titre: "La cause : 因为...所以...",
      illustration: "➡️",
      visuel: "因为 A，所以 B",
      contenu: [
        "因为 (yīnwèi) : parce que ; 所以 (suǒyǐ) : donc",
        "因为是春节，所以大家都回家。: comme c'est le Nouvel An, tout le monde rentre chez soi",
        "En chinois, on utilise souvent LES DEUX mots ensemble",
        "B est la conséquence de A",
      ],
      voixOff:
        "Pour exprimer la cause et la conséquence, le chinois relie souvent les deux moitiés de la phrase par un couple de mots : yīnwèi, parce que, introduit la cause, et suǒyǐ, donc, introduit la conséquence. Contrairement au français, on emploie volontiers les deux ensemble : yīnwèi shì Chūnjié, suǒyǐ dàjiā dōu huí jiā — parce que c'est le Nouvel An, alors tout le monde rentre à la maison.",
    },
    {
      titre: "La concession : 虽然...但是...",
      illustration: "⚖️",
      visuel: "虽然 A，但是 B",
      contenu: [
        "虽然 (suīrán) : bien que ; 但是 (dànshì) : mais",
        "虽然月饼很甜，但是我很喜欢吃。: bien que les gâteaux de lune soient très sucrés, j'adore en manger",
        "Les deux mots s'utilisent ensemble, dans cet ordre",
        "Idéal pour nuancer une opinion",
      ],
      voixOff:
        "Pour nuancer, on utilise le couple suīrán... dànshì... : bien que... mais... Là encore, le chinois garde les deux mots dans la même phrase, ce qui serait incorrect en français. Suīrán yuèbǐng hěn tián, dànshì wǒ hěn xǐhuan chī : bien que les gâteaux de lune soient très sucrés, mais j'adore en manger. Cette structure est indispensable pour donner un avis nuancé.",
    },
    {
      titre: "L'addition : 不但...而且...",
      illustration: "➕",
      visuel: "不但 A，而且 B",
      contenu: [
        "不但 (búdàn) : non seulement ; 而且 (érqiě) : mais en plus",
        "春节不但很热闹，而且很有意思。: le Nouvel An est non seulement très animé, mais en plus très intéressant",
        "B renforce A : on empile deux qualités (ou deux défauts)",
        "Parfait pour enrichir une argumentation",
      ],
      voixOff:
        "Troisième structure d'argumentation : búdàn... érqiě..., non seulement... mais en plus... Elle permet d'empiler deux arguments qui vont dans le même sens. Chūnjié búdàn hěn rènao, érqiě hěn yǒu yìsi : le Nouvel An chinois est non seulement très animé, mais en plus très intéressant. Avec ces trois structures, tu peux construire un vrai paragraphe argumenté.",
    },
    {
      titre: "Décrire et argumenter : vocabulaire HSK 4",
      illustration: "🗣️",
      visuel: "重要 · 特别 · 比如",
      contenu: [
        "重要 (zhòngyào) : important ; 特别 (tèbié) : particulièrement, spécial",
        "有名 (yǒumíng) : célèbre ; 有意思 (yǒu yìsi) : intéressant",
        "比如 (bǐrú) : par exemple ; 完全 (wánquán) : complètement",
        "文化 (wénhuà) : culture ; 习惯 (xíguàn) : habitude, coutume",
      ],
      voixOff:
        "Pour décrire et argumenter, enrichis ton vocabulaire : zhòngyào, important, tèbié, particulièrement, yǒumíng, célèbre, et yǒu yìsi, intéressant. Pour illustrer ton propos, bǐrú introduit un exemple, comme « par exemple » en français. Enfin, wénhuà signifie la culture et xíguàn l'habitude ou la coutume : deux mots clés pour parler de la civilisation chinoise.",
    },
    {
      titre: "Lecture : un texte culturel",
      illustration: "📖",
      visuel: "春节是中国最重要的节日。",
      contenu: [
        "春节是中国最重要的节日。(Le Nouvel An est la fête la plus importante de Chine.)",
        "因为大家都回家过年，所以火车站里人很多。",
        "虽然大家都很累，但是全家人在一起，非常快乐。",
        "过年的时候，人们不但吃饺子，而且互相送礼物。",
      ],
      voixOff:
        "Lisons ensemble ce court texte. Le Nouvel An chinois est la fête la plus importante de Chine. Parce que tout le monde rentre à la maison pour passer le Nouvel An, il y a énormément de monde dans les gares. Bien que tout le monde soit très fatigué, toute la famille est réunie et très heureuse. Pendant le Nouvel An, les gens ne se contentent pas de manger des raviolis : en plus, ils s'offrent des cadeaux. Repère bien les trois structures du chapitre dans ce texte !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Deux grandes fêtes : 春节 (famille, 饺子, ambiance 热闹) et 中秋节 (月亮, 月饼)",
        "Opinion : 我觉得 (oral), 我认为 (formel), 对我来说 (pour moi)",
        "Structures en couple : 因为...所以..., 虽然...但是..., 不但...而且...",
        "Vocabulaire pour argumenter : 重要, 特别, 有名, 比如, 文化",
      ],
      voixOff:
        "Résumons. Tu sais présenter les deux grandes fêtes chinoises : Chūnjié, le Nouvel An avec ses réunions de famille et ses raviolis, et Zhōngqiūjié, la fête de la mi-automne avec sa pleine lune et ses gâteaux de lune. Pour donner ton avis, tu disposes de wǒ juéde, wǒ rènwéi et duì wǒ lái shuō. Et pour argumenter, trois structures en couple : yīnwèi suǒyǐ pour la cause, suīrán dànshì pour la concession, búdàn érqiě pour l'addition. Tu es prêt à débattre en chinois !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre associe culture et argumentation : présenter les fêtes traditionnelles chinoises (春节, 中秋节), donner son opinion (我觉得, 我认为, 对我来说) et construire un raisonnement avec les trois grandes structures en couple du chinois.",
    sections: [
      {
        titre: "春节 — le Nouvel An chinois",
        points: [
          "春节 (Chūnjié) : fête du Printemps, Nouvel An lunaire (janvier-février)",
          "过年 (guònián) : passer le Nouvel An ; 新年快乐 (xīnnián kuàilè) : bonne année !",
          "Traditions : repas en famille, 饺子 (jiǎozi, raviolis), décorations rouges, 礼物 (lǐwù, cadeaux)",
          "热闹 (rènao) : animé, joyeusement bruyant — l'ambiance idéale d'une fête",
        ],
      },
      {
        titre: "中秋节 — la fête de la mi-automne",
        points: [
          "中秋节 (Zhōngqiūjié) : 8e mois lunaire, nuit de pleine lune",
          "月亮 (yuèliang) : la lune ; 月饼 (yuèbǐng) : gâteaux de lune (mot culturel)",
          "La lune ronde symbolise la famille réunie",
        ],
      },
      {
        titre: "Exprimer une opinion",
        points: [
          "我觉得... (wǒ juéde) : je trouve que — courant, oral",
          "我认为... (wǒ rènwéi) : j'estime que — formel, écrit",
          "对我来说，... (duì wǒ lái shuō) : pour moi, en début de phrase",
          "我(不)同意 (wǒ (bù) tóngyì) : je (ne) suis (pas) d'accord ; 意见 (yìjiàn) : avis",
        ],
      },
      {
        titre: "Les trois structures en couple",
        points: [
          "因为 A，所以 B (yīnwèi... suǒyǐ...) : parce que A, donc B — cause",
          "虽然 A，但是 B (suīrán... dànshì...) : bien que A, (mais) B — concession",
          "不但 A，而且 B (búdàn... érqiě...) : non seulement A, mais en plus B — addition",
          "Particularité du chinois : les DEUX mots du couple restent dans la phrase",
        ],
      },
      {
        titre: "Vocabulaire HSK 4 pour décrire et argumenter",
        points: [
          "重要 (zhòngyào) : important ; 特别 (tèbié) : particulièrement",
          "有名 (yǒumíng) : célèbre ; 有意思 (yǒu yìsi) : intéressant",
          "比如 (bǐrú) : par exemple ; 完全 (wánquán) : complètement",
          "文化 (wénhuà) : culture ; 习惯 (xíguàn) : habitude ; 了解 (liǎojiě) : bien connaître",
        ],
      },
    ],
    audio:
      "Fiche de révision : culture chinoise et argumentation, niveau HSK 4. La Chine compte deux grandes fêtes familiales. Chūnjié, la fête du Printemps, est le Nouvel An lunaire : toute la famille se réunit, on mange des jiǎozi, des raviolis, on s'offre des cadeaux et l'ambiance est rènao, joyeusement animée. Zhōngqiūjié, la fête de la mi-automne, célèbre la pleine lune : la lune ronde symbolise la famille réunie et l'on partage des gâteaux de lune. Pour donner ton opinion, utilise wǒ juéde à l'oral, wǒ rènwéi dans un registre plus formel, ou duì wǒ lái shuō en début de phrase. Pour argumenter, le chinois emploie des structures en couple dont les deux éléments restent dans la phrase : yīnwèi suǒyǐ pour la cause, suīrán dànshì pour la concession, búdàn érqiě pour ajouter un argument. Enrichis enfin tes descriptions avec zhòngyào, important, tèbié, particulièrement, yǒumíng, célèbre, et bǐrú pour donner un exemple.",
  },
  memoCards: [
    { recto: "春节 (Chūnjié)", verso: "La fête du Printemps, le Nouvel An chinois. Ex : 春节是中国最重要的节日。(C'est la fête la plus importante de Chine.)" },
    { recto: "中秋节 (Zhōngqiūjié)", verso: "La fête de la mi-automne : pleine lune (月亮), gâteaux de lune (月饼), famille réunie." },
    { recto: "热闹 (rènao)", verso: "Animé, joyeusement bruyant. Ex : 春节的时候，街上很热闹。(Au Nouvel An, les rues sont très animées.)" },
    { recto: "我觉得... (wǒ juéde)", verso: "Je trouve que... (courant, oral). Ex : 我觉得中国文化很有意思。" },
    { recto: "我认为... (wǒ rènwéi)", verso: "Je pense que, j'estime que... (formel, écrit). Ex : 我认为学习中文很重要。" },
    { recto: "对我来说 (duì wǒ lái shuō)", verso: "Pour moi, à mes yeux — en début de phrase. Ex : 对我来说，家人最重要。" },
    { recto: "因为...所以... (yīnwèi... suǒyǐ...)", verso: "Parce que... donc... (cause). Ex : 因为下雨，所以我们不出去。Les deux mots restent dans la phrase." },
    { recto: "虽然...但是... (suīrán... dànshì...)", verso: "Bien que... (mais)... (concession). Ex : 虽然很难，但是很有意思。" },
    { recto: "不但...而且... (búdàn... érqiě...)", verso: "Non seulement... mais en plus... (addition). Ex : 他不但会说英语，而且会说中文。" },
    { recto: "重要 (zhòngyào) · 特别 (tèbié) · 比如 (bǐrú)", verso: "Important · particulièrement · par exemple. Ex : 中国有很多有名的节日，比如春节。" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle fête est le Nouvel An chinois ?",
      choix: ["中秋节", "春节", "生日", "周末"],
      bonneReponse: 1,
      explication: "春节 (Chūnjié), la fête du Printemps, est le Nouvel An lunaire. 中秋节 est la fête de la mi-automne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 我觉得 (wǒ juéde) ?",
      choix: ["Je sais", "Je trouve que / je pense que", "Je veux", "Je peux"],
      bonneReponse: 1,
      explication: "我觉得 introduit une opinion personnelle : « je trouve que, j'ai l'impression que ».",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 新年快乐！",
      reponse: "Bonne année !",
      explication: "新年 (xīnnián) = nouvelle année ; 快乐 (kuàilè) = joyeux. C'est le vœu du 春节.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que mange-t-on traditionnellement pour la fête de la mi-automne ?",
      choix: ["饺子 (raviolis)", "月饼 (gâteaux de lune)", "面条 (nouilles)", "米饭 (riz)"],
      bonneReponse: 1,
      explication: "Au 中秋节, on partage des 月饼 (yuèbǐng), les gâteaux de lune. Les 饺子 sont associés au 春节.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : ___是春节，___大家都回家。(Comme c'est le Nouvel An, tout le monde rentre chez soi.)",
      choix: ["虽然 / 但是", "不但 / 而且", "因为 / 所以", "对 / 来说"],
      bonneReponse: 2,
      explication: "因为...所以... exprime la cause et la conséquence. En chinois, les deux mots s'emploient ensemble.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en français : 虽然月饼很甜，但是我很喜欢吃。",
      reponse: "Bien que les gâteaux de lune soient très sucrés, j'aime beaucoup en manger.",
      explication: "虽然...但是... = bien que... (mais)... ; 甜 (tián) = sucré. En français, on ne traduit pas le « mais ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Remets les mots dans l'ordre : 很有意思 / 我 / 中国文化 / 觉得",
      reponse: "我觉得中国文化很有意思。(Wǒ juéde Zhōngguó wénhuà hěn yǒu yìsi.) — Je trouve la culture chinoise très intéressante.",
      explication: "我觉得 + phrase complète (sujet 中国文化 + 很有意思).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel mot signifie « par exemple » ?",
      choix: ["特别", "比如", "完全", "重要"],
      bonneReponse: 1,
      explication: "比如 (bǐrú) introduit un exemple. 特别 = particulièrement, 完全 = complètement, 重要 = important.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en chinois avec 不但...而且... : « Le Nouvel An chinois est non seulement très animé, mais en plus très intéressant. »",
      reponse: "春节不但很热闹，而且很有意思。(Chūnjié búdàn hěn rènao, érqiě hěn yǒu yìsi.)",
      explication: "不但 précède le premier argument, 而且 introduit le second qui le renforce.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Donne ton avis en chinois avec 对我来说 : « Pour moi, la famille est la chose la plus importante. »",
      reponse: "对我来说，家人最重要。(Duì wǒ lái shuō, jiārén zuì zhòngyào.)",
      explication: "对我来说 se place en début de phrase ; 最 (zuì) = le plus ; 重要 = important.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est INCORRECTE ?",
      choix: [
        "因为今天是中秋节，所以我们一起看月亮。",
        "虽然他很累，但是他很高兴。",
        "不但他会说中文，所以他会说英语。",
        "我认为春节很重要。",
      ],
      bonneReponse: 2,
      explication: "不但 doit être suivi de 而且, jamais de 所以. La phrase correcte serait : 他不但会说中文，而且会说英语。",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Lis puis réponds en français : 中秋节的时候，因为月亮最圆，所以全家人在一起看月亮，吃月饼。— Que fait la famille ce soir-là, et pourquoi ?",
      reponse:
        "Le soir de la fête de la mi-automne, comme la lune est la plus ronde (de l'année), toute la famille se réunit pour regarder la lune et manger des gâteaux de lune.",
      explication: "圆 (yuán) = rond ; 全家人 = toute la famille ; la structure 因为...所以... relie la cause (lune la plus ronde) et la conséquence.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La fête de la mi-automne se dit :",
      choix: ["春节", "中秋节", "新年", "节日"],
      bonneReponse: 1,
      explication: "中秋节 (Zhōngqiūjié) : 中 (milieu) + 秋 (automne) + 节 (fête).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux façons de dire « je pense que / je trouve que » en chinois.",
      reponse: "我觉得 (wǒ juéde) et 我认为 (wǒ rènwéi).",
      explication: "我觉得 est plus oral, 我认为 plus formel. On peut ajouter 对我来说 (« pour moi »).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Bien que... mais... » se dit :",
      choix: ["因为...所以...", "不但...而且...", "虽然...但是...", "从...到..."],
      bonneReponse: 2,
      explication: "虽然...但是... exprime la concession ; les deux mots restent ensemble dans la phrase.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète et traduis : 因为是春节，______大家都回家。",
      reponse: "所以 — « Parce que c'est le Nouvel An, (donc) tout le monde rentre à la maison. »",
      explication: "因为 appelle 所以 dans la seconde partie de la phrase.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que signifie 热闹 (rènao) et pourquoi est-ce un mot positif en Chine ?",
      reponse:
        "热闹 signifie « animé, joyeusement bruyant ». C'est un compliment : une fête réussie, pleine de monde et de vie, est forcément 热闹.",
      explication: "Contrairement au français où « bruyant » est négatif, 热闹 décrit une ambiance chaleureuse recherchée.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Culture chinoise et actualité",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que mange-t-on traditionnellement au réveillon du 春节 dans le nord de la Chine ?",
          choix: ["月饼", "饺子", "面包", "蛋糕"],
          bonneReponse: 1,
          explication: "Les 饺子 (jiǎozi, raviolis) sont le plat du réveillon ; leur forme rappelle les lingots d'or.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en chinois : « Je trouve que le chinois est très intéressant. »",
          reponse: "我觉得中文很有意思。(Wǒ juéde Zhōngwén hěn yǒu yìsi.)",
          explication: "我觉得 + sujet + 很有意思.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : 他___会说中文，___会说英语。(Il parle non seulement chinois, mais en plus anglais.)",
          choix: ["因为 / 所以", "虽然 / 但是", "不但 / 而且", "从 / 到"],
          bonneReponse: 2,
          explication: "不但...而且... additionne deux arguments qui vont dans le même sens.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : 因为大家都回家过年，所以火车站里人很多。",
          reponse:
            "Parce que tout le monde rentre à la maison pour passer le Nouvel An, il y a beaucoup de monde dans les gares.",
          explication: "过年 = passer le Nouvel An ; 人很多 = il y a beaucoup de monde.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique en deux phrases (en français) ce que symbolise la lune lors du 中秋节.",
          reponse:
            "Le soir du 中秋节, la lune est la plus ronde de l'année. Sa forme ronde et complète symbolise la famille réunie au complet, c'est pourquoi on la contemple ensemble en mangeant des gâteaux de lune.",
          explication: "En chinois, « rond » (圆) évoque la réunion et la complétude de la famille.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige en chinois une opinion nuancée avec 虽然...但是... : « Bien que les caractères chinois soient difficiles, je trouve que le chinois est très intéressant. »",
          reponse:
            "虽然汉字很难，但是我觉得中文很有意思。(Suīrán Hànzì hěn nán, dànshì wǒ juéde Zhōngwén hěn yǒu yìsi.)",
          explication: "虽然 introduit la concession, 但是 la reste de l'opinion ; 汉字 = caractères chinois, 难 = difficile.",
        },
      ],
    },
    {
      titre: "Examen 2 — Culture chinoise et actualité",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 文化 (wénhuà) ?",
          choix: ["La fête", "La culture", "L'habitude", "L'opinion"],
          bonneReponse: 1,
          explication: "文化 = culture. 节日 = fête, 习惯 = habitude, 意见 = opinion.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le pinyin avec les tons de 春节 et sa traduction.",
          reponse: "Chūnjié — la fête du Printemps, le Nouvel An chinois.",
          explication: "春 chūn (1er ton) + 节 jié (2e ton).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle expression est la plus FORMELLE pour dire « je pense que » ?",
          choix: ["我觉得", "我认为", "我同意", "我喜欢"],
          bonneReponse: 1,
          explication: "我认为 (wǒ rènwéi) est plus formel et réfléchi ; 我觉得 est plus oral. 我同意 = je suis d'accord.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Remets dans l'ordre : 而且 / 很热闹 / 不但 / 春节 / 很有意思",
          reponse: "春节不但很热闹，而且很有意思。(Chūnjié búdàn hěn rènao, érqiě hěn yǒu yìsi.)",
          explication: "Sujet + 不但 + argument 1 + 而且 + argument 2.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Lis ce texte puis réponds en français : 春节是中国最重要的节日。过年的时候，人们不但吃饺子，而且互相送礼物。— (1) Quelle est l'idée principale ? (2) Citez les deux traditions mentionnées.",
          reponse:
            "(1) Le Nouvel An chinois (春节) est la fête la plus importante de Chine. (2) Pendant le Nouvel An, les gens mangent des raviolis (饺子) et s'offrent mutuellement des cadeaux (互相送礼物).",
          explication: "最重要 = le plus important ; 互相 = mutuellement ; 送礼物 = offrir des cadeaux.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige trois phrases en chinois pour donner ton avis sur une fête chinoise, en utilisant 对我来说, une structure en couple (因为...所以... ou 虽然...但是...) et le mot 比如.",
          reponse:
            "Exemple de corrigé : 对我来说，春节最有意思。因为全家人在一起，所以大家都很快乐。中国有很多节日，比如春节和中秋节。(Duì wǒ lái shuō, Chūnjié zuì yǒu yìsi. Yīnwèi quánjiā rén zài yìqǐ, suǒyǐ dàjiā dōu hěn kuàilè. Zhōngguó yǒu hěn duō jiérì, bǐrú Chūnjié hé Zhōngqiūjié.)",
          explication:
            "On attend : 对我来说 en tête de phrase, une structure en couple complète (les deux mots présents) et 比如 pour introduire un exemple.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Deux grandes fêtes familiales : 春节 (Nouvel An lunaire : famille, 饺子, 礼物, ambiance 热闹) et 中秋节 (pleine lune 月亮, gâteaux 月饼, famille réunie).",
    "Trois façons de donner son avis : 我觉得 (oral), 我认为 (formel), 对我来说 en début de phrase ; 我同意 pour approuver.",
    "Trois structures en couple : 因为...所以... (cause), 虽然...但是... (concession), 不但...而且... (addition).",
    "Erreur classique : supprimer le second mot du couple ou le remplacer par un autre — en chinois, on garde les DEUX (虽然...但是... ensemble), et 不但 appelle toujours 而且, jamais 所以.",
    "Vocabulaire d'argumentation à réutiliser partout : 重要, 特别, 有名, 有意思, 比如, 文化, 习惯.",
    "Dans un texte, repère d'abord les couples 因为/所以, 虽然/但是, 不但/而且 : ils donnent la structure logique de la phrase.",
  ],
};

export default chapitre;
