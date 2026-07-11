import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "grammaire-brevet",
  titre: "La grammaire au brevet : analyse et réécriture",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Réviser les notions de grammaire indispensables à l'épreuve de français du brevet : nature et fonction des mots, types de phrases, propositions subordonnées, voix active/passive, discours direct/indirect, et méthode de la question de réécriture.",
  objectifs: [
    "Distinguer nature et fonction des mots dans la phrase",
    "Identifier les types de propositions (indépendante, principale, subordonnée)",
    "Maîtriser la transformation voix active / voix passive",
    "Passer du discours direct au discours indirect",
    "Réussir l'exercice de réécriture typique du brevet",
  ],
  slides: [
    {
      titre: "Nature et fonction : ne pas confondre",
      illustration: "🧩",
      visuel: "Nature = catégorie / Fonction = rôle",
      contenu: [
        "Nature : la catégorie grammaticale d'un mot (nom, verbe, adjectif, adverbe...)",
        "Fonction : le rôle du mot dans la phrase (sujet, COD, complément...)",
        "Un même mot garde sa nature mais change de fonction selon la phrase",
        "Ex. : « chat » (nom) peut être sujet, COD, ou complément du nom",
      ],
      voixOff:
        "Il ne faut jamais confondre nature et fonction. La nature est la catégorie grammaticale d'un mot : nom, verbe, adjectif, adverbe, pronom, préposition. La fonction est le rôle que joue ce mot dans la phrase : sujet, complément d'objet direct, complément circonstanciel. Un même mot garde toujours la même nature, mais sa fonction change selon la phrase. Le nom chat, par exemple, peut être sujet, complément d'objet direct, ou complément du nom, selon la construction de la phrase.",
    },
    {
      titre: "Les types et formes de phrases",
      illustration: "❓",
      visuel: "Déclarative • Interrogative • Injonctive • Exclamative",
      contenu: [
        "Type déclaratif : énonce un fait (point)",
        "Type interrogatif : pose une question (point d'interrogation)",
        "Type injonctif : donne un ordre ou un conseil (impératif)",
        "Type exclamatif : exprime une émotion forte (point d'exclamation)",
        "Formes : affirmative/négative, active/passive, personnelle/impersonnelle",
      ],
      voixOff:
        "Chaque phrase a un type et une ou plusieurs formes. Les quatre types sont : déclaratif, qui énonce un fait ; interrogatif, qui pose une question ; injonctif, qui donne un ordre ou un conseil ; exclamatif, qui exprime une émotion forte. À cela s'ajoutent des formes : la phrase peut être affirmative ou négative, active ou passive, personnelle ou impersonnelle. Ces notions se combinent : une phrase peut être interrogative ET négative, par exemple.",
    },
    {
      titre: "Propositions : indépendante, principale, subordonnée",
      illustration: "🔗",
      visuel: "P. indépendante | P. principale + P. subordonnée",
      contenu: [
        "Proposition indépendante : ne dépend d'aucune autre, autonome",
        "Proposition principale : commande une ou plusieurs subordonnées",
        "Proposition subordonnée : dépend d'une principale, ne peut exister seule",
        "Types de subordonnées : relative (qui, que...), conjonctive (que, si, quand...)",
      ],
      voixOff:
        "Une proposition indépendante ne dépend d'aucune autre proposition : elle est autonome, même si elle est reliée par une virgule ou une conjonction de coordination. Une proposition principale commande une ou plusieurs propositions subordonnées, qui, elles, ne peuvent pas exister seules et dépendent grammaticalement de la principale. On distingue plusieurs types de subordonnées : la relative, introduite par qui, que, dont, où, et la conjonctive, introduite par que, si, quand, parce que.",
    },
    {
      titre: "La voix active et la voix passive",
      illustration: "🔄",
      visuel: "Le chat mange la souris → La souris est mangée par le chat",
      contenu: [
        "Voix active : le sujet fait l'action (Le chat mange la souris)",
        "Voix passive : le sujet subit l'action (La souris est mangée par le chat)",
        "Transformation : COD devient sujet ; sujet devient complément d'agent (par)",
        "Verbe passif : être + participe passé du verbe (accordé avec le sujet)",
      ],
      voixOff:
        "À la voix active, le sujet fait l'action : le chat mange la souris. À la voix passive, le sujet subit l'action : la souris est mangée par le chat. Pour transformer une phrase active en passive, le complément d'objet direct devient le sujet, et l'ancien sujet devient un complément d'agent, introduit par par. Le verbe passif se construit avec l'auxiliaire être suivi du participe passé, qui s'accorde avec le nouveau sujet.",
    },
    {
      titre: "Discours direct et discours indirect",
      illustration: "💬",
      visuel: "« Je viendrai demain » → Il a dit qu'il viendrait le lendemain",
      contenu: [
        "Discours direct : les paroles sont rapportées telles quelles, entre guillemets",
        "Discours indirect : les paroles sont intégrées dans une subordonnée (que, si...)",
        "Changements nécessaires : pronoms, temps verbaux, indicateurs de temps/lieu",
        "Ex. : « demain » devient « le lendemain » ; « ici » devient « là »",
      ],
      voixOff:
        "Le discours direct rapporte les paroles telles quelles, entre guillemets : il a dit, je viendrai demain. Le discours indirect intègre ces paroles dans une proposition subordonnée, introduite par que ou si : il a dit qu'il viendrait le lendemain. Ce passage entraîne plusieurs changements : les pronoms personnels, les temps verbaux, selon la concordance des temps, et les indicateurs de temps et de lieu. Demain devient le lendemain, ici devient là, aujourd'hui devient ce jour-là.",
    },
    {
      titre: "Les substituts et la reprise pronominale",
      illustration: "🔁",
      visuel: "Pronom • Synonyme • Périphrase",
      contenu: [
        "Éviter les répétitions grâce aux substituts (reprises) d'un nom déjà cité",
        "Substituts pronominaux : il, elle, celui-ci, qui, que...",
        "Substituts lexicaux : synonyme, périphrase, terme générique",
        "Ex. : « le chat » → « il », « ce félin », « l'animal »",
      ],
      voixOff:
        "Pour éviter les répétitions, on utilise des substituts, aussi appelés reprises, qui remplacent un nom déjà cité. Les substituts pronominaux utilisent un pronom : il, elle, celui-ci, qui, que. Les substituts lexicaux utilisent un autre mot : un synonyme, une périphrase, ou un terme générique. Par exemple, le chat peut être repris par il, par ce félin, ou par l'animal. Cette compétence est essentielle pour bien écrire, mais aussi pour analyser un texte.",
    },
    {
      titre: "La question de réécriture au brevet",
      illustration: "✍️",
      visuel: "Transformer sans changer le sens",
      contenu: [
        "Consigne typique : changer le temps, la personne, la voix, ou le discours",
        "Il faut modifier TOUS les éléments concernés, sans en oublier aucun",
        "Vérifier les accords : sujet-verbe, participe passé, pronoms",
        "Relire la phrase obtenue : elle doit rester cohérente et correcte",
      ],
      voixOff:
        "La question de réécriture est un exercice classique du brevet : elle demande de transformer une phrase donnée en respectant une consigne précise, changer le temps, la personne, la voix, ou passer du discours direct au discours indirect. Il faut modifier tous les éléments concernés par la transformation, sans en oublier aucun : verbes, pronoms, accords. Vérifie toujours les accords, sujet-verbe et participe passé notamment, et relis la phrase obtenue pour t'assurer qu'elle reste cohérente et correcte.",
    },
    {
      titre: "Méthode pour réussir la réécriture",
      illustration: "🧭",
      visuel: "Lire → Repérer → Transformer → Vérifier",
      contenu: [
        "Lire attentivement la phrase de départ et la consigne",
        "Repérer tous les éléments à transformer (verbes, pronoms, temps)",
        "Transformer élément par élément, sans se précipiter",
        "Vérifier l'accord et la cohérence de la phrase finale",
      ],
      voixOff:
        "Pour réussir la question de réécriture, adopte une méthode en quatre étapes. D'abord, lis attentivement la phrase de départ et la consigne, pour bien comprendre ce qui est demandé. Ensuite, repère tous les éléments à transformer : verbes, pronoms, temps, indicateurs. Puis transforme élément par élément, sans te précipiter, en procédant avec méthode. Enfin, vérifie les accords et relis ta phrase pour t'assurer qu'elle reste cohérente et grammaticalement correcte.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Nature (catégorie) ≠ fonction (rôle dans la phrase)",
        "Proposition principale + subordonnée(s) ; indépendante = autonome",
        "Voix passive : COD devient sujet, sujet devient complément d'agent (par)",
        "Discours indirect : changement de pronoms, temps, indicateurs de temps/lieu",
      ],
      voixOff:
        "Résumons. La nature d'un mot, sa catégorie grammaticale, ne doit jamais être confondue avec sa fonction, son rôle dans la phrase. Une proposition principale peut commander une ou plusieurs subordonnées, tandis qu'une proposition indépendante reste autonome. À la voix passive, le complément d'objet direct devient sujet, et l'ancien sujet devient complément d'agent introduit par par. Enfin, le passage au discours indirect entraîne toujours des changements de pronoms, de temps et d'indicateurs de temps et de lieu. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre rassemble les notions de grammaire les plus fréquemment évaluées à l'épreuve de français du brevet : nature et fonction, types de propositions, voix active/passive, discours direct/indirect, et la méthode de la question de réécriture.",
    sections: [
      {
        titre: "Nature, fonction et types de phrases",
        points: [
          "Nature : catégorie grammaticale d'un mot (nom, verbe, adjectif...)",
          "Fonction : rôle du mot dans la phrase (sujet, COD, complément...)",
          "Quatre types de phrases : déclaratif, interrogatif, injonctif, exclamatif",
          "Formes : affirmative/négative, active/passive, personnelle/impersonnelle",
        ],
      },
      {
        titre: "Les propositions",
        points: [
          "Indépendante : autonome, ne dépend d'aucune autre proposition",
          "Principale : commande une ou plusieurs subordonnées",
          "Subordonnée relative (qui, que, dont, où) et conjonctive (que, si, quand)",
        ],
      },
      {
        titre: "Voix active/passive et discours rapporté",
        points: [
          "Voix passive : le COD devient sujet, l'ancien sujet devient complément d'agent (par)",
          "Verbe passif : auxiliaire être + participe passé accordé avec le sujet",
          "Discours indirect : intégration dans une subordonnée (que, si), changements de pronoms, temps, indicateurs",
        ],
      },
      {
        titre: "Méthode de la réécriture au brevet",
        points: [
          "Lire attentivement la phrase de départ et la consigne",
          "Repérer tous les éléments à transformer",
          "Transformer méthodiquement, sans en oublier aucun",
          "Vérifier les accords et la cohérence finale de la phrase",
        ],
      },
    ],
    audio:
      "Fiche de révision : la grammaire au brevet, analyse et réécriture. Il ne faut jamais confondre la nature d'un mot, sa catégorie grammaticale, avec sa fonction, son rôle dans la phrase. Il existe quatre types de phrases : déclaratif, interrogatif, injonctif, exclamatif, et plusieurs formes possibles, affirmative ou négative, active ou passive. Une proposition indépendante est autonome, tandis qu'une proposition principale commande une ou plusieurs subordonnées, relatives ou conjonctives. À la voix passive, le complément d'objet direct devient sujet, et l'ancien sujet devient complément d'agent, introduit par la préposition par ; le verbe passif se construit avec l'auxiliaire être et un participe passé accordé. Le discours indirect intègre les paroles rapportées dans une subordonnée introduite par que ou si, ce qui entraîne des changements de pronoms, de temps verbaux et d'indicateurs de temps et de lieu. Pour réussir la question de réécriture du brevet, il faut lire attentivement la consigne, repérer tous les éléments à transformer, les modifier un par un, puis vérifier les accords et la cohérence de la phrase finale.",
  },
  memoCards: [
    { recto: "Différence entre nature et fonction ?", verso: "Nature = catégorie grammaticale du mot (nom, verbe...) ; fonction = rôle du mot dans la phrase (sujet, COD...)." },
    { recto: "Les quatre types de phrases ?", verso: "Déclaratif, interrogatif, injonctif, exclamatif." },
    { recto: "Proposition indépendante vs principale ?", verso: "Indépendante : autonome, ne dépend de rien. Principale : commande une ou plusieurs subordonnées." },
    { recto: "Comment transformer une phrase active en passive ?", verso: "Le COD devient sujet ; l'ancien sujet devient complément d'agent introduit par « par » ; verbe = être + participe passé." },
    { recto: "Comment se forme le discours indirect ?", verso: "Les paroles sont intégrées dans une subordonnée (que, si) ; changement de pronoms, temps, indicateurs de temps/lieu." },
    { recto: "« Demain » et « ici » au discours indirect ?", verso: "« Demain » devient « le lendemain » ; « ici » devient « là »." },
    { recto: "Qu'est-ce qu'un substitut (reprise) ?", verso: "Un mot qui remplace un nom déjà cité pour éviter la répétition : pronom, synonyme, périphrase." },
    { recto: "Les 4 étapes de la méthode de réécriture ?", verso: "Lire la consigne, repérer les éléments à transformer, transformer un par un, vérifier accords et cohérence." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans la phrase « Le vieux chat dort », quelle est la fonction de « vieux » ?",
      choix: ["Sujet", "Épithète du nom « chat »", "Complément d'objet direct", "Attribut du sujet"],
      bonneReponse: 1,
      explication: "« Vieux » est un adjectif qualificatif placé directement à côté du nom qu'il qualifie : c'est une épithète.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le type de la phrase « Range ta chambre ! » ?",
      choix: ["Déclaratif", "Interrogatif", "Injonctif", "Exclamatif"],
      bonneReponse: 2,
      explication: "La phrase donne un ordre, elle est donc de type injonctif (même si elle porte un point d'exclamation, son type reste injonctif).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Transforme cette phrase à la voix passive : « Le chat mange la souris. »",
      reponse: "La souris est mangée par le chat.",
      explication: "Le COD « la souris » devient sujet, l'ancien sujet « le chat » devient complément d'agent introduit par « par », et le verbe devient « est mangée ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une proposition subordonnée relative est introduite par :",
      choix: ["donc, or, car", "qui, que, dont, où", "mais, et, ou", "malgré, sauf, hormis"],
      bonneReponse: 1,
      explication: "Les pronoms relatifs qui, que, dont, où introduisent les propositions subordonnées relatives.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Il a dit qu'il viendrait le lendemain », à quel discours cette phrase appartient-elle ?",
      choix: ["Discours direct", "Discours indirect", "Discours narrativisé", "Aucun des trois"],
      bonneReponse: 1,
      explication: "Les paroles sont rapportées dans une subordonnée introduite par « que », avec les changements de temps et d'indicateurs typiques du discours indirect.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Transforme au discours indirect : Elle a dit : « Je pars demain. »",
      reponse: "Elle a dit qu'elle partait le lendemain.",
      explication: "« Je » devient « elle », le présent devient l'imparfait (concordance des temps), et « demain » devient « le lendemain ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Identifie la proposition principale et la proposition subordonnée dans : « Je pense que tu as raison. »",
      reponse: "Proposition principale : « Je pense » ; proposition subordonnée conjonctive complément d'objet : « que tu as raison ».",
      explication: "La subordonnée « que tu as raison » ne peut pas exister seule : elle dépend du verbe « pense » de la principale.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi il ne faut pas confondre nature et fonction, avec un exemple.",
      reponse: "La nature d'un mot ne change jamais (« chat » reste toujours un nom), alors que sa fonction change selon la phrase : dans « Le chat dort », « chat » est sujet ; dans « Je vois le chat », « chat » est complément d'objet direct. C'est donc bien la fonction, et non la nature, qui varie selon la construction de la phrase.",
      explication: "Confondre les deux est une erreur fréquente qui peut faire perdre des points aux questions de grammaire du brevet.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Réécris « Les enfants ont mangé le gâteau » à la voix passive : quelle forme est correcte ?",
      choix: [
        "Le gâteau a été mangé par les enfants.",
        "Le gâteau mange les enfants.",
        "Les enfants sont mangés par le gâteau.",
        "Le gâteau était mangeant les enfants.",
      ],
      bonneReponse: 0,
      explication: "Le COD « le gâteau » devient sujet, et le verbe au passé composé passif se construit avec « avoir été » + participe passé : « a été mangé ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Réécris la phrase suivante en respectant la consigne : « Nous partirons demain » — mets cette phrase au discours indirect après « Il nous a annoncé que... », et explique les transformations nécessaires.",
      reponse: "Il nous a annoncé que nous partirions le lendemain. Transformations : le futur simple « partirons » devient un conditionnel présent (futur dans le passé), en raison de la concordance des temps avec la principale au passé (« a annoncé ») ; l'indicateur de temps « demain » devient « le lendemain », car le repère temporel change avec le passage au discours rapporté.",
      explication: "Cette double transformation, temps verbal et indicateur temporel, est typique des questions de réécriture les plus complexes du brevet.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Réécris ce texte en mettant tous les verbes du présent au passé composé, en respectant les accords : « Le chien court dans le jardin. Il aboie fort et effraie les oiseaux, qui s'envolent aussitôt. »",
      reponse: "Le chien a couru dans le jardin. Il a aboyé fort et a effrayé les oiseaux, qui se sont envolés aussitôt.",
      explication: "On vérifie l'auxiliaire correct (avoir ou être), la formation du participe passé de chaque verbe, et l'accord du participe passé avec le sujet pour le verbe pronominal « s'envoler ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse la phrase « Bien que fatiguée, elle continua son chemin, car elle savait que son frère l'attendait. » : identifie les propositions et leur type (principale, subordonnée relative ou conjonctive).",
      reponse: "« Elle continua son chemin » : proposition principale. « Bien que fatiguée » : proposition subordonnée (elliptique, sous-entendu « elle était »), de concession. « Car elle savait » : proposition indépendante coordonnée à la principale par « car ». « Que son frère l'attendait » : proposition subordonnée conjonctive, complément d'objet du verbe « savait ».",
      explication: "Cette phrase combine plusieurs types de propositions, ce qui en fait un bon exercice d'entraînement pour l'analyse grammaticale du brevet.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La fonction d'un mot dans la phrase, c'est :",
      choix: ["sa catégorie grammaticale", "son rôle (sujet, COD, complément...)", "son genre (masculin/féminin)", "son nombre de syllabes"],
      bonneReponse: 1,
      explication: "La fonction dépend de la construction de la phrase, contrairement à la nature qui reste fixe.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne les quatre types de phrases.",
      reponse: "Déclaratif, interrogatif, injonctif, exclamatif.",
      explication: "Chaque phrase appartient à un seul type, mais peut combiner plusieurs formes (négative, passive...).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment transforme-t-on une phrase de la voix active à la voix passive ?",
      reponse: "Le complément d'objet direct devient le sujet de la phrase passive ; l'ancien sujet devient un complément d'agent introduit par « par » ; le verbe se construit avec l'auxiliaire être suivi du participe passé, accordé avec le nouveau sujet.",
      explication: "Cette transformation ne fonctionne qu'avec des verbes transitifs directs (qui ont un COD).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Au discours indirect, l'indicateur « hier » devient :",
      choix: ["aujourd'hui", "la veille", "demain", "maintenant"],
      bonneReponse: 1,
      explication: "Le repère temporel change lors du passage au discours rapporté : « hier » devient « la veille ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelles sont les quatre étapes de la méthode pour réussir une question de réécriture ?",
      reponse: "Lire attentivement la phrase et la consigne ; repérer tous les éléments à transformer ; transformer méthodiquement chaque élément ; vérifier les accords et la cohérence de la phrase finale.",
      explication: "Cette méthode évite d'oublier une transformation, erreur la plus fréquente à cet exercice.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Grammaire au brevet",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Elle regarde le film », quelle est la fonction de « le film » ?",
          choix: ["Sujet", "Complément d'objet direct", "Attribut du sujet", "Complément circonstanciel"],
          bonneReponse: 1,
          explication: "« Le film » répond à la question « regarde qui/quoi ? » et est directement rattaché au verbe : c'est un COD.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une proposition indépendante ?",
          reponse: "C'est une proposition qui ne dépend d'aucune autre proposition et qui peut se suffire à elle-même sur le plan grammatical.",
          explication: "Elle peut être seule ou coordonnée/juxtaposée à d'autres indépendantes.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Réécris à la voix passive : « Le vent a renversé l'arbre. » Quelle est la forme correcte ?",
          choix: [
            "L'arbre a renversé le vent.",
            "L'arbre a été renversé par le vent.",
            "L'arbre est renversant le vent.",
            "Le vent est renversé par l'arbre.",
          ],
          bonneReponse: 1,
          explication: "Le COD « l'arbre » devient sujet ; le verbe au passé composé actif devient « a été renversé » au passif, avec « par le vent » en complément d'agent.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme au discours indirect : Il a demandé : « Où vas-tu ? »",
          reponse: "Il a demandé où j'allais (ou : où elle/il allait, selon le contexte).",
          explication: "Dans une interrogation indirecte, on supprime le point d'interrogation et l'inversion sujet-verbe ; le mot interrogatif « où » est conservé pour introduire la subordonnée.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Identifie la nature et la fonction du mot souligné : « Je lis un livre passionnant » (mot souligné : « passionnant »).",
          reponse: "Nature : adjectif qualificatif (verbal, participe présent employé comme adjectif). Fonction : épithète du nom « livre ».",
          explication: "« Passionnant » qualifie directement le nom « livre » sans verbe d'état : c'est une épithète.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Réécris ce texte en respectant la consigne : mets à la 3e personne du singulier (au lieu de la 1re) : « Je me lève tôt, je prends mon petit-déjeuner, puis je pars à l'école en vélo. » Indique les changements nécessaires.",
          reponse: "Il/Elle se lève tôt, il/elle prend son petit-déjeuner, puis il/elle part à l'école en vélo. Changements : le pronom sujet « je » devient « il » ou « elle » ; les terminaisons verbales changent (« lève » reste identique à l'oral mais la personne grammaticale change, « prends » devient « prend », « pars » devient « part ») ; le déterminant possessif « mon » devient « son ».",
          explication: "Ce type de réécriture teste la maîtrise des accords sujet-verbe et des déterminants possessifs selon la personne grammaticale.",
        },
      ],
    },
    {
      titre: "Examen 2 — Grammaire au brevet",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Paul est content », quelle est la fonction de « content » ?",
          choix: ["Épithète", "Complément d'objet direct", "Attribut du sujet", "Complément d'agent"],
          bonneReponse: 2,
          explication: "« Content » est relié au sujet « Paul » par le verbe d'état « est » : c'est un attribut du sujet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui distingue une proposition subordonnée relative d'une proposition subordonnée conjonctive ?",
          reponse: "La subordonnée relative est introduite par un pronom relatif (qui, que, dont, où) et complète généralement un nom (antécédent). La subordonnée conjonctive est introduite par une conjonction de subordination (que, si, quand, parce que) et complète généralement un verbe.",
          explication: "Le mot introducteur et la fonction de la subordonnée permettent de les distinguer.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase est correctement mise au discours indirect à partir de « Il a dit : \"J'ai faim.\" » ?",
          choix: [
            "Il a dit qu'il a faim.",
            "Il a dit qu'il avait faim.",
            "Il a dit : qu'il a faim.",
            "Il a dit j'ai faim.",
          ],
          bonneReponse: 1,
          explication: "Le présent « j'ai faim » devient l'imparfait « il avait faim » par concordance des temps, la principale étant au passé composé.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réécris à la voix passive : « Le jury récompensera les meilleurs élèves. »",
          reponse: "Les meilleurs élèves seront récompensés par le jury.",
          explication: "Le futur simple actif « récompensera » devient « seront récompensés » au passif (auxiliaire être au futur + participe passé accordé au pluriel).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi, dans une question de réécriture, il faut vérifier tous les accords une fois la transformation effectuée.",
          reponse: "Parce qu'une transformation (changement de temps, de personne, de voix) peut modifier le nombre ou le genre du sujet, ce qui entraîne des accords en cascade : accord sujet-verbe, accord du participe passé, accord des adjectifs ou déterminants. Oublier un seul accord rend la phrase finale incorrecte, même si la transformation principale est juste.",
          explication: "C'est l'erreur la plus fréquente à cet exercice : réussir la transformation principale mais oublier un accord secondaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève doit réécrire cette phrase en mettant le verbe souligné au passé composé et en respectant les accords : « Les fleurs que Marie a cueillies (au présent : que Marie cueille) sont posées sur la table. » Corrige les éventuelles erreurs d'accord et explique la règle appliquée.",
          reponse: "La forme correcte est bien « Les fleurs que Marie a cueillies sont posées sur la table. » Le participe passé « cueillies » s'accorde avec le COD « que » (mis pour « fleurs », féminin pluriel) car ce COD est placé avant le verbe, comme l'exige la règle d'accord du participe passé conjugué avec l'auxiliaire avoir.",
          explication: "Cette règle, le COD placé avant le verbe entraîne l'accord du participe passé avec l'auxiliaire avoir, est un des pièges grammaticaux les plus fréquents au brevet.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Nature (catégorie grammaticale) ≠ fonction (rôle dans la phrase) : un mot garde sa nature mais change de fonction.",
    "Quatre types de phrases : déclaratif, interrogatif, injonctif, exclamatif ; formes : affirmative/négative, active/passive.",
    "Proposition indépendante = autonome ; proposition principale commande une ou plusieurs subordonnées (relatives ou conjonctives).",
    "Voix passive : le COD devient sujet, l'ancien sujet devient complément d'agent (« par »), verbe = être + participe passé accordé.",
    "Discours indirect : intégration dans une subordonnée, changements de pronoms, de temps (concordance) et d'indicateurs de temps/lieu.",
    "Méthode de réécriture : lire la consigne, repérer tous les éléments à transformer, transformer un par un, vérifier accords et cohérence.",
  ],
};

export default chapitre;
