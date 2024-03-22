<script>
  import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';

  let carousel; // for calling methods of the carousel instance

  const handleNextClick = () => {
    carousel.goToNext()
  }

  export let data;
</script>

<svelte:head>
  <title>Shop | The Black Sheep</title>
  <meta name="description" content="The Black Sheep Store" />
</svelte:head>

<section class="hero">
  <h1 class="title">Shop</h1>

  {#if browser}
    <Carousel
      bind:this={carousel}
      autoplay
      autoplayDuration={6000}
      autoplayProgressVisible
      >
      <div class="carousel-hero">
        <img alt="carousel-hero 1"src="/hero-images/Hero1024.jpg">
        <span>slide 1</span>
      </div>
      <div class="carousel-hero">
        <img alt="carousel-hero 2"src="/hero-images/Hero1024.jpg">
        <span>slide 2</span>
      </div>
      <div class="carousel-hero">
        <img alt="carousel-hero 2"src="/hero-images/Hero1024.jpg">
        <span>slide 3</span>
      </div>
    </Carousel>
  {/if}

</section>

<section class="catalogue">

  {#each data.products as product}
    <article>
      <header>
	<a href={product.path}>
          <h2>{product.meta.name}</h2>
          <h3>{product.meta.title}</h3>
        </a>
      </header>
      <img alt={product.meta.alt} src={product.meta.image}>
      <span>{product.price}</span>
    </article>
  {/each}
</section>

<style lang="scss">

  section {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 0;
  }

  article {
    background-color: var(--soften);
    padding: 1em;
    min-width: 25%;
    min-height: 500px;

    > header {
      margin-top: 3.333em;
      margin-left: -1em;
      padding: 1em;
      background-color: var(--darker);

      h2, h3 {
        line-height: 1.25
      }
    }
  }

  .carousel-hero {
    background: var(--darkest);


  }

  .catalogue {
    background-color: var(--darker);
  }

  @media (--desktop-device) {

  }

</style>
