<script>
  import ProductCards from '$lib/components/ProductCards.svelte';

  export let data;
</script>

<svelte:head>
  <title>Shop | The Black Sheep</title>
  <meta name="description" content="The Black Sheep Store" />
</svelte:head>

<h1 class="title">Shop</h1>

<ProductCards {data} />

<style lang="scss">

  @media (--desktop-device) {
  }
</style>
