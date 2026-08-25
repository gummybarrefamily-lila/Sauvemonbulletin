import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { brevetGratuit, estConnecte } from "@/lib/acces";
import { BREVETS_BLANCS } from "@content/brevet";
import { matiereInfo } from "@content/curriculum";

export const metadata = { title: "Brevets blancs — SauveMonBulletin" };
export const dynamic = "force-dynamic";

export default async function PageBrevet() {
  const par4eme = BREVETS_BLANCS.filter((b) => b.niveau === "4eme");
  const par3eme = BREVETS_BLANCS.filter((b) => b.niveau === "3eme");
  const connecte = await estConnecte();
  const gratuit = brevetGratuit();

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900">🏆 Brevets blancs</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Des sujets complets au format du DNB, avec corrigés détaillés et conseils de méthode. À partir de la 4ème pour s'entraîner progressivement.
        </p>

        {[
          { titre: "Entraînement — 4ème", liste: par4eme },
          { titre: "Sujets type brevet — 3ème", liste: par3eme },
        ].map((groupe) => (
          <section key={groupe.titre} className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-slate-800">{groupe.titre}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {groupe.liste.map((b) => {
                const info = matiereInfo(b.matiere);
                return (
                  <Link key={b.slug} href={`/sujet-brevet?s=${b.slug}`} className="card group flex items-center justify-between p-5 transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{info.emoji}</span>
                      <div>
                        <h3 className="font-bold text-slate-800 group-hover:text-brand-700">
                          {!connecte && b.slug !== gratuit ? "🔒 " : ""}
                          {b.titre}
                        </h3>
                        <p className="text-sm text-slate-500">⏱️ {b.dureeMinutes} min · {b.parties.length} parties</p>
                        {!connecte && b.slug === gratuit && (
                          <span className="mt-1 inline-block rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-bold text-green-700">
                            Essai gratuit
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-brand-600">→</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
