import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { estConnecte, methodeGratuite } from "@/lib/acces";
import { METHODES } from "@content/methodes";

export const metadata = { title: "Méthodes & techniques — SauveMonBulletin" };
export const dynamic = "force-dynamic";

const CATEGORIES: Record<string, { nom: string; emoji: string }> = {
  apprentissage: { nom: "Apprendre efficacement", emoji: "🧠" },
  redaction: { nom: "Rédaction & analyse", emoji: "✍️" },
  brevet: { nom: "Spécial brevet", emoji: "🏆" },
  oral: { nom: "L'oral", emoji: "🎤" },
};

export default async function PageMethodes() {
  const connecte = await estConnecte();
  const gratuite = methodeGratuite();
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900">💡 Méthodes & techniques</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Les astuces des meilleurs pour gagner des points : intro et conclusion parfaites, plan de rédaction, développement construit, dictée, oral… Chaque fiche a des exercices pratiques corrigés.
        </p>

        {Object.entries(CATEGORIES).map(([cat, info]) => {
          const fiches = METHODES.filter((m) => m.categorie === cat);
          if (fiches.length === 0) return null;
          return (
            <section key={cat} className="mt-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">
                {info.emoji} {info.nom}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {fiches.map((m) => (
                  <Link key={m.slug} href={`/methode?s=${m.slug}`} className="card group flex items-start gap-3 p-5 transition hover:-translate-y-0.5 hover:shadow-md">
                    <span className="text-3xl">{m.emoji}</span>
                    <div>
                      <h3 className="font-bold text-slate-800 group-hover:text-brand-700">
                        {!connecte && m.slug !== gratuite ? "🔒 " : ""}
                        {m.titre}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{m.accroche}</p>
                      {!connecte && m.slug === gratuite && (
                        <span className="mt-1 inline-block rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-bold text-green-700">
                          Essai gratuit
                        </span>
                      )}
                    </div>
                  </Link>
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
