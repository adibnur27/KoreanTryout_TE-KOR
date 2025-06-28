import React from "react";
import { Button } from "../Button";
import { Link, NavLink} from "react-router-dom";

const Navbar = () => {

    const navItemStyle = ({ isActive }) =>
        isActive
        ? "text-orange-500 font-semibold"
        : "text-black hover:text-orange-500";

  return (
    <div className="relative mb-16">
      <nav className="fixed top-0 right-0 left-0 flex justify-between items-center px-10 py-2 bg-white shadow-md">
        <div className="text-2xl font-bold text-black">
          <span className="text-orange-500">TE</span>-KOR
        </div>
        <div className="flex gap-6 items-center">
          <NavLink to="/" className={navItemStyle}>
              <p className="text-black font-medium hover:text-orange-500">
                  HOME
              </p>
          </NavLink>
          <NavLink to="/products" className={navItemStyle}>
              <p className="text-black font-medium hover:text-orange-500">
                  PRODUCTS
              </p>
          </NavLink>
          <NavLink to="/login">
              <Button children={"Login"} width={'100px'} height={"40px"}/>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;