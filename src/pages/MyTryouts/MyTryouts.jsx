import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Fotter'
import { useNavigate } from 'react-router-dom';
import { getAllTestPackages } from '../../services/testPackageService';
import { LoadingCircle } from '../../components/ui/LoadingCircle';
import { ProductCard } from '../../components/ProductCard';
import imgDflt from "../../assets/default-img.png";

const MyTryouts = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getAllTestPackages()
        .then((data) => {
            setPackages(data);
        })
        .catch(() => {
            alert("Gagal memuat data paket!");
        })
        .finally(() => setLoading(false));
    }, []);
  return (
    <div className="font-opensans">
        <Navbar/>
<section className="py-16 pb-10 min-h-screen bg-gradient-to-t from-light-red pt-5 via-white to-light-blue">
        <div className="max-w-xl mx-auto mt-20">
          <div className="flex border-2 border-black rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-gradient-to-l from-light-red via-white to-light-blue"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 space-y-6">
          {loading ? (
            <div className="text-center text-lg w-min mx-auto mt-52">
              <LoadingCircle size={40} color="#000" />
            </div>
            // <p className="text-center text-lg">Loading packages...</p>
          ) : packages.length === 0 ? (
            <p className="text-center text-lg">Tidak ada paket tersedia.</p>
          ) : (
            packages.map((pkg) => (
              <ProductCard
                key={pkg.id}
                title={pkg.name || "Tanpa Judul"}
                subtitle={pkg.description || "Tryout EPS-TOPIK, dengan soal pilihan ganda listening dan reading yang menyerupai ujian asli."}
                price={pkg.price === 0 ? "Gratis" : `Rp ${pkg.price.toLocaleString()}`}
                DiscountPrice={
                  pkg.discountPrice && pkg.discountPrice > 0
                    ? `Rp ${(pkg.price - pkg.discountPrice).toLocaleString()}`
                    : " "
                }
                buttonText="Mulai"
                onButtonClick={() => navigate("/cbtPage")}
              >
                <img
                  src={pkg.imageUrl || imgDflt}
                  alt={pkg.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </ProductCard>
            ))
          )}
        </div>
      </section>
        <Footer/>
    </div>
  )
}

export default MyTryouts