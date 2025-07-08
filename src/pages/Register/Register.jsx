import React, { useState } from "react";
import { Button } from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { register as registerUser } from "../../services/authService";
import { PixelTransition } from "../../components/ui/PixelTransition";
import imgLogin from "../../assets/BackgroundLoginAndRegister.svg";
import { LoadingCircle } from "../../components/ui/LoadingCircle";
import Swal from "sweetalert2";

// ✅ Validasi Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Nama lengkap minimal 2 karakter").required("Nama lengkap wajib diisi"),
  username: Yup.string().min(4, "Username minimal 4 karakter").required("Username wajib diisi"),
  email: Yup.string()
    .required("Email wajib diisi")
    .email("Format email tidak valid. Contoh: usertekor@example.com")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Format email tidak valid. Contoh: usertekor@example.com"),
  password: Yup.string()
    .min(8, "Password minimal 8 karakter")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password harus mengandung huruf dan angka")
    .required("Password wajib diisi"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
});

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { fullName, username, email, password } = data;
      await registerUser({ fullName, username, email, password });

      Swal.fire({
        title: "Registrasi Berhasil!",
        text: "Silakan cek email kamu untuk verifikasi sebelum login.",
        icon: "success",
        confirmButtonText: "OK",
      });

      reset();
      navigate("/login");
    } catch (err) {
      let errorMsg = "Registrasi gagal";
      console.error("Register error:", err);

      if (err.response) {
        const { message, data } = err.response.data;

        // Jika ada error validasi field dari backend
        if (data && typeof data === "object") {
          const validationMessages = Object.values(data)
            .flat() // untuk menangani array of messages
            .join(", ");
          errorMsg = validationMessages || message || errorMsg;
        }
        // Jika hanya ada pesan umum
        else if (message) {
          errorMsg = message;
        }
      } else if (err.message) {
        // Jika error dari sisi client (misal: jaringan)
        errorMsg = err.message;
      }

      Swal.fire({
        title: "Gagal Registrasi!",
        text: errorMsg,
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-light-blue via-light-red to-light-red">
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[5%] -rotate-[15deg] text-6xl opacity-20">한</span>
      <span className="korean-pattern pointer-events-none absolute z-10 top-1/2 right-[5%] rotate-[15deg] text-6xl opacity-20">글</span>
      <span className="korean-pattern pointer-events-none absolute z-10 bottom-[5%] left-[60%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">시</span>

      <div className="flex w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg shadow-kr-blue">
        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h1 className="text-3xl font-bold mb-10 text-center">
            <span className="text-kr-blue">TE</span>
            <span className="text-kr-red">-KOR</span>
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div>
              <input type="text" {...register("fullName")} placeholder="FullName" className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none" />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div>
              <input type="text" {...register("username")} placeholder="Username" className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none" />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>

            <div>
              <input type="email" {...register("email")} placeholder="Email" className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password")} className="w-full border border-kr-blue rounded-md p-3 pr-10 focus:outline-none" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" tabIndex={-1}>
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

            <div className="relative">
              <input type={showConfirmPassword ? "text" : "password"} placeholder="Konfirmasi Password" {...register("confirmPassword")} className="w-full border border-kr-blue rounded-md p-3 pr-10 focus:outline-none" />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" tabIndex={-1}>
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
              {errors.confirmPassword && <p className="text-sm text-red-500 mt-1 text-left">{errors.confirmPassword.message}</p>}
            </div>

            <div className="text-center pt-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="py-1">
                    <LoadingCircle size={24} color="#000" />
                  </div>
                ) : (
                  "Daftar"
                )}
              </Button>
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
      </div>
    </div>
  );
};

export default Register;
