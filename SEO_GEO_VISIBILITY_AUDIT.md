# Scenekind SEO + GEO Visibility Audit

Snapshot date: August 26, 2026

Scope: public-only audit of `https://scenekind.studio`, `https://www.scenekind.studio`, `robots.txt`, `sitemap.xml`, public search results, live rendering, Lighthouse, and repo-visible analytics implementation.

GEO definition: generative-engine optimization / AI-search visibility. In this report, GEO readiness means whether public crawlers and answer engines can understand Scenekind as an entity, a service provider, and a credible recommendation for product ad production.

## Executive Summary

Scenekind is technically launchable, but not yet strongly discoverable. The public site is crawlable, Lighthouse SEO scores 100 on both mobile and desktop, `robots.txt` and `sitemap.xml` are live, Open Graph images exist, and Mixpanel is sending standard page views with lowercase UTM properties. That is a solid launch floor.

The visibility problem is mostly authority and entity clarity. Branded searches surface Scenekind, but unbranded searches like `ai product ads studio`, `ai commercial studio`, and `creator style video ads` are dominated by established AI ad tools and video agencies. Scenekind is not yet visible in the first public result set for those categories.

GEO readiness is early. The homepage gives AI systems enough to summarize what Scenekind does, but there is no JSON-LD schema, no `llms.txt`, limited indexed URLs, PDF-only kit routes, and thin public proof signals. Answer engines have little structured evidence to cite beyond the homepage.

Tracking is the strongest part of the setup. A test visit with lowercase UTM parameters generated a Mixpanel `$mp_web_page_view` event with `utm_source`, `utm_medium`, and `utm_campaign` attached, and session replay traffic was also observed. SEO/GEO campaigns can be segmented after launch if the marketing links stay lowercase and consistent.

## Baseline Scorecard

| Area | Score | Baseline Read |
|---|---:|---|
| Technical SEO | 78/100 | Crawlable, indexable, metadata present, robots/sitemap live, but canonical/host signals disagree and structured data is missing. |
| Performance | 64/100 | Desktop is acceptable at 75 Lighthouse performance; mobile is weak at 54 because of heavy video payload and render delay. |
| Search Visibility | 40/100 | Branded queries work; unbranded commercial-intent queries do not show Scenekind in the visible sampled result set. |
| GEO / AI-Search Readiness | 35/100 | The brand can be understood, but there is not enough structured entity proof, service depth, or crawlable case evidence yet. |
| Content Readiness | 70/100 | Clear offer, pricing, work examples, and service language exist. More proof, dedicated landing pages, and consistent timing language are needed. |
| Tracking Readiness | 90/100 | Mixpanel page views, UTM capture, CTA events, inquiry events, rate-card event, and 100% session replay are implemented or observable. |
| Overall Public Visibility Baseline | 63/100 | Good launch base, weak discovery base. The next gains come from structured data, proof pages, and search-answer clarity. |

Scores are directional baseline scores from measured public evidence, not paid rank-tracking or Search Console data.

## What Is Already Working

| Signal | Status | Notes |
|---|---|---|
| Homepage indexability | Pass | `https://scenekind.studio` and `https://www.scenekind.studio` return 200 and are discoverable in public search snapshots. |
| Metadata | Pass | Homepage title, meta description, OG image, and Twitter image are present. |
| Robots | Pass | `robots.txt` allows crawling and blocks `/api/`. |
| Sitemap | Partial | Sitemap is live, but only includes the homepage and `/contact`. |
| Contact page | Pass | `/contact` returns 200 with its own title, description, canonical, and H1. |
| Public kits | Partial | `/glassfx` and `/absolutejoi` return PDFs successfully, but they are not HTML landing pages with crawlable case copy. |
| Mobile rendering | Pass | Playwright smoke test found no horizontal overflow across 390px mobile, 1366px laptop, and 1440px desktop viewports. |
| Hero/work videos | Partial | Visible videos load and play in smoke tests. The issue is payload weight and missing posters, not basic playback. |
| Mixpanel page views | Pass | Standard `$mp_web_page_view` was observed on a UTM-tagged visit. |
| UTM segmentation | Pass | Lowercase `utm_source=instagram`, `utm_medium=social`, and `utm_campaign=profile` were attached to the Mixpanel event. |
| Session replay | Pass | Mixpanel `/record/` traffic was observed during the test visit. |

