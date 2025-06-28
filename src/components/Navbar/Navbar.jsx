import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/token"; // 🔑 fungsi logout dari utilitas

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  const navItemStyle = ({ isActive }) => (isActive ? "text-orange-500 font-semibold" : "text-black hover:text-orange-500");

  return (
    <div className="relative z-10 font-poppins">
      <nav className="fixed top-3 right-14 left-14 flex justify-between items-center px-10 py-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl">
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
            <Button onClick={handleLogout} children={"Logout"} width={"100px"} height={"40px"} />
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
