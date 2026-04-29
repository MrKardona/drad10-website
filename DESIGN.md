# DESIGN.md — DRA.D10 Medicina Estética

## Color Strategy: Committed
One warm cream surface carries 60% of the page. Gold is the single saturated accent used for emphasis, dividers, and interactive states. Charcoal for text authority.

### Tokens
- `--background: #faf8f5` — warm cream (main surface)
- `--blush: #f0e8e2` — secondary surface, section alternation
- `--blush-deep: #e0d0c6` — borders, subtle separators
- `--gold: #b89a6a` — primary accent (buttons, icons, highlights)
- `--gold-light: #d4b896` — hover states, shimmer
- `--charcoal: #1c1c1c` — primary text, dark sections
- `--sage: #a8b5a2` — muted text, secondary labels

## Typography
- **Display:** Cormorant Garamond, weight 300–400, italic for emotional emphasis
- **Body:** DM Sans, weight 400–500
- **Labels:** DM Sans, 0.6rem, letter-spacing 0.3em, uppercase
- **Hero:** clamp(3rem, 7vw, 6.5rem), weight 300
- **Section titles:** clamp(2.4rem, 4vw, 3.6rem), weight 300
- Body line length: max 65ch

## Elevation / Shadows
- Cards: `box-shadow: 0 32px 64px rgba(0,0,0,0.08)` on hover only
- No heavy shadows at rest — flat is premium here

## Spacing Rhythm
- Section padding: py-24 to py-28
- Component gap: gap-16 to gap-24
- Tight: gap-3 to gap-4 inside components

## Animation Principles
- Ease-out-quart everywhere. No bounce. No elastic.
- Scroll reveals: opacity + translateY(40px) → 0
- Hover lifts: translateY(-8px), 0.4s
- Duration: 0.8s–1s for reveals, 0.25s–0.4s for interactions
- Gold line draws left-to-right on scroll

## Components
- **Buttons:** Square corners (border-radius: 0), uppercase, letter-spacing 0.12em, 1rem 2.5rem padding
- **Section labels:** 0.6rem, uppercase, 0.3em spacing, gold color
- **Gold divider:** 1px horizontal line, gradient left-to-right, 5rem wide
- **Cards:** No side-stripe borders. Background tint or full border only.

## Absolute bans (project-specific)
- No side-stripe colored borders on cards
- No gradient text (shimmer effect already removed)
- No glassmorphism unless purposeful (badge overlays on photos: ok)
- No purple or teal anywhere
- No identical card grids — vary layout between service categories
