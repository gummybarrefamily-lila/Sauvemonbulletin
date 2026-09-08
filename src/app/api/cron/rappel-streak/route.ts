import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { donneesRecompenses } from "@/lib/recompenses";
import { envoyerPush } from "@/lib/push";

/**
 * Cron quotidien (fin d'après-midi) : rappelle à chaque élève abonné aux
 * notifications sa streak en jeu, ou — le samedi — les défis restants de la semaine.
 * Une seule notification par jour et par élève. Protégé par CRON_SECRET.
 */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ erreur: "Non autorisé" }, { status: 401 });
  }

  try {
    const abonnes = await prisma.abonnementPush.findMany({ select: { userId: true }, distinct: ["userId"] });
    const samedi = new Date().getUTCDay() === 6;
    let envoyes = 0;

    for (const { userId } of abonnes) {
      const donnees = await donneesRecompenses(userId);
      const s = donnees.streaks;

      if (!s.autoFaitAujourdhui && s.auto > 0) {
        // Streak d'automatismes en jeu : le rappel prioritaire.
        envoyes += await envoyerPush(userId, {
          titre: `⚡ Ta streak de ${s.auto} jour${s.auto > 1 ? "s" : ""} est en jeu !`,
          corps: "10 petits calculs et elle continue. Tu as jusqu'à ce soir !",
          url: "/automatismes",
        });
      } else if (samedi) {
        // Samedi : le point sur les activités hebdo pas encore validées.
        const manquants = [
          !s.dicteeFaiteCetteSemaine ? "la dictée" : null,
          !s.problemesFaitsCetteSemaine ? "les problèmes de maths" : null,
          !s.fondamentauxFaitsCetteSemaine ? "les fondamentaux" : null,
        ].filter((x): x is string => x !== null);
        if (manquants.length > 0) {
          envoyes += await envoyerPush(userId, {
            titre: "📅 Ton défi de la semaine n'est pas fini !",
            corps: `Il te reste : ${manquants.join(", ")}. Le week-end est fait pour ça 😉`,
            url: "/defis",
          });
        }
      }
    }

    return NextResponse.json({ ok: true, envoyes });
  } catch (e) {
    return NextResponse.json({ erreur: "Échec de l'envoi", detail: String(e) }, { status: 500 });
  }
}
