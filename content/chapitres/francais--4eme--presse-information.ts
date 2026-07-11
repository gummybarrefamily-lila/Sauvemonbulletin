import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "presse-information",
  titre: "Informer, s'informer, déformer",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Comprendre le fonctionnement de la presse et des médias : les différents types d'articles, les règles de l'information (les 5W), la différence entre fait et opinion, et développer son esprit critique face aux sources et aux fausses informations.",
  objectifs: [
    "Connaître la composition d'un journal et d'un article (une, titre, chapô, légende)",
    "Distinguer les grands types d'articles : fait divers, reportage, éditorial, interview",
    "Répondre aux questions essentielles de l'information (les 5W)",
    "Distinguer fait et opinion, information et commentaire",
    "Développer un regard critique sur les sources et repérer une fausse information",
  ],
  slides: [
    {
      titre: "À quoi sert la presse ?",
      illustration: "📰",
      visuel: "Informer le public",
      contenu: [
        "La presse a pour mission première d'informer les citoyens",
        "Elle existe sous plusieurs formes : presse écrite, radio, télévision, presse en ligne",
        "Elle joue un rôle de « quatrième pouvoir » : elle surveille et informe sur les pouvoirs politiques",
        "Elle doit respecter des règles déontologiques : vérité, vérification des sources",
      ],
      voixOff:
        "La presse a pour mission première d'informer les citoyens sur l'actualité, qu'elle soit locale, nationale ou internationale. Elle existe sous plusieurs formes : presse écrite, radio, télévision, presse en ligne. On dit parfois qu'elle est le quatrième pouvoir, car elle surveille et informe sur l'action des pouvoirs politiques, économiques et judiciaires. Pour cela, elle doit respecter des règles déontologiques, comme la recherche de la vérité et la vérification des sources.",
    },
    {
      titre: "La une et l'organisation d'un journal",
      illustration: "🗞️",
      visuel: "Une = vitrine du journal",
      contenu: [
        "La une est la première page, la vitrine du journal",
        "Elle présente les titres et images des articles les plus importants du jour",
        "Le journal est organisé en rubriques : politique, société, sport, culture, international",
        "La hiérarchisation de l'information indique son importance (taille des titres, emplacement)",
      ],
      voixOff:
        "La une est la première page du journal, sa vitrine : elle présente les titres et les images des articles les plus importants du jour. Le journal est ensuite organisé en rubriques, comme la politique, la société, le sport, la culture ou l'international. La taille des titres et leur emplacement indiquent la hiérarchisation de l'information, c'est-à-dire son importance relative.",
    },
    {
      titre: "Les éléments d'un article",
      illustration: "📝",
      visuel: "Titre + chapô + corps + légende",
      contenu: [
        "Le titre : accroche le lecteur, résume l'information en quelques mots",
        "Le chapô (ou chapeau) : court paragraphe qui résume l'essentiel de l'article",
        "Le corps de l'article : développe l'information en détail",
        "La légende : texte qui accompagne et explique une photo ou une image",
      ],
      voixOff:
        "Un article de presse est composé de plusieurs éléments. Le titre accroche le lecteur et résume l'information en quelques mots. Le chapô, ou chapeau, est un court paragraphe qui résume l'essentiel de l'article, avant son développement. Le corps de l'article développe ensuite l'information en détail. Enfin, la légende accompagne et explique une photo ou une image.",
    },
    {
      titre: "Les 5W : les questions essentielles",
      illustration: "❓",
      visuel: "Qui ? Quoi ? Où ? Quand ? Pourquoi ?",
      contenu: [
        "Un bon article d'information répond à cinq questions essentielles",
        "Qui ? (les personnes concernées) — Quoi ? (les faits)",
        "Où ? (le lieu) — Quand ? (le moment)",
        "Pourquoi ? (les causes ou raisons) — parfois Comment ?",
      ],
      voixOff:
        "Un bon article d'information répond en général à cinq questions essentielles, que l'on appelle parfois les 5W, d'après leurs initiales en anglais. Qui est concerné ? Quoi, c'est-à-dire quels sont les faits ? Où cela se passe-t-il ? Quand cela a-t-il eu lieu ? Et pourquoi, c'est-à-dire quelles en sont les causes ou les raisons ? On y ajoute parfois une sixième question : comment ?",
    },
    {
      titre: "Les grands types d'articles",
      illustration: "🗂️",
      visuel: "Fait divers • Reportage • Éditorial • Interview",
      contenu: [
        "Fait divers : événement ponctuel, souvent local (accident, vol, incident)",
        "Reportage : enquête approfondie sur le terrain, souvent illustrée de témoignages",
        "Éditorial : article d'opinion signé, qui donne le point de vue du journal",
        "Interview : questions posées à une personnalité, retranscrites au discours direct",
      ],
      voixOff:
        "Il existe plusieurs grands types d'articles. Le fait divers relate un événement ponctuel, souvent local, comme un accident ou un incident. Le reportage est une enquête approfondie menée sur le terrain, souvent illustrée de témoignages. L'éditorial est un article d'opinion signé, qui donne le point de vue du journal sur un sujet. L'interview retranscrit les questions posées à une personnalité et ses réponses, généralement au discours direct.",
    },
    {
      titre: "Fait et opinion : ne pas confondre",
      illustration: "⚖️",
      visuel: "Fait = vérifiable / Opinion = point de vue",
      contenu: [
        "Un fait est une information vérifiable, objective : « Il a plu hier à Paris. »",
        "Une opinion est un point de vue, une appréciation personnelle : « Ce film est excellent. »",
        "Un article d'information doit distinguer clairement faits et commentaires",
        "Des expressions comme « je pense que », « à mon avis » signalent une opinion",
      ],
      voixOff:
        "Il est essentiel de distinguer le fait de l'opinion. Un fait est une information vérifiable et objective, comme il a plu hier à Paris. Une opinion est un point de vue, une appréciation personnelle, comme ce film est excellent. Un bon article d'information doit distinguer clairement les faits des commentaires. Des expressions comme je pense que ou à mon avis signalent en général une opinion et non un fait.",
    },
    {
      titre: "Vérifier ses sources et éviter les fausses informations",
      illustration: "🔍",
      visuel: "Qui dit ça ? D'où vient l'info ?",
      contenu: [
        "Une source est l'origine d'une information (témoin, document, agence de presse)",
        "Il faut croiser plusieurs sources fiables avant de croire une information",
        "Fake news (fausse information) : information inventée ou déformée, diffusée volontairement ou non",
        "Réflexes utiles : vérifier l'auteur, la date, comparer avec d'autres médias fiables",
      ],
      voixOff:
        "Une source est l'origine d'une information : un témoin, un document, une agence de presse. Avant de croire une information, il faut croiser plusieurs sources fiables. On appelle fake news une fausse information, inventée ou déformée, diffusée volontairement ou par erreur. Pour s'en méfier, quelques réflexes utiles : vérifier qui est l'auteur, à quelle date l'information a été publiée, et comparer avec d'autres médias fiables.",
    },
    {
      titre: "L'importance de l'esprit critique",
      illustration: "🧠",
      visuel: "Douter, vérifier, comparer",
      contenu: [
        "S'informer suppose de garder un esprit critique face à toute information",
        "Se demander : qui parle ? dans quel but ? avec quelles preuves ?",
        "Toute image ou vidéo peut être sortie de son contexte ou manipulée",
        "S'informer auprès de sources professionnelles et variées reste la meilleure protection",
      ],
      voixOff:
        "S'informer suppose de garder un esprit critique face à toute information reçue. Il faut se demander qui parle, dans quel but, et avec quelles preuves. Une image ou une vidéo peut très bien être sortie de son contexte ou manipulée. La meilleure protection contre la désinformation reste de s'informer auprès de sources professionnelles et variées, et de ne jamais se fier à une seule source.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "La presse informe, hiérarchise l'actualité (une, rubriques) et emploie des types d'articles variés",
        "Un article répond aux 5W : qui, quoi, où, quand, pourquoi (comment)",
        "Fait (vérifiable) ≠ opinion (point de vue) : un bon article les distingue",
        "Toujours vérifier ses sources et garder un esprit critique face aux informations",
      ],
      voixOff:
        "Pour résumer, la presse informe les citoyens, hiérarchise l'actualité sur sa une et dans ses rubriques, et emploie des types d'articles variés, du fait divers à l'éditorial. Un bon article répond aux cinq questions essentielles : qui, quoi, où, quand, pourquoi. Il faut toujours distinguer un fait, vérifiable, d'une opinion, qui reste un point de vue personnel. Enfin, garder un esprit critique et vérifier ses sources est indispensable pour ne pas se laisser tromper par de fausses informations.",
    },
  ],
  fiche: {
    intro:
      "La presse informe les citoyens à travers différents supports (écrit, radio, télévision, en ligne) et différents types d'articles. Comprendre son organisation, distinguer les faits des opinions et vérifier ses sources sont des compétences essentielles pour développer son esprit critique.",
    sections: [
      {
        titre: "L'organisation de la presse",
        points: [
          "Une : première page, présente les titres les plus importants du jour",
          "Rubriques : politique, société, sport, culture, international",
          "Article : titre, chapô, corps de l'article, légende (pour une image)",
        ],
      },
      {
        titre: "Les 5W et les types d'articles",
        points: [
          "Les 5W : Qui ? Quoi ? Où ? Quand ? Pourquoi ? (parfois + Comment ?)",
          "Fait divers, reportage, éditorial (opinion signée), interview",
        ],
      },
      {
        titre: "Fait et opinion",
        points: [
          "Fait : information vérifiable, objective",
          "Opinion : point de vue personnel, appréciation (« je pense que », « à mon avis »)",
          "Un article d'information doit distinguer clairement les deux",
        ],
      },
      {
        titre: "Vérifier ses sources et esprit critique",
        points: [
          "Source : origine d'une information (témoin, document, agence de presse)",
          "Fake news : fausse information, inventée ou déformée",
          "Réflexes : croiser les sources, vérifier auteur et date, comparer avec des médias fiables",
        ],
      },
    ],
    audio:
      "Fiche de révision : informer, s'informer, déformer. La presse informe les citoyens à travers différents supports : presse écrite, radio, télévision, presse en ligne. La une présente les titres les plus importants, et le journal s'organise en rubriques comme la politique ou le sport. Un article comprend un titre, un chapô, un corps de texte et parfois une légende. Un bon article répond aux cinq questions essentielles, les 5W : qui, quoi, où, quand et pourquoi. On distingue plusieurs types d'articles : le fait divers, le reportage, l'éditorial, qui exprime une opinion signée, et l'interview. Il est essentiel de distinguer un fait, information vérifiable, d'une opinion, point de vue personnel. Enfin, pour éviter les fausses informations, appelées fake news, il faut croiser ses sources, vérifier l'auteur et la date, et garder un esprit critique en toute circonstance.",
  },
  memoCards: [
    {
      recto: "Qu'est-ce que la une d'un journal ?",
      verso: "La première page, qui présente les titres et images des articles les plus importants du jour.",
    },
    {
      recto: "Quels sont les éléments d'un article de presse ?",
      verso: "Le titre, le chapô (résumé), le corps de l'article, et parfois une légende pour une image.",
    },
    {
      recto: "Que signifient les 5W ?",
      verso: "Les cinq questions essentielles d'un article : Qui ? Quoi ? Où ? Quand ? Pourquoi ?",
    },
    {
      recto: "Qu'est-ce qu'un éditorial ?",
      verso: "Un article d'opinion signé, qui exprime le point de vue du journal sur un sujet.",
    },
    {
      recto: "Différence entre fait et opinion ?",
      verso: "Le fait est une information vérifiable et objective ; l'opinion est un point de vue personnel.",
    },
    {
      recto: "Qu'est-ce qu'une source d'information ?",
      verso: "L'origine d'une information : un témoin, un document, une agence de presse.",
    },
    {
      recto: "Qu'est-ce qu'une fake news ?",
      verso: "Une fausse information, inventée ou déformée, diffusée volontairement ou non.",
    },
    {
      recto: "Cite deux réflexes pour vérifier une information.",
      verso: "Croiser plusieurs sources fiables ; vérifier l'auteur et la date de publication.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La mission première de la presse est de :",
      choix: ["divertir uniquement", "informer les citoyens", "vendre des produits", "raconter des fictions"],
      bonneReponse: 1,
      explication: "Informer le public sur l'actualité est la mission première de la presse.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment s'appelle la première page d'un journal ?",
      choix: ["Le chapô", "La légende", "La une", "L'éditorial"],
      bonneReponse: 2,
      explication: "La une est la vitrine du journal, elle présente les titres les plus importants du jour.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite trois des cinq questions essentielles (les 5W) auxquelles répond un article d'information.",
      reponse: "Par exemple : Qui ? Quoi ? Où ? (on peut aussi citer Quand ? et Pourquoi ?)",
      explication: "Ces questions permettent de couvrir l'essentiel d'une information.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un fait divers relate en général :",
      choix: ["une opinion du journaliste", "un événement ponctuel, souvent local", "une interview de ministre", "un éditorial politique"],
      bonneReponse: 1,
      explication: "Le fait divers relate un événement isolé, comme un accident ou un incident.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« À mon avis, ce nouveau stade est une réussite. » Cette phrase est :",
      choix: ["un fait vérifiable", "une opinion", "une question", "une légende"],
      bonneReponse: 1,
      explication: "L'expression « à mon avis » signale clairement un point de vue personnel, donc une opinion.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre un fait et une opinion, avec un exemple pour chacun.",
      reponse: "Un fait est une information vérifiable et objective, par exemple « Le match a eu lieu samedi. » Une opinion est un point de vue personnel, par exemple « Ce match était le plus beau de la saison. »",
      explication: "Le fait peut être prouvé ou vérifié ; l'opinion dépend du jugement de celui qui l'exprime.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un éditorial et en quoi se distingue-t-il d'un article d'information classique ?",
      reponse: "Un éditorial est un article signé qui exprime une opinion, un point de vue du journal ou du journaliste sur un sujet d'actualité, alors qu'un article d'information classique cherche avant tout à rapporter des faits vérifiés, de façon la plus neutre possible.",
      explication: "L'éditorial assume son caractère subjectif, contrairement à l'article d'information.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que faut-il faire avant de croire une information trouvée sur internet ?",
      choix: [
        "La partager immédiatement à tout le monde",
        "Vérifier la source, l'auteur et croiser avec d'autres médias fiables",
        "Rien, si elle a beaucoup de « likes » c'est qu'elle est vraie",
        "Faire confiance uniquement au titre"
      ],
      bonneReponse: 1,
      explication: "La vérification des sources est indispensable pour éviter de propager de fausses informations.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi une image peut être trompeuse même si elle est authentique.",
      reponse: "Une image authentique peut être trompeuse si elle est sortie de son contexte : par exemple une photo ancienne présentée comme récente, ou une photo prise dans un autre pays présentée comme un événement local. La légende qui l'accompagne peut alors déformer la réalité, même sans que l'image elle-même soit truquée.",
      explication: "La manipulation ne concerne pas seulement des images truquées : le contexte et la légende jouent un rôle essentiel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un chapô (2 à 3 phrases) pour un article annonçant l'ouverture d'une nouvelle bibliothèque dans ta ville, en respectant la règle des 5W.",
      reponse: "Exemple de corrigé : « Depuis lundi, les habitants de la ville peuvent découvrir la nouvelle médiathèque municipale, installée place de la Mairie. Financé par la ville, cet équipement de 2000 mètres carrés doit permettre à tous les âges d'accéder gratuitement à la lecture et à la culture. »",
      explication: "On vérifie la présence d'au moins quatre des cinq W : quoi (ouverture d'une médiathèque), qui (la ville, les habitants), où (place de la Mairie), quand (depuis lundi), pourquoi (favoriser l'accès à la culture).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un article titre : « Une célébrité affirme que ce fruit guérit toutes les maladies. » Explique pourquoi il faut se méfier de cette information et comment la vérifier.",
      reponse: "Il faut se méfier car l'affirmation vient d'une célébrité et non d'un expert scientifique, et une affirmation aussi générale (« toutes les maladies ») est peu crédible sur le plan médical. Pour la vérifier, on peut chercher des études scientifiques sérieuses sur le sujet, consulter des sources médicales reconnues, et voir si d'autres médias fiables confirment ou démentent cette information.",
      explication: "La notoriété d'une personne ne garantit pas la fiabilité de ses propos, surtout hors de son domaine de compétence.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi dit-on parfois que la presse est le « quatrième pouvoir » ?",
      choix: [
        "Parce qu'elle a plus de pouvoir que le gouvernement",
        "Parce qu'elle surveille et informe sur l'action des pouvoirs politiques, économiques et judiciaires",
        "Parce qu'elle est financée par l'État",
        "Parce qu'elle existe depuis quatre siècles"
      ],
      bonneReponse: 1,
      explication: "La presse joue un rôle de contre-pouvoir en informant les citoyens sur l'action des autres pouvoirs.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le chapô d'un article est :",
      choix: ["le titre principal", "un court résumé au début de l'article", "une photo", "la signature du journaliste"],
      bonneReponse: 1,
      explication: "Le chapô résume l'essentiel de l'article avant son développement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'une légende, dans un article de presse ?",
      reponse: "C'est le texte qui accompagne et explique une photo ou une image.",
      explication: "La légende aide le lecteur à comprendre le contenu de l'image.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi est-il important de croiser plusieurs sources avant de croire une information ?",
      reponse: "Parce qu'une seule source peut se tromper, être partiale ou diffuser une fausse information ; en croisant plusieurs sources fiables, on peut vérifier la cohérence et la véracité de l'information.",
      explication: "C'est un réflexe essentiel d'esprit critique face à l'information.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une interview retranscrit généralement :",
      choix: ["un discours indirect", "les questions et réponses au discours direct", "uniquement des opinions du journaliste", "des statistiques uniquement"],
      bonneReponse: 1,
      explication: "L'interview rapporte fidèlement les paroles échangées, souvent au discours direct.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple d'expression qui signale généralement une opinion plutôt qu'un fait.",
      reponse: "Par exemple : « je pense que », « à mon avis », « il me semble que » (ou un adjectif évaluatif comme « magnifique », « scandaleux »).",
      explication: "Ces expressions marquent l'intervention du jugement personnel de celui qui s'exprime.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Informer, s'informer, déformer",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Une rubrique de journal est :",
          choix: ["la première page", "une catégorie thématique (sport, culture...)", "une légende d'image", "une source d'information"],
          bonneReponse: 1,
          explication: "Les rubriques organisent le journal par thèmes : politique, société, sport, culture...",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite les cinq questions essentielles d'un article d'information (les 5W).",
          reponse: "Qui ? Quoi ? Où ? Quand ? Pourquoi ?",
          explication: "On peut y ajouter une sixième question : Comment ?",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel type d'article exprime une opinion signée par le journal ?",
          choix: ["Le fait divers", "L'éditorial", "L'interview", "La légende"],
          bonneReponse: 1,
          explication: "L'éditorial est un article d'opinion, contrairement à l'article d'information neutre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre un article de reportage et un fait divers.",
          reponse: "Le fait divers relate un événement ponctuel et souvent bref, généralement local, comme un accident. Le reportage est une enquête plus approfondie, menée sur le terrain, souvent enrichie de témoignages et d'une analyse plus poussée du sujet.",
          explication: "Le reportage suppose un travail d'enquête plus long que le simple compte-rendu d'un fait divers.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi une information partagée massivement sur les réseaux sociaux n'est-elle pas forcément vraie ?",
          reponse: "Parce que la popularité d'une information (nombre de partages, de « likes ») ne garantit en rien sa véracité : une fausse information peut se diffuser très rapidement, parfois plus vite qu'une information vraie, sans avoir été vérifiée par des professionnels.",
          explication: "Il faut distinguer la popularité d'une information de sa fiabilité, qui dépend de la vérification des sources.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court article de fait divers (4 à 5 phrases) sur un thème de ton choix, en respectant la règle des 5W.",
          reponse: "Exemple de corrigé : « Un chat coincé pendant deux jours dans un arbre. Hier après-midi, les pompiers de la ville sont intervenus rue des Lilas pour secourir un chat resté bloqué en haut d'un arbre depuis deux jours. Alertés par les voisins inquiets, ils ont utilisé une grande échelle pour récupérer l'animal, sain et sauf. Le chat a aussitôt retrouvé sa propriétaire, soulagée. »",
          explication: "On vérifie que le texte répond aux 5W : qui (les pompiers, le chat, la propriétaire), quoi (sauvetage), où (rue des Lilas), quand (hier après-midi), pourquoi/comment (le chat était coincé).",
        },
      ],
    },
    {
      titre: "Examen 2 — Informer, s'informer, déformer",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un fait est une information :",
          choix: ["forcément fausse", "vérifiable et objective", "toujours une opinion", "impossible à prouver"],
          bonneReponse: 1,
          explication: "Le fait se distingue de l'opinion par son caractère vérifiable et objectif.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une fake news ?",
          reponse: "Une fausse information, inventée ou déformée, diffusée volontairement ou par erreur.",
          explication: "Les fake news peuvent circuler très vite, notamment sur les réseaux sociaux.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que faut-il vérifier en priorité face à une information douteuse trouvée en ligne ?",
          choix: [
            "Le nombre de partages",
            "L'auteur, la date et la fiabilité de la source",
            "La couleur du site internet",
            "Rien, il faut la croire par principe"
          ],
          bonneReponse: 1,
          explication: "Vérifier l'auteur, la date et croiser avec d'autres sources fiables est le réflexe essentiel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi le titre d'un article doit être choisi avec soin.",
          reponse: "Parce que le titre est souvent la seule partie que beaucoup de lecteurs voient ou lisent réellement : un titre trompeur, trop sensationnel ou déformant les faits peut donner une impression fausse de l'article, même si le contenu est plus nuancé.",
          explication: "On parle parfois de titre « putaclic » quand il exagère volontairement pour attirer des clics, au détriment de l'exactitude.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Distingue le fait de l'opinion dans ces deux phrases : « Le concert a duré deux heures. » / « C'était le meilleur concert de l'année. »",
          reponse: "« Le concert a duré deux heures » est un fait, vérifiable objectivement (par exemple avec les horaires). « C'était le meilleur concert de l'année » est une opinion, un jugement personnel qui dépend des goûts de celui qui l'exprime.",
          explication: "La durée est mesurable ; la qualité « meilleur » dépend d'une appréciation subjective.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade partage une information choquante trouvée sur un site inconnu, sans vérifier. Explique-lui les risques de ce comportement et donne-lui deux conseils.",
          reponse: "Le risque est de diffuser une fausse information (fake news), de tromper d'autres personnes et de perdre en crédibilité si l'information s'avère fausse. Conseils : vérifier la fiabilité du site et de l'auteur avant de partager, et croiser l'information avec au moins un autre média reconnu avant de la relayer.",
          explication: "La diffusion rapide et non vérifiée d'informations est l'un des principaux mécanismes de propagation des fake news.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La presse informe les citoyens à travers différents supports : presse écrite, radio, télévision, presse en ligne.",
    "La une est la vitrine du journal ; le journal s'organise en rubriques (politique, sport, culture...).",
    "Un article contient un titre, un chapô, un corps de texte, parfois une légende.",
    "Les 5W : Qui ? Quoi ? Où ? Quand ? Pourquoi ? — questions essentielles d'un bon article.",
    "Distinguer fait (vérifiable, objectif) et opinion (point de vue personnel, subjectif).",
    "Toujours croiser ses sources, vérifier auteur et date, et garder un esprit critique face aux fake news.",
  ],
};

export default chapitre;
