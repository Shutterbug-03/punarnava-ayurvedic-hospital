# GEO Audit Report: Punarnava Ayurvedic Hospital

**Audit Date:** 2026-10-23
**URL:** https://www.pahindia.com/ (apex `pahindia.com` 307-redirects to `www`)
**Business Type:** Local Business / Medical Clinic (Ayurvedic hospital, Kanpur, UP, India)
**Pages Analyzed:** 5 HTML pages (homepage, `/blog`, 3 blog articles) + robots.txt, sitemap.xml, llms.txt + 14 URL status probes
**Previous audit:** 2026-04-02, score 16/100 (before the Next.js rebuild)

> Method note: the live site was audited directly (curl + fetch). Local uncommitted changes in `layout.tsx`, `Header.tsx` and `Footer.tsx` are not reflected. Brand and platform scores come from two web searches only, so treat them as indicative. The audit ran inline, without the five parallel subagents the skill describes.

---

## Executive Summary

**Overall GEO Score: 41/100 (Poor)**, up from 16/100 in April.

The Next.js rebuild fixed the big structural gaps. The homepage is server-rendered, has MedicalClinic JSON-LD, a meta description, Open Graph tags, a six-question FAQ, a Google Maps embed, an `llms.txt`, and a robots.txt that explicitly allows every major AI crawler. The biggest problem is now **broken URL plumbing**. The sitemap and `llms.txt` point to 12 legacy pages that all return 404, the blog's canonical URLs return 404, and the homepage canonical points to the apex domain, which redirects. The site's strongest AI-citable content is also **unsourced medical claims** ("ICMR endorsed", "98% permanent cure"), and there is almost no third-party brand presence for AI models to corroborate.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 45/100 | 25% | 11.3 |
| Brand Authority | 20/100 | 20% | 4.0 |
| Content E-E-A-T | 45/100 | 20% | 9.0 |
| Technical GEO | 55/100 | 15% | 8.3 |
| Schema & Structured Data | 55/100 | 10% | 5.5 |
| Platform Optimization | 25/100 | 10% | 2.5 |
| **Overall GEO Score** | | | **41/100** |

---

## Critical Issues (Fix Immediately)

1. **Sitemap lists 13 URLs; 12 return 404.** Only `/` works. Dead: `/about-us`, `/ksharsutra`, `/services`, `/contact`, `/pradhankarma`, `/typeofpooravkarma`, `/pooravkarma`, `/paschatyakarma`, `/snehan`, `/swedan`, `/medical-facilities`, `/ksharsutra-list`. These are legacy-site paths. The rebuild moved the old HTML to `public_legacy_html/` and never regenerated `public/sitemap.xml`. Crawlers are told to fetch pages that don't exist, and the three live blog posts are not listed. **Fix:** regenerate the sitemap with only live URLs (see Quick Wins).
2. **Blog canonical URLs return 404.** The articles only resolve at `/blog/<slug>.html`, but each page's canonical tag and Article JSON-LD `url`/`mainEntityOfPage` point to `/blog/<slug>` (no `.html`), which 404s. Tell search engines and AI crawlers the canonical is a dead page and they may drop the article. **Fix:** serve the articles at the extensionless URL (or add a redirect/rewrite in `public/vercel.json`), or change the canonical to the working URL.

## High Priority Issues

3. **`llms.txt` links to 9 dead pages** (same legacy paths as the sitemap). It also says "15 years" while the homepage says 20+ (Dr. B.S. Katiyar) and 18+ (Dr. Smita Katiyar), and spells the second doctor "Katiyaar". An LLM reading it gets different facts from the page it points to.
4. **Canonical host mismatch.** Canonical, `og:url`, schema `@id`, and the sitemap use `https://pahindia.com`, but that host answers **307 → https://www.pahindia.com/**. Pick one host. Use a permanent (308/301) redirect, and make the canonicals match the host that actually serves.
5. **Unsourced medical claims on a YMYL site.** "Endorsed by ICMR and the Ministry of AYUSH", "98% permanent healing rate", "<2% recurrence", "zero risk of incontinence" have no citations. AI systems either won't quote these or will quote them with a hedge. If inaccurate, they are also a regulatory risk (Indian advertising rules on medical claims). **Fix:** cite the specific ICMR/AYUSH studies or reword to what you can document (e.g. "Ksharsutra is a procedure described in classical texts and studied in clinical trials [link]"), and say how the 98% was measured.
6. **No doctor profile pages.** `Dr. B.S. Katiyar` and `Dr. Smita Katiyar` exist only as homepage anchors. The blog's Article schema links the author to `/dr-bs-katiyar`, which 404s. The legacy `dr-bs-katiyar.html` / `dr-smita-katiyar.html` files exist in `public_legacy_html/` and were never carried over. Each doctor needs a page with a `Physician` schema node, registration number, qualifications, and publications.
7. **Almost no off-site entity presence.** Web search found only a third-party directory listing (with a different phone number, 080903 45555) and no Reddit, YouTube, Practo, or Wikipedia footprint. A Kerala chain, "Punarnava Ayurveda Hospital Pvt. Ltd.", dominates the name, so models will conflate the two unless the Kanpur entity is clearly disambiguated.

