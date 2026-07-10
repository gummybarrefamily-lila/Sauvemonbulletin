import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { MATIERES } from "@content/curriculum";

export const metadata = { title: "Les matières — SauveMonBulletin" };

export default function Matieres() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900">Les matières</h1>
        <p className="mt-2 text-slate-500">Choisis une matière pour accéder aux chapitres, cours, fiches et exercices.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MATIERES.map((m) => (
            <Link key={m.id} href={`/matieres/${m.id}`} className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-md">
              <span className="text-4xl">{m.emoji}</span>
              <h2 className="mt-3 text-lg font-bold text-slate-800 group-hover:text-brand-700">{m.nom}</h2>
              <p className="mt-1 text-sm text-slate-500">{m.description}</p>
              {m.danseEtudes && (
                <span className="mt-3 inline-block w-fit rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-xs font-semibold text-fuchsia-700">
                  Danse-études
                </span>
              )}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
