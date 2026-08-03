import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { company } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses, and protects your data.`,
};

const sections = [
  {
    title: "Information we collect",
    body: "We collect information you provide directly, such as your name, email, company, and message when you submit a consultation request or contact form. We also collect standard analytics data (pages visited, browser type) to improve the site.",
  },
  {
    title: "How we use your information",
    body: "We use the information you provide to respond to consultation requests, deliver services you've engaged us for, and send relevant updates you've opted into. We do not sell your personal information.",
  },
  {
    title: "Data security",
    body: "We apply industry-standard security practices, including encryption in transit and access controls, to protect the information you share with us.",
  },
  {
    title: "Data retention",
    body: "We retain contact and engagement information only as long as necessary to provide our services and meet legal or contractual obligations, after which it is securely deleted.",
  },
  {
    title: "Your rights",
    body: `You may request access to, correction of, or deletion of your personal data at any time by contacting us at ${company.email}.`,
  },
  {
    title: "Contact us",
    body: `Questions about this policy can be directed to ${company.email} or ${company.address}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" desc="Last updated: August 2026" />
      <section className="relative pb-28">
        <Container>
          <div className="max-w-3xl space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-semibold text-white">{s.title}</h2>
                <p className="mt-3 text-white/60 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
