import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch:{
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  experimental:{
    clientPrerender: true,
  },
  integrations: [tailwind()]
});