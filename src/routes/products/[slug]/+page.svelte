<script>
  export let data;
</script>

<svelte:head>
  <title>{data.title} | The Black Sheep Blog</title>
  <meta name="description" content="Products The Black Sheep has worked with the category '{data.title}'." />
</svelte:head>

<article>
  <header>
    <h1 class="title">{data.title}</h1>
    <p>Published: {data.date}</p>
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
				  <a href="/products/category/{category}">
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
