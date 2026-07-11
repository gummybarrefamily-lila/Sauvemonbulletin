import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "parallelogrammes",
  titre: "Les parallélogrammes",
  matiere: "maths",
  niveau: "5eme",
  description:
    "Découvrir la définition et les propriétés du parallélogramme (côtés, angles, diagonales), apprendre à démontrer qu'un quadrilatère est un parallélogramme, et distinguer ses cas particuliers : rectangle, losange et carré.",
  objectifs: [
    "Connaître la définition d'un parallélogramme et son vocabulaire (côtés opposés, diagonales)",
    "Connaître et utiliser les propriétés des côtés, des angles et des diagonales d'un parallélogramme",
    "Savoir démontrer qu'un quadrilatère est un parallélogramme à l'aide des réciproques du cours",
    "Reconnaître et caractériser les cas particuliers : rectangle, losange et carré",
    "Construire un parallélogramme à partir de données (côtés, angle, sommets)",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un parallélogramme ?",
      illustration: "▱",
      visuel: "(AB) // (DC) et (AD) // (BC)",
      contenu: [
        "Un parallélogramme est un quadrilatère (4 côtés)",
        "Ses côtés opposés sont parallèles deux à deux",
        "ABCD est un parallélogramme si (AB) // (DC) et (AD) // (BC)",
        "[AB] et [DC] sont opposés ; [AD] et [BC] sont opposés",
      ],
      voixOff:
        "Un parallélogramme est un quadrilatère, c'est-à-dire une figure à quatre côtés, dont les côtés opposés sont parallèles deux à deux. Pour le quadrilatère ABCD, cela veut dire que la droite (AB) est parallèle à la droite (DC), et que la droite (AD) est parallèle à la droite (BC). C'est cette double propriété de parallélisme qui définit un parallélogramme.",
    },
    {
      titre: "Les côtés opposés sont égaux",
      illustration: "📏",
      visuel: "AB = DC et AD = BC",
      contenu: [
        "Conséquence directe du parallélisme des côtés opposés",
        "Dans un parallélogramme ABCD : AB = DC et AD = BC",
        "Attention à l'ordre des lettres : A, B, C, D doivent se suivre",
        "Exemple : si AB = 6 cm et BC = 4 cm, alors DC = 6 cm et AD = 4 cm",
      ],
      voixOff:
        "Une conséquence importante de la définition : dans un parallélogramme, les côtés opposés ont toujours la même longueur. Pour ABCD, cela donne AB égale DC, et AD égale BC. Il faut bien respecter l'ordre des sommets quand on nomme le parallélogramme, pour savoir quels côtés sont réellement opposés.",
    },
    {
      titre: "Les angles d'un parallélogramme",
      illustration: "📐",
      visuel: "Â = Ĉ ; B̂ = D̂ ; Â + B̂ = 180°",
      contenu: [
        "Les angles opposés sont égaux : Â = Ĉ et B̂ = D̂",
        "Deux angles consécutifs sont supplémentaires (somme = 180°)",
        "Exemple : si Â = 70°, alors B̂ = 110°, Ĉ = 70°, D̂ = 110°",
        "70 + 110 = 180 : on retrouve bien des angles supplémentaires",
      ],
      voixOff:
        "Les angles d'un parallélogramme obéissent aussi à des règles précises. Les angles opposés sont égaux : l'angle en A est égal à l'angle en C, et l'angle en B est égal à l'angle en D. De plus, deux angles consécutifs, c'est-à-dire côte à côte, sont supplémentaires : leur somme fait toujours cent quatre-vingts degrés. Par exemple, si l'angle en A mesure soixante-dix degrés, l'angle en B mesure cent dix degrés.",
    },
    {
      titre: "Les diagonales se coupent en leur milieu",
      illustration: "✖️",
      visuel: "O = milieu de [AC] et de [BD]",
      contenu: [
        "Les diagonales [AC] et [BD] se coupent en un point O",
        "O est le milieu de [AC] : OA = OC",
        "O est aussi le milieu de [BD] : OB = OD",
        "O est le centre de symétrie du parallélogramme",
      ],
      voixOff:
        "La dernière grande propriété concerne les diagonales. Dans un parallélogramme, les deux diagonales, AC et BD, se coupent en un même point que l'on appelle O. Ce point O est à la fois le milieu de la diagonale AC et le milieu de la diagonale BD. On dit que O est le centre de symétrie du parallélogramme : la figure entière est symétrique par rapport à ce point.",
    },
    {
      titre: "Prouver qu'un quadrilatère est un parallélogramme",
      illustration: "🔍",
      visuel: "3 méthodes possibles",
      contenu: [
        "Méthode 1 : les diagonales se coupent en leur milieu",
        "Méthode 2 : les côtés opposés sont égaux deux à deux",
        "Méthode 3 : un côté est parallèle ET de même longueur que son opposé",
        "Une seule de ces trois méthodes suffit pour conclure",
      ],
      voixOff:
        "Comment démontrer qu'un quadrilatère est un parallélogramme sans mesurer tous les angles ? Trois méthodes existent. Première méthode : si les diagonales se coupent en leur milieu, c'est un parallélogramme. Deuxième méthode : si les côtés opposés sont égaux deux à deux, c'est un parallélogramme. Troisième méthode : si un côté est à la fois parallèle et de même longueur que son côté opposé, c'est aussi un parallélogramme. Une seule de ces méthodes suffit.",
    },
    {
      titre: "Le rectangle, un parallélogramme particulier",
      illustration: "🟦",
      visuel: "4 angles droits",
      contenu: [
        "Un rectangle est un parallélogramme qui a un angle droit",
        "Angles opposés égaux + angles consécutifs supplémentaires → les 4 angles sont droits",
        "Ses côtés opposés restent égaux deux à deux",
        "En plus : ses diagonales ont la même longueur",
      ],
      voixOff:
        "Le rectangle est un cas particulier de parallélogramme : c'est un parallélogramme qui possède un angle droit. Comme les angles opposés sont égaux et que les angles consécutifs sont supplémentaires, dès qu'un angle est droit, les quatre angles du rectangle sont droits. Autre propriété propre au rectangle : ses deux diagonales ont exactement la même longueur.",
    },
    {
      titre: "Le losange, un parallélogramme particulier",
      illustration: "🔷",
      visuel: "4 côtés égaux",
      contenu: [
        "Un losange est un parallélogramme avec deux côtés consécutifs égaux",
        "Du coup, les 4 côtés du losange sont égaux",
        "Ses angles opposés restent égaux, ses angles consécutifs restent supplémentaires",
        "En plus : ses diagonales sont perpendiculaires",
      ],
      voixOff:
        "Le losange est un autre parallélogramme particulier : c'est un parallélogramme qui a deux côtés consécutifs de même longueur. Comme les côtés opposés d'un parallélogramme sont déjà égaux, cela entraîne que les quatre côtés du losange sont égaux. La propriété propre au losange concerne ses diagonales : en plus de se couper en leur milieu, elles sont perpendiculaires.",
    },
    {
      titre: "Le carré, à la fois rectangle et losange",
      illustration: "⬜",
      visuel: "4 côtés égaux + 4 angles droits",
      contenu: [
        "Un carré est à la fois un rectangle ET un losange",
        "4 côtés égaux (propriété du losange)",
        "4 angles droits (propriété du rectangle)",
        "Diagonales de même longueur ET perpendiculaires, qui se coupent en leur milieu",
      ],
      voixOff:
        "Le carré cumule les deux propriétés précédentes : c'est à la fois un rectangle et un losange. Il a donc quatre côtés égaux, comme le losange, et quatre angles droits, comme le rectangle. Ses diagonales ont la même longueur, comme dans un rectangle, et elles sont perpendiculaires, comme dans un losange, tout en se coupant toujours en leur milieu.",
    },
    {
      titre: "Construire un parallélogramme et retenir l'essentiel",
      illustration: "🏆",
      visuel: "Aire = base × hauteur",
      contenu: [
        "Pour placer le 4e sommet : reporter les longueurs au compas en utilisant le parallélisme",
        "Astuce rapide : le milieu de [AC] doit être le même point que le milieu de [BD]",
        "L'aire d'un parallélogramme se calcule par base × hauteur (vu en détail plus tard)",
        "Retenir : côtés opposés égaux, angles opposés égaux, angles consécutifs supplémentaires, diagonales de même milieu",
      ],
      voixOff:
        "Pour construire un parallélogramme connaissant trois sommets, on plante le compas pour reporter les longueurs des côtés parallèles, ou on utilise une équerre pour tracer les parallèles. Une astuce rapide consiste à utiliser la propriété des diagonales : le milieu de la diagonale AC doit être exactement le même point que le milieu de la diagonale BD. Pour terminer, retiens l'essentiel : dans un parallélogramme, les côtés opposés sont égaux, les angles opposés sont égaux, les angles consécutifs sont supplémentaires, et les diagonales se coupent en leur milieu. Bravo, tu maîtrises maintenant les parallélogrammes !",
    },
  ],
  fiche: {
    intro:
      "Un parallélogramme ABCD est un quadrilatère dont les côtés opposés sont parallèles deux à deux : (AB) // (DC) et (AD) // (BC).",
    sections: [
      {
        titre: "Définition et vocabulaire",
        points: [
          "Parallélogramme ABCD : (AB) // (DC) et (AD) // (BC)",
          "Côtés opposés : [AB] et [DC] d'une part, [AD] et [BC] d'autre part",
          "Diagonales : [AC] et [BD], qui relient les sommets opposés",
        ],
      },
      {
        titre: "Propriétés à connaître",
        points: [
          "Côtés opposés de même longueur : AB = DC et AD = BC",
          "Angles opposés égaux : Â = Ĉ et B̂ = D̂",
          "Deux angles consécutifs sont supplémentaires (leur somme fait 180°)",
          "Les diagonales se coupent en leur milieu commun O (centre de symétrie)",
        ],
      },
      {
        titre: "Prouver qu'un quadrilatère est un parallélogramme",
        points: [
          "Si les diagonales se coupent en leur milieu → c'est un parallélogramme",
          "Si les côtés opposés sont égaux deux à deux → c'est un parallélogramme",
          "Si un côté est parallèle ET de même longueur que son opposé → c'est un parallélogramme",
        ],
      },
      {
        titre: "Cas particuliers",
        points: [
          "Rectangle : parallélogramme avec un angle droit (donc les 4 le sont) ; diagonales de même longueur",
          "Losange : parallélogramme avec deux côtés consécutifs égaux (donc les 4 côtés égaux) ; diagonales perpendiculaires",
          "Carré : à la fois rectangle et losange (4 côtés égaux, 4 angles droits, diagonales égales et perpendiculaires)",
          "Aire d'un parallélogramme = base × hauteur",
        ],
      },
    ],
    audio:
      "Fiche de révision : les parallélogrammes. Un parallélogramme ABCD est un quadrilatère dont les côtés opposés sont parallèles deux à deux : la droite AB est parallèle à la droite DC, et la droite AD est parallèle à la droite BC. Les diagonales sont les segments AC et BD, qui relient les sommets opposés. Trois propriétés sont à connaître par cœur : les côtés opposés sont de même longueur, AB égale DC et AD égale BC ; les angles opposés sont égaux, l'angle en A égale l'angle en C, et l'angle en B égale l'angle en D ; deux angles consécutifs sont supplémentaires, leur somme fait cent quatre-vingts degrés. Enfin, les diagonales se coupent en leur milieu commun, appelé O, qui est le centre de symétrie de la figure. Pour prouver qu'un quadrilatère est un parallélogramme, trois méthodes suffisent : montrer que ses diagonales se coupent en leur milieu, ou montrer que ses côtés opposés sont égaux deux à deux, ou montrer qu'un côté est à la fois parallèle et de même longueur que son côté opposé. Le rectangle, le losange et le carré sont des parallélogrammes particuliers. Le rectangle est un parallélogramme qui a un angle droit, ce qui entraîne que ses quatre angles sont droits ; ses diagonales sont en plus de même longueur. Le losange est un parallélogramme qui a deux côtés consécutifs égaux, ce qui entraîne que ses quatre côtés sont égaux ; ses diagonales sont en plus perpendiculaires. Le carré cumule les deux : quatre côtés égaux, quatre angles droits, diagonales de même longueur et perpendiculaires. Pour finir, retiens que l'aire d'un parallélogramme se calcule en multipliant la base par la hauteur.",
  },
  memoCards: [
    { recto: "Définition d'un parallélogramme ABCD ?", verso: "Quadrilatère dont les côtés opposés sont parallèles deux à deux : (AB) // (DC) et (AD) // (BC)." },
    { recto: "Que dire des côtés opposés d'un parallélogramme ?", verso: "Ils sont de même longueur : AB = DC et AD = BC." },
    { recto: "Que dire des angles opposés d'un parallélogramme ?", verso: "Ils sont égaux : Â = Ĉ et B̂ = D̂." },
    { recto: "Que dire de deux angles consécutifs d'un parallélogramme ?", verso: "Ils sont supplémentaires : leur somme vaut 180°." },
    { recto: "Propriété des diagonales d'un parallélogramme ?", verso: "Elles se coupent en leur milieu commun O, qui est le centre de symétrie de la figure." },
    { recto: "Comment prouver qu'un quadrilatère est un parallélogramme ?", verso: "Diagonales de même milieu, OU côtés opposés égaux deux à deux, OU un côté parallèle ET égal à son opposé." },
    { recto: "Qu'est-ce qu'un rectangle ?", verso: "Un parallélogramme avec un angle droit (donc les 4 angles sont droits) ; ses diagonales sont de même longueur." },
    { recto: "Qu'est-ce qu'un losange ?", verso: "Un parallélogramme avec deux côtés consécutifs égaux (donc les 4 côtés sont égaux) ; ses diagonales sont perpendiculaires." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce qu'un parallélogramme ?",
      choix: [
        "Un quadrilatère qui a un angle droit",
        "Un quadrilatère dont les côtés opposés sont parallèles deux à deux",
        "Un quadrilatère dont les diagonales sont perpendiculaires",
        "Un quadrilatère qui a quatre côtés égaux",
      ],
      bonneReponse: 1,
      explication: "Par définition, ABCD est un parallélogramme si (AB) est parallèle à (DC) et si (AD) est parallèle à (BC).",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "ABCD est un parallélogramme. Que peut-on dire de ses côtés opposés ?",
      choix: ["Ils sont perpendiculaires", "Ils sont de longueurs différentes", "Ils sont de même longueur", "Ils se coupent en leur milieu"],
      bonneReponse: 2,
      explication: "Dans un parallélogramme, les côtés opposés sont parallèles et de même longueur : AB = DC et AD = BC.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "ABCD est un parallélogramme tel que AB = 6 cm et BC = 4 cm. Donne les longueurs CD et DA.",
      reponse: "CD = 6 cm et DA = 4 cm",
      explication: "Dans un parallélogramme, les côtés opposés sont égaux : CD = AB = 6 cm et DA = BC = 4 cm.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un parallélogramme ABCD, quels angles sont forcément égaux ?",
      choix: ["Tous les quatre angles", "Les angles opposés : Â et Ĉ, puis B̂ et D̂", "Aucun angle n'est forcément égal à un autre", "Seulement Â et B̂"],
      bonneReponse: 1,
      explication: "Dans un parallélogramme, ce sont les angles opposés qui sont égaux deux à deux, pas forcément les quatre angles.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un parallélogramme ABCD, l'angle  vaut 72°. Quelle est la mesure de l'angle B̂ ?",
      reponse: "108°",
      explication: " et B̂ sont deux angles consécutifs, donc supplémentaires : 180° − 72° = 108°.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "En reprenant la question précédente (Â = 72°, B̂ = 108°), donne les mesures de Ĉ et D̂.",
      reponse: "Ĉ = 72° et D̂ = 108°",
      explication: "Les angles opposés sont égaux : Ĉ = Â = 72° et D̂ = B̂ = 108°.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans un parallélogramme ABCD, les diagonales [AC] et [BD] se coupent en O. Que peut-on affirmer ?",
      choix: ["O est le milieu de [AC] seulement", "O est le milieu de [AC] et de [BD]", "[AC] et [BD] sont perpendiculaires", "[AC] et [BD] ont la même longueur"],
      bonneReponse: 1,
      explication: "Dans tout parallélogramme, les diagonales se coupent en leur milieu commun O.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un parallélogramme ABCD, les diagonales se coupent en O, avec OA = 4,5 cm et OB = 3 cm. Donne les longueurs OC, OD, AC et BD.",
      reponse: "OC = 4,5 cm ; OD = 3 cm ; AC = 9 cm ; BD = 6 cm",
      explication: "O est le milieu des deux diagonales, donc OC = OA = 4,5 cm et OD = OB = 3 cm. Donc AC = OA + OC = 9 cm et BD = OB + OD = 6 cm.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Un quadrilatère MNPQ a ses diagonales [MP] et [NQ] qui se coupent en leur milieu commun O. Que peut-on en conclure ?",
      choix: ["MNPQ est un losange", "MNPQ est un rectangle", "MNPQ est un parallélogramme", "On ne peut rien conclure"],
      bonneReponse: 2,
      explication: "Si les diagonales d'un quadrilatère se coupent en leur milieu, alors ce quadrilatère est un parallélogramme (réciproque du cours).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "EFGH est un quadrilatère tel que EF = 7 cm, GH = 7 cm, FG = 4,5 cm et EH = 4,5 cm (EF et GH sont opposés, FG et EH sont opposés). Peut-on affirmer que EFGH est un parallélogramme ? Justifie.",
      reponse: "Oui, EFGH est un parallélogramme.",
      explication: "Ses côtés opposés sont égaux deux à deux (EF = GH et FG = EH). Or, si un quadrilatère a ses côtés opposés égaux deux à deux, alors c'est un parallélogramme.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "ABCD est un rectangle de diagonale AC = 8 cm. Que vaut la diagonale BD ?",
      choix: ["4 cm", "8 cm", "16 cm", "On ne peut pas savoir"],
      bonneReponse: 1,
      explication: "Un rectangle est un parallélogramme particulier dont les diagonales ont, en plus de se couper en leur milieu, la même longueur : BD = AC = 8 cm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "RSTU est un losange. L'angle en R mesure 50°. Donne les mesures des trois autres angles, et précise la propriété particulière des diagonales d'un losange.",
      reponse: "Angle en T = 50°, angles en S et en U = 130° chacun. Les diagonales du losange sont perpendiculaires.",
      explication:
        "Un losange est un parallélogramme : l'angle opposé à R, en T, est égal, donc 50°. Les angles consécutifs, en S et en U, sont supplémentaires : 180° − 50° = 130°. De plus, comme le losange a ses quatre côtés égaux, ses diagonales sont perpendiculaires, en plus de se couper en leur milieu.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un parallélogramme ABCD, quelle est la propriété des diagonales [AC] et [BD] ?",
      choix: ["Elles sont perpendiculaires", "Elles se coupent en leur milieu", "Elles ont la même longueur", "Elles ne se coupent jamais"],
      bonneReponse: 1,
      explication: "Dans tout parallélogramme, les diagonales se coupent en leur milieu.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "ABCD est un parallélogramme avec AB = 5 cm. Que vaut DC ?",
      reponse: "5 cm",
      explication: "Les côtés opposés d'un parallélogramme sont égaux : DC = AB.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Dans un parallélogramme, un angle mesure 110°. Que vaut l'angle consécutif ?",
      reponse: "70°",
      explication: "Deux angles consécutifs d'un parallélogramme sont supplémentaires : 180° − 110° = 70°.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la particularité d'un losange par rapport à un parallélogramme quelconque ?",
      choix: ["Ses angles sont tous droits", "Ses diagonales sont perpendiculaires (et ses 4 côtés sont égaux)", "Ses diagonales sont égales", "Ses côtés opposés ne sont plus parallèles"],
      bonneReponse: 1,
      explication: "Un losange est un parallélogramme qui a deux côtés consécutifs égaux (donc ses 4 côtés sont égaux) ; ses diagonales sont perpendiculaires.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un quadrilatère a un côté parallèle ET de même longueur que son côté opposé. Quelle figure est-ce nécessairement ?",
      reponse: "Un parallélogramme",
      explication: "Un côté parallèle et de même longueur que son opposé suffit à prouver qu'un quadrilatère est un parallélogramme.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les parallélogrammes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle propriété caractérise un parallélogramme ?",
          choix: ["Ses diagonales sont perpendiculaires", "Ses côtés opposés sont parallèles deux à deux", "Il a un angle droit", "Ses quatre côtés sont égaux"],
          bonneReponse: 1,
          explication: "C'est la définition même du parallélogramme.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "ABCD est un parallélogramme. AD = 3,8 cm. Que vaut BC ? Justifie.",
          reponse: "BC = 3,8 cm",
          explication: "[AD] et [BC] sont des côtés opposés d'un parallélogramme, donc ils ont la même longueur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans un parallélogramme IJKL, l'angle en I mesure 118°. Calcule les angles en J, K et L.",
          reponse: "K = 118° ; J = 62° ; L = 62°",
          explication: "L'angle opposé à I est K, donc K = 118°. Les angles J et L, consécutifs à I, sont supplémentaires : 180° − 118° = 62°.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Dans un parallélogramme ABCD, les diagonales se coupent en O. On donne AC = 11 cm. Que vaut OA ?",
          reponse: "OA = 5,5 cm",
          explication: "O est le milieu de la diagonale [AC], donc OA = AC ÷ 2 = 5,5 cm.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Un quadrilatère a ses côtés opposés de même longueur deux à deux (on ne sait rien sur ses angles). Que peut-on en conclure ?",
          choix: ["C'est forcément un rectangle", "C'est forcément un losange", "C'est un parallélogramme", "On ne peut rien conclure"],
          bonneReponse: 2,
          explication: "La réciproque du cours : un quadrilatère dont les côtés opposés sont égaux deux à deux est un parallélogramme.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "ABCD est un rectangle. Ses diagonales se coupent en O et OA = 6,5 cm. Quelle est la longueur de la diagonale BD ? Explique ta démarche.",
          reponse: "BD = 13 cm",
          explication: "Dans un rectangle, les diagonales ont la même longueur : BD = AC. Comme O est le milieu de [AC], AC = 2 × OA = 13 cm, donc BD = AC = 13 cm.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les parallélogrammes",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Parmi ces quadrilatères, lequel n'est pas nécessairement un parallélogramme ?",
          choix: ["Le rectangle", "Le losange", "Le carré", "Le trapèze"],
          bonneReponse: 3,
          explication: "Un trapèze n'a qu'une seule paire de côtés opposés parallèles ; ce n'est pas forcément un parallélogramme, qui en exige deux paires.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "ABCD est un parallélogramme. CD = 9 cm. Que vaut AB ?",
          reponse: "AB = 9 cm",
          explication: "[AB] et [CD] sont des côtés opposés, donc ils ont la même longueur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Dans un parallélogramme, deux angles consécutifs mesurent (3x)° et (x + 40)°, et sont donc supplémentaires. Trouve x, puis la mesure des deux angles.",
          reponse: "x = 35 ; les deux angles mesurent 105° et 75°",
          explication:
            "Deux angles consécutifs d'un parallélogramme sont supplémentaires : 3x + (x + 40) = 180, donc 4x + 40 = 180, donc 4x = 140, donc x = 35. On obtient alors 3 × 35 = 105° et 35 + 40 = 75°, et 105 + 75 = 180. ✓",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question:
            "Dans un parallélogramme MNPQ, les diagonales se coupent en O avec ON = 3,5 cm. Que vaut OQ ? Que vaut la diagonale NQ ?",
          reponse: "OQ = 3,5 cm et NQ = 7 cm",
          explication: "O est le milieu des deux diagonales [MP] et [NQ], donc OQ = ON = 3,5 cm, et NQ = ON + OQ = 7 cm.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "ABCD est un losange. Que peut-on affirmer sur ses diagonales [AC] et [BD] ?",
          choix: ["Elles sont parallèles", "Elles sont perpendiculaires et se coupent en leur milieu", "Elles ont la même longueur", "Elles ne se coupent pas"],
          bonneReponse: 1,
          explication: "Dans un losange (parallélogramme à côtés consécutifs égaux), les diagonales se coupent en leur milieu et sont en plus perpendiculaires.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un quadrilatère WXYZ est un parallélogramme et son angle en W est droit. Démontre que ses quatre angles sont droits.",
          reponse: "Les quatre angles de WXYZ mesurent chacun 90°.",
          explication:
            "L'angle en W vaut 90°. L'angle opposé en Y est égal à l'angle en W (angles opposés égaux dans un parallélogramme), donc l'angle en Y vaut aussi 90°. Les angles en X et en Z sont consécutifs à W, donc supplémentaires à 90°, ce qui donne 180° − 90° = 90°. Les quatre angles valent donc 90° : WXYZ est un rectangle.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles deux à deux.",
    "Ses côtés opposés sont égaux, ses angles opposés sont égaux, et deux angles consécutifs sont supplémentaires (somme = 180°).",
    "Ses diagonales se coupent en leur milieu commun, qui est le centre de symétrie de la figure.",
    "Pour prouver qu'un quadrilatère est un parallélogramme : diagonales de même milieu, OU côtés opposés égaux deux à deux, OU un côté parallèle et égal à son opposé.",
    "Le rectangle, le losange et le carré sont des parallélogrammes particuliers : rectangle = un angle droit (donc 4), losange = deux côtés consécutifs égaux (donc 4), carré = les deux à la fois.",
    "L'aire d'un parallélogramme se calcule par base × hauteur (approfondi dans un autre chapitre).",
  ],
};

export default chapitre;
