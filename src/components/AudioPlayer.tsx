"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lecteur audio par synthèse vocale (Web Speech API) — gratuit, sans fichier.
 * `lang` permet de lire le chinois (zh-CN) ou le russe (ru-RU) avec la bonne voix.
 */
export function AudioPlayer({
  texte,
  lang = "fr-FR",
  label = "Écouter",
  compact = false,
}: {
  texte: string;
  lang?: string;
  label?: string;
  compact?: boolean;
}) {
  const [supporte, setSupporte] = useState(true);
  const [enLecture, setEnLecture] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setSupporte(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function basculer() {
    if (!supporte) return;
    const synth = window.speechSynthesis;
    if (enLecture) {
      synth.cancel();
      setEnLecture(false);
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(texte);
    u.lang = lang;
    u.rate = lang.startsWith("fr") ? 1 : 0.85;
    u.onend = () => setEnLecture(false);
    u.onerror = () => setEnLecture(false);
    utterRef.current = u;
    synth.speak(u);
    setEnLecture(true);
  }

  if (!supporte) return null;

  return (
    <button
      onClick={basculer}
      className={
        compact
          ? "inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-2.5 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-100"
          : "btn-ghost text-sm"
      }
      aria-label={enLecture ? "Arrêter la lecture" : label}
    >
      <span>{enLecture ? "⏹️" : "🔊"}</span>
      {enLecture ? "Arrêter" : label}
    </button>
  );
}
