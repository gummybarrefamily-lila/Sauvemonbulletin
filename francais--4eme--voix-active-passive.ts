import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "voix-active-passive",
  titre: "Voix active et voix passive",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Comprendre la transformation entre voix active et voix passive : construction, conditions d'emploi, complément d'agent, et effets de sens produits par le choix de la voix passive dans un texte.",
  objectifs: [
    "Distinguer voix active et voix passive dans une phrase",
    "Transformer une phrase active en phrase passive et inversement",
    "Reconnaître et employer le complément d'agent",
    "Identifier les verbes qui peuvent se mettre au passif (transitifs directs)",
    "Analyser les effets de sens produits par l'emploi de la voix passive",
  ],
  slides: [
    {
      titre: "Voix active, voix passive : de quoi parle-t-on ?",
      illustration: "🔄",
      visuel: "Le chat mange la souris ↔ La souris est mangée par le chat",
      contenu: [
        "La voix indique la relation entre le sujet et l'action exprimée par le verbe",
        "Voix active : le sujet fait l'action (« Le chat mange la souris »)",
        "Voix passive : le sujet subit l'action (« La souris est mangée par le chat »)",
        "Les deux phrases décrivent le même événement, vu sous deux angles différents",
      ],
      voixOff:
        "La voix d'une phrase indique la relation entre le sujet et l'action exprimée par le verbe. À la voix active, le sujet fait l'action, comme dans le chat mange la souris. À la voix passive, le sujet subit l'action, comme dans la souris est mangée par le chat. Ces deux phrases décrivent exactement le même événement, mais vu sous deux angles différents.",
    },
    {
      titre: "Comment se construit la voix passive ?",
      illustration: "🏗️",
      visuel: "sujet + être + participe passé (+ par/de + agent)",
      contenu: [
        "Le sujet de la phrase active devient complément d'agent (introduit par « par » ou « de »)",
        "Le COD de la phrase active devient sujet de la phrase passive",
        "Le verbe se construit avec l'auxiliaire « être » suivi du participe passé",
        "Le participe passé s'accorde avec le sujet (comme un attribut)",
      ],
      voixOff:
        "Pour construire la voix passive, on suit une règle précise. Le complément d'objet direct de la phrase active devient le sujet de la phrase passive. Le sujet de la phrase active devient un complément d'agent, introduit par la préposition par, parfois de. Le verbe se construit alors avec l'auxiliaire être suivi du participe passé, qui s'accorde avec le sujet.",
    },
    {
      titre: "Un exemple pas à pas",
      illustration: "🧮",
      visuel: "Le facteur distribue le courrier → Le courrier est distribué par le facteur",
      contenu: [
        "Phrase active : « Le facteur distribue le courrier. »",
        "Sujet actif « le facteur » → complément d'agent « par le facteur »",
        "COD « le courrier » → sujet passif « Le courrier »",
        "Résultat : « Le courrier est distribué par le facteur. »",
      ],
      voixOff:
        "Prenons un exemple concret. Le facteur distribue le courrier, à la voix active. Le sujet, le facteur, devient un complément d'agent, introduit par par. Le complément d'objet direct, le courrier, devient le sujet de la phrase passive. On obtient : le courrier est distribué par le facteur.",
    },
    {
      titre: "Quels verbes peuvent se mettre au passif ?",
      illustration: "✅",
      visuel: "Verbe transitif direct (avec COD) uniquement",
      contenu: [
        "Seuls les verbes transitifs directs (qui ont un COD) peuvent se mettre au passif",
        "Un verbe intransitif (« dormir », « partir ») ne peut pas se mettre au passif",
        "Un verbe transitif indirect (« parler à », « penser à ») ne se met pas au passif non plus",
        "Vérifier : le verbe accepte-t-il un COD sans préposition ?",
      ],
      voixOff:
        "Seuls les verbes transitifs directs, c'est-à-dire ceux qui peuvent avoir un complément d'objet direct, peuvent se mettre au passif. Un verbe intransitif, comme dormir ou partir, ne peut pas se mettre au passif, car il n'a pas de COD. Un verbe transitif indirect, comme parler à ou penser à, ne se met pas non plus au passif. Pour vérifier, il suffit de se demander si le verbe accepte un complément d'objet direct, sans préposition.",
    },
    {
      titre: "Le complément d'agent",
      illustration: "👤",
      visuel: "par (le plus courant) / de (verbes de sentiment, état)",
      contenu: [
        "Le complément d'agent indique qui (ou quoi) fait l'action à la voix passive",
        "Il est le plus souvent introduit par « par » : « ...est écrit par l'auteur »",
        "Parfois introduit par « de », surtout avec des verbes de sentiment ou d'état : « aimé de tous »",
        "Le complément d'agent peut être supprimé si l'on ne veut pas préciser qui agit",
      ],
      voixOff:
        "Le complément d'agent indique qui, ou quoi, fait l'action dans une phrase passive. Il est le plus souvent introduit par la préposition par, comme dans ce roman est écrit par un auteur célèbre. Il peut parfois être introduit par de, surtout avec des verbes de sentiment ou d'état, comme dans il est aimé de tous. Ce complément d'agent peut aussi être supprimé si l'on ne veut pas, ou si l'on ne peut pas, préciser qui agit.",
    },
    {
      titre: "Pourquoi utiliser la voix passive ?",
      illustration: "🎯",
      visuel: "Mettre en valeur ce qui subit l'action",
      contenu: [
        "Pour mettre en valeur celui ou ce qui subit l'action, plutôt que celui qui agit",
        "Pour ne pas préciser qui a fait l'action (agent inconnu, évident ou volontairement caché)",
        "Fréquent dans les textes scientifiques, les articles de presse, les procès-verbaux",
        "Exemple : « Le suspect a été arrêté » (sans préciser par qui, l'important étant l'arrestation)",
      ],
      voixOff:
        "On choisit la voix passive pour plusieurs raisons. D'abord, pour mettre en valeur celui ou ce qui subit l'action, plutôt que celui qui la fait. Ensuite, pour éviter de préciser qui a fait l'action, quand l'agent est inconnu, évident, ou volontairement caché. C'est pourquoi on trouve souvent la voix passive dans les textes scientifiques, les articles de presse ou les procès-verbaux, comme dans le suspect a été arrêté.",
    },
    {
      titre: "Voix passive et temps composés",
      illustration: "⏱️",
      visuel: "présent : est + pp / passé composé : a été + pp",
      contenu: [
        "Le verbe « être » de la voix passive se conjugue au même temps que le verbe actif de départ",
        "Présent actif « écrit » → présent passif « est écrit »",
        "Passé composé actif « a écrit » → passé composé passif « a été écrit »",
        "Futur actif « écrira » → futur passif « sera écrit »",
      ],
      voixOff:
        "Un point important : le verbe être de la phrase passive se conjugue au même temps que le verbe de la phrase active de départ. Le présent actif écrit devient le présent passif est écrit. Le passé composé actif a écrit devient le passé composé passif a été écrit. Le futur actif écrira devient le futur passif sera écrit.",
    },
    {
      titre: "Reconnaître voix active et voix passive",
      illustration: "🔍",
      visuel: "être + participe passé + (par/de + agent) = passif",
      contenu: [
        "Repérer l'auxiliaire « être » suivi d'un participe passé : signe probable de passif",
        "Vérifier si l'on peut ajouter ou identifier un complément d'agent",
        "Attention : « être » + participe passé n'est pas toujours un passif (ex. verbes d'état)",
        "Astuce : essayer de transformer la phrase à l'actif pour vérifier",
      ],
      voixOff:
        "Pour reconnaître une phrase à la voix passive, repère l'auxiliaire être suivi d'un participe passé, et vérifie si l'on peut identifier ou ajouter un complément d'agent. Attention cependant : être suivi d'un participe passé n'est pas toujours un passif, certains verbes d'état comme paraître ou sembler suivis d'un adjectif ne le sont pas. Une bonne astuce consiste à essayer de transformer la phrase à l'actif pour vérifier.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Voix active : sujet = celui qui fait l'action. Voix passive : sujet = celui qui subit l'action",
        "Construction : sujet + être + participe passé (+ complément d'agent par/de)",
        "Seuls les verbes transitifs directs (avec COD) se mettent au passif",
        "Effet : mettre en valeur ce qui subit l'action, ou taire l'agent",
      ],
      voixOff:
        "Pour résumer, à la voix active, le sujet fait l'action ; à la voix passive, le sujet la subit. La voix passive se construit avec être suivi du participe passé, complété éventuellement par un complément d'agent introduit par par ou de. Seuls les verbes transitifs directs, qui acceptent un complément d'objet direct, peuvent se mettre au passif. On utilise la voix passive pour mettre en valeur ce qui subit l'action, ou pour ne pas préciser qui l'a accomplie.",
    },
  ],
  fiche: {
    intro:
      "La voix active et la voix passive expriment la même action, mais du point de vue de celui qui la fait (voix active) ou de celui qui la subit (voix passive). La transformation obéit à une règle précise et produit des effets de sens différents.",
    sections: [
      {
        titre: "Définition et construction",
        points: [
          "Voix active : le sujet fait l'action (« Le chat mange la souris »)",
          "Voix passive : le sujet subit l'action (« La souris est mangée par le chat »)",
          "Construction du passif : sujet + auxiliaire « être » + participe passé (+ complément d'agent)",
          "Le participe passé s'accorde avec le sujet",
        ],
      },
      {
        titre: "La transformation active → passive",
        points: [
          "Le COD de la phrase active devient le sujet de la phrase passive",
          "Le sujet de la phrase active devient complément d'agent (par, parfois de)",
          "Le verbe « être » se conjugue au même temps que le verbe actif de départ",
        ],
      },
      {
        titre: "Les conditions d'emploi du passif",
        points: [
          "Seuls les verbes transitifs directs (avec COD) peuvent se mettre au passif",
          "Les verbes intransitifs ou transitifs indirects ne se mettent pas au passif",
          "Le complément d'agent peut être supprimé (agent inconnu, évident ou caché)",
        ],
      },
      {
        titre: "Les effets de sens de la voix passive",
        points: [
          "Met en valeur ce qui subit l'action plutôt que celui qui la fait",
          "Permet de taire ou de ne pas préciser l'auteur de l'action",
          "Fréquente dans les textes scientifiques, la presse, les documents officiels",
        ],
      },
    ],
    audio:
      "Fiche de révision : voix active et voix passive. À la voix active, le sujet fait l'action, comme dans le chat mange la souris. À la voix passive, le sujet subit l'action, comme dans la souris est mangée par le chat. Pour construire le passif, le complément d'objet direct de la phrase active devient le sujet de la phrase passive, tandis que le sujet actif devient un complément d'agent, introduit par par, parfois par de. Le verbe se construit avec l'auxiliaire être, conjugué au même temps que le verbe actif, suivi du participe passé, qui s'accorde avec le sujet. Seuls les verbes transitifs directs, qui acceptent un complément d'objet direct, peuvent se mettre au passif. On utilise la voix passive pour mettre en valeur ce qui subit l'action, ou pour ne pas préciser qui l'a accomplie, notamment dans les textes scientifiques ou journalistiques.",
  },
  memoCards: [
    {
      recto: "Différence entre voix active et voix passive ?",
      verso: "À la voix active, le sujet fait l'action ; à la voix passive, le sujet subit l'action.",
    },
    {
      recto: "Comment se construit la voix passive ?",
      verso: "Sujet + auxiliaire « être » (conjugué au temps du verbe actif) + participe passé (+ complément d'agent).",
    },
    {
      recto: "Que devient le COD d'une phrase active en passant au passif ?",
      verso: "Il devient le sujet de la phrase passive.",
    },
    {
      recto: "Que devient le sujet d'une phrase active en passant au passif ?",
      verso: "Il devient complément d'agent, introduit par « par » (parfois « de »).",
    },
    {
      recto: "Quels verbes peuvent se mettre au passif ?",
      verso: "Seuls les verbes transitifs directs, c'est-à-dire ceux qui ont un complément d'objet direct (COD).",
    },
    {
      recto: "Avec quels verbes le complément d'agent est-il souvent introduit par « de » ?",
      verso: "Avec des verbes de sentiment ou d'état, comme « aimé de », « respecté de », « entouré de ».",
    },
    {
      recto: "Pourquoi peut-on supprimer le complément d'agent ?",
      verso: "Quand on ne veut pas, ou qu'on ne peut pas, préciser qui a fait l'action (agent inconnu, évident ou caché).",
    },
    {
      recto: "Pourquoi utilise-t-on la voix passive dans les textes scientifiques ou la presse ?",
      verso: "Pour mettre en valeur ce qui subit l'action plutôt que celui qui la fait, et parfois pour ne pas nommer l'agent.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Le vent a renversé l'arbre », le sujet :",
      choix: ["subit l'action", "fait l'action", "n'existe pas", "est un complément d'agent"],
      bonneReponse: 1,
      explication: "« Le vent » fait l'action de renverser : c'est une phrase à la voix active.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel auxiliaire est utilisé pour former la voix passive ?",
      choix: ["avoir", "être", "aller", "faire"],
      bonneReponse: 1,
      explication: "La voix passive se construit avec l'auxiliaire être suivi du participe passé.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Transforme à la voix passive : « Le chien poursuit le chat. »",
      reponse: "Le chat est poursuivi par le chien.",
      explication: "Le COD « le chat » devient sujet ; le sujet « le chien » devient complément d'agent introduit par « par ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « La lettre est écrite par Julien », « par Julien » est :",
      choix: ["le sujet", "le complément d'objet direct", "le complément d'agent", "l'attribut du sujet"],
      bonneReponse: 2,
      explication: "« par Julien » indique qui fait l'action : c'est le complément d'agent.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel verbe ne peut PAS se mettre à la voix passive ?",
      choix: ["manger", "regarder", "dormir", "construire"],
      bonneReponse: 2,
      explication: "« dormir » est un verbe intransitif : il n'a pas de COD, donc il ne peut pas se mettre au passif.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Transforme à la voix active : « Le gâteau a été préparé par ma grand-mère. »",
      reponse: "Ma grand-mère a préparé le gâteau.",
      explication: "Le complément d'agent « par ma grand-mère » devient sujet ; le sujet passif « le gâteau » devient COD.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi on ne peut pas mettre la phrase « Elle pense à ses vacances » à la voix passive.",
      reponse: "Parce que « penser à » est un verbe transitif indirect (le complément « à ses vacances » est introduit par une préposition) : seuls les verbes transitifs directs, avec un COD, peuvent se mettre à la voix passive.",
      explication: "« penser à quelque chose » n'a pas de COD, condition indispensable pour la transformation passive.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Ce roman a été lu par des millions de lecteurs. » Quel est le temps du verbe à la voix active correspondante ?",
      choix: ["présent", "imparfait", "passé composé", "futur"],
      bonneReponse: 2,
      explication: "« a été lu » (passé composé du passif) correspond à « ont lu » (passé composé actif) : « Des millions de lecteurs ont lu ce roman. »",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique l'effet produit par la voix passive dans la phrase de presse : « Un homme a été arrêté hier soir. » (sans complément d'agent)",
      reponse: "L'absence de complément d'agent permet de ne pas préciser qui a arrêté l'homme (les forces de l'ordre, sous-entendues) tout en mettant l'accent sur l'homme arrêté, qui devient le sujet et l'information principale de la phrase.",
      explication: "C'est un usage typique de la voix passive dans la presse : mettre en valeur l'événement plutôt que l'auteur de l'action.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Transforme à la voix passive, en conservant le temps du verbe : « Les élèves rendront leurs copies demain. »",
      reponse: "Les copies seront rendues par les élèves demain.",
      explication: "Le futur actif « rendront » devient le futur passif « seront rendues », avec accord du participe passé au féminin pluriel (copies).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un camarade écrit : « Le film est regardé par moi hier soir. » Explique pourquoi cette phrase sonne mal et propose une meilleure formulation.",
      reponse: "La phrase est grammaticalement correcte mais maladroite : on utilise rarement le passif avec un complément d'agent pronom personnel comme « moi », et la construction active est bien plus naturelle. Il vaut mieux écrire : « J'ai regardé le film hier soir. »",
      explication: "La voix passive est surtout utile quand l'agent est inconnu, peu important ou volontairement effacé ; sinon, la voix active reste souvent plus naturelle, surtout à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Le champion est respecté de tous », le complément d'agent est introduit par « de » car :",
      choix: [
        "c'est une règle absolue avec tous les verbes",
        "« respecter » est un verbe de sentiment/état, ce qui favorise « de »",
        "le verbe est au futur",
        "« de » remplace toujours « par »"
      ],
      bonneReponse: 1,
      explication: "Avec certains verbes de sentiment ou d'état (aimer, respecter, entourer...), le complément d'agent est souvent introduit par « de » plutôt que « par ».",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "À la voix passive, le sujet :",
      choix: ["fait l'action", "subit l'action", "n'a pas de fonction", "est toujours supprimé"],
      bonneReponse: 1,
      explication: "C'est la définition même de la voix passive : le sujet subit l'action au lieu de la faire.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Par quelles prépositions le complément d'agent peut-il être introduit ?",
      reponse: "Par « par » (le plus courant) ou par « de » (surtout avec des verbes de sentiment ou d'état).",
      explication: "Le choix de la préposition dépend souvent du verbe employé.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle catégorie de verbes peut se mettre à la voix passive ?",
      reponse: "Seuls les verbes transitifs directs, c'est-à-dire les verbes qui peuvent avoir un complément d'objet direct.",
      explication: "Les verbes intransitifs et transitifs indirects ne peuvent pas se mettre au passif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Transforme à la voix passive : « Le jardinier arrose les fleurs. »",
      choix: [
        "Les fleurs arrosent le jardinier.",
        "Les fleurs sont arrosées par le jardinier.",
        "Le jardinier est arrosé par les fleurs.",
        "Les fleurs ont arrosé le jardinier."
      ],
      bonneReponse: 1,
      explication: "Le COD « les fleurs » devient sujet, le sujet « le jardinier » devient complément d'agent.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi choisit-on parfois la voix passive plutôt que la voix active ?",
      reponse: "Pour mettre en valeur ce qui subit l'action plutôt que celui qui la fait, ou pour ne pas préciser qui a fait l'action (agent inconnu, évident ou volontairement caché).",
      explication: "C'est un choix stylistique et informatif fréquent dans la presse et les textes scientifiques.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Voix active et voix passive",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« La maison est construite par des ouvriers. » Cette phrase est à la voix :",
          choix: ["active", "passive", "ni l'une ni l'autre", "impossible à déterminer"],
          bonneReponse: 1,
          explication: "Le sujet « la maison » subit l'action : c'est la voix passive.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Transforme à la voix passive : « Le vétérinaire soigne le chien. »",
          reponse: "Le chien est soigné par le vétérinaire.",
          explication: "Le COD « le chien » devient sujet ; « le vétérinaire » devient complément d'agent.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel type de verbe ne peut jamais se mettre à la voix passive ?",
          choix: ["Transitif direct", "Intransitif", "Verbe d'action", "Verbe au présent"],
          bonneReponse: 1,
          explication: "Un verbe intransitif n'a pas de COD, condition indispensable à la transformation passive.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme à la voix active : « Les résultats seront annoncés par le jury demain. »",
          reponse: "Le jury annoncera les résultats demain.",
          explication: "Le futur passif « seront annoncés » devient le futur actif « annoncera » ; le complément d'agent devient sujet.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi on peut supprimer le complément d'agent dans « La ville a été fondée au Moyen Âge. »",
          reponse: "On peut le supprimer car on ne connaît pas précisément (ou on ne juge pas utile de préciser) qui a fondé la ville ; l'important est le fait lui-même, mis en valeur par le sujet « la ville ».",
          explication: "L'absence de complément d'agent est fréquente quand l'auteur de l'action est inconnu ou secondaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige une phrase à la voix passive avec complément d'agent introduit par « de », en utilisant un verbe de sentiment (aimer, respecter, admirer...).",
          reponse: "Exemple de corrigé : « Ce professeur est admiré de tous ses élèves. »",
          explication: "Avec les verbes de sentiment ou d'état, le complément d'agent est souvent introduit par « de » plutôt que « par ».",
        },
      ],
    },
    {
      titre: "Examen 2 — Voix active et voix passive",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le participe passé d'un verbe à la voix passive s'accorde avec :",
          choix: ["le complément d'agent", "le sujet", "le COD", "il ne s'accorde jamais"],
          bonneReponse: 1,
          explication: "Le participe passé employé avec « être » (voix passive) s'accorde avec le sujet, comme un attribut.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel élément de la phrase active devient le sujet de la phrase passive ?",
          reponse: "Le complément d'objet direct (COD).",
          explication: "C'est la règle de base de la transformation active → passive.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Le professeur explique la leçon. » Quelle transformation passive est correcte ?",
          choix: [
            "La leçon explique le professeur.",
            "La leçon est expliquée par le professeur.",
            "Le professeur est expliqué par la leçon.",
            "La leçon a expliqué le professeur."
          ],
          bonneReponse: 1,
          explication: "« la leçon » (COD) devient sujet ; « le professeur » (sujet) devient complément d'agent.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi la phrase « Il est allé à Paris » n'est-elle pas une phrase passive, bien qu'elle contienne le verbe « être » ?",
          reponse: "Parce que « aller » est un verbe intransitif qui se conjugue avec l'auxiliaire « être » aux temps composés (comme au passé composé) sans que cela forme une voix passive : il ne s'agit pas ici de « être + participe passé d'un verbe transitif direct » exprimant une action subie, mais simplement d'un temps composé du verbe actif « aller ».",
          explication: "Il ne faut pas confondre l'auxiliaire « être » des temps composés de certains verbes avec l'auxiliaire « être » de la voix passive.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme à la voix passive, en conservant le temps du verbe : « Les enfants ont cassé le vase. »",
          reponse: "Le vase a été cassé par les enfants.",
          explication: "Le passé composé actif « ont cassé » devient le passé composé passif « a été cassé ».",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade a écrit : « Sophie a dormi par sa sœur. » Explique pourquoi cette phrase est incorrecte.",
          reponse: "Cette phrase est incorrecte car « dormir » est un verbe intransitif : il n'a pas de complément d'objet direct et ne peut donc pas être mis à la voix passive. On ne peut pas non plus ajouter de complément d'agent introduit par « par » à une phrase qui n'est pas construite au passif. La phrase n'a tout simplement pas de sens grammatical correct.",
          explication: "Cet exercice permet de vérifier la condition essentielle du passif : un verbe transitif direct, avec COD, à l'origine.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Voix active : le sujet fait l'action. Voix passive : le sujet subit l'action.",
    "Construction du passif : sujet + « être » (au temps du verbe actif) + participe passé (+ complément d'agent).",
    "Le COD de la phrase active devient le sujet de la phrase passive ; le sujet actif devient complément d'agent.",
    "Complément d'agent introduit par « par » (le plus courant) ou « de » (verbes de sentiment/état).",
    "Seuls les verbes transitifs directs (avec COD) peuvent se mettre au passif.",
    "La voix passive met en valeur ce qui subit l'action, ou permet de ne pas préciser l'agent (presse, sciences, textes officiels).",
  ],
};

export default chapitre;
