// src/pages/admin/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginAdmin } from "../../../services/authService";
import { Button } from "../../../components/Button";
import * as yup from "yup";


const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = yup.object().shape({
    username: yup.string().required("Username wajib diisi"),
    password: yup.string().required("Password wajib diisi"),
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validasi input menggunakan Yup
      await loginSchema.validate(formData, { abortEarly: false });

      const data = await loginAdmin(formData);
      console.log("DATA LOGIN ADMIN:", data);
      localStorage.setItem("adminToken", data.token.accessToken);
      navigate("/admin/dashboard");
    } catch (error) {
      if (error.name === "ValidationError") {
        // Jika validasi gagal, gabungkan semua pesan error
        const message = error.errors.join("\n");
        Swal.fire({
          icon: "error",
          title: "Validasi Gagal",
          text: message,
        });
      } else {
        const message = error.response?.data?.message || error.message || "Username atau password salah.";
        Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: message,
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-light-blue  to-light-red px-4">
      <div className="absolute top-8 text-8xl font-bold text-kr-red z-0 opacity-25">
          <span className="text-kr-blue">TE</span>-KOR
        </div>
      <div className="w-full max-w-md  shadow-md shadow-kr-blue rounded-xl bg-white p-8 z-10">
        <h2 className="text-2xl font-bold text-center  text-gray-800 mb-6 font-sans">Admin Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="relative">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-500" tabIndex={-1}>
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#000000">
                  <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 -960 960 960" fill="#000000">
                  <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                </svg>
              )}
            </button>
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
