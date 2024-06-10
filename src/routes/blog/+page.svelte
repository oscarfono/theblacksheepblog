<!-- /src/routes/blog/+page.svelte -->

<script>
  import BlogCategories from "$lib/components/BlogCategories.svelte";
  import BlogIndex from "$lib/components/BlogIndex.svelte";
  import { writable } from 'svelte/store';

  const selectedCategory = writable(null);

  function handleCategorySelected(event) {
    selectedCategory.set(event.detail.category);
  }
</script>

<svelte:head>
  <title>Recent Posts | The Black Sheep Blog</title>
  <meta name="description" content="Bleatings and musings from The Black Sheep" />
</svelte:head>

<section class="wrapper grid">
  <h1 class="title">Bleatings</h1>

  <div class="article-header-left">
    <BlogCategories on:categorySelected={handleCategorySelected} />
  </div>
  <div class="article-header-right">
    <BlogIndex {selectedCategory} />
  </div>
</section>

<style lang="scss">
  .grid {
    grid-template-columns: 1fr 1fr 1fr;

    > h1 {
      grid-column: 1 / -1;
    }

    .article-header-left {
      grid-column: 1;
    }

    .article-header-right {
      grid-column: 2 / -1;
    }
  }
</style>
