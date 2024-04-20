<script>
  export let data;
</script>

<svelte:head>
  <title>Projects | The Black Sheep Blog</title>
  <meta name="description" content="Projects The Black Sheep has worked on" />
</svelte:head>

<section class="wrapper grid">
  <h1 class="title">My little lambs</h1>
  {#each data.projects as project}
    <a href={project.path}>
      <article>
        <header>
          <h2>{project.meta.client_name}</h2>
          <h3>{project.meta.title}</h3>
        </header>
        <img alt={project.meta.alt} src={project.meta.image} />
      </article>
    </a>
  {/each}
</section>

<style lang="scss">
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
    gap: 3.333em;

    a:hover {
      color: var(--lighter);
    }

    article {
      position: relative;
      background-color: var(--soften);
      padding: 0;

      > header {
        margin-top: -0.5em;
        padding: 2em;
        background-color: var(--darker);
        box-shadow: 0 0.333em 0 var(--darkest);

        h2 {
          line-height: 1.25;
        }
      }
    }
  }

  @media (--tablet-device) and (--desktop-device) {
    section {

    }
  }
</style>
