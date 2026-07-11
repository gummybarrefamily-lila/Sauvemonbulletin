import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "classes-grammaticales",
  titre: "Les classes grammaticales",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Reconnaître la classe grammaticale d'un mot : les cinq classes variables (nom, déterminant, adjectif, pronom, verbe) et les quatre classes invariables (adverbe, préposition, conjonction, interjection), avec les pièges à éviter.",
  objectifs: [
    "Distinguer classe grammaticale (nature) et fonction d'un mot",
    "Connaître les cinq classes de mots variables",
    "Connaître les quatre classes de mots invariables",
    "Savoir identifier la classe d'un mot grâce à des tests simples",
    "Déjouer les pièges : un même mot peut appartenir à plusieurs classes",
  ],
  slides: [
    {
      titre: "Classe grammaticale : la carte d'identité du mot",
      illustration: "🪪",
      visuel: "Nature ≠ fonction",
      contenu: [
        "La classe grammaticale (ou nature) dit ce qu'EST un mot",
        "La fonction dit ce qu'il FAIT dans la phrase",
        "« Chat » est un nom (nature), il peut être sujet ou COD (fonction)",
        "La classe se vérifie dans le dictionnaire, la fonction non",
      ],
      voixOff:
        "La classe grammaticale, qu'on appelle aussi la nature, c'est la carte d'identité d'un mot : elle dit ce qu'il est. La fonction, elle, dit ce qu'il fait dans la phrase. Le mot chat est toujours un nom, mais selon la phrase, il peut être sujet ou complément. Retiens bien : la nature est indiquée dans le dictionnaire, la fonction change avec la phrase.",
    },
    {
      titre: "Variable ou invariable ?",
      illustration: "🔀",
      visuel: "5 variables + 4 invariables",
      contenu: [
        "Mots variables : ils changent de forme (genre, nombre, personne...)",
        "Nom, déterminant, adjectif, pronom, verbe",
        "Mots invariables : ils s'écrivent toujours pareil",
        "Adverbe, préposition, conjonction, interjection",
      ],
      voixOff:
        "On classe les mots en deux grandes familles. Les mots variables changent de forme : ils s'accordent en genre, en nombre, ou se conjuguent. Ce sont le nom, le déterminant, l'adjectif, le pronom et le verbe. Les mots invariables, eux, s'écrivent toujours de la même façon : l'adverbe, la préposition, la conjonction et l'interjection.",
    },
    {
      titre: "Le nom et le déterminant",
      illustration: "🏷️",
      visuel: "le chat, une idée, la France",
      contenu: [
        "Le nom désigne un être, une chose, une idée : chat, table, courage",
        "Nom commun (chat) ou nom propre (Paris, Léa)",
        "Le déterminant introduit le nom : le, une, ces, mon, deux...",
        "Test : un nom accepte presque toujours un déterminant devant lui",
      ],
      voixOff:
        "Le nom désigne un être, une chose ou même une idée abstraite comme le courage. Il peut être commun ou propre. Le déterminant est le petit mot placé devant le nom pour l'introduire : le, une, ces, mon. Un test très pratique : si tu peux mettre un déterminant devant un mot, c'est presque toujours un nom.",
    },
    {
      titre: "L'adjectif qualificatif",
      illustration: "🎨",
      visuel: "un ciel bleu → des mers bleues",
      contenu: [
        "L'adjectif donne une caractéristique du nom : grand, bleu, curieux",
        "Il s'accorde en genre et en nombre avec le nom",
        "Test : on peut souvent l'encadrer par « très... » (très grand)",
        "Il peut être épithète (un chat noir) ou attribut (le chat est noir)",
      ],
      voixOff:
        "L'adjectif qualificatif précise une caractéristique du nom : un ciel bleu, une élève curieuse. Il s'accorde en genre et en nombre avec le nom qu'il qualifie. Petit test : on peut souvent placer très devant un adjectif, comme très grand ou très curieux. Attention, épithète et attribut sont ses fonctions, pas sa nature.",
    },
    {
      titre: "Le pronom",
      illustration: "🔁",
      visuel: "Léa lit. → Elle lit.",
      contenu: [
        "Le pronom remplace un nom ou un groupe nominal",
        "Pronoms personnels : je, tu, il, nous, le, lui...",
        "Autres pronoms : celui-ci, le mien, qui, chacun...",
        "Il évite les répétitions : « Léa lit un livre. Elle l'adore. »",
      ],
      voixOff:
        "Le pronom sert à remplacer un nom ou un groupe nominal, souvent pour éviter une répétition. Dans Léa lit un livre, elle l'adore, le pronom elle remplace Léa, et le pronom l' remplace le livre. Il existe plusieurs sortes de pronoms : personnels, démonstratifs, possessifs, relatifs ou encore indéfinis.",
    },
    {
      titre: "Le verbe",
      illustration: "🏃",
      visuel: "courir → je cours, nous courions",
      contenu: [
        "Le verbe exprime une action (courir) ou un état (être, sembler)",
        "C'est le seul mot qui se conjugue",
        "Test : on peut changer sa personne ou son temps",
        "« Je mange » → « nous mangions » : mange est bien un verbe",
      ],
      voixOff:
        "Le verbe exprime une action, comme courir, ou un état, comme être ou sembler. C'est le seul mot de la langue qui se conjugue. Pour le repérer, change la personne ou le temps de la phrase : si le mot se transforme, c'est un verbe. Je mange devient nous mangions : mange est bien un verbe.",
    },
    {
      titre: "L'adverbe et la préposition",
      illustration: "🧭",
      visuel: "Il court vite. / Il court vers la mer.",
      contenu: [
        "L'adverbe modifie un verbe, un adjectif ou un autre adverbe : vite, très, hier",
        "Beaucoup d'adverbes se terminent en -ment : lentement, vraiment",
        "La préposition introduit un complément : à, de, pour, sans, chez, vers...",
        "Moyen mnémotechnique : « Adam part pour Anvers avec deux cents sous »",
      ],
      voixOff:
        "L'adverbe est un mot invariable qui modifie le sens d'un verbe, d'un adjectif ou d'un autre adverbe : il court vite, il est très grand. Beaucoup se terminent en ment. La préposition, elle, introduit un complément : à, de, pour, sans, chez. Pour retenir les principales, pense à la phrase Adam part pour Anvers avec deux cents sous.",
    },
    {
      titre: "Conjonctions et interjection",
      illustration: "🔗",
      visuel: "mais, ou, et, donc, or, ni, car",
      contenu: [
        "Conjonction de coordination : relie des éléments de même niveau (mais, ou, et, donc, or, ni, car)",
        "Conjonction de subordination : introduit une proposition subordonnée (que, quand, parce que, si...)",
        "L'interjection exprime une émotion : Ah ! Oh ! Hélas ! Aïe !",
        "Toutes sont invariables",
      ],
      voixOff:
        "Les conjonctions relient des éléments entre eux. Les conjonctions de coordination, mais, ou, et, donc, or, ni, car, relient des mots ou des propositions de même niveau. Les conjonctions de subordination, comme que, quand ou parce que, introduisent une proposition subordonnée. Enfin, l'interjection exprime une émotion : ah, hélas, aïe ! Tous ces mots sont invariables.",
    },
    {
      titre: "Les pièges : un mot, plusieurs classes",
      illustration: "⚠️",
      visuel: "Il ferme la porte. / Une porte fermée. / La ferme.",
      contenu: [
        "Un même mot peut changer de classe selon la phrase !",
        "« ferme » : verbe (il ferme), nom (la ferme), adjectif (un ton ferme)",
        "« que » : pronom relatif, conjonction... ; « la » : déterminant ou pronom",
        "Toujours observer le mot DANS sa phrase, jamais tout seul",
      ],
      voixOff:
        "Attention au piège classique : un même mot peut appartenir à plusieurs classes selon la phrase. Ferme est un verbe dans il ferme la porte, un nom dans la ferme de mon oncle, et un adjectif dans un ton ferme. De même, la est déterminant devant un nom, mais pronom devant un verbe, comme dans je la vois. Il faut donc toujours observer le mot dans sa phrase, jamais isolé.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Classe grammaticale = nature du mot (fixe, dans le dictionnaire)",
        "5 classes variables : nom, déterminant, adjectif, pronom, verbe",
        "4 classes invariables : adverbe, préposition, conjonction, interjection",
        "Un même mot peut changer de classe : on l'analyse dans sa phrase",
      ],
      voixOff:
        "Résumons. La classe grammaticale, c'est la nature du mot, celle que donne le dictionnaire. Il existe cinq classes variables : le nom, le déterminant, l'adjectif, le pronom et le verbe. Et quatre classes invariables : l'adverbe, la préposition, la conjonction et l'interjection. Dernier réflexe à garder : un même mot peut changer de classe selon la phrase, alors analyse-le toujours en contexte. Bravo, tu maîtrises l'essentiel !",
    },
  ],
  fiche: {
    intro:
      "La classe grammaticale (ou nature) d'un mot dit ce qu'il est : nom, verbe, adverbe... Elle ne doit pas être confondue avec la fonction, qui dit ce que le mot fait dans la phrase (sujet, COD...).",
    sections: [
      {
        titre: "Les 5 classes variables",
        points: [
          "Nom : désigne un être, une chose, une idée (chat, Paris, courage)",
          "Déterminant : introduit le nom (le, une, ces, mon, deux)",
          "Adjectif : caractérise le nom et s'accorde avec lui (bleu, curieux)",
          "Pronom : remplace un nom ou un groupe nominal (elle, celui-ci, qui)",
          "Verbe : exprime une action ou un état, seul mot qui se conjugue",
        ],
      },
      {
        titre: "Les 4 classes invariables",
        points: [
          "Adverbe : modifie un verbe, un adjectif ou un adverbe (vite, très, lentement)",
          "Préposition : introduit un complément (à, de, pour, sans, chez, vers)",
          "Conjonction : de coordination (mais, ou, et, donc, or, ni, car) ou de subordination (que, quand, parce que, si)",
          "Interjection : exprime une émotion (Ah ! Hélas ! Aïe !)",
        ],
      },
      {
        titre: "Tests pour identifier une classe",
        points: [
          "Nom : on peut placer un déterminant devant (le/une + mot)",
          "Adjectif : on peut souvent ajouter « très » devant",
          "Verbe : il change si on change le temps ou la personne",
          "Adverbe : invariable, on peut souvent le supprimer sans rendre la phrase incorrecte",
        ],
      },
      {
        titre: "Pièges classiques",
        points: [
          "Un même mot peut avoir plusieurs classes : « ferme » (verbe, nom, adjectif)",
          "« la » : déterminant (la porte) ou pronom (je la vois)",
          "« que » : pronom relatif (le livre que je lis) ou conjonction (je crois que...)",
          "« tout » : déterminant, pronom ou adverbe selon la phrase",
        ],
      },
      {
        titre: "Méthode d'analyse",
        points: [
          "1. Observer le mot dans sa phrase, jamais isolé",
          "2. Regarder les mots qui l'entourent (déterminant ? verbe ?)",
          "3. Appliquer un test (remplacement, ajout de « très », changement de temps)",
          "4. Donner la classe précise (ex. pronom personnel, déterminant possessif)",
        ],
      },
    ],
    audio:
      "Fiche de révision : les classes grammaticales. La classe grammaticale, ou nature, dit ce qu'est un mot ; la fonction dit ce qu'il fait dans la phrase. Il existe cinq classes variables. Le nom désigne un être, une chose ou une idée. Le déterminant introduit le nom. L'adjectif caractérise le nom et s'accorde avec lui. Le pronom remplace un nom ou un groupe nominal. Le verbe exprime une action ou un état : c'est le seul mot qui se conjugue. Il existe aussi quatre classes invariables. L'adverbe modifie un verbe, un adjectif ou un autre adverbe. La préposition introduit un complément, comme à, de, pour ou sans. La conjonction relie des éléments : mais, ou, et, donc, or, ni, car pour la coordination. L'interjection exprime une émotion. Attention au piège principal : un même mot peut changer de classe selon la phrase, comme ferme, qui peut être verbe, nom ou adjectif. Analyse donc toujours le mot dans son contexte.",
  },
  memoCards: [
    {
      recto: "Classe grammaticale ou fonction ?",
      verso: "La classe (nature) dit ce qu'EST le mot (nom, verbe...) ; la fonction dit ce qu'il FAIT (sujet, COD...).",
    },
    {
      recto: "Les 5 classes variables ?",
      verso: "Nom, déterminant, adjectif, pronom, verbe.",
    },
    {
      recto: "Les 4 classes invariables ?",
      verso: "Adverbe, préposition, conjonction, interjection.",
    },
    {
      recto: "Comment reconnaître un verbe ?",
      verso: "C'est le seul mot qui se conjugue : il change si on change le temps ou la personne.",
    },
    {
      recto: "Comment reconnaître un adjectif ?",
      verso: "Il caractérise un nom, s'accorde avec lui, et on peut souvent placer « très » devant.",
    },
    {
      recto: "Les 7 conjonctions de coordination ?",
      verso: "Mais, ou, et, donc, or, ni, car.",
    },
    {
      recto: "Que fait une préposition ?",
      verso: "Elle introduit un complément : à, de, pour, sans, chez, vers, avec...",
    },
    {
      recto: "« la » : déterminant ou pronom ?",
      verso: "Déterminant devant un nom (la porte) ; pronom devant un verbe (je la vois).",
    },
    {
      recto: "« ferme » peut être de quelles classes ?",
      verso: "Verbe (il ferme), nom (la ferme), adjectif (un ton ferme). Toujours analyser en contexte !",
    },
    {
      recto: "Que fait un adverbe ?",
      verso: "Mot invariable qui modifie un verbe, un adjectif ou un autre adverbe : vite, très, lentement.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la classe grammaticale du mot « courage » ?",
      choix: ["Verbe", "Adjectif", "Nom", "Adverbe"],
      bonneReponse: 2,
      explication:
        "« Courage » désigne une idée : c'est un nom commun. Le test fonctionne : on peut dire « le courage ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans « Léa mange une pomme », quelle est la classe de « une » ?",
      choix: ["Pronom", "Déterminant", "Adjectif", "Préposition"],
      bonneReponse: 1,
      explication: "« Une » introduit le nom « pomme » : c'est un déterminant (article indéfini).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les quatre classes de mots invariables.",
      reponse: "L'adverbe, la préposition, la conjonction et l'interjection.",
      explication: "Ces mots s'écrivent toujours de la même façon : ils ne s'accordent pas et ne se conjuguent pas.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel mot de la liste est un adverbe ?",
      choix: ["rapide", "rapidement", "rapidité", "rapides"],
      bonneReponse: 1,
      explication:
        "« Rapidement » est un adverbe en -ment, invariable. « Rapide » est un adjectif et « rapidité » un nom.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Je la regarde », quelle est la classe de « la » ?",
      choix: ["Déterminant", "Pronom", "Nom", "Conjonction"],
      bonneReponse: 1,
      explication:
        "Placé devant le verbe « regarde », « la » remplace un nom : c'est un pronom personnel, pas un déterminant.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne la classe grammaticale de chaque mot souligné : « Il marche vers la rivière » (vers) ; « Hélas ! Tout est perdu » (Hélas).",
      reponse: "« Vers » est une préposition (elle introduit le complément « la rivière ») ; « Hélas » est une interjection (elle exprime une émotion).",
      explication: "La préposition introduit un complément ; l'interjection exprime un sentiment et est souvent suivie d'un point d'exclamation.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans « Cette histoire est vraiment passionnante », donne la classe de « vraiment » et de « passionnante ».",
      reponse: "« Vraiment » est un adverbe (il modifie l'adjectif « passionnante ») ; « passionnante » est un adjectif qualificatif (il caractérise le nom « histoire »).",
      explication: "L'adverbe est invariable et modifie ici un adjectif ; l'adjectif s'accorde au féminin singulier avec « histoire ».",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Je pense que tu réussiras », quelle est la classe de « que » ?",
      choix: ["Pronom relatif", "Conjonction de subordination", "Adverbe", "Déterminant"],
      bonneReponse: 1,
      explication:
        "Ici « que » introduit la proposition subordonnée « que tu réussiras » après le verbe « pense » : c'est une conjonction de subordination. Dans « le livre que je lis », ce serait un pronom relatif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Donne la classe de « ferme » dans chacune de ces trois phrases : 1. « Ma tante habite une ferme. » 2. « Ferme la fenêtre ! » 3. « Elle a répondu d'une voix ferme. »",
      reponse: "1. Nom (précédé du déterminant « une »). 2. Verbe (à l'impératif : on peut dire « fermez »). 3. Adjectif (il caractérise le nom « voix » ; on peut dire « très ferme »).",
      explication: "C'est le piège classique : un même mot change de classe selon la phrase. Les tests (déterminant, conjugaison, « très ») permettent de trancher.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Dans « Tout le village dort ; tout est calme ; elle est tout étonnée », donne la classe de « tout » dans chaque emploi.",
      reponse: "1. Déterminant (il accompagne « le village »). 2. Pronom (il est sujet du verbe « est »). 3. Adverbe (il modifie l'adjectif « étonnée » et signifie « tout à fait »).",
      explication: "« Tout » est l'un des mots les plus polyvalents du français : déterminant, pronom ou adverbe selon le contexte.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Le rire est le propre de l'homme », quelle est la classe de « rire » ?",
      choix: ["Verbe", "Nom", "Adjectif", "Adverbe"],
      bonneReponse: 1,
      explication:
        "Précédé du déterminant « le », « rire » est ici un nom. C'est un verbe à l'infinitif devenu nom : le déterminant est l'indice décisif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse la phrase « Mais elle attendait patiemment son tour » : donne la classe grammaticale de chacun des six mots.",
      reponse: "« Mais » : conjonction de coordination. « Elle » : pronom personnel. « Attendait » : verbe (attendre, à l'imparfait). « Patiemment » : adverbe. « Son » : déterminant possessif. « Tour » : nom commun.",
      explication: "On analyse mot à mot en s'appuyant sur les tests : « elle » remplace un nom, « attendait » se conjugue, « patiemment » est invariable en -ment, « son » introduit le nom « tour ».",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien y a-t-il de classes de mots variables ?",
      choix: ["3", "4", "5", "9"],
      bonneReponse: 2,
      explication: "Cinq : nom, déterminant, adjectif, pronom, verbe.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle est la seule classe de mots qui se conjugue ?",
      reponse: "Le verbe.",
      explication: "Si un mot change quand on change le temps ou la personne, c'est un verbe.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Il court vite », « vite » est :",
      choix: ["un adjectif", "un adverbe", "une préposition", "un nom"],
      bonneReponse: 1,
      explication: "« Vite » est invariable et modifie le verbe « court » : c'est un adverbe.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans « Je la vois » et « la mer », quelle est la classe de « la » dans chaque cas ?",
      reponse: "Pronom personnel dans « je la vois » (devant un verbe) ; déterminant dans « la mer » (devant un nom).",
      explication: "La position du mot (devant un verbe ou devant un nom) permet de trancher.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Récite les sept conjonctions de coordination.",
      reponse: "Mais, ou, et, donc, or, ni, car.",
      explication: "Elles relient des mots ou des propositions de même niveau.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les classes grammaticales",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La classe grammaticale d'un mot est aussi appelée :",
          choix: ["sa fonction", "sa nature", "son accord", "son radical"],
          bonneReponse: 1,
          explication: "Classe grammaticale et nature sont deux noms pour la même chose : ce qu'est le mot.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite les cinq classes de mots variables.",
          reponse: "Le nom, le déterminant, l'adjectif, le pronom et le verbe.",
          explication: "Ce sont les mots qui changent de forme : accord en genre et en nombre, ou conjugaison.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Nous partons chez nos cousins », « chez » est :",
          choix: ["un adverbe", "une préposition", "une conjonction", "un déterminant"],
          bonneReponse: 1,
          explication: "« Chez » introduit le complément « nos cousins » : c'est une préposition.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans « Le vieux chêne perdait lentement ses feuilles », donne la classe de « vieux », « lentement » et « ses ».",
          reponse: "« Vieux » : adjectif qualificatif (il caractérise « chêne »). « Lentement » : adverbe (il modifie « perdait »). « Ses » : déterminant possessif (il introduit « feuilles »).",
          explication: "L'adjectif accepte « très » devant lui, l'adverbe en -ment est invariable, et le déterminant précède toujours un nom.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre la classe grammaticale et la fonction d'un mot, avec un exemple.",
          reponse: "La classe dit ce qu'est le mot (elle ne change pas et figure dans le dictionnaire) ; la fonction dit ce qu'il fait dans la phrase (elle change selon la phrase). Exemple : « chat » est toujours un nom, mais il est sujet dans « Le chat dort » et COD dans « Je vois le chat ».",
          explication: "C'est la distinction fondamentale du chapitre : nature = identité, fonction = rôle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Donne la classe de « que » dans : 1. « Le film que tu regardes est long. » 2. « Je sais que tu viendras. »",
          reponse: "1. Pronom relatif : il remplace « le film » et introduit une proposition subordonnée relative. 2. Conjonction de subordination : il introduit la subordonnée complétive « que tu viendras » et ne remplace rien.",
          explication: "Le test : si « que » remplace un nom déjà cité (son antécédent), c'est un pronom relatif ; sinon, c'est une conjonction.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les classes grammaticales",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel mot est invariable ?",
          choix: ["cheval", "joyeux", "toujours", "celui-ci"],
          bonneReponse: 2,
          explication: "« Toujours » est un adverbe : il s'écrit toujours de la même façon.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans « Aïe ! Je me suis pincé le doigt », quelle est la classe de « Aïe » ?",
          reponse: "Une interjection.",
          explication: "Elle exprime une émotion (la douleur) et est suivie d'un point d'exclamation.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans « Elle semble fatiguée », « semble » est :",
          choix: ["un adjectif", "un adverbe", "un verbe", "un nom"],
          bonneReponse: 2,
          explication: "« Semble » se conjugue (« elles semblaient ») : c'est un verbe, ici un verbe d'état.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quel test simple permet de vérifier qu'un mot est un nom ? Applique-le au mot « liberté ».",
          reponse: "On essaie de placer un déterminant devant le mot. « La liberté » fonctionne : « liberté » est donc un nom.",
          explication: "Le nom est presque toujours précédé (ou précédable) d'un déterminant.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Dans « Le dîner refroidit » et « Nous allons dîner », le mot « dîner » a-t-il la même classe ? Justifie.",
          reponse: "Non. Dans « Le dîner refroidit », « dîner » est un nom (précédé du déterminant « le »). Dans « Nous allons dîner », c'est un verbe à l'infinitif (après « aller », on peut le remplacer par un autre infinitif comme « partir »).",
          explication: "Même forme, deux classes : le contexte et les tests (déterminant, remplacement) permettent de trancher.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse la phrase « Or, ils avancèrent prudemment vers cette grotte sombre » : donne la classe de « or », « prudemment », « vers » et « sombre ».",
          reponse: "« Or » : conjonction de coordination. « Prudemment » : adverbe (invariable, en -ment). « Vers » : préposition (elle introduit « cette grotte sombre »). « Sombre » : adjectif qualificatif (il caractérise « grotte »).",
          explication: "On retrouve trois classes invariables et un adjectif : « or » fait partie de la liste mais, ou, et, donc, or, ni, car.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La classe grammaticale (nature) dit ce qu'EST un mot ; la fonction dit ce qu'il FAIT dans la phrase.",
    "5 classes variables : nom, déterminant, adjectif, pronom, verbe.",
    "4 classes invariables : adverbe, préposition, conjonction, interjection.",
    "Tests utiles : déterminant devant → nom ; « très » devant → adjectif ; se conjugue → verbe.",
    "Les 7 conjonctions de coordination : mais, ou, et, donc, or, ni, car.",
    "Erreur classique à éviter : donner la classe d'un mot sans regarder sa phrase — « ferme », « la » ou « tout » changent de classe selon le contexte.",
  ],
};

export default chapitre;
