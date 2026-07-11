// Bloc-notes des élèves, stocké localement (localStorage) sur leur appareil.
// La clé d'une note est l'identifiant unique du chapitre : "matiere--niveau--slug".
// Rien n'est envoyé au serveur.

const PREFIX = "smb-note-";

export function getNote(id: string): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(PREFIX + id) ?? "";
}

export function setNote(id: string, texte: string): void {
  if (typeof window === "undefined") return;
  if (texte.trim() === "") localStorage.removeItem(PREFIX + id);
  else localStorage.setItem(PREFIX + id, texte);
}

export interface NoteBrute {
  id: string;
  texte: string;
}

/** Récupère toutes les notes non vides enregistrées sur l'appareil. */
export function getAllNotes(): NoteBrute[] {
  if (typeof window === "undefined") return [];
  const out: NoteBrute[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(PREFIX)) {
      const texte = localStorage.getItem(k) ?? "";
      if (texte.trim()) out.push({ id: k.slice(PREFIX.length), texte });
    }
  }
  return out;
}
