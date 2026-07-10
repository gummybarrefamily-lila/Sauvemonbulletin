"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import type { Chapitre } from "@content/types";
import { CoursSlides } from "./CoursSlides";
import { Quiz } from "./Quiz";
import { AudioPlayer } from "./AudioPlayer";
import { MemoCards } from "./MemoCards";
import { Examen } from "./Examen";

type Onglet = "cours" | "fiche" | "memo" | "exercices" | "examens";

const ONGLETS: { id: Onglet; label: string; emoji: string }[] = [
  { id: "cours", label: "Cours", emoji: "🎬" },
  { id: "fiche", label: "Fiche", emoji: "📝" },
  { id: "memo", label: "Cartes mémo", emoji: "🃏" },
  { id: "exercices", label: "Exercices", emoji: "✏️" },
  { id: "examens", label: "Examens", emoji: "🎯" },
];

export function ChapitreVue({ chapitre }: { chapitre: Chapitre }) {
  const [onglet, setOnglet] = useState<Onglet>("cours");
  const { data: session } = useSession();
  const langue = chapitre.langueVoix ?? "fr-FR";

  async function enregistrer(type: string, score: number, scoreMax: number) {
    if (!session) return;
    try {
      await fetch("/api/activite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          matiere: chapitre.matiere,
          niveau: chapitre.niveau,
          chapitre: chapitre.slug,
          score,
          scoreMax,
        }),
      });
    } catch {
      /* silencieux */
    }
  }

  return (
    <div className="mt-6">
      <div className="mb-6 flex flex-wrap gap-1.5 border-b border-slate-200 pb-2">
        {ONGLETS.map((o) => (
          <button
            key={o.id}
            onClick={() => setOnglet(o.id)}
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
              onglet === o.id ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="mr-1.5">{o.emoji}</span>
            {o.label}
          </button>
        ))}
      </div>

      {onglet === "cours" && (
        <div>
          <div className="mb-4 rounded-2xl bg-brand-50 p-4">
            <h2 className="font-bold text-brand-800">🎯 Objectifs du chapitre</h2>
            <ul className="mt-2 space-y-1 text-sm text-brand-900">
              {chapitre.objectifs.map((o, i) => (
                <li key={i}>• {o}</li>
              ))}
            </ul>
          </div>
          <CoursSlides slides={chapitre.slides} lang={langue} />
        </div>
      )}

      {onglet === "fiche" && (
        <div className="card p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900">Fiche de révision</h2>
            <AudioPlayer texte={chapitre.fiche.audio} label="Écouter la fiche" />
          </div>
          <p className="mt-3 rounded-xl bg-slate-50 p-3 text-slate-700">{chapitre.fiche.intro}</p>
          <div className="prose-fiche mt-4">
            {chapitre.fiche.sections.map((s, i) => (
              <div key={i}>
                <h3>{s.titre}</h3>
                <ul className="space-y-1.5 text-slate-700">
                  {s.points.map((p, k) => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="mt-1 text-brand-500">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="font-bold text-amber-900">⭐ À retenir absolument</h3>
            <ul className="mt-2 space-y-1 text-sm text-amber-900">
              {chapitre.syntheseRevisions.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {onglet === "memo" && <MemoCards cards={chapitre.memoCards} titre={chapitre.titre} lang={langue} />}

      {onglet === "exercices" && (
        <div className="space-y-8">
          <Quiz
            titre="Exercices d'entraînement"
            questions={chapitre.exercices}
            onTermine={(s, m) => enregistrer("exercices", s, m)}
          />
          <div className="rounded-2xl bg-slate-50 p-5">
            <Quiz
              titre="🔁 Révision de fin de chapitre"
              questions={chapitre.revisionFinChapitre}
              filtrable={false}
              onTermine={(s, m) => enregistrer("revision", s, m)}
            />
          </div>
        </div>
      )}

      {onglet === "examens" && (
        <div className="space-y-6">
          {chapitre.examens.map((ex, i) => (
            <Examen key={i} examen={ex} onTermine={(s, m) => enregistrer("examen", s, m)} />
          ))}
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
            <h3 className="font-bold text-green-900">📌 Synthèse des révisions</h3>
            <ul className="mt-2 space-y-1 text-sm text-green-900">
              {chapitre.syntheseRevisions.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {!session && (
        <p className="mt-6 text-center text-xs text-slate-400">
          💡 Connecte-toi pour enregistrer ta progression et recevoir des révisions personnalisées.
        </p>
      )}
    </div>
  );
}
