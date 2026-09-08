import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { utilisateurApi } from "@/lib/session";

const schema = z.object({
  endpoint: z.string().url().max(1000),
  keys: z.object({
    p256dh: z.string().min(1).max(500),
    auth: z.string().min(1).max(500),
  }),
});

/** Enregistre l'abonnement push de cet appareil pour l'élève connecté. */
export async function POST(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  let data: z.infer<typeof schema>;
  try {
    data = schema.parse(await req.json());
  } catch {
    return NextResponse.json({ erreur: "Données invalides" }, { status: 400 });
  }

  await prisma.abonnementPush.upsert({
    where: { endpoint: data.endpoint },
    create: { userId: user.id, endpoint: data.endpoint, p256dh: data.keys.p256dh, auth: data.keys.auth },
    update: { userId: user.id, p256dh: data.keys.p256dh, auth: data.keys.auth },
  });
  return NextResponse.json({ ok: true });
}

/** Supprime l'abonnement push de cet appareil (désactivation des rappels). */
export async function DELETE(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  const corps = await req.json().catch(() => null);
  const endpoint = typeof corps?.endpoint === "string" ? corps.endpoint : null;
  if (!endpoint) return NextResponse.json({ erreur: "Données invalides" }, { status: 400 });

  await prisma.abonnementPush.deleteMany({ where: { endpoint, userId: user.id } });
  return NextResponse.json({ ok: true });
}
