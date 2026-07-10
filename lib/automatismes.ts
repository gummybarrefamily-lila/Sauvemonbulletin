import type { Niveau } from "@content/types";

export interface Automatisme {
  question: string;
  reponse: string;
  explication: string;
}

/** Générateur pseudo-aléatoire déterministe : même date + même niveau = même série. */
function creerRng(graine: string) {
  let h = 2166136261;
  for (let i = 0; i < graine.length; i++) {
    h ^= graine.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    h >>>= 0;
    return h / 4294967296;
  };
}

function entier(rng: () => number, min: number, max: number) {
  return Math.floor(rng() * (max - min + 1)) + min;
}

function pgcd(a: number, b: number): number {
  return b === 0 ? a : pgcd(b, a % b);
}

type Generateur = (rng: () => number) => Automatisme;

const communs: Generateur[] = [
  (rng) => {
    const a = entier(rng, 3, 12);
    const b = entier(rng, 3, 12);
    return {
      question: `${a} × ${b} = ?`,
      reponse: `${a * b}`,
      explication: `Table de ${Math.min(a, b)} : ${a} × ${b} = ${a * b}.`,
    };
  },
  (rng) => {
    const b = entier(rng, 3, 9);
    const q = entier(rng, 4, 12);
    return {
      question: `${b * q} ÷ ${b} = ?`,
      reponse: `${q}`,
      explication: `${b} × ${q} = ${b * q}, donc ${b * q} ÷ ${b} = ${q}.`,
    };
  },
  (rng) => {
    const a = entier(rng, 12, 89);
    const b = entier(rng, 12, 89);
    return {
      question: `${a} + ${b} = ?`,
      reponse: `${a + b}`,
      explication: `${a} + ${b} : ajoute les dizaines puis les unités → ${a + b}.`,
    };
  },
  (rng) => {
    const a = entier(rng, 40, 99);
    const b = entier(rng, 11, 39);
    return {
      question: `${a} − ${b} = ?`,
      reponse: `${a - b}`,
      explication: `${a} − ${b} = ${a - b} (retire d'abord ${Math.floor(b / 10) * 10}, puis ${b % 10}).`,
    };
  },
  (rng) => {
    const a = entier(rng, 2, 9);
    return {
      question: `Le double de ${a * 10 + 5} = ?`,
      reponse: `${(a * 10 + 5) * 2}`,
      explication: `Doubler, c'est multiplier par 2 : ${a * 10 + 5} × 2 = ${(a * 10 + 5) * 2}.`,
    };
  },
];

const par5eme: Generateur[] = [
  (rng) => {
    const a = entier(rng, 2, 9);
    const b = entier(rng, 2, 9);
    const c = entier(rng, 2, 9);
    return {
      question: `${a} + ${b} × ${c} = ?`,
      reponse: `${a + b * c}`,
      explication: `Priorité à la multiplication : ${b} × ${c} = ${b * c}, puis ${a} + ${b * c} = ${a + b * c}.`,
    };
  },
  (rng) => {
    const k = entier(rng, 2, 6);
    const n = entier(rng, 2, 9);
    const d = entier(rng, 2, 9);
    const g = pgcd(n * k, d * k);
    return {
      question: `Simplifie ${n * k}/${d * k}`,
      reponse: `${(n * k) / g}/${(d * k) / g}`,
      explication: `On divise le numérateur et le dénominateur par ${g}.`,
    };
  },
  (rng) => {
    const d = entier(rng, 5, 12);
    const a = entier(rng, 1, d - 1);
    const b = entier(rng, 1, d - 1);
    return {
      question: `${a}/${d} + ${b}/${d} = ?`,
      reponse: `${a + b}/${d}`,
      explication: `Même dénominateur : on additionne les numérateurs, ${a} + ${b} = ${a + b}.`,
    };
  },
  (rng) => {
    const b = entier(rng, 2, 5);
    const q = entier(rng, 3, 12);
    const a = entier(rng, 1, b);
    return {
      question: `Les ${a}/${b} de ${b * q} = ?`,
      reponse: `${a * q}`,
      explication: `(${b * q} ÷ ${b}) × ${a} = ${q} × ${a} = ${a * q}.`,
    };
  },
  (rng) => {
    const a = entier(rng, 1, 15);
    const b = entier(rng, 1, 15);
    return {
      question: `(−${a}) + (${b}) = ?`,
      reponse: `${b - a}`,
      explication: `On avance de ${b} depuis −${a} sur la droite graduée : résultat ${b - a}.`,
    };
  },
];

