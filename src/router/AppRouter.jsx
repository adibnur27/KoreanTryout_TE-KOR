import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { getUser, getToken, saveUser } from "../utils/storage";
import { getProfile } from "../services/userService"; // pastikan path-nya benar

// Pages
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";
import { NotFound } from "../pages/NotFound";
import Game from "../pages/Games/Games";
import Tryouts from "../pages/Tryouts/Tryouts";
import ProfilePage from "../pages/Profile/Profile";
import { FlipCard } from "../pages/Games/FlipCard";
import { MyTryouts } from "../pages/MyTryouts";
import { TryoutDetail } from "../pages/Tryouts/TryoutDetail";
import { AdminLogin } from "../pages/Admin/AdminLogin";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import CBTPage from "../pages/CBTPage/CBTPage";
import { MyTryoutDetail } from "../pages/MyTryouts/MyTryoutDetail";
import { CBTTrial } from "../pages/CBTTrial";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();
    const user = getUser();

    if (token && user) {
      dispatch(setUser(user)); // 1. Set dari localStorage

      // 2. Fetch ulang dari backend agar dapat data terbaru seperti imageUrl
      getProfile()
        .then((freshProfile) => {
          dispatch(setUser(freshProfile)); // update redux
          saveUser(freshProfile);          // update localStorage
        })
        .catch((err) => {
          console.error("Gagal fetch profile saat App load:", err);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* User */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tryouts" element={<Tryouts />} />
        <Route path="/tryoutsDetail/:id" element={<TryoutDetail />} />
        <Route path="/myTryoutDetail/:id" element={<MyTryoutDetail />} />
        <Route path="/myTryouts" element={<MyTryouts />} />
        <Route path="/cbtPage" element={<CBTPage />} />
        <Route path="/cbt-trial" element={<CBTTrial />} />
        <Route path="/games" element={<Game />} />
        <Route path="/flipcard" element={<FlipCard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/cbt/:testAttemptId" element={<CBTPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
