import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    // Return a generic robots.txt if site is not configured
    // Or throw an error, depending on desired behavior
    return new Response("User-agent: *\nAllow: /", {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
