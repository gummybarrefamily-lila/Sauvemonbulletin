import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SujetBrevet } from "@/components/SujetBrevet";
import { BREVETS_BLANCS } from "@content/brevet";
import { matiereInfo } from "@content/curriculum";

export function generateStaticParams() {
  return BREVETS_BLANCS.map((b) => ({ slug: b.slug }));
}

export default function PageSujetBrevet({ params }: { params: { slug: string } }) {
  const b = BREVETS_BLANCS.find((x) => x.slug === params.slug);
  if (!b) notFound();
  const info = matiereInfo(b.matiere);

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <Link href="/brevet" className="text-sm font-semibold text-brand-600 hover:underline">
          ← Tous les brevets blancs
        </Link>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-5xl">{info.emoji}</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{b.titre}</h1>
            <p className="text-slate-500">
              ⏱️ Durée conseillée : {b.dureeMinutes} min · {info.nom}
            </p>
          </div>
        </div>

        {b.conseils.length > 0 && (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <h2 className="font-bold text-amber-900">💡 Conseils avant de commencer</h2>
            <ul className="mt-2 space-y-1 text-sm text-amber-900">
              {b.conseils.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
          </div>
        )}

        <SujetBrevet parties={b.parties} />
      </main>
      <Footer />
    </div>
  );
}
