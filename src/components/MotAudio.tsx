"use client";

/**
 * Rend un texte dont chaque mot (russe) ou caractère (chinois) est cliquable
 * pour en écouter la prononciation, via la synthèse vocale du navigateur.
 * Ajoute aussi un lien vers Google Traduction pour la définition / la voix Google.
 * Pour les textes en français (lang commençant par "fr"), renvoie le texte tel quel.
 */

function parler(texte: string, lang: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const propre = texte.replace(/[.,;:!?«»"'()。，！？]/g, "").trim();
  if (!propre) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(propre);
  u.lang = lang;
  u.rate = 0.75;
  synth.speak(u);
}

function estChinois(lang: string) {
  return lang.startsWith("zh");
}

/** Découpe le texte en jetons ; marque ceux qui sont prononçables. */
function tokeniser(texte: string, lang: string): { mot: string; cliquable: boolean }[] {
  if (estChinois(lang)) {
    // Chaque caractère Han est cliquable ; pinyin, ponctuation et espaces ne le sont pas.
    return Array.from(texte).map((ch) => ({ mot: ch, cliquable: /[一-鿿]/.test(ch) }));
  }
  // Russe (et autres alphabets) : on garde les séparateurs, chaque mot contenant
  // une lettre cyrillique est cliquable.
  return texte
    .split(/(\s+)/)
    .map((seg) => ({ mot: seg, cliquable: /[Ѐ-ӿ]/.test(seg) }));
}

export function MotAudio({ texte, lang }: { texte: string; lang: string }) {
  const etranger = estChinois(lang) || lang.startsWith("ru");
  if (!etranger || !texte) return <>{texte}</>;

  const tokens = tokeniser(texte, lang);
  const cibleGoogle = estChinois(lang) ? "zh-CN" : "ru";
  const lienGoogle = `https://translate.google.com/?sl=${cibleGoogle}&tl=fr&text=${encodeURIComponent(
    texte
  )}&op=translate`;

  return (
    <span className="inline">
      <button
        onClick={(e) => {
          e.stopPropagation();
          parler(texte, lang);
        }}
        title="Écouter toute la phrase"
        aria-label="Écouter toute la phrase"
        className="mr-0.5 align-baseline text-brand-500 hover:text-brand-700"
      >
        🔊
      </button>
      {tokens.map((t, i) =>
        t.cliquable ? (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              parler(t.mot, lang);
            }}
            title="Écouter ce mot"
            className="rounded px-0.5 transition hover:bg-brand-100 hover:text-brand-700"
          >
            {t.mot}
          </button>
        ) : (
          <span key={i}>{t.mot}</span>
        )
      )}
      <a
        href={lienGoogle}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        title="Ouvrir dans Google Traduction"
        className="ml-1 align-super text-[10px] text-slate-400 hover:text-brand-600"
      >
        🔎
      </a>
    </span>
  );
}
