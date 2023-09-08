import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";


export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: deno()
});