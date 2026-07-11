import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "la-ciudad",
  titre: "La ville et les directions",
  matiere: "espagnol",
  niveau: "4eme",
  langueVoix: "es-ES",
  description:
    "Se repérer et donner son chemin en espagnol : le vocabulaire de la ville, la différence entre « hay » et « está », les prépositions de lieu et l'impératif pour indiquer une direction.",
  objectifs: [
    "Nommer les lieux et bâtiments d'une ville",
    "Distinguer « hay » (invariable) et « está/están » (variable) pour situer",
    "Utiliser les prépositions de lieu (cerca de, al lado de, enfrente de…)",
    "Conjuguer et employer l'impératif tú pour donner une direction",
    "Demander et comprendre un itinéraire en espagnol",
  ],
  slides: [
    {
      titre: "Le vocabulaire de la ville",
      illustration: "🏙️",
      visuel: "La plaza mayor",
      contenu: [
        "La calle, la plaza, la avenida : la rue, la place, l'avenue",
        "El banco, la farmacia, el supermercado : la banque, la pharmacie, le supermarché",
        "La estación, el museo, la iglesia : la gare, le musée, l'église",
        "El parque, el ayuntamiento, la biblioteca : le parc, la mairie, la bibliothèque",
      ],
      voixOff:
        "Pour se repérer dans une ville espagnole, il faut d'abord connaître le vocabulaire des lieux. La calle, la rue, la plaza, la place, et la avenida, l'avenue. On trouve aussi el banco, la banque, la farmacia, la pharmacie, et el supermercado, le supermarché. N'oublie pas la estación, la gare, el museo, le musée, la iglesia, l'église, et el parque, el ayuntamiento et la biblioteca : le parc, la mairie et la bibliothèque.",
    },
    {
      titre: "Hay ou está : deux verbes pour situer",
      illustration: "📍",
      visuel: "Hay un parque / El parque está…",
      contenu: [
        "Hay + article indéfini ou nombre : il y a — Hay un banco en la plaza",
        "Está/Están + article défini : se trouve/sont — El banco está en la plaza",
        "Hay ne varie jamais, quel que soit le nombre : hay un parque, hay dos museos",
        "Está varie avec le sujet : el museo está…, los museos están…",
      ],
      voixOff:
        "Deux verbes permettent de situer quelque chose, mais ils ne s'emploient pas de la même façon. Hay signifie il y a et s'utilise avec un article indéfini ou un nombre pour signaler l'existence de quelque chose : hay un banco en la plaza. Ce mot ne change jamais de forme, même au pluriel : hay dos museos. Está ou están, au contraire, s'emploient avec un article défini pour situer un élément déjà connu, et s'accordent avec le sujet : el banco está en la plaza, los museos están en el centro.",
    },
    {
      titre: "Les prépositions de lieu",
      illustration: "🧭",
      visuel: "Al lado de la iglesia",
      contenu: [
        "Cerca de / lejos de : près de / loin de",
        "Al lado de / enfrente de : à côté de / en face de",
        "Entre… y… : entre… et…",
        "Delante de / detrás de : devant / derrière",
      ],
      voixOff:
        "Pour préciser un emplacement, on utilise des prépositions de lieu. Cerca de signifie près de, et lejos de, loin de. Al lado de veut dire à côté de, et enfrente de, en face de. On dit entre… y… pour entre… et…, comme entre el banco y la farmacia. Enfin, delante de et detrás de signifient devant et derrière.",
    },
    {
      titre: "Demander son chemin",
      illustration: "❓",
      visuel: "¿Dónde está…?",
      contenu: [
        "¿Dónde está la farmacia, por favor? : où est la pharmacie, s'il vous plaît ?",
        "¿Para ir a la estación? : pour aller à la gare ?",
        "¿Hay un supermercado cerca de aquí? : y a-t-il un supermarché près d'ici ?",
        "Perdona, ¿sabes dónde está…? : excuse-moi, sais-tu où est… ?",
      ],
      voixOff:
        "Pour demander son chemin, la question la plus utile est ¿dónde está…?, où est… ? Par exemple, ¿dónde está la farmacia, por favor?, où est la pharmacie, s'il vous plaît ? On peut aussi demander ¿para ir a la estación?, pour aller à la gare ? Et si on ne sait pas si un lieu existe, on demande ¿hay un supermercado cerca de aquí?, y a-t-il un supermarché près d'ici ?",
    },
    {
      titre: "L'impératif pour indiquer le chemin (tú)",
      illustration: "👉",
      visuel: "¡Gira, sigue, cruza!",
      contenu: [
        "Gira a la derecha / a la izquierda : tourne à droite / à gauche (girar)",
        "Sigue todo recto : continue tout droit (seguir, e>i)",
        "Cruza la calle : traverse la rue (cruzar)",
        "Toma la primera calle : prends la première rue (tomar)",
      ],
      voixOff:
        "Pour donner des indications à un ami, on utilise l'impératif tú. Gira a la derecha ou a la izquierda signifie tourne à droite ou à gauche, du verbe girar. Sigue todo recto veut dire continue tout droit : seguir change son e en i, mais à l'impératif tú, la forme reprend celle de él/ella au présent. Cruza la calle signifie traverse la rue, et toma la primera calle, prends la première rue.",
    },
    {
      titre: "Compléter une indication",
      illustration: "➡️",
      visuel: "Hasta la esquina",
      contenu: [
        "Todo recto hasta la plaza : tout droit jusqu'à la place",
        "La primera/segunda calle a la derecha : la première/deuxième rue à droite",
        "Al final de la calle : au bout de la rue",
        "En la esquina : au coin de la rue",
      ],
      voixOff:
        "Une bonne indication précise aussi la distance ou le repère. Todo recto hasta la plaza signifie tout droit jusqu'à la place. On peut dire la primera calle a la derecha ou la segunda calle a la izquierda pour la première ou la deuxième rue. Al final de la calle veut dire au bout de la rue, et en la esquina, au coin de la rue.",
    },
    {
      titre: "Se repérer dans la ville",
      illustration: "🚦",
      visuel: "El semáforo, la esquina",
      contenu: [
        "El plano : le plan — La esquina : le coin de rue",
        "El semáforo : le feu — El cruce : le carrefour",
        "La manzana (Espagne) / la cuadra (Amérique latine) : le pâté de maisons",
        "Está a cinco minutos a pie : c'est à cinq minutes à pied",
      ],
      voixOff:
        "D'autres mots aident à se repérer : el plano, le plan de la ville, la esquina, le coin de rue, el semáforo, le feu tricolore, et el cruce, le carrefour. En Espagne, on parle de la manzana pour un pâté de maisons, alors qu'en Amérique latine on dit la cuadra. Enfin, pour indiquer une distance, on dit está a cinco minutos a pie, c'est à cinq minutes à pied.",
    },
    {
      titre: "Dialogue complet",
      illustration: "💬",
      visuel: "Diálogo en la calle",
      contenu: [
        "— Perdona, ¿dónde está el museo? — Está muy cerca.",
        "— Sigue todo recto y gira a la izquierda en el semáforo.",
        "— Luego cruza la plaza; el museo está enfrente.",
        "— Muchas gracias. — De nada.",
      ],
      voixOff:
        "Voici un dialogue complet. Perdona, ¿dónde está el museo?, excuse-moi, où est le musée ? Está muy cerca, c'est tout près. Sigue todo recto y gira a la izquierda en el semáforo, continue tout droit et tourne à gauche au feu. Luego cruza la plaza; el museo está enfrente, ensuite traverse la place ; le musée est en face. Muchas gracias, de nada : merci beaucoup, de rien.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Hay / Está + preposiciones + imperativo",
      contenu: [
        "Hay (invariable, article indéfini) ≠ está/están (variable, article défini)",
        "Prépositions clés : cerca de, al lado de, enfrente de, entre… y…",
        "Impératif tú : gira, sigue, cruza, toma",
        "Précisions utiles : todo recto, la primera/segunda calle, en la esquina",
      ],
      voixOff:
        "Résumons. Hay signale l'existence de quelque chose, invariable, avec un article indéfini ; está ou están situent un élément précis, avec un article défini, et s'accordent avec le sujet. Les prépositions clés sont cerca de, al lado de, enfrente de et entre… y…. Pour donner une direction, utilise l'impératif tú : gira, sigue, cruza, toma. Et précise toujours avec todo recto, la primera ou segunda calle, ou en la esquina !",
    },
  ],
  fiche: {
    intro:
      "Pour se repérer et donner son chemin en espagnol, il faut connaître le vocabulaire de la ville, savoir choisir entre « hay » et « está », utiliser les prépositions de lieu et maîtriser l'impératif tú.",
    sections: [
      {
        titre: "Le vocabulaire de la ville",
        points: [
          "La calle, la plaza, la avenida : la rue, la place, l'avenue",
          "El banco, la farmacia, el supermercado, la estación, el museo",
          "El parque, el ayuntamiento, la biblioteca, la iglesia",
        ],
      },
      {
        titre: "Hay vs está/están",
        points: [
          "Hay + article indéfini/nombre : invariable, signale l'existence — Hay dos parques",
          "Está/Están + article défini : variable, situe un élément connu — El parque está…",
          "Ne jamais dire « hay el » : hay s'utilise uniquement avec l'indéfini",
        ],
      },
      {
        titre: "Les prépositions de lieu",
        points: [
          "Cerca de / lejos de : près de / loin de",
          "Al lado de / enfrente de / entre… y… : à côté de / en face de / entre… et…",
          "Delante de / detrás de : devant / derrière",
        ],
      },
      {
        titre: "L'impératif tú pour indiquer le chemin",
        points: [
          "Gira (girar), sigue (seguir), cruza (cruzar), toma (tomar)",
          "Todo recto, la primera/segunda calle, en la esquina, al final de la calle",
          "¿Dónde está…? / ¿Para ir a…? pour demander son chemin",
        ],
      },
    ],
    audio:
      "Fiche de révision : la ville et les directions en espagnol. Le vocabulaire de base comprend la calle, la plaza, el banco, la farmacia, la estación et el museo. Pour situer quelque chose, on choisit entre hay, invariable et utilisé avec un article indéfini ou un nombre, comme hay un banco, et está ou están, variables et utilisés avec un article défini, comme el banco está en la plaza. Les prépositions de lieu essentielles sont cerca de, lejos de, al lado de, enfrente de et entre… y…. Pour donner une direction, on utilise l'impératif tú : gira à droite ou à gauche, sigue todo recto, cruza la calle, et toma la primera ou segunda calle. On précise souvent avec en la esquina ou al final de la calle.",
  },
  memoCards: [
    { recto: "Hay un banco en la plaza", verso: "Il y a une banque sur la place (hay = il y a, invariable, article indéfini)." },
    { recto: "El banco está en la plaza", verso: "La banque se trouve sur la place (está = verbe estar, variable, article défini)." },
    { recto: "Cerca de / Lejos de", verso: "Près de / loin de." },
    { recto: "Al lado de / Enfrente de", verso: "À côté de / en face de." },
    { recto: "Entre… y…", verso: "Entre… et… Ex : Entre el banco y la farmacia." },
    { recto: "Gira a la derecha / a la izquierda", verso: "Tourne à droite / à gauche (impératif tú de girar)." },
    { recto: "Sigue todo recto", verso: "Continue tout droit (impératif tú de seguir)." },
    { recto: "La esquina / El semáforo", verso: "Le coin de rue / le feu tricolore." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « la pharmacie » ?",
      choix: ["la farmacia", "la iglesia", "el banco", "la plaza"],
      bonneReponse: 0,
      explication: "La farmacia signifie la pharmacie.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel mot signifie « il y a » et reste toujours invariable ?",
      choix: ["está", "hay", "están", "es"],
      bonneReponse: 1,
      explication: "Hay ne s'accorde jamais, même au pluriel : hay un parque, hay dos parques.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « La banque se trouve en face de la pharmacie. »",
      reponse: "El banco está enfrente de la farmacia.",
      explication: "Está s'utilise car on situe un élément précis et connu.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Cerca de » signifie :",
      choix: ["loin de", "près de", "à côté de", "derrière"],
      bonneReponse: 1,
      explication: "Cerca de signifie près de.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de l'impératif tú de « girar » ?",
      choix: ["gira", "giras", "gire", "girad"],
      bonneReponse: 0,
      explication: "Gira est l'impératif tú de girar, verbe régulier en -ar.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Continue tout droit puis tourne à gauche au feu. »",
      reponse: "Sigue todo recto y luego gira a la izquierda en el semáforo.",
      explication: "Sigue vient de seguir (e>i) ; à l'impératif tú, il reprend la forme de él/ella au présent.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Excuse-moi, où est la gare, s'il te plaît ? »",
      reponse: "Perdona, ¿dónde está la estación, por favor?",
      explication: "Perdona est la forme tú, adaptée à un registre familier.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement « hay » ?",
      choix: ["Hay el museo en la plaza", "Hay un museo en la plaza", "El museo hay en la plaza", "Hay está un museo"],
      bonneReponse: 1,
      explication: "Hay s'emploie avec un article indéfini ou un nombre, jamais avec un article défini.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence d'emploi entre « hay » et « está », avec un exemple pour chacun.",
      reponse:
        "Hay signale l'existence de quelque chose, avec un article indéfini ou un nombre, et reste invariable : Hay dos parques en la ciudad. Está (ou están) situe un élément précis déjà connu, avec un article défini, et s'accorde avec le sujet : El parque está cerca de la plaza.",
      explication: "C'est la règle fondamentale pour choisir entre les deux verbes.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Toma la segunda calle a la derecha », quel est l'infinitif du verbe « toma » et à quel mode est-il conjugué ?",
      choix: ["Tomar, impératif tú", "Tomar, présent de l'indicatif", "Tener, impératif tú", "Tomar, subjonctif"],
      bonneReponse: 0,
      explication: "Toma vient de tomar, à l'impératif tú, identique à la forme él/ella du présent.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un dialogue court (4 répliques) où quelqu'un demande son chemin vers le musée et reçoit des indications avec au moins deux verbes à l'impératif.",
      reponse:
        "— Perdona, ¿dónde está el museo? — Sigue todo recto hasta la plaza. — ¿Y luego? — Cruza la plaza y gira a la derecha; el museo está al lado de la iglesia.",
      explication: "Le dialogue combine une question, une localisation et des indications à l'impératif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris le trajet de ton collège jusqu'à une place de ta ville en 4-5 phrases, en utilisant au moins deux prépositions de lieu et deux verbes à l'impératif.",
      reponse:
        "Sal del instituto y gira a la izquierda. Sigue todo recto hasta el semáforo. Cruza la calle y toma la primera calle a la derecha. La plaza está entre la iglesia y la biblioteca.",
      explication: "Le texte utilise gira, sigue, cruza, toma et les prépositions entre… y….",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « le musée » ?",
      choix: ["la iglesia", "el museo", "el parque", "la plaza"],
      bonneReponse: 1,
      explication: "El museo signifie le musée.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Detrás de » signifie :",
      choix: ["devant", "à côté de", "derrière", "entre"],
      bonneReponse: 2,
      explication: "Detrás de signifie derrière.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Il y a un supermarché près d'ici. »",
      reponse: "Hay un supermercado cerca de aquí.",
      explication: "Hay + article indéfini pour signaler l'existence.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète avec l'impératif tú : « __ la calle y __ a la izquierda. » (cruzar, girar)",
      reponse: "Cruza la calle y gira a la izquierda.",
      explication: "Cruza (cruzar) et gira (girar) sont des impératifs tú réguliers en -ar.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Donne trois indications complètes (avec impératif tú) pour aller de la place à la gare.",
      reponse: "Sigue todo recto hasta el semáforo. Luego gira a la derecha. La estación está al final de la calle.",
      explication: "Les trois phrases combinent impératif et repères de lieu.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La ville et les directions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « la mairie » ?",
          choix: ["el ayuntamiento", "la biblioteca", "la farmacia", "el banco"],
          bonneReponse: 0,
          explication: "El ayuntamiento signifie la mairie.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Al lado de » signifie :",
          choix: ["loin de", "à côté de", "en face de", "entre"],
          bonneReponse: 1,
          explication: "Al lado de signifie à côté de.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « La bibliothèque est entre l'église et le parc. »",
          reponse: "La biblioteca está entre la iglesia y el parque.",
          explication: "Está + entre… y… pour situer précisément.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « seguir » à l'impératif tú et traduis « continue tout droit jusqu'à la place ».",
          reponse: "Sigue. Sigue todo recto hasta la plaza.",
          explication: "Sigue est l'impératif tú irrégulier (e>i) de seguir.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un itinéraire complet (6 phrases minimum) pour aller de ton collège à la gare, avec au moins trois verbes à l'impératif et deux prépositions de lieu.",
          reponse:
            "Sal del instituto y gira a la derecha. Sigue todo recto hasta el semáforo. Cruza la calle y toma la primera calle a la izquierda. Camina cerca del parque. La estación está al lado del museo, enfrente de la plaza.",
          explication: "Le texte combine plusieurs impératifs et des prépositions de lieu variées.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi ne peut-on pas dire « Hay el banco en la plaza » ?",
          choix: [
            "Parce que hay se conjugue toujours au pluriel",
            "Parce que hay s'utilise uniquement avec un article indéfini ou un nombre, jamais un article défini",
            "Parce qu'il faut dire « Hay banco » sans article",
            "Parce que hay n'existe qu'au passé"
          ],
          bonneReponse: 1,
          explication: "Hay exclut l'article défini ; pour un élément précis, on utilise está.",
        },
      ],
    },
    {
      titre: "Examen 2 — La ville et les directions",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « le carrefour » ?",
          choix: ["la esquina", "el cruce", "el semáforo", "la manzana"],
          bonneReponse: 1,
          explication: "El cruce signifie le carrefour.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Lejos de » signifie :",
          choix: ["près de", "loin de", "devant", "derrière"],
          bonneReponse: 1,
          explication: "Lejos de signifie loin de.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Il y a deux banques dans cette rue. »",
          reponse: "Hay dos bancos en esta calle.",
          explication: "Hay + nombre pour signaler l'existence, invariable.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un touriste te demande où se trouve la bibliothèque. Réponds avec « está » et une préposition de lieu.",
          reponse: "La biblioteca está cerca del ayuntamiento.",
          explication: "Está + préposition de lieu pour localiser précisément.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare l'emploi de « hay » et « está » en donnant un exemple pour chacun, puis explique pourquoi on ne peut pas les intervertir.",
          reponse:
            "Hay indique l'existence d'un élément non précisé, avec un article indéfini : Hay una farmacia en el barrio. Está situe un élément déjà connu ou précis, avec un article défini : La farmacia está en la calle Mayor. On ne peut pas les intervertir car hay ne s'accorde pas et n'accepte pas l'article défini, alors que está s'accorde et exige un référent précis.",
          explication: "La distinction repose sur le type d'article et le degré de précision.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Cruza la plaza y toma la segunda calle », quels modes/verbes sont utilisés ?",
          choix: [
            "Deux impératifs tú : cruzar et tomar",
            "Deux présents de l'indicatif",
            "Un impératif et un subjonctif",
            "Deux infinitifs"
          ],
          bonneReponse: 0,
          explication: "Cruza et toma sont tous deux à l'impératif tú, verbes réguliers en -ar.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vocabulaire clé : la calle, la plaza, el banco, la farmacia, la estación, el museo.",
    "Hay (invariable, article indéfini/nombre) signale l'existence ; está/están (variable, article défini) situent un élément connu.",
    "Prépositions de lieu : cerca de, lejos de, al lado de, enfrente de, entre… y…, delante de, detrás de.",
    "Impératif tú pour diriger : gira (girar), sigue (seguir), cruza (cruzar), toma (tomar).",
    "Précisions utiles : todo recto, la primera/segunda calle, en la esquina, al final de la calle.",
    "Demander son chemin : ¿Dónde está…? / ¿Para ir a…? / ¿Hay… cerca de aquí?",
  ],
};

export default chapitre;
