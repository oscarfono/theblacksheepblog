<script>
  export let year = 2023;
  export let author = "Cooper Oscarfono";
</script>

<div class="copyright">
  &copy; {year}
  &nbsp;
  {#each author.split('') as letter}
    <span>{letter}</span>
  {/each}
</div>

<style lang="scss">
  .copyright {
    position: absolute;
    bottom: 5em;
    color: var(--darker);
    cursor: none;

    span {
      color: var(--darker);
      cursor: none;

      &:hover {
        color: var(--golden);
      }
    }
  }
</style>
