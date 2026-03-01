const API_BASE_URL = import.meta.env.VITE_API_PATH;

// LOGIN
export const login = async (username, password) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login gagal");
  }

  // ambil token
  const { token, role } = data;

  // simpan token
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
};

// REGISTER
export const register = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Register gagal");
  }
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem("token");
};

// GET PROFILE
export const getMe = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Gagal mengambil profile");
  }

  return data;
}
