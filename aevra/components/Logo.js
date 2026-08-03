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
        d="M9.5 22.5 16 9.5l6.5 13"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.2 17.5h7.6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="9.5" r="1.7" fill="white" />
    </svg>
  );
}
