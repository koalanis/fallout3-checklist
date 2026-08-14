import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://koalanis.github.io',
  base: '/fallout3-checklist',
  vite: {
    plugins: [tailwindcss()]
  }
});
