import { redirect } from "next/navigation";

/** Ancienne adresse : la page vit désormais dans Mon espace → Mes défis. */
export default function PageRecompenses() {
  redirect("/defis");
}
