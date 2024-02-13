export async function load({ params }) {
  const project = await import(`../${params.slug}.md`);
  const { categories, client_name, client_url, date, image, title } = project.metadata;
  const content = project.default;

  return {
    client_name,
    client_url,
    categories,
    content,
    image,
    title,
    date
  };
}
