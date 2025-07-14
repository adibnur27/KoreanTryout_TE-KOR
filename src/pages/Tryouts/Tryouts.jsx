import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Fotter";
import { getAllTestPackagesAndBundle } from "../../services/testPackageService";
import { LoadingCircle } from "../../components/ui/LoadingCircle";
import { useNavigate } from "react-router-dom";

import { ScrollToTop } from "../../components/ScrollToTop";

const Tryouts = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    getAllTestPackagesAndBundle()
      .then((res) => {
        if (res?.data) {
          setPackages(res.data); // array of packages
        } else {
          setPackages([]);
          console.error("Expected array, but got:", res);
        }
      })
      .catch(() => {
        alert("Gagal memuat data paket!");
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔍 Filter dan cari sebelum map()
  const filteredPackages = packages
    .filter((pkg) => {
      const matchSearch = pkg.name?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchType = filterType === "all" || pkg.type === filterType;
      return matchSearch && matchType;
    })
    .sort((a, b) => b.price - a.price); // urutkan dari mahal ke murah

  return (
    <div className="font-sans">
      <Navbar />
      <ScrollToTop />
      {/* Background pattern */}
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[50%] right-[10%] rotate-[15deg] text-6xl opacity-10">글</span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] left-1/2-translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">시</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[80%] right-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[100%] left-[10%] rotate-[15deg] text-6xl opacity-10">글</span>

      <section className="py-16 pt-20 pb-10 min-h-screen bg-gradient-to-t from-light-red via-white to-light-blue">
        {/* 🔎 Search & Filter */}

        <div className="flex max-w-full h-20 items-center mx-auto mb-5 gap-5 justify-center">
          <div className="flex w-2/5 h-2/4 border-2 border-gray-500  rounded-full overflow-hidden focus-within:border-black">
            <input
              type="text"
              placeholder="Cari nama tryout..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-gradient-to-l from-light-red via-white to-light-blue active:shadow shadow-black"
            />
          </div>
          <div className="flex justify-center ">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="focus-within:border-black px-2 py-2 border-2 placeholder-gray-500 border-gray-500 rounded-full text-sm bg-gradient-to-l from-light-red via-white to-light-blue ` focus:border-black"
            >
              <option value="all">Semua Tipe</option>
              <option value="bundle">Bundle</option>
              <option value="package">Package</option>
            </select>
          </div>
        </div>

        {/* 🧾 Package Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* package trial */}
          {searchQuery === "" && filterType === "all" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 ">Coba Simulasi</h2>
              <ProductCard className = "w-full max-w-screen-xl mx-auto bg-gradient-to-r from-red-300 via-white to-white text-black rounded shadow-lg lg:px-10 " title="Simulasi Tryout Gratis" subtitle="Tryout ini berisi 10 soal Membaca dan Mendengarkan" buttonText="Coba Sekarang" onButtonClick={() => navigate("/cbt-trial")}>
                <img src="/coverfreetrial.jpg" alt="dummy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </ProductCard>
            </div>
          )}

          {loading ? (
            <div className="text-center text-lg w-min mx-auto mt-52">
              <LoadingCircle size={40} color="#000" />
            </div>
          ) : filteredPackages.length === 0 ? (
            <p className="text-center text-lg">Tidak ada paket yang cocok.</p>
          ) : (
            filteredPackages.map((pkg) => (
              <ProductCard
                key={pkg.id}
                title={pkg.name || "Tanpa Judul"}
                subtitle={pkg.description || "Tryout EPS-TOPIK, dengan soal pilihan ganda listening dan reading yang menyerupai ujian asli."}
                price={pkg.price === 0 ? "Gratis" : `Rp ${pkg.price.toLocaleString()}`}
                DiscountPrice={pkg.discountPrice && pkg.discountPrice > 0 ? `Rp ${pkg.discountPrice.toLocaleString()}` : " "}
                buttonText="Detail"
                onButtonClick={() => navigate(`/tryoutsDetail/${pkg.type}/${pkg.id}`)}
              >
                <img
                  src={pkg.imageUrl || "/default-img.png"}
                  alt={pkg.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </ProductCard>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tryouts;
