# Scripture Alive — Claude Code Context

**Client:** Jeremy Kluth | scripturealive.com
**Sanity Project ID:** `vxczpihg`
**Stack:** Astro 5 + Tailwind CSS v4 + Sanity CMS + Cloudflare Pages + Cloudflare R2
**Migration protocol:** /home/deploy/bin/tools-api/pipelines/migration/CLAUDE.md
**Sanity Studio:** Embedded at scripturealive.com/studio/ (static build)
**Infrastructure:** Deploy webhook wired, CORS origins configured, studio deployed, 404 page added

---

## Mandatory — Before Starting Work
Always start Claude sessions from inside this directory:
```
cd /srv/sites/scripture-alive && claude
```
Running Claude from ~/ or ~/Sites/ bypasses this project's CLAUDE.md. A pre-edit hook enforces this, but following the workflow prevents warnings and ensures all project rules are loaded.

Then run: `git checkout dev && git pull origin dev`

## FIRST THING EVERY SESSION

Run this before touching anything:
```bash
git log --oneline -10
```
This shows what's already been done. Never redo completed work. Never overwrite
committed work unless Kevin explicitly requests it.

---

## Completed Work — DO NOT REDO OR OVERWRITE

### Phase 1–3: Infrastructure, Structure, Content
- GitHub repo, Cloudflare Pages, Cloudflare DNS, R2 bucket all configured
- All 28 pages migrated from WordPress to Astro
- All WordPress assets moved to R2 at `assets.spiritmediapublishing.com/scripture-alive/`
- 301 redirects preserved: booking→contact, all-events→events, performers→performances, event-types→events

### Phase 4: Sanity CMS Wiring (commit `a654f71` → `4aa9af3`)
**COMPLETE — do not re-migrate any of this content.**

All content is live in Sanity project `vxczpihg`, dataset `production`.

| Page | Function | Sanity Type |
|------|----------|-------------|
| performances.astro | `getPerformances()` | `performance` (9 docs) |
| interviews.astro | `getInterviews()` | `interview` (5 docs) |
| resources.astro | `getResources()` | `resource` (7 docs) |
| store.astro | `getProducts()` | `product` (8 docs) |
| endorsements.astro | `getTestimonials()` | `testimonial` (13 docs) |
| events.astro | `getEvents()` | `event` (8 docs) |
| index.astro (carousel) | `getFeaturedTestimonials()` | testimonial where `featured == true` |

- R2 fallback images are intentional — Jeremy uploads real images via Sanity Studio
- All 50 Sanity documents are published (not drafts)
- Sanity write token for this project: `SANITY_SA_TOKEN` in `/home/deploy/bin/.env`

### Phase 5: CAR Critical Fixes (commit `d9debcd`)
**COMPLETE — do not revert these fixes.**

| Fix | File(s) | What was done |
|-----|---------|---------------|
| CF-1 Mobile nav | `Layout.astro` | Hamburger JS wired; mobile menu panel added |
| CF-2 Blog artifacts | `ptr-what-is-the-power-system.astro`, `why-i-wrote-*.astro` | WordPress nav junk removed from body |
| CF-3 Broken blog | `how-to-book-jeremy-kluth-for-your-church.astro` | 301 redirect to /contact (content was cut off mid-sentence) |
| CF-4 Topical verses | `topicalverses.astro` | img src was pointing to a PDF — fixed to real image |
| CF-5 PDFs | `8liesandobstacles.astro`, `8reasonswhy.astro`, `creative.astro` | PDFs moved from Google Storage to R2 |
| CF-6 Hardcoded colors | `about.astro`, `contact.astro`, `guestpreaching.astro` | Replaced inline hex colors with design tokens |
| CF-7 font-lora | `referjeremy.astro` | Non-existent class replaced with `font-serif` |

---

## Design System

Defined in `src/styles/global.css` — use ONLY these tokens, never hardcode hex values:

