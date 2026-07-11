import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "numeros-edad",
  titre: "Les nombres et l'âge",
  matiere: "espagnol",
  niveau: "5eme",
  langueVoix: "es-ES",
  description:
    "Apprendre à compter de 0 à 100 en espagnol, à donner son âge avec le verbe tener et à utiliser les nombres dans des situations quotidiennes (dates, quantités, prix).",
  objectifs: [
    "Compter de 0 à 20, puis par dizaines jusqu'à 100",
    "Donner et demander l'âge avec tener",
    "Utiliser les nombres pour dire une date ou une quantité",
    "Reconnaître les nombres à l'oral",
    "Poser des questions avec cuánto/cuántos",
  ],
  slides: [
    {
      titre: "De 0 a 10",
      illustration: "🔢",
      visuel: "0 1 2 3 4 5 6 7 8 9 10",
      contenu: [
        "cero, uno, dos, tres, cuatro",
        "cinco, seis, siete, ocho, nueve, diez",
        "Uno devient un devant un nom masculin : un chico (un garçon)",
        "Ces nombres sont la base de tout le reste !",
      ],
      voixOff:
        "Commençons par les nombres de zéro à dix : cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Attention, uno se transforme en un devant un nom masculin : un chico, un garçon, mais una chica, une fille. Apprends bien cette base, elle te servira pour tous les autres nombres !",
    },
    {
      titre: "De 11 a 20",
      illustration: "🔢",
      visuel: "11 a 20",
      contenu: [
        "once, doce, trece, catorce, quince",
        "dieciséis, diecisiete, dieciocho, diecinueve, veinte",
        "À partir de 16, on colle « diez y » : dieciséis = diez y seis",
        "Ces nombres s'écrivent en un seul mot",
      ],
      voixOff:
        "De onze à vingt : once, doce, trece, catorce, quince, puis dieciséis, diecisiete, dieciocho, diecinueve, veinte. À partir de seize, tu remarques la logique : dieciséis vient de diez y seis, dix et six, mais tout s'écrit en un seul mot avec un accent sur le é. Continue à répéter ces nombres pour bien les mémoriser !",
    },
    {
      titre: "Les dizaines : 20 à 100",
      illustration: "💯",
      visuel: "20, 30, 40… 100",
      contenu: [
        "veinte (20), treinta (30), cuarenta (40), cincuenta (50)",
        "sesenta (60), setenta (70), ochenta (80), noventa (90)",
        "cien (100)",
        "Entre les dizaines : veintiuno (21), treinta y dos (32)",
      ],
      voixOff:
        "Voici les dizaines : veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, et cien pour cent. Pour les nombres entre deux dizaines, la règle change après vingt : de 21 à 29, on colle tout en un mot comme veintiuno, mais à partir de trente, on utilise y séparé : treinta y dos, trente-deux, cuarenta y cinco, quarante-cinq.",
    },
    {
      titre: "Donner son âge avec tener",
      illustration: "🎂",
      visuel: "Tengo 13 años",
      contenu: [
        "¿Cuántos años tienes? : quel âge as-tu ?",
        "Tengo 13 años : j'ai 13 ans",
        "Mi hermano tiene 8 años : mon frère a 8 ans",
        "En español, se usa el verbo TENER, no SER, para la edad",
      ],
      voixOff:
        "Pour donner son âge en espagnol, on utilise toujours le verbe tener, jamais ser. On demande ¿cuántos años tienes ?, quel âge as-tu, littéralement combien d'années as-tu. On répond tengo suivi du nombre puis años : tengo trece años, j'ai treize ans. Attention à ne jamais dire soy trece años, ce serait une erreur fréquente à éviter !",
    },
    {
      titre: "Combien ça coûte ?",
      illustration: "💶",
      visuel: "¿Cuánto cuesta?",
      contenu: [
        "¿Cuánto cuesta? : combien ça coûte ?",
        "Cuesta diez euros : ça coûte dix euros",
        "¿Cuánto es? : combien ça fait ? (au total)",
        "Son quince euros : ça fait quinze euros",
      ],
      voixOff:
        "Les nombres servent aussi à parler d'argent. ¿Cuánto cuesta ? demande combien coûte un objet ; on répond cuesta suivi du prix, cuesta diez euros. Pour le total d'un achat, on demande plutôt ¿cuánto es ?, et on répond son suivi du prix, son quince euros. Utile pour tes futurs voyages en Espagne !",
    },
    {
      titre: "Les dates et les quantités",
      illustration: "📅",
      visuel: "El 15 de mayo",
      contenu: [
        "El (número) de (mes) : el quince de mayo, le 15 mai",
        "Hay veinte alumnos en la clase : il y a vingt élèves",
        "Tengo cien euros : j'ai cent euros",
        "Un año tiene doce meses : une année a douze mois",
      ],
      voixOff:
        "Pour donner une date, on dit el suivi du nombre puis de et le mois : el quince de mayo, le 15 mai. Les nombres servent aussi à exprimer une quantité avec hay, il y a : hay veinte alumnos en la clase, il y a vingt élèves dans la classe. N'oublie pas que cien s'utilise seul devant un nom, sans « uno » : cien euros, pas cien y uno euros.",
    },
    {
      titre: "S'entraîner à compter",
      illustration: "🧮",
      visuel: "1, 2, 3… ¡vamos!",
      contenu: [
        "Compter les élèves, les jours, les objets dans la classe",
        "Jouer au loto des nombres pour s'entraîner à l'oral",
        "Épeler son numéro de téléphone chiffre par chiffre",
        "Réviser souvent : les nombres s'oublient vite sans pratique !",
      ],
      voixOff:
        "Le meilleur moyen de retenir les nombres, c'est de les utiliser souvent : compte les élèves de ta classe, les jours de la semaine, ou les objets sur ton bureau. Tu peux aussi t'entraîner à donner ton numéro de téléphone chiffre par chiffre, comme le font les Espagnols. Révise régulièrement, car les nombres s'oublient vite si on ne les pratique pas !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Uno, dos, tres… tener + años",
      contenu: [
        "0-10 : cero à diez — 11-15 : once à quince (formes irrégulières)",
        "16-19 : dieci- + unité, en un mot — 20 : veinte",
        "21-29 : veinti- + unité (veintiuno) — dès 30 : dizaine + y + unité",
        "Pour l'âge : TENER + nombre + años, jamais ser !",
      ],
      voixOff:
        "Résumons. De zéro à quinze, les nombres ont des formes à apprendre par cœur. De seize à dix-neuf, on colle dieci- devant l'unité. Vingt se dit veinte, et de vingt-et-un à vingt-neuf, on colle veinti- devant l'unité. À partir de trente, les dizaines et les unités se séparent avec y : treinta y uno. Et surtout, retiens que pour donner son âge, on utilise toujours tener suivi du nombre et de años, jamais le verbe ser !",
    },
  ],
  fiche: {
    intro:
      "Les nombres espagnols suivent une logique régulière à partir de seize, avec des irrégularités entre onze et quinze. Le verbe tener sert systématiquement à exprimer l'âge.",
    sections: [
      {
        titre: "De 0 à 20",
        points: [
          "0 à 10 : cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez",
          "11 à 15 : once, doce, trece, catorce, quince (formes irrégulières)",
          "16 à 20 : dieciséis, diecisiete, dieciocho, diecinueve, veinte",
        ],
      },
      {
        titre: "De 20 à 100",
        points: [
          "Dizaines : veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien",
          "21-29 : veinti- + unité en un mot (veintidós)",
          "30 et plus : dizaine + y + unité, en mots séparés (treinta y dos)",
        ],
      },
      {
        titre: "L'âge avec tener",
        points: [
          "¿Cuántos años tienes? : quel âge as-tu ?",
          "Tengo … años : j'ai … ans (jamais soy … años)",
          "Mi hermano tiene 8 años : structure identique pour une autre personne",
        ],
      },
      {
        titre: "Prix, dates et quantités",
        points: [
          "¿Cuánto cuesta? / Cuesta … euros — ¿Cuánto es? / Son … euros",
          "El + nombre + de + mois : el quince de mayo",
          "Hay + nombre + nom : hay veinte alumnos",
        ],
      },
    ],
    audio:
      "Fiche de révision : les nombres et l'âge en espagnol. De zéro à dix : cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. De onze à quinze, les formes sont irrégulières : once, doce, trece, catorce, quince. De seize à dix-neuf, on ajoute dieci devant l'unité, en un seul mot. Vingt se dit veinte. De vingt-et-un à vingt-neuf, on colle veinti devant l'unité. À partir de trente, on sépare la dizaine et l'unité avec y, comme treinta y dos. Pour l'âge, on utilise toujours le verbe tener, jamais ser : tengo trece años. Pour un prix, on demande cuánto cuesta et on répond cuesta suivi du prix. Pour une date, on dit el suivi du nombre puis de et le mois.",
  },
  memoCards: [
    { recto: "cero, uno, dos, tres, cuatro", verso: "0, 1, 2, 3, 4" },
    { recto: "cinco, seis, siete, ocho, nueve, diez", verso: "5, 6, 7, 8, 9, 10" },
    { recto: "once, doce, trece, catorce, quince", verso: "11, 12, 13, 14, 15 (formes irrégulières)" },
    { recto: "dieciséis…veinte", verso: "16 à 20 : dieci- + unité, puis veinte (20)" },
    { recto: "veintiuno, veintidós…", verso: "21, 22… : veinti- + unité, en un seul mot" },
    { recto: "treinta y uno, cuarenta y dos…", verso: "31, 42… : dizaine + y + unité, séparés" },
    { recto: "¿Cuántos años tienes?", verso: "Quel âge as-tu ? Réponse : Tengo … años (verbe tener, jamais ser)." },
    { recto: "¿Cuánto cuesta?", verso: "Combien ça coûte ? Réponse : Cuesta … euros." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « sept » en espagnol ?",
      choix: ["siete", "seis", "ocho", "nueve"],
      bonneReponse: 0,
      explication: "Siete signifie sept.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel nombre correspond à « quince » ?",
      choix: ["14", "15", "16", "50"],
      bonneReponse: 1,
      explication: "Quince signifie quinze.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Écris en chiffres : dieciocho, veinte, treinta.",
      reponse: "18, 20, 30.",
      explication: "Dieciocho = 18, veinte = 20, treinta = 30.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel verbe utilise-t-on pour donner son âge en espagnol ?",
      choix: ["ser", "estar", "tener", "hay"],
      bonneReponse: 2,
      explication: "On utilise toujours tener pour l'âge : tengo 13 años.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment écrit-on 32 en espagnol ?",
      choix: ["treintaydos", "treinta y dos", "treintidós", "treinta dos"],
      bonneReponse: 1,
      explication: "À partir de 30, on sépare la dizaine et l'unité avec y : treinta y dos.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ma mère a 42 ans. »",
      reponse: "Mi madre tiene cuarenta y dos años.",
      explication: "42 = cuarenta y dos, avec tener pour l'âge.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris en lettres le nombre 26, puis utilise-le dans une phrase avec « hay ».",
      reponse: "Veintiséis. Hay veintiséis alumnos en la clase.",
      explication: "21 à 29 se collent en un mot : veintiséis.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "« ¿Cuánto cuesta?» sert à demander :",
      choix: ["L'âge de quelqu'un", "Le prix d'un objet", "L'heure", "La date"],
      bonneReponse: 1,
      explication: "¿Cuánto cuesta? sert à demander le prix d'un objet.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence de construction entre les nombres 21-29 et les nombres à partir de 31, avec un exemple pour chaque.",
      reponse: "De 21 à 29, on colle veinti- + l'unité en un seul mot (veintitrés = 23). À partir de 31, on sépare la dizaine et l'unité avec y (treinta y tres = 33).",
      explication: "C'est une règle importante à ne pas confondre à l'écrit.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi dit-on « tengo trece años » et non « soy trece años » ?",
      choix: [
        "Les deux sont corrects",
        "En espagnol, l'âge s'exprime avec tener, pas avec ser",
        "Soy s'utilise seulement pour les adultes",
        "Trece est un adjectif qui nécessite ser"
      ],
      bonneReponse: 1,
      explication: "L'âge se construit toujours avec tener + nombre + años en espagnol.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris un court dialogue (4 répliques) où deux personnes se demandent leur âge et donnent un prix d'objet.",
      reponse:
        "— ¿Cuántos años tienes?\n— Tengo catorce años. ¿Y tú?\n— Tengo trece años. ¿Cuánto cuesta este libro?\n— Cuesta doce euros.",
      explication: "Le dialogue combine les structures de l'âge et du prix.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Donne la date du 3 octobre en espagnol, puis explique la construction utilisée.",
      reponse: "El tres de octubre. On utilise « el » + le nombre + « de » + le mois.",
      explication: "Cette construction est fixe pour toutes les dates en espagnol.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « cent » en espagnol ?",
      choix: ["diez", "cien", "mil", "noventa"],
      bonneReponse: 1,
      explication: "Cien signifie cent.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Tengo doce años » signifie :",
      choix: ["Je suis en douzième", "J'ai douze ans", "Il est douze heures", "J'ai douze frères"],
      bonneReponse: 1,
      explication: "Tengo … años sert à donner son âge.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris en lettres : 15, 21, 45.",
      reponse: "Quince, veintiuno, cuarenta y cinco.",
      explication: "15 est irrégulier, 21 se colle, 45 se sépare avec y.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Combien ça coûte, s'il te plaît ? — Ça coûte vingt euros. »",
      reponse: "¿Cuánto cuesta, por favor? — Cuesta veinte euros.",
      explication: "Structure classique pour demander et donner un prix.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente l'âge de trois membres de ta famille en trois phrases complètes.",
      reponse: "Mi madre tiene cuarenta y tres años. Mi padre tiene cuarenta y cinco años. Mi hermano tiene ocho años.",
      explication: "Chaque phrase utilise tener + nombre + años.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les nombres et l'âge",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « seize » en espagnol ?",
          choix: ["dieciséis", "diecisiete", "veinte", "quince"],
          bonneReponse: 0,
          explication: "Dieciséis signifie seize.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment demande-t-on l'âge de quelqu'un ?",
          choix: ["¿Cómo te llamas?", "¿Cuántos años tienes?", "¿De dónde eres?", "¿Qué tal?"],
          bonneReponse: 1,
          explication: "¿Cuántos años tienes? est la formule pour demander l'âge.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Il y a vingt-cinq élèves dans ma classe. »",
          reponse: "Hay veinticinco alumnos en mi clase.",
          explication: "25 = veinticinco, un seul mot puisqu'il est entre 21 et 29.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris en lettres le nombre 58, et donne un exemple de phrase avec ce nombre.",
          reponse: "Cincuenta y ocho. Mi abuela tiene cincuenta y ocho años.",
          explication: "58 se sépare : cincuenta y ocho.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court dialogue dans une boutique espagnole : demande le prix de deux objets différents et donne les réponses.",
          reponse:
            "— ¿Cuánto cuesta esta camiseta?\n— Cuesta quince euros.\n— ¿Y este libro?\n— Cuesta ocho euros.",
          explication: "Le dialogue utilise ¿cuánto cuesta? et cuesta + prix pour deux objets.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Quelle règle s'applique aux nombres composés à partir de 31 ?",
          choix: [
            "On les colle toujours en un mot",
            "On sépare la dizaine et l'unité avec y",
            "On utilise un tiret",
            "Il n'y a pas de règle fixe"
          ],
          bonneReponse: 1,
          explication: "À partir de 31, dizaine et unité sont séparées par y : treinta y uno.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les nombres et l'âge",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « quatre-vingts » en espagnol ?",
          choix: ["setenta", "ochenta", "noventa", "cien"],
          bonneReponse: 1,
          explication: "Ochenta signifie quatre-vingts.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Cuesta diez euros » signifie :",
          choix: ["Ça pèse dix kilos", "Ça coûte dix euros", "J'ai dix euros", "Il est dix heures"],
          bonneReponse: 1,
          explication: "Cuesta + prix indique le coût d'un objet.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Mon père a cinquante ans et ma mère a quarante-sept ans. »",
          reponse: "Mi padre tiene cincuenta años y mi madre tiene cuarenta y siete años.",
          explication: "Deux structures tener + nombre + años, coordonnées par y.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Donne la date du 1er janvier en espagnol.",
          reponse: "El uno de enero (ou el primero de enero).",
          explication: "Pour le premier jour du mois, on utilise souvent uno ou primero.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi « uno » devient « un » dans certains contextes, avec un exemple de nombre composé.",
          reponse: "Uno perd le -o devant un nom masculin singulier : un chico (un garçon). Dans un nombre composé comme veintiún años, veintiuno devient aussi veintiún devant años (masculin).",
          explication: "C'est une apocope, une réduction de la forme devant un nom masculin.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Tengo veintiún años », pourquoi « veintiuno » devient-il « veintiún » ?",
          choix: [
            "Parce que años est féminin",
            "Parce qu'il précède un nom masculin (años) et perd son -o final",
            "C'est une erreur, il faudrait dire veintiuno años",
            "Parce que c'est un nombre pair"
          ],
          bonneReponse: 1,
          explication: "Comme uno, veintiuno s'apocope en veintiún devant un nom masculin singulier.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "0-15 : formes à apprendre par cœur (cero à quince), avec des irrégularités entre 11 et 15.",
    "16-19 : dieci- + unité en un mot — 21-29 : veinti- + unité en un mot.",
    "30 et plus : dizaine + y + unité, séparés (treinta y dos, cuarenta y cinco).",
    "L'âge se dit toujours avec TENER + nombre + años, jamais avec ser.",
    "¿Cuánto cuesta? / Cuesta … euros pour les prix — El + nombre + de + mois pour les dates.",
    "Uno s'apocope en un devant un nom masculin singulier (un chico, veintiún años).",
  ],
};

export default chapitre;
