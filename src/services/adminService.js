import axiosInstance from "../utils/axiosInstance"; // sesuaikan jika kamu sudah buat axiosInstance

export const getAllUsers = async () => {
  const response = await axiosInstance.get("/users/all");
  return response.data.data;
};

/**
 * Mengunggah atau memperbarui gambar profil pengguna.
 * @param {File} file - File gambar yang akan diunggah.
 * @returns {Promise<Object>} Data respons dari server yang berisi URL avatar baru.
 */
export const updateProfilePicture = async (file) => {
  try {
    const token = localStorage.getItem("accessToken");
    const formData = new FormData();
    formData.append('avatar', file);
    
    const response = await axiosInstance.post(
      "/users/avatar",
      formData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    return response.data;

  } catch (error) {
    console.error("Gagal memperbarui foto profil:", error.response?.data || error.message);
    throw error;
  }
};
