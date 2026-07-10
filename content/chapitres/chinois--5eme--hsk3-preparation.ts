import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "hsk3-preparation",
  titre: "Vers le HSK 3 — structures et 300 premiers mots",
  matiere: "chinois",
  niveau: "5eme",
  langueVoix: "zh-CN",
  description:
    "Consolider les 300 premiers mots du HSK et découvrir les structures clés du passage au HSK 3 : la particule 了 (action accomplie et changement d'état), le progressif 在 + verbe, la comparaison avec 比, les connecteurs 因为...所以... et 虽然...但是..., et le complément de degré avec 得.",
  objectifs: [
    "Exprimer une action accomplie ou un changement d'état avec 了",
    "Décrire une action en cours avec 在 + verbe",
    "Comparer deux éléments avec 比",
    "Exprimer la cause et la concession avec 因为...所以... et 虽然...但是...",
    "Utiliser le complément de degré avec 得 pour préciser comment se fait une action",
  ],
  slides: [
    {
      titre: "了 : l'action accomplie",
      illustration: "✔️",
      visuel: "我吃了早饭。",
      contenu: [
        "了 (le), placé après le verbe, indique qu'une action est terminée",
        "我吃了早饭。(wǒ chī le zǎofàn.) : j'ai mangé le petit-déjeuner",
        "Négation : 没 devant le verbe, et 了 disparaît",
        "我没吃早饭。(wǒ méi chī zǎofàn.) : je n'ai pas mangé le petit-déjeuner",
      ],
      voixOff:
        "La particule le, placée juste après le verbe, indique qu'une action est accomplie, achevée. Wǒ chī le zǎofàn signifie j'ai mangé le petit-déjeuner. Attention à la négation : on n'utilise jamais bù avec le, mais méi devant le verbe, et le disparaît complètement. Wǒ méi chī zǎofàn, je n'ai pas mangé le petit-déjeuner.",
    },
    {
      titre: "了 : le changement d'état",
      illustration: "🔄",
      visuel: "我十三岁了！",
      contenu: [
        "了 en fin de phrase indique un changement d'état, une nouvelle situation",
        "我十三岁了！(wǒ shísān suì le!) : j'ai (maintenant) treize ans !",
        "天黑了。(tiān hēi le.) : il fait nuit (maintenant, le ciel est devenu noir)",
        "Les deux 了 (après verbe / fin de phrase) peuvent parfois se combiner",
      ],
      voixOff:
        "Le a un second usage : placé en fin de phrase, il signale un changement d'état, une situation nouvelle par rapport à avant. Wǒ shísān suì le, j'ai treize ans maintenant, sous-entend que l'on vient de fêter son anniversaire. Tiān hēi le, il fait nuit, signifie que le ciel vient de s'assombrir. C'est une nuance subtile mais essentielle du chinois.",
    },
    {
      titre: "L'action en cours : 在 + verbe",
      illustration: "⏳",
      visuel: "我在吃饭。",
      contenu: [
        "在 (zài) devant le verbe : indique une action en train de se dérouler",
        "我在吃饭。(wǒ zài chī fàn.) : je suis en train de manger",
        "正在 (zhèngzài) : forme renforcée, « en plein dans »",
        "你在做什么？(nǐ zài zuò shénme?) : que fais-tu (en ce moment) ?",
      ],
      voixOff:
        "Pour dire qu'une action est en train de se produire, on place zài directement devant le verbe : wǒ zài chī fàn, je suis en train de manger. On peut renforcer avec zhèngzài, littéralement « justement en train de ». Pour demander ce que fait quelqu'un en ce moment, on dit nǐ zài zuò shénme.",
    },
    {
      titre: "Comparer avec 比",
      illustration: "⚖️",
      visuel: "我比他高。",
      contenu: [
        "比 (bǐ) : structure de comparaison A 比 B + adjectif",
        "我比他高。(wǒ bǐ tā gāo.) : je suis plus grand(e) que lui",
        "妹妹比我小两岁。(mèimei bǐ wǒ xiǎo liǎng suì.) : ma petite sœur a deux ans de moins que moi",
        "Pas de 很 devant l'adjectif dans une phrase avec 比 !",
      ],
      voixOff:
        "Pour comparer deux éléments, la structure est A bǐ B suivi de l'adjectif : wǒ bǐ tā gāo, je suis plus grand que lui. On peut préciser la différence en ajoutant un chiffre après l'adjectif : mèimei bǐ wǒ xiǎo liǎng suì, ma petite sœur a deux ans de moins que moi. Attention, dans une phrase avec bǐ, on n'ajoute jamais hěn devant l'adjectif.",
    },
    {
      titre: "Cause et conséquence : 因为...所以...",
      illustration: "🔗",
      visuel: "因为...，所以...",
      contenu: [
        "因为 (yīnwèi) : parce que ; 所以 (suǒyǐ) : donc, par conséquent",
        "因为下雨，所以我不去公园。(yīnwèi xiàyǔ, suǒyǐ wǒ bú qù gōngyuán.)",
        "Traduction : parce qu'il pleut, je ne vais pas au parc",
        "On peut utiliser seulement 因为 ou seulement 所以, ou les deux ensemble",
      ],
      voixOff:
        "Pour exprimer une cause et sa conséquence, le chinois utilise la paire yīnwèi, parce que, et suǒyǐ, donc. Yīnwèi xiàyǔ, suǒyǐ wǒ bú qù gōngyuán : parce qu'il pleut, donc je ne vais pas au parc. Contrairement au français, on peut garder les deux mots dans la même phrase sans que cela sonne redondant : c'est même la construction la plus naturelle.",
    },
    {
      titre: "Concession : 虽然...但是...",
      illustration: "🌗",
      visuel: "虽然...，但是...",
      contenu: [
        "虽然 (suīrán) : bien que, quoique ; 但是 (dànshì) : mais",
        "虽然汉语很难，但是很有意思。(suīrán hànyǔ hěn nán, dànshì hěn yǒu yìsi.)",
        "Traduction : bien que le chinois soit difficile, c'est très intéressant",
        "有意思 (yǒu yìsi) : intéressant ; 难 (nán) : difficile",
      ],
      voixOff:
        "Pour exprimer une opposition ou une concession, on utilise suīrán, bien que, associé à dànshì, mais. Suīrán hànyǔ hěn nán, dànshì hěn yǒu yìsi : bien que le chinois soit difficile, c'est très intéressant. Comme pour yīnwèi et suǒyǐ, les deux mots de la paire s'utilisent généralement ensemble dans la même phrase.",
    },
    {
      titre: "Le complément de degré avec 得",
      illustration: "🎯",
      visuel: "他说得很好。",
      contenu: [
        "verbe + 得 (de) + adjectif : décrit COMMENT se fait l'action",
        "他说得很好。(tā shuō de hěn hǎo.) : il parle très bien",
        "你写得很快。(nǐ xiě de hěn kuài.) : tu écris très vite",
        "Attention : 得 (de) ici ≠ 的 (de, possession) ≠ 地 (de, adverbe) — trois écritures différentes !",
      ],
      voixOff:
        "Le complément de degré permet de préciser comment se déroule une action, en ajoutant dé entre le verbe et un adjectif. Tā shuō de hěn hǎo, il parle très bien ; nǐ xiě de hěn kuài, tu écris très vite. Attention à l'écriture : il existe trois dé différents en chinois, qui se prononcent pareil mais s'écrivent avec des caractères différents selon leur fonction grammaticale.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Vers le HSK 3",
      contenu: [
        "了 après verbe : action accomplie ; 了 en fin de phrase : changement d'état",
        "在 + verbe : action en cours (« être en train de »)",
        "比 pour comparer : A 比 B + adjectif, sans 很",
        "因为...所以... (cause) et 虽然...但是... (concession) ; verbe + 得 + adjectif (comment)",
      ],
      voixOff:
        "Résumons ces structures clés pour aborder le HSK 3. Le marque une action accomplie après le verbe, ou un changement d'état en fin de phrase. Zài devant le verbe indique une action en cours. Bǐ sert à comparer, sans jamais utiliser hěn devant l'adjectif. Les paires yīnwèi-suǒyǐ et suīrán-dànshì structurent la cause et la concession. Enfin, dé introduit un complément qui précise comment se fait une action. Avec ces structures et les trois cents premiers mots du HSK, tu es prêt pour le niveau 3 !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre de transition vers le HSK 3 reprend les structures grammaticales essentielles qui viennent enrichir les bases du HSK 1-2 : la particule 了, le progressif 在, la comparaison avec 比, les connecteurs logiques 因为...所以... et 虽然...但是..., et le complément de degré avec 得.",
    sections: [
      {
        titre: "La particule 了 : deux emplois",
        points: [
          "Après le verbe : action accomplie — 我吃了早饭。(j'ai mangé le petit-déjeuner)",
          "En fin de phrase : changement d'état — 我十三岁了！(j'ai treize ans maintenant)",
          "Négation : 没 + verbe, et 了 disparaît — 我没吃早饭。",
        ],
      },
      {
        titre: "L'action en cours et la comparaison",
        points: [
          "在 + verbe : action en train de se dérouler — 我在吃饭。(je suis en train de manger)",
          "比 : A 比 B + adjectif, sans 很 — 我比他高。(je suis plus grand que lui)",
          "On précise la différence avec un chiffre : 妹妹比我小两岁。",
        ],
      },
      {
        titre: "Cause et concession",
        points: [
          "因为...所以... (parce que... donc...) : exprime une cause et sa conséquence",
          "虽然...但是... (bien que... mais...) : exprime une opposition",
          "Les deux mots de chaque paire s'utilisent souvent ensemble, sans redondance en chinois",
        ],
      },
      {
        titre: "Le complément de degré avec 得",
        points: [
          "verbe + 得 + adjectif : décrit comment se fait l'action — 他说得很好。",
          "Trois 得/的/地 homophones à ne pas confondre : possession (的), adverbe (地), complément de degré (得)",
        ],
      },
    ],
    audio:
      "Fiche de révision : vers le HSK 3, structures et premiers mots, niveau HSK 2 vers HSK 3. La particule le a deux emplois : placée après le verbe, elle marque une action accomplie, comme dans wǒ chī le zǎofàn, j'ai mangé le petit-déjeuner ; placée en fin de phrase, elle marque un changement d'état, comme dans wǒ shísān suì le, j'ai treize ans maintenant. Sa négation utilise toujours méi, jamais bù, et le disparaît alors. Zài devant le verbe indique une action en cours : wǒ zài chī fàn, je suis en train de manger. Bǐ sert à comparer deux éléments, sans jamais utiliser hěn devant l'adjectif : wǒ bǐ tā gāo. Les connecteurs yīnwèi et suǒyǐ expriment la cause et la conséquence, tandis que suīrán et dànshì expriment une opposition ; en chinois, on garde souvent les deux mots de chaque paire dans la même phrase. Enfin, le complément de degré, formé du verbe suivi de dé puis d'un adjectif, précise comment se déroule une action, comme dans tā shuō de hěn hǎo, il parle très bien.",
  },
  memoCards: [
    { recto: "了 après le verbe", verso: "Action accomplie. Ex : 我吃了早饭。(J'ai mangé le petit-déjeuner.) Négation : 没 + verbe, 了 disparaît." },
    { recto: "了 en fin de phrase", verso: "Changement d'état. Ex : 我十三岁了！(J'ai treize ans maintenant !)" },
    { recto: "在 + verbe", verso: "Action en cours. Ex : 我在吃饭。(Je suis en train de manger.) Forme renforcée : 正在." },
    { recto: "A 比 B + adjectif", verso: "Comparer. Ex : 我比他高。(Je suis plus grand que lui.) Jamais de 很 avec 比 !" },
    { recto: "因为...，所以...", verso: "Parce que... donc... Ex : 因为下雨，所以我不去公园。(Il pleut, donc je ne vais pas au parc.)" },
    { recto: "虽然...，但是...", verso: "Bien que... mais... Ex : 虽然汉语很难，但是很有意思。(Le chinois est difficile mais intéressant.)" },
    { recto: "verbe + 得 + adjectif", verso: "Complément de degré : comment se fait l'action. Ex : 他说得很好。(Il parle très bien.)" },
    { recto: "的 / 地 / 得 (trois « de »)", verso: "的 = possession (我的书) ; 地 = adverbe (慢慢地走) ; 得 = complément de degré (说得很好)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "À quoi sert 了 placé juste après le verbe ?",
      choix: ["Poser une question", "Indiquer une action accomplie", "Comparer deux choses", "Nier le verbe"],
      bonneReponse: 1,
      explication: "了 après le verbe marque qu'une action est terminée, accomplie.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment nie-t-on une phrase avec 了 (action accomplie) ?",
      choix: ["不 devant le verbe, on garde 了", "没 devant le verbe, 了 disparaît", "不了 après le verbe", "没了 après le verbe"],
      bonneReponse: 1,
      explication: "La négation d'une action passée utilise toujours 没, et 了 disparaît : 我没吃早饭。",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : 我在做作业。",
      reponse: "Je suis en train de faire mes devoirs.",
      explication: "在 (zài) devant le verbe indique une action en cours.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie 比 (bǐ) ?",
      choix: ["Et", "Mais", "Comparé à (structure de comparaison)", "Parce que"],
      bonneReponse: 2,
      explication: "比 (bǐ) introduit une comparaison : A 比 B + adjectif.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en chinois : « Je suis plus grand(e) que ma petite sœur. »",
      reponse: "我比妹妹高。(Wǒ bǐ mèimei gāo.)",
      explication: "Structure A 比 B + adjectif, sans 很 devant l'adjectif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase illustre correctement 因为...所以... ?",
      choix: [
        "因为下雨。所以我不去公园。(deux phrases séparées, sans lien)",
        "因为下雨，所以我不去公园。",
        "所以下雨，因为我不去公园。",
        "下雨因为，我不去公园所以。",
      ],
      bonneReponse: 1,
      explication: "因为 introduit la cause, 所以 introduit la conséquence, dans une seule phrase liée.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en français : 虽然他很忙，但是他每天学习汉语。",
      reponse: "Bien qu'il soit très occupé, il étudie le chinois tous les jours.",
      explication: "虽然...但是... exprime une opposition ; 忙 (máng) = occupé, 每天 (měitiān) = tous les jours.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans la phrase 他说得很好, quel est le rôle de 得 ?",
      choix: ["Marquer la possession", "Introduire un complément de degré (comment il parle)", "Nier le verbe", "Comparer deux personnes"],
      bonneReponse: 1,
      explication: "得, placé entre le verbe et un adjectif, précise comment se fait l'action : il parle bien.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en chinois : « J'ai treize ans maintenant, et je suis plus grand que mon grand frère ! »",
      reponse: "我十三岁了，我比哥哥高！(Wǒ shísān suì le, wǒ bǐ gēge gāo!)",
      explication: "了 en fin de phrase marque le changement d'état (nouvel âge) ; 比 sert à comparer.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre les deux emplois de 了, avec un exemple pour chacun.",
      reponse: "了 après le verbe marque une action accomplie : 我吃了早饭。(J'ai mangé le petit-déjeuner.) 了 en fin de phrase marque un changement d'état : 天黑了。(Il fait nuit maintenant.)",
      explication: "Les deux emplois se distinguent par la position de 了 dans la phrase et par le sens : action finie vs. nouvelle situation.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase utilise correctement le complément de degré avec 得 ?",
      choix: ["他很好说得。", "他说很好得。", "他说得很好。", "他得说很好。"],
      bonneReponse: 2,
      explication: "L'ordre correct est verbe + 得 + adjectif : 他说得很好。",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige en chinois une phrase avec 虽然...但是... sur le thème du chinois (difficile mais intéressant), et une phrase avec 因为...所以... sur le thème de la pluie et du parc.",
      reponse: "虽然汉语很难，但是很有意思。因为下雨，所以我不去公园。(Suīrán hànyǔ hěn nán, dànshì hěn yǒu yìsi. Yīnwèi xiàyǔ, suǒyǐ wǒ bú qù gōngyuán.)",
      explication: "Chaque paire de connecteurs se garde entièrement dans la même phrase, sans être redondante en chinois.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "了 en fin de phrase indique :",
      choix: ["Une comparaison", "Un changement d'état", "Une question", "Une cause"],
      bonneReponse: 1,
      explication: "了 en fin de phrase signale une nouvelle situation, un changement d'état.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment dit-on « je suis en train de manger » en chinois ?",
      reponse: "我在吃饭。(Wǒ zài chī fàn.)",
      explication: "在 devant le verbe indique une action en cours.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : 我比姐姐小两岁。",
      reponse: "J'ai deux ans de moins que ma grande sœur.",
      explication: "比 (comparé à) + différence chiffrée (两岁) + adjectif (小, jeune/petit).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel connecteur exprime une opposition, une concession ?",
      choix: ["因为...所以...", "虽然...但是...", "在...呢", "比...更"],
      bonneReponse: 1,
      explication: "虽然...但是... (bien que... mais...) exprime une opposition.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dis en chinois : « Il écrit très vite. » (utilise le complément de degré)",
      reponse: "他写得很快。(Tā xiě de hěn kuài.)",
      explication: "Structure verbe + 得 + adjectif : 写得很快.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Vers le HSK 3 : structures et premiers mots",
      dureeMinutes: 35,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie 我吃了早饭。?",
          choix: ["Je mange le petit-déjeuner (maintenant)", "J'ai mangé le petit-déjeuner", "Je vais manger le petit-déjeuner", "Je n'ai pas mangé le petit-déjeuner"],
          bonneReponse: 1,
          explication: "了 après le verbe marque une action accomplie : le petit-déjeuner a déjà été mangé.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 你在做什么？",
          reponse: "Que fais-tu (en ce moment) ?",
          explication: "在 + verbe indique une action en cours ; 什么 (shénme) = quoi.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Mon petit frère est plus jeune que moi de trois ans. »",
          reponse: "弟弟比我小三岁。(Dìdi bǐ wǒ xiǎo sān suì.)",
          explication: "Structure A 比 B + adjectif + différence chiffrée.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est la traduction de 因为我很累，所以我早睡觉。 ?",
          choix: [
            "Parce que je suis fatigué(e), donc je me couche tôt.",
            "Bien que je sois fatigué(e), je me couche tard.",
            "Je suis fatigué(e) mais je ne dors pas.",
            "Je me couche tôt parce que je ne suis pas fatigué(e).",
          ],
          bonneReponse: 0,
          explication: "因为 (parce que) + cause, 所以 (donc) + conséquence ; 累 (lèi) = fatigué, 早 (zǎo) = tôt.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Complète et traduis : 虽然今天很冷，＿＿＿我很高兴。(insère le connecteur manquant)",
          reponse: "虽然今天很冷，但是我很高兴。— Bien qu'il fasse très froid aujourd'hui, je suis très content(e).",
          explication: "但是 (dànshì) complète la paire 虽然...但是... pour exprimer l'opposition.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige en chinois un petit paragraphe (3 phrases) utilisant 了 (changement d'état), 比 (comparaison) et 因为...所以... (cause).",
          reponse: "我十三岁了！我比去年高。因为我长大了，所以我可以自己上学。(Wǒ shísān suì le! Wǒ bǐ qùnián gāo. Yīnwèi wǒ zhǎngdà le, suǒyǐ wǒ kěyǐ zìjǐ shàngxué.) — J'ai treize ans maintenant ! Je suis plus grand qu'avant. Parce que j'ai grandi, je peux aller à l'école tout(e) seul(e).",
          explication: "Chaque structure est utilisée dans son contexte propre : 了 pour la nouveauté, 比 pour comparer, 因为所以 pour la cause.",
        },
      ],
    },
    {
      titre: "Examen 2 — Vers le HSK 3 : structures et premiers mots",
      dureeMinutes: 35,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment nie-t-on 我吃了早饭。 (action passée) ?",
          choix: ["我不吃了早饭。", "我没吃早饭。", "我不吃早饭了。", "我没有了吃早饭。"],
          bonneReponse: 1,
          explication: "La négation d'une action passée est toujours 没 + verbe, et 了 disparaît.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : 天黑了，我们回家吧。",
          reponse: "Il fait nuit maintenant, rentrons à la maison.",
          explication: "了 en fin de phrase marque le changement d'état ; 吧 (ba) est une particule de suggestion.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase compare correctement deux tailles ?",
          choix: ["我很高比他。", "我比他很高。", "我比他高。", "我高比他很。"],
          bonneReponse: 2,
          explication: "La structure correcte est A 比 B + adjectif, sans 很 : 我比他高。",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en chinois : « Il chante très bien. » (utilise le complément de degré avec 得)",
          reponse: "他唱得很好。(Tā chàng de hěn hǎo.)",
          explication: "唱 (chàng) = chanter ; structure verbe + 得 + adjectif.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Remets dans l'ordre puis traduis : 但是 / 汉语 / 有意思 / 虽然 / 难 / 很 / 很",
          reponse: "虽然汉语很难，但是很有意思。(Suīrán hànyǔ hěn nán, dànshì hěn yǒu yìsi.) — Bien que le chinois soit difficile, c'est très intéressant.",
          explication: "虽然 introduit le premier fait (difficile), 但是 introduit le second, opposé (intéressant).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique la différence entre 的, 地 et 得 (les trois « de »), avec un exemple pour chacun.",
          reponse: "的 (de) marque la possession ou l'attribut nominal : 我的书 (mon livre). 地 (de) transforme un adjectif en adverbe devant un verbe : 慢慢地走 (marcher lentement). 得 (de) introduit un complément de degré après le verbe : 说得很好 (bien parler).",
          explication: "Les trois caractères se prononcent tous « de » mais s'écrivent différemment selon leur fonction grammaticale — un point clé du niveau HSK 3.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "了 après le verbe marque une action accomplie ; 了 en fin de phrase marque un changement d'état — deux emplois à bien distinguer.",
    "La négation d'une action passée utilise toujours 没 (jamais 不), et 了 disparaît alors de la phrase.",
    "在 + verbe décrit une action en train de se dérouler (« être en train de »), renforcé par 正在.",
    "比 sert à comparer : structure A 比 B + adjectif, sans jamais ajouter 很 devant l'adjectif.",
    "因为...所以... (cause) et 虽然...但是... (concession) se gardent souvent en entier dans la même phrase, sans redondance en chinois.",
    "Le complément de degré (verbe + 得 + adjectif) précise comment se fait une action ; ne pas confondre 得 avec 的 (possession) et 地 (adverbe).",
  ],
};

export default chapitre;
