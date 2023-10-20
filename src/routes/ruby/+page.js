// src/routes/blog/+page.js
export const load = async ({ fetch }) => {
  const response = await fetch(`/api/ruby`);
  const posts = await response.json();

  return {
    posts
  };
};
