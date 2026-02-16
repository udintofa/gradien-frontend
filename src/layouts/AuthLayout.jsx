import { Link, Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Navbar */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-indigo-600"
          >
            GradienNol
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className={`px-4 py-2 rounded-lg font-medium transition ${
                isActive("/login")
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Login
            </Link>

            <Link
              to="/register"
              className={`px-4 py-2 rounded-lg font-medium transition ${
                isActive("/register")
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Register
            </Link>

          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
}
