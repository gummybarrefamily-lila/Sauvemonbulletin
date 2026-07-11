import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "resistance-loi-ohm",
  titre: "Résistance et loi d'Ohm",
  matiere: "physique-chimie",
  niveau: "3eme",
  description:
    "Comprendre le rôle d'un résistor (résistance) dans un circuit électrique, connaître et utiliser la loi d'Ohm U = R × I, et savoir tracer et exploiter une caractéristique tension-intensité.",
  objectifs: [
    "Connaître le rôle d'un résistor dans un circuit électrique",
    "Mesurer une résistance à l'ohmmètre et l'exprimer en ohms (Ω)",
    "Connaître et utiliser la loi d'Ohm U = R × I",
    "Savoir tracer et lire une caractéristique U = f(I) d'un résistor",
    "Résoudre des exercices de calcul de tension, résistance ou intensité",
  ],
  slides: [
    {
      titre: "Le résistor dans un circuit",
      illustration: "🔌",
      visuel: "Résistor = s'oppose au passage du courant",
      contenu: [
        "Un résistor est un composant électrique qui s'oppose au passage du courant",
        "Il transforme une partie de l'énergie électrique en chaleur",
        "Symbole normalisé : un rectangle",
        "Il protège les autres composants d'un circuit (ex. une DEL)",
      ],
      voixOff:
        "Le résistor est un composant qui s'oppose au passage du courant électrique dans un circuit. En s'opposant au courant, il transforme une partie de l'énergie électrique en chaleur. Son symbole normalisé est un simple rectangle. On l'utilise très souvent pour protéger d'autres composants, comme une diode électroluminescente, qui serait détruite par un courant trop fort.",
    },
    {
      titre: "La résistance électrique",
      illustration: "⚙️",
      visuel: "R en ohms (Ω)",
      contenu: [
        "La résistance, notée R, mesure l'opposition d'un résistor au passage du courant",
        "Unité : l'ohm, symbole Ω",
        "Plus R est grande, plus le résistor s'oppose fortement au courant",
        "On la mesure avec un ohmmètre, hors tension, sur le résistor seul",
      ],
      voixOff:
        "La résistance électrique, notée R, mesure à quel point un résistor s'oppose au passage du courant. Elle s'exprime en ohms, symbole oméga majuscule. Plus la résistance est grande, plus elle limite fortement le courant. On la mesure avec un ohmmètre, en le branchant directement sur le résistor, hors tension et hors circuit.",
    },
    {
      titre: "La loi d'Ohm",
      illustration: "🧮",
      visuel: "U = R × I",
      contenu: [
        "U : tension aux bornes du résistor, en volts (V)",
        "R : résistance du résistor, en ohms (Ω)",
        "I : intensité du courant qui le traverse, en ampères (A)",
        "Formules dérivées : I = U ÷ R et R = U ÷ I",
      ],
      voixOff:
        "La loi d'Ohm relie ces trois grandeurs par la relation U égale R fois I. U est la tension en volts aux bornes du résistor, R sa résistance en ohms, et I l'intensité du courant qui le traverse, en ampères. Cette relation se retourne facilement : I égale U divisé par R, et R égale U divisé par I.",
    },
    {
      titre: "Mesurer U et I dans un circuit",
      illustration: "🔋",
      visuel: "Voltmètre en dérivation • Ampèremètre en série",
      contenu: [
        "Le voltmètre mesure la tension : il se branche en dérivation (en parallèle)",
        "L'ampèremètre mesure l'intensité : il se branche en série, dans le circuit",
        "Bien respecter les bornes + et − des appareils",
        "Toujours vérifier le calibre avant de mesurer",
      ],
      voixOff:
        "Pour mesurer la tension aux bornes d'un résistor, on utilise un voltmètre, branché en dérivation, c'est-à-dire en parallèle du résistor. Pour mesurer l'intensité du courant qui le traverse, on utilise un ampèremètre, branché en série, directement dans le circuit. Il faut toujours respecter les bornes plus et moins des appareils, et vérifier le calibre avant de mesurer.",
    },
    {
      titre: "La caractéristique U = f(I)",
      illustration: "📈",
      visuel: "Droite passant par l'origine",
      contenu: [
        "On mesure plusieurs couples (I, U) pour un même résistor",
        "On place les points sur un graphique U en fonction de I",
        "Pour un résistor, les points sont alignés sur une droite passant par l'origine",
        "Le résistor est un dipôle dit « ohmique » (ou linéaire)",
      ],
      voixOff:
        "Pour vérifier la loi d'Ohm expérimentalement, on mesure plusieurs couples de valeurs intensité-tension pour un même résistor, puis on place ces points sur un graphique représentant U en fonction de I. Pour un résistor, tous les points sont alignés sur une droite qui passe par l'origine : on dit que c'est un dipôle ohmique, ou linéaire.",
    },
    {
      titre: "Lire le coefficient directeur",
      illustration: "📐",
      visuel: "Coefficient directeur de la droite = R",
      contenu: [
        "Sur le graphique U = f(I), la droite a un coefficient directeur",
        "Ce coefficient directeur est égal à la résistance R du résistor",
        "Pour le calculer : R = ΔU ÷ ΔI (variation de U divisée par variation de I)",
        "Plus la droite est pentue (verticale), plus R est grande",
      ],
      voixOff:
        "Sur le graphique de la caractéristique, le coefficient directeur de la droite obtenue est justement égal à la résistance R du résistor. On le calcule en prenant une variation de tension divisée par la variation d'intensité correspondante. Plus la droite est pentue, plus la résistance est grande, car il faut alors plus de tension pour obtenir la même intensité.",
    },
    {
      titre: "Exemple de calcul",
      illustration: "💡",
      visuel: "R = 100 Ω, I = 0,05 A → U = 5 V",
      contenu: [
        "Un résistor de résistance R = 100 Ω est traversé par un courant I = 0,05 A",
        "U = R × I = 100 × 0,05 = 5 V",
        "Si on double l'intensité (I = 0,1 A), la tension double aussi : U = 10 V",
        "La tension est donc proportionnelle à l'intensité",
      ],
      voixOff:
        "Prenons un résistor de cent ohms traversé par un courant de zéro virgule zéro cinq ampère. La tension à ses bornes vaut U égale R fois I, soit cent fois zéro virgule zéro cinq, c'est-à-dire cinq volts. Si l'intensité double, la tension double aussi : elle passe à dix volts. Cela confirme que la tension est proportionnelle à l'intensité pour un résistor donné.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Résistor : s'oppose au passage du courant, protège les composants fragiles",
        "R en ohms (Ω), mesurée à l'ohmmètre",
        "Loi d'Ohm : U = R × I, avec U en V, R en Ω et I en A",
        "Caractéristique U = f(I) : droite passant par l'origine, pente = R",
      ],
      voixOff:
        "Résumons. Le résistor est un composant qui s'oppose au passage du courant, ce qui permet de protéger les composants fragiles d'un circuit. Sa résistance R, en ohms, se mesure à l'ohmmètre. La loi d'Ohm relie tension, résistance et intensité par U égale R fois I. Et la caractéristique U égale f de I d'un résistor est une droite qui passe par l'origine, dont la pente est justement égale à R. Tu es prêt pour les exercices du brevet !",
    },
  ],
  fiche: {
    intro:
      "Un résistor s'oppose au passage du courant électrique. Sa résistance R, exprimée en ohms, relie la tension U et l'intensité I par la loi d'Ohm : U = R × I.",
    sections: [
      {
        titre: "Le résistor",
        points: [
          "Composant qui s'oppose au passage du courant électrique",
          "Transforme une partie de l'énergie électrique en chaleur",
          "Sert à protéger d'autres composants (ex. une DEL)",
        ],
      },
      {
        titre: "La résistance électrique",
        points: [
          "Notée R, unité : l'ohm (Ω)",
          "Se mesure à l'ohmmètre, sur le résistor seul, hors tension",
          "Plus R est grande, plus le résistor limite le courant",
        ],
      },
      {
        titre: "La loi d'Ohm",
        points: [
          "U = R × I, avec U en volts (V), R en ohms (Ω), I en ampères (A)",
          "Formules dérivées : I = U ÷ R et R = U ÷ I",
          "Voltmètre en dérivation pour U, ampèremètre en série pour I",
        ],
      },
      {
        titre: "La caractéristique U = f(I)",
        points: [
          "Pour un résistor : droite passant par l'origine (dipôle ohmique)",
          "Le coefficient directeur de la droite est égal à R",
          "R = ΔU ÷ ΔI",
        ],
      },
    ],
    audio:
      "Fiche de révision : résistance et loi d'Ohm. Le résistor est un composant électrique qui s'oppose au passage du courant et transforme une partie de l'énergie électrique en chaleur ; il sert souvent à protéger d'autres composants, comme une diode électroluminescente. Sa résistance, notée R, s'exprime en ohms et se mesure à l'ohmmètre, hors tension. La loi d'Ohm relie la tension U, en volts, la résistance R, en ohms, et l'intensité I, en ampères, par la formule U égale R fois I. On mesure la tension avec un voltmètre branché en dérivation, et l'intensité avec un ampèremètre branché en série. Si l'on trace la caractéristique d'un résistor, c'est-à-dire la tension en fonction de l'intensité, on obtient une droite qui passe par l'origine : le résistor est un dipôle dit ohmique. Le coefficient directeur de cette droite est justement égal à la résistance R du résistor.",
  },
  memoCards: [
    { recto: "Quel est le rôle d'un résistor dans un circuit ?", verso: "Il s'oppose au passage du courant et transforme une partie de l'énergie électrique en chaleur, protégeant ainsi les composants fragiles." },
    { recto: "Unité et instrument de mesure de la résistance ?", verso: "L'ohm (Ω), mesurée avec un ohmmètre, hors tension, sur le résistor seul." },
    { recto: "Énoncé de la loi d'Ohm ?", verso: "U = R × I, avec U en volts, R en ohms, I en ampères." },
    { recto: "Comment brancher un voltmètre ?", verso: "En dérivation (en parallèle) aux bornes du composant dont on mesure la tension." },
    { recto: "Comment brancher un ampèremètre ?", verso: "En série, directement dans le circuit, pour que tout le courant le traverse." },
    { recto: "Forme de la caractéristique U = f(I) d'un résistor ?", verso: "Une droite qui passe par l'origine : le résistor est un dipôle ohmique (linéaire)." },
    { recto: "Que représente le coefficient directeur de la droite U = f(I) ?", verso: "Il est égal à la résistance R du résistor : R = ΔU ÷ ΔI." },
    { recto: "Calculer I à partir de U et R ?", verso: "I = U ÷ R. Exemple : U = 12 V, R = 6 Ω → I = 2 A." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Dans quelle unité s'exprime la résistance électrique ?",
      choix: ["Le volt (V)", "L'ampère (A)", "L'ohm (Ω)", "Le watt (W)"],
      bonneReponse: 2,
      explication: "La résistance électrique se mesure en ohms, symbole Ω.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se branche un ampèremètre dans un circuit ?",
      choix: ["En dérivation", "En série", "Il ne se branche pas", "Aux deux endroits indifféremment"],
      bonneReponse: 1,
      explication: "L'ampèremètre mesure l'intensité qui traverse le circuit : il doit être branché en série.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris la loi d'Ohm avec les unités de chaque grandeur.",
      reponse: "U = R × I, avec U en volts (V), R en ohms (Ω) et I en ampères (A).",
      explication: "C'est la relation centrale du chapitre.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Avec quel appareil mesure-t-on directement une résistance ?",
      choix: ["Un voltmètre", "Un ampèremètre", "Un ohmmètre", "Un thermomètre"],
      bonneReponse: 2,
      explication: "L'ohmmètre mesure directement la résistance d'un composant, hors tension.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un résistor de résistance R = 50 Ω est traversé par un courant I = 0,2 A. Calcule la tension U à ses bornes.",
      reponse: "U = R × I = 50 × 0,2 = 10 V",
      explication: "Application directe de la loi d'Ohm U = R × I.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un résistor a une tension de 6 V à ses bornes pour une intensité de 0,3 A. Sa résistance vaut :",
      choix: ["1,8 Ω", "20 Ω", "0,05 Ω", "6,3 Ω"],
      bonneReponse: 1,
      explication: "R = U ÷ I = 6 ÷ 0,3 = 20 Ω.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un résistor de 200 Ω est soumis à une tension de 8 V. Calcule l'intensité du courant qui le traverse.",
      reponse: "I = U ÷ R = 8 ÷ 200 = 0,04 A",
      explication: "On isole I dans la loi d'Ohm : I = U ÷ R.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Sur un graphique U = f(I) d'un résistor, on obtient :",
      choix: [
        "une courbe quelconque",
        "une droite passant par l'origine",
        "une droite horizontale",
        "des points non alignés",
      ],
      bonneReponse: 1,
      explication: "Le résistor est un dipôle ohmique : sa caractéristique est une droite passant par l'origine.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Lors d'une expérience, on mesure U = 3 V pour I = 0,15 A, puis U = 6 V pour I = 0,3 A sur le même résistor. Calcule R à chaque fois et conclus.",
      reponse:
        "1er cas : R = 3 ÷ 0,15 = 20 Ω. 2e cas : R = 6 ÷ 0,3 = 20 Ω. On retrouve la même résistance dans les deux cas : R = 20 Ω, ce qui confirme que U est proportionnelle à I (loi d'Ohm).",
      explication: "Le rapport U/I est constant pour un résistor donné : c'est la définition même de la loi d'Ohm.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Sur un graphique U = f(I), une droite passe par les points (0 A ; 0 V) et (0,4 A ; 8 V). Détermine la résistance du résistor étudié.",
      reponse: "R = ΔU ÷ ΔI = (8 − 0) ÷ (0,4 − 0) = 8 ÷ 0,4 = 20 Ω",
      explication: "Le coefficient directeur de la droite U = f(I) est égal à la résistance R.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "On remplace un résistor de 10 Ω par un résistor de 40 Ω dans un circuit, à tension U constante. L'intensité I :",
      choix: ["est multipliée par 4", "est divisée par 4", "reste identique", "est multipliée par 2"],
      bonneReponse: 1,
      explication: "I = U ÷ R : si R est multipliée par 4 à U constante, I est divisée par 4.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question:
        "Explique pourquoi on place toujours un résistor en série avec une diode électroluminescente (DEL) dans un circuit.",
      reponse:
        "La DEL est un composant fragile qui serait détruite par un courant trop intense. Le résistor, en s'opposant au passage du courant, limite l'intensité à une valeur raisonnable et protège ainsi la DEL.",
      explication: "Le résistor joue ici un rôle de protection en limitant l'intensité dans le circuit.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "La loi d'Ohm s'écrit :",
      choix: ["U = R + I", "U = R × I", "U = R ÷ I", "U = R − I"],
      bonneReponse: 1,
      explication: "La loi d'Ohm relie tension, résistance et intensité par U = R × I.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Comment se branche un voltmètre pour mesurer la tension aux bornes d'un résistor ?",
      reponse: "En dérivation (en parallèle) aux bornes du résistor.",
      explication: "Contrairement à l'ampèremètre (série), le voltmètre se branche toujours en dérivation.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un résistor de 25 Ω est traversé par un courant de 0,4 A. Calcule la tension à ses bornes.",
      reponse: "U = R × I = 25 × 0,4 = 10 V",
      explication: "Application directe de U = R × I.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "La caractéristique U = f(I) d'un résistor est une droite passant par l'origine. On dit que c'est un dipôle :",
      choix: ["ohmique", "magnétique", "isolant", "capacitif"],
      bonneReponse: 0,
      explication: "Un résistor qui vérifie la loi d'Ohm est appelé dipôle ohmique.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Un résistor a une tension de 15 V pour une intensité de 0,5 A. Calcule sa résistance.",
      reponse: "R = U ÷ I = 15 ÷ 0,5 = 30 Ω",
      explication: "On isole R dans la loi d'Ohm : R = U ÷ I.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Résistance et loi d'Ohm",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le rôle principal d'un résistor est de :",
          choix: [
            "produire du courant",
            "s'opposer au passage du courant",
            "mesurer une tension",
            "stocker de l'énergie chimique",
          ],
          bonneReponse: 1,
          explication: "Le résistor s'oppose au passage du courant électrique dans un circuit.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un résistor de résistance R = 15 Ω est traversé par I = 0,4 A. Calcule la tension U à ses bornes.",
          reponse: "U = R × I = 15 × 0,4 = 6 V",
          explication: "Application directe de la loi d'Ohm.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Un résistor a U = 9 V et I = 0,3 A. Sa résistance vaut :",
          choix: ["2,7 Ω", "30 Ω", "0,033 Ω", "9,3 Ω"],
          bonneReponse: 1,
          explication: "R = U ÷ I = 9 ÷ 0,3 = 30 Ω.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un résistor de 40 Ω est soumis à une tension de 12 V. Calcule l'intensité qui le traverse.",
          reponse: "I = U ÷ R = 12 ÷ 40 = 0,3 A",
          explication: "On isole I dans la loi d'Ohm : I = U ÷ R.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Que représente le coefficient directeur de la droite U = f(I) tracée pour un résistor ?",
          reponse: "Il est égal à la valeur de la résistance R du résistor étudié.",
          explication: "Pente de la droite = ΔU/ΔI = R.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Deux résistors, l'un de 10 Ω, l'autre de 100 Ω, sont soumis à la même tension U = 5 V. Calcule l'intensité traversant chacun d'eux et compare.",
          reponse:
            "Résistor 10 Ω : I = 5 ÷ 10 = 0,5 A. Résistor 100 Ω : I = 5 ÷ 100 = 0,05 A. Le résistor de plus faible résistance est traversé par une intensité dix fois plus grande, car I = U ÷ R.",
          explication: "À tension égale, plus la résistance est grande, plus l'intensité qui traverse le résistor est faible.",
        },
      ],
    },
    {
      titre: "Examen 2 — Résistance et loi d'Ohm",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'ampèremètre mesure :",
          choix: ["la tension", "la résistance", "l'intensité", "la masse"],
          bonneReponse: 2,
          explication: "L'ampèremètre mesure l'intensité du courant, en ampères.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Un résistor de R = 60 Ω est traversé par I = 0,1 A. Calcule U.",
          reponse: "U = R × I = 60 × 0,1 = 6 V",
          explication: "Application directe de U = R × I.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pour mesurer une résistance à l'ohmmètre, il faut :",
          choix: [
            "que le circuit soit sous tension",
            "que le résistor soit isolé du circuit, hors tension",
            "brancher l'ohmmètre en série dans le circuit sous tension",
            "chauffer le résistor avant la mesure",
          ],
          bonneReponse: 1,
          explication: "L'ohmmètre se branche sur le composant seul, débranché du circuit et hors tension.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un résistor a U = 4 V pour I = 0,08 A. Calcule sa résistance R.",
          reponse: "R = U ÷ I = 4 ÷ 0,08 = 50 Ω",
          explication: "On isole R dans la loi d'Ohm : R = U ÷ I.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi la caractéristique U = f(I) d'un résistor passe par l'origine du graphique.",
          reponse: "Parce que lorsqu'aucun courant ne traverse le résistor (I = 0), la tension à ses bornes est nulle (U = 0) : le point (0 ; 0) appartient donc à la droite.",
          explication: "S'il n'y a pas de courant, il n'y a pas de tension aux bornes du résistor, d'où le passage par l'origine.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Un élève trace la caractéristique d'un résistor et trouve les points (0,1 A ; 2 V) et (0,3 A ; 6 V). Vérifie que ces points sont cohérents avec la loi d'Ohm et détermine R.",
          reponse:
            "Pour le premier point : R = 2 ÷ 0,1 = 20 Ω. Pour le second : R = 6 ÷ 0,3 = 20 Ω. Les deux points donnent la même résistance, ce qui est cohérent avec la loi d'Ohm : R = 20 Ω.",
          explication: "Le rapport U/I doit être constant pour un résistor obéissant à la loi d'Ohm.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le résistor s'oppose au passage du courant électrique et protège les composants fragiles d'un circuit.",
    "La résistance R s'exprime en ohms (Ω) et se mesure à l'ohmmètre, sur le composant seul, hors tension.",
    "Loi d'Ohm : U = R × I, avec U en volts, R en ohms, I en ampères ; formules dérivées I = U ÷ R et R = U ÷ I.",
    "Le voltmètre se branche en dérivation, l'ampèremètre se branche en série.",
    "La caractéristique U = f(I) d'un résistor est une droite passant par l'origine : c'est un dipôle ohmique.",
    "Le coefficient directeur de la droite U = f(I) est égal à la résistance R du résistor.",
  ],
};

export default chapitre;
