// remarkTOC wouldn't work but SvelteTOC worked well first try:
// https://toc.janosh.dev/

// import remarkUnwrapImages from "remark-unwrap-images";
// import remarkToc from "remark-toc";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  layout: "src/routes/blog/blog_layout.svelte",
  layout: {
    blog: "src/routes/blog/blog_layout.svelte",
    elixir: "src/routes/elixir/elixir_layout.svelte",
    ruby: "src/routes/ruby/ruby_layout.svelte",
    _: "src/routes/md_layout.svelte",
  },

  smartypants: {
    dashes: "oldschool",
  },

  // remarkTOC wouldn't work but SvelteTOC worked well first try:
  // https://toc.janosh.dev/
  // remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
  // rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
});

export default config;
