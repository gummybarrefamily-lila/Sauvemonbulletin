import type { MatiereId, Niveau, Question } from "./types";

/** Exercices hebdomadaires sur les fondamentaux (français, SVT, physique-chimie). */
export interface SerieHebdo {
  matiere: MatiereId;
  niveau: Niveau;
  semaine: number;
  titre: string;
  questions: Question[];
}

export const HEBDO: SerieHebdo[] = [
  {
    matiere: "francais",
    niveau: "5eme",
    semaine: 1,
    titre: "Fondamentaux — orthographe et conjugaison",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question: "Choisis la bonne orthographe : « Elle ___ allée au collège. »",
        choix: ["c'est", "s'est", "ses", "ces"],
        bonneReponse: 1,
        explication: "« s'est » : pronom réfléchi + auxiliaire être (elle s'est allée → ici « est allée », mais dans la structure pronominale on écrit s'est).",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question: "Conjugue « finir » à la 2e personne du pluriel du présent.",
        reponse: "vous finissez",
        explication: "Verbe du 2e groupe : radical « fin- » + « -issez ».",
      },
      {
        type: "qcm",
        difficulte: "facile",
        question: "« Les enfants ___ dans la cour. »",
        choix: ["joue", "jouent", "joues", "jouer"],
        bonneReponse: 1,
        explication: "Sujet pluriel « les enfants » → verbe à la 3e personne du pluriel : « jouent ».",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question: "Réécris au pluriel : « Le cheval blanc galope. »",
        reponse: "Les chevaux blancs galopent.",
        explication: "« cheval » → « chevaux », « blanc » → « blancs », « galope » → « galopent ».",
      },
    ],
  },
  {
    matiere: "svt",
    niveau: "5eme",
    semaine: 1,
    titre: "Fondamentaux — le vivant et la nutrition",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question: "Quel gaz les organes prélèvent-ils dans le sang pour fonctionner ?",
        choix: ["Le dioxyde de carbone", "Le dioxygène", "L'azote", "L'hélium"],
        bonneReponse: 1,
        explication: "Les organes consomment du dioxygène (O₂) et rejettent du dioxyde de carbone (CO₂).",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question: "Cite les deux nutriments principaux dont un muscle a besoin pour fonctionner.",
        reponse: "Le glucose et le dioxygène.",
        explication: "Le glucose fournit l'énergie, le dioxygène permet de la libérer (respiration cellulaire).",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question: "Où se fait l'absorption des nutriments issus de la digestion ?",
        choix: ["Dans l'estomac", "Dans l'intestin grêle", "Dans le foie", "Dans les poumons"],
        bonneReponse: 1,
        explication: "L'intestin grêle, grâce à ses villosités, absorbe les nutriments qui passent dans le sang.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question: "Explique en une phrase le rôle du sang dans la nutrition des organes.",
        reponse: "Le sang transporte les nutriments et le dioxygène jusqu'à tous les organes du corps.",
        explication: "Le système circulatoire distribue aux organes ce qu'ils prélèvent : glucose, dioxygène, etc.",
      },
    ],
  },
  {
    matiere: "physique-chimie",
    niveau: "5eme",
    semaine: 1,
    titre: "Fondamentaux — l'eau et la matière",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question: "À quelle température l'eau pure bout-elle (sous pression normale) ?",
        choix: ["0 °C", "50 °C", "100 °C", "212 °C"],
        bonneReponse: 2,
        explication: "L'eau pure bout à 100 °C au niveau de la mer.",
      },
      {
        type: "qcm",
        difficulte: "facile",
        question: "Comment s'appelle le passage de l'état liquide à l'état solide ?",
        choix: ["La fusion", "La solidification", "La vaporisation", "La condensation"],
        bonneReponse: 1,
        explication: "Liquide → solide = solidification (ex : l'eau qui gèle).",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question: "Lors de la fusion de 50 g de glace, quelle est la masse d'eau liquide obtenue ?",
        reponse: "50 g",
        explication: "La masse se conserve lors d'un changement d'état : 50 g de glace donnent 50 g d'eau.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question: "Pendant que la glace fond, la température reste bloquée à quelle valeur ? Comment appelle-t-on cela ?",
        reponse: "0 °C — c'est un palier de température (palier de fusion).",
        explication: "Durant un changement d'état d'un corps pur, la température reste constante : c'est un palier.",
      },
    ],
  },
];

export function hebdoDe(matiere: MatiereId, niveau: Niveau): SerieHebdo[] {
  return HEBDO.filter((h) => h.matiere === matiere && h.niveau === niveau);
}
