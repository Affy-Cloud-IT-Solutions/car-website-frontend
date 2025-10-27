// src/pages/public/Login.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <div className="flex items-center justify-center py-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Login (Demo)
        </button>
        <p className="text-sm text-gray-500 text-center mt-4">
          Click to access dashboard
        </p>
      </div>
    </div>
  );
};

export default Login;