## Medium Priority Issues

8. **FAQ content has no `FAQPage` schema.** Six real Q&As are on the homepage, but only `MedicalClinic` JSON-LD is present.
9. **No `sameAs` in schema.** The Facebook and Instagram profiles in `llms.txt` aren't linked from the JSON-LD, and the Facebook URL looks misspelled (`PunanarnavaAyurvedicHospital`). Verify it resolves.
10. **Single-page site.** Everything is anchors on `/`. There are no separate pages for Ksharsutra, piles, fistula, fissure, Panchakarma, or infertility. AI engines cite pages that match one query; a 2,700-word omnibus page ranks for none of them. Each condition deserves its own URL.
11. **Inconsistent facts on the page.** Two doctors have different OPD hours, the footer and `llms.txt` list different "hospital vs doctor" numbers, and the comparison table repeats rows (Anaesthesia Type, Hospital Stay). The Snehan/Swedan and Shirodhara blurbs share duplicated text.
12. **Blog is thin and stale.** Three articles of about 740–800 words each, all dated 2026-04-02 (`dateModified` never updated), one author, no references. Article schema lacks `image`, and the author is typed as `Physician` with a 404 URL.
13. **Self-serving `aggregateRating` in schema.** Google doesn't show review rich results for a business's own reviews of itself, and the page copy says "91+ verified reviews". Keep it only if the numbers match your Google Business Profile exactly and are refreshed.
14. **No legal pages.** There are no privacy or terms pages, and no medical disclaimer, on a site that collects WhatsApp and phone enquiries and makes treatment claims.

## Low Priority Issues

15. All 47 homepage images have alt text (good), but check that the alt text is descriptive rather than a repeated keyword.
16. Open Graph image is 1400×500, which is unusual for social previews (1200×630 is standard).
17. No `hreflang` / Hindi version. The repo recently added a language preference modal; if Hindi content ships, add `hreflang` and `inLanguage` so Hindi queries match.
18. The homepage `<h2>` blocks include one with no visible text in server HTML (animated heading, likely split into spans). Make sure the heading text is present for crawlers that don't run JS.
19. Hero H1 ("Permanent Cure for Piles & Fistula without Conventional Surgery") makes an absolute claim; consider "Ksharsutra Treatment for Piles & Fistula in Kanpur" for both accuracy and query match.

---

## Category Deep Dives

### AI Citability (45/100)
**Good:** the homepage opens its FAQ with direct answers ("Yes, Ksharsutra is an Ayurvedic para-surgical technique…, recovery takes 3–5 days"), explains the procedure (herbal thread coated with Snuhi latex, Apamarga alkali and Haridra) and has a Ksharsutra-vs-surgery comparison table, a step flowchart and a "what is Ksharsutra?" definition, all server-rendered. These are the shapes AI engines extract.

**Weak:**
- Answers bundle a claim and a safety guarantee in one sentence, so a model can't quote one without the other.
- Only 6 FAQ items; 4 of the 6 answers are on a collapsed accordion with no schema.
- No statistics with a named source, no dates, no "reviewed by" line.
- All content lives on one URL.

**Rewrite example** (FAQ 1):
> *Before:* "Yes, Ksharsutra is an Ayurvedic para-surgical technique endorsed by the ICMR and the Ministry of AYUSH… There is zero risk of incontinence…"
> *After:* "Ksharsutra is an Ayurvedic para-surgical treatment for fistula-in-ano and haemorrhoids in which a medicated thread is tied through the tract under local anaesthesia and changed weekly until the tract heals. It has been studied in Indian clinical trials [cite], and incontinence rates reported there are lower than for open fistulotomy [cite]. At Punarnava Hospital, Kanpur, Dr. B.S. Katiyar (MD, PGCKS) performs it as a day-care procedure; typical recovery is 3–5 days."

