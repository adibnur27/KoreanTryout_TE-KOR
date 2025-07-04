import React from "react";
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
  email: Yup.string().required("Email wajib diisi")
  .email("Format email tidak valid. Contoh: usertekor@example.com")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Format email tidak valid. Contoh: usertekor@example.com"
  ),
  password: Yup.string().min(8, "Password minimal 8 karakter")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    "Password harus mengandung huruf dan angka"
  )
  .required("Password wajib diisi"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
});

const Register = () => {
  const navigate = useNavigate();

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
    title: 'Registrasi Berhasil!',
    text: 'Silakan cek email kamu untuk verifikasi sebelum login.',
    icon: 'success',
    confirmButtonText: 'OK',
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
              <input
                type="text"
                {...register("fullName")}
                placeholder="FullName"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div>
              <input
                type="text"
                {...register("username")}
                placeholder="Username"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>

            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div>
              <input
                type="password"
                {...register("confirmPassword")}
                placeholder="Confirm Password"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>

            <div className="text-center pt-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <div className="py-1"><LoadingCircle size={24} color="#000" /></div> : "Daftar"}
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
            firstContent={
              <img src={imgLogin} alt="city of Korea" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            }
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
