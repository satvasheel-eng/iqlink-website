import { createFileRoute } from "@tanstack/react-router";

import { NotFound } from "@/components/site/NotFound";

// Prerendered as dist/client/404.html, which GitHub Pages serves for any
// address that doesn't exist.
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [{ title: "Page not found | IQLink Technologies" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFound,
});
