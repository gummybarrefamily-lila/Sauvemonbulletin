import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { utilisateurApi } from "@/lib/session";

const DefiSchema = z.object({
  periode: z.enum(["semaine", "mois"]),
  automatismes: z.number().int().min(0).max(31),
  dictees: z.number().int().min(0).max(10),
  problemes: z.number().int().min(0).max(10),
  fondamentaux: z.number().int().min(0).max(10),
  recompense: z.string().max(200),
});

export async function POST(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  const corps = await req.json().catch(() => null);
  const donnees = DefiSchema.safeParse(corps);
  if (!donnees.success) return NextResponse.json({ erreur: "Données invalides" }, { status: 400 });
  const d = donnees.data;

  await prisma.defi.upsert({
    where: { userId_periode: { userId: user.id, periode: d.periode } },
    create: { userId: user.id, ...d },
    update: {
      automatismes: d.automatismes,
      dictees: d.dictees,
      problemes: d.problemes,
      fondamentaux: d.fondamentaux,
      recompense: d.recompense,
    },
  });
  return NextResponse.json({ ok: true });
}
