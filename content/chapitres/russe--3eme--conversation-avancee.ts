import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "conversation-avancee",
  titre: "Conversation avancée : raconter et décrire",
  matiere: "russe",
  niveau: "3eme",
  description:
    "Raconter des événements au passé, décrire avec des adjectifs, exprimer ses goûts et ses opinions, poser des questions — et maîtriser le vocabulaire russe de la répétition et de la scène, indispensable en danse-études.",
  objectifs: [
    "Former le passé des verbes avec -л / -ла / -ли et raconter sa journée d'hier",
    "Décrire avec les adjectifs courants et leur accord de base (-ый / -ая / -ое / -ые)",
    "Exprimer goûts et opinions : Мне нравится, Я люблю, Я думаю, что...",
    "Poser des questions avec Кто? Что? Где? Когда? Почему?",
    "Utiliser le vocabulaire de la scène : репетиция, сцена, спектакль, балерина, хореограф",
  ],
  slides: [
    {
      titre: "Le passé en russe : trois terminaisons",
      illustration: "⏰",
      visuel: "-л / -ла / -ли",
      contenu: [
        "On enlève -ть de l'infinitif et on ajoute : -л (masculin), -ла (féminin), -ли (pluriel)",
        "Я танцевал (ya tantseval) : j'ai dansé (un garçon)",
        "Я танцевала (ya tantsevala) : j'ai dansé (une fille)",
        "Мы танцевали (my tantsevali) : nous avons dansé",
      ],
      voixOff:
        "Bonne nouvelle : le passé russe est très simple ! On enlève la terminaison -ть de l'infinitif et on ajoute -l au masculin, -la au féminin, -li au pluriel. Attention, le passé s'accorde avec le sujet, pas avec la personne : un garçon dit ya tantseval, une fille dit ya tantsevala, j'ai dansé.",
    },
    {
      titre: "Raconter sa journée d'hier",
      illustration: "📅",
      visuel: "Вчера я танцевала",
      contenu: [
        "Вчера (ftchira) : hier",
        "Я был / Я была в школе (ya byl / ya byla f chkolié) : j'étais à l'école (garçon / fille)",
        "Она читала (ana tchitala) : elle a lu, elle lisait",
        "Мы смотрели спектакль (my smatriéli spiktakl') : nous avons regardé un spectacle",
      ],
      voixOff:
        "Racontons hier : ftchira. Le verbe être, byt', donne byl au masculin et byla au féminin : ya byla f chkolié, j'étais à l'école. Ana tchitala, elle a lu. My smatriéli spiktakl', nous avons regardé un spectacle. Avec trois terminaisons seulement, tu peux déjà raconter toute ta journée d'hier !",
    },
    {
      titre: "Les adjectifs courants",
      illustration: "🎨",
      visuel: "красивый (krassivyï)",
      contenu: [
        "красивый (krassivyï) : beau, joli",
        "большой / маленький (bal'choï / malien'kiï) : grand / petit",
        "трудный (troudnyï) : difficile — интересный (intiriesnyï) : intéressant",
        "новый (novyï) : nouveau — русский (rousskiï) : russe",
      ],
      voixOff:
        "Pour décrire, il faut des adjectifs. Krassivyï, beau. Bal'choï, grand, et son contraire malien'kiï, petit. Troudnyï, difficile, un mot utile pour parler des cours ! Intiriesnyï, intéressant, novyï, nouveau, et rousskiï, russe. Six adjectifs qui permettent déjà de décrire presque tout.",
    },
    {
      titre: "L'accord des adjectifs",
      illustration: "🧩",
      visuel: "новый • новая • новое • новые",
      contenu: [
        "Masculin : -ый / -ой — новый урок (novyï ourok) : un nouveau cours",
        "Féminin : -ая — новая школа (novaïa chkola) : une nouvelle école",
        "Neutre : -ое — новое слово (novaïé slova) : un nouveau mot",
        "Pluriel : -ые — новые костюмы (novyïé kastioumy) : de nouveaux costumes",
      ],
      voixOff:
        "Comme en français, l'adjectif russe s'accorde avec le nom. Au masculin, il se termine en -yï : novyï ourok, un nouveau cours. Au féminin, en -aïa : novaïa chkola, une nouvelle école. Au neutre, un genre qui n'existe pas en français, en -oïé : novaïé slova, un nouveau mot. Et au pluriel, en -yïé : novyïé kastioumy, de nouveaux costumes.",
    },
    {
      titre: "Exprimer ses goûts",
      illustration: "❤️",
      visuel: "Мне нравится… • Я люблю…",
      contenu: [
        "Мне нравится балет (mnié nravitsa baliet) : le ballet me plaît",
        "Я люблю музыку (ya lioubliou mouzykou) : j'aime la musique",
        "Я не люблю (ya nié lioubliou) : je n'aime pas",
        "Мне нравится танцевать (mnié nravitsa tantsevat') : j'aime danser",
      ],
      voixOff:
        "Deux façons de dire qu'on aime. Mnié nravitsa, littéralement « cela me plaît » : mnié nravitsa baliet, le ballet me plaît. Et ya lioubliou, j'aime, plus fort : ya lioubliou mouzykou, j'aime la musique. Pour la forme négative, on ajoute nié : ya nié lioubliou. On peut aussi faire suivre mnié nravitsa d'un verbe : mnié nravitsa tantsevat', j'aime danser.",
    },
    {
      titre: "Donner son opinion",
      illustration: "💭",
      visuel: "Я думаю, что…",
      contenu: [
        "Я думаю, что это красиво (ya doumaïou, chto èta krassiva) : je pense que c'est beau",
        "По-моему (pa-moïémou) : à mon avis",
        "Это трудно, но интересно (èta troudna, no intiriesna) : c'est difficile, mais intéressant",
        "⚠️ En russe, la virgule avant что est obligatoire",
      ],
      voixOff:
        "Pour donner ton avis, utilise ya doumaïou, chto : je pense que. Ya doumaïou, chto èta krassiva, je pense que c'est beau. Plus court : pa-moïémou, à mon avis. Et pour nuancer : èta troudna, no intiriesna, c'est difficile, mais intéressant. Petit détail d'écriture : en russe, on met toujours une virgule avant chto.",
    },
    {
      titre: "Poser des questions",
      illustration: "❓",
      visuel: "Кто? Что? Где? Когда? Почему?",
      contenu: [
        "Кто? (kto) : qui ? — Что? (chto) : que, quoi ?",
        "Где? (gdié) : où ? — Когда? (kagda) : quand ?",
        "Почему? (patchimou) : pourquoi ? — Как? (kak) : comment ?",
        "Где репетиция? (gdié riépiétitsia) : où est la répétition ?",
      ],
      voixOff:
        "Une conversation avance grâce aux questions. Kto, qui. Chto, que ou quoi. Gdié, où. Kagda, quand. Patchimou, pourquoi, et kak, comment. Le mot interrogatif se place en tête de phrase, tout simplement : gdié riépiétitsia ? Où est la répétition ? Pas besoin d'inversion ni de mot supplémentaire : c'est plus simple qu'en français !",
    },
    {
      titre: "Focus danse-études : la scène",
      illustration: "🩰",
      visuel: "репетиция • сцена • спектакль",
      contenu: [
        "репетиция (riépiétitsia) : la répétition",
        "сцена (stséna) : la scène — спектакль (spiktakl') : le spectacle",
        "балерина (baliérina) : la ballerine — хореограф (khariéograf) : le chorégraphe",
        "костюм (kastioum) : le costume",
      ],
      voixOff:
        "Voici le vocabulaire de ton quotidien de danseur ou danseuse. Riépiétitsia, la répétition. Stséna, la scène, et spiktakl', le spectacle. Baliérina, la ballerine, et khariéograf, le chorégraphe. N'oublie pas kastioum, le costume. Beaucoup de ces mots ressemblent au français : le vocabulaire du ballet a voyagé entre Paris et Saint-Pétersbourg !",
    },
    {
      titre: "Dialogue avec le professeur de danse",
      illustration: "💬",
      visuel: "— Где репетиция? — На сцене!",
      contenu: [
        "— Здравствуйте! Когда репетиция? (kagda riépiétitsia) : bonjour, quand est la répétition ?",
        "— Сегодня. Репетиция на сцене (sivodnia, riépiétitsia na stsénié) : aujourd'hui, la répétition est sur la scène",
        "— Вы хорошо танцевали! (vy kharacho tantsevali) : vous avez bien dansé !",
        "— Спасибо! Я люблю этот спектакль (spassiba, ya lioubliou ètot spiktakl') : merci, j'aime ce spectacle",
      ],
      voixOff:
        "Imaginons un échange avec un professeur de danse russe. Zdrastvouïtié ! Kagda riépiétitsia ? Bonjour, quand est la répétition ? Sivodnia, riépiétitsia na stsénié : aujourd'hui, sur la scène. Après le cours, le professeur félicite : vy kharacho tantsevali, vous avez bien dansé ! On répond : spassiba, ya lioubliou ètot spiktakl', merci, j'aime ce spectacle. Joue ce dialogue à voix haute, comme une petite scène de théâtre.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 -л / -ла / -ли + Мне нравится",
      contenu: [
        "Passé : infinitif sans -ть + -л (masc.), -ла (fém.), -ли (pluriel) — il s'accorde avec le sujet",
        "Adjectifs : -ый (masc.), -ая (fém.), -ое (neutre), -ые (pluriel)",
        "Goûts et opinions : Мне нравится…, Я люблю…, Я думаю, что…",
        "Questions : Кто? Что? Где? Когда? Почему? — et le vocabulaire de la scène : репетиция, сцена, спектакль",
      ],
      voixOff:
        "Résumons ce chapitre. Le passé se forme avec -l, -la, -li selon le sujet : ya tantsevala, j'ai dansé. Les adjectifs s'accordent : novyï, novaïa, novoïé, novyïé. Pour les goûts, mnié nravitsa et ya lioubliou ; pour l'opinion, ya doumaïou, chto. Les questions commencent par kto, chto, gdié, kagda ou patchimou. Et tu connais le vocabulaire de la scène : riépiétitsia, stséna, spiktakl'. Tu peux maintenant tenir une vraie conversation !",
    },
  ],
  fiche: {
    intro:
      "En troisième, on passe de la phrase simple à la vraie conversation : raconter au passé, décrire avec des adjectifs accordés, dire ce qu'on aime, ce qu'on pense, et poser des questions.",
    sections: [
      {
        titre: "Le passé (-л / -ла / -ли)",
        points: [
          "Formation : infinitif sans -ть + -л (masculin), -ла (féminin), -ли (pluriel)",
          "Le passé s'accorde avec le SUJET : я танцевал (garçon) / я танцевала (fille)",
          "быть (être) : был / была / были — Вчера я была в школе : hier, j'étais à l'école",
        ],
      },
      {
        titre: "Décrire : adjectifs et accord",
        points: [
          "красивый (beau), большой (grand), маленький (petit), трудный (difficile), интересный (intéressant), новый (nouveau)",
          "Accord : -ый (masc.), -ая (fém.), -ое (neutre), -ые (pluriel) — новый урок, новая школа, новое слово, новые костюмы",
        ],
      },
      {
        titre: "Goûts et opinions",
        points: [
          "Мне нравится балет : le ballet me plaît — Мне нравится танцевать : j'aime danser",
          "Я люблю музыку : j'aime la musique — Я не люблю : je n'aime pas",
          "Я думаю, что… : je pense que… (virgule obligatoire avant что) — По-моему : à mon avis",
        ],
      },
      {
        titre: "Poser des questions",
        points: [
          "Кто? (qui), Что? (quoi), Где? (où), Когда? (quand), Почему? (pourquoi), Как? (comment)",
          "Le mot interrogatif se place en tête, sans inversion : Где репетиция? = où est la répétition ?",
        ],
      },
      {
        titre: "Vocabulaire de la scène (danse-études)",
        points: [
          "репетиция (riépiétitsia) : la répétition — сцена (stséna) : la scène",
          "спектакль (spiktakl') : le spectacle — костюм (kastioum) : le costume",
          "балерина (baliérina) : la ballerine — хореограф (khariéograf) : le chorégraphe",
          "Compliment à connaître : Вы хорошо танцевали! = vous avez bien dansé !",
        ],
      },
    ],
    audio:
      "Fiche de révision : raconter et décrire en russe. Le passé se forme en enlevant la terminaison -ть de l'infinitif et en ajoutant -l au masculin, -la au féminin et -li au pluriel : il s'accorde avec le sujet, donc un garçon dit ya tantseval et une fille ya tantsevala, j'ai dansé. Le verbe être donne byl, byla, byli. Pour décrire, on utilise des adjectifs comme krassivyï, beau, ou troudnyï, difficile, accordés en -yï au masculin, -aïa au féminin, -oïé au neutre et -yïé au pluriel. On exprime ses goûts avec mnié nravitsa, cela me plaît, et ya lioubliou, j'aime, et son opinion avec ya doumaïou, chto, je pense que. Les questions commencent par kto, chto, gdié, kagda, patchimou. Enfin, le vocabulaire de la scène : riépiétitsia, la répétition, stséna, la scène, spiktakl', le spectacle, baliérina, la ballerine, et khariéograf, le chorégraphe.",
  },
  memoCards: [
    { recto: "Comment forme-t-on le passé russe ?", verso: "Infinitif sans -ть + -л (masc.), -ла (fém.), -ли (pluriel). Ex : читать → он читал, она читала, они читали." },
    { recto: "Я танцевала (ya tantsevala)", verso: "J'ai dansé (dit par une fille). Un garçon dit : Я танцевал." },
    { recto: "был / была / были", verso: "Passé du verbe être : il était / elle était / ils étaient. Ex : Я была в школе = j'étais à l'école." },
    { recto: "красивый (krassivyï)", verso: "Beau, joli. Fém. : красивая ; pluriel : красивые. Ex : красивая сцена = une belle scène." },
    { recto: "Мне нравится… (mnié nravitsa)", verso: "… me plaît / j'aime. Ex : Мне нравится балет = le ballet me plaît." },
    { recto: "Я думаю, что… (ya doumaïou, chto)", verso: "Je pense que… (virgule obligatoire avant что). Ex : Я думаю, что это красиво." },
    { recto: "Кто? Что? Где? Когда? Почему?", verso: "Qui ? Quoi ? Où ? Quand ? Pourquoi ? — en tête de phrase, sans inversion." },
    { recto: "репетиция (riépiétitsia)", verso: "La répétition. Ex : Где репетиция? = où est la répétition ?" },
    { recto: "сцена • спектакль (stséna, spiktakl')", verso: "La scène • le spectacle. Ex : Репетиция на сцене = la répétition est sur la scène." },
    { recto: "балерина • хореограф (baliérina, khariéograf)", verso: "La ballerine • le chorégraphe. Deux mots voyageurs entre Paris et Saint-Pétersbourg." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle terminaison du passé emploie une fille qui parle d'elle-même ?",
      choix: ["-л", "-ла", "-ли", "-ть"],
      bonneReponse: 1,
      explication: "Le passé s'accorde avec le sujet : une fille dit я танцевала, avec -ла.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie Где? ?",
      choix: ["Quand ?", "Qui ?", "Où ?", "Pourquoi ?"],
      bonneReponse: 2,
      explication: "Где? (gdié) = où ? Когда? = quand ?, Кто? = qui ?, Почему? = pourquoi ?",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : спектакль.",
      reponse: "Le spectacle.",
      explication: "спектакль (spiktakl') : un mot proche du français « spectacle », très utile en danse-études.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Мне нравится балет signifie :",
      choix: ["Je déteste le ballet", "Le ballet me plaît", "Je vais au ballet", "Le ballet est fini"],
      bonneReponse: 1,
      explication: "Мне нравится… = … me plaît. C'est l'une des deux façons d'exprimer un goût.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Mets читать (lire) au passé avec она : Вчера она …",
      reponse: "Вчера она читала (ftchira ana tchitala) : hier, elle a lu.",
      explication: "Sujet féminin → terminaison -ла : чита- + -ла = читала.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : … школа (une nouvelle école).",
      choix: ["новый", "новая", "новое", "новые"],
      bonneReponse: 1,
      explication: "школа est féminin : l'adjectif prend -ая → новая школа.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en français : Вчера я танцевала на сцене.",
      reponse: "Hier, j'ai dansé sur la scène (dit par une fille).",
      explication: "Вчера = hier ; танцевала = passé féminin de danser ; на сцене = sur la scène.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment demander « pourquoi ? » en russe ?",
      choix: ["Когда?", "Как?", "Почему?", "Что?"],
      bonneReponse: 2,
      explication: "Почему? (patchimou) = pourquoi ? Когда? = quand ?, Как? = comment ?, Что? = quoi ?",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en russe : « Nous avons regardé le spectacle. »",
      reponse: "Мы смотрели спектакль (my smatriéli spiktakl').",
      explication: "Sujet pluriel мы → terminaison -ли : смотре- + -ли = смотрели.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Accorde l'adjectif : нов… костюмы (de nouveaux costumes).",
      reponse: "новые костюмы (novyïé kastioumy).",
      explication: "костюмы est au pluriel : l'adjectif prend la terminaison -ые.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Que signifie хореограф ?",
      choix: ["La chorégraphie", "Le chorégraphe", "Le chœur", "Le danseur"],
      bonneReponse: 1,
      explication: "хореограф (khariéograf) = le chorégraphe, la personne qui crée les ballets.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Dis en russe : « Je pense que la répétition est aujourd'hui. »",
      reponse: "Я думаю, что репетиция сегодня.",
      explication: "Я думаю, что… + la phrase ; n'oublie pas la virgule obligatoire avant что.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le passé pluriel (nous, ils) se termine par :",
      choix: ["-л", "-ла", "-ло", "-ли"],
      bonneReponse: 3,
      explication: "Au pluriel, le passé prend -ли : мы танцевали, они читали.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : Я люблю музыку.",
      reponse: "J'aime la musique.",
      explication: "Я люблю = j'aime (fort) ; музыку = la musique (complément).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne les cinq mots interrogatifs vus dans le chapitre, avec leur traduction.",
      reponse: "Кто? (qui ?), Что? (quoi ?), Где? (où ?), Когда? (quand ?), Почему? (pourquoi ?).",
      explication: "On peut ajouter Как? (comment ?). Ils se placent en tête de phrase, sans inversion.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : красив… балерина (une belle ballerine).",
      choix: ["красивый", "красивая", "красивое", "красивые"],
      bonneReponse: 1,
      explication: "балерина est féminin : l'adjectif prend -ая → красивая балерина.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dis en russe : « Où est la répétition ? »",
      reponse: "Где репетиция? (gdié riépiétitsia)",
      explication: "Mot interrogatif en tête + le nom : pas de verbe « être » au présent en russe.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Conversation avancée : raconter et décrire",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un garçon dit « j'ai dansé » :",
          choix: ["Я танцевала", "Я танцевал", "Я танцевали", "Я танцую"],
          bonneReponse: 1,
          explication: "Sujet masculin → -л : я танцевал. (-ла = fille, -ли = pluriel, танцую = présent.)",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : сцена et костюм.",
          reponse: "сцена = la scène ; костюм = le costume.",
          explication: "Deux mots transparents du vocabulaire du spectacle.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Mets быть (être) au passé : « Hier, j'étais au théâtre » (dit par une fille).",
          reponse: "Вчера я была в театре (ftchira ya byla f tiatrié).",
          explication: "быть → была au féminin ; вчера = hier ; в театре = au théâtre.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : Это трудно, … интересно (c'est difficile, mais intéressant).",
          choix: ["и", "но", "что", "где"],
          bonneReponse: 1,
          explication: "но = mais. и = et, что = que, где = où.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Exprime deux goûts en russe : « Le ballet me plaît » et « Je n'aime pas le sport ».",
          reponse: "Мне нравится балет. Я не люблю спорт.",
          explication: "Мне нравится + nom ; négation avec не devant люблю.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Écris trois questions en russe pour préparer une répétition : où est la répétition ? quand est le spectacle ? qui est le chorégraphe ?",
          reponse: "Где репетиция? Когда спектакль? Кто хореограф?",
          explication: "Mot interrogatif + nom : au présent, pas besoin du verbe être.",
        },
      ],
    },
    {
      titre: "Examen 2 — Conversation avancée : raconter et décrire",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie репетиция ?",
          choix: ["La récréation", "La répétition", "La réception", "La représentation"],
          bonneReponse: 1,
          explication: "репетиция (riépiétitsia) = la répétition, mot clé du quotidien danse-études.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : Я думаю, что это красиво.",
          reponse: "Je pense que c'est beau.",
          explication: "Я думаю, что… = je pense que… ; это красиво = c'est beau.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : Они … спектакль (ils ont regardé le spectacle).",
          choix: ["смотрел", "смотрела", "смотрели", "смотрит"],
          bonneReponse: 2,
          explication: "Sujet pluriel они → terminaison -ли : смотрели.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Accorde новый avec : урок (masc.), школа (fém.), костюмы (pluriel).",
          reponse: "новый урок, новая школа, новые костюмы.",
          explication: "Terminaisons -ый / -ая / -ые selon le genre et le nombre du nom.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en russe : « Hier, nous avons dansé sur la scène. »",
          reponse: "Вчера мы танцевали на сцене (ftchira my tantsevali na stsénié).",
          explication: "мы → passé en -ли ; на сцене = sur la scène.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Écris un mini-dialogue de quatre répliques avec un professeur de danse russe : salutation polie, question sur la répétition, sa réponse, un compliment du professeur.",
          reponse:
            "— Здравствуйте! Когда репетиция? — Сегодня. Репетиция на сцене. — Спасибо! — Вы хорошо танцевали!",
          explication: "On combine la salutation polie, une question en Когда?, le lieu (на сцене) et le compliment Вы хорошо танцевали.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le passé = infinitif sans -ть + -л / -ла / -ли : il s'accorde avec le sujet, pas avec la personne.",
    "Erreur classique : un garçon qui dit Я танцевала — au masculin, c'est Я танцевал, sans -а !",
    "Adjectifs : -ый (masc.), -ая (fém.), -ое (neutre), -ые (pluriel) — toujours accorder avec le nom.",
    "Goûts : Мне нравится… (cela me plaît) et Я люблю… (j'aime) ; opinion : Я думаю, что… avec virgule avant что.",
    "Questions sans inversion : Кто? Что? Где? Когда? Почему? en tête de phrase.",
    "Vocabulaire de la scène à connaître par cœur : репетиция, сцена, спектакль, костюм, балерина, хореограф.",
  ],
};

export default chapitre;
