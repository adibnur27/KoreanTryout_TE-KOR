import axiosInstance from "../utils/axiosInstance";

export const getProfile = async () => {

  try {
    const response = await axiosInstance.get("/users");
    return response.data.data;
  } catch (error) {
    console.error("Gagal getProfile:", error); // <== debug error
    throw error;
  }
};


export const changePassword = async ({ currentPassword, newPassword, confirmNewPassword }) => {
  const response = await axiosInstance.post("/users/change-password", {
    currentPassword,
    newPassword,
    confirmNewPassword,
  });

  return response.data;
};

export const updateFullName = async (fullName) => {
  const response = await axiosInstance.patch("/users", { fullName });
  return response.data.data; // ini adalah ProfileResponse
};