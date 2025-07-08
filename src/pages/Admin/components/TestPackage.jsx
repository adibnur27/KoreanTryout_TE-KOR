import React, { useState, useEffect } from 'react';

import {
  createTestPackage,
  getAllTestPackages,
  deleteTestPackage
} from '../../../services/testPackageService';


const TestPackage = () => {
  const [testPackages, setTestPackages] = useState([]);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);

  /**
   * @description Fungsi untuk mengambil semua data test packages dari server.
   * Dijalankan sekali saat komponen pertama kali di-mount.
   */
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

  /**
   * @description Handler untuk menangani perubahan pada input file.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Event dari input file.
   */
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  /**
   * @description Handler untuk proses upload file.
   */
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

  /**
   * @description Handler untuk menghapus Test Package berdasarkan ID.
   * @param {string} id - ID dari test package yang akan dihapus.
   */
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this test package?')) {
      return;
    }
    setDeletingId(id);
    setError(null);
    try {
      await deleteTestPackage(id);
      setTestPackages(currentPackages =>
        currentPackages.filter(pkg => pkg.id !== id)
      );
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to delete test package.');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Package Dashboard</h1>

      {/* Bagian Menampilkan Error Terpusat */}
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}

      {/* Bagian Upload */}
      <div className="mb-6 p-4 border rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Upload Test Package (Excel)</h2>
        <input id="file-input" type="file" onChange={handleFileChange} className="mb-2" accept=".xlsx, .xls" />
        <button onClick={handleUpload} disabled={isUploading || !file} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400">
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>

      {/* Bagian Daftar Test Packages */}
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
              {testPackages.map(pkg => (
                <tr key={pkg.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{pkg.name}</td>
                  <td className="py-2 px-4 border-b">{pkg.description}</td>
                  <td className="py-2 px-4 border-b">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pkg.price)}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(pkg.id)}
                      disabled={deletingId === pkg.id}
                      className="bg-red-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
                    >
                      {deletingId === pkg.id ? 'Deleting...' : 'Delete'}
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