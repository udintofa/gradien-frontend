import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";

import ProtectedRoute from "../components/ProtectedRoute.jsx";

import Homepage from "../pages/index.jsx";
import About from "../pages/About.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ErrorPages from "../pages/ErrorPages.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/about",
                element: <About />
            },
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
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
    }
]);