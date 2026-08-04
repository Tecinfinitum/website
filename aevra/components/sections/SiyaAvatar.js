export default function SiyaAvatar({ size = 220, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 260"
      fill="none"
      className={className}
      role="img"
      aria-label="Abstract illustrated portrait of Siya"
    >
      <defs>
        <linearGradient id="siya-hair" x1="50" y1="35" x2="190" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5b8bf7" />
          <stop offset="1" stopColor="#7c5cff" />
        </linearGradient>
        <linearGradient id="siya-shoulders" x1="70" y1="210" x2="170" y2="270" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f6fed" />
          <stop offset="1" stopColor="#5a3fd6" />
        </linearGradient>
        <radialGradient id="siya-glow" cx="0.5" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#9b82ff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#9b82ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="130" r="118" fill="url(#siya-glow)" />

      {/* hair + head silhouette */}
      <path
        d="M120 35C160 35 190 70 190 115C190 150 175 175 155 190L165 250L75 250L85 190C65 175 50 150 50 115C50 70 80 35 120 35Z"
        fill="url(#siya-hair)"
      />

      {/* shoulders */}
      <path d="M68 252 Q120 216 172 252 L172 270 L68 270 Z" fill="url(#siya-shoulders)" />

      {/* face panel — frosted glass, matches site's card language */}
      <circle cx="120" cy="112" r="40" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

      {/* digital-identity accent nodes, echoing the brand mark */}
      <g stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round">
        <path d="M96 232 108 220 128 226" />
      </g>
      <circle cx="96" cy="232" r="2.4" fill="#fff" />
      <circle cx="108" cy="220" r="2.4" fill="#fff" />
      <circle cx="128" cy="226" r="2.4" fill="#fff" />
    </svg>
  );
}
