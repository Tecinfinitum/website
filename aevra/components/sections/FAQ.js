"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24" aria-labelledby="faq-heading" id="faq">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we hear often"
          desc="Can't find what you're looking for? Reach out and we'll answer directly."
        />

        <div className="mt-12 max-w-3xl space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.q} className="glass rounded-2xl overflow-hidden">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-white font-medium"
                  >
                    <span>{item.q}</span>
                    <span className="shrink-0 text-white/50 text-xl" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-white/60 text-sm leading-relaxed"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
