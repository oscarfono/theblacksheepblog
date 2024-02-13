<script>
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';

  import profile from '$lib/images/profile.jpg';
  import SocialLinks from '$lib/components/SocialLinks.svelte';

  // Initialize isHome as false by default
  let isHome = false;

  // Function to check if the current route is the home page
  const checkIsHome = () => {
    // Compare the current location path with the home page path
    isHome = window.location.pathname === '/';
  };

  // On component mount, check if it's the home page
  onMount(() => {
    checkIsHome(); // Initial check on mount

    // Listen for navigation changes
    const unlisten = () => {
      window.removeEventListener('popstate', checkIsHome);
    };

    window.addEventListener('popstate', checkIsHome);

    // Unsubscribe when component is destroyed
    onDestroy(() => {
      unlisten();
    });
  });
</script>

<footer>
  {#if isHome}
    <section class="author-bio">
      <img class="author-img" src="{ profile }" alt="The Black Sheep himself" />
      <p>Greetings! I'm Cooper, the resident Black Sheep.</p>
      <p>I'm the rebel ram amidst a flock of conformity, daring to graze where others fear to tread.</p>
      <p>I work on and with Free and Open Source Software projects, both for fun and as a means of earning a living. It's a subject I'm hugely passionate about.  The same goes for Music, Jiu Jitsu, and making the world a better place!</p>
      <p>If ewe'd like to work together on any of those things, or need some design or web shit done, let's be <a href="/contact">connecting</a>.</p>
      <p>Otherwise, feel free to poke around here where I share my thoughts and musings, as well as showcase things I've created or worked on.  If you enjoy any of it and would like to show some support for what I do, I'd be grateful if you would consider <a href="https://ko-fi.com/theblacksheep">shouting me a coffee</a> or perhaps <a href="/store">buying something from my store</a>.</p>
    </section>
  {/if}

<hr />
<span class="copyright">&copy; 2023 Cooper Oscarfono</span>
<SocialLinks />
</footer>

<style>

  footer {
    position: relative;
    width: 100vw;
    width: 100dvw;
    min-height: 30em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:  url('mask-footer.svg');
    padding: 2em;
    z-index: 5;

  }

  .copyright {
    position: absolute;
    bottom: 5em;
    color: var(--darker);
  }

  .author-bio {
    background: var(--soften);
    border: 0.2em solid var(--dark);
    border-radius: 0 4em;
    box-shadow: var(--std-box-shadow);
    padding: 2em;
    line-height: 1.6;
    max-width: 90vw;
    margin: 24em auto 13em;
    z-index: 10;

  }

  .author-img {
    max-width: 6em;
    float: left;
    margin: 1rem 1.5rem 1rem 0;
    border: 0.1em solid var(--light);
    border-radius: 100%;
    box-shadow: var(--std-box-shadow), var(--rad-box-shadow);
    shape-outside: circle();
    overflow: hidden;
  }

  @media (--desktop-device) {
    footer {
      margin-top: 20em;
    }

    .author-bio {
      max-width: 60vw;
    }
    .author-img {
      max-width: 10em;
    }

    .copyright {

    }
  }

</style>
