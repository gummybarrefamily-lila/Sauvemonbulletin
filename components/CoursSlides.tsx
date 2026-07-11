"use client";

import { useEffect, useState } from "react";
import type { Slide } from "@content/types";

/** Lecteur de cours en diapositives, avec voix off (synthèse vocale) et navigation. */
export function CoursSlides({ slides, lang = "fr-FR" }: { slides: Slide[]; lang?: string }) {
  const [i, setI] = useState(0);
  const [lecture, setLecture] = useState(false);
  const [auto, setAuto] = useState(false);
  const slide = slides[i];

  function lire(index: number, enchainer: boolean) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(slides[index].voixOff);
    u.lang = lang;
    u.rate = lang.startsWith("fr") ? 1 : 0.85;
    u.onstart = () => setLecture(true);
    u.onend = () => {
      setLecture(false);
      if (enchainer && index < slides.length - 1) {
        setI(index + 1);
      } else if (enchainer) {
        setAuto(false);
      }
    };
    u.onerror = () => setLecture(false);
    synth.speak(u);
  }

  // Enchaînement automatique.
  useEffect(() => {
    if (auto) lire(i, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, auto]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  function stop() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setLecture(false);
    setAuto(false);
  }

  function aller(n: number) {
    stop();
    setI(Math.max(0, Math.min(slides.length - 1, n)));
  }

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-slate-50 shadow-sm">
        <div className="flex h-full flex-col p-8 sm:p-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">{slide.illustration ?? "📘"}</span>
            <h2 className="text-2xl font-extrabold text-brand-800 sm:text-3xl">{slide.titre}</h2>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-6 sm:flex-row sm:items-center">
            <ul className="flex-1 space-y-3">
              {slide.contenu.map((c, k) => (
                <li key={k} className="flex items-start gap-2.5 text-lg text-slate-700">
                  <span className="mt-1 text-brand-500">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            {slide.visuel && (
              <div className="flex items-center justify-center rounded-2xl bg-white/70 px-6 py-8 sm:w-2/5">
                <span className="text-center text-3xl font-black text-brand-700 sm:text-4xl">{slide.visuel}</span>
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <span>
              Diapositive {i + 1} / {slides.length}
            </span>
            {lecture && <span className="flex items-center gap-1 text-brand-500">🔊 lecture…</span>}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <button onClick={() => aller(i - 1)} disabled={i === 0} className="btn-ghost disabled:opacity-40">
          ← Précédent
        </button>
        {lecture || auto ? (
          <button onClick={stop} className="btn-primary">
            ⏹️ Arrêter
          </button>
        ) : (
          <>
            <button onClick={() => lire(i, false)} className="btn-ghost">
              🔊 Écouter
            </button>
            <button onClick={() => setAuto(true)} className="btn-primary">
              ▶️ Lecture auto
            </button>
          </>
        )}
        <button onClick={() => aller(i + 1)} disabled={i === slides.length - 1} className="btn-ghost disabled:opacity-40">
          Suivant →
        </button>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {slides.map((_, k) => (
          <button
            key={k}
            onClick={() => aller(k)}
            className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-brand-600" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
            aria-label={`Diapositive ${k + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
