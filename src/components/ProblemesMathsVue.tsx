"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { PROBLEMES_MATHS } from "@content/problemes-maths";
import { Quiz } from "./Quiz";
import { InvitationCompte } from "./InvitationCompte";
import { EtatEnregistrement, type EtatSauvegarde } from "./EtatEnregistrement";

/** Problèmes de mathématiques de la semaine (raisonnement, mises en situation). */
export function ProblemesMathsVue() {
  const { data: session, status } = useSession();
  const invite = status === "unauthenticated"; // visiteur sans compte : seule la 1ère série est ouverte
  const [niveau, setNiveau] = useState<"6eme" | "5eme" | "4eme" | "3eme">("5eme");
  const series = PROBLEMES_MATHS.filter((p) => p.niveau === niveau).sort((a, b) => a.semaine - b.semaine);
  const [idx, setIdx] = useState(0);
  const [sauvegarde, setSauvegarde] = useState<EtatSauvegarde>(null);
  const dernierResultat = useRef<{ niv: string; score: number; scoreMax: number } | null>(null);
  const serie = series[idx];
  const verrouille = invite && idx > 0;

  // Ouvre par défaut la série de la semaine en cours (semaine 1 = début septembre).
  // Pour un visiteur sans compte, on reste sur la série d'essai (semaine 1).
  useEffect(() => {
    if (status !== "authenticated") {
      setIdx(0);
      return;
    }
    const maintenant = new Date();
    const annee = maintenant.getMonth() >= 8 ? maintenant.getFullYear() : maintenant.getFullYear() - 1;
    const rentree = new Date(annee, 8, 1);
    const semaine = Math.max(1, Math.floor((maintenant.getTime() - rentree.getTime()) / 86400000 / 7) + 1);
    const liste = PROBLEMES_MATHS.filter((p) => p.niveau === niveau).sort((a, b) => a.semaine - b.semaine);
    if (liste.length === 0) return;
    let i = liste.findIndex((p) => p.semaine === semaine);
    if (i < 0) i = (semaine - 1) % liste.length;
    setIdx(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [niveau, status]);

  // La bannière d'enregistrement ne concerne que la série en cours.
  useEffect(() => {
    setSauvegarde(null);
    dernierResultat.current = null;
  }, [idx, niveau]);

  async function enregistrer(niv: string, score: number, scoreMax: number) {
    dernierResultat.current = { niv, score, scoreMax };
    if (!session) {
      setSauvegarde("invite");
      return;
    }
    setSauvegarde("envoi");
    try {
      const rep = await fetch("/api/activite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "problemes", matiere: "maths", niveau: niv, score, scoreMax }),
      });
      setSauvegarde(rep.ok ? "ok" : "erreur");
    } catch {
      setSauvegarde("erreur");
    }
  }

  function renvoyer() {
    const d = dernierResultat.current;
    if (d) enregistrer(d.niv, d.score, d.scoreMax);
  }

  return (
    <div className="mt-6">
      <div className="mb-5 flex gap-1.5">
        {(["6eme", "5eme", "4eme", "3eme"] as const).map((n) => (
          <button
            key={n}
            onClick={() => setNiveau(n)}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
              niveau === n ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {n === "6eme" ? "6ème" : n === "5eme" ? "5ème" : n === "4eme" ? "4ème" : "3ème"}
          </button>
        ))}
      </div>

      {!serie ? (
        <p className="rounded-2xl bg-slate-50 p-6 text-center text-slate-500">
          Les problèmes de la semaine pour ce niveau arrivent bientôt.
        </p>
      ) : (
        <div className="space-y-5">
          {/* Choix de la semaine */}
          <div className="flex flex-wrap gap-1.5">
            {series.map((s, i) => (
              <button
                key={s.semaine}
                onClick={() => setIdx(i)}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold ${
                  i === idx ? "bg-brand-100 text-brand-800" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {invite && i > 0 ? "🔒 " : ""}S{s.semaine}
              </button>
            ))}
          </div>

          {invite && idx === 0 && (
            <p className="rounded-xl bg-green-50 px-4 py-2 text-sm text-green-800">
              🎁 Série d&apos;essai gratuite — crée un compte gratuit pour débloquer toutes les semaines.
            </p>
          )}

          {verrouille ? (
            <InvitationCompte contenu={`La série de la semaine ${serie.semaine} est un contenu`} />
          ) : (
          <div className="card p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                S{serie.semaine}
              </span>
              <div>
                <h2 className="font-bold text-slate-900">
                  Semaine {serie.semaine} — {serie.titre}
                </h2>
                <p className="text-sm text-slate-500">🧩 {serie.theme}</p>
              </div>
            </div>
            <Quiz questions={serie.questions} filtrable={false} onTermine={(sc, m) => enregistrer(serie.niveau, sc, m)} />
            <EtatEnregistrement etat={sauvegarde} onRenvoyer={renvoyer} />
          </div>
          )}
        </div>
      )}
    </div>
  );
}
