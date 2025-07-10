import React, { useEffect, useState } from "react";
import { getAllBundles, createBundle, getAllPackages, updateBundle, deleteBundle } from "../../../services/bundleService";

/**
 * @description Komponen Form untuk membuat atau mengedit bundle.
 * @highlight Direfactor dari CreateBundleForm menjadi BundleForm yang lebih reusable.
 * @param {object} initialData - Data awal untuk mode edit. Jika null, maka mode create.
 */
const BundleForm = ({ onSubmit, onCancel, availablePackages, isSubmitting, initialData = null }) => {
  const isEditMode = !!initialData;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: 0,
    discountPrice: 0,
    packages: [],
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: initialData.name || "",
        description: initialData.description || "",
        price: initialData.price || 0,
        discountPrice: initialData.discountPrice || 0,
        imageUrl: "", // imageUrl tidak di-load saat edit
        packages: initialData.packages?.map(p => p.id) || [],
      });
    }
  }, [initialData, isEditMode]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const isNumberField = name === 'price' || name === 'discountPrice';
    setFormData(prev => ({ ...prev, [name]: isNumberField ? Number(value) : value }));
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
    const { packages, ...restOfData } = formData;
    const submissionData = { ...restOfData };
    if (!isEditMode) {
        submissionData.packageIds = packages;
    }
    onSubmit(submissionData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-6 border rounded-md shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">{isEditMode ? `Edit Bundle: ${initialData.name}` : 'Buat Bundle Baru'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Nama Bundle" value={formData.name} onChange={handleInputChange} className="p-2 border rounded" required />
            <input type="text" name="description" placeholder="Deskripsi" value={formData.description} onChange={handleInputChange} className="p-2 border rounded col-span-1 md:col-span-2" />
            <input type="number" name="price" placeholder="Harga" value={formData.price} onChange={handleInputChange} className="p-2 border rounded" required />
            <input type="number" name="discountPrice" placeholder="Harga Diskon (opsional)" value={formData.discountPrice} onChange={handleInputChange} className="p-2 border rounded" />
            {!isEditMode && (
              <input type="text" name="imageUrl" placeholder="URL Gambar" value={formData.imageUrl} onChange={handleInputChange} className="p-2 border rounded col-span-1 md:col-span-2" />
            )}
        </div>

        {!isEditMode && (
          <div className="mt-4">
              <h3 className="font-semibold mb-2">Pilih Paket:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto p-2 border rounded">
                  {availablePackages.map(pkg => (
                    <label key={pkg.id} className="flex items-center space-x-2">
                        <input type="checkbox" value={pkg.id} checked={formData.packages.includes(pkg.id)} onChange={handlePackageChange} />
                        <span>{pkg.name}</span>
                    </label>
                  ))}
              </div>
          </div>
        )}

        <div className="flex justify-end space-x-2 mt-4">
            <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Batal</button>
            <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300">
                {isSubmitting ? 'Menyimpan...' : (isEditMode ? 'Simpan Perubahan' : 'Simpan Bundle')}
            </button>
        </div>
    </form>
  );
};


/**
 * @description Komponen "pintar" (container) yang mengelola semua state dan logika CRUD.
 */
