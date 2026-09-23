/**
 * Atelier d'écriture : 45 exercices guidés, 1 par semaine (36 semaines
 * d'année scolaire + exercices bonus, dont des études d'œuvres).
 * Progression inspirée des méthodes d'écriture persuasive anglo-saxonnes,
 * adaptée au collège français (argumentation, rédaction du brevet) :
 * donner son avis → arguments → introduction/conclusion → textes complets
 * → genres (lettre, article, critique…) → sujets d'entraînement complets.
 * L'élève suit les étapes, rédige sa version finale, et l'envoie à ses parents.
 */

export interface EtapeEcriture {
  titre: string;
  consigne: string;
  /** Amorce de phrase proposée à l'élève (placeholder du champ de saisie). */
  amorce?: string;
}

/** Texte d'appui affiché avec l'exercice (extrait d'œuvre à analyser). */
export interface TexteSupport {
  titre: string;
  source: string;
  /** Paragraphes séparés par \n\n ; les répliques commencent par « — ». */
  extrait: string;
  /** Notes de vocabulaire (mot : définition). */
  notes?: string[];
}

export interface ExerciceEcriture {
  semaine: number;
  titre: string;
  competence: string;
  lecon: string[];
  support?: TexteSupport;
  modele?: { titre: string; texte: string };
  etapes: EtapeEcriture[];
  criteres: string[];
}

/** Étapes standard des sujets d'entraînement complets (semaines 25 à 36). */
const ETAPES_SUJET_COMPLET = (sujet: string): EtapeEcriture[] => [
  {
    titre: "Mon avis et mes arguments (au brouillon)",
    consigne:
      "Note ton avis sur la question, puis liste 3 arguments pour le défendre. Pour chacun, prévois un détail, un exemple ou un fait.",
    amorce: "Mon avis : … | Argument 1 : … | Argument 2 : … | Argument 3 : …",
  },
  {
    titre: "L'introduction",
    consigne:
      "Rédige une introduction avec une accroche (question, fait, anecdote…), la présentation du sujet et ton idée principale.",
  },
  {
    titre: "Le développement",
    consigne:
      "Un paragraphe par argument, du plus faible au plus fort. Utilise des connecteurs (d'abord, ensuite, de plus, enfin) et appuie chaque argument sur un exemple ou un fait.",
  },
  {
    titre: "La conclusion",
    consigne:
      "Reformule ton idée principale avec d'autres mots, résume tes arguments et termine par une ouverture ou un appel à l'action.",
  },
];

const CRITERES_SUJET_COMPLET = [
  "Mon introduction contient une accroche et annonce clairement mon avis.",
  "J'ai écrit un paragraphe par argument, relié par des connecteurs logiques.",
  "Chaque argument est appuyé par un détail, un exemple ou un fait.",
  "Ma conclusion reformule mon avis sans recopier l'introduction.",
  "J'ai relu pour corriger l'orthographe et la ponctuation.",
];

