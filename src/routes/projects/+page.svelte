<script>
  export let data;
</script>

<svelte:head>
  <title>Projects | The Black Sheep</title>
  <meta name="description" content="Bleatings and musings from The Black Sheep" />
</svelte:head>

<h1 class="title">My little lambs</h1>
<section>
  {#each data.projects as project}
    <article>
      <header>
	<h2><a href={project.meta.client_url}>{project.meta.client_name}</a></h2>
        <h3><a href={project.path}>{project.meta.title}</a></h3>
      </header>
      <img alt={project.meta.alt} src={project.meta.image} >
    </article>
  {/each}
</section>


<style>
  section {
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

  @media (--desktop-device) {

    section {
      flex-direction: row;
    }
  }



</style>
