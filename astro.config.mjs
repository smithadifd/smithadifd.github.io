// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://smithadifd.com',
  // Astro 7 defaults to JSX-style whitespace stripping, which drops the space
  // between adjacent inline elements; keep the previous collapsing behaviour.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
});