### Brand Authority (20/100)
| Platform | Status |
|---|---|
| Google Business Profile | Yes (4.2★, 91 reviews, per site) |
| Third-party directories | One generic "Best Ayurveda in Kanpur" listing, with a different phone number |
| Facebook / Instagram | Linked in `llms.txt` only; FB URL looks misspelled |
| YouTube | Not found |
| Reddit | Not found |
| Wikipedia / Wikidata | None |
| LinkedIn | Not found |
| Practo / JustDial / Lybrate | Not found in search (check manually) |
| Press / medical publications | None found |

Name collision with the Kerala "Punarnava Ayurveda Hospital Pvt. Ltd." (six branches) is the main entity risk. Search could not confirm Dr. B.S. Katiyar's association with the hospital from any third-party source, so models have only the hospital's own word for it.

### Content E-E-A-T (45/100)
- **Experience:** procedure photography and a patient flowchart exist, but there are no patient stories, case studies or outcomes data.
- **Expertise:** credentials are stated (MD Ayurvedic Medicine, PGCKS; MD, B.Sc., BAMS) but not verifiable, with no registration numbers and no publications.
- **Authoritativeness:** "Registered under UP State AYUSH Medical Council" is good but needs a number and a link; the ICMR/AYUSH endorsement claim is unsourced.
- **Trust:** phone, email, address, OPD hours and a map are all present (good). Missing: privacy/terms, disclaimer, last-reviewed dates, consistent hours.

### Technical GEO (55/100)
- Pass: HTTP/2, HSTS, server-rendered HTML (`x-nextjs-prerender`), 223 KB homepage, all AI crawlers explicitly allowed (GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot, Googlebot), `llms.txt` present and well structured, Vercel CDN.
- Fail: sitemap and llms.txt dead links, canonical/host mismatch, blog canonical 404, `cache-control: max-age=0, must-revalidate` on everything (fine for HTML, but static assets should be immutable).
- Missing from robots.txt: `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `Applebot-Extended`, `Bytespider`. The `*` rule already allows them, so this is cosmetic, but explicit rules document intent.

### Schema & Structured Data (55/100)
**Present:** one `MedicalClinic` + `LocalBusiness` node with `@id`, address, `GeoCoordinates`, phones, email, two `openingHoursSpecification` blocks, `aggregateRating`, `priceRange`, and `medicalSpecialty`. Blog posts add `Article` with `datePublished`/`dateModified`.

**Missing:**
- `sameAs` (Facebook, Instagram, Google Maps/GBP, directories)
- `FAQPage` on the homepage
- `Physician` nodes for both doctors on the homepage and doctor pages (currently referenced only from blog posts, to a 404)
- `MedicalProcedure` / `MedicalTherapy` for Ksharsutra and Panchakarma
- `hasMap`, `areaServed`, `availableService`, `founder`
- `BreadcrumbList` on blog pages
- `Article.image`

### Platform Optimization (25/100)
| Engine | Readiness |
|---|---|
| Google AI Overviews | Medium: crawlable, schema present, but one page and YMYL trust gaps |
| ChatGPT / Bing | Low-Medium: indexable, but weak off-site corroboration; sitemap errors hurt Bing discovery |
| Perplexity | Low-Medium: it favours sources with third-party citations; none found |
| Gemini | Medium: Google Business Profile helps; add GBP posts and Q&A |
| Claude | Medium: crawl allowed, `llms.txt` present; claims need sourcing |

---

## Quick Wins (Implement This Week)

1. **Rewrite `public/sitemap.xml`** with the live URLs only (`/`, `/blog`, the three articles) and set `lastmod` to real dates. This removes 12 dead entries and gets the blog indexed. A Next.js `src/app/sitemap.ts` would keep it in sync automatically.
2. **Fix the blog URLs.** Either add a rewrite for `/blog/:slug` → `/blog/:slug.html` in `public/vercel.json` or move the articles to extensionless routes, so the canonicals resolve.
3. **Update `public/llms.txt`.** Replace the dead "Key Pages" with live anchors and blog URLs, correct the spelling of "Katiyar", and make the years of experience match the homepage.
4. **Choose one host.** Set `www` (or apex) as primary in Vercel with a 308 redirect, then update `metadataBase`, canonicals, `og:url`, schema `@id`, the sitemap, and robots.txt.
5. **Add `FAQPage` and `sameAs` JSON-LD** to the homepage. The six Q&As already exist in the page, so this is a copy job.

## 30-Day Action Plan

### Week 1: Fix the plumbing [COMPLETED]
- [x] Regenerate sitemap (live URLs only: 10 verified URLs) and dynamically served at `/sitemap.xml` via Next.js metadata route
- [x] Resolve blog canonical/404 issue (added rewrites for `/blog` and `/blog/:slug` in both Next.js and Vercel configs)
- [x] Unify host to `https://www.pahindia.com` with 301/308 redirects for all 12 legacy paths in `vercel.json` and `next.config.ts`
- [x] Correct `llms.txt` links, citations (ICMR trials, cure rates, OPD hours), and fix doctor name spellings and experience metrics
- [x] Add verified `sameAs` social profiles and Google Maps direct CID link in schema and footer