| Token | Value | Usage |
|-------|-------|-------|
| `text-primary` / `bg-primary` | `#FBC215` (yellow) | Headlines, primary buttons |
| `text-accent` / `bg-accent` | `#3472B7` (blue) | Secondary CTAs, accents |
| `text-gold` / `bg-gold` | `#c8a951` | Store, resource CTAs |
| `bg-cream` | `#f5f0e8` | Section backgrounds |
| `font-sans` | Roboto | Body text (matches WordPress) |
| `font-serif` | Roboto Slab | Secondary headings (matches WordPress) |
| `font-display` | Dancing Script | Decorative headings only |

---

## Navigation Structure

Current nav (Layout.astro): Home → About → Performances → Events → Media → Services → Contact + Store button

**DO NOT** add Endorsements back to the primary nav. It was intentionally removed (was position #3 on the old site, replaced by Performances which is Jeremy's primary conversion goal).

---

## Sanity — How to Write to This Project

The global `SANITY_TOKEN` on Bethel covers ALL Spirit Media Sanity projects including Scripture Alive (`vxczpihg`). Just use `$SANITY_TOKEN` (sourced automatically from `/home/deploy/.secrets`).

REST API base: `https://vxczpihg.api.sanity.io/v2021-06-07`

---

## R2 Uploads

Use the S3-compatible API with keys from `/home/deploy/bin/.env`:
```bash
source /home/deploy/bin/.env
AWS_ACCESS_KEY_ID=$CLOUDFLARE_R2_ACCESS_KEY_ID \
AWS_SECRET_ACCESS_KEY=$CLOUDFLARE_R2_SECRET_ACCESS_KEY \
aws s3 cp /tmp/file.ext \
  s3://smp/scripture-alive/file.ext \
  --endpoint-url $CLOUDFLARE_R2_ENDPOINT \
  --content-type "application/pdf"
```
Public URL: `https://assets.spiritmediapublishing.com/scripture-alive/[filename]`

---

## What's Next (Phase 6+)

See the Transformation Layer Report for approved improvements:
https://docs.google.com/document/d/1t5dkqAiB5HhRtYgkZpnv25LJA9w7lOCCw_TaGTM0G28/edit

Status as of 2026-04-19:
- [x] Cloudflare Pages deploy configured (auto-deploys on push to main)
- [x] CORS origins configured
- [x] Sanity Studio live at scripturealive.com/studio/
- [x] 404 page added
- [x] 100-Club wave-1 perf + a11y pass on dev (2026-04-19):
    - Split fonts → critical-only in global.css, rest in public/deferred.css (non-blocking)
    - Darken --color-accent from #3472B7 to #295a92 for AA contrast on cream/white
    - Rework endorsement carousel dots to 40x40 button wrapping 10px span (touch target)
    - Defer hero video entirely via JS (no autoplay attr, source injected post-load)
    - Shrink hero LCP image: 1200w/q75 (25KB) → 800w/q70 (13KB) with 768/1600 ladder
    - Logo and guestpreaching first image no longer carry fetchpriority=high
    - Footer text-white/40 → text-white/70 (+underline on Spirit Media link)
    - Evaluated Beasties (@playform/inline) — rejected, it strips below-fold utilities
- [ ] Recommended improvements Kevin approves from CAR report
- [ ] Design polish & QA pass
- [ ] Mobile + desktop visual review
- [ ] Kevin approves merge to main → goes live at scripturealive.com

### PSI snapshot (dev preview, 2026-04-19)

| Category | Mobile | Desktop |
|---|---|---|
| Performance | 77-95 (variable; see note) | 99 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 69* | 69* |

*SEO 69 on dev preview is the Cloudflare Pages `x-robots-tag: noindex` artifact
applied to every `*.pages.dev` URL. Production (scripturealive.com) has no such
header — SEO will be 100 on prod.

Mobile perf variance is driven by PSI's DPR/image-picker swinging between the
800w (13KB) and 1600w (36KB) hero variants across runs. On 800w runs: ~90-95
perf; on 1600w runs: ~77. The 15MB hero MP4 is deferred via JS and no longer
competes with LCP bandwidth. Baseline before this wave: mobile 94.

---

## Dev Server

```bash
npx astro dev --port 4329 --host 0.0.0.0
```
Preview at: http://100.114.220.65:4329/
