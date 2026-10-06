import Link from "next/link";

export type PoseMascotte = "sourire" | "clin-oeil" | "bravo" | "reflechir";

const ENCRE = "#16324F";
const CITRON = "#C8F03C";
const LANGUE = "#F7A1B4";

/** Le bulletin-mascotte du brand book (papier, coin replié, deux lignes de texte). */
export function Mascotte({
  pose = "sourire",
  taille = 40,
  className = "",
  titre,
}: {
  pose?: PoseMascotte;
  taille?: number;
  className?: string;
  /** Texte alternatif ; sans titre, la mascotte est décorative. */
  titre?: string;
}) {
  const yeux = {
    sourire: <path d="M37 41q5-6 10 0M60 36q5-6 10 0" />,
    bravo: <path d="M37 41q5-6 10 0M60 36q5-6 10 0" />,
    "clin-oeil": (
      <>
        <circle cx="42" cy="40" r="3.6" fill={ENCRE} stroke="none" />
        <path d="M61 33l8 3-7 5" />
      </>
    ),
    reflechir: <path d="M37 38q5 5 10 0M60 33q5 5 10 0" />,
  }[pose];

  const bouche =
    pose === "bravo" ? (
      <>
        <path d="M47 49q9-3 17-5q-1 11-9 12q-7 1-8-7z" fill={ENCRE} />
        <path d="M51 53q4-3 8-2q-2 4-6 4z" fill={LANGUE} stroke="none" />
      </>
    ) : (
      <path d="M48 50q8 7 16-3" />
    );

  return (
    <svg
      width={taille}
      height={Math.round(taille * 0.92)}
      viewBox="0 0 120 110"
      className={className}
      role={titre ? "img" : undefined}
      aria-label={titre}
      aria-hidden={titre ? undefined : true}
    >
      <g
        transform="rotate(-16 58 58)"
        stroke={ENCRE}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path
          d="M28 18h56a10 10 0 0 1 10 10v34l-24 24H28a10 10 0 0 1-10-10V28a10 10 0 0 1 10-10z"
          fill="#F5F8FC"
        />
        <path d="M94 62L70 86V72a10 10 0 0 1 10-10z" fill={CITRON} strokeWidth={5} />
        {yeux}
        {bouche}
        <path d="M31 63h18M31 73h13" stroke="#A9BBD3" strokeWidth={5.5} />
      </g>
      <g stroke={CITRON} strokeWidth={5.5} strokeLinecap="round">
        <path d="M93 12l4-8M101 20l9-5M104 30h9" />
      </g>
    </svg>
  );
}

/** Logo complet : mascotte + « SauveMon » en marine + « Bulletin » en citron. */
export function Logo({
  taille = 36,
  className = "",
  onClick,
}: {
  taille?: number;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`flex items-center gap-2 font-black tracking-tight text-brand-900 ${className}`}
    >
      <Mascotte taille={taille} />
      <span>
        SauveMon<span className="text-citron">Bulletin</span>
      </span>
    </Link>
  );
}
