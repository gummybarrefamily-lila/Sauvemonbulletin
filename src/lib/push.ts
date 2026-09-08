import webpush from "web-push";
import { prisma } from "./prisma";

/**
 * Notifications push (Web Push / VAPID). Fonctionne sur Android (Chrome) et
 * sur iOS 16.4+ quand l'app est installée sur l'écran d'accueil.
 * Variables d'environnement : NEXT_PUBLIC_VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT.
 */

function configure(): boolean {
  const publique = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privee = process.env.VAPID_PRIVATE_KEY;
  if (!publique || !privee) return false;
  webpush.setVapidDetails(process.env.VAPID_SUBJECT || "mailto:contact@sauvemonbulletin.fr", publique, privee);
  return true;
}

export interface ContenuPush {
  titre: string;
  corps: string;
  /** Page ouverte quand l'élève touche la notification. */
  url?: string;
}

/** Envoie une notification à tous les appareils d'un élève. Nettoie les abonnements morts. */
export async function envoyerPush(userId: string, contenu: ContenuPush): Promise<number> {
  if (!configure()) return 0;
  const abonnements = await prisma.abonnementPush.findMany({ where: { userId } });
  let envoyes = 0;
  for (const a of abonnements) {
    try {
      await webpush.sendNotification(
        { endpoint: a.endpoint, keys: { p256dh: a.p256dh, auth: a.auth } },
        JSON.stringify(contenu)
      );
      envoyes++;
    } catch (e) {
      // 404/410 : l'abonnement n'existe plus (app désinstallée, permissions retirées).
      const statut = (e as { statusCode?: number }).statusCode;
      if (statut === 404 || statut === 410) {
        await prisma.abonnementPush.delete({ where: { id: a.id } }).catch(() => {});
      }
    }
  }
  return envoyes;
}
