import Link from "next/link";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition text-sm sm:text-base";
  const variants = {
    primary: "bg-gradient-to-r from-electric to-brand text-white glow-ring hover:opacity-95",
    secondary: "glass text-white/85 hover:text-white hover:border-white/20",
    ghost: "text-white/70 hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
