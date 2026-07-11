// Comparateur pour la dictée : aligne le texte de l'élève avec le texte de
// référence (plus longue sous-séquence commune, mot à mot) et repère les fautes.

export type DiffPart = { type: "egal" | "manquant" | "faux"; texte: string };
// egal     = mot correct
// faux     = mot écrit par l'élève mais incorrect / en trop  (à barrer en rouge)
// manquant = mot du texte de référence que l'élève n'a pas rendu (à afficher en vert)

function tokeniser(s: string): string[] {
  return s.trim().split(/\s+/).filter(Boolean);
}

export function diffDictee(reference: string, eleve: string): { parts: DiffPart[]; erreurs: number } {
  const a = tokeniser(eleve);
  const b = tokeniser(reference);
  const n = a.length;
  const m = b.length;

  // Table de plus longue sous-séquence commune.
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const parts: DiffPart[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      parts.push({ type: "egal", texte: b[j] });
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      parts.push({ type: "faux", texte: a[i] });
      i++;
    } else {
      parts.push({ type: "manquant", texte: b[j] });
      j++;
    }
  }
  while (i < n) parts.push({ type: "faux", texte: a[i++] });
  while (j < m) parts.push({ type: "manquant", texte: b[j++] });

  // On compte comme UNE erreur chaque groupe consécutif de mots incorrects.
  let erreurs = 0;
  let dansErreur = false;
  for (const p of parts) {
    if (p.type === "egal") {
      dansErreur = false;
    } else if (!dansErreur) {
      erreurs++;
      dansErreur = true;
    }
  }

  return { parts, erreurs };
}
