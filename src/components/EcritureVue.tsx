"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { EXERCICES_ECRITURE } from "@content/ecriture";
import { InvitationCompte } from "./InvitationCompte";

interface Evaluation {
  total: number;
  totalMax: number;
  criteres: { nom: string; note: number; max: number; commentaire: string }[];
  pointsForts: string[];
  ameliorations: string[];
  conseil: string;
}

function cleBrouillon(semaine: number, etape: number): string {
  return `ecriture-s${semaine}-e${etape}`;
}

function lireBrouillon(semaine: number, etape: number): string {
  try {
    return localStorage.getItem(cleBrouillon(semaine, etape)) ?? "";
  } catch {
    return "";
  }
}

/** Atelier d'écriture hebdomadaire : leçon, texte modèle, étapes guidées, envoi aux parents. */
export function EcritureVue() {
  const { data: session, status } = useSession();
  const invite = status === "unauthenticated"; // visiteur sans compte : seule la semaine 1 est ouverte
  const [idx, setIdx] = useState(0);
  const exercice = EXERCICES_ECRITURE[idx];
  const verrouille = invite && idx > 0;

  const [reponses, setReponses] = useState<string[]>([]);
  const [coches, setCoches] = useState<boolean[]>([]);
  const [envoi, setEnvoi] = useState(false);
  const [resultat, setResultat] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [evaluationEnCours, setEvaluationEnCours] = useState(false);
  const [erreurEvaluation, setErreurEvaluation] = useState<string | null>(null);

  // Ouvre par défaut l'exercice de la semaine en cours (semaine 1 = début septembre).
  useEffect(() => {
    if (status !== "authenticated") {
      setIdx(0);
      return;
    }
    const maintenant = new Date();
    const annee = maintenant.getMonth() >= 8 ? maintenant.getFullYear() : maintenant.getFullYear() - 1;
    const rentree = new Date(annee, 8, 1);
    const semaine = Math.max(1, Math.floor((maintenant.getTime() - rentree.getTime()) / 86400000 / 7) + 1);
    setIdx((semaine - 1) % EXERCICES_ECRITURE.length);
  }, [status]);

  // Recharge les brouillons quand on change de semaine.
  useEffect(() => {
    setReponses(exercice.etapes.map((_, e) => lireBrouillon(exercice.semaine, e)));
    setCoches(exercice.criteres.map(() => false));
    setResultat(null);
    setEvaluation(null);
    setErreurEvaluation(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  function ecrire(e: number, valeur: string) {
    setReponses((r) => {
      const copie = [...r];
      copie[e] = valeur;
      return copie;
    });
    try {
      localStorage.setItem(cleBrouillon(exercice.semaine, e), valeur);
    } catch {
      /* stockage indisponible : le brouillon vit en mémoire */
    }
  }

  const versionFinale = reponses[exercice.etapes.length - 1] ?? "";
  const nbMots = versionFinale.trim() ? versionFinale.trim().split(/\s+/).length : 0;

  async function evaluer() {
    setEvaluationEnCours(true);
    setErreurEvaluation(null);
    try {
      const rep = await fetch("/api/ecriture-evaluation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ semaine: exercice.semaine, texte: versionFinale }),
      });
      const data = await rep.json();
      if (!rep.ok) setErreurEvaluation("❌ " + (data.erreur ?? "L'évaluation n'a pas pu être réalisée."));
      else setEvaluation(data as Evaluation);
    } catch {
      setErreurEvaluation("❌ Impossible d'évaluer pour le moment. Réessaie dans un instant.");
    }
    setEvaluationEnCours(false);
  }

  async function envoyer() {
    setEnvoi(true);
    setResultat(null);
    try {
      const rep = await fetch("/api/ecriture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          semaine: exercice.semaine,
          titre: exercice.titre,
          texte: versionFinale,
          evaluation: evaluation
            ? { total: evaluation.total, totalMax: evaluation.totalMax, pointsForts: evaluation.pointsForts }
            : undefined,
        }),
      });
      const data = await rep.json();
      if (!rep.ok) setResultat("❌ " + (data.erreur ?? "Une erreur est survenue."));
      else if (data.envoye) setResultat("✅ Ta version finale a été envoyée à tes parents. Bravo !");
      else setResultat("✅ Ta rédaction est enregistrée. ⚠️ " + (data.raison ?? "Email non envoyé."));
    } catch {
      setResultat("❌ Impossible d'envoyer pour le moment. Réessaie dans un instant.");
    }
    setEnvoi(false);
  }

  return (
    <div className="mt-8">
      {/* Choix de la semaine */}
      <div className="flex flex-wrap gap-1.5">
        {EXERCICES_ECRITURE.map((ex, i) => (
          <button
            key={ex.semaine}
            onClick={() => setIdx(i)}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold ${
              i === idx ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {invite && i > 0 ? "🔒 " : ""}S{ex.semaine}
          </button>
        ))}
      </div>
      {invite && (
        <p className="mt-2 text-xs text-amber-600">
          🎁 Exercice d&apos;essai gratuit — crée un compte gratuit pour débloquer les 36 semaines et l&apos;envoi aux parents.
        </p>
      )}

      {verrouille ? (
        <div className="mt-6">
          <InvitationCompte contenu={`L'exercice d'écriture de la semaine ${exercice.semaine} est un contenu`} />
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {/* Leçon */}
          <div className="card p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-800">
                Semaine {exercice.semaine}
              </span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                🎓 {exercice.competence}
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">{exercice.titre}</h2>
            <div className="mt-3 space-y-3">
              {exercice.lecon.map((p, i) => (
                <p key={i} className="leading-relaxed text-slate-700">{p}</p>
              ))}
            </div>
            {exercice.modele && (
              <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
                <p className="text-sm font-bold text-brand-800">📖 {exercice.modele.titre}</p>
                <p className="mt-2 text-sm italic leading-relaxed text-slate-700">{exercice.modele.texte}</p>
              </div>
            )}
          </div>

          {/* Texte d'appui (extrait d'œuvre) */}
          {exercice.support && (
            <div className="card p-6">
              <h3 className="font-bold text-slate-900">📜 {exercice.support.titre}</h3>
              <div className="mt-3 max-h-96 overflow-y-auto whitespace-pre-line rounded-2xl border border-amber-100 bg-amber-50/40 p-4 text-sm leading-relaxed text-slate-800">
                {exercice.support.extrait}
              </div>
              <p className="mt-2 text-right text-xs italic text-slate-500">{exercice.support.source}</p>
              {exercice.support.notes && exercice.support.notes.length > 0 && (
                <details className="mt-2">
                  <summary className="cursor-pointer select-none text-sm font-semibold text-brand-700">
                    💡 Vocabulaire ({exercice.support.notes.length} mots expliqués)
                  </summary>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    {exercice.support.notes.map((n, i) => (
                      <li key={i}>• {n}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          )}

          {/* Étapes guidées */}
          {exercice.etapes.map((etape, e) => {
            const finale = e === exercice.etapes.length - 1;
            return (
              <div key={e} className={`card p-6 ${finale ? "border-brand-200" : ""}`}>
                <h3 className="font-bold text-slate-900">
                  {finale ? "🏁 " : `${e + 1}. `}
                  {etape.titre}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">{etape.consigne}</p>
                <textarea
                  value={reponses[e] ?? ""}
                  onChange={(ev) => ecrire(e, ev.target.value)}
                  placeholder={etape.amorce ?? "Écris ici… (ton brouillon est sauvegardé automatiquement sur cet appareil)"}
                  rows={finale ? 12 : 4}
                  className="mt-3 w-full rounded-xl border border-slate-200 p-3 text-sm leading-relaxed focus:border-brand-400 focus:outline-none"
                />
                {finale && (
                  <p className="mt-1 text-right text-xs text-slate-400">{nbMots} mot{nbMots > 1 ? "s" : ""}</p>
                )}
              </div>
            );
          })}

          {/* Auto-vérification */}
          <div className="card p-6">
            <h3 className="font-bold text-slate-900">✅ Avant d&apos;envoyer, vérifie :</h3>
            <div className="mt-3 space-y-2">
              {exercice.criteres.map((c, i) => (
                <label key={i} className="flex cursor-pointer items-start gap-2.5 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={coches[i] ?? false}
                    onChange={() =>
                      setCoches((prev) => {
                        const copie = [...prev];
                        copie[i] = !copie[i];
                        return copie;
                      })
                    }
                    className="mt-0.5 h-4 w-4 accent-brand-600"
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Évaluation par le tuteur IA */}
          <div className="card p-6">
            <h3 className="font-bold text-slate-900">🤖 Soumets ton travail au tuteur</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Le tuteur évalue ta rédaction avec la grille officielle d&apos;écriture persuasive : 10 critères, note sur 48.
              Tu peux améliorer ton texte et resoumettre autant de fois que tu veux avant de l&apos;envoyer à tes parents.
            </p>
            {session ? (
              <div className="mt-4">
                <button
                  onClick={evaluer}
                  disabled={evaluationEnCours || versionFinale.trim().length < 30}
                  className="btn-primary px-5 py-2.5 disabled:opacity-40"
                >
                  {evaluationEnCours
                    ? "Évaluation en cours… (quelques secondes)"
                    : evaluation
                      ? "🔄 Resoumettre ma version améliorée"
                      : "🚀 Soumettre pour évaluation"}
                </button>
                {erreurEvaluation && <p className="mt-3 text-sm font-medium text-red-600">{erreurEvaluation}</p>}
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-500">Connecte-toi pour soumettre ta rédaction au tuteur.</p>
            )}

            {evaluation && (
              <div className="mt-5">
                <div className="flex items-center gap-3 rounded-2xl bg-brand-50 p-4">
                  <span className="text-3xl">{evaluation.total >= evaluation.totalMax * 0.7 ? "🎉" : "💪"}</span>
                  <div>
                    <p className="text-2xl font-extrabold text-brand-800">
                      {evaluation.total} / {evaluation.totalMax}
                    </p>
                    <p className="text-xs text-slate-500">Grille d&apos;écriture persuasive — 10 critères</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {evaluation.criteres.map((c, i) => (
                    <div key={i} className="rounded-xl border border-slate-100 p-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-700">{c.nom}</span>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                            c.note >= c.max * 0.7 ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {c.note} / {c.max}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full ${c.note >= c.max * 0.7 ? "bg-green-500" : "bg-amber-500"}`}
                          style={{ width: `${Math.round((c.note / c.max) * 100)}%` }}
                        />
                      </div>
                      <p className="mt-1.5 text-xs text-slate-500">{c.commentaire}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                    <p className="text-sm font-bold text-green-900">🌟 Tes points forts</p>
                    <ul className="mt-2 space-y-1 text-sm text-green-900">
                      {evaluation.pointsForts.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <p className="text-sm font-bold text-amber-900">🔧 À améliorer</p>
                    <ul className="mt-2 space-y-1 text-sm text-amber-900">
                      {evaluation.ameliorations.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-3 rounded-2xl bg-brand-50 p-4 text-sm text-brand-900">
                  💡 <strong>Le conseil du tuteur :</strong> {evaluation.conseil}
                </p>
              </div>
            )}
          </div>

          {/* Envoi aux parents */}
          <div className="card p-6 text-center">
            {session ? (
              <>
                <button
                  onClick={envoyer}
                  disabled={envoi || versionFinale.trim().length < 30}
                  className="btn-primary px-6 py-3 disabled:opacity-40"
                >
                  {envoi ? "Envoi en cours…" : "📧 Envoyer ma version finale à mes parents"}
                </button>
                {versionFinale.trim().length < 30 && (
                  <p className="mt-2 text-xs text-slate-400">Rédige d&apos;abord ta version finale dans la dernière étape.</p>
                )}
                {evaluation && (
                  <p className="mt-2 text-xs text-slate-400">
                    Ton évaluation ({evaluation.total}/{evaluation.totalMax}) et tes points forts seront joints à l&apos;email.
                  </p>
                )}
                {resultat && <p className="mt-3 text-sm font-medium text-slate-700">{resultat}</p>}
              </>
            ) : (
              <p className="text-sm text-slate-500">
                Connecte-toi pour envoyer ta version finale à tes parents par email.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
