// Function to process markdown files given a resolver object
async function processMarkdownFiles(files) {
  const iterableFiles = Object.entries(files);

  const allItems = await Promise.all(
    iterableFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const itemPath = path.slice(11, -3); // Adjust this based on your path structure

      return {
        meta: metadata,
        path: itemPath,
      };
    })
  );

  return allItems;
}

// Individual functions to fetch markdown for posts, projects, and products
export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
  return await processMarkdownFiles(allPostFiles);
};

export const fetchMarkdownProjects = async () => {
  const allProjectFiles = import.meta.glob('/src/routes/projects/*.md');
  return await processMarkdownFiles(allProjectFiles);
};

export const fetchMarkdownProducts = async () => {
  const allProductFiles = import.meta.glob('/src/routes/products/*.md');
  return await processMarkdownFiles(allProductFiles);
};
