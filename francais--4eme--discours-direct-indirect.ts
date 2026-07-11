import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "discours-direct-indirect",
  titre: "Discours direct et indirect",
  matiere: "francais",
  niveau: "4eme",
  description:
    "Apprendre à rapporter les paroles d'un personnage : le discours direct, avec ses marques typographiques, et le discours indirect, qui exige des transformations de pronoms, de temps et d'indicateurs. Découvrir aussi le discours indirect libre.",
  objectifs: [
    "Reconnaître les marques du discours direct : guillemets, tirets, verbes de parole",
    "Transformer un discours direct en discours indirect (pronoms, temps, indicateurs)",
    "Maîtriser la concordance des temps dans le discours indirect",
    "Repérer le discours indirect libre et son effet",
    "Rédiger un dialogue ou un discours rapporté correctement ponctué",
  ],
  slides: [
    {
      titre: "Rapporter les paroles de quelqu'un",
      illustration: "💬",
      visuel: "Discours direct ≠ Discours indirect",
      contenu: [
        "On peut rapporter les paroles de quelqu'un de deux manières principales",
        "Discours direct : on cite les paroles exactement, telles qu'elles ont été dites",
        "Discours indirect : on rapporte le contenu des paroles sans les citer mot à mot",
        "Le choix dépend de l'effet recherché : vivacité ou fluidité du récit",
      ],
      voixOff:
        "Quand on veut rapporter les paroles de quelqu'un, on dispose de deux grandes possibilités. Le discours direct cite les paroles exactement telles qu'elles ont été prononcées. Le discours indirect rapporte le contenu de ces paroles, mais sans les citer mot à mot, en les intégrant dans une phrase complexe. Le choix entre les deux dépend de l'effet recherché : la vivacité du dialogue ou la fluidité du récit.",
    },
    {
      titre: "Les marques du discours direct",
      illustration: "❝",
      visuel: "« ... » — verbe de parole",
      contenu: [
        "Les paroles sont encadrées par des guillemets « »",
        "Un tiret marque le changement de locuteur dans un dialogue",
        "Un verbe de parole introduit ou accompagne les paroles : dire, demander, répondre, s'écrier",
        "Ponctuation expressive conservée : points d'exclamation, d'interrogation",
      ],
      voixOff:
        "Le discours direct se reconnaît à plusieurs marques typographiques. Les paroles sont encadrées par des guillemets. Dans un dialogue, un tiret signale le changement de locuteur. Un verbe de parole, comme dire, demander, répondre ou s'écrier, introduit ou accompagne les paroles. La ponctuation expressive du personnage, points d'exclamation ou d'interrogation, est conservée telle quelle.",
    },
    {
      titre: "Exemple de discours direct",
      illustration: "🗨️",
      visuel: "Marie dit : « Je pars demain. »",
      contenu: [
        "« Marie dit : “Je pars demain.” »",
        "On reconnaît le verbe de parole (dit), les deux points, les guillemets",
        "Les paroles gardent leurs pronoms et leur temps d'origine (« je », présent)",
        "Effet : vivacité, présence directe du personnage",
      ],
      voixOff:
        "Prenons un exemple : Marie dit, je pars demain. On reconnaît le verbe de parole, dit, les deux points, et les guillemets qui encadrent les paroles exactes. Les pronoms et les temps restent ceux du personnage qui parle, ici le je et le présent. Cet effet donne de la vivacité au récit et rend la présence du personnage plus directe.",
    },
    {
      titre: "Passer au discours indirect",
      illustration: "🔄",
      visuel: "« Je pars demain » → qu'elle partait le lendemain",
      contenu: [
        "Les paroles deviennent une proposition subordonnée introduite par « que » (ou « si », « ce que »...)",
        "Plus de guillemets, plus de ponctuation expressive du personnage",
        "Le verbe de parole reste, mais suivi directement de la subordonnée",
        "Exemple : « Marie dit qu'elle partait le lendemain. »",
      ],
      voixOff:
        "Pour passer au discours indirect, les paroles rapportées deviennent une proposition subordonnée, le plus souvent introduite par que. Il n'y a plus de guillemets ni de ponctuation expressive propre au personnage. Le verbe de parole reste présent, mais il est directement suivi de la subordonnée. Notre exemple devient : Marie dit qu'elle partait le lendemain.",
    },
    {
      titre: "Les changements de pronoms et de possessifs",
      illustration: "🔁",
      visuel: "je → il/elle ; mon → son",
      contenu: [
        "Les pronoms personnels changent selon qui rapporte les paroles",
        "« je » devient « il » ou « elle » (si le locuteur n'est pas celui qui rapporte)",
        "Les déterminants possessifs changent aussi : « mon » devient « son »",
        "Exemple : « Je vais chez mon frère » → « Il a dit qu'il allait chez son frère »",
      ],
      voixOff:
        "Au discours indirect, les pronoms personnels changent selon la personne qui rapporte les paroles : le je devient il ou elle. Les déterminants possessifs changent également : mon devient son. Ainsi, je vais chez mon frère devient il a dit qu'il allait chez son frère.",
    },
    {
      titre: "La concordance des temps",
      illustration: "⏳",
      visuel: "présent → imparfait / futur → conditionnel",
      contenu: [
        "Si le verbe introducteur est au passé, les temps de la subordonnée changent",
        "Présent → imparfait : « je pars » → « qu'il partait »",
        "Futur → conditionnel présent : « je partirai » → « qu'il partirait »",
        "Passé composé → plus-que-parfait : « j'ai fini » → « qu'il avait fini »",
      ],
      voixOff:
        "Lorsque le verbe introducteur est au passé, on applique la concordance des temps dans la subordonnée. Le présent devient un imparfait : je pars devient qu'il partait. Le futur devient un conditionnel présent : je partirai devient qu'il partirait. Le passé composé devient un plus-que-parfait : j'ai fini devient qu'il avait fini.",
    },
    {
      titre: "Les indicateurs de temps et de lieu qui changent",
      illustration: "🗓️",
      visuel: "aujourd'hui → ce jour-là ; ici → là",
      contenu: [
        "« aujourd'hui » → « ce jour-là » ; « hier » → « la veille » ; « demain » → « le lendemain »",
        "« ici » → « là » ; « ce matin » → « ce matin-là »",
        "Ces changements s'expliquent par le changement de moment et de lieu de l'énonciation",
        "Les questions changent aussi de forme : « Est-ce que...? » → « si... »",
      ],
      voixOff:
        "Certains indicateurs de temps et de lieu doivent aussi changer, car le moment et le lieu de l'énonciation ne sont plus les mêmes. Aujourd'hui devient ce jour-là, hier devient la veille, demain devient le lendemain, ici devient là. Les questions changent également de forme : est-ce que devient si dans le discours indirect.",
    },
    {
      titre: "Le discours indirect libre",
      illustration: "🌀",
      visuel: "Ni guillemets, ni « que » : les pensées se glissent dans le récit",
      contenu: [
        "Mélange les deux discours : pas de guillemets, pas de « que », mais les temps et pronoms du récit",
        "Les paroles ou pensées d'un personnage se glissent directement dans la narration",
        "Effet : on entend la voix du personnage sans rupture avec le récit",
        "Procédé fréquent chez Flaubert (Madame Bovary)",
      ],
      voixOff:
        "Le discours indirect libre est un procédé plus subtil : il mélange les deux discours. Il n'y a ni guillemets, ni conjonction que, mais on garde les temps et les pronoms du récit. Les paroles ou les pensées d'un personnage se glissent alors directement dans la narration, sans rupture apparente. On entend sa voix intérieure sans que le narrateur l'annonce clairement. Ce procédé est fréquent chez Flaubert, notamment dans Madame Bovary.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Discours direct : guillemets, verbe de parole, ponctuation expressive conservée",
        "Discours indirect : subordonnée introduite par « que », pas de guillemets",
        "Changements : pronoms, possessifs, temps (concordance), indicateurs de temps/lieu",
        "Discours indirect libre : les pensées se glissent dans le récit, sans guillemets ni « que »",
      ],
      voixOff:
        "Pour résumer, le discours direct cite les paroles exactes entre guillemets, avec un verbe de parole et la ponctuation expressive du personnage. Le discours indirect les intègre dans une subordonnée introduite par que, ce qui entraîne des changements de pronoms, de possessifs, de temps et d'indicateurs de temps ou de lieu. Le discours indirect libre, enfin, glisse les pensées d'un personnage dans le récit sans guillemets ni que apparent.",
    },
  ],
  fiche: {
    intro:
      "Pour rapporter les paroles d'un personnage, on peut utiliser le discours direct, qui cite les paroles exactes, ou le discours indirect, qui les intègre dans une subordonnée et impose plusieurs transformations. Le discours indirect libre mélange les deux procédés.",
    sections: [
      {
        titre: "Le discours direct",
        points: [
          "Paroles citées exactement, encadrées par des guillemets « »",
          "Verbe de parole (dire, demander, répondre, s'écrier...) et deux points",
          "Tiret pour marquer le changement de locuteur dans un dialogue",
          "Ponctuation expressive du personnage conservée (!, ?, ...)",
        ],
      },
      {
        titre: "Le discours indirect",
        points: [
          "Paroles intégrées dans une subordonnée introduite par « que » (ou « si », mots interrogatifs)",
          "Plus de guillemets ni de ponctuation expressive propre au personnage",
          "Changements de pronoms personnels et possessifs (je → il/elle ; mon → son)",
        ],
      },
      {
        titre: "La concordance des temps et les indicateurs",
        points: [
          "Si le verbe introducteur est au passé : présent → imparfait ; futur → conditionnel présent ; passé composé → plus-que-parfait",
          "aujourd'hui → ce jour-là ; hier → la veille ; demain → le lendemain ; ici → là",
        ],
      },
      {
        titre: "Le discours indirect libre",
        points: [
          "Mélange les deux discours : pas de guillemets, pas de « que », mais temps et pronoms du récit",
          "Fait entendre la voix ou les pensées du personnage sans rupture avec la narration",
          "Procédé fréquent chez Flaubert (Madame Bovary)",
        ],
      },
    ],
    audio:
      "Fiche de révision : discours direct et indirect. Le discours direct cite exactement les paroles d'un personnage, encadrées par des guillemets, avec un verbe de parole. Le discours indirect intègre ces paroles dans une proposition subordonnée introduite par que, sans guillemets. Ce passage entraîne plusieurs changements : les pronoms personnels, comme je qui devient il ou elle, les déterminants possessifs, comme mon qui devient son, et, si le verbe introducteur est au passé, la concordance des temps : le présent devient un imparfait, le futur devient un conditionnel présent. Les indicateurs de temps et de lieu changent aussi : aujourd'hui devient ce jour-là, hier devient la veille, demain devient le lendemain. Enfin, le discours indirect libre mélange les deux discours : il fait entendre la voix d'un personnage directement dans le récit, sans guillemets ni que, comme chez Flaubert.",
  },
  memoCards: [
    {
      recto: "Quelles sont les marques typographiques du discours direct ?",
      verso: "Les guillemets « », le verbe de parole suivi de deux points, et le tiret pour le changement de locuteur dans un dialogue.",
    },
    {
      recto: "Comment introduit-on un discours indirect ?",
      verso: "Par une subordonnée, le plus souvent introduite par « que » (ou « si » pour une question).",
    },
    {
      recto: "Que devient « je » au discours indirect (si le locuteur change) ?",
      verso: "« je » devient « il » ou « elle ».",
    },
    {
      recto: "Que devient un possessif comme « mon » au discours indirect ?",
      verso: "« mon » devient « son ».",
    },
    {
      recto: "Concordance des temps : que devient le présent si le verbe introducteur est au passé ?",
      verso: "Le présent devient un imparfait (« je pars » → « qu'il partait »).",
    },
    {
      recto: "Concordance des temps : que devient le futur si le verbe introducteur est au passé ?",
      verso: "Le futur devient un conditionnel présent (« je partirai » → « qu'il partirait »).",
    },
    {
      recto: "Que deviennent « aujourd'hui », « hier », « demain » au discours indirect (au passé) ?",
      verso: "« aujourd'hui » → « ce jour-là » ; « hier » → « la veille » ; « demain » → « le lendemain ».",
    },
    {
      recto: "Qu'est-ce que le discours indirect libre ?",
      verso: "Un procédé qui glisse les pensées d'un personnage dans le récit, sans guillemets ni « que », en gardant les temps et pronoms du récit.",
    },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle ponctuation encadre les paroles au discours direct ?",
      choix: ["Des parenthèses", "Des guillemets", "Des crochets", "Aucune ponctuation particulière"],
      bonneReponse: 1,
      explication: "Les guillemets « » signalent que les paroles sont citées exactement.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Il dit qu'il viendra demain. » Ce discours est :",
      choix: ["direct", "indirect", "indirect libre", "aucun des trois"],
      bonneReponse: 1,
      explication: "Les paroles sont intégrées dans une subordonnée introduite par « que », sans guillemets : c'est du discours indirect.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite deux verbes de parole.",
      reponse: "Par exemple : dire et demander (ou répondre, s'écrier, affirmer, murmurer).",
      explication: "Les verbes de parole introduisent ou accompagnent les paroles rapportées.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Au discours indirect, le pronom « je » devient généralement :",
      choix: ["« nous »", "« il » ou « elle »", "« vous »", "il ne change jamais"],
      bonneReponse: 1,
      explication: "Le changement de locuteur (celui qui rapporte n'est pas celui qui parlait) impose le passage à la troisième personne.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Transforme au discours indirect : « Paul a dit : “Je suis fatigué.” » Quelle phrase est correcte ?",
      choix: [
        "Paul a dit qu'il est fatigué.",
        "Paul a dit qu'il était fatigué.",
        "Paul a dit : je suis fatigué.",
        "Paul a dit qu'il sera fatigué."
      ],
      bonneReponse: 1,
      explication: "Le verbe introducteur « a dit » est au passé : le présent « suis » devient un imparfait « était », selon la concordance des temps.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Transforme au discours indirect : « Léa dit : “Je pars en vacances demain.” »",
      reponse: "Léa dit qu'elle part en vacances le lendemain. (si le verbe introducteur reste au présent, seul l'indicateur de temps change ; si l'on met « a dit », on écrit : « Léa a dit qu'elle partait en vacances le lendemain. »)",
      explication: "On adapte le pronom (je → elle) et l'indicateur temporel (demain → le lendemain) ; les temps changent seulement si le verbe introducteur est au passé.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réécris cette phrase au discours direct : « Le professeur a demandé si les élèves avaient compris la leçon. »",
      reponse: "Le professeur a demandé : « Avez-vous compris la leçon ? »",
      explication: "On rétablit les guillemets, la forme interrogative directe et le pronom d'origine (« vous »).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« Est-ce que tu viens ? » devient au discours indirect :",
      choix: [
        "« Il demande que tu viens. »",
        "« Il demande si tu viens. »",
        "« Il demande est-ce que tu viens. »",
        "« Il demande tu viens. »"
      ],
      bonneReponse: 1,
      explication: "Une question totale (oui/non) introduite par « est-ce que » se transforme au discours indirect avec « si ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la phrase « Marie a dit qu'elle viendra demain » contient une erreur, et corrige-la.",
      reponse: "Le verbe introducteur « a dit » est au passé : le futur « viendra » doit devenir un conditionnel présent selon la règle de concordance des temps. Il faut écrire : « Marie a dit qu'elle viendrait le lendemain » (avec aussi le changement de « demain » en « le lendemain »).",
      explication: "La concordance des temps est une règle stricte quand le verbe introducteur est au passé.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Identifie le procédé dans cet extrait inventé et justifie ta réponse : « Elle regarda la lettre. Allait-elle vraiment devoir partir si loin, abandonner sa famille, tout recommencer ? »",
      reponse: "C'est du discours indirect libre : les pensées du personnage (« Allait-elle vraiment devoir partir... ») se glissent dans le récit sans guillemets ni « que », mais avec les temps et pronoms de la narration (imparfait, « elle »).",
      explication: "L'absence de guillemets et de subordonnée introduite par « que », combinée à la présence de pensées personnelles au style interrogatif, signale le discours indirect libre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Transforme entièrement ce dialogue au discours indirect (au passé) : « Tom demanda : “Où vas-tu ce soir ?” Léa répondit : “Je vais au cinéma avec mes amis.” »",
      reponse: "Tom demanda à Léa où elle allait ce soir-là. Léa répondit qu'elle allait au cinéma avec ses amis.",
      explication: "On observe les changements de pronoms (tu → elle, je → elle), de possessifs (mes → ses) et, pour la question, la disparition des marques interrogatives directes au profit d'une subordonnée introduite par « où ».",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quel auteur est particulièrement connu pour l'usage du discours indirect libre ?",
      choix: ["Molière", "Gustave Flaubert", "Jean de La Fontaine", "Victor Hugo"],
      bonneReponse: 1,
      explication: "Flaubert utilise fréquemment le discours indirect libre dans Madame Bovary pour faire entendre les pensées d'Emma sans rupture avec le récit.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le discours direct se reconnaît notamment grâce à :",
      choix: ["l'absence de ponctuation", "des guillemets", "l'absence de verbe", "un narrateur absent"],
      bonneReponse: 1,
      explication: "Les guillemets sont la marque typographique la plus visible du discours direct.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Par quelle conjonction introduit-on le plus souvent une subordonnée de discours indirect ?",
      reponse: "Par « que ».",
      explication: "Exemple : « Il a dit qu'il partait. »",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux changements que subit une phrase quand on passe du discours direct au discours indirect (au passé).",
      reponse: "Par exemple : le changement des pronoms personnels (je → il/elle) et le changement des temps verbaux (présent → imparfait), ou encore le changement des indicateurs de temps (demain → le lendemain).",
      explication: "Ces transformations sont nécessaires pour que la phrase reste cohérente une fois les paroles rapportées.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le discours indirect libre se caractérise par :",
      choix: [
        "des guillemets et un verbe de parole",
        "une subordonnée introduite par « que »",
        "l'absence de guillemets et de « que », mais les temps et pronoms du récit",
        "l'usage exclusif du présent"
      ],
      bonneReponse: 2,
      explication: "C'est un mélange subtil entre les deux discours, sans marque typographique ni syntaxique explicite.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi utilise-t-on parfois le discours indirect libre plutôt que le discours direct ou indirect classique ?",
      reponse: "Pour faire entendre directement la voix ou les pensées d'un personnage tout en gardant la fluidité du récit, sans rupture marquée par des guillemets ou une subordonnée : cela crée un effet d'intimité avec les pensées du personnage.",
      explication: "C'est un procédé narratif très utilisé dans le roman réaliste, notamment chez Flaubert.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Discours direct et indirect",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans un dialogue, le changement de locuteur est souvent marqué par :",
          choix: ["un point d'exclamation", "un tiret", "une majuscule", "un point-virgule"],
          bonneReponse: 1,
          explication: "Le tiret de dialogue indique qu'un nouveau personnage prend la parole.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Transforme au discours direct : il faut imaginer les paroles exactes de Julie qui, au discours indirect, dit qu'elle est contente.",
          reponse: "Julie dit : « Je suis contente. »",
          explication: "On rétablit la première personne, le présent et les guillemets.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Léo a dit qu'il avait fini ses devoirs. » Au discours direct, cela donnerait :",
          choix: [
            "Léo a dit : « J'ai fini mes devoirs. »",
            "Léo a dit : « J'avais fini mes devoirs. »",
            "Léo a dit : « Il a fini ses devoirs. »",
            "Léo a dit : « Je finis mes devoirs. »"
          ],
          bonneReponse: 0,
          explication: "Le plus-que-parfait du discours indirect correspond à un passé composé au discours direct : « j'ai fini ».",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme cette phrase au discours indirect, sachant que le verbe introducteur est au passé : « Le maire a annoncé : “Les travaux commenceront la semaine prochaine.” »",
          reponse: "Le maire a annoncé que les travaux commenceraient la semaine suivante.",
          explication: "Futur → conditionnel présent (concordance des temps) ; « la semaine prochaine » devient « la semaine suivante » (changement d'indicateur temporel).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre le discours indirect et le discours indirect libre.",
          reponse: "Le discours indirect intègre les paroles dans une subordonnée introduite par « que » (ou un autre mot subordonnant), avec un verbe introducteur explicite. Le discours indirect libre supprime à la fois les guillemets et la subordonnée : les paroles ou pensées du personnage se glissent directement dans le récit, sans marque syntaxique visible, tout en gardant les temps et pronoms du récit.",
          explication: "Le discours indirect libre est plus discret et crée un effet de proximité avec les pensées du personnage.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court échange (3-4 répliques) au discours direct, correctement ponctué, entre deux amis qui discutent d'un film qu'ils viennent de voir.",
          reponse: "Exemple de corrigé : « — Alors, ce film t'a plu ? demanda Sarah. — Franchement, oui ! répondit Nabil. Les effets spéciaux étaient impressionnants. — Moi, j'ai trouvé la fin un peu trop rapide, ajouta Sarah. »",
          explication: "On vérifie la présence de tirets, de verbes de parole variés et d'une ponctuation expressive cohérente.",
        },
      ],
    },
    {
      titre: "Examen 2 — Discours direct et indirect",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Elle demanda pourquoi il était en retard. » Ce discours est :",
          choix: ["direct", "indirect", "indirect libre", "aucun des trois"],
          bonneReponse: 1,
          explication: "La question est intégrée dans une subordonnée (« pourquoi il était en retard »), sans guillemets : c'est du discours indirect.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Que devient l'indicateur « hier » au discours indirect, si le verbe introducteur est au passé ?",
          reponse: "« hier » devient « la veille ».",
          explication: "Ce changement s'explique car le repère temporel n'est plus le moment de la parole d'origine.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "« Elle sourit. Elle allait enfin revoir sa famille après tant d'années ! » Ce passage relève :",
          choix: ["du discours direct", "du discours indirect classique", "du discours indirect libre", "d'aucun discours rapporté"],
          bonneReponse: 2,
          explication: "La pensée du personnage se glisse dans le récit sans guillemets ni « que », avec les temps du récit (imparfait) : c'est du discours indirect libre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Transforme au discours indirect (verbe introducteur au passé) : « Il a crié : “Attention, la porte est ouverte !” »",
          reponse: "Il a crié que la porte était ouverte (et qu'il fallait faire attention).",
          explication: "On perd la ponctuation expressive (le point d'exclamation) et on adapte le temps (présent → imparfait).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi le discours direct donne-t-il souvent plus de vivacité à un récit que le discours indirect ?",
          reponse: "Parce qu'il restitue les paroles exactes du personnage, avec sa ponctuation expressive et son propre point de vue, ce qui rend la scène plus vivante et plus proche du lecteur, comme s'il entendait vraiment parler le personnage.",
          explication: "Le discours indirect, en résumant les paroles dans le récit du narrateur, crée davantage de distance.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un camarade a écrit : « Il m'a demandé si est-ce que je venais avec lui. » Explique son erreur et corrige la phrase.",
          reponse: "Erreur : il a mélangé la marque interrogative directe « est-ce que » avec la subordonnée introduite par « si », propre au discours indirect ; on ne doit garder que « si ». Phrase corrigée : « Il m'a demandé si je venais avec lui. »",
          explication: "Au discours indirect, une question totale se transforme uniquement avec « si », sans « est-ce que ».",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Discours direct : paroles citées exactement, entre guillemets, avec verbe de parole et ponctuation expressive.",
    "Discours indirect : paroles intégrées dans une subordonnée (souvent introduite par « que »), sans guillemets.",
    "Changements de pronoms et possessifs : je → il/elle ; mon → son.",
    "Concordance des temps (si verbe introducteur au passé) : présent → imparfait ; futur → conditionnel présent ; passé composé → plus-que-parfait.",
    "Indicateurs qui changent : aujourd'hui → ce jour-là ; hier → la veille ; demain → le lendemain ; ici → là.",
    "Discours indirect libre : pensées du personnage glissées dans le récit, sans guillemets ni « que » (procédé cher à Flaubert).",
  ],
};

export default chapitre;