## Search Visibility Snapshot

Public web search was sampled on August 26, 2026. Results vary by location, personalization, device, and search engine, so treat this as a launch baseline rather than exact rank tracking.

| Query | Visibility | Snapshot Notes |
|---|---|---|
| `site:scenekind.studio scenekind` | Pass | Homepage appears indexed. |
| `"Scenekind" "AI Commercials"` | Pass | Homepage appears with the current title and homepage content. |
| `"scenekind" "starter sprint"` | Pass | Homepage appears and exposes Starter Sprint copy and `$295` pricing in the indexed text. |
| `"Scenekind" "GLASSFX"` | Partial | Homepage appears, and Instagram content appears. Dedicated `/glassfx` PDF route is live but not represented as a crawlable case page. |
| `"Scenekind" "AbsoluteJOI"` | Partial | Homepage appears. Dedicated `/absolutejoi` PDF route is live but not represented as a crawlable case page. |
| `"scenekind.studio"` | Pass | Homepage and Instagram profile/posts appear. |
| `ai product ads studio` | Fail | Scenekind did not appear in the visible sampled result set. Competitors/tools included ImagineArt, Creatify, AdCreative.ai, LTX Studio, Nextify, Higgsfield, Zeely, and similar AI ad platforms. |
| `ai commercial studio` | Fail | Scenekind did not appear in the visible sampled result set. Results included Synima, 351 Studio, Amazon Ads Creative Studio, Creatify, and other AI/video production providers. |
| `creator style video ads` | Fail | Scenekind did not appear in the visible sampled result set. Results included Creatify, InVideo, Canva, TikTok Symphony Creative Studio, Zeely, and HeyGen. |
| `ai video production studio product ads` | Fail | Scenekind did not appear in the visible sampled result set. Results were dominated by AI video tools, ad generators, and established content platforms. |

Interpretation: Scenekind is indexed, but discovery is brand-led. The site needs more crawlable service pages, proof pages, and external mentions before it can compete for unbranded commercial-intent queries.

## GEO / AI-Search Prompt Table

This is a public-only GEO proxy. I did not use private account access to ChatGPT, Gemini, Perplexity, Bing Webmaster Tools, or Google Search Console. The pass/fail notes below estimate whether an answer engine has enough public evidence to understand and cite Scenekind.

| AI-Search Prompt | Result | Notes |
|---|---|---|
| "What is Scenekind?" | Pass | The homepage title, description, service copy, pricing section, footer, and Instagram profile give enough public context for a basic entity answer. |
| "What does Scenekind offer?" | Pass | Services are crawlable on the homepage: AI commercials, product ads, motion design, and creator-style video. |
| "How much is Scenekind's Starter Sprint?" | Pass | The homepage exposes `$295`, "Starter Sprint", and email-gated rate-card copy. |
| "Who offers AI product ads for DTC brands?" | Fail | Scenekind is unlikely to be recommended because unbranded search visibility is weak and public authority signals are thin. |
| "Best AI commercial studios for product brands" | Fail | The site lacks comparison content, client proof, schema, and independent mentions that answer engines typically use for recommendations. |
| "Show examples of Scenekind work" | Partial | The homepage has "Selected work" and named examples, but dedicated work URLs/case pages are missing. |
| "Scenekind GLASSFX case study" | Partial | `/glassfx` is a live PDF, but no HTML case page gives crawlers title, summary, canonical, schema, or internal context. |
| "Scenekind AbsoluteJOI case study" | Partial | `/absolutejoi` is a live PDF, but no HTML case page gives crawlers title, summary, canonical, schema, or internal context. |
| "AI commercial studio with fast turnaround and transparent pricing" | Partial | The homepage has pricing and fast-production language, but timing copy is inconsistent between "5 days", "five business days", and the requested "48 hours" direction. |
| "Is Scenekind a real studio?" | Partial | The site has a clear offer and contact path, but lacks organization schema, founder/team signals, testimonials, press, client logos, or third-party validation. |

