<script>

  import { fade } from 'svelte/transition';

  import '$lib/styles/main.css';
  import Logo from '$lib/images/logo.svg';
  import NavMenu from '$lib/components/NavMenu.svelte';
  import Footer from '$lib/components/Footer.svelte';

  export let data;
  export let links = [
    { id: 0, name: "home", path: "/"},
    { id: 1, name: "blog", path: "/blog"},
    { id: 2, name: "products", path: "/products"},
    { id: 3, name: "projects", path: "/projects"},
    { id: 4, name: "contact", path: "/contact"}
  ]

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
      <NavMenu {links} {toggleIsPressed} />
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
    overflow: hidden;
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


  main {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 100vw;
    margin-top: 5em;
    box-sizing: border-box;
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
  }

  @media (--desktop-device) {

    header {
      height: 4em;
    }
    main {
      margin-top: 4em;
    }
  }

</style>
