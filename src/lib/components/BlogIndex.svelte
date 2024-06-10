<!-- src/lib/components/BlogIndex.svelte -->

<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import BlogTeaser from './BlogTeaser.svelte';

  export let selectedCategory;

  let posts = writable([]);
  let filteredPosts = writable([]);

  async function fetchPosts() {
    try {
      const response = await fetch('/api/posts');
      const allPosts = await response.json();

      const uniquePosts = new Map();
      allPosts.forEach(post => {
        if (post.meta.published && !uniquePosts.has(post.id)) {
          uniquePosts.set(post.id, post);
        }
      });

      posts.set(Array.from(uniquePosts.values()));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  $: selectedCategory.subscribe(category => {
    posts.subscribe(allPosts => {
      if (category) {
        filteredPosts.set(allPosts.filter(post => post.meta.categories.includes(category)));
      } else {
        filteredPosts.set(allPosts);
      }
    });
  });

  onMount(fetchPosts);
</script>

<section class="blog-index">
  <header>
    <h2>Most Recent</h2>
  </header>
  {#if $filteredPosts.length > 0}
    <ul>
      {#each $filteredPosts as post (post.id)}
        <li>
          <BlogTeaser {post} />
        </li>
      {/each}
    </ul>
  {:else}
    <p>No posts found.</p>
  {/if}
</section>

<style lang="scss">
  ul {
    list-style-type: none;
  }
</style>
