import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import { caseStudies } from "@/lib/data";

export const metadata = {
  title: "Case Studies",
  description:
    "Real client challenges, the solutions we engineered, the technologies we used, and the measurable results delivered across finance, healthcare, retail, logistics, and manufacturing.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Outcomes we're proud of"
        desc="A look at the challenges our clients brought us, how we solved them, and the measurable impact that followed."
      />

      <section className="relative pb-28" aria-labelledby="case-studies-list-heading">
        <Container>
          <h2 id="case-studies-list-heading" className="sr-only">
            All Case Studies
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 100}>
                <CaseStudyCard study={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <CTABanner title="Want results like these?" desc="Let's talk about what a similar outcome could look like for your business." />
    </>
  );
}
