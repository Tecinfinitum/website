import Image from "next/image";

export default function SiyaAvatar({ size = 220, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-950 shadow-2xl shadow-brand/15 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/enterprise/siya-ai-child-front.png"
        alt="Siya.ai, TecInfinitum's AI assistant"
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}
