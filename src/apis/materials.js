import { authFetch } from "./client";

export const getMaterialsByCourseId = async (id) => {
  const res = await authFetch(`/materials/course/${id}`);
  const data = await res.json();
  return data;
};

export const getMaterialsById = async (id) => {
  const res = await authFetch(`/materials/${id}`);
  const data = await res.json();
  return data;
}

export const createMaterials = async () => {
  return;
}

export const updateMaterialsById = async () => {
  return;
}

export const deleteMaterialsById = async () => {
  return;
}