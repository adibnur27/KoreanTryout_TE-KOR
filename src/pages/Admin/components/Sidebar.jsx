import React from "react";
import { NavLink } from "react-router-dom";
import { FaUsers, FaBoxOpen, FaClipboardList, FaFileAlt, FaLanguage, FaHome } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", to: "/dashboard", icon: <FaHome /> },
    { label: "Users", to: "/users", icon: <FaUsers /> },
    { label: "Bundles", to: "/bundles", icon: <FaBoxOpen /> },
    { label: "Test Packages", to: "/test-packages", icon: <FaClipboardList /> },
    { label: "Transactions", to: "/transactions", icon: <FaFileAlt /> },
    { label: "Vocabulary", to: "/vocabulary", icon: <FaLanguage /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col shadow-lg">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        TE-KOR Admin
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700 font-semibold" : ""
              }`
            }
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
