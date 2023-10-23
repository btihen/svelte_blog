<script>
  import { createSearchStore, searchHandler } from "$lib/stores/search";
  import { onDestroy } from "svelte";
  import BlogLayout from "../blog/blog_layout.svelte";

  export let data;
  export let pages = JSON.stringify(data.pages, null, 2);

  const searchPages = data.pages.map((page) => {
    const topic = page.meta.topic || "";
    const title = page.meta.title || "";
    const summary = page.meta.summary || "";
    const tags = Array.isArray(page.meta.tags) ? page.meta.tags.join(" ") : "";

    const searchTerms = `${topic} ${title} ${summary} ${tags}`;

    return {
      ...page,
      searchTerms,
    };
  });

  const searchStore = createSearchStore(searchPages);

  const unsubscribe = searchStore.subscribe((model) => {
    searchHandler(model);
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="container">
  <h1>Search Filter</h1>
  <input
    type="search"
    placeholder="Search term"
    bind:value={$searchStore.search}
  />
</div>

RESULTS

<pre>{JSON.stringify($searchStore.filtered, null, 2)}</pre>
<hr />
<div class="page-grid">
  {#each $searchStore.filtered as pageFound}
    <div class="page">
      <h2>{pageFound.meta.title}</h2>
      <p>{pageFound.meta.summary}</p>
      <p class="badge">{pageFound.meta.tags}</p>
      <p>{pageFound.meta.topic}</p>
    </div>
    <hr />
  {/each}
</div>

<hr />
ORIGINAL
<pre>{pages}</pre>

<style>
  .container {
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
  }
</style>
