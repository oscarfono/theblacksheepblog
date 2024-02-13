<script>
</script>

<svelte:head>
  <title>The Black Sheep Blog</title>
  <meta name="description" content="Thoughts and musings from The Black Sheep himself, Cooper Oscarfono." />
</svelte:head>

<section class="hero">
  <h1 class="title">The Black Sheep Blog</h1>
</section>

<style lang="scss">
  .hero {
    position: absolute;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    width: 100%;
    z-index: 1;
    background: center no-repeat url('Hero1920.jpg');


  }
  .title {
    margin: 3.333em 1.333em;
    font-size: var(--fs-xl);
    text-shadow: var(--std-text-shadow), var(--rad-text-shadow), var(--std-text-shadow);
  }

  @media (--desktop-device) {

    .title {
      text-align: right;
    }
  }
</style>
