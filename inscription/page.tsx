"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MATIERES } from "@content/curriculum";

export default function Inscription() {
  const router = useRouter();
  const [form, setForm] = useState({
    prenom: "",
    email: "",
    motDePasse: "",
    niveau: "5eme",
    emailParent: "",
    danseEtudes: false,
  });
  const [matieres, setMatieres] = useState<string[]>([]);
  const [erreur, setErreur] = useState("");
  const [charge, setCharge] = useState(false);

  function toggleMatiere(id: string) {
    setMatieres((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));
  }

  async function soumettre(e: React.FormEvent) {
    e.preventDefault();
    setErreur("");
    setCharge(true);
    const res = await fetch("/api/inscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, matieres }),
    });
    const data = await res.json();
    if (!res.ok) {
      setErreur(data.erreur ?? "Une erreur est survenue.");
      setCharge(false);
      return;
    }
    await signIn("credentials", {
      email: form.email,
      motDePasse: form.motDePasse,
      redirect: false,
    });
    router.push("/tableau-de-bord");
    router.refresh();
  }

  const matieresDispo = MATIERES.filter((m) => !m.danseEtudes || form.danseEtudes);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-brand-50 to-white px-4 py-10">
      <div className="w-full max-w-lg">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2 text-2xl font-extrabold text-brand-700">
          🎓 SauveMonBulletin
        </Link>
        <div className="card p-8">
          <h1 className="text-2xl font-bold text-slate-900">Créer mon compte</h1>
          <p className="mt-1 text-sm text-slate-500">Quelques infos et c'est parti.</p>
          <form onSubmit={soumettre} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-700">Prénom</label>
                <input
                  required
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-brand-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Classe</label>
                <select
                  value={form.niveau}
                  onChange={(e) => setForm({ ...form, niveau: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-brand-500 focus:outline-none"
                >
                  <option value="5eme">5ème</option>
                  <option value="4eme">4ème</option>
                  <option value="3eme">3ème</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-brand-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Mot de passe</label>
              <input
                type="password"
                required
                minLength={6}
                value={form.motDePasse}
                onChange={(e) => setForm({ ...form, motDePasse: e.target.value })}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-brand-500 focus:outline-none"
              />
              <p className="mt-1 text-xs text-slate-400">Au moins 6 caractères.</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Email du parent (pour le compte rendu hebdo)</label>
              <input
                type="email"
                value={form.emailParent}
                onChange={(e) => setForm({ ...form, emailParent: e.target.value })}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-brand-500 focus:outline-none"
                placeholder="parent@email.com (facultatif)"
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={form.danseEtudes}
                onChange={(e) => setForm({ ...form, danseEtudes: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300"
              />
              Je suis en filière <strong>danse-études</strong> (débloque russe LV2 & histoire de la danse)
            </label>

            <div>
              <p className="text-sm font-semibold text-slate-700">Mes matières</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {matieresDispo.map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => toggleMatiere(m.id)}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                      matieres.includes(m.id)
                        ? "border-brand-500 bg-brand-50 text-brand-700"
                        : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {m.emoji} {m.nom}
                  </button>
                ))}
              </div>
            </div>

            {erreur && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{erreur}</p>}
            <button type="submit" disabled={charge} className="btn-primary w-full disabled:opacity-60">
              {charge ? "Création…" : "Créer mon compte"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            Déjà inscrit ?{" "}
            <Link href="/connexion" className="font-semibold text-brand-600 hover:underline">
              Connecte-toi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
