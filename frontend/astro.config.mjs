import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  output: 'static',
  experimental: {
    clientPrerender: true,
  },
  integrations: [tailwind()],
});
