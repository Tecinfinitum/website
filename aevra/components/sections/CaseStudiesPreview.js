import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "@/lib/data";

export default function CaseStudiesPreview() {
  const items = caseStudies.slice(0, 3);

  return (
    <section id="work" className="relative py-24" aria-labelledby="case-studies-heading">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 id="case-studies-heading" className="sr-only">
            Case Studies
          </h2>
          <SectionHeading eyebrow="Selected work" title="Outcomes we're proud of" />
          <Link href="/case-studies" className="text-sm text-white/60 hover:text-white transition shrink-0">
            View all case studies →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
