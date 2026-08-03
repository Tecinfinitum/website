export default function Logo({ idPrefix = "logo", size = 32, className = "" }) {
  const gradientId = `${idPrefix}-grad`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="2" y1="28" x2="30" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f6fed" />
          <stop offset="1" stopColor="#9b82ff" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
      <path
        d="M10 22 16 10 22 15 10 22"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="22" r="2" fill="white" />
      <circle cx="16" cy="10" r="2" fill="white" />
      <circle cx="22" cy="15" r="2" fill="white" />
    </svg>
  );
}
