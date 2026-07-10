import { NextResponse } from "next/server";
import { repondreTuteur, type MessageChat } from "@/lib/tuteur";

export async function POST(req: Request) {
  try {
    const { messages, contexte } = (await req.json()) as {
      messages: MessageChat[];
      contexte?: string;
    };
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ erreur: "Message manquant" }, { status: 400 });
    }
    const reponse = await repondreTuteur(messages.slice(-10), contexte);
    return NextResponse.json({ reponse });
  } catch {
    return NextResponse.json({ reponse: "Une erreur est survenue. Réessaie !" }, { status: 200 });
  }
}
