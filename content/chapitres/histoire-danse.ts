import type { Chapitre } from "../types";

const chapitres: Chapitre[] = [
{
  slug: "danse-contemporaine",
  titre: "La danse contemporaine en France et dans le monde",
  matiere: "histoire-danse",
  niveau: "3eme",
  description:
    "Découvrir la danse contemporaine, héritière de la danse moderne : Merce Cunningham et le rôle du hasard, Pina Bausch et le Tanztheater, Maurice Béjart et le grand spectacle populaire, puis l'explosion de la Nouvelle Danse française dans les années 1980 avec Angelin Preljocaj et sa génération.",
  objectifs: [
    "Distinguer la danse contemporaine de la danse moderne et du ballet classique",
    "Connaître Merce Cunningham et sa collaboration avec le musicien John Cage",
    "Connaître Pina Bausch et le Tanztheater (théâtre dansé) de Wuppertal",
    "Situer Maurice Béjart et le Ballet du XXe siècle",
    "Identifier la Nouvelle Danse française des années 1980 et le rôle d'Angelin Preljocaj",
  ],
  slides: [
    {
      titre: "Qu'est-ce que la danse contemporaine ?",
      illustration: "🌀",
      visuel: "Depuis les années 1950-1960",
      contenu: [
        "Elle naît après la danse moderne, en prolongeant sa liberté de mouvement",
        "Elle refuse les techniques figées : chaque chorégraphe invente son propre langage",
        "Elle explore le hasard, le quotidien, le théâtre, les autres arts (vidéo, arts plastiques)",
        "Elle se développe surtout aux États-Unis, en Allemagne, puis en France dès les années 1980",
      ],
      voixOff:
        "La danse contemporaine naît dans le prolongement de la danse moderne, mais elle va encore plus loin dans la liberté. Là où la danse moderne avait ses propres techniques bien définies, comme la contraction-release de Martha Graham, la danse contemporaine refuse toute technique unique : chaque chorégraphe invente son propre langage. Elle explore le hasard, les gestes du quotidien, le théâtre, et dialogue avec les autres arts. Ce mouvement se développe d'abord aux États-Unis et en Allemagne, puis explose en France à partir des années mille neuf cent quatre-vingt.",
    },
    {
      titre: "Merce Cunningham et le hasard",
      illustration: "🎲",
      visuel: "Merce Cunningham (1919-2009)",
      contenu: [
        "Danseur américain, formé chez Martha Graham, il fonde sa compagnie en 1953",
        "Il rompt avec l'idée que la danse doit exprimer une émotion précise",
        "Avec le musicien John Cage, il utilise le hasard : tirage au sort de l'ordre des mouvements",
        "Danse et musique sont composées séparément, puis réunies seulement lors du spectacle",
      ],
      voixOff:
        "Merce Cunningham, danseur américain formé chez Martha Graham, fonde sa propre compagnie en dix-neuf cent cinquante-trois. Il rompt avec une idée essentielle de la danse moderne : pour lui, la danse n'a pas besoin de raconter une émotion ou une histoire précise. Avec son compagnon, le musicien John Cage, il utilise même le hasard, par exemple le tirage au sort, pour décider de l'ordre des mouvements. Danse et musique sont composées totalement séparément, et se rencontrent pour la première fois seulement le soir du spectacle.",
    },
    {
      titre: "Pina Bausch et le Tanztheater",
      illustration: "🌸",
      visuel: "Tanztheater Wuppertal",
      contenu: [
        "Chorégraphe allemande, héritière de l'expressionnisme (Ausdruckstanz) de Mary Wigman",
        "Prend la direction du Ballet de Wuppertal en 1973, qu'elle transforme en Tanztheater",
        "Mêle danse, théâtre, texte et objets du quotidien sur scène",
        "Œuvres marquantes : Le Sacre du printemps (1975), Café Müller (1978)",
      ],
      voixOff:
        "Pina Bausch est une chorégraphe allemande, héritière de l'expressionnisme de Mary Wigman. En dix-neuf cent soixante-treize, elle prend la direction du Ballet de la ville de Wuppertal, qu'elle transforme en Tanztheater, un théâtre dansé où se mêlent danse, texte, cris, objets du quotidien, chaises et robes de scène. Sa version du Sacre du printemps, en dix-neuf cent soixante-quinze, dansée sur un sol recouvert de terre, reste un choc absolu. Café Müller, en dix-neuf cent soixante-dix-huit, montre des danseurs qui errent les yeux fermés entre des tables et des chaises.",
    },
    {
      titre: "Maurice Béjart, le grand spectacle populaire",
      illustration: "🎭",
      visuel: "Ballet du XXe siècle",
      contenu: [
        "Chorégraphe français, fonde le Ballet du XXe siècle à Bruxelles en 1960",
        "Veut une danse populaire, jouée dans de grandes salles devant des milliers de spectateurs",
        "Boléro (1961) : sur la musique de Ravel, autour d'un danseur ou d'une danseuse sur une table ronde",
        "Installe sa compagnie à Lausanne en 1987 (Béjart Ballet Lausanne)",
      ],
      voixOff:
        "Maurice Béjart, chorégraphe français, fonde en dix-neuf cent soixante à Bruxelles le Ballet du vingtième siècle. Son ambition : sortir la danse des petites salles élitistes pour la donner en spectacle à des milliers de personnes, dans de grands palais des sports. Son ballet le plus célèbre, Boléro, créé en dix-neuf cent soixante et un sur la musique lancinante de Maurice Ravel, met en scène un danseur ou une danseuse sur une table ronde, entouré d'hommes qui dansent autour d'elle ou de lui. En dix-neuf cent quatre-vingt-sept, Béjart installe sa compagnie à Lausanne, en Suisse.",
    },
    {
      titre: "La France s'empare de la danse contemporaine",
      illustration: "🇫🇷",
      visuel: "Années 1980",
      contenu: [
        "Dans les années 1980, l'État soutient fortement la danse contemporaine (ministère de la Culture)",
        "Création des Centres chorégraphiques nationaux (CCN) dans plusieurs villes de France",
        "Une génération de chorégraphes émerge : on parle de « Nouvelle Danse française »",
        "Parmi eux : Maguy Marin, Jean-Claude Gallotta, Dominique Bagouet, Régine Chopinot",
      ],
      voixOff:
        "Dans les années mille neuf cent quatre-vingt, l'État français décide de soutenir fortement la danse contemporaine, encore jeune et fragile. Des Centres chorégraphiques nationaux sont créés dans plusieurs villes, offrant enfin des moyens et des lieux à des compagnies. Une génération entière de chorégraphes en profite : on parle alors de Nouvelle Danse française. Parmi ses figures marquantes, retiens Maguy Marin, dont le ballet May B, créé en 1981, s'inspire de l'univers de Samuel Beckett, ainsi que Jean-Claude Gallotta, Dominique Bagouet et Régine Chopinot.",
    },
    {
      titre: "Angelin Preljocaj, une voix majeure",
      illustration: "🌟",
      visuel: "Ballet Preljocaj",
      contenu: [
        "Chorégraphe français, fonde sa compagnie en 1984",
        "Installe le Ballet Preljocaj au Pavillon Noir, à Aix-en-Provence, en 2006",
        "Son style mêle technique très précise, prise de risque physique et thèmes forts",
        "Il revisite parfois des œuvres du répertoire classique (Roméo et Juliette, Le Parc)",
      ],
      voixOff:
        "Parmi les grandes figures nées de cette génération, Angelin Preljocaj occupe une place à part. Il fonde sa compagnie en dix-neuf cent quatre-vingt-quatre et l'installe, en deux mille six, dans un lieu spécialement conçu pour elle : le Pavillon Noir, à Aix-en-Provence. Son style associe une très grande précision technique, une prise de risque physique impressionnante et des thèmes puissants, parfois issus du répertoire classique qu'il réinvente entièrement, comme dans Roméo et Juliette ou Le Parc.",
    },
    {
      titre: "Une danse ouverte à tous les corps et à tous les arts",
      illustration: "🎬",
      visuel: "Croisements artistiques",
      contenu: [
        "La danse contemporaine travaille avec la vidéo, les arts plastiques, la lumière, le texte",
        "Elle accueille des corps très différents : pas seulement des silhouettes de danseurs classiques",
        "Elle interroge parfois le public, le fait participer, ou sort des théâtres (rue, musées)",
        "Elle continue de dialoguer avec la danse classique et avec les danses urbaines",
      ],
      voixOff:
        "La danse contemporaine ne cesse de dialoguer avec les autres arts : la vidéo, les arts plastiques, la lumière deviennent des partenaires de création à part entière. Elle accueille aussi des corps très différents, loin du seul modèle classique, et n'hésite pas à interroger le public, voire à le faire participer, ou à sortir des théâtres pour investir la rue ou les musées. Enfin, elle continue de dialoguer avec le ballet classique comme avec les danses urbaines, dans un métissage permanent.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "La danse contemporaine prolonge la liberté de la danse moderne, sans technique unique imposée",
        "Merce Cunningham : hasard et indépendance entre danse et musique (avec John Cage)",
        "Pina Bausch : Tanztheater à Wuppertal (1973), mélange de danse et de théâtre",
        "Maurice Béjart : danse populaire de masse, Ballet du XXe siècle (1960), Boléro (1961)",
        "Années 1980 : Nouvelle Danse française, avec notamment Angelin Preljocaj",
      ],
      voixOff:
        "Résumons. La danse contemporaine prolonge la liberté conquise par la danse moderne, mais refuse toute technique unique et imposée. Aux États-Unis, Merce Cunningham introduit le hasard et sépare danse et musique, en collaboration avec John Cage. En Allemagne, Pina Bausch invente à Wuppertal, à partir de dix-neuf cent soixante-treize, le Tanztheater, entre danse et théâtre. En Belgique puis en Suisse, Maurice Béjart cherche à toucher un public populaire de masse avec le Ballet du vingtième siècle et son célèbre Boléro. Enfin, dans les années mille neuf cent quatre-vingt, la France voit naître sa Nouvelle Danse, portée notamment par Angelin Preljocaj. Tu connais maintenant les grandes voix de la danse contemporaine !",
    },
  ],
  fiche: {
    intro:
      "La danse contemporaine prolonge, après 1950, la liberté conquise par la danse moderne : chaque chorégraphe invente son propre langage. Des États-Unis (Cunningham) à l'Allemagne (Bausch), en passant par la Belgique (Béjart) et la France des années 1980 (Preljocaj et la Nouvelle Danse française), elle s'impose comme un art en constante réinvention.",
    sections: [
      {
        titre: "Une danse sans technique unique",
        points: [
          "Naît dans le prolongement de la danse moderne, à partir des années 1950-1960",
          "Chaque chorégraphe invente son propre langage, au lieu de suivre une technique codifiée",
          "Dialogue permanent avec les autres arts : théâtre, vidéo, arts plastiques",
        ],
      },
      {
        titre: "Merce Cunningham et Pina Bausch",
        points: [
          "Merce Cunningham (compagnie fondée en 1953) : le hasard, et l'indépendance entre danse et musique, avec John Cage",
          "Pina Bausch : prend la direction du Ballet de Wuppertal en 1973 et invente le Tanztheater (théâtre dansé)",
          "Œuvres de Bausch : Le Sacre du printemps (1975), Café Müller (1978)",
        ],
      },
      {
        titre: "Maurice Béjart, une danse populaire",
        points: [
          "Fonde le Ballet du XXe siècle à Bruxelles en 1960",
          "Veut une danse jouée devant un très large public, dans de grandes salles",
          "Boléro (1961), sur la musique de Ravel, est son ballet le plus célèbre",
          "Installe sa compagnie à Lausanne en 1987",
        ],
      },
      {
        titre: "La Nouvelle Danse française",
        points: [
          "Années 1980 : fort soutien de l'État, création des Centres chorégraphiques nationaux",
          "Génération de chorégraphes français : Maguy Marin, Jean-Claude Gallotta, Dominique Bagouet, Régine Chopinot",
          "Angelin Preljocaj fonde sa compagnie en 1984, installée depuis 2006 au Pavillon Noir, à Aix-en-Provence",
        ],
      },
    ],
    audio:
      "Fiche de révision : la danse contemporaine en France et dans le monde. La danse contemporaine naît dans le prolongement de la danse moderne, à partir des années mille neuf cent cinquante et soixante, mais refuse toute technique unique : chaque chorégraphe invente son propre langage. Aux États-Unis, Merce Cunningham fonde sa compagnie en dix-neuf cent cinquante-trois et introduit le hasard dans la composition, tout en séparant totalement la danse et la musique, en collaboration avec le musicien John Cage. En Allemagne, Pina Bausch prend la direction du Ballet de Wuppertal en dix-neuf cent soixante-treize et y invente le Tanztheater, un théâtre dansé qui mêle danse, texte et objets du quotidien, avec des œuvres comme Le Sacre du printemps en dix-neuf cent soixante-quinze ou Café Müller en dix-neuf cent soixante-dix-huit. En Belgique, Maurice Béjart fonde en dix-neuf cent soixante le Ballet du vingtième siècle et veut toucher un très large public, notamment avec son Boléro de dix-neuf cent soixante et un, sur la musique de Ravel ; il installe sa compagnie à Lausanne en dix-neuf cent quatre-vingt-sept. Enfin, dans les années mille neuf cent quatre-vingt, la France voit naître sa Nouvelle Danse, portée par des chorégraphes comme Maguy Marin ou Angelin Preljocaj, qui fonde sa compagnie en dix-neuf cent quatre-vingt-quatre.",
  },
  memoCards: [
    {
      recto: "En quoi la danse contemporaine se distingue-t-elle de la danse moderne ?",
      verso: "Elle refuse toute technique unique et codifiée : chaque chorégraphe invente son propre langage de mouvement.",
    },
    {
      recto: "Qui est Merce Cunningham et avec quel musicien collabore-t-il ?",
      verso: "Chorégraphe américain (compagnie fondée en 1953), il collabore avec le compositeur John Cage et utilise le hasard dans ses créations.",
    },
    {
      recto: "Qu'est-ce que le Tanztheater de Pina Bausch ?",
      verso: "Un théâtre dansé, mêlant danse, texte et objets du quotidien, créé à Wuppertal (Allemagne) à partir de 1973.",
    },
    {
      recto: "Cite deux œuvres de Pina Bausch.",
      verso: "Le Sacre du printemps (1975) et Café Müller (1978).",
    },
    {
      recto: "Qui est Maurice Béjart et que fonde-t-il en 1960 ?",
      verso: "Chorégraphe français, il fonde à Bruxelles le Ballet du XXe siècle, avec l'ambition d'une danse populaire pour un large public.",
    },
    {
      recto: "Quel est le ballet le plus célèbre de Béjart ?",
      verso: "Boléro (1961), sur la musique de Maurice Ravel, dansé autour d'une table ronde.",
    },
    {
      recto: "Qu'est-ce que la Nouvelle Danse française ?",
      verso: "La génération de chorégraphes français qui émerge dans les années 1980, soutenue par l'État (Centres chorégraphiques nationaux) : Maguy Marin, Gallotta, Bagouet, Preljocaj...",
    },
    {
      recto: "Qui est Angelin Preljocaj ?",
      verso: "Chorégraphe français, fonde sa compagnie en 1984, installée depuis 2006 au Pavillon Noir, à Aix-en-Provence.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La danse contemporaine se caractérise surtout par :",
      choix: [
        "Une technique unique enseignée partout de la même façon",
        "L'absence de toute technique codifiée unique, chaque chorégraphe inventant son langage",
        "Le retour obligatoire aux pointes et au tutu",
        "L'interdiction de toute musique",
      ],
      bonneReponse: 1,
      explication: "Contrairement au ballet classique ou à certaines techniques modernes (comme celle de Graham), la danse contemporaine refuse une technique unique imposée à tous.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Merce Cunningham a fondé sa compagnie en :",
      choix: ["1926", "1953", "1973", "1984"],
      bonneReponse: 1,
      explication: "Cunningham fonde sa compagnie en 1953, après avoir été formé chez Martha Graham.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Avec quel musicien Merce Cunningham a-t-il beaucoup collaboré ?",
      reponse: "John Cage.",
      explication: "Ensemble, ils composaient souvent danse et musique séparément.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Pina Bausch dirige le Ballet de Wuppertal (Allemagne) à partir de :",
      choix: ["1953", "1960", "1973", "1990"],
      bonneReponse: 2,
      explication: "Pina Bausch en prend la direction en 1973 et le transforme en Tanztheater.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qui caractérise le Tanztheater de Pina Bausch ?",
      choix: [
        "Un retour strict au vocabulaire classique",
        "Un mélange de danse, de théâtre, de texte et d'objets du quotidien",
        "Une danse toujours silencieuse, sans aucun élément scénique",
        "Une danse réservée aux seuls danseurs professionnels de ballet",
      ],
      bonneReponse: 1,
      explication: "Le Tanztheater mêle danse et théâtre, avec des objets et des situations issues de la vie quotidienne.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel est le projet artistique de Maurice Béjart avec le Ballet du XXe siècle ?",
      reponse: "Créer une danse populaire, accessible à un très large public, jouée dans de grandes salles devant des milliers de spectateurs.",
      explication: "C'est une différence importante avec une danse contemporaine parfois plus confidentielle ou expérimentale.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Sur la musique de quel compositeur Maurice Béjart crée-t-il son Boléro (1961) ?",
      choix: ["Igor Stravinsky", "Maurice Ravel", "Piotr Ilitch Tchaïkovski", "Claude Debussy"],
      bonneReponse: 1,
      explication: "Le Boléro de Béjart est dansé sur la célèbre musique répétitive de Maurice Ravel.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'un Centre chorégraphique national et pourquoi a-t-il compté pour la danse contemporaine française ?",
      reponse:
        "C'est une structure soutenue par l'État français, créée dans les années 1980, qui donne des moyens et des lieux de création à des compagnies de danse contemporaine. Ces centres ont permis l'essor d'une génération entière de chorégraphes français, la Nouvelle Danse française.",
      explication: "Ce soutien public explique en partie le grand dynamisme de la danse contemporaine en France depuis les années 1980.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Qu'est-ce qui distingue le plus nettement l'approche de Merce Cunningham de celle de la danse moderne classique (Graham) ?",
      choix: [
        "Cunningham refuse toute forme de virtuosité technique",
        "Cunningham sépare la danse de toute intention émotionnelle précise et utilise le hasard",
        "Cunningham refuse de travailler avec des musiciens",
        "Cunningham revient au tutu et aux pointes classiques",
      ],
      bonneReponse: 1,
      explication:
        "Alors que Graham cherchait à exprimer des émotions précises, Cunningham considère que le mouvement n'a pas besoin de signifier une émotion donnée, et utilise le hasard pour composer.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "En quoi le projet de Maurice Béjart (danse populaire de masse) s'oppose-t-il, en partie, à l'esprit de la Nouvelle Danse française des années 1980 ?",
      reponse:
        "Béjart cherche à toucher un très large public dans de grandes salles, avec des spectacles spectaculaires et accessibles. La Nouvelle Danse française, elle, est portée par des chorégraphes souvent plus expérimentaux, qui explorent des univers personnels, parfois intimes ou théoriques (comme Maguy Marin s'inspirant de Beckett), destinés à un public plus habitué à la danse contemporaine, dans des salles souvent plus petites que celles de Béjart.",
      explication: "Une bonne réponse nuance : les deux démarches restent contemporaines, mais avec des publics et des ambitions différents.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente Angelin Preljocaj : sa date de création de compagnie, le lieu où elle est installée, et une caractéristique de son style.",
      reponse:
        "Angelin Preljocaj fonde sa compagnie en 1984. Depuis 2006, elle est installée au Pavillon Noir, à Aix-en-Provence. Son style mêle une grande précision technique, une prise de risque physique et des thèmes forts, parfois issus du répertoire classique qu'il réinvente, comme dans Roméo et Juliette ou Le Parc.",
      explication: "Preljocaj illustre bien le dialogue permanent entre danse contemporaine et héritage classique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique pourquoi on peut dire que la danse contemporaine est un art « en dialogue permanent » avec les autres formes artistiques.",
      reponse:
        "La danse contemporaine intègre régulièrement la vidéo, les arts plastiques, la lumière et le texte à ses créations (comme le théâtre dansé de Pina Bausch). Elle accueille des corps très différents de ceux du ballet classique, sort parfois des théâtres pour investir la rue ou les musées, et continue à dialoguer avec le ballet classique (Preljocaj) comme avec les danses urbaines. Cette ouverture permanente à d'autres langages artistiques et à d'autres publics est l'une de ses caractéristiques essentielles.",
      explication: "Une bonne réponse cite plusieurs exemples précis vus dans le chapitre pour illustrer ce dialogue.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Merce Cunningham collaborait souvent avec le musicien :",
      choix: ["Igor Stravinsky", "John Cage", "Maurice Ravel", "Piotr Ilitch Tchaïkovski"],
      bonneReponse: 1,
      explication: "Cunningham et Cage composaient souvent danse et musique de façon totalement indépendante.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que le Tanztheater ?",
      reponse: "Le théâtre dansé inventé par Pina Bausch à Wuppertal, qui mêle danse, théâtre, texte et objets du quotidien.",
      explication: "Bausch en prend la direction du ballet de la ville en 1973.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Maurice Béjart fonde le Ballet du XXe siècle en 1960, dans quelle ville ?",
      choix: ["Paris", "Bruxelles", "Lausanne", "Berlin"],
      bonneReponse: 1,
      explication: "Béjart le fonde à Bruxelles, avant d'installer sa compagnie à Lausanne en 1987.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'appelle-t-on la Nouvelle Danse française ?",
      reponse: "La génération de chorégraphes français qui émerge dans les années 1980, soutenue par l'État (Centres chorégraphiques nationaux).",
      explication: "Parmi eux : Maguy Marin, Gallotta, Bagouet, Chopinot, Preljocaj.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Où est installé le Ballet Preljocaj depuis 2006 ?",
      reponse: "Au Pavillon Noir, à Aix-en-Provence.",
      explication: "Angelin Preljocaj a fondé sa compagnie en 1984.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La danse contemporaine",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La danse contemporaine se développe surtout à partir de :",
          choix: ["1830", "1900", "1950-1960", "2000"],
          bonneReponse: 2,
          explication: "Elle prolonge la danse moderne à partir des années 1950-1960.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qui distingue fondamentalement la danse contemporaine des techniques codifiées du ballet ou de la danse moderne ?",
          reponse: "Elle refuse toute technique unique et imposée : chaque chorégraphe invente son propre langage de mouvement.",
          explication: "C'est le principe le plus important à retenir de ce chapitre.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Merce Cunningham utilise le hasard dans ses créations, notamment pour :",
          choix: [
            "Choisir les costumes uniquement",
            "Décider de l'ordre des mouvements",
            "Choisir la salle de spectacle",
            "Éviter d'avoir de la musique",
          ],
          bonneReponse: 1,
          explication: "Le tirage au sort pouvait déterminer l'enchaînement des séquences dansées.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite le titre d'une œuvre de Pina Bausch et décris-la brièvement.",
          reponse:
            "Le Sacre du printemps (1975) : les danseurs évoluent sur un sol recouvert de terre, dans une version intense et physique du ballet de Stravinsky. On peut aussi citer Café Müller (1978), où des danseurs errent les yeux fermés entre des tables et des chaises.",
          explication: "Ces œuvres illustrent le style physique et théâtral du Tanztheater.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi peut-on dire que Maurice Béjart voulait « démocratiser » la danse ?",
          reponse: "Parce qu'il cherchait à toucher un très large public, en jouant ses ballets dans de grandes salles ou des palais des sports devant des milliers de spectateurs, plutôt que dans des théâtres réservés à un public restreint.",
          explication: "Boléro (1961), son ballet le plus célèbre, illustre ce succès populaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : compare les démarches de Merce Cunningham et de Pina Bausch. En quoi sont-elles différentes, bien qu'appartenant toutes deux à la danse contemporaine ?",
          reponse:
            "Cunningham cherche à séparer la danse de toute signification émotionnelle précise : le mouvement existe pour lui-même, souvent organisé par le hasard, indépendamment de la musique. Bausch, au contraire, cherche à exprimer des émotions et des situations humaines très fortes, en mêlant danse, théâtre, texte et objets du quotidien dans son Tanztheater. L'un explore l'abstraction et le hasard, l'autre le théâtre et l'émotion : deux façons très différentes de renouveler la danse après la danse moderne, ce qui montre bien qu'il n'existe pas une seule « danse contemporaine » mais une multiplicité de démarches.",
          explication: "Une bonne réponse identifie clairement les deux logiques opposées (abstraction/hasard vs théâtre/émotion) sans les confondre.",
        },
      ],
    },
    {
      titre: "Examen 2 — La danse contemporaine",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pina Bausch dirige le ballet de quelle ville allemande ?",
          choix: ["Berlin", "Munich", "Wuppertal", "Hambourg"],
          bonneReponse: 2,
          explication: "Pina Bausch dirige le Ballet de Wuppertal à partir de 1973, qu'elle transforme en Tanztheater.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "En quelle année Angelin Preljocaj fonde-t-il sa compagnie ?",
          reponse: "En 1984.",
          explication: "Elle est installée depuis 2006 au Pavillon Noir, à Aix-en-Provence.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Qu'ont en commun les Centres chorégraphiques nationaux créés dans les années 1980 ?",
          choix: [
            "Ils interdisent la danse contemporaine",
            "Ils sont soutenus par l'État et donnent des moyens aux compagnies",
            "Ils ne concernent que le ballet classique",
            "Ils n'existent qu'à Paris",
          ],
          bonneReponse: 1,
          explication: "Ce soutien public a permis l'essor de la Nouvelle Danse française dans plusieurs villes.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux chorégraphes de la Nouvelle Danse française, en dehors de Preljocaj.",
          reponse: "Maguy Marin et Jean-Claude Gallotta (on peut aussi citer Dominique Bagouet ou Régine Chopinot).",
          explication: "Cette génération émerge en France dans les années 1980.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que le ballet Boléro de Béjart et sur quelle musique est-il dansé ?",
          reponse: "Un ballet créé en 1961, dansé autour d'une table ronde par un interprète entouré d'un groupe, sur la musique répétitive de Maurice Ravel.",
          explication: "C'est l'un des ballets les plus populaires du répertoire du XXe siècle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : en quoi Angelin Preljocaj illustre-t-il le dialogue entre danse contemporaine et danse classique ? Utilise des exemples précis.",
          reponse:
            "Preljocaj revisite parfois directement des œuvres du répertoire classique, comme Roméo et Juliette ou Le Parc, mais avec un langage contemporain : prise de risque physique, thèmes actuels, précision technique héritée du classique mais mise au service d'un propos souvent plus sombre ou plus sensuel que dans les versions académiques. Il montre ainsi que la danse contemporaine ne rejette pas forcément l'héritage classique : elle peut au contraire s'en emparer pour le réinventer et le questionner.",
          explication: "Une bonne réponse évite de présenter danse classique et danse contemporaine comme deux mondes totalement séparés.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La danse contemporaine prolonge la liberté de la danse moderne, sans technique unique imposée : chaque chorégraphe invente son propre langage.",
    "Merce Cunningham (compagnie fondée en 1953) : le hasard, et la séparation entre danse et musique, avec le musicien John Cage.",
    "Pina Bausch : prend la direction du Ballet de Wuppertal en 1973 et invente le Tanztheater (Le Sacre du printemps, 1975 ; Café Müller, 1978).",
    "Maurice Béjart : fonde le Ballet du XXe siècle à Bruxelles en 1960, veut une danse populaire de masse ; Boléro (1961, musique de Ravel).",
    "Années 1980 en France : soutien de l'État, Centres chorégraphiques nationaux, essor de la Nouvelle Danse française (Maguy Marin, Gallotta...).",
    "Angelin Preljocaj fonde sa compagnie en 1984, installée depuis 2006 au Pavillon Noir, à Aix-en-Provence.",
  ],
},
{
  slug: "danse-moderne",
  titre: "La danse moderne : de Duncan à Graham",
  matiere: "histoire-danse",
  niveau: "3eme",
  description:
    "Comprendre la révolution de la danse moderne : à la fin du XIXe et au début du XXe siècle, des pionnières et pionniers rompent avec le ballet classique pour inventer un mouvement libre et expressif, d'Isadora Duncan à Martha Graham, jusqu'à l'expressionnisme allemand et l'héritage contemporain.",
  objectifs: [
    "Expliquer pourquoi et comment la danse moderne rompt avec le ballet classique",
    "Connaître les pionnières : Isadora Duncan (pieds nus, mouvement naturel) et Loïe Fuller (voiles et lumière)",
    "Situer Ruth St. Denis et Ted Shawn et le rôle de l'école Denishawn (1915)",
    "Connaître Martha Graham, sa compagnie fondée en 1926 et sa technique contraction-release",
    "Identifier José Limón et l'expressionnisme allemand (Mary Wigman, puis Pina Bausch)",
    "Comprendre l'héritage de la danse moderne dans la danse contemporaine",
  ],
  slides: [
    {
      titre: "Rompre avec le ballet classique",
      illustration: "⛓️",
      visuel: "Fin XIXe - début XXe",
      contenu: [
        "À la fin du XIXe siècle, le ballet classique semble figé : pointes, tutus, contes de fées",
        "Des artistes veulent danser autrement : exprimer des émotions vraies",
        "Refus des codes : plus de positions imposées, plus de corset, plus de pointes",
        "La danse moderne naît surtout aux États-Unis et en Allemagne",
      ],
      voixOff:
        "À la fin du dix-neuvième siècle, le ballet classique semble tourner en rond : toujours des pointes, des tutus, des princesses et des contes de fées. Une nouvelle génération d'artistes étouffe dans ces codes. Leur rêve ? Danser autrement, exprimer des émotions vraies avec un corps libre. Ils abandonnent le corset, les pointes et les cinq positions. Cette révolution, c'est la danse moderne, et elle va naître surtout aux États-Unis et en Allemagne.",
    },
    {
      titre: "Isadora Duncan : pieds nus et liberté",
      illustration: "🌊",
      visuel: "Isadora Duncan (1877-1927)",
      contenu: [
        "Américaine, elle danse pieds nus, en tunique légère inspirée de la Grèce antique",
        "Elle cherche le mouvement naturel : la vague, le vent, la respiration",
        "Pour elle, le mouvement part du plexus solaire, centre du corps",
        "Elle danse sur de grands compositeurs (Chopin, Beethoven) et triomphe en Europe",
      ],
      voixOff:
        "Imagine le scandale : vers dix-neuf cents, l'Américaine Isadora Duncan monte sur scène pieds nus, sans corset, vêtue d'une simple tunique inspirée de la Grèce antique. Elle ne veut plus de pas codifiés : elle cherche le mouvement naturel, celui de la vague, du vent, de la respiration. Pour elle, tout mouvement naît du plexus solaire, au centre du corps. L'Europe entière se passionne pour cette danseuse libre : la danse moderne a trouvé sa pionnière.",
    },
    {
      titre: "Loïe Fuller : la fée lumière",
      illustration: "💡",
      visuel: "La Danse serpentine",
      contenu: [
        "Américaine installée à Paris, célèbre aux Folies Bergère dès 1892",
        "Sa Danse serpentine : d'immenses voiles de soie qu'elle fait tournoyer",
        "Pionnière des éclairages électriques colorés : le corps devient fleur, flamme, papillon",
        "Elle inspire les artistes de l'Art nouveau et annonce les arts de la scène modernes",
      ],
      voixOff:
        "Autre Américaine, autre révolution : Loïe Fuller. À Paris, aux Folies Bergère, à partir de dix-huit cent quatre-vingt-douze, elle fait tournoyer d'immenses voiles de soie dans sa fameuse Danse serpentine. Surtout, elle est une pionnière de la lumière électrique, toute nouvelle à l'époque : sous ses projecteurs colorés, son corps devient fleur, flamme ou papillon. Avec elle, la danse devient aussi un art de la lumière et de l'image.",
    },
    {
      titre: "Denishawn : la première grande école",
      illustration: "🏫",
      visuel: "Denishawn — 1915",
      contenu: [
        "Ruth St. Denis, fascinée par les danses d'Orient, et Ted Shawn, pionnier de la danse masculine",
        "En 1915, ils fondent ensemble l'école Denishawn à Los Angeles",
        "Première grande école de danse moderne américaine",
        "Ses élèves les plus célèbres : Martha Graham, Doris Humphrey, Charles Weidman",
      ],
      voixOff:
        "La danse moderne a maintenant besoin d'une école. En dix-neuf cent quinze, Ruth St. Denis, fascinée par les danses d'Orient, et son mari Ted Shawn, grand défenseur de la danse masculine, fondent à Los Angeles l'école Denishawn. C'est la première grande école de danse moderne américaine. Et regarde bien les noms de ses élèves : Martha Graham, Doris Humphrey, Charles Weidman. Toute la génération suivante de la danse moderne sort de Denishawn !",
    },
    {
      titre: "Martha Graham : la révolution de 1926",
      illustration: "🔥",
      visuel: "Martha Graham — 1926",
      contenu: [
        "Élève de Denishawn, elle s'en émancipe et fonde sa compagnie à New York en 1926",
        "Elle veut exprimer les passions humaines : peur, colère, désir, deuil",
        "Œuvres marquantes : Lamentation (1930), Appalachian Spring (1944)",
        "Elle crée une technique complète, enseignée aujourd'hui dans le monde entier",
      ],
      voixOff:
        "Voici la figure majeure de la danse moderne : Martha Graham. Formée chez Denishawn, elle s'en émancipe et fonde sa propre compagnie à New York en dix-neuf cent vingt-six. Son but : exprimer les passions humaines les plus profondes, la peur, la colère, le désir, le deuil. Dans Lamentation, en dix-neuf cent trente, elle danse le chagrin, enfermée dans un fourreau de tissu violet. Graham ne se contente pas de créer des œuvres : elle invente une technique complète, encore enseignée partout dans le monde.",
    },
    {
      titre: "Contraction-release : danser la respiration",
      illustration: "🫁",
      visuel: "Contraction ↔ Release",
      contenu: [
        "Le principe central de la technique Graham",
        "Contraction : le centre du corps se creuse, comme sur une expiration ; le dos s'arrondit",
        "Release : le corps se libère et s'allonge, comme sur une inspiration",
        "Le mouvement part du centre du corps (le bassin), pas des jambes ; le sol devient un partenaire",
      ],
      voixOff:
        "La technique Graham repose sur un principe simple et puissant : contraction et release. La contraction : le centre du corps se creuse brusquement, comme lors d'une expiration, et le dos s'arrondit. Le release : le corps se libère et s'allonge, comme lors d'une inspiration. Tout le mouvement part du centre du corps, du bassin, et non des jambes comme dans le ballet. Et contrairement à la ballerine aérienne, la danseuse moderne travaille au sol : la terre devient un partenaire.",
    },
    {
      titre: "José Limón : la chute et le rebond",
      illustration: "🌗",
      visuel: "José Limón (1908-1972)",
      contenu: [
        "Danseur et chorégraphe américain d'origine mexicaine",
        "Formé par Doris Humphrey, dont il prolonge le principe fall and recovery (chute et rattrapage)",
        "Fonde sa compagnie en 1946 ; chef-d'œuvre : The Moor's Pavane (1949), d'après Othello",
        "Son style ample et musical redonne au danseur masculin un grand répertoire",
      ],
      voixOff:
        "Dans la génération suivante, retiens José Limón, danseur américain d'origine mexicaine. Son maître, la chorégraphe Doris Humphrey, avait fondé sa danse sur le déséquilibre : fall and recovery, la chute et le rattrapage. Limón prolonge ce principe dans un style ample et très musical. En dix-neuf cent quarante-six, il fonde sa compagnie, et en dix-neuf cent quarante-neuf il crée son chef-d'œuvre, The Moor's Pavane, inspiré d'Othello de Shakespeare. Avec lui, la danse masculine moderne gagne ses lettres de noblesse.",
    },
    {
      titre: "L'expressionnisme allemand : Mary Wigman",
      illustration: "🎭",
      visuel: "Ausdruckstanz",
      contenu: [
        "En Allemagne, la danse moderne s'appelle Ausdruckstanz : la danse d'expression",
        "Mary Wigman (1886-1973), figure majeure : danses sombres, intenses, parfois masquées",
        "Sa Danse de la sorcière (Hexentanz) explore les forces obscures de l'être humain",
        "Elle danse parfois sans musique, ou avec des percussions seules",
      ],
      voixOff:
        "Pendant ce temps, en Allemagne, une autre danse moderne s'invente : l'Ausdruckstanz, la danse d'expression. Sa grande figure est Mary Wigman. Ses danses sont sombres, intenses, parfois masquées, comme sa célèbre Danse de la sorcière, où elle explore les forces obscures de l'être humain. Wigman ose même danser sans musique, ou accompagnée de simples percussions. L'expressionnisme allemand marquera profondément la danse du vingtième siècle.",
    },
    {
      titre: "Vers Pina Bausch et la danse contemporaine",
      illustration: "🌸",
      visuel: "Héritage contemporain",
      contenu: [
        "L'expressionnisme allemand se prolonge avec Pina Bausch (1940-2009) et son Tanztheater de Wuppertal",
        "Elle mêle danse et théâtre : « Ce qui m'intéresse, ce n'est pas comment les gens bougent, mais ce qui les meut »",
        "La danse moderne ouvre la voie à la danse contemporaine : liberté des corps, des thèmes et des formes",
        "Aujourd'hui, tout danseur contemporain est un héritier de Duncan, Graham et Wigman",
      ],
      voixOff:
        "L'héritage de l'expressionnisme allemand se prolonge jusqu'à Pina Bausch, qui crée à partir des années soixante-dix son théâtre dansé, le Tanztheater de Wuppertal. Sa phrase est restée célèbre : ce qui l'intéresse, ce n'est pas comment les gens bougent, mais ce qui les meut. Plus largement, la danse moderne a ouvert la voie à toute la danse contemporaine : liberté des corps, des thèmes, des formes. Chaque danseur contemporain d'aujourd'hui est un héritier de Duncan, de Graham et de Wigman.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Fin XIXe - début XXe : rupture avec le ballet classique, aux États-Unis et en Allemagne",
        "Pionnières : Isadora Duncan (pieds nus, mouvement naturel) et Loïe Fuller (voiles et lumière)",
        "1915 : école Denishawn (Ruth St. Denis et Ted Shawn) — 1926 : compagnie de Martha Graham",
        "Graham : contraction-release ; Limón : chute et rebond ; Wigman : expressionnisme allemand",
        "Héritage : la danse contemporaine, jusqu'à Pina Bausch",
      ],
      voixOff:
        "Résumons cette grande aventure. À la charnière du dix-neuvième et du vingtième siècle, des artistes rompent avec le ballet classique. Isadora Duncan danse pieds nus le mouvement naturel, Loïe Fuller sculpte la lumière. En dix-neuf cent quinze, Ruth St. Denis et Ted Shawn fondent l'école Denishawn, d'où sort Martha Graham, qui crée sa compagnie en dix-neuf cent vingt-six et sa technique de contraction-release. José Limón développe la chute et le rebond, tandis qu'en Allemagne Mary Wigman invente la danse d'expression, dont héritera Pina Bausch. De cette révolution est née toute la danse contemporaine. Bravo, tu maîtrises la danse moderne !",
    },
  ],
  fiche: {
    intro:
      "À la fin du XIXe et au début du XXe siècle, des artistes américains et allemands rompent avec les codes du ballet classique (pointes, tutus, positions) pour inventer la danse moderne : un mouvement libre, parti du centre du corps, au service de l'expression des émotions.",
    sections: [
      {
        titre: "La rupture avec le ballet classique",
        points: [
          "Fin XIXe - début XXe siècle : le ballet classique paraît figé dans ses codes",
          "Refus des pointes, du corset, des positions codifiées et des contes de fées",
          "Objectif : exprimer des émotions vraies avec un corps libre",
          "Deux foyers principaux : les États-Unis et l'Allemagne",
        ],
      },
      {
        titre: "Les pionnières : Duncan et Fuller",
        points: [
          "Isadora Duncan (1877-1927) : danse pieds nus, en tunique grecque ; mouvement naturel (vague, vent, respiration) né du plexus solaire",
          "Loïe Fuller (1862-1928) : Danse serpentine aux Folies Bergère (1892), immenses voiles de soie et éclairages électriques colorés",
          "Deux Américaines qui triomphent en Europe et libèrent le corps dansant",
        ],
      },
      {
        titre: "Denishawn (1915), le berceau américain",
        points: [
          "École fondée à Los Angeles en 1915 par Ruth St. Denis et Ted Shawn",
          "Ruth St. Denis : inspiration des danses d'Orient ; Ted Shawn : pionnier de la danse masculine",
          "Élèves célèbres : Martha Graham, Doris Humphrey, Charles Weidman",
        ],
      },
      {
        titre: "Martha Graham et la technique moderne",
        points: [
          "Fonde sa compagnie à New York en 1926 : point de départ de la modern dance structurée",
          "Principe de la contraction (le centre se creuse, expiration) et du release (le corps se libère, inspiration)",
          "Le mouvement part du centre du corps (bassin) ; travail au sol ; expression des passions humaines",
          "Œuvres : Lamentation (1930), Appalachian Spring (1944)",
        ],
      },
      {
        titre: "José Limón et la deuxième génération",
        points: [
          "José Limón (1908-1972), Américain d'origine mexicaine, formé par Doris Humphrey",
          "Prolonge le principe fall and recovery (chute et rattrapage) dans un style ample et musical",
          "Compagnie fondée en 1946 ; chef-d'œuvre : The Moor's Pavane (1949), d'après Othello",
        ],
      },
      {
        titre: "L'expressionnisme allemand et l'héritage",
        points: [
          "Ausdruckstanz (danse d'expression) : Mary Wigman (1886-1973), danses sombres et intenses (Danse de la sorcière), parfois sans musique",
          "Prolongement : Pina Bausch (1940-2009) et le Tanztheater de Wuppertal, entre danse et théâtre",
          "La danse moderne ouvre la voie à la danse contemporaine : liberté des corps, des thèmes et des formes",
        ],
      },
    ],
    audio:
      "Fiche de révision : la danse moderne. À la fin du dix-neuvième siècle et au début du vingtième, des artistes rompent avec le ballet classique, jugé figé : ils refusent les pointes, le corset et les positions codifiées pour exprimer des émotions vraies. Isadora Duncan danse pieds nus, en tunique grecque, et cherche le mouvement naturel né du plexus solaire. Loïe Fuller, avec sa Danse serpentine, sculpte ses voiles de soie sous des lumières électriques colorées. En dix-neuf cent quinze, Ruth St. Denis et Ted Shawn fondent à Los Angeles l'école Denishawn, où se forment Martha Graham et Doris Humphrey. Graham fonde sa compagnie à New York en dix-neuf cent vingt-six et invente la technique de la contraction et du release, fondée sur la respiration et le centre du corps. José Limón développe ensuite la chute et le rebond. En Allemagne, Mary Wigman crée la danse d'expression, dont hérite Pina Bausch et son théâtre dansé. De cette révolution est née la danse contemporaine.",
  },
  memoCards: [
    {
      recto: "Contre quoi la danse moderne se construit-elle ?",
      verso: "Contre les codes du ballet classique : pointes, tutus, corset, positions codifiées, contes de fées.",
    },
    {
      recto: "Isadora Duncan : ses trois grandes innovations ?",
      verso: "Danser pieds nus en tunique grecque, chercher le mouvement naturel (vague, vent, respiration), faire partir le mouvement du plexus solaire.",
    },
    {
      recto: "Qui est Loïe Fuller ?",
      verso: "Américaine célèbre aux Folies Bergère dès 1892 : sa Danse serpentine mêle immenses voiles de soie et éclairages électriques colorés.",
    },
    {
      recto: "Denishawn : qui, où, quand ?",
      verso: "École fondée par Ruth St. Denis et Ted Shawn à Los Angeles en 1915. Élèves célèbres : Martha Graham, Doris Humphrey, Charles Weidman.",
    },
    {
      recto: "En quelle année Martha Graham fonde-t-elle sa compagnie ?",
      verso: "En 1926, à New York. C'est une date clé de la danse moderne.",
    },
    {
      recto: "Qu'est-ce que la contraction-release ?",
      verso: "Le principe central de la technique Graham : contraction (le centre du corps se creuse, comme une expiration) puis release (le corps se libère et s'allonge, comme une inspiration).",
    },
    {
      recto: "Deux œuvres majeures de Martha Graham ?",
      verso: "Lamentation (1930) et Appalachian Spring (1944).",
    },
    {
      recto: "Qui est José Limón ?",
      verso: "Danseur et chorégraphe américain d'origine mexicaine (1908-1972), formé par Doris Humphrey. Principe de la chute et du rattrapage ; chef-d'œuvre : The Moor's Pavane (1949).",
    },
    {
      recto: "Qu'est-ce que l'Ausdruckstanz et qui l'incarne ?",
      verso: "La « danse d'expression », version allemande de la danse moderne. Sa grande figure est Mary Wigman (Danse de la sorcière), parfois sans musique.",
    },
    {
      recto: "Qui est Pina Bausch ?",
      verso: "Chorégraphe allemande (1940-2009), héritière de l'expressionnisme. Elle crée le Tanztheater de Wuppertal, entre danse et théâtre.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle danseuse est célèbre pour avoir dansé pieds nus, en tunique inspirée de la Grèce antique ?",
      choix: ["Martha Graham", "Isadora Duncan", "Mary Wigman", "Marie Taglioni"],
      bonneReponse: 1,
      explication:
        "Isadora Duncan, pionnière américaine de la danse moderne, dansait pieds nus et cherchait le mouvement naturel.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "À quelle période naît la danse moderne ?",
      choix: [
        "Au XVIIe siècle, sous Louis XIV",
        "Vers 1830, à l'époque romantique",
        "À la fin du XIXe et au début du XXe siècle",
        "Dans les années 1980",
      ],
      bonneReponse: 2,
      explication:
        "La danse moderne naît à la charnière des XIXe et XXe siècles, en rupture avec le ballet classique, surtout aux États-Unis et en Allemagne.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment s'appelle la célèbre danse de Loïe Fuller, présentée aux Folies Bergère à partir de 1892 ?",
      reponse: "La Danse serpentine.",
      explication:
        "Loïe Fuller y faisait tournoyer d'immenses voiles de soie sous des éclairages électriques colorés.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année Martha Graham fonde-t-elle sa compagnie ?",
      choix: ["1892", "1915", "1926", "1946"],
      bonneReponse: 2,
      explication: "Martha Graham fonde sa compagnie à New York en 1926 : une date clé de la danse moderne.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui a fondé l'école Denishawn en 1915 ?",
      choix: [
        "Isadora Duncan et Loïe Fuller",
        "Ruth St. Denis et Ted Shawn",
        "Martha Graham et José Limón",
        "Mary Wigman et Pina Bausch",
      ],
      bonneReponse: 1,
      explication:
        "Ruth St. Denis et Ted Shawn ont fondé Denishawn à Los Angeles en 1915 : la première grande école de danse moderne américaine.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique le principe de la contraction-release chez Martha Graham.",
      reponse:
        "La contraction : le centre du corps se creuse brusquement, comme lors d'une expiration, et le dos s'arrondit. Le release : le corps se libère et s'allonge, comme lors d'une inspiration. Le mouvement part du centre du corps (le bassin), et non des jambes.",
      explication:
        "Ce principe, fondé sur la respiration, est le cœur de la technique Graham, encore enseignée dans le monde entier.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que signifie Ausdruckstanz, le nom de la danse moderne allemande ?",
      choix: ["Danse de la nuit", "Danse d'expression", "Danse libre", "Danse sans musique"],
      bonneReponse: 1,
      explication:
        "Ausdruckstanz signifie « danse d'expression » : Mary Wigman en est la grande figure, avec des danses sombres et intenses.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite trois élèves célèbres de l'école Denishawn.",
      reponse: "Martha Graham, Doris Humphrey et Charles Weidman.",
      explication:
        "Toute la génération suivante de la danse moderne américaine s'est formée chez Denishawn avant de s'en émanciper.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Sur quel principe Doris Humphrey, le maître de José Limón, fondait-elle sa danse ?",
      choix: [
        "La contraction et le release",
        "L'en-dehors et les cinq positions",
        "La chute et le rattrapage (fall and recovery)",
        "L'improvisation totale sans technique",
      ],
      bonneReponse: 2,
      explication:
        "Doris Humphrey fondait sa danse sur le déséquilibre : fall and recovery, la chute et le rattrapage, principe que Limón a prolongé dans son style ample et musical.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "En quoi la danse d'Isadora Duncan est-elle une rupture avec le ballet classique ? Donne au moins trois éléments précis.",
      reponse:
        "Elle danse pieds nus, alors que le ballet impose chaussons et pointes ; elle abandonne le corset et le tutu pour une simple tunique grecque ; elle refuse les positions et les pas codifiés au profit du mouvement naturel (vague, vent, respiration) ; enfin, chez elle le mouvement part du plexus solaire, le centre du corps, et non des jambes.",
      explication:
        "Duncan renverse point par point les codes classiques : costume, chaussures, vocabulaire de pas et origine du mouvement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Présente José Limón : origine, formation, principe de mouvement et œuvre majeure.",
      reponse:
        "José Limón (1908-1972) est un danseur et chorégraphe américain d'origine mexicaine, formé par Doris Humphrey. Il prolonge le principe de la chute et du rattrapage (fall and recovery) dans un style ample et musical. Il fonde sa compagnie en 1946 et crée en 1949 son chef-d'œuvre, The Moor's Pavane, inspiré d'Othello de Shakespeare.",
      explication:
        "Limón incarne la deuxième génération de la danse moderne américaine et redonne un grand répertoire à la danse masculine.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Qu'est-ce que le Tanztheater de Pina Bausch, et de quel courant est-elle l'héritière ?",
      reponse:
        "Le Tanztheater (théâtre dansé), développé par Pina Bausch à Wuppertal à partir des années 1970, mêle danse et théâtre : gestes quotidiens, parole, décors spectaculaires, pour explorer les sentiments humains. Pina Bausch est l'héritière de l'expressionnisme allemand (Ausdruckstanz) de Mary Wigman.",
      explication:
        "Sa devise résume le projet : ce qui l'intéresse n'est pas comment les gens bougent, mais ce qui les meut.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La danse moderne naît principalement dans deux pays :",
      choix: ["France et Italie", "États-Unis et Allemagne", "Russie et Angleterre", "Espagne et Mexique"],
      bonneReponse: 1,
      explication:
        "Les pionnières américaines (Duncan, Fuller, St. Denis) et l'expressionnisme allemand (Wigman) sont les deux foyers de la danse moderne.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle pionnière de la danse moderne faisait tournoyer des voiles sous des lumières électriques colorées ?",
      reponse: "Loïe Fuller, avec sa Danse serpentine (Folies Bergère, à partir de 1892).",
      explication: "Elle fut une pionnière des éclairages électriques sur scène.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne les deux dates clés associées à Denishawn et à la compagnie de Martha Graham.",
      reponse: "1915 : fondation de l'école Denishawn ; 1926 : fondation de la compagnie de Martha Graham.",
      explication: "Graham s'est formée chez Denishawn avant de fonder sa propre compagnie à New York.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le principe technique central de Martha Graham est :",
      choix: ["L'en-dehors", "La contraction-release", "Le grand écart", "La pirouette"],
      bonneReponse: 1,
      explication:
        "La contraction (le centre se creuse, expiration) et le release (le corps se libère, inspiration) sont le cœur de la technique Graham.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qui est la grande figure de l'expressionnisme allemand en danse, et quelle chorégraphe en est l'héritière ?",
      reponse: "Mary Wigman est la grande figure de l'Ausdruckstanz ; Pina Bausch, avec son Tanztheater de Wuppertal, en est l'héritière.",
      explication: "L'expressionnisme allemand privilégie l'intensité des émotions, parfois sans musique.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La danse moderne",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Lequel de ces refus caractérise les pionniers de la danse moderne ?",
          choix: [
            "Le refus de la musique",
            "Le refus des pointes, du corset et des positions codifiées",
            "Le refus de danser en public",
            "Le refus des théâtres",
          ],
          bonneReponse: 1,
          explication:
            "La danse moderne rejette les codes du ballet classique (pointes, corset, positions) pour libérer le corps et l'expression.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "D'où part le mouvement chez Isadora Duncan, et quelles sources d'inspiration naturelles cite-t-on ?",
          reponse:
            "Le mouvement part du plexus solaire, le centre du corps. Duncan s'inspire de la nature : la vague, le vent, la respiration.",
          explication:
            "C'est l'opposé du ballet classique, où le vocabulaire repose sur les positions des jambes et des bras.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans quelle ville l'école Denishawn a-t-elle été fondée en 1915 ?",
          choix: ["New York", "Paris", "Los Angeles", "Berlin"],
          bonneReponse: 2,
          explication: "Ruth St. Denis et Ted Shawn ont fondé Denishawn à Los Angeles en 1915.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux œuvres de Martha Graham avec leurs dates.",
          reponse: "Lamentation (1930) et Appalachian Spring (1944).",
          explication:
            "Dans Lamentation, Graham danse le chagrin enfermée dans un fourreau de tissu ; Appalachian Spring, sur une musique d'Aaron Copland, est son œuvre la plus célèbre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Quelles sont les particularités de la danse de Mary Wigman ? Donne au moins deux éléments.",
          reponse:
            "Ses danses sont sombres et intenses, explorant les forces obscures de l'être humain (comme dans la Danse de la sorcière) ; elle utilise parfois des masques ; elle danse parfois sans musique ou avec des percussions seules.",
          explication:
            "Wigman incarne l'Ausdruckstanz, la danse d'expression allemande, plus tourmentée que la danse moderne américaine.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : pourquoi peut-on dire que la danse moderne est une révolution du corps autant qu'une révolution artistique ? Développe avec des exemples précis.",
          reponse:
            "C'est une révolution du corps car elle libère physiquement les danseurs : pieds nus au lieu des pointes (Duncan), abandon du corset, mouvement parti du centre du corps et travail au sol (Graham), acceptation du déséquilibre et de la chute (Humphrey et Limón). C'est aussi une révolution artistique : la danse n'illustre plus des contes de fées mais exprime des émotions humaines réelles (le deuil dans Lamentation, les forces obscures chez Wigman), et chaque chorégraphe invente sa propre technique au lieu de suivre un code unique. Corps libéré et expression personnelle vont donc de pair.",
          explication:
            "Une bonne réponse articule la dimension physique (costume, pieds nus, sol, centre du corps) et la dimension artistique (émotions vraies, techniques personnelles).",
        },
      ],
    },
    {
      titre: "Examen 2 — La danse moderne",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle pionnière de la danse moderne était surnommée la « fée lumière » pour ses jeux d'éclairages électriques ?",
          choix: ["Isadora Duncan", "Loïe Fuller", "Ruth St. Denis", "Martha Graham"],
          bonneReponse: 1,
          explication:
            "Loïe Fuller, célèbre pour sa Danse serpentine aux Folies Bergère (1892), fut une pionnière des éclairages électriques colorés.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel rôle Ted Shawn a-t-il joué pour la danse masculine ?",
          reponse:
            "Ted Shawn, cofondateur de Denishawn, fut un pionnier de la danse masculine : il a défendu et développé la place des hommes dans la danse moderne.",
          explication:
            "Après le déclin du danseur à l'époque romantique, Shawn a contribué à redonner aux hommes une place de premier plan.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "The Moor's Pavane (1949), chef-d'œuvre de José Limón, s'inspire de :",
          choix: [
            "Roméo et Juliette de Shakespeare",
            "Othello de Shakespeare",
            "Giselle",
            "La mythologie grecque",
          ],
          bonneReponse: 1,
          explication:
            "The Moor's Pavane condense le drame d'Othello de Shakespeare pour quatre danseurs.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Range dans l'ordre chronologique avec les dates : fondation de la compagnie Graham, Danse serpentine de Fuller aux Folies Bergère, The Moor's Pavane de Limón, fondation de Denishawn.",
          reponse:
            "Danse serpentine de Fuller (1892) ; fondation de Denishawn (1915) ; fondation de la compagnie Graham (1926) ; The Moor's Pavane de Limón (1949).",
          explication:
            "Cette frise résume trois générations : les pionnières, l'école Denishawn, puis Graham et Limón.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Compare l'origine du mouvement dans le ballet classique et dans la technique Graham.",
          reponse:
            "Dans le ballet classique, le mouvement repose sur les positions des jambes et l'en-dehors : il part des jambes et vise l'élévation, la légèreté. Chez Graham, le mouvement part du centre du corps (le bassin), suit le rythme de la respiration (contraction-release) et accepte le poids : la danseuse travaille au sol, qui devient un partenaire.",
          explication:
            "Cette opposition centre/jambes et sol/élévation résume la rupture entre danse classique et danse moderne.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : que doit la danse contemporaine d'aujourd'hui aux pionniers de la danse moderne ? Appuie-toi sur au moins trois héritages précis.",
          reponse:
            "La danse contemporaine hérite d'abord de la liberté du corps conquise par Duncan : danser pieds nus, sans costume contraignant, avec des mouvements non codifiés. Elle hérite ensuite de l'idée que chaque chorégraphe peut inventer son propre langage, comme Graham avec la contraction-release ou Limón avec la chute et le rebond, au lieu d'appliquer un code unique. Elle hérite aussi du travail au sol et de l'usage du poids du corps, introduits par la danse moderne. Enfin, elle hérite du lien entre danse et autres arts : la lumière chez Loïe Fuller, le théâtre chez Pina Bausch, et de l'ambition d'exprimer l'être humain réel plutôt que des personnages de contes.",
          explication:
            "Une bonne réponse cite des héritages concrets (pieds nus, techniques personnelles, sol et poids, mélange des arts) en les reliant aux pionniers correspondants.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Fin XIXe - début XXe siècle : la danse moderne rompt avec le ballet classique (pointes, corset, positions codifiées), surtout aux États-Unis et en Allemagne.",
    "Isadora Duncan (1877-1927) danse pieds nus, en tunique grecque : mouvement naturel né du plexus solaire.",
    "Loïe Fuller : Danse serpentine aux Folies Bergère (1892), voiles de soie et pionnière des éclairages électriques.",
    "1915 : Ruth St. Denis et Ted Shawn fondent l'école Denishawn à Los Angeles, où se forment Graham, Humphrey et Weidman.",
    "1926 : Martha Graham fonde sa compagnie à New York ; sa technique repose sur la contraction-release ; José Limón prolonge la chute et le rebond (The Moor's Pavane, 1949).",
    "En Allemagne, Mary Wigman incarne l'Ausdruckstanz (danse d'expression), dont hérite Pina Bausch (Tanztheater de Wuppertal) ; toute la danse contemporaine descend de cette révolution.",
  ],
},
{
  slug: "hip-hop-cultures-urbaines",
  titre: "Hip-hop et cultures urbaines",
  matiere: "histoire-danse",
  niveau: "3eme",
  description:
    "Retracer la naissance du hip-hop dans le Bronx à New York au début des années 1970, ses quatre éléments fondateurs, la culture de la breakdance et des autres danses urbaines (locking, popping), puis son arrivée en France dans les années 1980 et son entrée progressive dans les institutions de la danse.",
  objectifs: [
    "Situer la naissance du hip-hop dans le Bronx, à New York, au début des années 1970",
    "Connaître les quatre éléments fondateurs de la culture hip-hop et le rôle de DJ Kool Herc",
    "Décrire les techniques de la breakdance (b-boying) et distinguer locking et popping",
    "Retracer l'arrivée du hip-hop en France dans les années 1980",
    "Comprendre l'entrée du hip-hop dans les institutions de la danse (compagnies, Opéra, battles)",
  ],
  slides: [
    {
      titre: "Le Bronx, berceau du hip-hop",
      illustration: "🏙️",
      visuel: "New York, début des années 1970",
      contenu: [
        "Au début des années 1970, le Bronx, quartier de New York, est marqué par la pauvreté et les gangs",
        "Des jeunes, souvent afro-américains et latino-américains, inventent une culture nouvelle",
        "Elle naît dans la rue et les block parties, des fêtes de quartier organisées en plein air",
        "Cette culture deviendra le hip-hop, connu aujourd'hui dans le monde entier",
      ],
      voixOff:
        "Au début des années mille neuf cent soixante-dix, le Bronx, un quartier de New York, traverse une période très difficile : pauvreté, immeubles abandonnés, violence des gangs. C'est pourtant là que des jeunes, souvent afro-américains et latino-américains, inventent une culture nouvelle, pleine de créativité. Elle naît dans la rue, lors de block parties, des fêtes de quartier organisées en plein air ou dans des halls d'immeubles. Cette culture s'appellera bientôt le hip-hop.",
    },
    {
      titre: "DJ Kool Herc et la naissance du hip-hop",
      illustration: "🎧",
      visuel: "11 août 1973",
      contenu: [
        "DJ Kool Herc, DJ jamaïcain installé dans le Bronx, est considéré comme le père du hip-hop",
        "Le 11 août 1973, lors d'une fête organisée par sa sœur, il invente le « break-beat »",
        "Technique : faire tourner deux disques identiques pour prolonger le break, le passage rythmique",
        "Les danseurs les plus doués prennent alors le nom de b-boys et b-girls",
      ],
      voixOff:
        "Un nom domine cette naissance : DJ Kool Herc, un DJ d'origine jamaïcaine installé dans le Bronx. Le onze août mille neuf cent soixante-treize, lors d'une fête organisée par sa sœur, il a une idée géniale : en utilisant deux exemplaires du même disque, il prolonge indéfiniment le break, ce court passage rythmique où la musique se réduit à la batterie et à la percussion. Les danseurs adorent ce moment et rivalisent de figures sur ce rythme : on les appelle bientôt les b-boys et les b-girls, les danseurs et danseuses du break.",
    },
    {
      titre: "Les quatre éléments du hip-hop",
      illustration: "🎤",
      visuel: "DJing • MCing • Graffiti • Breaking",
      contenu: [
        "Le hip-hop n'est pas qu'une danse : c'est une culture avec quatre disciplines",
        "Le DJing : mixer et manipuler les disques (DJ Kool Herc, Grandmaster Flash)",
        "Le MCing : parler et chanter en rythme sur la musique (le futur rap)",
        "Le graffiti : peindre les murs et les rames de métro",
        "Le breaking (ou b-boying) : la danse née sur les breaks musicaux",
      ],
      voixOff:
        "Il faut bien comprendre que le hip-hop n'est pas seulement une danse : c'est une culture entière, organisée autour de quatre éléments fondateurs. Le DJing, l'art de mixer les disques, porté par des pionniers comme DJ Kool Herc ou Grandmaster Flash. Le MCing, l'art de parler et de chanter en rythme sur la musique, qui donnera naissance au rap. Le graffiti, l'art de peindre les murs et les rames de métro new-yorkaises. Et enfin le breaking, la danse née sur les breaks musicaux, aussi appelée b-boying.",
    },
    {
      titre: "Afrika Bambaataa et la Zulu Nation",
      illustration: "✊",
      visuel: "La Zulu Nation",
      contenu: [
        "Afrika Bambaataa, autre grande figure fondatrice du hip-hop dans le Bronx",
        "Ancien membre de gang, il fonde la Zulu Nation pour canaliser la violence des jeunes",
        "Son objectif : transformer les rivalités de gangs en compétitions artistiques pacifiques",
        "Le hip-hop devient ainsi une alternative positive à la violence urbaine",
      ],
      voixOff:
        "Autre figure essentielle : Afrika Bambaataa. Ancien membre de gang, il comprend que la musique et la danse peuvent canaliser l'énergie et la rivalité des jeunes du quartier. Il fonde la Zulu Nation, un mouvement qui veut transformer les affrontements de gangs en compétitions artistiques pacifiques : battles de danse, concours de graffiti, joutes de rap plutôt que bagarres. Grâce à des figures comme lui, le hip-hop devient une véritable alternative à la violence urbaine.",
    },
    {
      titre: "La breakdance : figures et vocabulaire",
      illustration: "🤸",
      visuel: "Toprock • Footwork • Power moves • Freeze",
      contenu: [
        "Le toprock : les pas dansés debout, qui introduisent la figure",
        "Le footwork (ou downrock) : le travail au sol, avec les jambes et les mains",
        "Les power moves : figures spectaculaires (moulinets, appuis sur la tête)",
        "Le freeze : un arrêt soudain, souvent en équilibre, pour conclure la figure",
      ],
      voixOff:
        "La breakdance possède un vocabulaire précis. Elle commence souvent par le toprock, des pas dansés debout qui introduisent le danseur sur la piste. Vient ensuite le footwork, ou downrock, le travail au sol où les jambes et les mains s'appuient et glissent au rythme de la musique. Les power moves sont les figures les plus spectaculaires, comme les moulinets sur le dos ou les appuis sur la tête. Enfin, le freeze conclut souvent la figure par un arrêt soudain, parfois en équilibre improbable, qui marque les esprits.",
    },
    {
      titre: "Locking et popping : les cousins californiens",
      illustration: "🕺",
      visuel: "Californie, fin des années 1960-1970",
      contenu: [
        "Le locking : inventé par Don Campbell (« Campbellock ») à Los Angeles, fin des années 1960",
        "Mouvements amples suivis de « blocages » (locks) soudains et de sourires expressifs",
        "Le popping : né en Californie avec les Electric Boogaloos, à Fresno",
        "Contraction et relâchement brusque des muscles, effet saccadé, presque robotique",
      ],
      voixOff:
        "Le hip-hop est parfois confondu avec d'autres danses urbaines nées à la même époque, mais ailleurs qu'à New York. Le locking, d'abord, inventé à la fin des années mille neuf cent soixante par Don Campbell, à Los Angeles : ses mouvements amples sont ponctués de blocages soudains, les locks, souvent accompagnés de sourires et de gestes expressifs vers le public. Le popping, ensuite, né en Californie avec le groupe des Electric Boogaloos, à Fresno : il repose sur la contraction et le relâchement brusque des muscles, créant un effet saccadé, presque robotique.",
    },
    {
      titre: "1984 : le hip-hop débarque en France",
      illustration: "📺",
      visuel: "H.I.P. H.O.P., TF1",
      contenu: [
        "Le hip-hop arrive en France au début des années 1980, via les États-Unis",
        "1984 : l'émission H.I.P. H.O.P., animée par Sidney sur TF1, révèle la culture hip-hop au grand public",
        "Première émission consacrée au hip-hop en Europe",
        "Des crews français se forment rapidement, comme les Paris City Breakers",
      ],
      voixOff:
        "Le hip-hop traverse l'Atlantique au tout début des années mille neuf cent quatre-vingt. Un moment clé : en dix-neuf cent quatre-vingt-quatre, la chaîne TF1 diffuse l'émission H.I.P. H.O.P., animée par Sidney, premier animateur noir de la télévision française. C'est la toute première émission consacrée au hip-hop en Europe, et elle révèle cette culture à des millions de jeunes téléspectateurs. Des groupes, ou crews, se forment alors rapidement en France, comme les Paris City Breakers, qui feront connaître le breaking français à l'étranger.",
    },
    {
      titre: "Le hip-hop entre dans les institutions de la danse",
      illustration: "🏛️",
      visuel: "De la rue à la scène",
      contenu: [
        "Dans les années 1990-2000, le hip-hop français gagne les scènes de théâtre",
        "Chorégraphes majeurs : Mourad Merzouki (compagnie Käfig), Kader Attou (Compagnie Accrorap)",
        "Kader Attou dirige depuis 2009 le Centre chorégraphique national de La Rochelle",
        "Le battle reste une compétition emblématique : par exemple Juste Debout, créé en France en 2002",
      ],
      voixOff:
        "À partir des années mille neuf cent quatre-vingt-dix, le hip-hop français quitte peu à peu la rue pour investir les scènes de théâtre. Des chorégraphes construisent de véritables spectacles hip-hop : Mourad Merzouki, avec sa compagnie Käfig, ou Kader Attou, avec la Compagnie Accrorap, qui dirige depuis deux mille neuf le Centre chorégraphique national de La Rochelle, une institution jusque-là réservée à la danse contemporaine. Le battle, la compétition de danse en face à face, reste cependant une tradition vivante : la compétition Juste Debout, créée en France en deux mille deux, rassemble aujourd'hui des danseurs du monde entier.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Le hip-hop naît dans le Bronx (New York) au début des années 1970, autour de DJ Kool Herc",
        "Quatre éléments fondateurs : DJing, MCing, graffiti, breaking (b-boying)",
        "Afrika Bambaataa et la Zulu Nation transforment la rivalité des gangs en battles pacifiques",
        "Locking (Don Campbell) et popping (Electric Boogaloos) naissent en Californie, dans le même esprit",
        "1984 : arrivée en France (émission H.I.P. H.O.P.) ; puis entrée dans les institutions (Käfig, Accrorap, CCN de La Rochelle)",
      ],
      voixOff:
        "Résumons. Au début des années mille neuf cent soixante-dix, dans le Bronx à New York, DJ Kool Herc invente le break-beat et fait naître la culture hip-hop, autour de quatre éléments : DJing, MCing, graffiti et breaking. Afrika Bambaataa, avec la Zulu Nation, transforme la violence des gangs en compétitions artistiques pacifiques. En Californie naissent, dans le même esprit, le locking de Don Campbell et le popping des Electric Boogaloos. En dix-neuf cent quatre-vingt-quatre, l'émission H.I.P. H.O.P. fait découvrir cette culture à la France, où elle donnera naissance à de grands chorégraphes comme Mourad Merzouki ou Kader Attou, aujourd'hui reconnus par les institutions de la danse. De la rue au théâtre, le hip-hop a parcouru un chemin extraordinaire !",
    },
  ],
  fiche: {
    intro:
      "Le hip-hop naît au début des années 1970 dans le Bronx, à New York, comme une culture de rue à part entière, organisée autour de quatre éléments : DJing, MCing, graffiti et breaking (la danse). Arrivé en France dans les années 1980, il est aujourd'hui reconnu par les institutions de la danse, sans jamais perdre son esprit de battle.",
    sections: [
      {
        titre: "Naissance dans le Bronx",
        points: [
          "Début des années 1970 : quartier du Bronx, à New York, marqué par la pauvreté et les gangs",
          "DJ Kool Herc invente le break-beat le 11 août 1973, lors d'une block party",
          "Afrika Bambaataa fonde la Zulu Nation pour transformer la violence des gangs en battles pacifiques",
        ],
      },
      {
        titre: "Les quatre éléments du hip-hop",
        points: [
          "DJing (mixer les disques), MCing (parler/chanter en rythme, ancêtre du rap)",
          "Graffiti (peindre les murs et le métro)",
          "Breaking, ou b-boying : la danse née sur les breaks musicaux",
        ],
      },
      {
        titre: "Le vocabulaire de la breakdance et les danses cousines",
        points: [
          "Breakdance : toprock (debout), footwork (au sol), power moves (spectaculaires), freeze (arrêt final)",
          "Locking : inventé par Don Campbell à Los Angeles, mouvements amples et blocages soudains",
          "Popping : né avec les Electric Boogaloos en Californie, contractions musculaires saccadées",
        ],
      },
      {
        titre: "Le hip-hop en France",
        points: [
          "1984 : émission H.I.P. H.O.P. sur TF1, animée par Sidney, révèle le hip-hop en Europe",
          "Crews français pionniers, comme les Paris City Breakers",
          "Institutionnalisation : compagnies Käfig (Mourad Merzouki), Accrorap (Kader Attou, CCN de La Rochelle depuis 2009)",
          "Le battle reste central : compétition Juste Debout, créée en France en 2002",
        ],
      },
    ],
    audio:
      "Fiche de révision : hip-hop et cultures urbaines. Le hip-hop naît au début des années mille neuf cent soixante-dix dans le Bronx, à New York, un quartier alors marqué par la pauvreté et la violence des gangs. Le onze août mille neuf cent soixante-treize, le DJ Kool Herc invente le break-beat lors d'une block party, une fête de quartier, en faisant tourner deux disques identiques pour prolonger le passage rythmique appelé break. Autour de lui se construit une culture entière, organisée en quatre éléments : le DJing, le MCing, ancêtre du rap, le graffiti, et le breaking, la danse née sur les breaks. Afrika Bambaataa fonde la Zulu Nation pour transformer les rivalités de gangs en compétitions artistiques pacifiques. En Californie naissent, dans le même esprit, le locking de Don Campbell et le popping du groupe des Electric Boogaloos. Le hip-hop arrive en France au début des années mille neuf cent quatre-vingt, révélé au grand public par l'émission H.I.P. H.O.P., diffusée sur TF1 en mille neuf cent quatre-vingt-quatre. Il donnera naissance à de grands chorégraphes français, comme Mourad Merzouki et Kader Attou, aujourd'hui reconnus par les institutions de la danse, tout en gardant vivant l'esprit du battle, la compétition de danse en face à face.",
  },
  memoCards: [
    {
      recto: "Où et quand naît le hip-hop ?",
      verso: "Dans le Bronx, à New York, au début des années 1970.",
    },
    {
      recto: "Qui est DJ Kool Herc et qu'invente-t-il, en quelle année ?",
      verso: "DJ d'origine jamaïcaine installé dans le Bronx, il invente le break-beat le 11 août 1973 lors d'une block party.",
    },
    {
      recto: "Quels sont les quatre éléments fondateurs du hip-hop ?",
      verso: "Le DJing, le MCing (ancêtre du rap), le graffiti et le breaking (la danse, aussi appelée b-boying).",
    },
    {
      recto: "Qui est Afrika Bambaataa et que fonde-t-il ?",
      verso: "Ancien membre de gang, il fonde la Zulu Nation pour transformer les rivalités de gangs en compétitions artistiques pacifiques.",
    },
    {
      recto: "Cite quatre termes du vocabulaire de la breakdance.",
      verso: "Toprock (debout), footwork/downrock (au sol), power moves (figures spectaculaires), freeze (arrêt final).",
    },
    {
      recto: "Qu'est-ce que le locking et qui l'a inventé ?",
      verso: "Une danse aux mouvements amples ponctués de blocages soudains (locks), inventée par Don Campbell à Los Angeles, fin des années 1960.",
    },
    {
      recto: "Qu'est-ce que le popping ?",
      verso: "Une danse fondée sur la contraction et le relâchement brusque des muscles, créant un effet saccadé ; née en Californie avec les Electric Boogaloos.",
    },
    {
      recto: "Comment le hip-hop arrive-t-il en France, en quelle année ?",
      verso: "En 1984, avec l'émission H.I.P. H.O.P., animée par Sidney sur TF1, première émission hip-hop d'Europe.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le hip-hop naît au début des années 1970 dans quel quartier de New York ?",
      choix: ["Manhattan", "Brooklyn", "Le Bronx", "Harlem"],
      bonneReponse: 2,
      explication: "Le Bronx, alors très pauvre et marqué par les gangs, est le berceau du hip-hop.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui est considéré comme le père fondateur du hip-hop, inventeur du break-beat ?",
      choix: ["Afrika Bambaataa", "DJ Kool Herc", "Don Campbell", "Grandmaster Flash"],
      bonneReponse: 1,
      explication: "DJ Kool Herc invente le break-beat le 11 août 1973 lors d'une fête dans le Bronx.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les quatre éléments fondateurs de la culture hip-hop.",
      reponse: "Le DJing, le MCing, le graffiti et le breaking (la danse).",
      explication: "Le hip-hop est une culture complète, pas seulement une danse.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment appelle-t-on les danseurs et danseuses de breakdance ?",
      choix: ["Les DJs", "Les MCs", "Les b-boys et b-girls", "Les lockers"],
      bonneReponse: 2,
      explication: "Ce nom vient du fait qu'ils dansent sur le break, le passage rythmique isolé par le DJ.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que fait Afrika Bambaataa avec la Zulu Nation ?",
      choix: [
        "Il organise des concerts de rock",
        "Il transforme les rivalités de gangs en compétitions artistiques pacifiques",
        "Il interdit la danse dans le Bronx",
        "Il crée le premier magazine de mode hip-hop",
      ],
      bonneReponse: 1,
      explication: "La Zulu Nation propose battles de danse, concours de graffiti et joutes de rap comme alternative à la violence.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la technique inventée par DJ Kool Herc en 1973.",
      reponse:
        "En utilisant deux exemplaires du même disque sur deux platines, il enchaîne et prolonge indéfiniment le break, le court passage rythmique où la musique se limite à la batterie et à la percussion, moment préféré des danseurs.",
      explication: "Cette technique, appelée break-beat, est à l'origine du mot breakdance.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui a inventé le locking, et où ?",
      choix: [
        "Don Campbell, à Los Angeles",
        "DJ Kool Herc, dans le Bronx",
        "Les Electric Boogaloos, à Fresno",
        "Sidney, à Paris",
      ],
      bonneReponse: 0,
      explication: "Don Campbell invente le locking à Los Angeles à la fin des années 1960.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris ce qu'est une émission H.I.P. H.O.P. et son importance pour le hip-hop en France.",
      reponse:
        "C'est une émission de télévision diffusée sur TF1 en 1984, animée par Sidney : c'est la première émission consacrée au hip-hop en Europe. Elle a fait découvrir cette culture au grand public français et a permis la formation de nombreux crews français.",
      explication: "Cette émission joue un rôle comparable à celui de DJ Kool Herc aux États-Unis : elle popularise une culture encore confidentielle.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "En quoi le popping se distingue-t-il techniquement du locking ?",
      choix: [
        "Le popping utilise des sauts très hauts, le locking reste toujours au sol",
        "Le popping repose sur la contraction et le relâchement brusque des muscles ; le locking alterne mouvements amples et blocages soudains",
        "Le popping est né dans le Bronx, le locking en Californie",
        "Il n'existe aucune différence entre les deux styles",
      ],
      bonneReponse: 1,
      explication: "Le popping crée un effet saccadé et robotique par les contractions musculaires, tandis que le locking joue sur l'alternance entre mouvement ample et arrêt (lock).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique en quoi le hip-hop est passé, en France, d'une culture de rue à une culture institutionnelle. Donne deux exemples précis.",
      reponse:
        "À partir des années 1990-2000, des chorégraphes issus du hip-hop créent des compagnies et montent de véritables spectacles sur les scènes de théâtre : Mourad Merzouki avec sa compagnie Käfig, ou Kader Attou avec la Compagnie Accrorap. Kader Attou dirige même depuis 2009 le Centre chorégraphique national de La Rochelle, une institution publique jusque-là réservée à la danse contemporaine, preuve de la reconnaissance officielle du hip-hop comme art chorégraphique à part entière.",
      explication: "Une bonne réponse cite au moins un chorégraphe et une institution précise (compagnie ou CCN).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Qu'est-ce qu'un battle, et pourquoi cette pratique reste-t-elle essentielle dans la culture hip-hop aujourd'hui ?",
      reponse:
        "Un battle est une confrontation dansée, en face à face, entre danseurs ou crews, jugée par un public ou un jury. Elle prolonge l'esprit fondateur du hip-hop imaginé par Afrika Bambaataa : transformer la rivalité en compétition artistique pacifique plutôt qu'en violence. Aujourd'hui encore, des compétitions comme Juste Debout, créée en France en 2002, perpétuent cette tradition à l'échelle internationale.",
      explication: "Le battle relie directement les origines du hip-hop (Zulu Nation) à sa pratique contemporaine.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Compare la naissance du hip-hop (culture de rue, quatre éléments, Bronx) à son entrée dans les institutions de la danse en France. Qu'est-ce qui a changé, qu'est-ce qui demeure ?",
      reponse:
        "Né dans la rue, lors de fêtes de quartier, comme une culture populaire et informelle organisée autour de quatre éléments (DJing, MCing, graffiti, breaking), le hip-hop est aujourd'hui enseigné dans des écoles et des conservatoires, produit dans des théâtres, soutenu par des institutions publiques comme les Centres chorégraphiques nationaux. Ce qui change, c'est le cadre : de la rue à la scène, de l'improvisation à la création chorégraphique construite. Ce qui demeure, c'est l'esprit du battle et de la compétition, ainsi que l'énergie physique et le vocabulaire gestuel hérités des pionniers du Bronx.",
      explication: "Une bonne réponse distingue nettement continuité (esprit, vocabulaire gestuel) et rupture (institutionnalisation, cadre de création).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le hip-hop naît dans quel quartier new-yorkais ?",
      choix: ["Le Bronx", "Manhattan", "Queens", "Brooklyn"],
      bonneReponse: 0,
      explication: "Le Bronx est le berceau du hip-hop, au début des années 1970.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qui invente le break-beat, et en quelle année ?",
      reponse: "DJ Kool Herc, en 1973.",
      explication: "Le 11 août 1973, lors d'une fête organisée par sa sœur dans le Bronx.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Lequel de ces éléments n'appartient PAS aux quatre éléments fondateurs du hip-hop ?",
      choix: ["Le DJing", "Le breaking", "Le graffiti", "Le classique académique"],
      bonneReponse: 3,
      explication: "Les quatre éléments sont le DJing, le MCing, le graffiti et le breaking.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle émission fait découvrir le hip-hop au grand public français, en 1984 ?",
      reponse: "L'émission H.I.P. H.O.P., animée par Sidney sur TF1.",
      explication: "C'était la première émission consacrée au hip-hop en Europe.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite un chorégraphe français issu du hip-hop, aujourd'hui reconnu par les institutions de la danse.",
      reponse: "Mourad Merzouki (compagnie Käfig) ou Kader Attou (Compagnie Accrorap, CCN de La Rochelle).",
      explication: "Ces artistes ont fait entrer le hip-hop sur les scènes de théâtre et dans les institutions publiques.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Hip-hop et cultures urbaines",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le hip-hop naît au début de quelle décennie ?",
          choix: ["Les années 1950", "Les années 1970", "Les années 1990", "Les années 2000"],
          bonneReponse: 1,
          explication: "Le hip-hop naît au début des années 1970, dans le Bronx.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'appelle-t-on une block party ?",
          reponse: "Une fête de quartier organisée en plein air ou dans un hall d'immeuble, où sont nées les premières soirées hip-hop.",
          explication: "C'est lors d'une block party que DJ Kool Herc invente le break-beat en 1973.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que signifie « MCing » dans les quatre éléments du hip-hop ?",
          choix: [
            "Mixer les disques",
            "Parler et chanter en rythme sur la musique",
            "Peindre les murs",
            "Danser sur les breaks",
          ],
          bonneReponse: 1,
          explication: "Le MCing est l'ancêtre du rap ; il complète le DJing, le graffiti et le breaking.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle d'Afrika Bambaataa et de la Zulu Nation dans l'histoire du hip-hop.",
          reponse:
            "Ancien membre de gang, Afrika Bambaataa fonde la Zulu Nation pour transformer les rivalités violentes entre gangs en compétitions artistiques pacifiques (battles de danse, concours de graffiti, joutes de rap), faisant du hip-hop une alternative positive à la violence urbaine.",
          explication: "Ce rôle social est essentiel pour comprendre l'esprit originel du hip-hop.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux termes du vocabulaire de la breakdance et explique-les brièvement.",
          reponse:
            "Le toprock : les pas dansés debout au début de la figure. Le freeze : un arrêt soudain, souvent en équilibre, qui conclut la figure. On peut aussi citer le footwork (travail au sol) ou les power moves (figures spectaculaires).",
          explication: "Ce vocabulaire technique structure toute prestation de breakdance.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : montre, à l'aide d'exemples précis, que le hip-hop est né comme une réponse créative à un contexte social difficile.",
          reponse:
            "Le Bronx, berceau du hip-hop, était au début des années 1970 un quartier marqué par la pauvreté et la violence des gangs. Plutôt que de laisser cette tension s'exprimer par la violence, des figures comme DJ Kool Herc offrent, à travers la musique et la danse lors des block parties, un espace positif d'expression et de compétition. Afrika Bambaataa va plus loin en fondant la Zulu Nation, qui transforme explicitement les rivalités de gangs en battles pacifiques de danse, de graffiti ou de rap. Le hip-hop apparaît ainsi comme une culture qui canalise une énergie sociale difficile vers la création artistique.",
          explication: "Une bonne réponse relie le contexte social du Bronx aux choix concrets des pionniers (Kool Herc, Bambaataa) plutôt que de rester générale.",
        },
      ],
    },
    {
      titre: "Examen 2 — Hip-hop et cultures urbaines",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Qui a inventé le popping, et dans quelle région ?",
          choix: [
            "Don Campbell, à Los Angeles",
            "Les Electric Boogaloos, en Californie",
            "DJ Kool Herc, dans le Bronx",
            "Sidney, à Paris",
          ],
          bonneReponse: 1,
          explication: "Le popping naît en Californie avec le groupe des Electric Boogaloos.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qui est Sidney et quel rôle joue-t-il pour le hip-hop en France ?",
          reponse: "Il anime en 1984 sur TF1 l'émission H.I.P. H.O.P., la première émission consacrée au hip-hop en Europe.",
          explication: "Cette émission fait découvrir la culture hip-hop au grand public français.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Kader Attou dirige, depuis 2009, quelle institution ?",
          choix: [
            "L'Opéra de Paris",
            "Le Centre chorégraphique national de La Rochelle",
            "Le Ballet du XXe siècle",
            "La Zulu Nation",
          ],
          bonneReponse: 1,
          explication: "Cette nomination illustre l'intégration du hip-hop dans les institutions publiques de la danse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle est la différence essentielle entre le breaking et le locking, dans leur façon de bouger ?",
          reponse:
            "Le breaking (b-boying) alterne pas debout (toprock), travail au sol (footwork) et figures spectaculaires (power moves), avec des arrêts en freeze. Le locking, lui, se danse debout, avec des mouvements amples suivis de blocages soudains (locks), souvent accompagnés de gestes expressifs vers le public.",
          explication: "Ces deux styles, nés à des endroits différents (Bronx pour le breaking, Los Angeles pour le locking), appartiennent tous deux aux cultures urbaines.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que Juste Debout et pourquoi cet événement illustre-t-il l'héritage de la culture hip-hop ?",
          reponse:
            "Juste Debout est une compétition de battles créée en France en 2002, qui réunit aujourd'hui des danseurs de danses urbaines venus du monde entier. Elle perpétue l'esprit fondateur du hip-hop : transformer la rivalité en compétition artistique pacifique, comme le voulait déjà Afrika Bambaataa avec la Zulu Nation.",
          explication: "Cet exemple montre la continuité entre les origines du hip-hop et sa pratique actuelle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : peut-on dire que l'entrée du hip-hop dans les institutions (compagnies, Centres chorégraphiques nationaux) a trahi son esprit d'origine ou, au contraire, l'a prolongé ? Justifie ta réponse.",
          reponse:
            "On peut défendre les deux points de vue. D'un côté, l'institutionnalisation éloigne le hip-hop de son cadre d'origine, la rue et la fête spontanée, pour l'inscrire dans des théâtres et des structures financées par l'État, avec des codes de création plus proches de la danse contemporaine. De l'autre, cette reconnaissance permet au hip-hop de se développer, de former de nouvelles générations de danseurs, de créer des œuvres ambitieuses avec des chorégraphes comme Mourad Merzouki ou Kader Attou, tout en conservant, à travers les battles comme Juste Debout, l'esprit de compétition pacifique voulu par les pionniers du Bronx. L'essentiel est de montrer que le hip-hop d'aujourd'hui vit sur ces deux scènes à la fois, la rue et le théâtre, sans que l'une exclue nécessairement l'autre.",
          explication: "Une bonne réponse argumente les deux positions avec des exemples précis avant de proposer une synthèse nuancée.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le hip-hop naît au début des années 1970 dans le Bronx, à New York, dans un contexte de pauvreté et de violence des gangs.",
    "DJ Kool Herc invente le break-beat le 11 août 1973 lors d'une block party : c'est l'acte fondateur du hip-hop.",
    "Quatre éléments fondateurs : DJing, MCing (ancêtre du rap), graffiti, breaking (la danse, ou b-boying).",
    "Afrika Bambaataa fonde la Zulu Nation pour transformer la rivalité des gangs en battles pacifiques.",
    "Locking (Don Campbell, Los Angeles) et popping (Electric Boogaloos, Californie) naissent dans le même esprit, sur la côte ouest américaine.",
    "Le hip-hop arrive en France en 1984 (émission H.I.P. H.O.P.) puis s'institutionnalise (Käfig, Accrorap, CCN de La Rochelle, battles comme Juste Debout).",
  ],
},
{
  slug: "ballet-romantique",
  titre: "Le ballet romantique : Giselle et les Sylphides",
  matiere: "histoire-danse",
  niveau: "4eme",
  description:
    "Comprendre comment le romantisme a transformé le ballet au XIXe siècle : créatures surnaturelles, tutu blanc, montée sur pointes, triomphe de la ballerine avec La Sylphide et Giselle, puis passage au grand ballet académique russe de Petipa.",
  objectifs: [
    "Définir le romantisme en danse : le goût du surnaturel, des sylphides et des willis",
    "Connaître La Sylphide (1832) et le rôle de Marie Taglioni dans la popularisation des pointes",
    "Connaître Giselle (1841), chef-d'œuvre du ballet romantique",
    "Décrire le tutu romantique et le ballet blanc",
    "Expliquer la place centrale de la ballerine et le déclin du danseur masculin",
    "Situer la transition vers Marius Petipa et le ballet académique russe",
  ],
  slides: [
    {
      titre: "Le romantisme : rêver d'un autre monde",
      illustration: "🌙",
      visuel: "Vers 1830",
      contenu: [
        "Vers 1830, le romantisme touche tous les arts : littérature, peinture, musique... et la danse",
        "Les artistes fuient le monde réel, jugé trop dur, vers le rêve et le surnaturel",
        "Sur scène : esprits de l'air, fantômes, forêts embrumées, clair de lune",
        "Le ballet oppose souvent le monde réel et le monde des esprits",
      ],
      voixOff:
        "Nous sommes vers dix-huit cent trente. Partout en Europe, les artistes romantiques rêvent d'échapper au monde réel, jugé trop gris, trop dur. En littérature, en peinture, en musique, on célèbre la nuit, le mystère, les passions. Et la danse s'en empare à son tour : sur scène apparaissent des esprits de l'air, des fantômes de jeunes filles, des forêts baignées de clair de lune. Le ballet romantique est né.",
    },
    {
      titre: "Sylphides et willis : les créatures romantiques",
      illustration: "🧚",
      visuel: "Sylphides & willis",
      contenu: [
        "La sylphide : esprit de l'air, léger et insaisissable",
        "Les willis : fantômes de jeunes filles mortes avant leur mariage",
        "Ces créatures incarnent un idéal inaccessible dont le héros tombe amoureux",
        "La ballerine doit sembler flotter, comme détachée du sol",
      ],
      voixOff:
        "Deux créatures hantent le ballet romantique. La sylphide, d'abord : un esprit de l'air, si léger qu'on ne peut jamais le saisir. Les willis, ensuite : les fantômes de jeunes filles mortes avant leur mariage, qui dansent la nuit dans la forêt. Ces êtres irréels incarnent un idéal que le héros poursuit sans jamais l'atteindre. Pour les danser, la ballerine doit sembler flotter, comme si la pesanteur n'existait plus.",
    },
    {
      titre: "1832 : La Sylphide",
      illustration: "🩰",
      visuel: "La Sylphide — 1832",
      contenu: [
        "Créée à l'Opéra de Paris le 12 mars 1832",
        "Chorégraphie de Filippo Taglioni pour sa fille Marie Taglioni",
        "L'histoire : James, un jeune Écossais, délaisse sa fiancée pour une sylphide insaisissable",
        "Premier grand ballet romantique : il lance la mode du surnaturel",
      ],
      voixOff:
        "Le douze mars dix-huit cent trente-deux, l'Opéra de Paris crée La Sylphide, chorégraphiée par Filippo Taglioni pour sa fille Marie. L'histoire se passe en Écosse : le jeune James abandonne sa fiancée le jour de ses noces pour poursuivre une sylphide, un esprit de l'air qu'il ne pourra jamais posséder. Le triomphe est immense. Avec La Sylphide, le ballet romantique trouve son modèle : tous les théâtres d'Europe voudront leur créature surnaturelle.",
    },
    {
      titre: "Marie Taglioni et la montée sur pointes",
      illustration: "🦢",
      visuel: "Marie Taglioni",
      contenu: [
        "Marie Taglioni (1804-1884) devient la première star du ballet romantique",
        "Dans La Sylphide, elle popularise la danse sur pointes",
        "Les pointes ne sont pas une prouesse : elles servent à paraître aérienne, immatérielle",
        "Son style léger et pudique est imité dans toute l'Europe",
      ],
      voixOff:
        "Marie Taglioni devient du jour au lendemain la première grande étoile du ballet romantique. Son secret ? Elle danse sur la pointe des pieds. D'autres danseuses avaient déjà tenté de monter sur pointes, mais Taglioni en fait autre chose qu'une acrobatie : un moyen de paraître aérienne, immatérielle, à peine posée sur le sol, comme un véritable esprit de l'air. Toute l'Europe s'arrache la Taglioni et imite son style.",
    },
    {
      titre: "Tutu romantique et ballet blanc",
      illustration: "🤍",
      visuel: "Le ballet blanc",
      contenu: [
        "Le tutu romantique : robe légère de mousseline blanche, arrivant à mi-mollet",
        "Il révèle les pieds et les chevilles, et flotte à chaque mouvement",
        "Le ballet blanc : une scène où tout le corps de ballet danse en blanc, en créatures irréelles",
        "Éclairage au gaz : clair de lune et atmosphères fantastiques sur scène",
      ],
      voixOff:
        "Le ballet romantique invente aussi un costume : le tutu romantique, une longue robe vaporeuse de mousseline blanche qui descend à mi-mollet et flotte à chaque mouvement. Quand tout le corps de ballet le porte, vêtu de blanc des pieds à la tête, on parle de ballet blanc : des dizaines de sylphides ou de willis identiques envahissent la scène. Grâce au nouvel éclairage au gaz, les théâtres créent des clairs de lune fantastiques. L'illusion est totale.",
    },
    {
      titre: "1841 : Giselle, le chef-d'œuvre",
      illustration: "🌹",
      visuel: "Giselle — 1841",
      contenu: [
        "Créée à l'Opéra de Paris le 28 juin 1841, avec Carlotta Grisi",
        "Musique d'Adolphe Adam ; chorégraphie de Jean Coralli et Jules Perrot",
        "Livret inspiré d'une légende sur les willis, avec la collaboration de Théophile Gautier",
        "Acte I : le monde réel du village ; acte II : le monde nocturne des willis",
      ],
      voixOff:
        "Le vingt-huit juin dix-huit cent quarante et un, l'Opéra de Paris crée le chef-d'œuvre absolu du romantisme : Giselle, sur une musique d'Adolphe Adam, chorégraphié par Jean Coralli et Jules Perrot pour la ballerine Carlotta Grisi. L'écrivain Théophile Gautier a participé au livret, inspiré d'une légende sur les willis. Le premier acte se déroule dans un village bien réel ; le second, la nuit, dans la forêt hantée des willis. Deux mondes, deux actes : tout le romantisme est là.",
    },
    {
      titre: "Giselle : l'histoire",
      illustration: "💔",
      visuel: "Amour & pardon",
      contenu: [
        "Giselle, jeune paysanne, aime Albrecht, qui lui cache qu'il est un noble déjà fiancé",
        "Découvrant la trahison, Giselle sombre dans la folie et meurt",
        "Devenue willi, elle doit faire danser Albrecht jusqu'à la mort avec la reine Myrtha",
        "Par amour, elle le protège jusqu'à l'aube et lui sauve la vie",
      ],
      voixOff:
        "Giselle est une jeune paysanne fragile qui aime passionnément Albrecht. Mais Albrecht lui a menti : c'est un noble, déjà fiancé à une autre. Quand Giselle découvre la trahison, elle sombre dans la folie et meurt. Au second acte, devenue willi, elle devrait faire danser Albrecht jusqu'à la mort, comme l'ordonne Myrtha, la reine des willis. Mais son amour est plus fort que la vengeance : Giselle protège Albrecht jusqu'à l'aube et lui sauve la vie. Pardonner par-delà la mort : voilà le cœur du romantisme.",
    },
    {
      titre: "La ballerine reine, le danseur effacé",
      illustration: "👸",
      visuel: "Le culte de la ballerine",
      contenu: [
        "L'époque romantique est celle du culte de la ballerine : Taglioni, Grisi, Elssler, Cerrito...",
        "La ballerine incarne l'idéal : le public vient pour elle",
        "Le danseur masculin décline : on le réduit souvent à porter et soutenir la ballerine",
        "Il faudra attendre le début du XXe siècle (les Ballets russes) pour son grand retour",
      ],
      voixOff:
        "Le ballet romantique, c'est le règne absolu de la ballerine. Marie Taglioni, Carlotta Grisi, Fanny Elssler, Fanny Cerrito : le public se passionne pour ces étoiles, les couvre de fleurs et de poèmes. Le danseur masculin, lui, passe au second plan : on le réduit souvent au rôle de porteur, chargé de soutenir et de faire briller la ballerine. Il faudra attendre le début du vingtième siècle et les Ballets russes pour que le danseur retrouve toute sa gloire.",
    },
    {
      titre: "Vers la Russie : Petipa et le ballet académique",
      illustration: "🇷🇺",
      visuel: "Marius Petipa",
      contenu: [
        "Après 1850, le ballet romantique s'essouffle en France",
        "Le Français Marius Petipa part en Russie en 1847 ; il devient maître de ballet à Saint-Pétersbourg",
        "Il crée le grand ballet académique : La Belle au bois dormant (1890), Casse-Noisette (1892), Le Lac des cygnes (version de 1895)",
        "Tutu court, virtuosité, grands ensembles : un nouvel âge d'or, héritier du romantisme",
      ],
      voixOff:
        "Après dix-huit cent cinquante, le ballet romantique s'essouffle en France. Mais son héritage voyage : le danseur français Marius Petipa, parti en Russie en dix-huit cent quarante-sept, devient maître de ballet des Théâtres impériaux à Saint-Pétersbourg. Il y invente le grand ballet académique : La Belle au bois dormant, Casse-Noisette, Le Lac des cygnes. Le tutu raccourcit, la technique devient virtuose, les ensembles grandioses. Le deuxième acte blanc du Lac des cygnes ? Un souvenir direct des willis de Giselle.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Vers 1830, le romantisme apporte au ballet le surnaturel : sylphides et willis",
        "1832 : La Sylphide, Marie Taglioni popularise les pointes",
        "1841 : Giselle (Adam, Coralli et Perrot, Carlotta Grisi), chef-d'œuvre romantique",
        "Tutu romantique blanc à mi-mollet, ballet blanc, culte de la ballerine, déclin du danseur",
        "Petipa emporte cet héritage en Russie : le ballet académique (1890-1895)",
      ],
      voixOff:
        "Résumons. Vers dix-huit cent trente, le romantisme envahit le ballet : place aux sylphides et aux willis. En dix-huit cent trente-deux, La Sylphide fait de Marie Taglioni la première étoile romantique et popularise les pointes. En dix-huit cent quarante et un, Giselle porte le genre à son sommet. Tutu blanc, ballet blanc, culte de la ballerine et effacement du danseur : voilà les marques du romantisme. Enfin, Marius Petipa emporte cet héritage en Russie et y bâtit le grand ballet académique. Tu connais maintenant l'âge d'or du ballet blanc !",
    },
  ],
  fiche: {
    intro:
      "Vers 1830, le romantisme transforme le ballet : les histoires quittent le monde réel pour celui des esprits, la ballerine sur pointes devient une créature aérienne, et deux chefs-d'œuvre naissent à l'Opéra de Paris : La Sylphide (1832) et Giselle (1841).",
    sections: [
      {
        titre: "Le romantisme en danse",
        points: [
          "Mouvement artistique européen (vers 1830) : goût du rêve, de la nuit, du surnaturel",
          "Créatures typiques : la sylphide (esprit de l'air) et les willis (fantômes de jeunes filles mortes avant leur mariage)",
          "Structure fréquente : opposition entre le monde réel et le monde des esprits",
        ],
      },
      {
        titre: "La Sylphide (1832)",
        points: [
          "Créée à l'Opéra de Paris le 12 mars 1832 ; chorégraphie de Filippo Taglioni",
          "Marie Taglioni, sa fille, y popularise la danse sur pointes",
          "Les pointes servent l'expression : paraître aérienne et immatérielle, pas faire une prouesse",
          "Premier grand ballet romantique, modèle de tout le genre",
        ],
      },
      {
        titre: "Giselle (1841)",
        points: [
          "Créée à l'Opéra de Paris le 28 juin 1841 avec Carlotta Grisi",
          "Musique d'Adolphe Adam ; chorégraphie de Jean Coralli et Jules Perrot ; livret avec Théophile Gautier",
          "Acte I : village réel, trahison d'Albrecht, folie et mort de Giselle",
          "Acte II : ballet blanc des willis et de leur reine Myrtha ; Giselle sauve Albrecht par amour",
        ],
      },
      {
        titre: "Tutu romantique et ballet blanc",
        points: [
          "Tutu romantique : robe vaporeuse de mousseline blanche descendant à mi-mollet",
          "Ballet blanc : scène où tout le corps de ballet, en blanc, incarne des créatures surnaturelles",
          "L'éclairage au gaz permet des atmosphères de clair de lune fantastiques",
        ],
      },
      {
        titre: "Ballerine reine, danseur effacé",
        points: [
          "Culte des grandes ballerines : Taglioni, Grisi, Elssler, Cerrito",
          "Le danseur masculin décline : souvent réduit au rôle de porteur",
          "Son grand retour n'aura lieu qu'au début du XXe siècle avec les Ballets russes",
        ],
      },
      {
        titre: "La transition vers Petipa",
        points: [
          "Marius Petipa, danseur français parti en Russie en 1847, devient maître de ballet à Saint-Pétersbourg",
          "Il crée le ballet académique : La Belle au bois dormant (1890), Casse-Noisette (1892), Le Lac des cygnes (version de 1895, avec Lev Ivanov)",
          "Le ballet académique hérite du romantisme (actes blancs) mais ajoute virtuosité et tutu court",
        ],
      },
    ],
    audio:
      "Fiche de révision : le ballet romantique. Vers dix-huit cent trente, le romantisme gagne la danse : les ballets racontent des histoires de créatures surnaturelles, sylphides, esprits de l'air, et willis, fantômes de jeunes filles mortes avant leur mariage. En dix-huit cent trente-deux, La Sylphide est créée à l'Opéra de Paris : Marie Taglioni y popularise la danse sur pointes, qui la fait paraître aérienne et immatérielle. La ballerine porte le tutu romantique, une robe de mousseline blanche à mi-mollet, et les scènes où tout le corps de ballet danse en blanc s'appellent des ballets blancs. En dix-huit cent quarante et un naît le chef-d'œuvre du genre : Giselle, sur une musique d'Adolphe Adam, chorégraphié par Coralli et Perrot pour Carlotta Grisi. C'est l'époque du culte de la ballerine, tandis que le danseur masculin décline. Enfin, Marius Petipa emporte cet héritage en Russie, où il crée le grand ballet académique, avec La Belle au bois dormant, Casse-Noisette et Le Lac des cygnes.",
  },
  memoCards: [
    {
      recto: "La Sylphide : date, lieu, chorégraphe ?",
      verso: "12 mars 1832, Opéra de Paris. Chorégraphie de Filippo Taglioni pour sa fille Marie Taglioni.",
    },
    {
      recto: "Qui popularise la danse sur pointes, et dans quel ballet ?",
      verso: "Marie Taglioni, dans La Sylphide (1832). Les pointes la font paraître aérienne et immatérielle.",
    },
    {
      recto: "Giselle : date et distribution de la création ?",
      verso: "28 juin 1841, Opéra de Paris, avec Carlotta Grisi dans le rôle-titre.",
    },
    {
      recto: "Giselle : compositeur et chorégraphes ?",
      verso: "Musique d'Adolphe Adam ; chorégraphie de Jean Coralli et Jules Perrot ; livret avec Théophile Gautier.",
    },
    {
      recto: "Qu'est-ce qu'une willi ?",
      verso: "Le fantôme d'une jeune fille morte avant son mariage. Les willis, menées par leur reine Myrtha, font danser les hommes jusqu'à la mort.",
    },
    {
      recto: "Qu'est-ce que le tutu romantique ?",
      verso: "Une robe légère et vaporeuse de mousseline blanche, descendant à mi-mollet, qui flotte à chaque mouvement.",
    },
    {
      recto: "Qu'est-ce qu'un ballet blanc ?",
      verso: "Une scène où tout le corps de ballet danse en blanc pour incarner des créatures surnaturelles (sylphides, willis, cygnes).",
    },
    {
      recto: "Que devient le danseur masculin à l'époque romantique ?",
      verso: "Il décline : le public ne vient que pour la ballerine, et le danseur est souvent réduit au rôle de porteur.",
    },
    {
      recto: "Qui est Marius Petipa ?",
      verso: "Danseur et chorégraphe français parti en Russie en 1847, maître de ballet à Saint-Pétersbourg, créateur du grand ballet académique.",
    },
    {
      recto: "Trois grands ballets de l'ère Petipa (avec dates) ?",
      verso: "La Belle au bois dormant (1890), Casse-Noisette (1892), Le Lac des cygnes (version de 1895, avec Lev Ivanov).",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année La Sylphide a-t-elle été créée à l'Opéra de Paris ?",
      choix: ["1789", "1832", "1841", "1890"],
      bonneReponse: 1,
      explication: "La Sylphide a été créée le 12 mars 1832 : c'est le premier grand ballet romantique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle ballerine a popularisé la danse sur pointes dans La Sylphide ?",
      choix: ["Carlotta Grisi", "Fanny Elssler", "Marie Taglioni", "Fanny Cerrito"],
      bonneReponse: 2,
      explication:
        "Marie Taglioni, dirigée par son père Filippo, a popularisé les pointes pour paraître aérienne, comme un véritable esprit de l'air.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'une sylphide ?",
      reponse: "Un esprit de l'air, une créature légère et insaisissable du ballet romantique.",
      explication:
        "La sylphide incarne l'idéal inaccessible que poursuit le héros romantique, comme James dans La Sylphide.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année Giselle a-t-elle été créée ?",
      choix: ["1832", "1841", "1853", "1895"],
      bonneReponse: 1,
      explication: "Giselle a été créée à l'Opéra de Paris le 28 juin 1841, avec Carlotta Grisi.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui a composé la musique de Giselle ?",
      choix: ["Jean-Baptiste Lully", "Piotr Ilitch Tchaïkovski", "Adolphe Adam", "Frédéric Chopin"],
      bonneReponse: 2,
      explication:
        "La musique de Giselle est d'Adolphe Adam ; la chorégraphie est de Jean Coralli et Jules Perrot.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris le tutu romantique et explique en quoi il sert l'esthétique du ballet romantique.",
      reponse:
        "C'est une robe légère et vaporeuse de mousseline blanche, descendant à mi-mollet. Elle flotte à chaque mouvement et donne à la ballerine une allure irréelle, aérienne, parfaite pour incarner sylphides et willis.",
      explication:
        "Le costume participe à l'illusion du surnaturel, avec les pointes et l'éclairage au gaz.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans Giselle, qui est Myrtha ?",
      choix: [
        "La fiancée d'Albrecht",
        "La mère de Giselle",
        "La reine des willis",
        "Une sylphide écossaise",
      ],
      bonneReponse: 2,
      explication:
        "Myrtha est la reine des willis : au second acte, elle ordonne de faire danser Albrecht jusqu'à la mort, mais Giselle le protège.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Résume l'histoire de Giselle en quelques phrases, en distinguant les deux actes.",
      reponse:
        "Acte I : Giselle, jeune paysanne, aime Albrecht, qui lui cache qu'il est noble et déjà fiancé ; découvrant la trahison, elle sombre dans la folie et meurt. Acte II : devenue willi, elle devrait faire danser Albrecht jusqu'à la mort avec la reine Myrtha, mais par amour elle le protège jusqu'à l'aube et lui sauve la vie.",
      explication:
        "La structure en deux actes oppose le monde réel (le village) et le monde surnaturel (la forêt des willis) : c'est typique du ballet romantique.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi la montée sur pointes de Taglioni est-elle plus qu'une prouesse technique ?",
      choix: [
        "Parce qu'elle permettait de danser plus vite",
        "Parce qu'elle servait l'expression : paraître aérienne et immatérielle, comme un esprit",
        "Parce qu'elle était imposée par le règlement de l'Opéra",
        "Parce qu'elle protégeait les pieds des danseuses",
      ],
      bonneReponse: 1,
      explication:
        "Chez Taglioni, la pointe est un moyen poétique : à peine posée sur le sol, la ballerine semble flotter, ce qui correspond exactement à l'idéal romantique du surnaturel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique le déclin du danseur masculin à l'époque romantique. Quand et grâce à qui reviendra-t-il au premier plan ?",
      reponse:
        "Le romantisme place la ballerine au centre : elle seule incarne les créatures idéales (sylphides, willis), et le public ne vient que pour elle. Le danseur masculin est relégué au rôle de porteur, chargé de soutenir la ballerine. Il retrouvera la gloire au début du XXe siècle, notamment grâce aux Ballets russes.",
      explication:
        "C'est un renversement complet par rapport à l'époque de Louis XIV, où les hommes dominaient la danse.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Qui est Marius Petipa et quels sont ses trois ballets les plus célèbres, avec leurs dates ?",
      reponse:
        "Marius Petipa est un danseur et chorégraphe français parti en Russie en 1847, devenu maître de ballet à Saint-Pétersbourg. Ses ballets les plus célèbres sont La Belle au bois dormant (1890), Casse-Noisette (1892) et Le Lac des cygnes (version de 1895, créée avec Lev Ivanov).",
      explication:
        "Petipa crée le grand ballet académique russe, héritier du romantisme français, sur les musiques de Tchaïkovski.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Montre, avec un exemple précis, que le ballet académique russe hérite du ballet romantique.",
      reponse:
        "Le deuxième acte du Lac des cygnes (acte blanc des cygnes au bord du lac) reprend directement le principe du ballet blanc romantique, comme l'acte des willis de Giselle : un corps de ballet entièrement en blanc incarnant des créatures surnaturelles dans un décor nocturne.",
      explication:
        "L'acte blanc est le fil qui relie Giselle (1841) au Lac des cygnes (1895) : le romantisme survit dans le ballet académique.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le premier grand ballet romantique, créé en 1832, s'appelle :",
      choix: ["Giselle", "La Sylphide", "Le Lac des cygnes", "Casse-Noisette"],
      bonneReponse: 1,
      explication: "La Sylphide (1832), avec Marie Taglioni, lance le ballet romantique.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que sont les willis ?",
      reponse: "Les fantômes de jeunes filles mortes avant leur mariage, qui dansent la nuit et font danser les hommes jusqu'à la mort.",
      explication: "Elles apparaissent au second acte de Giselle, menées par leur reine Myrtha.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Giselle (1841) a été créée avec quelle ballerine dans le rôle-titre ?",
      choix: ["Marie Taglioni", "Fanny Elssler", "Carlotta Grisi", "Fanny Cerrito"],
      bonneReponse: 2,
      explication: "Carlotta Grisi a créé le rôle de Giselle le 28 juin 1841 à l'Opéra de Paris.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'appelle-t-on un ballet blanc ?",
      reponse:
        "Une scène où tout le corps de ballet danse vêtu de blanc pour incarner des créatures surnaturelles (willis, sylphides, cygnes).",
      explication: "Exemples : l'acte II de Giselle, l'acte II du Lac des cygnes.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans quel pays Marius Petipa a-t-il développé le ballet académique, et dans quelle ville ?",
      reponse: "En Russie, à Saint-Pétersbourg, où il était maître de ballet des Théâtres impériaux.",
      explication: "Parti en Russie en 1847, il y a créé La Belle au bois dormant, Casse-Noisette et Le Lac des cygnes.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le ballet romantique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Vers quelle décennie le romantisme s'impose-t-il dans le ballet ?",
          choix: ["Vers 1660", "Vers 1750", "Vers 1830", "Vers 1900"],
          bonneReponse: 2,
          explication:
            "C'est vers 1830, avec La Sylphide (1832), que le romantisme s'impose sur les scènes de ballet.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la date de création de La Sylphide et le nom de la ballerine qui y triompha.",
          reponse: "Le 12 mars 1832, à l'Opéra de Paris, avec Marie Taglioni.",
          explication: "La chorégraphie était de son père, Filippo Taglioni.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Lequel de ces éléments ne caractérise PAS le ballet romantique ?",
          choix: [
            "Le tutu blanc à mi-mollet",
            "Les créatures surnaturelles",
            "Le culte de la ballerine",
            "Le tutu court et la virtuosité brillante",
          ],
          bonneReponse: 3,
          explication:
            "Le tutu court et la grande virtuosité caractérisent le ballet académique de Petipa, pas le ballet romantique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite les créateurs de Giselle : compositeur, chorégraphes, et l'écrivain associé au livret.",
          reponse:
            "Musique d'Adolphe Adam ; chorégraphie de Jean Coralli et Jules Perrot ; livret écrit avec la collaboration de Théophile Gautier.",
          explication: "Giselle a été créée à l'Opéra de Paris le 28 juin 1841 avec Carlotta Grisi.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Pourquoi l'acte II de Giselle est-il un ballet blanc ? Décris ce que voit le spectateur.",
          reponse:
            "Parce que tout le corps de ballet y danse vêtu de blanc : les willis, fantômes de jeunes filles en tutu romantique, envahissent la forêt nocturne autour de leur reine Myrtha, dans une atmosphère de clair de lune.",
          explication:
            "Le ballet blanc crée une image irréelle et unifiée, emblème du romantisme.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : en quoi l'histoire de Giselle illustre-t-elle parfaitement l'esprit romantique ? Développe au moins deux arguments.",
          reponse:
            "D'abord, le ballet oppose le monde réel (le village de l'acte I) au monde surnaturel (la forêt des willis de l'acte II) : cette fuite hors du réel est au cœur du romantisme. Ensuite, les thèmes sont romantiques : l'amour impossible, la trahison, la folie, la mort, puis le pardon par-delà la mort, quand Giselle sauve Albrecht au lieu de se venger. Enfin, la willi elle-même, créature à la fois belle et tragique, incarne l'idéal inaccessible cher aux romantiques.",
          explication:
            "Une bonne réponse relie précisément l'intrigue (deux actes, folie, pardon) aux caractéristiques générales du romantisme.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le ballet romantique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le tutu romantique est :",
          choix: [
            "Un tutu court et rigide dégageant toute la jambe",
            "Une robe vaporeuse de mousseline blanche à mi-mollet",
            "Une jupe colorée de style espagnol",
            "Un justaucorps sans jupe",
          ],
          bonneReponse: 1,
          explication:
            "Le tutu romantique est une longue robe légère de mousseline blanche qui descend à mi-mollet ; le tutu court apparaîtra avec le ballet académique.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle créature du ballet romantique est un esprit de l'air, et quelle autre est le fantôme d'une jeune fille ?",
          reponse: "La sylphide est un esprit de l'air ; la willi est le fantôme d'une jeune fille morte avant son mariage.",
          explication: "La sylphide donne son nom à La Sylphide (1832) ; les willis peuplent l'acte II de Giselle (1841).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "En quelle année Marius Petipa est-il parti pour la Russie ?",
          choix: ["1832", "1841", "1847", "1895"],
          bonneReponse: 2,
          explication:
            "Petipa quitte la France pour la Russie en 1847 ; il deviendra maître de ballet des Théâtres impériaux de Saint-Pétersbourg.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Range dans l'ordre chronologique avec les dates : Giselle, Le Lac des cygnes (version Petipa-Ivanov), La Sylphide, La Belle au bois dormant.",
          reponse:
            "La Sylphide (1832) ; Giselle (1841) ; La Belle au bois dormant (1890) ; Le Lac des cygnes, version Petipa-Ivanov (1895).",
          explication:
            "Les deux premiers sont des ballets romantiques parisiens, les deux derniers des ballets académiques russes.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Cite deux grandes ballerines romantiques autres que Marie Taglioni.",
          reponse:
            "Carlotta Grisi (créatrice de Giselle), Fanny Elssler ou Fanny Cerrito.",
          explication:
            "L'époque romantique est celle du culte de la ballerine : ces étoiles étaient adulées dans toute l'Europe.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : compare le ballet romantique français et le ballet académique russe de Petipa. Qu'est-ce que le second garde du premier, et qu'est-ce qu'il change ?",
          reponse:
            "Le ballet académique garde du romantisme le goût du merveilleux et surtout l'acte blanc : les cygnes du Lac des cygnes descendent directement des willis de Giselle. Il garde aussi la place centrale de la ballerine. Mais il change beaucoup de choses : le tutu raccourcit pour libérer les jambes, la technique devient plus virtuose et spectaculaire, les ballets s'organisent en grands ensembles réglés avec une précision géométrique, sur des musiques symphoniques comme celles de Tchaïkovski. Le rêve romantique devient un grand spectacle académique.",
          explication:
            "Une bonne réponse identifie à la fois la continuité (acte blanc, merveilleux, ballerine reine) et les ruptures (tutu court, virtuosité, grands ensembles).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vers 1830, le romantisme apporte au ballet le goût du surnaturel : sylphides (esprits de l'air) et willis (fantômes de jeunes filles).",
    "1832 : La Sylphide (Opéra de Paris, chorégraphie de Filippo Taglioni) ; Marie Taglioni popularise la danse sur pointes.",
    "1841 : Giselle, chef-d'œuvre romantique — musique d'Adolphe Adam, chorégraphie de Coralli et Perrot, créé par Carlotta Grisi.",
    "Le tutu romantique (mousseline blanche à mi-mollet) et le ballet blanc créent l'illusion du surnaturel.",
    "La ballerine règne (Taglioni, Grisi, Elssler...) tandis que le danseur masculin décline, réduit au rôle de porteur.",
    "Marius Petipa (parti en Russie en 1847) crée le ballet académique : La Belle au bois dormant (1890), Casse-Noisette (1892), Le Lac des cygnes (1895).",
  ],
},
{
  slug: "ballets-russes",
  titre: "Les Ballets russes de Diaghilev",
  matiere: "histoire-danse",
  niveau: "4eme",
  description:
    "Découvrir comment Serge de Diaghilev, avec sa troupe des Ballets russes fondée à Paris en 1909, a bouleversé la danse du XXe siècle : renouveau de la chorégraphie avec Fokine, révolution de Nijinski, scandale du Sacre du printemps (1913) et alliance entre danse, musique et peinture.",
  objectifs: [
    "Situer Serge de Diaghilev et la création des Ballets russes à Paris en 1909",
    "Comprendre le renouveau chorégraphique apporté par Michel Fokine",
    "Connaître Vaslav Nijinski et le scandale du Sacre du printemps (1913)",
    "Expliquer l'alliance des Ballets russes avec les grands artistes de leur temps (musiciens, peintres, couturiers)",
    "Mesurer l'héritage des Ballets russes : le retour du danseur au premier plan",
  ],
  slides: [
    {
      titre: "Diaghilev, un imprésario visionnaire",
      illustration: "🎩",
      visuel: "Serge de Diaghilev (1872-1929)",
      contenu: [
        "Serge de Diaghilev : critique d'art et imprésario russe, passionné par tous les arts",
        "Il organise d'abord des expositions et des concerts russes à Paris",
        "En 1909, il fonde à Paris la troupe des Ballets russes",
        "Son ambition : révéler à l'Occident le meilleur de la danse russe",
      ],
      voixOff:
        "Serge de Diaghilev n'est pas danseur : c'est un critique d'art et un organisateur de génie, passionné par la peinture, la musique et le théâtre autant que par la danse. Après avoir fait connaître l'art et la musique russes à Paris, il a une idée : fonder une troupe de ballet capable d'éblouir l'Occident. En dix-neuf cent neuf, il crée à Paris les Ballets russes. L'aventure la plus importante de la danse du vingtième siècle commence.",
    },
    {
      titre: "Une troupe russe qui ne danse jamais en Russie",
      illustration: "✈️",
      visuel: "Paris, 1909",
      contenu: [
        "Les danseurs sont formés dans les théâtres impériaux russes (Saint-Pétersbourg, Moscou)",
        "Mais la troupe est basée à Paris et tourne dans toute l'Europe et aux États-Unis",
        "Elle ne s'est jamais produite en Russie, où elle n'était pas rattachée à un théâtre",
        "La compagnie existera jusqu'à la mort de Diaghilev, en 1929",
      ],
      voixOff:
        "Détail étonnant : les danseurs des Ballets russes sont formés dans les grandes écoles impériales russes, à Saint-Pétersbourg ou à Moscou, mais la troupe elle-même est basée à Paris. Diaghilev l'emmène tourner dans toute l'Europe, puis aux États-Unis. Curieusement, cette compagnie appelée Ballets russes ne s'est jamais produite en Russie ! Elle vivra vingt ans, de dix-neuf cent neuf à dix-neuf cent vingt-neuf, année de la mort de Diaghilev, qui marque la fin de l'aventure.",
    },
    {
      titre: "Fokine renouvelle la chorégraphie",
      illustration: "🔄",
      visuel: "Michel Fokine",
      contenu: [
        "Michel Fokine, premier grand chorégraphe des Ballets russes",
        "Il refuse le ballet-spectacle fait de numéros séparés (variations, mime, virtuosité gratuite)",
        "Il veut une œuvre unifiée : danse, musique et décors doivent raconter une seule histoire",
        "Il adapte le mouvement au sujet, au lieu d'imposer partout le même vocabulaire académique",
      ],
      voixOff:
        "Le premier grand chorégraphe des Ballets russes s'appelle Michel Fokine. Il rejette l'idée d'un ballet composé de numéros séparés, enchaînés sans grand lien entre eux. Pour lui, un ballet doit être une œuvre unifiée, où la danse, la musique et les décors racontent ensemble une seule et même histoire. Le mouvement doit s'adapter au sujet et à l'époque représentée, plutôt que de répéter partout le même vocabulaire académique. C'est une vraie révolution dans la manière de penser la chorégraphie.",
    },
    {
      titre: "L'Oiseau de feu et Petrouchka",
      illustration: "🔥",
      visuel: "Stravinsky & Fokine",
      contenu: [
        "L'Oiseau de feu (1910) : premier grand succès parisien, sur une musique d'Igor Stravinsky",
        "Petrouchka (1911) : l'histoire tragique d'une marionnette qui a une âme",
        "Ces ballets révèlent au public occidental le jeune compositeur Stravinsky",
        "Décors et costumes signés Alexandre Benois ou Léon Bakst, aux couleurs somptueuses",
      ],
      voixOff:
        "En dix-neuf cent dix, Fokine chorégraphie L'Oiseau de feu, sur une musique du jeune compositeur Igor Stravinsky : c'est un triomphe à Paris. L'année suivante, en dix-neuf cent onze, c'est Petrouchka, l'histoire bouleversante d'une marionnette de foire qui possède une âme humaine. Ces deux ballets révèlent Stravinsky au monde entier et confirment le talent de Fokine. Les décors somptueux d'Alexandre Benois ou de Léon Bakst achèvent d'éblouir le public parisien.",
    },
    {
      titre: "Nijinski, le danseur qui bouleverse tout",
      illustration: "⚡",
      visuel: "Vaslav Nijinski",
      contenu: [
        "Vaslav Nijinski : danseur star des Ballets russes, célèbre pour ses sauts extraordinaires",
        "Il devient aussi chorégraphe, avec un style anguleux, très différent du ballet classique",
        "1912 : L'Après-midi d'un faune, sur une musique de Debussy, fait scandale",
        "Ses mouvements de profil, presque plats, cassent tous les codes académiques",
      ],
      voixOff:
        "Vaslav Nijinski est le grand danseur des Ballets russes : on raconte qu'il semblait rester suspendu dans les airs à chaque saut. Mais Nijinski devient aussi chorégraphe, avec un style anguleux, presque brutal, très éloigné de l'élégance classique. En dix-neuf cent douze, il crée L'Après-midi d'un faune sur une musique de Claude Debussy : les danseurs se déplacent de profil, comme sur une frise antique. Le public est choqué, mais quelque chose de nouveau vient de naître.",
    },
    {
      titre: "1913 : Le Sacre du printemps, le scandale du siècle",
      illustration: "💥",
      visuel: "29 mai 1913",
      contenu: [
        "Créé le 29 mai 1913 au Théâtre des Champs-Élysées à Paris",
        "Musique d'Igor Stravinsky, chorégraphie de Vaslav Nijinski",
        "Le sujet : un rite païen où une jeune fille danse jusqu'à la mort pour honorer le printemps",
        "Rythmes heurtés, pieds tournés en dedans, corps ramassés : le scandale éclate dès le début",
      ],
      voixOff:
        "Le vingt-neuf mai dix-neuf cent treize, au tout nouveau Théâtre des Champs-Élysées, les Ballets russes créent Le Sacre du printemps. La musique d'Igor Stravinsky, aux rythmes violents et changeants, accompagne l'histoire d'un rite païen : une jeune fille est choisie pour danser jusqu'à la mort en offrande au printemps. La chorégraphie de Nijinski tourne le dos à toute grâce classique : pieds tournés en dedans, corps ramassés, sautillements lourds. Dès les premières mesures, la salle gronde : c'est le scandale le plus célèbre de l'histoire de la danse.",
    },
    {
      titre: "Une œuvre d'art totale",
      illustration: "🎨",
      visuel: "« Étonne-moi »",
      contenu: [
        "Diaghilev réunit autour de la danse les plus grands artistes de son temps",
        "Musiciens : Stravinsky, mais aussi Ravel, Debussy, Satie, Prokofiev",
        "Peintres et décorateurs : Bakst, Benois, puis Pablo Picasso pour Parade (1917)",
        "Diaghilev aurait lancé au poète Jean Cocteau ce défi resté célèbre : « Étonne-moi »",
      ],
      voixOff:
        "Le génie de Diaghilev, c'est aussi de réunir autour du ballet les plus grands créateurs de son époque. Des musiciens, comme Stravinsky, Ravel ou Satie. Des peintres, comme Léon Bakst, puis Pablo Picasso lui-même, qui signe les décors du ballet Parade en dix-neuf cent dix-sept. On raconte que Diaghilev aurait un jour lancé au jeune poète Jean Cocteau ce défi resté célèbre : « Étonne-moi ». Avec les Ballets russes, la danse devient un art total, mêlant mouvement, musique et peinture.",
    },
    {
      titre: "Le grand retour du danseur",
      illustration: "🕺",
      visuel: "Le danseur au premier plan",
      contenu: [
        "Depuis l'époque romantique, le danseur masculin était resté au second plan",
        "Avec Nijinski puis d'autres danseurs-étoiles, les Ballets russes lui rendent tout son éclat",
        "Après Nijinski, d'autres chorégraphes marquent la troupe : Léonide Massine, Bronislava Nijinska",
        "Un jeune chorégraphe s'y révèle aussi dans les années 1920 : George Balanchine",
      ],
      voixOff:
        "Souviens-toi : depuis l'époque romantique, le danseur masculin restait dans l'ombre de la ballerine. Avec Nijinski, puis d'autres interprètes exceptionnels, les Ballets russes lui redonnent tout son éclat : le public vient désormais admirer aussi bien les hommes que les femmes. Après Nijinski, d'autres chorégraphes prennent le relais dans la troupe, comme Léonide Massine ou Bronislava Nijinska. Dans les années mille neuf cent vingt, un tout jeune chorégraphe s'y révèle également : George Balanchine, qui inventera plus tard le ballet néoclassique.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "1909 : Diaghilev fonde à Paris les Ballets russes, une troupe qui tourne en Europe et aux États-Unis",
        "Fokine renouvelle la chorégraphie : une œuvre unifiée (danse, musique, décors)",
        "Nijinski, danseur puis chorégraphe, crée le scandale avec L'Après-midi d'un faune (1912) et Le Sacre du printemps (1913)",
        "Diaghilev réunit danse, musique (Stravinsky) et peinture (Bakst, Picasso)",
        "Les Ballets russes redonnent au danseur masculin toute sa place, jusqu'à la mort de Diaghilev en 1929",
      ],
      voixOff:
        "Résumons. En dix-neuf cent neuf, Serge de Diaghilev fonde à Paris les Ballets russes. Michel Fokine y invente une chorégraphie unifiée, où tout raconte une même histoire. Vaslav Nijinski, danseur extraordinaire devenu chorégraphe, provoque le scandale avec L'Après-midi d'un faune puis, en dix-neuf cent treize, avec Le Sacre du printemps. Diaghilev rassemble autour de la danse les plus grands musiciens et peintres de son temps, et redonne au danseur masculin toute sa place. La troupe disparaît en dix-neuf cent vingt-neuf, à la mort de Diaghilev, mais elle a changé pour toujours l'histoire du ballet.",
    },
  ],
  fiche: {
    intro:
      "En 1909, l'imprésario russe Serge de Diaghilev fonde à Paris les Ballets russes, une troupe qui va bouleverser la danse du XXe siècle : renouveau de la chorégraphie avec Fokine, révolution de Nijinski, scandale du Sacre du printemps (1913), et alliance de la danse avec la musique et la peinture les plus modernes.",
    sections: [
      {
        titre: "Diaghilev et la troupe",
        points: [
          "Serge de Diaghilev (1872-1929) : critique d'art et imprésario russe",
          "1909 : il fonde à Paris les Ballets russes",
          "Danseurs formés en Russie, mais troupe basée à Paris, tournant en Europe et aux États-Unis",
          "La compagnie ne s'est jamais produite en Russie ; elle disparaît en 1929 à la mort de Diaghilev",
        ],
      },
      {
        titre: "Fokine et le renouveau chorégraphique",
        points: [
          "Michel Fokine refuse le ballet fait de numéros séparés",
          "Il veut une œuvre unifiée : danse, musique et décors au service d'une seule histoire",
          "Grands succès : L'Oiseau de feu (1910) et Petrouchka (1911), sur des musiques de Stravinsky",
        ],
      },
      {
        titre: "Nijinski et le Sacre du printemps",
        points: [
          "Vaslav Nijinski : danseur star, puis chorégraphe au style anguleux et novateur",
          "1912 : L'Après-midi d'un faune (musique de Debussy) fait scandale",
          "29 mai 1913 : Le Sacre du printemps (musique de Stravinsky), au Théâtre des Champs-Élysées, provoque un scandale retentissant",
        ],
      },
      {
        titre: "Une œuvre d'art totale et son héritage",
        points: [
          "Diaghilev associe à la danse de grands musiciens (Stravinsky, Ravel, Satie) et peintres (Bakst, Picasso)",
          "Après Nijinski : Massine, Nijinska, puis le jeune Balanchine, comme chorégraphes de la troupe",
          "Héritage majeur : le retour du danseur masculin au premier plan, après son déclin à l'époque romantique",
        ],
      },
    ],
    audio:
      "Fiche de révision : les Ballets russes de Diaghilev. En dix-neuf cent neuf, l'imprésario russe Serge de Diaghilev fonde à Paris la troupe des Ballets russes, formée de danseurs venus des théâtres impériaux russes mais qui ne se produira jamais en Russie. Le chorégraphe Michel Fokine y invente un ballet unifié, où la danse, la musique et les décors racontent ensemble une même histoire, avec des succès comme L'Oiseau de feu et Petrouchka, sur des musiques d'Igor Stravinsky. Le danseur Vaslav Nijinski devient à son tour chorégraphe et provoque deux scandales : en dix-neuf cent douze avec L'Après-midi d'un faune, puis, le vingt-neuf mai dix-neuf cent treize, avec Le Sacre du printemps, toujours sur une musique de Stravinsky. Diaghilev réunit autour de la danse les plus grands artistes de son temps, musiciens et peintres, et redonne au danseur masculin toute sa place, après des décennies d'effacement. La troupe s'éteint en dix-neuf cent vingt-neuf, à la mort de Diaghilev, mais son influence marque toute la danse du vingtième siècle.",
  },
  memoCards: [
    {
      recto: "Qui fonde les Ballets russes, où et quand ?",
      verso: "Serge de Diaghilev, imprésario russe, fonde la troupe à Paris en 1909.",
    },
    {
      recto: "Où sont formés les danseurs des Ballets russes, et où la troupe se produit-elle ?",
      verso: "Ils sont formés dans les théâtres impériaux russes, mais la troupe est basée à Paris et tourne en Europe et aux États-Unis ; elle ne s'est jamais produite en Russie.",
    },
    {
      recto: "Qu'apporte Michel Fokine à la chorégraphie ?",
      verso: "Il refuse les ballets faits de numéros séparés et veut une œuvre unifiée : danse, musique et décors au service d'une seule histoire.",
    },
    {
      recto: "Deux ballets de Fokine sur une musique de Stravinsky (avec dates) ?",
      verso: "L'Oiseau de feu (1910) et Petrouchka (1911).",
    },
    {
      recto: "Qui est Vaslav Nijinski ?",
      verso: "Danseur star des Ballets russes, célèbre pour ses sauts, devenu chorégraphe au style anguleux et novateur.",
    },
    {
      recto: "Le Sacre du printemps : date, lieu, musicien, chorégraphe ?",
      verso: "29 mai 1913, Théâtre des Champs-Élysées à Paris. Musique d'Igor Stravinsky, chorégraphie de Vaslav Nijinski. La création provoque un scandale retentissant.",
    },
    {
      recto: "Cite deux artistes (peintres) associés aux Ballets russes.",
      verso: "Léon Bakst et Alexandre Benois (décors et costumes), puis Pablo Picasso, qui signe les décors de Parade en 1917.",
    },
    {
      recto: "Quel est l'héritage majeur des Ballets russes pour le danseur masculin ?",
      verso: "Ils lui redonnent tout son éclat et son importance, après son déclin à l'époque du ballet romantique.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année Serge de Diaghilev fonde-t-il les Ballets russes à Paris ?",
      choix: ["1841", "1895", "1909", "1929"],
      bonneReponse: 2,
      explication: "Diaghilev fonde les Ballets russes à Paris en 1909.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Serge de Diaghilev était avant tout :",
      choix: ["Un danseur étoile", "Un compositeur", "Un imprésario et critique d'art", "Un peintre de décors"],
      bonneReponse: 2,
      explication:
        "Diaghilev n'était pas danseur mais un organisateur passionné par tous les arts, capable de réunir danseurs, musiciens et peintres autour d'un même projet.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans quelle ville les Ballets russes se sont-ils jamais produits, alors même que leur nom l'évoque ?",
      reponse: "En Russie : la troupe, bien que formée de danseurs russes, était basée à Paris et n'a jamais dansé en Russie.",
      explication: "C'est un détail surprenant souvent demandé pour vérifier la bonne compréhension du chapitre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel chorégraphe renouvelle la danse au tout début des Ballets russes ?",
      choix: ["Marius Petipa", "Michel Fokine", "George Balanchine", "Léonide Massine"],
      bonneReponse: 1,
      explication: "Michel Fokine est le premier grand chorégraphe des Ballets russes, avant Nijinski.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que refuse Michel Fokine dans le ballet traditionnel ?",
      choix: [
        "L'usage de la musique",
        "Les ballets faits de numéros séparés, sans lien entre eux",
        "La présence de décors",
        "Les rôles masculins",
      ],
      bonneReponse: 1,
      explication:
        "Fokine veut une œuvre unifiée où danse, musique et décors racontent ensemble une seule histoire, au lieu d'un enchaînement de numéros de virtuosité.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux ballets chorégraphiés par Fokine sur une musique de Stravinsky, avec leurs dates.",
      reponse: "L'Oiseau de feu (1910) et Petrouchka (1911).",
      explication: "Ces deux ballets révèlent le jeune compositeur Igor Stravinsky au public parisien.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel ballet de Nijinski, créé en 1912 sur une musique de Debussy, fait déjà scandale ?",
      choix: ["Petrouchka", "L'Oiseau de feu", "L'Après-midi d'un faune", "Parade"],
      bonneReponse: 2,
      explication:
        "L'Après-midi d'un faune (1912) choque par ses mouvements de profil, presque plats, très éloignés de la grâce classique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne la date, le lieu, le compositeur et le chorégraphe du Sacre du printemps.",
      reponse:
        "Créé le 29 mai 1913 au Théâtre des Champs-Élysées à Paris, sur une musique d'Igor Stravinsky et une chorégraphie de Vaslav Nijinski.",
      explication: "La création a provoqué l'un des plus grands scandales de l'histoire du spectacle.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi la chorégraphie du Sacre du printemps a-t-elle choqué le public de 1913 ?",
      choix: [
        "Parce que les danseurs restaient immobiles toute la représentation",
        "Parce qu'elle rompait avec la grâce classique : pieds tournés en dedans, corps ramassés, rythmes heurtés",
        "Parce que la musique était jouée sans orchestre",
        "Parce que le ballet ne comportait aucun danseur",
      ],
      bonneReponse: 1,
      explication:
        "Le sujet (un sacrifice rituel), les rythmes violents de Stravinsky et une gestuelle volontairement lourde et anguleuse ont provoqué un tumulte célèbre dans la salle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "En quoi peut-on dire que les Ballets russes ont fait de la danse un « art total » ? Donne deux exemples précis.",
      reponse:
        "Diaghilev réunissait autour de la danse les plus grands créateurs de son temps : des musiciens comme Stravinsky, Ravel ou Satie, et des peintres comme Léon Bakst, Alexandre Benois, puis Pablo Picasso, qui a signé les décors de Parade en 1917. La danse, la musique et la peinture se répondaient dans une même œuvre.",
      explication: "L'idée d'« art total » signifie que tous les arts collaborent au service d'une seule œuvre scénique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique comment les Ballets russes ont changé la place du danseur masculin.",
      reponse:
        "Depuis l'époque romantique, le danseur masculin était resté au second plan, souvent réduit au rôle de porteur. Avec Vaslav Nijinski, danseur exceptionnel devenu chorégraphe, puis avec d'autres interprètes et chorégraphes hommes (Massine, plus tard Balanchine), les Ballets russes redonnent au danseur toute sa place aux yeux du public.",
      explication: "C'est un retournement majeur par rapport au XIXe siècle romantique, dominé par le culte de la ballerine.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Cite trois chorégraphes qui ont travaillé pour les Ballets russes, en plus de Fokine et Nijinski.",
      reponse: "Léonide Massine, Bronislava Nijinska et George Balanchine, révélé au sein de la troupe dans les années 1920.",
      explication: "Les Ballets russes ont formé plusieurs générations de grands chorégraphes du XXe siècle.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Les Ballets russes sont fondés à Paris en :",
      choix: ["1841", "1909", "1913", "1929"],
      bonneReponse: 1,
      explication: "Serge de Diaghilev fonde la troupe en 1909.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qui est Serge de Diaghilev ?",
      reponse: "Un imprésario et critique d'art russe, fondateur et directeur des Ballets russes.",
      explication: "Ce n'était pas un danseur, mais un organisateur capable de réunir les plus grands artistes de son temps.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le Sacre du printemps est créé le 29 mai 1913 dans quel théâtre parisien ?",
      choix: ["L'Opéra de Paris", "Le Théâtre des Champs-Élysées", "Le Théâtre du Châtelet", "L'Opéra-Comique"],
      bonneReponse: 1,
      explication: "La création a eu lieu au tout nouveau Théâtre des Champs-Élysées.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel compositeur a écrit la musique du Sacre du printemps et de L'Oiseau de feu ?",
      reponse: "Igor Stravinsky.",
      explication: "Ces ballets ont rendu Stravinsky célèbre dans le monde entier.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'apportent les Ballets russes à la place du danseur masculin ?",
      reponse: "Ils lui redonnent tout son éclat, après son déclin à l'époque romantique, grâce à des interprètes comme Vaslav Nijinski.",
      explication: "C'est un des grands héritages de la troupe pour toute la danse du XXe siècle.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les Ballets russes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Serge de Diaghilev fonde les Ballets russes en :",
          choix: ["1889", "1909", "1917", "1929"],
          bonneReponse: 1,
          explication: "C'est en 1909, à Paris, que Diaghilev fonde sa troupe.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans quelle ville les Ballets russes sont-ils basés ?",
          reponse: "À Paris, bien que les danseurs soient formés en Russie.",
          explication: "La troupe tourne ensuite dans toute l'Europe et aux États-Unis, mais jamais en Russie.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Michel Fokine veut avant tout :",
          choix: [
            "Multiplier les variations de virtuosité pure",
            "Créer une œuvre unifiée où danse, musique et décors racontent une même histoire",
            "Revenir au ballet romantique du XIXe siècle",
            "Supprimer la musique des ballets",
          ],
          bonneReponse: 1,
          explication: "C'est le principe central du renouveau chorégraphique apporté par Fokine.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne le titre, la date et le compositeur du ballet qui a provoqué un scandale retentissant en 1913.",
          reponse: "Le Sacre du printemps, créé le 29 mai 1913, sur une musique d'Igor Stravinsky et une chorégraphie de Vaslav Nijinski.",
          explication: "Le scandale vient à la fois de la musique très rythmée et de la chorégraphie volontairement lourde et anguleuse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite un peintre célèbre ayant réalisé les décors d'un ballet des Ballets russes, et le titre du ballet.",
          reponse: "Pablo Picasso a réalisé les décors de Parade, créé en 1917.",
          explication: "Diaghilev associait systématiquement de grands artistes de son temps à ses spectacles.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : montre en quoi Le Sacre du printemps illustre à la fois le renouveau chorégraphique des Ballets russes et leur alliance avec les plus grands artistes.",
          reponse:
            "Sur le plan chorégraphique, Nijinski rompt totalement avec les codes classiques : pieds tournés en dedans, corps ramassés, mouvements lourds et heurtés, pour évoquer un rite païen archaïque. Sur le plan musical, Stravinsky compose une partition aux rythmes complexes et violents, elle aussi révolutionnaire pour l'époque. Le ballet réunit ainsi une chorégraphie et une musique tout aussi novatrices l'une que l'autre, ce qui explique pourquoi la création a provoqué un scandale si retentissant : le public de 1913 n'était préparé à aucun des deux bouleversements.",
          explication:
            "Une bonne réponse relie précisément la nouveauté chorégraphique et la nouveauté musicale, sans se contenter de raconter l'histoire du ballet.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les Ballets russes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Vaslav Nijinski était :",
          choix: [
            "Un imprésario",
            "Un compositeur",
            "Un danseur devenu aussi chorégraphe",
            "Un peintre de décors",
          ],
          bonneReponse: 2,
          explication: "Nijinski est d'abord danseur étoile des Ballets russes, puis il devient chorégraphe.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel ballet créé en 1912, sur une musique de Debussy, provoque déjà un petit scandale ?",
          reponse: "L'Après-midi d'un faune.",
          explication: "Les mouvements de profil, presque plats, choquent une partie du public.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle année marque la fin des Ballets russes, à la mort de Diaghilev ?",
          choix: ["1913", "1917", "1929", "1947"],
          bonneReponse: 2,
          explication: "Diaghilev meurt en 1929, ce qui met fin à la troupe.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux musiciens (autres que Stravinsky) ayant composé pour les Ballets russes.",
          reponse: "Maurice Ravel et Erik Satie (on peut aussi citer Claude Debussy ou Sergueï Prokofiev).",
          explication: "Diaghilev collaborait avec les plus grands compositeurs de son époque.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux chorégraphes révélés par les Ballets russes après Fokine et Nijinski.",
          reponse: "Léonide Massine et Bronislava Nijinska (on peut aussi citer George Balanchine, révélé dans les années 1920).",
          explication: "La troupe a formé plusieurs générations de grands chorégraphes du XXe siècle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : en quoi les Ballets russes marquent-ils une rupture avec le ballet romantique du XIXe siècle étudié précédemment ?",
          reponse:
            "Le ballet romantique reposait sur le culte de la ballerine, des histoires surnaturelles (sylphides, willis) et une danse académique fondée sur la légèreté et la grâce. Les Ballets russes, eux, redonnent une place centrale au danseur masculin (Nijinski), explorent des sujets nouveaux (rites païens, marionnettes vivantes) et inventent des gestuelles parfois volontairement anguleuses ou brutales, très loin de l'idéal aérien du romantisme. Ils associent aussi la danse à l'art moderne (peinture, musique) de façon beaucoup plus étroite que ne le faisait le ballet du XIXe siècle.",
          explication:
            "Une bonne réponse compare précisément les deux périodes : sujets, danseur mis en valeur, style de mouvement, place des autres arts.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "1909 : Serge de Diaghilev fonde à Paris les Ballets russes, troupe formée de danseurs russes mais qui ne se produira jamais en Russie.",
    "Michel Fokine renouvelle la chorégraphie : une œuvre unifiée (danse, musique, décors), avec L'Oiseau de feu (1910) et Petrouchka (1911), sur des musiques de Stravinsky.",
    "Vaslav Nijinski, danseur puis chorégraphe, provoque le scandale avec L'Après-midi d'un faune (1912) et Le Sacre du printemps (1913).",
    "Le Sacre du printemps est créé le 29 mai 1913 au Théâtre des Champs-Élysées, musique de Stravinsky, chorégraphie de Nijinski.",
    "Diaghilev réunit autour de la danse les plus grands musiciens (Stravinsky, Ravel, Satie) et peintres (Bakst, Picasso) de son temps.",
    "Les Ballets russes redonnent au danseur masculin toute sa place ; la troupe disparaît en 1929, à la mort de Diaghilev.",
  ],
},
{
  slug: "grands-choregraphes-classiques",
  titre: "Petipa et les grands ballets du répertoire",
  matiere: "histoire-danse",
  niveau: "4eme",
  description:
    "Approfondir l'œuvre de Marius Petipa, le bâtisseur du ballet académique russe : sa carrière à Saint-Pétersbourg, sa collaboration avec Tchaïkovski, la construction en grand pas de deux, variations et coda, et les trois piliers de son répertoire, La Belle au bois dormant, Casse-Noisette et Le Lac des cygnes.",
  objectifs: [
    "Retracer la carrière de Marius Petipa aux Théâtres impériaux de Saint-Pétersbourg",
    "Connaître sa collaboration avec Tchaïkovski et le rôle de Lev Ivanov",
    "Distinguer les trois grands ballets du répertoire académique : La Belle au bois dormant, Casse-Noisette, Le Lac des cygnes",
    "Comprendre la construction d'un ballet académique : grand pas de deux, variations, coda, corps de ballet",
    "Identifier ce qui rend ces ballets encore aujourd'hui les piliers du répertoire classique mondial",
  ],
  slides: [
    {
      titre: "Marius Petipa, un Français au service du tsar",
      illustration: "🇫🇷",
      visuel: "Marius Petipa (1818-1910)",
      contenu: [
        "Marius Petipa naît à Marseille en 1818, dans une famille de danseurs",
        "Après une carrière de danseur en France et en Espagne, il part pour la Russie en 1847",
        "Il devient danseur puis maître de ballet des Théâtres impériaux de Saint-Pétersbourg",
        "Il y restera plus de cinquante ans, jusqu'au début du XXe siècle",
      ],
      voixOff:
        "Marius Petipa naît à Marseille en dix-huit cent dix-huit, dans une famille de danseurs. Après avoir dansé en France puis en Espagne, il part en dix-huit cent quarante-sept pour la Russie, où on lui propose un engagement. Il devient danseur, puis maître de ballet des Théâtres impériaux de Saint-Pétersbourg. Ce Français va passer plus de cinquante ans en Russie et y devenir le plus grand chorégraphe de son siècle.",
    },
    {
      titre: "Le ballet académique : un nouvel âge d'or",
      illustration: "👑",
      visuel: "Ballet académique",
      contenu: [
        "Petipa hérite du romantisme (le ballet blanc) mais invente une nouvelle esthétique",
        "Tutu plus court, technique très virtuose, grands ensembles réglés comme une horloge",
        "Ses ballets sont soutenus par les Théâtres impériaux : moyens somptueux, grands orchestres",
        "Il codifie une structure que l'on retrouve dans presque tous ses grands ballets",
      ],
      voixOff:
        "Petipa hérite du ballet romantique français, en particulier de l'acte blanc, mais il invente une esthétique nouvelle : le ballet académique. Le tutu raccourcit pour libérer les jambes, la technique devient beaucoup plus virtuose, et les corps de ballet se déplacent en grandes formations géométriques, réglées avec une précision d'horloger. Grâce au soutien des Théâtres impériaux russes, Petipa dispose de moyens somptueux : grands orchestres, décors immenses, dizaines de danseurs. Un nouvel âge d'or du ballet commence.",
    },
    {
      titre: "La Belle au bois dormant (1890)",
      illustration: "🌹",
      visuel: "1890 — Tchaïkovski",
      contenu: [
        "Créée en 1890 au Théâtre Mariinsky de Saint-Pétersbourg",
        "Musique de Piotr Ilitch Tchaïkovski, chorégraphie de Marius Petipa",
        "L'histoire de la princesse Aurore, endormie cent ans par une méchante fée",
        "Considéré comme le sommet du ballet académique : danse et musique parfaitement unies",
      ],
      voixOff:
        "En dix-huit cent quatre-vingt-dix, Petipa crée au théâtre Mariinsky de Saint-Pétersbourg La Belle au bois dormant, sur une musique de Piotr Ilitch Tchaïkovski. L'histoire, inspirée du conte de Charles Perrault, raconte le sort de la princesse Aurore, endormie cent années par la méchante fée Carabosse, puis réveillée par un baiser. Ce ballet est souvent considéré comme le chef-d'œuvre absolu de Petipa : jamais danse et musique symphonique n'avaient été aussi étroitement unies.",
    },
    {
      titre: "Casse-Noisette (1892)",
      illustration: "🎄",
      visuel: "1892 — Nuit de Noël",
      contenu: [
        "Créé en 1892 à Saint-Pétersbourg, musique de Tchaïkovski",
        "Chorégraphie commencée par Petipa, achevée par son assistant Lev Ivanov",
        "L'histoire de Clara, un casse-noisette transformé en prince, et le royaume des sucreries",
        "Reste aujourd'hui le ballet le plus donné dans le monde à Noël",
      ],
      voixOff:
        "Deux ans plus tard, en dix-huit cent quatre-vingt-douze, naît Casse-Noisette, toujours sur une musique de Tchaïkovski. Petipa, malade, en confie l'achèvement à son assistant Lev Ivanov. L'histoire se déroule un soir de Noël : la petite Clara reçoit un casse-noisette qui se transforme en prince et l'emmène dans un royaume féerique peuplé de sucreries dansantes. Aujourd'hui encore, Casse-Noisette est le ballet le plus joué au monde chaque mois de décembre.",
    },
    {
      titre: "Le Lac des cygnes : un échec, puis un triomphe",
      illustration: "🦢",
      visuel: "1877 puis 1895",
      contenu: [
        "Créé en 1877 à Moscou par un autre chorégraphe : c'est un échec",
        "Musique de Tchaïkovski, jugée d'abord trop complexe pour la danse",
        "En 1895, à Saint-Pétersbourg, nouvelle version signée Petipa et Lev Ivanov",
        "Ce triomphe fixe la version que l'on danse encore aujourd'hui dans le monde entier",
      ],
      voixOff:
        "L'histoire du Lac des cygnes est étonnante. Créé une première fois en dix-huit cent soixante-dix-sept à Moscou, par un autre chorégraphe, ce fut un échec : la musique de Tchaïkovski, très riche, semblait trop complexe pour être dansée. Il faut attendre dix-huit cent quatre-vingt-quinze pour qu'une nouvelle version, signée cette fois par Petipa et Lev Ivanov, triomphe à Saint-Pétersbourg. C'est cette version de dix-huit cent quatre-vingt-quinze que l'on danse encore aujourd'hui, partout dans le monde.",
    },
    {
      titre: "Petipa et Ivanov : deux univers complémentaires",
      illustration: "🤝",
      visuel: "Petipa / Ivanov",
      contenu: [
        "Dans Le Lac des cygnes, les actes de cour (I et III) sont signés Petipa : virtuosité, danses de caractère",
        "Les actes du lac (II et IV), avec les cygnes, sont signés Lev Ivanov : poésie, ballet blanc",
        "Cette répartition illustre deux styles qui se complètent au sein du ballet académique",
        "L'acte des cygnes reste un hommage direct au ballet blanc romantique (Giselle)",
      ],
      voixOff:
        "Dans Le Lac des cygnes, deux styles se répondent. Petipa signe les actes de cour, avec leurs danses de caractère et leur grande virtuosité, comme la célèbre variation d'Odile aux trente-deux fouettés. Lev Ivanov, lui, signe les actes du lac, peuplés de cygnes : une atmosphère plus poétique, plus mystérieuse, héritée directement du ballet blanc romantique de Giselle. Ensemble, Petipa et Ivanov créent un équilibre parfait entre virtuosité et poésie.",
    },
    {
      titre: "La structure d'un ballet académique",
      illustration: "📐",
      visuel: "Pas de deux — variations — coda",
      contenu: [
        "Petipa codifie une structure que l'on retrouve dans presque tous ses grands ballets",
        "Le grand pas de deux : adage (porté, lenteur), puis variation de l'homme, variation de la femme",
        "La coda : final rapide et spectaculaire, dansé ensemble",
        "Le corps de ballet : de grands ensembles aux figures géométriques très précises",
      ],
      voixOff:
        "Petipa invente une véritable grammaire du ballet académique. Le moment central d'un acte est souvent le grand pas de deux : d'abord un adage, lent et porté, où le danseur soutient sa partenaire dans de grandes lignes ; puis une variation pour l'homme, une variation pour la femme, chacune montrant sa virtuosité ; enfin une coda, un final rapide et spectaculaire dansé à deux. Autour d'eux, le corps de ballet dessine de grandes figures géométriques, réglées avec une précision extrême.",
    },
    {
      titre: "Autres grands ballets de Petipa",
      illustration: "💃",
      visuel: "Répertoire",
      contenu: [
        "Don Quichotte (1869) : ballet énergique et coloré, inspiré du roman de Cervantès",
        "La Bayadère (1877) : célèbre pour la scène du Royaume des ombres, sommet du corps de ballet",
        "Raymonda (1898) : sur une musique d'Alexandre Glazounov",
        "Ces ballets forment, avec les trois grands classiques, le cœur du répertoire académique",
      ],
      voixOff:
        "Petipa a signé bien d'autres ballets qui restent au répertoire. Don Quichotte, créé en dix-huit cent soixante-neuf, inspiré du roman de Cervantès, brille par son énergie et ses couleurs espagnoles. La Bayadère, créée en dix-huit cent soixante-dix-sept, est restée célèbre pour sa scène du Royaume des ombres, où des dizaines de danseuses identiques envahissent la scène : un sommet de précision pour le corps de ballet. Raymonda, en dix-huit cent quatre-vingt-dix-huit, est composée sur une musique d'Alexandre Glazounov. Avec les trois grands classiques, ces ballets forment le cœur du répertoire académique mondial.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Marius Petipa (1818-1910), Français devenu maître de ballet à Saint-Pétersbourg dès 1847",
        "Il invente le ballet académique : virtuosité, grands ensembles, tutu court",
        "Trois piliers du répertoire : La Belle au bois dormant (1890), Casse-Noisette (1892), Le Lac des cygnes (version de 1895 avec Lev Ivanov)",
        "Structure type : grand pas de deux (adage, variations, coda) et corps de ballet géométrique",
        "Ces ballets, dansés dans le monde entier, restent la base du répertoire classique",
      ],
      voixOff:
        "Résumons. Marius Petipa, danseur français né en dix-huit cent dix-huit, devient en dix-huit cent quarante-sept maître de ballet à Saint-Pétersbourg. Il y invente le ballet académique, avec ses grands ensembles et sa technique virtuose. Trois ballets forment le sommet de son œuvre : La Belle au bois dormant en dix-huit cent quatre-vingt-dix, Casse-Noisette en dix-huit cent quatre-vingt-douze, et Le Lac des cygnes, dans sa version de dix-huit cent quatre-vingt-quinze réalisée avec Lev Ivanov. Grand pas de deux, variations, coda, corps de ballet géométrique : cette grammaire inventée par Petipa reste, aujourd'hui encore, au cœur du répertoire classique mondial.",
    },
  ],
  fiche: {
    intro:
      "Marius Petipa (1818-1910), danseur français devenu maître de ballet des Théâtres impériaux de Saint-Pétersbourg, invente le ballet académique et compose, souvent sur des musiques de Tchaïkovski, les trois piliers du répertoire classique mondial : La Belle au bois dormant, Casse-Noisette et Le Lac des cygnes.",
    sections: [
      {
        titre: "Marius Petipa, une carrière russe",
        points: [
          "Né à Marseille en 1818 dans une famille de danseurs",
          "Part pour la Russie en 1847 ; devient maître de ballet des Théâtres impériaux de Saint-Pétersbourg",
          "Y reste plus de cinquante ans ; invente le ballet académique, héritier du romantisme",
        ],
      },
      {
        titre: "Les trois piliers du répertoire",
        points: [
          "La Belle au bois dormant (1890) : musique de Tchaïkovski, chorégraphie de Petipa, sommet de son art",
          "Casse-Noisette (1892) : musique de Tchaïkovski, achevé par Lev Ivanov, ballet de Noël le plus joué au monde",
          "Le Lac des cygnes : échec en 1877 à Moscou, triomphe en 1895 à Saint-Pétersbourg (Petipa et Ivanov)",
        ],
      },
      {
        titre: "Petipa et Ivanov, deux styles complémentaires",
        points: [
          "Petipa : actes de cour, danses de caractère, grande virtuosité (ex. les trente-deux fouettés d'Odile)",
          "Lev Ivanov : actes du lac (les cygnes), atmosphère poétique héritée du ballet blanc romantique",
          "D'autres ballets majeurs de Petipa : Don Quichotte (1869), La Bayadère (1877), Raymonda (1898)",
        ],
      },
      {
        titre: "La grammaire du ballet académique",
        points: [
          "Le grand pas de deux : adage porté, variation de l'homme, variation de la femme, coda finale",
          "Le corps de ballet : grandes figures géométriques réglées avec précision",
          "Cette structure, codifiée par Petipa, reste un modèle pour le ballet classique actuel",
        ],
      },
    ],
    audio:
      "Fiche de révision : Petipa et les grands ballets du répertoire. Marius Petipa, danseur français né en dix-huit cent dix-huit, part pour la Russie en dix-huit cent quarante-sept et devient maître de ballet des Théâtres impériaux de Saint-Pétersbourg. Il y invente le ballet académique, avec ses grands ensembles réglés avec précision et sa technique très virtuose. Il compose, le plus souvent sur des musiques de Piotr Ilitch Tchaïkovski, les trois piliers du répertoire classique mondial : La Belle au bois dormant en dix-huit cent quatre-vingt-dix, Casse-Noisette en dix-huit cent quatre-vingt-douze, achevé par son assistant Lev Ivanov, et Le Lac des cygnes, d'abord un échec en dix-huit cent soixante-dix-sept à Moscou, puis un triomphe dans sa version de dix-huit cent quatre-vingt-quinze à Saint-Pétersbourg. Petipa codifie aussi la structure du grand pas de deux, avec son adage, ses variations et sa coda finale. Cette grammaire du ballet académique reste, aujourd'hui encore, au cœur du répertoire classique dansé dans le monde entier.",
  },
  memoCards: [
    {
      recto: "Qui est Marius Petipa et où fait-il carrière ?",
      verso: "Danseur et chorégraphe français (1818-1910), maître de ballet des Théâtres impériaux de Saint-Pétersbourg à partir de 1847.",
    },
    {
      recto: "La Belle au bois dormant : date, musicien, chorégraphe ?",
      verso: "Créée en 1890 à Saint-Pétersbourg. Musique de Piotr Ilitch Tchaïkovski, chorégraphie de Marius Petipa.",
    },
    {
      recto: "Casse-Noisette : date et particularité de sa chorégraphie ?",
      verso: "Créé en 1892 ; musique de Tchaïkovski ; chorégraphie commencée par Petipa et achevée par son assistant Lev Ivanov.",
    },
    {
      recto: "Le Lac des cygnes : que s'est-il passé en 1877, puis en 1895 ?",
      verso: "1877 : création à Moscou, c'est un échec. 1895 : nouvelle version à Saint-Pétersbourg par Petipa et Lev Ivanov, un triomphe qui fixe la version dansée aujourd'hui.",
    },
    {
      recto: "Dans Le Lac des cygnes, que signe Petipa, que signe Ivanov ?",
      verso: "Petipa signe les actes de cour (I et III), virtuoses ; Lev Ivanov signe les actes du lac (II et IV), poétiques, avec les cygnes.",
    },
    {
      recto: "Qu'est-ce qu'un grand pas de deux ?",
      verso: "Un moment central du ballet académique : adage porté, variation de l'homme, variation de la femme, puis coda finale dansée ensemble.",
    },
    {
      recto: "Cite trois autres ballets de Petipa (hors trilogie Tchaïkovski).",
      verso: "Don Quichotte (1869), La Bayadère (1877, avec le Royaume des ombres), Raymonda (1898, musique de Glazounov).",
    },
    {
      recto: "Que reprend Le Lac des cygnes du ballet romantique ?",
      verso: "L'acte blanc des cygnes prolonge directement le principe du ballet blanc inventé avec Giselle (1841).",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Marius Petipa est né dans quel pays ?",
      choix: ["En Russie", "En France", "En Italie", "En Angleterre"],
      bonneReponse: 1,
      explication: "Petipa est né à Marseille en 1818, avant de faire toute sa carrière en Russie à partir de 1847.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quelle ville russe Petipa a-t-il fait toute sa carrière de maître de ballet ?",
      choix: ["Moscou", "Kiev", "Saint-Pétersbourg", "Novossibirsk"],
      bonneReponse: 2,
      explication: "Petipa était maître de ballet des Théâtres impériaux de Saint-Pétersbourg.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel compositeur a écrit la musique de La Belle au bois dormant, Casse-Noisette et Le Lac des cygnes ?",
      reponse: "Piotr Ilitch Tchaïkovski.",
      explication: "Ces trois ballets forment ce que l'on appelle parfois la trilogie Tchaïkovski.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année La Belle au bois dormant est-elle créée ?",
      choix: ["1877", "1890", "1892", "1895"],
      bonneReponse: 1,
      explication: "La Belle au bois dormant est créée en 1890 à Saint-Pétersbourg.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui achève la chorégraphie de Casse-Noisette, Petipa étant tombé malade ?",
      choix: ["Michel Fokine", "Lev Ivanov", "Vaslav Nijinski", "Alexandre Benois"],
      bonneReponse: 1,
      explication: "Lev Ivanov, assistant de Petipa, achève la chorégraphie de Casse-Noisette en 1892.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que s'est-il passé lors de la création du Lac des cygnes en 1877, et comment la situation a-t-elle changé en 1895 ?",
      reponse:
        "En 1877, la création à Moscou, par un autre chorégraphe, est un échec : la musique de Tchaïkovski semblait trop complexe pour la danse. En 1895, à Saint-Pétersbourg, une nouvelle version signée Petipa et Lev Ivanov triomphe et devient la version dansée encore aujourd'hui.",
      explication: "C'est un exemple rare d'un ballet raté, puis totalement réhabilité par une nouvelle chorégraphie.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans Le Lac des cygnes, qui signe les actes du lac, peuplés de cygnes (actes II et IV) ?",
      choix: ["Marius Petipa", "Lev Ivanov", "Michel Fokine", "Marius Petipa et Vaslav Nijinski ensemble"],
      bonneReponse: 1,
      explication: "Lev Ivanov signe les actes poétiques du lac ; Petipa signe les actes de cour (I et III).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris la structure d'un grand pas de deux dans un ballet académique de Petipa.",
      reponse:
        "Il comprend un adage (partie lente et portée, où le danseur soutient sa partenaire), puis une variation dansée par l'homme seul, une variation dansée par la femme seule, et enfin une coda, un final rapide et spectaculaire dansé ensemble.",
      explication: "Cette structure très codifiée se retrouve dans la plupart des grands ballets de Petipa.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel élément du Lac des cygnes prolonge directement l'héritage du ballet romantique (Giselle) ?",
      choix: [
        "Le grand pas de deux virtuose des actes de cour",
        "Les danses de caractère espagnoles et hongroises",
        "L'acte blanc des cygnes, au bord du lac",
        "La variation des trente-deux fouettés"
      ],
      bonneReponse: 2,
      explication:
        "L'acte des cygnes, avec son corps de ballet tout en blanc dans une atmosphère nocturne, reprend directement le principe du ballet blanc inventé pour l'acte II de Giselle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique en quoi Petipa et Lev Ivanov ont des styles complémentaires dans Le Lac des cygnes. Appuie-toi sur des exemples précis.",
      reponse:
        "Petipa signe les actes de cour (I et III), marqués par la virtuosité, les danses de caractère et de grands numéros spectaculaires comme la variation des trente-deux fouettés d'Odile. Lev Ivanov signe les actes du lac (II et IV), peuplés de cygnes, dans une atmosphère plus poétique et mystérieuse héritée du ballet blanc romantique. L'un apporte l'éclat technique, l'autre la profondeur émotionnelle : ensemble, ils créent un équilibre qui explique le succès durable du ballet.",
      explication: "Une bonne réponse distingue clairement les deux registres (virtuosité de cour / poésie du lac) et les relie aux bons actes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Cite trois autres ballets créés par Petipa en dehors de la trilogie Tchaïkovski, avec leurs dates.",
      reponse: "Don Quichotte (1869), La Bayadère (1877, avec sa célèbre scène du Royaume des ombres) et Raymonda (1898, sur une musique de Glazounov).",
      explication: "Ces ballets restent aujourd'hui au répertoire des grandes compagnies classiques du monde entier.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Pourquoi peut-on dire que Petipa a inventé une véritable « grammaire » du ballet académique ? Développe ta réponse.",
      reponse:
        "Petipa codifie une structure que l'on retrouve dans presque tous ses grands ballets : le grand pas de deux (adage, variations, coda), l'usage du corps de ballet en grandes figures géométriques très précises, l'alternance entre danse d'action (mime) et danse pure (variations). Cette structure est si claire et si efficace qu'elle est devenue un modèle transmis de génération en génération, encore utilisé aujourd'hui par les chorégraphes classiques : c'est en ce sens qu'on parle d'une grammaire, un ensemble de règles reconnaissables et réutilisables.",
      explication: "Une bonne réponse va au-delà de la liste des ballets et explique le principe général de construction hérité de Petipa.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Marius Petipa devient maître de ballet des Théâtres impériaux de :",
      choix: ["Paris", "Moscou", "Saint-Pétersbourg", "Vienne"],
      bonneReponse: 2,
      explication: "Petipa fait toute sa carrière à Saint-Pétersbourg à partir de 1847.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quels sont les trois grands ballets du répertoire académique de Petipa, avec un mot pour chacun ?",
      reponse: "La Belle au bois dormant (le sommet de son art, 1890), Casse-Noisette (le ballet de Noël, 1892), Le Lac des cygnes (le triomphe de 1895).",
      explication: "Tous trois sont composés sur des musiques de Tchaïkovski.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui achève Casse-Noisette et cosigne Le Lac des cygnes de 1895 avec Petipa ?",
      choix: ["Michel Fokine", "Lev Ivanov", "Léon Bakst", "Serge de Diaghilev"],
      bonneReponse: 1,
      explication: "Lev Ivanov est l'assistant, puis le co-chorégraphe de Petipa sur ces deux ballets.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qu'une coda dans un grand pas de deux ?",
      reponse: "Le final rapide et spectaculaire du pas de deux, dansé ensemble par les deux danseurs, après l'adage et les deux variations.",
      explication: "La coda conclut le pas de deux dans une démonstration de virtuosité partagée.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que s'est-il passé lors de la création du Lac des cygnes en 1877 à Moscou ?",
      reponse: "Ce fut un échec : la musique de Tchaïkovski paraissait trop riche et trop complexe pour être dansée à l'époque.",
      explication: "Le ballet ne triomphera que dix-huit ans plus tard, dans la version de Petipa et Ivanov (1895).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Petipa et les grands ballets du répertoire",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "En quelle année Marius Petipa part-il pour la Russie ?",
          choix: ["1818", "1847", "1877", "1910"],
          bonneReponse: 1,
          explication: "Petipa part pour la Russie en 1847 ; il y restera plus de cinquante ans.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Où et sur quelle musique La Belle au bois dormant est-elle créée en 1890 ?",
          reponse: "À Saint-Pétersbourg, sur une musique de Piotr Ilitch Tchaïkovski.",
          explication: "C'est le premier des trois grands ballets composés par Petipa avec Tchaïkovski.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Casse-Noisette raconte l'histoire :",
          choix: [
            "D'une princesse endormie cent ans",
            "D'une jeune fille devenue willi",
            "D'une petite fille et d'un casse-noisette transformé en prince",
            "D'un prince cherchant sa fiancée transformée en cygne",
          ],
          bonneReponse: 2,
          explication: "Casse-Noisette raconte l'histoire de Clara, un soir de Noël, et de son casse-noisette transformé en prince.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi Le Lac des cygnes a connu deux créations très différentes, en 1877 puis en 1895.",
          reponse:
            "La première création, à Moscou en 1877, fut un échec, jugée trop complexe musicalement pour la danse de l'époque. Il faut attendre 1895 pour qu'une nouvelle version, chorégraphiée par Petipa et Lev Ivanov à Saint-Pétersbourg, triomphe et devienne la référence dansée aujourd'hui dans le monde entier.",
          explication: "Cet exemple montre qu'un même ballet peut échouer puis devenir un classique grâce à une nouvelle chorégraphie.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que le grand pas de deux ? Décris ses trois grandes parties.",
          reponse: "C'est un moment central du ballet académique : l'adage (porté, lenteur), les variations (une pour l'homme, une pour la femme), puis la coda (final rapide dansé ensemble).",
          explication: "Cette structure est codifiée par Petipa et reste un modèle du ballet classique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : en quoi le ballet académique de Petipa est-il à la fois un héritier du ballet romantique et une rupture avec lui ?",
          reponse:
            "Petipa hérite du romantisme par le goût du merveilleux et surtout par l'acte blanc, comme celui des cygnes dans Le Lac des cygnes, directement issu de l'acte des willis de Giselle. Mais il rompt avec le romantisme par de nombreux aspects : le tutu raccourcit pour montrer la virtuosité des jambes, la technique devient beaucoup plus spectaculaire (sauts, tours, comme les trente-deux fouettés), et surtout les ballets s'appuient sur de grandes partitions symphoniques composées spécialement, notamment par Tchaïkovski, alors que le ballet romantique utilisait une musique plus simplement illustrative.",
          explication: "Une bonne réponse identifie à la fois la continuité (acte blanc, merveilleux) et les ruptures (tutu, virtuosité, musique symphonique).",
        },
      ],
    },
    {
      titre: "Examen 2 — Petipa et les grands ballets du répertoire",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Marius Petipa est né dans quelle ville française ?",
          choix: ["Paris", "Marseille", "Lyon", "Bordeaux"],
          bonneReponse: 1,
          explication: "Petipa naît à Marseille en 1818, dans une famille de danseurs.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel est le ballet de Noël le plus joué au monde, créé par Petipa et Ivanov en 1892 ?",
          reponse: "Casse-Noisette.",
          explication: "Il est traditionnellement dansé chaque année autour des fêtes de fin d'année.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Dans Le Lac des cygnes, quels actes sont signés par Lev Ivanov ?",
          choix: [
            "Les actes de cour (I et III)",
            "Les actes du lac, avec les cygnes (II et IV)",
            "L'ensemble du ballet",
            "Aucun, tout est signé Petipa",
          ],
          bonneReponse: 1,
          explication: "Ivanov signe les actes poétiques du lac ; Petipa signe les actes de cour.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite un autre ballet de Petipa, créé en 1877, célèbre pour sa scène du Royaume des ombres.",
          reponse: "La Bayadère.",
          explication: "Cette scène est un sommet de précision et d'unisson pour le corps de ballet.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quel compositeur a écrit la musique de Raymonda, autre grand ballet de Petipa (1898) ?",
          reponse: "Alexandre Glazounov.",
          explication: "Petipa a aussi travaillé avec d'autres compositeurs que Tchaïkovski.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : pourquoi les ballets de Petipa restent-ils, aujourd'hui encore, au cœur du répertoire des grandes compagnies classiques du monde entier ?",
          reponse:
            "Plusieurs raisons expliquent cette longévité. D'abord, la qualité exceptionnelle des musiques, notamment celles de Tchaïkovski, composées comme de véritables œuvres symphoniques. Ensuite, la solidité de la structure chorégraphique inventée par Petipa (grand pas de deux, variations, coda, corps de ballet), qui permet à chaque génération de danseurs de s'y illustrer tout en respectant un cadre clair. Enfin, ces ballets offrent un équilibre rare entre technique virtuose et récit accessible à tous les publics, ce qui en fait des œuvres idéales pour initier de nouveaux spectateurs à la danse classique.",
          explication: "Une bonne réponse dépasse la simple affirmation « ils sont beaux » pour analyser musique, structure chorégraphique et accessibilité du récit.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Marius Petipa (1818-1910), Français, part pour la Russie en 1847 et devient maître de ballet à Saint-Pétersbourg.",
    "Il invente le ballet académique : tutu court, grande virtuosité, corps de ballet en figures géométriques.",
    "La Belle au bois dormant (1890) et Casse-Noisette (1892) : musique de Tchaïkovski, Casse-Noisette achevé par Lev Ivanov.",
    "Le Lac des cygnes : échec à Moscou en 1877, triomphe à Saint-Pétersbourg en 1895 (Petipa et Ivanov).",
    "Le grand pas de deux (adage, variations, coda) est la structure type inventée par Petipa.",
    "Autres ballets majeurs : Don Quichotte (1869), La Bayadère (1877), Raymonda (1898).",
  ],
},
{
  slug: "danses-anciennes",
  titre: "Danses anciennes et danses traditionnelles",
  matiere: "histoire-danse",
  niveau: "5eme",
  description:
    "Découvrir que la danse existe depuis la Préhistoire et accompagne toutes les civilisations : rites religieux de l'Antiquité, bals de cour du Moyen Âge, et danses traditionnelles et folkloriques transmises de génération en génération jusqu'à aujourd'hui.",
  objectifs: [
    "Comprendre que la danse est un art universel, présent depuis la Préhistoire",
    "Connaître le rôle de la danse dans les civilisations antiques : Égypte, Grèce, Rome",
    "Situer la place de la danse au Moyen Âge : basses danses et carole",
    "Savoir ce qu'est une danse traditionnelle et pourquoi on parle de transmission orale",
    "Citer des exemples de danses traditionnelles françaises et européennes",
  ],
  slides: [
    {
      titre: "La danse, un art aussi vieux que l'humanité",
      illustration: "🔥",
      visuel: "Préhistoire",
      contenu: [
        "Les peintures rupestres montrent des scènes de danse depuis la Préhistoire",
        "On dansait autour du feu, pour célébrer la chasse ou fêter une naissance",
        "La danse a d'abord un rôle rituel : elle sert à communiquer avec les esprits ou les dieux",
        "Bien avant l'écriture, la danse existe déjà dans toutes les sociétés humaines",
      ],
      voixOff:
        "Sais-tu que la danse est sans doute le plus ancien des arts ? Des peintures rupestres, vieilles de milliers d'années, montrent déjà des silhouettes qui dansent autour d'un feu. Avant même l'invention de l'écriture, les hommes dansaient pour célébrer une chasse réussie, fêter une naissance, ou entrer en contact avec les esprits. La danse est un besoin humain universel, présent dans toutes les civilisations du monde.",
    },
    {
      titre: "L'Égypte antique : danser pour les dieux",
      illustration: "🏺",
      visuel: "Égypte, vers 3000 av. J.-C.",
      contenu: [
        "Les peintures des tombeaux égyptiens représentent de nombreuses scènes de danse",
        "Des danseuses professionnelles se produisent lors des fêtes religieuses",
        "La danse accompagne les cérémonies en l'honneur des dieux, comme Hathor",
        "Musiciens et danseurs formaient déjà de véritables troupes organisées",
      ],
      voixOff:
        "En Égypte ancienne, il y a plus de quatre mille ans, la danse est partout. Sur les murs des tombeaux, on voit des danseuses aux bras gracieux, accompagnées de musiciennes qui jouent de la harpe ou du tambourin. Ces danses ne sont pas de simples divertissements : elles honorent les dieux, comme la déesse Hathor, protectrice de la joie et de la danse. Il existait déjà des troupes de danseurs professionnels.",
    },
    {
      titre: "La Grèce antique : la danse, sœur de la musique",
      illustration: "🏛️",
      visuel: "Terpsichore, muse de la danse",
      contenu: [
        "Les Grecs considèrent la danse comme un art noble, lié à l'éducation",
        "Terpsichore est la muse qui protège la danse et le chant choral",
        "Le chœur antique danse et chante en même temps pendant les pièces de théâtre",
        "Platon pensait que la danse formait le corps et l'esprit des citoyens",
      ],
      voixOff:
        "Chez les Grecs anciens, la danse est un art noble, digne d'être enseigné aux jeunes citoyens, au même titre que la musique ou la gymnastique. Elle a même sa propre muse, Terpsichore. Au théâtre, le chœur ne se contente pas de chanter : il danse aussi, pour commenter l'action de la pièce. Le philosophe Platon allait jusqu'à dire que bien danser rendait les citoyens meilleurs, car cela formait à la fois le corps et l'esprit.",
    },
    {
      titre: "Rome : entre spectacle et méfiance",
      illustration: "🏟️",
      visuel: "Pantomime romaine",
      contenu: [
        "Les Romains admirent surtout la pantomime, un art de mime dansé très populaire",
        "Un danseur seul, masqué, raconte toute une histoire par ses gestes",
        "Contrairement aux Grecs, certains penseurs romains se méfient de la danse",
        "Ils la trouvent parfois indigne d'un citoyen respectable, sauf sur scène",
      ],
      voixOff:
        "À Rome, le grand spectacle dansé s'appelle la pantomime : un danseur masqué, seul sur scène, raconte à lui seul des légendes entières grâce à ses gestes, sans un mot. Ce spectacle est extrêmement populaire dans tout l'empire. Pourtant, les Romains ont un rapport plus méfiant que les Grecs envers la danse : pour beaucoup, un citoyen sérieux ne doit pas danser lui-même en public, cela reste réservé aux artistes professionnels.",
    },
    {
      titre: "Le Moyen Âge : la carole, danse du peuple",
      illustration: "🕯️",
      visuel: "La carole",
      contenu: [
        "Au Moyen Âge, on danse sur les places de village, lors des fêtes et des mariages",
        "La carole est une ronde chantée et dansée, très populaire du XIIe au XIVe siècle",
        "Les danseurs se tiennent par la main ou par des mouchoirs et avancent en cercle ou en chaîne",
        "L'Église médiévale se méfie souvent de la danse, jugée trop légère ou dangereuse",
      ],
      voixOff:
        "Au Moyen Âge, la danse la plus populaire s'appelle la carole. Hommes et femmes se tiennent par la main, parfois par un mouchoir, et avancent en formant une ronde ou une longue chaîne, tout en chantant. On la danse sur les places de village, pendant les fêtes, les mariages ou les moissons. Mais attention, l'Église de cette époque se méfie souvent de la danse : certains prêtres la trouvent trop légère, voire dangereuse pour l'âme.",
    },
    {
      titre: "La fin du Moyen Âge : les basses danses",
      illustration: "🎼",
      visuel: "Basse danse",
      contenu: [
        "Aux XIVe et XVe siècles apparaissent les basses danses dans les cours seigneuriales",
        "On les appelle « basses » car les pieds restent près du sol, sans sauts",
        "Elles sont lentes, majestueuses, dansées en couple devant la noblesse",
        "Elles annoncent déjà l'idée d'une danse codifiée, avec des pas précis à respecter",
      ],
      voixOff:
        "Vers la fin du Moyen Âge apparaît un nouveau genre : la basse danse. On l'appelle ainsi car les danseurs gardent les pieds près du sol, sans sauter, contrairement aux danses plus vives du peuple. Dansée en couple, lente et majestueuse, elle se pratique dans les cours seigneuriales, devant les nobles. C'est un premier pas vers l'idée d'une danse aux règles précises, qui annonce déjà le ballet de cour de la Renaissance.",
    },
    {
      titre: "Qu'est-ce qu'une danse traditionnelle ?",
      illustration: "🪘",
      visuel: "Transmission orale",
      contenu: [
        "Une danse traditionnelle appartient à une région ou à un peuple, souvent liée à des fêtes",
        "Elle se transmet de génération en génération, le plus souvent sans être écrite",
        "Elle est dansée par tous, en groupe, et non par des professionnels sur une scène",
        "Elle accompagne souvent un costume, une musique et des instruments particuliers",
      ],
      voixOff:
        "Une danse traditionnelle, c'est une danse qui appartient à un peuple ou à une région, et qui se transmet le plus souvent oralement, de parents à enfants, sans jamais être vraiment écrite. Contrairement au ballet, elle n'est pas réservée à des professionnels sur une scène : tout le monde peut la danser, en groupe, lors d'une fête. Elle va souvent avec un costume typique, une musique et des instruments particuliers, comme la cornemuse ou l'accordéon.",
    },
    {
      titre: "Exemples de danses traditionnelles françaises",
      illustration: "💃",
      visuel: "Bourrée, farandole, gavotte...",
      contenu: [
        "La bourrée : danse traditionnelle d'Auvergne et du Limousin, souvent en couple",
        "La farandole : danse en chaîne de Provence, menée par un meneur",
        "La gavotte : danse bretonne dansée en ronde ou en chaîne",
        "Ces danses sont encore transmises aujourd'hui dans les fêtes populaires et les fest-noz",
      ],
      voixOff:
        "La France est riche en danses traditionnelles régionales. En Auvergne et dans le Limousin, on danse la bourrée, souvent en couple, avec des petits sauts rythmés. En Provence, la farandole se danse en une longue chaîne menée par un danseur en tête. En Bretagne, la gavotte se danse en ronde ou en chaîne, au son du biniou. Ces danses ne sont pas mortes : elles continuent d'être transmises aujourd'hui, notamment lors des fest-noz bretons.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "La danse existe depuis la Préhistoire : c'est un art universel et rituel",
        "Égypte et Grèce antiques : la danse honore les dieux et forme les citoyens",
        "Rome : la pantomime, un art du mime dansé, très populaire",
        "Moyen Âge : la carole (danse populaire) puis la basse danse (danse de cour)",
        "Danse traditionnelle = danse d'un peuple, transmise oralement, dansée par tous",
      ],
      voixOff:
        "Résumons. La danse accompagne l'humanité depuis la Préhistoire : c'est d'abord un geste rituel. Dans l'Égypte et la Grèce antiques, elle honore les dieux et participe à l'éducation. À Rome, la pantomime en fait un grand art du spectacle. Au Moyen Âge, le peuple danse la carole tandis que la noblesse invente la basse danse, plus codifiée. Enfin, les danses traditionnelles, comme la bourrée ou la farandole, se transmettent oralement de génération en génération, jusqu'à aujourd'hui.",
    },
  ],
  fiche: {
    intro:
      "La danse est l'un des plus anciens arts de l'humanité : présente dès la Préhistoire, elle a accompagné les rites religieux de l'Antiquité, les fêtes du Moyen Âge, et continue de vivre aujourd'hui à travers les danses traditionnelles transmises de génération en génération.",
    sections: [
      {
        titre: "Les origines : une danse rituelle",
        points: [
          "Les peintures rupestres attestent l'existence de la danse dès la Préhistoire",
          "La danse accompagne les grands moments de la vie : chasse, naissance, cérémonies",
          "Elle sert d'abord à communiquer avec les esprits ou les dieux",
        ],
      },
      {
        titre: "La danse dans l'Antiquité",
        points: [
          "Égypte : des danseuses professionnelles honorent les dieux, comme Hathor, lors de fêtes religieuses",
          "Grèce : la danse est un art noble lié à l'éducation ; Terpsichore en est la muse",
          "Rome : la pantomime, art du mime dansé masqué, est un spectacle très populaire",
        ],
      },
      {
        titre: "La danse au Moyen Âge",
        points: [
          "La carole : ronde ou chaîne chantée et dansée par le peuple, du XIIe au XIVe siècle",
          "L'Église médiévale se méfie souvent de la danse",
          "La basse danse, à la fin du Moyen Âge : danse de cour lente et codifiée, sans sauts",
        ],
      },
      {
        titre: "Les danses traditionnelles",
        points: [
          "Une danse traditionnelle appartient à un peuple ou une région, transmise oralement",
          "Elle est dansée par tous, en groupe, souvent lors de fêtes populaires",
          "Exemples en France : la bourrée (Auvergne), la farandole (Provence), la gavotte (Bretagne)",
          "Ces danses sont toujours pratiquées aujourd'hui, par exemple dans les fest-noz",
        ],
      },
    ],
    audio:
      "Fiche de révision : danses anciennes et danses traditionnelles. La danse est un art universel, présent depuis la Préhistoire, où elle accompagne déjà les rites autour du feu. Dans l'Égypte ancienne, des danseuses professionnelles honorent les dieux comme Hathor. Chez les Grecs, la danse est un art noble lié à l'éducation, protégé par la muse Terpsichore. À Rome, c'est la pantomime, un art du mime dansé masqué, qui fait fureur. Au Moyen Âge, le peuple danse la carole, une ronde chantée, tandis que la noblesse invente à la fin du Moyen Âge la basse danse, plus lente et codifiée. Enfin, les danses traditionnelles, comme la bourrée d'Auvergne, la farandole de Provence ou la gavotte bretonne, appartiennent à un peuple et se transmettent oralement, de génération en génération, jusqu'à aujourd'hui.",
  },
  memoCards: [
    {
      recto: "Depuis quand la danse existe-t-elle ?",
      verso: "Depuis la Préhistoire : les peintures rupestres montrent déjà des scènes de danse.",
    },
    {
      recto: "Quelle déesse égyptienne est liée à la danse et à la joie ?",
      verso: "Hathor. Des danseuses professionnelles l'honoraient lors de fêtes religieuses.",
    },
    {
      recto: "Qui est Terpsichore ?",
      verso: "La muse grecque qui protège la danse et le chant choral.",
    },
    {
      recto: "Qu'est-ce que la pantomime romaine ?",
      verso: "Un art du mime dansé : un danseur masqué, seul, raconte une histoire par ses gestes.",
    },
    {
      recto: "Qu'est-ce que la carole ?",
      verso: "Une ronde ou chaîne dansée et chantée par le peuple au Moyen Âge (XIIe-XIVe siècle).",
    },
    {
      recto: "Qu'est-ce qu'une basse danse ?",
      verso: "Une danse de cour lente et codifiée de la fin du Moyen Âge : les pieds restent près du sol.",
    },
    {
      recto: "Qu'est-ce qu'une danse traditionnelle ?",
      verso: "Une danse d'un peuple ou d'une région, transmise oralement, dansée par tous en groupe.",
    },
    {
      recto: "Cite trois danses traditionnelles françaises et leur région.",
      verso: "La bourrée (Auvergne, Limousin), la farandole (Provence), la gavotte (Bretagne).",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Où trouve-t-on les plus anciennes traces de la danse ?",
      choix: ["Dans des livres du Moyen Âge", "Dans des peintures rupestres de la Préhistoire", "Dans des films", "Dans des statues romaines"],
      bonneReponse: 1,
      explication:
        "Des peintures rupestres, vieilles de milliers d'années, montrent déjà des silhouettes dansant, souvent autour d'un feu.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle déesse égyptienne est associée à la danse et à la joie ?",
      choix: ["Isis", "Hathor", "Cléopâtre", "Néfertiti"],
      bonneReponse: 1,
      explication: "Hathor est la déesse protectrice de la joie et de la danse dans l'Égypte antique.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment s'appelle la muse grecque de la danse ?",
      reponse: "Terpsichore.",
      explication: "Terpsichore protège la danse et le chant choral dans la mythologie grecque.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment s'appelle la ronde chantée et dansée par le peuple au Moyen Âge ?",
      choix: ["La basse danse", "La carole", "La pantomime", "La farandole"],
      bonneReponse: 1,
      explication:
        "La carole est une ronde ou une chaîne, chantée et dansée, très populaire du XIIe au XIVe siècle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pourquoi appelle-t-on « basse danse » la danse de cour de la fin du Moyen Âge ?",
      choix: [
        "Parce qu'elle se danse assise",
        "Parce que les pieds restent près du sol, sans sauts",
        "Parce qu'elle est dansée par des enfants",
        "Parce qu'elle vient d'un pays situé au sud",
      ],
      bonneReponse: 1,
      explication:
        "Contrairement aux danses populaires plus vives, la basse danse est lente et les danseurs gardent les pieds proches du sol.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que la pantomime dans la Rome antique ?",
      reponse:
        "Un spectacle très populaire où un danseur seul, masqué, raconte toute une histoire uniquement par ses gestes, sans parler.",
      explication:
        "C'est un art du mime dansé, apprécié dans tout l'empire romain, différent de la danse collective des Grecs.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qui distingue une danse traditionnelle d'un ballet ?",
      choix: [
        "La danse traditionnelle se danse toujours seule",
        "La danse traditionnelle est dansée par tous en groupe et se transmet oralement",
        "La danse traditionnelle n'a jamais de musique",
        "La danse traditionnelle est toujours plus récente que le ballet",
      ],
      bonneReponse: 1,
      explication:
        "Une danse traditionnelle appartient à un peuple, se transmet de génération en génération sans être écrite, et se danse en groupe, pas seulement par des professionnels.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux danses traditionnelles françaises et la région à laquelle elles sont associées.",
      reponse:
        "La bourrée, associée à l'Auvergne et au Limousin, et la farandole, associée à la Provence (on peut aussi citer la gavotte, associée à la Bretagne).",
      explication:
        "Chaque région de France a ses propres danses traditionnelles, liées à sa musique et à ses costumes.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que la danse, dans les civilisations antiques, n'est pas qu'un simple divertissement ?",
      choix: [
        "Parce qu'elle était interdite aux femmes",
        "Parce qu'elle avait un rôle religieux ou éducatif important",
        "Parce qu'elle ne se pratiquait que la nuit",
        "Parce qu'elle nécessitait des costumes très chers",
      ],
      bonneReponse: 1,
      explication:
        "En Égypte elle honore les dieux, en Grèce elle participe à l'éducation des citoyens : la danse antique a une fonction religieuse ou sociale forte.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on dit que les danses traditionnelles se transmettent « oralement ».",
      reponse:
        "Parce qu'elles ne sont pas écrites dans des livres de pas comme le ballet classique : elles se transmettent en dansant ensemble, de parents à enfants, de génération en génération, souvent lors des fêtes du village.",
      explication:
        "C'est une différence essentielle avec la danse classique, qui sera codifiée et transmise par des académies et des écoles à partir du XVIIe siècle.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Compare le rôle de la danse chez les Grecs et chez les Romains de l'Antiquité.",
      reponse:
        "Chez les Grecs, la danse est un art noble, lié à l'éducation des citoyens et pratiqué dans le cadre du théâtre (le chœur). Chez les Romains, la danse la plus populaire, la pantomime, est un spectacle professionnel très admiré, mais danser soi-même en public est parfois jugé indigne d'un citoyen respectable.",
      explication:
        "Les Grecs valorisent la pratique de la danse par tous ; les Romains admirent surtout le spectacle donné par des professionnels.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique en quoi la basse danse annonce déjà le ballet de cour qui naîtra à la Renaissance.",
      reponse:
        "La basse danse introduit l'idée d'une danse aux pas précis et réglés, réservée à la noblesse et dansée devant un public de cour, contrairement aux danses populaires plus libres comme la carole. Cette recherche de codification annonce le ballet de cour et, plus tard, la danse classique.",
      explication:
        "On retrouve ici l'idée centrale de codification, qui deviendra essentielle avec l'Académie royale de danse fondée en 1661.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Où trouve-t-on les premières traces de la danse humaine ?",
      choix: ["Dans les peintures rupestres de la Préhistoire", "Dans les livres du Moyen Âge", "Dans des photographies", "Dans des enregistrements sonores"],
      bonneReponse: 0,
      explication: "Les peintures rupestres attestent que la danse existe depuis la Préhistoire.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle déesse égyptienne protège la danse et la joie ?",
      reponse: "Hathor.",
      explication: "Des danseuses professionnelles l'honoraient lors des fêtes religieuses.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que la carole médiévale ?",
      reponse: "Une ronde ou chaîne dansée et chantée par le peuple, du XIIe au XIVe siècle.",
      explication: "Elle se dansait sur les places de village, notamment lors des fêtes et des mariages.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La pantomime est un spectacle typique de :",
      choix: ["L'Égypte antique", "La Grèce antique", "La Rome antique", "Le Moyen Âge"],
      bonneReponse: 2,
      explication: "La pantomime, art du mime dansé masqué, est un spectacle très populaire de la Rome antique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de danse traditionnelle française et sa région d'origine.",
      reponse: "La bourrée, en Auvergne et dans le Limousin (ou la farandole en Provence, ou la gavotte en Bretagne).",
      explication: "Ces danses continuent d'être transmises et dansées aujourd'hui, par exemple lors des fest-noz.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Danses anciennes et danses traditionnelles",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La danse est présente dans l'histoire humaine depuis :",
          choix: ["Le Moyen Âge", "L'Antiquité seulement", "La Préhistoire", "Le XVIIe siècle"],
          bonneReponse: 2,
          explication: "Des peintures rupestres montrent déjà des scènes de danse depuis la Préhistoire.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel rôle la danse joue-t-elle dans l'Égypte antique ?",
          reponse:
            "Elle honore les dieux, comme Hathor, lors des fêtes religieuses, et est pratiquée par des danseuses professionnelles organisées en troupes.",
          explication:
            "Les peintures des tombeaux égyptiens représentent de nombreuses scènes de danse rituelle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Chez les Grecs anciens, la danse est considérée comme :",
          choix: [
            "Un art réservé aux esclaves",
            "Un art noble lié à l'éducation des citoyens",
            "Une activité interdite dans les cités",
            "Un art réservé uniquement aux prêtres",
          ],
          bonneReponse: 1,
          explication:
            "Les Grecs voient la danse comme un art formateur, digne d'être enseigné, protégé par la muse Terpsichore.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que la basse danse et à quelle période apparaît-elle ?",
          reponse:
            "C'est une danse de cour lente et codifiée, où les pieds restent près du sol sans sauts. Elle apparaît à la fin du Moyen Âge, aux XIVe et XVe siècles.",
          explication:
            "Elle se danse en couple devant la noblesse et annonce déjà l'idée d'une danse aux règles précises.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce qui définit une danse traditionnelle ?",
          reponse:
            "Une danse traditionnelle appartient à un peuple ou une région, se transmet oralement de génération en génération, et se danse en groupe par tous, souvent avec un costume et une musique typiques.",
          explication:
            "Elle s'oppose ainsi au ballet, danse codifiée, écrite et réservée à des professionnels sur scène.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : montre, à travers deux exemples pris dans le chapitre, que la danse a souvent eu une fonction religieuse ou sociale, et pas seulement un rôle de divertissement.",
          reponse:
            "En Égypte antique, la danse honore les dieux comme Hathor lors des cérémonies religieuses : elle a une fonction sacrée. Au Moyen Âge, la carole rassemble tout le village lors des fêtes et des mariages : elle a une fonction sociale, celle de réunir la communauté. Dans les deux cas, la danse dépasse le simple divertissement.",
          explication:
            "Une bonne réponse s'appuie sur des exemples précis du cours et distingue clairement fonction religieuse et fonction sociale.",
        },
      ],
    },
    {
      titre: "Examen 2 — Danses anciennes et danses traditionnelles",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La carole est une danse typique :",
          choix: ["De l'Égypte antique", "De la Grèce antique", "De la Rome antique", "Du Moyen Âge"],
          bonneReponse: 3,
          explication: "La carole, ronde chantée et dansée par le peuple, est typique du Moyen Âge (XIIe-XIVe siècle).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la pantomime romaine ?",
          reponse:
            "Un spectacle très populaire où un seul danseur masqué raconte une histoire entière par ses gestes, sans parler.",
          explication: "C'est le grand art du mime dansé de la Rome antique.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La farandole est une danse traditionnelle originaire de :",
          choix: ["Bretagne", "Provence", "Auvergne", "Normandie"],
          bonneReponse: 1,
          explication: "La farandole est une danse en chaîne, menée par un meneur, typique de Provence.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi l'Église médiévale se méfiait-elle souvent de la danse ?",
          reponse:
            "Elle la jugeait trop légère, voire dangereuse pour l'âme, car associée aux fêtes populaires et parfois considérée comme une occasion de désordre.",
          explication:
            "Cela n'empêche pas la carole d'être extrêmement populaire sur les places de village.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "En quoi la danse traditionnelle se distingue-t-elle du ballet par sa transmission ?",
          reponse:
            "La danse traditionnelle se transmet oralement, en dansant ensemble de génération en génération, sans support écrit. Le ballet, lui, sera codifié par des institutions comme l'Académie royale de danse, avec des règles précises et un enseignement formel.",
          explication:
            "Cette distinction annonce le chapitre suivant sur la naissance du ballet et sa codification au XVIIe siècle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : pourquoi peut-on dire que la Grèce antique a une vision de la danse différente de celle de Rome ? Développe avec des arguments précis.",
          reponse:
            "En Grèce, la danse est valorisée comme un art formateur : elle participe à l'éducation des citoyens, elle est pratiquée collectivement dans le cadre du théâtre par le chœur, et protégée par une muse, Terpsichore. À Rome, la danse la plus célèbre, la pantomime, est un spectacle admiré mais réservé à des professionnels : un citoyen romain respectable ne danse en général pas lui-même en public. Rome admire donc la danse comme spectacle, tandis que la Grèce la valorise comme pratique éducative.",
          explication:
            "Une bonne réponse distingue clairement pratique collective et éducative (Grèce) et spectacle professionnel (Rome).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La danse est un art universel, présent depuis la Préhistoire (peintures rupestres) et lié à des rites.",
    "Égypte antique : des danseuses professionnelles honorent les dieux, comme Hathor.",
    "Grèce antique : la danse est un art noble et éducatif, protégé par la muse Terpsichore.",
    "Rome antique : la pantomime, art du mime dansé masqué, est un spectacle très populaire.",
    "Moyen Âge : la carole (ronde populaire) puis la basse danse (danse de cour codifiée, sans sauts).",
    "Danse traditionnelle = danse d'un peuple, transmise oralement, dansée en groupe (bourrée, farandole, gavotte...).",
  ],
},
{
  slug: "naissance-ballet",
  titre: "La naissance du ballet : des cours royales à l'Opéra",
  matiere: "histoire-danse",
  niveau: "5eme",
  description:
    "Découvrir comment le ballet est né dans les fêtes des cours italiennes et françaises, comment Louis XIV en a fait un art à part entière, et comment sont apparues les premières institutions : l'Académie royale de danse et l'Opéra de Paris.",
  objectifs: [
    "Situer les origines du ballet dans les cours d'Italie et de France à la Renaissance",
    "Connaître le Ballet comique de la Reine (1581), premier grand ballet de cour",
    "Comprendre le rôle de Louis XIV, roi danseur, et l'origine de son surnom de Roi Soleil",
    "Retenir la création de l'Académie royale de danse (1661) et le rôle de Lully et Beauchamp",
    "Savoir que les cinq positions de la danse classique ont été codifiées à cette époque",
    "Comprendre la naissance de l'Opéra de Paris et le passage du danseur amateur au danseur professionnel",
  ],
  slides: [
    {
      titre: "Avant le ballet : les fêtes des cours italiennes",
      illustration: "🎭",
      visuel: "Renaissance italienne",
      contenu: [
        "À la Renaissance, les princes italiens organisent des fêtes somptueuses",
        "Danse, musique, poésie et décors y sont mêlés",
        "Les maîtres à danser italiens écrivent les premiers traités de danse",
        "Catherine de Médicis, italienne devenue reine de France, apporte ce goût à la cour française",
      ],
      voixOff:
        "Imagine les palais d'Italie à la Renaissance : des fêtes éblouissantes où l'on danse, chante et récite des poèmes au milieu de décors spectaculaires. C'est là que naît l'idée du ballet. Les maîtres à danser italiens écrivent les premiers traités pour enseigner les pas. Et quand Catherine de Médicis, une princesse italienne, devient reine de France, elle emporte avec elle ce goût du spectacle.",
    },
    {
      titre: "1581 : le Ballet comique de la Reine",
      illustration: "👑",
      visuel: "1581",
      contenu: [
        "Créé à Paris pour un mariage princier à la cour d'Henri III",
        "Commandé par la reine Louise de Lorraine, encouragé par Catherine de Médicis",
        "Réglé par Balthazar de Beaujoyeulx, maître à danser d'origine italienne",
        "Considéré comme le premier ballet de cour : danse, musique, poésie et décors racontent une histoire",
      ],
      voixOff:
        "En quinze cent quatre-vingt-un, un spectacle extraordinaire de plusieurs heures est donné à Paris pour un mariage princier : le Ballet comique de la Reine. Il est réglé par Balthazar de Beaujoyeulx, un maître à danser venu d'Italie. Pour la première fois, la danse, la musique, la poésie et les décors racontent ensemble une seule histoire, celle de la magicienne Circé. C'est l'acte de naissance du ballet de cour.",
    },
    {
      titre: "Le ballet de cour : danser pour le pouvoir",
      illustration: "🏰",
      visuel: "Le roi danse",
      contenu: [
        "Au XVIIe siècle, le ballet de cour triomphe en France",
        "Les nobles, et même le roi, dansent eux-mêmes dans les spectacles",
        "Danser avec grâce est une qualité indispensable d'un courtisan",
        "Le ballet met en scène la puissance et la gloire du roi",
      ],
      voixOff:
        "Au dix-septième siècle, le ballet de cour devient le grand divertissement de la monarchie française. Attention, il n'y a pas encore de danseurs professionnels : ce sont les nobles eux-mêmes, et même le roi, qui montent sur scène ! Savoir danser avec grâce est aussi important pour un courtisan que savoir monter à cheval. Et surtout, le ballet est un instrument politique : il met en scène la gloire du roi.",
    },
    {
      titre: "1653 : Louis XIV, le Roi Soleil",
      illustration: "☀️",
      visuel: "Ballet royal de la Nuit — 1653",
      contenu: [
        "Le 23 février 1653, le jeune Louis XIV danse dans le Ballet royal de la Nuit",
        "À la fin du spectacle, il apparaît en Soleil levant, dans le rôle d'Apollon",
        "Ce rôle lui vaut son surnom de Roi Soleil",
        "Louis XIV est un danseur passionné : il répète chaque jour pendant des années",
      ],
      voixOff:
        "Le vingt-trois février seize cent cinquante-trois, Louis quatorze n'a que quatorze ans. Après une nuit entière de spectacle, le Ballet royal de la Nuit s'achève à l'aube : le jeune roi apparaît alors couvert d'or, en Apollon, dieu du soleil. L'image est si forte qu'elle lui donne son surnom pour toujours : le Roi Soleil. Louis quatorze adore danser, il s'entraîne tous les jours et dansera dans des dizaines de ballets.",
    },
    {
      titre: "1661 : l'Académie royale de danse",
      illustration: "📜",
      visuel: "1661",
      contenu: [
        "En 1661, Louis XIV fonde l'Académie royale de danse à Paris",
        "C'est la première institution officielle consacrée à la danse en Occident",
        "Sa mission : fixer les règles de l'art de la danse et former les maîtres à danser",
        "La danse devient un art sérieux, digne d'être enseigné et perfectionné",
      ],
      voixOff:
        "En seize cent soixante et un, Louis quatorze prend une décision historique : il fonde l'Académie royale de danse. C'est la toute première institution officielle au monde consacrée à cet art. Sa mission ? Fixer les règles de la danse, la perfectionner et former les maîtres à danser. Grâce au roi, la danse n'est plus seulement un divertissement : elle devient un art à part entière, avec ses lois et ses écoles.",
    },
    {
      titre: "Lully et Beauchamp : le duo du roi",
      illustration: "🎻",
      visuel: "Lully + Beauchamp",
      contenu: [
        "Jean-Baptiste Lully : compositeur d'origine italienne, musicien préféré de Louis XIV",
        "Il compose la musique des ballets de cour et des comédies-ballets avec Molière",
        "Pierre Beauchamp : maître à danser du roi, chorégraphe et théoricien",
        "Ensemble, ils donnent au ballet français sa forme et son style",
      ],
      voixOff:
        "Deux hommes entourent le roi danseur. Jean-Baptiste Lully, un musicien venu d'Italie, compose des musiques entraînantes pour les ballets et invente avec Molière la comédie-ballet, qui mêle théâtre et danse. Pierre Beauchamp, lui, est le maître à danser du roi : c'est lui qui règle les pas et réfléchit à la technique. À eux deux, ils inventent le style du ballet à la française.",
    },
    {
      titre: "Les cinq positions : la base de tout",
      illustration: "🦶",
      visuel: "5 positions",
      contenu: [
        "Pierre Beauchamp codifie les cinq positions des pieds",
        "Toutes reposent sur l'en-dehors : les jambes tournées vers l'extérieur",
        "Ces positions sont le point de départ et d'arrivée de tous les pas",
        "Plus de trois siècles après, elles restent la base de la danse classique dans le monde entier",
      ],
      voixOff:
        "C'est à Pierre Beauchamp que l'on attribue la codification des cinq positions des pieds, toutes fondées sur l'en-dehors, c'est-à-dire les jambes tournées vers l'extérieur. Chaque pas de danse classique part d'une de ces positions et y revient. Incroyable mais vrai : plus de trois siècles plus tard, tous les danseurs classiques du monde, de Paris à Tokyo, commencent encore leurs cours par ces cinq positions.",
    },
    {
      titre: "1669-1672 : la naissance de l'Opéra de Paris",
      illustration: "🏛️",
      visuel: "Académie royale de musique",
      contenu: [
        "En 1669, Louis XIV crée l'Académie royale de musique : l'ancêtre de l'Opéra de Paris",
        "En 1672, Lully en prend la direction et y intègre le ballet",
        "La danse quitte la cour pour monter sur une vraie scène de théâtre, devant un public",
        "Des danseurs professionnels remplacent peu à peu les nobles amateurs",
      ],
      voixOff:
        "En seize cent soixante-neuf, Louis quatorze fonde l'Académie royale de musique, que l'on appelle aujourd'hui l'Opéra de Paris. Trois ans plus tard, Lully en prend la direction et y donne une grande place au ballet. C'est un tournant : la danse quitte les salons de la cour pour monter sur une véritable scène de théâtre, face à un public. Et pour cela, il faut désormais de vrais danseurs professionnels, formés et entraînés.",
    },
    {
      titre: "Après le roi danseur : les professionnels",
      illustration: "🩰",
      visuel: "1681 : premières danseuses",
      contenu: [
        "Vers 1670, Louis XIV cesse de danser en public",
        "En 1681, les premières danseuses professionnelles paraissent sur la scène de l'Opéra",
        "Mademoiselle de La Fontaine est la première ballerine de l'histoire",
        "Une école de danse est créée à l'Opéra en 1713 : elle forme toujours les Petits Rats aujourd'hui",
      ],
      voixOff:
        "Vers seize cent soixante-dix, Louis quatorze, vieillissant, cesse de danser en public. Mais le ballet, lui, continue de grandir. En seize cent quatre-vingt-un, événement considérable : les premières danseuses professionnelles montent sur la scène de l'Opéra, avec mademoiselle de La Fontaine, la toute première ballerine de l'histoire. Et en dix-sept cent treize, l'Opéra ouvre son école de danse, celle-là même qui forme encore aujourd'hui les fameux Petits Rats.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Le ballet naît des fêtes de cour italiennes puis françaises",
        "1581 : Ballet comique de la Reine, premier ballet de cour",
        "1653 : Louis XIV danse en Soleil dans le Ballet royal de la Nuit → Roi Soleil",
        "1661 : Académie royale de danse ; Beauchamp codifie les cinq positions",
        "1669 : Académie royale de musique, futur Opéra de Paris",
      ],
      voixOff:
        "Résumons cette belle histoire. Le ballet naît dans les fêtes des cours d'Italie, puis de France, avec le Ballet comique de la Reine en quinze cent quatre-vingt-un. Louis quatorze, roi danseur, gagne son surnom de Roi Soleil dans le Ballet royal de la Nuit en seize cent cinquante-trois. Il fonde l'Académie royale de danse en seize cent soixante et un, puis l'Académie royale de musique, le futur Opéra de Paris. Avec Lully, Beauchamp et les cinq positions, la danse classique est née !",
    },
  ],
  fiche: {
    intro:
      "Le ballet est né entre le XVIe et le XVIIe siècle, d'abord dans les fêtes des cours d'Italie et de France, avant de devenir un art professionnel grâce à Louis XIV et aux institutions qu'il a créées.",
    sections: [
      {
        titre: "Les origines : le ballet de cour",
        points: [
          "À la Renaissance, les cours italiennes mêlent danse, musique et poésie dans de grandes fêtes",
          "Catherine de Médicis introduit ce goût du spectacle à la cour de France",
          "1581 : Ballet comique de la Reine, réglé par Balthazar de Beaujoyeulx, premier ballet de cour",
          "Dans le ballet de cour, les nobles et le roi dansent eux-mêmes : la danse met en scène le pouvoir",
        ],
      },
      {
        titre: "Louis XIV, le roi danseur",
        points: [
          "Louis XIV est un danseur passionné qui s'entraîne quotidiennement",
          "23 février 1653 : il danse le rôle du Soleil levant (Apollon) dans le Ballet royal de la Nuit",
          "Ce rôle lui vaut son surnom de Roi Soleil",
          "Vers 1670, il cesse de danser en public, mais continue de protéger la danse",
        ],
      },
      {
        titre: "1661 : l'Académie royale de danse",
        points: [
          "Fondée par Louis XIV en 1661 : première institution officielle consacrée à la danse",
          "Mission : fixer les règles de l'art de la danse et former les maîtres à danser",
          "La danse devient un art codifié, enseigné et respecté",
        ],
      },
      {
        titre: "Lully, Beauchamp et les cinq positions",
        points: [
          "Jean-Baptiste Lully : compositeur d'origine italienne, il écrit la musique des ballets du roi et crée la comédie-ballet avec Molière",
          "Pierre Beauchamp : maître à danser de Louis XIV et chorégraphe",
          "Beauchamp codifie les cinq positions des pieds, fondées sur l'en-dehors",
          "Ces cinq positions sont encore la base de la danse classique aujourd'hui",
        ],
      },
      {
        titre: "La naissance de l'Opéra de Paris",
        points: [
          "1669 : Louis XIV fonde l'Académie royale de musique, ancêtre de l'Opéra de Paris",
          "1672 : Lully en prend la direction et y développe le ballet",
          "1681 : premières danseuses professionnelles, dont mademoiselle de La Fontaine, première ballerine",
          "1713 : création de l'école de danse de l'Opéra, qui forme toujours les Petits Rats",
        ],
      },
    ],
    audio:
      "Fiche de révision : la naissance du ballet. Le ballet naît à la Renaissance dans les fêtes des cours italiennes, où l'on mêle danse, musique et poésie. Catherine de Médicis apporte ce goût du spectacle en France, et en quinze cent quatre-vingt-un, le Ballet comique de la Reine, réglé par Balthazar de Beaujoyeulx, devient le premier grand ballet de cour. Au dix-septième siècle, les nobles et le roi dansent eux-mêmes. Louis quatorze, danseur passionné, apparaît en Soleil levant dans le Ballet royal de la Nuit en seize cent cinquante-trois : c'est l'origine de son surnom de Roi Soleil. En seize cent soixante et un, il fonde l'Académie royale de danse, première institution consacrée à cet art. Autour du roi, Lully compose la musique et Beauchamp, maître à danser, codifie les cinq positions des pieds, toujours utilisées aujourd'hui. Enfin, en seize cent soixante-neuf naît l'Académie royale de musique, le futur Opéra de Paris, où paraissent en seize cent quatre-vingt-un les premières danseuses professionnelles.",
  },
  memoCards: [
    {
      recto: "Ballet comique de la Reine : quelle date ?",
      verso: "1581, à Paris. Réglé par Balthazar de Beaujoyeulx, c'est le premier grand ballet de cour.",
    },
    {
      recto: "Qui a introduit le goût des ballets italiens à la cour de France ?",
      verso: "Catherine de Médicis, princesse italienne devenue reine de France.",
    },
    {
      recto: "Ballet royal de la Nuit : date et rôle de Louis XIV ?",
      verso: "23 février 1653. Louis XIV, 14 ans, y danse le Soleil levant (Apollon) : origine du surnom de Roi Soleil.",
    },
    {
      recto: "Que fonde Louis XIV en 1661 ?",
      verso: "L'Académie royale de danse, première institution officielle consacrée à la danse.",
    },
    {
      recto: "Qui est Jean-Baptiste Lully ?",
      verso: "Compositeur d'origine italienne, musicien préféré de Louis XIV. Il crée la comédie-ballet avec Molière et dirige l'Académie royale de musique à partir de 1672.",
    },
    {
      recto: "Qui est Pierre Beauchamp ?",
      verso: "Le maître à danser de Louis XIV. On lui attribue la codification des cinq positions des pieds.",
    },
    {
      recto: "Sur quel principe reposent les cinq positions ?",
      verso: "Sur l'en-dehors : les jambes tournées vers l'extérieur. Elles restent la base de la danse classique.",
    },
    {
      recto: "Que fonde Louis XIV en 1669 ?",
      verso: "L'Académie royale de musique, l'ancêtre de l'Opéra de Paris.",
    },
    {
      recto: "Qui est la première ballerine professionnelle de l'histoire ?",
      verso: "Mademoiselle de La Fontaine, qui paraît sur la scène de l'Opéra en 1681.",
    },
    {
      recto: "Dans le ballet de cour, qui sont les danseurs ?",
      verso: "Les nobles et le roi lui-même : il n'y a pas encore de danseurs professionnels. Le ballet met en scène le pouvoir royal.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année a été créé le Ballet comique de la Reine ?",
      choix: ["1515", "1581", "1653", "1661"],
      bonneReponse: 1,
      explication:
        "Le Ballet comique de la Reine date de 1581. C'est le premier grand ballet de cour, réglé par Balthazar de Beaujoyeulx.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel surnom Louis XIV doit-il à un rôle dansé en 1653 ?",
      choix: ["Le Roi Lune", "Le Grand Danseur", "Le Roi Soleil", "Le Roi Apollon"],
      bonneReponse: 2,
      explication:
        "Dans le Ballet royal de la Nuit (1653), Louis XIV apparaît en Soleil levant, dans le rôle d'Apollon : c'est l'origine de son surnom de Roi Soleil.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quelle institution Louis XIV fonde-t-il en 1661 ?",
      reponse: "L'Académie royale de danse.",
      explication:
        "Fondée en 1661, c'est la première institution officielle consacrée à la danse : elle fixe les règles de cet art et forme les maîtres à danser.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de positions des pieds Pierre Beauchamp a-t-il codifiées ?",
      choix: ["Trois", "Quatre", "Cinq", "Six"],
      bonneReponse: 2,
      explication:
        "Beauchamp a codifié les cinq positions des pieds, fondées sur l'en-dehors. Elles sont toujours la base de la danse classique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle reine d'origine italienne a introduit le goût des grands spectacles dansés à la cour de France ?",
      choix: ["Anne d'Autriche", "Catherine de Médicis", "Marie-Antoinette", "Aliénor d'Aquitaine"],
      bonneReponse: 1,
      explication:
        "Catherine de Médicis, princesse italienne devenue reine de France, a apporté à la cour française le goût des fêtes dansées de la Renaissance italienne.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans quel ballet, et en quelle année, Louis XIV a-t-il dansé le rôle du Soleil levant ?",
      reponse: "Dans le Ballet royal de la Nuit, le 23 février 1653.",
      explication:
        "Louis XIV, alors âgé de 14 ans, y apparaît à l'aube en Apollon couvert d'or : ce rôle lui vaut son surnom de Roi Soleil.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que l'Académie royale de musique, fondée en 1669 ?",
      choix: [
        "Une école de chant réservée aux nobles",
        "L'ancêtre de l'Opéra de Paris",
        "Un orchestre privé de Louis XIV",
        "Le premier conservatoire d'Italie",
      ],
      bonneReponse: 1,
      explication:
        "L'Académie royale de musique, fondée par Louis XIV en 1669 et dirigée par Lully à partir de 1672, est l'ancêtre de l'Opéra de Paris.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite les deux grands artistes qui entourent Louis XIV pour la musique et pour la danse, et précise le rôle de chacun.",
      reponse:
        "Jean-Baptiste Lully, compositeur d'origine italienne qui écrit la musique des ballets, et Pierre Beauchamp, maître à danser du roi qui règle les chorégraphies et codifie les cinq positions.",
      explication:
        "Lully crée aussi la comédie-ballet avec Molière et dirige l'Académie royale de musique ; Beauchamp fixe la technique de la danse classique naissante.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi dit-on que le ballet de cour était un instrument politique ?",
      choix: [
        "Parce qu'il servait à financer les guerres du roi",
        "Parce qu'il mettait en scène la puissance et la gloire du roi devant la cour",
        "Parce que seuls les ministres avaient le droit d'y danser",
        "Parce qu'il remplaçait les discours officiels du roi",
      ],
      bonneReponse: 1,
      explication:
        "En dansant lui-même des rôles glorieux comme le Soleil, le roi affirmait sa puissance : le spectacle célébrait l'ordre monarchique devant toute la cour.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique ce qui change pour la danse quand elle passe de la cour à la scène de l'Opéra à partir de 1669-1672.",
      reponse:
        "La danse quitte les salons de la cour, où les nobles dansaient eux-mêmes, pour une vraie scène de théâtre devant un public. Elle exige alors des danseurs professionnels formés et entraînés, qui remplacent peu à peu les amateurs. En 1681 paraissent les premières danseuses professionnelles.",
      explication:
        "C'est le passage d'un divertissement aristocratique à un art de spectacle professionnel : une étape décisive vers le ballet que nous connaissons.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Qui est mademoiselle de La Fontaine et pourquoi son apparition en 1681 est-elle un événement important ?",
      reponse:
        "C'est la première ballerine professionnelle de l'histoire. Son apparition sur la scène de l'Opéra en 1681 marque l'entrée des femmes dans la danse professionnelle, alors que les rôles féminins étaient auparavant tenus par des hommes ou réservés aux fêtes de cour.",
      explication:
        "Avant 1681, aucune femme n'avait dansé professionnellement sur la scène de l'Opéra : c'est le début de l'histoire des ballerines.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Classe dans l'ordre chronologique en donnant les dates : création de l'Opéra (Académie royale de musique), Ballet comique de la Reine, Académie royale de danse, Ballet royal de la Nuit.",
      reponse:
        "1. Ballet comique de la Reine (1581) ; 2. Ballet royal de la Nuit (1653) ; 3. Académie royale de danse (1661) ; 4. Académie royale de musique, futur Opéra de Paris (1669).",
      explication:
        "Retiens la logique : d'abord le ballet de cour (1581), puis le roi danseur (1653), puis les institutions (1661 et 1669).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le premier grand ballet de cour, créé en 1581, s'appelle :",
      choix: ["Le Ballet royal de la Nuit", "Le Ballet comique de la Reine", "Giselle", "Le Triomphe de l'Amour"],
      bonneReponse: 1,
      explication: "Le Ballet comique de la Reine (1581) est considéré comme le premier ballet de cour.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "En quelle année Louis XIV fonde-t-il l'Académie royale de danse ?",
      reponse: "En 1661.",
      explication: "C'est la première institution officielle consacrée à la danse.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "D'où vient le surnom de Roi Soleil donné à Louis XIV ?",
      reponse:
        "De son rôle de Soleil levant (Apollon) dans le Ballet royal de la Nuit, dansé le 23 février 1653.",
      explication: "Le jeune roi, âgé de 14 ans, y apparaît à l'aube couvert d'or.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qui a codifié les cinq positions des pieds ?",
      choix: ["Jean-Baptiste Lully", "Balthazar de Beaujoyeulx", "Pierre Beauchamp", "Molière"],
      bonneReponse: 2,
      explication: "Pierre Beauchamp, maître à danser de Louis XIV, a codifié les cinq positions fondées sur l'en-dehors.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment s'appelle l'institution fondée en 1669, ancêtre de l'Opéra de Paris ?",
      reponse: "L'Académie royale de musique.",
      explication: "Lully en prend la direction en 1672 et y donne une grande place au ballet.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La naissance du ballet",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "De quel pays viennent les premières grandes fêtes dansées de la Renaissance ?",
          choix: ["L'Angleterre", "L'Italie", "La Russie", "L'Espagne"],
          bonneReponse: 1,
          explication:
            "Le ballet naît dans les fêtes des cours italiennes de la Renaissance, avant d'être introduit en France par Catherine de Médicis.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la date du Ballet comique de la Reine et le nom de celui qui l'a réglé.",
          reponse: "1581, réglé par Balthazar de Beaujoyeulx.",
          explication:
            "Ce spectacle donné à Paris est considéré comme le premier ballet de cour : danse, musique, poésie et décors y racontent une même histoire.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel âge a Louis XIV lorsqu'il danse dans le Ballet royal de la Nuit en 1653 ?",
          choix: ["8 ans", "14 ans", "23 ans", "35 ans"],
          bonneReponse: 1,
          explication: "Louis XIV a 14 ans le 23 février 1653, lorsqu'il apparaît en Soleil levant.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle est la mission de l'Académie royale de danse fondée en 1661 ?",
          reponse:
            "Fixer les règles de l'art de la danse, la perfectionner et former les maîtres à danser.",
          explication:
            "Grâce à cette académie, la danse devient un art codifié et enseigné, et non plus un simple divertissement.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce que l'en-dehors et pourquoi est-il important dans la danse classique ?",
          reponse:
            "C'est le principe des jambes tournées vers l'extérieur. Les cinq positions codifiées par Beauchamp reposent toutes sur l'en-dehors, et tous les pas classiques en partent : c'est la base de la technique classique.",
          explication:
            "L'en-dehors donne de l'amplitude, de la stabilité et de l'élégance aux mouvements : il est enseigné dès les premiers cours de danse classique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : pourquoi peut-on dire que Louis XIV a transformé la danse, d'un divertissement de cour en un véritable art ? Développe ta réponse avec au moins deux arguments.",
          reponse:
            "D'abord, en dansant lui-même avec passion, Louis XIV a donné à la danse un prestige immense : elle devenait digne d'un roi. Ensuite, il a créé des institutions durables : l'Académie royale de danse (1661) qui fixe les règles et forme les maîtres, puis l'Académie royale de musique (1669) qui offre à la danse une scène professionnelle. Enfin, grâce à Lully et Beauchamp, la technique a été codifiée (les cinq positions), ce qui a permis de transmettre cet art de génération en génération.",
          explication:
            "Une bonne réponse montre le passage de l'amateurisme de cour à un art professionnel, codifié et institutionnalisé.",
        },
      ],
    },
    {
      titre: "Examen 2 — La naissance du ballet",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans le Ballet royal de la Nuit, Louis XIV incarne :",
          choix: ["Jupiter, roi des dieux", "Apollon, le Soleil levant", "Mars, dieu de la guerre", "Neptune, dieu de la mer"],
          bonneReponse: 1,
          explication: "Il apparaît à l'aube en Apollon, le Soleil levant : c'est l'origine du surnom de Roi Soleil.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qui compose la musique des ballets de Louis XIV et crée la comédie-ballet avec Molière ?",
          reponse: "Jean-Baptiste Lully.",
          explication:
            "Lully, compositeur d'origine italienne, est le musicien préféré du roi ; il dirige l'Académie royale de musique à partir de 1672.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "En quelle année paraissent les premières danseuses professionnelles sur la scène de l'Opéra ?",
          choix: ["1581", "1653", "1681", "1713"],
          bonneReponse: 2,
          explication:
            "En 1681, mademoiselle de La Fontaine devient la première ballerine professionnelle de l'histoire.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Associe chaque date à son événement : 1581, 1653, 1661, 1669.",
          reponse:
            "1581 : Ballet comique de la Reine ; 1653 : Ballet royal de la Nuit (Louis XIV en Soleil) ; 1661 : fondation de l'Académie royale de danse ; 1669 : fondation de l'Académie royale de musique, futur Opéra de Paris.",
          explication:
            "Ces quatre dates forment la frise chronologique essentielle du chapitre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qui dansait dans les ballets de cour du XVIIe siècle, et pourquoi ?",
          reponse:
            "Les nobles et le roi lui-même : il n'existait pas encore de danseurs professionnels. Danser avec grâce était une qualité indispensable d'un courtisan, et le ballet mettait en scène la gloire du roi.",
          explication:
            "Le ballet de cour est à la fois un divertissement aristocratique et un instrument politique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : en quoi la codification des cinq positions par Beauchamp est-elle importante pour l'histoire de la danse, encore aujourd'hui ? Argumente.",
          reponse:
            "Codifier, c'est fixer des règles communes. Grâce aux cinq positions, la danse classique a obtenu un langage précis, identique pour tous, que l'on peut enseigner, écrire et transmettre de génération en génération et de pays en pays. C'est pourquoi, plus de trois siècles après, tous les danseurs classiques du monde apprennent encore ces mêmes positions : elles sont la grammaire commune de la danse classique, comme l'alphabet l'est pour l'écriture.",
          explication:
            "Une bonne réponse insiste sur la transmission : sans codification, pas d'enseignement universel ni de tradition classique.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le ballet naît des fêtes des cours italiennes de la Renaissance ; Catherine de Médicis en apporte le goût en France.",
    "1581 : le Ballet comique de la Reine, réglé par Balthazar de Beaujoyeulx, est le premier grand ballet de cour.",
    "23 février 1653 : Louis XIV, 14 ans, danse le Soleil levant (Apollon) dans le Ballet royal de la Nuit → surnom de Roi Soleil.",
    "1661 : fondation de l'Académie royale de danse ; Pierre Beauchamp codifie les cinq positions, fondées sur l'en-dehors.",
    "1669 : fondation de l'Académie royale de musique, futur Opéra de Paris, dirigée par Lully à partir de 1672.",
    "1681 : premières danseuses professionnelles (mademoiselle de La Fontaine) ; 1713 : création de l'école de danse de l'Opéra.",
  ],
},
{
  slug: "vocabulaire-classique",
  titre: "Le vocabulaire de la danse classique",
  matiere: "histoire-danse",
  niveau: "5eme",
  description:
    "Apprendre le vocabulaire technique de base de la danse classique, en français international utilisé dans le monde entier : les cinq positions, les mouvements fondamentaux à la barre (plié, tendu, dégagé...) et les figures emblématiques du répertoire (arabesque, pirouette, port de bras).",
  objectifs: [
    "Connaître les cinq positions de base des pieds en danse classique",
    "Comprendre pourquoi le vocabulaire de la danse classique est en français partout dans le monde",
    "Savoir définir les mouvements fondamentaux travaillés à la barre : plié, tendu, dégagé, rond de jambe",
    "Connaître les figures et positions emblématiques : arabesque, attitude, pirouette, port de bras",
    "Utiliser correctement ces termes techniques à l'oral et à l'écrit",
  ],
  slides: [
    {
      titre: "Pourquoi la danse classique se parle en français",
      illustration: "🇫🇷",
      visuel: "Un vocabulaire international",
      contenu: [
        "La danse classique est née et s'est codifiée en France, à la cour de Louis XIV",
        "L'Académie royale de danse (1661) a fixé les premiers termes techniques en français",
        "Depuis, ces mots français sont utilisés par tous les danseurs du monde",
        "Un danseur japonais, russe ou brésilien utilise donc les mêmes mots qu'un danseur français",
      ],
      voixOff:
        "Voici une chose étonnante : où que tu ailles dans le monde, dans un cours de danse classique à Tokyo, à Moscou ou à New York, le professeur utilisera des mots français ! Pourquoi ? Parce que la danse classique s'est codifiée en France au dix-septième siècle, avec l'Académie royale de danse fondée par Louis quatorze. Ce vocabulaire est devenu la langue commune de tous les danseurs classiques du monde entier.",
    },
    {
      titre: "Les cinq positions des pieds",
      illustration: "🦶",
      visuel: "1re, 2e, 3e, 4e, 5e position",
      contenu: [
        "Première position : talons joints, pieds tournés vers l'extérieur (en-dehors)",
        "Deuxième position : les pieds s'écartent de la largeur d'un pied, toujours en-dehors",
        "Troisième et cinquième positions : un pied devant l'autre, plus ou moins croisé",
        "Quatrième position : un pied devant l'autre, séparés par un espace",
      ],
      voixOff:
        "Tout commence par les cinq positions des pieds, codifiées au dix-septième siècle par Pierre Beauchamp. En première position, les talons se touchent et les pieds pointent vers l'extérieur. En deuxième, on écarte les pieds. En troisième et cinquième, un pied vient se placer devant l'autre, complètement croisé pour la cinquième. En quatrième, un pied est devant l'autre avec un espace entre eux. Chaque pas de danse classique part de l'une de ces positions.",
    },
    {
      titre: "L'en-dehors : la base de la technique",
      illustration: "🔄",
      visuel: "L'en-dehors",
      contenu: [
        "L'en-dehors désigne la rotation des jambes vers l'extérieur, depuis la hanche",
        "Il donne son allure si particulière à la danse classique",
        "Il permet plus d'amplitude et de stabilité dans les mouvements",
        "Il s'apprend et se travaille dès les premiers cours, sans jamais forcer",
      ],
      voixOff:
        "Un mot revient sans cesse en danse classique : l'en-dehors. Il s'agit de la rotation des jambes vers l'extérieur, qui part de la hanche. C'est ce qui donne à la danse classique cette silhouette si reconnaissable, avec les pieds et les genoux tournés vers l'extérieur. L'en-dehors permet aux danseurs plus d'amplitude et plus de stabilité. Attention, il se travaille progressivement, sans jamais forcer, pour ne pas se blesser.",
    },
    {
      titre: "Les mouvements de base à la barre : plié et tendu",
      illustration: "🩰",
      visuel: "Plié — Tendu",
      contenu: [
        "Le plié : flexion des genoux, jambes en-dehors, dos droit, exercice d'échauffement",
        "Le grand plié : flexion complète des genoux jusqu'à ce que les talons se soulèvent",
        "Le tendu : le pied glisse sur le sol jusqu'à ce que seuls les orteils touchent le sol",
        "Ces deux mouvements ouvrent toujours le cours de danse classique, à la barre",
      ],
      voixOff:
        "Chaque cours de danse classique commence à la barre par les mêmes mouvements. Le plié, d'abord : on plie les genoux en gardant le dos droit et les jambes en-dehors, c'est un échauffement essentiel. Le grand plié va plus loin : on descend jusqu'à ce que les talons se soulèvent du sol. Puis vient le tendu : le pied glisse sur le sol et s'étire jusqu'à ce que seuls les orteils le touchent encore.",
    },
    {
      titre: "Dégagé et rond de jambe",
      illustration: "🌀",
      visuel: "Dégagé — Rond de jambe",
      contenu: [
        "Le dégagé : comme le tendu, mais le pied se soulève légèrement du sol",
        "Le rond de jambe : la jambe dessine un demi-cercle sur le sol ou en l'air",
        "Il peut être « à terre » (au sol) ou « en l'air »",
        "Ces mouvements assouplissent la hanche et préparent aux pas plus complexes",
      ],
      voixOff:
        "Après le tendu vient le dégagé : le pied glisse comme pour un tendu, mais cette fois il se détache légèrement du sol. Ensuite, on travaille le rond de jambe : la jambe dessine un demi-cercle, soit à terre en glissant sur le sol, soit en l'air. Ces exercices assouplissent la hanche et préparent le corps aux mouvements plus complexes qui viendront ensuite, comme les pirouettes ou les grands battements.",
    },
    {
      titre: "L'arabesque, figure emblématique",
      illustration: "🦢",
      visuel: "L'arabesque",
      contenu: [
        "Position où le danseur se tient sur une jambe, l'autre tendue derrière à l'horizontale ou plus haut",
        "Les bras sont étendus pour prolonger la ligne du corps",
        "Il existe plusieurs arabesques, numérotées selon la position des bras",
        "C'est l'une des images les plus célèbres de la danse classique",
      ],
      voixOff:
        "Voici sans doute la figure la plus célèbre du ballet : l'arabesque. Le danseur se tient en équilibre sur une jambe, tandis que l'autre s'étire derrière lui, à l'horizontale ou plus haut encore. Les bras se déploient pour prolonger cette longue ligne, du bout des doigts jusqu'au bout du pied. Il existe plusieurs types d'arabesques, selon la position exacte des bras, mais toutes cherchent cette même impression de légèreté et d'équilibre.",
    },
    {
      titre: "Attitude et pirouette",
      illustration: "🌪️",
      visuel: "Attitude — Pirouette",
      contenu: [
        "L'attitude : le danseur se tient sur une jambe, l'autre levée et pliée derrière ou devant",
        "Elle s'inspire d'une célèbre statue du dieu Mercure",
        "La pirouette : un tour complet du corps sur une seule jambe, en équilibre sur la pointe ou la demi-pointe",
        "Le danseur fixe un point pour ne pas perdre l'équilibre : c'est le « spot »",
      ],
      voixOff:
        "L'attitude ressemble à l'arabesque, mais cette fois la jambe levée est pliée, derrière ou devant le corps. Ce nom vient d'une célèbre statue représentant le dieu Mercure dans cette posture. Autre grand classique : la pirouette, un tour complet effectué sur une seule jambe, en équilibre sur la pointe ou la demi-pointe. Pour ne pas tourner la tête et perdre l'équilibre, le danseur fixe un point fixe dans la salle : c'est ce qu'on appelle le spot.",
    },
    {
      titre: "Le port de bras et les pointes",
      illustration: "🙆",
      visuel: "Port de bras — Pointes",
      contenu: [
        "Le port de bras : la manière de placer et de faire circuler les bras avec grâce",
        "Il donne de l'expressivité et complète chaque mouvement des jambes",
        "Danser sur pointes : technique où la danseuse se tient en équilibre sur le bout des orteils",
        "Cette technique nécessite des chaussons spéciaux et de nombreuses années d'entraînement",
      ],
      voixOff:
        "Le port de bras désigne la façon dont un danseur place et déplace ses bras avec grâce, pour accompagner et prolonger chaque mouvement des jambes : sans lui, la danse classique perdrait toute son expressivité. Enfin, connais-tu la technique des pointes ? C'est le fait de danser en équilibre sur le bout des orteils, grâce à des chaussons renforcés spécialement conçus. Cette technique demande de nombreuses années d'entraînement avant de pouvoir être pratiquée en toute sécurité.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Le vocabulaire de la danse classique est en français dans le monde entier",
        "Les cinq positions des pieds sont la base de tous les mouvements",
        "L'en-dehors est le principe fondamental de la technique classique",
        "Barre : plié, tendu, dégagé, rond de jambe",
        "Figures : arabesque, attitude, pirouette, port de bras, pointes",
      ],
      voixOff:
        "Résumons ce vocabulaire essentiel. Le français reste la langue de la danse classique partout dans le monde, héritage de l'Académie royale de danse. Tout part des cinq positions des pieds et du principe de l'en-dehors. À la barre, on retrouve le plié, le tendu, le dégagé et le rond de jambe. Et au centre, les danseurs exécutent des figures célèbres comme l'arabesque, l'attitude, la pirouette, portées par un beau port de bras, parfois même sur pointes.",
    },
  ],
  fiche: {
    intro:
      "Le vocabulaire de la danse classique est en français dans le monde entier, hérité de sa codification au XVIIe siècle. Il comprend les cinq positions de base, les mouvements travaillés à la barre et les grandes figures du répertoire classique.",
    sections: [
      {
        titre: "Un vocabulaire français international",
        points: [
          "La danse classique s'est codifiée en France au XVIIe siècle (Académie royale de danse, 1661)",
          "Depuis, tous les danseurs du monde utilisent les mêmes termes techniques français",
          "L'en-dehors, rotation des jambes vers l'extérieur depuis la hanche, est le principe de base",
        ],
      },
      {
        titre: "Les cinq positions des pieds",
        points: [
          "1re position : talons joints, pieds en-dehors",
          "2e position : pieds écartés de la largeur d'un pied, en-dehors",
          "3e et 5e positions : un pied devant l'autre, plus ou moins croisé",
          "4e position : un pied devant l'autre, séparés par un espace",
        ],
      },
      {
        titre: "Les mouvements de base à la barre",
        points: [
          "Plié : flexion des genoux, jambes en-dehors, dos droit",
          "Tendu : le pied glisse au sol jusqu'à ce que seuls les orteils le touchent",
          "Dégagé : comme le tendu, mais le pied se soulève légèrement du sol",
          "Rond de jambe : la jambe dessine un demi-cercle, à terre ou en l'air",
        ],
      },
      {
        titre: "Les figures emblématiques",
        points: [
          "Arabesque : équilibre sur une jambe, l'autre tendue derrière à l'horizontale ou plus haut",
          "Attitude : équilibre sur une jambe, l'autre pliée, derrière ou devant",
          "Pirouette : tour complet sur une jambe, en équilibre sur pointe ou demi-pointe",
          "Port de bras : manière gracieuse de placer et faire circuler les bras",
          "Pointes : technique consistant à danser en équilibre sur le bout des orteils",
        ],
      },
    ],
    audio:
      "Fiche de révision : le vocabulaire de la danse classique. Ce vocabulaire est en français dans le monde entier, hérité de la codification de la danse au dix-septième siècle par l'Académie royale de danse. Le principe de base est l'en-dehors, la rotation des jambes vers l'extérieur depuis la hanche. Tout part des cinq positions des pieds : la première, talons joints ; la deuxième, pieds écartés ; la troisième et la cinquième, un pied devant l'autre, plus ou moins croisé ; la quatrième, un pied devant l'autre avec un espace. À la barre, les danseurs travaillent le plié, le tendu, le dégagé et le rond de jambe. Au centre, ils exécutent des figures célèbres : l'arabesque, où l'on se tient sur une jambe, l'autre tendue derrière ; l'attitude, où la jambe levée est pliée ; la pirouette, un tour complet en équilibre ; le tout porté par un beau port de bras, parfois sur pointes.",
  },
  memoCards: [
    {
      recto: "Pourquoi le vocabulaire de la danse classique est-il en français ?",
      verso: "Parce que la danse classique s'est codifiée en France au XVIIe siècle, avec l'Académie royale de danse (1661).",
    },
    {
      recto: "Qu'est-ce que l'en-dehors ?",
      verso: "La rotation des jambes vers l'extérieur, depuis la hanche : principe de base de la technique classique.",
    },
    {
      recto: "Décris la première position des pieds.",
      verso: "Les talons sont joints, les pieds tournés vers l'extérieur (en-dehors).",
    },
    {
      recto: "Qu'est-ce qu'un plié ?",
      verso: "Une flexion des genoux, jambes en-dehors et dos droit : c'est l'exercice d'échauffement de base à la barre.",
    },
    {
      recto: "Quelle est la différence entre un tendu et un dégagé ?",
      verso: "Dans le tendu, seuls les orteils touchent encore le sol ; dans le dégagé, le pied se soulève légèrement du sol.",
    },
    {
      recto: "Qu'est-ce qu'une arabesque ?",
      verso: "Une position où le danseur est en équilibre sur une jambe, l'autre tendue derrière à l'horizontale ou plus haut, bras déployés.",
    },
    {
      recto: "Qu'est-ce qu'une pirouette ?",
      verso: "Un tour complet du corps sur une seule jambe, en équilibre sur pointe ou demi-pointe.",
    },
    {
      recto: "Qu'est-ce que le port de bras ?",
      verso: "La manière de placer et de faire circuler les bras avec grâce, pour donner de l'expressivité au mouvement des jambes.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Pourquoi le vocabulaire de la danse classique est-il en français partout dans le monde ?",
      choix: [
        "Parce que la France est le seul pays où l'on danse le ballet",
        "Parce que la danse classique s'est codifiée en France au XVIIe siècle",
        "Parce que le français est plus simple à apprendre",
        "Parce que c'est une règle décidée récemment par l'UNESCO",
      ],
      bonneReponse: 1,
      explication:
        "L'Académie royale de danse, fondée par Louis XIV en 1661, a fixé les premiers termes techniques en français, encore utilisés aujourd'hui dans le monde entier.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien y a-t-il de positions de base des pieds en danse classique ?",
      choix: ["Trois", "Quatre", "Cinq", "Six"],
      bonneReponse: 2,
      explication: "Il existe cinq positions des pieds, codifiées par Pierre Beauchamp au XVIIe siècle.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que l'en-dehors ?",
      reponse: "La rotation des jambes vers l'extérieur, depuis la hanche.",
      explication: "C'est le principe technique fondamental sur lequel reposent toutes les positions classiques.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel mouvement consiste à plier les genoux, jambes en-dehors et dos droit ?",
      choix: ["Le tendu", "Le plié", "La pirouette", "L'arabesque"],
      bonneReponse: 1,
      explication: "Le plié est l'exercice d'échauffement de base, toujours réalisé en début de cours à la barre.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la différence entre un tendu et un dégagé ?",
      choix: [
        "Le tendu se fait avec les bras, le dégagé avec les jambes",
        "Dans le dégagé, le pied se soulève légèrement du sol, contrairement au tendu",
        "Le tendu est plus rapide que le dégagé",
        "Il n'y a aucune différence",
      ],
      bonneReponse: 1,
      explication:
        "Dans le tendu, le pied glisse sur le sol jusqu'à ce que seuls les orteils le touchent ; dans le dégagé, le pied se détache complètement du sol.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris la position de l'arabesque.",
      reponse:
        "Le danseur est en équilibre sur une jambe, tandis que l'autre est tendue derrière lui, à l'horizontale ou plus haut, les bras déployés pour prolonger la ligne du corps.",
      explication:
        "L'arabesque est l'une des figures les plus emblématiques du ballet classique, avec plusieurs variantes selon la position des bras.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce qui différencie l'attitude de l'arabesque ?",
      choix: [
        "Dans l'attitude, la jambe levée est pliée, alors qu'elle est tendue dans l'arabesque",
        "L'attitude se danse toujours sur pointes",
        "L'arabesque ne concerne que les hommes",
        "Il n'y a aucune différence entre les deux",
      ],
      bonneReponse: 0,
      explication:
        "Dans l'attitude, la jambe levée, devant ou derrière le corps, est pliée, alors que dans l'arabesque elle reste tendue.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce que le « spot » dans une pirouette et à quoi sert-il ?",
      reponse:
        "C'est le point fixe que le danseur fixe du regard pendant le tour, pour ne pas être désorienté et garder l'équilibre.",
      explication:
        "La tête tourne en dernier et le plus vite possible pour revenir fixer ce même point : c'est une technique essentielle pour réussir une pirouette.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Que travaille-t-on principalement en exécutant des ronds de jambe ?",
      choix: [
        "La force des bras",
        "La souplesse et la mobilité de la hanche",
        "L'équilibre sur pointes uniquement",
        "La mémoire des enchaînements",
      ],
      bonneReponse: 1,
      explication:
        "Le rond de jambe, à terre ou en l'air, assouplit la hanche et prépare le corps à des mouvements plus complexes comme les grands battements.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique pourquoi la technique des pointes demande de nombreuses années d'entraînement avant d'être pratiquée.",
      reponse:
        "Danser sur pointes exige un équilibre parfait, une grande force dans les pieds, les chevilles et le tronc, ainsi qu'un placement du corps très précis. Sans cette préparation progressive, le risque de blessure est important : c'est pourquoi les jeunes danseuses ne commencent les pointes qu'après plusieurs années de danse classique, une fois les os et les muscles suffisamment développés.",
      explication:
        "Cette prudence rejoint le travail progressif de l'en-dehors : en danse classique, la technique se construit patiemment, sans jamais forcer le corps.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique le lien entre les cinq positions des pieds et le principe de l'en-dehors.",
      reponse:
        "Les cinq positions des pieds reposent toutes sur l'en-dehors, c'est-à-dire la rotation des jambes vers l'extérieur depuis la hanche. Sans en-dehors, il serait impossible de placer les pieds correctement dans ces positions : l'en-dehors est donc la condition nécessaire à leur exécution, et chaque pas de danse classique part et revient vers l'une de ces cinq positions.",
      explication:
        "Comprendre ce lien permet de saisir pourquoi l'en-dehors est enseigné dès les tout premiers cours de danse classique.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Pourquoi peut-on dire que le port de bras est aussi important que le travail des jambes en danse classique ?",
      reponse:
        "Le port de bras donne son expressivité et sa grâce à chaque mouvement : sans un bon placement et une bonne circulation des bras, un pas techniquement réussi avec les jambes paraîtrait incomplet ou raide. Les bras prolongent la ligne du corps, comme dans l'arabesque, et participent pleinement à la beauté du geste dansé.",
      explication:
        "En danse classique, la technique des jambes et l'expressivité des bras sont indissociables : c'est l'ensemble qui crée l'harmonie du mouvement.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le vocabulaire de la danse classique est traditionnellement en :",
      choix: ["Anglais", "Italien", "Français", "Russe"],
      bonneReponse: 2,
      explication: "Il vient de la codification de la danse en France au XVIIe siècle.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un plié ?",
      reponse: "Une flexion des genoux, jambes en-dehors et dos droit.",
      explication: "C'est le premier mouvement travaillé à la barre, à chaque cours.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Qu'est-ce que l'en-dehors ?",
      choix: [
        "Une figure de saut",
        "La rotation des jambes vers l'extérieur depuis la hanche",
        "Un type de chausson de danse",
        "Une position des bras uniquement",
      ],
      bonneReponse: 1,
      explication: "C'est le principe fondamental sur lequel reposent les cinq positions et la technique classique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris rapidement une arabesque.",
      reponse: "Équilibre sur une jambe, l'autre tendue derrière à l'horizontale ou plus haut, bras déployés.",
      explication: "C'est l'une des figures les plus emblématiques du répertoire classique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "À quoi sert le « spot » du regard pendant une pirouette ?",
      reponse: "À fixer un point fixe pour garder l'équilibre et ne pas être désorienté pendant le tour.",
      explication: "La tête tourne en dernier pour revenir vite sur ce même point.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le vocabulaire de la danse classique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "D'où vient l'usage du français comme langue technique de la danse classique ?",
          choix: [
            "De l'Italie, berceau du ballet",
            "De la codification de la danse en France au XVIIe siècle",
            "D'une décision récente des grandes compagnies internationales",
            "Du théâtre grec antique",
          ],
          bonneReponse: 1,
          explication:
            "L'Académie royale de danse, fondée en 1661 par Louis XIV, a fixé les premiers termes techniques, devenus internationaux.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Décris la première position des pieds.",
          reponse: "Les talons sont joints, les pieds tournés vers l'extérieur (en-dehors).",
          explication: "C'est la position de départ la plus simple et la première apprise en cours.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Que fait le pied dans un tendu ?",
          choix: [
            "Il reste immobile au sol",
            "Il glisse sur le sol jusqu'à ce que seuls les orteils le touchent",
            "Il se lève à hauteur de la hanche",
            "Il tape le sol plusieurs fois",
          ],
          bonneReponse: 1,
          explication: "Le tendu prépare et étire la jambe tout en gardant un contact avec le sol.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle est la différence entre l'arabesque et l'attitude ?",
          reponse:
            "Dans l'arabesque, la jambe levée derrière le corps reste tendue. Dans l'attitude, la jambe levée, devant ou derrière, est pliée.",
          explication:
            "L'attitude s'inspire d'une célèbre statue du dieu Mercure représenté dans cette posture.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce qu'un rond de jambe et à quoi sert-il ?",
          reponse:
            "C'est un mouvement où la jambe dessine un demi-cercle, à terre ou en l'air. Il sert à assouplir la hanche et à préparer le corps à des mouvements plus complexes.",
          explication:
            "Le rond de jambe peut se faire « à terre », en glissant le pied sur le sol, ou « en l'air », jambe levée.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : pourquoi peut-on dire que les cinq positions et l'en-dehors forment ensemble le socle de toute la danse classique ? Développe ta réponse.",
          reponse:
            "Les cinq positions donnent aux danseurs un point de départ et d'arrivée commun à tous les pas : sans elles, il n'existerait pas de vocabulaire partagé. L'en-dehors, la rotation des jambes vers l'extérieur, est la condition technique qui permet de tenir correctement ces positions. Ensemble, positions et en-dehors forment une grammaire commune : c'est parce que tous les danseurs du monde apprennent les mêmes bases qu'ils peuvent danser ensemble et se comprendre, quelle que soit leur nationalité.",
          explication:
            "Une bonne réponse relie clairement les deux notions et montre leur rôle de fondation pour tout le reste de la technique classique.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le vocabulaire de la danse classique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment s'appelle la technique consistant à danser en équilibre sur le bout des orteils ?",
          choix: ["Le port de bras", "Les pointes", "L'attitude", "Le rond de jambe"],
          bonneReponse: 1,
          explication:
            "Cette technique nécessite des chaussons spéciaux renforcés et de nombreuses années d'entraînement.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que le port de bras ?",
          reponse: "La manière de placer et de faire circuler les bras avec grâce pour accompagner le mouvement des jambes.",
          explication: "Il donne toute son expressivité au geste dansé.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un dégagé se distingue d'un tendu car :",
          choix: [
            "Le pied se soulève légèrement du sol",
            "Les bras se lèvent au-dessus de la tête",
            "Le mouvement se fait uniquement sur pointes",
            "Le dos doit se courber vers l'avant",
          ],
          bonneReponse: 0,
          explication: "Dans le dégagé, contrairement au tendu, le pied quitte complètement le sol.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce qu'une pirouette et quelle technique aide à la réussir ?",
          reponse:
            "C'est un tour complet du corps sur une seule jambe, en équilibre sur pointe ou demi-pointe. Le « spot », qui consiste à fixer un point du regard, aide à garder l'équilibre et à ne pas être désorienté.",
          explication:
            "La tête est la dernière partie du corps à tourner, et la première à revenir fixer ce même point.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle institution a codifié les premiers termes techniques de la danse classique en français, et en quelle année ?",
          reponse: "L'Académie royale de danse, fondée par Louis XIV en 1661.",
          explication: "C'est de là que vient l'usage international du vocabulaire français en danse classique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Question de réflexion : en quoi le vocabulaire technique de la danse classique facilite-t-il les échanges entre danseurs de différents pays ? Illustre avec des exemples précis.",
          reponse:
            "Parce que ce vocabulaire est commun à tous, un danseur français peut suivre un cours donné par un professeur russe ou japonais sans difficulté : quand celui-ci dit « plié » ou « arabesque », tous les élèves comprennent le même geste, quelle que soit leur langue maternelle. Cette langue technique partagée permet aussi aux danseurs de rejoindre des compagnies étrangères et de danser ensemble dans des ballets internationaux, sans besoin de traduction.",
          explication:
            "Une bonne réponse montre que le vocabulaire français fonctionne comme une langue commune universelle, facilitant la circulation des danseurs et des œuvres dans le monde entier.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le vocabulaire de la danse classique est en français dans le monde entier, depuis l'Académie royale de danse (1661).",
    "L'en-dehors, rotation des jambes vers l'extérieur depuis la hanche, est le principe de base de la technique.",
    "Les cinq positions des pieds sont le point de départ et d'arrivée de tous les pas.",
    "À la barre : plié (flexion des genoux), tendu (pied glissé), dégagé (pied soulevé), rond de jambe (demi-cercle).",
    "Figures emblématiques : arabesque (jambe tendue derrière), attitude (jambe pliée), pirouette (tour en équilibre).",
    "Le port de bras donne l'expressivité ; les pointes demandent plusieurs années d'entraînement avant d'être pratiquées.",
  ],
}
];

export default chapitres;
