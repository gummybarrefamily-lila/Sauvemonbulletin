import { NextResponse } from "next/server";
import { envoyerRapportsHebdo } from "@/lib/rapport";

/**
 * Route appelée chaque semaine (cron Vercel ou service externe) pour envoyer
 * les comptes rendus aux parents. Protégée par le header Authorization: Bearer CRON_SECRET.
 */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ erreur: "Non autorisé" }, { status: 401 });
  }
  try {
    const resultat = await envoyerRapportsHebdo();
    return NextResponse.json({ ok: true, ...resultat });
  } catch (e) {
    return NextResponse.json({ erreur: "Échec de l'envoi", detail: String(e) }, { status: 500 });
  }
}
