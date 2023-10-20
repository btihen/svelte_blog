<!-- +layout.svelte -->
<script>
  import "../app.postcss";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "$lib/styles/style.css";
</script>

<Header />

<main class="overflow-scroll pb-16">
  <slot />
</main>

<Footer />
