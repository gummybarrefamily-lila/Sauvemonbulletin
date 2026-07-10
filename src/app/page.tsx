import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { MATIERES } from "@content/curriculum";

const FONCTIONNALITES = [
  { emoji: "🎬", titre: "Cours en slides + audio", desc: "Des cours illustrés avec voix off pour apprendre en écoutant et en regardant." },
  { emoji: "📝", titre: "Fiches de révision", desc: "Une synthèse claire de chaque chapitre, avec version audio." },
  { emoji: "🃏", titre: "Cartes mémo", desc: "Des flashcards recto/verso téléchargeables et imprimables." },
  { emoji: "✏️", titre: "Exercices corrigés", desc: "Niveaux facile, moyen et avancé, avec révision de fin de chapitre." },
  { emoji: "⚡", titre: "Automatismes du jour", desc: "Chaque jour, 10 calculs mentaux en maths, corrigés." },
  { emoji: "📅", titre: "Fondamentaux hebdo", desc: "Chaque semaine, l'essentiel en français, SVT et physique-chimie." },
  { emoji: "🎯", titre: "Examens & bilans", desc: "2 examens par chapitre + un bilan toutes les 6 semaines." },
  { emoji: "🧠", titre: "Révisions intelligentes", desc: "Selon tes résultats, des révisions ciblées sont programmées." },
  { emoji: "🏆", titre: "Brevets blancs", desc: "Des sujets complets dès la 4ème pour s'entraîner au DNB." },
  { emoji: "💡", titre: "Méthodes & techniques", desc: "Intro, plan, conclusion, dictée, oral… les astuces qui font gagner des points." },
  { emoji: "🤖", titre: "Tuteur IA intégré", desc: "Un assistant qui donne des indices et explique, sans faire à ta place." },
  { emoji: "📊", titre: "Suivi & rapport parents", desc: "Tes progrès sont suivis et un compte rendu est envoyé chaque semaine." },
];

export default function Accueil() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-24">
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              5ème · 4ème · 3ème — Cycle 4
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Réviser le collège <span className="text-brand-600">autrement</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Cours animés, fiches audio, cartes mémo, exercices adaptés à ton niveau, examens, brevets blancs et un tuteur IA. Tout pour préparer sereinement le brevet et cartonner en classe.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/inscription" className="btn-primary px-6 py-3 text-lg">
                Commencer gratuitement
              </Link>
              <Link href="/matieres" className="btn-ghost px-6 py-3 text-lg">
                Découvrir les matières
              </Link>
            </div>
          </div>
        </section>

        {/* Matières */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold text-slate-900">Toutes les matières</h2>
          <p className="mt-2 text-center text-slate-500">Le tronc commun, la section internationale de chinois et la filière danse-études.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MATIERES.map((m) => (
              <Link
                key={m.id}
                href={`/matieres/${m.id}`}
                className="card group flex flex-col p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-3xl">{m.emoji}</span>
                <h3 className="mt-3 font-bold text-slate-800 group-hover:text-brand-700">{m.nom}</h3>
                <p className="mt-1 text-sm text-slate-500">{m.description}</p>
                {m.danseEtudes && (
                  <span className="mt-3 inline-block w-fit rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-xs font-semibold text-fuchsia-700">
                    Danse-études
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-center text-3xl font-bold text-slate-900">Tout ce dont tu as besoin</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FONCTIONNALITES.map((f) => (
                <div key={f.titre} className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{f.emoji}</span>
                    <h3 className="font-bold text-slate-800">{f.titre}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Prêt à sauver ton bulletin ?</h2>
          <p className="mt-3 text-lg text-slate-600">
            Crée ton compte, choisis tes matières, et commence à progresser dès aujourd'hui.
          </p>
          <Link href="/inscription" className="btn-primary mt-8 px-8 py-3.5 text-lg">
            Je m'inscris
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
