import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesOverview from "@/components/sections/ServicesOverview";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import TrustPillars from "@/components/sections/TrustPillars";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <IndustriesPreview />
      <ProcessSteps />
      <CaseStudiesPreview />
      <TrustPillars />
      <TechStack />
      <Testimonials limit={2} />
      <FAQ />
      <ContactSection />
    </>
  );
}
