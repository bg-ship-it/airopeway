/**
 * Generates a unique SVG cover illustration per blog post slug.
 * Used as a fallback when no Sanity mainImage is set.
 */

type CoverConfig = {
  bg: [string, string];   // gradient stops
  accent: string;
  svg: React.ReactNode;
};

const covers: Record<string, CoverConfig> = {
  "enterprise-ai-agent-management-guide": {
    bg: ["#4338ca", "#7c3aed"],
    accent: "#a78bfa",
    svg: (
      <>
        <circle cx="200" cy="120" r="22" fill="none" stroke="#a78bfa" strokeWidth="2.5" opacity="0.9" />
        <circle cx="200" cy="120" r="8" fill="#a78bfa" opacity="0.9" />
        <circle cx="120" cy="80" r="14" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.6" />
        <circle cx="120" cy="80" r="5" fill="#a78bfa" opacity="0.6" />
        <circle cx="280" cy="80" r="14" fill="none" stroke="#c4b5fd" strokeWidth="2" opacity="0.6" />
        <circle cx="280" cy="80" r="5" fill="#c4b5fd" opacity="0.6" />
        <circle cx="100" cy="165" r="10" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5" />
        <circle cx="100" cy="165" r="4" fill="#a78bfa" opacity="0.5" />
        <circle cx="300" cy="165" r="10" fill="none" stroke="#c4b5fd" strokeWidth="1.5" opacity="0.5" />
        <circle cx="300" cy="165" r="4" fill="#c4b5fd" opacity="0.5" />
        <line x1="200" y1="120" x2="120" y2="80" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4" />
        <line x1="200" y1="120" x2="280" y2="80" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4" />
        <line x1="200" y1="120" x2="100" y2="165" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4" />
        <line x1="200" y1="120" x2="300" y2="165" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4" />
        <line x1="120" y1="80" x2="100" y2="165" stroke="#a78bfa" strokeWidth="1" opacity="0.25" />
        <line x1="280" y1="80" x2="300" y2="165" stroke="#c4b5fd" strokeWidth="1" opacity="0.25" />
        {/* Orbit ring */}
        <ellipse cx="200" cy="120" rx="70" ry="40" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
      </>
    ),
  },

  "ai-sales-automation-revops-2026": {
    bg: ["#c2410c", "#ea580c"],
    accent: "#fb923c",
    svg: (
      <>
        <polygon points="100,60 300,60 260,115 140,115" fill="#fb923c" opacity="0.25" />
        <polygon points="140,120 260,120 235,165 165,165" fill="#fb923c" opacity="0.35" />
        <polygon points="165,170 235,170 218,205 182,205" fill="#fb923c" opacity="0.5" />
        <polygon points="100,60 300,60 260,115 140,115" fill="none" stroke="#fb923c" strokeWidth="1.5" opacity="0.6" />
        <polygon points="140,120 260,120 235,165 165,165" fill="none" stroke="#fb923c" strokeWidth="1.5" opacity="0.6" />
        <polygon points="165,170 235,170 218,205 182,205" fill="none" stroke="#fb923c" strokeWidth="1.5" opacity="0.6" />
        <line x1="200" y1="215" x2="200" y2="240" stroke="#fb923c" strokeWidth="2.5" />
        <polyline points="188,228 200,240 212,228" fill="none" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="320" cy="90" r="3" fill="#fb923c" opacity="0.7" />
        <circle cx="80" cy="130" r="2" fill="#fb923c" opacity="0.5" />
        <circle cx="330" cy="170" r="2" fill="#fb923c" opacity="0.5" />
        <line x1="317" y1="90" x2="323" y2="90" stroke="#fb923c" strokeWidth="1.5" opacity="0.7" />
        <line x1="320" y1="87" x2="320" y2="93" stroke="#fb923c" strokeWidth="1.5" opacity="0.7" />
      </>
    ),
  },

  "ai-business-transformation-board-playbook": {
    bg: ["#92400e", "#b45309"],
    accent: "#fbbf24",
    svg: (
      <>
        <rect x="80" y="200" width="36" height="40" rx="4" fill="#fbbf24" opacity="0.3" />
        <rect x="128" y="175" width="36" height="65" rx="4" fill="#fbbf24" opacity="0.4" />
        <rect x="176" y="145" width="36" height="95" rx="4" fill="#fbbf24" opacity="0.55" />
        <rect x="224" y="110" width="36" height="130" rx="4" fill="#fbbf24" opacity="0.7" />
        <rect x="272" y="70" width="36" height="170" rx="4" fill="#fbbf24" opacity="0.9" />
        <polyline
          points="98,196 146,170 194,140 242,105 290,65"
          fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          opacity="0.9"
        />
        <circle cx="290" cy="65" r="8" fill="#fbbf24" opacity="0.9" />
        <line x1="305" y1="50" x2="315" y2="42" stroke="#fbbf24" strokeWidth="2" opacity="0.7" />
        <line x1="308" y1="65" x2="320" y2="65" stroke="#fbbf24" strokeWidth="2" opacity="0.7" />
        <line x1="305" y1="80" x2="315" y2="88" stroke="#fbbf24" strokeWidth="2" opacity="0.7" />
        <line x1="70" y1="245" x2="330" y2="245" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4" />
      </>
    ),
  },

  "ai-automation-workflow-operational-bottlenecks": {
    bg: ["#0f766e", "#0d9488"],
    accent: "#34d399",
    svg: (
      <>
        <rect x="55" y="105" width="60" height="40" rx="10" fill="#34d399" opacity="0.25" stroke="#34d399" strokeWidth="1.5" />
        <rect x="55" y="105" width="60" height="40" rx="10" fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.7" />
        <rect x="170" y="75" width="60" height="40" rx="10" fill="#34d399" opacity="0.35" stroke="#34d399" strokeWidth="1.5" />
        <rect x="170" y="75" width="60" height="40" rx="10" fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.7" />
        <rect x="170" y="145" width="60" height="40" rx="10" fill="#34d399" opacity="0.35" stroke="#34d399" strokeWidth="1.5" />
        <rect x="170" y="145" width="60" height="40" rx="10" fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.7" />
        <rect x="285" y="110" width="60" height="40" rx="10" fill="#34d399" opacity="0.5" stroke="#34d399" strokeWidth="2" />
        <rect x="285" y="110" width="60" height="40" rx="10" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.9" />
        <line x1="115" y1="125" x2="170" y2="95" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
        <line x1="115" y1="125" x2="170" y2="165" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
        <line x1="230" y1="95" x2="285" y2="125" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
        <line x1="230" y1="165" x2="285" y2="135" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
        <polyline points="162,88 170,95 162,102" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="162,158 170,165 162,172" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="277,118 285,125 277,132" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="302,132 311,141 328,118" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </>
    ),
  },

  "ai-gtm-strategy-pipeline": {
    bg: ["#9d174d", "#be185d"],
    accent: "#f472b6",
    svg: (
      <>
        <ellipse cx="200" cy="140" rx="110" ry="65" fill="none" stroke="#f472b6" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.35" />
        <ellipse cx="200" cy="140" rx="75" ry="44" fill="none" stroke="#f472b6" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
        <path d="M200 60 C210 80 215 105 215 130 L200 150 L185 130 C185 105 190 80 200 60 Z" fill="#f472b6" opacity="0.8" />
        <path d="M200 60 C205 52 200 45 200 45 C200 45 195 52 200 60 Z" fill="#f472b6" opacity="0.9" />
        <circle cx="200" cy="115" r="8" fill="none" stroke="white" strokeWidth="2" opacity="0.7" />
        <circle cx="200" cy="115" r="4" fill="white" opacity="0.5" />
        <path d="M185 130 L172 148 L185 145 Z" fill="#f472b6" opacity="0.6" />
        <path d="M215 130 L228 148 L215 145 Z" fill="#f472b6" opacity="0.6" />
        <path d="M193 150 C196 165 200 172 200 172 C200 172 204 165 207 150 Z" fill="#fbbf24" opacity="0.8" />
        <path d="M196 150 C198 160 200 165 200 165 C200 165 202 160 204 150 Z" fill="white" opacity="0.6" />
        <circle cx="90" cy="140" r="5" fill="#f472b6" opacity="0.8" />
        <circle cx="310" cy="140" r="5" fill="#f472b6" opacity="0.8" />
        <circle cx="145" cy="80" r="4" fill="#f472b6" opacity="0.6" />
        <circle cx="255" cy="80" r="4" fill="#f472b6" opacity="0.6" />
        <circle cx="145" cy="200" r="4" fill="#f472b6" opacity="0.6" />
        <circle cx="255" cy="200" r="4" fill="#f472b6" opacity="0.6" />
      </>
    ),
  },
};

