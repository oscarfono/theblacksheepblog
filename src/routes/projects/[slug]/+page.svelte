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
