import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
