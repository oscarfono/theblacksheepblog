export const load = async ({ fetch, params }) => {
  const { category } = params;
  const response = await fetch(`/api/projects`);
  const allProjects = await response.json();

  const projects = allProjects.filter((project) => project.meta.categories.includes(category));

  return {
    category,
    projects
  };
};
