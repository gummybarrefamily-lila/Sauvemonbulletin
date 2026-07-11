import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { DicteeVue } from "@/components/DicteeVue";

export const metadata = { title: "Dictée de la semaine — SauveMonBulletin" };

export default function PageDictee() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <div className="flex items-center gap-3">
          <span className="text-4xl">✍️</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dictée de la semaine</h1>
            <p className="text-slate-500">
              De la 5ème au brevet : écoute, tape le texte, et le correcteur repère et explique tes fautes.
            </p>
          </div>
        </div>
        <DicteeVue />
      </main>
      <Footer />
    </div>
  );
}
