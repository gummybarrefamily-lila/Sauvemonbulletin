/** Coche de réussite citron (remplace l'emoji ✅, dont le vert ne suit pas la charte). */
export function Coche({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-[1.15em] w-[1.15em] shrink-0 items-center justify-center rounded-[0.25em] bg-citron align-[-0.15em] text-[0.8em] font-black leading-none text-brand-900 ${className}`}
    >
      ✓
    </span>
  );
}
