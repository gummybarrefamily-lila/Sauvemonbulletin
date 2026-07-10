import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { MATIERES, NIVEAUX, matiereInfo, chapitresDe } from "@content/curriculum";
import type { MatiereId } from "@content/types";

export function generateStaticParams() {
  return MATIERES.map((m) => ({ matiere: m.id }));
}

export default function PageMatiere({ params }: { params: { matiere: string } }) {
  const info = MATIERES.find((m) => m.id === params.matiere);
  if (!info) notFound();
  const matiere = info.id as MatiereId;

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <Link href="/matieres" className="text-sm font-semibold text-brand-600 hover:underline">
          ← Toutes les matières
        </Link>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-5xl">{info.emoji}</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{info.nom}</h1>
            <p className="text-slate-500">{info.description}</p>
          </div>
        </div>

        {matiere === "maths" && (
          <Link href={`/automatismes`} className="mt-6 flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 p-4 hover:bg-amber-100">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-bold text-amber-900">Automatismes du jour</p>
                <p className="text-sm text-amber-700">10 calculs mentaux, tous les jours.</p>
              </div>
            </div>
            <span className="text-amber-700">→</span>
          </Link>
        )}

        {NIVEAUX.map((niv) => {
          const chapitres = chapitresDe(matiere, niv.id);
          if (chapitres.length === 0) return null;
          return (
            <section key={niv.id} className="mt-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">Programme de {niv.nom}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {chapitres.map((c, i) => (
                  <div
                    key={c.slug}
                    className={`card flex items-center justify-between p-4 ${c.disponible ? "" : "opacity-70"}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500">
                        {i + 1}
                      </span>
                      <span className="font-medium text-slate-800">{c.titre}</span>
                    </div>
                    {c.disponible ? (
                      <Link href={`/matieres/${matiere}/${niv.id}/${c.slug}`} className="btn-primary px-3 py-1.5 text-sm">
                        Ouvrir
                      </Link>
                    ) : (
                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-400">Bientôt</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
