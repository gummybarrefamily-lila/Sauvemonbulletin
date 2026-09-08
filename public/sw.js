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

// Notifications push : affiche la notification reçue.
self.addEventListener("push", (event) => {
  let contenu = { titre: "SauveMonBulletin", corps: "", url: "/" };
  try {
    contenu = Object.assign(contenu, event.data ? event.data.json() : {});
  } catch (e) {
    /* contenu illisible : on garde les valeurs par défaut */
  }
  event.waitUntil(
    self.registration.showNotification(contenu.titre, {
      body: contenu.corps,
      icon: "/icon-192.png",
      badge: "/icon-192.png",
      data: { url: contenu.url || "/" },
    })
  );
});

// Toucher la notification ouvre (ou ramène au premier plan) la page visée.
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((fenetres) => {
      for (const f of fenetres) {
        if ("focus" in f) {
          f.navigate(url);
          return f.focus();
        }
      }
      return clients.openWindow(url);
    })
  );
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