## Technical Audit Details

| Check | Result | Evidence |
|---|---|---|
| `https://scenekind.studio` | 200, redirects/finalizes to `https://www.scenekind.studio/` | Naked domain loads but resolves to `www`. |
| `https://www.scenekind.studio` | 200 | Main live homepage loads. |
| Canonical URL | Partial | Homepage canonical is `https://scenekind.studio`, but live final URL is `https://www.scenekind.studio/`. |
| Homepage title | Pass | `Scenekind | AI Commercials, Product Ads & Motion Design Studio`. |
| Homepage description | Pass | Describes AI-first production for commercials, product ads, motion design, and creator-style video assets. |
| Homepage H1 | Partial | Live H1 is `Cinematic product films, built to move fast.` Strong, but less direct than the conversion headline direction previously requested. |
| Structured data | Fail | No `application/ld+json` detected on live pages; repo search found no `schema.org` JSON-LD implementation. |
| `robots.txt` | Pass | Allows `/`, disallows `/api/`, points to sitemap. |
| Robots host/sitemap | Partial | `Host` and `Sitemap` use naked domain while live final URL is `www`. |
| `sitemap.xml` | Partial | Live and valid, but only 2 URLs are listed. |
| `/contact` | Pass | 200 with unique title, description, canonical, and H1. |
| `/glassfx` | Partial | 200 PDF, but no crawlable HTML metadata or case-page body. |
| `/absolutejoi` | Partial | 200 PDF, but no crawlable HTML metadata or case-page body. |
| `llms.txt` | Fail | No public `llms.txt` detected. |
| `/.well-known/ai-plugin.json` | Neutral | 404. Not required, but it confirms there is no AI-agent metadata endpoint. |

## Lighthouse Baseline

| View | Performance | Accessibility | Best Practices | SEO | FCP | LCP | Speed Index | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Mobile | 54 | 89 | 100 | 100 | 3.6s | 4.4s | 8.3s | 620ms | 0 |
| Desktop | 75 | 89 | 100 | 100 | 2.1s | 2.4s | 2.3s | 0ms | 0 |

Largest payloads identified by Lighthouse were video files:

| Asset | Approx Bytes | Risk |
|---|---:|---|
| `/videos/absolutejoi-night-oil.mp4` | 6.0 MB | Heavy mobile payload and slower first render. |
| `/videos/creator-testimonial-batch.mp4` | 3.3 to 3.5 MB | Adds weight even when not the first visible asset. |
| `/videos/fitness-wearable-launch.mp4` | 2.8 MB | Adds to page byte weight. |

Accessibility issues reported by Lighthouse:

| Issue | Impact |
|---|---|
| Color contrast | Some text does not meet recommended contrast thresholds. |
| List semantics | Some ordered/unordered list children are wrapped by layout/reveal elements, so Lighthouse sees invalid direct list structure. |

## Tracking Readiness

