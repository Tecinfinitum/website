import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { process } from "@/lib/data";

export default function ProcessSteps() {
  return (
    <section className="relative py-24" aria-labelledby="process-heading" id="how-we-work">
      <Container>
        <h2 id="process-heading" className="sr-only">
          How We Work
        </h2>
        <SectionHeading
          eyebrow="How we work"
          title="A disciplined process, built for momentum"
          desc="Six stages that keep strategy and execution connected — from first conversation to compounding results."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <li key={p.step}>
              <Reveal delay={(i % 3) * 100}>
                <div className="glass rounded-2xl p-7 h-full hover:border-electric/40 transition">
                  <span className="text-sm font-mono text-white/35">{p.step}</span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
