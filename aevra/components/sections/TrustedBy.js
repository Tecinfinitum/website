import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";
import { trustedBy, metrics } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="relative py-20 border-y border-white/5" aria-labelledby="trusted-by-heading">
      <Container>
        <p id="trusted-by-heading" className="text-center text-sm uppercase tracking-widest text-white/40">
          Trusted by teams building the future
        </p>

        <Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {trustedBy.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center bg-ink/60 py-8 px-4 text-center text-base font-semibold text-white/40 hover:text-white transition"
              >
                {c}
              </div>
            ))}
          </div>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <div className="text-center">
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-3xl md:text-4xl font-semibold gradient-text">
                  <Counter value={m.value} />
                </dd>
                <p className="mt-2 text-sm text-white/55">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
