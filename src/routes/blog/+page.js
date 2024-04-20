import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async ({ fetch }) => {
  try {
    const response = await fetch(`/api/posts`);
    const posts = await response.json();
    const categories = posts.flatMap(post => post.meta?.category || []);
    const uniqueCategories = Array.from(new Set(categories)); // Convert Set to array

    return {
      posts,
      categories: uniqueCategories, // Pass categories alongside posts
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};
