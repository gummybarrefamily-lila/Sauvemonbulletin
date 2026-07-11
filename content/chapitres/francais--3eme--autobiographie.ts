import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "autobiographie",
  titre: "L'autobiographie : se raconter",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Comprendre l'écriture de soi : le pacte autobiographique, les temps du récit, le double « je » (narrateur adulte et personnage enfant), les grandes œuvres du genre, et la méthode pour réussir les questions et la rédaction du brevet.",
  objectifs: [
    "Définir l'autobiographie et le pacte autobiographique (Lejeune)",
    "Distinguer autobiographie, journal intime, mémoires et autofiction",
    "Analyser le double « je » : narrateur adulte / personnage enfant",
    "Repérer les temps du récit autobiographique et leurs valeurs",
    "Connaître les œuvres clés et se préparer aux épreuves du brevet",
  ],
  slides: [
    {
      titre: "C'est quoi, une autobiographie ?",
      illustration: "📖",
      visuel: "auto + bio + graphie",
      contenu: [
        "Du grec : auto (soi-même) + bios (vie) + graphein (écrire)",
        "Un récit rétrospectif : on raconte sa vie passée",
        "Auteur = narrateur = personnage principal",
        "But : se raconter, se comprendre, témoigner, se justifier",
      ],
      voixOff:
        "Le mot autobiographie vient du grec : auto, soi-même, bios, la vie, et graphein, écrire. C'est donc le récit rétrospectif qu'une personne fait de sa propre vie. Sa marque de fabrique : l'auteur, le narrateur et le personnage principal sont une seule et même personne. On écrit sur soi pour se comprendre, témoigner, laisser une trace, ou parfois se justifier.",
    },
    {
      titre: "Le pacte autobiographique (Lejeune)",
      illustration: "🤝",
      visuel: "« Je promets de dire la vérité »",
      contenu: [
        "Notion définie par le critique Philippe Lejeune",
        "L'auteur s'engage à dire la vérité sur sa vie, sincèrement",
        "Le lecteur, en échange, le croit — c'est un « contrat de lecture »",
        "Limites : mémoire imparfaite, oublis, reconstruction du passé",
      ],
      voixOff:
        "Le critique Philippe Lejeune a défini le pacte autobiographique : c'est une sorte de contrat entre l'auteur et le lecteur. L'auteur s'engage à raconter sa vie sincèrement, sans mentir, et le lecteur s'engage à le croire. Mais attention, ce pacte a ses limites : la mémoire est imparfaite, on oublie, on embellit, on reconstruit son passé sans forcément le vouloir.",
    },
    {
      titre: "Autobiographie et genres voisins",
      illustration: "🗂️",
      visuel: "Autobiographie ≠ journal ≠ mémoires ≠ roman",
      contenu: [
        "Journal intime : écrit au jour le jour, sans recul (Anne Frank)",
        "Mémoires : centrés sur les événements historiques vécus",
        "Autofiction / roman autobiographique : mélange de vécu et d'invention",
        "Biographie : la vie de quelqu'un racontée par un AUTRE",
      ],
      voixOff:
        "L'autobiographie a des genres voisins qu'il faut savoir distinguer. Le journal intime s'écrit au jour le jour, sans recul, comme celui d'Anne Frank. Les mémoires racontent surtout les événements historiques auxquels l'auteur a participé. L'autofiction mélange souvenirs réels et invention romanesque. Et la biographie, elle, raconte la vie de quelqu'un... écrite par un autre.",
    },
    {
      titre: "Le double « je »",
      illustration: "👤",
      visuel: "JE narrateur (adulte) / JE personnage (enfant)",
      contenu: [
        "Le « je » qui raconte : l'adulte, au moment de l'écriture",
        "Le « je » raconté : l'enfant ou le jeune qu'il était",
        "L'adulte commente, juge, explique ce que l'enfant vivait sans comprendre",
        "Ce va-et-vient crée l'émotion et la réflexion",
      ],
      voixOff:
        "Dans une autobiographie, le mot je désigne en réalité deux figures. Le je narrateur, c'est l'adulte qui écrit, avec son recul et son expérience. Le je personnage, c'est l'enfant ou l'adolescent qu'il était autrefois. L'adulte commente et explique ce que l'enfant vivait sans le comprendre. Ce va-et-vient entre les deux je fait toute la richesse du genre.",
    },
    {
      titre: "Les temps du récit autobiographique",
      illustration: "⏳",
      visuel: "imparfait / passé simple / présent",
      contenu: [
        "Imparfait : description, habitudes, arrière-plan du passé",
        "Passé simple (ou passé composé) : événements, actions de premier plan",
        "Présent d'énonciation : le narrateur adulte commente au moment où il écrit",
        "Le changement de temps signale souvent le passage d'un « je » à l'autre",
      ],
      voixOff:
        "Les temps verbaux sont des indices précieux. L'imparfait pose le décor et les habitudes du passé : tous les jeudis, j'allais chez ma grand-mère. Le passé simple ou le passé composé racontent les événements marquants. Et le présent d'énonciation signale que le narrateur adulte intervient pour commenter, au moment où il écrit. Repérer un changement de temps, c'est souvent repérer le passage d'un je à l'autre.",
    },
    {
      titre: "Pourquoi écrire sur soi ?",
      illustration: "🎯",
      visuel: "Comprendre • Témoigner • Se justifier",
      contenu: [
        "Se comprendre : donner un sens à son parcours",
        "Témoigner : raconter une époque, une épreuve (guerre, exil)",
        "Se justifier : répondre aux accusations (Rousseau)",
        "Laisser une trace, lutter contre l'oubli et la mort",
      ],
      voixOff:
        "Pourquoi écrit-on sur soi ? D'abord pour se comprendre : mettre en ordre sa vie, c'est lui donner un sens. Ensuite pour témoigner d'une époque ou d'une épreuve, comme la guerre ou l'exil. Parfois pour se justifier : Rousseau écrit ses Confessions en partie pour répondre à ses accusateurs. Et toujours, un peu, pour laisser une trace et lutter contre l'oubli.",
    },
    {
      titre: "Œuvres clés du genre",
      illustration: "📚",
      visuel: "Rousseau • Sarraute • Anne Frank",
      contenu: [
        "Rousseau, Les Confessions (posthume, 1782) : fondateur du genre en France",
        "Nathalie Sarraute, Enfance (1983) : dialogue entre deux voix du « je »",
        "Anne Frank, Journal (1942-1944) : journal intime et témoignage",
        "Aussi : Georges Perec (W ou le Souvenir d'enfance), Romain Gary (La Promesse de l'aube)",
      ],
      voixOff:
        "Quelques œuvres à connaître absolument. Les Confessions de Jean-Jacques Rousseau, publiées après sa mort à partir de 1782, fondent le genre en France : il promet de se montrer tel qu'il fut, sans rien cacher. Enfance de Nathalie Sarraute fait dialoguer deux voix intérieures qui interrogent les souvenirs. Le Journal d'Anne Frank est à la fois journal intime et témoignage bouleversant sur la Shoah. On peut citer aussi Perec ou Romain Gary.",
    },
    {
      titre: "Analyser un texte autobiographique",
      illustration: "🔍",
      visuel: "Qui ? Quand ? Quel regard ?",
      contenu: [
        "Repérer les marques de la 1re personne (je, me, mon...)",
        "Identifier les deux « je » : qui parle, l'adulte ou l'enfant ?",
        "Observer les temps verbaux et leurs valeurs",
        "Dégager le regard du narrateur : tendresse, humour, ironie, regret ?",
      ],
      voixOff:
        "Pour analyser un texte autobiographique, adopte quatre réflexes. Repère d'abord les marques de la première personne. Demande-toi ensuite qui parle : le narrateur adulte ou le personnage enfant ? Observe les temps verbaux : imparfait du souvenir, passé simple des événements, présent du commentaire. Enfin, caractérise le regard porté sur le passé : tendresse, humour, ironie ou regret.",
    },
    {
      titre: "L'autobiographie au brevet",
      illustration: "🎓",
      visuel: "Questions + dictée + rédaction",
      contenu: [
        "Un texte autobiographique tombe souvent à l'épreuve de français",
        "Questions : les deux « je », les temps, les sentiments, le pacte",
        "Rédaction (sujet d'imagination) : raconter un souvenir personnel",
        "Attendus : 1re personne, temps du passé maîtrisés, émotions et regard rétrospectif",
      ],
      voixOff:
        "Au brevet, le texte autobiographique est un grand classique de l'épreuve de français. Les questions portent souvent sur le double je, les temps verbaux et les sentiments du narrateur. Le sujet d'imagination demande fréquemment de raconter un souvenir personnel marquant. Pour réussir, écris à la première personne, maîtrise les temps du passé, exprime des émotions, et n'oublie pas le regard rétrospectif de celui qui se souvient.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Autobiographie : récit rétrospectif de sa propre vie (auteur = narrateur = personnage)",
        "Pacte autobiographique (Lejeune) : promesse de sincérité faite au lecteur",
        "Double « je » : narrateur adulte qui commente / personnage enfant qui vit",
        "Temps : imparfait (décor), passé simple (événements), présent (commentaire)",
      ],
      voixOff:
        "Résumons. L'autobiographie est le récit rétrospectif qu'une personne fait de sa propre vie : auteur, narrateur et personnage ne font qu'un. Le pacte autobiographique, défini par Lejeune, est la promesse de sincérité faite au lecteur. Le double je fait alterner le narrateur adulte, qui commente, et le personnage enfant, qui vit les événements. Enfin, les temps verbaux guident la lecture : imparfait pour le décor, passé simple pour les événements, présent pour le commentaire. Te voilà prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "L'autobiographie est le récit rétrospectif qu'une personne réelle fait de sa propre existence : l'auteur, le narrateur et le personnage principal sont une seule et même personne. C'est un genre majeur du programme de 3e (« Se raconter, se représenter ») et un grand classique du brevet.",
    sections: [
      {
        titre: "Définition et pacte autobiographique",
        points: [
          "Auto (soi) + bios (vie) + graphein (écrire) : récit rétrospectif de sa propre vie",
          "Identité auteur = narrateur = personnage principal",
          "Pacte autobiographique (Philippe Lejeune) : l'auteur promet la sincérité, le lecteur lui fait confiance",
          "Limites du pacte : mémoire sélective, oublis, reconstruction, part de subjectivité",
        ],
      },
      {
        titre: "Genres voisins à ne pas confondre",
        points: [
          "Journal intime : écrit au jour le jour, sans recul (Anne Frank)",
          "Mémoires : l'accent est mis sur les événements historiques vécus",
          "Autofiction / roman autobiographique : vécu mêlé d'invention",
          "Biographie : vie racontée par un autre (pas de « je » identique à l'auteur)",
        ],
      },
      {
        titre: "Le double « je »",
        points: [
          "« Je » narrateur : l'adulte qui écrit, avec recul, qui commente et juge",
          "« Je » personnage : l'enfant ou l'adolescent d'autrefois, qui vit les événements",
          "Le va-et-vient entre les deux crée émotion, humour ou ironie",
        ],
      },
      {
        titre: "Les temps du récit autobiographique",
        points: [
          "Imparfait : descriptions, habitudes, arrière-plan du souvenir",
          "Passé simple / passé composé : événements de premier plan",
          "Présent d'énonciation : commentaire du narrateur adulte au moment de l'écriture",
          "Un changement de temps signale souvent un changement de « je »",
        ],
      },
      {
        titre: "Œuvres clés",
        points: [
          "Rousseau, Les Confessions (publication posthume à partir de 1782) : texte fondateur",
          "Nathalie Sarraute, Enfance (1983) : deux voix dialoguent sur les souvenirs",
          "Anne Frank, Journal (1942-1944) : journal intime et témoignage historique",
          "Georges Perec, W ou le Souvenir d'enfance ; Romain Gary, La Promesse de l'aube",
        ],
      },
      {
        titre: "Réussir au brevet",
        points: [
          "Questions sur texte : identifier les deux « je », les temps et leurs valeurs, les sentiments, le but de l'auteur",
          "Rédaction : récit d'un souvenir à la 1re personne, temps du passé, émotions, regard rétrospectif",
          "Toujours justifier une réponse par une citation précise du texte",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'autobiographie. L'autobiographie est le récit rétrospectif qu'une personne fait de sa propre vie : l'auteur, le narrateur et le personnage principal sont la même personne. Selon Philippe Lejeune, elle repose sur le pacte autobiographique : l'auteur promet au lecteur de dire la vérité sur lui-même, même si la mémoire reste imparfaite. Il ne faut pas la confondre avec le journal intime, écrit au jour le jour, avec les mémoires, centrés sur l'Histoire, ni avec l'autofiction, qui mêle vécu et invention. Le texte autobiographique fait entendre un double je : le narrateur adulte, qui se souvient et commente au présent, et le personnage enfant, qui vit les événements au passé. L'imparfait pose le décor, le passé simple raconte les événements, le présent signale le commentaire. Retiens les œuvres clés : Les Confessions de Rousseau, Enfance de Sarraute, le Journal d'Anne Frank. Au brevet, justifie toujours tes réponses en citant le texte.",
  },
  memoCards: [
    {
      recto: "Définition de l'autobiographie ?",
      verso: "Récit rétrospectif qu'une personne réelle fait de sa propre vie : auteur = narrateur = personnage principal.",
    },
    {
      recto: "Qu'est-ce que le pacte autobiographique ?",
      verso: "Contrat défini par Philippe Lejeune : l'auteur promet la sincérité sur sa vie, le lecteur s'engage à le croire.",
    },
    {
      recto: "Pourquoi le pacte a-t-il des limites ?",
      verso: "La mémoire est imparfaite : oublis, souvenirs embellis, reconstruction du passé. La sincérité n'est pas l'exactitude totale.",
    },
    {
      recto: "Autobiographie ou journal intime ?",
      verso: "L'autobiographie se rédige avec recul, longtemps après ; le journal s'écrit au jour le jour, sans connaître la suite.",
    },
    {
      recto: "Autobiographie ou biographie ?",
      verso: "Autobiographie : on raconte SA vie. Biographie : la vie de quelqu'un racontée par un AUTRE.",
    },
    {
      recto: "Qu'est-ce que le double « je » ?",
      verso: "Le « je » narrateur (l'adulte qui écrit et commente) et le « je » personnage (l'enfant qui vivait les événements).",
    },
    {
      recto: "Valeur de l'imparfait dans le récit de soi ?",
      verso: "Décor, descriptions et habitudes du passé : « Chaque été, nous partions en Bretagne. »",
    },
    {
      recto: "À quoi sert le présent dans une autobiographie ?",
      verso: "C'est souvent le présent d'énonciation : le narrateur adulte commente au moment où il écrit.",
    },
    {
      recto: "Qui a écrit Les Confessions ?",
      verso: "Jean-Jacques Rousseau (publication posthume à partir de 1782) : le texte fondateur de l'autobiographie en France.",
    },
    {
      recto: "Trois raisons d'écrire sur soi ?",
      verso: "Se comprendre, témoigner d'une époque ou d'une épreuve, se justifier ; et laisser une trace contre l'oubli.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans une autobiographie, qui sont l'auteur, le narrateur et le personnage principal ?",
      choix: [
        "Trois personnes différentes",
        "Une seule et même personne",
        "L'auteur et le narrateur seulement",
        "Des personnages inventés",
      ],
      bonneReponse: 1,
      explication:
        "C'est le critère central du genre : auteur = narrateur = personnage principal. C'est ce qui distingue l'autobiographie du roman à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui a défini le « pacte autobiographique » ?",
      choix: ["Jean-Jacques Rousseau", "Philippe Lejeune", "Nathalie Sarraute", "Tzvetan Todorov"],
      bonneReponse: 1,
      explication: "Philippe Lejeune, critique du XXe siècle, a théorisé ce « contrat de lecture » entre l'auteur et le lecteur.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Décompose le mot « autobiographie » et donne le sens de chaque élément.",
      reponse: "Auto : soi-même ; bio : la vie ; graphie : l'écriture. L'autobiographie est donc l'écriture de sa propre vie.",
      explication: "L'étymologie grecque contient toute la définition du genre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le Journal d'Anne Frank est :",
      choix: ["un roman d'aventures", "une biographie", "un journal intime", "des mémoires de guerre écrits après coup"],
      bonneReponse: 2,
      explication:
        "Anne Frank écrit au jour le jour, entre 1942 et 1944, sans connaître la suite des événements : c'est un journal intime, qui est aussi un témoignage historique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Lis cette phrase inventée : « J'avais huit ans et je croyais que le grenier abritait des trésors ; je souris aujourd'hui de cette naïveté. » Où le narrateur adulte intervient-il ?",
      choix: [
        "« J'avais huit ans »",
        "« je croyais que le grenier abritait des trésors »",
        "« je souris aujourd'hui de cette naïveté »",
        "Il n'intervient pas",
      ],
      bonneReponse: 2,
      explication:
        "Le présent (« je souris ») et l'adverbe « aujourd'hui » signalent le narrateur adulte qui commente, avec recul, ce que vivait l'enfant (à l'imparfait).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre une autobiographie et des mémoires.",
      reponse: "L'autobiographie est centrée sur la vie personnelle et intérieure de l'auteur (enfance, sentiments, formation de sa personnalité). Les mémoires racontent surtout les événements historiques et publics auxquels l'auteur a assisté ou participé.",
      explication: "Dans les mémoires, le « je » est un témoin de l'Histoire ; dans l'autobiographie, il est lui-même le sujet du livre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans l'extrait inventé « Le matin de la rentrée, ma mère boutonna mon manteau neuf ; je tremblais de peur devant la grille », identifie le temps de chaque verbe et sa valeur.",
      reponse: "« Boutonna » : passé simple, action de premier plan, événement unique. « Tremblais » : imparfait, arrière-plan, état qui dure (la peur de l'enfant pendant la scène).",
      explication: "Le passé simple fait avancer le récit ; l'imparfait installe le décor et les états des personnages.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi peut-on dire que le pacte autobiographique est fragile ? Donne deux raisons.",
      reponse: "D'abord, la mémoire est imparfaite : l'auteur oublie, déforme ou reconstruit ses souvenirs sans le vouloir. Ensuite, l'auteur peut être tenté d'embellir son image ou de se justifier, ce qui nuit à l'objectivité — la sincérité promise n'est donc jamais une vérité totale.",
      explication: "Rousseau lui-même admet des trous de mémoire dans Les Confessions : la sincérité de l'intention ne garantit pas l'exactitude des faits.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un roman commence par « Je m'appelle Arthur et je vais vous raconter ma vie », mais l'auteur s'appelle Paul Martin. Ce texte est :",
      choix: [
        "une autobiographie, car il y a un « je »",
        "un roman à la première personne, car auteur et narrateur sont différents",
        "un journal intime",
        "des mémoires",
      ],
      bonneReponse: 1,
      explication:
        "Le « je » ne suffit pas : sans identité entre l'auteur (Paul Martin) et le narrateur (Arthur), le pacte autobiographique n'existe pas. C'est une fiction à la première personne.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Analyse cet extrait inventé : « Notre appartement sentait la cire et le café. Un soir, mon père rentra plus tôt, le visage grave. Je comprends maintenant qu'il venait de perdre son emploi, mais l'enfant que j'étais ne vit que la promenade inespérée du lendemain. » Montre comment s'y manifestent le double « je » et les temps du récit.",
      reponse: "L'imparfait (« sentait ») pose le décor du souvenir ; le passé simple (« rentra », « ne vit ») raconte l'événement vécu par le « je » personnage (l'enfant). Le présent (« je comprends maintenant ») et l'adverbe « maintenant » font entendre le « je » narrateur adulte, qui donne le sens que l'enfant ignorait : la perte d'emploi. L'expression « l'enfant que j'étais » souligne explicitement l'écart entre les deux « je ».",
      explication: "C'est le mécanisme central du genre : l'adulte relit et interprète l'expérience de l'enfant.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rousseau ouvre Les Confessions en affirmant vouloir montrer « un homme dans toute la vérité de la nature » : lui-même. Quel engagement prend-il ainsi envers le lecteur, et comment appelle-t-on cet engagement ?",
      reponse: "Il s'engage à se peindre avec une sincérité totale, sans rien cacher de ses qualités ni de ses fautes. Cet engagement de vérité envers le lecteur correspond à ce que Philippe Lejeune appellera le pacte autobiographique.",
      explication: "Les Confessions sont considérées comme le texte fondateur du genre en France précisément à cause de cette promesse initiale de sincérité.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Sujet d'entraînement type brevet : rédige le début (5 à 6 phrases) d'un récit autobiographique sur un souvenir d'école marquant, en faisant apparaître le double « je » et au moins trois temps différents.",
      reponse: "Exemple de corrigé : « L'école de mon village sentait la craie et le bois ciré ; chaque matin, je traînais mon cartable trop lourd jusqu'au dernier rang. Un jour de décembre, la maîtresse me demanda de lire mon poème devant toute la classe. Mes jambes tremblaient, ma voix se brisa sur le premier vers. Aujourd'hui, je sais que ce moment d'effroi a décidé de mon amour des mots. L'enfant terrifié que j'étais ignorait qu'il venait de monter pour la première fois sur une scène. »",
      explication: "On vérifie : 1re personne, imparfait du décor (« sentait », « traînais »), passé simple de l'événement (« demanda », « se brisa »), présent du narrateur adulte (« je sais »), regard rétrospectif et émotions.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'autobiographie est un récit :",
      choix: ["prospectif", "rétrospectif", "imaginaire", "impersonnel"],
      bonneReponse: 1,
      explication: "Rétrospectif : on se retourne sur sa vie passée pour la raconter.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que le pacte autobiographique, en une phrase ?",
      reponse: "C'est l'engagement de l'auteur à raconter sa vie avec sincérité, en échange de la confiance du lecteur (notion définie par Philippe Lejeune).",
      explication: "Un contrat de lecture : promesse de vérité contre confiance.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qui sont les deux « je » du texte autobiographique ?",
      reponse: "Le « je » narrateur, l'adulte qui écrit et commente avec recul, et le « je » personnage, l'enfant ou le jeune qui vivait les événements racontés.",
      explication: "Le passage de l'un à l'autre est souvent signalé par un changement de temps verbal.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans « Chaque dimanche, nous marchions jusqu'au port », l'imparfait exprime :",
      choix: ["un événement unique", "une habitude du passé", "un futur proche", "un ordre"],
      bonneReponse: 1,
      explication: "« Chaque dimanche » + imparfait : c'est une action répétée, une habitude du passé.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux œuvres autobiographiques et leurs auteurs.",
      reponse: "Par exemple : Les Confessions de Rousseau et Enfance de Nathalie Sarraute (ou le Journal d'Anne Frank, W ou le Souvenir d'enfance de Perec, La Promesse de l'aube de Romain Gary).",
      explication: "Rousseau est le fondateur du genre en France ; les autres œuvres montrent la variété de l'écriture de soi.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'autobiographie",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel texte est considéré comme fondateur de l'autobiographie en France ?",
          choix: ["Le Journal d'Anne Frank", "Les Confessions de Rousseau", "Enfance de Sarraute", "Le Horla de Maupassant"],
          bonneReponse: 1,
          explication: "Les Confessions de Jean-Jacques Rousseau, publiées après sa mort à partir de 1782, fondent le genre en France.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle est la différence entre une autobiographie et une biographie ?",
          reponse: "Dans l'autobiographie, l'auteur raconte sa propre vie ; dans la biographie, un auteur raconte la vie d'une autre personne.",
          explication: "Le préfixe auto- (soi-même) fait toute la différence.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans l'extrait inventé « Je revois encore la cour grise de l'internat ; j'y entrai un lundi d'octobre, la gorge nouée », que signale le présent « je revois » ?",
          choix: [
            "Une action de l'enfant",
            "L'intervention du narrateur adulte au moment de l'écriture",
            "Un futur proche",
            "Un discours direct",
          ],
          bonneReponse: 1,
          explication: "« Je revois encore » est un présent d'énonciation : l'adulte se souvient au moment où il écrit, avant de replonger dans le passé (« j'entrai », passé simple).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne trois raisons qui peuvent pousser un auteur à écrire son autobiographie.",
          reponse: "Se comprendre soi-même en donnant un sens à son parcours ; témoigner d'une époque ou d'une épreuve ; se justifier face à des accusations ; laisser une trace contre l'oubli (trois réponses parmi celles-ci).",
          explication: "Rousseau, par exemple, cherche à la fois à se comprendre et à se justifier.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi le journal intime n'offre-t-il pas le même regard que l'autobiographie ?",
          reponse: "Le journal est écrit au jour le jour : son auteur ne connaît pas la suite des événements et n'a aucun recul. L'autobiographie, écrite longtemps après, permet au narrateur adulte de commenter, d'interpréter et de donner un sens à son passé.",
          explication: "C'est la présence ou l'absence de recul (regard rétrospectif) qui distingue les deux genres.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse l'extrait inventé : « On m'offrit ce violon pour mes dix ans. Je le trouvais alors encombrant et criard ; je mesure aujourd'hui tout ce que je dois à cet instrument détesté. » Identifie les deux « je », les temps employés et le regard du narrateur.",
          reponse: "Le « je » personnage est l'enfant de dix ans qui reçoit le violon et le juge « encombrant et criard » (passé simple « offrit » pour l'événement, imparfait « trouvais » pour son sentiment durable). Le « je » narrateur est l'adulte qui intervient au présent (« je mesure aujourd'hui ») : son regard est reconnaissant et légèrement amusé de l'aveuglement de l'enfant, comme le montre le paradoxe « cet instrument détesté » auquel il « doit » tant.",
          explication: "L'écart entre le jugement de l'enfant et celui de l'adulte crée l'intérêt du passage : c'est le double « je » en action.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'autobiographie",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le pacte autobiographique engage l'auteur à :",
          choix: ["tout inventer", "raconter sa vie avec sincérité", "ne parler que d'Histoire", "écrire au jour le jour"],
          bonneReponse: 1,
          explication: "L'auteur promet la sincérité sur sa propre vie ; c'est le cœur du pacte défini par Lejeune.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle œuvre autobiographique Nathalie Sarraute a-t-elle publiée en 1983, et quelle en est l'originalité ?",
          reponse: "Enfance : le récit y prend la forme d'un dialogue entre deux voix intérieures de l'auteure, qui interrogent et vérifient les souvenirs.",
          explication: "Ce dispositif met en scène la méfiance de Sarraute envers la mémoire et les embellissements du souvenir.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel énoncé illustre le MIEUX les limites du pacte autobiographique ?",
          choix: [
            "L'auteur écrit à la troisième personne",
            "L'auteur raconte un souvenir d'enfance dont il a peut-être reconstruit les détails",
            "L'auteur publie son livre de son vivant",
            "L'auteur utilise le passé simple",
          ],
          bonneReponse: 1,
          explication: "La mémoire reconstruit le passé : même sincère, l'auteur peut se tromper. C'est la limite majeure du pacte.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans un récit autobiographique, quels temps utilise-t-on principalement, et pour quelles valeurs ? Cite-en trois.",
          reponse: "L'imparfait pour les descriptions et les habitudes du passé ; le passé simple (ou le passé composé) pour les événements de premier plan ; le présent d'énonciation pour les commentaires du narrateur adulte au moment de l'écriture.",
          explication: "Repérer ces temps permet d'identifier quel « je » s'exprime.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève écrit dans sa rédaction de brevet : « Je raconterai mon premier match : j'ai marqué, tout le monde applaudissait, c'était génial. » Propose-lui deux améliorations précises pour mieux répondre aux attendus du récit autobiographique.",
          reponse: "1. Ajouter le regard rétrospectif du narrateur adulte, par exemple au présent : « Aujourd'hui encore, je sens l'odeur de la pelouse mouillée » — cela crée le double « je ». 2. Enrichir l'expression des émotions et des sensations au lieu du jugement vague « c'était génial » : décrire le cœur qui bat, les mains moites, la clameur des tribunes. (On peut aussi conseiller de mieux maîtriser l'alternance imparfait / passé simple : « tout le monde applaudissait » pour l'arrière-plan, « je marquai » pour l'événement.)",
          explication: "Au brevet, le correcteur attend un vrai regard rétrospectif, des émotions développées et des temps du passé maîtrisés.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court paragraphe autobiographique (4 à 5 phrases) sur un objet de ton enfance, en utilisant l'imparfait, le passé simple et le présent, et en faisant entendre les deux « je ».",
          reponse: "Exemple de corrigé : « Sur l'étagère de ma chambre trônait un ours en peluche à l'oreille décousue. Il m'accompagnait partout, jusqu'au jour où je l'oubliai dans un train de nuit. Je pleurai toute la semaine. Je souris aujourd'hui de ce chagrin immense, mais je sais qu'avec lui, c'est un morceau de mon enfance qui est resté sur cette banquette. »",
          explication: "On vérifie : imparfait du décor (« trônait », « accompagnait »), passé simple des événements (« oubliai », « pleurai »), présent du narrateur adulte (« je souris », « je sais »), et regard rétrospectif qui donne sens au souvenir.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Autobiographie = récit rétrospectif de sa propre vie : auteur, narrateur et personnage principal sont la même personne.",
    "Pacte autobiographique (Philippe Lejeune) : promesse de sincérité de l'auteur, confiance du lecteur — mais la mémoire reste imparfaite.",
    "Double « je » : le narrateur adulte (commente, souvent au présent) et le personnage enfant (vit les événements, aux temps du passé).",
    "Temps du récit : imparfait pour le décor et les habitudes, passé simple pour les événements, présent d'énonciation pour le commentaire.",
    "Œuvres clés : Les Confessions (Rousseau), Enfance (Sarraute), le Journal d'Anne Frank — au brevet, justifie toujours par une citation.",
    "Erreur classique à éviter : croire qu'un récit à la première personne est forcément une autobiographie — sans identité auteur-narrateur-personnage, c'est une fiction.",
  ],
};

export default chapitre;
