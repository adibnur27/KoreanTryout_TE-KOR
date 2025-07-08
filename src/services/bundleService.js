import axiosInstance from "../utils/axiosInstance";

/**
 * @description [ADMIN] Membuat Bundle baru.
 * Fungsi ini hanya bisa diakses oleh admin.
 * @param {object} bundleRequest - Data untuk membuat bundle baru, sesuai dengan DTO `BundleRequest` di backend.
 * Contoh: { name: 'Paket Hemat A', description: 'Deskripsi paket', price: 50000, testPackageIds: ['id1', 'id2'] }
 * @returns {Promise<object>} Data respons dari server yang berisi bundle yang baru dibuat.
 */
export const createBundle = async (bundleRequest) => {
  const response = await axiosInstance.post("/bundles", bundleRequest);
  return response.data;
};

/**
 * @description Mengambil semua data Bundle yang tersedia.
 * @returns {Promise<object>} Data respons dari server yang berisi daftar semua bundle.
 */
export const getAllBundles = async () => {
  const response = await axiosInstance.get("/bundles");
  return response.data;
};

/**
 * @description Mengambil data Bundle tunggal berdasarkan ID.
 * @param {string} id - ID dari Bundle yang akan diambil.
 * @returns {Promise<object>} Data respons dari server yang berisi detail Bundle.
 */
export const getBundleById = async (id) => {
  const response = await axiosInstance.get(`/bundles/${id}`);
  return response.data;
};
