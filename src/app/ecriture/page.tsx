import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { EcritureVue } from "@/components/EcritureVue";

export const metadata = { title: "Atelier d'écriture — SauveMonBulletin" };

export default function PageEcriture() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <div className="flex items-center gap-3">
          <span className="text-4xl">📝</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Atelier d&apos;écriture</h1>
            <p className="text-slate-500">
              Chaque semaine, un exercice guidé pour apprendre à convaincre par l&apos;écrit — la version finale est envoyée à tes parents.
            </p>
          </div>
        </div>
        <EcritureVue />
      </main>
      <Footer />
    </div>
  );
}
