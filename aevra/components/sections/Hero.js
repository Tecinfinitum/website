import Container from "../ui/Container";
import Image from "next/image";
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
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] animate-fadeUp">
          <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-light" aria-hidden="true" />
            Enterprise software &amp; AI consulting
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-white">
            {company.tagline.split("—")[0]}
            <span className="gradient-text">—Built for Business</span>
          </h1>

          <p className="mt-6 text-lg text-white/65 max-w-2xl mx-auto lg:mx-0">
            {company.name} partners with enterprise teams to modernize systems, ship custom
            software, and deploy AI that produces measurable results — lower costs, faster
            decisions, and systems built to scale.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button href="/contact" variant="primary">Book a Consultation</Button>
            <Button href="/services" variant="secondary">Explore Solutions</Button>
          </div>

          <Reveal delay={200}>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-white/45 flex-wrap">
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

          <div className="relative mx-auto w-full max-w-3xl lg:max-w-none" aria-hidden="true">
            <div className="absolute -inset-8 rounded-[3rem] bg-electric/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-950/80 shadow-2xl shadow-electric/10">
              <Image
                src="/images/enterprise/hero-platform.png"
                alt=""
                width={1717}
                height={916}
                priority
                sizes="(min-width: 1024px) 55vw, 92vw"
                className="h-auto w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/25 via-transparent to-brand/5" />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-navy-950/90 px-5 py-3 text-xs text-white/55 shadow-xl backdrop-blur-xl">
              <span>Strategy → systems → measurable outcomes</span>
              <span className="flex items-center gap-2 text-white/75"><span className="h-2 w-2 rounded-full bg-emerald-400" />Enterprise ready</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
