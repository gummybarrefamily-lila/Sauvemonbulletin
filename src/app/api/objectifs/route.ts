import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { utilisateurApi } from "@/lib/session";

const CreationSchema = z.object({
  type: z.enum(["automatismes", "dictee", "problemes", "points"]),
  cible: z.number().int().min(1).max(100000),
  recompense: z.string().min(1).max(200),
});

export async function POST(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  const corps = await req.json().catch(() => null);
  const donnees = CreationSchema.safeParse(corps);
  if (!donnees.success) return NextResponse.json({ erreur: "Données invalides" }, { status: 400 });

  const nb = await prisma.objectif.count({ where: { userId: user.id } });
  if (nb >= 10) return NextResponse.json({ erreur: "10 objectifs maximum" }, { status: 400 });

  const objectif = await prisma.objectif.create({
    data: { userId: user.id, ...donnees.data },
  });
  return NextResponse.json({ ok: true, objectif });
}

export async function DELETE(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  const { id } = (await req.json().catch(() => ({}))) as { id?: string };
  if (!id) return NextResponse.json({ erreur: "id manquant" }, { status: 400 });

  await prisma.objectif.deleteMany({ where: { id, userId: user.id } });
  return NextResponse.json({ ok: true });
}
