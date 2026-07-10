import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
