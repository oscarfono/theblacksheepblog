<!-- /src/lib/components/BlogTeaser.svelte -->

<script>
  import { onMount } from 'svelte';
  import { paint } from '$lib/utils/gradient.js';

  export let post;

  function paintImage() {
    const canvas = document.getElementById(`canvas-${post.id}`);
    if (!canvas) return;
    const context = canvas.getContext('2d');

    requestAnimationFrame(function loop(t) {
      requestAnimationFrame(loop);
      paint(context, t);
    });
  }

  onMount(() => {
    paintImage(); // Ensure each canvas gets painted
  });
</script>

<a href="{post.path}">
  <article>
    <header class="grid">
      <div class="article-header-left">
        <div class="badge">
          <canvas
            id={`canvas-${post.id}`}
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

<style lang="scss">

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
