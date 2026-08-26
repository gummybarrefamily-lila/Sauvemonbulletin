import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { utilisateurApi } from "@/lib/session";

const MESSAGES_AUTORISES = [
  "👏 Bien joué !",
  "🎉 Félicitations !",
  "🔥 Trop fort !",
  "💪 Impressionnant !",
  "😅 Je te bats la prochaine fois !",
];

const ReactionSchema = z.object({
  activiteId: z.string().min(1),
  message: z.string().refine((m) => MESSAGES_AUTORISES.includes(m), "Message non autorisé"),
});

export async function POST(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  const corps = await req.json().catch(() => null);
  const donnees = ReactionSchema.safeParse(corps);
  if (!donnees.success) return NextResponse.json({ erreur: "Données invalides" }, { status: 400 });

  const activite = await prisma.activite.findUnique({ where: { id: donnees.data.activiteId } });
  if (!activite) return NextResponse.json({ erreur: "Activité introuvable" }, { status: 404 });

  // Sécurité : il faut partager un groupe avec l'auteur de l'activité.
  const mesGroupes = await prisma.membreGroupe.findMany({ where: { userId: user.id }, select: { groupeId: true } });
  const commun = await prisma.membreGroupe.findFirst({
    where: { userId: activite.userId, groupeId: { in: mesGroupes.map((g) => g.groupeId) } },
  });
  if (!commun) return NextResponse.json({ erreur: "Vous n'êtes pas dans le même groupe" }, { status: 403 });

  // Une seule réaction par personne et par activité (on remplace si re-clic).
  await prisma.reaction.deleteMany({ where: { activiteId: activite.id, auteurId: user.id } });
  await prisma.reaction.create({
    data: { activiteId: activite.id, auteurId: user.id, message: donnees.data.message },
  });
  return NextResponse.json({ ok: true });
}
