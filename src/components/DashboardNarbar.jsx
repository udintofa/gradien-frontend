import { Link, useNavigate } from "react-router-dom";
import { logout } from "../apis/auth";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-xl font-bold text-indigo-600"
        >
          Gradien Nol
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-indigo-600 font-medium transition"
          >
            Home
          </Link>

          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
