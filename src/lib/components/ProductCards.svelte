<script>
  import { createEventDispatcher } from 'svelte';
  import CartPlus from 'svelte-material-icons/CartPlus.svelte';
  import Close from 'svelte-material-icons/Close.svelte';
  import Check from 'svelte-material-icons/Check.svelte';
  import InformationOutline from 'svelte-material-icons/InformationOutline.svelte';

  export let data;

  if (!data || !data.products) {
    console.error("Data or products property is missing or undefined.");
  }

  const dispatch = createEventDispatcher();

  data.products.forEach(product => {
    product.clicked = false;
  });

  function handleBuyClick(product) {
    dispatch('buy');
    product.clicked = true;
    console.log(product.clicked);
  }

  function handleRemoveClick(product) {
    dispatch('remove');
    product.clicked = false;
  }

  // remove this once i'm done with fakestore api
  function truncateTitle(title) {
    return title.length > 10 ? title.slice(0, 10) + '...' : title;
  }
</script>

<section class="catalogue">
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
        <div class="bottom" class:clicked={product.clicked}>
          <div class="left">
            <div class="details">
              <h1>{truncateTitle(product.title)}</h1>
              <p>${product.price}</p>
            </div>
            <button class="buy" on:click={() => handleBuyClick(product)} aria-label="Add to Cart" tabindex="0"><CartPlus size='3em'/></button>
          </div>
          <div class="right">
            <div class="done"><Check /></div>
            <div class="details">
              <h1>{truncateTitle(product.title)}</h1>
              <p>Added to your cart</p>
            </div>
            <button class="remove" on:click={() => handleRemoveClick(product)} aria-label="Remove from Cart" tabindex="0"><Close /></button>
          </div>
        </div>
      </div>
      <div class="inside">
        <div class="icon"><InformationOutline /></div>
        <div class="contents">{product.description}</div>
      </div>
    </article>
  {/each}
</section>

<style lang="scss">
  .catalogue {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(333px, 1fr));
    gap: 1em;

    article {
      height: 555px;
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
        width:100%;
        height:100%;

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
              padding: 20px;
              float: left;
              width: calc(70% - 40px);
            }

            .buy {
              float:right;
              width: calc(30% - 2px);
              height:100%;
              background: #f1f1f1;
              transition: background 0.5s;
              border-left:solid thin rgba(0,0,0,0.1);

              svg {
                padding:30px;
                color: #254053;
                transition: transform 0.5s;
              }

              &:hover {
                background: var(--highlight);
              }

              &:hover svg {
                transform: translateY(5px);
                color:#00394B;
              }
            }
          }

          .right {
            width: 50%;
            background: var(--highlight);
            color: white;
            float:right;
            height:200%;
            overflow: hidden;

            .details {
              padding: 20px;
              float: right;
              width: calc(70% - 40px);
            }

            .done {
              width: calc(30% - 2px);
              float:left;
              transition: transform 0.5s;
              border-right:solid thin rgba(255,255,255,0.3);
              height:50%;

              svg {
                font-size:30px;
                padding:30px;
                color: white;
              }
            }

            .remove {
              width: calc(30% - 1px);
              clear: both;
              border-right:solid thin rgba(255,255,255,0.3);
              height:50%;
              background: #BC3B59;
              transition: transform 0.5s, background 0.5s;

              &:hover {
                background: #9B2847;
              }

              &:hover svg {
                transform: translateY(5px);
              }

              svg {
                transition: transform 0.5s;
                font-size:30px;
                padding:30px;
                color: white;
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
        z-index:9;
        background: var(--soften);
        width:140px;
        height:140px;
        position: absolute;
        top: -70px;
        right: -70px;
        border-radius: 0px 0px 200px 200px;
        transition: all 0.5s, border-radius 2s, top 1s;
        overflow: hidden;

        .icon {
          position:absolute;
          right:85px;
          top:85px;
          color:white;
          opacity: 1;
        }

        &:hover {
          width:100%;
          right:0;
          top:0;
          border-radius: 0;
          height:80%;

          .icon {
            opacity: 0;
            right:15px;
            top:15px;
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
  }

  @media (max-width: 768px) {
    /* .catalogue { */
    /*   grid-template-columns: 1fr; */
    /* } */
  }
</style>
