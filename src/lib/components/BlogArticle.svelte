<!-- /src/lib/components/BlogArticle.svelte -->

<script>
  import { onMount } from 'svelte';
  import { paint } from '$lib/utils/gradient.js';
  import { fetchMarkdownPosts } from '$lib/utils';
  import TagTextOutline from 'svelte-material-icons/TagTextOutline.svelte';

  export let data;

  let posts = [];

  onMount(async () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return; // Check if canvas element exists
    const context = canvas.getContext('2d');

    requestAnimationFrame(function loop(t) {
      requestAnimationFrame(loop);
      paint(context, t);
    });

    // Fetch all posts from the API
    const response = await fetchMarkdownPosts();
    if (response && response.ok) {
      posts = await response.json();
    }
  });

  // Find the current article in the list of posts
  let currentIndex = posts.findIndex(post => post.id === data.id);

  // Find the previous and next articles
  let previousIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;
  let previousArticle = posts[previousIndex];
  let nextArticle = posts[nextIndex];
</script>

<article>
  <header>
    <div class="article-header-left">
       <canvas width={150} height={150} style="mask: url({data.image}) 50% 50% no-repeat; --webkit-mask: url({data.image}) 50% 50% no-repeat;" />
    </div>
    <div class="article-header-right">
      <h1>{data.title}</h1>
      <br>
      <p><span class="soften">Author:</span> {data.author}<p>
      <p><span class="soften">Published:</span> {data.date}</p>
      {#if data.categories.length}
        <ul>
          {#each data.categories as category}
            <li><a href="/blog/category/{category}"><TagTextOutline /> {category}</a></li>
          {/each}
        </ul>
      {/if}
    </div>
  </header>
  <main>
    <svelte:component this={data.content} />
  </main>
  <footer>
    <nav class="article-navigation">
      {#if previousArticle}
        <a href={`/blog/${previousArticle.slug}`}>Previous Article</a>
      {/if}
      {#if nextArticle}
        <a href={`/blog/${nextArticle.slug}`}>Next Article</a>
      {/if}
    </nav>
  </footer>
</article>

<style lang="scss">
  article {
    margin: 3em auto;
    padding: 1em 2em;
    overflow: hidden;

    header {
      display: flex;
      align-items: center;
      margin: 0 -1.333em 0;
      padding: 6em 3.333em;

      .article-header-left {
        width: 150px;
        height: 150px;
        flex-shrink: 0;
        margin-right: 1em;
        background: var(--make-metal);
        border-radius: 100%;

        canvas {
          width: 100%;
          height: 100%;
          background-color: #666;
          mask-size: contain;
        }
      }

      .article-header-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding-left: 1em;
      }

      h1 {
        flex-grow: 1;
        font-size: var(--fs-l);
      }

      ul {
        list-style-type: none;
        padding: 0;

        li {
          display: inline-block;
          padding: 0.333em;

          &:first-child {
            padding-left: 0;
          }

        }
      }
    }

    main {
      margin-top: 1em;
      padding: 3.333em 3.333em 10em;

      p {
        margin-bottom: 2em;
        font-size: var(--fs-m);
      }
    }

    footer {

      nav {
        a {

        }
      }
    }
  }


  @media --tablet-device {
  }
</style>
