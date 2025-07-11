import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Fotter";
import { useNavigate } from "react-router-dom";
import { LoadingCircle } from "../../components/ui/LoadingCircle";
import { ProductCard } from "../../components/ProductCard";
import axiosInstance from "../../utils/axiosInstance";
import imgDflt from "../../assets/default-img.png";
import Swal from "sweetalert2";
import { ScrollToTop } from "../../components/ScrollToTop";

const MyTryouts = () => {
  const [loading, setLoading] = useState(true);
  const [readyToStart, setReadyToStart] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyTests = async () => {
      try {
        const res = await axiosInstance.get("/test-attempts/my-tests");
        const data = res.data.data;
        setReadyToStart(data.readyToStart || []);
        setInProgress(data.inProgress || []);
      } catch (error) {
        if (error.response?.status === 403) {
          Swal.fire({
            icon: "warning",
            title: "Akses Ditolak",
            text: "Silakan login terlebih dahulu untuk menampilkan tryouts yang kamu miliki.",
            confirmButtonText: "Login",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Terjadi Kesalahan",
            text: "Terjadi kesalahan saat memuat data tryout.",
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMyTests();
  }, [navigate]);

  const handleStartTryout = async (packageId) => {
    try {
      const res = await axiosInstance.post(`/test-attempts/start/${packageId}`);
      const attemptId = res.data.data.id;

      let retries = 0;
      const maxRetries = 5;
      let detailLoaded = false;

      while (retries < maxRetries && !detailLoaded) {
        try {
          const check = await axiosInstance.get(`/test-attempts/${attemptId}/details`);
          if (check.data?.data?.questions?.length > 0) {
            detailLoaded = true;
            break;
          }
        } catch (e) {}

        retries++;
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      if (detailLoaded) {
        navigate(`/cbt/${attemptId}`);
      } else {
        alert("Ujian belum siap, silakan coba lagi beberapa saat.");
      }
    } catch (error) {
      alert("Gagal memulai tryout!");
      console.error(error);
    }
  };

  // 🔍 Filter readyToStart berdasarkan nama
  const filteredReadyToStart = readyToStart.filter((item) => item.testPackage.name?.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="font-opensans">
      <Navbar />
      
      <ScrollToTop/>
      <section className="py-16 pb-10 pt-20 min-h-screen bg-gradient-to-t  from-light-red via-white to-light-blue">
        {/* 🔎 Search input */}
        <div className="flex max-w-xl h-20 items-center mx-auto gap-5 justify-center ">
          <div className="flex w-full h-2/4 border-2 border-gray-300 rounded-full overflow-hidden focus-within:border-black">
            <input
              type="text"
              placeholder="Cari nama tryout..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-gradient-to-l from-light-red via-white to-light-blue"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-5 space-y-10">
          {loading ? (
            <div className="text-center text-lg w-min mx-auto mt-52"></div>
          ) : (
            <>
              {/* Siap Dimulai */}
              {filteredReadyToStart.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Siap Dimulai</h2>
                  <div className="space-y-6">
                    {filteredReadyToStart.map((item) => (
                      <ProductCard
                        key={item.transactionId}
                        title={item.testPackage.name || "Tanpa Nama"}
                        subtitle="Paket tryout siap dimulai"
                        price="Sudah Dibeli"
                        DiscountPrice=""
                        buttonText="Mulai"
                        onButtonClick={() => handleStartTryout(item.testPackage.id)}
                      >
                        <img src={item.testPackage.imageUrl || imgDflt} alt="paket" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </ProductCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Sedang Berlangsung */}
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
                        onButtonClick={() => navigate(`/cbt/${item.attemptId}`)}
                      >
                        <img src={item.testPackage.imageUrl || imgDflt} alt="paket" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </ProductCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Kosong */}
              {filteredReadyToStart.length === 0 && inProgress.length === 0 && (
                <div className="text-center text-lg mx-auto mt-20">
                  <p className="text-center text-2xl text-gray-400">Kamu Belum Memiliki Tryout</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-gray-400" enable-background="new 0 0 24 24" height="100px" viewBox="0 0 24 24" width="100px" fill="#9CA3AF">
                    <g>
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <g>
                        <path d="M15.5,14h-0.79l-0.28-0.27C15.41,12.59,16,11.11,16,9.5C16,5.91,13.09,3,9.5,3C6.08,3,3.28,5.64,3.03,9h2.02 C5.3,6.75,7.18,5,9.5,5C11.99,5,14,7.01,14,9.5S11.99,14,9.5,14c-0.17,0-0.33-0.03-0.5-0.05v2.02C9.17,15.99,9.33,16,9.5,16 c1.61,0,3.09-0.59,4.23-1.57L14,14.71v0.79l5,4.99L20.49,19L15.5,14z" />
                        <polygon points="6.47,10.82 4,13.29 1.53,10.82 0.82,11.53 3.29,14 0.82,16.47 1.53,17.18 4,14.71 6.47,17.18 7.18,16.47 4.71,14 7.18,11.53" />
                      </g>
                    </g>
                  </svg>
                  <p className="text-center text-6xl text-gray-400">아직 오디션이 없잖아</p>
                </div>
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
