"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Connexion() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [charge, setCharge] = useState(false);

  async function soumettre(e: React.FormEvent) {
    e.preventDefault();
    setErreur("");
    setCharge(true);
    const res = await signIn("credentials", { email, motDePasse, redirect: false });
    setCharge(false);
    if (res?.error) {
      setErreur("Email ou mot de passe incorrect.");
    } else {
      router.push("/tableau-de-bord");
      router.refresh();
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-brand-50 to-white px-4">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2 text-2xl font-extrabold text-brand-700">
          🎓 SauveMonBulletin
        </Link>
        <div className="card p-8">
          <h1 className="text-2xl font-bold text-slate-900">Connexion</h1>
          <p className="mt-1 text-sm text-slate-500">Content de te revoir !</p>
          <form onSubmit={soumettre} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-brand-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Mot de passe</label>
              <input
                type="password"
                required
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-brand-500 focus:outline-none"
              />
            </div>
            {erreur && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{erreur}</p>}
            <button type="submit" disabled={charge} className="btn-primary w-full disabled:opacity-60">
              {charge ? "Connexion…" : "Se connecter"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            Pas encore de compte ?{" "}
            <Link href="/inscription" className="font-semibold text-brand-600 hover:underline">
              Inscris-toi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
