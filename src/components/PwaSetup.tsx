"use client";

import { useEffect } from "react";

/** Enregistre le service worker de la PWA (installation sur l'écran d'accueil). */
export function PwaSetup() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* PWA indisponible (navigateur privé, etc.) : le site fonctionne normalement */
      });
    }
  }, []);
  return null;
}
