const paths = {
  finance: "M4 19h16 M8 19V11 M13 19V6 M18 19v-9 M6 9l4-3 4 2 5-4",
  healthcare: "M4 12h4l2-5 3 10 2-5h5",
  retail: "M6 8h12l-1 11H7L6 8Z M9 8V6a3 3 0 0 1 6 0v2",
  manufacturing: "M4 20V10l5-3 5 3v10 M14 20v-6l6-3v9",
  logistics: "M4 17h9V7H4v10Z M13 10h4l3 3v4h-7v-7Z M7.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M17 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  "professional-services": "M4 8h16v11H4V8Z M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M4 13h16",
  startups: "M12 3c3 3 4 6 4 9a4 4 0 0 1-8 0c0-3 1-6 4-9Z M9 16l-2 4 M15 16l2 4",
};

export default function IndustryIcon({ slug, className = "" }) {
  const d = paths[slug];
  if (!d) return null;
  const gradientId = `industry-icon-grad-${slug}`;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5b8bf7" />
          <stop offset="1" stopColor="#9b82ff" />
        </linearGradient>
      </defs>
      {d.split(" M").map((seg, i) => (
        <path key={i} d={i === 0 ? seg : `M${seg}`} />
      ))}
    </svg>
  );
}
