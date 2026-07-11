import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "subjonctif-concordance",
  titre: "Le subjonctif et la concordance des temps",
  matiere: "francais",
  niveau: "3eme",
  description:
    "Maîtriser le mode subjonctif (présent et passé), savoir quand l'employer, et comprendre la concordance des temps entre proposition principale et proposition subordonnée, à l'oral comme à l'écrit du brevet.",
  objectifs: [
    "Conjuguer le subjonctif présent et le subjonctif passé",
    "Reconnaître les emplois du subjonctif (souhait, doute, obligation, sentiment)",
    "Distinguer indicatif et subjonctif dans une subordonnée",
    "Appliquer les règles de la concordance des temps",
    "Réussir les exercices de conjugaison et de réécriture du brevet",
  ],
  slides: [
    {
      titre: "Qu'est-ce que le subjonctif ?",
      illustration: "🎭",
      visuel: "Il faut que je... / Je veux que tu...",
      contenu: [
        "Mode verbal qui exprime le doute, le souhait, la volonté, le sentiment",
        "S'emploie presque toujours dans une proposition subordonnée",
        "Introduit par « que » : il faut que, je veux que, je doute que",
        "S'oppose à l'indicatif, mode du réel et du certain",
      ],
      voixOff:
        "Le subjonctif est un mode verbal qui exprime le doute, le souhait, la volonté ou un sentiment, et non un fait certain. Il s'emploie presque toujours dans une proposition subordonnée introduite par que : il faut que, je veux que, je doute que. Il s'oppose ainsi à l'indicatif, le mode du réel, du certain et des faits objectifs.",
    },
    {
      titre: "Le subjonctif présent : formation",
      illustration: "📐",
      visuel: "je parl-e, tu parl-es, il parl-e...",
      contenu: [
        "Radical de la 3e personne du pluriel de l'indicatif présent (ils parlent → parl-)",
        "Terminaisons : -e, -es, -e, -ions, -iez, -ent",
        "Nous et vous : mêmes formes qu'à l'imparfait de l'indicatif",
        "Verbes irréguliers à connaître : être, avoir, aller, faire, pouvoir, savoir, vouloir",
      ],
      voixOff:
        "Pour former le subjonctif présent d'un verbe régulier, on part du radical de la troisième personne du pluriel de l'indicatif présent : ils parlent donne parl. On ajoute les terminaisons -e, -es, -e, -ions, -iez, -ent : que je parle, que tu parles, qu'il parle. Attention, aux personnes nous et vous, les formes ressemblent à celles de l'imparfait de l'indicatif. Certains verbes sont irréguliers et doivent être appris par cœur : être, avoir, aller, faire, pouvoir, savoir, vouloir.",
    },
    {
      titre: "Verbes irréguliers courants",
      illustration: "⭐",
      visuel: "que je sois • que j'aie • que je fasse",
      contenu: [
        "Être : que je sois, que tu sois, qu'il soit, que nous soyons, qu'ils soient",
        "Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, qu'ils aient",
        "Faire : que je fasse, que nous fassions",
        "Aller : que j'aille, que nous allions ; Pouvoir : que je puisse ; Savoir : que je sache",
      ],
      voixOff:
        "Voici les verbes irréguliers les plus importants à connaître par cœur. Être : que je sois, que tu sois, qu'il soit, que nous soyons, qu'ils soient. Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, qu'ils aient. Faire donne que je fasse, que nous fassions. Aller donne que j'aille, que nous allions. Pouvoir donne que je puisse, et savoir donne que je sache. Ces verbes reviennent très souvent, il faut les maîtriser parfaitement.",
    },
    {
      titre: "Quand emploie-t-on le subjonctif ?",
      illustration: "💭",
      visuel: "Volonté • Doute • Sentiment • Obligation",
      contenu: [
        "Après un verbe de volonté ou de souhait : je veux que, je souhaite que",
        "Après un verbe de doute ou d'incertitude : je doute que, il est possible que",
        "Après un verbe de sentiment : je crains que, je suis content que",
        "Après une expression d'obligation ou de nécessité : il faut que, il est nécessaire que",
      ],
      voixOff:
        "Le subjonctif s'emploie dans des contextes précis. Après un verbe de volonté ou de souhait : je veux que tu viennes, je souhaite qu'il réussisse. Après un verbe de doute ou d'incertitude : je doute qu'il vienne, il est possible qu'il pleuve. Après un verbe de sentiment : je crains qu'il ne soit en retard, je suis content que tu sois là. Et après une expression d'obligation : il faut que tu partes, il est nécessaire que nous agissions.",
    },
    {
      titre: "Subjonctif ou indicatif ?",
      illustration: "⚖️",
      visuel: "Je pense qu'il vient (indicatif) / Je doute qu'il vienne (subjonctif)",
      contenu: [
        "Verbes d'opinion à la forme affirmative : indicatif (je pense que, je crois que)",
        "Mêmes verbes à la forme négative ou interrogative : souvent subjonctif",
        "Verbes de certitude : indicatif (il est certain que, il est évident que)",
        "Verbes de possibilité ou de doute : subjonctif (il est possible que, il semble que)",
      ],
      voixOff:
        "Comment choisir entre indicatif et subjonctif ? Les verbes d'opinion à la forme affirmative, comme je pense que ou je crois que, sont suivis de l'indicatif car ils expriment une certitude. Mais à la forme négative ou interrogative, je ne pense pas que, crois-tu que, on emploie souvent le subjonctif car le doute apparaît. Les expressions de certitude, il est certain que, il est évident que, gardent l'indicatif. Les expressions de possibilité ou de doute, il est possible que, il semble que, demandent le subjonctif.",
    },
    {
      titre: "Le subjonctif passé",
      illustration: "⏮️",
      visuel: "que j'aie parlé / que je sois parti",
      contenu: [
        "Auxiliaire être ou avoir au subjonctif présent + participe passé",
        "Exprime une action antérieure à celle de la principale",
        "Ex. : Je suis content qu'il ait réussi son examen (avant le moment présent)",
        "Accord du participe passé : mêmes règles qu'au passé composé",
      ],
      voixOff:
        "Le subjonctif passé se forme avec l'auxiliaire être ou avoir au subjonctif présent, suivi du participe passé du verbe. Il exprime une action antérieure à celle exprimée dans la proposition principale. Par exemple : je suis content qu'il ait réussi son examen ; la réussite a eu lieu avant le moment où je m'exprime. L'accord du participe passé suit les mêmes règles qu'au passé composé.",
    },
    {
      titre: "La concordance des temps",
      illustration: "🔗",
      visuel: "Principale → Subordonnée",
      contenu: [
        "Le temps de la subordonnée dépend du temps de la principale",
        "Principale au présent/futur → subordonnée au présent ou au passé selon le sens",
        "Principale au passé → l'imparfait remplace souvent le présent dans la subordonnée",
        "À l'oral et en 3e, le subjonctif imparfait est remplacé par le subjonctif présent",
      ],
      voixOff:
        "La concordance des temps règle le rapport entre le temps de la proposition principale et celui de la subordonnée. Si la principale est au présent ou au futur, la subordonnée peut être au présent, si l'action est simultanée, ou au passé, si elle est antérieure. Si la principale est au passé, comme dans il fallait que, l'imparfait remplace souvent le présent dans la subordonnée : il fallait qu'il parte. Aujourd'hui, à l'oral comme à l'écrit courant, le subjonctif imparfait littéraire est remplacé par le subjonctif présent, qui reste correct.",
    },
    {
      titre: "Les pièges classiques",
      illustration: "⚠️",
      visuel: "après que + indicatif / avant que + subjonctif",
      contenu: [
        "« Après que » se construit avec l'indicatif (fait réalisé) : après qu'il est parti",
        "« Avant que » se construit avec le subjonctif : avant qu'il ne parte",
        "Ne pas confondre le subjonctif avec l'indicatif à l'oral (finales muettes)",
        "« Bien que », « quoique », « pour que », « afin que » : toujours suivis du subjonctif",
      ],
      voixOff:
        "Attention à quelques pièges classiques. Après que se construit avec l'indicatif, car il introduit un fait réalisé : après qu'il est parti. Avant que, au contraire, se construit avec le subjonctif : avant qu'il ne parte. À l'oral, il ne faut pas confondre les terminaisons du subjonctif et de l'indicatif, souvent muettes et donc proches à l'oreille. Enfin, certaines conjonctions sont toujours suivies du subjonctif : bien que, quoique, pour que, afin que.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Subjonctif : mode du doute, du souhait, du sentiment, de l'obligation",
        "Formation : radical de « ils » à l'indicatif présent + terminaisons -e, -es, -e, -ions, -iez, -ent",
        "Verbes irréguliers à apprendre : être, avoir, aller, faire, pouvoir, savoir, vouloir",
        "Concordance des temps : le temps de la subordonnée dépend de celui de la principale",
      ],
      voixOff:
        "Résumons. Le subjonctif est le mode du doute, du souhait, du sentiment et de l'obligation. Il se forme, pour les verbes réguliers, à partir du radical de la troisième personne du pluriel de l'indicatif présent, avec les terminaisons -e, -es, -e, -ions, -iez, -ent. Apprends par cœur les verbes irréguliers : être, avoir, aller, faire, pouvoir, savoir, vouloir. Enfin, retiens la règle de la concordance des temps : le temps de la subordonnée dépend toujours du temps de la principale. Tu es prêt pour le brevet !",
    },
  ],
  fiche: {
    intro:
      "Le subjonctif est un mode verbal essentiel pour exprimer le doute, le souhait, le sentiment ou l'obligation. La concordance des temps règle le rapport entre le temps de la principale et celui de la subordonnée. Ce chapitre de grammaire est indispensable pour les exercices de conjugaison et de réécriture du brevet.",
    sections: [
      {
        titre: "Formation du subjonctif présent",
        points: [
          "Radical de la 3e personne du pluriel de l'indicatif présent (ils parlent → parl-)",
          "Terminaisons : -e, -es, -e, -ions, -iez, -ent",
          "Verbes irréguliers à connaître : être, avoir, aller, faire, pouvoir, savoir, vouloir",
          "Ex. : que je finisse, que nous finissions (finir) ; que je sois, que nous soyons (être)",
        ],
      },
      {
        titre: "Emplois du subjonctif",
        points: [
          "Après un verbe de volonté ou de souhait : je veux que, je souhaite que",
          "Après un verbe de doute : je doute que, il est possible que",
          "Après un verbe de sentiment : je crains que, je suis content que",
          "Après une expression d'obligation : il faut que, il est nécessaire que",
          "Après certaines conjonctions : bien que, quoique, pour que, afin que, avant que",
        ],
      },
      {
        titre: "Subjonctif passé",
        points: [
          "Auxiliaire être/avoir au subjonctif présent + participe passé",
          "Exprime une action antérieure à celle de la principale",
          "Ex. : je suis content qu'il ait réussi",
        ],
      },
      {
        titre: "La concordance des temps",
        points: [
          "Le temps de la subordonnée dépend du temps de la principale",
          "Principale au passé → l'imparfait remplace le présent dans la subordonnée à l'indicatif",
          "En usage courant, le subjonctif imparfait est remplacé par le subjonctif présent",
          "« Après que » + indicatif ; « avant que » + subjonctif",
        ],
      },
    ],
    audio:
      "Fiche de révision : le subjonctif et la concordance des temps. Le subjonctif est un mode verbal qui exprime le doute, le souhait, la volonté ou un sentiment, et s'emploie presque toujours après que. Pour le former au présent, on part du radical de la troisième personne du pluriel de l'indicatif présent, et on ajoute les terminaisons -e, -es, -e, -ions, -iez, -ent. Apprends par cœur les verbes irréguliers : être, avoir, aller, faire, pouvoir, savoir, vouloir. On emploie le subjonctif après un verbe de volonté, de doute, de sentiment, ou après une expression d'obligation comme il faut que. Le subjonctif passé se forme avec l'auxiliaire être ou avoir au subjonctif présent suivi du participe passé, et exprime une action antérieure. La concordance des temps règle le rapport entre le temps de la principale et celui de la subordonnée : au passé, l'imparfait de l'indicatif remplace souvent le présent. Attention : après que se construit avec l'indicatif, avant que avec le subjonctif.",
  },
  memoCards: [
    { recto: "Comment former le subjonctif présent d'un verbe régulier ?", verso: "Radical de « ils » à l'indicatif présent (ils parlent → parl-) + terminaisons -e, -es, -e, -ions, -iez, -ent." },
    { recto: "Conjugaison du subjonctif présent d'ÊTRE ?", verso: "Que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient." },
    { recto: "Conjugaison du subjonctif présent d'AVOIR ?", verso: "Que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient." },
    { recto: "Quand emploie-t-on le subjonctif ?", verso: "Après un verbe de volonté, de doute, de sentiment, ou une expression d'obligation (il faut que...)." },
    { recto: "Comment se forme le subjonctif passé ?", verso: "Auxiliaire être/avoir au subjonctif présent + participe passé. Il exprime une action antérieure." },
    { recto: "« Après que » se construit avec quel mode ?", verso: "L'indicatif, car il introduit un fait réalisé (après qu'il est parti)." },
    { recto: "« Avant que » se construit avec quel mode ?", verso: "Le subjonctif (avant qu'il ne parte)." },
    { recto: "Règle de la concordance des temps ?", verso: "Le temps de la subordonnée dépend du temps de la principale ; au passé, l'imparfait remplace souvent le présent." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle est la forme correcte du verbe « finir » au subjonctif présent, 3e personne du singulier ?",
      choix: ["qu'il finit", "qu'il finisse", "qu'il finira", "qu'il finissait"],
      bonneReponse: 1,
      explication: "Le radical « finiss- » (issu de « ils finissent ») + la terminaison « -e » donne « qu'il finisse ».",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Complète : « Il faut que tu ... à l'heure. »",
      choix: ["viens", "viendras", "viennes", "venais"],
      bonneReponse: 2,
      explication: "« Il faut que » exprime une obligation et impose le subjonctif présent : que tu viennes.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Conjugue le verbe « avoir » au subjonctif présent, à toutes les personnes.",
      reponse: "Que j'aie, que tu aies, qu'il/elle ait, que nous ayons, que vous ayez, qu'ils/elles aient.",
      explication: "Avoir est un verbe irrégulier au subjonctif présent, à apprendre par cœur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle phrase emploie correctement le subjonctif ?",
      choix: ["Je pense qu'il vienne demain.", "Je doute qu'il vienne demain.", "Je suis sûr qu'il vienne demain.", "Il est certain qu'il vienne demain."],
      bonneReponse: 1,
      explication: "« Je doute que » exprime l'incertitude et appelle le subjonctif ; les autres verbes expriment une certitude et demandent l'indicatif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Dans la phrase « Je ne pense pas qu'il ... raison », quelle forme convient ?",
      choix: ["a", "aura", "ait", "avait"],
      bonneReponse: 2,
      explication: "« Ne pas penser que », à la forme négative, introduit un doute et se construit avec le subjonctif : qu'il ait raison.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi on écrit « je crois qu'il viendra » à l'indicatif, mais « je doute qu'il vienne » au subjonctif.",
      reponse: "« Je crois que » exprime une certitude, une opinion affirmée avec confiance : on utilise donc l'indicatif, le mode du réel. « Je doute que » exprime au contraire une incertitude, un fait non confirmé : on utilise donc le subjonctif, le mode du possible et de l'incertain.",
      explication: "Le choix du mode dépend du degré de certitude exprimé par le verbe de la principale.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Mets au subjonctif passé : « Je suis heureux qu'il (réussir) son brevet. »",
      reponse: "Je suis heureux qu'il ait réussi son brevet.",
      explication: "Le subjonctif passé (auxiliaire avoir au subjonctif présent + participe passé) exprime une action antérieure à celle de la principale : la réussite a déjà eu lieu.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Réécris cette phrase en respectant la concordance des temps : « Il fallait qu'elle (partir) avant la nuit. »",
      reponse: "Il fallait qu'elle parte avant la nuit.",
      explication: "La principale est au passé (« il fallait »), mais en usage courant, on emploie le subjonctif présent dans la subordonnée plutôt que le subjonctif imparfait littéraire (« qu'elle partît »).",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Quelle phrase est correctement construite ?",
      choix: [
        "Après qu'il soit parti, elle a pleuré.",
        "Après qu'il est parti, elle a pleuré.",
        "Avant qu'il est parti, elle a pleuré.",
        "Avant qu'il part, elle a pleuré.",
      ],
      bonneReponse: 1,
      explication: "« Après que » se construit avec l'indicatif, car il introduit un fait réalisé et daté : « après qu'il est parti ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Corrige l'erreur dans cette phrase et explique-la : « Bien qu'il pleut, nous sommes sortis. »",
      reponse: "Il faut écrire : « Bien qu'il pleuve, nous sommes sortis. » La conjonction « bien que » exprime une concession et impose toujours le subjonctif, jamais l'indicatif.",
      explication: "« Bien que » et « quoique » sont des conjonctions systématiquement suivies du subjonctif, quel que soit le sens de la phrase.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence de sens entre ces deux phrases : « Je cherche un livre qui explique bien la grammaire » et « Je cherche un livre qui explique bien la grammaire » (l'une à l'indicatif, l'autre au subjonctif selon le verbe).",
      reponse: "Si le livre existe et est identifié avec certitude, on emploie l'indicatif : « Je cherche le livre qui explique bien la grammaire » (celui que je connais). Si le livre est hypothétique, incertain, on emploie le subjonctif : « Je cherche un livre qui explique bien la grammaire » peut suggérer qu'on ne sait pas s'il existe, d'où l'usage du subjonctif dans certains contextes de recherche incertaine.",
      explication: "Ce cas montre que le choix du mode dépend parfois du degré de certitude sur l'existence de ce qu'on décrit, pas seulement du verbe introducteur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige trois phrases employant chacune un emploi différent du subjonctif : volonté, doute, obligation.",
      reponse: "Volonté : « Je veux que tu réussisses ton examen. » Doute : « Je doute qu'il ait raison sur ce point. » Obligation : « Il faut que nous partions avant la nuit. »",
      explication: "On vérifie la bonne conjugaison du subjonctif présent ou passé et l'emploi correct de « que » dans chaque subordonnée.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le subjonctif est le mode :",
      choix: ["du fait certain", "du doute, du souhait, du sentiment", "du futur uniquement", "du récit historique"],
      bonneReponse: 1,
      explication: "Contrairement à l'indicatif, le subjonctif n'affirme pas un fait comme certain.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Donne la formation du subjonctif présent pour un verbe régulier.",
      reponse: "Radical de la 3e personne du pluriel de l'indicatif présent + terminaisons -e, -es, -e, -ions, -iez, -ent.",
      explication: "Exemple : ils chantent → que je chante, que nous chantions.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quand utilise-t-on « après que » et avec quel mode ?",
      reponse: "« Après que » introduit un fait réalisé, daté dans le temps ; il se construit avec l'indicatif.",
      explication: "C'est un piège fréquent : on confond souvent avec « avant que », qui prend le subjonctif.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Complète : « Bien qu'il ... fatigué, il a terminé le marathon. »",
      choix: ["est", "était", "soit", "sera"],
      bonneReponse: 2,
      explication: "« Bien que » impose toujours le subjonctif : bien qu'il soit fatigué.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique le principe de la concordance des temps entre la principale et la subordonnée.",
      reponse: "Le temps employé dans la subordonnée dépend du temps de la proposition principale : si la principale est au passé, la subordonnée s'accorde généralement au passé (souvent à l'imparfait pour l'indicatif) ; en usage courant, le subjonctif présent remplace le subjonctif imparfait littéraire.",
      explication: "Cette règle assure la cohérence temporelle de la phrase complexe.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le subjonctif et la concordance des temps",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle forme est correcte au subjonctif présent, verbe « aller », 1re personne du singulier ?",
          choix: ["que j'aille", "que je vais", "que j'irai", "que j'allais"],
          bonneReponse: 0,
          explication: "Aller est irrégulier au subjonctif présent : que j'aille, que nous allions.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Pourquoi emploie-t-on le subjonctif après « il faut que » ?",
          reponse: "Parce que « il faut que » exprime une obligation ou une nécessité, et non un fait certain constaté ; le subjonctif est le mode qui convient pour exprimer ce qui doit être, et non ce qui est.",
          explication: "L'obligation appartient au domaine du souhaité ou du nécessaire, pas du réel constaté.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase est correctement conjuguée ?",
          choix: [
            "Je suis content que tu es venu.",
            "Je suis content que tu sois venu.",
            "Je suis content que tu viens.",
            "Je suis content que tu viendras.",
          ],
          bonneReponse: 1,
          explication: "« Je suis content que » exprime un sentiment et impose le subjonctif ; ici, l'action est antérieure, donc subjonctif passé : que tu sois venu.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue le verbe « pouvoir » au subjonctif présent à la 1re et à la 3e personne du singulier, et à la 1re personne du pluriel.",
          reponse: "Que je puisse, qu'il puisse, que nous puissions.",
          explication: "Pouvoir est un verbe irrégulier dont le radical change entièrement au subjonctif (puiss-).",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Réécris cette phrase en respectant la concordance des temps : « Elle voulait que nous (finir) le travail avant midi. »",
          reponse: "Elle voulait que nous finissions le travail avant midi.",
          explication: "La principale au passé (« voulait ») entraîne l'usage du subjonctif présent dans la subordonnée, en usage courant.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Analyse cette phrase et justifie l'emploi de chaque mode : « Bien qu'il soit tard, je pense que nous pouvons encore finir, à condition que tu m'aides. »",
          reponse: "« Bien qu'il soit tard » : subjonctif imposé par la conjonction de concession « bien que ». « Je pense que nous pouvons » : indicatif, car « penser que » à la forme affirmative exprime une certitude. « À condition que tu m'aides » : subjonctif imposé par la locution conjonctive « à condition que », qui exprime une condition, non un fait certain.",
          explication: "Cette phrase combine plusieurs règles : conjonctions imposant systématiquement le subjonctif, et verbes d'opinion dont le mode dépend de la certitude exprimée.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le subjonctif et la concordance des temps",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle est la terminaison de la 1re personne du pluriel au subjonctif présent ?",
          choix: ["-ons", "-ions", "-ent", "-ez"],
          bonneReponse: 1,
          explication: "Les terminaisons du subjonctif présent sont -e, -es, -e, -ions, -iez, -ent.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Conjugue le verbe « faire » au subjonctif présent, à la 1re personne du singulier et à la 1re personne du pluriel.",
          reponse: "Que je fasse, que nous fassions.",
          explication: "Faire est irrégulier au subjonctif : le radical devient « fass- ».",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Quelle phrase emploie correctement l'indicatif ?",
          choix: [
            "Il est certain qu'il vienne demain.",
            "Il est certain qu'il viendra demain.",
            "Je doute qu'il viendra demain.",
            "Je souhaite qu'il viendra demain.",
          ],
          bonneReponse: 1,
          explication: "« Il est certain que » exprime une certitude et impose l'indicatif : qu'il viendra.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique la formation et l'emploi du subjonctif passé, avec un exemple.",
          reponse: "Le subjonctif passé se forme avec l'auxiliaire être ou avoir au subjonctif présent, suivi du participe passé. Il exprime une action antérieure à celle de la principale. Exemple : « Je regrette qu'il soit parti sans nous prévenir » (le départ a eu lieu avant le moment du regret).",
          explication: "L'accord du participe passé suit les règles habituelles selon l'auxiliaire employé.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Corrige et explique l'erreur : « Il faut que tu prends tes affaires avant de partir. »",
          reponse: "Il faut écrire : « Il faut que tu prennes tes affaires avant de partir. » « Il faut que » exprime une obligation et impose le subjonctif, ici « prennes » et non l'indicatif « prends ».",
          explication: "C'est une erreur fréquente à l'oral, où les terminaisons du subjonctif et de l'indicatif se ressemblent pour certains verbes.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un élève écrit dans sa copie de brevet : « Je ne crois pas qu'il a raison, bien qu'il semble sûr de lui. » Corrige les erreurs de mode et explique chaque correction.",
          reponse: "Il faut écrire : « Je ne crois pas qu'il ait raison, bien qu'il semble sûr de lui. » Première correction : « je ne crois pas que », forme négative d'un verbe d'opinion, introduit un doute et appelle le subjonctif (« ait » et non « a »). La seconde partie, « bien qu'il semble », est déjà correcte au subjonctif, imposé par la conjonction de concession « bien que ».",
          explication: "Cet exercice combine deux règles essentielles : verbe d'opinion à la forme négative, et conjonction de concession, toutes deux exigeant le subjonctif.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le subjonctif exprime le doute, le souhait, la volonté, le sentiment ou l'obligation, presque toujours après « que ».",
    "Formation régulière : radical de « ils » à l'indicatif présent + terminaisons -e, -es, -e, -ions, -iez, -ent.",
    "Verbes irréguliers indispensables : être, avoir, aller, faire, pouvoir, savoir, vouloir.",
    "Subjonctif passé : auxiliaire être/avoir au subjonctif présent + participe passé, pour une action antérieure.",
    "« Après que » + indicatif (fait réalisé) ; « avant que », « bien que », « quoique », « pour que » + subjonctif.",
    "Concordance des temps : le temps de la subordonnée dépend du temps de la principale ; en usage courant, le subjonctif présent remplace le subjonctif imparfait littéraire.",
  ],
};

export default chapitre;
