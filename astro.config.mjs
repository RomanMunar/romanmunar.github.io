import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import partytown from "@astrojs/partytown";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), preact(), partytown(), tailwind()],
  site: "https://www.astro.build",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
