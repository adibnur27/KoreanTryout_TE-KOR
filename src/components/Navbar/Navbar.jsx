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
      ? "text-kr-red font-semibold"
      : "text-gray-900  hover:text-kr-red";

  return (
    <div className="relative z-10 font-montserrat rounded">
      <nav
        className={`fixed top-0 right-14 left-14 flex justify-between items-center px-10 py-5 bg-white shadow-lg transition-transform duration-700 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-2xl font-bold text-kr-red">
          <span className="text-kr-blue">TE</span>-KOR
        </div>
        <div className="flex gap-6 items-center font-opensans font-semibold">
          <NavLink to="/" className={navItemStyle}>
            <p className="">HOME</p>
          </NavLink>
            <span>|</span>
          <NavLink to="/tryouts" className={navItemStyle}>
            <p className="">TRYOUT</p>
          </NavLink>
          <span>|</span>
          <NavLink to="/games" className={navItemStyle}>
            <p className="">GAMES</p>
          </NavLink>

          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              children={"Logout"}
              paddingBottom={"5px"}
            />
          ) : (
            <NavLink to="/login">
              <Button children={"Login"} width={"100px"} paddingBottom={"5px"}/>
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
