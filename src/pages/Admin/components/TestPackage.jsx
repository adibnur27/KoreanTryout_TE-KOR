import React, { useState, useEffect } from 'react';
import {
  createTestPackage,
  getAllTestPackages,
  deleteTestPackage,
  updateTestPackage,
  getTestPackageById,
} from '../../../services/testPackageService';

const TestPackageForm = ({ onSubmit, onCancel, isSubmitting, initialData = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    discountPrice: 0,
    image: null,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        description: initialData.description || '',
        price: initialData.price || 0,
        discountPrice: initialData.discountPrice || 0,
        image: null,
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const isNumberField = name === 'price' || name === 'discountPrice';
    setFormData((prev) => ({ ...prev, [name]: isNumberField ? Number(value) : value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-6 border rounded-md shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">{`Edit Test Package: ${initialData.name}`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Nama Paket" value={formData.name} onChange={handleInputChange} className="p-2 border rounded" required />
        <input type="text" name="description" placeholder="Deskripsi" value={formData.description} onChange={handleInputChange} className="p-2 border rounded col-span-1 md:col-span-2" />
        <input type="number" name="price" placeholder="Harga" value={formData.price} onChange={handleInputChange} className="p-2 border rounded" required />
        <input type="number" name="discountPrice" placeholder="Harga Diskon (opsional)" value={formData.discountPrice} onChange={handleInputChange} className="p-2 border rounded" />
        <input type="file" name="image" onChange={handleFileChange} className="p-2 border rounded col-span-1 md:col-span-2" accept="image/*" />
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Batal</button>
        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300">
          {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
      </div>
    </form>
  );
};

const TestPackage = () => {
  const [testPackages, setTestPackages] = useState([]);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);
  const [editingPackage, setEditingPackage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState(null);

  const fetchTestPackages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getAllTestPackages();
      setTestPackages(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch test packages.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestPackages();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }
    setIsUploading(true);
    setError(null);
    try {
      await createTestPackage({ file });
      await fetchTestPackages();
      setFile(null);
      document.getElementById('file-input').value = null;
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'An error occurred during file upload.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this test package?')) {
      return;
    }
    setDeletingId(id);
    setError(null);
    try {
      await deleteTestPackage(id);
      setTestPackages((currentPackages) =>
        currentPackages.filter((pkg) => pkg.id !== id)
      );
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to delete test package.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleEditClick = async (pkg) => {
    try {
      const response = await getTestPackageById(pkg.id);
      setEditingPackage(response.data);
    } catch (err) {
      setActionError(err.response?.data?.message || 'Failed to fetch package details.');
    }
  };

  const handleUpdateSubmit = async (formData) => {
    setIsSubmitting(true);
    setActionError(null);
    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('description', formData.description);
      payload.append('price', formData.price);
      payload.append('discountPrice', formData.discountPrice);
      if (formData.image) {
        payload.append('image', formData.image);
      }

      await updateTestPackage(editingPackage.id, payload);
      setEditingPackage(null);
      await fetchTestPackages();
    } catch (err) {
      setActionError(err.response?.data?.message || 'Failed to update test package.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setEditingPackage(null);
    setActionError(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Package Dashboard</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          {error}
        </div>
      )}

      {actionError && <div className="mb-4 text-center text-red-500 bg-red-100 p-2 rounded">{actionError}</div>}

      {!editingPackage && (
        <div className="mb-6 p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Upload Test Package (Excel)</h2>
          <input id="file-input" type="file" onChange={handleFileChange} className="mb-2" accept=".xlsx, .xls" />
          <button onClick={handleUpload} disabled={isUploading || !file} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400">
            {isUploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      )}

      {editingPackage && (
        <TestPackageForm
          onSubmit={handleUpdateSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
          initialData={editingPackage}
        />
      )}

      <div className="p-4 border rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Available Test Packages</h2>
        {isLoading ? (
          <p>Loading packages...</p>
        ) : testPackages.length > 0 ? (
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left">Package Name</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testPackages.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{pkg.name}</td>
                  <td className="py-2 px-4 border-b">{pkg.description}</td>
                  <td className="py-2 px-4 border-b">
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    }).format(pkg.price)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => handleEditClick(pkg)} className="bg-yellow-500 text-white px-3 py-1 rounded disabled:bg-gray-400 mr-2">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(pkg.id)} disabled={deletingId === pkg.id} className="bg-red-500 text-white px-3 py-1 rounded disabled:bg-gray-400">
                      {deletingId === pkg.id ? 'Menghapus...' : 'Hapus'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No test packages found.</p>
        )}
      </div>
    </div>
  );
};

export default TestPackage;
