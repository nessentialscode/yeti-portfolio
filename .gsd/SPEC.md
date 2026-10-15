# SPEC.md — Project Specification

> **Status**: `DRAFT` (Awaiting User Approval)
>
> ⚠️ **Planning Lock**: No application files may be modified until this specification is approved and marked `FINALIZED`.

## Vision

Evolve the portfolio into **Yeti — a personal archive of curiosity**, representing Jasim as a developer, entrepreneur, and writer. It brings together what he builds, ideas he explores, research he conducts, and interests he pursues under the defining tagline **"Build. Explore. Discover."**, presented through a warm cream and burnt-terracotta editorial design system powered by a maintainable, Markdown-first content workflow.

## Goals

1. **Brand & Identity Transformation:** Establish the **Yeti** identity ("Build. Explore. Discover.") across the site header, hero, footer, and metadata, while keeping Jasim's real identity, background, and availability clearly grounded in the About section.
2. **Warm Editorial Design System:** Shift visual aesthetics from sage-green to a warm cream (`#FAF6F0` / `#F4EFE6`) and burnt-terracotta (`#BF4E28` / `#9E3D1C`) palette with refined typography, ample whitespace, subtle micro-animations, and balanced dark-mode styling.
3. **Dedicated Writing Section (Markdown-First):** Create a first-class Writing section for articles, essays, research papers, and reflections. Powered by a client-side Markdown parsing pipeline (frontmatter metadata: title, date, reading time, tags, summary) allowing articles to be added/edited via `.md` files without altering layout HTML.
4. **Structured Project Case Studies:** Transform the Selected Works module from simple preview cards into deep case studies detailing project context, purpose, Jasim's role, tech stack, architecture, and real outcomes.
5. **Ideas & Research Notebook:** Introduce a designated section/archive for ongoing technical investigations, book notes, and curiosities.
6. **Feature Preservation & Refinement:** Maintain and polish established core features — live world clocks ticker, theme switcher (adding `localStorage` persistence), mobile drawer navigation, WhatsApp contact CTA, and the custom Canvas Dino Runner (re-skinned to the terracotta/cream palette).

## Non-Goals (Out of Scope for this Iteration)

- **No CMS or Admin Dashboard:** Content is authored directly in structured Markdown files; no authentication, database, or backend CMS dashboard.
- **No Heavy Framework Migration:** Maintain vanilla HTML5, CSS3, and modern JavaScript without converting to React/Next.js/Vite.
- **No Fabricated Content:** No placeholder articles, fake metrics, or fictional project case studies will be committed.
- **No Paid APIs or Server-Side Backends:** Maintain static hosting compatibility and zero operational cost.

## Constraints

- **Architecture:** Zero-build Vanilla Web Stack (HTML5, Vanilla CSS, Vanilla ES6+ JS).
- **Markdown Workflow:** Lightweight client-side Markdown rendering (e.g. self-contained micro-parser or vendored single-file lightweight parser like `marked.min.js`) requiring zero build step.
- **Aesthetics:** Warm, minimal, magazine-style editorial feel; no generic developer templates or garish colors.
- **Accessibility & Performance:** WCAG AA contrast ratios in both light and dark themes, semantic HTML5, zero render-blocking performance penalties.
- **Safety:** No destructive edits to existing code until specification is confirmed; no Git commits or deployments without explicit user command.

## Success Criteria

- [ ] Header, brand marks, and page title rebranded to **Yeti** with tagline **"Build. Explore. Discover."**
- [ ] About section clearly presents Jasim's background, education, skills, and current learning journey.
- [ ] Color tokens updated to warm cream and burnt-terracotta across light and dark themes with full CSS variable support.
- [ ] Dedicated Writing section live with category filters, reading times, publication dates, and clean reading typography.
- [ ] Article detail viewer renders Markdown files seamlessly without page reload or layout distortion.
- [ ] Projects showcase displays rich case study format (Context, Role, Tech, Outcomes).
- [ ] Ideas & Research archive section established and accessible.
- [ ] World clocks ticker, theme switcher (persisting in `localStorage`), mobile navigation drawer, and Canvas Dino Runner function reliably with the updated design.
- [ ] Contact section streamlined with responsive WhatsApp CTA and email link.
- [ ] Zero console errors and valid SEO Open Graph / meta descriptions.

---

*Last updated: 2026-10-14*
