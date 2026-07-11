import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "subordonnees",
  titre: "Les propositions subordonnées",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Comprendre la phrase complexe : proposition principale et propositions subordonnées, relatives et conjonctives (complétives et circonstancielles), pour analyser et enrichir ses phrases.",
  objectifs: [
    "Distinguer proposition principale et proposition subordonnée",
    "Reconnaître la proposition subordonnée relative et les pronoms relatifs",
    "Reconnaître la proposition subordonnée conjonctive complétive",
    "Identifier les principales subordonnées circonstancielles (temps, cause, conséquence, but)",
    "Enrichir ses phrases en utilisant des propositions subordonnées variées",
  ],
  slides: [
    {
      titre: "Phrase simple, phrase complexe",
      illustration: "🧩",
      visuel: "1 verbe = simple / 2+ verbes = complexe",
      contenu: [
        "Une phrase simple contient un seul verbe conjugué (une seule proposition)",
        "Une phrase complexe contient plusieurs verbes conjugués (plusieurs propositions)",
        "Chaque proposition s'organise autour d'un verbe conjugué",
        "Dans une phrase complexe, les propositions sont reliées entre elles",
      ],
      voixOff:
        "Une phrase simple ne contient qu'un seul verbe conjugué : c'est une seule proposition. Une phrase complexe contient plusieurs verbes conjugués, donc plusieurs propositions. Chaque proposition s'organise autour de son propre verbe conjugué, et dans une phrase complexe, ces propositions sont reliées les unes aux autres.",
    },
    {
      titre: "Proposition principale et subordonnée",
      illustration: "🌳",
      visuel: "Principale = tronc / Subordonnée = branche",
      contenu: [
        "La proposition principale peut exister seule et a un sens complet",
        "La proposition subordonnée dépend de la principale : seule, elle n'a pas de sens complet",
        "La subordonnée est reliée à la principale par un mot subordonnant",
        "On peut comparer la principale au tronc d'un arbre, la subordonnée à une branche",
      ],
      voixOff:
        "Dans une phrase complexe, on distingue la proposition principale, qui pourrait exister seule et qui a un sens complet, et la proposition subordonnée, qui dépend de la principale et n'a pas de sens complet toute seule. La subordonnée est toujours reliée à la principale par un mot subordonnant : un pronom relatif ou une conjonction de subordination.",
    },
    {
      titre: "La proposition subordonnée relative",
      illustration: "🔗",
      visuel: "qui, que, dont, où, lequel",
      contenu: [
        "Introduite par un pronom relatif : qui, que, dont, où, lequel...",
        "Elle complète un nom ou un pronom appelé antécédent",
        "Fonction : complément de l'antécédent (épithète du nom)",
        "Exemple : « Le livre que je lis me passionne. »",
      ],
      voixOff:
        "La proposition subordonnée relative est introduite par un pronom relatif : qui, que, dont, où, lequel. Elle complète toujours un nom ou un pronom qu'on appelle l'antécédent. Dans la phrase le livre que je lis me passionne, que je lis est une subordonnée relative qui complète le nom livre, son antécédent.",
    },
    {
      titre: "Bien choisir son pronom relatif",
      illustration: "🎯",
      visuel: "qui=sujet / que=COD / dont=complément en DE / où=lieu-temps",
      contenu: [
        "« qui » remplace un sujet : « la fille qui chante »",
        "« que » remplace un COD : « la fille que je vois »",
        "« dont » remplace un complément introduit par « de » : « le livre dont je parle »",
        "« où » remplace un complément de lieu ou de temps : « la ville où je suis né »",
      ],
      voixOff:
        "Le choix du pronom relatif dépend de sa fonction dans la subordonnée. Qui remplace un sujet, comme dans la fille qui chante. Que remplace un complément d'objet direct, comme dans la fille que je vois. Dont remplace un complément introduit par la préposition de, comme dans le livre dont je parle. Où remplace un complément de lieu ou de temps, comme dans la ville où je suis né.",
    },
    {
      titre: "La proposition subordonnée conjonctive complétive",
      illustration: "💬",
      visuel: "verbe + que + proposition (COD)",
      contenu: [
        "Introduite par la conjonction « que »",
        "Elle est complément d'objet direct du verbe de la principale",
        "Verbes fréquents : penser, dire, croire, espérer, souhaiter, savoir...",
        "Exemple : « Je pense que tu as raison. »",
      ],
      voixOff:
        "La proposition subordonnée conjonctive complétive est introduite par la conjonction que. Elle occupe la fonction de complément d'objet direct du verbe de la principale. On la trouve après des verbes comme penser, dire, croire, espérer, souhaiter ou savoir. Par exemple, dans je pense que tu as raison, que tu as raison est complément d'objet direct de pense.",
    },
    {
      titre: "Les subordonnées circonstancielles de temps et de cause",
      illustration: "⏰",
      visuel: "quand/lorsque (temps) — parce que/car (cause)",
      contenu: [
        "Circonstancielle de temps : « quand », « lorsque », « pendant que », « dès que »",
        "Exemple : « Quand il pleut, je reste chez moi. »",
        "Circonstancielle de cause : « parce que », « puisque », « comme »",
        "Exemple : « Je reste chez moi parce qu'il pleut. »",
      ],
      voixOff:
        "Les propositions subordonnées circonstancielles complètent la phrase en indiquant les circonstances. La circonstancielle de temps, introduite par quand, lorsque ou dès que, précise le moment, comme dans quand il pleut, je reste chez moi. La circonstancielle de cause, introduite par parce que, puisque ou comme, explique la raison, comme dans je reste chez moi parce qu'il pleut.",
    },
    {
      titre: "Les subordonnées de conséquence et de but",
      illustration: "🎯",
      visuel: "si bien que (conséquence) — pour que (but)",
      contenu: [
        "Circonstancielle de conséquence : « si bien que », « de sorte que », « tellement... que »",
        "Exemple : « Il a tellement couru qu'il est épuisé. »",
        "Circonstancielle de but : « pour que », « afin que » + subjonctif",
        "Exemple : « Je révise pour que je réussisse mon contrôle. »",
      ],
      voixOff:
        "La subordonnée circonstancielle de conséquence, introduite par si bien que ou tellement que, indique un résultat, comme dans il a tellement couru qu'il est épuisé. La subordonnée circonstancielle de but, introduite par pour que ou afin que et suivie du subjonctif, indique un objectif, comme dans je révise pour que je réussisse mon contrôle.",
    },
    {
      titre: "Repérer et analyser une subordonnée",
      illustration: "🔍",
      visuel: "1. Trouver le verbe / 2. Trouver le mot subordonnant / 3. Nommer",
      contenu: [
        "1. Repérer tous les verbes conjugués : autant de propositions",
        "2. Identifier le mot qui introduit chaque subordonnée (pronom relatif ou conjonction)",
        "3. Déterminer le type de subordonnée et sa fonction",
        "4. Vérifier que la subordonnée ne peut pas être supprimée sans changer le sens",
      ],
      voixOff:
        "Pour analyser une phrase complexe, repère d'abord tous les verbes conjugués : chacun correspond à une proposition. Identifie ensuite le mot qui introduit chaque subordonnée, pronom relatif ou conjonction. Détermine alors le type de subordonnée, relative, complétive ou circonstancielle, et sa fonction dans la phrase.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Phrase complexe = plusieurs propositions ; principale = sens complet seule",
        "Relative (qui/que/dont/où) complète un nom : l'antécédent",
        "Complétive (« que ») = COD du verbe de la principale",
        "Circonstancielles : temps, cause, conséquence, but... précisent les circonstances",
      ],
      voixOff:
        "Pour résumer, une phrase complexe contient plusieurs propositions reliées entre elles. La proposition principale a un sens complet ; la subordonnée en dépend. La relative, introduite par qui, que, dont ou où, complète un nom, son antécédent. La complétive, introduite par que, est complément d'objet direct du verbe de la principale. Les circonstancielles, comme celles de temps, de cause, de conséquence ou de but, précisent les circonstances de l'action.",
    },
  ],
  fiche: {
    intro:
      "Une phrase complexe contient plusieurs propositions, organisées autour de plusieurs verbes conjugués. On y distingue la proposition principale, qui a un sens complet, et les propositions subordonnées, qui en dépendent : relatives, conjonctives complétives et circonstancielles.",
    sections: [
      {
        titre: "Phrase simple, phrase complexe, principale et subordonnée",
        points: [
          "Phrase simple : un seul verbe conjugué (une seule proposition)",
          "Phrase complexe : plusieurs verbes conjugués (plusieurs propositions)",
          "Proposition principale : sens complet, peut exister seule",
          "Proposition subordonnée : dépend de la principale, introduite par un mot subordonnant",
        ],
      },
      {
        titre: "La subordonnée relative",
        points: [
          "Introduite par un pronom relatif : qui, que, dont, où, lequel...",
          "Complète un nom ou un pronom : l'antécédent",
          "« qui » = sujet ; « que » = COD ; « dont » = complément en « de » ; « où » = lieu/temps",
        ],
      },
      {
        titre: "La subordonnée conjonctive complétive",
        points: [
          "Introduite par « que »",
          "Fonction : complément d'objet direct du verbe de la principale",
          "Après des verbes d'opinion, de déclaration, de sentiment : penser, dire, croire, espérer...",
        ],
      },
      {
        titre: "Les subordonnées circonstancielles",
        points: [
          "Temps : quand, lorsque, dès que, pendant que",
          "Cause : parce que, puisque, comme",
          "Conséquence : si bien que, de sorte que, tellement... que",
          "But : pour que, afin que (+ subjonctif)",
        ],
      },
    ],
    audio:
      "Fiche de révision : les propositions subordonnées. Une phrase complexe contient plusieurs verbes conjugués, donc plusieurs propositions. La proposition principale a un sens complet et pourrait exister seule ; la proposition subordonnée en dépend et est introduite par un mot subordonnant. La subordonnée relative est introduite par un pronom relatif, qui, que, dont ou où, et complète un nom appelé antécédent. La subordonnée conjonctive complétive est introduite par que et occupe la fonction de complément d'objet direct, après des verbes comme penser, dire ou croire. Les subordonnées circonstancielles précisent les circonstances de l'action : le temps avec quand ou lorsque, la cause avec parce que ou puisque, la conséquence avec si bien que, le but avec pour que suivi du subjonctif.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce qu'une phrase complexe ?",
      verso: "Une phrase contenant plusieurs verbes conjugués, donc plusieurs propositions reliées entre elles.",
    },
    {
      recto: "Différence entre principale et subordonnée ?",
      verso: "La principale a un sens complet et peut exister seule. La subordonnée en dépend et n'a pas de sens complet isolée.",
    },
    {
      recto: "Par quoi est introduite une subordonnée relative ?",
      verso: "Par un pronom relatif : qui, que, dont, où, lequel...",
    },
    {
      recto: "Quelle est la fonction de la subordonnée relative ?",
      verso: "Complément de l'antécédent (le nom ou pronom qu'elle complète).",
    },
    {
      recto: "Comment choisir entre qui et que ?",
      verso: "« qui » remplace un sujet ; « que » remplace un complément d'objet direct (COD).",
    },
    {
      recto: "Quelle est la fonction de la subordonnée conjonctive complétive ?",
      verso: "Complément d'objet direct (COD) du verbe de la proposition principale.",
    },
    {
      recto: "Cite trois conjonctions de subordination de cause.",
      verso: "Parce que, puisque, comme.",
    },
    {
      recto: "Quel mode suit « pour que » et « afin que » ?",
      verso: "Le subjonctif : « pour que je réussisse », « afin que tu comprennes ».",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de propositions contient une phrase complexe ?",
      choix: ["Une seule", "Deux ou plus", "Toujours trois", "Aucune"],
      bonneReponse: 1,
      explication: "Une phrase complexe contient plusieurs verbes conjugués, donc au moins deux propositions.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Le chat qui dort est noir », quelle est la proposition subordonnée ?",
      choix: ["Le chat", "qui dort", "est noir", "Le chat est noir"],
      bonneReponse: 1,
      explication: "« qui dort » est introduite par le pronom relatif « qui » et complète l'antécédent « chat ».",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un antécédent ?",
      reponse: "C'est le nom ou le pronom que complète une proposition subordonnée relative.",
      explication: "Par exemple, dans « le livre que je lis », « livre » est l'antécédent de la relative « que je lis ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle conjonction introduit une subordonnée conjonctive complétive ?",
      choix: ["qui", "que", "où", "dont"],
      bonneReponse: 1,
      explication: "La conjonction « que » introduit la subordonnée conjonctive complétive, COD du verbe principal.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « La ville où je suis né est petite », le mot « où » remplace :",
      choix: ["un sujet", "un COD", "un complément de lieu", "un attribut"],
      bonneReponse: 2,
      explication: "« où » reprend un complément de lieu (ou de temps) : ici, il remplace « dans cette ville ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète par « qui » ou « que » : « Le professeur ... explique la leçon » et « Le professeur ... j'écoute ».",
      reponse: "« Le professeur qui explique la leçon » (qui = sujet) et « Le professeur que j'écoute » (que = COD).",
      explication: "« qui » remplace le sujet du verbe subordonné ; « que » remplace son complément d'objet direct.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Identifie le type de subordonnée dans « Je pense que tu as raison » et donne sa fonction.",
      reponse: "« que tu as raison » est une proposition subordonnée conjonctive complétive, complément d'objet direct du verbe « pense ».",
      explication: "Après un verbe d'opinion comme « penser », la subordonnée introduite par « que » est très souvent COD.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Quand la cloche sonne, les élèves sortent. » Quel type de subordonnée est « Quand la cloche sonne » ?",
      choix: ["Relative", "Conjonctive complétive", "Circonstancielle de temps", "Circonstancielle de but"],
      bonneReponse: 2,
      explication: "« Quand » introduit une subordonnée circonstancielle de temps, qui précise le moment de l'action.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse la phrase suivante : « Le film dont tout le monde parle sort demain. » Précise la proposition principale, la subordonnée, son type et sa fonction.",
      reponse: "Principale : « Le film ... sort demain. » Subordonnée : « dont tout le monde parle », introduite par le pronom relatif « dont ». C'est une subordonnée relative, complément de l'antécédent « film » (on parle DU film).",
      explication: "« dont » remplace un complément introduit par « de » : « on parle du film ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Transforme ces deux phrases simples en une seule phrase complexe contenant une subordonnée de cause : « Je suis fatigué. J'ai mal dormi. »",
      reponse: "Exemple de corrigé : « Je suis fatigué parce que j'ai mal dormi. » (ou : « Comme j'ai mal dormi, je suis fatigué. »)",
      explication: "« parce que » et « comme » sont des conjonctions de subordination qui introduisent la cause.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris une phrase complexe contenant une subordonnée circonstancielle de but, introduite par « pour que », en veillant à employer le subjonctif.",
      reponse: "Exemple de corrigé : « Je parle doucement pour que tout le monde comprenne. »",
      explication: "Après « pour que », le verbe se met au subjonctif : « comprenne » et non « comprend ».",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Il a tellement crié qu'il n'a plus de voix », la subordonnée exprime :",
      choix: ["la cause", "le but", "la conséquence", "le temps"],
      bonneReponse: 2,
      explication: "« si... que »/« tellement... que » introduisent une subordonnée de conséquence : le résultat de l'intensité du cri.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une proposition subordonnée :",
      choix: ["a toujours un sens complet seule", "dépend d'une proposition principale", "ne contient jamais de verbe", "remplace toujours un nom propre"],
      bonneReponse: 1,
      explication: "Par définition, la subordonnée dépend de la principale et ne peut pas être isolée sans perdre son sens.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux pronoms relatifs qui introduisent une subordonnée relative.",
      reponse: "Par exemple : qui et que (ou dont, où, lequel).",
      explication: "Ces pronoms remplacent l'antécédent et introduisent la relative.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la fonction d'une subordonnée conjonctive complétive introduite par « que » après un verbe comme « dire » ?",
      reponse: "Elle est complément d'objet direct (COD) du verbe de la proposition principale.",
      explication: "Exemple : « Il dit qu'il viendra » — « qu'il viendra » est COD de « dit ».",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle conjonction introduit une subordonnée de but ?",
      choix: ["parce que", "pour que", "si bien que", "quand"],
      bonneReponse: 1,
      explication: "« pour que » (ou « afin que ») introduit le but et est suivi du subjonctif.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans la phrase « L'élève dont le cahier est propre est félicité », quelle fonction a « dont le cahier est propre » ?",
      reponse: "C'est une proposition subordonnée relative, complément de l'antécédent « élève » (le cahier DE l'élève).",
      explication: "« dont » remplace un complément introduit par « de » : « le cahier de cet élève ».",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les propositions subordonnées",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une phrase simple contient :",
          choix: ["un seul verbe conjugué", "plusieurs verbes conjugués", "aucun verbe", "toujours une subordonnée"],
          bonneReponse: 0,
          explication: "Par définition, une phrase simple ne comporte qu'une seule proposition, organisée autour d'un seul verbe conjugué.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui distingue la proposition principale de la proposition subordonnée ?",
          reponse: "La proposition principale a un sens complet et pourrait exister seule ; la proposition subordonnée dépend de la principale et n'a pas de sens complet isolée.",
          explication: "C'est la définition de base de la phrase complexe.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Le sac que j'ai acheté est rouge », « que » remplace :",
          choix: ["le sujet du verbe « acheté »", "le complément d'objet direct du verbe « acheté »", "un complément de lieu", "rien, ce n'est pas un pronom relatif"],
          bonneReponse: 1,
          explication: "« que » reprend « le sac » comme COD de « ai acheté » : j'ai acheté le sac.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Construis une phrase complexe avec une subordonnée relative introduite par « dont ».",
          reponse: "Exemple de corrigé : « Le livre dont je te parle est passionnant. »",
          explication: "« dont » doit remplacer un complément introduit par « de » : on vérifie « je te parle du livre ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Identifie et nomme le type de subordonnée : « Comme il pleuvait, nous sommes restés à la maison. »",
          reponse: "« Comme il pleuvait » est une proposition subordonnée circonstancielle de cause : elle explique la raison pour laquelle nous sommes restés à la maison.",
          explication: "« comme » en tête de phrase introduit fréquemment la cause.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige une phrase complexe contenant à la fois une subordonnée relative et une subordonnée conjonctive complétive.",
          reponse: "Exemple de corrigé : « Je pense que le film que nous avons vu hier était excellent. » (« que le film... était excellent » = complétive, COD de « pense » ; « que nous avons vu hier » = relative, complément de l'antécédent « film »).",
          explication: "On vérifie la présence des deux types de subordonnées et leur bon emploi.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les propositions subordonnées",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« qui » remplace toujours :",
          choix: ["un complément d'objet direct", "un sujet", "un complément de lieu", "un attribut du sujet"],
          bonneReponse: 1,
          explication: "Le pronom relatif « qui » a toujours la fonction de sujet dans la subordonnée relative.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne un exemple de conjonction introduisant une subordonnée circonstancielle de temps.",
          reponse: "Par exemple : quand, lorsque, dès que, pendant que.",
          explication: "Ces conjonctions situent l'action dans le temps par rapport à la principale.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Il travaille si bien qu'il réussira son examen. » Cette subordonnée exprime :",
          choix: ["la cause", "la conséquence", "le but", "le temps"],
          bonneReponse: 1,
          explication: "« si... que » introduit une subordonnée de conséquence : le résultat du fait de bien travailler.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi le verbe est-il au subjonctif après « pour que » ? Illustre avec un exemple.",
          reponse: "« pour que » introduit un but, une intention non encore réalisée, ce qui appelle le mode subjonctif, mode de l'incertitude et du souhait. Exemple : « Je range ma chambre pour que ma mère soit contente. »",
          explication: "Le but exprime une action visée, non un fait certain : d'où l'emploi du subjonctif.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme en une phrase complexe avec une subordonnée conjonctive complétive : « Il fait beau. Je le crois. »",
          reponse: "Exemple de corrigé : « Je crois qu'il fait beau. »",
          explication: "« qu'il fait beau » devient COD du verbe « crois », introduit par la conjonction « que ».",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade écrit : « La maison que j'habite dedans est grande. » Explique son erreur et corrige la phrase.",
          reponse: "Erreur : il utilise à la fois le pronom relatif « que » et la préposition « dedans », ce qui est redondant. Il faut choisir un seul mot subordonnant adapté au complément de lieu : « La maison où j'habite est grande. »",
          explication: "« où » remplace directement le complément de lieu ; il ne faut pas ajouter une préposition supplémentaire après.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Phrase complexe = plusieurs propositions (plusieurs verbes conjugués), reliées entre elles.",
    "Proposition principale : sens complet, peut exister seule. Proposition subordonnée : en dépend.",
    "Subordonnée relative : introduite par qui/que/dont/où, complète un nom (l'antécédent).",
    "qui = sujet ; que = COD ; dont = complément en « de » ; où = lieu ou temps.",
    "Subordonnée conjonctive complétive : introduite par « que », COD du verbe de la principale (après penser, dire, croire...).",
    "Subordonnées circonstancielles : temps (quand, lorsque), cause (parce que, puisque), conséquence (si bien que), but (pour que + subjonctif).",
  ],
};

export default chapitre;
