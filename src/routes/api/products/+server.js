// src/routes/api/products/+server.js

import { json } from '@sveltejs/kit';

export const GET = async () => {
  try {
    const allProducts = await fetch('https://fakestoreapi.com/products?limit=8')
          .then(res => res.json());

    return json(allProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return json({ error: 'Failed to fetch products' }, 500);
  }
};
