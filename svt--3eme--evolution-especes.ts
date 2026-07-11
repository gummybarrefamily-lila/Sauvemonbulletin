import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "evolution-especes",
  titre: "L'évolution des espèces",
  matiere: "svt",
  niveau: "3eme",
  description:
    "Comprendre les indices de l'évolution du vivant (fossiles, organes homologues), la notion de parenté et d'ancêtre commun, lire un arbre de parenté simple, comprendre le mécanisme de la sélection naturelle, et situer l'espèce humaine dans l'histoire de l'évolution.",
  objectifs: [
    "Identifier des indices de l'évolution des espèces (fossiles, organes homologues)",
    "Comprendre la notion de parenté entre espèces et d'ancêtre commun",
    "Lire un arbre de parenté (arbre phylogénétique) simple",
    "Expliquer le mécanisme de la sélection naturelle avec un exemple",
    "Situer l'espèce humaine dans l'histoire de l'évolution du vivant",
  ],
  slides: [
    {
      titre: "Toutes les espèces ont une histoire",
      illustration: "🕰️",
      visuel: "les espèces changent au cours du temps",
      contenu: [
        "Les espèces actuelles ne sont pas apparues d'un coup, toutes ensemble",
        "Elles résultent de transformations progressives au cours du temps",
        "C'est ce que l'on appelle l'évolution du vivant",
        "Plusieurs types d'indices permettent de la mettre en évidence",
      ],
      voixOff:
        "Les espèces vivantes que nous observons aujourd'hui n'ont pas toujours existé sous cette forme. Elles résultent de transformations progressives survenues au fil de très longues périodes : c'est ce que l'on appelle l'évolution du vivant. Plusieurs types d'indices, que nous allons découvrir, permettent aux scientifiques de mettre en évidence cette évolution.",
    },
    {
      titre: "Les fossiles, témoins de l'évolution",
      illustration: "🦴",
      visuel: "fossiles classés par âge → formes intermédiaires",
      contenu: [
        "Les fossiles se trouvent dans des roches d'âges différents",
        "En les classant du plus ancien au plus récent, on observe des transformations",
        "Certains fossiles présentent des caractères intermédiaires entre deux groupes",
        "Exemple : Archaeopteryx, intermédiaire entre reptiles et oiseaux",
      ],
      voixOff:
        "Les fossiles sont conservés dans des roches dont on peut estimer l'âge. En les classant du plus ancien au plus récent, on observe des transformations progressives des espèces. Certains fossiles montrent même des caractères intermédiaires entre deux groupes : c'est le cas d'Archaeopteryx, qui possède à la fois des caractères de reptile, comme des dents, et des caractères d'oiseau, comme des plumes.",
    },
    {
      titre: "Comparer pour trouver des parentés",
      illustration: "🖐️",
      visuel: "membre chiridien : humain / chat / baleine / chauve-souris",
      contenu: [
        "Des espèces différentes peuvent posséder des organes de même organisation",
        "Ce sont des organes homologues : même plan d'organisation, fonctions différentes",
        "Exemple : le membre chiridien (bras, patte, aile, nageoire) chez de nombreux vertébrés",
        "Cette ressemblance suggère une origine commune",
      ],
      voixOff:
        "En comparant l'anatomie de différentes espèces, on trouve parfois des organes très ressemblants dans leur organisation interne, bien qu'ils remplissent des fonctions différentes : ce sont des organes homologues. Le bras humain, la patte du chat, l'aile de la chauve-souris et la nageoire de la baleine partagent ainsi le même plan d'organisation, appelé membre chiridien, avec les mêmes os disposés de façon comparable. Cette ressemblance n'est pas un hasard.",
    },
    {
      titre: "Un ancêtre commun",
      illustration: "🌳",
      visuel: "plus de ressemblances = parenté plus proche",
      contenu: [
        "Plus deux espèces partagent de caractères, plus elles sont proches parentes",
        "Des espèces proches parentes partagent un ancêtre commun plus récent",
        "Cet ancêtre n'est pas l'une des espèces actuelles",
        "Toutes les espèces sont reliées par un très ancien ancêtre commun",
      ],
      voixOff:
        "Plus deux espèces partagent de caractères communs, comme des organes homologues, plus on considère qu'elles sont parentes. Deux espèces proches parentes partagent un ancêtre commun relativement récent, qui n'est ni l'une ni l'autre des espèces actuelles, mais une espèce disparue depuis longtemps. En remontant très loin dans le temps, toutes les espèces vivantes partagent un ancêtre commun très ancien.",
    },
    {
      titre: "Lire un arbre de parenté",
      illustration: "🌲",
      visuel: "arbre = branches qui se séparent",
      contenu: [
        "Un arbre de parenté représente les liens entre espèces",
        "Chaque nœud (embranchement) représente un ancêtre commun",
        "Deux espèces sont d'autant plus proches que leur dernier nœud commun est récent",
        "Cet arbre se construit à partir des caractères partagés",
      ],
      voixOff:
        "Pour représenter ces liens de parenté, les scientifiques construisent un arbre de parenté. Chaque embranchement, ou nœud, représente un ancêtre commun aux espèces situées au-dessus. Deux espèces sont d'autant plus proches parentes que le nœud qui les relie est récent, c'est-à-dire proche des espèces actuelles. Cet arbre est construit à partir des caractères que les espèces partagent.",
    },
    {
      titre: "La sélection naturelle",
      illustration: "🦋",
      visuel: "variation → sélection → transmission",
      contenu: [
        "Au sein d'une espèce, les individus présentent des variations (diversité génétique)",
        "Certaines variations avantagent leur porteur dans un milieu donné",
        "Ces individus survivent et se reproduisent davantage",
        "Leurs caractères avantageux se transmettent et se répandent dans la population",
      ],
      voixOff:
        "Comment une espèce se transforme-t-elle au cours du temps ? Grâce à la sélection naturelle. Au sein d'une population, les individus présentent naturellement des variations. Dans un milieu donné, certaines de ces variations avantagent leur porteur, qui survit mieux et se reproduit davantage. Ces caractères avantageux se transmettent alors à la génération suivante et se répandent progressivement dans la population.",
    },
    {
      titre: "Un exemple de sélection naturelle",
      illustration: "🦟",
      visuel: "bactéries résistantes aux antibiotiques",
      contenu: [
        "Une population de bactéries est traitée par un antibiotique",
        "Quelques bactéries possèdent, par hasard, un caractère de résistance",
        "L'antibiotique élimine les bactéries sensibles, pas les résistantes",
        "Les bactéries résistantes se multiplient : la population devient résistante",
      ],
      voixOff:
        "Prenons un exemple actuel. Dans une population de bactéries, quelques individus possèdent, par hasard, un caractère qui les rend résistants à un antibiotique. Lorsque cet antibiotique est utilisé, il élimine les bactéries sensibles, mais pas les résistantes. Ces dernières survivent, se multiplient, et la population de bactéries devient peu à peu majoritairement résistante à l'antibiotique.",
    },
    {
      titre: "L'être humain, un produit de l'évolution",
      illustration: "🧬",
      visuel: "ancêtre commun humain / grands singes (≠ l'humain descend du singe)",
      contenu: [
        "L'espèce humaine résulte elle aussi de l'évolution du vivant",
        "Elle partage un ancêtre commun, aujourd'hui disparu, avec les grands singes actuels",
        "L'être humain ne descend pas du chimpanzé actuel",
        "Homme et chimpanzé sont deux espèces cousines, issues d'un même ancêtre",
      ],
      voixOff:
        "L'espèce humaine n'échappe pas à cette histoire : elle résulte elle aussi de l'évolution du vivant. Attention à une idée fausse très répandue : l'être humain ne descend pas du chimpanzé actuel. En réalité, l'Homme et le chimpanzé partagent un ancêtre commun, aujourd'hui disparu, qui a vécu il y a plusieurs millions d'années. Ce sont deux espèces cousines, chacune ayant évolué de son côté depuis cet ancêtre commun.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Fossiles et organes homologues sont des indices de l'évolution",
        "Deux espèces proches parentes partagent un ancêtre commun récent",
        "L'arbre de parenté représente ces liens entre espèces",
        "La sélection naturelle explique la transformation des espèces au cours du temps",
      ],
      voixOff:
        "Résumons. Les fossiles et les organes homologues sont des indices qui montrent que les espèces évoluent au cours du temps et partagent des liens de parenté. Un arbre de parenté représente ces liens : plus deux espèces partagent de caractères, plus leur ancêtre commun est récent. La sélection naturelle explique comment une espèce se transforme, en favorisant la survie et la reproduction des individus les mieux adaptés à leur milieu. Et l'être humain, comme toutes les espèces, est le produit de cette longue évolution. Bravo, tu comprends maintenant les mécanismes de l'évolution !",
    },
  ],
  fiche: {
    intro:
      "L'évolution du vivant est mise en évidence par plusieurs indices : les fossiles et les organes homologues. Les espèces partagent des liens de parenté représentés par un arbre de parenté, où deux espèces sont d'autant plus proches que leur ancêtre commun est récent. La sélection naturelle explique le mécanisme par lequel les espèces se transforment au cours du temps. L'être humain est lui aussi le produit de cette évolution.",
    sections: [
      {
        titre: "Les indices de l'évolution",
        points: [
          "Les fossiles, classés du plus ancien au plus récent, montrent des transformations progressives",
          "Certains fossiles présentent des caractères intermédiaires entre deux groupes (ex. Archaeopteryx)",
          "Les organes homologues (même plan d'organisation, fonctions différentes) témoignent d'une origine commune",
        ],
      },
      {
        titre: "Parenté et arbre de parenté",
        points: [
          "Plus deux espèces partagent de caractères, plus elles sont proches parentes",
          "Deux espèces proches parentes partagent un ancêtre commun récent, aujourd'hui disparu",
          "L'arbre de parenté représente ces liens : chaque nœud est un ancêtre commun",
        ],
      },
      {
        titre: "La sélection naturelle",
        points: [
          "Les individus d'une espèce présentent des variations (diversité génétique)",
          "Certaines variations avantagent leur porteur dans un milieu donné",
          "Les individus avantagés survivent et se reproduisent davantage",
          "Leurs caractères avantageux se répandent dans la population au fil des générations",
        ],
      },
      {
        titre: "L'être humain dans l'évolution",
        points: [
          "L'espèce humaine résulte elle aussi de l'évolution du vivant",
          "L'Homme et le chimpanzé partagent un ancêtre commun disparu, ce sont des espèces cousines",
          "L'être humain ne descend pas du chimpanzé actuel",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'évolution des espèces. Les fossiles et les organes homologues, comme le membre chiridien partagé par de nombreux vertébrés, sont des indices qui montrent que les espèces évoluent au cours du temps et partagent des liens de parenté. Plus deux espèces se ressemblent par leurs caractères, plus elles sont proches parentes et plus leur ancêtre commun, aujourd'hui disparu, est récent. Ces liens de parenté se représentent par un arbre de parenté, où chaque embranchement correspond à un ancêtre commun. Le mécanisme qui explique la transformation des espèces au cours du temps est la sélection naturelle : au sein d'une population, certains individus possèdent, par hasard, des caractères avantageux dans leur milieu ; ils survivent mieux, se reproduisent davantage, et ces caractères se répandent dans la population au fil des générations, comme le montre l'exemple des bactéries résistantes aux antibiotiques. L'espèce humaine résulte elle aussi de cette évolution : elle partage un ancêtre commun disparu avec les grands singes actuels, mais elle ne descend pas du chimpanzé actuel, qui est une espèce cousine.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un organe homologue ?", verso: "Un organe présentant le même plan d'organisation chez des espèces différentes, malgré des fonctions différentes (ex. membre chiridien)." },
    { recto: "Que montre le classement des fossiles du plus ancien au plus récent ?", verso: "Des transformations progressives des espèces au cours du temps." },
    { recto: "Qu'est-ce qu'un ancêtre commun ?", verso: "Une espèce disparue dont sont issues, par évolution, plusieurs espèces actuelles ou passées." },
    { recto: "Comment lire un arbre de parenté ?", verso: "Plus le nœud (ancêtre commun) reliant deux espèces est récent, plus ces espèces sont proches parentes." },
    { recto: "Qu'est-ce que la sélection naturelle ?", verso: "Le mécanisme par lequel les individus porteurs de caractères avantageux survivent et se reproduisent davantage, répandant ces caractères dans la population." },
    { recto: "L'être humain descend-il du chimpanzé actuel ?", verso: "Non : Homme et chimpanzé partagent un ancêtre commun disparu ; ce sont deux espèces cousines." },
    { recto: "Cite un exemple de fossile intermédiaire.", verso: "Archaeopteryx, intermédiaire entre reptiles (dents) et oiseaux (plumes)." },
    { recto: "D'où viennent les variations entre individus d'une même espèce ?", verso: "De la diversité génétique naturellement présente dans la population." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un organe homologue est un organe qui :",
      choix: ["A toujours la même fonction chez toutes les espèces", "Partage le même plan d'organisation malgré des fonctions différentes", "N'existe que chez l'être humain", "Est toujours un fossile"],
      bonneReponse: 1,
      explication: "Les organes homologues partagent une organisation commune, même si leur fonction diffère selon les espèces.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que représente un arbre de parenté ?",
      choix: ["Les liens de parenté entre espèces", "La taille des espèces", "Le climat de leur milieu", "Leur régime alimentaire"],
      bonneReponse: 0,
      explication: "L'arbre de parenté représente les liens de parenté entre espèces, à partir des caractères partagés.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite un exemple d'organe homologue partagé par plusieurs espèces de vertébrés.",
      reponse: "Le membre chiridien (bras humain, patte de chat, aile de chauve-souris, nageoire de baleine).",
      explication: "Ces membres partagent le même plan d'organisation malgré des fonctions très différentes.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Sur un arbre de parenté, deux espèces sont d'autant plus proches parentes que :",
      choix: ["Leur nœud commun est ancien", "Leur nœud commun est récent", "Elles vivent dans le même pays", "Elles ont la même couleur"],
      bonneReponse: 1,
      explication: "Plus le dernier ancêtre commun (nœud) est récent, plus les deux espèces sont proches parentes.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi le fossile d'Archaeopteryx est un indice important de l'évolution.",
      reponse: "Parce qu'il présente à la fois des caractères de reptile, comme des dents, et des caractères d'oiseau, comme des plumes. C'est un fossile intermédiaire qui montre une transformation progressive entre ces deux groupes, appuyant l'idée d'une évolution des espèces.",
      explication: "Les fossiles intermédiaires illustrent concrètement les transitions entre grands groupes d'espèces.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris les étapes du mécanisme de la sélection naturelle.",
      reponse: "Les individus d'une population présentent des variations. Dans un milieu donné, certaines variations avantagent leur porteur, qui survit mieux et se reproduit davantage. Ces caractères avantageux se transmettent alors à la génération suivante et se répandent progressivement dans la population.",
      explication: "Variation, avantage sélectif, reproduction et transmission sont les quatre étapes clés de la sélection naturelle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans l'exemple des bactéries résistantes à un antibiotique, ce qui est sélectionné, c'est :",
      choix: [
        "Un caractère apparu à cause de l'antibiotique",
        "Un caractère de résistance déjà présent, par hasard, chez certaines bactéries",
        "Toutes les bactéries de la population",
        "Aucune bactérie ne survit"],
      bonneReponse: 1,
      explication: "La résistance existait déjà par hasard avant le traitement ; l'antibiotique ne fait que sélectionner les bactéries qui la possèdent.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi dit-on que l'être humain ne descend pas du chimpanzé actuel ?",
      reponse: "Parce que l'Homme et le chimpanzé actuel partagent un ancêtre commun, aujourd'hui disparu, à partir duquel les deux lignées ont évolué séparément. Le chimpanzé actuel n'est donc pas l'ancêtre de l'être humain, mais son espèce cousine.",
      explication: "Homme et chimpanzé descendent tous deux, séparément, d'un même ancêtre commun disparu.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Deux espèces A et B partagent plus de caractères communs avec une espèce C qu'avec une espèce D. Que peut-on en déduire sur leur parenté ?",
      reponse: "On peut en déduire que A et B sont plus proches parentes de C que de D, car le nombre de caractères partagés reflète la proximité de parenté : plus il y a de caractères communs, plus l'ancêtre commun est récent.",
      explication: "Le nombre de caractères communs permet de construire des hypothèses sur les liens de parenté entre espèces.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "La diversité génétique au sein d'une espèce est indispensable à la sélection naturelle car :",
      choix: [
        "Sans variations entre individus, il n'y aurait rien à sélectionner",
        "Elle empêche toute évolution",
        "Elle ne concerne que les espèces déjà éteintes",
        "Elle est produite uniquement par l'être humain"],
      bonneReponse: 0,
      explication: "La sélection naturelle agit sur des variations déjà présentes dans la population ; sans diversité génétique, aucune sélection n'est possible.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la sélection naturelle ne « crée » pas directement les variations avantageuses, mais les « sélectionne » seulement.",
      reponse: "Les variations entre individus (issues de la diversité génétique) existent déjà, par hasard, avant qu'un changement de milieu ne survienne. La sélection naturelle ne fabrique pas ces variations : elle favorise simplement, parmi les variations déjà présentes, celles qui apportent un avantage dans un milieu donné, en augmentant leurs chances de survie et de reproduction.",
      explication: "La sélection naturelle agit après coup sur des variations préexistantes, elle ne les provoque pas volontairement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un scientifique découvre un nouveau fossile possédant à la fois des caractères de poissons et des caractères d'amphibiens. Que peut-on supposer sur son intérêt scientifique ?",
      reponse: "Ce fossile pourrait être une forme intermédiaire entre poissons et amphibiens, apportant un indice supplémentaire en faveur de l'évolution progressive d'un groupe vers l'autre, comme c'est le cas pour Archaeopteryx entre reptiles et oiseaux.",
      explication: "Les fossiles aux caractères mixtes sont des indices précieux des transitions évolutives entre grands groupes.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Les fossiles sont des indices de l'évolution car ils montrent :",
      choix: ["Des espèces qui n'ont jamais changé", "Des transformations progressives des espèces au cours du temps", "Uniquement des animaux vivants", "Le climat actuel"],
      bonneReponse: 1,
      explication: "Classés du plus ancien au plus récent, les fossiles montrent l'évolution des espèces.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un ancêtre commun à deux espèces ?",
      reponse: "Une espèce disparue dont ces deux espèces sont issues par évolution.",
      explication: "L'ancêtre commun n'est jamais l'une des espèces actuelles elle-même.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite les grandes étapes de la sélection naturelle.",
      reponse: "Variation entre individus, avantage de certains dans un milieu donné, survie et reproduction accrues, transmission des caractères avantageux à la génération suivante.",
      explication: "Ce mécanisme explique la transformation progressive des espèces.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "L'Homme et le chimpanzé actuel sont :",
      choix: ["La même espèce", "Des espèces cousines issues d'un ancêtre commun disparu", "Sans aucun lien de parenté", "L'un l'ancêtre direct de l'autre"],
      bonneReponse: 1,
      explication: "Ils partagent un ancêtre commun disparu et ont évolué séparément depuis.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple d'organe homologue et explique ce qu'il révèle.",
      reponse: "Le membre chiridien, présent chez l'humain, le chat, la chauve-souris et la baleine : cette ressemblance d'organisation révèle une origine commune malgré des fonctions différentes.",
      explication: "Les organes homologues témoignent d'un ancêtre commun partagé par plusieurs espèces.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'évolution des espèces",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un fossile intermédiaire, comme Archaeopteryx, présente :",
          choix: [
            "Uniquement des caractères de reptile",
            "Des caractères de deux groupes différents",
            "Aucun caractère identifiable",
            "Uniquement des caractères d'oiseau"],
          bonneReponse: 1,
          explication: "Archaeopteryx possède à la fois des caractères de reptile (dents) et d'oiseau (plumes).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un organe homologue ?",
          reponse: "Un organe qui présente le même plan d'organisation chez des espèces différentes, même si sa fonction diffère.",
          explication: "Le membre chiridien en est l'exemple le plus étudié.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique comment on peut déterminer, à partir d'un arbre de parenté, quelles espèces sont les plus proches parentes.",
          reponse: "On regarde le nœud (ancêtre commun) qui relie deux espèces sur l'arbre : plus ce nœud est proche des espèces actuelles (récent), plus les deux espèces sont proches parentes ; plus il est éloigné (ancien), plus leur parenté est lointaine.",
          explication: "La position du dernier ancêtre commun indique le degré de parenté entre deux espèces.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "La sélection naturelle favorise :",
          choix: [
            "Tous les individus de façon égale",
            "Les individus dont les caractères sont avantageux dans leur milieu",
            "Uniquement les individus les plus gros",
            "Les individus au hasard, sans aucun lien avec le milieu"],
          bonneReponse: 1,
          explication: "La sélection naturelle favorise la survie et la reproduction des individus les mieux adaptés à leur milieu.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique, à l'aide de l'exemple des bactéries résistantes aux antibiotiques, le mécanisme de la sélection naturelle.",
          reponse: "Avant tout traitement, quelques bactéries possèdent par hasard un caractère de résistance. Lorsque l'antibiotique est utilisé, il élimine les bactéries sensibles mais pas les résistantes. Celles-ci survivent, se reproduisent, et leur caractère de résistance se répand dans la population de bactéries au fil des générations.",
          explication: "Ce cas illustre concrètement les étapes de variation, sélection et transmission propres à la sélection naturelle.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Pourquoi peut-on dire que l'espèce humaine s'inscrit dans la même histoire évolutive que les autres espèces vivantes ?",
          reponse: "Parce qu'elle possède, comme les autres espèces, des organes homologues avec d'autres vertébrés, qu'elle partage un ancêtre commun disparu avec les grands singes actuels, et que son apparition résulte, comme pour toute espèce, de transformations progressives au cours du temps.",
          explication: "L'espèce humaine n'échappe pas aux mécanismes généraux de l'évolution du vivant.",
        },
      ],
    },
    {
      titre: "Examen 2 — L'évolution des espèces",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Deux espèces qui partagent de nombreux caractères communs sont considérées comme :",
          choix: ["Sans aucun lien de parenté", "Proches parentes", "Identiques", "Toujours de la même espèce"],
          bonneReponse: 1,
          explication: "Plus deux espèces partagent de caractères, plus elles sont considérées comme proches parentes.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la sélection naturelle ?",
          reponse: "Le mécanisme par lequel les individus porteurs de caractères avantageux dans leur milieu survivent et se reproduisent davantage, ce qui répand ces caractères dans la population.",
          explication: "C'est le principal mécanisme expliquant l'évolution des espèces au cours du temps.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi le classement des fossiles selon leur âge est important pour étudier l'évolution.",
          reponse: "Il permet d'observer l'ordre dans lequel les caractères des espèces sont apparus et de suivre leurs transformations progressives au fil du temps, du plus ancien au plus récent.",
          explication: "L'ordre chronologique des fossiles retrace l'histoire évolutive des groupes d'espèces.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "L'ancêtre commun de deux espèces actuelles est :",
          choix: [
            "L'une des deux espèces actuelles",
            "Une espèce disparue",
            "Une espèce qui n'a jamais existé",
            "Toujours un fossile intermédiaire comme Archaeopteryx"],
          bonneReponse: 1,
          explication: "L'ancêtre commun est une espèce disparue, différente des espèces actuelles qui en sont issues.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève affirme : « L'être humain descend du singe. » Corrige cette affirmation avec les connaissances du chapitre.",
          reponse: "C'est inexact : l'être humain ne descend pas des singes actuels, mais partage avec eux, notamment les grands singes comme le chimpanzé, un ancêtre commun aujourd'hui disparu. Homme et chimpanzé sont des espèces cousines, issues de cet ancêtre commun, ayant évolué séparément depuis.",
          explication: "Il faut distinguer parenté (ancêtre commun) et filiation directe (descendance).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi la diversité génétique d'une population est une condition nécessaire à la sélection naturelle.",
          reponse: "La sélection naturelle agit en choisissant, parmi les variations déjà présentes dans une population, celles qui sont avantageuses dans un milieu donné. Sans diversité génétique, tous les individus seraient identiques et aucune variation ne pourrait être favorisée : l'espèce ne pourrait pas évoluer face à un changement de milieu.",
          explication: "La diversité génétique fournit la matière première sur laquelle agit la sélection naturelle.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Les fossiles, classés du plus ancien au plus récent, et les organes homologues sont des indices de l'évolution des espèces.",
    "Plus deux espèces partagent de caractères communs, plus elles sont proches parentes et plus leur ancêtre commun (disparu) est récent.",
    "L'arbre de parenté représente ces liens : chaque nœud correspond à un ancêtre commun.",
    "La sélection naturelle : les individus porteurs de caractères avantageux dans leur milieu survivent et se reproduisent davantage, répandant ces caractères dans la population.",
    "L'être humain est le produit de l'évolution ; il partage un ancêtre commun disparu avec les grands singes actuels (il n'en descend pas directement).",
    "Erreur à éviter : dire que « l'Homme descend du singe » — il faut dire qu'Homme et grands singes partagent un ancêtre commun disparu.",
  ],
};

export default chapitre;
