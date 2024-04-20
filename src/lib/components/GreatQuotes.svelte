<script>
  let quotes = [
    {id: 0, content: "The sheep spend their entire lives fearing the wolf only to be eaten by the sheppard", attribution: "~ anonymous"},
  ]
</script>

{#each quotes as quote}
  <div class="quote">
    <p class="content">{quote.content}</p>
    <p class="attribution">{quote.attribution}</p>
  </div>
{/each}

<style lang="scss">

  @keyframes flickerAnimation {
    0%   { opacity:.666; }
    50%  { opacity:0; }
    100% { opacity:.666; }
  }

  .quote {
    margin: 0 0 0 -66.666em;
    animation: flickerAnimation 12s infinite;

    p {
      color: black;
      font-size: var(--fs-sm);
      text-align: center;
    }
  }
</style>
