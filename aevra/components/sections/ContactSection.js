import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ConsultationForm from "./ConsultationForm";
import { company } from "@/lib/data";

const nextSteps = [
  { step: "01", title: "We review", desc: "Your request lands with a senior consultant, not a queue." },
  { step: "02", title: "Intro call", desc: "A 30-minute conversation to understand your goals and constraints." },
  { step: "03", title: "Tailored plan", desc: "A scoped proposal with timeline, team, and approach — no boilerplate." },
  { step: "04", title: "Kickoff", desc: "Work starts with the same people who scoped it, not a handoff." },
];

export default function ContactSection({
  eyebrow = "Let's talk",
  title = "Tell us what you're building",
  desc = "Share a few details and we'll get back within one business day with next steps — no obligation, no fluff.",
}) {
  return (
    <section id="contact" className="relative py-24" aria-labelledby="contact-heading">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[40rem] rounded-full bg-brand/20 blur-[120px]" aria-hidden="true" />
      <Container className="relative">
        <div className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10">
          <div>
            <span className="text-sm font-medium text-electric-light">{eyebrow}</span>
            <h2 id="contact-heading" className="mt-3 text-4xl font-semibold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-4 text-white/60">{desc}</p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p>✉︎ {company.email}</p>
              <p>☏ {company.phone}</p>
              <p>◷ Response within 24 hours</p>
              <p>◎ Remote-first, working worldwide</p>
            </div>
          </div>

          <ConsultationForm />
        </div>

        <Reveal delay={100}>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((s) => (
              <div key={s.step} className="text-center sm:text-left">
                <span className="text-xs font-mono text-white/35">{s.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-xs text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
