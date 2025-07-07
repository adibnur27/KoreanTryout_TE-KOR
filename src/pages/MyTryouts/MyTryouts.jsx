import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Fotter'
import { useNavigate } from 'react-router-dom';
import { LoadingCircle } from '../../components/ui/LoadingCircle';
import { ProductCard } from '../../components/ProductCard';
import axiosInstance from '../../utils/axiosInstance';
import imgDflt from "../../assets/default-img.png";

const MyTryouts = () => {
  const [loading, setLoading] = useState(true);
  const [readyToStart, setReadyToStart] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyTests = async () => {
      try {
        const res = await axiosInstance.get("/test-attempts/my-tests");
        const data = res.data.data;
        setReadyToStart(data.readyToStart || []);
        setInProgress(data.inProgress || []);
      } catch (error) {
        alert("Gagal memuat data tryout!");
      } finally {
        setLoading(false);
      }
    };

    fetchMyTests();
  }, []);

  return (
    <div className="font-opensans">
      <Navbar />
      <section className="py-16 pb-10 min-h-screen bg-gradient-to-t from-light-red pt-5 via-white to-light-blue">
        <div className="max-w-xl mx-auto mt-20">
          <div className="flex border-2 border-black rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-gradient-to-l from-light-red via-white to-light-blue"
              disabled
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 space-y-10">
          {loading ? (
            <div className="text-center text-lg w-min mx-auto mt-52">
              <LoadingCircle size={40} color="#000" />
            </div>
          ) : (
            <>
              {readyToStart.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Siap Dimulai</h2>
                  <div className="space-y-6">
                    {readyToStart.map((item) => (
                      <ProductCard
                        key={item.transactionId}
                        title={item.testPackage.name || "Tanpa Nama"}
                        subtitle="Paket tryout siap dimulai"
                        price="Sudah Dibeli"
                        DiscountPrice=""
                        buttonText="Mulai"
                        onButtonClick={() => navigate(`/cbt/${item.transactionId}`)}
                      >
                        <img
                          src={imgDflt}
                          alt="paket"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </ProductCard>
                    ))}
                  </div>
                </div>
              )}

              {inProgress.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4">Sedang Berlangsung</h2>
                  <div className="space-y-6">
                    {inProgress.map((item) => (
                      <ProductCard
                        key={item.attemptId}
                        title={item.testPackage.name || "Tanpa Nama"}
                        subtitle={`Sisa waktu ${Math.floor(item.remainingDuration / 60)} menit`}
                        price="Sudah Dimulai"
                        DiscountPrice=""
                        buttonText="Lanjutkan"
                        onButtonClick={async () => {
                                                  try {
                                                    const res = await axiosInstance.post(`/test-attempts/start/${item.packageId}`);
                                                    const attemptId = res.data.data.id;
                                                    navigate(`/cbt/${attemptId}`);
                                                  } catch (err) {
                                                    if (err.response?.status === 403) alert("❌ Kamu belum membeli paket ini.");
                                                    else if (err.response?.status === 404) alert("❌ Paket tidak ditemukan.");
                                                    else if (err.response?.status === 409) alert("❌ Kamu sudah melewati batas attempt.");
                                                    else alert("❌ Gagal memulai tryout.");
                                                  }
                                                }}
                      >
                        <img
                          src={imgDflt}
                          alt="paket"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </ProductCard>
                    ))}
                  </div>
                </div>
              )}

              {readyToStart.length === 0 && inProgress.length === 0 && (
                <p className="text-center text-lg">Tidak ada tryout aktif.</p>
              )}
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyTryouts;
