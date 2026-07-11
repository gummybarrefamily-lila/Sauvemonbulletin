import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "relatifs-multiplication-division",
  titre: "Nombres relatifs : multiplication et division",
  matiere: "maths",
  niveau: "4eme",
  description:
    "Maîtriser la règle des signes pour multiplier et diviser des nombres relatifs, gérer plusieurs facteurs et respecter les priorités opératoires.",
  objectifs: [
    "Connaître la règle des signes pour la multiplication et la division",
    "Multiplier et diviser des nombres relatifs simples",
    "Déterminer le signe d'un produit de plusieurs facteurs relatifs",
    "Appliquer les priorités opératoires dans un calcul avec des relatifs",
    "Éviter les pièges classiques (−3² ≠ (−3)², division par zéro impossible)",
  ],
  slides: [
    {
      titre: "Les nombres relatifs, un rappel",
      illustration: "🔢",
      visuel: "−5 ... 0 ... +5",
      contenu: [
        "Un nombre relatif a un signe (+ ou −) et une distance à zéro",
        "+7 et −7 sont opposés : même distance à zéro, signes contraires",
        "Sur une droite graduée, les positifs sont à droite de 0, les négatifs à gauche",
        "On va maintenant apprendre à multiplier et à diviser ces nombres",
      ],
      voixOff:
        "Petit rappel avant de commencer : un nombre relatif possède un signe, plus ou moins, et une distance à zéro. Plus sept et moins sept sont des nombres opposés : ils ont la même distance à zéro mais des signes contraires. Sur une droite graduée, les nombres positifs sont à droite de zéro, les négatifs à gauche. Aujourd'hui, on apprend à les multiplier et à les diviser.",
    },
    {
      titre: "La règle des signes : la multiplication",
      illustration: "✖️",
      visuel: "(+)×(+)=+ ; (−)×(−)=+ ; (+)×(−)=−",
      contenu: [
        "Signes identiques → résultat positif : (+)×(+) = + et (−)×(−) = +",
        "Signes différents → résultat négatif : (+)×(−) = − et (−)×(+) = −",
        "On multiplie d'abord les distances à zéro (les nombres sans signe)",
        "Exemple : (−4) × (−6) = +24 ; (−4) × 6 = −24",
      ],
      voixOff:
        "Voici la règle des signes pour la multiplication. Quand les deux signes sont identiques, le résultat est positif. Quand les deux signes sont différents, le résultat est négatif. Concrètement, on multiplie les distances à zéro, puis on applique cette règle pour trouver le signe du résultat. Par exemple, moins quatre fois moins six égale plus vingt-quatre, alors que moins quatre fois six égale moins vingt-quatre.",
    },
    {
      titre: "Plusieurs facteurs : la règle de parité",
      illustration: "🔁",
      visuel: "nombre pair de signes − → résultat +",
      contenu: [
        "(−2) × (−3) × (−5) = −30 : trois facteurs négatifs (nombre impair) → résultat négatif",
        "(−2) × (−3) × (−1) × (−5) = 30 : quatre facteurs négatifs (nombre pair) → résultat positif",
        "Astuce : compte le nombre de signes « − ». Pair → +, impair → −",
        "Le résultat final s'obtient en multipliant toutes les distances à zéro",
      ],
      voixOff:
        "Quand il y a plusieurs facteurs, on compte simplement le nombre de signes moins. Si ce nombre est pair, le résultat est positif. S'il est impair, le résultat est négatif. Par exemple, moins deux fois moins trois fois moins cinq contient trois facteurs négatifs, un nombre impair, donc le résultat est négatif : moins trente. Il ne reste plus qu'à multiplier toutes les distances à zéro pour obtenir la valeur.",
    },
    {
      titre: "Exemples pas à pas",
      illustration: "📝",
      visuel: "(−3) × 5 = −15",
      contenu: [
        "(−3) × 5 = −15 (signes différents)",
        "(−7) × (−2) = 14 (signes identiques)",
        "6 × (−9) = −54",
        "0 × (−12) = 0 : zéro multiplié par n'importe quel nombre donne toujours zéro",
      ],
      voixOff:
        "Entraînons-nous avec quelques exemples. Moins trois fois cinq égale moins quinze, car les signes sont différents. Moins sept fois moins deux égale quatorze, car les signes sont identiques. Six fois moins neuf égale moins cinquante-quatre. Et n'oublie jamais que zéro multiplié par n'importe quel nombre donne toujours zéro.",
    },
    {
      titre: "La règle des signes : la division",
      illustration: "➗",
      visuel: "(−20) ÷ (−4) = 5",
      contenu: [
        "Même règle que pour la multiplication : signes identiques → +, signes différents → −",
        "(−20) ÷ (−4) = 5 ; (−20) ÷ 4 = −5 ; 20 ÷ (−4) = −5",
        "On divise les distances à zéro, puis on applique la règle du signe",
        "On ne peut jamais diviser par 0",
      ],
      voixOff:
        "Pour la division, on applique exactement la même règle des signes que pour la multiplication. Signes identiques donnent un résultat positif, signes différents donnent un résultat négatif. Moins vingt divisé par moins quatre égale cinq. Moins vingt divisé par quatre égale moins cinq. On commence par diviser les distances à zéro, puis on détermine le signe. Et surtout, rappelle-toi qu'on ne peut jamais diviser par zéro.",
    },
    {
      titre: "Exemples de divisions",
      illustration: "🧮",
      visuel: "(−36) ÷ 9 = −4",
      contenu: [
        "(−36) ÷ 9 = −4",
        "(−45) ÷ (−9) = 5",
        "54 ÷ (−6) = −9",
        "Le quotient de deux relatifs de même signe est toujours positif",
      ],
      voixOff:
        "Continuons avec des exemples de divisions. Moins trente-six divisé par neuf égale moins quatre. Moins quarante-cinq divisé par moins neuf égale cinq. Cinquante-quatre divisé par moins six égale moins neuf. Retiens bien : le quotient de deux nombres relatifs de même signe est toujours positif.",
    },
    {
      titre: "Priorités : × et ÷ avant + et −",
      illustration: "⏳",
      visuel: "5 − 3 × (−4) = 5 + 12 = 17",
      contenu: [
        "Comme pour tous les nombres, on effectue d'abord × et ÷, puis + et −",
        "5 − 3 × (−4) = 5 − (−12) = 5 + 12 = 17",
        "Les parenthèses sont toujours prioritaires sur tout le reste",
        "(−2 + 5) × (−3) = 3 × (−3) = −9",
      ],
      voixOff:
        "Avec les relatifs, les priorités opératoires ne changent pas : on effectue toujours les multiplications et les divisions avant les additions et les soustractions. Cinq moins trois fois moins quatre égale cinq moins moins douze, c'est-à-dire cinq plus douze, soit dix-sept. Et bien sûr, les parenthèses restent prioritaires sur tout le reste : entre parenthèses, moins deux plus cinq fait trois, puis trois fois moins trois égale moins neuf.",
    },
    {
      titre: "Pièges à éviter",
      illustration: "⚠️",
      visuel: "−3² ≠ (−3)²",
      contenu: [
        "−3² = −9 (on élève 3 au carré, puis on applique le signe moins) ; (−3)² = 9",
        "Ne pas confondre le signe « − » de soustraction et le signe négatif d'un nombre",
        "(−1) × (−1) × (−1) = −1 : nombre impair de facteurs négatifs",
        "Toujours bien écrire les parenthèses autour des nombres négatifs dans un calcul",
      ],
      voixOff:
        "Attention à un piège très fréquent : moins trois au carré, sans parenthèses, égale moins neuf, car on élève trois au carré puis on applique le signe moins. Alors que moins trois, entre parenthèses, au carré, égale neuf. Ne confonds jamais le signe moins d'une soustraction avec le signe négatif d'un nombre, et pense toujours à bien écrire les parenthèses autour des nombres négatifs.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Signes identiques → résultat positif ; signes différents → résultat négatif",
        "Avec plusieurs facteurs : nombre pair de signes − → + ; nombre impair de signes − → −",
        "On multiplie/divise d'abord les distances à zéro, puis on applique la règle du signe",
        "Priorités : × et ÷ avant + et − ; parenthèses en premier ; jamais de division par 0",
      ],
      voixOff:
        "Résumons. Pour multiplier ou diviser des relatifs : signes identiques donnent un résultat positif, signes différents donnent un résultat négatif. Avec plusieurs facteurs, on compte le nombre de signes moins : pair, c'est positif ; impair, c'est négatif. On calcule d'abord avec les distances à zéro, puis on applique la règle du signe. Et n'oublie jamais les priorités : multiplications et divisions avant additions et soustractions, parenthèses en premier, et une division par zéro est toujours impossible.",
    },
  ],
  fiche: {
    intro:
      "Multiplier ou diviser des nombres relatifs suit toujours la même règle des signes : signes identiques donnent un résultat positif, signes différents donnent un résultat négatif.",
    sections: [
      {
        titre: "Multiplier des relatifs",
        points: [
          "(+) × (+) = + et (−) × (−) = + (signes identiques)",
          "(+) × (−) = − et (−) × (+) = − (signes différents)",
          "On multiplie les distances à zéro, puis on applique la règle du signe",
          "Exemple : (−4) × (−6) = 24 ; (−4) × 6 = −24",
        ],
      },
      {
        titre: "Diviser des relatifs",
        points: [
          "Même règle des signes que pour la multiplication",
          "(−20) ÷ (−4) = 5 ; (−20) ÷ 4 = −5 ; 20 ÷ (−4) = −5",
          "Une division par 0 est toujours impossible",
        ],
      },
      {
        titre: "Plusieurs facteurs (règle de parité)",
        points: [
          "On compte le nombre de signes « − » parmi les facteurs",
          "Nombre pair de signes − → résultat positif",
          "Nombre impair de signes − → résultat négatif",
          "Exemple : (−2) × (−3) × (−5) = −30 (3 signes −, impair)",
        ],
      },
      {
        titre: "Priorités et pièges",
        points: [
          "Priorités : × et ÷ avant + et − ; parenthèses en premier",
          "5 − 3 × (−4) = 5 + 12 = 17",
          "Piège : −3² = −9 alors que (−3)² = 9",
          "0 multiplié par n'importe quel nombre donne toujours 0",
        ],
      },
    ],
    audio:
      "Fiche de révision : la multiplication et la division des nombres relatifs. La règle des signes est la même pour les deux opérations : quand les deux signes sont identiques, le résultat est positif ; quand les deux signes sont différents, le résultat est négatif. On multiplie ou on divise d'abord les distances à zéro, puis on applique cette règle. Avec plusieurs facteurs, on compte le nombre de signes moins : s'il est pair, le résultat est positif ; s'il est impair, le résultat est négatif. Une division par zéro est toujours impossible. Enfin, n'oublie jamais les priorités opératoires : multiplications et divisions avant additions et soustractions, et les parenthèses en premier. Attention au piège classique : moins trois au carré, sans parenthèses, égale moins neuf, alors que moins trois entre parenthèses au carré égale neuf.",
  },
  memoCards: [
    { recto: "Règle des signes : signes identiques ?", verso: "Le résultat est positif. (+)×(+) = + et (−)×(−) = +." },
    { recto: "Règle des signes : signes différents ?", verso: "Le résultat est négatif. (+)×(−) = − et (−)×(+) = −." },
    { recto: "(−4) × (−6) = ?", verso: "24 : signes identiques, donc résultat positif." },
    { recto: "(−20) ÷ 4 = ?", verso: "−5 : signes différents, donc résultat négatif." },
    { recto: "Plusieurs facteurs négatifs : comment trouver le signe ?", verso: "On compte les signes − : nombre pair → +, nombre impair → −." },
    { recto: "(−2) × (−3) × (−5) = ?", verso: "−30 : trois facteurs négatifs (impair), donc résultat négatif." },
    { recto: "Priorités opératoires avec les relatifs ?", verso: "× et ÷ avant + et − ; les parenthèses sont toujours prioritaires." },
    { recto: "−3² et (−3)² : même résultat ?", verso: "Non ! −3² = −9 (on met le signe après le carré) mais (−3)² = 9." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "(−4) × 5 = ?",
      choix: ["−20", "20", "−9", "9"],
      bonneReponse: 0,
      explication: "Signes différents (− et +) : le résultat est négatif. 4 × 5 = 20, donc (−4) × 5 = −20.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "(−6) × (−3) = ?",
      choix: ["18", "−18", "−9", "9"],
      bonneReponse: 0,
      explication: "Signes identiques (− et −) : le résultat est positif. 6 × 3 = 18, donc (−6) × (−3) = 18.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule 7 × (−8).",
      reponse: "−56",
      explication: "Signes différents : le résultat est négatif. 7 × 8 = 56, donc 7 × (−8) = −56.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "(−12) ÷ (−4) = ?",
      choix: ["3", "−3", "8", "−8"],
      bonneReponse: 0,
      explication: "Signes identiques : le résultat est positif. 12 ÷ 4 = 3, donc (−12) ÷ (−4) = 3.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−45) ÷ 9.",
      reponse: "−5",
      explication: "Signes différents : le résultat est négatif. 45 ÷ 9 = 5, donc (−45) ÷ 9 = −5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "(−2) × (−3) × (−4) = ?",
      choix: ["24", "−24", "9", "−9"],
      bonneReponse: 1,
      explication: "Trois facteurs négatifs (nombre impair) : le résultat est négatif. 2 × 3 × 4 = 24, donc le résultat est −24.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−5) × 6 × (−2).",
      reponse: "60",
      explication: "Deux facteurs négatifs (nombre pair) : le résultat est positif. 5 × 6 × 2 = 60, donc le résultat est 60.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel est le signe de (−7) × (−7) × (−7) × (−7) ?",
      choix: ["Positif", "Négatif", "Nul", "Impossible à savoir"],
      bonneReponse: 0,
      explication: "Il y a quatre facteurs négatifs, un nombre pair, donc le résultat est positif.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule 8 − 3 × (−5).",
      reponse: "23",
      explication: "On calcule d'abord la multiplication : 3 × (−5) = −15. Puis 8 − (−15) = 8 + 15 = 23.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule (−6 + 2) × (−3 − 1).",
      reponse: "16",
      explication: "On calcule d'abord les parenthèses : (−6 + 2) = −4 et (−3 − 1) = −4. Puis (−4) × (−4) = 16.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Calcule (−2)² − (−2)³.",
      choix: ["12", "−4", "−12", "4"],
      bonneReponse: 0,
      explication: "(−2)² = 4 et (−2)³ = −8. Donc 4 − (−8) = 4 + 8 = 12.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un plongeur descend de 3 m sous l'eau chaque minute, pendant 5 minutes, en partant de la surface (altitude 0). Exprime sa profondeur finale par un produit de deux nombres relatifs, puis calcule-la.",
      reponse: "(−3) × 5 = −15, donc le plongeur est à −15 m (15 m sous la surface).",
      explication: "Chaque minute fait perdre 3 m d'altitude, soit un déplacement de −3 m, répété 5 fois : (−3) × 5 = −15.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "(−9) × (−2) = ?",
      choix: ["18", "−18", "11", "−11"],
      bonneReponse: 0,
      explication: "Signes identiques : le résultat est positif. 9 × 2 = 18.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule (−63) ÷ 7.",
      reponse: "−9",
      explication: "Signes différents : le résultat est négatif. 63 ÷ 7 = 9, donc (−63) ÷ 7 = −9.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "(−1) × (−1) × (−1) × (−1) × (−1) = ?",
      choix: ["1", "−1", "5", "−5"],
      bonneReponse: 1,
      explication: "Cinq facteurs négatifs (nombre impair) : le résultat est négatif, et 1 × 1 × 1 × 1 × 1 = 1, donc −1.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule 4 × (−3) − (−10).",
      reponse: "−2",
      explication: "4 × (−3) = −12. Puis −12 − (−10) = −12 + 10 = −2.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule (−7 + 3) × (−2)².",
      reponse: "−16",
      explication: "(−7 + 3) = −4 et (−2)² = 4. Donc (−4) × 4 = −16.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Multiplication et division des relatifs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "(−5) × 8 = ?",
          choix: ["−40", "40", "−13", "13"],
          bonneReponse: 0,
          explication: "Signes différents : le résultat est négatif. 5 × 8 = 40, donc (−5) × 8 = −40.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule (−54) ÷ (−6).",
          reponse: "9",
          explication: "Signes identiques : le résultat est positif. 54 ÷ 6 = 9.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "(−3) × (−3) × (−3) = ?",
          choix: ["27", "−27", "9", "−9"],
          bonneReponse: 1,
          explication: "Trois facteurs négatifs (nombre impair) : le résultat est négatif. 3 × 3 × 3 = 27, donc −27.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule 5 × (−4) + (−3) × (−2).",
          reponse: "−14",
          explication: "5 × (−4) = −20 et (−3) × (−2) = 6. Donc −20 + 6 = −14.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule (−8 + 3) × (−2 − 4).",
          reponse: "30",
          explication: "(−8 + 3) = −5 et (−2 − 4) = −6. Donc (−5) × (−6) = 30.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un ballon perd 4 m d'altitude chaque minute pendant 6 minutes, en partant de l'altitude 0. Exprime son altitude finale par un produit de deux relatifs, puis calcule-la.",
          reponse: "(−4) × 6 = −24, donc l'altitude finale est −24 m.",
          explication: "La perte d'altitude est de −4 m à chaque minute, répétée 6 fois : (−4) × 6 = −24.",
        },
      ],
    },
    {
      titre: "Examen 2 — Multiplication et division des relatifs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "(−9) ÷ 3 = ?",
          choix: ["−3", "3", "−27", "27"],
          bonneReponse: 0,
          explication: "Signes différents : le résultat est négatif. 9 ÷ 3 = 3, donc (−9) ÷ 3 = −3.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule (−7) × (−9).",
          reponse: "63",
          explication: "Signes identiques : le résultat est positif. 7 × 9 = 63.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel est le signe de (−4) × 5 × (−1) × (−3) ?",
          choix: ["Positif", "Négatif", "Nul", "Impossible à déterminer"],
          bonneReponse: 1,
          explication: "Il y a trois facteurs négatifs (−4, −1, −3), un nombre impair, donc le résultat est négatif.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule (−72) ÷ (−8) − 5.",
          reponse: "4",
          explication: "(−72) ÷ (−8) = 9 (signes identiques). Puis 9 − 5 = 4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule 3 × (−2)³.",
          reponse: "−24",
          explication: "(−2)³ = −8. Puis 3 × (−8) = −24.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un ascenseur descend de 2 étages à chaque déplacement, pendant 5 déplacements successifs, en partant de l'étage 0. Exprime sa position finale par un produit de relatifs, puis calcule-la.",
          reponse: "(−2) × 5 = −10, l'ascenseur se trouve à l'étage −10.",
          explication: "Chaque déplacement fait perdre 2 étages, soit −2, répété 5 fois : (−2) × 5 = −10.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Règle des signes : signes identiques → résultat positif ; signes différents → résultat négatif.",
    "On multiplie ou on divise d'abord les distances à zéro, puis on applique la règle du signe.",
    "Avec plusieurs facteurs : on compte le nombre de signes négatifs. Pair → résultat positif, impair → résultat négatif.",
    "Priorités opératoires inchangées : × et ÷ avant + et − ; les parenthèses restent toujours prioritaires.",
    "Piège classique : −3² = −9 (le signe s'applique après le carré) alors que (−3)² = 9.",
    "Diviser par 0 est toujours impossible, quel que soit le signe du nombre.",
  ],
};

export default chapitre;
