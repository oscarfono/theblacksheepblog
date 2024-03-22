export const load = async ({ fetch, params }) => {
  const { category } = params;
  const response = await fetch(`/api/products`);
  const allProducts = await response.json();

  const products = allProducts.filter((product) => product.meta.categories.includes(category));

  return {
    category,
    products
  };
};
