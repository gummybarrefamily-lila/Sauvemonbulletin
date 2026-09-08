"use client";

/** États possibles après une tentative d'enregistrement d'un résultat. */
export type EtatSauvegarde = "envoi" | "ok" | "erreur" | "invite" | null;

/**
 * Bannière de confirmation d'enregistrement, affichée après une activité
 * (automatismes, dictée, problèmes, hebdo). En cas d'échec, propose de renvoyer.
 */
export function EtatEnregistrement({ etat, onRenvoyer }: { etat: EtatSauvegarde; onRenvoyer?: () => void }) {
  if (!etat) return null;
  if (etat === "envoi") {
    return <p className="mt-3 rounded-xl bg-slate-50 px-4 py-2.5 text-sm text-slate-500">📤 Enregistrement en cours…</p>;
  }
  if (etat === "ok") {
    return (
      <p className="mt-3 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 text-sm text-green-800">
        ✅ Résultat enregistré ! Il compte pour <strong>Mes défis</strong> à partir de 70 % de réussite.
      </p>
    );
  }
  if (etat === "invite") {
    return (
      <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-800">
        💡 Résultat non enregistré : connecte-toi pour qu&apos;il compte dans <strong>Mes défis</strong>.
      </p>
    );
  }
  return (
    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5">
      <p className="text-sm text-red-700">⚠️ L&apos;enregistrement a échoué — ton résultat n&apos;est pas encore compté.</p>
      {onRenvoyer && (
        <button onClick={onRenvoyer} className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700">
          📤 Renvoyer mon résultat
        </button>
      )}
    </div>
  );
}
