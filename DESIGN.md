# Design

## Theme

Night-meet asphalt: deep blue-black base (like the flamed black bus) with candy-paint color drenches per flavor section. Dark is the brand's own surface — the bus is black, the paint pops against it, chrome and yellow glow like a paletero bell at a night car meet.

## Color (OKLCH)

Anchored to the 2018 logo + fleet livery — identity preservation over generated seeds.

- `--asphalt`: oklch(0.17 0.015 265) — body background
- `--asphalt-2`: oklch(0.22 0.02 265) — raised panels
- `--chrome`: oklch(0.96 0.005 240) — primary text on dark
- `--steel`: oklch(0.78 0.02 250) — secondary text on dark
- `--candy-blue`: oklch(0.79 0.1 220) — logo script blue
- `--flame-orange`: oklch(0.70 0.19 45) — bus flames
- `--diamond-red`: oklch(0.54 0.18 30) — logo diamond
- `--paleta-yellow`: oklch(0.85 0.155 85) — logo pop / CTA
- Flavor drenches: mango oklch(0.72 0.17 55), lime oklch(0.60 0.14 130), fresa oklch(0.50 0.19 20)

Strategy: Drenched dark base + full-palette flavor panels (brand register permission). Ink on drenched panels is near-black of the panel's own hue, never gray.

## Typography

- Display: **Bungee** (urban signage lettering; Bungee Shade for the one layered hero moment only). All-caps, tracking normal-to-slightly-open, never negative below -0.02em.
- Everything else: **Barlow** (grotesk drawn from California public signage/license plates) — Barlow Condensed 700/800 caps for sub-headlines and plate-style labels, Barlow 400/500/600 for body.
- Pairing story: sign-painter display + license-plate grotesk. No third family; script moments come from the logo artwork itself.

## Signature devices (use these, not generic scaffolds)

1. **Sticker system**: badges/chips rotated ±2–4°, white sticker border + hard shadow, like the sticker-bombed trike.
2. **Pinstripes & checkers**: thin double-line pinstripe rules (Von Dutch), checkered-flag strips as section seams.
3. **Lotería flavor cards**: each flavor framed like a lotería card — ornate inner border, number, name plate at bottom — drenched in its flavor color.
4. **Marquee strip**: yellow ticker of shop facts (MADE IN TEXAS SINCE 2015 ✦ HOUSTON, TX ✦ 713).

## Layout

Single long-scroll page: hero (full-bleed fleet photo, headline overlaid) → marquee → flavors (lotería cards) → book-the-fleet (serving-window photo) → Made-in-Texas story (founder mural photo) → contact footer. Fluid clamp() spacing; asymmetric tilts from the sticker system, not from random rotation.

## Motion

One orchestrated hero entrance (staggered rise, once). Infinite marquee. IntersectionObserver reveals that only enhance (content visible by default without JS). Card hover: lift + shine sweep. All gated behind prefers-reduced-motion with instant/crossfade fallbacks.
