<script>
  export let data;
</script>

<svelte:head>
  <title>Recent Posts | The Black Sheep</title>
  <meta name="description" content="Bleatings and musings from The Black Sheep" />
</svelte:head>

<h1 class="title">Bleatings</h1>
<section id="recent-posts">
  {#each data.posts as post}
    <a href={post.path}>
      <article>
        <img alt={post.meta.alt} src={post.meta.image} >
        <header>
	  <h2>{post.meta.title}</h2>
          <h3 class="article-author">{post.meta.author}</h3>
          <span class="publish-date\">Published {post.meta.date}</span>
        </header>
      </article>
    </a>
  {/each}
</section>

<style lang="scss">

  section {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 0;
  }

  a:hover {
    color: var(--lighter);
  }

  article {
    background-color: var(--soften);
    padding: 0;
    min-width: 25%;
    min-height: 500px;

    > header {
      margin-top: -0.5em;
      padding: 2em;
      background-color: var(--darker);
      box-shadow: 0 0.333em 0 var(--darkest);

      h3 {
        font-size: var(--fs-s);
      }

      h2, h3, span {
        line-height: 1.25;
      }
    }
  }

  @media (--tablet-device) and (--desktop-device) {
    section {
      flex-direction: row;
    }
  }

</style>
