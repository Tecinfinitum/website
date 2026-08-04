import Link from "next/link";
import Container from "./ui/Container";
import Logo from "./Logo";
import { company } from "@/lib/data";

const footerNav = {
  Services: [
    { href: "/services", label: "Technology Consulting" },
    { href: "/services", label: "Custom Applications" },
    { href: "/services", label: "Integration & Modernization" },
    { href: "/ai-solutions", label: "AI Strategy & Agents" },
  ],
  Industries: [
    { href: "/industries", label: "Finance" },
    { href: "/industries", label: "Healthcare" },
    { href: "/industries", label: "Retail" },
    { href: "/industries", label: "Manufacturing" },
    { href: "/industries", label: "Logistics" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
};

const social = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "X / Twitter" },
  { href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label={`${company.name} home`}>
              <Logo size={28} />
              <span className="font-semibold text-white">{company.name}</span>
            </Link>
            <p className="mt-4 text-sm text-white/50 max-w-xs">{company.tagline}</p>
            <address className="mt-6 not-italic text-sm text-white/50 space-y-1.5">
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-white transition">
                  {company.email}
                </a>
              </p>
              <p>{company.phone}</p>
              <p>{company.address}</p>
            </address>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="text-sm font-semibold text-white">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/50 hover:text-white transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition">
              Privacy Policy
            </Link>
            <div className="flex items-center gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white transition"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
