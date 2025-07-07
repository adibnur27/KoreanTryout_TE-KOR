import axios from "../utils/axiosInstance";

export const getAllTestPackages = async () => {
  try {
    const response = await axios.get("/test-packages");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch test packages:", error);
    throw error;
  }
};

export const getTestPackageById = async (id) => {
  try {
    const response = await axios.get(`/test-packages/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch test package by id:", error);
    throw error;
  }
};
