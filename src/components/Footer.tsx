export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-semibold text-slate-700">🎓 SauveMonBulletin</p>
          <p>Réviser la 5ème, la 4ème et la 3ème autrement.</p>
          <p>© {new Date().getFullYear()} — Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
