import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="relative py-20" aria-labelledby="stack-heading">
      <Container>
        <p id="stack-heading" className="text-center text-sm uppercase tracking-widest text-white/40">
          Our technology stack
        </p>
        <Reveal>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {techStack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:text-white hover:border-white/20 transition"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
