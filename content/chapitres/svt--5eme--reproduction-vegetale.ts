import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "reproduction-vegetale",
  titre: "La reproduction des végétaux",
  matiere: "svt",
  niveau: "5eme",
  description:
    "Découvrir les deux modes de reproduction des plantes à fleurs : la reproduction sexuée (fleur, pollinisation, fécondation, graine, fruit) et la reproduction végétative sans graine (bouturage, marcottage, stolons, tubercules).",
  objectifs: [
    "Identifier les organes reproducteurs d'une fleur",
    "Comprendre les étapes de la pollinisation et de la fécondation",
    "Expliquer la formation et le rôle de la graine et du fruit",
    "Décrire les conditions nécessaires à la germination d'une graine",
    "Connaître des exemples de reproduction végétative (sans graine)",
  ],
  slides: [
    {
      titre: "Deux façons de se reproduire",
      illustration: "🌸",
      visuel: "reproduction sexuée / reproduction végétative",
      contenu: [
        "Les plantes à fleurs peuvent se reproduire de deux façons",
        "La reproduction sexuée : grâce à une fleur, une graine puis un fruit",
        "La reproduction végétative : sans fleur ni graine, à partir d'un morceau de plante",
        "Ces deux modes permettent à l'espèce de se multiplier et de se disperser",
      ],
      voixOff:
        "Comment une plante donne-t-elle naissance à de nouvelles plantes ? Il existe deux grandes stratégies. La reproduction sexuée passe par une fleur, qui donne une graine puis un fruit. La reproduction végétative, elle, ne nécessite ni fleur ni graine : un simple morceau de plante peut donner un nouvel individu. Découvrons ces deux modes de reproduction.",
    },
    {
      titre: "La fleur, organe reproducteur",
      illustration: "🌺",
      visuel: "étamines (mâle) + pistil (femelle)",
      contenu: [
        "La fleur contient les organes reproducteurs de la plante",
        "Les étamines produisent le pollen (organe mâle)",
        "Le pistil contient les ovules (organe femelle)",
        "Pétales et couleurs attirent souvent les insectes pollinisateurs",
      ],
      voixOff:
        "La fleur n'est pas seulement décorative : c'est l'organe reproducteur de la plante. Les étamines produisent le pollen, qui contient les cellules reproductrices mâles. Le pistil, au centre de la fleur, contient les ovules, les cellules reproductrices femelles. Les pétales colorés et parfois parfumés servent souvent à attirer les insectes.",
    },
    {
      titre: "La pollinisation",
      illustration: "🐝",
      visuel: "pollen (étamine) → pistil",
      contenu: [
        "La pollinisation, c'est le transport du pollen jusqu'au pistil",
        "Elle peut se faire par le vent (plantes à fleurs discrètes)",
        "Elle peut se faire par les insectes, attirés par le nectar et les couleurs",
        "Le pollen se dépose sur le pistil de la même espèce ou d'une fleur voisine",
      ],
      voixOff:
        "Avant la fécondation, le pollen doit voyager jusqu'au pistil : c'est la pollinisation. Certaines plantes, comme les graminées, comptent sur le vent pour disperser leur pollen léger. D'autres, aux fleurs colorées et parfumées, attirent les insectes comme les abeilles, qui transportent le pollen sans le vouloir en butinant le nectar.",
    },
    {
      titre: "La fécondation et la formation de la graine",
      illustration: "🌰",
      visuel: "pollen + ovule → graine",
      contenu: [
        "Une fois sur le pistil, le pollen féconde un ovule",
        "La fécondation unit une cellule mâle et une cellule femelle",
        "L'ovule fécondé se transforme en graine",
        "La graine contient un embryon de future plante et des réserves nutritives",
      ],
      voixOff:
        "Lorsque le pollen atteint le pistil, il féconde un ovule : une cellule reproductrice mâle s'unit à une cellule reproductrice femelle. Cet ovule fécondé se transforme alors en graine. La graine contient un tout petit embryon, la future plante, ainsi que des réserves nutritives pour l'aider à démarrer sa croissance.",
    },
    {
      titre: "La graine et la germination",
      illustration: "🌱",
      visuel: "eau + chaleur + O₂ → germination",
      contenu: [
        "La graine peut rester en vie ralentie longtemps avant de germer",
        "La germination nécessite de l'eau, une température adaptée et du dioxygène",
        "La graine utilise ses réserves pour développer une jeune plantule",
        "La lumière n'est pas indispensable au tout début de la germination",
      ],
      voixOff:
        "Une graine peut patienter, parfois très longtemps, avant de germer. Pour germer, elle a besoin de conditions précises : de l'eau pour se réhydrater, une température favorable, et du dioxygène. Grâce à ses réserves, l'embryon se développe alors en une jeune plantule qui va sortir de terre.",
    },
    {
      titre: "Le fruit : protéger et disperser les graines",
      illustration: "🍎",
      visuel: "fleur fécondée → fruit avec graines",
      contenu: [
        "Après la fécondation, une partie de la fleur se transforme en fruit",
        "Le fruit protège la ou les graines qu'il contient",
        "Certains fruits sont mangés par les animaux, qui dispersent les graines",
        "D'autres fruits ont des formes adaptées pour être emportés par le vent",
      ],
      voixOff:
        "Après la fécondation, la fleur se transforme progressivement en fruit, qui protège les graines à l'intérieur. Le fruit joue aussi un rôle dans la dispersion : certains sont mangés par des animaux qui rejettent les graines plus loin, d'autres, comme le pissenlit, sont légers et emportés par le vent.",
    },
    {
      titre: "La reproduction végétative : sans graine",
      illustration: "🌿",
      visuel: "un morceau de plante → nouvelle plante",
      contenu: [
        "Certaines plantes se multiplient sans fleur ni graine",
        "Un fragment de plante (tige, racine, feuille) peut donner un individu complet",
        "C'est la reproduction végétative ou multiplication asexuée",
        "Les nouvelles plantes sont identiques à la plante d'origine",
      ],
      voixOff:
        "Toutes les plantes n'ont pas besoin de fleurs pour se reproduire. Certaines utilisent la reproduction végétative : un simple morceau de tige, de racine ou de feuille peut donner naissance à une plante entière, génétiquement identique à la plante d'origine. On parle aussi de multiplication asexuée.",
    },
    {
      titre: "Exemples de multiplication végétative",
      illustration: "🥔",
      visuel: "bouture, marcotte, stolon, tubercule",
      contenu: [
        "Bouturage : une tige coupée développe des racines et devient une nouvelle plante",
        "Marcottage : une tige encore attachée à la plante s'enracine au contact du sol",
        "Stolons : des tiges rampantes produisent de nouveaux pieds (fraisier)",
        "Tubercules : des réserves souterraines redonnent une plante (pomme de terre)",
      ],
      voixOff:
        "Il existe plusieurs techniques de reproduction végétative. Le bouturage consiste à planter une tige coupée, qui développera ses propres racines. Le marcottage laisse une tige s'enraciner tout en restant attachée à la plante mère. Le fraisier produit des stolons, des tiges rampantes qui donnent de nouveaux pieds. Et la pomme de terre repousse à partir de ses tubercules souterrains.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Reproduction sexuée : fleur → pollinisation → fécondation → graine → fruit",
        "La graine germe si elle a de l'eau, une bonne température et du dioxygène",
        "Le fruit protège et disperse les graines",
        "Reproduction végétative : un morceau de plante suffit (bouture, marcotte, stolon, tubercule)",
      ],
      voixOff:
        "Résumons. La reproduction sexuée passe par la fleur : la pollinisation amène le pollen jusqu'au pistil, la fécondation forme une graine, protégée par un fruit qui aide aussi à sa dispersion. La graine germe si elle trouve de l'eau, une température favorable et du dioxygène. Mais les plantes savent aussi se multiplier sans graine : un simple morceau de tige, de racine ou de feuille peut donner naissance à une nouvelle plante identique. C'est la reproduction végétative.",
    },
  ],
  fiche: {
    intro:
      "Les plantes à fleurs se reproduisent de deux façons complémentaires : la reproduction sexuée, qui passe par la fleur, la pollinisation, la fécondation, la graine et le fruit, et la reproduction végétative, qui permet à un simple fragment de plante de donner un nouvel individu.",
    sections: [
      {
        titre: "La fleur et la pollinisation",
        points: [
          "La fleur porte les organes reproducteurs : étamines (pollen) et pistil (ovules)",
          "La pollinisation transporte le pollen jusqu'au pistil, par le vent ou les insectes",
          "Les couleurs et le nectar attirent les insectes pollinisateurs",
        ],
      },
      {
        titre: "Fécondation, graine et fruit",
        points: [
          "La fécondation unit une cellule mâle (pollen) et une cellule femelle (ovule)",
          "L'ovule fécondé devient une graine, contenant un embryon et des réserves",
          "La fleur fécondée se transforme en fruit, qui protège et disperse les graines",
        ],
      },
      {
        titre: "La germination",
        points: [
          "La graine germe si elle dispose d'eau, d'une température favorable et de dioxygène",
          "L'embryon utilise les réserves de la graine pour se développer en plantule",
        ],
      },
      {
        titre: "La reproduction végétative",
        points: [
          "Un fragment de plante (tige, racine, feuille) peut donner une nouvelle plante identique",
          "Exemples : bouturage, marcottage, stolons (fraisier), tubercules (pomme de terre)",
          "Cette reproduction ne nécessite ni fleur ni graine",
        ],
      },
    ],
    audio:
      "Fiche de révision : la reproduction des végétaux. Les plantes à fleurs se reproduisent de deux façons. La reproduction sexuée passe par la fleur, qui porte les étamines produisant le pollen et le pistil contenant les ovules. La pollinisation transporte le pollen jusqu'au pistil, grâce au vent ou aux insectes attirés par les couleurs et le nectar. La fécondation unit alors une cellule mâle et une cellule femelle, ce qui transforme l'ovule en graine, contenant un embryon et des réserves nutritives. La fleur fécondée devient un fruit, qui protège la graine et participe à sa dispersion, par les animaux ou par le vent. Pour germer, la graine a besoin d'eau, d'une température favorable et de dioxygène. Enfin, certaines plantes se reproduisent sans fleur ni graine, grâce à la reproduction végétative : un fragment de tige, de racine ou de feuille peut donner naissance à une nouvelle plante identique, comme dans le bouturage, le marcottage, ou grâce aux stolons et aux tubercules.",
  },
  memoCards: [
    { recto: "Quels sont les organes reproducteurs de la fleur ?", verso: "Les étamines (produisent le pollen) et le pistil (contient les ovules)." },
    { recto: "Qu'est-ce que la pollinisation ?", verso: "Le transport du pollen jusqu'au pistil, par le vent ou par les insectes." },
    { recto: "Qu'est-ce que la fécondation ?", verso: "L'union d'une cellule reproductrice mâle (pollen) et d'une cellule reproductrice femelle (ovule)." },
    { recto: "Que devient l'ovule après la fécondation ?", verso: "Il se transforme en graine, contenant un embryon et des réserves nutritives." },
    { recto: "À quoi sert le fruit ?", verso: "À protéger les graines et à favoriser leur dispersion (animaux, vent)." },
    { recto: "De quoi une graine a-t-elle besoin pour germer ?", verso: "D'eau, d'une température favorable et de dioxygène." },
    { recto: "Qu'est-ce que la reproduction végétative ?", verso: "Une reproduction sans fleur ni graine, à partir d'un fragment de plante (tige, racine, feuille)." },
    { recto: "Cite deux exemples de reproduction végétative.", verso: "Le bouturage et le marcottage (ou les stolons du fraisier, les tubercules de la pomme de terre)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel organe de la fleur produit le pollen ?",
      choix: ["Le pistil", "Les étamines", "Les pétales", "La graine"],
      bonneReponse: 1,
      explication: "Les étamines sont l'organe reproducteur mâle : elles produisent le pollen.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Où se trouvent les ovules dans la fleur ?",
      choix: ["Dans les pétales", "Dans les étamines", "Dans le pistil", "Dans la tige"],
      bonneReponse: 2,
      explication: "Le pistil est l'organe reproducteur femelle : il contient les ovules.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que la pollinisation ?",
      reponse: "C'est le transport du pollen des étamines jusqu'au pistil, par le vent ou par des animaux comme les insectes.",
      explication: "La pollinisation est une étape nécessaire avant la fécondation.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que devient l'ovule fécondé ?",
      choix: ["Un fruit", "Une fleur", "Une graine", "Une racine"],
      bonneReponse: 2,
      explication: "Après fécondation, l'ovule se transforme en graine, qui contient un embryon.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi certaines fleurs sont très colorées et parfumées.",
      reponse: "Ces caractéristiques attirent les insectes pollinisateurs (abeilles, papillons...), qui transportent alors le pollen d'une fleur à l'autre en cherchant le nectar.",
      explication: "C'est une stratégie de pollinisation par les insectes, appelée pollinisation entomophile.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelles sont les trois conditions nécessaires à la germination d'une graine ?",
      reponse: "De l'eau, une température favorable et du dioxygène.",
      explication: "Sans ces trois conditions réunies, l'embryon de la graine ne peut pas se développer.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le fruit se forme à partir :",
      choix: ["De la racine", "De la fleur fécondée", "De la graine germée", "Du pollen"],
      bonneReponse: 1,
      explication: "Après la fécondation, une partie de la fleur se transforme en fruit, qui protège les graines.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de dispersion des graines par les animaux et un exemple par le vent.",
      reponse: "Par les animaux : un oiseau mange une cerise et rejette le noyau plus loin. Par le vent : les akènes du pissenlit, légers et munis d'aigrettes, sont emportés par le vent.",
      explication: "Le fruit favorise la dispersion des graines loin de la plante mère, ce qui limite la concurrence entre plantes.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Le bouturage consiste à :",
      choix: [
        "Faire germer une graine",
        "Planter un fragment de tige qui développera ses propres racines",
        "Polliniser une fleur à la main",
        "Attendre la formation d'un fruit",
      ],
      bonneReponse: 1,
      explication: "Le bouturage est une technique de reproduction végétative : un fragment de tige donne une nouvelle plante.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre reproduction sexuée et reproduction végétative chez les plantes.",
      reponse: "La reproduction sexuée nécessite une fleur, une pollinisation et une fécondation entre une cellule mâle et une cellule femelle : elle produit des graines génétiquement variées. La reproduction végétative ne nécessite ni fleur ni graine : un fragment de plante donne directement un nouvel individu, génétiquement identique à la plante d'origine.",
      explication: "La reproduction sexuée mélange le patrimoine génétique de deux parents, contrairement à la reproduction végétative.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un jardinier plante un morceau de tige de géranium dans du terreau humide, sans fleur ni graine, et obtient une nouvelle plante. Quel phénomène explique ce résultat ?",
      reponse: "C'est un exemple de bouturage, une reproduction végétative : la tige coupée développe ses propres racines et donne une nouvelle plante identique à la plante d'origine, sans passer par une fleur ni une graine.",
      explication: "Le bouturage montre qu'un fragment de plante peut suffire à donner un individu complet.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi une graine peut-elle rester plusieurs mois, voire plusieurs années, sans germer, puis germer soudainement ?",
      reponse: "La graine est en vie ralentie tant que les conditions favorables (eau, température, dioxygène) ne sont pas réunies. Dès que ces conditions sont réunies, l'embryon reprend son développement grâce aux réserves de la graine, et la germination commence.",
      explication: "La graine attend des conditions favorables avant de déclencher sa germination.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Les étamines produisent :",
      choix: ["Des ovules", "Du pollen", "Des graines", "Des fruits"],
      bonneReponse: 1,
      explication: "Les étamines sont l'organe reproducteur mâle de la fleur : elles produisent le pollen.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quoi sert le fruit ?",
      reponse: "À protéger les graines et à favoriser leur dispersion.",
      explication: "Le fruit se forme après la fécondation, à partir de la fleur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite les trois conditions de germination d'une graine.",
      reponse: "De l'eau, une température favorable et du dioxygène.",
      explication: "Ces trois conditions doivent être réunies pour que l'embryon se développe.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le bouturage et le marcottage sont des exemples de :",
      choix: ["Reproduction sexuée", "Reproduction végétative", "Pollinisation", "Germination"],
      bonneReponse: 1,
      explication: "Ce sont des techniques de reproduction végétative, sans fleur ni graine.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre pollinisation et fécondation ?",
      reponse: "La pollinisation est le transport du pollen jusqu'au pistil ; la fécondation est l'union d'une cellule mâle et d'une cellule femelle qui forme la graine.",
      explication: "La pollinisation précède toujours la fécondation.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La reproduction des végétaux",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel organe de la fleur contient les ovules ?",
          choix: ["Les étamines", "Le pistil", "Les pétales", "La tige"],
          bonneReponse: 1,
          explication: "Le pistil est l'organe reproducteur femelle de la fleur.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite deux moyens de transport du pollen lors de la pollinisation.",
          reponse: "Le vent et les insectes (comme les abeilles).",
          explication: "Certaines plantes utilisent le vent, d'autres attirent des animaux pollinisateurs.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris ce que contient une graine et à quoi cela sert.",
          reponse: "Une graine contient un embryon, la future plante, ainsi que des réserves nutritives qui lui permettent de se développer lors de la germination, avant que la jeune plante ne puisse se nourrir seule.",
          explication: "Les réserves de la graine nourrissent l'embryon jusqu'à ce qu'il développe ses premières feuilles.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel exemple illustre la reproduction végétative par tubercule ?",
          choix: ["Le pissenlit", "La pomme de terre", "L'abeille", "Le pollen"],
          bonneReponse: 1,
          explication: "La pomme de terre se multiplie à partir de ses tubercules souterrains, sans passer par une graine.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi les plantes à fleurs discrètes (peu colorées, sans parfum) sont souvent pollinisées par le vent plutôt que par les insectes.",
          reponse: "Sans couleurs vives ni parfum, ces fleurs n'attirent pas les insectes ; elles produisent en général un pollen léger et abondant, facilement transporté par le vent jusqu'à d'autres fleurs, ce qui compense l'absence d'attraction visuelle ou olfactive.",
          explication: "La pollinisation par le vent (anémophile) ne nécessite pas d'attirer d'animaux, mais demande beaucoup de pollen léger.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un agriculteur veut obtenir rapidement de nombreux plants identiques à un pied de vigne qu'il apprécie particulièrement. Quelle méthode de reproduction lui conseiller, et pourquoi pas les graines ?",
          reponse: "Il devrait utiliser le bouturage ou le marcottage : cette reproduction végétative donne des plantes génétiquement identiques au pied d'origine. Les graines, issues d'une reproduction sexuée, donneraient des plantes différentes du fait du mélange génétique lors de la fécondation.",
          explication: "La reproduction végétative garantit des plantes identiques, ce qui est utile en agriculture pour reproduire une variété précise.",
        },
      ],
    },
    {
      titre: "Examen 2 — La reproduction des végétaux",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La fécondation, c'est l'union :",
          choix: [
            "D'une graine et d'un fruit",
            "D'une cellule mâle et d'une cellule femelle",
            "Du vent et du pollen",
            "D'une racine et d'une tige",
          ],
          bonneReponse: 1,
          explication: "La fécondation unit une cellule reproductrice mâle (du pollen) et une cellule reproductrice femelle (de l'ovule).",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite une technique de reproduction végétative utilisée par le fraisier.",
          reponse: "Les stolons : des tiges rampantes qui produisent de nouveaux pieds de fraisier.",
          explication: "Les stolons permettent au fraisier de se multiplier sans graine.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique le rôle du fruit après la fécondation.",
          reponse: "Le fruit se forme à partir de la fleur fécondée. Il protège la ou les graines qu'il contient et participe souvent à leur dispersion, par les animaux qui le mangent ou par le vent.",
          explication: "Le fruit a donc un double rôle : protection et dispersion des graines.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pour germer, une graine a besoin :",
          choix: [
            "Uniquement de lumière",
            "D'eau, d'une température favorable et de dioxygène",
            "Uniquement de terre",
            "D'un insecte pollinisateur",
          ],
          bonneReponse: 1,
          explication: "Ces trois conditions sont nécessaires pour déclencher la germination.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare le nombre de descendants génétiquement identiques obtenus par reproduction sexuée et par reproduction végétative, et explique pourquoi.",
          reponse: "La reproduction végétative produit des plantes génétiquement identiques à la plante mère, car il n'y a pas de mélange de patrimoine génétique. La reproduction sexuée, elle, mélange les gènes des deux parents lors de la fécondation, produisant des descendants génétiquement variés, même issus de la même plante.",
          explication: "Le mélange génétique n'a lieu que dans la reproduction sexuée, ce qui explique la diversité des descendants.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Des graines de haricot sont mises à germer dans trois boîtes : l'une avec de l'eau et de la lumière à température ambiante, l'une sans eau à température ambiante, l'une avec de l'eau mais placée au réfrigérateur. Quelle(s) boîte(s) verra(vont) germer les graines ? Justifie.",
          reponse: "Seule la première boîte (eau, température ambiante) verra germer les graines. La deuxième boîte manque d'eau, indispensable à la germination. La troisième boîte a de l'eau mais une température trop basse, défavorable à la germination.",
          explication: "La germination nécessite simultanément de l'eau et une température favorable ; il manque un facteur dans les deux autres boîtes.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La fleur porte les organes reproducteurs : étamines (pollen, mâle) et pistil (ovules, femelle).",
    "La pollinisation transporte le pollen jusqu'au pistil, par le vent ou par les insectes.",
    "La fécondation unit une cellule mâle et une cellule femelle : l'ovule devient alors une graine.",
    "La graine germe avec de l'eau, une température favorable et du dioxygène.",
    "Le fruit, issu de la fleur fécondée, protège les graines et favorise leur dispersion.",
    "La reproduction végétative (bouturage, marcottage, stolons, tubercules) produit des plantes identiques, sans fleur ni graine.",
  ],
};

export default chapitre;
