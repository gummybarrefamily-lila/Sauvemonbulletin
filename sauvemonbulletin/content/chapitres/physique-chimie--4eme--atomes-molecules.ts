import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "atomes-molecules",
  titre: "Atomes et molécules",
  matiere: "physique-chimie",
  niveau: "4eme",
  description:
    "Comprendre que la matière est constituée d'atomes et de molécules, savoir lire et interpréter une formule chimique, et expliquer les états de la matière et les transformations chimiques avec le modèle moléculaire.",
  objectifs: [
    "Savoir que la matière est constituée d'atomes, briques élémentaires",
    "Connaître les symboles des atomes courants : H, O, C, N, Fe",
    "Lire et interpréter une formule chimique : H2O, CO2, O2, CH4",
    "Décrire les états de la matière avec le modèle moléculaire",
    "Comprendre qu'une transformation chimique est un réarrangement d'atomes qui conserve la masse",
  ],
  slides: [
    {
      titre: "De quoi est faite la matière ?",
      illustration: "🔬",
      visuel: "Atome = brique de la matière",
      contenu: [
        "Toute la matière est constituée d'atomes",
        "Un atome est extrêmement petit : environ 0,000 000 000 1 m (10⁻¹⁰ m)",
        "Il existe une centaine de sortes d'atomes différents",
        "On les représente par des sphères de couleurs différentes",
      ],
      voixOff:
        "Toute la matière qui nous entoure, l'eau, l'air, le fer, ton propre corps, est constituée de briques minuscules : les atomes. Un atome est extrêmement petit, environ un dixième de milliardième de mètre. Il existe une centaine de sortes d'atomes, que l'on représente souvent par des sphères de couleurs différentes.",
    },
    {
      titre: "Les symboles des atomes",
      illustration: "🔤",
      visuel: "H • O • C • N • Fe",
      contenu: [
        "Chaque sorte d'atome a un symbole : 1 ou 2 lettres",
        "H : hydrogène, O : oxygène, C : carbone, N : azote",
        "Fe : fer, Cu : cuivre",
        "1ère lettre en MAJUSCULE, 2ème en minuscule",
      ],
      voixOff:
        "Chaque sorte d'atome possède un symbole, formé d'une ou deux lettres. H pour l'hydrogène, O pour l'oxygène, C pour le carbone, N pour l'azote, et Fe pour le fer. Attention à l'écriture : la première lettre est toujours une majuscule, et la deuxième, s'il y en a une, toujours une minuscule.",
    },
    {
      titre: "Les molécules",
      illustration: "🧩",
      visuel: "Molécule = assemblage d'atomes",
      contenu: [
        "Une molécule est un assemblage d'atomes liés entre eux",
        "La molécule d'eau : 2 atomes d'hydrogène + 1 atome d'oxygène",
        "Deux molécules identiques ont exactement les mêmes atomes",
        "Certains corps, comme le fer, sont faits d'atomes non assemblés en molécules",
      ],
      voixOff:
        "Les atomes s'assemblent souvent pour former des molécules. Une molécule d'eau, par exemple, est un assemblage de deux atomes d'hydrogène et d'un atome d'oxygène. Toutes les molécules d'eau du monde sont identiques ! Certains corps, comme le fer, sont constitués directement d'atomes, sans former de molécules.",
    },
    {
      titre: "Les formules chimiques",
      illustration: "✍️",
      visuel: "H2O • CO2 • O2 • CH4",
      contenu: [
        "Chaque molécule s'écrit avec une formule chimique",
        "Eau : H2O — Dioxyde de carbone : CO2",
        "Dioxygène : O2 — Méthane : CH4",
        "Diazote : N2 (le gaz le plus abondant de l'air)",
      ],
      voixOff:
        "Chaque molécule possède une formule chimique, qui indique sa composition. L'eau s'écrit H deux O. Le dioxyde de carbone, C O deux. Le dioxygène, que nous respirons, O deux. Le méthane, le gaz naturel, C H quatre. Et le diazote, le gaz le plus abondant de l'air, N deux.",
    },
    {
      titre: "Interpréter une formule",
      illustration: "🔍",
      visuel: "CO2 = 1 C + 2 O",
      contenu: [
        "Le chiffre en indice (en bas à droite) compte les atomes du symbole qui le précède",
        "Pas de chiffre = 1 seul atome",
        "CO2 : 1 atome de carbone et 2 atomes d'oxygène",
        "CH4 : 1 atome de carbone et 4 atomes d'hydrogène → 5 atomes en tout",
      ],
      voixOff:
        "Pour lire une formule, on regarde les indices : le petit chiffre en bas à droite d'un symbole indique le nombre d'atomes de cette sorte. S'il n'y a pas de chiffre, il n'y a qu'un seul atome. Ainsi, C O deux contient un atome de carbone et deux atomes d'oxygène. Et C H quatre contient un atome de carbone et quatre atomes d'hydrogène, soit cinq atomes en tout.",
    },
    {
      titre: "Le modèle moléculaire des états",
      illustration: "🧊",
      visuel: "Solide • Liquide • Gaz",
      contenu: [
        "Solide : molécules serrées, ordonnées, qui vibrent sur place",
        "Liquide : molécules en contact mais désordonnées, elles glissent les unes sur les autres",
        "Gaz : molécules dispersées, très agitées, avec du vide entre elles",
        "C'est pourquoi un gaz est compressible, pas un liquide",
      ],
      voixOff:
        "Le modèle moléculaire explique les états de la matière. Dans un solide, les molécules sont serrées, bien ordonnées, et vibrent sur place. Dans un liquide, elles restent en contact mais sont désordonnées et glissent les unes sur les autres. Dans un gaz, elles sont dispersées, très agitées, avec beaucoup de vide entre elles : c'est pour cela qu'on peut comprimer un gaz, mais pas un liquide.",
    },
    {
      titre: "Transformation physique ou chimique ?",
      illustration: "⚗️",
      visuel: "Molécules conservées ou transformées ?",
      contenu: [
        "Transformation physique (ex : fusion de la glace) : les molécules ne changent pas, seule leur disposition change",
        "Transformation chimique (ex : combustion) : des molécules disparaissent, de nouvelles apparaissent",
        "Réactifs = espèces consommées / Produits = espèces formées",
      ],
      voixOff:
        "Il faut bien distinguer deux types de transformations. Dans une transformation physique, comme la fonte d'un glaçon, les molécules d'eau restent les mêmes : seule leur disposition change. Dans une transformation chimique, comme une combustion, des molécules disparaissent, les réactifs, et de nouvelles molécules apparaissent, les produits.",
    },
    {
      titre: "Un réarrangement d'atomes",
      illustration: "🔥",
      visuel: "C + O2 → CO2",
      contenu: [
        "Lors d'une transformation chimique, les atomes se réarrangent",
        "Combustion du carbone : C + O2 → CO2",
        "Aucun atome n'est créé, aucun n'est détruit",
        "On retrouve les mêmes atomes avant et après : 1 C et 2 O",
      ],
      voixOff:
        "Lors d'une transformation chimique, les atomes des réactifs se détachent puis se réassemblent autrement : c'est un réarrangement d'atomes. Prenons la combustion du carbone : un atome de carbone réagit avec une molécule de dioxygène pour former une molécule de dioxyde de carbone. Avant comme après, on compte un atome de carbone et deux atomes d'oxygène : aucun atome n'est créé ni détruit.",
    },
    {
      titre: "La conservation de la masse",
      illustration: "⚖️",
      visuel: "masse des réactifs = masse des produits",
      contenu: [
        "Les atomes se conservent → la masse se conserve",
        "Exemple : 12 g de carbone + 32 g de dioxygène → 44 g de dioxyde de carbone",
        "C'est la loi de Lavoisier : « Rien ne se perd, rien ne se crée, tout se transforme »",
      ],
      voixOff:
        "Puisque les atomes se conservent, la masse totale se conserve aussi lors d'une transformation chimique. Par exemple, douze grammes de carbone qui brûlent dans trente-deux grammes de dioxygène donnent exactement quarante-quatre grammes de dioxyde de carbone. C'est la célèbre loi de Lavoisier : rien ne se perd, rien ne se crée, tout se transforme.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "La matière est faite d'atomes (H, O, C, N, Fe...)",
        "Une molécule = assemblage d'atomes, décrite par sa formule (H2O, CO2, O2, CH4)",
        "L'indice compte les atomes du symbole qui le précède",
        "Transformation chimique = réarrangement d'atomes → conservation de la masse",
      ],
      voixOff:
        "Résumons. La matière est constituée d'atomes, désignés par des symboles comme H, O, C, N ou Fe. Les atomes s'assemblent en molécules, décrites par des formules chimiques comme H deux O ou C O deux, où l'indice compte les atomes. Le modèle moléculaire explique les états de la matière par la disposition et l'agitation des molécules. Enfin, une transformation chimique est un réarrangement d'atomes : les atomes se conservent, donc la masse se conserve. Bravo, tu maîtrises maintenant les atomes et les molécules !",
    },
  ],
  fiche: {
    intro:
      "La matière est constituée d'atomes, qui s'assemblent en molécules décrites par des formules chimiques. Ce modèle explique les états de la matière et les transformations chimiques.",
    sections: [
      {
        titre: "Les atomes",
        points: [
          "Briques élémentaires de la matière, extrêmement petits (≈ 10⁻¹⁰ m)",
          "Chaque sorte d'atome a un symbole : H (hydrogène), O (oxygène), C (carbone), N (azote), Fe (fer)",
          "Écriture : 1ère lettre majuscule, 2ème lettre minuscule (Fe, Cu)",
        ],
      },
      {
        titre: "Les molécules et leurs formules",
        points: [
          "Une molécule est un assemblage d'atomes liés entre eux",
          "Formules à connaître : eau H2O, dioxyde de carbone CO2, dioxygène O2, diazote N2, méthane CH4",
          "L'indice (petit chiffre en bas à droite) compte les atomes du symbole qui le précède ; pas de chiffre = 1 atome",
          "Exemple : CH4 = 1 atome de carbone + 4 atomes d'hydrogène",
        ],
      },
      {
        titre: "Le modèle moléculaire des états de la matière",
        points: [
          "Solide : molécules serrées et ordonnées, qui vibrent sur place",
          "Liquide : molécules en contact, désordonnées, qui glissent les unes sur les autres",
          "Gaz : molécules dispersées et très agitées, séparées par du vide → gaz compressible",
        ],
      },
      {
        titre: "Transformation physique / transformation chimique",
        points: [
          "Physique (changement d'état) : les molécules sont conservées, seule leur disposition change",
          "Chimique : des espèces disparaissent (réactifs) et de nouvelles apparaissent (produits)",
        ],
      },
      {
        titre: "Réarrangement et conservation",
        points: [
          "Une transformation chimique est un réarrangement d'atomes : aucun atome n'est créé ni détruit",
          "Exemples : C + O2 → CO2 ; CH4 + 2 O2 → CO2 + 2 H2O",
          "Conséquence : la masse totale se conserve (loi de Lavoisier), ex. 12 g de C + 32 g de O2 → 44 g de CO2",
        ],
      },
    ],
    audio:
      "Fiche de révision : atomes et molécules. Toute la matière est constituée d'atomes, des briques minuscules désignées par des symboles : H pour l'hydrogène, O pour l'oxygène, C pour le carbone, N pour l'azote, Fe pour le fer. Les atomes s'assemblent en molécules, décrites par des formules chimiques : H deux O pour l'eau, C O deux pour le dioxyde de carbone, O deux pour le dioxygène, C H quatre pour le méthane. Dans une formule, l'indice compte les atomes du symbole qui le précède ; sans chiffre, il n'y a qu'un atome. Le modèle moléculaire explique les états de la matière : molécules serrées et ordonnées dans un solide, en contact mais désordonnées dans un liquide, dispersées et très agitées dans un gaz. Enfin, une transformation chimique est un réarrangement d'atomes : les molécules des réactifs se défont et de nouvelles molécules, les produits, se forment. Comme aucun atome n'est créé ni détruit, la masse totale se conserve : c'est la loi de Lavoisier.",
  },
  memoCards: [
    { recto: "Quel est le symbole de l'atome d'hydrogène ?", verso: "H. Autres symboles : O (oxygène), C (carbone), N (azote), Fe (fer)." },
    { recto: "Qu'est-ce qu'une molécule ?", verso: "Un assemblage d'atomes liés entre eux. Ex : la molécule d'eau H2O." },
    { recto: "Formule de l'eau ?", verso: "H2O : 2 atomes d'hydrogène et 1 atome d'oxygène." },
    { recto: "Formule du dioxyde de carbone ?", verso: "CO2 : 1 atome de carbone et 2 atomes d'oxygène." },
    { recto: "Formule du méthane ?", verso: "CH4 : 1 atome de carbone et 4 atomes d'hydrogène (5 atomes en tout)." },
    { recto: "Que signifie l'indice dans une formule ?", verso: "Le nombre d'atomes du symbole qui le précède. Pas de chiffre = 1 atome." },
    { recto: "Comment sont les molécules dans un gaz ?", verso: "Dispersées, très agitées, séparées par du vide : c'est pourquoi un gaz est compressible." },
    { recto: "Fusion de la glace : transformation physique ou chimique ?", verso: "Physique : les molécules d'eau sont conservées, seule leur disposition change." },
    { recto: "Qu'est-ce qu'une transformation chimique au niveau des atomes ?", verso: "Un réarrangement d'atomes : les atomes des réactifs se réassemblent en nouveaux produits, sans être créés ni détruits." },
    { recto: "Pourquoi la masse se conserve-t-elle lors d'une réaction ?", verso: "Parce que les atomes se conservent (loi de Lavoisier : rien ne se perd, rien ne se crée, tout se transforme)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le symbole de l'atome d'oxygène ?",
      choix: ["O", "Ox", "H", "C"],
      bonneReponse: 0,
      explication: "L'oxygène a pour symbole O. H est l'hydrogène et C le carbone.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "H2O est la formule de la molécule :",
      choix: ["de dioxygène", "d'eau", "de dioxyde de carbone", "de méthane"],
      bonneReponse: 1,
      explication: "H2O est la molécule d'eau : 2 atomes d'hydrogène et 1 atome d'oxygène.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Combien d'atomes contient une molécule de dioxygène O2, et de quelle sorte ?",
      reponse: "2 atomes d'oxygène.",
      explication: "L'indice 2 indique que la molécule est formée de deux atomes d'oxygène liés entre eux.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le symbole de l'atome de fer ?",
      choix: ["F", "Fe", "Fr", "FE"],
      bonneReponse: 1,
      explication: "Le fer s'écrit Fe : première lettre majuscule, deuxième lettre minuscule.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne la composition de la molécule de dioxyde de carbone CO2.",
      reponse: "1 atome de carbone et 2 atomes d'oxygène.",
      explication: "C sans indice = 1 atome de carbone ; O2 = 2 atomes d'oxygène.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La molécule de méthane CH4 est constituée de :",
      choix: [
        "1 atome de carbone et 4 atomes d'hydrogène",
        "4 atomes de carbone et 1 atome d'hydrogène",
        "1 atome de carbone et 4 atomes d'oxygène",
        "2 atomes de carbone et 4 atomes d'hydrogène",
      ],
      bonneReponse: 0,
      explication: "C sans indice = 1 atome de carbone ; H4 = 4 atomes d'hydrogène. Soit 5 atomes en tout.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans 3 molécules d'eau (H2O), combien y a-t-il d'atomes d'hydrogène et d'atomes d'oxygène ?",
      reponse: "6 atomes d'hydrogène et 3 atomes d'oxygène.",
      explication: "Chaque molécule contient 2 H et 1 O : pour 3 molécules, 3 × 2 = 6 H et 3 × 1 = 3 O.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un gaz, les molécules sont :",
      choix: [
        "serrées et bien ordonnées",
        "en contact mais désordonnées",
        "dispersées et très agitées",
        "immobiles",
      ],
      bonneReponse: 2,
      explication: "Dans un gaz, les molécules sont éloignées les unes des autres, très agitées, avec du vide entre elles : le gaz est compressible.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La combustion du carbone s'écrit : C + O2 → CO2. Montre que les atomes sont conservés au cours de cette transformation.",
      reponse: "Avant : 1 atome de carbone (C) et 2 atomes d'oxygène (O2). Après : 1 atome de carbone et 2 atomes d'oxygène dans CO2. Les atomes sont donc conservés.",
      explication: "La transformation chimique est un simple réarrangement : les mêmes atomes se retrouvent assemblés autrement dans les produits.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La combustion complète du méthane s'écrit : CH4 + 2 O2 → CO2 + 2 H2O. Vérifie la conservation des atomes de carbone, d'hydrogène et d'oxygène.",
      reponse:
        "Réactifs : 1 C, 4 H (dans CH4) et 4 O (dans 2 O2). Produits : 1 C et 2 O (dans CO2) + 4 H et 2 O (dans 2 H2O), soit 1 C, 4 H et 4 O. Chaque sorte d'atome est conservée.",
      explication: "On compte chaque sorte d'atome de part et d'autre de la flèche : les nombres sont identiques, la réaction est bien équilibrée.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "On brûle 12 g de carbone dans 32 g de dioxygène ; tout est consommé. Quelle masse de dioxyde de carbone se forme-t-il ?",
      choix: ["12 g", "32 g", "44 g", "20 g"],
      bonneReponse: 2,
      explication: "La masse se conserve : 12 g + 32 g = 44 g de CO2 (loi de Lavoisier).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "La fonte d'un glaçon est-elle une transformation physique ou chimique ? Justifie avec le modèle moléculaire.",
      reponse:
        "C'est une transformation physique : les molécules d'eau H2O sont conservées. Seule leur disposition change (ordonnées et serrées dans la glace, désordonnées et en contact dans l'eau liquide).",
      explication: "Aucune nouvelle molécule n'apparaît : il n'y a pas de réarrangement d'atomes, donc pas de transformation chimique.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le symbole N désigne l'atome :",
      choix: ["de nickel", "d'azote", "de néon", "d'oxygène"],
      bonneReponse: 1,
      explication: "N est le symbole de l'azote. Le diazote N2 est le gaz le plus abondant de l'air.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne la formule chimique du dioxygène.",
      reponse: "O2",
      explication: "La molécule de dioxygène est formée de 2 atomes d'oxygène.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Combien d'atomes en tout contient une molécule de méthane CH4 ?",
      reponse: "5 atomes : 1 de carbone et 4 d'hydrogène.",
      explication: "On additionne : 1 C + 4 H = 5 atomes.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Lors d'une transformation chimique :",
      choix: [
        "des atomes sont détruits",
        "des atomes sont créés",
        "les atomes se réarrangent et la masse se conserve",
        "les molécules restent identiques",
      ],
      bonneReponse: 2,
      explication: "Les atomes ne sont ni créés ni détruits : ils se réassemblent en nouvelles molécules, donc la masse totale se conserve.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Comment sont disposées les molécules dans un solide ?",
      reponse: "Serrées, bien ordonnées, et elles vibrent sur place.",
      explication: "C'est ce qui donne au solide sa forme propre, contrairement au liquide et au gaz.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Atomes et molécules",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Associe la bonne formule au dioxyde de carbone :",
          choix: ["CO", "CO2", "C2O", "O2"],
          bonneReponse: 1,
          explication: "Le dioxyde de carbone est CO2 : 1 atome de carbone et 2 atomes d'oxygène.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne le nom des atomes de symboles H, C et Fe.",
          reponse: "H : hydrogène ; C : carbone ; Fe : fer.",
          explication: "Ce sont trois symboles à connaître par cœur, avec O (oxygène) et N (azote).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne la composition atomique de la molécule d'eau H2O, puis celle de 4 molécules d'eau.",
          reponse: "H2O : 2 atomes d'hydrogène et 1 atome d'oxygène. Pour 4 molécules : 8 atomes d'hydrogène et 4 atomes d'oxygène.",
          explication: "On multiplie la composition d'une molécule par le nombre de molécules : 4 × 2 = 8 H et 4 × 1 = 4 O.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pourquoi peut-on comprimer un gaz mais pas un liquide ?",
          choix: [
            "Parce que les molécules d'un gaz sont plus petites",
            "Parce qu'il y a beaucoup de vide entre les molécules d'un gaz",
            "Parce que les molécules d'un gaz sont plus lourdes",
            "Parce qu'un liquide ne contient pas de molécules",
          ],
          bonneReponse: 1,
          explication: "Dans un gaz, les molécules sont dispersées avec du vide entre elles : on peut les rapprocher. Dans un liquide, elles sont déjà en contact.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "L'ébullition de l'eau est-elle une transformation chimique ? Justifie.",
          reponse: "Non, c'est une transformation physique : les molécules d'eau H2O sont conservées, elles passent simplement de l'état liquide à l'état gazeux.",
          explication: "Il n'y a ni disparition ni apparition d'espèces chimiques : pas de réarrangement d'atomes.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "On réalise la combustion du carbone : C + O2 → CO2. On brûle 6 g de carbone dans 16 g de dioxygène (tout est consommé). Quelle masse de dioxyde de carbone obtient-on ? Justifie.",
          reponse: "22 g de CO2, car la masse se conserve : 6 g + 16 g = 22 g.",
          explication: "Les atomes se conservent lors d'une transformation chimique, donc la masse des produits est égale à la masse des réactifs (loi de Lavoisier).",
        },
      ],
    },
    {
      titre: "Examen 2 — Atomes et molécules",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans la formule CH4, le chiffre 4 indique :",
          choix: [
            "4 molécules de méthane",
            "4 atomes de carbone",
            "4 atomes d'hydrogène",
            "4 atomes d'oxygène",
          ],
          bonneReponse: 2,
          explication: "L'indice 4 compte les atomes du symbole qui le précède, ici H : 4 atomes d'hydrogène.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'une molécule ?",
          reponse: "Un assemblage d'atomes liés entre eux.",
          explication: "Exemple : la molécule d'eau H2O assemble 2 atomes d'hydrogène et 1 atome d'oxygène.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel gaz, de formule N2, est le plus abondant dans l'air ?",
          choix: ["Le dioxygène", "Le dioxyde de carbone", "Le diazote", "Le méthane"],
          bonneReponse: 2,
          explication: "L'air contient environ 78 % de diazote N2 et 21 % de dioxygène O2.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris, avec le modèle moléculaire, la différence entre l'état liquide et l'état gazeux.",
          reponse:
            "Liquide : molécules en contact mais désordonnées, qui glissent les unes sur les autres. Gaz : molécules dispersées, très agitées, séparées par du vide.",
          explication: "C'est cette différence qui explique qu'un gaz est compressible et occupe tout l'espace, contrairement au liquide.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Compte les atomes de chaque sorte dans les réactifs puis dans les produits de la réaction CH4 + 2 O2 → CO2 + 2 H2O. Que constates-tu ?",
          reponse:
            "Réactifs : 1 C, 4 H, 4 O. Produits : 1 C (CO2), 4 H (2 H2O), 2 + 2 = 4 O. Les nombres sont identiques : les atomes sont conservés.",
          explication: "Une transformation chimique est un réarrangement d'atomes : chaque sorte d'atome se retrouve en même quantité avant et après.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une bougie qui brûle perd de la masse. Est-ce en contradiction avec la loi de Lavoisier ? Explique.",
          reponse:
            "Non : la cire réagit avec le dioxygène de l'air et forme du dioxyde de carbone et de la vapeur d'eau, qui s'échappent dans l'air. Si on tenait compte de tous les réactifs et de tous les produits (y compris les gaz), la masse totale serait conservée.",
          explication: "La masse semble diminuer parce que des produits gazeux quittent la bougie ; en système fermé, la conservation de la masse est vérifiée.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "La matière est constituée d'atomes ; symboles à connaître : H, O, C, N, Fe (majuscule puis minuscule).",
    "Une molécule est un assemblage d'atomes ; formules à connaître : H2O, CO2, O2, N2, CH4.",
    "Dans une formule, l'indice compte les atomes du symbole qui le précède ; pas de chiffre = 1 atome (CO2 = 1 C + 2 O).",
    "Modèle moléculaire : solide = molécules serrées et ordonnées ; liquide = en contact et désordonnées ; gaz = dispersées et très agitées.",
    "Transformation chimique = réarrangement d'atomes : les atomes (donc la masse) se conservent — loi de Lavoisier.",
    "Erreur classique à éviter : croire que des atomes disparaissent lors d'une combustion — ils se retrouvent tous dans les produits, parfois gazeux et invisibles.",
  ],
};

export default chapitre;
