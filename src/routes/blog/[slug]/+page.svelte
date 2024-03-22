<script>
  export let data;
</script>

<svelte:head>
  <title>The Black Sheep Blog | {data.title}</title>
  <meta name="description" content="Thoughts and musings from The Black Sheep himself." />
</svelte:head>

<article>
  <h1 class="title">{data.title}</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
  <footer>
    <span onclick="">previous article</span> | <span onclick="">next article</span>
  </footer>
</article>

<!-- ...Post HTML here -->

{#if data.categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each data.categories as category}
	<li>
	  <a href="/blog/category/{category}">
	    {category}
	  </a>
	</li>
      {/each}
    </ul>
  </aside>
{/if}

<style lang="scss">
  article {
    max-width: 96%;
    margin-inline: auto;


    p {
      font-size: var(--fs-m);
    }
  }

  aside {
    background-color: var(--darker);
    max-width: 30%;
  }

  @media --tablet-device {
    article {
      max-width: 66.666%
    }
  }
</style>
