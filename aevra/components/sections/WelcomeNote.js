"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SiyaAvatar from "./SiyaAvatar";
import { company } from "@/lib/data";

export default function WelcomeNote() {
  const openChat = () => {
    window.dispatchEvent(new Event("tecinfinitum:open-chat"));
  };

  return (
    <section className="relative py-20" aria-labelledby="welcome-note-heading">
      <Container>
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-[auto_1fr] items-center gap-10">
            <div className="mx-auto md:mx-0 shrink-0">
              <SiyaAvatar size={180} />
            </div>
            <div>
              <h2 id="welcome-note-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Hi, I&apos;m Siya.ai — your guide to {company.name}
              </h2>
              <p className="mt-4 text-white/60 max-w-xl">
                Not sure where to start? Ask me about our services, industries, pricing, or
                process and I&apos;ll point you in the right direction — no forms required.
                I&apos;m available anytime, right from this site.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <button
                  type="button"
                  onClick={openChat}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-sm sm:text-base bg-gradient-to-r from-electric to-brand text-white glow-ring hover:opacity-95 transition"
                >
                  Chat with Siya.ai
                </button>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-sm sm:text-base glass text-white/85 hover:text-white hover:border-white/20 transition"
                >
                  Talk to a human instead
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
