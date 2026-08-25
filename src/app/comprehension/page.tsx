import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { comprehensionGratuite, estConnecte } from "@/lib/acces";
import { COMPREHENSION } from "@content/comprehension";

export const metadata = { title: "Compréhension de texte — SauveMonBulletin" };
export const dynamic = "force-dynamic";

export default async function PageComprehension() {
  const connecte = await estConnecte();
  const gratuite = comprehensionGratuite();

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900">🔎 Compréhension de texte</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Les savoir-faire indispensables pour l&apos;épreuve de compréhension du brevet : reconnaître un genre, une
          intention, un procédé, un ton… Chaque fiche est accompagnée de 10 séries d&apos;exercices corrigés.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {COMPREHENSION.map((f) => (
            <Link
              key={f.slug}
              href={`/fiche-comprehension?s=${f.slug}`}
              className="card group flex items-start gap-3 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-3xl">{f.emoji}</span>
              <div>
                <h3 className="font-bold text-slate-800 group-hover:text-brand-700">
                  {!connecte && f.slug !== gratuite ? "🔒 " : ""}
                  {f.titre}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{f.accroche}</p>
                <p className="mt-1 text-xs text-slate-400">{f.series.length} séries d&apos;exercices</p>
                {!connecte && f.slug === gratuite && (
                  <span className="mt-1 inline-block rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-bold text-green-700">
                    Essai gratuit
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
