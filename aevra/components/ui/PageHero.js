import Container from "./Container";

export default function PageHero({ eyebrow, title, desc }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-brand/25 blur-[120px]" />
      <Container className="relative">
        <div className="max-w-3xl animate-fadeUp">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-light" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-white">
            {title}
          </h1>
          {desc && <p className="mt-6 text-lg text-white/65 max-w-2xl">{desc}</p>}
        </div>
      </Container>
    </section>
  );
}
