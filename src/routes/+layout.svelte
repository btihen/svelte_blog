<!-- +layout.svelte -->
<script>
  import "../app.postcss";
  import Header from "$lib/components/Header.svelte";
  import "$lib/styles/style.css";
</script>

<Header />

<main>
  <slot />
</main>

<footer>Hello, I'm the footer.</footer>
