import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { utilisateurConnecte } from "@/lib/session";
import { statsUtilisateur } from "@/lib/progression";
import { prisma } from "@/lib/prisma";
import { matiereInfo } from "@content/curriculum";
import type { MatiereId } from "@content/types";

export const dynamic = "force-dynamic";

const LABEL_TYPE: Record<string, string> = {
  cours: "Cours",
  fiche: "Fiche",
  exercices: "Exercices",
  revision: "Révision",
  examen: "Examen",
  automatismes: "Automatismes",
  hebdo: "Fondamentaux hebdo",
  bilan: "Bilan",
  brevet: "Brevet blanc",
};

export default async function TableauDeBord() {
  const user = await utilisateurConnecte();
  const stats = await statsUtilisateur(user.id);
  const revisions = await prisma.revisionProgrammee.findMany({
    where: { userId: user.id, faite: false },
    orderBy: { prevueLe: "asc" },
    take: 10,
  });
  const activites = await prisma.activite.findMany({
    where: { userId: user.id },
    orderBy: { date: "desc" },
    take: 8,
  });

  const niveauLabel = user.niveau === "5eme" ? "5ème" : user.niveau === "4eme" ? "4ème" : "3ème";

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Bonjour {user.prenom} 👋</h1>
            <p className="text-slate-500">Classe de {niveauLabel}{user.danseEtudes ? " · Danse-études" : ""}</p>
          </div>
          <div className="flex gap-2">
            <Link href="/automatismes" className="btn-ghost text-sm">⚡ Automatismes</Link>
            <Link href="/hebdo" className="btn-ghost text-sm">📅 Hebdo</Link>
            <Link href="/bilan" className="btn-primary text-sm">🧭 Faire un bilan</Link>
          </div>
        </div>

        {/* Révisions programmées */}
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-bold text-slate-800">📌 Mes révisions à faire</h2>
          {revisions.length === 0 ? (
            <div className="card p-6 text-slate-500">
              Aucune révision programmée. Passe un <Link href="/bilan" className="font-semibold text-brand-600 hover:underline">examen bilan</Link> pour recevoir des révisions ciblées selon tes points faibles.
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {revisions.map((r) => {
                const info = matiereInfo(r.matiere as MatiereId);
                return (
                  <div key={r.id} className="card flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{info?.emoji}</span>
                      <div>
                        <p className="font-semibold text-slate-800">{r.raison}</p>
                        <p className="text-xs text-slate-400">
                          À faire avant le {new Date(r.prevueLe).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/matieres/${r.matiere}/${r.niveau}/${r.chapitre}`}
                      className="btn-primary shrink-0 px-3 py-1.5 text-sm"
                    >
                      Réviser
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Progression */}
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-bold text-slate-800">📊 Ma progression</h2>
          {stats.length === 0 ? (
            <div className="card p-6 text-slate-500">
              Commence des exercices pour voir apparaître ta progression ici.
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((s) => {
                const info = matiereInfo(s.matiere as MatiereId);
                return (
                  <div key={s.matiere} className="card p-5">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{info?.emoji}</span>
                      <span className="font-bold text-slate-800">{info?.nom ?? s.matiere}</span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Réussite moyenne</span>
                        <span className={`font-bold ${s.scoreMoyen >= 60 ? "text-green-600" : "text-red-500"}`}>
                          {s.scoreMoyen}%
                        </span>
                      </div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full ${s.scoreMoyen >= 60 ? "bg-green-500" : "bg-amber-500"}`}
                          style={{ width: `${s.scoreMoyen}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-slate-400">{s.activites} activité(s)</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Activité récente */}
        {activites.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-slate-800">🕑 Activité récente</h2>
            <div className="card divide-y divide-slate-100">
              {activites.map((a) => {
                const info = matiereInfo(a.matiere as MatiereId);
                return (
                  <div key={a.id} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{info?.emoji ?? "📘"}</span>
                      <div>
                        <p className="font-medium text-slate-700">
                          {LABEL_TYPE[a.type] ?? a.type} · {info?.nom ?? a.matiere}
                        </p>
                        <p className="text-xs text-slate-400">
                          {new Date(a.date).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                    </div>
                    {a.scoreMax > 0 && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                        {a.score}/{a.scoreMax}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
