import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "fonctions-grammaticales",
  titre: "Les fonctions grammaticales",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Identifier la fonction d'un mot ou d'un groupe de mots dans la phrase : sujet, COD, COI, attribut du sujet, compléments circonstanciels, épithète, apposition et complément du nom, sans les confondre avec la classe grammaticale.",
  objectifs: [
    "Distinguer la fonction (rôle dans la phrase) de la classe grammaticale (nature du mot)",
    "Identifier le sujet grâce aux tests « qui est-ce qui/qu'est-ce qui » et « c'est... qui »",
    "Reconnaître le COD, le COI et l'attribut du sujet, et ne pas les confondre",
    "Repérer les compléments circonstanciels grâce à leur mobilité et leur suppressibilité",
    "Distinguer épithète, apposition et complément du nom",
  ],
  slides: [
    {
      titre: "Fonction et classe : deux questions différentes",
      illustration: "🎭",
      visuel: "Nature = carte d'identité / Fonction = rôle",
      contenu: [
        "La fonction dit ce que le mot FAIT dans la phrase",
        "La classe grammaticale (déjà étudiée) dit ce que le mot EST",
        "« Chat » est toujours un nom (classe), mais tantôt sujet, tantôt COD (fonction)",
        "Une même classe peut occuper plusieurs fonctions, selon la phrase",
      ],
      voixOff:
        "Dans ce chapitre, on ne demande plus ce qu'est un mot, mais ce qu'il fait dans la phrase : c'est sa fonction. Ne confonds pas fonction et classe grammaticale, que tu as déjà étudiée. Le mot chat, par exemple, est toujours un nom, c'est sa classe, mais il peut être sujet dans une phrase et complément d'objet direct dans une autre : c'est sa fonction, et elle change. Retiens bien cette différence, c'est la base de tout ce chapitre.",
    },
    {
      titre: "Le sujet : qui fait l'action ?",
      illustration: "🙋",
      visuel: "Qui est-ce qui... ? / Qu'est-ce qui... ?",
      contenu: [
        "Le sujet fait l'action ou est dans l'état exprimé par le verbe",
        "Test : « qui est-ce qui + verbe ? » ou « qu'est-ce qui + verbe ? »",
        "Autre test : encadrement par « c'est... qui » (c'est le chat qui dort)",
        "Le sujet peut être placé après le verbe : sujet inversé",
      ],
      voixOff:
        "Le sujet, c'est celui qui fait l'action ou qui est dans l'état décrit par le verbe. Pour le trouver, pose la question qui est-ce qui, ou qu'est-ce qui, devant le verbe. Tu peux aussi encadrer le groupe par c'est... qui, comme dans c'est le chat qui dort. Attention, le sujet n'est pas toujours placé juste avant le verbe : dans certaines phrases, il se trouve après, on parle alors de sujet inversé.",
    },
    {
      titre: "Le complément d'objet direct (COD)",
      illustration: "🎯",
      visuel: "Léa mange une pomme. → mange quoi ?",
      contenu: [
        "Le COD complète directement le verbe, sans préposition",
        "Test : « verbe + qui ? » ou « verbe + quoi ? »",
        "Il se remplace par un pronom : le, la, les, l'",
        "Exemple : Léa mange une pomme → mange quoi ? une pomme (COD)",
      ],
      voixOff:
        "Le complément d'objet direct, ou COD, complète directement le verbe, sans préposition entre les deux. Pour le trouver, pose la question verbe plus qui, ou verbe plus quoi. Dans Léa mange une pomme, on demande mange quoi : une pomme, c'est le COD. Astuce : le COD se remplace facilement par le, la, les ou l', comme dans Léa la mange.",
    },
    {
      titre: "Le complément d'objet indirect (COI)",
      illustration: "🔗",
      visuel: "Elle parle à son frère. → parle à qui ?",
      contenu: [
        "Le COI complète le verbe par l'intermédiaire d'une préposition (à, de...)",
        "Test : « verbe + à qui/quoi ? » ou « verbe + de qui/quoi ? »",
        "Il se remplace par lui, leur, y, en",
        "Exemple : Elle parle à son frère → parle à qui ? à son frère (COI)",
      ],
      voixOff:
        "Le complément d'objet indirect, ou COI, complète lui aussi le verbe, mais par l'intermédiaire d'une préposition, le plus souvent à ou de. On le trouve en posant verbe plus à qui, à quoi, de qui ou de quoi. Dans elle parle à son frère, on demande parle à qui : à son frère, voilà le COI. On peut souvent le remplacer par lui, leur, y ou en.",
    },
    {
      titre: "L'attribut du sujet",
      illustration: "🪞",
      visuel: "Le ciel est bleu. (état, pas action)",
      contenu: [
        "L'attribut suit un verbe d'état : être, sembler, paraître, devenir, rester...",
        "Il caractérise le sujet et s'accorde souvent avec lui",
        "Piège : ne pas confondre avec le COD (verbe d'action)",
        "Exemple : Le ciel est bleu → « bleu » caractérise « le ciel » (attribut)",
      ],
      voixOff:
        "L'attribut du sujet apparaît après un verbe d'état, comme être, sembler, paraître, devenir ou rester. Il ne décrit pas une action, mais une qualité ou un état du sujet, avec lequel il s'accorde souvent. Dans le ciel est bleu, bleu caractérise le ciel : c'est l'attribut du sujet. Attention à ne pas le confondre avec le COD : il faut regarder si le verbe exprime une action ou un état.",
    },
    {
      titre: "Les compléments circonstanciels (CC)",
      illustration: "🧩",
      visuel: "Hier, Léa a chanté avec joie dans le jardin.",
      contenu: [
        "Ils précisent les circonstances : temps, lieu, manière, cause...",
        "CC de temps (quand ?), de lieu (où ?), de manière (comment ?), de cause (pourquoi ?)",
        "Ils sont souvent mobiles : on peut les déplacer dans la phrase",
        "Ils sont souvent supprimables, sans rendre la phrase incorrecte",
      ],
      voixOff:
        "Les compléments circonstanciels précisent les circonstances de l'action : quand, où, comment ou pourquoi elle se produit. On distingue notamment le complément de temps, de lieu, de manière et de cause. Leur grande particularité, c'est qu'on peut presque toujours les déplacer dans la phrase et les supprimer sans que la phrase devienne incorrecte. Dans hier, Léa a chanté avec joie dans le jardin, on pourrait dire simplement Léa a chanté.",
    },
    {
      titre: "Épithète et apposition",
      illustration: "🖌️",
      visuel: "un chat noir / Paris, capitale de la France",
      contenu: [
        "L'épithète est un adjectif directement rattaché au nom, sans verbe",
        "Épithète liée (un chat noir) ou détachée par une virgule (Le chat, noir, dort.)",
        "L'apposition est un nom ou groupe nominal qui renomme un autre nom",
        "Elle est séparée par une virgule, sans mot de liaison (Paris, capitale de la France...)",
      ],
      voixOff:
        "L'épithète est un adjectif directement collé au nom qu'il qualifie, sans passer par un verbe : un chat noir. Elle peut aussi être détachée, séparée par une virgule, comme dans le chat, noir, dort. L'apposition, elle, est un nom ou un groupe nominal qui renomme un autre nom, sans aucun mot de liaison, et le plus souvent entre virgules : Paris, capitale de la France, est une grande ville.",
    },
    {
      titre: "Le complément du nom",
      illustration: "🧷",
      visuel: "le vélo de Paul / une tasse à café",
      contenu: [
        "Le complément du nom précise un nom, introduit par une préposition",
        "Prépositions fréquentes : de, à, en, sans, avec...",
        "Il se place juste après le nom qu'il complète",
        "Exemple : le vélo de Paul → « de Paul » précise « vélo » (complément du nom)",
      ],
      voixOff:
        "Le complément du nom vient préciser un nom, en général grâce à une préposition comme de, à ou en. Il se place juste après le nom qu'il complète. Dans le vélo de Paul, de Paul précise à qui appartient le vélo : c'est un complément du nom. De même, dans une tasse à café, à café précise à quoi sert la tasse.",
    },
    {
      titre: "Les pièges à éviter",
      illustration: "⚠️",
      visuel: "COD (action) ≠ attribut (état) / sujet inversé",
      contenu: [
        "Piège 1 : confondre COD et attribut → regarde si le verbe exprime une action ou un état",
        "« Il rencontre un champion » (COD) / « Il devient un champion » (attribut)",
        "Piège 2 : ne pas repérer un sujet inversé, placé après le verbe",
        "Le test « qui est-ce qui/qu'est-ce qui + verbe » fonctionne toujours, même si le sujet est après",
      ],
      voixOff:
        "Deux pièges reviennent souvent. Le premier consiste à confondre le complément d'objet direct et l'attribut du sujet : il faut toujours regarder si le verbe exprime une action, comme rencontrer, ou un état, comme devenir. Il rencontre un champion, c'est un COD ; il devient un champion, c'est un attribut. Le second piège, c'est de ne pas reconnaître un sujet placé après le verbe, un sujet inversé. Dans ce cas, le test qui est-ce qui, ou qu'est-ce qui, plus le verbe, fonctionne toujours et te donnera la bonne réponse.",
    },
  ],
  fiche: {
    intro:
      "La fonction d'un mot ou d'un groupe de mots indique le rôle qu'il joue dans la phrase : sujet, complément d'objet, attribut, complément circonstanciel... Contrairement à la classe grammaticale, la fonction change selon la phrase.",
    sections: [
      {
        titre: "Fonction vs classe : ne pas confondre",
        points: [
          "La classe grammaticale (nature) dit ce qu'EST un mot : nom, verbe, adjectif... (déjà étudiée dans un autre chapitre)",
          "La fonction dit ce que le mot FAIT dans la phrase : sujet, COD, attribut...",
          "Un même mot (même classe) peut avoir des fonctions différentes selon la phrase",
          "Exemple : « chat » est un nom (classe) ; sujet dans « Le chat dort », COD dans « Je vois le chat »",
        ],
      },
      {
        titre: "Sujet, COD et COI : les fonctions liées au verbe",
        points: [
          "Sujet : fait l'action ou est dans l'état exprimé par le verbe. Test : « qui est-ce qui / qu'est-ce qui + verbe ? » ou encadrement « c'est... qui »",
          "COD : complète directement le verbe, sans préposition. Test : « verbe + qui/quoi ? ». Pronoms : le, la, les, l'",
          "COI : complète le verbe par une préposition (à, de...). Test : « verbe + à/de qui/quoi ? ». Pronoms : lui, leur, y, en",
          "Le sujet peut être placé après le verbe : on parle de sujet inversé",
        ],
      },
      {
        titre: "Attribut du sujet et compléments circonstanciels",
        points: [
          "Attribut du sujet : suit un verbe d'état (être, sembler, paraître, devenir, rester...) et caractérise le sujet, avec lequel il s'accorde souvent",
          "Piège : COD (verbe d'action) ≠ attribut (verbe d'état) — comparer « il rencontre un champion » / « il devient un champion »",
          "Complément circonstanciel (CC) : précise les circonstances (temps, lieu, manière, cause...)",
          "Les CC sont en général mobiles (on peut les déplacer) et supprimables, contrairement au COD et au COI",
        ],
      },
      {
        titre: "Épithète, apposition et complément du nom",
        points: [
          "Épithète : adjectif directement rattaché à un nom, sans verbe, liée (un chat noir) ou détachée par une virgule (le chat, noir, dort)",
          "Apposition : nom ou groupe nominal qui renomme un autre nom, séparé par une virgule, sans mot de liaison (Paris, capitale de la France)",
          "Complément du nom : groupe introduit par une préposition (de, à, en...) qui précise un nom (le vélo de Paul)",
          "Ces trois fonctions complètent un nom, mais de manières différentes : par un adjectif, par un autre nom, ou par un groupe prépositionnel",
        ],
      },
    ],
    audio:
      "Fiche de révision : les fonctions grammaticales. La fonction indique le rôle que joue un mot ou un groupe de mots dans la phrase ; elle ne doit pas être confondue avec la classe grammaticale, qui dit ce qu'est le mot et qui a été étudiée dans un autre chapitre. Un même mot, comme chat, garde toujours la même classe, un nom, mais peut avoir des fonctions différentes selon la phrase : sujet dans le chat dort, complément d'objet direct dans je vois le chat. Pour trouver le sujet, on pose la question qui est-ce qui, ou qu'est-ce qui, devant le verbe, ou on encadre le groupe par c'est... qui ; attention, le sujet peut aussi être placé après le verbe, on parle alors de sujet inversé. Le complément d'objet direct, le COD, complète directement le verbe sans préposition et répond à la question verbe plus qui ou verbe plus quoi ; il se remplace par le, la, les ou l'. Le complément d'objet indirect, le COI, est introduit par une préposition, à ou de le plus souvent, et répond à verbe plus à qui, à quoi, de qui ou de quoi ; il se remplace par lui, leur, y ou en. L'attribut du sujet suit un verbe d'état comme être, sembler, paraître, devenir ou rester : il caractérise le sujet et s'accorde souvent avec lui. Attention à ne pas confondre le COD, qui suit un verbe d'action, et l'attribut, qui suit un verbe d'état : il rencontre un champion, c'est un COD ; il devient un champion, c'est un attribut. Les compléments circonstanciels précisent les circonstances : le temps, le lieu, la manière ou la cause ; ils sont en général mobiles et supprimables, contrairement au COD et au COI. Enfin, trois fonctions complètent un nom de façons différentes : l'épithète, qui est un adjectif directement rattaché au nom, comme dans un chat noir ; l'apposition, qui est un nom ou un groupe nominal séparé par une virgule et qui renomme un autre nom, comme dans Paris, capitale de la France ; et le complément du nom, qui est un groupe introduit par une préposition, comme dans le vélo de Paul.",
  },
  memoCards: [
    {
      recto: "Fonction ou classe grammaticale ?",
      verso:
        "La fonction dit ce que le mot FAIT dans la phrase (sujet, COD...) ; la classe dit ce qu'il EST (nom, verbe...). Un même mot change souvent de fonction, mais pas de classe.",
    },
    {
      recto: "Comment trouver le sujet ?",
      verso: "On pose « qui est-ce qui + verbe ? » (ou « qu'est-ce qui »), ou on encadre par « c'est... qui ».",
    },
    {
      recto: "Comment trouver le COD ?",
      verso:
        "On pose « verbe + qui ? » ou « verbe + quoi ? » juste après le verbe, sans préposition. Il se remplace par le, la, les, l'.",
    },
    {
      recto: "Comment trouver le COI ?",
      verso:
        "On pose « verbe + à qui/quoi ? » ou « verbe + de qui/quoi ? » : le complément est introduit par une préposition. Il se remplace par lui, leur, y, en.",
    },
    {
      recto: "Comment reconnaître l'attribut du sujet ?",
      verso: "Il suit un verbe d'état (être, sembler, paraître, devenir, rester...) et caractérise le sujet, avec lequel il s'accorde souvent.",
    },
    {
      recto: "Comment reconnaître un complément circonstanciel (CC) ?",
      verso:
        "Il précise les circonstances (temps, lieu, manière, cause...) ; on peut souvent le déplacer et le supprimer sans rendre la phrase incorrecte.",
    },
    {
      recto: "Épithète ou apposition ?",
      verso:
        "L'épithète est un adjectif directement lié au nom (un chat noir) ; l'apposition est un nom ou GN séparé par une virgule qui renomme un autre nom (Paris, capitale de la France).",
    },
    {
      recto: "Qu'est-ce qu'un complément du nom ?",
      verso: "Un groupe introduit par une préposition (souvent « de ») qui complète un nom : le vélo de Paul.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Le chien aboie. », quelle est la fonction de « Le chien » ?",
      choix: ["COD", "Sujet", "Attribut du sujet", "Complément du nom"],
      bonneReponse: 1,
      explication: "Test : qui est-ce qui aboie ? Le chien. « Le chien » est donc sujet du verbe « aboie ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Léa lit un roman. », quelle est la fonction de « un roman » ?",
      choix: ["Sujet", "COI", "COD", "Épithète"],
      bonneReponse: 2,
      explication: "Léa lit quoi ? un roman, directement après le verbe, sans préposition : c'est le COD.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Indique la fonction du groupe « à sa sœur » dans la phrase « Il écrit à sa sœur. »",
      reponse: "« À sa sœur » est complément d'objet indirect (COI) du verbe « écrit ».",
      explication:
        "Le groupe est introduit par la préposition « à » après le verbe (écrit à qui ?) ; on ne peut pas dire « il écrit sa sœur ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Lequel de ces verbes peut introduire un attribut du sujet ?",
      choix: ["Manger", "Sembler", "Regarder", "Écrire"],
      bonneReponse: 1,
      explication: "« Sembler » est un verbe d'état ; les trois autres sont des verbes d'action, qui n'introduisent pas d'attribut.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Indique la fonction du groupe « le soir » dans « Nous révisons le soir. »",
      reponse: "« Le soir » est complément circonstanciel de temps (CC de temps).",
      explication:
        "Il répond à la question « quand ? » et peut être déplacé (« Le soir, nous révisons. ») ou supprimé (« Nous révisons. »).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Elle paraît fatiguée. », quelle est la fonction de « fatiguée » ?",
      choix: ["COD", "CC de manière", "Attribut du sujet", "Épithète"],
      bonneReponse: 2,
      explication: "« Paraître » est un verbe d'état ; « fatiguée » caractérise le sujet « elle » et s'accorde avec lui : c'est l'attribut du sujet.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Indique la fonction du groupe « un champion » dans « Il devient un champion. » puis dans « Il rencontre un champion. »",
      reponse:
        "Dans la première phrase, « un champion » est attribut du sujet (verbe d'état « devenir », il caractérise « il »). Dans la seconde, « un champion » est COD (verbe d'action « rencontrer », il répond à « rencontre quoi ? »).",
      explication: "C'est le piège classique attribut/COD : il faut toujours regarder si le verbe exprime une action ou un état.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Mon frère, un grand gourmand, a tout mangé. », que désigne « un grand gourmand » par rapport à « Mon frère » ?",
      choix: ["Une épithète", "Un complément du nom", "Une apposition", "Un attribut du sujet"],
      bonneReponse: 2,
      explication:
        "« Un grand gourmand » est un groupe nominal séparé par une virgule qui renomme « mon frère », sans verbe d'état : c'est une apposition.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans « Ainsi vivaient nos ancêtres. », identifie le sujet du verbe « vivaient » et explique comment tu l'as trouvé malgré sa place dans la phrase.",
      reponse:
        "Le sujet est « nos ancêtres » (sujet inversé, placé après le verbe). On le trouve avec le test : qui est-ce qui vivaient ? Nos ancêtres.",
      explication:
        "La position du sujet peut varier (sujet inversé), mais le test « qui est-ce qui / qu'est-ce qui + verbe » fonctionne toujours.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Le livre que je lis est passionnant. », quelle est la fonction du groupe « passionnant » ?",
      choix: ["COD", "Épithète", "Attribut du sujet", "Complément du nom"],
      bonneReponse: 2,
      explication: "« Est » est un verbe d'état ; « passionnant » caractérise le sujet « le livre que je lis » : c'est l'attribut du sujet.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Analyse la phrase « La vieille maison de pierre semblait abandonnée. » : donne la fonction des groupes « de pierre » et « abandonnée ».",
      reponse:
        "« De pierre » est complément du nom « maison » (il précise en quoi la maison est faite). « Abandonnée » est attribut du sujet « La vieille maison de pierre » (après le verbe d'état « semblait »).",
      explication:
        "On distingue le complément du nom, rattaché à un nom par une préposition, de l'attribut du sujet, rattaché au sujet par un verbe d'état.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans « Sur la table traînaient de vieux journaux jaunis. », indique la fonction de « Sur la table » et celle de « de vieux journaux jaunis ».",
      reponse:
        "« Sur la table » est complément circonstanciel de lieu (déplaçable et supprimable). « De vieux journaux jaunis » est le sujet inversé du verbe « traînaient » (qu'est-ce qui traînait ? de vieux journaux jaunis).",
      explication: "Cette phrase cumule un CC de lieu en tête de phrase et un sujet inversé placé après le verbe.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle question pose-t-on pour trouver le sujet ?",
      choix: ["Où ça ?", "Qui est-ce qui / Qu'est-ce qui + verbe ?", "Comment ?", "Pourquoi ?"],
      bonneReponse: 1,
      explication: "On peut aussi encadrer le groupe par « c'est... qui ».",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la différence entre COD et COI ?",
      reponse:
        "Le COD suit directement le verbe, sans préposition (verbe + qui/quoi ?) ; le COI est introduit par une préposition (verbe + à/de qui/quoi ?).",
      explication: "Le COD se remplace par le/la/les, le COI par lui/leur/y/en.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Après quel type de verbe trouve-t-on un attribut du sujet ?",
      choix: ["Un verbe d'action", "Un verbe d'état", "Un verbe pronominal", "Un verbe transitif direct"],
      bonneReponse: 1,
      explication: "Être, sembler, paraître, devenir, rester... sont des verbes d'état qui introduisent un attribut du sujet.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment reconnaît-on un complément circonstanciel ?",
      reponse:
        "Il peut généralement être déplacé dans la phrase et supprimé sans la rendre incorrecte, contrairement au COD ou au COI.",
      explication: "COD et COI sont des compléments essentiels du verbe : on ne peut ni les déplacer ni les supprimer aussi librement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Quelle est la différence entre une épithète détachée et une apposition ?",
      reponse:
        "L'épithète détachée est un adjectif séparé par une virgule qui qualifie le nom (Le chat, noir, dort.) ; l'apposition est un nom ou un groupe nominal séparé par une virgule qui renomme le nom (Paris, capitale de la France, est une grande ville.).",
      explication: "L'épithète est toujours un adjectif ; l'apposition est toujours un nom ou un groupe nominal.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les fonctions grammaticales",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Les enfants jouent dans le parc. », quelle est la fonction de « Les enfants » ?",
          choix: ["COD", "Sujet", "Attribut du sujet", "Épithète"],
          bonneReponse: 1,
          explication: "Test : qui est-ce qui joue ? Les enfants.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Léa offre un cadeau à son ami. », quelle est la fonction de « à son ami » ?",
          choix: ["COD", "COI", "CC de lieu", "Complément du nom"],
          bonneReponse: 1,
          explication: "Léa offre à qui ? à son ami, introduit par la préposition « à » : c'est le COI.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Le ciel devient gris. », quelle est la fonction de « gris » ?",
          choix: ["COD", "CC de manière", "Attribut du sujet", "Épithète"],
          bonneReponse: 2,
          explication: "« Devenir » est un verbe d'état ; « gris » caractérise et s'accorde avec le sujet « le ciel ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Indique la fonction du groupe « avec prudence » dans « Il traverse la rue avec prudence. », et justifie en donnant un test.",
          reponse:
            "« Avec prudence » est un complément circonstanciel de manière : il répond à la question « comment ? » et peut être supprimé (« Il traverse la rue. ») ou déplacé (« Avec prudence, il traverse la rue. »).",
          explication: "La mobilité et la suppressibilité sont les deux tests caractéristiques des compléments circonstanciels.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Dans « Mon oncle, pêcheur passionné, part tous les matins au bord du lac. », indique la fonction de « pêcheur passionné » et celle de « au bord du lac ».",
          reponse:
            "« Pêcheur passionné » est apposé à « mon oncle » (apposition, séparée par une virgule, sans verbe). « Au bord du lac » est complément circonstanciel de lieu (répond à « où ? », déplaçable et supprimable).",
          explication: "L'apposition renomme un nom ; le CC de lieu précise l'endroit de l'action.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Compare les fonctions de « une glace au chocolat » dans « Elle adore une glace au chocolat. » et de « fraîche » dans « Cette glace est fraîche. »",
          reponse:
            "« Une glace au chocolat » est COD du verbe d'action « adore » (elle adore quoi ?). « Fraîche » est attribut du sujet « Cette glace », relié par le verbe d'état « est », et s'accorde avec lui.",
          explication: "Il faut distinguer le verbe d'action, qui introduit un COD, du verbe d'état, qui introduit un attribut.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les fonctions grammaticales",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Le vent souffle très fort. », quelle est la fonction de « très fort » ?",
          choix: ["COD", "CC de manière", "Attribut du sujet", "Sujet"],
          bonneReponse: 1,
          explication: "« Très fort » répond à « comment ? » et peut être déplacé ou supprimé : c'est un CC de manière.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel test permet de vérifier qu'un groupe est le sujet d'un verbe ?",
          choix: [
            "L'encadrer par « c'est... qui »",
            "Le remplacer par « très »",
            "Le supprimer sans problème",
            "Le déplacer en début de phrase",
          ],
          bonneReponse: 0,
          explication: "On peut aussi poser la question « qui est-ce qui / qu'est-ce qui + verbe ? ».",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Le sac en cuir appartient à Sarah. », quelle est la fonction de « en cuir » ?",
          choix: ["Épithète", "Complément du nom", "Attribut du sujet", "CC de manière"],
          bonneReponse: 1,
          explication: "« En cuir » est un groupe introduit par la préposition « en » qui précise le nom « sac » : c'est un complément du nom.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Indique la fonction de « ses devoirs » dans « Léo termine ses devoirs avant le dîner. » et celle de « avant le dîner ».",
          reponse:
            "« Ses devoirs » est COD du verbe « termine » (termine quoi ?). « Avant le dîner » est complément circonstanciel de temps (répond à « quand ? », déplaçable : « Avant le dîner, Léo termine ses devoirs. »).",
          explication: "Le COD est un complément essentiel du verbe ; le CC de temps est mobile et supprimable.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Dans « Peut-être reviendra-t-elle demain. », quel est le sujet du verbe « reviendra » ? Explique la difficulté de cette phrase.",
          reponse:
            "Le sujet est « elle », placé après le verbe : c'est un sujet inversé (fréquent après « peut-être » en tête de phrase). Le test « qui est-ce qui reviendra ? » donne toujours la bonne réponse : elle.",
          explication: "Le sujet inversé peut dérouter car il ne se trouve pas avant le verbe, mais le test reste valable.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Explique pourquoi, dans « Le chat guette la souris. », « la souris » est COD, alors que dans « Le chat reste immobile. », « immobile » est attribut du sujet.",
          reponse:
            "« La souris » est COD car « guetter » est un verbe d'action et « la souris » répond à « guette quoi ? » sans préposition. « Immobile » est attribut du sujet car « rester » est un verbe d'état : il ne décrit pas une action mais caractérise le sujet « le chat », avec lequel il s'accorde.",
          explication: "C'est la distinction clé entre verbe d'action (qui peut introduire un COD) et verbe d'état (qui introduit un attribut).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La fonction dit ce que le mot FAIT dans la phrase (sujet, COD...) ; ne pas la confondre avec la classe grammaticale, qui dit ce qu'il EST (nom, verbe...).",
    "Le sujet se trouve avec « qui est-ce qui / qu'est-ce qui + verbe ? » ou l'encadrement « c'est... qui » — même quand il est placé après le verbe (sujet inversé).",
    "Le COD suit directement le verbe sans préposition (verbe + qui/quoi ?) ; le COI est introduit par une préposition (verbe + à/de qui/quoi ?).",
    "L'attribut du sujet suit un verbe d'état (être, sembler, paraître, devenir, rester...) et caractérise le sujet, avec lequel il s'accorde souvent — ne pas le confondre avec le COD, qui suit un verbe d'action.",
    "Les compléments circonstanciels (temps, lieu, manière, cause...) sont en général mobiles et supprimables, contrairement aux compléments essentiels du verbe (COD, COI).",
    "Épithète (adjectif lié au nom), apposition (nom/GN séparé par une virgule) et complément du nom (GN introduit par une préposition) sont trois façons différentes de compléter un nom.",
  ],
};

export default chapitre;
