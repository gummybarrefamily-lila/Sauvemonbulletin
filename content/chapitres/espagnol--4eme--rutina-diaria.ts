import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "rutina-diaria",
  titre: "La routine quotidienne",
  matiere: "espagnol",
  niveau: "4eme",
  langueVoix: "es-ES",
  description:
    "Décrire sa journée type en espagnol : les verbes pronominaux (levantarse, ducharse…), les verbes à diphtongue (e>ie, o>ue) et les expressions de fréquence pour raconter sa routine.",
  objectifs: [
    "Conjuguer les verbes pronominaux au présent (levantarse, acostarse)",
    "Utiliser les verbes à diphtongue e>ie et o>ue (empezar, poder)",
    "Employer des expressions de temps et de fréquence (siempre, normalmente…)",
    "Décrire une journée complète, du matin au soir",
    "Situer les actions les unes par rapport aux autres (antes de, después de, luego)",
  ],
  slides: [
    {
      titre: "Les verbes pronominaux",
      illustration: "🪞",
      visuel: "Levantarse : me levanto",
      contenu: [
        "Levantarse : se lever — me levanto, te levantas, se levanta…",
        "Le pronom réfléchi change selon la personne : me, te, se, nos, os, se",
        "Ducharse (se doucher), vestirse (s'habiller), acostarse (se coucher)",
        "Le pronom se place devant le verbe conjugué",
      ],
      voixOff:
        "Beaucoup de verbes de la routine sont pronominaux, c'est-à-dire accompagnés d'un pronom réfléchi. Levantarse, se lever, se conjugue me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Le pronom change selon la personne et se place juste devant le verbe conjugué. On retrouve la même logique avec ducharse, se doucher, vestirse, s'habiller, et acostarse, se coucher.",
    },
    {
      titre: "Le matin",
      illustration: "🌅",
      visuel: "Me levanto a las siete",
      contenu: [
        "Me despierto a las siete : je me réveille à sept heures",
        "Me levanto, me ducho, me visto : je me lève, je me douche, je m'habille",
        "Desayuno cereales con leche : je prends des céréales au lait au petit-déjeuner",
        "Me lavo los dientes : je me lave les dents",
      ],
      voixOff:
        "Décrivons une matinée type. Me despierto a las siete, je me réveille à sept heures. Puis me levanto, me ducho, me visto : je me lève, je me douche, je m'habille. Desayuno cereales con leche, je prends des céréales au lait pour le petit-déjeuner : ce verbe-là, desayunar, n'est pas pronominal ! Enfin, me lavo los dientes, je me lave les dents, avant de partir.",
    },
    {
      titre: "Les verbes à diphtongue e>ie",
      illustration: "🔀",
      visuel: "Empezar : empiezo",
      contenu: [
        "Empezar (commencer) : empiezo, empiezas, empieza, empezamos, empezáis, empiezan",
        "Le e se change en ie sauf avec nosotros et vosotros",
        "Querer (vouloir), preferir (préférer) suivent la même règle",
        "Las clases empiezan a las ocho : les cours commencent à huit heures",
      ],
      voixOff:
        "Certains verbes changent une voyelle au présent : c'est ce qu'on appelle une diphtongue. Empezar, commencer, devient empiezo, empiezas, empieza, empezamos, empezáis, empiezan. Remarque que le e se transforme en ie partout, sauf avec nosotros et vosotros, qui gardent la forme normale. Querer, vouloir, et preferir, préférer, suivent exactement la même règle.",
    },
    {
      titre: "Les verbes à diphtongue o>ue",
      illustration: "🔁",
      visuel: "Poder : puedo",
      contenu: [
        "Poder (pouvoir) : puedo, puedes, puede, podemos, podéis, pueden",
        "Dormir (dormir), volver (revenir), almorzar (déjeuner) suivent la même règle",
        "Duermo ocho horas : je dors huit heures",
        "Vuelvo a casa a las cinco : je rentre à la maison à cinq heures",
      ],
      voixOff:
        "D'autres verbes transforment leur o en ue. Poder, pouvoir, devient puedo, puedes, puede, podemos, podéis, pueden — toujours sauf pour nosotros et vosotros. Dormir, dormir, volver, revenir, et almorzar, déjeuner, suivent la même logique. Par exemple, duermo ocho horas, je dors huit heures, ou vuelvo a casa a las cinco, je rentre à la maison à cinq heures.",
    },
    {
      titre: "L'après-midi et le soir",
      illustration: "🌆",
      visuel: "Por la tarde…",
      contenu: [
        "Vuelvo a casa y hago los deberes : je rentre et je fais mes devoirs",
        "Ceno a las nueve : je dîne à neuf heures",
        "Veo la tele un rato : je regarde la télé un moment",
        "Me acuesto a las diez y media : je me couche à dix heures et demie",
      ],
      voixOff:
        "Après l'école, vuelvo a casa y hago los deberes, je rentre à la maison et je fais mes devoirs. Ceno a las nueve, je dîne à neuf heures. Ensuite, veo la tele un rato, je regarde la télé un moment. Et enfin, me acuesto a las diez y media, je me couche à dix heures et demie : acostarse suit la même diphtongue o>ue que dormir !",
    },
    {
      titre: "Les expressions de fréquence",
      illustration: "🔂",
      visuel: "Siempre, normalmente, a veces",
      contenu: [
        "Siempre : toujours — Normalmente : normalement",
        "A veces : parfois — Nunca : jamais",
        "Todos los días : tous les jours",
        "Siempre me levanto temprano : je me lève toujours tôt",
      ],
      voixOff:
        "Pour préciser à quelle fréquence on fait quelque chose, on utilise des adverbes. Siempre, toujours, normalmente, normalement, a veces, parfois, et nunca, jamais. On dit aussi todos los días, tous les jours. Par exemple, siempre me levanto temprano, je me lève toujours tôt. Ces mots se placent en général avant le verbe conjugué.",
    },
    {
      titre: "Organiser sa journée : antes, después, luego",
      illustration: "⏭️",
      visuel: "Antes de… / Después de…",
      contenu: [
        "Antes de desayunar, me ducho : avant de prendre le petit-déjeuner, je me douche",
        "Después de cenar, veo la tele : après avoir dîné, je regarde la télé",
        "Luego, primero, finalmente : ensuite, d'abord, enfin",
        "Ces mots relient les actions entre elles dans un récit",
      ],
      voixOff:
        "Pour raconter une journée dans l'ordre, on utilise des connecteurs. Antes de suivi d'un infinitif signifie avant de : antes de desayunar, me ducho, avant de prendre le petit-déjeuner, je me douche. Después de signifie après : después de cenar, veo la tele. On ajoute aussi primero, d'abord, luego, ensuite, et finalmente, enfin, pour bien structurer son récit.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 me/te/se + verbe + diphtongues",
      contenu: [
        "Verbes pronominaux : me, te, se, nos, os, se + verbe conjugué",
        "e>ie (empezar→empiezo) et o>ue (poder→puedo), sauf nosotros/vosotros",
        "Fréquence : siempre, normalmente, a veces, nunca, todos los días",
        "Connecteurs : antes de + infinitif, después de + infinitif, luego, primero",
      ],
      voixOff:
        "Résumons. Les verbes pronominaux comme levantarse ou acostarse se construisent avec un pronom réfléchi devant le verbe conjugué : me, te, se, nos, os, se. Les verbes à diphtongue transforment une voyelle, e en ie comme empezar, ou o en ue comme poder, sauf avec nosotros et vosotros. Pour parler de fréquence, utilise siempre, normalmente, a veces, nunca. Et pour structurer ton récit, emploie antes de et después de suivis d'un infinitif, ainsi que luego et primero !",
    },
  ],
  fiche: {
    intro:
      "Décrire sa routine quotidienne demande de maîtriser les verbes pronominaux (levantarse, ducharse), les verbes à diphtongue (empezar, poder) et des connecteurs de temps pour structurer le récit d'une journée.",
    sections: [
      {
        titre: "Les verbes pronominaux",
        points: [
          "Pronoms réfléchis : me, te, se, nos, os, se, placés devant le verbe",
          "Levantarse : me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan",
          "Ducharse, vestirse, acostarse suivent la même construction",
        ],
      },
      {
        titre: "Les verbes à diphtongue",
        points: [
          "e>ie : empezar → empiezo, empiezas, empieza… (querer, preferir)",
          "o>ue : poder → puedo, puedes, puede… (dormir, volver, almorzar)",
          "Le changement disparaît avec nosotros et vosotros",
        ],
      },
      {
        titre: "Exprimer la fréquence",
        points: [
          "Siempre (toujours), normalmente (normalement), a veces (parfois), nunca (jamais)",
          "Todos los días : tous les jours",
          "Ces adverbes se placent généralement avant le verbe",
        ],
      },
      {
        titre: "Structurer un récit",
        points: [
          "Antes de + infinitif : avant de… — Después de + infinitif : après avoir…",
          "Primero, luego, finalmente : d'abord, ensuite, enfin",
          "Permettent d'ordonner les actions d'une journée",
        ],
      },
    ],
    audio:
      "Fiche de révision : la routine quotidienne en espagnol. Les verbes pronominaux comme levantarse, se lever, se construisent avec un pronom réfléchi devant le verbe : me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Ducharse, vestirse et acostarse suivent la même logique. Certains verbes changent une voyelle au présent : empezar devient empiezo avec un e qui se change en ie, et poder devient puedo avec un o qui se change en ue, sauf pour nosotros et vosotros qui gardent la forme normale. Pour exprimer la fréquence, on utilise siempre, normalmente, a veces, nunca et todos los días. Enfin, pour structurer un récit, on emploie antes de et después de suivis d'un infinitif, ainsi que primero, luego et finalmente.",
  },
  memoCards: [
    { recto: "Levantarse : me levanto, te levantas, se levanta…", verso: "Se lever (verbe pronominal, présent)." },
    { recto: "Ducharse / Vestirse / Acostarse", verso: "Se doucher / s'habiller / se coucher (verbes pronominaux)." },
    { recto: "Empezar (e>ie) : empiezo, empiezas, empieza…", verso: "Commencer (diphtongue e>ie, sauf nosotros/vosotros)." },
    { recto: "Poder (o>ue) : puedo, puedes, puede…", verso: "Pouvoir (diphtongue o>ue, sauf nosotros/vosotros)." },
    { recto: "Siempre / Normalmente / A veces / Nunca", verso: "Toujours / normalement / parfois / jamais." },
    { recto: "Antes de + infinitif", verso: "Avant de… Ex : Antes de cenar, hago los deberes." },
    { recto: "Después de + infinitif", verso: "Après avoir… Ex : Después de desayunar, voy al instituto." },
    { recto: "Primero, luego, finalmente", verso: "D'abord, ensuite, enfin (connecteurs de récit)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « je me lève » ?",
      choix: ["Levanto", "Me levanto", "Te levantas", "Se levanta"],
      bonneReponse: 1,
      explication: "Me levanto : pronom me + verbe conjugué à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel pronom correspond à « tú » devant un verbe pronominal ?",
      choix: ["me", "te", "se", "nos"],
      bonneReponse: 1,
      explication: "Te correspond à la deuxième personne du singulier : te levantas.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « Je me douche à sept heures. »",
      reponse: "Me ducho a las siete.",
      explication: "Ducharse : me ducho à la première personne du singulier.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « toujours » en espagnol ?",
      choix: ["nunca", "a veces", "siempre", "luego"],
      bonneReponse: 2,
      explication: "Siempre signifie toujours.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « empezar » avec « nosotros » ?",
      choix: ["empiezo", "empezamos", "empiezan", "empiezas"],
      bonneReponse: 1,
      explication: "Avec nosotros, la diphtongue disparaît : empezamos, pas empiezamos.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « poder » avec « yo » et « ellos », puis traduis « je peux dormir huit heures ».",
      reponse: "Yo puedo, ellos pueden. Puedo dormir ocho horas.",
      explication: "Poder est un verbe à diphtongue o>ue, sauf nosotros/vosotros.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Après avoir dîné, je regarde la télé, puis je me couche. »",
      reponse: "Después de cenar, veo la tele, luego me acuesto.",
      explication: "Después de + infinitif, puis luego pour enchaîner les actions.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement un verbe pronominal ?",
      choix: ["Yo levanto a las siete", "Yo me levanto a las siete", "Yo levanta a las siete", "Levanto me a las siete"],
      bonneReponse: 1,
      explication: "Le pronom me doit précéder le verbe conjugué : me levanto.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris ta routine du matin en 4 phrases, en utilisant au moins deux verbes pronominaux et un connecteur (antes de/después de).",
      reponse:
        "Me despierto a las siete. Antes de desayunar, me ducho y me visto. Después de desayunar, voy al instituto. Normalmente llego a las ocho.",
      explication: "Le texte combine verbes pronominaux, connecteur et fréquence.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Vuelvo a casa a las cinco », de quel infinitif vient « vuelvo » et quelle diphtongue observe-t-on ?",
      choix: [
        "Volar, diphtongue e>ie",
        "Volver, diphtongue o>ue",
        "Ver, pas de diphtongue",
        "Vivir, diphtongue e>i"
      ],
      bonneReponse: 1,
      explication: "Volver (revenir/rentrer) suit la diphtongue o>ue : vuelvo, vuelves, vuelve…",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on dit « empezamos » (sans diphtongue) mais « empiezo » (avec diphtongue), pour le même verbe empezar.",
      reponse: "La diphtongue e>ie apparaît uniquement quand la syllabe est accentuée (empiezo), mais disparaît avec nosotros et vosotros car l'accent tombe sur la terminaison (empezamos).",
      explication: "C'est la règle générale des verbes à diphtongue en espagnol.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un court récit (5 phrases) de ta journée type, du réveil au coucher, en utilisant primero, luego et finalmente.",
      reponse:
        "Primero, me despierto a las siete y me ducho. Luego desayuno y voy al instituto. Por la tarde hago los deberes y ceno a las nueve. Luego veo la tele un rato. Finalmente, me acuesto a las diez y media.",
      explication: "Le récit utilise les connecteurs pour organiser chronologiquement la journée.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « je m'habille » ?",
      choix: ["Visto", "Me visto", "Te vistes", "Se viste"],
      bonneReponse: 1,
      explication: "Vestirse : me visto à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Nunca » signifie :",
      choix: ["Toujours", "Parfois", "Jamais", "Souvent"],
      bonneReponse: 2,
      explication: "Nunca signifie jamais.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Nous dormons huit heures tous les jours. »",
      reponse: "Dormimos ocho horas todos los días.",
      explication: "Avec nosotros, dormir garde sa forme normale : dormimos (pas duermimos).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète : « __ de desayunar, me lavo los dientes. » (avant de)",
      reponse: "Después de desayunar, me lavo los dientes.",
      explication: "Después de + infinitif signifie après avoir/après.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Raconte en 3 phrases ta soirée type, avec un verbe pronominal, un verbe à diphtongue et un adverbe de fréquence.",
      reponse: "Normalmente ceno a las nueve. Después, puedo ver la tele un rato. Siempre me acuesto a las diez.",
      explication: "Le texte combine les trois notions du chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La routine quotidienne",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « il se couche » ?",
          choix: ["Se acuesta", "Me acuesto", "Te acuestas", "Acuesta"],
          bonneReponse: 0,
          explication: "Se acuesta correspond à él/ella se couche.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« A veces » signifie :",
          choix: ["Toujours", "Parfois", "Jamais", "Tous les jours"],
          bonneReponse: 1,
          explication: "A veces signifie parfois.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Le matin, je me réveille, je me douche et je m'habille rapidement. »",
          reponse: "Por la mañana, me despierto, me ducho y me visto rápidamente.",
          explication: "Trois verbes pronominaux enchaînés avec le même sujet.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « querer » (e>ie) avec « tú » et « vosotros », et traduis « tu veux dormir ».",
          reponse: "Tú quieres, vosotros queréis. Quieres dormir.",
          explication: "Querer suit la diphtongue e>ie sauf pour nosotros/vosotros.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un récit complet de ta journée (6 phrases minimum), du réveil au coucher, avec verbes pronominaux, un verbe à diphtongue et deux connecteurs.",
          reponse:
            "Primero, me despierto a las siete. Antes de desayunar, me ducho. Luego voy al instituto, donde las clases empiezan a las ocho y media. Por la tarde vuelvo a casa y hago los deberes. Después de cenar, veo la tele. Finalmente, me acuesto a las diez.",
          explication: "Le texte combine tous les éléments grammaticaux du chapitre de façon cohérente.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi le pronom réfléchi change-t-il de place selon la personne dans « nos levantamos » ?",
          choix: [
            "Il ne change pas de place, il s'agit seulement du pronom qui change (nos = nous)",
            "Nos se place toujours après le verbe",
            "C'est une exception grammaticale rare",
            "Nos remplace toujours te"
          ],
          bonneReponse: 0,
          explication: "Le pronom réfléchi reste devant le verbe conjugué, seule sa forme change selon la personne (me, te, se, nos, os, se).",
        },
      ],
    },
    {
      titre: "Examen 2 — La routine quotidienne",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « nous nous levons » ?",
          choix: ["Nos levantamos", "Me levanto", "Os levantáis", "Se levantan"],
          bonneReponse: 0,
          explication: "Nos levantamos correspond à nosotros.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Todos los días » signifie :",
          choix: ["Jamais", "Parfois", "Tous les jours", "Le week-end"],
          bonneReponse: 2,
          explication: "Todos los días signifie tous les jours.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Normalement, je peux dormir neuf heures le week-end. »",
          reponse: "Normalmente, puedo dormir nueve horas el fin de semana.",
          explication: "Poder suit la diphtongue o>ue : puedo.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande à quelle heure tu te couches. Réponds en utilisant acostarse et un adverbe de fréquence.",
          reponse: "Normalmente me acuesto a las diez y media.",
          explication: "Acostarse suit aussi la diphtongue o>ue : me acuesto.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare les verbes pronominaux et les verbes à diphtongue : donne un exemple de chaque et explique la différence entre les deux notions.",
          reponse:
            "Un verbe pronominal (levantarse : me levanto) se construit avec un pronom réfléchi car l'action porte sur le sujet lui-même. Un verbe à diphtongue (poder : puedo) change une voyelle de son radical selon la personne, mais n'a pas forcément de pronom réfléchi. Certains verbes cumulent les deux, comme acostarse (me acuesto).",
          explication: "Les deux notions sont indépendantes mais peuvent se combiner dans un même verbe.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle phrase illustre correctement un verbe pronominal ET une diphtongue en même temps ?",
          choix: [
            "Estudio matemáticas",
            "Me acuesto a las diez",
            "Vivo en Francia",
            "Escribo una carta"
          ],
          bonneReponse: 1,
          explication: "Acostarse est à la fois pronominal (me) et à diphtongue o>ue (acuesto).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Verbes pronominaux : pronom réfléchi (me, te, se, nos, os, se) devant le verbe conjugué.",
    "Diphtongue e>ie (empezar→empiezo) et o>ue (poder→puedo), sauf pour nosotros/vosotros.",
    "Fréquence : siempre, normalmente, a veces, nunca, todos los días.",
    "Connecteurs de récit : antes de/después de + infinitif, primero, luego, finalmente.",
    "Une journée type se raconte au présent, en enchaînant verbes pronominaux et connecteurs.",
    "Certains verbes cumulent pronom réfléchi ET diphtongue : acostarse → me acuesto.",
  ],
};

export default chapitre;
