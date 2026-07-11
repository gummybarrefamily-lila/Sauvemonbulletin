import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
