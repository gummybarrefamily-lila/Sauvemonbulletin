import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "la-familia",
  titre: "La famille",
  matiere: "espagnol",
  niveau: "5eme",
  langueVoix: "es-ES",
  description:
    "Apprendre le vocabulaire de la famille en espagnol, les adjectifs possessifs de base et le verbe « tener » pour décrire sa propre famille.",
  objectifs: [
    "Nommer les membres de la famille : padre, madre, hermano, abuelo…",
    "Utiliser les adjectifs possessifs mi, tu, su",
    "Conjuguer et utiliser le verbe tener au présent",
    "Décrire sa famille avec des adjectifs simples",
    "Poser des questions sur la famille de quelqu'un",
  ],
  slides: [
    {
      titre: "Mi familia",
      illustration: "👨‍👩‍👧‍👦",
      visuel: "La familia",
      contenu: [
        "El padre / la madre : le père / la mère",
        "Los padres : les parents",
        "El hermano / la hermana : le frère / la sœur",
        "Los hermanos : les frères et sœurs",
      ],
      voixOff:
        "Découvrons le vocabulaire de la famille. El padre, le père, et la madre, la mère : ensemble, ce sont los padres, les parents. El hermano est le frère, la hermana la sœur, et los hermanos désigne les frères et sœurs ensemble. Remarque que le masculin pluriel peut désigner un groupe mixte, comme en français !",
    },
    {
      titre: "Los abuelos y más",
      illustration: "👴👵",
      visuel: "El abuelo / La abuela",
      contenu: [
        "El abuelo / la abuela : le grand-père / la grand-mère",
        "El tío / la tía : l'oncle / la tante",
        "El primo / la prima : le cousin / la cousine",
        "El hijo / la hija : le fils / la fille",
      ],
      voixOff:
        "Continuons avec la famille élargie. El abuelo et la abuela sont le grand-père et la grand-mère. El tío et la tía désignent l'oncle et la tante, et el primo, la prima, le cousin et la cousine. N'oublie pas el hijo et la hija, qui veulent dire le fils et la fille. Tu remarques que le masculin se termine souvent en -o et le féminin en -a !",
    },
    {
      titre: "Les adjectifs possessifs",
      illustration: "🔑",
      visuel: "mi / tu / su",
      contenu: [
        "mi hermano / mi hermana : mon frère / ma sœur (mi ne change pas)",
        "tu padre / tu madre : ton père / ta mère",
        "su abuelo : son grand-père (à lui, à elle, ou leur)",
        "mis, tus, sus : au pluriel (mis hermanos)",
      ],
      voixOff:
        "Pour dire mon, ton ou son en espagnol, on utilise mi, tu et su. La bonne nouvelle, c'est que ces mots ne changent pas de forme selon le genre : on dit mi hermano et mi hermana de la même façon. Au pluriel, on ajoute simplement un s : mis hermanos, mes frères et sœurs. Su peut vouloir dire son, sa, leur : le contexte permet de comprendre !",
    },
    {
      titre: "Le verbe tener",
      illustration: "✋",
      visuel: "Tengo dos hermanos",
      contenu: [
        "Yo tengo / tú tienes / él-ella tiene",
        "Nosotros tenemos / vosotros tenéis / ellos tienen",
        "Tengo dos hermanos : j'ai deux frères et sœurs",
        "¿Tienes hermanos? : as-tu des frères et sœurs ?",
      ],
      voixOff:
        "Le verbe tener, avoir, est indispensable pour parler de sa famille. Au présent : yo tengo, tú tienes, él ou ella tiene, nosotros tenemos, vosotros tenéis, ellos tienen. Par exemple, tengo dos hermanos veut dire j'ai deux frères et sœurs. Pour demander à quelqu'un s'il a des frères et sœurs, on dit ¿tienes hermanos ?",
    },
    {
      titre: "Décrire sa famille",
      illustration: "😊",
      visuel: "Mi hermano es simpático",
      contenu: [
        "Mi padre es alto : mon père est grand",
        "Mi madre es simpática : ma mère est sympathique",
        "Mi hermano es pequeño : mon petit frère est petit",
        "Adjectifs : masculin en -o, féminin en -a (alto/alta)",
      ],
      voixOff:
        "Pour décrire un membre de la famille, on utilise le verbe ser suivi d'un adjectif. Mi padre es alto, mon père est grand. Mi madre es simpática, ma mère est sympathique. Attention, l'adjectif s'accorde : il prend un -o au masculin et un -a au féminin, comme alto et alta. C'est une règle très régulière en espagnol !",
    },
    {
      titre: "Combien êtes-vous ?",
      illustration: "🔢",
      visuel: "Somos cuatro en mi familia",
      contenu: [
        "¿Cuántos sois en tu familia? : combien êtes-vous dans ta famille ?",
        "Somos cuatro : nous sommes quatre",
        "Soy hijo único / hija única : je suis fils unique / fille unique",
        "Vivo con mis padres y mi hermana : je vis avec mes parents et ma sœur",
      ],
      voixOff:
        "Pour demander la taille d'une famille, on dit ¿cuántos sois en tu familia ?. On répond somos suivi d'un nombre, par exemple somos cuatro, nous sommes quatre. Si on n'a pas de frères et sœurs, on dit soy hijo único ou hija única. On peut aussi préciser vivo con mis padres y mi hermana, je vis avec mes parents et ma sœur.",
    },
    {
      titre: "Les animaux domestiques",
      illustration: "🐶",
      visuel: "Tengo un perro",
      contenu: [
        "Tengo un perro / una gata : j'ai un chien / une chatte",
        "El perro se llama Rex : le chien s'appelle Rex",
        "No tengo mascota : je n'ai pas d'animal",
        "Mi familia tiene un pez : ma famille a un poisson",
      ],
      voixOff:
        "On parle souvent des animaux domestiques en présentant sa famille ! Tengo un perro, j'ai un chien, ou tengo una gata, j'ai une chatte. On peut ajouter el perro se llama Rex, le chien s'appelle Rex. Si on n'a pas d'animal, on dit no tengo mascota. Mascota est le mot général pour animal de compagnie.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 mi/tu/su + tener + ser",
      contenu: [
        "Vocabulaire : padre/madre, hermano/a, abuelo/a, tío/a, primo/a",
        "mi, tu, su ne changent pas selon le genre — mis, tus, sus au pluriel",
        "Tener : tengo, tienes, tiene, tenemos, tenéis, tienen",
        "Ser + adjectif accordé pour décrire : es alto/alta, es simpático/a",
      ],
      voixOff:
        "Résumons. Retiens le vocabulaire de base : padre, madre, hermano, hermana, abuelo, abuela, tío, tía, primo, prima. Les possessifs mi, tu, su ne changent pas selon le genre, mais prennent un s au pluriel. Le verbe tener se conjugue tengo, tienes, tiene, tenemos, tenéis, tienen, et sert à dire combien on a de frères et sœurs. Enfin, pour décrire, utilise ser suivi d'un adjectif bien accordé au masculin ou au féminin !",
    },
  ],
  fiche: {
    intro:
      "Le vocabulaire de la famille s'apprend souvent avec les couples masculin/féminin en -o/-a. Les possessifs mi, tu, su et le verbe tener permettent de présenter et décrire sa propre famille.",
    sections: [
      {
        titre: "Vocabulaire de la famille",
        points: [
          "El padre / la madre : le père / la mère — los padres : les parents",
          "El hermano / la hermana : le frère / la sœur",
          "El abuelo / la abuela — el tío / la tía — el primo / la prima",
        ],
      },
      {
        titre: "Les possessifs",
        points: [
          "mi, tu, su : mon/ton/son, ma/ta/sa (invariables en genre)",
          "mis, tus, sus : au pluriel",
          "Su peut signifier son, sa, ou leur selon le contexte",
        ],
      },
      {
        titre: "Le verbe tener",
        points: [
          "Tengo, tienes, tiene, tenemos, tenéis, tienen",
          "Tengo dos hermanos : j'ai deux frères et sœurs",
          "¿Cuántos sois en tu familia? — Somos cuatro",
        ],
      },
      {
        titre: "Décrire avec ser",
        points: [
          "Ser + adjectif : mi padre es alto, mi madre es simpática",
          "Les adjectifs s'accordent : -o au masculin, -a au féminin",
          "Soy hijo único / hija única : je suis fils/fille unique",
        ],
      },
    ],
    audio:
      "Fiche de révision : la famille en espagnol. El padre et la madre sont le père et la mère, ensemble los padres. El hermano et la hermana sont le frère et la sœur. El abuelo et la abuela sont les grands-parents, el tío et la tía l'oncle et la tante, el primo et la prima les cousins. Pour dire mon, ton, son, on utilise mi, tu, su, qui ne changent pas de genre mais prennent un s au pluriel : mis, tus, sus. Le verbe tener, avoir, se conjugue tengo, tienes, tiene, tenemos, tenéis, tienen, et sert à dire combien on a de frères et sœurs, comme tengo dos hermanos. Pour décrire un proche, on utilise ser suivi d'un adjectif accordé, comme mi padre es alto ou mi madre es simpática.",
  },
  memoCards: [
    { recto: "El padre / la madre", verso: "Le père / la mère. Ensemble : los padres." },
    { recto: "El hermano / la hermana", verso: "Le frère / la sœur." },
    { recto: "El abuelo / la abuela", verso: "Le grand-père / la grand-mère." },
    { recto: "El tío / la tía", verso: "L'oncle / la tante." },
    { recto: "El primo / la prima", verso: "Le cousin / la cousine." },
    { recto: "mi / tu / su", verso: "Mon-ma / ton-ta / son-sa (invariables). Pluriel : mis, tus, sus." },
    { recto: "Tener : tengo, tienes, tiene…", verso: "Avoir. Ex : Tengo dos hermanos (j'ai deux frères et sœurs)." },
    { recto: "Soy hijo único / hija única", verso: "Je suis fils unique / fille unique." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « la mère » en espagnol ?",
      choix: ["El padre", "La madre", "La hermana", "La abuela"],
      bonneReponse: 1,
      explication: "La madre signifie la mère ; el padre signifie le père.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « le grand-père » ?",
      choix: ["El tío", "El primo", "El abuelo", "El hermano"],
      bonneReponse: 2,
      explication: "El abuelo signifie le grand-père ; la abuela la grand-mère.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « J'ai un frère et une sœur. »",
      reponse: "Tengo un hermano y una hermana.",
      explication: "On utilise tengo (verbe tener) suivi des noms de famille.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie « los primos » ?",
      choix: ["Les oncles", "Les cousins", "Les grands-parents", "Les frères"],
      bonneReponse: 1,
      explication: "Los primos désigne les cousins (ou cousins et cousines ensemble).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase est correctement accordée ?",
      choix: ["Mi madre es alto", "Mi padre es simpática", "Mi hermana es simpática", "Mi hermano es alta"],
      bonneReponse: 2,
      explication: "L'adjectif doit s'accorder avec le nom : hermana (féminin) + simpática (féminin).",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue le verbe tener avec « nosotros » et « ellos », puis traduis « nous avons trois cousins ».",
      reponse: "Nosotros tenemos, ellos tienen. Tenemos tres primos.",
      explication: "Tener se conjugue tengo, tienes, tiene, tenemos, tenéis, tienen.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Mon grand-père est grand et sympathique. »",
      reponse: "Mi abuelo es alto y simpático.",
      explication: "Les adjectifs alto et simpático s'accordent au masculin car abuelo est masculin.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Comment dit-on « leur tante » (à eux) en espagnol ?",
      choix: ["mi tía", "tu tía", "su tía", "sus tía"],
      bonneReponse: 2,
      explication: "Su tía peut signifier sa tante ou leur tante, selon le contexte ; su reste invariable au singulier.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Présente une famille imaginaire de 5 personnes en 3-4 phrases, en utilisant tener, ser et des possessifs.",
      reponse:
        "Somos cinco en mi familia. Tengo dos hermanos y una hermana. Mi padre es alto y mi madre es simpática. Mi hermano mayor se llama Pablo.",
      explication: "Le texte combine tener (avoir), ser (décrire) et les possessifs mi.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Tengo una gata que se llama Luna », le mot « gata » indique :",
      choix: ["Un chien mâle", "Une chatte femelle", "Un poisson", "Un oiseau"],
      bonneReponse: 1,
      explication: "Gata est le féminin de gato (chat) : une chatte.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi on dit « mi hermano » et « mi hermana » avec le même possessif « mi », alors que le nom change de genre.",
      reponse: "Parce que mi, tu, su sont invariables en genre : ils ne s'accordent pas avec le nom qu'ils accompagnent, contrairement aux adjectifs.",
      explication: "C'est une différence importante avec les adjectifs qualificatifs comme alto/alta.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un correspondant te demande « ¿Cuántos sois en tu familia? ». Réponds en détaillant la composition de ta famille (au moins 3 personnes).",
      reponse: "Somos cuatro en mi familia: mis padres, mi hermano y yo. Mi hermano se llama Lucas y tiene 10 años.",
      explication: "La réponse utilise somos, mis, et une phrase supplémentaire avec tener.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « le fils » ?",
      choix: ["El hijo", "La hija", "El hermano", "El primo"],
      bonneReponse: 0,
      explication: "El hijo signifie le fils ; la hija la fille.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Mis hermanos » signifie :",
      choix: ["Mon frère", "Mes frères et sœurs", "Ton frère", "Nos frères"],
      bonneReponse: 1,
      explication: "Mis est le pluriel de mi : mes frères et sœurs.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ma sœur a 15 ans. »",
      reponse: "Mi hermana tiene 15 años.",
      explication: "Tener sert aussi à donner l'âge des membres de la famille.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Accorde correctement : « Mi (abuela) es (alto). »",
      reponse: "Mi abuela es alta.",
      explication: "L'adjectif alto devient alta car abuela est féminin.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris ta famille en 3 phrases en utilisant tener, ser et un possessif.",
      reponse: "Somos tres en mi familia. Tengo un hermano. Mi hermano es simpático.",
      explication: "Le texte combine les trois structures vues dans le chapitre.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La famille",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « la tante » ?",
          choix: ["La tía", "El tío", "La prima", "La abuela"],
          bonneReponse: 0,
          explication: "La tía signifie la tante ; el tío l'oncle.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte du verbe tener avec « tú » ?",
          choix: ["tengo", "tienes", "tiene", "tenemos"],
          bonneReponse: 1,
          explication: "Tú tienes est la deuxième personne du singulier du verbe tener.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Mes parents sont sympathiques. »",
          reponse: "Mis padres son simpáticos.",
          explication: "Padres est masculin pluriel, donc l'adjectif prend la forme simpáticos.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Complète : « ¿Cuántos … en tu familia? » puis réponds pour une famille de 5 personnes.",
          reponse: "¿Cuántos sois en tu familia? — Somos cinco.",
          explication: "Sois vient du verbe ser ; somos est la première personne du pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Présente en 4-5 phrases une famille avec au moins 4 membres, un animal domestique, et des adjectifs de description.",
          reponse:
            "Somos cuatro en mi familia. Tengo un hermano y una hermana. Mi hermano es alto y mi hermana es simpática. También tenemos un perro que se llama Toby.",
          explication: "Le texte doit combiner tener, ser, possessifs et vocabulaire familial.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « mi hermano es alto » mais « mi hermana es alta » ?",
          choix: [
            "C'est une erreur, alto ne change jamais",
            "L'adjectif s'accorde en genre avec le nom qu'il décrit",
            "Alta est réservé au pluriel",
            "Alto est réservé aux animaux"
          ],
          bonneReponse: 1,
          explication: "Contrairement aux possessifs, les adjectifs qualificatifs s'accordent en genre en espagnol.",
        },
      ],
    },
    {
      titre: "Examen 2 — La famille",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « les grands-parents » ?",
          choix: ["Los abuelos", "Los padres", "Los tíos", "Los primos"],
          bonneReponse: 0,
          explication: "Los abuelos désigne les grands-parents.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Soy hijo único » signifie :",
          choix: ["Je suis le fils préféré", "Je suis fils unique", "Je n'ai pas de fils", "Je suis un bon fils"],
          bonneReponse: 1,
          explication: "Hijo único signifie fils unique, sans frères ni sœurs.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « J'ai un chat et un chien. »",
          reponse: "Tengo un gato y un perro.",
          explication: "Tengo (verbe tener) + un/una + nom de l'animal.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande « ¿Tienes hermanos? ». Réponds que tu as deux sœurs plus jeunes.",
          reponse: "Sí, tengo dos hermanas menores.",
          explication: "Menores signifie « plus jeunes » ; on peut aussi dire mayores pour « plus âgés ».",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare l'utilisation de « ser » et « tener » pour parler de la famille, avec un exemple pour chacun.",
          reponse: "Ser sert à décrire (mi madre es simpática) ; tener sert à indiquer ce qu'on possède ou l'âge (tengo dos hermanos, mi madre tiene 40 años).",
          explication: "Ser décrit des qualités, tener indique la possession ou l'âge.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « sus primos », le possessif « sus » peut signifier :",
          choix: ["Seulement « ses »", "« ses », « leurs » selon le contexte", "Seulement « nos »", "Seulement « tes »"],
          bonneReponse: 1,
          explication: "Su/sus est ambigu et peut signifier son/sa/ses ou leur/leurs selon le contexte.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vocabulaire clé : padre/madre, hermano/a, abuelo/a, tío/a, primo/a, hijo/a.",
    "mi, tu, su sont invariables en genre ; mis, tus, sus au pluriel.",
    "Tener (avoir) : tengo, tienes, tiene, tenemos, tenéis, tienen — sert pour l'âge et les frères/sœurs.",
    "Ser + adjectif accordé (-o/-a) pour décrire : es alto/alta, es simpático/a.",
    "Somos + nombre pour dire combien on est dans la famille (¿Cuántos sois?).",
    "Vocabulaire des animaux : tengo un perro/una gata — no tengo mascota si on n'en a pas.",
  ],
};

export default chapitre;
