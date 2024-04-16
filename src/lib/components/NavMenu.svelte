<script>
  import { page } from '$app/stores';
  export let toggleIsPressed;
  export let links;

</script>

<nav class="menu">
  <ul>
    {#each links as link (link.id)}
      <li aria-current={$page.url.pathname === link.path ? 'page' : undefined}>
        <a href="{link.path}" on:click={toggleIsPressed}>{link.name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">

  nav {
    margin-top: 5em;
    line-height: 4;
    text-align: center;
    text-transform: uppercase;
    font-size: var(--fs-l);

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
</style>
