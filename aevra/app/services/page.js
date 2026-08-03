import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/sections/ServiceCard";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services",
  description:
    "Technology consulting, custom software development, system integration, and AI implementation services engineered for measurable business outcomes.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every capability your roadmap needs, one accountable team"
        desc="From strategy and consulting to custom engineering and production AI, we deliver end-to-end so nothing gets lost between vendors."
      />

      <section className="relative pb-24" aria-labelledby="services-list-heading">
        <Container>
          <h2 id="services-list-heading" className="sr-only">
            All Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 100}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSteps />
      <CTABanner />
    </>
  );
}
