import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "la-comida",
  titre: "La nourriture et le restaurant",
  matiere: "espagnol",
  niveau: "4eme",
  langueVoix: "es-ES",
  description:
    "Parler de nourriture en espagnol : le vocabulaire des aliments et des repas, « gustar » appliqué à la cuisine, les expressions de quantité, commander au restaurant et utiliser les pronoms compléments d'objet direct (lo, la, los, las).",
  objectifs: [
    "Nommer les aliments et les repas de la journée",
    "Utiliser gustar, encantar avec la nourriture (me gusta(n), me encanta(n))",
    "Exprimer une quantité (mucho, poco, demasiado, un poco de, nada de)",
    "Commander au restaurant avec quiero / me gustaría + infinitif ou nom",
    "Employer les pronoms compléments d'objet direct lo, la, los, las",
  ],
  slides: [
    {
      titre: "Le vocabulaire de la nourriture",
      illustration: "🍎",
      visuel: "La fruta, la verdura, la carne",
      contenu: [
        "La fruta, la verdura : le fruit, le légume",
        "La carne, el pescado, el pollo : la viande, le poisson, le poulet",
        "El arroz, la pasta, el pan : le riz, les pâtes, le pain",
        "El postre, la tarta, el helado : le dessert, le gâteau, la glace",
      ],
      voixOff:
        "Voici le vocabulaire de base de la nourriture. La fruta, le fruit, et la verdura, le légume. Ensuite la carne, la viande, el pescado, le poisson, et el pollo, le poulet. On mange aussi el arroz, le riz, la pasta, les pâtes, et el pan, le pain. Et pour finir, el postre, le dessert, avec la tarta, le gâteau, et el helado, la glace.",
    },
    {
      titre: "Les repas de la journée",
      illustration: "🍽️",
      visuel: "Desayuno, comida, cena",
      contenu: [
        "El desayuno : le petit-déjeuner — Desayunar : prendre le petit-déjeuner",
        "La comida / el almuerzo : le déjeuner — Almorzar (o>ue) : déjeuner",
        "La cena : le dîner — Cenar : dîner",
        "La merienda : le goûter — Merendar (e>ie) : goûter",
      ],
      voixOff:
        "En Espagne, la journée est rythmée par quatre repas. El desayuno, le petit-déjeuner, avec le verbe desayunar. La comida, appelée aussi el almuerzo, le déjeuner, avec le verbe almorzar, qui change son o en ue. La cena, le dîner, avec cenar. Et la merienda, le goûter de l'après-midi, avec merendar, qui change son e en ie.",
    },
    {
      titre: "Gustar avec la nourriture",
      illustration: "😋",
      visuel: "Me gusta(n) / Me encanta(n)",
      contenu: [
        "Me gusta el pescado (singulier) / Me gustan las verduras (pluriel)",
        "Me encanta(n) : j'adore — Me encanta el chocolate",
        "No me gusta nada : je n'aime pas du tout",
        "¿Te gusta la paella? — Sí, me gusta mucho / No, no me gusta",
      ],
      voixOff:
        "Avec la nourriture, gustar s'accorde avec ce qui est aimé, pas avec la personne. Me gusta el pescado, au singulier, mais me gustan las verduras, au pluriel. Pour dire j'adore, on utilise me encanta ou me encantan : me encanta el chocolate. Pour dire je n'aime pas du tout, on dit no me gusta nada. Si on te demande ¿te gusta la paella?, tu peux répondre sí, me gusta mucho, ou no, no me gusta.",
    },
    {
      titre: "Exprimer une quantité",
      illustration: "⚖️",
      visuel: "Mucho / Poco / Un poco de",
      contenu: [
        "Mucho/a/os/as : beaucoup de — Como mucha fruta",
        "Poco/a/os/as : peu de — Bebo poco café",
        "Demasiado/a/os/as : trop de — Comes demasiados dulces",
        "Un poco de / nada de + nom invariable : un peu de / pas du tout de",
      ],
      voixOff:
        "Pour exprimer une quantité, mucho, poco et demasiado s'accordent comme des adjectifs avec le nom : como mucha fruta, je mange beaucoup de fruits ; bebo poco café, je bois peu de café ; comes demasiados dulces, tu manges trop de bonbons. En revanche, un poco de et nada de restent invariables, quel que soit le nom : un poco de sal, un peu de sel, nada de postre, pas du tout de dessert.",
    },
    {
      titre: "Commander au restaurant",
      illustration: "🧾",
      visuel: "Quiero… / Me gustaría…",
      contenu: [
        "Quiero una ensalada, por favor : je veux une salade, s'il vous plaît",
        "Me gustaría probar la tortilla : j'aimerais goûter l'omelette (plus poli)",
        "Para mí, el pollo con patatas : pour moi, le poulet avec des frites",
        "¿Qué me recomienda? : que me recommandez-vous ?",
      ],
      voixOff:
        "Au restaurant, on peut commander simplement avec quiero suivi d'un nom : quiero una ensalada, por favor. Pour être plus poli, on utilise me gustaría suivi d'un infinitif ou d'un nom : me gustaría probar la tortilla, j'aimerais goûter l'omelette. On dit aussi para mí, el pollo con patatas, pour moi, le poulet avec des frites. Et si on hésite, on demande ¿qué me recomienda?, que me recommandez-vous ?",
    },
    {
      titre: "Le camarero et la carta",
      illustration: "👨‍🍳",
      visuel: "La carta, el menú del día",
      contenu: [
        "El camarero / la camarera : le serveur / la serveuse",
        "La carta : le menu (la liste) — El menú del día : le menu du jour",
        "De primero, de segundo, de postre : en entrée, en plat, en dessert",
        "La cuenta, por favor : l'addition, s'il vous plaît",
      ],
      voixOff:
        "Au restaurant, el camarero ou la camarera t'apporte la carta, le menu. Beaucoup de restaurants proposent el menú del día, le menu du jour, à prix fixe, organisé en trois parties : de primero, en entrée, de segundo, en plat principal, et de postre, en dessert. À la fin du repas, on demande la cuenta, por favor, l'addition, s'il vous plaît.",
    },
    {
      titre: "Les pronoms compléments d'objet direct",
      illustration: "🔄",
      visuel: "Lo quiero / La quiero",
      contenu: [
        "Lo (masc. sing.) / La (fém. sing.) : le / la — ¿El postre? Lo quiero.",
        "Los (masc. plur.) / Las (fém. plur.) : les — ¿Las verduras? No las quiero.",
        "Le pronom remplace le nom déjà mentionné, pour éviter la répétition",
        "Il se place devant le verbe conjugué",
      ],
      voixOff:
        "Pour éviter de répéter un nom, on utilise un pronom complément d'objet direct. Lo remplace un nom masculin singulier, la un nom féminin singulier. Par exemple, ¿el postre? Lo quiero, le dessert ? Je le veux. Au pluriel, on utilise los et las : ¿las verduras? No las quiero, les légumes ? Je ne les veux pas. Ces pronoms se placent toujours devant le verbe conjugué.",
    },
    {
      titre: "Dialogue au restaurant",
      illustration: "🗣️",
      visuel: "En el restaurante",
      contenu: [
        "— Buenas tardes, ¿qué van a tomar? — De primero, quiero una ensalada.",
        "— ¿Y de segundo? — Me gustaría el pollo con patatas.",
        "— ¿Y para beber? — Un agua, por favor.",
        "— ¿Postre? — Sí, quiero un helado. Lo quiero de chocolate.",
      ],
      voixOff:
        "Voici un dialogue complet. Buenas tardes, ¿qué van a tomar?, bonsoir, que prendrez-vous ? De primero, quiero una ensalada, en entrée, je veux une salade. ¿Y de segundo? Me gustaría el pollo con patatas, et en plat ? J'aimerais le poulet avec des frites. ¿Y para beber? Un agua, por favor. ¿Postre? Sí, quiero un helado. Lo quiero de chocolate : oui, je veux une glace, je la veux au chocolat.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Gustar + cantidades + pronombres",
      contenu: [
        "Gustar s'accorde avec ce qui plaît : me gusta el arroz / me gustan las verduras",
        "Quantités : mucho/poco/demasiado s'accordent ; un poco de/nada de sont invariables",
        "Commander : quiero… / me gustaría… (plus poli)",
        "Pronoms d'objet direct : lo, la, los, las remplacent un nom déjà cité",
      ],
      voixOff:
        "Résumons. Gustar s'accorde toujours avec ce qui plaît, pas avec la personne : me gusta el arroz, me gustan las verduras. Pour les quantités, mucho, poco et demasiado s'accordent comme des adjectifs, alors que un poco de et nada de sont invariables. Pour commander, utilise quiero pour être direct, ou me gustaría pour être plus poli. Enfin, pense aux pronoms lo, la, los, las pour ne pas répéter un nom déjà mentionné !",
    },
  ],
  fiche: {
    intro:
      "Pour parler de nourriture et commander au restaurant, il faut connaître le vocabulaire des aliments, savoir employer gustar et les quantités, et utiliser les pronoms compléments d'objet direct lo, la, los, las.",
    sections: [
      {
        titre: "Le vocabulaire de la nourriture",
        points: [
          "La fruta, la verdura, la carne, el pescado, el pollo",
          "El arroz, la pasta, el pan, el postre",
          "Les quatre repas : el desayuno, la comida/el almuerzo, la merienda, la cena",
        ],
      },
      {
        titre: "Gustar et encantar avec la nourriture",
        points: [
          "Accord avec ce qui plaît : me gusta el pescado / me gustan las verduras",
          "Me encanta(n) : j'adore — No me gusta nada : je n'aime pas du tout",
        ],
      },
      {
        titre: "Les quantités",
        points: [
          "Mucho/a/os/as, poco/a/os/as, demasiado/a/os/as : s'accordent avec le nom",
          "Un poco de, nada de : toujours invariables",
        ],
      },
      {
        titre: "Commander et les pronoms d'objet direct",
        points: [
          "Quiero + nom / Me gustaría + infinitif ou nom (plus poli)",
          "La carta, el menú del día, de primero/segundo/postre, la cuenta",
          "Lo, la, los, las remplacent un nom déjà cité, devant le verbe",
        ],
      },
    ],
    audio:
      "Fiche de révision : la nourriture et le restaurant en espagnol. Le vocabulaire de base comprend la fruta, la verdura, la carne, el pescado, el pollo, el arroz, la pasta, el pan et el postre. La journée compte quatre repas : el desayuno, la comida ou el almuerzo, la merienda et la cena. Gustar s'accorde avec ce qui plaît : me gusta el pescado, me gustan las verduras. On utilise aussi me encanta pour dire j'adore et no me gusta nada pour dire je n'aime pas du tout. Pour les quantités, mucho, poco et demasiado s'accordent avec le nom, mais un poco de et nada de restent invariables. Pour commander au restaurant, on dit quiero suivi d'un nom, ou plus poliment me gustaría suivi d'un infinitif. Enfin, les pronoms lo, la, los et las remplacent un nom déjà mentionné et se placent devant le verbe conjugué.",
  },
  memoCards: [
    { recto: "El desayuno / La comida / La cena", verso: "Le petit-déjeuner / le déjeuner / le dîner." },
    { recto: "Me gusta el pescado / Me gustan las verduras", verso: "J'aime le poisson (singulier) / j'aime les légumes (pluriel) : accord avec ce qui plaît." },
    { recto: "Me encanta(n)", verso: "J'adore (plus fort que gustar)." },
    { recto: "Mucho/a/os/as, poco/a/os/as, demasiado/a/os/as", verso: "Beaucoup de, peu de, trop de : s'accordent avec le nom." },
    { recto: "Un poco de / Nada de", verso: "Un peu de / pas du tout de : toujours invariables." },
    { recto: "Quiero… / Me gustaría…", verso: "Je veux… / j'aimerais… (formule plus polie pour commander)." },
    { recto: "La carta / La cuenta", verso: "Le menu (la carte) / l'addition." },
    { recto: "Lo quiero / La quiero / Los quiero / Las quiero", verso: "Je le/la/les veux (pronoms COD, devant le verbe)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « le poisson » ?",
      choix: ["la carne", "el pescado", "el pollo", "el arroz"],
      bonneReponse: 1,
      explication: "El pescado signifie le poisson.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « le petit-déjeuner » ?",
      choix: ["la cena", "la merienda", "el desayuno", "la comida"],
      bonneReponse: 2,
      explication: "El desayuno signifie le petit-déjeuner.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « J'aime les légumes mais je n'aime pas la viande. »",
      reponse: "Me gustan las verduras pero no me gusta la carne.",
      explication: "Gustan (pluriel, verduras) et gusta (singulier, carne).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « l'addition, s'il vous plaît » ?",
      choix: ["La carta, por favor", "La cuenta, por favor", "El menú, por favor", "El postre, por favor"],
      bonneReponse: 1,
      explication: "La cuenta signifie l'addition.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement un mot de quantité invariable ?",
      choix: ["Como un poco de fruta", "Como una poca de fruta", "Como unos poco de fruta", "Como poco de fruta"],
      bonneReponse: 0,
      explication: "Un poco de est toujours invariable, quel que soit le nom qui suit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « J'aimerais goûter la paella, s'il vous plaît. »",
      reponse: "Me gustaría probar la paella, por favor.",
      explication: "Me gustaría + infinitif est une formule polie pour commander.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réponds à la question « ¿Quieres el postre? » en utilisant le pronom « lo ».",
      reponse: "Sí, lo quiero. / No, no lo quiero.",
      explication: "Lo remplace « el postre », nom masculin singulier, devant le verbe.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel pronom remplace « las verduras » dans « No quiero las verduras » ?",
      choix: ["lo", "la", "los", "las"],
      bonneReponse: 3,
      explication: "Las remplace un nom féminin pluriel : No las quiero.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence d'accord entre « mucho/poco/demasiado » et « un poco de/nada de », avec un exemple pour chaque cas.",
      reponse:
        "Mucho, poco et demasiado s'accordent en genre et en nombre avec le nom, comme des adjectifs : como muchas verduras, bebo poca leche. Un poco de et nada de restent toujours invariables, quel que soit le nom : un poco de sal, nada de azúcar.",
      explication: "C'est une nuance importante entre adjectifs de quantité variables et locutions invariables.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « ¿Los tomates? Los quiero para la ensalada », que remplace le pronom « los » ?",
      choix: ["la ensalada", "los tomates", "la comida", "el camarero"],
      bonneReponse: 1,
      explication: "Los reprend « los tomates », nom masculin pluriel déjà mentionné.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un dialogue de commande au restaurant (5-6 répliques) utilisant gustar, une expression de quantité et un pronom d'objet direct.",
      reponse:
        "— Buenas tardes, ¿qué van a tomar? — De primero, me gustan mucho las verduras, quiero una ensalada. — ¿Y de segundo? — Quiero el pescado, por favor. — ¿Postre? — Sí, un helado. Lo quiero de vainilla.",
      explication: "Le dialogue combine gustar (me gustan mucho), la quantité (mucho) et le pronom (lo quiero).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris tes goûts alimentaires en 4-5 phrases : ce que tu adores, ce que tu n'aimes pas du tout, et une quantité que tu manges souvent.",
      reponse:
        "Me encanta el chocolate y me gustan mucho las frutas. No me gusta nada el pescado. Como mucha pasta y bebo poco café. A veces como demasiados dulces.",
      explication: "Le texte varie gustar, encantar et les expressions de quantité.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « le riz » ?",
      choix: ["el arroz", "el pan", "la pasta", "la fruta"],
      bonneReponse: 0,
      explication: "El arroz signifie le riz.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Me encanta » signifie :",
      choix: ["je déteste", "j'aime un peu", "j'adore", "je ne veux pas"],
      bonneReponse: 2,
      explication: "Me encanta est plus fort que me gusta : j'adore.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Je bois trop de café le matin. »",
      reponse: "Bebo demasiado café por la mañana.",
      explication: "Demasiado s'accorde avec café (masculin singulier) : demasiado.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réponds à « ¿Te gusta la tortilla? » en utilisant le pronom « la ».",
      reponse: "Sí, la quiero probar. / No, no me gusta nada.",
      explication: "La reprend « la tortilla », nom féminin singulier.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige une commande complète au restaurant (3 phrases) avec me gustaría, une quantité et un pronom d'objet direct.",
      reponse: "Me gustaría un poco de ensalada de primero. De segundo, quiero el pollo. ¿El postre? Lo quiero de chocolate.",
      explication: "Le texte combine les trois notions du chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La nourriture et le restaurant",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « le goûter » ?",
          choix: ["la cena", "la merienda", "el almuerzo", "el desayuno"],
          bonneReponse: 1,
          explication: "La merienda signifie le goûter.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « le serveur » ?",
          choix: ["el cocinero", "el camarero", "el cliente", "el cocinero"],
          bonneReponse: 1,
          explication: "El camarero signifie le serveur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Nous aimons beaucoup les fruits mais nous n'aimons pas du tout les légumes. »",
          reponse: "Nos gustan mucho las frutas pero no nos gustan nada las verduras.",
          explication: "Gustar s'accorde avec le sujet grammatical (frutas, verduras), pluriel dans les deux cas.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « almorzar » (o>ue) avec « yo » et « nosotros », puis traduis « je déjeune à deux heures ».",
          reponse: "Yo almuerzo, nosotros almorzamos. Almuerzo a las dos.",
          explication: "Almorzar suit la diphtongue o>ue sauf pour nosotros et vosotros.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige une scène complète au restaurant (6 phrases minimum) : commande, quantité, goûts, et l'addition, en utilisant au moins un pronom d'objet direct.",
          reponse:
            "Buenas tardes, ¿qué van a tomar? De primero, me gustaría una ensalada, no quiero demasiado aceite. De segundo, quiero el pescado, me encanta el pescado. ¿Postre? Sí, un helado, lo quiero de fresa. La cuenta, por favor.",
          explication: "Le texte combine commande, quantité, goûts (gustar/encantar) et pronom d'objet direct (lo).",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « me gustan las verduras » et non « me gusta las verduras » ?",
          choix: [
            "Parce que gustar s'accorde toujours au pluriel",
            "Parce que gustar s'accorde avec le sujet grammatical, ici « las verduras », pluriel",
            "C'est une erreur, les deux formes sont possibles",
            "Parce que verduras est un mot masculin"
          ],
          bonneReponse: 1,
          explication: "Le sujet réel de gustar est ce qui plaît ; au pluriel, le verbe se met au pluriel : gustan.",
        },
      ],
    },
    {
      titre: "Examen 2 — La nourriture et le restaurant",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « le menu du jour » ?",
          choix: ["la carta", "el menú del día", "la cuenta", "el postre"],
          bonneReponse: 1,
          explication: "El menú del día signifie le menu du jour.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Demasiado » signifie :",
          choix: ["un peu", "beaucoup", "trop", "rien"],
          bonneReponse: 2,
          explication: "Demasiado signifie trop.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « J'aimerais un peu de riz avec le poulet, s'il vous plaît. »",
          reponse: "Me gustaría un poco de arroz con el pollo, por favor.",
          explication: "Un poco de + nom, toujours invariable.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande « ¿Quieres los tomates? ». Réponds négativement en utilisant le pronom correspondant.",
          reponse: "No, no los quiero.",
          explication: "Los remplace « los tomates », masculin pluriel, devant le verbe.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare gustar et encantar en donnant un exemple pour chacun, puis explique la nuance de sens entre les deux.",
          reponse:
            "Gustar exprime un goût simple : me gusta el pollo, j'aime le poulet. Encantar exprime un goût très fort, comme une passion : me encanta el chocolate, j'adore le chocolat. Encantar est donc plus intense que gustar, mais les deux s'accordent avec ce qui plaît.",
          explication: "Encantar fonctionne exactement comme gustar mais avec un sens plus fort.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « De postre, lo quiero de chocolate », que remplace « lo » ?",
          choix: ["el postre", "el chocolate", "la cena", "la carta"],
          bonneReponse: 0,
          explication: "Lo reprend « el postre », mentionné juste avant, nom masculin singulier.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vocabulaire clé : la fruta, la verdura, la carne, el pescado, el pollo, el postre.",
    "Les quatre repas : el desayuno, la comida/el almuerzo, la merienda, la cena.",
    "Gustar/encantar s'accordent avec ce qui plaît : me gusta el arroz, me gustan las verduras.",
    "Quantités : mucho/poco/demasiado s'accordent ; un poco de/nada de sont invariables.",
    "Commander : quiero + nom (direct) ou me gustaría + infinitif/nom (plus poli).",
    "Pronoms COD lo, la, los, las remplacent un nom déjà cité et se placent devant le verbe.",
  ],
};

export default chapitre;
