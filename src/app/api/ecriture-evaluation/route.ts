import { NextResponse } from "next/server";
import { z } from "zod";
import Anthropic from "@anthropic-ai/sdk";
import { prisma } from "@/lib/prisma";
import { utilisateurApi } from "@/lib/session";
import { messageErreurIA } from "@/lib/tuteur";
import { EXERCICES_ECRITURE } from "@content/ecriture";

// L'évaluation génère un long JSON : on laisse à la fonction jusqu'à 60 s
// (la limite Vercel par défaut de 10 s coupait l'appel en plein vol).
export const maxDuration = 60;

const schema = z.object({
  semaine: z.number().int().min(1).max(60),
  texte: z.string().min(30).max(20000),
});

/**
 * Grille d'évaluation de l'écriture persuasive (adaptée de la grille NAPLAN,
 * 10 critères, total sur 48) — celle du guide « Writing Review and Scoring Guide ».
 */
const GRILLE = [
  { nom: "Prise en compte du lecteur", max: 6, detail: "capacité à orienter, intéresser et persuader le lecteur" },
  { nom: "Structure du texte", max: 4, detail: "organisation en introduction, développement, conclusion efficaces" },
  { nom: "Idées", max: 5, detail: "choix, pertinence et développement des idées de l'argumentation" },
  { nom: "Procédés persuasifs", max: 4, detail: "usage de procédés variés (question au lecteur, exemples, faits, concession, appel à l'action…)" },
  { nom: "Vocabulaire", max: 5, detail: "richesse et précision des mots choisis, adaptés au contexte" },
  { nom: "Cohésion", max: 4, detail: "liens dans le texte : connecteurs, reprises pronominales, enchaînements" },
  { nom: "Paragraphes", max: 3, detail: "découpage en paragraphes qui aide à suivre l'argumentation" },
  { nom: "Syntaxe", max: 6, detail: "phrases correctes, bien construites et porteuses de sens" },
  { nom: "Ponctuation", max: 5, detail: "ponctuation correcte et appropriée qui facilite la lecture" },
  { nom: "Orthographe", max: 6, detail: "exactitude de l'orthographe et difficulté des mots employés" },
];

const reponseSchema = z.object({
  criteres: z
    .array(
      z.object({
        nom: z.string(),
        note: z.coerce.number().min(0),
        max: z.coerce.number().min(1),
        commentaire: z.string().catch(""),
      })
    )
    .length(GRILLE.length),
  pointsForts: z.array(z.string()).max(5).catch([]),
  ameliorations: z.array(z.string()).max(5).catch([]),
  conseil: z.string().catch(""),
});

