import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";
import NetworkGraphic from "./NetworkGraphic";
import { company } from "@/lib/data";

const stats = [
  { value: "120+", label: "products shipped" },
  { value: "7", label: "industries served" },
  { value: "98%", label: "client retention" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-brand/30 blur-[120px]" aria-hidden="true" />
      <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-electric/25 blur-[100px] animate-float" aria-hidden="true" />
      <NetworkGraphic className="absolute inset-0 w-full h-full opacity-60" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-light" aria-hidden="true" />
            Enterprise software &amp; AI consulting
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-white">
            {company.tagline.split("—")[0]}
            <span className="gradient-text">—Built for Business</span>
          </h1>

          <p className="mt-6 text-lg text-white/65 max-w-2xl mx-auto">
            {company.name} partners with enterprise teams to modernize systems, ship custom
            software, and deploy AI that produces measurable results — lower costs, faster
            decisions, and systems built to scale.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary">Book a Consultation</Button>
            <Button href="/services" variant="secondary">Explore Solutions</Button>
          </div>

          <Reveal delay={200}>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/45 flex-wrap">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  {i > 0 && <div className="h-8 w-px bg-white/10 hidden sm:block" aria-hidden="true" />}
                  <div>
                    <div className="text-2xl font-semibold text-white">
                      <Counter value={s.value} />
                    </div>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
