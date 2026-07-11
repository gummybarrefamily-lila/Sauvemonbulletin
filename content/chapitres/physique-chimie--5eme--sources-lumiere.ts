import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "sources-lumiere",
  titre: "Sources et propagation de la lumière",
  matiere: "physique-chimie",
  niveau: "5eme",
  description:
    "Distinguer source primaire et objet diffusant, comprendre pourquoi on voit un objet, connaître la propagation rectiligne de la lumière, sa vitesse, les milieux transparents/translucides/opaques, les ombres et les éclipses.",
  objectifs: [
    "Distinguer une source de lumière primaire d'un objet diffusant (source secondaire)",
    "Expliquer pourquoi on voit un objet : de la lumière doit atteindre l'œil",
    "Connaître le principe de propagation rectiligne de la lumière et modéliser un rayon lumineux",
    "Différencier milieux transparents, translucides et opaques, et savoir ce qu'est la vitesse de la lumière",
    "Expliquer la formation d'une ombre propre, d'une ombre portée, et le principe d'une éclipse",
  ],
  slides: [
    {
      titre: "Sources primaires et objets diffusants",
      illustration: "☀️",
      visuel: "Source primaire ≠ objet diffusant",
      contenu: [
        "Une source primaire produit elle-même sa lumière",
        "Exemples : le Soleil, une lampe allumée, une flamme, un écran allumé",
        "Un objet diffusant ne produit pas de lumière : il renvoie celle qu'il reçoit",
        "Exemples : la Lune, une table, un mur, un livre",
      ],
      voixOff:
        "Il existe deux façons pour un objet d'émettre de la lumière vers nos yeux. Une source primaire produit elle-même sa propre lumière : c'est le cas du Soleil, d'une lampe allumée, d'une flamme ou d'un écran allumé. Un objet diffusant, lui, ne produit aucune lumière : il se contente de renvoyer une partie de la lumière qu'il reçoit d'une source. La Lune, une table ou un livre sont des objets diffusants, pas des sources primaires.",
    },
    {
      titre: "Pourquoi voit-on un objet ?",
      illustration: "👁️",
      visuel: "Objet → lumière → œil",
      contenu: [
        "On voit un objet uniquement si de la lumière issue de cet objet entre dans notre œil",
        "Pour une source primaire : c'est sa propre lumière",
        "Pour un objet diffusant : c'est la lumière qu'il renvoie",
        "Dans le noir total, sans aucune lumière, on ne voit plus rien",
      ],
      voixOff:
        "On ne voit un objet que si de la lumière provenant de cet objet arrive jusqu'à notre œil. Pour une source primaire comme une lampe, c'est sa propre lumière qui nous atteint directement. Pour un objet diffusant comme un livre, c'est la lumière qu'il reçoit d'une source et qu'il renvoie vers nous. C'est pour cela que dans une pièce totalement plongée dans le noir, sans aucune source de lumière, on ne voit plus rien du tout.",
    },
    {
      titre: "La propagation rectiligne",
      illustration: "📏",
      visuel: "Rayon lumineux : une droite avec une flèche",
      contenu: [
        "Dans un milieu transparent et homogène, la lumière se propage en ligne droite",
        "On la modélise par un rayon lumineux : une droite fléchée",
        "La flèche indique le sens de propagation de la lumière",
        "C'est pour cela qu'on ne voit pas un objet caché derrière un obstacle",
      ],
      voixOff:
        "Dans un milieu transparent et homogène, comme l'air ou le vide, la lumière se propage toujours en ligne droite. On représente ce trajet par un rayon lumineux : une droite sur laquelle on dessine une flèche qui indique le sens de propagation, de la source vers l'objet éclairé. C'est justement parce que la lumière va tout droit qu'on ne peut pas voir un objet caché derrière un mur ou un obstacle opaque.",
    },
    {
      titre: "Les faisceaux lumineux",
      illustration: "🔦",
      visuel: "Parallèle • Divergent • Convergent",
      contenu: [
        "Un faisceau lumineux est un ensemble de rayons lumineux",
        "Faisceau parallèle : rayons qui restent à égale distance (lumière du Soleil sur Terre)",
        "Faisceau divergent : rayons qui s'écartent (lampe de poche)",
        "Faisceau convergent : rayons qui se rapprochent puis se croisent",
      ],
      voixOff:
        "Un faisceau lumineux est simplement un ensemble de rayons lumineux. Il peut être parallèle : les rayons restent à égale distance les uns des autres, comme la lumière du Soleil qui arrive sur Terre. Il peut être divergent : les rayons s'écartent en s'éloignant de la source, comme la lumière d'une lampe de poche. Ou il peut être convergent : les rayons se rapprochent et finissent par se croiser en un point.",
    },
    {
      titre: "Une vitesse extrêmement grande",
      illustration: "⚡",
      visuel: "300 000 km/s",
      contenu: [
        "Dans le vide ou dans l'air, la lumière se déplace à environ 300 000 km par seconde",
        "C'est la vitesse la plus grande connue dans l'Univers",
        "La lumière du Soleil met environ 8 minutes pour atteindre la Terre",
        "Malgré cette vitesse énorme, le trajet n'est pas instantané",
      ],
      voixOff:
        "La lumière se déplace extrêmement vite : dans le vide ou dans l'air, sa vitesse est d'environ trois cent mille kilomètres par seconde. C'est la vitesse la plus grande que l'on connaisse dans l'Univers. Pourtant, même à cette vitesse, le trajet n'est pas instantané : la lumière du Soleil met environ huit minutes pour parcourir les cent cinquante millions de kilomètres qui nous séparent de lui et atteindre la Terre.",
    },
    {
      titre: "Transparent, translucide, opaque",
      illustration: "🪟",
      visuel: "Verre • Papier calque • Mur",
      contenu: [
        "Transparent : laisse bien passer la lumière, on voit nettement à travers (verre, air, eau claire)",
        "Translucide : laisse passer une partie de la lumière, mais on ne voit pas net à travers (papier calque, verre dépoli)",
        "Opaque : ne laisse pas passer la lumière (mur, bois, métal)",
        "Un objet opaque éclairé bloque la lumière et crée une zone d'ombre",
      ],
      voixOff:
        "Les matériaux ne se comportent pas tous de la même façon face à la lumière. Un matériau transparent laisse bien passer la lumière, et on voit nettement à travers, comme le verre, l'air ou l'eau claire. Un matériau translucide laisse passer seulement une partie de la lumière, mais on ne distingue pas nettement les objets à travers, comme le papier calque ou le verre dépoli. Un matériau opaque, enfin, ne laisse pas passer la lumière du tout, comme un mur, du bois ou du métal.",
    },
    {
      titre: "Ombre propre et ombre portée",
      illustration: "🌑",
      visuel: "Objet opaque + source → ombre",
      contenu: [
        "Un objet opaque éclairé par une source bloque une partie de la lumière",
        "Ombre propre : la partie de l'objet lui-même qui n'est pas éclairée",
        "Ombre portée : la zone sombre projetée sur un écran ou le sol, derrière l'objet",
        "L'ombre portée se trouve dans le prolongement rectiligne des rayons bloqués",
      ],
      voixOff:
        "Quand un objet opaque est éclairé par une source de lumière, il bloque une partie des rayons lumineux et forme une ombre. L'ombre propre, c'est la partie de l'objet lui-même qui n'est pas directement éclairée. L'ombre portée, c'est la zone sombre que l'objet projette sur un écran ou sur le sol, derrière lui. Comme la lumière se propage en ligne droite, l'ombre portée se trouve exactement dans le prolongement des rayons lumineux bloqués par l'objet.",
    },
    {
      titre: "Les éclipses",
      illustration: "🌘",
      visuel: "Éclipse de Soleil / Éclipse de Lune",
      contenu: [
        "Une éclipse se produit quand un astre opaque bloque la lumière du Soleil",
        "Éclipse de Soleil : la Lune passe entre le Soleil et la Terre, son ombre balaie la Terre",
        "Éclipse de Lune : la Terre passe entre le Soleil et la Lune, son ombre couvre la Lune",
        "Les éclipses illustrent la propagation rectiligne de la lumière à très grande échelle",
      ],
      voixOff:
        "Une éclipse se produit lorsqu'un astre opaque bloque la lumière du Soleil et projette son ombre sur un autre astre. Lors d'une éclipse de Soleil, la Lune se place entre le Soleil et la Terre, et son ombre balaie une partie de la surface terrestre. Lors d'une éclipse de Lune, c'est la Terre qui se place entre le Soleil et la Lune, et l'ombre de la Terre vient couvrir la Lune. Ces deux phénomènes montrent, à l'échelle de l'espace, que la lumière se propage bien en ligne droite.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Source primaire (produit sa lumière) ≠ objet diffusant (renvoie la lumière reçue)",
        "On voit un objet quand de la lumière issue de lui entre dans notre œil",
        "La lumière se propage en ligne droite dans un milieu transparent et homogène, à 300 000 km/s",
        "Objet opaque + source → ombre propre et ombre portée ; à grande échelle, cela donne les éclipses",
      ],
      voixOff:
        "Résumons. Une source primaire produit sa propre lumière, alors qu'un objet diffusant se contente de renvoyer la lumière qu'il reçoit. On ne voit un objet que si de la lumière issue de lui entre dans notre œil. Dans un milieu transparent et homogène, la lumière se propage en ligne droite, à l'incroyable vitesse d'environ trois cent mille kilomètres par seconde. Enfin, un objet opaque éclairé forme une ombre propre et une ombre portée, et c'est ce même principe qui explique les éclipses de Soleil et de Lune. Bravo, tu connais maintenant l'essentiel sur les sources et la propagation de la lumière !",
    },
  ],
  fiche: {
    intro:
      "La lumière est produite par des sources primaires ou renvoyée par des objets diffusants ; elle se propage en ligne droite à très grande vitesse, ce qui explique la formation des ombres et des éclipses.",
    sections: [
      {
        titre: "Sources primaires et objets diffusants",
        points: [
          "Source primaire : produit sa propre lumière (Soleil, lampe allumée, flamme, écran allumé, étoile)",
          "Objet diffusant (source secondaire) : ne produit pas de lumière, renvoie celle qu'il reçoit (Lune, table, mur, livre)",
          "On voit un objet uniquement si de la lumière issue de cet objet atteint notre œil",
        ],
      },
      {
        titre: "Propagation rectiligne, faisceaux et vitesse",
        points: [
          "Dans un milieu transparent et homogène, la lumière se propage en ligne droite",
          "Rayon lumineux : droite fléchée qui modélise le trajet de la lumière, la flèche donne le sens de propagation",
          "Faisceau lumineux : ensemble de rayons, parallèle, divergent ou convergent",
          "Vitesse de la lumière dans l'air ou le vide : environ 300 000 km/s ; la lumière du Soleil met 8 minutes pour atteindre la Terre",
        ],
      },
      {
        titre: "Transparent, translucide, opaque",
        points: [
          "Transparent : laisse bien passer la lumière, vision nette à travers (verre, air, eau claire)",
          "Translucide : laisse passer une partie de la lumière, vision floue à travers (papier calque, verre dépoli)",
          "Opaque : ne laisse pas passer la lumière (mur, bois, métal)",
        ],
      },
      {
        titre: "Ombres et éclipses",
        points: [
          "Ombre propre : partie non éclairée de l'objet opaque lui-même",
          "Ombre portée : zone sombre projetée sur un écran ou le sol, dans le prolongement rectiligne des rayons bloqués",
          "Éclipse de Soleil : la Lune passe entre le Soleil et la Terre, son ombre balaie la Terre",
          "Éclipse de Lune : la Terre passe entre le Soleil et la Lune, son ombre couvre la Lune",
        ],
      },
    ],
    audio:
      "Fiche de révision : sources et propagation de la lumière. On distingue deux types d'objets lumineux. Une source primaire produit elle-même sa lumière, comme le Soleil, une lampe allumée, une flamme ou un écran allumé. Un objet diffusant, comme la Lune, une table ou un livre, ne produit aucune lumière : il renvoie seulement une partie de la lumière qu'il reçoit. On ne voit un objet que si de la lumière issue de lui atteint notre œil. Dans un milieu transparent et homogène, comme l'air ou le vide, la lumière se propage en ligne droite : on modélise son trajet par un rayon lumineux, une droite fléchée dont la flèche indique le sens de propagation. Un ensemble de rayons forme un faisceau lumineux, qui peut être parallèle, divergent ou convergent. La lumière se déplace extrêmement vite, environ trois cent mille kilomètres par seconde dans l'air ou le vide : la lumière du Soleil met ainsi environ huit minutes pour atteindre la Terre. Les matériaux se classent en trois familles selon leur comportement face à la lumière : transparents, comme le verre, qui laissent bien passer la lumière et permettent de voir nettement à travers ; translucides, comme le papier calque, qui laissent passer seulement une partie de la lumière sans permettre une vision nette ; et opaques, comme un mur, qui ne laissent pas passer la lumière du tout. Un objet opaque éclairé par une source bloque une partie des rayons lumineux et forme une ombre : l'ombre propre est la partie non éclairée de l'objet lui-même, tandis que l'ombre portée est la zone sombre projetée sur un écran ou sur le sol, dans le prolongement rectiligne des rayons bloqués. À très grande échelle, ce même principe explique les éclipses : lors d'une éclipse de Soleil, la Lune passe entre le Soleil et la Terre et son ombre balaie la Terre ; lors d'une éclipse de Lune, c'est la Terre qui passe entre le Soleil et la Lune et son ombre couvre la Lune.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'une source de lumière primaire ?", verso: "Un objet qui produit lui-même sa propre lumière (Soleil, lampe allumée, flamme)." },
    { recto: "Qu'est-ce qu'un objet diffusant ?", verso: "Un objet qui ne produit pas de lumière mais renvoie celle qu'il reçoit (Lune, table, livre)." },
    { recto: "Pourquoi voit-on un objet ?", verso: "Parce que de la lumière issue de cet objet (produite ou diffusée) entre dans notre œil." },
    { recto: "Comment se propage la lumière dans un milieu transparent et homogène ?", verso: "En ligne droite : on la modélise par un rayon lumineux, une droite fléchée." },
    { recto: "Quelle est la vitesse de la lumière dans l'air ou le vide ?", verso: "Environ 300 000 km/s, la plus grande vitesse connue dans l'Univers." },
    { recto: "Différence entre transparent, translucide et opaque ?", verso: "Transparent : vision nette à travers. Translucide : passage partiel, vision floue. Opaque : la lumière ne passe pas du tout." },
    { recto: "Différence entre ombre propre et ombre portée ?", verso: "L'ombre propre est sur l'objet lui-même ; l'ombre portée est projetée sur un écran ou le sol, derrière l'objet." },
    { recto: "Quelle est la différence entre une éclipse de Soleil et une éclipse de Lune ?", verso: "Éclipse de Soleil : la Lune est entre le Soleil et la Terre. Éclipse de Lune : la Terre est entre le Soleil et la Lune." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Laquelle de ces sources de lumière est une source primaire ?",
      choix: ["La Lune", "Une table éclairée", "Une bougie allumée", "Un miroir"],
      bonneReponse: 2,
      explication: "Une bougie allumée produit elle-même sa lumière : c'est une source primaire. La Lune, la table et le miroir ne font que renvoyer la lumière qu'ils reçoivent.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La Lune brille dans le ciel la nuit. Est-ce une source primaire ?",
      choix: ["Oui, elle produit sa propre lumière", "Non, elle diffuse la lumière du Soleil", "Oui, mais seulement en été", "Non, elle ne brille pas vraiment"],
      bonneReponse: 1,
      explication: "La Lune ne produit aucune lumière : elle renvoie (diffuse) la lumière du Soleil qu'elle reçoit. C'est un objet diffusant, pas une source primaire.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Pourquoi ne voit-on rien dans une pièce totalement plongée dans le noir ?",
      reponse: "Parce qu'il n'y a aucune lumière : aucun objet ne peut donc en renvoyer ou en produire vers notre œil.",
      explication: "On ne voit un objet que si de la lumière provenant de lui atteint notre œil. Sans aucune source de lumière, rien n'est visible.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans un milieu transparent et homogène, la lumière se propage :",
      choix: ["en zigzag", "en ligne droite", "en cercle", "elle ne se propage pas"],
      bonneReponse: 1,
      explication: "C'est le principe de la propagation rectiligne de la lumière, modélisée par des rayons lumineux (droites fléchées).",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite un matériau transparent, un matériau translucide et un matériau opaque.",
      reponse: "Transparent : le verre (ou l'air, l'eau claire). Translucide : le papier calque (ou le verre dépoli). Opaque : le bois (ou un mur, le métal).",
      explication: "Ces trois familles se distinguent par la quantité de lumière qu'elles laissent passer et par la netteté de la vision à travers.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La lumière du Soleil met environ 8 minutes pour atteindre la Terre. Que peut-on en conclure ?",
      choix: [
        "La lumière ne se déplace pas vraiment",
        "La vitesse de la lumière est infinie",
        "Même très rapide, la lumière met un certain temps pour parcourir une grande distance",
        "Le Soleil est très proche de la Terre",
      ],
      bonneReponse: 2,
      explication: "La lumière va extrêmement vite (environ 300 000 km/s), mais la distance Terre-Soleil est si grande que le trajet prend quand même environ 8 minutes.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre un faisceau lumineux divergent et un faisceau lumineux convergent.",
      reponse: "Dans un faisceau divergent, les rayons lumineux s'écartent les uns des autres en s'éloignant de la source (ex : lampe de poche). Dans un faisceau convergent, les rayons se rapprochent et finissent par se croiser en un point.",
      explication: "Un faisceau lumineux est un ensemble de rayons ; sa forme (parallèle, divergent ou convergent) dépend de la façon dont les rayons qui le composent évoluent.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un objet opaque est éclairé par une lampe. Que forme la zone sombre projetée sur le mur derrière lui ?",
      choix: ["L'ombre propre", "L'ombre portée", "Une éclipse", "Un faisceau convergent"],
      bonneReponse: 1,
      explication: "L'ombre portée est la zone sombre projetée sur un écran ou une surface, dans le prolongement rectiligne des rayons bloqués par l'objet. L'ombre propre, elle, se trouve sur l'objet lui-même.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un papier calque laisse-t-il passer la lumière ? Peut-on voir nettement à travers ? Comment appelle-t-on ce type de matériau ?",
      reponse: "Le papier calque laisse passer une partie de la lumière, mais on ne voit pas nettement à travers : c'est un matériau translucide.",
      explication: "Le translucide se distingue du transparent par l'absence de vision nette, et de l'opaque car il laisse quand même passer une partie de la lumière.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Lors d'une éclipse de Soleil, quel astre se place entre le Soleil et la Terre ?",
      choix: ["La Terre", "La Lune", "Une étoile", "Aucun, l'éclipse se produit sans astre intermédiaire"],
      bonneReponse: 1,
      explication: "Lors d'une éclipse de Soleil, la Lune passe entre le Soleil et la Terre, et son ombre balaie une partie de la surface terrestre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on ne peut pas voir un objet caché derrière un mur, en utilisant le principe de propagation de la lumière.",
      reponse: "La lumière se propage en ligne droite. Le mur, opaque, bloque tous les rayons lumineux qui pourraient aller de l'objet caché jusqu'à notre œil : aucune lumière issue de l'objet ne peut donc nous atteindre.",
      explication: "Comme la lumière ne peut pas contourner un obstacle opaque et suit une trajectoire rectiligne, un objet caché derrière un mur ne peut envoyer aucun rayon lumineux jusqu'à notre œil.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Différencie une éclipse de Soleil et une éclipse de Lune en précisant, pour chacune, quel astre bloque la lumière et où se forme l'ombre.",
      reponse: "Éclipse de Soleil : la Lune bloque la lumière du Soleil, et son ombre se forme sur la Terre. Éclipse de Lune : la Terre bloque la lumière du Soleil, et son ombre se forme sur la Lune.",
      explication: "Dans les deux cas, un astre opaque s'interpose entre le Soleil et un autre astre, projetant son ombre par propagation rectiligne de la lumière.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une lampe allumée est :",
      choix: ["un objet diffusant", "une source primaire", "un objet opaque uniquement", "un objet translucide"],
      bonneReponse: 1,
      explication: "Une lampe allumée produit elle-même sa lumière : c'est une source primaire.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que faut-il pour qu'on puisse voir un objet ?",
      reponse: "Il faut que de la lumière issue de cet objet (produite ou diffusée) entre dans notre œil.",
      explication: "Sans lumière atteignant l'œil, aucun objet n'est visible, qu'il soit une source primaire ou un objet diffusant.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un rayon lumineux se représente par :",
      choix: ["une courbe", "une droite fléchée", "un point", "un cercle"],
      bonneReponse: 1,
      explication: "Un rayon lumineux est modélisé par une droite, avec une flèche indiquant le sens de propagation de la lumière.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre l'ombre propre et l'ombre portée d'un objet ?",
      reponse: "L'ombre propre est la partie non éclairée de l'objet lui-même. L'ombre portée est la zone sombre projetée sur un écran ou le sol, derrière l'objet.",
      explication: "Les deux ombres résultent du blocage de la lumière par un objet opaque, mais elles ne se situent pas au même endroit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que les éclipses sont une preuve de la propagation rectiligne de la lumière ?",
      reponse: "Parce qu'un astre opaque bloque la lumière du Soleil et projette une ombre exactement dans le prolongement des rayons lumineux bloqués, sur un autre astre situé derrière lui.",
      explication: "Si la lumière ne se propageait pas en ligne droite, l'ombre d'un astre ne se formerait pas de façon aussi précise et prévisible sur un autre astre aligné avec lui.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Sources et propagation de la lumière",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le Soleil est :",
          choix: ["un objet diffusant", "une source primaire", "un objet opaque seulement", "un objet translucide"],
          bonneReponse: 1,
          explication: "Le Soleil produit lui-même sa lumière : c'est une source primaire, comme toutes les étoiles.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne un exemple de source primaire et un exemple d'objet diffusant.",
          reponse: "Source primaire : une flamme (ou le Soleil, une lampe allumée). Objet diffusant : un mur (ou la Lune, un livre).",
          explication: "La source primaire produit sa lumière, l'objet diffusant la renvoie sans en produire.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un morceau de verre dépoli laisse passer une partie de la lumière mais on ne voit pas net à travers. C'est un matériau :",
          choix: ["transparent", "translucide", "opaque", "diffusant uniquement"],
          bonneReponse: 1,
          explication: "Un matériau translucide laisse passer une partie de la lumière sans permettre une vision nette, contrairement au transparent.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Une lampe de poche éclaire un mur. Explique, en une ou deux phrases, comment se forme l'ombre portée d'un objet placé devant le faisceau.",
          reponse: "L'objet opaque placé devant le faisceau bloque une partie des rayons lumineux. La zone où ces rayons n'arrivent pas, sur le mur, forme l'ombre portée, dans le prolongement rectiligne des rayons bloqués.",
          explication: "L'ombre portée résulte directement de la propagation rectiligne de la lumière et du blocage des rayons par un objet opaque.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle est, approximativement, la vitesse de la lumière dans l'air ?",
          choix: ["300 km/s", "3 000 km/s", "300 000 km/s", "3 000 000 km/s"],
          bonneReponse: 2,
          explication: "La lumière se déplace à environ 300 000 km par seconde dans l'air ou le vide, c'est la plus grande vitesse connue dans l'Univers.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Décris le principe d'une éclipse de Lune : quel astre bloque la lumière, et où se forme l'ombre ?",
          reponse: "La Terre se place entre le Soleil et la Lune. La Terre bloque la lumière du Soleil et projette son ombre sur la Lune, qui s'assombrit.",
          explication: "L'éclipse de Lune est le résultat direct de la propagation rectiligne de la lumière bloquée par un astre opaque, la Terre.",
        },
      ],
    },
    {
      titre: "Examen 2 — Sources et propagation de la lumière",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "On voit un livre posé sur une table éclairée parce que :",
          choix: [
            "le livre produit sa propre lumière",
            "le livre diffuse la lumière qu'il reçoit vers notre œil",
            "notre œil produit de la lumière vers le livre",
            "on ne peut pas voir un livre sans lampe intégrée",
          ],
          bonneReponse: 1,
          explication: "Le livre est un objet diffusant : il ne produit pas de lumière, mais il renvoie vers notre œil une partie de la lumière qu'il reçoit d'une source.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Cite un matériau opaque de la vie courante et explique ce que cela signifie.",
          reponse: "Un mur (ou du métal, du bois). Opaque signifie que ce matériau ne laisse pas passer la lumière du tout.",
          explication: "Un matériau opaque bloque entièrement la lumière, contrairement au transparent et au translucide.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un faisceau lumineux dont les rayons restent à égale distance les uns des autres est dit :",
          choix: ["divergent", "convergent", "parallèle", "opaque"],
          bonneReponse: 2,
          explication: "C'est un faisceau parallèle, comme celui de la lumière du Soleil qui arrive sur Terre depuis une source très éloignée.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la différence entre un matériau transparent et un matériau opaque, à l'aide d'un exemple pour chacun.",
          reponse: "Un matériau transparent laisse bien passer la lumière et on voit net à travers (exemple : une vitre en verre). Un matériau opaque ne laisse pas passer la lumière du tout (exemple : un mur en béton).",
          explication: "La différence porte sur la quantité de lumière transmise : totale et nette pour le transparent, nulle pour l'opaque.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Lors d'une éclipse de Soleil, l'ombre de la Lune se forme :",
          choix: ["sur le Soleil", "sur la Terre", "sur une autre étoile", "il n'y a pas d'ombre lors d'une éclipse de Soleil"],
          bonneReponse: 1,
          explication: "La Lune se place entre le Soleil et la Terre : elle bloque la lumière du Soleil et son ombre balaie une partie de la surface terrestre.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève affirme : « La vapeur d'eau des nuages produit de la lumière la nuit, c'est pour cela qu'on voit la Lune briller. » Corrige cette affirmation en utilisant le vocabulaire du chapitre.",
          reponse: "C'est faux : la Lune ne produit aucune lumière, ce n'est pas une source primaire. Elle brille car elle diffuse (renvoie) une partie de la lumière du Soleil qu'elle reçoit ; c'est un objet diffusant.",
          explication: "Cette question réutilise la distinction essentielle du chapitre entre source primaire (qui produit sa lumière) et objet diffusant (qui la renvoie sans en produire).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Source primaire : produit sa propre lumière (Soleil, lampe allumée, flamme). Objet diffusant : renvoie la lumière reçue sans en produire (Lune, table, livre).",
    "On voit un objet uniquement si de la lumière issue de lui (produite ou diffusée) entre dans notre œil.",
    "Dans un milieu transparent et homogène, la lumière se propage en ligne droite : rayon lumineux (droite fléchée) et faisceau (parallèle, divergent ou convergent).",
    "Vitesse de la lumière dans l'air ou le vide : environ 300 000 km/s ; la lumière du Soleil met 8 minutes pour atteindre la Terre.",
    "Transparent (vision nette à travers), translucide (passage partiel, vision floue), opaque (la lumière ne passe pas).",
    "Un objet opaque éclairé forme une ombre propre (sur lui-même) et une ombre portée (projetée derrière) ; à grande échelle, ce principe explique les éclipses de Soleil et de Lune.",
  ],
};

export default chapitre;
