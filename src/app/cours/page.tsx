import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ChapitreVue } from "@/components/ChapitreVue";
import { trouverChapitre } from "@content/chapitres";
import { matiereInfo, niveauLabel } from "@content/curriculum";
import { estChapitreGratuit, estConnecte } from "@/lib/acces";
import type { MatiereId, Niveau } from "@content/types";

export const dynamic = "force-dynamic";

export default async function PageCours({
  searchParams,
}: {
  searchParams: { m?: string; n?: string; c?: string };
}) {
  const chap =
    searchParams.m && searchParams.n && searchParams.c
      ? trouverChapitre(searchParams.m as MatiereId, searchParams.n as Niveau, searchParams.c)
      : undefined;
  if (!chap) notFound();
  const info = matiereInfo(chap.matiere);

  // Accès découverte : sans compte, seul le chapitre gratuit de la matière est consultable.
  const connecte = await estConnecte();
  if (!connecte && !estChapitreGratuit(chap.matiere, chap.niveau, chap.slug)) {
    return (
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16 text-center">
          <span className="text-6xl">🔒</span>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">Ce chapitre est réservé aux membres</h1>
          <p className="mt-3 text-slate-600">
            <strong>{chap.titre}</strong> ({info.nom}, {niveauLabel(chap.niveau)})
          </p>
          <p className="mt-4 text-slate-600">
            SauveMonBulletin est <strong>gratuit</strong> : crée ton compte en 30 secondes pour débloquer{" "}
            <strong>tous les cours, exercices, examens et dictées</strong>, suivre ta progression et recevoir des
            révisions personnalisées.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/inscription" className="btn-primary px-6 py-3">
              Créer mon compte gratuit
            </Link>
            <Link href="/connexion" className="btn-ghost px-6 py-3">
              J&apos;ai déjà un compte
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            Tu veux d&apos;abord essayer ?{" "}
            <Link href={`/matiere?m=${chap.matiere}`} className="font-semibold text-brand-600 hover:underline">
              Un chapitre de {info.nom} est en accès libre →
            </Link>
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Link href={`/matiere?m=${chap.matiere}`} className="text-sm font-semibold text-brand-600 hover:underline">
          ← {info.emoji} {info.nom}
        </Link>
        <div className="mt-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
            {niveauLabel(chap.niveau)}
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
