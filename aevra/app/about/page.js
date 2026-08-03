import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TrustedBy from "@/components/sections/TrustedBy";
import TrustPillars from "@/components/sections/TrustPillars";
import CTABanner from "@/components/sections/CTABanner";
import { company } from "@/lib/data";

export const metadata = {
  title: "About",
  description:
    "Siya is an enterprise software consulting and AI solutions partner focused on measurable business outcomes — operational efficiency, lower costs, and scalable systems.",
};

const values = [
  { title: "Outcomes over output", desc: "We measure success in business impact — efficiency gained, costs reduced, decisions improved — not lines of code shipped." },
  { title: "Senior, accountable teams", desc: "No junior hand-offs or account-manager layers. The people who scope your project are the people who build it." },
  { title: "Built to last", desc: "We design for the next five years of growth, not just the next release — architecture that scales with you." },
  { title: "Responsible by default", desc: "Security, privacy, and responsible AI practices are built in from day one, not retrofitted after launch." },
];

const leadership = [
  { name: "Jordan Whitfield", role: "Chief Executive Officer", bio: "20 years leading enterprise technology teams across fintech and healthcare." },
  { name: "Maya Chen", role: "Chief Technology Officer", bio: "Former principal engineer specializing in distributed systems and applied AI." },
  { name: "Anders Berg", role: "VP, AI Solutions", bio: "Leads responsible AI strategy and delivery across every client engagement." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`We build the software and AI enterprises run on`}
        desc={`${company.name} was founded to close the gap between ambitious technology strategy and software that actually ships — and keeps working.`}
      />

      <section className="relative pb-24" aria-labelledby="story-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 id="story-heading" className="text-3xl font-semibold tracking-tight text-white">
                Our story
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                {company.name} started with a simple observation: most enterprises don&apos;t
                lack ambition around technology and AI — they lack a partner who can turn
                that ambition into working, secure, production software.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Today we work alongside finance, healthcare, retail, manufacturing, logistics,
                and professional services teams to modernize systems, build custom software,
                and deploy AI that produces measurable results — not just proofs of concept.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white">Our mission</h3>
              <p className="mt-3 text-white/60 text-sm leading-relaxed">
                To give enterprise teams the software and AI capability of a world-class
                in-house engineering org — without the years it takes to build one.
              </p>
              <h3 className="mt-8 text-lg font-semibold text-white">Where we work</h3>
              <p className="mt-3 text-white/60 text-sm leading-relaxed">
                Remote-first, with senior engineers and strategists across North America and
                Europe, giving clients extended working-hours coverage and rapid response.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative pb-24" aria-labelledby="values-heading">
        <Container>
          <SectionHeading eyebrow="What we believe" title="The principles behind every engagement" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 100}>
                <div className="glass rounded-2xl p-7 h-full">
                  <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-24" aria-labelledby="leadership-heading">
        <Container>
          <SectionHeading eyebrow="Leadership" title="The team setting the bar" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 100}>
                <div className="glass rounded-2xl p-7 h-full">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-electric to-brand" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{p.name}</h3>
                  <p className="text-sm text-electric-light">{p.role}</p>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TrustedBy />
      <TrustPillars />
      <CTABanner />
    </>
  );
}
