import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "volumes-sections",
  titre: "Volumes et sections de solides",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Calculer le volume d'une sphère, d'un cône, d'une pyramide, et déterminer la section d'un solide par un plan parallèle à la base : la géométrie dans l'espace attendue au brevet.",
  objectifs: [
    "Connaître et utiliser les formules de volume du cône, de la pyramide et de la sphère",
    "Convertir des unités de volume et de contenance (L, mL, cm³, dm³, m³)",
    "Déterminer la nature et les dimensions d'une section plane d'un solide",
    "Calculer les dimensions d'une réduction ou d'un agrandissement de solide (lien avec l'homothétie)",
    "Résoudre des problèmes concrets de volumes (remplissage, patron, comparaison)",
  ],
  slides: [
    {
      titre: "Rappel : les solides au programme",
      illustration: "📦",
      visuel: "cube · pavé · cylindre · cône · pyramide · sphère",
      contenu: [
        "Solides déjà connus : cube, pavé droit, cylindre (volumes vus en 4ème/5ème)",
        "Nouveaux solides en 3ème : la pyramide, le cône et la sphère",
        "Chaque solide a sa propre formule de volume, à connaître par cœur",
        "Bien identifier la base et la hauteur avant de calculer",
      ],
      voixOff:
        "Rappelons les solides étudiés au collège. Le cube, le pavé droit et le cylindre ont déjà été vus les années précédentes. Cette année, on étudie trois nouveaux solides : la pyramide, le cône et la sphère. Chacun possède sa propre formule de volume, qu'il faut absolument connaître par cœur. Avant tout calcul, il faut bien identifier la base et la hauteur du solide.",
    },
    {
      titre: "Le volume du cône",
      illustration: "🍦",
      visuel: "V = (π × r² × h) / 3",
      contenu: [
        "V = (π × r² × h) / 3, où r est le rayon de la base et h la hauteur",
        "C'est le tiers du volume d'un cylindre de même base et même hauteur",
        "Exemple : r = 3 cm, h = 8 cm → V = π × 3² × 8 / 3 = π × 72/3 = 24π ≈ 75,4 cm³",
      ],
      voixOff:
        "Le volume d'un cône se calcule avec la formule : pi fois le rayon au carré, fois la hauteur, le tout divisé par trois. On retrouve le rayon de la base circulaire et la hauteur du cône. C'est exactement le tiers du volume d'un cylindre qui aurait la même base et la même hauteur. Par exemple, pour un rayon de trois centimètres et une hauteur de huit centimètres, le volume vaut vingt-quatre pi, soit environ soixante-quinze virgule quatre centimètres cubes.",
    },
    {
      titre: "Le volume de la pyramide",
      illustration: "🔺",
      visuel: "V = (aire de la base × h) / 3",
      contenu: [
        "V = (aire de la base × hauteur) / 3",
        "La base peut être n'importe quel polygone (carré, triangle, rectangle...)",
        "Exemple : base carrée de côté 6 cm, hauteur 10 cm → V = (36 × 10)/3 = 360/3 = 120 cm³",
        "C'est le tiers du volume d'un prisme de même base et même hauteur",
      ],
      voixOff:
        "Le volume d'une pyramide se calcule avec la formule : l'aire de la base, multipliée par la hauteur, le tout divisé par trois. La base peut être n'importe quel polygone. Par exemple, pour une base carrée de six centimètres de côté et une hauteur de dix centimètres, l'aire de la base vaut trente-six centimètres carrés, donc le volume vaut trente-six fois dix, divisé par trois, soit cent vingt centimètres cubes.",
    },
    {
      titre: "Le volume de la sphère",
      illustration: "⚽",
      visuel: "V = (4/3) × π × r³",
      contenu: [
        "V = (4/3) × π × r³, où r est le rayon de la sphère",
        "Attention : le rayon est élevé au CUBE, pas au carré",
        "Exemple : r = 6 cm → V = (4/3) × π × 6³ = (4/3) × π × 216 = 288π ≈ 904,8 cm³",
        "Ne pas confondre avec l'aire de la sphère (formule différente, hors programme brevet)",
      ],
      voixOff:
        "Le volume d'une sphère se calcule avec la formule : quatre tiers, fois pi, fois le rayon au cube. Attention à ne pas confondre : c'est bien le rayon au cube, et non au carré. Par exemple, pour un rayon de six centimètres, le volume vaut quatre tiers fois pi fois deux cent seize, soit deux cent quatre-vingt-huit pi, environ neuf cent quatre virgule huit centimètres cubes.",
    },
    {
      titre: "Conversions d'unités de volume",
      illustration: "🔄",
      visuel: "1 L = 1 dm³ = 1000 cm³ ; 1 m³ = 1000 L",
      contenu: [
        "1 dm³ = 1 L ; 1 cm³ = 1 mL",
        "1 m³ = 1000 dm³ = 1000 L",
        "Pour passer d'une unité de volume à l'unité juste en dessous : × 1000",
        "Exemple : 2,5 dm³ = 2,5 L = 2500 cm³ = 2500 mL",
      ],
      voixOff:
        "Il faut aussi savoir convertir les unités de volume et de contenance. Un décimètre cube équivaut à un litre, et un centimètre cube équivaut à un millilitre. Un mètre cube équivaut à mille décimètres cubes, donc à mille litres. Pour passer d'une unité de volume à l'unité directement inférieure, on multiplie par mille, car chaque dimension est multipliée par dix. Par exemple, deux virgule cinq décimètres cubes valent deux virgule cinq litres, soit deux mille cinq cents centimètres cubes.",
    },
    {
      titre: "Section d'un solide par un plan parallèle à la base",
      illustration: "✂️",
      visuel: "cône coupé horizontalement → section = un disque",
      contenu: [
        "Couper une pyramide ou un cône par un plan parallèle à la base donne une figure semblable à la base",
        "La section d'un cône (plan parallèle à la base) est un CERCLE",
        "La section d'une pyramide à base carrée (plan parallèle à la base) est un CARRÉ",
        "La section d'un cylindre par un plan parallèle à la base est un cercle identique à la base",
      ],
      voixOff:
        "Quand on coupe une pyramide ou un cône par un plan parallèle à la base, on obtient une figure de même forme que la base, mais réduite : c'est une application de l'homothétie. La section d'un cône est toujours un cercle. La section d'une pyramide à base carrée est toujours un carré. Pour le cylindre, la section par un plan parallèle à la base est un cercle identique à la base, car le cylindre ne se rétrécit pas en hauteur.",
    },
    {
      titre: "Calculer les dimensions d'une section",
      illustration: "📐",
      visuel: "SM/SH = rapport de réduction",
      contenu: [
        "On utilise le théorème de Thalès (ou les propriétés de l'homothétie)",
        "Exemple : pyramide de hauteur SH = 12 cm, coupée à SM = 4 cm du sommet, base de côté 9 cm",
        "Rapport k = SM/SH = 4/12 = 1/3",
        "Côté de la section = k × côté de la base = (1/3) × 9 = 3 cm",
      ],
      voixOff:
        "Pour calculer les dimensions d'une section, on utilise le théorème de Thalès. Prenons une pyramide de hauteur totale douze centimètres, coupée par un plan situé à quatre centimètres du sommet, avec une base carrée de neuf centimètres de côté. Le rapport de réduction est le rapport des hauteurs, quatre sur douze, soit un tiers. Le côté de la section est donc un tiers de neuf, soit trois centimètres.",
    },
    {
      titre: "Effet de la section sur le volume",
      illustration: "🧊",
      visuel: "volume de la petite pyramide = k³ × volume de la grande",
      contenu: [
        "Le petit solide (au sommet) est une réduction du grand, de rapport k",
        "Son volume vaut k³ × volume du solide complet",
        "Exemple : rapport k = 1/3 → volume du petit solide = (1/3)³ = 1/27 du volume total",
        "Utile pour calculer le volume d'un solide « tronqué » (par différence)",
      ],
      voixOff:
        "Le petit solide obtenu au sommet, après la coupe, est une réduction du solide complet, avec le même rapport k que celui trouvé pour les longueurs. Son volume vaut donc k au cube fois le volume du solide complet. Par exemple, avec un rapport d'un tiers, le petit solide a un volume égal à un vingt-septième du volume total. Cette propriété est très utile pour calculer le volume d'un solide tronqué, en effectuant une différence de volumes.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "V(cône) = πr²h/3 ; V(pyramide) = (aire base × h)/3 ; V(sphère) = (4/3)πr³",
        "1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1000 L",
        "Section parallèle à la base : figure semblable à la base (cercle pour un cône, carré pour une pyramide à base carrée)",
        "Rapport de réduction k (Thalès) : longueurs × k, volumes × k³",
      ],
      voixOff:
        "Résumons ce chapitre de géométrie dans l'espace. Retiens les trois formules de volume : pi r carré h sur trois pour le cône, aire de la base fois hauteur sur trois pour la pyramide, et quatre tiers pi r cube pour la sphère. N'oublie pas les conversions : un décimètre cube égale un litre, un centimètre cube égale un millilitre. Enfin, une section parallèle à la base donne toujours une figure semblable à la base, et le rapport de réduction, calculé avec Thalès, s'applique aux longueurs directement, mais au cube pour les volumes. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Ce chapitre de géométrie dans l'espace regroupe les formules de volume du cône, de la pyramide et de la sphère, ainsi que l'étude des sections de solides par un plan parallèle à la base, en lien avec le théorème de Thalès.",
    sections: [
      {
        titre: "Formules de volume",
        points: [
          "Cône : V = π × r² × h / 3",
          "Pyramide : V = aire de la base × h / 3",
          "Sphère : V = (4/3) × π × r³",
        ],
      },
      {
        titre: "Conversions d'unités",
        points: [
          "1 dm³ = 1 L ; 1 cm³ = 1 mL",
          "1 m³ = 1000 dm³ = 1000 L",
          "Passer à l'unité inférieure : × 1000 ; à l'unité supérieure : ÷ 1000",
        ],
      },
      {
        titre: "Sections de solides",
        points: [
          "Plan parallèle à la base : figure semblable à la base",
          "Section d'un cône : un cercle ; section d'une pyramide à base carrée : un carré",
          "Rapport de réduction k = distance au sommet / hauteur totale (Thalès)",
        ],
      },
      {
        titre: "Volume et réduction",
        points: [
          "Longueurs de la section × k par rapport à la base",
          "Volume du petit solide (au sommet) = k³ × volume du solide complet",
          "Pour un solide tronqué : volume tronqué = volume total − volume du petit solide",
        ],
      },
    ],
    audio:
      "Fiche de révision : volumes et sections de solides. Trois formules de volume à connaître : pour le cône, pi fois le rayon au carré fois la hauteur, divisé par trois ; pour la pyramide, l'aire de la base fois la hauteur, divisé par trois ; pour la sphère, quatre tiers fois pi fois le rayon au cube. Pour les conversions, un décimètre cube équivaut à un litre, un centimètre cube équivaut à un millilitre, et un mètre cube équivaut à mille litres. Quand on coupe un cône ou une pyramide par un plan parallèle à la base, on obtient une section semblable à la base : un cercle pour le cône, un polygone identique à la base pour la pyramide. Le rapport de réduction se calcule avec le théorème de Thalès, en comparant les hauteurs. Ce même rapport, élevé au cube, donne le rapport des volumes entre le petit solide obtenu au sommet et le solide complet.",
  },
  memoCards: [
    { recto: "Formule du volume du cône ?", verso: "V = π × r² × h / 3" },
    { recto: "Formule du volume de la pyramide ?", verso: "V = aire de la base × hauteur / 3" },
    { recto: "Formule du volume de la sphère ?", verso: "V = (4/3) × π × r³ (attention, le rayon est au cube)" },
    { recto: "Équivalence entre dm³ et litres ?", verso: "1 dm³ = 1 L. Et 1 cm³ = 1 mL." },
    { recto: "Combien de litres dans 1 m³ ?", verso: "1 m³ = 1000 L." },
    { recto: "Quelle est la section d'un cône par un plan parallèle à la base ?", verso: "Un cercle (plus petit que la base)." },
    { recto: "Comment calculer le rapport de réduction k d'une section ?", verso: "k = distance du sommet au plan de coupe / hauteur totale (théorème de Thalès)." },
    { recto: "Comment le volume du petit solide (au sommet) se calcule-t-il ?", verso: "Volume du petit solide = k³ × volume du solide complet." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la formule du volume d'une pyramide ?",
      choix: ["aire base × h", "aire base × h / 3", "périmètre base × h", "aire base × h / 2"],
      bonneReponse: 1,
      explication: "Le volume d'une pyramide est le tiers du produit de l'aire de la base par la hauteur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien vaut 3 dm³ en litres ?",
      choix: ["0,3 L", "3 L", "30 L", "3000 L"],
      bonneReponse: 1,
      explication: "1 dm³ = 1 L, donc 3 dm³ = 3 L.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule le volume d'une pyramide de base carrée de côté 5 cm et de hauteur 12 cm.",
      reponse: "V = 100 cm³",
      explication: "Aire de la base = 5² = 25 cm². V = (25 × 12)/3 = 300/3 = 100 cm³.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La section d'un cône par un plan parallèle à sa base est :",
      choix: ["Un carré", "Un cercle", "Un triangle", "Un rectangle"],
      bonneReponse: 1,
      explication: "Le cône a une base circulaire, donc toute section parallèle à la base est aussi un cercle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le volume d'un cône de rayon 4 cm et de hauteur 9 cm (donner le résultat en fonction de π, puis arrondi au dixième).",
      reponse: "V = 48π cm³ ≈ 150,8 cm³",
      explication: "V = π × 4² × 9 / 3 = π × 16 × 9 / 3 = π × 144/3 = 48π ≈ 150,8 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Calcule le volume d'une sphère de rayon 3 cm (donner le résultat en fonction de π, puis arrondi au dixième).",
      reponse: "V = 36π cm³ ≈ 113,1 cm³",
      explication: "V = (4/3) × π × 3³ = (4/3) × π × 27 = 36π ≈ 113,1 cm³.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un réservoir cubique de 2 m d'arête est rempli d'eau. Quel volume d'eau, en litres, peut-il contenir ?",
      choix: ["8 L", "800 L", "8000 L", "80000 L"],
      bonneReponse: 2,
      explication: "V = 2³ = 8 m³. Comme 1 m³ = 1000 L, V = 8 × 1000 = 8000 L.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Une pyramide de hauteur SH = 15 cm est coupée par un plan parallèle à la base, à une distance SM = 5 cm du sommet. La base a un côté de 12 cm. Calcule le côté de la section obtenue.",
      reponse: "4 cm",
      explication: "k = SM/SH = 5/15 = 1/3. Côté de la section = (1/3) × 12 = 4 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un cône de hauteur totale 18 cm et de rayon de base 6 cm est coupé par un plan parallèle à la base, à 6 cm du sommet. Calcule le rayon de la section obtenue, puis le volume du petit cône (au sommet), en fonction de π.",
      reponse: "Rayon de la section = 2 cm ; volume du petit cône = 8π cm³",
      explication:
        "k = 6/18 = 1/3. Rayon de la section = (1/3) × 6 = 2 cm. Volume du grand cône = π×6²×18/3 = π×36×6 = 216π cm³. Volume du petit cône = k³ × 216π = (1/27) × 216π = 8π cm³.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "Une pyramide complète a un volume de 270 cm³. Une réduction de cette pyramide, de rapport k = 1/3, a pour volume :",
      choix: ["90 cm³", "30 cm³", "10 cm³", "22,5 cm³"],
      bonneReponse: 2,
      explication: "Volume de la réduction = k³ × volume total = (1/3)³ × 270 = (1/27) × 270 = 10 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un glacier vend des cônes de glace de rayon 3 cm et de hauteur 10 cm, entièrement remplis. Une boule de glace supplémentaire, de rayon 3 cm, est ajoutée au-dessus (une demi-sphère). Calcule le volume total de glace (cône + demi-sphère), en fonction de π.",
      reponse: "V total = 48π cm³",
      explication:
        "Volume du cône = π×3²×10/3 = π×9×10/3 = 30π cm³. Volume de la demi-sphère = (1/2)×(4/3)×π×3³ = (1/2)×(4/3)×π×27 = 18π cm³. V total = 30π + 18π = 48π cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un silo à grains a la forme d'un cylindre surmonté d'un cône. Le cylindre a un rayon de 2 m et une hauteur de 5 m ; le cône a le même rayon et une hauteur de 3 m. Calcule le volume total du silo, en fonction de π.",
      reponse: "V total = 24π m³",
      explication:
        "Volume du cylindre = π × 2² × 5 = 20π m³. Volume du cône = π × 2² × 3 / 3 = π × 4 = 4π m³. V total = 20π + 4π = 24π m³.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la formule du volume d'une sphère ?",
      choix: ["(4/3)πr³", "4πr²", "πr²h", "(4/3)πr²"],
      bonneReponse: 0,
      explication: "Le volume d'une sphère est (4/3) × π × r³.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Calcule le volume d'un cône de rayon 5 cm et de hauteur 6 cm (en fonction de π).",
      reponse: "V = 50π cm³",
      explication: "V = π × 5² × 6 / 3 = π × 25 × 2 = 50π cm³.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Combien de litres contient un récipient de 4500 cm³ ?",
      reponse: "4,5 L",
      explication: "1000 cm³ = 1 L, donc 4500 cm³ = 4,5 L.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une pyramide de base rectangulaire (4 cm × 6 cm) a une hauteur de 9 cm. Son volume est :",
      choix: ["72 cm³", "216 cm³", "24 cm³", "108 cm³"],
      bonneReponse: 0,
      explication: "Aire de la base = 4 × 6 = 24 cm². V = (24 × 9)/3 = 216/3 = 72 cm³.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une pyramide de hauteur 20 cm est coupée à 5 cm du sommet par un plan parallèle à la base. Quel est le rapport k de la section, et quelle fraction du volume total représente le petit solide obtenu ?",
      reponse: "k = 1/4 ; le petit solide représente 1/64 du volume total",
      explication: "k = 5/20 = 1/4. Le rapport des volumes est k³ = (1/4)³ = 1/64.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Volumes et sections de solides",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le volume d'un cône se calcule avec la formule :",
          choix: ["πr²h", "πr²h/3", "πr³/3", "2πrh"],
          bonneReponse: 1,
          explication: "V(cône) = π × r² × h / 3.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Calcule le volume d'une pyramide de base carrée de côté 4 cm et de hauteur 6 cm.",
          reponse: "V = 32 cm³",
          explication: "Aire de la base = 4² = 16 cm². V = (16 × 6)/3 = 96/3 = 32 cm³.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule le volume d'une sphère de rayon 5 cm (en fonction de π, puis arrondi au dixième).",
          reponse: "V = (500/3)π cm³ ≈ 523,6 cm³",
          explication: "V = (4/3) × π × 5³ = (4/3) × π × 125 = (500/3)π cm³, soit environ 523,6 cm³ (avec π ≈ 3,14159).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un récipient cylindrique a un volume de 6,28 L. Combien cela représente-t-il de cm³ ?",
          reponse: "6280 cm³",
          explication: "1 L = 1000 cm³, donc 6,28 L = 6,28 × 1000 = 6280 cm³.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question:
            "Un cône de hauteur 12 cm est coupé par un plan parallèle à la base, à 4 cm du sommet. Quel est le rapport de réduction k ?",
          choix: ["1/4", "1/3", "1/2", "4/12"],
          bonneReponse: 1,
          explication: "k = distance au sommet / hauteur totale = 4/12 = 1/3.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un cône a un volume de 150 cm³. Il est coupé par un plan parallèle à la base, avec un rapport de réduction k = 1/5 pour le petit cône obtenu au sommet. Calcule le volume de ce petit cône, puis le volume du tronc de cône restant.",
          reponse: "Volume du petit cône = 1,2 cm³ ; volume du tronc de cône = 148,8 cm³",
          explication:
            "Volume du petit cône = k³ × 150 = (1/125) × 150 = 1,2 cm³. Volume du tronc de cône = 150 − 1,2 = 148,8 cm³.",
        },
      ],
    },
    {
      titre: "Examen 2 — Volumes et sections de solides",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le volume d'une sphère se calcule avec la formule :",
          choix: ["(4/3)πr³", "4πr²", "(4/3)πr²", "πr²h/3"],
          bonneReponse: 0,
          explication: "V(sphère) = (4/3) × π × r³.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Combien de mL représentent 2 dm³ ?",
          reponse: "2000 mL",
          explication: "1 dm³ = 1 L = 1000 mL, donc 2 dm³ = 2000 mL.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Calcule le volume d'un cône de rayon 6 cm et de hauteur 10 cm (en fonction de π).",
          reponse: "V = 120π cm³",
          explication: "V = π × 6² × 10 / 3 = π × 36 × 10 / 3 = π × 360/3 = 120π cm³.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une pyramide de base rectangulaire (5 cm × 8 cm) a un volume de 80 cm³. Calcule sa hauteur.",
          reponse: "h = 6 cm",
          explication: "Aire de la base = 5 × 8 = 40 cm². V = (40 × h)/3 = 80, donc 40h = 240, donc h = 6 cm.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une pyramide de hauteur 24 cm est coupée à 18 cm du sommet. Le rapport de réduction k vaut :",
          choix: ["1/3", "2/3", "3/4", "18/24"],
          bonneReponse: 2,
          explication: "k = 18/24 = 3/4.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une piscine a la forme d'un pavé droit de 8 m de long, 4 m de large et 1,5 m de profondeur. Elle est remplie aux trois quarts. Calcule le volume d'eau dans la piscine, en m³ puis en litres.",
          reponse: "36 m³, soit 36 000 L",
          explication:
            "Volume total = 8 × 4 × 1,5 = 48 m³. Volume aux trois quarts = 48 × 3/4 = 36 m³. En litres : 36 × 1000 = 36 000 L.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "V(cône) = π × r² × h / 3 ; V(pyramide) = aire de la base × h / 3 ; V(sphère) = (4/3) × π × r³.",
    "1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1000 L.",
    "Une section parallèle à la base donne une figure semblable à la base (cercle pour un cône, polygone identique pour une pyramide).",
    "Rapport de réduction k = distance du sommet au plan / hauteur totale (théorème de Thalès).",
    "Volume du petit solide obtenu au sommet = k³ × volume du solide complet.",
    "Pour un solide tronqué : volume tronqué = volume total − volume du petit solide retiré.",
  ],
};

export default chapitre;
