<script>
  import { fade } from 'svelte/transition';
  import GreatQuotes from '$lib/components/GreatQuotes.svelte';
</script>

<svelte:head>
  <title>The Black Sheep Blog</title>
  <meta name="description" content="Thoughts and musings from The Black Sheep himself, Cooper Oscarfono." />
</svelte:head>

<div class="hero">
  <!-- theres conditional logic on +layout.svelte for bg image on home page.  This div pushs the footer down so the image can be seen -->
  <h1 class="title" transition:fade>The Black Sheep Blog</h1>
  <GreatQuotes />
</div>

<style lang="scss">
  .hero{
    height: 100dvh;
  }

  .title {
    margin: 2.333em 0.5em;
    font-size: var(--fs-xl);
    text-shadow: var(--std-text-shadow), var(--rad-text-shadow), var(--std-text-shadow);
  }

  @media (--desktop-device) {

    .title {
      text-align: right;
    }
  }

</style>
