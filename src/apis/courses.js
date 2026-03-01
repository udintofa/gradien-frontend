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

export const createCourse = async () => {
  return;
}

export const updateCourseById = async (courseId) => {
  return;
}

export const deleteCourseById = async (courseId) => {
  return;
}