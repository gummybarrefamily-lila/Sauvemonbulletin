import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "theoreme-thales",
  titre: "Le théorème de Thalès",
  matiere: "maths",
  niveau: "3eme",
  description:
    "Calculer une longueur dans une configuration de triangles avec le théorème de Thalès, et démontrer que deux droites sont parallèles avec sa réciproque : un grand classique de géométrie du brevet.",
  objectifs: [
    "Reconnaître une configuration de Thalès (triangles emboîtés ou papillon)",
    "Écrire correctement les rapports de longueurs égaux",
    "Calculer une longueur manquante grâce au théorème de Thalès",
    "Utiliser la réciproque de Thalès pour démontrer un parallélisme",
    "Utiliser la contraposée pour démontrer que deux droites ne sont pas parallèles",
  ],
  slides: [
    {
      titre: "La configuration de Thalès",
      illustration: "🔺",
      visuel: "triangle AMN avec (MN) // (BC)",
      contenu: [
        "Deux triangles emboîtés, ou en « papillon », avec deux côtés parallèles",
        "Configuration : A, M, B alignés et A, N, C alignés, avec (MN) parallèle à (BC)",
        "C'est la figure de base pour utiliser le théorème de Thalès",
        "Il existe aussi la configuration « papillon », où les droites se croisent en A",
      ],
      voixOff:
        "Le théorème de Thalès s'applique dans une configuration bien particulière : deux triangles emboîtés qui partagent un sommet commun, avec deux côtés parallèles entre eux. Les points A, M, B doivent être alignés, ainsi que A, N, C, et la droite (MN) doit être parallèle à la droite (BC). Il existe une variante appelée configuration papillon, où les deux droites se croisent en leur sommet commun A.",
    },
    {
      titre: "L'énoncé du théorème",
      illustration: "📐",
      visuel: "AM/AB = AN/AC = MN/BC",
      contenu: [
        "Si A, M, B sont alignés, A, N, C sont alignés, et (MN) // (BC), alors :",
        "AM/AB = AN/AC = MN/BC",
        "Les trois rapports sont égaux",
        "On retrouve les longueurs à partir des sommets communs A",
      ],
      voixOff:
        "Voici l'énoncé du théorème de Thalès. Si les points A, M, B sont alignés, si les points A, N, C sont alignés, et si la droite MN est parallèle à la droite BC, alors les rapports AM sur AB, AN sur AC, et MN sur BC, sont tous égaux entre eux. Attention à toujours écrire les longueurs à partir du sommet commun A en premier.",
    },
    {
      titre: "Calculer une longueur : exemple",
      illustration: "🧮",
      visuel: "AM=3 ; AB=5 ; AN=4 → AC = ?",
      contenu: [
        "Triangle ABC avec M sur (AB) et N sur (AC), (MN) // (BC)",
        "AM = 3 cm ; AB = 5 cm ; AN = 4 cm ; on cherche AC",
        "AM/AB = AN/AC → 3/5 = 4/AC",
        "AC = 4 × 5 / 3 = 20/3 ≈ 6,67 cm",
      ],
      voixOff:
        "Prenons un exemple concret. Dans un triangle A B C, M est sur le côté AB, N est sur le côté AC, et MN est parallèle à BC. On connaît AM égale trois centimètres, AB égale cinq centimètres, AN égale quatre centimètres, et on cherche AC. On pose l'égalité AM sur AB égale AN sur AC, soit trois cinquièmes égale quatre sur AC. On résout par produit en croix : AC égale quatre fois cinq, divisé par trois, soit vingt tiers, environ six virgule six sept centimètres.",
    },
    {
      titre: "Calculer la troisième longueur",
      illustration: "📏",
      visuel: "BC = MN × AB/AM",
      contenu: [
        "Avec les mêmes données, si BC = 8 cm, on peut calculer MN",
        "AM/AB = MN/BC → 3/5 = MN/8",
        "MN = 3 × 8 / 5 = 24/5 = 4,8 cm",
        "On utilise toujours le rapport commun connu pour trouver l'inconnu",
      ],
      voixOff:
        "On peut aussi calculer le troisième côté. Toujours avec AM égale trois, AB égale cinq, si BC égale huit centimètres, on cherche MN. On pose trois cinquièmes égale MN sur huit, donc MN égale trois fois huit, divisé par cinq, soit vingt-quatre cinquièmes, c'est-à-dire quatre virgule huit centimètres.",
    },
    {
      titre: "La configuration papillon",
      illustration: "🦋",
      visuel: "droites (BC) et (DE) sécantes en A, avec (BD) // (CE)",
      contenu: [
        "Les droites (BD) et (CE) se coupent en A",
        "Si (BD) // (CE), alors AB/AC = AD/AE = BD/CE",
        "Attention : les points B, A, C sont alignés ET D, A, E sont alignés",
        "Mais A est cette fois ENTRE les deux points sur chaque droite",
      ],
      voixOff:
        "Dans la configuration papillon, les droites BC et DE se coupent en un point A, avec cette fois A situé entre les deux extrémités sur chaque droite. Si BD est parallèle à CE, alors les rapports AB sur AC, AD sur AE, et BD sur CE sont égaux, exactement comme dans la configuration classique. Il faut juste faire attention à l'ordre des points, puisque A n'est plus une extrémité mais un point d'intersection au milieu.",
    },
    {
      titre: "La réciproque de Thalès",
      illustration: "🔄",
      visuel: "si AM/AB = AN/AC, alors (MN) // (BC)",
      contenu: [
        "La réciproque sert à démontrer que deux droites sont PARALLÈLES",
        "Si A, M, B alignés dans le même ordre que A, N, C, et si AM/AB = AN/AC",
        "Alors on peut conclure que (MN) est parallèle à (BC)",
        "Condition importante : les points doivent être dans le même ordre sur chaque droite",
      ],
      voixOff:
        "La réciproque du théorème de Thalès permet de démontrer que deux droites sont parallèles. Si les points A, M, B sont alignés dans le même ordre que les points A, N, C, et si le rapport AM sur AB est égal au rapport AN sur AC, alors on peut conclure que la droite MN est parallèle à la droite BC. Il est essentiel de vérifier que les points sont dans le même ordre sur les deux droites avant de conclure.",
    },
    {
      titre: "Utiliser la réciproque : exemple",
      illustration: "✅",
      visuel: "AM=2 ; AB=6 ; AN=3 ; AC=9 → (MN) // (BC) ?",
      contenu: [
        "AM = 2 ; AB = 6 → AM/AB = 2/6 = 1/3",
        "AN = 3 ; AC = 9 → AN/AC = 3/9 = 1/3",
        "Les deux rapports sont égaux, et les points sont bien alignés dans le même ordre",
        "Donc, d'après la réciproque de Thalès, (MN) est parallèle à (BC)",
      ],
      voixOff:
        "Voyons un exemple d'utilisation de la réciproque. On calcule le rapport AM sur AB : deux sixièmes, qui se simplifie en un tiers. On calcule ensuite AN sur AC : trois neuvièmes, qui se simplifie aussi en un tiers. Les deux rapports sont égaux, et les points sont alignés dans le bon ordre. On peut donc conclure, grâce à la réciproque de Thalès, que la droite MN est parallèle à la droite BC.",
    },
    {
      titre: "La contraposée : prouver que ce n'est PAS parallèle",
      illustration: "❌",
      visuel: "AM/AB ≠ AN/AC → (MN) n'est PAS parallèle à (BC)",
      contenu: [
        "Si les rapports AM/AB et AN/AC sont DIFFÉRENTS",
        "Alors (MN) n'est PAS parallèle à (BC)",
        "C'est la contraposée : elle permet de prouver un NON-parallélisme",
        "Méthode : calculer les deux rapports séparément et les comparer",
      ],
      voixOff:
        "Enfin, la contraposée du théorème de Thalès permet de prouver que deux droites ne sont pas parallèles. Si l'on calcule les deux rapports AM sur AB et AN sur AC, et qu'ils sont différents, alors on peut affirmer que la droite MN n'est pas parallèle à la droite BC. La méthode consiste simplement à calculer chaque rapport séparément, sous forme de fraction simplifiée, et à les comparer.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Théorème de Thalès : configuration + parallélisme connu → calcul de longueur",
        "AM/AB = AN/AC = MN/BC (toujours à partir du sommet commun)",
        "Réciproque : rapports égaux + même ordre des points → parallélisme démontré",
        "Contraposée : rapports différents → droites NON parallèles",
      ],
      voixOff:
        "Résumons ce théorème incontournable du brevet. Le théorème de Thalès s'utilise quand on connaît un parallélisme et qu'on cherche une longueur : les trois rapports de longueurs, calculés à partir du sommet commun, sont égaux. La réciproque s'utilise dans l'autre sens : quand deux rapports de longueurs sont égaux et les points bien alignés dans le même ordre, on peut affirmer que les droites sont parallèles. Et la contraposée permet de prouver l'inverse, que des droites ne sont pas parallèles, si les rapports sont différents.",
    },
  ],
  fiche: {
    intro:
      "Le théorème de Thalès relie longueurs et parallélisme dans une configuration de triangles emboîtés ou en papillon. Il se décline en trois usages : théorème (calculer), réciproque (prouver un parallélisme), contraposée (prouver un non-parallélisme).",
    sections: [
      {
        titre: "Configuration de Thalès",
        points: [
          "A, M, B alignés et A, N, C alignés (ou configuration papillon)",
          "(MN) parallèle à (BC)",
          "Toujours faire une figure claire avant de commencer",
        ],
      },
      {
        titre: "Théorème (calculer une longueur)",
        points: [
          "AM/AB = AN/AC = MN/BC",
          "On connaît le parallélisme, on cherche une longueur par produit en croix",
        ],
      },
      {
        titre: "Réciproque (prouver un parallélisme)",
        points: [
          "Points alignés dans le même ordre + rapports AM/AB et AN/AC égaux ⟹ (MN) // (BC)",
          "Toujours vérifier l'ordre des points avant de conclure",
        ],
      },
      {
        titre: "Contraposée (prouver un non-parallélisme)",
        points: [
          "Si AM/AB ≠ AN/AC, alors (MN) n'est pas parallèle à (BC)",
          "On compare deux fractions simplifiées",
        ],
      },
    ],
    audio:
      "Fiche de révision : le théorème de Thalès. Ce théorème s'applique dans une configuration de triangles emboîtés, ou en papillon, avec deux côtés parallèles. Le théorème permet de calculer une longueur quand on connaît le parallélisme : les rapports AM sur AB, AN sur AC, et MN sur BC sont égaux, en partant toujours du sommet commun. La réciproque de Thalès permet de démontrer qu'un parallélisme existe : si les points sont alignés dans le même ordre et que les rapports AM sur AB et AN sur AC sont égaux, alors les droites MN et BC sont parallèles. Enfin, la contraposée permet de démontrer que deux droites ne sont pas parallèles, lorsque les deux rapports calculés sont différents.",
  },
  memoCards: [
    { recto: "Configuration de Thalès ?", verso: "A, M, B alignés ; A, N, C alignés ; (MN) parallèle à (BC)." },
    { recto: "Formule du théorème de Thalès ?", verso: "AM/AB = AN/AC = MN/BC." },
    { recto: "Quand utiliser le théorème de Thalès ?", verso: "Quand le parallélisme est connu et qu'on cherche une longueur." },
    { recto: "Quand utiliser la réciproque de Thalès ?", verso: "Quand on veut prouver que deux droites sont parallèles (rapports égaux, points dans le même ordre)." },
    { recto: "Quand utiliser la contraposée de Thalès ?", verso: "Quand on veut prouver que deux droites ne sont PAS parallèles (rapports différents)." },
    { recto: "Erreur fréquente à éviter dans les rapports ?", verso: "Toujours écrire les longueurs à partir du sommet commun A en premier (AM/AB, pas AB/AM)." },
    { recto: "Qu'est-ce que la configuration papillon ?", verso: "Deux droites sécantes en A, avec A entre les extrémités sur chaque droite." },
    { recto: "Comment calculer une longueur inconnue avec Thalès ?", verso: "Poser l'égalité des rapports, puis résoudre par un produit en croix." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans une configuration de Thalès avec sommet commun A, quelle égalité est correcte ?",
      choix: ["AB/AM = AC/AN = BC/MN", "AM/AB = AN/AC = MN/BC", "AM/AN = AB/AC = MN/BC", "AM × AB = AN × AC"],
      bonneReponse: 1,
      explication: "Les rapports s'écrivent à partir du sommet commun A : AM/AB = AN/AC = MN/BC.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le théorème de Thalès nécessite dans sa configuration :",
      choix: ["Deux droites perpendiculaires", "Deux droites parallèles", "Un angle droit", "Un cercle"],
      bonneReponse: 1,
      explication: "La configuration de Thalès repose sur deux droites parallèles, (MN) et (BC).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans une configuration de Thalès, AM = 4 cm, AB = 6 cm, AN = 5 cm. Écris l'égalité des rapports (sans calculer AC).",
      reponse: "AM/AB = AN/AC, soit 4/6 = 5/AC",
      explication: "On applique directement le théorème de Thalès avec les longueurs connues.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La réciproque de Thalès permet de démontrer :",
      choix: ["Qu'un triangle est rectangle", "Qu'un parallélisme existe", "Qu'un angle est droit", "Qu'un cercle passe par 3 points"],
      bonneReponse: 1,
      explication: "La réciproque de Thalès sert à démontrer qu'une droite est parallèle à une autre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un triangle ABC, M sur (AB) et N sur (AC), (MN) // (BC). AM = 3 cm, AB = 4,5 cm, AC = 6 cm. Calcule AN.",
      reponse: "AN = 4 cm",
      explication: "AM/AB = AN/AC → 3/4,5 = AN/6, donc AN = 3 × 6 / 4,5 = 18/4,5 = 4.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Avec les mêmes données que la question précédente (AM = 3 ; AB = 4,5 ; AC = 6 ; AN = 4) et BC = 9 cm, calcule MN.",
      reponse: "MN = 6 cm",
      explication: "AM/AB = MN/BC → 3/4,5 = MN/9, donc MN = 3 × 9 / 4,5 = 27/4,5 = 6.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question:
        "A, M, B alignés et A, N, C alignés dans le même ordre. AM = 2 ; AB = 5 ; AN = 3 ; AC = 7,5. Peut-on conclure que (MN) // (BC) ?",
      choix: [
        "Oui, car AM/AB = AN/AC = 0,4",
        "Non, car les rapports sont différents",
        "On ne peut pas savoir sans mesurer BC",
        "Oui, car AM et AN sont différents",
      ],
      bonneReponse: 0,
      explication: "AM/AB = 2/5 = 0,4 et AN/AC = 3/7,5 = 0,4. Les rapports sont égaux, donc (MN) // (BC) par la réciproque de Thalès.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question:
        "Dans une configuration papillon, les droites (BC) et (DE) se coupent en A. AB = 3 ; AC = 4,5 ; AD = 2 ; AE = 3. Les droites (BD) et (CE) sont-elles parallèles ? Justifie.",
      reponse: "Oui, car AB/AC = AD/AE = 2/3.",
      explication: "AB/AC = 3/4,5 = 2/3 et AD/AE = 2/3. Les rapports sont égaux, donc d'après la réciproque de Thalès, (BD) // (CE).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un triangle ABC est tel que AB = 8 cm, AC = 10 cm, BC = 6 cm. M est sur (AB) avec AM = 6 cm, et N sur (AC) avec AN = 7,5 cm. Démontre que (MN) est parallèle à (BC), puis calcule MN.",
      reponse: "(MN) // (BC) car AM/AB = AN/AC = 0,75 ; MN = 4,5 cm.",
      explication:
        "AM/AB = 6/8 = 0,75 et AN/AC = 7,5/10 = 0,75. Les rapports sont égaux et les points alignés dans le même ordre, donc (MN) // (BC) par la réciproque de Thalès. On en déduit MN/BC = 0,75, donc MN = 0,75 × 6 = 4,5 cm.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question:
        "A, M, B alignés et A, N, C alignés dans le même ordre. AM = 3 ; AB = 8 ; AN = 5 ; AC = 12. Que peut-on conclure ?",
      choix: [
        "(MN) est parallèle à (BC)",
        "(MN) n'est pas parallèle à (BC), car 3/8 ≠ 5/12",
        "On ne peut rien conclure sans connaître MN",
        "(MN) est perpendiculaire à (BC)",
      ],
      bonneReponse: 1,
      explication: "AM/AB = 3/8 = 0,375 et AN/AC = 5/12 ≈ 0,417. Les rapports sont différents, donc par contraposée, (MN) n'est pas parallèle à (BC).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Une échelle de 5 m est posée contre un mur, son pied étant à 3 m du mur (elle touche donc le mur à une hauteur de 4 m, car 3² + 4² = 5²). Un tabouret de 1,2 m de haut est placé sous l'échelle et touche exactement le bord de l'échelle. Calcule à quelle distance d du PIED de l'échelle se trouve le tabouret.",
      reponse: "d = 0,9 m",
      explication:
        "Le pied de l'échelle est le sommet commun aux deux triangles emboîtés (grand triangle : hauteur 4 m, base 3 m ; petit triangle : hauteur 1,2 m, base d). Par Thalès : d/3 = 1,2/4, donc d = 3 × 1,2 / 4 = 3,6/4 = 0,9 m.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Dans un triangle ABC rectangle en A, un point M est sur [AB] avec AM = 4 cm, AB = 10 cm. Un point N est sur [AC] avec AN = 6 cm, AC = 15 cm. Prouve que (MN) // (BC), sachant que BC = 20 cm, calcule aussi MN.",
      reponse: "(MN) // (BC) car AM/AB = AN/AC = 0,4 ; MN = 8 cm.",
      explication: "AM/AB = 4/10 = 0,4 et AN/AC = 6/15 = 0,4 : les rapports sont égaux, donc (MN) // (BC). Alors MN/BC = 0,4, donc MN = 0,4 × 20 = 8 cm.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le théorème de Thalès permet de calculer :",
      choix: ["Un angle", "Une longueur", "Une aire", "Un volume"],
      bonneReponse: 1,
      explication: "Le théorème de Thalès s'utilise pour calculer une longueur manquante dans une configuration de triangles.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Dans une configuration de Thalès, quel est le sommet commun aux deux triangles ?",
      reponse: "Le point A.",
      explication: "C'est à partir du sommet commun A que l'on écrit tous les rapports de longueurs.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "AM = 2 ; AB = 5 ; AN = 3. En configuration de Thalès avec (MN) // (BC), calcule AC.",
      reponse: "AC = 7,5",
      explication: "AM/AB = AN/AC → 2/5 = 3/AC, donc AC = 3 × 5 / 2 = 7,5.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pour utiliser la réciproque de Thalès, il faut que :",
      choix: [
        "Les droites soient perpendiculaires",
        "Les rapports de longueurs soient égaux et les points alignés dans le même ordre",
        "Le triangle soit rectangle",
        "Les longueurs soient toutes égales",
      ],
      bonneReponse: 1,
      explication: "La réciproque de Thalès exige l'égalité des rapports et le même ordre des points alignés sur chaque droite.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "AM = 4 ; AB = 6 ; AN = 5 ; AC = 8. Les points sont alignés dans le même ordre. (MN) est-elle parallèle à (BC) ? Justifie.",
      reponse: "Non, car AM/AB = 4/6 ≈ 0,67 et AN/AC = 5/8 = 0,625, les rapports sont différents.",
      explication: "Par la contraposée de Thalès, des rapports différents montrent que (MN) n'est pas parallèle à (BC).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le théorème de Thalès",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Dans le théorème de Thalès, les rapports sont écrits à partir :",
          choix: ["Du milieu de BC", "Du sommet commun A", "D'un point quelconque", "De l'angle droit"],
          bonneReponse: 1,
          explication: "On écrit toujours les rapports à partir du sommet commun A : AM/AB = AN/AC = MN/BC.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Dans une configuration de Thalès, écris l'égalité des trois rapports de longueurs (lettres génériques A, M, N, B, C).",
          reponse: "AM/AB = AN/AC = MN/BC",
          explication: "C'est la formule générale du théorème de Thalès.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Triangle ABC, M sur (AB), N sur (AC), (MN) // (BC). AM = 5 ; AB = 8 ; AC = 12. Calcule AN.",
          reponse: "AN = 7,5",
          explication: "AM/AB = AN/AC → 5/8 = AN/12, donc AN = 5 × 12 / 8 = 60/8 = 7,5.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Avec les mêmes données (AM = 5 ; AB = 8 ; AC = 12 ; AN = 7,5) et BC = 10, calcule MN.",
          reponse: "MN = 6,25",
          explication: "AM/AB = MN/BC → 5/8 = MN/10, donc MN = 5 × 10 / 8 = 50/8 = 6,25.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question:
            "A, M, B alignés et A, N, C alignés dans le même ordre. AM = 6 ; AB = 9 ; AN = 4 ; AC = 6. (MN) est-elle parallèle à (BC) ?",
          choix: ["Oui, car AM/AB = AN/AC = 2/3", "Non, car les rapports sont différents", "On ne peut pas savoir", "Oui, car AM = AN"],
          bonneReponse: 0,
          explication: "AM/AB = 6/9 = 2/3 et AN/AC = 4/6 = 2/3 : rapports égaux, donc (MN) // (BC) par la réciproque de Thalès.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un panneau de signalisation de 2 m de haut projette une ombre de 3 m au sol. Au même moment, un arbre projette une ombre de 12 m. En modélisant la situation avec le théorème de Thalès (triangles semblables formés par les rayons du soleil), calcule la hauteur de l'arbre.",
          reponse: "8 m",
          explication:
            "Les triangles formés par le soleil sont en configuration de Thalès : hauteur/ombre est constant. 2/3 = h/12, donc h = 2 × 12 / 3 = 8 m.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le théorème de Thalès",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pour appliquer le théorème de Thalès, quelle information doit être connue ?",
          choix: ["Un angle droit", "Un parallélisme entre deux droites", "Une aire", "Un cercle circonscrit"],
          bonneReponse: 1,
          explication: "Le théorème de Thalès nécessite de connaître un parallélisme entre deux droites de la configuration.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Que permet de démontrer la réciproque du théorème de Thalès ?",
          reponse: "Qu'une droite est parallèle à une autre.",
          explication: "La réciproque de Thalès permet de conclure à un parallélisme quand les rapports de longueurs sont égaux.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Triangle ABC, M sur (AB), N sur (AC), (MN) // (BC). AM = 4 ; AB = 10 ; BC = 15. Calcule MN.",
          reponse: "MN = 6",
          explication: "AM/AB = MN/BC → 4/10 = MN/15, donc MN = 4 × 15 / 10 = 60/10 = 6.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans une configuration papillon, AB = 4 ; AC = 6 ; AD = 6 ; AE = 9. Les droites (BD) et (CE) sont-elles parallèles ? Justifie.",
          reponse: "Oui, car AB/AC = AD/AE = 2/3.",
          explication: "AB/AC = 4/6 = 2/3 et AD/AE = 6/9 = 2/3 : les rapports sont égaux, donc (BD) // (CE) par la réciproque de Thalès.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "AM = 3 ; AB = 7 ; AN = 4 ; AC = 9,5, points alignés dans le même ordre. Que peut-on conclure sur (MN) et (BC) ?",
          choix: [
            "(MN) est parallèle à (BC)",
            "(MN) n'est pas parallèle à (BC), car 3/7 ≠ 4/9,5",
            "Elles sont perpendiculaires",
            "On ne peut rien dire",
          ],
          bonneReponse: 1,
          explication: "AM/AB = 3/7 ≈ 0,43 et AN/AC = 4/9,5 ≈ 0,42. Les rapports sont différents (arrondis proches mais pas égaux exactement), donc (MN) n'est pas parallèle à (BC).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Une pyramide de hauteur SH = 12 m est coupée par un plan parallèle à sa base, à une hauteur SM = 8 m à partir du sommet S. Si le côté de la base mesure 9 m, calcule le côté de la section obtenue par ce plan (utilise le théorème de Thalès).",
          reponse: "6 m",
          explication: "Par Thalès, le rapport des longueurs correspond au rapport des hauteurs : SM/SH = 8/12 = 2/3. Le côté de la section = 2/3 × 9 = 6 m.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Configuration de Thalès : sommet commun A, points alignés A-M-B et A-N-C, avec (MN) parallèle à (BC).",
    "Théorème (pour calculer) : AM/AB = AN/AC = MN/BC. Toujours écrire les rapports à partir de A.",
    "Réciproque (pour prouver un parallélisme) : rapports égaux + points dans le même ordre ⟹ droites parallèles.",
    "Contraposée (pour prouver un non-parallélisme) : rapports différents ⟹ droites NON parallèles.",
    "Méthode de calcul : poser l'égalité des rapports, puis résoudre par un produit en croix.",
    "Erreur fréquente à éviter : inverser les rapports (écrire AB/AM au lieu de AM/AB), ou oublier de vérifier l'ordre des points pour la réciproque.",
  ],
};

export default chapitre;
