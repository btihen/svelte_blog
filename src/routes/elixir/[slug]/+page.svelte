<!-- src/routes/[slug]/+page.svelte -->
<script>
  export let data;
</script>

<article>
  <h1><b>{data.title}</b></h1>
  <p>Published: {data.date}</p>
  <p>Elixir SLUG in use</p>
  <svelte:component this={data.content} />
</article>
