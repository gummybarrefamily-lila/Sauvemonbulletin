import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "aspect-verbal",
  titre: "L'aspect verbal : perfectif et imperfectif",
  matiere: "russe",
  niveau: "3eme",
  langueVoix: "ru-RU",
  description:
    "Découvrir l'aspect verbal, l'une des notions les plus caractéristiques du russe : presque chaque verbe existe en deux versions, imperfective pour un processus ou une habitude, perfective pour une action unique et achevée — avec ses conséquences sur le futur, et un focus danse-études sur la préparation d'une audition.",
  objectifs: [
    "Comprendre la différence de sens entre aspect imperfectif et aspect perfectif",
    "Reconnaître les principales façons de former une paire aspectuelle (préfixe, suffixe, radical différent)",
    "Former le futur imperfectif avec буду + infinitif",
    "Comprendre que le perfectif au « présent » a un sens futur",
    "Vocabulaire danse-études : учить/выучить une variation, танцевать/станцевать",
  ],
  slides: [
    {
      titre: "Deux aspects pour un seul verbe",
      illustration: "🔀",
      visuel: "делать / сделать",
      contenu: [
        "En russe, presque chaque verbe existe en deux versions : l'aspect imperfectif (несовершенный вид) et l'aspect perfectif (совершенный вид).",
        "L'imperfectif décrit une action en cours, répétée ou habituelle, sans insister sur le résultat.",
        "Le perfectif décrit une action unique, achevée, avec un résultat.",
        "делать (faire, imperfectif) / сделать (faire, perfectif, avec résultat)",
      ],
      voixOff:
        "Voici l'une des notions les plus typiques du russe : l'aspect verbal. Presque chaque verbe existe en deux versions, qu'on appelle imperfectif et perfectif. L'imperfectif décrit un processus, une habitude, sans se soucier du résultat. Le perfectif décrit une action unique, terminée, avec un résultat concret. Diélat', faire, en train de le faire ; sdiélat', faire, jusqu'au bout, terminé.",
    },
    {
      titre: "L'imperfectif : processus et habitude",
      illustration: "⏳",
      visuel: "Я делала уроки",
      contenu: [
        "L'imperfectif s'utilise pour un processus en cours, une habitude, une action répétée ou sans résultat précisé.",
        "Я делала уроки два часа (ya diélala ouroki dva tchassa) : j'ai fait mes devoirs pendant deux heures (durée)",
        "Я танцую каждый день (ya tantsouïou kajdyï dién') : je danse tous les jours (habitude)",
        "L'imperfectif existe aux trois temps : passé, présent, futur",
      ],
      voixOff:
        "L'imperfectif s'utilise pour un processus en cours, une habitude, une action répétée, ou une action dont on ne précise pas le résultat. Ya diélala ouroki dva tchassa, j'ai fait mes devoirs pendant deux heures : on insiste sur la durée. Ya tantsouïou kajdyï dién', je danse tous les jours : une habitude. L'imperfectif existe aux trois temps.",
    },
    {
      titre: "Le perfectif : action unique et résultat",
      illustration: "✅",
      visuel: "Я сделала уроки!",
      contenu: [
        "Le perfectif décrit une action unique, achevée, avec un résultat concret.",
        "Я сделала уроки (ya sdiélala ouroki) : j'ai fini mes devoirs (c'est terminé !)",
        "Она станцевала вариацию (ana stantsevala variatsiïou) : elle a dansé sa variation (jusqu'au bout, en entier)",
        "⚠️ Le perfectif n'a pas de présent : seulement passé et futur",
      ],
      voixOff:
        "Le perfectif, lui, décrit une action unique et achevée. Ya sdiélala ouroki, j'ai fini mes devoirs : c'est terminé, avec un résultat ! Ana stantsevala variatsiïou, elle a dansé sa variation, jusqu'au bout, en entier. Attention, particularité importante : le perfectif n'a pas de présent, seulement un passé et un futur.",
    },
    {
      titre: "Reconnaître les paires aspectuelles",
      illustration: "🔍",
      visuel: "с- по- на- + verbe",
      contenu: [
        "Le perfectif se forme souvent en ajoutant un préfixe à l'imperfectif : делать → сделать, писать → написать, смотреть → посмотреть",
        "Parfois, le radical change complètement : говорить (imperf.) → сказать (perf., dire)",
        "Certains verbes se distinguent par un simple suffixe : танцевать (imperf.) → станцевать (perf.)",
        "Il faut apprendre chaque paire, comme un petit vocabulaire à part",
      ],
      voixOff:
        "Comment reconnaître une paire aspectuelle ? Le plus souvent, le perfectif ajoute un préfixe à l'imperfectif : diélat' devient sdiélat', pisat' devient napisat', smatriet' devient pasmatriet'. Parfois, le radical change complètement, comme gavarit', parler, et skazat', dire. Et parfois, c'est juste un préfixe court, comme tantsevat' et stantsevat'. Il faut apprendre chaque paire par cœur, comme un petit vocabulaire.",
    },
    {
      titre: "Le futur imperfectif : буду + infinitif",
      illustration: "🔮",
      visuel: "Я буду танцевать",
      contenu: [
        "Pour le futur imperfectif (une action qui durera ou se répétera), on utilise быть au futur (буду, будешь, будет…) + l'infinitif imperfectif.",
        "Я буду танцевать весь вечер (ya boudou tantsevat' vies' viétchir) : je danserai toute la soirée",
        "Завтра я буду учить роль (zaftra ya boudou outchit' rol') : demain, je travaillerai mon rôle (processus)",
      ],
      voixOff:
        "Pour parler au futur d'un processus qui va durer ou se répéter, on utilise боудou, le futur du verbe être, suivi de l'infinitif imperfectif. Ya boudou tantsevat' vies' viétchir, je danserai toute la soirée. Zaftra ya boudou outchit' rol', demain, je travaillerai mon rôle : c'est un processus, pas encore un résultat.",
    },
    {
      titre: "Le futur perfectif : une forme simple",
      illustration: "⚡",
      visuel: "Я станцую",
      contenu: [
        "Le perfectif se conjugue directement au « présent », mais son sens est toujours futur : c'est le futur perfectif.",
        "Я станцую вариацию (ya stantsouïou variatsiïou) : je danserai ma variation (jusqu'au bout, une action ponctuelle)",
        "Я выучу роль к пятнице (ya vyoutchou rol' k piatnitsié) : j'aurai appris mon rôle pour vendredi (résultat atteint)",
        "Pas de буду avec le perfectif !",
      ],
      voixOff:
        "Le perfectif, lui, n'a pas besoin de боудou : il se conjugue comme un présent, mais son sens est toujours futur. Ya stantsouïou variatsiïou, je danserai ma variation, jusqu'au bout. Ya vyoutchou rol' k piatnitsié, j'aurai appris mon rôle pour vendredi : un résultat, atteint à un moment précis. Ne mets jamais боудou devant un verbe perfectif !",
    },
    {
      titre: "Choisir le bon aspect au passé",
      illustration: "⚖️",
      visuel: "танцевала vs станцевала",
      contenu: [
        "Я танцевала весь день (imperfectif) : j'ai dansé toute la journée — on insiste sur la durée, le processus",
        "Я станцевала вариацию (perfectif) : j'ai dansé ma variation — on insiste sur le résultat, l'achèvement",
        "Question à se poser : est-ce que je décris un processus ou une habitude (imperfectif), ou un résultat unique (perfectif) ?",
      ],
      voixOff:
        "Au passé, comment choisir ? Ya tantsevala vies' dién', j'ai dansé toute la journée : imperfectif, on insiste sur la durée. Ya stantsevala variatsiïou, j'ai dansé ma variation : perfectif, on insiste sur le résultat, l'action complète. Pose-toi toujours la question : est-ce que je décris un processus, ou un résultat achevé ?",
    },
    {
      titre: "Focus danse-études : préparer une audition",
      illustration: "🩰",
      visuel: "учить → выучить",
      contenu: [
        "Я учу вариацию (imperf., processus) : j'apprends ma variation — Я выучила вариацию (perf., résultat) : j'ai fini d'apprendre ma variation",
        "Я буду репетировать всю неделю (ya boudou riepietiravat' fsiou niediélou) : je répéterai toute la semaine (futur imperfectif)",
        "Я станцую свою вариацию на прослушивании (ya stantsouïou svaïou variatsiïou na proslouchivanii) : je danserai ma variation à l'audition (futur perfectif)",
      ],
      voixOff:
        "Mettons l'aspect au service de la préparation d'une audition. Ya outchou variatsiïou, j'apprends ma variation, en cours. Ya vyoutchila variatsiïou, j'ai fini de l'apprendre, résultat atteint. Ya boudou riepietiravat' fsiou niediélou, je répéterai toute la semaine : un processus futur. Ya stantsouïou svaïou variatsiïou na proslouchivanii, je danserai ma variation à l'audition : un événement futur unique et complet.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 processus vs résultat",
      contenu: [
        "Imperfectif : processus, habitude, durée — passé/présent/futur (avec буду)",
        "Perfectif : action unique, résultat — seulement passé et futur (sans буду)",
        "Paires courantes : делать/сделать, писать/написать, говорить/сказать, танцевать/станцевать, учить/выучить",
        "Danse-études : Я учу вариацию (en cours) → Я выучила вариацию (terminé !)",
      ],
      voixOff:
        "Résumons. L'imperfectif décrit un processus, une habitude, une durée, et existe aux trois temps, avec боудou au futur. Le perfectif décrit une action unique et son résultat, et n'existe qu'au passé et au futur, sans боудou. Retiens bien les paires : diélat'/sdiélat', pisat'/napisat', gavarit'/skazat', tantsevat'/stantsevat', outchit'/vyoutchit'. Et la phrase clé : ya outchou variatsiïou, en cours, puis ya vyoutchila variatsiïou, terminé !",
    },
  ],
  fiche: {
    intro:
      "L'aspect verbal est une notion centrale du russe : presque chaque verbe existe en deux versions, imperfective pour un processus, une habitude ou une durée, et perfective pour une action unique achevée avec un résultat.",
    sections: [
      {
        titre: "Imperfectif vs perfectif : le sens",
        points: [
          "Imperfectif (несовершенный вид) : processus, habitude, durée, sans résultat précisé",
          "Perfectif (совершенный вид) : action unique, achevée, avec un résultat",
          "Я танцевала весь день (imperf.) vs Я станцевала вариацию (perf.)",
        ],
      },
      {
        titre: "Former une paire aspectuelle",
        points: [
          "Préfixe : делать → сделать, писать → написать, смотреть → посмотреть",
          "Radical différent : говорить → сказать",
          "Suffixe/préfixe court : танцевать → станцевать, учить → выучить",
        ],
      },
      {
        titre: "Le futur : deux constructions",
        points: [
          "Futur imperfectif : буду + infinitif imperfectif — Я буду танцевать (processus futur)",
          "Futur perfectif : le perfectif se conjugue au « présent » avec un sens futur — Я станцую (résultat futur)",
          "⚠️ Jamais буду devant un verbe perfectif",
        ],
      },
      {
        titre: "Aspect et danse-études",
        points: [
          "Я учу вариацию (imperf., en cours) → Я выучила вариацию (perf., terminé)",
          "Я буду репетировать всю неделю : futur imperfectif, processus",
          "Я станцую свою вариацию на прослушивании : futur perfectif, événement unique",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'aspect verbal, perfectif et imperfectif. Presque chaque verbe russe existe en deux versions. L'aspect imperfectif décrit un processus, une habitude ou une durée, sans préciser de résultat, et existe aux trois temps. L'aspect perfectif décrit une action unique, achevée, avec un résultat concret, et n'existe qu'au passé et au futur. Les paires se forment le plus souvent avec un préfixe, comme diélat' et sdiélat', parfois avec un radical complètement différent, comme gavarit' et skazat', ou avec un préfixe court, comme tantsevat' et stantsevat'. Au futur, l'imperfectif utilise boudou suivi de l'infinitif, comme ya boudou tantsevat', tandis que le perfectif se conjugue directement, avec un sens futur, comme ya stantsouïou. En danse-études, on distingue ya outchou variatsiïou, j'apprends ma variation, d'ya vyoutchila variatsiïou, j'ai fini de l'apprendre.",
  },
  memoCards: [
    { recto: "Aspect imperfectif (несовершенный вид)", verso: "Processus, habitude, durée ; existe au passé, présent et futur (avec буду)." },
    { recto: "Aspect perfectif (совершенный вид)", verso: "Action unique, résultat ; existe seulement au passé et au futur (sans буду)." },
    { recto: "делать / сделать", verso: "Faire (en train de faire) / faire (fini, avec résultat)." },
    { recto: "танцевать / станцевать", verso: "Danser (habituellement, en cours) / danser (une pièce entière, jusqu'au bout)." },
    { recto: "учить / выучить", verso: "Apprendre (en cours) / avoir fini d'apprendre. Ex : Я выучила вариацию." },
    { recto: "Futur imperfectif : буду + infinitif", verso: "Ex : Я буду танцевать весь вечер = je danserai toute la soirée (processus)." },
    { recto: "Futur perfectif", verso: "La forme « présente » du perfectif a un sens futur. Ex : Я станцую = je danserai (jusqu'au bout)." },
    { recto: "говорить / сказать", verso: "Parler, dire (en train de) / dire (une fois, avec résultat) — paire à radical différent." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'aspect imperfectif décrit :",
      choix: ["une action unique et achevée", "un processus, une habitude", "seulement le futur", "seulement le passé"],
      bonneReponse: 1,
      explication: "L'imperfectif décrit un processus, une habitude ou une durée, sans insister sur le résultat.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le perfectif de делать ?",
      choix: ["делать", "сделать", "делал", "делаю"],
      bonneReponse: 1,
      explication: "делать (imperf.) forme son perfectif avec le préfixe с- : сделать.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : Я танцую каждый день.",
      reponse: "Je danse tous les jours.",
      explication: "танцую (imperfectif, présent) exprime une habitude.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le perfectif existe :",
      choix: ["aux trois temps", "seulement au présent", "seulement au passé et au futur", "seulement au futur"],
      bonneReponse: 2,
      explication: "Le perfectif n'a pas de présent : uniquement passé et futur.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique la différence entre Я танцевала весь день et Я станцевала вариацию.",
      reponse: "Я танцевала весь день (imperfectif) insiste sur la durée, le processus ; Я станцевала вариацию (perfectif) insiste sur le résultat, l'action achevée en entier.",
      explication: "Même verbe, deux aspects : le contexte détermine lequel employer.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : Завтра я … весь вечер (demain, je danserai toute la soirée — processus).",
      choix: ["буду танцевать", "станцую", "танцевала", "буду станцевать"],
      bonneReponse: 0,
      explication: "Futur imperfectif : буду + infinitif imperfectif → буду танцевать.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en russe : « J'aurai appris mon rôle pour vendredi. »",
      reponse: "Я выучу роль к пятнице.",
      explication: "Futur perfectif : выучу (forme « présente » du perfectif выучить), sens futur avec résultat.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel est le perfectif de говорить ?",
      choix: ["поговорить", "сказать", "говорил", "говорю"],
      bonneReponse: 1,
      explication: "говорить/сказать forment une paire à radical complètement différent.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en russe : « J'apprends ma variation (en ce moment). »",
      reponse: "Я учу вариацию.",
      explication: "учу (imperfectif, présent) décrit le processus en cours.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Pourquoi ne peut-on pas dire « Я буду сделать » ?",
      choix: [
        "C'est possible et correct",
        "буду ne s'utilise jamais avec un verbe perfectif",
        "сделать n'existe pas",
        "буду s'utilise seulement au passé",
      ],
      bonneReponse: 1,
      explication: "Le perfectif ne se combine jamais avec буду : son futur se forme directement (я сделаю).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en russe : « Je répéterai toute la semaine, puis je danserai ma variation à l'audition. »",
      reponse: "Я буду репетировать всю неделю, потом я станцую свою вариацию на прослушивании.",
      explication: "буду репетировать (futur imperfectif, processus) ; станцую (futur perfectif, action unique).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en une phrase comment se forme le futur imperfectif et comment se forme le futur perfectif.",
      reponse: "Le futur imperfectif se forme avec буду (futur du verbe être) + infinitif imperfectif ; le futur perfectif se forme en conjuguant directement le verbe perfectif comme un présent, sans буду.",
      explication: "C'est la règle centrale à retenir pour parler du futur en russe.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le perfectif décrit :",
      choix: ["une habitude", "un processus", "une action unique et achevée", "seulement le présent"],
      bonneReponse: 2,
      explication: "Le perfectif insiste sur une action unique, avec un résultat.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : Я сделала уроки.",
      reponse: "J'ai fini mes devoirs.",
      explication: "сделала (perfectif, passé) insiste sur le résultat : c'est terminé.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel est le perfectif de учить ?",
      choix: ["учил", "выучить", "учиться", "учу"],
      bonneReponse: 1,
      explication: "учить/выучить : paire aspectuelle par préfixe вы-.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en russe : « Je danserai (futur, résultat, une pièce entière). »",
      reponse: "Я станцую.",
      explication: "Futur perfectif : forme directe, sans буду.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis : Я буду учить роль всю неделю, и в пятницу я выучу её.",
      reponse: "Je travaillerai mon rôle toute la semaine, et vendredi je l'aurai appris.",
      explication: "буду учить (futur imperfectif, processus) ; выучу (futur perfectif, résultat atteint).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'aspect verbal : perfectif et imperfectif",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'aspect verbal russe distingue :",
          choix: ["le masculin et le féminin", "le processus et le résultat", "le singulier et le pluriel", "le tutoiement et le vouvoiement"],
          bonneReponse: 1,
          explication: "L'aspect imperfectif décrit un processus, le perfectif un résultat.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : Она станцевала вариацию.",
          reponse: "Elle a dansé sa variation (jusqu'au bout, en entier).",
          explication: "станцевала (perfectif, passé) insiste sur l'achèvement complet.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quel est le perfectif de писать ?",
          choix: ["писал", "написать", "писать", "пишу"],
          bonneReponse: 1,
          explication: "писать/написать : paire aspectuelle par préfixe на-.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en russe : « Je regarderai le spectacle demain. » (une fois, résultat)",
          reponse: "Завтра я посмотрю спектакль.",
          explication: "Futur perfectif : посмотрю (forme directe de посмотреть, sans буду).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en russe : « Je répétais toute la journée, mais je n'ai pas fini d'apprendre ma variation. »",
          reponse: "Я репетировала весь день, но я не выучила вариацию.",
          explication: "репетировала (imperfectif, processus/durée) ; не выучила (perfectif négatif, résultat non atteint).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Écris deux phrases pour préparer une audition : l'une au futur imperfectif (répéter toute la semaine), l'autre au futur perfectif (danser la variation le jour J).",
          reponse: "Я буду репетировать всю неделю. Я станцую вариацию в день прослушивания.",
          explication: "буду репетировать (processus futur) ; станцую (résultat futur, action unique).",
        },
      ],
    },
    {
      titre: "Examen 2 — L'aspect verbal : perfectif et imperfectif",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est l'imperfectif de сказать ?",
          choix: ["сказал", "говорить", "скажу", "сказать"],
          bonneReponse: 1,
          explication: "говорить/сказать : paire aspectuelle à radical complètement différent.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : Я делала уроки два часа.",
          reponse: "J'ai fait mes devoirs pendant deux heures.",
          explication: "делала (imperfectif, passé) insiste sur la durée.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Comment forme-t-on le futur imperfectif ?",
          choix: ["préfixe + infinitif", "буду + infinitif imperfectif", "conjugaison directe au présent", "буду + infinitif perfectif"],
          bonneReponse: 1,
          explication: "Le futur imperfectif se forme avec буду (futur de быть) + infinitif imperfectif.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en russe : « Elle apprend son rôle (en ce moment). »",
          reponse: "Она учит роль.",
          explication: "учит (imperfectif, présent) décrit le processus en cours.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en russe : « Demain, je danserai ma variation à l'audition, et j'espère qu'elle plaira au jury. »",
          reponse: "Завтра я станцую свою вариацию на прослушивании, и я надеюсь, что она понравится жюри.",
          explication: "станцую (futur perfectif, événement unique) ; понравится (futur perfectif de нравиться).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare l'usage de танцевать et станцевать en donnant un exemple de phrase pour chacun.",
          reponse: "танцевать (imperfectif) : Я танцую каждый день (habitude). станцевать (perfectif) : Я станцевала вариацию (action unique, achevée, résultat).",
          explication: "Même racine, deux aspects, deux usages bien distincts.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'imperfectif décrit un processus, une habitude, une durée ; le perfectif décrit une action unique, achevée, avec un résultat.",
    "Le perfectif n'existe qu'au passé et au futur : il n'a pas de présent.",
    "Paires courantes : делать/сделать, писать/написать, говорить/сказать, танцевать/станцевать, учить/выучить.",
    "Futur imperfectif : буду + infinitif imperfectif — Я буду танцевать (processus futur).",
    "Futur perfectif : forme directe, sans буду — Я станцую (résultat futur, action unique).",
    "Erreur classique : ne jamais dire « буду + verbe perfectif » — le perfectif se conjugue seul au futur.",
  ],
};

export default chapitre;
