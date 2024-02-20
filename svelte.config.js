import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer]
      }
    }),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    })
  ],

  kit: {
    adapter: adapter(),

  }
};

export default config;
