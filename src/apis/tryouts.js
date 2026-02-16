import { authFetch } from "./client";

export const getTryOutsByCourseId = ({ params }) => {
  return authFetch(`/tryouts/course/${params.id}`);
};

export const getTryOutById = ({ params }) => {
  return authFetch(`/tryouts/${params.id}`);
};