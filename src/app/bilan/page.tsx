import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { BilanVue } from "@/components/BilanVue";

export const metadata = { title: "Examen bilan — SauveMonBulletin" };

export default function PageBilan() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🧭</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Examen bilan</h1>
            <p className="text-slate-500">
              Un bilan couvrant tous les chapitres vus. Selon tes résultats, des révisions ciblées sont programmées automatiquement.
            </p>
          </div>
        </div>
        <BilanVue />
      </main>
      <Footer />
    </div>
  );
}
