import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

// Vite rejects requests whose Host header it doesn't recognise, so reaching
// `astro dev` over a VPN or tunnel domain requires listing that domain. Read it
// from an untracked .env.local (see .env.example) to keep private hostnames out
// of the repo. Comma-separated; a leading dot matches subdomains. Unset leaves
// Vite's default of localhost-only, and this affects the dev server only.
const { DEV_ALLOWED_HOSTS } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  ''
);

const allowedHosts = (DEV_ALLOWED_HOSTS ?? '')
  .split(',')
  .map((host) => host.trim())
  .filter(Boolean);

// https://astro.build/config
export default defineConfig({
  site: 'https://koalanis.github.io',
  base: '/fallout3-checklist',
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts }
  }
});
