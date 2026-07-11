import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
