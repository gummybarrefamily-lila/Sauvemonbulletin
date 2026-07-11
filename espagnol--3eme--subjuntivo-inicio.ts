import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "subjuntivo-inicio",
  titre: "Introduction au subjonctif",
  matiere: "espagnol",
  niveau: "3eme",
  langueVoix: "es-ES",
  description:
    "Découvrir le présent du subjonctif espagnol : sa formation régulière et irrégulière, et son emploi après querer que, ojalá que et es importante que pour exprimer un souhait, un espoir ou une nécessité.",
  objectifs: [
    "Comprendre quand utiliser le subjonctif plutôt que l'indicatif",
    "Former le présent du subjonctif des verbes réguliers en -ar, -er, -ir",
    "Conjuguer les verbes irréguliers les plus fréquents au subjonctif (ser, estar, ir, saber, haber)",
    "Utiliser querer que et ojalá (que) + subjonctif",
    "Employer es importante/necesario que + subjonctif",
  ],
  slides: [
    {
      titre: "Qu'est-ce que le subjonctif ?",
      illustration: "🌀",
      visuel: "Deseo, duda, sentimiento",
      contenu: [
        "L'indicatif exprime des faits réels et certains : Estudio español",
        "Le subjonctif exprime un souhait, un doute ou un sentiment sur l'action d'une autre personne",
        "Il apparaît presque toujours après « que », dans une deuxième partie de phrase",
        "Quiero que estudies más : je veux que tu étudies davantage",
      ],
      voixOff:
        "En espagnol, l'indicatif décrit des faits réels et certains, comme estudio español, j'étudie l'espagnol. Le subjonctif, lui, sert à exprimer un souhait, un doute ou un sentiment à propos de l'action d'une autre personne. Il apparaît presque toujours dans une phrase avec que, après un premier verbe. Par exemple, quiero que estudies más, je veux que tu étudies davantage : ici, estudies est au subjonctif, car c'est un souhait qui concerne quelqu'un d'autre que moi.",
    },
    {
      titre: "La formation régulière : verbes en -AR",
      illustration: "📐",
      visuel: "Hable, hables, hable…",
      contenu: [
        "On part de la forme yo du présent de l'indicatif, on enlève le -o",
        "On ajoute les terminaisons inversées : -e, -es, -e, -emos, -éis, -en",
        "Hablar (hablo) → hable, hables, hable, hablemos, habléis, hablen",
        "Les verbes en -ar prennent donc des terminaisons en -e au subjonctif",
      ],
      voixOff:
        "Pour former le présent du subjonctif d'un verbe régulier en -ar, on part de la forme yo du présent de l'indicatif, on enlève le o final, puis on ajoute des terminaisons inversées : -e, -es, -e, -emos, -éis, -en. Hablar, dont la forme yo est hablo, donne hable, hables, hable, hablemos, habléis, hablen. Retiens bien : les verbes en -ar prennent des terminaisons en -e au subjonctif, l'inverse de l'indicatif.",
    },
    {
      titre: "La formation régulière : verbes en -ER/-IR",
      illustration: "📐",
      visuel: "Coma, comas… / Viva, vivas…",
      contenu: [
        "Les verbes en -er et -ir prennent des terminaisons en -a au subjonctif",
        "Comer (como) → coma, comas, coma, comamos, comáis, coman",
        "Vivir (vivo) → viva, vivas, viva, vivamos, viváis, vivan",
        "-er et -ir partagent exactement les mêmes terminaisons au subjonctif",
      ],
      voixOff:
        "À l'inverse, les verbes en -er et en -ir prennent des terminaisons en -a au subjonctif. Comer, dont la forme yo est como, donne coma, comas, coma, comamos, comáis, coman. Vivir, dont la forme yo est vivo, donne viva, vivas, viva, vivamos, viváis, vivan. Remarque que -er et -ir partagent exactement les mêmes terminaisons au subjonctif, comme au prétérit.",
    },
    {
      titre: "Les irréguliers de la forme yo se conservent",
      illustration: "🔗",
      visuel: "Tener (tengo) → tenga",
      contenu: [
        "Si la forme yo du présent est irrégulière, cette irrégularité se garde au subjonctif",
        "Tener (tengo) → tenga, tengas, tenga, tengamos, tengáis, tengan",
        "Hacer (hago) → haga… — Poner (pongo) → ponga… — Salir (salgo) → salga…",
        "Decir (digo) → diga… — Conocer (conozco) → conozca…",
      ],
      voixOff:
        "Beaucoup de verbes irréguliers au subjonctif le sont simplement parce que leur forme yo au présent l'est déjà. Tener, dont la forme yo est tengo, donne tenga, tengas, tenga, tengamos, tengáis, tengan. On retrouve la même logique avec hacer, qui donne haga, poner, qui donne ponga, salir, qui donne salga, decir, qui donne diga, et conocer, qui donne conozca.",
    },
    {
      titre: "Les verbes totalement irréguliers",
      illustration: "⚡",
      visuel: "Sea, esté, vaya, sepa, haya",
      contenu: [
        "Ser → sea, seas, sea, seamos, seáis, sean",
        "Estar → esté, estés, esté, estemos, estéis, estén",
        "Ir → vaya, vayas, vaya, vayamos, vayáis, vayan",
        "Saber → sepa… — Haber → haya… — Dar → dé, des, dé, demos, deis, den",
      ],
      voixOff:
        "Six verbes sont totalement irréguliers au subjonctif, sans lien avec leur forme yo. Ser donne sea, seas, sea, seamos, seáis, sean. Estar donne esté, estés, esté, estemos, estéis, estén, avec un accent sur les formes courtes. Ir donne vaya, vayas, vaya, vayamos, vayáis, vayan. Saber donne sepa, haber donne haya, et dar donne dé, des, dé, demos, deis, den.",
    },
    {
      titre: "Querer que + subjonctif",
      illustration: "💭",
      visuel: "Quiero que vengas",
      contenu: [
        "Querer que + subjonctif : exprime un souhait pour quelqu'un d'autre",
        "Quiero que vengas a mi fiesta : je veux que tu viennes à ma fête",
        "Si le sujet est le même, on utilise l'infinitif : Quiero venir (pas de que)",
        "Mis padres quieren que estudie más : mes parents veulent que j'étudie davantage",
      ],
      voixOff:
        "Querer que est l'une des structures les plus fréquentes pour introduire le subjonctif, quand on exprime un souhait qui concerne une autre personne que soi. Quiero que vengas a mi fiesta, je veux que tu viennes à ma fête. Attention, si le sujet des deux verbes est le même, on utilise simplement l'infinitif, sans que : quiero venir, je veux venir. Autre exemple : mis padres quieren que estudie más, mes parents veulent que j'étudie davantage.",
    },
    {
      titre: "Ojalá (que) + subjonctif",
      illustration: "🤞",
      visuel: "¡Ojalá apruebe el examen!",
      contenu: [
        "Ojalá (que) + subjonctif : pourvu que…, j'espère que… (souhait fort)",
        "¡Ojalá apruebe el examen! : pourvu que je réussisse l'examen !",
        "Ojalá que llueva pronto : j'espère qu'il va pleuvoir bientôt",
        "Le « que » après ojalá est facultatif à l'oral",
      ],
      voixOff:
        "Ojalá est une expression d'origine arabe qui signifie pourvu que ou j'espère que. Elle est toujours suivie du subjonctif et exprime un souhait fort, parfois incertain. ¡Ojalá apruebe el examen!, pourvu que je réussisse l'examen ! Ojalá que llueva pronto, j'espère qu'il va pleuvoir bientôt. Le mot que après ojalá est facultatif, surtout à l'oral, mais on peut toujours l'ajouter.",
    },
    {
      titre: "Es importante/necesario que + subjonctif",
      illustration: "📌",
      visuel: "Es importante que estudies",
      contenu: [
        "Es importante que + subjonctif : il est important que…",
        "Es necesario que + subjonctif : il est nécessaire que…",
        "Es importante que respetéis las normas : il est important que vous respectiez les règles",
        "Ces expressions impersonnelles sont toujours suivies du subjonctif",
      ],
      voixOff:
        "Les expressions impersonnelles comme es importante que ou es necesario que sont toujours suivies du subjonctif. Es importante que respetéis las normas, il est important que vous respectiez les règles. On peut aussi dire es necesario que llegues a tiempo, il est nécessaire que tu arrives à l'heure. Ces structures expriment une recommandation ou une nécessité générale.",
    },
    {
      titre: "Indicatif ou subjonctif ?",
      illustration: "⚖️",
      visuel: "Sé que vienes / Quiero que vengas",
      contenu: [
        "Sé que vienes (indicatif) : fait certain, je sais que tu viens",
        "Quiero que vengas (subjonctif) : souhait, pas encore réalisé",
        "Creo que tiene razón (indicatif) : opinion affirmative",
        "No creo que tenga razón (subjonctif) : le doute déclenche le subjonctif",
      ],
      voixOff:
        "Pour bien choisir entre indicatif et subjonctif, compare ces phrases. Sé que vienes, à l'indicatif, exprime un fait certain : je sais que tu viens. Quiero que vengas, au subjonctif, exprime un souhait qui n'est pas encore réalisé. De même, creo que tiene razón, à l'indicatif, exprime une opinion affirmative. Mais no creo que tenga razón, avec la négation, passe au subjonctif, car le doute apparaît.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 -AR→e / -ER-IR→a + querer que/ojalá/es importante que",
      contenu: [
        "-AR : terminaisons en -e (hable) — -ER/-IR : terminaisons en -a (coma, viva)",
        "Irréguliers de la forme yo se conservent : tenga, haga, ponga, diga",
        "Totalement irréguliers : sea, esté, vaya, sepa, haya, dé",
        "Déclencheurs : querer que, ojalá (que), es importante/necesario que",
      ],
      voixOff:
        "Résumons. Les verbes en -ar prennent des terminaisons en -e au subjonctif, comme hable. Les verbes en -er et -ir prennent des terminaisons en -a, comme coma et viva. Les verbes irréguliers à la forme yo du présent gardent cette irrégularité au subjonctif : tenga, haga, ponga, diga. Six verbes sont totalement irréguliers : sea, esté, vaya, sepa, haya et dé. Enfin, retiens les trois déclencheurs essentiels : querer que, ojalá que, et es importante ou necesario que.",
    },
  ],
  fiche: {
    intro:
      "Le présent du subjonctif exprime un souhait, un doute ou une nécessité concernant l'action d'une autre personne. Il se forme en inversant les terminaisons habituelles et compte plusieurs verbes irréguliers à mémoriser.",
    sections: [
      {
        titre: "Quand utiliser le subjonctif",
        points: [
          "Après un verbe de souhait, doute ou sentiment + que, quand le sujet change",
          "L'indicatif exprime un fait certain ; le subjonctif exprime un souhait ou un doute",
        ],
      },
      {
        titre: "La formation régulière",
        points: [
          "-AR : -e, -es, -e, -emos, -éis, -en (hable, hables…)",
          "-ER/-IR : -a, -as, -a, -amos, -áis, -an (coma, comas… / viva, vivas…)",
          "On part de la forme yo du présent, on enlève le -o, on ajoute la terminaison inversée",
        ],
      },
      {
        titre: "Les irréguliers",
        points: [
          "Irrégularité de la forme yo conservée : tenga, haga, ponga, salga, diga, conozca",
          "Totalement irréguliers : sea (ser), esté (estar), vaya (ir), sepa (saber), haya (haber), dé (dar)",
        ],
      },
      {
        titre: "Les déclencheurs du subjonctif",
        points: [
          "Querer que + subjonctif (souhait pour une autre personne)",
          "Ojalá (que) + subjonctif (espoir fort)",
          "Es importante/necesario que + subjonctif (nécessité impersonnelle)",
        ],
      },
    ],
    audio:
      "Fiche de révision : introduction au subjonctif en espagnol. Le subjonctif exprime un souhait, un doute ou une nécessité concernant l'action d'une autre personne, généralement après que. Les verbes en -ar prennent des terminaisons en -e au subjonctif : hable, hables, hable, hablemos, habléis, hablen. Les verbes en -er et -ir prennent des terminaisons en -a : coma, comas, coma, comamos, comáis, coman, et viva, vivas, viva, vivamos, viváis, vivan. Les verbes irréguliers à la forme yo du présent gardent cette irrégularité : tenga, haga, ponga, salga, diga. Six verbes sont totalement irréguliers : sea, esté, vaya, sepa, haya et dé. On utilise le subjonctif après querer que, ojalá que, et es importante ou necesario que.",
  },
  memoCards: [
    { recto: "Hablar (subjuntivo) : hable, hables, hable…", verso: "Parler : terminaisons en -e pour les verbes en -ar au subjonctif." },
    { recto: "Comer/Vivir (subjuntivo) : coma/viva…", verso: "Manger/Vivre : terminaisons en -a pour les verbes en -er/-ir au subjonctif." },
    { recto: "Tener (tengo) → Tenga", verso: "L'irrégularité de la forme yo se conserve au subjonctif." },
    { recto: "Ser → Sea / Estar → Esté", verso: "Verbes totalement irréguliers au subjonctif." },
    { recto: "Ir → Vaya / Saber → Sepa / Haber → Haya", verso: "Autres verbes totalement irréguliers au subjonctif." },
    { recto: "Quiero que vengas", verso: "Querer que + subjonctif : souhait pour une autre personne." },
    { recto: "¡Ojalá apruebe el examen!", verso: "Ojalá (que) + subjonctif : pourvu que…, j'espère que…" },
    { recto: "Es importante que estudies", verso: "Expression impersonnelle + que + subjonctif : nécessité." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la terminaison des verbes en -ar au subjonctif présent ?",
      choix: ["-a, -as, -a…", "-e, -es, -e…", "-o, -as, -a…", "-í, -iste, -ió…"],
      bonneReponse: 1,
      explication: "Les verbes en -ar prennent des terminaisons en -e au subjonctif : hable, hables, hable…",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « comer » au subjonctif avec « yo » ?",
      choix: ["como", "comí", "coma", "comeré"],
      bonneReponse: 2,
      explication: "Coma est la première personne du subjonctif de comer.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « Je veux que tu viennes demain. » (querer que)",
      reponse: "Quiero que vengas mañana.",
      explication: "Vengas est le subjonctif de venir après querer que, car le sujet change.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle expression est toujours suivie du subjonctif ?",
      choix: ["Sé que…", "Creo que…", "Ojalá que…", "Es verdad que…"],
      bonneReponse: 2,
      explication: "Ojalá que exprime un souhait et déclenche systématiquement le subjonctif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « ser » au subjonctif avec « nosotros » ?",
      choix: ["somos", "seamos", "fuimos", "seremos"],
      bonneReponse: 1,
      explication: "Seamos est la forme nosotros du subjonctif irrégulier de ser.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « tener » au subjonctif avec « tú » et traduis « il est important que tu aies de la patience ».",
      reponse: "Tengas. Es importante que tengas paciencia.",
      explication: "Tener garde son irrégularité de la forme yo (tengo) au subjonctif : tenga, tengas…",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Mes parents veulent que j'étudie plus. »",
      reponse: "Mis padres quieren que estudie más.",
      explication: "Estudie est le subjonctif de estudiar, car le sujet (yo) diffère du sujet de quieren (mis padres).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement le subjonctif après « es necesario que » ?",
      choix: ["Es necesario que llegas a tiempo", "Es necesario que llegues a tiempo", "Es necesario llegar a tiempo tú", "Es necesario que llegarás a tiempo"],
      bonneReponse: 1,
      explication: "Es necesario que est toujours suivi du subjonctif : llegues.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on dit « quiero comer » mais « quiero que comas », avec les deux phrases traduites.",
      reponse:
        "Quiero comer signifie je veux manger : le sujet de querer et de comer est le même (yo), donc on utilise l'infinitif, sans que. Quiero que comas signifie je veux que tu manges : le sujet change (yo veut, tú manges), donc on utilise que + subjonctif.",
      explication: "La règle clé du subjonctif : même sujet = infinitif, sujet différent = que + subjonctif.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « No creo que tenga razón », pourquoi utilise-t-on le subjonctif alors que « creo que tiene razón » utilise l'indicatif ?",
      choix: [
        "Parce que creer est toujours suivi du subjonctif",
        "Parce que la négation « no creo que » introduit un doute, ce qui déclenche le subjonctif",
        "C'est une erreur, il faudrait dire no creo que tiene razón",
        "Parce que razón est un mot féminin"
      ],
      bonneReponse: 1,
      explication: "Creer que à l'affirmative exprime une certitude (indicatif) ; à la négative, il exprime un doute (subjonctif).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige 4 phrases utilisant chacune un déclencheur différent du subjonctif appris dans ce chapitre (querer que, ojalá que, es importante que, es necesario que).",
      reponse:
        "Quiero que mis amigos vengan a mi cumpleaños. Ojalá que haga buen tiempo el sábado. Es importante que estudiemos para el examen. Es necesario que seamos puntuales.",
      explication: "Le texte utilise vengan, haga, estudiemos et seamos, tous au subjonctif après un déclencheur différent.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Conjugue « ir » et « estar » au subjonctif avec « ellos », puis utilise chacun dans une phrase avec ojalá que.",
      reponse:
        "Vayan (ir), estén (estar). Ojalá que vayan de vacaciones pronto. Ojalá que estén bien.",
      explication: "Ir et estar sont totalement irréguliers au subjonctif : vaya/vayan, esté/estén.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la terminaison des verbes en -er/-ir au subjonctif présent ?",
      choix: ["-e, -es, -e…", "-a, -as, -a…", "-o, -es, -e…", "-í, -iste, -ió…"],
      bonneReponse: 1,
      explication: "Les verbes en -er/-ir prennent des terminaisons en -a au subjonctif.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « estar » au subjonctif avec « yo » ?",
      choix: ["estoy", "esté", "estaba", "estaré"],
      bonneReponse: 1,
      explication: "Esté est la première personne du subjonctif irrégulier de estar.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Il est important que vous respectiez les règles. » (vosotros)",
      reponse: "Es importante que respetéis las normas.",
      explication: "Respetéis est le subjonctif de respetar à la deuxième personne du pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète : « Ojalá __ (hacer) buen tiempo mañana. »",
      reponse: "Ojalá haga buen tiempo mañana.",
      explication: "Haga est le subjonctif irrégulier de hacer, dont la forme yo hago se conserve.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige 3 phrases utilisant querer que, ojalá que et es necesario que avec des verbes différents.",
      reponse: "Quiero que seas feliz. Ojalá que apruebe el examen. Es necesario que lleguemos a tiempo.",
      explication: "Les trois phrases combinent différents déclencheurs et verbes au subjonctif.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Introduction au subjonctif",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte de « vivir » au subjonctif avec « yo » ?",
          choix: ["vivo", "viva", "viví", "viviré"],
          bonneReponse: 1,
          explication: "Viva est la première personne du subjonctif de vivir.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle expression déclenche le subjonctif ?",
          choix: ["Sé que…", "Quiero que…", "Es verdad que…", "Estoy seguro de que…"],
          bonneReponse: 1,
          explication: "Quiero que exprime un souhait et déclenche le subjonctif.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Il est nécessaire que nous partions tôt. » (irse)",
          reponse: "Es necesario que nos vayamos temprano.",
          explication: "Vayamos est le subjonctif de ir à la première personne du pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « saber » au subjonctif avec « ellos » et traduis « j'espère qu'ils sachent la vérité ». (ojalá)",
          reponse: "Sepan. Ojalá que sepan la verdad.",
          explication: "Saber est totalement irrégulier au subjonctif : sepa, sepas, sepa, sepamos, sepáis, sepan.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un texte (6 phrases minimum) exprimant des souhaits pour ta classe, en utilisant querer que, ojalá que, es importante que et deux verbes irréguliers différents au subjonctif.",
          reponse:
            "Quiero que todos mis compañeros aprueben el examen. Ojalá que el profesor esté contento con nuestro trabajo. Es importante que seamos puntuales cada día. También quiero que tengamos más tiempo para estudiar. Ojalá que vayamos de excursión pronto. Es necesario que hagamos nuestros deberes todos los días.",
          explication: "Le texte combine plusieurs déclencheurs et les irréguliers estén, sean, tengamos, vayamos, hagamos.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « quiero que estudies » et non « quiero que estudias » ?",
          choix: [
            "Parce qu'après que, on utilise toujours le présent de l'indicatif",
            "Parce qu'après un verbe de souhait comme querer, le verbe qui suit que se met au subjonctif",
            "C'est une erreur, les deux formes sont possibles",
            "Parce que estudiar est un verbe irrégulier"
          ],
          bonneReponse: 1,
          explication: "Querer que exige systématiquement le subjonctif dans la subordonnée, jamais l'indicatif.",
        },
      ],
    },
    {
      titre: "Examen 2 — Introduction au subjonctif",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte de « hacer » au subjonctif avec « tú » ?",
          choix: ["haces", "hagas", "hiciste", "harás"],
          bonneReponse: 1,
          explication: "Hagas est le subjonctif de hacer à la deuxième personne, à partir de hago.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Ojalá » signifie approximativement :",
          choix: ["je sais que", "pourvu que / j'espère que", "je pense que", "il est vrai que"],
          bonneReponse: 1,
          explication: "Ojalá exprime un souhait fort, pourvu que ou j'espère que.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Je veux que vous soyez heureux. » (vosotros, ser)",
          reponse: "Quiero que seáis felices.",
          explication: "Seáis est le subjonctif irrégulier de ser à la deuxième personne du pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande pourquoi tu dis « es importante que estudiemos ». Explique la règle en une phrase, puis complète avec une autre expression impersonnelle et un verbe différent.",
          reponse: "Es importante que exige toujours le subjonctif. Es necesario que practiquemos más español.",
          explication: "Toutes les expressions impersonnelles de nécessité entraînent le subjonctif.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare l'indicatif et le subjonctif en donnant un exemple de chacun avec le même verbe (venir), puis explique la différence de sens.",
          reponse:
            "À l'indicatif : sé que vienes, je sais que tu viens, exprime un fait certain. Au subjonctif : quiero que vengas, je veux que tu viennes, exprime un souhait qui n'est pas encore réalisé. Le subjonctif introduit une part d'incertitude ou de désir, contrairement à l'indicatif qui affirme un fait.",
          explication: "Le choix du mode dépend du degré de certitude exprimé par le premier verbe.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Ojalá que mis padres me dejen ir a la fiesta », pourquoi le verbe « dejar » est-il au subjonctif ?",
          choix: [
            "Parce que ojalá exprime un souhait et est toujours suivi du subjonctif",
            "Parce que dejar est un verbe irrégulier",
            "Parce que la phrase est à la forme négative",
            "C'est une erreur, il faudrait dire dejan"
          ],
          bonneReponse: 0,
          explication: "Ojalá (que) est systématiquement suivi du subjonctif, quel que soit le verbe.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le subjonctif exprime un souhait, un doute ou une nécessité concernant l'action d'une autre personne.",
    "-AR : terminaisons en -e (hable, hables…) — -ER/-IR : terminaisons en -a (coma, viva…).",
    "Les irréguliers de la forme yo se conservent : tenga, haga, ponga, salga, diga.",
    "Six verbes totalement irréguliers : sea, esté, vaya, sepa, haya, dé.",
    "Déclencheurs essentiels : querer que, ojalá (que), es importante/necesario que.",
    "Même sujet → infinitif (quiero comer) ; sujet différent → que + subjonctif (quiero que comas).",
  ],
};

export default chapitre;
