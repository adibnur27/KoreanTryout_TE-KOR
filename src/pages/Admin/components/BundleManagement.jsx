import React, { useEffect, useState } from "react";
import { getAllBundles, createBundle, getAllPackages, updateBundle, deleteBundle } from "../../../services/bundleService";

import { Dialog } from "@headlessui/react";
import Swal from "sweetalert2";

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
        packages: initialData.packages?.map((p) => p.id) || [],
      });
    }
  }, [initialData, isEditMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const isNumberField = name === "price" || name === "discountPrice";
    setFormData((prev) => ({ ...prev, [name]: isNumberField ? Number(value) : value }));
  };

  const handlePackageChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newPackageIds = checked ? [...prev.packages, value] : prev.packages.filter((id) => id !== value);
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
      <h2 className="text-xl font-semibold mb-4">{isEditMode ? `Edit Bundle: ${initialData.name}` : "Buat Bundle Baru"}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label htmlFor="name" className="font-medium mb-1">Nama Bundle</label>
    <input
      id="name"
      type="text"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      className="p-2 border rounded"
      required
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="price" className="font-medium mb-1">Harga</label>
    <input
      id="price"
      type="number"
      name="price"
      value={formData.price}
      onChange={handleInputChange}
      className="p-2 border rounded"
      required
    />
  </div>

  <div className="flex flex-col md:col-span-2">
    <label htmlFor="description" className="font-medium mb-1">Deskripsi</label>
    <input
      id="description"
      type="text"
      name="description"
      value={formData.description}
      onChange={handleInputChange}
      className="p-2 border rounded"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="discountPrice" className="font-medium mb-1">Harga Diskon</label>
    <input
      id="discountPrice"
      type="number"
      name="discountPrice"
      value={formData.discountPrice}
      onChange={handleInputChange}
      className="p-2 border rounded"
    />
  </div>

  {!isEditMode && (
    <div className="flex flex-col md:col-span-2">
      <label htmlFor="imageUrl" className="font-medium mb-1">URL Gambar</label>
      <input
        id="imageUrl"
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleInputChange}
        className="p-2 border rounded"
      />
    </div>
  )}
</div>

      <div className="flex justify-end space-x-2 mt-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Batal
        </button>
        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300">
          {isSubmitting ? "Menyimpan..." : isEditMode ? "Simpan Perubahan" : "Simpan Bundle"}
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
      const payload = {
        name: bundleData.name,
        description: bundleData.description,
        imageUrl: bundleData.imageUrl,
        price: bundleData.price,
        packageIds: bundleData.packageIds,
      };
      await createBundle(payload);
      setShowCreateForm(false);
      await fetchAllData();
    } catch (err) {
      Swal.fire("Gagal", err.response?.data?.message || "Gagal menyimpan bundle.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditClick = (bundle) => {
    setEditingBundle(bundle);
    setShowCreateForm(false);
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
      Swal.fire("Gagal", err.response?.data?.message || "Gagal memperbarui bundle.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (bundleId) => {
  const result = await Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Bundle ini akan dihapus secara permanen.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
  });

  if (result.isConfirmed) {
    try {
      await deleteBundle(bundleId);
      setBundles((prev) => prev.filter((b) => b.id !== bundleId));
      Swal.fire("Terhapus!", "Bundle berhasil dihapus.", "success");
    } catch (err) {
      Swal.fire("Gagal", err.response?.data?.message || "Gagal menghapus bundle.", "error");
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
        {!editingBundle && (
          <button onClick={() => setShowCreateForm(true)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            + Tambah Bundle Baru
          </button>
        )}
      </div>

      {actionError && <div className="mb-4 text-center text-red-500 bg-red-100 p-2 rounded">{actionError}</div>}

      {/* Modal untuk Form Create */}
      {/* CREATE FORM MODAL */}
      <Dialog open={showCreateForm} onClose={handleCancel} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-2xl w-full p-6 rounded shadow-lg">
            <Dialog.Title className="text-xl font-bold mb-4">Tambah Bundle Baru</Dialog.Title>
            <BundleForm onSubmit={handleCreateSubmit} onCancel={handleCancel} availablePackages={availablePackages} isSubmitting={isSubmitting} />
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* EDIT FORM MODAL */}
      <Dialog open={!!editingBundle} onClose={handleCancel} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-2xl w-full p-6 rounded shadow-lg">
            <Dialog.Title className="text-xl font-bold mb-4">Edit Bundle</Dialog.Title>
            <BundleForm onSubmit={handleUpdateSubmit} onCancel={handleCancel} availablePackages={availablePackages} isSubmitting={isSubmitting} initialData={editingBundle} />
          </Dialog.Panel>
        </div>
      </Dialog>

      <h2 className="text-xl font-semibold mb-2">Daftar Bundle</h2>
      {bundles.length > 0 ? <BundleTable bundles={bundles} onEdit={handleEditClick} onDelete={handleDelete} /> : <p className="text-gray-500">Tidak ada data bundle yang tersedia.</p>}
    </div>
  );
};

const BundleTable = ({ bundles, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto  border rounded shadow-sm">
        <thead className="bg-kr-blue">
          <tr className="text-left text-white">
            <th className="p-3 border ">Nama</th>
            <th className="p-3 border ">Deskripsi</th>
            <th className="p-3 border ">Harga</th>
            <th className="p-3 border  text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bundles.map((bundle) => (
            <tr key={bundle.id} className="bg-gray-50">
              <td className="p-3 border ">{bundle.name}</td>
              <td className="p-3 border ">{bundle.description}</td>
              <td className="p-3 border ">Rp {Number(bundle.price).toLocaleString("id-ID")}</td>
              <td className="p-3 border  text-center ">
                <button onClick={() => onEdit(bundle)} className="px-3 py-1 m-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2 text-sm">
                  Edit
                </button>
                {/* <button onClick={() => onDelete(bundle.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                  Hapus
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BundleManagement;
