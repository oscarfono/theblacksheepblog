<script>
  import Masonry from 'svelte-bricks'

  let nItems = 30
  $: items = [...Array(nItems).keys()]

  let [minColWidth, maxColWidth, gap] = [200, 800, 20]
  let width, height
</script>

<svelte:head>
  <title>Portfolio</title>
  <meta name="description" content="The Black Sheep's Portfolio" />
</svelte:head>

<div class="text-column">
  <h1 class="title">My little lambs</h1>

Masonry size: <span>{width}px</span> &times; <span>{height}px</span> (w &times;
h)

<Masonry
  {items}
  {minColWidth}
  {maxColWidth}
  {gap}
  let:item
  bind:masonryWidth={width}
  bind:masonryHeight={height}
>
  <Project {item} />
</Masonry>
</div>
