import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "pression",
  titre: "La pression",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Comprendre la notion de pression, connaître son unité (le pascal), savoir mesurer une pression, découvrir la pression atmosphérique et la relation entre pression et volume d'un gaz à température constante.",
  objectifs: [
    "Définir la pression comme une force exercée sur une surface",
    "Connaître l'unité de pression, le pascal (Pa), et utiliser la formule P = F / S",
    "Comprendre ce qu'est la pression atmosphérique et savoir la mesurer avec un baromètre",
    "Savoir mesurer la pression d'un gaz avec un manomètre",
    "Comprendre la relation entre pression et volume d'un gaz à température constante (loi de Boyle-Mariotte)",
  ],
  slides: [
    {
      titre: "Qu'est-ce que la pression ?",
      illustration: "🖐️",
      visuel: "Force répartie sur une surface",
      contenu: [
        "La pression traduit l'effet d'une force répartie sur une surface",
        "À force égale, plus la surface est petite, plus la pression est grande",
        "Exemple : un talon aiguille marque plus le sol qu'une chaussure plate, à poids égal",
        "La pression s'exerce aussi bien dans les liquides et les gaz que sur les solides",
      ],
      voixOff:
        "La pression traduit l'effet d'une force qui se répartit sur une surface. À force égale, plus la surface sur laquelle elle s'applique est petite, plus la pression exercée est grande. C'est pour cela qu'un talon aiguille marque bien plus le sol qu'une chaussure à semelle plate, alors que la personne pèse exactement le même poids. La notion de pression s'applique aussi bien aux solides qu'aux liquides et aux gaz.",
    },
    {
      titre: "L'unité de pression : le pascal",
      illustration: "🧮",
      visuel: "P = F / S",
      contenu: [
        "La pression P se calcule avec la formule P = F / S",
        "F : force en newtons (N), S : surface en mètres carrés (m²)",
        "L'unité de pression est le pascal, symbole Pa (1 Pa = 1 N/m²)",
        "Le pascal est une unité petite : on utilise souvent l'hectopascal (1 hPa = 100 Pa) ou le bar (1 bar = 100 000 Pa)",
      ],
      voixOff:
        "La pression, notée P, se calcule en divisant la force F, exprimée en newtons, par la surface S sur laquelle elle s'applique, exprimée en mètres carrés. L'unité de pression est le pascal, de symbole Pa, en hommage au scientifique Blaise Pascal : un pascal correspond à une force d'un newton répartie sur une surface d'un mètre carré. Le pascal étant une unité assez petite pour un usage courant, on utilise souvent l'hectopascal, qui vaut cent pascals, ou le bar, qui vaut cent mille pascals.",
    },
    {
      titre: "La pression atmosphérique",
      illustration: "🌍",
      visuel: "P atm ≈ 1013 hPa",
      contenu: [
        "L'air qui nous entoure exerce une pression sur tout ce qu'il touche : la pression atmosphérique",
        "Au niveau de la mer, elle vaut environ 1013 hPa (soit 101 300 Pa)",
        "Elle diminue avec l'altitude : il y a moins d'air au-dessus de nous en montagne",
        "C'est pour cela que l'air se raréfie en haute montagne",
      ],
      voixOff:
        "L'atmosphère qui nous entoure, bien qu'invisible, exerce une pression sur tout ce qu'elle touche : c'est la pression atmosphérique. Au niveau de la mer, elle vaut environ mille treize hectopascals, soit cent un mille trois cents pascals. Cette pression diminue avec l'altitude, car il y a de moins en moins d'air au-dessus de nous à mesure que l'on monte : c'est pour cette raison que l'air se raréfie en haute montagne, ce qui rend la respiration plus difficile.",
    },
    {
      titre: "Mesurer une pression : baromètre et manomètre",
      illustration: "📊",
      visuel: "Baromètre • Manomètre",
      contenu: [
        "Le baromètre mesure la pression atmosphérique",
        "Le manomètre mesure la pression d'un gaz dans une enceinte fermée (pneu, bouteille de plongée...)",
        "Une baisse de pression atmosphérique annonce souvent un temps pluvieux",
        "Un pneu de voiture est gonflé à environ 2 à 2,5 bar",
      ],
      voixOff:
        "Pour mesurer la pression atmosphérique, on utilise un baromètre : une baisse de pression annonce souvent l'arrivée d'un temps pluvieux, tandis qu'une hausse annonce plutôt du beau temps. Pour mesurer la pression d'un gaz enfermé dans une enceinte, comme un pneu ou une bouteille de plongée, on utilise un manomètre. À titre d'exemple, un pneu de voiture est habituellement gonflé à une pression d'environ deux à deux virgule cinq bars.",
    },
    {
      titre: "Un gaz enfermé exerce une pression",
      illustration: "🎈",
      visuel: "Chocs des molécules sur les parois",
      contenu: [
        "Les molécules d'un gaz sont en mouvement permanent et désordonné",
        "Elles frappent sans cesse les parois du récipient qui les contient",
        "C'est l'ensemble de ces chocs qui produit la pression du gaz",
        "Plus les chocs sont nombreux ou violents, plus la pression est grande",
      ],
      voixOff:
        "À l'échelle microscopique, les molécules d'un gaz sont en mouvement permanent et désordonné, se déplaçant dans toutes les directions à grande vitesse. Lorsqu'elles rencontrent la paroi du récipient qui les contient, elles la percutent, puis rebondissent. C'est l'ensemble de ces innombrables chocs qui produit ce que l'on appelle la pression du gaz. Plus les chocs sont nombreux ou violents, plus la pression est grande.",
    },
    {
      titre: "Pression et volume d'un gaz",
      illustration: "🔄",
      visuel: "P × V = constante (à température constante)",
      contenu: [
        "À température constante, si l'on diminue le volume d'un gaz, sa pression augmente",
        "À température constante, si l'on augmente le volume d'un gaz, sa pression diminue",
        "C'est la loi de Boyle-Mariotte : le produit P × V reste constant",
        "Explication microscopique : dans un volume plus petit, les chocs sur les parois sont plus fréquents",
      ],
      voixOff:
        "Il existe une relation entre la pression et le volume d'un gaz, à température constante : c'est la loi de Boyle-Mariotte. Si l'on comprime un gaz, c'est-à-dire si l'on diminue son volume, sa pression augmente. À l'inverse, si l'on augmente son volume, sa pression diminue. Le produit de la pression par le volume reste alors constant. On comprend facilement pourquoi grâce au modèle des chocs : dans un volume plus petit, les molécules percutent les parois plus souvent, donc la pression augmente.",
    },
    {
      titre: "La pression dans la vie courante",
      illustration: "🚲",
      visuel: "Pneu • Seringue • Ventouse • Plongée",
      contenu: [
        "Gonfler un pneu, c'est enfermer de plus en plus d'air dans un volume presque constant : la pression augmente",
        "Boucher la sortie d'une seringue et pousser le piston comprime l'air : la pression augmente, le piston résiste",
        "Une ventouse colle grâce à la pression atmosphérique qui la plaque contre la surface",
        "Un plongeur ressent une pression plus forte en profondeur, car l'eau au-dessus de lui pèse davantage",
      ],
      voixOff:
        "La pression est présente partout dans la vie courante. Gonfler un pneu revient à enfermer de plus en plus d'air dans un volume presque constant : la pression augmente. Si l'on bouche la sortie d'une seringue et que l'on pousse le piston, on comprime l'air à l'intérieur, et le piston résiste de plus en plus. Une ventouse tient grâce à la pression atmosphérique qui la plaque contre la surface. Et un plongeur ressent une pression de plus en plus forte à mesure qu'il descend, car l'eau au-dessus de lui devient de plus en plus lourde.",
    },
    {
      titre: "Sécurité : les récipients sous pression",
      illustration: "⚠️",
      visuel: "Attention : danger !",
      contenu: [
        "Une bombe aérosol, une cocotte-minute ou une bouteille de gaz contiennent un gaz ou un liquide sous pression",
        "Il ne faut jamais les percer, les chauffer fortement, ou les jeter au feu",
        "Une trop forte pression peut faire exploser le récipient",
        "Les valves et soupapes de sécurité limitent la pression maximale",
      ],
      voixOff:
        "Certains objets du quotidien contiennent un gaz ou un liquide sous pression, comme une bombe aérosol, une cocotte-minute ou une bouteille de gaz. Il est très dangereux de les percer, de les chauffer fortement, ou de les jeter au feu : la pression à l'intérieur augmenterait fortement et pourrait faire exploser le récipient. C'est pourquoi ces objets sont équipés de valves ou de soupapes de sécurité, qui limitent la pression maximale en laissant échapper le gaz avant qu'elle ne devienne dangereuse.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Pression P = F / S, en pascals (Pa) ; 1 Pa = 1 N/m²",
        "Pression atmosphérique au niveau de la mer ≈ 1013 hPa, diminue avec l'altitude",
        "Baromètre (pression atmosphérique), manomètre (pression d'un gaz enfermé)",
        "À température constante, quand le volume d'un gaz diminue, sa pression augmente (et inversement)",
      ],
      voixOff:
        "Résumons. La pression se calcule avec la formule P égale F sur S, et s'exprime en pascals. La pression atmosphérique, au niveau de la mer, vaut environ mille treize hectopascals, et diminue avec l'altitude. On la mesure avec un baromètre, tandis qu'un manomètre mesure la pression d'un gaz enfermé. Enfin, retiens la loi de Boyle-Mariotte : à température constante, si l'on diminue le volume d'un gaz, sa pression augmente, et inversement.",
    },
  ],
  fiche: {
    intro:
      "La pression traduit l'effet d'une force répartie sur une surface. Elle s'exprime en pascals et se retrouve partout : dans l'air qui nous entoure (pression atmosphérique), dans les gaz enfermés (pneu, bouteille), et dans les liquides.",
    sections: [
      {
        titre: "Définir la pression",
        points: [
          "La pression traduit l'effet d'une force répartie sur une surface",
          "Formule : P = F / S (F en newtons, S en mètres carrés)",
          "Unité : le pascal (Pa) ; 1 Pa = 1 N/m² ; sous-multiples : hectopascal (1 hPa = 100 Pa), bar (1 bar = 100 000 Pa)",
        ],
      },
      {
        titre: "La pression atmosphérique",
        points: [
          "L'air exerce une pression sur tout ce qu'il touche : la pression atmosphérique",
          "Au niveau de la mer : environ 1013 hPa",
          "Elle diminue avec l'altitude (moins d'air au-dessus de nous)",
          "Se mesure avec un baromètre",
        ],
      },
      {
        titre: "La pression d'un gaz enfermé",
        points: [
          "Due aux chocs incessants des molécules du gaz sur les parois du récipient",
          "Se mesure avec un manomètre",
          "Exemples : pneu de voiture (≈ 2 à 2,5 bar), bouteille de plongée",
        ],
      },
      {
        titre: "Pression et volume : la loi de Boyle-Mariotte",
        points: [
          "À température constante, P × V reste constant",
          "Diminuer le volume d'un gaz augmente sa pression (compression)",
          "Augmenter le volume d'un gaz diminue sa pression",
          "Sécurité : ne jamais percer ou chauffer un récipient sous pression",
        ],
      },
    ],
    audio:
      "Fiche de révision : la pression. La pression traduit l'effet d'une force répartie sur une surface : elle se calcule avec la formule P égale F sur S, où F est la force en newtons et S la surface en mètres carrés. Elle s'exprime en pascals. L'air qui nous entoure exerce lui aussi une pression, la pression atmosphérique, qui vaut environ mille treize hectopascals au niveau de la mer et qui diminue avec l'altitude ; on la mesure avec un baromètre. La pression d'un gaz enfermé, comme dans un pneu, est due aux chocs incessants des molécules sur les parois du récipient ; on la mesure avec un manomètre. Enfin, la loi de Boyle-Mariotte relie la pression et le volume d'un gaz à température constante : si l'on diminue le volume, la pression augmente, et inversement, le produit de la pression par le volume restant constant. Il faut toujours faire attention aux récipients sous pression, qui peuvent exploser s'ils sont percés ou chauffés fortement.",
  },
  memoCards: [
    { recto: "Formule de la pression ?", verso: "P = F / S (F : force en newtons, S : surface en m²)." },
    { recto: "Unité de la pression ?", verso: "Le pascal (Pa). 1 Pa = 1 N/m². On utilise aussi l'hectopascal (100 Pa) et le bar (100 000 Pa)." },
    { recto: "Valeur de la pression atmosphérique au niveau de la mer ?", verso: "Environ 1013 hPa (101 300 Pa)." },
    { recto: "Comment évolue la pression atmosphérique avec l'altitude ?", verso: "Elle diminue : il y a moins d'air au-dessus de nous en altitude." },
    { recto: "Quel appareil mesure la pression atmosphérique ?", verso: "Le baromètre." },
    { recto: "Quel appareil mesure la pression d'un gaz enfermé ?", verso: "Le manomètre." },
    { recto: "D'où vient la pression d'un gaz enfermé, à l'échelle microscopique ?", verso: "Des chocs incessants des molécules du gaz sur les parois du récipient." },
    { recto: "Que dit la loi de Boyle-Mariotte ?", verso: "À température constante, P × V reste constant : diminuer le volume augmente la pression, et inversement." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'unité de la pression est :",
      choix: ["le newton", "le pascal", "le mètre carré", "le bar uniquement"],
      bonneReponse: 1,
      explication: "L'unité légale de pression est le pascal (Pa). Le bar et l'hectopascal sont des unités dérivées, plus pratiques dans la vie courante.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La formule de la pression est :",
      choix: ["P = F × S", "P = F / S", "P = S / F", "P = F + S"],
      bonneReponse: 1,
      explication: "P = F / S, avec F en newtons et S en mètres carrés, donne une pression en pascals.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Quel appareil utilise-t-on pour mesurer la pression atmosphérique ?",
      reponse: "Le baromètre.",
      explication: "Le manomètre, lui, sert à mesurer la pression d'un gaz enfermé (pneu, bouteille...).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La pression atmosphérique au niveau de la mer vaut environ :",
      choix: ["10 Pa", "1013 hPa", "1013 Pa", "100 bar"],
      bonneReponse: 1,
      explication: "La pression atmosphérique moyenne au niveau de la mer est d'environ 1013 hectopascals, soit 101 300 pascals.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Une force de 200 N s'exerce sur une surface de 0,5 m². Calcule la pression exercée.",
      reponse: "P = F / S = 200 / 0,5 = 400 Pa",
      explication: "On applique directement la formule P = F / S avec des unités cohérentes (N et m²).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "À force égale, si l'on diminue la surface de contact, la pression :",
      choix: ["diminue", "augmente", "reste identique", "devient nulle"],
      bonneReponse: 1,
      explication: "P = F / S : à force constante, réduire S fait augmenter P. C'est pour cela qu'un talon fin marque plus le sol qu'une semelle large.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique, à l'échelle des molécules, pourquoi un gaz enfermé exerce une pression sur les parois de son récipient.",
      reponse:
        "Les molécules du gaz sont en mouvement permanent et désordonné. Elles frappent sans cesse les parois du récipient, et c'est l'ensemble de ces chocs qui produit la pression.",
      explication: "C'est le modèle moléculaire qui explique l'origine microscopique de la pression d'un gaz.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "À température constante, si l'on diminue le volume d'un gaz enfermé :",
      choix: [
        "sa pression diminue",
        "sa pression augmente",
        "sa pression reste identique",
        "le gaz disparaît",
      ],
      bonneReponse: 1,
      explication: "Loi de Boyle-Mariotte : comprimer un gaz (réduire son volume) à température constante augmente sa pression.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un skieur de poids 700 N chausse des skis de surface totale 0,4 m². Sans les skis, ses chaussures ont une surface totale au sol de 0,04 m². Calcule la pression exercée sur la neige dans les deux cas, et explique l'intérêt des skis.",
      reponse:
        "Avec skis : P = 700 / 0,4 = 1750 Pa. Sans skis : P = 700 / 0,04 = 17 500 Pa. Les skis répartissent le poids sur une surface dix fois plus grande, ce qui divise la pression par dix : le skieur s'enfonce beaucoup moins dans la neige.",
      explication: "À force égale, augmenter la surface de contact diminue fortement la pression exercée.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une seringue fermée contient de l'air à un volume de 20 mL sous une pression de 1000 hPa. On pousse le piston jusqu'à un volume de 10 mL, sans changement de température. Quelle est la nouvelle pression, sachant que P × V reste constant ?",
      reponse: "P1 × V1 = P2 × V2, donc 1000 × 20 = P2 × 10, donc P2 = 20 000 / 10 = 2000 hPa.",
      explication: "En divisant le volume par 2, la pression est multipliée par 2 : c'est la loi de Boyle-Mariotte.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Pourquoi ne faut-il jamais jeter une bombe aérosol vide dans le feu ?",
      choix: [
        "Parce qu'elle est toujours pleine de liquide dangereux",
        "Parce que la chaleur augmente la pression du gaz restant à l'intérieur, risquant de faire exploser le récipient",
        "Parce que le métal fond instantanément sans risque",
        "Il n'y a aucun risque, une bombe vide est totalement sûre",
      ],
      bonneReponse: 1,
      explication: "Même « vide » d'usage, l'aérosol contient encore du gaz sous pression : le chauffer augmente cette pression jusqu'à un risque d'explosion.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un plongeur descend en profondeur. Explique pourquoi la pression qu'il subit augmente avec la profondeur.",
      reponse:
        "Plus le plongeur descend, plus la colonne d'eau au-dessus de lui est haute et donc plus elle est lourde. Le poids de cette eau, ajouté à la pression atmosphérique en surface, augmente la pression totale subie par le plongeur.",
      explication: "La pression dans un liquide augmente avec la profondeur, car elle dépend du poids du liquide situé au-dessus du point considéré.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est l'unité légale de la pression ?",
      choix: ["le newton", "le pascal", "le litre", "le mètre"],
      bonneReponse: 1,
      explication: "La pression s'exprime en pascals (Pa).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris la formule de la pression avec les unités de chaque grandeur.",
      reponse: "P = F / S, avec P en pascals (Pa), F en newtons (N), S en mètres carrés (m²).",
      explication: "C'est la relation fondamentale entre force, surface et pression.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment évolue la pression atmosphérique quand on monte en altitude ?",
      reponse: "Elle diminue, car il y a de moins en moins d'air au-dessus de nous.",
      explication: "C'est pourquoi l'air se raréfie en haute montagne.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que dit la loi de Boyle-Mariotte ?",
      choix: [
        "La pression est indépendante du volume",
        "À température constante, le produit P × V reste constant",
        "Le volume d'un gaz est toujours constant",
        "La pression d'un gaz est toujours nulle",
      ],
      bonneReponse: 1,
      explication: "Comprimer un gaz (diminuer son volume) à température constante augmente sa pression, en gardant P × V constant.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel appareil utilise-t-on pour mesurer la pression d'un pneu de voiture ?",
      reponse: "Un manomètre.",
      explication: "Le manomètre mesure la pression d'un gaz enfermé dans une enceinte, comme un pneu ou une bouteille de plongée.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La pression",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "1 hectopascal (hPa) est égal à :",
          choix: ["1 Pa", "10 Pa", "100 Pa", "1000 Pa"],
          bonneReponse: 2,
          explication: "Le préfixe « hecto » signifie cent : 1 hPa = 100 Pa.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce que la pression atmosphérique ?",
          reponse: "C'est la pression exercée par l'air qui nous entoure sur tout ce qu'il touche.",
          explication: "Elle vaut environ 1013 hPa au niveau de la mer et diminue avec l'altitude.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une force de 60 N s'exerce sur une surface de 0,2 m². Quelle est la pression ?",
          choix: ["12 Pa", "30 Pa", "300 Pa", "0,003 Pa"],
          bonneReponse: 2,
          explication: "P = F / S = 60 / 0,2 = 300 Pa.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique, avec le modèle des chocs de molécules, ce qui se passe quand on comprime un gaz dans un récipient fermé (volume qui diminue, température constante).",
          reponse:
            "En diminuant le volume, les molécules du gaz sont plus rapprochées et disposent de moins d'espace. Elles percutent donc les parois du récipient plus fréquemment, ce qui augmente la pression du gaz.",
          explication: "C'est l'explication microscopique de la loi de Boyle-Mariotte.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un gaz occupe un volume de 4 L sous une pression de 2 bar. On le comprime à volume constant de température jusqu'à un volume de 1 L. Calcule la nouvelle pression.",
          reponse: "P1 × V1 = P2 × V2, donc 2 × 4 = P2 × 1, donc P2 = 8 bar.",
          explication: "En divisant le volume par 4, la pression est multipliée par 4, conformément à la loi de Boyle-Mariotte.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Pourquoi les alpinistes en très haute altitude doivent-ils souvent utiliser des bouteilles d'oxygène ?",
          choix: [
            "Parce que la pression atmosphérique, très faible en altitude, rend l'air trop raréfié pour respirer normalement",
            "Parce qu'il n'y a plus du tout d'air en montagne",
            "Parce que la pression atmosphérique est plus forte en altitude",
            "Cela n'a aucun rapport avec la pression",
          ],
          bonneReponse: 0,
          explication: "En haute altitude, la pression atmosphérique diminue fortement, l'air se raréfie et devient insuffisant pour une respiration normale.",
        },
      ],
    },
    {
      titre: "Examen 2 — La pression",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel appareil mesure la pression d'un gaz enfermé dans une bouteille ?",
          choix: ["Le baromètre", "Le manomètre", "Le thermomètre", "Le voltmètre"],
          bonneReponse: 1,
          explication: "Le manomètre mesure la pression d'un gaz enfermé, contrairement au baromètre qui mesure la pression atmosphérique.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la formule de la pression et précise l'unité de chaque grandeur.",
          reponse: "P = F / S. P en pascals (Pa), F en newtons (N), S en mètres carrés (m²).",
          explication: "1 Pa correspond à une force de 1 N répartie sur une surface de 1 m².",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "À force constante, si la surface de contact double, la pression :",
          choix: ["double", "est divisée par deux", "reste identique", "devient nulle"],
          bonneReponse: 1,
          explication: "P = F / S : si S double à F constant, P est divisée par deux.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une raquette de neige répartit le poids d'un randonneur sur une plus grande surface que sa chaussure seule. Explique pourquoi cela l'empêche de s'enfoncer dans la neige.",
          reponse:
            "À poids (force) identique, augmenter la surface de contact avec la raquette diminue la pression exercée sur la neige (P = F / S). La neige, moins comprimée localement, supporte mieux le randonneur qui s'enfonce donc moins.",
          explication: "C'est le même principe que les skis ou les pneus larges : augmenter la surface diminue la pression.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On enferme 500 mL d'air dans une seringue fermée, à une pression de 1 bar. On tire le piston pour porter le volume à 1000 mL, sans changer la température. Calcule la nouvelle pression.",
          reponse: "P1 × V1 = P2 × V2, donc 1 × 500 = P2 × 1000, donc P2 = 0,5 bar.",
          explication: "En doublant le volume, la pression est divisée par deux, conformément à la loi de Boyle-Mariotte.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question:
            "Quel danger principal présente une cocotte-minute que l'on chaufferait en bloquant sa soupape de sécurité ?",
          choix: [
            "Aucun danger, la cocotte est parfaitement étanche",
            "La pression intérieure augmenterait sans limite et pourrait faire exploser la cocotte",
            "La nourriture cuirait plus lentement",
            "La température resterait toujours identique",
          ],
          bonneReponse: 1,
          explication: "Sans soupape pour évacuer l'excès de gaz, la pression à l'intérieur augmenterait dangereusement avec la chaleur, jusqu'au risque d'explosion.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La pression traduit l'effet d'une force répartie sur une surface : P = F / S, en pascals (Pa).",
    "À force égale, plus la surface est petite, plus la pression est grande.",
    "La pression atmosphérique (≈ 1013 hPa au niveau de la mer) diminue avec l'altitude ; elle se mesure avec un baromètre.",
    "La pression d'un gaz enfermé provient des chocs des molécules sur les parois ; elle se mesure avec un manomètre.",
    "Loi de Boyle-Mariotte : à température constante, P × V reste constant (diminuer le volume augmente la pression, et inversement).",
    "Sécurité : ne jamais percer ni chauffer fortement un récipient contenant un gaz sous pression (aérosol, cocotte-minute, bouteille de gaz).",
  ],
};

export default chapitre;
