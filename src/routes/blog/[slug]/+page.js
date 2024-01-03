export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, date, categories, image } = post.metadata;
  const content = post.default;

  return {
    categories,
    content,
    image,
    title,
    date
  };
}
