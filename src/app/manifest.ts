import type { MetadataRoute } from "next";

/** Manifest PWA : rend le site installable sur l'écran d'accueil (iOS/Android). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SauveMonBulletin",
    short_name: "SauveMonBulletin",
    description:
      "Réviser le collège autrement : cours, exercices, dictées, défis et brevets blancs de la 6ème à la 3ème.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f6fb",
    theme_color: "#1d60f1",
    lang: "fr",
    categories: ["education"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
