<script>
  export let data;
</script>

<svelte:head>
  <title>Recent Posts | The Black Sheep</title>
  <meta name="description" content="Bleatings and musings from The Black Sheep" />
</svelte:head>

<h1 class="title">Bleatings</h1>
<section id="recent-posts">
  <ol>
    {#each data.posts as post}
      <a href={post.path}>
        <li>
          <h2>{post.meta.title} - {post.meta.date}</h2>
        </li>
      </a>
    {/each}
  </ol>

</section>

<style lang="scss">

  section {
    max-width: 100%;
    padding: 0;
  }

  ol {
    margin-top: 3.333em;
    list-style-type: none;
    margin-inline: auto;
    text-align: center;

    li {
      padding: 1em;
    }
  }
</style>
