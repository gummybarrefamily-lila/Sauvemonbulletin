import type { Metadata, Viewport } from "next";
import { Nunito, Kalam } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { TuteurWidget } from "@/components/TuteurWidget";
import { PwaSetup } from "@/components/PwaSetup";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});
const kalam = Kalam({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-kalam", display: "swap" });

export const metadata: Metadata = {
  title: "SauveMonBulletin — Réviser le collège autrement",
  description:
    "Cours, fiches, cartes mémo, exercices, examens et brevets blancs pour la 6ème, la 5ème, la 4ème et la 3ème. Français, maths, physique-chimie, SVT, histoire-géo, chinois, russe, espagnol et danse.",
  appleWebApp: {
    capable: true,
    title: "SauveMonBulletin",
    statusBarStyle: "default",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1d60f1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${nunito.variable} ${kalam.variable}`}>
      <body>
        <Providers>
          {children}
          <TuteurWidget />
        </Providers>
        <PwaSetup />
        <Analytics />
      </body>
    </html>
  );
}
