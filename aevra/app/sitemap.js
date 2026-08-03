const routes = [
  "",
  "/services",
  "/ai-solutions",
  "/industries",
  "/case-studies",
  "/about",
  "/insights",
  "/contact",
  "/privacy",
];

export default function sitemap() {
  const base = "https://siya.ai";
  const now = new Date();

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
