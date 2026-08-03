export default function IndustryCard({ industry }) {
  return (
    <article className="glass rounded-2xl p-8 hover:border-brand/40 transition">
      <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
      <p className="mt-3 text-white/60 text-sm leading-relaxed">{industry.desc}</p>
      <ul className="mt-6 space-y-2">
        {industry.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-white/70">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-electric-light shrink-0" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
}
