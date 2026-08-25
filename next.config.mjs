/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // En-têtes de sécurité appliqués à toutes les pages.
        source: "/:path*",
        headers: [
          // Force HTTPS pendant 2 ans (inclut les sous-domaines).
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Empêche l'affichage du site dans une iframe (anti-clickjacking).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Empêche le navigateur de "deviner" le type de fichier.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Limite les infos de provenance envoyées aux autres sites.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Désactive les API sensibles ; autorise le micro pour l'enregistrement vocal (même origine).
          { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=(self)" },
        ],
      },
    ];
  },
};

export default nextConfig;
