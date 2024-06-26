import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://thecareerjournal.com",
    integrations: [tailwind(), react(), sitemap()],
    output: "server",
    adapter: cloudflare(),
});
