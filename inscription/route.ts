import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  prenom: z.string().min(1).max(50),
  email: z.string().email(),
  motDePasse: z.string().min(6).max(100),
  niveau: z.enum(["5eme", "4eme", "3eme"]),
  emailParent: z.string().email().optional().or(z.literal("")),
  danseEtudes: z.boolean().optional(),
  matieres: z.array(z.string()).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const existe = await prisma.user.findUnique({ where: { email: data.email.toLowerCase().trim() } });
    if (existe) {
      return NextResponse.json({ erreur: "Un compte existe déjà avec cet email." }, { status: 409 });
    }

    await prisma.user.create({
      data: {
        prenom: data.prenom.trim(),
        email: data.email.toLowerCase().trim(),
        motDePasse: await hash(data.motDePasse, 10),
        niveau: data.niveau,
        emailParent: data.emailParent ? data.emailParent.toLowerCase().trim() : null,
        danseEtudes: data.danseEtudes ?? false,
        matieres: (data.matieres ?? []).join(","),
      },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ erreur: "Formulaire invalide. Vérifie tes informations." }, { status: 400 });
    }
    return NextResponse.json({ erreur: "Erreur serveur. Réessaie plus tard." }, { status: 500 });
  }
}
