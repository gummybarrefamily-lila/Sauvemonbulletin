import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { utilisateurApi } from "@/lib/session";

const schema = z.object({
  semaine: z.number().int().min(1).max(60),
  titre: z.string().min(1).max(200),
  texte: z.string().min(30).max(20000),
  evaluation: z
    .object({
      total: z.number().int().min(0).max(48),
      totalMax: z.number().int().min(1).max(48),
      pointsForts: z.array(z.string().max(300)).max(5),
    })
    .optional(),
});

function echapper(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Enregistre la rédaction de la semaine et envoie la version finale aux parents. */
export async function POST(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  let data: z.infer<typeof schema>;
  try {
    data = schema.parse(await req.json());
  } catch {
    return NextResponse.json({ erreur: "Données invalides" }, { status: 400 });
  }

  await prisma.activite.create({
    data: {
      userId: user.id,
      type: "ecriture",
      matiere: "francais",
      niveau: user.niveau,
      chapitre: `semaine-${data.semaine}`,
      score: 0,
      scoreMax: 0,
    },
  });

  if (!user.emailParent) {
    return NextResponse.json({ ok: true, envoye: false, raison: "Aucun email parent enregistré sur le compte." });
  }
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: true, envoye: false, raison: "L'envoi d'emails n'est pas configuré." });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.EMAIL_FROM || "SauveMonBulletin <onboarding@resend.dev>";
  const paragraphes = echapper(data.texte)
    .split(/\n+/)
    .map((p) => `<p style="margin:0 0 10px;font-size:14px;line-height:1.7;">${p}</p>`)
    .join("");

  const html = `<!doctype html>
  <html lang="fr"><body style="margin:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">
      <div style="background:#1d60f1;border-radius:16px 16px 0 0;padding:24px;color:white;">
        <h1 style="margin:0;font-size:22px;">📝 SauveMonBulletin — Atelier d'écriture</h1>
        <p style="margin:6px 0 0;opacity:.9;">La rédaction de ${echapper(user.prenom)}</p>
      </div>
      <div style="background:white;border-radius:0 0 16px 16px;padding:24px;">
        <p>Bonjour,</p>
        <p><strong>${echapper(user.prenom)}</strong> vient de terminer l'exercice d'écriture guidé de la semaine ${data.semaine} :
        <strong>${echapper(data.titre)}</strong>. Voici sa version finale — prenez un moment pour la lire ensemble et la féliciter !</p>
        <div style="background:#fdf7ee;border:1px solid #f0e0c8;border-radius:10px;padding:16px 18px;margin-top:12px;">
          ${paragraphes}
        </div>
        ${
          data.evaluation
            ? `<div style="background:#eef6ff;border:1px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-top:14px;">
          <p style="margin:0;font-size:14px;">🤖 <strong>Évaluation du tuteur IA : ${data.evaluation.total} / ${data.evaluation.totalMax}</strong> (grille d'écriture persuasive en 10 critères)</p>
          ${
            data.evaluation.pointsForts.length > 0
              ? `<p style="margin:8px 0 4px;font-size:13px;font-weight:bold;">Points forts relevés :</p>
          <ul style="margin:0;padding-left:18px;font-size:13px;color:#374151;">
            ${data.evaluation.pointsForts.map((p) => `<li style="margin-bottom:3px;">${echapper(p)}</li>`).join("")}
          </ul>`
              : ""
          }
        </div>`
            : ""
        }
        <p style="margin-top:20px;font-size:13px;color:#6b7280;">
          Chaque semaine, l'atelier d'écriture guide ${echapper(user.prenom)} pas à pas : une compétence, un texte modèle, un plan, puis la rédaction.
        </p>
      </div>
      <p style="text-align:center;font-size:12px;color:#9ca3af;margin-top:16px;">SauveMonBulletin — réviser le collège autrement</p>
    </div>
  </body></html>`;

  try {
    await resend.emails.send({
      from,
      to: user.emailParent,
      subject: `📝 La rédaction de ${user.prenom} — semaine ${data.semaine} : ${data.titre}`,
      html,
    });
    return NextResponse.json({ ok: true, envoye: true });
  } catch {
    return NextResponse.json({ ok: true, envoye: false, raison: "L'email n'a pas pu être envoyé." });
  }
}
