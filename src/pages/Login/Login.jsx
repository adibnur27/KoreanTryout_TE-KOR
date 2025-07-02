import React, { useState } from "react";
import { Button } from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { PixelTransition } from "../../components/ui/PixelTransition";
import imgLogin from "../../assets/LoginRegisterBg.jpeg";
import { login } from "../../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setError("");

    try {
      const loginData = await login(formData); // menyimpan token & mendapatkan data user
      const apiUser = loginData.user;

      // Transformasi data API agar sesuai dengan struktur frontend
      const userProfile = {
        ...apiUser,
        username: apiUser.fullName, // Menggunakan fullName sebagai username
      };

      // Simpan data user ke Redux
      dispatch(setUser(userProfile));

      // Simpan data user ke localStorage untuk persistensi
      localStorage.setItem("user", JSON.stringify(userProfile));

      navigate("/tryouts");
    } catch (err) {
      if (err.message?.includes("not verified") || err.message?.includes("belum terverifikasi")) {
        setError("Email kamu belum diverifikasi. Cek email kamu untuk aktivasi.");
      } else {
        setError(err.message || "Username atau Password salah.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex w-4/5 md:w-3/4 lg:w-2/3 bg-white shadow-lg shadow-orange-500 rounded-lg overflow-hidden ">
        <div className="w-1/2 hidden md:block">
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
                  gap: "0",
                  backgroundColor: "#fff",
                }}
              >
                <p style={{ fontWeight: 900, fontSize: "3rem" }}>
                  <span className="text-orange-500">TE</span>
                  <span className="text-black">-KOR</span>
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

        <div className="w-full md:w-1/2 p-8 text-center pt-20">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-orange-500">TE</span>
            <span className="text-black">-KOR</span>
          </h1>
          {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="w-full border border-orange-400 rounded-md p-3 focus:outline-none" />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full border border-orange-400 rounded-md p-3 focus:outline-none" />
            <Button children={"Login"} />
          </form>

          <p className="mt-6 text-sm text-black text-center">
            Belum punya akun?{" "}
            <NavLink to={"/register"}>
              <span className="font-bold cursor-pointer hover:underline">Daftar</span>
            </NavLink>
          </p>
          <p className="mt-4 text-sm text-right">
            <NavLink to="/forgot-password" className="text-orange-500 hover:underline cursor-pointer">
              Lupa Password?
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
