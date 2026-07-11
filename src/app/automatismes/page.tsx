import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { AutomatismesDuJour } from "@/components/AutomatismesDuJour";

export const metadata = { title: "Automatismes du jour — SauveMonBulletin" };

export default function PageAutomatismes() {
  const aujourdhui = new Date().toISOString().slice(0, 10);
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <div className="flex items-center gap-3">
          <span className="text-4xl">⚡</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Automatismes du jour</h1>
            <p className="text-slate-500">10 calculs mentaux quotidiens. Une nouvelle série chaque jour.</p>
          </div>
        </div>
        <AutomatismesDuJour dateISO={aujourdhui} />
      </main>
      <Footer />
    </div>
  );
}
