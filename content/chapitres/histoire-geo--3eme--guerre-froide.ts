import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "guerre-froide",
  titre: "Le monde bipolaire : la guerre froide",
  matiere: "histoire-geo",
  niveau: "3eme",
  description:
    "Comprendre l'affrontement entre les États-Unis et l'URSS de 1947 à 1991, l'organisation du monde en deux blocs, les grandes crises de la guerre froide (Berlin, Cuba) et la fin du conflit avec la chute du mur de Berlin puis la disparition de l'URSS.",
  objectifs: [
    "Expliquer la rupture de la Grande Alliance et la formation de deux blocs à partir de 1947",
    "Caractériser la guerre froide : affrontement indirect, course aux armements, dissuasion nucléaire",
    "Analyser les grandes crises de la guerre froide (blocus de Berlin, mur de Berlin, crise de Cuba)",
    "Comprendre la notion de guerre par procuration à travers un exemple (Corée ou Vietnam)",
    "Expliquer la fin de la guerre froide : chute du mur de Berlin (1989) et disparition de l'URSS (1991)",
  ],
  slides: [
    {
      titre: "1947 : la rupture de la Grande Alliance",
      illustration: "🌍",
      visuel: "1947 : début de la guerre froide",
      contenu: [
        "Après 1945, les vainqueurs de la guerre, États-Unis et URSS, deviennent rivaux",
        "1947 : doctrine Truman (endiguement du communisme) et plan Marshall (aide économique américaine à l'Europe)",
        "L'URSS réplique en imposant des régimes communistes en Europe de l'Est",
        "Le monde se divise en deux blocs opposés : c'est le début de la guerre froide",
      ],
      voixOff:
        "Après leur victoire commune en 1945, les États-Unis et l'URSS, les deux grandes puissances issues de la guerre, deviennent rapidement rivales. En 1947, le président américain Truman annonce sa doctrine d'endiguement du communisme et lance le plan Marshall, une aide économique massive pour reconstruire l'Europe de l'Ouest. En réponse, l'URSS impose des régimes communistes dans les pays d'Europe de l'Est qu'elle occupe. Le monde se divise alors en deux blocs opposés : c'est le début de la guerre froide.",
    },
    {
      titre: "Deux blocs, deux modèles",
      illustration: "⚔️",
      visuel: "OTAN (1949) / Pacte de Varsovie (1955)",
      contenu: [
        "Bloc de l'Ouest : démocraties libérales, économie de marché, dirigé par les États-Unis",
        "Bloc de l'Est : régimes communistes, économie planifiée, dirigé par l'URSS",
        "1949 : création de l'OTAN, alliance militaire occidentale",
        "1955 : création du pacte de Varsovie, alliance militaire des pays communistes",
      ],
      voixOff:
        "Le monde se retrouve organisé autour de deux blocs. À l'Ouest, les États-Unis dirigent un ensemble de démocraties libérales fondées sur l'économie de marché. À l'Est, l'URSS dirige un bloc de régimes communistes à économie planifiée. Sur le plan militaire, l'Organisation du traité de l'Atlantique Nord, l'OTAN, est créée en 1949 par les pays occidentaux, tandis que le pacte de Varsovie rassemble les pays communistes à partir de 1955.",
    },
    {
      titre: "Le blocus de Berlin (1948-1949)",
      illustration: "🛫",
      visuel: "Berlin, 1948-1949",
      contenu: [
        "Berlin, comme l'Allemagne, est divisée en zones d'occupation entre Alliés occidentaux et URSS",
        "Juin 1948 : l'URSS bloque toutes les routes vers Berlin-Ouest pour l'isoler",
        "Les Occidentaux ravitaillent la ville par un pont aérien pendant près d'un an",
        "1949 : l'URSS lève le blocus ; l'Allemagne est ensuite officiellement divisée en deux États (RFA/RDA)",
      ],
      voixOff:
        "Berlin, comme l'ensemble de l'Allemagne, est divisée en zones d'occupation entre les Alliés occidentaux et l'URSS. En juin 1948, l'URSS bloque toutes les routes terrestres menant à Berlin-Ouest pour tenter de l'isoler et de la faire céder. Les Occidentaux répondent par un pont aérien impressionnant, ravitaillant la ville par avion pendant près d'un an. En 1949, l'URSS renonce et lève le blocus. Peu après, l'Allemagne est officiellement divisée en deux États : la République fédérale à l'ouest et la République démocratique à l'est.",
    },
    {
      titre: "La course aux armements",
      illustration: "☢️",
      visuel: "L'équilibre de la terreur",
      contenu: [
        "États-Unis et URSS développent des arsenaux nucléaires de plus en plus puissants",
        "Chaque camp cherche à dissuader l'autre d'attaquer : c'est la dissuasion nucléaire",
        "On parle d'« équilibre de la terreur » : une guerre directe deviendrait la destruction des deux camps",
        "La guerre froide reste donc « froide » : pas d'affrontement militaire direct entre les deux grands",
      ],
      voixOff:
        "Les deux superpuissances se lancent dans une course aux armements nucléaires. Chacune développe un arsenal capable de détruire l'autre plusieurs fois, dans une logique de dissuasion : attaquer l'adversaire reviendrait à s'exposer à des représailles dévastatrices. On parle d'équilibre de la terreur. C'est pourquoi la guerre froide ne devient jamais une guerre directe entre les États-Unis et l'URSS, même si le monde reste sous la menace permanente d'un conflit nucléaire.",
    },
    {
      titre: "1961 : le mur de Berlin",
      illustration: "🧱",
      visuel: "13 août 1961",
      contenu: [
        "De nombreux Allemands de l'Est fuient vers Berlin-Ouest, plus prospère et plus libre",
        "13 août 1961 : la RDA construit un mur pour fermer hermétiquement la frontière à Berlin",
        "Le mur de Berlin devient le symbole de la division du monde et de l'Europe",
        "Il sépare familles et amis pendant près de trente ans",
      ],
      voixOff:
        "Face au départ massif d'Allemands de l'Est vers Berlin-Ouest, plus prospère et plus libre, les autorités est-allemandes décident, dans la nuit du 13 août 1961, de construire un mur qui coupe la ville en deux. Le mur de Berlin devient le symbole le plus fort de la division du monde en deux blocs. Il séparera des familles entières pendant près de trente ans, jusqu'en 1989.",
    },
    {
      titre: "1962 : la crise des missiles de Cuba",
      illustration: "🚀",
      visuel: "Octobre 1962",
      contenu: [
        "L'URSS installe secrètement des missiles nucléaires à Cuba, à proximité des États-Unis",
        "Octobre 1962 : le président Kennedy exige leur retrait et impose un blocus naval",
        "Pendant treize jours, le monde est au bord de la guerre nucléaire",
        "Un accord met fin à la crise : l'URSS retire ses missiles, les États-Unis retirent les leurs de Turquie",
      ],
      voixOff:
        "En octobre 1962, l'URSS installe secrètement des missiles nucléaires à Cuba, à quelques kilomètres seulement des côtes américaines. Le président américain Kennedy exige leur retrait immédiat et impose un blocus naval autour de l'île. Pendant treize jours, le monde entier retient son souffle, au bord d'une guerre nucléaire. Finalement, un compromis est trouvé : l'URSS retire ses missiles de Cuba, et les États-Unis retirent discrètement les leurs de Turquie. C'est le point culminant de la guerre froide.",
    },
    {
      titre: "Des guerres par procuration",
      illustration: "🪖",
      visuel: "Corée (1950-1953), Vietnam (1955-1975)",
      contenu: [
        "Même s'ils ne s'affrontent jamais directement, les deux blocs se combattent par pays alliés interposés",
        "Guerre de Corée (1950-1953) : la Corée du Nord communiste contre la Corée du Sud, soutenue par l'ONU et les États-Unis",
        "Guerre du Vietnam (1955-1975) : le Nord communiste, soutenu par l'URSS et la Chine, contre le Sud, soutenu par les États-Unis",
        "Ces conflits, très meurtriers, illustrent la rivalité indirecte des deux blocs",
      ],
      voixOff:
        "La guerre froide se joue aussi loin d'Europe, à travers des conflits appelés guerres par procuration : les deux blocs ne s'affrontent jamais directement, mais soutiennent chacun un camp dans des guerres régionales. La guerre de Corée, de 1950 à 1953, oppose ainsi la Corée du Nord communiste à la Corée du Sud soutenue par les États-Unis et l'ONU. La guerre du Vietnam, de 1955 à 1975, voit le Nord communiste, appuyé par l'URSS et la Chine, combattre le Sud, soutenu par les États-Unis. Ces guerres, très meurtrières, montrent que la rivalité entre les deux blocs se joue partout dans le monde.",
    },
    {
      titre: "1989-1991 : la fin de la guerre froide",
      illustration: "🎉",
      visuel: "9 novembre 1989 → 1991",
      contenu: [
        "Fin des années 1980 : l'URSS, affaiblie économiquement, entame des réformes (Gorbatchev)",
        "9 novembre 1989 : chute du mur de Berlin, les Allemands célèbrent la fin de la division",
        "1990 : réunification de l'Allemagne",
        "Décembre 1991 : dissolution de l'URSS, la Russie et d'autres États indépendants lui succèdent",
      ],
      voixOff:
        "À la fin des années 1980, l'URSS, économiquement affaiblie, engage des réformes sous la direction de Gorbatchev. Le 9 novembre 1989, le mur de Berlin tombe : c'est un moment de liesse immense, symbole de la fin de la division de l'Europe. L'Allemagne se réunifie en 1990. Enfin, en décembre 1991, l'URSS est officiellement dissoute : la Russie et d'autres républiques deviennent des États indépendants. La guerre froide, qui avait duré plus de quarante ans, s'achève.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1947 : début de la guerre froide (doctrine Truman, plan Marshall)",
        "Deux blocs opposés : OTAN (1949) contre pacte de Varsovie (1955)",
        "Crises majeures : blocus de Berlin (1948-1949), mur de Berlin (1961), crise de Cuba (1962)",
        "Guerres par procuration : Corée, Vietnam",
        "1989 : chute du mur de Berlin ; 1991 : dissolution de l'URSS, fin de la guerre froide",
      ],
      voixOff:
        "Résumons. À partir de 1947, le monde se divise en deux blocs rivaux, dirigés par les États-Unis et l'URSS : c'est la guerre froide. Les deux camps s'affrontent indirectement, par la course aux armements et par des crises comme le blocus de Berlin en 1948, la construction du mur de Berlin en 1961 ou la crise des missiles de Cuba en 1962, sans jamais se combattre directement. Ils s'opposent aussi par pays interposés, comme en Corée ou au Vietnam. La guerre froide s'achève avec la chute du mur de Berlin le 9 novembre 1989, puis la dissolution de l'URSS en décembre 1991. Bravo, tu es prêt pour le brevet sur ce chapitre !",
    },
  ],
  fiche: {
    intro:
      "De 1947 à 1991, le monde est divisé en deux blocs rivaux dirigés par les États-Unis et l'URSS : c'est la guerre froide, un affrontement indirect marqué par de graves crises et par la course aux armements nucléaires.",
    sections: [
      {
        titre: "Le début de la guerre froide (1947)",
        points: [
          "1947 : doctrine Truman (endiguement du communisme) et plan Marshall (aide économique américaine)",
          "L'URSS impose des régimes communistes en Europe de l'Est",
          "Le monde se divise en deux blocs : Ouest (États-Unis) et Est (URSS)",
        ],
      },
      {
        titre: "Deux blocs, des crises majeures",
        points: [
          "1949 : création de l'OTAN ; 1955 : création du pacte de Varsovie",
          "1948-1949 : blocus de Berlin, contourné par un pont aérien",
          "13 août 1961 : construction du mur de Berlin ; octobre 1962 : crise des missiles de Cuba, point culminant de la guerre froide",
        ],
      },
      {
        titre: "Une guerre « froide » mais des affrontements indirects",
        points: [
          "Course aux armements nucléaires et dissuasion (« équilibre de la terreur »)",
          "Guerres par procuration : guerre de Corée (1950-1953), guerre du Vietnam (1955-1975)",
          "Les deux Grands ne s'affrontent jamais militairement de façon directe",
        ],
      },
      {
        titre: "La fin de la guerre froide",
        points: [
          "Fin des années 1980 : réformes de Gorbatchev en URSS",
          "9 novembre 1989 : chute du mur de Berlin ; 1990 : réunification allemande",
          "Décembre 1991 : dissolution de l'URSS, fin de la guerre froide",
        ],
      },
    ],
    audio:
      "Fiche de révision : le monde bipolaire, la guerre froide. À partir de 1947, avec la doctrine Truman et le plan Marshall, les États-Unis et l'URSS, alliés pendant la Seconde Guerre mondiale, deviennent rivaux : le monde se divise en deux blocs, l'Ouest capitaliste et démocratique, l'Est communiste, organisés militairement autour de l'OTAN, créée en 1949, et du pacte de Varsovie, créé en 1955. La guerre froide est marquée par de grandes crises : le blocus de Berlin en 1948 et 1949, la construction du mur de Berlin le 13 août 1961, et surtout la crise des missiles de Cuba en octobre 1962, qui amène le monde au bord de la guerre nucléaire. Grâce à la dissuasion nucléaire, les deux Grands ne s'affrontent jamais directement, mais se combattent par pays alliés interposés, comme lors de la guerre de Corée ou de la guerre du Vietnam. La guerre froide s'achève à la fin des années 1980 : le mur de Berlin tombe le 9 novembre 1989, l'Allemagne se réunifie en 1990, et l'URSS est dissoute en décembre 1991.",
  },
  memoCards: [
    { recto: "Quand commence la guerre froide et pourquoi ?", verso: "En 1947, avec la doctrine Truman et le plan Marshall : les États-Unis et l'URSS, alliés en 1945, deviennent rivaux et le monde se divise en deux blocs." },
    { recto: "Quelles sont les deux alliances militaires de la guerre froide ?", verso: "L'OTAN (bloc occidental, 1949) et le pacte de Varsovie (bloc communiste, 1955)." },
    { recto: "Qu'est-ce que le blocus de Berlin (1948-1949) ?", verso: "L'URSS bloque les routes vers Berlin-Ouest ; les Occidentaux répondent par un pont aérien pendant près d'un an." },
    { recto: "Que symbolise le mur de Berlin (13 août 1961) ?", verso: "La division du monde en deux blocs : il coupe Berlin en deux jusqu'en 1989." },
    { recto: "Qu'est-ce que la crise des missiles de Cuba (octobre 1962) ?", verso: "L'URSS installe des missiles nucléaires à Cuba ; pendant 13 jours, le monde est au bord de la guerre nucléaire, avant un compromis. C'est le sommet de la guerre froide." },
    { recto: "Qu'est-ce qu'une guerre par procuration ?", verso: "Un conflit régional où les deux blocs soutiennent chacun un camp sans s'affronter directement (ex. Corée 1950-1953, Vietnam 1955-1975)." },
    { recto: "Que se passe-t-il le 9 novembre 1989 ?", verso: "La chute du mur de Berlin, symbole de la fin de la division de l'Europe." },
    { recto: "Quand la guerre froide se termine-t-elle officiellement ?", verso: "En décembre 1991, avec la dissolution de l'URSS." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelles sont les deux superpuissances qui s'affrontent pendant la guerre froide ?",
      choix: ["La France et le Royaume-Uni", "Les États-Unis et l'URSS", "L'Allemagne et la Russie", "La Chine et le Japon"],
      bonneReponse: 1,
      explication: "La guerre froide oppose le bloc occidental, dirigé par les États-Unis, au bloc communiste, dirigé par l'URSS.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année la guerre froide commence-t-elle ?",
      choix: ["1945", "1947", "1949", "1961"],
      bonneReponse: 1,
      explication: "En 1947, la doctrine Truman et le plan Marshall marquent le début officiel de la rivalité entre les deux blocs.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quelle date le mur de Berlin est-il construit ?",
      reponse: "Le 13 août 1961.",
      explication: "Le mur sépare Berlin-Est et Berlin-Ouest jusqu'à sa chute en 1989.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que se passe-t-il le 9 novembre 1989 ?",
      choix: ["Le blocus de Berlin commence", "La chute du mur de Berlin", "La crise des missiles de Cuba", "La dissolution de l'URSS"],
      bonneReponse: 1,
      explication: "La chute du mur de Berlin symbolise la fin de la division de l'Europe et annonce la fin de la guerre froide.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que le plan Marshall ?",
      choix: [
        "Une alliance militaire occidentale",
        "Une aide économique américaine pour reconstruire l'Europe de l'Ouest",
        "Un traité de paix avec l'Allemagne",
        "Le nom du mur de Berlin",
      ],
      bonneReponse: 1,
      explication: "Lancé en 1947, le plan Marshall vise à reconstruire l'Europe de l'Ouest et à l'éloigner du communisme.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique ce qu'est le blocus de Berlin et comment les Occidentaux y répondent.",
      reponse:
        "En juin 1948, l'URSS bloque toutes les routes terrestres vers Berlin-Ouest pour isoler la ville et forcer les Occidentaux à l'abandonner. Ces derniers organisent un pont aérien : pendant près d'un an, des avions ravitaillent quotidiennement la ville en vivres et en charbon. Face à cet échec, l'URSS lève le blocus en 1949.",
      explication: "Le blocus de Berlin est la première grande crise de la guerre froide.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi dit-on que la crise de Cuba (1962) est le point culminant de la guerre froide ?",
      reponse:
        "Parce que l'installation de missiles nucléaires soviétiques à Cuba, à proximité immédiate des États-Unis, place les deux superpuissances à un doigt d'un affrontement nucléaire direct. Pendant treize jours, la tension est extrême, avant qu'un compromis diplomatique ne permette d'éviter la guerre.",
      explication: "Après cette crise, les deux Grands cherchent à limiter les risques d'escalade, par exemple avec l'installation d'un « téléphone rouge » entre Washington et Moscou.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qu'une guerre par procuration ?",
      choix: [
        "Une guerre directe entre les États-Unis et l'URSS",
        "Un conflit régional où chaque bloc soutient un camp sans s'affronter directement",
        "Une guerre civile en Russie",
        "La guerre du Vietnam uniquement",
      ],
      bonneReponse: 1,
      explication: "Les guerres de Corée et du Vietnam en sont des exemples : les deux Grands y soutiennent des camps opposés sans combattre directement l'un contre l'autre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la guerre froide reste « froide » malgré des tensions extrêmes.",
      reponse:
        "Les deux superpuissances possèdent des arsenaux nucléaires capables de s'anéantir mutuellement : c'est la dissuasion, ou « équilibre de la terreur ». Un affrontement militaire direct entrainerait la destruction des deux camps, ce qui pousse les États-Unis et l'URSS à éviter tout combat frontal, même lors de crises graves comme celle de Cuba en 1962, et à privilégier des affrontements indirects (course aux armements, guerres par procuration, propagande).",
      explication: "La dissuasion nucléaire explique l'absence de conflit armé direct entre les deux Grands durant toute la guerre froide.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre, à partir de deux exemples précis, que Berlin est un lieu symbolique de la guerre froide.",
      reponse:
        "En 1948-1949, le blocus de Berlin, contourné par le pont aérien allié, en fait le premier grand point de tension entre les deux blocs. En 1961, la construction du mur de Berlin, qui coupe la ville en deux pour empêcher les départs vers l'Ouest, devient le symbole le plus fort de la division du monde. Sa chute, le 9 novembre 1989, symbolise à l'inverse la fin de la guerre froide.",
      explication: "Berlin concentre, du début à la fin du conflit, les grandes étapes de la guerre froide.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel enchaînement d'événements marque la fin de la guerre froide ?",
      choix: [
        "Blocus de Berlin puis crise de Cuba",
        "Chute du mur de Berlin (1989) puis dissolution de l'URSS (1991)",
        "Doctrine Truman puis plan Marshall",
        "Guerre de Corée puis guerre du Vietnam",
      ],
      bonneReponse: 1,
      explication: "Après les réformes de Gorbatchev, le mur de Berlin tombe en 1989, l'Allemagne se réunifie en 1990, et l'URSS disparaît en décembre 1991.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Méthode brevet : tu analyses une photographie de la chute du mur de Berlin en novembre 1989. Quelles étapes suis-tu ?",
      reponse:
        "1) Présenter le document : nature (photographie de presse), date (novembre 1989), lieu (Berlin), contexte (fin de la guerre froide). 2) Décrire ce que l'on voit : des habitants sur et autour du mur, liesse populaire, symboles de la division qui tombent. 3) Expliquer avec ses connaissances : construction du mur en 1961, réformes de Gorbatchev, affaiblissement du bloc communiste. 4) Porter un regard critique : image forte et symbolique, mais qui ne montre qu'un instant ; la réunification et la fin de l'URSS se poursuivent jusqu'en 1990-1991.",
      explication: "Au brevet, on attend : présenter, décrire, expliquer avec le cours, puis évaluer la portée du document.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelles sont les deux superpuissances de la guerre froide ?",
      choix: ["France et Royaume-Uni", "États-Unis et URSS", "Allemagne et Japon", "Chine et Russie"],
      bonneReponse: 1,
      explication: "La guerre froide oppose le bloc occidental (États-Unis) au bloc communiste (URSS) de 1947 à 1991.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que symbolise le mur de Berlin ?",
      reponse: "La division du monde en deux blocs pendant la guerre froide.",
      explication: "Construit en 1961, il tombe en 1989.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle crise de 1962 amène le monde au bord de la guerre nucléaire ?",
      reponse: "La crise des missiles de Cuba.",
      explication: "L'installation de missiles soviétiques à Cuba provoque une tension extrême entre les États-Unis et l'URSS.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel type de conflit oppose indirectement les deux blocs, par pays interposés ?",
      choix: ["Une guerre nucléaire directe", "Une guerre par procuration", "Un blocus", "Une guerre civile"],
      bonneReponse: 1,
      explication: "Corée (1950-1953) et Vietnam (1955-1975) sont des exemples de guerres par procuration.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quand la guerre froide se termine-t-elle ?",
      reponse: "En 1991, avec la dissolution de l'URSS, après la chute du mur de Berlin en 1989.",
      explication: "Ces deux dates marquent la fin de plus de quarante ans de guerre froide.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le monde bipolaire : la guerre froide",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "En quelle année la guerre froide débute-t-elle ?",
          choix: ["1945", "1947", "1955", "1961"],
          bonneReponse: 1,
          explication: "1947 est l'année de la doctrine Truman et du plan Marshall, marquant le début de la rivalité Est-Ouest.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelles sont les deux alliances militaires qui organisent les blocs ?",
          reponse: "L'OTAN pour le bloc occidental (1949) et le pacte de Varsovie pour le bloc communiste (1955).",
          explication: "Ces alliances structurent l'opposition militaire entre les deux blocs.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Comment les Occidentaux répondent-ils au blocus de Berlin en 1948 ?",
          choix: ["Par une invasion militaire", "Par un pont aérien", "En abandonnant Berlin-Ouest", "Par des négociations immédiates"],
          bonneReponse: 1,
          explication: "Le pont aérien allié ravitaille Berlin-Ouest par avion pendant près d'un an, forçant l'URSS à lever le blocus en 1949.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le déroulement de la crise des missiles de Cuba en octobre 1962.",
          reponse:
            "L'URSS installe secrètement des missiles nucléaires à Cuba. Le président Kennedy exige leur retrait et impose un blocus naval. Pendant treize jours, la tension est extrême, avant qu'un accord ne mette fin à la crise : l'URSS retire ses missiles de Cuba, les États-Unis retirent discrètement les leurs de Turquie.",
          explication: "Cette crise est considérée comme le moment le plus dangereux de la guerre froide.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne un exemple de guerre par procuration et explique pourquoi on utilise ce terme.",
          reponse:
            "La guerre de Corée (1950-1953) oppose la Corée du Nord communiste, soutenue par la Chine et l'URSS, à la Corée du Sud, soutenue par les États-Unis et l'ONU. On parle de guerre par procuration car les deux Grands ne combattent pas directement l'un contre l'autre, mais soutiennent chacun un camp local.",
          explication: "Ce type de conflit permet aux deux blocs de s'affronter indirectement sans déclencher une guerre nucléaire directe.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre que Berlin est au cœur des tensions de la guerre froide, de 1948 à 1989 (une vingtaine de lignes).",
          reponse:
            "Introduction : divisée entre les Alliés occidentaux et l'URSS après 1945, Berlin devient un symbole des tensions de la guerre froide. Première partie : le blocus de Berlin (1948-1949) ; l'URSS bloque les routes terrestres vers Berlin-Ouest, les Occidentaux répliquent par un pont aérien qui ravitaille la ville pendant près d'un an, jusqu'à la levée du blocus. Deuxième partie : la construction du mur (1961) ; pour empêcher la fuite des Allemands de l'Est vers l'Ouest, plus prospère, la RDA construit un mur qui coupe la ville en deux à partir du 13 août 1961, séparant des familles entières. Troisième partie : la chute du mur (1989) ; affaiblie économiquement, l'URSS engage des réformes, et le 9 novembre 1989, le mur tombe dans la liesse, annonçant la fin de la division de l'Allemagne, réunifiée en 1990. Conclusion : de 1948 à 1989, Berlin concentre à elle seule toute l'histoire de la guerre froide.",
          explication: "Le développement doit mobiliser les repères : 1948-1949, 1961, 1989.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le monde bipolaire : la guerre froide",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel événement du 13 août 1961 divise Berlin en deux ?",
          choix: ["Le blocus de Berlin", "La construction du mur de Berlin", "La crise de Cuba", "La chute du mur"],
          bonneReponse: 1,
          explication: "Le mur de Berlin est construit pour empêcher les Allemands de l'Est de fuir vers Berlin-Ouest.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Que se passe-t-il en décembre 1991 ?",
          reponse: "L'URSS est officiellement dissoute, ce qui marque la fin de la guerre froide.",
          explication: "La Russie et d'autres républiques deviennent des États indépendants.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Qu'est-ce que la dissuasion nucléaire ?",
          choix: [
            "Une alliance militaire",
            "Une stratégie qui vise à décourager l'ennemi d'attaquer en menaçant de représailles nucléaires massives",
            "Un traité de désarmement",
            "Le nom du mur de Berlin",
          ],
          bonneReponse: 1,
          explication: "La dissuasion, ou « équilibre de la terreur », explique pourquoi les deux Grands évitent tout affrontement militaire direct.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Comment se manifeste la rivalité entre les deux blocs en dehors de l'Europe ?",
          reponse:
            "Par des guerres par procuration, comme la guerre de Corée (1950-1953) ou la guerre du Vietnam (1955-1975), où chaque bloc soutient militairement et financièrement un camp local sans combattre directement l'autre superpuissance.",
          explication: "Ces conflits régionaux, souvent très meurtriers, prolongent la rivalité Est-Ouest hors d'Europe.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle de Gorbatchev dans la fin de la guerre froide.",
          reponse:
            "Arrivé au pouvoir en URSS en 1985, Gorbatchev engage des réformes politiques et économiques (glasnost, perestroïka) pour redresser un pays affaibli. Il renonce à intervenir militairement pour maintenir les régimes communistes d'Europe de l'Est, ce qui permet la chute du mur de Berlin en 1989 et accélère la fin du bloc communiste.",
          explication: "Les réformes de Gorbatchev sont un facteur essentiel de la fin de la guerre froide.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : explique pourquoi on peut parler d'un monde bipolaire de 1947 à 1991 (une vingtaine de lignes).",
          reponse:
            "Introduction : de 1947 à 1991, le monde est organisé autour de deux superpuissances rivales, les États-Unis et l'URSS. Première partie : deux blocs idéologiques et militaires opposés ; à l'Ouest, des démocraties libérales alliées au sein de l'OTAN (1949) ; à l'Est, des régimes communistes regroupés dans le pacte de Varsovie (1955). Deuxième partie : une rivalité permanente mais indirecte ; la course aux armements nucléaires et la dissuasion empêchent tout affrontement direct, mais des crises très graves éclatent, comme le blocus de Berlin en 1948-1949 ou la crise des missiles de Cuba en 1962. Troisième partie : une rivalité mondiale ; les deux blocs s'affrontent aussi par pays interposés, en Corée puis au Vietnam. Conclusion : cette organisation bipolaire du monde prend fin avec la chute du mur de Berlin en 1989 et la disparition de l'URSS en 1991.",
          explication: "Le développement doit mobiliser les repères : 1947, 1949/1955, 1948-1949, 1962, 1989, 1991.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Repère brevet : 1947, début de la guerre froide (doctrine Truman, plan Marshall) — le monde se divise en deux blocs.",
    "Deux alliances militaires : OTAN (bloc occidental, 1949) et pacte de Varsovie (bloc communiste, 1955).",
    "Repère brevet : blocus de Berlin (1948-1949), première grande crise de la guerre froide.",
    "Repère brevet : 13 août 1961, construction du mur de Berlin ; octobre 1962, crise des missiles de Cuba, sommet de la tension entre les deux Grands.",
    "Guerres par procuration : Corée (1950-1953), Vietnam (1955-1975) — les deux blocs s'affrontent indirectement.",
    "Repères brevet : 9 novembre 1989, chute du mur de Berlin ; décembre 1991, dissolution de l'URSS, fin de la guerre froide.",
  ],
};

export default chapitre;
