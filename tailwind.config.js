/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Pattern D: Quiet Luxe — see docs/11-color-palette-references.md §D
      colors: {
        stone: {
          50:  '#f5efe6', // cream canvas
          100: '#e8e1d6', // warm-grey surface
          200: '#dcd4c5', // light border
          300: '#cdc4b3', // mid border
          400: '#a39a85', // mute border / disabled
          500: '#7d7568', // mute text
          600: '#65605a', // text secondary (warm-mute)
          700: '#4a4540', // strong text
          800: '#2a2520', // deeper
          900: '#1a1816', // ink (primary text / dark canvas)
        },
        earth: {
          terra: '#7a5a37',
          sage:  '#7a5a37',
          gold:  '#c9b48a',
          bronze: '#7a5a37',
          champagne: '#c9b48a',
        },
      },
      fontFamily: {
        serif: ['"Zen Old Mincho"', '"Shippori Mincho"', '"Yu Mincho"', '"YuMincho"', '"Hiragino Mincho ProN"', 'serif'],
        sans: ['"Helvetica Neue"', 'Arial', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
    },
  },
  plugins: [],
};
