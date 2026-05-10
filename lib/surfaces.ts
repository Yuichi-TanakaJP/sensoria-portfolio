// Surface class strings — single source of truth for cards, chips, dividers.
// Pair with lib/buttonStyles.ts for CTA buttons.
// See docs/02-design-guide.md for the underlying tokens.

// ---------- Cards ----------
const cardBordered = 'border border-stone-200 bg-stone-50 transition-colors';
const cardInteractiveExt =
  'hover:border-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900';

// Standard p-6 bordered card — Featured copy area, MediaKit hero accent, Hero metrics.
export const card = `${cardBordered} p-6`;
export const cardInteractive = `${cardBordered} ${cardInteractiveExt} p-6`;

// Compact px-5 py-4 bordered card — Link cards in dense grids.
export const cardCompact = `${cardBordered} px-5 py-4`;
export const cardCompactInteractive = `${cardBordered} ${cardInteractiveExt} px-5 py-4`;

// Bordered frame with no padding — when children handle their own padding
// (e.g. image header + p-6 content below).
export const cardFrame = `${cardBordered}`;
export const cardFrameInteractive = `${cardBordered} ${cardInteractiveExt}`;

// Flat card with no border — lives inside a grid that uses gap-px on a stone-200 parent.
export const cardFlat = 'bg-stone-50 p-6 transition-colors';

// Dashed placeholder / empty state / "view all" sentinel.
export const cardDashed =
  'border border-dashed border-stone-300 bg-stone-50 p-6 transition-colors';

export const cardDashedInteractive =
  `border border-dashed border-stone-300 bg-stone-50 p-6 transition-colors ${cardInteractiveExt}`;

// Dark inverted card (for dark bands).
export const cardDark = 'bg-stone-900 text-stone-50 p-6 transition-colors';

// ---------- Chips (small tag/filter rectangles) ----------
const chipBase =
  'inline-flex items-center px-3 py-1.5 text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900';

export const chip =
  `${chipBase} border border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-700 hover:text-stone-900`;

export const chipActive =
  `${chipBase} border border-stone-900 bg-stone-900 text-stone-50`;

// ---------- Pills (slightly larger chips for sticky nav) ----------
const pillBase =
  'inline-flex items-center px-4 py-2 text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900';

export const pill =
  `${pillBase} border border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-700 hover:text-stone-900`;

export const pillActive =
  `${pillBase} border border-stone-900 bg-stone-100 text-stone-900`;

// ---------- Dividers ----------
export const ruleHorizontal = 'h-[1px] bg-stone-300';
export const ruleVertical = 'w-[1px] bg-stone-300';
