<script>
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { writable, get } from "svelte/store";
  import "$lib/styles/main.css";
  import Logo from "$lib/images/logo.svg";
  import NavMenu from "$lib/components/NavMenu.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export let data;
  export let links = [
    { id: 0, name: "home", path: "/" },
    { id: 1, name: "blog", path: "/blog" },
    { id: 2, name: "products", path: "/products" },
    { id: 3, name: "projects", path: "/projects" },
    { id: 4, name: "contact", path: "/contact" },
  ];

  let isPressed = false;
  let isHomePage = writable(false);
  let backgroundImageStyle = "";

  const toggleIsPressed = () => {
    isPressed = !isPressed;
  };

  const backgroundImages = {
    mobile: "/hero-images/Hero640.jpg",
    tablet: "/hero-images/Hero1024.jpg",
    desktop: "/hero-images/Hero1920.jpg",
    hdtv: "/hero-images/Hero5724.jpg",
  };

  const getViewportWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };

  const getBackgroundImageUrl = () => {
    const viewportWidth = getViewportWidth();
    let imageUrl = "";

    if (viewportWidth < 768) {
      // Mobile
      imageUrl = backgroundImages.mobile;
    } else if (viewportWidth < 1024) {
      // Tablet
      imageUrl = backgroundImages.tablet;
    } else if (viewportWidth < 1920) {
      // Desktop
      imageUrl = backgroundImages.desktop;
    } else {
      // HDTV
      imageUrl = backgroundImages.hdtv;
    }

    // Ensure the URL is constructed correctly
    console.log("imgUrl is:  ", imageUrl);
    return imageUrl;
  };

  // Update background image style based on viewport width
  const updateBackgroundImage = () => {
    backgroundImageStyle = get(isHomePage)
      ? `background: no-repeat top/100% url('${getBackgroundImageUrl()}')`
      : "background: 'none'";
    console.log("Background image style:", backgroundImageStyle); // Check if the style is updated
  };

  // Detect if the current route is the homepage
  onMount(() => {
    const currentPath = $page.url.pathname;
    isHomePage.set(currentPath === "/" || currentPath === "");
    updateBackgroundImage();
    console.log("Mounted. Is home page:", get(isHomePage)); // Check if the component is mounted and isHomePage value
  });

// Update background image when the viewport size changes
  if (typeof window !== "undefined") {
    window.addEventListener("resize", updateBackgroundImage);
    console.log("Event listener added for resize"); // Check if the event listener is added

    // Remove event listener on component destroy to prevent memory leaks
    onDestroy(() => {
      window.removeEventListener("resize", updateBackgroundImage);
      console.log("Event listener removed for resize"); // Check if the event listener is removed
    });
  }

</script>

<div class="app" style="{backgroundImageStyle}">
  <header>
    <button aria-pressed="{isPressed}" on:click="{toggleIsPressed}">
      <img class="logo" src="{Logo}" alt="The Black Sheep Logo" />
    </button>
  </header>
  {#key data.currentRoute}
    <main>
      <aside class:active="{isPressed}" transition:fade>
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
    position: relative;
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
    background: linear-gradient(#333333, #444444 16%);
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
    margin-bottom: 30em;
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
