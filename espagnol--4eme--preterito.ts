import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "preterito",
  titre: "Parler au passé (pretérito)",
  matiere: "espagnol",
  niveau: "4eme",
  langueVoix: "es-ES",
  description:
    "Découvrir le pretérito indefinido pour raconter des actions passées et terminées : conjugaison des verbes réguliers en -ar/-er/-ir, particularités orthographiques, verbes irréguliers ser/ir et hacer, et marqueurs de temps du passé.",
  objectifs: [
    "Savoir quand utiliser le pretérito (action passée et terminée)",
    "Conjuguer les verbes réguliers en -ar, -er et -ir au pretérito",
    "Repérer les changements orthographiques (c>qu, g>gu, z>c) à la première personne",
    "Conjuguer ser/ir et hacer au pretérito",
    "Employer des marqueurs de temps du passé (ayer, la semana pasada, el año pasado)",
  ],
  slides: [
    {
      titre: "Quand utiliser le pretérito",
      illustration: "⏳",
      visuel: "Ayer, la semana pasada…",
      contenu: [
        "Le pretérito raconte une action passée et terminée, souvent datée",
        "Ayer : hier — Anteayer : avant-hier",
        "La semana pasada, el mes pasado, el año pasado : la semaine/le mois/l'année dernier(ère)",
        "Hace dos días : il y a deux jours",
      ],
      voixOff:
        "Le pretérito indefinido sert à raconter une action terminée dans le passé, souvent accompagnée d'une date précise. On le reconnaît grâce à des marqueurs de temps : ayer, hier, anteayer, avant-hier, la semana pasada, la semaine dernière, el mes pasado, le mois dernier, et el año pasado, l'année dernière. On dit aussi hace dos días, il y a deux jours, pour situer une action dans le passé.",
    },
    {
      titre: "Les verbes réguliers en -AR",
      illustration: "🗣️",
      visuel: "Hablé, hablaste, habló…",
      contenu: [
        "Hablar : hablé, hablaste, habló, hablamos, hablasteis, hablaron",
        "Terminaisons : -é, -aste, -ó, -amos, -asteis, -aron",
        "Ayer hablé con mi profesora : hier j'ai parlé avec ma professeure",
        "Jugamos al fútbol el sábado pasado : nous avons joué au foot samedi dernier",
      ],
      voixOff:
        "Les verbes en -ar suivent des terminaisons régulières au pretérito. Hablar, parler, donne hablé, hablaste, habló, hablamos, hablasteis, hablaron. On reconnaît les terminaisons -é, -aste, -ó, -amos, -asteis, -aron. Par exemple, ayer hablé con mi profesora, hier j'ai parlé avec ma professeure. Jugamos al fútbol el sábado pasado, nous avons joué au foot samedi dernier.",
    },
    {
      titre: "Les verbes réguliers en -ER/-IR",
      illustration: "📗",
      visuel: "Comí, comiste, comió…",
      contenu: [
        "Comer : comí, comiste, comió, comimos, comisteis, comieron",
        "Vivir : viví, viviste, vivió, vivimos, vivisteis, vivieron",
        "Les verbes en -er et -ir partagent les mêmes terminaisons au pretérito",
        "Comí en un restaurante con mis amigos : j'ai mangé dans un restaurant avec mes amis",
      ],
      voixOff:
        "Les verbes en -er et en -ir se conjuguent avec les mêmes terminaisons au pretérito. Comer, manger, donne comí, comiste, comió, comimos, comisteis, comieron. Vivir, vivre, donne viví, viviste, vivió, vivimos, vivisteis, vivieron. Remarque que -er et -ir partagent exactement les mêmes terminaisons. Par exemple, comí en un restaurante con mis amigos, j'ai mangé dans un restaurant avec mes amis.",
    },
    {
      titre: "Particularités orthographiques",
      illustration: "✏️",
      visuel: "Busqué, jugué, empecé",
      contenu: [
        "Verbes en -car : c > qu devant é — Buscar → busqué",
        "Verbes en -gar : g > gu devant é — Jugar → jugué, llegar → llegué",
        "Verbes en -zar : z > c devant é — Empezar → empecé",
        "Ce changement concerne uniquement la première personne du singulier (yo)",
      ],
      voixOff:
        "Certains verbes changent une lettre à la première personne du singulier pour garder le même son. Les verbes en -car changent le c en qu : buscar devient busqué. Les verbes en -gar changent le g en gu : jugar devient jugué, llegar devient llegué. Les verbes en -zar changent le z en c : empezar devient empecé. Ce changement ne concerne que la forme yo ; les autres personnes restent régulières.",
    },
    {
      titre: "Ser et ir : une seule et même forme",
      illustration: "⚡",
      visuel: "Fui, fuiste, fue…",
      contenu: [
        "Ser et ir ont exactement la même conjugaison au pretérito",
        "Fui, fuiste, fue, fuimos, fuisteis, fueron",
        "Fui al cine (ir) : je suis allé(e) au cinéma",
        "Fue muy divertido (ser) : ce fut très amusant",
      ],
      voixOff:
        "Deux verbes très fréquents, ser et ir, se conjuguent exactement de la même façon au pretérito : fui, fuiste, fue, fuimos, fuisteis, fueron. C'est le contexte qui indique de quel verbe il s'agit. Fui al cine signifie je suis allé au cinéma, avec ir. Fue muy divertido signifie ce fut très amusant, avec ser.",
    },
    {
      titre: "Hacer au pretérito",
      illustration: "🔨",
      visuel: "Hice, hiciste, hizo…",
      contenu: [
        "Hacer : hice, hiciste, hizo, hicimos, hicisteis, hicieron",
        "Attention à hizo (avec z, pas c) à la troisième personne",
        "¿Qué hiciste ayer? : qu'as-tu fait hier ?",
        "Hice mis deberes por la tarde : j'ai fait mes devoirs l'après-midi",
      ],
      voixOff:
        "Le verbe hacer, faire, est irrégulier au pretérito : hice, hiciste, hizo, hicimos, hicisteis, hicieron. Attention à la troisième personne, hizo, qui s'écrit avec un z pour garder le son doux. Une question très utile : ¿qué hiciste ayer?, qu'as-tu fait hier ? On peut répondre hice mis deberes por la tarde, j'ai fait mes devoirs l'après-midi.",
    },
    {
      titre: "Pretérito contre présent",
      illustration: "🔀",
      visuel: "Hoy vs. Ayer",
      contenu: [
        "Présent : hoy juego al tenis (aujourd'hui je joue au tennis)",
        "Pretérito : ayer jugué al tenis (hier j'ai joué au tennis)",
        "Le marqueur temporel indique quel temps utiliser",
        "Ne jamais mélanger un marqueur de passé avec un verbe au présent",
      ],
      voixOff:
        "Il est essentiel de bien distinguer le présent et le pretérito grâce aux marqueurs de temps. Au présent, on dit hoy juego al tenis, aujourd'hui je joue au tennis. Au pretérito, on dit ayer jugué al tenis, hier j'ai joué au tennis. Le marqueur temporel, hoy ou ayer, t'indique immédiatement quel temps utiliser : ne mélange jamais un marqueur de passé avec un verbe au présent.",
    },
    {
      titre: "Exemples avec des marqueurs de temps",
      illustration: "📅",
      visuel: "La semana pasada…",
      contenu: [
        "La semana pasada visité un museo con mi clase.",
        "El mes pasado mis padres viajaron a Portugal.",
        "El año pasado fui a un campamento de verano.",
        "Anteayer hice una tarta de chocolate.",
      ],
      voixOff:
        "Voici plusieurs exemples combinant marqueurs de temps et pretérito. La semana pasada visité un museo con mi clase, la semaine dernière j'ai visité un musée avec ma classe. El mes pasado mis padres viajaron a Portugal, le mois dernier mes parents ont voyagé au Portugal. El año pasado fui a un campamento de verano, l'année dernière je suis allé à une colonie de vacances. Anteayer hice una tarta de chocolate, avant-hier j'ai fait un gâteau au chocolat.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 -é/-aste/-ó ; -í/-iste/-ió ; fui, hice",
      contenu: [
        "-AR : -é, -aste, -ó, -amos, -asteis, -aron",
        "-ER/-IR : -í, -iste, -ió, -imos, -isteis, -ieron",
        "Changements orthographiques à la 1ère personne : busqué, jugué, empecé",
        "Irréguliers essentiels : fui (ser/ir), hice (hacer)",
      ],
      voixOff:
        "Résumons. Les verbes en -ar se conjuguent avec -é, -aste, -ó, -amos, -asteis, -aron. Les verbes en -er et -ir partagent les terminaisons -í, -iste, -ió, -imos, -isteis, -ieron. N'oublie pas les changements orthographiques à la première personne : busqué, jugué, empecé. Enfin, retiens les deux irréguliers essentiels : fui pour ser et ir, et hice pour hacer. Utilise toujours un marqueur de temps comme ayer ou la semana pasada pour situer l'action !",
    },
  ],
  fiche: {
    intro:
      "Le pretérito indefinido permet de raconter une action passée et terminée. Il faut savoir conjuguer les verbes réguliers en -ar/-er/-ir, connaître les particularités orthographiques et les deux irréguliers essentiels, ser/ir et hacer.",
    sections: [
      {
        titre: "Quand utiliser le pretérito",
        points: [
          "Action passée et terminée, souvent datée par un marqueur de temps",
          "Ayer, anteayer, la semana pasada, el mes pasado, el año pasado, hace dos días",
        ],
      },
      {
        titre: "Les verbes réguliers",
        points: [
          "-AR : hablé, hablaste, habló, hablamos, hablasteis, hablaron",
          "-ER/-IR : comí/viví, comiste/viviste, comió/vivió, comimos/vivimos, comisteis/vivisteis, comieron/vivieron",
        ],
      },
      {
        titre: "Les particularités orthographiques",
        points: [
          "-car : c>qu → busqué (buscar)",
          "-gar : g>gu → jugué, llegué (jugar, llegar)",
          "-zar : z>c → empecé (empezar)",
        ],
      },
      {
        titre: "Les irréguliers essentiels",
        points: [
          "Ser/Ir : fui, fuiste, fue, fuimos, fuisteis, fueron (même forme)",
          "Hacer : hice, hiciste, hizo, hicimos, hicisteis, hicieron",
        ],
      },
    ],
    audio:
      "Fiche de révision : le pretérito indefinido en espagnol. Ce temps s'utilise pour une action passée et terminée, souvent accompagnée d'un marqueur comme ayer, la semana pasada ou el año pasado. Les verbes en -ar se conjuguent avec les terminaisons -é, -aste, -ó, -amos, -asteis, -aron, comme hablé. Les verbes en -er et -ir partagent les terminaisons -í, -iste, -ió, -imos, -isteis, -ieron, comme comí et viví. Certains verbes changent une lettre à la première personne du singulier pour garder le même son : buscar devient busqué, jugar devient jugué, empezar devient empecé. Enfin, deux verbes irréguliers sont indispensables : ser et ir, qui partagent la même forme, fui, fuiste, fue, et hacer, qui donne hice, hiciste, hizo.",
  },
  memoCards: [
    { recto: "Hablar (prétérit) : hablé, hablaste, habló…", verso: "Parler (verbe régulier en -ar)." },
    { recto: "Comer/Vivir (prétérit) : comí/viví, comiste/viviste…", verso: "Manger/Vivre (verbes réguliers en -er/-ir, mêmes terminaisons)." },
    { recto: "Buscar → busqué", verso: "Chercher : c devient qu à la 1ère personne pour garder le son." },
    { recto: "Jugar → jugué / Llegar → llegué", verso: "Jouer/Arriver : g devient gu à la 1ère personne." },
    { recto: "Empezar → empecé", verso: "Commencer : z devient c à la 1ère personne." },
    { recto: "Ser/Ir (prétérit) : fui, fuiste, fue…", verso: "Être/Aller : même forme irrégulière pour les deux verbes." },
    { recto: "Hacer (prétérit) : hice, hiciste, hizo…", verso: "Faire : verbe irrégulier (attention à hizo avec z)." },
    { recto: "Ayer / La semana pasada / El año pasado", verso: "Hier / la semaine dernière / l'année dernière (marqueurs du passé)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « hablar » au prétérit avec « yo » ?",
      choix: ["hablo", "hablé", "hablaba", "hablaré"],
      bonneReponse: 1,
      explication: "Hablé est la première personne du singulier du prétérit de hablar.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « hier » ?",
      choix: ["hoy", "mañana", "ayer", "siempre"],
      bonneReponse: 2,
      explication: "Ayer signifie hier.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « J'ai mangé une pizza hier soir. »",
      reponse: "Comí una pizza ayer por la noche.",
      explication: "Comí est le prétérit de comer à la première personne.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la terminaison correcte de « vivir » avec « ella » au prétérit ?",
      choix: ["vivió", "vivo", "vivía", "vivirá"],
      bonneReponse: 0,
      explication: "Vivió est la troisième personne du singulier du prétérit de vivir.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « buscar » au prétérit avec « yo » ?",
      choix: ["busco", "buscé", "busqué", "buscaba"],
      bonneReponse: 2,
      explication: "Buscar change le c en qu à la première personne pour garder le son : busqué.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « jugar » au prétérit avec « yo » et traduis « j'ai joué au foot la semaine dernière ».",
      reponse: "Jugué. Jugué al fútbol la semana pasada.",
      explication: "Jugar change le g en gu à la première personne : jugué.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Le mois dernier, je suis allé au cinéma avec mes amis. »",
      reponse: "El mes pasado, fui al cine con mis amigos.",
      explication: "Fui est le prétérit irrégulier de ir.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement « hacer » au prétérit ?",
      choix: ["Hice mis deberes ayer", "Hago mis deberes ayer", "Hací mis deberes ayer", "Hació mis deberes ayer"],
      bonneReponse: 0,
      explication: "Hice est la première personne du singulier du prétérit irrégulier de hacer.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi « buscar » devient « busqué » et non « buscé » à la première personne du prétérit.",
      reponse:
        "Devant un e, la lettre c se prononce différemment. Pour garder le son dur du c de buscar, l'orthographe change en qu : busqué. Ce changement orthographique concerne uniquement la première personne du singulier (yo), les autres personnes restent régulières : buscaste, buscó, etc.",
      explication: "C'est une règle d'orthographe liée à la prononciation, pas une irrégularité de sens.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « El año pasado fue un año difícil », de quel infinitif vient « fue » et pourquoi n'est-ce pas ambigu ici ?",
      choix: [
        "De ir, car le contexte parle d'un déplacement",
        "De ser, car « un año difícil » est un attribut, pas une destination",
        "Impossible de savoir sans plus de contexte",
        "De hacer, verbe irrégulier"
      ],
      bonneReponse: 1,
      explication: "Fue vient de ser car il introduit un attribut (difícil), typique de ser, pas d'ir qui indique un déplacement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Raconte en 4-5 phrases ce que tu as fait le week-end dernier, avec au moins deux verbes réguliers et un verbe irrégulier (fui/hice) au prétérit.",
      reponse:
        "El fin de semana pasado, fui a casa de mis abuelos. Comimos juntos y hablamos mucho. Por la tarde, jugué al fútbol con mi primo. Hice los deberes por la noche.",
      explication: "Le texte combine fui (ir), jugué (jugar, orthographe), comimos et hablamos (réguliers) et hice (hacer).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un court récit (4 phrases) au prétérit décrivant une sortie scolaire, en utilisant un marqueur de temps et un verbe avec changement orthographique (buscar, jugar, llegar ou empezar).",
      reponse:
        "La semana pasada, mi clase visitó un museo. Llegamos a las nueve y la visita empezó a las nueve y media. Busqué información sobre los cuadros. Fue una excursión muy interesante.",
      explication: "Le texte utilise llegamos, empezó et busqué, avec un changement orthographique attendu au yo (busqué).",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte de « comer » au prétérit avec « ellos » ?",
      choix: ["comen", "comieron", "comían", "comerán"],
      bonneReponse: 1,
      explication: "Comieron est la troisième personne du pluriel du prétérit de comer.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « l'année dernière » ?",
      choix: ["este año", "el año pasado", "el año que viene", "cada año"],
      bonneReponse: 1,
      explication: "El año pasado signifie l'année dernière.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Nous avons commencé les cours à huit heures. » (empezar)",
      reponse: "Empezamos las clases a las ocho.",
      explication: "Avec nosotros, empezar reste régulier : empezamos.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « ser/ir » au prétérit avec « nosotros » et traduis « nous sommes allés à la plage ».",
      reponse: "Fuimos. Fuimos a la playa.",
      explication: "Fuimos est la forme nosotros commune à ser et ir au prétérit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Raconte en 3 phrases une journée passée en utilisant un verbe régulier en -ar, un verbe en -er/-ir et le verbe hacer.",
      reponse: "Ayer hablé con mi amiga por teléfono. Después comimos juntas en su casa. Por la tarde, hice mis deberes.",
      explication: "Le texte combine hablé, comimos et hice, tous au prétérit.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le pretérito",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte de « vivir » avec « yo » au prétérit ?",
          choix: ["vivo", "viví", "vivía", "viviré"],
          bonneReponse: 1,
          explication: "Viví est la première personne du singulier du prétérit de vivir.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « avant-hier » ?",
          choix: ["ayer", "anteayer", "mañana", "hoy"],
          bonneReponse: 1,
          explication: "Anteayer signifie avant-hier.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « La semaine dernière, mes parents ont travaillé beaucoup. »",
          reponse: "La semana pasada, mis padres trabajaron mucho.",
          explication: "Trabajaron est le prétérit régulier de trabajar à la 3e personne du pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « llegar » au prétérit avec « yo » et traduis « je suis arrivé en retard hier ».",
          reponse: "Llegué. Llegué tarde ayer.",
          explication: "Llegar change le g en gu à la première personne pour garder le son : llegué.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un récit complet (6 phrases minimum) de ta journée d'hier, en utilisant au moins trois verbes réguliers et un verbe irrégulier (fui ou hice) au prétérit.",
          reponse:
            "Ayer me levanté a las siete. Desayuné rápido y fui al instituto. Por la mañana, hablé mucho con mis amigos. Comimos juntos a mediodía. Por la tarde, hice mis deberes de matemáticas. Finalmente, cené con mi familia y me acosté temprano.",
          explication: "Le récit combine plusieurs verbes réguliers et les irréguliers fui et hice de façon cohérente.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi les verbes en -er et -ir partagent-ils les mêmes terminaisons au prétérito, contrairement au présent ?",
          choix: [
            "C'est une particularité propre au prétérito : ces deux groupes fusionnent leurs terminaisons à ce temps",
            "Ce n'est pas vrai, ils ont des terminaisons différentes",
            "Seuls les verbes irréguliers en -ir partagent les terminaisons de -er",
            "C'est vrai uniquement au pluriel"
          ],
          bonneReponse: 0,
          explication: "Au prétérito, -er et -ir partagent exactement les mêmes terminaisons, contrairement au présent où ils diffèrent.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le pretérito",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la forme correcte de « hacer » avec « tú » au prétérit ?",
          choix: ["haces", "hiciste", "hacías", "harás"],
          bonneReponse: 1,
          explication: "Hiciste est la deuxième personne du singulier du prétérit irrégulier de hacer.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « il y a deux jours » ?",
          choix: ["dentro de dos días", "hace dos días", "en dos días", "cada dos días"],
          bonneReponse: 1,
          explication: "Hace dos días signifie il y a deux jours.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « J'ai commencé mes devoirs à cinq heures. » (empezar)",
          reponse: "Empecé mis deberes a las cinco.",
          explication: "Empezar change le z en c à la première personne : empecé.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un ami te demande « ¿Qué hiciste el fin de semana pasado? ». Réponds avec deux activités au prétérit.",
          reponse: "Vi una película y jugué al baloncesto con mis amigos.",
          explication: "La réponse utilise vi (ver) et jugué (jugar) au prétérit.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare le présent et le prétérito en donnant un exemple de chaque, puis explique comment on sait quel temps utiliser.",
          reponse:
            "Le présent décrit une habitude ou une action actuelle : hoy juego al tenis, aujourd'hui je joue au tennis. Le prétérito décrit une action passée et terminée : ayer jugué al tenis, hier j'ai joué au tennis. C'est le marqueur temporel (hoy, ayer, la semana pasada) qui indique quel temps utiliser.",
          explication: "Les marqueurs de temps sont les indices essentiels pour choisir le bon temps.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Empecé el libro pero no lo terminé », pourquoi « terminé » ne change-t-il pas d'orthographe alors que « empecé » oui ?",
          choix: [
            "Terminar se termine par -ar mais pas par -zar, -car ou -gar, donc il reste régulier",
            "C'est une erreur, terminé devrait s'écrire terminé avec un c",
            "Terminar est un verbe irrégulier au prétérito",
            "Les deux verbes devraient changer d'orthographe"
          ],
          bonneReponse: 0,
          explication: "Seuls les verbes en -car, -gar et -zar changent d'orthographe à la première personne ; terminar n'en fait pas partie.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le pretérito raconte une action passée et terminée, avec un marqueur de temps (ayer, la semana pasada, el año pasado).",
    "-AR : -é, -aste, -ó, -amos, -asteis, -aron (hablé, hablaste, habló…).",
    "-ER/-IR : -í, -iste, -ió, -imos, -isteis, -ieron (comí/viví…).",
    "Changements orthographiques à la 1ère personne : -car>qué (busqué), -gar>gué (jugué), -zar>cé (empecé).",
    "Ser/Ir partagent la même forme irrégulière : fui, fuiste, fue, fuimos, fuisteis, fueron.",
    "Hacer est irrégulier : hice, hiciste, hizo, hicimos, hicisteis, hicieron.",
  ],
};

export default chapitre;
