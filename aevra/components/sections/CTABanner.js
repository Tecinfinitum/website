import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTABanner({
  title = "Ready to see what's possible?",
  desc = "Book a free consultation and leave with a clear, practical plan — no obligation.",
}) {
  return (
    <section className="relative py-24" aria-labelledby="cta-heading">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[42rem] rounded-full bg-brand/20 blur-[120px]" />
      <Container className="relative">
        <div className="glass rounded-3xl px-8 py-14 md:py-16 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-white max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">{desc}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary">Book a Consultation</Button>
            <Button href="/services" variant="secondary">Explore Solutions</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
