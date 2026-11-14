/** Public, static sharing metadata; no page data or session is read here. */
export function pageHead(title: string, description: string) {
  const name = `${title} · Eza Muhinzi`;
  return { meta: [
    { title: name },
    { name: "description", content: description },
    { property: "og:title", content: name },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}