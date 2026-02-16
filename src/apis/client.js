const API_URL = import.meta.env.VITE_API_PATH;

export const authFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login"; 
  }

  return res;
};
