export default function CaseStudyCard({ study }) {
  return (
    <article className="group relative overflow-hidden glass rounded-2xl p-8 hover:-translate-y-1 transition duration-300">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-white">{study.client}</span>
        <span className="text-white/40">{study.sector}</span>
      </div>

      <dl className="mt-6 space-y-4">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-white/40">Challenge</dt>
          <dd className="mt-1 text-sm text-white/70 leading-relaxed">{study.challenge}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-white/40">Solution</dt>
          <dd className="mt-1 text-sm text-white/70 leading-relaxed">{study.solution}</dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2">
        {study.technologies.map((t) => (
          <li key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/60">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
        {study.results.map((r) => (
          <div key={r.label}>
            <div className="text-2xl font-semibold gradient-text">{r.value}</div>
            <div className="text-xs text-white/50 mt-1">{r.label}</div>
          </div>
        ))}
      </div>
    </article>
  );
}
