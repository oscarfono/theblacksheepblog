<script>
  import CartPlus from 'svelte-material-icons/CartPlus.svelte';
  import Close from 'svelte-material-icons/Close.svelte';
  import Check from 'svelte-material-icons/Check.svelte';
  import InformationOutline from 'svelte-material-icons/InformationOutline.svelte';

  export let data;

  const cart = new Map();

  if (!data || !data.products) {
    console.error("Data or products property is missing or undefined.");
  }

  const toggleAddToCart = (product) => {
    if (cart.has(product.id)) {
      cart.delete(product.id);
    } else {
      cart.set(product.id, product);
    }
  };

  // remove this once i'm done with fakestore api
  function truncateTitle(title) {
    return title.length > 10 ? title.slice(0, 10) + '...' : title;
  }

</script>

    {#each data.products as product (product.id)}
      <article>
        <div class="container">
          <div class="top"
               style="background: url({product.image}) no-repeat center center;
                      -webkit-background-size: 100%;
                      -moz-background-size: 100%;
                      -o-background-size: 100%;
                      background-size: 100%;"
               role="img" aria-label={product.title}></div>
          <div class="bottom" class:clicked={cart.has(product.id)}>
            <div class="left">
              <div class="details">
                <h1>{truncateTitle(product.title)}</h1>
                <p>${product.price}</p>
              </div>
              <button class="buy" on:click={() => toggleAddToCart(product)} aria-label="Add to Cart" tabindex="0">
                <CartPlus size='3em'/>
              </button>
            </div>
            <div class="right">
              <div class="done"><Check size='3em'/></div>
              <div class="details">
                <h1>{truncateTitle(product.title)}</h1>
                <p>Added to your cart</p>
              </div>
              <button class="remove" on:click={() => toggleAddToCart(product)} aria-label="Remove from Cart" tabindex="0">
                <Close size='3em'/>
              </button>
            </div>
          </div>
        </div>
        <div class="inside">
          <div class="icon"><InformationOutline size='2em'/></div>
          <div class="contents">{product.description}</div>
        </div>
      </article>
    {/each}

<style lang="scss">
     article {
      height: 30em;
      margin: auto;
      position: relative;
      overflow: hidden;
      border-radius: var(--std-border-radius);
      box-shadow: 0;
      background: var(--light);
      transform: scale(0.95);
      transition: box-shadow 0.5s, transform 0.5s;

      &:hover {
        transform: scale(1);
        box-shadow: var(--std-box-shadow);
      }

      .container {
        width: 100%;
        height: 100%;

        .top {
          height: 80%;
          width: 100%;
        }

        .bottom {
          width: 200%;
          height: 20%;
          transition: transform 0.5s;

          &.clicked {
            transform: translateX(-50%);
          }

          h1, p {
            margin: 0;
            padding: 0;
            font-family: var(--sans);
            color: var(--darkest);
            text-align: left;
            text-shadow: 0;
          }

          h1 {
            font-size: calc(var(--fs-m) + .333em);
            font-weight: bold;
          }

          p {
            font-size: var(--fs-m);
          }

          button {
            border: 0;
            border-radius: 0;
            background-color: transparent;
            box-shadow: 0;
            color: var(--darkest);
            padding: 0;
            margin: 0;
          }

          .left {
            height: 100%;
            width: 50%;
            background: #f4f4f4;
            position:relative;
            float:left;

            .details {
              padding: 1.25em;
              float: left;
              width: calc(70% - 2.5em);
            }

            .buy {
              float: right;
              width: calc(30% - 0.125em);
              height: 100%;
              background: var(--white);
              transition: background 0.5s;
              border-left: solid thin rgba(0,0,0,0.1);

              svg {
                padding: 1.875em;
                color: #254053;
                transition: transform 0.5s;
              }

              &:hover {
                background: var(--highlight);
              }

              &:hover svg {
                transform: translateY(0.3125em);
                color:#00394B;
              }
            }
          }

          .right {
            width: 50%;
            background: var(--highlight);
            color: var(--white);
            float: right;
            height: 200%;
            overflow: hidden;

            .details {
              padding: 1.25em;
              float: right;
              width: calc(70% - 2.5em);
            }

            .done {
              width: calc(30% - 0.125em);
              float: left;
              transition: transform 0.5s;
              border-right: solid thin rgba(255,255,255,0.3);
              height: 50%;

              svg {
                padding: 1.85em;
                color: var(--white);
              }
            }

            .remove {
              width: calc(30% - 0.0625em);
              clear: both;
              border-right: solid thin rgba(255,255,255,0.3);
              height: 50%;
              color: var(--white);
              background: var(--error);
              transition: transform 0.5s, background 0.5s;

              &:hover {
                background: darken(#ff6969, 30%);
              }

              &:hover svg {
                transform: translateY(0.3125em);
              }

              svg {
                transition: transform 0.5s;
                padding: 1.85em;
                color: var(--white);
              }
            }

            &:hover {
              .remove, .done {
                transform: translateY(-100%);
              }
            }
          }
        }
      }

      .inside {
        z-index: 9;
        position: absolute;
        top: -4.375em;
        right: -4.375em;
        width: 8.75em;;
        height: 8.75em;;
        border-radius: 0 0 12.5em 12.5em;
        background: var(--accent);
        color: var(--darkest);
        transition: all 0.5s, border-radius 2s, top 1s;
        overflow: hidden;

        .icon {
          position: absolute;
          right: 5.312em;;
          top: 5.312em;;
          color: var(--darkest);
          opacity: 1;
        }

        &:hover {
          width: 100%;
          right: 0;
          top: 0;
          border-radius: 0;
          height: 80%;

          .icon {
            opacity: 0;
            right: 0.9375em;
            top: 0.9375em;
          }

          .contents {
            opacity: 1;
            transform: scale(1);
            transform: translateY(0);
          }
        }

        .contents {
          padding: 5%;
          opacity: 0;
          transform: scale(0.5);
          transform: translateY(-200%);
          transition: opacity 0.2s, transform 0.8s;
        }
      }
     }

</style>
