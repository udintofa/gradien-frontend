import { createBrowserRouter } from "react-router-dom";

// ================= Layouts =================
import RootLayout from "../layouts/RootLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";

// ================= Components =================
import ProtectedRoute from "../components/ProtectedRoute.jsx";

// ================= Pages =================

// Homepage & Auth
import Homepage from "../pages/index.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ErrorPages from "../pages/ErrorPages.jsx";

// Dashboard
import Dashboard from "../pages/Dashboard.jsx";

// Courses, Materials, Tryouts
import CourseDetail from "../pages/courses/_id.jsx";
import MaterialsId from "../pages/materials/_id.jsx";
import TryoutId from "../pages/tryouts/_id.jsx";

// Mentor
import Mentor from "../pages/mentor";
import LoginMentor from "../pages/mentor/Login.jsx";
import MentorCourseDetail from "../pages/mentor/MentorCourseDetail.jsx";

// ================= Router =================

export const router = createBrowserRouter([
  // ROOT
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },

  // AUTH
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  // DASHBOARD
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },

  // COURSES
  {
    path: "/course/:id",
    element: (
      <ProtectedRoute>
        <CourseDetail />
      </ProtectedRoute>
    ),
  },

  // MATERIALS
  {
    path: "/material/:id",
    element: (
      <ProtectedRoute>
        <MaterialsId />
      </ProtectedRoute>
    ),
  },

  // TRYOUT
  {
    path: "/tryout/:id",
    element: (
      <ProtectedRoute>
        <TryoutId />
      </ProtectedRoute>
    ),
  },

  // MENTOR
  {
    path: "/mentor",
    element: (
      <ProtectedRoute allowedRoles={["mentor", "admin"]}>
        <Mentor />
      </ProtectedRoute>
    ),
  },

  {
    path: "/mentor/login",
    element: <LoginMentor />,
  },
  {
    path: "/mentor/courses/:id",
    element: (
      <ProtectedRoute allowedRoles={["mentor", "admin"]}>
        <MentorCourseDetail />
      </ProtectedRoute>
    ),
  },
]);
