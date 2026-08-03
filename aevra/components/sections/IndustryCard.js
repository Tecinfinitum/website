import IndustryIcon from "./IndustryIcon";

export default function IndustryCard({ industry }) {
  return (
    <article className="glass rounded-2xl p-8 h-full hover:border-brand/40 hover:-translate-y-1 transition">
      <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
        <IndustryIcon slug={industry.slug} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{industry.title}</h3>
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
