// Post-build step: writes one static index.html per route (HTTP 200 on GitHub Pages)
// with its own <title>, description, canonical, Open Graph tags and JSON-LD,
// plus sitemap.xml and a noindex 404.html.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist", "public");
const SITE = "https://dr-stephanie-hassoun.fr";

const routes = [
  { path: "/", file: "src/pages/HomePage.tsx", faqFile: "src/components/AvisEtFAQ.tsx", name: "Accueil" },
  { path: "/implant-dentaire-marseille", file: "src/pages/ImplantPage.tsx", name: "Implant dentaire" },
  { path: "/parodontite-marseille", file: "src/pages/ParodontitePage.tsx", name: "Parodontite" },
  { path: "/gencives-qui-saignent-marseille", file: "src/pages/GencivesPage.tsx", name: "Gencives qui saignent" },
  { path: "/dentiste-enfant-marseille", file: "src/pages/DentisteEnfantPage.tsx", name: "Dentiste enfant" },
  { path: "/urgence-dentaire-marseille", file: "src/pages/UrgencePage.tsx", name: "Urgence dentaire" },
];

const str = '"((?:[^"\\\\]|\\\\.)*)"';
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");
const unq = (s) => JSON.parse(`"${s}"`);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

function build(route) {
  const src = read(route.file);
  const title = unq(src.match(new RegExp(`title:\\s*${str}`))[1]);
  const description = unq(src.match(new RegExp(`description:\\s*${str}`))[1]);
  const url = `${SITE}${route.path === "/" ? "/" : route.path + "/"}`;

  const faqSrc = route.faqFile ? read(route.faqFile) : src;
  const faqs = [...faqSrc.matchAll(new RegExp(`q:\\s*${str},\\s*r:\\s*${str}`, "g"))].map((m) => ({
    "@type": "Question",
    name: unq(m[1]),
    acceptedAnswer: { "@type": "Answer", text: unq(m[2]) },
  }));

  const extra = [];
  if (faqs.length) extra.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs });
  extra.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement:
      route.path === "/"
        ? [{ "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` }]
        : [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: route.name, item: url },
          ],
  });
  const ld = extra.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n    ");

  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  // The Dentist block describes the practice: keep it on the home page only.
  if (route.path !== "/") {
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, "");
  }
  html = html.replace("</head>", `    ${ld}\n  </head>`);
  return { html, url };
}

const urls = [];
for (const r of routes) {
  const { html, url } = build(r);
  const out = r.path === "/" ? path.join(dist, "index.html") : path.join(dist, r.path, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  urls.push(url);
}

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u === `${SITE}/` ? "1.0" : "0.8"}</priority>\n  </url>`,
      )
      .join("\n") +
    `\n</urlset>\n`,
);

// 404.html: unknown URLs get the app's "Page introuvable" screen, never indexed.
fs.writeFileSync(
  path.join(dist, "404.html"),
  template.replace("<head>", '<head>\n    <meta name="robots" content="noindex" />').replace(/<meta name="robots" content="index, follow" \/>/, ""),
);
console.log(`prerendered ${urls.length} routes + sitemap.xml + 404.html`);
