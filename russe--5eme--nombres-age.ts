import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "nombres-age",
  titre: "Les nombres et l'âge",
  matiere: "russe",
  niveau: "5eme",
  langueVoix: "ru-RU",
  description:
    "Compter de 0 à 20 en russe, apprendre les dizaines jusqu'à 100, savoir donner son âge et poser des questions de quantité, utiles en classe comme au studio de danse (compter les temps, les répétitions).",
  objectifs: [
    "Compter de 0 à 10 puis de 11 à 20 en russe",
    "Connaître les dizaines : 20, 30… jusqu'à 100",
    "Donner et demander son âge avec « мне … лет »",
    "Utiliser les nombres pour compter des objets, des pas de danse, des répétitions",
    "Poser des questions de quantité : сколько ?",
  ],
  slides: [
    {
      titre: "Compter de 0 à 5",
      illustration: "🔢",
      visuel: "0 1 2 3 4 5",
      contenu: [
        "0 ноль (nol') — 1 один (adin) — 2 два (dva)",
        "3 три (tri) — 4 четыре (tchietyrié)",
        "5 пять (piat')",
        "Ces cinq premiers nombres sont la base de tout le système",
      ],
      voixOff:
        "Commençons à compter en russe. Zéro se dit ноль, nol'. Un se dit один, adin. Deux se dit два, dva. Trois se dit три, tri. Quatre se dit четыре, tchietyrié. Et cinq se dit пять, piat'. Répète-les plusieurs fois : ce sont les briques de base pour tous les autres nombres.",
    },
    {
      titre: "Compter de 6 à 10",
      illustration: "🔢",
      visuel: "6 7 8 9 10",
      contenu: [
        "6 шесть (chest') — 7 семь (siem')",
        "8 восемь (vosiem') — 9 девять (dieviat')",
        "10 десять (diessiat')",
        "Remarque : beaucoup de nombres se terminent par un ь, le signe mou",
      ],
      voixOff:
        "Continuons. Six se dit шесть, chest'. Sept se dit семь, siem'. Huit se dit восемь, vosiem'. Neuf se dit девять, dieviat'. Et dix se dit десять, diessiat'. Tu remarques que beaucoup de ces nombres se terminent par le signe mou : c'est une caractéristique du russe, il adoucit la dernière consonne.",
    },
    {
      titre: "De 11 à 20",
      illustration: "🔟",
      visuel: "11 одиннадцать … 20 двадцать",
      contenu: [
        "11 одиннадцать (adinnadtsat') — 12 двенадцать (dvienadtsat')",
        "13 тринадцать (trinadtsat') — 15 пятнадцать (piatnadtsat')",
        "Le suffixe -надцать (-nadtsat') veut dire « plus dix »",
        "20 двадцать (dvadtsat')",
        ],
      voixOff:
        "De onze à dix-neuf, le russe ajoute le suffixe надцать, nadtsat', qui signifie « plus dix », après le chiffre des unités. Ainsi douze, двенадцать, dvienadtsat', c'est deux plus le suffixe dix. C'est comme douze en français qui vient de deux et dix ! Retiens surtout двенадцать, douze, l'âge de beaucoup d'entre vous. Vingt se dit двадцать, dvadtsat', un mot à part.",
    },
    {
      titre: "Les dizaines jusqu'à 100",
      illustration: "💯",
      visuel: "20 30 … 100",
      contenu: [
        "20 двадцать — 30 тридцать (tridtsat')",
        "40 сорок (sorak) — 50 пятьдесят (piatdiessiat)",
        "60 шестьдесят (chestdiessiat) — 70 семьдесят (siemdiessiat)",
        "80 восемьдесят (vosiemdiessiat) — 100 сто (sto)",
      ],
      voixOff:
        "Pour les dizaines, on retrouve souvent la racine du chiffre suivie de дцать ou десят. Vingt, двадцать. Trente, тридцать. Quarante fait exception avec сорок, sorak. Cinquante, шестьдесят и cetera suivent le modèle chiffre plus десят. Cent se dit sto, un mot très court et facile à retenir !",
    },
    {
      titre: "Quel âge as-tu ?",
      illustration: "🎂",
      visuel: "Мне 12 лет",
      contenu: [
        "Мне … лет (Mnié … liet) : j'ai … ans",
        "Сколько тебе лет ? (Skol'ka tiebié liet ?) : quel âge as-tu ?",
        "Мне одиннадцать лет : j'ai onze ans",
        "Attention : après 1 → год, après 2-4 → года, après 5+ → лет",
      ],
      voixOff:
        "Pour donner son âge, on utilise мне suivi du nombre puis лет. Мне двенадцать лет, j'ai douze ans. Attention, en russe, le mot année change selon le nombre : après un, on dit год ; après deux, trois, quatre, on dit года ; et à partir de cinq, on dit лет. C'est une règle typique du russe qu'on retrouvera souvent avec les nombres !",
    },
    {
      titre: "Compter au studio de danse",
      illustration: "💃",
      visuel: "Раз, два, три, четыре !",
      contenu: [
        "Раз, два, три, четыре ! (Raz, dva, tri, tchietyrié) : et un, deux, trois, quatre !",
        "Считать такты (Schitat' takty) : compter les temps",
        "Повторить пять раз (Pavtarit' piat' raz) : répéter cinq fois",
        "Раз is utilisé à la place de один quand on compte un rythme",
      ],
      voixOff:
        "Au studio de danse, on ne compte pas toujours comme en cours : раз, raz, remplace souvent один pour lancer un rythme. Раз, два, три, четыре, et un, deux, trois, quatre ! Считать такты signifie compter les temps, et повторить пять раз veut dire répéter cinq fois. Des expressions parfaites pour suivre un cours de danse en russe !",
    },
    {
      titre: "Poser des questions de quantité",
      illustration: "❓",
      visuel: "Сколько?",
      contenu: [
        "Сколько? (Skol'ka?) : combien ?",
        "Сколько тебе лет? : quel âge as-tu ?",
        "Сколько у тебя уроков? : combien as-tu de cours ?",
        "У меня три урока танца (Ou mienia tri ouroka tantsa) : j'ai trois cours de danse",
      ],
      voixOff:
        "Сколько, skol'ka, veut dire combien, et sert dans de nombreuses questions. Сколько тебе лет : quel âge as-tu. Сколько у тебя уроков : combien as-tu de cours. On peut répondre у меня три урока танца, j'ai trois cours de danse. Une structure très utile pour parler de ton emploi du temps !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 0 → 100, мне … лет",
      contenu: [
        "0 à 10 : ноль, один, два, три, четыре, пять, шесть, семь, восемь, девять, десять",
        "11 à 19 : chiffre + -надцать — 20 двадцать, 100 сто",
        "Мне … лет : j'ai … ans (год / года / лет selon le nombre)",
        "Раз, два, три, четыре ! : le compte du studio de danse",
      ],
      voixOff:
        "Résumons. De zéro à dix, retiens les dix premiers nombres de base. De onze à dix-neuf, ajoute le suffixe надцать. Vingt et cent sont des mots à part : двадцать et сто. Pour donner ton âge, utilise мне suivi du nombre et de лет, года ou год selon la règle. Et n'oublie pas раз, два, три, четыре, le compte indispensable au studio de danse !",
    },
  ],
  fiche: {
    intro:
      "Les nombres russes de 0 à 10 sont la base de tout le système : de 11 à 19, on ajoute le suffixe -надцать ; les dizaines suivent un autre modèle. L'âge se dit avec « мне … лет », en faisant attention à l'accord du mot année.",
    sections: [
      {
        titre: "De 0 à 10",
        points: [
          "0 ноль, 1 один, 2 два, 3 три, 4 четыре, 5 пять",
          "6 шесть, 7 семь, 8 восемь, 9 девять, 10 десять",
        ],
      },
      {
        titre: "De 11 à 20 et les dizaines",
        points: [
          "11 à 19 : chiffre + -надцать (ex. двенадцать = douze)",
          "20 двадцать, 30 тридцать, 40 сорок, 50 пятьдесят… 100 сто",
        ],
      },
      {
        titre: "Donner son âge",
        points: [
          "Мне … лет : j'ai … ans — Сколько тебе лет ? : quel âge as-tu ?",
          "Accord du mot « année » : 1 → год, 2-4 → года, 5 et plus → лет",
        ],
      },
      {
        titre: "Compter au quotidien et en danse",
        points: [
          "Сколько ? : combien ? — У меня три урока : j'ai trois cours",
          "Раз, два, три, четыре ! : compte utilisé au studio à la place de один",
        ],
      },
    ],
    audio:
      "Fiche de révision : les nombres et l'âge. De zéro à dix, on compte ноль, один, два, три, четыре, пять, шесть, семь, восемь, девять, десять. De onze à dix-neuf, on ajoute le suffixe надцать au chiffre des unités, par exemple двенадцать pour douze. Vingt se dit двадцать, et les dizaines suivantes suivent un modèle proche jusqu'à cent, sto. Pour donner son âge, on utilise мне suivi du nombre puis лет, en retenant que le mot année change de forme : год après un, года après deux trois ou quatre, et лет à partir de cinq. Sколько permet de poser une question de quantité, comme сколько тебе лет. Enfin, au studio de danse, on compte souvent раз, два, три, четыре, en remplaçant один par раз.",
  },
  memoCards: [
    { recto: "1 – 5 : один, два, три, четыре, пять", verso: "Un, deux, trois, quatre, cinq." },
    { recto: "6 – 10 : шесть, семь, восемь, девять, десять", verso: "Six, sept, huit, neuf, dix." },
    { recto: "12 : двенадцать (dvienadtsat')", verso: "Douze : deux + suffixe -надцать (plus dix)." },
    { recto: "20 / 100", verso: "20 = двадцать (dvadtsat') / 100 = сто (sto)." },
    { recto: "Мне … лет", verso: "J'ai … ans. Ex : Мне 12 лет. Question : Сколько тебе лет ?" },
    { recto: "Accord du mot « année »", verso: "1 → год ; 2-4 → года ; 5 et plus → лет." },
    { recto: "Раз, два, три, четыре!", verso: "Et un, deux, trois, quatre ! Compte utilisé en danse." },
    { recto: "Сколько? (skol'ka?)", verso: "Combien ? Ex : Сколько у тебя уроков?" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « cinq » en russe ?",
      choix: ["четыре", "пять", "шесть", "три"],
      bonneReponse: 1,
      explication: "Пять (piat') signifie cinq.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie « десять » ?",
      choix: ["neuf", "dix", "onze", "huit"],
      bonneReponse: 1,
      explication: "Десять (diessiat') signifie dix.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris en russe les nombres 1, 2, 3.",
      reponse: "один, два, три",
      explication: "Les trois premiers nombres de base du russe.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel suffixe transforme un chiffre en nombre de 11 à 19 ?",
      choix: ["-дцать", "-надцать", "-десят", "-ать"],
      bonneReponse: 1,
      explication: "Le suffixe -надцать signifie « plus dix » (ex. двенадцать = douze).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment dit-on « j'ai douze ans » ?",
      choix: ["Мне десять лет", "Мне двенадцать лет", "Мне двадцать лет", "Сколько тебе лет"],
      bonneReponse: 1,
      explication: "Мне двенадцать лет signifie « j'ai douze ans ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis la question « Quel âge as-tu ? » et donne une réponse possible.",
      reponse: "Сколько тебе лет ? — Мне 12 лет.",
      explication: "Сколько тебе лет est la question, мне … лет la réponse.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris en russe : vingt, trente, cent.",
      reponse: "двадцать, тридцать, сто",
      explication: "Vingt et trente suivent un modèle proche ; cent, сто, est un mot très court.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel mot pour « année » utilise-t-on après le nombre 3 ?",
      choix: ["год", "года", "лет", "года и лет"],
      bonneReponse: 1,
      explication: "Après 2, 3 ou 4, on utilise года (ex. три года = trois ans).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la règle d'accord du mot « année » en russe et donne un exemple pour 1, pour 3 et pour 12.",
      reponse:
        "Après 1 : год (один год). Après 2, 3, 4 : года (три года). À partir de 5, ainsi que 11 à 14 : лет (двенадцать лет).",
      explication: "Cette règle d'accord des nombres est typique du russe et s'applique à beaucoup d'autres mots.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis la phrase de danse : « Et un, deux, trois, quatre ! On répète cinq fois. »",
      reponse: "Раз, два, три, четыре! Повторить пять раз.",
      explication: "Раз remplace один pour compter un rythme ; повторить … раз signifie répéter … fois.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Comment dit-on « quarante » en russe (attention, ce nombre est irrégulier) ?",
      choix: ["четыредцать", "сорок", "сороктадцать", "четырьдесят"],
      bonneReponse: 1,
      explication: "Quarante se dit сорок, sorak : c'est une exception au modèle habituel des dizaines.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un professeur de danse russe demande « Сколько у тебя уроков танца в неделю ? » (par semaine). Réponds que tu as trois cours.",
      reponse: "У меня три урока танца в неделю.",
      explication: "У меня + nombre + urok(a) sert à exprimer une quantité de cours.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Три » signifie :",
      choix: ["deux", "trois", "quatre", "cinq"],
      bonneReponse: 1,
      explication: "Три (tri) signifie trois.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Мне … лет » sert à exprimer :",
      choix: ["Le prénom", "L'âge", "La nationalité", "L'heure"],
      bonneReponse: 1,
      explication: "Мне … лет signifie « j'ai … ans ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris en russe : onze, quinze, vingt.",
      reponse: "одиннадцать, пятнадцать, двадцать",
      explication: "Onze et quinze utilisent le suffixe -надцать ; vingt est un mot à part.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « J'ai trois cours de danse. »",
      reponse: "У меня три урока танца.",
      explication: "У меня + nombre + урок(а) танца exprime la possession d'un nombre de cours.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Compte à voix haute de 1 à 10 en russe (écris la liste) puis donne le compte utilisé au studio de danse.",
      reponse:
        "один, два, три, четыре, пять, шесть, семь, восемь, девять, десять — Au studio : раз, два, три, четыре !",
      explication: "Раз remplace один uniquement pour compter un rythme de danse.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les nombres et l'âge",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Восемь » signifie :",
          choix: ["sept", "huit", "neuf", "six"],
          bonneReponse: 1,
          explication: "Восемь (vosiem') signifie huit.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment demande-t-on l'âge de quelqu'un ?",
          choix: ["Как дела?", "Сколько тебе лет?", "Как тебя зовут?", "Откуда ты?"],
          bonneReponse: 1,
          explication: "Сколько тебе лет ? est la question pour demander l'âge.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris en russe les nombres 13, 16, 19.",
          reponse: "тринадцать, шестнадцать, девятнадцать",
          explication: "Tous suivent le modèle chiffre + suffixe -надцать.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Complète et traduis : « Мне ___ лет » pour l'âge de 14 ans.",
          reponse: "Мне четырнадцать лет : j'ai quatorze ans.",
          explication: "Après 14 (comme après 11-14), on utilise toujours лет.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis ce court dialogue : « Combien de cours de danse as-tu par semaine ? — J'ai cinq cours. »",
          reponse: "Сколько у тебя уроков танца в неделю? — У меня пять уроков.",
          explication: "Сколько … в неделю pour demander une fréquence hebdomadaire ; у меня + nombre + урок(а/ов) pour répondre.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « два года » mais « пять лет » ?",
          choix: [
            "C'est une erreur, les deux formes sont interchangeables",
            "Le mot « année » s'accorde différemment selon le nombre qui précède",
            "Года est réservé au pluriel de politesse",
            "Лет ne s'utilise qu'à l'oral",
          ],
          bonneReponse: 1,
          explication: "En russe, le nom qui suit un nombre change de forme selon une règle grammaticale précise (1, 2-4, 5+).",
        },
      ],
    },
    {
      titre: "Examen 2 — Les nombres et l'âge",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Сто » signifie :",
          choix: ["dix", "cinquante", "cent", "mille"],
          bonneReponse: 2,
          explication: "Сто (sto) signifie cent.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que remplace « раз » au studio de danse ?",
          choix: ["два", "один", "три", "четыре"],
          bonneReponse: 1,
          explication: "Раз remplace один pour lancer un compte rythmique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris en russe : quarante, cinquante, soixante.",
          reponse: "сорок, пятьдесят, шестьдесят",
          explication: "Сорок est irrégulier ; les autres suivent le modèle chiffre + десят.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Répète quatre fois, s'il te plaît. »",
          reponse: "Повтори четыре раза, пожалуйста.",
          explication: "Повторить … раз(а) veut dire répéter … fois ; пожалуйста = s'il te plaît.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un mini-dialogue où l'on demande à un camarade son âge et le nombre de ses cours de danse par semaine, avec les réponses.",
          reponse:
            "— Сколько тебе лет? — Мне 13 лет.\n— Сколько у тебя уроков танца в неделю? — У меня четыре урока.",
          explication: "On enchaîne деэ questions avec сколько, l'une sur l'âge, l'autre sur la quantité de cours.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Comment dit-on « vingt-deux » en russe (nombre composé) ?",
          choix: ["двадцать два", "два двадцать", "двадцатьдва", "второй двадцать"],
          bonneReponse: 0,
          explication: "En russe, les nombres composés se forment en juxtaposant la dizaine puis l'unité, sans suffixe : двадцать два.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "0 à 10 : ноль, один, два, три, четыре, пять, шесть, семь, восемь, девять, десять — à connaître par cœur.",
    "11 à 19 : chiffre + suffixe -надцать (« plus dix »), ex. двенадцать = douze.",
    "Dizaines : двадцать (20), тридцать (30), сорок (40, irrégulier)… сто (100).",
    "Âge : мне … лет — attention à l'accord : год (1), года (2-4), лет (5 et plus, et 11-14).",
    "Сколько ? sert à toutes les questions de quantité : âge, nombre de cours, de répétitions.",
    "Au studio de danse : раз, два, три, четыре ! remplace один pour compter un rythme.",
  ],
};

export default chapitre;
