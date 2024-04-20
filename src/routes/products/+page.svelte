<script>
  import ProductCards from '$lib/components/ProductCards.svelte';

  export let data;
</script>

<svelte:head>
  <title>Shop | The Black Sheep Blog</title>
  <meta name="description" content="Buy products from The Black Sheep Blog online store" />
</svelte:head>

<section class="wrapper grid">
  <h1 class="title">Shop</h1>
  <ProductCards {data} />
</section>

<style lang="scss">
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
  }
</style>
