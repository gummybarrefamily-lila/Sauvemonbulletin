/*
 * Service worker SauveMonBulletin (PWA).
 * - Fichiers statiques (/_next/static, icônes) : cache d'abord (ils sont versionnés).
 * - Pages : réseau d'abord, avec repli sur le cache si hors ligne.
 * - Les appels /api ne sont jamais interceptés (connexion, scores, tuteur…).
 */
const CACHE = "smb-v1";
const PRECACHE = ["/", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cles) => Promise.all(cles.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  // Statique versionné : cache d'abord.
  if (url.pathname.startsWith("/_next/static/") || url.pathname.endsWith(".png")) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((rep) => {
            const copie = rep.clone();
            caches.open(CACHE).then((c) => c.put(req, copie));
            return rep;
          })
      )
    );
    return;
  }

  // Pages : réseau d'abord, cache en secours (mode hors ligne).
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((rep) => {
          const copie = rep.clone();
          caches.open(CACHE).then((c) => c.put(req, copie));
          return rep;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match("/")))
    );
  }
});
