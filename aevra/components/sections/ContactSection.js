import Container from "../ui/Container";
import ConsultationForm from "./ConsultationForm";
import { company } from "@/lib/data";

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
      </Container>
    </section>
  );
}
