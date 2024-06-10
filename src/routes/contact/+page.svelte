<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
 </script>

<svelte:head>
  <title>Contact | The Black Sheep Blog</title>
  <meta name="description" content="Contact The Black Sheep" />
</svelte:head>

<section class="wrapper grid">
  <header>
    <h1 class="title">Contact</h1>
  </header>
  <main>
    <p>In addition to my social links, located at the bottom of the page, you can contact me via the form below.</p>
  <svelte:component this={ContactForm} />
</main>
</section>

<style lang="scss">
  .grid {
    grid-template-columns: 1fr 2fr 1fr;

    > header {
      grid-column: 1 /-1;
    }

    > main {
      grid-column: 2;
    }
  }
</style>
