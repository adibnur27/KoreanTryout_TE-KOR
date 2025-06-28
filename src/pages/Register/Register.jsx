import React, { useState } from "react";
import { Button } from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
// import { saveToken } from "../../utils/token"; // jika token dikirim setelah register
import { register } from "../../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi tidak cocok.");
      setLoading(false);
      return;
    }

    try {
      const res = await register(formData);

      // ✅ simpan token kalau dikembalikan
      // saveToken(res.token);

      navigate("/login"); // redirect setelah berhasil
    } catch (err) {
      setError(err.message || "Registrasi gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-500 flex justify-center items-center px-4">
      <div className="flex w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h1 className="text-3xl font-bold mb-10 text-center">
            <span className="text-orange-500">TE</span>
            <span className="text-black">-KOR</span>
          </h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-orange-500 px-4 py-3 rounded-xl focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-orange-500 px-4 py-3 rounded-xl focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-orange-500 px-4 py-3 rounded-xl focus:outline-none"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-orange-500 px-4 py-3 rounded-xl focus:outline-none"
              required
            />

            <div className="text-center pt-2">
              <Button type="submit">{loading ? "Loading..." : "Daftar"}</Button>
            </div>
          </form>

          <p className="text-center mt-6">
            Sudah punya akun? <NavLink to="/login" className="font-bold">Login</NavLink>
          </p>
        </div>

        {/* Gambar */}
        <div className="hidden md:block w-1/2">
          <img
            src="/assets/te-kor-register.jpg"
            alt="Background register"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
