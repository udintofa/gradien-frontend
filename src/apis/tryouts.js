import { authFetch } from "./client";

export const getTryOutsByCourseId = async (id) => {
  const res = await authFetch(`/tryouts/course/${id}`);
  const data = await res.json();
  return data;
};

export const getTryOutsById =  async (id) => {
  const res = await authFetch(`/tryouts/${id}`);
  const data = await res.json();
  return data;
};