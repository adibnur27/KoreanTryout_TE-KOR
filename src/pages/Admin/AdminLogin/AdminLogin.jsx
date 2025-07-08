// src/pages/admin/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginAdmin } from "../../../services/authService";
import { Button } from "../../../components/Button";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginAdmin(formData);
      console.log("DATA LOGIN ADMIN:", data);
      localStorage.setItem("adminToken", data.accesToken);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log("Login error:", error);
      const message =
        error.response?.data?.message ||
        error.message ||
        "Username atau password salah.";
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: message,
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <Button type="submit" width="100%" height="45px">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

