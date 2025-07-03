import React, { useState } from "react";
import { Button } from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
// import { saveToken } from "../../utils/token"; // jika token dikirim setelah register
import { register } from "../../services/authService";
import { PixelTransition } from "../../components/ui/PixelTransition";
import imgLogin from "../../assets/BackgroundLoginAndRegister.svg";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    setError("");
    setLoading(true);
    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi tidak cocok.");
      setLoading(false);
      return;
    }

    try {
      const { fullName, username, email, password } = formData;
      const Register = await register({ fullName, username, email, password });

      alert("Registrasi berhasil! Silakan cek email kamu untuk verifikasi sebelum login.");
      navigate("/login"); // redirect setelah berhasil
    } catch (err) {
      setError(err.message || "Registrasi gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex justify-center items-center px-4 bg-gradient-to-br from-light-blue via-light-red to-light-red">
      
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[5%] -rotate-[15deg] text-6xl opacity-20">
        한
      </span>
      <span className="korean-pattern pointer-events-none absolute z-10 top-1/2 right-[5%] rotate-[15deg] text-6xl opacity-20">
        글
      </span>
      <span className="korean-pattern pointer-events-none absolute z-10 bottom-[5%] left-[60%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">
        시
      </span>
      
      <div className="flex w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg shadow-kr-blue">
        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h1 className="text-3xl font-bold mb-10 text-center">
            <span className="text-kr-blue">TE</span>
            <span className="text-kr-red">-KOR</span>
          </h1>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              name="fullName"
              placeholder="FullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              // required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              // required
            />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none" required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none" required />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              // required
            />

            <div className="text-center pt-2">
              <Button type="submit">{loading ? "Loading..." : "Daftar"}</Button>
            </div>
          </form>

          <p className="text-center mt-6">
            Sudah punya akun?{" "}
            <NavLink to="/login" className="font-bold">
              Login
            </NavLink>
          </p>
        </div>

        {/* Gambar */}
        <div className="hidden md:block w-1/2">
          <PixelTransition
            firstContent={<img src={imgLogin} alt="city of Korea" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0", // ubah jarak antar teks di sini
                  backgroundColor: "#fff",
                }}
              >
                <p style={{ fontWeight: 900, fontSize: "3rem" }}>
                  <span className="text-kr-blue">TE</span>
                  <span className="text-kr-red">-KOR</span>
                </p>
                <p className="text-black" style={{ fontWeight: 500, fontSize: "2rem" }}>
                  Mulai sekarang juga
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
