"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { DICTEES } from "@content/dictees";
import { diffDictee } from "@/lib/dictee-diff";

/** Dictée hebdomadaire : lue par l'ordinateur, l'élève tape, un correcteur repère les fautes. */
export function DicteeVue() {
  const { data: session } = useSession();
  const [niveau, setNiveau] = useState<"5eme" | "4eme" | "3eme">("5eme");
  const dictees = DICTEES.filter((d) => d.niveau === niveau).sort((a, b) => a.semaine - b.semaine);
  const [idx, setIdx] = useState(0);
  const dictee = dictees[idx];

  const [saisie, setSaisie] = useState("");
  const [corrige, setCorrige] = useState(false);
  const [lecture, setLecture] = useState(false);
  const [vitesse, setVitesse] = useState(0.75);
  const [supporteVoix, setSupporteVoix] = useState(true);

  useEffect(() => {
    setSupporteVoix(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  // Réinitialise quand on change de dictée.
  useEffect(() => {
    setSaisie("");
    setCorrige(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setLecture(false);
  }, [niveau, idx]);

  function lire() {
    if (!supporteVoix || !dictee) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(dictee.texte);
    u.lang = "fr-FR";
    u.rate = vitesse;
    u.onend = () => setLecture(false);
    u.onerror = () => setLecture(false);
    synth.speak(u);
    setLecture(true);
  }

  function stop() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setLecture(false);
  }

  const resultat = corrige && dictee ? diffDictee(dictee.texte, saisie) : null;

  async function corriger() {
    stop();
    setCorrige(true);
    if (session && dictee) {
      const r = diffDictee(dictee.texte, saisie);
      const motsRef = dictee.texte.trim().split(/\s+/).length;
      const score = Math.max(0, motsRef - r.erreurs);
      try {
        await fetch("/api/activite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "dictee", matiere: "francais", niveau, score, scoreMax: motsRef }),
        });
      } catch {
        /* silencieux */
      }
    }
  }

  return (
    <div className="mt-6">
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {(["5eme", "4eme", "3eme"] as const).map((n) => (
          <button
            key={n}
            onClick={() => {
              setNiveau(n);
              setIdx(0);
            }}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
              niveau === n ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {n === "5eme" ? "5ème" : n === "4eme" ? "4ème" : "3ème"}
          </button>
        ))}
      </div>

      {!dictee ? (
        <p className="rounded-2xl bg-slate-50 p-6 text-center text-slate-500">
          Les dictées pour ce niveau arrivent bientôt.
        </p>
      ) : (
        <div className="space-y-5">
          {/* Choix de la semaine */}
          <div className="flex flex-wrap gap-1.5">
            {dictees.map((d, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                  i === idx ? "bg-brand-100 text-brand-800" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                Semaine {d.semaine}
              </button>
            ))}
          </div>

          <div className="card p-5">
            <h2 className="text-lg font-bold text-slate-900">Semaine {dictee.semaine} — {dictee.titre}</h2>
            {dictee.auteur && <p className="text-sm italic text-slate-400">{dictee.auteur}</p>}

            {/* Lecture audio */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {!supporteVoix ? (
                <p className="text-sm text-red-500">La lecture vocale n&apos;est pas disponible sur ce navigateur.</p>
              ) : lecture ? (
                <button onClick={stop} className="btn-primary">⏹️ Arrêter</button>
              ) : (
                <button onClick={lire} className="btn-primary">🔊 Écouter la dictée</button>
              )}
              <label className="flex items-center gap-2 text-sm text-slate-500">
                Vitesse
                <select
                  value={vitesse}
                  onChange={(e) => setVitesse(Number(e.target.value))}
                  className="rounded-lg border border-slate-200 px-2 py-1 text-sm"
                >
                  <option value={0.6}>Lente</option>
                  <option value={0.75}>Normale</option>
                  <option value={0.9}>Rapide</option>
                </select>
              </label>
              <span className="text-xs text-slate-400">Réécoute autant de fois que nécessaire.</span>
            </div>

            {/* Saisie */}
            <textarea
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              placeholder="Tape ici le texte de la dictée au fur et à mesure…"
              className="mt-4 h-40 w-full rounded-xl border border-slate-200 p-3 text-slate-700 focus:border-brand-400 focus:outline-none"
            />

            <div className="mt-3 flex gap-2">
              {!corrige ? (
                <button onClick={corriger} disabled={!saisie.trim()} className="btn-primary disabled:opacity-40">
                  ✅ Corriger
                </button>
              ) : (
                <button
                  onClick={() => {
                    setCorrige(false);
                    setSaisie("");
                  }}
                  className="btn-ghost"
                >
                  ↻ Recommencer
                </button>
              )}
            </div>
          </div>

          {/* Correction */}
          {resultat && (
            <div className="card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900">Correction</h3>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-bold ${
                    resultat.erreurs === 0 ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {resultat.erreurs === 0 ? "Sans faute ! 🎉" : `${resultat.erreurs} erreur${resultat.erreurs > 1 ? "s" : ""}`}
                </span>
              </div>

              <p className="mt-3 leading-relaxed">
                {resultat.parts.map((p, i) =>
                  p.type === "egal" ? (
                    <span key={i} className="text-slate-700">{p.texte} </span>
                  ) : p.type === "faux" ? (
                    <span key={i} className="text-red-600 line-through">{p.texte} </span>
                  ) : (
                    <span key={i} className="rounded bg-green-100 px-1 font-semibold text-green-800">{p.texte} </span>
                  )
                )}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                <span className="text-red-600 line-through">rouge barré</span> = ce que tu as écrit en trop ou mal
                orthographié · <span className="rounded bg-green-100 px-1 text-green-800">vert</span> = le mot correct attendu.
              </p>

              <div className="mt-4 rounded-xl bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-600">Texte correct :</p>
                <p className="mt-1 text-slate-700">{dictee.texte}</p>
              </div>

              {dictee.pointsVigilance.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-bold text-brand-800">💡 Les pièges de cette dictée</h4>
                  <ul className="mt-2 space-y-2">
                    {dictee.pointsVigilance.map((pv, i) => (
                      <li key={i} className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm">
                        <span className="font-bold text-amber-900">« {pv.extrait} »</span>
                        <span className="text-amber-900"> — {pv.explication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
