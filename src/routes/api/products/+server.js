// src/routes/api/products/+server.js
import { fetchMarkdownProducts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allProducts = await fetchMarkdownProducts();

  const sortedProducts = allProducts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  return json(sortedProducts);
};
