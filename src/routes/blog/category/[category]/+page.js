export const load = async ({ fetch, params }) => {
  // Extract the category parameter from the params object
  const { category } = params;

  // Fetch posts data from the API endpoint
  const response = await fetch(`/api/posts`);

  // Parse the response body as JSON
  const allPosts = await response.json();

  // Filter the posts based on the specified category
  const posts = allPosts.filter((post) => post.meta.categories.includes(category));

  // Return an object containing the category and filtered posts
  return {
    category,
    posts
  };
};
