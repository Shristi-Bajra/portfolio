const BASE_URL = "http://localhost:5000";

export const getProjects = async () => {
  const response = await fetch(`${BASE_URL}/projects`);
  return response.json();
};

export const addProject = async (project) => {
  const response = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  return response.json();
};

export const getHero = async () => {
  try {
    const res = await fetch(`${BASE_URL}/hero`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('getHero error:', error);
    throw error;
  }
};

export const createHero = async (heroData) => {
  try {
    console.log('API createHero called with:', heroData);
    const res = await fetch(`${BASE_URL}/hero`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(heroData),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP error! status: ${res.status}, body: ${errorText}`);
    }

    const data = await res.json();
    console.log('API createHero response:', data);
    return data;
  } catch (error) {
    console.error('createHero error:', error);
    throw error;
  }
};

export const updateHero = async(id, heroData) => {
  try {
    console.log('API updateHero called with id:', id, 'data:', heroData);
    const res = await fetch(`${BASE_URL}/hero/${id}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(heroData)
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP error! status: ${res.status}, body: ${errorText}`);
    }

    const data = await res.json();
    console.log('API updateHero response:', data);
    return data;
  } catch (error) {
    console.error('updateHero error:', error);
    throw error;
  }
}