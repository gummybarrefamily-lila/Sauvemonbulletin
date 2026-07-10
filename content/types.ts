// Types du contenu pédagogique de SauveMonBulletin.
// Tout le contenu (cours, fiches, cartes mémo, exercices, examens) est décrit
// avec ces structures et stocké dans /content — versionnable et facile à enrichir.

export type Niveau = "5eme" | "4eme" | "3eme";

export type MatiereId =
  | "francais"
  | "maths"
  | "physique-chimie"
  | "svt"
  | "histoire-geo"
  | "chinois"
  | "russe"
  | "histoire-danse";

export type Difficulte = "facile" | "moyen" | "avance";

/** Une diapositive de cours, très visuelle, avec sa narration (voix off TTS). */
export interface Slide {
  titre: string;
  /** Points affichés sur la diapositive (texte court, une idée par ligne). */
  contenu: string[];
  /** Emoji ou pictogramme illustrant la diapositive. */
  illustration?: string;
  /** Élément central mis en avant : formule, mot-clé, schéma textuel, caractère... */
  visuel?: string;
  /** Texte lu à voix haute par la voix off (2 à 4 phrases). */
  voixOff: string;
}

export interface FicheSection {
  titre: string;
  points: string[];
}

/** Carte mémo recto/verso, téléchargeable et imprimable. */
export interface MemoCard {
  recto: string;
  verso: string;
}

export interface QuestionQCM {
  type: "qcm";
  question: string;
  choix: string[];
  /** Index de la bonne réponse dans `choix`. */
  bonneReponse: number;
  explication: string;
  difficulte: Difficulte;
}

export interface QuestionOuverte {
  type: "ouverte";
  question: string;
  /** Corrigé modèle affiché après la réponse de l'élève. */
  reponse: string;
  explication?: string;
  difficulte: Difficulte;
}

export type Question = QuestionQCM | QuestionOuverte;

export interface Examen {
  titre: string;
  dureeMinutes: number;
  questions: Question[];
}

export interface Chapitre {
  slug: string;
  titre: string;
  matiere: MatiereId;
  niveau: Niveau;
  description: string;
  objectifs: string[];
  /** Langue de la voix off ("fr-FR" par défaut, "zh-CN" pour le chinois, "ru-RU" pour le russe). */
  langueVoix?: string;
  /** Le cours en diapositives avec voix off. */
  slides: Slide[];
  /** Fiche de révision synthétique, avec sa version audio (texte lu). */
  fiche: {
    intro: string;
    sections: FicheSection[];
    /** Texte de la version audio de la fiche. */
    audio: string;
  };
  /** Cartes mémo recto/verso téléchargeables. */
  memoCards: MemoCard[];
  /** Exercices d'entraînement avec corrigés (3 niveaux de difficulté mélangés). */
  exercices: Question[];
  /** Révision de fin de chapitre (série courte reprenant l'essentiel). */
  revisionFinChapitre: Question[];
  /** Deux examens de fin de chapitre avec corrigés. */
  examens: [Examen, Examen];
  /** Synthèse sur les révisions : ce qu'il faut absolument retenir. */
  syntheseRevisions: string[];
}

/** Entrée du programme : un chapitre prévu, disponible ou à venir. */
export interface EntreeProgramme {
  slug: string;
  titre: string;
  disponible: boolean;
}

export interface MatiereInfo {
  id: MatiereId;
  nom: string;
  emoji: string;
  couleur: string;
  description: string;
  /** Matière réservée à la filière danse-études. */
  danseEtudes?: boolean;
}

/** Fiche de méthode (techniques d'apprentissage, rédaction, brevet...). */
export interface Methode {
  slug: string;
  titre: string;
  emoji: string;
  categorie: "apprentissage" | "redaction" | "brevet" | "oral";
  accroche: string;
  sections: FicheSection[];
  /** Exercices pratiques : sujets/consignes variés pour s'entraîner. */
  exercicesPratiques: { consigne: string; corrige: string }[];
}

/** Sujet de brevet blanc (à partir de la 4ème). */
export interface BrevetBlanc {
  slug: string;
  titre: string;
  matiere: MatiereId;
  niveau: Niveau;
  dureeMinutes: number;
  /** Parties du sujet : énoncé complet + corrigé détaillé. */
  parties: { titre: string; enonce: string[]; corrige: string[] }[];
  conseils: string[];
}
