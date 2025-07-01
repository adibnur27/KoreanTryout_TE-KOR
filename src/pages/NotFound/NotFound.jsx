import React from "react";
import {NavLink } from "react-router-dom";
import { FuzzyText } from "../../components/ui/FuzzyText";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black text-center px-4">
      {/* <h1 className="text-6xl font-bold mb-4 text-orange-500">404</h1> */}
      <FuzzyText 
        baseIntensity={0.1}
        >
        404
        
      </FuzzyText>
      <p className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</p>
      <p className="mb-6 text-gray-600">
        Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Kembali ke Beranda
      </NavLink>
    </div>
  );
};

export default NotFound;
