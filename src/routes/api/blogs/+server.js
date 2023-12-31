// +server.js
// export const GET = () => {
// 	return new Response('Welcome to my API');
// };
// src/routes/api/posts/+server.js
import { fetchMarkdownBlogPosts } from '$lib/utils/blog';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownBlogPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  return json(sortedPosts);
};
