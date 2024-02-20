export async function load({ params }) {
  const product = await import(`../${params.slug}.md`);
  const { categories, name, sku, brand, price, image, title } = product.metadata;
  const content = product.default;

  return {
    name,
    sku,
    brand,
    categories,
    content,
    image,
    price,
    title
  };
}
