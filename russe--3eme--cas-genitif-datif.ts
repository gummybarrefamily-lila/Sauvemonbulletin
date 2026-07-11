import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "cas-genitif-datif",
  titre: "Les cas : génitif et datif",
  matiere: "russe",
  niveau: "3eme",
  langueVoix: "ru-RU",
  description:
    "Après le nominatif et l'accusatif, deux nouveaux cas : le génitif, pour la possession, la quantité et l'absence (Нет + génitif), et le datif, pour le destinataire d'une action — le cas que tu utilises déjà avec Мне нравится et ton âge.",
  objectifs: [
    "Former le génitif singulier des noms masculins, féminins et neutres",
    "Utiliser Нет + génitif pour exprimer l'absence",
    "Employer le génitif après les nombres (2-4 au singulier, 5+ au pluriel)",
    "Former le datif singulier et comprendre son usage avec нравиться et l'âge",
    "Vocabulaire danse-études : костюм балерины, Хореограф даёт костюм балерине",
  ],
  slides: [
    {
      titre: "Le génitif : à qui ? de quoi ?",
      illustration: "📦",
      visuel: "Родительный падеж",
      contenu: [
        "Le génitif (Родительный падеж, radiitiel'nyï padej) exprime la possession, l'appartenance, la quantité et l'absence.",
        "Il répond aux questions Кого? Чего? (kavo, tchivo, de qui ? de quoi ?)",
        "Костюм балерины (kastioum baliériny) : le costume de la ballerine",
        "Урок хореографа (ourok khariéografa) : le cours du chorégraphe",
      ],
      voixOff:
        "Après le nominatif et l'accusatif, voici le troisième cas : radiitiel'nyï padej, le génitif. Il sert à exprimer la possession, comme le « de » du français, mais aussi la quantité et l'absence. Kastioum baliériny, le costume de la ballerine : baliériny répond à la question tchivo, de quoi, de qui.",
    },
    {
      titre: "Formation du génitif singulier",
      illustration: "🔤",
      visuel: "-а/-я • -ы/-и • -а/-я",
      contenu: [
        "Masculin (consonne) : on ajoute -а ou -я — хореограф → хореографа, учитель → учителя",
        "Féminin en -а : devient -ы (ou -и après к, г, х, ж, ш, щ, ч) — балерина → балерины, музыка → музыки",
        "Féminin en -я et neutre en -о/-е : -я → -и, -о → -а, -е → -я",
        "репетиция → репетиции, окно → окна",
      ],
      voixOff:
        "Voici les trois règles de formation. Au masculin, on ajoute -a ou -ia : khariéograf devient khariéografa. Au féminin en -a, la terminaison devient -y, ou -i après certaines consonnes : baliérina devient baliériny. Au féminin en -ia et au neutre, -ia devient -i, -o devient -a : riépiétitsia devient riépiétitsii, akno devient akna.",
    },
    {
      titre: "Нет + génitif : exprimer l'absence",
      illustration: "🚫",
      visuel: "Нет + Р.п.",
      contenu: [
        "Pour dire qu'il n'y a pas quelque chose, on utilise Нет + génitif.",
        "Сегодня нет репетиции (sivodnia niet riépiétitsii) : aujourd'hui, il n'y a pas de répétition",
        "У меня нет времени (ou minia niet vriémieni) : je n'ai pas de temps",
        "У неё нет костюма (ou nieïo niet kastiouma) : elle n'a pas de costume",
      ],
      voixOff:
        "Un usage très fréquent du génitif : après нет, pour dire qu'il n'y a pas quelque chose. Sivodnia niet riépiétitsii, aujourd'hui il n'y a pas de répétition. Ou minia niet vriémieni, je n'ai pas de temps. Ou nieïo niet kastiouma, elle n'a pas de costume : le nom qui suit нет est toujours au génitif.",
    },
    {
      titre: "Le génitif après les nombres",
      illustration: "🔢",
      visuel: "два урока • пять уроков",
      contenu: [
        "Après 2, 3, 4 : nom au génitif singulier — два урока, три репетиции (dva ouroka, tri riépiétitsii)",
        "Après 5 et plus : nom au génitif pluriel — пять уроков (piat' ourokov) : cinq cours",
        "У нас пять репетиций на этой неделе (ou nas piat' riépiétitsiï na etoï niediélié) : nous avons cinq répétitions cette semaine",
      ],
      voixOff:
        "Autre usage essentiel : après un nombre. Après deux, trois ou quatre, le nom se met au génitif singulier : dva ouroka, deux cours. Après cinq et plus, on utilise le génitif pluriel : piat' ourokov, cinq cours. Ou nas piat' riépiétitsiï na etoï niediélié, nous avons cinq répétitions cette semaine.",
    },
    {
      titre: "Le datif : à qui ? pour qui ?",
      illustration: "🎁",
      visuel: "Дательный падеж",
      contenu: [
        "Le datif (Дательный падеж, datiel'nyï padej) exprime le destinataire, à qui ou pour qui est faite une action.",
        "Il répond aux questions Кому? Чему? (kamou, tchimou, à qui ? à quoi ?)",
        "Я дарю цветы балерине (ya dariou tsviéty baliérinié) : j'offre des fleurs à la ballerine",
        "Учитель говорит ученику (outchitiel' gavarit outchinikou) : le professeur parle à l'élève",
      ],
      voixOff:
        "Quatrième cas : datiel'nyï padej, le datif. Il indique le destinataire d'une action, à qui elle est adressée. Ya dariou tsviéty baliérinié, j'offre des fleurs à la ballerine : baliérinié répond à kamou, à qui. Outchitiel' gavarit outchinikou, le professeur parle à l'élève.",
    },
    {
      titre: "Formation du datif singulier",
      illustration: "🔤",
      visuel: "-у/-ю • -е",
      contenu: [
        "Masculin et neutre : on ajoute -у ou -ю — учитель → учителю, окно → окну",
        "Féminin en -а/-я : devient -е — балерина → балерине, репетиция → репетиции (attention : -ия → -ии)",
        "Мы помогаем подруге (my pamagaïem padrougié) : nous aidons notre amie",
      ],
      voixOff:
        "Au masculin et au neutre, on ajoute -ou ou -iou : outchitiel' devient outchitieliou. Au féminin, -a ou -ia devient -ié : baliérina devient baliérinié. Attention, les mots en -ia comme riépiétitsia deviennent -ii au datif, comme au génitif : c'est une petite exception à connaître. My pamagaïem padrougié, nous aidons notre amie.",
    },
    {
      titre: "Le datif que tu connais déjà",
      illustration: "💡",
      visuel: "Мне нравится • Мне 14 лет",
      contenu: [
        "Мне нравится балет (mnié nravitsa baliet) : le ballet me plaît — мне est le datif de я",
        "Мне четырнадцать лет (mnié tchétyrnadtsat' liet) : j'ai quatorze ans — le datif exprime « pour moi »",
        "Тебе, ему, ей, нам, вам, им (tibié, iemou, ieï, nam, vam, im) : à toi, à lui, à elle, à nous, à vous, à eux",
        "Ему нравится танцевать (iemou nravitsa tantsevat') : il aime danser",
      ],
      voixOff:
        "En fait, tu utilises déjà le datif depuis longtemps sans le savoir ! Mnié nravitsa baliet, le ballet me plaît : mnié est le datif de ya. Mnié tchétyrnadtsat' liet, j'ai quatorze ans : même construction. Voici tous les pronoms au datif : tibié, iemou, ieï, nam, vam, im. Iemou nravitsa tantsevat', il aime danser.",
    },
    {
      titre: "Focus danse-études : génitif et datif au studio",
      illustration: "🩰",
      visuel: "без репетиции • балерине",
      contenu: [
        "Сегодня нет репетиции (sivodnia niet riépiétitsii) : aujourd'hui, il n'y a pas de répétition (génitif)",
        "Хореограф даёт костюм балерине (khariéograf daïot kastioum baliérinié) : le chorégraphe donne le costume à la ballerine (datif)",
        "У нас три урока балета в неделю (ou nas tri ouroka baliéta v niediélié) : nous avons trois cours de ballet par semaine (génitif après 3)",
        "Педагог помогает ученице (piédagog pamagaïét outchinitsié) : le professeur aide l'élève (datif)",
      ],
      voixOff:
        "Mettons ces deux cas au service de la danse. Sivodnia niet riépiétitsii, aujourd'hui pas de répétition : génitif après нет. Khariéograf daïot kastioum baliérinié, le chorégraphe donne le costume à la ballerine : baliérinié au datif, destinataire du cadeau. Ou nas tri ouroka baliéta v niediélié, trois cours par semaine : génitif après le nombre trois. Piédagog pamagaïét outchinitsié, le professeur aide l'élève : помогать se construit toujours avec le datif.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Нет + génitif • Мне нравится = datif",
      contenu: [
        "Génitif (Кого?/Чего?) : possession, quantité, absence — Нет + génitif",
        "Après 2-4 : génitif singulier ; après 5+ : génitif pluriel",
        "Datif (Кому?/Чему?) : destinataire — мне, тебе, ему, ей, нам, вам, им",
        "Мне нравится… et Мне … лет utilisent tous deux le datif",
      ],
      voixOff:
        "Résumons. Le génitif répond à kavo, tchivo, et sert pour la possession, la quantité et l'absence, toujours après нет. Après deux, trois ou quatre, génitif singulier ; après cinq et plus, génitif pluriel. Le datif répond à kamou, tchimou, et indique le destinataire : mnié, tibié, iemou, ieï, nam, vam, im. Et tu le savais peut-être déjà : mnié nravitsa et mnié... liet utilisent tous deux le datif !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre présente les cas génitif et datif : le génitif pour la possession, la quantité et l'absence (нет + génitif), et le datif pour le destinataire d'une action, déjà rencontré dans Мне нравится et l'expression de l'âge.",
    sections: [
      {
        titre: "Le génitif : possession, quantité, absence",
        points: [
          "Родительный падеж : répond à Кого?/Чего? — Костюм балерины : le costume de la ballerine",
          "Masculin : + -а/-я ; féminin -а → -ы/-и ; féminin -я et neutre : -я → -и, -о → -а",
          "Нет + génitif : У меня нет времени — je n'ai pas de temps",
        ],
      },
      {
        titre: "Le génitif après les nombres",
        points: [
          "2, 3, 4 + génitif singulier : два урока, три репетиции",
          "5 et plus + génitif pluriel : пять уроков",
        ],
      },
      {
        titre: "Le datif : le destinataire",
        points: [
          "Дательный падеж : répond à Кому?/Чему? — Я дарю цветы балерине",
          "Masculin/neutre : + -у/-ю ; féminin -а/-я → -е",
          "Pronoms au datif : мне, тебе, ему, ей, нам, вам, им",
        ],
      },
      {
        titre: "Le datif déjà connu — focus danse-études",
        points: [
          "Мне нравится балет : мне est le datif de я",
          "Мне четырнадцать лет : le datif exprime « pour moi »",
          "Хореограф даёт костюм балерине : le chorégraphe donne le costume à la ballerine",
        ],
      },
    ],
    audio:
      "Fiche de révision : les cas génitif et datif. Le génitif, radiitiel'nyï padej, répond à kavo et tchivo et exprime la possession, la quantité et l'absence. Au masculin, on ajoute -a ou -ia ; au féminin en -a, la terminaison devient -y ou -i ; au féminin en -ia et au neutre, -ia devient -i et -o devient -a. On l'utilise systématiquement après нет pour dire qu'il n'y a pas quelque chose, et après les nombres : génitif singulier après deux, trois, quatre, génitif pluriel après cinq et plus. Le datif, datiel'nyï padej, répond à kamou et tchimou et exprime le destinataire d'une action. Au masculin et au neutre, on ajoute -ou ou -iou ; au féminin, -a ou -ia devient -ié. Les pronoms au datif sont mnié, tibié, iemou, ieï, nam, vam, im : c'est justement le cas qu'on utilise dans mnié nravitsa, ça me plaît, et mnié... liet, pour dire son âge.",
  },
  memoCards: [
    { recto: "Родительный падеж (radiitiel'nyï padej)", verso: "Le génitif : possession, quantité, absence. Répond à Кого?/Чего?" },
    { recto: "Génitif féminin -а → -ы", verso: "Ex : балерина → балерины (костюм балерины = le costume de la ballerine)." },
    { recto: "Génitif masculin (+а/-я)", verso: "Ex : учитель → учителя (урок учителя = le cours du professeur)." },
    { recto: "Нет + génitif", verso: "Exprime l'absence. Ex : Нет репетиции = il n'y a pas de répétition." },
    { recto: "Génitif après les nombres", verso: "2-4 + génitif singulier ; 5+ + génitif pluriel. Ex : два урока / пять уроков." },
    { recto: "Дательный падеж (datiel'nyï padej)", verso: "Le datif : le destinataire. Répond à Кому?/Чему?" },
    { recto: "Formation du datif (-у/-ю masc/neutre, -е fém)", verso: "Ex : учителю (au professeur), балерине (à la ballerine)." },
    { recto: "Мне нравится / Мне 14 лет", verso: "мне = datif de я, utilisé pour les goûts et pour donner son âge." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle question pose-t-on pour le génitif ?",
      choix: ["Кому?", "Кого?/Чего?", "Кто?", "Где?"],
      bonneReponse: 1,
      explication: "Le génitif répond à Кого?/Чего? (de qui ? de quoi ?).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que devient балерина au génitif ?",
      choix: ["балерина", "балерину", "балерины", "балерине"],
      bonneReponse: 2,
      explication: "Féminin en -а → -ы au génitif : балерина → балерины.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : У меня нет времени.",
      reponse: "Je n'ai pas de temps.",
      explication: "Нет + génitif exprime l'absence : времени est le génitif de время.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le datif répond à quelle question ?",
      choix: ["Кого?", "Кому?", "Где?", "Куда?"],
      bonneReponse: 1,
      explication: "Le datif répond à Кому?/Чему? (à qui ? à quoi ?).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Mets учитель au génitif dans « Урок … » (le cours du professeur).",
      reponse: "Урок учителя.",
      explication: "Masculin : on ajoute -я à учитель → учителя.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Après le nombre два (deux), le nom se met :",
      choix: ["au nominatif pluriel", "au génitif singulier", "au génitif pluriel", "à l'accusatif"],
      bonneReponse: 1,
      explication: "Après 2, 3, 4, le nom se met au génitif singulier : два урока.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en russe : « J'offre des fleurs à la ballerine. »",
      reponse: "Я дарю цветы балерине.",
      explication: "балерине est le datif de балерина (destinataire de l'action).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que devient окно (neutre) au datif ?",
      choix: ["окно", "окна", "окну", "окне"],
      bonneReponse: 2,
      explication: "Neutre : on ajoute -у → окну.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en russe : « Nous avons cinq répétitions cette semaine. »",
      reponse: "У нас пять репетиций на этой неделе.",
      explication: "Après 5 (пять), le nom se met au génitif pluriel : репетиций.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans Мне нравится балет, quel cas est мне ?",
      choix: ["Nominatif", "Accusatif", "Génitif", "Datif"],
      bonneReponse: 3,
      explication: "мне est le datif du pronom я, utilisé avec нравиться.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en russe : « Le professeur aide l'élève (une fille). »",
      reponse: "Педагог помогает ученице.",
      explication: "помогать se construit avec le datif ; ученице est le datif de ученица.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Construis une phrase avec Нет + génitif pour dire qu'il n'y a pas de répétition aujourd'hui, et une avec le datif pour dire que le chorégraphe donne le costume à la ballerine.",
      reponse: "Сегодня нет репетиции. Хореограф даёт костюм балерине.",
      explication: "репетиции (génitif après нет) ; балерине (datif, destinataire du don).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie Нет репетиции ?",
      choix: ["La répétition commence", "Il n'y a pas de répétition", "La répétition est finie", "J'aime la répétition"],
      bonneReponse: 1,
      explication: "Нет + génitif = absence : il n'y a pas de répétition aujourd'hui.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : Мне нравится балет.",
      reponse: "Le ballet me plaît.",
      explication: "мне (datif de я) + нравится + sujet au nominatif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Après пять (cinq), le nom se met :",
      choix: ["au génitif singulier", "au génitif pluriel", "au nominatif", "au datif"],
      bonneReponse: 1,
      explication: "Après 5 et plus, génitif pluriel : пять уроков.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Mets балерина au datif dans « Учитель говорит … » (le professeur parle à la ballerine).",
      reponse: "Учитель говорит балерине.",
      explication: "Féminin en -а → -е au datif : балерина → балерине.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis : У нас три урока балета в неделю, но сегодня нет репетиции.",
      reponse: "Nous avons trois cours de ballet par semaine, mais aujourd'hui il n'y a pas de répétition.",
      explication: "урока (génitif singulier après trois) ; репетиции (génitif après нет).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les cas : génitif et datif",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le génitif exprime notamment :",
          choix: ["le sujet", "le complément d'objet direct", "la possession et l'absence", "le lieu où l'on va"],
          bonneReponse: 2,
          explication: "Le génitif exprime la possession, la quantité et l'absence (avec нет).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : Костюм хореографа.",
          reponse: "Le costume du chorégraphe.",
          explication: "хореографа est le génitif masculin de хореограф (+ -а).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que devient музыка (féminin) au génitif ?",
          choix: ["музыка", "музыку", "музыки", "музыке"],
          bonneReponse: 2,
          explication: "Féminin en -а → -и (après к, г, х...) : музыка → музыки.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en russe : « Nous aidons notre amie. »",
          reponse: "Мы помогаем подруге.",
          explication: "помогать + datif ; подруге est le datif de подруга.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en russe : « Nous avons deux répétitions et quatre cours cette semaine. »",
          reponse: "У нас две репетиции и четыре урока на этой неделе.",
          explication: "Après 2 et 4, génitif singulier : репетиции, урока.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Écris deux phrases : l'une avec Нет + génitif (pas de costume aujourd'hui), l'autre avec le datif (le professeur donne des conseils à l'élève).",
          reponse: "Сегодня нет костюма. Педагог даёт советы ученице.",
          explication: "костюма (génitif après нет) ; ученице (datif, destinataire des conseils).",
        },
      ],
    },
    {
      titre: "Examen 2 — Les cas : génitif et datif",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le datif exprime notamment :",
          choix: ["le sujet", "la possession", "le destinataire d'une action", "le lieu où l'on se trouve"],
          bonneReponse: 2,
          explication: "Le datif indique à qui ou pour qui est faite une action.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : Мне четырнадцать лет.",
          reponse: "J'ai quatorze ans.",
          explication: "мне est le datif de я, utilisé pour donner son âge.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que devient репетиция au génitif et au datif singuliers ?",
          choix: ["репетиция", "репетицию", "репетиции", "репетицией"],
          bonneReponse: 2,
          explication: "Féminin en -я : génitif et datif donnent tous deux репетиции.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en russe : « Le chorégraphe parle à l'artiste (masculin). »",
          reponse: "Хореограф говорит артисту.",
          explication: "артисту est le datif de артист (+ -у).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en russe : « Le professeur donne un costume à la ballerine, mais il n'y a pas de musique aujourd'hui. »",
          reponse: "Педагог даёт костюм балерине, но сегодня нет музыки.",
          explication: "балерине (datif, destinataire) ; музыки (génitif après нет).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique en une phrase la différence d'usage entre le génitif et le datif, avec un exemple pour chacun.",
          reponse: "Le génitif exprime la possession, la quantité ou l'absence (Костюм балерины, Нет репетиции), tandis que le datif indique le destinataire d'une action (Я дарю цветы балерине).",
          explication: "C'est la distinction centrale du chapitre entre ces deux cas.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Génitif (Кого?/Чего?) : possession, quantité, absence — masculin +а/-я, féminin -а→-ы/-и, féminin -я et neutre -я→-и/-о→-а.",
    "Нет + génitif exprime toujours l'absence : Нет репетиции, У меня нет времени.",
    "Après 2-4 : génitif singulier (два урока) ; après 5+ : génitif pluriel (пять уроков).",
    "Datif (Кому?/Чему?) : le destinataire — masculin/neutre +у/-ю, féminin -а/-я → -е.",
    "Pronoms au datif à mémoriser : мне, тебе, ему, ей, нам, вам, им.",
    "Мне нравится… et Мне … лет utilisent tous deux le datif — un cas que tu connaissais déjà sans le savoir !",
  ],
};

export default chapitre;
