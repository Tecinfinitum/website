import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL("https://aevra.ai"),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s — ${company.name}`,
  },
  description:
    "Aevra is an enterprise software consulting and AI solutions partner. We design, build, and deploy custom software, system integrations, and production AI that drive measurable business results.",
  keywords: [
    "software consulting",
    "custom software development",
    "AI solutions",
    "AI agents",
    "enterprise software",
    "digital transformation",
  ],
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description:
      "Enterprise software consulting, custom development, and AI solutions built for measurable business impact.",
    type: "website",
    siteName: company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description:
      "Enterprise software consulting, custom development, and AI solutions built for measurable business impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
