import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "nutrition-organismes",
  titre: "La nutrition des organismes",
  matiere: "svt",
  niveau: "5eme",
  description:
    "Comprendre comment les organes reçoivent les nutriments et le dioxygène dont ils ont besoin : digestion, absorption intestinale, transport par le sang, et nutrition des végétaux par la photosynthèse.",
  objectifs: [
    "Savoir que chaque organe a besoin de nutriments (glucose) et de dioxygène pour fonctionner",
    "Comprendre le rôle de la digestion : transformer les aliments en nutriments",
    "Expliquer l'absorption intestinale et le passage des nutriments dans le sang",
    "Décrire le sang et la circulation comme système de distribution de l'organisme",
    "Comprendre que les végétaux fabriquent leur matière grâce à la photosynthèse",
  ],
  slides: [
    {
      titre: "Pourquoi manger et respirer ?",
      illustration: "🍎",
      visuel: "Aliments + O₂ → énergie",
      contenu: [
        "Tous les organes travaillent en permanence (muscles, cerveau, cœur...)",
        "Pour fonctionner, ils ont besoin de nutriments et de dioxygène",
        "Le glucose est le principal nutriment « carburant »",
        "Manger et respirer servent à approvisionner les organes",
      ],
      voixOff:
        "Ton corps travaille sans arrêt : ton cœur bat, tes muscles bougent, ton cerveau réfléchit. Pour fonctionner, chaque organe a besoin de deux choses : des nutriments, surtout du glucose, et du dioxygène. C'est pour cela que nous mangeons et que nous respirons en permanence.",
    },
    {
      titre: "Les besoins des organes",
      illustration: "💪",
      visuel: "glucose + dioxygène → fonctionnement",
      contenu: [
        "Le glucose apporte l'énergie aux cellules des organes",
        "Le dioxygène (O₂) permet de libérer cette énergie",
        "Un organe qui travaille plus consomme plus (ex. muscle à l'effort)",
        "Les besoins augmentent pendant l'effort physique",
      ],
      voixOff:
        "Chaque organe a besoin de glucose, qui apporte l'énergie, et de dioxygène, qui permet de libérer cette énergie. Plus un organe travaille, plus il consomme. Quand tu cours, tes muscles réclament davantage de glucose et de dioxygène : c'est pour cela que tu respires plus vite et que ton cœur bat plus fort.",
    },
    {
      titre: "La digestion : transformer les aliments",
      illustration: "🍽️",
      visuel: "aliments → nutriments",
      contenu: [
        "Les aliments sont trop gros pour passer dans le sang",
        "La digestion les transforme en petits nutriments",
        "Elle se fait dans le tube digestif (bouche → intestin)",
        "Action mécanique (mâcher) et chimique (sucs digestifs)",
      ],
      voixOff:
        "Les aliments que tu manges sont bien trop gros pour passer directement dans le sang. La digestion sert à les transformer en tout petits nutriments. Elle a lieu dans le tube digestif, de la bouche jusqu'à l'intestin, grâce aux dents qui broient et aux sucs digestifs qui décomposent les aliments.",
    },
    {
      titre: "Le tube digestif",
      illustration: "🫀",
      visuel: "bouche → estomac → intestin grêle",
      contenu: [
        "Bouche : les dents mâchent, la salive commence la digestion",
        "Estomac : brassage et action des sucs gastriques",
        "Intestin grêle : la digestion se termine, nutriments prêts",
        "Le trajet est long : les aliments avancent progressivement",
      ],
      voixOff:
        "Le tube digestif est un long trajet. Dans la bouche, les dents mâchent et la salive commence le travail. Dans l'estomac, les aliments sont brassés avec les sucs gastriques. Enfin, dans l'intestin grêle, la digestion se termine : les aliments sont devenus des nutriments prêts à être utilisés.",
    },
    {
      titre: "L'absorption intestinale",
      illustration: "🩸",
      visuel: "intestin grêle → sang",
      contenu: [
        "L'absorption se déroule dans l'intestin grêle",
        "Les nutriments traversent la paroi de l'intestin",
        "Ils passent dans le sang des vaisseaux tout autour",
        "La paroi est repliée (villosités) : grande surface d'échange",
      ],
      voixOff:
        "Une fois les nutriments obtenus, ils doivent rejoindre le sang : c'est l'absorption intestinale. Elle a lieu dans l'intestin grêle, dont la paroi est très fine et couverte de nombreux replis appelés villosités. Cette grande surface permet aux nutriments de passer facilement dans les vaisseaux sanguins tout autour de l'intestin.",
    },
    {
      titre: "Le sang, un moyen de transport",
      illustration: "🚚",
      visuel: "sang = livreur du corps",
      contenu: [
        "Le sang transporte les nutriments et le dioxygène",
        "Il circule dans les vaisseaux sanguins (artères, veines)",
        "Il livre à chaque organe ce dont il a besoin",
        "Il emporte aussi les déchets à éliminer",
      ],
      voixOff:
        "Comment les nutriments et le dioxygène atteignent-ils tous les organes ? Grâce au sang. Le sang est un vrai livreur : il circule dans les vaisseaux sanguins et apporte à chaque organe le glucose et le dioxygène nécessaires. Au passage, il récupère aussi les déchets que les organes doivent éliminer.",
    },
    {
      titre: "La circulation sanguine",
      illustration: "❤️",
      visuel: "cœur → artères → organes → veines",
      contenu: [
        "Le cœur est une pompe qui fait circuler le sang",
        "Les artères conduisent le sang du cœur vers les organes",
        "Les veines ramènent le sang des organes vers le cœur",
        "Le dioxygène est capté au niveau des poumons",
      ],
      voixOff:
        "Le sang circule en boucle grâce au cœur, une pompe qui bat sans arrêt. Les artères conduisent le sang du cœur vers les organes, et les veines le ramènent vers le cœur. Au passage dans les poumons, le sang se charge en dioxygène, qu'il distribuera ensuite à tout le corps.",
    },
    {
      titre: "La nutrition des végétaux",
      illustration: "🌱",
      visuel: "eau + CO₂ + lumière → glucose",
      contenu: [
        "Les plantes ne mangent pas : elles fabriquent leur matière",
        "Elles utilisent l'eau du sol et le CO₂ de l'air",
        "Grâce à la lumière, les feuilles produisent du glucose",
        "Ce processus s'appelle la photosynthèse",
      ],
      voixOff:
        "Les plantes, elles, ne mangent pas comme nous : elles fabriquent leur propre matière. À partir de l'eau puisée dans le sol, du dioxyde de carbone de l'air et de l'énergie de la lumière, leurs feuilles produisent du glucose. Ce phénomène étonnant s'appelle la photosynthèse.",
    },
    {
      titre: "Comment la plante se nourrit",
      illustration: "🌳",
      visuel: "racines (eau) + feuilles (lumière, CO₂)",
      contenu: [
        "Les racines absorbent l'eau et les sels minéraux du sol",
        "Les feuilles captent la lumière et le dioxyde de carbone",
        "La sève transporte la matière dans toute la plante",
        "La photosynthèse a lieu seulement à la lumière",
      ],
      voixOff:
        "Pour se nourrir, la plante utilise deux parties. Les racines absorbent l'eau et les sels minéraux du sol. Les feuilles, elles, captent la lumière et le dioxyde de carbone de l'air. La sève transporte ensuite la matière dans toute la plante. Attention : la photosynthèse ne se produit qu'en présence de lumière.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Les organes ont besoin de glucose et de dioxygène",
        "Digestion → nutriments, absorbés dans l'intestin grêle",
        "Le sang distribue nutriments et dioxygène à tout le corps",
        "Les végétaux fabriquent leur matière par photosynthèse",
      ],
      voixOff:
        "Résumons. Tous les organes ont besoin de glucose et de dioxygène pour fonctionner. La digestion transforme les aliments en nutriments, qui sont absorbés dans l'intestin grêle. Le sang, mis en mouvement par le cœur, distribue tout cela à l'ensemble du corps. Enfin, les végétaux se nourrissent autrement : ils fabriquent leur matière grâce à la photosynthèse. Bravo, tu as compris comment les organismes se nourrissent !",
    },
  ],
  fiche: {
    intro:
      "Tous les êtres vivants ont besoin de matière et d'énergie. Chez les animaux, la digestion fournit des nutriments qui, avec le dioxygène, sont transportés par le sang jusqu'aux organes. Chez les végétaux, la photosynthèse produit la matière à partir d'eau, de dioxyde de carbone et de lumière.",
    sections: [
      {
        titre: "Les besoins des organes",
        points: [
          "Chaque organe a besoin de nutriments (surtout du glucose) et de dioxygène",
          "Le glucose fournit l'énergie, le dioxygène permet de la libérer",
          "Les besoins augmentent quand un organe travaille davantage (effort)",
        ],
      },
      {
        titre: "La digestion",
        points: [
          "La digestion transforme les aliments en nutriments dans le tube digestif",
          "Elle est mécanique (dents, brassage) et chimique (sucs digestifs)",
          "Trajet : bouche → estomac → intestin grêle",
        ],
      },
      {
        titre: "L'absorption intestinale",
        points: [
          "Elle a lieu dans l'intestin grêle à la paroi fine et repliée (villosités)",
          "Les nutriments traversent la paroi et passent dans le sang",
          "La grande surface d'échange rend l'absorption efficace",
        ],
      },
      {
        titre: "La circulation sanguine",
        points: [
          "Le sang transporte nutriments, dioxygène et déchets",
          "Le cœur est la pompe qui fait circuler le sang",
          "Artères : du cœur vers les organes ; veines : des organes vers le cœur",
          "Le dioxygène est capté au niveau des poumons",
        ],
      },
      {
        titre: "La nutrition des végétaux",
        points: [
          "Les végétaux fabriquent leur matière : c'est la photosynthèse",
          "Eau (racines) + dioxyde de carbone (feuilles) + lumière → glucose",
          "La photosynthèse ne se produit qu'à la lumière",
        ],
      },
    ],
    audio:
      "Fiche de révision : la nutrition des organismes. Tous les organes du corps ont besoin de nutriments, surtout du glucose, et de dioxygène pour fonctionner ; leurs besoins augmentent quand ils travaillent. Les aliments, trop gros pour passer dans le sang, sont transformés en nutriments par la digestion, qui a lieu dans le tube digestif, de la bouche à l'intestin grêle. Dans l'intestin grêle, les nutriments traversent la paroi fine et repliée : c'est l'absorption intestinale. Ils passent alors dans le sang, qui circule grâce au cœur et distribue nutriments et dioxygène à tous les organes par les artères, tandis que les veines ramènent le sang au cœur. Les végétaux se nourrissent autrement : grâce à la photosynthèse, leurs feuilles fabriquent du glucose à partir d'eau, de dioxyde de carbone et de lumière. Retiens que la photosynthèse ne se produit qu'en présence de lumière.",
  },
  memoCards: [
    { recto: "De quoi les organes ont-ils besoin ?", verso: "De nutriments (surtout du glucose) et de dioxygène pour fonctionner." },
    { recto: "À quoi sert le glucose ?", verso: "C'est le principal nutriment : il fournit de l'énergie aux cellules des organes." },
    { recto: "À quoi sert la digestion ?", verso: "À transformer les aliments en petits nutriments capables de passer dans le sang." },
    { recto: "Où a lieu l'absorption intestinale ?", verso: "Dans l'intestin grêle, dont la paroi fine et repliée (villosités) offre une grande surface d'échange." },
    { recto: "Que transporte le sang ?", verso: "Les nutriments, le dioxygène et les déchets à éliminer." },
    { recto: "Quel organe fait circuler le sang ?", verso: "Le cœur, une pompe qui bat en permanence." },
    { recto: "Différence artère / veine ?", verso: "Les artères vont du cœur vers les organes ; les veines ramènent le sang vers le cœur." },
    { recto: "Comment les végétaux se nourrissent-ils ?", verso: "Ils fabriquent leur matière par photosynthèse (ils ne mangent pas)." },
    { recto: "Ingrédients de la photosynthèse ?", verso: "Eau (racines) + dioxyde de carbone (feuilles) + lumière → glucose." },
    { recto: "La photosynthèse peut-elle avoir lieu la nuit ?", verso: "Non : elle ne se produit qu'en présence de lumière." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel nutriment est le principal « carburant » des organes ?",
      choix: ["Le glucose", "L'eau", "Le sel", "La vitamine C"],
      bonneReponse: 0,
      explication: "Le glucose est le principal nutriment : il apporte l'énergie aux cellules des organes.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "À quoi sert la digestion ?",
      choix: [
        "À faire circuler le sang",
        "À transformer les aliments en nutriments",
        "À produire du dioxygène",
        "À éliminer l'eau",
      ],
      bonneReponse: 1,
      explication: "La digestion transforme les aliments, trop gros, en petits nutriments qui pourront passer dans le sang.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les deux éléments dont un organe a besoin pour fonctionner.",
      reponse: "Des nutriments (surtout du glucose) et du dioxygène.",
      explication: "Le glucose apporte l'énergie et le dioxygène permet de la libérer.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quel organe se termine la digestion et se fait l'absorption ?",
      choix: ["L'estomac", "La bouche", "L'intestin grêle", "Le cœur"],
      bonneReponse: 2,
      explication: "L'intestin grêle termine la digestion et absorbe les nutriments vers le sang.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi la paroi de l'intestin grêle est repliée (villosités).",
      reponse: "Les replis augmentent la surface d'échange, ce qui rend l'absorption des nutriments plus efficace.",
      explication: "Plus la surface de contact avec le sang est grande, plus les nutriments passent facilement.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi respire-t-on plus vite et le cœur bat-il plus fort pendant un effort ?",
      reponse: "Parce que les muscles consomment plus de glucose et de dioxygène : il faut les approvisionner davantage.",
      explication: "L'organe qui travaille plus a des besoins plus grands ; la respiration et la circulation s'accélèrent pour y répondre.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel vaisseau conduit le sang du cœur vers les organes ?",
      choix: ["Une veine", "Une artère", "L'intestin", "La trachée"],
      bonneReponse: 1,
      explication: "Les artères vont du cœur vers les organes ; les veines ramènent le sang au cœur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Où le sang se charge-t-il en dioxygène ?",
      reponse: "Au niveau des poumons.",
      explication: "Dans les poumons, le sang capte le dioxygène de l'air, qu'il distribuera ensuite aux organes.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris le trajet d'un nutriment depuis l'assiette jusqu'à un muscle.",
      reponse: "L'aliment est digéré dans le tube digestif → devenu nutriment, il est absorbé dans l'intestin grêle → il passe dans le sang → le cœur et les artères le transportent → il arrive au muscle.",
      explication: "C'est la chaîne : digestion, absorption intestinale, transport par le sang, livraison à l'organe.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un élève dit : « Les plantes mangent la terre pour grandir. » Corrige cette phrase.",
      reponse: "Faux : les plantes fabriquent leur matière par photosynthèse, à partir d'eau, de dioxyde de carbone et de lumière. Elles absorbent de l'eau et des sels minéraux dans le sol, mais ne « mangent » pas la terre.",
      explication: "La matière de la plante provient surtout du CO₂ de l'air transformé grâce à la lumière, pas de la terre.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Que produit une feuille lors de la photosynthèse ?",
      choix: ["Du sel", "Du glucose", "Du sang", "Des sucs digestifs"],
      bonneReponse: 1,
      explication: "À partir d'eau, de CO₂ et de lumière, la feuille produit du glucose (matière de la plante).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi une plante placée dans un placard totalement obscur finit-elle par dépérir, même bien arrosée ?",
      reponse: "Sans lumière, la photosynthèse ne peut pas avoir lieu : la plante ne fabrique plus de glucose et manque de matière, même si elle a de l'eau.",
      explication: "La lumière est indispensable à la photosynthèse ; l'eau seule ne suffit pas à nourrir la plante.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le sang transporte principalement :",
      choix: ["Des aliments entiers", "Des nutriments et du dioxygène", "De la salive", "De la lumière"],
      bonneReponse: 1,
      explication: "Le sang distribue nutriments et dioxygène aux organes et emporte les déchets.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel organe joue le rôle de pompe dans la circulation ?",
      reponse: "Le cœur.",
      explication: "Le cœur bat sans arrêt pour faire circuler le sang dans tout le corps.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Où se fait l'absorption des nutriments ?",
      reponse: "Dans l'intestin grêle.",
      explication: "Sa paroi fine et repliée laisse passer les nutriments vers le sang.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La photosynthèse nécessite obligatoirement :",
      choix: ["De l'obscurité", "De la lumière", "Du sang", "Des sucs digestifs"],
      bonneReponse: 1,
      explication: "La photosynthèse ne se produit qu'en présence de lumière.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite les trois éléments utilisés par une feuille pour la photosynthèse.",
      reponse: "L'eau, le dioxyde de carbone et la lumière.",
      explication: "À partir de ces trois éléments, la feuille produit du glucose.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La nutrition des organismes",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pourquoi respirons-nous ?",
          choix: [
            "Pour apporter du dioxygène aux organes",
            "Pour digérer les aliments",
            "Pour faire pousser les plantes",
            "Pour éliminer le glucose",
          ],
          bonneReponse: 0,
          explication: "La respiration apporte le dioxygène nécessaire au fonctionnement des organes.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans quel ordre les aliments traversent-ils le tube digestif ? Cite trois étapes.",
          reponse: "Bouche → estomac → intestin grêle.",
          explication: "La bouche mâche, l'estomac brasse, l'intestin grêle termine la digestion et absorbe.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle du sang dans l'organisme.",
          reponse: "Le sang transporte les nutriments et le dioxygène jusqu'aux organes et récupère leurs déchets ; il circule grâce au cœur.",
          explication: "Le sang est le système de distribution du corps, mis en mouvement par le cœur.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Les villosités de l'intestin grêle servent à :",
          choix: [
            "Fabriquer du glucose",
            "Augmenter la surface d'absorption",
            "Pomper le sang",
            "Produire de la lumière",
          ],
          bonneReponse: 1,
          explication: "Les replis augmentent la surface d'échange et facilitent le passage des nutriments dans le sang.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un coureur accélère. Explique comment son corps répond aux besoins accrus de ses muscles.",
          reponse: "Les muscles consomment plus de glucose et de dioxygène ; la respiration s'accélère pour capter plus de dioxygène et le cœur bat plus vite pour livrer davantage de sang aux muscles.",
          explication: "Respiration et circulation s'adaptent aux besoins augmentés des organes qui travaillent.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare la façon de se nourrir d'un animal et d'un végétal.",
          reponse: "L'animal doit consommer des aliments qu'il digère en nutriments. Le végétal fabrique lui-même sa matière (glucose) par photosynthèse, à partir d'eau, de CO₂ et de lumière.",
          explication: "L'animal prélève sa matière dans son alimentation ; la plante la produit elle-même grâce à la lumière.",
        },
      ],
    },
    {
      titre: "Examen 2 — La nutrition des organismes",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel élément permet aux cellules de libérer l'énergie du glucose ?",
          choix: ["Le sel", "Le dioxygène", "La salive", "L'eau du sol"],
          bonneReponse: 1,
          explication: "Le dioxygène permet de libérer l'énergie contenue dans le glucose.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Vrai ou faux : les aliments passent directement dans le sang sans être transformés. Justifie.",
          reponse: "Faux : les aliments sont trop gros ; la digestion les transforme d'abord en nutriments.",
          explication: "Seuls les petits nutriments issus de la digestion peuvent traverser la paroi de l'intestin.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Quelle différence y a-t-il entre une artère et une veine ?",
          reponse: "L'artère conduit le sang du cœur vers les organes ; la veine ramène le sang des organes vers le cœur.",
          explication: "C'est le sens de circulation par rapport au cœur qui les distingue.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle partie de la plante absorbe l'eau du sol ?",
          choix: ["Les feuilles", "Les fleurs", "Les racines", "Les fruits"],
          bonneReponse: 2,
          explication: "Les racines absorbent l'eau et les sels minéraux du sol.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Reconstitue le trajet complet du dioxygène, de l'air jusqu'à un muscle.",
          reponse: "L'air entre par la respiration → le dioxygène passe dans le sang au niveau des poumons → le cœur et les artères transportent le sang → le dioxygène est livré au muscle.",
          explication: "Poumons pour capter, sang et cœur pour transporter, organe pour utiliser.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "On enferme une plante verte à la lumière avec une bougie allumée : la flamme dure plus longtemps qu'avec une plante à l'obscurité. Propose une explication.",
          reponse: "À la lumière, la plante réalise la photosynthèse et libère du dioxygène, qui entretient la flamme. À l'obscurité, il n'y a pas de photosynthèse, donc pas de dioxygène supplémentaire.",
          explication: "La photosynthèse produit du dioxygène, mais seulement en présence de lumière.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Chaque organe a besoin de nutriments (surtout du glucose) et de dioxygène ; ses besoins augmentent à l'effort.",
    "La digestion transforme les aliments en nutriments dans le tube digestif (bouche → estomac → intestin grêle).",
    "L'absorption intestinale a lieu dans l'intestin grêle : les nutriments passent dans le sang à travers sa paroi repliée.",
    "Le sang, mis en mouvement par le cœur, distribue nutriments et dioxygène à tous les organes.",
    "Les végétaux fabriquent leur matière par photosynthèse : eau + CO₂ + lumière → glucose.",
    "Erreur à éviter : croire que les plantes « mangent la terre » — elles produisent leur matière grâce à la lumière.",
  ],
};

export default chapitre;
