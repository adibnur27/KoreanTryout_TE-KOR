import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Fotter";
import { useNavigate } from "react-router-dom";
import { LoadingCircle } from "../../components/ui/LoadingCircle";
import { ProductCard } from "../../components/ProductCard";
import axiosInstance from "../../utils/axiosInstance";
import imgDflt from "../../assets/default-img.png";
import coverfreetrial from "../../assets/coverfreetrial.jpg";
import Swal from "sweetalert2";

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
          }).then(() => {
            navigate("/login");
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
  const filteredReadyToStart = readyToStart.filter((item) =>
    item.testPackage.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-opensans">
      <Navbar />
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
            <div className="text-center text-lg w-min mx-auto mt-52">
              <LoadingCircle size={40} color="#000" />
            </div>
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
                        <img
                          src={item.testPackage.imageUrl || imgDflt}
                          alt="paket"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
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
                        <img
                          src={item.testPackage.imageUrl || imgDflt}
                          alt="paket"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </ProductCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Kosong */}
              {filteredReadyToStart.length === 0 && inProgress.length === 0 && (
                <p className="text-center text-lg">Kamu Belum Memiliki Tryout</p>
              )}
            </>
          )}

          {/* Free Trial */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Coba Simulasi</h2>
            <ProductCard
              title="Simulasi Tryout Gratis"
              subtitle="Tryout ini berisi 10 soal yang dimana kamu akan mencoba simulasi tryout mirip dengan tryout aslinya"
              price="Gratis"
              DiscountPrice=""
              buttonText="Coba Sekarang"
              onButtonClick={() => navigate("/cbt-trial")}
            >
              <img
                src={coverfreetrial}
                alt="dummy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ProductCard>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyTryouts;
