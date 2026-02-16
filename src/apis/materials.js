import { authFetch } from "./client";

export const getMaterialsByCourseId = ({ params }) => {
  return authFetch(`/materials/course/${params.id}`);
};
