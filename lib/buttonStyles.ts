// Button class strings — single source of truth.
// See docs/02-design-guide.md §2-bis for the rationale (3-tier system,
// solid / bordered / dark variants).

const base =
  'inline-flex items-center justify-between gap-3 px-6 py-4 text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

// Primary: solid ink button on a light background.
export const buttonPrimary =
  `${base} bg-stone-900 text-stone-50 hover:bg-stone-700 focus-visible:ring-stone-900`;

// Secondary: bordered button on a light background.
export const buttonSecondary =
  `${base} border border-stone-400 text-stone-700 hover:border-stone-900 hover:text-stone-900 focus-visible:ring-stone-900`;

// Primary on dark canvas (e.g. dark closing band): inverted to light fill.
export const buttonPrimaryOnDark =
  `${base} bg-stone-50 text-stone-900 hover:bg-stone-200 focus-visible:ring-stone-50 focus-visible:ring-offset-stone-900`;

// Secondary on dark canvas: bordered, light text.
export const buttonSecondaryOnDark =
  `${base} border border-stone-500 text-stone-50 hover:border-stone-50 focus-visible:ring-stone-50 focus-visible:ring-offset-stone-900`;
