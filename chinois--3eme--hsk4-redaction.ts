import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
