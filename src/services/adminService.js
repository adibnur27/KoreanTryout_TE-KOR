import axiosInstance from "../utils/axiosInstance"; // sesuaikan jika kamu sudah buat axiosInstance

export const getAllUsers = async () => {
  const response = await axiosInstance.get("/users/all");
  return response.data.data;
};
