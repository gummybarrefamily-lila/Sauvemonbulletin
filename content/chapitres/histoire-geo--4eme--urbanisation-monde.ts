import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "urbanisation-monde",
  titre: "L'urbanisation du monde",
  matiere: "histoire-geo",
  niveau: "4eme",
  description:
    "Comprendre comment et pourquoi la population mondiale devient majoritairement urbaine, découvrir les mégapoles et les métropoles mondiales, et analyser les inégalités et les défis liés à la croissance des villes.",
  objectifs: [
    "Définir l'urbanisation et connaître son ampleur à l'échelle mondiale",
    "Localiser les grandes mégapoles et métropoles mondiales",
    "Comprendre les inégalités socio-spatiales au sein des villes (bidonvilles, quartiers riches)",
    "Identifier les défis de l'urbanisation : étalement urbain, transports, environnement",
    "Mémoriser les repères : plus de 50 % de citadins depuis 2007, mégapoles de plus de 10 millions d'habitants",
  ],
  slides: [
    {
      titre: "Qu'est-ce que l'urbanisation ?",
      illustration: "🏙️",
      visuel: "+50 % de citadins",
      contenu: [
        "L'urbanisation est l'augmentation de la part de la population qui vit dans les villes",
        "Depuis 2007, plus de la moitié de l'humanité vit en ville",
        "Aujourd'hui, environ 57 % de la population mondiale est urbaine",
        "Ce chiffre pourrait atteindre près de 70 % d'ici 2050",
      ],
      voixOff:
        "L'urbanisation désigne l'augmentation de la part de la population qui vit dans les villes plutôt qu'à la campagne. Depuis 2007, pour la première fois dans l'histoire de l'humanité, plus de la moitié des habitants de la planète vivent en ville. Aujourd'hui, environ cinquante-sept pour cent de la population mondiale est urbaine, et ce chiffre pourrait approcher soixante-dix pour cent d'ici 2050.",
    },
    {
      titre: "Une urbanisation inégale selon les régions du monde",
      illustration: "🌐",
      visuel: "Nord / Sud",
      contenu: [
        "Les pays développés (Europe, Amérique du Nord) sont déjà très majoritairement urbains",
        "L'urbanisation progresse très vite en Asie et en Afrique, continents les moins urbanisés",
        "L'Afrique et l'Asie concentreront la majorité de la croissance urbaine mondiale d'ici 2050",
        "Cette urbanisation rapide s'accompagne souvent d'un manque d'infrastructures",
      ],
      voixOff:
        "L'urbanisation est très inégale selon les régions du monde. En Europe et en Amérique du Nord, la population est déjà très majoritairement urbaine, avec une croissance des villes qui ralentit. En revanche, l'urbanisation progresse extrêmement vite en Afrique et en Asie, continents encore moins urbanisés mais qui concentreront l'essentiel de la croissance urbaine mondiale d'ici 2050. Cette urbanisation rapide dépasse souvent la capacité des villes à construire des infrastructures suffisantes.",
    },
    {
      titre: "Mégapoles et métropoles mondiales",
      illustration: "🌆",
      visuel: "Tokyo, Shanghai, New York",
      contenu: [
        "Une mégapole est une agglomération urbaine de plus de 10 millions d'habitants",
        "Le monde compte aujourd'hui plus de 30 mégapoles, surtout en Asie",
        "Tokyo, Delhi, Shanghai ou São Paulo sont parmi les plus grandes agglomérations mondiales",
        "Les métropoles mondiales (New York, Londres, Paris, Tokyo) concentrent pouvoir, finance et innovation",
      ],
      voixOff:
        "On appelle mégapole une agglomération urbaine qui dépasse dix millions d'habitants. Le monde en compte aujourd'hui plus d'une trentaine, principalement en Asie : Tokyo, Delhi, Shanghai ou encore São Paulo figurent parmi les plus peuplées. Certaines de ces très grandes villes sont aussi des métropoles mondiales, comme New York, Londres, Paris ou Tokyo, qui concentrent des fonctions de commandement : pouvoir politique, finance, innovation et culture.",
    },
    {
      titre: "Pourquoi les villes attirent-elles autant ?",
      illustration: "🧲",
      visuel: "Exode rural",
      contenu: [
        "Les villes concentrent les emplois, notamment dans l'industrie et les services",
        "Elles offrent un meilleur accès à l'éducation, à la santé et aux loisirs",
        "L'exode rural pousse de nombreux habitants des campagnes vers les villes",
        "Dans les pays du Sud, cette attraction dépasse souvent les capacités d'accueil des villes",
      ],
      voixOff:
        "Les villes attirent car elles concentrent les emplois, notamment dans l'industrie et les services, ainsi qu'un meilleur accès à l'éducation, à la santé et aux loisirs. Cette attractivité provoque un exode rural : de nombreux habitants des campagnes viennent s'installer en ville dans l'espoir d'une vie meilleure. Dans les pays du Sud, cette arrivée massive dépasse souvent les capacités d'accueil des villes, qui manquent de logements et d'infrastructures.",
    },
    {
      titre: "Des inégalités fortes au sein des villes",
      illustration: "🏚️",
      visuel: "Bidonvilles",
      contenu: [
        "Dans de nombreuses villes du Sud, une partie importante de la population vit dans des bidonvilles",
        "Ces quartiers informels manquent souvent d'eau potable, d'électricité et d'assainissement",
        "Plus d'un milliard de personnes dans le monde vivent aujourd'hui dans des bidonvilles ou des quartiers précaires",
        "À l'inverse, des quartiers résidentiels fermés et sécurisés accueillent les populations les plus aisées",
      ],
      voixOff:
        "Les villes concentrent aussi de fortes inégalités. Dans de nombreuses villes des pays du Sud, une partie importante de la population vit dans des bidonvilles, des quartiers informels souvent privés d'eau potable, d'électricité et d'assainissement. On estime que plus d'un milliard de personnes dans le monde vivent dans de tels quartiers précaires. À l'inverse, des quartiers résidentiels fermés et sécurisés accueillent les populations les plus aisées, à quelques kilomètres seulement.",
    },
    {
      titre: "L'étalement urbain et ses conséquences",
      illustration: "🚗",
      visuel: "Étalement urbain",
      contenu: [
        "Les villes s'étendent de plus en plus loin dans les campagnes environnantes : c'est l'étalement urbain",
        "Cet étalement se traduit par des zones pavillonnaires, des zones commerciales et industrielles",
        "Il augmente les distances domicile-travail et la dépendance à la voiture",
        "Il consomme des terres agricoles et des espaces naturels",
      ],
      voixOff:
        "De nombreuses villes s'étendent de plus en plus loin dans les campagnes environnantes : c'est l'étalement urbain. Il se traduit par le développement de zones pavillonnaires, commerciales et industrielles en périphérie des villes. Cet étalement allonge les distances entre le domicile et le travail et renforce la dépendance à la voiture individuelle. Il consomme aussi de nombreuses terres agricoles et des espaces naturels.",
    },
    {
      titre: "Vers des villes plus durables ?",
      illustration: "🌱",
      visuel: "Transports en commun, espaces verts",
      contenu: [
        "Face aux défis environnementaux, de nombreuses villes cherchent à devenir plus durables",
        "Développement des transports en commun et des pistes cyclables",
        "Création d'espaces verts et lutte contre la pollution de l'air",
        "Certaines villes expérimentent des « villes intelligentes » (smart cities)",
      ],
      voixOff:
        "Face aux défis environnementaux liés à leur croissance, de nombreuses villes cherchent aujourd'hui à devenir plus durables. Elles développent les transports en commun et les pistes cyclables pour réduire l'usage de la voiture, créent des espaces verts et cherchent à limiter la pollution de l'air. Certaines villes expérimentent également des technologies numériques pour mieux gérer l'énergie, les déchets ou la circulation : on parle de villes intelligentes.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Depuis 2007, plus de la moitié de l'humanité vit en ville",
        "L'urbanisation progresse surtout en Asie et en Afrique",
        "Les mégapoles (plus de 10 millions d'habitants) et les métropoles mondiales structurent l'espace mondial",
        "Les villes concentrent à la fois attractivité, inégalités et défis environnementaux",
      ],
      voixOff:
        "Résumons. Depuis 2007, plus de la moitié de l'humanité vit en ville, et ce chiffre continue d'augmenter, notamment en Asie et en Afrique. Les mégapoles, qui dépassent dix millions d'habitants, et les métropoles mondiales comme New York, Londres, Paris ou Tokyo structurent l'espace mondial. Mais les villes concentrent aussi de fortes inégalités, entre bidonvilles et quartiers aisés, ainsi que des défis environnementaux liés à l'étalement urbain. Tu connais maintenant les grands enjeux de l'urbanisation du monde.",
    },
  ],
  fiche: {
    intro:
      "L'urbanisation, c'est-à-dire l'augmentation de la part de la population vivant en ville, est l'une des transformations majeures du monde actuel. Depuis 2007, plus de la moitié de l'humanité est urbaine, avec de fortes inégalités et de nouveaux défis environnementaux.",
    sections: [
      {
        titre: "Une urbanisation mondiale et inégale",
        points: [
          "Depuis 2007, plus de 50 % de la population mondiale vit en ville (environ 57 % aujourd'hui)",
          "L'Europe et l'Amérique du Nord sont déjà très majoritairement urbaines",
          "L'Asie et l'Afrique connaissent la croissance urbaine la plus rapide",
          "D'ici 2050, environ 70 % de la population mondiale pourrait être urbaine",
        ],
      },
      {
        titre: "Mégapoles et métropoles mondiales",
        points: [
          "Une mégapole est une agglomération de plus de 10 millions d'habitants",
          "Le monde compte plus de 30 mégapoles, surtout en Asie (Tokyo, Delhi, Shanghai)",
          "Les métropoles mondiales (New York, Londres, Paris, Tokyo) concentrent pouvoir, finance et innovation",
          "L'exode rural alimente la croissance des villes, surtout dans les pays du Sud",
        ],
      },
      {
        titre: "Des villes marquées par de fortes inégalités",
        points: [
          "Plus d'un milliard de personnes vivent dans des bidonvilles ou des quartiers précaires",
          "Ces quartiers manquent souvent d'eau potable, d'électricité et d'assainissement",
          "Des quartiers résidentiels aisés et sécurisés côtoient ces zones de pauvreté",
          "Ces inégalités socio-spatiales sont particulièrement fortes dans les villes du Sud",
        ],
      },
      {
        titre: "L'étalement urbain et les villes durables",
        points: [
          "L'étalement urbain : extension des villes vers les campagnes environnantes",
          "Conséquences : dépendance à la voiture, consommation de terres agricoles",
          "Réponses : transports en commun, pistes cyclables, espaces verts",
          "Développement des « villes intelligentes » (smart cities) pour une gestion plus durable",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'urbanisation du monde. Depuis 2007, plus de la moitié de la population mondiale vit en ville, un seuil historique. Cette urbanisation est très inégale : l'Europe et l'Amérique du Nord sont déjà très majoritairement urbaines, tandis que l'Asie et l'Afrique connaissent aujourd'hui la croissance urbaine la plus rapide, portée par l'exode rural. Le monde compte plus de trente mégapoles, des agglomérations de plus de dix millions d'habitants, en majorité situées en Asie, comme Tokyo, Delhi ou Shanghai. Certaines très grandes villes, comme New York, Londres, Paris ou Tokyo, sont aussi des métropoles mondiales qui concentrent le pouvoir, la finance et l'innovation. Mais les villes concentrent également de fortes inégalités : plus d'un milliard de personnes vivent dans des bidonvilles, privés d'eau potable, d'électricité et d'assainissement, à proximité de quartiers résidentiels aisés. Enfin, l'étalement urbain pose des défis environnementaux importants, ce qui pousse de nombreuses villes à développer les transports en commun, les espaces verts et des solutions plus durables.",
  },
  memoCards: [
    { recto: "Depuis quand plus de la moitié de l'humanité vit-elle en ville ?", verso: "Depuis 2007." },
    { recto: "Qu'est-ce qu'une mégapole ?", verso: "Une agglomération urbaine de plus de 10 millions d'habitants." },
    { recto: "Combien de mégapoles le monde compte-t-il environ ?", verso: "Plus de 30, principalement en Asie." },
    { recto: "Qu'est-ce qu'une métropole mondiale ?", verso: "Une très grande ville qui concentre des fonctions de commandement : pouvoir, finance, innovation (ex. New York, Londres, Paris, Tokyo)." },
    { recto: "Sur quels continents l'urbanisation progresse-t-elle le plus vite aujourd'hui ?", verso: "En Asie et en Afrique." },
    { recto: "Qu'est-ce qu'un bidonville ?", verso: "Un quartier urbain informel et précaire, souvent privé d'eau potable, d'électricité et d'assainissement." },
    { recto: "Qu'est-ce que l'étalement urbain ?", verso: "L'extension des villes vers les campagnes environnantes, avec zones pavillonnaires, commerciales et industrielles." },
    { recto: "Qu'est-ce qu'une smart city (ville intelligente) ?", verso: "Une ville qui utilise des technologies numériques pour mieux gérer l'énergie, les déchets ou la circulation." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Depuis quelle année plus de la moitié de la population mondiale vit-elle en ville ?",
      choix: ["1950", "1990", "2007", "2020"],
      bonneReponse: 2,
      explication: "Depuis 2007, plus de 50 % de l'humanité vit en ville, un seuil historique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce qu'une mégapole ?",
      choix: [
        "Une ville de plus d'un million d'habitants",
        "Une agglomération de plus de 10 millions d'habitants",
        "La capitale d'un pays",
        "Un quartier pauvre d'une grande ville",
      ],
      bonneReponse: 1,
      explication: "Une mégapole est une très grande agglomération urbaine dépassant les dix millions d'habitants.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux continents où l'urbanisation progresse le plus rapidement aujourd'hui.",
      reponse: "L'Asie et l'Afrique.",
      explication: "Ces deux continents, encore moins urbanisés que l'Europe ou l'Amérique du Nord, connaissent la croissance urbaine la plus rapide.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce qu'un bidonville ?",
      choix: [
        "Un quartier d'affaires",
        "Un quartier informel et précaire manquant d'infrastructures",
        "Un quartier résidentiel sécurisé",
        "Une zone industrielle",
      ],
      bonneReponse: 1,
      explication: "Un bidonville est un quartier urbain informel, souvent privé d'eau potable, d'électricité et d'assainissement.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi les villes attirent autant de population.",
      reponse:
        "Les villes concentrent les emplois, notamment dans l'industrie et les services, ainsi qu'un meilleur accès à l'éducation, à la santé et aux loisirs. Cette attractivité provoque un exode rural, les habitants des campagnes espérant y trouver une vie meilleure.",
      explication: "L'attractivité économique et sociale des villes explique la poursuite de l'urbanisation mondiale.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est une caractéristique des métropoles mondiales comme New York, Londres ou Tokyo ?",
      choix: [
        "Elles n'ont aucune influence internationale",
        "Elles concentrent le pouvoir, la finance et l'innovation",
        "Elles sont exclusivement rurales",
        "Elles n'accueillent aucun bidonville",
      ],
      bonneReponse: 1,
      explication: "Les métropoles mondiales exercent des fonctions de commandement à l'échelle de la planète : politique, économique, financière, culturelle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que l'étalement urbain et quelles en sont les conséquences ?",
      reponse:
        "L'étalement urbain est l'extension des villes vers les campagnes environnantes, avec le développement de zones pavillonnaires, commerciales et industrielles. Il augmente les distances domicile-travail, renforce la dépendance à la voiture et consomme des terres agricoles et des espaces naturels.",
      explication: "L'étalement urbain est l'un des principaux défis environnementaux liés à la croissance des villes.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Combien de personnes vivent environ dans des bidonvilles ou des quartiers précaires dans le monde ?",
      choix: ["100 millions", "500 millions", "plus d'un milliard", "10 millions"],
      bonneReponse: 2,
      explication: "On estime que plus d'un milliard de personnes vivent aujourd'hui dans des bidonvilles ou des quartiers informels précaires.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que les grandes villes du monde sont marquées par de fortes inégalités socio-spatiales.",
      reponse:
        "Dans de nombreuses villes du Sud, une partie importante de la population vit dans des bidonvilles, des quartiers informels privés d'eau potable, d'électricité et d'assainissement. À proximité immédiate, des quartiers résidentiels fermés et sécurisés accueillent les populations les plus aisées, avec un accès très différent aux services urbains. Ces contrastes illustrent une ségrégation spatiale forte au sein d'une même ville.",
      explication: "Les inégalités socio-spatiales sont un enjeu majeur de l'étude géographique des villes.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel pourcentage de la population mondiale pourrait être urbain vers 2050 ?",
      choix: ["Environ 30 %", "Environ 50 %", "Environ 70 %", "Environ 90 %"],
      bonneReponse: 2,
      explication: "Les projections estiment qu'environ 70 % de la population mondiale pourrait vivre en ville d'ici 2050.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Quelles solutions les villes mettent-elles en place pour devenir plus durables ?",
      reponse:
        "Elles développent les transports en commun et les pistes cyclables pour réduire l'usage de la voiture, créent des espaces verts pour améliorer le cadre de vie et lutter contre la pollution, et certaines expérimentent des technologies numériques (villes intelligentes) pour mieux gérer l'énergie, les déchets ou la circulation.",
      explication: "Ces solutions visent à limiter l'impact environnemental de la croissance urbaine tout en améliorant la qualité de vie des habitants.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi l'urbanisation est un phénomène mondial mais très inégal.",
      reponse:
        "L'urbanisation touche toutes les régions du monde, mais à des rythmes très différents : elle est déjà très avancée en Europe et en Amérique du Nord, où elle progresse peu, alors qu'elle s'accélère fortement en Asie et surtout en Afrique, portée par l'exode rural. Cette urbanisation rapide dans les pays du Sud dépasse souvent les capacités des villes à fournir logements et infrastructures, ce qui explique le développement des bidonvilles.",
      explication: "Le rythme et les conséquences de l'urbanisation varient fortement selon le niveau de développement des régions du monde.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle part de la population mondiale vit environ en ville aujourd'hui ?",
      choix: ["Environ 30 %", "Environ 57 %", "Environ 80 %", "Environ 95 %"],
      bonneReponse: 1,
      explication: "Environ 57 % de la population mondiale est urbaine aujourd'hui, un chiffre en constante augmentation.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne un exemple de mégapole asiatique.",
      reponse: "Par exemple Tokyo, Delhi ou Shanghai.",
      explication: "L'Asie concentre la majorité des mégapoles mondiales, agglomérations de plus de 10 millions d'habitants.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qui alimente principalement la croissance urbaine dans les pays du Sud ?",
      choix: ["Le tourisme", "L'exode rural", "Le vieillissement de la population", "La baisse des naissances"],
      bonneReponse: 1,
      explication: "L'exode rural, le départ des campagnes vers les villes, alimente fortement la croissance urbaine dans les pays du Sud.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi les bidonvilles se développent-ils dans certaines villes ?",
      reponse: "Parce que la croissance urbaine y est plus rapide que la capacité des villes à construire des logements et des infrastructures suffisantes pour accueillir tous les nouveaux habitants.",
      explication: "Les bidonvilles résultent d'une urbanisation rapide et mal maîtrisée, en particulier dans les pays du Sud.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite une solution pour rendre les villes plus durables.",
      reponse: "Par exemple développer les transports en commun, créer des espaces verts, ou expérimenter des villes intelligentes (smart cities).",
      explication: "Ces solutions cherchent à réduire l'impact environnemental de la croissance urbaine.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'urbanisation du monde",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment appelle-t-on l'augmentation de la part de la population qui vit en ville ?",
          choix: ["La mondialisation", "L'urbanisation", "L'industrialisation", "La démographie"],
          bonneReponse: 1,
          explication: "L'urbanisation désigne la croissance de la part urbaine de la population.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une métropole mondiale ? Donne un exemple.",
          reponse: "Une très grande ville qui concentre des fonctions de commandement : pouvoir, finance, innovation, culture. Par exemple New York, Londres, Paris ou Tokyo.",
          explication: "Les métropoles mondiales exercent une influence à l'échelle de la planète.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pourquoi les habitants des campagnes viennent-ils s'installer en ville (exode rural) ?",
          choix: [
            "Pour fuir la pollution",
            "Pour trouver un emploi et un meilleur accès aux services (éducation, santé)",
            "Pour éviter les impôts",
            "Pour se rapprocher de la campagne",
          ],
          bonneReponse: 1,
          explication: "Les villes concentrent les emplois et les services, ce qui attire les populations rurales.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris les conditions de vie dans un bidonville.",
          reponse: "Les habitants vivent souvent dans des logements précaires et informels, sans accès garanti à l'eau potable, à l'électricité ou à l'assainissement, dans des conditions d'hygiène et de sécurité difficiles.",
          explication: "Les bidonvilles concentrent les populations les plus pauvres des villes, en particulier dans les pays du Sud.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que l'étalement urbain ?",
          reponse: "L'extension progressive des villes vers les campagnes environnantes, avec le développement de zones pavillonnaires, commerciales et industrielles en périphérie.",
          explication: "L'étalement urbain consomme des terres agricoles et augmente la dépendance à la voiture.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique pourquoi et comment le monde devient de plus en plus urbain, en évoquant les inégalités que cela crée (une quinzaine de lignes).",
          reponse:
            "Introduction : depuis 2007, plus de la moitié de l'humanité vit en ville, un seuil historique qui continue d'augmenter. Première partie : les villes attirent car elles concentrent les emplois, l'éducation, la santé et les loisirs, ce qui provoque un exode rural massif, en particulier en Asie et en Afrique, continents où l'urbanisation progresse le plus vite. Deuxième partie : cette croissance urbaine rapide crée de fortes inégalités : plus d'un milliard de personnes vivent dans des bidonvilles, privés d'eau potable, d'électricité et d'assainissement, alors que des quartiers résidentiels aisés et sécurisés se développent à proximité. Troisième partie : les villes doivent aussi faire face à l'étalement urbain et à ses conséquences environnementales, ce qui pousse certaines à développer des solutions plus durables, comme les transports en commun ou les espaces verts. Conclusion : l'urbanisation du monde est donc un phénomène global mais profondément inégal, porteur à la fois d'opportunités et de défis.",
          explication: "On attend la mention du seuil de 2007, des mégapoles/métropoles, des inégalités (bidonvilles) et des défis environnementaux.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'urbanisation du monde",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Combien d'habitants au minimum compte une mégapole ?",
          choix: ["1 million", "5 millions", "10 millions", "50 millions"],
          bonneReponse: 2,
          explication: "Une mégapole est une agglomération urbaine qui dépasse les dix millions d'habitants.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Sur quels continents se trouvent la majorité des mégapoles mondiales ?",
          reponse: "En Asie, notamment (Tokyo, Delhi, Shanghai).",
          explication: "L'Asie concentre la majorité des plus grandes agglomérations urbaines du monde.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle est une conséquence de l'étalement urbain ?",
          choix: [
            "La baisse de la population urbaine",
            "La consommation de terres agricoles et l'augmentation de l'usage de la voiture",
            "La disparition des bidonvilles",
            "La diminution des embouteillages",
          ],
          bonneReponse: 1,
          explication: "L'étalement urbain consomme des espaces agricoles et naturels et renforce la dépendance à la voiture.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi on parle d'inégalités socio-spatiales dans les grandes villes.",
          reponse: "Parce que des quartiers très pauvres, comme les bidonvilles, côtoient parfois directement des quartiers très riches et sécurisés, avec des différences très marquées d'accès à l'eau, à l'électricité, à l'éducation ou à la santé selon le quartier où l'on habite.",
          explication: "Ces contrastes spatiaux témoignent de fortes inégalités économiques et sociales au sein d'une même ville.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux mesures qu'une ville peut prendre pour devenir plus durable.",
          reponse: "Développer les transports en commun et les pistes cyclables, créer des espaces verts, ou utiliser des technologies numériques pour mieux gérer l'énergie et les déchets (ville intelligente).",
          explication: "Ces mesures visent à réduire l'impact environnemental et à améliorer la qualité de vie en ville.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : présente les mégapoles et les métropoles mondiales et explique leur rôle dans l'organisation du monde.",
          reponse:
            "Introduction : les très grandes villes jouent un rôle central dans l'organisation du monde actuel. Première partie : une mégapole est une agglomération de plus de dix millions d'habitants ; le monde en compte plus d'une trentaine, principalement en Asie, comme Tokyo, Delhi ou Shanghai, qui concentrent une population immense sur un espace réduit. Deuxième partie : certaines de ces très grandes villes sont aussi des métropoles mondiales, comme New York, Londres, Paris ou Tokyo ; elles concentrent des fonctions de commandement, politique, financière, économique et culturelle, et exercent une influence sur le monde entier. Troisième partie : ces très grandes villes concentrent aussi de fortes inégalités internes, entre quartiers d'affaires modernes, quartiers résidentiels aisés et parfois bidonvilles, ce qui pose des défis d'aménagement et de durabilité. Conclusion : mégapoles et métropoles mondiales structurent donc l'espace mondial tout en concentrant des inégalités et des défis considérables.",
          explication: "On attend la distinction entre mégapole (critère démographique) et métropole mondiale (fonctions de commandement), avec des exemples précis.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : depuis 2007, plus de la moitié de l'humanité vit en ville.",
    "L'urbanisation progresse le plus vite en Asie et en Afrique, portée par l'exode rural.",
    "Repère brevet : une mégapole compte plus de 10 millions d'habitants (ex. Tokyo, Delhi, Shanghai).",
    "Les métropoles mondiales (New York, Londres, Paris, Tokyo) concentrent pouvoir, finance et innovation.",
    "Plus d'un milliard de personnes vivent dans des bidonvilles, marqués par de fortes inégalités socio-spatiales.",
    "L'étalement urbain pose des défis environnementaux, qui poussent au développement de villes plus durables.",
  ],
};

export default chapitre;
