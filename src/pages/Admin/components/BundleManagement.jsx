import React, { useEffect, useState } from "react";
import { getAllBundles } from "../../../services/bundleService";

/**
 * @description Komponen presentasional untuk menampilkan data bundle dalam bentuk tabel.
 * Komponen ini hanya menerima data dan tidak melakukan fetching.
 * @param {Array} bundles - Daftar bundle yang akan ditampilkan.
 */
const BundleTable = ({ bundles }) => {
  return (
    <table className="min-w-full table-auto border shadow-sm">
      <thead className="bg-gray-100">
        <tr className="text-left">
          <th className="p-3 border">Name</th>
          <th className="p-3 border">Description</th>
          <th className="p-3 border">Price</th>
        </tr>
      </thead>
      <tbody>
        {bundles.map(bundle => (
          <tr key={bundle.id} className="hover:bg-gray-50">
            <td className="p-3 border">{bundle.name}</td>
            <td className="p-3 border">{bundle.description}</td>
            <td className="p-3 border">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(bundle.price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


/**
 * @description Komponen "pintar" (container) yang bertanggung jawab untuk fetching data
 * dan mengelola state untuk manajemen bundle.
 */
const BundleManagement = () => {
  const [bundles, setBundles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBundles = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getAllBundles();
        setBundles(response.data || []);
      } catch (err) {
        console.error("Gagal mengambil data bundle:", err);
        setError(err.response?.data?.message || "Gagal mengambil data bundle.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBundles();
  }, []);

  if (isLoading) {
    return <div className="p-4 text-center">Memuat data bundle...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500 bg-red-100 rounded">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Bundle Paket</h1>
      {bundles.length > 0 ? (
        <BundleTable bundles={bundles} />
      ) : (
        <p className="text-gray-500">Tidak ada data bundle yang tersedia.</p>
      )}
    </div>
  );
};

export default BundleManagement;