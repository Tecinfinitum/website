import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials({ limit }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="relative py-24" aria-labelledby="testimonials-heading">
      <Container>
        <h2 id="testimonials-heading" className="text-center text-sm font-medium text-electric-light">
          What clients say
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 100}>
              <figure className="glass rounded-2xl p-8 h-full">
                <blockquote className="text-lg md:text-xl font-medium leading-snug text-white">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-white/60">
                  <span className="font-semibold text-white">{t.name}</span> · {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
