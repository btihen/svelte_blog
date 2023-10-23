export const load = async ({ fetch }) => {
  const response = await fetch(`/api/all`);
  const pages = await response.json();

  return {
    pages
  };
};
