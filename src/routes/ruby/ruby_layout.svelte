<!-- post.svelte -->
<script>
  export let title;
  export let date;
</script>

<article>
  <h1>Ruby = {title}</h1>

  <p>Published: {date}</p>

  <p>MD Layout in use</p>

  <slot />
</article>
