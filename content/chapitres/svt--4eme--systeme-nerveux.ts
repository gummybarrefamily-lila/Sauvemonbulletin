import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "systeme-nerveux",
  titre: "Le système nerveux et le mouvement",
  matiere: "svt",
  niveau: "4eme",
  description:
    "Comprendre comment le cerveau commande les mouvements volontaires, le trajet du message nerveux entre organes sensoriels, système nerveux central et muscles, le rôle des muscles et des articulations, le réflexe, et les effets de certaines substances sur le système nerveux.",
  objectifs: [
    "Décrire l'organisation du système nerveux (cerveau, moelle épinière, nerfs)",
    "Expliquer le trajet du message nerveux, d'un stimulus jusqu'à la réponse motrice",
    "Comprendre le rôle des muscles, des tendons et des articulations dans le mouvement",
    "Distinguer un mouvement volontaire d'un réflexe",
    "Connaître les effets de certaines substances (alcool, drogues) sur le système nerveux",
  ],
  slides: [
    {
      titre: "Le mouvement, une commande du cerveau",
      illustration: "🧠",
      visuel: "cerveau → commande → muscles",
      contenu: [
        "Tout mouvement volontaire est commandé par le cerveau",
        "Le cerveau envoie des messages nerveux jusqu'aux muscles",
        "Ces messages circulent dans le système nerveux",
        "Sans système nerveux fonctionnel, pas de mouvement volontaire",
      ],
      voixOff:
        "Lever le bras, marcher, écrire : tous ces mouvements volontaires sont commandés par le cerveau. Il envoie des messages nerveux qui parcourent le système nerveux jusqu'aux muscles concernés. Si ce circuit est endommagé, le mouvement volontaire devient impossible, même si les muscles sont en parfait état.",
    },
    {
      titre: "Le système nerveux central",
      illustration: "🧠",
      visuel: "cerveau + moelle épinière = système nerveux central",
      contenu: [
        "Le cerveau, protégé par le crâne, est le centre de commande",
        "La moelle épinière, protégée par la colonne vertébrale, prolonge le cerveau",
        "Ensemble, ils forment le système nerveux central",
        "C'est là que les messages nerveux sont traités",
      ],
      voixOff:
        "Le système nerveux central regroupe le cerveau, protégé par le crâne, et la moelle épinière, protégée par la colonne vertébrale. C'est dans ces organes que les messages nerveux sont analysés et que naissent les commandes envoyées au reste du corps.",
    },
    {
      titre: "Les nerfs : messagers de l'information",
      illustration: "🔌",
      visuel: "nerfs = câbles reliant organes et cerveau",
      contenu: [
        "Les nerfs relient le système nerveux central aux organes des sens et aux muscles",
        "Les nerfs sensitifs transmettent l'information des organes des sens vers le cerveau",
        "Les nerfs moteurs transmettent la commande du cerveau vers les muscles",
        "L'information circule sous forme de messages nerveux (signaux électriques)",
      ],
      voixOff:
        "Les nerfs sont comme des câbles qui relient le système nerveux central au reste du corps. Les nerfs sensitifs transportent l'information captée par les organes des sens, comme les yeux ou la peau, jusqu'au cerveau. Les nerfs moteurs, eux, transportent la commande du cerveau vers les muscles, sous la forme de messages nerveux, de véritables signaux électriques.",
    },
    {
      titre: "Du stimulus à la commande motrice",
      illustration: "➡️",
      visuel: "stimulus → nerf sensitif → cerveau → nerf moteur → muscle",
      contenu: [
        "Un stimulus (ex. lumière, contact) est détecté par un organe des sens",
        "Un message nerveux sensitif part vers le cerveau",
        "Le cerveau traite l'information et élabore une réponse",
        "Un message nerveux moteur part vers le ou les muscles concernés",
      ],
      voixOff:
        "Suivons le trajet complet d'un message. Un stimulus, comme une lumière vive ou un contact sur la peau, est détecté par un organe des sens. Un message nerveux sensitif part alors vers le cerveau, par un nerf sensitif. Le cerveau traite cette information et élabore une réponse, envoyée sous forme de message nerveux moteur, par un nerf moteur, jusqu'au muscle qui va se contracter.",
    },
    {
      titre: "Muscles et mouvement",
      illustration: "💪",
      visuel: "muscle qui se contracte + tendon",
      contenu: [
        "Un muscle squelettique se contracte en recevant un message nerveux",
        "En se contractant, il raccourcit et tire sur l'os auquel il est attaché",
        "Les tendons attachent solidement le muscle à l'os",
        "Les muscles fonctionnent souvent par paires antagonistes (l'un plie, l'autre tend)",
      ],
      voixOff:
        "Quand un muscle squelettique reçoit un message nerveux moteur, il se contracte : il raccourcit et devient plus dur, ce qui tire sur l'os auquel il est attaché par un tendon. Souvent, les muscles fonctionnent par paires : l'un permet de plier l'articulation, l'autre de la tendre. On parle de muscles antagonistes.",
    },
    {
      titre: "Les articulations",
      illustration: "🦴",
      visuel: "os + articulation = mouvement possible",
      contenu: [
        "Une articulation est la zone de contact entre deux os",
        "Elle permet le mouvement entre ces os",
        "Ligaments et cartilage stabilisent et protègent l'articulation",
        "Sans articulation mobile, le squelette resterait rigide",
      ],
      voixOff:
        "Le mouvement n'est possible que grâce aux articulations, ces zones de contact entre deux os, comme au genou ou au coude. Des ligaments maintiennent les os en place, et du cartilage protège leurs extrémités. Sans ces articulations mobiles, notre squelette serait totalement rigide.",
    },
    {
      titre: "Le réflexe : une réponse rapide et involontaire",
      illustration: "⚡",
      visuel: "stimulus → réponse immédiate, sans réfléchir",
      contenu: [
        "Un réflexe est une réponse motrice rapide et involontaire",
        "Elle ne demande pas de réflexion consciente",
        "Le trajet passe souvent directement par la moelle épinière",
        "Exemple : retirer la main d'une surface brûlante",
      ],
      voixOff:
        "Certaines réponses sont beaucoup plus rapides que le mouvement volontaire : ce sont les réflexes. Retirer immédiatement sa main d'une plaque brûlante en est un exemple. Le message nerveux fait souvent un trajet très court, directement au niveau de la moelle épinière, sans passer par une réflexion consciente du cerveau, ce qui gagne un temps précieux.",
    },
    {
      titre: "Protéger son système nerveux",
      illustration: "🚫",
      visuel: "alcool, drogues → perturbent les messages nerveux",
      contenu: [
        "L'alcool ralentit la transmission des messages nerveux",
        "Certaines drogues perturbent gravement le fonctionnement du cerveau",
        "Ces substances altèrent les réflexes, l'équilibre et le jugement",
        "Un bon sommeil et l'absence de ces substances protègent le système nerveux",
      ],
      voixOff:
        "Le système nerveux est fragile. L'alcool ralentit la transmission des messages nerveux, ce qui altère les réflexes et l'équilibre, un danger notamment au volant. Certaines drogues perturbent encore plus gravement le fonctionnement du cerveau et peuvent créer une dépendance. Un sommeil suffisant et l'absence de ces substances sont les meilleures façons de préserver son système nerveux.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Système nerveux central : cerveau + moelle épinière",
        "Message nerveux : stimulus → nerf sensitif → cerveau → nerf moteur → muscle",
        "Muscle relié à l'os par un tendon ; mouvement possible grâce aux articulations",
        "Réflexe : réponse rapide et involontaire ; alcool et drogues perturbent le système nerveux",
      ],
      voixOff:
        "Résumons. Le système nerveux central, formé du cerveau et de la moelle épinière, commande les mouvements volontaires en envoyant des messages nerveux le long des nerfs, jusqu'aux muscles reliés aux os par des tendons. Les articulations rendent ce mouvement possible. Le réflexe est une réponse encore plus rapide, involontaire. Enfin, l'alcool et les drogues perturbent le fonctionnement du système nerveux : mieux vaut le protéger. Bravo, tu maîtrises le système nerveux et le mouvement !",
    },
  ],
  fiche: {
    intro:
      "Le mouvement volontaire est commandé par le cerveau, qui envoie des messages nerveux le long des nerfs jusqu'aux muscles, en passant par le système nerveux central. Les muscles, reliés aux os par des tendons, permettent le mouvement grâce aux articulations. Le réflexe est une réponse rapide et involontaire. L'alcool et les drogues perturbent le fonctionnement du système nerveux.",
    sections: [
      {
        titre: "L'organisation du système nerveux",
        points: [
          "Système nerveux central : cerveau (protégé par le crâne) + moelle épinière (protégée par la colonne vertébrale)",
          "Nerfs sensitifs : transmettent l'information des organes des sens vers le cerveau",
          "Nerfs moteurs : transmettent la commande du cerveau vers les muscles",
        ],
      },
      {
        titre: "Le trajet du message nerveux",
        points: [
          "Un stimulus est détecté par un organe des sens",
          "Un message nerveux sensitif part vers le cerveau via un nerf sensitif",
          "Le cerveau traite l'information et élabore une réponse",
          "Un message nerveux moteur part vers le muscle via un nerf moteur",
        ],
      },
      {
        titre: "Muscles, tendons et articulations",
        points: [
          "Un muscle qui reçoit un message nerveux se contracte et tire sur l'os",
          "Le tendon attache solidement le muscle à l'os",
          "Les muscles antagonistes travaillent par paires (fléchisseur / extenseur)",
          "L'articulation, zone de contact entre deux os, permet le mouvement",
        ],
      },
      {
        titre: "Réflexe et protection du système nerveux",
        points: [
          "Le réflexe est une réponse motrice rapide et involontaire (ex. retrait de la main)",
          "L'alcool ralentit la transmission des messages nerveux",
          "Les drogues perturbent gravement le fonctionnement du cerveau",
          "Un bon sommeil protège le système nerveux",
        ],
      },
    ],
    audio:
      "Fiche de révision : le système nerveux et le mouvement. Le mouvement volontaire est commandé par le cerveau, qui forme avec la moelle épinière le système nerveux central. Les nerfs relient ce centre de commande au reste du corps : les nerfs sensitifs transportent l'information des organes des sens vers le cerveau, les nerfs moteurs transportent la commande du cerveau vers les muscles. Un message nerveux suit donc le trajet suivant : un stimulus est détecté, un message sensitif part vers le cerveau, celui-ci élabore une réponse, puis un message moteur part vers le muscle concerné, qui se contracte et tire sur l'os auquel il est attaché par un tendon. Le mouvement est rendu possible par les articulations, zones de contact entre deux os. Le réflexe est une réponse motrice encore plus rapide et involontaire, souvent traitée directement par la moelle épinière. Enfin, il faut protéger son système nerveux : l'alcool ralentit la transmission des messages nerveux et les drogues perturbent gravement le fonctionnement du cerveau.",
  },
  memoCards: [
    { recto: "Qu'est-ce que le système nerveux central ?", verso: "L'ensemble formé par le cerveau et la moelle épinière." },
    { recto: "Quel est le rôle d'un nerf sensitif ?", verso: "Transmettre l'information captée par un organe des sens vers le cerveau." },
    { recto: "Quel est le rôle d'un nerf moteur ?", verso: "Transmettre la commande du cerveau vers un muscle." },
    { recto: "Que se passe-t-il quand un muscle reçoit un message nerveux moteur ?", verso: "Il se contracte, raccourcit et tire sur l'os auquel il est relié par un tendon." },
    { recto: "Qu'est-ce qu'une articulation ?", verso: "La zone de contact entre deux os, qui permet le mouvement." },
    { recto: "Qu'est-ce qu'un réflexe ?", verso: "Une réponse motrice rapide et involontaire, sans réflexion consciente." },
    { recto: "Quel est l'effet de l'alcool sur le système nerveux ?", verso: "Il ralentit la transmission des messages nerveux et altère les réflexes." },
    { recto: "Qu'attache le tendon ?", verso: "Le muscle à l'os." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quels organes forment le système nerveux central ?",
      choix: ["Le cœur et les poumons", "Le cerveau et la moelle épinière", "Les muscles et les os", "Les nerfs uniquement"],
      bonneReponse: 1,
      explication: "Le système nerveux central regroupe le cerveau et la moelle épinière.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel organe relie le muscle à l'os ?",
      choix: ["Le nerf", "Le tendon", "Le ligament", "Le cartilage"],
      bonneReponse: 1,
      explication: "Le tendon attache solidement le muscle à l'os.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que se passe-t-il dans un muscle quand il reçoit un message nerveux moteur ?",
      reponse: "Il se contracte : il raccourcit et devient plus dur, ce qui tire sur l'os auquel il est attaché.",
      explication: "La contraction musculaire est la réponse à un message nerveux moteur.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Une articulation est :",
      choix: ["Un muscle", "La zone de contact entre deux os", "Un type de nerf", "Un organe des sens"],
      bonneReponse: 1,
      explication: "L'articulation est la zone de contact entre deux os, qui permet le mouvement.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Décris dans l'ordre le trajet du message nerveux lorsqu'une personne voit un objet et décide de l'attraper.",
      reponse: "Les yeux détectent l'objet (stimulus) ; un message nerveux sensitif part vers le cerveau par un nerf sensitif ; le cerveau traite l'information et décide d'attraper l'objet ; un message nerveux moteur part vers les muscles du bras par un nerf moteur, qui se contractent pour réaliser le mouvement.",
      explication: "Ce trajet illustre la chaîne complète : stimulus → nerf sensitif → cerveau → nerf moteur → muscle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi on parle de muscles « antagonistes ».",
      reponse: "Parce que deux muscles travaillent en opposition autour d'une même articulation : quand l'un se contracte pour plier le membre, l'autre se relâche, et inversement pour le tendre.",
      explication: "Le biceps et le triceps du bras en sont un exemple classique.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un réflexe se distingue d'un mouvement volontaire car il est :",
      choix: [
        "Plus lent",
        "Rapide et ne nécessite pas de réflexion consciente",
        "Impossible à observer",
        "Réalisé uniquement par les muscles du visage"],
      bonneReponse: 1,
      explication: "Le réflexe est une réponse motrice rapide, involontaire, souvent traitée directement au niveau de la moelle épinière.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Explique pourquoi l'alcool augmente le risque d'accident de la route.",
      reponse: "L'alcool ralentit la transmission des messages nerveux, ce qui allonge le temps de réaction et altère les réflexes et le jugement, rendant la conduite plus dangereuse.",
      explication: "Le ralentissement des messages nerveux diminue la rapidité et la précision des réactions du conducteur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Une personne touche accidentellement une plaque brûlante et retire sa main avant même d'avoir eu le temps d'y penser. Explique ce phénomène.",
      reponse: "Il s'agit d'un réflexe : le message nerveux sensitif, déclenché par la chaleur, est traité très rapidement au niveau de la moelle épinière, qui envoie directement un message moteur aux muscles du bras, sans attendre l'analyse consciente du cerveau. Cette rapidité protège la personne d'une brûlure plus grave.",
      explication: "Le réflexe permet une réponse motrice beaucoup plus rapide qu'un mouvement volontaire.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Une personne a une lésion de la moelle épinière au niveau du dos, mais son cerveau et ses muscles des jambes sont intacts. On observe qu'elle ne peut plus bouger volontairement ses jambes. Cela s'explique car :",
      choix: [
        "Ses muscles sont détruits",
        "Les messages nerveux du cerveau ne peuvent plus atteindre les muscles des jambes à cause de la lésion",
        "Elle n'a plus de nerfs sensitifs",
        "Ses articulations sont bloquées"],
      bonneReponse: 1,
      explication: "La moelle épinière transporte les messages nerveux entre le cerveau et le reste du corps ; une lésion peut interrompre ce circuit.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi le sommeil est important pour le bon fonctionnement du système nerveux.",
      reponse: "Le sommeil permet au cerveau de récupérer et de bien fonctionner ; un manque de sommeil perturbe l'attention, les réflexes et le traitement de l'information par le système nerveux.",
      explication: "Un système nerveux reposé traite mieux les messages nerveux et réagit plus efficacement.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Pourquoi peut-on dire que le mouvement volontaire nécessite trois éléments en bon état : le système nerveux, les muscles et les articulations ?",
      reponse: "Le système nerveux doit transmettre correctement le message moteur, le muscle doit pouvoir se contracter, et l'articulation doit pouvoir bouger : si l'un de ces trois éléments est atteint, le mouvement volontaire devient impossible ou limité, même si les deux autres fonctionnent normalement.",
      explication: "Le mouvement résulte de la coopération du système nerveux, des muscles et des articulations.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Le cerveau est protégé par :",
      choix: ["La colonne vertébrale", "Le crâne", "Les côtes", "Le bassin"],
      bonneReponse: 1,
      explication: "Le crâne protège le cerveau, comme la colonne vertébrale protège la moelle épinière.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Qu'est-ce qu'un nerf moteur transmet ?",
      reponse: "La commande du cerveau vers un muscle.",
      explication: "Le nerf moteur conduit le message nerveux du système nerveux central vers le muscle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qu'est-ce qui permet le mouvement entre deux os ?",
      reponse: "L'articulation, la zone de contact entre les deux os.",
      explication: "L'articulation rend le squelette mobile.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Un réflexe est traité principalement au niveau :",
      choix: ["Du cerveau uniquement, après réflexion", "De la moelle épinière, rapidement", "Des muscles seuls", "Des articulations"],
      bonneReponse: 1,
      explication: "Le réflexe passe souvent par un trajet court au niveau de la moelle épinière, sans réflexion consciente.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quel est l'effet de l'alcool sur les messages nerveux ?",
      reponse: "L'alcool ralentit la transmission des messages nerveux, ce qui altère les réflexes et le jugement.",
      explication: "C'est pourquoi conduire après avoir bu de l'alcool est dangereux.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Le système nerveux et le mouvement",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "La moelle épinière est protégée par :",
          choix: ["Le crâne", "La colonne vertébrale", "Les côtes", "Le bassin"],
          bonneReponse: 1,
          explication: "La colonne vertébrale protège la moelle épinière, qui prolonge le cerveau.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Comment appelle-t-on l'organe qui attache un muscle à un os ?",
          reponse: "Le tendon.",
          explication: "Le tendon relie solidement le muscle à l'os pour transmettre la force de la contraction.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Décris le trajet du message nerveux entre un stimulus et la contraction d'un muscle.",
          reponse: "Le stimulus est détecté par un organe des sens ; un message nerveux sensitif part vers le cerveau par un nerf sensitif ; le cerveau traite l'information et élabore une réponse ; un message nerveux moteur part vers le muscle par un nerf moteur, qui se contracte.",
          explication: "Ce trajet en quatre étapes relie stimulus, cerveau et muscle.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Deux muscles antagonistes autour d'une articulation :",
          choix: [
            "Se contractent toujours en même temps",
            "Travaillent en opposition (l'un plie, l'autre tend)",
            "Ne sont jamais reliés au même os",
            "N'existent que dans le visage"],
          bonneReponse: 1,
          explication: "Les muscles antagonistes agissent en opposition pour permettre le mouvement dans les deux sens.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique pourquoi un réflexe est plus rapide qu'un mouvement volontaire.",
          reponse: "Parce que le message nerveux fait un trajet plus court, souvent directement traité au niveau de la moelle épinière, sans passer par l'analyse consciente du cerveau, ce qui économise du temps par rapport à un mouvement volontaire réfléchi.",
          explication: "Le trajet court du réflexe explique sa rapidité par rapport au mouvement volontaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Un sportif se blesse une articulation du genou et ne peut plus la plier normalement, alors que ses muscles et ses nerfs sont intacts. Quelle structure est probablement atteinte, et pourquoi ?",
          reponse: "L'articulation elle-même (ou les ligaments/cartilage qui la composent), car c'est elle qui permet le mouvement entre les deux os ; si elle est endommagée, le mouvement est limité même si les muscles et les nerfs fonctionnent correctement.",
          explication: "Le mouvement dépend à la fois du système nerveux, des muscles et de l'état des articulations.",
        },
      ],
    },
    {
      titre: "Examen 2 — Le système nerveux et le mouvement",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Un nerf sensitif transmet :",
          choix: ["La commande du cerveau vers le muscle", "L'information d'un organe des sens vers le cerveau", "Le sang vers les muscles", "L'oxygène vers le cerveau"],
          bonneReponse: 1,
          explication: "Le nerf sensitif conduit l'information captée par un organe des sens jusqu'au cerveau.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Donne un exemple de réflexe.",
          reponse: "Retirer la main d'une surface brûlante (ou cligner des yeux face à une lumière vive).",
          explication: "Le réflexe est une réponse motrice rapide et involontaire.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Explique pourquoi un muscle a besoin d'un tendon pour faire bouger un os.",
          reponse: "Le tendon attache solidement le muscle à l'os ; quand le muscle se contracte et raccourcit, le tendon transmet cette force à l'os, ce qui provoque le mouvement.",
          explication: "Sans tendon, la contraction du muscle ne pourrait pas déplacer l'os.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Les drogues et l'alcool ont pour point commun de :",
          choix: [
            "Améliorer les réflexes",
            "Perturber le fonctionnement du système nerveux",
            "Renforcer les muscles",
            "Accélérer la transmission des messages nerveux"],
          bonneReponse: 1,
          explication: "Ces substances perturbent le fonctionnement normal du système nerveux et altèrent réflexes et jugement.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Explique la différence entre un mouvement volontaire et un réflexe, en citant les organes impliqués.",
          reponse: "Le mouvement volontaire est décidé consciemment par le cerveau, qui envoie un message moteur au muscle après avoir traité l'information. Le réflexe est une réponse automatique, souvent traitée directement par la moelle épinière, sans intervention consciente du cerveau, ce qui la rend beaucoup plus rapide.",
          explication: "Le cerveau intervient dans le mouvement volontaire, alors que la moelle épinière suffit souvent pour un réflexe.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Pourquoi conseille-t-on de ne jamais conduire après avoir consommé de l'alcool ou des drogues ?",
          reponse: "Parce que ces substances ralentissent ou perturbent la transmission des messages nerveux, ce qui allonge le temps de réaction, altère les réflexes, l'équilibre et le jugement, augmentant fortement le risque d'accident.",
          explication: "La sécurité routière repose sur un système nerveux capable de réagir vite et correctement.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Le système nerveux central regroupe le cerveau (protégé par le crâne) et la moelle épinière (protégée par la colonne vertébrale).",
    "Le message nerveux suit le trajet : stimulus → nerf sensitif → cerveau → nerf moteur → muscle.",
    "Un muscle qui reçoit un message nerveux se contracte et tire sur l'os auquel il est attaché par un tendon.",
    "L'articulation, zone de contact entre deux os, permet le mouvement ; les muscles antagonistes travaillent par paires.",
    "Le réflexe est une réponse motrice rapide et involontaire, souvent traitée directement par la moelle épinière.",
    "Erreur à éviter : penser que le réflexe passe toujours par le cerveau — il est souvent traité par la moelle épinière seule.",
  ],
};

export default chapitre;
