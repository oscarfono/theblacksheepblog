<script>
  import { onMount, onDestroy } from 'svelte';

  import profile from '$lib/images/profile.jpg';
  import Copyright from '$lib/components/Copyright.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  import PolicyLinks from './PolicyLinks.svelte';


  // Initialize isHome as false by default
  let isHome = false;

  // Function to check if the current route is the home page
  const checkIsHome = () => {

    // Compare the current location path with the home page path
    isHome = window.location.pathname === '/';
  };

  // Listen for navigation changes
  const unlisten = () => {
    window.removeEventListener('popstate', checkIsHome);
  };

  // On component mount, check if it's the home page
  onMount(() => {
    checkIsHome(); // Initial check on mount
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
      <p>The rebel ram amidst a flock of conformity, daring to graze where others fear to tread.</p>
      <p>I work on and with Free and Open Source Software projects; a subject I'm deeply passionate about.  The same goes for Music, Muay Thai, Jiu Jitsu, and making the world a better place!</p>
      <p>If ewe'd like to work together on any of those things, or need some design or web stuff done, let's be <a href="/contact">connecting</a>.  Otherwise, feel free to poke around here where I share my thoughts and musings, as well as showcase things I've created or worked on.  If ewe enjoy any of it, and would like to show some support, consider <a href="https://ko-fi.com/theblacksheep">shouting me a coffee</a> or perhaps checkout some of the <a href="/store">items in my store</a>.</p>
    </section>
  {/if}

<Copyright />

<SocialLinks />

<PolicyLinks />
</footer>

<style lang="scss">

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 30em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:  no-repeat url('/mask-footer.svg');
    background-size: 100% auto;
    padding: 0;
    z-index: 5;
  }

  .author-bio {
    background: var(--soften);
    border: 0.2em solid var(--dark);
    border-radius: 0 4em;
    box-shadow: inset 0 0 0 .666em  rgba(221, 221, 221, 0.06);
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
      margin-top: 28em;
    }

    .author-bio {
      max-width: 60vw;
    }
    .author-img {
      max-width: 10em;
    }
  }
</style>
