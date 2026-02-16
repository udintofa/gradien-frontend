import { createBrowserRouter } from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx"


import ProtectedRoute from "../components/ProtectedRoute.jsx";


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

    }
]);