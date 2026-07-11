import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "responsabilite-sante",
  titre: "Comportements responsables et santé",
  matiere: "svt",
  niveau: "3eme",
  description:
    "Comprendre la notion de facteur de risque, les effets du tabac, de l'alcool et des drogues sur la santé, l'importance de l'activité physique, du sommeil et d'une alimentation équilibrée, ainsi que les liens entre environnement et santé, pour devenir acteur responsable de sa propre santé.",
  objectifs: [
    "Définir un facteur de risque et distinguer les comportements qui protègent ou fragilisent la santé",
    "Connaître les effets du tabac, de l'alcool et des drogues sur l'organisme",
    "Comprendre l'importance de l'activité physique, du sommeil et d'une alimentation équilibrée pour la santé",
    "Identifier des liens entre environnement (pollution, exposition) et santé",
    "Adopter une démarche responsable : prévention, dépistage, recours à l'aide",
  ],
  slides: [
    {
      titre: "Qu'est-ce qu'un facteur de risque ?",
      illustration: "⚠️",
      visuel: "facteur de risque = augmente la probabilité d'une maladie",
      contenu: [
        "Un facteur de risque augmente la probabilité de développer une maladie",
        "Certains facteurs sont liés à nos comportements (tabac, alcool, sédentarité)",
        "D'autres sont liés à l'environnement (pollution) ou sont héréditaires",
        "Réduire les facteurs de risque modifiables diminue le risque de maladie",
      ],
      voixOff:
        "Un facteur de risque est un élément qui augmente la probabilité de développer une maladie, sans en être forcément la cause directe. Certains facteurs de risque dépendent de nos comportements, comme le tabac, l'alcool ou le manque d'activité physique. D'autres sont liés à l'environnement, comme la pollution, ou sont héréditaires et donc non modifiables. Agir sur les facteurs de risque que l'on peut modifier permet de réduire le risque de maladie.",
    },
    {
      titre: "Le tabac et ses effets sur la santé",
      illustration: "🚬",
      visuel: "fumée → poumons, cœur, vaisseaux sanguins",
      contenu: [
        "La fumée de tabac contient de nombreuses substances toxiques",
        "Elle abîme les poumons et augmente le risque de cancers",
        "Elle favorise aussi les maladies cardiovasculaires",
        "La nicotine crée une forte dépendance",
      ],
      voixOff:
        "La fumée de tabac contient plusieurs milliers de substances, dont de nombreuses sont toxiques ou cancérigènes. Elle abîme progressivement les poumons, augmente fortement le risque de cancers, notamment du poumon, et favorise les maladies cardiovasculaires en endommageant les vaisseaux sanguins. La nicotine qu'elle contient crée en plus une forte dépendance, ce qui rend l'arrêt du tabac difficile.",
    },
    {
      titre: "L'alcool : effets et dangers",
      illustration: "🍺",
      visuel: "alcool → cerveau, foie, réflexes",
      contenu: [
        "L'alcool ralentit le fonctionnement du système nerveux",
        "Il altère les réflexes, l'équilibre et le jugement",
        "Une consommation régulière abîme le foie et d'autres organes",
        "L'alcool peut créer une dépendance",
      ],
      voixOff:
        "L'alcool ralentit la transmission des messages nerveux, ce qui altère les réflexes, l'équilibre et le jugement, un danger réel au volant ou dans la vie quotidienne. Une consommation régulière et excessive abîme le foie, chargé d'éliminer l'alcool du sang, ainsi que d'autres organes. Comme le tabac, l'alcool peut entraîner une dépendance qui rend son arrêt difficile.",
    },
    {
      titre: "Les autres drogues et la dépendance",
      illustration: "💊",
      visuel: "drogues → cerveau perturbé, dépendance",
      contenu: [
        "Certaines substances (cannabis, drogues dures...) perturbent gravement le cerveau",
        "Elles peuvent altérer la mémoire, la concentration et le jugement",
        "Elles entraînent souvent une dépendance physique et/ou psychologique",
        "Leur consommation, même occasionnelle, comporte des risques",
      ],
      voixOff:
        "D'autres substances, comme le cannabis ou des drogues plus dures, perturbent gravement le fonctionnement du cerveau. Elles peuvent altérer la mémoire, la concentration, le jugement, et entraîner une dépendance physique ou psychologique. Même une consommation occasionnelle comporte des risques pour la santé et peut avoir des conséquences graves, en particulier chez les adolescents dont le cerveau est encore en développement.",
    },
    {
      titre: "Activité physique et santé",
      illustration: "🏃",
      visuel: "activité physique régulière = protection",
      contenu: [
        "L'activité physique régulière renforce le cœur, les muscles et les os",
        "Elle réduit le risque de maladies cardiovasculaires et de certains cancers",
        "Elle contribue aussi au bien-être et à la gestion du stress",
        "La sédentarité (manque de mouvement) est un facteur de risque",
      ],
      voixOff:
        "À l'inverse, l'activité physique régulière est un facteur de protection pour la santé. Elle renforce le cœur, les muscles et les os, réduit le risque de maladies cardiovasculaires et de certains cancers, et contribue au bien-être général en aidant à gérer le stress. À l'opposé, la sédentarité, c'est-à-dire le manque de mouvement, est aujourd'hui reconnue comme un véritable facteur de risque.",
    },
    {
      titre: "Sommeil, écrans et santé",
      illustration: "😴",
      visuel: "sommeil suffisant = santé et concentration",
      contenu: [
        "Le sommeil permet au corps et au cerveau de récupérer",
        "Un manque de sommeil nuit à la concentration, à la mémoire et à l'humeur",
        "Un usage excessif des écrans, surtout le soir, retarde et perturbe le sommeil",
        "Un adolescent a besoin d'environ 9 à 10 heures de sommeil par nuit",
      ],
      voixOff:
        "Le sommeil est indispensable : il permet au corps de récupérer et au cerveau de consolider les apprentissages de la journée. Un manque de sommeil nuit à la concentration, à la mémoire et à l'humeur. Or, un usage excessif des écrans, en particulier le soir, retarde l'endormissement et perturbe la qualité du sommeil. Un adolescent a besoin d'environ neuf à dix heures de sommeil chaque nuit pour rester en bonne santé.",
    },
    {
      titre: "Une alimentation équilibrée",
      illustration: "🥗",
      visuel: "diversité + quantités adaptées",
      contenu: [
        "Une alimentation équilibrée apporte l'énergie et les nutriments nécessaires",
        "Elle repose sur la diversité des aliments et des quantités adaptées",
        "Un excès de sucres ou de graisses augmente le risque de certaines maladies",
        "Boire suffisamment d'eau est également indispensable",
      ],
      voixOff:
        "Une alimentation équilibrée fournit à l'organisme l'énergie et les nutriments dont il a besoin pour fonctionner et se développer. Elle repose sur la diversité des aliments consommés et sur des quantités adaptées aux besoins de chacun. Un excès de sucres ou de graisses, à l'inverse, augmente le risque de certaines maladies, comme le diabète ou les maladies cardiovasculaires. Boire suffisamment d'eau chaque jour reste également essentiel.",
    },
    {
      titre: "Environnement et santé",
      illustration: "🌫️",
      visuel: "pollution de l'air, de l'eau → risques pour la santé",
      contenu: [
        "La qualité de l'air respiré influence la santé (pollution atmosphérique)",
        "L'exposition à certains produits chimiques peut être nocive",
        "Le bruit excessif fatigue et peut abîmer l'audition",
        "Préserver son environnement, c'est aussi préserver sa santé",
      ],
      voixOff:
        "La santé ne dépend pas seulement de nos comportements individuels, mais aussi de notre environnement. La pollution de l'air que l'on respire, notamment en ville, augmente le risque de maladies respiratoires. L'exposition à certains produits chimiques peut également être nocive, tout comme un bruit excessif, qui fatigue et peut abîmer l'audition à long terme. Préserver son environnement, c'est donc aussi préserver sa santé.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Facteur de risque : élément qui augmente la probabilité d'une maladie",
        "Tabac, alcool, drogues : effets nocifs et risques de dépendance",
        "Activité physique, sommeil et alimentation équilibrée protègent la santé",
        "Être responsable : agir sur les facteurs modifiables, demander de l'aide si besoin",
      ],
      voixOff:
        "Résumons. Un facteur de risque augmente la probabilité de développer une maladie ; certains, comme le tabac, l'alcool ou les drogues, dépendent de nos comportements et comportent des risques graves, dont la dépendance. À l'inverse, l'activité physique, un sommeil suffisant et une alimentation équilibrée protègent la santé. L'environnement compte aussi. Être responsable, c'est agir sur ce que l'on peut modifier et savoir demander de l'aide en cas de difficulté. Bravo, tu es prêt à faire des choix éclairés pour ta santé !",
    },
  ],
  fiche: {
    intro:
      "La santé dépend de nombreux facteurs, dont certains sont liés à nos comportements. Le tabac, l'alcool et les drogues sont des facteurs de risque majeurs, pouvant entraîner une dépendance et des maladies graves. À l'inverse, l'activité physique, un sommeil suffisant, une alimentation équilibrée et un environnement préservé protègent la santé. Adopter des comportements responsables, c'est agir sur les facteurs de risque que l'on peut modifier.",
    sections: [
      {
        titre: "Facteurs de risque et substances nocives",
        points: [
          "Un facteur de risque augmente la probabilité de développer une maladie",
          "Le tabac abîme les poumons et augmente le risque de cancers",
          "L'alcool altère les réflexes, le jugement, et abîme le foie",
          "Les drogues perturbent le cerveau et entraînent une dépendance",
        ],
      },
      {
        titre: "Activité physique et sommeil",
        points: [
          "L'activité physique régulière protège le cœur, les muscles et les os",
          "La sédentarité est un facteur de risque",
          "Le sommeil est indispensable à la récupération et à la mémoire",
          "Un usage excessif des écrans perturbe le sommeil",
        ],
      },
      {
        titre: "Alimentation équilibrée",
        points: [
          "Une alimentation diversifiée et adaptée apporte l'énergie et les nutriments nécessaires",
          "Un excès de sucres ou de graisses augmente le risque de certaines maladies",
          "L'hydratation régulière est indispensable",
        ],
      },
      {
        titre: "Environnement et démarche responsable",
        points: [
          "La pollution de l'air et le bruit excessif ont un impact sur la santé",
          "Préserver son environnement contribue à préserver sa santé",
          "Adopter une démarche responsable : prévention, dépistage, demande d'aide",
        ],
      },
    ],
    audio:
      "Fiche de révision : comportements responsables et santé. Un facteur de risque est un élément qui augmente la probabilité de développer une maladie ; certains dépendent de nos comportements, d'autres de l'environnement ou de l'hérédité. Le tabac abîme les poumons et augmente le risque de cancers et de maladies cardiovasculaires ; l'alcool ralentit le système nerveux, altère les réflexes et le jugement, et abîme le foie en cas de consommation régulière ; d'autres drogues perturbent gravement le cerveau. Ces trois substances peuvent entraîner une dépendance. À l'inverse, l'activité physique régulière protège le cœur, les muscles et les os, alors que la sédentarité est un facteur de risque. Le sommeil, environ neuf à dix heures par nuit chez un adolescent, est indispensable à la récupération et à la mémoire, mais un usage excessif des écrans le perturbe. Une alimentation équilibrée, diversifiée et en quantités adaptées, apporte l'énergie nécessaire, alors qu'un excès de sucres ou de graisses augmente le risque de certaines maladies. Enfin, l'environnement compte : la pollution de l'air ou un bruit excessif ont un impact sur la santé. Être responsable, c'est agir sur les facteurs de risque modifiables et savoir demander de l'aide en cas de difficulté.",
  },
  memoCards: [
    { recto: "Qu'est-ce qu'un facteur de risque ?", verso: "Un élément qui augmente la probabilité de développer une maladie." },
    { recto: "Cite deux effets du tabac sur la santé.", verso: "Il abîme les poumons et augmente le risque de cancers et de maladies cardiovasculaires." },
    { recto: "Quel est l'effet de l'alcool sur le système nerveux ?", verso: "Il ralentit la transmission des messages nerveux, altérant réflexes, équilibre et jugement." },
    { recto: "Quel organe est particulièrement abîmé par une consommation excessive et régulière d'alcool ?", verso: "Le foie." },
    { recto: "Pourquoi l'activité physique protège-t-elle la santé ?", verso: "Elle renforce le cœur, les muscles et les os, et réduit le risque de nombreuses maladies." },
    { recto: "Combien d'heures de sommeil un adolescent a-t-il besoin par nuit ?", verso: "Environ 9 à 10 heures." },
    { recto: "Cite un exemple de lien entre environnement et santé.", verso: "La pollution de l'air augmente le risque de maladies respiratoires." },
    { recto: "Que signifie « être responsable » de sa santé ?", verso: "Agir sur les facteurs de risque que l'on peut modifier et savoir demander de l'aide si besoin." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Un facteur de risque est :",
      choix: ["Un élément qui protège toujours de toute maladie", "Un élément qui augmente la probabilité de développer une maladie", "Un médicament", "Un organe du corps"],
      bonneReponse: 1,
      explication: "Le facteur de risque augmente la probabilité de développer une maladie, sans en être forcément la cause directe.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La fumée de tabac abîme en particulier :",
      choix: ["Les os", "Les poumons", "Les cheveux", "Les ongles"],
      bonneReponse: 1,
      explication: "Le tabac abîme les poumons et augmente le risque de cancers et de maladies respiratoires.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Cite un effet de l'alcool sur le corps.",
      reponse: "Par exemple il ralentit les réflexes (ou il abîme le foie, ou il altère le jugement).",
      explication: "L'alcool a des effets multiples sur le système nerveux et sur certains organes comme le foie.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "L'activité physique régulière est associée à :",
      choix: ["Une augmentation du risque de maladies cardiovasculaires", "Une diminution du risque de maladies cardiovasculaires", "Aucun effet sur la santé", "Une dépendance systématique"],
      bonneReponse: 1,
      explication: "L'activité physique régulière protège le cœur et diminue le risque de maladies cardiovasculaires.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi conduire après avoir bu de l'alcool est particulièrement dangereux.",
      reponse: "L'alcool ralentit la transmission des messages nerveux, ce qui allonge le temps de réaction, altère les réflexes, l'équilibre et le jugement, autant de capacités indispensables pour conduire en sécurité.",
      explication: "La conduite nécessite des réflexes rapides et un jugement clair, tous deux altérés par l'alcool.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi un usage excessif des écrans le soir peut nuire à la santé d'un adolescent.",
      reponse: "L'usage excessif des écrans, surtout le soir, retarde l'endormissement et perturbe la qualité du sommeil ; or le sommeil est indispensable à la récupération du corps et du cerveau, et son manque nuit à la concentration, à la mémoire et à l'humeur.",
      explication: "Les écrans perturbent le sommeil, dont le rôle est essentiel pour la santé physique et mentale.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une alimentation équilibrée repose principalement sur :",
      choix: [
        "La suppression totale des graisses et des sucres",
        "La diversité des aliments et des quantités adaptées aux besoins",
        "La consommation d'un seul type d'aliment",
        "L'absence totale d'hydratation"],
      bonneReponse: 1,
      explication: "L'équilibre alimentaire repose sur la diversité et des quantités adaptées, pas sur la suppression totale de certains aliments.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Donne un exemple de lien entre pollution de l'air et santé.",
      reponse: "La pollution de l'air, notamment en ville, augmente le risque de maladies respiratoires comme l'asthme, en abîmant les voies respiratoires exposées de façon répétée.",
      explication: "L'environnement dans lequel on vit est un facteur qui influence directement la santé.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi les adolescents sont particulièrement vulnérables face aux drogues, y compris en consommation occasionnelle.",
      reponse: "Le cerveau des adolescents est encore en plein développement ; les substances qui perturbent son fonctionnement peuvent avoir des conséquences plus importantes et plus durables que chez un adulte, et le risque de développer une dépendance est également plus élevé à cet âge.",
      explication: "Le développement encore incomplet du cerveau adolescent le rend plus sensible aux effets des substances perturbatrices.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Parmi les facteurs de risque suivants, lequel est modifiable par un changement de comportement ?",
      choix: [
        "L'hérédité",
        "La sédentarité",
        "L'âge",
        "Le sexe biologique"],
      bonneReponse: 1,
      explication: "Contrairement à l'hérédité, l'âge ou le sexe, la sédentarité peut être réduite en changeant de comportement (plus d'activité physique).",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Un élève affirme : « Si je ne fume qu'occasionnellement, cela ne présente aucun risque. » Discute cette affirmation avec les connaissances du chapitre.",
      reponse: "C'est inexact : même une consommation occasionnelle de tabac expose l'organisme à des substances toxiques et cancérigènes, et présente un risque, bien que ce risque soit généralement plus faible qu'en cas de consommation régulière. De plus, la nicotine crée une dépendance qui peut transformer rapidement une consommation occasionnelle en consommation régulière.",
      explication: "Aucune consommation de tabac n'est totalement sans risque, et le risque de dépendance existe dès les premières consommations.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique en quoi le sommeil, l'activité physique et l'alimentation sont trois piliers complémentaires d'une bonne santé.",
      reponse: "Le sommeil permet au corps et au cerveau de récupérer et de bien fonctionner ; l'activité physique renforce le cœur, les muscles et les os et réduit de nombreux risques de maladies ; l'alimentation équilibrée fournit l'énergie et les nutriments nécessaires à toutes ces fonctions. Un déséquilibre dans l'un de ces trois piliers peut fragiliser les deux autres et, plus largement, la santé globale.",
      explication: "Ces trois piliers agissent ensemble sur le bon fonctionnement de l'organisme.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le tabac augmente en particulier le risque de :",
      choix: ["Cancers", "Croissance osseuse", "Meilleure vue", "Aucun risque"],
      bonneReponse: 0,
      explication: "Le tabac augmente fortement le risque de cancers, notamment du poumon.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce que la sédentarité ?",
      reponse: "Le manque d'activité physique, considéré comme un facteur de risque pour la santé.",
      explication: "La sédentarité s'oppose à l'activité physique régulière, qui protège la santé.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Pourquoi le sommeil est-il important pour un adolescent ?",
      reponse: "Il permet au corps et au cerveau de récupérer, et favorise la concentration, la mémoire et l'humeur.",
      explication: "Un adolescent a besoin d'environ 9 à 10 heures de sommeil par nuit.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Une alimentation équilibrée doit surtout être :",
      choix: ["Uniforme et répétitive", "Diversifiée et en quantités adaptées", "Riche uniquement en sucres", "Sans aucune eau"],
      bonneReponse: 1,
      explication: "La diversité des aliments et des quantités adaptées caractérisent une alimentation équilibrée.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite un exemple de facteur de risque lié à l'environnement.",
      reponse: "Par exemple la pollution de l'air ou le bruit excessif.",
      explication: "L'environnement dans lequel on vit influence directement la santé.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Comportements responsables et santé",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "L'alcool a pour effet de :",
          choix: ["Améliorer les réflexes", "Ralentir la transmission des messages nerveux", "Renforcer le foie", "Améliorer la vue"],
          bonneReponse: 1,
          explication: "L'alcool ralentit la transmission des messages nerveux, ce qui altère réflexes et jugement.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Qu'est-ce qu'un facteur de risque modifiable ? Donne un exemple.",
          reponse: "Un facteur de risque sur lequel on peut agir par ses comportements, par exemple le tabac ou la sédentarité.",
          explication: "Contrairement à l'hérédité, ces facteurs peuvent être réduits par un changement de comportement.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi la dépendance rend l'arrêt du tabac, de l'alcool ou des drogues difficile.",
          reponse: "Ces substances agissent sur le cerveau et créent une dépendance physique et/ou psychologique : le corps ou l'esprit en réclame régulièrement, ce qui provoque un manque désagréable en cas d'arrêt et pousse à continuer la consommation malgré les risques connus pour la santé.",
          explication: "La dépendance rend le contrôle de la consommation difficile, même en connaissant les risques.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Une alimentation trop riche en sucres et en graisses augmente le risque de :",
          choix: ["Diabète et maladies cardiovasculaires", "Meilleure concentration", "Sommeil de meilleure qualité", "Aucun risque particulier"],
          bonneReponse: 0,
          explication: "Un excès de sucres et de graisses est un facteur de risque reconnu de plusieurs maladies chroniques.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Propose trois comportements responsables qu'un adolescent peut adopter pour préserver sa santé, en justifiant chacun.",
          reponse: "Pratiquer une activité physique régulière, pour renforcer le cœur, les muscles et les os ; dormir suffisamment (environ 9 à 10 heures), pour permettre au corps et au cerveau de récupérer ; éviter le tabac, l'alcool et les drogues, pour ne pas exposer son organisme à des substances toxiques et au risque de dépendance.",
          explication: "Ces trois comportements agissent sur des facteurs de risque modifiables et protègent la santé à long terme.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi il est important de demander de l'aide (à un adulte, un médecin...) en cas de difficulté avec une substance comme le tabac, l'alcool ou une drogue.",
          reponse: "Parce que la dépendance rend l'arrêt difficile seul, et qu'un accompagnement (médical, psychologique ou par un adulte de confiance) augmente les chances de réussir à réduire ou arrêter la consommation, tout en limitant les risques pour la santé et en apportant un soutien face aux difficultés rencontrées.",
          explication: "Un accompagnement adapté augmente les chances de sortir d'une dépendance en toute sécurité.",
        },
      ],
    },
    {
      titre: "Examen 2 — Comportements responsables et santé",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La sédentarité est :",
          choix: ["Un facteur de protection", "Un facteur de risque lié au manque d'activité physique", "Un type d'alimentation", "Une maladie infectieuse"],
          bonneReponse: 1,
          explication: "La sédentarité, le manque de mouvement, est un facteur de risque pour la santé.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Combien d'heures de sommeil sont recommandées pour un adolescent ?",
          reponse: "Environ 9 à 10 heures par nuit.",
          explication: "Ce besoin de sommeil est plus élevé que chez un adulte.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique en quoi le tabac est à la fois un facteur de risque de maladies et une substance provoquant une dépendance.",
          reponse: "Le tabac contient des substances toxiques et cancérigènes qui abîment les poumons et augmentent le risque de cancers et de maladies cardiovasculaires (facteur de risque), tout en contenant de la nicotine, qui crée une forte dépendance rendant l'arrêt du tabac difficile.",
          explication: "Le tabac cumule un risque direct pour la santé et un mécanisme de dépendance qui entretient la consommation.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "L'activité physique régulière a pour effet de :",
          choix: [
            "Augmenter le risque de maladies cardiovasculaires",
            "Renforcer le cœur, les muscles et les os",
            "Provoquer systématiquement une dépendance",
            "N'avoir aucun effet sur la santé"],
          bonneReponse: 1,
          explication: "L'activité physique régulière est un facteur de protection reconnu pour la santé.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi on dit que la santé dépend à la fois de comportements individuels et de facteurs environnementaux.",
          reponse: "Des comportements individuels comme le tabac, l'alcool, l'activité physique, le sommeil ou l'alimentation influencent directement la santé et peuvent être modifiés par chacun ; mais des facteurs environnementaux, comme la pollution de l'air ou le bruit, échappent davantage au contrôle individuel et nécessitent des actions collectives pour être réduits, tout en ayant eux aussi un impact réel sur la santé.",
          explication: "La santé résulte à la fois de choix personnels et de conditions environnementales partagées.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un adolescent passe plusieurs heures par jour sur des écrans le soir et dort mal. Explique le lien entre ces deux observations et propose une piste d'amélioration.",
          reponse: "L'usage excessif des écrans le soir retarde l'endormissement et perturbe la qualité du sommeil, ce qui explique le mauvais sommeil observé. Une piste d'amélioration serait de limiter l'usage des écrans avant le coucher, par exemple en arrêtant les écrans au moins une heure avant de dormir.",
          explication: "Réduire l'exposition aux écrans le soir est une mesure concrète pour améliorer la qualité du sommeil.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Un facteur de risque augmente la probabilité de développer une maladie ; certains sont modifiables (comportements), d'autres non (hérédité).",
    "Le tabac abîme les poumons et le cœur ; l'alcool ralentit le système nerveux et abîme le foie ; les drogues perturbent gravement le cerveau — tous peuvent créer une dépendance.",
    "L'activité physique régulière protège le cœur, les muscles et les os ; la sédentarité est un facteur de risque.",
    "Le sommeil (9 à 10 h chez l'adolescent) est indispensable ; les écrans, surtout le soir, le perturbent.",
    "Une alimentation diversifiée et adaptée protège la santé ; l'excès de sucres et de graisses augmente le risque de maladies.",
    "Erreur à éviter : croire qu'une consommation « occasionnelle » de tabac, d'alcool ou de drogue est sans risque — le risque existe dès la première consommation.",
  ],
};

export default chapitre;
