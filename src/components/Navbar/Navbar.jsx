import React, { useEffect, useState, useRef } from "react";
import { Button } from "../Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scroll down
      } else {
        setShowNavbar(true); // Scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemStyle = ({ isActive }) =>
    isActive
      ? "text-kr-red font-semibold"
      : "text-gray-900  hover:text-kr-blue";

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const renderProfileIcon = () => {
    if (user?.photoUrl) {
      return (
        <img
          src={user.photoUrl}
          alt="Profile"
          onClick={handleProfileClick}
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      );
    } else if (user?.username) {
      const initial = user.username.charAt(0).toUpperCase();
      return (
        <div
          onClick={handleProfileClick}
          className="w-10 h-10 rounded-full bg-kr-red text-white flex items-center justify-center font-bold cursor-pointer"
        >
          {initial}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative z-10 font-montserrat rounded">
      <nav
        className={`fixed top-0 right-0 left-0 flex justify-between items-center px-20 py-5 bg-white shadow-lg transition-transform duration-700 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-2xl font-bold text-kr-red">
          <span className="text-kr-blue">TE</span>-KOR
        </div>
        <div className="flex gap-6 items-center font-opensans">
          <NavLink to="/" className={navItemStyle}>
            <p>HOME</p>
          </NavLink>
          <span>|</span>
          <NavLink to="/tryouts" className={navItemStyle}>
            <p>TRYOUT</p>
          </NavLink>
          <span>|</span>
          <NavLink to="/games" className={navItemStyle}>
            <p className="me-10">GAMES</p>
          </NavLink>

          {/* 👇 Bagian login / profile */}
          {user ? (
            renderProfileIcon()
          ) : (
            <NavLink to="/login">
              <Button children={"Login"} width={"100px"} paddingBottom={"5px"} />
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