/** Extrait l'objet JSON d'une réponse de modèle (balises ``` éventuelles, texte autour). */
function extraireJson(brut: string): string {
  const sansBalises = brut.replace(/```(?:json)?/g, "");
  const debut = sansBalises.indexOf("{");
  const fin = sansBalises.lastIndexOf("}");
  return debut >= 0 && fin > debut ? sansBalises.slice(debut, fin + 1) : "";
}

/** Évalue la rédaction de la semaine avec la grille sur 48 points et enregistre le score. */
export async function POST(req: Request) {
  const user = await utilisateurApi();
  if (!user) return NextResponse.json({ erreur: "Non connecté" }, { status: 401 });

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ erreur: "L'évaluation IA n'est pas configurée (clé ANTHROPIC_API_KEY manquante)." }, { status: 503 });
  }

  let data: z.infer<typeof schema>;
  try {
    data = schema.parse(await req.json());
  } catch {
    return NextResponse.json({ erreur: "Données invalides" }, { status: 400 });
  }

  const exercice = EXERCICES_ECRITURE.find((e) => e.semaine === data.semaine);
  if (!exercice) return NextResponse.json({ erreur: "Semaine inconnue" }, { status: 400 });

  const grilleTexte = GRILLE.map((g, i) => `${i + 1}. ${g.nom} (sur ${g.max}) : ${g.detail}`).join("\n");
  const criteresSemaine = exercice.criteres.map((c) => `- ${c}`).join("\n");

  const consigne = `Tu es le tuteur d'écriture de SauveMonBulletin. Un collégien (11-15 ans) te soumet sa rédaction de la semaine ${exercice.semaine} de l'atelier d'écriture.

Exercice : « ${exercice.titre} » — compétence travaillée : ${exercice.competence}.
Points de vérification spécifiques de cette semaine :
${criteresSemaine}

Évalue la rédaction avec la grille d'écriture persuasive suivante (note chaque critère, total sur 48) :
${grilleTexte}

Règles d'évaluation :
- Sois juste et bienveillant : c'est un collégien, pas un adulte. Note l'orthographe et la syntaxe selon ce qu'on attend d'un élève de collège.
- Chaque commentaire de critère : une phrase concrète, avec si possible un exemple tiré du texte de l'élève.
- pointsForts : 2 ou 3 réussites précises. ameliorations : 2 ou 3 axes de progrès concrets et actionnables.
- conseil : le conseil numéro 1 pour la prochaine rédaction, en une ou deux phrases encourageantes, en tutoyant l'élève.
- Tous les textes en français, en tutoyant l'élève.
- Sois CONCIS : chaque commentaire de critère tient en UNE phrase courte.

Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, au format :
{"criteres":[{"nom":"…","note":0,"max":0,"commentaire":"…"}],"pointsForts":["…"],"ameliorations":["…"],"conseil":"…"}
Les 10 critères doivent apparaître dans l'ordre de la grille, avec les mêmes noms et les mêmes maximums.

Rédaction de l'élève :
"""
${data.texte}
"""`;

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    // Jusqu'à 2 tentatives : une réponse tronquée ou mal formée est réessayée
    // une fois avant de renvoyer une erreur.
    let evaluation: z.infer<typeof reponseSchema> | null = null;
    for (let tentative = 1; tentative <= 2 && !evaluation; tentative++) {
      const reponse = await client.messages.create({
        model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5",
        max_tokens: 3500,
        messages: [{ role: "user", content: consigne }],
      });
      const bloc = reponse.content.find((c) => c.type === "text");
      const brut = bloc && bloc.type === "text" ? bloc.text : "";
      try {
        evaluation = reponseSchema.parse(JSON.parse(extraireJson(brut)));
      } catch {
        console.error(
          `Évaluation écriture — réponse illisible (tentative ${tentative}, stop: ${reponse.stop_reason}) :`,
          brut.slice(0, 400)
        );
      }
    }
    if (!evaluation) {
      return NextResponse.json(
        { erreur: "Le tuteur a répondu dans un format inattendu. Réessaie dans un instant." },
        { status: 502 }
      );
    }

    // Borne chaque note à son maximum de grille, puis calcule le total sur 48.
    const criteres = evaluation.criteres.map((c, i) => ({
      ...c,
      max: GRILLE[i].max,
      note: Math.max(0, Math.min(GRILLE[i].max, Math.round(c.note))),
    }));
    const total = criteres.reduce((somme, c) => somme + c.note, 0);
    const totalMax = GRILLE.reduce((somme, g) => somme + g.max, 0);

    await prisma.activite.create({
      data: {
        userId: user.id,
        type: "ecriture",
        matiere: "francais",
        niveau: user.niveau,
        chapitre: `semaine-${data.semaine}`,
        score: total,
        scoreMax: totalMax,
      },
    });

    return NextResponse.json({
      ok: true,
      total,
      totalMax,
      criteres,
      pointsForts: evaluation.pointsForts,
      ameliorations: evaluation.ameliorations,
      conseil: evaluation.conseil,
    });
  } catch (e) {
    return NextResponse.json({ erreur: messageErreurIA(e) }, { status: 502 });
  }
}
