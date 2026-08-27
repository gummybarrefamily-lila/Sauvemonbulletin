"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";

const MENU_ENTRAINER = [
  { href: "/automatismes", label: "⚡ Automatismes du jour" },
  { href: "/problemes-maths", label: "🧩 Problèmes de maths" },
  { href: "/dictee", label: "✍️ Dictée de la semaine" },
  { href: "/ecriture", label: "📝 Atelier d'écriture" },
  { href: "/hebdo", label: "📅 Fondamentaux hebdo" },
  { href: "/bilan", label: "🧭 Examen bilan" },
];

const MENU_REUSSIR = [
  { href: "/methodes", label: "💡 Méthodes" },
  { href: "/comprehension", label: "🔎 Compréhension de texte" },
  { href: "/brevet", label: "🏆 Brevets blancs" },
];

const MENU_ESPACE = [
  { href: "/tableau-de-bord", label: "📊 Mes progrès" },
  { href: "/defis", label: "🏆 Mes défis" },
];

function Deroulant({
  label,
  items,
  ouvert,
  onToggle,
  onClose,
}: {
  label: string;
  items: { href: string; label: string }[];
  ouvert: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 rounded-lg px-3 py-2 font-semibold ${
          ouvert ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        {label}
        <span className={`text-xs transition-transform ${ouvert ? "rotate-180" : ""}`}>▾</span>
      </button>
      {ouvert && (
        <div className="absolute left-0 top-full z-50 mt-1 w-60 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function NavBar() {
  const { data: session } = useSession();
  const [menuOuvert, setMenuOuvert] = useState<"entrainer" | "reussir" | "espace" | null>(null);
  const [mobileOuvert, setMobileOuvert] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Ferme les menus au clic en dehors.
  useEffect(() => {
    function fermer(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenuOuvert(null);
        setMobileOuvert(false);
      }
    }
    document.addEventListener("mousedown", fermer);
    return () => document.removeEventListener("mousedown", fermer);
  }, []);

  const fermerTout = () => {
    setMenuOuvert(null);
    setMobileOuvert(false);
  };

  return (
    <header ref={ref} className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-brand-700" onClick={fermerTout}>
          <span className="text-2xl">🎓</span>
          <span>SauveMonBulletin</span>
        </Link>

        {/* Navigation bureau */}
        <nav className="hidden items-center gap-1 text-sm md:flex">
          <Link href="/matieres" onClick={fermerTout} className="rounded-lg px-3 py-2 font-semibold text-slate-600 hover:bg-slate-100">
            Matières
          </Link>
          <Deroulant
            label="S'entraîner"
            items={MENU_ENTRAINER}
            ouvert={menuOuvert === "entrainer"}
            onToggle={() => setMenuOuvert(menuOuvert === "entrainer" ? null : "entrainer")}
            onClose={fermerTout}
          />
          <Deroulant
            label="Réussir"
            items={MENU_REUSSIR}
            ouvert={menuOuvert === "reussir"}
            onToggle={() => setMenuOuvert(menuOuvert === "reussir" ? null : "reussir")}
            onClose={fermerTout}
          />
          <Link href="/mes-notes" onClick={fermerTout} className="rounded-lg px-3 py-2 font-semibold text-slate-600 hover:bg-slate-100">
            Mon bloc-notes
          </Link>
          {session ? (
            <>
              <Deroulant
                label="Mon espace"
                items={MENU_ESPACE}
                ouvert={menuOuvert === "espace"}
                onToggle={() => setMenuOuvert(menuOuvert === "espace" ? null : "espace")}
                onClose={fermerTout}
              />
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-lg px-3 py-2 font-semibold text-slate-500 hover:bg-slate-100"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link href="/connexion" onClick={fermerTout} className="rounded-lg px-3 py-2 font-semibold text-slate-600 hover:bg-slate-100">
                Connexion
              </Link>
              <Link href="/inscription" onClick={fermerTout} className="btn-primary px-3 py-2 font-semibold">
                S'inscrire
              </Link>
            </>
          )}
        </nav>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setMobileOuvert(!mobileOuvert)}
          className="rounded-lg px-3 py-2 text-xl md:hidden"
          aria-label="Ouvrir le menu"
        >
          {mobileOuvert ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileOuvert && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          <Link href="/matieres" onClick={fermerTout} className="block rounded-xl px-3 py-2.5 font-semibold text-slate-700 hover:bg-slate-50">
            📚 Matières
          </Link>
          <p className="mt-2 px-3 text-xs font-bold uppercase tracking-wide text-slate-400">S'entraîner</p>
          {MENU_ENTRAINER.map((item) => (
            <Link key={item.href} href={item.href} onClick={fermerTout} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              {item.label}
            </Link>
          ))}
          <p className="mt-2 px-3 text-xs font-bold uppercase tracking-wide text-slate-400">Réussir</p>
          {MENU_REUSSIR.map((item) => (
            <Link key={item.href} href={item.href} onClick={fermerTout} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              {item.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-slate-100 pt-3">
            <Link href="/mes-notes" onClick={fermerTout} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              📝 Mon bloc-notes
            </Link>
            {session ? (
              <>
                {MENU_ESPACE.map((item) => (
                  <Link key={item.href} href={item.href} onClick={fermerTout} className="block rounded-xl px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50">
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="block w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-500 hover:bg-slate-50"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link href="/connexion" onClick={fermerTout} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Connexion
                </Link>
                <Link href="/inscription" onClick={fermerTout} className="mt-1 block rounded-xl bg-brand-600 px-3 py-2.5 text-center text-sm font-bold text-white hover:bg-brand-700">
                  S'inscrire gratuitement
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
