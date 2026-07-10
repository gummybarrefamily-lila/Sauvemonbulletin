import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "se-presenter",
  titre: "Se présenter : premiers dialogues",
  matiere: "russe",
  niveau: "5eme",
  langueVoix: "ru-RU",
  description:
    "Apprendre à dire bonjour, à donner son prénom, sa nationalité et à poser les premières questions de politesse en russe, pour construire un mini-dialogue de présentation.",
  objectifs: [
    "Saluer et prendre congé : здравствуйте, привет, до свидания",
    "Se présenter avec « меня зовут… » et demander le prénom de l'autre",
    "Dire d'où l'on vient et sa nationalité (я из Франции, я француженка)",
    "Demander et donner des nouvelles : как дела ?",
    "Construire un petit dialogue de présentation à l'oral",
  ],
  slides: [
    {
      titre: "Bonjour ou salut ?",
      illustration: "👋",
      visuel: "Здравствуйте / Привет",
      contenu: [
        "Здравствуйте (zdravstvouïtié) : bonjour, formel (à un adulte, un professeur)",
        "Привет (privet) : salut, informel (entre copains)",
        "Доброе утро (dobroïé outro) : bonjour le matin",
        "Добрый вечер (dobryï vietchier) : bonsoir",
      ],
      voixOff:
        "En russe, il existe deux façons de dire bonjour. Здравствуйте, zdravstvouïtié, est la formule polie, à utiliser avec un adulte ou un professeur. Привет, privet, est la version familière, entre copains. On peut aussi dire доброе утро le matin, et добрый вечер le soir. Choisis toujours la formule adaptée à la personne en face de toi !",
    },
    {
      titre: "Comment tu t'appelles ?",
      illustration: "🙋",
      visuel: "Меня зовут…",
      contenu: [
        "Меня зовут Лея (Mienia zavout Léa) : je m'appelle Léa",
        "Как тебя зовут ? (Kak tiebia zavout ?) : comment tu t'appelles ?",
        "А тебя ? (A tiebia ?) : et toi ?",
        "Очень приятно (Otchien' priiatna) : enchanté(e)",
      ],
      voixOff:
        "Pour se présenter, on utilise l'expression меня зовут, mienia zavout, suivie de son prénom : meunia zavout Léa, je m'appelle Léa. Pour demander le prénom de quelqu'un, on dit как тебя зовут, kak tiebia zavout. On répond souvent par очень приятно, otchien' priiatna, qui veut dire enchanté. Une formule très utile dès le premier jour au studio !",
    },
    {
      titre: "D'où viens-tu ?",
      illustration: "🌍",
      visuel: "Я из Франции",
      contenu: [
        "Я из Франции (Ia iz Frantsii) : je viens de France",
        "Откуда ты ? (Otkouda ty ?) : d'où viens-tu ?",
        "Я француженка (Ia frantouzhenka) : je suis française (fille)",
        "Я француз (Ia frantouz) : je suis français (garçon)",
      ],
      voixOff:
        "Откуда ты, otkouda ty, veut dire d'où viens-tu. On répond par я из Франции, ia iz Frantsii, je viens de France. Pour dire sa nationalité, attention : une fille dit я француженка, ia frantouzhenka, et un garçon dit я француз, ia frantouz. Comme en français, le mot change selon qu'on est une fille ou un garçon !",
    },
    {
      titre: "Comment ça va ?",
      illustration: "😊",
      visuel: "Как дела ?",
      contenu: [
        "Как дела ? (Kak diela ?) : comment ça va ?",
        "Хорошо, спасибо (Kharacho, spassiba) : bien, merci",
        "Так себе (Tak siebié) : comme ci comme ça",
        "А у тебя ? (A ou tiebia ?) : et toi ?",
      ],
      voixOff:
        "Как дела, kak diela, littéralement comment vont les affaires, sert à demander comment ça va. On répond хорошо, спасибо, kharacho spassiba, bien merci, ou так себе, tak siebié, comme ci comme ça, si la journée est plus difficile. N'oublie pas de renvoyer la question avec а у тебя, a ou tiebia, et toi ?",
    },
    {
      titre: "L'âge et les études",
      illustration: "🎂",
      visuel: "Мне 12 лет",
      contenu: [
        "Мне 12 лет (Mnié dvienadtsat' liet) : j'ai 12 ans",
        "Сколько тебе лет ? (Skol'ka tiebié liet ?) : quel âge as-tu ?",
        "Я учусь в 5 классе (Ia outchous' v piatom klassié) : je suis en 5ème",
        "Я танцую (Ia tantsouiou) : je danse",
      ],
      voixOff:
        "Pour donner son âge, on dit mnié suivi du chiffre puis liet : мне двенадцать лет, j'ai douze ans. La question est сколько тебе лет, skol'ka tiebié liet, quel âge as-tu ? On peut ajouter я учусь в пятом классе, je suis en cinquième, et я танцую, ia tantsouiou, je danse : deux phrases très utiles pour toi en danse-études !",
    },
    {
      titre: "Dire au revoir",
      illustration: "👋",
      visuel: "До свидания / Пока",
      contenu: [
        "До свидания (Da svidania) : au revoir, formel",
        "Пока (Paka) : salut, à bientôt, informel",
        "До завтра (Da zaftra) : à demain",
        "Спасибо и пока ! (Spassiba i paka) : merci et à bientôt !",
      ],
      voixOff:
        "Comme pour bonjour, il y a deux façons de dire au revoir. До свидания, da svidania, est la formule polie. Пока, paka, est la version familière entre amis. Si tu reverras la personne le lendemain, tu peux dire до завтра, da zaftra, à demain. Choisis toujours le bon registre selon la personne que tu salues !",
    },
    {
      titre: "Un mini-dialogue complet",
      illustration: "💬",
      visuel: "— Привет! — Привет! Как дела?",
      contenu: [
        "— Здравствуйте! Меня зовут Лея. А вас?",
        "— Меня зовут Анна. Очень приятно!",
        "— Откуда вы? — Я из Франции, я танцую.",
        "— До свидания! — До завтра!",
      ],
      voixOff:
        "Assemblons toutes ces expressions dans un dialogue. Здравствуйте, меня зовут Лея, а вас : bonjour, je m'appelle Léa, et vous ? Меня зовут Анна, очень приятно : je m'appelle Anna, enchantée. Откуда вы, я из Франции, я танцую : d'où venez-vous, je viens de France, je danse. До свидания, до завтра : au revoir, à demain. Tu as maintenant un dialogue complet à réciter !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Saluer, se nommer, dire d'où l'on vient",
      contenu: [
        "Deux registres : formel (здравствуйте, до свидания) et familier (привет, пока)",
        "Меня зовут… : je m'appelle… — Как тебя зовут ? : comment t'appelles-tu ?",
        "Я из Франции : je viens de France — attention à français/française",
        "Мне 12 лет, я танцую : deux phrases utiles pour te présenter en studio",
      ],
      voixOff:
        "Résumons. Retiens qu'il existe deux registres en russe : formel avec здравствуйте et до свидания, familier avec привет et пока. Pour te présenter : меня зовут suivi de ton prénom, et pour demander le prénom de l'autre : как тебя зовут. Pour ta nationalité : я из Франции, en faisant attention à la différence entre француз et француженка. Et surtout, n'oublie pas мне двенадцать лет, я танцую : une phrase parfaite pour te présenter au studio de danse !",
    },
  ],
  fiche: {
    intro:
      "Pour se présenter en russe, on utilise quelques formules fixes : saluer, donner son prénom avec « меня зовут », dire sa nationalité et son âge, puis prendre congé. Il faut toujours choisir entre le registre formel et le registre familier.",
    sections: [
      {
        titre: "Saluer et prendre congé",
        points: [
          "Здравствуйте (formel) / Привет (familier) : bonjour",
          "До свидания (formel) / Пока (familier) : au revoir",
          "Доброе утро : bonjour le matin — Добрый вечер : bonsoir",
        ],
      },
      {
        titre: "Se présenter",
        points: [
          "Меня зовут + prénom : je m'appelle…",
          "Как тебя зовут ? : comment t'appelles-tu ? — Очень приятно : enchanté(e)",
          "Я из Франции : je viens de France — Откуда ты ? : d'où viens-tu ?",
        ],
      },
      {
        titre: "Nationalité, âge et nouvelles",
        points: [
          "Я француз (garçon) / Я француженка (fille) : je suis français(e)",
          "Мне … лет : j'ai … ans — Сколько тебе лет ? : quel âge as-tu ?",
          "Как дела ? : comment ça va ? — Хорошо, спасибо : bien, merci",
        ],
      },
      {
        titre: "Vocabulaire utile danse-études",
        points: [
          "Я танцую : je danse — Я учусь в 5 классе : je suis en 5ème",
          "On peut combiner les phrases : « Меня зовут Лея, я танцую » pour se présenter au studio",
        ],
      },
    ],
    audio:
      "Fiche de révision : se présenter en russe. Pour saluer, on utilise здравствуйте en formel et привет en familier. Pour se présenter, on dit меня зовут suivi de son prénom, et on demande как тебя зовут pour connaître celui de l'autre. On répond souvent очень приятно, enchanté. Pour dire d'où l'on vient, откуда ты, on répond я из Франции. Attention à la nationalité : un garçon dit я француз, une fille dit я француженка. Pour donner son âge, on dit мне suivi du nombre puis лет. Как дела permet de demander comment ça va, et on répond хорошо спасибо. Enfin, pour se présenter en danse-études, on peut ajouter я танцую, je danse. Pour prendre congé, до свидания en formel, пока en familier.",
  },
  memoCards: [
    { recto: "Здравствуйте (zdravstvouïtié)", verso: "Bonjour (formel), à un adulte ou un professeur." },
    { recto: "Привет (privet)", verso: "Salut (familier), entre copains." },
    { recto: "Меня зовут… (mienia zavout…)", verso: "Je m'appelle… Ex : Меня зовут Лея." },
    { recto: "Как тебя зовут? (kak tiebia zavout?)", verso: "Comment t'appelles-tu ?" },
    { recto: "Я из Франции (ia iz Frantsii)", verso: "Je viens de France." },
    { recto: "Я француз / Я француженка", verso: "Je suis français (garçon) / française (fille)." },
    { recto: "Как дела? (kak diela?)", verso: "Comment ça va ? Réponse : Хорошо, спасибо (bien, merci)." },
    { recto: "До свидания / Пока", verso: "Au revoir (formel) / Salut, à bientôt (familier)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « bonjour » de façon formelle en russe ?",
      choix: ["Привет", "Здравствуйте", "Пока", "Спасибо"],
      bonneReponse: 1,
      explication: "Здравствуйте est la formule polie de bonjour ; Привет est familier.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie « меня зовут » ?",
      choix: ["Comment ça va ?", "Je m'appelle", "D'où viens-tu ?", "Au revoir"],
      bonneReponse: 1,
      explication: "Меня зовут + prénom signifie « je m'appelle ».",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « Salut ! Comment ça va ? »",
      reponse: "Привет! Как дела?",
      explication: "Привет (salut, familier) + Как дела (comment ça va).",
      },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle formule utilise-t-on entre amis pour dire au revoir ?",
      choix: ["До свидания", "Пока", "Здравствуйте", "Очень приятно"],
      bonneReponse: 1,
      explication: "Пока est la version familière d'au revoir ; до свидания est formelle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une fille française dit :",
      choix: ["Я француз", "Я француженка", "Я из Франция", "Меня зовут Франция"],
      bonneReponse: 1,
      explication: "Une fille dit я француженка ; un garçon dirait я француз.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Je m'appelle Léa, je viens de France. »",
      reponse: "Меня зовут Лея, я из Франции.",
      explication: "On enchaîne меня зовут + prénom, puis я из Франции.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment demande-t-on l'âge de quelqu'un et comment répond-on « j'ai 12 ans » ?",
      reponse: "Сколько тебе лет ? — Мне 12 лет.",
      explication: "Сколько тебе лет pour demander, мне … лет pour répondre.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Откуда ты? » signifie :",
      choix: ["Comment t'appelles-tu ?", "D'où viens-tu ?", "Quel âge as-tu ?", "Comment vas-tu ?"],
      bonneReponse: 1,
      explication: "Откуда ты interroge sur l'origine ; on répond я из + pays.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un mini-dialogue de présentation formelle (4 répliques minimum) entre deux personnes qui se rencontrent au studio de danse.",
      reponse:
        "— Здравствуйте! Меня зовут Лея. А вас?\n— Меня зовут Анна. Очень приятно!\n— Откуда вы?\n— Я из Франции, я танцую.",
      explication: "Le dialogue utilise le registre formel : здравствуйте, вас, et enchaîne salutation, présentation, origine.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Я учусь в 5 классе », le mot « учусь » vient du verbe qui signifie :",
      choix: ["danser", "étudier / apprendre", "voyager", "s'appeler"],
      bonneReponse: 1,
      explication: "Учиться signifie étudier/apprendre : я учусь = j'étudie, je suis élève.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre « до свидания » et « до завтра », et donne un contexte d'usage pour chacun.",
      reponse:
        "До свидания = au revoir en général (formel) ; до завтра = à demain, quand on sait qu'on reverra la personne le lendemain (ex. après le cours de danse).",
      explication: "До завтра est plus précis : il annonce une prochaine rencontre datée.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un correspondant russe te demande « Как дела? ». Réponds en deux phrases variées (une positive, une plus mitigée).",
      reponse: "Хорошо, спасибо, а у тебя ? / Так себе, но я танцую сегодня.",
      explication: "Хорошо (bien) et так себе (comme ci comme ça) sont les deux réponses les plus courantes.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Привет » est une formule :",
      choix: ["Formelle", "Familière", "Interrogative", "Négative"],
      bonneReponse: 1,
      explication: "Привет est réservé au registre familier, entre amis.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment répond-on à « Как тебя зовут ? » ?",
      choix: ["Меня зовут + prénom", "Я из Франции", "Хорошо, спасибо", "До свидания"],
      bonneReponse: 0,
      explication: "On répond en donnant son prénom avec меня зовут.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « J'ai 12 ans et je suis en 5ème. »",
      reponse: "Мне 12 лет, я учусь в 5 классе.",
      explication: "Мне … лет pour l'âge, я учусь в … классе pour la classe.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre я француз et я француженка ?",
      reponse: "Я француз = je suis français (garçon) ; я француженка = je suis française (fille).",
      explication: "Comme en français, l'adjectif de nationalité change selon le genre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris un dialogue court (salutation, prénom, origine, au revoir) au registre familier.",
      reponse: "— Привет! Меня зовут Лея.\n— Привет, Лея! Откуда ты?\n— Я из Франции.\n— Пока!",
      explication: "Le registre familier utilise привет et пока plutôt que здравствуйте et до свидания.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Se présenter",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle formule salue de façon polie un professeur ?",
          choix: ["Привет", "Пока", "Здравствуйте", "Как дела"],
          bonneReponse: 2,
          explication: "Здравствуйте est la formule formelle, adaptée à un professeur.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Очень приятно » signifie :",
          choix: ["Beaucoup de plaisir", "Enchanté(e)", "Très bien", "À bientôt"],
          bonneReponse: 1,
          explication: "Очень приятно se dit après avoir fait connaissance de quelqu'un.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Je m'appelle Anna, j'ai 13 ans, je viens de France. »",
          reponse: "Меня зовут Анна, мне 13 лет, я из Франции.",
          explication: "On enchaîne les trois structures : меня зовут, мне … лет, я из Франции.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Complète et traduis : « Как … ты? » (question sur l'origine).",
          reponse: "Откуда ты ? : d'où viens-tu ?",
          explication: "La question sur l'origine commence par откуда, pas как.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un dialogue complet de présentation formelle entre un élève et son nouveau professeur de danse russe (au moins 6 répliques).",
          reponse:
            "— Здравствуйте! Меня зовут Лея.\n— Здравствуйте, Лея! Очень приятно. Откуда вы?\n— Я из Франции.\n— Сколько вам лет?\n— Мне 12 лет, я танцую.\n— До свидания!\n— До завтра!",
          explication: "Le dialogue combine salutation, présentation, origine, âge et prise de congé, tout au registre formel.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « я француженка » et non « я француз » pour une fille ?",
          choix: [
            "C'est une erreur, les deux formes sont identiques",
            "Les adjectifs de nationalité s'accordent en genre en russe",
            "Француженка signifie « élève »",
            "Француз est réservé au pluriel",
          ],
          bonneReponse: 1,
          explication: "Comme en français, le nom de nationalité change de forme au féminin en russe.",
        },
      ],
    },
    {
      titre: "Examen 2 — Se présenter",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« До завтра » signifie :",
          choix: ["Au revoir", "À demain", "Bonsoir", "Merci"],
          bonneReponse: 1,
          explication: "До завтра annonce qu'on se reverra le lendemain.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pour demander « comment ça va ? » on dit :",
          choix: ["Как тебя зовут?", "Как дела?", "Откуда ты?", "Сколько тебе лет?"],
          bonneReponse: 1,
          explication: "Как дела ? est la formule pour demander des nouvelles.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Bonjour, comment allez-vous ? » (registre formel).",
          reponse: "Здравствуйте, как у вас дела?",
          explication: "On utilise здравствуйте (formel) et вас (vous formel) plutôt que тебя.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un élève russe te demande « Ты танцуешь? ». Réponds que oui et précise que tu es en 5ème.",
          reponse: "Да, я танцую. Я учусь в 5 классе.",
          explication: "Да confirme la réponse ; on enchaîne avec я учусь в … классе.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare les registres formel et familier pour saluer, se présenter et dire au revoir (donne au moins 3 paires).",
          reponse:
            "Bonjour : здравствуйте / привет. Prénom : как тебя/вас зовут. Au revoir : до свидания / пока.",
          explication: "Le registre dépend de la personne : adulte/inconnu = formel, ami/camarade = familier.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans un dialogue formel entre élève et professeur, quel pronom utilise-t-on pour « tu/vous » ?",
          choix: ["ты", "вас/вы", "он", "мы"],
          bonneReponse: 1,
          explication: "Le vouvoiement russe utilise вы (et вас à l'accusatif/génitif), comme en français.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Deux registres à toujours choisir : formel (здравствуйте, до свидания, вы) et familier (привет, пока, ты).",
    "Se présenter : меня зовут + prénom ; demander : как тебя зовут ?",
    "Nationalité : я француз (garçon) / я француженка (fille) — я из Франции : je viens de France.",
    "Âge et études : мне … лет ; я учусь в 5 классе ; я танцую pour se présenter en danse-études.",
    "Как дела ? se répond par хорошо, спасибо ou так себе, puis on relance avec а у тебя ?",
  ],
};

export default chapitre;
