<script>
  import Gitlab from 'svelte-material-icons/Gitlab.svelte';
  import Github from 'svelte-material-icons/Github.svelte';
  import Youtube from 'svelte-material-icons/Youtube.svelte';
  import Instagram from 'svelte-material-icons/Instagram.svelte';
  import Facebook from 'svelte-material-icons/Facebook.svelte';

  let communities = [
    { id: 0, name: "gitlab", url: "https://gitlab.com/baaash"},
    { id: 1, name: "github", url: "https://github.com/oscarfono"},
    { id: 2, name: "youtube", url: "https://youtube.com/oscarfono/blacksheepbleatings"},
    { id: 3, name: "instagram", url: "https://instagram.com/mindthelion"},
    { id: 4, name: "facebook", url: "https://facebook.com/profile.php?id=100094420951714"}
  ]

  // Map community names to their respective components
  const componentsMap = {
    gitlab: Gitlab,
    github: Github,
    youtube: Youtube,
    instagram: Instagram,
    facebook: Facebook
  };
</script>

<div class="social-links">
  {#each communities as community (community.id)}
    <a class="{community.name}" href="{community.url}">
      <svelte:component this={componentsMap[community.name]} size="2em" />
    </a>
  {/each}
</div>

<style lang="scss">
  .social-links {
    display: flex;
    flex-direction: row;
    gap: 1em;
    position: absolute;
    bottom: 3.333em;


    a {
      color: var(--darker);
      &:visited {
        color: var(--darker);}
    }

    a.gitlab:hover {
      color: #fc6d26;
    }
    a.github:hover {
      color: #6e5494;
    }
    a.youtube:hover {
      color: #ea3223;
    }
    a.instagram:hover {
      color: #e4405f;
    }
    a.facebook:hover {
      color: #0165e1;
    }
  }
</style>
