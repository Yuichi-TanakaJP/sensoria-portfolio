# Sensoria – Concept Specification (Reference)

⚠️ **Note**
This document is a conceptual reference generated during the PoC phase.
It is **NOT** a strict requirement or fixed design rule.
Use it as inspiration and alignment, not as constraints.

---

## 1. Project Concept: "Sensory Beauty" (五感美容)

- **Core Message**  
  Refining the five senses (vision, touch, smell, etc.) leads to a deeper, more beautiful lifestyle.

- **Authority**  
  Over 300 articles published on Nikkei Web.

- **Vibe**  
  Quiet, intellectual, healing, sophisticated, and trustworthy.  
  Like a high-end museum catalog.

---

## 2. Typography: "Soft Elegance"（とがりすぎない上質）

- **Primary Font**  
  `Zen Old Mincho` (Google Fonts)

- **Design Intent**  
  Unlike standard Mincho fonts with sharp, needle-like strokes,  
  Zen Old Mincho mimics the subtle ink bleeding of traditional letterpress printing.  
  It provides a *soft* and *warm* intellectual feeling.

- **Weight Strategy**  
  Use `font-medium (500)` for headings to avoid thin lines looking too cold or sharp.

- **Spacing**  
  Generous tracking (`tracking-widest`) to represent the slow passage of time.

---

## 3. Visual Strategy: "Vellum & Light"

### The "Vellum" Overlay
To solve text readability issues without using heavy dark shadows,  
use a semi-transparent white layer and subtle blur.

- Example:
  - `bg-stone-50/60`
  - `backdrop-blur-[2px]`

### Effect
This creates an effect similar to a sheet of high-quality tracing paper  
placed over a photograph—keeping imagery dreamy while ensuring text readability.

### Color Palette
- **Background**:  
  `Stone-50 (#fafaf9)` – Off-white
- **Text**:  
  `Stone-900 (#1c1917)` – Warm charcoal
- **Accents**:  
  - Terra: `#b45309`  
  - Sage: `#4d7c5f`  
  - Gold: `#a16207`

---

## 4. Implementation Notes (Reference)

- **Frontend**  
  React + Tailwind CSS

- **Animations**  
  Subtle `fade-in-up` transitions for an organic, calm feel.

- **Images**  
  High-quality photography with natural light and restrained contrast.

---

## 5. Developer / AI Guidance (Non-binding)

When extending or experimenting with this project:

1. Avoid pure white (`#FFF`) and pure black (`#000`).  
   Prefer the Stone palette for warmth and softness.
2. Maintain Zen Old Mincho for serif text where appropriate.
3. Ensure the authority of “300+ articles” is visible but integrated elegantly.
4. Prioritize whitespace and breathing room over information density.

---

## Positioning

This document represents a **snapshot of aesthetic intent** at an early stage.
It may evolve, diverge, or be partially discarded as the project grows.
