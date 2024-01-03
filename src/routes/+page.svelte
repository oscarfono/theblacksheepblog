<script>
  import Hero640 from '$lib/images/Hero640.jpg';
  import Hero1024 from '$lib/images/Hero1024.jpg';
  import Hero1920 from '$lib/images/Hero1920.jpg';
  import Hero5724 from '$lib/images/Hero5724.jpg';
</script>

<svelte:head>
  <title>The Black Sheep Blog</title>
  <meta name="description" content="Thoughts and musings from The Black Sheep himself, Cooper Oscarfono." />
</svelte:head>

<section class="hero">
  <h1 class="title">The Black Sheep Blog</h1>
  <img src="{Hero640}"
       srcset="{Hero640} 640w,
            {Hero1024} 1024w,
            {Hero1920} 1920w,
            {Hero5724} 5724w"
       sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           (max-width: 1920px) 1920px,
           5724px"
       alt="A black sheep photographed by Michael Fousert">
</section>

<style>
  .hero {
    height: 80vh;
    z-index: 1;

    .title {
      margin-top: .5em;
        text-shadow: var(--std-text-shadow), var(--rad-text-shadow), var(--std-text-shadow);
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      min-width: 100vw;
      border-radius: 0;

    }
  }

  @media (--desktop-device) {
    .hero {
      height: 80vh;
    }
  }
</style>
