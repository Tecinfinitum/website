import { services, industries, aiUseCases, faqs, company, trustPillars, process } from "./data";

const STOPWORDS = new Set([
  "the", "a", "an", "is", "are", "do", "does", "you", "your", "we", "our", "i", "how",
  "what", "with", "for", "to", "of", "and", "or", "in", "on", "can", "will", "us", "it",
  "that", "this", "be", "have", "has", "about", "me", "know",
]);

function rawWords(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function words(text) {
  return rawWords(text).filter((w) => !STOPWORDS.has(w));
}

function includesAny(msg, terms) {
  return terms.some((t) => msg.includes(t));
}

function hasExactWord(tokens, terms) {
  return terms.some((t) => tokens.includes(t));
}

export function getAssistantReply(input) {
  const msg = input.toLowerCase().trim();
  const tokens = rawWords(msg);
  const msgWords = words(msg);

  if (!msg) {
    return "Ask me anything about our services, industries, pricing, or how to get started.";
  }

  if (hasExactWord(tokens, ["hi", "hey", "hello", "hiya", "howdy", "yo", "sup"]) && tokens.length <= 4) {
    return `Hey! I'm Siya.ai, ${company.name}'s guide. Ask me about our services, industries we work in, pricing, or how to book a consultation.`;
  }

  if (includesAny(msg, ["price", "pricing", "cost", "budget", "how much", "expensive"])) {
    return "We offer fixed-scope project pricing, monthly retainers, and staff-augmentation rates — we'll recommend the right model after a quick discovery call. Want to book a consultation to get a real number?";
  }

  if (includesAny(msg, ["timeline", "how long", "duration", "weeks", "when can"])) {
    return "Most engagements go from discovery to a working pilot in 4–8 weeks. Full rollout timing depends on scope — we'll map it out on a call.";
  }

  if (includesAny(msg, ["security", "secure", "privacy", "compliance", "hipaa", "gdpr", "soc 2", "soc2"])) {
    const t = trustPillars.find((p) => p.title === "Enterprise Security") || trustPillars[0];
    return `${t.desc} We also support HIPAA, GDPR, and SOC 2 requirements depending on your industry.`;
  }

  if (includesAny(msg, ["responsible ai", "hallucinat", "guardrail", "safety", "bias"]) || hasExactWord(tokens, ["safe"])) {
    return "Every AI system we ship includes evaluation, guardrails, and human-in-the-loop review before it touches production — transparency and accountability aren't optional.";
  }

  if (includesAny(msg, ["how do you work", "methodology", "discover", "strategize"]) || hasExactWord(tokens, ["process"])) {
    const steps = process.map((p) => p.title).join(" → ");
    return `We work in six stages: ${steps}. It keeps strategy and execution connected instead of handing you off between teams.`;
  }

  if (includesAny(msg, ["case study", "case studies", "results", "proof", "portfolio", "clients"]) || hasExactWord(tokens, ["example", "examples"])) {
    return "A few examples: 74% faster fraud reviews for a fintech client, +21% conversion from a checkout rebuild, and a 5x faster financial close cycle. Full write-ups are on the Case Studies page.";
  }

  if (includesAny(msg, ["contact", "book", "consultation", "demo", "talk to", "reach", "email", "get started"]) || hasExactWord(tokens, ["call"])) {
    return `Best next step is booking a free consultation — we'll respond within one business day. You can also email us directly at ${company.email}.`;
  }

  const industryMatch = industries.find((ind) => msg.includes(ind.title.toLowerCase()) || msg.includes(ind.slug));
  if (industryMatch) {
    return `${industryMatch.desc} Specifically: ${industryMatch.points.join(", ")}.`;
  }
  if (includesAny(msg, ["industry", "industries", "sector", "sectors"])) {
    return `We work across ${industries.map((i) => i.title).join(", ")}. Which one are you in?`;
  }

  const useCaseMatch = aiUseCases.find((u) => {
    const titleWords = words(u.title).filter((w) => w.length > 4);
    return titleWords.some((w) => msg.includes(w));
  });
  if (useCaseMatch) {
    return `${useCaseMatch.desc} That falls under: ${useCaseMatch.tags.join(", ")}.`;
  }

  if (hasExactWord(tokens, ["ai", "ml", "llm"]) || includesAny(msg, ["agent", "copilot", "chatbot", "artificial intelligence", "machine learning"])) {
    return `Our AI work spans agents, copilots, chatbots, decision-support bots, and financial forecasting AI — all built with evaluation and human oversight. Check the AI Solutions page, or tell me the problem you're trying to solve.`;
  }

  const serviceMatch = services.find((s) => {
    const titleWords = words(s.title).filter((w) => w.length > 4);
    return titleWords.some((w) => msg.includes(w));
  });
  if (serviceMatch) {
    return `${serviceMatch.desc} That includes: ${serviceMatch.points.join(", ")}.`;
  }
  if (includesAny(msg, ["service", "services", "offer", "capabilities", "what do you do"])) {
    return `We cover: ${services.map((s) => s.title).join("; ")}. Want detail on any of these?`;
  }

  let bestFaq = null;
  let bestScore = 0;
  for (const f of faqs) {
    const faqWords = words(f.q);
    const overlap = msgWords.filter((w) => faqWords.includes(w)).length;
    if (overlap > bestScore) {
      bestScore = overlap;
      bestFaq = f;
    }
  }
  if (bestFaq && bestScore >= 2) {
    return bestFaq.a;
  }

  return `I'm not 100% sure on that one — the fastest way to get a real answer is to book a free consultation, or email ${company.email} directly. You can also ask me about our services, industries, pricing, or process.`;
}

export const suggestedPrompts = [
  "What services do you offer?",
  "How much does it cost?",
  "What industries do you work with?",
  "How do I book a consultation?",
];
