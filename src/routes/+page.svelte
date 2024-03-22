<script>
  import { fade } from 'svelte/transition';
  let visible = true;
</script>

<svelte:head>
  <title>The Black Sheep Blog</title>
  <meta name="description" content="Thoughts and musings from The Black Sheep himself, Cooper Oscarfono." />
</svelte:head>

<section class="hero">
  <h1 class="title" transition:fade>The Black Sheep Blog</h1>
</section>

<style lang="scss">
  .hero {
    position: absolute;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    height: 100vh;
    height: 100dvh;
    width: 100vw;
    z-index: 1;
    background: center no-repeat url('../lib/images/Hero640.jpg');
  }

  .title {
    margin: 3em 1.333em;
    font-size: var(--fs-xl);
    text-shadow: var(--std-text-shadow), var(--rad-text-shadow), var(--std-text-shadow);
  }

  @media (--tablet-device) {
    .hero {
    background: center no-repeat url('../lib/images/Hero1024.jpg')
    }
  }

  @media (--desktop-device) {
    .hero {
        background: center no-repeat url('../lib/images/Hero1920.jpg');
    }

    .title {
      text-align: right;
    }
  }

  @media (--4k-device) {
    .hero {
      background: centre no-repeat url('../lib/images/Hero5724.jpg');
    }
  }

</style>
