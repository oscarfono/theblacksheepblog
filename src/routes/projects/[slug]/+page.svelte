<script>
  export let data;
</script>

<svelte:head>
  <title>{data.title} | The Black Sheep Blog</title>
  <meta name="description" content="Projects The Black Sheep has worked on with the category '{data.title}'." />
</svelte:head>

<article>
  <header>
    <h1 class="title">{data.client_name}</h1>
  </header>
  <svelte:component this={data.content} />
  <footer></footer>
</article>


{#if data.categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each data.categories as category}
	<li>
	  <a href="/projects/category/{category}">
	    {category}
	  </a>
	</li>
      {/each}
    </ul>
  </aside>
{/if}
