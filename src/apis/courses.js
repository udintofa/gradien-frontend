import { authFetch } from "./client";

export const getCourses = () => {
  return authFetch("/courses");
};
