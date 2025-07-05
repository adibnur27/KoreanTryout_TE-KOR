import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tryouts" element={<Tryouts />} />
        <Route path="/games" element={<Game />} />
        <Route path="/flipcard" element={<FlipCard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
        {/* Tambah route lain di sini sesuai kebutuhan */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
