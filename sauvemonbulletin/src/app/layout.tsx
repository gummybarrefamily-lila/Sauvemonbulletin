import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { TuteurWidget } from "@/components/TuteurWidget";

export const metadata: Metadata = {
  title: "SauveMonBulletin — Réviser le collège autrement",
  description:
    "Cours, fiches, cartes mémo, exercices, examens et brevets blancs pour la 5ème, la 4ème et la 3ème. Français, maths, physique-chimie, SVT, histoire-géo, chinois, russe et danse.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          {children}
          <TuteurWidget />
        </Providers>
      </body>
    </html>
  );
}
