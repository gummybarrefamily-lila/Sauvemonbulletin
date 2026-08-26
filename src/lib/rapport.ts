import { Resend } from "resend";
import { prisma } from "./prisma";
import { statsUtilisateur } from "./progression";
import { matiereInfo } from "@content/curriculum";
import { DICTEES, type Dictee } from "@content/dictees";
import { donneesRecompenses, ciblesDefis, defiReussi, type ProgresDefi, type CiblesDefi, type Streaks } from "./recompenses";
import { PROPOSITIONS_HEBDO } from "@content/propositions-hebdo";
import type { MatiereId, Niveau } from "@content/types";

/**
 * Numéro de semaine de l'année scolaire (1 = première semaine de septembre).
 * Sert à choisir la dictée de la semaine ; boucle sur les semaines disponibles.
 */
function semaineScolaire(date: Date): number {
  const annee = date.getMonth() >= 8 ? date.getFullYear() : date.getFullYear() - 1;
  const rentree = new Date(annee, 8, 1); // 1er septembre
  const jours = Math.floor((date.getTime() - rentree.getTime()) / 86400000);
  return Math.max(1, Math.floor(jours / 7) + 1);
}

/** La dictée de la semaine pour un niveau donné (boucle si l'année dépasse le stock). */
function dicteeDeLaSemaine(niveau: string, date: Date): Dictee | null {
  const dispo = DICTEES.filter((d) => d.niveau === (niveau as Niveau)).sort((a, b) => a.semaine - b.semaine);
  if (dispo.length === 0) return null;
  const semaine = semaineScolaire(date);
  return dispo.find((d) => d.semaine === semaine) ?? dispo[(semaine - 1) % dispo.length];
}

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

    const dictee = dicteeDeLaSemaine(eleve.niveau, new Date());
    const donneesDefis = await donneesRecompenses(eleve.id);
    const cibles = await ciblesDefis(eleve.id);
    const html = genererHtmlRapport(
      eleve.prenom,
      activites,
      stats,
      revisions.length,
      dictee,
      {
        semaine: { cibles: cibles.semaine, progres: donneesDefis.semaine },
        mois: { cibles: cibles.mois, progres: donneesDefis.mois },
      },
      donneesDefis.streaks
    );

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
  revisionsEnAttente: number,
  dictee: Dictee | null,
  defis: {
    semaine: { cibles: CiblesDefi; progres: ProgresDefi };
    mois: { cibles: CiblesDefi; progres: ProgresDefi };
  },
  streaks: Streaks
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
        <h2 style="font-size:16px;margin-top:28px;">🎯 Les défis de ${prenom}</h2>
        ${(["semaine", "mois"] as const)
          .map((p) => {
            const d = defis[p];
            const reussi = defiReussi(d.progres, d.cibles);
            const lignes = [
              ["⚡ Automatismes (jours)", d.progres.automatismes, d.cibles.automatismes],
              ["✍️ Dictées", d.progres.dictees, d.cibles.dictees],
              ["🧩 Problèmes de maths", d.progres.problemes, d.cibles.problemes],
              ["📅 Fondamentaux hebdo", d.progres.fondamentaux, d.cibles.fondamentaux],
            ]
              .map(
                ([label, fait, cible]) =>
                  `<tr><td style="padding:4px 12px;border-bottom:1px solid #f1f5f9;">${label}</td><td style="padding:4px 12px;border-bottom:1px solid #f1f5f9;text-align:center;font-weight:bold;color:${
                    Number(fait) >= Number(cible) ? "#16a34a" : "#6b7280"
                  };">${fait} / ${cible}</td></tr>`
              )
              .join("");
            return `<div style="border:1px solid #e2e8f0;border-radius:10px;padding:10px 12px;margin-bottom:10px;${
              reussi ? "background:#f0fdf4;border-color:#bbf7d0;" : ""
            }">
            <p style="margin:0 0 6px;font-weight:bold;">${p === "semaine" ? "🗓️ Défi de la semaine" : "📆 Défi du mois"}${
              reussi ? " — 🎉 réussi !" : ""
            }</p>
            <table style="width:100%;border-collapse:collapse;font-size:13px;">${lignes}</table>
            ${
              d.cibles.recompense
                ? `<p style="margin:6px 0 0;font-size:13px;">🎁 Récompense promise : <strong>${d.cibles.recompense}</strong></p>`
                : ""
            }
          </div>`;
          })
          .join("")}
        <p style="font-size:12px;color:#6b7280;">Une activité n'est validée qu'à partir de 70 % de réussite.</p>
        ${
          dictee
            ? `<h2 style="font-size:16px;margin-top:28px;">✍️ La dictée de la semaine ${dictee.semaine}</h2>
        <p style="font-size:14px;">À faire faire à ${prenom} : lisez le texte ci-dessous à voix haute (deux ou trois fois, lentement), pendant qu'il ou elle l'écrit. Puis corrigez ensemble à l'aide des pièges expliqués.</p>
        <div style="background:#fdf7ee;border:1px solid #f0e0c8;border-radius:10px;padding:14px 16px;">
          <p style="margin:0 0 4px;font-weight:bold;">${dictee.titre}</p>
          <p style="margin:0 0 10px;font-size:12px;color:#92700c;font-style:italic;">${dictee.auteur}</p>
          <p style="margin:0;font-size:14px;line-height:1.6;">${dictee.texte}</p>
        </div>
        ${
          dictee.pointsVigilance.length > 0
            ? `<p style="font-size:13px;margin:12px 0 4px;font-weight:bold;">💡 Les pièges à vérifier lors de la correction :</p>
        <ul style="font-size:13px;color:#374151;margin:0;padding-left:18px;">
          ${dictee.pointsVigilance
            .map((p) => `<li style="margin-bottom:4px;"><strong>« ${p.extrait} »</strong> — ${p.explication}</li>`)
            .join("")}
        </ul>`
            : ""
        }
        <p style="font-size:12px;color:#6b7280;margin-top:8px;">${prenom} peut aussi faire cette dictée en autonomie sur le site (rubrique « Dictée » : lecture audio et correction automatique).</p>`
            : ""
        }
        <h2 style="font-size:16px;margin-top:28px;">🔥 Les streaks de ${prenom}</h2>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          ${[
            ["⚡ Automatismes", streaks.auto, `jour${streaks.auto > 1 ? "s" : ""} d'affilée`],
            ["✍️ Dictée", streaks.dictee, `semaine${streaks.dictee > 1 ? "s" : ""} d'affilée`],
            ["🧩 Problèmes de maths", streaks.problemes, `semaine${streaks.problemes > 1 ? "s" : ""} d'affilée`],
            ["📅 Fondamentaux hebdo", streaks.fondamentaux, `semaine${streaks.fondamentaux > 1 ? "s" : ""} d'affilée`],
          ]
            .map(
              ([label, valeur, unite]) =>
                `<tr><td style="padding:4px 12px;border-bottom:1px solid #f1f5f9;">${label}</td><td style="padding:4px 12px;border-bottom:1px solid #f1f5f9;text-align:center;font-weight:bold;color:${
                  Number(valeur) > 0 ? "#d97706" : "#6b7280"
                };">${valeur} ${unite}</td></tr>`
            )
            .join("")}
        </table>
        <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;padding:12px 16px;margin-top:14px;">
          <p style="margin:0;font-size:14px;line-height:1.5;">💡 <strong>Pour la semaine prochaine :</strong> ${PROPOSITIONS_HEBDO[
            semaineScolaire(new Date()) % PROPOSITIONS_HEBDO.length
          ].replace(/\{prenom\}/g, prenom)}</p>
        </div>
        <p style="margin-top:24px;font-size:13px;color:#6b7280;">
          Ce compte rendu est envoyé automatiquement chaque semaine. Les révisions personnalisées sont programmées selon les résultats aux examens bilan.
        </p>
      </div>
      <p style="text-align:center;font-size:12px;color:#9ca3af;margin-top:16px;">SauveMonBulletin — réviser le collège autrement</p>
    </div>
  </body></html>`;
}
