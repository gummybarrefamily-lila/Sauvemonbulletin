"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export function NavBar() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-brand-700">
          <span className="text-2xl">🎓</span>
          <span>SauveMonBulletin</span>
        </Link>
        <nav className="flex items-center gap-2 text-sm font-semibold">
          <Link href="/matieres" className="hidden rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 sm:block">
            Matières
          </Link>
          <Link href="/methodes" className="hidden rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 sm:block">
            Méthodes
          </Link>
          <Link href="/brevet" className="hidden rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 sm:block">
            Brevet blanc
          </Link>
          <Link href="/bilan" className="hidden rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 lg:block">
            Bilan
          </Link>
          {session ? (
            <>
              <Link href="/tableau-de-bord" className="btn-ghost px-3 py-2">
                Mon espace
              </Link>
              <button onClick={() => signOut({ callbackUrl: "/" })} className="rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-100">
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link href="/connexion" className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100">
                Connexion
              </Link>
              <Link href="/inscription" className="btn-primary px-3 py-2">
                S'inscrire
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
