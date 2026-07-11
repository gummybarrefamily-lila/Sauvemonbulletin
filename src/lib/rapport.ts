import { Resend } from "resend";
import { prisma } from "./prisma";
import { statsUtilisateur } from "./progression";
import { matiereInfo } from "@content/curriculum";
import type { MatiereId } from "@content/types";

/** Construit et envoie le compte rendu hebdomadaire aux parents de tous les élèves. */
export async function envoyerRapportsHebdo(): Promise<{ envoyes: number; erreurs: number }> {
  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
  const from = process.env.EMAIL_FROM || "SauveMonBulletin <onboarding@resend.dev>";

  const eleves = await prisma.user.findMany({ where: { emailParent: { not: null } } });
  let envoyes = 0;
  let erreurs = 0;

  const ilYaUneSemaine = new Date();
  ilYaUneSemaine.setDate(ilYaUneSemaine.getDate() - 7);

  for (const eleve of eleves) {
    if (!eleve.emailParent) continue;

    const activites = await prisma.activite.findMany({
      where: { userId: eleve.id, date: { gte: ilYaUneSemaine } },
      orderBy: { date: "asc" },
    });
    const stats = await statsUtilisateur(eleve.id);
    const revisions = await prisma.revisionProgrammee.findMany({
      where: { userId: eleve.id, faite: false },
    });

    const html = genererHtmlRapport(eleve.prenom, activites, stats, revisions.length);

    if (!resend) {
      // Mode non configuré : on n'envoie pas mais on ne casse pas.
      continue;
    }
    try {
      await resend.emails.send({
        from,
        to: eleve.emailParent,
        subject: `📊 Compte rendu hebdomadaire de ${eleve.prenom} — SauveMonBulletin`,
        html,
      });
      envoyes++;
    } catch {
      erreurs++;
    }
  }

  return { envoyes, erreurs };
}

function genererHtmlRapport(
  prenom: string,
  activites: { type: string; matiere: string; score: number; scoreMax: number; date: Date }[],
  stats: { matiere: string; activites: number; scoreMoyen: number }[],
  revisionsEnAttente: number
): string {
  const nbActivites = activites.length;
  const lignesStats = stats
    .map((s) => {
      const info = matiereInfo(s.matiere as MatiereId);
      const nom = info ? `${info.emoji} ${info.nom}` : s.matiere;
      return `<tr>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;">${nom}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:center;">${s.activites}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:center;font-weight:bold;color:${
          s.scoreMoyen >= 60 ? "#16a34a" : "#dc2626"
        };">${s.scoreMoyen}%</td>
      </tr>`;
    })
    .join("");

  return `<!doctype html>
  <html lang="fr"><body style="margin:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">
      <div style="background:#1d60f1;border-radius:16px 16px 0 0;padding:24px;color:white;">
        <h1 style="margin:0;font-size:22px;">📊 SauveMonBulletin</h1>
        <p style="margin:6px 0 0;opacity:.9;">Compte rendu hebdomadaire de ${prenom}</p>
      </div>
      <div style="background:white;border-radius:0 0 16px 16px;padding:24px;">
        <p>Bonjour,</p>
        <p>Voici le résumé de la semaine de travail de <strong>${prenom}</strong> sur SauveMonBulletin.</p>
        <p style="background:#eef6ff;border-radius:10px;padding:12px 16px;">
          ✅ <strong>${nbActivites}</strong> activité${nbActivites > 1 ? "s" : ""} réalisée${nbActivites > 1 ? "s" : ""} cette semaine.
          ${revisionsEnAttente > 0 ? `<br/>📌 <strong>${revisionsEnAttente}</strong> révision${revisionsEnAttente > 1 ? "s" : ""} personnalisée${revisionsEnAttente > 1 ? "s" : ""} à faire.` : ""}
        </p>
        ${
          lignesStats
            ? `<h2 style="font-size:16px;margin-top:24px;">Résultats moyens par matière</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead><tr style="background:#f4f6fb;">
            <th style="padding:8px 12px;text-align:left;">Matière</th>
            <th style="padding:8px 12px;">Activités</th>
            <th style="padding:8px 12px;">Réussite</th>
          </tr></thead>
          <tbody>${lignesStats}</tbody>
        </table>`
            : `<p style="color:#6b7280;">Aucune activité notée cette semaine. Encouragez ${prenom} à se connecter !</p>`
        }
        <p style="margin-top:24px;font-size:13px;color:#6b7280;">
          Ce compte rendu est envoyé automatiquement chaque semaine. Les révisions personnalisées sont programmées selon les résultats aux examens bilan.
        </p>
      </div>
      <p style="text-align:center;font-size:12px;color:#9ca3af;margin-top:16px;">SauveMonBulletin — réviser le collège autrement</p>
    </div>
  </body></html>`;
}
