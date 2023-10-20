<!-- +layout.svelte -->
<script>
  import "../app.postcss";
  import MenuTop from "$lib/components/MenuTop.svelte";
  import "$lib/styles/style.css";
</script>

<MenuTop />

<main class="overflow-scroll pb-16">
  <slot />
</main>

<footer>Hello, I'm the footer.</footer>