export const EXERCICES_ECRITURE: ExerciceEcriture[] = [
  {
    semaine: 1,
    titre: "Donner clairement son avis",
    competence: "L'idée principale",
    lecon: [
      "Un texte d'opinion, c'est un texte qui dit ce que TU penses de quelque chose. La toute première compétence, c'est d'énoncer ton avis clairement, en une ou deux phrases : c'est l'idée principale de ton texte.",
      "Un avis clair se reconnaît facilement : quelqu'un qui lit ta première phrase doit pouvoir dire exactement ce que tu penses, sans deviner. « Le foot, c'est pas mal » est flou. « Le football est le sport le plus complet pour un collégien » est clair.",
    ],
    modele: {
      titre: "Exemple : un avis clairement énoncé",
      texte:
        "Tu devrais mettre de côté la moitié de ton argent de poche. Cela peut sembler difficile, mais c'est la meilleure décision que tu puisses prendre : tu pourras t'offrir plus tard quelque chose qui compte vraiment pour toi, au lieu de tout dépenser en petites choses vite oubliées.",
    },
    etapes: [
      {
        titre: "Énonce ton idée principale",
        consigne:
          "Complète la phrase pour énoncer ton avis en une ou deux phrases claires.",
        amorce: "La personne la plus inspirante que je connaisse est…",
      },
      {
        titre: "Explique pourquoi",
        consigne: "Écris quelques phrases qui expliquent pourquoi tu as cet avis.",
        amorce: "Elle (ou il) m'inspire parce que…",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Assemble le tout : un petit texte d'opinion de 5 à 8 lignes, qui commence par ton idée principale puis l'explique.",
      },
    ],
    criteres: [
      "Ma première phrase dit clairement ce que je pense.",
      "J'ai expliqué pourquoi j'ai cet avis.",
      "Un lecteur qui ne me connaît pas comprendrait mon texte.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 2,
    titre: "Justifier son avis",
    competence: "Le « parce que »",
    lecon: [
      "Donner son avis ne suffit pas : pour convaincre, il faut le justifier. Chaque fois que tu affirmes quelque chose, ton lecteur se demande « pourquoi ? ». Ton travail, c'est de répondre à cette question avant même qu'il ne la pose.",
      "Une justification solide donne une raison précise, pas une répétition déguisée. « J'adore ce film parce qu'il est génial » ne justifie rien. « J'adore ce film parce que le héros doute et se trompe, comme une vraie personne » donne une vraie raison.",
    ],
    etapes: [
      {
        titre: "Ton idée principale",
        consigne: "Énonce ton avis en une phrase claire.",
        amorce: "Le genre de films le plus passionnant à regarder, c'est…",
      },
      {
        titre: "Tes raisons",
        consigne:
          "Écris 2 ou 3 phrases qui justifient ton avis. Chaque phrase doit donner une raison différente et précise.",
        amorce: "Ces films sont passionnants parce que…",
      },
      {
        titre: "Ta version finale",
        consigne: "Rédige ton texte d'opinion complet : idée principale + raisons (6 à 10 lignes).",
      },
    ],
    criteres: [
      "J'ai donné au moins 2 raisons différentes.",
      "Mes raisons sont précises, pas des répétitions de mon avis.",
      "J'ai utilisé « parce que », « car » ou « en effet ».",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 3,
    titre: "Organiser ses idées",
    competence: "Le plan en trois parties",
    lecon: [
      "Un texte d'opinion réussi suit presque toujours le même plan : une introduction qui présente le sujet et ton avis, un développement qui donne tes raisons (une par paragraphe), et une conclusion qui résume le tout.",
      "Ce plan n'est pas une contrainte, c'est un GPS : il empêche ton lecteur (et toi !) de se perdre. Avant d'écrire, note toujours ton plan au brouillon — trois lignes suffisent.",
    ],
    modele: {
      titre: "Exemple de plan",
      texte:
        "Sujet : vaut-il mieux acheter ses livres ou les emprunter à la bibliothèque ? — Introduction : mon avis (emprunter). Développement : 1) c'est gratuit, on peut lire dix fois plus ; 2) on peut essayer des genres nouveaux sans risque ; 3) rendre un livre oblige à le lire ! Conclusion : la bibliothèque, le meilleur plan lecture.",
    },
    etapes: [
      {
        titre: "Ton avis",
        consigne: "Acheter ses livres ou les emprunter ? Énonce ton avis en une phrase.",
      },
      {
        titre: "Ton plan",
        consigne:
          "Note ton plan : introduction (ton avis), 2 ou 3 raisons (une ligne chacune), conclusion (une ligne).",
        amorce: "Intro : … | Raison 1 : … | Raison 2 : … | Conclusion : …",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige le texte en suivant ton plan : un paragraphe par partie, saute une ligne entre chaque.",
      },
    ],
    criteres: [
      "Mon texte a une introduction, un développement et une conclusion.",
      "Chaque raison a son propre paragraphe.",
      "Mon texte suit exactement le plan que j'avais noté.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 4,
    titre: "Trouver et choisir ses arguments",
    competence: "La pluie d'idées",
    lecon: [
      "Avant d'écrire, les bons auteurs font une « pluie d'idées » : ils notent TOUTES les raisons qui leur passent par la tête, même les mauvaises. Ensuite seulement, ils trient et gardent les meilleures.",
      "Un bon argument est convaincant pour ton LECTEUR, pas seulement pour toi. « Les téléphones, c'est cool » ne convaincra pas un adulte ; « le téléphone permet de prévenir ses parents en cas d'imprévu » si.",
    ],
    etapes: [
      {
        titre: "Pluie d'idées",
        consigne:
          "Sujet : faut-il autoriser les téléphones au collège ? Choisis ton camp, puis note 5 à 8 raisons, sans trier, même les moins bonnes.",
      },
      {
        titre: "Le tri",
        consigne:
          "Relis ta liste et garde les 3 raisons les plus convaincantes pour un adulte. Classe-les de la moins forte à la plus forte.",
        amorce: "1) … 2) … 3) (la plus forte) …",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige ton texte d'opinion avec tes 3 arguments choisis, en gardant le plus fort pour la fin.",
      },
    ],
    criteres: [
      "J'ai noté au moins 5 idées avant de trier.",
      "J'ai gardé les 3 arguments les plus convaincants pour mon lecteur.",
      "Mon argument le plus fort arrive en dernier.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 5,
    titre: "Présenter le sujet",
    competence: "L'introduction",
    lecon: [
      "L'introduction a deux missions : dire de quoi tu vas parler, et annoncer ton avis. Ton lecteur ne doit jamais se demander « mais de quoi parle ce texte ? ».",
      "Attention au piège : ne commence pas par tes arguments ! L'introduction présente, elle ne démontre pas encore. Garde tes raisons pour le développement.",
    ],
    modele: {
      titre: "Exemple d'introduction",
      texte:
        "Chiens, chats, hamsters : plus d'un foyer français sur deux possède un animal de compagnie. Certains parents hésitent pourtant à franchir le pas. À mon avis, avoir un animal est l'une des meilleures choses qui puissent arriver à un enfant, et voici pourquoi.",
    },
    etapes: [
      {
        titre: "Présente le sujet",
        consigne:
          "Sujet : faut-il avoir un animal de compagnie ? Écris 1 ou 2 phrases qui présentent le sujet sans encore donner ton avis.",
      },
      {
        titre: "Annonce ton avis",
        consigne: "Ajoute une phrase qui annonce clairement ton avis.",
        amorce: "À mon avis, …",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige l'introduction complète (3 à 5 phrases), puis enchaîne avec un court développement de 2 arguments et une phrase de conclusion.",
      },
    ],
    criteres: [
      "Mon introduction dit de quoi parle le texte.",
      "Mon avis est annoncé clairement à la fin de l'introduction.",
      "Mes arguments n'apparaissent pas encore dans l'introduction.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 6,
    titre: "Commencer fort",
    competence: "L'accroche",
    lecon: [
      "Une introduction correcte présente le sujet ; une introduction FORTE donne envie de lire la suite. Pour cela, les auteurs utilisent une accroche : une question posée au lecteur, un fait étonnant, une émotion, une petite scène, une citation, une pointe d'humour…",
      "Par exemple, au lieu de « Je vais parler des réseaux sociaux », essaie : « Combien de fois as-tu regardé ton téléphone aujourd'hui ? Dix fois ? Cinquante ? » — la question happe le lecteur immédiatement.",
    ],
    etapes: [
      {
        titre: "Trois accroches",
        consigne:
          "Sujet : les réseaux sociaux font-ils plus de bien ou de mal aux collégiens ? Écris 3 accroches différentes : une question au lecteur, un fait ou un chiffre, une mini-scène ou anecdote.",
        amorce: "1) Question : … 2) Fait : … 3) Scène : …",
      },
      {
        titre: "Choisis la meilleure",
        consigne:
          "Garde ta meilleure accroche et rédige l'introduction complète : accroche + présentation du sujet + ton avis.",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige le texte complet : ton introduction avec accroche, 2 arguments développés, une phrase de conclusion.",
      },
    ],
    criteres: [
      "J'ai essayé 3 accroches différentes avant de choisir.",
      "Ma première phrase donne envie de lire la suite.",
      "Mon introduction annonce quand même le sujet et mon avis.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 7,
    titre: "Développer avec des détails",
    competence: "Les détails qui appuient",
    lecon: [
      "Un argument sans détails est comme une affiche sans image : on passe devant sans s'arrêter. Les détails précis (qui ? quoi ? où ? combien ? comment ?) rendent ton argument concret et crédible.",
      "Compare : « Le sport, c'est bon pour la santé » et « Trente minutes de sport par jour renforcent le cœur, améliorent le sommeil et diminuent le stress avant un contrôle ». Le second convainc, parce qu'il montre au lieu d'affirmer.",
    ],
    etapes: [
      {
        titre: "Ton argument brut",
        consigne:
          "Sujet : tout collégien devrait pratiquer un sport chaque semaine. Écris un argument en une phrase simple.",
      },
      {
        titre: "Ajoute les détails",
        consigne:
          "Réécris ton argument en un paragraphe de 3 à 5 phrases, en ajoutant des détails précis : combien, comment, dans quelle situation…",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige un texte d'opinion complet sur ce sujet : introduction, 2 arguments détaillés, conclusion.",
      },
    ],
    criteres: [
      "Chaque argument est développé avec des détails précis.",
      "J'ai répondu à au moins deux questions parmi : qui, quoi, où, combien, comment.",
      "Mes détails montrent au lieu de simplement affirmer.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 8,
    titre: "Convaincre avec des exemples",
    competence: "L'exemple bien choisi",
    lecon: [
      "Un exemple bien choisi vaut dix affirmations. Quand tu donnes un exemple, ton lecteur peut vérifier ton idée dans sa propre tête — et s'il est d'accord avec l'exemple, il est déjà à moitié d'accord avec toi.",
      "Un bon exemple est précis et connu de ton lecteur. Pour défendre les jeux vidéo, « certains jeux sont intelligents » est faible ; « des jeux comme Minecraft demandent de planifier, construire et coopérer » parle immédiatement au lecteur.",
    ],
    etapes: [
      {
        titre: "Ton avis et ton argument",
        consigne:
          "Sujet : les jeux vidéo, une perte de temps ? Choisis ton camp, énonce ton avis et un argument principal.",
      },
      {
        titre: "Deux exemples",
        consigne:
          "Trouve 2 exemples précis qui illustrent ton argument (un jeu précis, une situation précise, un souvenir précis).",
        amorce: "Par exemple, …",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige le texte complet : introduction, ton argument appuyé par tes 2 exemples, conclusion.",
      },
    ],
    criteres: [
      "Chaque exemple est précis (un nom, une situation, un moment).",
      "Mes exemples illustrent vraiment mon argument.",
      "J'ai introduit mes exemples avec « par exemple », « ainsi », « comme ».",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 9,
    titre: "L'expérience personnelle",
    competence: "Raconter pour convaincre",
    lecon: [
      "Ton vécu est un argument puissant : personne ne peut le contester, et il crée une connexion avec le lecteur. Raconter une expérience personnelle bien choisie rend ton texte vivant et sincère.",
      "Attention : l'expérience doit SERVIR ton idée, pas partir dans tous les sens. Une ou deux phrases de récit, puis tu expliques ce que cette expérience prouve.",
    ],
    modele: {
      titre: "Exemple",
      texte:
        "L'an dernier, la cantine a proposé pendant une semaine un menu élaboré avec les élèves. Résultat : presque plus aucun plateau gaspillé. Cette expérience montre qu'écouter les élèves n'est pas un caprice : c'est efficace.",
    },
    etapes: [
      {
        titre: "Ton avis",
        consigne:
          "Sujet : faut-il associer les élèves aux choix des menus de la cantine ? Énonce ton avis.",
      },
      {
        titre: "Ton expérience",
        consigne:
          "Raconte en 2 ou 3 phrases une expérience vécue (à la cantine, en famille, ailleurs) qui appuie ton avis, puis explique ce qu'elle prouve.",
        amorce: "Un jour, … Cette expérience montre que…",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige le texte complet : introduction, un argument + ton expérience personnelle, conclusion.",
      },
    ],
    criteres: [
      "Mon expérience est racontée brièvement (2-3 phrases).",
      "J'explique clairement ce que mon expérience prouve.",
      "Mon récit sert mon idée principale, sans digression.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 10,
    titre: "Les faits et les chiffres",
    competence: "S'appuyer sur du solide",
    lecon: [
      "Les faits et les chiffres sont les arguments les plus difficiles à contester. « Les abeilles sont importantes » est un avis ; « les abeilles pollinisent environ un tiers de ce que nous mangeons » est un fait — et il frappe fort.",
      "Où trouver des faits ? Dans tes cours, dans des livres documentaires, sur des sites fiables (encyclopédies, sites de musées ou d'institutions). Note toujours d'où vient ton fait : un fait sans source perd sa force.",
    ],
    etapes: [
      {
        titre: "Ta recherche",
        consigne:
          "Idée principale : « Les abeilles sont des insectes essentiels. » Cherche (livres, cours, Internet avec un adulte) 3 faits qui appuient cette idée, et note-les avec leur source.",
        amorce: "Fait 1 (source : …) : …",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige un paragraphe argumenté qui défend cette idée en utilisant tes 3 faits, reliés par des connecteurs.",
      },
    ],
    criteres: [
      "J'ai trouvé 3 faits précis, pas des impressions.",
      "Je peux dire d'où vient chacun de mes faits.",
      "Mes faits appuient directement l'idée principale.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 11,
    titre: "Écrire la conclusion",
    competence: "Finir proprement",
    lecon: [
      "La conclusion redit ton idée principale — mais avec d'autres mots. Recopier ton introduction est interdit : tu dois dire la même chose autrement, en y ajoutant le poids de tous les arguments que ton lecteur vient de lire.",
      "Une bonne conclusion fait trois choses : elle reformule ton avis, elle rappelle brièvement tes raisons, et elle termine par une phrase qui « ferme » le texte avec élégance (une image, une question, un souhait).",
    ],
    modele: {
      titre: "Exemple",
      texte:
        "Plan d'un texte : Idée principale — la pêche peut être une expérience très ennuyeuse. Raisons — on attend longtemps ; on ne peut rien faire d'autre ; on peut rentrer bredouille. Conclusion possible : « Attendre des heures, immobile, pour peut-être ne rien attraper : voilà le programme d'une partie de pêche. On comprend pourquoi certains préfèrent regarder l'eau… depuis leur serviette de plage. »",
    },
    etapes: [
      {
        titre: "Le plan à conclure",
        consigne:
          "Reprends le texte que tu as écrit en semaine 7 ou 8 (ou un plan de ton choix) : recopie son idée principale et ses raisons en 3 lignes.",
      },
      {
        titre: "Ta conclusion",
        consigne:
          "Rédige une conclusion de 3 à 4 phrases : reformulation de l'avis, rappel des raisons, phrase de clôture.",
      },
      {
        titre: "Ta version finale",
        consigne: "Recopie le texte complet avec sa nouvelle conclusion.",
      },
    ],
    criteres: [
      "Ma conclusion redit mon avis SANS recopier l'introduction.",
      "Mes raisons sont rappelées en quelques mots.",
      "Ma dernière phrase ferme le texte avec style.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 12,
    titre: "L'appel à l'action",
    competence: "Faire agir le lecteur",
    lecon: [
      "Certains textes ne veulent pas seulement convaincre : ils veulent faire AGIR. L'appel à l'action dit clairement au lecteur ce qu'il doit faire : « Inscris-toi », « Éteignez les lumières », « Venez nombreux samedi ».",
      "Un bon appel à l'action est concret (une action précise), faisable (le lecteur PEUT le faire) et souvent placé à la fin, comme dernière impression.",
    ],
    etapes: [
      {
        titre: "Ta cause",
        consigne:
          "Choisis une cause qui te tient à cœur (gaspillage à la cantine, propreté de la cour, lecture, sport…). Énonce ton avis et 2 arguments.",
      },
      {
        titre: "Ton appel à l'action",
        consigne:
          "Écris 2 versions d'un appel à l'action concret et faisable pour un collégien. Garde la meilleure.",
        amorce: "Dès demain, …",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige le texte complet : introduction, arguments, conclusion terminée par ton appel à l'action.",
      },
    ],
    criteres: [
      "Mon appel à l'action demande une action précise.",
      "L'action est réellement faisable par mon lecteur.",
      "L'appel à l'action arrive en clôture du texte.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 13,
    titre: "Les connecteurs logiques",
    competence: "Relier ses idées",
    lecon: [
      "Les connecteurs logiques sont les panneaux indicateurs de ton texte : « d'abord », « ensuite », « de plus », « cependant », « en effet », « par conséquent », « enfin »… Sans eux, tes idées sont posées côte à côte ; avec eux, elles s'enchaînent.",
      "Chaque connecteur a un rôle : ajouter (de plus, en outre), opposer (mais, cependant, pourtant), expliquer (en effet, car), conclure (donc, ainsi, finalement). Utiliser le bon connecteur au bon endroit, c'est guider ton lecteur par la main.",
    ],
    etapes: [
      {
        titre: "Le texte à réparer",
        consigne:
          "Recopie ce texte en ajoutant les connecteurs qui manquent : « Le petit-déjeuner est le repas le plus important. Le corps a jeûné toute la nuit. Il a besoin d'énergie pour la matinée. Beaucoup de collégiens partent le ventre vide. Ils sont fatigués dès 10 heures. Prendre dix minutes pour manger le matin change toute la journée. »",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Écris ton propre paragraphe argumenté (sujet libre) d'au moins 6 phrases, en utilisant au moins 4 connecteurs différents. Souligne-les (ou mets-les en MAJUSCULES).",
      },
    ],
    criteres: [
      "J'ai utilisé au moins 4 connecteurs différents.",
      "Chaque connecteur joue le bon rôle (ajouter, opposer, expliquer, conclure).",
      "Mon paragraphe s'enchaîne naturellement à la lecture.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 14,
    titre: "Répondre à l'argument adverse",
    competence: "La concession",
    lecon: [
      "Les meilleurs textes argumentatifs ne font pas semblant que l'autre camp n'existe pas : ils citent un argument adverse… pour mieux le démonter. C'est la concession : « Certes…, mais… ».",
      "Exemple : « Certes, le téléphone peut distraire en classe. Mais l'interdire totalement, c'est se priver d'un outil de traduction, de calcul et de recherche que tous les adultes utilisent au travail. » En reconnaissant l'objection, tu montres que tu as réfléchi — et ta réponse n'en est que plus forte.",
    ],
    etapes: [
      {
        titre: "Les deux camps",
        consigne:
          "Sujet : faut-il supprimer les notes au collège ? Choisis ton camp, puis note le meilleur argument… du camp ADVERSE.",
      },
      {
        titre: "Ta concession",
        consigne:
          "Rédige un paragraphe « Certes…, mais… » : reconnais l'argument adverse, puis réponds-lui avec un argument plus fort.",
        amorce: "Certes, … Mais…",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige le texte complet : introduction, un argument à toi, ta concession, conclusion.",
      },
    ],
    criteres: [
      "J'ai présenté honnêtement un argument du camp adverse.",
      "Ma réponse démonte cet argument avec une vraie raison.",
      "J'ai utilisé une structure de concession (certes… mais, bien que…, il est vrai que…).",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 15,
    titre: "L'essai d'opinion : le plan détaillé",
    competence: "Préparer un texte long (1/2)",
    lecon: [
      "Cette semaine et la prochaine, tu écris ton premier essai d'opinion complet — un vrai texte structuré, comme au brevet. Première étape : le plan détaillé. Un texte long sans plan, c'est une randonnée sans carte.",
      "Ton plan détaillé note : l'accroche choisie, l'avis, 3 arguments avec pour chacun son détail/exemple/fait, l'argument adverse et ta réponse, et l'idée de conclusion. Avec ce plan, la rédaction de la semaine prochaine sera presque facile.",
    ],
    etapes: [
      {
        titre: "Choisis ton sujet",
        consigne:
          "Choisis parmi : 1) Les animaux ont-ils leur place dans les zoos ? 2) Faut-il rendre le sport quotidien obligatoire au collège ? 3) Les collégiens devraient-ils gagner de l'argent de poche en aidant à la maison ?",
      },
      {
        titre: "Ton plan détaillé",
        consigne:
          "Rédige le plan complet : accroche, avis, 3 arguments (chacun avec son exemple ou fait), argument adverse + réponse, idée de conclusion.",
        amorce:
          "Accroche : … | Avis : … | Arg. 1 + exemple : … | Arg. 2 + exemple : … | Arg. 3 + exemple : … | Concession : … | Conclusion : …",
      },
      {
        titre: "Ta version finale (le plan)",
        consigne:
          "Recopie ton plan au propre — c'est lui que tu envoies cette semaine. Garde-le précieusement : tu rédigeras le texte complet la semaine prochaine.",
      },
    ],
    criteres: [
      "Mon plan contient une accroche, un avis, 3 arguments et une conclusion.",
      "Chaque argument a son détail, exemple ou fait.",
      "J'ai prévu un argument adverse et ma réponse.",
      "Mon plan tient en une page et est clair pour moi.",
    ],
  },
  {
    semaine: 16,
    titre: "L'essai d'opinion : la rédaction",
    competence: "Rédiger un texte long (2/2)",
    lecon: [
      "Ton plan est prêt : place à la rédaction. Règle d'or : un paragraphe par idée, et des connecteurs pour passer de l'un à l'autre. Vise 20 à 30 lignes.",
      "Écris d'un seul élan en suivant le plan, sans t'arrêter pour corriger. La relecture vient APRÈS, en trois passages : 1) les idées s'enchaînent-elles ? 2) les phrases sont-elles claires ? 3) orthographe et ponctuation.",
    ],
    etapes: [
      {
        titre: "Ton plan sous les yeux",
        consigne: "Recopie le plan détaillé de la semaine dernière (ou refais-le rapidement).",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige l'essai complet (20 à 30 lignes) : introduction avec accroche, un paragraphe par argument, la concession, la conclusion. Puis fais tes trois relectures.",
      },
    ],
    criteres: [
      "Mon texte suit fidèlement mon plan.",
      "Chaque idée a son paragraphe, reliés par des connecteurs.",
      "Mon texte fait au moins 20 lignes.",
      "J'ai fait les trois relectures (idées, clarté, orthographe).",
    ],
  },
  {
    semaine: 17,
    titre: "Répondre à une citation",
    competence: "Discuter une idée d'auteur",
    lecon: [
      "Au brevet comme dans la vie, on te demandera souvent de réagir à une phrase de quelqu'un d'autre : une citation. La méthode : 1) reformule la citation avec tes mots (montre que tu l'as comprise) ; 2) dis si tu es d'accord, pas d'accord, ou entre les deux ; 3) défends ta position avec arguments et exemples.",
      "Tu as le droit d'être partiellement d'accord — c'est même souvent la position la plus intelligente : « L'auteur a raison quand…, mais il oublie que… ».",
    ],
    etapes: [
      {
        titre: "La citation",
        consigne:
          "« On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux. » (Antoine de Saint-Exupéry, Le Petit Prince). Reformule cette idée avec tes propres mots.",
        amorce: "Selon Saint-Exupéry, …",
      },
      {
        titre: "Ta position",
        consigne:
          "Es-tu d'accord ? Énonce ta position et note 2 arguments ou exemples (tirés de ta vie, de tes lectures, de films).",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige ta réponse complète (12 à 20 lignes) : reformulation, position, arguments avec exemples, conclusion.",
      },
    ],
    criteres: [
      "J'ai reformulé la citation sans la recopier.",
      "Ma position est claire (d'accord, pas d'accord, nuancée).",
      "Mes exemples viennent de ma vie, de lectures ou de films.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 18,
    titre: "La lettre argumentative",
    competence: "Écrire pour demander",
    lecon: [
      "Une lettre argumentative, c'est ton texte d'opinion habillé en lettre : elle s'adresse à une personne précise pour obtenir quelque chose de précis. Sa force : la politesse ET la solidité des arguments.",
      "Structure : formule d'appel (Madame la Principale,), présentation de ta demande, 2-3 arguments, réponse à une objection possible, formule de politesse. Le ton reste respectueux du début à la fin — on n'obtient rien en accusant.",
    ],
    etapes: [
      {
        titre: "Ta demande",
        consigne:
          "Tu écris au principal ou à la principale de ton collège pour proposer une amélioration (un club, un aménagement de la cour, un projet…). Note ta demande en une phrase et 3 arguments.",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige la lettre complète : formule d'appel, présentation de la demande, arguments, réponse à une objection (« vous pourriez penser que… mais… »), formule de politesse et signature (prénom seulement).",
        amorce: "Madame la Principale / Monsieur le Principal, …",
      },
    ],
    criteres: [
      "Ma lettre a une formule d'appel et une formule de politesse.",
      "Ma demande est précise et réaliste.",
      "Mes arguments pensent aux intérêts du destinataire, pas seulement aux miens.",
      "Le ton est poli et respectueux du début à la fin.",
    ],
  },
  {
    semaine: 19,
    titre: "Le courrier des lecteurs",
    competence: "Réagir publiquement",
    lecon: [
      "Le courrier des lecteurs, c'est l'espace d'un journal où les lecteurs réagissent à un article. C'est court, direct et signé : tu prends position publiquement, en quelques lignes percutantes.",
      "Structure : rappelle en une phrase l'article ou le sujet auquel tu réagis, donne ta position, développe UN argument fort (tu n'as pas la place pour trois), termine par une phrase marquante.",
    ],
    etapes: [
      {
        titre: "L'article imaginaire",
        consigne:
          "Le journal de ta ville a publié : « Les écrans rendent les collégiens incapables de se concentrer ». Es-tu d'accord ? Note ta position et ton meilleur argument.",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige ta lettre au courrier des lecteurs (8 à 12 lignes) : référence à l'article, position, un argument développé, phrase finale marquante, signature (prénom).",
        amorce: "Dans votre édition de la semaine dernière, vous affirmiez que…",
      },
    ],
    criteres: [
      "Ma première phrase rappelle l'article auquel je réagis.",
      "Je développe UN argument, mais à fond.",
      "Ma dernière phrase est percutante.",
      "Mon texte tient en 12 lignes maximum.",
    ],
  },
  {
    semaine: 20,
    titre: "L'article de journal",
    competence: "Informer et convaincre",
    lecon: [
      "Un article informe d'abord, puis peut défendre un point de vue. Il a un titre accrocheur, un chapeau (2-3 lignes qui résument l'essentiel), puis des paragraphes qui répondent aux questions : qui ? quoi ? où ? quand ? pourquoi ?",
      "Pour le journal du collège, un bon article mêle faits (ce qui s'est passé, des chiffres, des témoignages) et angle (ce que tu veux montrer). L'angle, c'est ta touche personnelle de journaliste.",
    ],
    etapes: [
      {
        titre: "Ton sujet et ton angle",
        consigne:
          "Choisis un sujet de la vie du collège (la cantine, un événement sportif, un club, la rentrée…). Note ton angle : que veux-tu montrer au lecteur ?",
      },
      {
        titre: "Titre et chapeau",
        consigne:
          "Écris un titre accrocheur et un chapeau de 2-3 lignes qui donne l'essentiel (qui, quoi, où, quand).",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige l'article complet (15 à 25 lignes) : titre, chapeau, 2-3 paragraphes avec au moins un fait précis et si possible un témoignage (réel ou imaginé de façon crédible).",
      },
    ],
    criteres: [
      "Mon titre donne envie de lire l'article.",
      "Mon chapeau répond à : qui, quoi, où, quand.",
      "J'ai inclus au moins un fait précis ou un témoignage.",
      "Mon angle (ce que je veux montrer) est perceptible.",
    ],
  },
  {
    semaine: 21,
    titre: "La critique",
    competence: "Juger avec des arguments",
    lecon: [
      "Une critique (de livre, de film, de jeu, de série) donne un avis argumenté pour aider le lecteur à décider : à voir ou pas ? à lire ou pas ? Elle décrit brièvement l'œuvre SANS divulgâcher, puis évalue avec des critères précis : l'histoire, les personnages, le rythme, les images ou le style…",
      "La règle d'or du critique : chaque jugement s'appuie sur un élément précis de l'œuvre. « C'est nul » n'est pas une critique ; « le héros ne change jamais d'avis, ce qui rend les 200 dernières pages prévisibles » en est une.",
    ],
    etapes: [
      {
        titre: "Ton œuvre",
        consigne:
          "Choisis un livre, film, jeu ou série que tu connais bien. Note : de quoi ça parle (2 phrases, sans divulgâcher), une note sur 10, et 3 critères d'évaluation (histoire, personnages, rythme…).",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige la critique complète (12 à 20 lignes) : présentation de l'œuvre, ton évaluation critère par critère (avec des éléments précis à chaque fois), et ta recommandation finale : pour qui est cette œuvre ?",
      },
    ],
    criteres: [
      "Je présente l'œuvre sans divulgâcher la fin.",
      "Chaque jugement s'appuie sur un élément précis de l'œuvre.",
      "J'ai évalué au moins 3 critères différents.",
      "Ma recommandation finale dit à qui l'œuvre plaira.",
    ],
  },
  {
    semaine: 22,
    titre: "Le texte documenté",
    competence: "Chercher puis écrire",
    lecon: [
      "Certains textes demandent de se documenter AVANT d'écrire : tu rassembles des faits de plusieurs sources, puis tu les organises pour défendre ton idée. C'est l'ancêtre de l'exposé — et l'exercice préféré des professeurs d'histoire-géo.",
      "Méthode : 1) note ta question ; 2) trouve 4-5 faits dans au moins 2 sources différentes ; 3) trie-les (lesquels appuient le mieux ton idée ?) ; 4) rédige en citant tes sources (« selon… »).",
    ],
    etapes: [
      {
        titre: "Ta question et ta recherche",
        consigne:
          "Question : « Pourquoi faut-il protéger les forêts ? » Trouve 4 faits dans au moins 2 sources (manuel, encyclopédie, site fiable — avec un adulte si besoin). Note chaque fait avec sa source.",
        amorce: "Fait 1 (source) : …",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige un texte documenté (12 à 20 lignes) : introduction avec ta question, développement organisé autour de tes faits (cités avec leurs sources), conclusion.",
      },
    ],
    criteres: [
      "J'ai utilisé au moins 2 sources différentes.",
      "Chaque fait important est accompagné de sa source.",
      "Mes faits sont organisés, pas listés en vrac.",
      "Ma conclusion répond à la question de départ.",
    ],
  },
  {
    semaine: 23,
    titre: "Écrire pour promouvoir",
    competence: "Le texte publicitaire",
    lecon: [
      "Le texte promotionnel (affiche, annonce, slogan) doit convaincre en très peu de mots. Ses armes : un slogan mémorable, des mots qui parlent aux émotions, des arguments-éclair, et un appel à l'action (« Rejoins-nous mardi ! »).",
      "Un bon slogan est court (moins de 8 mots), rythmé, et facile à retenir. Les jeux de mots, les répétitions et les rimes sont tes alliés.",
    ],
    etapes: [
      {
        titre: "Ton événement",
        consigne:
          "Tu dois promouvoir un événement du collège (tournoi sportif, spectacle, club, collecte solidaire…). Note l'événement, la date, le lieu et le public visé.",
      },
      {
        titre: "Trois slogans",
        consigne: "Écris 3 slogans différents. Garde le meilleur.",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige le texte de l'affiche : slogan en titre, 3 arguments-éclair (une ligne chacun), les infos pratiques, et un appel à l'action final.",
      },
    ],
    criteres: [
      "Mon slogan fait moins de 8 mots et se retient facilement.",
      "Mes arguments-éclair tiennent chacun en une ligne.",
      "Toutes les infos pratiques y sont (date, lieu, pour qui).",
      "Mon texte se termine par un appel à l'action.",
    ],
  },
  {
    semaine: 24,
    titre: "Améliorer un texte",
    competence: "Réviser comme un pro",
    lecon: [
      "Les écrivains le disent tous : écrire, c'est réécrire. Cette semaine, tu ne pars pas de zéro — tu prends un texte moyen et tu le transformes en bon texte avec tout ce que tu as appris : accroche, détails, exemples, connecteurs, concession, conclusion.",
      "Texte à améliorer : « Je pense que lire c'est bien. Il y a plein de raisons. D'abord ça apprend des mots. Aussi c'est bien pour l'école. Et puis c'est mieux que les écrans. Voilà pourquoi lire c'est bien. »",
    ],
    etapes: [
      {
        titre: "Le diagnostic",
        consigne:
          "Liste tout ce qui ne va pas dans ce texte : accroche ? détails ? exemples ? connecteurs ? conclusion ? Note au moins 4 problèmes.",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Réécris entièrement le texte (12 à 20 lignes) en corrigeant chaque problème : vraie accroche, arguments détaillés avec exemples, connecteurs variés, concession si possible, vraie conclusion.",
      },
    ],
    criteres: [
      "J'ai identifié au moins 4 problèmes dans le texte de départ.",
      "Ma version corrige chacun de ces problèmes.",
      "Mon texte final ne ressemble plus du tout au texte de départ.",
      "J'ai relu l'orthographe et la ponctuation.",
    ],
  },
  {
    semaine: 25,
    titre: "Sujet complet : la publicité et la malbouffe",
    competence: "Entraînement type brevet",
    lecon: [
      "À partir de cette semaine, tu t'entraînes en conditions réelles : un sujet, un texte complet, tous tes outils. Sujet : « Certaines personnes pensent qu'il faudrait interdire les publicités pour la malbouffe pendant les programmes destinés aux enfants et adolescents. Qu'en penses-tu ? Écris pour convaincre un lecteur de ton opinion. »",
      "Rappels : planifie avant d'écrire ; un paragraphe par idée ; des connecteurs ; des exemples ou des faits ; soigne l'orthographe ; relis-toi.",
    ],
    etapes: ETAPES_SUJET_COMPLET("la publicité pour la malbouffe"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 26,
    titre: "Sujet complet : l'uniforme au collège",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Certains établissements imposent une tenue unique à leurs élèves. Es-tu favorable ou opposé(e) à l'uniforme au collège ? Écris pour convaincre un lecteur de ton opinion. »",
      "Pense à la concession : l'autre camp a de vrais arguments (égalité ? liberté ?). Les reconnaître rendra ta position plus forte.",
    ],
    etapes: ETAPES_SUJET_COMPLET("l'uniforme au collège"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 27,
    titre: "Sujet complet : les devoirs à la maison",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Certains pays ont réduit ou supprimé les devoirs à la maison. Faut-il faire de même en France ? Écris pour convaincre un lecteur de ton opinion. »",
      "Astuce : ton expérience personnelle est ici un argument en or — tu vis les devoirs tous les soirs. Utilise-la, mais brièvement et au service de ton idée.",
    ],
    etapes: ETAPES_SUJET_COMPLET("les devoirs à la maison"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 28,
    titre: "Sujet complet : l'âge des réseaux sociaux",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Plusieurs pays veulent interdire les réseaux sociaux aux moins de 15 ans. Es-tu d'accord avec cette mesure ? Écris pour convaincre un lecteur de ton opinion. »",
      "Sujet sensible : évite le tout-blanc ou tout-noir. Les positions nuancées (« oui, mais… », « non, à condition que… ») sont souvent les plus convaincantes.",
    ],
    etapes: ETAPES_SUJET_COMPLET("l'âge minimum des réseaux sociaux"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 29,
    titre: "Sujet complet : les zoos",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Les zoos protègent-ils les animaux ou les privent-ils de liberté ? Écris pour convaincre un lecteur de ton opinion. »",
      "Ce sujet appelle des FAITS : espèces sauvées par les programmes d'élevage, conditions de vie, rôle éducatif… Une petite recherche avant d'écrire rendra ton texte bien plus solide.",
    ],
    etapes: ETAPES_SUJET_COMPLET("les zoos"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 30,
    titre: "Sujet complet : l'argent de poche",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « L'argent de poche doit-il se mériter (tâches, résultats) ou être donné sans condition ? Écris pour convaincre un lecteur de ton opinion. »",
      "Pense à ton lecteur : si tu écris pour convaincre un parent, tes arguments doivent parler à un parent (apprendre la valeur de l'argent, l'autonomie, la confiance…).",
    ],
    etapes: ETAPES_SUJET_COMPLET("l'argent de poche"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 31,
    titre: "Sujet complet : le sport obligatoire",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Faut-il rendre obligatoire 30 minutes de sport par jour au collège ? Écris pour convaincre un lecteur de ton opinion. »",
      "Les chiffres sont tes amis : temps d'écran moyen, effets du sport sur la concentration et le sommeil… Un fait bien placé vaut trois adjectifs.",
    ],
    etapes: ETAPES_SUJET_COMPLET("le sport quotidien obligatoire"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 32,
    titre: "Sujet complet : livres ou écrans",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Lire un livre ou regarder son adaptation en film : que défends-tu ? Écris pour convaincre un lecteur de ton opinion. »",
      "Le sujet parfait pour les exemples : appuie-toi sur une œuvre que tu connais dans les deux versions. Compare des éléments précis (imagination, détails perdus, émotion des images…).",
    ],
    etapes: ETAPES_SUJET_COMPLET("les livres et leurs adaptations"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 33,
    titre: "Sujet complet : les voyages scolaires",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Certains estiment que les voyages scolaires sont une perte de temps et d'argent ; d'autres y voient un moment essentiel de la scolarité. Qu'en penses-tu ? Écris pour convaincre un lecteur de ton opinion. »",
      "Structure conseillée : commence par la concession (reconnais le coût, l'organisation), puis déroule tes arguments — apprendre autrement, la vie de groupe, les souvenirs qui restent.",
    ],
    etapes: ETAPES_SUJET_COMPLET("les voyages scolaires"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 34,
    titre: "Sujet complet : agir pour la planète",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Les petits gestes individuels (tri, vélo, gourde…) servent-ils vraiment à protéger la planète ? Écris pour convaincre un lecteur de ton opinion. »",
      "Termine par un appel à l'action : c'est LE sujet où il s'impose. Concret, faisable, motivant — donne à ton lecteur une action à faire dès demain.",
    ],
    etapes: ETAPES_SUJET_COMPLET("les gestes pour la planète"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 35,
    titre: "Sujet complet : les notes au collège",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Faut-il remplacer les notes par des évaluations par compétences (acquis / en cours / à travailler) ? Écris pour convaincre un lecteur de ton opinion. »",
      "Un sujet qui te concerne directement : mets tout ce que tu sais. Accroche forte, plan solide, exemples précis, concession, conclusion avec ouverture. Montre le chemin parcouru depuis la semaine 1 !",
    ],
    etapes: ETAPES_SUJET_COMPLET("les notes au collège"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 36,
    titre: "Lettre-annonce : recrute pour ton club",
    competence: "Écrire pour recruter",
    lecon: [
      "Un club ou une équipe du collège manque de membres ? La lettre-annonce publiée dans le journal du collège doit convaincre des élèves de rejoindre l'aventure. Elle mélange enthousiasme (donner envie) et arguments concrets (ce qu'on y gagne).",
      "Pense aux freins de ton lecteur : « je ne suis pas assez fort », « je n'ai pas le temps », « je ne connais personne ». Une bonne lettre de recrutement répond à ces objections avant même qu'elles soient formulées.",
    ],
    etapes: [
      {
        titre: "Ton club et tes arguments",
        consigne:
          "Choisis un club ou une équipe (sport, théâtre, échecs, journal…) qui recrute. Note 3 raisons de le rejoindre et 2 objections possibles avec tes réponses.",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige la lettre pour le journal du collège (12 à 20 lignes) : accroche enthousiaste, présentation du club, tes 3 raisons, réponse aux objections, et appel à l'action final (quand et où s'inscrire).",
        amorce: "Tu cherches une bonne raison de rester au collège le mardi soir ? …",
      },
    ],
    criteres: [
      "Ma lettre donne envie ET donne des raisons concrètes.",
      "J'ai répondu à au moins une objection (« je ne suis pas assez fort… »).",
      "Toutes les infos pratiques y sont (quoi, quand, où, comment s'inscrire).",
      "Mon appel à l'action final est clair et motivant.",
    ],
  },
  {
    semaine: 37,
    titre: "Article : fais briller le spectacle du collège",
    competence: "Écrire pour mobiliser",
    lecon: [
      "Le spectacle de talents du collège cherche des candidats : chant, danse, magie, comédie… mais peu d'élèves osent s'inscrire. Ton article doit lever LE frein principal : la peur du regard des autres.",
      "Un article qui mobilise raconte, rassure et enthousiasme : montre ce que les participants vivent (les répétitions, les coulisses, les applaudissements), cite des exemples de talents possibles — même inattendus — et rappelle que le public vient pour encourager, pas pour juger.",
    ],
    etapes: [
      {
        titre: "Ton plan d'article",
        consigne:
          "Note : ton titre accrocheur, ton chapeau (2 lignes), 3 idées pour convaincre les hésitants, et une phrase de fin qui pousse à s'inscrire.",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige l'article complet (15 à 25 lignes) : titre, chapeau, paragraphes qui rassurent et donnent envie, appel à l'action avec les infos d'inscription.",
      },
    ],
    criteres: [
      "Mon titre et mon chapeau donnent envie de lire.",
      "Mon article répond à la peur de se montrer.",
      "J'ai donné des exemples variés de talents possibles.",
      "L'article se termine par un appel à l'action précis.",
    ],
  },
  {
    semaine: 38,
    titre: "Le flyer : fais adopter les animaux du refuge",
    competence: "Convaincre en peu de mots",
    lecon: [
      "Le refuge de ta ville déborde de chiens et de chats qui attendent une famille. Ta mission : un flyer (prospectus) à distribuer aux élèves et à leurs parents. Un flyer, c'est peu de texte — mais chaque mot doit compter.",
      "Les armes du flyer : un slogan qui touche, une ou deux phrases qui créent l'émotion, 2-3 arguments-éclair (pourquoi adopter plutôt qu'acheter), et les infos pratiques. Le lecteur doit tout comprendre en dix secondes.",
    ],
    etapes: [
      {
        titre: "Slogan et arguments",
        consigne:
          "Écris 3 slogans possibles pour l'adoption, puis 3 arguments-éclair (une ligne chacun). Garde le meilleur slogan.",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Rédige le texte complet du flyer : slogan en titre, phrase d'émotion, tes arguments-éclair, les infos pratiques du refuge (invente-les), et l'appel à l'action.",
      },
    ],
    criteres: [
      "Mon slogan se retient en une lecture.",
      "Le flyer se comprend en dix secondes.",
      "Mes arguments tiennent chacun en une ligne.",
      "Les infos pratiques et l'appel à l'action sont présents.",
    ],
  },
  {
    semaine: 39,
    titre: "Sujet complet : peut-on être trop gentil ?",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Être gentil avec les autres, tout le monde est pour. Mais peut-on être TROP gentil ? Penses-tu qu'un excès de gentillesse peut devenir un problème, ou qu'on n'est jamais trop gentil ? Écris pour convaincre un lecteur de ton opinion. »",
      "Sujet subtil : les meilleurs textes exploreront la nuance. Pense à des situations concrètes : dire oui à tout, se faire déborder, ne jamais oser dire non… ou au contraire la gentillesse qui revient toujours.",
    ],
    etapes: ETAPES_SUJET_COMPLET("l'excès de gentillesse"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 40,
    titre: "Sujet complet : des amendes contre les déchets ?",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Les déchets abandonnés défigurent les endroits les plus beaux. Une solution proposée : mettre une amende à ceux qui jettent leurs déchets par terre. Es-tu pour ou contre ? Écris pour convaincre un lecteur de ton opinion. »",
      "Pense aux deux camps : l'amende est-elle efficace ou injuste ? Y a-t-il de meilleures solutions (poubelles, éducation, ramassages citoyens) ? Ta concession n'en sera que plus forte.",
    ],
    etapes: ETAPES_SUJET_COMPLET("les amendes contre les déchets sauvages"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 41,
    titre: "Sujet complet : tout donner pour le sport ?",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Certains jeunes très doués en sport s'entraînent dur pour viser le plus haut niveau — quitte à sacrifier du temps avec leurs amis et leur famille. Penses-tu que ce sacrifice en vaut la peine ? Écris pour convaincre un lecteur de ton opinion. »",
      "Si tu es en danse-études ou en section sportive, ton expérience personnelle est ici un trésor : utilise-la. Sinon, pense aux parcours de sportifs ou d'artistes que tu admires.",
    ],
    etapes: ETAPES_SUJET_COMPLET("le sacrifice pour le haut niveau"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 42,
    titre: "Sujet complet : les cours plus tard le matin ?",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Des études montrent que les adolescents manquent de sommeil et que leur cerveau démarre lentement le matin. Faudrait-il commencer les cours à 9 h 30 au lieu de 8 h ? Écris pour convaincre un lecteur de ton opinion. »",
      "Un sujet en or pour les faits et les chiffres : besoins de sommeil des ados, effets sur la concentration… Mais pense aussi aux conséquences pratiques (transports, emploi du temps des parents, fin des cours plus tardive).",
    ],
    etapes: ETAPES_SUJET_COMPLET("l'horaire de début des cours"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 43,
    titre: "Sujet complet : une semaine sans écrans ?",
    competence: "Entraînement type brevet",
    lecon: [
      "Sujet : « Ton collège propose d'organiser une “semaine sans écrans” : ni téléphone, ni tablette, ni console pour tous les volontaires, élèves et professeurs. Bonne ou mauvaise idée ? Écris pour convaincre un lecteur de ton opinion. »",
      "Que tu sois pour ou contre, appuie-toi sur du concret : que ferait-on de ce temps ? Qu'est-ce qui manquerait vraiment ? L'expérience personnelle et les exemples précis feront la différence.",
    ],
    etapes: ETAPES_SUJET_COMPLET("la semaine sans écrans"),
    criteres: CRITERES_SUJET_COMPLET,
  },
  {
    semaine: 44,
    titre: "Sujet libre : ta cause de l'année",
    competence: "Le texte dont tu es fier/fière",
    lecon: [
      "Dernière semaine : à toi de choisir. Prends la cause qui te tient le plus à cœur — au collège, dans ta ville, dans le monde — et écris LE texte de ton année : celui que tu serais fier ou fière de faire lire.",
      "Tu as tous les outils : l'accroche, le plan, les arguments détaillés, les exemples, les faits, la concession, les connecteurs, la conclusion, l'appel à l'action. Sers-toi de tout. Et surtout : écris avec sincérité — c'est elle qui convainc le mieux.",
    ],
    etapes: [
      {
        titre: "Ta cause",
        consigne:
          "Note ta cause, ton lecteur cible (parents ? principal ? élèves ? maire ?) et ce que tu veux obtenir de lui.",
      },
      ...ETAPES_SUJET_COMPLET("ta cause de l'année"),
    ],
    criteres: [
      ...CRITERES_SUJET_COMPLET,
      "Ce texte me ressemble : je serais fier/fière de le faire lire.",
    ],
  },
  {
    semaine: 45,
    titre: "Étude d'œuvre : l'abbé Faria et Dantès",
    competence: "Préparation de l'évaluation (carnet du lecteur)",
    lecon: [
      "Cet exercice prépare l'évaluation « Edmond Dantès et l'abbé Faria », qui se fera dans le carnet du lecteur, à partir de ta lecture, du cours et de ta compréhension. La question : « Quel soutien l'abbé Faria apporte-t-il à Edmond Dantès ? »",
      "Le contexte : Edmond Dantès est condamné à la prison à vie, sans connaître les chefs d'accusation portés contre lui. Au château d'If, il rencontre l'abbé Faria, un prisonnier savant. Dans l'extrait ci-dessous (page 84, ligne 454), Faria interroge méthodiquement Dantès sur son interrogatoire — et lui fait découvrir une vérité foudroyante sur le substitut Villefort.",
      "La méthode pour répondre : 1) une introduction qui présente l'œuvre (titre, auteur) et reformule la question ; 2) un développement organisé — une forme de soutien par paragraphe, appuyée sur le TEXTE (cite-le entre guillemets !) et sur ta lecture du roman ; 3) une conclusion qui répond à la question et utilise le vocabulaire du cours (l'adjuvant).",
    ],
    support: {
      titre: "Le texte d'appui (page 84, ligne 454)",
      source: "Alexandre Dumas, Le Comte de Monte-Cristo, chapitre 5",
      extrait:
        "« Voyons, interrogez-moi, car en vérité vous voyez plus clair dans ma vie que moi-même.\n— Qui vous a interrogé ? est-ce le procureur du roi, le substitut, le juge d'instruction ?\n— C'était le substitut.\n— Jeune, ou vieux ?\n— Jeune : vingt-sept ou vingt-huit ans.\n— Bien ! pas corrompu encore, mais ambitieux déjà, dit l'abbé. Quelles furent ses manières avec vous ?\n— Douces plutôt que sévères.\n— Lui avez-vous tout raconté ?\n— Tout.\n— Et ses manières ont-elles changé dans le courant de l'interrogatoire ?\n— Un instant, elles ont été altérées, lorsqu'il eut lu la lettre qui me compromettait ; il parut comme accablé de mon malheur.\n— De votre malheur ?\n— Oui.\n— Et vous êtes bien sûr que c'était votre malheur qu'il plaignait ?\n— Il m'a donné une grande preuve de sa sympathie, du moins.\n— Laquelle ?\n— Il a brûlé la seule pièce qui pouvait me compromettre.\n— Laquelle ? la dénonciation ?\n— Non, la lettre.\n— Vous en êtes sûr ?\n— Cela s'est passé devant moi.\n— C'est autre chose ; cet homme pourrait être un plus profond scélérat que vous ne croyez.\n— Vous me faites frissonner, sur mon honneur ! dit Dantès, le monde est-il donc peuplé de tigres et de crocodiles ?\n— Oui ; seulement, les tigres et les crocodiles à deux pieds sont plus dangereux que les autres.\n— Continuons, continuons.\n— Volontiers ; il a brûlé la lettre, dites-vous ?\n— Oui, en me disant : « Vous voyez, il n'existe que cette preuve-là contre vous, et je l'anéantis. »\n— Cette conduite est trop sublime pour être naturelle.\n— Vous croyez ?\n— J'en suis sûr. À qui cette lettre était-elle adressée ?\n— À M. Noirtier, rue Coq-Héron, n° 13, à Paris.\n— Pouvez-vous présumer que votre substitut eût quelque intérêt à ce que cette lettre disparût ?\n— Peut-être ; car il m'a fait promettre deux ou trois fois, dans mon intérêt, disait-il, de ne parler à personne de cette lettre, et il m'a fait jurer de ne pas prononcer le nom qui était inscrit sur l'adresse.\n— Noirtier ? répéta l'abbé… Noirtier ? j'ai connu un Noirtier à la cour de l'ancienne reine d'Étrurie, un Noirtier qui avait été girondin sous la Révolution. Comment s'appelait votre substitut, à vous ?\n— De Villefort. »\nL'abbé éclata de rire.\nDantès le regarda avec stupéfaction.\n« Qu'avez-vous ? dit-il.\n— Voyez-vous ce rayon du jour ? demanda l'abbé.\n— Oui.\n— Eh bien ! tout est plus clair pour moi maintenant que ce rayon transparent et lumineux. Pauvre enfant, pauvre jeune homme ! Et ce magistrat a été bon pour vous ?\n— Oui.\n— Ce digne substitut a brûlé, anéanti la lettre ?\n— Oui.\n— Cet honnête pourvoyeur du bourreau vous a fait jurer de ne jamais prononcer le nom de Noirtier ?\n— Oui.\n— Ce Noirtier, pauvre aveugle que vous êtes, savez-vous ce que c'était que ce Noirtier ? Ce Noirtier, c'était son père ! »\n\nLa foudre, tombée aux pieds de Dantès, et lui creusant un abîme au fond duquel s'ouvrait l'enfer, lui eût produit un effet moins prompt, moins électrique, moins écrasant, que ces paroles inattendues. Il se leva, saisissant sa tête à deux mains, comme pour l'empêcher d'éclater.\n« Son père ! son père ! s'écria-t-il. Oh ! il faut que je sois seul pour penser à tout cela. »\nEt en arrivant dans son cachot, il tomba sur son lit, où le porte-clefs le retrouva au soir, assis, les yeux fixes, les traits contractés, mais immobile et muet comme une statue.\nPendant des heures de méditation, qui s'étaient écoulées comme des secondes, il avait pris une terrible résolution et fait un formidable serment.",
      notes: [
        "Corrompu : qui contourne la loi en échange d'une somme d'argent.",
        "Compromettait : qui met en doute son honnêteté, qui l'accuse.",
        "Scélérat : homme détestable, traître.",
        "Sublime : admirable, d'une grandeur exceptionnelle (ici, trop belle pour être honnête).",
        "Étrurie : ancien royaume d'Italie.",
        "Girondin : membre d'un groupe politique de la Révolution française.",
        "Stupéfaction : étonnement si fort qu'il laisse sans réaction.",
        "Abîme : gouffre très profond.",
        "Prompt : rapide.",
      ],
    },
    modele: {
      titre: "Exemple de la méthode, sur une autre question : « Quels obstacles Dantès affronte-t-il ? »",
      texte:
        "Dans Le Comte de Monte-Cristo d'Alexandre Dumas, le héros affronte des obstacles de plusieurs natures. D'abord des ennemis humains : le substitut Villefort, qui l'enfonce pour protéger son père (« Ce Noirtier, c'était son père ! »). Ensuite un obstacle matériel : le château d'If, forteresse entourée par la mer, dont nul ne s'échappe. Enfin un obstacle intérieur : le désespoir de la prison à vie. Ces épreuves successives font de Dantès un véritable héros de récit d'aventures. — Observe la construction : une idée par phrase, une citation ou un exemple précis à chaque fois, et une conclusion qui relie au cours.",
    },
    etapes: [
      {
        titre: "Qui est l'abbé Faria ?",
        consigne: "Réponds en une ou deux phrases simples : qui est Faria, et où Dantès le rencontre-t-il ?",
        amorce: "L'abbé Faria est un prisonnier savant que Dantès rencontre…",
      },
      {
        titre: "Que fait Faria dans le texte ?",
        consigne:
          "Relis l'extrait. Réponds simplement à ces deux questions : 1) Que fait Faria pendant tout le dialogue ? (indice : regarde comment commencent ses répliques) 2) Quelle grande vérité annonce-t-il à la fin ?",
        amorce: "1) Faria pose des questions à Dantès sur… 2) À la fin, il lui révèle que…",
      },
      {
        titre: "Pourquoi Villefort a-t-il brûlé la lettre ?",
        consigne:
          "Dantès croyait que Villefort était gentil avec lui. Faria comprend le contraire. En une ou deux phrases : pourquoi Villefort a-t-il vraiment brûlé la lettre adressée à Noirtier ?",
        amorce: "Villefort a brûlé la lettre parce que Noirtier était…",
      },
      {
        titre: "Choisis 2 citations",
        consigne:
          "Recopie 2 phrases courtes du texte que tu mettras entre guillemets dans ta rédaction. Idées : « Cette conduite est trop sublime pour être naturelle » / « Ce Noirtier, c'était son père ! » / « une terrible résolution ».",
        amorce: "Citation 1 : « … » | Citation 2 : « … »",
      },
      {
        titre: "Les 4 aides de Faria",
        consigne:
          "Complète chaque phrase avec un exemple (le texte t'aide pour la première ; ta lecture du roman pour les autres) :",
        amorce:
          "1) Faria aide Dantès à comprendre… | 2) Faria lui apprend… | 3) Faria lui redonne… | 4) Faria lui lègue…",
      },
      {
        titre: "Rédige l'introduction",
        consigne: "Complète simplement l'amorce : le titre et l'auteur y sont déjà, ajoute où est Dantès et la question posée.",
        amorce:
          "Dans Le Comte de Monte-Cristo, roman d'Alexandre Dumas, Edmond Dantès est emprisonné au château d'If sans savoir pourquoi. Il y rencontre l'abbé Faria, qui va l'aider de plusieurs manières…",
      },
      {
        titre: "Rédige le développement",
        consigne:
          "Écris un petit paragraphe (2 phrases suffisent) pour chacune des 4 aides de l'étape 5. Commence tes paragraphes par : D'abord… / Ensuite… / De plus… / Enfin… Place tes 2 citations dans le premier paragraphe (celui sur la vérité).",
        amorce: "D'abord, Faria aide Dantès à découvrir la vérité : …",
      },
      {
        titre: "Rédige la conclusion",
        consigne: "Une ou deux phrases pour finir : complète l'amorce avec le mot du cours, « adjuvant ».",
        amorce: "Ainsi, l'abbé Faria aide Dantès à tous les niveaux : c'est un véritable…",
      },
      {
        titre: "Ta version finale",
        consigne:
          "Recopie le tout à la suite : introduction, tes 4 petits paragraphes, conclusion (environ 12 à 15 lignes). Relis une fois pour les idées, une fois pour l'orthographe — attention aux noms propres : Dantès, Faria, Villefort, Noirtier. Cette version te servira pour l'évaluation dans le carnet du lecteur !",
      },
    ],
    criteres: [
      "Mon introduction donne le titre, l'auteur et la question posée.",
      "J'ai un petit paragraphe pour chaque aide de Faria (au moins 3).",
      "J'ai mis 2 citations du texte entre guillemets.",
      "Mes paragraphes commencent par D'abord, Ensuite, De plus, Enfin.",
      "Ma conclusion utilise le mot « adjuvant ».",
      "J'ai vérifié l'orthographe des noms propres (Dantès, Villefort, Noirtier…).",
    ],
  },
];

/** L'exercice d'une semaine donnée (boucle après la semaine 36). */
export function exerciceDeLaSemaine(semaine: number): ExerciceEcriture {
  const i = ((semaine - 1) % EXERCICES_ECRITURE.length + EXERCICES_ECRITURE.length) % EXERCICES_ECRITURE.length;
  return EXERCICES_ECRITURE[i];
}