const par4eme: Generateur[] = [
  ...par5eme.slice(0, 2),
  (rng) => {
    const a = entier(rng, 2, 12);
    const b = entier(rng, 2, 12);
    return {
      question: `(−${a}) × (−${b}) = ?`,
      reponse: `${a * b}`,
      explication: `Moins par moins donne plus : ${a} × ${b} = ${a * b}.`,
    };
  },
  (rng) => {
    const a = entier(rng, 2, 12);
    const b = entier(rng, 2, 12);
    return {
      question: `(−${a}) × ${b} = ?`,
      reponse: `${-a * b}`,
      explication: `Signes différents → résultat négatif : −${a * b}.`,
    };
  },
  (rng) => {
    const n = entier(rng, 2, 5);
    const a = entier(rng, 2, 5);
    return {
      question: `${a}^${n} = ?`,
      reponse: `${Math.pow(a, n)}`,
      explication: `${a}^${n} = ${Array(n).fill(a).join(" × ")} = ${Math.pow(a, n)}.`,
    };
  },
  (rng) => {
    const n = entier(rng, 2, 6);
    return {
      question: `10^${n} = ?`,
      reponse: `${Math.pow(10, n)}`,
      explication: `10^${n} = 1 suivi de ${n} zéros.`,
    };
  },
  (rng) => {
    const x = entier(rng, 2, 9);
    const k = entier(rng, 2, 9);
    return {
      question: `Développe : ${k}(x + ${x})`,
      reponse: `${k}x + ${k * x}`,
      explication: `On distribue : ${k} × x + ${k} × ${x} = ${k}x + ${k * x}.`,
    };
  },
];

const par3eme: Generateur[] = [
  ...par4eme.slice(2, 5),
  (rng) => {
    const a = entier(rng, 2, 9);
    const b = entier(rng, 1, 9);
    const x = entier(rng, 1, 9);
    return {
      question: `f(x) = ${a}x + ${b}. Calcule f(${x}).`,
      reponse: `${a * x + b}`,
      explication: `f(${x}) = ${a} × ${x} + ${b} = ${a * x} + ${b} = ${a * x + b}.`,
    };
  },
  (rng) => {
    const x = entier(rng, 2, 9);
    const b = entier(rng, 1, 20);
    const a = entier(rng, 2, 9);
    return {
      question: `Résous : ${a}x + ${b} = ${a * x + b}`,
      reponse: `x = ${x}`,
      explication: `${a}x = ${a * x + b} − ${b} = ${a * x}, donc x = ${a * x} ÷ ${a} = ${x}.`,
    };
  },
  (rng) => {
    const n = entier(rng, 11, 15);
    return {
      question: `${n}² = ?`,
      reponse: `${n * n}`,
      explication: `${n}² = ${n} × ${n} = ${n * n}.`,
    };
  },
  (rng) => {
    const p = entier(rng, 1, 9) * 10;
    const n = entier(rng, 2, 9) * 10;
    return {
      question: `${p} % de ${n} = ?`,
      reponse: `${(p * n) / 100}`,
      explication: `${p} % de ${n} = ${n} × ${p}/100 = ${(p * n) / 100}.`,
    };
  },
];

const GENERATEURS: Record<Niveau, Generateur[]> = {
  "5eme": [...communs, ...par5eme],
  "4eme": [...communs.slice(0, 3), ...par4eme],
  "3eme": [...communs.slice(0, 2), ...par3eme],
};

/** La série du jour : 10 automatismes déterministes pour une date et un niveau donnés. */
export function serieDuJour(dateISO: string, niveau: Niveau): Automatisme[] {
  const rng = creerRng(`${dateISO}--${niveau}`);
  const pool = GENERATEURS[niveau];
  const serie: Automatisme[] = [];
  for (let i = 0; i < 10; i++) {
    const g = pool[Math.floor(rng() * pool.length)];
    serie.push(g(rng));
  }
  return serie;
}
