import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ComprehensionVue } from "@/components/ComprehensionVue";
import { InvitationCompte } from "@/components/InvitationCompte";
import { comprehensionGratuite, estConnecte } from "@/lib/acces";
import { COMPREHENSION } from "@content/comprehension";

export const dynamic = "force-dynamic";

export default async function PageFicheComprehension({ searchParams }: { searchParams: { s?: string } }) {
  const fiche = COMPREHENSION.find((x) => x.slug === searchParams.s);
  if (!fiche) notFound();

  const connecte = await estConnecte();
  if (!connecte && fiche.slug !== comprehensionGratuite()) {
    return (
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16">
          <InvitationCompte contenu={`La fiche « ${fiche.titre} » est un contenu`} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <Link href="/comprehension" className="text-sm font-semibold text-brand-600 hover:underline">
          ← Compréhension de texte
        </Link>
        <div className="mt-4 flex items-start gap-4">
          <span className="text-5xl">{fiche.emoji}</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{fiche.titre}</h1>
            <p className="mt-2 text-lg text-slate-600">{fiche.accroche}</p>
          </div>
        </div>
        <ComprehensionVue fiche={fiche} />
      </main>
      <Footer />
    </div>
  );
}
