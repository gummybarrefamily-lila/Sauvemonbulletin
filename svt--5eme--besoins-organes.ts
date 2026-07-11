import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "besoins-organes",
  titre: "Les besoins des organes",
  matiere: "svt",
  niveau: "5eme",
  description:
    "Comprendre que les besoins des organes en nutriments et en dioxygène varient selon leur activité, et découvrir comment le corps adapte sa fréquence cardiaque, sa fréquence respiratoire et sa glycémie pour y répondre, notamment à l'effort.",
  objectifs: [
    "Savoir que les besoins d'un organe varient selon son activité (repos, effort)",
    "Mesurer et interpréter la fréquence cardiaque et la fréquence respiratoire",
    "Comprendre le rôle de la glycémie (taux de glucose dans le sang) et sa régulation",
    "Relier l'intensité d'un effort aux réponses physiologiques du corps",
    "Lire et interpréter un graphique représentant l'évolution d'un paramètre physiologique",
  ],
  slides: [
    {
      titre: "Des besoins qui varient",
      illustration: "⚖️",
      visuel: "repos < activité modérée < effort intense",
      contenu: [
        "Un organe au repos consomme peu de glucose et de dioxygène",
        "Le même organe en activité consomme beaucoup plus",
        "Les muscles à l'effort peuvent multiplier leurs besoins par dix",
        "Le corps doit détecter et satisfaire ces besoins variables en permanence",
      ],
      voixOff:
        "Les besoins d'un organe ne sont pas fixes : ils varient selon son activité. Un muscle au repos consomme peu de glucose et de dioxygène. Le même muscle, en plein effort, peut multiplier ses besoins par dix. Le corps doit alors s'adapter en permanence pour satisfaire ces besoins changeants.",
    },
    {
      titre: "Mesurer la fréquence cardiaque",
      illustration: "❤️",
      visuel: "pouls = battements par minute",
      contenu: [
        "La fréquence cardiaque se mesure en battements par minute (bpm)",
        "On la mesure en prenant le pouls, au poignet ou au cou",
        "Au repos, elle est d'environ 70 à 90 bpm chez un adolescent",
        "Elle augmente rapidement dès le début d'un effort physique",
      ],
      voixOff:
        "Pour savoir comment le corps réagit, on peut mesurer sa fréquence cardiaque, c'est-à-dire le nombre de battements du cœur par minute. On la sent en prenant son pouls au poignet ou au cou. Au repos, elle est d'environ 70 à 90 battements par minute chez un adolescent, mais elle grimpe très vite dès qu'un effort commence.",
    },
    {
      titre: "Mesurer la fréquence respiratoire",
      illustration: "🫁",
      visuel: "respirations par minute",
      contenu: [
        "La fréquence respiratoire compte le nombre de respirations par minute",
        "Au repos, elle est d'environ 15 à 20 mouvements par minute chez un adolescent",
        "Elle augmente pendant l'effort pour apporter plus de dioxygène",
        "Elle diminue progressivement après l'arrêt de l'effort (récupération)",
      ],
      voixOff:
        "On peut aussi mesurer la fréquence respiratoire, c'est-à-dire le nombre de respirations par minute. Au repos, elle tourne autour de 15 à 20 mouvements par minute. Pendant un effort, elle augmente fortement pour apporter davantage de dioxygène aux muscles, puis elle redescend peu à peu pendant la récupération.",
    },
    {
      titre: "Pourquoi ces fréquences augmentent-elles ?",
      illustration: "🏃",
      visuel: "muscle actif → besoins ↑ → cœur et poumons ↑",
      contenu: [
        "Un muscle qui travaille consomme davantage de glucose et de dioxygène",
        "Le cœur bat plus vite pour apporter plus de sang, donc plus de nutriments",
        "La respiration s'accélère pour capter plus de dioxygène",
        "Ces réponses sont proportionnelles à l'intensité de l'effort",
      ],
      voixOff:
        "Pourquoi le cœur s'emballe-t-il et la respiration s'accélère-t-elle pendant l'effort ? Parce que les muscles actifs ont besoin de davantage de glucose et de dioxygène. Le cœur bat plus vite pour livrer plus de sang, et les poumons travaillent plus pour capter davantage de dioxygène. Plus l'effort est intense, plus ces réponses sont importantes.",
    },
    {
      titre: "La glycémie, un indicateur clé",
      illustration: "🩸",
      visuel: "glycémie = taux de glucose dans le sang",
      contenu: [
        "La glycémie mesure la quantité de glucose présente dans le sang",
        "Elle est normalement stable, autour de 1 g par litre de sang",
        "Elle augmente après un repas riche en sucres",
        "Elle peut diminuer pendant un effort prolongé si les réserves s'épuisent",
      ],
      voixOff:
        "Un autre indicateur important est la glycémie : c'est la quantité de glucose présente dans le sang. Elle reste normalement stable, autour d'un gramme par litre de sang. Elle augmente un peu après un repas sucré, et peut diminuer lors d'un effort très long si les réserves de l'organisme s'épuisent.",
    },
    {
      titre: "Lire un graphique de fréquence cardiaque",
      illustration: "📈",
      visuel: "courbe : repos → effort → récupération",
      contenu: [
        "Un graphique montre souvent trois phases : repos, effort, récupération",
        "Pendant le repos, la courbe est stable et basse",
        "Pendant l'effort, la courbe monte, d'autant plus vite que l'effort est intense",
        "Pendant la récupération, la courbe redescend progressivement vers sa valeur de repos",
      ],
      voixOff:
        "Sur un graphique représentant la fréquence cardiaque au cours du temps, on distingue en général trois phases. Au repos, la courbe reste stable et basse. Pendant l'effort, elle grimpe, d'autant plus rapidement que l'effort est intense. Après l'effort, pendant la récupération, elle redescend progressivement vers sa valeur initiale.",
    },
    {
      titre: "L'entraînement modifie les besoins",
      illustration: "🏋️",
      visuel: "sportif entraîné : récupération plus rapide",
      contenu: [
        "Un muscle entraîné utilise plus efficacement le glucose et le dioxygène",
        "Chez une personne entraînée, la fréquence cardiaque de repos peut être plus basse",
        "Après un effort, sa fréquence cardiaque redescend plus vite",
        "L'entraînement régulier améliore les capacités du cœur et des poumons",
      ],
      voixOff:
        "L'entraînement physique modifie les besoins des organes. Chez une personne bien entraînée, le cœur est plus efficace : la fréquence cardiaque de repos peut être plus basse, et elle redescend plus rapidement après l'effort. C'est un signe que le cœur et les poumons se sont adaptés à mieux répondre aux besoins des muscles.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Les besoins des organes en glucose et en O₂ augmentent avec leur activité",
        "La fréquence cardiaque et la fréquence respiratoire augmentent à l'effort",
        "La glycémie, le taux de glucose sanguin, reste normalement stable",
        "Un corps entraîné répond plus efficacement aux besoins accrus",
      ],
      voixOff:
        "Résumons. Les besoins des organes en glucose et en dioxygène varient : ils augmentent fortement avec l'activité. Pour y répondre, le corps augmente sa fréquence cardiaque et sa fréquence respiratoire pendant l'effort. La glycémie, elle, reste normalement stable grâce à la régulation de l'organisme. Enfin, un corps entraîné s'adapte plus efficacement à ces besoins accrus.",
    },
  ],
  fiche: {
    intro:
      "Les besoins des organes en nutriments et en dioxygène ne sont pas constants : ils augmentent avec l'activité. Le corps répond à ces variations grâce à des ajustements mesurables : fréquence cardiaque, fréquence respiratoire et glycémie.",
    sections: [
      {
        titre: "Des besoins variables selon l'activité",
        points: [
          "Un organe au repos consomme peu de glucose et de dioxygène",
          "Un organe actif (muscle à l'effort) consomme beaucoup plus",
          "Le corps doit adapter son fonctionnement pour répondre à ces besoins",
        ],
      },
      {
        titre: "Fréquence cardiaque et fréquence respiratoire",
        points: [
          "Fréquence cardiaque : nombre de battements du cœur par minute (environ 70-90 bpm au repos chez un ado)",
          "Fréquence respiratoire : nombre de respirations par minute (environ 15-20 au repos)",
          "Ces deux fréquences augmentent avec l'intensité de l'effort, puis redescendent en récupération",
        ],
      },
      {
        titre: "La glycémie",
        points: [
          "La glycémie est le taux de glucose dans le sang (environ 1 g/L)",
          "Elle est normalement maintenue stable par l'organisme",
          "Elle peut varier après un repas ou lors d'un effort prolongé",
        ],
      },
      {
        titre: "L'effet de l'entraînement",
        points: [
          "Un corps entraîné répond plus efficacement aux besoins accrus des organes",
          "Sa fréquence cardiaque de repos peut être plus basse",
          "Il récupère plus vite après un effort",
        ],
      },
    ],
    audio:
      "Fiche de révision : les besoins des organes. Les besoins des organes en glucose et en dioxygène ne sont pas fixes : ils augmentent fortement avec l'activité, par exemple lorsqu'un muscle fournit un effort. Pour y répondre, le corps ajuste sa fréquence cardiaque, le nombre de battements du cœur par minute, et sa fréquence respiratoire, le nombre de respirations par minute : ces deux valeurs augmentent pendant l'effort puis redescendent progressivement pendant la récupération. La glycémie, c'est-à-dire le taux de glucose dans le sang, est un autre indicateur important : elle reste normalement stable, autour d'un gramme par litre, grâce à la régulation de l'organisme, même si elle peut varier après un repas ou lors d'un effort prolongé. Enfin, un corps entraîné régulièrement s'adapte plus efficacement à ces besoins : sa fréquence cardiaque de repos peut être plus basse et elle redescend plus vite après l'effort.",
  },
  memoCards: [
    { recto: "Comment varient les besoins d'un organe ?", verso: "Ils augmentent avec son activité : un muscle à l'effort consomme beaucoup plus de glucose et de dioxygène qu'au repos." },
    { recto: "Qu'est-ce que la fréquence cardiaque ?", verso: "Le nombre de battements du cœur par minute (bpm)." },
    { recto: "Fréquence cardiaque de repos chez un adolescent ?", verso: "Environ 70 à 90 battements par minute." },
    { recto: "Qu'est-ce que la fréquence respiratoire ?", verso: "Le nombre de respirations par minute (environ 15 à 20 au repos chez un ado)." },
    { recto: "Pourquoi la fréquence cardiaque augmente-t-elle à l'effort ?", verso: "Pour apporter plus de sang, donc plus de glucose et de dioxygène, aux muscles actifs." },
    { recto: "Qu'est-ce que la glycémie ?", verso: "Le taux de glucose présent dans le sang, normalement stable autour de 1 g/L." },
    { recto: "Que se passe-t-il après l'arrêt d'un effort ?", verso: "C'est la récupération : les fréquences cardiaque et respiratoire redescendent progressivement vers leur valeur de repos." },
    { recto: "Quel est l'effet de l'entraînement sur le cœur ?", verso: "Un cœur entraîné est plus efficace : fréquence de repos plus basse et récupération plus rapide après l'effort." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que mesure la fréquence cardiaque ?",
      choix: [
        "Le nombre de respirations par minute",
        "Le nombre de battements du cœur par minute",
        "Le taux de glucose dans le sang",
        "La taille du cœur",
      ],
      bonneReponse: 1,
      explication: "La fréquence cardiaque correspond au nombre de battements du cœur par minute, exprimé en bpm.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un muscle au repos, comparé à un muscle à l'effort, consomme :",
      choix: ["Autant de glucose et de O₂", "Moins de glucose et de O₂", "Plus de glucose et de O₂", "Aucun glucose"],
      bonneReponse: 1,
      explication: "Au repos, les besoins d'un muscle sont bien plus faibles qu'à l'effort.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment peut-on mesurer sa fréquence cardiaque simplement ?",
      reponse: "En prenant son pouls au poignet ou au cou et en comptant le nombre de battements pendant une minute (ou 15 secondes multiplié par 4).",
      explication: "C'est une mesure simple qui permet de suivre l'activité du cœur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce que la glycémie ?",
      choix: [
        "Le nombre de battements du cœur",
        "Le taux de glucose dans le sang",
        "Le volume d'air dans les poumons",
        "La quantité de dioxyde de carbone rejetée",
      ],
      bonneReponse: 1,
      explication: "La glycémie désigne la quantité de glucose présente dans le sang.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi la fréquence respiratoire augmente pendant un effort physique.",
      reponse: "Pendant l'effort, les muscles consomment davantage de dioxygène ; la respiration s'accélère pour en capter plus et le fournir plus rapidement au sang, qui le transporte jusqu'aux muscles.",
      explication: "L'augmentation de la fréquence respiratoire répond à l'augmentation des besoins en O₂ des muscles actifs.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Sur un graphique de fréquence cardiaque au cours d'une séance de sport, décris l'allure générale de la courbe.",
      reponse: "La courbe est stable et basse au repos, puis elle augmente pendant l'effort, d'autant plus fortement que l'effort est intense, avant de redescendre progressivement pendant la phase de récupération.",
      explication: "Ce sont les trois phases classiques observées lors d'un effort physique : repos, effort, récupération.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pendant un effort physique intense, la fréquence cardiaque et la fréquence respiratoire :",
      choix: [
        "Diminuent toutes les deux",
        "Restent stables",
        "Augmentent toutes les deux",
        "Une augmente, l'autre diminue",
      ],
      bonneReponse: 2,
      explication: "Les deux fréquences augmentent ensemble pour répondre aux besoins accrus des muscles en activité.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi la glycémie reste-t-elle normalement stable, même entre les repas ?",
      reponse: "L'organisme régule la glycémie : il peut puiser dans ses réserves de glucose (notamment stockées dans le foie) pour maintenir un taux stable dans le sang, même sans apport alimentaire immédiat.",
      explication: "Cette régulation permet d'assurer un apport constant de glucose aux organes entre les repas.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un sportif bien entraîné, comparé à une personne non entraînée, a en général :",
      choix: [
        "Une fréquence cardiaque de repos plus élevée",
        "Une fréquence cardiaque de repos plus basse et une récupération plus rapide",
        "Aucune différence mesurable",
        "Une glycémie de repos beaucoup plus élevée",
      ],
      bonneReponse: 1,
      explication: "L'entraînement rend le cœur plus efficace : moins de battements sont nécessaires au repos, et la récupération après l'effort est plus rapide.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Deux élèves font le même effort physique. L'un voit sa fréquence cardiaque revenir à la normale en 2 minutes après l'effort, l'autre en 8 minutes. Que peut-on en déduire ?",
      reponse: "L'élève dont la fréquence cardiaque redescend en 2 minutes est probablement mieux entraîné : son cœur et ses poumons répondent plus efficacement aux besoins de l'effort et récupèrent plus vite. Une récupération plus lente peut indiquer une condition physique moins entraînée.",
      explication: "Le temps de récupération de la fréquence cardiaque est un bon indicateur du niveau d'entraînement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique le lien entre l'intensité d'un effort et l'ampleur de l'augmentation de la fréquence cardiaque.",
      reponse: "Plus un effort est intense, plus les muscles sollicités consomment de glucose et de dioxygène, donc plus les besoins à satisfaire sont importants. Le cœur doit alors battre plus vite pour apporter davantage de sang aux muscles : l'augmentation de la fréquence cardiaque est proportionnelle à l'intensité de l'effort.",
      explication: "Les réponses physiologiques du corps sont adaptées à l'ampleur des besoins des organes actifs.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Lors d'un effort très prolongé (par exemple un marathon), la glycémie peut diminuer fortement, provoquant une sensation de fatigue intense (« coup de barre »). Explique ce phénomène.",
      reponse: "Pendant un effort très long, les muscles consomment beaucoup de glucose et les réserves de l'organisme finissent par s'épuiser plus vite qu'elles ne sont reconstituées ; la glycémie chute alors, ce qui prive le corps du glucose nécessaire à son fonctionnement, d'où la fatigue intense ressentie.",
      explication: "C'est pourquoi les sportifs d'endurance consomment des aliments sucrés pendant l'effort pour maintenir leur glycémie.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Les besoins d'un organe augmentent :",
      choix: ["Au repos", "Quand il est plus actif", "Jamais", "Uniquement la nuit"],
      bonneReponse: 1,
      explication: "Plus un organe travaille, plus ses besoins en glucose et en dioxygène augmentent.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que la fréquence respiratoire ?",
      reponse: "Le nombre de respirations (mouvements respiratoires) par minute.",
      explication: "Elle augmente pendant l'effort pour capter plus de dioxygène.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que se passe-t-il pour la fréquence cardiaque pendant la phase de récupération après un effort ?",
      reponse: "Elle redescend progressivement vers sa valeur de repos.",
      explication: "La vitesse de cette redescente dépend notamment du niveau d'entraînement.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La glycémie désigne :",
      choix: [
        "Le rythme cardiaque",
        "Le taux de glucose dans le sang",
        "Le volume des poumons",
        "La quantité de dioxyde de carbone rejetée",
      ],
      bonneReponse: 1,
      explication: "La glycémie est la quantité de glucose présente dans le sang, normalement stable.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi un sportif entraîné récupère-t-il souvent plus vite après un effort qu'une personne non entraînée ?",
      reponse: "Parce que l'entraînement rend le cœur et les poumons plus efficaces pour répondre aux besoins des muscles, ce qui permet un retour plus rapide à la fréquence cardiaque de repos.",
      explication: "C'est un effet mesurable et bien connu de l'entraînement physique régulier.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les besoins des organes",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quand les besoins d'un muscle en glucose et en dioxygène sont-ils les plus élevés ?",
          choix: ["Pendant le sommeil", "Au repos assis", "Pendant un effort physique", "Jamais"],
          bonneReponse: 2,
          explication: "Un muscle actif, en plein effort, a des besoins nettement plus élevés qu'au repos.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la définition de la fréquence cardiaque et de la fréquence respiratoire.",
          reponse: "La fréquence cardiaque est le nombre de battements du cœur par minute ; la fréquence respiratoire est le nombre de respirations par minute.",
          explication: "Ce sont deux paramètres physiologiques mesurables qui augmentent avec l'activité physique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi la fréquence cardiaque augmente lorsqu'un organe travaille davantage.",
          reponse: "Un organe qui travaille plus consomme davantage de glucose et de dioxygène ; le cœur doit battre plus vite pour apporter plus de sang, donc plus de nutriments et de dioxygène, à cet organe.",
          explication: "L'augmentation de la fréquence cardiaque permet d'augmenter le débit sanguin vers les organes actifs.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Après un effort physique, pendant la récupération, la fréquence cardiaque :",
          choix: [
            "Continue d'augmenter",
            "Reste à son maximum indéfiniment",
            "Redescend progressivement vers sa valeur de repos",
            "Chute instantanément à zéro",
          ],
          bonneReponse: 2,
          explication: "La récupération correspond à un retour progressif vers les valeurs de repos.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un graphique montre la fréquence cardiaque de deux élèves pendant et après un effort identique. L'élève A atteint 160 bpm et revient à 80 bpm en 3 minutes ; l'élève B atteint 180 bpm et revient à 80 bpm en 9 minutes. Compare leur condition physique.",
          reponse: "L'élève A semble mieux entraîné : sa fréquence cardiaque maximale à l'effort est plus basse et sa récupération est plus rapide, ce qui indique un cœur plus efficace. L'élève B, qui atteint une fréquence plus élevée et récupère plus lentement, est probablement moins entraîné.",
          explication: "La fréquence cardiaque maximale atteinte et la vitesse de récupération sont deux indicateurs du niveau d'entraînement.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi les besoins des organes ne sont pas les mêmes pour tous les organes en même temps.",
          reponse: "Chaque organe a un niveau d'activité qui lui est propre à un instant donné : par exemple, pendant un effort, les muscles sollicités ont des besoins très élevés, tandis que le système digestif, peu actif à ce moment, a des besoins plus faibles. Les besoins dépendent donc de l'activité de chaque organe.",
          explication: "Le corps ajuste la répartition du sang en fonction des besoins variables de chaque organe selon son activité.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les besoins des organes",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est l'ordre de grandeur de la fréquence cardiaque de repos chez un adolescent ?",
          choix: ["10 à 20 bpm", "70 à 90 bpm", "200 à 250 bpm", "1 à 5 bpm"],
          bonneReponse: 1,
          explication: "La fréquence cardiaque de repos chez un adolescent est en général comprise entre 70 et 90 battements par minute.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Que signifie une glycémie « stable » ?",
          reponse: "Que le taux de glucose dans le sang reste régulé autour d'une valeur constante (environ 1 g/L), malgré les repas ou les périodes de jeûne.",
          explication: "La régulation de la glycémie permet d'assurer un apport constant de glucose aux organes.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un élève au repos a une fréquence respiratoire de 18 mouvements par minute. Pendant un effort, elle passe à 35. Explique cette variation.",
          reponse: "Pendant l'effort, les muscles ont besoin de plus de dioxygène ; la fréquence respiratoire augmente pour capter davantage d'O₂ et répondre à ce besoin accru.",
          explication: "L'augmentation de la fréquence respiratoire est directement liée à l'augmentation des besoins en dioxygène des organes actifs.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un cœur bien entraîné se caractérise en général par :",
          choix: [
            "Une fréquence de repos élevée",
            "Une fréquence de repos plus basse et une récupération rapide",
            "Une incapacité à augmenter sa fréquence à l'effort",
            "Une glycémie toujours très élevée",
          ],
          bonneReponse: 1,
          explication: "L'entraînement rend le cœur plus efficace : moins de battements suffisent au repos, et la récupération est plus rapide.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi, en cas d'effort intense et prolongé sans alimentation adaptée, un sportif peut ressentir un malaise lié à une chute de sa glycémie.",
          reponse: "Un effort intense et prolongé consomme beaucoup de glucose. Si les apports et les réserves ne suffisent plus à compenser cette consommation, la glycémie chute en dessous de sa valeur normale, ce qui prive le cerveau et les muscles de glucose et peut provoquer un malaise (fatigue soudaine, vertiges).",
          explication: "Le cerveau est particulièrement sensible à une baisse de la glycémie, car il dépend fortement du glucose pour fonctionner.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Propose un protocole simple pour comparer les besoins des organes au repos et à l'effort, en utilisant la fréquence cardiaque.",
          reponse: "Mesurer la fréquence cardiaque au repos assis pendant une minute, puis faire un effort standardisé (par exemple 3 minutes de course sur place), et mesurer à nouveau la fréquence cardiaque immédiatement après l'effort, puis toutes les minutes pendant la récupération jusqu'au retour à la valeur de repos. Comparer les valeurs obtenues.",
          explication: "Ce protocole permet d'observer concrètement l'augmentation des besoins à l'effort et la vitesse de récupération.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Les besoins des organes en glucose et en dioxygène augmentent avec leur activité (ex. muscle à l'effort).",
    "La fréquence cardiaque (battements/min) et la fréquence respiratoire (respirations/min) augmentent à l'effort.",
    "Après l'effort, ces fréquences redescendent progressivement pendant la récupération.",
    "La glycémie (taux de glucose dans le sang) est normalement régulée et reste stable autour de 1 g/L.",
    "Un effort très prolongé sans apport suffisant peut faire chuter la glycémie et provoquer une fatigue intense.",
    "Un corps entraîné répond plus efficacement aux besoins accrus : fréquence de repos plus basse, récupération plus rapide.",
  ],
};

export default chapitre;
