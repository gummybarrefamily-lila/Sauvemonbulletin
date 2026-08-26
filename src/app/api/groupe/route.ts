import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { utilisateurApi } from "@/lib/session";

const ActionSchema = z.union([
  z.object({ action: z.literal("creer"), nom: z.string().min(2).max(40) }),
  z.object({ action: z.literal("rejoindre"), code: z.string().min(4).max(12) }),
  z.object({ action: z.literal("quitter"), groupeId: z.string().min(1) }),
]);

function genererCode(): string {
  const lettres = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += lettres[Math.floor(Math.random() * lettres.length)];
  return code;
}

export async function POST(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  const corps = await req.json().catch(() => null);
  const donnees = ActionSchema.safeParse(corps);
  if (!donnees.success) return NextResponse.json({ erreur: "Données invalides" }, { status: 400 });
  const a = donnees.data;

  if (a.action === "creer") {
    const nb = await prisma.membreGroupe.count({ where: { userId: user.id } });
    if (nb >= 5) return NextResponse.json({ erreur: "5 groupes maximum" }, { status: 400 });
    const groupe = await prisma.groupe.create({
      data: { nom: a.nom, code: genererCode(), membres: { create: { userId: user.id } } },
    });
    return NextResponse.json({ ok: true, groupe });
  }

  if (a.action === "rejoindre") {
    const groupe = await prisma.groupe.findUnique({ where: { code: a.code.toUpperCase().trim() } });
    if (!groupe) return NextResponse.json({ erreur: "Code inconnu" }, { status: 404 });
    const membres = await prisma.membreGroupe.count({ where: { groupeId: groupe.id } });
    if (membres >= 30) return NextResponse.json({ erreur: "Groupe complet (30 max)" }, { status: 400 });
    await prisma.membreGroupe.upsert({
      where: { groupeId_userId: { groupeId: groupe.id, userId: user.id } },
      create: { groupeId: groupe.id, userId: user.id },
      update: {},
    });
    return NextResponse.json({ ok: true, groupe });
  }

  // quitter
  await prisma.membreGroupe.deleteMany({ where: { groupeId: a.groupeId, userId: user.id } });
  // Supprime le groupe s'il est vide.
  const restants = await prisma.membreGroupe.count({ where: { groupeId: a.groupeId } });
  if (restants === 0) await prisma.groupe.deleteMany({ where: { id: a.groupeId } });
  return NextResponse.json({ ok: true });
}