const defaultCover: CoverConfig = {
  bg: ["#1e1b4b", "#312e81"],
  accent: "#818cf8",
  svg: (
    <>
      <circle cx="200" cy="130" r="55" fill="none" stroke="#818cf8" strokeWidth="2" opacity="0.5" />
      <circle cx="200" cy="130" r="30" fill="#818cf8" opacity="0.2" />
      <circle cx="200" cy="130" r="10" fill="#818cf8" opacity="0.7" />
      <line x1="200" y1="60" x2="200" y2="80" stroke="#818cf8" strokeWidth="2" opacity="0.5" />
      <line x1="200" y1="180" x2="200" y2="200" stroke="#818cf8" strokeWidth="2" opacity="0.5" />
      <line x1="130" y1="130" x2="150" y2="130" stroke="#818cf8" strokeWidth="2" opacity="0.5" />
      <line x1="250" y1="130" x2="270" y2="130" stroke="#818cf8" strokeWidth="2" opacity="0.5" />
    </>
  ),
};

export function BlogCover({
  slug,
  title,
  className = "",
}: {
  slug: string;
  title: string;
  className?: string;
}) {
  const config = covers[slug] ?? defaultCover;
  const [g1, g2] = config.bg;

  return (
    <svg
      viewBox="0 0 400 250"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={`Cover image for ${title}`}
      role="img"
    >
      <defs>
        <linearGradient id={`grad-${slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={g1} />
          <stop offset="100%" stopColor={g2} />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#grad-${slug})`} />
      <rect width="400" height="250" fill="white" opacity="0.03" />
      {config.svg}
    </svg>
  );
}
