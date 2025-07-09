import axiosInstance from "../utils/axiosInstance";

/**
 * @description Mengambil semua data Bundle yang tersedia.
 */
export const getAllBundles = async () => {
  const response = await axiosInstance.get("/bundles");
  return response.data.data;
}

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
  return axiosInstance.post('/bundles', { // highlight-line
    name: bundleData.name,
    description: bundleData.description,
    imageUrl: bundleData.imageUrl,
    price: bundleData.price,
    packageIds: bundleData.packageIds // highlight-line
  });
};