// src/routes/api/posts/+server.js

import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  try {
    const allPosts = await fetchMarkdownPosts();

    // console.log('All posts:', allPosts);

    // Filter out posts without a defined date property
    const validPosts = allPosts.filter(post => post.meta && post.meta.date);

    // console.log('Valid posts:', validPosts);

    // Sort the valid posts by date in descending order
    const sortedPosts = validPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date);
    });

    // console.log('Sorted posts:', sortedPosts);

    return json(sortedPosts);
  } catch (error) {
    //    console.error('Error fetching and sorting posts:', error);
    return json({ error: 'Failed to fetch and sort posts' }, 500);
  }
};
