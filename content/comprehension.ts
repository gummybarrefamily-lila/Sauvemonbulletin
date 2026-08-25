import type { FicheSection, QuestionQCM } from "./types";

/**
 * Compréhension de texte (préparation au brevet) : des fiches de savoir-faire
 * (genres, intentions, procédés, figures, tons, texte-image, citations)
 * accompagnées chacune de 10 séries d'exercices QCM.
 */
export interface FicheComprehension {
  slug: string;
  titre: string;
  emoji: string;
  accroche: string;
  sections: FicheSection[];
  /** 10 séries d'entraînement, ~5 QCM chacune. */
  series: { titre: string; questions: QuestionQCM[] }[];
}

export const COMPREHENSION: FicheComprehension[] = [
// Fiche « Le genre du texte » — préparation à la compréhension de texte du brevet.
// Reconnaître dès les premières secondes à quel genre appartient un texte (récit,
// théâtre, poésie, presse, correspondance, argumentation, texte documentaire...)
// est le premier réflexe à avoir avant de répondre aux questions de compréhension.

{
  slug: "genre-du-texte",
  titre: "Le genre du texte",
  emoji: "📖",
  accroche:
    "Avant même de comprendre le sens d'un texte, il faut savoir à quel genre il appartient : un roman ne se lit pas comme une pièce de théâtre, un article ne se lit pas comme un poème. Repérer le genre en quelques secondes, c'est déjà répondre à la moitié des questions.",
  sections: [
    {
      titre: "Le récit : roman, nouvelle, conte, autobiographie",
      points: [
        "Mise en page : du texte suivi organisé en paragraphes, parfois des chapitres numérotés ou titrés. Aucune indication scénique, aucune strophe.",
        "Temps verbaux : passé simple et imparfait pour un récit au passé (« Il entra, elle dormait encore »), ou présent de narration pour rendre l'action vivante.",
        "Présence d'un narrateur qui raconte à la 3e personne (« il/elle ») — sauf dans l'autobiographie et le récit à la 1re personne, où le narrateur dit « je » et raconte sa propre vie ou une histoire inventée qu'il prétend vivre.",
        "Le conte se reconnaît à sa formule d'ouverture (« Il était une fois »), à ses personnages types (roi, fée, ogre) et à sa visée : distraire tout en délivrant une morale.",
        "La nouvelle ressemble au roman en plus court : peu de personnages, une seule intrigue resserrée, souvent une chute finale surprenante.",
        "Indices de vocabulaire : verbes d'action et de parole, descriptions de lieux et de personnages, dialogues insérés dans la narration avec des tirets ou des guillemets.",
      ],
    },
    {
      titre: "Le théâtre : reconnaître un texte fait pour être joué",
      points: [
        "Mise en page unique et immédiatement reconnaissable : le nom du personnage en majuscules ou en gras est suivi de deux points, puis de sa réplique.",
        "Les didascalies, souvent en italique et entre parenthèses, donnent des indications de jeu, de décor ou de ton (« Il sort en claquant la porte »). Elles ne sont jamais dites à voix haute par les acteurs.",
        "Le texte est presque entièrement composé de dialogues : peu ou pas de description continue, contrairement au récit.",
        "Le temps dominant est le présent, car les répliques se déroulent au moment où elles sont prononcées sur scène.",
        "Le texte est organisé en actes et en scènes, indiqués en tête de passage (« Acte II, scène 3 »).",
        "Visée : faire imaginer une représentation vivante, avec des voix, des déplacements et une mise en scène possible.",
      ],
    },
    {
      titre: "La poésie : vers, strophes et jeux sur la langue",
      points: [
        "Mise en page en vers : le texte est découpé en lignes courtes qui ne vont pas jusqu'au bord de la page, regroupées en strophes séparées par un blanc.",
        "Présence fréquente de rimes (sons répétés en fin de vers) et d'un rythme marqué, mais un poème peut aussi être en vers libres, sans rime ni régularité.",
        "Foisonnement de figures de style : comparaisons, métaphores, personnifications, répétitions, qui créent des images et une musicalité absentes des textes purement informatifs.",
        "Le texte privilégie souvent l'émotion, la beauté de la langue ou l'expression d'un sentiment plutôt que le récit d'une action précise.",
        "Certains poèmes en prose n'ont pas de vers ni de rimes mais gardent une langue très travaillée, imagée et rythmée : c'est le style qui trahit alors le genre.",
        "Indice de mise en page à ne jamais négliger : un vers commence traditionnellement par une majuscule, même au milieu d'une phrase.",
      ],
    },
    {
      titre: "La presse et le texte documentaire : informer et expliquer",
      points: [
        "L'article de presse s'ouvre par un titre, parfois un chapô (court paragraphe résumé en gras) et mentionne une source, une date, parfois un auteur signé.",
        "Il répond aux questions qui ? quoi ? où ? quand ? comment ? pourquoi ?, avec des faits vérifiables, des chiffres, des citations de témoins entre guillemets.",
        "Le texte documentaire ou explicatif (manuel, encyclopédie, notice) utilise le présent de vérité générale intemporel (« L'eau bout à 100 °C ») et un vocabulaire technique précis.",
        "Ces deux genres visent à informer ou à expliquer objectivement : peu ou pas d'expression des sentiments de l'auteur, ton neutre, absence de « je » impliqué.",
        "Des éléments visuels accompagnent souvent ces textes : intertitres, schémas légendés, encadrés, définitions en marge.",
        "La lettre et le journal intime, eux, s'ouvrent par une formule d'appel ou une date en en-tête, s'adressent à un destinataire précis (réel ou soi-même) et emploient le « je » et le « tu »/« vous » : ils appartiennent au registre de l'intime ou du personnel, pas à l'information objective.",
      ],
    },
    {
      titre: "Le texte argumentatif : défendre une thèse",
      points: [
        "L'auteur défend une opinion (une thèse) et cherche à convaincre ou persuader le lecteur, contrairement au texte documentaire qui se contente d'informer.",
        "Présence de connecteurs logiques marqués : « or, donc, cependant, en effet, par conséquent, premièrement... », qui organisent les arguments.",
        "Les arguments sont souvent appuyés par des exemples concrets et parfois des chiffres, mais l'objectif reste de faire adhérer le lecteur à une idée, pas seulement de l'informer.",
        "Le vocabulaire évaluatif (jugements de valeur, adjectifs mélioratifs ou péjoratifs) trahit une prise de position : « cette décision est scandaleuse », « il est indispensable de... ».",
        "Formes fréquentes : lettre ouverte, essai, discours, éditorial, plaidoyer ou réquisitoire, tribune dans un journal.",
        "Question rhétorique et interpellation du lecteur (« Ne devrions-nous pas... ? ») sont des signaux typiques de l'argumentation.",
      ],
    },
  ],
  series: [
    {
      titre: "Série 1 — Les indices de mise en page",
      questions: [
        {
          type: "qcm",
          question:
            "« ROMÉO : Mais quelle lumière apparaît à cette fenêtre ? (Il regarde vers le balcon.) » Quel indice de mise en page permet d'identifier immédiatement le genre de ce texte ?",
          choix: [
            "Le nom du personnage suivi de deux points, et la didascale entre parenthèses",
            "La présence d'une majuscule en début de ligne",
            "L'usage du point d'interrogation",
            "La longueur de la phrase",
          ],
          bonneReponse: 0,
          explication:
            "Le nom du personnage en majuscules suivi de deux points, puis une indication scénique entre parenthèses (la didascalie), sont des marques exclusives du texte théâtral.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Un texte est présenté ainsi : des lignes courtes, inégales, regroupées par blocs séparés d'un blanc, avec des sons qui se répètent en fin de ligne. De quel genre s'agit-il ?",
          choix: ["Un article de presse", "Un texte théâtral", "Un poème", "Une lettre"],
          bonneReponse: 2,
          explication:
            "Des vers regroupés en strophes, avec des rimes en fin de ligne : c'est la mise en page caractéristique de la poésie.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le 14 mars 1943. Chère Kitty, aujourd'hui il s'est passé quelque chose d'incroyable... » Quel indice montre qu'il s'agit d'un journal intime et non d'un roman ?",
          choix: [
            "L'usage du passé composé",
            "La date en en-tête et l'apostrophe à un destinataire fictif (« Chère Kitty »)",
            "La présence d'un point d'exclamation",
            "Le mot « incroyable »",
          ],
          bonneReponse: 1,
          explication:
            "La date en tête de paragraphe et l'adresse directe à un destinataire (même imaginaire, comme « Kitty ») sont typiques du journal intime, une forme de récit personnel.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Un texte commence par un gros titre en gras, suivi d'un court paragraphe en italique qui résume l'essentiel, avant l'article complet signé d'un journaliste. Que reconnaît-on dans cette organisation ?",
          choix: ["Un conte", "Un article de presse (avec son chapô)", "Une fable", "Un poème en prose"],
          bonneReponse: 1,
          explication:
            "Titre, chapô (le résumé en italique ou en gras) et signature du journaliste sont les éléments de mise en page typiques d'un article de presse.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Il était une fois, dans un royaume lointain, un roi qui avait trois filles. » À quel genre appartient très probablement ce texte ?",
          choix: ["Un article documentaire", "Un conte", "Une lettre", "Un texte argumentatif"],
          bonneReponse: 1,
          explication:
            "La formule d'ouverture « Il était une fois » et les personnages types (roi, royaume lointain) sont la signature du conte.",
          difficulte: "facile",
        },
      ],
    },
    {
      titre: "Série 2 — Les temps verbaux comme indices",
      questions: [
        {
          type: "qcm",
          question:
            "« La grenouille voulait se faire aussi grosse que le bœuf. Elle s'enfla, s'enfla, et creva. » Quels temps dominent, et quel genre cela signale-t-il ?",
          choix: [
            "Le présent de vérité générale : un texte documentaire",
            "L'imparfait et le passé simple : un récit au passé",
            "Le futur : une lettre",
            "Le conditionnel : un texte argumentatif",
          ],
          bonneReponse: 1,
          explication:
            "L'imparfait (« voulait ») pour la situation et le passé simple (« s'enfla », « creva ») pour les actions ponctuelles sont les temps classiques du récit au passé.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« L'eau est composée de deux atomes d'hydrogène et d'un atome d'oxygène. » Ce présent est appelé présent de vérité générale : dans quel type de texte le trouve-t-on typiquement ?",
          choix: ["Un texte théâtral", "Un texte documentaire ou explicatif", "Un poème", "Un conte"],
          bonneReponse: 1,
          explication:
            "Le présent de vérité générale, intemporel, sert à énoncer des faits toujours vrais : c'est l'outil du texte documentaire ou explicatif.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« JULIETTE : Je t'attends. Ne tarde pas. » Pourquoi le présent employé ici n'est-il pas un présent de vérité générale ?",
          choix: [
            "Parce que c'est un présent d'énonciation : la réplique se dit au moment même où elle est prononcée sur scène",
            "Parce que le théâtre interdit le présent",
            "Parce qu'il s'agit d'un ordre au futur",
            "Parce que Juliette parle d'un fait scientifique",
          ],
          bonneReponse: 0,
          explication:
            "Au théâtre, le présent domine parce que la réplique est censée se dérouler au moment précis où elle est dite par le personnage sur scène : c'est un présent d'énonciation, pas une vérité générale.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Je me souviens encore de cette matinée d'été où mon grand-père m'apprit à nager. » L'emploi du « je » et du passé simple dans ce court passage évoque plutôt :",
          choix: [
            "Un article de presse objectif",
            "Un récit autobiographique",
            "Une notice explicative",
            "Un texte théâtral",
          ],
          bonneReponse: 1,
          explication:
            "Le narrateur-personnage qui dit « je » et raconte un souvenir personnel au passé est la marque du récit autobiographique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Cette réforme est injuste et doit être abandonnée sans délai. » Quel indice grammatical, au-delà du vocabulaire, pourrait aussi apparaître dans ce type de texte ?",
          choix: [
            "Des didascalies entre parenthèses",
            "Des connecteurs logiques comme « par conséquent » ou « en effet »",
            "Des rimes en fin de phrase",
            "Une formule d'ouverture « Il était une fois »",
          ],
          bonneReponse: 1,
          explication:
            "Le texte argumentatif s'appuie sur une progression logique de l'argumentation, signalée par des connecteurs comme « en effet », « donc », « par conséquent ».",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 3 — Identifier la visée du texte",
      questions: [
        {
          type: "qcm",
          question:
            "Un texte raconte les mésaventures d'un renard rusé qui trompe un corbeau pour lui voler son fromage, puis se termine par une leçon de morale en une phrase. Quel est ce genre ?",
          choix: ["Une fable", "Un article de presse", "Un texte documentaire", "Une lettre officielle"],
          bonneReponse: 0,
          explication:
            "Un court récit mettant en scène des animaux et se terminant par une morale explicite est une fable, un sous-genre proche du conte à visée éducative.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Selon une étude publiée mardi, 60 % des collégiens interrogés déclarent lire moins de livres qu'il y a dix ans. » Quelle est la visée principale de ce texte ?",
          choix: ["Émouvoir par une image poétique", "Informer objectivement grâce à des données chiffrées", "Faire rire avec une chute", "Convaincre par un jugement de valeur"],
          bonneReponse: 1,
          explication:
            "Chiffres, source citée (« une étude »), date : ce sont les marques d'un texte informatif de presse qui vise à rapporter des faits.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Il est urgent d'interdire les téléphones portables au collège : ils nuisent à la concentration, isolent les élèves entre eux et favorisent le harcèlement en ligne. » Quelle est la visée de ce texte ?",
          choix: ["Décrire un lieu", "Raconter une aventure", "Convaincre le lecteur d'une thèse à l'aide d'arguments", "Réciter un poème"],
          bonneReponse: 2,
          explication:
            "L'auteur prend position (« il est urgent d'interdire ») et aligne plusieurs arguments : c'est la structure d'un texte argumentatif qui vise à convaincre.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le brouillard se levait, léger et gris, comme un voile posé sur la mer endormie. » Cette phrase, par ses images et son rythme, appartient à un texte dont la visée principale est :",
          choix: ["Convaincre à l'aide d'arguments", "Informer sur un phénomène météorologique", "Créer une atmosphère poétique par les images et les sonorités", "Donner un ordre"],
          bonneReponse: 2,
          explication:
            "La comparaison (« comme un voile ») et le soin porté au rythme et aux sonorités montrent une visée esthétique et évocatrice, typique de l'écriture poétique, même sans mise en vers.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le fonctionnement du cœur repose sur quatre cavités qui se contractent et se relâchent de manière coordonnée pour propulser le sang. » Ce texte a pour visée de :",
          choix: ["Convaincre", "Expliquer un mécanisme de façon neutre et objective", "Émouvoir", "Raconter une histoire personnelle"],
          bonneReponse: 1,
          explication:
            "Vocabulaire technique, absence de jugement de valeur, présent de vérité générale : ce texte documentaire vise uniquement à expliquer un fonctionnement.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 4 — Distinguer les sous-genres du récit",
      questions: [
        {
          type: "qcm",
          question:
            "Un texte de trois pages met en scène deux personnages, une seule intrigue resserrée sur une soirée, et se termine sur une révélation inattendue en toute dernière ligne. Quel genre correspond le mieux ?",
          choix: ["Un roman fleuve", "Une nouvelle à chute", "Une pièce de théâtre", "Un poème épique"],
          bonneReponse: 1,
          explication:
            "Brièveté, peu de personnages, intrigue resserrée et chute finale surprenante : ce sont les traits distinctifs de la nouvelle, en particulier de la nouvelle à chute.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Longtemps, je me suis couché de bonne heure. » Pour classer ce début de texte comme autobiographie plutôt que comme roman à la 1re personne, quel élément extérieur au texte faut-il vérifier ?",
          choix: [
            "Que le narrateur utilise le passé simple",
            "Que l'auteur, le narrateur et le personnage principal soient la même personne réelle",
            "Que le texte comporte des dialogues",
            "Que le texte soit très court",
          ],
          bonneReponse: 1,
          explication:
            "Le « je » seul ne suffit pas à prouver l'autobiographie : il faut que l'auteur raconte réellement sa propre vie (pacte autobiographique), sinon il peut s'agir d'un roman à la première personne, avec un narrateur fictif.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Un roman de 400 pages suit plusieurs personnages sur plusieurs années, avec de multiples intrigues secondaires qui s'entrecroisent. Ce qui distingue ce texte d'une nouvelle est avant tout :",
          choix: [
            "L'emploi du présent",
            "L'ampleur et la complexité de l'intrigue développée dans la durée",
            "L'absence totale de dialogue",
            "La présence de rimes",
          ],
          bonneReponse: 1,
          explication:
            "Le roman se distingue par une intrigue développée en longueur, souvent avec plusieurs fils narratifs, alors que la nouvelle vise la concision et une intrigue unique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Cendrillon devait rentrer avant minuit, sous peine de voir le carrosse redevenir citrouille. » Quel indice, propre au conte, distingue nettement ce texte d'un roman réaliste ?",
          choix: [
            "La présence d'un élément merveilleux qui n'obéit pas aux lois du réel (le carrosse qui redevient citrouille)",
            "L'usage de l'imparfait",
            "La présence d'un personnage féminin",
            "La longueur du texte",
          ],
          bonneReponse: 0,
          explication:
            "L'irruption d'éléments merveilleux impossibles dans la réalité (objets enchantés, métamorphoses, fées) signale le conte, alors que le roman réaliste reste dans le cadre du vraisemblable.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Dans un récit, un narrateur absent de l'histoire raconte à la 3e personne les pensées de plusieurs personnages successivement, sans jamais dire « je ». Ce texte relève :",
          choix: [
            "De l'autobiographie",
            "D'un récit à narrateur omniscient, à la 3e personne",
            "D'une pièce de théâtre",
            "D'un article de presse",
          ],
          bonneReponse: 1,
          explication:
            "Un narrateur extérieur à l'histoire, qui connaît les pensées de plusieurs personnages, est un narrateur omniscient : c'est une posture narrative propre au récit à la 3e personne, jamais au théâtre ni à l'autobiographie.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 5 — Presse, lettre et documentaire : ne pas confondre",
      questions: [
        {
          type: "qcm",
          question:
            "« Madame, Monsieur, je me permets de vous écrire au sujet de la fermeture annoncée de notre bibliothèque de quartier. » Quel genre reconnaît-on à la formule d'appel et à l'adresse directe ?",
          choix: ["Un article documentaire", "Une lettre", "Un conte", "Un poème"],
          bonneReponse: 1,
          explication:
            "La formule d'appel (« Madame, Monsieur ») et l'adresse directe à un destinataire identifié sont typiques de la lettre.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Deux textes traitent tous deux du réchauffement climatique. Le premier cite des relevés de température et des sources scientifiques sans donner d'avis ; le second affirme qu'il faut « agir immédiatement, car chaque jour perdu est une catastrophe ». Comment les distinguer ?",
          choix: [
            "Le premier est documentaire (informe), le second est argumentatif (cherche à convaincre)",
            "Les deux sont documentaires",
            "Les deux sont argumentatifs",
            "Le premier est une lettre, le second un poème",
          ],
          bonneReponse: 0,
          explication:
            "L'absence de jugement de valeur et la neutralité du premier texte signalent un texte documentaire ; l'expression d'un avis pressant et le vocabulaire évaluatif du second (« catastrophe ») signalent un texte argumentatif.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un texte présente une notice de montage : « Étape 1 : assemblez les pièces A et B. Étape 2 : vissez le support. » Ce texte relève du documentaire/explicatif car :",
          choix: [
            "Il utilise le passé simple",
            "Il donne des instructions objectives et méthodiques sans exprimer de sentiment",
            "Il commence par une date",
            "Il est écrit en vers",
          ],
          bonneReponse: 1,
          explication:
            "Une notice explicative énumère des étapes objectives et neutres, sans marque de subjectivité : c'est une forme du texte documentaire/explicatif, ici sous forme d'instructions.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Cher journal, aujourd'hui j'ai eu tellement peur en présentant mon exposé que j'ai cru m'évanouir. » En quoi ce texte diffère-t-il d'un article de presse relatant un événement scolaire ?",
          choix: [
            "Il exprime un vécu intime et personnel (« j'ai eu peur ») destiné à soi-même, alors que l'article rapporte des faits vérifiables à un large public",
            "Il utilise plus de chiffres",
            "Il est plus long",
            "Il ne contient aucun verbe",
          ],
          bonneReponse: 0,
          explication:
            "Le journal intime relève du registre personnel et de la confidence à soi-même, alors que l'article de presse relève de l'information factuelle destinée à un public large.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un texte encyclopédique sur les volcans comporte un schéma légendé de coupe transversale et un encadré « le saviez-vous ? ». Ces éléments visuels sont caractéristiques :",
          choix: ["Du texte théâtral", "Du texte documentaire", "Du poème en vers", "De la lettre"],
          bonneReponse: 1,
          explication:
            "Schémas légendés, encadrés et intertitres accompagnent souvent les textes documentaires pour appuyer et illustrer l'explication.",
          difficulte: "facile",
        },
      ],
    },
    {
      titre: "Série 6 — Les figures de style, indices du genre poétique",
      questions: [
        {
          type: "qcm",
          question:
            "« La lune, vieille reine pâle, veille sur le village endormi. » Quelle figure de style, fréquente en poésie, est employée ici et pourquoi oriente-t-elle vers ce genre ?",
          choix: [
            "Une énumération, typique du texte documentaire",
            "Une personnification (la lune comparée à une reine qui veille) qui crée une image poétique",
            "Une didascalie, typique du théâtre",
            "Un connecteur logique, typique de l'argumentation",
          ],
          bonneReponse: 1,
          explication:
            "Prêter à la lune une action et un statut humains (« reine », « veille ») est une personnification, procédé caractéristique de l'écriture poétique qui cherche à créer des images.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un texte multiplie les comparaisons, les métaphores et joue sur les sonorités (allitérations, assonances) sans jamais raconter d'action précise. Cela suggère :",
          choix: ["Un article factuel", "Un texte à visée poétique", "Une notice de montage", "Un compte rendu scientifique"],
          bonneReponse: 1,
          explication:
            "La densité des figures de style et le travail sur les sonorités, au détriment du récit d'actions précises, orientent vers une visée poétique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le vent hurle dans les branches, la pluie fouette le carreau, et l'orage gronde sans fin. » Que suggère l'accumulation de verbes d'action violents appliqués à des éléments naturels ?",
          choix: [
            "Un procédé argumentatif de type connecteur logique",
            "Une personnification des éléments naturels, créant une atmosphère dramatique proche du registre poétique",
            "Un présent de vérité générale documentaire",
            "Une didascalie théâtrale",
          ],
          bonneReponse: 1,
          explication:
            "Prêter des actions humaines violentes (« hurle », « fouette », « gronde ») à des éléments naturels est une personnification qui crée une atmosphère, procédé fréquent dans l'écriture poétique ou descriptive travaillée.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Un texte est écrit en prose continue, sans vers ni rimes, mais son vocabulaire est extrêmement imagé et son rythme très travaillé, presque musical. Peut-on tout de même parler de texte poétique ?",
          choix: [
            "Non, la poésie exige obligatoirement des vers et des rimes",
            "Oui, il peut s'agir d'un poème en prose : c'est le style et les images qui définissent la visée poétique, pas seulement la mise en page",
            "Non, il s'agit forcément d'un texte théâtral",
            "Non, il s'agit forcément d'un article de presse",
          ],
          bonneReponse: 1,
          explication:
            "Le poème en prose existe : il renonce aux vers et aux rimes mais conserve un travail poussé sur les images et le rythme de la langue, ce qui suffit à en faire un texte poétique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Ses yeux étaient deux étoiles brillant dans la nuit de son visage. » Quelle figure de style utilise directement une comparaison sans outil de comparaison (« comme », « tel que ») et signale une écriture travaillée ?",
          choix: ["Une énumération", "Une métaphore", "Une antithèse", "Une anaphore"],
          bonneReponse: 1,
          explication:
            "Assimiler directement les yeux à des étoiles, sans mot de comparaison, est une métaphore, procédé caractéristique de l'écriture poétique et imagée.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 7 — Théâtre et récit : ne pas les confondre",
      questions: [
        {
          type: "qcm",
          question:
            "« Elle entra dans la pièce, le visage fermé. — Tu ne m'avais pas dit qu'il viendrait, lança-t-elle. » Ce passage relève du récit et non du théâtre car :",
          choix: [
            "Il contient un dialogue introduit par un tiret dans une narration continue, et non une réplique précédée du nom du personnage",
            "Il est trop court pour être une pièce",
            "Il n'y a pas de point d'exclamation",
            "Il est écrit à l'imparfait uniquement",
          ],
          bonneReponse: 0,
          explication:
            "Un dialogue inséré dans une narration, avec verbe de parole (« lança-t-elle ») et tiret, appartient au récit ; au théâtre, la réplique serait précédée du seul nom du personnage suivi de deux points, sans narration autour.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« (Un temps. Il regarde ses mains.) HAROLD : Je n'aurais jamais dû accepter. » Quel élément prouve sans ambiguïté qu'il s'agit de théâtre ?",
          choix: [
            "L'emploi du passé composé",
            "La didascalie entre parenthèses associée au nom du personnage en majuscules suivi de deux points",
            "La présence d'un point d'exclamation",
            "La longueur de la phrase",
          ],
          bonneReponse: 1,
          explication:
            "La combinaison d'une didascalie (indication scénique entre parenthèses) et du nom du personnage suivi de deux points est une convention exclusive du texte théâtral.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Un texte alterne de longues descriptions de décor à la 3e personne et des répliques introduites par « dit-il », « répondit-elle ». Malgré la présence de dialogues, pourquoi ce texte est-il un récit et non une pièce ?",
          choix: [
            "Parce qu'il y a un narrateur qui décrit et commente l'action entre les répliques, ce qu'un texte théâtral ne fait jamais",
            "Parce qu'il n'y a pas de personnages",
            "Parce qu'il est écrit au futur",
            "Parce qu'il ne contient aucun verbe de parole",
          ],
          bonneReponse: 0,
          explication:
            "La présence d'un narrateur qui décrit, commente et rapporte les paroles (« dit-il ») signale un récit ; au théâtre, il n'y a pas de narrateur, seulement des répliques et des didascalies.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Une scène est découpée en répliques très courtes, échangées rapidement entre deux personnages, sans aucune description ni commentaire extérieur. Ce rythme rapide de « stichomythie » (répliques brèves qui s'enchaînent) est caractéristique :",
          choix: ["Du récit descriptif", "Du dialogue théâtral, notamment dans les scènes de tension ou de dispute", "Du texte documentaire", "De la lettre administrative"],
          bonneReponse: 1,
          explication:
            "L'enchaînement rapide de répliques très courtes, sans aucun commentaire narratif, est une caractéristique du dialogue théâtral, en particulier utilisée pour marquer une tension dramatique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Acte I, scène 1. Le rideau se lève sur un salon bourgeois. » Quel double indice permet de situer ce texte dans le genre théâtral ?",
          choix: [
            "Le découpage en acte et scène, et la référence à un espace scénique concret (« le rideau se lève »)",
            "L'usage du passé simple et de l'imparfait",
            "La présence d'un narrateur omniscient",
            "L'usage de rimes",
          ],
          bonneReponse: 0,
          explication:
            "Le découpage en actes et scènes ainsi que les références à la représentation matérielle (rideau, salon comme décor) confirment qu'il s'agit d'un texte destiné à la scène.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 8 — L'argumentation : repérer thèse et arguments",
      questions: [
        {
          type: "qcm",
          question:
            "« Le port de l'uniforme à l'école devrait être généralisé : il réduirait les inégalités visibles entre élèves, faciliterait les matins des familles et renforcerait le sentiment d'appartenance à l'établissement. » Combien d'arguments distincts soutiennent la thèse énoncée ?",
          choix: ["Un seul", "Deux", "Trois", "Aucun, ce n'est qu'une description"],
          bonneReponse: 2,
          explication:
            "Trois arguments sont juxtaposés pour soutenir la thèse : réduire les inégalités, faciliter les matins, renforcer l'appartenance. Reconnaître le nombre d'arguments est essentiel pour analyser un texte argumentatif.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Certes, les écrans permettent d'accéder à une information rapide ; cependant, un usage excessif nuit gravement au sommeil des adolescents. » Le connecteur « cependant » indique ici :",
          choix: [
            "Une addition d'arguments allant dans le même sens",
            "Une opposition entre une concession et l'argument principal de l'auteur",
            "Une conclusion",
            "Un exemple",
          ],
          bonneReponse: 1,
          explication:
            "« Certes... cependant » est une structure concessive : l'auteur admet un point (les écrans informent vite) avant d'opposer son véritable argument (le sommeil est menacé), technique classique de l'argumentation.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Ne devrions-nous pas repenser entièrement notre façon de consommer avant qu'il ne soit trop tard ? » Cette phrase, qui n'attend pas vraiment de réponse, est :",
          choix: ["Une didascalie", "Une question rhétorique destinée à faire réfléchir et adhérer le lecteur", "Une formule d'ouverture de conte", "Un présent de vérité générale"],
          bonneReponse: 1,
          explication:
            "La question rhétorique, qui n'appelle pas de réponse mais vise à faire réfléchir et à orienter le lecteur vers la thèse de l'auteur, est un procédé typique du texte argumentatif.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un éditorial affirme : « Cette politique est un échec cuisant, une faute morale que l'histoire jugera sévèrement. » Quel indice lexical trahit une visée argumentative plutôt qu'informative ?",
          choix: [
            "L'usage du présent",
            "Le vocabulaire fortement évaluatif et péjoratif (« échec cuisant », « faute morale »)",
            "La présence d'une virgule",
            "La longueur de la phrase",
          ],
          bonneReponse: 1,
          explication:
            "Les expressions à forte charge de jugement (« échec cuisant », « faute morale ») expriment un point de vue et cherchent à influencer le lecteur : c'est la marque du texte argumentatif, à l'opposé de la neutralité du texte informatif.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un texte défend l'idée que la lecture devrait être davantage encouragée au collège. Il commence par : « On pourrait objecter que les élèves d'aujourd'hui préfèrent les écrans. Pourtant, rien ne remplace le plaisir d'un livre. » Cette stratégie qui consiste à évoquer puis réfuter l'avis contraire s'appelle :",
          choix: ["Une didascalie", "La réfutation d'une thèse adverse (concession suivie d'une réfutation)", "Une personnification", "Un présent de narration"],
          bonneReponse: 1,
          explication:
            "Présenter d'abord l'objection possible (« on pourrait objecter ») puis la réfuter (« pourtant ») est une stratégie argumentative avancée : la concession suivie de la réfutation, destinée à anticiper les objections du lecteur.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 9 — Textes mêlés : croiser plusieurs indices",
      questions: [
        {
          type: "qcm",
          question:
            "« Grand-mère, raconte-moi encore comment on fabriquait le pain autrefois. — Eh bien, mon petit, il fallait d'abord... » Un narrateur situe la scène puis laisse place à un dialogue rapporté au discours direct. À quel genre ce texte appartient-il malgré la présence de dialogue ?",
          choix: ["Au théâtre, à cause du dialogue", "Au récit, car un narrateur encadre et introduit les paroles rapportées", "À la poésie, à cause du rythme", "Au texte documentaire, à cause du sujet historique"],
          bonneReponse: 1,
          explication:
            "Même riche en dialogue, un texte encadré par un narrateur qui situe la scène et rapporte les paroles reste un récit ; le dialogue seul ne suffit pas à en faire une pièce de théâtre.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un texte raconte, à la première personne et au passé, un souvenir d'enfance à la campagne, avec des phrases longues et très imagées, riches en métaphores et en comparaisons poétiques. Comment qualifier ce texte le plus précisément ?",
          choix: [
            "Un récit autobiographique à l'écriture poétique",
            "Un article de presse",
            "Une notice explicative",
            "Une pièce de théâtre",
          ],
          bonneReponse: 0,
          explication:
            "Un texte peut appartenir principalement à un genre (ici le récit autobiographique, à cause du « je » et du souvenir personnel) tout en empruntant un style particulier (ici poétique, à cause des images) : les deux niveaux d'analyse se combinent.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Pourquoi risquer nos enfants sur des trottinettes non réglementées ? » titre un article, suivi d'un développement qui cite des statistiques d'accidents puis conclut : « Il est urgent de légiférer. » Ce texte relève-t-il de la presse informative ou de l'argumentation ?",
          choix: [
            "Uniquement de la presse informative, car il y a des statistiques",
            "Il s'agit d'un article de presse à visée argumentative : il informe par des chiffres mais conclut en prenant position",
            "Uniquement du théâtre, à cause du titre en forme de question",
            "Uniquement de la poésie",
          ],
          bonneReponse: 1,
          explication:
            "La presse peut mêler information (statistiques) et argumentation (prise de position finale, appel à légiférer) : c'est le cas de l'éditorial ou de l'article d'opinion, un genre hybride fréquent à repérer au brevet.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Une notice de sécurité rédigée pour un jouet utilise l'impératif (« Ne pas laisser à la portée des enfants de moins de trois ans ») et un vocabulaire très neutre. À quel genre appartient-elle malgré l'absence de présent de vérité générale ?",
          choix: [
            "Au texte argumentatif, car elle donne des ordres",
            "Au texte documentaire/explicatif, car elle informe et prévient sans exprimer de jugement de valeur",
            "Au récit, car elle raconte une histoire",
            "À la poésie",
          ],
          bonneReponse: 1,
          explication:
            "Même à l'impératif, un texte qui informe et prévient de façon neutre, sans opinion personnelle ni volonté de convaincre par des arguments, reste un texte documentaire à visée pratique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Un texte en vers réguliers et rimés raconte, sur plusieurs pages, les exploits guerriers d'un héros à travers de nombreuses péripicies. On appelle ce genre particulier, à la croisée du récit et de la poésie :",
          choix: ["Une fable", "Une épopée (ou poème épique)", "Un article de presse", "Une lettre"],
          bonneReponse: 1,
          explication:
            "Un long récit en vers narrant les exploits d'un héros est une épopée, genre hybride qui combine la narration (le récit d'actions) et la forme poétique (les vers).",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 10 — Bilan : synthèse et cas complexes",
      questions: [
        {
          type: "qcm",
          question:
            "Pour identifier rapidement le genre d'un texte inconnu à l'examen, quel est le tout premier réflexe à avoir ?",
          choix: [
            "Compter le nombre de mots",
            "Observer la mise en page globale (vers/strophes, dialogue théâtral, paragraphes suivis, titre et chapô...) avant de lire en détail",
            "Chercher immédiatement le nom de l'auteur",
            "Compter les virgules",
          ],
          bonneReponse: 1,
          explication:
            "La mise en page (vers, répliques théâtrales, paragraphes, titre de presse...) donne en un coup d'œil une première hypothèse de genre, à confirmer ensuite par les temps verbaux et le vocabulaire.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« LE CHŒUR : Malheur à qui défie les dieux ! (Il s'écarte lentement.) » Ce texte, très ancien dans sa forme, appartient malgré tout au genre :",
          choix: ["Théâtral, car il présente une réplique attribuée et une didascalie", "Poétique, car il évoque les dieux", "Argumentatif, car il y a un point d'exclamation", "Documentaire, car il parle de mythologie"],
          bonneReponse: 0,
          explication:
            "Même dans un texte antique ou au vocabulaire soutenu, les marques formelles (réplique attribuée à un personnage ou un chœur, didascalie) suffisent à identifier le théâtre — le sujet traité (les dieux) n'est pas un critère de genre.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un texte s'ouvre par « Il était une fois » mais se poursuit avec des personnages réalistes, sans aucun élément merveilleux, et se termine sans morale explicite. Peut-on encore l'appeler un conte à coup sûr ?",
          choix: [
            "Oui, la formule d'ouverture suffit toujours à elle seule",
            "Pas nécessairement : la formule d'ouverture est un indice fort mais il faut vérifier les autres critères (merveilleux, personnages types, morale) avant de conclure",
            "Non, car « il était une fois » n'existe que dans les fables",
            "Non, car cette formule appartient uniquement au théâtre",
          ],
          bonneReponse: 1,
          explication:
            "Aucun indice isolé n'est totalement décisif : un bon lecteur croise plusieurs critères (mise en page, temps, vocabulaire, éléments merveilleux, visée) avant de trancher sur le genre exact.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Un même événement (un incendie de forêt) est raconté par trois textes : un article de presse citant des pompiers, un poème sur la désolation du paysage brûlé, et une lettre d'un habitant à sa sœur. Quel critère permet de les différencier sûrement, au-delà du sujet commun ?",
          choix: [
            "Le sujet traité, qui doit toujours changer d'un genre à l'autre",
            "La forme, la visée et le destinataire de chaque texte (informer un large public / créer une émotion par les images / se confier à un proche)",
            "La longueur du texte uniquement",
            "Le nombre de personnages",
          ],
          bonneReponse: 1,
          explication:
            "Un même sujet peut être traité dans des genres très différents : c'est la forme (mise en page, temps, figures de style), la visée (informer, émouvoir, se confier) et le destinataire visé qui déterminent le genre, pas le thème abordé.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Au brevet, une question demande : « À quel genre appartient ce texte ? Justifiez votre réponse à l'aide de deux indices précis relevés dans le texte. » Quelle réponse est la mieux construite ?",
          choix: [
            "« C'est un poème parce que ça se voit tout de suite. »",
            "« Il s'agit d'un poème : le texte est organisé en vers regroupés en strophes (l.1 à 4), et il multiplie les métaphores comme « la lune, vieille reine pâle » (l.2). »",
            "« C'est un texte, donc un roman. »",
            "« Je pense que c'est de la poésie, je ne sais pas pourquoi. »",
          ],
          bonneReponse: 1,
          explication:
            "Une bonne réponse nomme le genre puis l'appuie sur deux indices précis et cités (mise en page en vers/strophes, et une figure de style relevée avec sa référence dans le texte) : c'est la méthode attendue au brevet.",
          difficulte: "avance",
        },
      ],
    },
  ],
},
/**
 * Fiche de compréhension de texte : repérer les intentions de l'auteur
 * (pourquoi il écrit, ce qu'il cherche à produire chez le lecteur) et les
 * indices textuels qui les révèlent (vocabulaire, registre, procédés, contexte).
 */
{
  slug: "intentions-auteur",
  titre: "Les intentions de l'auteur",
  emoji: "🎯",
  accroche:
    "Un auteur n'écrit jamais « pour rien » : il veut raconter, informer, convaincre, émouvoir ou dénoncer. Apprends à repérer ces visées derrière les mots.",
  sections: [
    {
      titre: "Raconter et divertir : la visée narrative",
      points: [
        "L'auteur cherche à captiver le lecteur par une histoire : personnages, péripéties, suspense.",
        "Indices : temps du récit (passé simple/imparfait), verbes d'action, dialogues vivants, rebondissements.",
        "Le vocabulaire est concret, souvent imagé ; le rythme des phrases accélère dans les scènes d'action.",
        "Objectif ressenti par le lecteur : curiosité, plaisir de lecture, envie de connaître la suite.",
      ],
    },
    {
      titre: "Informer et expliquer : la visée didactique",
      points: [
        "L'auteur veut transmettre un savoir ou des faits, sans chercher à faire ressentir une émotion précise.",
        "Indices : présent de vérité générale, vocabulaire technique ou neutre, connecteurs logiques (d'abord, ensuite, car, donc).",
        "Le texte reste objectif : peu ou pas de jugement de valeur, peu de figures de style.",
        "On trouve souvent des chiffres, des définitions, des exemples précis pour clarifier.",
      ],
    },
    {
      titre: "Convaincre et persuader : la visée argumentative",
      points: [
        "Convaincre s'adresse à la raison (arguments logiques, exemples, chiffres) ; persuader s'adresse aux émotions (mots forts, images).",
        "Indices : connecteurs logiques (mais, or, donc, en effet), questions rhétoriques, impératif, modalisateurs (il faut, il est évident que).",
        "L'auteur prend position : il défend une thèse et cherche à faire adhérer le lecteur à son point de vue.",
        "Le vocabulaire est souvent valorisant ou dévalorisant selon ce qu'il veut faire accepter ou rejeter.",
      ],
    },
    {
      titre: "Émouvoir : la visée pathétique et lyrique",
      points: [
        "L'auteur veut faire ressentir une émotion forte : tristesse, pitié, joie, nostalgie, admiration.",
        "Indices : champ lexical des sentiments, phrases exclamatives et interrogatives, hyperboles, apostrophes.",
        "Le rythme est souvent ample ou heurté selon l'émotion ; le « je » lyrique exprime un sentiment personnel.",
        "Le lecteur est invité à s'identifier ou à compatir avec ce que vit le personnage ou le narrateur.",
      ],
    },
    {
      titre: "Critiquer, dénoncer, faire réfléchir : la visée satirique et argumentative indirecte",
      points: [
        "L'auteur veut dénoncer un défaut, une injustice ou un travers de la société, parfois sans le dire directement.",
        "L'ironie dit le contraire de ce qu'on pense (antiphrase) : il faut repérer le décalage entre le ton et la réalité visible.",
        "Le registre satirique exagère (caricature, hyperbole) pour ridiculiser ; la fable ou l'apologue racontent une histoire pour faire réfléchir.",
        "Attention à la double intention : un texte peut sembler raconter ou informer alors qu'il critique en réalité.",
      ],
    },
  ],
  series: [
    {
      titre: "Série 1 — Repérer la visée dominante",
      questions: [
        {
          type: "qcm",
          question:
            "« Le loup bondit hors des fourrés, ses crocs luisant sous la lune. Léa retint son souffle et recula d'un pas. » Quelle est l'intention principale de l'auteur ?",
          choix: ["Informer sur les loups", "Raconter et créer du suspense", "Convaincre le lecteur", "Dénoncer la chasse"],
          bonneReponse: 1,
          explication:
            "Les verbes d'action, le décor nocturne et la réaction de peur de Léa créent une scène de tension : l'auteur raconte pour captiver le lecteur, visée narrative.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le loup gris (Canis lupus) vit en meute organisée autour d'un couple dominant. Il chasse en groupe pour capturer des proies plus grandes que lui. » Quel indice révèle ici une visée informative ?",
          choix: [
            "Le nom scientifique entre parenthèses et le présent de vérité générale",
            "Le suspense de la scène",
            "Les phrases exclamatives",
            "L'emploi de l'impératif",
          ],
          bonneReponse: 0,
          explication:
            "Le nom scientifique et le présent de vérité générale (« vit », « chasse ») sont typiques d'un texte documentaire qui transmet un savoir de façon neutre.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Il faut absolument protéger le loup, car sans prédateur les troupeaux de cerfs prolifèrent et détruisent la forêt. Comment rester indifférent à un tel déséquilibre ? » Quelle est l'intention de l'auteur ?",
          choix: ["Raconter une chasse", "Convaincre grâce à un raisonnement logique", "Décrire un paysage", "Faire une blague"],
          bonneReponse: 1,
          explication:
            "« Il faut », « car » et la question rhétorique construisent un argument logique : l'auteur veut convaincre le lecteur par la raison.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Adieu, forêts de mon enfance, où j'ai tant couru en riant ! Je ne reverrai plus jamais vos ombres fraîches... » Quelle visée domine dans cet extrait ?",
          choix: ["Informer sur la déforestation", "Émouvoir par la nostalgie", "Convaincre par des chiffres", "Faire un règlement"],
          bonneReponse: 1,
          explication:
            "L'apostrophe (« Adieu, forêts »), l'exclamation et le regret exprimé visent à faire ressentir une émotion : c'est la visée pathétique et lyrique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Quelle merveilleuse idée que de raser la forêt pour construire un parking ! Au moins, les enfants pourront admirer le bitume au lieu de ces arbres inutiles. » Quelle est la véritable intention de l'auteur ?",
          choix: [
            "Il informe sur un projet de construction",
            "Il félicite sincèrement les promoteurs",
            "Il dénonce le projet par l'ironie",
            "Il raconte une histoire pour enfants",
          ],
          bonneReponse: 2,
          explication:
            "« Merveilleuse idée » et « arbres inutiles » sont des antiphrases : l'auteur dit le contraire de ce qu'il pense pour dénoncer, avec ironie, la destruction de la forêt.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 2 — Le vocabulaire, indice de l'intention",
      questions: [
        {
          type: "qcm",
          question:
            "« Marc ouvrit la porte grinçante et une odeur âcre de renfermé lui piqua les narines. Un frisson lui parcourut l'échine. » Quel est l'effet recherché par l'auteur ?",
          choix: ["Expliquer une méthode", "Installer une atmosphère inquiétante pour captiver", "Convaincre d'un point de vue", "Faire de la publicité"],
          bonneReponse: 1,
          explication:
            "Les détails sensoriels (grinçante, odeur âcre, frisson) construisent une ambiance angoissante typique d'un récit qui cherche à tenir le lecteur en haleine.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Pour réussir une omelette, cassez trois œufs dans un bol, battez-les avec une pincée de sel, puis versez-les dans une poêle chaude et beurrée. » Quel indice montre que l'auteur veut expliquer ?",
          choix: ["L'emploi de l'impératif à valeur de conseil pratique", "Le suspense de la scène", "Le vocabulaire des sentiments", "L'ironie du propos"],
          bonneReponse: 0,
          explication:
            "L'impératif utilisé pour donner des instructions précises et ordonnées (cassez, battez, versez) est caractéristique d'un texte explicatif à but pratique.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Les écrans nuisent gravement à la concentration des élèves : plusieurs études montrent une baisse de 20 % des résultats scolaires chez les gros utilisateurs. Il est urgent d'agir. » Quelle est l'intention de l'auteur ?",
          choix: ["Divertir avec une anecdote", "Convaincre à l'aide de données chiffrées", "Émouvoir par un souvenir", "Décrire un lieu"],
          bonneReponse: 1,
          explication:
            "Le chiffre (« 20 % ») et la conclusion pressante (« il est urgent d'agir ») montrent que l'auteur construit un raisonnement pour convaincre son lecteur.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Ô mon pauvre chien, toi qui m'as suivi tant d'années, comme mon cœur se serre de te voir si faible aujourd'hui ! » Quel procédé révèle la visée pathétique de ce texte ?",
          choix: [
            "Le présent de vérité générale",
            "L'apostrophe et l'exclamation exprimant la douleur",
            "Le vocabulaire technique",
            "Les connecteurs logiques",
          ],
          bonneReponse: 1,
          explication:
            "L'apostrophe (« Ô mon pauvre chien ») et l'exclamation traduisent une émotion intense que l'auteur veut faire partager au lecteur : c'est la visée pathétique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Bien sûr, notre nouvelle usine ne rejette que quelques nuages de fumée grise, un détail sans importance pour la santé des riverains, n'est-ce pas ? » Quelle est la véritable intention de l'auteur derrière ce ton faussement rassurant ?",
          choix: [
            "Rassurer réellement les riverains",
            "Informer objectivement sur la pollution",
            "Dénoncer, par l'ironie, la pollution de l'usine",
            "Faire de la publicité pour l'usine",
          ],
          bonneReponse: 2,
          explication:
            "« Un détail sans importance » et la question « n'est-ce pas ? » sont ironiques : l'auteur feint l'indifférence pour mieux dénoncer la gravité de la pollution.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 3 — Convaincre ou persuader ?",
      questions: [
        {
          type: "qcm",
          question:
            "« N'attendez plus une seconde ! Ce vélo électrique va transformer votre vie, vous libérer, vous rendre plus heureux chaque matin ! » Cet extrait cherche surtout à :",
          choix: ["Informer techniquement sur le vélo", "Persuader en jouant sur les émotions", "Raconter une aventure", "Décrire un paysage"],
          bonneReponse: 1,
          explication:
            "Les mots « transformer votre vie », « libérer », « heureux » et l'exclamation visent les émotions du lecteur plutôt que sa raison : c'est de la persuasion, typique de la publicité.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le vélo électrique consomme dix fois moins d'énergie qu'une voiture pour un trajet équivalent, selon une étude de l'ADEME publiée en 2023. » Cet extrait cherche surtout à :",
          choix: ["Convaincre par un argument chiffré et une source", "Persuader par l'émotion", "Émouvoir par un souvenir", "Divertir par une histoire"],
          bonneReponse: 0,
          explication:
            "Le chiffre précis et la référence à une source fiable (l'ADEME) construisent un argument rationnel destiné à convaincre, non à émouvoir.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Comment peut-on encore, en 2026, laisser nos enfants respirer un air aussi vicié ? Ce silence collectif est une faute morale que l'histoire ne pardonnera pas. » Quelle stratégie l'auteur emploie-t-il principalement ?",
          choix: [
            "Une explication neutre du phénomène",
            "Une question rhétorique et un vocabulaire moral pour persuader",
            "Une description humoristique",
            "Un simple récit d'enfance",
          ],
          bonneReponse: 1,
          explication:
            "La question rhétorique et les mots à forte charge morale (« faute morale », « l'histoire ne pardonnera pas ») cherchent à toucher la conscience du lecteur : c'est une stratégie de persuasion.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Certes, la voiture individuelle a permis un formidable essor économique. Cependant, ses effets sur le climat imposent aujourd'hui d'en repenser l'usage. » Quel connecteur logique montre que l'auteur construit une argumentation ?",
          choix: ["« Certes... Cependant »", "« Il était une fois »", "« Soudain »", "« Ô »"],
          bonneReponse: 0,
          explication:
            "« Certes... Cependant » introduit une concession suivie d'une objection : c'est une structure logique typique du texte argumentatif qui vise à convaincre.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Nos dirigeants, si soucieux de l'environnement, se déplacent en jet privé pour aller débattre du climat. Quelle cohérence admirable ! » Quelle double intention l'auteur poursuit-il ici ?",
          choix: [
            "Informer neutrement sur les transports des dirigeants",
            "Convaincre uniquement par des chiffres",
            "Dénoncer par l'ironie tout en argumentant contre l'incohérence des dirigeants",
            "Raconter une anecdote sans jugement",
          ],
          bonneReponse: 2,
          explication:
            "« Quelle cohérence admirable ! » est une antiphrase ironique ; combinée à la mise en évidence d'une contradiction, elle sert une double intention : critiquer et convaincre le lecteur de l'incohérence dénoncée.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 4 — L'ironie et la satire",
      questions: [
        {
          type: "qcm",
          question:
            "« Quel talent extraordinaire que de renverser sa soupe sur la nappe blanche du dîner officiel ! » Quel procédé reconnaît-on dans cette phrase ?",
          choix: ["Une description objective", "Une ironie qui blâme en feignant de louer", "Une explication technique", "Un lyrisme sincère"],
          bonneReponse: 1,
          explication:
            "L'auteur feint d'admirer une maladresse (« quel talent extraordinaire ») pour mieux se moquer : c'est une antiphrase, procédé clé de l'ironie.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Dans une fable où un renard flatte un corbeau pour lui voler son fromage, quelle est l'intention réelle de l'auteur derrière cette petite histoire amusante ?",
          choix: [
            "Divertir uniquement, sans autre but",
            "Informer sur les habitudes alimentaires des renards",
            "Faire réfléchir sur les dangers de la flatterie, sous une forme plaisante",
            "Décrire un paysage de forêt",
          ],
          bonneReponse: 2,
          explication:
            "La fable est un apologue : elle raconte une histoire divertissante mais poursuit une visée argumentative indirecte, ici une leçon morale sur la flatterie et la vanité.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le ministre a expliqué, avec la conviction d'un homme qui croit vraiment ce qu'il dit, que tout allait pour le mieux dans le meilleur des mondes. » Quel indice de style révèle une intention critique ?",
          choix: [
            "L'expression neutre « a expliqué »",
            "La comparaison ironique et la référence moqueuse à une formule toute faite",
            "Le champ lexical de la tristesse",
            "Une simple énumération de faits",
          ],
          bonneReponse: 1,
          explication:
            "« Avec la conviction d'un homme qui croit vraiment ce qu'il dit » sous-entend le doute de l'auteur, et « le meilleur des mondes » (référence ironique à Voltaire) tourne en dérision l'optimisme affiché du ministre.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Merci, cher voisin, d'avoir passé la tondeuse à sept heures du matin un dimanche : rien de tel pour bien commencer la journée. » Quelle est l'intention de l'auteur ?",
          choix: [
            "Remercier sincèrement le voisin",
            "Informer sur l'entretien du jardin",
            "Se plaindre par l'ironie du bruit matinal",
            "Raconter un rêve",
          ],
          bonneReponse: 2,
          explication:
            "« Merci » et « rien de tel pour bien commencer la journée » sont des formules ironiques : l'auteur dit le contraire de ce qu'il pense pour exprimer, avec humour, son agacement.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le grand couturier présenta sa collection : des sacs-poubelle savamment drapés, vendus deux mille euros pièce, sous les applaudissements enthousiastes du public le plus raffiné. » Quelle double intention peut-on repérer ici ?",
          choix: [
            "L'auteur informe objectivement sur la mode sans aucun jugement",
            "L'auteur raconte une scène tout en se moquant, par l'exagération, du snobisme de ce milieu",
            "L'auteur veut uniquement émouvoir le lecteur",
            "L'auteur cherche seulement à vendre le produit",
          ],
          bonneReponse: 1,
          explication:
            "Le récit semble neutre (une présentation de mode) mais l'exagération (« sacs-poubelle », « deux mille euros », « le public le plus raffiné ») relève de la caricature satirique : sous le récit se cache une critique du snobisme, double intention typique de la satire.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 5 — Le registre, indice du ton et de l'intention",
      questions: [
        {
          type: "qcm",
          question:
            "« La photosynthèse est le processus par lequel les plantes convertissent la lumière du soleil, l'eau et le dioxyde de carbone en glucose et en oxygène. » Ce texte relève d'un registre :",
          choix: ["Pathétique", "Didactique et informatif", "Polémique", "Épique"],
          bonneReponse: 1,
          explication:
            "Le vocabulaire scientifique précis et l'absence de jugement personnel signalent un registre didactique : l'auteur veut transmettre un savoir.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Et soudain, dans un fracas assourdissant, le pont s'effondra sous leurs pieds, les précipitant vers l'eau noire et glacée du fleuve ! » Quel effet ce registre crée-t-il chez le lecteur ?",
          choix: ["L'ennui", "L'intensité dramatique et le suspense", "L'indifférence", "La réflexion calme"],
          bonneReponse: 1,
          explication:
            "Le champ lexical de la violence (fracas, effondra, glacée) et l'exclamation créent un registre dramatique qui capte l'attention du lecteur dans un récit d'action.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Misérable engeance que ces automobilistes qui klaxonnent avant même que le feu ne passe au vert ! Notre époque n'a décidément plus aucune patience. » Quel registre domine, et dans quel but ?",
          choix: [
            "Le registre épique, pour glorifier un héros",
            "Le registre polémique, pour critiquer un comportement de société",
            "Le registre didactique, pour expliquer le code de la route",
            "Le registre lyrique, pour exprimer une joie",
          ],
          bonneReponse: 1,
          explication:
            "Le vocabulaire dévalorisant (« misérable engeance ») et le jugement généralisant (« notre époque ») relèvent du registre polémique : l'auteur critique un comportement qu'il juge négativement.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Comme la mer est belle ce soir, calme et dorée sous le soleil couchant, semblable à un miroir offert aux dieux... » Ce registre lyrique sert avant tout à :",
          choix: ["Convaincre par des arguments", "Faire partager une émotion esthétique et une contemplation", "Donner un mode d'emploi", "Dénoncer une injustice"],
          bonneReponse: 1,
          explication:
            "La comparaison poétique (« semblable à un miroir offert aux dieux ») et l'exclamation traduisent l'émerveillement du narrateur : le registre lyrique cherche à faire partager une émotion esthétique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Sa Majesté daigna, dans son immense bonté, accorder une remise de peine de deux jours au prisonnier condamné à perpétuité pour un vol de pain. » Quel décalage révèle l'intention critique de l'auteur ?",
          choix: [
            "Aucun décalage, le texte est purement informatif",
            "Le décalage entre le vocabulaire grandiloquent (« immense bonté ») et la dérisoire réalité de la remise de peine",
            "Le décalage entre le passé simple et le présent",
            "Le décalage entre la ponctuation et la syntaxe",
          ],
          bonneReponse: 1,
          explication:
            "Le vocabulaire exagérément élogieux (« Sa Majesté », « immense bonté ») contraste avec l'insignifiance de la remise de peine face à la gravité de la condamnation : ce décalage ironique dénonce l'injustice du système, sous une double intention narrative et critique.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 6 — Identifier l'intention à partir du contexte",
      questions: [
        {
          type: "qcm",
          question:
            "Un roman d'aventures publié pour de jeunes lecteurs raconte comment une équipe d'explorateurs découvre une grotte mystérieuse. Quelle est l'intention principale probable de l'auteur ?",
          choix: ["Divertir et faire vivre une aventure au lecteur", "Rédiger un rapport scientifique", "Faire de la publicité", "Écrire un texte de loi"],
          bonneReponse: 0,
          explication:
            "Le genre (roman d'aventures pour la jeunesse) et le sujet (exploration mystérieuse) indiquent une visée narrative et ludique : divertir le lecteur.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Un article publié dans une revue scientifique présente les résultats d'une expérience sur le sommeil, avec graphiques et méthodologie détaillée. Quelle est l'intention de l'auteur ?",
          choix: ["Émouvoir le lecteur", "Informer la communauté scientifique de résultats vérifiables", "Raconter une histoire personnelle", "Faire de l'ironie"],
          bonneReponse: 1,
          explication:
            "Le support (revue scientifique), la méthodologie et les graphiques montrent une visée informative rigoureuse, sans recherche d'émotion ni de récit.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Un discours électoral affirme : « Avec moi, chaque famille retrouvera espoir et dignité. » Quelle est l'intention principale, malgré l'apparente sincérité du propos ?",
          choix: [
            "Informer objectivement sur un programme chiffré",
            "Persuader l'auditoire par des mots porteurs d'émotion plutôt que par des preuves",
            "Raconter une fable",
            "Décrire un paysage électoral",
          ],
          bonneReponse: 1,
          explication:
            "« Espoir » et « dignité » sont des mots à forte charge émotionnelle sans argument concret ni chiffre : le discours cherche à persuader plus qu'à convaincre rationnellement.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Une chronique publiée après une catastrophe naturelle raconte le témoignage d'une survivante, avec ses mots, ses larmes, ses silences. Quelle intention domine ?",
          choix: ["Informer techniquement sur la catastrophe", "Émouvoir en donnant une dimension humaine à l'événement", "Convaincre d'un vote", "Faire de l'ironie sur la victime"],
          bonneReponse: 1,
          explication:
            "Le choix de donner la parole à un témoin, avec ses émotions (larmes, silences), montre que l'auteur veut toucher le lecteur plutôt que simplement l'informer : visée pathétique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un conte pour enfants met en scène un roi vaniteux qui perd tout parce qu'il n'écoute jamais ses conseillers, et finit ridiculisé devant son peuple. Quelle double intention l'auteur poursuit-il ?",
          choix: [
            "Divertir les enfants par une histoire de roi, sans aucune autre visée",
            "Informer sur l'histoire des rois",
            "Divertir par le récit tout en faisant réfléchir sur l'orgueil et l'importance d'écouter les autres",
            "Persuader les enfants de devenir rois",
          ],
          bonneReponse: 2,
          explication:
            "Comme l'apologue, le conte associe le plaisir du récit (divertir) à une leçon implicite (l'orgueil mène à la chute) : c'est une double intention narrative et argumentative.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 7 — Les figures de style au service de l'intention",
      questions: [
        {
          type: "qcm",
          question:
            "« Il pleuvait des cordes et le vent hurlait comme une bête furieuse contre les volets. » Quelle figure de style et quelle intention reconnaît-on ?",
          choix: [
            "Une comparaison, pour rendre le récit plus vivant et immersif",
            "Une antiphrase, pour dénoncer",
            "Une litote, pour informer",
            "Une allitération, pour convaincre",
          ],
          bonneReponse: 0,
          explication:
            "La comparaison (« comme une bête furieuse ») donne une image concrète de la tempête et intensifie l'immersion du lecteur dans le récit : visée narrative.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Cette réforme n'est pas la meilleure idée du siècle. » (à propos d'une réforme jugée catastrophique) Quelle figure de style l'auteur emploie-t-il, et dans quel but ?",
          choix: [
            "Une hyperbole, pour émouvoir",
            "Une litote, pour critiquer avec une ironie discrète",
            "Une métaphore, pour informer",
            "Une anaphore, pour raconter",
          ],
          bonneReponse: 1,
          explication:
            "Dire « pas la meilleure idée » pour signifier qu'elle est mauvaise est une litote (dire moins pour suggérer plus) : l'auteur critique avec une ironie mesurée.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« J'ai dit mille fois à mon frère de ranger sa chambre, mille fois, et toujours rien ne change ! » Quelle figure et quelle intention se dégagent de cette phrase ?",
          choix: [
            "Une hyperbole et une répétition, pour exprimer l'exaspération du locuteur",
            "Une comparaison, pour informer",
            "Une antiphrase, pour féliciter",
            "Une allégorie, pour raconter un mythe",
          ],
          bonneReponse: 0,
          explication:
            "« Mille fois » répété est une hyperbole qui traduit l'exaspération : l'auteur veut faire ressentir au lecteur l'agacement du locuteur, visée expressive proche du pathétique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Chaque goutte de pluie sur la vitre est une larme du ciel pleurant nos adieux. » Quelle figure de style domine, et pour quelle intention ?",
          choix: [
            "Une métaphore, pour créer une atmosphère mélancolique et émouvoir",
            "Une énumération, pour informer",
            "Une antithèse, pour convaincre",
            "Une antiphrase, pour se moquer",
          ],
          bonneReponse: 0,
          explication:
            "La métaphore (« larme du ciel ») personnifie la pluie et l'associe à la tristesse des adieux : elle sert une visée lyrique, destinée à émouvoir le lecteur.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Bravo, cher gouvernement, pour cette autoroute magnifique qui traverse pile la seule forêt centenaire de la région : quelle vision d'avenir ! » Quelles figures se combinent ici, et avec quelle double intention ?",
          choix: [
            "Une comparaison et une énumération, pour informer objectivement",
            "Une antiphrase (« Bravo », « quelle vision d'avenir ») et une exagération ironique, pour dénoncer un choix écologique tout en semblant le complimenter",
            "Une hyperbole sincère, pour féliciter réellement le gouvernement",
            "Une métaphore lyrique, pour émouvoir sur la nature",
          ],
          bonneReponse: 1,
          explication:
            "« Bravo » et « quelle vision d'avenir ! » sont des antiphrases : l'auteur feint l'admiration pour mieux critiquer, par ironie, la destruction d'une forêt centenaire — double intention de récit apparent et de dénonciation réelle.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 8 — Textes courts, intentions à croiser",
      questions: [
        {
          type: "qcm",
          question:
            "« Attention : ne jamais mélanger l'eau de javel avec un produit ammoniaqué, sous peine de dégagement de gaz toxiques. » Quelle est l'intention de ce texte ?",
          choix: ["Émouvoir", "Prévenir et informer d'un danger", "Raconter une histoire", "Faire de l'ironie"],
          bonneReponse: 1,
          explication:
            "Le vocabulaire technique et l'avertissement direct (« Attention », « sous peine de ») montrent une visée informative à but préventif, sans émotion ni récit.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Elle courut à perdre haleine, le cœur battant, sentant déjà les pas de son poursuivant se rapprocher dans son dos. » Quelle est l'intention de l'auteur ?",
          choix: ["Informer sur la course à pied", "Créer du suspense dans un récit", "Convaincre d'un argument", "Décrire un règlement"],
          bonneReponse: 1,
          explication:
            "Le rythme haletant, les sensations physiques (cœur battant) et la menace suggérée créent une tension narrative : visée de divertissement par le suspense.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Peut-on vraiment continuer à jeter huit millions de tonnes de plastique dans nos océans chaque année sans réagir ? » Quelle intention perce sous cette question apparemment neutre ?",
          choix: [
            "Une simple question d'information sans autre but",
            "Une intention de convaincre le lecteur d'agir, sous forme de question rhétorique",
            "Une intention de raconter une histoire de pêcheurs",
            "Une intention purement humoristique",
          ],
          bonneReponse: 1,
          explication:
            "Bien que formulée comme une question, cette phrase est rhétorique : elle attend une seule réponse évidente (« non ») et vise en réalité à convaincre le lecteur d'agir.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Ainsi disparut, dans l'indifférence générale, la dernière librairie du village, remplacée six mois plus tard par un distributeur de billets. » Quelle intention peut-on repérer derrière ce récit en apparence factuel ?",
          choix: [
            "Une intention purement informative, sans aucun jugement",
            "Une intention de dénoncer, de façon implicite, la disparition de la culture au profit de l'argent",
            "Une intention de faire rire sans arrière-pensée",
            "Une intention de décrire un bâtiment",
          ],
          bonneReponse: 1,
          explication:
            "Le choix des mots (« dans l'indifférence générale », l'opposition librairie/distributeur de billets) suggère un regret implicite : sous un récit apparemment neutre, l'auteur critique une évolution de la société.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Quel bonheur de payer, cette année encore, une taxe supplémentaire pour financer des travaux dont on ne verra jamais la couleur ! » Quelle est l'intention réelle de l'auteur, malgré le mot « bonheur » ?",
          choix: [
            "Exprimer une joie sincère face à la taxe",
            "Informer neutrement sur le montant de la taxe",
            "Dénoncer, par ironie, une taxe jugée injuste ou inutile",
            "Raconter un souvenir d'enfance",
          ],
          bonneReponse: 2,
          explication:
            "« Quel bonheur » est une antiphrase : l'auteur exprime en réalité son mécontentement face à une taxe qu'il juge injustifiée, en feignant l'enthousiasme pour mieux dénoncer.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 9 — Distinguer intentions proches",
      questions: [
        {
          type: "qcm",
          question:
            "« La forêt amazonienne perd chaque année une surface équivalente à celle de la Belgique. » Quelle est l'intention principale de cette phrase, prise seule ?",
          choix: ["Émouvoir par une image poétique", "Informer à l'aide d'une comparaison chiffrée", "Raconter une aventure en forêt", "Faire de l'ironie"],
          bonneReponse: 1,
          explication:
            "La comparaison avec la surface de la Belgique sert à rendre un chiffre compréhensible, dans un but informatif, sans jugement de valeur exprimé.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« La forêt amazonienne, poumon vert de notre planète, agonise sous nos yeux indifférents. » Quelle différence essentielle avec la phrase précédente sur la déforestation ?",
          choix: [
            "Aucune différence, les deux phrases sont purement informatives",
            "Celle-ci ajoute un vocabulaire dramatique et moralisateur pour émouvoir et interpeller",
            "Celle-ci est une fable",
            "Celle-ci est un texte de loi",
          ],
          bonneReponse: 1,
          explication:
            "« Poumon vert », « agonise » et « yeux indifférents » sont des expressions à forte charge émotionnelle et morale : contrairement au chiffre neutre, cette phrase vise à émouvoir et responsabiliser.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Deux textes sur le même sujet : le premier dit « il faut agir maintenant, sinon nous perdrons cette forêt pour toujours » ; le second dit « les scientifiques recommandent une réduction de la déforestation de 50 % d'ici 2030 ». Quelle différence d'intention entre ces deux phrases ?",
          choix: [
            "La première informe, la seconde raconte",
            "La première persuade par l'urgence émotionnelle, la seconde convainc par une donnée factuelle et sourcée",
            "Les deux ont exactement la même intention",
            "La première est ironique, la seconde est lyrique",
          ],
          bonneReponse: 1,
          explication:
            "« Il faut agir maintenant, sinon... pour toujours » joue sur l'urgence et l'émotion (persuader), tandis que la référence aux scientifiques et au chiffre (« 50 % d'ici 2030 ») relève d'un argument rationnel (convaincre).",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le vieil homme regardait la mer, immobile, comme s'il attendait le retour d'un bateau qui ne reviendrait jamais. » Cette phrase relève-t-elle davantage du pathétique ou du lyrique, et pourquoi ?",
          choix: [
            "Du pathétique, car elle décrit la souffrance d'un personnage de façon à susciter la pitié du lecteur",
            "Du lyrique, car un narrateur à la première personne y exprime directement ses propres sentiments",
            "De l'informatif, car elle décrit un fait de manière neutre",
            "De l'argumentatif, car elle défend une thèse",
          ],
          bonneReponse: 0,
          explication:
            "Le texte décrit un personnage (« le vieil homme ») à la troisième personne dont la situation inspire la compassion : c'est le registre pathétique, à distinguer du lyrisme où le narrateur exprimerait son propre sentiment à la première personne.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Le conseil municipal a voté, à l'unanimité et dans un enthousiasme débordant, la suppression du seul terrain de jeu du quartier au profit d'un parking supplémentaire. » Quelle double lecture ce texte appelle-t-il ?",
          choix: [
            "Une lecture unique et purement informative, sans second degré",
            "Une lecture littérale (un compte rendu de conseil municipal) et une lecture ironique qui dénonce ce choix jugé absurde",
            "Une lecture uniquement lyrique",
            "Une lecture uniquement publicitaire",
          ],
          bonneReponse: 1,
          explication:
            "« Enthousiasme débordant » pour une décision qui prive les enfants d'un terrain de jeu crée un décalage ironique : sous l'apparence d'un compte rendu neutre, l'auteur dénonce ce choix, exemple de double intention.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 10 — Synthèse : toutes les visées",
      questions: [
        {
          type: "qcm",
          question:
            "« Il était une fois, dans un royaume lointain, une princesse qui refusait tous les prétendants. » Quelle est l'intention de l'auteur avec cette formule d'ouverture ?",
          choix: ["Informer sur l'histoire des royaumes", "Ouvrir un récit et installer un cadre pour capter l'attention", "Convaincre le lecteur d'un argument", "Dénoncer une injustice sociale"],
          bonneReponse: 1,
          explication:
            "« Il était une fois » est une formule d'ouverture typique du conte : elle installe immédiatement un cadre narratif pour capter l'attention et donner envie de connaître la suite.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le recyclage du verre permet d'économiser jusqu'à 30 % d'énergie par rapport à sa fabrication à partir de matière première. » Quelle est l'intention de l'auteur ?",
          choix: ["Émouvoir sur l'environnement", "Informer à l'aide d'un chiffre précis", "Raconter une histoire de verrerie", "Faire de l'ironie sur le recyclage"],
          bonneReponse: 1,
          explication:
            "Le chiffre précis (« 30 % ») et l'absence de jugement de valeur montrent une intention purement informative sur un fait technique.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Chers concitoyens, ensemble, nous pouvons bâtir un avenir meilleur pour nos enfants : rejoignez-nous ! » Quelle intention domine dans cet appel ?",
          choix: ["Informer objectivement", "Persuader par des mots mobilisateurs et un appel direct", "Raconter un souvenir personnel", "Décrire un lieu"],
          bonneReponse: 1,
          explication:
            "L'apostrophe (« Chers concitoyens »), le vocabulaire mobilisateur (« ensemble », « avenir meilleur ») et l'impératif (« rejoignez-nous ») visent à persuader et entraîner l'adhésion, plus qu'à informer.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Je me souviens encore du parfum du pain chaud dans la cuisine de ma grand-mère, un bonheur simple que je ne retrouverai jamais tout à fait. » Quelle est l'intention de l'auteur ?",
          choix: ["Informer sur une recette de pain", "Émouvoir par un souvenir nostalgique et personnel", "Convaincre d'acheter du pain", "Dénoncer une injustice"],
          bonneReponse: 1,
          explication:
            "Le souvenir personnel, le vocabulaire sensoriel (parfum, chaud) et la nostalgie du « je ne retrouverai jamais » créent une émotion partagée avec le lecteur : visée lyrique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le grand patron s'est ému, la larme à l'œil devant les caméras, du sort des employés qu'il licenciait le jour même par centaines. » Quelles intentions superposées l'auteur construit-il dans cette phrase ?",
          choix: [
            "Il informe uniquement sur un fait divers, sans aucun jugement",
            "Il raconte une scène émouvante que le patron aurait sincèrement vécue",
            "Il rapporte une scène en apparence pathétique tout en dénonçant, par le décalage avec les licenciements, l'hypocrisie du patron",
            "Il fait de la publicité pour l'entreprise",
          ],
          bonneReponse: 2,
          explication:
            "Le décalage entre l'émotion affichée (« la larme à l'œil ») et l'action réelle (licencier « par centaines » le jour même) révèle une intention critique cachée sous un récit en apparence neutre : l'auteur dénonce l'hypocrisie, double intention narrative et satirique.",
          difficulte: "avance",
        },
      ],
    },
  ],
},
// Fiche de compréhension de texte : les procédés d'écriture (hors figures de style).
// Ce que l'auteur choisit — point de vue, rythme, lexique, ponctuation, discours,
// description ou narration, répétitions — et l'effet que ce choix produit sur le lecteur.


{
  slug: "procedes-ecriture",
  titre: "Les procédés d'écriture",
  emoji: "🖋️",
  accroche:
    "Un auteur ne choisit jamais ses mots au hasard : la personne du récit, la longueur des phrases, le vocabulaire ou la ponctuation sont autant de procédés qui produisent un effet précis sur le lecteur. Apprends à les repérer et à expliquer pourquoi ils sont là.",
  sections: [
    {
      titre: "Le choix d'énonciation : qui parle, et à quel temps",
      points: [
        "Le récit à la 1re personne (« je ») installe un narrateur-personnage : le lecteur ne connaît que ce que ce personnage voit, pense ou ressent. Effet : proximité, confidence, parfois manque de recul du narrateur.",
        "Le récit à la 3e personne (« il », « elle ») donne un narrateur extérieur à l'histoire, qui peut tout savoir (narrateur omniscient) ou se limiter au point de vue d'un seul personnage. Effet : distance, objectivité apparente, vision plus large.",
        "Le passé simple, temps du premier plan, fait avancer l'action (« il ouvrit la porte »). L'imparfait, temps de l'arrière-plan, décrit un décor, une habitude ou un état qui dure (« il pleuvait »).",
        "Le présent de narration rend une scène passée aussi vive que si elle se déroulait sous les yeux du lecteur : c'est le « présent de vérité générale » appliqué à un récit, qui crée de l'immédiateté et du suspense.",
        "Repère le pronom dominant et le temps dominant dès les premières lignes d'un extrait : ils annoncent la posture du narrateur et le contrat de lecture proposé.",
      ],
    },
    {
      titre: "Le point de vue (focalisation) : par quels yeux voit-on la scène",
      points: [
        "Focalisation interne : le récit adopte le regard d'un seul personnage, on ne sait que ce qu'il perçoit ou devine. Effet : le lecteur partage ses doutes, ses surprises, ses erreurs de jugement.",
        "Focalisation externe : le narrateur décrit seulement ce qui est observable de l'extérieur (gestes, paroles, décor), sans jamais entrer dans les pensées. Effet : mystère, retenue, effet de caméra neutre.",
        "Focalisation zéro (narrateur omniscient) : le narrateur sait tout, sur tous les personnages, y compris ce qu'ils ignorent eux-mêmes les uns des autres. Effet : le lecteur en sait souvent plus qu'un personnage, ce qui crée du suspense dramatique.",
        "Un même événement raconté avec des points de vue différents change complètement l'effet produit : identifier la focalisation, c'est identifier ce que le texte choisit de cacher ou de montrer.",
        "Indices pour reconnaître la focalisation interne : verbes de perception (« il vit », « elle sentit »), modalisateurs de doute (« sans doute », « peut-être »), pensées rapportées directement.",
      ],
    },
    {
      titre: "Le rythme de la phrase : longueur, accumulation, ponctuation",
      points: [
        "Les phrases courtes, juxtaposées ou nominales, accélèrent le rythme : elles conviennent à l'action, à la tension, à l'urgence ou à la brutalité d'un événement.",
        "Les phrases longues, avec subordonnées et énumérations, ralentissent le rythme : elles conviennent à la description, à la réflexion, à une atmosphère posée ou pesante.",
        "L'accumulation (juxtaposition de plusieurs mots ou groupes de même nature) crée un effet de foisonnement, d'abondance ou d'essoufflement selon le contexte.",
        "La gradation ordonne les termes accumulés par intensité croissante ou décroissante : elle dramatise une émotion ou une action en la faisant monter (ou descendre) crescendo.",
        "La ponctuation expressive joue aussi sur le rythme : le point d'exclamation marque une émotion forte, le point d'interrogation un doute ou une interpellation, les points de suspension une hésitation, un sous-entendu ou une phrase inachevée, les tirets et parenthèses une remarque en aparté.",
      ],
    },
    {
      titre: "Le lexique : champs lexicaux et connotation des mots",
      points: [
        "Un champ lexical regroupe tous les mots liés à une même idée (peur, guerre, nature...) : sa présence insistante dans un texte signale un thème central ou une tonalité dominante.",
        "La connotation méliorative valorise ce qu'elle désigne (« demeure », « visage lumineux »), la connotation péjorative le dévalorise (« masure », « rictus ») : un même objet décrit avec des mots différents ne produit pas la même image chez le lecteur.",
        "Le niveau de langue (soutenu, courant, familier) renseigne sur le milieu social d'un personnage, sur la relation entre les personnages, ou sur l'intention comique ou critique de l'auteur.",
        "Le choix d'un vocabulaire technique, abstrait ou au contraire concret et sensoriel oriente la lecture : un vocabulaire sensoriel (couleurs, sons, odeurs) fait « voir » et « sentir » la scène au lecteur.",
        "Repérer un champ lexical ne suffit pas : il faut toujours dire quel effet il produit (inquiétude, admiration, dégoût...) et sur quel thème il attire l'attention.",
      ],
    },
    {
      titre: "Discours rapporté, description et répétitions",
      points: [
        "Le discours direct (guillemets, verbe de parole) restitue les paroles exactes d'un personnage : il rend le dialogue vivant et donne accès direct à sa voix.",
        "Le discours indirect intègre les paroles dans le récit, sans guillemets, avec une subordonnée (« il dit qu'il partirait ») : il résume, filtre et parfois interprète les propos rapportés.",
        "Le discours indirect libre mélange la voix du narrateur et celle du personnage sans marque grammaticale visible : il fait entendre les pensées d'un personnage tout en gardant la narration à la 3e personne.",
        "La description suspend l'action pour donner à voir un lieu, un personnage ou un objet (portrait, paysage) ; la narration fait avancer l'histoire par une succession d'événements. Un texte alterne souvent les deux pour rythmer la lecture.",
        "La répétition d'un mot, d'une expression ou d'une structure de phrase (anaphore narrative) insiste sur une idée, crée un effet d'obsession, de martèlement ou structure le texte comme un refrain.",
      ],
    },
  ],
  series: [
    {
      titre: "Série 1 — Reconnaître la personne et le temps du récit",
      questions: [
        {
          type: "qcm",
          question:
            "« Je marchais seul dans la rue déserte quand j'entendis un bruit derrière moi. » À quelle personne ce récit est-il écrit ?",
          choix: ["À la 1re personne", "À la 2e personne", "À la 3e personne", "Il n'y a pas de narrateur"],
          bonneReponse: 0,
          explication:
            "Le pronom « je » indique que le narrateur raconte sa propre histoire : c'est un récit à la 1re personne.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Léa ouvrit la fenêtre. Le vent froid s'engouffra dans la chambre. » Quel est le temps dominant, et quel est son rôle ici ?",
          choix: [
            "L'imparfait, qui décrit un décor",
            "Le passé simple, qui fait avancer l'action",
            "Le présent, qui rend la scène immédiate",
            "Le futur, qui annonce la suite",
          ],
          bonneReponse: 1,
          explication:
            "« Ouvrit » et « s'engouffra » sont au passé simple : ce temps de premier plan enchaîne les actions l'une après l'autre.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Chaque matin, il se levait avant l'aube et regardait la mer depuis sa fenêtre. » Quel est l'effet de l'imparfait dans cette phrase ?",
          choix: [
            "Il montre une action brève et unique",
            "Il montre une habitude, quelque chose qui se répète",
            "Il montre un futur proche",
            "Il montre un dialogue",
          ],
          bonneReponse: 1,
          explication:
            "L'imparfait exprime ici une action répétée dans le passé (« chaque matin ») : une habitude, pas un événement ponctuel.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le train entre en gare. Les portes s'ouvrent. Marc descend, la valise à la main. » Pourquoi l'auteur utilise-t-il le présent pour raconter cette scène ?",
          choix: [
            "Parce que c'est une règle grammaticale obligatoire",
            "Pour rendre la scène plus vivante, comme si elle se déroulait sous nos yeux",
            "Parce qu'il ne connaît pas le passé simple",
            "Pour indiquer que la scène se répète tous les jours",
          ],
          bonneReponse: 1,
          explication:
            "C'est un présent de narration : il crée un effet d'immédiateté, comme si le lecteur assistait en direct à la scène.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« On ne le comprenait pas toujours, ce vieil homme. Mais quand il se mettait à raconter ses voyages, tout le village venait l'écouter. » Ce texte est-il écrit à la 1re ou à la 3e personne, et quel effet cela produit-il ?",
          choix: [
            "1re personne, ce qui crée une grande proximité avec le vieil homme",
            "3e personne, ce qui met le narrateur à distance des personnages",
            "1re personne, car « on » désigne toujours celui qui parle",
            "3e personne, mais le texte est en réalité un dialogue",
          ],
          bonneReponse: 1,
          explication:
            "Le narrateur parle du vieil homme et du village de l'extérieur (« il », « le village ») : c'est un récit à la 3e personne qui garde une certaine distance.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 2 — Identifier le point de vue narratif",
      questions: [
        {
          type: "qcm",
          question:
            "« Un bruit sourd. Tom se retourna, le cœur battant. Il ne voyait rien dans le noir, mais il était sûr que quelqu'un le suivait. » Quel point de vue est utilisé ?",
          choix: ["Focalisation interne", "Focalisation externe", "Focalisation zéro", "Aucun point de vue"],
          bonneReponse: 0,
          explication:
            "Le récit adopte les perceptions et les sensations de Tom (« le cœur battant », « il était sûr ») : c'est une focalisation interne.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« L'homme entra dans le bar, commanda un café et s'assit près de la fenêtre sans un mot. » Pourquoi peut-on dire que ce passage est en focalisation externe ?",
          choix: [
            "Parce qu'on connaît les pensées de l'homme",
            "Parce qu'on décrit seulement ses gestes observables, sans accéder à ses pensées",
            "Parce que le texte est au discours direct",
            "Parce que le narrateur est un des personnages",
          ],
          bonneReponse: 1,
          explication:
            "Aucune pensée ni émotion intérieure n'est donnée : seuls des gestes visibles de l'extérieur sont rapportés, comme une caméra neutre.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Pendant que Julie riait avec ses amis, elle ignorait que son frère, à l'autre bout de la ville, venait d'avoir un accident. » Quel type de narrateur ce passage suppose-t-il ?",
          choix: [
            "Un narrateur à focalisation interne, centré sur Julie",
            "Un narrateur à focalisation externe",
            "Un narrateur omniscient (focalisation zéro), qui sait ce que Julie ignore",
            "Un narrateur qui n'existe pas dans ce texte",
          ],
          bonneReponse: 2,
          explication:
            "Le narrateur connaît à la fois ce que vit Julie et un événement qu'elle ignore totalement : seul un narrateur omniscient peut savoir cela.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Elle crut apercevoir une ombre près de l'armoire, mais ce n'était peut-être qu'un effet de la lumière. » Quel indice de focalisation interne trouve-t-on dans cette phrase ?",
          choix: [
            "Le passé simple",
            "Le verbe « crut » et l'expression « peut-être », qui marquent le doute d'un personnage",
            "L'usage du discours direct",
            "La présence d'un dialogue",
          ],
          bonneReponse: 1,
          explication:
            "« Crut » et « peut-être » sont des marques d'incertitude propres à la perception du personnage : elles trahissent une focalisation interne, car un narrateur omniscient ne douterait pas.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un même accident de voiture est raconté deux fois : une première fois du point de vue du conducteur qui ne comprend pas ce qui se passe, une seconde fois par un narrateur qui connaît toutes les causes de l'accident. Quel est l'effet de ce changement de focalisation ?",
          choix: [
            "Aucun effet, les deux versions sont identiques",
            "Le lecteur passe d'une vision limitée et confuse à une vision complète : cela change sa compréhension et son ressenti de la scène",
            "Cela prouve que l'auteur s'est trompé en écrivant",
            "Cela signifie que le texte est un discours indirect",
          ],
          bonneReponse: 1,
          explication:
            "Changer de focalisation change ce que le lecteur sait et ressent : la focalisation interne crée la confusion du personnage, la focalisation zéro apporte une explication complète.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 3 — Le rythme des phrases",
      questions: [
        {
          type: "qcm",
          question:
            "« Il court. Il tombe. Il se relève. Il court encore. » Quel effet ces phrases courtes produisent-elles ?",
          choix: [
            "Un effet de lenteur et de calme",
            "Un effet d'accélération et d'urgence",
            "Un effet comique uniquement",
            "Un effet de description détaillée",
          ],
          bonneReponse: 1,
          explication:
            "Les phrases courtes et juxtaposées miment la rapidité de l'action et créent une impression d'urgence, presque haletante.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« La grande maison, avec son toit d'ardoise usé par les années, son jardin envahi de ronces et ses volets fermés depuis si longtemps qu'on ne se souvenait plus de leur couleur, semblait attendre quelqu'un. » Quel effet produit cette longue phrase ?",
          choix: [
            "Elle accélère le rythme du récit",
            "Elle installe lentement une atmosphère et donne le temps de détailler le décor",
            "Elle montre une action rapide",
            "Elle indique un dialogue entre deux personnages",
          ],
          bonneReponse: 1,
          explication:
            "La longueur de la phrase, avec ses subordonnées et compléments, ralentit la lecture et permet de détailler minutieusement le décor pour installer une atmosphère.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Il y avait dans cette salle des rires, des cris, des chants, des pleurs, des chuchotements, un vacarme indescriptible. » Comment appelle-t-on ce procédé et quel effet produit-il ?",
          choix: [
            "Une comparaison, qui rend la scène plus claire",
            "Une accumulation, qui donne une impression de foisonnement et de désordre",
            "Une répétition simple, sans effet particulier",
            "Un discours direct, qui rend la scène plus vivante",
          ],
          bonneReponse: 1,
          explication:
            "L'accumulation de noms de même nature (rires, cris, chants...) crée un effet d'abondance et de confusion sonore.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Il ressentit d'abord une légère gêne, puis un malaise, puis une peur sourde, puis enfin une terreur incontrôlable. » Quel est le nom de ce procédé et son effet ?",
          choix: [
            "Une gradation, qui intensifie progressivement l'émotion jusqu'à son paroxysme",
            "Une antithèse, qui oppose deux sentiments contraires",
            "Une énumération sans ordre particulier",
            "Un discours indirect libre",
          ],
          bonneReponse: 0,
          explication:
            "Les termes sont classés par intensité croissante (gêne < malaise < peur < terreur) : c'est une gradation qui fait monter la tension dramatiquement.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Elle hésita… puis se ravisa… Non, elle ne dirait rien — pas maintenant, en tout cas. » En quoi la ponctuation (points de suspension et tiret) participe-t-elle ici au rythme et au sens de la phrase ?",
          choix: [
            "Elle n'a aucune fonction, c'est purement décoratif",
            "Les points de suspension marquent l'hésitation du personnage, le tiret introduit une nuance ou un repli sur sa décision",
            "Elle indique uniquement la fin du texte",
            "Elle remplace un discours direct",
          ],
          bonneReponse: 1,
          explication:
            "Les points de suspension traduisent l'hésitation et les silences du personnage, tandis que le tiret introduit une précision qui nuance son refus : la ponctuation devient expressive, elle porte du sens.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 4 — Le lexique : champ lexical et connotation",
      questions: [
        {
          type: "qcm",
          question:
            "« La forêt était sombre, silencieuse et glaciale ; chaque craquement faisait sursauter les promeneurs. » Quel champ lexical domine dans cette phrase et quel effet crée-t-il ?",
          choix: [
            "Le champ lexical de la joie, pour un effet apaisant",
            "Le champ lexical de l'inquiétude, pour créer une atmosphère angoissante",
            "Le champ lexical de la nature, sans effet particulier",
            "Le champ lexical du voyage",
          ],
          bonneReponse: 1,
          explication:
            "« Sombre », « silencieuse », « glaciale », « sursauter » appartiennent au champ lexical de la peur et de l'inquiétude : ils installent une atmosphère angoissante.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Il habitait une masure délabrée au fond de l'impasse. » Le mot « masure » est-il mélioratif ou péjoratif, et que révèle-t-il ?",
          choix: [
            "Mélioratif : il valorise la maison",
            "Péjoratif : il dévalorise l'habitation et suggère la pauvreté ou la misère",
            "Neutre : il ne donne aucune information",
            "Il indique seulement la taille de la maison",
          ],
          bonneReponse: 1,
          explication:
            "« Masure » (plutôt que « maison » ou « demeure ») est une connotation péjorative qui suggère la misère et le délabrement du lieu, donc probablement de son habitant.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Comparez : « Elle vivait dans une demeure lumineuse » et « Elle vivait dans une baraque sombre ». Que révèle la différence de vocabulaire entre ces deux phrases ?",
          choix: [
            "Rien, les deux phrases disent exactement la même chose",
            "Le choix des mots (demeure/baraque, lumineuse/sombre) oriente le jugement du lecteur sur le même lieu, en le valorisant ou le dévalorisant",
            "La première phrase est fausse et la seconde vraie",
            "Il s'agit d'une simple répétition",
          ],
          bonneReponse: 1,
          explication:
            "Le même type de lieu peut être décrit par des mots mélioratifs (demeure, lumineuse) ou péjoratifs (baraque, sombre) : ce choix lexical dirige l'opinion du lecteur, indépendamment des faits.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le gamin s'est carapaté sans demander son reste. » Quel niveau de langue est utilisé ici et que suggère-t-il sur le narrateur ou le contexte ?",
          choix: [
            "Un niveau de langue soutenu, propre à un texte scientifique",
            "Un niveau de langue familier, qui suggère une narration proche de l'oral ou un contexte populaire",
            "Un niveau de langue impossible à identifier",
            "Un niveau de langue neutre, sans aucune connotation",
          ],
          bonneReponse: 1,
          explication:
            "« Gamin », « s'est carapaté » et « sans demander son reste » sont des expressions familières : elles indiquent un registre proche de l'oral, souvent utilisé pour donner un ton vivant ou populaire au récit.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le parfum du pain chaud se mêlait à l'odeur âcre du café brûlé, tandis que le grésillement de la poêle emplissait la cuisine. » Quel est l'effet de ce vocabulaire sensoriel (odeurs, sons) sur le lecteur ?",
          choix: [
            "Il n'a aucun effet particulier, c'est un détail sans importance",
            "Il fait appel aux sens du lecteur pour lui faire ressentir la scène de l'intérieur, comme s'il y était",
            "Il indique uniquement l'heure de la journée",
            "Il remplace la nécessité d'une description",
          ],
          bonneReponse: 1,
          explication:
            "En sollicitant l'odorat et l'ouïe, le texte immerge le lecteur dans la scène : c'est un vocabulaire sensoriel qui rend la description plus vivante et plus concrète.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 5 — Discours direct, indirect et discours indirect libre",
      questions: [
        {
          type: "qcm",
          question:
            "« Elle s'arrêta net et dit : « Je ne partirai pas sans lui. » » Quel type de discours rapporté reconnaît-on ici ?",
          choix: ["Discours direct", "Discours indirect", "Discours indirect libre", "Aucun discours rapporté"],
          bonneReponse: 0,
          explication:
            "Les guillemets et le verbe de parole « dit » introduisent les paroles exactes du personnage : c'est un discours direct.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Elle affirma qu'elle ne partirait pas sans lui. » Par rapport à la phrase « Je ne partirai pas sans lui », qu'est-ce qui a changé ?",
          choix: [
            "Rien n'a changé",
            "Les paroles sont intégrées au récit par une subordonnée, sans guillemets : c'est un discours indirect",
            "C'est devenu un discours indirect libre",
            "C'est devenu une description",
          ],
          bonneReponse: 1,
          explication:
            "La phrase est rapportée par le verbe « affirma » suivi d'une subordonnée en « que », sans guillemets ni ponctuation de dialogue : c'est un discours indirect, qui résume les propos du personnage.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Elle regarda la porte fermée. Jamais elle ne partirait sans lui, quoi qu'il en coûte. » Pourquoi peut-on parler ici de discours indirect libre ?",
          choix: [
            "Parce qu'il y a des guillemets",
            "Parce que la pensée du personnage est insérée dans la narration sans guillemets ni verbe introducteur, tout en gardant la 3e personne",
            "Parce que c'est un dialogue classique",
            "Parce que le texte est au discours direct",
          ],
          bonneReponse: 1,
          explication:
            "On entend la pensée du personnage (« jamais elle ne partirait ») sans marque grammaticale de discours rapporté (pas de guillemets, pas de « elle pensa que ») : c'est un discours indirect libre, qui fusionne la voix du narrateur et celle du personnage.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quel est l'effet du discours direct par rapport au discours indirect dans un récit ?",
          choix: [
            "Le discours direct résume les paroles, le discours indirect les restitue mot pour mot",
            "Le discours direct rend le dialogue plus vivant et immédiat, le discours indirect filtre et résume les propos à travers le narrateur",
            "Il n'y a aucune différence d'effet entre les deux",
            "Le discours indirect est toujours plus long que le discours direct",
          ],
          bonneReponse: 1,
          explication:
            "Le discours direct donne à entendre la voix propre du personnage (vivacité, ton, éventuelles hésitations), tandis que le discours indirect passe par le filtre du narrateur, qui résume ou reformule.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Il la regarda longuement. Alors, c'était donc vrai ? Elle allait vraiment partir, sans un mot d'explication, sans même un regard en arrière ? » Quel effet ce passage au discours indirect libre, mêlé de questions, produit-il sur le lecteur ?",
          choix: [
            "Il éloigne le lecteur des émotions du personnage",
            "Il donne un accès direct et intime au trouble intérieur du personnage, comme si le lecteur pensait avec lui",
            "Il s'agit d'une simple description neutre du décor",
            "Il prouve que le texte est un discours direct classique",
          ],
          bonneReponse: 1,
          explication:
            "Les questions rhétoriques insérées dans la narration, sans guillemets, font entendre directement le désarroi intérieur du personnage : le lecteur partage son trouble de l'intérieur, sans intermédiaire apparent.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 6 — Description et narration",
      questions: [
        {
          type: "qcm",
          question:
            "« La chambre était petite, tapissée d'un papier peint jauni, avec un lit de fer contre le mur et une fenêtre donnant sur la cour. » Ce passage est-il une description ou une narration ?",
          choix: [
            "Une narration, car il y a une action",
            "Une description, car elle donne à voir un lieu sans faire avancer l'action",
            "Un dialogue",
            "Un discours indirect",
          ],
          bonneReponse: 1,
          explication:
            "Aucun événement ne se produit : le texte s'arrête pour détailler un lieu (adjectifs, compléments de lieu) sans faire progresser l'histoire. C'est une description.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Elle entra, posa son sac, alluma la lumière et s'assit sur le lit. » Pourquoi ce passage est-il une narration plutôt qu'une description ?",
          choix: [
            "Parce qu'il y a beaucoup d'adjectifs",
            "Parce qu'il enchaîne une succession d'actions qui font avancer l'histoire",
            "Parce qu'il décrit un décor immobile",
            "Parce qu'il n'y a pas de personnage",
          ],
          bonneReponse: 1,
          explication:
            "Les verbes d'action à la suite (entra, posa, alluma, s'assit) font progresser le récit dans le temps : c'est une narration.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Dans un roman, un long portrait physique et moral d'un personnage est inséré juste avant son entrée en scène active dans l'histoire. Quel est l'effet de cette pause descriptive sur le lecteur ?",
          choix: [
            "Elle n'a aucun effet, on peut la sauter sans rien perdre",
            "Elle prépare le lecteur à mieux comprendre les actions du personnage, en lui donnant des clés d'interprétation avant même qu'il n'agisse",
            "Elle indique que le personnage va bientôt mourir",
            "Elle remplace toujours un dialogue",
          ],
          bonneReponse: 1,
          explication:
            "Une description ralentit le récit mais nourrit la compréhension : en donnant des indices sur le caractère du personnage avant son action, elle oriente la façon dont le lecteur interprétera ce qu'il va faire.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le ciel se couvrit soudain de nuages noirs. Le vent se leva, arrachant les feuilles des arbres. » Cette description du ciel, placée juste avant une scène de dispute entre deux personnages, a probablement quelle fonction ?",
          choix: [
            "Elle sert uniquement à donner des informations météorologiques",
            "Elle annonce, par un effet d'écho, la tension et le conflit qui vont suivre entre les personnages",
            "Elle indique que l'histoire se termine",
            "Elle prouve que le texte est un discours direct",
          ],
          bonneReponse: 1,
          explication:
            "Le décor (ciel qui s'assombrit, vent violent) fait écho à l'atmosphère émotionnelle de la scène à venir : c'est un procédé fréquent où la description du cadre annonce ou accompagne les sentiments des personnages.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un auteur alterne, tout au long d'un chapitre, de courts passages narratifs rapides et de longues pauses descriptives détaillées. Quel est l'intérêt de cette alternance pour la construction du rythme du texte ?",
          choix: [
            "Aucun intérêt, l'alternance est purement décorative",
            "Elle crée un rythme de lecture varié : les pauses descriptives font respirer le texte et intensifient, par contraste, la rapidité des passages d'action qui suivent",
            "Elle prouve que l'auteur ne sait pas choisir entre les deux",
            "Elle sert uniquement à allonger artificiellement le texte",
          ],
          bonneReponse: 1,
          explication:
            "L'alternance description/narration structure le rythme global : les moments de pause (description) mettent en valeur, par contraste, l'accélération des moments d'action (narration) qui suivent.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 7 — Répétitions et anaphores narratives",
      questions: [
        {
          type: "qcm",
          question:
            "« Il ne restait rien. Rien du village, rien des maisons, rien des visages qu'il avait connus. » Quel procédé reconnaît-on et quel est son effet ?",
          choix: [
            "Une comparaison, qui rapproche deux éléments différents",
            "Une répétition du mot « rien », qui insiste sur l'ampleur totale de la destruction",
            "Un discours direct, qui rapporte des paroles",
            "Une gradation descendante",
          ],
          bonneReponse: 1,
          explication:
            "La répétition de « rien » en tête de plusieurs groupes martèle l'idée de perte totale et absolue : c'est une anaphore qui renforce l'intensité du constat.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Chaque jour, elle attendait. Chaque jour, la lettre n'arrivait pas. Chaque jour, elle espérait encore. » Que produit la répétition de « chaque jour » au début de chaque phrase ?",
          choix: [
            "Elle rend le texte confus et difficile à comprendre",
            "Elle crée un effet de refrain qui souligne la répétition monotone et douloureuse de l'attente",
            "Elle indique un changement de narrateur",
            "Elle n'a aucun effet particulier",
          ],
          bonneReponse: 1,
          explication:
            "Cette anaphore en tête de phrase (« chaque jour ») structure le passage comme un refrain et fait ressentir au lecteur la lenteur et la répétitivité de l'attente du personnage.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Courir. Courir encore. Courir jusqu'à ne plus sentir ses jambes. » Pourquoi la répétition du verbe « courir » à l'infinitif, sans sujet ni conjugaison, renforce-t-elle l'effet recherché ?",
          choix: [
            "Parce que l'infinitif est toujours plus correct grammaticalement",
            "Parce que l'absence de sujet et la répétition martelée donnent une impression d'action mécanique, obsessionnelle, presque hors du contrôle du personnage",
            "Parce que cela indique un dialogue",
            "Parce que cela ralentit le rythme du texte",
          ],
          bonneReponse: 1,
          explication:
            "En supprimant le sujet et la conjugaison, l'auteur réduit l'action à son essence répétée : l'effet est celui d'une obsession, d'un automatisme qui dépasse la volonté du personnage.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Dans un texte, la phrase « Et personne ne dit rien. » revient à la fin de trois paragraphes successifs, après trois scènes très différentes (une dispute, un accident, un aveu). Quel est l'effet de cette répétition structurante ?",
          choix: [
            "C'est une erreur de l'auteur qui a oublié de varier son texte",
            "Elle crée un lien entre les trois scènes malgré leurs différences, en soulignant un même silence complice ou impuissant qui les traverse toutes",
            "Elle indique que le texte est un discours rapporté",
            "Elle n'a aucun rapport avec le sens du texte",
          ],
          bonneReponse: 1,
          explication:
            "Une phrase répétée à intervalles réguliers dans un texte fonctionne comme un refrain qui unifie des scènes distinctes autour d'une même idée — ici, un silence qui devient le vrai sujet du texte.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Comparez l'effet d'une répétition exacte (« Il avait peur. Il avait peur. ») à celui d'une répétition avec légère variation (« Il avait peur. Il avait, au fond de lui, une peur immense. »). Que change la variation ?",
          choix: [
            "Rien, les deux procédés produisent exactement le même effet",
            "La variation permet d'amplifier ou de préciser l'idée répétée, alors que la répétition exacte insiste par la simple redondance",
            "La répétition exacte est toujours une erreur à corriger",
            "La variation supprime totalement l'effet de répétition",
          ],
          bonneReponse: 1,
          explication:
            "La répétition exacte martèle une idée par simple redondance, tandis qu'une reprise avec variation (ici une gradation : « peur » devient « peur immense ») garde l'effet d'insistance tout en approfondissant ou intensifiant l'idée reprise.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 8 — Combiner plusieurs procédés dans un même extrait",
      questions: [
        {
          type: "qcm",
          question:
            "« Je courus. Je courus encore. La peur, cette vieille compagne, ne me lâchait plus. » Quels procédés reconnaît-on dans ces trois phrases ?",
          choix: [
            "Un récit à la 1re personne avec phrases courtes et répétition, qui traduisent l'urgence et la panique",
            "Un récit à la 3e personne avec une longue description calme",
            "Un discours direct rapportant les paroles d'un autre personnage",
            "Une focalisation zéro qui explique tout ce qui se passe ailleurs",
          ],
          bonneReponse: 0,
          explication:
            "Le « je » installe la 1re personne, les phrases courtes et la répétition de « je courus » accélèrent le rythme pour traduire la panique du personnage.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« La vieille bicoque, silencieuse, semblait retenir son souffle. Personne n'y était entré depuis des années. Pourtant, ce soir-là, une lumière tremblait derrière les carreaux poussiéreux. » Quels procédés créent le mystère de ce passage ?",
          choix: [
            "Le lexique péjoratif et inquiétant (« bicoque », « poussiéreux »), la personnification (« retenir son souffle ») et l'opposition entre l'habitude (« personne ») et l'événement inattendu (« pourtant, ce soir-là »)",
            "Seulement l'usage du discours direct",
            "Seulement le passage au présent de narration",
            "Aucun procédé particulier, c'est un texte neutre",
          ],
          bonneReponse: 0,
          explication:
            "Plusieurs procédés se combinent : lexique connoté négativement, personnification qui donne vie inquiétante à la maison, et rupture logique (« pourtant ») qui installe le mystère.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Elle se figea. Son cœur, sa gorge, ses mains — tout en elle tremblait. Fuir ? Rester ? Elle ne savait plus. » Quels procédés se combinent pour traduire la panique du personnage ?",
          choix: [
            "Une accumulation (cœur, gorge, mains), des phrases interrogatives courtes traduisant l'hésitation, et une focalisation interne qui donne accès à la confusion intérieure",
            "Un discours indirect qui résume calmement la situation",
            "Une longue description du décor sans lien avec les émotions",
            "Un dialogue entre deux personnages",
          ],
          bonneReponse: 0,
          explication:
            "L'accumulation des parties du corps, les phrases interrogatives elliptiques (« Fuir ? Rester ? ») et l'accès direct à la confusion du personnage (focalisation interne) se combinent pour rendre la panique presque physique pour le lecteur.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Grand, le regard sombre, il avançait sans un mot vers la sortie. Enfin, il partait, celui qu'on n'avait jamais vraiment aimé, celui qu'on n'oublierait jamais. » Quel est l'effet combiné de la focalisation externe (gestes observés) et de la répétition finale (« celui que... celui que... ») ?",
          choix: [
            "Ils s'annulent l'un l'autre et ne produisent aucun effet",
            "La focalisation externe garde le personnage énigmatique tandis que la répétition finale, en écho, souligne l'ambivalence du groupe à son égard (rejet et attachement mêlés)",
            "Ils prouvent que le texte est un discours direct",
            "Ils indiquent uniquement un changement de lieu",
          ],
          bonneReponse: 1,
          explication:
            "La focalisation externe maintient une distance et un mystère autour du personnage, tandis que la reprise anaphorique (« celui que ») en fin de phrase donne, par contraste, un accès bref mais fort au sentiment collectif ambivalent à son égard.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« On disait qu'il avait tout perdu, ce vieil homme au regard éteint. Perdu sa maison. Perdu sa famille. Perdu, disait-on, jusqu'au goût de vivre. » Quels effets créent la combinaison du discours indirect (« on disait ») et de l'anaphore (« perdu... perdu... perdu ») ?",
          choix: [
            "Le discours indirect introduit une rumeur collective, que l'anaphore vient ensuite intensifier et rendre presque implacable, comme une accumulation de preuves",
            "Ces deux procédés sont incompatibles et ne peuvent pas apparaître dans le même texte",
            "Ils indiquent que le texte est entièrement au discours direct",
            "Ils n'ont aucun lien entre eux",
          ],
          bonneReponse: 0,
          explication:
            "Le discours indirect (« on disait ») situe d'abord l'information comme une rumeur extérieure ; l'anaphore de « perdu » qui suit intensifie cette rumeur en une accumulation presque implacable de pertes, jusqu'à l'ultime « le goût de vivre ».",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 9 — Analyser l'effet d'un choix d'écriture (niveau élevé)",
      questions: [
        {
          type: "qcm",
          question:
            "Un auteur choisit de raconter un braquage entièrement du point de vue de l'employé pris en otage, sans jamais montrer ce qui se passe dans la tête des braqueurs. Quel est l'intérêt de ce choix narratif ?",
          choix: [
            "Aucun intérêt particulier, c'est un choix arbitraire",
            "Il fait vivre au lecteur la même incompréhension et la même peur que l'otage, en le privant des mêmes informations que lui",
            "Il prouve que l'auteur ne sait pas écrire du point de vue des braqueurs",
            "Il transforme automatiquement le texte en discours direct",
          ],
          bonneReponse: 1,
          explication:
            "En limitant l'information à ce que perçoit l'otage (focalisation interne), l'auteur fait partager au lecteur son impuissance et son incompréhension face à une situation qu'il ne maîtrise pas.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Dans un roman, tout un chapitre est écrit en phrases très longues et fluides, sans un seul point d'exclamation, alors que le chapitre suivant, qui décrit une bagarre, n'utilise que des phrases très courtes. Que révèle ce contraste sur l'intention de l'auteur ?",
          choix: [
            "L'auteur a changé de style par erreur d'inattention",
            "Il adapte volontairement le rythme de l'écriture au contenu : fluidité pour un moment calme, brièveté saccadée pour un moment violent, afin de faire ressentir physiquement l'ambiance de chaque scène",
            "Cela n'a aucune signification, ce sont deux styles interchangeables",
            "Cela indique que les deux chapitres ont été écrits par deux auteurs différents",
          ],
          bonneReponse: 1,
          explication:
            "Le contraste de rythme entre les deux chapitres est un choix signifiant : les phrases longues et fluides accompagnent un moment calme, les phrases courtes et hachées miment la violence et l'urgence physique de la bagarre.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Un personnage cruel est systématiquement désigné par des termes mélioratifs (« ce généreux protecteur », « cet homme si dévoué ») alors que ses actes, décrits juste après, sont manifestement malveillants. Quel effet ce décalage produit-il sur le lecteur ?",
          choix: [
            "Le lecteur ne remarque jamais ce décalage",
            "Le décalage entre le lexique mélioratif et les actes du personnage crée un effet d'ironie qui invite le lecteur à juger le personnage plus sévèrement que ne le fait, en apparence, le narrateur",
            "Cela prouve que le personnage est réellement généreux",
            "Cela indique une erreur de l'auteur dans le choix des mots",
          ],
          bonneReponse: 1,
          explication:
            "Ce décalage volontaire entre le lexique employé (mélioratif) et la réalité des actes (malveillants) est un procédé ironique : il pousse le lecteur à prendre ses distances avec le jugement apparent du narrateur et à condamner lui-même le personnage.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Une nouvelle commence par une longue phrase unique de dix lignes, sans aucun point, qui décrit le flot ininterrompu des pensées d'un personnage insomniaque. Quel est l'intérêt de cette construction syntaxique par rapport au sujet traité ?",
          choix: [
            "Aucun rapport entre la forme et le sujet, c'est un simple choix de style gratuit",
            "La phrase unique et ininterrompue imite, par sa forme même, le flux continu et sans repos des pensées de l'insomniaque : la syntaxe reproduit le sujet qu'elle décrit",
            "Cela montre que l'auteur ne maîtrise pas la ponctuation",
            "Cela signifie que le texte est un dialogue",
          ],
          bonneReponse: 1,
          explication:
            "La forme (une phrase sans rupture) épouse le fond (un flot de pensées ininterrompu) : c'est un exemple où la construction syntaxique elle-même devient porteuse de sens, en mimant l'expérience du personnage.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Comparez deux façons de rapporter les mêmes paroles d'un général avant une bataille : (A) au discours direct, avec des phrases exclamatives et un vocabulaire guerrier ; (B) au discours indirect, résumées en une phrase neutre par le narrateur. Quel effet stratégique produit chacun de ces choix sur le lecteur ?",
          choix: [
            "Les deux versions produisent rigoureusement le même effet sur le lecteur",
            "(A) fait vivre au lecteur l'intensité et la force de conviction du discours en direct, tandis que (B) crée une distance qui peut suggérer le détachement, l'ironie ou le peu d'importance accordée par le narrateur à ces paroles",
            "(B) est toujours plus long que (A)",
            "(A) est nécessairement plus objectif que (B)",
          ],
          bonneReponse: 1,
          explication:
            "Le discours direct restitue l'énergie et l'émotion des paroles telles qu'elles ont été prononcées, tandis que le discours indirect, en les résumant depuis le point de vue du narrateur, introduit une distance qui peut minimiser leur portée ou suggérer un jugement implicite.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 10 — Bilan : mobiliser tous les procédés d'écriture",
      questions: [
        {
          type: "qcm",
          question:
            "« Il pleuvait depuis trois jours. Marie regardait par la fenêtre, immobile. » Quels sont la personne, le point de vue et le temps dominants dans cet extrait ?",
          choix: [
            "1re personne, focalisation interne, présent",
            "3e personne, focalisation externe ou interne selon la suite, imparfait",
            "2e personne, focalisation zéro, futur",
            "1re personne, focalisation zéro, passé simple",
          ],
          bonneReponse: 1,
          explication:
            "« Il pleuvait », « Marie regardait » : 3e personne et imparfait (description d'un état qui dure) ; la focalisation reste ouverte, mais rien n'indique encore un accès aux pensées de Marie, on est proche d'une focalisation externe.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Plus un bruit. Plus un souffle. Le silence absolu régnait dans la maison abandonnée. » Quels procédés identifiez-vous dans ces phrases ?",
          choix: [
            "Une répétition/anaphore (« plus un »), des phrases courtes nominales, et un lexique du silence qui installent une atmosphère pesante",
            "Un discours direct rapportant les paroles d'un personnage",
            "Une gradation ascendante uniquement",
            "Un présent de narration",
          ],
          bonneReponse: 0,
          explication:
            "La reprise de « plus un » (anaphore), l'absence de verbes conjugués dans les deux premières phrases (phrases nominales) et le vocabulaire du silence combinent leurs effets pour créer une tension muette.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« — Tu ne comprends donc rien ? cria-t-elle. Il resta silencieux, encaissant chaque mot comme un coup. » Quels procédés se combinent dans cet extrait et à quel effet ?",
          choix: [
            "Un discours direct (la réplique entre tirets) associé à une comparaison (« comme un coup ») qui traduit la violence ressentie par le personnage silencieux",
            "Un discours indirect uniquement",
            "Une description de paysage sans lien avec les personnages",
            "Un discours indirect libre uniquement",
          ],
          bonneReponse: 0,
          explication:
            "Le tiret et le verbe de parole « cria-t-elle » signalent le discours direct ; la comparaison « comme un coup » traduit, par un procédé figuré, l'impact violent des paroles sur celui qui les reçoit en silence.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Elle regarda une dernière fois la maison de son enfance. Adieu les rires. Adieu les étés. Adieu, peut-être, à une partie d'elle-même. » En combinant l'anaphore (« adieu »), la gradation (de la maison concrète à « une partie d'elle-même ») et la modalisation (« peut-être »), quel effet global le texte produit-il ?",
          choix: [
            "Un effet purement descriptif et neutre, sans charge émotionnelle",
            "Un effet d'adieu déchirant et progressif, qui élargit la perte d'un lieu concret à une perte plus abstraite et intime, nuancée par le doute final",
            "Un effet comique, par contraste avec le sérieux du sujet",
            "Aucun effet, ces procédés s'annulent mutuellement",
          ],
          bonneReponse: 1,
          explication:
            "L'anaphore de « adieu » structure une litanie d'adieux ; la gradation élargit la perte du concret (rires, étés) à l'abstrait (une partie d'elle-même) ; le modalisateur « peut-être » introduit un doute qui nuance et intensifie l'émotion en la rendant plus intime.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Un correcteur de brevet lit cette consigne : « Analysez les procédés d'écriture utilisés dans les lignes 12 à 15 et expliquez leur effet sur le lecteur. » Quelle démarche est la plus efficace pour répondre ?",
          choix: [
            "Citer un maximum de procédés possibles sans les relier au texte, pour montrer qu'on les connaît tous",
            "Choisir deux ou trois procédés vraiment présents dans l'extrait, les citer entre « » avec précision, nommer chacun, puis expliquer l'effet précis qu'il produit dans ce passage en particulier",
            "Résumer l'histoire du texte sans parler des procédés",
            "Recopier la définition générale de chaque procédé sans citer le texte",
          ],
          bonneReponse: 1,
          explication:
            "Une bonne analyse au brevet repose sur la précision : citer le texte, nommer le procédé, puis expliquer son effet concret dans ce passage précis — mieux vaut trois procédés bien analysés qu'une liste non justifiée.",
          difficulte: "avance",
        },
      ],
    },
  ],
},
/**
 * Fiche de compréhension : les figures de style.
 * Reconnaître les principaux procédés (analogie, exagération/atténuation,
 * opposition, insistance, substitution) et analyser l'effet qu'ils produisent.
 */
{
  slug: "figures-de-style",
  titre: "Les figures de style",
  emoji: "🎭",
  accroche:
    "Un même mot peut peser lourd ou léger selon la figure de style qui l'habille : apprends à les repérer et à expliquer l'effet qu'elles produisent sur le lecteur.",
  sections: [
    {
      titre: "La famille de l'analogie : comparer et fusionner",
      points: [
        "La comparaison rapproche deux éléments à l'aide d'un mot-outil (« comme », « tel que », « pareil à », « ressembler à »). Exemple : « Ses yeux brillaient comme des étoiles. » Effet : elle rend une image plus concrète et plus parlante.",
        "La métaphore rapproche deux éléments sans mot-outil : elle identifie carrément l'un à l'autre. Exemple : « Cet élève est une véritable fusée en calcul mental. » Effet : l'image est plus frappante et plus poétique que la comparaison, car elle s'impose directement.",
        "La personnification attribue des comportements, sentiments ou paroles humaines à un animal, une chose ou une idée. Exemple : « Le vent hurlait de rage contre les volets. » Effet : elle donne vie à ce qui est inanimé et crée une atmosphère (inquiétante, poétique, comique).",
        "Astuce pour ne pas confondre : cherche le mot-outil de comparaison (« comme », « semblable à »). S'il est présent, c'est une comparaison ; s'il est absent alors que deux éléments sont assimilés, c'est une métaphore.",
      ],
    },
    {
      titre: "La famille de l'exagération et de l'atténuation",
      points: [
        "L'hyperbole exagère fortement la réalité pour la mettre en valeur. Exemple : « J'ai une montagne de devoirs ce soir ! » Effet : elle insiste, amplifie une émotion ou fait sourire par son excès.",
        "La litote dit peu pour suggérer beaucoup : elle atténue l'expression en employant souvent une négation, mais l'idée réelle est plus forte que les mots. Exemple : « Va, je ne te hais point » (on comprend : je t'aime). Effet : elle laisse deviner un sentiment fort tout en restant pudique ou discrète.",
        "L'euphémisme adoucit une réalité désagréable, choquante ou triste en choisissant des mots plus doux. Exemple : « Il nous a quittés » pour dire qu'une personne est morte. Effet : il ménage la sensibilité du lecteur ou de l'interlocuteur, parfois avec une pointe d'ironie.",
        "Point commun et différence : l'hyperbole grossit, la litote et l'euphémisme minimisent — mais la litote laisse deviner plus fort que ce qu'elle dit, alors que l'euphémisme cherche surtout à ne pas heurter.",
      ],
    },
    {
      titre: "La famille de l'opposition",
      points: [
        "L'antithèse rapproche dans la même phrase deux idées ou mots de sens opposés. Exemple : « Il faisait un froid glacial sous un soleil éclatant. » Effet : elle souligne un contraste, une tension ou un paradoxe de la situation.",
        "L'oxymore réunit deux mots de sens contraire accolés l'un à l'autre, souvent un nom et son adjectif. Exemple : « un silence assourdissant », « une douce violence ». Effet : il crée une image saisissante en un raccourci très condensé, plus resserré que l'antithèse.",
        "Différence à retenir : l'antithèse oppose deux groupes de mots dans la phrase ; l'oxymore colle les deux contraires l'un à côté de l'autre en une seule expression.",
      ],
    },
    {
      titre: "La famille de l'insistance",
      points: [
        "L'anaphore répète un même mot ou groupe de mots en début de phrase ou de vers successifs. Exemple : « Je me souviens du village. Je me souviens des rires. Je me souviens de toi. » Effet : elle crée un rythme, insiste sur une idée et renforce l'émotion.",
        "L'énumération aligne une suite de mots ou groupes de mots de même nature, séparés par des virgules. Exemple : « Dans son sac, il y avait des livres, des crayons, des feuilles froissées. » Effet : elle donne une impression d'abondance ou de précision.",
        "La gradation est une énumération organisée par intensité croissante (ou décroissante). Exemple : « Il était surpris, puis inquiet, puis terrifié. » Effet : elle intensifie progressivement une émotion ou une action jusqu'à un point culminant.",
      ],
    },
    {
      titre: "La famille de la substitution",
      points: [
        "La périphrase remplace un mot par un groupe de mots qui le désigne autrement, sans le nommer directement. Exemple : « la Ville lumière » pour Paris. Effet : elle évite une répétition, ajoute une précision ou une valeur poétique.",
        "La métonymie désigne une chose par un élément qui lui est logiquement lié (le contenant pour le contenu, la partie pour le tout, l'auteur pour l'œuvre...). Exemple : « boire un verre » (pour le contenu), « la salle applaudit » (pour les spectateurs). Effet : elle crée un raccourci expressif et concentre l'image sur un détail signifiant.",
        "Différence à retenir : la périphrase développe une expression plus longue pour désigner une chose ; la métonymie, au contraire, resserre en utilisant un mot lié par le sens à la chose désignée.",
      ],
    },
  ],
  series: [
    {
      titre: "Série 1 — Comparaison ou métaphore ?",
      questions: [
        {
          type: "qcm",
          question: "« Cette maison est un vrai four en été. » Quelle figure de style reconnais-tu ?",
          choix: ["Une comparaison", "Une métaphore", "Une personnification", "Une hyperbole"],
          bonneReponse: 1,
          explication:
            "Il n'y a pas de mot-outil de comparaison : la maison est directement identifiée à un four. C'est une métaphore.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "« Son sourire était doux comme du miel. » Quelle figure reconnais-tu ?",
          choix: ["Une métaphore", "Une comparaison", "Une antithèse", "Une périphrase"],
          bonneReponse: 1,
          explication: "Le mot-outil « comme » relie explicitement les deux éléments : c'est une comparaison.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "Quel est le point commun entre la comparaison et la métaphore ?",
          choix: [
            "Elles opposent deux idées contraires",
            "Elles rapprochent deux éléments pour créer une image",
            "Elles exagèrent la réalité",
            "Elles répètent un mot en début de phrase",
          ],
          bonneReponse: 1,
          explication:
            "Les deux figures rapprochent un élément (le comparé) d'un autre (le comparant) pour créer une image ; seule la présence ou l'absence du mot-outil les distingue.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "« Le temps est un grand sculpteur. » (Marguerite Yourcenar) Quelle figure de style est employée ?",
          choix: ["Une comparaison", "Une métaphore", "Une litote", "Une énumération"],
          bonneReponse: 1,
          explication:
            "Aucun mot-outil n'est présent : le temps est assimilé directement à un sculpteur. C'est une métaphore.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "Parmi ces quatre phrases, laquelle est l'intrus, c'est-à-dire ne contient pas de comparaison ?",
          choix: [
            "« Il est rusé comme un renard. »",
            "« Elle chantait tel un rossignol. »",
            "« Cet homme est un renard rusé et calculateur. »",
            "« Sa peau était blanche comme la neige. »",
          ],
          bonneReponse: 2,
          explication:
            "Les trois autres phrases utilisent un mot-outil (« comme », « tel »). La troisième assimile directement l'homme à un renard, sans mot-outil : c'est une métaphore, pas une comparaison.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 2 — La personnification",
      questions: [
        {
          type: "qcm",
          question: "« Les arbres dansaient sous la tempête. » Quelle figure de style est utilisée ?",
          choix: ["Une métaphore", "Une personnification", "Une hyperbole", "Une antithèse"],
          bonneReponse: 1,
          explication:
            "« Danser » est une action humaine attribuée aux arbres : c'est une personnification.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "Quel est l'effet produit par une personnification dans un texte descriptif ?",
          choix: [
            "Elle rend un objet ou un élément de la nature plus vivant",
            "Elle atténue une réalité choquante",
            "Elle remplace un mot par un autre lié logiquement",
            "Elle oppose deux idées contraires",
          ],
          bonneReponse: 0,
          explication:
            "En prêtant des comportements humains à ce qui ne l'est pas, la personnification donne vie et présence à un objet, un animal ou un phénomène naturel.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "« La lune observait la ville endormie, comme une gardienne silencieuse. » Que remarque-t-on ici ?",
          choix: [
            "Seulement une personnification",
            "Seulement une comparaison",
            "Une personnification et une comparaison combinées",
            "Une métonymie",
          ],
          bonneReponse: 2,
          explication:
            "« Observait » personnifie la lune (action humaine), et « comme une gardienne » ajoute une comparaison explicite : les deux figures se combinent dans la même phrase.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "« La vieille horloge du salon toussait à chaque heure qui sonnait. » Quelle figure de style domine ?",
          choix: ["Une périphrase", "Une personnification", "Une gradation", "Un oxymore"],
          bonneReponse: 1,
          explication: "« Toussait » attribue un comportement humain (et même physique) à l'horloge : c'est une personnification.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Parmi ces phrases, laquelle est l'intrus, c'est-à-dire ne contient pas de personnification ?",
          choix: [
            "« La forêt murmurait des secrets anciens. »",
            "« La rivière serpentait paresseusement dans la vallée. »",
            "« Le vent sifflait une mélodie triste. »",
            "« La rivière était large comme un lac. »",
          ],
          bonneReponse: 3,
          explication:
            "Les trois premières phrases prêtent des comportements humains ou vivants (murmurer, être paresseux, siffler une mélodie) à des éléments naturels. La dernière n'est qu'une comparaison de taille, sans trait humain.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 3 — L'hyperbole",
      questions: [
        {
          type: "qcm",
          question: "« Je meurs de faim, je n'ai rien mangé depuis un siècle ! » Quelle figure reconnais-tu ?",
          choix: ["Une litote", "Une hyperbole", "Un euphémisme", "Une métonymie"],
          bonneReponse: 1,
          explication:
            "L'exagération volontaire (« mourir de faim », « un siècle ») amplifie fortement la réalité : c'est une hyperbole.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "Quel est l'effet recherché par une hyperbole ?",
          choix: [
            "Adoucir une réalité désagréable",
            "Suggérer plus qu'on ne dit",
            "Amplifier une émotion ou une action pour la mettre en valeur",
            "Remplacer un mot par une expression plus longue",
          ],
          bonneReponse: 2,
          explication:
            "En exagérant fortement, l'hyperbole met en relief une émotion, une quantité ou une action, parfois avec un effet comique.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "« Il a une force herculéenne, il pourrait soulever une montagne. » Quelle figure est présente ?",
          choix: ["Une hyperbole", "Une litote", "Une antithèse", "Une périphrase"],
          bonneReponse: 0,
          explication:
            "« Soulever une montagne » est une exagération impossible dans la réalité : c'est une hyperbole qui insiste sur la force du personnage.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Ce livre est un chef-d'œuvre absolu, le plus grand jamais écrit, une pure merveille éternelle. » Quel procédé renforce ici l'hyperbole ?",
          choix: [
            "Une énumération d'expressions toutes plus exagérées les unes que les autres",
            "Une litote",
            "Un euphémisme",
            "Une périphrase discrète",
          ],
          bonneReponse: 0,
          explication:
            "Les expressions superlatives s'enchaînent (« chef-d'œuvre absolu », « le plus grand », « pure merveille éternelle ») : cette accumulation d'exagérations renforce l'effet hyperbolique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "Parmi ces phrases, laquelle est l'intrus, c'est-à-dire n'est pas une hyperbole ?",
          choix: [
            "« J'ai cent choses à te raconter ! »",
            "« Il pleut des cordes depuis ce matin. »",
            "« Elle a versé un torrent de larmes. »",
            "« Il n'est pas très bavard. » (pour dire qu'il ne parle presque jamais)",
          ],
          bonneReponse: 3,
          explication:
            "Les trois premières exagèrent une quantité pour insister. La dernière, elle, minimise volontairement les mots pour suggérer plus qu'elle ne dit : c'est une litote, pas une hyperbole.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 4 — L'antithèse et l'oxymore",
      questions: [
        {
          type: "qcm",
          question: "« Cette obscure clarté qui tombe des étoiles. » (Corneille) Quelle figure de style est ici employée ?",
          choix: ["Une antithèse", "Un oxymore", "Une comparaison", "Une gradation"],
          bonneReponse: 1,
          explication:
            "« Obscure » et « clarté » sont deux mots de sens contraire directement accolés : c'est un oxymore, une figure très condensée.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "« Les riches banquetaient pendant que les pauvres mouraient de faim. » Quelle figure reconnais-tu ?",
          choix: ["Une antithèse", "Un oxymore", "Une périphrase", "Une anaphore"],
          bonneReponse: 0,
          explication:
            "Deux situations opposées (richesse/pauvreté, abondance/famine) sont mises en regard dans la même phrase : c'est une antithèse.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "Quelle est la différence essentielle entre l'antithèse et l'oxymore ?",
          choix: [
            "L'antithèse oppose deux groupes de mots dans la phrase ; l'oxymore colle deux mots contraires l'un à l'autre",
            "L'antithèse exagère la réalité ; l'oxymore l'atténue",
            "L'antithèse remplace un mot ; l'oxymore le répète",
            "Il n'y a aucune différence, ce sont des synonymes",
          ],
          bonneReponse: 0,
          explication:
            "L'oxymore est un raccourci extrême de l'antithèse : au lieu d'opposer deux idées à distance dans la phrase, il réunit deux mots contraires en une seule expression (« un silence assourdissant »).",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "« Cette petite grande dame a bouleversé l'histoire de son pays. » Quelle figure est employée ?",
          choix: ["Une antithèse", "Un oxymore", "Une métonymie", "Une hyperbole"],
          bonneReponse: 1,
          explication:
            "« Petite » et « grande » sont deux adjectifs contraires accolés au même nom : c'est un oxymore, qui souligne un paradoxe du personnage.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Parmi ces phrases, laquelle est l'intrus, c'est-à-dire contient un oxymore plutôt qu'une antithèse ?",
          choix: [
            "« Il vivait dans le luxe, elle survivait dans la misère. »",
            "« Le jour succédait à la nuit sans jamais se ressembler. »",
            "« Cette victoire amère hantait encore ses pensées. »",
            "« L'un parlait fort, l'autre se taisait. »",
          ],
          bonneReponse: 2,
          explication:
            "« Victoire amère » associe deux mots de sens contraire dans une même expression resserrée : c'est un oxymore. Les trois autres opposent deux groupes de mots distincts dans la phrase, ce qui correspond à l'antithèse.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 5 — L'anaphore, l'énumération et la gradation",
      questions: [
        {
          type: "qcm",
          question:
            "« Je voulais parler. Je voulais crier. Je voulais qu'on m'entende. » Quelle figure de style est ici employée ?",
          choix: ["Une gradation", "Une anaphore", "Une métonymie", "Un oxymore"],
          bonneReponse: 1,
          explication:
            "Le groupe « Je voulais » est répété en tête de chaque phrase : c'est une anaphore, qui crée un effet de rythme et d'insistance.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "« Dans le tiroir s'entassaient des lettres, des photos, des tickets de cinéma, des cartes postales. » Quelle figure reconnais-tu ?",
          choix: ["Une anaphore", "Une énumération", "Une antithèse", "Un euphémisme"],
          bonneReponse: 1,
          explication:
            "Une suite d'éléments de même nature est alignée et séparée par des virgules : c'est une énumération, qui donne une impression d'abondance.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "« Elle était agacée, puis contrariée, puis franchement furieuse. » Quelle figure de style précise reconnais-tu ?",
          choix: ["Une énumération simple", "Une gradation", "Une antithèse", "Une périphrase"],
          bonneReponse: 1,
          explication:
            "Les éléments énumérés sont classés par intensité croissante (agacée → contrariée → furieuse) : c'est une gradation, une énumération organisée.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quel est l'effet principal produit par une anaphore dans un texte engagé ou poétique ?",
          choix: [
            "Elle adoucit un propos choquant",
            "Elle crée un rythme et martèle une idée pour renforcer son impact",
            "Elle remplace un mot pour éviter une répétition",
            "Elle suggère plus qu'elle ne dit",
          ],
          bonneReponse: 1,
          explication:
            "En répétant un même groupe de mots en tête de phrases ou de vers successifs, l'anaphore installe un rythme scandé qui martèle l'idée et intensifie l'émotion.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "Parmi ces phrases, laquelle est l'intrus, c'est-à-dire n'est pas une gradation ?",
          choix: [
            "« Il a d'abord souri, puis ri, puis éclaté de rire aux larmes. »",
            "« La foule murmurait, puis grondait, puis hurlait sa colère. »",
            "« Sur la table : un stylo, un cahier, une gomme, une règle. »",
            "« Le blessé était fatigué, puis épuisé, puis à bout de forces. »",
          ],
          bonneReponse: 2,
          explication:
            "Les trois premières listes progressent par intensité croissante, ce qui définit la gradation. La troisième n'est qu'une simple énumération d'objets, sans progression d'intensité.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 6 — La litote et l'euphémisme",
      questions: [
        {
          type: "qcm",
          question: "« Ce n'est pas mauvais » (pour dire que c'est très bon). Quelle figure de style est employée ?",
          choix: ["Une hyperbole", "Une litote", "Une métonymie", "Une antithèse"],
          bonneReponse: 1,
          explication:
            "La phrase dit peu (« pas mauvais ») pour laisser entendre beaucoup plus (« excellent ») : c'est une litote.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "« Il nous a quittés » pour annoncer un décès. Quelle figure de style reconnais-tu ?",
          choix: ["Une litote", "Un euphémisme", "Une hyperbole", "Une périphrase"],
          bonneReponse: 1,
          explication:
            "L'expression adoucit une réalité douloureuse (la mort) en la formulant plus doucement : c'est un euphémisme.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "Quelle est la différence essentielle entre la litote et l'euphémisme ?",
          choix: [
            "La litote dit moins pour suggérer davantage ; l'euphémisme adoucit surtout pour ne pas choquer",
            "La litote exagère ; l'euphémisme compare",
            "La litote répète un mot ; l'euphémisme l'oppose à un autre",
            "Il n'y a aucune différence entre les deux figures",
          ],
          bonneReponse: 0,
          explication:
            "La litote joue sur le sous-entendu : elle dit peu mais fait comprendre beaucoup (souvent avec une négation). L'euphémisme, lui, vise avant tout à ménager la sensibilité du lecteur face à une réalité difficile.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question: "« Cette personne connaît quelques difficultés financières » pour dire qu'elle est ruinée. Quelle figure est utilisée ?",
          choix: ["Une litote", "Un euphémisme", "Une gradation", "Un oxymore"],
          bonneReponse: 1,
          explication:
            "L'expression « quelques difficultés financières » adoucit une réalité brutale (la ruine) : c'est un euphémisme.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Parmi ces phrases, laquelle est l'intrus, c'est-à-dire est une litote plutôt qu'un euphémisme ?",
          choix: [
            "« Il a été licencié » devient « il a été remercié ».",
            "« Elle est aveugle » devient « elle est non-voyante ».",
            "« Je ne te déteste pas » (pour dire : je t'apprécie beaucoup).",
            "« Il est mort » devient « il s'est éteint ».",
          ],
          bonneReponse: 2,
          explication:
            "Les trois premières adoucissent une réalité pénible sans en changer le sens réel : ce sont des euphémismes. La troisième dit moins (« je ne te déteste pas ») pour suggérer bien plus fort (une affection réelle) : c'est une litote.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 7 — La périphrase et la métonymie",
      questions: [
        {
          type: "qcm",
          question: "« L'astre du jour se levait sur la vallée » pour désigner le soleil. Quelle figure reconnais-tu ?",
          choix: ["Une métonymie", "Une périphrase", "Une antithèse", "Une litote"],
          bonneReponse: 1,
          explication:
            "« L'astre du jour » est un groupe de mots qui désigne le soleil sans le nommer directement : c'est une périphrase.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "« Toute la salle s'est levée pour applaudir. » Que désigne réellement « la salle » ici ?",
          choix: [
            "Le bâtiment lui-même, par une périphrase",
            "Les spectateurs présents dans la salle, par une métonymie",
            "Une comparaison avec un bâtiment vide",
            "Une hyperbole sur la taille du lieu"],
          bonneReponse: 1,
          explication:
            "« La salle » (le contenant) est employée pour désigner les spectateurs (le contenu) : c'est une métonymie.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question: "Quelle est la différence essentielle entre la périphrase et la métonymie ?",
          choix: [
            "La périphrase développe une expression plus longue pour désigner une chose ; la métonymie la resserre en un mot lié par le sens",
            "La périphrase exagère la réalité ; la métonymie l'atténue",
            "La périphrase oppose deux idées ; la métonymie les compare",
            "Ce sont deux noms différents pour la même figure",
          ],
          bonneReponse: 0,
          explication:
            "La périphrase allonge en remplaçant un mot par une expression qui le décrit (« la Ville lumière » pour Paris) ; la métonymie, au contraire, condense en utilisant un seul mot lié logiquement à la chose désignée (« boire un verre »).",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question: "« Il a lu tout Victor Hugo pendant les vacances. » Quelle figure de style est employée ?",
          choix: ["Une périphrase", "Une métonymie", "Une comparaison", "Une hyperbole"],
          bonneReponse: 1,
          explication:
            "« Victor Hugo » (l'auteur) est utilisé pour désigner ses œuvres (le contenu) : c'est une métonymie, où l'auteur remplace l'œuvre.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Parmi ces expressions, laquelle est l'intrus, c'est-à-dire une métonymie plutôt qu'une périphrase ?",
          choix: [
            "« Le roi des animaux » pour le lion",
            "« La perfide Albion » pour l'Angleterre",
            "« Boire une bouteille entière » pour désigner le vin qu'elle contient",
            "« Le pays du Soleil-Levant » pour le Japon",
          ],
          bonneReponse: 2,
          explication:
            "Les trois premières remplacent un nom par une expression qui le décrit sans le nommer : ce sont des périphrases. La troisième utilise le contenant (« la bouteille ») pour désigner le contenu (le vin) : c'est une métonymie.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 8 — Identifier la figure dans des phrases variées",
      questions: [
        {
          type: "qcm",
          question: "« Cette ville est un labyrinthe où l'on se perd sans fin. » Quelle figure de style reconnais-tu ?",
          choix: ["Une comparaison", "Une métaphore", "Une périphrase", "Une antithèse"],
          bonneReponse: 1,
          explication:
            "La ville est directement identifiée à un labyrinthe, sans mot-outil : c'est une métaphore.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "« Le soleil se couchait, rougissant timidement derrière les collines. » Quelle figure est employée ?",
          choix: ["Une personnification", "Une hyperbole", "Une litote", "Une métonymie"],
          bonneReponse: 0,
          explication:
            "« Rougissant timidement » attribue une émotion et un comportement humains au soleil : c'est une personnification.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "« Sur son étagère : des romans, des BD, des dictionnaires, des magazines poussiéreux. » Quelle figure reconnais-tu ?",
          choix: ["Une gradation", "Une énumération", "Une anaphore", "Un oxymore"],
          bonneReponse: 1,
          explication:
            "Les éléments listés ne progressent pas par intensité, ils sont simplement juxtaposés : c'est une énumération.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "« Elle a affronté mille dangers pour le retrouver. » Quelle figure est ici employée ?",
          choix: ["Une hyperbole", "Une litote", "Un euphémisme", "Une périphrase"],
          bonneReponse: 0,
          explication:
            "« Mille dangers » exagère le nombre réel d'épreuves affrontées pour insister sur le courage du personnage : c'est une hyperbole.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Parmi ces phrases, laquelle est l'intrus, c'est-à-dire ne contient aucune figure de style analogique (comparaison, métaphore ou personnification) ?",
          choix: [
            "« La ville tout entière s'était endormie sous la neige. » (le lieu prend vie)",
            "« Il court comme un lièvre effrayé. »",
            "« Cet homme est un roc face aux critiques. »",
            "« Le magasin ferme à dix-huit heures précises. »",
          ],
          bonneReponse: 3,
          explication:
            "Les trois premières phrases relèvent respectivement de la personnification, de la comparaison et de la métaphore. La dernière est une simple information factuelle, sans aucune figure de style.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 9 — Reconnaître l'effet produit",
      questions: [
        {
          type: "qcm",
          question:
            "« Il pleuvait des trombes d'eau, un vrai déluge s'abattait sur la ville. » Quel effet cette hyperbole produit-elle ?",
          choix: [
            "Elle adoucit la description de la pluie",
            "Elle amplifie l'intensité de la pluie pour marquer les esprits",
            "Elle compare la pluie à un animal",
            "Elle remplace le mot « pluie » par un mot voisin",
          ],
          bonneReponse: 1,
          explication:
            "L'exagération (« trombes d'eau », « déluge ») insiste sur la violence de la pluie et frappe l'imagination du lecteur.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Debout, les damnés de la terre ! Debout, les forçats de la faim ! » Quel est l'effet de l'anaphore « Debout » dans cet extrait engagé ?",
          choix: [
            "Elle atténue la violence du propos",
            "Elle crée un appel martelé qui mobilise et galvanise",
            "Elle oppose deux réalités contraires",
            "Elle remplace une expression trop longue",
          ],
          bonneReponse: 1,
          explication:
            "La répétition de « Debout » en tête de chaque vers scande un appel à l'action et renforce la force mobilisatrice du texte.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Cette lueur d'espoir noire l'habitait tout entier. » Quel effet produit l'oxymore « lueur... noire » ?",
          choix: [
            "Il rend la phrase plus simple à comprendre",
            "Il traduit un sentiment paradoxal et trouble par une image saisissante",
            "Il exagère une émotion sans nuance",
            "Il évite une répétition du mot « espoir »",
          ],
          bonneReponse: 1,
          explication:
            "En associant « lueur d'espoir » et « noire », l'oxymore condense en une image un sentiment contradictoire (espoir et désespoir mêlés), ce qui frappe le lecteur.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« On ne peut pas dire qu'il soit très motivé par ce devoir. » (pour dire qu'il ne fait aucun effort) Quel effet cette litote produit-elle ?",
          choix: [
            "Elle exagère franchement le manque de motivation",
            "Elle laisse entendre, avec ironie ou retenue, une réalité plus forte que ce qui est dit",
            "Elle adoucit uniquement pour ne pas vexer",
            "Elle remplace le mot « motivé » par une image poétique",
          ],
          bonneReponse: 1,
          explication:
            "En disant peu (« pas très motivé »), la phrase suggère en réalité un désintérêt total, souvent avec une nuance ironique propre à la litote.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Parmi ces effets, lequel est l'intrus, c'est-à-dire ne correspond à aucune figure de style présentée dans cette fiche ?",
          choix: [
            "Rendre une image plus frappante en assimilant deux éléments (métaphore)",
            "Insister sur une idée par la répétition d'un mot (anaphore)",
            "Corriger l'orthographe d'un mot mal écrit dans une copie",
            "Adoucir une réalité difficile à annoncer (euphémisme)",
          ],
          bonneReponse: 2,
          explication:
            "Corriger une orthographe est une tâche de relecture, pas un effet de style : cette proposition n'a rien à voir avec les figures de style étudiées.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 10 — Bilan : toutes les figures mélangées",
      questions: [
        {
          type: "qcm",
          question: "« Le stade tout entier retenait son souffle avant le coup de sifflet final. » Quelle figure reconnais-tu ?",
          choix: ["Une métonymie", "Une périphrase", "Une antithèse", "Une hyperbole"],
          bonneReponse: 0,
          explication:
            "« Le stade » (le lieu, le contenant) désigne en réalité les spectateurs qui s'y trouvent (le contenu) : c'est une métonymie.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question: "« Elle avançait à pas de tortue alors que le temps filait à toute allure. » Quelle figure structure cette phrase ?",
          choix: ["Une antithèse", "Un oxymore", "Une gradation", "Une litote"],
          bonneReponse: 0,
          explication:
            "Deux images opposées (la lenteur de la marche, la rapidité du temps) sont mises face à face dans la même phrase : c'est une antithèse.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question: "« Ce n'est pas totalement faux » (pour dire que c'est en grande partie vrai). Quelle figure reconnais-tu ?",
          choix: ["Un euphémisme", "Une litote", "Une hyperbole", "Une métonymie"],
          bonneReponse: 1,
          explication:
            "La double négation atténuante (« pas totalement faux ») dit moins pour suggérer une vérité plus affirmée : c'est une litote.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Le doux pays des mille collines » pour désigner le Rwanda, dans un texte qui enchaîne aussi « Peu à peu, le silence grandit, s'épaissit, devient assourdissant. » Quelles figures se succèdent dans ces deux extraits ?",
          choix: [
            "Une métonymie, puis une antithèse",
            "Une périphrase, puis une gradation se terminant par un oxymore",
            "Une hyperbole, puis une litote",
            "Une comparaison, puis une énumération",
          ],
          bonneReponse: 1,
          explication:
            "« Le doux pays des mille collines » est une périphrase qui désigne le Rwanda sans le nommer. Puis « grandit, s'épaissit, devient assourdissant » forme une gradation, qui s'achève sur l'oxymore « silence assourdissant ».",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Parmi ces quatre phrases, laquelle est l'intrus, c'est-à-dire relève d'une figure de substitution (périphrase ou métonymie) plutôt que d'une figure d'analogie, d'exagération ou d'opposition ?",
          choix: [
            "« Le roi des animaux rugit dans la savane brûlante comme un four. »",
            "« Toute la classe a éclaté de rire en même temps. » (pour désigner les élèves)",
            "« Cette montagne de travail m'effraie un peu, je l'avoue. »",
            "« Un silence de plomb régnait dans la pièce glaciale. »",
          ],
          bonneReponse: 1,
          explication:
            "« Toute la classe » (le groupe, le contenant) désigne les élèves (le contenu) : c'est une métonymie, une figure de substitution. Les trois autres relèvent d'une périphrase mêlée de comparaison, d'une hyperbole, et d'un oxymore mêlé d'antithèse — pas d'une substitution.",
          difficulte: "avance",
        },
      ],
    },
  ],
},
/**
 * Fiche de compréhension : les tons (registres) — reconnaître le ton d'un
 * texte à ses marques (vocabulaire, ponctuation, procédés, thèmes) et éviter
 * les confusions classiques (tragique/pathétique, comique/ironique).
 */
{
  slug: "tons",
  titre: "Les tons (registres)",
  emoji: "🎬",
  accroche:
    "Le ton, c'est l'émotion que le texte cherche à provoquer chez le lecteur : rire, peur, pitié, admiration... Apprends à repérer les indices qui le trahissent.",
  sections: [
    {
      titre: "Le ton comique : faire rire",
      points: [
        "Vise à provoquer le rire ou le sourire chez le lecteur.",
        "Marques : jeux de mots, exagération (hyperbole), quiproquos, répétitions, chutes inattendues, vocabulaire familier.",
        "Trois formes à distinguer : l'humour (rire bienveillant, sans méchanceté), l'ironie (dire le contraire de ce qu'on pense, pour se moquer) et la parodie (imiter un texte ou un genre sérieux pour en rire).",
        "Exemple d'ironie : « Quelle brillante idée ! » dit après une catastrophe — le mot « brillante » signifie en réalité « désastreuse ».",
        "Piège : l'ironie ressemble au comique mais vise souvent une critique ; elle mêle rire et jugement négatif.",
      ],
    },
    {
      titre: "Le ton tragique et le ton pathétique : la souffrance",
      points: [
        "Tragique : un destin funeste et inévitable s'abat sur un personnage qui ne peut y échapper, malgré sa lutte. Vocabulaire de la fatalité (« il fallait que », « le destin », « les dieux »), grandeur du personnage.",
        "Pathétique : cherche à émouvoir et à faire pitié en insistant sur la souffrance, les larmes, la douleur physique ou morale. Vocabulaire affectif fort, exclamations, apostrophes, répétitions plaintives.",
        "Différence clé : le tragique montre une fatalité implacable et une lutte perdue d'avance (grandeur) ; le pathétique cherche avant tout à apitoyer, sans forcément de fatalité (une victime que l'on plaint).",
        "Exemple pathétique : « Mon enfant, mon pauvre enfant, comme tu trembles de froid ! » (pitié, tendresse douloureuse).",
        "Exemple tragique : « Il savait que rien ne pourrait arrêter ce qui allait arriver. » (fatalité, impuissance).",
      ],
    },
    {
      titre: "Le ton lyrique et le ton épique : l'expression et l'exploit",
      points: [
        "Lyrique : exprime des sentiments personnels intenses (amour, nostalgie, joie, tristesse). Présence du « je », exclamations, images poétiques, rythme travaillé.",
        "Épique : raconte des exploits, des combats, des héros hors du commun, souvent avec amplification et exagération (armées immenses, forces surhumaines).",
        "Marques épiques : hyperboles, énumérations, rythme ample, vocabulaire du combat et de l'héroïsme.",
        "Exemple lyrique : « Ô mon cœur, comme tu souffres de son absence ! »",
        "Exemple épique : « Mille guerriers chargèrent en hurlant, et la terre trembla sous leurs pas. »",
      ],
    },
    {
      titre: "Le ton fantastique et le ton satirique : doute et critique",
      points: [
        "Fantastique : installe une hésitation entre explication rationnelle et surnaturelle ; le lecteur doute, comme le personnage. Vocabulaire de l'incertitude (« peut-être », « je crus voir », « comme si »), sensations étranges.",
        "Satirique : critique et se moque d'une personne, d'une institution ou d'un défaut de société, souvent par l'exagération ou l'ironie. Vise à dénoncer en faisant sourire ou réfléchir.",
        "Le satirique se distingue du comique pur : il rit pour critiquer, pas seulement pour amuser.",
        "Exemple fantastique : « La porte s'ouvrit toute seule ; ou peut-être le vent, pensa-t-il sans trop y croire. »",
        "Exemple satirique : « Notre bon ministre, si soucieux du peuple, venait d'acheter son quatrième château. »",
      ],
    },
    {
      titre: "Le ton didactique : le tableau des confusions à éviter",
      points: [
        "Didactique : cherche à instruire, à expliquer, à convaincre par la démonstration. Vocabulaire explicatif, connecteurs logiques (« donc », « ainsi », « c'est pourquoi »), exemples et définitions.",
        "Confusion n°1 — tragique vs pathétique : le tragique insiste sur la fatalité et la grandeur du combat perdu ; le pathétique insiste sur la souffrance et cherche la pitié immédiate.",
        "Confusion n°2 — comique vs ironique : le comique fait rire sans arrière-pensée ; l'ironique dit le contraire de ce qu'il pense pour critiquer ou se moquer.",
        "Confusion n°3 — épique vs comique : l'exagération peut servir les deux ! Regarde l'intention : admiration héroïque (épique) ou ridicule recherché (comique).",
        "Méthode : repère d'abord le vocabulaire dominant, puis la ponctuation (exclamations = émotion forte), puis l'effet recherché sur le lecteur (rire, pitié, admiration, peur, réflexion).",
      ],
    },
  ],
  series: [
    {
      titre: "Série 1 — Les tons de base",
      questions: [
        {
          type: "qcm",
          question:
            "« Il rit aux éclats en voyant son frère glisser sur la peau de banane et atterrir dans les fleurs. » Quel est le ton dominant ?",
          choix: ["Comique", "Tragique", "Lyrique", "Didactique"],
          bonneReponse: 0,
          explication:
            "La chute burlesque (glisser, atterrir dans les fleurs) provoque le rire : c'est le ton comique.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Ô mes plus belles années, comme vous me manquez ce soir ! » Quel ton domine ici ?",
          choix: ["Lyrique", "Épique", "Satirique", "Fantastique"],
          bonneReponse: 0,
          explication:
            "Le « je » (implicite dans « me »), l'apostrophe et l'expression d'un sentiment personnel intense (la nostalgie) signalent le ton lyrique.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Dans « Ainsi, on peut en conclure que l'eau bout à 100°C au niveau de la mer », quel ton reconnaît-on ?",
          choix: ["Didactique", "Pathétique", "Tragique", "Comique"],
          bonneReponse: 0,
          explication:
            "Le connecteur logique « ainsi » et la démonstration explicative sont typiques du ton didactique.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Mille cavaliers surgirent de la montagne, et leur cri fit trembler le ciel tout entier. » Ce ton s'appelle :",
          choix: ["Épique", "Comique", "Didactique", "Ironique"],
          bonneReponse: 0,
          explication:
            "L'amplification (mille cavaliers, le ciel qui tremble) au service d'un exploit guerrier est la marque du ton épique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quel indice permet le plus souvent de repérer un ton dans un texte ?",
          choix: [
            "Le vocabulaire employé et l'effet recherché sur le lecteur",
            "La longueur des phrases uniquement",
            "Le nombre de personnages présents",
            "Le titre du texte",
          ],
          bonneReponse: 0,
          explication:
            "C'est la combinaison du vocabulaire, de la ponctuation et de l'effet visé (rire, pitié, peur...) qui révèle le ton.",
          difficulte: "facile",
        },
      ],
    },
    {
      titre: "Série 2 — Comique, ironie et parodie",
      questions: [
        {
          type: "qcm",
          question:
            "« Bravo, quelle performance ! » dit le professeur à l'élève qui vient de casser une éprouvette pour la troisième fois. Quel ton reconnaît-on ?",
          choix: ["Ironique", "Lyrique", "Épique", "Didactique"],
          bonneReponse: 0,
          explication:
            "« Bravo » et « performance » signifient en réalité le contraire : c'est de l'ironie, une moquerie déguisée en compliment.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Quel est l'indice le plus fiable pour reconnaître l'ironie dans un texte ?",
          choix: [
            "Un décalage entre ce qui est dit et ce que l'auteur pense vraiment",
            "La présence d'un point d'exclamation",
            "Un vocabulaire très soutenu",
            "Une phrase très longue",
          ],
          bonneReponse: 0,
          explication:
            "L'ironie repose sur un contraste : on dit le contraire de ce qu'on pense, pour se moquer ou critiquer.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un texte qui imite le style pompeux d'un discours officiel pour raconter... la recherche d'un chat perdu relève :",
          choix: ["De la parodie", "Du tragique", "Du pathétique", "Du fantastique"],
          bonneReponse: 0,
          explication:
            "Reprendre les codes d'un genre sérieux (le discours officiel) pour un sujet dérisoire est une parodie, une forme de comique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quelle différence sépare l'humour de l'ironie ?",
          choix: [
            "L'humour fait rire sans méchanceté, l'ironie se moque en disant le contraire de sa pensée",
            "L'humour est toujours écrit en vers, l'ironie jamais",
            "L'humour concerne les animaux, l'ironie les humains",
            "Il n'y a aucune différence",
          ],
          bonneReponse: 0,
          explication:
            "L'humour est un rire bienveillant ; l'ironie vise souvent à critiquer en feignant de dire autre chose que sa pensée réelle.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le roi, si généreux, laissa mourir de faim son peuple pendant que ses tables croulaient sous les mets. » Ce ton relève surtout :",
          choix: ["Du satirique", "Du lyrique", "De l'épique", "Du fantastique"],
          bonneReponse: 0,
          explication:
            "Le contraste ironique (« si généreux » / peuple affamé) sert ici à critiquer le roi : c'est un ton satirique.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 3 — Tragique et pathétique",
      questions: [
        {
          type: "qcm",
          question:
            "« Elle savait, en montant dans la barque, que la tempête annoncée ne lui laisserait aucune chance. » Quel ton domine ?",
          choix: ["Tragique", "Comique", "Didactique", "Satirique"],
          bonneReponse: 0,
          explication:
            "La fatalité inévitable (« aucune chance ») et la lucidité du personnage face à son destin sont typiques du ton tragique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Pauvre petit, si maigre, si pâle, qui pleure encore son père qu'il n'a jamais connu... » Ce ton cherche avant tout à :",
          choix: [
            "Faire pitié (ton pathétique)",
            "Faire rire (ton comique)",
            "Instruire (ton didactique)",
            "Créer un doute (ton fantastique)",
          ],
          bonneReponse: 0,
          explication:
            "L'insistance sur la souffrance de l'enfant (adjectifs pitoyables, répétitions) vise à apitoyer : c'est le ton pathétique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quelle est la différence essentielle entre tragique et pathétique ?",
          choix: [
            "Le tragique montre une fatalité implacable face à laquelle le personnage lutte en vain ; le pathétique cherche surtout à apitoyer sur une souffrance",
            "Le tragique fait toujours rire, le pathétique jamais",
            "Le pathétique concerne uniquement les rois et les dieux",
            "Il n'existe aucune différence, ce sont des synonymes",
          ],
          bonneReponse: 0,
          explication:
            "Le tragique insiste sur le destin inéluctable et la grandeur de la lutte ; le pathétique insiste sur la douleur pour émouvoir et faire pitié.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Il se débattit de toutes ses forces, mais les dieux avaient déjà scellé son sort. » L'expression « les dieux avaient déjà scellé son sort » indique :",
          choix: [
            "Une fatalité, marque du ton tragique",
            "Une plainte, marque du ton pathétique",
            "Une moquerie, marque de l'ironie",
            "Une explication, marque du didactique",
          ],
          bonneReponse: 0,
          explication:
            "L'idée d'un destin fixé d'avance par une puissance supérieure est l'indice classique du ton tragique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Regardez ses mains tremblantes, écoutez ses sanglots, sentez sa détresse... » L'accumulation de sensations de souffrance sert ici :",
          choix: [
            "Le ton pathétique, pour émouvoir le lecteur",
            "Le ton didactique, pour expliquer un phénomène",
            "Le ton épique, pour glorifier un héros",
            "Le ton satirique, pour critiquer une institution",
          ],
          bonneReponse: 0,
          explication:
            "L'accumulation de détails sensoriels liés à la souffrance vise directement l'émotion et la pitié du lecteur : ton pathétique.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 4 — Lyrique et épique",
      questions: [
        {
          type: "qcm",
          question:
            "« Je pleure encore le temps où nous marchions ensemble sous les tilleuls en fleurs. » Ce ton est :",
          choix: ["Lyrique", "Épique", "Satirique", "Didactique"],
          bonneReponse: 0,
          explication:
            "Le « je », le souvenir nostalgique et l'émotion personnelle sont les marques du ton lyrique.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le géant souleva le rocher comme une plume et le lança par-delà les montagnes. » L'exagération ici sert :",
          choix: [
            "Le ton épique, pour magnifier un exploit surhumain",
            "Le ton comique, pour faire rire d'un personnage ridicule",
            "Le ton pathétique, pour émouvoir sur une souffrance",
            "Le ton didactique, pour expliquer un phénomène",
          ],
          bonneReponse: 0,
          explication:
            "L'exagération valorise ici la force du héros sans intention de ridicule : c'est le ton épique, pas comique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quel procédé est le plus caractéristique du ton lyrique ?",
          choix: [
            "L'expression d'un sentiment personnel à la première personne",
            "L'accumulation de connecteurs logiques",
            "Le récit d'une bataille collective",
            "Le dialogue comique entre deux personnages",
          ],
          bonneReponse: 0,
          explication:
            "Le lyrisme s'ancre dans l'expression subjective des émotions, souvent au « je ».",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Des milliers de soldats s'élancèrent en une seule vague, et leurs boucliers résonnèrent comme le tonnerre. » Quel effet ce ton épique recherche-t-il ?",
          choix: [
            "Impressionner et susciter l'admiration pour un exploit collectif",
            "Faire rire d'une situation absurde",
            "Instruire sur un fait scientifique",
            "Créer un doute entre réel et surnaturel",
          ],
          bonneReponse: 0,
          explication:
            "L'amplification du nombre et du bruit vise à impressionner le lecteur et à magnifier l'exploit : c'est l'effet recherché par l'épique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un poème qui exprime la joie intense d'un narrateur amoureux, avec de nombreuses exclamations et le pronom « je », relève :",
          choix: ["Du lyrique", "De l'épique", "Du satirique", "Du didactique"],
          bonneReponse: 0,
          explication:
            "L'expression d'un sentiment personnel fort (la joie amoureuse) à la première personne est la définition même du lyrisme.",
          difficulte: "facile",
        },
      ],
    },
    {
      titre: "Série 5 — Fantastique et satirique",
      questions: [
        {
          type: "qcm",
          question:
            "« La statue avait-elle vraiment bougé, ou n'était-ce que le clair de lune jouant des tours à mes yeux fatigués ? » Ce ton est :",
          choix: ["Fantastique", "Épique", "Comique", "Didactique"],
          bonneReponse: 0,
          explication:
            "L'hésitation entre explication rationnelle (le clair de lune) et surnaturelle (la statue qui bouge) est la marque du fantastique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Notre cher directeur, si dévoué à ses employés, venait encore une fois d'augmenter... son propre salaire. » Ce ton critique par :",
          choix: [
            "La satire, qui dénonce en s'appuyant sur l'ironie",
            "Le lyrisme, qui exprime un sentiment personnel",
            "Le fantastique, qui installe un doute",
            "Le tragique, qui montre une fatalité",
          ],
          bonneReponse: 0,
          explication:
            "Le décalage ironique entre « si dévoué » et l'augmentation de son propre salaire vise à dénoncer un défaut : c'est la satire.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quel est l'effet recherché principal du ton fantastique sur le lecteur ?",
          choix: [
            "L'installer dans le doute et l'inquiétude face à l'inexplicable",
            "Le faire rire d'une situation absurde",
            "Lui expliquer clairement un phénomène",
            "Lui faire admirer un exploit héroïque",
          ],
          bonneReponse: 0,
          explication:
            "Le fantastique joue sur l'hésitation entre rationnel et surnaturel pour installer une inquiétude durable chez le lecteur.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "En quoi le ton satirique se distingue-t-il du ton comique pur ?",
          choix: [
            "Le satirique rit pour dénoncer un défaut ou une injustice, le comique pur cherche seulement à amuser",
            "Le satirique concerne uniquement les rois",
            "Le comique pur est toujours écrit en vers",
            "Il n'existe aucune différence entre les deux",
          ],
          bonneReponse: 0,
          explication:
            "La satire utilise le rire comme arme de critique sociale ou politique, alors que le comique pur ne vise que le divertissement.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Il crut entendre des pas dans le grenier vide, mais se dit que ce n'était sans doute que le vent... sans en être vraiment convaincu. » Cet extrait relève du ton fantastique parce que :",
          choix: [
            "Le personnage et le lecteur restent dans l'incertitude entre deux explications possibles",
            "Le texte cherche uniquement à faire rire",
            "Le texte explique scientifiquement un bruit",
            "Le texte critique ouvertement un défaut social",
          ],
          bonneReponse: 0,
          explication:
            "Le doute maintenu (« sans en être vraiment convaincu ») entre l'explication rationnelle et l'inquiétante possibilité surnaturelle est la marque du fantastique.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 6 — Comparer et distinguer (niveau intermédiaire)",
      questions: [
        {
          type: "qcm",
          question:
            "« Quel talent extraordinaire ! » s'exclame un spectateur devant un magicien qui vient de rater tous ses tours. Ce commentaire relève :",
          choix: ["De l'ironie, pas de l'admiration sincère", "Du lyrisme", "Du tragique", "Du fantastique"],
          bonneReponse: 0,
          explication:
            "Le compliment contredit la situation réelle (les tours ratés) : c'est une moquerie ironique, pas une admiration sincère.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Il tomba à genoux devant la tombe, incapable de retenir plus longtemps ses larmes qui coulaient sans fin. » Ce passage vise avant tout à :",
          choix: [
            "Faire pitié en insistant sur la douleur (ton pathétique)",
            "Faire rire d'une situation ridicule (ton comique)",
            "Expliquer un fait (ton didactique)",
            "Glorifier un exploit (ton épique)",
          ],
          bonneReponse: 0,
          explication:
            "L'insistance sur les larmes et l'incapacité à se contrôler cherche à provoquer la pitié du lecteur : c'est le ton pathétique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un texte affirme : « Achille savait qu'il mourrait sous les murs de Troie, et pourtant il choisit d'y aller. » Quel ton domine ?",
          choix: [
            "Tragique, car le héros affronte lucidement un destin qu'il ne peut éviter",
            "Pathétique, car le texte insiste sur les larmes",
            "Comique, car la situation est absurde",
            "Didactique, car le texte explique une règle",
          ],
          bonneReponse: 0,
          explication:
            "La lucidité du héros face à un destin fatal et inévitable, assumé avec grandeur, est la définition même du tragique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Mille lances scintillaient sous le soleil tandis que les armées s'avançaient en un seul souffle. » Si ce texte visait en réalité à ridiculiser des soldats maladroits qui trébuchent aussitôt après, l'exagération initiale servirait alors :",
          choix: [
            "Le ton comique, par contraste avec la chute ridicule",
            "Le ton épique, car il n'y a jamais de retournement possible",
            "Le ton lyrique, car il exprime un sentiment personnel",
            "Le ton didactique, car il explique une tactique militaire",
          ],
          bonneReponse: 0,
          explication:
            "Une amplification épique suivie d'une chute ridicule crée un effet comique par contraste : le grandiose annoncé est démenti par le grotesque.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Pour distinguer tragique et pathétique dans un texte, la première question à se poser est :",
          choix: [
            "Le texte insiste-t-il sur une fatalité inévitable (tragique) ou sur la souffrance à plaindre (pathétique) ?",
            "Le texte est-il long ou court ?",
            "Le texte contient-il des dialogues ?",
            "Le texte est-il écrit au passé ou au présent ?",
          ],
          bonneReponse: 0,
          explication:
            "La distinction repose sur l'intention dominante : montrer un destin implacable (tragique) ou émouvoir par la souffrance (pathétique).",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 7 — Repérer l'indice précis",
      questions: [
        {
          type: "qcm",
          question:
            "« Comme il fallait s'y attendre, la catastrophe qu'aucun d'eux n'avait pu empêcher finit par arriver. » Quel mot ou groupe de mots trahit le ton tragique ?",
          choix: [
            "« aucun d'eux n'avait pu empêcher »",
            "« la catastrophe »",
            "« finit par »",
            "« Comme il fallait »",
          ],
          bonneReponse: 0,
          explication:
            "L'impuissance totale des personnages face à l'événement (« aucun d'eux n'avait pu empêcher ») exprime la fatalité propre au tragique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Cet homme si honnête, bien sûr, n'avait jamais menti de sa vie... sauf peut-être les trois fois où il a témoigné au tribunal. » Quel indice révèle l'ironie ?",
          choix: [
            "Le contraste entre « si honnête » et les mensonges révélés ensuite",
            "La longueur de la phrase",
            "L'usage du passé composé",
            "La présence du mot « tribunal »",
          ],
          bonneReponse: 0,
          explication:
            "C'est le contraste entre l'éloge apparent (« si honnête ») et le fait qui le contredit qui signale l'ironie.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Ses petites mains gelées serraient encore la poupée cassée, seule compagne de ses nuits solitaires. » Quel groupe de mots installe le ton pathétique ?",
          choix: [
            "« petites mains gelées » et « seule compagne de ses nuits solitaires »",
            "« la poupée cassée » seul",
            "« encore » seul",
            "« ses nuits » seul",
          ],
          bonneReponse: 0,
          explication:
            "Les détails physiques touchants (mains gelées, solitude) accumulés visent à apitoyer le lecteur : c'est le ton pathétique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« On raconte que le fleuve lui-même s'arrêta de couler pour laisser passer le héros et ses compagnons. » Quel indice signale ici le ton épique plutôt que fantastique ?",
          choix: [
            "L'exagération admirative sans aucun doute exprimé sur la réalité de l'exploit",
            "L'usage du passé simple",
            "La présence d'un fleuve",
            "La longueur de la phrase",
          ],
          bonneReponse: 0,
          explication:
            "Contrairement au fantastique, il n'y a ici aucune hésitation ni inquiétude : l'exagération est présentée comme un exploit glorieux à admirer, donc épique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Donc, si l'on suit ce raisonnement, on comprend pourquoi le phénomène se reproduit chaque année à la même période. » Quel indice signale le ton didactique ?",
          choix: [
            "Les connecteurs logiques « donc » et « pourquoi » qui structurent une explication",
            "Le mot « phénomène »",
            "L'usage du présent",
            "La longueur de la phrase",
          ],
          bonneReponse: 0,
          explication:
            "Les connecteurs logiques qui organisent une démonstration claire sont typiques du ton didactique.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 8 — Associer ton et effet recherché",
      questions: [
        {
          type: "qcm",
          question: "Quel effet le ton lyrique cherche-t-il à produire sur le lecteur ?",
          choix: [
            "Le faire partager une émotion personnelle intense",
            "Le faire rire d'une situation absurde",
            "Lui faire peur d'un phénomène inexpliqué",
            "Le convaincre par une démonstration logique",
          ],
          bonneReponse: 0,
          explication:
            "Le lyrisme cherche la communion émotionnelle : faire ressentir au lecteur ce que vit intimement le narrateur.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question: "Quel effet recherche en priorité le ton satirique ?",
          choix: [
            "Faire réfléchir et dénoncer un défaut en faisant sourire ou grincer des dents",
            "Faire pleurer sur une souffrance innocente",
            "Impressionner par un exploit surhumain",
            "Installer un doute entre rêve et réalité",
          ],
          bonneReponse: 0,
          explication:
            "La satire combine rire et critique : elle veut faire réagir contre un défaut ou une injustice, pas seulement amuser.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un auteur veut faire naître chez son lecteur un sentiment de crainte mêlé au doute sur la réalité des événements. Quel ton choisira-t-il le plus probablement ?",
          choix: ["Le ton fantastique", "Le ton didactique", "Le ton lyrique", "Le ton comique"],
          bonneReponse: 0,
          explication:
            "L'association de la peur et du doute rationnel/surnaturel est précisément l'effet recherché par le ton fantastique.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un auteur veut que son lecteur admire la grandeur d'un personnage qui accepte lucidement un destin funeste qu'il ne peut éviter. Quel ton privilégiera-t-il ?",
          choix: ["Le ton tragique", "Le ton pathétique", "Le ton comique", "Le ton satirique"],
          bonneReponse: 0,
          explication:
            "L'admiration pour la grandeur face à une fatalité inévitable est l'effet propre au tragique, distinct de la simple pitié du pathétique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Quel effet est visé quand un texte accumule des détails sur la souffrance d'un enfant abandonné, sans notion de destin fatal inévitable ?",
          choix: [
            "Émouvoir et faire pitié (effet pathétique)",
            "Impressionner par un exploit (effet épique)",
            "Faire rire (effet comique)",
            "Convaincre par la logique (effet didactique)",
          ],
          bonneReponse: 0,
          explication:
            "Sans dimension de fatalité implacable, l'insistance sur la souffrance vise uniquement l'émotion et la pitié : c'est l'effet pathétique.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 9 — Extraits mêlés (niveau avancé)",
      questions: [
        {
          type: "qcm",
          question:
            "« Le vieil homme, si respecté de tous pour sa sagesse légendaire, venait pour la centième fois de se tromper de nom en s'adressant à son propre fils. » Quel ton domine, et pourquoi ?",
          choix: [
            "Ironique, car l'éloge de « sagesse légendaire » est démenti par l'erreur répétée",
            "Tragique, car un destin funeste frappe le vieil homme",
            "Épique, car l'exagération magnifie un exploit",
            "Fantastique, car un doute surnaturel plane",
          ],
          bonneReponse: 0,
          explication:
            "Le décalage entre l'éloge (« si respecté... sagesse légendaire ») et le fait comique qui le contredit (se tromper de nom) crée un effet ironique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Il serra les poings, sachant que rien, ni les prières ni la force, ne pourrait détourner ce qui avait été écrit avant même sa naissance. » Quel ton domine ?",
          choix: [
            "Tragique, à cause de la fatalité déjà « écrite » et de l'impuissance assumée",
            "Pathétique, à cause des larmes évoquées",
            "Comique, à cause du geste de serrer les poings",
            "Didactique, à cause de l'explication logique",
          ],
          bonneReponse: 0,
          explication:
            "L'idée d'un destin « écrit avant même sa naissance », contre lequel toute action est vaine, est la marque précise du tragique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Les larmes aux yeux, elle regarda une dernière fois la maison de son enfance avant que les flammes ne l'engloutissent tout entière sous les cris des voisins impuissants. » Ce passage mêle surtout :",
          choix: [
            "Le pathétique (larmes, perte) dominant, sans véritable fatalité annoncée",
            "Le comique et le fantastique à parts égales",
            "Uniquement le ton didactique",
            "Uniquement le ton satirique",
          ],
          bonneReponse: 0,
          explication:
            "L'accent est mis sur l'émotion de la perte et les larmes (pathétique), sans mention d'un destin fixé d'avance qui rendrait le passage tragique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Notre vénérable assemblée, si attachée à l'intérêt général, votait pour la douzième année consécutive une hausse de ses propres indemnités. » Quel procédé principal crée ce ton satirique ?",
          choix: [
            "L'ironie (éloge apparent contredit par les faits) au service d'une critique sociale",
            "L'exagération épique sans aucune ironie",
            "Le vocabulaire du doute fantastique",
            "L'expression d'un sentiment personnel lyrique",
          ],
          bonneReponse: 0,
          explication:
            "L'éloge ironique (« si attachée à l'intérêt général ») contredit par le fait rapporté sert une critique sociale : c'est le mécanisme même de la satire.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Était-ce vraiment une voix qui l'appelait depuis le puits abandonné, ou seulement l'écho fatigué de sa propre peur ? Il n'osa jamais y retourner pour le vérifier. » Pourquoi ce passage reste-t-il fantastique et non simplement pathétique ?",
          choix: [
            "Parce que le doute entre explication rationnelle et surnaturelle n'est jamais levé",
            "Parce que le personnage pleure abondamment",
            "Parce que le texte explique un phénomène scientifique",
            "Parce que le texte se moque du personnage",
          ],
          bonneReponse: 0,
          explication:
            "Le trait distinctif du fantastique est l'absence de résolution du doute (« il n'osa jamais y retourner pour le vérifier ») entre rationnel et surnaturel.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 10 — Synthèse finale (niveau brevet)",
      questions: [
        {
          type: "qcm",
          question:
            "« Applaudissons notre champion qui, après avoir perdu ses huit premiers matchs, vient enfin de gagner... contre un adversaire qui a dû abandonner pour blessure. » Quel ton domine et quel est l'effet recherché ?",
          choix: [
            "Ironique : l'éloge (« applaudissons notre champion ») est démenti par les circonstances dérisoires de la victoire, pour faire sourire aux dépens du personnage",
            "Épique : l'exploit sportif est glorifié sans réserve",
            "Pathétique : le texte cherche uniquement à faire pitié",
            "Didactique : le texte explique les règles du sport",
          ],
          bonneReponse: 0,
          explication:
            "L'éloge initial contredit par une victoire obtenue dans des conditions ridicules crée un effet ironique qui tourne le personnage en dérision.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Depuis l'aube du monde, il était écrit que ce fils tuerait son père sans le savoir ; il eut beau fuir jusqu'au bout de la terre, le sort le ramena sur ce même chemin. » Identifie le ton et justifie par l'indice précis.",
          choix: [
            "Tragique : « il était écrit » et la fuite vaine (« il eut beau fuir ») montrent une fatalité inévitable",
            "Pathétique : le texte insiste sur les larmes du fils",
            "Comique : la situation est présentée comme absurde",
            "Satirique : le texte critique une institution",
          ],
          bonneReponse: 0,
          explication:
            "« Il était écrit » (destin fixé d'avance) et l'échec de toute tentative d'y échapper (« il eut beau fuir ») sont les indices classiques du tragique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Recroquevillée sous son châle troué, la vieille femme tendait une main tremblante vers les passants pressés qui ne la voyaient même plus. » Quel ton domine, et quel est son effet visé ?",
          choix: [
            "Pathétique : les détails physiques pitoyables et l'indifférence des passants visent à émouvoir et indigner",
            "Épique : le texte glorifie un exploit héroïque",
            "Fantastique : le texte installe un doute surnaturel",
            "Didactique : le texte explique un phénomène social par la logique",
          ],
          bonneReponse: 0,
          explication:
            "L'accumulation de détails misérables (châle troué, main tremblante) et l'indifférence ambiante cherchent à provoquer la pitié : c'est le ton pathétique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Le sage professeur, jamais à court d'une explication, affirma doctement que la Lune tombait chaque soir dans la mer avant de remonter par un tunnel secret. » Quel ton domine, et pourquoi n'est-ce pas du ton didactique malgré la forme explicative ?",
          choix: [
            "Comique (par la fausse science ridicule) : la forme didactique est détournée pour amuser, pas pour instruire réellement",
            "Didactique : le texte enseigne un fait scientifique exact",
            "Tragique : un destin funeste est annoncé",
            "Lyrique : un sentiment personnel est exprimé",
          ],
          bonneReponse: 0,
          explication:
            "La forme du discours savant (« affirma doctement ») est ici parodiée pour énoncer une absurdité : l'intention réelle est de faire rire, pas d'instruire — c'est un comique qui imite le didactique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Pour réussir une question de brevet sur le ton d'un texte, quelle démarche est la plus sûre ?",
          choix: [
            "Relever les indices précis (vocabulaire, ponctuation, procédés) puis identifier l'effet recherché sur le lecteur avant de nommer le ton",
            "Deviner le ton au premier mot du texte sans le lire en entier",
            "Se fier uniquement au titre du texte",
            "Choisir systématiquement le ton comique, le plus fréquent",
          ],
          bonneReponse: 0,
          explication:
            "La méthode rigoureuse consiste à partir des indices concrets du texte pour en déduire l'effet visé, puis à nommer le ton — jamais l'inverse.",
          difficulte: "moyen",
        },
      ],
    },
  ],
},
// Fiche de compréhension : le rapport texte-image, une notion fréquente à
// l'épreuve de français du brevet (le corpus comporte souvent un document
// iconographique — tableau, photo, affiche, dessin de presse — à mettre en
// relation avec un ou plusieurs textes).

{
  slug: "rapport-texte-image",
  titre: "Le rapport texte-image",
  emoji: "🖼️",
  accroche:
    "Au brevet, le corpus contient presque toujours une image à côté des textes. Savoir la décrire avec le bon vocabulaire, puis expliquer ce qu'elle apporte au texte (ou comment elle le contredit), c'est souvent ce qui fait la différence entre une réponse vague et une réponse qui rapporte tous les points.",
  sections: [
    {
      titre: "Le vocabulaire pour décrire une image",
      points: [
        "Le cadrage : plan d'ensemble (un vaste décor, les personnages y sont petits), plan moyen (personnage en pied), plan rapproché (buste), gros plan (visage), très gros plan (un détail, un œil, un objet). Plus le cadre est serré, plus l'émotion est concentrée.",
        "L'angle de prise de vue : la plongée (l'appareil regarde d'en haut) écrase et fragilise le sujet ; la contre-plongée (l'appareil regarde d'en bas) le grandit et lui donne de la puissance ; la hauteur d'yeux crée une relation d'égal à égal avec le spectateur.",
        "La composition : ce qui est placé au premier plan attire l'œil en premier ; l'arrière-plan, souvent flou, donne le contexte. Les lignes de force (horizontales, verticales, diagonales) guident le regard et peuvent exprimer le calme, la grandeur ou le mouvement.",
        "La lumière : une lumière douce et diffuse adoucit une scène ; un fort contraste ombre/lumière (clair-obscur) la dramatise ; un contre-jour transforme les personnages en silhouettes mystérieuses.",
        "Les couleurs : les couleurs chaudes (rouge, orange, jaune) évoquent la chaleur, l'énergie ou le danger selon le contexte ; les couleurs froides (bleu, vert, gris) évoquent le calme, la tristesse ou la distance ; des couleurs trop saturées et criardes signalent souvent l'artifice, la publicité ou l'ironie.",
      ],
    },
    {
      titre: "Les quatre grands rapports entre un texte et une image",
      points: [
        "L'illustration : l'image montre fidèlement ce que raconte le texte, sans rien ajouter ni contredire. Elle confirme ce que la lecture a déjà donné à comprendre.",
        "Le complément : l'image ajoute une information, un détail ou une émotion que le texte seul ne donnait pas (un visage précis, un décor, une ambiance).",
        "L'opposition ou le contrepoint : l'image contredit, nuance ou ironise le texte. Ce décalage volontaire est fréquent dans la publicité détournée ou le dessin de presse.",
        "La symbolisation : l'image ne montre pas littéralement la scène du texte, elle la représente par un symbole, une métaphore visuelle (la Terre malade, une cage, une balance).",
        "Un même document peut combiner plusieurs rapports à la fois : par exemple illustrer une scène précise tout en symbolisant, par sa composition, une idée plus large.",
      ],
    },
    {
      titre: "Comparer un texte et une image : trois questions à se poser",
      points: [
        "Le sujet : le texte et l'image parlent-ils exactement de la même chose (même personnage, même lieu, même événement) ou l'image élargit-elle le propos ?",
        "Le ton : le texte est-il sérieux, ironique, poétique ? L'image adopte-t-elle le même ton, ou crée-t-elle un décalage (une image douce pour un texte violent, par exemple) ?",
        "L'intention : pourquoi l'auteur ou l'illustrateur a-t-il choisi CETTE image précise ? Pour émouvoir, informer, dénoncer, faire sourire ou faire réfléchir ?",
        "Toujours distinguer ce que l'on voit objectivement — la dénotation, par exemple « une femme marche sous la pluie » — de ce que cela évoque — la connotation, ici la solitude ou la mélancolie.",
      ],
    },
    {
      titre: "La méthode de réponse au brevet",
      points: [
        "Étape 1 : identifie précisément la nature du document iconographique (photographie, tableau, affiche publicitaire, dessin de presse, couverture de livre) — cela oriente déjà l'intention à chercher.",
        "Étape 2 : décris l'image avec le vocabulaire précis (cadrage, plan, couleurs, composition) AVANT d'interpréter. Une bonne description est le socle d'une bonne analyse.",
        "Étape 3 : relève dans le texte les mots ou phrases qui font écho — ou qui contrastent — avec ce que montre l'image, et cite-les entre guillemets « ».",
        "Étape 4 : formule la réponse en trois temps : le rapport identifié (illustration, complément, opposition, symbole), la preuve précise dans le texte ET dans l'image, puis l'effet produit sur le lecteur.",
        "Étape 5 : reste toujours au texte et à l'image du sujet — n'invente jamais un détail qui n'y figure pas, même s'il paraît logique.",
      ],
    },
    {
      titre: "Les pièges à éviter",
      points: [
        "Ne pas confondre décrire et interpréter : « le personnage est en gros plan » est une description, « le personnage semble accablé » est une interprétation — le correcteur attend les deux, dans cet ordre.",
        "Ne pas paraphraser l'image sans l'analyser : dire « on voit un homme triste » ne suffit pas ; il faut expliquer PAR QUOI (couleurs sombres, épaules basses, regard fuyant) cette tristesse est montrée.",
        "Ne pas oublier la légende ou le titre de l'image quand il y en a un : c'est souvent une clé de lecture donnée par l'auteur lui-même.",
        "Toujours répondre précisément à la question posée : « quel est le rapport entre le texte et l'image » n'attend pas un résumé du texte, mais une comparaison argumentée.",
      ],
    },
  ],
  series: [
    {
      titre: "L'enfant face à l'océan",
      questions: [
        {
          type: "qcm",
          question:
            "Texte : « Léo n'avait jamais vu la mer. Il resta là, immobile, les yeux écarquillés devant cette immensité bleue qui n'en finissait pas. » Image : une photographie montre un enfant de dos, minuscule au centre du cadre, face à un océan qui occupe presque tout l'espace, ciel et mer se confondant à l'horizon. Quel terme désigne ce cadrage, où l'enfant apparaît minuscule au milieu d'un très vaste décor ?",
          choix: ["Un gros plan", "Un plan d'ensemble", "Un très gros plan", "Un plan rapproché"],
          bonneReponse: 1,
          explication:
            "Un plan d'ensemble montre un vaste espace dans lequel les personnages sont petits : c'est exactement l'effet recherché ici pour souligner l'immensité de la mer face à l'enfant.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Même document : le texte décrit Léo « immobile, les yeux écarquillés devant cette immensité bleue » ; l'image le montre de dos, minuscule face à l'océan. Quel rapport existe entre cette image et ce texte ?",
          choix: [
            "Un rapport d'opposition : l'image contredit le texte",
            "Un rapport d'illustration : l'image montre fidèlement la scène décrite",
            "Un rapport de symbolisation sans lien avec la scène",
            "Aucun rapport : l'image et le texte n'ont rien en commun",
          ],
          bonneReponse: 1,
          explication:
            "L'image reprend exactement la situation racontée par le texte (l'enfant seul face à l'immensité de la mer) : c'est un rapport d'illustration.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Toujours sur cette photographie de l'enfant face à la mer : pourquoi le photographe a-t-il choisi de le placer de dos plutôt que de face ?",
          choix: [
            "Pour cacher que ce n'est pas un vrai enfant",
            "Pour permettre au lecteur de s'identifier à lui et de regarder la mer comme s'il y était",
            "Parce qu'il est impossible de photographier un visage face à la mer",
            "Pour montrer que l'enfant n'est pas intéressé par le paysage",
          ],
          bonneReponse: 1,
          explication:
            "En cadrant l'enfant de dos, le photographe invite le lecteur à partager son point de vue et à ressentir la même immensité, plutôt qu'à observer sa réaction de l'extérieur.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Le ciel et la mer de cette photographie sont teintés de tons orangés, comme au coucher du soleil. Que suggèrent ces couleurs chaudes qui envahissent l'image ?",
          choix: [
            "Le danger et la violence de la scène",
            "Une ambiance froide et hostile",
            "Une atmosphère chaleureuse et émerveillée, en accord avec l'émotion du texte",
            "L'ennui de l'enfant",
          ],
          bonneReponse: 2,
          explication:
            "Les couleurs chaudes (orange, doré) évoquent la chaleur et l'émerveillement, ce qui renforce visuellement l'émotion de découverte exprimée par le texte.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Pour justifier, dans une réponse de brevet, que cette image « illustre » fidèlement le passage sur Léo, quelle phrase du texte faudrait-il citer entre guillemets ?",
          choix: [
            "« Léo n'avait jamais vu la mer »",
            "« cette immensité bleue qui n'en finissait pas »",
            "Le nom complet du roman",
            "Aucune citation n'est nécessaire",
          ],
          bonneReponse: 1,
          explication:
            "C'est cette expression qui correspond précisément à ce que montre l'image (l'immensité de l'horizon marin) : citer le texte avec précision est indispensable pour justifier une réponse au brevet.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "La ville sous les fumées",
      questions: [
        {
          type: "qcm",
          question:
            "Texte : « Les cheminées crachaient sans relâche une fumée grise qui se mêlait aux nuages, et la ville tout entière semblait respirer avec peine sous ce ciel de suie. » Image : une photographie en noir et blanc, en plan d'ensemble, montre de nombreuses cheminées d'usines fumantes sous un ciel bas et chargé, sans aucune trace de verdure. Quel choix technique du photographe renforce l'impression d'étouffement du texte ?",
          choix: [
            "L'usage de la couleur",
            "Le choix du noir et blanc, qui supprime toute chaleur visuelle",
            "Un cadrage en gros plan sur une seule cheminée",
            "Une photographie prise de nuit",
          ],
          bonneReponse: 1,
          explication:
            "Le noir et blanc élimine toute couleur chaude ou vive et accentue la grisaille, en écho direct au « ciel de suie » décrit par le texte.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Sur cette même photographie de la ville industrielle, quel type de plan permet de montrer à la fois de nombreuses cheminées ET l'étendue de la ville ?",
          choix: ["Le gros plan", "Le plan d'ensemble", "Le très gros plan", "Le plan rapproché épaule"],
          bonneReponse: 1,
          explication:
            "Seul un plan d'ensemble, qui embrasse un large espace, peut montrer simultanément plusieurs cheminées et l'étendue de la ville.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Le texte parle d'une ville qui « respire avec peine sous ce ciel de suie » ; l'image montre une ville en noir et blanc, cheminées fumantes et ciel bas. Quel rapport unit ce texte et cette image ?",
          choix: [
            "Un rapport d'opposition, l'image étant joyeuse et colorée",
            "Un rapport d'illustration : l'image reprend fidèlement l'atmosphère décrite",
            "Un rapport de symbolisation sans lien avec le texte",
            "Il n'existe aucun rapport visible",
          ],
          bonneReponse: 1,
          explication:
            "L'image montre exactement ce que décrit le texte (fumée, ciel bas, absence de respiration possible) : c'est une illustration fidèle.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Aucune trace de verdure ne figure dans le cadre de cette photographie de ville industrielle. Quel est l'effet recherché par ce choix de composition ?",
          choix: [
            "Rassurer le lecteur sur l'état de l'environnement",
            "Accentuer l'aspect oppressant et pollué de la ville, en cohérence avec le texte",
            "Montrer que la nature a repris ses droits",
            "Aucun effet particulier, c'est un hasard du cadrage",
          ],
          bonneReponse: 1,
          explication:
            "L'absence totale de nature dans le cadre est un choix de composition qui accentue le sentiment d'oppression et de pollution exprimé par le texte.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Pour répondre à une question de brevet sur ce document, quelle formulation associe correctement description et interprétation ?",
          choix: [
            "« On voit une ville » — c'est suffisant pour répondre",
            "« Le cadrage en plan d'ensemble et l'absence de couleur accentuent l'impression d'étouffement déjà présente dans le texte »",
            "« La photo est belle et bien cadrée »",
            "« Le texte ne dit rien sur la ville »",
          ],
          bonneReponse: 1,
          explication:
            "Une bonne réponse relie toujours un élément précis de l'image (cadrage, couleur) à un effet interprété, en lien avec le texte : c'est exactement ce que fait cette formulation.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "La rivière publicitaire",
      questions: [
        {
          type: "qcm",
          question:
            "Texte (article) : « Nos rivières, autrefois poissonneuses, charrient aujourd'hui des eaux troubles où plus aucun poisson ne survit. » Image : une publicité pour un produit ménager montre une rivière étincelante, à l'eau turquoise transparente, où nage joyeusement un poisson coloré ; les couleurs sont vives et saturées, presque artificielles. Quel rapport le publicitaire cherche-t-il à créer entre son image et la réalité évoquée par ce type de texte ?",
          choix: [
            "Un rapport d'illustration exacte de la pollution",
            "Un rapport d'opposition : l'image idyllique contredit la réalité polluée décrite par les articles",
            "Un rapport de complément neutre",
            "Aucun rapport, l'image est purement décorative",
          ],
          bonneReponse: 1,
          explication:
            "L'image publicitaire montre une rivière parfaite et transparente, à l'opposé des « eaux troubles » du texte : c'est un rapport d'opposition, ici utilisé pour vendre un produit en dissimulant la réalité.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Sur cette même publicité pour un produit ménager, que traduit la saturation excessive des couleurs de la rivière et du poisson ?",
          choix: [
            "Un souci de réalisme documentaire",
            "Un caractère artificiel et idéalisé, typique de l'image publicitaire",
            "Une volonté de choquer par la laideur",
            "Une référence à la peinture impressionniste",
          ],
          bonneReponse: 1,
          explication:
            "Des couleurs trop parfaites et saturées créent un effet artificiel qui signale au spectateur qu'il s'agit d'un idéal fabriqué, non d'une photographie documentaire.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Dans cette publicité, quel terme désigne ce que l'on voit littéralement dans l'image (une rivière turquoise, un poisson coloré) ?",
          choix: ["La connotation", "La dénotation", "La symbolisation", "L'intention"],
          bonneReponse: 1,
          explication:
            "La dénotation est le sens littéral, ce que l'image montre objectivement, par opposition à la connotation, qui est ce que cela évoque ou suggère.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Si un sujet de brevet associait cet article sur la pollution des rivières et cette publicité idyllique, quel effet faudrait-il souligner dans la réponse ?",
          choix: [
            "L'image renforce la gravité du texte en montrant la même pollution",
            "Le décalage entre les deux crée un effet ironique et invite à s'interroger sur l'écart entre discours publicitaire et réalité environnementale",
            "Le texte et l'image n'ont aucun point commun à commenter",
            "L'image prouve que le texte exagère la pollution",
          ],
          bonneReponse: 1,
          explication:
            "Lorsqu'un sujet de brevet associe un texte alarmant et une image publicitaire idyllique, l'intérêt est justement de faire percevoir l'ironie du contraste et d'inviter à une lecture critique.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Quel indice de composition, dans cette publicité, accentue le caractère « trop parfait », et donc suspect, de la scène représentée ?",
          choix: [
            "Le cadrage en plongée qui écrase le poisson",
            "L'absence totale de défaut visible : eau parfaitement transparente, poisson parfaitement centré, lumière parfaitement uniforme",
            "Un cadrage flou et tremblant",
            "Un noir et blanc austère",
          ],
          bonneReponse: 1,
          explication:
            "C'est justement l'absence de tout défaut (flou, ombre, imperfection) qui rend la scène irréaliste aux yeux d'un lecteur averti, renforçant l'idée qu'il s'agit d'une image fabriquée pour vendre, pas pour informer.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "La Terre à l'hôpital",
      questions: [
        {
          type: "qcm",
          question:
            "Texte : « Les experts s'accordent : le réchauffement climatique s'accélère, mais les décisions politiques tardent toujours à suivre. » Image : un dessin en noir et blanc montre la planète Terre allongée sur un lit d'hôpital, un thermomètre dans la bouche, entourée d'hommes en costume qui discutent entre eux sans la regarder. Quel type de document est cette image ?",
          choix: [
            "Une photographie de presse",
            "Un dessin de presse (caricature)",
            "Un tableau de maître",
            "Une affiche publicitaire",
          ],
          bonneReponse: 1,
          explication:
            "Le style simplifié, humoristique et engagé, publié pour commenter l'actualité, est caractéristique du dessin de presse, aussi appelé caricature.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Sur ce même dessin de presse, quel rapport unit l'image à ce texte sur le réchauffement climatique ?",
          choix: [
            "Un rapport d'illustration littérale, la Terre étant réellement hospitalisée",
            "Un rapport de symbolisation : la Terre malade représente la planète en danger, image de l'urgence climatique",
            "Un rapport d'opposition totale",
            "Aucun rapport, le dessin parle d'un autre sujet",
          ],
          bonneReponse: 1,
          explication:
            "La Terre n'est évidemment pas littéralement hospitalisée : le dessinateur utilise un symbole (la maladie, l'hôpital) pour représenter visuellement l'urgence climatique évoquée par le texte.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Dans ce dessin, les hommes en costume discutent entre eux sans regarder la patiente. Que signifie ce détail de composition ?",
          choix: [
            "Qu'ils sont de très bons médecins concentrés sur leur diagnostic",
            "Que le dessinateur critique l'inaction ou la lenteur des responsables politiques, en écho au texte",
            "Que la Terre n'est pas vraiment malade",
            "Que l'image n'a pas d'intention particulière",
          ],
          bonneReponse: 1,
          explication:
            "Ce détail de composition (les personnages qui ignorent la patiente) traduit visuellement le reproche fait aux responsables politiques dans le texte : « les décisions politiques tardent toujours à suivre ».",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quel est l'intérêt, pour le dessinateur, de représenter des « médecins » plutôt que des politiciens réalistes en train de débattre ?",
          choix: [
            "Cela n'a aucun intérêt, c'est un choix arbitraire",
            "La métaphore médicale rend immédiatement compréhensible l'idée de gravité et d'urgence, sans avoir besoin de longues explications",
            "Cela évite de parler du sujet principal",
            "Cela rend le dessin plus difficile à comprendre",
          ],
          bonneReponse: 1,
          explication:
            "Une image symbolique frappe l'esprit plus vite qu'un long discours : la métaphore du patient et des médecins traduit instantanément l'idée d'urgence et d'inaction.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Pour analyser correctement ce rapport texte-image au brevet, quelle démarche est la plus rigoureuse ?",
          choix: [
            "Décrire uniquement le dessin sans le relier au texte",
            "Repérer le symbole (la Terre-patiente), l'expliciter (la planète en danger climatique), puis le relier à une phrase précise du texte pour montrer que le dessin en est une transposition visuelle critique",
            "Résumer le texte sans jamais mentionner le dessin",
            "Dire simplement que le dessin est drôle",
          ],
          bonneReponse: 1,
          explication:
            "La méthode attendue est toujours : identifier le symbole, l'expliquer, puis le relier précisément au texte par une citation — c'est ce qui prouve une véritable analyse du rapport texte-image.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Le silence de la maison vide",
      questions: [
        {
          type: "qcm",
          question:
            "Texte : « Depuis le départ de sa sœur, Clara errait dans les pièces vides de la grande maison, comme si le silence lui-même avait pris toute la place. » Image : une photographie en plan rapproché montre un rideau blanc à moitié tiré devant une fenêtre faiblement éclairée, avec un fauteuil vide et légèrement flou au premier plan, le reste de la pièce plongé dans la pénombre. Quel élément de cette photographie est net, et lequel est flou ?",
          choix: [
            "Le rideau est flou, le fauteuil est net",
            "Le fauteuil est flou au premier plan, le rideau et la fenêtre sont nets à l'arrière-plan",
            "Toute la photo est nette",
            "Toute la photo est floue",
          ],
          bonneReponse: 1,
          explication:
            "Le fauteuil vide, placé au premier plan et légèrement flou, attire d'abord le regard sans le retenir, tandis que la fenêtre éclairée à l'arrière-plan reste le point net de l'image.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Cette photographie de la maison vide ne montre aucun personnage, alors que le texte parle de Clara. En quoi cette image ne se contente-t-elle pas d'« illustrer » simplement le texte ?",
          choix: [
            "Elle montre exactement Clara en train de marcher dans la maison",
            "Aucun personnage n'apparaît : l'image suggère la solitude et le vide par l'absence même de figure humaine, ce qui est un complément à l'idée du texte plutôt qu'une illustration littérale",
            "Elle contredit complètement le texte",
            "Elle ne représente rien en lien avec le texte",
          ],
          bonneReponse: 1,
          explication:
            "L'absence de personnage montre que l'image ne reproduit pas la scène mot à mot mais ajoute une dimension suggestive : le vide et le silence sont rendus visibles par l'absence même de présence humaine.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quel mot du texte trouve un écho direct dans la pénombre qui envahit la pièce sur cette photographie ?",
          choix: ["« sœur »", "« silence »", "« maison »", "« Clara »"],
          bonneReponse: 1,
          explication:
            "La pénombre visuelle et l'absence de vie dans la pièce traduisent en image l'idée du « silence » qui, selon le texte, « avait pris toute la place ».",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Quel effet produit le choix d'un fauteuil vide, plutôt qu'un fauteuil occupé, au premier plan de cette photographie ?",
          choix: [
            "Il rend la photo plus gaie",
            "Il matérialise visuellement l'absence et la solitude évoquées par le texte, sans avoir besoin de montrer le personnage lui-même",
            "Il n'a aucun rapport avec le texte",
            "Il montre que quelqu'un vient de s'asseoir",
          ],
          bonneReponse: 1,
          explication:
            "Un objet vide qui devrait être occupé (un fauteuil sans personne) est un procédé classique pour suggérer visuellement l'absence et la solitude, en écho parfait au thème du texte.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Quelle formulation, dans une réponse de brevet, relierait le mieux cette image et ce texte ?",
          choix: [
            "« L'image montre une fenêtre, ce qui prouve que la maison a des fenêtres »",
            "« L'absence de personnage et la pénombre de la photographie traduisent visuellement le vide et le silence intérieurs de Clara évoqués dans le texte »",
            "« L'image et le texte n'ont rien à voir »",
            "« La photo est jolie mais sans lien avec le roman »",
          ],
          bonneReponse: 1,
          explication:
            "Une bonne réponse relie un choix précis de l'image (absence de personnage, pénombre) à une idée précise du texte (le vide, le silence intérieur) : c'est exactement ce que propose cette formulation.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "L'ours sur la banquise",
      questions: [
        {
          type: "qcm",
          question:
            "Texte (article scientifique) : « La banquise arctique perd chaque année plusieurs milliers de kilomètres carrés, isolant des populations entières d'ours polaires sur des glaces de plus en plus réduites. » Image : une photographie en plongée légère et en cadrage large montre un ours polaire seul, debout sur un petit bloc de glace flottant, entouré d'une immense étendue d'eau bleu sombre. Quel effet produit le fait de photographier un immense espace d'eau autour d'un tout petit bloc de glace ?",
          choix: [
            "Cela rend l'ours plus menaçant",
            "Cela souligne, par contraste d'échelle, l'isolement et la vulnérabilité de l'ours, en écho au texte",
            "Cela n'a aucun effet particulier",
            "Cela montre que l'ours est en sécurité",
          ],
          bonneReponse: 1,
          explication:
            "Le contraste entre le minuscule bloc de glace et l'immensité de l'eau qui l'entoure crée un effet d'isolement et de fragilité qui correspond exactement à l'idée du texte : des populations « isolées » sur des glaces réduites.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "Quel rapport relie cette photographie de l'ours polaire à l'article scientifique sur la fonte de la banquise ?",
          choix: [
            "Un rapport d'opposition, la photo étant rassurante",
            "Un rapport d'illustration renforcée : l'image donne un visage concret et émouvant à un phénomène que le texte décrit de façon abstraite (des kilomètres carrés)",
            "Un rapport de symbolisation abstraite sans lien avec la réalité",
            "Aucun rapport visible",
          ],
          bonneReponse: 1,
          explication:
            "L'image illustre le phénomène décrit par le texte, mais elle y ajoute une dimension émotionnelle (le pathos) que les chiffres seuls ne donnent pas : c'est une illustration qui renforce l'impact du texte.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Pourquoi le choix d'un cadrage en légère plongée peut-il renforcer le sentiment de vulnérabilité de l'ours photographié ?",
          choix: [
            "La plongée grandit toujours le sujet photographié",
            "La plongée a tendance à rapetisser et à fragiliser visuellement le sujet observé d'en haut",
            "La plongée n'a aucun effet sur la perception du sujet",
            "La plongée rend l'image plus lumineuse",
          ],
          bonneReponse: 1,
          explication:
            "Un angle de plongée (l'appareil photographie le sujet du dessus) tend à écraser et à rapetisser visuellement le sujet, renforçant ici l'impression de fragilité de l'ours.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Que faudrait-il citer précisément dans le texte pour justifier que cette photographie de l'ours correspond bien à son propos ?",
          choix: [
            "Le nom du journal uniquement",
            "« isolant des populations entières d'ours polaires sur des glaces de plus en plus réduites »",
            "Aucune citation, l'image se suffit à elle-même",
            "La date de publication de l'article",
          ],
          bonneReponse: 1,
          explication:
            "Cette phrase du texte décrit précisément la situation représentée par l'image (un ours isolé sur un bloc de glace réduit) : c'est la citation la plus pertinente à mobiliser.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question: "En quoi cette photographie de l'ours polaire dépasse-t-elle une simple fonction décorative ?",
          choix: [
            "Elle sert uniquement à occuper l'espace de la page",
            "Elle transforme une donnée chiffrée et abstraite en émotion concrète, ce qui peut davantage toucher et convaincre le lecteur que les statistiques seules",
            "Elle n'a aucune fonction argumentative",
            "Elle contredit délibérément les statistiques du texte",
          ],
          bonneReponse: 1,
          explication:
            "Une image bien choisie donne un visage sensible à une information abstraite (des kilomètres carrés perdus) ; c'est une stratégie argumentative fréquente dans la presse scientifique ou militante.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "La femme dans l'ombre du tableau",
      questions: [
        {
          type: "qcm",
          question:
            "Texte (tribune) : « Pendant des siècles, l'histoire officielle a relégué les femmes au second plan, effaçant leur rôle réel dans les grands événements. » Image : la reproduction d'un tableau classique montre, au premier plan et en pleine lumière, un homme en habit d'apparat qui regarde le spectateur ; à l'arrière-plan, dans la pénombre et légèrement floue, une femme de profil est occupée à une tâche, à peine visible. Où se trouve la femme dans la composition de ce tableau ?",
          choix: [
            "Au premier plan, en pleine lumière",
            "Au centre exact du tableau",
            "À l'arrière-plan, dans la pénombre et le flou",
            "Elle n'apparaît pas du tout dans le tableau",
          ],
          bonneReponse: 2,
          explication:
            "La femme est reléguée à l'arrière-plan, dans l'ombre, ce qui la rend visuellement secondaire par rapport à l'homme placé au premier plan et en pleine lumière.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "En quoi la composition de ce tableau peut-elle « illustrer visuellement » l'idée défendue par la tribune sur l'effacement des femmes ?",
          choix: [
            "Elle n'a aucun lien avec l'idée du texte",
            "La place secondaire, sombre et floue de la femme dans l'image traduit visuellement l'idée que l'histoire officielle l'a reléguée au second plan",
            "Elle montre au contraire que les femmes étaient toujours mises en valeur",
            "Le tableau prouve que le texte se trompe",
          ],
          bonneReponse: 1,
          explication:
            "La composition du tableau (homme net et éclairé au premier plan, femme dans l'ombre à l'arrière-plan) est une transposition visuelle exacte de l'idée du texte sur l'effacement historique des femmes.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Quel terme technique désigne le fait que l'homme soit net et la femme floue à l'arrière-plan, dans ce tableau ?",
          choix: [
            "Un rapport de couleurs",
            "Un rapport de plans et de netteté, qui hiérarchise l'importance des personnages dans la composition",
            "Un rapport de plongée",
            "Un rapport de cadrage serré",
          ],
          bonneReponse: 1,
          explication:
            "La hiérarchie visuelle créée par les plans (premier plan net / arrière-plan flou) organise l'attention du spectateur et hiérarchise, ici, l'importance apparente des deux personnages.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Ce tableau ancien, choisi pour accompagner un texte contemporain sur l'effacement des femmes, relève de quel usage de l'image ?",
          choix: [
            "Une illustration neutre, sans intention critique",
            "Un usage critique : le document ancien devient, par le choix de l'auteur du sujet, une preuve visuelle du problème dénoncé dans le texte",
            "Une simple décoration esthétique sans rapport avec le propos",
            "Une contradiction volontaire du texte",
          ],
          bonneReponse: 1,
          explication:
            "En sélectionnant précisément ce tableau pour l'associer au texte, l'auteur du sujet en fait une preuve visuelle : l'œuvre ancienne, analysée avec un regard actuel, illustre concrètement le mécanisme d'effacement dénoncé.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Pour répondre avec précision sur ce document, quel élément du tableau faut-il citer en plus de la simple position des personnages ?",
          choix: [
            "Uniquement la date du tableau",
            "Le contraste de lumière et de netteté (l'homme éclairé et net, la femme dans la pénombre et floue), car il matérialise concrètement le rapport de premier plan et d'arrière-plan",
            "Le nom du musée qui conserve l'œuvre",
            "Aucun autre élément n'est nécessaire",
          ],
          bonneReponse: 1,
          explication:
            "Une analyse précise combine toujours plusieurs éléments de composition (position, lumière, netteté) plutôt qu'un seul, pour prouver que le rapport observé n'est pas un hasard mais un choix cohérent.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Le ciel que l'on scrute",
      questions: [
        {
          type: "qcm",
          question:
            "Texte (autobiographie) : « Chaque nuit, la sirène nous arrachait du sommeil. Je me souviens surtout de la peur, de ce ciel que je scrutais sans jamais oser détourner le regard. » Image : une photographie d'archive en noir et blanc, cadrée serré en contre-plongée sur le visage d'un enfant qui regarde vers le haut hors champ, front plissé, avec une ombre portée démesurée qui s'étire derrière lui sur un mur. Quel effet produit ce cadrage serré (gros plan) sur le visage de l'enfant ?",
          choix: [
            "Il éloigne le lecteur de l'émotion du personnage",
            "Il concentre toute l'attention sur l'expression du visage, donc sur l'émotion précise ressentie par l'enfant",
            "Il empêche de voir l'expression du visage",
            "Il n'a aucun effet sur la perception de la scène",
          ],
          bonneReponse: 1,
          explication:
            "Un cadrage serré sur un visage concentre l'attention du spectateur sur l'expression et l'émotion, ici la peur suggérée par le front plissé et le regard fixe vers le ciel.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Sur cette même photographie, quel est l'effet de la contre-plongée combinée à l'ombre démesurée qui s'étire derrière l'enfant ?",
          choix: [
            "Elle rend l'enfant rassurant et protégé",
            "Elle amplifie visuellement la menace qui pèse sur l'enfant, en accord avec la peur exprimée dans le texte face au ciel scruté",
            "Elle n'a aucun rapport avec le texte",
            "Elle montre que l'enfant est plus fort que la menace",
          ],
          bonneReponse: 1,
          explication:
            "La contre-plongée et l'ombre démesurée créent une impression d'écrasement et de menace, en écho direct à la peur exprimée dans le texte face au ciel des bombardements.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question: "Quel rapport unit cette photographie d'archive au texte autobiographique sur les bombardements ?",
          choix: [
            "Un rapport d'opposition ironique",
            "Un rapport de complément : l'image donne un visage concret et une intensité émotionnelle à une expérience que le texte raconte du point de vue intérieur",
            "Aucun rapport, la photo illustre un autre événement",
            "Un rapport purement décoratif",
          ],
          bonneReponse: 1,
          explication:
            "Le texte raconte une expérience intérieure (la peur ressentie) ; l'image complète ce récit en donnant un visage et une intensité visuelle concrète à cette peur, sans se contenter de la répéter mot à mot.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Le regard de l'enfant se porte « hors champ », vers le haut, sans que l'on voie ce qu'il regarde. Que signifie ce choix du photographe ?",
          choix: [
            "Cela n'a aucune signification particulière",
            "Cela dirige le regard du spectateur vers ce qui menace l'enfant sans jamais le montrer, ce qui laisse le danger à l'imagination — comme le ciel scruté dans le texte",
            "Cela montre que l'enfant regarde un avion amical",
            "Cela prouve que la photo est mal cadrée",
          ],
          bonneReponse: 1,
          explication:
            "En laissant hors champ ce que regarde l'enfant, le photographe oblige le spectateur à imaginer la menace, exactement comme le texte évoque « ce ciel que je scrutais » sans jamais décrire directement les bombardements.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Quelle serait la formulation la plus rigoureuse pour répondre à la question « quel effet produit l'association de ce texte et de cette image » ?",
          choix: [
            "« L'image est triste et le texte aussi »",
            "« Le cadrage serré, la contre-plongée et l'ombre démesurée traduisent visuellement la peur intérieure exprimée par le narrateur, intensifiant ainsi l'émotion ressentie par le lecteur »",
            "« Le texte et l'image ne servent à rien ensemble »",
            "« On ne peut pas savoir ce que ressent l'enfant »",
          ],
          bonneReponse: 1,
          explication:
            "Une réponse rigoureuse mobilise plusieurs procédés visuels précis (cadrage, angle, lumière) et les relie explicitement à l'émotion du texte pour expliquer l'effet global produit sur le lecteur.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "La pièce engloutie sous les objets",
      questions: [
        {
          type: "qcm",
          question:
            "Texte (essai) : « Nous accumulons des objets que nous n'utilisons jamais, prisonniers d'un désir de possession qui ne connaît pas de fin. » Image : une photographie d'art contemporain montre une pièce entièrement remplie, du sol au plafond, d'objets identiques empilés (boîtes, emballages), aux couleurs saturées et criardes ; au centre, minuscule et presque invisible, se tient une silhouette humaine. Quel rapport d'échelle est mis en scène entre cette silhouette et les objets qui l'entourent ?",
          choix: [
            "La silhouette est plus grande que les objets",
            "La silhouette est minuscule face à une masse d'objets qui occupe tout l'espace, du sol au plafond",
            "Il n'y a pas de silhouette humaine dans l'image",
            "Les objets et la silhouette ont exactement la même taille",
          ],
          bonneReponse: 1,
          explication:
            "Le photographe écrase délibérément la silhouette humaine sous une masse d'objets qui envahit tout le cadre, créant un rapport d'échelle qui traduit visuellement l'idée d'être « prisonnier » de la possession.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question: "Quel rapport texte-image ce choix d'échelle, entre la silhouette et les objets, met-il en œuvre ?",
          choix: [
            "Un simple rapport d'illustration décorative",
            "Un rapport de symbolisation : l'accumulation matérielle devient une métaphore visuelle de l'enfermement décrit dans le texte",
            "Un rapport d'opposition avec le texte",
            "Aucun rapport identifiable",
          ],
          bonneReponse: 1,
          explication:
            "L'image ne se contente pas de montrer des objets : leur accumulation écrasante devient le symbole visuel de l'idée abstraite du texte, l'enfermement dans le désir de possession.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Pourquoi les couleurs de cette photographie d'objets empilés sont-elles saturées et criardes plutôt que naturelles ?",
          choix: [
            "Par erreur technique du photographe",
            "Pour accentuer l'aspect artificiel, excessif et presque suffocant de l'accumulation d'objets, en cohérence avec la critique du texte",
            "Pour rendre l'image plus reposante",
            "Sans raison particulière liée au texte",
          ],
          bonneReponse: 1,
          explication:
            "Des couleurs saturées et excessives renforcent l'impression de trop-plein et d'artifice, en écho à la critique de la surconsommation exprimée dans le texte.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Quelle démarche d'analyse permettrait de montrer que ce rapport texte-image n'est pas un simple hasard de mise en page ?",
          choix: [
            "Se contenter de dire que l'image est impressionnante",
            "Relever précisément l'échelle de la silhouette, la saturation des couleurs et l'accumulation des objets, puis relier chacun de ces choix à une idée précise du texte",
            "Ignorer l'image et ne commenter que le texte",
            "Décrire l'image sans jamais la relier au texte",
          ],
          bonneReponse: 1,
          explication:
            "Une analyse rigoureuse identifie plusieurs procédés visuels précis et les met chacun en relation explicite avec le propos du texte, ce qui prouve que le rapport est construit et non accidentel.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question: "Quel effet cette mise en scène de la pièce saturée d'objets produit-elle sur le lecteur-spectateur ?",
          choix: [
            "Un effet apaisant et rassurant",
            "Un effet de malaise et de prise de conscience face à l'excès de possession, qui prolonge visuellement la critique du texte",
            "Aucun effet, l'image est neutre",
            "Un effet purement esthétique sans lien avec une réflexion",
          ],
          bonneReponse: 1,
          explication:
            "En donnant à voir concrètement l'écrasement d'un être humain par les objets, l'image cherche à provoquer un malaise qui prolonge et renforce la portée critique du texte sur la surconsommation.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Es-tu sûr d'être connecté ?",
      questions: [
        {
          type: "qcm",
          question:
            "Texte (article) : « De plus en plus d'adolescents passent la majorité de leur temps libre les yeux rivés sur un écran, au point de perdre le contact avec ceux qui les entourent. » Image : une affiche de sensibilisation montre un adolescent de dos, seul dans une pièce plongée dans le noir, son visage n'étant éclairé que par la lumière bleutée de l'écran de son téléphone ; en dessous figure la légende « Es-tu sûr d'être connecté ? ». Quelle source de lumière éclaire le visage de l'adolescent sur cette affiche ?",
          choix: [
            "La lumière du jour venant d'une fenêtre",
            "Uniquement la lumière bleutée de l'écran du téléphone",
            "Une lampe de bureau chaude",
            "Aucune lumière, le visage est invisible",
          ],
          bonneReponse: 1,
          explication:
            "L'affiche ne montre qu'une seule source de lumière, artificielle et froide, celle de l'écran, ce qui isole visuellement le personnage dans l'obscurité qui l'entoure.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Comment la légende « Es-tu sûr d'être connecté ? » entre-t-elle en tension avec l'image de cette affiche ?",
          choix: [
            "Elle ne fait que répéter ce que montre l'image sans rien ajouter",
            "Elle joue sur le double sens du mot « connecté » : connecté à un réseau, mais visuellement coupé de tout lien humain réel, ce qui crée un effet ironique",
            "Elle contredit complètement le texte de l'article",
            "Elle n'a aucun rapport avec l'adolescent isolé",
          ],
          bonneReponse: 1,
          explication:
            "Le jeu de mots sur « connecté » (technique/humain) crée volontairement un décalage ironique avec l'image d'isolement, incitant le spectateur à réfléchir au paradoxe de la connexion numérique qui isole socialement.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Quel rapport principal relie cette affiche à l'article sur les adolescents et les écrans ?",
          choix: [
            "Un rapport d'illustration littérale et rien d'autre",
            "Un rapport combinant illustration (la scène du texte est bien représentée) et symbolisation (l'isolement dans l'obscurité représente la perte de lien social évoquée par le texte)",
            "Un rapport d'opposition pure",
            "Aucun rapport, la légende suffit à elle seule",
          ],
          bonneReponse: 1,
          explication:
            "L'affiche illustre la situation concrète décrite par le texte (un adolescent absorbé par son écran) tout en utilisant la composition (obscurité, isolement) pour symboliser plus largement la perte de lien social qu'évoque l'article.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question: "Pourquoi le cadrage de cette affiche montre-t-il l'adolescent de dos plutôt que de face ?",
          choix: [
            "Pour cacher qu'il s'agit d'un adulte",
            "Pour que chaque spectateur puisse s'identifier à la scène, l'absence de visage identifiable rendant le message universel",
            "Parce qu'il est techniquement impossible de photographier un visage éclairé par un écran",
            "Ce choix n'a aucune signification",
          ],
          bonneReponse: 1,
          explication:
            "En ne montrant pas le visage précis de l'adolescent, l'affiche universalise son message : n'importe quel spectateur peut se reconnaître dans cette silhouette anonyme.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "Quelle serait la réponse la plus complète à la question « analysez le rapport entre le texte et l'image » pour ce document ?",
          choix: [
            "« L'image montre un adolescent avec un téléphone, comme le dit le texte »",
            "« Le cadrage de dos, l'unique source de lumière bleutée de l'écran et l'obscurité environnante illustrent l'isolement décrit par le texte, tandis que la légende joue ironiquement sur le mot « connecté » pour souligner le paradoxe d'un lien numérique qui coupe des liens réels »",
            "« Le texte et l'image se contredisent totalement »",
            "« Il n'y a pas assez d'éléments pour répondre »",
          ],
          bonneReponse: 1,
          explication:
            "Une réponse complète mobilise plusieurs procédés précis (cadrage, lumière, légende) et les relie explicitement à l'idée du texte, sans oublier d'expliquer l'effet global (ici, l'ironie) : c'est le niveau attendu pour une question de synthèse au brevet.",
          difficulte: "avance",
        },
      ],
    },
  ],
},
{
  slug: "justifier-citation",
  titre: "Justifier par une citation",
  emoji: "💬",
  accroche: "Prouver, pas raconter : la bonne citation transforme une idée en preuve.",
  sections: [
    {
      titre: "Pourquoi citer le texte ?",
      points: [
        "Citer, c'est prouver une idée avec les mots exacts de l'auteur, pas avec les tiens.",
        "Une réponse sans citation reste une opinion : la citation la transforme en preuve vérifiable.",
        "Le correcteur doit pouvoir retrouver la phrase dans le texte : elle doit donc être exacte.",
        "Une citation bien choisie répond précisément à la question posée, sans rien ajouter ni enlever.",
      ],
    },
    {
      titre: "Comment citer correctement",
      points: [
        "Toujours encadrer les mots repris du texte par des guillemets français « ».",
        "Recopier la citation mot pour mot, avec la même ponctuation et la même orthographe.",
        "Indiquer si possible la ligne ou le passage : comme on le voit à la ligne 8.",
        "Choisir une citation courte : quelques mots ou une phrase suffisent, jamais un paragraphe entier.",
      ],
    },
    {
      titre: "Intégrer la citation dans sa phrase",
      points: [
        "La citation ne doit jamais être posée seule : elle s'insère dans une phrase construite.",
        "Utiliser une formule d'introduction : comme le montre..., on le voit quand..., lorsqu'il dit...",
        "Le deux-points annonce une citation qui suit directement une explication.",
        "Des crochets [ ] permettent d'adapter légèrement une citation pour l'accorder à la phrase, sans changer le sens.",
      ],
    },
    {
      titre: "Choisir LA bonne citation",
      points: [
        "Repérer d'abord le mot-clé de l'affirmation à prouver (un sentiment, un lieu, une action...).",
        "Écarter les citations vagues qui pourraient illustrer plusieurs idées différentes.",
        "Préférer la phrase qui contient exactement ce mot-clé ou une expression très proche.",
        "Pour prouver une évolution, il faut souvent deux citations (avant / après), pas une seule.",
      ],
    },
    {
      titre: "Les pièges à éviter",
      points: [
        "La citation trop longue : mieux vaut un extrait précis qu'un paragraphe entier recopié.",
        "La citation hors sujet : elle est exacte mais ne prouve pas l'idée demandée.",
        "La paraphrase déguisée : reformuler le texte avec ses propres mots n'est pas citer.",
        "L'oubli des guillemets ou la citation tronquée qui déforme le sens du texte.",
      ],
    },
  ],
  series: [
    {
      titre: "Série 1 — Repérer une citation qui prouve une idée simple",
      questions: [
        {
          type: "qcm",
          question:
            "« Le ciel était gris et lourd. Marie serra son manteau contre elle en frissonnant. Elle pressa le pas vers la maison. » Quelle citation justifie le mieux l'affirmation « Marie a froid » ?",
          choix: [
            "« Le ciel était gris et lourd. »",
            "« Marie serra son manteau contre elle en frissonnant. »",
            "« Elle pressa le pas vers la maison. »",
            "« Marie a froid. »",
          ],
          bonneReponse: 1,
          explication:
            "Le verbe « frissonnant » et le geste de serrer son manteau montrent directement que Marie a froid. Les autres phrases décrivent le temps ou une action sans prouver la sensation de froid ; la dernière n'est pas une citation, c'est une reformulation de l'affirmation.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le vieux chien dormait devant la cheminée. Quand la porte grinça, il ouvrit un œil et remua doucement la queue. » Quelle citation prouve le mieux que le chien est content de l'arrivée de quelqu'un ?",
          choix: [
            "« Le vieux chien dormait devant la cheminée. »",
            "« Quand la porte grinça »",
            "« il ouvrit un œil et remua doucement la queue »",
            "« il remua »",
          ],
          bonneReponse: 2,
          explication:
            "Remuer la queue est un signe de contentement chez un chien : cette citation complète prouve directement l'affirmation. « il remua » seul est incomplet, les deux premières ne montrent aucun sentiment.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Léa entra dans la salle d'examen. Ses mains tremblaient et elle relut trois fois la première question sans comprendre un mot. » Quelle est la meilleure citation pour justifier « Léa est stressée » ?",
          choix: [
            "« Léa entra dans la salle d'examen. »",
            "« Ses mains tremblaient »",
            "« elle relut trois fois la première question »",
            "« sans comprendre un mot »",
          ],
          bonneReponse: 1,
          explication:
            "Les mains qui tremblent sont un signe physique classique du stress, directement lié à l'affirmation. Les autres citations décrivent des actions qui peuvent avoir d'autres causes (difficulté du sujet, distraction...).",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le vieil homme grimpa l'escalier une marche après l'autre. Arrivé en haut, il s'appuya contre le mur, essoufflé, et resta un moment sans bouger. » Quelle citation justifie le mieux « Le vieil homme est fatigué » ?",
          choix: [
            "« Le vieil homme grimpa l'escalier une marche après l'autre. »",
            "« Arrivé en haut, il s'appuya contre le mur »",
            "« essoufflé, et resta un moment sans bouger »",
            "« une marche après l'autre »",
          ],
          bonneReponse: 2,
          explication:
            "« essoufflé » nomme directement l'état physique lié à la fatigue, et « resta un moment sans bouger » confirme qu'il doit récupérer. Les autres citations décrivent une action sans nommer explicitement la fatigue.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le marché débordait de couleurs. Les vendeurs criaient le prix de leurs fruits, et les clients discutaient en riant. Une odeur d'épices flottait dans l'air. » Quelle citation justifie le mieux « Le marché est bruyant » ?",
          choix: [
            "« Le marché débordait de couleurs. »",
            "« Les vendeurs criaient le prix de leurs fruits »",
            "« une odeur d'épices flottait dans l'air »",
            "« les clients discutaient en riant »",
          ],
          bonneReponse: 1,
          explication:
            "« criaient » indique explicitement un bruit fort, ce qui correspond exactement à « bruyant ». Discuter en riant est aussi sonore, mais moins fort que crier ; les couleurs et l'odeur ne concernent pas le bruit.",
          difficulte: "facile",
        },
      ],
    },
    {
      titre: "Série 2 — Citer sans trahir le texte",
      questions: [
        {
          type: "qcm",
          question:
            "« Le chat sauta sur la table et renversa le vase d'un coup de patte. » Un élève écrit : On voit que le chat renversa le vase d'un coup de patte, comme le montre le texte. Quelle erreur commet-il ?",
          choix: [
            "Il n'a pas mis de guillemets français « » autour des mots repris du texte.",
            "Il a choisi une citation trop longue.",
            "Il a cité un passage hors sujet.",
            "Il n'a pas indiqué la ligne du texte.",
          ],
          bonneReponse: 0,
          explication:
            "L'élève reprend mot pour mot une phrase du texte sans l'encadrer par des guillemets « » : le correcteur ne peut pas distinguer ses propres mots de ceux de l'auteur. Reprendre le texte sans guillemets s'apparente à une citation non signalée.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Sophie referma le livre avec un sourire et le serra contre son cœur. » Un élève cite : « Sophie referma le livre avec un sourire. » Que peut-on dire de cette citation ?",
          choix: [
            "Elle est correcte : les guillemets sont là et les mots sont exacts.",
            "Elle est incorrecte : les mots ont été changés.",
            "Elle est incorrecte : elle est trop longue.",
            "Elle est incorrecte : elle ne prouve rien.",
          ],
          bonneReponse: 0,
          explication:
            "La citation reprend exactement les mots du texte, même si elle s'arrête avant la fin de la phrase, et elle est bien encadrée par des guillemets français. C'est une citation correcte, même partielle.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Le vent soufflait si fort que les volets claquaient contre le mur. » Un élève cite : « Le vent soufflait très fort et les volets tapaient contre le mur. » Quelle erreur commet-il ?",
          choix: [
            "Il a oublié les guillemets.",
            "Il a modifié les mots du texte : ce n'est plus une citation exacte.",
            "Sa citation est hors sujet.",
            "Sa citation est trop courte.",
          ],
          bonneReponse: 1,
          explication:
            "« si fort » est devenu « très fort » et « claquaient » est devenu « tapaient » : les mots ne sont plus ceux de l'auteur. Une citation doit être recopiée mot pour mot, sinon ce n'est plus une preuve fiable.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "Un élève écrit : Comme on le voit à la ligne 5, « elle posa son sac et s'assit sans un mot », le personnage semble triste. Que peut-on dire de cette façon de citer ?",
          choix: [
            "Elle est complète et correcte : guillemets, mots exacts, référence à la ligne.",
            "Elle est incorrecte car on ne doit jamais indiquer la ligne.",
            "Elle est incorrecte car la citation est trop longue.",
            "Elle est incorrecte car il manque les guillemets.",
          ],
          bonneReponse: 0,
          explication:
            "L'élève encadre la citation par des guillemets, reprend les mots exacts et précise la ligne du texte : c'est une citation exemplaire, bien intégrée dans sa phrase.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Elle n'était pas du tout fatiguée après cette longue marche. » Pour justifier « Elle est fatiguée après la marche », un élève cite seulement : « Elle n'était pas ». Quelle erreur commet-il ?",
          choix: [
            "Il coupe la citation en plein milieu de la négation, ce qui déforme le sens de la phrase.",
            "Il a oublié les guillemets.",
            "Sa citation est trop longue.",
            "Sa citation est exacte et bien choisie.",
          ],
          bonneReponse: 0,
          explication:
            "En coupant la citation avant la fin de la négation, l'élève transforme une phrase qui dit le contraire de son affirmation (elle n'est pas fatiguée) en un fragment qui semble aller dans son sens. Une citation tronquée qui change le sens du texte n'est jamais valable, même exacte mot pour mot.",
          difficulte: "moyen",
        },
      ],
    },
    {
      titre: "Série 3 — Intégrer la citation dans sa phrase",
      questions: [
        {
          type: "qcm",
          question:
            "« Le ciel s'assombrit brusquement et de gros nuages noirs envahirent l'horizon. » Quelle phrase intègre correctement une citation pour justifier que l'orage approche ?",
          choix: [
            "L'orage approche « le ciel s'assombrit brusquement ».",
            "L'orage approche, comme le montre l'expression « le ciel s'assombrit brusquement ».",
            "L'orage approche parce que le texte dit le ciel s'assombrit brusquement.",
            "« L'orage approche. »",
          ],
          bonneReponse: 1,
          explication:
            "La formule « comme le montre l'expression » relie clairement l'affirmation et la citation, bien encadrée par des guillemets. La première réponse colle la citation sans lien grammatical, et la troisième ne met pas de guillemets.",
          difficulte: "facile",
        },
        {
          type: "qcm",
          question:
            "« Paul hésita un instant devant la porte, puis frappa trois coups légers. » Quelle phrase utilise correctement le deux-points pour introduire une citation prouvant que Paul est intimidé ?",
          choix: [
            "Paul est intimidé, « Paul hésita un instant devant la porte ».",
            "Paul est intimidé : il « hésita un instant devant la porte ».",
            "Paul est intimidé comme dit le texte hésita un instant.",
            "Paul est intimidé, il hésita un instant devant la porte.",
          ],
          bonneReponse: 1,
          explication:
            "Le deux-points annonce l'explication, et les mots repris du texte sont entre guillemets et bien intégrés dans la phrase (« il » remplace « Paul » pour la grammaire). Les autres réponses juxtaposent sans lien clair ou oublient les guillemets.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Non, je ne viendrai pas, répondit-elle sèchement en tournant les talons. » Quelle phrase intègre correctement une citation pour justifier que le personnage est en colère ?",
          choix: [
            "Le personnage est en colère : « Non, je ne viendrai pas », répond-elle sèchement en tournant les talons.",
            "Le personnage est en colère, non je ne viendrai pas répondit-elle.",
            "Le personnage est en colère « répondit-elle sèchement ».",
            "« Le personnage est en colère. »",
          ],
          bonneReponse: 0,
          explication:
            "La citation est isolée par des guillemets et introduite par un deux-points, avec l'adverbe « sèchement » qui prouve la colère. Les autres options oublient les guillemets ou ne citent pas le passage qui prouve réellement la colère.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« La forêt était silencieuse, seuls quelques craquements de branches trahissaient la présence d'un animal. » Un élève écrit : « La forêt était silencieuse » prouve que la forêt est calme, mais des bruits. Quel est le problème de cette phrase ?",
          choix: [
            "La citation est fausse.",
            "La phrase est mal construite : la citation est plaquée sans lien grammatical avec la suite.",
            "Il manque les guillemets.",
            "La citation est trop longue.",
          ],
          bonneReponse: 1,
          explication:
            "La citation est correcte et entre guillemets, mais la suite (« mais des bruits ») n'est reliée par aucun verbe ni aucune articulation logique. Une citation doit s'insérer dans une phrase complète et cohérente, pas être juxtaposée à un fragment de phrase.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Les invités applaudirent longuement, debout, les larmes aux yeux. » Quelle formulation intègre le plus naturellement la citation « les larmes aux yeux » pour justifier que le public est ému ?",
          choix: [
            "Le public est ému, les larmes aux yeux le prouve.",
            "Le public est ému, comme le suggère le fait qu'ils étaient « les larmes aux yeux ».",
            "Le public est ému : le texte précise que les invités applaudirent « les larmes aux yeux ».",
            "« les larmes aux yeux » le public est ému.",
          ],
          bonneReponse: 2,
          explication:
            "Cette phrase introduit la citation par un deux-points, la relie clairement au sujet (« les invités ») et respecte les guillemets. La deuxième réponse force une tournure lourde et peu naturelle autour du même groupe de mots.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 4 — Choisir la citation la plus précise",
      questions: [
        {
          type: "qcm",
          question:
            "« Le jardin était grand. Au fond, un vieux pommier perdait ses feuilles jaunies, et un chat noir dormait, roulé en boule, sur le muret ensoleillé. » Quelle citation prouve le plus précisément « C'est l'automne » ?",
          choix: [
            "« Le jardin était grand. »",
            "« un vieux pommier perdait ses feuilles jaunies »",
            "« un chat noir dormait, roulé en boule »",
            "« sur le muret ensoleillé »",
          ],
          bonneReponse: 1,
          explication:
            "Les feuilles jaunies qui tombent sont un signe précis et univoque de l'automne. Les autres citations décrivent le jardin, le chat ou le soleil, des éléments qui ne renseignent pas sur la saison.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le boxeur monta sur le ring sous les acclamations. Il regarda son adversaire droit dans les yeux, poings serrés, mâchoire crispée. » Quelle citation prouve le plus précisément que le boxeur est déterminé ?",
          choix: [
            "« Le boxeur monta sur le ring sous les acclamations. »",
            "« Il regarda son adversaire droit dans les yeux »",
            "« poings serrés, mâchoire crispée »",
            "« sous les acclamations »",
          ],
          bonneReponse: 2,
          explication:
            "« poings serrés, mâchoire crispée » décrit une tension physique clairement associée à la détermination et à la concentration avant le combat. Regarder l'adversaire dans les yeux peut aussi exprimer un défi ou une peur affrontée ; la dernière citation ne concerne que le public.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« La salle de classe était plongée dans un silence total. Personne n'osait lever les yeux vers le professeur qui relisait la copie de Hugo pour la troisième fois. » Quelle citation illustre le plus précisément que les élèves ont peur de la réaction du professeur ?",
          choix: [
            "« La salle de classe était plongée dans un silence total. »",
            "« Personne n'osait lever les yeux vers le professeur »",
            "« qui relisait la copie de Hugo pour la troisième fois »",
            "« pour la troisième fois »",
          ],
          bonneReponse: 1,
          explication:
            "« n'osait lever les yeux » exprime directement la crainte des élèves face au professeur. Le silence peut avoir plusieurs causes (attention, ennui...) et les deux dernières citations concernent seulement l'action du professeur, pas la peur des élèves.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le navire tanguait dangereusement. Les vagues s'écrasaient sur le pont et deux marins luttaient pour attacher les cordages qui claquaient au vent. » Ces quatre citations sont exactes : laquelle prouve le plus directement que le navire est en danger ?",
          choix: [
            "« Le navire tanguait dangereusement. »",
            "« deux marins luttaient pour attacher les cordages »",
            "« qui claquaient au vent »",
            "« Les vagues s'écrasaient sur le pont »",
          ],
          bonneReponse: 0,
          explication:
            "L'adverbe « dangereusement » nomme explicitement le danger : c'est la citation la plus directe et la plus précise pour cette affirmation. Les vagues qui s'écrasent et l'effort des marins sont des conséquences de la tempête, mais ne mentionnent pas directement le danger.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Le village semblait abandonné. Les volets étaient fermés, l'herbe poussait entre les pavés, et aucune fumée ne sortait des cheminées. » Quelle citation prouve le plus précisément que l'abandon dure depuis longtemps, et pas seulement que le village est vide aujourd'hui ?",
          choix: [
            "« Le village semblait abandonné. »",
            "« Les volets étaient fermés »",
            "« l'herbe poussait entre les pavés »",
            "« aucune fumée ne sortait des cheminées »",
          ],
          bonneReponse: 2,
          explication:
            "De l'herbe qui a eu le temps de pousser entre les pavés est un signe d'abandon prolongé : il faut du temps pour qu'elle s'installe ainsi. Les volets fermés ou l'absence de fumée peuvent aussi correspondre à une absence très récente.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 5 — Éviter la citation trop longue ou hors sujet",
      questions: [
        {
          type: "qcm",
          question:
            "« Le soleil se levait doucement sur la vallée, teintant les collines de rose et d'or. Les oiseaux commençaient à chanter, et la rosée scintillait sur l'herbe. Loin, un chien aboya deux fois puis se tut. » Pour justifier « C'est le matin », un élève cite tout le paragraphe. Quelle erreur commet-il ?",
          choix: [
            "Sa citation est hors sujet.",
            "Sa citation est beaucoup trop longue : il recopie tout le texte alors qu'une phrase suffisait.",
            "Il n'a pas mis de guillemets.",
            "Sa citation ne prouve rien.",
          ],
          bonneReponse: 1,
          explication:
            "« Le soleil se levait » suffisait à prouver qu'on est le matin. Recopier tout le paragraphe montre que l'élève n'a pas su isoler l'information utile : une citation doit être ciblée, pas exhaustive.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Marc adorait le foot. Le samedi, il jouait avec ses amis au stade municipal, et le dimanche, il regardait les matchs à la télévision avec son père. » Pour justifier « Marc est passionné de football », un élève cite : « il jouait avec ses amis au stade municipal ». Que peut-on lui reprocher ?",
          choix: [
            "Elle est hors sujet : elle ne parle pas de passion pour le football.",
            "Elle prouve bien la passion, mais « Marc adorait le foot » aurait été un choix plus direct.",
            "Elle est trop longue.",
            "Elle n'a pas de guillemets.",
          ],
          bonneReponse: 1,
          explication:
            "La citation choisie n'est pas fausse mais elle est indirecte : elle prouve qu'il joue au foot, pas qu'il en est passionné. « Marc adorait le foot » nomme directement le sentiment demandé et aurait été un choix plus précis.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le professeur annonça que le contrôle aurait lieu vendredi. Thomas, assis au fond de la classe, dessinait des avions sur son cahier sans lever la tête. » Pour justifier « Thomas n'écoute pas le professeur », un élève cite : « Le professeur annonça que le contrôle aurait lieu vendredi. » Pourquoi cette citation est-elle mal choisie ?",
          choix: [
            "Elle est hors sujet : elle parle de l'annonce du professeur, pas de l'attitude de Thomas.",
            "Elle est trop courte.",
            "Elle est incorrecte, les mots ont été changés.",
            "Il manque les guillemets.",
          ],
          bonneReponse: 0,
          explication:
            "Cette phrase concerne l'annonce du professeur, pas le comportement de Thomas. Pour prouver que Thomas n'écoute pas, il fallait citer « dessinait des avions sur son cahier sans lever la tête ».",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« La vieille maison craquait de partout. Au premier étage, une fenêtre battait contre le mur à chaque rafale de vent, et le vent s'engouffrait en sifflant sous la porte d'entrée restée entrouverte depuis le printemps dernier, quand personne n'avait pensé à la refermer avant l'hiver. » Pour justifier « Il y a du vent ce soir-là », un élève cite toute la deuxième phrase. Quel est son principal défaut ?",
          choix: [
            "Elle est hors sujet.",
            "Elle est beaucoup trop longue : la fin (l'histoire de la porte) n'apporte rien à la preuve du vent.",
            "Il manque les guillemets.",
            "Les mots ont été changés par rapport au texte.",
          ],
          bonneReponse: 1,
          explication:
            "« le vent s'engouffrait en sifflant » suffisait largement à prouver la présence du vent. Toute la précision sur la porte entrouverte depuis le printemps est inutile pour cette affirmation et alourdit la réponse.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Le détective observa la pièce en silence. Sur la table, une tasse de café encore fumante attendait, à côté d'un livre ouvert à la page 42. » Pour justifier « Quelqu'un vient de quitter précipitamment la pièce », un élève cite : « une tasse de café encore fumante attendait ». Cette citation est-elle bien choisie ?",
          choix: [
            "Oui, elle est hors sujet mais bien formulée.",
            "Oui : une tasse « encore fumante » prouve que quelqu'un était là il y a très peu de temps, ce qui appuie l'idée d'un départ précipité.",
            "Non, elle est trop longue.",
            "Non, il fallait citer la page du livre plutôt que la tasse.",
          ],
          bonneReponse: 1,
          explication:
            "Une tasse « encore fumante » indique que le café a été servi il y a très peu de temps : c'est un indice précis et pertinent pour l'affirmation. Le livre ouvert est un indice secondaire, moins direct pour prouver la précipitation.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 6 — Repérer la paraphrase déguisée",
      questions: [
        {
          type: "qcm",
          question:
            "« Elle claqua la porte si fort que les vitres tremblèrent. » Un élève écrit : On voit qu'elle est en colère car elle a fermé la porte très fort, ce qui a fait trembler les vitres. Que peut-on dire de cette réponse ?",
          choix: [
            "C'est une bonne citation : elle reprend fidèlement l'idée du texte.",
            "C'est une paraphrase, pas une citation : l'élève a reformulé le texte avec ses propres mots au lieu de le citer entre guillemets.",
            "C'est une citation trop longue.",
            "C'est une citation hors sujet.",
          ],
          bonneReponse: 1,
          explication:
            "« a fermé la porte très fort » remplace « claqua la porte si fort » : l'idée est la même mais les mots ne sont plus ceux de l'auteur, et il n'y a pas de guillemets. Une paraphrase, même fidèle au sens, ne prouve rien : seule la citation exacte fait foi.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le silence pesait sur la maison comme une chape de plomb. » Un élève écrit : Le texte dit que le silence est très lourd dans la maison, comme du plomb. Quel est le problème de cette phrase ?",
          choix: [
            "L'élève a bien cité le texte.",
            "L'élève paraphrase l'image du texte au lieu de citer les mots exacts « comme une chape de plomb ».",
            "L'élève cite un passage trop court.",
            "L'élève cite un passage hors sujet.",
          ],
          bonneReponse: 1,
          explication:
            "L'expression imagée « une chape de plomb » a été remplacée par « très lourd... comme du plomb » : c'est une reformulation, pas une citation. Il fallait écrire que le silence pesait « comme une chape de plomb ».",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Il n'avait pas dormi depuis trois jours et ses mains tremblaient sur le volant. » Un élève écrit : comme le prouve la citation, ses mains tremblent parce qu'il est fatigué. Pourquoi ne peut-on pas parler ici d'une véritable citation ?",
          choix: [
            "Parce que l'élève annonce une citation mais ne recopie pas les mots exacts entre guillemets.",
            "Parce que la citation est hors sujet.",
            "Parce que la citation est trop longue.",
            "Parce que la ligne n'est pas indiquée.",
          ],
          bonneReponse: 0,
          explication:
            "L'élève parle « de la citation » mais ne met aucun mot du texte entre guillemets. Sans les guillemets et les mots exacts (« ses mains tremblaient sur le volant »), ce n'est qu'une paraphrase qui se prétend citation.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le petit garçon regardait les vagues, fasciné, les pieds enfoncés dans le sable mouillé. » Un élève écrit : « Le petit garçon regardait les vagues », fasciné par la mer et les pieds dans le sable mouillé. Quel est le défaut de cette phrase ?",
          choix: [
            "Elle mélange une vraie citation entre guillemets et une paraphrase du reste de la phrase, sans le signaler.",
            "Elle est entièrement fausse.",
            "Elle est hors sujet.",
            "Il n'y a aucun problème, la phrase est correcte.",
          ],
          bonneReponse: 0,
          explication:
            "« Le petit garçon regardait les vagues » est bien cité entre guillemets, mais la suite reformule le texte sans guillemets ni fidélité exacte (« par la mer » n'est pas dans le texte). Il faut soit tout citer entre guillemets, soit clairement distinguer citation et commentaire.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Camille referma son cahier d'un geste sec et quitta la salle sans un regard pour ses camarades. » Un élève écrit : Camille est visiblement fâchée puisqu'elle s'en va brusquement en ignorant tout le monde autour d'elle. Que faudrait-il faire pour transformer cette phrase en véritable justification par citation ?",
          choix: [
            "Rien, la phrase est déjà une citation correcte.",
            "Remplacer la reformulation par les mots exacts du texte entre guillemets, par exemple « d'un geste sec » et « sans un regard pour ses camarades ».",
            "Supprimer complètement la phrase.",
            "Ajouter uniquement le numéro de la ligne, sans changer les mots.",
          ],
          bonneReponse: 1,
          explication:
            "La phrase actuelle ne fait que reformuler le texte avec d'autres mots (« brusquement » pour « d'un geste sec », « en ignorant tout le monde » pour « sans un regard »). Pour justifier réellement, il faut reprendre les mots exacts du texte entre guillemets.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 7 — Justifier un sentiment ou une émotion",
      questions: [
        {
          type: "qcm",
          question:
            "« Quand elle vit son nom sur la liste des admis, Inès poussa un cri de joie et sauta dans les bras de sa mère. » Quelle citation justifie le mieux « Inès est heureuse » ?",
          choix: [
            "« Quand elle vit son nom sur la liste des admis »",
            "« Inès poussa un cri de joie et sauta dans les bras de sa mère »",
            "« sur la liste des admis »",
            "« dans les bras de sa mère »",
          ],
          bonneReponse: 1,
          explication:
            "« un cri de joie » nomme directement l'émotion et le saut dans les bras confirme l'enthousiasme. Les autres citations donnent le contexte (la liste) mais pas la réaction émotionnelle elle-même.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Depuis que son grand-père était parti, la maison lui semblait immense et vide. Elle évitait son fauteuil, comme si s'y asseoir aurait rendu son absence plus réelle encore. » Quelle citation prouve le plus précisément le chagrin de la narratrice ?",
          choix: [
            "« la maison lui semblait immense et vide »",
            "« Elle évitait son fauteuil »",
            "« comme si s'y asseoir aurait rendu son absence plus réelle encore »",
            "« Depuis que son grand-père était parti »",
          ],
          bonneReponse: 2,
          explication:
            "Cette citation exprime directement le refus d'affronter l'absence, preuve d'un chagrin profond. « immense et vide » décrit la maison, et « évitait son fauteuil » est un comportement observable mais moins explicite sur le sentiment.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Tom regarda l'horloge pour la dixième fois. Ses jambes s'agitaient sous la table, et il jetait sans cesse des coups d'œil vers la porte. » Quelle formulation intègre correctement une citation pour justifier « Tom est impatient » ?",
          choix: [
            "Tom est impatient « ses jambes s'agitaient ».",
            "Tom est impatient, comme le montrent ses jambes qui « s'agitaient sous la table » et ses « coups d'œil vers la porte ».",
            "Tom est impatient parce que regarder l'horloge dix fois.",
            "« Tom est impatient. »",
          ],
          bonneReponse: 1,
          explication:
            "Cette phrase relie clairement l'affirmation à deux citations exactes, encadrées de guillemets et intégrées grammaticalement. Les autres options collent la citation sans lien logique ou oublient les guillemets.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Le capitaine regarda la mer démontée sans qu'un seul muscle de son visage ne bouge, et donna ses ordres d'une voix parfaitement égale. » Quelle citation justifie le mieux « Le capitaine garde son sang-froid face au danger » ?",
          choix: [
            "« Le capitaine regarda la mer démontée »",
            "« sans qu'un seul muscle de son visage ne bouge »",
            "« et donna ses ordres »",
            "« la mer démontée »",
          ],
          bonneReponse: 1,
          explication:
            "L'absence totale de réaction visible prouve directement la maîtrise de soi. Les autres citations décrivent la situation ou une action neutre, sans montrer le sang-froid.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Léo haussa les épaules et répondit d'une voix plate : Ça m'est égal, avant de retourner à son livre. » Pour l'affirmation « Léo cache peut-être une émotion derrière son indifférence apparente », pourquoi est-il difficile de trouver une seule citation exacte qui la prouve ?",
          choix: [
            "Parce que le texte ne décrit que des signes d'indifférence et ne dit jamais explicitement que Léo cache une émotion : c'est une interprétation, pas un fait cité.",
            "Parce qu'il n'y a aucune citation possible dans ce texte.",
            "Parce que la citation serait trop longue.",
            "Parce qu'il faudrait citer tout le paragraphe.",
          ],
          bonneReponse: 0,
          explication:
            "Le texte décrit seulement des signes extérieurs d'indifférence. Affirmer que Léo « cache » une émotion est une hypothèse du lecteur : on peut s'appuyer sur les citations d'indifférence pour la nuancer, mais aucune phrase ne prouve directement une émotion cachée.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 8 — Justifier un trait de caractère",
      questions: [
        {
          type: "qcm",
          question:
            "« Chaque matin, Nora se levait avant l'aube pour préparer le petit-déjeuner de ses frères et repasser leurs vêtements avant l'école. » Quelle citation justifie le mieux « Nora est une personne dévouée envers sa famille » ?",
          choix: [
            "« Chaque matin, Nora se levait avant l'aube »",
            "« pour préparer le petit-déjeuner de ses frères et repasser leurs vêtements avant l'école »",
            "« avant l'école »",
            "« Chaque matin »",
          ],
          bonneReponse: 1,
          explication:
            "Cette citation détaille les actions concrètes accomplies pour les autres, ce qui prouve le dévouement. « se levait avant l'aube » seul ne dit pas pourquoi ; les deux dernières sont incomplètes.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Malgré la douleur qui lui vrillait la cheville, Karim se releva et termina la course en boitant, sous les applaudissements du public. » Quelle citation prouve le plus précisément que Karim fait preuve de courage ?",
          choix: [
            "« sous les applaudissements du public »",
            "« Malgré la douleur qui lui vrillait la cheville, Karim se releva et termina la course »",
            "« en boitant »",
            "« la course »",
          ],
          bonneReponse: 1,
          explication:
            "Cette citation montre l'obstacle (la douleur) surmonté par l'action (se relever et terminer) : c'est précisément la définition du courage. Les autres citations sont des détails secondaires qui, seuls, ne prouvent pas le courage.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Devant les moqueries de ses camarades, Yanis ne répondit rien. Il ramassa calmement ses affaires tombées par terre et les rangea une à une dans son sac. » Pour prouver « Yanis fait preuve de calme et de maîtrise de soi », quelle citation choisir en priorité ?",
          choix: [
            "« Devant les moqueries de ses camarades »",
            "« Il ramassa calmement ses affaires tombées par terre et les rangea une à une »",
            "« ne répondit rien »",
            "« dans son sac »",
          ],
          bonneReponse: 1,
          explication:
            "« calmement » nomme directement le calme, et le geste minutieux (« une à une ») renforce l'idée de maîtrise de soi. « ne répondit rien » est un bon indice mais plus ambigu (cela pourrait aussi être de la peur ou de la résignation).",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« À la moindre remarque, Lucas s'emportait, haussait le ton et finissait souvent par claquer une porte. » L'affirmation « Lucas est quelqu'un de calme et posé » peut-elle être justifiée par une citation de ce texte ?",
          choix: [
            "Oui, avec la citation « claquer une porte ».",
            "Non, le texte prouve au contraire l'inverse : Lucas « s'emportait » et « haussait le ton » à la moindre remarque.",
            "Oui, avec la citation « À la moindre remarque ».",
            "Oui, en citant tout le texte.",
          ],
          bonneReponse: 1,
          explication:
            "Le texte décrit un comportement irritable et impulsif, l'exact contraire du calme. Avant de chercher une citation, il faut vérifier que le texte va bien dans le sens de l'affirmation à prouver : ici, ce n'est pas le cas.",
          difficulte: "moyen",
        },
        {
          type: "qcm",
          question:
            "« Sarah écoutait patiemment chaque camarade, hochait la tête, posait des questions, et attendait toujours son tour pour parler. » Parmi ces réponses, laquelle constitue la meilleure justification complète de « Sarah est une personne à l'écoute des autres » ?",
          choix: [
            "« Sarah écoutait. »",
            "Sarah est à l'écoute des autres, comme le montre le texte.",
            "Sarah est à l'écoute des autres : elle « écoutait patiemment chaque camarade, hochait la tête, posait des questions, et attendait toujours son tour pour parler ».",
            "Sarah est patiente et pose des questions aux autres avant de parler à son tour.",
          ],
          bonneReponse: 2,
          explication:
            "Cette réponse relie l'affirmation à une citation complète et exacte du texte grâce au deux-points, entre guillemets. La première est trop courte et isolée, la deuxième n'a pas de citation du tout, et la dernière est une paraphrase sans guillemets.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 9 — Justifier une évolution ou un changement",
      questions: [
        {
          type: "qcm",
          question:
            "« Au début du récit, Antoine refusait de parler à qui que ce soit. À la fin, il riait avec ses nouveaux camarades comme s'il les connaissait depuis toujours. » Pour prouver qu'Antoine est devenu plus sociable, combien de citations sont nécessaires au minimum ?",
          choix: [
            "Une seule suffit, n'importe laquelle des deux.",
            "Deux : une citation du début et une citation de la fin, pour montrer le contraste.",
            "Aucune, il suffit de le dire.",
            "Il faut citer tout le texte.",
          ],
          bonneReponse: 1,
          explication:
            "Pour prouver un changement, une seule citation ne peut montrer qu'un état, pas une évolution. Il faut opposer une citation du début (« refusait de parler à qui que ce soit ») à une citation de la fin (« il riait avec ses nouveaux camarades »).",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Sur le chemin de l'école, Emma marchait la tête basse, effrayée à l'idée de l'interrogation. En sortant de la salle, elle courait presque, un large sourire aux lèvres. » Quelle phrase justifie le mieux, avec deux citations bien intégrées, qu'Emma est passée de la peur au soulagement ?",
          choix: [
            "Emma avait peur « la tête basse » puis elle est contente « un large sourire aux lèvres ».",
            "Emma, d'abord effrayée comme le montre « la tête basse », finit par se sentir soulagée, comme le prouve « un large sourire aux lèvres ».",
            "Emma marchait la tête basse et puis elle courait avec un sourire.",
            "« la tête basse » « un large sourire aux lèvres »",
          ],
          bonneReponse: 1,
          explication:
            "Cette réponse construit une vraie phrase, relie logiquement les deux moments (« d'abord... finit par... ») et intègre les deux citations avec des guillemets et une formule d'introduction claire. Les autres options juxtaposent maladroitement ou oublient les guillemets.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Il détestait ce village à son arrivée, trop calme, trop gris à son goût. Des années plus tard, il ne put retenir ses larmes en le quittant pour de bon. » Quelle citation, à elle seule, prouve le mieux que le personnage a fini par s'attacher à ce village ?",
          choix: [
            "« Il détestait ce village à son arrivée »",
            "« trop calme, trop gris à son goût »",
            "« il ne put retenir ses larmes en le quittant pour de bon »",
            "« Des années plus tard »",
          ],
          bonneReponse: 2,
          explication:
            "Pleurer en quittant un lieu qu'on détestait au départ prouve un attachement fort qui s'est développé avec le temps. Les deux premières citations montrent seulement le rejet initial, la dernière n'est qu'un repère temporel.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Longtemps, elle avait cru que le courage voulait dire ne jamais avoir peur. Ce jour-là, tremblante, elle avança quand même vers la scène. » Pour prouver que le personnage change sa définition du courage, un élève cite seulement : « elle avança quand même vers la scène ». Que manque-t-il ?",
          choix: [
            "Rien, cette citation suffit.",
            "Une citation de la première phrase (« le courage voulait dire ne jamais avoir peur ») pour montrer l'ancienne idée, avant de citer le changement.",
            "Il aurait fallu citer un autre passage entièrement différent.",
            "Il faut supprimer les guillemets.",
          ],
          bonneReponse: 1,
          explication:
            "La citation choisie montre bien l'action finale, mais sans la citation de l'ancienne croyance sur le courage, on ne voit pas le changement d'idée, seulement une action isolée. Justifier une évolution demande de montrer les deux étapes.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Au fil des pages, le ton du journal intime change : les premières entrées sont pleines de rires et de projets, les dernières sont sèches, réduites à quelques mots. » Pour justifier que l'auteur traverse une période difficile vers la fin, quelle est la meilleure stratégie de citation ?",
          choix: [
            "Citer uniquement les dernières entrées, sans mentionner les premières.",
            "Citer un extrait représentant le ton joyeux du début et un extrait représentant la sécheresse de la fin, pour montrer le contraste qui suggère la difficulté.",
            "Ne pas citer, car le texte ne dit jamais explicitement période difficile.",
            "Citer tout le journal pour être sûr de ne rien oublier.",
          ],
          bonneReponse: 1,
          explication:
            "Le texte ne dit jamais littéralement que l'auteur va mal : c'est une déduction à partir du contraste entre le ton du début et celui de la fin. Il faut donc citer les deux moments pour construire la preuve, plutôt que chercher une phrase unique qui n'existe pas.",
          difficulte: "avance",
        },
      ],
    },
    {
      titre: "Série 10 — Synthèse : citer pour argumenter",
      questions: [
        {
          type: "qcm",
          question:
            "« Le narrateur regarde ses amis s'éloigner sans un mot, sans un regard en arrière, et comprend alors que rien ne sera plus jamais comme avant. » Quelle citation constitue la meilleure preuve, à la fois précise et bien choisie, que le narrateur réalise que sa relation avec ses amis a changé pour toujours ?",
          choix: [
            "« Le narrateur regarde ses amis s'éloigner »",
            "« sans un mot, sans un regard en arrière »",
            "« rien ne sera plus jamais comme avant »",
            "« ses amis »",
          ],
          bonneReponse: 2,
          explication:
            "Cette citation exprime directement et explicitement l'idée de changement définitif, sans ambiguïté. Les autres décrivent la scène (le départ, le silence) mais ne disent pas explicitement que la relation a changé pour toujours.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Malgré son jeune âge, Léna prenait toujours soin d'écouter l'avis de chacun avant de donner le sien, et n'élevait jamais la voix, même lorsque la discussion s'envenimait. » Un élève écrit : Léna est une personne posée et respectueuse des autres, comme le prouve le fait qu'elle écoute avant de parler et ne s'énerve pas, même dans les moments difficiles. Que faut-il corriger ?",
          choix: [
            "Rien, elle est déjà parfaite.",
            "Remplacer la reformulation par les mots exacts du texte entre guillemets, par exemple « prenait toujours soin d'écouter l'avis de chacun » et « n'élevait jamais la voix ».",
            "Supprimer complètement l'affirmation.",
            "Ajouter uniquement des guillemets autour de toute la phrase de l'élève.",
          ],
          bonneReponse: 1,
          explication:
            "L'idée est juste mais entièrement reformulée avec d'autres mots : ce n'est pas une citation mais une paraphrase. Il faut reprendre les mots exacts du texte, encadrés par des guillemets, pour transformer cette explication en véritable justification.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Depuis l'accident, Hugo évitait soigneusement de reprendre le volant. Un jour, sa sœur lui tendit les clés sans un mot ; après un long silence, il les prit et s'installa côté conducteur. » Quelle citation prouve le mieux que Hugo surmonte progressivement sa peur ?",
          choix: [
            "« Depuis l'accident, Hugo évitait soigneusement de reprendre le volant. »",
            "« sa sœur lui tendit les clés sans un mot »",
            "« après un long silence, il les prit et s'installa côté conducteur »",
            "« un jour »",
          ],
          bonneReponse: 2,
          explication:
            "« après un long silence » montre l'hésitation encore présente, et « il les prit et s'installa côté conducteur » montre l'action de dépassement de la peur : c'est la citation qui prouve le mieux le mot « progressivement ». La première citation ne montre que la peur initiale, sans le dépassement.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Les spectateurs retenaient leur souffle. La gymnaste s'élança, tourna deux fois sur elle-même dans les airs, et retomba avec une précision parfaite, sans un pas de trop. » Pour justifier « La gymnaste réussit un exercice difficile », un élève cite : « Les spectateurs retenaient leur souffle. » Quelle erreur commet-il ?",
          choix: [
            "Il choisit une citation qui décrit la réaction du public, pas la performance de la gymnaste elle-même : c'est une citation hors sujet par rapport à ce qu'il veut prouver.",
            "Il n'a pas mis de guillemets.",
            "Sa citation est trop longue.",
            "Sa citation contient des mots changés.",
          ],
          bonneReponse: 0,
          explication:
            "Pour prouver la réussite de l'exercice, il fallait citer « retomba avec une précision parfaite, sans un pas de trop », qui décrit directement la performance. La réaction du public est un indice indirect, insuffisant à lui seul.",
          difficulte: "avance",
        },
        {
          type: "qcm",
          question:
            "« Le vieux pêcheur regardait l'horizon depuis des heures. Ses mains calleuses tremblaient légèrement en rangeant ses filets, fatigué mais résigné à reprendre la mer une dernière saison. » Pour justifier que le pêcheur est physiquement usé mais reste attaché à la mer, quelle réponse d'élève respecte toutes les règles de la citation (guillemets, exactitude, intégration, précision) ?",
          choix: [
            "Le pêcheur est fatigué ses mains tremblaient en rangeant ses filets.",
            "« Ses mains calleuses tremblaient légèrement » : le pêcheur regardait l'horizon.",
            "Le pêcheur est usé par son métier, comme le montrent ses « mains calleuses [qui] tremblaient légèrement en rangeant ses filets », et pourtant il reste attaché à la mer, prêt à reprendre « une dernière saison ».",
            "Le pêcheur est fatigué et attaché à la mer, cela se voit clairement dans tout le texte.",
          ],
          bonneReponse: 2,
          explication:
            "Cette réponse cite deux passages exacts et pertinents (l'un pour la fatigue physique, l'autre pour l'attachement à la mer), les encadre de guillemets, en utilisant des crochets pour l'accord grammatical (« [qui] »), et les intègre dans des phrases construites et logiques. Les autres options oublient les guillemets, mélangent citation et idée sans lien, ou ne citent rien du tout.",
          difficulte: "avance",
        },
      ],
    },
  ],
},
];
