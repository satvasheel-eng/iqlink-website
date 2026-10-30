import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Every page is prerendered to static HTML in dist/client, which GitHub Pages
// serves at www.iqlink.in (see .github/workflows/deploy.yml). Pages are written
// as about.html, not about/index.html, so /about loads without a redirect to /about/.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: false },
      pages: [{ path: "/404", prerender: { enabled: true, outputPath: "/404.html" } }],
    }),
    viteReact(),
  ],
});
