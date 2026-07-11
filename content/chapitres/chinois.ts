import type { Chapitre } from "../types";

const chapitres: Chapitre[] = [
{
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
},
{
  slug: "hsk4-grammaire-avancee",
  titre: "HSK 4 — 把, 被 et structures avancées",
  matiere: "chinois",
  niveau: "3eme",
  langueVoix: "zh-CN",
  description:
    "Maîtriser trois structures avancées du chinois : la construction 把 pour insister sur ce qui arrive à un objet précis (sujet + 把 + objet + verbe + résultat), la voix passive avec 被 (sujet subissant + 被 + agent + verbe + résultat), et le complément potentiel (verbe + 得/不 + résultat) pour exprimer la capacité à faire quelque chose, avec le vocabulaire HSK 4.",
  objectifs: [
    "Comprendre pourquoi et quand utiliser la structure 把",
    "Construire une phrase avec 把 : sujet + 把 + objet + verbe + élément obligatoire",
    "Former la voix passive avec 被 : sujet + 被 + (agent) + verbe + élément",
    "Distinguer clairement les emplois de 把 et de 被",
    "Utiliser le complément potentiel (verbe + 得/不 + résultat) pour exprimer la capacité",
  ],
  slides: [
    {
      titre: "Pourquoi la structure 把 ?",
      illustration: "📦",
      visuel: "我把书看完了。",
      contenu: [
        "把 (bǎ) : structure qui met l'objet en avant, avant le verbe",
        "On l'utilise pour insister sur ce qui arrive à un objet PRÉCIS et CONNU",
        "我看完了这本书。 ≈ 我把这本书看完了。 (mais 把 insiste davantage sur le résultat)",
        "把 est surtout utilisé quand l'objet subit un changement, un déplacement ou un résultat clair",
      ],
      voixOff:
        "En chinois, l'ordre normal est sujet-verbe-objet, mais quand on veut insister sur ce qui arrive précisément à un objet connu, on utilise bǎ, qui déplace l'objet avant le verbe. Wǒ bǎ zhè běn shū kàn wán le : j'ai fini de lire ce livre. Ce n'est pas une simple question de style : bǎ signale que l'objet subit une action complète, un changement d'état ou un déplacement précis.",
    },
    {
      titre: "La structure 把 : le squelette",
      illustration: "🧩",
      visuel: "Sujet + 把 + Objet + Verbe + Élément obligatoire",
      contenu: [
        "Sujet + 把 + objet + verbe + élément (jamais le verbe seul !)",
        "L'objet doit être défini, connu du locuteur et de l'interlocuteur",
        "请把门关上。 : Ferme la porte, s'il te plaît.",
        "他把钱花光了。 : Il a dépensé tout son argent.",
      ],
      voixOff:
        "La structure bǎ suit toujours le même squelette : sujet, bǎ, objet, verbe, puis un élément obligatoire après le verbe — jamais le verbe seul. Qǐng bǎ mén guānshàng, ferme la porte s'il te plaît : guānshàng, « fermer complètement », est le complément qui suit le verbe. Tā bǎ qián huāguāng le, il a dépensé tout son argent : guāng signifie « épuisé, à zéro » et confirme que l'objet, l'argent, est totalement transformé.",
    },
    {
      titre: "Les éléments après le verbe dans 把",
      illustration: "🎯",
      visuel: "把 + objet + verbe + 了 / 好 / 完 / 在...",
      contenu: [
        "verbe + 了 : action accomplie — 我把作业做完了。(J'ai fini mes devoirs.)",
        "verbe + 好 : action menée à bien — 她把饭做好了。(Elle a fini de préparer le repas.)",
        "verbe + 在/到 + lieu : déplacement précis — 请把书放在桌子上。(Pose le livre sur la table.)",
        "verbe + 给 + personne : transfert — 我把手机给了他。(Je lui ai donné mon téléphone.)",
      ],
      voixOff:
        "Plusieurs types d'éléments peuvent compléter le verbe dans une phrase bǎ. Wǒ bǎ zuòyè zuò wán le, j'ai fini mes devoirs, utilise wán, terminé. Qǐng bǎ shū fàng zài zhuōzi shàng, pose le livre sur la table, précise le lieu exact avec zài. Wǒ bǎ shǒujī gěi le tā, je lui ai donné mon téléphone, utilise gěi pour indiquer le destinataire. Dans tous les cas, cet élément est indispensable : on ne peut pas s'arrêter au verbe seul.",
    },
    {
      titre: "把 à l'impératif",
      illustration: "❗",
      visuel: "把门关上！ 把书拿出来！",
      contenu: [
        "把门关上！ : Ferme la porte !",
        "把书拿出来！ : Sors ton livre !",
        "把手机放下！ : Pose ton téléphone !",
        "Très fréquent dans les ordres et instructions précises",
      ],
      voixOff:
        "La structure bǎ est extrêmement fréquente dans les ordres et instructions, car elle désigne précisément l'objet et l'action qu'on lui demande de subir. Bǎ mén guānshàng, ferme la porte ! Bǎ shū ná chūlái, sors ton livre ! Bǎ shǒujī fàngxià, pose ton téléphone ! Ce sont des phrases que tu entendras très souvent en classe ou à la maison.",
    },
    {
      titre: "La voix passive : 被",
      illustration: "🔄",
      visuel: "杯子被他打破了。",
      contenu: [
        "被 (bèi) : marque la voix passive — le sujet SUBIT l'action",
        "Sujet (celui qui subit) + 被 + (agent) + verbe + élément",
        "杯子被他打破了。 : Le verre a été cassé par lui.",
        "L'agent (celui qui fait l'action) peut être omis si inconnu ou évident",
      ],
      voixOff:
        "La particule bèi forme la voix passive : le sujet de la phrase n'est plus celui qui agit, mais celui qui subit l'action. Bēizi bèi tā dǎpò le, le verre a été cassé par lui. On peut omettre l'agent quand il est inconnu ou sans importance : bēizi bèi dǎpò le, le verre a été cassé. Comme pour bǎ, le verbe est presque toujours suivi d'un élément qui indique le résultat.",
    },
    {
      titre: "被 : d'autres exemples",
      illustration: "😲",
      visuel: "我的手机被弟弟拿走了。",
      contenu: [
        "我的手机被弟弟拿走了。 : Mon téléphone a été pris par mon petit frère.",
        "这本小说被翻译成了法语。 : Ce roman a été traduit en français.",
        "他被老师批评了。 : Il a été grondé par le professeur.",
        "拿走 (ná zǒu) : emporter ; 翻译成 (fānyì chéng) : traduire en...",
      ],
      voixOff:
        "Voici d'autres exemples de la structure bèi. Wǒ de shǒujī bèi dìdi ná zǒu le, mon téléphone a été pris par mon petit frère. Zhè běn xiǎoshuō bèi fānyì chéng le Fǎyǔ, ce roman a été traduit en français. Tā bèi lǎoshī pīpíng le, il a été grondé par le professeur. Ces phrases décrivent souvent un événement plutôt malheureux ou inattendu du point de vue du sujet.",
    },
    {
      titre: "把 vs 被 : ne pas confondre",
      illustration: "🆚",
      visuel: "把 = j'agis sur l'objet · 被 = je subis l'action",
      contenu: [
        "把 : le sujet AGIT sur un objet précis — 我把书看完了。(J'ai fini le livre.)",
        "被 : le sujet SUBIT une action venue d'un agent — 书被我看完了。(Le livre a été fini par moi.)",
        "Les deux phrases peuvent décrire la même réalité, avec un point de vue différent",
        "Astuce : avec 把, le sujet est l'AGENT ; avec 被, le sujet est la VICTIME/le PATIENT",
      ],
      voixOff:
        "Ne confonds pas ces deux structures qui semblent proches : avec bǎ, le sujet de la phrase est celui qui agit sur l'objet, wǒ bǎ shū kàn wán le, j'ai fini le livre. Avec bèi, le sujet est celui qui subit l'action, shū bèi wǒ kàn wán le, le livre a été fini par moi. Le sens général peut être proche, mais le point de vue change complètement : agent avec bǎ, patient avec bèi.",
    },
    {
      titre: "Le complément potentiel : 得 / 不 + résultat",
      illustration: "🔑",
      visuel: "看得懂 / 看不懂",
      contenu: [
        "Verbe + 得 + résultat : capacité à réussir l'action",
        "Verbe + 不 + résultat : incapacité, impossibilité",
        "这个字我看得懂。 : Ce caractère, j'arrive à le comprendre (en le lisant).",
        "他说得太快，我听不懂。 : Il parle trop vite, je n'arrive pas à comprendre.",
      ],
      voixOff:
        "Le complément potentiel exprime la capacité ou l'incapacité à mener une action à son terme : verbe, puis de pour la possibilité, ou bù pour l'impossibilité, suivi d'un résultat. Zhège zì wǒ kàn de dǒng, ce caractère, j'arrive à le comprendre en le lisant. Tā shuō de tài kuài, wǒ tīng bù dǒng, il parle trop vite, je n'arrive pas à comprendre. Ce dǒng, comprendre, est un résultat très courant dans cette structure.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "把 : sujet + 把 + objet (connu) + verbe + élément obligatoire — le sujet AGIT",
        "被 : sujet + 被 + (agent) + verbe + élément — le sujet SUBIT",
        "把 et 被 exigent presque toujours un complément après le verbe",
        "Complément potentiel : verbe + 得/不 + résultat = capacité/incapacité (看得懂/看不懂)",
      ],
      voixOff:
        "Récapitulons ces structures avancées. La construction bǎ met en avant un objet précis sur lequel le sujet agit, avec toujours un élément après le verbe. La construction bèi forme la voix passive : le sujet subit l'action d'un agent, parfois omis. Dans les deux cas, le verbe seul ne suffit jamais, il faut un complément. Enfin, le complément potentiel, verbe suivi de de ou bù puis d'un résultat, exprime si l'on est capable ou non de réussir une action, comme kàn de dǒng ou tīng bù dǒng.",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre présente trois structures avancées incontournables du HSK 4 : la construction 把, qui met en avant un objet précis subissant une action ; la voix passive avec 被 ; et le complément potentiel, qui exprime la capacité ou l'incapacité à réaliser une action.",
    sections: [
      {
        titre: "La structure 把",
        points: [
          "Sujet + 把 + objet (connu, précis) + verbe + élément obligatoire",
          "Utilisée pour insister sur le résultat, le déplacement ou le changement d'état de l'objet",
          "Éléments fréquents : verbe+了, verbe+好/完, verbe+在/到+lieu, verbe+给+personne",
          "Très courante à l'impératif : 把门关上！把书拿出来！",
        ],
      },
      {
        titre: "La voix passive : 被",
        points: [
          "Sujet (celui qui subit) + 被 + (agent) + verbe + élément",
          "L'agent peut être omis s'il est inconnu ou sans importance",
          "Décrit souvent un événement subi, parfois malheureux ou inattendu",
          "被 exige généralement un élément après le verbe, comme 把",
        ],
      },
      {
        titre: "把 vs 被",
        points: [
          "把 : le sujet AGIT sur l'objet — 我把书看完了 (j'ai fini le livre)",
          "被 : le sujet SUBIT l'action — 书被我看完了 (le livre a été fini par moi)",
          "Le sens général peut être proche mais le point de vue grammatical change",
        ],
      },
      {
        titre: "Le complément potentiel",
        points: [
          "Verbe + 得 + résultat : capacité à réussir — 看得懂, 听得懂, 做得完",
          "Verbe + 不 + résultat : incapacité — 看不懂, 听不懂, 做不完",
          "Diffère du complément d'état (verbe+得+adjectif) : ici, 得/不 précède un résultat, pas un adjectif de manière",
        ],
      },
    ],
    audio:
      "Fiche de révision : 把, 被 et structures avancées, niveau HSK 4. La structure bǎ met en avant un objet précis et connu, en le plaçant avant le verbe : sujet, bǎ, objet, verbe, puis un élément obligatoire, comme wǒ bǎ shū kàn wán le, j'ai fini le livre. Elle est très fréquente dans les ordres, comme bǎ mén guānshàng, ferme la porte. La structure bèi forme la voix passive : sujet qui subit, bèi, agent éventuel, verbe, élément, comme bēizi bèi tā dǎpò le, le verre a été cassé par lui. Avec bǎ, le sujet agit ; avec bèi, le sujet subit. Enfin, le complément potentiel, verbe suivi de de ou bù puis d'un résultat, exprime la capacité ou l'incapacité à réussir une action, comme kàn de dǒng, arriver à comprendre en lisant, ou tīng bù dǒng, ne pas arriver à comprendre en écoutant.",
  },
  memoCards: [
    { recto: "把 (bǎ) : structure", verso: "Sujet + 把 + objet (connu) + verbe + élément obligatoire. Ex : 我把作业做完了。(J'ai fini mes devoirs.)" },
    { recto: "请把门关上！(qǐng bǎ mén guānshàng)", verso: "Ferme la porte, s'il te plaît. 把 très fréquent à l'impératif pour désigner précisément un objet." },
    { recto: "被 (bèi) : voix passive", verso: "Sujet (subit) + 被 + (agent) + verbe + élément. Ex : 杯子被他打破了。(Le verre a été cassé par lui.)" },
    { recto: "把 vs 被", verso: "把 : le sujet agit sur l'objet. 被 : le sujet subit l'action. 我把书看完了 ≠ 书被我看完了 (même sens, point de vue différent)." },
    { recto: "拿走 / 翻译成 (ná zǒu / fānyì chéng)", verso: "Emporter / traduire en. Ex : 这本书被翻译成了法语。(Ce livre a été traduit en français.)" },
    { recto: "看得懂 / 看不懂 (kàn de dǒng / kàn bù dǒng)", verso: "Arriver / ne pas arriver à comprendre en lisant. Complément potentiel : verbe + 得/不 + résultat." },
    { recto: "听得懂 / 听不懂 (tīng de dǒng / tīng bù dǒng)", verso: "Arriver / ne pas arriver à comprendre en écoutant. Ex : 他说得太快，我听不懂。" },
    { recto: "做得完 / 做不完 (zuò de wán / zuò bù wán)", verso: "Arriver / ne pas arriver à finir. Ex : 这么多作业，我今天做不完。(Tant de devoirs, je ne finirai pas aujourd'hui.)" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle structure met l'objet AVANT le verbe pour insister sur son résultat ?",
      choix: ["被", "把", "得", "越"],
      bonneReponse: 1,
      explication: "把 (bǎ) place l'objet avant le verbe : sujet + 把 + objet + verbe + élément.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle phrase est correctement construite avec 把 ?",
      choix: ["我把书看。", "我把书看完了。", "我看把书完了。", "把我书看完了。"],
      bonneReponse: 1,
      explication: "把 exige toujours un élément après le verbe : 看完了 (fini de lire).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 请把门关上。",
      reponse: "Ferme la porte, s'il te plaît.",
      explication: "请 (s'il te plaît) + 把门关上 (ferme la porte, avec 关上 = fermer complètement).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle particule forme la voix passive ?",
      choix: ["把", "被", "得", "地"],
      bonneReponse: 1,
      explication: "被 (bèi) marque la voix passive : le sujet subit l'action.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois (caractères et pinyin) : « Le verre a été cassé par lui. »",
      reponse: "杯子被他打破了。(Bēizi bèi tā dǎpò le.)",
      explication: "Sujet subissant (杯子) + 被 + agent (他) + verbe (打破) + 了.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : 我___作业做完了。",
      choix: ["被", "把", "得", "在"],
      bonneReponse: 1,
      explication: "L'objet précis (作业) est placé avant le verbe grâce à 把.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Remets les mots dans l'ordre : 桌子 / 上 / 请 / 放在 / 把 / 书",
      reponse: "请把书放在桌子上。(Qǐng bǎ shū fàng zài zhuōzi shàng.) — Pose le livre sur la table, s'il te plaît.",
      explication: "把 + objet (书) + verbe (放) + 在 + lieu (桌子上) : déplacement précis vers un lieu.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase exprime correctement l'incapacité de comprendre en écoutant ?",
      choix: ["我听得懂。", "我听不懂。", "我把听懂了。", "我被听懂了。"],
      bonneReponse: 1,
      explication: "听不懂 (tīng bù dǒng) = ne pas arriver à comprendre en écoutant : complément potentiel négatif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 我的手机昨天被弟弟拿走了，今天早上他才把手机还给我。",
      reponse: "Hier, mon téléphone a été pris par mon petit frère ; ce n'est que ce matin qu'il me l'a rendu.",
      explication: "被 (voix passive, subi) puis 把 (l'agent agit sur l'objet précis, le téléphone, pour le rendre) dans la même histoire.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Transforme cette phrase avec 把 en une phrase équivalente avec 被 : 我把这本小说看完了。",
      reponse: "这本小说被我看完了。(Zhè běn xiǎoshuō bèi wǒ kàn wán le.)",
      explication: "L'objet (这本小说) devient sujet de la phrase passive ; l'ancien sujet (我) devient l'agent introduit par 被.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est INCORRECTE ?",
      choix: [
        "他把作业做完了。",
        "作业被他做完了。",
        "他把作业做。",
        "这本书被翻译成了法语。",
      ],
      bonneReponse: 2,
      explication: "把 exige toujours un élément après le verbe : « 他把作业做。» est incomplet et donc incorrect.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris en pinyin avec les tons corrects : 这个字太难了，我看不懂，你能不能把它的意思告诉我？",
      reponse: "Zhège zì tài nán le, wǒ kàn bù dǒng, nǐ néng bu néng bǎ tā de yìsi gàosu wǒ?",
      explication: "看不懂 kàn bù dǒng (complément potentiel négatif), 把它的意思告诉我 (structure 把 avec verbe 告诉 + destinataire 我).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans la structure 把, où se place l'objet par rapport au verbe ?",
      choix: ["Après le verbe, comme d'habitude", "Avant le verbe", "Il n'y a pas d'objet", "Cela dépend du verbe"],
      bonneReponse: 1,
      explication: "把 déplace l'objet avant le verbe : sujet + 把 + objet + verbe + élément.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que signifie 被 (bèi) ?",
      reponse: "Particule qui marque la voix passive : le sujet de la phrase subit l'action.",
      explication: "Sujet (subit) + 被 + (agent) + verbe + élément.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Il a été grondé par le professeur. »",
      reponse: "他被老师批评了。(Tā bèi lǎoshī pīpíng le.)",
      explication: "Sujet subissant (他) + 被 + agent (老师) + verbe (批评) + 了.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que signifie 看得懂 (kàn de dǒng) ?",
      choix: ["Ne pas comprendre en lisant", "Arriver à comprendre en lisant", "Ne pas savoir lire", "Vouloir lire"],
      bonneReponse: 1,
      explication: "Complément potentiel positif : verbe + 得 + résultat = capacité.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence de point de vue entre 把 et 被 ?",
      reponse: "Avec 把, le sujet de la phrase est celui qui agit sur l'objet. Avec 被, le sujet est celui qui subit l'action d'un agent (souvent exprimé, parfois omis).",
      explication: "Même réalité possible, mais perspective grammaticale opposée : agent vs patient.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — 把, 被 et structures avancées",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle phrase utilise correctement 把 ?",
          choix: ["我把书。", "我把书看完了。", "书把我看完了。", "我看把书。"],
          bonneReponse: 1,
          explication: "把 + objet (书) + verbe (看) + élément (完了) : structure correcte.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en chinois : « Sors ton livre ! » (ordre avec 把)",
          reponse: "把书拿出来！(Bǎ shū ná chūlái!)",
          explication: "把 + objet (书) + verbe (拿) + élément directionnel (出来).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : 我的自行车___哥哥骑走了。",
          choix: ["把", "被", "得", "越"],
          bonneReponse: 1,
          explication: "Le sujet (自行车) subit l'action de l'agent (哥哥) : structure passive avec 被.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : 老师说得太快，很多学生都听不懂。",
          reponse: "Le professeur parle trop vite, beaucoup d'élèves n'arrivent pas à comprendre en écoutant.",
          explication: "听不懂 = complément potentiel négatif, incapacité à comprendre en écoutant.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Remets dans l'ordre : 了 / 打破 / 被 / 花瓶 / 猫",
          reponse: "花瓶被猫打破了。(Huāpíng bèi māo dǎpò le.) — Le vase a été cassé par le chat.",
          explication: "Sujet subissant (花瓶) + 被 + agent (猫) + verbe (打破) + 了.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige deux phrases en chinois : (1) « Range tes vêtements dans l'armoire ! » (avec 把, verbe 放, lieu 衣柜里) (2) « Ce film a été traduit en chinois. » (avec 被)",
          reponse:
            "(1) 把衣服放在衣柜里！(Bǎ yīfu fàng zài yīguì lǐ!) (2) 这部电影被翻译成了中文。(Zhè bù diànyǐng bèi fānyì chéng le Zhōngwén.)",
          explication: "把 pour un ordre précis avec déplacement (放在...里) ; 被 pour la voix passive avec 翻译成 (traduire en).",
        },
      ],
    },
    {
      titre: "Examen 2 — 把, 被 et structures avancées",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que faut-il obligatoirement après le verbe dans une structure 把 ?",
          choix: ["Rien, le verbe seul suffit", "Un élément complémentaire (résultat, lieu, etc.)", "Toujours 了", "Toujours 被"],
          bonneReponse: 1,
          explication: "把 exige toujours un élément après le verbe : jamais le verbe seul.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le pinyin avec les tons de 拿走 et sa traduction.",
          reponse: "ná zǒu — emporter, prendre et partir avec",
          explication: "拿 ná (2e ton), 走 zǒu (3e ton).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase exprime la capacité à finir un travail ?",
          choix: ["我做不完这个工作。", "我做得完这个工作。", "我把工作做。", "工作被我做。"],
          bonneReponse: 1,
          explication: "做得完 (zuò de wán) = complément potentiel positif, capacité à terminer.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme avec 把 : 这本书被我看完了。",
          reponse: "我把这本书看完了。(Wǒ bǎ zhè běn shū kàn wán le.)",
          explication: "L'agent (我) redevient sujet actif avec 把 ; l'objet (这本书) reprend sa place après 把.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en français : 这些字太难了，我看不懂，可是我朋友看得懂，因为他学汉语学了五年了。",
          reponse: "Ces caractères sont trop difficiles, je n'arrive pas à les comprendre en les lisant, mais mon ami y arrive, car il apprend le chinois depuis cinq ans.",
          explication: "看不懂/看得懂 = complément potentiel négatif/positif ; 学了五年了 = durée continue jusqu'à maintenant.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Écris un mini-dialogue de deux répliques en chinois : demande à un ami s'il a fini son travail (utilise 把 et 做完), puis fais-le répondre qu'il n'y arrive pas car c'est trop difficile (utilise le complément potentiel négatif).",
          reponse:
            "— 你把工作做完了吗？(Nǐ bǎ gōngzuò zuò wán le ma?) — 还没有，太难了，我做不完。(Hái méiyǒu, tài nán le, wǒ zuò bù wán.)",
          explication: "把+objet+做完 pour demander si le travail est fini ; 做不完 (complément potentiel négatif) pour l'incapacité.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "把 (bǎ) : sujet + 把 + objet précis/connu + verbe + élément obligatoire — le sujet AGIT sur l'objet et le transforme.",
    "被 (bèi) : sujet (subit) + 被 + (agent) + verbe + élément — voix passive, l'agent peut être omis si inconnu.",
    "把 et 被 exigent presque toujours un élément après le verbe : jamais le verbe seul.",
    "把 vs 被 : même réalité possible mais point de vue opposé — agent avec 把, patient avec 被.",
    "Complément potentiel : verbe + 得/不 + résultat = capacité/incapacité à réussir une action (看得懂/看不懂, 听得懂/听不懂, 做得完/做不完).",
    "把 est très fréquent à l'impératif pour désigner précisément un objet et l'action qu'on lui demande de subir (把门关上！).",
  ],
},
{
  slug: "hsk4-redaction",
  titre: "HSK 4 — Rédiger un texte structuré",
  matiere: "chinois",
  niveau: "3eme",
  langueVoix: "zh-CN",
  description:
    "Structurer un texte écrit en chinois : introduire son sujet et son avis (我认为, 关于...), organiser ses idées (首先...然后...最后...), opposer deux points de vue (一方面...另一方面...), illustrer par des exemples (例如/比如), exprimer une cause et une conséquence formelles (由于...因此...) et conclure (总之), avec le vocabulaire et les épreuves d'expression écrite du HSK 4.",
  objectifs: [
    "Construire un texte en trois parties : introduction, développement, conclusion",
    "Introduire un sujet et donner son avis : 关于..., 我认为...",
    "Organiser ses idées avec 首先...然后...最后...",
    "Opposer deux points de vue avec 一方面...另一方面...",
    "Illustrer avec des exemples (例如/比如) et conclure avec 总之",
  ],
  slides: [
    {
      titre: "La structure d'un texte",
      illustration: "🏗️",
      visuel: "introduction → développement → conclusion",
      contenu: [
        "引言 (yǐnyán) : introduction — présenter le sujet et son avis",
        "正文 (zhèngwén) : développement — donner des arguments et des exemples",
        "结论 (jiélùn) : conclusion — résumer et conclure",
        "Un texte structuré est plus clair et plus facile à noter",
      ],
      voixOff:
        "Un bon texte chinois, comme en français, s'organise en trois parties : yǐnyán, l'introduction, qui présente le sujet et donne son avis ; zhèngwén, le développement, qui apporte des arguments et des exemples ; et jiélùn, la conclusion, qui résume l'essentiel. Cette structure claire aide le lecteur, et l'examinateur du HSK 4, à suivre facilement ton raisonnement.",
    },
    {
      titre: "Introduire son sujet et son avis",
      illustration: "🎯",
      visuel: "关于...，我认为...",
      contenu: [
        "关于 (guānyú) : au sujet de, à propos de",
        "关于这个问题，我认为... : à propos de cette question, je pense que...",
        "对我来说 (duì wǒ láishuō) : pour moi, en ce qui me concerne",
        "现在，越来越多的人... : de nos jours, de plus en plus de gens...",
      ],
      voixOff:
        "Pour commencer un texte, on présente d'abord le sujet avec guānyú, au sujet de : guānyú zhège wèntí, wǒ rènwéi, à propos de cette question, je pense que. On peut aussi utiliser duì wǒ láishuō, pour moi, ou une phrase d'accroche générale comme xiànzài, yuè lái yuè duō de rén, de nos jours, de plus en plus de gens, pour introduire un phénomène de société.",
    },
    {
      titre: "Organiser ses idées : 首先...然后...最后...",
      illustration: "🔢",
      visuel: "首先... 然后... 最后...",
      contenu: [
        "首先 (shǒuxiān) : d'abord, premièrement",
        "然后 (ránhòu) : ensuite, puis ; 其次 (qícì) : ensuite (à l'écrit, plus soutenu)",
        "最后 (zuìhòu) : enfin, en dernier lieu",
        "首先，运动对身体很好。其次，运动可以让人更快乐。最后，运动能帮助我们交朋友。",
      ],
      voixOff:
        "Pour organiser un développement en plusieurs points, on utilise shǒuxiān, d'abord, qícì ou ránhòu, ensuite, et zuìhòu, enfin. Shǒuxiān, yùndòng duì shēntǐ hěn hǎo : d'abord, le sport est bon pour la santé. Qícì, yùndòng kěyǐ ràng rén gèng kuàilè : ensuite, le sport rend plus heureux. Zuìhòu, yùndòng néng bāngzhù wǒmen jiāo péngyou : enfin, le sport aide à se faire des amis.",
    },
    {
      titre: "Opposer deux points de vue : 一方面...另一方面...",
      illustration: "⚖️",
      visuel: "一方面...，另一方面...。",
      contenu: [
        "一方面 (yì fāngmiàn) : d'un côté ; 另一方面 (lìng yì fāngmiàn) : d'un autre côté",
        "一方面，手机很方便；另一方面，手机也让人分心。 : D'un côté, le téléphone est pratique ; de l'autre, il distrait aussi.",
        "Utile pour présenter les avantages ET les inconvénients d'un sujet",
        "Structure très appréciée dans les textes argumentatifs équilibrés",
      ],
      voixOff:
        "Quand un sujet a des aspects positifs et négatifs, on utilise yì fāngmiàn... lìng yì fāngmiàn..., d'un côté... d'un autre côté... Yì fāngmiàn, shǒujī hěn fāngbiàn ; lìng yì fāngmiàn, shǒujī yě ràng rén fēnxīn : d'un côté, le téléphone est pratique ; de l'autre, il distrait aussi. Cette structure montre que tu sais nuancer ton propos, ce qui est très valorisé dans un texte argumentatif.",
    },
    {
      titre: "Illustrer avec des exemples : 例如 / 比如",
      illustration: "💡",
      visuel: "例如... · 比如说...",
      contenu: [
        "例如 (lìrú) : par exemple (plutôt écrit) ; 比如 (bǐrú) : par exemple (plus oral)",
        "很多运动对身体很好，例如游泳和跑步。 : Beaucoup de sports sont bons pour la santé, par exemple la natation et la course.",
        "比如说 (bǐrú shuō) : par exemple, comme qui dirait...",
        "Un exemple concret rend un argument beaucoup plus convaincant",
      ],
      voixOff:
        "Un bon argument a besoin d'un exemple concret pour être convaincant. Lìrú, plutôt écrit, et bǐrú, plus oral, signifient tous deux « par exemple » : hěn duō yùndòng duì shēntǐ hěn hǎo, lìrú yóuyǒng hé pǎobù, beaucoup de sports sont bons pour la santé, par exemple la natation et la course. Pense à toujours illustrer tes idées générales par un exemple précis.",
    },
    {
      titre: "Cause et conséquence formelles : 由于...因此...",
      illustration: "🔗",
      visuel: "由于...，因此...。",
      contenu: [
        "由于 (yóuyú) : en raison de, du fait de (registre soutenu, écrit)",
        "因此 (yīncǐ) : c'est pourquoi, par conséquent (registre soutenu, écrit)",
        "由于工作太忙，因此他很少运动。 : En raison d'un travail trop chargé, il fait rarement du sport.",
        "Plus formel que 因为...所以..., à réserver à l'écrit argumentatif",
      ],
      voixOff:
        "Pour un texte écrit plus formel, on préfère yóuyú et yīncǐ à yīnwèi et suǒyǐ, qui restent plus oraux. Yóuyú gōngzuò tài máng, yīncǐ tā hěn shǎo yùndòng : en raison d'un travail trop chargé, il fait rarement du sport. Utiliser ce vocabulaire soutenu dans une rédaction montre à l'examinateur une bonne maîtrise du registre écrit.",
    },
    {
      titre: "Conclure : 总之 / 总的来说",
      illustration: "🏁",
      visuel: "总之，... / 总的来说，...",
      contenu: [
        "总之 (zǒngzhī) : en somme, en résumé",
        "总的来说 (zǒng de lái shuō) : dans l'ensemble, tout compte fait",
        "总之，运动对我们的身体和心情都很重要。 : En somme, le sport est très important pour notre corps et notre humeur.",
        "La conclusion reprend l'idée principale sans répéter mot à mot l'introduction",
      ],
      voixOff:
        "Pour conclure un texte, zǒngzhī, en somme, ou zǒng de lái shuō, dans l'ensemble, permettent de résumer l'idée principale sans simplement répéter l'introduction. Zǒngzhī, yùndòng duì wǒmen de shēntǐ hé xīnqíng dōu hěn zhòngyào : en somme, le sport est très important pour notre corps et notre humeur. Une bonne conclusion referme le texte de façon claire et nette.",
    },
    {
      titre: "Exemple de rédaction structurée",
      illustration: "📝",
      visuel: "关于运动的重要性",
      contenu: [
        "关于运动，我认为它对我们的生活很重要。",
        "首先，运动对身体很好，例如跑步能让心脏更健康。",
        "一方面，运动需要花时间；另一方面，它能让人更快乐，交到新朋友。",
        "总之，虽然运动有时候很累，但是好处更多。",
      ],
      voixOff:
        "Voici un court exemple qui réunit toutes les structures étudiées. Guānyú yùndòng, wǒ rènwéi tā duì wǒmen de shēnghuó hěn zhòngyào : à propos du sport, je pense qu'il est très important pour notre vie. Shǒuxiān, yùndòng duì shēntǐ hěn hǎo, lìrú pǎobù néng ràng xīnzàng gèng jiànkāng : d'abord, le sport est bon pour la santé, par exemple courir rend le cœur plus sain. On équilibre ensuite les deux points de vue avant de conclure avec zǒngzhī.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Structure : 引言 (sujet+avis) → 正文 (arguments+exemples) → 结论 (résumé)",
        "Enchaîner les idées : 首先...其次/然后...最后...",
        "Nuancer : 一方面...另一方面... ; illustrer : 例如/比如",
        "Registre soutenu : 由于...因此... ; conclure : 总之 / 总的来说",
      ],
      voixOff:
        "Pour bien rédiger au HSK 4, retiens la structure en trois temps : yǐnyán pour présenter le sujet et ton avis, zhèngwén pour développer tes arguments avec des exemples, et jiélùn pour conclure. Enchaîne tes idées avec shǒuxiān, qícì, zuìhòu, nuance ton propos avec yì fāngmiàn... lìng yì fāngmiàn..., illustre avec lìrú, utilise le registre soutenu yóuyú... yīncǐ... pour la cause et la conséquence, et termine toujours par zǒngzhī pour conclure clairement.",
    },
  ],
  fiche: {
    intro:
      "Rédiger un texte structuré au niveau HSK 4 demande de savoir organiser ses idées en trois parties (introduction, développement, conclusion) et de maîtriser les connecteurs logiques qui rendent un texte clair : énumération, opposition, exemple, cause/conséquence et conclusion.",
    sections: [
      {
        titre: "La structure en trois parties",
        points: [
          "引言 (yǐnyán) : présenter le sujet et son avis — 关于..., 我认为...",
          "正文 (zhèngwén) : développer arguments et exemples",
          "结论 (jiélùn) : résumer et conclure — 总之, 总的来说",
        ],
      },
      {
        titre: "Enchaîner et nuancer ses idées",
        points: [
          "首先 (d'abord) / 其次 ou 然后 (ensuite) / 最后 (enfin) : énumération",
          "一方面...另一方面... : opposer deux points de vue, avantages/inconvénients",
          "例如 (écrit) / 比如 (oral) : introduire un exemple concret",
        ],
      },
      {
        titre: "Cause et conséquence, registre soutenu",
        points: [
          "由于 (en raison de) / 因此 (par conséquent) : version écrite, soutenue, de 因为...所以...",
          "虽然...但是... reste utile pour nuancer un argument à l'écrit",
        ],
      },
      {
        titre: "Vocabulaire utile de la rédaction",
        points: [
          "关于 (guānyú) : au sujet de ; 对我来说 (duì wǒ láishuō) : pour moi",
          "越来越多的人 (yuè lái yuè duō de rén) : de plus en plus de gens",
          "好处 (hǎochù) : avantage ; 坏处 (huàichù) : inconvénient",
        ],
      },
    ],
    audio:
      "Fiche de révision : rédiger un texte structuré, niveau HSK 4. Un bon texte s'organise en trois parties : yǐnyán, l'introduction, qui présente le sujet avec guānyú et donne son avis avec wǒ rènwéi ; zhèngwén, le développement, qui apporte des arguments et des exemples ; et jiélùn, la conclusion, introduite par zǒngzhī. Pour enchaîner les idées, on utilise shǒuxiān, qícì ou ránhòu, puis zuìhòu. Pour nuancer un propos en présentant deux côtés d'une question, on utilise yì fāngmiàn... lìng yì fāngmiàn... Pour illustrer un argument, lìrú à l'écrit ou bǐrú à l'oral introduisent un exemple. Enfin, pour un registre plus soutenu, on remplace yīnwèi... suǒyǐ... par yóuyú... yīncǐ..., en raison de... par conséquent...",
  },
  memoCards: [
    { recto: "引言 / 正文 / 结论 (yǐnyán / zhèngwén / jiélùn)", verso: "Introduction / développement / conclusion : les trois parties d'un texte structuré." },
    { recto: "关于... (guānyú)", verso: "Au sujet de... Ex : 关于这个问题，我认为... (À propos de cette question, je pense que...)" },
    { recto: "首先...其次...最后... (shǒuxiān...qícì...zuìhòu...)", verso: "D'abord... ensuite... enfin... — pour énumérer des arguments dans l'ordre." },
    { recto: "一方面...另一方面... (yì fāngmiàn...lìng yì fāngmiàn...)", verso: "D'un côté... de l'autre... Ex : 一方面很方便，另一方面也有问题。" },
    { recto: "例如 / 比如 (lìrú / bǐrú)", verso: "Par exemple. 例如 plutôt à l'écrit, 比如 plutôt à l'oral. Ex : 例如游泳和跑步。" },
    { recto: "由于...因此... (yóuyú...yīncǐ...)", verso: "En raison de... par conséquent... — version soutenue et écrite de 因为...所以..." },
    { recto: "总之 / 总的来说 (zǒngzhī / zǒng de lái shuō)", verso: "En somme / dans l'ensemble — pour introduire la conclusion d'un texte." },
    { recto: "好处 / 坏处 (hǎochù / huàichù)", verso: "Avantage / inconvénient — vocabulaire clé pour un texte argumentatif équilibré." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « au sujet de » pour introduire un texte ?",
      choix: ["总之", "关于", "由于", "一方面"],
      bonneReponse: 1,
      explication: "关于 (guānyú) = au sujet de, à propos de — utilisé pour présenter le sujet.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel mot introduit une conclusion ?",
      choix: ["首先", "例如", "总之", "另一方面"],
      bonneReponse: 2,
      explication: "总之 (zǒngzhī) = en somme, en résumé — introduit une conclusion.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 首先，运动对身体很好。",
      reponse: "D'abord, le sport est bon pour la santé.",
      explication: "首先 (shǒuxiān) = d'abord, premièrement.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Lequel de ces mots signifie « par exemple » ?",
      choix: ["因此", "例如", "然后", "总的来说"],
      bonneReponse: 1,
      explication: "例如 (lìrú) = par exemple, plutôt utilisé à l'écrit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois (caractères et pinyin) : « D'un côté, le téléphone est pratique ; de l'autre, il distrait aussi. »",
      reponse: "一方面，手机很方便；另一方面，它也让人分心。(Yì fāngmiàn, shǒujī hěn fāngbiàn; lìng yì fāngmiàn, tā yě ràng rén fēnxīn.)",
      explication: "一方面...另一方面... pour opposer deux aspects d'un même sujet.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle paire de connecteurs appartient au registre écrit le plus soutenu ?",
      choix: ["因为...所以...", "由于...因此...", "虽然...但是...", "又...又..."],
      bonneReponse: 1,
      explication: "由于...因此... est la version plus soutenue et écrite de 因为...所以...",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Remets les mots dans l'ordre : 好处 / 更多 / 累 / 虽然 / 但是 / 运动 / 有时候 / 很",
      reponse: "虽然运动有时候很累，但是好处更多。(Suīrán yùndòng yǒushíhou hěn lèi, dànshì hǎochù gèng duō.) — Bien que le sport soit parfois fatigant, ses avantages sont plus nombreux.",
      explication: "虽然...但是... pour nuancer une conclusion argumentative.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans quel ordre place-t-on normalement les trois parties d'un texte ?",
      choix: ["结论 / 正文 / 引言", "引言 / 正文 / 结论", "正文 / 引言 / 结论", "引言 / 结论 / 正文"],
      bonneReponse: 1,
      explication: "引言 (introduction) → 正文 (développement) → 结论 (conclusion).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 关于手机的使用，一方面它让我们的生活更方便，例如可以随时联系家人；另一方面，它也让很多人越来越不注意面对面的交流。",
      reponse:
        "À propos de l'usage du téléphone, d'un côté il rend notre vie plus pratique, par exemple on peut contacter sa famille à tout moment ; de l'autre, il fait aussi que beaucoup de gens font de moins en moins attention à la communication en face à face.",
      explication: "关于 introduit le sujet, 一方面...另一方面... structure l'opposition, 例如 illustre le premier argument, 越来越 exprime l'évolution.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige en chinois une phrase de conclusion utilisant 总之 pour un texte sur l'importance de la lecture (读书).",
      reponse: "总之，读书不但能让我们学到很多知识，而且也能让我们的生活更丰富。(Zǒngzhī, dúshū búdàn néng ràng wǒmen xuédào hěn duō zhīshi, érqiě yě néng ràng wǒmen de shēnghuó gèng fēngfù.)",
      explication: "总之 introduit la conclusion ; on peut réutiliser 不但...而且... pour résumer deux idées fortes.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase utilise correctement 由于...因此... dans un registre soutenu ?",
      choix: [
        "由于下雨了，因此我们的比赛取消了。",
        "由于下雨了，所以我们的比赛取消了。",
        "因为下雨了，因此我们的比赛取消了。",
        "虽然下雨了，因此我们的比赛取消了。",
      ],
      bonneReponse: 0,
      explication: "由于 s'associe naturellement à 因此 (registre écrit cohérent) ; les autres options mélangent des registres différents.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris en pinyin avec les tons corrects : 总的来说，学习汉语虽然不容易，但是让我越来越了解中国文化。",
      reponse: "Zǒng de lái shuō, xuéxí Hànyǔ suīrán bù róngyì, dànshì ràng wǒ yuè lái yuè liǎojiě Zhōngguó wénhuà.",
      explication: "总的来说 zǒng de lái shuō, 容易 róngyì (2e+4e), 了解 liǎojiě (3e+3e), 文化 wénhuà (2e+4e).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la première partie d'un texte structuré ?",
      choix: ["结论", "正文", "引言", "总之"],
      bonneReponse: 2,
      explication: "引言 (yǐnyán) = l'introduction, qui présente le sujet et l'avis.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que veut dire 好处 (hǎochù) et son contraire 坏处 (huàichù) ?",
      reponse: "好处 = avantage ; 坏处 = inconvénient.",
      explication: "Vocabulaire clé pour un texte argumentatif qui pèse le pour et le contre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Par exemple, la natation et la course sont bonnes pour le cœur. »",
      reponse: "例如，游泳和跑步对心脏很好。(Lìrú, yóuyǒng hé pǎobù duì xīnzàng hěn hǎo.)",
      explication: "例如 introduit un exemple concret à l'écrit.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que signifie 另一方面 (lìng yì fāngmiàn) ?",
      choix: ["Tout d'abord", "D'un autre côté", "En résumé", "Par conséquent"],
      bonneReponse: 1,
      explication: "另一方面 = d'un autre côté, en réponse à 一方面 (d'un côté).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi préfère-t-on 由于...因此... à 因为...所以... dans une rédaction formelle ?",
      reponse: "Parce que 由于...因此... appartient à un registre plus soutenu et écrit, alors que 因为...所以... est plus courant à l'oral.",
      explication: "Le choix du registre montre la maîtrise de la langue écrite, valorisée à l'examen.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Rédiger un texte structuré",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 正文 (zhèngwén) ?",
          choix: ["L'introduction", "Le développement", "La conclusion", "Le titre"],
          bonneReponse: 1,
          explication: "正文 = le développement, le corps du texte, où l'on argumente.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en chinois : « Pour moi, la lecture est très importante. »",
          reponse: "对我来说，读书很重要。(Duì wǒ láishuō, dúshū hěn zhòngyào.)",
          explication: "对我来说 = pour moi, en ce qui me concerne — introduit un avis personnel.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : ___，运动能让身体更健康。___，它也能让人更快乐。",
          choix: ["首先 / 其次", "关于 / 总之", "由于 / 因此", "一方面 / 因此"],
          bonneReponse: 0,
          explication: "首先...其次... pour énumérer une liste d'arguments dans l'ordre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : 由于科技的发展，因此越来越多的人开始在网上学习。",
          reponse: "En raison du développement de la technologie, de plus en plus de gens commencent à apprendre en ligne.",
          explication: "由于...因此... structure formelle de cause/conséquence ; 越来越多的人 = de plus en plus de gens.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Remets dans l'ordre : 重要 / 认为 / 我 / 关于 / 教育 / 这个 / 问题 / 很",
          reponse: "关于这个问题，我认为教育很重要。(Guānyú zhège wèntí, wǒ rènwéi jiàoyù hěn zhòngyào.) — À propos de cette question, je pense que l'éducation est très importante.",
          explication: "关于 introduit le sujet, 我认为 introduit l'avis, structure typique d'introduction.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige un court paragraphe structuré en chinois (3-4 phrases) sur le sujet « les réseaux sociaux », en utilisant au moins 关于, 一方面...另一方面... et 总之.",
          reponse:
            "关于社交网络，我认为它对我们的生活有很大的影响。一方面，它让我们跟朋友联系更方便；另一方面，它也让很多人花太多时间看手机。总之，我们应该合理地使用社交网络。(Guānyú shèjiāo wǎngluò, wǒ rènwéi tā duì wǒmen de shēnghuó yǒu hěn dà de yǐngxiǎng. Yì fāngmiàn, tā ràng wǒmen gēn péngyou liánxì gèng fāngbiàn; lìng yì fāngmiàn, tā yě ràng hěn duō rén huā tài duō shíjiān kàn shǒujī. Zǒngzhī, wǒmen yīnggāi hélǐ de shǐyòng shèjiāo wǎngluò.)",
          explication: "Le paragraphe suit la structure introduction (关于+我认为), opposition (一方面...另一方面...), conclusion (总之).",
        },
      ],
    },
    {
      titre: "Examen 2 — Rédiger un texte structuré",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 总的来说 (zǒng de lái shuō) ?",
          choix: ["Par exemple", "Dans l'ensemble", "D'un côté", "Tout d'abord"],
          bonneReponse: 1,
          explication: "总的来说 = dans l'ensemble, tout compte fait — sert à conclure.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le pinyin avec les tons de 由于 et sa traduction.",
          reponse: "yóuyú — en raison de, du fait de",
          explication: "由 yóu (2e ton), 于 yú (2e ton).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel connecteur est le plus adapté pour illustrer une idée à l'écrit ?",
          choix: ["然后", "例如", "另一方面", "总之"],
          bonneReponse: 1,
          explication: "例如 (lìrú) introduit un exemple concret, plutôt à l'écrit.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pose la phrase d'ouverture en chinois : « De nos jours, de plus en plus de gens apprennent le chinois. »",
          reponse: "现在，越来越多的人开始学习汉语。(Xiànzài, yuè lái yuè duō de rén kāishǐ xuéxí Hànyǔ.)",
          explication: "越来越多的人 = de plus en plus de gens — bonne accroche pour une introduction.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en français : 首先，学外语能帮助我们跟不同的人交流；其次，它也能让我们更了解别的文化；最后，它对未来的工作也很有用。总之，学外语的好处很多。",
          reponse:
            "D'abord, apprendre une langue étrangère nous aide à communiquer avec des gens différents ; ensuite, cela nous permet aussi de mieux comprendre d'autres cultures ; enfin, c'est aussi très utile pour le travail futur. En somme, apprendre une langue étrangère a beaucoup d'avantages.",
          explication: "首先...其次...最后... énumère trois arguments, 总之 conclut en résumant l'idée principale.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige un court paragraphe structuré en chinois (3-4 phrases) sur le sujet « faire du sport chaque jour », en utilisant au moins 首先, 例如 et 总之.",
          reponse:
            "关于每天运动，我认为这对我们很有好处。首先，运动能让身体更健康，例如跑步能让心脏更强壮。其次，运动也能让我们心情更好。总之，我觉得每天运动是一个很好的习惯。(Guānyú měitiān yùndòng, wǒ rènwéi zhè duì wǒmen hěn yǒu hǎochù. Shǒuxiān, yùndòng néng ràng shēntǐ gèng jiànkāng, lìrú pǎobù néng ràng xīnzàng gèng qiángzhuàng. Qícì, yùndòng yě néng ràng wǒmen xīnqíng gèng hǎo. Zǒngzhī, wǒ juéde měitiān yùndòng shì yí ge hěn hǎo de xíguàn.)",
          explication: "Structure complète : introduction (关于+我认为), développement (首先...例如..., 其次...), conclusion (总之).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un texte structuré s'organise en trois parties : 引言 (sujet + avis), 正文 (arguments + exemples), 结论 (résumé).",
    "Pour introduire : 关于... (au sujet de), 我认为/对我来说 (mon avis) ; pour énumérer : 首先...其次/然后...最后...",
    "Pour nuancer un propos, opposer avantages et inconvénients : 一方面...另一方面...",
    "Pour illustrer un argument : 例如 (écrit) / 比如 (oral) ; pour un registre soutenu de cause/conséquence : 由于...因此...",
    "Pour conclure : 总之 / 总的来说 — résume l'idée principale sans répéter mot à mot l'introduction.",
    "Un bon texte HSK 4 combine ces connecteurs avec les structures déjà connues (虽然...但是..., 不但...而且..., 越来越) pour un texte riche et bien articulé.",
  ],
},
{
  slug: "hsk5-preparation",
  titre: "Vers le HSK 5 — compréhension fine et essais",
  matiere: "chinois",
  niveau: "3eme",
  langueVoix: "zh-CN",
  description:
    "Franchir un cap vers le HSK 5 : nuancer une concession (尽管...但是...), exprimer une condition universelle (无论...都...) ou hypothétique (即使...也...), expliquer une cause en la mettant en valeur (之所以...是因为...), comparer deux choix (与其...不如...), enrichir son vocabulaire de nuance (逐渐, 反而) et structurer un essai argumenté complet.",
  objectifs: [
    "Nuancer une concession avec 尽管...但是... et la distinguer de 虽然...但是...",
    "Exprimer une condition universelle avec 无论...都...",
    "Exprimer une hypothèse renforcée avec 即使...也...",
    "Mettre en valeur une cause avec 之所以...是因为...",
    "Structurer un essai argumenté complet : thèse, contre-argument, synthèse",
  ],
  slides: [
    {
      titre: "Vers le HSK 5 : ce qui change",
      illustration: "🚀",
      visuel: "textes plus longs · nuances · essais argumentés",
      contenu: [
        "Les textes sont plus longs et contiennent plusieurs idées imbriquées",
        "Les connecteurs deviennent plus nuancés : conditions, hypothèses, causes mises en valeur",
        "L'essai (作文) demande de développer une opinion personnelle argumentée",
        "Le vocabulaire abstrait et les nuances de sens prennent une place plus importante",
      ],
      voixOff:
        "Le HSK 5 marque un vrai saut de niveau : les textes s'allongent et mêlent plusieurs idées, les connecteurs logiques deviennent plus nuancés, et l'épreuve d'expression écrite te demande de développer un essai argumenté complet, et non plus seulement des phrases isolées. Ce chapitre te donne les outils pour franchir cette étape en douceur.",
    },
    {
      titre: "Nuancer la concession : 尽管...但是...",
      illustration: "🌀",
      visuel: "尽管...，但是...。",
      contenu: [
        "尽管 (jǐnguǎn) : bien que, malgré (registre plus soutenu que 虽然)",
        "尽管困难很多，但是他从来没有放弃过。 : Malgré de nombreuses difficultés, il n'a jamais abandonné.",
        "尽管如此 (jǐnguǎn rúcǐ) : malgré cela — expression figée très utile pour enchaîner deux phrases",
        "尽管 insiste davantage sur l'ampleur de l'obstacle que 虽然",
      ],
      voixOff:
        "Jǐnguǎn est une variante plus soutenue de suīrán, bien que. Jǐnguǎn kùnnan hěn duō, dànshì tā cónglái méiyǒu fàngqì guo : malgré de nombreuses difficultés, il n'a jamais abandonné. Retiens aussi l'expression figée jǐnguǎn rúcǐ, malgré cela, très utile pour commencer une nouvelle phrase après avoir décrit un obstacle, sans répéter tout ce qui précède.",
    },
    {
      titre: "La condition universelle : 无论...都...",
      illustration: "🌍",
      visuel: "无论...，都...。",
      contenu: [
        "无论 (wúlùn) : quel que soit, peu importe",
        "无论多难，我都要完成这个项目。 : Quelle que soit la difficulté, je dois terminer ce projet.",
        "S'utilise avec un mot interrogatif (什么, 谁, 怎么, 多) ou une alternative",
        "无论刮风下雨，他都坚持跑步。 : Qu'il vente ou qu'il pleuve, il continue à courir.",
      ],
      voixOff:
        "Wúlùn... dōu... exprime qu'une conséquence reste vraie quelles que soient les circonstances. On l'utilise souvent avec un mot interrogatif : wúlùn duō nán, wǒ dōu yào wánchéng zhège xiàngmù, quelle que soit la difficulté, je dois terminer ce projet. Wúlùn guāfēng xiàyǔ, tā dōu jiānchí pǎobù : qu'il vente ou qu'il pleuve, il continue à courir. Le dōu final est indispensable dans cette structure.",
    },
    {
      titre: "L'hypothèse renforcée : 即使...也...",
      illustration: "💭",
      visuel: "即使...，也...。",
      contenu: [
        "即使 (jíshǐ) : même si (hypothèse, parfois irréelle)",
        "即使明天下雨，我也要去。 : Même s'il pleut demain, j'irai quand même.",
        "Différence avec 虽然 : 虽然 = fait réel ; 即使 = hypothèse, pas encore réalisée",
        "也 (yě) : aussi, quand même — indispensable dans cette structure",
      ],
      voixOff:
        "Jíshǐ... yě... introduit une hypothèse, parfois même une situation irréelle, contrairement à suīrán qui décrit un fait avéré. Jíshǐ míngtiān xiàyǔ, wǒ yě yào qù : même s'il pleut demain, j'irai quand même. Retiens bien la nuance : suīrán s'utilise pour un fait déjà réalisé, tandis que jíshǐ s'utilise pour une hypothèse, réelle ou non, pas encore vérifiée.",
    },
    {
      titre: "Mettre en valeur une cause : 之所以...是因为...",
      illustration: "🔍",
      visuel: "他之所以成功，是因为他很努力。",
      contenu: [
        "之所以 (zhī suǒyǐ) : la raison pour laquelle... ; 是因为 (shì yīnwèi) : c'est parce que...",
        "他之所以成功，是因为他很努力。 : S'il a réussi, c'est parce qu'il a beaucoup travaillé.",
        "Ordre inversé par rapport à 因为...所以... : ici, le RÉSULTAT vient en premier",
        "Structure très valorisée dans un essai argumentatif : elle met l'accent sur la cause",
      ],
      voixOff:
        "Zhī suǒyǐ... shì yīnwèi... inverse l'ordre habituel de la cause et de la conséquence : on annonce d'abord le résultat, puis on explique pourquoi. Tā zhī suǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì : s'il a réussi, c'est parce qu'il a beaucoup travaillé. Cette structure met l'accent sur l'explication elle-même, ce qui en fait un outil précieux pour un essai argumentatif convaincant.",
    },
    {
      titre: "Comparer deux choix : 与其...不如...",
      illustration: "🔀",
      visuel: "与其在家玩手机，不如出去运动。",
      contenu: [
        "与其 (yǔqí) : plutôt que ; 不如 (bùrú) : il vaut mieux, il vaudrait mieux",
        "与其在家玩手机，不如出去运动。 : Plutôt que de rester à jouer sur son téléphone, mieux vaut sortir faire du sport.",
        "La deuxième option (après 不如) est toujours présentée comme la meilleure",
        "Structure fréquente pour donner un conseil argumenté à l'écrit",
      ],
      voixOff:
        "Yǔqí... bùrú... compare deux options et affirme clairement que la seconde est préférable. Yǔqí zài jiā wán shǒujī, bùrú chūqù yùndòng : plutôt que de rester à la maison à jouer sur son téléphone, mieux vaut sortir faire du sport. Cette structure est très utile dans un essai pour formuler un conseil argumenté de façon élégante.",
    },
    {
      titre: "Nuances de vocabulaire",
      illustration: "🎨",
      visuel: "逐渐 · 反而 · 尽管如此",
      contenu: [
        "逐渐 (zhújiàn) : peu à peu, graduellement — plus précis que 越来越",
        "反而 (fǎn'ér) : au contraire, contre toute attente",
        "他不但没有生气，反而笑了。 : Non seulement il ne s'est pas fâché, mais il a même souri, au contraire.",
        "尽管如此 (jǐnguǎn rúcǐ) : malgré cela, néanmoins",
      ],
      voixOff:
        "Le HSK 5 demande un vocabulaire plus nuancé. Zhújiàn, peu à peu, décrit une évolution progressive et mesurée, plus précise que yuè lái yuè. Fǎn'ér, au contraire, introduit un résultat inattendu, contraire à ce qu'on aurait pu prévoir : tā búdàn méiyǒu shēngqì, fǎn'ér xiào le, non seulement il ne s'est pas fâché, mais il a même souri, au contraire. Ces nuances rendent un texte beaucoup plus riche et précis.",
    },
    {
      titre: "Structurer un essai argumenté complet",
      illustration: "✍️",
      visuel: "thèse → contre-argument → synthèse",
      contenu: [
        "1. Présenter le sujet et sa thèse : 关于..., 我认为...",
        "2. Développer des arguments avec exemples : 首先..., 例如...",
        "3. Envisager un contre-argument : 当然，也有人认为... (Bien sûr, certains pensent que...)",
        "4. Synthétiser sans se contredire : 尽管如此，我依然认为... (Malgré cela, je pense toujours que...)",
      ],
      voixOff:
        "Un essai de niveau HSK 5 ne se contente plus d'un seul point de vue : il envisage aussi un contre-argument avant de conclure. Après avoir présenté sa thèse et ses arguments, on introduit une autre opinion possible avec dāngrán, yě yǒu rén rènwéi, bien sûr, certains pensent que. Puis on synthétise sans se contredire, en réaffirmant son avis nuancé grâce à jǐnguǎn rúcǐ, wǒ yīrán rènwéi, malgré cela, je pense toujours que.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "尽管...但是... (soutenu) ≈ 虽然...但是... ; 尽管如此 = malgré cela",
        "无论...都... : peu importe (avec mot interrogatif) ; 即使...也... : même si (hypothèse)",
        "之所以...是因为... : inverse cause/conséquence pour mettre en valeur l'explication",
        "与其...不如... : la 2e option est meilleure ; structure d'essai : thèse → contre-argument → synthèse",
      ],
      voixOff:
        "Pour progresser vers le HSK 5, retiens ces structures avancées. Jǐnguǎn... dànshì... est une version soutenue de suīrán... dànshì... Wúlùn... dōu... exprime une condition universelle, tandis que jíshǐ... yě... exprime une hypothèse. Zhī suǒyǐ... shì yīnwèi... inverse cause et conséquence pour insister sur l'explication, et yǔqí... bùrú... compare deux options en désignant la meilleure. Enfin, un bon essai envisage toujours un contre-argument avant de conclure.",
    },
  ],
  fiche: {
    intro:
      "Passer du HSK 4 au HSK 5 demande de maîtriser des connecteurs plus nuancés (concession soutenue, condition universelle, hypothèse, cause mise en valeur, comparaison de choix) et de savoir structurer un essai argumenté complet, avec thèse, contre-argument et synthèse.",
    sections: [
      {
        titre: "Concession, condition, hypothèse",
        points: [
          "尽管...但是... (jǐnguǎn...dànshì...) : version soutenue de 虽然...但是... ; 尽管如此 = malgré cela",
          "无论...都... (wúlùn...dōu...) : condition universelle, souvent avec un mot interrogatif",
          "即使...也... (jíshǐ...yě...) : hypothèse (parfois irréelle), à distinguer d'un fait avéré (虽然)",
        ],
      },
      {
        titre: "Mettre en valeur une cause, comparer des choix",
        points: [
          "之所以...是因为... (zhī suǒyǐ...shì yīnwèi...) : le résultat vient en premier, la cause ensuite",
          "与其...不如... (yǔqí...bùrú...) : la deuxième option est présentée comme la meilleure",
        ],
      },
      {
        titre: "Nuances de vocabulaire",
        points: [
          "逐渐 (zhújiàn) : peu à peu, graduellement",
          "反而 (fǎn'ér) : au contraire, contre toute attente",
          "尽管如此 (jǐnguǎn rúcǐ) : malgré cela, néanmoins",
        ],
      },
      {
        titre: "Structurer un essai complet",
        points: [
          "Thèse : 关于..., 我认为... — développée avec 首先, 例如",
          "Contre-argument : 当然，也有人认为... (bien sûr, certains pensent que...)",
          "Synthèse : 尽管如此，我依然认为... (malgré cela, je pense toujours que...)",
        ],
      },
    ],
    audio:
      "Fiche de révision : vers le HSK 5, compréhension fine et essais. Jǐnguǎn... dànshì... est une version soutenue de suīrán... dànshì..., et jǐnguǎn rúcǐ signifie malgré cela. Wúlùn... dōu... exprime une condition universelle, souvent avec un mot interrogatif comme shénme ou duō. Jíshǐ... yě... exprime une hypothèse, parfois irréelle, à distinguer d'un fait avéré introduit par suīrán. Zhī suǒyǐ... shì yīnwèi... inverse l'ordre habituel : on annonce d'abord le résultat, puis la cause, ce qui met l'accent sur l'explication. Yǔqí... bùrú... compare deux options et affirme que la seconde est préférable. Enfin, un bon essai de niveau HSK 5 présente une thèse, envisage un contre-argument avec yě yǒu rén rènwéi, puis conclut par une synthèse nuancée.",
  },
  memoCards: [
    { recto: "尽管...但是... (jǐnguǎn...dànshì...)", verso: "Bien que... mais... (soutenu, insiste sur l'ampleur de l'obstacle). Ex : 尽管困难很多，但是他没有放弃。" },
    { recto: "尽管如此 (jǐnguǎn rúcǐ)", verso: "Malgré cela, néanmoins — expression figée pour enchaîner deux phrases sans tout répéter." },
    { recto: "无论...都... (wúlùn...dōu...)", verso: "Quel que soit... Ex : 无论多难，我都要完成。(Quelle que soit la difficulté, je dois terminer.)" },
    { recto: "即使...也... (jíshǐ...yě...)", verso: "Même si... (hypothèse, parfois irréelle). Ex : 即使下雨，我也要去。(Même s'il pleut, j'irai quand même.)" },
    { recto: "之所以...是因为... (zhī suǒyǐ...shì yīnwèi...)", verso: "Si... c'est parce que... (résultat avant cause). Ex : 他之所以成功，是因为他很努力。" },
    { recto: "与其...不如... (yǔqí...bùrú...)", verso: "Plutôt que... il vaut mieux... Ex : 与其在家玩手机，不如出去运动。" },
    { recto: "逐渐 / 反而 (zhújiàn / fǎn'ér)", verso: "Peu à peu / au contraire. Ex : 他反而笑了。(Il a souri, au contraire.)" },
    { recto: "Structure d'un essai HSK 5", verso: "Thèse (我认为...) → arguments (首先, 例如) → contre-argument (也有人认为...) → synthèse (尽管如此，我依然认为...)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 尽管如此 (jǐnguǎn rúcǐ) ?",
      choix: ["Par conséquent", "Malgré cela", "Par exemple", "Quel que soit"],
      bonneReponse: 1,
      explication: "尽管如此 = malgré cela, néanmoins — sert à enchaîner deux idées sans répéter ce qui précède.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle structure exprime une condition universelle, peu importe les circonstances ?",
      choix: ["即使...也...", "无论...都...", "与其...不如...", "之所以...是因为..."],
      bonneReponse: 1,
      explication: "无论...都... = quel que soit, peu importe — exprime une condition universelle.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 即使明天下雨，我也要去。",
      reponse: "Même s'il pleut demain, j'irai quand même.",
      explication: "即使...也... introduit une hypothèse (pas encore réalisée) suivie de sa conséquence maintenue.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 反而 (fǎn'ér) ?",
      choix: ["Peu à peu", "Au contraire", "Malgré cela", "Plutôt que"],
      bonneReponse: 1,
      explication: "反而 (fǎn'ér) = au contraire, introduit un résultat inattendu.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois (caractères et pinyin) : « Quelle que soit la difficulté, je dois terminer ce projet. »",
      reponse: "无论多难，我都要完成这个项目。(Wúlùn duō nán, wǒ dōu yào wánchéng zhège xiàngmù.)",
      explication: "无论 + mot interrogatif/degré (多难) + 都 + conséquence.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la différence principale entre 虽然 et 即使 ?",
      choix: [
        "Aucune différence",
        "虽然 décrit un fait réel, 即使 introduit une hypothèse",
        "虽然 est plus soutenu que 即使",
        "即使 s'utilise seulement au passé",
      ],
      bonneReponse: 1,
      explication: "虽然 porte sur un fait avéré ; 即使 porte sur une hypothèse, parfois irréelle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Remets les mots dans l'ordre : 是因为 / 之所以 / 努力 / 他 / 成功 / 很 / 他",
      reponse: "他之所以成功，是因为他很努力。(Tā zhī suǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì.) — S'il a réussi, c'est parce qu'il a beaucoup travaillé.",
      explication: "之所以 + résultat, 是因为 + cause : ordre inversé par rapport à 因为...所以...",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement 与其...不如... ?",
      choix: [
        "与其在家玩手机，不如出去运动。",
        "不如在家玩手机，与其出去运动。",
        "与其出去运动，也在家玩手机。",
        "与其不如在家玩手机出去运动。",
      ],
      bonneReponse: 0,
      explication: "与其 introduit l'option écartée, 不如 introduit l'option jugée meilleure.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 尽管学汉语一开始很难，但是他逐渐进步了，他之所以能坚持下来，是因为他对中国文化真的很感兴趣。",
      reponse:
        "Bien qu'apprendre le chinois ait été très difficile au début, il a progressé peu à peu ; s'il a pu tenir bon, c'est parce qu'il s'intéresse vraiment à la culture chinoise.",
      explication: "尽管...但是... (concession soutenue), 逐渐 (peu à peu), 之所以...是因为... (cause mise en valeur).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige une phrase de contre-argument en chinois pour un essai sur les réseaux sociaux, en utilisant 也有人认为.",
      reponse: "当然，也有人认为社交网络让我们跟朋友的联系更方便。(Dāngrán, yě yǒu rén rènwéi shèjiāo wǎngluò ràng wǒmen gēn péngyou de liánxì gèng fāngbiàn.)",
      explication: "当然，也有人认为... est la formule standard pour introduire un contre-argument dans un essai.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase de synthèse conclut le mieux un essai après un contre-argument ?",
      choix: [
        "首先，我认为运动很重要。",
        "例如，跑步对身体很好。",
        "尽管如此，我依然认为应该多运动。",
        "无论多难，我都要运动。",
      ],
      bonneReponse: 2,
      explication: "尽管如此，我依然认为... reprend le contre-argument tout en réaffirmant sa thèse : structure de synthèse typique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris en pinyin avec les tons corrects : 与其花太多时间玩手机，不如多花时间读书，这样我们才能逐渐进步。",
      reponse: "Yǔqí huā tài duō shíjiān wán shǒujī, bùrú duō huā shíjiān dúshū, zhèyàng wǒmen cái néng zhújiàn jìnbù.",
      explication: "与其 yǔqí (3e+2e), 不如 bùrú (4e+2e), 逐渐 zhújiàn (2e+4e), 进步 jìnbù (4e+4e).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "尽管...但是... est une version plus soutenue de quelle structure ?",
      choix: ["因为...所以...", "虽然...但是...", "无论...都...", "与其...不如..."],
      bonneReponse: 1,
      explication: "尽管...但是... et 虽然...但是... expriment tous deux la concession ; 尽管 est plus soutenu.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que veut dire 逐渐 (zhújiàn) ?",
      reponse: "Peu à peu, graduellement.",
      explication: "逐渐 décrit une évolution progressive et mesurée, plus précise que 越来越.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « S'il a réussi, c'est parce qu'il a beaucoup travaillé. »",
      reponse: "他之所以成功，是因为他很努力。(Tā zhī suǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì.)",
      explication: "之所以...是因为... met en avant le résultat avant d'expliquer la cause.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment introduit-on un contre-argument dans un essai ?",
      choix: ["首先...", "当然，也有人认为...", "总之...", "关于..."],
      bonneReponse: 1,
      explication: "当然，也有人认为... introduit une opinion différente avant la synthèse finale.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelles sont les trois grandes étapes d'un essai argumenté complet de niveau HSK 5 ?",
      reponse: "Présenter sa thèse avec des arguments, envisager un contre-argument, puis conclure par une synthèse nuancée qui réaffirme son avis.",
      explication: "Cette structure en trois temps montre une pensée nuancée, valorisée à l'écrit du HSK 5.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Vers le HSK 5, compréhension fine et essais",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 即使 (jíshǐ) ?",
          choix: ["Bien que (fait réel)", "Même si (hypothèse)", "Peu importe", "Au contraire"],
          bonneReponse: 1,
          explication: "即使 introduit une hypothèse, parfois irréelle, contrairement à 虽然 qui décrit un fait avéré.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en chinois : « Quel que soit le temps, il continue à courir. »",
          reponse: "无论天气怎么样，他都坚持跑步。(Wúlùn tiānqì zěnmeyàng, tā dōu jiānchí pǎobù.)",
          explication: "无论 + mot interrogatif (怎么样) + 都 + conséquence maintenue.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : 他不但没有难过，___笑了。",
          choix: ["尽管", "反而", "逐渐", "与其"],
          bonneReponse: 1,
          explication: "反而 introduit un résultat inattendu, contraire à ce qu'on aurait pu prévoir.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : 与其抱怨，不如想办法解决问题。",
          reponse: "Plutôt que de se plaindre, mieux vaut chercher un moyen de résoudre le problème.",
          explication: "与其...不如... présente la deuxième option (chercher une solution) comme préférable.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Remets dans l'ordre : 都 / 我 / 多累 / 学习 / 无论 / 要 / 继续",
          reponse: "无论多累，我都要继续学习。(Wúlùn duō lèi, wǒ dōu yào jìxù xuéxí.) — Quelle que soit ma fatigue, je dois continuer à étudier.",
          explication: "无论 + degré (多累) + 都 + conséquence (要继续学习).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige un court paragraphe argumenté en chinois (4-5 phrases) sur le sujet « faut-il apprendre plusieurs langues étrangères ? », en utilisant au moins 我认为, 当然，也有人认为 et 尽管如此.",
          reponse:
            "关于学习外语，我认为学习不止一门外语对我们很有好处。首先，这能帮助我们了解不同的文化，其次也对未来的工作很有用。当然，也有人认为学习太多语言会让人压力很大，没有时间做别的事。尽管如此，我依然认为，只要合理安排时间，学习几门外语是值得的。(Guānyú xuéxí wàiyǔ, wǒ rènwéi xuéxí bùzhǐ yì mén wàiyǔ duì wǒmen hěn yǒu hǎochù. Shǒuxiān, zhè néng bāngzhù wǒmen liǎojiě bùtóng de wénhuà, qícì yě duì wèilái de gōngzuò hěn yǒuyòng. Dāngrán, yě yǒu rén rènwéi xuéxí tài duō yǔyán huì ràng rén yālì hěn dà, méiyǒu shíjiān zuò bié de shì. Jǐnguǎn rúcǐ, wǒ yīrán rènwéi, zhǐyào hélǐ ānpái shíjiān, xuéxí jǐ mén wàiyǔ shì zhíde de.)",
          explication: "Le paragraphe suit la structure complète : thèse, arguments avec 首先/其次, contre-argument avec 当然/也有人认为, synthèse avec 尽管如此/我依然认为.",
        },
      ],
    },
    {
      titre: "Examen 2 — Vers le HSK 5, compréhension fine et essais",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 之所以...是因为... ?",
          choix: ["Plutôt que... il vaut mieux...", "La raison pour laquelle... c'est parce que...", "Malgré cela...", "Quel que soit..."],
          bonneReponse: 1,
          explication: "之所以...是因为... met en avant un résultat puis explique sa cause.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le pinyin avec les tons de 与其...不如... et sa traduction.",
          reponse: "yǔqí...bùrú... — plutôt que... il vaut mieux...",
          explication: "与 yǔ (2e ton), 其 qí (2e ton), 不 bù (4e ton, mais se prononce bú devant un 2e ton dans 不如), 如 rú (2e ton).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase illustre correctement 即使...也... ?",
          choix: [
            "即使很累，但是他继续工作。",
            "即使很累，他也继续工作。",
            "虽然很累，他也继续工作。",
            "即使很累，都继续工作。",
          ],
          bonneReponse: 1,
          explication: "即使...也... : la conséquence est introduite par 也, pas par 但是 (qui va avec 虽然/尽管).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pose une phrase de synthèse en chinois : « Malgré cela, je pense toujours que le sport est important. »",
          reponse: "尽管如此，我依然认为运动很重要。(Jǐnguǎn rúcǐ, wǒ yīrán rènwéi yùndòng hěn zhòngyào.)",
          explication: "尽管如此 + 我依然认为... est la formule type d'une synthèse après un contre-argument.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en français : 他之所以逐渐爱上了汉语，是因为他发现，即使汉字很难，学习的过程也让他越来越有成就感，与其放弃，不如坚持下去。",
          reponse:
            "S'il s'est peu à peu pris de passion pour le chinois, c'est parce qu'il a découvert que, même si les caractères chinois sont difficiles, le processus d'apprentissage lui procure un sentiment d'accomplissement de plus en plus fort ; plutôt que d'abandonner, il vaut mieux persévérer.",
          explication: "Combinaison de 之所以...是因为... (cause mise en valeur), 即使...也... (hypothèse/concession forte), 与其...不如... (comparaison de choix).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige un court paragraphe argumenté en chinois (4-5 phrases) sur le sujet « les devoirs à la maison sont-ils utiles ? », en utilisant au moins 无论...都..., 当然，也有人认为 et 尽管如此.",
          reponse:
            "关于家庭作业，我认为它对学习很有帮助。无论作业多不多，只要认真做，都能帮助我们复习课堂上学过的内容。当然，也有人认为作业太多会让学生压力很大，没有时间休息。尽管如此，我依然认为，适量的作业是必要的，因为它能让我们逐渐掌握知识。(Guānyú jiātíng zuòyè, wǒ rènwéi tā duì xuéxí hěn yǒu bāngzhù. Wúlùn zuòyè duō bu duō, zhǐyào rènzhēn zuò, dōu néng bāngzhù wǒmen fùxí kètáng shàng xué guo de nèiróng. Dāngrán, yě yǒu rén rènwéi zuòyè tài duō huì ràng xuésheng yālì hěn dà, méiyǒu shíjiān xiūxi. Jǐnguǎn rúcǐ, wǒ yīrán rènwéi, shìliàng de zuòyè shì bìyào de, yīnwèi tā néng ràng wǒmen zhújiàn zhǎngwò zhīshi.)",
          explication: "Essai complet utilisant 无论...都... (condition universelle), le contre-argument standard, et une synthèse avec 尽管如此 et 逐渐.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "尽管...但是... (soutenu) ≈ 虽然...但是... ; l'expression figée 尽管如此 (malgré cela) enchaîne deux phrases sans répétition.",
    "无论...都... : condition universelle, souvent avec un mot interrogatif (什么, 谁, 多) + 都 obligatoire.",
    "即使...也... : hypothèse, parfois irréelle — à distinguer de 虽然, qui porte sur un fait avéré.",
    "之所以...是因为... : inverse l'ordre habituel (résultat d'abord, cause ensuite) pour mettre en valeur l'explication.",
    "与其...不如... : compare deux options, la seconde (après 不如) étant présentée comme la meilleure.",
    "Un essai de niveau HSK 5 réussi présente une thèse, envisage un contre-argument (也有人认为...), puis conclut par une synthèse nuancée (尽管如此，我依然认为...).",
  ],
},
{
  slug: "hsk3-comparaison",
  titre: "HSK 3 — La comparaison (比) et le complément d'état",
  matiere: "chinois",
  niveau: "4eme",
  langueVoix: "zh-CN",
  description:
    "Comparer deux éléments avec 比 (A 比 B + adjectif), préciser une différence (一点儿, 得多), exprimer l'égalité (跟/和...一样) et l'infériorité (没有), décrire la manière d'une action avec le complément d'état (verbe + 得 + adjectif) et exprimer une évolution avec 越来越, avec le vocabulaire HSK 3.",
  objectifs: [
    "Comparer deux éléments avec 比 : A 比 B + adjectif",
    "Préciser l'écart de la comparaison : 一点儿, 得多, 多了",
    "Exprimer l'égalité (跟/和...一样) et l'infériorité (没有)",
    "Décrire la manière d'une action avec le complément d'état : verbe + 得 + adjectif",
    "Exprimer une évolution progressive avec 越来越",
  ],
  slides: [
    {
      titre: "La comparaison de base : 比",
      illustration: "⚖️",
      visuel: "A 比 B + adjectif",
      contenu: [
        "比 (bǐ) : comparé à, plus que",
        "今天比昨天热。 : Aujourd'hui il fait plus chaud qu'hier.",
        "我哥哥比我高。 : Mon grand frère est plus grand que moi.",
        "Structure : A + 比 + B + adjectif (sans 很 devant l'adjectif)",
      ],
      voixOff:
        "Pour comparer deux éléments en chinois, on utilise le mot bǐ, qui signifie « comparé à ». La structure est simple : A, bǐ, B, puis l'adjectif. Jīntiān bǐ zuótiān rè, aujourd'hui il fait plus chaud qu'hier. Wǒ gēge bǐ wǒ gāo, mon grand frère est plus grand que moi. Attention, on ne met jamais hěn devant l'adjectif dans une phrase avec bǐ.",
    },
    {
      titre: "Préciser l'écart : 一点儿 / 得多",
      illustration: "📏",
      visuel: "A 比 B + adj + 一点儿 / 得多",
      contenu: [
        "一点儿 (yìdiǎnr) : un peu — petit écart",
        "得多 (de duō) / 多了 (duō le) : beaucoup — grand écart",
        "我比你大一点儿。 : Je suis un peu plus âgé que toi.",
        "这个比那个贵得多。 : Celui-ci est beaucoup plus cher que celui-là.",
      ],
      voixOff:
        "On peut préciser l'ampleur de la différence après l'adjectif. Yìdiǎnr, un peu, indique un petit écart : wǒ bǐ nǐ dà yìdiǎnr, je suis un peu plus âgé que toi. Pour un grand écart, on ajoute de duō ou duō le, beaucoup : zhège bǐ nàge guì de duō, celui-ci est beaucoup plus cher que celui-là. Ces compléments se placent toujours après l'adjectif.",
    },
    {
      titre: "L'infériorité : 没有",
      illustration: "📉",
      visuel: "A 没有 B + adjectif (那么/这么)",
      contenu: [
        "没有 (méiyǒu) : ne pas atteindre, ne pas être aussi... que",
        "我没有我哥哥高。 : Je ne suis pas aussi grand que mon frère.",
        "这个城市没有北京那么大。 : Cette ville n'est pas aussi grande que Pékin.",
        "那么 (nàme) renforce la comparaison : « aussi... que ça »",
      ],
      voixOff:
        "Pour exprimer qu'un élément est inférieur à un autre, on peut utiliser méiyǒu, littéralement « ne pas avoir », au sens de « ne pas atteindre le niveau de ». Wǒ méiyǒu wǒ gēge gāo, je ne suis pas aussi grand que mon frère. On ajoute souvent nàme avant l'adjectif pour renforcer : zhège chéngshì méiyǒu Běijīng nàme dà, cette ville n'est pas aussi grande que Pékin.",
    },
    {
      titre: "L'égalité : 跟/和...一样",
      illustration: "🟰",
      visuel: "A 跟 B 一样 (+ adjectif)",
      contenu: [
        "跟 (gēn) / 和 (hé) : avec, et",
        "一样 (yíyàng) : pareil, identique",
        "我的书包跟你的一样。 : Mon cartable est identique au tien.",
        "他跟我一样高。 : Il est aussi grand que moi.",
      ],
      voixOff:
        "Pour exprimer l'égalité entre deux éléments, on utilise gēn ou hé, suivis de yíyàng, « pareil ». Wǒ de shūbāo gēn nǐ de yíyàng, mon cartable est identique au tien. Si l'on veut préciser en quoi les deux éléments sont égaux, on ajoute un adjectif après yíyàng : tā gēn wǒ yíyàng gāo, il est aussi grand que moi.",
    },
    {
      titre: "Le complément d'état : verbe + 得 + adjectif",
      illustration: "🏃",
      visuel: "他跑得很快。",
      contenu: [
        "得 (de) : particule introduisant le complément d'état",
        "Structure : verbe + 得 + (很/太/非常) + adjectif",
        "他跑得很快。 : Il court vite.",
        "她说得很好。 : Elle parle très bien.",
      ],
      voixOff:
        "Le complément d'état décrit la manière dont se déroule une action : on place la particule de après le verbe, puis un adjectif. Tā pǎo de hěn kuài, il court vite. Tā shuō de hěn hǎo, elle parle très bien. Attention, ce de, écrit 得, est différent du de possessif 的 et du de verbal 地 : ne les confonds pas à l'écrit !",
    },
    {
      titre: "Complément d'état avec un objet",
      illustration: "🗣️",
      visuel: "他说汉语说得很好。",
      contenu: [
        "Verbe + objet + verbe (répété) + 得 + adjectif",
        "他说汉语说得很好。 : Il parle très bien chinois.",
        "我打篮球打得不太好。 : Je ne joue pas très bien au basket.",
        "Le verbe se répète quand il y a un objet direct",
      ],
      voixOff:
        "Quand le verbe a un objet direct, comme parler chinois ou jouer au basket, il faut répéter le verbe avant le complément d'état. Tā shuō Hànyǔ shuō de hěn hǎo, il parle très bien chinois : shuō apparaît deux fois, une fois avec l'objet Hànyǔ, une fois avec de hěn hǎo. Wǒ dǎ lánqiú dǎ de bú tài hǎo, je ne joue pas très bien au basket.",
    },
    {
      titre: "L'évolution : 越来越",
      illustration: "📈",
      visuel: "天气越来越冷了。",
      contenu: [
        "越来越 (yuè lái yuè) : de plus en plus",
        "天气越来越冷了。 : Il fait de plus en plus froid.",
        "他的汉语越来越好了。 : Son chinois est de plus en plus bon.",
        "了 en fin de phrase confirme le changement en cours",
      ],
      voixOff:
        "Pour exprimer une évolution progressive, on utilise yuè lái yuè, « de plus en plus », suivi d'un adjectif. Tiānqì yuè lái yuè lěng le, il fait de plus en plus froid. Tā de Hànyǔ yuè lái yuè hǎo le, son chinois est de plus en plus bon. Le le final indique que le changement est en train de se produire, qu'il est déjà bien engagé.",
    },
    {
      titre: "Dialogue : comparer deux villes",
      illustration: "💬",
      visuel: "上海比北京大吗？— 上海没有北京那么大，可是人更多。",
      contenu: [
        "— 上海比北京大吗？ (Shanghai est-elle plus grande que Pékin ?)",
        "— 上海没有北京那么大，可是人口比北京多。 (Shanghai n'est pas aussi grande que Pékin, mais sa population est plus nombreuse.)",
        "— 那儿的天气怎么样？ (Comment est le temps là-bas ?)",
        "— 上海的天气跟北京不太一样，冬天没有那么冷。 (Le climat de Shanghai est assez différent de celui de Pékin, l'hiver n'y est pas aussi froid.)",
      ],
      voixOff:
        "Voici un dialogue qui compare deux villes chinoises. Shànghǎi bǐ Běijīng dà ma, Shanghai est-elle plus grande que Pékin ? Réponse : Shànghǎi méiyǒu Běijīng nàme dà, kěshì rénkǒu bǐ Běijīng duō, Shanghai n'est pas aussi grande que Pékin, mais sa population est plus nombreuse. On compare ensuite le climat : bù tài yíyàng, pas tout à fait pareil.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "A 比 B + adjectif (sans 很) ; écart : 一点儿 (petit) / 得多 (grand)",
        "Infériorité : A 没有 B (那么) + adjectif ; égalité : A 跟/和 B 一样",
        "Complément d'état : verbe + 得 + adjectif ; avec objet : verbe+objet+verbe+得+adj",
        "越来越 + adjectif + 了 : évolution progressive « de plus en plus »",
      ],
      voixOff:
        "Récapitulons. La comparaison de supériorité se construit avec A bǐ B suivi de l'adjectif, sans hěn, et on précise l'écart avec yìdiǎnr ou de duō. L'infériorité s'exprime avec méiyǒu, l'égalité avec gēn ou hé suivi de yíyàng. Le complément d'état, verbe suivi de de puis d'un adjectif, décrit la manière d'agir, et le verbe se répète s'il y a un objet direct. Enfin, yuè lái yuè exprime une évolution progressive.",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre regroupe deux points de grammaire essentiels du HSK 3 : la comparaison avec 比 (supériorité, infériorité, égalité, écart) et le complément d'état avec 得, qui décrit la manière dont se déroule une action.",
    sections: [
      {
        titre: "La comparaison de supériorité : 比",
        points: [
          "A + 比 + B + adjectif (jamais de 很 devant l'adjectif) : 今天比昨天热",
          "Préciser l'écart : + 一点儿 (un peu) ou + 得多 / 多了 (beaucoup)",
          "我比你大一点儿。 / 这个比那个贵得多。",
        ],
      },
      {
        titre: "Infériorité et égalité",
        points: [
          "A + 没有 + B + (那么) + adjectif : infériorité — 我没有我哥哥高",
          "A + 跟/和 + B + 一样 (+ adjectif) : égalité — 他跟我一样高",
          "跟/和...不一样 : différent de...",
        ],
      },
      {
        titre: "Le complément d'état : verbe + 得 + adjectif",
        points: [
          "Verbe + 得 + (很/太/非常) + adjectif décrit la manière : 他跑得很快",
          "Avec un objet direct, on répète le verbe : 他说汉语说得很好",
          "Ne pas confondre 得 (complément d'état), 的 (possessif) et 地 (adverbial)",
        ],
      },
      {
        titre: "L'évolution : 越来越",
        points: [
          "越来越 + adjectif + 了 : de plus en plus... — 天气越来越冷了",
          "越...越... : plus... plus... (structure parallèle) — 他越说越快",
        ],
      },
    ],
    audio:
      "Fiche de révision : la comparaison et le complément d'état, niveau HSK 3. Pour comparer deux éléments, on utilise bǐ : A bǐ B, suivi de l'adjectif, sans jamais mettre hěn devant l'adjectif. On précise l'écart avec yìdiǎnr pour un petit écart, ou de duō pour un grand écart. Pour l'infériorité, on utilise méiyǒu : A méiyǒu B, éventuellement suivi de nàme, puis l'adjectif. Pour l'égalité, on utilise gēn ou hé suivi de yíyàng. Le complément d'état décrit la manière dont se déroule une action : verbe, puis la particule de, puis un adjectif, comme tā pǎo de hěn kuài, il court vite. Si le verbe a un objet direct, il faut le répéter avant le complément d'état. Enfin, yuè lái yuè, suivi d'un adjectif et de le, exprime une évolution progressive : de plus en plus.",
  },
  memoCards: [
    { recto: "A 比 B + adj (bǐ)", verso: "A est plus... que B. Ex : 今天比昨天热。(Aujourd'hui il fait plus chaud qu'hier.) Jamais de 很 devant l'adjectif." },
    { recto: "+ 一点儿 / + 得多", verso: "Petit écart / grand écart après l'adjectif. Ex : 我比你大一点儿 (un peu plus âgé) ; 这个比那个贵得多 (beaucoup plus cher)." },
    { recto: "A 没有 B (那么) + adj (méiyǒu)", verso: "A n'est pas aussi... que B. Ex : 我没有我哥哥高。(Je ne suis pas aussi grand que mon frère.)" },
    { recto: "A 跟/和 B 一样 (gēn/hé...yíyàng)", verso: "A est identique à B. Ex : 他跟我一样高。(Il est aussi grand que moi.)" },
    { recto: "verbe + 得 + adj (complément d'état)", verso: "Décrit la manière d'agir. Ex : 他跑得很快。(Il court vite.) 她说得很好。(Elle parle très bien.)" },
    { recto: "verbe+objet+verbe+得+adj", verso: "Avec un objet direct, on répète le verbe. Ex : 他说汉语说得很好。(Il parle très bien chinois.)" },
    { recto: "越来越 + adj + 了 (yuè lái yuè)", verso: "De plus en plus... Ex : 天气越来越冷了。(Il fait de plus en plus froid.)" },
    { recto: "越...越... (yuè...yuè...)", verso: "Plus... plus... Ex : 他越说越快。(Il parle de plus en plus vite.)" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment traduire « Mon frère est plus grand que moi » ?",
      choix: ["我哥哥很高我。", "我哥哥比我高。", "我哥哥高比我。", "我哥哥一样我高。"],
      bonneReponse: 1,
      explication: "Structure A 比 B + adjectif : 我哥哥比我高。",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle particule introduit le complément d'état ?",
      choix: ["的", "地", "得", "了"],
      bonneReponse: 2,
      explication: "得 (de) introduit le complément d'état : verbe + 得 + adjectif.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 她跑得很快。",
      reponse: "Elle court vite.",
      explication: "跑 (courir) + 得 + 很快 (vite) : complément d'état de manière.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « de plus en plus » ?",
      choix: ["一样", "得多", "越来越", "那么"],
      bonneReponse: 2,
      explication: "越来越 (yuè lái yuè) = de plus en plus.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois (caractères et pinyin) : « Cette ville n'est pas aussi grande que Pékin. »",
      reponse: "这个城市没有北京那么大。(Zhège chéngshì méiyǒu Běijīng nàme dà.)",
      explication: "Infériorité : A + 没有 + B + 那么 + adjectif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète avec le complément d'état correct : 他说汉语___很好。",
      choix: ["说得", "得说", "很说", "说很"],
      bonneReponse: 0,
      explication: "Avec un objet direct (汉语), le verbe se répète : 说汉语说得很好.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Remets les mots dans l'ordre : 一点儿 / 比 / 你 / 大 / 我",
      reponse: "我比你大一点儿。(Wǒ bǐ nǐ dà yìdiǎnr.) — Je suis un peu plus âgé que toi.",
      explication: "A 比 B + adjectif + 一点儿 pour préciser un petit écart.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase exprime l'égalité ?",
      choix: ["他比我高。", "他没有我高。", "他跟我一样高。", "他越来越高。"],
      bonneReponse: 2,
      explication: "跟...一样 exprime l'égalité : 他跟我一样高 (il est aussi grand que moi).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 我弟弟打篮球打得比我好得多，可是他没有我跑得快。",
      reponse: "Mon petit frère joue au basket beaucoup mieux que moi, mais il ne court pas aussi vite que moi.",
      explication: "打篮球打得比我好得多 combine complément d'état et comparaison avec grand écart ; 没有...跑得快 = infériorité sur le complément d'état.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en chinois : « Son chinois est de plus en plus bon, il parle de plus en plus vite. »",
      reponse: "他的汉语越来越好了，他说得越来越快。(Tā de Hànyǔ yuè lái yuè hǎo le, tā shuō de yuè lái yuè kuài.)",
      explication: "越来越 + adjectif + 了 pour l'évolution ; on peut aussi l'utiliser après 得 dans un complément d'état.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est INCORRECTE ?",
      choix: [
        "今天比昨天很热。",
        "今天比昨天热。",
        "今天比昨天热一点儿。",
        "今天比昨天热得多。",
      ],
      bonneReponse: 0,
      explication: "On ne met jamais 很 devant l'adjectif dans une phrase avec 比 : « 今天比昨天很热 » est incorrect.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris en pinyin avec les tons corrects : 他跟我一样高，可是他跑得比我快得多。",
      reponse: "Tā gēn wǒ yíyàng gāo, kěshì tā pǎo de bǐ wǒ kuài de duō.",
      explication: "跟 gēn (1er ton), 一样 yíyàng (2e+4e ton), 跑 pǎo (3e ton), 快 kuài (4e ton), 得多 de duō.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « A 比 B + adjectif », peut-on mettre 很 devant l'adjectif ?",
      choix: ["Oui, toujours", "Non, jamais", "Seulement à l'écrit", "Seulement au passé"],
      bonneReponse: 1,
      explication: "很 ne s'utilise jamais devant l'adjectif dans une phrase de comparaison avec 比.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que veut dire 一样 (yíyàng) ?",
      reponse: "Pareil, identique.",
      explication: "跟/和...一样 exprime l'égalité entre deux éléments.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Il ne parle pas aussi bien chinois que moi. »",
      reponse: "他说汉语说得没有我好。(Tā shuō Hànyǔ shuō de méiyǒu wǒ hǎo.)",
      explication: "On combine complément d'état (说得) et infériorité (没有) : verbe+得+没有+comparé+adjectif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que signifie 得多 (de duō) après un adjectif de comparaison ?",
      choix: ["Un petit écart", "Un grand écart", "Une égalité", "Une évolution"],
      bonneReponse: 1,
      explication: "得多 / 多了 indiquent un grand écart entre les deux éléments comparés.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre 得 dans le complément d'état et 的 possessif.",
      reponse:
        "得 (de) suit un verbe et introduit une description de la manière d'agir (verbe + 得 + adjectif) ; 的 (de) suit un nom ou un pronom et marque la possession ou la relation (我的书).",
      explication: "Les trois « de » (得, 的, 地) se prononcent pareil mais ont des fonctions grammaticales différentes.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La comparaison et le complément d'état",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « aussi grand que » (égalité) ?",
          choix: ["比...高", "没有...高", "跟...一样高", "越来越高"],
          bonneReponse: 2,
          explication: "跟/和...一样 (+ adjectif) exprime l'égalité.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en chinois : « Elle parle très bien. »",
          reponse: "她说得很好。(Tā shuō de hěn hǎo.)",
          explication: "Complément d'état : verbe (说) + 得 + adjectif (很好).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : 我妹妹___我高一点儿。",
          choix: ["跟", "比", "没有", "越"],
          bonneReponse: 1,
          explication: "Comparaison de supériorité : A 比 B + adjectif + 一点儿.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : 这个手机没有那个贵，可是没有那个好用。",
          reponse: "Ce téléphone n'est pas aussi cher que celui-là, mais il n'est pas aussi pratique que celui-là.",
          explication: "没有...+adjectif exprime l'infériorité, répétée ici pour deux qualités différentes.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Remets dans l'ordre : 快 / 越来越 / 说 / 他 / 了",
          reponse: "他说得越来越快了。(Tā shuō de yuè lái yuè kuài le.) — Il parle de plus en plus vite.",
          explication: "越来越 peut s'insérer dans un complément d'état : verbe + 得 + 越来越 + adjectif + 了.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige deux phrases en chinois : (1) « Cette voiture est beaucoup more chère que celle-là. » (2) « Il joue au football aussi bien que son frère. »",
          reponse:
            "(1) 这辆车比那辆贵得多。(Zhè liàng chē bǐ nà liàng guì de duō.) (2) 他踢足球踢得跟他哥哥一样好。(Tā tī zúqiú tī de gēn tā gēge yíyàng hǎo.)",
          explication: "比+adjectif+得多 pour un grand écart ; verbe répété + 得 + 跟...一样 + adjectif pour une égalité de manière.",
        },
      ],
    },
    {
      titre: "Examen 2 — La comparaison et le complément d'état",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 越来越 (yuè lái yuè) ?",
          choix: ["Pareil que", "De plus en plus", "Un peu moins", "Beaucoup plus"],
          bonneReponse: 1,
          explication: "越来越 + adjectif exprime une évolution progressive : de plus en plus.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le pinyin avec les tons de 一样 et sa traduction.",
          reponse: "yíyàng — pareil, identique",
          explication: "一 yī (se prononce yí devant un 4e ton), 样 yàng (4e ton).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase décrit correctement la manière de jouer au basket, avec un objet direct ?",
          choix: [
            "他打篮球得很好。",
            "他打得篮球很好。",
            "他打篮球打得很好。",
            "他很好打篮球得。",
          ],
          bonneReponse: 2,
          explication: "Avec un objet direct, le verbe se répète : 打篮球打得很好.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pose la question en chinois : « Est-ce que Shanghai est aussi grande que Pékin ? »",
          reponse: "上海跟北京一样大吗？(Shànghǎi gēn Běijīng yíyàng dà ma?)",
          explication: "跟...一样 + adjectif + 吗 pour interroger sur une égalité.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en français : 他学汉语学得越来越好，他说得比我快得多，可是他写字写得没有我好看。",
          reponse:
            "Il apprend le chinois de mieux en mieux, il parle beaucoup plus vite que moi, mais son écriture n'est pas aussi belle que la mienne.",
          explication: "Trois structures combinées : 越来越 (évolution), 比...得多 (grand écart), 没有...好看 (infériorité).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Écris un mini-dialogue de deux répliques en chinois : demande à un ami si son nouveau vélo est plus cher que le tien, puis fais-le répondre qu'il n'est pas aussi cher, mais qu'il est beaucoup plus pratique (好用).",
          reponse:
            "— 你的新自行车比我的贵吗？(Nǐ de xīn zìxíngchē bǐ wǒ de guì ma?) — 没有你的贵，可是好用得多。(Méiyǒu nǐ de guì, kěshì hǎoyòng de duō.)",
          explication: "比...吗 pour interroger sur la supériorité ; 没有...贵 pour l'infériorité ; +得多 pour un grand écart.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Comparaison de supériorité : A 比 B + adjectif, jamais de 很 devant l'adjectif ; écart : + 一点儿 (petit) ou + 得多/多了 (grand).",
    "Infériorité : A 没有 B (那么) + adjectif ; égalité : A 跟/和 B 一样 (+ adjectif).",
    "Complément d'état : verbe + 得 + adjectif décrit la manière d'agir : 他跑得很快.",
    "Avec un objet direct, le verbe se répète : verbe + objet + verbe + 得 + adjectif (他说汉语说得很好).",
    "越来越 + adjectif + 了 : évolution progressive, « de plus en plus » ; 越...越... : structure parallèle « plus... plus... ».",
    "Ne pas confondre les trois « de » : 得 (complément d'état, après verbe), 的 (possessif, après nom), 地 (adverbial, avant verbe).",
  ],
},
{
  slug: "hsk3-sentiments",
  titre: "HSK 3 — Exprimer sentiments et opinions",
  matiere: "chinois",
  niveau: "4eme",
  langueVoix: "zh-CN",
  description:
    "Nommer les émotions (高兴, 难过, 生气, 害怕, 担心), donner son avis avec 觉得 et 认为, exprimer l'accord ou le désaccord (同意/不同意), nuancer l'intensité d'un sentiment (有点儿, 很, 非常, 太...了) et relier cause et conséquence avec 因为...所以... et le verbe causatif 让, avec le vocabulaire HSK 3.",
  objectifs: [
    "Nommer les émotions courantes : 高兴, 难过, 生气, 害怕, 担心",
    "Donner son avis avec 觉得 (juéde) et 认为 (rènwéi)",
    "Exprimer l'accord ou le désaccord : 同意 / 不同意",
    "Nuancer l'intensité d'un sentiment : 有点儿, 很, 非常, 特别, 太...了",
    "Relier une cause à sa conséquence avec 因为...所以... et le verbe 让",
  ],
  slides: [
    {
      titre: "Les émotions de base",
      illustration: "😊",
      visuel: "高兴 (gāoxìng) · 难过 (nánguò)",
      contenu: [
        "高兴 (gāoxìng) : content, joyeux",
        "难过 (nánguò) : triste, avoir de la peine",
        "生气 (shēngqì) : en colère, fâché",
        "害怕 (hàipà) : avoir peur ; 担心 (dānxīn) : s'inquiéter",
      ],
      voixOff:
        "Pour parler de nos émotions en chinois, voici cinq adjectifs essentiels. Gāoxìng signifie content, joyeux. Nánguò décrit la tristesse, la peine. Shēngqì, c'est être en colère, fâché. Hàipà signifie avoir peur, et dānxīn veut dire s'inquiéter. Ces mots fonctionnent comme des adjectifs : on peut dire wǒ hěn gāoxìng, je suis très content.",
    },
    {
      titre: "Donner son avis : 觉得 et 认为",
      illustration: "💭",
      visuel: "我觉得... (wǒ juéde...) · 我认为... (wǒ rènwéi...)",
      contenu: [
        "觉得 (juéde) : trouver que, avoir l'impression que (avis personnel, courant à l'oral)",
        "认为 (rènwéi) : considérer que, estimer que (avis plus affirmé, soutenu)",
        "我觉得这本书很有意思。 : Je trouve ce livre très intéressant.",
        "我认为他说得对。 : Je considère qu'il a raison.",
      ],
      voixOff:
        "Pour donner son avis, le chinois utilise surtout deux verbes. Juéde, trouver que, exprime une impression personnelle et s'emploie beaucoup à l'oral : wǒ juéde zhè běn shū hěn yǒu yìsi, je trouve ce livre très intéressant. Rènwéi, considérer que, exprime une opinion plus ferme, plus argumentée : wǒ rènwéi tā shuō de duì, je considère qu'il a raison.",
    },
    {
      titre: "Être d'accord ou pas d'accord",
      illustration: "🤝",
      visuel: "同意 (tóngyì) / 不同意 (bù tóngyì)",
      contenu: [
        "同意 (tóngyì) : être d'accord",
        "不同意 (bù tóngyì) : ne pas être d'accord",
        "看法 (kànfǎ) : point de vue, opinion",
        "我同意你的看法。 : Je suis d'accord avec ton point de vue.",
      ],
      voixOff:
        "Tóngyì signifie être d'accord ; pour dire le contraire, on ajoute simplement bù devant : bù tóngyì, ne pas être d'accord. Le mot kànfǎ désigne un point de vue, une opinion. On peut donc dire wǒ tóngyì nǐ de kànfǎ, je suis d'accord avec ton point de vue, ou wǒ bù tóngyì, je ne suis pas d'accord.",
    },
    {
      titre: "Aimer, détester, s'intéresser à",
      illustration: "❤️",
      visuel: "对...感兴趣 (duì...gǎn xìngqù)",
      contenu: [
        "喜欢 (xǐhuan) : aimer",
        "讨厌 (tǎoyàn) : détester",
        "对...感兴趣 (duì...gǎn xìngqù) : s'intéresser à...",
        "我对中国历史很感兴趣。 : Je m'intéresse beaucoup à l'histoire chinoise.",
      ],
      voixOff:
        "Xǐhuan veut dire aimer, et son contraire, tǎoyàn, signifie détester. Pour dire qu'on s'intéresse à quelque chose, on utilise la structure duì... gǎn xìngqù, littéralement « envers... ressentir de l'intérêt » : wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù, je m'intéresse beaucoup à l'histoire chinoise. Le mot qui suit duì est toujours le sujet de l'intérêt.",
    },
    {
      titre: "Nuancer l'intensité",
      illustration: "📊",
      visuel: "有点儿 < 很 < 非常 / 特别 < 太...了",
      contenu: [
        "有点儿 (yǒudiǎnr) : un peu (souvent négatif ou gênant)",
        "很 (hěn) : assez, très (neutre, presque obligatoire avec un adjectif seul)",
        "非常 (fēicháng) / 特别 (tèbié) : extrêmement, particulièrement",
        "太...了 (tài...le) : trop... (ton exclamatif)",
      ],
      voixOff:
        "Pour doser l'intensité d'un sentiment, on dispose de plusieurs adverbes, du plus faible au plus fort. Yǒudiǎnr, un peu, introduit souvent une nuance négative ou gênante : wǒ yǒudiǎnr dānxīn, je suis un peu inquiet. Hěn, très, est presque obligatoire devant un adjectif seul. Fēicháng et tèbié renforcent encore le sentiment. Enfin, tài... le, trop, a une valeur exclamative : tài hǎo le, c'est vraiment trop bien !",
    },
    {
      titre: "Exprimer la cause : 因为...所以...",
      illustration: "🔗",
      visuel: "因为...，所以...。",
      contenu: [
        "因为 (yīnwèi) : parce que ; 所以 (suǒyǐ) : donc, par conséquent",
        "因为下雨，所以我很难过。 : Parce qu'il pleut, je suis triste.",
        "On peut n'utiliser qu'un seul des deux mots dans une phrase",
        "因为 introduit la cause, 所以 introduit la conséquence",
      ],
      voixOff:
        "La structure yīnwèi... suǒyǐ... relie une cause à sa conséquence : yīnwèi introduit la cause, parce que, et suǒyǐ introduit le résultat, donc. Yīnwèi xiàyǔ, suǒyǐ wǒ hěn nánguò : parce qu'il pleut, je suis triste. À l'oral, on omet souvent l'un des deux mots, mais il est utile de bien connaître la structure complète.",
    },
    {
      titre: "Le verbe causatif 让",
      illustration: "🎭",
      visuel: "这件事让我很生气。",
      contenu: [
        "让 (ràng) : faire que, rendre (quelqu'un dans un état)",
        "Structure : cause + 让 + personne + adjectif/verbe",
        "这件事让我很生气。 : Cette affaire me met très en colère.",
        "你的话让我很高兴。 : Tes paroles me rendent très content.",
      ],
      voixOff:
        "Le verbe ràng exprime l'idée de « faire que », « rendre » : une cause ràng une personne ressent un sentiment. Zhè jiàn shì ràng wǒ hěn shēngqì, cette affaire me met très en colère. Nǐ de huà ràng wǒ hěn gāoxìng, tes paroles me rendent très content. Remarque l'ordre : la cause est toujours en tête de phrase, avant ràng.",
    },
    {
      titre: "Dialogue : donner son avis",
      illustration: "💬",
      visuel: "你觉得这部电影怎么样？— 我觉得很有意思。",
      contenu: [
        "— 你觉得这部电影怎么样？ (Que penses-tu de ce film ?)",
        "— 我觉得很有意思，可是有点儿长。 (Je le trouve très intéressant, mais un peu long.)",
        "— 我不同意，我觉得太长了！ (Je ne suis pas d'accord, je le trouve trop long !)",
        "— 好吧，你说得也对。 (D'accord, tu as raison aussi.)",
      ],
      voixOff:
        "Voici un dialogue typique. On demande : nǐ juéde zhè bù diànyǐng zěnmeyàng, que penses-tu de ce film ? Réponse : wǒ juéde hěn yǒu yìsi, kěshì yǒudiǎnr cháng, je le trouve très intéressant, mais un peu long. L'autre personne exprime son désaccord : wǒ bù tóngyì, wǒ juéde tài cháng le, je ne suis pas d'accord, je le trouve trop long ! Puis elle cède un peu : nǐ shuō de yě duì, tu as raison aussi.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Émotions : 高兴, 难过, 生气, 害怕, 担心",
        "Avis : 觉得 (oral) / 认为 (soutenu) ; accord : 同意 / 不同意",
        "Intensité : 有点儿 < 很 < 非常/特别 < 太...了",
        "Cause et conséquence : 因为...所以... ; verbe causatif 让",
      ],
      voixOff:
        "Résumons ce chapitre. Les émotions de base sont gāoxìng, nánguò, shēngqì, hàipà et dānxīn. Pour donner son avis, on utilise juéde à l'oral et rènwéi dans un registre plus soutenu, et on exprime l'accord avec tóngyì, le désaccord avec bù tóngyì. L'intensité se règle avec yǒudiǎnr, hěn, fēicháng, tèbié et tài... le. Enfin, yīnwèi... suǒyǐ... relie cause et conséquence, et ràng exprime qu'une cause fait naître un sentiment chez quelqu'un.",
    },
  ],
  fiche: {
    intro:
      "Exprimer un sentiment ou une opinion en chinois demande de connaître le vocabulaire des émotions, les verbes d'opinion 觉得/认为, les moyens de nuancer l'intensité, et les structures qui relient cause et conséquence (因为...所以..., 让).",
    sections: [
      {
        titre: "Les émotions",
        points: [
          "高兴 (gāoxìng) content ; 难过 (nánguò) triste ; 生气 (shēngqì) en colère",
          "害怕 (hàipà) avoir peur ; 担心 (dānxīn) s'inquiéter",
          "Ces mots fonctionnent comme des adjectifs : 我很高兴 (je suis très content)",
        ],
      },
      {
        titre: "Donner son avis, être d'accord",
        points: [
          "觉得 (juéde) : trouver que — usage oral, avis personnel",
          "认为 (rènwéi) : considérer que — usage plus soutenu, avis argumenté",
          "同意 (tóngyì) / 不同意 (bù tóngyì) : être d'accord / pas d'accord ; 看法 (kànfǎ) : point de vue",
        ],
      },
      {
        titre: "Nuancer l'intensité",
        points: [
          "有点儿 (yǒudiǎnr) un peu (nuance négative) < 很 (hěn) très (neutre)",
          "非常 / 特别 (fēicháng / tèbié) extrêmement, particulièrement",
          "太...了 (tài...le) : trop..., valeur exclamative",
        ],
      },
      {
        titre: "Cause et conséquence",
        points: [
          "因为...所以... (yīnwèi...suǒyǐ...) : parce que... donc...",
          "让 (ràng) : cause + 让 + personne + adjectif/verbe = « rendre quelqu'un... »",
          "对...感兴趣 (duì...gǎn xìngqù) : s'intéresser à...",
        ],
      },
    ],
    audio:
      "Fiche de révision : exprimer sentiments et opinions, niveau HSK 3. Les émotions de base sont gāoxìng, content, nánguò, triste, shēngqì, en colère, hàipà, avoir peur, et dānxīn, s'inquiéter. Pour donner son avis, on utilise juéde, trouver que, à l'oral, et rènwéi, considérer que, dans un registre plus soutenu. On exprime l'accord avec tóngyì et le désaccord avec bù tóngyì. Pour nuancer l'intensité d'un sentiment, on utilise, du plus faible au plus fort, yǒudiǎnr, un peu, hěn, très, fēicháng et tèbié, extrêmement, et enfin tài... le, trop, de façon exclamative. Pour relier une cause à sa conséquence, on emploie yīnwèi... suǒyǐ..., parce que... donc..., ou le verbe ràng, qui exprime qu'une cause rend quelqu'un dans un certain état.",
  },
  memoCards: [
    { recto: "高兴 / 难过 (gāoxìng / nánguò)", verso: "Content / triste. Ex : 我今天很高兴。(Je suis très content aujourd'hui.)" },
    { recto: "觉得 (juéde)", verso: "Trouver que, avoir l'impression que (avis personnel, oral). Ex : 我觉得很好。(Je trouve ça très bien.)" },
    { recto: "认为 (rènwéi)", verso: "Considérer que, estimer que (avis soutenu, argumenté). Ex : 我认为这是对的。(Je considère que c'est juste.)" },
    { recto: "同意 / 不同意 (tóngyì / bù tóngyì)", verso: "Être d'accord / pas d'accord. Ex : 我不同意你的看法。(Je ne suis pas d'accord avec ton point de vue.)" },
    { recto: "对...感兴趣 (duì...gǎn xìngqù)", verso: "S'intéresser à... Ex : 他对音乐很感兴趣。(Il s'intéresse beaucoup à la musique.)" },
    { recto: "有点儿 / 很 / 非常 (yǒudiǎnr / hěn / fēicháng)", verso: "Un peu / très / extrêmement. Intensité croissante devant un adjectif." },
    { recto: "因为...所以... (yīnwèi...suǒyǐ...)", verso: "Parce que... donc... Ex : 因为很晚了，所以我要回家。(Comme il est tard, je dois rentrer.)" },
    { recto: "让 (ràng)", verso: "Faire que, rendre. Ex : 这个消息让我很担心。(Cette nouvelle me rend très inquiet.)" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 难过 (nánguò) ?",
      choix: ["Content", "Triste", "En colère", "Effrayé"],
      bonneReponse: 1,
      explication: "难过 (nánguò) signifie triste, avoir de la peine.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « avoir peur » en chinois ?",
      choix: ["担心", "生气", "害怕", "讨厌"],
      bonneReponse: 2,
      explication: "害怕 (hàipà) = avoir peur. 担心 = s'inquiéter, 生气 = être en colère, 讨厌 = détester.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 我很高兴认识你。",
      reponse: "Je suis très content de te connaître.",
      explication: "很高兴 = très content ; 认识你 = te connaître, faire ta connaissance.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel verbe utilise-t-on plutôt à l'oral pour donner un avis personnel ?",
      choix: ["认为", "觉得", "同意", "让"],
      bonneReponse: 1,
      explication: "觉得 (juéde) est le verbe d'opinion le plus courant à l'oral.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois (caractères et pinyin) : « Je suis d'accord avec ton point de vue. »",
      reponse: "我同意你的看法。(Wǒ tóngyì nǐ de kànfǎ.)",
      explication: "同意 + 看法 : être d'accord avec le point de vue de quelqu'un.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : 这本书___有意思！(Ce livre est vraiment trop intéressant !)",
      choix: ["有点儿", "太...了", "因为", "让"],
      bonneReponse: 1,
      explication: "太...了 (tài...le) exprime « trop », avec une valeur exclamative.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Remets les mots dans l'ordre : 很 / 消息 / 我 / 这个 / 担心 / 让",
      reponse: "这个消息让我很担心。(Zhège xiāoxi ràng wǒ hěn dānxīn.) — Cette nouvelle me rend très inquiet.",
      explication: "Structure causative : cause (这个消息) + 让 + personne (我) + adjectif (很担心).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase exprime correctement un désaccord ?",
      choix: ["我很同意。", "我不同意你的看法。", "我对你感兴趣。", "我让你不高兴。"],
      bonneReponse: 1,
      explication: "不同意 = ne pas être d'accord. 我不同意你的看法 = je ne suis pas d'accord avec ton point de vue.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 因为这部电影太长了，所以我有点儿累，可是我觉得还不错。",
      reponse: "Comme ce film était trop long, je suis un peu fatigué(e), mais je le trouve tout de même plutôt pas mal.",
      explication: "因为...所以... = cause/conséquence ; 太...了 = trop ; 有点儿 = un peu ; 还不错 = pas mal du tout.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un ami te dit qu'il déteste les épinards. Réponds en chinois que toi, au contraire, tu t'y intéresses et tu les trouves délicieux.",
      reponse: "可是我对蔬菜很感兴趣，我觉得菠菜很好吃。(Kěshì wǒ duì shūcài hěn gǎn xìngqù, wǒ juéde bōcài hěn hǎochī.)",
      explication: "对...感兴趣 pour l'intérêt ; 觉得 + adjectif pour l'avis personnel.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est INCORRECTE ?",
      choix: [
        "他的话让我很高兴。",
        "因为下雨，所以我们不能出去。",
        "我认为让你不高兴，对不起。",
        "我觉得这个问题很有意思。",
      ],
      bonneReponse: 2,
      explication: "让 est un verbe, pas 认为 + 让 ensemble sans sujet clair : la phrase correcte serait « 我让你不高兴了，对不起。» sans 认为.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris en pinyin avec les tons corrects : 因为你不同意，所以我有点儿难过。",
      reponse: "Yīnwèi nǐ bù tóngyì, suǒyǐ wǒ yǒudiǎnr nánguò.",
      explication: "因为 yīnwèi (1er+4e ton), 同意 tóngyì (2e+4e ton), 所以 suǒyǐ (3e+3e ton), 难过 nánguò (2e+4e ton).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Être en colère » se dit :",
      choix: ["高兴", "生气", "担心", "讨厌"],
      bonneReponse: 1,
      explication: "生气 (shēngqì) = être en colère, fâché.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que veut dire 有点儿 (yǒudiǎnr) ?",
      reponse: "Un peu (souvent avec une nuance négative ou gênante).",
      explication: "有点儿 nuance légèrement un adjectif, souvent dans un sens négatif : 我有点儿累 (je suis un peu fatigué).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Je trouve que ce restaurant est vraiment trop cher. »",
      reponse: "我觉得这家饭馆太贵了。(Wǒ juéde zhè jiā fànguǎn tài guì le.)",
      explication: "觉得 pour l'avis ; 太...了 pour l'intensité exclamative.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle structure relie une cause à sa conséquence ?",
      choix: ["对...感兴趣", "因为...所以...", "有点儿...很...", "同意...不同意..."],
      bonneReponse: 1,
      explication: "因为...所以... (yīnwèi...suǒyǐ...) = parce que... donc...",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre 觉得 et 认为 ?",
      reponse:
        "觉得 exprime une impression personnelle, plutôt à l'oral ; 认为 exprime une opinion plus affirmée et argumentée, dans un registre plus soutenu.",
      explication: "Les deux verbes introduisent un avis, mais avec une nuance de registre et de fermeté différente.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Exprimer sentiments et opinions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 担心 (dānxīn) ?",
          choix: ["Être content", "S'inquiéter", "Détester", "Être d'accord"],
          bonneReponse: 1,
          explication: "担心 (dānxīn) = s'inquiéter.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en chinois : « Je suis très content. »",
          reponse: "我很高兴。(Wǒ hěn gāoxìng.)",
          explication: "很 est presque obligatoire devant un adjectif seul comme 高兴.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : 我___你的看法，我觉得你说得对。",
          choix: ["讨厌", "同意", "担心", "太"],
          bonneReponse: 1,
          explication: "同意你的看法 = être d'accord avec ton point de vue.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : 他对中国音乐很感兴趣，可是他觉得中文有点儿难。",
          reponse: "Il s'intéresse beaucoup à la musique chinoise, mais il trouve le chinois un peu difficile.",
          explication: "对...感兴趣 = s'intéresser à ; 觉得 + adjectif = trouver que ; 有点儿 = un peu.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Remets dans l'ordre : 了 / 太 / 这个 / 难 / 问题",
          reponse: "这个问题太难了！(Zhège wèntí tài nán le!) — Ce problème est vraiment trop difficile !",
          explication: "Structure exclamative 太...了 encadrant l'adjectif 难.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige deux phrases en chinois : (1) « Parce que je suis un peu malade, je ne peux pas venir. » (2) « Cette nouvelle rend tout le monde très content. »",
          reponse:
            "(1) 因为我有点儿不舒服，所以我不能来。(Yīnwèi wǒ yǒudiǎnr bù shūfu, suǒyǐ wǒ bù néng lái.) (2) 这个消息让大家都很高兴。(Zhège xiāoxi ràng dàjiā dōu hěn gāoxìng.)",
          explication: "因为...所以... pour la cause/conséquence ; 让 + personne + adjectif pour l'effet d'une cause sur quelqu'un.",
        },
      ],
    },
    {
      titre: "Examen 2 — Exprimer sentiments et opinions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 讨厌 (tǎoyàn) ?",
          choix: ["Aimer", "Détester", "S'intéresser à", "Être d'accord"],
          bonneReponse: 1,
          explication: "讨厌 (tǎoyàn) = détester, le contraire de 喜欢 (aimer).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le pinyin avec les tons de 认为 et sa traduction.",
          reponse: "rènwéi — considérer que, estimer que",
          explication: "认 rèn (4e ton), 为 wéi (2e ton).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase utilise correctement 让 ?",
          choix: [
            "我让很高兴。",
            "这件事让我很生气。",
            "我让高兴他。",
            "让我认为这样。",
          ],
          bonneReponse: 1,
          explication: "Structure correcte : cause (这件事) + 让 + personne (我) + adjectif (很生气).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pose la question en chinois : « Que penses-tu de ce livre ? »",
          reponse: "你觉得这本书怎么样？(Nǐ juéde zhè běn shū zěnmeyàng?)",
          explication: "你觉得...怎么样？= structure standard pour demander un avis.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en français : 虽然我对历史感兴趣，可是这本书太难了，我觉得有点儿无聊。",
          reponse: "Bien que je m'intéresse à l'histoire, ce livre est trop difficile, je le trouve un peu ennuyeux.",
          explication: "对...感兴趣 = s'intéresser à ; 太...了 = trop ; 有点儿无聊 = un peu ennuyeux.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Écris un mini-dialogue de deux répliques en chinois : demande à un ami s'il est d'accord avec ton avis sur un film que tu as trouvé très intéressant, puis fais-le répondre qu'il n'est pas d'accord et qu'il l'a trouvé un peu ennuyeux.",
          reponse:
            "— 我觉得这部电影很有意思，你同意吗？(Wǒ juéde zhè bù diànyǐng hěn yǒu yìsi, nǐ tóngyì ma?) — 我不同意，我觉得有点儿无聊。(Wǒ bù tóngyì, wǒ juéde yǒudiǎnr wúliáo.)",
          explication: "觉得 pour l'avis, 同意吗 pour demander l'accord, 不同意 + 觉得 pour exprimer un avis différent.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Émotions de base : 高兴 content, 难过 triste, 生气 en colère, 害怕 peur, 担心 inquiétude — s'emploient comme des adjectifs avec 很.",
    "觉得 (juéde, plutôt oral) et 认为 (rènwéi, plus soutenu) introduisent tous deux un avis personnel.",
    "同意 / 不同意 pour l'accord/désaccord ; 对...感兴趣 pour dire qu'on s'intéresse à quelque chose.",
    "Intensité croissante : 有点儿 (un peu) < 很 (très, neutre) < 非常/特别 (extrêmement) < 太...了 (trop, exclamatif).",
    "因为...所以... relie cause et conséquence ; on peut n'employer qu'un seul des deux mots à l'oral.",
    "让 (ràng) : cause + 让 + personne + adjectif/verbe = « la cause rend la personne... » — la cause est toujours en tête de phrase.",
  ],
},
{
  slug: "hsk3-voyages",
  titre: "HSK 3 — Voyager et se déplacer",
  matiere: "chinois",
  niveau: "4eme",
  description:
    "Parler des transports (坐飞机, 骑自行车), demander et indiquer son chemin (怎么走, 在哪儿, 左/右/前/后), et utiliser les structures 从...到..., 离...远/近 et les compléments de direction 来/去, avec le vocabulaire HSK 3 du voyage.",
  objectifs: [
    "Nommer les moyens de transport avec les bons verbes 坐 et 骑",
    "Demander son chemin : ...怎么走？ / ...在哪儿？",
    "Comprendre et donner des directions : 左边, 右边, 前面, 后面",
    "Exprimer un trajet avec 从...到... et une distance avec 离...远/近",
    "Utiliser les compléments de direction 来 et 去 (进来, 出去, 回来...)",
  ],
  slides: [
    {
      titre: "Les moyens de transport",
      illustration: "🚄",
      visuel: "坐飞机 (zuò fēijī) · 坐火车 (zuò huǒchē)",
      contenu: [
        "坐飞机 (zuò fēijī) : prendre l'avion",
        "坐火车 (zuò huǒchē) : prendre le train",
        "坐地铁 (zuò dìtiě) : prendre le métro",
        "坐公共汽车 (zuò gōnggòng qìchē) : prendre le bus",
      ],
      voixOff:
        "Pour dire qu'on prend un moyen de transport, le chinois utilise le verbe zuò, qui signifie « s'asseoir » : on s'assoit dans l'avion, zuò fēijī, dans le train, zuò huǒchē, dans le métro, zuò dìtiě, ou dans le bus, zuò gōnggòng qìchē. Le verbe se place toujours avant le nom du véhicule.",
    },
    {
      titre: "坐 ou 骑 ?",
      illustration: "🚲",
      visuel: "骑自行车 (qí zìxíngchē)",
      contenu: [
        "坐 (zuò) : s'asseoir → véhicules où l'on est assis dedans",
        "骑 (qí) : chevaucher → véhicules que l'on enfourche",
        "骑自行车 (qí zìxíngchē) : faire du vélo",
        "骑马 (qí mǎ) : monter à cheval",
      ],
      voixOff:
        "Attention au choix du verbe ! On utilise zuò, « s'asseoir », pour les véhicules dans lesquels on est assis : avion, train, bus, taxi. Mais pour le vélo ou le cheval, que l'on enfourche à califourchon, on emploie qí, « chevaucher » : qí zìxíngchē, faire du vélo, qí mǎ, monter à cheval. Dire zuò zìxíngchē est une erreur classique.",
    },
    {
      titre: "Demander son chemin : 怎么走？",
      illustration: "🗺️",
      visuel: "请问，火车站怎么走？",
      contenu: [
        "请问 (qǐngwèn) : excusez-moi, puis-je demander...",
        "怎么 (zěnme) : comment ; 走 (zǒu) : marcher, aller",
        "火车站怎么走？(huǒchēzhàn zěnme zǒu?) : comment va-t-on à la gare ?",
        "Le lieu se place AU DÉBUT de la question",
      ],
      voixOff:
        "Pour demander poliment son chemin, on commence par qǐngwèn, « excusez-moi ». Puis on nomme le lieu, suivi de zěnme zǒu, « comment marcher » : huǒchēzhàn zěnme zǒu, comment va-t-on à la gare ? Remarque bien l'ordre : le lieu se place au début de la question, contrairement au français.",
    },
    {
      titre: "Demander où se trouve un lieu : 在哪儿？",
      illustration: "📍",
      visuel: "地铁站在哪儿？",
      contenu: [
        "在 (zài) : se trouver à ; 哪儿 (nǎr) : où",
        "地铁站在哪儿？(dìtiězhàn zài nǎr?) : où est la station de métro ?",
        "Réponse : 在前面 (zài qiánmiàn) : c'est devant",
        "附近 (fùjìn) : à proximité → 附近有银行吗？(y a-t-il une banque près d'ici ?)",
      ],
      voixOff:
        "Deuxième question très utile : zài nǎr, « se trouve où ? ». Dìtiězhàn zài nǎr, où est la station de métro ? On répond avec zài suivi de la position : zài qiánmiàn, c'est devant. Le mot fùjìn, « à proximité », permet aussi de demander s'il y a une banque ou un restaurant dans les environs.",
    },
    {
      titre: "Les quatre directions",
      illustration: "🧭",
      visuel: "左 (zuǒ) · 右 (yòu) · 前 (qián) · 后 (hòu)",
      contenu: [
        "左边 (zuǒbian) : à gauche ; 右边 (yòubian) : à droite",
        "前面 (qiánmiàn) : devant ; 后面 (hòumiàn) : derrière",
        "往前走 (wǎng qián zǒu) : avancez tout droit",
        "商店在学校(的)右边 : le magasin est à droite de l'école",
      ],
      voixOff:
        "Pour comprendre un itinéraire, il faut connaître les quatre directions : zuǒbian à gauche, yòubian à droite, qiánmiàn devant et hòumiàn derrière. La préposition wǎng, « vers », introduit la direction du mouvement : wǎng qián zǒu, marchez vers l'avant, c'est-à-dire continuez tout droit. Pour situer un lieu, on dit par exemple : le magasin se trouve à droite de l'école.",
    },
    {
      titre: "Le trajet : 从...到...",
      illustration: "✈️",
      visuel: "从巴黎到北京",
      contenu: [
        "从 (cóng) : depuis, à partir de ; 到 (dào) : jusqu'à, arriver",
        "从巴黎到北京 (cóng Bālí dào Běijīng) : de Paris à Pékin",
        "从我家到学校，我骑自行车。: de chez moi à l'école, j'y vais à vélo",
        "Marche aussi pour le temps : 从九点到十点 (de 9 h à 10 h)",
      ],
      voixOff:
        "La structure cóng... dào... encadre le point de départ et le point d'arrivée : cóng Bālí dào Běijīng, de Paris à Pékin. Elle se place en début de phrase : de chez moi à l'école, j'y vais à vélo. Cette structure fonctionne aussi pour le temps : cóng jiǔ diǎn dào shí diǎn, de neuf heures à dix heures.",
    },
    {
      titre: "La distance : 离...远/近",
      illustration: "📏",
      visuel: "A 离 B 很远 / 很近",
      contenu: [
        "离 (lí) : être distant de ; 远 (yuǎn) : loin ; 近 (jìn) : près",
        "火车站离这儿远吗？(huǒchēzhàn lí zhèr yuǎn ma?) : la gare est-elle loin d'ici ?",
        "我家离学校很近。(wǒ jiā lí xuéxiào hěn jìn.) : ma maison est très près de l'école",
        "Structure : lieu A + 离 + lieu B + 远/近",
      ],
      voixOff:
        "Pour parler de distance, on utilise lí, qui relie deux lieux : lieu A, lí, lieu B, puis yuǎn, loin, ou jìn, près. Huǒchēzhàn lí zhèr yuǎn ma : la gare est-elle loin d'ici ? Wǒ jiā lí xuéxiào hěn jìn : ma maison est très proche de l'école. Attention, on n'emploie jamais le verbe shì dans cette structure.",
    },
    {
      titre: "Les compléments de direction 来 / 去",
      illustration: "🔄",
      visuel: "进来 · 出去 · 回来",
      contenu: [
        "来 (lái) : mouvement VERS celui qui parle",
        "去 (qù) : mouvement qui S'ÉLOIGNE de celui qui parle",
        "进来 (jìnlái) : entrer (vers moi) ; 出去 (chūqù) : sortir (loin de moi)",
        "回来 (huílái) : revenir ; 回去 (huíqù) : retourner (là-bas)",
      ],
      voixOff:
        "Après un verbe de mouvement, lái ou qù précisent le sens du déplacement par rapport à celui qui parle. Lái indique que le mouvement se rapproche de moi, qù qu'il s'en éloigne. Si je suis dans la classe et que je dis jìnlái, entre, la personne vient vers moi. Si je suis dehors, je dirai jìnqù, entre là-dedans. De même, huílái signifie « reviens ici » et huíqù « retourne là-bas ».",
    },
    {
      titre: "Dialogue : à la recherche de la gare",
      illustration: "💬",
      visuel: "请问... — 往前走，在左边。",
      contenu: [
        "— 请问，火车站怎么走？(Excusez-moi, comment va-t-on à la gare ?)",
        "— 往前走，火车站在银行的左边。(Tout droit, la gare est à gauche de la banque.)",
        "— 离这儿远吗？(C'est loin d'ici ?)",
        "— 不远，很近。(Ce n'est pas loin, c'est tout près.)",
      ],
      voixOff:
        "Écoutons un dialogue complet. Le voyageur demande : qǐngwèn, huǒchēzhàn zěnme zǒu ? Excusez-moi, comment va-t-on à la gare ? On lui répond : wǎng qián zǒu, allez tout droit, la gare est à gauche de la banque. Il vérifie : lí zhèr yuǎn ma, c'est loin d'ici ? Réponse : bù yuǎn, hěn jìn, ce n'est pas loin, c'est tout près. Tu as maintenant tous les outils pour te repérer en Chine !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "坐 pour avion/train/bus/métro, 骑 pour vélo/cheval",
        "Demander : lieu + 怎么走？ ou lieu + 在哪儿？",
        "Directions : 左边, 右边, 前面, 后面 ; 往 + direction + 走",
        "从 A 到 B (trajet) ; A 离 B 远/近 (distance) ; 来 = vers moi, 去 = loin de moi",
      ],
      voixOff:
        "Résumons ce chapitre. On prend les transports avec zuò, sauf le vélo et le cheval qui se disent avec qí. Pour demander son chemin, le lieu se place en tête : huǒchēzhàn zěnme zǒu, ou zài nǎr pour demander où il se trouve. Les directions essentielles sont zuǒbian, yòubian, qiánmiàn, hòumiàn. Enfin, cóng... dào... exprime le trajet, lí suivi de yuǎn ou jìn exprime la distance, et lái ou qù précisent si le mouvement se rapproche ou s'éloigne de celui qui parle. Bon voyage !",
    },
  ],
  fiche: {
    intro:
      "Voyager en chinois demande trois savoir-faire : nommer les transports avec le bon verbe (坐/骑), demander et comprendre un itinéraire (怎么走, 在哪儿, directions), et décrire un trajet ou une distance (从...到..., 离...远/近, 来/去).",
    sections: [
      {
        titre: "Les transports : 坐 ou 骑",
        points: [
          "坐 (zuò, s'asseoir) : 坐飞机 (avion), 坐火车 (train), 坐地铁 (métro), 坐公共汽车 (bus), 坐出租车 (taxi)",
          "骑 (qí, chevaucher) : 骑自行车 (vélo), 骑马 (cheval)",
          "Erreur à éviter : 坐自行车 est incorrect",
        ],
      },
      {
        titre: "Demander son chemin",
        points: [
          "请问 (qǐngwèn) : excusez-moi — toujours en tête de question polie",
          "Lieu + 怎么走？(zěnme zǒu?) : comment y va-t-on ?",
          "Lieu + 在哪儿？(zài nǎr?) : où se trouve-t-il ?",
          "附近 (fùjìn) : à proximité — 附近有饭馆吗？",
        ],
      },
      {
        titre: "Les directions",
        points: [
          "左边 (zuǒbian) : gauche ; 右边 (yòubian) : droite",
          "前面 (qiánmiàn) : devant ; 后面 (hòumiàn) : derrière",
          "往 (wǎng) + direction + 走 : 往前走 = continuez tout droit",
          "A 在 B 的左边 : A est à gauche de B",
        ],
      },
      {
        titre: "Trajet et distance",
        points: [
          "从 A 到 B (cóng... dào...) : de A à B — lieux ou horaires",
          "A 离 B 很远/很近 (lí... yuǎn/jìn) : A est loin/près de B",
          "Question : A 离 B 远吗？ — jamais de 是 dans cette structure",
        ],
      },
      {
        titre: "Les compléments de direction 来 / 去",
        points: [
          "来 (lái) : le mouvement se rapproche de celui qui parle",
          "去 (qù) : le mouvement s'en éloigne",
          "进来 entrer (vers moi) / 进去 entrer (là-bas) ; 出来 / 出去 sortir ; 回来 revenir / 回去 retourner",
        ],
      },
      {
        titre: "Vocabulaire HSK 3 du voyage",
        points: [
          "火车站 (huǒchēzhàn) : gare ; 机场 (jīchǎng) : aéroport",
          "票 (piào) : billet ; 地图 (dìtú) : carte, plan",
          "旅游 (lǚyóu) : voyager, faire du tourisme ; 行李箱 (xínglixiāng) : valise",
        ],
      },
    ],
    audio:
      "Fiche de révision : voyager et se déplacer, niveau HSK 3. Pour prendre un transport, on utilise le verbe zuò, s'asseoir : zuò fēijī, prendre l'avion, zuò huǒchē, prendre le train. Mais pour le vélo ou le cheval, que l'on enfourche, on dit qí : qí zìxíngchē. Pour demander son chemin, on commence par qǐngwèn, excusez-moi, puis on place le lieu en tête de phrase : huǒchēzhàn zěnme zǒu, comment va-t-on à la gare, ou dìtiězhàn zài nǎr, où est la station de métro. Les directions se disent zuǒbian à gauche, yòubian à droite, qiánmiàn devant, hòumiàn derrière, et wǎng qián zǒu signifie continuez tout droit. La structure cóng dào exprime le trajet de A à B, tandis que lí suivi de yuǎn ou jìn indique si un lieu est loin ou proche. Enfin, après un verbe de mouvement, lái indique qu'on se rapproche de celui qui parle, et qù qu'on s'en éloigne.",
  },
  memoCards: [
    { recto: "坐飞机 (zuò fēijī)", verso: "Prendre l'avion. Ex : 我坐飞机去中国。(Je vais en Chine en avion.)" },
    { recto: "骑自行车 (qí zìxíngchē)", verso: "Faire du vélo. 骑 = chevaucher : pour le vélo et le cheval, jamais 坐." },
    { recto: "...怎么走？(zěnme zǒu?)", verso: "Comment y va-t-on ? Ex : 请问，火车站怎么走？(Excusez-moi, comment va-t-on à la gare ?)" },
    { recto: "...在哪儿？(zài nǎr?)", verso: "Où se trouve... ? Ex : 地铁站在哪儿？(Où est la station de métro ?)" },
    { recto: "左边 / 右边 (zuǒbian / yòubian)", verso: "À gauche / à droite. Ex : 商店在学校的右边。(Le magasin est à droite de l'école.)" },
    { recto: "前面 / 后面 (qiánmiàn / hòumiàn)", verso: "Devant / derrière. Ex : 往前走。(Continuez tout droit.)" },
    { recto: "从...到... (cóng... dào...)", verso: "De... à... Ex : 从巴黎到北京 (de Paris à Pékin) ; 从九点到十点 (de 9 h à 10 h)." },
    { recto: "A 离 B 远/近 (lí... yuǎn/jìn)", verso: "A est loin/près de B. Ex : 我家离学校很近。(Ma maison est tout près de l'école.)" },
    { recto: "进来 / 出去 (jìnlái / chūqù)", verso: "Entrer (vers celui qui parle) / sortir (en s'éloignant). 来 = vers moi, 去 = loin de moi." },
    { recto: "票 (piào) · 地图 (dìtú) · 旅游 (lǚyóu)", verso: "Billet · carte/plan · voyager. Ex : 我买了两张火车票。(J'ai acheté deux billets de train.)" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « prendre le train » ?",
      choix: ["骑火车", "坐火车", "走火车", "去火车"],
      bonneReponse: 1,
      explication: "On est assis dans le train : verbe 坐 (zuò). 坐火车 = prendre le train.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 左边 (zuǒbian) ?",
      choix: ["À droite", "Devant", "À gauche", "Derrière"],
      bonneReponse: 2,
      explication: "左边 = à gauche. 右边 = à droite, 前面 = devant, 后面 = derrière.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 请问，火车站在哪儿？",
      reponse: "Excusez-moi, où est la gare ?",
      explication: "请问 = excusez-moi ; 火车站 = gare ; 在哪儿 = où se trouve.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel verbe utilise-t-on avec 自行车 (le vélo) ?",
      choix: ["坐", "走", "骑", "到"],
      bonneReponse: 2,
      explication: "On enfourche le vélo : 骑 (qí). 骑自行车 = faire du vélo.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois (caractères et pinyin) : « Comment va-t-on à l'aéroport ? »",
      reponse: "机场怎么走？(Jīchǎng zěnme zǒu?) — ou plus poliment : 请问，机场怎么走？",
      explication: "Le lieu (机场) se place en tête, suivi de 怎么走.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : 我家___学校很近。(Ma maison est très près de l'école.)",
      choix: ["从", "到", "离", "往"],
      bonneReponse: 2,
      explication: "La distance s'exprime avec 离 : A 离 B 很近/很远.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Remets les mots dans l'ordre : 到 / 我 / 北京 / 从 / 坐飞机 / 巴黎",
      reponse: "我从巴黎到北京坐飞机。(Wǒ cóng Bālí dào Běijīng zuò fēijī.) — De Paris à Pékin, je prends l'avion.",
      explication: "La structure 从...到... se place après le sujet et avant le groupe verbal.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Tu es DANS la maison et tu invites un ami à entrer. Que dis-tu ?",
      choix: ["进去！", "进来！", "出去！", "回去！"],
      bonneReponse: 1,
      explication: "Le mouvement se fait vers celui qui parle : 来. Donc 进来 (jìnlái), « entre (vers moi) ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 请问，附近有地铁站吗？地铁站离这儿远不远？",
      reponse: "Excusez-moi, y a-t-il une station de métro à proximité ? La station est-elle loin d'ici ?",
      explication: "附近 = à proximité ; 远不远 est la question alternative (loin - pas loin), équivalente à 远吗.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un passant te demande la banque. Réponds en chinois : « Allez tout droit, la banque est à droite de la gare. »",
      reponse: "往前走，银行在火车站的右边。(Wǎng qián zǒu, yínháng zài huǒchēzhàn de yòubian.)",
      explication: "往 + direction + 走 pour le mouvement ; A 在 B 的右边 pour situer.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est INCORRECTE ?",
      choix: [
        "我坐地铁去机场。",
        "他骑自行车去学校。",
        "我们坐自行车去公园。",
        "她坐出租车回家。",
      ],
      bonneReponse: 2,
      explication: "On ne dit pas 坐自行车 : le vélo s'enfourche, donc 骑自行车. Les trois autres phrases sont correctes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Écris en pinyin avec les tons corrects : 从我家到火车站很近。",
      reponse: "Cóng wǒ jiā dào huǒchēzhàn hěn jìn.",
      explication: "从 cóng (2e ton), 到 dào (4e ton), 火车站 huǒchēzhàn, 近 jìn (4e ton).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Prendre l'avion » se dit :",
      choix: ["骑飞机", "坐飞机", "走飞机", "开飞机"],
      bonneReponse: 1,
      explication: "坐飞机 (zuò fēijī) : on est assis dans l'avion.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que veut dire 往前走 (wǎng qián zǒu) ?",
      reponse: "Allez tout droit / avancez vers l'avant.",
      explication: "往 (vers) + 前 (avant) + 走 (marcher).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Demande en chinois : « Où est la station de métro ? »",
      reponse: "地铁站在哪儿？(Dìtiězhàn zài nǎr?)",
      explication: "Lieu + 在哪儿 : le lieu se place en tête de la question.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« De neuf heures à dix heures » se dit :",
      choix: ["离九点到十点", "从九点到十点", "到九点从十点", "往九点去十点"],
      bonneReponse: 1,
      explication: "从...到... fonctionne pour les lieux ET pour le temps : 从九点到十点.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre 回来 (huílái) et 回去 (huíqù) ?",
      reponse:
        "回来 : revenir vers celui qui parle (« reviens ici ») ; 回去 : retourner dans un lieu éloigné de celui qui parle (« retourne là-bas »).",
      explication: "来 = mouvement vers le locuteur ; 去 = mouvement qui s'en éloigne.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Voyager et se déplacer",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 火车站 (huǒchēzhàn) ?",
          choix: ["L'aéroport", "La gare", "La station de métro", "L'arrêt de bus"],
          bonneReponse: 1,
          explication: "火车 (train) + 站 (station) = la gare. L'aéroport se dit 机场.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en chinois : « Je fais du vélo. »",
          reponse: "我骑自行车。(Wǒ qí zìxíngchē.)",
          explication: "Le vélo s'utilise avec 骑, jamais avec 坐.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : 请问，机场___走？",
          choix: ["什么", "怎么", "哪儿", "多少"],
          bonneReponse: 1,
          explication: "怎么走 (zěnme zǒu) = « comment y aller ». 在哪儿 demanderait où se trouve le lieu.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : 我家离火车站不远，我们走路去吧。",
          reponse: "Ma maison n'est pas loin de la gare, allons-y à pied.",
          explication: "离...不远 = pas loin de ; 走路 = marcher, aller à pied ; 吧 adoucit la suggestion.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Remets dans l'ordre : 的 / 银行 / 在 / 左边 / 学校",
          reponse: "银行在学校的左边。(Yínháng zài xuéxiào de zuǒbian.) — La banque est à gauche de l'école.",
          explication: "Structure de localisation : A 在 B 的 + position.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige deux phrases en chinois : (1) « De chez moi à l'école, je prends le bus. » (2) « L'école est très près de chez moi. »",
          reponse:
            "(1) 从我家到学校，我坐公共汽车。(Cóng wǒ jiā dào xuéxiào, wǒ zuò gōnggòng qìchē.) (2) 学校离我家很近。(Xuéxiào lí wǒ jiā hěn jìn.)",
          explication: "从...到... pour le trajet ; 离...很近 pour la distance, sans verbe 是.",
        },
      ],
    },
    {
      titre: "Examen 2 — Voyager et se déplacer",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 票 (piào) ?",
          choix: ["La valise", "Le billet", "Le plan", "Le passeport"],
          bonneReponse: 1,
          explication: "票 = billet, ticket : 火车票 billet de train, 飞机票 billet d'avion.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le pinyin avec les tons de 坐地铁 et sa traduction.",
          reponse: "zuò dìtiě — prendre le métro",
          explication: "坐 zuò (4e ton), 地铁 dìtiě (4e ton + 3e ton).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Tu es DEHORS et ton ami est dans la maison. Comment dis-tu « je vais entrer » ?",
          choix: ["我进来。", "我进去。", "我出来。", "我回来。"],
          bonneReponse: 1,
          explication: "Le mouvement s'éloigne de l'endroit où tu es pour aller vers l'intérieur : 进去 (jìnqù).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pose la question en chinois : « La gare est-elle loin d'ici ? »",
          reponse: "火车站离这儿远吗？(Huǒchēzhàn lí zhèr yuǎn ma?)",
          explication: "Structure A 离 B + 远 + 吗 ; 这儿 = ici.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en français : 我们坐飞机从法国到中国去旅游，我很高兴。",
          reponse:
            "Nous prenons l'avion pour aller voyager de la France jusqu'en Chine, je suis très content(e).",
          explication: "坐飞机 = en avion ; 从法国到中国 = de la France à la Chine ; 去旅游 = aller voyager.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un touriste cherche un restaurant. Écris un mini-dialogue de deux répliques en chinois : la question polie (« Excusez-moi, y a-t-il un restaurant près d'ici ? ») et la réponse (« Oui, allez tout droit, il est à droite. »)",
          reponse:
            "— 请问，附近有饭馆吗？(Qǐngwèn, fùjìn yǒu fànguǎn ma?) — 有，往前走，饭馆在右边。(Yǒu, wǎng qián zǒu, fànguǎn zài yòubian.)",
          explication: "请问 pour la politesse, 附近有...吗 pour l'existence, 往前走 et 在右边 pour l'itinéraire.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "坐 (zuò) pour les véhicules où l'on s'assoit (飞机, 火车, 地铁, 公共汽车, 出租车) ; 骑 (qí) pour ce qu'on enfourche (自行车, 马).",
    "Pour demander son chemin, le lieu se place en tête : 火车站怎么走？ / 地铁站在哪儿？ — et on commence par 请问 pour être poli.",
    "Directions : 左边 gauche, 右边 droite, 前面 devant, 后面 derrière ; 往前走 = tout droit ; A 在 B 的左边 pour situer.",
    "从 A 到 B : trajet (lieux ou horaires) ; A 离 B 很远/很近 : distance, sans jamais utiliser 是.",
    "来 = mouvement vers celui qui parle, 去 = mouvement qui s'en éloigne : 进来/进去, 出来/出去, 回来/回去.",
    "Erreur classique : dire 坐自行车 au lieu de 骑自行车, ou confondre 怎么走 (comment y aller) avec 在哪儿 (où est-ce).",
  ],
},
{
  slug: "hsk4-preparation",
  titre: "Vers le HSK 4 — lecture de textes courts",
  matiere: "chinois",
  niveau: "4eme",
  langueVoix: "zh-CN",
  description:
    "Se préparer à la compréhension écrite du HSK 4 : méthode de lecture de textes courts (repérer les mots-clés, deviner le sens par le contexte), et connecteurs logiques indispensables 虽然...但是..., 不但...而且..., 一边...一边..., 又...又... et 除了...以外, pour lire des textes plus longs et plus riches.",
  objectifs: [
    "Adopter une méthode efficace pour lire un texte court sans tout traduire",
    "Reconnaître et utiliser la concession : 虽然...但是...",
    "Reconnaître et utiliser l'addition renforcée : 不但...而且...",
    "Exprimer la simultanéité (一边...一边...) et le cumul (又...又...)",
    "Comprendre l'exception avec 除了...以外 et répondre à des questions de compréhension",
  ],
  slides: [
    {
      titre: "Comment lire un texte chinois court",
      illustration: "📖",
      visuel: "Repérer > deviner > vérifier",
      contenu: [
        "Ne cherche pas à traduire mot à mot : repère d'abord le sujet général",
        "Repère les mots-clés déjà connus (noms, verbes, connecteurs)",
        "Devine le sens des mots inconnus grâce au contexte et aux caractères",
        "Relis la question AVANT de relire le texte en détail",
      ],
      voixOff:
        "Pour aborder un texte chinois au niveau HSK 4, il faut changer de méthode : on ne traduit plus mot à mot, on repère d'abord de quoi parle le texte grâce aux mots déjà connus. Beaucoup de caractères inconnus se devinent grâce à leur clé ou au contexte de la phrase. Astuce précieuse : lis toujours la question avant de relire le texte en détail, cela te dit quoi chercher.",
    },
    {
      titre: "La concession : 虽然...但是...",
      illustration: "⚡",
      visuel: "虽然...，但是...。",
      contenu: [
        "虽然 (suīrán) : bien que, quoique ; 但是 (dànshì) : mais, cependant",
        "虽然天气很冷，但是他还是去跑步了。 : Bien qu'il fasse très froid, il est quand même allé courir.",
        "但是 peut être remplacé par 可是 (kěshì) ou 不过 (búguò)",
        "Structure fréquente dans les textes argumentatifs du HSK 4",
      ],
      voixOff:
        "Suīrán... dànshì... est l'une des structures les plus fréquentes dans les textes du HSK 4 : elle introduit une concession. Suīrán tiānqì hěn lěng, dànshì tā háishi qù pǎobù le : bien qu'il fasse très froid, il est quand même allé courir. On peut remplacer dànshì par kěshì ou búguò, qui ont un sens très proche.",
    },
    {
      titre: "Le cumul renforcé : 不但...而且...",
      illustration: "➕",
      visuel: "不但...，而且...。",
      contenu: [
        "不但 (búdàn) : non seulement ; 而且 (érqiě) : mais encore, mais aussi",
        "他不但会说汉语，而且会写汉字。 : Il ne sait pas seulement parler chinois, il sait aussi écrire les caractères.",
        "Les deux propositions ont souvent le même sujet",
        "而且 introduit toujours une information plus forte que la première",
      ],
      voixOff:
        "Búdàn... érqiě... permet d'ajouter une information encore plus forte à ce qui vient d'être dit : non seulement... mais encore... Tā búdàn huì shuō Hànyǔ, érqiě huì xiě Hànzì : il ne sait pas seulement parler chinois, il sait aussi écrire les caractères. Repère bien cette structure dans un texte : elle annonce souvent l'information la plus importante après érqiě.",
    },
    {
      titre: "La simultanéité : 一边...一边...",
      illustration: "🔀",
      visuel: "他一边听音乐，一边写作业。",
      contenu: [
        "一边 (yìbiān) : en même temps, tout en...",
        "他一边听音乐，一边写作业。 : Il fait ses devoirs tout en écoutant de la musique.",
        "Les deux actions sont faites par le même sujet, en même temps",
        "Utilisé pour décrire des habitudes ou des scènes de vie quotidienne",
      ],
      voixOff:
        "Yìbiān... yìbiān... décrit deux actions réalisées en même temps par la même personne. Tā yìbiān tīng yīnyuè, yìbiān xiě zuòyè : il fait ses devoirs tout en écoutant de la musique. Cette structure apparaît souvent dans des textes décrivant le quotidien ou des habitudes, très fréquents dans les épreuves de lecture.",
    },
    {
      titre: "Le cumul de qualités : 又...又...",
      illustration: "🌟",
      visuel: "这个菜又好吃又便宜。",
      contenu: [
        "又 (yòu) : et aussi, à la fois",
        "这个菜又好吃又便宜。 : Ce plat est à la fois délicieux et pas cher.",
        "她又聪明又努力。 : Elle est à la fois intelligente et travailleuse.",
        "Différent de 一边...一边... : ici, ce sont deux qualités, pas deux actions simultanées",
      ],
      voixOff:
        "Yòu... yòu... relie deux qualités ou deux caractéristiques que possède le même sujet en même temps. Zhège cài yòu hǎochī yòu piányi : ce plat est à la fois délicieux et pas cher. Tā yòu cōngming yòu nǔlì : elle est à la fois intelligente et travailleuse. Ne confonds pas cette structure avec yìbiān... yìbiān..., qui concerne deux actions et non deux qualités.",
    },
    {
      titre: "L'exception : 除了...以外",
      illustration: "🚫",
      visuel: "除了...以外，...都/也...",
      contenu: [
        "除了 (chúle) : à part, sauf ; 以外 (yǐwài) : en dehors de",
        "除了汉语以外，我还学法语。 : En plus du chinois, j'apprends aussi le français (sens additif).",
        "除了小明以外，大家都来了。 : Sauf Xiaoming, tout le monde est venu (sens exclusif).",
        "都 (tous) après 除了...以外 = exclusion ; 还/也 (aussi) = addition",
      ],
      voixOff:
        "Chúle... yǐwài... a deux sens possibles, qu'il faut distinguer grâce au mot qui suit. Chúle xiǎomíng yǐwài, dàjiā dōu lái le : sauf Xiaoming, tout le monde est venu — ici dōu, tous, indique une exclusion. Chúle Hànyǔ yǐwài, wǒ hái xué Fǎyǔ : en plus du chinois, j'apprends aussi le français — ici hái, aussi, indique une addition. Repère bien dōu ou hái/yě pour choisir le bon sens.",
    },
    {
      titre: "Lecture guidée : un texte court",
      illustration: "📰",
      visuel: "小李虽然工作很忙，但是他每天都锻炼身体。",
      contenu: [
        "小李虽然工作很忙，但是他每天都锻炼身体。",
        "他不但每天早上跑步，而且晚上还去游泳。",
        "他觉得运动让他越来越健康，工作得也更好。",
        "除了运动以外，他还很注意健康饮食。",
      ],
      voixOff:
        "Lisons un texte court en appliquant notre méthode. Xiǎo Lǐ suīrán gōngzuò hěn máng, dànshì tā měitiān dōu duànliàn shēntǐ : bien que Xiao Li ait beaucoup de travail, il fait de l'exercice tous les jours. Tā búdàn měitiān zǎoshang pǎobù, érqiě wǎnshang hái qù yóuyǒng : non seulement il court chaque matin, mais il va aussi nager le soir. On retrouve ici toutes les structures étudiées : la concession, le cumul renforcé et l'exception avec chúle... yǐwài.",
    },
    {
      titre: "Questions de compréhension type HSK 4",
      illustration: "❓",
      visuel: "根据这段话，可以知道...",
      contenu: [
        "根据这段话，可以知道... (Gēnjù zhè duàn huà, kěyǐ zhīdào...) : d'après ce texte, on peut savoir que...",
        "Repère les mots-clés de la question (qui ? quoi ? quand ?) puis retrouve-les dans le texte",
        "Méfie-toi des réponses qui reprennent des mots du texte mais changent le sens",
        "小李每天做什么运动？(Quels sports Xiao Li pratique-t-il chaque jour ?)",
      ],
      voixOff:
        "Les questions de compréhension du HSK 4 commencent souvent par gēnjù zhè duàn huà, kěyǐ zhīdào, d'après ce texte, on peut savoir que. La bonne stratégie consiste à repérer les mots-clés de la question, puis à les retrouver précisément dans le texte, sans se laisser piéger par une réponse qui reprend des mots du texte mais en détourne le sens.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Méthode : repérer les mots-clés, deviner par le contexte, lire la question d'abord",
        "虽然...但是... (concession) ; 不但...而且... (cumul renforcé)",
        "一边...一边... (actions simultanées) ; 又...又... (qualités cumulées)",
        "除了...以外 : 都 = exclusion, 还/也 = addition",
      ],
      voixOff:
        "Pour bien réussir la lecture au HSK 4, retiens cette méthode : repère les mots-clés, devine le sens par le contexte, et lis toujours la question avant de relire le texte en détail. Sur le plan grammatical, retiens les cinq structures essentielles : suīrán... dànshì... pour la concession, búdàn... érqiě... pour le cumul renforcé, yìbiān... yìbiān... pour la simultanéité, yòu... yòu... pour les qualités cumulées, et chúle... yǐwài..., dont le sens dépend du mot qui suit, dōu pour l'exclusion, hái ou yě pour l'addition.",
    },
  ],
  fiche: {
    intro:
      "Réussir la compréhension écrite du HSK 4 demande une méthode de lecture (repérage, déduction par contexte) et la maîtrise des connecteurs logiques les plus fréquents dans les textes courts : concession, cumul, simultanéité et exception.",
    sections: [
      {
        titre: "Méthode de lecture",
        points: [
          "Ne pas traduire mot à mot : repérer d'abord le sujet général du texte",
          "Deviner le sens des caractères inconnus grâce à leur clé et au contexte",
          "Lire la question avant de relire le texte en détail pour savoir quoi chercher",
          "Se méfier des réponses qui reprennent des mots du texte en changeant le sens",
        ],
      },
      {
        titre: "Concession et cumul",
        points: [
          "虽然...但是... (suīrán...dànshì...) : bien que... mais... — dànshì ≈ kěshì ≈ búguò",
          "不但...而且... (búdàn...érqiě...) : non seulement... mais encore... (information plus forte)",
        ],
      },
      {
        titre: "Simultanéité et cumul de qualités",
        points: [
          "一边...一边... (yìbiān...yìbiān...) : deux actions simultanées par le même sujet",
          "又...又... (yòu...yòu...) : deux qualités cumulées par le même sujet",
        ],
      },
      {
        titre: "L'exception : 除了...以外",
        points: [
          "除了 A 以外，都... : exclusion (tout sauf A)",
          "除了 A 以外，还/也... : addition (en plus de A)",
          "Le mot qui suit (都 ou 还/也) donne le sens de la phrase",
        ],
      },
    ],
    audio:
      "Fiche de révision : préparation à la lecture du HSK 4. Pour lire un texte court, il ne faut pas traduire mot à mot : on repère d'abord le sujet général, on devine le sens des caractères inconnus grâce au contexte, et on lit la question avant de relire le texte en détail. Cinq structures reviennent très souvent dans les textes du HSK 4. Suīrán... dànshì... exprime la concession, bien que... mais... Búdàn... érqiě... exprime un cumul renforcé, non seulement... mais encore... Yìbiān... yìbiān... décrit deux actions simultanées faites par la même personne. Yòu... yòu... cumule deux qualités du même sujet. Enfin, chúle... yǐwài... a un double sens : suivi de dōu, tous, il exprime une exclusion ; suivi de hái ou yě, aussi, il exprime une addition.",
  },
  memoCards: [
    { recto: "虽然...但是... (suīrán...dànshì...)", verso: "Bien que... mais... Ex : 虽然很累，但是他还是来了。(Bien que fatigué, il est quand même venu.)" },
    { recto: "不但...而且... (búdàn...érqiě...)", verso: "Non seulement... mais encore... Ex : 他不但聪明，而且很努力。(Non seulement il est intelligent, mais il est aussi travailleur.)" },
    { recto: "一边...一边... (yìbiān...yìbiān...)", verso: "Deux actions en même temps. Ex : 他一边吃饭一边看电视。(Il regarde la télé en mangeant.)" },
    { recto: "又...又... (yòu...yòu...)", verso: "Deux qualités cumulées. Ex : 这本书又贵又难。(Ce livre est à la fois cher et difficile.)" },
    { recto: "除了...以外，都... (chúle...yǐwài, dōu...)", verso: "Sauf... (exclusion). Ex : 除了他以外，我们都去了。(Sauf lui, nous y sommes tous allés.)" },
    { recto: "除了...以外，还/也... (chúle...yǐwài, hái/yě...)", verso: "En plus de... (addition). Ex : 除了游泳，我还喜欢跑步。(En plus de nager, j'aime aussi courir.)" },
    { recto: "根据这段话 (gēnjù zhè duàn huà)", verso: "D'après ce texte... — début typique des questions de compréhension écrite HSK 4." },
    { recto: "Méthode de lecture", verso: "1) Repérer le sujet général 2) Deviner par le contexte 3) Lire la question avant de relire le texte en détail." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 虽然 (suīrán) ?",
      choix: ["Mais", "Bien que", "En plus de", "En même temps"],
      bonneReponse: 1,
      explication: "虽然 (suīrán) = bien que, introduit la concession, souvent avec 但是 (mais).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel mot peut remplacer 但是 (dànshì) sans changer le sens ?",
      choix: ["可是", "而且", "还", "越"],
      bonneReponse: 0,
      explication: "可是 (kěshì) a un sens très proche de 但是 : « mais ».",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 他一边听音乐，一边做作业。",
      reponse: "Il fait ses devoirs tout en écoutant de la musique.",
      explication: "一边...一边... décrit deux actions faites en même temps par le même sujet.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle structure exprime le cumul de deux qualités ?",
      choix: ["除了...以外", "又...又...", "根据", "虽然...但是..."],
      bonneReponse: 1,
      explication: "又...又... cumule deux qualités ou caractéristiques d'un même sujet.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois (caractères et pinyin) : « Non seulement il parle chinois, mais il écrit aussi très bien. »",
      reponse: "他不但会说汉语，而且写得很好。(Tā búdàn huì shuō Hànyǔ, érqiě xiě de hěn hǎo.)",
      explication: "不但...而且... pour le cumul renforcé ; on peut combiner avec un complément d'état (写得很好).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "除了小王以外，大家___来了。 Quel mot complète correctement la phrase pour indiquer une exclusion ?",
      choix: ["也", "还", "都", "又"],
      bonneReponse: 2,
      explication: "都 après 除了...以外 indique l'exclusion : tout le monde SAUF Xiao Wang est venu.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Remets les mots dans l'ordre : 以外 / 汉语 / 法语 / 除了 / 还 / 我 / 学",
      reponse: "除了汉语以外，我还学法语。(Chúle Hànyǔ yǐwài, wǒ hái xué Fǎyǔ.) — En plus du chinois, j'apprends aussi le français.",
      explication: "还 après 除了...以外 indique une addition, pas une exclusion.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la meilleure stratégie avant de relire un texte en détail ?",
      choix: [
        "Traduire chaque mot un par un",
        "Lire la question pour savoir quoi chercher",
        "Apprendre le texte par cœur",
        "Ignorer les caractères inconnus",
      ],
      bonneReponse: 1,
      explication: "Lire la question d'abord permet de cibler la lecture et de gagner du temps.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 小张虽然工作很忙，但是不但每天锻炼身体，而且还每个周末去爬山，他觉得运动让他越来越健康。",
      reponse:
        "Bien que Xiao Zhang ait beaucoup de travail, non seulement il fait de l'exercice tous les jours, mais il fait aussi de la randonnée en montagne chaque week-end ; il pense que le sport le rend de plus en plus en bonne santé.",
      explication: "Combinaison de 虽然...但是... (concession) et 不但...而且... (cumul renforcé), avec 越来越 (évolution).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Lis : « 除了周末以外，李老师每天都去学校教汉语，他觉得教书又累又开心。» Réponds en français : que fait Monsieur Li chaque jour sauf le week-end, et comment se sent-il par rapport à son travail ?",
      reponse:
        "Sauf le week-end, Monsieur Li va chaque jour à l'école enseigner le chinois ; il trouve que l'enseignement est à la fois fatigant et source de joie.",
      explication: "除了周末以外 = exclusion (sauf le week-end) ; 又累又开心 = cumul de deux qualités contrastées.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase illustre correctement une addition (et non une exclusion) avec 除了...以外 ?",
      choix: [
        "除了小明以外，大家都到了。",
        "除了下雨天以外，他都骑自行车去学校。",
        "除了游泳以外，我还喜欢打篮球。",
        "除了他以外，没有人知道这件事。",
      ],
      bonneReponse: 2,
      explication: "还 indique une addition : en plus de nager, j'aime aussi jouer au basket. Les trois autres phrases utilisent 都, marque de l'exclusion.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris en pinyin avec les tons corrects : 他不但工作努力，而且对同事又热情又耐心。",
      reponse: "Tā búdàn gōngzuò nǔlì, érqiě duì tóngshì yòu rèqíng yòu nàixīn.",
      explication: "不但 búdàn (2e+4e), 而且 érqiě (2e+3e), 热情 rèqíng (4e+2e), 耐心 nàixīn (4e+1er).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 不但...而且... ?",
      choix: ["Bien que... mais...", "Non seulement... mais encore...", "Sauf...", "En même temps..."],
      bonneReponse: 1,
      explication: "不但...而且... exprime un cumul renforcé : non seulement... mais encore...",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que veut dire 根据这段话 (gēnjù zhè duàn huà) ?",
      reponse: "D'après ce texte / selon ce passage.",
      explication: "Formule typique introduisant les questions de compréhension écrite.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ce restaurant est à la fois pas cher et délicieux. »",
      reponse: "这家饭馆又便宜又好吃。(Zhè jiā fànguǎn yòu piányi yòu hǎochī.)",
      explication: "又...又... cumule deux qualités du même sujet.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel mot après 除了...以外 indique une addition plutôt qu'une exclusion ?",
      choix: ["都", "也 / 还", "才", "就"],
      bonneReponse: 1,
      explication: "也 ou 还 (aussi) indiquent une addition ; 都 (tous) indique une exclusion.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi vaut-il mieux lire la question avant de relire le texte en détail ?",
      reponse: "Parce que cela permet de savoir précisément quelle information chercher dans le texte, ce qui fait gagner du temps et évite de tout traduire inutilement.",
      explication: "C'est une stratégie clé de la méthode de lecture pour le HSK 4.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Vers le HSK 4, lecture de textes courts",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 一边...一边... ?",
          choix: ["Sauf...", "Deux actions en même temps", "Plus... plus...", "Bien que... mais..."],
          bonneReponse: 1,
          explication: "一边...一边... décrit deux actions simultanées réalisées par le même sujet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en chinois : « Bien qu'il fasse froid, elle est sortie quand même. »",
          reponse: "虽然天气很冷，但是她还是出去了。(Suīrán tiānqì hěn lěng, dànshì tā háishi chūqù le.)",
          explication: "虽然...但是... encadre la concession ; 还是 renforce l'idée de « quand même ».",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : 他___会说英语，___会说日语。",
          choix: ["虽然 / 但是", "不但 / 而且", "除了 / 以外", "一边 / 一边"],
          bonneReponse: 1,
          explication: "不但...而且... exprime le cumul renforcé de deux compétences.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : 除了中文以外，她还会说法语和西班牙语，她的朋友都觉得她很厉害。",
          reponse: "En plus du chinois, elle parle aussi français et espagnol ; tous ses amis la trouvent impressionnante.",
          explication: "除了...以外 + 还 = addition ; 都 ici porte sur 朋友 (tous ses amis), pas sur l'exclusion de 除了.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Remets dans l'ordre : 好吃 / 便宜 / 这个 / 菜 / 又 / 又",
          reponse: "这个菜又好吃又便宜。(Zhège cài yòu hǎochī yòu piányi.) — Ce plat est à la fois délicieux et pas cher.",
          explication: "又...又... cumule deux qualités : 好吃 (délicieux) et 便宜 (pas cher).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Lis le texte suivant et réponds en français : « 王医生虽然每天工作十个小时，但是他从来不抱怨。他不但认真对待病人，而且总是笑着跟他们说话。除了周日以外，他每天都去医院上班。» Que peut-on savoir sur le docteur Wang d'après ce texte ?",
          reponse:
            "Le docteur Wang travaille dix heures par jour mais ne se plaint jamais ; il traite ses patients avec sérieux et leur parle toujours en souriant ; il va travailler à l'hôpital tous les jours sauf le dimanche.",
          explication: "虽然...但是... (concession), 不但...而且... (cumul renforcé), 除了...以外 + 都 (exclusion, ici 周日 est exclu).",
        },
      ],
    },
    {
      titre: "Examen 2 — Vers le HSK 4, lecture de textes courts",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 除了...以外 quand il est suivi de 都 ?",
          choix: ["Une addition", "Une exclusion", "Une évolution", "Une simultanéité"],
          bonneReponse: 1,
          explication: "除了...以外 + 都 signifie « tout sauf... » : c'est une exclusion.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le pinyin avec les tons de 而且 et sa traduction.",
          reponse: "érqiě — mais encore, mais aussi",
          explication: "而 ér (2e ton), 且 qiě (3e ton).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase est correcte pour dire « Elle écoute de la musique en cuisinant » ?",
          choix: [
            "她又听音乐又做饭。",
            "她一边听音乐，一边做饭。",
            "她虽然听音乐，但是做饭。",
            "除了听音乐以外，她做饭。",
          ],
          bonneReponse: 1,
          explication: "一边...一边... décrit deux actions simultanées : ici, écouter de la musique et cuisiner.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pose la question de compréhension en chinois : « D'après ce texte, que peut-on savoir ? »",
          reponse: "根据这段话，可以知道什么？(Gēnjù zhè duàn huà, kěyǐ zhīdào shénme?)",
          explication: "Formule standard des questions de compréhension écrite au HSK 4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Lis : « 张老师除了教汉语以外，还教历史。她虽然工作很忙，但是每天都花时间跟学生聊天。她的学生都觉得她又耐心又幽默。» Traduis ce texte en français.",
          reponse:
            "En plus d'enseigner le chinois, Madame Zhang enseigne aussi l'histoire. Bien qu'elle ait beaucoup de travail, elle prend chaque jour le temps de discuter avec ses élèves. Tous ses élèves la trouvent à la fois patiente et pleine d'humour.",
          explication: "除了...以外+还 (addition), 虽然...但是... (concession), 又...又... (cumul de qualités).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige en chinois deux phrases sur un(e) camarade imaginaire : (1) qu'il/elle est à la fois intelligent(e) et travailleur/se ; (2) qu'en plus des mathématiques, il/elle aime aussi le chinois.",
          reponse:
            "(1) 他又聪明又努力。(Tā yòu cōngming yòu nǔlì.) (2) 除了数学以外，他还喜欢汉语。(Chúle shùxué yǐwài, tā hái xǐhuan Hànyǔ.)",
          explication: "又...又... pour cumuler deux qualités ; 除了...以外+还 pour ajouter une information.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Méthode de lecture : repérer le sujet général, deviner le sens par le contexte, lire la question avant de relire le texte.",
    "虽然...但是... (suīrán...dànshì...) : concession, bien que... mais... ; dànshì ≈ kěshì ≈ búguò.",
    "不但...而且... (búdàn...érqiě...) : cumul renforcé, non seulement... mais encore... (l'info après 而且 est souvent la plus importante).",
    "一边...一边... : deux actions simultanées par le même sujet ; 又...又... : deux qualités cumulées par le même sujet.",
    "除了...以外 : suivi de 都 = exclusion (« sauf... ») ; suivi de 还/也 = addition (« en plus de... »).",
    "根据这段话，可以知道... est la formule standard des questions de compréhension écrite HSK 4 — repère les mots-clés de la question avant tout.",
  ],
},
{
  slug: "hsk2-achats",
  titre: "HSK 2 — Faire des achats",
  matiere: "chinois",
  niveau: "5eme",
  langueVoix: "zh-CN",
  description:
    "Faire des achats en chinois : utiliser le verbe 买, désigner un objet avec 这个/那个, demander et donner un prix avec 多少钱, compter l'argent (块/毛/分), distinguer 贵 et 便宜, et calculer un total avec 一共, niveau HSK 2.",
  objectifs: [
    "Utiliser 买 (acheter) et désigner un objet avec 这个/那个",
    "Demander le prix avec 多少钱 et comprendre la réponse",
    "Compter l'argent chinois : 块 (yuán), 毛 (jiǎo), 分 (fēn)",
    "Distinguer 贵 (cher) et 便宜 (pas cher) et utiliser 一点 pour nuancer",
    "Calculer et exprimer un total avec 一共",
  ],
  slides: [
    {
      titre: "Le verbe 买 : acheter",
      illustration: "🛍️",
      visuel: "我想买... (wǒ xiǎng mǎi...)",
      contenu: [
        "买 (mǎi) : acheter ; 卖 (mài) : vendre — attention aux tons, ils se ressemblent !",
        "想 (xiǎng) : avoir envie de, vouloir",
        "我想买一件衣服。(wǒ xiǎng mǎi yí jiàn yīfu.) : je voudrais acheter un vêtement",
        "件 (jiàn) : classificateur pour les vêtements",
      ],
      voixOff:
        "Le verbe mǎi signifie acheter. Attention à ne pas le confondre avec mài, vendre : seul le ton change, mais le sens est opposé ! Pour exprimer une envie polie, on ajoute xiǎng avant le verbe : wǒ xiǎng mǎi, je voudrais acheter. Notez le classificateur jiàn, utilisé spécifiquement pour les vêtements.",
    },
    {
      titre: "Désigner un objet : 这个 / 那个",
      illustration: "👉",
      visuel: "这个 · 那个",
      contenu: [
        "这个 (zhège) : celui-ci, ce...-ci (proche)",
        "那个 (nàge) : celui-là, ce...-là (loin)",
        "这个多少钱？(zhège duōshao qián?) : combien coûte celui-ci ?",
        "个 (ge) est le classificateur par défaut après 这/那",
      ],
      voixOff:
        "Pour montrer un objet, on utilise zhège pour ce qui est proche, littéralement « ce-ci », et nàge pour ce qui est plus loin, « ce-là ». Le classificateur ge s'insère directement entre zhè ou nà et le nom, ou peut être utilisé seul pour désigner l'objet, comme dans zhège duōshao qián, combien coûte celui-ci.",
    },
    {
      titre: "Demander le prix : 多少钱？",
      illustration: "💰",
      visuel: "这个多少钱？",
      contenu: [
        "钱 (qián) : l'argent",
        "多少 (duōshao) : combien (pour un grand nombre, sans classificateur)",
        "这个多少钱？(zhège duōshao qián?) : combien ça coûte ?",
        "二十块。(èrshí kuài.) : vingt yuans",
      ],
      voixOff:
        "Pour demander un prix, on utilise duōshao, combien, suivi de qián, l'argent : zhège duōshao qián, combien ça coûte. Contrairement à jǐ, duōshao ne demande pas de classificateur, car on ne sait pas à l'avance si le nombre sera petit ou grand. On répond simplement avec le chiffre suivi de l'unité monétaire, comme èrshí kuài, vingt yuans.",
    },
    {
      titre: "Compter l'argent : 块, 毛, 分",
      illustration: "💵",
      visuel: "十五块五毛",
      contenu: [
        "块 (kuài) : yuan (à l'oral) ; 元 (yuán) est la forme écrite/officielle",
        "毛 (máo) : dixième de yuan (à l'oral) ; 角 (jiǎo) à l'écrit — 10 毛 = 1 块",
        "分 (fēn) : centième de yuan — 10 分 = 1 毛",
        "十五块五毛 (shíwǔ kuài wǔ máo) : quinze yuans cinquante centimes",
      ],
      voixOff:
        "La monnaie chinoise se compte en trois unités : kuài, l'unité principale, dite yuán à l'écrit ; máo, un dixième de kuài, dit jiǎo à l'écrit ; et fēn, un centième de kuài. Dix máo font un kuài, dix fēn font un máo. On dit donc shíwǔ kuài wǔ máo pour quinze yuans cinquante centimes, en énumérant les unités du plus grand au plus petit.",
    },
    {
      titre: "贵 et 便宜",
      illustration: "⚖️",
      visuel: "太贵了！/ 很便宜",
      contenu: [
        "贵 (guì) : cher ; 便宜 (piányi) : pas cher, bon marché",
        "太...了 (tài...le) : trop... — 太贵了！(tài guì le!) : c'est trop cher !",
        "很便宜 (hěn piányi) : c'est vraiment pas cher",
        "便宜一点，可以吗？(piányi yìdiǎn, kěyǐ ma?) : un peu moins cher, c'est possible ?",
      ],
      voixOff:
        "Pour juger un prix, deux adjectifs opposés : guì, cher, et piányi, pas cher. La structure tài...le exprime l'excès : tài guì le, c'est trop cher. Pour négocier gentiment, on peut demander piányi yìdiǎn, kěyǐ ma, un peu moins cher, c'est possible ? Yìdiǎn signifie « un peu » et adoucit la demande.",
    },
    {
      titre: "Les classificateurs des objets courants",
      illustration: "📦",
      visuel: "一件衣服 · 一本书 · 一个苹果",
      contenu: [
        "件 (jiàn) : vêtements — 一件衣服 (yí jiàn yīfu) un vêtement",
        "本 (běn) : livres, cahiers — 一本书 (yì běn shū) un livre",
        "个 (ge) : classificateur général — 一个苹果 (yí ge píngguǒ) une pomme",
        "斤 (jīn) : demi-kilo, pour les fruits et légumes au marché",
      ],
      voixOff:
        "Chaque type d'objet a son propre classificateur : jiàn pour les vêtements, běn pour les livres et cahiers, et ge, le classificateur général, pour beaucoup d'autres objets comme les fruits. Au marché, on utilise aussi jīn, une unité de poids traditionnelle qui vaut environ cinq cents grammes, pour acheter des fruits ou des légumes.",
    },
    {
      titre: "Calculer le total : 一共",
      illustration: "🧮",
      visuel: "一共多少钱？",
      contenu: [
        "一共 (yígòng) : au total, en tout",
        "一共多少钱？(yígòng duōshao qián?) : combien ça fait au total ?",
        "一共三十块。(yígòng sānshí kuài.) : ça fait trente yuans en tout",
        "给你钱。(gěi nǐ qián.) : voici l'argent (je vous donne l'argent)",
      ],
      voixOff:
        "Pour connaître le prix total de plusieurs achats, on demande yígòng duōshao qián, combien ça fait au total. Le vendeur répond avec yígòng suivi du montant : yígòng sānshí kuài, ça fait trente yuans en tout. Enfin, pour payer, on peut dire gěi nǐ qián, je vous donne l'argent, en tendant la monnaie.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "买 (acheter) ≠ 卖 (vendre) : attention au ton !",
        "这个/那个多少钱？pour demander un prix ; réponse en 块/毛/分",
        "贵 (cher) / 便宜 (pas cher) ; 太贵了 ; 便宜一点，可以吗？",
        "Chaque objet a son classificateur : 件 (vêtements), 本 (livres), 个 (général)",
      ],
      voixOff:
        "Résumons. Tu sais maintenant utiliser mǎi pour acheter, sans le confondre avec mài, vendre. Tu peux désigner un objet avec zhège ou nàge, demander son prix avec duōshao qián, et comprendre la monnaie en kuài, máo et fēn. Tu sais dire qu'un prix est guì ou piányi, et même négocier un peu. Enfin, yígòng te permet de connaître le total de tes achats. Bon shopping en chinois !",
    },
  ],
  fiche: {
    intro:
      "Faire des achats en chinois repose sur le verbe 买, les démonstratifs 这个/那个, la question de prix 多少钱, le système monétaire en trois unités (块/毛/分), les adjectifs 贵/便宜 et le mot 一共 pour le total.",
    sections: [
      {
        titre: "Acheter et désigner",
        points: [
          "买 (mǎi) acheter ≠ 卖 (mài) vendre — attention au ton",
          "我想买... (wǒ xiǎng mǎi...) : je voudrais acheter...",
          "这个 (zhège) celui-ci ; 那个 (nàge) celui-là",
        ],
      },
      {
        titre: "Demander et donner un prix",
        points: [
          "这个多少钱？(zhège duōshao qián?) : combien ça coûte ?",
          "块 (kuài/元) yuan ; 毛 (máo/角) dixième de yuan ; 分 (fēn) centième de yuan",
          "十五块五毛 (shíwǔ kuài wǔ máo) : 15 yuans 50",
        ],
      },
      {
        titre: "Juger et négocier un prix",
        points: [
          "贵 (guì) cher ; 便宜 (piányi) pas cher",
          "太贵了！(tài guì le!) : c'est trop cher !",
          "便宜一点，可以吗？(piányi yìdiǎn, kěyǐ ma?) : un peu moins cher, possible ?",
        ],
      },
      {
        titre: "Classificateurs et total",
        points: [
          "件 (jiàn) vêtements ; 本 (běn) livres ; 个 (ge) classificateur général",
          "一共 (yígòng) : au total — 一共多少钱？(yígòng duōshao qián?)",
        ],
      },
    ],
    audio:
      "Fiche de révision : faire des achats, niveau HSK 2. Le verbe mǎi signifie acheter, à ne pas confondre avec mài, vendre, qui n'en diffère que par le ton. On désigne un objet avec zhège, celui-ci, ou nàge, celui-là, et on demande son prix avec zhège duōshao qián. La monnaie chinoise se compte en kuài, l'unité principale, máo, un dixième de kuài, et fēn, un centième de kuài. Pour juger un prix, on utilise guì, cher, ou piányi, pas cher, avec la structure tài guì le pour dire que c'est trop cher, et on peut négocier avec piányi yìdiǎn, kěyǐ ma. Chaque objet a son classificateur : jiàn pour les vêtements, běn pour les livres, ge pour la plupart des autres objets. Enfin, yígòng duōshao qián permet de connaître le prix total de plusieurs achats.",
  },
  memoCards: [
    { recto: "买 (mǎi) / 卖 (mài)", verso: "Acheter / vendre. Attention au ton, les deux mots se ressemblent beaucoup !" },
    { recto: "这个 (zhège) / 那个 (nàge)", verso: "Celui-ci / celui-là. Ex : 这个多少钱？(Combien coûte celui-ci ?)" },
    { recto: "多少钱？(duōshao qián?)", verso: "Combien ça coûte ? — 多少 (duōshao) = combien, pour un grand nombre." },
    { recto: "块 (kuài) / 毛 (máo) / 分 (fēn)", verso: "Yuan / dixième de yuan / centième de yuan. 10 毛 = 1 块 ; 10 分 = 1 毛." },
    { recto: "贵 (guì) / 便宜 (piányi)", verso: "Cher / pas cher. Ex : 太贵了！(C'est trop cher !)" },
    { recto: "便宜一点，可以吗？", verso: "Un peu moins cher, c'est possible ? Formule pour négocier poliment." },
    { recto: "件 (jiàn) / 本 (běn) / 个 (ge)", verso: "Classificateurs : vêtements / livres / général. Ex : 一件衣服, 一本书, 一个苹果." },
    { recto: "一共 (yígòng)", verso: "Au total, en tout. Ex : 一共多少钱？(Combien ça fait en tout ?)" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 买 (mǎi) ?",
      choix: ["Vendre", "Acheter", "Payer", "Coûter"],
      bonneReponse: 1,
      explication: "买 (mǎi) = acheter. À ne pas confondre avec 卖 (mài) = vendre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment demande-t-on le prix de quelque chose ?",
      choix: ["你叫什么？", "多少钱？", "你好吗？", "几点了？"],
      bonneReponse: 1,
      explication: "多少钱？(duōshao qián?) = combien ça coûte ?",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 这个很便宜。",
      reponse: "Celui-ci n'est vraiment pas cher / c'est vraiment bon marché.",
      explication: "这个 (celui-ci) + 很 (très) + 便宜 (pas cher).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est l'unité monétaire principale chinoise (à l'oral) ?",
      choix: ["分 (fēn)", "毛 (máo)", "块 (kuài)", "元 (yuán)"],
      bonneReponse: 2,
      explication: "块 (kuài) est utilisé à l'oral ; 元 (yuán) est la forme écrite/officielle de la même unité.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois : « Je voudrais acheter un livre. »",
      reponse: "我想买一本书。(Wǒ xiǎng mǎi yì běn shū.)",
      explication: "想 (envie de) + 买 (acheter) + nombre + classificateur 本 (livres) + 书.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Combien de 毛 (máo) y a-t-il dans un 块 (kuài) ?",
      choix: ["5", "10", "100", "1"],
      bonneReponse: 1,
      explication: "10 毛 = 1 块, tout comme 10 分 = 1 毛.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois : « C'est trop cher ! Un peu moins cher, c'est possible ? »",
      reponse: "太贵了！便宜一点，可以吗？(Tài guì le! Piányi yìdiǎn, kěyǐ ma?)",
      explication: "太...了 exprime l'excès ; 一点 adoucit la demande de réduction.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel classificateur utilise-t-on pour « un vêtement » ?",
      choix: ["本", "件", "口", "只"],
      bonneReponse: 1,
      explication: "件 (jiàn) est le classificateur pour les vêtements : 一件衣服.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 一共三十五块八毛。",
      reponse: "Ça fait trente-cinq yuans quatre-vingts (centimes) en tout.",
      explication: "一共 (au total) + montant en 块 puis 毛, du plus grand au plus petit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un mini-dialogue en chinois : tu demandes le prix d'une pomme, le vendeur répond deux yuans, tu demandes le total pour trois pommes.",
      reponse: "你：这个苹果多少钱？卖家：两块。你：三个苹果一共多少钱？(Nǐ: Zhège píngguǒ duōshao qián? Màijiā: Liǎng kuài. Nǐ: Sān ge píngguǒ yígòng duōshao qián?)",
      explication: "两 (liǎng) remplace 二 devant un classificateur ou une unité ; 一共 sert à demander le total.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est correcte pour dire « Ce livre coûte douze yuans cinquante » ?",
      choix: [
        "这本书十二块五毛。",
        "这本书五毛十二块。",
        "这本书十二毛五块。",
        "十二块五毛这本书。",
      ],
      bonneReponse: 0,
      explication: "L'ordre est objet + prix, avec les unités monétaires du plus grand au plus petit : 块 puis 毛.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence de sens entre 贵 et 便宜, puis utilise chaque mot dans une phrase.",
      reponse: "贵 (guì) signifie « cher » et 便宜 (piányi) signifie « pas cher, bon marché ». Ex : 这件衣服太贵了。(Ce vêtement est trop cher.) 那本书很便宜。(Ce livre-là est très bon marché.)",
      explication: "Ce sont deux adjectifs opposés utilisés pour juger un prix.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Cher » se dit :",
      choix: ["便宜", "贵", "多少", "钱"],
      bonneReponse: 1,
      explication: "贵 (guì) = cher. 便宜 (piányi) = pas cher.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment dis-tu « Je voudrais acheter... » en chinois ?",
      reponse: "我想买... (Wǒ xiǎng mǎi...)",
      explication: "想 (envie de) + 买 (acheter).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : 这个多少钱？",
      reponse: "Combien coûte celui-ci ?",
      explication: "这个 (celui-ci) + 多少钱 (combien ça coûte).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel mot permet de demander un total ?",
      choix: ["多少", "一共", "几个", "那个"],
      bonneReponse: 1,
      explication: "一共 (yígòng) = au total, en tout.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dis en chinois : « C'est trop cher ! »",
      reponse: "太贵了！(Tài guì le!)",
      explication: "太...了 exprime l'excès : trop cher.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Faire des achats",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 卖 (mài) ?",
          choix: ["Acheter", "Vendre", "Payer", "Choisir"],
          bonneReponse: 1,
          explication: "卖 (mài) = vendre, à ne pas confondre avec 买 (mǎi) = acheter.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 我想买一个苹果。",
          reponse: "Je voudrais acheter une pomme.",
          explication: "想买 (voudrais acheter) + 一个 (un, classificateur général) + 苹果 (pomme).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Combien ça coûte en tout ? »",
          reponse: "一共多少钱？(Yígòng duōshao qián?)",
          explication: "一共 (au total) + 多少钱 (combien ça coûte).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle unité monétaire vaut un dixième de 块 ?",
          choix: ["分", "毛", "元", "块"],
          bonneReponse: 1,
          explication: "毛 (máo) vaut un dixième de 块 (kuài) ; 元 est simplement la forme écrite de 块.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Ce vêtement est trop cher, un peu moins cher, c'est possible ? »",
          reponse: "这件衣服太贵了，便宜一点，可以吗？(Zhè jiàn yīfu tài guì le, piányi yìdiǎn, kěyǐ ma?)",
          explication: "件 est le classificateur des vêtements ; 太...了 exprime l'excès.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un dialogue complet (3-4 répliques) dans un magasin de vêtements : demande le prix, trouve que c'est cher, négocie, demande le total pour deux articles.",
          reponse: "你：这件衣服多少钱？卖家：五十块。你：太贵了，便宜一点，可以吗？卖家：四十五块。你：两件一共多少钱？(Nǐ: Zhè jiàn yīfu duōshao qián? Màijiā: Wǔshí kuài. Nǐ: Tài guì le, piányi yìdiǎn, kěyǐ ma? Màijiā: Sìshíwǔ kuài. Nǐ: Liǎng jiàn yígòng duōshao qián?)",
          explication: "Réutilise 多少钱, 太贵了, 便宜一点可以吗, et 一共 pour le total.",
        },
      ],
    },
    {
      titre: "Examen 2 — Faire des achats",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 便宜 (piányi) ?",
          choix: ["Cher", "Pas cher", "Beau", "Grand"],
          bonneReponse: 1,
          explication: "便宜 (piányi) = pas cher, bon marché.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 那个书包多少钱？",
          reponse: "Combien coûte ce cartable-là ?",
          explication: "那个 (celui-là) + 书包 (cartable) + 多少钱 (combien ça coûte).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel classificateur utilise-t-on pour un livre ?",
          choix: ["件", "本", "个", "口"],
          bonneReponse: 1,
          explication: "本 (běn) est le classificateur pour les livres et cahiers : 一本书.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Ce livre coûte huit yuans cinq. »",
          reponse: "这本书八块五毛。(Zhè běn shū bā kuài wǔ máo.)",
          explication: "Objet + prix, unités du plus grand au plus petit : 块 puis 毛.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Remets dans l'ordre puis traduis : 钱 / 一共 / 多少 / 这些苹果",
          reponse: "这些苹果一共多少钱？(Zhèxiē píngguǒ yígòng duōshao qián?) — Combien coûtent ces pommes en tout ?",
          explication: "这些 (ceux-ci, pluriel) + sujet + 一共 + 多少钱.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi on ne peut pas confondre 买 et 卖 à l'oral malgré leur ressemblance, et donne un exemple de phrase avec chacun.",
          reponse: "买 (mǎi, 3e ton) et 卖 (mài, 4e ton) se distinguent uniquement par le ton, qui change complètement le sens. Ex : 我想买苹果。(Je voudrais acheter des pommes.) 他卖苹果。(Il vend des pommes.)",
          explication: "Le ton fait partie intégrante du mot en chinois ; une erreur de ton peut inverser le sens.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "买 (acheter) et 卖 (vendre) ne se distinguent que par le ton : attention à la confusion.",
    "这个/那个 désignent un objet proche ou éloigné ; 多少钱 sert à en demander le prix.",
    "La monnaie chinoise se compte en trois unités décroissantes : 块 (yuan), 毛 (dixième), 分 (centième).",
    "贵 (cher) et 便宜 (pas cher) permettent de juger un prix ; 太...了 exprime l'excès, 便宜一点可以吗 sert à négocier.",
    "Chaque type d'objet a son classificateur : 件 (vêtements), 本 (livres), 个 (général).",
    "一共多少钱？permet de demander le prix total de plusieurs articles.",
  ],
},
{
  slug: "hsk2-famille-ecole",
  titre: "HSK 2 — La famille et l'école",
  matiere: "chinois",
  niveau: "5eme",
  langueVoix: "zh-CN",
  description:
    "Nommer les membres de sa famille et compter les personnes avec le classificateur 口, utiliser 有 et 没有 pour dire ce que l'on possède, et découvrir le vocabulaire de l'école (老师, 同学, 教室, 汉语课) avec le niveau HSK 2.",
  objectifs: [
    "Nommer les membres proches de sa famille (爸爸, 妈妈, 哥哥, 姐姐, 弟弟, 妹妹)",
    "Utiliser 有 / 没有 pour dire ce que l'on a ou n'a pas",
    "Compter les personnes de sa famille avec le classificateur 口 et la question 几口人",
    "Nommer les lieux, personnes et objets de l'école (学校, 教室, 老师, 同学, 书)",
    "Construire une petite présentation de sa famille et de sa classe",
  ],
  slides: [
    {
      titre: "La famille proche : 家人",
      illustration: "👨‍👩‍👧",
      visuel: "爸爸 · 妈妈 · 家",
      contenu: [
        "家 (jiā) : la famille, la maison",
        "爸爸 (bàba) : papa ; 妈妈 (māma) : maman",
        "家人 (jiārén) : les membres de la famille",
        "我的爸爸 (wǒ de bàba) : mon papa — 的 (de) marque la possession",
      ],
      voixOff:
        "Le caractère jiā désigne à la fois la famille et la maison : en chinois, les deux idées sont liées. Bàba signifie papa et māma signifie maman ; remarque que ces deux mots se répètent, comme dans beaucoup de langues du monde. Pour dire « mon », on ajoute la particule de après wǒ : wǒ de bàba, mon papa.",
    },
    {
      titre: "Frères et sœurs",
      illustration: "🧒",
      visuel: "哥哥 · 姐姐 · 弟弟 · 妹妹",
      contenu: [
        "哥哥 (gēge) : grand frère ; 弟弟 (dìdi) : petit frère",
        "姐姐 (jiějie) : grande sœur ; 妹妹 (mèimei) : petite sœur",
        "En chinois, il n'existe pas de mot unique pour « frère » ou « sœur »",
        "On précise toujours si la personne est plus âgée ou plus jeune",
      ],
      voixOff:
        "Contrairement au français, le chinois n'a pas de mot général pour dire « frère » ou « sœur » : il faut toujours préciser l'âge relatif. Gēge est le grand frère, dìdi le petit frère, jiějie la grande sœur, mèimei la petite sœur. C'est très important dans la culture chinoise, où l'ordre de naissance donne des droits et des devoirs différents.",
    },
    {
      titre: "Les grands-parents",
      illustration: "👴",
      visuel: "爷爷 · 奶奶",
      contenu: [
        "爷爷 (yéye) : grand-père (du côté du père)",
        "奶奶 (nǎinai) : grand-mère (du côté du père)",
        "外公 (wàigōng) : grand-père (du côté de la mère)",
        "外婆 (wàipó) : grand-mère (du côté de la mère)",
      ],
      voixOff:
        "Le chinois distingue aussi les grands-parents selon qu'ils sont du côté du père ou de la mère. Yéye et nǎinai sont les grands-parents paternels. Wàigōng et wàipó, littéralement « grand-père et grand-mère extérieurs », sont les grands-parents maternels, car autrefois la fille mariée quittait sa famille pour rejoindre celle de son mari.",
    },
    {
      titre: "Avoir avec 有 et 没有",
      illustration: "✅",
      visuel: "我有一个弟弟",
      contenu: [
        "有 (yǒu) : avoir — se nie toujours avec 没 (méi), jamais avec 不",
        "我有一个弟弟 (wǒ yǒu yí ge dìdi) : j'ai un petit frère",
        "我没有姐姐 (wǒ méiyǒu jiějie) : je n'ai pas de grande sœur",
        "你有哥哥吗？(nǐ yǒu gēge ma?) : as-tu un grand frère ?",
      ],
      voixOff:
        "Le verbe yǒu signifie avoir. Attention, c'est le seul verbe courant qui ne se nie pas avec bù : on dit méiyǒu, jamais bù yǒu. Wǒ yǒu yí ge dìdi, j'ai un petit frère ; wǒ méiyǒu jiějie, je n'ai pas de grande sœur. Pour poser la question, on ajoute simplement ma à la fin, ou on utilise la forme yǒu méiyǒu.",
    },
    {
      titre: "Compter la famille : le classificateur 口",
      illustration: "🔢",
      visuel: "你家有几口人？",
      contenu: [
        "口 (kǒu) : classificateur spécial pour compter les membres d'une famille",
        "几 (jǐ) : combien (pour un petit nombre) — remplace le nombre dans la question",
        "你家有几口人？(nǐ jiā yǒu jǐ kǒu rén?) : combien de personnes dans ta famille ?",
        "我家有五口人 (wǒ jiā yǒu wǔ kǒu rén) : ma famille compte cinq personnes",
      ],
      voixOff:
        "Pour compter les personnes d'une famille, le chinois utilise un classificateur spécial, kǒu, qui signifie à l'origine « bouche » — on compte le nombre de bouches à nourrir dans la maison. La question type est nǐ jiā yǒu jǐ kǒu rén, combien de personnes y a-t-il dans ta famille. On répond avec wǒ jiā yǒu, suivi du nombre, kǒu, puis rén.",
    },
    {
      titre: "À l'école : les lieux",
      illustration: "🏫",
      visuel: "学校 · 教室 · 图书馆",
      contenu: [
        "学校 (xuéxiào) : l'école ; 学 (xué) : étudier ; 校 (xiào) : établissement",
        "教室 (jiàoshì) : la salle de classe",
        "图书馆 (túshūguǎn) : la bibliothèque",
        "操场 (cāochǎng) : la cour, le terrain de sport",
      ],
      voixOff:
        "Xuéxiào, l'école, est formé de xué, étudier, et xiào, établissement. La salle de classe se dit jiàoshì, littéralement « la pièce où l'on enseigne ». Túshūguǎn, la bibliothèque, réunit tú, image, shū, livre, et guǎn, bâtiment public. Cāochǎng désigne la cour ou le terrain de sport.",
    },
    {
      titre: "À l'école : les personnes et les objets",
      illustration: "📚",
      visuel: "老师 · 同学 · 书",
      contenu: [
        "老师 (lǎoshī) : le professeur, la professeure",
        "同学 (tóngxué) : le/la camarade de classe",
        "书 (shū) : le livre ; 汉语课 (hànyǔ kè) : le cours de chinois",
        "我们的汉语老师很好 (wǒmen de hànyǔ lǎoshī hěn hǎo) : notre prof de chinois est très bien",
      ],
      voixOff:
        "Lǎoshī, littéralement « maître ancien », désigne le professeur, homme ou femme. Tóngxué signifie camarade de classe : tóng veut dire « même » et xué « étudier », donc « ceux qui étudient ensemble ». Shū est le livre, et hànyǔ kè le cours de chinois : hànyǔ, la langue chinoise, et kè, le cours ou la leçon.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Famille : 爸爸/妈妈, 哥哥/姐姐/弟弟/妹妹, 爷爷/奶奶, 外公/外婆",
        "有 se nie en 没有, jamais en 不有",
        "Compter la famille : 几口人 avec le classificateur spécial 口",
        "École : 学校, 教室, 老师, 同学, 汉语课",
      ],
      voixOff:
        "Résumons. Tu connais maintenant les membres de la famille, en précisant toujours s'ils sont plus âgés ou plus jeunes que toi. Le verbe yǒu se nie en méiyǒu. Pour compter ta famille, tu utilises le classificateur spécial kǒu dans la question nǐ jiā yǒu jǐ kǒu rén. Et à l'école, tu sais nommer ton lǎoshī, tes tóngxué et ton cours de hànyǔ. Bravo, tu peux parler de ta vie de tous les jours !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre présente le vocabulaire de la famille (avec la distinction obligatoire aîné/cadet), le verbe 有 et sa négation particulière 没有, le classificateur 口 pour compter les personnes d'une famille, ainsi que le vocabulaire de l'école.",
    sections: [
      {
        titre: "La famille",
        points: [
          "爸爸 (bàba) papa ; 妈妈 (māma) maman ; 家 (jiā) famille/maison",
          "哥哥 (gēge) grand frère ; 弟弟 (dìdi) petit frère ; 姐姐 (jiějie) grande sœur ; 妹妹 (mèimei) petite sœur",
          "爷爷/奶奶 (yéye/nǎinai) : grands-parents paternels ; 外公/外婆 (wàigōng/wàipó) : grands-parents maternels",
        ],
      },
      {
        titre: "有 et 没有",
        points: [
          "有 (yǒu) : avoir — négation spéciale 没有 (méiyǒu), jamais 不有",
          "我有一个弟弟 (wǒ yǒu yí ge dìdi) : j'ai un petit frère",
          "你有姐姐吗？(nǐ yǒu jiějie ma?) : as-tu une grande sœur ?",
        ],
      },
      {
        titre: "Compter avec le classificateur 口",
        points: [
          "几 (jǐ) : combien (pour une petite quantité) — remplace le nombre dans la question",
          "你家有几口人？(nǐ jiā yǒu jǐ kǒu rén?) : combien de personnes dans ta famille ?",
          "我家有四口人 (wǒ jiā yǒu sì kǒu rén) : ma famille compte quatre personnes",
        ],
      },
      {
        titre: "Le vocabulaire de l'école",
        points: [
          "学校 (xuéxiào) école ; 教室 (jiàoshì) salle de classe ; 图书馆 (túshūguǎn) bibliothèque",
          "老师 (lǎoshī) professeur ; 同学 (tóngxué) camarade de classe",
          "书 (shū) livre ; 汉语课 (hànyǔ kè) cours de chinois",
        ],
      },
    ],
    audio:
      "Fiche de révision : la famille et l'école, niveau HSK 2. En chinois, il n'existe pas de mot général pour frère ou sœur : on précise toujours l'âge relatif, avec gēge le grand frère, dìdi le petit frère, jiějie la grande sœur et mèimei la petite sœur. On distingue aussi les grands-parents paternels, yéye et nǎinai, des grands-parents maternels, wàigōng et wàipó. Le verbe yǒu, avoir, se nie de façon particulière avec méi et non avec bù : on dit méiyǒu. Pour compter les membres d'une famille, on utilise le classificateur spécial kǒu dans la question nǐ jiā yǒu jǐ kǒu rén, combien de personnes dans ta famille. Enfin, à l'école, on retrouve xuéxiào l'école, jiàoshì la salle de classe, lǎoshī le professeur, tóngxué le camarade de classe et hànyǔ kè le cours de chinois.",
  },
  memoCards: [
    { recto: "爸爸 (bàba) / 妈妈 (māma)", verso: "Papa / maman. Ex : 我爱爸爸妈妈。(J'aime mon papa et ma maman.)" },
    { recto: "哥哥 (gēge) / 弟弟 (dìdi)", verso: "Grand frère / petit frère. Le chinois précise toujours l'âge relatif." },
    { recto: "姐姐 (jiějie) / 妹妹 (mèimei)", verso: "Grande sœur / petite sœur. Ex : 我有一个姐姐。(J'ai une grande sœur.)" },
    { recto: "爷爷 (yéye) / 奶奶 (nǎinai)", verso: "Grand-père / grand-mère du côté du père." },
    { recto: "有 (yǒu) / 没有 (méiyǒu)", verso: "Avoir / ne pas avoir. Négation spéciale : jamais 不有, toujours 没有." },
    { recto: "你家有几口人？(nǐ jiā yǒu jǐ kǒu rén?)", verso: "Combien de personnes dans ta famille ? — 口 (kǒu) = classificateur pour les personnes de la famille." },
    { recto: "学校 (xuéxiào) / 教室 (jiàoshì)", verso: "École / salle de classe." },
    { recto: "老师 (lǎoshī) / 同学 (tóngxué)", verso: "Professeur / camarade de classe. Ex : 我的同学很好。(Mon camarade est très sympa.)" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 妈妈 (māma) ?",
      choix: ["Papa", "Maman", "Grande sœur", "Grand-mère"],
      bonneReponse: 1,
      explication: "妈妈 (māma) = maman ; 爸爸 (bàba) = papa.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « grand frère » en chinois ?",
      choix: ["弟弟", "哥哥", "姐姐", "妹妹"],
      bonneReponse: 1,
      explication: "哥哥 (gēge) = grand frère. 弟弟 = petit frère, 姐姐 = grande sœur, 妹妹 = petite sœur.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 我有一个妹妹。",
      reponse: "J'ai une petite sœur.",
      explication: "我 (je) + 有 (avoir) + 一个 (un, avec classificateur 个) + 妹妹 (petite sœur).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 学校 (xuéxiào) ?",
      choix: ["Le professeur", "L'école", "Le livre", "La classe"],
      bonneReponse: 1,
      explication: "学校 (xuéxiào) = l'école, formé de 学 (étudier) et 校 (établissement).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment nie-t-on le verbe 有 (yǒu) ? Donne un exemple.",
      reponse: "On utilise 没有 (méiyǒu), jamais 不有. Ex : 我没有哥哥。(Je n'ai pas de grand frère.)",
      explication: "有 est le seul verbe courant qui se nie avec 没 et non avec 不.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel classificateur utilise-t-on pour compter les personnes d'une famille ?",
      choix: ["个 (gè)", "口 (kǒu)", "本 (běn)", "只 (zhī)"],
      bonneReponse: 1,
      explication: "口 (kǒu), littéralement « bouche », est le classificateur utilisé dans 你家有几口人？",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois : « Combien de personnes y a-t-il dans ta famille ? »",
      reponse: "你家有几口人？(Nǐ jiā yǒu jǐ kǒu rén?)",
      explication: "几 (jǐ) remplace le nombre dans la question, suivi du classificateur 口 puis 人.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réponds à la question 你家有几口人？pour une famille de 4 personnes.",
      reponse: "我家有四口人。(Wǒ jiā yǒu sì kǒu rén.)",
      explication: "Structure : 我家有 + nombre + 口人.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle est la différence entre 爷爷/奶奶 et 外公/外婆 ?",
      choix: [
        "Aucune différence, ce sont des synonymes",
        "爷爷/奶奶 sont les grands-parents paternels, 外公/外婆 les grands-parents maternels",
        "爷爷/奶奶 désignent les oncles et tantes",
        "外公/外婆 sont plus jeunes que 爷爷/奶奶",
      ],
      bonneReponse: 1,
      explication: "Le chinois distingue les grands-parents selon le côté paternel (爷爷/奶奶) ou maternel (外公/外婆).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 我们的汉语老师很好，我的同学也很好。",
      reponse: "Notre professeur de chinois est très bien, mes camarades de classe sont bien aussi.",
      explication: "我们的 (notre) + 汉语老师 (professeur de chinois) ; 也 (yě) = aussi.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige en chinois une phrase présentant ta famille : dis que tu as un grand frère et une petite sœur, et donne le nombre total de personnes dans ta famille (4 personnes).",
      reponse: "我有一个哥哥和一个妹妹。我家有四口人。(Wǒ yǒu yí ge gēge hé yí ge mèimei. Wǒ jiā yǒu sì kǒu rén.)",
      explication: "和 (hé) = et, pour relier deux noms. Ne pas oublier le classificateur 个 et le classificateur spécial 口.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est correcte pour dire « Je n'ai pas de grande sœur » ?",
      choix: ["我不有姐姐。", "我没姐姐有。", "我没有姐姐。", "我姐姐没有。"],
      bonneReponse: 2,
      explication: "La négation de 有 est toujours 没有, placée devant le nom : 我没有姐姐。",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Camarade de classe » se dit :",
      choix: ["老师", "同学", "学校", "教室"],
      bonneReponse: 1,
      explication: "同学 (tóngxué) = camarade de classe. 老师 = professeur, 学校 = école, 教室 = salle de classe.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment dis-tu « petit frère » en chinois ?",
      reponse: "弟弟 (dìdi)",
      explication: "弟弟 (dìdi) = petit frère, à ne pas confondre avec 哥哥 (grand frère).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : 你家有几口人？",
      reponse: "Combien de personnes y a-t-il dans ta famille ?",
      explication: "几 (jǐ) = combien ; 口 (kǒu) = classificateur pour les personnes de la famille.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment nie-t-on 有 (avoir) ?",
      choix: ["不有", "没有", "不是", "没是"],
      bonneReponse: 1,
      explication: "有 se nie exclusivement avec 没, formant 没有.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dis en chinois : « J'ai un professeur de chinois très bien. »",
      reponse: "我有一个很好的汉语老师。(Wǒ yǒu yí ge hěn hǎo de hànyǔ lǎoshī.)",
      explication: "很好的 (très bien, adjectif) se place avant le nom avec 的 ; ne pas oublier le classificateur 个.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La famille et l'école",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 爸爸 (bàba) ?",
          choix: ["Maman", "Papa", "Grand frère", "Grand-père"],
          bonneReponse: 1,
          explication: "爸爸 (bàba) = papa.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 我有一个姐姐和一个弟弟。",
          reponse: "J'ai une grande sœur et un petit frère.",
          explication: "和 (hé) = et, relie 一个姐姐 et 一个弟弟.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « As-tu une petite sœur ? »",
          reponse: "你有妹妹吗？(Nǐ yǒu mèimei ma?)",
          explication: "有 + nom + 吗 pour poser une question fermée sur la possession.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel classificateur manque dans « 我家有五＿人 » ?",
          choix: ["个", "口", "本", "只"],
          bonneReponse: 1,
          explication: "Pour compter les personnes de la famille, on utilise le classificateur spécial 口.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme en question puis réponds négativement : 你有哥哥。(imagine que tu n'as pas de grand frère)",
          reponse: "你有哥哥吗？— 我没有哥哥。(Nǐ yǒu gēge ma? — Wǒ méiyǒu gēge.)",
          explication: "On ajoute 吗 pour la question, et 没有 pour la réponse négative.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige trois phrases en chinois : présente ta famille (2 frères/sœurs au choix), donne le nombre total de personnes, et dis le nom de ton professeur de chinois est très bien.",
          reponse: "我有一个哥哥和一个妹妹。我家有四口人。我们的汉语老师很好。(Wǒ yǒu yí ge gēge hé yí ge mèimei. Wǒ jiā yǒu sì kǒu rén. Wǒmen de hànyǔ lǎoshī hěn hǎo.)",
          explication: "Réutilise 有 + classificateur 个, 有 + 口人, et 老师 + 很好.",
        },
      ],
    },
    {
      titre: "Examen 2 — La famille et l'école",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « bibliothèque » en chinois ?",
          choix: ["教室", "图书馆", "操场", "学校"],
          bonneReponse: 1,
          explication: "图书馆 (túshūguǎn) = bibliothèque : tú (image) + shū (livre) + guǎn (bâtiment public).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 我的同学在教室。",
          reponse: "Mon camarade de classe est dans la salle de classe.",
          explication: "在 (zài) = être à/dans (un lieu).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase signifie « Ma famille compte cinq personnes » ?",
          choix: ["我家有五个人。", "我家有五口人。", "我有五口家人。", "五口人有我家。"],
          bonneReponse: 1,
          explication: "Le classificateur correct pour compter les membres d'une famille est 口, pas 个.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle est la différence entre 爷爷 et 外公 ?",
          reponse: "爷爷 (yéye) est le grand-père du côté du père, 外公 (wàigōng) est le grand-père du côté de la mère.",
          explication: "Le chinois distingue toujours les deux branches de la famille.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Remets dans l'ordre puis traduis : 人 / 你家 / 几口 / 有",
          reponse: "你家有几口人？(Nǐ jiā yǒu jǐ kǒu rén?) — Combien de personnes y a-t-il dans ta famille ?",
          explication: "Ordre : sujet 你家 + verbe 有 + 几口人 (combien + classificateur + personne).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi on ne peut pas dire « 我不有姐姐 » et donne la phrase correcte.",
          reponse: "Le verbe 有 ne se nie jamais avec 不, uniquement avec 没. La phrase correcte est 我没有姐姐。(Je n'ai pas de grande sœur.)",
          explication: "有 est une exception : sa négation est toujours 没有.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le chinois n'a pas de mot général pour « frère » ou « sœur » : il faut toujours préciser l'âge relatif (哥哥/弟弟, 姐姐/妹妹).",
    "On distingue les grands-parents paternels (爷爷/奶奶) et maternels (外公/外婆).",
    "有 (avoir) est un verbe exceptionnel : il se nie uniquement avec 没 (没有), jamais avec 不.",
    "Pour compter les personnes d'une famille, on utilise le classificateur spécial 口, dans la question 你家有几口人？",
    "几 (jǐ) sert à demander « combien » pour un petit nombre et remplace directement le chiffre dans la phrase.",
    "Vocabulaire de l'école à connaître par cœur : 学校, 教室, 老师, 同学, 汉语课.",
  ],
},
{
  slug: "hsk2-quotidien",
  titre: "HSK 2 — La vie quotidienne : heures et dates",
  matiere: "chinois",
  niveau: "5eme",
  langueVoix: "zh-CN",
  description:
    "Dire l'heure (现在几点, 点, 分, 半), nommer les moments de la journée, les jours de la semaine (星期) et les dates (年, 月, 号), et raconter sa journée en plaçant correctement les expressions de temps dans la phrase, niveau HSK 2.",
  objectifs: [
    "Demander et dire l'heure avec 点, 分 et 半",
    "Nommer les moments de la journée : 早上, 中午, 下午, 晚上",
    "Nommer les jours de la semaine avec 星期",
    "Dire une date complète avec 年, 月, 号",
    "Placer correctement les expressions de temps dans la phrase (avant le verbe)",
  ],
  slides: [
    {
      titre: "Demander l'heure : 现在几点？",
      illustration: "⏰",
      visuel: "现在几点？(xiànzài jǐ diǎn?)",
      contenu: [
        "现在 (xiànzài) : maintenant",
        "几点 (jǐ diǎn) : quelle heure — littéralement « combien d'heures »",
        "现在几点？(xiànzài jǐ diǎn?) : quelle heure est-il maintenant ?",
        "现在三点。(xiànzài sān diǎn.) : il est trois heures",
      ],
      voixOff:
        "Pour demander l'heure, on dit xiànzài jǐ diǎn, littéralement « maintenant combien-heures ». Jǐ, combien, remplace directement le nombre dans la question. Pour répondre, on remplace jǐ par le chiffre exact : xiànzài sān diǎn, il est maintenant trois heures. Remarque qu'il n'y a pas besoin du verbe être devant l'heure.",
      },
    {
      titre: "点, 分 et 半",
      illustration: "🕒",
      visuel: "三点半 (sān diǎn bàn)",
      contenu: [
        "点 (diǎn) : heure (unité) ; 分 (fēn) : minute",
        "三点十分 (sān diǎn shí fēn) : trois heures dix",
        "半 (bàn) : demi → 三点半 (sān diǎn bàn) : trois heures et demie",
        "刻 (kè) : quart d'heure → 三点一刻 (sān diǎn yí kè) : trois heures et quart",
      ],
      voixOff:
        "L'heure se construit avec diǎn pour les heures et fēn pour les minutes : sān diǎn shí fēn, trois heures dix. Pour la demie, on utilise bàn à la place du nombre de minutes : sān diǎn bàn, trois heures et demie. Et pour le quart d'heure, on dit kè : sān diǎn yí kè, trois heures et quart.",
    },
    {
      titre: "Les moments de la journée",
      illustration: "🌅",
      visuel: "早上 · 中午 · 下午 · 晚上",
      contenu: [
        "早上 (zǎoshang) : le matin",
        "中午 (zhōngwǔ) : midi",
        "下午 (xiàwǔ) : l'après-midi",
        "晚上 (wǎnshang) : le soir",
      ],
      voixOff:
        "Pour préciser un moment de la journée, on utilise zǎoshang le matin, zhōngwǔ midi, xiàwǔ l'après-midi, et wǎnshang le soir. Ces mots se combinent avec l'heure : zǎoshang qī diǎn, sept heures du matin. En chinois, le moment de la journée se place toujours avant l'heure, pas après comme en français.",
    },
    {
      titre: "Les jours de la semaine : 星期",
      illustration: "📅",
      visuel: "星期一 · 星期二 · ...",
      contenu: [
        "星期 (xīngqī) : semaine",
        "星期一 (xīngqīyī) lundi, 星期二 (xīngqī'èr) mardi... jusqu'à 星期六 (xīngqīliù) samedi",
        "星期日 / 星期天 (xīngqīrì / xīngqītiān) : dimanche",
        "今天星期几？(jīntiān xīngqī jǐ?) : quel jour sommes-nous aujourd'hui ?",
      ],
      voixOff:
        "Les jours de la semaine sont très simples en chinois : xīngqī, semaine, suivi d'un chiffre de un à six pour lundi à samedi. Seul le dimanche est irrégulier : on dit xīngqīrì ou xīngqītiān. Pour demander le jour, on utilise jǐ à la place du chiffre : jīntiān xīngqī jǐ, quel jour sommes-nous aujourd'hui ?",
    },
    {
      titre: "Les dates : 年, 月, 号",
      illustration: "🗓️",
      visuel: "二零二六年七月十号",
      contenu: [
        "年 (nián) : année ; 月 (yuè) : mois ; 号 (hào) ou 日 (rì) : jour du mois",
        "七月 (qī yuè) : juillet — mois + numéro, pas de nom particulier",
        "十号 (shí hào) : le 10 (du mois)",
        "Ordre chinois : année → mois → jour (du plus grand au plus petit)",
      ],
      voixOff:
        "Pour dire une date complète, le chinois suit l'ordre inverse du français : d'abord l'année avec nián, puis le mois avec yuè, puis le jour avec hào ou rì à l'écrit plus formel. Les mois n'ont pas de nom particulier, ils sont simplement numérotés : qī yuè, littéralement « sept-mois », c'est-à-dire juillet. On dit donc l'année, puis le mois, puis le jour, du plus grand au plus petit.",
    },
    {
      titre: "今天, 明天, 昨天",
      illustration: "📆",
      visuel: "昨天 · 今天 · 明天",
      contenu: [
        "今天 (jīntiān) : aujourd'hui",
        "明天 (míngtiān) : demain",
        "昨天 (zuótiān) : hier",
        "今天七月十号，星期五。(jīntiān qī yuè shí hào, xīngqīwǔ.) : aujourd'hui, c'est le 10 juillet, vendredi.",
      ],
      voixOff:
        "Trois mots essentiels pour situer le temps : jīntiān, aujourd'hui, míngtiān, demain, et zuótiān, hier. On les place en tête de phrase, avant le verbe ou même sans verbe du tout, comme dans jīntiān qī yuè shí hào, xīngqīwǔ, aujourd'hui c'est le dix juillet, vendredi.",
    },
    {
      titre: "Raconter sa journée",
      illustration: "🌞",
      visuel: "我早上七点起床",
      contenu: [
        "起床 (qǐchuáng) : se lever ; 吃早饭 (chī zǎofàn) : prendre le petit-déjeuner",
        "上学 (shàngxué) : aller à l'école ; 睡觉 (shuìjiào) : dormir, se coucher",
        "我早上七点起床。(wǒ zǎoshang qī diǎn qǐchuáng.) : je me lève à sept heures du matin",
        "L'expression de temps se place TOUJOURS avant le verbe",
      ],
      voixOff:
        "Pour raconter sa journée, on utilise des verbes comme qǐchuáng, se lever, chī zǎofàn, prendre le petit-déjeuner, shàngxué, aller à l'école, et shuìjiào, dormir. Règle essentielle : en chinois, l'expression de temps se place toujours avant le verbe, jamais après. Wǒ zǎoshang qī diǎn qǐchuáng, mot à mot « je, matin, sept heures, me lève ».",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "L'heure : 点 (heure), 分 (minute), 半 (demie), 刻 (quart)",
        "Moments du jour : 早上/中午/下午/晚上, avant l'heure",
        "Jours de la semaine : 星期 + chiffre (dimanche = 星期日/天)",
        "Date : année → mois → jour ; expression de temps toujours avant le verbe",
      ],
      voixOff:
        "Résumons. Pour dire l'heure : diǎn, fēn, bàn et kè. Les moments de la journée se placent avant l'heure. Les jours de la semaine s'obtiennent avec xīngqī suivi d'un chiffre, sauf le dimanche. Une date complète suit toujours l'ordre année, mois, jour. Et surtout, retiens la règle d'or : en chinois, toute expression de temps se place avant le verbe, jamais après comme en français.",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre présente les structures pour dire l'heure (点/分/半/刻), les moments de la journée, les jours de la semaine (星期) et les dates complètes (年/月/号), ainsi que la règle de position des expressions de temps dans la phrase chinoise.",
    sections: [
      {
        titre: "Dire l'heure",
        points: [
          "现在几点？(xiànzài jǐ diǎn?) : quelle heure est-il ?",
          "点 (diǎn) heure ; 分 (fēn) minute ; 半 (bàn) demie ; 刻 (kè) quart d'heure",
          "三点一刻 (sān diǎn yí kè) : trois heures et quart ; 三点半 (sān diǎn bàn) : trois heures et demie",
        ],
      },
      {
        titre: "Moments du jour et jours de la semaine",
        points: [
          "早上 (zǎoshang) matin ; 中午 (zhōngwǔ) midi ; 下午 (xiàwǔ) après-midi ; 晚上 (wǎnshang) soir",
          "星期一 à 星期六 : lundi à samedi ; 星期日/星期天 : dimanche",
          "今天星期几？(jīntiān xīngqī jǐ?) : quel jour sommes-nous ?",
        ],
      },
      {
        titre: "Les dates",
        points: [
          "年 (nián) année ; 月 (yuè) mois ; 号/日 (hào/rì) jour du mois",
          "Ordre chinois : année → mois → jour (inverse du français)",
          "今天, 明天, 昨天 : aujourd'hui, demain, hier",
        ],
      },
      {
        titre: "Placer le temps dans la phrase",
        points: [
          "L'expression de temps se place toujours avant le verbe",
          "我早上七点起床。(wǒ zǎoshang qī diǎn qǐchuáng.) : je me lève à 7h du matin",
          "Verbes utiles : 起床 se lever, 吃早饭 prendre le petit-déjeuner, 上学 aller à l'école, 睡觉 dormir",
        ],
      },
    ],
    audio:
      "Fiche de révision : la vie quotidienne, heures et dates, niveau HSK 2. Pour demander l'heure, on dit xiànzài jǐ diǎn, et on répond avec diǎn pour les heures et fēn pour les minutes ; bàn signifie demie et kè signifie quart d'heure. Les moments de la journée, zǎoshang le matin, zhōngwǔ midi, xiàwǔ l'après-midi et wǎnshang le soir, se placent avant l'heure. Les jours de la semaine se forment avec xīngqī suivi d'un chiffre de un à six, sauf le dimanche qui se dit xīngqīrì ou xīngqītiān. Une date complète suit l'ordre année avec nián, mois avec yuè, puis jour avec hào, du plus grand au plus petit, l'inverse du français. Enfin, la règle la plus importante : en chinois, toute expression de temps se place avant le verbe, comme dans wǒ zǎoshang qī diǎn qǐchuáng, je me lève à sept heures du matin.",
  },
  memoCards: [
    { recto: "现在几点？(xiànzài jǐ diǎn?)", verso: "Quelle heure est-il ? Réponse : 现在...点。(Il est... heures.)" },
    { recto: "点 (diǎn) / 分 (fēn)", verso: "Heure / minute. Ex : 三点十分 (sān diǎn shí fēn) = 3h10." },
    { recto: "半 (bàn) / 刻 (kè)", verso: "Demie / quart d'heure. Ex : 三点半 = 3h30 ; 三点一刻 = 3h15." },
    { recto: "早上 / 中午 / 下午 / 晚上", verso: "Matin / midi / après-midi / soir. Se place avant l'heure." },
    { recto: "星期一...星期日 (xīngqī...)", verso: "Lundi à dimanche. 星期 + chiffre 1-6, mais dimanche = 星期日/天." },
    { recto: "年 / 月 / 号 (nián / yuè / hào)", verso: "Année / mois / jour du mois. Ordre : année → mois → jour." },
    { recto: "今天 / 明天 / 昨天", verso: "Aujourd'hui / demain / hier." },
    { recto: "我早上七点起床。", verso: "Je me lève à 7h du matin. Règle : le temps se place toujours avant le verbe." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment demande-t-on l'heure en chinois ?",
      choix: ["你好吗？", "现在几点？", "今天星期几？", "你叫什么？"],
      bonneReponse: 1,
      explication: "现在几点？(xiànzài jǐ diǎn?) = quelle heure est-il maintenant ?",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 早上 (zǎoshang) ?",
      choix: ["Le soir", "Midi", "Le matin", "L'après-midi"],
      bonneReponse: 2,
      explication: "早上 (zǎoshang) = le matin. 晚上 = le soir, 中午 = midi, 下午 = l'après-midi.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 现在三点半。",
      reponse: "Il est trois heures et demie maintenant.",
      explication: "半 (bàn) = demie, se place après l'heure.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « dimanche » en chinois ?",
      choix: ["星期七", "星期日", "星期一", "星期六"],
      bonneReponse: 1,
      explication: "Dimanche est irrégulier : 星期日 (xīngqīrì) ou 星期天 (xīngqītiān), jamais 星期七.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois : « Quel jour sommes-nous aujourd'hui ? »",
      reponse: "今天星期几？(Jīntiān xīngqī jǐ?)",
      explication: "几 (jǐ) remplace le chiffre du jour dans la question.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans quel ordre le chinois exprime-t-il une date complète ?",
      choix: ["Jour, mois, année", "Mois, jour, année", "Année, mois, jour", "Année, jour, mois"],
      bonneReponse: 2,
      explication: "Le chinois va du plus grand au plus petit : 年 (année) → 月 (mois) → 号 (jour).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en français : 我晚上九点睡觉。",
      reponse: "Je me couche/dors à neuf heures du soir.",
      explication: "晚上 (soir) + 九点 (9h) se placent avant le verbe 睡觉 (dormir).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Où se place l'expression de temps dans une phrase chinoise ?",
      choix: ["Après le verbe", "À la fin de la phrase", "Avant le verbe", "Cela n'a pas d'importance"],
      bonneReponse: 2,
      explication: "Règle essentielle : en chinois, l'expression de temps se place toujours avant le verbe.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en chinois : « Je me lève à sept heures et quart le matin. »",
      reponse: "我早上七点一刻起床。(Wǒ zǎoshang qī diǎn yí kè qǐchuáng.)",
      explication: "Ordre : sujet + moment du jour + heure (avec 刻 pour quart) + verbe.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 今天是二零二六年七月十号，星期五。",
      reponse: "Aujourd'hui, c'est le 10 juillet 2026, vendredi.",
      explication: "是 (être) est facultatif mais possible ici ; l'ordre reste année-mois-jour, puis le jour de la semaine.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est correctement construite ?",
      choix: [
        "我起床早上七点。",
        "我七点早上起床。",
        "我早上七点起床。",
        "早上起床我七点。",
      ],
      bonneReponse: 2,
      explication: "L'ordre correct est sujet + moment du jour + heure + verbe : 我早上七点起床。",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige en chinois trois phrases racontant ta journée : l'heure où tu te lèves, l'heure où tu vas à l'école, l'heure où tu te couches.",
      reponse: "我早上七点起床。我早上八点上学。我晚上十点睡觉。(Wǒ zǎoshang qī diǎn qǐchuáng. Wǒ zǎoshang bā diǎn shàngxué. Wǒ wǎnshang shí diǎn shuìjiào.)",
      explication: "Chaque phrase suit l'ordre sujet + moment du jour + heure + verbe.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Minute » se dit :",
      choix: ["点", "分", "半", "刻"],
      bonneReponse: 1,
      explication: "分 (fēn) = minute. 点 = heure, 半 = demie, 刻 = quart d'heure.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment dit-on « demain » en chinois ?",
      reponse: "明天 (míngtiān)",
      explication: "明天 (míngtiān) = demain ; 今天 = aujourd'hui, 昨天 = hier.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : 你星期几上学？",
      reponse: "Quels jours vas-tu à l'école ?",
      explication: "星期几 (xīngqī jǐ) = quel jour de la semaine ; 上学 = aller à l'école.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment dit-on « lundi » en chinois ?",
      choix: ["星期一", "星期二", "星期天", "星期六"],
      bonneReponse: 0,
      explication: "星期一 (xīngqīyī) = lundi, littéralement « semaine-un ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dis en chinois : « Je vais à l'école à huit heures du matin. »",
      reponse: "我早上八点上学。(Wǒ zǎoshang bā diǎn shàngxué.)",
      explication: "Ordre : sujet + moment du jour + heure + verbe.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La vie quotidienne : heures et dates",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 现在几点？?",
          choix: ["Quel jour sommes-nous ?", "Quelle heure est-il ?", "Quel âge as-tu ?", "Où es-tu ?"],
          bonneReponse: 1,
          explication: "现在几点？(xiànzài jǐ diǎn?) = quelle heure est-il maintenant ?",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 现在八点一刻。",
          reponse: "Il est huit heures et quart maintenant.",
          explication: "一刻 (yí kè) = un quart d'heure.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Aujourd'hui, nous sommes mercredi. »",
          reponse: "今天星期三。(Jīntiān xīngqīsān.)",
          explication: "星期三 (xīngqīsān) = mercredi ; pas besoin du verbe 是 ici.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel est l'ordre correct pour une date complète en chinois ?",
          choix: ["月, 号, 年", "年, 月, 号", "号, 月, 年", "月, 年, 号"],
          bonneReponse: 1,
          explication: "L'ordre chinois va du plus grand au plus petit : 年 (année), 月 (mois), 号 (jour).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Place correctement les mots pour dire « Je me couche à dix heures du soir » : 睡觉 / 我 / 十点 / 晚上",
          reponse: "我晚上十点睡觉。(Wǒ wǎnshang shí diǎn shuìjiào.)",
          explication: "Ordre : sujet + moment du jour + heure + verbe.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige en chinois une présentation de ta journée du lundi : heure du lever, heure d'arrivée à l'école, heure du coucher.",
          reponse: "星期一，我早上六点半起床。我早上八点上学。我晚上十点睡觉。(Xīngqīyī, wǒ zǎoshang liù diǎn bàn qǐchuáng. Wǒ zǎoshang bā diǎn shàngxué. Wǒ wǎnshang shí diǎn shuìjiào.)",
          explication: "Le jour de la semaine se place en tête de phrase ; chaque expression de temps précède son verbe.",
        },
      ],
    },
    {
      titre: "Examen 2 — La vie quotidienne : heures et dates",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « samedi » en chinois ?",
          choix: ["星期五", "星期六", "星期日", "星期天"],
          bonneReponse: 1,
          explication: "星期六 (xīngqīliù) = samedi, littéralement « semaine-six ».",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 昨天星期四。",
          reponse: "Hier, c'était jeudi.",
          explication: "昨天 (zuótiān) = hier ; 星期四 (xīngqīsì) = jeudi.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase signifie « Je prends le petit-déjeuner à sept heures et demie » ?",
          choix: [
            "我吃早饭七点半。",
            "我七点半吃早饭。",
            "七点半我吃早饭是。",
            "我吃七点半早饭。",
          ],
          bonneReponse: 1,
          explication: "L'expression de temps 七点半 doit précéder le verbe 吃早饭.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Quelle heure est-il ? Il est cinq heures vingt. »",
          reponse: "现在几点？现在五点二十分。(Xiànzài jǐ diǎn? Xiànzài wǔ diǎn èrshí fēn.)",
          explication: "分 (fēn) peut être omis à l'oral pour les dizaines de minutes, mais reste correct à l'écrit.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Remets dans l'ordre puis traduis : 号 / 月 / 二零二六年 / 十 / 七",
          reponse: "二零二六年七月十号。(Èr líng èr liù nián qī yuè shí hào.) — Le 10 juillet 2026.",
          explication: "Ordre année (年) → mois (月) → jour (号), du plus grand au plus petit.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique la règle de position des expressions de temps en chinois et illustre-la avec un exemple de ton choix.",
          reponse: "En chinois, toute expression de temps (heure, jour, moment de la journée) se place avant le verbe, jamais après. Exemple : 我星期一早上八点上学。(Wǒ xīngqīyī zǎoshang bā diǎn shàngxué.) — Je vais à l'école le lundi à huit heures du matin.",
          explication: "C'est une différence majeure avec le français, où le complément de temps se place souvent après le verbe.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'heure se construit avec 点 (heures), 分 (minutes), 半 (demie) et 刻 (quart d'heure).",
    "Les moments de la journée (早上/中午/下午/晚上) se placent avant l'heure, dans l'ordre : moment + heure.",
    "Les jours de la semaine se forment avec 星期 + chiffre de 1 à 6 ; seul dimanche est irrégulier (星期日/星期天).",
    "Une date complète suit l'ordre année → mois → jour (年 → 月 → 号), l'inverse exact du français.",
    "今天/明天/昨天 (aujourd'hui/demain/hier) se placent en tête de phrase.",
    "Règle d'or : en chinois, toute expression de temps se place toujours avant le verbe, jamais après.",
  ],
},
{
  slug: "hsk2-se-presenter",
  titre: "HSK 2 — Se présenter et parler de soi",
  matiere: "chinois",
  niveau: "5eme",
  description:
    "Savoir se présenter en chinois : dire son nom, sa nationalité et son âge, poser des questions simples avec 吗 et 什么, et maîtriser l'ordre des mots sujet-verbe-objet avec le vocabulaire HSK 1-2.",
  objectifs: [
    "Saluer et prendre congé (你好, 再见)",
    "Se présenter : nom (我叫...), nationalité (我是法国人), âge (我今年...岁)",
    "Poser des questions avec 什么, 哪 et la particule finale 吗",
    "Respecter l'ordre des mots sujet-verbe-objet (S-V-O)",
    "Lire le pinyin et distinguer les quatre tons",
  ],
  slides: [
    {
      titre: "Saluer en chinois",
      illustration: "👋",
      visuel: "你好 (nǐ hǎo)",
      contenu: [
        "你好 (nǐ hǎo) : bonjour",
        "您好 (nín hǎo) : bonjour (poli, à un adulte)",
        "再见 (zàijiàn) : au revoir",
        "谢谢 (xièxie) : merci",
      ],
      voixOff:
        "Pour saluer quelqu'un en chinois, on dit nǐ hǎo, littéralement « toi bien ». Avec un adulte ou un professeur, on utilise la forme polie nín hǎo. Pour prendre congé, on dit zàijiàn, c'est-à-dire « au revoir », et pour remercier, xièxie. Ce sont les quatre premiers mots à connaître absolument.",
    },
    {
      titre: "L'ordre des mots : S-V-O",
      illustration: "🧱",
      visuel: "我 + 是 + 学生",
      contenu: [
        "Le chinois suit l'ordre Sujet - Verbe - Objet, comme le français",
        "我是学生 (wǒ shì xuéshēng) : je suis élève",
        "我爱中国 (wǒ ài Zhōngguó) : j'aime la Chine",
        "Les verbes ne se conjuguent jamais : 是 reste 是 à toutes les personnes",
      ],
      voixOff:
        "Bonne nouvelle : la phrase chinoise suit le même ordre que le français, sujet, verbe, objet. Wǒ shì xuéshēng signifie mot à mot « je - être - élève ». Encore mieux : les verbes ne se conjuguent jamais. Shì veut dire « suis », « es », « est » ou « sont » selon le sujet, sans jamais changer de forme.",
    },
    {
      titre: "Dire son nom",
      illustration: "📛",
      visuel: "我叫... (wǒ jiào...)",
      contenu: [
        "我叫 Léa (wǒ jiào Léa) : je m'appelle Léa",
        "叫 (jiào) : s'appeler",
        "名字 (míngzi) : le prénom, le nom",
        "他叫什么？(tā jiào shénme?) : comment s'appelle-t-il ?",
      ],
      voixOff:
        "Pour dire son nom, on utilise le verbe jiào, qui signifie « s'appeler ». Wǒ jiào Léa : je m'appelle Léa. Le mot míngzi désigne le prénom. Retiens bien que le pronom tā s'écrit avec un caractère différent pour « il » et pour « elle », mais se prononce exactement pareil.",
    },
    {
      titre: "Demander le nom de quelqu'un",
      illustration: "❓",
      visuel: "你叫什么名字？",
      contenu: [
        "你叫什么名字？(nǐ jiào shénme míngzi?) : comment t'appelles-tu ?",
        "什么 (shénme) : quoi, quel",
        "Le mot interrogatif reste à la place de la réponse : pas d'inversion !",
        "Réponse : 我叫马丁 (wǒ jiào Mǎdīng) : je m'appelle Martin",
      ],
      voixOff:
        "Pour demander le nom de quelqu'un, on dit nǐ jiào shénme míngzi, mot à mot « tu t'appelles quel nom ». En chinois, le mot interrogatif shénme se place exactement là où viendra la réponse : on ne change jamais l'ordre de la phrase pour poser une question. C'est une grande différence avec le français.",
    },
    {
      titre: "Dire sa nationalité",
      illustration: "🌍",
      visuel: "我是法国人",
      contenu: [
        "我是法国人 (wǒ shì Fǎguórén) : je suis français(e)",
        "法国 (Fǎguó) : la France ; 中国 (Zhōngguó) : la Chine",
        "人 (rén) : personne → pays + 人 = habitant du pays",
        "你是哪国人？(nǐ shì nǎ guó rén?) : de quel pays es-tu ?",
      ],
      voixOff:
        "Pour dire sa nationalité, on ajoute simplement rén, « personne », après le nom du pays : Fǎguó, la France, donne Fǎguórén, un Français ou une Française. Zhōngguórén, un Chinois. Pour poser la question, on utilise nǎ, « quel » : nǐ shì nǎ guó rén, littéralement « tu es quelle-pays-personne » ?",
    },
    {
      titre: "Dire son âge",
      illustration: "🎂",
      visuel: "我今年十三岁",
      contenu: [
        "我今年十三岁 (wǒ jīnnián shísān suì) : j'ai treize ans cette année",
        "今年 (jīnnián) : cette année ; 岁 (suì) : an, année d'âge",
        "你今年多大？(nǐ jīnnián duō dà?) : quel âge as-tu ?",
        "Attention : pas de verbe 是 devant l'âge !",
      ],
      voixOff:
        "Pour donner son âge, on dit wǒ jīnnián shísān suì : moi, cette année, treize ans. Remarque qu'il n'y a pas de verbe « être » : on ne dit jamais wǒ shì shísān suì. Pour demander l'âge d'un camarade, on utilise nǐ jīnnián duō dà, littéralement « toi cette année combien grand ».",
    },
    {
      titre: "La particule interrogative 吗",
      illustration: "🔮",
      visuel: "...吗？(ma)",
      contenu: [
        "吗 (ma) en fin de phrase = question fermée (réponse oui/non)",
        "你是学生吗？(nǐ shì xuéshēng ma?) : es-tu élève ?",
        "Oui → 是 (shì) ; Non → 不是 (bú shì)",
        "L'ordre des mots ne change pas : phrase + 吗 + ？",
      ],
      voixOff:
        "Pour transformer n'importe quelle affirmation en question fermée, il suffit d'ajouter la particule ma à la fin de la phrase. Nǐ shì xuéshēng, « tu es élève », devient nǐ shì xuéshēng ma, « es-tu élève ? ». Pour répondre oui, on répète le verbe : shì. Pour répondre non, on ajoute la négation bù : bú shì.",
    },
    {
      titre: "Parler de sa famille avec 有 et 个",
      illustration: "👨‍👩‍👧‍👦",
      visuel: "我有一个哥哥",
      contenu: [
        "有 (yǒu) : avoir ; négation spéciale : 没有 (méiyǒu)",
        "个 (gè) : classificateur obligatoire entre le nombre et le nom",
        "我有一个哥哥 (wǒ yǒu yí ge gēge) : j'ai un grand frère",
        "姐姐 (jiějie) : grande sœur ; 家 (jiā) : famille, maison",
      ],
      voixOff:
        "Le verbe yǒu signifie « avoir » et se nie avec méi, jamais avec bù. Pour compter des personnes ou des objets, le chinois exige un petit mot entre le nombre et le nom : le classificateur. Le plus courant est gè. On dit donc wǒ yǒu yí ge gēge, « j'ai un grand frère », et jamais wǒ yǒu yī gēge. Oublier le classificateur est l'erreur la plus fréquente des débutants.",
    },
    {
      titre: "Le pinyin et les quatre tons",
      illustration: "🎵",
      visuel: "mā má mǎ mà",
      contenu: [
        "1er ton (ā) : haut et plat — 妈 mā (maman)",
        "2e ton (á) : montant — 麻 má",
        "3e ton (ǎ) : descend puis remonte — 马 mǎ (cheval)",
        "4e ton (à) : descendant et sec — 骂 mà (gronder)",
      ],
      voixOff:
        "Le pinyin est la transcription du chinois en lettres latines, avec des accents qui notent les tons. Chaque syllabe porte l'un des quatre tons, et changer de ton change le sens du mot : mā avec le premier ton signifie « maman », alors que mǎ avec le troisième ton signifie « cheval » ! Il faut donc toujours apprendre un mot avec son ton.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Se présenter : 我叫... / 我是法国人 / 我今年...岁",
        "Questions : 什么 et 哪 restent à la place de la réponse ; 吗 en fin de phrase",
        "Ordre des mots S-V-O, verbes invariables",
        "Nombre + classificateur 个 + nom ; les 4 tons changent le sens",
      ],
      voixOff:
        "Résumons. Tu sais maintenant te présenter : wǒ jiào pour ton nom, wǒ shì Fǎguórén pour ta nationalité, wǒ jīnnián shísān suì pour ton âge. Pour poser une question, shénme et nǎ se placent là où viendra la réponse, et ma se met en fin de phrase. L'ordre des mots reste toujours sujet-verbe-objet, on n'oublie pas le classificateur gè, et on apprend chaque mot avec son ton. Bravo, tu peux faire connaissance en chinois !",
    },
  ],
  fiche: {
    intro:
      "Se présenter en chinois repose sur trois phrases modèles (nom, nationalité, âge), deux façons de poser des questions (mots interrogatifs et particule 吗) et un ordre des mots fixe : sujet-verbe-objet.",
    sections: [
      {
        titre: "Saluer",
        points: [
          "你好 (nǐ hǎo) : bonjour ; 您好 (nín hǎo) : bonjour poli",
          "再见 (zàijiàn) : au revoir ; 谢谢 (xièxie) : merci",
        ],
      },
      {
        titre: "Les trois phrases de présentation",
        points: [
          "我叫... (wǒ jiào...) : je m'appelle...",
          "我是法国人 (wǒ shì Fǎguórén) : je suis français(e) — pays + 人 = nationalité",
          "我今年十三岁 (wǒ jīnnián shísān suì) : j'ai 13 ans — sans le verbe 是",
        ],
      },
      {
        titre: "Poser des questions",
        points: [
          "你叫什么名字？(nǐ jiào shénme míngzi?) : comment t'appelles-tu ?",
          "你是哪国人？(nǐ shì nǎ guó rén?) : de quel pays es-tu ?",
          "你今年多大？(nǐ jīnnián duō dà?) : quel âge as-tu ?",
          "Phrase + 吗 (ma) ？ : question fermée oui/non — l'ordre des mots ne change pas",
        ],
      },
      {
        titre: "Grammaire de base",
        points: [
          "Ordre S-V-O : 我是学生 (wǒ shì xuéshēng) : je suis élève",
          "Les verbes sont invariables : pas de conjugaison",
          "Négation : 不 (bù) devant le verbe ; mais 有 (yǒu) se nie en 没有 (méiyǒu)",
          "Classificateur : nombre + 个 (gè) + nom → 一个哥哥 (yí ge gēge)",
        ],
      },
      {
        titre: "Pinyin et tons",
        points: [
          "4 tons : ā (plat), á (montant), ǎ (descend-remonte), à (descendant)",
          "Le ton fait partie du mot : mā (maman) ≠ mǎ (cheval)",
          "Toujours apprendre caractère + pinyin + ton ensemble",
        ],
      },
    ],
    audio:
      "Fiche de révision : se présenter en chinois, niveau HSK 2. Pour saluer, on dit nǐ hǎo, et zàijiàn pour dire au revoir. Trois phrases modèles permettent de se présenter : wǒ jiào suivi du prénom pour dire son nom, wǒ shì Fǎguórén pour dire qu'on est français, car on forme la nationalité en ajoutant rén, « personne », après le pays, et wǒ jīnnián shísān suì pour donner son âge, sans verbe être. Pour poser une question, deux méthodes : soit un mot interrogatif comme shénme ou nǎ, qui se place exactement là où viendra la réponse, soit la particule ma ajoutée en fin de phrase pour une question par oui ou non. L'ordre des mots est toujours sujet, verbe, objet, et les verbes ne se conjuguent jamais. Entre un nombre et un nom, on n'oublie pas le classificateur gè. Enfin, chaque syllabe porte un des quatre tons, et le ton change le sens du mot.",
  },
  memoCards: [
    { recto: "你好 (nǐ hǎo)", verso: "Bonjour. Ex : 你好，我叫 Léa。(Bonjour, je m'appelle Léa.)" },
    { recto: "再见 (zàijiàn)", verso: "Au revoir. Ex : 再见，老师！(Au revoir, professeur !)" },
    { recto: "我叫... (wǒ jiào...)", verso: "Je m'appelle... Ex : 我叫马丁。(Je m'appelle Martin.)" },
    { recto: "你叫什么名字？(nǐ jiào shénme míngzi?)", verso: "Comment t'appelles-tu ? — 什么 (shénme) = quoi/quel, reste à la place de la réponse." },
    { recto: "我是法国人 (wǒ shì Fǎguórén)", verso: "Je suis français(e). Pays + 人 (rén) = nationalité : 中国人 = Chinois." },
    { recto: "你是哪国人？(nǐ shì nǎ guó rén?)", verso: "De quel pays es-tu ? — 哪 (nǎ) = quel." },
    { recto: "我今年十三岁 (wǒ jīnnián shísān suì)", verso: "J'ai treize ans cette année. Attention : jamais de 是 devant l'âge." },
    { recto: "吗 (ma)", verso: "Particule finale qui transforme une phrase en question oui/non. Ex : 你是学生吗？(Es-tu élève ?)" },
    { recto: "个 (gè)", verso: "Classificateur obligatoire entre nombre et nom. Ex : 我有一个哥哥。(J'ai un grand frère.)" },
    { recto: "Les 4 tons : mā má mǎ mà", verso: "1er : haut et plat ; 2e : montant ; 3e : descend puis remonte ; 4e : descendant. mā = maman, mǎ = cheval !" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 你好 (nǐ hǎo) ?",
      choix: ["Au revoir", "Merci", "Bonjour", "Comment ça va ?"],
      bonneReponse: 2,
      explication: "你好 (nǐ hǎo), littéralement « toi bien », est la salutation de base : bonjour.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel caractère signifie « je, moi » ?",
      choix: ["你", "我", "他", "她"],
      bonneReponse: 1,
      explication: "我 (wǒ) = je/moi. 你 (nǐ) = tu, 他 (tā) = il, 她 (tā) = elle.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 我叫 Marie。",
      reponse: "Je m'appelle Marie.",
      explication: "我 (wǒ) = je, 叫 (jiào) = s'appeler.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel caractère est le verbe « être » ?",
      choix: ["有", "叫", "好", "是"],
      bonneReponse: 3,
      explication: "是 (shì) = être. 有 (yǒu) = avoir, 叫 (jiào) = s'appeler, 好 (hǎo) = bien/bon.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois (caractères et pinyin) : « Je suis français(e). »",
      reponse: "我是法国人。(Wǒ shì Fǎguórén.)",
      explication: "Sujet 我 + verbe 是 + attribut 法国人 (France + personne).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment transformer 你是学生。(Tu es élève.) en question « Es-tu élève ? » ?",
      choix: [
        "On inverse le sujet et le verbe : 是你学生？",
        "On ajoute 吗 à la fin : 你是学生吗？",
        "On ajoute 什么 à la fin : 你是学生什么？",
        "On met 吗 au début : 吗你是学生？",
      ],
      bonneReponse: 1,
      explication: "La particule 吗 (ma) se place toujours en fin de phrase, sans changer l'ordre des mots.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Remets les mots dans l'ordre pour former « Comment t'appelles-tu ? » : 名字 / 你 / 什么 / 叫",
      reponse: "你叫什么名字？(Nǐ jiào shénme míngzi?)",
      explication: "Ordre S-V-O : sujet 你 + verbe 叫 + objet 什么名字. Le mot interrogatif reste à la place de la réponse.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans le pinyin « mǎ » (cheval), quel est le mouvement du 3e ton ?",
      choix: [
        "Haut et plat",
        "Montant",
        "Il descend puis remonte",
        "Descendant et sec",
      ],
      bonneReponse: 2,
      explication: "Le 3e ton (ǎ) descend puis remonte. mā (1er ton) = maman, mǎ (3e ton) = cheval : le ton change le sens !",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : 你今年多大？我今年十二岁。",
      reponse: "Quel âge as-tu (cette année) ? J'ai douze ans (cette année).",
      explication: "多大 (duō dà) = quel âge ; 十二 (shí'èr) = 12 ; 岁 (suì) = ans. Pas de verbe 是 devant l'âge.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Tu es français(e). Réponds en chinois à la question : 你是中国人吗？",
      reponse: "不是，我是法国人。(Bú shì, wǒ shì Fǎguórén.)",
      explication: "On répond à une question en 吗 en répétant le verbe : 是 (oui) ou 不是 (non), puis on corrige avec la bonne information.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est correcte pour dire « J'aime beaucoup la Chine » ?",
      choix: ["很中国我喜欢。", "我很喜欢中国。", "中国我很喜欢是。", "我喜欢很中国。"],
      bonneReponse: 1,
      explication: "Ordre S-V-O : 我 (sujet) + 很喜欢 (adverbe + verbe) + 中国 (objet). 很 (hěn) se place devant le verbe.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Remets dans l'ordre puis traduis : 哥哥 / 我 / 一 / 有 / 个",
      reponse: "我有一个哥哥。(Wǒ yǒu yí ge gēge.) — J'ai un grand frère.",
      explication: "Structure : sujet + 有 + nombre + classificateur 个 + nom. Le classificateur est obligatoire.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Au revoir » se dit :",
      choix: ["谢谢", "你好", "再见", "您好"],
      bonneReponse: 2,
      explication: "再见 (zàijiàn) = au revoir. 谢谢 = merci, 你好/您好 = bonjour.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment dis-tu « Je m'appelle Paul » en chinois ?",
      reponse: "我叫 Paul。(Wǒ jiào Paul.)",
      explication: "我 (je) + 叫 (s'appeler) + prénom.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : 你是哪国人？",
      reponse: "De quel pays es-tu ? / Quelle est ta nationalité ?",
      explication: "哪 (nǎ) = quel, 国 (guó) = pays, 人 (rén) = personne.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Où se place la particule 吗 dans une question ?",
      choix: ["Au début de la phrase", "Juste avant le verbe", "À la fin de la phrase", "Après le sujet"],
      bonneReponse: 2,
      explication: "吗 se place toujours en fin de phrase : 你是学生吗？",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dis en chinois : « J'ai treize ans cette année. »",
      reponse: "我今年十三岁。(Wǒ jīnnián shísān suì.)",
      explication: "Sujet + 今年 + nombre + 岁, sans le verbe 是.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Se présenter et parler de soi",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 我是学生。?",
          choix: ["Je suis professeur.", "Je suis élève.", "Tu es élève.", "Il est élève."],
          bonneReponse: 1,
          explication: "我 (je) + 是 (être) + 学生 (élève).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Écris en pinyin avec les tons : 你好。",
          reponse: "nǐ hǎo",
          explication: "Les deux syllabes portent le 3e ton (à l'écrit ; à l'oral le premier se prononce comme un 2e ton).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Comment t'appelles-tu ? »",
          reponse: "你叫什么名字？(Nǐ jiào shénme míngzi?)",
          explication: "什么 se place là où viendra la réponse, sans inversion.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Comment dit-on « un Chinois / une Chinoise » ?",
          choix: ["中国", "法国人", "中国人", "国人中"],
          bonneReponse: 2,
          explication: "中国 (Chine) + 人 (personne) = 中国人, un Chinois.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme en question fermée puis traduis : 她是法国人。",
          reponse: "她是法国人吗？(Tā shì Fǎguórén ma?) — Est-elle française ?",
          explication: "On ajoute 吗 en fin de phrase sans rien changer d'autre.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Rédige une mini-présentation de trois phrases en chinois : ton nom (Anna), ta nationalité (française), ton âge (12 ans).",
          reponse: "我叫 Anna。我是法国人。我今年十二岁。(Wǒ jiào Anna. Wǒ shì Fǎguórén. Wǒ jīnnián shí'èr suì.)",
          explication: "Trois phrases modèles : 叫 + prénom ; 是 + pays + 人 ; 今年 + nombre + 岁 sans 是.",
        },
      ],
    },
    {
      titre: "Examen 2 — Se présenter et parler de soi",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel mot interrogatif signifie « quoi, quel » ?",
          choix: ["吗", "什么", "岁", "叫"],
          bonneReponse: 1,
          explication: "什么 (shénme) = quoi/quel. 吗 est la particule de question fermée.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 谢谢！再见！",
          reponse: "Merci ! Au revoir !",
          explication: "谢谢 (xièxie) = merci ; 再见 (zàijiàn) = au revoir.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase signifie « J'ai un grand frère » ?",
          choix: ["我有一哥哥。", "我是一个哥哥。", "我有一个哥哥。", "一个哥哥有我。"],
          bonneReponse: 2,
          explication: "有 (avoir) + nombre + classificateur 个 + nom. Sans 个, la phrase est fausse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réponds « non » en chinois à la question : 你是学生吗？(imagine que tu n'es pas élève)",
          reponse: "不是。/ 我不是学生。(Bú shì. / Wǒ bú shì xuéshēng.)",
          explication: "On nie le verbe 是 avec 不 : 不是.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Remets dans l'ordre puis traduis : 人 / 是 / 哪 / 你 / 国",
          reponse: "你是哪国人？(Nǐ shì nǎ guó rén?) — De quel pays es-tu ?",
          explication: "哪 (quel) se place devant 国 (pays), et l'ensemble 哪国人 est l'attribut du verbe 是.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Explique pourquoi « mā » et « mǎ » ne sont pas le même mot, puis donne le sens de chacun.",
          reponse:
            "Ils n'ont pas le même ton : mā (1er ton, haut et plat) = maman 妈 ; mǎ (3e ton, qui descend puis remonte) = cheval 马. En chinois, le ton fait partie du mot et change le sens.",
          explication: "Les quatre tons distinguent des mots différents : il faut toujours apprendre le ton avec la syllabe.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Trois phrases modèles : 我叫... (nom), 我是法国人 (nationalité = pays + 人), 我今年...岁 (âge, sans 是).",
    "L'ordre des mots est toujours sujet-verbe-objet et les verbes ne se conjuguent jamais.",
    "Question fermée : phrase + 吗 en fin ; mots interrogatifs 什么 / 哪 / 多大 : ils restent à la place de la réponse, sans inversion.",
    "Négation : 不 devant le verbe (不是), sauf 有 qui se nie en 没有.",
    "Erreur classique : oublier le classificateur 个 entre le nombre et le nom — on dit 一个哥哥, jamais 一哥哥.",
    "Le ton fait partie du mot : mā (maman) et mǎ (cheval) sont deux mots différents — apprends toujours caractère + pinyin + ton.",
  ],
},
{
  slug: "hsk3-preparation",
  titre: "Vers le HSK 3 — structures et 300 premiers mots",
  matiere: "chinois",
  niveau: "5eme",
  langueVoix: "zh-CN",
  description:
    "Consolider les 300 premiers mots du HSK et découvrir les structures clés du passage au HSK 3 : la particule 了 (action accomplie et changement d'état), le progressif 在 + verbe, la comparaison avec 比, les connecteurs 因为...所以... et 虽然...但是..., et le complément de degré avec 得.",
  objectifs: [
    "Exprimer une action accomplie ou un changement d'état avec 了",
    "Décrire une action en cours avec 在 + verbe",
    "Comparer deux éléments avec 比",
    "Exprimer la cause et la concession avec 因为...所以... et 虽然...但是...",
    "Utiliser le complément de degré avec 得 pour préciser comment se fait une action",
  ],
  slides: [
    {
      titre: "了 : l'action accomplie",
      illustration: "✔️",
      visuel: "我吃了早饭。",
      contenu: [
        "了 (le), placé après le verbe, indique qu'une action est terminée",
        "我吃了早饭。(wǒ chī le zǎofàn.) : j'ai mangé le petit-déjeuner",
        "Négation : 没 devant le verbe, et 了 disparaît",
        "我没吃早饭。(wǒ méi chī zǎofàn.) : je n'ai pas mangé le petit-déjeuner",
      ],
      voixOff:
        "La particule le, placée juste après le verbe, indique qu'une action est accomplie, achevée. Wǒ chī le zǎofàn signifie j'ai mangé le petit-déjeuner. Attention à la négation : on n'utilise jamais bù avec le, mais méi devant le verbe, et le disparaît complètement. Wǒ méi chī zǎofàn, je n'ai pas mangé le petit-déjeuner.",
    },
    {
      titre: "了 : le changement d'état",
      illustration: "🔄",
      visuel: "我十三岁了！",
      contenu: [
        "了 en fin de phrase indique un changement d'état, une nouvelle situation",
        "我十三岁了！(wǒ shísān suì le!) : j'ai (maintenant) treize ans !",
        "天黑了。(tiān hēi le.) : il fait nuit (maintenant, le ciel est devenu noir)",
        "Les deux 了 (après verbe / fin de phrase) peuvent parfois se combiner",
      ],
      voixOff:
        "Le a un second usage : placé en fin de phrase, il signale un changement d'état, une situation nouvelle par rapport à avant. Wǒ shísān suì le, j'ai treize ans maintenant, sous-entend que l'on vient de fêter son anniversaire. Tiān hēi le, il fait nuit, signifie que le ciel vient de s'assombrir. C'est une nuance subtile mais essentielle du chinois.",
    },
    {
      titre: "L'action en cours : 在 + verbe",
      illustration: "⏳",
      visuel: "我在吃饭。",
      contenu: [
        "在 (zài) devant le verbe : indique une action en train de se dérouler",
        "我在吃饭。(wǒ zài chī fàn.) : je suis en train de manger",
        "正在 (zhèngzài) : forme renforcée, « en plein dans »",
        "你在做什么？(nǐ zài zuò shénme?) : que fais-tu (en ce moment) ?",
      ],
      voixOff:
        "Pour dire qu'une action est en train de se produire, on place zài directement devant le verbe : wǒ zài chī fàn, je suis en train de manger. On peut renforcer avec zhèngzài, littéralement « justement en train de ». Pour demander ce que fait quelqu'un en ce moment, on dit nǐ zài zuò shénme.",
    },
    {
      titre: "Comparer avec 比",
      illustration: "⚖️",
      visuel: "我比他高。",
      contenu: [
        "比 (bǐ) : structure de comparaison A 比 B + adjectif",
        "我比他高。(wǒ bǐ tā gāo.) : je suis plus grand(e) que lui",
        "妹妹比我小两岁。(mèimei bǐ wǒ xiǎo liǎng suì.) : ma petite sœur a deux ans de moins que moi",
        "Pas de 很 devant l'adjectif dans une phrase avec 比 !",
      ],
      voixOff:
        "Pour comparer deux éléments, la structure est A bǐ B suivi de l'adjectif : wǒ bǐ tā gāo, je suis plus grand que lui. On peut préciser la différence en ajoutant un chiffre après l'adjectif : mèimei bǐ wǒ xiǎo liǎng suì, ma petite sœur a deux ans de moins que moi. Attention, dans une phrase avec bǐ, on n'ajoute jamais hěn devant l'adjectif.",
    },
    {
      titre: "Cause et conséquence : 因为...所以...",
      illustration: "🔗",
      visuel: "因为...，所以...",
      contenu: [
        "因为 (yīnwèi) : parce que ; 所以 (suǒyǐ) : donc, par conséquent",
        "因为下雨，所以我不去公园。(yīnwèi xiàyǔ, suǒyǐ wǒ bú qù gōngyuán.)",
        "Traduction : parce qu'il pleut, je ne vais pas au parc",
        "On peut utiliser seulement 因为 ou seulement 所以, ou les deux ensemble",
      ],
      voixOff:
        "Pour exprimer une cause et sa conséquence, le chinois utilise la paire yīnwèi, parce que, et suǒyǐ, donc. Yīnwèi xiàyǔ, suǒyǐ wǒ bú qù gōngyuán : parce qu'il pleut, donc je ne vais pas au parc. Contrairement au français, on peut garder les deux mots dans la même phrase sans que cela sonne redondant : c'est même la construction la plus naturelle.",
    },
    {
      titre: "Concession : 虽然...但是...",
      illustration: "🌗",
      visuel: "虽然...，但是...",
      contenu: [
        "虽然 (suīrán) : bien que, quoique ; 但是 (dànshì) : mais",
        "虽然汉语很难，但是很有意思。(suīrán hànyǔ hěn nán, dànshì hěn yǒu yìsi.)",
        "Traduction : bien que le chinois soit difficile, c'est très intéressant",
        "有意思 (yǒu yìsi) : intéressant ; 难 (nán) : difficile",
      ],
      voixOff:
        "Pour exprimer une opposition ou une concession, on utilise suīrán, bien que, associé à dànshì, mais. Suīrán hànyǔ hěn nán, dànshì hěn yǒu yìsi : bien que le chinois soit difficile, c'est très intéressant. Comme pour yīnwèi et suǒyǐ, les deux mots de la paire s'utilisent généralement ensemble dans la même phrase.",
    },
    {
      titre: "Le complément de degré avec 得",
      illustration: "🎯",
      visuel: "他说得很好。",
      contenu: [
        "verbe + 得 (de) + adjectif : décrit COMMENT se fait l'action",
        "他说得很好。(tā shuō de hěn hǎo.) : il parle très bien",
        "你写得很快。(nǐ xiě de hěn kuài.) : tu écris très vite",
        "Attention : 得 (de) ici ≠ 的 (de, possession) ≠ 地 (de, adverbe) — trois écritures différentes !",
      ],
      voixOff:
        "Le complément de degré permet de préciser comment se déroule une action, en ajoutant dé entre le verbe et un adjectif. Tā shuō de hěn hǎo, il parle très bien ; nǐ xiě de hěn kuài, tu écris très vite. Attention à l'écriture : il existe trois dé différents en chinois, qui se prononcent pareil mais s'écrivent avec des caractères différents selon leur fonction grammaticale.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Vers le HSK 3",
      contenu: [
        "了 après verbe : action accomplie ; 了 en fin de phrase : changement d'état",
        "在 + verbe : action en cours (« être en train de »)",
        "比 pour comparer : A 比 B + adjectif, sans 很",
        "因为...所以... (cause) et 虽然...但是... (concession) ; verbe + 得 + adjectif (comment)",
      ],
      voixOff:
        "Résumons ces structures clés pour aborder le HSK 3. Le marque une action accomplie après le verbe, ou un changement d'état en fin de phrase. Zài devant le verbe indique une action en cours. Bǐ sert à comparer, sans jamais utiliser hěn devant l'adjectif. Les paires yīnwèi-suǒyǐ et suīrán-dànshì structurent la cause et la concession. Enfin, dé introduit un complément qui précise comment se fait une action. Avec ces structures et les trois cents premiers mots du HSK, tu es prêt pour le niveau 3 !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre de transition vers le HSK 3 reprend les structures grammaticales essentielles qui viennent enrichir les bases du HSK 1-2 : la particule 了, le progressif 在, la comparaison avec 比, les connecteurs logiques 因为...所以... et 虽然...但是..., et le complément de degré avec 得.",
    sections: [
      {
        titre: "La particule 了 : deux emplois",
        points: [
          "Après le verbe : action accomplie — 我吃了早饭。(j'ai mangé le petit-déjeuner)",
          "En fin de phrase : changement d'état — 我十三岁了！(j'ai treize ans maintenant)",
          "Négation : 没 + verbe, et 了 disparaît — 我没吃早饭。",
        ],
      },
      {
        titre: "L'action en cours et la comparaison",
        points: [
          "在 + verbe : action en train de se dérouler — 我在吃饭。(je suis en train de manger)",
          "比 : A 比 B + adjectif, sans 很 — 我比他高。(je suis plus grand que lui)",
          "On précise la différence avec un chiffre : 妹妹比我小两岁。",
        ],
      },
      {
        titre: "Cause et concession",
        points: [
          "因为...所以... (parce que... donc...) : exprime une cause et sa conséquence",
          "虽然...但是... (bien que... mais...) : exprime une opposition",
          "Les deux mots de chaque paire s'utilisent souvent ensemble, sans redondance en chinois",
        ],
      },
      {
        titre: "Le complément de degré avec 得",
        points: [
          "verbe + 得 + adjectif : décrit comment se fait l'action — 他说得很好。",
          "Trois 得/的/地 homophones à ne pas confondre : possession (的), adverbe (地), complément de degré (得)",
        ],
      },
    ],
    audio:
      "Fiche de révision : vers le HSK 3, structures et premiers mots, niveau HSK 2 vers HSK 3. La particule le a deux emplois : placée après le verbe, elle marque une action accomplie, comme dans wǒ chī le zǎofàn, j'ai mangé le petit-déjeuner ; placée en fin de phrase, elle marque un changement d'état, comme dans wǒ shísān suì le, j'ai treize ans maintenant. Sa négation utilise toujours méi, jamais bù, et le disparaît alors. Zài devant le verbe indique une action en cours : wǒ zài chī fàn, je suis en train de manger. Bǐ sert à comparer deux éléments, sans jamais utiliser hěn devant l'adjectif : wǒ bǐ tā gāo. Les connecteurs yīnwèi et suǒyǐ expriment la cause et la conséquence, tandis que suīrán et dànshì expriment une opposition ; en chinois, on garde souvent les deux mots de chaque paire dans la même phrase. Enfin, le complément de degré, formé du verbe suivi de dé puis d'un adjectif, précise comment se déroule une action, comme dans tā shuō de hěn hǎo, il parle très bien.",
  },
  memoCards: [
    { recto: "了 après le verbe", verso: "Action accomplie. Ex : 我吃了早饭。(J'ai mangé le petit-déjeuner.) Négation : 没 + verbe, 了 disparaît." },
    { recto: "了 en fin de phrase", verso: "Changement d'état. Ex : 我十三岁了！(J'ai treize ans maintenant !)" },
    { recto: "在 + verbe", verso: "Action en cours. Ex : 我在吃饭。(Je suis en train de manger.) Forme renforcée : 正在." },
    { recto: "A 比 B + adjectif", verso: "Comparer. Ex : 我比他高。(Je suis plus grand que lui.) Jamais de 很 avec 比 !" },
    { recto: "因为...，所以...", verso: "Parce que... donc... Ex : 因为下雨，所以我不去公园。(Il pleut, donc je ne vais pas au parc.)" },
    { recto: "虽然...，但是...", verso: "Bien que... mais... Ex : 虽然汉语很难，但是很有意思。(Le chinois est difficile mais intéressant.)" },
    { recto: "verbe + 得 + adjectif", verso: "Complément de degré : comment se fait l'action. Ex : 他说得很好。(Il parle très bien.)" },
    { recto: "的 / 地 / 得 (trois « de »)", verso: "的 = possession (我的书) ; 地 = adverbe (慢慢地走) ; 得 = complément de degré (说得很好)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "À quoi sert 了 placé juste après le verbe ?",
      choix: ["Poser une question", "Indiquer une action accomplie", "Comparer deux choses", "Nier le verbe"],
      bonneReponse: 1,
      explication: "了 après le verbe marque qu'une action est terminée, accomplie.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment nie-t-on une phrase avec 了 (action accomplie) ?",
      choix: ["不 devant le verbe, on garde 了", "没 devant le verbe, 了 disparaît", "不了 après le verbe", "没了 après le verbe"],
      bonneReponse: 1,
      explication: "La négation d'une action passée utilise toujours 没, et 了 disparaît : 我没吃早饭。",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 我在做作业。",
      reponse: "Je suis en train de faire mes devoirs.",
      explication: "在 (zài) devant le verbe indique une action en cours.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 比 (bǐ) ?",
      choix: ["Et", "Mais", "Comparé à (structure de comparaison)", "Parce que"],
      bonneReponse: 2,
      explication: "比 (bǐ) introduit une comparaison : A 比 B + adjectif.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois : « Je suis plus grand(e) que ma petite sœur. »",
      reponse: "我比妹妹高。(Wǒ bǐ mèimei gāo.)",
      explication: "Structure A 比 B + adjectif, sans 很 devant l'adjectif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase illustre correctement 因为...所以... ?",
      choix: [
        "因为下雨。所以我不去公园。(deux phrases séparées, sans lien)",
        "因为下雨，所以我不去公园。",
        "所以下雨，因为我不去公园。",
        "下雨因为，我不去公园所以。",
      ],
      bonneReponse: 1,
      explication: "因为 introduit la cause, 所以 introduit la conséquence, dans une seule phrase liée.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en français : 虽然他很忙，但是他每天学习汉语。",
      reponse: "Bien qu'il soit très occupé, il étudie le chinois tous les jours.",
      explication: "虽然...但是... exprime une opposition ; 忙 (máng) = occupé, 每天 (měitiān) = tous les jours.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans la phrase 他说得很好, quel est le rôle de 得 ?",
      choix: ["Marquer la possession", "Introduire un complément de degré (comment il parle)", "Nier le verbe", "Comparer deux personnes"],
      bonneReponse: 1,
      explication: "得, placé entre le verbe et un adjectif, précise comment se fait l'action : il parle bien.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en chinois : « J'ai treize ans maintenant, et je suis plus grand que mon grand frère ! »",
      reponse: "我十三岁了，我比哥哥高！(Wǒ shísān suì le, wǒ bǐ gēge gāo!)",
      explication: "了 en fin de phrase marque le changement d'état (nouvel âge) ; 比 sert à comparer.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre les deux emplois de 了, avec un exemple pour chacun.",
      reponse: "了 après le verbe marque une action accomplie : 我吃了早饭。(J'ai mangé le petit-déjeuner.) 了 en fin de phrase marque un changement d'état : 天黑了。(Il fait nuit maintenant.)",
      explication: "Les deux emplois se distinguent par la position de 了 dans la phrase et par le sens : action finie vs. nouvelle situation.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase utilise correctement le complément de degré avec 得 ?",
      choix: ["他很好说得。", "他说很好得。", "他说得很好。", "他得说很好。"],
      bonneReponse: 2,
      explication: "L'ordre correct est verbe + 得 + adjectif : 他说得很好。",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige en chinois une phrase avec 虽然...但是... sur le thème du chinois (difficile mais intéressant), et une phrase avec 因为...所以... sur le thème de la pluie et du parc.",
      reponse: "虽然汉语很难，但是很有意思。因为下雨，所以我不去公园。(Suīrán hànyǔ hěn nán, dànshì hěn yǒu yìsi. Yīnwèi xiàyǔ, suǒyǐ wǒ bú qù gōngyuán.)",
      explication: "Chaque paire de connecteurs se garde entièrement dans la même phrase, sans être redondante en chinois.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "了 en fin de phrase indique :",
      choix: ["Une comparaison", "Un changement d'état", "Une question", "Une cause"],
      bonneReponse: 1,
      explication: "了 en fin de phrase signale une nouvelle situation, un changement d'état.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment dit-on « je suis en train de manger » en chinois ?",
      reponse: "我在吃饭。(Wǒ zài chī fàn.)",
      explication: "在 devant le verbe indique une action en cours.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : 我比姐姐小两岁。",
      reponse: "J'ai deux ans de moins que ma grande sœur.",
      explication: "比 (comparé à) + différence chiffrée (两岁) + adjectif (小, jeune/petit).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel connecteur exprime une opposition, une concession ?",
      choix: ["因为...所以...", "虽然...但是...", "在...呢", "比...更"],
      bonneReponse: 1,
      explication: "虽然...但是... (bien que... mais...) exprime une opposition.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dis en chinois : « Il écrit très vite. » (utilise le complément de degré)",
      reponse: "他写得很快。(Tā xiě de hěn kuài.)",
      explication: "Structure verbe + 得 + adjectif : 写得很快.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Vers le HSK 3 : structures et premiers mots",
      dureeMinutes: 35,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 我吃了早饭。?",
          choix: ["Je mange le petit-déjeuner (maintenant)", "J'ai mangé le petit-déjeuner", "Je vais manger le petit-déjeuner", "Je n'ai pas mangé le petit-déjeuner"],
          bonneReponse: 1,
          explication: "了 après le verbe marque une action accomplie : le petit-déjeuner a déjà été mangé.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 你在做什么？",
          reponse: "Que fais-tu (en ce moment) ?",
          explication: "在 + verbe indique une action en cours ; 什么 (shénme) = quoi.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Mon petit frère est plus jeune que moi de trois ans. »",
          reponse: "弟弟比我小三岁。(Dìdi bǐ wǒ xiǎo sān suì.)",
          explication: "Structure A 比 B + adjectif + différence chiffrée.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est la traduction de 因为我很累，所以我早睡觉。 ?",
          choix: [
            "Parce que je suis fatigué(e), donc je me couche tôt.",
            "Bien que je sois fatigué(e), je me couche tard.",
            "Je suis fatigué(e) mais je ne dors pas.",
            "Je me couche tôt parce que je ne suis pas fatigué(e).",
          ],
          bonneReponse: 0,
          explication: "因为 (parce que) + cause, 所以 (donc) + conséquence ; 累 (lèi) = fatigué, 早 (zǎo) = tôt.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Complète et traduis : 虽然今天很冷，＿＿＿我很高兴。(insère le connecteur manquant)",
          reponse: "虽然今天很冷，但是我很高兴。— Bien qu'il fasse très froid aujourd'hui, je suis très content(e).",
          explication: "但是 (dànshì) complète la paire 虽然...但是... pour exprimer l'opposition.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige en chinois un petit paragraphe (3 phrases) utilisant 了 (changement d'état), 比 (comparaison) et 因为...所以... (cause).",
          reponse: "我十三岁了！我比去年高。因为我长大了，所以我可以自己上学。(Wǒ shísān suì le! Wǒ bǐ qùnián gāo. Yīnwèi wǒ zhǎngdà le, suǒyǐ wǒ kěyǐ zìjǐ shàngxué.) — J'ai treize ans maintenant ! Je suis plus grand qu'avant. Parce que j'ai grandi, je peux aller à l'école tout(e) seul(e).",
          explication: "Chaque structure est utilisée dans son contexte propre : 了 pour la nouveauté, 比 pour comparer, 因为所以 pour la cause.",
        },
      ],
    },
    {
      titre: "Examen 2 — Vers le HSK 3 : structures et premiers mots",
      dureeMinutes: 35,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment nie-t-on 我吃了早饭。 (action passée) ?",
          choix: ["我不吃了早饭。", "我没吃早饭。", "我不吃早饭了。", "我没有了吃早饭。"],
          bonneReponse: 1,
          explication: "La négation d'une action passée est toujours 没 + verbe, et 了 disparaît.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 天黑了，我们回家吧。",
          reponse: "Il fait nuit maintenant, rentrons à la maison.",
          explication: "了 en fin de phrase marque le changement d'état ; 吧 (ba) est une particule de suggestion.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase compare correctement deux tailles ?",
          choix: ["我很高比他。", "我比他很高。", "我比他高。", "我高比他很。"],
          bonneReponse: 2,
          explication: "La structure correcte est A 比 B + adjectif, sans 很 : 我比他高。",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Il chante très bien. » (utilise le complément de degré avec 得)",
          reponse: "他唱得很好。(Tā chàng de hěn hǎo.)",
          explication: "唱 (chàng) = chanter ; structure verbe + 得 + adjectif.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Remets dans l'ordre puis traduis : 但是 / 汉语 / 有意思 / 虽然 / 难 / 很 / 很",
          reponse: "虽然汉语很难，但是很有意思。(Suīrán hànyǔ hěn nán, dànshì hěn yǒu yìsi.) — Bien que le chinois soit difficile, c'est très intéressant.",
          explication: "虽然 introduit le premier fait (difficile), 但是 introduit le second, opposé (intéressant).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique la différence entre 的, 地 et 得 (les trois « de »), avec un exemple pour chacun.",
          reponse: "的 (de) marque la possession ou l'attribut nominal : 我的书 (mon livre). 地 (de) transforme un adjectif en adverbe devant un verbe : 慢慢地走 (marcher lentement). 得 (de) introduit un complément de degré après le verbe : 说得很好 (bien parler).",
          explication: "Les trois caractères se prononcent tous « de » mais s'écrivent différemment selon leur fonction grammaticale — un point clé du niveau HSK 3.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "了 après le verbe marque une action accomplie ; 了 en fin de phrase marque un changement d'état — deux emplois à bien distinguer.",
    "La négation d'une action passée utilise toujours 没 (jamais 不), et 了 disparaît alors de la phrase.",
    "在 + verbe décrit une action en train de se dérouler (« être en train de »), renforcé par 正在.",
    "比 sert à comparer : structure A 比 B + adjectif, sans jamais ajouter 很 devant l'adjectif.",
    "因为...所以... (cause) et 虽然...但是... (concession) se gardent souvent en entier dans la même phrase, sans redondance en chinois.",
    "Le complément de degré (verbe + 得 + adjectif) précise comment se fait une action ; ne pas confondre 得 avec 的 (possession) et 地 (adverbe).",
  ],
}
];

export default chapitres;
