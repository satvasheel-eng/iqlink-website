// GitHub Pages serves dist/client/404.html for every unknown address. The
// prerendered page can't hydrate there (its router state is for /404, not the
// requested path), so ship it as plain HTML: drop the app scripts and module
// preloads, keep the styles and the JSON-LD.
import { readFileSync, writeFileSync } from "node:fs";

const file = new URL("../dist/client/404.html", import.meta.url);
const html = readFileSync(file, "utf8")
  .replace(/<script\b(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "");

writeFileSync(file, html);
console.log("404.html: app scripts removed");
