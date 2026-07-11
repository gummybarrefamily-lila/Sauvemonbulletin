import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "alfabeto-pronunciacion",
  titre: "L'alphabet et la prononciation",
  matiere: "espagnol",
  niveau: "5eme",
  langueVoix: "es-ES",
  description:
    "Découvrir l'alphabet espagnol, ses lettres particulières (ñ, ll, rr) et les règles de prononciation de base pour bien lire et bien parler dès les premiers mots.",
  objectifs: [
    "Connaître les 27 lettres de l'alphabet espagnol et la lettre ñ",
    "Prononcer correctement j, g, h, ll, ñ et rr",
    "Comprendre l'accent tonique et les accents écrits (á é í ó ú)",
    "Utiliser les points d'exclamation et d'interrogation inversés (¿ ¡)",
    "Épeler son prénom et des mots simples en espagnol",
  ],
  slides: [
    {
      titre: "El alfabeto español",
      illustration: "🔤",
      visuel: "a b c ch d e f g h i j k l ll m n ñ o p...",
      contenu: [
        "27 lettres : comme le français, plus la ñ (eñe)",
        "Toutes les lettres se prononcent, il n'y a pas de lettres muettes comme en français",
        "L'espagnol s'écrit presque comme il se prononce : très régulier !",
        "ch et ll existaient autrefois comme lettres à part entière",
      ],
      voixOff:
        "L'alphabet espagnol ressemble beaucoup au français, mais il compte une lettre en plus : la ñ, qu'on appelle eñe. La grande différence, c'est que l'espagnol se prononce presque toujours comme il s'écrit : pas de lettres muettes surprises ! C'est une langue très régulière, ce qui va beaucoup t'aider pour apprendre à lire et à écrire.",
    },
    {
      titre: "La lettre ñ",
      illustration: "🌶️",
      visuel: "ñ = gn français",
      contenu: [
        "ñ se prononce comme le « gn » français de montagne",
        "España (Espagne), niño (enfant), mañana (demain/matin)",
        "Sans le petit accent (tilde), n et ñ sont deux lettres différentes",
        "año (année) ≠ ano (anus) : l'accent change tout le sens !",
      ],
      voixOff:
        "La ñ se prononce comme le gn de montagne en français. On la trouve dans des mots très courants : España, l'Espagne, niño, un enfant, ou mañana, qui veut dire demain ou le matin selon le contexte. Attention, ñ et n sont deux lettres bien différentes : oublier le petit accent au-dessus, appelé tilde, peut complètement changer le sens d'un mot !",
    },
    {
      titre: "J, G, H : les sons qui surprennent",
      illustration: "🗣️",
      visuel: "jota, gente, hola",
      contenu: [
        "j se prononce comme un « r » raclé au fond de la gorge : jamón, joven",
        "g devant e/i se prononce comme j : gente, gimnasio",
        "g devant a/o/u se prononce comme le g français : gato, amigo",
        "h ne se prononce jamais : hola, hermano",
      ],
      voixOff:
        "Le j espagnol est un son rauque, raclé au fond de la gorge, comme dans jamón, le jambon. Attention, le g devant un e ou un i se prononce exactement pareil : gente, les gens, ou gimnasio, le gymnase. Mais devant a, o ou u, le g garde son son français classique, comme dans gato, chat. Enfin, la lettre h ne se prononce jamais : hola se dit « ola », sans souffler le h !",
    },
    {
      titre: "LL et RR : les doubles lettres",
      illustration: "🔊",
      visuel: "ll = y / rr roulé",
      contenu: [
        "ll se prononce comme le « y » de yaourt : llamo, calle, pollo",
        "r simple entre deux voyelles : légèrement roulé, pero",
        "rr toujours très roulé : perro, guitarra",
        "r en début de mot : aussi très roulé, comme rr",
      ],
      voixOff:
        "La double L, ll, se prononce comme le y de yaourt : me llamo se dit « me yamo ». Le r simple est légèrement roulé entre deux voyelles, comme dans pero, mais. Le rr double, lui, doit être roulé fort, comme dans perro, le chien, ou guitarra. Et attention, un r tout seul au début d'un mot se roule aussi très fort, comme s'il y avait deux r !",
    },
    {
      titre: "Les accents écrits",
      illustration: "✍️",
      visuel: "á é í ó ú",
      contenu: [
        "L'accent (tilde) indique la syllabe sur laquelle on insiste",
        "Sin accent : la règle générale s'applique (avant-dernière ou dernière syllabe)",
        "Avec accent : música, teléfono, está, así",
        "Un accent peut changer le sens : sí (oui) / si (si, condition)",
      ],
      voixOff:
        "En espagnol, un petit accent sur une voyelle, appelé tilde, indique où l'on doit insister en parlant. Sans accent, on suit une règle générale automatique. Mais des mots comme música, teléfono, ou está portent un accent qui casse cette règle. Parfois, l'accent change même le sens du mot : sí avec accent veut dire oui, si sans accent veut dire si, comme dans une condition !",
    },
    {
      titre: "¿ et ¡ : la ponctuation inversée",
      illustration: "❓",
      visuel: "¿Qué tal? ¡Hola!",
      contenu: [
        "L'espagnol place un ¿ ou un ¡ AU DÉBUT de la phrase, en plus du signe final",
        "¿Cómo te llamas? : signale dès le début que c'est une question",
        "¡Qué bien! : signale dès le début que c'est une exclamation",
        "C'est une particularité unique de l'espagnol parmi les grandes langues européennes",
      ],
      voixOff:
        "Une particularité très visible de l'espagnol : on place un point d'interrogation ou d'exclamation inversé au tout début de la phrase, en plus de celui de la fin. ¿Cómo te llamas ? commence par ¿ pour prévenir immédiatement le lecteur qu'une question arrive. De même, ¡Qué bien ! commence par ¡. Cette règle n'existe dans aucune autre grande langue européenne : pense bien à l'appliquer à l'écrit !",
    },
    {
      titre: "S'entraîner à épeler",
      illustration: "🔡",
      visuel: "L-É-A : ele, e, a",
      contenu: [
        "¿Cómo se escribe tu nombre? : comment s'écrit ton prénom ?",
        "Se escribe… : ça s'écrit…",
        "On épelle lettre par lettre en utilisant le nom espagnol de chaque lettre",
        "Utile pour donner son nom au téléphone ou à l'écrit",
      ],
      voixOff:
        "Savoir épeler est très utile en espagnol, par exemple au téléphone. On demande ¿cómo se escribe tu nombre ?, comment s'écrit ton prénom, et on répond se escribe suivi des lettres une par une, avec leur nom espagnol. C'est un excellent exercice pour mémoriser l'alphabet et sa prononciation !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 ñ, j/g, ll, rr, accents, ¿ ¡",
      contenu: [
        "ñ = gn français — j et g(e/i) = son raclé — h ne se prononce jamais",
        "ll = y — rr et r initial = roulés fortement",
        "L'accent écrit (tilde) indique la syllabe accentuée : música, está",
        "¿ et ¡ se placent au début ET à la fin des questions/exclamations",
      ],
      voixOff:
        "Résumons les points essentiels. La ñ se prononce comme le gn français, le j et le g devant e ou i font un son raclé, et le h ne se prononce jamais. Le ll se prononce y, et le rr, ainsi que le r en début de mot, se roulent fortement. L'accent écrit, la tilde, indique la syllabe accentuée quand elle sort de la règle générale. Enfin, n'oublie jamais de placer ¿ et ¡ au début des questions et des exclamations, en plus du signe final !",
    },
  ],
  fiche: {
    intro:
      "L'alphabet espagnol compte 27 lettres, dont la ñ. La langue se prononce presque comme elle s'écrit, avec quelques sons particuliers (j, ll, rr) et une ponctuation inversée unique en Europe.",
    sections: [
      {
        titre: "Les lettres particulières",
        points: [
          "ñ (eñe) : se prononce comme le gn français — España, niño",
          "h : ne se prononce jamais — hola, hermano",
          "j et g(e/i) : son raclé au fond de la gorge — jamón, gente",
        ],
      },
      {
        titre: "Les doubles lettres et le r",
        points: [
          "ll : se prononce comme le y de yaourt — llamo, calle",
          "rr : toujours très roulé — perro, guitarra",
          "r en début de mot : roulé fortement, comme rr",
        ],
      },
      {
        titre: "Les accents écrits",
        points: [
          "La tilde (á é í ó ú) indique la syllabe accentuée quand elle sort de la règle générale",
          "Exemples : música, teléfono, está, así",
          "Un accent peut changer le sens : sí (oui) / si (si, condition)",
        ],
      },
      {
        titre: "La ponctuation inversée",
        points: [
          "¿ au début et ? à la fin des questions : ¿Cómo te llamas?",
          "¡ au début et ! à la fin des exclamations : ¡Qué bien!",
          "Cette règle est unique à l'espagnol parmi les grandes langues européennes",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'alphabet et la prononciation espagnole. L'alphabet compte 27 lettres, dont la ñ, qui se prononce comme le gn français. La lettre h ne se prononce jamais, et le j, ainsi que le g devant e ou i, produisent un son raclé au fond de la gorge. La double L, ll, se prononce comme le y de yaourt, tandis que le rr, et le r en début de mot, doivent être roulés fortement. L'accent écrit, la tilde, indique la syllabe sur laquelle on insiste quand elle sort de la règle générale, comme dans música ou teléfono. Enfin, n'oublie jamais la ponctuation inversée : ¿ et ¡ se placent au début des questions et des exclamations, en plus du signe final.",
  },
  memoCards: [
    { recto: "ñ (eñe)", verso: "Se prononce comme le « gn » français. Ex : España, niño." },
    { recto: "h", verso: "Ne se prononce jamais. Ex : hola se dit « ola »." },
    { recto: "j / g(e,i)", verso: "Son raclé au fond de la gorge. Ex : jamón, gente." },
    { recto: "ll", verso: "Se prononce comme le « y » de yaourt. Ex : me llamo, calle." },
    { recto: "rr / r initial", verso: "Toujours très roulé. Ex : perro, guitarra, rojo." },
    { recto: "á é í ó ú (tilde)", verso: "Indique la syllabe accentuée. Ex : música, está." },
    { recto: "¿ … ? / ¡ … !", verso: "Ponctuation inversée au début ET à la fin. Ex : ¿Qué tal?" },
    { recto: "sí / si", verso: "sí (avec accent) = oui ; si (sans accent) = si (condition)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de lettres compte l'alphabet espagnol ?",
      choix: ["26", "27", "28", "25"],
      bonneReponse: 1,
      explication: "L'alphabet espagnol compte 27 lettres, dont la ñ en plus de l'alphabet français.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se prononce la ñ ?",
      choix: ["Comme un n normal", "Comme le gn français", "Comme un m", "Elle est muette"],
      bonneReponse: 1,
      explication: "La ñ se prononce comme le gn français de montagne.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "La lettre h se prononce-t-elle en espagnol ? Donne un exemple.",
      reponse: "Non, la h ne se prononce jamais. Exemple : hola se prononce « ola ».",
      explication: "Le h espagnol est toujours muet, contrairement à certains h en anglais.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se prononce le ll dans « me llamo » ?",
      choix: ["Comme un l normal", "Comme un l double", "Comme un y", "Il est muet"],
      bonneReponse: 2,
      explication: "Le ll se prononce comme le y de yaourt : « me yamo ».",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel mot contient un son « j » raclé au fond de la gorge ?",
      choix: ["gato", "jamón", "amigo", "gustar"],
      bonneReponse: 1,
      explication: "Dans jamón, le j se prononce comme un r raclé. Dans gato et amigo, le g est doux car suivi de a/o.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence de prononciation entre le g de « gato » et le g de « gente ».",
      reponse: "Devant a/o/u (gato), le g se prononce comme en français. Devant e/i (gente), le g se prononce comme un j raclé.",
      explication: "La prononciation du g dépend de la voyelle qui suit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre un r simple et un rr en espagnol, avec un exemple pour chacun.",
      reponse: "Le r simple entre voyelles est légèrement roulé (pero, mais). Le rr est toujours très roulé (perro, chien).",
      explication: "Pero et perro ont un sens complètement différent selon la prononciation du r.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que signifie « sí » avec un accent, comparé à « si » sans accent ?",
      choix: ["Les deux veulent dire la même chose", "sí = oui, si = si (condition)", "sí = non, si = oui", "sí = si, si = oui"],
      bonneReponse: 1,
      explication: "L'accent écrit distingue sí (oui) de si (condition, comme « si tu veux »).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris une phrase espagnole utilisant correctement les points d'interrogation ET d'exclamation inversés.",
      reponse: "¿Cómo te llamas? ¡Qué bien te veo hoy!",
      explication: "¿ et ¡ se placent au début de chaque phrase interrogative ou exclamative, en plus du signe final.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi « música » porte-t-elle un accent écrit sur le u ?",
      choix: [
        "Pour faire joli",
        "Parce que l'accent tonique tombe sur une syllabe qui sort de la règle générale de prononciation",
        "Parce que tous les mots de trois syllabes ont un accent",
        "Il n'y a pas de raison particulière"
      ],
      bonneReponse: 1,
      explication: "L'accent écrit signale que l'accent tonique ne tombe pas là où la règle générale le prévoirait.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Épelle le mot « España » en utilisant les noms espagnols des lettres (tu peux écrire les noms en français phonétique).",
      reponse: "E - eñe - P - A - Ñ (eñe) - A : « e, pe, a, eñe, a » (la ñ se dit « eñe »).",
      explication: "Épeler en espagnol demande de connaître le nom de chaque lettre, notamment la ñ qui s'appelle « eñe ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Trouve trois mots espagnols contenant chacun un son différent parmi : ñ, ll, rr, et explique brièvement leur prononciation.",
      reponse:
        "Niño (ñ = gn français), calle (ll = y), guitarra (rr = roulé fortement).",
      explication: "Ces trois sons n'ont pas d'équivalent exact en français, sauf la ñ qui ressemble au gn.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle lettre n'existe pas dans l'alphabet français ?",
      choix: ["h", "j", "ñ", "z"],
      bonneReponse: 2,
      explication: "La ñ est spécifique à l'espagnol.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel signe place-t-on au début d'une question en espagnol ?",
      choix: ["!", "¿", "¡", ":"],
      bonneReponse: 1,
      explication: "¿ ouvre une phrase interrogative, en plus du ? final.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment prononce-t-on « guitarra » ? Décris le son du rr.",
      reponse: "Guitarra se prononce avec un r très roulé au niveau du rr : « guita-RRa ».",
      explication: "Le rr est toujours fortement roulé, quelle que soit sa position dans le mot.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi écrit-on « ¡Hola!» avec deux points d'exclamation ?",
      reponse: "Parce qu'en espagnol, on place un signe inversé (¡) au début et le signe normal (!) à la fin de toute exclamation.",
      explication: "C'est une règle systématique de la ponctuation espagnole.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige deux phrases : une question et une exclamation, avec la ponctuation espagnole correcte.",
      reponse: "¿Dónde vives? ¡Qué buena pregunta!",
      explication: "Chaque phrase doit avoir son signe inversé au début et son signe normal à la fin.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Alphabet et prononciation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment s'appelle la lettre ñ en espagnol ?",
          choix: ["ene", "eñe", "elle", "ere"],
          bonneReponse: 1,
          explication: "La lettre ñ s'appelle « eñe » en espagnol.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le mot « hermano » (frère) se prononce en faisant entendre le h ?",
          choix: ["Oui, toujours", "Non, le h est muet", "Seulement au pluriel", "Seulement à l'écrit"],
          bonneReponse: 1,
          explication: "Le h espagnol ne se prononce jamais, quel que soit le mot.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi « pero » et « perro » n'ont pas le même sens, en te concentrant sur la prononciation.",
          reponse: "Pero (r simple, légèrement roulé) signifie « mais » ; perro (rr, très roulé) signifie « chien ». Seule la force du roulement du r change.",
          explication: "C'est un exemple classique de paire minimale liée à la prononciation du r.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis et ponctue correctement : « Comment tu t'appelles ? »",
          reponse: "¿Cómo te llamas?",
          explication: "N'oublie pas le ¿ au début et le ? à la fin.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique la règle de prononciation du g en espagnol selon la voyelle qui suit, avec deux exemples.",
          reponse: "Devant a/o/u, le g se prononce comme en français (gato, amigo). Devant e/i, le g se prononce comme un j raclé (gente, gimnasio).",
          explication: "Cette règle est très régulière et s'applique à tous les mots espagnols.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quel est le rôle de la tilde (accent écrit) sur des mots comme « música » ou « está » ?",
          choix: [
            "Elle n'a aucun rôle",
            "Elle indique la syllabe sur laquelle porte l'accent tonique",
            "Elle indique le pluriel",
            "Elle transforme le nom en verbe"
          ],
          bonneReponse: 1,
          explication: "La tilde signale la syllabe accentuée quand elle ne suit pas la règle générale.",
        },
      ],
    },
    {
      titre: "Examen 2 — Alphabet et prononciation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment se prononce le ll dans « calle » (rue) ?",
          choix: ["Comme un l", "Comme un y", "Comme un j français", "Il est muet"],
          bonneReponse: 1,
          explication: "Le ll se prononce comme le y de yaourt : « caye ».",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel signe place-t-on au début d'une exclamation espagnole ?",
          choix: ["¿", "¡", "?", ":"],
          bonneReponse: 1,
          explication: "¡ ouvre une phrase exclamative, en plus du ! final.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne un exemple de mot où sí et si ont un sens différent selon l'accent, et explique.",
          reponse: "Sí (oui, avec accent) : « Sí, quiero ». Si (condition, sans accent) : « Si quieres, vamos ». L'accent distingue les deux mots.",
          explication: "L'accent écrit permet de différencier des mots qui se prononcent presque pareil.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami écrit « Como estas » sans accents ni ponctuation inversée. Corrige sa phrase.",
          reponse: "¿Cómo estás?",
          explication: "Il faut ajouter l'accent sur cómo et estás, ainsi que le ¿ au début et le ? à la fin.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare la prononciation du r dans « pero », « perro » et au début du mot « rojo ». Que remarques-tu ?",
          reponse: "Pero : r simple, léger. Perro : rr, très roulé. Rojo : r initial, aussi très roulé, comme s'il y avait un rr.",
          explication: "Le r en début de mot se comporte comme un rr, même s'il n'est écrit qu'une seule fois.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle affirmation est vraie sur la ponctuation espagnole ?",
          choix: [
            "Elle est identique au français",
            "Elle place un signe inversé au début des questions et exclamations, en plus du signe final",
            "Elle n'utilise jamais de points d'interrogation",
            "Le signe inversé remplace le signe final"
          ],
          bonneReponse: 1,
          explication: "L'espagnol utilise systématiquement un signe inversé au début ET le signe normal à la fin.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'alphabet espagnol compte 27 lettres avec la ñ, qui se prononce comme le gn français.",
    "h est toujours muet ; j et g(e/i) produisent un son raclé ; g(a/o/u) se prononce comme en français.",
    "ll se prononce y ; rr et r initial se roulent fortement ; r entre voyelles se roule légèrement.",
    "La tilde (á é í ó ú) indique la syllabe accentuée et peut changer le sens d'un mot (sí/si).",
    "¿ et ¡ se placent toujours au début des questions et exclamations, en plus du signe final.",
    "L'espagnol se lit presque toujours comme il s'écrit : très peu de lettres muettes, sauf le h.",
  ],
};

export default chapitre;
