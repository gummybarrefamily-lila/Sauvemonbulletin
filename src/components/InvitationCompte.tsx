import Link from "next/link";

/** Encart affiché à la place d'un contenu réservé aux membres (compte gratuit). */
export function InvitationCompte({ contenu }: { contenu: string }) {
  return (
    <div className="card p-8 text-center">
      <span className="text-5xl">🔒</span>
      <h3 className="mt-3 text-xl font-bold text-slate-900">{contenu} réservé aux membres</h3>
      <p className="mx-auto mt-3 max-w-md text-slate-600">
        SauveMonBulletin est <strong>gratuit</strong> : crée ton compte en 30 secondes pour tout débloquer,
        suivre ta progression et recevoir des révisions personnalisées.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/inscription" className="btn-primary px-6 py-3">
          Créer mon compte gratuit
        </Link>
        <Link href="/connexion" className="btn-ghost px-6 py-3">
          J&apos;ai déjà un compte
        </Link>
      </div>
    </div>
  );
}
