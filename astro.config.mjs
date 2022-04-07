// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    site: "https://romanmunar.github.io",
  },
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        syntaxHighlight: "shiki",
        remarkPlugins: ["remark-code-titles"],
        rehypePlugins: [
          "rehype-slug",
          [
            "rehype-autolink-headings",
            { behavior: "prepend", properties: { class: "anchor" } },
          ],
        ],
      },
    ],
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
