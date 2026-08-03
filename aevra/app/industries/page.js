import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import IndustryCard from "@/components/sections/IndustryCard";
import CTABanner from "@/components/sections/CTABanner";
import { industries } from "@/lib/data";

export const metadata = {
  title: "Industries",
  description:
    "Domain-aware software and AI expertise across finance, healthcare, retail, manufacturing, logistics, professional services, and startups.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Built with the context your industry demands"
        desc="Generic software misses the details that matter. We bring domain-specific engineering and AI expertise to every sector we serve."
      />

      <section className="relative pb-28" aria-labelledby="industries-list-heading">
        <Container>
          <h2 id="industries-list-heading" className="sr-only">
            All Industries
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i, idx) => (
              <Reveal key={i.slug} delay={(idx % 3) * 100}>
                <IndustryCard industry={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Don't see your industry?"
        desc="We adapt fast. Tell us about your business and we'll show you where software and AI can move the needle."
      />
    </>
  );
}
