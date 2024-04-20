<script>
  import { onMount } from 'svelte';
  import { json } from '@sveltejs/kit'; // Import json function from SvelteKit
  import { paint } from '$lib/utils/gradient.js';

  let posts = [];

  // Function to fetch published posts
  async function fetchPosts() {
    try {
      const response = await fetch('/api/posts'); // Fetch posts from your API endpoint
      const allPosts = await response.json(); // Parse the JSON response

      // Filter published posts
      posts = allPosts
        .filter(post => post.meta.published) // Filter published posts

    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  // Function to paint images onto canvas elements
  function paintImages() {
    posts.forEach((post, index) => {
      const canvas = document.getElementById(`canvas-${index}`);
      if (!canvas) return; // Check if canvas element exists
      const context = canvas.getContext('2d');

      requestAnimationFrame(function loop(t) {
        requestAnimationFrame(loop);
        paint(context, t);
      });
    });
  }

  // Fetch posts and paint images when the component is mounted
  onMount(() => {
    fetchPosts();
    paintImages();
  });
</script>

{#if posts.length > 0}
  <ul>
    {#each posts as post, index}
      <li>
        <a href="{post.path}">
          <article>
            <header class="grid">
              <div class="article-header-left">
                <div class="badge">
                  <canvas
                    id={`canvas-${index}`}
                    width={150}
                    height={150}
                    style="mask: url('{post.meta.image}') 50% 50% no-repeat; --webkit-mask: url('{post.meta.image}') 50% 50% no-repeat;"
                    />
                </div>
              </div>
              <div class="article-header-right">
                <h2>{post.meta.title}</h2>
                <p>{post.meta.date}</p>
                <button>Read more...</button>
              </div>
            </header>
          </article>
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <p>No posts found.</p>
{/if}

<style lang="scss">

  ul {
    list-style-type: none;
  }

  article {
    position: relative;
    margin-top: 1em;
    padding: 2em;
    background: var(--white);
    border-top: dashed .133em var(--soften);

    > header {
      grid-template-columns: 150px 1fr 1fr;
      align-items: center;

      .article-header-left {
        grid-column: 1;
      }

      .article-header-right {
        grid-column: 2 / -1;
        align-items: center;
        padding: 2em;

        h2 {
          color: var(--soften);
          margin-bottom: 0;
          text-shadow: none;
        }

        p {
          text-shadow: none;
        }
        button {
          color: var(--white);
          text-align: center;
          box-shadow: none;
        }

      }
    }
  }
</style>
