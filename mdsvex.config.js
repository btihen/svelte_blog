import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  layout: "src/routes/blog/blog_layout.svelte",
  layout: {
    blog: "src/routes/blog/blog_layout.svelte",
    elixir: "src/routes/elixir/elixir_layout.svelte",
    ruby: "src/routes/ruby/ruby_layout.svelte",
    _: "src/routes/md_layout.svelte"
  },

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
