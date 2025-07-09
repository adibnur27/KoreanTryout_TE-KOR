import React, { useEffect, useState, useCallback } from "react";
import { getAllBundles, createBundle, getAllPackages, updateBundle, deleteBundle } from "../../../services/bundleService";

/**
 * @description Komponen Form untuk membuat bundle baru.
 * @highlight Komponen baru untuk enkapsulasi logika form.
 */
const CreateBundleForm = ({ onSubmit, onCancel, availablePackages, isCreating }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: 0,
    packages: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePackageChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newPackageIds = checked
        ? [...prev.packages, value]
        : prev.packages.filter(id => id !== value);
      return { ...prev, packages: newPackageIds };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, price: Number(formData.price) });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-6 border rounded-md shadow-md bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Nama Bundle" value={formData.name} onChange={handleInputChange} className="p-2 border rounded" required />
        <input type="number" name="price" placeholder="Harga" value={formData.price} onChange={handleInputChange} className="p-2 border rounded" required />
        <input type="text" name="description" placeholder="Deskripsi" value={formData.description} onChange={handleInputChange} className="p-2 border rounded col-span-1 md:col-span-2" />
        <input type="text" name="imageUrl" placeholder="URL Gambar" value={formData.imageUrl} onChange={handleInputChange} className="p-2 border rounded col-span-1 md:col-span-2" />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Pilih Paket:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto p-2 border rounded">
          {availablePackages.length > 0 ? availablePackages.map(pkg => (
            <label key={pkg.id} className="flex items-center space-x-2">
              <input type="checkbox" value={pkg.id} onChange={handlePackageChange} />
              <span>{pkg.name}</span>
            </label>
          )) : <p>Tidak ada paket tersedia.</p>}
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Batal</button>
        <button type="submit" disabled={isCreating} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300">
          {isCreating ? 'Menyimpan...' : 'Simpan Bundle'}
        </button>
      </div>
    </form>
  );
};


/**
 * @description Komponen "pintar" (container) yang bertanggung jawab untuk fetching,
 * menampilkan, dan membuat data bundle.
 */
const BundleManagement = () => {
  const [bundles, setBundles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [createError, setCreateError] = useState(null);
  const [availablePackages, setAvailablePackages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState(null);
  const [editingBundle, setEditingBundle] = useState(null);

  const fetchAllData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const bundlesResponse = await getAllBundles();
      const packagesResponse = await getAllPackages();

      setBundles(bundlesResponse);
      setAvailablePackages(packagesResponse.data);

    } catch (err) {
      console.error("Gagal mengambil data:", err);
      setError(err.response?.data?.message || "Gagal mengambil data.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  const handleCreateSubmit = async (bundleData) => {
    setIsCreating(true);
    setCreateError(null);

    try {
      const payload = {
        name: bundleData.name,
        description: bundleData.description,
        imageUrl: bundleData.imageUrl,
        price: bundleData.price,
        packageIds: bundleData.packages
      };

      await createBundle(payload);
      setShowCreateForm(false);
      await fetchAllData(); // Refresh data setelah berhasil
    } catch (err) {
      console.error("Gagal membuat bundle:", err);
      setCreateError(err.response?.data?.message || "Gagal menyimpan bundle. Silakan coba lagi.");
    } finally {
      setIsCreating(false);
    }
  };

  if (isLoading) {
    return <div className="p-4 text-center">Memuat data...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500 bg-red-100 rounded">{error}</div>;
  }

  console.log("Isi state bundles:", bundles);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manajemen Bundle Paket</h1>

        {!showCreateForm && (
          <button onClick={() => setShowCreateForm(true)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            + Tambah Bundle Baru
          </button>
        )}
      </div>

      {showCreateForm && (
        <>
          <CreateBundleForm
            onSubmit={handleCreateSubmit}
            onCancel={() => setShowCreateForm(false)}
            availablePackages={availablePackages}
            isCreating={isCreating}
          />
          {createError && <div className="mb-4 text-center text-red-500 bg-red-100 p-2 rounded">{createError}</div>}
        </>
      )}

      <h2 className="text-xl font-semibold mb-2">Daftar Bundle</h2>
      {bundles.length > 0 ? (
        <BundleTable bundles={bundles} />
      ) : (
        <p className="text-gray-500">Tidak ada data bundle yang tersedia.</p>
      )}
    </div>
  );
};

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
            <td className="p-3 border">{bundle.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BundleManagement;