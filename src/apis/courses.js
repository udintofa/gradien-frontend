import { authFetch } from "./client";

export const getCourses = async () => {
  const res = await authFetch("/courses");
  const data = await res.json();
  return data;
};

export const getCourseById = async (courseId) => {
  const res = await authFetch(`/courses/${courseId}`);
  const data = await res.json();
  return data;
}