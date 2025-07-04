import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Button } from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { PixelTransition } from "../../components/ui/PixelTransition";
import imgLogin from "../../assets/BackgroundLoginAndRegister.svg";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const loginData = await login(data);
      const apiUser = loginData.user;

      const userProfile = {
        ...apiUser,
        username: apiUser.fullName,
      };

      dispatch(setUser(userProfile));
      localStorage.setItem("user", JSON.stringify(userProfile));

      navigate("/tryouts");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text:
          err.message?.includes("not verified") ||
          err.message?.includes("belum terverifikasi")
            ? "Email kamu belum diverifikasi. Cek email kamu untuk aktivasi."
            : err.message || "Username atau Password salah.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-blue via-light-red to-light-red">
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-20">
        한
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-1/2 right-[10%] rotate-[15deg] text-6xl opacity-20">
        글
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[5%] left-[60%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">
        시
      </span>
      <div className="flex w-4/5 md:w-3/4 lg:w-2/3 bg-white shadow-lg z-10 shadow-kr-blue rounded-lg overflow-hidden ">
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
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
                className="w-full border border-kr-blue rounded-md p-3 focus:outline-none"
              />
              {errors.username && <p className="text-sm text-red-500 mt-1 text-left">{errors.username.message}</p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full border border-kr-blue rounded-md p-3 focus:outline-none"
              />
              {errors.password && <p className="text-sm text-red-500 mt-1 text-left">{errors.password.message}</p>}
            </div>
            <Button type="submit" children={"Login"} />
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
