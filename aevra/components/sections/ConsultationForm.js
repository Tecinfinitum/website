"use client";

import { useState } from "react";
import { company } from "@/lib/data";

const interests = [
  "Technology Consulting",
  "Custom Software Development",
  "System Integration & Modernization",
  "AI Strategy & Implementation",
  "AI Agents, Copilots & Chatbots",
  "Financial AI & Forecasting",
  "Other",
];

export default function ConsultationForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: interests[0],
    message: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", interest: interests[0], message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            required
            id="name"
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Full name"
            autoComplete="name"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-electric transition"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="company" className="sr-only">Company</label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={update}
            placeholder="Company"
            autoComplete="organization"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-electric transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Work email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={update}
          placeholder="Work email"
          autoComplete="email"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-electric transition"
        />
      </div>

      <div>
        <label htmlFor="interest" className="sr-only">Area of interest</label>
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={update}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-electric transition [&>option]:bg-navy-900"
        >
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          required
          id="message"
          name="message"
          value={form.message}
          onChange={update}
          rows={4}
          placeholder="What are you looking to build or solve?"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-electric transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-gradient-to-r from-electric to-brand px-6 py-3 font-medium text-white glow-ring hover:opacity-95 transition disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request my consultation"}
      </button>

      <div aria-live="polite">
        {status === "sent" && (
          <p className="text-sm text-electric-light">Thanks — we&apos;ll be in touch within one business day.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Email us directly at{" "}
            <a href={`mailto:${company.email}`} className="underline">
              {company.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
