import React from "react";
import {NavLink } from "react-router-dom";
import { FuzzyText } from "../../components/ui/FuzzyText";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-light-blue via-white to-light-red text-black text-center px-4">
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[5%] -rotate-[15deg] text-6xl opacity-20">한</span>
      <span className="korean-pattern pointer-events-none absolute z-10 top-1/2 right-[5%] rotate-[15deg] text-6xl opacity-20">글</span>
      <span className="korean-pattern pointer-events-none absolute z-10 bottom-[5%] left-[60%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">시</span>
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
        className="px-6 py-3 bg-kr-blue text-white rounded-lg hover:bg-light-blue hover:border-kr-blue hover:text-black border transition"
      >
        Kembali ke Beranda
      </NavLink>
    </div>
  );
};

export default NotFound;
