<!-- BlogCategories.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';
  import { json } from '@sveltejs/kit'; // Import json function from SvelteKit

  let categories = [];

  // Function to fetch published posts and extract categories
  async function fetchCategories() {
    try {
      const response = await fetch('/api/posts'); // Fetch posts from your API endpoint
      const posts = await response.json(); // Parse the JSON response

      // Filter and count categories from published posts
      const categoryCounts = {};
      posts
        .filter(post => post.meta.published) // Filter published posts
        .forEach(post => {
          post.meta.categories.forEach(category => {
            categoryCounts[category] = (categoryCounts[category] || 0) + 1;
          });
        });

      // Extract unique categories from categoryCounts object
      const uniqueCategories = Object.keys(categoryCounts);

      // Construct categories array with name and count properties
      categories = uniqueCategories.map(category => ({
        name: category,
        count: categoryCounts[category]
      }));

    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  // Event dispatcher to emit custom event
  const dispatch = createEventDispatcher();

  // Handle category click
  function handleCategoryClick(categoryName) {
    dispatch('categorySelected', categoryName);
  }

  // Fetch categories when the component is mounted
  onMount(fetchCategories);
</script>

<section id="blog-categories">
  <header>
    <h2>Categories</h2>
  </header>
  {#if categories.length > 0}
    <ul>
      {#each categories as category}
        <li><a href="#" on:click={() => handleCategoryClick(category.name)}>{category.name}</a> ({category.count})</li>
      {/each}
    </ul>
  {:else}
    <p>No categories found.</p>
  {/if}
</section>

<style lang="scss">
  /* Add your CSS styling for the categories here */
</style>
