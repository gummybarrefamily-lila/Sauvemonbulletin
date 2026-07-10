import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { HebdoVue } from "@/components/HebdoVue";

export const metadata = { title: "Fondamentaux de la semaine — SauveMonBulletin" };

export default function PageHebdo() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <div className="flex items-center gap-3">
          <span className="text-4xl">📅</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Fondamentaux de la semaine</h1>
            <p className="text-slate-500">Chaque semaine, l'essentiel en français, SVT et physique-chimie.</p>
          </div>
        </div>
        <HebdoVue />
      </main>
      <Footer />
    </div>
  );
}
