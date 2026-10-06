import { Fragment, type ReactNode } from "react";

const CORAIL = "#FF6F59";
const CORAIL_FONCE = "#D43D2B";
const MARINE = "#16324F";

const taille = "inline-block h-[1.1em] w-[1.1em] shrink-0 align-[-0.15em]";

/** Pièce de puzzle corail (remplace 🧩, dont la couleur dépend de l'appareil). */
export function Puzzle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${taille} ${className}`}>
      <path
        d="M9 3a2 2 0 0 1 4 0v1h4a1 1 0 0 1 1 1v4h1a2 2 0 0 1 0 4h-1v4a1 1 0 0 1-1 1h-4v-1a2 2 0 0 0-4 0v1H5a1 1 0 0 1-1-1v-4h1a2 2 0 0 0 0-4H4V5a1 1 0 0 1 1-1h4z"
        fill={CORAIL}
        stroke={CORAIL_FONCE}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Pile de livres, livre du dessus en corail (remplace 📚). */
export function Livres({ className = "" }: { className?: string }) {
  const livre = (y: number, x: number, w: number, couleur: string, bord: string) => (
    <g>
      <rect x={x} y={y} width={w} height={5} rx={1.2} fill={couleur} stroke={bord} strokeWidth={0.8} />
      <rect x={x + w - 4} y={y + 1.2} width={3} height={2.6} rx={0.4} fill="#FFF8EE" />
    </g>
  );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${taille} ${className}`}>
      {livre(17, 2.5, 19, "#5f7d9f", "#3a5a7e")}
      {livre(11.5, 3.5, 17.5, MARINE, "#0b1c2f")}
      <g transform="rotate(-6 12 8.5)">{livre(5.5, 3, 18, CORAIL, CORAIL_FONCE)}</g>
    </svg>
  );
}

const PICTOS: Record<string, () => ReactNode> = {
  "🧩": () => <Puzzle />,
  "📚": () => <Livres />,
};
const MOTIF = new RegExp(`(${Object.keys(PICTOS).join("|")})`, "u");

/** Remplace dans un libellé les emojis qui ont un pictogramme maison (🧩, 📚). */
export function avecPictos(texte: string | undefined | null): ReactNode {
  if (!texte) return texte;
  if (!MOTIF.test(texte)) return texte;
  return texte.split(MOTIF).map((morceau, i) =>
    PICTOS[morceau] ? <Fragment key={i}>{PICTOS[morceau]()}</Fragment> : <Fragment key={i}>{morceau}</Fragment>
  );
}
