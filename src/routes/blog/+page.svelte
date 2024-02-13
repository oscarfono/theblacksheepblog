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
      <article>
        <img alt={post.meta.alt} src={post.meta.image} >
        <header>
	  <h2><a href={post.path}>{post.meta.title}</a></h2>
          <span class="publish-date\">Published {post.meta.date}</span>
        </header>
      </article>
    {/each}
  </section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 0;
  }

  article {
    background-color: var(--soften);
    padding: 1em;
    min-width: 25%;
    min-height: 500px;
  }

  @media (--desktop-device) {

    section {
      flex-direction: row;
    }
  }



</style>