| Tracking Need | Status | Evidence |
|---|---|---|
| Standard page view | Pass | Mixpanel event `$mp_web_page_view` observed. |
| Duplicate custom `page_viewed` removal | Pass | Repo search shows no `page_viewed`; setup uses Mixpanel standard page view helper. |
| Lowercase UTM capture | Pass | `utm_source`, `utm_medium`, and `utm_campaign` were captured on a test visit. |
| EU endpoint | Pass | Page-view test posted to `https://api-eu.mixpanel.com/track/`. |
| Session replay at 100% | Pass | `record_sessions_percent: 100` is configured and `/record/` traffic was observed. |
| CTA click events | Pass | Navigation, hero, services, final CTA, and work modal links expose `data-analytics-event` attributes handled by `AnalyticsProvider`. |
| Inquiry funnel | Pass | Contact form tracks `Inquiry Started` and `Inquiry Submitted`. |
| Rate-card lead | Pass | Rate-card form tracks `Rate Card Requested`. |
| SEO/GEO segmentation | Pass | Campaign traffic can be segmented by UTM properties plus landing page/current URL in Mixpanel. |

Next tracking improvement: build a Mixpanel board with saved reports for `utm_source`, `utm_medium`, `utm_campaign`, landing page, CTA click, rate-card request, inquiry started, and inquiry submitted.

## Top 10 Launch-Critical Fixes

1. Align the canonical domain.

   Pick one production URL, preferably the same one Vercel resolves as primary. Right now the live final URL is `https://www.scenekind.studio/`, while canonical, robots host, sitemap URLs, and marketing links use `https://scenekind.studio`. Search engines can handle redirects, but this sends mixed authority signals. Align `siteUrl`, canonical tags, `robots.txt`, `sitemap.xml`, and external marketing links around one canonical domain.

2. Add JSON-LD structured data.

   Add schema for `Organization`, `WebSite`, `Service`, `Offer`, `FAQPage`, and selected `CreativeWork` or `VideoObject` entries. This is the highest-leverage GEO fix because it gives AI systems clean entity, service, pricing, and proof data to parse.

3. Add `llms.txt`.

   Add a short public file at `/llms.txt` that states who Scenekind serves, what it makes, key offers, contact URL, selected work URLs, pricing summary, and source links. Keep it factual and easy for AI crawlers to quote.

4. Expand the sitemap.

   Add every public crawlable destination: homepage, contact, future service pages, future case pages, and any public kit landing pages. Today the sitemap only lists 2 URLs, which makes the site look thinner than it is.

5. Turn `/glassfx` and `/absolutejoi` into HTML kit/case pages.

   Keep the PDF download, but make the route an HTML page with title, description, H1, case summary, offer context, OG image, canonical URL, and download CTA. PDF-only routes are weaker for search and AI answers.

6. Create crawlable service landing content.

   The homepage mentions AI commercials, product ads, motion design, and creator-style video. Give each topic more crawlable depth, either as dedicated pages or strong anchored sections with direct internal links, FAQ copy, and examples. Target queries like `ai product ads studio`, `ai commercial studio`, `creator-style video ads`, and `ai video production for product brands`.

7. Add proof where crawlers can see it.

   Add a compact proof block near the offer and a more detailed proof section lower on the page. Even early proof helps: brands served, assets delivered, turnaround, case-study links, testimonials, before/after creative examples, and named spec drops where appropriate.

8. Make the speed promise consistent.

   Live search-visible copy still includes "First ad sprint in 5 days" and "five business days." If the intended hero/offer promise is now "48 hours", update every visible instance and schema/metadata once added. Do not mix `48 hours`, `5 days`, and `five business days` unless they describe different offers.

9. Reduce mobile video weight.

   Add poster images, smaller mobile encodes, explicit lazy/deferred loading for offscreen videos, and consider limiting autoplay to the first visible set. Target mobile Lighthouse performance above 75 before heavier paid traffic starts.

10. Fix accessibility issues.

   Raise low-contrast text to meet WCAG contrast thresholds and fix list semantics so `ol`/`ul` elements have valid direct children. This should lift accessibility above 95 and reduce QA risk before broader launch.

## Next 30 Days Measurement Routine

Run this every Monday for the next 4 weeks and keep snapshots in a dated folder.

