import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { trustPillars } from "@/lib/data";

export default function TrustPillars() {
  return (
    <section className="relative py-24" aria-labelledby="trust-heading" id="security">
      <Container>
        <h2 id="trust-heading" className="sr-only">
          Enterprise Security &amp; Responsible AI
        </h2>
        <SectionHeading
          eyebrow="Built for the enterprise"
          title="Security, scale, and responsible AI by default"
          desc="Every engagement is held to enterprise standards — not bolted on after the fact."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 90}>
              <div className="glass rounded-2xl p-7 h-full">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-electric to-brand flex items-center justify-center text-white text-sm font-bold" aria-hidden="true">
                  ✓
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
