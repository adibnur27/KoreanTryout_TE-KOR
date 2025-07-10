import axiosInstance from "../utils/axiosInstance";

/**
 * @description Mengambil semua data Bundle yang tersedia.
 */
export const getAllBundles = async () => {
  const response = await axiosInstance.get("/bundles");
  return response.data.data;
};

/**
 * @description Mengambil semua TestPackage yang tersedia.
 */
export const getAllPackages = async () => {
  const response = await axiosInstance.get("/test-packages/all");
  return response.data;
};

/**
 * @description Mengambil bundles yang tersedia by id.
 */

export const getBundlesById = async (id) => {
  const response = await axiosInstance.get(`/bundles/${id}`);
  return response.data;
};


export const createBundle = async (bundleData) => {
  return axiosInstance.post("/bundles", {
    // highlight-line
    name: bundleData.name,
    description: bundleData.description,
    imageUrl: bundleData.imageUrl,
    price: bundleData.price,
    packageIds: bundleData.packageIds, // highlight-line
  });
};

/**
 * @description Memperbarui data Bundle berdasarkan ID.
 * @param {string} bundleId - ID dari bundle yang akan diperbarui.
 * @param {object} updateData - Data bundle yang ingin diperbarui (opsional).
 */
export const updateBundle = async (bundleId, updateData) => {
  const response = await axiosInstance.patch(
    `/bundles/${bundleId}`,
    updateData
  );
  return response.data;
};

/**
 * @description Menghapus Bundle berdasarkan ID.
 * @param {string} bundleId - ID dari bundle yang akan dihapus.
 */
export const deleteBundle = async (bundleId) => {
  const response = await axiosInstance.delete(`/bundles/${bundleId}`);
  return response.message;
}