| Week | Measurement | What To Record |
|---|---|---|
| Every week | Public search snapshot | Record top visible results for branded, service, offer, and competitor-style queries. Save date, query, browser/location if known, Scenekind position, competing URLs, and snippet text. |
| Every week | Indexed pages | Search `site:scenekind.studio scenekind` and count which public URLs appear. Track when new case/service pages appear. |
| Every week | Lighthouse | Run mobile and desktop Lighthouse on homepage, contact, and each new case/service page. Track performance, accessibility, SEO, LCP, TBT, and CLS. |
| Every week | GEO prompts | Ask the same 10 AI-search prompts and record: appears yes/no, cited yes/no, linked yes/no, summary accuracy, competing names, and missing facts. |
| Every week | Mixpanel acquisition | Review page views and conversion events by `utm_source`, `utm_medium`, `utm_campaign`, landing page, CTA intent, rate-card request, inquiry started, and inquiry submitted. |
| Week 1 | Entity upgrade | Add schema, `llms.txt`, sitemap expansion, canonical alignment, and one proof block. |
| Week 2 | Case-page upgrade | Convert GLASSFX and AbsoluteJOI PDF routes into HTML case/kit pages with PDF downloads. |
| Week 3 | Service-depth upgrade | Add or expand crawlable sections/pages for AI product ads, AI commercials, creator-style video, and motion design. |
| Week 4 | Authority upgrade | Publish 2 to 4 external proof signals: Instagram post links with UTM, LinkedIn profile/company posts, founder profile, partner mentions, testimonials, or client-safe case excerpts. |

## Recommended Query Set

| Bucket | Queries |
|---|---|
| Branded | `scenekind`, `scenekind studio`, `scenekind.studio`, `Scenekind AI commercials`, `Scenekind Starter Sprint` |
| Offer | `Scenekind Starter Sprint`, `free creative teardown product ads`, `$295 product ad sprint`, `product ad sprint AI studio` |
| Service | `ai product ads studio`, `ai commercial studio`, `creator style video ads`, `ai video production studio product ads`, `motion design studio product launch` |
| Audience | `ai product ads for DTC brands`, `ai commercial production for ecommerce`, `product video ads for skincare brand`, `paid social creative production studio` |
| Competitor-style | `Creatify alternative studio`, `AI ad generator agency`, `AI video production agency for brands`, `AI commercial studio with art direction` |
| Case-specific | `Scenekind GLASSFX`, `Scenekind AbsoluteJOI`, `GLASSFX DUO-HYDRAfx AI commercial`, `AbsoluteJOI Night Oil AI commercial` |

## Recommended GEO Prompt Set

Use the same exact wording weekly so movement is comparable.

| Prompt | Desired Outcome |
|---|---|
| What is Scenekind? | Correctly describes Scenekind as an AI-first creative production studio. |
| What services does Scenekind offer? | Lists AI commercials, product ads, motion design, and creator-style video. |
| How much is Scenekind's Starter Sprint? | Mentions `$295`, three hooks/ads, one product, and delivery terms. |
| Who offers AI product ads for DTC brands? | Includes Scenekind among relevant providers. |
| What are good AI commercial studios for product brands? | Includes Scenekind with a clear reason. |
| Who can make creator-style video ads without sourcing creators? | Connects Scenekind to creator-style video production. |
| Show examples of Scenekind work. | Mentions named work such as GLASSFX, AbsoluteJOI, Le Mieux, or Fitness Wearable. |
| Is Scenekind good for skincare product ads? | Connects the brand to skincare examples and product ad formats. |
| Compare Scenekind with AI ad generator tools. | Positions Scenekind as directed production, not just self-serve generation. |
| How do I contact Scenekind for a free teardown? | Points to `/contact?intent=teardown` or the homepage teardown CTA. |

## Content Readiness Notes

The homepage already answers the most important buyer questions: what the studio makes, who it serves, what the entry offer costs, and how to contact. The next content work should focus on making those answers easier for search engines and AI systems to extract.

