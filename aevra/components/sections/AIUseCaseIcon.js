const paths = {
  automate: "M12 5a7 7 0 1 1-6.3 4 M12 5V2l2.5 2.5L12 7",
  "data-decisions": "M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2Z M4 6v12c0 1.1 3.6 2 8 2s8-.9 8-2V6 M4 12c0 1.1 3.6 2 8 2s8-.9 8-2",
  "know-customers": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7 M16 7l2 2 3-3",
  "predict-forecast": "M4 19h16 M4 15l4-5 4 3 5-7 3 3",
  "build-product": "M12 3 21 8 12 13 3 8Z M3 12l9 5 9-5 M3 16l9 5 9-5",
  "computer-vision": "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
};

export default function AIUseCaseIcon({ slug, className = "" }) {
  const d = paths[slug];
  if (!d) return null;
  const gradientId = `ai-use-case-grad-${slug}`;

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
