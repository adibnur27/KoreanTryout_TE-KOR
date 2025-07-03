import axiosInstance from "../utils/axiosInstance";

export const getProfile = async () => {
  console.log("getProfile dipanggil");
  try {
    const response = await axiosInstance.get("/users");
    console.log("API response:", response);
    return response.data;
  } catch (error) {
    console.error("Gagal getProfile:", error); // <== debug error
    throw error;
  }
};
