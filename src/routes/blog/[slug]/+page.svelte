<script>
  import BlogArticle from "$lib/components/BlogArticle.svelte";

  export let data;
</script>

<svelte:head>
  <title>The Black Sheep Blog | {data.title}</title>
  <meta name="description" content="Thoughts and musings from The Black Sheep himself." />

</svelte:head>

<BlogArticle {data} />
