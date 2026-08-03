import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import AIUseCaseIcon from "./AIUseCaseIcon";
import { aiUseCases } from "@/lib/data";

export default function AIExplorer() {
  return (
    <section className="relative py-24" aria-labelledby="ai-explorer-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="ai-explorer-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Where does your business need AI most?
          </h2>
          <p className="mt-4 text-white/60">
            Tell us the challenge — we&apos;ll map the solution.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiUseCases.map((u, i) => (
            <Reveal key={u.slug} delay={(i % 3) * 90}>
              <div className="glass rounded-2xl p-7 h-full hover:border-electric/40 hover:-translate-y-1 transition">
                <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <AIUseCaseIcon slug={u.slug} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{u.title}</h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">{u.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {u.tags.map((t) => (
                    <li key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-electric-light">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact" variant="primary">See Where AI Fits</Button>
        </div>
      </Container>
    </section>
  );
}
