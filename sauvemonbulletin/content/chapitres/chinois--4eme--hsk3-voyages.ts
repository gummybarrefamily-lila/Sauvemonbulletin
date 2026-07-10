import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
