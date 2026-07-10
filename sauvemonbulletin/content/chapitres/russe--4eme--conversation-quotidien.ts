import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "conversation-quotidien",
  titre: "Conversation : la vie quotidienne",
  matiere: "russe",
  niveau: "4eme",
  description:
    "Savoir saluer, se présenter et être poli en russe, parler de sa journée et de ses activités, et conjuguer ses premiers verbes au présent — avec un focus danse-études pour parler de ses cours de ballet.",
  objectifs: [
    "Saluer et prendre congé (Здравствуйте, Привет, До свидания)",
    "Se présenter : dire son nom et son âge (Меня зовут..., Мне 13 лет)",
    "Utiliser les formules de politesse (Спасибо, Пожалуйста, Извините)",
    "Connaître les pronoms personnels et conjuguer les verbes en -ать et -ить au présent",
    "Parler de sa journée et de la danse : Я танцую, Я иду на урок балета",
  ],
  slides: [
    {
      titre: "Saluer en russe",
      illustration: "👋",
      visuel: "Здравствуйте! (zdrastvouïtié)",
      contenu: [
        "Здравствуйте (zdrastvouïtié) : bonjour (poli, à un adulte ou un groupe)",
        "Привет (priviet) : salut (entre amis)",
        "Доброе утро (dobraïé outra) : bonjour, le matin",
        "До свидания (da svidania) : au revoir",
      ],
      voixOff:
        "Pour saluer en russe, tout dépend de la personne en face. À un professeur ou un adulte, on dit zdrastvouïtié, la forme polie : c'est le mot le plus difficile à prononcer du chapitre, mais aussi le plus utile ! Entre amis, un simple priviet suffit. Le matin, on peut dire dobraïé outra, et pour partir, da svidania, au revoir.",
    },
    {
      titre: "Se présenter",
      illustration: "🙋",
      visuel: "Меня зовут… (minia zavout)",
      contenu: [
        "Меня зовут Лея (minia zavout Leia) : je m'appelle Léa",
        "Как тебя зовут? (kak tibia zavout) : comment t'appelles-tu ?",
        "Мне тринадцать лет (mnié trinadtsat' liet) : j'ai treize ans",
        "Я француженка (ya frantsoujenka) : je suis française — Я француз (ya frantsouz) : je suis français",
      ],
      voixOff:
        "Pour se présenter, on dit minia zavout, puis son prénom : littéralement, « on m'appelle ». Pour demander le prénom de quelqu'un, on dit kak tibia zavout. Pour donner son âge, mnié trinadtsat' liet, j'ai treize ans. Et pour dire sa nationalité : ya frantsouz pour un garçon, ya frantsoujenka pour une fille.",
    },
    {
      titre: "La politesse",
      illustration: "🙏",
      visuel: "Спасибо! (spassiba)",
      contenu: [
        "Спасибо (spassiba) : merci",
        "Пожалуйста (pajalousta) : s'il te plaît / de rien",
        "Извините (izvinitié) : excusez-moi, pardon",
        "Да / Нет (da / niet) : oui / non",
      ],
      voixOff:
        "Les mots magiques du russe : spassiba, merci, et pajalousta, un mot deux-en-un qui veut dire s'il te plaît, mais qui sert aussi à répondre de rien après un merci. Pour s'excuser ou attirer l'attention poliment, on dit izvinitié. Et bien sûr : da pour oui, niet pour non.",
    },
    {
      titre: "Les pronoms personnels",
      illustration: "👥",
      visuel: "я • ты • он • она",
      contenu: [
        "я (ya) : je — ты (ty) : tu",
        "он / она (on / ana) : il / elle",
        "мы (my) : nous — вы (vy) : vous",
        "они (ani) : ils, elles",
      ],
      voixOff:
        "Avant de conjuguer, il faut les pronoms personnels. Ya, je. Ty, tu. On, il, et ana, elle. Puis my, nous, vy, vous, et ani, ils ou elles. Comme en français, vy sert aussi de vouvoiement poli : c'est celui qu'on emploie avec Zdrastvouïtié !",
    },
    {
      titre: "Le présent des verbes en -ать",
      illustration: "⚙️",
      visuel: "читать → я читаю",
      contenu: [
        "читать (tchitat') : lire — on enlève -ть et on ajoute les terminaisons",
        "я читаю, ты читаешь (ya tchitaïou, ty tchitaïech) : je lis, tu lis",
        "он читает, мы читаем (on tchitaïet, my tchitaïem) : il lit, nous lisons",
        "вы читаете, они читают (vy tchitaïétié, ani tchitaïout) : vous lisez, ils lisent",
      ],
      voixOff:
        "Première conjugaison, celle des verbes en -ать comme tchitat', lire. On enlève la terminaison -ть et on ajoute : you, iéch, iét, iém, iétié, yout. Ya tchitaïou, je lis. Ty tchitaïech, tu lis. On tchitaïet, il lit. Sur ce modèle se conjuguent aussi znat', savoir, et slouchat', écouter.",
    },
    {
      titre: "Le présent des verbes en -ить",
      illustration: "🔩",
      visuel: "говорить → я говорю",
      contenu: [
        "говорить (gavarit') : parler",
        "я говорю, ты говоришь (ya gavariou, ty gavarich) : je parle, tu parles",
        "он говорит, мы говорим (on gavarit, my gavarim) : il parle, nous parlons",
        "Я говорю по-русски (ya gavariou pa-rousski) : je parle russe",
      ],
      voixOff:
        "Deuxième conjugaison, les verbes en -ить comme gavarit', parler. Les terminaisons sont : you, ich, it, im, itié, iat. Ya gavariou, je parle. Ty gavarich, tu parles. On gavarit, il parle. Retiens surtout la phrase clé : ya gavariou pa-rousski, je parle russe. Bientôt, ce sera vrai !",
    },
    {
      titre: "Ma journée",
      illustration: "🌞",
      visuel: "Я учусь • Я танцую",
      contenu: [
        "Я учусь в школе (ya outchous' f chkolié) : j'étudie à l'école",
        "Я читаю (ya tchitaïou) : je lis — Я слушаю музыку (ya slouchaïou mouzykou) : j'écoute de la musique",
        "Я танцую (ya tantsouïou) : je danse",
        "Утром / днём / вечером (outram / dniom / viétchéram) : le matin / la journée / le soir",
      ],
      voixOff:
        "Racontons maintenant une journée type. Ya outchous' f chkolié : j'étudie à l'école. Ya tchitaïou, je lis, ya slouchaïou mouzykou, j'écoute de la musique, et surtout ya tantsouïou, je danse ! Pour situer le moment, on ajoute outram le matin, dniom dans la journée, viétchéram le soir.",
    },
    {
      titre: "Focus danse-études : parler du ballet",
      illustration: "🩰",
      visuel: "Я иду на урок балета",
      contenu: [
        "Я иду на урок балета (ya idou na ourok baliéta) : je vais au cours de ballet",
        "Я танцую каждый день (ya tantsouïou kajdyï dién') : je danse tous les jours",
        "Я люблю балет (ya lioubliou baliet) : j'aime le ballet",
        "урок (ourok) : le cours, la leçon",
      ],
      voixOff:
        "La phrase indispensable de ta filière : ya idou na ourok baliéta, je vais au cours de ballet. Le mot ourok signifie le cours ou la leçon. Tu peux préciser ya tantsouïou kajdyï dién', je danse tous les jours, et affirmer fièrement ya lioubliou baliet, j'aime le ballet. Le russe est la langue historique du ballet : ces phrases te serviront vraiment !",
    },
    {
      titre: "Mini-dialogue : la rencontre",
      illustration: "💬",
      visuel: "— Привет! — Привет!",
      contenu: [
        "— Привет! Как тебя зовут? (priviet, kak tibia zavout) : salut, comment t'appelles-tu ?",
        "— Меня зовут Лея. Я танцую (minia zavout Leia, ya tantsouïou) : je m'appelle Léa, je danse",
        "— Я иду на урок балета (ya idou na ourok baliéta) : je vais au cours de ballet",
        "— До свидания! Спасибо! (da svidania, spassiba) : au revoir, merci !",
      ],
      voixOff:
        "Mettons tout ensemble dans un mini-dialogue. Priviet, kak tibia zavout ? Salut, comment t'appelles-tu ? Minia zavout Leia, ya tantsouïou : je m'appelle Léa, je danse. Ya idou na ourok baliéta : je vais au cours de ballet. Et pour finir poliment : spassiba, da svidania ! Entraîne-toi à le jouer à deux, à voix haute.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Меня зовут… Я танцую!",
      contenu: [
        "Saluer : Здравствуйте (poli) / Привет (amis) — Politesse : Спасибо, Пожалуйста, Извините",
        "Se présenter : Меня зовут… + Мне тринадцать лет",
        "Verbes en -ать : я читаю, ты читаешь… — verbes en -ить : я говорю, ты говоришь…",
        "Danse-études : Я иду на урок балета — je vais au cours de ballet",
      ],
      voixOff:
        "Résumons. Pour saluer : zdrastvouïtié avec les adultes, priviet avec les amis. Les mots magiques : spassiba, pajalousta, izvinitié. Pour se présenter : minia zavout, puis son prénom. Au présent, les verbes en -ать se conjuguent comme tchitat', ya tchitaïou, et les verbes en -ить comme gavarit', ya gavariou. Et la phrase de ta filière : ya idou na ourok baliéta, je vais au cours de ballet. Bravo !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre donne les outils de la conversation quotidienne : saluer, se présenter, remercier, puis parler de sa journée avec les pronoms personnels et le présent des deux conjugaisons.",
    sections: [
      {
        titre: "Saluer et prendre congé",
        points: [
          "Здравствуйте (zdrastvouïtié) : bonjour poli — Привет (priviet) : salut entre amis",
          "Доброе утро (dobraïé outra) : bonjour le matin",
          "До свидания (da svidania) : au revoir",
        ],
      },
      {
        titre: "Se présenter",
        points: [
          "Меня зовут… (minia zavout) : je m'appelle… — Как тебя зовут? : comment t'appelles-tu ?",
          "Мне тринадцать лет (mnié trinadtsat' liet) : j'ai treize ans",
          "Я француз / Я француженка : je suis français / française",
        ],
      },
      {
        titre: "La politesse",
        points: [
          "Спасибо (spassiba) : merci — Пожалуйста (pajalousta) : s'il te plaît / de rien",
          "Извините (izvinitié) : excusez-moi — Да / Нет (da / niet) : oui / non",
        ],
      },
      {
        titre: "Pronoms personnels et présent",
        points: [
          "я, ты, он/она, мы, вы, они (ya, ty, on/ana, my, vy, ani)",
          "Verbes en -ать (читать) : я читаю, ты читаешь, он читает, мы читаем, вы читаете, они читают",
          "Verbes en -ить (говорить) : я говорю, ты говоришь, он говорит, мы говорим, вы говорите, они говорят",
        ],
      },
      {
        titre: "Parler de sa journée — focus danse-études",
        points: [
          "Я учусь в школе : j'étudie à l'école — Я слушаю музыку : j'écoute de la musique",
          "Я танцую (ya tantsouïou) : je danse — Я танцую каждый день : je danse tous les jours",
          "Я иду на урок балета (ya idou na ourok baliéta) : je vais au cours de ballet",
        ],
      },
    ],
    audio:
      "Fiche de révision : la conversation quotidienne en russe. Pour saluer, on dit zdrastvouïtié à un adulte et priviet à un ami ; pour partir, da svidania. Les mots de politesse sont spassiba, merci, pajalousta, s'il te plaît ou de rien, et izvinitié, excusez-moi. Pour se présenter, on dit minia zavout suivi de son prénom, puis mnié trinadtsat' liet pour donner son âge. Les pronoms personnels sont ya, ty, on, ana, my, vy et ani. Au présent, les verbes en -ать comme lire se conjuguent ya tchitaïou, ty tchitaïech, on tchitaïet ; les verbes en -ить comme parler donnent ya gavariou, ty gavarich, on gavarit. On peut alors raconter sa journée : ya outchous' f chkolié, j'étudie à l'école, ya tantsouïou, je danse, et la phrase clé de la filière danse-études : ya idou na ourok baliéta, je vais au cours de ballet.",
  },
  memoCards: [
    { recto: "Здравствуйте (zdrastvouïtié)", verso: "Bonjour (forme polie). À un professeur, un adulte, un groupe." },
    { recto: "Привет (priviet)", verso: "Salut ! (entre amis). Ex : Привет, Лея!" },
    { recto: "Спасибо (spassiba)", verso: "Merci. Réponse : Пожалуйста (pajalousta), de rien." },
    { recto: "Извините (izvinitié)", verso: "Excusez-moi, pardon. Pour s'excuser ou aborder quelqu'un poliment." },
    { recto: "Je m'appelle Léa", verso: "Меня зовут Лея (minia zavout Leia). Littéralement : « on m'appelle Léa »." },
    { recto: "я, ты, он, она", verso: "je (ya), tu (ty), il (on), elle (ana). Et мы (nous), вы (vous), они (ils/elles)." },
    { recto: "читать (tchitat') : conjugue « je » et « tu »", verso: "я читаю (ya tchitaïou), ты читаешь (ty tchitaïech). Modèle des verbes en -ать." },
    { recto: "говорить (gavarit') : conjugue « je » et « il »", verso: "я говорю (ya gavariou), он говорит (on gavarit). Modèle des verbes en -ить." },
    { recto: "Я танцую (ya tantsouïou)", verso: "Je danse. Ex : Я танцую каждый день = je danse tous les jours." },
    { recto: "Je vais au cours de ballet", verso: "Я иду на урок балета (ya idou na ourok baliéta). урок = le cours." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie Спасибо (spassiba) ?",
      choix: ["Bonjour", "Merci", "Pardon", "Au revoir"],
      bonneReponse: 1,
      explication: "Спасибо = merci. On y répond Пожалуйста (pajalousta), de rien.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment saluer poliment un professeur russe ?",
      choix: ["Привет", "Пока", "Здравствуйте", "Да"],
      bonneReponse: 2,
      explication: "Здравствуйте (zdrastvouïtié) est la forme polie. Привет (salut) est réservé aux amis.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : Привет! Как тебя зовут?",
      reponse: "Salut ! Comment t'appelles-tu ?",
      explication: "Привет = salut (familier) ; Как тебя зовут? = comment t'appelles-tu ? (littéralement « comment t'appelle-t-on ? »).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel pronom russe signifie « je » ?",
      choix: ["ты", "он", "мы", "я"],
      bonneReponse: 3,
      explication: "я (ya) = je. ты = tu, он = il, мы = nous.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue читать (lire) avec ты : ты …",
      reponse: "ты читаешь (ty tchitaïech)",
      explication: "Verbe en -ать : on enlève -ть et on ajoute -ешь à la 2e personne du singulier.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que veut dire Меня зовут Анна ?",
      choix: ["J'ai vu Anna", "Je m'appelle Anna", "J'appelle Anna", "Anna est là"],
      bonneReponse: 1,
      explication: "Меня зовут… = je m'appelle… (littéralement « on m'appelle… »).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en russe : « Je danse. »",
      reponse: "Я танцую (ya tantsouïou).",
      explication: "танцевать = danser ; à la 1re personne du présent : я танцую.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : Она … по-русски (elle parle russe).",
      choix: ["говорю", "говоришь", "говорит", "говорят"],
      bonneReponse: 2,
      explication: "говорить, verbe en -ить : avec он/она, la terminaison est -ит → она говорит.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en français : Я иду на урок балета.",
      reponse: "Je vais au cours de ballet.",
      explication: "Я иду = je vais (à pied) ; на урок балета = au cours de ballet (урок = cours).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Conjugue читать (lire) avec они, puis traduis la forme obtenue.",
      reponse: "они читают (ani tchitaïout) : ils lisent / elles lisent.",
      explication: "Verbe en -ать : à la 3e personne du pluriel, la terminaison est -ют.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Пожалуйста peut signifier :",
      choix: ["seulement « s'il te plaît »", "seulement « de rien »", "« s'il te plaît » ET « de rien »", "« merci beaucoup »"],
      bonneReponse: 2,
      explication: "Пожалуйста est un mot deux-en-un : demande polie (s'il te plaît) et réponse à merci (de rien).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente-toi en deux phrases russes : dis ton prénom (par ex. Léa) et ton âge (13 ans).",
      reponse: "Меня зовут Лея. Мне тринадцать лет.",
      explication: "Меня зовут + prénom ; Мне + âge + лет = j'ai … ans.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Au revoir » se dit :",
      choix: ["Привет", "До свидания", "Спасибо", "Извините"],
      bonneReponse: 1,
      explication: "До свидания (da svidania) = au revoir.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : Меня зовут Тома.",
      reponse: "Je m'appelle Thomas.",
      explication: "Меня зовут + prénom = je m'appelle…",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne les six pronoms personnels russes avec leur traduction.",
      reponse: "я (je), ты (tu), он/она (il/elle), мы (nous), вы (vous), они (ils/elles).",
      explication: "вы sert aussi de vouvoiement poli, comme en français.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : Мы … музыку (nous écoutons de la musique).",
      choix: ["слушаю", "слушаешь", "слушаем", "слушают"],
      bonneReponse: 2,
      explication: "слушать, verbe en -ать : avec мы, la terminaison est -ем → мы слушаем.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dis en russe : « Je vais au cours de ballet. »",
      reponse: "Я иду на урок балета (ya idou na ourok baliéta).",
      explication: "La phrase clé du chapitre pour la filière danse-études.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Conversation : la vie quotidienne",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle formule emploies-tu pour t'excuser ?",
          choix: ["Спасибо", "Извините", "Привет", "Пожалуйста"],
          bonneReponse: 1,
          explication: "Извините (izvinitié) = excusez-moi. Спасибо = merci, Привет = salut.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en russe : « Bonjour (poli) ! Merci ! »",
          reponse: "Здравствуйте! Спасибо!",
          explication: "Здравствуйте = bonjour poli ; Спасибо = merci.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : Ты … по-русски? (parles-tu russe ?)",
          choix: ["говорю", "говоришь", "говорит", "говорим"],
          bonneReponse: 1,
          explication: "говорить avec ты : terminaison -ишь → ты говоришь.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en français : Я учусь в школе. Вечером я читаю.",
          reponse: "J'étudie à l'école. Le soir, je lis.",
          explication: "Я учусь = j'étudie ; в школе = à l'école ; вечером = le soir ; я читаю = je lis.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue танцевать (danser) : « je danse » et « ils dansent ».",
          reponse: "я танцую (ya tantsouïou) ; они танцуют (ani tantsouïout).",
          explication: "танцевать donne танцу- au présent : я танцую, они танцуют.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Écris un mini-dialogue de quatre répliques : salue un ami, demande son prénom, il répond, puis dis que tu vas au cours de ballet.",
          reponse:
            "— Привет! Как тебя зовут? — Меня зовут Анна. А тебя? — Меня зовут Лея. Я иду на урок балета. — До свидания!",
          explication: "On réutilise les salutations, Меня зовут… et la phrase Я иду на урок балета.",
        },
      ],
    },
    {
      titre: "Examen 2 — Conversation : la vie quotidienne",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Oui » et « non » se disent :",
          choix: ["да / нет", "нет / да", "вы / мы", "он / она"],
          bonneReponse: 0,
          explication: "да (da) = oui ; нет (niet) = non.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : Доброе утро! Я иду в школу.",
          reponse: "Bonjour (bon matin) ! Je vais à l'école.",
          explication: "Доброе утро = bonjour du matin ; Я иду в школу = je vais à l'école.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel pronom faut-il pour vouvoyer poliment un adulte ?",
          choix: ["ты", "он", "вы", "они"],
          bonneReponse: 2,
          explication: "вы (vy) sert de vouvoiement, comme le « vous » français.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en russe : « Nous lisons et nous écoutons de la musique. »",
          reponse: "Мы читаем и мы слушаем музыку. (ou : Мы читаем и слушаем музыку.)",
          explication: "читать et слушать sont deux verbes en -ать : avec мы, terminaison -ем ; и = et.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un garçon et une fille disent chacun leur nationalité française. Écris leurs deux phrases.",
          reponse: "Я француз (le garçon). Я француженка (la fille).",
          explication: "Le nom de nationalité change selon le genre : француз / француженка.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Présente-toi en trois phrases russes : ton prénom, « je danse tous les jours », « j'aime le ballet ».",
          reponse: "Меня зовут Лея. Я танцую каждый день. Я люблю балет.",
          explication: "Меня зовут… ; Я танцую каждый день ; Я люблю балет : les trois phrases clés du chapitre.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Deux niveaux de salut : Здравствуйте (poli, adultes) et Привет (amis) — ne pas les inverser !",
    "Les mots magiques : Спасибо (merci), Пожалуйста (s'il te plaît ET de rien), Извините (pardon).",
    "Se présenter : Меня зовут… (« on m'appelle… ») + Мне тринадцать лет (j'ai 13 ans).",
    "Verbes en -ать (читать) : -ю, -ешь, -ет, -ем, -ете, -ют ; verbes en -ить (говорить) : -ю, -ишь, -ит, -им, -ите, -ят.",
    "Erreur classique : dire Привет à un professeur — avec un adulte, toujours Здравствуйте et le pronom вы.",
    "Phrase danse-études à savoir par cœur : Я иду на урок балета — je vais au cours de ballet.",
  ],
};

export default chapitre;
