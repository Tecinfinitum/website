import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTABanner from "@/components/sections/CTABanner";
import { insights } from "@/lib/data";

export const metadata = {
  title: "Insights",
  description:
    "Practical perspectives on AI strategy, software modernization, and enterprise technology from the Siya team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical thinking on software, strategy, and AI"
        desc="No hype, no jargon — just what we're learning building and shipping enterprise systems."
      />

      <section className="relative pb-28" aria-labelledby="insights-list-heading">
        <Container>
          <h2 id="insights-list-heading" className="sr-only">
            Latest Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 100}>
                <article className="group glass rounded-2xl p-7 h-full flex flex-col hover:border-electric/40 hover:-translate-y-1 transition">
                  <span className="text-xs font-medium uppercase tracking-wider text-electric-light">{post.category}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white leading-snug">{post.title}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-white/40">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner title="Have a challenge worth discussing?" desc="Bring us the problem — we'll bring the plan." />
    </>
  );
}
