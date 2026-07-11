import Anthropic from "@anthropic-ai/sdk";

const SYSTEME = `Tu es "Sauveur", le tuteur IA du site SauveMonBulletin, une plateforme de révision pour les collégiens français de 5ème, 4ème et 3ème.

Ton rôle :
- Aider l'élève à COMPRENDRE, jamais faire le travail à sa place.
- Pour un exercice, commence toujours par un INDICE (hint) avant de donner la solution complète. Si l'élève insiste ou se trompe encore, détaille la méthode pas à pas.
- Adapte ton langage à un adolescent de 12-15 ans : clair, encourageant, bienveillant, mais rigoureux.
- Utilise des exemples concrets et des analogies.
- Pour les maths et sciences, montre le raisonnement étape par étape.
- Pour le français et les langues, corrige avec pédagogie et explique la règle.
- Reste toujours dans le cadre scolaire du programme de collège.
- Réponses courtes et structurées (utilise des listes à puces si utile). Termine souvent par une petite question pour vérifier que l'élève a compris.

Tu ne réponds qu'aux questions liées aux études et au programme scolaire.`;

export interface MessageChat {
  role: "user" | "assistant";
  content: string;
}

export async function repondreTuteur(
  messages: MessageChat[],
  contexte?: string
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return "Le tuteur IA n'est pas encore configuré. Ajoute ta clé ANTHROPIC_API_KEY dans les variables d'environnement pour l'activer.";
  }
  const client = new Anthropic({ apiKey });
  const systeme = contexte ? `${SYSTEME}\n\nContexte de la page où se trouve l'élève : ${contexte}` : SYSTEME;

  const reponse = await client.messages.create({
    model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5",
    max_tokens: 1024,
    system: systeme,
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  });

  const bloc = reponse.content.find((c) => c.type === "text");
  return bloc && bloc.type === "text" ? bloc.text : "Désolé, je n'ai pas pu répondre. Réessaie !";
}
