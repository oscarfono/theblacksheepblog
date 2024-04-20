<!-- BlogIndex.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';
  import { json } from '@sveltejs/kit'; // Import json function from SvelteKit
  import { writable } from 'svelte/store'; // Import writable store from Svelte
  import BlogTeaser from './BlogTeaser.svelte';

  // Create a writable store to hold the selected category
  const selectedCategory = writable(null);

  let posts = []; // Assuming posts is an array of objects representing posts
  let filteredPosts = []; // Initialize filteredPosts as an empty array

  // Function to fetch posts
  async function fetchPosts() {
    try {
      const response = await fetch('/api/posts'); // Fetch posts from your API endpoint
      const allPosts = await response.json(); // Parse the JSON response

      // Filter published posts
      posts = allPosts.filter(post => post.meta.published);
      filteredPosts = posts; // Initialize filteredPosts with all posts initially

    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  // Subscribe to the selectedCategory store to react to changes
  let unsubscribeSelectedCategory = selectedCategory.subscribe(categoryName => {
    if (categoryName) {
      // Filter posts based on selected category
      filteredPosts = posts.filter(post => post.meta.categories.includes(categoryName));
    } else {
      // If no category selected, show all posts
      filteredPosts = posts;
    }
  });

  // Fetch posts when the component is mounted
  onMount(fetchPosts);

  // Cleanup function to unsubscribe from the selectedCategory store
  onDestroy(() => {
    unsubscribeSelectedCategory();
  });
</script>

<section class="blog-index">
  <header>
    <h2>Most Recent</h2>
  </header>

  <!-- Render the filtered post list -->
  {#if filteredPosts.length > 0}
    <ul>
      {#each filteredPosts as post}
        <li>
          <BlogTeaser post={post} />
        </li>
      {/each}
    </ul>
  {:else}
    <p>No posts found.</p>
  {/if}
</section>

<style lang="scss">
  /* Add your CSS styling for the post list here */
</style>
