export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, author, date, categories, image } = post.metadata;
  const content = post.default;

  return {
    title,
    author,
    date,
    categories,
    image,
    content,
  };
}
