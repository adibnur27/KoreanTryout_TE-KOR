import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Button } from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { PixelTransition } from "../../components/ui/PixelTransition";
import { login } from "../../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const schema = Yup.object().shape({
  username: Yup.string().required("Username wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const loginData = await login(data);
      const apiUser = loginData.user;
      const tokenData = loginData.token;

      const userProfile = {
        ...apiUser,
        username: apiUser.fullName,
      };

      dispatch(setUser(userProfile));
      localStorage.setItem("user", JSON.stringify(userProfile));
      localStorage.setItem("token", tokenData?.accessToken || "");
      localStorage.setItem("refreshToken", tokenData?.refreshToken || "");

      navigate("/tryouts");
      Swal.fire({
        icon: "success",
        title: "Berhasil masuk",
        text: "Selamat datang",
        confirmButtonText: "OK",
      });
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "Username atau Password salah.";

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: errorMessage.includes("not verified") || errorMessage.includes("belum terverifikasi") ? "Email kamu belum diverifikasi. Cek email kamu untuk aktivasi." : errorMessage,
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-blue via-light-red to-light-red">
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-20">한</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-1/2 right-[10%] rotate-[15deg] text-6xl opacity-20">글</span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[5%] left-[60%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">시</span>
      <div className="flex w-4/5 md:w-3/4 lg:w-2/3 bg-white shadow-lg z-10 shadow-kr-blue rounded-lg overflow-hidden ">
        <div className="w-1/2 hidden md:block h-max">
          <PixelTransition
            firstContent={<img src="/BackgroundLoginAndRegister.svg" alt="city of Korea" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
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

        <div className="w-full md:w-1/2 p-8 text-center pt-20">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-kr-blue">TE</span>
            <span className="text-kr-red">-KOR</span>
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input type="text" placeholder="Username" {...register("username")} className="w-full border border-kr-blue rounded-md p-3 focus:outline-none" />
              {errors.username && <p className="text-sm text-red-500 mt-1 text-left">{errors.username.message}</p>}
            </div>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password")} className="w-full border border-kr-blue rounded-md p-3  pr-10 focus:outline-none" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-6 -translate-y-1/2 text-gray-500" tabIndex={-1}>
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
              {errors.password && <p className="text-sm text-red-500 mt-1 text-left">{errors.password.message}</p>}
            </div>
            <Button type="submit" children={"Masuk"} />
          </form>

          <p className="mt-6 text-sm text-black text-center">
            Belum punya akun?{" "}
            <NavLink to={"/register"}>
              <span className="font-bold cursor-pointer hover:underline">Daftar</span>
            </NavLink>
          </p>
          <p className="mt-4 text-sm text-right">
            <NavLink to="/forgot-password" className="text-black hover:underline cursor-pointer">
              Lupa Password?
            </NavLink>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
