"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, company } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label={`${company.name} home`}>
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-electric to-brand text-white font-bold"
              aria-hidden="true"
            >
              A
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">{company.name}</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-full bg-white text-navy px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
          >
            Book a Consultation
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white/80"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white py-2 px-2 rounded-lg transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white text-navy px-4 py-2.5 text-sm font-semibold text-center"
            >
              Book a Consultation
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
