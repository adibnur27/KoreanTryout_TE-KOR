import React, { useEffect, useState, useRef } from "react";
import { Button } from "../Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 Tambahan untuk mobile menu
  const lastScrollY = useRef(0);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemStyle = ({ isActive }) =>
    isActive ? "text-kr-red font-semibold" : "text-gray-900 hover:text-kr-blue";

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const renderProfileIcon = () => {
    if (user?.imageUrl) {
      return (
        <img
          src={user.imageUrl}
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
        className={`fixed top-0 right-0 left-0 flex items-center justify-between px-6 md:px-20 py-4 bg-white shadow-lg transition-transform duration-700 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-2xl font-bold text-kr-red">
          <span className="text-kr-blue">TE</span>-KOR
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-kr-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-opensans">
          <NavLink to="/" className={navItemStyle}>HOME</NavLink>
          <span>|</span>
          <NavLink to="/tryouts" className={navItemStyle}>TRYOUT</NavLink>
          <span>|</span>
          <NavLink to="/Mytryouts" className={navItemStyle}>TRYOUT SAYA</NavLink>
          <span>|</span>
          <NavLink to="/games" className={navItemStyle}>GAMES</NavLink>
          <span className="me-6" />
          {user ? renderProfileIcon() : (
            <NavLink to="/login">
              <Button children={"Login"} width={"100px"} paddingBottom={"5px"} />
            </NavLink>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 bg-white  px-6 pt-4 pb-6 mt-16 absolute top-0 left-0 right-0 z-0 font-opensans">
          <NavLink to="/" className={navItemStyle} onClick={() => setIsMenuOpen(false)}>HOME</NavLink>
          <NavLink to="/tryouts" className={navItemStyle} onClick={() => setIsMenuOpen(false)}>TRYOUT</NavLink>
          <NavLink to="/Mytryouts" className={navItemStyle} onClick={() => setIsMenuOpen(false)}>TRYOUT SAYA</NavLink>
          <NavLink to="/games" className={navItemStyle} onClick={() => setIsMenuOpen(false)}>GAMES</NavLink>
          {user ? renderProfileIcon() : (
            <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button children={"Login"} width={"100px"} paddingBottom={"5px"} />
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
