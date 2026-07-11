import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
