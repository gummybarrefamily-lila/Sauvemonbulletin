import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "cas-nominatif-accusatif",
  titre: "Les cas : nominatif et accusatif",
  matiere: "russe",
  niveau: "4eme",
  langueVoix: "ru-RU",
  description:
    "Découvrir la déclinaison russe avec les deux premiers cas : le nominatif, cas du sujet, et l'accusatif, cas du complément d'objet direct — avec les prépositions в/на + accusatif pour exprimer un déplacement, et un focus danse-études sur la scène.",
  objectifs: [
    "Comprendre ce qu'est un cas et pourquoi les noms russes changent de terminaison",
    "Reconnaître le nominatif, cas du sujet (Кто? Что?)",
    "Former l'accusatif des noms masculins, féminins et neutres, animés et inanimés",
    "Utiliser в / на + accusatif pour exprimer un déplacement, une direction",
    "Vocabulaire danse-études : Я вижу балерину, Я иду в театр, Я иду на репетицию",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un cas ?",
      illustration: "📐",
      visuel: "Именительный ↔ Винительный",
      contenu: [
        "En russe, les noms changent de terminaison selon leur fonction dans la phrase : c'est la déclinaison.",
        "Русский язык имеет шесть падежей (rousskiï iazyk imiéïét chest' padiejeï) : le russe a six cas — on commence par les deux premiers.",
        "Именительный падеж (imienitel'nyï padej) : le nominatif, cas du sujet",
        "Винительный падеж (vinitel'nyï padej) : l'accusatif, cas du complément d'objet direct",
      ],
      voixOff:
        "En russe, il n'y a pas de préposition « de » ou d'ordre des mots fixe comme en français : ce sont les terminaisons des noms qui indiquent leur fonction dans la phrase. On appelle ça la déclinaison, avec six cas au total. Aujourd'hui, on découvre les deux premiers : imienitel'nyï padej, le nominatif, et vinitel'nyï padej, l'accusatif.",
    },
    {
      titre: "Le nominatif : le sujet",
      illustration: "🎯",
      visuel: "Кто? Что? → Балерина танцует",
      contenu: [
        "Le nominatif est la forme du dictionnaire, celle qu'on apprend en premier.",
        "Il répond aux questions Кто? (kto, qui ?) et Что? (chto, quoi ?).",
        "Балет начинается (baliet natchinaïétsa) : le ballet commence — балет est sujet, au nominatif",
        "Балерина танцует (baliérina tantsouïét) : la ballerine danse — балерина est sujet, au nominatif",
      ],
      voixOff:
        "Le nominatif, c'est la forme de base, celle du dictionnaire : c'est le cas du sujet. Baliet natchinaïétsa, le ballet commence : baliet répond à la question chto, quoi. Baliérina tantsouïét, la ballerine danse : baliérina répond à la question kto, qui. Rien de nouveau ici, c'est la forme que tu connais déjà !",
    },
    {
      titre: "L'accusatif : le complément d'objet direct",
      illustration: "👉",
      visuel: "Кого? Что? → Я смотрю балет",
      contenu: [
        "L'accusatif marque le complément d'objet direct (COD), sans préposition.",
        "Il répond à Кого? (kavo, qui, pour un être animé) et Что? (chto, quoi, pour une chose).",
        "Я смотрю балет (ya smatriou baliet) : je regarde le ballet",
        "⚠️ La terminaison du nom change selon son genre et son animation (être vivant ou chose)",
      ],
      voixOff:
        "L'accusatif marque le complément d'objet direct, celui qui subit l'action, sans préposition « de » devant. Ya smatriou baliet, je regarde le ballet : baliet est complément d'objet direct, à l'accusatif. Mais attention, la terminaison ne change pas toujours de la même façon : ça dépend du genre du nom, et de son animation, c'est-à-dire s'il désigne un être vivant ou une chose.",
    },
    {
      titre: "Masculin et neutre inanimés : pas de changement",
      illustration: "⚪",
      visuel: "балет = балет",
      contenu: [
        "Les noms masculins et neutres inanimés (des choses) restent identiques au nominatif et à l'accusatif.",
        "Я люблю балет (ya lioubliou baliet) : j'aime le ballet",
        "Я смотрю спектакль (ya smatriou spiktakl') : je regarde le spectacle",
        "Я открываю окно (ya atkryvaïou akno) : j'ouvre la fenêtre (neutre, inanimé)",
      ],
      voixOff:
        "Première règle, la plus simple : pour les noms masculins et neutres qui désignent des choses, l'accusatif est identique au nominatif. Ya lioubliou baliet, j'aime le ballet : aucun changement. Ya smatriou spiktakl', je regarde le spectacle : toujours pareil. Même chose pour les neutres, comme akno, la fenêtre.",
    },
    {
      titre: "Féminin : -а → -у, -я → -ю",
      illustration: "🔄",
      visuel: "школа → школу",
      contenu: [
        "Les noms féminins en -а prennent -у à l'accusatif, qu'ils soient animés ou non.",
        "школа → школу : я вижу школу (ya vijou chkolou) : je vois l'école",
        "Les noms féminins en -я prennent -ю.",
        "песня → песню : я слушаю песню (ya slouchaïou piesniou) : j'écoute la chanson",
      ],
      voixOff:
        "Deuxième règle : pour les noms féminins, qu'ils désignent une personne ou une chose, on change simplement la dernière lettre. -a devient -ou : chkola devient chkolou, ya vijou chkolou, je vois l'école. Et -ia devient -iou : piesnia devient piesniou, ya slouchaïou piesniou, j'écoute la chanson.",
    },
    {
      titre: "Masculin animé : comme le génitif",
      illustration: "🧍",
      visuel: "артист → артиста",
      contenu: [
        "Pour un être animé masculin (personne, animal), l'accusatif copie la forme du génitif : on ajoute -а ou -я.",
        "артист → артиста : я вижу артиста (ya vijou artista) : je vois l'artiste",
        "партнёр → партнёра : я вижу партнёра (ya vijou partniora) : je vois mon partenaire",
        "Règle à retenir : masculin animé = accusatif comme génitif ; masculin inanimé = accusatif comme nominatif",
      ],
      voixOff:
        "Troisième règle, la plus surprenante : quand le nom masculin désigne un être vivant, l'accusatif ne ressemble plus au nominatif, mais au génitif ! On ajoute -a ou -ia. Artist devient artista : ya vijou artista, je vois l'artiste. Partnior devient partniora : ya vijou partniora, je vois mon partenaire. Retiens bien : masculin animé, comme le génitif ; masculin inanimé, comme le nominatif.",
    },
    {
      titre: "в / на + accusatif : le mouvement",
      illustration: "➡️",
      visuel: "в театр • на репетицию",
      contenu: [
        "Avec в ou на (dans, vers) suivi de l'accusatif, on exprime un déplacement, une direction.",
        "Я иду в театр (ya idou f tiatr) : je vais au théâtre (masc. inanimé, inchangé)",
        "Я иду в школу (ya idou f chkolou) : je vais à l'école (fém. -а → -у)",
        "Я иду на репетицию (ya idou na riépiétitsiïou) : je vais à la répétition (на + accusatif)",
      ],
      voixOff:
        "L'accusatif sert aussi après v ou na, dans le sens de direction, pour dire où l'on va. Ya idou f tiatr, je vais au théâtre : tiatr ne change pas, masculin inanimé. Ya idou f chkolou, je vais à l'école : chkola devient chkolou. Ya idou na riépiétitsiïou, je vais à la répétition : riépiétitsia devient riépiétitsiïou. Le mot après v ou na se met toujours à l'accusatif quand on indique un mouvement.",
    },
    {
      titre: "Focus danse-études : sur scène",
      illustration: "🩰",
      visuel: "Я вижу балерину",
      contenu: [
        "Я вижу балерину (ya vijou baliérinou) : je vois la ballerine (fém. animé, -а → -у)",
        "Я люблю балет (ya lioubliou baliet) : j'aime le ballet (masc. inanimé, inchangé)",
        "Я иду на репетицию (ya idou na riépiétitsiïou) : je vais à la répétition",
        "Тренер видит артистку (trienier vidit artistkou) : le coach voit la danseuse (fém. -а → -у)",
      ],
      voixOff:
        "Mettons ces règles au service de la danse. Ya vijou baliérinou, je vois la ballerine : baliérina devient baliérinou, comme tous les féminins. Ya lioubliou baliet, j'aime le ballet, ne change pas. Ya idou na riépiétitsiïou, je vais à la répétition. Et trienier vidit artistkou, le coach voit la danseuse : même règle féminine, animée ou non, c'est toujours -a qui devient -ou.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Кто/Что vs Кого/Что",
      contenu: [
        "Nominatif = sujet (Кто? Что?) ; Accusatif = COD (Кого? Что?)",
        "Masculin/neutre inanimé : accusatif = nominatif (identique)",
        "Féminin : -а → -у, -я → -ю (toujours, animé ou non)",
        "Masculin animé : accusatif = génitif (+ -а / -я) ; в/на + accusatif = direction, mouvement",
      ],
      voixOff:
        "Résumons. Le nominatif est le cas du sujet, l'accusatif celui du complément d'objet direct. Pour les masculins et neutres inanimés, rien ne change. Pour les féminins, -a devient -ou, -ia devient -iou, toujours. Pour les masculins animés, on ajoute -a ou -ia, comme au génitif. Et n'oublie pas : v et na suivis de l'accusatif indiquent une direction, un mouvement.",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre introduit la déclinaison russe avec les deux premiers cas : le nominatif, cas du sujet, et l'accusatif, cas du complément d'objet direct, avec ses trois règles de formation selon le genre et l'animation du nom.",
    sections: [
      {
        titre: "Le nominatif : le sujet",
        points: [
          "Именительный падеж (imienitel'nyï padej) : forme du dictionnaire, cas du sujet",
          "Répond à Кто? (qui ?) et Что? (quoi ?)",
          "Балерина танцует : la ballerine danse — балерина est sujet",
        ],
      },
      {
        titre: "L'accusatif : le complément d'objet direct",
        points: [
          "Винительный падеж (vinitel'nyï padej) : cas du COD, sans préposition « de »",
          "Répond à Кого? (qui) et Что? (quoi)",
          "Masculin/neutre inanimé : inchangé — Я смотрю балет",
        ],
      },
      {
        titre: "Formation de l'accusatif",
        points: [
          "Féminin en -а → -у ; en -я → -ю — школа → школу, песня → песню",
          "Masculin animé : + -а / -я, comme le génitif — артист → артиста",
          "Masculin/neutre inanimé : identique au nominatif — балет reste балет",
        ],
      },
      {
        titre: "в / на + accusatif — focus danse-études",
        points: [
          "в + accusatif : Я иду в театр, Я иду в школу (direction)",
          "на + accusatif : Я иду на репетицию (direction)",
          "Я вижу балерину : je vois la ballerine — accord féminin -а → -у",
        ],
      },
    ],
    audio:
      "Fiche de révision : les cas nominatif et accusatif. Le nominatif est la forme du dictionnaire, le cas du sujet, qui répond à kto, qui, et chto, quoi. L'accusatif est le cas du complément d'objet direct, sans préposition, qui répond à kavo et chto. Pour les noms masculins et neutres inanimés, l'accusatif est identique au nominatif : ya lioubliou baliet, j'aime le ballet. Pour les noms féminins, -a devient -ou et -ia devient -iou, que le nom soit animé ou non : chkola devient chkolou, piesnia devient piesniou. Pour les noms masculins animés, l'accusatif copie le génitif en ajoutant -a ou -ia : artist devient artista. Enfin, les prépositions v et na suivies de l'accusatif expriment un déplacement : ya idou v tiatr, je vais au théâtre, ya idou na riépiétitsiïou, je vais à la répétition.",
  },
  memoCards: [
    { recto: "Именительный падеж (imienitel'nyï padej)", verso: "Le nominatif : cas du sujet. Répond à Кто?/Что? Ex : Балерина танцует = la ballerine danse." },
    { recto: "Винительный падеж (vinitel'nyï padej)", verso: "L'accusatif : cas du complément d'objet direct. Répond à Кого?/Что? Ex : Я смотрю балет." },
    { recto: "Accusatif masculin/neutre inanimé", verso: "Reste identique au nominatif. Ex : Я люблю балет (балет ne change pas)." },
    { recto: "Accusatif féminin en -а", verso: "-а devient -у. Ex : школа → Я вижу школу." },
    { recto: "Accusatif féminin en -я", verso: "-я devient -ю. Ex : песня → Я слушаю песню." },
    { recto: "Accusatif masculin animé", verso: "Copie le génitif (+ -а/-я). Ex : артист → Я вижу артиста." },
    { recto: "в / на + accusatif", verso: "Exprime un mouvement, une direction. Ex : Я иду в театр ; Я иду на репетицию." },
    { recto: "Je vois la ballerine", verso: "Я вижу балерину (ya vijou baliérinou). балерина → балерину (fém. -а → -у)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle question pose-t-on pour trouver le sujet, au nominatif ?",
      choix: ["Кого?", "Кто?", "Где?", "Когда?"],
      bonneReponse: 1,
      explication: "Le nominatif répond à Кто? (qui ?) et Что? (quoi ?) : c'est le cas du sujet.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment се transforme балет (masculin inanimé) à l'accusatif ?",
      choix: ["балета", "балету", "балет (inchangé)", "балете"],
      bonneReponse: 2,
      explication: "Les noms masculins inanimés ne changent pas à l'accusatif : Я смотрю балет.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : Я вижу школу.",
      reponse: "Je vois l'école.",
      explication: "школа (féminin en -а) devient школу à l'accusatif.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle terminaison prend школа à l'accusatif ?",
      choix: ["-а", "-у", "-е", "-ы"],
      bonneReponse: 1,
      explication: "Féminin en -а → -у : школа → школу.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Mets балерина à l'accusatif dans la phrase : « Я вижу… »",
      reponse: "Я вижу балерину.",
      explication: "Féminin en -а → -у, même règle pour un nom animé ou non : балерина → балерину.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "артист (masculin animé) à l'accusatif devient :",
      choix: ["артист", "артиста", "артисту", "артисте"],
      bonneReponse: 1,
      explication: "Masculin animé : accusatif = génitif, + -а → артиста.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en russe : « Je vais au théâtre. »",
      reponse: "Я иду в театр (ya idou f tiatr).",
      explication: "в + accusatif exprime la direction ; театр, masculin inanimé, ne change pas.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "песня à l'accusatif donne :",
      choix: ["песня", "песню", "песни", "песне"],
      bonneReponse: 1,
      explication: "Féminin en -я → -ю : песня → песню.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en russe : « Le coach voit la danseuse. »",
      reponse: "Тренер видит артистку.",
      explication: "тренер (sujet, nominatif) ; артистку, accusatif féminin de артистка (-а → -у).",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi артист devient артиста à l'accusatif, alors que балет reste балет ?",
      choix: [
        "Parce qu'ils ont des genres différents",
        "Parce qu'артист est animé (accusatif = génitif), балет est inanimé (accusatif = nominatif)",
        "Parce que балет est féminin",
        "Il n'y a pas de règle, c'est au hasard",
      ],
      bonneReponse: 1,
      explication: "Chez les masculins, l'animation change tout : animé → accusatif comme le génitif ; inanimé → accusatif comme le nominatif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en russe : « Je vais à la répétition. »",
      reponse: "Я иду на репетицию.",
      explication: "на + accusatif exprime la direction ; репетиция (féminin en -я) → репетицию.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Construis deux phrases : « je vais à l'école » (в + accusatif) et « je vais à la répétition » (на + accusatif).",
      reponse: "Я иду в школу. Я иду на репетицию.",
      explication: "в et на + accusatif expriment tous deux une direction ; школу (fém. -у), репетицию (fém. -ю).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le nominatif répond à quelle question, pour une chose ?",
      choix: ["Кого?", "Что?", "Где?", "Кому?"],
      bonneReponse: 1,
      explication: "Что? (quoi ?) est l'une des deux questions du nominatif, avec Кто? (qui ?).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : Я вижу балет.",
      reponse: "Je vois le ballet.",
      explication: "балет, masculin inanimé, reste identique au nominatif et à l'accusatif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la règle pour un nom féminin à l'accusatif ?",
      choix: [
        "Il reste toujours identique",
        "-а devient -у, -я devient -ю",
        "On ajoute -ов",
        "Il dépend uniquement de l'animation",
      ],
      bonneReponse: 1,
      explication: "Chez les féminins, la règle est la même, animé ou non : -а → -у, -я → -ю.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Mets à l'accusatif : студент, dans « Я вижу… ».",
      reponse: "Я вижу студента.",
      explication: "студент, masculin animé : accusatif = génitif, + -а → студента.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis : Я иду в театр, я вижу балерину.",
      reponse: "Je vais au théâtre, je vois la ballerine.",
      explication: "театр (masc. inanimé, inchangé après в) ; балерину (fém. -а → -у, COD de вижу).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les cas : nominatif et accusatif",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le nominatif est le cas :",
          choix: ["du complément d'objet direct", "du sujet", "du lieu", "du destinataire"],
          bonneReponse: 1,
          explication: "Le nominatif est la forme de base du nom, celle du sujet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : Я смотрю спектакль.",
          reponse: "Je regarde le spectacle.",
          explication: "спектакль, masculin inanimé, ne change pas à l'accusatif.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que devient музыка (féminin en -а) à l'accusatif ?",
          choix: ["музыка", "музыку", "музыки", "музыке"],
          bonneReponse: 1,
          explication: "Féminin en -а → -у : музыка → музыку.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Mets партнёр (masculin animé) à l'accusatif dans « Я вижу… ».",
          reponse: "Я вижу партнёра.",
          explication: "Masculin animé : accusatif = génitif, + -а → партнёра.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en russe : « Nous allons au théâtre, nous voyons le chorégraphe. »",
          reponse: "Мы идём в театр, мы видим хореографа.",
          explication: "театр (masc. inanimé, inchangé) ; хореографа (masc. animé, + -а).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Écris trois phrases : « je vais à l'école », « je vois la répétition » (le mot, pas le lieu !), « j'aime le ballet ».",
          reponse: "Я иду в школу. Я вижу репетицию. Я люблю балет.",
          explication: "школу (fém. -у, après в) ; репетицию (fém. -ю, COD) ; балет (masc. inanimé, inchangé, COD).",
        },
      ],
    },
    {
      titre: "Examen 2 — Les cas : nominatif et accusatif",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'accusatif est le cas :",
          choix: ["du sujet", "du complément d'objet direct", "de la possession", "du lieu où l'on se trouve"],
          bonneReponse: 1,
          explication: "L'accusatif marque le complément d'objet direct (COD).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en russe : « Je vois l'école. »",
          reponse: "Я вижу школу.",
          explication: "школа (féminin -а) → школу à l'accusatif, COD de вижу.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que devient учитель (masculin animé, en -ь) à l'accusatif ?",
          choix: ["учитель", "учителя", "учителю", "учителе"],
          bonneReponse: 1,
          explication: "Masculin animé : accusatif = génitif ; учитель → учителя.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : Я иду на репетицию, я вижу артиста.",
          reponse: "Je vais à la répétition, je vois l'artiste.",
          explication: "репетицию (fém. -ю, après на) ; артиста (masc. animé, + -а, COD).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique en une phrase la différence entre l'accusatif d'un masculin animé et d'un masculin inanimé.",
          reponse: "Le masculin inanimé reste identique au nominatif à l'accusatif, tandis que le masculin animé prend la terminaison du génitif (+ -а ou -я).",
          explication: "C'est la règle centrale du chapitre : l'animation détermine la forme de l'accusatif masculin.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Écris un mini-dialogue de trois répliques utilisant l'accusatif : demande où va ton ami, il répond qu'il va à la répétition, tu dis que tu vois la ballerine.",
          reponse: "— Куда ты идёшь? — Я иду на репетицию. — Я вижу балерину!",
          explication: "репетицию (fém. -ю, après на) ; балерину (fém. -у, COD de вижу).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le nominatif est le cas du sujet (Кто?/Что?), l'accusatif celui du complément d'objet direct (Кого?/Что?).",
    "Masculin et neutre inanimés : l'accusatif est identique au nominatif — балет reste балет.",
    "Féminin : -а devient -у, -я devient -ю, toujours, que le nom soit animé ou non — школа → школу, песня → песню.",
    "Masculin animé : l'accusatif copie le génitif (+ -а / -я) — артист → артиста.",
    "Erreur classique : oublier de changer un masculin animé — on ne dit pas « Я вижу артист » mais Я вижу артиста.",
    "в / на + accusatif expriment un déplacement : Я иду в театр, Я иду на репетицию.",
  ],
};

export default chapitre;
