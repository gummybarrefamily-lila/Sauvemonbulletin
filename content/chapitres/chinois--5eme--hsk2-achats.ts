import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
