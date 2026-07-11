import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
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
};

export default chapitre;
