import { createBrowserRouter } from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx"


import ProtectedRoute from "../components/ProtectedRoute.jsx";

// Courses, Materials, Tryouts
import CourseDetail from "../pages/courses/_id.jsx";
import MaterialsId from "../pages/materials/_id.jsx";
import TryoutId from "../pages/tryouts/_id.jsx";

// Homepage
import Homepage from "../pages/index.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ErrorPages from "../pages/ErrorPages.jsx";

//Dasboard Page
import Dashboard from "../pages/Dashboard.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: "/",
                element: <Homepage />
            }
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,

    },
    {
        path: "/course/:id",
        element: <ProtectedRoute><CourseDetail /></ProtectedRoute>,
    },
    {
        path: "/material/:id",
        element: <ProtectedRoute> <MaterialsId/> </ProtectedRoute>
    },
    {
        path: "/tryout/:id",
        element: <ProtectedRoute> <TryoutId/> </ProtectedRoute>
    }
]);