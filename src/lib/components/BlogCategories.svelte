<!-- /src/lib/components/BlogCategories.svelte -->

<script>
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  let categories = [];

  async function fetchCategories() {
    try {
      const response = await fetch('/api/posts');
      const posts = await response.json();

      const categoryCounts = {};
      posts.filter(post => post.meta.published).forEach(post => {
        post.meta.categories.forEach(category => {
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });
      });

      categories = Object.keys(categoryCounts).map(category => ({
        name: category,
        count: categoryCounts[category]
      }));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  const dispatch = createEventDispatcher();

  function handleCategoryClick(categoryName) {
    dispatch('categorySelected', { category: categoryName });
  }

  onMount(fetchCategories);
</script>

<section id="blog-categories">
  <header>
    <h2>Categories</h2>
  </header>
  {#if categories.length > 0}
    <ul>
      {#each categories as category}
        <li>
          <a href="#" on:click|preventDefault={() => handleCategoryClick(category.name)}>
            {category.name} ({category.count})
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No categories found.</p>
  {/if}
</section>

<style lang="scss">
  ul {
    list-style-type: none;
  }
</style>
