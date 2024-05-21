import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch:true,
  experimental:{
    clientPrerender: true,
  },
  integrations: [tailwind()]
});