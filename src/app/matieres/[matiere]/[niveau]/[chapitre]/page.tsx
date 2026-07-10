import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ChapitreVue } from "@/components/ChapitreVue";
import { CHAPITRES, trouverChapitre } from "@content/chapitres";
import { matiereInfo } from "@content/curriculum";
import type { MatiereId, Niveau } from "@content/types";

export function generateStaticParams() {
  return CHAPITRES.map((c) => ({ matiere: c.matiere, niveau: c.niveau, chapitre: c.slug }));
}

export default function PageChapitre({
  params,
}: {
  params: { matiere: string; niveau: string; chapitre: string };
}) {
  const chap = trouverChapitre(params.matiere as MatiereId, params.niveau as Niveau, params.chapitre);
  if (!chap) notFound();
  const info = matiereInfo(chap.matiere);

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Link href={`/matieres/${chap.matiere}`} className="text-sm font-semibold text-brand-600 hover:underline">
          ← {info.emoji} {info.nom}
        </Link>
        <div className="mt-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
            {chap.niveau === "5eme" ? "5ème" : chap.niveau === "4eme" ? "4ème" : "3ème"}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">{chap.titre}</h1>
          <p className="mt-2 text-slate-600">{chap.description}</p>
        </div>
        <ChapitreVue chapitre={chap} />
      </main>
      <Footer />
    </div>
  );
}
