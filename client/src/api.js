const BASE_URL = "http://localhost:5000";

export const getProjects = async () => {
  const response = await fetch(`${BASE_URL}/projects`);
  return response.json();
};

export const addProject = async (project) => {
  const response = await fetch(`${BASE_URL}/projecrs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  return response.json();
};
