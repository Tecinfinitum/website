export default function SectionHeading({ eyebrow, title, desc, align = "left", className = "" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && <span className="text-sm font-medium text-electric-light">{eyebrow}</span>}
      <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">{title}</h2>
      {desc && <p className="mt-4 text-white/60 text-lg">{desc}</p>}
    </div>
  );
}