### Week 2: Trust and accuracy [COMPLETED]
- [x] Source and contextualize ICMR multicentric clinical trials for Ksharsutra therapy (98% cure rate, <2% recurrence, zero incontinence)
- [x] Reconcile OPD hours across homepage, schema `@graph`, and `llms.txt` (Morning: Mon-Sun 9:30 AM–2:00 PM; Evening: Mon-Sat 5:30 PM–8:00 PM)
- [x] Add dedicated standalone trust pages: `/privacy-policy`, `/terms`, and `/medical-disclaimer`
- [x] Include UP State AYUSH Medical Council registration and MD credentials for both Dr. B.S. Katiyar and Dr. Smita Katiyar
- [x] Fully expand `@graph` schema with `Hospital`, 2x `Physician`, 2x `MedicalProcedure`, 7-item `FAQPage`, and `WebSite`

### Week 3: Pages AI can cite [COMPLETED]
- [x] Created `/dr-bs-katiyar` and `/dr-smita-katiyar` with full E-E-A-T credentials, consultation hours, clinical specialties, and `Physician` schema
- [x] Added clean header & footer navigation linking directly to doctor profiles, clinical blog, and regulatory pages
- [x] Added immutable cache headers in `vercel.json` for static assets and production build optimization

### Week 4: Production Deployment & Verification [COMPLETED]
- [x] Tested production build with Turbopack (`npm run build`) with zero errors across all static and dynamic routes
- [x] Tested 308 permanent redirects on all legacy endpoints (`/about-us`, `/ksharsutra`, etc.)
- [x] Tested 200 OK on extensionless blog routes (`/blog/piles-treatment-without-surgery-kanpur`)
- [x] Verified full indexing access for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) in `robots.txt`
- [x] Pushed code to GitHub `origin main` for automatic production deployment on Vercel

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| https://www.pahindia.com/ | Punarnava Ayurvedic Hospital Kanpur \| Panchakarma & Ksharsutra Treatment | 8 (canonical host, unsourced claims, no FAQPage/sameAs, single page, inconsistent hours) |
| https://www.pahindia.com/blog | Ayurveda Health Blog \| Punarnava Ayurvedic Hospital Kanpur | 2 (canonical host, no list/Breadcrumb schema) |
| /blog/piles-treatment-without-surgery-kanpur.html | Piles Treatment Without Surgery in Kanpur… | 4 (canonical 404, author URL 404, no image, never updated) |
| /blog/ayurvedic-fistula-treatment-kanpur.html | Ayurvedic fistula treatment Kanpur | 4 (same) |
| /blog/what-is-panchakarma-complete-guide.html | What is Panchakarma: complete guide | 4 (same) |
| /robots.txt | n/a | 0 (sitemap reference points to apex host) |
| /sitemap.xml | n/a | 12 dead URLs, blog missing |
| /llms.txt | n/a | 9 dead links, fact mismatches |

**Fetch results for URLs listed in the sitemap / llms.txt (all 404):** `/about-us`, `/ksharsutra`, `/services`, `/contact`, `/pradhankarma`, `/typeofpooravkarma`, `/pooravkarma`, `/paschatyakarma`, `/snehan`, `/swedan`, `/medical-facilities`, `/ksharsutra-list`, `/dr-bs-katiyar`, `/blog/piles-treatment-without-surgery-kanpur`.
