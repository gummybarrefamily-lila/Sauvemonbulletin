import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./auth";
import { prisma } from "./prisma";

/** Récupère l'utilisateur connecté côté serveur, ou redirige vers /connexion. */
export async function utilisateurConnecte() {
  const session = await getServerSession(authOptions);
  const id = (session?.user as { id?: string } | undefined)?.id;
  if (!id) redirect("/connexion");
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) redirect("/connexion");
  return user;
}

/** Variante API : renvoie null au lieu de rediriger. */
export async function utilisateurApi() {
  const session = await getServerSession(authOptions);
  const id = (session?.user as { id?: string } | undefined)?.id;
  if (!id) return null;
  return prisma.user.findUnique({ where: { id } });
}