const BundleManagement = () => {
  const [bundles, setBundles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [availablePackages, setAvailablePackages] = useState([]);

  // highlight-start
  // Komentar: State untuk mengelola proses (create/update) dan mode edit.
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState(null);
  const [editingBundle, setEditingBundle] = useState(null); // Menyimpan data bundle yg sedang diedit
  // highlight-end

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
    setIsSubmitting(true);
    setActionError(null);
    try {
      // Payload untuk create bundle
      const payload = {
        name: bundleData.name,
        description: bundleData.description,
        imageUrl: bundleData.imageUrl,
        price: bundleData.price,
        packageIds: bundleData.packageIds
      };
      await createBundle(payload);
      setShowCreateForm(false);
      await fetchAllData(); // Refresh data
    } catch (err) {
      console.error("Gagal membuat bundle:", err);
      setActionError(err.response?.data?.message || "Gagal menyimpan bundle.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // highlight-start
  // Komentar: Handler untuk memulai mode edit.
  const handleEditClick = (bundle) => {
    setEditingBundle(bundle);
    setShowCreateForm(false); // Pastikan form create tertutup jika sedang terbuka
  };

  const handleUpdateSubmit = async (bundleData) => {
    setIsSubmitting(true);
    setActionError(null);
    try {
      const payload = {
        name: bundleData.name,
        description: bundleData.description,
        price: bundleData.price,
        discountPrice: bundleData.discountPrice,
      };
      await updateBundle(editingBundle.id, payload);
      setEditingBundle(null);
      await fetchAllData();
    } catch (err) {
      console.error("Gagal memperbarui bundle:", err);
      setActionError(err.response?.data?.message || "Gagal memperbarui bundle.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (bundleId) => {
  if (window.confirm("Apakah Anda yakin ingin menghapus bundle ini?")) {
    try {
      const successMessage = await deleteBundle(bundleId);
      alert(successMessage);
      setBundles(prevBundles => prevBundles.filter(b => b.id !== bundleId));

    } catch (err) {
      console.error("Gagal menghapus bundle:", err);
      setActionError(err.response?.data?.message || "Gagal menghapus bundle.");
    }
  }
};
  
  const handleCancel = () => {
    setShowCreateForm(false);
    setEditingBundle(null);
    setActionError(null);
  };

  if (isLoading) return <div className="p-4 text-center">Memuat data...</div>;
  if (error) return <div className="p-4 text-center text-red-500 bg-red-100 rounded">{error}</div>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manajemen Bundle Paket</h1>
        {/* Komentar: Tombol tambah hanya muncul jika tidak ada form yang aktif */}
        {!showCreateForm && !editingBundle && (
          <button onClick={() => setShowCreateForm(true)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            + Tambah Bundle Baru
          </button>
        )}
      </div>
      
      {actionError && <div className="mb-4 text-center text-red-500 bg-red-100 p-2 rounded">{actionError}</div>}

      {/* Komentar: Menampilkan form create */}
      {showCreateForm && (
        <BundleForm
          onSubmit={handleCreateSubmit}
          onCancel={handleCancel}
          availablePackages={availablePackages}
          isSubmitting={isSubmitting}
        />
      )}

      {editingBundle && (
        <BundleForm
          onSubmit={handleUpdateSubmit}
          onCancel={handleCancel}
          availablePackages={availablePackages}
      isSubmitting={isSubmitting}
          initialData={editingBundle}
        />
      )}

      <h2 className="text-xl font-semibold mb-2">Daftar Bundle</h2>
      {bundles.length > 0 ? (
        <BundleTable bundles={bundles} onEdit={handleEditClick} onDelete={handleDelete} />
      ) : (
        <p className="text-gray-500">Tidak ada data bundle yang tersedia.</p>
      )}
    </div>
  );
};

/**
 * @description Komponen tabel untuk menampilkan data bundle dan tombol aksi.
 * @highlight Ditambahkan kolom Aksi dengan tombol Edit dan Hapus.
 */
const BundleTable = ({ bundles, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
        <table className="min-w-full table-auto border shadow-sm">
            <thead className="bg-gray-100">
                <tr className="text-left">
                <th className="p-3 border">Nama</th>
                <th className="p-3 border">Deskripsi</th>
                <th className="p-3 border">Harga</th>
                {/* Komentar: Kolom baru untuk aksi */}
                <th className="p-3 border text-center">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {bundles.map(bundle => (
                <tr key={bundle.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{bundle.name}</td>
                    <td className="p-3 border">{bundle.description}</td>
                    <td className="p-3 border">Rp {Number(bundle.price).toLocaleString('id-ID')}</td>
                    <td className="p-3 border text-center">
                    <button onClick={() => onEdit(bundle)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2 text-sm">Edit</button>
                    <button onClick={() => onDelete(bundle.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">Hapus</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default BundleManagement;