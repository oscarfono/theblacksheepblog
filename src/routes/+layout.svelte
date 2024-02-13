<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

  import Logo from '$lib/images/logo.svg';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/main.css';

  export let data;

  let isPressed = false;

  const toggleIsPressed = () => {
    isPressed = !isPressed;
  };

</script>

<div class="app">
  <header>
    <button aria-pressed={isPressed} on:click={toggleIsPressed}>
      <img class="logo" src={Logo} alt="The Black Sheep Logo" />
    </button>
  </header>
  {#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <aside class:active={isPressed}>
      <nav class="menu">
        <ul>
          <li class="" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a href="/" on:click={toggleIsPressed}>Home</a>
          </li>
          <li class="" aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
            <a href="/blog" on:click={toggleIsPressed}>Blog</a>
          </li>
          <li class="" aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
            <a href="/projects" on:click={toggleIsPressed}>Projects</a>
          </li>
          <li class="" aria-current={$page.url.pathname === '/shop' ? 'page' : undefined}>
            <a href="/shop" on:click={toggleIsPressed}>Shop</a>
          </li>
          <li class="" aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
            <a href="/contact" on:click={toggleIsPressed}>Contact</a>
          </li>
        </ul>
      </nav>
    </aside>
    <slot />
  </main>
  {/key}
  <Footer />
</div>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

  }

  header {
    position: fixed;
    height: 3em;
    width: 100vw;
    padding: 1em 0;
    border-bottom: 1px solid var(--dark);

    background-color: var(--darker);
    z-index: 10;

    button {
      position: absolute;
      width: 5em;
      height: 5em;
      left: 0;
      right: 0;
      margin: 0 auto;
      background: var(--darker);
      background-color: var(--darker);
      border: none;
      border-radius: 100%;
      box-shadow: none;
      padding: 1px;
      z-index: 10;

      &:hover {
        border: none;
      }

      .logo {
        z-index: 100;

      }
    }
  }

  aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--soften);
    z-index: 9;
    display: none;

    &.active {
      display: block;
    }

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
  }

  main {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0;
    padding: 3em 0;
    box-sizing: border-box;
  }

  @media (--desktop-device) {

    header {
      height: 4em;

    }
  }

</style>
