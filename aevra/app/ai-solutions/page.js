import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/sections/ServiceCard";
import TrustPillars from "@/components/sections/TrustPillars";
import TechStack from "@/components/sections/TechStack";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/lib/data";

export const metadata = {
  title: "AI Solutions",
  description:
    "Custom AI agents, copilots, chatbots, and decision-support systems, plus AI-driven financial forecasting and reporting — built responsibly and deployed to production.",
};

const aiServices = services.filter((s) => s.category === "AI");

export default function AiSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        title="AI that moves your business, not just a demo"
        desc="We design, build, and operate production AI — agents, copilots, and decision-support systems trained on your data and accountable to your outcomes."
      />

      <section className="relative pb-24" aria-labelledby="ai-services-heading">
        <Container>
          <h2 id="ai-services-heading" className="sr-only">
            AI Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {aiServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 100}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-24" aria-labelledby="responsible-ai-heading">
        <Container>
          <SectionHeading
            eyebrow="Responsible by design"
            title="AI that earns trust, not just automates"
            desc="Every model we ship includes evaluation, guardrails, and human oversight — because AI you can't explain isn't AI you can rely on."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Transparent", desc: "Every output is explainable and traceable back to source data or logic." },
              { title: "Evaluated", desc: "Models are tested against real scenarios before and after deployment." },
              { title: "Overseen", desc: "Human-in-the-loop review for decisions that carry real business risk." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="glass rounded-2xl p-7 h-full">
                  <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TechStack />
      <TrustPillars />
      <CTABanner
        title="See where AI fits in your business"
        desc="Book a consultation and we'll map real, high-impact AI opportunities specific to your operations."
      />
    </>
  );
}
