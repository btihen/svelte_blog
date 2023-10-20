export const fetchMarkdownRubyPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/ruby/**/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const trimLocation = path.indexOf("+")
      const postPath = path.replace('/src/routes', '').replace('/+page.md', '');
      // const postPath = path.slice(11, -3);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allPosts;
};
