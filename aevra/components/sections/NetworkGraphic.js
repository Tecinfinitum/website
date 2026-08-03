const nodes = [
  { id: "a", x: 620, y: 90, r: 4 },
  { id: "b", x: 720, y: 150, r: 3 },
  { id: "c", x: 560, y: 190, r: 5 },
  { id: "d", x: 680, y: 260, r: 3 },
  { id: "e", x: 780, y: 220, r: 4 },
  { id: "f", x: 520, y: 300, r: 3 },
  { id: "g", x: 640, y: 360, r: 5 },
  { id: "h", x: 760, y: 340, r: 3 },
  { id: "i", x: 460, y: 130, r: 3 },
  { id: "j", x: 840, y: 110, r: 3 },
];

const edges = [
  ["a", "c"],
  ["a", "b"],
  ["b", "e"],
  ["c", "d"],
  ["c", "f"],
  ["d", "e"],
  ["d", "g"],
  ["e", "h"],
  ["g", "h"],
  ["g", "f"],
  ["a", "i"],
  ["b", "j"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function NetworkGraphic({ className = "" }) {
  return (
    <svg
      viewBox="0 0 900 450"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="network-line" x1="0" y1="0" x2="900" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5b8bf7" stopOpacity="0.5" />
          <stop offset="1" stopColor="#9b82ff" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {edges.map(([from, to]) => {
        const a = byId[from];
        const b = byId[to];
        return (
          <line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#network-line)"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="animate-dash"
          />
        );
      })}

      {nodes.map((n, i) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="#9b82ff"
          className="animate-pulseSoft"
          style={{ animationDelay: `${i * 0.35}s`, transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}
    </svg>
  );
}
