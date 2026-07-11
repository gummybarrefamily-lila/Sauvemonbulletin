import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "recit-fantastique",
  titre: "Le récit fantastique",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Découvrir le récit fantastique : l'hésitation entre explication rationnelle et surnaturel, ses différences avec le merveilleux et la science-fiction, ses procédés d'écriture et ses grands auteurs, pour savoir écrire soi-même un début de récit fantastique.",
  objectifs: [
    "Définir le fantastique : l'hésitation entre rationnel et surnaturel",
    "Distinguer le fantastique du merveilleux et de la science-fiction",
    "Repérer les procédés d'écriture : modalisateurs, lexique de la peur, point de vue interne",
    "Connaître les grands auteurs du genre : Maupassant, Poe, Gautier",
    "Écrire un début de récit fantastique efficace",
  ],
  slides: [
    {
      titre: "C'est quoi, le fantastique ?",
      illustration: "🕯️",
      visuel: "Rêve... ou réalité ?",
      contenu: [
        "Un récit qui commence dans un monde réaliste, ordinaire",
        "Un événement étrange surgit et dérange cet ordre",
        "Deux explications possibles : rationnelle OU surnaturelle",
        "Ni le héros ni le lecteur ne peuvent trancher",
      ],
      voixOff:
        "Le récit fantastique commence toujours dans un monde ordinaire, réaliste, qui ressemble au nôtre. Puis un événement étrange surgit : un objet bouge tout seul, une ombre apparaît. Deux explications sont possibles : une explication rationnelle, comme le rêve ou la folie, ou une explication surnaturelle, comme un fantôme. Et justement, ni le héros ni le lecteur ne peuvent trancher.",
    },
    {
      titre: "L'hésitation fantastique (Todorov)",
      illustration: "⚖️",
      visuel: "Hallucination ↔ Fantôme",
      contenu: [
        "Le critique Tzvetan Todorov a défini le fantastique par l'hésitation",
        "Le fantastique dure tant que le doute dure",
        "« Ai-je rêvé ? Suis-je fou ? Ou est-ce réel ? »",
        "Si une explication l'emporte, on sort du fantastique",
      ],
      voixOff:
        "Le critique Tzvetan Todorov a proposé une définition devenue célèbre : le fantastique, c'est le temps de l'hésitation. Tant que le personnage et le lecteur se demandent s'il s'agit d'une hallucination ou d'un vrai phénomène surnaturel, on est dans le fantastique. Dès qu'une explication l'emporte définitivement, le doute disparaît, et on sort du genre.",
    },
    {
      titre: "Fantastique ≠ merveilleux",
      illustration: "🧚",
      visuel: "« Il était une fois... » ≠ « Cette nuit-là... »",
      contenu: [
        "Merveilleux (contes) : le surnaturel est normal, accepté par tous",
        "Une fée ou un ogre n'étonnent personne dans un conte",
        "Fantastique : le surnaturel fait irruption dans le réel et inquiète",
        "Le merveilleux émerveille, le fantastique fait douter et frissonner",
      ],
      voixOff:
        "Attention à ne pas confondre fantastique et merveilleux. Dans un conte merveilleux, comme Cendrillon, le surnaturel est accepté par tout le monde : une fée n'étonne personne. Dans le fantastique, au contraire, le surnaturel fait irruption dans un monde réaliste et provoque l'inquiétude. Le merveilleux émerveille, le fantastique fait douter et frissonner.",
    },
    {
      titre: "Fantastique ≠ science-fiction",
      illustration: "🚀",
      visuel: "Inexplicable ≠ expliqué par la science",
      contenu: [
        "Science-fiction : l'étrange est expliqué par des sciences ou techniques imaginaires",
        "Vaisseaux, robots, voyages dans le temps : un futur possible",
        "Fantastique : l'étrange reste inexpliqué et angoissant",
        "SF = « et si la science permettait... » ; fantastique = « et si l'impossible surgissait... »",
      ],
      voixOff:
        "Autre voisin à distinguer : la science-fiction. Dans la science-fiction, les événements étranges sont expliqués par des sciences ou des techniques imaginaires : robots, vaisseaux, voyages dans le temps. On imagine un futur possible. Dans le fantastique, rien n'explique l'étrange : il surgit dans notre monde et reste angoissant, sans justification scientifique.",
    },
    {
      titre: "Les ingrédients du récit fantastique",
      illustration: "🌫️",
      visuel: "Nuit + solitude + objet maudit",
      contenu: [
        "Un cadre réaliste, souvent nocturne et isolé (vieille maison, brouillard)",
        "Des thèmes récurrents : fantôme, double, objet maudit, folie, mort",
        "Une montée progressive de l'angoisse",
        "Une fin souvent ouverte : le doute n'est pas levé",
      ],
      voixOff:
        "Le récit fantastique a ses ingrédients favoris. Un cadre réaliste mais propice à la peur : la nuit, une vieille maison isolée, le brouillard. Des thèmes récurrents : le fantôme, le double, l'objet maudit, la folie, la mort. L'angoisse monte progressivement, et la fin reste souvent ouverte : le lecteur referme le livre sans savoir la vérité.",
    },
    {
      titre: "Procédé n°1 : les modalisateurs",
      illustration: "🤔",
      visuel: "« Il me sembla que... »",
      contenu: [
        "Modalisateurs = mots qui expriment le doute, l'incertitude",
        "« peut-être », « il me sembla », « comme si », « je crus voir »",
        "Verbes de perception au conditionnel ou avec « sembler », « paraître »",
        "Ils entretiennent l'hésitation : rien n'est jamais affirmé",
      ],
      voixOff:
        "Premier procédé d'écriture : les modalisateurs. Ce sont tous les mots qui expriment le doute et l'incertitude : peut-être, il me sembla, comme si, je crus voir. Grâce à eux, le narrateur n'affirme jamais rien : il croit voir, il pense entendre. C'est exactement ce qui entretient l'hésitation fantastique chez le lecteur.",
    },
    {
      titre: "Procédé n°2 : la peur et le point de vue interne",
      illustration: "😱",
      visuel: "JE tremble, JE doute",
      contenu: [
        "Champ lexical de la peur : frisson, terreur, angoisse, glacé, trembler...",
        "Récit souvent à la première personne : point de vue interne",
        "Le lecteur ne sait que ce que le narrateur perçoit — il doute avec lui",
        "Ponctuation expressive : points d'exclamation, de suspension, questions",
      ],
      voixOff:
        "Deuxième famille de procédés : tout ce qui fait ressentir la peur. Le champ lexical de la peur d'abord : frisson, terreur, angoisse, glacé. Ensuite le point de vue interne : le récit est souvent raconté à la première personne, si bien que le lecteur ne sait que ce que le narrateur perçoit, et doute avec lui. Enfin, la ponctuation expressive, exclamations et points de suspension, traduit le trouble du personnage.",
    },
    {
      titre: "Les grands auteurs du fantastique",
      illustration: "✒️",
      visuel: "Maupassant • Poe • Gautier",
      contenu: [
        "Guy de Maupassant : Le Horla (1887), La Main — le doute et la folie",
        "Edgar Allan Poe (américain) : Le Chat noir, La Chute de la maison Usher",
        "Théophile Gautier : La Cafetière, Le Pied de momie",
        "Aussi : Prosper Mérimée (La Vénus d'Ille), au XIXe siècle, l'âge d'or du genre",
      ],
      voixOff:
        "Le fantastique connaît son âge d'or au dix-neuvième siècle. En France, Guy de Maupassant écrit Le Horla, le journal d'un homme persuadé qu'un être invisible vit près de lui : folie ou créature réelle ? Théophile Gautier signe La Cafetière et Le Pied de momie, et Prosper Mérimée La Vénus d'Ille. Aux États-Unis, Edgar Allan Poe, traduit par Baudelaire, publie Le Chat noir et La Chute de la maison Usher.",
    },
    {
      titre: "Écrire un début de récit fantastique",
      illustration: "📝",
      visuel: "Réel → détail étrange → doute",
      contenu: [
        "1. Installer un cadre réaliste et précis (lieu, moment, narrateur « je »)",
        "2. Glisser un premier détail étrange, discret",
        "3. Utiliser des modalisateurs et le lexique de la peur",
        "4. Faire douter le narrateur : « avais-je rêvé ? »",
      ],
      voixOff:
        "Pour écrire un début de récit fantastique, suis quatre étapes. D'abord, installe un cadre réaliste et précis, de préférence avec un narrateur qui dit je. Ensuite, glisse un premier détail étrange, discret : un bruit, un reflet, un objet déplacé. Utilise des modalisateurs et le vocabulaire de la peur pour créer le doute. Enfin, fais hésiter ton narrateur : avait-il rêvé, ou était-ce bien réel ?",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Fantastique = surnaturel qui surgit dans le réel + hésitation (Todorov)",
        "Merveilleux : surnaturel accepté ; SF : étrange expliqué par la science",
        "Procédés : modalisateurs, lexique de la peur, point de vue interne, fin ouverte",
        "Auteurs clés : Maupassant, Poe, Gautier (XIXe siècle)",
      ],
      voixOff:
        "Résumons. Le fantastique, c'est l'irruption du surnaturel dans un monde réaliste, et surtout l'hésitation entre explication rationnelle et surnaturelle, comme l'a définie Todorov. Il se distingue du merveilleux, où le surnaturel est accepté, et de la science-fiction, où l'étrange est expliqué par la science. Ses armes : les modalisateurs, le lexique de la peur, le point de vue interne et la fin ouverte. Ses maîtres : Maupassant, Poe et Gautier. Tu es prêt à frissonner... et à écrire !",
    },
  ],
  fiche: {
    intro:
      "Le récit fantastique met en scène l'irruption d'un événement étrange, apparemment surnaturel, dans un monde réaliste. Son ressort essentiel est l'hésitation : le héros et le lecteur ne savent pas s'il faut croire à une explication rationnelle ou surnaturelle.",
    sections: [
      {
        titre: "Définition (d'après Todorov)",
        points: [
          "Cadre réaliste + événement inexplicable = fantastique",
          "Hésitation entre explication rationnelle (rêve, folie, illusion) et surnaturelle (fantôme, malédiction)",
          "Le fantastique dure tant que le doute dure ; la fin reste souvent ouverte",
        ],
      },
      {
        titre: "Fantastique, merveilleux, science-fiction",
        points: [
          "Merveilleux (contes) : le surnaturel est accepté comme normal (fées, ogres) — personne ne s'en étonne",
          "Science-fiction : l'étrange est expliqué par des sciences ou techniques imaginaires (robots, voyage temporel)",
          "Fantastique : l'étrange reste inexpliqué, dans notre monde, et provoque l'angoisse",
        ],
      },
      {
        titre: "Les procédés d'écriture",
        points: [
          "Modalisateurs du doute : « il me sembla », « peut-être », « comme si », « je crus voir »",
          "Champ lexical de la peur : frisson, terreur, angoisse, glacé, trembler",
          "Point de vue interne, souvent à la 1re personne : le lecteur doute avec le narrateur",
          "Ponctuation expressive (! ... ?) et montée progressive de l'angoisse",
        ],
      },
      {
        titre: "Cadres et thèmes récurrents",
        points: [
          "La nuit, la solitude, la vieille demeure, le brouillard, l'orage",
          "Le fantôme, le double, l'objet maudit ou animé, la folie, la mort",
        ],
      },
      {
        titre: "Auteurs et œuvres clés (XIXe siècle)",
        points: [
          "Guy de Maupassant : Le Horla (1887), La Main",
          "Edgar Allan Poe : Le Chat noir, La Chute de la maison Usher (traduit par Baudelaire)",
          "Théophile Gautier : La Cafetière, Le Pied de momie",
          "Prosper Mérimée : La Vénus d'Ille",
        ],
      },
      {
        titre: "Écrire un début de récit fantastique",
        points: [
          "1. Cadre réaliste précis, narrateur à la 1re personne",
          "2. Premier détail étrange, discret",
          "3. Modalisateurs + lexique de la peur pour installer le doute",
          "4. Le narrateur hésite : rêve, folie... ou réalité ?",
        ],
      },
    ],
    audio:
      "Fiche de révision : le récit fantastique. Le fantastique naît de l'irruption d'un événement étrange dans un monde réaliste. Selon le critique Todorov, il repose sur l'hésitation : le héros et le lecteur balancent entre une explication rationnelle, comme le rêve ou la folie, et une explication surnaturelle, comme le fantôme. Il ne faut pas le confondre avec le merveilleux des contes, où le surnaturel est accepté par tous, ni avec la science-fiction, où l'étrange est expliqué par des sciences imaginaires. Pour créer le doute, les auteurs emploient des modalisateurs comme il me sembla ou peut-être, le champ lexical de la peur, et un point de vue interne, souvent à la première personne, qui fait douter le lecteur avec le narrateur. Les maîtres du genre, au dix-neuvième siècle, sont Maupassant avec Le Horla, Edgar Allan Poe avec Le Chat noir, et Théophile Gautier avec La Cafetière. Pour écrire un début fantastique : cadre réaliste, détail étrange, doute.",
  },
  memoCards: [
    {
      recto: "Définition du fantastique ?",
      verso: "L'irruption d'un événement apparemment surnaturel dans un monde réaliste, avec hésitation entre explication rationnelle et surnaturelle.",
    },
    {
      recto: "Qu'est-ce que l'hésitation fantastique (Todorov) ?",
      verso: "Le doute du héros et du lecteur : rêve, folie... ou vrai surnaturel ? Le fantastique dure tant que le doute dure.",
    },
    {
      recto: "Fantastique ou merveilleux ?",
      verso: "Merveilleux : surnaturel accepté par tous (contes de fées). Fantastique : surnaturel qui dérange le réel et inquiète.",
    },
    {
      recto: "Fantastique ou science-fiction ?",
      verso: "SF : l'étrange est expliqué par des sciences ou techniques imaginaires. Fantastique : l'étrange reste inexpliqué.",
    },
    {
      recto: "Qu'est-ce qu'un modalisateur ?",
      verso: "Un mot qui exprime le doute : « il me sembla », « peut-être », « comme si », « je crus voir ».",
    },
    {
      recto: "Pourquoi le point de vue interne ?",
      verso: "Le lecteur ne perçoit que ce que voit le narrateur (souvent « je ») : il doute et a peur avec lui.",
    },
    {
      recto: "Trois mots du champ lexical de la peur ?",
      verso: "Par exemple : frisson, terreur, angoisse (aussi : glacé, trembler, épouvante).",
    },
    {
      recto: "Qui a écrit Le Horla ?",
      verso: "Guy de Maupassant (1887) : le journal d'un homme qui se croit hanté par un être invisible.",
    },
    {
      recto: "Cite un auteur américain du fantastique.",
      verso: "Edgar Allan Poe (Le Chat noir, La Chute de la maison Usher), traduit en français par Baudelaire.",
    },
    {
      recto: "Les 4 étapes d'un début de récit fantastique ?",
      verso: "1. Cadre réaliste. 2. Détail étrange. 3. Modalisateurs + lexique de la peur. 4. Doute du narrateur.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un récit fantastique, l'histoire commence dans un monde :",
      choix: ["entièrement magique", "réaliste, semblable au nôtre", "futuriste", "sans personnages"],
      bonneReponse: 1,
      explication:
        "Le fantastique a besoin d'un cadre réaliste : c'est l'irruption de l'étrange dans ce monde ordinaire qui crée l'inquiétude.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel auteur a écrit Le Horla ?",
      choix: ["Edgar Allan Poe", "Théophile Gautier", "Guy de Maupassant", "Victor Hugo"],
      bonneReponse: 2,
      explication: "Le Horla (1887) est la nouvelle fantastique la plus célèbre de Guy de Maupassant.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois mots appartenant au champ lexical de la peur.",
      reponse: "Par exemple : frisson, terreur, angoisse (ou : épouvante, glacé, trembler, effroi).",
      explication: "Le champ lexical de la peur est l'un des principaux procédés du récit fantastique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Il était une fois une fée qui vivait dans la forêt. » Ce début appartient au :",
      choix: ["fantastique", "merveilleux", "récit policier", "récit de science-fiction"],
      bonneReponse: 1,
      explication:
        "« Il était une fois » et la présence naturelle d'une fée signalent le merveilleux : le surnaturel y est accepté sans étonnement.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans la phrase « Il me sembla que le portrait avait bougé », quel procédé fantastique est utilisé ?",
      choix: ["Une comparaison", "Un modalisateur", "Une énumération", "Un dialogue"],
      bonneReponse: 1,
      explication:
        "« Il me sembla que » est un modalisateur : le narrateur n'affirme pas que le portrait a bougé, il entretient le doute.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique, en une ou deux phrases, la définition du fantastique selon Todorov.",
      reponse: "Pour Todorov, le fantastique repose sur l'hésitation du personnage et du lecteur face à un événement étrange : est-ce une illusion (rêve, folie) ou un vrai phénomène surnaturel ? Le fantastique dure tant que ce doute n'est pas levé.",
      explication: "Si l'explication rationnelle l'emporte, ou si le surnaturel est prouvé, on sort du fantastique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Lis cet extrait inventé : « Minuit sonna. Je crus entendre, derrière la porte du grenier, comme un pas très léger. Mais peut-être n'était-ce que le vent... » Relève deux modalisateurs et explique leur effet.",
      reponse: "Les modalisateurs sont « je crus entendre », « comme » et « peut-être » (deux suffisent). Ils montrent que le narrateur n'est sûr de rien : le lecteur hésite avec lui entre une explication banale (le vent) et une présence inquiétante.",
      explication: "Les modalisateurs sont le moteur de l'hésitation fantastique : ils empêchent toute certitude.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pourquoi le récit fantastique est-il souvent écrit à la première personne ?",
      choix: [
        "Parce que c'est plus court",
        "Pour que le lecteur partage les doutes et la peur du narrateur",
        "Parce que les auteurs racontent leur vraie vie",
        "Pour multiplier les points de vue",
      ],
      bonneReponse: 1,
      explication:
        "Le point de vue interne limite le lecteur aux perceptions du narrateur : impossible de vérifier ce qui est réel, le doute est total.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Classe ces trois situations dans le bon genre (fantastique, merveilleux ou science-fiction) en justifiant : 1. Un ogre parle à un chat botté. 2. En 2250, des robots explorent Mars. 3. Un homme trouve chaque matin sa carafe vide, sans savoir s'il boit en dormant ou si un être invisible vit chez lui.",
      reponse: "1. Merveilleux : le surnaturel (ogre, chat qui parle) est accepté comme normal. 2. Science-fiction : l'étrange est expliqué par la technique dans un futur imaginaire. 3. Fantastique : c'est la situation du Horla de Maupassant, l'hésitation entre explication rationnelle (il boit en dormant) et surnaturelle (un être invisible) n'est pas tranchée.",
      explication: "Le critère décisif est le statut du surnaturel : accepté (merveilleux), expliqué (SF) ou douteux (fantastique).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse ce court extrait inventé : « Ma main tremblait. La statuette, je le jure, avait tourné la tête vers moi — à moins que la fièvre ne m'ait égaré. Une sueur glacée me couvrit le front. » Relève : a) un élément du champ lexical de la peur ; b) le passage qui maintient l'hésitation fantastique.",
      reponse: "a) « Ma main tremblait » et « une sueur glacée » relèvent du champ lexical de la peur. b) « à moins que la fièvre ne m'ait égaré » maintient l'hésitation : l'explication rationnelle (la fièvre, le délire) reste possible face à l'explication surnaturelle (la statuette animée).",
      explication: "Un bon texte fantastique fait toujours coexister les deux explications sans trancher.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Laquelle de ces fins conserve le mieux le registre fantastique ?",
      choix: [
        "Le héros découvre que son voisin faisait les bruits pour lui faire peur.",
        "Une fée apparaît et explique tout au héros.",
        "Le héros ne saura jamais si la lettre s'est déplacée seule ou s'il l'a bougée dans son sommeil.",
        "Des scientifiques prouvent que la maison était traversée d'ondes magnétiques.",
      ],
      bonneReponse: 2,
      explication:
        "Le fantastique exige que le doute ne soit pas levé. Les autres fins donnent une explication rationnelle, merveilleuse ou scientifique : elles font sortir du genre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris un début de récit fantastique de 4 à 6 phrases : cadre réaliste, un détail étrange, au moins deux modalisateurs et un mot du champ lexical de la peur.",
      reponse: "Exemple de corrigé : « Ce soir de novembre, je corrigeais mes copies dans la maison silencieuse de ma grand-mère. Vers onze heures, il me sembla percevoir un grattement derrière le mur de la bibliothèque. Je posai mon stylo, le cœur serré d'une sourde angoisse. Peut-être n'était-ce qu'une souris ; pourtant, le vieux miroir parut se troubler, comme si une silhouette y glissait. Je me frottai les yeux : avais-je rêvé ? »",
      explication: "On vérifie les critères : cadre réaliste (maison, copies, novembre), détail étrange (grattement, miroir), modalisateurs (« il me sembla », « peut-être », « parut », « comme si »), lexique de la peur (« angoisse », « cœur serré »), doute final.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le ressort essentiel du fantastique est :",
      choix: ["le rire", "l'hésitation entre rationnel et surnaturel", "la magie acceptée par tous", "le progrès scientifique"],
      bonneReponse: 1,
      explication: "C'est la définition de Todorov : le fantastique dure tant que le doute dure.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la grande différence entre le fantastique et le merveilleux ?",
      reponse: "Dans le merveilleux, le surnaturel est accepté comme normal ; dans le fantastique, il fait irruption dans un monde réaliste et provoque doute et inquiétude.",
      explication: "Personne ne s'étonne d'une fée dans un conte ; tout le monde s'inquiète d'un miroir hanté dans une nouvelle fantastique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne deux exemples de modalisateurs.",
      reponse: "Par exemple : « il me sembla », « peut-être » (ou « comme si », « je crus voir », « sans doute »).",
      explication: "Les modalisateurs expriment le doute et empêchent toute certitude.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Associe correctement auteur et œuvre :",
      choix: [
        "Maupassant — Le Chat noir",
        "Poe — Le Horla",
        "Gautier — La Cafetière",
        "Poe — Le Pied de momie",
      ],
      bonneReponse: 2,
      explication: "La Cafetière est de Théophile Gautier. Le Horla est de Maupassant, Le Chat noir de Poe, Le Pied de momie de Gautier.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi la fin d'un récit fantastique est-elle souvent ouverte ?",
      reponse: "Parce que lever le doute ferait sortir du fantastique : la fin ouverte laisse le lecteur hésiter entre l'explication rationnelle et l'explication surnaturelle.",
      explication: "Le doute non résolu est la signature du genre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le récit fantastique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le fantastique connaît son âge d'or :",
          choix: ["au Moyen Âge", "au XVIIe siècle", "au XIXe siècle", "au XXIe siècle"],
          bonneReponse: 2,
          explication: "Le XIXe siècle est le grand siècle du fantastique : Maupassant, Poe, Gautier, Mérimée.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite deux thèmes récurrents du récit fantastique.",
          reponse: "Par exemple : le fantôme et l'objet maudit (ou : le double, la folie, la mort, la maison hantée).",
          explication: "Ces thèmes permettent l'irruption de l'inexplicable dans le quotidien.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« En 2300, le professeur Lan répara le moteur temporel de sa navette. » Pourquoi cette phrase n'est-elle PAS fantastique ?",
          choix: [
            "Parce qu'il n'y a pas de peur",
            "Parce que l'étrange y est expliqué par une technique imaginaire : c'est de la science-fiction",
            "Parce qu'elle est au passé simple",
            "Parce qu'il y a un personnage savant",
          ],
          bonneReponse: 1,
          explication: "Machine temporelle, futur, technique imaginaire : tous les indices de la science-fiction, où l'étrange est expliqué.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans l'extrait inventé « Je crus distinguer, dans l'ombre du couloir, une forme qui n'avait rien d'humain ; la terreur me cloua sur place », relève un modalisateur et un mot du champ lexical de la peur.",
          reponse: "Modalisateur : « je crus distinguer ». Champ lexical de la peur : « la terreur » (on peut aussi accepter « me cloua sur place » comme manifestation physique de la peur).",
          explication: "Le modalisateur maintient le doute sur la réalité de la forme ; le lexique de la peur fait partager l'angoisse du narrateur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi le point de vue interne renforce l'effet fantastique.",
          reponse: "Avec le point de vue interne, souvent à la première personne, le lecteur ne connaît que les perceptions et les pensées du narrateur. Il ne peut pas vérifier les faits de l'extérieur : si le narrateur doute ou délire, le lecteur doute avec lui.",
          explication: "Impossible de trancher entre hallucination et réalité quand on ne voit que par les yeux du personnage.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige la suite (3 à 4 phrases) de ce début, en conservant le registre fantastique : « La vieille pendule du salon s'arrêta à minuit précise. »",
          reponse: "Exemple de corrigé : « Je voulus la remonter, mais mes doigts se glacèrent au contact du bois : il me sembla qu'un souffle traversait la pièce close. Peut-être la fenêtre était-elle mal fermée. Pourtant, dans le silence, je crus entendre la pendule battre de nouveau — non pas des secondes, mais comme les pulsations sourdes d'un cœur. Je reculai, saisi d'effroi, sans oser me retourner. »",
          explication: "On attend : des modalisateurs (« il me sembla », « peut-être », « je crus », « comme »), du lexique de la peur (« glacèrent », « effroi »), le maintien du doute entre explication rationnelle et surnaturelle.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le récit fantastique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel critique a défini le fantastique par l'hésitation ?",
          choix: ["Baudelaire", "Tzvetan Todorov", "Maupassant", "Lejeune"],
          bonneReponse: 1,
          explication: "Tzvetan Todorov a défini le fantastique comme le temps de l'hésitation entre explication rationnelle et surnaturelle.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Associe chaque auteur à une de ses œuvres : Maupassant, Poe, Gautier.",
          reponse: "Maupassant : Le Horla (ou La Main). Poe : Le Chat noir (ou La Chute de la maison Usher). Gautier : La Cafetière (ou Le Pied de momie).",
          explication: "Trois maîtres du fantastique au XIXe siècle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel élément n'appartient PAS au cadre typique du récit fantastique ?",
          choix: ["Une vieille demeure isolée", "La nuit et le brouillard", "Un royaume peuplé de dragons familiers", "La solitude du héros"],
          bonneReponse: 2,
          explication: "Un royaume où les dragons sont familiers relève du merveilleux : le surnaturel y est accepté, il n'y a pas d'hésitation.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans Le Horla, le narrateur trouve sa carafe d'eau vide chaque matin. Quelles sont les deux explications entre lesquelles il hésite ?",
          reponse: "L'explication rationnelle : il boit lui-même en dormant, il est somnambule ou fou. L'explication surnaturelle : un être invisible, le Horla, vit auprès de lui et boit à sa place.",
          explication: "Cette hésitation jamais tranchée fait du Horla le modèle du récit fantastique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Transforme cette phrase neutre en phrase fantastique à l'aide d'un modalisateur et d'un mot de peur : « La porte s'est ouverte. »",
          reponse: "Exemple de corrigé : « Il me sembla que la porte s'ouvrait lentement, seule, et un frisson d'épouvante me parcourut. »",
          explication: "Le modalisateur (« il me sembla ») retire toute certitude ; le lexique de la peur (« frisson », « épouvante ») installe l'angoisse.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade termine son récit ainsi : « En fait, c'était mon frère qui bougeait les meubles pour me faire une blague. » Explique-lui pourquoi sa fin détruit le fantastique et propose-lui une fin plus adaptée.",
          reponse: "Sa fin donne une explication rationnelle certaine : le doute est levé, on sort du fantastique. Une fin adaptée maintiendrait l'hésitation, par exemple : « Mon frère jura n'avoir jamais quitté sa chambre. Aujourd'hui encore, je ne sais si mes yeux m'ont trompé cette nuit-là. »",
          explication: "La règle d'or du genre : ne jamais trancher entre le rationnel et le surnaturel.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le fantastique = un événement apparemment surnaturel qui surgit dans un monde réaliste.",
    "Définition de Todorov : le fantastique repose sur l'hésitation entre explication rationnelle et surnaturelle ; il dure tant que le doute dure.",
    "Merveilleux : surnaturel accepté (contes) ; science-fiction : étrange expliqué par la science ; fantastique : étrange inexpliqué et inquiétant.",
    "Procédés clés : modalisateurs (« il me sembla », « peut-être »), champ lexical de la peur, point de vue interne à la 1re personne, fin ouverte.",
    "Auteurs à connaître : Maupassant (Le Horla), Poe (Le Chat noir), Gautier (La Cafetière) — XIXe siècle.",
    "Erreur classique à éviter : confondre fantastique et merveilleux, ou terminer son récit par une explication certaine qui lève le doute.",
  ],
};

export default chapitre;
