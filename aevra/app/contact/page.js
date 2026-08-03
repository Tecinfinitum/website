import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";
import { company } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Aevra to discuss software consulting, custom development, or AI implementation for your business.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your consultation"
        desc={`Tell us about your goals and we'll respond within one business day with clear next steps. You can also reach us directly at ${company.email}.`}
      />
      <ContactSection />
      <FAQ />
    </>
  );
}
