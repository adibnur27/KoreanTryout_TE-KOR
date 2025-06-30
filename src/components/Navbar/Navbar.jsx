import React, { useEffect, useState, useRef } from "react";
import { Button } from "../Button";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/token"; // 🔑 fungsi logout dari utilitas

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const lastScrollY = useRef(0); // Gunakan useRef agar tidak memicu re-render

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scroll ke bawah
      } else {
        setShowNavbar(true); // Scroll ke atas
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mengecek token saat pertama kali komponen dimount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // jika token ada, berarti login
  }, []);

  const handleLogout = () => {
    removeToken(); // 🔥 hapus semua token & user dari localStorage
    setIsLoggedIn(false); // update state
    navigate("/"); // redirect ke halaman home
  };

  const navItemStyle = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-black hover:text-orange-500";

  return (
    <div className="relative z-10 font-poppins">
      <nav
        className={`fixed top-3 right-14 left-14 flex justify-between items-center px-10 py-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl transition-transform duration-700 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-2xl font-bold text-black">
          <span className="text-orange-500">TE</span>-KOR
        </div>
        <div className="flex gap-16 items-center">
          <NavLink to="/" className={navItemStyle}>
            <p className="text-black font-medium hover:text-orange-500">HOME</p>
          </NavLink>
          <NavLink to="/products" className={navItemStyle}>
            <p className="text-black font-medium hover:text-orange-500">PRODUCTS</p>
          </NavLink>

          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              children={"Logout"}
              width={"100px"}
              height={"40px"}
            />
          ) : (
            <NavLink to="/login">
              <Button children={"Login"} width={"100px"} height={"40px"} />
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