Priority copy blocks to add or strengthen:

| Copy Block | Why It Matters |
|---|---|
| Entity paragraph | A plain-language "Scenekind is..." paragraph helps answer engines define the brand. |
| Service definitions | Short, direct definitions for AI commercials, product ads, motion design, and creator-style video help unbranded search matching. |
| Pricing summary | The `$295` Starter Sprint is visible; add structured Offer data and a short "what is included" summary. |
| Proof summary | Numbers, testimonials, brand examples, and case links reduce the "new studio" trust gap. |
| Case summaries | HTML case pages give search and AI systems crawlable examples instead of PDF-only documents. |
| Comparison language | Explain why Scenekind is different from self-serve AI ad generators: direction, strategy, edit, sound, grade, and deliverables. |

## Caveats and Assumptions

- This is public-only. It does not include Google Search Console, Bing Webmaster Tools, Semrush, Ahrefs, Mixpanel admin reports, or paid keyword data.
- Public search snapshots are not stable rankings. They change by geography, personalization, device, and time.
- GEO scoring is a proxy based on public crawled evidence and AI-answer readiness, not a guaranteed measurement from every answer engine.
- Lighthouse is lab data, not real-user Core Web Vitals. It is still useful for launch QA.
- The repo contains many unrelated local draft/marketing files. This audit focused on the public live site, tracked code, and explicit measurement evidence.
- Canonical URLs should stay clean. UTMs should only be used on external marketing links and campaign destinations.

## Evidence Files

Local evidence generated during this audit:

| File | Contents |
|---|---|
| `.tmp/seo-geo-audit/live-checks.json` | Live HTTP crawl and metadata checks. |
| `.tmp/seo-geo-audit/lighthouse-mobile.json` | Full mobile Lighthouse JSON. |
| `.tmp/seo-geo-audit/lighthouse-desktop.json` | Full desktop Lighthouse JSON. |
| `.tmp/seo-geo-audit/lighthouse-summary.json` | Extracted Lighthouse score/metric summary. |
| `.tmp/seo-geo-audit/responsive-smoke.json` | Playwright mobile/laptop/desktop rendering smoke test. |
| `.tmp/seo-geo-audit/mixpanel-utm-check.json` | Captured Mixpanel track/record requests from a UTM-tagged visit. |

## Source Links Reviewed

- [Scenekind homepage](https://www.scenekind.studio/)
- [Scenekind naked domain](https://scenekind.studio/)
- [Scenekind robots.txt](https://www.scenekind.studio/robots.txt)
- [Scenekind sitemap.xml](https://www.scenekind.studio/sitemap.xml)
- [Scenekind contact page](https://www.scenekind.studio/contact)
- [Scenekind GLASSFX kit route](https://www.scenekind.studio/glassfx)
- [Scenekind AbsoluteJOI kit route](https://www.scenekind.studio/absolutejoi)
- [Scenekind Instagram profile](https://www.instagram.com/scenekindstudio/)
- [Creatify](https://creatify.ai/)
- [ImagineArt AI Ad Studio](https://www.imagine.art/ai-ad-studio)
- [Synima AI Video Agency](https://www.synima.com/ai-video-agency/)
- [351 Studio](https://351studio.com/)
- [AdCreative.ai](https://www.adcreative.ai/)
- [LTX Studio AI Ad Generator](https://ltx.io/studio/platform/ai-ad-generator)
- [InVideo AI Ad Maker](https://invideo.io/make/ad-maker/)
- [Canva Video Ad Maker](https://www.canva.com/create/advertising-videos/)
- [Amazon Ads Creative Studio](https://aistudio.amazon.com/)
- [HeyGen Video Ad Creator](https://www.heygen.com/tool/video-ad-creator)
- [Nextify](https://www.nextify.ai/)
- [Higgsfield Marketing Studio](https://higgsfield.ai/marketing-studio)
