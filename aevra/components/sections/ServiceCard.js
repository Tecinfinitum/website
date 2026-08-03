export default function ServiceCard({ service }) {
  return (
    <article className="group glass rounded-2xl p-8 hover:border-electric/40 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-electric-light">{service.category}</span>
          <h3 className="mt-2 text-xl font-semibold text-white">{service.title}</h3>
        </div>
        <span className="text-sm font-mono text-white/30 group-hover:text-brand-light transition shrink-0">
          {service.tag}
        </span>
      </div>
      <p className="mt-3 text-white/60 text-sm leading-relaxed">{service.desc}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {service.points.map((p) => (
          <li key={p} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
}
