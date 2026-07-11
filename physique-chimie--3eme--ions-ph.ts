import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "ions-ph",
  titre: "Ions et pH",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Découvrir les ions, écrire leur formule, distinguer solutions acides, basiques et neutres grâce au pH, et savoir utiliser un papier pH ou un pH-mètre.",
  objectifs: [
    "Savoir ce qu'est un ion et écrire la formule d'ions courants",
    "Distinguer un cation (+) d'un anion (−)",
    "Utiliser l'échelle de pH pour classer une solution (acide, neutre, basique)",
    "Mesurer un pH avec du papier pH ou un pH-mètre",
    "Relier le pH à la sécurité (dangers des produits très acides ou très basiques)",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un ion ?",
      illustration: "⚛️",
      visuel: "Atome + ou − électron(s) → ion",
      contenu: [
        "Un atome est électriquement neutre",
        "Un ion est un atome (ou groupe d'atomes) qui a perdu ou gagné des électrons",
        "Il porte alors une charge électrique",
        "Les ions existent dans de nombreuses solutions (eau de mer, sang, eau du robinet...)",
      ],
      voixOff:
        "Un atome est normalement électriquement neutre : il a autant de charges positives que négatives. Mais quand un atome perd ou gagne des électrons, il devient un ion, chargé électriquement. On trouve des ions absolument partout : dans l'eau de mer, dans ton sang, dans l'eau du robinet.",
    },
    {
      titre: "Cations et anions",
      illustration: "➕➖",
      visuel: "Cation = ion + • Anion = ion −",
      contenu: [
        "Un cation a perdu des électrons : il est chargé positivement",
        "Un anion a gagné des électrons : il est chargé négativement",
        "Exemples de cations : Na⁺ (sodium), Cu²⁺ (cuivre), H⁺ (hydrogène)",
        "Exemples d'anions : Cl⁻ (chlorure), OH⁻ (hydroxyde)",
      ],
      voixOff:
        "On distingue deux familles d'ions. Le cation a perdu des électrons : il porte une charge positive, comme le sodium Na plus, ou le cuivre Cu deux plus. L'anion a gagné des électrons : il porte une charge négative, comme l'ion chlorure Cl moins ou l'ion hydroxyde O H moins.",
    },
    {
      titre: "Lire la formule d'un ion",
      illustration: "🔤",
      visuel: "Cu²⁺ : cuivre, charge +2",
      contenu: [
        "Le symbole rappelle l'élément chimique (Na, Cl, Cu...)",
        "L'exposant indique le nombre de charges et leur signe",
        "Na⁺ : un sodium ayant perdu un électron",
        "Cu²⁺ : un cuivre ayant perdu deux électrons",
      ],
      voixOff:
        "Pour lire la formule d'un ion, on regarde d'abord le symbole de l'élément, puis l'exposant qui indique la charge. Na plus est un ion sodium ayant perdu un électron. Cu deux plus est un ion cuivre ayant perdu deux électrons : le chiffre 2 indique le nombre de charges, et le signe plus leur nature.",
    },
    {
      titre: "L'ion hydrogène H⁺ et l'acidité",
      illustration: "🧪",
      visuel: "Beaucoup d'ions H⁺ → solution acide",
      contenu: [
        "L'ion H⁺ (ion hydrogène) est responsable de l'acidité d'une solution",
        "Plus une solution contient d'ions H⁺, plus elle est acide",
        "L'ion HO⁻ (ion hydroxyde) est responsable de la basicité",
        "Plus une solution contient d'ions HO⁻, plus elle est basique",
      ],
      voixOff:
        "Deux ions jouent un rôle clé dans les solutions aqueuses. L'ion hydrogène H plus rend une solution acide : plus il y en a, plus la solution est acide. À l'inverse, l'ion hydroxyde H O moins rend une solution basique : plus il y en a, plus la solution est basique.",
    },
    {
      titre: "L'échelle de pH",
      illustration: "🌈",
      visuel: "0 ─ acide ─ 7 neutre ─ basique ─ 14",
      contenu: [
        "Le pH est un nombre sans unité, compris entre 0 et 14",
        "pH < 7 : solution acide",
        "pH = 7 : solution neutre (eau pure)",
        "pH > 7 : solution basique",
      ],
      voixOff:
        "Pour comparer facilement les solutions, on utilise le pH, un nombre sans unité compris entre 0 et 14. En dessous de 7, la solution est acide. À 7 exactement, comme pour l'eau pure, elle est neutre. Au-dessus de 7, elle est basique.",
    },
    {
      titre: "Mesurer le pH",
      illustration: "📏",
      visuel: "Papier pH ou pH-mètre",
      contenu: [
        "Le papier pH change de couleur selon le pH de la solution",
        "On compare la couleur obtenue à une échelle de teintes",
        "Le pH-mètre donne directement une valeur précise et chiffrée",
        "Il faut rincer et étalonner le pH-mètre avant utilisation",
      ],
      voixOff:
        "Pour mesurer un pH, on peut tremper un papier pH dans la solution : il change de couleur, que l'on compare ensuite à une échelle de teintes de référence. Pour une mesure plus précise, on utilise un pH-mètre, un appareil électronique qui affiche directement une valeur chiffrée, à condition de bien l'étalonner avant de l'utiliser.",
    },
    {
      titre: "Exemples de pH du quotidien",
      illustration: "🍋",
      visuel: "Citron ≈ 2 • Eau ≈ 7 • Savon ≈ 9-10",
      contenu: [
        "Jus de citron : pH ≈ 2 (très acide)",
        "Vinaigre : pH ≈ 3 (acide)",
        "Eau pure : pH = 7 (neutre)",
        "Savon : pH ≈ 9 à 10 (basique)",
        "Déboucheur pour canalisations : pH ≈ 13-14 (très basique)",
      ],
      voixOff:
        "Dans la vie de tous les jours, le jus de citron a un pH d'environ 2, très acide. Le vinaigre est acide aussi, avec un pH proche de 3. L'eau pure est neutre, à pH 7. Le savon est basique, autour de 9 ou 10. Et un déboucheur de canalisations est extrêmement basique, avec un pH proche de 14.",
    },
    {
      titre: "Danger et sécurité",
      illustration: "⚠️",
      visuel: "pH loin de 7 = danger",
      contenu: [
        "Un pH très proche de 0 ou de 14 signale un produit dangereux (corrosif)",
        "Les produits corrosifs peuvent brûler la peau et les yeux",
        "Toujours porter des lunettes et des gants en laboratoire",
        "Ne jamais mélanger des produits sans l'accord du professeur",
      ],
      voixOff:
        "Plus le pH s'éloigne de 7, dans un sens ou dans l'autre, plus le produit est potentiellement dangereux et corrosif : il peut brûler la peau ou les yeux. C'est pourquoi on porte toujours des lunettes de protection et des gants en laboratoire, et qu'on ne mélange jamais des produits chimiques sans l'accord du professeur.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Un ion est un atome ayant perdu (cation, +) ou gagné (anion, −) des électrons",
        "L'ion H⁺ rend une solution acide, l'ion HO⁻ la rend basique",
        "pH < 7 acide, pH = 7 neutre, pH > 7 basique",
        "Mesure au papier pH (couleur) ou au pH-mètre (valeur précise)",
      ],
      voixOff:
        "Résumons. Un ion est un atome qui a perdu des électrons, on parle alors de cation chargé positivement, ou qui en a gagné, on parle alors d'anion chargé négativement. L'ion H plus rend une solution acide, l'ion H O moins la rend basique. L'échelle de pH va de 0 à 14 : en dessous de 7 c'est acide, à 7 c'est neutre, au-dessus c'est basique. On la mesure avec du papier pH ou un pH-mètre. Tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "Un ion est un atome (ou groupe d'atomes) qui a perdu ou gagné des électrons. Le pH est un nombre entre 0 et 14 qui permet de classer une solution comme acide, neutre ou basique.",
    sections: [
      {
        titre: "Les ions",
        points: [
          "Un ion est un atome ayant perdu ou gagné un ou plusieurs électrons",
          "Cation : ion positif (a perdu des électrons), exemples Na⁺, Cu²⁺",
          "Anion : ion négatif (a gagné des électrons), exemples Cl⁻, HO⁻",
          "Une solution est électriquement neutre : autant de charges + que de charges −",
        ],
      },
      {
        titre: "Acidité et basicité",
        points: [
          "L'ion H⁺ (hydrogène) rend une solution acide",
          "L'ion HO⁻ (hydroxyde) rend une solution basique",
          "Plus il y a d'ions H⁺, plus la solution est acide",
        ],
      },
      {
        titre: "L'échelle de pH",
        points: [
          "Le pH est un nombre sans unité, compris entre 0 et 14",
          "pH < 7 : solution acide (ex. citron, vinaigre)",
          "pH = 7 : solution neutre (ex. eau pure)",
          "pH > 7 : solution basique (ex. savon, déboucheur)",
        ],
      },
      {
        titre: "Mesure et sécurité",
        points: [
          "Papier pH : change de couleur, à comparer à une échelle de teintes",
          "pH-mètre : appareil électronique donnant une valeur précise, à étalonner",
          "Un pH proche de 0 ou de 14 signale un produit corrosif et dangereux",
          "En laboratoire : lunettes, gants, jamais de mélange sans autorisation",
        ],
      },
    ],
    audio:
      "Fiche de révision : ions et pH. Un ion est un atome, ou un groupe d'atomes, qui a perdu ou gagné des électrons. S'il a perdu des électrons, il devient un cation, chargé positivement, comme l'ion sodium Na plus. S'il a gagné des électrons, il devient un anion, chargé négativement, comme l'ion chlorure Cl moins. Dans les solutions, deux ions jouent un rôle particulier : l'ion hydrogène H plus rend une solution acide, et l'ion hydroxyde H O moins la rend basique. Pour classer une solution, on utilise le pH, un nombre sans unité compris entre 0 et 14. En dessous de 7, la solution est acide ; à 7, elle est neutre, comme l'eau pure ; au-dessus de 7, elle est basique. On mesure le pH avec du papier pH, qui change de couleur, ou avec un pH-mètre, qui donne une valeur précise. Attention : un pH très proche de 0 ou de 14 indique un produit corrosif et dangereux, il faut alors se protéger avec des lunettes et des gants.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un ion ?", verso: "Un atome (ou groupe d'atomes) qui a perdu ou gagné des électrons, et qui porte donc une charge électrique." },
    { recto: "Qu'est-ce qu'un cation ?", verso: "Un ion chargé positivement, car il a perdu un ou plusieurs électrons. Exemple : Na⁺." },
    { recto: "Qu'est-ce qu'un anion ?", verso: "Un ion chargé négativement, car il a gagné un ou plusieurs électrons. Exemple : Cl⁻." },
    { recto: "Quel ion rend une solution acide ?", verso: "L'ion hydrogène H⁺. Plus il y en a, plus la solution est acide." },
    { recto: "Quel ion rend une solution basique ?", verso: "L'ion hydroxyde HO⁻. Plus il y en a, plus la solution est basique." },
    { recto: "Échelle de pH : que signifient les valeurs ?", verso: "pH < 7 : acide. pH = 7 : neutre. pH > 7 : basique. Échelle de 0 à 14." },
    { recto: "Comment mesurer un pH ?", verso: "Avec du papier pH (comparaison de couleur) ou avec un pH-mètre (valeur précise, à étalonner)." },
    { recto: "Pourquoi un pH proche de 0 ou de 14 est dangereux ?", verso: "Il signale un produit corrosif, pouvant brûler la peau ou les yeux : il faut porter lunettes et gants." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qu'est-ce qu'un ion ?",
      choix: [
        "Un atome électriquement neutre",
        "Un atome ayant perdu ou gagné des électrons",
        "Une molécule d'eau",
        "Un mélange de deux liquides",
      ],
      bonneReponse: 1,
      explication: "Un ion est un atome (ou groupe d'atomes) qui a perdu ou gagné un ou plusieurs électrons, ce qui lui donne une charge électrique.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'ion Na⁺ est :",
      choix: ["un anion", "un cation", "un atome neutre", "une molécule"],
      bonneReponse: 1,
      explication: "Na⁺ porte une charge positive : c'est un cation, formé quand l'atome de sodium perd un électron.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Une solution a un pH = 3. Est-elle acide, neutre ou basique ?",
      reponse: "Elle est acide, car son pH est inférieur à 7.",
      explication: "pH < 7 correspond toujours à une solution acide.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'eau pure a un pH égal à :",
      choix: ["0", "7", "14", "3"],
      bonneReponse: 1,
      explication: "L'eau pure est neutre : son pH vaut 7.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "L'ion chlorure a pour formule Cl⁻. S'agit-il d'un cation ou d'un anion ? Justifie.",
      reponse: "C'est un anion, car il porte une charge négative (il a gagné un électron).",
      explication: "Le signe moins en exposant indique un ion négatif, donc un anion.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel ion est responsable de la basicité d'une solution ?",
      choix: ["H⁺", "Na⁺", "HO⁻", "Cl⁻"],
      bonneReponse: 2,
      explication: "L'ion hydroxyde HO⁻ rend une solution basique ; plus sa concentration est élevée, plus le pH est grand.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Classe ces trois solutions de la plus acide à la plus basique : eau savonneuse (pH 9), vinaigre (pH 3), eau pure (pH 7).",
      reponse: "Vinaigre (pH 3) < eau pure (pH 7) < eau savonneuse (pH 9).",
      explication: "Plus le pH est petit, plus la solution est acide ; plus il est grand, plus elle est basique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Pour mesurer précisément une valeur de pH, on utilise de préférence :",
      choix: ["une balance", "un dynamomètre", "un pH-mètre", "un thermomètre"],
      bonneReponse: 2,
      explication: "Le pH-mètre donne une valeur numérique précise, contrairement au papier pH qui donne seulement une estimation par couleur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "On teste trois liquides au papier pH : le liquide A vire au rouge (pH ≈ 2), le liquide B reste vert (pH ≈ 7), le liquide C vire au bleu foncé (pH ≈ 12). Identifie la nature de chaque liquide et indique lequel nécessite le plus de précautions.",
      reponse:
        "Le liquide A est acide (pH ≈ 2), le liquide B est neutre (pH ≈ 7), le liquide C est basique (pH ≈ 12). Le liquide C (le plus loin de 7) nécessite le plus de précautions, car il est le plus corrosif.",
      explication: "Plus le pH s'éloigne de 7, plus le risque de brûlure chimique augmente.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi une solution est toujours électriquement neutre, même si elle contient des ions.",
      reponse:
        "Une solution contient autant de charges positives (cations) que de charges négatives (anions) : les charges se compensent exactement, donc la solution globale est neutre.",
      explication: "C'est la condition d'électroneutralité : la matière ne crée pas de charge globale de rien.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "On ajoute progressivement de l'acide chlorhydrique (source d'ions H⁺) dans de l'eau pure. Le pH de la solution :",
      choix: ["augmente", "diminue", "reste égal à 7", "devient négatif immédiatement"],
      bonneReponse: 1,
      explication: "Ajouter des ions H⁺ rend la solution plus acide, donc le pH diminue en dessous de 7.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Un élève trempe du papier pH dans un produit ménager et obtient une couleur correspondant à pH = 13. Que peut-il en conclure sur la nature et la dangerosité du produit ?",
      reponse:
        "Le produit est fortement basique (pH très supérieur à 7), donc probablement corrosif : il présente un danger pour la peau et les yeux, et doit être manipulé avec des gants et des lunettes de protection.",
      explication: "Un pH proche de 14 est caractéristique des produits basiques corrosifs (ex. déboucheur de canalisations).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un cation est un ion :",
      choix: ["chargé positivement", "chargé négativement", "neutre", "gazeux"],
      bonneReponse: 0,
      explication: "Le cation a perdu des électrons : il est chargé positivement.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne les trois zones de l'échelle de pH et leurs bornes.",
      reponse: "pH de 0 à moins de 7 : acide. pH = 7 : neutre. pH de plus de 7 à 14 : basique.",
      explication: "L'échelle de pH va de 0 à 14, avec 7 comme valeur neutre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un produit a un pH = 11. Est-il acide ou basique ? Est-il potentiellement dangereux ?",
      reponse: "Il est basique (pH > 7). Comme il est assez loin de 7, il peut être corrosif et nécessite des précautions (gants, lunettes).",
      explication: "Plus le pH s'éloigne de 7, plus le risque de brûlure chimique augmente.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "L'ion H⁺ est responsable :",
      choix: ["de la basicité", "de l'acidité", "de la neutralité", "de la couleur de l'eau"],
      bonneReponse: 1,
      explication: "Plus il y a d'ions H⁺ dans une solution, plus elle est acide.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle différence fais-tu entre un papier pH et un pH-mètre ?",
      reponse:
        "Le papier pH donne une estimation du pH par changement de couleur, à comparer à une échelle de teintes. Le pH-mètre est un appareil électronique qui donne une valeur numérique précise, mais il doit être étalonné avant usage.",
      explication: "Les deux méthodes mesurent le pH, mais avec une précision différente.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Ions et pH",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un anion est un ion :",
          choix: ["ayant perdu des électrons", "ayant gagné des électrons", "sans charge", "toujours gazeux"],
          bonneReponse: 1,
          explication: "L'anion a gagné des électrons : il est chargé négativement.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Le vinaigre a un pH proche de 3. Est-ce une solution acide, neutre ou basique ?",
          reponse: "C'est une solution acide, car son pH est inférieur à 7.",
          explication: "pH < 7 signifie toujours une solution acide.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "L'ion responsable de la basicité d'une solution est :",
          choix: ["H⁺", "HO⁻", "Na⁺", "Cl⁻"],
          bonneReponse: 1,
          explication: "L'ion hydroxyde HO⁻ rend une solution basique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite un instrument permettant de mesurer précisément le pH d'une solution et un autre permettant d'en avoir une estimation rapide.",
          reponse: "Le pH-mètre donne une mesure précise. Le papier pH donne une estimation rapide par comparaison de couleur.",
          explication: "Les deux outils mesurent le pH, avec des précisions différentes.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Range dans l'ordre croissant de pH : savon (pH 9), citron (pH 2), eau pure (pH 7).",
          reponse: "Citron (pH 2) < eau pure (pH 7) < savon (pH 9).",
          explication: "On classe simplement les valeurs de pH de la plus petite à la plus grande.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un produit d'entretien a un pH = 13,5. Explique pourquoi ce produit doit être manipulé avec des précautions particulières, en utilisant le vocabulaire scientifique.",
          reponse:
            "Ce produit est fortement basique, car son pH est très supérieur à 7 et proche de 14. Un pH aussi éloigné de 7 caractérise un produit corrosif, susceptible de brûler la peau ou les yeux : il faut porter des gants et des lunettes de protection lors de sa manipulation.",
          explication: "Plus le pH s'éloigne de la neutralité (7), plus le caractère corrosif et dangereux du produit augmente.",
        },
      ],
    },
    {
      titre: "Examen 2 — Ions et pH",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est l'unité du pH ?",
          choix: ["Le newton", "Le pH n'a pas d'unité", "Le kilogramme", "Le volt"],
          bonneReponse: 1,
          explication: "Le pH est un nombre sans unité, compris entre 0 et 14.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "L'ion Cu²⁺ est-il un cation ou un anion ? Explique.",
          reponse: "C'est un cation, car il porte une charge positive (il a perdu deux électrons).",
          explication: "Le signe plus en exposant indique un ion chargé positivement, donc un cation.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une solution de pH = 8 est :",
          choix: ["acide", "neutre", "légèrement basique", "très corrosive"],
          bonneReponse: 2,
          explication: "Un pH légèrement supérieur à 7 indique une solution légèrement basique.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi il faut étalonner un pH-mètre avant de l'utiliser.",
          reponse:
            "L'étalonnage permet de vérifier et d'ajuster l'appareil avec des solutions de pH connu, afin de garantir que les mesures affichées sur d'autres solutions soient exactes.",
          explication: "Sans étalonnage, le pH-mètre peut donner des valeurs fausses.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi une solution contenant des ions Na⁺ et des ions Cl⁻ est-elle électriquement neutre ?",
          reponse: "Parce que les charges positives des ions Na⁺ compensent exactement les charges négatives des ions Cl⁻ présentes dans la solution.",
          explication: "C'est le principe d'électroneutralité d'une solution ionique.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux solutions A et B ont respectivement pH = 4 et pH = 11. Laquelle contient le plus d'ions H⁺ ? Laquelle contient le plus d'ions HO⁻ ? Justifie.",
          reponse:
            "La solution A (pH = 4) contient le plus d'ions H⁺, car un pH faible correspond à une forte concentration en ions H⁺. La solution B (pH = 11) contient le plus d'ions HO⁻, car un pH élevé correspond à une forte concentration en ions HO⁻.",
          explication: "Le pH traduit directement la quantité relative d'ions H⁺ et HO⁻ présents dans la solution.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un ion est un atome (ou groupe d'atomes) ayant perdu ou gagné des électrons : cation (positif) s'il en a perdu, anion (négatif) s'il en a gagné.",
    "Une solution reste toujours électriquement neutre : les charges positives et négatives des ions présents se compensent.",
    "L'ion H⁺ rend une solution acide ; l'ion HO⁻ la rend basique.",
    "Le pH est un nombre sans unité entre 0 et 14 : pH < 7 acide, pH = 7 neutre, pH > 7 basique.",
    "On mesure le pH avec du papier pH (estimation par couleur) ou un pH-mètre (valeur précise, à étalonner).",
    "Un pH très proche de 0 ou de 14 signale un produit corrosif et dangereux : lunettes et gants sont indispensables.",
  ],
};

export default chapitre;
