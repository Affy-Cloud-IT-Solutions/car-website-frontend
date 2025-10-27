// src/layouts/DashboardLayout.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className="block py-2 px-4 rounded hover:bg-purple-600 transition"
          >
            Overview
          </Link>
          <Link
            to="/profile"
            className="block py-2 px-4 rounded hover:bg-purple-600 transition"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left py-2 px-4 rounded hover:bg-purple-600 transition mt-8"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
