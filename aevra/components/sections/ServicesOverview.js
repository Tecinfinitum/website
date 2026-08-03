import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { services } from "@/lib/data";

export default function ServicesOverview() {
  return (
    <section id="services" className="relative py-28" aria-labelledby="services-heading">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 id="services-heading" className="sr-only">
            Services
          </h2>
          <SectionHeading
            eyebrow="What we do"
            title="Software, strategy, and AI in one senior team"
            desc="From consulting to production AI, we cover the full path from idea to measurable business impact."
          />
          <Link href="/services" className="text-sm text-white/60 hover:text-white transition shrink-0">
            View all services →
          </Link>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.slug} className="group glass rounded-2xl p-6 hover:border-electric/40 transition">
              <span className="text-xs font-medium uppercase tracking-wider text-electric-light">{s.category}</span>
              <h3 className="mt-2 text-base font-semibold text-white leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.short}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
