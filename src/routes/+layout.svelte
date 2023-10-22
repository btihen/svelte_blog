<!-- +layout.svelte -->
<script>
  // import { DarkMode } from "flowbite-svelte";
  import "../app.postcss";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "$lib/styles/style.css";
</script>

<!--
<DarkMode />
-->

<Header />

<main class="w-11/12 max-w-screen-2xl">
  <slot />
</main>

<Footer />
