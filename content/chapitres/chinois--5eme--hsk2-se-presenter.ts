import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
