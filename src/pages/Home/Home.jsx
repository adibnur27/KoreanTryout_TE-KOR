import React from "react";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Fotter";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center px-6 py-20 bg-gradient-to-br from-white via-white to-orange-400">
        <h1 className="text-4xl font-bold">
          Kuasai Bahasa Korea dengan 
          <span className="text-orange-500">TE</span>
          <span className="text-black">-KOR</span>
        </h1>
        <h2 className="text-xl font-semibold mt-2">Buka Potensi Korea Anda Sekarang Juga</h2>
        <div className="mt-6">
          <NavLink to={'/products'}>
            <Button children={"Coba Sekarang"} width={'200px'} height={'40px'}/>
          </NavLink>
        </div>
        <p className="mt-6 max-w-2xl mx-auto text-sm">
          Berlatih dengan soal-soal nyata, dapatkan skor instan, dan pahami kesalahan Anda dengan penjelasan rinci. Bergabunglah dengan kami dan capai tujuan bahasa Anda.
        </p>
      </section>

      {/* Features Section */}
      <section className="text-center py-20 bg-white border-t border-black border-b">
        <p className="text-lg max-w-2xl mx-auto mb-10">
          <span className="text-orange-500">TE</span>
          <span className="text-black">-KOR </span> 
          menyediakan alat dan sumber daya yang Anda butuhkan untuk berhasil dalam perjalanan bahasa Korea Anda.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="p-4 border rounded-lg w-64 text-left">
            <h3 className="font-semibold">Skor Real-time</h3>
            <p className="text-sm mt-1">Dapatkan umpan balik instan tentang kinerja Anda dengan skor real-time dan pelacakan kemajuan.</p>
          </div>
          <div className="p-4 border rounded-lg w-64 text-left">
            <h3 className="font-semibold">Penjelasan Jawaban</h3>
            <p className="text-sm mt-1">Pahami kesalahan Anda dengan penjelasan rinci untuk setiap jawaban, membantu Anda belajar secara efektif.</p>
          </div>
          <div className="p-4 border rounded-lg w-64 text-left">
            <h3 className="font-semibold">Soal Latihan</h3>
            <p className="text-sm mt-1">Akses perpustakaan besar soal latihan yang mencakup semua tingkat kemahiran bahasa Korea.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white border-b border-black">
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-orange-500 text-black w-48 h-48 flex items-center justify-center text-xl font-bold rounded shadow">
              Product
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
