import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "nombres-relatifs",
  titre: "Les nombres relatifs",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Découvrir les nombres relatifs, savoir les comparer, les placer sur une droite graduée, et apprendre à les additionner et à les soustraire.",
  objectifs: [
    "Comprendre ce qu'est un nombre relatif (positif, négatif, nul)",
    "Repérer un nombre relatif sur une droite graduée et déterminer sa distance à zéro",
    "Comparer des nombres relatifs entre eux",
    "Additionner deux nombres relatifs, de même signe ou de signes contraires",
    "Soustraire un nombre relatif en utilisant son opposé",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un nombre relatif ?",
      illustration: "➕➖",
      visuel: "+5 ; −3 ; 0",
      contenu: [
        "Un nombre relatif est un nombre positif ou négatif",
        "Le signe + peut être omis devant un nombre positif : +5 s'écrit aussi 5",
        "Le signe − est obligatoire devant un nombre négatif",
        "0 n'est ni positif ni négatif",
      ],
      voixOff:
        "Un nombre relatif est un nombre qui possède un signe : il peut être positif ou négatif. Devant un nombre positif, le signe plus peut être écrit ou omis : plus cinq s'écrit aussi simplement cinq. En revanche, devant un nombre négatif, le signe moins est obligatoire. Le nombre zéro, lui, n'est ni positif ni négatif.",
    },
    {
      titre: "La droite graduée",
      illustration: "📏",
      visuel: "←−3 −2 −1 0 1 2 3→",
      contenu: [
        "On place les nombres relatifs sur une droite graduée",
        "Les nombres positifs sont à droite de 0",
        "Les nombres négatifs sont à gauche de 0",
        "L'abscisse d'un point est le nombre relatif qui lui correspond",
      ],
      voixOff:
        "Les nombres relatifs se placent sur une droite graduée. Le nombre zéro est au centre. Les nombres positifs sont placés à droite de zéro, les nombres négatifs à gauche. Le nombre associé à un point de la droite s'appelle son abscisse.",
    },
    {
      titre: "Distance à zéro et nombres opposés",
      illustration: "↔️",
      visuel: "−7 et +7 sont opposés",
      contenu: [
        "La distance à zéro d'un nombre relatif est toujours positive",
        "La distance à zéro de −7 est 7 ; celle de +7 est aussi 7",
        "Deux nombres opposés ont la même distance à zéro mais des signes contraires",
        "Exemple : +4 et −4 sont opposés",
      ],
      voixOff:
        "Chaque nombre relatif a une distance à zéro : c'est sa distance sur la droite graduée, et elle est toujours positive. Par exemple, la distance à zéro de moins sept est sept. Deux nombres qui ont la même distance à zéro mais des signes contraires sont appelés des nombres opposés : plus quatre et moins quatre sont opposés.",
    },
    {
      titre: "Comparer des nombres relatifs",
      illustration: "⚖️",
      visuel: "−2 > −8",
      contenu: [
        "Sur la droite graduée, le plus grand nombre est le plus à droite",
        "Tout nombre positif est plus grand que tout nombre négatif",
        "Entre deux négatifs, le plus grand a la plus petite distance à zéro",
        "Exemple : −2 > −8 car −2 est plus proche de 0",
      ],
      voixOff:
        "Pour comparer deux nombres relatifs, on regarde leur position sur la droite graduée : le plus grand est celui qui est le plus à droite. Un nombre positif est toujours plus grand qu'un nombre négatif. Entre deux nombres négatifs, c'est celui qui a la plus petite distance à zéro qui est le plus grand : par exemple, moins deux est plus grand que moins huit.",
    },
    {
      titre: "Additionner deux relatifs de même signe",
      illustration: "➕",
      visuel: "(−3) + (−5) = −8",
      contenu: [
        "On additionne les distances à zéro",
        "On garde le signe commun aux deux nombres",
        "Exemple : (−3) + (−5) = −8",
        "Autre exemple : (+2) + (+6) = +8",
      ],
      voixOff:
        "Pour additionner deux nombres relatifs de même signe, on additionne leurs distances à zéro, et on garde ce signe commun. Moins trois plus moins cinq : on additionne trois et cinq, ce qui donne huit, et on garde le signe moins. Le résultat est moins huit.",
    },
    {
      titre: "Additionner deux relatifs de signes contraires",
      illustration: "⚡",
      visuel: "(+7) + (−2) = +5",
      contenu: [
        "On soustrait la plus petite distance à zéro de la plus grande",
        "On garde le signe du nombre qui a la plus grande distance à zéro",
        "Exemple : (+7) + (−2) = +5",
        "Autre exemple : (−9) + (+4) = −5",
      ],
      voixOff:
        "Quand les deux nombres ont des signes contraires, on soustrait la plus petite distance à zéro de la plus grande, et on garde le signe du nombre qui a la plus grande distance à zéro. Plus sept plus moins deux : sept moins deux égale cinq, et on garde le signe plus, car sept est plus grand que deux. Le résultat est plus cinq.",
    },
    {
      titre: "Soustraire un nombre relatif",
      illustration: "➖",
      visuel: "a − b = a + (−b)",
      contenu: [
        "Soustraire un nombre relatif revient à ajouter son opposé",
        "Exemple : (+3) − (+8) = (+3) + (−8) = −5",
        "Exemple : (−4) − (−6) = (−4) + (+6) = +2",
        "On applique ensuite les règles de l'addition",
      ],
      voixOff:
        "Soustraire un nombre relatif revient toujours à ajouter son opposé. Par exemple, plus trois moins plus huit devient plus trois plus moins huit, ce qui donne moins cinq. De même, moins quatre moins moins six devient moins quatre plus plus six, ce qui donne plus deux. Il suffit ensuite d'appliquer les règles de l'addition que l'on connaît déjà.",
    },
    {
      titre: "Les relatifs dans la vie de tous les jours",
      illustration: "🌡️",
      visuel: "−5°C ... +12°C",
      contenu: [
        "Températures : −5°C le matin, +12°C l'après-midi",
        "Altitudes : −155 m pour le niveau de la mer Morte",
        "Soldes bancaires : un compte peut être négatif (découvert)",
        "Étages : le sous-sol −1 est sous le rez-de-chaussée",
      ],
      voixOff:
        "Les nombres relatifs sont partout dans la vie courante. On les utilise pour les températures, par exemple moins cinq degrés le matin et plus douze degrés l'après-midi. On les utilise aussi pour les altitudes, comme moins cent cinquante-cinq mètres pour la mer Morte, pour les soldes bancaires, ou encore pour les étages en dessous du rez-de-chaussée.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Un nombre relatif est positif, négatif, ou nul",
        "Même signe : on additionne les distances, on garde le signe",
        "Signes contraires : on soustrait les distances, on garde le signe du plus grand",
        "Soustraire, c'est ajouter l'opposé : a − b = a + (−b)",
      ],
      voixOff:
        "Résumons l'essentiel. Un nombre relatif est positif, négatif, ou nul. Pour additionner deux nombres de même signe, on additionne leurs distances à zéro et on garde le signe commun. Pour des signes contraires, on soustrait les distances à zéro et on garde le signe du nombre qui a la plus grande distance. Enfin, soustraire un nombre relatif revient toujours à ajouter son opposé. Tu maîtrises maintenant les bases des nombres relatifs !",
    },
  ],
  fiche: {
    intro:
      "Un nombre relatif est un nombre positif, négatif ou nul. On le repère sur une droite graduée grâce à sa distance à zéro, et on sait le comparer, l'additionner et le soustraire.",
    sections: [
      {
        titre: "Vocabulaire et repérage",
        points: [
          "Un nombre relatif est positif, négatif ou nul (le signe + peut être omis)",
          "La distance à zéro d'un nombre relatif est sa distance sur la droite graduée (toujours positive)",
          "Deux nombres opposés ont la même distance à zéro mais des signes contraires (ex : +4 et −4)",
          "L'abscisse d'un point est le nombre relatif qui lui correspond sur la droite graduée",
        ],
      },
      {
        titre: "Comparaison",
        points: [
          "Sur la droite graduée, le plus grand nombre est le plus à droite",
          "Tout nombre positif est plus grand que tout nombre négatif",
          "Entre deux négatifs, le plus grand est celui qui a la plus petite distance à zéro (−2 > −8)",
        ],
      },
      {
        titre: "Addition de nombres relatifs",
        points: [
          "Même signe : on additionne les distances à zéro, on garde le signe commun. Ex : (−3) + (−5) = −8",
          "Signes contraires : on soustrait la plus petite distance à zéro de la plus grande, on garde le signe du nombre qui a la plus grande distance. Ex : (+7) + (−2) = +5",
        ],
      },
      {
        titre: "Soustraction de nombres relatifs",
        points: [
          "Soustraire un nombre relatif revient à ajouter son opposé : a − b = a + (−b)",
          "Ex : (+3) − (+8) = (+3) + (−8) = −5",
          "Ex : (−4) − (−6) = (−4) + (+6) = +2",
        ],
      },
    ],
    audio:
      "Fiche de révision : les nombres relatifs. Un nombre relatif est un nombre positif, négatif ou nul ; devant un nombre positif, le signe plus peut être omis, mais devant un nombre négatif, le signe moins est obligatoire. On repère les nombres relatifs sur une droite graduée : les positifs à droite de zéro, les négatifs à gauche. La distance à zéro d'un nombre relatif est toujours positive ; deux nombres opposés ont la même distance à zéro mais des signes contraires, comme plus quatre et moins quatre. Pour comparer deux nombres relatifs, le plus grand est celui qui est placé le plus à droite sur la droite graduée : tout nombre positif est plus grand que tout nombre négatif, et entre deux négatifs, le plus grand est celui qui a la plus petite distance à zéro. Pour additionner deux nombres relatifs de même signe, on additionne leurs distances à zéro et on garde le signe commun. Pour additionner deux nombres relatifs de signes contraires, on soustrait la plus petite distance à zéro de la plus grande, et on garde le signe du nombre qui a la plus grande distance à zéro. Enfin, soustraire un nombre relatif revient toujours à ajouter son opposé.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un nombre relatif ?", verso: "Un nombre positif ou négatif : par exemple +5, −3, ou 0. Le signe + est parfois sous-entendu." },
    { recto: "Qu'est-ce que la distance à zéro d'un nombre relatif ?", verso: "Sa distance sur la droite graduée, toujours positive. Ex : la distance à zéro de −7 est 7." },
    { recto: "Qu'est-ce que deux nombres opposés ?", verso: "Deux nombres qui ont la même distance à zéro mais des signes contraires. Ex : +4 et −4." },
    { recto: "Comment comparer deux nombres relatifs ?", verso: "Le plus grand est le plus à droite sur la droite graduée. Tout positif > tout négatif. Entre deux négatifs, le plus grand a la plus petite distance à zéro (−2 > −8)." },
    { recto: "Comment additionner deux relatifs de même signe ?", verso: "On additionne les distances à zéro et on garde le signe commun. Ex : (−3) + (−5) = −8." },
    { recto: "Comment additionner deux relatifs de signes contraires ?", verso: "On soustrait la plus petite distance à zéro de la plus grande, et on garde le signe du nombre qui a la plus grande distance à zéro. Ex : (+7) + (−2) = +5." },
    { recto: "Comment soustraire un nombre relatif ?", verso: "Soustraire un nombre, c'est ajouter son opposé : a − b = a + (−b). Ex : (−4) − (−6) = (−4) + (+6) = +2." },
    { recto: "Donne un exemple concret de nombres relatifs.", verso: "Les températures (−5°C le matin), les altitudes (−155 m pour la mer Morte), les étages sous le rez-de-chaussée." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la distance à zéro du nombre −9 ?",
      choix: ["−9", "9", "0", "18"],
      bonneReponse: 1,
      explication: "La distance à zéro est toujours positive : la distance à zéro de −9 est 9.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est l'opposé de +6 ?",
      choix: ["+6", "−6", "0", "−12"],
      bonneReponse: 1,
      explication: "L'opposé a la même distance à zéro (6) mais un signe contraire : c'est −6.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Compare −3 et −8 à l'aide du symbole > ou <.",
      reponse: "−3 > −8",
      explication: "−3 a une distance à zéro plus petite que −8 (3 < 8), donc −3 est plus proche de zéro, donc plus grand.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Parmi ces nombres, lequel est le plus grand ?",
      choix: ["−12", "−9", "−1", "+2"],
      bonneReponse: 3,
      explication: "+2 est positif, donc il est plus grand que tous les nombres négatifs proposés.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−5) + (−7).",
      reponse: "−12",
      explication: "Même signe : on additionne les distances à zéro (5 + 7 = 12) et on garde le signe commun (−). Résultat : −12.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (+9) + (−4).",
      reponse: "+5",
      explication: "Signes contraires : on soustrait les distances à zéro (9 − 4 = 5) et on garde le signe du nombre qui a la plus grande distance, +9. Résultat : +5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Calcule (−6) + (+2).",
      choix: ["−4", "−8", "+4", "+8"],
      bonneReponse: 0,
      explication: "Signes contraires : distances 6 et 2, on soustrait (6 − 2 = 4), on garde le signe du nombre ayant la plus grande distance, −6. Résultat : −4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (+3) − (+8).",
      reponse: "−5",
      explication: "Soustraire +8 revient à ajouter −8 : (+3) + (−8). Signes contraires : 8 − 3 = 5, on garde le signe −. Résultat : −5.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−4) − (−6).",
      reponse: "+2",
      explication: "Soustraire −6 revient à ajouter +6 : (−4) + (+6). Signes contraires : 6 − 4 = 2, on garde le signe du nombre ayant la plus grande distance, +6. Résultat : +2.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Ce matin, il faisait −5°C. Cet après-midi, il fait +12°C. Quelle est la variation de température entre le matin et l'après-midi ?",
      choix: ["7°C", "17°C", "−17°C", "12°C"],
      bonneReponse: 1,
      explication: "La variation est (+12) − (−5) = (+12) + (+5) = +17. La température a augmenté de 17°C.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un plongeur se trouve à −25 m sous la surface. Il remonte de 10 m. À quelle profondeur se trouve-t-il maintenant ?",
      reponse: "−15 m",
      explication: "−25 + 10 = −25 + (+10). Signes contraires : distances 25 et 10, on soustrait (25 − 10 = 15), on garde le signe du nombre ayant la plus grande distance, −25. Résultat : −15 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule (−7) + (+15) + (−4).",
      reponse: "+4",
      explication: "On calcule de gauche à droite : (−7) + (+15) = +8 (signes contraires, 15 − 7 = 8, signe +). Puis (+8) + (−4) = +4 (signes contraires, 8 − 4 = 4, signe +).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la distance à zéro de −15 ?",
      choix: ["−15", "0", "15", "30"],
      bonneReponse: 2,
      explication: "La distance à zéro est toujours positive : la distance à zéro de −15 est 15.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel est l'opposé de −20 ?",
      reponse: "+20",
      explication: "L'opposé a la même distance à zéro (20) mais un signe contraire.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule (−9) + (−3).",
      reponse: "−12",
      explication: "Même signe : distances 9 + 3 = 12, on garde le signe −.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Calcule (+6) + (−10).",
      choix: ["−4", "−16", "+4", "+16"],
      bonneReponse: 0,
      explication: "Signes contraires : distances 10 et 6, on soustrait (10 − 6 = 4), on garde le signe du nombre ayant la plus grande distance, −10. Résultat : −4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Calcule (−2) − (+7).",
      reponse: "−9",
      explication: "Soustraire +7 revient à ajouter −7 : (−2) + (−7). Même signe : distances 2 + 7 = 9, on garde le signe −. Résultat : −9.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les nombres relatifs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est l'opposé de −8 ?",
          choix: ["+8", "−8", "0", "−16"],
          bonneReponse: 0,
          explication: "L'opposé a la même distance à zéro (8) mais un signe contraire : c'est +8.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quelle est la distance à zéro de +14 ?",
          reponse: "14",
          explication: "La distance à zéro est toujours positive, quel que soit le signe du nombre.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Range dans l'ordre croissant : −6 ; +2 ; −1.",
          reponse: "−6 < −1 < +2",
          explication: "−6 est le plus à gauche sur la droite graduée ; −1 a une distance à zéro plus petite que −6 ; +2 est positif donc le plus grand.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule (−14) + (+9).",
          reponse: "−5",
          explication: "Signes contraires : distances 14 et 9, on soustrait (14 − 9 = 5), on garde le signe du nombre ayant la plus grande distance, −14. Résultat : −5.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule (+5) − (−3).",
          reponse: "+8",
          explication: "Soustraire −3 revient à ajouter +3 : (+5) + (+3). Même signe : distances 5 + 3 = 8, on garde le signe +. Résultat : +8.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un sous-marin est à −120 m. Il remonte de 45 m, puis descend de 30 m. À quelle profondeur se trouve-t-il finalement ?",
          reponse: "−105 m",
          explication: "−120 + 45 = −75 (signes contraires, 120 − 45 = 75, signe −). Puis −75 − 30 = −75 + (−30) = −105 (même signe, 75 + 30 = 105, signe −).",
        },
      ],
    },
    {
      titre: "Examen 2 — Les nombres relatifs",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle affirmation est vraie ?",
          choix: ["−3 > −10", "−10 > −3", "−3 = −10", "−10 > 3"],
          bonneReponse: 0,
          explication: "−3 a une distance à zéro plus petite que −10 (3 < 10), donc −3 est plus proche de zéro, donc plus grand : −3 > −10.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel est l'opposé de +17 ?",
          reponse: "−17",
          explication: "L'opposé a la même distance à zéro (17) mais un signe contraire.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule (−8) + (−15).",
          reponse: "−23",
          explication: "Même signe : distances 8 + 15 = 23, on garde le signe −.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Calcule (+7) + (−20).",
          choix: ["−13", "+13", "−27", "+27"],
          bonneReponse: 0,
          explication: "Signes contraires : distances 20 et 7, on soustrait (20 − 7 = 13), on garde le signe du nombre ayant la plus grande distance, −20. Résultat : −13.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Calcule (−9) − (+6).",
          reponse: "−15",
          explication: "Soustraire +6 revient à ajouter −6 : (−9) + (−6). Même signe : distances 9 + 6 = 15, on garde le signe −. Résultat : −15.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Ce matin, il faisait −4°C. La température a augmenté de 9°C dans la journée, puis a baissé de 6°C en soirée. Quelle température fait-il en soirée ?",
          reponse: "−1°C",
          explication: "−4 + 9 = +5 (signes contraires, 9 − 4 = 5, signe +). Puis +5 − 6 = +5 + (−6) = −1 (signes contraires, 6 − 5 = 1, signe −).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un nombre relatif est positif, négatif ou nul ; le signe + est parfois sous-entendu.",
    "La distance à zéro est toujours positive ; deux nombres opposés ont la même distance à zéro mais des signes contraires.",
    "Pour comparer, le plus grand nombre est le plus à droite sur la droite graduée ; tout positif est plus grand que tout négatif.",
    "Même signe : on additionne les distances à zéro et on garde le signe commun.",
    "Signes contraires : on soustrait les distances à zéro et on garde le signe du nombre qui a la plus grande distance.",
    "Soustraire un nombre relatif, c'est toujours ajouter son opposé : a − b = a + (−b).",
  ],
};

export default chapitre;
