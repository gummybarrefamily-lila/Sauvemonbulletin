import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "signaux-information",
  titre: "Signaux et information",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Comprendre comment une information est codée, transmise et reçue, distinguer signal analogique et signal numérique, et connaître le codage binaire utilisé par les appareils numériques.",
  objectifs: [
    "Décrire la chaîne de transmission d'une information : émetteur, canal, récepteur",
    "Distinguer signal analogique et signal numérique",
    "Comprendre le codage binaire (bits, 0 et 1) utilisé par le numérique",
    "Connaître différents supports de transmission (câble, fibre optique, ondes)",
    "Relier vitesse de propagation, distance et durée de transmission",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'une information ?",
      illustration: "📡",
      visuel: "Émetteur → Signal → Récepteur",
      contenu: [
        "Une information est un message que l'on veut transmettre (son, image, texte...)",
        "Elle est transportée par un signal, physique et mesurable",
        "Trois éléments : un émetteur, un canal de transmission, un récepteur",
        "Exemple : une voix (émetteur) → un câble (canal) → un haut-parleur (récepteur)",
      ],
      voixOff:
        "Une information est un message que l'on souhaite transmettre : un son, une image, un texte. Pour voyager, elle est portée par un signal, une grandeur physique mesurable. Toute chaîne de transmission comporte trois éléments : un émetteur qui produit le signal, un canal de transmission qui le transporte, et un récepteur qui le reçoit. Par exemple, une voix est l'émetteur, un câble le canal, et un haut-parleur le récepteur.",
    },
    {
      titre: "Signal analogique",
      illustration: "〰️",
      visuel: "Variation continue dans le temps",
      contenu: [
        "Un signal analogique varie de façon continue au cours du temps",
        "Il peut prendre une infinité de valeurs possibles",
        "Exemple : le son capté par un microphone classique",
        "Il est sensible aux parasites qui peuvent le déformer",
      ],
      voixOff:
        "Un signal analogique est un signal qui varie de façon continue au cours du temps : il peut prendre une infinité de valeurs différentes, comme le son capté par un microphone classique. Son inconvénient majeur, c'est sa sensibilité aux parasites : le moindre bruit électrique peut le déformer et l'information transmise devient alors moins fidèle.",
    },
    {
      titre: "Signal numérique",
      illustration: "🔢",
      visuel: "Suite de valeurs 0 et 1",
      contenu: [
        "Un signal numérique ne prend que deux valeurs possibles : 0 ou 1",
        "Ces deux valeurs sont appelées des bits (binary digit)",
        "Il est beaucoup plus résistant aux parasites que le signal analogique",
        "Les ordinateurs, smartphones et appareils modernes utilisent le numérique",
      ],
      voixOff:
        "Un signal numérique, lui, ne prend que deux valeurs possibles : zéro ou un. Chacune de ces valeurs est appelée un bit, pour binary digit. Ce type de signal est beaucoup plus résistant aux parasites qu'un signal analogique, car il est plus facile de distinguer un zéro d'un un que de reconnaître une valeur précise parmi une infinité. C'est pourquoi les ordinateurs, les smartphones et la plupart des appareils modernes utilisent le numérique.",
    },
    {
      titre: "Le codage binaire",
      illustration: "💻",
      visuel: "8 bits = 1 octet",
      contenu: [
        "Toute information numérique est codée en une suite de 0 et de 1",
        "Un bit est la plus petite unité d'information (0 ou 1)",
        "Un octet regroupe 8 bits (ex. 01001010)",
        "Avec 8 bits, on peut coder 256 valeurs différentes (2⁸ = 256)",
      ],
      voixOff:
        "Toute information numérique, qu'il s'agisse d'un texte, d'une image ou d'un son, est finalement codée sous la forme d'une longue suite de zéros et de uns. Le bit est la plus petite unité d'information possible. On regroupe généralement les bits par paquets de huit, appelés octets. Avec huit bits, on peut coder deux cent cinquante-six valeurs différentes, car deux puissance huit égale deux cent cinquante-six.",
    },
    {
      titre: "Convertir le monde réel en numérique",
      illustration: "🎙️",
      visuel: "Analogique → (échantillonnage) → Numérique",
      contenu: [
        "Un capteur transforme une grandeur physique en signal électrique analogique",
        "Un convertisseur analogique-numérique échantillonne ce signal",
        "Il transforme les valeurs mesurées en une suite de 0 et de 1",
        "Exemple : un micro capte un son (analogique) puis une carte son le numérise",
      ],
      voixOff:
        "Pour transformer un phénomène du monde réel en information numérique, on utilise d'abord un capteur, qui produit un signal électrique analogique. Ce signal est ensuite envoyé à un convertisseur analogique-numérique, qui l'échantillonne, c'est-à-dire qu'il prélève des valeurs à intervalles réguliers pour les transformer en une suite de zéros et de uns. C'est exactement ce que fait une carte son lorsqu'un microphone capte ta voix.",
    },
    {
      titre: "Les supports de transmission",
      illustration: "🌐",
      visuel: "Câble • Fibre optique • Ondes",
      contenu: [
        "Câble électrique : le signal est transporté par un courant électrique",
        "Fibre optique : le signal est transporté par de la lumière",
        "Ondes électromagnétiques : transmission sans fil (Wi-Fi, 4G/5G, satellite)",
        "Chaque support a une vitesse de propagation et une portée différentes",
      ],
      voixOff:
        "L'information numérique peut voyager par différents supports. Dans un câble électrique, elle est transportée par un courant électrique. Dans une fibre optique, elle est transportée par de la lumière, ce qui permet des débits très élevés. Et sans fil, elle voyage sous forme d'ondes électromagnétiques, comme le Wi-Fi, la 4G, la 5G, ou les liaisons satellites. Chaque support a sa propre vitesse de propagation et sa propre portée.",
    },
    {
      titre: "Vitesse de propagation et durée",
      illustration: "⏱️",
      visuel: "durée = distance ÷ vitesse",
      contenu: [
        "Dans le vide ou l'air, les ondes se propagent à environ 300 000 km/s",
        "Dans un câble ou une fibre optique, le signal est un peu plus lent",
        "La durée de transmission dépend de la distance à parcourir",
        "Formule : durée (s) = distance (m) ÷ vitesse (m/s)",
      ],
      voixOff:
        "Les ondes électromagnétiques, comme la lumière, se propagent dans le vide ou dans l'air à environ trois cent mille kilomètres par seconde. Dans un câble ou une fibre optique, le signal est un peu plus lent. La durée nécessaire pour transmettre un signal dépend de la distance à parcourir : elle se calcule simplement en divisant la distance par la vitesse de propagation.",
    },
    {
      titre: "Exemple de calcul",
      illustration: "🛰️",
      visuel: "36 000 km ÷ 300 000 km/s = 0,12 s",
      contenu: [
        "Un signal satellite doit parcourir 36 000 km jusqu'à un satellite géostationnaire",
        "Vitesse de propagation ≈ 300 000 km/s",
        "durée = distance ÷ vitesse = 36 000 ÷ 300 000 = 0,12 s",
        "C'est ce petit délai qui explique le léger décalage lors d'un appel satellite",
      ],
      voixOff:
        "Prenons l'exemple d'un signal envoyé vers un satellite géostationnaire, situé à trente-six mille kilomètres. À une vitesse d'environ trois cent mille kilomètres par seconde, la durée de trajet vaut trente-six mille divisé par trois cent mille, soit zéro virgule douze seconde. C'est ce petit délai, à l'aller comme au retour, qui explique le léger décalage que l'on perçoit parfois lors d'un appel téléphonique par satellite.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Chaîne de transmission : émetteur → canal → récepteur",
        "Analogique : variation continue, sensible aux parasites",
        "Numérique : suite de bits (0 et 1), résistant aux parasites",
        "durée de transmission = distance ÷ vitesse de propagation",
      ],
      voixOff:
        "Résumons. Toute transmission d'information suit une chaîne : un émetteur, un canal de transmission, un récepteur. Un signal analogique varie de façon continue et reste sensible aux parasites, alors qu'un signal numérique, codé en bits de zéros et de uns, y résiste beaucoup mieux. L'information peut voyager par câble, fibre optique ou ondes, et la durée de transmission se calcule en divisant la distance par la vitesse de propagation. Tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "Une information est transportée par un signal, analogique ou numérique, le long d'une chaîne de transmission : émetteur, canal, récepteur. Le numérique code l'information en bits (0 et 1).",
    sections: [
      {
        titre: "La chaîne de transmission",
        points: [
          "Émetteur : produit le signal porteur de l'information",
          "Canal de transmission : transporte le signal (câble, fibre, ondes)",
          "Récepteur : reçoit et restitue l'information",
        ],
      },
      {
        titre: "Signal analogique vs signal numérique",
        points: [
          "Analogique : variation continue, infinité de valeurs, sensible aux parasites",
          "Numérique : seulement deux valeurs (0 et 1), résistant aux parasites",
          "Un bit = plus petite unité d'information ; un octet = 8 bits",
        ],
      },
      {
        titre: "Supports de transmission",
        points: [
          "Câble électrique : transport par courant électrique",
          "Fibre optique : transport par la lumière, débits très élevés",
          "Ondes électromagnétiques : transmission sans fil (Wi-Fi, 4G/5G, satellite)",
        ],
      },
      {
        titre: "Vitesse et durée de transmission",
        points: [
          "Les ondes se propagent à environ 300 000 km/s dans le vide/l'air",
          "durée (s) = distance (m) ÷ vitesse (m/s)",
          "Plus la distance est grande, plus la durée de transmission est longue",
        ],
      },
    ],
    audio:
      "Fiche de révision : signaux et information. Une information est transportée par un signal, le long d'une chaîne de transmission comprenant un émetteur, un canal de transmission et un récepteur. On distingue le signal analogique, qui varie de façon continue et prend une infinité de valeurs, mais qui reste sensible aux parasites, du signal numérique, qui ne prend que deux valeurs, zéro et un, appelées bits, et qui résiste beaucoup mieux aux parasites. Un octet regroupe huit bits. L'information peut être transportée par différents supports : un câble électrique, une fibre optique qui utilise la lumière, ou des ondes électromagnétiques pour les transmissions sans fil comme le Wi-Fi ou la téléphonie mobile. Les ondes se propagent dans le vide ou dans l'air à environ trois cent mille kilomètres par seconde. La durée de transmission d'un signal se calcule en divisant la distance parcourue par la vitesse de propagation.",
  },
  memoCards: [
    { recto: "Quels sont les trois éléments d'une chaîne de transmission ?", verso: "L'émetteur, le canal de transmission, le récepteur." },
    { recto: "Qu'est-ce qu'un signal analogique ?", verso: "Un signal qui varie de façon continue et peut prendre une infinité de valeurs ; sensible aux parasites." },
    { recto: "Qu'est-ce qu'un signal numérique ?", verso: "Un signal qui ne prend que deux valeurs, 0 ou 1 (bits) ; résistant aux parasites." },
    { recto: "Qu'est-ce qu'un bit et un octet ?", verso: "Le bit est la plus petite unité d'information (0 ou 1). Un octet regroupe 8 bits." },
    { recto: "Cite trois supports de transmission de l'information.", verso: "Le câble électrique, la fibre optique (lumière), les ondes électromagnétiques (sans fil)." },
    { recto: "Vitesse de propagation des ondes dans le vide/l'air ?", verso: "Environ 300 000 km/s (soit 3 × 10⁸ m/s)." },
    { recto: "Formule reliant durée, distance et vitesse de propagation ?", verso: "durée (s) = distance (m) ÷ vitesse (m/s)." },
    { recto: "Pourquoi préfère-t-on le numérique à l'analogique aujourd'hui ?", verso: "Car le signal numérique résiste beaucoup mieux aux parasites, ce qui limite les pertes d'information." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Les trois éléments d'une chaîne de transmission sont :",
      choix: [
        "émetteur, canal, récepteur",
        "capteur, câble, ampoule",
        "signal, bit, octet",
        "microphone, satellite, antenne",
      ],
      bonneReponse: 0,
      explication: "Toute chaîne de transmission comporte un émetteur, un canal de transmission et un récepteur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un signal numérique ne peut prendre que :",
      choix: ["une infinité de valeurs", "deux valeurs (0 et 1)", "dix valeurs", "aucune valeur"],
      bonneReponse: 1,
      explication: "Un signal numérique est codé en bits, qui valent 0 ou 1.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Combien de bits contient un octet ?",
      reponse: "Un octet contient 8 bits.",
      explication: "C'est la définition de l'octet, unité de base en informatique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel signal est le plus sensible aux parasites ?",
      choix: ["Le signal numérique", "Le signal analogique", "Aucun des deux", "Les deux de la même façon"],
      bonneReponse: 1,
      explication: "Le signal analogique, qui prend une infinité de valeurs, est plus facilement déformé par les parasites que le signal numérique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un signal doit parcourir 1500 m dans un câble à une vitesse de 200 000 000 m/s. Calcule la durée de transmission.",
      reponse: "durée = distance ÷ vitesse = 1500 ÷ 200 000 000 = 0,0000075 s = 7,5 µs",
      explication: "On applique directement durée = distance ÷ vitesse.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La fibre optique transporte l'information sous forme de :",
      choix: ["courant électrique", "lumière", "ondes sonores", "champ magnétique"],
      bonneReponse: 1,
      explication: "Dans une fibre optique, l'information est codée par des impulsions lumineuses.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Avec 8 bits (1 octet), combien de valeurs différentes peut-on coder ? Justifie le calcul.",
      reponse: "2⁸ = 256 valeurs différentes, car chaque bit peut prendre 2 valeurs (0 ou 1) et il y a 8 bits.",
      explication: "Le nombre de combinaisons possibles avec n bits est 2ⁿ.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un satellite est à 30 000 km. À la vitesse de 300 000 km/s, la durée du trajet du signal est de :",
      choix: ["0,1 s", "1 s", "10 s", "0,01 s"],
      bonneReponse: 0,
      explication: "durée = 30 000 ÷ 300 000 = 0,1 s.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un appel téléphonique passe par un satellite géostationnaire situé à 36 000 km. Calcule la durée d'un aller-retour du signal (émission puis réponse), sachant que la vitesse de propagation est d'environ 300 000 km/s.",
      reponse:
        "Aller : 36 000 ÷ 300 000 = 0,12 s. Aller-retour : 0,12 × 2 = 0,24 s.",
      explication: "Il faut compter le trajet aller (vers le satellite puis vers le correspondant) et le trajet retour pour la réponse.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique pourquoi convertir un signal analogique en signal numérique permet de mieux conserver la qualité d'une information transmise sur une longue distance.",
      reponse:
        "Un signal numérique ne prend que deux valeurs (0 ou 1), ce qui permet de facilement distinguer ces valeurs même en présence de parasites qui viendraient légèrement modifier le signal. Un signal analogique, lui, peut prendre une infinité de valeurs : le moindre parasite modifie sa valeur exacte, et l'information est alors dégradée de façon irréversible.",
      explication: "La robustesse du numérique face aux parasites est la raison principale de son adoption généralisée pour les transmissions longue distance.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un signal parcourt une fibre optique de 2000 km à une vitesse d'environ 200 000 km/s. La durée du trajet est d'environ :",
      choix: ["0,01 s", "0,1 s", "1 s", "10 s"],
      bonneReponse: 0,
      explication: "durée = 2000 ÷ 200 000 = 0,01 s.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un capteur de température mesure une grandeur physique continue. Décris les étapes qui permettent d'obtenir une suite de bits représentant cette température, à partir de la grandeur mesurée.",
      reponse:
        "Le capteur transforme la température en un signal électrique analogique. Ce signal analogique est ensuite envoyé à un convertisseur analogique-numérique qui l'échantillonne (prélève des valeurs à intervalles réguliers) et code chaque valeur mesurée sous la forme d'une suite de bits (0 et 1).",
      explication: "C'est la chaîne classique de numérisation : capteur (analogique) → conversion analogique-numérique → signal numérique.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le bit est :",
      choix: ["la plus petite unité d'information (0 ou 1)", "un groupe de 8 valeurs", "une unité de vitesse", "une unité de distance"],
      bonneReponse: 0,
      explication: "Le bit (binary digit) vaut 0 ou 1 : c'est la plus petite unité d'information numérique.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite les trois éléments d'une chaîne de transmission d'information.",
      reponse: "L'émetteur, le canal de transmission, le récepteur.",
      explication: "C'est le schéma de base de toute transmission d'information.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un signal parcourt 900 m à une vitesse de 300 000 000 m/s. Calcule la durée du trajet.",
      reponse: "durée = 900 ÷ 300 000 000 = 0,000003 s = 3 µs",
      explication: "Application directe de durée = distance ÷ vitesse.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel support de transmission utilise la lumière pour transporter l'information ?",
      choix: ["Le câble électrique", "La fibre optique", "Les ondes radio", "Le papier"],
      bonneReponse: 1,
      explication: "La fibre optique transporte l'information sous forme d'impulsions lumineuses.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi le signal numérique est préféré au signal analogique pour les transmissions modernes.",
      reponse:
        "Parce qu'il ne prend que deux valeurs (0 ou 1), ce qui le rend beaucoup plus résistant aux parasites qu'un signal analogique, qui peut prendre une infinité de valeurs et se dégrader facilement.",
      explication: "C'est la raison principale de la généralisation du numérique dans les technologies de communication.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Signaux et information",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un signal analogique :",
          choix: [
            "ne prend que deux valeurs",
            "varie de façon continue avec une infinité de valeurs possibles",
            "n'existe pas dans la nature",
            "est toujours numérique",
          ],
          bonneReponse: 1,
          explication: "Le signal analogique varie continûment et peut prendre une infinité de valeurs.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne la formule permettant de calculer la durée de transmission d'un signal à partir de la distance et de la vitesse.",
          reponse: "durée (s) = distance (m) ÷ vitesse (m/s)",
          explication: "C'est la relation de base entre distance, vitesse et durée.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un octet est composé de :",
          choix: ["2 bits", "4 bits", "8 bits", "16 bits"],
          bonneReponse: 2,
          explication: "Un octet regroupe 8 bits.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un signal parcourt 4500 km à une vitesse de 300 000 km/s. Calcule la durée du trajet.",
          reponse: "durée = 4500 ÷ 300 000 = 0,015 s",
          explication: "Application directe de durée = distance ÷ vitesse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux supports de transmission de l'information et précise ce qui les transporte physiquement.",
          reponse:
            "Le câble électrique transporte l'information sous forme de courant électrique. La fibre optique la transporte sous forme de lumière. (On peut aussi citer les ondes électromagnétiques pour les transmissions sans fil.)",
          explication: "Chaque support utilise un phénomène physique différent pour transporter le signal.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un signal GPS parcourt 20 000 km entre un satellite et un récepteur au sol, à une vitesse d'environ 300 000 km/s. Calcule la durée du trajet, et explique pourquoi cette durée doit être prise en compte pour un calcul de position précis.",
          reponse:
            "durée = 20 000 ÷ 300 000 ≈ 0,067 s. Ce délai, bien que très court, doit être pris en compte car le GPS calcule une position en mesurant précisément le temps de trajet du signal entre plusieurs satellites et le récepteur ; une petite erreur de temps entraînerait une erreur de position importante.",
          explication: "Le GPS repose sur une mesure très précise des durées de propagation des signaux, converties en distances grâce à la vitesse de propagation connue.",
        },
      ],
    },
    {
      titre: "Examen 2 — Signaux et information",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un signal numérique est codé à l'aide de :",
          choix: ["ondes sonores uniquement", "bits (0 et 1)", "couleurs", "unités de masse"],
          bonneReponse: 1,
          explication: "Le codage numérique utilise des suites de bits, valant 0 ou 1.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quel est le rôle du récepteur dans une chaîne de transmission ?",
          reponse: "Le récepteur reçoit le signal transmis et restitue l'information (par exemple, un haut-parleur restitue le son).",
          explication: "Le récepteur est le dernier maillon de la chaîne de transmission.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Avec 8 bits, le nombre de valeurs différentes que l'on peut coder est :",
          choix: ["8", "16", "128", "256"],
          bonneReponse: 3,
          explication: "2⁸ = 256 valeurs possibles avec 8 bits.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un signal parcourt 600 000 m à une vitesse de 200 000 000 m/s dans une fibre optique. Calcule la durée du trajet.",
          reponse: "durée = 600 000 ÷ 200 000 000 = 0,003 s",
          explication: "Application directe de durée = distance ÷ vitesse.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi dit-on que le numérique est plus robuste face aux parasites que l'analogique ?",
          reponse:
            "Parce qu'un signal numérique ne prend que deux valeurs (0 ou 1), bien distinctes, alors qu'un signal analogique peut prendre une infinité de valeurs proches les unes des autres, plus facilement confondues en cas de parasite.",
          explication: "La distinction binaire (0/1) tolère de petites perturbations sans changer l'interprétation du signal.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux techniciens comparent un câble électrique et une fibre optique pour relier deux villes distantes de 500 km. Sachant que le signal se propage à 200 000 km/s dans le câble et à 200 000 km/s également dans la fibre, mais que la fibre a un débit d'information beaucoup plus élevé, explique la différence entre durée de propagation et débit d'information.",
          reponse:
            "La durée de propagation (ici 500 ÷ 200 000 = 0,0025 s dans les deux cas) correspond au temps que met le signal pour parcourir la distance ; elle est identique pour les deux supports dans cet exemple. Le débit d'information, lui, correspond à la quantité de bits transmis par seconde : la fibre optique peut transmettre beaucoup plus de bits par seconde que le câble électrique, ce qui la rend plus performante pour transporter de grandes quantités de données, même si la vitesse de propagation du signal est la même.",
          explication: "Il ne faut pas confondre la vitesse de propagation du signal (durée de trajet) et le débit (quantité d'information transmise par seconde).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Toute transmission d'information suit une chaîne : émetteur → canal de transmission → récepteur.",
    "Le signal analogique varie de façon continue (infinité de valeurs) et est sensible aux parasites.",
    "Le signal numérique ne prend que deux valeurs, 0 et 1 (bits), et résiste beaucoup mieux aux parasites ; un octet = 8 bits.",
    "L'information peut être transportée par câble électrique, fibre optique (lumière) ou ondes électromagnétiques (sans fil).",
    "Les ondes se propagent à environ 300 000 km/s dans le vide ou l'air ; durée (s) = distance (m) ÷ vitesse (m/s).",
    "Numériser un signal analogique passe par un capteur puis un convertisseur analogique-numérique qui échantillonne le signal.",
  ],
};

export default chapitre;
