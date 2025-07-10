import axiosInstance from "../utils/axiosInstance";

/**
 * @description Membuat Test Package baru dari file Excel.
 * Menggunakan FormData karena endpoint di backend memakai 'multipart/form-data'.
 * @param {object} request - Object yang berisi data untuk form, umumnya termasuk file.
 * Contoh: { file: FileObject, otherField: 'value' }
 * @returns {Promise<object>} Data respons dari server.
 */
export const createTestPackage = async (request) => {
  const formData = new FormData();
  Object.keys(request).forEach(key => {
    formData.append(key, request[key]);
  });

  const response = await axiosInstance.post("/test-packages", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

/**
 * @description Memperbarui Test Package yang sudah ada berdasarkan ID.
 * @param {string} id - ID dari Test Package yang akan diupdate.
 * @param {object} updateData - Data baru untuk Test Package.
 * @returns {Promise<object>} Data respons dari server yang berisi Test Package yang sudah terupdate.
 */
export const updateTestPackage = async (id, updateData) => {
  const response = await axiosInstance.put(`/test-packages/${id}`, updateData);
  return response.data;
};

/**
 * @description Mengambil data Test Package tunggal berdasarkan ID.
 * @param {string} id - ID dari Test Package.
 * @returns {Promise<object>} Data respons dari server yang berisi detail Test Package.
 */
export const getTestPackageById = async (id) => {
  const response = await axiosInstance.get(`/test-packages/${id}`);
  return response.data;
};

/**
 * @description Menghapus Test Package berdasarkan ID.
 * @param {string} id - ID dari Test Package yang akan dihapus.
 * @returns {Promise<object>} Data respons dari server.
 */
export const deleteTestPackage = async (id) => {
  const response = await axiosInstance.delete(`/test-packages/${id}`);
  return response.data;
};

/**
 * @description Mengambil semua data Packages dan Bundles.
 * Sesuai dengan endpoint GET /api/v1/test-packages.
 * @returns {Promise<object>} Data respons dari server yang berisi daftar semua packages dan bundles.
 */
export const getAllPackagesAndBundles = async () => {
  const response = await axiosInstance.get("/bundles");
  return response.data;
};

/**
 * @description Mengambil semua data Test Packages.
 * Sesuai dengan endpoint GET /api/v1/test-packages/all.
 * @returns {Promise<object>} Data respons dari server yang berisi daftar semua test packages.
 */
export const getAllTestPackages = async () => {
  const response = await axiosInstance.get("/test-packages");
  return response.data;
};