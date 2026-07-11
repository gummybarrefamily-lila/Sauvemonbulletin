import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
