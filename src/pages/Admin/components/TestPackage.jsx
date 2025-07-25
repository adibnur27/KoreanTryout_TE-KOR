import React, { useState, useEffect } from "react";
import { createTestPackage, getAllTestPackages, deleteTestPackage, updateTestPackage, getTestPackageById, downloadPackageTemplate } from "../../../services/testPackageService";
import Swal from "sweetalert2";
import { Dialog } from "@headlessui/react";

const CreateTestPackageForm = ({ onSubmit, onCancel, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: 0,
    discountPrice: 0,
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const isNumberField = name === "price" || name === "discountPrice";
    setFormData((prev) => ({
      ...prev,
      [name]: isNumberField ? Number(value) : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Tambah Test Package</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label className="font-bold">Nama Paket:</label>
          <input type="text" name="name" placeholder="Nama Paket" value={formData.name} onChange={handleInputChange} className="p-2 border rounded" required />
        </div>
        <div className="flex flex-col">
          <label className="font-bold">Deskripsi:</label>
          <input type="text" name="description" placeholder="Deskripsi" value={formData.description} onChange={handleInputChange} className="p-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label className="font-bold">Image URL:</label>
          <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleInputChange} className="p-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label className="font-bold">Harga:</label>
          <input type="number" name="price" placeholder="Harga" value={formData.price} onChange={handleInputChange} className="p-2 border rounded" required />
        </div>
        <div className="flex flex-col">
          <label className="font-bold">Harga Diskon:</label>
          <input type="number" name="discountPrice" placeholder="Harga Diskon (opsional)" value={formData.discountPrice} onChange={handleInputChange} className="p-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label className="font-bold">File Excel:</label>
          <input type="file" name="file" onChange={handleFileChange} className="p-2 border rounded" accept=".xlsx, .xls" required />
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Batal
        </button>
        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300">
          {isSubmitting ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </form>
  );
};

const TestPackageForm = ({ onSubmit, onCancel, isSubmitting, initialData = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    discountPrice: 0,
    image: null,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        description: initialData.description || "",
        price: initialData.price || 0,
        discountPrice: initialData.discountPrice || 0,
        image: null,
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const isNumberField = name === "price" || name === "discountPrice";
    setFormData((prev) => ({
      ...prev,
      [name]: isNumberField ? Number(value) : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-6   bg-white">
      <h2 className="text-xl font-semibold mb-4">{`Edit Test Package: ${initialData?.name}`}</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="" className=" font-bold">Nama Paket: </label>
          <input type="text" name="name" placeholder="Nama Paket" value={formData.name} onChange={handleInputChange} className="p-2 border rounded" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className=" font-bold">Deskripsi: </label>
          <input type="text" name="description" placeholder="Deskripsi" value={formData.description} onChange={handleInputChange} className="p-2 border rounded col-span-1 md:col-span-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className=" font-bold">Harga: </label>
          <input type="number" name="price" placeholder="Harga" value={formData.price} onChange={handleInputChange} className="p-2 border rounded" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className=" font-bold">Harga Diskon: </label>
        <input type="number" name="discountPrice" placeholder="Harga Diskon (opsional)" value={formData.discountPrice} onChange={handleInputChange} className="p-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className=" font-bold">Gambar: </label>
        <input type="file" name="image" onChange={handleFileChange} className="p-2 border rounded col-span-1 md:col-span-2" accept="image/*" />
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Batal
        </button>
        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300">
          {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </form>
  );
};

const TestPackage = () => {
  const [testPackages, setTestPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [editingPackage, setEditingPackage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const fetchTestPackages = async () => {
    setIsLoading(true);
    try {
      const response = await getAllTestPackages();
      setTestPackages(response.data || []);
    } catch (err) {
      Swal.fire("Gagal", err?.response?.data?.message || "Gagal mengambil data.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestPackages();
  }, []);

  const handleCreateSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      await createTestPackage(formData);
      setIsCreateModalOpen(false);
      await fetchTestPackages();
      Swal.fire("Berhasil", "Test package berhasil ditambahkan.", "success");
    } catch (err) {
      Swal.fire("Gagal", err?.response?.data?.message || "Gagal menambahkan test package.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadTemplate = async () => {
    try {
      const data = await downloadPackageTemplate();
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "test-package-template.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
      Swal.fire("Berhasil", "Template berhasil diunduh.", "success");
    } catch (error) {
      Swal.fire("Gagal", "Gagal mengunduh template.", "error");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Yakin hapus?",
      text: "Tindakan ini tidak dapat dibatalkan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
    });
    if (!result.isConfirmed) return;

    setDeletingId(id);
    try {
      await deleteTestPackage(id);
      setTestPackages((current) => current.filter((pkg) => pkg.id !== id));
      Swal.fire("Berhasil", "Data berhasil dihapus", "success");
    } catch (err) {
      Swal.fire("Gagal", err?.response?.data?.message || "Gagal menghapus.", "error");
    } finally {
      setDeletingId(null);
    }
  };

  const handleEditClick = async (pkg) => {
    try {
      const response = await getTestPackageById(pkg.id);
      setEditingPackage(response.data);
      setIsEditModalOpen(true);
    } catch (err) {
      Swal.fire("Gagal", err?.response?.data?.message || "Gagal mengambil detail.", "error");
    }
  };

  const handleUpdateSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("description", formData.description);
      payload.append("price", formData.price);
      payload.append("discountPrice", formData.discountPrice);
      if (formData.image) payload.append("image", formData.image);

      await updateTestPackage(editingPackage.id, payload);
      setEditingPackage(null);
      setIsEditModalOpen(false);
      await fetchTestPackages();
      Swal.fire("Berhasil", "Data berhasil diperbarui", "success");
    } catch (err) {
      Swal.fire("Gagal", err?.response?.data?.message || "Gagal memperbarui.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setEditingPackage(null);
    setIsEditModalOpen(false);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Package Dashboard</h1>

      <div className="flex justify-end gap-2 mb-4">
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tambah Test Package
        </button>
        <button
          onClick={handleDownloadTemplate}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download Template
        </button>
      </div>

      <div className="p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">Daftar Test Packages</h2>
        {isLoading ? (
          <p>Loading packages...</p>
        ) : testPackages.length > 0 ? (
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left">No</th>
                <th className="py-2 px-4 border-b text-left">Nama Package</th>
                <th className="py-2 px-4 border-b text-left w-1/2">Deskripsi</th>
                <th className="py-2 px-4 border-b text-left">Harga</th>
                <th className="py-2 px-4 border-b text-left">Harga Diskon</th>
                <th className="py-2 px-4 border-b text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {testPackages.map((pkg,i) => (
                <tr key={pkg.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b border-e">{++i}</td>
                  <td className="py-2 px-4 border-b border-e">{pkg.name}</td>
                  <td className="py-2 px-4 border-b border-e">{pkg.description}</td>
                  <td className="py-2 px-4 border-b border-e">Rp. {pkg.price}</td>
                  <td className="py-2 px-4 border-b border-e">Rp. {pkg.discountPrice}</td>
                  <td className="py-2 px-4 border-b border-e">
                    <button
                      onClick={() => handleEditClick(pkg)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    {/* <button onClick={() => handleDelete(pkg.id)} disabled={deletingId === pkg.id} className="bg-red-500 text-white px-3 py-1 rounded">
                      {deletingId === pkg.id ? "Menghapus..." : "Hapus"}
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No test packages found.</p>
        )}
      </div>

      <Dialog
        open={isCreateModalOpen}
        onClose={handleCancel}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-2xl w-full p-6 rounded shadow-lg">
            <CreateTestPackageForm
              onSubmit={handleCreateSubmit}
              onCancel={handleCancel}
              isSubmitting={isSubmitting}
            />
          </Dialog.Panel>
        </div>
      </Dialog>

      <Dialog
        open={isEditModalOpen}
        onClose={handleCancel}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-2xl w-full p-6 rounded shadow-lg">
            <Dialog.Title className="text-xl font-bold mb-4">
              Edit Test Package
            </Dialog.Title>
            <TestPackageForm
              onSubmit={handleUpdateSubmit}
              onCancel={handleCancel}
              isSubmitting={isSubmitting}
              initialData={editingPackage}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default TestPackage;
