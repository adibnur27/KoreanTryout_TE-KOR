import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTestPackageById } from "../../../services/testPackageService";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Fotter";
import { LoadingCircle } from "../../../components/ui/LoadingCircle";
import { Button } from "../../../components/Button";
import axiosInstance from "../../../utils/axiosInstance";

const MyTryoutDetail = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchTryout = async () => {
      try {
        const data = await getTestPackageById(id);
        setPkg(data);
      } catch (err) {
        console.error("Gagal memuat detail tryout", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTryout();
  }, [id, user, navigate]);

  const handleBuy = async () => {
    try {
      const response = await axiosInstance.post(
        "/transactions/create",
        {
          testPackageId: id,
          quantity: 1, // statis, sesuai permintaan
        }
      );

      const redirectUrl = response.data.data.redirectUrl;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        alert("Gagal mendapatkan URL pembayaran.");
      }
    } catch (error) {
  console.error("Gagal membuat transaksi:", error);
  if (error.response) {
    console.log("Response error:", error.response.data);
  } else if (error.request) {
    console.log("No response received:", error.request);
  } else {
    console.log("Error setting up request:", error.message);
  }

  alert("Terjadi kesalahan saat memproses pembelian.");
}
  };

  if (!user) return null;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingCircle size={40} color="#000" />
      </div>
    );
  }

  if (!pkg) {
    return <div className="text-center mt-20">Tryout tidak ditemukan.</div>;
  }

  return (
    <div className="bg-gradient-to-t from-light-red pt-5 via-white to-light-blue">
      <Navbar />
      <div className="mt-20 cursor-pointer max-w-6xl mx-auto">
        <p onClick={() => navigate(`/tryouts`)} className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f">
            <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" />
          </svg>
          <span className="font-bold text-2xl">Kembali</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-5 p-5 justify-between bg-white rounded shadow-md flex gap-10">
        <div>
          <h1 className="text-3xl font-bold mt-4">{pkg.name}</h1>
          <p className="text-gray-700 mt-2 mb-10 max-w-2xl">{pkg.description}</p>
          <p className="text-md text-red-600 line-through">
            {pkg.price && pkg.discountPrice !== pkg.price
              ? `Rp ${pkg.price.toLocaleString()}`
              : ""}
          </p>
          <p className="text-xl font-bold mb-5">
            {pkg.price - (pkg.discountPrice ?? 0) === 0
              ? "Gratis"
              : `Rp ${(pkg.discountPrice ?? pkg.price).toLocaleString()}`}
          </p>
          <Button
            children={"Mulai"}
            className={
              "bg-kr-blue text-white px-6 rounded-xl text-lg font-semibold hover:bg-light-blue hover:text-black hover:border-kr-blue border-2 shadow font-inter"
            }
            width={"100px"}
            height={"35px"}
            onClick={async () => {
    try {
      const res = await axiosInstance.post(`/test-attempts/start/${id}`);
      const attemptId = res.data.data.id;
      navigate(`/cbt/${attemptId}`);
    } catch (err) {
      if (err.response?.status === 403) {
        alert("❌ Anda belum membeli paket ini.");
      } else if (err.response?.status === 409) {
        alert("❌ Anda sudah melebihi batas attempt.");
      } else {
        alert("❌ Gagal memulai tes.");
      }
      console.error(err);
    }
  }}
          />
        </div>
        <img
          src={pkg.imageUrl || "/default-img.png"}
          alt={pkg.name}
          className="w-1/4 h-1/4 object-cover rounded"
        />
      </div>

      <div className="max-w-6xl mx-auto mt-5 p-5 bg-white rounded shadow-md">
        <p className="text-gray-700 mt-2 mb-10 max-w-2xl">{pkg.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default MyTryoutDetail;

