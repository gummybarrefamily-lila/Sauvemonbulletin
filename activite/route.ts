import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { utilisateurApi } from "@/lib/session";
import { programmerRevisions } from "@/lib/progression";
import type { MatiereId, Niveau } from "@content/types";

const schema = z.object({
  type: z.enum(["cours", "fiche", "exercices", "revision", "examen", "automatismes", "hebdo", "bilan", "brevet"]),
  matiere: z.string(),
  niveau: z.enum(["5eme", "4eme", "3eme"]),
  chapitre: z.string().optional(),
  score: z.number().int().min(0),
  scoreMax: z.number().int().min(0),
  // Pour les bilans : détail par chapitre, sert à programmer les révisions.
  detailsParChapitre: z.record(z.object({ score: z.number(), max: z.number() })).optional(),
});

export async function POST(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  try {
    const data = schema.parse(await req.json());

    await prisma.activite.create({
      data: {
        userId: user.id,
        type: data.type,
        matiere: data.matiere,
        niveau: data.niveau,
        chapitre: data.chapitre,
        score: data.score,
        scoreMax: data.scoreMax,
        details: data.detailsParChapitre ? JSON.stringify(data.detailsParChapitre) : null,
      },
    });

    let revisionsProgrammees = 0;
    if (data.type === "bilan" && data.detailsParChapitre) {
      revisionsProgrammees = await programmerRevisions(
        user.id,
        data.matiere as MatiereId,
        data.niveau as Niveau,
        data.detailsParChapitre
      );
    }

    return NextResponse.json({ ok: true, revisionsProgrammees });
  } catch {
    return NextResponse.json({ erreur: "Données invalides" }, { status: 400 });
  }
}
