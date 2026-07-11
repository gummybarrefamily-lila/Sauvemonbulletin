"use client";

import { useState } from "react";
import type { Slide } from "@content/types";
import { VoiceRecorder } from "./VoiceRecorder";
import { MotAudio } from "./MotAudio";

/**
 * Lecteur de cours en diapositives. Plus de voix off automatique : l'élève lit
 * le texte de la diapositive à voix haute, s'enregistre et se réécoute.
 * En chinois/russe (`lang`), les mots deviennent cliquables pour en écouter la prononciation.
 */
export function CoursSlides({ slides, idBase, lang = "fr-FR" }: { slides: Slide[]; idBase: string; lang?: string }) {
  const [i, setI] = useState(0);
  const slide = slides[i];

  function aller(n: number) {
    setI(Math.max(0, Math.min(slides.length - 1, n)));
  }

  return (
    <div>
      <div className="relative w-full rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-slate-50 shadow-sm">
        <div className="flex min-h-[20rem] flex-col p-6 sm:p-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">{slide.illustration ?? "📘"}</span>
            <h2 className="text-2xl font-extrabold text-brand-800 sm:text-3xl">{slide.titre}</h2>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-6 sm:flex-row sm:items-center">
            <ul className="flex-1 space-y-3">
              {slide.contenu.map((c, k) => (
                <li key={k} className="flex items-start gap-2.5 text-lg text-slate-700">
                  <span className="mt-1 text-brand-500">▸</span>
                  <span>
                    <MotAudio texte={c} lang={lang} />
                  </span>
                </li>
              ))}
            </ul>
            {slide.visuel && (
              <div className="flex items-center justify-center rounded-2xl bg-white/70 px-6 py-8 sm:w-2/5">
                <span className="text-center text-3xl font-black text-brand-700 sm:text-4xl">
                  <MotAudio texte={slide.visuel} lang={lang} />
                </span>
              </div>
            )}
          </div>
          <div className="mt-4 text-xs text-slate-400">
            Diapositive {i + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Script à lire à voix haute + enregistrement de sa propre voix */}
      <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-sm font-bold text-brand-800">🎙️ Lis ce texte à voix haute, puis réécoute-toi</h3>
          <VoiceRecorder id={`${idBase}-slide-${i}`} />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{slide.voixOff}</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <button onClick={() => aller(i - 1)} disabled={i === 0} className="btn-ghost disabled:opacity-40">
          ← Précédent
        </button>
        <button
          onClick={() => aller(i + 1)}
          disabled={i === slides.length - 1}
          className="btn-ghost disabled:opacity-40"
        >
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
