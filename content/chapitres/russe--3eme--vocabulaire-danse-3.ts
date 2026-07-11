import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "vocabulaire-danse-3",
  titre: "Danse-études — audition et scène en russe",
  matiere: "russe",
  niveau: "3eme",
  langueVoix: "ru-RU",
  description:
    "Le vocabulaire complet d'une audition et d'une représentation en russe : prослушивание, jury, trac, encouragements traditionnels et félicitations — en réemployant les cas et l'aspect verbal appris dans les chapitres précédents.",
  objectifs: [
    "Connaître le vocabulaire de l'audition : прослушивание, жюри, конкурс, номер",
    "Exprimer le trac et la préparation : волноваться, готовиться / подготовиться",
    "Nommer les éléments de la scène : занавес, свет, зал, поклон",
    "Encourager et féliciter en russe, y compris avec des expressions traditionnelles",
    "Réemployer génitif, datif et aspect verbal dans des dialogues d'audition et de représentation",
  ],
  slides: [
    {
      titre: "Le vocabulaire de l'audition",
      illustration: "🎭",
      visuel: "прослушивание • жюри",
      contenu: [
        "прослушивание (praslouchivanié) : l'audition",
        "жюри (jiouri) : le jury (mot invariable, il ne se décline pas)",
        "конкурс (konkours) : le concours",
        "номер (nomier) : le numéro, la pièce dansée",
      ],
      voixOff:
        "Aujourd'hui, direction l'audition. Praslouchivanié, l'audition. Jiouri, le jury : un mot emprunté au français qui, en russe, ne se décline jamais, quel que soit le cas. Konkours, le concours. Et nomier, le numéro, la pièce que tu vas présenter.",
    },
    {
      titre: "Se préparer avant l'audition",
      illustration: "😰",
      visuel: "волноваться • готовиться",
      contenu: [
        "волноваться (valnavatsa) : être nerveux, s'inquiéter — Я волнуюсь (ya valnouïous') : je suis nerveuse",
        "готовиться / подготовиться (gatovitsa / padgatovitsa) : se préparer (imperfectif / perfectif)",
        "Я готовлюсь к прослушиванию (ya gatovlious' k praslouchivaniïou) : je me prépare pour l'audition",
        "удача (oudatcha) : la chance, la réussite",
      ],
      voixOff:
        "Avant une audition, il y a forcément un peu de trac. Valnavatsa, être nerveux : ya valnouïous', je suis nerveuse. Gatovitsa, se préparer, à l'imperfectif, et son perfectif padgatovitsa, avoir fini de se préparer : tu reconnais l'aspect verbal ! Ya gatovlious' k praslouchivaniïou, je me prépare pour l'audition. Et oudatcha, la chance.",
    },
    {
      titre: "Sur scène",
      illustration: "🎬",
      visuel: "занавес • сцена",
      contenu: [
        "занавес (zanaviès) : le rideau",
        "свет (sviet) : la lumière, les projecteurs",
        "зал (zal) : la salle, le public",
        "поклон (paklon) : la révérence, le salut final",
      ],
      voixOff:
        "Une fois sur scène : zanaviès, le rideau. Sviet, la lumière, les projecteurs. Zal, ici, désigne la salle et le public, comme dans le studio. Et à la fin, paklon, la révérence, ce salut qu'on adresse au public.",
    },
    {
      titre: "Encourager et rassurer",
      illustration: "💪",
      visuel: "Удачи! Ты справишься!",
      contenu: [
        "Не волнуйся! (nié valnouïsia) : ne t'inquiète pas !",
        "Удачи! (oudatchi) : bonne chance !",
        "Ты справишься! (ty spravichsia) : tu vas y arriver !",
        "Ни пуха ни пера! (ni poukha ni piera) : expression traditionnelle russe pour souhaiter bonne chance (littéralement « ni plume ni poil »)",
      ],
      voixOff:
        "Pour encourager une amie avant son audition. Nié valnouïsia, ne t'inquiète pas ! Oudatchi, bonne chance ! Ty spravichsia, tu vas y arriver ! Et une expression traditionnelle typiquement russe, héritée des chasseurs : ni poukha ni piera, littéralement « ni plume ni poil », l'équivalent de notre « merde » pour souhaiter bonne chance avant une épreuve.",
    },
    {
      titre: "Après la représentation",
      illustration: "👏",
      visuel: "Аплодисменты!",
      contenu: [
        "аплодисменты (aplaïdismienty) : les applaudissements",
        "успех (ouspiekh) : le succès",
        "Поздравляю! (pazdravliaïou) : félicitations !",
        "Ты выступила отлично! (ty vystoupila atlitchna) : tu as super bien dansé (perfectif, résultat)",
      ],
      voixOff:
        "Après le passage sur scène. Aplaïdismienty, les applaudissements. Ouspiekh, le succès. Pazdravliaïou, félicitations ! Et le compliment ultime : ty vystoupila atlitchna, tu as super bien dansé — vystoupila est un verbe perfectif, il insiste sur le résultat de ta prestation, complète et réussie.",
    },
    {
      titre: "Grammaire en contexte : cas et aspect",
      illustration: "🧠",
      visuel: "без волнения • я выучила",
      contenu: [
        "Génitif : Без волнения! (biez valnienia) : sans stress ! — révision du génitif après une préposition",
        "Datif : Жюри понравился номер (jiouri panravilsia nomier) : le numéro a plu au jury — жюри reste invariable, mais la construction est au datif",
        "Aspect : Я выучила вариацию (perf.) : j'ai fini d'apprendre ma variation — Я репетировала весь месяц (imperf.) : j'ai répété tout le mois",
        "Ces trois notions se combinent dans une vraie conversation de danseuse !",
      ],
      voixOff:
        "Ce chapitre réunit tout ce que tu as appris. Biez valnienia, sans stress : без exige le génitif, valnienia. Jiouri panravilsia nomier, le numéro a plu au jury : jiouri, invariable, joue ici le rôle du datif, comme mnié dans mnié nravitsa. Et l'aspect : ya vyoutchila variatsiïou, résultat, vs ya riepietiravala vies' miessiats, processus. Trois notions, une seule vraie conversation !",
    },
    {
      titre: "Dialogue : avant l'audition",
      illustration: "💬",
      visuel: "— Ты волнуешься? — Немного!",
      contenu: [
        "— Ты волнуешься? (ty valnouïéchsia) : tu es nerveuse ?",
        "— Немного, но я готова! (niemnoga, no ya gatova) : un peu, mais je suis prête !",
        "— Удачи! Ни пуха ни пера! (oudatchi, ni poukha ni piera) : bonne chance !",
        "— К чёрту! (k tchiortou) : réponse traditionnelle (littéralement « au diable ! », équivalent de « merci » en retour)",
      ],
      voixOff:
        "Petit dialogue avant l'entrée en scène. Ty valnouïéchsia ? Tu es nerveuse ? Niemnoga, no ya gatova, un peu, mais je suis prête ! Oudatchi, ni poukha ni piera, bonne chance ! Et la tradition veut qu'on réponde k tchiortou, au diable, jamais spassiba, pour ne pas porter la poisse !",
    },
    {
      titre: "Dialogue : après le spectacle",
      illustration: "🌟",
      visuel: "— Поздравляю! — Спасибо!",
      contenu: [
        "— Поздравляю! Ты выступила отлично! (pazdravliaïou, ty vystoupila atlitchna) : félicitations, tu as super bien dansé !",
        "— Спасибо! Я так волновалась! (spassiba, ya tak valnavalas') : merci, j'étais tellement nerveuse !",
        "— Жюри понравился твой номер (jiouri panravilsia tvoï nomier) : le jury a aimé ton numéro",
        "— Аплодисменты были невероятными! (aplaïdismienty byli nievieraïatnymi) : les applaudissements étaient incroyables !",
      ],
      voixOff:
        "Et après la représentation, cette fois, on peut dire spassiba ! Pazdravliaïou, ty vystoupila atlitchna, félicitations, tu as super bien dansé ! Spassiba, ya tak valnavalas', merci, j'étais tellement nerveuse ! Jiouri panravilsia tvoï nomier, le jury a aimé ton numéro. Aplaïdismienty byli nievieraïatnymi, les applaudissements étaient incroyables !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Удачи! Поздравляю!",
      contenu: [
        "Audition : прослушивание, жюри, конкурс, номер",
        "Se préparer : волноваться, готовиться / подготовиться, удача",
        "Sur scène : занавес, свет, зал, поклон, аплодисменты",
        "Encouragements et félicitations : Удачи! Ни пуха ни пера! Поздравляю! Ты выступила отлично!",
      ],
      voixOff:
        "Résumons ce chapitre, et ce niveau ! L'audition : praslouchivanié, jiouri, konkours, nomier. Se préparer : valnavatsa, gatovitsa/padgatovitsa, oudatcha. Sur scène : zanaviès, sviet, zal, paklon, aplaïdismienty. Et les phrases à connaître par cœur : oudatchi, ni poukha ni piera avant l'épreuve, pazdravliaïou et ty vystoupila atlitchna après. Bonne chance pour ta prochaine audition, en russe comme en français !",
    },
  ],
  fiche: {
    intro:
      "Ce dernier chapitre de danse-études réunit le vocabulaire de l'audition et de la scène, tout en réemployant le génitif, le datif et l'aspect verbal appris dans les chapitres précédents, à travers deux dialogues avant et après une représentation.",
    sections: [
      {
        titre: "L'audition",
        points: [
          "прослушивание (l'audition), жюри (le jury, invariable), конкурс (le concours), номер (le numéro dansé)",
        ],
      },
      {
        titre: "Se préparer et gérer le trac",
        points: [
          "волноваться (être nerveux) — Я волнуюсь : je suis nerveuse",
          "готовиться / подготовиться (se préparer, imperf./perf.) — Я готовлюсь к прослушиванию",
          "удача (la chance) ; Удачи! Ни пуха ни пера! (bonne chance, expression traditionnelle)",
        ],
      },
      {
        titre: "Sur scène et après",
        points: [
          "занавес (le rideau), свет (la lumière), зал (la salle/le public), поклон (la révérence)",
          "аплодисменты (les applaudissements), успех (le succès), Поздравляю! (félicitations !)",
        ],
      },
      {
        titre: "Grammaire en contexte",
        points: [
          "Без волнения! : génitif après без",
          "Жюри понравился номер : construction datif avec нравиться",
          "Я выучила вариацию (perf., résultat) vs Я репетировала весь месяц (imperf., processus)",
        ],
      },
    ],
    audio:
      "Fiche de révision : le vocabulaire de l'audition et de la scène. Praslouchivanié, l'audition ; jiouri, le jury, un mot invariable ; konkours, le concours ; nomier, le numéro dansé. Pour parler du trac : valnavatsa, être nerveux, et gatovitsa, se préparer, avec son perfectif padgatovitsa. On souhaite bonne chance avec oudatchi, ou l'expression traditionnelle ni poukha ni piera, à laquelle on répond k tchiortou, jamais spassiba, pour ne pas porter la poisse. Sur scène : zanaviès, le rideau, sviet, la lumière, zal, le public, et paklon, la révérence. Après la représentation, on peut enfin dire spassiba, et on entend aplaïdismienty, les applaudissements, ouspiekh, le succès, et pazdravliaïou, félicitations. Ce chapitre réemploie aussi le génitif après без, le datif dans la construction de нравиться avec jiouri, et l'aspect verbal entre ya vyoutchila, résultat, et ya riepietiravala, processus.",
  },
  memoCards: [
    { recto: "прослушивание (praslouchivanié)", verso: "L'audition." },
    { recto: "жюри (jiouri)", verso: "Le jury (mot invariable, il ne se décline jamais dans aucun cas)." },
    { recto: "волноваться (valnavatsa)", verso: "Être nerveux, s'inquiéter. Я волнуюсь = je suis nerveuse." },
    { recto: "готовиться / подготовиться", verso: "Se préparer (imperfectif / perfectif). Я готовлюсь к прослушиванию." },
    { recto: "Удачи! Ни пуха ни пера!", verso: "Bonne chance ! (la deuxième est une expression traditionnelle russe, réponse : К чёрту!)" },
    { recto: "занавес / поклон", verso: "Le rideau / la révérence." },
    { recto: "аплодисменты (aplaïdismienty)", verso: "Les applaudissements." },
    { recto: "Поздравляю! (pazdravliaïou)", verso: "Félicitations !" },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie прослушивание ?",
      choix: ["Le spectacle", "L'audition", "Le concours de musique", "La répétition"],
      bonneReponse: 1,
      explication: "прослушивание (praslouchivanié) = l'audition.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se décline жюри selon les cas ?",
      choix: ["Comme un nom féminin", "Comme un nom masculin", "Il ne se décline jamais", "Seulement au pluriel"],
      bonneReponse: 2,
      explication: "жюри est un mot emprunté invariable : il garde la même forme dans tous les cas.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis en français : Я волнуюсь.",
      reponse: "Je suis nerveuse (je m'inquiète).",
      explication: "волноваться, 1re personne du singulier au présent : волнуюсь.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie Поздравляю! ?",
      choix: ["Bonne chance !", "Félicitations !", "Ne t'inquiète pas !", "À bientôt !"],
      bonneReponse: 1,
      explication: "Поздравляю! (pazdravliaïou) = félicitations !",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en russe : « Je me prépare pour l'audition. »",
      reponse: "Я готовлюсь к прослушиванию.",
      explication: "готовиться (imperfectif, processus) + к + datif (прослушиванию).",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel est le perfectif de готовиться ?",
      choix: ["готовился", "подготовиться", "готовлюсь", "готовить"],
      bonneReponse: 1,
      explication: "готовиться (imperf.) / подготовиться (perf.) : paire aspectuelle par préfixe под-.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en français : Аплодисменты были невероятными!",
      reponse: "Les applaudissements étaient incroyables !",
      explication: "аплодисменты (pluriel) ; невероятными est l'adjectif accordé au pluriel après были.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que répond-on traditionnellement à « Ни пуха ни пера! » ?",
      choix: ["Спасибо!", "К чёрту!", "Пожалуйста!", "Привет!"],
      bonneReponse: 1,
      explication: "On répond « К чёрту! » (au diable !), jamais « merci », pour ne pas porter malheur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en russe : « Le jury a aimé mon numéro. »",
      reponse: "Жюри понравился мой номер.",
      explication: "Construction datif de нравиться : жюри (invariable, rôle du datif) + понравился (accordé avec номер, masculin, sujet).",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans Я выучила вариацию, quel aspect est выучила et pourquoi ?",
      choix: [
        "Imperfectif, car c'est une habitude",
        "Perfectif, car l'action est achevée avec un résultat",
        "Ni l'un ni l'autre",
        "Imperfectif, car c'est au passé",
      ],
      bonneReponse: 1,
      explication: "выучить est le perfectif de учить : l'apprentissage est terminé, avec un résultat.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis en russe : « Sans stress, tu vas y arriver ! »",
      reponse: "Без волнения, ты справишься!",
      explication: "без exige le génitif : волнения, génitif de волнение.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris un mini-dialogue de trois répliques : demande si ton amie est nerveuse, elle répond qu'elle est prête, tu lui souhaites bonne chance avec l'expression traditionnelle.",
      reponse: "— Ты волнуешься? — Немного, но я готова! — Ни пуха ни пера!",
      explication: "Réemploie le vocabulaire du trac et l'expression traditionnelle du chapitre.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que signifie конкурс ?",
      choix: ["Le rideau", "Le concours", "L'applaudissement", "La révérence"],
      bonneReponse: 1,
      explication: "конкурс (konkours) = le concours.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : Удачи!",
      reponse: "Bonne chance !",
      explication: "Удачи! (oudatchi) est la formule courante pour souhaiter bonne chance.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "готовиться est de quel aspect ?",
      choix: ["Perfectif", "Imperfectif", "Ni l'un ni l'autre", "Les deux à la fois"],
      bonneReponse: 1,
      explication: "готовиться est imperfectif (processus) ; подготовиться est son perfectif.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis en russe : « Le rideau, la lumière, la révérence. »",
      reponse: "Занавес, свет, поклон.",
      explication: "Trois mots du vocabulaire de la scène vus dans ce chapitre.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Traduis : Я так волновалась, но жюри понравился мой номер!",
      reponse: "J'étais tellement nerveuse, mais le jury a aimé mon numéro !",
      explication: "волновалась (imperfectif, passé, processus vécu) ; понравился (construction datif de нравиться).",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Danse-études : audition et scène",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie номер, en danse ?",
          choix: ["Le rideau", "Le numéro, la pièce dansée", "Le costume", "Le public"],
          bonneReponse: 1,
          explication: "номер (nomier) = le numéro, la pièce présentée sur scène.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : Ты справишься!",
          reponse: "Tu vas y arriver !",
          explication: "Une formule d'encouragement avant une épreuve.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Complète : Без … , ты справишься! (sans stress).",
          choix: ["волнение", "волнения", "волнению", "волнением"],
          bonneReponse: 1,
          explication: "без exige le génitif : волнение → волнения.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en russe : « Je me suis préparée toute la semaine. » (résultat, action achevée)",
          reponse: "Я подготовилась всю неделю.",
          explication: "подготовилась, perfectif passé, insiste sur l'achèvement de la préparation.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en russe : « Ne t'inquiète pas, tu as fini d'apprendre ta variation, le jury va aimer ton numéro. »",
          reponse: "Не волнуйся, ты выучила вариацию, жюри понравится твой номер.",
          explication: "выучила (perfectif, résultat) ; понравится (futur perfectif de нравиться, construction datif avec жюри).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Écris un dialogue de quatre répliques après une représentation : compliment, remerciement avec émotion exprimée, mention du jury, mention des applaudissements.",
          reponse: "— Поздравляю! Ты выступила отлично! — Спасибо! Я так волновалась! — Жюри понравился твой номер. — Аплодисменты были невероятными!",
          explication: "Reprend l'intégralité du dialogue-type après le spectacle vu dans ce chapitre.",
        },
      ],
    },
    {
      titre: "Examen 2 — Danse-études : audition et scène",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Que signifie аплодисменты ?",
          choix: ["Le succès", "Les applaudissements", "La révérence", "Le trac"],
          bonneReponse: 1,
          explication: "аплодисменты (aplaïdismienty) = les applaudissements.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Traduis en français : Я готовлюсь к конкурсу.",
          reponse: "Je me prépare pour le concours.",
          explication: "готовлюсь (imperfectif, processus) + к + datif (конкурсу).",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle expression traditionnelle russe souhaite bonne chance avant une épreuve ?",
          choix: ["Спасибо большое!", "Ни пуха ни пера!", "До свидания!", "С днём рождения!"],
          bonneReponse: 1,
          explication: "Ни пуха ни пера! est l'expression traditionnelle, à laquelle on répond К чёрту!",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis en russe : « Le public applaudit, la révérence est magnifique. »",
          reponse: "Зал аплодирует, поклон прекрасен.",
          explication: "зал (le public) ; поклон (la révérence) ; прекрасен, forme courte de прекрасный.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Traduis en russe : « J'ai répété toute la semaine, et aujourd'hui, sans stress, je vais danser ma variation au concours. »",
          reponse: "Я репетировала всю неделю, и сегодня, без волнения, я станцую свою вариацию на конкурсе.",
          explication: "репетировала (imperfectif, durée) ; без волнения (génitif) ; станцую (futur perfectif) ; на конкурсе (lieu, prépositionnel).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige un court paragraphe (deux à trois phrases russes) racontant une audition réussie, en utilisant au moins un mot de vocabulaire de la scène, un cas (génitif ou datif) et l'aspect perfectif.",
          reponse: "Я волновалась перед прослушиванием, но я выучила вариацию. Жюри понравился мой номер, и я услышала аплодисменты зала!",
          explication: "Combine волновалась (imperf.), выучила (perf.), жюри понравился (datif), зала (génitif après аплодисменты).",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vocabulaire de l'audition : прослушивание, жюри (invariable !), конкурс, номер.",
    "Se préparer : волноваться (être nerveux), готовиться/подготовиться (imperf./perf.), удача.",
    "Sur scène : занавес, свет, зал, поклон, аплодисменты.",
    "Encouragements : Удачи! Ни пуха ни пера! (réponse : К чёрту!, jamais спасибо avant l'épreuve).",
    "Après le spectacle : Поздравляю! Ты выступила отлично! — on peut alors dire спасибо.",
    "Ce chapitre réemploie génitif (без волнения), datif (жюри понравился номер) et aspect verbal (выучила vs репетировала).",
  ],
};

export default chapitre;
