"use client";

/**
 * Pour les textes en chinois ou en russe, ajoute un petit lien vers Google
 * Traduction : l'élève y voit la traduction ET peut écouter la prononciation
 * (voix Google, fiable sur tous les appareils).
 * Pour le français (lang commençant par "fr"), renvoie le texte tel quel.
 */
export function MotAudio({ texte, lang }: { texte: string; lang: string }) {
  const chinois = lang.startsWith("zh");
  const etranger = chinois || lang.startsWith("ru");
  if (!etranger || !texte) return <>{texte}</>;

  const cible = chinois ? "zh-CN" : "ru";
  const lien = `https://translate.google.com/?sl=${cible}&tl=fr&text=${encodeURIComponent(texte)}&op=translate`;

  return (
    <span>
      {texte}
      <a
        href={lien}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        title="Traduire et écouter sur Google Traduction"
        className="ml-1 inline-flex items-center gap-0.5 rounded bg-brand-50 px-1.5 py-0.5 align-middle text-[11px] font-semibold text-brand-700 hover:bg-brand-100"
      >
        🔊 Traduire
      </a>
    </span>
  );
}
