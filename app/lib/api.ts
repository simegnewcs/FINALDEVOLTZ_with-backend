const BASE = "http://localhost:5000";

// Auth API functions
export async function signup(payload: {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}) {
  const res = await fetch(`${BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error! status: ${res.status}`);
  }

  return res.json();
}

export async function login(payload: { email: string; password: string }) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error! status: ${res.status}`);
  }

  return res.json();
}

export async function getCurrentUser(token: string) {
  const res = await fetch(`${BASE}/api/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
}

// Projects API functions
export async function getProjects(filters?: {
  search?: string;
  skills?: string;
  min_budget?: string;
  max_budget?: string;
}) {
  const params = new URLSearchParams();
  if (filters?.search) params.append("search", filters.search);
  if (filters?.skills) params.append("skills", filters.skills);
  if (filters?.min_budget) params.append("min_budget", filters.min_budget);
  if (filters?.max_budget) params.append("max_budget", filters.max_budget);

  const url = `${BASE}/api/projects?${params.toString()}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
}

export async function createProject(
  projectData: {
    title: string;
    description: string;
    budget: string;
    deadline: string;
    skills: string;
    duration?: string;
    location?: string;
  },
  token: string
) {
  const res = await fetch(`${BASE}/api/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(projectData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error! status: ${res.status}`);
  }

  return res.json();
}

export async function applyToProject(
  projectId: number,
  applicationData: { proposal: string; price: string },
  token: string
) {
  const res = await fetch(`${BASE}/api/projects/${projectId}/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(applicationData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error! status: ${res.status}`);
  }

  return res.json();
}

// Users API functions
export async function getFreelancers(filters?: {
  search?: string;
  skills?: string;
  min_rating?: string;
}) {
  const params = new URLSearchParams();
  if (filters?.search) params.append("search", filters.search);
  if (filters?.skills) params.append("skills", filters.skills);
  if (filters?.min_rating) params.append("min_rating", filters.min_rating);

  const url = `${BASE}/api/users/freelancers?${params.toString()}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
}

export async function getFreelancerById(id: number) {
  const res = await fetch(`${BASE}/api/users/freelancers/${id}`);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
}

// Health check
export async function checkHealth() {
  try {
    const res = await fetch(`${BASE}/api/health`);
    return res.ok;
  } catch (error) {
    return false;
  }
}

// Initialize database
export async function initDatabase() {
  try {
    const res = await fetch(`${BASE}/api/init-db`);
    return res.ok;
  } catch (error) {
    return false;
  }
}