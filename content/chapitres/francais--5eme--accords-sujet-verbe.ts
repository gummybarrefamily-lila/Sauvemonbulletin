import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "accords-sujet-verbe",
  titre: "Les accords sujet-verbe et dans le GN",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Maîtriser l'accord du verbe avec son sujet, même éloigné ou inversé, connaître les cas particuliers piégeux (sujets coordonnés, « qui », « on », vouvoiement) et savoir accorder tous les éléments du groupe nominal.",
  objectifs: [
    "Accorder le verbe avec son sujet en personne et en nombre",
    "Repérer le sujet même lorsqu'il est éloigné ou inversé",
    "Maîtriser les cas particuliers de l'accord sujet-verbe (sujets coordonnés, « qui », sujets collectifs, « on », vouvoiement)",
    "Accorder correctement le déterminant, le nom et l'adjectif dans le groupe nominal",
    "Reconnaître les cas particuliers du GN, notamment les adjectifs de couleur composés",
  ],
  slides: [
    {
      titre: "La règle générale : le verbe s'accorde avec son sujet",
      illustration: "🎯",
      visuel: "Les enfants jouent.",
      contenu: [
        "Le verbe s'accorde toujours avec son sujet, jamais avec un autre mot de la phrase",
        "L'accord se fait en personne (1re, 2e, 3e) et en nombre (singulier ou pluriel)",
        "Pour trouver le sujet, on pose la question « qui est-ce qui » ou « qu'est-ce qui » devant le verbe",
        "« Les enfants jouent » : le sujet pluriel impose un verbe à la 3e personne du pluriel",
      ],
      voixOff:
        "Retiens bien cette règle d'or : le verbe s'accorde toujours avec son sujet, et seulement avec lui. Cet accord se fait en personne et en nombre. Pour repérer le sujet, pose la question qui est-ce qui, ou qu'est-ce qui, juste avant le verbe. Dans la phrase les enfants jouent, le sujet les enfants est au pluriel, donc jouer se conjugue à la troisième personne du pluriel : ils jouent.",
    },
    {
      titre: "Retrouver le sujet, même caché",
      illustration: "🔍",
      visuel: "Sur la branche chantent les oiseaux.",
      contenu: [
        "Le sujet n'est pas toujours juste devant le verbe",
        "Il peut être éloigné par un mot ou un groupe intercalé : « Le chat, malgré la pluie, sort. »",
        "Il peut être inversé, placé après le verbe : « Sur la branche chantent les oiseaux. »",
        "Méthode infaillible : pose toujours la question « qui est-ce qui + verbe ? »",
      ],
      voixOff:
        "Attention, le sujet n'est pas toujours collé au verbe ! Un groupe de mots peut s'intercaler entre les deux, comme dans le chat, malgré la pluie, sort. Le sujet peut aussi être inversé, c'est-à-dire placé après le verbe, surtout à l'écrit soigné : sur la branche chantent les oiseaux. Dans tous les cas, la méthode reste la même : pose la question qui est-ce qui devant le verbe pour retrouver son vrai sujet.",
    },
    {
      titre: "Sujets coordonnés : le verbe au pluriel",
      illustration: "➕",
      visuel: "Le chien et le chat dorment.",
      contenu: [
        "Deux ou plusieurs sujets reliés par « et » forment un sujet pluriel",
        "Le verbe se met alors au pluriel, même si chaque sujet pris seul est singulier",
        "« Le chien et le chat dorment » : deux sujets singuliers, un verbe pluriel",
        "Si l'un des sujets est « je » ou « tu », c'est la personne qui l'emporte : « Toi et moi partirons »",
      ],
      voixOff:
        "Quand deux sujets sont reliés par la conjonction et, ils forment ensemble un sujet pluriel : le verbe s'accorde donc au pluriel, même si chaque sujet est singulier. Le chien et le chat dorment : voilà deux sujets singuliers réunis par un verbe pluriel. Petite subtilité : si l'un des sujets est je ou tu, c'est la personne qui l'emporte sur les autres. Toi et moi partirons, car la première personne l'emporte sur la deuxième.",
    },
    {
      titre: "Sujets coordonnés par « ou » et « ni » : tout dépend du sens",
      illustration: "🤔",
      visuel: "Le maire ou son adjoint présidera. / Ni la pluie ni le vent ne l'arrêtaient.",
      contenu: [
        "Avec « ou », le verbe reste au singulier si un seul des deux sujets peut faire l'action",
        "« Le maire ou son adjoint présidera la réunion » : un seul des deux présidera",
        "Avec « ni... ni », le verbe se met le plus souvent au pluriel",
        "« Ni la pluie ni le vent ne l'arrêtaient » : aucun des deux ne l'arrêtait",
      ],
      voixOff:
        "Avec la conjonction ou, tout dépend du sens de la phrase. Si un seul des deux sujets peut réaliser l'action, le verbe reste au singulier : le maire ou son adjoint présidera la réunion, car un seul des deux occupera ce rôle. Avec ni... ni, le verbe se met le plus souvent au pluriel, car on additionne deux négations : ni la pluie ni le vent ne l'arrêtaient. Dans le doute, demande-toi si les deux sujets peuvent agir ensemble ou non.",
    },
    {
      titre: "« Qui », sujets collectifs et le pronom « on »",
      illustration: "🧩",
      visuel: "C'est nous qui gagnons. / La plupart des élèves réussissent.",
      contenu: [
        "Le pronom relatif « qui » sujet s'accorde avec son antécédent",
        "« C'est nous qui gagnons » (1re pers. pl.) / « C'est lui qui gagne » (3e pers. sing.)",
        "Après « la plupart de », « beaucoup de » + nom pluriel, le verbe se met généralement au pluriel",
        "Le pronom « on » est toujours à la 3e personne du singulier, même quand il signifie « nous »",
      ],
      voixOff:
        "Le pronom relatif qui, quand il est sujet, s'accorde avec son antécédent, le mot qu'il remplace. C'est nous qui gagnons : qui reprend nous, donc gagner se conjugue à la première personne du pluriel. Avec des expressions comme la plupart de ou beaucoup de suivies d'un nom pluriel, le verbe se met généralement au pluriel : la plupart des élèves réussissent. Enfin, ne te trompe jamais sur on : même quand il signifie nous, il reste toujours à la troisième personne du singulier.",
    },
    {
      titre: "Le vouvoiement de politesse",
      illustration: "🎩",
      visuel: "Madame, vous êtes arrivée en avance.",
      contenu: [
        "Le « vous » de politesse s'adresse à une seule personne mais reste grammaticalement pluriel",
        "Le verbe se conjugue donc à la 2e personne du pluriel : « vous êtes », « vous partirez »",
        "L'adjectif ou le participe qui se rapporte à ce « vous » reste au singulier : c'est un accord de sens",
        "« Madame, vous êtes arrivée en avance » : le verbe est au pluriel, le participe reste au féminin singulier",
      ],
      voixOff:
        "Quand on vouvoie une seule personne par politesse, le verbe se conjugue quand même à la deuxième personne du pluriel : vous êtes, vous partirez. Mais attention, l'adjectif ou le participe passé qui se rapportent à cette personne restent au singulier, puisqu'ils désignent une seule personne réelle : c'est ce qu'on appelle un accord de sens. Madame, vous êtes arrivée en avance : le verbe êtes est au pluriel, mais arrivée reste au féminin singulier.",
    },
    {
      titre: "Les accords dans le groupe nominal",
      illustration: "🧱",
      visuel: "une petite maison blanche",
      contenu: [
        "Dans un groupe nominal, tout s'accorde avec le nom noyau",
        "Le déterminant, le nom et l'adjectif ou les adjectifs s'accordent en genre et en nombre",
        "« une petite maison blanche » : féminin singulier partout",
        "« de grands arbres verts » : masculin pluriel partout",
      ],
      voixOff:
        "Dans un groupe nominal, tous les mots gravitent autour du nom, qu'on appelle le nom noyau, et s'accordent avec lui en genre et en nombre. Le déterminant, le nom et le ou les adjectifs forment ainsi un ensemble cohérent. Dans une petite maison blanche, tout est au féminin singulier. Dans de grands arbres verts, tout est au masculin pluriel : le déterminant, le nom et l'adjectif suivent le même mouvement.",
    },
    {
      titre: "Les cas particuliers du groupe nominal",
      illustration: "⚠️",
      visuel: "des yeux bleu clair / un pantalon et une veste noirs",
      contenu: [
        "Un adjectif qui qualifie plusieurs noms se met au pluriel",
        "Si les noms sont de genres différents, l'adjectif se met au masculin pluriel : « un pantalon et une veste noirs »",
        "Les adjectifs de couleur composés de deux mots restent invariables : « des yeux bleu clair », « des robes bleu marine »",
        "Dans les noms composés, l'accord varie selon le sens des mots : il faut vérifier au cas par cas",
      ],
      voixOff:
        "Certains cas demandent plus d'attention. Quand un adjectif qualifie plusieurs noms, il se met au pluriel ; si ces noms n'ont pas le même genre, l'adjectif prend le masculin pluriel, comme dans un pantalon et une veste noirs. Autre piège classique : les adjectifs de couleur composés de deux mots restent invariables, on écrit des yeux bleu clair ou des robes bleu marine, sans jamais les accorder. Enfin, dans les noms composés, l'accord dépend du sens de chaque mot, donc il faut toujours vérifier au cas par cas.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Le verbe s'accorde avec son sujet, même éloigné ou inversé, en personne et en nombre",
        "Sujets coordonnés par « et » → pluriel ; par « ou »/« ni » → tout dépend du sens",
        "« Qui » s'accorde avec son antécédent ; « on » reste toujours au singulier",
        "Dans le GN, déterminant, nom et adjectif s'accordent tous avec le nom noyau",
      ],
      voixOff:
        "Pour résumer : le verbe s'accorde toujours avec son sujet, même quand celui-ci est éloigné ou inversé, en personne et en nombre. Avec des sujets coordonnés par et, le verbe se met au pluriel ; avec ou et ni, tout dépend du sens de la phrase. Le pronom qui s'accorde avec son antécédent, tandis que on reste toujours à la troisième personne du singulier. Enfin, dans le groupe nominal, le déterminant, le nom et l'adjectif s'accordent tous ensemble avec le nom noyau. Tu es prêt à traquer les accords dans toutes tes phrases !",
    },
  ],
  fiche: {
    intro:
      "L'accord du verbe avec son sujet et l'accord dans le groupe nominal sont deux piliers de l'orthographe grammaticale. Cette fiche résume la règle générale et les cas particuliers à connaître par cœur.",
    sections: [
      {
        titre: "L'accord du verbe avec son sujet",
        points: [
          "Le verbe s'accorde toujours avec son sujet, en personne et en nombre.",
          "Pour trouver le sujet, on pose la question « qui est-ce qui » ou « qu'est-ce qui » devant le verbe.",
          "Le sujet peut être éloigné du verbe par un mot ou un groupe intercalé.",
          "Le sujet peut être inversé, placé après le verbe (« Ainsi parlaient les sages »).",
        ],
      },
      {
        titre: "Les cas particuliers de l'accord sujet-verbe",
        points: [
          "Sujets coordonnés par « et » → verbe au pluriel, même si chaque sujet est singulier.",
          "Sujets coordonnés par « ou » → singulier si un seul agit, pluriel si les deux peuvent agir ensemble.",
          "Sujets coordonnés par « ni... ni » → verbe le plus souvent au pluriel.",
          "« Qui » sujet s'accorde avec son antécédent : « C'est moi qui gagne », « Ce sont eux qui gagnent ».",
          "Sujets collectifs (« la plupart de », « beaucoup de » + nom pluriel) → verbe généralement au pluriel.",
          "« On » est toujours à la 3e personne du singulier, même s'il signifie « nous ».",
          "Le « vous » de politesse impose un verbe au pluriel, mais l'adjectif ou le participe qui s'y rapporte reste au singulier.",
        ],
      },
      {
        titre: "Les accords dans le groupe nominal (GN)",
        points: [
          "Dans un GN, le déterminant, le nom et l'adjectif s'accordent en genre et en nombre avec le nom noyau.",
          "« une petite maison blanche » (féminin singulier) ; « de grands arbres verts » (masculin pluriel).",
          "Un adjectif qui qualifie plusieurs noms se met au pluriel.",
        ],
      },
      {
        titre: "Les cas particuliers du groupe nominal",
        points: [
          "Si un adjectif qualifie des noms de genres différents, il se met au masculin pluriel : « un pantalon et une veste noirs ».",
          "Les adjectifs de couleur composés de deux mots restent invariables : « des robes bleu marine », « des yeux bleu clair ».",
          "Dans les noms composés, l'accord varie selon le sens des mots qui les composent : il faut vérifier au cas par cas.",
        ],
      },
    ],
    audio:
      "Fiche de révision : les accords sujet-verbe et dans le groupe nominal. Le verbe s'accorde toujours avec son sujet, en personne et en nombre. Pour trouver le sujet, on pose la question qui est-ce qui, ou qu'est-ce qui, devant le verbe. Attention, le sujet peut être éloigné du verbe par un mot ou un groupe intercalé, ou même inversé, placé après le verbe, comme dans ainsi parlaient les sages. Plusieurs cas particuliers demandent de la vigilance. Quand deux sujets sont coordonnés par et, le verbe se met au pluriel, même si chaque sujet est singulier. Avec ou, on accorde au singulier si un seul des deux sujets peut faire l'action, et au pluriel si les deux peuvent agir ensemble. Avec ni... ni, le verbe se met le plus souvent au pluriel. Le pronom relatif qui, quand il est sujet, s'accorde avec son antécédent : c'est moi qui gagne, ce sont eux qui gagnent. Après des expressions comme la plupart de ou beaucoup de suivies d'un nom pluriel, le verbe se met généralement au pluriel. Le pronom on, lui, reste toujours à la troisième personne du singulier, même quand il signifie nous. Enfin, le vous de politesse impose un verbe au pluriel, mais l'adjectif ou le participe qui s'y rapporte reste au singulier, puisqu'il désigne une seule personne. Dans le groupe nominal, le déterminant, le nom et l'adjectif s'accordent tous ensemble en genre et en nombre avec le nom noyau, comme dans une petite maison blanche ou de grands arbres verts. Un adjectif qui qualifie plusieurs noms se met au pluriel, et au masculin pluriel si ces noms sont de genres différents, comme dans un pantalon et une veste noirs. Enfin, les adjectifs de couleur composés de deux mots restent invariables : on écrit des robes bleu marine ou des yeux bleu clair, sans jamais les accorder.",
  },
  memoCards: [
    {
      recto: "Comment trouver le sujet d'un verbe ?",
      verso:
        "En posant la question « qui est-ce qui » ou « qu'est-ce qui » devant le verbe ; le sujet peut être éloigné ou inversé.",
    },
    {
      recto: "Deux sujets reliés par « et » : quel accord ?",
      verso: "Le verbe se met au pluriel, même si chaque sujet est singulier (« Le chien et le chat dorment »).",
    },
    {
      recto: "Sujets reliés par « ou » : singulier ou pluriel ?",
      verso: "Singulier si un seul des deux sujets peut faire l'action ; pluriel si les deux peuvent agir ensemble.",
    },
    {
      recto: "Comment accorder le verbe après « qui » sujet ?",
      verso: "Il s'accorde avec l'antécédent de « qui » : « C'est moi qui gagne », « Ce sont eux qui gagnent ».",
    },
    {
      recto: "« La plupart de », « beaucoup de » + nom pluriel : quel accord du verbe ?",
      verso: "Le verbe se met généralement au pluriel, accordé avec le nom complément (« La plupart des élèves réussissent »).",
    },
    {
      recto: "Quelle est la personne du pronom « on » ?",
      verso: "Toujours la 3e personne du singulier, même quand « on » signifie « nous ».",
    },
    {
      recto: "Le « vous » de politesse : verbe et adjectif s'accordent-ils pareil ?",
      verso: "Non : le verbe est au pluriel (« vous êtes »), mais l'adjectif ou le participe reste au singulier (« vous êtes arrivée »).",
    },
    {
      recto: "Les adjectifs de couleur composés de deux mots sont-ils variables ?",
      verso: "Non, ils sont invariables : « des yeux bleu clair », « des robes bleu marine ».",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Accorde le verbe : « Les élèves ___ (finir) leur exercice. »",
      choix: ["finit", "finissent", "finissons", "finiras"],
      bonneReponse: 1,
      explication: "Le sujet « les élèves » est au pluriel (3e personne), donc « finir » se conjugue « finissent ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Accorde le verbe : « Sur la branche ___ (chanter) les oiseaux. »",
      choix: ["chante", "chantent", "chantons", "chantez"],
      bonneReponse: 1,
      explication:
        "Le sujet « les oiseaux » est placé après le verbe (sujet inversé) : c'est bien lui qui commande l'accord, au pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde le verbe et justifie : « Le chat, que ses maîtres adorent, ___ (dormir) toute la journée. »",
      reponse: "« Le chat, que ses maîtres adorent, dort toute la journée. »",
      explication:
        "Le sujet réel du verbe « dormir » est « le chat » (singulier). Le groupe « que ses maîtres adorent » est une proposition intercalée qui ne change pas l'accord.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Accorde le verbe : « Le vent et la pluie ___ (redoubler) de violence. »",
      choix: ["redouble", "redoublent", "redoublons", "redoubliez"],
      bonneReponse: 1,
      explication:
        "« Le vent » et « la pluie » sont deux sujets coordonnés par « et » : ils forment un sujet pluriel, donc le verbe se met au pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde le verbe et justifie : « Le maire ou son adjoint ___ (présider) la réunion. »",
      reponse: "« Le maire ou son adjoint présidera la réunion. »",
      explication:
        "Un seul des deux, le maire ou son adjoint, présidera la réunion : l'action ne peut pas être faite par les deux à la fois, donc le verbe reste au singulier.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Accorde le verbe : « Ni le froid ni la pluie ne ___ (décourager) les randonneurs. »",
      choix: ["décourage", "découragent", "décourageons", "décourageais"],
      bonneReponse: 1,
      explication:
        "Avec « ni... ni », on additionne les deux négations : ni le froid, ni la pluie, séparément ou ensemble, ne les décourage. Le verbe se met donc au pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Accorde le verbe et justifie : « C'est nous qui ___ (avoir) raison. »",
      reponse: "« C'est nous qui avons raison. »",
      explication:
        "Le pronom relatif « qui » sujet s'accorde avec son antécédent, ici « nous » (1re personne du pluriel), donc « avoir » se conjugue « avons ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Accorde le verbe : « On ___ (partir) demain matin. »",
      choix: ["pars", "part", "partons", "partez"],
      bonneReponse: 1,
      explication: "« On » est toujours à la 3e personne du singulier, même quand il signifie « nous » : « on part ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde le verbe et justifie : « La plupart des élèves ___ (réussir) leur examen. »",
      reponse: "« La plupart des élèves réussissent leur examen. »",
      explication:
        "Après « la plupart de » suivi d'un nom pluriel, le verbe s'accorde généralement avec ce nom complément, au pluriel.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel groupe nominal est correctement accordé ?",
      choix: ["une grand fenêtre ouvert", "une grande fenêtre ouverte", "un grande fenêtre ouverte", "une grande fenêtres ouvertes"],
      bonneReponse: 1,
      explication:
        "« Fenêtre » est féminin singulier : le déterminant, l'adjectif et le participe doivent tous s'accorder au féminin singulier : « une grande fenêtre ouverte ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Accorde les adjectifs de couleur et justifie : « Elle avait acheté des jupes (bleu foncé) et des chemisiers (blanc). »",
      reponse: "« Elle avait acheté des jupes bleu foncé et des chemisiers blancs. »",
      explication:
        "« Bleu foncé » est un adjectif de couleur composé de deux mots : il reste invariable. « Blanc » est un adjectif de couleur simple : il s'accorde normalement, ici au masculin pluriel avec « chemisiers ».",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Accorde l'adjectif : « Un pantalon et une veste ___ (noir). »",
      choix: ["noir", "noire", "noirs", "noires"],
      bonneReponse: 2,
      explication:
        "L'adjectif « noir » qualifie deux noms de genres différents (« pantalon », masculin, et « veste », féminin) : il se met au masculin pluriel, « noirs ».",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Accorde le verbe : « Léa et Sami ___ (jouer) au foot. »",
      choix: ["joue", "jouent", "jouons", "jouez"],
      bonneReponse: 1,
      explication: "Deux sujets coordonnés par « et » forment un sujet pluriel : le verbe se met au pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle question permet de retrouver le sujet d'un verbe ?",
      reponse: "« Qui est-ce qui » ou « qu'est-ce qui » + verbe.",
      explication: "Cette question fonctionne même si le sujet est éloigné ou inversé.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Accorde le verbe : « On ___ (être) content du résultat. »",
      choix: ["suis", "es", "est", "sommes"],
      bonneReponse: 2,
      explication: "« On » est toujours à la 3e personne du singulier : « on est ».",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde le verbe et justifie : « Madame, vous ___ (être) trop aimable. »",
      reponse: "« Madame, vous êtes trop aimable. »",
      explication: "Le « vous » de politesse impose un verbe à la 2e personne du pluriel, même quand on s'adresse à une seule personne.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Les adjectifs de couleur composés de deux mots sont-ils variables ou invariables ? Donne un exemple.",
      reponse: "Ils sont invariables. Exemple : « des yeux bleu clair ».",
      explication: "Contrairement aux adjectifs de couleur simples, les couleurs composées de deux mots ne s'accordent jamais.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les accords sujet-verbe et dans le GN",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le sujet d'un verbe répond à la question :",
          choix: ["Qui est-ce qui ? / Qu'est-ce qui ?", "Comment ?", "Où ?", "Pourquoi ?"],
          bonneReponse: 0,
          explication:
            "C'est en posant cette question devant le verbe qu'on retrouve son sujet, même s'il est éloigné ou inversé.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Accorde le verbe : « Les enfants ___ (chanter) une chanson. »",
          reponse: "« Les enfants chantent une chanson. »",
          explication: "Le sujet « les enfants » est au pluriel (3e personne), donc « chanter » se conjugue « chantent ».",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Accorde le verbe : « Où ___ (se trouver) les clés ? »",
          choix: ["se trouve", "se trouvent", "se trouvons", "se trouvez"],
          bonneReponse: 1,
          explication: "Le sujet « les clés » est inversé, placé après le verbe : il est pluriel, donc « se trouvent ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Accorde le verbe et justifie : « Le vent, la pluie et le froid ne ___ (arrêter) pas les coureurs. »",
          reponse: "« Le vent, la pluie et le froid n'arrêtent pas les coureurs. »",
          explication: "Trois sujets coordonnés par « et » forment un sujet pluriel : le verbe se met au pluriel.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Accorde le verbe : « Beaucoup de spectateurs ___ (applaudir) à la fin du spectacle. »",
          choix: ["applaudit", "applaudissent", "applaudissons", "applaudissais"],
          bonneReponse: 1,
          explication:
            "Après « beaucoup de » suivi d'un nom pluriel, le verbe s'accorde au pluriel avec ce nom complément.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Accorde et justifie : « Elle a acheté des rideaux (vert olive) et un tapis (rouge). »",
          reponse: "« Elle a acheté des rideaux vert olive et un tapis rouge. »",
          explication:
            "« Vert olive » est un adjectif de couleur composé : il reste invariable. « Rouge » est un adjectif de couleur simple : il s'accorde normalement, ici au masculin singulier avec « tapis ».",
        },
      ],
    },
    {
      titre: "Examen 2 — Les accords sujet-verbe et dans le GN",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans « Les oiseaux migrateurs traversent le ciel », quel est le sujet du verbe « traversent » ?",
          choix: ["traversent", "les oiseaux migrateurs", "le ciel", "migrateurs"],
          bonneReponse: 1,
          explication:
            "« Les oiseaux migrateurs » est le groupe qui répond à la question « qui est-ce qui traverse ? » : c'est le sujet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Accorde les mots du groupe nominal : « une (joli) robe (rouge). »",
          reponse: "« une jolie robe rouge »",
          explication:
            "« Robe » est féminin singulier : le déterminant, l'adjectif « joli » et l'adjectif « rouge » s'accordent tous au féminin singulier.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Accorde le verbe : « Le professeur ou les élèves ___ (pouvoir) répondre à cette question. »",
          choix: ["peut", "peux", "peuvent", "pouvons"],
          bonneReponse: 2,
          explication:
            "Ici, le professeur et les élèves peuvent tous répondre : l'action n'est pas réservée à un seul des deux sujets, donc le verbe se met au pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Accorde le verbe et justifie : « C'est toi qui ___ (avoir) commencé. »",
          reponse: "« C'est toi qui as commencé. »",
          explication:
            "Le pronom « qui » sujet s'accorde avec son antécédent « toi » (2e personne du singulier), donc « avoir » se conjugue « as ».",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Accorde le verbe : « Monsieur, vous ___ (sembler) fatigué. »",
          choix: ["semble", "sembles", "semblez", "semblons"],
          bonneReponse: 2,
          explication:
            "Le « vous » de politesse impose un verbe à la 2e personne du pluriel, « semblez », même si l'adjectif « fatigué » qui suit reste au masculin singulier.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Accorde l'adjectif et justifie : « Une jupe et un chemisier (blanc). »",
          reponse: "« Une jupe et un chemisier blancs. »",
          explication:
            "L'adjectif « blanc » qualifie deux noms de genres différents (« jupe », féminin, et « chemisier », masculin) : il se met au masculin pluriel, la forme qui l'emporte.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le verbe s'accorde toujours avec son sujet, en personne et en nombre, même si celui-ci est éloigné ou inversé.",
    "Sujets coordonnés par « et » → verbe au pluriel ; par « ou »/« ni » → l'accord dépend du sens de la phrase.",
    "« Qui » sujet s'accorde avec son antécédent ; « on » reste toujours à la 3e personne du singulier.",
    "Le « vous » de politesse veut un verbe au pluriel, mais l'adjectif ou le participe qui s'y rapporte reste au singulier.",
    "Dans le groupe nominal, déterminant, nom et adjectif s'accordent tous en genre et en nombre avec le nom noyau.",
    "Les adjectifs de couleur composés de deux mots (bleu marine, vert olive...) sont invariables.",
  ],
};

export default chapitre;
