import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ExercicePratique } from "@/components/ExercicePratique";
import { METHODES } from "@content/methodes";

export function generateStaticParams() {
  return METHODES.map((m) => ({ slug: m.slug }));
}

export default function PageMethode({ params }: { params: { slug: string } }) {
  const m = METHODES.find((x) => x.slug === params.slug);
  if (!m) notFound();

  const texteComplet = `${m.titre}. ${m.accroche} ${m.sections
    .map((s) => `${s.titre}. ${s.points.join(". ")}`)
    .join(" ")}`;

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <Link href="/methodes" className="text-sm font-semibold text-brand-600 hover:underline">
          ← Toutes les méthodes
        </Link>
        <div className="mt-4 flex items-start gap-4">
          <span className="text-5xl">{m.emoji}</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{m.titre}</h1>
            <p className="mt-2 text-lg text-slate-600">{m.accroche}</p>
          </div>
        </div>

        <div className="mt-4">
          <AudioPlayer texte={texteComplet} label="Écouter la méthode" />
        </div>

        <div className="prose-fiche mt-6 space-y-5">
          {m.sections.map((s, i) => (
            <div key={i} className="card p-5">
              <h3 className="text-lg font-bold text-brand-800">{s.titre}</h3>
              <ul className="mt-2 space-y-1.5 text-slate-700">
                {s.points.map((p, k) => (
                  <li key={k} className="flex items-start gap-2">
                    <span className="mt-1 text-brand-500">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">✍️ Exercices pratiques</h2>
          <p className="mt-1 text-slate-500">Entraîne-toi, puis compare avec le corrigé modèle.</p>
          <div className="mt-4 space-y-3">
            {m.exercicesPratiques.map((ex, i) => (
              <ExercicePratique key={i} numero={i + 1} consigne={ex.consigne} corrige={ex.corrige} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
