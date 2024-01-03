<script>
  export let data;
</script>

<svelte:head>
  <title>Blog</title>
  <meta name="description" content="Bleatings and musings from The Black Sheep" />
</svelte:head>

<div class="text-column">
  <h1 class="title">Bleatings</h1>
  <ul>
    {#each data.posts as post}
      <li>
	<h2>
	  <a href={post.path}>
	    {post.meta.title}
	  </a>
	</h2>
        <img src={post.meta.image}>
        <span class="publish-date\">Published {post.meta.date}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    display: flex;
    flex-direction: row;
    gap: 1em;
    list-style: none;

    li {
      background-color: var(--soften);
      padding: 1em;
    }
}
</style>
