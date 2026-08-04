import Image from "next/image";

const images = {
  "fintype-fraud-triage": "/images/enterprise/case-fintech.png",
  "meridian-clinical-assistant": "/images/enterprise/case-healthcare.png",
  "loopcart-checkout-rebuild": "/images/enterprise/case-retail.png",
};

export default function CaseStudyCard({ study }) {
  return (
    <article className="group relative overflow-hidden glass rounded-2xl h-full hover:-translate-y-1 transition duration-300">
      {images[study.slug] && (
        <div className="relative aspect-[3/2] overflow-hidden border-b border-white/10 bg-navy-950">
          <Image
            src={images[study.slug]}
            alt={`${study.client} product interface`}
            fill
            sizes="(min-width: 1024px) 32vw, 90vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent" />
        </div>
      )}
      <div className="p-8">
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
      </div>
    </article>
  );
}
