<script>
  import BlogArticle from "$lib/components/BlogArticle.svelte";

  export let data;
</script>

<svelte:head>
  <title>{data.title} | The Black Sheep Blog</title>
  <meta name="description" content="Thoughts and musings from The Black Sheep himself." />
</svelte:head>

<section class="wrapper grid>">
  <BlogArticle {data} />
</section>

<style lang="scss">
  .grid {
    grid-template-columns: 1fr 1fr 2fr 1fr;
  }
</style>
