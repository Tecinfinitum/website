import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import IndustryIcon from "./IndustryIcon";
import { industries } from "@/lib/data";

export default function IndustriesPreview() {
  return (
    <section className="relative py-24" aria-labelledby="industries-heading">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 id="industries-heading" className="sr-only">
            Industries We Serve
          </h2>
          <SectionHeading
            eyebrow="Industries we serve"
            title="Domain expertise across the sectors that need it most"
          />
          <Link href="/industries" className="text-sm text-white/60 hover:text-white transition shrink-0">
            View all industries →
          </Link>
        </div>

        <ul className="mt-12 flex flex-wrap gap-3">
          {industries.map((i, idx) => (
            <li key={i.slug}>
              <Reveal delay={(idx % 4) * 60}>
                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 pl-3 pr-5 py-2 text-sm text-white/75 hover:text-white hover:border-white/20 transition">
                  <IndustryIcon slug={i.slug} className="h-4 w-4" />
                  {i.title}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
