import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "union-europeenne",
  titre: "La France et l'Union européenne",
  matiere: "histoire-geo",
  niveau: "3eme",
  description:
    "Comprendre les grandes étapes de la construction européenne depuis 1951, le fonctionnement des institutions de l'Union européenne, la place de la France dans l'UE, ainsi que les avantages et les limites de cette construction commune.",
  objectifs: [
    "Retracer les grandes étapes de la construction européenne : CECA (1951), traité de Rome (1957), traité de Maastricht (1992)",
    "Identifier les principales institutions de l'Union européenne et leur rôle",
    "Comprendre les avantages concrets de l'UE pour la France : marché unique, euro, espace Schengen, politique agricole commune",
    "Analyser la place et le poids de la France, État fondateur, au sein de l'Union européenne",
    "Identifier les limites et les défis actuels de la construction européenne (Brexit, décisions communes, disparités)",
  ],
  slides: [
    {
      titre: "Pourquoi construire l'Europe après 1945 ?",
      illustration: "🕊️",
      visuel: "Après 1945 : plus jamais la guerre",
      contenu: [
        "Après deux guerres mondiales, l'Europe est ruinée et divisée",
        "Objectif : garantir la paix entre des pays qui se sont longtemps affrontés, en particulier la France et l'Allemagne",
        "Idée : lier les économies européennes pour rendre la guerre impossible entre elles",
        "Le contexte de la guerre froide encourage aussi l'union des pays d'Europe de l'Ouest",
      ],
      voixOff:
        "Après les destructions de deux guerres mondiales, les pays d'Europe cherchent à garantir une paix durable, en particulier entre la France et l'Allemagne, qui se sont affrontées à plusieurs reprises. L'idée centrale est de lier étroitement les économies européennes pour rendre une nouvelle guerre impossible entre elles. Le contexte de la guerre froide, qui divise le continent, encourage également les pays d'Europe de l'Ouest à s'unir.",
    },
    {
      titre: "1951-1957 : les débuts de la construction européenne",
      illustration: "⚙️",
      visuel: "1951 : CECA — 1957 : traité de Rome",
      contenu: [
        "1951 : traité de Paris, création de la Communauté européenne du charbon et de l'acier (CECA), six pays fondateurs",
        "La CECA met en commun les productions de charbon et d'acier, ressources essentielles à la guerre",
        "1957 : traité de Rome, création de la Communauté économique européenne (CEE)",
        "Objectif de la CEE : créer un marché commun, sans droits de douane entre les pays membres",
      ],
      voixOff:
        "En 1951, le traité de Paris crée la Communauté européenne du charbon et de l'acier, la CECA, qui rassemble six pays fondateurs, dont la France et l'Allemagne. En mettant en commun ces ressources essentielles à l'industrie de guerre, l'objectif est de rendre un nouveau conflit impossible. En 1957, le traité de Rome va plus loin en créant la Communauté économique européenne, la CEE, qui vise à établir un marché commun, sans droits de douane entre les pays membres.",
    },
    {
      titre: "Élargissements et approfondissement",
      illustration: "➕",
      visuel: "De 6 à 27 pays membres",
      contenu: [
        "La Communauté européenne s'élargit progressivement : Royaume-Uni, Irlande, Danemark (1973), Espagne, Portugal (1986)...",
        "1995 : entrée de l'Autriche, de la Finlande et de la Suède",
        "2004 : élargissement majeur vers l'Europe centrale et orientale (10 nouveaux pays)",
        "Aujourd'hui, l'Union européenne compte 27 États membres",
      ],
      voixOff:
        "Au fil des décennies, la Communauté européenne s'élargit à de nouveaux pays : le Royaume-Uni, l'Irlande et le Danemark en 1973, l'Espagne et le Portugal en 1986, puis l'Autriche, la Finlande et la Suède en 1995. En 2004, un élargissement majeur intègre dix nouveaux pays d'Europe centrale et orientale, qui avaient longtemps appartenu au bloc communiste. Aujourd'hui, l'Union européenne rassemble vingt-sept États membres.",
    },
    {
      titre: "1992 : le traité de Maastricht",
      illustration: "🇪🇺",
      visuel: "Traité de Maastricht, 1992",
      contenu: [
        "1992 : le traité de Maastricht transforme la CEE en Union européenne (UE)",
        "Il crée une citoyenneté européenne, en plus de la citoyenneté nationale",
        "Il prépare la création d'une monnaie unique, l'euro",
        "L'UE développe des compétences au-delà de l'économie : environnement, sécurité, justice",
      ],
      voixOff:
        "En 1992, le traité de Maastricht marque une étape décisive : il transforme la Communauté économique européenne en Union européenne. Il crée une citoyenneté européenne, qui s'ajoute à la citoyenneté nationale de chaque habitant, et prépare la création d'une monnaie unique. L'Union européenne développe alors des compétences qui dépassent largement le seul domaine économique, comme l'environnement, la sécurité ou la justice.",
    },
    {
      titre: "L'euro et l'espace Schengen",
      illustration: "💶",
      visuel: "Euro (2002) — Schengen",
      contenu: [
        "1er janvier 2002 : l'euro devient la monnaie de la plupart des pays de l'UE, dont la France",
        "L'espace Schengen supprime les contrôles aux frontières entre les pays qui en font partie",
        "Ces deux outils facilitent la libre circulation des personnes, des biens et des capitaux",
        "Tous les pays de l'UE n'utilisent pas l'euro ni ne font partie de l'espace Schengen",
      ],
      voixOff:
        "Le 1er janvier 2002, l'euro devient la monnaie utilisée par la plupart des pays de l'Union européenne, dont la France, remplaçant le franc. L'espace Schengen, quant à lui, supprime les contrôles aux frontières entre les pays qui y participent, ce qui facilite grandement les déplacements. Ensemble, l'euro et l'espace Schengen symbolisent la libre circulation des personnes, des biens et des capitaux au sein de l'Union, même si tous les États membres n'y participent pas.",
    },
    {
      titre: "Les institutions de l'Union européenne",
      illustration: "🏛️",
      visuel: "Parlement, Commission, Conseil",
      contenu: [
        "Le Parlement européen : élu au suffrage universel par les citoyens européens, vote les lois",
        "La Commission européenne : propose les lois et veille à leur application",
        "Le Conseil de l'Union européenne et le Conseil européen : représentent les États membres",
        "Ces institutions travaillent ensemble pour décider des politiques communes",
      ],
      voixOff:
        "L'Union européenne fonctionne grâce à plusieurs institutions. Le Parlement européen, élu directement par les citoyens de tous les pays membres, vote les lois européennes. La Commission européenne propose ces lois et veille à leur bonne application. Le Conseil de l'Union européenne et le Conseil européen réunissent les représentants des gouvernements des États membres. Ensemble, ces institutions décident des politiques communes de l'Union.",
    },
    {
      titre: "La France, État fondateur au cœur de l'UE",
      illustration: "🇫🇷",
      visuel: "La France dans l'UE",
      contenu: [
        "La France est l'un des six États fondateurs de la construction européenne",
        "Elle bénéficie fortement de la politique agricole commune (PAC), qui soutient les agriculteurs",
        "Elle reçoit aussi des fonds européens (comme le FEDER) pour ses régions les moins développées",
        "La France a le siège du Parlement européen à Strasbourg",
      ],
      voixOff:
        "La France est l'un des six États fondateurs de la construction européenne. Elle est l'une des principales bénéficiaires de la politique agricole commune, qui soutient financièrement les agriculteurs européens. Elle reçoit également des fonds européens pour développer certaines de ses régions. Symbole de cette place centrale, le Parlement européen tient une partie de ses séances à Strasbourg, en France.",
    },
    {
      titre: "Les limites et les défis de l'Union européenne",
      illustration: "⚠️",
      visuel: "Brexit, 2020",
      contenu: [
        "Les décisions communes sont parfois difficiles à prendre entre 27 États aux intérêts différents",
        "31 janvier 2020 : le Royaume-Uni quitte l'Union européenne, c'est le « Brexit »",
        "Des inégalités de développement subsistent entre les régions de l'UE",
        "L'UE doit aussi répondre à de nouveaux défis : migrations, climat, sécurité",
      ],
      voixOff:
        "L'Union européenne rencontre aussi des limites. Prendre des décisions communes entre vingt-sept États, aux intérêts parfois très différents, n'est pas toujours facile. Le 31 janvier 2020, le Royaume-Uni quitte officiellement l'Union européenne : c'est le Brexit, une première dans l'histoire de la construction européenne. Des inégalités de développement subsistent également entre les régions de l'Union, qui doit aussi faire face à de nouveaux défis, comme les migrations, le changement climatique ou la sécurité.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1951 : CECA ; 1957 : traité de Rome, CEE ; 1992 : traité de Maastricht, naissance de l'UE",
        "2002 : mise en circulation de l'euro ; espace Schengen : libre circulation des personnes",
        "Institutions : Parlement européen, Commission européenne, Conseil de l'UE",
        "La France, État fondateur, bénéficie de la PAC et des fonds européens",
        "2020 : Brexit, le Royaume-Uni quitte l'UE — l'Union doit relever de nouveaux défis",
      ],
      voixOff:
        "Résumons. La construction européenne débute en 1951 avec la CECA, se poursuit avec le traité de Rome en 1957, puis franchit une étape décisive en 1992 avec le traité de Maastricht, qui crée l'Union européenne. L'euro, en circulation depuis 2002, et l'espace Schengen facilitent la vie quotidienne des citoyens européens. Les institutions, Parlement, Commission et Conseil, décident ensemble des politiques communes. La France, État fondateur, occupe une place centrale dans l'UE, notamment grâce à la politique agricole commune. Mais l'Union rencontre aussi des limites, illustrées par le Brexit en 2020. Bravo, tu es prêt pour le brevet sur ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "Depuis 1951, la construction européenne unit progressivement les pays d'Europe pour garantir la paix et développer une intégration économique et politique de plus en plus poussée, dont la France, État fondateur, est un acteur central.",
    sections: [
      {
        titre: "Les grandes étapes de la construction européenne",
        points: [
          "1951 : traité de Paris, création de la CECA (six pays fondateurs, dont la France)",
          "1957 : traité de Rome, création de la Communauté économique européenne (CEE), marché commun",
          "1992 : traité de Maastricht, naissance de l'Union européenne (UE), citoyenneté européenne",
          "Élargissements successifs : de 6 pays en 1957 à 27 pays aujourd'hui",
        ],
      },
      {
        titre: "Une intégration économique poussée",
        points: [
          "2002 : mise en circulation de l'euro, monnaie unique de la plupart des pays de l'UE",
          "Espace Schengen : suppression des contrôles aux frontières internes",
          "Politique agricole commune (PAC) : soutien financier aux agriculteurs européens",
        ],
      },
      {
        titre: "Le fonctionnement des institutions européennes",
        points: [
          "Le Parlement européen : élu au suffrage universel, vote les lois",
          "La Commission européenne : propose les lois, veille à leur application",
          "Le Conseil de l'UE et le Conseil européen : représentent les gouvernements des États membres",
        ],
      },
      {
        titre: "La France dans l'UE : atouts et défis communs",
        points: [
          "La France, État fondateur, bénéficie fortement de la PAC et des fonds européens",
          "Le Parlement européen siège en partie à Strasbourg",
          "Défis : décisions communes difficiles, disparités régionales, Brexit (2020), migrations, climat",
        ],
      },
    ],
    audio:
      "Fiche de révision : la France et l'Union européenne. Après les destructions de la Seconde Guerre mondiale, les pays d'Europe cherchent à garantir la paix en unissant leurs économies. En 1951, le traité de Paris crée la Communauté européenne du charbon et de l'acier, avec six pays fondateurs dont la France. En 1957, le traité de Rome crée la Communauté économique européenne et son marché commun. En 1992, le traité de Maastricht transforme cette communauté en Union européenne, qui compte aujourd'hui vingt-sept États membres après plusieurs élargissements. Depuis 2002, l'euro est la monnaie de la plupart des pays membres, et l'espace Schengen permet la libre circulation des personnes sans contrôle aux frontières internes. L'Union européenne fonctionne grâce à ses institutions : le Parlement européen, élu par les citoyens, la Commission européenne, qui propose les lois, et le Conseil de l'Union européenne, qui représente les gouvernements. La France, État fondateur, occupe une place centrale, notamment grâce à la politique agricole commune. Mais l'Union européenne rencontre aussi des limites, comme le montre le départ du Royaume-Uni en 2020, le Brexit, et doit relever de nouveaux défis communs comme les migrations ou le changement climatique.",
  },
  memoCards: [
    { recto: "Pourquoi les pays d'Europe s'unissent-ils après 1945 ?", verso: "Pour garantir la paix, notamment entre la France et l'Allemagne, en liant étroitement leurs économies." },
    { recto: "Qu'est-ce que la CECA (1951) ?", verso: "La Communauté européenne du charbon et de l'acier, créée par six pays fondateurs (dont la France), qui met en commun ces ressources stratégiques." },
    { recto: "Que crée le traité de Rome (1957) ?", verso: "La Communauté économique européenne (CEE) et un marché commun sans droits de douane entre les pays membres." },
    { recto: "Que change le traité de Maastricht (1992) ?", verso: "Il transforme la CEE en Union européenne (UE), crée la citoyenneté européenne et prépare la monnaie unique." },
    { recto: "Depuis quand l'euro est-il en circulation ?", verso: "Depuis le 1er janvier 2002, dans la plupart des pays de l'UE, dont la France." },
    { recto: "Quelles sont les principales institutions de l'UE ?", verso: "Le Parlement européen (élu, vote les lois), la Commission européenne (propose les lois) et le Conseil de l'UE (représente les États membres)." },
    { recto: "Qu'est-ce que la politique agricole commune (PAC) ?", verso: "Une politique européenne qui soutient financièrement les agriculteurs ; la France en est l'une des principales bénéficiaires." },
    { recto: "Qu'est-ce que le Brexit ?", verso: "Le départ du Royaume-Uni de l'Union européenne, effectif le 31 janvier 2020." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année la CECA est-elle créée ?",
      choix: ["1945", "1951", "1957", "1992"],
      bonneReponse: 1,
      explication: "Le traité de Paris crée la Communauté européenne du charbon et de l'acier en 1951.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que crée le traité de Rome en 1957 ?",
      choix: ["L'Union européenne", "La Communauté économique européenne (CEE)", "L'euro", "L'espace Schengen"],
      bonneReponse: 1,
      explication: "La CEE établit un marché commun entre les pays membres, sans droits de douane.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Depuis quelle année l'euro est-il en circulation ?",
      reponse: "Depuis le 1er janvier 2002.",
      explication: "L'euro remplace les monnaies nationales, dont le franc en France.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de pays étaient membres fondateurs de la construction européenne en 1951 et 1957 ?",
      choix: ["Deux", "Six", "Douze", "Vingt-sept"],
      bonneReponse: 1,
      explication: "Six pays, dont la France et l'Allemagne, fondent la CECA en 1951 puis la CEE en 1957.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que crée le traité de Maastricht en 1992 ?",
      choix: ["La CECA", "L'Union européenne (UE) et la citoyenneté européenne", "L'espace Schengen uniquement", "Le Brexit"],
      bonneReponse: 1,
      explication: "Le traité de Maastricht transforme la CEE en Union européenne et prépare la monnaie unique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel est le rôle du Parlement européen ?",
      reponse: "Élu au suffrage universel direct par les citoyens des pays membres, il vote les lois européennes, aux côtés du Conseil de l'Union européenne.",
      explication: "C'est la seule institution européenne directement élue par les citoyens.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'apporte l'espace Schengen aux citoyens européens.",
      reponse: "L'espace Schengen supprime les contrôles aux frontières entre les pays qui en font partie, ce qui permet de voyager librement d'un pays à l'autre sans passeport ni contrôle douanier.",
      explication: "Cet espace facilite la libre circulation des personnes, l'un des principes fondamentaux de l'UE.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que la politique agricole commune (PAC) ?",
      choix: [
        "Une politique de sécurité commune",
        "Une politique européenne qui soutient financièrement les agriculteurs",
        "Un traité fondateur de l'UE",
        "La monnaie unique européenne",
      ],
      bonneReponse: 1,
      explication: "La France est l'une des principales bénéficiaires de la PAC, qui représente une part importante du budget européen.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la construction européenne débute par une mise en commun du charbon et de l'acier en 1951.",
      reponse:
        "Le charbon et l'acier sont des ressources essentielles à la fabrication d'armes. En les plaçant sous le contrôle d'une autorité commune, la CECA rend une guerre entre la France et l'Allemagne matériellement plus difficile, et instaure une solidarité économique entre pays qui viennent de s'affronter. C'est une manière concrète de garantir la paix par l'économie, plutôt que par des discours politiques.",
      explication: "Cette méthode, dite « fonctionnaliste », consiste à construire l'unité européenne étape par étape, à partir de secteurs économiques concrets.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre en quoi la France occupe une place centrale dans l'Union européenne.",
      reponse:
        "La France est l'un des six États fondateurs de la construction européenne dès 1951 et 1957. Elle est l'une des principales bénéficiaires de la politique agricole commune, qui soutient ses agriculteurs. Elle accueille une partie des institutions européennes, comme le Parlement européen à Strasbourg. Enfin, avec l'Allemagne, elle forme souvent un moteur politique qui propose des initiatives pour faire avancer la construction européenne.",
      explication: "Le couple franco-allemand joue traditionnellement un rôle moteur dans les décisions de l'Union européenne.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi le Brexit (2020) est-il considéré comme un défi pour l'Union européenne ?",
      choix: [
        "Parce qu'il renforce automatiquement l'UE",
        "Parce que c'est la première fois qu'un État membre quitte l'Union, ce qui interroge sa cohésion",
        "Parce qu'il crée l'espace Schengen",
        "Parce qu'il instaure l'euro au Royaume-Uni",
      ],
      bonneReponse: 1,
      explication: "Le départ du Royaume-Uni, effectif le 31 janvier 2020, montre que la construction européenne n'est pas irréversible et pose la question de sa cohésion future.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Méthode brevet : tu analyses un extrait du traité de Rome (1957). Quelles étapes suis-tu pour l'étudier ?",
      reponse:
        "1) Présenter le document : nature (texte de traité international), date (1957), auteurs (les six pays fondateurs), contexte (reconstruction de l'Europe après-guerre). 2) Décrire ce qu'il prévoit : création d'un marché commun, suppression des droits de douane entre pays membres. 3) Expliquer avec ses connaissances : volonté de garantir la paix par l'intégration économique, suite logique de la CECA de 1951. 4) Porter un regard critique : texte fondateur, mais qui ne prévoit encore ni monnaie unique ni citoyenneté européenne, obtenues seulement avec le traité de Maastricht en 1992.",
      explication: "Au brevet, on attend : présenter, décrire, expliquer avec le cours, puis situer le document dans la chronologie de la construction européenne.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année le traité de Rome crée-t-il la CEE ?",
      choix: ["1951", "1957", "1992", "2002"],
      bonneReponse: 1,
      explication: "Le traité de Rome, signé en 1957, crée la Communauté économique européenne et son marché commun.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que crée le traité de Maastricht en 1992 ?",
      reponse: "L'Union européenne et la citoyenneté européenne.",
      explication: "Ce traité marque une étape majeure de la construction européenne.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux institutions de l'Union européenne et leur rôle.",
      reponse: "Le Parlement européen, élu par les citoyens, vote les lois ; la Commission européenne propose les lois et veille à leur application.",
      explication: "Le Conseil de l'Union européenne, qui représente les gouvernements des États membres, peut aussi être cité.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel événement de 2020 marque le départ d'un État membre de l'UE ?",
      choix: ["Le traité de Maastricht", "Le Brexit", "La création de l'euro", "L'élargissement de 2004"],
      bonneReponse: 1,
      explication: "Le Royaume-Uni quitte officiellement l'Union européenne le 31 janvier 2020.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle politique européenne soutient particulièrement les agriculteurs français ?",
      reponse: "La politique agricole commune (PAC).",
      explication: "La France est l'une des principales bénéficiaires de cette politique européenne.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La France et l'Union européenne",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pourquoi les pays d'Europe entament-ils leur union après 1945 ?",
          choix: [
            "Pour créer une monnaie unique immédiatement",
            "Pour garantir la paix en liant leurs économies, notamment entre la France et l'Allemagne",
            "Pour former une alliance militaire contre les États-Unis",
            "Pour coloniser d'autres continents",
          ],
          bonneReponse: 1,
          explication: "L'objectif premier de la construction européenne est de rendre la guerre impossible entre pays européens.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la CECA et quand est-elle créée ?",
          reponse: "La Communauté européenne du charbon et de l'acier, créée en 1951 par six pays fondateurs, dont la France.",
          explication: "La CECA met en commun deux ressources essentielles à l'industrie de guerre.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que permet l'espace Schengen ?",
          choix: [
            "L'utilisation d'une monnaie unique",
            "La libre circulation des personnes sans contrôle aux frontières internes",
            "L'élection du Parlement européen",
            "La création de la PAC",
          ],
          bonneReponse: 1,
          explication: "L'espace Schengen supprime les contrôles aux frontières entre les pays qui y participent.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Présente le rôle de la Commission européenne.",
          reponse: "La Commission européenne propose les projets de lois européennes et veille à leur bonne application par les États membres.",
          explication: "Elle travaille aux côtés du Parlement européen et du Conseil de l'Union européenne.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique en quoi la France est un État fondateur de l'Union européenne.",
          reponse: "La France fait partie des six pays qui créent la CECA en 1951 puis la CEE en 1957, les premières étapes de la construction européenne. Elle participe depuis à toutes les décisions majeures de l'Union.",
          explication: "Ce statut de fondateur donne à la France un rôle particulièrement important dans l'UE.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : retrace les grandes étapes de la construction européenne, de 1951 à nos jours (une vingtaine de lignes).",
          reponse:
            "Introduction : depuis 1951, la construction européenne progresse par étapes pour unir les pays d'Europe. Première partie : les débuts économiques ; en 1951, le traité de Paris crée la CECA, qui met en commun le charbon et l'acier ; en 1957, le traité de Rome crée la CEE et son marché commun. Deuxième partie : l'approfondissement politique ; en 1992, le traité de Maastricht transforme la CEE en Union européenne, crée la citoyenneté européenne et prépare l'euro, mis en circulation en 2002 ; l'espace Schengen facilite la libre circulation des personnes. Troisième partie : élargissements et défis actuels ; l'Union passe de six à vingt-sept membres au fil des élargissements, mais rencontre aussi des limites, comme le montre le départ du Royaume-Uni en 2020. Conclusion : la construction européenne reste un projet en évolution permanente, entre approfondissement et nouveaux défis.",
          explication: "Le développement doit mobiliser la chronologie précise : 1951, 1957, 1992, 2002, 2020.",
        },
      ],
    },
    {
      titre: "Examen 2 — La France et l'Union européenne",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle monnaie unique circule dans la plupart des pays de l'UE depuis 2002 ?",
          choix: ["Le franc", "L'euro", "Le mark", "Le dollar"],
          bonneReponse: 1,
          explication: "L'euro est mis en circulation le 1er janvier 2002 et remplace les monnaies nationales dans de nombreux pays de l'UE.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Combien de pays composent aujourd'hui l'Union européenne ?",
          reponse: "27 États membres, après plusieurs élargissements successifs.",
          explication: "L'Union est passée de six pays fondateurs à vingt-sept membres aujourd'hui.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle institution européenne est directement élue par les citoyens ?",
          choix: ["La Commission européenne", "Le Parlement européen", "Le Conseil européen", "La Banque centrale"],
          bonneReponse: 1,
          explication: "Le Parlement européen est élu au suffrage universel direct par les citoyens des États membres.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique ce qu'est le Brexit et quand il a lieu.",
          reponse: "Le Brexit est le départ du Royaume-Uni de l'Union européenne, effectif le 31 janvier 2020. C'est la première fois qu'un État membre quitte l'Union.",
          explication: "Cet événement illustre les limites et les tensions au sein de la construction européenne.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quels avantages concrets l'Union européenne apporte-t-elle aux citoyens français au quotidien ?",
          reponse:
            "Par exemple : voyager sans contrôle aux frontières grâce à l'espace Schengen, payer avec la même monnaie dans de nombreux pays européens grâce à l'euro, étudier ou travailler plus facilement dans un autre pays de l'UE, ou encore bénéficier du soutien de la politique agricole commune pour les agriculteurs.",
          explication: "Ces avantages concrets illustrent l'intégration économique et sociale poussée entre les États membres.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre les avantages et les limites de l'appartenance de la France à l'Union européenne (une vingtaine de lignes).",
          reponse:
            "Introduction : État fondateur de la construction européenne, la France bénéficie de son appartenance à l'UE tout en étant confrontée à ses limites. Première partie : des avantages concrets ; la France profite du marché commun, de la libre circulation des personnes grâce à l'espace Schengen, de l'euro pour ses échanges commerciaux, et surtout de la politique agricole commune, qui soutient fortement ses agriculteurs. Deuxième partie : une influence politique renforcée ; en tant que membre fondateur, la France participe à toutes les décisions importantes et accueille des institutions européennes, comme le Parlement à Strasbourg. Troisième partie : des limites et des défis ; les décisions communes sont parfois difficiles à prendre entre vingt-sept États aux intérêts différents, des inégalités subsistent entre les régions de l'UE, et le Brexit, en 2020, a montré que la construction européenne n'était pas irréversible. Conclusion : malgré ces défis, l'appartenance à l'UE reste un atout majeur pour la France dans un monde globalisé.",
          explication: "Le développement doit mobiliser des exemples précis : PAC, Schengen, euro, Brexit.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 1951, traité de Paris, création de la CECA par six pays fondateurs dont la France.",
    "Repère brevet : 1957, traité de Rome, création de la CEE et d'un marché commun.",
    "Repère brevet : 1992, traité de Maastricht, naissance de l'Union européenne et de la citoyenneté européenne.",
    "2002 : mise en circulation de l'euro ; espace Schengen : libre circulation des personnes sans contrôle aux frontières internes.",
    "Institutions de l'UE : Parlement européen (élu, vote les lois), Commission européenne (propose les lois), Conseil de l'UE (représente les États).",
    "La France, État fondateur, bénéficie de la politique agricole commune (PAC) ; repère brevet : 31 janvier 2020, le Brexit (départ du Royaume-Uni de l'UE).",
  ],
};

export default chapitre;
