import type { Chapitre } from "../types";

const chapitres: Chapitre[] = [
{
  slug: "cultura-hispanica",
  titre: "La culture du monde hispanique",
  matiere: "espagnol",
  niveau: "3eme",
  langueVoix: "es-ES",
  description:
    "Découvrir le monde hispanophone : les pays où l'on parle espagnol, la construction impersonnelle « se habla », les adjectifs de nationalité (gentilicios), les fêtes, la gastronomie, les arts et la musique du monde hispanique.",
  objectifs: [
    "Situer les principaux pays hispanophones et leurs gentilicios",
    "Utiliser la construction impersonnelle se habla/se hablan",
    "Accorder correctement les adjectifs de nationalité",
    "Présenter des fêtes et traditions du monde hispanique",
    "Nommer des figures et des expressions artistiques hispaniques",
  ],
  slides: [
    {
      titre: "Le monde hispanophone",
      illustration: "🌎",
      visuel: "20 países hispanohablantes",
      contenu: [
        "El español es la lengua oficial en más de veinte países",
        "En Europa : España — En América : México, Argentina, Colombia, Perú, Chile…",
        "Estados Unidos tiene una gran población hispanohablante",
        "El español es la segunda lengua más hablada del mundo por número de hablantes nativos",
      ],
      voixOff:
        "L'espagnol est la langue officielle de plus de vingt pays à travers le monde. En Europe, on le parle en España, l'Espagne. En Amérique, on le retrouve au México, en Argentina, en Colombia, au Perú, au Chile, et dans bien d'autres pays. Même sans être langue officielle, Estados Unidos compte une très grande population hispanophone. L'espagnol est aujourd'hui la deuxième langue la plus parlée au monde en nombre de locuteurs natifs.",
    },
    {
      titre: "Se habla / se hablan : la construction impersonnelle",
      illustration: "🗣️",
      visuel: "Se habla español",
      contenu: [
        "Se + verbe à la 3e personne : on parle, il est parlé (sujet indéterminé)",
        "En México se habla español (singulier, un objet parlé)",
        "En Perú se hablan español y quechua (pluriel, plusieurs langues)",
        "Cette construction s'utilise aussi pour d'autres verbes : se come, se vende, se dice",
      ],
      voixOff:
        "Pour dire quelle langue on parle dans un pays sans préciser qui parle, l'espagnol utilise la construction impersonnelle avec se. Le verbe se met à la troisième personne, singulier ou pluriel selon ce qui suit. En México se habla español, au Mexique on parle espagnol, avec habla au singulier car español est singulier. En Perú se hablan español y quechua, au Pérou on parle espagnol et quechua, avec hablan au pluriel car il y a deux langues. On retrouve cette construction avec d'autres verbes : se come, on mange, se vende, on vend, se dice, on dit.",
    },
    {
      titre: "Les adjectifs de nationalité (gentilicios)",
      illustration: "🏳️",
      visuel: "Español/a, mexicano/a",
      contenu: [
        "Terminaison en -o/-a : mexicano/mexicana, argentino/argentina, colombiano/colombiana",
        "Terminaison en -és/-esa : francés/francesa, inglés/inglesa",
        "Terminaison invariable en genre : nicaragüense, costarricense",
        "L'adjectif de nationalité s'écrit sans majuscule en espagnol",
      ],
      voixOff:
        "Les adjectifs de nationalité, appelés gentilicios, s'accordent en genre et en nombre. Beaucoup se terminent en -o au masculin et -a au féminin : mexicano, mexicana, argentino, argentina, colombiano, colombiana. D'autres se terminent en -és au masculin et -esa au féminin : francés, francesa. Certains restent invariables en genre, comme nicaragüense ou costarricense. Attention, en espagnol, les gentilicios s'écrivent toujours sans majuscule, contrairement au français.",
    },
    {
      titre: "Fêtes et traditions",
      illustration: "🎉",
      visuel: "El Día de los Muertos",
      contenu: [
        "El Día de los Muertos (México) : célèbre les défunts avec des ofrendas et des calaveras",
        "La Tomatina (Buñol, España) : une bataille géante de tomates en août",
        "Las Fallas (Valencia, España) : des sculptures géantes brûlées en mars",
        "La Semana Santa : célébrée dans toute l'Espagne et l'Amérique latine avec des processions",
      ],
      voixOff:
        "Le monde hispanique est riche en fêtes traditionnelles. El Día de los Muertos, au Mexique, célèbre les défunts avec des offrandes, les ofrendas, et des crânes décorés, les calaveras. La Tomatina, à Buñol en Espagne, est une gigantesque bataille de tomates organisée chaque année en août. Las Fallas, à Valencia, mettent en scène d'immenses sculptures en carton-pâte qui sont brûlées en mars. Enfin, la Semana Santa, la Semaine sainte, est célébrée avec des processions dans toute l'Espagne et l'Amérique latine.",
    },
    {
      titre: "La gastronomie hispanique",
      illustration: "🌮",
      visuel: "Tacos, arepas, paella",
      contenu: [
        "México : los tacos, el guacamole, los tamales",
        "España : la paella, la tortilla española, el jamón",
        "Colombia y Venezuela : las arepas",
        "Argentina : el asado, las empanadas",
      ],
      voixOff:
        "Chaque pays hispanophone possède sa gastronomie propre. Au Mexique, los tacos, el guacamole et los tamales. En Espagne, la paella, la tortilla española et el jamón, le jambon. En Colombia et au Venezuela, on savoure las arepas, une sorte de galette de maïs. Enfin, en Argentina, on aime el asado, la grillade, et las empanadas, des chaussons farcis.",
    },
    {
      titre: "Figures de l'art hispanique",
      illustration: "🎨",
      visuel: "Frida Kahlo, García Márquez",
      contenu: [
        "Frida Kahlo (México) : pintora famosa por sus autorretratos",
        "Pablo Picasso (España) : pintor, creador del cubismo",
        "Gabriel García Márquez (Colombia) : escritor, Premio Nobel de Literatura",
        "Estos artistas marcaron la historia del arte y la literatura del siglo XX",
      ],
      voixOff:
        "Le monde hispanique a produit de grands artistes. Frida Kahlo, peintre mexicaine, est célèbre pour ses autoportraits. Pablo Picasso, peintre espagnol, est l'un des créateurs du cubisme. Gabriel García Márquez, écrivain colombien, a reçu le prix Nobel de littérature pour des romans comme Cien años de soledad. Ces artistes ont marqué l'histoire de l'art et de la littérature du vingtième siècle.",
    },
    {
      titre: "La musique et la danse",
      illustration: "💃",
      visuel: "Flamenco, salsa, tango",
      contenu: [
        "El flamenco : música y baile tradicional del sur de España (Andalucía)",
        "La salsa : nació en el Caribe, mezcla ritmos africanos y latinos",
        "El tango : baile emblemático de Argentina y Uruguay",
        "La cumbia : música tradicional de Colombia, muy popular en toda América Latina",
      ],
      voixOff:
        "La musique et la danse occupent une grande place dans la culture hispanique. El flamenco, musique et danse traditionnelles du sud de l'Espagne, en Andalucía. La salsa, née dans les Caraïbes, mélange des rythmes africains et latins. El tango, danse emblématique de l'Argentina et de l'Uruguay. Enfin, la cumbia, musique traditionnelle de Colombia, très populaire dans toute l'Amérique latine.",
    },
    {
      titre: "Curiosités culturelles",
      illustration: "✨",
      visuel: "¡Qué interesante!",
      contenu: [
        "En España, la cena se toma muy tarde, a veces después de las diez",
        "En muchos países, se celebran los quince años de las chicas con una gran fiesta",
        "El español tiene muchas variantes según el país : el acento, el vocabulario cambian",
        "Se dice « vosotros » en España pero « ustedes » en toda América Latina",
      ],
      voixOff:
        "Voici quelques curiosités culturelles. En Espagne, on dîne très tard, parfois après dix heures du soir. Dans de nombreux pays, on célèbre les quinze ans des jeunes filles avec une grande fête. L'espagnol connaît de nombreuses variantes selon le pays : l'accent et le vocabulaire changent beaucoup. Enfin, on dit vosotros en Espagne pour le « vous » pluriel, mais ustedes dans toute l'Amérique latine.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Se habla + gentilicios + tradiciones",
      contenu: [
        "L'espagnol est parlé dans plus de vingt pays sur plusieurs continents",
        "Se habla/se hablan : construction impersonnelle qui s'accorde avec ce qui suit",
        "Les gentilicios s'accordent en genre et nombre, sans majuscule en espagnol",
        "Chaque pays a ses fêtes, sa gastronomie et ses artistes propres",
      ],
      voixOff:
        "Résumons. L'espagnol est parlé dans plus de vingt pays répartis sur plusieurs continents. La construction se habla ou se hablan s'accorde avec ce qui suit : singulier ou pluriel. Les gentilicios, les adjectifs de nationalité, s'accordent en genre et en nombre, et s'écrivent toujours sans majuscule. Enfin, chaque pays hispanophone possède ses propres fêtes, sa gastronomie et ses grands artistes, ce qui rend cette culture d'une grande richesse et diversité.",
    },
  ],
  fiche: {
    intro:
      "Le monde hispanique regroupe plus de vingt pays sur plusieurs continents, avec une grande diversité culturelle. Il faut savoir utiliser la construction se habla/se hablan, accorder les gentilicios, et connaître quelques repères culturels essentiels.",
    sections: [
      {
        titre: "Le monde hispanophone",
        points: [
          "Plus de vingt pays officiellement hispanophones, en Europe et en Amérique",
          "L'espagnol est la deuxième langue la plus parlée au monde par nombre de locuteurs natifs",
        ],
      },
      {
        titre: "Se habla/se hablan et les gentilicios",
        points: [
          "Se + verbe à la 3e personne, accordé avec ce qui suit : se habla español, se hablan varias lenguas",
          "Gentilicios : accord en genre/nombre, sans majuscule (mexicano, francesa, nicaragüense)",
        ],
      },
      {
        titre: "Fêtes et gastronomie",
        points: [
          "El Día de los Muertos, La Tomatina, Las Fallas, la Semana Santa",
          "Los tacos, la paella, las arepas, el asado : la diversité gastronomique",
        ],
      },
      {
        titre: "Arts et musique",
        points: [
          "Frida Kahlo, Pablo Picasso, Gabriel García Márquez : peinture et littérature",
          "El flamenco, la salsa, el tango, la cumbia : musique et danse",
        ],
      },
    ],
    audio:
      "Fiche de révision : la culture du monde hispanique. L'espagnol est parlé officiellement dans plus de vingt pays, en Europe avec España et en Amérique avec México, Argentina, Colombia, Perú et bien d'autres. Pour dire quelle langue on parle sans préciser qui parle, on utilise la construction impersonnelle se habla ou se hablan, qui s'accorde avec ce qui suit : en México se habla español, en Perú se hablan español y quechua. Les gentilicios, adjectifs de nationalité, s'accordent en genre et en nombre et s'écrivent sans majuscule : mexicano, francesa, nicaragüense. Le monde hispanique est riche en traditions, comme el Día de los Muertos, La Tomatina ou Las Fallas, en gastronomie, avec los tacos, la paella ou las arepas, et en art, avec des figures comme Frida Kahlo, Pablo Picasso et Gabriel García Márquez.",
  },
  memoCards: [
    { recto: "Se habla español / Se hablan varias lenguas", verso: "On parle espagnol (singulier) / on parle plusieurs langues (pluriel) : construction impersonnelle se + verbe accordé." },
    { recto: "Mexicano/a, colombiano/a, argentino/a", verso: "Gentilicios en -o/-a, accordés en genre." },
    { recto: "Francés/francesa, inglés/inglesa", verso: "Gentilicios en -és/-esa, accordés en genre." },
    { recto: "Nicaragüense, costarricense", verso: "Gentilicios invariables en genre (une seule forme pour masculin/féminin)." },
    { recto: "El Día de los Muertos (México)", verso: "Fête traditionnelle qui célèbre les défunts avec des offrandes et des calaveras." },
    { recto: "La Tomatina / Las Fallas (España)", verso: "Bataille de tomates à Buñol / sculptures brûlées à Valencia." },
    { recto: "Frida Kahlo / Pablo Picasso", verso: "Peintre mexicaine (autoportraits) / peintre espagnol (créateur du cubisme)." },
    { recto: "El flamenco / La salsa / El tango", verso: "Danses traditionnelles d'Andalucía / des Caraïbes / d'Argentina et Uruguay." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de pays environ ont l'espagnol comme langue officielle ?",
      choix: ["cinq", "dix", "plus de vingt", "cinquante"],
      bonneReponse: 2,
      explication: "L'espagnol est langue officielle dans plus de vingt pays.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « on parle espagnol » ?",
      choix: ["se hablan español", "se habla español", "habla se español", "español se hablan"],
      bonneReponse: 1,
      explication: "Se habla espagnol au singulier car español est singulier.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « Au Mexique, on célèbre le Jour des Morts en novembre. »",
      reponse: "En México, se celebra el Día de los Muertos en noviembre.",
      explication: "Se celebra, construction impersonnelle avec un sujet singulier.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le gentilicio d'Argentina ?",
      choix: ["argentina", "argentino/argentina", "argento", "argentés"],
      bonneReponse: 1,
      explication: "Argentino au masculin, argentina au féminin.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement la construction impersonnelle au pluriel ?",
      choix: ["En Perú se habla varias lenguas", "En Perú se hablan varias lenguas", "En Perú hablan se varias lenguas", "En Perú se hablas varias lenguas"],
      bonneReponse: 1,
      explication: "Se hablan car « varias lenguas » est pluriel : le verbe s'accorde avec ce qui suit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris le gentilicio féminin de « francés » et utilise-le dans une phrase avec se habla.",
      reponse: "Francesa. En Francia se habla francés, no español.",
      explication: "Francés devient francesa au féminin.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « En Espagne, on dîne très tard. »",
      reponse: "En España, se cena muy tarde.",
      explication: "Se cena, construction impersonnelle avec cenar.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle danse est originaire d'Andalucía, dans le sud de l'Espagne ?",
      choix: ["el tango", "la salsa", "el flamenco", "la cumbia"],
      bonneReponse: 2,
      explication: "El flamenco est né en Andalucía.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la règle d'accord de la construction impersonnelle « se + verbe », avec un exemple au singulier et un exemple au pluriel.",
      reponse:
        "Dans la construction se + verbe, le verbe s'accorde avec ce qui suit, comme si c'était le sujet grammatical. Au singulier : en México se habla español (un objet parlé). Au pluriel : en Perú se hablan español y quechua (deux langues, donc verbe au pluriel).",
      explication: "C'est la même logique d'accord que pour gustar : le verbe suit ce qui vient après.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi écrit-on « mexicano » sans majuscule en espagnol, contrairement au français « Mexicain » ?",
      choix: [
        "C'est une erreur fréquente, il faudrait mettre une majuscule",
        "En espagnol, les gentilicios s'écrivent toujours en minuscule, contrairement au français",
        "Seuls les gentilicios féminins prennent une minuscule",
        "Mexicano n'est pas un gentilicio"
      ],
      bonneReponse: 1,
      explication: "Contrairement au français, l'espagnol n'utilise pas de majuscule pour les adjectifs de nationalité.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente en 5 phrases un pays hispanophone de ton choix : sa langue, une fête, un plat typique et un artiste célèbre, en utilisant se habla et un gentilicio.",
      reponse:
        "En México se habla español. Los mexicanos celebran el Día de los Muertos en noviembre. Un plato típico es el taco. Frida Kahlo, pintora mexicana, es muy famosa en todo el mundo. La cultura mexicana es muy rica y colorida.",
      explication: "Le texte combine se habla, le gentilicio (mexicanos, mexicana) et des repères culturels précis.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Compare une tradition espagnole et une tradition latino-américaine en 4-5 phrases, en utilisant au moins un gentilicio et la construction se + verbe.",
      reponse:
        "En España se celebran Las Fallas, con esculturas gigantes que se queman en marzo. En México se celebra el Día de los Muertos, una fiesta muy colorida en honor a los difuntos. Los españoles y los mexicanos tienen tradiciones diferentes, pero ambas son muy importantes en su cultura.",
      explication: "Le texte utilise se celebran/se celebra et les gentilicios españoles/mexicanos.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quel pays se trouve La Tomatina ?",
      choix: ["México", "Argentina", "España", "Colombia"],
      bonneReponse: 2,
      explication: "La Tomatina se déroule à Buñol, en Espagne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « on mange » (impersonnel) ?",
      choix: ["se come", "se comen", "comer se", "se comerá"],
      bonneReponse: 0,
      explication: "Se come, construction impersonnelle au singulier avec comer.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « En Colombie, on parle espagnol. » (utilise se habla)",
      reponse: "En Colombia se habla español.",
      explication: "Se habla, construction impersonnelle avec un objet singulier.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne le gentilicio masculin et féminin de « Colombia ».",
      reponse: "Colombiano, colombiana.",
      explication: "Gentilicio en -o/-a, comme mexicano/mexicana.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente en 3 phrases une fête hispanique de ton choix, avec se + verbe et un gentilicio.",
      reponse: "En México se celebra el Día de los Muertos. Los mexicanos preparan ofrendas para sus familiares. Es una fiesta muy colorida y emotiva.",
      explication: "Le texte combine se celebra et le gentilicio mexicanos.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La culture du monde hispanique",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel plat est typique d'Espagne ?",
          choix: ["los tacos", "las arepas", "la paella", "el asado"],
          bonneReponse: 2,
          explication: "La paella est un plat traditionnel espagnol.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qui était Gabriel García Márquez ?",
          choix: ["un pintor español", "un escritor colombiano", "un bailarín argentino", "un músico mexicano"],
          bonneReponse: 1,
          explication: "Gabriel García Márquez était un écrivain colombien, prix Nobel de littérature.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Au Pérou, on parle espagnol et quechua. »",
          reponse: "En Perú se hablan español y quechua.",
          explication: "Se hablan au pluriel car il y a deux langues mentionnées.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne le gentilicio féminin de « inglés » et utilise-le dans une phrase.",
          reponse: "Inglesa. Mi amiga inglesa vive en Madrid.",
          explication: "Inglés devient inglesa au féminin, comme francés/francesa.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige une présentation complète (6 phrases minimum) du monde hispanique : langue, deux pays différents, une fête, un plat et un artiste, en utilisant se habla et au moins un gentilicio.",
          reponse:
            "El español se habla en más de veinte países. En España se celebran Las Fallas en marzo. En México se habla español y se celebra el Día de los Muertos. Un plato típico mexicano es el taco, mientras que en España se come mucha paella. Frida Kahlo, pintora mexicana, es conocida en todo el mundo. La cultura hispánica es muy diversa y rica.",
          explication: "Le texte combine se habla, gentilicios (mexicano/mexicana) et plusieurs repères culturels précis.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « se hablan » dans « En Perú se hablan español y quechua » et non « se habla » ?",
          choix: [
            "Parce que Perú est un pays pluriel",
            "Parce que le verbe s'accorde avec ce qui suit, ici deux langues au pluriel",
            "C'est une erreur, il faudrait dire se habla",
            "Parce que quechua est un mot toujours pluriel"
          ],
          bonneReponse: 1,
          explication: "La construction se + verbe s'accorde avec le groupe qui suit, ici deux éléments donc pluriel.",
        },
      ],
    },
    {
      titre: "Examen 2 — La culture du monde hispanique",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Où se trouve principalement le flamenco ?",
          choix: ["en Argentina", "en Andalucía (España)", "en México", "en Colombia"],
          bonneReponse: 1,
          explication: "Le flamenco est originaire d'Andalucía, dans le sud de l'Espagne.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel plat vient de Colombia et Venezuela ?",
          choix: ["las arepas", "los tacos", "la paella", "el asado"],
          bonneReponse: 0,
          explication: "Las arepas sont typiques de Colombia et du Venezuela.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « En Argentine, on dit vos au lieu de tú. » (curiosité linguistique, utilise se dice)",
          reponse: "En Argentina se dice « vos » en vez de « tú ».",
          explication: "Se dice, construction impersonnelle au singulier avec decir.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un correspondant te demande de décrire une fête de ton pays hispanophone préféré. Réponds en 2 phrases avec se + verbe.",
          reponse: "En México se celebra el Día de los Muertos con ofrendas coloridas. Las familias se reúnen para recordar a sus seres queridos.",
          explication: "Se celebra et se reúnen, deux exemples de construction impersonnelle/pronominale.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare deux gentilicios différents (un en -o/-a et un en -és/-esa) en donnant un exemple de chacun dans une phrase complète.",
          reponse:
            "Colombiano/colombiana suit le schéma -o/-a : mi amigo colombiano vive en Bogotá. Francés/francesa suit le schéma -és/-esa : tengo una amiga francesa que vive en España. Les deux s'accordent en genre, mais avec des terminaisons différentes.",
          explication: "Les gentilicios suivent plusieurs schémas d'accord selon leur terminaison.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle affirmation sur la diversité du monde hispanophone est correcte ?",
          choix: [
            "Tous les pays hispanophones ont exactement les mêmes traditions",
            "L'espagnol change d'accent et de vocabulaire selon les pays, malgré une langue commune",
            "Seule l'Espagne parle réellement espagnol",
            "Il n'existe aucune différence culturelle entre les pays hispanophones"
          ],
          bonneReponse: 1,
          explication: "Le monde hispanophone partage une langue commune mais présente une grande diversité culturelle et linguistique.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'espagnol est langue officielle dans plus de vingt pays, en Europe et en Amérique.",
    "Se habla/se hablan : construction impersonnelle, le verbe s'accorde avec ce qui suit.",
    "Gentilicios : accord en genre/nombre (mexicano/a, francés/esa, nicaragüense), toujours sans majuscule.",
    "Fêtes emblématiques : el Día de los Muertos, La Tomatina, Las Fallas, la Semana Santa.",
    "Gastronomie et arts : los tacos, la paella, las arepas ; Frida Kahlo, Picasso, García Márquez.",
    "Musique et danse : el flamenco (Andalucía), la salsa (Caribe), el tango (Argentina/Uruguay).",
  ],
},
{
  slug: "futuro-planes",
  titre: "Le futur et les projets",
  matiere: "espagnol",
  niveau: "3eme",
  langueVoix: "es-ES",
  description:
    "Exprimer des projets et des prédictions en espagnol avec le futur simple (futuro imperfecto) : verbes réguliers et irréguliers, différence avec ir a + infinitif, et marqueurs de temps pour parler de l'avenir.",
  objectifs: [
    "Former le futur simple des verbes réguliers (-ar, -er, -ir)",
    "Conjuguer les verbes irréguliers les plus fréquents au futur simple",
    "Distinguer le futur simple (prédiction) et ir a + infinitif (projet décidé)",
    "Utiliser des marqueurs de temps du futur (el año que viene, dentro de…, algún día)",
    "Faire des prédictions et des promesses en espagnol",
  ],
  slides: [
    {
      titre: "Le futur simple régulier",
      illustration: "🔮",
      visuel: "Infinitivo + terminaciones",
      contenu: [
        "Les terminaisons du futur sont les mêmes pour -ar, -er et -ir",
        "-é, -ás, -á, -emos, -éis, -án, ajoutées directement à l'infinitif",
        "Viajar → viajaré, viajarás, viajará, viajaremos, viajaréis, viajarán",
        "Le futur simple se forme sur l'infinitif complet, sans le modifier",
      ],
      voixOff:
        "Le futur simple, appelé futuro imperfecto en espagnol, se forme très simplement : on ajoute des terminaisons directement à l'infinitif du verbe, et ces terminaisons sont les mêmes pour les trois groupes, -ar, -er et -ir. Elles sont -é, -ás, -á, -emos, -éis, -án. Par exemple, viajar donne viajaré, viajarás, viajará, viajaremos, viajaréis, viajarán. Contrairement au présent, l'infinitif reste entier, on ne retire rien avant d'ajouter la terminaison.",
    },
    {
      titre: "Exemples avec les trois groupes",
      illustration: "📘",
      visuel: "Comeré / Viviré",
      contenu: [
        "-ER : comer → comeré, comerás, comerá, comeremos, comeréis, comerán",
        "-IR : vivir → viviré, vivirás, vivirá, viviremos, viviréis, vivirán",
        "El año que viene viviré en otra ciudad : l'année prochaine je vivrai dans une autre ville",
        "Comeremos juntos en Navidad : nous mangerons ensemble à Noël",
      ],
      voixOff:
        "Les verbes en -er et en -ir suivent exactement les mêmes terminaisons que les verbes en -ar. Comer donne comeré, comerás, comerá, comeremos, comeréis, comerán. Vivir donne viviré, vivirás, vivirá, viviremos, viviréis, vivirán. Par exemple, el año que viene viviré en otra ciudad, l'année prochaine je vivrai dans une autre ville.",
    },
    {
      titre: "Les verbes irréguliers au futur",
      illustration: "⚡",
      visuel: "Tendré, haré, podré…",
      contenu: [
        "Le radical change, mais les terminaisons restent identiques",
        "Tener → tendré — Hacer → haré — Poder → podré — Salir → saldré",
        "Decir → diré — Querer → querré — Saber → sabré — Poner → pondré",
        "Venir → vendré — Haber → habré",
      ],
      voixOff:
        "Une dizaine de verbes très courants ont un radical irrégulier au futur, mais gardent les mêmes terminaisons. Tener devient tendré, hacer devient haré, poder devient podré, salir devient saldré. Decir devient diré, querer devient querré, saber devient sabré, poner devient pondré. Enfin, venir devient vendré, et haber devient habré. Il faut simplement mémoriser ces nouveaux radicaux.",
    },
    {
      titre: "Futur simple ou ir a + infinitif ?",
      illustration: "⚖️",
      visuel: "Voy a estudiar / Estudiaré",
      contenu: [
        "Ir a + infinitif : projet décidé, proche, dans l'immédiat — Voy a estudiar esta tarde",
        "Futuro simple : prédiction, promesse, plan plus lointain ou incertain — Estudiaré medicina",
        "En el futuro, los coches serán eléctricos (prédiction générale)",
        "Ambas formas existent, mais leur nuance de sens est différente",
      ],
      voixOff:
        "Attention à ne pas confondre les deux façons de parler du futur. Ir a plus infinitif exprime un projet déjà décidé, souvent proche dans le temps : voy a estudiar esta tarde, je vais étudier cet après-midi. Le futuro simple exprime plutôt une prédiction, une promesse, ou un projet plus lointain ou incertain : estudiaré medicina, j'étudierai la médecine. On dit aussi en el futuro, los coches serán eléctricos, dans le futur, les voitures seront électriques : c'est une prédiction générale.",
    },
    {
      titre: "Exprimer des projets et des prédictions",
      illustration: "🗓️",
      visuel: "El año que viene…",
      contenu: [
        "El año que viene : l'année prochaine — Dentro de dos años : dans deux ans",
        "En el futuro : dans le futur — Algún día : un jour",
        "Probablemente / Seguramente : probablement / sûrement",
        "Cuando sea mayor, seré veterinario/a : quand je serai grand, je serai vétérinaire",
      ],
      voixOff:
        "Pour situer un projet ou une prédiction dans le temps, on utilise plusieurs expressions. El año que viene, l'année prochaine, dentro de dos años, dans deux ans, en el futuro, dans le futur, et algún día, un jour. On ajoute souvent probablemente ou seguramente pour nuancer une prédiction. Une phrase classique : cuando sea mayor, seré veterinario, quand je serai grand, je serai vétérinaire.",
    },
    {
      titre: "Le futur pour les promesses",
      illustration: "🤝",
      visuel: "Te lo prometo",
      contenu: [
        "Le futur simple sert aussi à faire une promesse",
        "Te ayudaré con los deberes : je t'aiderai avec les devoirs",
        "No lo volveré a hacer : je ne le referai plus",
        "Siempre estaré aquí para ti : je serai toujours là pour toi",
      ],
      voixOff:
        "Le futur simple ne sert pas uniquement à prédire l'avenir : il permet aussi de faire des promesses. Te ayudaré con los deberes, je t'aiderai avec les devoirs. No lo volveré a hacer, je ne le referai plus. Siempre estaré aquí para ti, je serai toujours là pour toi. Ce sont des phrases très utiles pour exprimer un engagement.",
    },
    {
      titre: "Prédire l'avenir du monde",
      illustration: "🌐",
      visuel: "En el futuro, todo será diferente",
      contenu: [
        "En el futuro, habrá menos contaminación : dans le futur, il y aura moins de pollution",
        "Los robots harán muchos trabajos : les robots feront beaucoup de travaux",
        "La gente vivirá más años : les gens vivront plus longtemps",
        "Todo será más rápido y conectado : tout sera plus rapide et connecté",
      ],
      voixOff:
        "Le futur simple est idéal pour imaginer le monde de demain. En el futuro, habrá menos contaminación, dans le futur, il y aura moins de pollution — habrá vient de haber. Los robots harán muchos trabajos, les robots feront beaucoup de travaux. La gente vivirá más años, les gens vivront plus longtemps. Todo será más rápido y conectado, tout sera plus rapide et connecté.",
    },
    {
      titre: "Des phrases complètes sur l'avenir",
      illustration: "📝",
      visuel: "Mis planes de futuro",
      contenu: [
        "El año que viene iré a un instituto nuevo.",
        "Algún día viajaré por todo el mundo.",
        "Cuando termine mis estudios, trabajaré como ingeniera.",
        "Probablemente tendré una casa cerca del mar.",
      ],
      voixOff:
        "Voici des exemples complets de projets futurs. El año que viene iré a un instituto nuevo, l'année prochaine j'irai dans un nouveau lycée. Algún día viajaré por todo el mundo, un jour je voyagerai à travers le monde entier. Cuando termine mis estudios, trabajaré como ingeniera, quand je terminerai mes études, je travaillerai comme ingénieure. Probablemente tendré una casa cerca del mar, j'aurai probablement une maison près de la mer.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Infinitivo + é/ás/á/emos/éis/án",
      contenu: [
        "Terminaisons identiques pour -ar/-er/-ir : -é, -ás, -á, -emos, -éis, -án",
        "Irréguliers : tendré, haré, podré, saldré, diré, querré, sabré, pondré, vendré, habrá",
        "Ir a + infinitif = décision proche ; futuro simple = prédiction/promesse",
        "Marqueurs : el año que viene, dentro de…, algún día, en el futuro",
      ],
      voixOff:
        "Résumons. Le futur simple ajoute -é, -ás, -á, -emos, -éis, -án directement à l'infinitif, pour les trois groupes de verbes. Retiens les irréguliers les plus fréquents : tendré, haré, podré, saldré, diré, querré, sabré, pondré, vendré, et habrá pour haber. N'oublie pas la différence : ir a plus infinitif pour une décision proche, futuro simple pour une prédiction ou une promesse. Utilise des marqueurs comme el año que viene, dentro de, ou algún día !",
    },
  ],
  fiche: {
    intro:
      "Le futur simple (futuro imperfecto) permet d'exprimer des projets, des prédictions et des promesses. Il se forme en ajoutant des terminaisons à l'infinitif, avec quelques verbes irréguliers à mémoriser.",
    sections: [
      {
        titre: "La formation régulière",
        points: [
          "Infinitif + -é, -ás, -á, -emos, -éis, -án (identique pour -ar/-er/-ir)",
          "Viajaré, comeré, viviré : l'infinitif ne change pas",
        ],
      },
      {
        titre: "Les verbes irréguliers",
        points: [
          "Tener→tendré, hacer→haré, poder→podré, salir→saldré, decir→diré",
          "Querer→querré, saber→sabré, poner→pondré, venir→vendré, haber→habré",
        ],
      },
      {
        titre: "Futuro simple ou ir a + infinitif",
        points: [
          "Ir a + infinitif : projet décidé, proche — Voy a estudiar esta tarde",
          "Futuro simple : prédiction, promesse, plan lointain — Estudiaré medicina",
        ],
      },
      {
        titre: "Les marqueurs de temps",
        points: [
          "El año que viene, dentro de…, algún día, en el futuro",
          "Probablemente, seguramente pour nuancer une prédiction",
        ],
      },
    ],
    audio:
      "Fiche de révision : le futur et les projets en espagnol. Le futur simple se forme en ajoutant les terminaisons -é, -ás, -á, -emos, -éis, -án directement à l'infinitif, identiques pour les trois groupes de verbes : viajaré, comeré, viviré. Plusieurs verbes ont un radical irrégulier mais gardent les mêmes terminaisons : tener donne tendré, hacer donne haré, poder donne podré, salir donne saldré, decir donne diré, querer donne querré, saber donne sabré, poner donne pondré, venir donne vendré, et haber donne habré. Il faut distinguer ir a plus infinitif, qui exprime un projet déjà décidé et proche, du futuro simple, qui exprime plutôt une prédiction ou une promesse. On utilise des marqueurs de temps comme el año que viene, dentro de, algún día ou en el futuro.",
  },
  memoCards: [
    { recto: "Viajar (futuro) : viajaré, viajarás, viajará…", verso: "Voyager : terminaisons -é/-ás/-á/-emos/-éis/-án ajoutées à l'infinitif." },
    { recto: "Tener → Tendré / Hacer → Haré", verso: "Avoir/Faire : radicaux irréguliers au futur, mêmes terminaisons." },
    { recto: "Poder → Podré / Salir → Saldré", verso: "Pouvoir/Sortir : radicaux irréguliers au futur." },
    { recto: "Decir → Diré / Querer → Querré", verso: "Dire/Vouloir : radicaux irréguliers au futur." },
    { recto: "Poner → Pondré / Venir → Vendré", verso: "Mettre/Venir : radicaux irréguliers au futur." },
    { recto: "Ir a + infinitivo vs Futuro simple", verso: "Projet décidé et proche vs prédiction/promesse." },
    { recto: "El año que viene / Algún día", verso: "L'année prochaine / un jour (marqueurs du futur)." },
    { recto: "Habrá (haber)", verso: "Il y aura (forme impersonnelle du futur de haber)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « viajar » au futur avec « yo » ?",
      choix: ["viajo", "viajé", "viajaré", "viajaba"],
      bonneReponse: 2,
      explication: "Viajaré est le futur simple de viajar à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « l'année prochaine » ?",
      choix: ["el año pasado", "este año", "el año que viene", "hace un año"],
      bonneReponse: 2,
      explication: "El año que viene signifie l'année prochaine.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « Je vivrai en Espagne un jour. »",
      reponse: "Viviré en España algún día.",
      explication: "Viviré est le futur simple de vivir à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la terminaison du futur pour « nosotros » ?",
      choix: ["-emos", "-amos", "-imos", "-emos/-íamos"],
      bonneReponse: 0,
      explication: "La terminaison nosotros du futur est -emos, identique pour -ar/-er/-ir.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « tener » au futur avec « yo » ?",
      choix: ["tendré", "teneré", "tenré", "tendo"],
      bonneReponse: 0,
      explication: "Tener a un radical irrégulier au futur : tendr-, d'où tendré.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « hacer » au futur avec « tú » et traduis « tu feras tes devoirs mañana ».",
      reponse: "Harás. Harás tus deberes mañana.",
      explication: "Hacer a un radical irrégulier au futur : har-, d'où harás.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Dans deux ans, nous aurons un nouveau collège. » (utilise haber)",
      reponse: "Dentro de dos años, habrá un instituto nuevo.",
      explication: "Habrá est la forme impersonnelle du futur de haber, invariable.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase exprime un projet déjà décidé et proche, plutôt qu'une prédiction ?",
      choix: ["Seré médico algún día", "Voy a estudiar esta tarde", "En el futuro habrá robots", "Los coches serán eléctricos"],
      bonneReponse: 1,
      explication: "Ir a + infinitif exprime une décision proche et déjà prise.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre le futuro simple et ir a + infinitif, avec un exemple pour chacun.",
      reponse:
        "Ir a + infinitif exprime un projet déjà décidé, souvent proche dans le temps : voy a estudiar esta tarde, je vais étudier cet après-midi, c'est prévu. Le futuro simple exprime plutôt une prédiction, une promesse, ou un projet plus lointain et incertain : estudiaré medicina, j'étudierai la médecine, c'est une intention générale, pas encore fixée dans le détail.",
      explication: "La nuance porte sur le degré de certitude et la proximité temporelle du projet.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi « saldré » (salir) et non « saliré » au futur ?",
      choix: [
        "Salir est un verbe régulier, saliré serait correct aussi",
        "Salir a un radical irrégulier au futur : sald-, comme tener (tendré) et venir (vendré)",
        "C'est une erreur, il faut dire saldré uniquement au subjonctif",
        "Salir ne peut pas se conjuguer au futur"
      ],
      bonneReponse: 1,
      explication: "Salir, tener et venir suivent le même schéma d'irrégularité au futur : un d s'insère avant la terminaison.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un texte (5 phrases) sur tes projets d'avenir, en utilisant au moins deux verbes réguliers et deux verbes irréguliers au futur simple.",
      reponse:
        "El año que viene iré a un instituto nuevo. Estudiaré mucho para tener buenas notas. Algún día tendré un trabajo interesante. Viviré en una ciudad grande y viajaré por el mundo. Seré feliz con mi familia.",
      explication: "Le texte combine iré, tendré (irréguliers) et estudiaré, viviré, viajaré, seré.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige des prédictions sur le monde de demain (4-5 phrases) en utilisant habrá, serán et au moins un autre verbe irrégulier au futur.",
      reponse:
        "En el futuro, habrá menos contaminación gracias a la tecnología. Los coches serán eléctricos. Los robots harán muchos trabajos difíciles. La gente podrá viajar al espacio más fácilmente.",
      explication: "Le texte utilise habrá (haber), serán (ser), harán (hacer) et podrá (poder), tous irréguliers.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « comer » au futur avec « ellos » ?",
      choix: ["comen", "comerán", "comieron", "comían"],
      bonneReponse: 1,
      explication: "Comerán est le futur simple de comer à la troisième personne du pluriel.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Algún día » signifie :",
      choix: ["jamais", "un jour", "toujours", "hier"],
      bonneReponse: 1,
      explication: "Algún día signifie un jour.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Elle pourra venir demain. » (poder)",
      reponse: "Podrá venir mañana.",
      explication: "Poder a un radical irrégulier au futur : podr-.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète avec le verbe au futur : « Cuando sea mayor, __ (ser) profesor. »",
      reponse: "Cuando sea mayor, seré profesor.",
      explication: "Ser est irrégulier au futur simple : seré, serás, será…",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente en 3 phrases un projet d'avenir avec un verbe régulier, un verbe irrégulier au futur, et un marqueur de temps.",
      reponse: "El año que viene estudiaré inglés. Algún día tendré mi propia empresa. Viviré en una ciudad cerca del mar.",
      explication: "Le texte combine estudiaré (régulier), tendré (irrégulier) et des marqueurs de temps.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le futur et les projets",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte de « vivir » au futur avec « tú » ?",
          choix: ["vives", "vivirás", "viviste", "vivías"],
          bonneReponse: 1,
          explication: "Vivirás est le futur simple de vivir à la deuxième personne du singulier.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « dans deux ans » ?",
          choix: ["hace dos años", "dentro de dos años", "el año pasado", "cada dos años"],
          bonneReponse: 1,
          explication: "Dentro de dos años signifie dans deux ans.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Je saurai la réponse demain. » (saber)",
          reponse: "Sabré la respuesta mañana.",
          explication: "Saber a un radical irrégulier au futur : sabr-.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « decir » au futur avec « ella » et traduis « elle dira la vérité ».",
          reponse: "Dirá. Dirá la verdad.",
          explication: "Decir a un radical irrégulier au futur : dir-.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un texte complet (6 phrases minimum) sur tes projets professionnels futurs, avec au moins trois verbes irréguliers au futur et un marqueur de temps.",
          reponse:
            "Cuando termine mis estudios, tendré un trabajo interesante. Haré un curso de idiomas primero. Podré viajar por trabajo a varios países. Saldré de casa muy pronto para vivir sola. Algún día pondré mi propia empresa. Sabré tomar buenas decisiones.",
          explication: "Le texte utilise tendré, haré, podré, saldré, pondré et sabré, tous irréguliers au futur.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle phrase distingue le mieux une prédiction générale d'un projet immédiat ?",
          choix: [
            "« Voy a comer ahora » et « Comeré algún día » ont le même sens",
            "« En el futuro, la gente vivirá más años » (prédiction) et « Voy a cenar esta noche » (projet immédiat)",
            "Le futuro simple ne peut jamais exprimer une prédiction",
            "Ir a + infinitif s'utilise uniquement pour le passé"
          ],
          bonneReponse: 1,
          explication: "Le futuro simple convient aux prédictions générales, ir a + infinitif aux projets immédiats et décidés.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le futur et les projets",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte de « hablar » au futur avec « nosotros » ?",
          choix: ["hablamos", "hablaremos", "hablábamos", "hablaríamos"],
          bonneReponse: 1,
          explication: "Hablaremos est le futur simple de hablar à la première personne du pluriel.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « probablement » ?",
          choix: ["seguramente", "probablemente", "nunca", "siempre"],
          bonneReponse: 1,
          explication: "Probablemente signifie probablement.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Ils viendront à la fête samedi. » (venir)",
          reponse: "Vendrán a la fiesta el sábado.",
          explication: "Venir a un radical irrégulier au futur : vendr-.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande « ¿Qué harás el año que viene? ». Réponds avec deux projets au futur.",
          reponse: "Estudiaré en un instituto nuevo y aprenderé alemán.",
          explication: "La réponse utilise estudiaré et aprenderé, tous deux réguliers au futur.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare le futuro simple et ir a + infinitif en donnant un exemple de chacun, puis explique dans quel contexte utiliser l'un plutôt que l'autre.",
          reponse:
            "Ir a + infinitif convient pour un projet déjà décidé et proche : voy a estudiar esta tarde. Le futuro simple convient pour une prédiction plus générale ou incertaine : algún día estudiaré en el extranjero. On utilise ir a pour ce qui est planifié, et le futuro simple pour ce qui reste une intention ou une hypothèse.",
          explication: "Le choix dépend du degré de certitude et de la proximité temporelle du projet évoqué.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Cuando sea mayor, pondré mi propio negocio », pourquoi utilise-t-on « pondré » et non « poneré » ?",
          choix: [
            "Poner suit le même schéma d'irrégularité que tener et venir : un d s'insère dans le radical",
            "C'est une erreur, poneré serait la forme correcte",
            "Poner n'a pas de futur en espagnol",
            "Pondré vient d'un autre verbe, ponerse"
          ],
          bonneReponse: 0,
          explication: "Poner, tener et venir insèrent tous un d dans leur radical au futur : pondré, tendré, vendré.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Futur simple régulier : infinitif + -é, -ás, -á, -emos, -éis, -án (mêmes terminaisons pour -ar/-er/-ir).",
    "Irréguliers à mémoriser : tendré, haré, podré, saldré, diré, querré, sabré, pondré, vendré, habrá.",
    "Ir a + infinitif = projet décidé et proche ; futuro simple = prédiction, promesse, plan plus lointain.",
    "Marqueurs de futur : el año que viene, dentro de…, algún día, en el futuro, probablemente.",
    "Le futur simple sert aussi à faire des promesses : te ayudaré, siempre estaré aquí.",
    "Habrá (haber) est une forme impersonnelle invariable qui signifie « il y aura ».",
  ],
},
{
  slug: "medio-ambiente",
  titre: "L'environnement",
  matiere: "espagnol",
  niveau: "3eme",
  langueVoix: "es-ES",
  description:
    "Parler de l'environnement en espagnol : le vocabulaire de l'écologie, exprimer une obligation avec hay que / tener que / deber, utiliser le superlatif et construire des phrases de condition réelle avec si + présent.",
  objectifs: [
    "Nommer les problèmes et les solutions environnementales",
    "Exprimer une obligation impersonnelle avec hay que + infinitif",
    "Exprimer une obligation personnelle avec tener que / deber + infinitif",
    "Former et utiliser le superlatif (el/la más… de)",
    "Construire une condition réelle avec si + présent",
  ],
  slides: [
    {
      titre: "Le vocabulaire de l'environnement",
      illustration: "🌍",
      visuel: "El planeta, la contaminación",
      contenu: [
        "El planeta, la naturaleza : la planète, la nature",
        "La contaminación : la pollution — La basura : les déchets",
        "El cambio climático : le changement climatique",
        "El calentamiento global : le réchauffement climatique",
      ],
      voixOff:
        "Pour parler d'écologie, il faut connaître le vocabulaire de base. El planeta, la planète, et la naturaleza, la nature. La contaminación, la pollution, et la basura, les déchets. On parle aussi du cambio climático, le changement climatique, et du calentamiento global, le réchauffement climatique.",
    },
    {
      titre: "Les problèmes environnementaux",
      illustration: "⚠️",
      visuel: "La deforestación, la sequía",
      contenu: [
        "La contaminación del aire / del agua : la pollution de l'air / de l'eau",
        "La deforestación : la déforestation",
        "La sequía : la sécheresse — Las inundaciones : les inondations",
        "La extinción de especies : la disparition d'espèces",
      ],
      voixOff:
        "Plusieurs problèmes menacent notre planète. La contaminación del aire et la contaminación del agua, la pollution de l'air et de l'eau. La deforestación, la déforestation. On observe aussi la sequía, la sécheresse, et las inundaciones, les inondations. Ces phénomènes provoquent la extinción de especies, la disparition d'espèces.",
    },
    {
      titre: "Les solutions écologiques",
      illustration: "♻️",
      visuel: "Reciclar, ahorrar, proteger",
      contenu: [
        "Reciclar : recycler — El reciclaje : le recyclage",
        "Ahorrar agua/energía : économiser l'eau/l'énergie",
        "Proteger la naturaleza : protéger la nature",
        "Usar el transporte público, ir en bici : utiliser les transports en commun, aller à vélo",
      ],
      voixOff:
        "Heureusement, il existe des solutions. Reciclar, recycler, donne le nom el reciclaje, le recyclage. On peut aussi ahorrar agua o energía, économiser l'eau ou l'énergie, et proteger la naturaleza, protéger la nature. Enfin, usar el transporte público o ir en bici, utiliser les transports en commun ou aller à vélo, réduit la pollution.",
    },
    {
      titre: "Hay que + infinitif : l'obligation impersonnelle",
      illustration: "☝️",
      visuel: "Hay que reciclar",
      contenu: [
        "Hay que + infinitif : il faut… (obligation générale, sans sujet précis)",
        "Hay que reciclar más : il faut recycler davantage",
        "Hay que proteger los océanos : il faut protéger les océans",
        "Cette structure ne se conjugue jamais : hay que reste invariable",
      ],
      voixOff:
        "Pour exprimer une obligation générale, sans préciser qui doit agir, on utilise hay que suivi d'un infinitif. Hay que reciclar más, il faut recycler davantage. Hay que proteger los océanos, il faut protéger les océans. Cette structure ne se conjugue jamais : hay que reste toujours identique, quel que soit le sujet réel.",
    },
    {
      titre: "Tener que / Deber : l'obligation personnelle",
      illustration: "🫵",
      visuel: "Tenemos que actuar",
      contenu: [
        "Tener que + infinitif : devoir (obligation forte, personnelle)",
        "Tenemos que actuar ahora : nous devons agir maintenant",
        "Deber + infinitif : devoir (conseil ou obligation plus douce)",
        "Debes apagar la luz al salir : tu dois éteindre la lumière en sortant",
      ],
      voixOff:
        "Contrairement à hay que, tener que et deber s'appliquent à une personne précise et se conjuguent. Tener que exprime une obligation forte : tenemos que actuar ahora, nous devons agir maintenant. Deber exprime plutôt un conseil ou une obligation plus douce : debes apagar la luz al salir, tu dois éteindre la lumière en sortant.",
    },
    {
      titre: "Le superlatif",
      illustration: "🏔️",
      visuel: "El problema más grave",
      contenu: [
        "El/la/los/las + más/menos + adjectif + de : le/la plus/moins… de",
        "El cambio climático es el problema más grave de nuestra época",
        "La contaminación es la causa menos ignorada de todas",
        "Irréguliers : el mejor/la mejor (le meilleur), el peor/la peor (le pire)",
      ],
      voixOff:
        "Pour exprimer un degré extrême, on utilise le superlatif : el, la, los ou las, suivi de más ou menos, de l'adjectif, puis de de. El cambio climático es el problema más grave de nuestra época, le changement climatique est le problème le plus grave de notre époque. Deux formes sont irrégulières : el mejor et la mejor pour le meilleur, el peor et la peor pour le pire.",
    },
    {
      titre: "La condition réelle : si + présent",
      illustration: "🔁",
      visuel: "Si reciclamos, protegemos el planeta",
      contenu: [
        "Si + présent, + présent : condition réaliste et habituelle",
        "Si reciclamos, protegemos el planeta : si nous recyclons, nous protégeons la planète",
        "Si + présent, + impératif : Si ves basura, recógela",
        "Le verbe après « si » reste toujours au présent, jamais au futur",
      ],
      voixOff:
        "Pour exprimer une condition réelle et probable, on utilise si suivi du présent, puis un autre verbe au présent ou à l'impératif. Si reciclamos, protegemos el planeta, si nous recyclons, nous protégeons la planète. On peut aussi utiliser l'impératif : si ves basura, recógela, si tu vois des déchets, ramasse-les. Attention, le verbe qui suit si reste toujours au présent, jamais au futur.",
    },
    {
      titre: "Des phrases complètes sur l'environnement",
      illustration: "📝",
      visuel: "Hay que actuar juntos",
      contenu: [
        "Hay que reducir la contaminación del aire en las ciudades.",
        "Tenemos que reciclar el plástico y el papel todos los días.",
        "Si ahorramos energía, luchamos contra el calentamiento global.",
        "El agua es el recurso más importante de nuestro planeta.",
      ],
      voixOff:
        "Voici des exemples complets. Hay que reducir la contaminación del aire en las ciudades, il faut réduire la pollution de l'air dans les villes. Tenemos que reciclar el plástico y el papel todos los días, nous devons recycler le plastique et le papier tous les jours. Si ahorramos energía, luchamos contra el calentamiento global, si nous économisons l'énergie, nous luttons contre le réchauffement climatique. El agua es el recurso más importante de nuestro planeta, l'eau est la ressource la plus importante de notre planète.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Hay que / Tener que / El más… de / Si + presente",
      contenu: [
        "Hay que + infinitif : obligation impersonnelle, invariable",
        "Tener que / deber + infinitif : obligation personnelle, se conjugue",
        "El/la más/menos + adjectif + de : le superlatif",
        "Si + présent, + présent/impératif : condition réelle",
      ],
      voixOff:
        "Résumons. Hay que suivi d'un infinitif exprime une obligation générale et reste toujours invariable. Tener que et deber expriment une obligation personnelle et se conjuguent selon le sujet. Le superlatif se forme avec el ou la, más ou menos, l'adjectif, puis de. Enfin, pour exprimer une condition réelle, utilise si suivi du présent, puis un verbe au présent ou à l'impératif !",
    },
  ],
  fiche: {
    intro:
      "Pour parler de l'environnement en espagnol, il faut connaître le vocabulaire écologique, savoir exprimer une obligation (hay que, tener que, deber), utiliser le superlatif et construire une condition réelle avec si.",
    sections: [
      {
        titre: "Le vocabulaire de l'environnement",
        points: [
          "El planeta, la naturaleza, la contaminación, la basura",
          "El cambio climático, el calentamiento global, la deforestación",
          "Reciclar, ahorrar, proteger : les solutions écologiques",
        ],
      },
      {
        titre: "Exprimer une obligation",
        points: [
          "Hay que + infinitif : obligation générale et impersonnelle, invariable",
          "Tener que + infinitif : obligation forte et personnelle, se conjugue",
          "Deber + infinitif : conseil ou obligation plus douce, se conjugue",
        ],
      },
      {
        titre: "Le superlatif",
        points: [
          "El/la/los/las + más/menos + adjectif + de",
          "Irréguliers : el mejor/la mejor, el peor/la peor",
        ],
      },
      {
        titre: "La condition réelle",
        points: [
          "Si + présent, + présent : Si reciclamos, protegemos el planeta",
          "Si + présent, + impératif : Si ves basura, recógela",
          "Le verbe après si reste toujours au présent",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'environnement en espagnol. Le vocabulaire clé comprend el planeta, la contaminación, la basura, el cambio climático et el calentamiento global, ainsi que les solutions : reciclar, ahorrar et proteger. Pour exprimer une obligation générale, on utilise hay que suivi d'un infinitif, une structure invariable. Pour une obligation personnelle, on utilise tener que ou deber suivi d'un infinitif, qui se conjuguent selon le sujet. Le superlatif se forme avec el ou la, más ou menos, l'adjectif, puis de : el problema más grave. Enfin, pour exprimer une condition réelle, on utilise si suivi du présent, puis un verbe au présent ou à l'impératif : si reciclamos, protegemos el planeta.",
  },
  memoCards: [
    { recto: "El cambio climático / El calentamiento global", verso: "Le changement climatique / le réchauffement climatique." },
    { recto: "Reciclar / Ahorrar / Proteger", verso: "Recycler / économiser / protéger." },
    { recto: "Hay que + infinitivo", verso: "Il faut… (obligation impersonnelle, invariable). Ex : Hay que reciclar." },
    { recto: "Tener que + infinitivo", verso: "Devoir (obligation forte, se conjugue). Ex : Tenemos que actuar." },
    { recto: "Deber + infinitivo", verso: "Devoir (conseil, se conjugue). Ex : Debes apagar la luz." },
    { recto: "El/la más… de", verso: "Le/la plus… de (superlatif). Ex : El problema más grave de todos." },
    { recto: "El mejor / El peor", verso: "Le meilleur / le pire (superlatifs irréguliers)." },
    { recto: "Si + presente, + presente", verso: "Si + présent, présent : condition réelle. Ex : Si reciclamos, protegemos el planeta." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « les déchets » ?",
      choix: ["la naturaleza", "la basura", "el planeta", "el agua"],
      bonneReponse: 1,
      explication: "La basura signifie les déchets.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « recycler » ?",
      choix: ["ahorrar", "proteger", "reciclar", "contaminar"],
      bonneReponse: 2,
      explication: "Reciclar signifie recycler.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « Il faut protéger la nature. »",
      reponse: "Hay que proteger la naturaleza.",
      explication: "Hay que + infinitif exprime une obligation générale.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« El calentamiento global » signifie :",
      choix: ["le recyclage", "la pollution", "le réchauffement climatique", "la sécheresse"],
      bonneReponse: 2,
      explication: "El calentamiento global signifie le réchauffement climatique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase exprime une obligation personnelle qui se conjugue ?",
      choix: ["Hay que reciclar", "Tenemos que reciclar", "Reciclar es importante", "Hay reciclar"],
      bonneReponse: 1,
      explication: "Tener que se conjugue selon le sujet, contrairement à hay que qui est invariable.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Tu dois économiser l'eau à la maison. » (deber)",
      reponse: "Debes ahorrar agua en casa.",
      explication: "Debes est la deuxième personne du singulier de deber.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Si nous économisons l'énergie, nous luttons contre le réchauffement climatique. »",
      reponse: "Si ahorramos energía, luchamos contra el calentamiento global.",
      explication: "Si + présent, + présent pour une condition réelle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte du superlatif de « grave » avec « el problema » ?",
      choix: ["el problema muy grave", "el problema más grave de", "el problema grave más", "el problema el más grave"],
      bonneReponse: 1,
      explication: "Le superlatif se forme avec el + más + adjectif + de.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre « hay que » et « tener que », avec un exemple pour chacun.",
      reponse:
        "Hay que exprime une obligation générale et impersonnelle, sans sujet précis, et reste invariable : hay que reciclar más, il faut recycler davantage. Tener que exprime une obligation personnelle adressée à quelqu'un en particulier, et se conjugue selon le sujet : tenemos que reciclar más, nous devons recycler davantage.",
      explication: "La différence porte sur la présence ou l'absence d'un sujet précis, et sur la conjugaison.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Si contaminamos el mar, destruimos el ecosistema », quel temps suit « si » et pourquoi ?",
      choix: [
        "Le futur, car l'action n'a pas encore eu lieu",
        "Le présent, car c'est une condition réelle et habituelle",
        "Le passé, car l'action est terminée",
        "Le subjonctif, obligatoire après si"
      ],
      bonneReponse: 1,
      explication: "Pour une condition réelle et probable, l'espagnol utilise si + présent, jamais le futur ni le subjonctif après si.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un court texte (5 phrases) sur les problèmes environnementaux et les solutions, en utilisant hay que, tener que ou deber, et un superlatif.",
      reponse:
        "El cambio climático es el problema más grave de nuestra época. Hay que reducir la contaminación del aire. Tenemos que reciclar más plástico y papel. Debemos usar el transporte público. Si actuamos juntos, protegemos mejor el planeta.",
      explication: "Le texte combine superlatif, hay que, tener que, deber et une condition réelle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Compare une obligation impersonnelle (hay que) et une condition réelle (si + présent) en donnant un exemple pour chacune, et explique la différence de sens.",
      reponse:
        "Hay que reciclar más exprime une règle générale valable pour tout le monde, sans préciser qui agit. Si reciclamos, protegemos el planeta exprime une conséquence logique liée à une action précise. La première est une obligation, la seconde une relation de cause à effet.",
      explication: "Les deux structures sont utiles mais expriment des idées grammaticalement différentes.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « la pollution » ?",
      choix: ["la basura", "la contaminación", "el reciclaje", "la naturaleza"],
      bonneReponse: 1,
      explication: "La contaminación signifie la pollution.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Ahorrar » signifie :",
      choix: ["polluer", "économiser", "détruire", "recycler"],
      bonneReponse: 1,
      explication: "Ahorrar signifie économiser.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Nous devons protéger les océans. » (tener que)",
      reponse: "Tenemos que proteger los océanos.",
      explication: "Tenemos que + infinitif pour une obligation personnelle au pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète : « ___ el planeta es el recurso más importante. » (l'eau)",
      reponse: "El agua es el recurso más importante del planeta.",
      explication: "Superlatif : el recurso más importante, avec de pour introduire le groupe comparé.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige trois conseils écologiques en utilisant hay que, deber et si + présent.",
      reponse: "Hay que reciclar el papel. Debes apagar las luces al salir. Si ahorramos agua, protegemos el planeta.",
      explication: "Les trois phrases combinent les structures du chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'environnement",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « la déforestation » ?",
          choix: ["la sequía", "la deforestación", "la inundación", "la extinción"],
          bonneReponse: 1,
          explication: "La deforestación signifie la déforestation.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Proteger » signifie :",
          choix: ["détruire", "protéger", "polluer", "gaspiller"],
          bonneReponse: 1,
          explication: "Proteger signifie protéger.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Il faut réduire la pollution dans les villes. »",
          reponse: "Hay que reducir la contaminación en las ciudades.",
          explication: "Hay que + infinitif pour une obligation générale.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « deber » avec « vosotros » et traduis « vous devez recycler plus ».",
          reponse: "Debéis. Debéis reciclar más.",
          explication: "Debéis est la forme vosotros de deber, verbe régulier.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un texte complet (6 phrases minimum) sur l'environnement : un problème, une obligation avec hay que, une obligation personnelle, un superlatif et une condition réelle avec si.",
          reponse:
            "El calentamiento global es el problema más grave de nuestra época. Hay que actuar rápidamente para proteger el planeta. Tenemos que reciclar el plástico todos los días. También debemos ahorrar energía en casa. Si todos reciclamos, reducimos la contaminación. El agua es el recurso más importante que debemos proteger.",
          explication: "Le texte combine superlatif, hay que, tener que, deber et si + présent de façon cohérente.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi ne peut-on pas dire « Hay que reciclamos » ?",
          choix: [
            "Parce que hay que doit toujours être suivi d'un infinitif, jamais d'un verbe conjugué",
            "Parce que reciclar est un verbe irrégulier",
            "Parce qu'il faudrait dire hay que reciclado",
            "C'est correct, cette phrase est possible"
          ],
          bonneReponse: 0,
          explication: "Hay que se construit obligatoirement avec un infinitif : hay que reciclar.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'environnement",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « les inondations » ?",
          choix: ["la sequía", "las inundaciones", "la basura", "la naturaleza"],
          bonneReponse: 1,
          explication: "Las inundaciones signifie les inondations.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« El reciclaje » signifie :",
          choix: ["le recyclage", "la pollution", "la nature", "l'énergie"],
          bonneReponse: 0,
          explication: "El reciclaje signifie le recyclage.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « L'eau est la ressource la plus précieuse de notre planète. »",
          reponse: "El agua es el recurso más valioso de nuestro planeta.",
          explication: "Superlatif : el recurso más valioso de + nom.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande ce qu'il doit faire pour protéger l'environnement. Réponds avec deber et hay que.",
          reponse: "Debes reciclar más. Hay que ahorrar agua y energía.",
          explication: "Deber + infinitif (personnel) et hay que + infinitif (impersonnel).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare le superlatif et l'obligation avec tener que en donnant un exemple pour chacun, puis explique leur fonction respective.",
          reponse:
            "Le superlatif compare un élément à tout un groupe pour souligner son caractère extrême : la contaminación es el problema más urgente de todos. Tener que exprime une obligation personnelle adressée à un sujet précis : tenemos que actuar ahora. Le superlatif sert à hiérarchiser, tener que sert à imposer une action.",
          explication: "Les deux structures ont des fonctions grammaticales différentes mais complémentaires dans un discours écologique.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Si protegemos los océanos, salvamos muchas especies », quelle est la fonction de « si » ici ?",
          choix: [
            "Il introduit une question",
            "Il introduit une condition réelle suivie du présent des deux côtés",
            "Il introduit le subjonctif obligatoire",
            "Il signifie « oui » dans cette phrase"
          ],
          bonneReponse: 1,
          explication: "Si + présent, + présent exprime une condition réelle et une conséquence logique.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vocabulaire clé : el planeta, la contaminación, la basura, el cambio climático, reciclar, ahorrar, proteger.",
    "Hay que + infinitif : obligation impersonnelle, toujours invariable.",
    "Tener que / deber + infinitif : obligation personnelle, se conjuguent selon le sujet.",
    "Superlatif : el/la más/menos + adjectif + de ; irréguliers el mejor/el peor.",
    "Condition réelle : si + présent, + présent ou impératif (jamais le futur après si).",
    "Un discours écologique combine vocabulaire, obligation et superlatif pour convaincre.",
  ],
},
{
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
},
{
  slug: "vacaciones-viajes",
  titre: "Vacances et voyages",
  matiere: "espagnol",
  niveau: "3eme",
  langueVoix: "es-ES",
  description:
    "Raconter ses vacances passées avec le passé simple et le prétérit, exprimer des projets futurs avec « ir a + infinitif » et enrichir son vocabulaire des voyages et des moyens de transport.",
  objectifs: [
    "Conjuguer les verbes réguliers au prétérit (pretérito indefinido)",
    "Utiliser des verbes irréguliers courants au passé (ser, ir, hacer, estar)",
    "Exprimer un projet futur avec ir a + infinitif",
    "Nommer les moyens de transport et le vocabulaire du voyage",
    "Raconter un séjour de vacances passé et présenter un projet de voyage",
  ],
  slides: [
    {
      titre: "El pretérito indefinido : les verbes réguliers",
      illustration: "🕰️",
      visuel: "Viajé, viajaste, viajó…",
      contenu: [
        "-AR : viajar → viajé, viajaste, viajó, viajamos, viajasteis, viajaron",
        "-ER/-IR : comer → comí, comiste, comió, comimos, comisteis, comieron",
        "Ce temps s'utilise pour une action passée et terminée",
        "El verano pasado viajé a España : l'été dernier j'ai voyagé en Espagne",
      ],
      voixOff:
        "Pour raconter des vacances passées, on utilise le pretérito indefinido, l'équivalent du passé composé français dans son usage. Les verbes en -ar, comme viajar, voyager, se conjuguent viajé, viajaste, viajó, viajamos, viajasteis, viajaron. Les verbes en -er et -ir partagent les mêmes terminaisons : comí, comiste, comió, comimos, comisteis, comieron. Ce temps décrit une action terminée et datée, comme el verano pasado viajé a España, l'été dernier j'ai voyagé en Espagne.",
    },
    {
      titre: "Les verbes irréguliers : ser/ir et hacer",
      illustration: "⚡",
      visuel: "Fui / Hice",
      contenu: [
        "Ser et ir ont la MÊME forme au prétérit : fui, fuiste, fue, fuimos, fuisteis, fueron",
        "Hacer : hice, hiciste, hizo, hicimos, hicisteis, hicieron",
        "Fui a Barcelona : je suis allé(e) à Barcelone (ir)",
        "Fue un viaje increíble : ce fut un voyage incroyable (ser)",
      ],
      voixOff:
        "Attention, deux verbes très courants, ser et ir, partagent exactement les mêmes formes au prétérit : fui, fuiste, fue, fuimos, fuisteis, fueron. C'est le contexte qui permet de savoir lequel des deux est utilisé. Fui a Barcelona veut dire je suis allé à Barcelone, avec ir. Fue un viaje increíble veut dire ce fut un voyage incroyable, avec ser. Le verbe hacer, faire, se conjugue lui hice, hiciste, hizo, hicimos, hicisteis, hicieron.",
    },
    {
      titre: "D'autres verbes irréguliers utiles",
      illustration: "🧳",
      visuel: "Estuve / Tuve / Vi",
      contenu: [
        "Estar : estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron",
        "Tener : tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron",
        "Ver : vi, viste, vio, vimos, visteis, vieron",
        "Estuve dos semanas en México : je suis resté deux semaines au Mexique",
      ],
      voixOff:
        "D'autres verbes irréguliers sont indispensables pour raconter un voyage. Estar, être/se trouver : estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron. Tener, avoir : tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron. Ver, voir : vi, viste, vio, vimos, visteis, vieron. Par exemple, estuve dos semanas en México, je suis resté deux semaines au Mexique.",
    },
    {
      titre: "Les moyens de transport",
      illustration: "✈️",
      visuel: "En avión, en tren, en coche",
      contenu: [
        "El avión, el tren, el coche, el autobús, el barco",
        "Viajar en avión / en tren : voyager en avion / en train",
        "Coger el avión / tomar el avión : prendre l'avion",
        "El aeropuerto, la estación : l'aéroport, la gare",
      ],
      voixOff:
        "Pour parler du transport, connais el avión, l'avion, el tren, le train, el coche, la voiture, el autobús, le bus, et el barco, le bateau. On dit viajar en avión ou viajar en tren pour voyager en avion ou en train. Pour dire prendre l'avion, on utilise coger el avión en Espagne, ou tomar el avión en Amérique latine. N'oublie pas el aeropuerto, l'aéroport, et la estación, la gare.",
    },
    {
      titre: "Le vocabulaire des vacances",
      illustration: "🏖️",
      visuel: "La playa, las vacaciones",
      contenu: [
        "Las vacaciones : les vacances — la playa : la plage",
        "El alojamiento, el hotel, el camping : l'hébergement, l'hôtel, le camping",
        "Tomar el sol, bañarse en el mar : bronzer, se baigner dans la mer",
        "Hacer turismo, visitar monumentos : faire du tourisme, visiter des monuments",
      ],
      voixOff:
        "Voici le vocabulaire clé des vacances : las vacaciones, les vacances, et la playa, la plage. Pour l'hébergement : el alojamiento, el hotel, el camping. Les activités : tomar el sol, bronzer, bañarse en el mar, se baigner dans la mer, ou hacer turismo, faire du tourisme, et visitar monumentos, visiter des monuments.",
    },
    {
      titre: "Le futur proche : ir a + infinitif",
      illustration: "🔮",
      visuel: "Voy a viajar",
      contenu: [
        "Ir (présent) + a + infinitif : voy a, vas a, va a, vamos a, vais a, van a",
        "El próximo verano voy a viajar a Perú : l'été prochain je vais voyager au Pérou",
        "Vamos a visitar Madrid : nous allons visiter Madrid",
        "Sert à exprimer un projet, une intention proche dans le futur",
      ],
      voixOff:
        "Pour parler d'un projet futur, on utilise le verbe ir au présent, suivi de a et d'un infinitif : voy a, vas a, va a, vamos a, vais a, van a. Par exemple, el próximo verano voy a viajar a Perú, l'été prochain je vais voyager au Pérou. On peut dire aussi vamos a visitar Madrid, nous allons visiter Madrid. Cette structure est très utile pour exprimer une intention proche !",
    },
    {
      titre: "Raconter un voyage complet",
      illustration: "📖",
      visuel: "El verano pasado…",
      contenu: [
        "El verano pasado fui a Italia con mi familia.",
        "Viajamos en avión y estuvimos una semana en Roma.",
        "Visitamos muchos monumentos y comimos pasta deliciosa.",
        "El próximo año vamos a ir a Grecia.",
      ],
      voixOff:
        "Voici un récit complet de vacances. El verano pasado fui a Italia con mi familia, l'été dernier je suis allé en Italie avec ma famille. Viajamos en avión y estuvimos una semana en Roma, nous avons voyagé en avion et sommes restés une semaine à Rome. Visitamos muchos monumentos y comimos pasta deliciosa, nous avons visité de nombreux monuments et mangé des pâtes délicieuses. El próximo año vamos a ir a Grecia, l'année prochaine nous allons aller en Grèce.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Pretérito + Ir a + infinitivo",
      contenu: [
        "Prétérit régulier : -é/-aste/-ó (viajar) ou -í/-iste/-ió (comer)",
        "Irréguliers essentiels : fui (ser/ir), hice (hacer), estuve (estar), tuve (tener)",
        "Ir a + infinitif = projet futur : voy a viajar",
        "Vocabulaire clé : el avión, la playa, las vacaciones, hacer turismo",
      ],
      voixOff:
        "Résumons. Le prétérit régulier se forme avec -é, -aste, -ó pour les verbes en -ar, et -í, -iste, -ió pour les verbes en -er et -ir. Retiens les irréguliers essentiels : fui pour ser et ir, hice pour hacer, estuve pour estar, tuve pour tener. Pour le futur, la structure ir a plus infinitif exprime un projet, comme voy a viajar. Enfin, n'oublie pas le vocabulaire des vacances : el avión, la playa, las vacaciones, hacer turismo !",
    },
  ],
  fiche: {
    intro:
      "Pour raconter ses vacances, on utilise le prétérit (pretérito indefinido), avec des verbes réguliers et plusieurs irréguliers très fréquents. Pour évoquer un projet futur, la structure ir a + infinitif est indispensable.",
    sections: [
      {
        titre: "Le prétérit régulier",
        points: [
          "-AR : viajé, viajaste, viajó, viajamos, viajasteis, viajaron",
          "-ER/-IR : comí, comiste, comió, comimos, comisteis, comieron",
          "S'utilise pour une action passée et terminée, souvent datée",
        ],
      },
      {
        titre: "Les irréguliers essentiels",
        points: [
          "Ser/Ir : fui, fuiste, fue, fuimos, fuisteis, fueron (même forme pour les deux verbes)",
          "Hacer : hice, hiciste, hizo, hicimos, hicisteis, hicieron",
          "Estar : estuve… — Tener : tuve… — Ver : vi, viste, vio…",
        ],
      },
      {
        titre: "Le futur proche",
        points: [
          "Ir (présent) + a + infinitif : voy a, vas a, va a, vamos a, vais a, van a",
          "El próximo verano voy a viajar a Perú",
          "Exprime un projet ou une intention proche",
        ],
      },
      {
        titre: "Le vocabulaire du voyage",
        points: [
          "El avión, el tren, el coche, el barco — el aeropuerto, la estación",
          "Las vacaciones, la playa, el alojamiento",
          "Hacer turismo, visitar monumentos, tomar el sol, bañarse en el mar",
        ],
      },
    ],
    audio:
      "Fiche de révision : vacances et voyages en espagnol. Pour raconter une action passée et terminée, on utilise le pretérito indefinido. Les verbes en -ar se conjuguent viajé, viajaste, viajó, viajamos, viajasteis, viajaron. Les verbes en -er et -ir se conjuguent comí, comiste, comió, comimos, comisteis, comieron. Plusieurs verbes sont irréguliers : ser et ir partagent la même forme, fui, fuiste, fue, fuimos, fuisteis, fueron. Hacer devient hice, hiciste, hizo. Estar devient estuve, et tener devient tuve. Pour exprimer un projet futur, on utilise ir au présent suivi de a et d'un infinitif : voy a viajar, vas a viajar, va a viajar. Le vocabulaire du voyage comprend el avión, el tren, la playa, las vacaciones, hacer turismo et visitar monumentos.",
  },
  memoCards: [
    { recto: "Viajar (prétérit) : viajé, viajaste, viajó…", verso: "Voyager (verbe régulier en -ar au prétérit)." },
    { recto: "Comer (prétérit) : comí, comiste, comió…", verso: "Manger (verbe régulier en -er au prétérit)." },
    { recto: "Ser/Ir (prétérit) : fui, fuiste, fue…", verso: "Être/Aller (même forme irrégulière pour les deux verbes)." },
    { recto: "Hacer (prétérit) : hice, hiciste, hizo…", verso: "Faire (verbe irrégulier au prétérit)." },
    { recto: "Estar/Tener (prétérit) : estuve/tuve…", verso: "Être (se trouver) / avoir (verbes irréguliers au prétérit)." },
    { recto: "Ir a + infinitivo", verso: "Futur proche : voy a viajar (je vais voyager)." },
    { recto: "El avión, el tren, el barco", verso: "L'avion, le train, le bateau (moyens de transport)." },
    { recto: "Hacer turismo / Tomar el sol", verso: "Faire du tourisme / bronzer." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « viajar » au prétérit avec « yo » ?",
      choix: ["viajo", "viajé", "viajaba", "viajaré"],
      bonneReponse: 1,
      explication: "Viajé est la première personne du singulier du prétérit de viajar.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « je vais voyager » (futur proche) ?",
      choix: ["Viajé", "Voy a viajar", "Viajo", "Viajaba"],
      bonneReponse: 1,
      explication: "Ir a + infinitif exprime le futur proche : voy a viajar.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « L'été dernier, j'ai voyagé en Espagne. »",
      reponse: "El verano pasado, viajé a España.",
      explication: "Viajé est le prétérit de viajar à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « l'avion » ?",
      choix: ["el tren", "el avión", "el barco", "el coche"],
      bonneReponse: 1,
      explication: "El avión signifie l'avion.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement « fui » ?",
      choix: ["Fui muy contento", "Fui a Madrid", "Les deux phrases sont correctes selon le contexte", "Fui n'existe pas"],
      bonneReponse: 2,
      explication: "Fui vient de ser (fui muy contento = j'étais très content) ou de ir (fui a Madrid = je suis allé à Madrid).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « hacer » au prétérit avec « nosotros » et traduis « nous avons fait du tourisme ».",
      reponse: "Hicimos. Hicimos turismo.",
      explication: "Hicimos est la forme nosotros du prétérit irrégulier de hacer.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « L'année prochaine, nous allons visiter Grèce. »",
      reponse: "El próximo año, vamos a visitar Grecia.",
      explication: "Vamos a + infinitif est le futur proche à la première personne du pluriel.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « estar » au prétérit avec « ellos » ?",
      choix: ["estaron", "estuvieron", "estarán", "estaban"],
      bonneReponse: 1,
      explication: "Estuvieron est la troisième personne du pluriel du prétérit irrégulier de estar.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Raconte en 4 phrases un séjour de vacances passé, en utilisant au moins deux verbes irréguliers au prétérit (fui, hice, estuve, tuve, vi).",
      reponse:
        "El verano pasado fui a Portugal con mis padres. Estuvimos una semana en Lisboa. Hicimos mucho turismo y vimos monumentos increíbles. ¡Fue un viaje fantástico!",
      explication: "Le texte utilise fui, estuvimos, hicimos, vimos et fue, tous irréguliers.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Vimos el mar por primera vez », quel est l'infinitif du verbe « vimos » ?",
      choix: ["venir", "ver", "vivir", "volver"],
      bonneReponse: 1,
      explication: "Vimos vient de ver (voir), irrégulier au prétérit : vi, viste, vio, vimos, visteis, vieron.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi « fui » peut se traduire de deux façons différentes selon le contexte, avec un exemple pour chaque sens.",
      reponse:
        "Fui vient à la fois du prétérit de ser (être) et de ir (aller), qui partagent exactement les mêmes formes. Exemple ser : Fui muy feliz (j'ai été/j'étais très heureux). Exemple ir : Fui a la playa (je suis allé à la plage).",
      explication: "C'est une particularité unique de l'espagnol : deux verbes différents, une seule conjugaison au prétérit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un court texte (4-5 phrases) mêlant un récit de vacances passées (prétérit) et un projet de vacances futures (ir a + infinitif).",
      reponse:
        "El año pasado fui a Francia y visité París. Comí muchos croissants y vi la Torre Eiffel. Fue un viaje inolvidable. El próximo verano voy a viajar a Portugal con mi familia.",
      explication: "Le texte alterne prétérit pour le passé et ir a + infinitif pour le projet futur.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « comer » au prétérit avec « tú » ?",
      choix: ["comes", "comiste", "comías", "comerás"],
      bonneReponse: 1,
      explication: "Comiste est la deuxième personne du singulier du prétérit de comer.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Voy a visitar Roma » signifie :",
      choix: ["J'ai visité Rome", "Je visite Rome", "Je vais visiter Rome", "Je visitais Rome"],
      bonneReponse: 2,
      explication: "Ir a + infinitif exprime un futur proche : je vais visiter.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Nous avons pris le train pour aller à Barcelone. »",
      reponse: "Tomamos/Cogimos el tren para ir a Barcelona.",
      explication: "Tomar ou coger (prétérit régulier -ar) + el tren.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « tener » au prétérit avec « yo » et traduis « j'ai eu de la chance ».",
      reponse: "Tuve. Tuve suerte.",
      explication: "Tuve est la première personne du prétérit irrégulier de tener.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente un projet de vacances futures en 3 phrases avec ir a + infinitif.",
      reponse: "El próximo verano voy a ir a Grecia. Voy a visitar muchas islas. También voy a bañarme en el mar.",
      explication: "Les trois phrases utilisent voy a + infinitif pour exprimer un projet.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Vacances et voyages",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte de « hacer » au prétérit avec « yo » ?",
          choix: ["hago", "hice", "haré", "hacía"],
          bonneReponse: 1,
          explication: "Hice est la première personne du prétérit irrégulier de hacer.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « la plage » ?",
          choix: ["el mar", "la playa", "el sol", "las vacaciones"],
          bonneReponse: 1,
          explication: "La playa signifie la plage.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « L'été dernier, je suis allé au Portugal et j'ai vu la mer. »",
          reponse: "El verano pasado, fui a Portugal y vi el mar.",
          explication: "Fui (ir) et vi (ver) sont deux irréguliers du prétérit.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « estar » au prétérit avec « vosotros » et traduis « vous êtes restés une semaine ».",
          reponse: "Estuvisteis. Estuvisteis una semana.",
          explication: "Estuvisteis est la forme vosotros du prétérit irrégulier de estar.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un récit complet de vacances (6 phrases minimum) : où tu es allé, ce que tu as fait, ce que tu as vu, et un projet pour l'année prochaine.",
          reponse:
            "El verano pasado fui a Grecia con mi familia. Viajamos en avión y estuvimos diez días en Atenas. Hicimos mucho turismo y visitamos muchos monumentos antiguos. Comimos comida griega deliciosa y vimos el mar Egeo. Fue un viaje inolvidable. El próximo año, vamos a ir a Italia.",
          explication: "Le récit combine le prétérit régulier et irrégulier, ainsi que le futur proche.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi « fue » peut-il signifier à la fois « il/elle fut » et « il/elle alla » ?",
          choix: [
            "C'est une coïncidence sans importance",
            "Ser et ir partagent exactement les mêmes formes au prétérit",
            "Fue vient uniquement de ser",
            "Fue vient uniquement de ir"
          ],
          bonneReponse: 1,
          explication: "Ser et ir ont un prétérit identique : fui, fuiste, fue, fuimos, fuisteis, fueron.",
        },
      ],
    },
    {
      titre: "Examen 2 — Vacances et voyages",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « nous allons visiter » (futur proche) ?",
          choix: ["Visitamos", "Visitábamos", "Vamos a visitar", "Visitaremos"],
          bonneReponse: 2,
          explication: "Vamos a + infinitif exprime le futur proche à la première personne du pluriel.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « le train » ?",
          choix: ["el avión", "el barco", "el tren", "el coche"],
          bonneReponse: 2,
          explication: "El tren signifie le train.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Ils ont eu beaucoup de chance pendant leur voyage. »",
          reponse: "Tuvieron mucha suerte durante su viaje.",
          explication: "Tuvieron est le prétérit irrégulier de tener à la 3e personne du pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande « ¿Qué vas a hacer el próximo verano? ». Réponds en donnant un projet de voyage précis.",
          reponse: "El próximo verano voy a viajar a México con mi familia. Vamos a visitar pirámides mayas.",
          explication: "La réponse utilise ir a + infinitif pour un projet futur.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare l'usage du prétérit et du futur proche (ir a + infinitif) en donnant un exemple pour chacun, puis explique la différence de sens.",
          reponse:
            "Le prétérit décrit une action passée et terminée : viajé a Italia (j'ai voyagé en Italie, c'est fini). Ir a + infinitif décrit un projet futur proche : voy a viajar a Italia (je vais voyager en Italie, ce n'est pas encore fait).",
          explication: "Le prétérit regarde vers le passé, ir a + infinitif regarde vers l'avenir proche.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Cogimos el avión muy temprano », quel groupe de verbes suit « cogimos » et pourquoi n'y a-t-il pas de changement irrégulier ?",
          choix: [
            "Groupe -er, verbe irrégulier",
            "Groupe -er, verbe régulier au prétérit (cogimos suit -í, -iste, -ió...)",
            "Groupe -ar, verbe irrégulier",
            "Groupe -ir, verbe irrégulier"
          ],
          bonneReponse: 1,
          explication: "Coger est un verbe régulier en -er : cogí, cogiste, cogió, cogimos, cogisteis, cogieron.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Prétérit régulier : -ar → -é/-aste/-ó ; -er/-ir → -í/-iste/-ió (action passée terminée).",
    "Irréguliers essentiels : fui (ser/ir), hice (hacer), estuve (estar), tuve (tener), vi (ver).",
    "Ir a + infinitif = futur proche/projet : voy a viajar, vamos a visitar.",
    "Ser et ir partagent exactement les mêmes formes au prétérit : seul le contexte les distingue.",
    "Vocabulaire clé : el avión/tren/barco, la playa, las vacaciones, hacer turismo, tomar el sol.",
    "Le prétérit raconte le passé terminé ; ir a + infinitif annonce un projet futur.",
  ],
},
{
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
},
{
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
},
{
  slug: "preterito",
  titre: "Parler au passé (pretérito)",
  matiere: "espagnol",
  niveau: "4eme",
  langueVoix: "es-ES",
  description:
    "Découvrir le pretérito indefinido pour raconter des actions passées et terminées : conjugaison des verbes réguliers en -ar/-er/-ir, particularités orthographiques, verbes irréguliers ser/ir et hacer, et marqueurs de temps du passé.",
  objectifs: [
    "Savoir quand utiliser le pretérito (action passée et terminée)",
    "Conjuguer les verbes réguliers en -ar, -er et -ir au pretérito",
    "Repérer les changements orthographiques (c>qu, g>gu, z>c) à la première personne",
    "Conjuguer ser/ir et hacer au pretérito",
    "Employer des marqueurs de temps du passé (ayer, la semana pasada, el año pasado)",
  ],
  slides: [
    {
      titre: "Quand utiliser le pretérito",
      illustration: "⏳",
      visuel: "Ayer, la semana pasada…",
      contenu: [
        "Le pretérito raconte une action passée et terminée, souvent datée",
        "Ayer : hier — Anteayer : avant-hier",
        "La semana pasada, el mes pasado, el año pasado : la semaine/le mois/l'année dernier(ère)",
        "Hace dos días : il y a deux jours",
      ],
      voixOff:
        "Le pretérito indefinido sert à raconter une action terminée dans le passé, souvent accompagnée d'une date précise. On le reconnaît grâce à des marqueurs de temps : ayer, hier, anteayer, avant-hier, la semana pasada, la semaine dernière, el mes pasado, le mois dernier, et el año pasado, l'année dernière. On dit aussi hace dos días, il y a deux jours, pour situer une action dans le passé.",
    },
    {
      titre: "Les verbes réguliers en -AR",
      illustration: "🗣️",
      visuel: "Hablé, hablaste, habló…",
      contenu: [
        "Hablar : hablé, hablaste, habló, hablamos, hablasteis, hablaron",
        "Terminaisons : -é, -aste, -ó, -amos, -asteis, -aron",
        "Ayer hablé con mi profesora : hier j'ai parlé avec ma professeure",
        "Jugamos al fútbol el sábado pasado : nous avons joué au foot samedi dernier",
      ],
      voixOff:
        "Les verbes en -ar suivent des terminaisons régulières au pretérito. Hablar, parler, donne hablé, hablaste, habló, hablamos, hablasteis, hablaron. On reconnaît les terminaisons -é, -aste, -ó, -amos, -asteis, -aron. Par exemple, ayer hablé con mi profesora, hier j'ai parlé avec ma professeure. Jugamos al fútbol el sábado pasado, nous avons joué au foot samedi dernier.",
    },
    {
      titre: "Les verbes réguliers en -ER/-IR",
      illustration: "📗",
      visuel: "Comí, comiste, comió…",
      contenu: [
        "Comer : comí, comiste, comió, comimos, comisteis, comieron",
        "Vivir : viví, viviste, vivió, vivimos, vivisteis, vivieron",
        "Les verbes en -er et -ir partagent les mêmes terminaisons au pretérito",
        "Comí en un restaurante con mis amigos : j'ai mangé dans un restaurant avec mes amis",
      ],
      voixOff:
        "Les verbes en -er et en -ir se conjuguent avec les mêmes terminaisons au pretérito. Comer, manger, donne comí, comiste, comió, comimos, comisteis, comieron. Vivir, vivre, donne viví, viviste, vivió, vivimos, vivisteis, vivieron. Remarque que -er et -ir partagent exactement les mêmes terminaisons. Par exemple, comí en un restaurante con mis amigos, j'ai mangé dans un restaurant avec mes amis.",
    },
    {
      titre: "Particularités orthographiques",
      illustration: "✏️",
      visuel: "Busqué, jugué, empecé",
      contenu: [
        "Verbes en -car : c > qu devant é — Buscar → busqué",
        "Verbes en -gar : g > gu devant é — Jugar → jugué, llegar → llegué",
        "Verbes en -zar : z > c devant é — Empezar → empecé",
        "Ce changement concerne uniquement la première personne du singulier (yo)",
      ],
      voixOff:
        "Certains verbes changent une lettre à la première personne du singulier pour garder le même son. Les verbes en -car changent le c en qu : buscar devient busqué. Les verbes en -gar changent le g en gu : jugar devient jugué, llegar devient llegué. Les verbes en -zar changent le z en c : empezar devient empecé. Ce changement ne concerne que la forme yo ; les autres personnes restent régulières.",
    },
    {
      titre: "Ser et ir : une seule et même forme",
      illustration: "⚡",
      visuel: "Fui, fuiste, fue…",
      contenu: [
        "Ser et ir ont exactement la même conjugaison au pretérito",
        "Fui, fuiste, fue, fuimos, fuisteis, fueron",
        "Fui al cine (ir) : je suis allé(e) au cinéma",
        "Fue muy divertido (ser) : ce fut très amusant",
      ],
      voixOff:
        "Deux verbes très fréquents, ser et ir, se conjuguent exactement de la même façon au pretérito : fui, fuiste, fue, fuimos, fuisteis, fueron. C'est le contexte qui indique de quel verbe il s'agit. Fui al cine signifie je suis allé au cinéma, avec ir. Fue muy divertido signifie ce fut très amusant, avec ser.",
    },
    {
      titre: "Hacer au pretérito",
      illustration: "🔨",
      visuel: "Hice, hiciste, hizo…",
      contenu: [
        "Hacer : hice, hiciste, hizo, hicimos, hicisteis, hicieron",
        "Attention à hizo (avec z, pas c) à la troisième personne",
        "¿Qué hiciste ayer? : qu'as-tu fait hier ?",
        "Hice mis deberes por la tarde : j'ai fait mes devoirs l'après-midi",
      ],
      voixOff:
        "Le verbe hacer, faire, est irrégulier au pretérito : hice, hiciste, hizo, hicimos, hicisteis, hicieron. Attention à la troisième personne, hizo, qui s'écrit avec un z pour garder le son doux. Une question très utile : ¿qué hiciste ayer?, qu'as-tu fait hier ? On peut répondre hice mis deberes por la tarde, j'ai fait mes devoirs l'après-midi.",
    },
    {
      titre: "Pretérito contre présent",
      illustration: "🔀",
      visuel: "Hoy vs. Ayer",
      contenu: [
        "Présent : hoy juego al tenis (aujourd'hui je joue au tennis)",
        "Pretérito : ayer jugué al tenis (hier j'ai joué au tennis)",
        "Le marqueur temporel indique quel temps utiliser",
        "Ne jamais mélanger un marqueur de passé avec un verbe au présent",
      ],
      voixOff:
        "Il est essentiel de bien distinguer le présent et le pretérito grâce aux marqueurs de temps. Au présent, on dit hoy juego al tenis, aujourd'hui je joue au tennis. Au pretérito, on dit ayer jugué al tenis, hier j'ai joué au tennis. Le marqueur temporel, hoy ou ayer, t'indique immédiatement quel temps utiliser : ne mélange jamais un marqueur de passé avec un verbe au présent.",
    },
    {
      titre: "Exemples avec des marqueurs de temps",
      illustration: "📅",
      visuel: "La semana pasada…",
      contenu: [
        "La semana pasada visité un museo con mi clase.",
        "El mes pasado mis padres viajaron a Portugal.",
        "El año pasado fui a un campamento de verano.",
        "Anteayer hice una tarta de chocolate.",
      ],
      voixOff:
        "Voici plusieurs exemples combinant marqueurs de temps et pretérito. La semana pasada visité un museo con mi clase, la semaine dernière j'ai visité un musée avec ma classe. El mes pasado mis padres viajaron a Portugal, le mois dernier mes parents ont voyagé au Portugal. El año pasado fui a un campamento de verano, l'année dernière je suis allé à une colonie de vacances. Anteayer hice una tarta de chocolate, avant-hier j'ai fait un gâteau au chocolat.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 -é/-aste/-ó ; -í/-iste/-ió ; fui, hice",
      contenu: [
        "-AR : -é, -aste, -ó, -amos, -asteis, -aron",
        "-ER/-IR : -í, -iste, -ió, -imos, -isteis, -ieron",
        "Changements orthographiques à la 1ère personne : busqué, jugué, empecé",
        "Irréguliers essentiels : fui (ser/ir), hice (hacer)",
      ],
      voixOff:
        "Résumons. Les verbes en -ar se conjuguent avec -é, -aste, -ó, -amos, -asteis, -aron. Les verbes en -er et -ir partagent les terminaisons -í, -iste, -ió, -imos, -isteis, -ieron. N'oublie pas les changements orthographiques à la première personne : busqué, jugué, empecé. Enfin, retiens les deux irréguliers essentiels : fui pour ser et ir, et hice pour hacer. Utilise toujours un marqueur de temps comme ayer ou la semana pasada pour situer l'action !",
    },
  ],
  fiche: {
    intro:
      "Le pretérito indefinido permet de raconter une action passée et terminée. Il faut savoir conjuguer les verbes réguliers en -ar/-er/-ir, connaître les particularités orthographiques et les deux irréguliers essentiels, ser/ir et hacer.",
    sections: [
      {
        titre: "Quand utiliser le pretérito",
        points: [
          "Action passée et terminée, souvent datée par un marqueur de temps",
          "Ayer, anteayer, la semana pasada, el mes pasado, el año pasado, hace dos días",
        ],
      },
      {
        titre: "Les verbes réguliers",
        points: [
          "-AR : hablé, hablaste, habló, hablamos, hablasteis, hablaron",
          "-ER/-IR : comí/viví, comiste/viviste, comió/vivió, comimos/vivimos, comisteis/vivisteis, comieron/vivieron",
        ],
      },
      {
        titre: "Les particularités orthographiques",
        points: [
          "-car : c>qu → busqué (buscar)",
          "-gar : g>gu → jugué, llegué (jugar, llegar)",
          "-zar : z>c → empecé (empezar)",
        ],
      },
      {
        titre: "Les irréguliers essentiels",
        points: [
          "Ser/Ir : fui, fuiste, fue, fuimos, fuisteis, fueron (même forme)",
          "Hacer : hice, hiciste, hizo, hicimos, hicisteis, hicieron",
        ],
      },
    ],
    audio:
      "Fiche de révision : le pretérito indefinido en espagnol. Ce temps s'utilise pour une action passée et terminée, souvent accompagnée d'un marqueur comme ayer, la semana pasada ou el año pasado. Les verbes en -ar se conjuguent avec les terminaisons -é, -aste, -ó, -amos, -asteis, -aron, comme hablé. Les verbes en -er et -ir partagent les terminaisons -í, -iste, -ió, -imos, -isteis, -ieron, comme comí et viví. Certains verbes changent une lettre à la première personne du singulier pour garder le même son : buscar devient busqué, jugar devient jugué, empezar devient empecé. Enfin, deux verbes irréguliers sont indispensables : ser et ir, qui partagent la même forme, fui, fuiste, fue, et hacer, qui donne hice, hiciste, hizo.",
  },
  memoCards: [
    { recto: "Hablar (prétérit) : hablé, hablaste, habló…", verso: "Parler (verbe régulier en -ar)." },
    { recto: "Comer/Vivir (prétérit) : comí/viví, comiste/viviste…", verso: "Manger/Vivre (verbes réguliers en -er/-ir, mêmes terminaisons)." },
    { recto: "Buscar → busqué", verso: "Chercher : c devient qu à la 1ère personne pour garder le son." },
    { recto: "Jugar → jugué / Llegar → llegué", verso: "Jouer/Arriver : g devient gu à la 1ère personne." },
    { recto: "Empezar → empecé", verso: "Commencer : z devient c à la 1ère personne." },
    { recto: "Ser/Ir (prétérit) : fui, fuiste, fue…", verso: "Être/Aller : même forme irrégulière pour les deux verbes." },
    { recto: "Hacer (prétérit) : hice, hiciste, hizo…", verso: "Faire : verbe irrégulier (attention à hizo avec z)." },
    { recto: "Ayer / La semana pasada / El año pasado", verso: "Hier / la semaine dernière / l'année dernière (marqueurs du passé)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « hablar » au prétérit avec « yo » ?",
      choix: ["hablo", "hablé", "hablaba", "hablaré"],
      bonneReponse: 1,
      explication: "Hablé est la première personne du singulier du prétérit de hablar.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « hier » ?",
      choix: ["hoy", "mañana", "ayer", "siempre"],
      bonneReponse: 2,
      explication: "Ayer signifie hier.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « J'ai mangé une pizza hier soir. »",
      reponse: "Comí una pizza ayer por la noche.",
      explication: "Comí est le prétérit de comer à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la terminaison correcte de « vivir » avec « ella » au prétérit ?",
      choix: ["vivió", "vivo", "vivía", "vivirá"],
      bonneReponse: 0,
      explication: "Vivió est la troisième personne du singulier du prétérit de vivir.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « buscar » au prétérit avec « yo » ?",
      choix: ["busco", "buscé", "busqué", "buscaba"],
      bonneReponse: 2,
      explication: "Buscar change le c en qu à la première personne pour garder le son : busqué.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « jugar » au prétérit avec « yo » et traduis « j'ai joué au foot la semaine dernière ».",
      reponse: "Jugué. Jugué al fútbol la semana pasada.",
      explication: "Jugar change le g en gu à la première personne : jugué.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Le mois dernier, je suis allé au cinéma avec mes amis. »",
      reponse: "El mes pasado, fui al cine con mis amigos.",
      explication: "Fui est le prétérit irrégulier de ir.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement « hacer » au prétérit ?",
      choix: ["Hice mis deberes ayer", "Hago mis deberes ayer", "Hací mis deberes ayer", "Hació mis deberes ayer"],
      bonneReponse: 0,
      explication: "Hice est la première personne du singulier du prétérit irrégulier de hacer.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi « buscar » devient « busqué » et non « buscé » à la première personne du prétérit.",
      reponse:
        "Devant un e, la lettre c se prononce différemment. Pour garder le son dur du c de buscar, l'orthographe change en qu : busqué. Ce changement orthographique concerne uniquement la première personne du singulier (yo), les autres personnes restent régulières : buscaste, buscó, etc.",
      explication: "C'est une règle d'orthographe liée à la prononciation, pas une irrégularité de sens.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « El año pasado fue un año difícil », de quel infinitif vient « fue » et pourquoi n'est-ce pas ambigu ici ?",
      choix: [
        "De ir, car le contexte parle d'un déplacement",
        "De ser, car « un año difícil » est un attribut, pas une destination",
        "Impossible de savoir sans plus de contexte",
        "De hacer, verbe irrégulier"
      ],
      bonneReponse: 1,
      explication: "Fue vient de ser car il introduit un attribut (difícil), typique de ser, pas d'ir qui indique un déplacement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Raconte en 4-5 phrases ce que tu as fait le week-end dernier, avec au moins deux verbes réguliers et un verbe irrégulier (fui/hice) au prétérit.",
      reponse:
        "El fin de semana pasado, fui a casa de mis abuelos. Comimos juntos y hablamos mucho. Por la tarde, jugué al fútbol con mi primo. Hice los deberes por la noche.",
      explication: "Le texte combine fui (ir), jugué (jugar, orthographe), comimos et hablamos (réguliers) et hice (hacer).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un court récit (4 phrases) au prétérit décrivant une sortie scolaire, en utilisant un marqueur de temps et un verbe avec changement orthographique (buscar, jugar, llegar ou empezar).",
      reponse:
        "La semana pasada, mi clase visitó un museo. Llegamos a las nueve y la visita empezó a las nueve y media. Busqué información sobre los cuadros. Fue una excursión muy interesante.",
      explication: "Le texte utilise llegamos, empezó et busqué, avec un changement orthographique attendu au yo (busqué).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « comer » au prétérit avec « ellos » ?",
      choix: ["comen", "comieron", "comían", "comerán"],
      bonneReponse: 1,
      explication: "Comieron est la troisième personne du pluriel du prétérit de comer.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « l'année dernière » ?",
      choix: ["este año", "el año pasado", "el año que viene", "cada año"],
      bonneReponse: 1,
      explication: "El año pasado signifie l'année dernière.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Nous avons commencé les cours à huit heures. » (empezar)",
      reponse: "Empezamos las clases a las ocho.",
      explication: "Avec nosotros, empezar reste régulier : empezamos.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « ser/ir » au prétérit avec « nosotros » et traduis « nous sommes allés à la plage ».",
      reponse: "Fuimos. Fuimos a la playa.",
      explication: "Fuimos est la forme nosotros commune à ser et ir au prétérit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Raconte en 3 phrases une journée passée en utilisant un verbe régulier en -ar, un verbe en -er/-ir et le verbe hacer.",
      reponse: "Ayer hablé con mi amiga por teléfono. Después comimos juntas en su casa. Por la tarde, hice mis deberes.",
      explication: "Le texte combine hablé, comimos et hice, tous au prétérit.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le pretérito",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte de « vivir » avec « yo » au prétérit ?",
          choix: ["vivo", "viví", "vivía", "viviré"],
          bonneReponse: 1,
          explication: "Viví est la première personne du singulier du prétérit de vivir.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « avant-hier » ?",
          choix: ["ayer", "anteayer", "mañana", "hoy"],
          bonneReponse: 1,
          explication: "Anteayer signifie avant-hier.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « La semaine dernière, mes parents ont travaillé beaucoup. »",
          reponse: "La semana pasada, mis padres trabajaron mucho.",
          explication: "Trabajaron est le prétérit régulier de trabajar à la 3e personne du pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « llegar » au prétérit avec « yo » et traduis « je suis arrivé en retard hier ».",
          reponse: "Llegué. Llegué tarde ayer.",
          explication: "Llegar change le g en gu à la première personne pour garder le son : llegué.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un récit complet (6 phrases minimum) de ta journée d'hier, en utilisant au moins trois verbes réguliers et un verbe irrégulier (fui ou hice) au prétérit.",
          reponse:
            "Ayer me levanté a las siete. Desayuné rápido y fui al instituto. Por la mañana, hablé mucho con mis amigos. Comimos juntos a mediodía. Por la tarde, hice mis deberes de matemáticas. Finalmente, cené con mi familia y me acosté temprano.",
          explication: "Le récit combine plusieurs verbes réguliers et les irréguliers fui et hice de façon cohérente.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi les verbes en -er et -ir partagent-ils les mêmes terminaisons au prétérito, contrairement au présent ?",
          choix: [
            "C'est une particularité propre au prétérito : ces deux groupes fusionnent leurs terminaisons à ce temps",
            "Ce n'est pas vrai, ils ont des terminaisons différentes",
            "Seuls les verbes irréguliers en -ir partagent les terminaisons de -er",
            "C'est vrai uniquement au pluriel"
          ],
          bonneReponse: 0,
          explication: "Au prétérito, -er et -ir partagent exactement les mêmes terminaisons, contrairement au présent où ils diffèrent.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le pretérito",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte de « hacer » avec « tú » au prétérit ?",
          choix: ["haces", "hiciste", "hacías", "harás"],
          bonneReponse: 1,
          explication: "Hiciste est la deuxième personne du singulier du prétérit irrégulier de hacer.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « il y a deux jours » ?",
          choix: ["dentro de dos días", "hace dos días", "en dos días", "cada dos días"],
          bonneReponse: 1,
          explication: "Hace dos días signifie il y a deux jours.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « J'ai commencé mes devoirs à cinq heures. » (empezar)",
          reponse: "Empecé mis deberes a las cinco.",
          explication: "Empezar change le z en c à la première personne : empecé.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande « ¿Qué hiciste el fin de semana pasado? ». Réponds avec deux activités au prétérit.",
          reponse: "Vi una película y jugué al baloncesto con mis amigos.",
          explication: "La réponse utilise vi (ver) et jugué (jugar) au prétérit.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare le présent et le prétérito en donnant un exemple de chaque, puis explique comment on sait quel temps utiliser.",
          reponse:
            "Le présent décrit une habitude ou une action actuelle : hoy juego al tenis, aujourd'hui je joue au tennis. Le prétérito décrit une action passée et terminée : ayer jugué al tenis, hier j'ai joué au tennis. C'est le marqueur temporel (hoy, ayer, la semana pasada) qui indique quel temps utiliser.",
          explication: "Les marqueurs de temps sont les indices essentiels pour choisir le bon temps.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Empecé el libro pero no lo terminé », pourquoi « terminé » ne change-t-il pas d'orthographe alors que « empecé » oui ?",
          choix: [
            "Terminar se termine par -ar mais pas par -zar, -car ou -gar, donc il reste régulier",
            "C'est une erreur, terminé devrait s'écrire terminé avec un c",
            "Terminar est un verbe irrégulier au prétérito",
            "Les deux verbes devraient changer d'orthographe"
          ],
          bonneReponse: 0,
          explication: "Seuls les verbes en -car, -gar et -zar changent d'orthographe à la première personne ; terminar n'en fait pas partie.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le pretérito raconte une action passée et terminée, avec un marqueur de temps (ayer, la semana pasada, el año pasado).",
    "-AR : -é, -aste, -ó, -amos, -asteis, -aron (hablé, hablaste, habló…).",
    "-ER/-IR : -í, -iste, -ió, -imos, -isteis, -ieron (comí/viví…).",
    "Changements orthographiques à la 1ère personne : -car>qué (busqué), -gar>gué (jugué), -zar>cé (empecé).",
    "Ser/Ir partagent la même forme irrégulière : fui, fuiste, fue, fuimos, fuisteis, fueron.",
    "Hacer est irrégulier : hice, hiciste, hizo, hicimos, hicisteis, hicieron.",
  ],
},
{
  slug: "ropa-compras",
  titre: "Les vêtements et les achats",
  matiere: "espagnol",
  niveau: "4eme",
  langueVoix: "es-ES",
  description:
    "Faire du shopping en espagnol : le vocabulaire des vêtements et des couleurs, les démonstratifs (este/ese/aquel), la construction « me queda bien/mal », les comparatifs et le verbe costar pour parler des prix.",
  objectifs: [
    "Nommer les vêtements et accorder les couleurs en genre et en nombre",
    "Utiliser les démonstratifs este, ese, aquel selon la distance",
    "Employer la construction me queda/te queda/le queda bien/mal",
    "Comparer avec más… que, menos… que, tan… como",
    "Demander et comprendre un prix avec el verbe costar (o>ue)",
  ],
  slides: [
    {
      titre: "Le vocabulaire des vêtements",
      illustration: "👗",
      visuel: "La camisa, el pantalón, los zapatos",
      contenu: [
        "La camisa, la camiseta : la chemise, le tee-shirt",
        "El pantalón, la falda, el vestido : le pantalon, la jupe, la robe",
        "La chaqueta, el abrigo, el jersey : la veste, le manteau, le pull",
        "Los zapatos, las zapatillas : les chaussures, les baskets",
      ],
      voixOff:
        "Voici le vocabulaire des vêtements. La camisa, la chemise, et la camiseta, le tee-shirt. El pantalón, le pantalon, la falda, la jupe, et el vestido, la robe. Pour le froid, on porte la chaqueta, la veste, el abrigo, le manteau, ou el jersey, le pull. Aux pieds, on met los zapatos, les chaussures, ou las zapatillas, les baskets.",
    },
    {
      titre: "Les couleurs et leur accord",
      illustration: "🎨",
      visuel: "Rojo/roja, verde, azul",
      contenu: [
        "Couleurs en -o : rojo/roja/rojos/rojas (accord en genre et nombre)",
        "Couleurs en -e ou consonne : verde/verdes, azul/azules (invariables en genre)",
        "Una camisa blanca, unos zapatos negros",
        "Naranja et rosa restent souvent invariables : camisas naranja",
      ],
      voixOff:
        "Les couleurs sont des adjectifs qui s'accordent avec le nom. Celles qui se terminent en -o changent au féminin : rojo devient roja, et au pluriel rojos, rojas. Celles qui se terminent en -e ou en consonne, comme verde ou azul, ne changent pas au féminin, mais prennent un s au pluriel : verdes, azules. On dit una camisa blanca, une chemise blanche, ou unos zapatos negros, des chaussures noires. Attention, naranja et rosa restent souvent invariables.",
    },
    {
      titre: "Les démonstratifs : este, ese, aquel",
      illustration: "👉",
      visuel: "Este / Ese / Aquel",
      contenu: [
        "Este/esta/estos/estas : ce…-ci (près de moi)",
        "Ese/esa/esos/esas : ce…-là (près de toi)",
        "Aquel/aquella/aquellos/aquellas : ce…-là (loin de nous deux)",
        "Este vestido es bonito, pero aquella falda es más elegante",
      ],
      voixOff:
        "Pour désigner un vêtement, on utilise un démonstratif qui indique la distance. Este, esta, estos, estas désignent ce qui est près de moi : este vestido. Ese, esa, esos, esas désignent ce qui est près de toi : ese pantalón. Aquel, aquella, aquellos, aquellas désignent ce qui est loin de nous deux : aquella falda. Par exemple, este vestido es bonito, pero aquella falda es más elegante.",
    },
    {
      titre: "Aller faire du shopping",
      illustration: "🛍️",
      visuel: "Probarse / La talla",
      contenu: [
        "Probarse (o>ue, pronominal) : essayer — Me pruebo la chaqueta",
        "La talla : la taille (vêtements) — El número : la pointure (chaussures)",
        "¿Tiene esta camisa en talla M? : avez-vous cette chemise en taille M ?",
        "El probador : la cabine d'essayage",
      ],
      voixOff:
        "Dans un magasin, on utilise le verbe probarse, essayer, qui est à la fois pronominal et à diphtongue o>ue : me pruebo, te pruebas, se prueba. On demande la talla pour un vêtement, la taille, et el número pour des chaussures, la pointure. Une phrase utile : ¿tiene esta camisa en talla M?, avez-vous cette chemise en taille M ? Et pour essayer, on va dans el probador, la cabine d'essayage.",
    },
    {
      titre: "Me queda bien / mal",
      illustration: "✅",
      visuel: "Esta camisa te queda bien",
      contenu: [
        "Construction comme gustar : pronom + queda(n) + sujet",
        "Esta camisa me queda bien : cette chemise me va bien",
        "Estos pantalones te quedan mal : ce pantalon te va mal",
        "¿Cómo me queda este vestido? : comment me va cette robe ?",
      ],
      voixOff:
        "Pour dire si un vêtement te va bien, on utilise quedar, qui se construit exactement comme gustar : le pronom d'objet indirect vient avant, et le verbe s'accorde avec le vêtement. Esta camisa me queda bien, cette chemise me va bien. Estos pantalones te quedan mal, ce pantalon te va mal — au pluriel, on ajoute un n. Pour demander un avis, on dit ¿cómo me queda este vestido?, comment me va cette robe ?",
    },
    {
      titre: "Comparer les vêtements",
      illustration: "⚖️",
      visuel: "Más… que / Tan… como",
      contenu: [
        "Más + adjectif + que : plus… que — Este jersey es más caro que ese",
        "Menos + adjectif + que : moins… que — Es menos elegante que aquel vestido",
        "Tan + adjectif + como : aussi… que — Es tan bonita como la otra",
        "Mejor / peor : meilleur / pire (comparatifs irréguliers)",
      ],
      voixOff:
        "Pour comparer deux vêtements, on utilise más suivi de l'adjectif puis que : este jersey es más caro que ese, ce pull est plus cher que celui-là. Avec menos, on exprime l'infériorité : es menos elegante que aquel vestido. Pour dire que deux choses sont égales, on utilise tan suivi de l'adjectif puis como : es tan bonita como la otra. Enfin, mejor et peor, meilleur et pire, sont des comparatifs irréguliers.",
    },
    {
      titre: "Demander le prix : costar",
      illustration: "💶",
      visuel: "¿Cuánto cuesta?",
      contenu: [
        "Costar (o>ue) : cuesta (il/elle coûte), cuestan (ils/elles coûtent)",
        "¿Cuánto cuesta esta camiseta? : combien coûte ce tee-shirt ?",
        "Cuesta quince euros / Cuestan treinta euros",
        "Es barato/a / Es caro/a : c'est bon marché / c'est cher",
      ],
      voixOff:
        "Pour parler du prix, le verbe costar suit la diphtongue o>ue : cuesta pour un seul objet, cuestan pour plusieurs. ¿Cuánto cuesta esta camiseta?, combien coûte ce tee-shirt ? On répond cuesta quince euros, ou cuestan treinta euros pour plusieurs articles. On qualifie aussi le prix avec es barato, c'est bon marché, ou es caro, c'est cher.",
    },
    {
      titre: "Dialogue dans la boutique",
      illustration: "🛒",
      visuel: "En la tienda",
      contenu: [
        "— Hola, ¿puedo probarme esta chaqueta? — Sí, el probador está allí.",
        "— ¿Qué tal te queda? — Me queda un poco grande.",
        "— ¿Tiene una talla más pequeña? — Sí, aquí tiene.",
        "— Perfecto. ¿Cuánto cuesta? — Cuesta cuarenta euros.",
      ],
      voixOff:
        "Voici un dialogue en boutique. Hola, ¿puedo probarme esta chaqueta?, bonjour, puis-je essayer cette veste ? Sí, el probador está allí, oui, la cabine d'essayage est là-bas. ¿Qué tal te queda? Me queda un poco grande, comment te va-t-elle ? Elle me va un peu grande. ¿Tiene una talla más pequeña? Sí, aquí tiene, avez-vous une taille plus petite ? Oui, voici. Perfecto, ¿cuánto cuesta? Cuesta cuarenta euros.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Este/ese/aquel + queda + costar",
      contenu: [
        "Les couleurs s'accordent en genre et nombre : rojo/roja, verde/verdes",
        "Démonstratifs : este (ici), ese (là), aquel (là-bas)",
        "Quedar fonctionne comme gustar : me queda bien / te quedan mal",
        "Comparer : más/menos… que, tan… como — Prix : ¿cuánto cuesta/cuestan?",
      ],
      voixOff:
        "Résumons. Les couleurs s'accordent en genre et en nombre avec le vêtement, sauf certaines comme naranja. Les démonstratifs este, ese et aquel indiquent la distance : ici, là, ou là-bas. Le verbe quedar fonctionne exactement comme gustar : me queda bien, te quedan mal. Pour comparer, utilise más… que, menos… que ou tan… como. Et pour le prix, pose la question ¿cuánto cuesta? ou ¿cuánto cuestan? selon le nombre d'articles.",
    },
  ],
  fiche: {
    intro:
      "Pour faire du shopping en espagnol, il faut connaître le vocabulaire des vêtements et des couleurs, savoir utiliser les démonstratifs, la construction quedar bien/mal, les comparatifs et le verbe costar.",
    sections: [
      {
        titre: "Vêtements et couleurs",
        points: [
          "La camisa, el pantalón, la falda, el vestido, la chaqueta, los zapatos",
          "Couleurs en -o : rojo/roja — Couleurs en -e/consonne : verde, azul (invariables en genre)",
        ],
      },
      {
        titre: "Les démonstratifs",
        points: [
          "Este/esta/estos/estas : ce…-ci, près de moi",
          "Ese/esa/esos/esas : ce…-là, près de toi",
          "Aquel/aquella/aquellos/aquellas : ce…-là, loin de nous deux",
        ],
      },
      {
        titre: "Quedar bien/mal et les comparatifs",
        points: [
          "Quedar se construit comme gustar : me queda bien, te quedan mal",
          "Más… que (plus que), menos… que (moins que), tan… como (aussi que)",
          "Mejor/peor : comparatifs irréguliers de bueno/malo",
        ],
      },
      {
        titre: "Faire du shopping",
        points: [
          "Probarse (o>ue, pronominal) : essayer — La talla, el número, el probador",
          "Costar (o>ue) : ¿Cuánto cuesta/cuestan? — Es barato/caro",
        ],
      },
    ],
    audio:
      "Fiche de révision : les vêtements et les achats en espagnol. Le vocabulaire clé comprend la camisa, el pantalón, la falda, el vestido, la chaqueta et los zapatos. Les couleurs s'accordent : rojo devient roja au féminin, mais verde et azul restent invariables en genre. Les démonstratifs este, ese et aquel indiquent la distance : este est proche de moi, ese est proche de toi, aquel est loin de nous deux. Le verbe quedar fonctionne comme gustar : esta camisa me queda bien, estos pantalones te quedan mal. Pour comparer, on utilise más… que, menos… que et tan… como. Enfin, pour parler du prix, le verbe costar suit la diphtongue o>ue : cuesta pour un objet, cuestan pour plusieurs.",
  },
  memoCards: [
    { recto: "La camisa, el pantalón, la falda, el vestido", verso: "La chemise, le pantalon, la jupe, la robe." },
    { recto: "Rojo/roja/rojos/rojas", verso: "Rouge : s'accorde en genre et nombre (couleurs en -o)." },
    { recto: "Verde / Azul", verso: "Vert / bleu : invariables en genre, +s au pluriel (verdes, azules)." },
    { recto: "Este / Ese / Aquel", verso: "Ce…-ci (près de moi) / ce…-là (près de toi) / ce…-là (loin de nous deux)." },
    { recto: "Me queda bien / Te quedan mal", verso: "Ça me va bien / ça te va mal (comme gustar)." },
    { recto: "Más… que / Menos… que / Tan… como", verso: "Plus… que / moins… que / aussi… que." },
    { recto: "Probarse (o>ue) : me pruebo", verso: "Essayer (verbe pronominal à diphtongue)." },
    { recto: "¿Cuánto cuesta? / Cuesta…", verso: "Combien ça coûte ? / Ça coûte… (costar, o>ue)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « la jupe » ?",
      choix: ["la camisa", "la falda", "el vestido", "el jersey"],
      bonneReponse: 1,
      explication: "La falda signifie la jupe.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le féminin de « rojo » ?",
      choix: ["rojo", "roja", "rojos", "rojes"],
      bonneReponse: 1,
      explication: "Les couleurs en -o changent en -a au féminin.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « J'aime ce pull-ci mais pas cette veste-là. » (utilise este et esa)",
      reponse: "Me gusta este jersey pero no esa chaqueta.",
      explication: "Este pour un objet proche, esa pour un objet plus loin.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « combien ça coûte ? » ?",
      choix: ["¿Cuánto es?", "¿Cuánto cuesta?", "¿Cuánto vale la pena?", "¿Cuánto queda?"],
      bonneReponse: 1,
      explication: "¿Cuánto cuesta? est la question la plus courante pour demander un prix.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement « quedar » ?",
      choix: ["Esta camisa me queda bien", "Esta camisa quedo bien", "Yo queda bien esta camisa", "Esta camisa quedas bien"],
      bonneReponse: 0,
      explication: "Quedar s'accorde avec le sujet (la camisa) et le pronom se place devant : me queda.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ces chaussures sont plus chères que celles-là (aquellas). »",
      reponse: "Estos zapatos son más caros que aquellos.",
      explication: "Más + adjectif + que pour comparer ; aquellos remplace le nom déjà cité.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « probarse » avec « yo » et traduis « je peux essayer cette chemise ? ».",
      reponse: "Me pruebo. ¿Puedo probarme esta camisa?",
      explication: "Probarse est pronominal et à diphtongue o>ue : me pruebo.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « aquel » au féminin pluriel ?",
      choix: ["aquel", "aquella", "aquellas", "aquellos"],
      bonneReponse: 2,
      explication: "Aquellas est la forme féminin pluriel de aquel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre « ese » et « aquel », avec un exemple pour chacun.",
      reponse:
        "Ese désigne un objet proche de la personne à qui l'on parle : ese pantalón que llevas. Aquel désigne un objet éloigné des deux interlocuteurs : aquella tienda al final de la calle. Este, ese et aquel forment une échelle de distance : ici, là, là-bas.",
      explication: "Les trois démonstratifs marquent trois degrés de distance différents.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Estos zapatos me quedan tan bien como aquellos », quelle structure grammaticale est utilisée ?",
      choix: [
        "Un comparatif de supériorité",
        "Un comparatif d'égalité (tan… como)",
        "Un comparatif d'infériorité",
        "Un superlatif"
      ],
      bonneReponse: 1,
      explication: "Tan… como exprime une égalité : aussi bien que.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un dialogue en boutique (5-6 répliques) avec un démonstratif, la construction quedar et le verbe costar.",
      reponse:
        "— Hola, ¿puedo probarme este vestido? — Sí, claro, el probador está allí. — ¿Qué tal me queda? — Te queda muy bien. — ¿Cuánto cuesta? — Cuesta treinta y cinco euros.",
      explication: "Le dialogue combine este, queda et cuesta dans un contexte cohérent.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Compare deux vêtements que tu imagines (couleur, prix, comment ils te vont) en 4-5 phrases avec au moins un comparatif.",
      reponse:
        "Esta camiseta azul es más barata que aquella camiseta roja. Me queda muy bien, pero aquella me queda un poco grande. La azul cuesta doce euros y la roja cuesta veinte euros. Prefiero la azul porque es más cómoda.",
      explication: "Le texte utilise más… que, quedar et costar de façon cohérente.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « les chaussures » ?",
      choix: ["las camisetas", "los zapatos", "los pantalones", "las chaquetas"],
      bonneReponse: 1,
      explication: "Los zapatos signifie les chaussures.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Este » désigne un objet :",
      choix: ["loin de nous deux", "près de moi", "près de toi", "invisible"],
      bonneReponse: 1,
      explication: "Este désigne ce qui est proche de la personne qui parle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ce pantalon-là (ese) te va mal. »",
      reponse: "Ese pantalón te queda mal.",
      explication: "Ese pour un objet proche de l'interlocuteur ; queda s'accorde avec pantalón, singulier.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Combien coûtent ces baskets ? »",
      reponse: "¿Cuánto cuestan estas zapatillas?",
      explication: "Cuestan au pluriel car zapatillas est pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris une tenue (couleur, vêtement) en 3 phrases avec un démonstratif, quedar et un comparatif.",
      reponse: "Esta falda verde me queda muy bien. Es más elegante que aquel vestido. Cuesta menos que la chaqueta azul.",
      explication: "Le texte combine démonstratif, quedar et comparatif.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les vêtements et les achats",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « le manteau » ?",
          choix: ["el jersey", "el abrigo", "la chaqueta", "la camisa"],
          bonneReponse: 1,
          explication: "El abrigo signifie le manteau.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est le pluriel de « azul » ?",
          choix: ["azuls", "azules", "azulas", "azulos"],
          bonneReponse: 1,
          explication: "Azul, terminé par une consonne, prend -es au pluriel : azules.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Cette veste-ci me va mieux que celle-là (esa). »",
          reponse: "Esta chaqueta me queda mejor que esa.",
          explication: "Mejor est le comparatif irrégulier de bien/bueno.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « costar » à la troisième personne du singulier et du pluriel, puis traduis « ce jean coûte vingt-cinq euros ».",
          reponse: "Cuesta, cuestan. Este vaquero cuesta veinticinco euros.",
          explication: "Costar suit la diphtongue o>ue : cuesta/cuestan.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige une scène de shopping complète (6 phrases minimum) : essayage, avis avec quedar, comparaison et prix.",
          reponse:
            "Hola, ¿puedo probarme este vestido azul? Sí, el probador está a la derecha. ¿Qué tal me queda? Te queda genial, mejor que el otro vestido. Es más elegante y menos caro. ¿Cuánto cuesta? Cuesta cuarenta y cinco euros.",
          explication: "Le texte enchaîne essayage, avis, comparaison et prix de façon cohérente.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « estos pantalones te quedan bien » avec « quedan » et non « queda » ?",
          choix: [
            "Parce que pantalones est un mot toujours singulier en espagnol",
            "Parce que le verbe quedar s'accorde avec le sujet grammatical, ici « pantalones », pluriel",
            "C'est une erreur, il faudrait dire queda",
            "Parce que te impose toujours le pluriel"
          ],
          bonneReponse: 1,
          explication: "Comme gustar, quedar s'accorde avec ce qui produit l'effet, ici un nom pluriel.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les vêtements et les achats",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « la taille » (vêtements) ?",
          choix: ["el número", "la talla", "el probador", "la tienda"],
          bonneReponse: 1,
          explication: "La talla signifie la taille des vêtements.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Aquel » désigne un objet :",
          choix: ["près de moi", "près de toi", "loin de nous deux", "invisible"],
          bonneReponse: 2,
          explication: "Aquel désigne ce qui est éloigné des deux interlocuteurs.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « J'essaie ces chaussures noires, elles ne sont pas trop chères. »",
          reponse: "Me pruebo estos zapatos negros, no son demasiado caros.",
          explication: "Probarse est pronominal ; negros s'accorde avec zapatos, masculin pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un vendeur te demande « ¿Qué tal le queda la chaqueta? ». Réponds en disant qu'elle est trop grande.",
          reponse: "Me queda demasiado grande.",
          explication: "Queda au singulier car la chaqueta est singulier ; demasiado grande précise la sensation.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare l'usage de « más… que » et « tan… como » en donnant un exemple pour chacun.",
          reponse:
            "Más… que exprime la supériorité : este jersey es más caro que aquel, ce pull est plus cher que celui-là. Tan… como exprime l'égalité : esta falda es tan bonita como aquella, cette jupe est aussi jolie que celle-là.",
          explication: "Más… que compare deux éléments inégaux, tan… como compare deux éléments égaux.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Aquellas botas cuestan menos que estas », combien d'éléments grammaticaux étudiés dans ce chapitre reconnais-tu ?",
          choix: [
            "Un démonstratif seulement",
            "Un comparatif seulement",
            "Un démonstratif, un comparatif et le verbe costar",
            "Aucun élément du chapitre"
          ],
          bonneReponse: 2,
          explication: "Aquellas (démonstratif), menos que (comparatif) et cuestan (costar) sont tous présents.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vocabulaire clé : la camisa, el pantalón, la falda, el vestido, la chaqueta, los zapatos.",
    "Couleurs : accord en -o/-a (rojo/roja) ; invariables en genre pour -e/consonne (verde, azul).",
    "Démonstratifs : este (ici), ese (là), aquel (là-bas), avec accord en genre et nombre.",
    "Quedar fonctionne comme gustar : me queda bien / te quedan mal.",
    "Comparatifs : más… que, menos… que, tan… como, et les irréguliers mejor/peor.",
    "Costar (o>ue) : ¿Cuánto cuesta/cuestan? pour demander un prix.",
  ],
},
{
  slug: "rutina-diaria",
  titre: "La routine quotidienne",
  matiere: "espagnol",
  niveau: "4eme",
  langueVoix: "es-ES",
  description:
    "Décrire sa journée type en espagnol : les verbes pronominaux (levantarse, ducharse…), les verbes à diphtongue (e>ie, o>ue) et les expressions de fréquence pour raconter sa routine.",
  objectifs: [
    "Conjuguer les verbes pronominaux au présent (levantarse, acostarse)",
    "Utiliser les verbes à diphtongue e>ie et o>ue (empezar, poder)",
    "Employer des expressions de temps et de fréquence (siempre, normalmente…)",
    "Décrire une journée complète, du matin au soir",
    "Situer les actions les unes par rapport aux autres (antes de, después de, luego)",
  ],
  slides: [
    {
      titre: "Les verbes pronominaux",
      illustration: "🪞",
      visuel: "Levantarse : me levanto",
      contenu: [
        "Levantarse : se lever — me levanto, te levantas, se levanta…",
        "Le pronom réfléchi change selon la personne : me, te, se, nos, os, se",
        "Ducharse (se doucher), vestirse (s'habiller), acostarse (se coucher)",
        "Le pronom se place devant le verbe conjugué",
      ],
      voixOff:
        "Beaucoup de verbes de la routine sont pronominaux, c'est-à-dire accompagnés d'un pronom réfléchi. Levantarse, se lever, se conjugue me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Le pronom change selon la personne et se place juste devant le verbe conjugué. On retrouve la même logique avec ducharse, se doucher, vestirse, s'habiller, et acostarse, se coucher.",
    },
    {
      titre: "Le matin",
      illustration: "🌅",
      visuel: "Me levanto a las siete",
      contenu: [
        "Me despierto a las siete : je me réveille à sept heures",
        "Me levanto, me ducho, me visto : je me lève, je me douche, je m'habille",
        "Desayuno cereales con leche : je prends des céréales au lait au petit-déjeuner",
        "Me lavo los dientes : je me lave les dents",
      ],
      voixOff:
        "Décrivons une matinée type. Me despierto a las siete, je me réveille à sept heures. Puis me levanto, me ducho, me visto : je me lève, je me douche, je m'habille. Desayuno cereales con leche, je prends des céréales au lait pour le petit-déjeuner : ce verbe-là, desayunar, n'est pas pronominal ! Enfin, me lavo los dientes, je me lave les dents, avant de partir.",
    },
    {
      titre: "Les verbes à diphtongue e>ie",
      illustration: "🔀",
      visuel: "Empezar : empiezo",
      contenu: [
        "Empezar (commencer) : empiezo, empiezas, empieza, empezamos, empezáis, empiezan",
        "Le e se change en ie sauf avec nosotros et vosotros",
        "Querer (vouloir), preferir (préférer) suivent la même règle",
        "Las clases empiezan a las ocho : les cours commencent à huit heures",
      ],
      voixOff:
        "Certains verbes changent une voyelle au présent : c'est ce qu'on appelle une diphtongue. Empezar, commencer, devient empiezo, empiezas, empieza, empezamos, empezáis, empiezan. Remarque que le e se transforme en ie partout, sauf avec nosotros et vosotros, qui gardent la forme normale. Querer, vouloir, et preferir, préférer, suivent exactement la même règle.",
    },
    {
      titre: "Les verbes à diphtongue o>ue",
      illustration: "🔁",
      visuel: "Poder : puedo",
      contenu: [
        "Poder (pouvoir) : puedo, puedes, puede, podemos, podéis, pueden",
        "Dormir (dormir), volver (revenir), almorzar (déjeuner) suivent la même règle",
        "Duermo ocho horas : je dors huit heures",
        "Vuelvo a casa a las cinco : je rentre à la maison à cinq heures",
      ],
      voixOff:
        "D'autres verbes transforment leur o en ue. Poder, pouvoir, devient puedo, puedes, puede, podemos, podéis, pueden — toujours sauf pour nosotros et vosotros. Dormir, dormir, volver, revenir, et almorzar, déjeuner, suivent la même logique. Par exemple, duermo ocho horas, je dors huit heures, ou vuelvo a casa a las cinco, je rentre à la maison à cinq heures.",
    },
    {
      titre: "L'après-midi et le soir",
      illustration: "🌆",
      visuel: "Por la tarde…",
      contenu: [
        "Vuelvo a casa y hago los deberes : je rentre et je fais mes devoirs",
        "Ceno a las nueve : je dîne à neuf heures",
        "Veo la tele un rato : je regarde la télé un moment",
        "Me acuesto a las diez y media : je me couche à dix heures et demie",
      ],
      voixOff:
        "Après l'école, vuelvo a casa y hago los deberes, je rentre à la maison et je fais mes devoirs. Ceno a las nueve, je dîne à neuf heures. Ensuite, veo la tele un rato, je regarde la télé un moment. Et enfin, me acuesto a las diez y media, je me couche à dix heures et demie : acostarse suit la même diphtongue o>ue que dormir !",
    },
    {
      titre: "Les expressions de fréquence",
      illustration: "🔂",
      visuel: "Siempre, normalmente, a veces",
      contenu: [
        "Siempre : toujours — Normalmente : normalement",
        "A veces : parfois — Nunca : jamais",
        "Todos los días : tous les jours",
        "Siempre me levanto temprano : je me lève toujours tôt",
      ],
      voixOff:
        "Pour préciser à quelle fréquence on fait quelque chose, on utilise des adverbes. Siempre, toujours, normalmente, normalement, a veces, parfois, et nunca, jamais. On dit aussi todos los días, tous les jours. Par exemple, siempre me levanto temprano, je me lève toujours tôt. Ces mots se placent en général avant le verbe conjugué.",
    },
    {
      titre: "Organiser sa journée : antes, después, luego",
      illustration: "⏭️",
      visuel: "Antes de… / Después de…",
      contenu: [
        "Antes de desayunar, me ducho : avant de prendre le petit-déjeuner, je me douche",
        "Después de cenar, veo la tele : après avoir dîné, je regarde la télé",
        "Luego, primero, finalmente : ensuite, d'abord, enfin",
        "Ces mots relient les actions entre elles dans un récit",
      ],
      voixOff:
        "Pour raconter une journée dans l'ordre, on utilise des connecteurs. Antes de suivi d'un infinitif signifie avant de : antes de desayunar, me ducho, avant de prendre le petit-déjeuner, je me douche. Después de signifie après : después de cenar, veo la tele. On ajoute aussi primero, d'abord, luego, ensuite, et finalmente, enfin, pour bien structurer son récit.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 me/te/se + verbe + diphtongues",
      contenu: [
        "Verbes pronominaux : me, te, se, nos, os, se + verbe conjugué",
        "e>ie (empezar→empiezo) et o>ue (poder→puedo), sauf nosotros/vosotros",
        "Fréquence : siempre, normalmente, a veces, nunca, todos los días",
        "Connecteurs : antes de + infinitif, después de + infinitif, luego, primero",
      ],
      voixOff:
        "Résumons. Les verbes pronominaux comme levantarse ou acostarse se construisent avec un pronom réfléchi devant le verbe conjugué : me, te, se, nos, os, se. Les verbes à diphtongue transforment une voyelle, e en ie comme empezar, ou o en ue comme poder, sauf avec nosotros et vosotros. Pour parler de fréquence, utilise siempre, normalmente, a veces, nunca. Et pour structurer ton récit, emploie antes de et después de suivis d'un infinitif, ainsi que luego et primero !",
    },
  ],
  fiche: {
    intro:
      "Décrire sa routine quotidienne demande de maîtriser les verbes pronominaux (levantarse, ducharse), les verbes à diphtongue (empezar, poder) et des connecteurs de temps pour structurer le récit d'une journée.",
    sections: [
      {
        titre: "Les verbes pronominaux",
        points: [
          "Pronoms réfléchis : me, te, se, nos, os, se, placés devant le verbe",
          "Levantarse : me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan",
          "Ducharse, vestirse, acostarse suivent la même construction",
        ],
      },
      {
        titre: "Les verbes à diphtongue",
        points: [
          "e>ie : empezar → empiezo, empiezas, empieza… (querer, preferir)",
          "o>ue : poder → puedo, puedes, puede… (dormir, volver, almorzar)",
          "Le changement disparaît avec nosotros et vosotros",
        ],
      },
      {
        titre: "Exprimer la fréquence",
        points: [
          "Siempre (toujours), normalmente (normalement), a veces (parfois), nunca (jamais)",
          "Todos los días : tous les jours",
          "Ces adverbes se placent généralement avant le verbe",
        ],
      },
      {
        titre: "Structurer un récit",
        points: [
          "Antes de + infinitif : avant de… — Después de + infinitif : après avoir…",
          "Primero, luego, finalmente : d'abord, ensuite, enfin",
          "Permettent d'ordonner les actions d'une journée",
        ],
      },
    ],
    audio:
      "Fiche de révision : la routine quotidienne en espagnol. Les verbes pronominaux comme levantarse, se lever, se construisent avec un pronom réfléchi devant le verbe : me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Ducharse, vestirse et acostarse suivent la même logique. Certains verbes changent une voyelle au présent : empezar devient empiezo avec un e qui se change en ie, et poder devient puedo avec un o qui se change en ue, sauf pour nosotros et vosotros qui gardent la forme normale. Pour exprimer la fréquence, on utilise siempre, normalmente, a veces, nunca et todos los días. Enfin, pour structurer un récit, on emploie antes de et después de suivis d'un infinitif, ainsi que primero, luego et finalmente.",
  },
  memoCards: [
    { recto: "Levantarse : me levanto, te levantas, se levanta…", verso: "Se lever (verbe pronominal, présent)." },
    { recto: "Ducharse / Vestirse / Acostarse", verso: "Se doucher / s'habiller / se coucher (verbes pronominaux)." },
    { recto: "Empezar (e>ie) : empiezo, empiezas, empieza…", verso: "Commencer (diphtongue e>ie, sauf nosotros/vosotros)." },
    { recto: "Poder (o>ue) : puedo, puedes, puede…", verso: "Pouvoir (diphtongue o>ue, sauf nosotros/vosotros)." },
    { recto: "Siempre / Normalmente / A veces / Nunca", verso: "Toujours / normalement / parfois / jamais." },
    { recto: "Antes de + infinitif", verso: "Avant de… Ex : Antes de cenar, hago los deberes." },
    { recto: "Después de + infinitif", verso: "Après avoir… Ex : Después de desayunar, voy al instituto." },
    { recto: "Primero, luego, finalmente", verso: "D'abord, ensuite, enfin (connecteurs de récit)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « je me lève » ?",
      choix: ["Levanto", "Me levanto", "Te levantas", "Se levanta"],
      bonneReponse: 1,
      explication: "Me levanto : pronom me + verbe conjugué à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel pronom correspond à « tú » devant un verbe pronominal ?",
      choix: ["me", "te", "se", "nos"],
      bonneReponse: 1,
      explication: "Te correspond à la deuxième personne du singulier : te levantas.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « Je me douche à sept heures. »",
      reponse: "Me ducho a las siete.",
      explication: "Ducharse : me ducho à la première personne du singulier.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « toujours » en espagnol ?",
      choix: ["nunca", "a veces", "siempre", "luego"],
      bonneReponse: 2,
      explication: "Siempre signifie toujours.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « empezar » avec « nosotros » ?",
      choix: ["empiezo", "empezamos", "empiezan", "empiezas"],
      bonneReponse: 1,
      explication: "Avec nosotros, la diphtongue disparaît : empezamos, pas empiezamos.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « poder » avec « yo » et « ellos », puis traduis « je peux dormir huit heures ».",
      reponse: "Yo puedo, ellos pueden. Puedo dormir ocho horas.",
      explication: "Poder est un verbe à diphtongue o>ue, sauf nosotros/vosotros.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Après avoir dîné, je regarde la télé, puis je me couche. »",
      reponse: "Después de cenar, veo la tele, luego me acuesto.",
      explication: "Después de + infinitif, puis luego pour enchaîner les actions.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement un verbe pronominal ?",
      choix: ["Yo levanto a las siete", "Yo me levanto a las siete", "Yo levanta a las siete", "Levanto me a las siete"],
      bonneReponse: 1,
      explication: "Le pronom me doit précéder le verbe conjugué : me levanto.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris ta routine du matin en 4 phrases, en utilisant au moins deux verbes pronominaux et un connecteur (antes de/después de).",
      reponse:
        "Me despierto a las siete. Antes de desayunar, me ducho y me visto. Después de desayunar, voy al instituto. Normalmente llego a las ocho.",
      explication: "Le texte combine verbes pronominaux, connecteur et fréquence.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Vuelvo a casa a las cinco », de quel infinitif vient « vuelvo » et quelle diphtongue observe-t-on ?",
      choix: [
        "Volar, diphtongue e>ie",
        "Volver, diphtongue o>ue",
        "Ver, pas de diphtongue",
        "Vivir, diphtongue e>i"
      ],
      bonneReponse: 1,
      explication: "Volver (revenir/rentrer) suit la diphtongue o>ue : vuelvo, vuelves, vuelve…",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on dit « empezamos » (sans diphtongue) mais « empiezo » (avec diphtongue), pour le même verbe empezar.",
      reponse: "La diphtongue e>ie apparaît uniquement quand la syllabe est accentuée (empiezo), mais disparaît avec nosotros et vosotros car l'accent tombe sur la terminaison (empezamos).",
      explication: "C'est la règle générale des verbes à diphtongue en espagnol.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un court récit (5 phrases) de ta journée type, du réveil au coucher, en utilisant primero, luego et finalmente.",
      reponse:
        "Primero, me despierto a las siete y me ducho. Luego desayuno y voy al instituto. Por la tarde hago los deberes y ceno a las nueve. Luego veo la tele un rato. Finalmente, me acuesto a las diez y media.",
      explication: "Le récit utilise les connecteurs pour organiser chronologiquement la journée.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « je m'habille » ?",
      choix: ["Visto", "Me visto", "Te vistes", "Se viste"],
      bonneReponse: 1,
      explication: "Vestirse : me visto à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Nunca » signifie :",
      choix: ["Toujours", "Parfois", "Jamais", "Souvent"],
      bonneReponse: 2,
      explication: "Nunca signifie jamais.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Nous dormons huit heures tous les jours. »",
      reponse: "Dormimos ocho horas todos los días.",
      explication: "Avec nosotros, dormir garde sa forme normale : dormimos (pas duermimos).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète : « __ de desayunar, me lavo los dientes. » (avant de)",
      reponse: "Después de desayunar, me lavo los dientes.",
      explication: "Después de + infinitif signifie après avoir/après.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Raconte en 3 phrases ta soirée type, avec un verbe pronominal, un verbe à diphtongue et un adverbe de fréquence.",
      reponse: "Normalmente ceno a las nueve. Después, puedo ver la tele un rato. Siempre me acuesto a las diez.",
      explication: "Le texte combine les trois notions du chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La routine quotidienne",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « il se couche » ?",
          choix: ["Se acuesta", "Me acuesto", "Te acuestas", "Acuesta"],
          bonneReponse: 0,
          explication: "Se acuesta correspond à él/ella se couche.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« A veces » signifie :",
          choix: ["Toujours", "Parfois", "Jamais", "Tous les jours"],
          bonneReponse: 1,
          explication: "A veces signifie parfois.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Le matin, je me réveille, je me douche et je m'habille rapidement. »",
          reponse: "Por la mañana, me despierto, me ducho y me visto rápidamente.",
          explication: "Trois verbes pronominaux enchaînés avec le même sujet.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « querer » (e>ie) avec « tú » et « vosotros », et traduis « tu veux dormir ».",
          reponse: "Tú quieres, vosotros queréis. Quieres dormir.",
          explication: "Querer suit la diphtongue e>ie sauf pour nosotros/vosotros.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un récit complet de ta journée (6 phrases minimum), du réveil au coucher, avec verbes pronominaux, un verbe à diphtongue et deux connecteurs.",
          reponse:
            "Primero, me despierto a las siete. Antes de desayunar, me ducho. Luego voy al instituto, donde las clases empiezan a las ocho y media. Por la tarde vuelvo a casa y hago los deberes. Después de cenar, veo la tele. Finalmente, me acuesto a las diez.",
          explication: "Le texte combine tous les éléments grammaticaux du chapitre de façon cohérente.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi le pronom réfléchi change-t-il de place selon la personne dans « nos levantamos » ?",
          choix: [
            "Il ne change pas de place, il s'agit seulement du pronom qui change (nos = nous)",
            "Nos se place toujours après le verbe",
            "C'est une exception grammaticale rare",
            "Nos remplace toujours te"
          ],
          bonneReponse: 0,
          explication: "Le pronom réfléchi reste devant le verbe conjugué, seule sa forme change selon la personne (me, te, se, nos, os, se).",
        },
      ],
    },
    {
      titre: "Examen 2 — La routine quotidienne",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « nous nous levons » ?",
          choix: ["Nos levantamos", "Me levanto", "Os levantáis", "Se levantan"],
          bonneReponse: 0,
          explication: "Nos levantamos correspond à nosotros.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Todos los días » signifie :",
          choix: ["Jamais", "Parfois", "Tous les jours", "Le week-end"],
          bonneReponse: 2,
          explication: "Todos los días signifie tous les jours.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Normalement, je peux dormir neuf heures le week-end. »",
          reponse: "Normalmente, puedo dormir nueve horas el fin de semana.",
          explication: "Poder suit la diphtongue o>ue : puedo.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande à quelle heure tu te couches. Réponds en utilisant acostarse et un adverbe de fréquence.",
          reponse: "Normalmente me acuesto a las diez y media.",
          explication: "Acostarse suit aussi la diphtongue o>ue : me acuesto.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare les verbes pronominaux et les verbes à diphtongue : donne un exemple de chaque et explique la différence entre les deux notions.",
          reponse:
            "Un verbe pronominal (levantarse : me levanto) se construit avec un pronom réfléchi car l'action porte sur le sujet lui-même. Un verbe à diphtongue (poder : puedo) change une voyelle de son radical selon la personne, mais n'a pas forcément de pronom réfléchi. Certains verbes cumulent les deux, comme acostarse (me acuesto).",
          explication: "Les deux notions sont indépendantes mais peuvent se combiner dans un même verbe.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle phrase illustre correctement un verbe pronominal ET une diphtongue en même temps ?",
          choix: [
            "Estudio matemáticas",
            "Me acuesto a las diez",
            "Vivo en Francia",
            "Escribo una carta"
          ],
          bonneReponse: 1,
          explication: "Acostarse est à la fois pronominal (me) et à diphtongue o>ue (acuesto).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Verbes pronominaux : pronom réfléchi (me, te, se, nos, os, se) devant le verbe conjugué.",
    "Diphtongue e>ie (empezar→empiezo) et o>ue (poder→puedo), sauf pour nosotros/vosotros.",
    "Fréquence : siempre, normalmente, a veces, nunca, todos los días.",
    "Connecteurs de récit : antes de/después de + infinitif, primero, luego, finalmente.",
    "Une journée type se raconte au présent, en enchaînant verbes pronominaux et connecteurs.",
    "Certains verbes cumulent pronom réfléchi ET diphtongue : acostarse → me acuesto.",
  ],
},
{
  slug: "alfabeto-pronunciacion",
  titre: "L'alphabet et la prononciation",
  matiere: "espagnol",
  niveau: "5eme",
  langueVoix: "es-ES",
  description:
    "Découvrir l'alphabet espagnol, ses lettres particulières (ñ, ll, rr) et les règles de prononciation de base pour bien lire et bien parler dès les premiers mots.",
  objectifs: [
    "Connaître les 27 lettres de l'alphabet espagnol et la lettre ñ",
    "Prononcer correctement j, g, h, ll, ñ et rr",
    "Comprendre l'accent tonique et les accents écrits (á é í ó ú)",
    "Utiliser les points d'exclamation et d'interrogation inversés (¿ ¡)",
    "Épeler son prénom et des mots simples en espagnol",
  ],
  slides: [
    {
      titre: "El alfabeto español",
      illustration: "🔤",
      visuel: "a b c ch d e f g h i j k l ll m n ñ o p...",
      contenu: [
        "27 lettres : comme le français, plus la ñ (eñe)",
        "Toutes les lettres se prononcent, il n'y a pas de lettres muettes comme en français",
        "L'espagnol s'écrit presque comme il se prononce : très régulier !",
        "ch et ll existaient autrefois comme lettres à part entière",
      ],
      voixOff:
        "L'alphabet espagnol ressemble beaucoup au français, mais il compte une lettre en plus : la ñ, qu'on appelle eñe. La grande différence, c'est que l'espagnol se prononce presque toujours comme il s'écrit : pas de lettres muettes surprises ! C'est une langue très régulière, ce qui va beaucoup t'aider pour apprendre à lire et à écrire.",
    },
    {
      titre: "La lettre ñ",
      illustration: "🌶️",
      visuel: "ñ = gn français",
      contenu: [
        "ñ se prononce comme le « gn » français de montagne",
        "España (Espagne), niño (enfant), mañana (demain/matin)",
        "Sans le petit accent (tilde), n et ñ sont deux lettres différentes",
        "año (année) ≠ ano (anus) : l'accent change tout le sens !",
      ],
      voixOff:
        "La ñ se prononce comme le gn de montagne en français. On la trouve dans des mots très courants : España, l'Espagne, niño, un enfant, ou mañana, qui veut dire demain ou le matin selon le contexte. Attention, ñ et n sont deux lettres bien différentes : oublier le petit accent au-dessus, appelé tilde, peut complètement changer le sens d'un mot !",
    },
    {
      titre: "J, G, H : les sons qui surprennent",
      illustration: "🗣️",
      visuel: "jota, gente, hola",
      contenu: [
        "j se prononce comme un « r » raclé au fond de la gorge : jamón, joven",
        "g devant e/i se prononce comme j : gente, gimnasio",
        "g devant a/o/u se prononce comme le g français : gato, amigo",
        "h ne se prononce jamais : hola, hermano",
      ],
      voixOff:
        "Le j espagnol est un son rauque, raclé au fond de la gorge, comme dans jamón, le jambon. Attention, le g devant un e ou un i se prononce exactement pareil : gente, les gens, ou gimnasio, le gymnase. Mais devant a, o ou u, le g garde son son français classique, comme dans gato, chat. Enfin, la lettre h ne se prononce jamais : hola se dit « ola », sans souffler le h !",
    },
    {
      titre: "LL et RR : les doubles lettres",
      illustration: "🔊",
      visuel: "ll = y / rr roulé",
      contenu: [
        "ll se prononce comme le « y » de yaourt : llamo, calle, pollo",
        "r simple entre deux voyelles : légèrement roulé, pero",
        "rr toujours très roulé : perro, guitarra",
        "r en début de mot : aussi très roulé, comme rr",
      ],
      voixOff:
        "La double L, ll, se prononce comme le y de yaourt : me llamo se dit « me yamo ». Le r simple est légèrement roulé entre deux voyelles, comme dans pero, mais. Le rr double, lui, doit être roulé fort, comme dans perro, le chien, ou guitarra. Et attention, un r tout seul au début d'un mot se roule aussi très fort, comme s'il y avait deux r !",
    },
    {
      titre: "Les accents écrits",
      illustration: "✍️",
      visuel: "á é í ó ú",
      contenu: [
        "L'accent (tilde) indique la syllabe sur laquelle on insiste",
        "Sin accent : la règle générale s'applique (avant-dernière ou dernière syllabe)",
        "Avec accent : música, teléfono, está, así",
        "Un accent peut changer le sens : sí (oui) / si (si, condition)",
      ],
      voixOff:
        "En espagnol, un petit accent sur une voyelle, appelé tilde, indique où l'on doit insister en parlant. Sans accent, on suit une règle générale automatique. Mais des mots comme música, teléfono, ou está portent un accent qui casse cette règle. Parfois, l'accent change même le sens du mot : sí avec accent veut dire oui, si sans accent veut dire si, comme dans une condition !",
    },
    {
      titre: "¿ et ¡ : la ponctuation inversée",
      illustration: "❓",
      visuel: "¿Qué tal? ¡Hola!",
      contenu: [
        "L'espagnol place un ¿ ou un ¡ AU DÉBUT de la phrase, en plus du signe final",
        "¿Cómo te llamas? : signale dès le début que c'est une question",
        "¡Qué bien! : signale dès le début que c'est une exclamation",
        "C'est une particularité unique de l'espagnol parmi les grandes langues européennes",
      ],
      voixOff:
        "Une particularité très visible de l'espagnol : on place un point d'interrogation ou d'exclamation inversé au tout début de la phrase, en plus de celui de la fin. ¿Cómo te llamas ? commence par ¿ pour prévenir immédiatement le lecteur qu'une question arrive. De même, ¡Qué bien ! commence par ¡. Cette règle n'existe dans aucune autre grande langue européenne : pense bien à l'appliquer à l'écrit !",
    },
    {
      titre: "S'entraîner à épeler",
      illustration: "🔡",
      visuel: "L-É-A : ele, e, a",
      contenu: [
        "¿Cómo se escribe tu nombre? : comment s'écrit ton prénom ?",
        "Se escribe… : ça s'écrit…",
        "On épelle lettre par lettre en utilisant le nom espagnol de chaque lettre",
        "Utile pour donner son nom au téléphone ou à l'écrit",
      ],
      voixOff:
        "Savoir épeler est très utile en espagnol, par exemple au téléphone. On demande ¿cómo se escribe tu nombre ?, comment s'écrit ton prénom, et on répond se escribe suivi des lettres une par une, avec leur nom espagnol. C'est un excellent exercice pour mémoriser l'alphabet et sa prononciation !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 ñ, j/g, ll, rr, accents, ¿ ¡",
      contenu: [
        "ñ = gn français — j et g(e/i) = son raclé — h ne se prononce jamais",
        "ll = y — rr et r initial = roulés fortement",
        "L'accent écrit (tilde) indique la syllabe accentuée : música, está",
        "¿ et ¡ se placent au début ET à la fin des questions/exclamations",
      ],
      voixOff:
        "Résumons les points essentiels. La ñ se prononce comme le gn français, le j et le g devant e ou i font un son raclé, et le h ne se prononce jamais. Le ll se prononce y, et le rr, ainsi que le r en début de mot, se roulent fortement. L'accent écrit, la tilde, indique la syllabe accentuée quand elle sort de la règle générale. Enfin, n'oublie jamais de placer ¿ et ¡ au début des questions et des exclamations, en plus du signe final !",
    },
  ],
  fiche: {
    intro:
      "L'alphabet espagnol compte 27 lettres, dont la ñ. La langue se prononce presque comme elle s'écrit, avec quelques sons particuliers (j, ll, rr) et une ponctuation inversée unique en Europe.",
    sections: [
      {
        titre: "Les lettres particulières",
        points: [
          "ñ (eñe) : se prononce comme le gn français — España, niño",
          "h : ne se prononce jamais — hola, hermano",
          "j et g(e/i) : son raclé au fond de la gorge — jamón, gente",
        ],
      },
      {
        titre: "Les doubles lettres et le r",
        points: [
          "ll : se prononce comme le y de yaourt — llamo, calle",
          "rr : toujours très roulé — perro, guitarra",
          "r en début de mot : roulé fortement, comme rr",
        ],
      },
      {
        titre: "Les accents écrits",
        points: [
          "La tilde (á é í ó ú) indique la syllabe accentuée quand elle sort de la règle générale",
          "Exemples : música, teléfono, está, así",
          "Un accent peut changer le sens : sí (oui) / si (si, condition)",
        ],
      },
      {
        titre: "La ponctuation inversée",
        points: [
          "¿ au début et ? à la fin des questions : ¿Cómo te llamas?",
          "¡ au début et ! à la fin des exclamations : ¡Qué bien!",
          "Cette règle est unique à l'espagnol parmi les grandes langues européennes",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'alphabet et la prononciation espagnole. L'alphabet compte 27 lettres, dont la ñ, qui se prononce comme le gn français. La lettre h ne se prononce jamais, et le j, ainsi que le g devant e ou i, produisent un son raclé au fond de la gorge. La double L, ll, se prononce comme le y de yaourt, tandis que le rr, et le r en début de mot, doivent être roulés fortement. L'accent écrit, la tilde, indique la syllabe sur laquelle on insiste quand elle sort de la règle générale, comme dans música ou teléfono. Enfin, n'oublie jamais la ponctuation inversée : ¿ et ¡ se placent au début des questions et des exclamations, en plus du signe final.",
  },
  memoCards: [
    { recto: "ñ (eñe)", verso: "Se prononce comme le « gn » français. Ex : España, niño." },
    { recto: "h", verso: "Ne se prononce jamais. Ex : hola se dit « ola »." },
    { recto: "j / g(e,i)", verso: "Son raclé au fond de la gorge. Ex : jamón, gente." },
    { recto: "ll", verso: "Se prononce comme le « y » de yaourt. Ex : me llamo, calle." },
    { recto: "rr / r initial", verso: "Toujours très roulé. Ex : perro, guitarra, rojo." },
    { recto: "á é í ó ú (tilde)", verso: "Indique la syllabe accentuée. Ex : música, está." },
    { recto: "¿ … ? / ¡ … !", verso: "Ponctuation inversée au début ET à la fin. Ex : ¿Qué tal?" },
    { recto: "sí / si", verso: "sí (avec accent) = oui ; si (sans accent) = si (condition)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de lettres compte l'alphabet espagnol ?",
      choix: ["26", "27", "28", "25"],
      bonneReponse: 1,
      explication: "L'alphabet espagnol compte 27 lettres, dont la ñ en plus de l'alphabet français.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se prononce la ñ ?",
      choix: ["Comme un n normal", "Comme le gn français", "Comme un m", "Elle est muette"],
      bonneReponse: 1,
      explication: "La ñ se prononce comme le gn français de montagne.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "La lettre h se prononce-t-elle en espagnol ? Donne un exemple.",
      reponse: "Non, la h ne se prononce jamais. Exemple : hola se prononce « ola ».",
      explication: "Le h espagnol est toujours muet, contrairement à certains h en anglais.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se prononce le ll dans « me llamo » ?",
      choix: ["Comme un l normal", "Comme un l double", "Comme un y", "Il est muet"],
      bonneReponse: 2,
      explication: "Le ll se prononce comme le y de yaourt : « me yamo ».",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel mot contient un son « j » raclé au fond de la gorge ?",
      choix: ["gato", "jamón", "amigo", "gustar"],
      bonneReponse: 1,
      explication: "Dans jamón, le j se prononce comme un r raclé. Dans gato et amigo, le g est doux car suivi de a/o.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence de prononciation entre le g de « gato » et le g de « gente ».",
      reponse: "Devant a/o/u (gato), le g se prononce comme en français. Devant e/i (gente), le g se prononce comme un j raclé.",
      explication: "La prononciation du g dépend de la voyelle qui suit.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre un r simple et un rr en espagnol, avec un exemple pour chacun.",
      reponse: "Le r simple entre voyelles est légèrement roulé (pero, mais). Le rr est toujours très roulé (perro, chien).",
      explication: "Pero et perro ont un sens complètement différent selon la prononciation du r.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que signifie « sí » avec un accent, comparé à « si » sans accent ?",
      choix: ["Les deux veulent dire la même chose", "sí = oui, si = si (condition)", "sí = non, si = oui", "sí = si, si = oui"],
      bonneReponse: 1,
      explication: "L'accent écrit distingue sí (oui) de si (condition, comme « si tu veux »).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris une phrase espagnole utilisant correctement les points d'interrogation ET d'exclamation inversés.",
      reponse: "¿Cómo te llamas? ¡Qué bien te veo hoy!",
      explication: "¿ et ¡ se placent au début de chaque phrase interrogative ou exclamative, en plus du signe final.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi « música » porte-t-elle un accent écrit sur le u ?",
      choix: [
        "Pour faire joli",
        "Parce que l'accent tonique tombe sur une syllabe qui sort de la règle générale de prononciation",
        "Parce que tous les mots de trois syllabes ont un accent",
        "Il n'y a pas de raison particulière"
      ],
      bonneReponse: 1,
      explication: "L'accent écrit signale que l'accent tonique ne tombe pas là où la règle générale le prévoirait.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Épelle le mot « España » en utilisant les noms espagnols des lettres (tu peux écrire les noms en français phonétique).",
      reponse: "E - eñe - P - A - Ñ (eñe) - A : « e, pe, a, eñe, a » (la ñ se dit « eñe »).",
      explication: "Épeler en espagnol demande de connaître le nom de chaque lettre, notamment la ñ qui s'appelle « eñe ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Trouve trois mots espagnols contenant chacun un son différent parmi : ñ, ll, rr, et explique brièvement leur prononciation.",
      reponse:
        "Niño (ñ = gn français), calle (ll = y), guitarra (rr = roulé fortement).",
      explication: "Ces trois sons n'ont pas d'équivalent exact en français, sauf la ñ qui ressemble au gn.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle lettre n'existe pas dans l'alphabet français ?",
      choix: ["h", "j", "ñ", "z"],
      bonneReponse: 2,
      explication: "La ñ est spécifique à l'espagnol.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel signe place-t-on au début d'une question en espagnol ?",
      choix: ["!", "¿", "¡", ":"],
      bonneReponse: 1,
      explication: "¿ ouvre une phrase interrogative, en plus du ? final.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment prononce-t-on « guitarra » ? Décris le son du rr.",
      reponse: "Guitarra se prononce avec un r très roulé au niveau du rr : « guita-RRa ».",
      explication: "Le rr est toujours fortement roulé, quelle que soit sa position dans le mot.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi écrit-on « ¡Hola!» avec deux points d'exclamation ?",
      reponse: "Parce qu'en espagnol, on place un signe inversé (¡) au début et le signe normal (!) à la fin de toute exclamation.",
      explication: "C'est une règle systématique de la ponctuation espagnole.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige deux phrases : une question et une exclamation, avec la ponctuation espagnole correcte.",
      reponse: "¿Dónde vives? ¡Qué buena pregunta!",
      explication: "Chaque phrase doit avoir son signe inversé au début et son signe normal à la fin.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Alphabet et prononciation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment s'appelle la lettre ñ en espagnol ?",
          choix: ["ene", "eñe", "elle", "ere"],
          bonneReponse: 1,
          explication: "La lettre ñ s'appelle « eñe » en espagnol.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le mot « hermano » (frère) se prononce en faisant entendre le h ?",
          choix: ["Oui, toujours", "Non, le h est muet", "Seulement au pluriel", "Seulement à l'écrit"],
          bonneReponse: 1,
          explication: "Le h espagnol ne se prononce jamais, quel que soit le mot.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi « pero » et « perro » n'ont pas le même sens, en te concentrant sur la prononciation.",
          reponse: "Pero (r simple, légèrement roulé) signifie « mais » ; perro (rr, très roulé) signifie « chien ». Seule la force du roulement du r change.",
          explication: "C'est un exemple classique de paire minimale liée à la prononciation du r.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis et ponctue correctement : « Comment tu t'appelles ? »",
          reponse: "¿Cómo te llamas?",
          explication: "N'oublie pas le ¿ au début et le ? à la fin.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique la règle de prononciation du g en espagnol selon la voyelle qui suit, avec deux exemples.",
          reponse: "Devant a/o/u, le g se prononce comme en français (gato, amigo). Devant e/i, le g se prononce comme un j raclé (gente, gimnasio).",
          explication: "Cette règle est très régulière et s'applique à tous les mots espagnols.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quel est le rôle de la tilde (accent écrit) sur des mots comme « música » ou « está » ?",
          choix: [
            "Elle n'a aucun rôle",
            "Elle indique la syllabe sur laquelle porte l'accent tonique",
            "Elle indique le pluriel",
            "Elle transforme le nom en verbe"
          ],
          bonneReponse: 1,
          explication: "La tilde signale la syllabe accentuée quand elle ne suit pas la règle générale.",
        },
      ],
    },
    {
      titre: "Examen 2 — Alphabet et prononciation",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment se prononce le ll dans « calle » (rue) ?",
          choix: ["Comme un l", "Comme un y", "Comme un j français", "Il est muet"],
          bonneReponse: 1,
          explication: "Le ll se prononce comme le y de yaourt : « caye ».",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel signe place-t-on au début d'une exclamation espagnole ?",
          choix: ["¿", "¡", "?", ":"],
          bonneReponse: 1,
          explication: "¡ ouvre une phrase exclamative, en plus du ! final.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne un exemple de mot où sí et si ont un sens différent selon l'accent, et explique.",
          reponse: "Sí (oui, avec accent) : « Sí, quiero ». Si (condition, sans accent) : « Si quieres, vamos ». L'accent distingue les deux mots.",
          explication: "L'accent écrit permet de différencier des mots qui se prononcent presque pareil.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami écrit « Como estas » sans accents ni ponctuation inversée. Corrige sa phrase.",
          reponse: "¿Cómo estás?",
          explication: "Il faut ajouter l'accent sur cómo et estás, ainsi que le ¿ au début et le ? à la fin.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare la prononciation du r dans « pero », « perro » et au début du mot « rojo ». Que remarques-tu ?",
          reponse: "Pero : r simple, léger. Perro : rr, très roulé. Rojo : r initial, aussi très roulé, comme s'il y avait un rr.",
          explication: "Le r en début de mot se comporte comme un rr, même s'il n'est écrit qu'une seule fois.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle affirmation est vraie sur la ponctuation espagnole ?",
          choix: [
            "Elle est identique au français",
            "Elle place un signe inversé au début des questions et exclamations, en plus du signe final",
            "Elle n'utilise jamais de points d'interrogation",
            "Le signe inversé remplace le signe final"
          ],
          bonneReponse: 1,
          explication: "L'espagnol utilise systématiquement un signe inversé au début ET le signe normal à la fin.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'alphabet espagnol compte 27 lettres avec la ñ, qui se prononce comme le gn français.",
    "h est toujours muet ; j et g(e/i) produisent un son raclé ; g(a/o/u) se prononce comme en français.",
    "ll se prononce y ; rr et r initial se roulent fortement ; r entre voyelles se roule légèrement.",
    "La tilde (á é í ó ú) indique la syllabe accentuée et peut changer le sens d'un mot (sí/si).",
    "¿ et ¡ se placent toujours au début des questions et exclamations, en plus du signe final.",
    "L'espagnol se lit presque toujours comme il s'écrit : très peu de lettres muettes, sauf le h.",
  ],
},
{
  slug: "el-instituto",
  titre: "L'école et l'emploi du temps",
  matiere: "espagnol",
  niveau: "5eme",
  langueVoix: "es-ES",
  description:
    "Découvrir le vocabulaire du collège espagnol, les matières scolaires, les jours de la semaine et apprendre à décrire son emploi du temps avec le présent de l'indicatif.",
  objectifs: [
    "Nommer les matières scolaires et les lieux du collège",
    "Utiliser les jours de la semaine",
    "Dire l'heure simplement",
    "Conjuguer des verbes réguliers au présent (estudiar, tener clase)",
    "Décrire son emploi du temps hebdomadaire",
  ],
  slides: [
    {
      titre: "El instituto",
      illustration: "🏫",
      visuel: "El instituto",
      contenu: [
        "El instituto / el colegio : le collège",
        "La clase, el aula : la classe, la salle de classe",
        "El patio : la cour de récréation",
        "El profesor / la profesora : le professeur / la professeure",
      ],
      voixOff:
        "Découvrons le vocabulaire du collège espagnol. El instituto ou el colegio désignent l'établissement scolaire. La clase et el aula désignent la classe ou la salle de classe. El patio est la cour de récréation. Et n'oublie pas el profesor pour un homme et la profesora pour une femme, avec le même changement -o/-a que pour la famille.",
    },
    {
      titre: "Las asignaturas",
      illustration: "📚",
      visuel: "Las asignaturas",
      contenu: [
        "las matemáticas, la lengua, el inglés : les maths, le français/la langue, l'anglais",
        "la historia, la geografía, las ciencias : l'histoire, la géographie, les sciences",
        "la educación física : le sport (EPS)",
        "la música, el dibujo, la informática : la musique, les arts plastiques, l'informatique",
      ],
      voixOff:
        "Voici les matières scolaires, las asignaturas. Las matemáticas, les maths, la lengua, la langue, el inglés, l'anglais. La historia, l'histoire, la geografía, la géographie, las ciencias, les sciences. La educación física, c'est le sport, ce qu'on appelle l'EPS en France. Et aussi la música, el dibujo pour les arts plastiques, et la informática, l'informatique.",
    },
    {
      titre: "Les jours de la semaine",
      illustration: "📅",
      visuel: "lunes, martes, miércoles…",
      contenu: [
        "lunes, martes, miércoles, jueves, viernes",
        "sábado, domingo",
        "En espagnol, les jours s'écrivent SANS majuscule",
        "El lunes tengo matemáticas : le lundi j'ai maths",
      ],
      voixOff:
        "Les jours de la semaine en espagnol sont lunes, martes, miércoles, jueves, viernes, puis le week-end : sábado, domingo. Attention, contrairement à l'anglais, les jours s'écrivent sans majuscule en espagnol, comme en français ! Pour dire ce qu'on fait un jour précis, on utilise el suivi du jour : el lunes tengo matemáticas, le lundi j'ai maths.",
    },
    {
      titre: "¿Qué hora es?",
      illustration: "🕐",
      visuel: "Son las nueve",
      contenu: [
        "Es la una : il est une heure (seule heure au singulier)",
        "Son las dos, son las tres… : il est deux heures, trois heures…",
        "Y media, y cuarto : et demie, et quart",
        "La clase empieza a las ocho : le cours commence à huit heures",
      ],
      voixOff:
        "Pour dire l'heure, on utilise es la una seulement pour une heure, car una est singulier. Pour toutes les autres heures, on dit son las suivi du nombre : son las dos, il est deux heures. On ajoute y media pour et demie, y cuarto pour et quart. Pour dire qu'un cours commence à une heure précise, on dit la clase empieza a las ocho, le cours commence à huit heures.",
    },
    {
      titre: "Le présent des verbes réguliers",
      illustration: "📖",
      visuel: "Estudiar (-ar)",
      contenu: [
        "Estudiar : estudio, estudias, estudia, estudiamos, estudiáis, estudian",
        "Aprender (-er) : aprendo, aprendes, aprende…",
        "Escribir (-ir) : escribo, escribes, escribe…",
        "Trois groupes de verbes réguliers : -ar, -er, -ir",
      ],
      voixOff:
        "En espagnol, les verbes réguliers se répartissent en trois groupes selon leur terminaison. Le groupe -ar, comme estudiar, étudier : estudio, estudias, estudia, estudiamos, estudiáis, estudian. Le groupe -er, comme aprender, apprendre : aprendo, aprendes, aprende. Et le groupe -ir, comme escribir, écrire : escribo, escribes, escribe. Retiens bien ces trois modèles, ils te serviront pour des centaines de verbes !",
    },
    {
      titre: "Décrire son emploi du temps",
      illustration: "🗓️",
      visuel: "Los lunes tengo…",
      contenu: [
        "Los lunes tengo tres horas de matemáticas : le lundi j'ai trois heures de maths",
        "Por la mañana / por la tarde : le matin / l'après-midi",
        "Mi asignatura favorita es… : ma matière préférée est…",
        "Tenemos recreo a las once : nous avons récréation à onze heures",
      ],
      voixOff:
        "Pour décrire un emploi du temps, on utilise los lunes tengo, suivi du nombre d'heures et de la matière : los lunes tengo tres horas de matemáticas. On précise souvent por la mañana, le matin, ou por la tarde, l'après-midi. Pour donner ta préférence, dis mi asignatura favorita es, ma matière préférée est. Et n'oublie pas tenemos recreo a las once, nous avons récréation à onze heures !",
    },
    {
      titre: "Un dialogue sur l'emploi du temps",
      illustration: "💬",
      visuel: "¿Qué tienes los martes?",
      contenu: [
        "— ¿Qué tienes los martes por la mañana?",
        "— Tengo inglés y después educación física.",
        "— ¿Cuál es tu asignatura favorita?",
        "— Me gusta mucho el dibujo, pero odio las matemáticas.",
      ],
      voixOff:
        "Voici un dialogue complet sur l'emploi du temps. ¿Qué tienes los martes por la mañana ?, qu'est-ce que tu as le mardi matin ? Tengo inglés y después educación física, j'ai anglais et ensuite sport. ¿Cuál es tu asignatura favorita ?, quelle est ta matière préférée ? Me gusta mucho el dibujo, pero odio las matemáticas, j'aime beaucoup les arts plastiques, mais je déteste les maths.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Días + horas + asignaturas",
      contenu: [
        "Les jours : lunes à domingo, sans majuscule",
        "L'heure : es la una / son las + nombre, y media, y cuarto",
        "Trois groupes de verbes réguliers : -ar, -er, -ir (estudiar, aprender, escribir)",
        "Los lunes tengo… + gustar/odiar pour donner son avis sur les matières",
      ],
      voixOff:
        "Résumons. Les jours de la semaine vont de lunes à domingo et s'écrivent sans majuscule. Pour l'heure, retiens es la una au singulier et son las suivi du nombre pour les autres heures. Les verbes réguliers se répartissent en trois groupes : -ar comme estudiar, -er comme aprender, -ir comme escribir. Enfin, pour décrire ton emploi du temps, utilise los lunes tengo suivi de la matière, et complète avec gustar ou odiar pour donner ton avis !",
    },
  ],
  fiche: {
    intro:
      "Pour parler de l'école en espagnol, il faut connaître le vocabulaire des matières et des lieux, savoir dire l'heure, utiliser les jours de la semaine et conjuguer les verbes réguliers en -ar, -er, -ir au présent.",
    sections: [
      {
        titre: "Le vocabulaire scolaire",
        points: [
          "El instituto/colegio, la clase, el aula, el patio, el profesor/la profesora",
          "Las asignaturas : matemáticas, lengua, inglés, historia, ciencias, educación física",
          "El recreo : la récréation",
        ],
      },
      {
        titre: "Jours et heures",
        points: [
          "lunes, martes, miércoles, jueves, viernes, sábado, domingo (sans majuscule)",
          "Es la una (1h) / Son las + nombre (autres heures)",
          "Y media (et demie), y cuarto (et quart)",
        ],
      },
      {
        titre: "Les verbes réguliers au présent",
        points: [
          "-ar : estudiar → estudio, estudias, estudia, estudiamos, estudiáis, estudian",
          "-er : aprender → aprendo, aprendes, aprende…",
          "-ir : escribir → escribo, escribes, escribe…",
        ],
      },
      {
        titre: "Décrire son emploi du temps",
        points: [
          "Los lunes tengo + nombre d'heures + de + matière",
          "Por la mañana / por la tarde",
          "Mi asignatura favorita es… — Me gusta / odio + matière",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'école et l'emploi du temps en espagnol. El instituto ou el colegio désignent le collège, la clase et el aula la salle de classe, el patio la cour. Les matières s'appellent las asignaturas : matemáticas, lengua, inglés, historia, ciencias, educación física. Les jours de la semaine vont de lunes à domingo, toujours sans majuscule. Pour l'heure, on dit es la una au singulier, et son las suivi du nombre pour les autres heures, avec y media pour et demie et y cuarto pour et quart. Les verbes réguliers se répartissent en trois groupes selon leur terminaison : -ar comme estudiar, -er comme aprender, -ir comme escribir. Pour décrire son emploi du temps, on dit los lunes tengo suivi de la matière, en précisant por la mañana ou por la tarde, et on peut donner son avis avec me gusta ou odio.",
  },
  memoCards: [
    { recto: "El instituto / el colegio", verso: "Le collège / l'établissement scolaire." },
    { recto: "Las matemáticas, la lengua, el inglés", verso: "Les maths, le français/la langue, l'anglais." },
    { recto: "La historia, las ciencias, la educación física", verso: "L'histoire, les sciences, le sport (EPS)." },
    { recto: "lunes, martes, miércoles, jueves, viernes, sábado, domingo", verso: "Les jours de la semaine (sans majuscule)." },
    { recto: "Es la una / Son las dos", verso: "Il est une heure / il est deux heures." },
    { recto: "Estudiar : estudio, estudias, estudia…", verso: "Étudier (verbe en -ar régulier au présent)." },
    { recto: "Aprender / Escribir", verso: "Apprendre (-er) / écrire (-ir) : deux autres groupes de verbes réguliers." },
    { recto: "Mi asignatura favorita es…", verso: "Ma matière préférée est… (pour donner son avis)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « les mathématiques » ?",
      choix: ["la lengua", "las matemáticas", "la historia", "el dibujo"],
      bonneReponse: 1,
      explication: "Las matemáticas signifie les mathématiques.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel jour vient après « miércoles » ?",
      choix: ["martes", "jueves", "viernes", "lunes"],
      bonneReponse: 1,
      explication: "L'ordre est lunes, martes, miércoles, jueves, viernes, sábado, domingo.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « J'ai anglais le lundi. »",
      reponse: "Tengo inglés los lunes.",
      explication: "Tengo + matière + los + jour (au pluriel pour une habitude).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « il est une heure » ?",
      choix: ["Son la una", "Es la una", "Son las una", "Es las una"],
      bonneReponse: 1,
      explication: "Une heure utilise es (singulier) : es la una.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « estudiar » avec « nosotros » ?",
      choix: ["estudio", "estudias", "estudiamos", "estudian"],
      bonneReponse: 2,
      explication: "Nosotros estudiamos est la première personne du pluriel du verbe estudiar.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Le mardi, nous avons trois heures de sciences. »",
      reponse: "Los martes tenemos tres horas de ciencias.",
      explication: "Los martes + tenemos + nombre d'heures + de + matière.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue le verbe « aprender » avec « yo » et « ellos », puis traduis « j'apprends l'espagnol ».",
      reponse: "Yo aprendo, ellos aprenden. Aprendo español.",
      explication: "Aprender est un verbe régulier en -er.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment dit-on « il est trois heures et quart » ?",
      choix: ["Son las tres y media", "Es la tres y cuarto", "Son las tres y cuarto", "Son las tres cuarto"],
      bonneReponse: 2,
      explication: "Son las tres y cuarto : au pluriel car tres n'est pas una, avec y cuarto pour le quart.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris ton emploi du temps du lundi en 3 phrases, en utilisant tener, por la mañana/tarde et une matière préférée.",
      reponse:
        "Los lunes por la mañana tengo matemáticas e inglés. Por la tarde tengo educación física. Mi asignatura favorita es el dibujo.",
      explication: "Le texte combine tener, les moments de la journée et une opinion sur une matière.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « escribimos », de quel groupe de verbes s'agit-il et quelle personne est utilisée ?",
      choix: [
        "Groupe -ar, yo",
        "Groupe -er, tú",
        "Groupe -ir, nosotros",
        "Groupe -ir, vosotros"
      ],
      bonneReponse: 2,
      explication: "Escribir est un verbe en -ir ; escribimos correspond à nosotros.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre « es la una » et « son las dos », puis donne un exemple avec « y media ».",
      reponse: "Es la una s'utilise uniquement pour une heure car « una » est singulier. Son las s'utilise pour toutes les autres heures. Exemple : Son las dos y media (il est deux heures et demie).",
      explication: "C'est la seule exception au pluriel dans l'expression de l'heure en espagnol.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un dialogue (4 répliques) entre deux élèves qui comparent leur emploi du temps du vendredi.",
      reponse:
        "— ¿Qué tienes los viernes?\n— Tengo historia y geografía por la mañana, y música por la tarde.\n— ¡Qué bien! A mí me encanta la música. ¿Y tú?\n— A mí también, pero odio la geografía.",
      explication: "Le dialogue combine tener + matières, les moments de la journée et gustar/odiar.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « la récréation » ?",
      choix: ["el recreo", "el patio", "la clase", "el aula"],
      bonneReponse: 0,
      explication: "El recreo signifie la récréation ; el patio est la cour.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est l'infinitif du verbe « aprendo » ?",
      choix: ["aprender", "aprendar", "aprendir", "aprendear"],
      bonneReponse: 0,
      explication: "Aprendo vient de l'infinitif aprender (-er).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Le cours de sport commence à dix heures. »",
      reponse: "La clase de educación física empieza a las diez.",
      explication: "Empezar a las + heure indique l'heure de début.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète avec le verbe estudiar conjugué : « Vosotros __ español. »",
      reponse: "Vosotros estudiáis español.",
      explication: "Estudiáis est la forme de estudiar avec vosotros.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente en 3 phrases ton emploi du temps préféré de la semaine, avec au moins deux matières et une heure précise.",
      reponse: "Mi día favorito es el viernes. Por la mañana tengo dibujo a las nueve. Por la tarde tengo educación física, ¡mi asignatura favorita!",
      explication: "Le texte doit contenir un jour, une heure et des matières avec une opinion.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'école et l'emploi du temps",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « la géographie » ?",
          choix: ["la historia", "la geografía", "las ciencias", "la lengua"],
          bonneReponse: 1,
          explication: "La geografía signifie la géographie.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment s'écrivent les jours de la semaine en espagnol ?",
          choix: ["Toujours avec majuscule", "Toujours sans majuscule", "Majuscule seulement le lundi", "Cela dépend de la région"],
          bonneReponse: 1,
          explication: "Contrairement à l'anglais, les jours s'écrivent sans majuscule en espagnol.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Nous étudions l'anglais et l'espagnol. »",
          reponse: "Estudiamos inglés y español.",
          explication: "Estudiamos est la forme nosotros du verbe estudiar (-ar).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne l'heure suivante en espagnol : 16h30.",
          reponse: "Son las cuatro y media (de la tarde).",
          explication: "Son las + nombre + y media pour les heures et demies, sauf pour une heure.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un texte de 4-5 phrases décrivant l'emploi du temps complet d'une journée, avec matières, heures et une opinion.",
          reponse:
            "Los lunes por la mañana tengo matemáticas a las ocho y después lengua. A las once tenemos recreo. Por la tarde tengo educación física, mi asignatura favorita. No me gusta nada la informática.",
          explication: "Le texte doit combiner jours, heures, matières et opinions (gustar/odiar).",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « son las tres » et pas « es las tres » ?",
          choix: [
            "Parce que tres est un nombre pair",
            "Parce que le verbe ser s'accorde au pluriel dès que l'heure est supérieure à une heure",
            "C'est une erreur, les deux formes sont possibles",
            "Parce que tres est féminin"
          ],
          bonneReponse: 1,
          explication: "Ser s'accorde en nombre avec l'heure : singulier pour una, pluriel pour toutes les autres.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'école et l'emploi du temps",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « le professeur » (homme) ?",
          choix: ["la profesora", "el profesor", "el alumno", "la clase"],
          bonneReponse: 1,
          explication: "El profesor désigne un professeur homme ; la profesora une femme.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel verbe appartient au groupe -ir ?",
          choix: ["estudiar", "aprender", "escribir", "hablar"],
          bonneReponse: 2,
          explication: "Escribir se termine en -ir, contrairement aux autres qui sont en -ar ou -er.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Le vendredi, j'ai éducation physique à onze heures et quart. »",
          reponse: "Los viernes tengo educación física a las once y cuarto.",
          explication: "A las + heure + y cuarto pour préciser l'horaire.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande « ¿Cuál es tu asignatura favorita? ». Réponds en expliquant pourquoi tu l'aimes (2 phrases).",
          reponse: "Mi asignatura favorita es el dibujo. Me gusta mucho porque es muy creativo.",
          explication: "La réponse combine mi asignatura favorita es et une justification avec gustar.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare les trois groupes de verbes réguliers espagnols (-ar, -er, -ir) avec un exemple conjugué à la première personne du pluriel pour chacun.",
          reponse:
            "-ar : estudiar → estudiamos. -er : aprender → aprendemos. -ir : escribir → escribimos.",
          explication: "Chaque groupe a sa propre terminaison à la forme nosotros : -amos, -emos, -imos.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « La clase empieza a las ocho », quelle est la fonction de « a las ocho » ?",
          choix: [
            "Sujet de la phrase",
            "Complément de lieu",
            "Complément de temps précisant l'heure",
            "Adjectif qualificatif"
          ],
          bonneReponse: 2,
          explication: "A las + heure indique le moment précis où débute une action.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vocabulaire clé : el instituto, la clase, el profesor/la profesora, las asignaturas, el recreo.",
    "Jours de la semaine (lunes à domingo) toujours sans majuscule en espagnol.",
    "L'heure : es la una (exception singulier) / son las + nombre, y media, y cuarto.",
    "Trois groupes de verbes réguliers au présent : -ar (estudiar), -er (aprender), -ir (escribir).",
    "Pour décrire un emploi du temps : los + jour + tengo + matière, complété par gustar/odiar.",
    "Les jours de la semaine s'écrivent sans majuscule, contrairement à l'anglais.",
  ],
},
{
  slug: "gustos-aficiones",
  titre: "Les goûts et les loisirs (gustar)",
  matiere: "espagnol",
  niveau: "5eme",
  langueVoix: "es-ES",
  description:
    "Apprendre à exprimer ses goûts et ses loisirs en espagnol avec le verbe gustar, comprendre sa construction particulière et parler de ses activités préférées.",
  objectifs: [
    "Comprendre la construction particulière du verbe gustar (me gusta/me gustan)",
    "Exprimer ses goûts positifs et négatifs",
    "Nommer des loisirs et des activités courantes",
    "Utiliser también et tampoco pour être d'accord ou pas",
    "Poser des questions sur les goûts de quelqu'un",
  ],
  slides: [
    {
      titre: "Le verbe gustar : une construction spéciale",
      illustration: "❤️",
      visuel: "Me gusta / Me gustan",
      contenu: [
        "Gustar fonctionne à l'envers du français : littéralement « ça me plaît »",
        "Me gusta el fútbol : j'aime le foot (singulier)",
        "Me gustan los deportes : j'aime les sports (pluriel)",
        "On accorde gustar avec ce qui est aimé, pas avec la personne !",
      ],
      voixOff:
        "Le verbe gustar fonctionne de façon très différente du français. On ne dit pas « j'aime », mais littéralement « ça me plaît ». Me gusta el fútbol veut dire j'aime le football, car un seul élément est aimé. Mais me gustan los deportes veut dire j'aime les sports, avec gustan au pluriel, car deportes est pluriel. C'est très important : le verbe s'accorde avec la chose aimée, pas avec la personne qui aime !",
    },
    {
      titre: "Les pronoms devant gustar",
      illustration: "👥",
      visuel: "me, te, le, nos, os, les",
      contenu: [
        "(A mí) me gusta… : j'aime…",
        "(A ti) te gusta… : tu aimes…",
        "(A él/ella) le gusta… : il/elle aime…",
        "(A nosotros) nos gusta… : nous aimons…",
      ],
      voixOff:
        "Devant gustar, on place toujours un pronom : me pour moi, te pour toi, le pour lui ou elle, nos pour nous, os pour vous, les pour eux. On peut ajouter a mí, a ti, a él pour insister ou clarifier : a mí me gusta la música, moi, j'aime la musique. Ce petit mot a est très utile quand on parle d'une autre personne, comme a Ana le gusta bailar.",
    },
    {
      titre: "Les loisirs et activités",
      illustration: "⚽",
      visuel: "el fútbol, la música, leer",
      contenu: [
        "el deporte, el fútbol, el baloncesto : le sport, le foot, le basket",
        "la música, el cine, los videojuegos : la musique, le cinéma, les jeux vidéo",
        "leer, bailar, dibujar, cantar : lire, danser, dessiner, chanter",
        "nadar, montar en bici, jugar : nager, faire du vélo, jouer",
      ],
      voixOff:
        "Voici du vocabulaire pour parler de tes loisirs. El deporte, le sport, el fútbol, le foot, el baloncesto, le basket. La música, la musique, el cine, le cinéma, los videojuegos, les jeux vidéo. Et des verbes à l'infinitif : leer, lire, bailar, danser, dibujar, dessiner, cantar, chanter, nadar, nager, et montar en bici, faire du vélo.",
    },
    {
      titre: "Gustar + infinitif",
      illustration: "🎨",
      visuel: "Me gusta bailar",
      contenu: [
        "Devant un verbe, gustar reste toujours au singulier : me gusta bailar",
        "Me gusta leer y dibujar : j'aime lire et dessiner (toujours singulier)",
        "¿Te gusta cantar? : aimes-tu chanter ?",
        "No me gusta nada el fútbol : je n'aime pas du tout le foot",
      ],
      voixOff:
        "Quand gustar est suivi d'un ou plusieurs verbes à l'infinitif, il reste toujours au singulier : me gusta bailar, j'aime danser. Même avec deux verbes, comme me gusta leer y dibujar, j'aime lire et dessiner, gustar ne se met jamais au pluriel dans ce cas. Pour dire qu'on n'aime pas du tout quelque chose, on ajoute nada : no me gusta nada el fútbol.",
    },
    {
      titre: "Aimer plus ou moins",
      illustration: "⭐",
      visuel: "Me encanta / No me gusta",
      contenu: [
        "Me encanta el chocolate : j'adore le chocolat",
        "Me gusta mucho la música : j'aime beaucoup la musique",
        "No me gusta el fútbol : je n'aime pas le foot",
        "Odio los videojuegos : je déteste les jeux vidéo",
      ],
      voixOff:
        "Pour nuancer, on peut utiliser d'autres verbes ou adverbes. Me encanta fonctionne comme gustar mais signifie j'adore : me encanta el chocolate. On peut aussi dire me gusta mucho pour beaucoup aimer. À l'inverse, no me gusta signifie je n'aime pas, et odio, je déteste, se conjugue normalement : odio los videojuegos.",
    },
    {
      titre: "También et tampoco",
      illustration: "🤝",
      visuel: "A mí también / A mí tampoco",
      contenu: [
        "A mí también : moi aussi (accord positif)",
        "A mí tampoco : moi non plus (accord négatif)",
        "— Me gusta el cine. — A mí también.",
        "— No me gusta el fútbol. — A mí tampoco.",
      ],
      voixOff:
        "Pour être d'accord avec quelqu'un, on utilise también, aussi, ou tampoco, non plus. Si quelqu'un dit me gusta el cine, j'aime le cinéma, tu réponds a mí también, moi aussi. Si quelqu'un dit no me gusta el fútbol, je n'aime pas le foot, et que toi non plus, tu réponds a mí tampoco, moi non plus. Ne confonds pas también, qui va avec le positif, et tampoco, qui va avec le négatif !",
    },
    {
      titre: "Un dialogue sur les loisirs",
      illustration: "💬",
      visuel: "¿Qué te gusta hacer?",
      contenu: [
        "— ¿Qué te gusta hacer en tu tiempo libre?",
        "— Me gusta bailar y me encanta la música.",
        "— A mí también me gusta bailar. ¿Te gustan los deportes?",
        "— No mucho, prefiero leer.",
      ],
      voixOff:
        "Voici un dialogue complet sur les loisirs. ¿Qué te gusta hacer en tu tiempo libre ?, qu'aimes-tu faire pendant ton temps libre ? Me gusta bailar y me encanta la música, j'aime danser et j'adore la musique. A mí también me gusta bailar, ¿te gustan los deportes ?, moi aussi j'aime danser, aimes-tu les sports ? No mucho, prefiero leer, pas trop, je préfère lire.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Me gusta(n) + nom / infinitif",
      contenu: [
        "Gustar s'accorde avec ce qui est aimé : gusta (singulier) / gustan (pluriel)",
        "Devant un infinitif, gustar reste TOUJOURS au singulier",
        "Pronoms : me, te, le, nos, os, les — a mí, a ti… pour préciser",
        "También (moi aussi) / Tampoco (moi non plus)",
      ],
      voixOff:
        "Résumons l'essentiel sur gustar. Le verbe s'accorde avec ce qui est aimé : gusta si c'est singulier, gustan si c'est pluriel. Mais devant un ou plusieurs infinitifs, il reste toujours au singulier : me gusta bailar y cantar. N'oublie jamais le pronom devant gustar : me, te, le, nos, os, les, et ajoute a mí, a ti pour préciser. Enfin, utilise también pour dire moi aussi, et tampoco pour moi non plus !",
    },
  ],
  fiche: {
    intro:
      "Le verbe gustar se construit à l'envers du français : le sujet grammatical est la chose aimée, et la personne est représentée par un pronom (me, te, le…). Il s'accorde avec ce qui est aimé, sauf devant un infinitif.",
    sections: [
      {
        titre: "La construction de gustar",
        points: [
          "Me gusta + nom singulier : me gusta el fútbol",
          "Me gustan + nom pluriel : me gustan los deportes",
          "Me gusta + infinitif(s) : toujours au singulier, même avec plusieurs verbes",
        ],
      },
      {
        titre: "Les pronoms",
        points: [
          "me, te, le, nos, os, les devant gustar",
          "a mí, a ti, a él/ella… pour insister ou préciser la personne",
          "A Ana le gusta bailar : Ana aime danser",
        ],
      },
      {
        titre: "Nuancer ses goûts",
        points: [
          "Me encanta : j'adore — Me gusta mucho : j'aime beaucoup",
          "No me gusta : je n'aime pas — No me gusta nada : je n'aime pas du tout",
          "Odio : je déteste (verbe régulier, pas de construction spéciale)",
        ],
      },
      {
        titre: "Être d'accord ou pas",
        points: [
          "A mí también : moi aussi (avec une phrase positive)",
          "A mí tampoco : moi non plus (avec une phrase négative)",
          "¿Qué te gusta hacer en tu tiempo libre? : question type",
        ],
      },
    ],
    audio:
      "Fiche de révision : les goûts et loisirs avec le verbe gustar. Gustar fonctionne à l'envers du français : on dit littéralement que quelque chose plaît à quelqu'un. Me gusta el fútbol si l'objet aimé est singulier, me gustan los deportes s'il est pluriel. Devant un infinitif, gustar reste toujours au singulier, même avec plusieurs verbes : me gusta leer y dibujar. On place toujours un pronom devant gustar : me, te, le, nos, os, les, et on peut préciser avec a mí, a ti, a él. Pour nuancer, me encanta signifie j'adore, no me gusta nada signifie je n'aime pas du tout, et odio se conjugue normalement pour dire je déteste. Enfin, también sert à dire moi aussi après une phrase positive, et tampoco moi non plus après une phrase négative.",
  },
  memoCards: [
    { recto: "Me gusta el fútbol", verso: "J'aime le foot (objet aimé singulier → gusta)." },
    { recto: "Me gustan los deportes", verso: "J'aime les sports (objet aimé pluriel → gustan)." },
    { recto: "Me gusta bailar y cantar", verso: "J'aime danser et chanter (infinitifs → toujours singulier)." },
    { recto: "me, te, le, nos, os, les", verso: "Pronoms obligatoires devant gustar (moi, toi, lui/elle…)." },
    { recto: "A mí, a ti, a él…", verso: "Pour préciser ou insister sur la personne. Ex : A Ana le gusta bailar." },
    { recto: "Me encanta", verso: "J'adore (se construit comme gustar)." },
    { recto: "A mí también / A mí tampoco", verso: "Moi aussi (positif) / Moi non plus (négatif)." },
    { recto: "¿Qué te gusta hacer?", verso: "Qu'aimes-tu faire ? Question clé pour parler des loisirs." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « j'aime le cinéma » ?",
      choix: ["Me gusta el cine", "Me gustan el cine", "Yo gusto el cine", "Me gusta el cines"],
      bonneReponse: 0,
      explication: "El cine est singulier, donc on utilise gusta.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « j'aime les jeux vidéo » ?",
      choix: ["Me gusta los videojuegos", "Me gustan los videojuegos", "Me gusta el videojuego", "Yo gusto videojuegos"],
      bonneReponse: 1,
      explication: "Los videojuegos est pluriel, donc on utilise gustan.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « Tu aimes danser ? »",
      reponse: "¿Te gusta bailar?",
      explication: "Devant un infinitif, gustar reste toujours au singulier : te gusta.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel pronom utilise-t-on pour dire « il aime » ?",
      choix: ["me gusta", "te gusta", "le gusta", "nos gusta"],
      bonneReponse: 2,
      explication: "Le gusta correspond à il/elle aime.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : « Me __ leer y dibujar. »",
      choix: ["gusta", "gustan", "gustas", "gusto"],
      bonneReponse: 0,
      explication: "Devant plusieurs infinitifs, gustar reste au singulier : gusta.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ana aime beaucoup les animaux. »",
      reponse: "A Ana le gustan mucho los animales.",
      explication: "On ajoute « a Ana » pour préciser, avec le pronom le, et gustan car animales est pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réponds « moi aussi » puis « moi non plus » à ces deux phrases : « Me gusta la música. » / « No me gusta el fútbol. »",
      reponse: "A mí también. / A mí tampoco.",
      explication: "También répond à une phrase positive, tampoco à une phrase négative.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase est correctement construite ?",
      choix: ["Yo gusto el chocolate", "Me gusto el chocolate", "Me gusta el chocolate", "Gusta me el chocolate"],
      bonneReponse: 2,
      explication: "La construction correcte est pronom + gusta/gustan + objet aimé : me gusta el chocolate.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on dit « me gusta el fútbol » mais « me gustan los deportes », en une phrase claire.",
      reponse: "Gustar s'accorde avec l'objet aimé : au singulier avec fútbol, au pluriel avec deportes, car c'est ce qui est aimé qui commande l'accord, pas la personne.",
      explication: "C'est la règle fondamentale de la construction de gustar.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « A mis padres les gusta viajar », pourquoi utilise-t-on « les » ?",
      choix: [
        "Parce que viajar est au pluriel",
        "Parce que mis padres (eux) est la personne qui aime, à la 3e personne du pluriel",
        "C'est une erreur, il faudrait dire le",
        "Parce que viajar est féminin"
      ],
      bonneReponse: 1,
      explication: "Les correspond à la 3e personne du pluriel (ellos/ellas) : mis padres.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un mini-dialogue (4 répliques) entre deux amis qui comparent leurs loisirs, en utilisant gustar, también et tampoco.",
      reponse:
        "— ¿Qué te gusta hacer?\n— Me gusta nadar y me encanta la música. ¿Y tú?\n— A mí también me gusta la música, pero no me gusta nadar.\n— A mí tampoco me gusta el fútbol.",
      explication: "Le dialogue combine gustar + nom, gustar + infinitif, también et tampoco.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Transforme cette phrase en ajoutant « a mí » pour insister : « Me gusta mucho el baloncesto. »",
      reponse: "A mí me gusta mucho el baloncesto.",
      explication: "A mí s'ajoute devant me pour insister, sans remplacer le pronom me.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « j'aime lire » ?",
      choix: ["Me gusta leer", "Me gustan leer", "Yo gusto leer", "Me gusto leer"],
      bonneReponse: 0,
      explication: "Devant un infinitif, gustar est toujours au singulier : me gusta leer.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« A mí tampoco » se dit après une phrase :",
      choix: ["Positive", "Négative", "Interrogative", "Exclamative"],
      bonneReponse: 1,
      explication: "Tampoco s'utilise pour être d'accord avec une phrase négative.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Nous aimons les jeux vidéo. »",
      reponse: "Nos gustan los videojuegos.",
      explication: "Los videojuegos est pluriel, donc gustan ; nos pour nous.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Complète : « A ella __ gusta mucho bailar. »",
      reponse: "A ella le gusta mucho bailar.",
      explication: "Le pronom le correspond à elle (a ella), et gustar reste au singulier devant l'infinitif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris trois phrases décrivant tes goûts : une avec gusta, une avec gustan, une avec un infinitif.",
      reponse: "Me gusta el chocolate. Me gustan los animales. Me gusta dibujar.",
      explication: "Les trois structures principales de gustar sont représentées.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les goûts et loisirs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « j'adore la musique » ?",
          choix: ["Me gusta la música", "Me encanta la música", "Odio la música", "Me encantan la música"],
          bonneReponse: 1,
          explication: "Encanta fonctionne comme gusta et signifie « j'adore ».",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel pronom correspond à « nous » devant gustar ?",
          choix: ["me", "te", "nos", "les"],
          bonneReponse: 2,
          explication: "Nos gusta/gustan correspond à « nous aimons ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Ils n'aiment pas du tout les jeux vidéo. »",
          reponse: "No les gustan nada los videojuegos.",
          explication: "Les (à eux) + gustan (pluriel) + nada (pas du tout).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réponds « moi aussi » à : « Me encanta el chocolate. »",
          reponse: "A mí también.",
          explication: "También s'utilise pour être d'accord avec une phrase positive.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un paragraphe de 4 phrases décrivant tes loisirs préférés et ceux que tu détestes, en variant les structures (gusta, gustan, infinitif, encanta/odio).",
          reponse:
            "Me gusta mucho la música y me encanta bailar. También me gustan los deportes, sobre todo el baloncesto. Sin embargo, no me gusta nada el fútbol y odio los videojuegos.",
          explication: "Le texte utilise gusta, gustan, un infinitif, encanta et odio.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi « odio » ne suit-il pas la construction de gustar ?",
          choix: [
            "Parce que c'est un verbe régulier classique, avec un sujet normal (yo odio)",
            "Parce qu'odio est un nom",
            "Parce qu'odio ne peut pas être suivi d'un nom",
            "Il n'y a pas de différence"
          ],
          bonneReponse: 0,
          explication: "Odio se conjugue normalement comme n'importe quel verbe : yo odio, tú odias…",
        },
      ],
    },
    {
      titre: "Examen 2 — Les goûts et loisirs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « elle aime » ?",
          choix: ["me gusta", "te gusta", "le gusta", "os gusta"],
          bonneReponse: 2,
          explication: "Le gusta correspond à il/elle aime (a él/a ella le gusta).",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel mot précède une phrase pour insister sur « moi » ?",
          choix: ["a mí", "a ti", "a él", "a ella"],
          bonneReponse: 0,
          explication: "A mí insiste sur la première personne du singulier.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Qu'aimez-vous faire pendant votre temps libre ? » (vosotros)",
          reponse: "¿Qué os gusta hacer en vuestro tiempo libre?",
          explication: "Os correspond à vosotros (vous, familier pluriel).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami dit : « No me gusta nadar. » Réponds que toi non plus tu n'aimes pas nager.",
          reponse: "A mí tampoco me gusta nadar.",
          explication: "Tampoco confirme l'accord avec une phrase négative.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare l'utilisation de gustar au singulier et au pluriel avec deux exemples précis, puis explique le cas de l'infinitif.",
          reponse:
            "Me gusta el libro (singulier, un objet). Me gustan los libros (pluriel, plusieurs objets). Mais devant un infinitif, gustar reste toujours singulier : me gusta leer, même avec plusieurs infinitifs : me gusta leer y escribir.",
          explication: "L'infinitif ne s'accorde jamais en nombre, contrairement aux noms.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « A los alumnos les gusta el recreo », à qui renvoie « les » ?",
          choix: ["Au professeur", "À los alumnos (eux)", "Au recreo", "À moi"],
          bonneReponse: 1,
          explication: "Les renvoie à los alumnos, la 3e personne du pluriel qui aime la récréation.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Gustar s'accorde avec l'objet aimé : gusta (singulier) / gustan (pluriel), jamais avec la personne.",
    "Devant un ou plusieurs infinitifs, gustar reste TOUJOURS au singulier.",
    "Pronoms obligatoires : me, te, le, nos, os, les — a mí, a ti… pour préciser ou insister.",
    "Me encanta (j'adore) suit la même construction ; odio (je déteste) se conjugue normalement.",
    "También (moi aussi, positif) / Tampoco (moi non plus, négatif) pour réagir aux goûts des autres.",
    "¿Qué te gusta hacer en tu tiempo libre? : question clé pour lancer une conversation sur les loisirs.",
  ],
},
{
  slug: "la-familia",
  titre: "La famille",
  matiere: "espagnol",
  niveau: "5eme",
  langueVoix: "es-ES",
  description:
    "Apprendre le vocabulaire de la famille en espagnol, les adjectifs possessifs de base et le verbe « tener » pour décrire sa propre famille.",
  objectifs: [
    "Nommer les membres de la famille : padre, madre, hermano, abuelo…",
    "Utiliser les adjectifs possessifs mi, tu, su",
    "Conjuguer et utiliser le verbe tener au présent",
    "Décrire sa famille avec des adjectifs simples",
    "Poser des questions sur la famille de quelqu'un",
  ],
  slides: [
    {
      titre: "Mi familia",
      illustration: "👨‍👩‍👧‍👦",
      visuel: "La familia",
      contenu: [
        "El padre / la madre : le père / la mère",
        "Los padres : les parents",
        "El hermano / la hermana : le frère / la sœur",
        "Los hermanos : les frères et sœurs",
      ],
      voixOff:
        "Découvrons le vocabulaire de la famille. El padre, le père, et la madre, la mère : ensemble, ce sont los padres, les parents. El hermano est le frère, la hermana la sœur, et los hermanos désigne les frères et sœurs ensemble. Remarque que le masculin pluriel peut désigner un groupe mixte, comme en français !",
    },
    {
      titre: "Los abuelos y más",
      illustration: "👴👵",
      visuel: "El abuelo / La abuela",
      contenu: [
        "El abuelo / la abuela : le grand-père / la grand-mère",
        "El tío / la tía : l'oncle / la tante",
        "El primo / la prima : le cousin / la cousine",
        "El hijo / la hija : le fils / la fille",
      ],
      voixOff:
        "Continuons avec la famille élargie. El abuelo et la abuela sont le grand-père et la grand-mère. El tío et la tía désignent l'oncle et la tante, et el primo, la prima, le cousin et la cousine. N'oublie pas el hijo et la hija, qui veulent dire le fils et la fille. Tu remarques que le masculin se termine souvent en -o et le féminin en -a !",
    },
    {
      titre: "Les adjectifs possessifs",
      illustration: "🔑",
      visuel: "mi / tu / su",
      contenu: [
        "mi hermano / mi hermana : mon frère / ma sœur (mi ne change pas)",
        "tu padre / tu madre : ton père / ta mère",
        "su abuelo : son grand-père (à lui, à elle, ou leur)",
        "mis, tus, sus : au pluriel (mis hermanos)",
      ],
      voixOff:
        "Pour dire mon, ton ou son en espagnol, on utilise mi, tu et su. La bonne nouvelle, c'est que ces mots ne changent pas de forme selon le genre : on dit mi hermano et mi hermana de la même façon. Au pluriel, on ajoute simplement un s : mis hermanos, mes frères et sœurs. Su peut vouloir dire son, sa, leur : le contexte permet de comprendre !",
    },
    {
      titre: "Le verbe tener",
      illustration: "✋",
      visuel: "Tengo dos hermanos",
      contenu: [
        "Yo tengo / tú tienes / él-ella tiene",
        "Nosotros tenemos / vosotros tenéis / ellos tienen",
        "Tengo dos hermanos : j'ai deux frères et sœurs",
        "¿Tienes hermanos? : as-tu des frères et sœurs ?",
      ],
      voixOff:
        "Le verbe tener, avoir, est indispensable pour parler de sa famille. Au présent : yo tengo, tú tienes, él ou ella tiene, nosotros tenemos, vosotros tenéis, ellos tienen. Par exemple, tengo dos hermanos veut dire j'ai deux frères et sœurs. Pour demander à quelqu'un s'il a des frères et sœurs, on dit ¿tienes hermanos ?",
    },
    {
      titre: "Décrire sa famille",
      illustration: "😊",
      visuel: "Mi hermano es simpático",
      contenu: [
        "Mi padre es alto : mon père est grand",
        "Mi madre es simpática : ma mère est sympathique",
        "Mi hermano es pequeño : mon petit frère est petit",
        "Adjectifs : masculin en -o, féminin en -a (alto/alta)",
      ],
      voixOff:
        "Pour décrire un membre de la famille, on utilise le verbe ser suivi d'un adjectif. Mi padre es alto, mon père est grand. Mi madre es simpática, ma mère est sympathique. Attention, l'adjectif s'accorde : il prend un -o au masculin et un -a au féminin, comme alto et alta. C'est une règle très régulière en espagnol !",
    },
    {
      titre: "Combien êtes-vous ?",
      illustration: "🔢",
      visuel: "Somos cuatro en mi familia",
      contenu: [
        "¿Cuántos sois en tu familia? : combien êtes-vous dans ta famille ?",
        "Somos cuatro : nous sommes quatre",
        "Soy hijo único / hija única : je suis fils unique / fille unique",
        "Vivo con mis padres y mi hermana : je vis avec mes parents et ma sœur",
      ],
      voixOff:
        "Pour demander la taille d'une famille, on dit ¿cuántos sois en tu familia ?. On répond somos suivi d'un nombre, par exemple somos cuatro, nous sommes quatre. Si on n'a pas de frères et sœurs, on dit soy hijo único ou hija única. On peut aussi préciser vivo con mis padres y mi hermana, je vis avec mes parents et ma sœur.",
    },
    {
      titre: "Les animaux domestiques",
      illustration: "🐶",
      visuel: "Tengo un perro",
      contenu: [
        "Tengo un perro / una gata : j'ai un chien / une chatte",
        "El perro se llama Rex : le chien s'appelle Rex",
        "No tengo mascota : je n'ai pas d'animal",
        "Mi familia tiene un pez : ma famille a un poisson",
      ],
      voixOff:
        "On parle souvent des animaux domestiques en présentant sa famille ! Tengo un perro, j'ai un chien, ou tengo una gata, j'ai une chatte. On peut ajouter el perro se llama Rex, le chien s'appelle Rex. Si on n'a pas d'animal, on dit no tengo mascota. Mascota est le mot général pour animal de compagnie.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 mi/tu/su + tener + ser",
      contenu: [
        "Vocabulaire : padre/madre, hermano/a, abuelo/a, tío/a, primo/a",
        "mi, tu, su ne changent pas selon le genre — mis, tus, sus au pluriel",
        "Tener : tengo, tienes, tiene, tenemos, tenéis, tienen",
        "Ser + adjectif accordé pour décrire : es alto/alta, es simpático/a",
      ],
      voixOff:
        "Résumons. Retiens le vocabulaire de base : padre, madre, hermano, hermana, abuelo, abuela, tío, tía, primo, prima. Les possessifs mi, tu, su ne changent pas selon le genre, mais prennent un s au pluriel. Le verbe tener se conjugue tengo, tienes, tiene, tenemos, tenéis, tienen, et sert à dire combien on a de frères et sœurs. Enfin, pour décrire, utilise ser suivi d'un adjectif bien accordé au masculin ou au féminin !",
    },
  ],
  fiche: {
    intro:
      "Le vocabulaire de la famille s'apprend souvent avec les couples masculin/féminin en -o/-a. Les possessifs mi, tu, su et le verbe tener permettent de présenter et décrire sa propre famille.",
    sections: [
      {
        titre: "Vocabulaire de la famille",
        points: [
          "El padre / la madre : le père / la mère — los padres : les parents",
          "El hermano / la hermana : le frère / la sœur",
          "El abuelo / la abuela — el tío / la tía — el primo / la prima",
        ],
      },
      {
        titre: "Les possessifs",
        points: [
          "mi, tu, su : mon/ton/son, ma/ta/sa (invariables en genre)",
          "mis, tus, sus : au pluriel",
          "Su peut signifier son, sa, ou leur selon le contexte",
        ],
      },
      {
        titre: "Le verbe tener",
        points: [
          "Tengo, tienes, tiene, tenemos, tenéis, tienen",
          "Tengo dos hermanos : j'ai deux frères et sœurs",
          "¿Cuántos sois en tu familia? — Somos cuatro",
        ],
      },
      {
        titre: "Décrire avec ser",
        points: [
          "Ser + adjectif : mi padre es alto, mi madre es simpática",
          "Les adjectifs s'accordent : -o au masculin, -a au féminin",
          "Soy hijo único / hija única : je suis fils/fille unique",
        ],
      },
    ],
    audio:
      "Fiche de révision : la famille en espagnol. El padre et la madre sont le père et la mère, ensemble los padres. El hermano et la hermana sont le frère et la sœur. El abuelo et la abuela sont les grands-parents, el tío et la tía l'oncle et la tante, el primo et la prima les cousins. Pour dire mon, ton, son, on utilise mi, tu, su, qui ne changent pas de genre mais prennent un s au pluriel : mis, tus, sus. Le verbe tener, avoir, se conjugue tengo, tienes, tiene, tenemos, tenéis, tienen, et sert à dire combien on a de frères et sœurs, comme tengo dos hermanos. Pour décrire un proche, on utilise ser suivi d'un adjectif accordé, comme mi padre es alto ou mi madre es simpática.",
  },
  memoCards: [
    { recto: "El padre / la madre", verso: "Le père / la mère. Ensemble : los padres." },
    { recto: "El hermano / la hermana", verso: "Le frère / la sœur." },
    { recto: "El abuelo / la abuela", verso: "Le grand-père / la grand-mère." },
    { recto: "El tío / la tía", verso: "L'oncle / la tante." },
    { recto: "El primo / la prima", verso: "Le cousin / la cousine." },
    { recto: "mi / tu / su", verso: "Mon-ma / ton-ta / son-sa (invariables). Pluriel : mis, tus, sus." },
    { recto: "Tener : tengo, tienes, tiene…", verso: "Avoir. Ex : Tengo dos hermanos (j'ai deux frères et sœurs)." },
    { recto: "Soy hijo único / hija única", verso: "Je suis fils unique / fille unique." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « la mère » en espagnol ?",
      choix: ["El padre", "La madre", "La hermana", "La abuela"],
      bonneReponse: 1,
      explication: "La madre signifie la mère ; el padre signifie le père.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « le grand-père » ?",
      choix: ["El tío", "El primo", "El abuelo", "El hermano"],
      bonneReponse: 2,
      explication: "El abuelo signifie le grand-père ; la abuela la grand-mère.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « J'ai un frère et une sœur. »",
      reponse: "Tengo un hermano y una hermana.",
      explication: "On utilise tengo (verbe tener) suivi des noms de famille.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie « los primos » ?",
      choix: ["Les oncles", "Les cousins", "Les grands-parents", "Les frères"],
      bonneReponse: 1,
      explication: "Los primos désigne les cousins (ou cousins et cousines ensemble).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase est correctement accordée ?",
      choix: ["Mi madre es alto", "Mi padre es simpática", "Mi hermana es simpática", "Mi hermano es alta"],
      bonneReponse: 2,
      explication: "L'adjectif doit s'accorder avec le nom : hermana (féminin) + simpática (féminin).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue le verbe tener avec « nosotros » et « ellos », puis traduis « nous avons trois cousins ».",
      reponse: "Nosotros tenemos, ellos tienen. Tenemos tres primos.",
      explication: "Tener se conjugue tengo, tienes, tiene, tenemos, tenéis, tienen.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Mon grand-père est grand et sympathique. »",
      reponse: "Mi abuelo es alto y simpático.",
      explication: "Les adjectifs alto et simpático s'accordent au masculin car abuelo est masculin.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment dit-on « leur tante » (à eux) en espagnol ?",
      choix: ["mi tía", "tu tía", "su tía", "sus tía"],
      bonneReponse: 2,
      explication: "Su tía peut signifier sa tante ou leur tante, selon le contexte ; su reste invariable au singulier.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente une famille imaginaire de 5 personnes en 3-4 phrases, en utilisant tener, ser et des possessifs.",
      reponse:
        "Somos cinco en mi familia. Tengo dos hermanos y una hermana. Mi padre es alto y mi madre es simpática. Mi hermano mayor se llama Pablo.",
      explication: "Le texte combine tener (avoir), ser (décrire) et les possessifs mi.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Tengo una gata que se llama Luna », le mot « gata » indique :",
      choix: ["Un chien mâle", "Une chatte femelle", "Un poisson", "Un oiseau"],
      bonneReponse: 1,
      explication: "Gata est le féminin de gato (chat) : une chatte.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on dit « mi hermano » et « mi hermana » avec le même possessif « mi », alors que le nom change de genre.",
      reponse: "Parce que mi, tu, su sont invariables en genre : ils ne s'accordent pas avec le nom qu'ils accompagnent, contrairement aux adjectifs.",
      explication: "C'est une différence importante avec les adjectifs qualificatifs comme alto/alta.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un correspondant te demande « ¿Cuántos sois en tu familia? ». Réponds en détaillant la composition de ta famille (au moins 3 personnes).",
      reponse: "Somos cuatro en mi familia: mis padres, mi hermano y yo. Mi hermano se llama Lucas y tiene 10 años.",
      explication: "La réponse utilise somos, mis, et une phrase supplémentaire avec tener.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « le fils » ?",
      choix: ["El hijo", "La hija", "El hermano", "El primo"],
      bonneReponse: 0,
      explication: "El hijo signifie le fils ; la hija la fille.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Mis hermanos » signifie :",
      choix: ["Mon frère", "Mes frères et sœurs", "Ton frère", "Nos frères"],
      bonneReponse: 1,
      explication: "Mis est le pluriel de mi : mes frères et sœurs.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ma sœur a 15 ans. »",
      reponse: "Mi hermana tiene 15 años.",
      explication: "Tener sert aussi à donner l'âge des membres de la famille.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde correctement : « Mi (abuela) es (alto). »",
      reponse: "Mi abuela es alta.",
      explication: "L'adjectif alto devient alta car abuela est féminin.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris ta famille en 3 phrases en utilisant tener, ser et un possessif.",
      reponse: "Somos tres en mi familia. Tengo un hermano. Mi hermano es simpático.",
      explication: "Le texte combine les trois structures vues dans le chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La famille",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « la tante » ?",
          choix: ["La tía", "El tío", "La prima", "La abuela"],
          bonneReponse: 0,
          explication: "La tía signifie la tante ; el tío l'oncle.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte du verbe tener avec « tú » ?",
          choix: ["tengo", "tienes", "tiene", "tenemos"],
          bonneReponse: 1,
          explication: "Tú tienes est la deuxième personne du singulier du verbe tener.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Mes parents sont sympathiques. »",
          reponse: "Mis padres son simpáticos.",
          explication: "Padres est masculin pluriel, donc l'adjectif prend la forme simpáticos.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Complète : « ¿Cuántos … en tu familia? » puis réponds pour une famille de 5 personnes.",
          reponse: "¿Cuántos sois en tu familia? — Somos cinco.",
          explication: "Sois vient du verbe ser ; somos est la première personne du pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Présente en 4-5 phrases une famille avec au moins 4 membres, un animal domestique, et des adjectifs de description.",
          reponse:
            "Somos cuatro en mi familia. Tengo un hermano y una hermana. Mi hermano es alto y mi hermana es simpática. También tenemos un perro que se llama Toby.",
          explication: "Le texte doit combiner tener, ser, possessifs et vocabulaire familial.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « mi hermano es alto » mais « mi hermana es alta » ?",
          choix: [
            "C'est une erreur, alto ne change jamais",
            "L'adjectif s'accorde en genre avec le nom qu'il décrit",
            "Alta est réservé au pluriel",
            "Alto est réservé aux animaux"
          ],
          bonneReponse: 1,
          explication: "Contrairement aux possessifs, les adjectifs qualificatifs s'accordent en genre en espagnol.",
        },
      ],
    },
    {
      titre: "Examen 2 — La famille",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « les grands-parents » ?",
          choix: ["Los abuelos", "Los padres", "Los tíos", "Los primos"],
          bonneReponse: 0,
          explication: "Los abuelos désigne les grands-parents.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Soy hijo único » signifie :",
          choix: ["Je suis le fils préféré", "Je suis fils unique", "Je n'ai pas de fils", "Je suis un bon fils"],
          bonneReponse: 1,
          explication: "Hijo único signifie fils unique, sans frères ni sœurs.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « J'ai un chat et un chien. »",
          reponse: "Tengo un gato y un perro.",
          explication: "Tengo (verbe tener) + un/una + nom de l'animal.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande « ¿Tienes hermanos? ». Réponds que tu as deux sœurs plus jeunes.",
          reponse: "Sí, tengo dos hermanas menores.",
          explication: "Menores signifie « plus jeunes » ; on peut aussi dire mayores pour « plus âgés ».",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare l'utilisation de « ser » et « tener » pour parler de la famille, avec un exemple pour chacun.",
          reponse: "Ser sert à décrire (mi madre es simpática) ; tener sert à indiquer ce qu'on possède ou l'âge (tengo dos hermanos, mi madre tiene 40 años).",
          explication: "Ser décrit des qualités, tener indique la possession ou l'âge.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « sus primos », le possessif « sus » peut signifier :",
          choix: ["Seulement « ses »", "« ses », « leurs » selon le contexte", "Seulement « nos »", "Seulement « tes »"],
          bonneReponse: 1,
          explication: "Su/sus est ambigu et peut signifier son/sa/ses ou leur/leurs selon le contexte.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vocabulaire clé : padre/madre, hermano/a, abuelo/a, tío/a, primo/a, hijo/a.",
    "mi, tu, su sont invariables en genre ; mis, tus, sus au pluriel.",
    "Tener (avoir) : tengo, tienes, tiene, tenemos, tenéis, tienen — sert pour l'âge et les frères/sœurs.",
    "Ser + adjectif accordé (-o/-a) pour décrire : es alto/alta, es simpático/a.",
    "Somos + nombre pour dire combien on est dans la famille (¿Cuántos sois?).",
    "Vocabulaire des animaux : tengo un perro/una gata — no tengo mascota si on n'en a pas.",
  ],
},
{
  slug: "numeros-edad",
  titre: "Les nombres et l'âge",
  matiere: "espagnol",
  niveau: "5eme",
  langueVoix: "es-ES",
  description:
    "Apprendre à compter de 0 à 100 en espagnol, à donner son âge avec le verbe tener et à utiliser les nombres dans des situations quotidiennes (dates, quantités, prix).",
  objectifs: [
    "Compter de 0 à 20, puis par dizaines jusqu'à 100",
    "Donner et demander l'âge avec tener",
    "Utiliser les nombres pour dire une date ou une quantité",
    "Reconnaître les nombres à l'oral",
    "Poser des questions avec cuánto/cuántos",
  ],
  slides: [
    {
      titre: "De 0 a 10",
      illustration: "🔢",
      visuel: "0 1 2 3 4 5 6 7 8 9 10",
      contenu: [
        "cero, uno, dos, tres, cuatro",
        "cinco, seis, siete, ocho, nueve, diez",
        "Uno devient un devant un nom masculin : un chico (un garçon)",
        "Ces nombres sont la base de tout le reste !",
      ],
      voixOff:
        "Commençons par les nombres de zéro à dix : cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Attention, uno se transforme en un devant un nom masculin : un chico, un garçon, mais una chica, une fille. Apprends bien cette base, elle te servira pour tous les autres nombres !",
    },
    {
      titre: "De 11 a 20",
      illustration: "🔢",
      visuel: "11 a 20",
      contenu: [
        "once, doce, trece, catorce, quince",
        "dieciséis, diecisiete, dieciocho, diecinueve, veinte",
        "À partir de 16, on colle « diez y » : dieciséis = diez y seis",
        "Ces nombres s'écrivent en un seul mot",
      ],
      voixOff:
        "De onze à vingt : once, doce, trece, catorce, quince, puis dieciséis, diecisiete, dieciocho, diecinueve, veinte. À partir de seize, tu remarques la logique : dieciséis vient de diez y seis, dix et six, mais tout s'écrit en un seul mot avec un accent sur le é. Continue à répéter ces nombres pour bien les mémoriser !",
    },
    {
      titre: "Les dizaines : 20 à 100",
      illustration: "💯",
      visuel: "20, 30, 40… 100",
      contenu: [
        "veinte (20), treinta (30), cuarenta (40), cincuenta (50)",
        "sesenta (60), setenta (70), ochenta (80), noventa (90)",
        "cien (100)",
        "Entre les dizaines : veintiuno (21), treinta y dos (32)",
      ],
      voixOff:
        "Voici les dizaines : veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, et cien pour cent. Pour les nombres entre deux dizaines, la règle change après vingt : de 21 à 29, on colle tout en un mot comme veintiuno, mais à partir de trente, on utilise y séparé : treinta y dos, trente-deux, cuarenta y cinco, quarante-cinq.",
    },
    {
      titre: "Donner son âge avec tener",
      illustration: "🎂",
      visuel: "Tengo 13 años",
      contenu: [
        "¿Cuántos años tienes? : quel âge as-tu ?",
        "Tengo 13 años : j'ai 13 ans",
        "Mi hermano tiene 8 años : mon frère a 8 ans",
        "En español, se usa el verbo TENER, no SER, para la edad",
      ],
      voixOff:
        "Pour donner son âge en espagnol, on utilise toujours le verbe tener, jamais ser. On demande ¿cuántos años tienes ?, quel âge as-tu, littéralement combien d'années as-tu. On répond tengo suivi du nombre puis años : tengo trece años, j'ai treize ans. Attention à ne jamais dire soy trece años, ce serait une erreur fréquente à éviter !",
    },
    {
      titre: "Combien ça coûte ?",
      illustration: "💶",
      visuel: "¿Cuánto cuesta?",
      contenu: [
        "¿Cuánto cuesta? : combien ça coûte ?",
        "Cuesta diez euros : ça coûte dix euros",
        "¿Cuánto es? : combien ça fait ? (au total)",
        "Son quince euros : ça fait quinze euros",
      ],
      voixOff:
        "Les nombres servent aussi à parler d'argent. ¿Cuánto cuesta ? demande combien coûte un objet ; on répond cuesta suivi du prix, cuesta diez euros. Pour le total d'un achat, on demande plutôt ¿cuánto es ?, et on répond son suivi du prix, son quince euros. Utile pour tes futurs voyages en Espagne !",
    },
    {
      titre: "Les dates et les quantités",
      illustration: "📅",
      visuel: "El 15 de mayo",
      contenu: [
        "El (número) de (mes) : el quince de mayo, le 15 mai",
        "Hay veinte alumnos en la clase : il y a vingt élèves",
        "Tengo cien euros : j'ai cent euros",
        "Un año tiene doce meses : une année a douze mois",
      ],
      voixOff:
        "Pour donner une date, on dit el suivi du nombre puis de et le mois : el quince de mayo, le 15 mai. Les nombres servent aussi à exprimer une quantité avec hay, il y a : hay veinte alumnos en la clase, il y a vingt élèves dans la classe. N'oublie pas que cien s'utilise seul devant un nom, sans « uno » : cien euros, pas cien y uno euros.",
    },
    {
      titre: "S'entraîner à compter",
      illustration: "🧮",
      visuel: "1, 2, 3… ¡vamos!",
      contenu: [
        "Compter les élèves, les jours, les objets dans la classe",
        "Jouer au loto des nombres pour s'entraîner à l'oral",
        "Épeler son numéro de téléphone chiffre par chiffre",
        "Réviser souvent : les nombres s'oublient vite sans pratique !",
      ],
      voixOff:
        "Le meilleur moyen de retenir les nombres, c'est de les utiliser souvent : compte les élèves de ta classe, les jours de la semaine, ou les objets sur ton bureau. Tu peux aussi t'entraîner à donner ton numéro de téléphone chiffre par chiffre, comme le font les Espagnols. Révise régulièrement, car les nombres s'oublient vite si on ne les pratique pas !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Uno, dos, tres… tener + años",
      contenu: [
        "0-10 : cero à diez — 11-15 : once à quince (formes irrégulières)",
        "16-19 : dieci- + unité, en un mot — 20 : veinte",
        "21-29 : veinti- + unité (veintiuno) — dès 30 : dizaine + y + unité",
        "Pour l'âge : TENER + nombre + años, jamais ser !",
      ],
      voixOff:
        "Résumons. De zéro à quinze, les nombres ont des formes à apprendre par cœur. De seize à dix-neuf, on colle dieci- devant l'unité. Vingt se dit veinte, et de vingt-et-un à vingt-neuf, on colle veinti- devant l'unité. À partir de trente, les dizaines et les unités se séparent avec y : treinta y uno. Et surtout, retiens que pour donner son âge, on utilise toujours tener suivi du nombre et de años, jamais le verbe ser !",
    },
  ],
  fiche: {
    intro:
      "Les nombres espagnols suivent une logique régulière à partir de seize, avec des irrégularités entre onze et quinze. Le verbe tener sert systématiquement à exprimer l'âge.",
    sections: [
      {
        titre: "De 0 à 20",
        points: [
          "0 à 10 : cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez",
          "11 à 15 : once, doce, trece, catorce, quince (formes irrégulières)",
          "16 à 20 : dieciséis, diecisiete, dieciocho, diecinueve, veinte",
        ],
      },
      {
        titre: "De 20 à 100",
        points: [
          "Dizaines : veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien",
          "21-29 : veinti- + unité en un mot (veintidós)",
          "30 et plus : dizaine + y + unité, en mots séparés (treinta y dos)",
        ],
      },
      {
        titre: "L'âge avec tener",
        points: [
          "¿Cuántos años tienes? : quel âge as-tu ?",
          "Tengo … años : j'ai … ans (jamais soy … años)",
          "Mi hermano tiene 8 años : structure identique pour une autre personne",
        ],
      },
      {
        titre: "Prix, dates et quantités",
        points: [
          "¿Cuánto cuesta? / Cuesta … euros — ¿Cuánto es? / Son … euros",
          "El + nombre + de + mois : el quince de mayo",
          "Hay + nombre + nom : hay veinte alumnos",
        ],
      },
    ],
    audio:
      "Fiche de révision : les nombres et l'âge en espagnol. De zéro à dix : cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. De onze à quinze, les formes sont irrégulières : once, doce, trece, catorce, quince. De seize à dix-neuf, on ajoute dieci devant l'unité, en un seul mot. Vingt se dit veinte. De vingt-et-un à vingt-neuf, on colle veinti devant l'unité. À partir de trente, on sépare la dizaine et l'unité avec y, comme treinta y dos. Pour l'âge, on utilise toujours le verbe tener, jamais ser : tengo trece años. Pour un prix, on demande cuánto cuesta et on répond cuesta suivi du prix. Pour une date, on dit el suivi du nombre puis de et le mois.",
  },
  memoCards: [
    { recto: "cero, uno, dos, tres, cuatro", verso: "0, 1, 2, 3, 4" },
    { recto: "cinco, seis, siete, ocho, nueve, diez", verso: "5, 6, 7, 8, 9, 10" },
    { recto: "once, doce, trece, catorce, quince", verso: "11, 12, 13, 14, 15 (formes irrégulières)" },
    { recto: "dieciséis…veinte", verso: "16 à 20 : dieci- + unité, puis veinte (20)" },
    { recto: "veintiuno, veintidós…", verso: "21, 22… : veinti- + unité, en un seul mot" },
    { recto: "treinta y uno, cuarenta y dos…", verso: "31, 42… : dizaine + y + unité, séparés" },
    { recto: "¿Cuántos años tienes?", verso: "Quel âge as-tu ? Réponse : Tengo … años (verbe tener, jamais ser)." },
    { recto: "¿Cuánto cuesta?", verso: "Combien ça coûte ? Réponse : Cuesta … euros." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « sept » en espagnol ?",
      choix: ["siete", "seis", "ocho", "nueve"],
      bonneReponse: 0,
      explication: "Siete signifie sept.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel nombre correspond à « quince » ?",
      choix: ["14", "15", "16", "50"],
      bonneReponse: 1,
      explication: "Quince signifie quinze.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris en chiffres : dieciocho, veinte, treinta.",
      reponse: "18, 20, 30.",
      explication: "Dieciocho = 18, veinte = 20, treinta = 30.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel verbe utilise-t-on pour donner son âge en espagnol ?",
      choix: ["ser", "estar", "tener", "hay"],
      bonneReponse: 2,
      explication: "On utilise toujours tener pour l'âge : tengo 13 años.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment écrit-on 32 en espagnol ?",
      choix: ["treintaydos", "treinta y dos", "treintidós", "treinta dos"],
      bonneReponse: 1,
      explication: "À partir de 30, on sépare la dizaine et l'unité avec y : treinta y dos.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ma mère a 42 ans. »",
      reponse: "Mi madre tiene cuarenta y dos años.",
      explication: "42 = cuarenta y dos, avec tener pour l'âge.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris en lettres le nombre 26, puis utilise-le dans une phrase avec « hay ».",
      reponse: "Veintiséis. Hay veintiséis alumnos en la clase.",
      explication: "21 à 29 se collent en un mot : veintiséis.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« ¿Cuánto cuesta?» sert à demander :",
      choix: ["L'âge de quelqu'un", "Le prix d'un objet", "L'heure", "La date"],
      bonneReponse: 1,
      explication: "¿Cuánto cuesta? sert à demander le prix d'un objet.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence de construction entre les nombres 21-29 et les nombres à partir de 31, avec un exemple pour chaque.",
      reponse: "De 21 à 29, on colle veinti- + l'unité en un seul mot (veintitrés = 23). À partir de 31, on sépare la dizaine et l'unité avec y (treinta y tres = 33).",
      explication: "C'est une règle importante à ne pas confondre à l'écrit.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi dit-on « tengo trece años » et non « soy trece años » ?",
      choix: [
        "Les deux sont corrects",
        "En espagnol, l'âge s'exprime avec tener, pas avec ser",
        "Soy s'utilise seulement pour les adultes",
        "Trece est un adjectif qui nécessite ser"
      ],
      bonneReponse: 1,
      explication: "L'âge se construit toujours avec tener + nombre + años en espagnol.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris un court dialogue (4 répliques) où deux personnes se demandent leur âge et donnent un prix d'objet.",
      reponse:
        "— ¿Cuántos años tienes?\n— Tengo catorce años. ¿Y tú?\n— Tengo trece años. ¿Cuánto cuesta este libro?\n— Cuesta doce euros.",
      explication: "Le dialogue combine les structures de l'âge et du prix.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Donne la date du 3 octobre en espagnol, puis explique la construction utilisée.",
      reponse: "El tres de octubre. On utilise « el » + le nombre + « de » + le mois.",
      explication: "Cette construction est fixe pour toutes les dates en espagnol.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « cent » en espagnol ?",
      choix: ["diez", "cien", "mil", "noventa"],
      bonneReponse: 1,
      explication: "Cien signifie cent.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Tengo doce años » signifie :",
      choix: ["Je suis en douzième", "J'ai douze ans", "Il est douze heures", "J'ai douze frères"],
      bonneReponse: 1,
      explication: "Tengo … años sert à donner son âge.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris en lettres : 15, 21, 45.",
      reponse: "Quince, veintiuno, cuarenta y cinco.",
      explication: "15 est irrégulier, 21 se colle, 45 se sépare avec y.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Combien ça coûte, s'il te plaît ? — Ça coûte vingt euros. »",
      reponse: "¿Cuánto cuesta, por favor? — Cuesta veinte euros.",
      explication: "Structure classique pour demander et donner un prix.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente l'âge de trois membres de ta famille en trois phrases complètes.",
      reponse: "Mi madre tiene cuarenta y tres años. Mi padre tiene cuarenta y cinco años. Mi hermano tiene ocho años.",
      explication: "Chaque phrase utilise tener + nombre + años.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les nombres et l'âge",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « seize » en espagnol ?",
          choix: ["dieciséis", "diecisiete", "veinte", "quince"],
          bonneReponse: 0,
          explication: "Dieciséis signifie seize.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment demande-t-on l'âge de quelqu'un ?",
          choix: ["¿Cómo te llamas?", "¿Cuántos años tienes?", "¿De dónde eres?", "¿Qué tal?"],
          bonneReponse: 1,
          explication: "¿Cuántos años tienes? est la formule pour demander l'âge.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Il y a vingt-cinq élèves dans ma classe. »",
          reponse: "Hay veinticinco alumnos en mi clase.",
          explication: "25 = veinticinco, un seul mot puisqu'il est entre 21 et 29.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris en lettres le nombre 58, et donne un exemple de phrase avec ce nombre.",
          reponse: "Cincuenta y ocho. Mi abuela tiene cincuenta y ocho años.",
          explication: "58 se sépare : cincuenta y ocho.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court dialogue dans une boutique espagnole : demande le prix de deux objets différents et donne les réponses.",
          reponse:
            "— ¿Cuánto cuesta esta camiseta?\n— Cuesta quince euros.\n— ¿Y este libro?\n— Cuesta ocho euros.",
          explication: "Le dialogue utilise ¿cuánto cuesta? et cuesta + prix pour deux objets.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle règle s'applique aux nombres composés à partir de 31 ?",
          choix: [
            "On les colle toujours en un mot",
            "On sépare la dizaine et l'unité avec y",
            "On utilise un tiret",
            "Il n'y a pas de règle fixe"
          ],
          bonneReponse: 1,
          explication: "À partir de 31, dizaine et unité sont séparées par y : treinta y uno.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les nombres et l'âge",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « quatre-vingts » en espagnol ?",
          choix: ["setenta", "ochenta", "noventa", "cien"],
          bonneReponse: 1,
          explication: "Ochenta signifie quatre-vingts.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Cuesta diez euros » signifie :",
          choix: ["Ça pèse dix kilos", "Ça coûte dix euros", "J'ai dix euros", "Il est dix heures"],
          bonneReponse: 1,
          explication: "Cuesta + prix indique le coût d'un objet.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Mon père a cinquante ans et ma mère a quarante-sept ans. »",
          reponse: "Mi padre tiene cincuenta años y mi madre tiene cuarenta y siete años.",
          explication: "Deux structures tener + nombre + años, coordonnées par y.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne la date du 1er janvier en espagnol.",
          reponse: "El uno de enero (ou el primero de enero).",
          explication: "Pour le premier jour du mois, on utilise souvent uno ou primero.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi « uno » devient « un » dans certains contextes, avec un exemple de nombre composé.",
          reponse: "Uno perd le -o devant un nom masculin singulier : un chico (un garçon). Dans un nombre composé comme veintiún años, veintiuno devient aussi veintiún devant años (masculin).",
          explication: "C'est une apocope, une réduction de la forme devant un nom masculin.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Tengo veintiún años », pourquoi « veintiuno » devient-il « veintiún » ?",
          choix: [
            "Parce que años est féminin",
            "Parce qu'il précède un nom masculin (años) et perd son -o final",
            "C'est une erreur, il faudrait dire veintiuno años",
            "Parce que c'est un nombre pair"
          ],
          bonneReponse: 1,
          explication: "Comme uno, veintiuno s'apocope en veintiún devant un nom masculin singulier.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "0-15 : formes à apprendre par cœur (cero à quince), avec des irrégularités entre 11 et 15.",
    "16-19 : dieci- + unité en un mot — 21-29 : veinti- + unité en un mot.",
    "30 et plus : dizaine + y + unité, séparés (treinta y dos, cuarenta y cinco).",
    "L'âge se dit toujours avec TENER + nombre + años, jamais avec ser.",
    "¿Cuánto cuesta? / Cuesta … euros pour les prix — El + nombre + de + mois pour les dates.",
    "Uno s'apocope en un devant un nom masculin singulier (un chico, veintiún años).",
  ],
},
{
  slug: "saludos-presentarse",
  titre: "Saludos : se présenter",
  matiere: "espagnol",
  niveau: "5eme",
  langueVoix: "es-ES",
  description:
    "Apprendre à saluer, à se présenter en espagnol (nom, âge, origine) et à poser les premières questions de politesse pour construire un mini-dialogue.",
  objectifs: [
    "Saluer et prendre congé : hola, buenos días, adiós, hasta luego",
    "Se présenter avec « me llamo… » et demander le prénom de l'autre",
    "Dire d'où l'on vient : soy de Francia, soy francés/francesa",
    "Demander et donner des nouvelles : ¿qué tal?",
    "Construire un petit dialogue de présentation à l'oral",
  ],
  slides: [
    {
      titre: "¡Hola! Les salutations",
      illustration: "👋",
      visuel: "¡Hola! / Buenos días",
      contenu: [
        "¡Hola! : salut, bonjour (toujours possible, formel ou informel)",
        "Buenos días : bonjour (le matin)",
        "Buenas tardes : bonjour/bonsoir (l'après-midi)",
        "Buenas noches : bonsoir/bonne nuit",
      ],
      voixOff:
        "En espagnol, ¡Hola ! est la salutation la plus simple : elle marche à tout moment de la journée, avec un ami comme avec un adulte. On utilise aussi buenos días le matin, buenas tardes l'après-midi, et buenas noches le soir ou pour se coucher. N'oublie pas le point d'exclamation inversé au début : ¡Hola !",
    },
    {
      titre: "¿Cómo te llamas?",
      illustration: "🙋",
      visuel: "Me llamo…",
      contenu: [
        "Me llamo Léa : je m'appelle Léa",
        "¿Cómo te llamas? : comment t'appelles-tu ?",
        "¿Y tú? : et toi ?",
        "Mucho gusto / Encantado(a) : enchanté(e)",
      ],
      voixOff:
        "Pour se présenter, on utilise l'expression me llamo suivie de son prénom : me llamo Léa, je m'appelle Léa. Pour demander le prénom de quelqu'un, on dit ¿cómo te llamas ? On répond souvent par mucho gusto ou encantado si on est un garçon, encantada si on est une fille. C'est la formule idéale pour faire connaissance !",
    },
    {
      titre: "¿De dónde eres?",
      illustration: "🌍",
      visuel: "Soy de Francia",
      contenu: [
        "Soy de Francia : je viens de France",
        "¿De dónde eres? : d'où viens-tu ?",
        "Soy francesa : je suis française (fille)",
        "Soy francés : je suis français (garçon)",
      ],
      voixOff:
        "¿De dónde eres ?, littéralement d'où es-tu, sert à demander l'origine. On répond par soy de Francia, je viens de France. Pour dire sa nationalité, attention : une fille dit soy francesa, un garçon dit soy francés, sans accent au masculin mais avec un accent qui disparaît au féminin. Comme en français, le mot change selon le genre !",
    },
    {
      titre: "¿Qué tal?",
      illustration: "😊",
      visuel: "¿Qué tal? / ¿Cómo estás?",
      contenu: [
        "¿Qué tal? / ¿Cómo estás? : comment ça va ?",
        "Muy bien, gracias : très bien, merci",
        "Regular / Así así : comme ci comme ça",
        "¿Y tú? : et toi ?",
      ],
      voixOff:
        "Pour demander comment ça va, on dit ¿qué tal ? ou ¿cómo estás ? On répond muy bien, gracias, très bien merci, ou regular, comme ci comme ça, si la journée est plus difficile. N'oublie pas de renvoyer la question avec ¿y tú ?, et toi ?",
    },
    {
      titre: "L'âge et le collège",
      illustration: "🎂",
      visuel: "Tengo 12 años",
      contenu: [
        "Tengo 12 años : j'ai 12 ans",
        "¿Cuántos años tienes? : quel âge as-tu ?",
        "Estoy en quinto : je suis en 5ème",
        "Vivo en Francia : j'habite en France",
      ],
      voixOff:
        "Pour donner son âge en espagnol, on utilise le verbe tener : tengo doce años, j'ai douze ans, littéralement j'ai douze années. La question est ¿cuántos años tienes ?, quel âge as-tu ? On peut ajouter estoy en quinto, je suis en cinquième, et vivo en Francia, j'habite en France : des phrases très utiles pour se présenter complètement.",
    },
    {
      titre: "Dire au revoir",
      illustration: "👋",
      visuel: "Adiós / Hasta luego",
      contenu: [
        "Adiós : au revoir",
        "Hasta luego : à bientôt",
        "Hasta mañana : à demain",
        "¡Chao! : salut, ciao (très informel)",
      ],
      voixOff:
        "Pour dire au revoir, adiós est la formule la plus générale. Hasta luego signifie à bientôt, et hasta mañana à demain, si tu sais que tu reverras la personne le lendemain. Entre copains, on peut aussi dire ¡chao !, emprunté à l'italien. Choisis la formule adaptée au moment de la journée !",
    },
    {
      titre: "Un mini-dialogue complet",
      illustration: "💬",
      visuel: "— ¡Hola! ¿Qué tal?",
      contenu: [
        "— ¡Hola! Me llamo Léa. ¿Y tú?",
        "— Me llamo Ana. ¡Mucho gusto!",
        "— ¿De dónde eres? — Soy de Francia, tengo 12 años.",
        "— ¡Adiós! — ¡Hasta luego!",
      ],
      voixOff:
        "Assemblons toutes ces expressions dans un dialogue. ¡Hola ! Me llamo Léa, ¿y tú ? : salut, je m'appelle Léa, et toi ? Me llamo Ana, mucho gusto : je m'appelle Ana, enchantée. ¿De dónde eres ? Soy de Francia, tengo doce años : d'où viens-tu, je viens de France, j'ai douze ans. ¡Adiós ! ¡Hasta luego ! : au revoir, à bientôt. Tu as maintenant un dialogue complet à réciter !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Saluer, se nommer, dire d'où l'on vient",
      contenu: [
        "¡Hola! marche partout — buenos días/tardes/noches selon l'heure",
        "Me llamo… : je m'appelle… — ¿Cómo te llamas? : comment t'appelles-tu ?",
        "Soy de Francia : je viens de France — attention à francés/francesa",
        "Tengo 12 años, estoy en quinto : deux phrases utiles pour te présenter",
      ],
      voixOff:
        "Résumons. ¡Hola ! fonctionne à tout moment, et tu peux préciser avec buenos días, buenas tardes ou buenas noches selon l'heure. Pour te présenter : me llamo suivi de ton prénom, et pour demander le prénom de l'autre : ¿cómo te llamas ? Pour ta nationalité : soy de Francia, en faisant attention à la différence entre francés et francesa. Et surtout, n'oublie pas tengo doce años, estoy en quinto : deux phrases parfaites pour te présenter complètement !",
    },
  ],
  fiche: {
    intro:
      "Pour se présenter en espagnol, on utilise quelques formules fixes : saluer, donner son prénom avec « me llamo », dire sa nationalité et son âge, puis prendre congé. On adapte la salutation à l'heure de la journée.",
    sections: [
      {
        titre: "Saluer et prendre congé",
        points: [
          "¡Hola! : bonjour/salut, à toute heure",
          "Buenos días / Buenas tardes / Buenas noches : selon le moment de la journée",
          "Adiós / Hasta luego / Hasta mañana : au revoir, à bientôt, à demain",
        ],
      },
      {
        titre: "Se présenter",
        points: [
          "Me llamo + prénom : je m'appelle…",
          "¿Cómo te llamas? : comment t'appelles-tu ? — Mucho gusto : enchanté(e)",
          "Soy de Francia : je viens de France — ¿De dónde eres? : d'où viens-tu ?",
        ],
      },
      {
        titre: "Nationalité, âge et nouvelles",
        points: [
          "Soy francés (garçon) / Soy francesa (fille) : je suis français(e)",
          "Tengo … años : j'ai … ans — ¿Cuántos años tienes? : quel âge as-tu ?",
          "¿Qué tal? : comment ça va ? — Muy bien, gracias : très bien, merci",
        ],
      },
      {
        titre: "Vocabulaire utile pour se présenter",
        points: [
          "Estoy en quinto : je suis en 5ème — Vivo en Francia : j'habite en France",
          "On peut combiner les phrases : « Me llamo Léa, tengo 12 años » pour se présenter",
        ],
      },
    ],
    audio:
      "Fiche de révision : se présenter en espagnol. Pour saluer, ¡hola ! marche à toute heure, mais on peut préciser avec buenos días, buenas tardes ou buenas noches. Pour se présenter, on dit me llamo suivi de son prénom, et on demande ¿cómo te llamas ? pour connaître celui de l'autre. On répond souvent mucho gusto, enchanté. Pour dire d'où l'on vient, ¿de dónde eres ?, on répond soy de Francia. Attention à la nationalité : un garçon dit soy francés, une fille dit soy francesa. Pour donner son âge, on utilise le verbe tener : tengo suivi du nombre puis años. ¿Qué tal ? permet de demander comment ça va, et on répond muy bien, gracias. Enfin, pour se présenter complètement, on peut ajouter estoy en quinto, je suis en cinquième. Pour prendre congé, adiós ou hasta luego.",
  },
  memoCards: [
    { recto: "¡Hola!", verso: "Bonjour / Salut, utilisable à toute heure de la journée." },
    { recto: "Buenos días / Buenas tardes / Buenas noches", verso: "Bonjour (matin) / Bonjour-bonsoir (après-midi) / Bonsoir (soir)." },
    { recto: "Me llamo… ", verso: "Je m'appelle… Ex : Me llamo Léa." },
    { recto: "¿Cómo te llamas?", verso: "Comment t'appelles-tu ?" },
    { recto: "Soy de Francia", verso: "Je viens de France." },
    { recto: "Soy francés / Soy francesa", verso: "Je suis français (garçon) / française (fille)." },
    { recto: "¿Qué tal? / ¿Cómo estás?", verso: "Comment ça va ? Réponse : Muy bien, gracias (très bien, merci)." },
    { recto: "Adiós / Hasta luego", verso: "Au revoir / À bientôt." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « bonjour » de façon générale en espagnol, à toute heure ?",
      choix: ["Adiós", "¡Hola!", "Gracias", "Buenas noches"],
      bonneReponse: 1,
      explication: "¡Hola! est la salutation universelle, utilisable à tout moment de la journée.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie « me llamo » ?",
      choix: ["Comment ça va ?", "Je m'appelle", "D'où viens-tu ?", "Au revoir"],
      bonneReponse: 1,
      explication: "Me llamo + prénom signifie « je m'appelle ».",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « Salut ! Comment ça va ? »",
      reponse: "¡Hola! ¿Qué tal?",
      explication: "¡Hola! (salut) + ¿Qué tal? (comment ça va).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle formule dit-on le matin ?",
      choix: ["Buenas noches", "Buenos días", "Hasta luego", "Mucho gusto"],
      bonneReponse: 1,
      explication: "Buenos días s'utilise le matin ; buenas tardes l'après-midi, buenas noches le soir.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une fille française dit :",
      choix: ["Soy francés", "Soy francesa", "Soy de Francés", "Me llamo Francia"],
      bonneReponse: 1,
      explication: "Une fille dit soy francesa ; un garçon dirait soy francés.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Je m'appelle Léa, je viens de France. »",
      reponse: "Me llamo Léa, soy de Francia.",
      explication: "On enchaîne me llamo + prénom, puis soy de Francia.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment demande-t-on l'âge de quelqu'un et comment répond-on « j'ai 12 ans » ?",
      reponse: "¿Cuántos años tienes? — Tengo 12 años.",
      explication: "¿Cuántos años tienes? pour demander, tengo … años pour répondre, avec le verbe tener.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« ¿De dónde eres? » signifie :",
      choix: ["Comment t'appelles-tu ?", "D'où viens-tu ?", "Quel âge as-tu ?", "Comment vas-tu ?"],
      bonneReponse: 1,
      explication: "¿De dónde eres? interroge sur l'origine ; on répond soy de + pays.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un mini-dialogue de présentation (4 répliques minimum) entre deux élèves qui se rencontrent au collège.",
      reponse:
        "— ¡Hola! Me llamo Léa. ¿Y tú?\n— Me llamo Ana. ¡Mucho gusto!\n— ¿De dónde eres?\n— Soy de Francia, tengo 12 años.",
      explication: "Le dialogue enchaîne salutation, présentation, origine et âge.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Estoy en quinto », le verbe « estoy » vient de l'infinitif :",
      choix: ["ser", "estar", "tener", "llamar"],
      bonneReponse: 1,
      explication: "Estar est le verbe utilisé pour la classe/niveau scolaire : estoy en quinto = je suis en 5ème.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre « hasta luego » et « hasta mañana », et donne un contexte d'usage pour chacun.",
      reponse:
        "Hasta luego = à bientôt en général ; hasta mañana = à demain, quand on sait qu'on reverra la personne le lendemain (ex. après les cours).",
      explication: "Hasta mañana est plus précis : il annonce une prochaine rencontre datée.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un correspondant espagnol te demande « ¿Qué tal? ». Réponds en deux phrases variées (une positive, une plus mitigée).",
      reponse: "Muy bien, gracias, ¿y tú? / Regular, pero estoy contento(a).",
      explication: "Muy bien (très bien) et regular (comme ci comme ça) sont les deux réponses les plus courantes.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "« ¡Hola! » peut s'utiliser :",
      choix: ["Seulement le matin", "À toute heure de la journée", "Seulement pour dire au revoir", "Seulement entre adultes"],
      bonneReponse: 1,
      explication: "¡Hola! fonctionne à n'importe quel moment de la journée.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment répond-on à « ¿Cómo te llamas? » ?",
      choix: ["Me llamo + prénom", "Soy de Francia", "Muy bien, gracias", "Adiós"],
      bonneReponse: 0,
      explication: "On répond en donnant son prénom avec me llamo.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « J'ai 12 ans et je suis en 5ème. »",
      reponse: "Tengo 12 años, estoy en quinto.",
      explication: "Tengo … años pour l'âge, estoy en … pour la classe.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre soy francés et soy francesa ?",
      reponse: "Soy francés = je suis français (garçon) ; soy francesa = je suis française (fille).",
      explication: "Comme en français, l'adjectif de nationalité change selon le genre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris un dialogue court (salutation, prénom, origine, au revoir) entre deux nouveaux élèves.",
      reponse: "— ¡Hola! Me llamo Léa.\n— ¡Hola, Léa! ¿De dónde eres?\n— Soy de Francia.\n— ¡Chao!",
      explication: "Le dialogue combine ¡hola!, me llamo, ¿de dónde eres? et une formule d'au revoir.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Se présenter",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle formule dit-on l'après-midi ?",
          choix: ["Buenos días", "Buenas noches", "Buenas tardes", "Hasta luego"],
          bonneReponse: 2,
          explication: "Buenas tardes s'utilise l'après-midi, entre le déjeuner et le soir.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Mucho gusto » signifie :",
          choix: ["Beaucoup de goût", "Enchanté(e)", "Très bien", "À bientôt"],
          bonneReponse: 1,
          explication: "Mucho gusto se dit après avoir fait connaissance de quelqu'un.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Je m'appelle Ana, j'ai 13 ans, je viens de France. »",
          reponse: "Me llamo Ana, tengo 13 años, soy de Francia.",
          explication: "On enchaîne les trois structures : me llamo, tengo … años, soy de Francia.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Complète et traduis : « ¿De … eres? » (question sur l'origine).",
          reponse: "¿De dónde eres? : d'où viens-tu ?",
          explication: "La question sur l'origine se construit avec de dónde.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un dialogue complet de présentation entre un élève et son nouveau professeur d'espagnol (au moins 6 répliques).",
          reponse:
            "— ¡Buenos días! Me llamo Léa.\n— ¡Buenos días, Léa! Mucho gusto. ¿De dónde eres?\n— Soy de Francia.\n— ¿Cuántos años tienes?\n— Tengo 12 años, estoy en quinto.\n— ¡Adiós!\n— ¡Hasta mañana!",
          explication: "Le dialogue combine salutation, présentation, origine, âge et prise de congé.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « soy francesa » et non « soy francés » pour une fille ?",
          choix: [
            "C'est une erreur, les deux formes sont identiques",
            "Les adjectifs de nationalité s'accordent en genre en espagnol",
            "Francesa signifie « élève »",
            "Francés est réservé au pluriel",
          ],
          bonneReponse: 1,
          explication: "Comme en français, le nom de nationalité change de forme au féminin en espagnol.",
        },
      ],
    },
    {
      titre: "Examen 2 — Se présenter",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Hasta mañana » signifie :",
          choix: ["Au revoir", "À demain", "Bonsoir", "Merci"],
          bonneReponse: 1,
          explication: "Hasta mañana annonce qu'on se reverra le lendemain.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pour demander « comment ça va ? » on dit :",
          choix: ["¿Cómo te llamas?", "¿Qué tal?", "¿De dónde eres?", "¿Cuántos años tienes?"],
          bonneReponse: 1,
          explication: "¿Qué tal? est la formule pour demander des nouvelles.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Bonjour, comment vas-tu ? »",
          reponse: "Hola, ¿cómo estás?",
          explication: "¿Cómo estás? est une variante de ¿qué tal? pour demander comment ça va.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un élève espagnol te demande « ¿Vives en Francia? ». Réponds que oui et précise que tu es en 5ème.",
          reponse: "Sí, vivo en Francia. Estoy en quinto.",
          explication: "Sí confirme la réponse ; on enchaîne avec estoy en + niveau.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare trois salutations selon le moment de la journée (donne au moins 3 exemples).",
          reponse:
            "Le matin : buenos días. L'après-midi : buenas tardes. Le soir : buenas noches. À toute heure : ¡hola!",
          explication: "La salutation dépend de l'heure, sauf ¡hola! qui fonctionne toujours.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Tengo 12 años », de quel verbe vient « tengo » ?",
          choix: ["ser", "estar", "tener", "llamar"],
          bonneReponse: 2,
          explication: "Tener (avoir) sert à donner son âge en espagnol : tengo … años.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "¡Hola! fonctionne à toute heure ; sinon buenos días, buenas tardes, buenas noches selon le moment.",
    "Se présenter : me llamo + prénom ; demander : ¿cómo te llamas?",
    "Nationalité : soy francés (garçon) / soy francesa (fille) — soy de Francia : je viens de France.",
    "Âge et études : tengo … años (verbe tener) ; estoy en quinto pour se présenter complètement.",
    "¿Qué tal? se répond par muy bien, gracias ou regular, puis on relance avec ¿y tú?",
    "N'oublie jamais le point d'exclamation/interrogation inversé au début : ¡Hola!, ¿Qué tal?",
  ],
}
];

export default chapitres;
