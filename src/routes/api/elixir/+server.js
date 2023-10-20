
// src/routes/api/posts/+server.js
import { fetchMarkdownElixirPosts } from '$lib/utils/elixir';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownElixirPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  return json(sortedPosts);
};
