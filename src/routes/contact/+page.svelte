<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
 </script>

<svelte:head>
  <title>Contact | The Black Sheep</title>
  <meta name="description" content="Contact The Black Sheep" />
</svelte:head>

<h1 class="title">Contact</h1>

<section>
  <svelte:component this={ContactForm} />
</section>

<style lang="scss">

</style>
