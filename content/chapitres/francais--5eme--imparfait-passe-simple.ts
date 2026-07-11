import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "imparfait-passe-simple",
  titre: "Imparfait et passé simple",
  matiere: "francais",
  niveau: "5eme",
  description:
    "Conjuguer l'imparfait et le passé simple de l'indicatif, et savoir choisir le bon temps pour raconter un récit : description et habitudes à l'imparfait, actions qui font avancer l'histoire au passé simple.",
  objectifs: [
    "Former l'imparfait de l'indicatif pour tous les verbes",
    "Former le passé simple des verbes des trois groupes, réguliers et irréguliers",
    "Distinguer les valeurs d'emploi de l'imparfait et du passé simple dans un récit",
    "Choisir le temps adapté à chaque action, au premier plan ou à l'arrière-plan",
    "Éviter les pièges d'orthographe liés à ces deux temps (accents, terminaisons homophones)",
  ],
  slides: [
    {
      titre: "Deux temps pour raconter",
      illustration: "📖",
      visuel: "Il faisait nuit... quand un bruit retentit.",
      contenu: [
        "Le récit au passé combine souvent l'imparfait et le passé simple",
        "Ils ne racontent pas la même chose ni de la même façon",
        "Bien les choisir rend un récit clair et vivant",
        "Objectif : savoir les conjuguer, puis savoir quand les employer",
      ],
      voixOff:
        "Quand on raconte une histoire au passé, en français, on utilise très souvent deux temps ensemble : l'imparfait et le passé simple. Ces deux temps ne se conjuguent pas de la même façon, et surtout, ils ne servent pas à la même chose dans un récit. Dans ce chapitre, tu vas apprendre à les former correctement, puis à choisir le bon temps selon ce que tu veux exprimer. C'est une compétence essentielle pour réussir tes rédactions.",
    },
    {
      titre: "Former l'imparfait : la règle générale",
      illustration: "⏳",
      visuel: "nous chantONS → je chantais",
      contenu: [
        "Radical = celui de « nous » au présent, sans -ons",
        "Terminaisons, pour tous les verbes : -ais, -ais, -ait, -ions, -iez, -aient",
        "chanter : nous chantons → je chantais, tu chantais, il chantait...",
        "finir : nous finissons → je finissais ; prendre : nous prenons → je prenais",
      ],
      voixOff:
        "Pour former l'imparfait, on prend le radical du verbe à la première personne du pluriel du présent, celle qui se termine par -ons, et on lui retire cette terminaison. On ajoute ensuite les six terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient. Ainsi, nous chantons devient je chantais, et nous finissons devient je finissais. Cette règle fonctionne pour la quasi-totalité des verbes français, à une seule exception près.",
    },
    {
      titre: "Être à l'imparfait : l'exception",
      illustration: "❗",
      visuel: "j'étais, tu étais, il était...",
      contenu: [
        "Être ne suit pas la règle générale : son radical est ét-",
        "j'étais, tu étais, il était",
        "nous étions, vous étiez, ils étaient",
        "Les terminaisons restent les mêmes : -ais, -ais, -ait, -ions, -iez, -aient",
      ],
      voixOff:
        "Le verbe être est le seul verbe vraiment irrégulier à l'imparfait, car son radical, ét-, ne vient pas du présent nous sommes. On dit donc j'étais, tu étais, il était, nous étions, vous étiez, ils étaient. Les terminaisons, elles, restent parfaitement régulières. C'est pourquoi il faut apprendre cette conjugaison par cœur.",
    },
    {
      titre: "Le passé simple des verbes en -er",
      illustration: "1️⃣",
      visuel: "il chanta, ils chantèrent",
      contenu: [
        "Terminaisons : -ai, -as, -a, -âmes, -âtes, -èrent",
        "chanter : je chantai, tu chantas, il chanta",
        "nous chantâmes, vous chantâtes, ils chantèrent",
        "Tous les verbes en -er suivent ce modèle, y compris aller",
      ],
      voixOff:
        "Tous les verbes du premier groupe, ceux qui se terminent par -er à l'infinitif, forment leur passé simple de la même façon. On ajoute au radical les terminaisons -ai, -as, -a, -âmes, -âtes, -èrent. Cela donne je chantai, tu chantas, il chanta, nous chantâmes, vous chantâtes, ils chantèrent. Le verbe aller, pourtant irrégulier ailleurs, suit lui aussi ce modèle : il alla, ils allèrent.",
    },
    {
      titre: "Le passé simple en -is",
      illustration: "2️⃣",
      visuel: "il finit, il prit, il vit, il fit",
      contenu: [
        "Terminaisons : -is, -is, -it, -îmes, -îtes, -irent",
        "finir (2e groupe) : je finis, tu finis, il finit, nous finîmes...",
        "prendre : il prit ; dire : il dit ; voir : il vit",
        "faire : je fis, il fit (radical irrégulier fi-)",
      ],
      voixOff:
        "Beaucoup de verbes du deuxième groupe et du troisième groupe forment leur passé simple en -is : -is, -is, -it, -îmes, -îtes, -irent. C'est le cas de tous les verbes en -ir comme finir : je finis, tu finis, il finit. On retrouve ce même modèle dans prendre, qui donne il prit, dans dire, qui donne il dit, et dans voir, qui donne il vit. Le verbe faire suit aussi ce modèle, avec un radical irrégulier : je fis, il fit.",
    },
    {
      titre: "Le passé simple en -us",
      illustration: "3️⃣",
      visuel: "il put, il voulut, il eut",
      contenu: [
        "Terminaisons : -us, -us, -ut, -ûmes, -ûtes, -urent",
        "pouvoir : je pus, il put ; vouloir : je voulus, il voulut",
        "avoir : j'eus, il eut (radical irrégulier eu-)",
        "courir : je courus, il courut",
      ],
      voixOff:
        "D'autres verbes du troisième groupe utilisent les terminaisons -us, -us, -ut, -ûmes, -ûtes, -urent. Pouvoir donne je pus, tu pus, il put ; vouloir donne je voulus, il voulut. Le verbe avoir suit ce même modèle, mais avec un radical très irrégulier, eu- : j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent. On retrouve aussi ce modèle dans courir : il courut.",
    },
    {
      titre: "Être et venir : les irréguliers à part",
      illustration: "🌀",
      visuel: "il fut / il vint",
      contenu: [
        "être : je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent",
        "venir : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent",
        "tenir se conjugue comme venir : il tint, ils tinrent",
        "Ces formes sont irrégulières : elles s'apprennent par cœur",
      ],
      voixOff:
        "Deux verbes ont un passé simple totalement à part. Être donne je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent. Venir, lui, a ses propres terminaisons en -ins : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent. Le verbe tenir, et tous ses composés, se conjugue exactement sur le même modèle que venir. Ces formes ne suivent aucune règle générale : il faut les mémoriser.",
    },
    {
      titre: "Choisir le bon temps dans un récit",
      illustration: "🎬",
      visuel: "Il pleuvait (décor)... quand la porte s'ouvrit (événement).",
      contenu: [
        "Imparfait : description, arrière-plan, habitudes, actions qui durent",
        "Passé simple : actions ponctuelles de premier plan qui font avancer l'histoire",
        "« Il pleuvait quand la porte s'ouvrit soudain »",
        "Le passé simple répond à « et alors, que se passa-t-il ? »",
      ],
      voixOff:
        "Dans un récit, ces deux temps ne jouent pas le même rôle. L'imparfait sert à décrire le décor, les personnages, les habitudes, ou une action qui dure en arrière-plan. Le passé simple, lui, exprime les actions brèves et successives qui font avancer l'histoire, au premier plan. Dans la phrase il pleuvait quand la porte s'ouvrit soudain, il pleuvait plante le décor à l'imparfait, tandis que s'ouvrit marque l'événement au passé simple.",
    },
    {
      titre: "Pièges d'orthographe et bilan",
      illustration: "⚠️",
      visuel: "il fut, il vint, il chanta : jamais d'accent circonflexe",
      contenu: [
        "Ne pas confondre les terminaisons homophones : imparfait -ait / passé simple -a",
        "Accent circonflexe : seulement à « nous » et « vous » (nous chantâmes, vous finîtes)",
        "À la 3e personne du singulier, jamais d'accent circonflexe : il fut, il vint, il chanta",
        "Bilan : imparfait = arrière-plan qui dure ; passé simple = événement bref au premier plan",
      ],
      voixOff:
        "Attention à deux pièges fréquents. D'abord, ne confonds pas les terminaisons homophones : il chantait, à l'imparfait, et il chanta, au passé simple, ne s'écrivent pas pareil. Ensuite, l'accent circonflexe du passé simple n'apparaît qu'aux personnes nous et vous, jamais à la troisième personne du singulier : on écrit il fut, il vint, il chanta, sans aucun accent. Pour résumer tout le chapitre, retiens que l'imparfait installe un décor qui dure, tandis que le passé simple raconte les événements brefs qui font avancer l'histoire.",
    },
  ],
  fiche: {
    intro:
      "L'imparfait et le passé simple sont les deux temps du passé les plus utilisés dans un récit. Ils se forment selon des règles précises et jouent des rôles complémentaires : l'un décrit, l'autre fait avancer l'action.",
    sections: [
      {
        titre: "Former l'imparfait de l'indicatif",
        points: [
          "Radical = celui de la 1re personne du pluriel (« nous ») au présent, sans -ons",
          "Terminaisons, pour tous les verbes : -ais, -ais, -ait, -ions, -iez, -aient",
          "chanter → nous chantons → je chantais, tu chantais, il chantait, nous chantions, vous chantiez, ils chantaient",
          "Exception : être a un radical irrégulier, ét- (j'étais, il était, nous étions...)",
        ],
      },
      {
        titre: "Former le passé simple",
        points: [
          "1er groupe (-er) : -ai, -as, -a, -âmes, -âtes, -èrent → il chanta, ils chantèrent",
          "2e groupe et une partie du 3e groupe : -is, -is, -it, -îmes, -îtes, -irent → il finit, il prit, il dit, il vit, il fit",
          "Autre partie du 3e groupe : -us, -us, -ut, -ûmes, -ûtes, -urent → il put, il voulut, il eut, il courut",
          "Verbes très irréguliers à apprendre par cœur : être (il fut), venir/tenir (il vint, il tint)",
        ],
      },
      {
        titre: "Choisir le bon temps dans un récit",
        points: [
          "Imparfait : description, décor, personnages, habitudes, actions qui durent ou se répètent",
          "Passé simple : actions brèves, ponctuelles, successives, qui font avancer l'histoire (premier plan)",
          "Exemple : « Le vieux moulin dominait la vallée quand, soudain, il s'effondra. »",
          "Astuce : le passé simple répond à la question « et que se passa-t-il alors ? »",
        ],
      },
      {
        titre: "Les pièges d'orthographe",
        points: [
          "Terminaisons homophones à distinguer : imparfait -ais/-ait (« il chantait ») et passé simple -a (« il chanta »)",
          "Accent circonflexe : uniquement aux personnes « nous » et « vous » du passé simple (nous chantâmes, vous finîtes, nous fûmes)",
          "À la 3e personne du singulier, jamais d'accent circonflexe : il fut, il vint, il chanta, il fit",
          "Pour vérifier un passé simple, essaie la forme « nous » : si elle existe en -âmes/-îmes/-ûmes, l'orthographe est confirmée",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'imparfait et le passé simple. L'imparfait se forme à partir du radical de la première personne du pluriel du présent, celle qui se termine par -ons, à laquelle on retire cette terminaison. On ajoute ensuite les terminaisons -ais, -ais, -ait, -ions, -iez, -aient, qui sont les mêmes pour tous les verbes. Ainsi, nous chantons devient je chantais, tu chantais, il chantait, nous chantions, vous chantiez, ils chantaient. Le seul verbe vraiment irrégulier est être, dont le radical est ét- : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient. Le passé simple, lui, se forme différemment selon les groupes. Les verbes du premier groupe, en -er, prennent les terminaisons -ai, -as, -a, -âmes, -âtes, -èrent : il chanta, ils chantèrent. Beaucoup de verbes du deuxième groupe et du troisième groupe prennent les terminaisons -is, -is, -it, -îmes, -îtes, -irent, comme finir qui donne il finit, prendre qui donne il prit, dire qui donne il dit, voir qui donne il vit, ou encore faire qui donne il fit. D'autres verbes du troisième groupe utilisent les terminaisons -us, -us, -ut, -ûmes, -ûtes, -urent, comme pouvoir qui donne il put, vouloir qui donne il voulut, ou avoir qui donne il eut. Enfin, être et venir ont des formes tout à fait à part : il fut pour être, il vint pour venir ; le verbe tenir se conjugue comme venir. Dans un récit, ces deux temps jouent des rôles complémentaires. L'imparfait sert à décrire le décor, les personnages ou les habitudes, et à exprimer des actions qui durent ou se répètent : c'est l'arrière-plan. Le passé simple, lui, exprime des actions brèves et ponctuelles qui se succèdent et font avancer l'histoire : c'est le premier plan. Par exemple, le vieux moulin dominait la vallée, à l'imparfait, plante le décor, quand soudain il s'effondra, au passé simple, marque l'événement qui fait basculer le récit. Enfin, attention aux pièges d'orthographe. Il ne faut pas confondre les terminaisons homophones de l'imparfait, en -ais ou -ait, et celles du passé simple, en -a pour les verbes en -er. L'accent circonflexe n'apparaît qu'aux personnes nous et vous du passé simple, comme dans nous chantâmes ou vous finîtes, jamais à la troisième personne du singulier : on écrit il fut, il vint, il chanta ou il fit, sans aucun accent circonflexe.",
  },
  memoCards: [
    {
      recto: "Comment former l'imparfait ?",
      verso: "Radical du présent (« nous ») sans -ons + terminaisons -ais, -ais, -ait, -ions, -iez, -aient.",
    },
    {
      recto: "Être à l'imparfait ?",
      verso: "J'étais, tu étais, il était, nous étions, vous étiez, ils étaient.",
    },
    {
      recto: "Passé simple des verbes en -er (1er groupe) ?",
      verso: "-ai, -as, -a, -âmes, -âtes, -èrent → il chanta, ils chantèrent.",
    },
    {
      recto: "Passé simple en -is : exemples ?",
      verso: "Finir → il finit ; prendre → il prit ; dire → il dit ; voir → il vit ; faire → il fit.",
    },
    {
      recto: "Passé simple en -us : exemples ?",
      verso: "Pouvoir → il put ; vouloir → il voulut ; avoir → il eut ; courir → il courut.",
    },
    {
      recto: "Être et venir au passé simple ?",
      verso: "Être : je fus, il fut, nous fûmes, ils furent. Venir : je vins, il vint, nous vînmes, ils vinrent.",
    },
    {
      recto: "Rôle de l'imparfait et du passé simple dans un récit ?",
      verso: "Imparfait = décor, habitude, durée (arrière-plan) ; passé simple = action brève, ponctuelle (premier plan).",
    },
    {
      recto: "Accent circonflexe au passé simple : où ?",
      verso: "Seulement à « nous » et « vous » (nous chantâmes, vous finîtes) ; jamais à la 3e personne du singulier (il fut, il vint, il chanta).",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la terminaison de l'imparfait à la 3e personne du singulier ?",
      choix: ["-ait", "-a", "-it", "-ut"],
      bonneReponse: 0,
      explication: "L'imparfait se termine toujours par -ait à la 3e personne du singulier, quel que soit le verbe (sauf être : il était).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Conjugue « jouer » à l'imparfait, 1re personne du singulier :",
      choix: ["je jouais", "je jouai", "je jouerai", "je joue"],
      bonneReponse: 0,
      explication: "Radical « jou- » (nous jouons) + terminaison -ais de l'imparfait : je jouais.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Conjugue le verbe « finir » à l'imparfait aux six personnes.",
      reponse: "Je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient.",
      explication: "Le radical vient de « nous finissons » : finiss-, auquel on ajoute les terminaisons régulières de l'imparfait.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le radical utilisé pour former l'imparfait de « prendre » ?",
      choix: ["pren-", "prend-", "prid-", "pris-"],
      bonneReponse: 0,
      explication: "« Nous prenons » donne le radical pren-, d'où je prenais, tu prenais, il prenait...",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « chanter » au passé simple aux six personnes.",
      reponse: "Je chantai, tu chantas, il chanta, nous chantâmes, vous chantâtes, ils chantèrent.",
      explication: "Les verbes du 1er groupe prennent les terminaisons -ai, -as, -a, -âmes, -âtes, -èrent.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte du passé simple de « voir » à la 3e personne du singulier ?",
      choix: ["il voyait", "il vit", "il voit", "il vut"],
      bonneReponse: 1,
      explication: "« Voir » suit le modèle en -is : je vis, tu vis, il vit, nous vîmes, vous vîtes, ils virent.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Parmi ces verbes, lequel forme son passé simple en -us ?",
      choix: ["finir", "pouvoir", "dire", "chanter"],
      bonneReponse: 1,
      explication: "« Pouvoir » donne je pus, tu pus, il put... Finir et dire suivent le modèle en -is, chanter le modèle en -a.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Complète en conjuguant les verbes entre parenthèses puis justifie le choix de chaque temps : « Elle ______ (marcher, imparfait) dans la forêt quand elle ______ (entendre, passé simple) un bruit étrange. »",
      reponse:
        "« Elle marchait dans la forêt quand elle entendit un bruit étrange. » Marchait est à l'imparfait car c'est une action qui dure, à l'arrière-plan (le décor) ; entendit est au passé simple car c'est une action brève et ponctuelle qui fait avancer le récit.",
      explication: "L'imparfait installe la durée, le passé simple fait surgir l'événement qui rompt cette durée.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans la phrase « Le ciel était gris et le vent soufflait fort », à quel temps sont les verbes, et pourquoi ?",
      choix: [
        "Passé simple, car ce sont des actions ponctuelles",
        "Imparfait, car ce sont des descriptions qui durent",
        "Présent, car l'action se déroule maintenant",
        "Passé composé, car les actions sont terminées",
      ],
      bonneReponse: 1,
      explication: "« Était » et « soufflait » décrivent un état et une action qui durent : c'est le rôle typique de l'imparfait dans une description.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Conjugue le verbe « venir » au passé simple aux six personnes, et précise quel autre verbe très courant se conjugue sur le même modèle.",
      reponse:
        "Je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent. Le verbe tenir (et ses composés comme retenir ou obtenir) se conjugue sur le même modèle.",
      explication: "Venir et tenir forment une famille de passé simple totalement irrégulière, à apprendre par cœur.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est correctement orthographiée ?",
      choix: [
        "Il fût très surpris par cette nouvelle.",
        "Il fut très surpris par cette nouvelle.",
        "Il fus très surpris par cette nouvelle.",
        "Il fu très surpris par cette nouvelle.",
      ],
      bonneReponse: 1,
      explication: "Au passé simple, la 3e personne du singulier de « être » s'écrit « il fut », sans accent circonflexe et sans -s final.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Réécris ce texte au passé en choisissant entre l'imparfait et le passé simple : « Il fait nuit. La lune brille. Soudain, un chien aboie et réveille tout le village. »",
      reponse: "Il faisait nuit. La lune brillait. Soudain, un chien aboya et réveilla tout le village.",
      explication:
        "« Faisait » et « brillait » décrivent le décor qui dure (imparfait) ; « aboya » et « réveilla » sont des actions ponctuelles et successives qui font avancer le récit (passé simple).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelles sont les terminaisons de l'imparfait ?",
      choix: [
        "-ais, -ais, -ait, -ions, -iez, -aient",
        "-ai, -as, -a, -âmes, -âtes, -èrent",
        "-is, -is, -it, -îmes, -îtes, -irent",
        "-e, -es, -e, -ons, -ez, -ent",
      ],
      bonneReponse: 0,
      explication: "Ces six terminaisons valent pour tous les verbes à l'imparfait, y compris être.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel est le seul verbe irrégulier à l'imparfait, et pourquoi ?",
      reponse: "Être, car son radical (ét-) ne vient pas de la forme « nous » du présent.",
      explication: "Tous les autres verbes se forment à partir de « nous » + terminaisons régulières.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel temps exprime une action ponctuelle qui fait avancer le récit ?",
      choix: ["L'imparfait", "Le passé simple", "Le présent", "Le futur"],
      bonneReponse: 1,
      explication: "Le passé simple raconte les événements brefs et successifs, au premier plan du récit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « avoir » au passé simple, 3e personne du singulier et du pluriel.",
      reponse: "Il eut ; ils eurent.",
      explication: "Avoir suit le modèle en -us, avec un radical irrégulier eu-.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi n'écrit-on jamais « il chantât » avec un accent circonflexe pour un passé simple ?",
      reponse:
        "Parce qu'à la 3e personne du singulier, le passé simple ne prend jamais d'accent circonflexe : on écrit il chanta. L'accent circonflexe n'apparaît qu'aux personnes « nous » et « vous » (nous chantâmes, vous chantâtes).",
      explication: "C'est l'un des pièges d'orthographe les plus fréquents du chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Imparfait et passé simple",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle terminaison correspond à la 1re personne du singulier de l'imparfait ?",
          choix: ["-ai", "-ais", "-as", "-is"],
          bonneReponse: 1,
          explication: "Je + radical + -ais : par exemple je chantais.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Conjugue « aimer » à l'imparfait, 3e personne du pluriel.",
          reponse: "Ils aimaient.",
          explication: "Radical « aim- » (nous aimons) + terminaison -aient.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel verbe forme son passé simple en -is comme « finir » ?",
          choix: ["chanter", "prendre", "pouvoir", "avoir"],
          bonneReponse: 1,
          explication: "« Prendre » donne il prit, sur le modèle en -is. Chanter suit le modèle en -a, pouvoir et avoir le modèle en -us.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « partir » au passé simple, 1re et 2e personnes du pluriel.",
          reponse: "Nous partîmes, vous partîtes.",
          explication: "Partir suit le modèle en -is, comme finir : radical part-, terminaisons -îmes, -îtes.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Ils vinrent nombreux au rendez-vous », le verbe « vinrent » est le passé simple de :",
          choix: ["voir", "venir", "vouloir", "vivre"],
          bonneReponse: 1,
          explication: "« Vinrent » vient de venir, qui a un passé simple irrégulier en -ins : je vins, il vint, ils vinrent.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Réécris cette phrase en choisissant le bon temps, puis justifie tes choix : « Le vieil homme (regarder, imparfait) la mer depuis des heures quand un bateau (apparaître, passé simple) à l'horizon. »",
          reponse:
            "« Le vieil homme regardait la mer depuis des heures quand un bateau apparut à l'horizon. » Regardait est à l'imparfait car c'est une action longue et habituelle, en arrière-plan ; apparut est au passé simple car c'est un événement bref et ponctuel qui fait avancer le récit.",
          explication: "On retrouve l'opposition classique entre durée (imparfait) et rupture ponctuelle (passé simple).",
        },
      ],
    },
    {
      titre: "Examen 2 — Imparfait et passé simple",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est le radical de l'imparfait pour le verbe « lire » (nous lisons) ?",
          choix: ["li-", "lis-", "lit-", "lis"],
          bonneReponse: 1,
          explication: "« Nous lisons » donne le radical lis-, d'où je lisais, tu lisais, il lisait...",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Conjugue « être » à l'imparfait, 1re personne du singulier et du pluriel.",
          reponse: "J'étais ; nous étions.",
          explication: "Le radical ét- est irrégulier, mais les terminaisons -ais et -ions restent régulières.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est la bonne terminaison du passé simple des verbes en -er, à la 3e personne du pluriel ?",
          choix: ["-irent", "-urent", "-èrent", "-aient"],
          bonneReponse: 2,
          explication: "Ils chantèrent, ils jouèrent, ils allèrent : les verbes en -er prennent -èrent à cette personne.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « vouloir » au passé simple, 3e personne du singulier et du pluriel.",
          reponse: "Il voulut ; ils voulurent.",
          explication: "Vouloir suit le modèle en -us : je voulus, tu voulus, il voulut, nous voulûmes, vous voulûtes, ils voulurent.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle phrase respecte la règle de l'accent circonflexe au passé simple ?",
          choix: [
            "Nous chantames la même chanson.",
            "Nous chantâmes la même chanson.",
            "Il chantâ la même chanson.",
            "Ils chantâmes la même chanson.",
          ],
          bonneReponse: 1,
          explication:
            "L'accent circonflexe apparaît uniquement aux personnes « nous » et « vous » du passé simple : nous chantâmes est correct. « Il chantâ » et « ils chantâmes » sont fautifs (3e personne du singulier sans accent, 3e personne du pluriel en -èrent).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Explique en une phrase la différence d'emploi entre l'imparfait et le passé simple dans un récit, puis illustre avec un exemple de ton invention.",
          reponse:
            "L'imparfait décrit le décor et les actions qui durent ou se répètent, tandis que le passé simple raconte les actions brèves qui font avancer l'histoire ; par exemple : « Le silence régnait dans la maison quand, soudain, la porte claqua. »",
          explication: "« Régnait » installe la durée à l'imparfait, « claqua » marque l'événement ponctuel au passé simple.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'imparfait se forme avec le radical du présent (« nous ») + -ais, -ais, -ait, -ions, -iez, -aient ; seul « être » a un radical irrégulier (ét-).",
    "Le passé simple a trois séries de terminaisons : -ai/-as/-a... (1er groupe), -is/-is/-it... (2e groupe et une partie du 3e), -us/-us/-ut... (autre partie du 3e groupe).",
    "Être et venir (et tenir) ont un passé simple tout à fait irrégulier, à apprendre par cœur : il fut, il vint.",
    "Dans un récit : l'imparfait décrit le décor et les actions qui durent (arrière-plan) ; le passé simple raconte les actions brèves qui font avancer l'histoire (premier plan).",
    "L'accent circonflexe du passé simple n'apparaît qu'aux personnes « nous » et « vous » ; jamais à la 3e personne du singulier (il fut, il vint, il chanta).",
  ],
};

export default chapitre;
