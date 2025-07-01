import axiosInstance from '../utils/axiosInstance';
import { saveToken } from "../utils/token";

/**
 * @function login
 * @param {Object} credentials - { username, password }
 * @returns {Promise<Object>} response.data.data
 */
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("/login", credentials);

    const tokenData = response.data.data?.token;
    const userData = response.data.data?.user;

    if (tokenData?.accessToken) {
      saveToken(tokenData.accessToken);
      // Optional: Simpan refreshToken dan user ke localStorage
      localStorage.setItem("refreshToken", tokenData.refreshToken);
      localStorage.setItem("user", JSON.stringify(userData));
    }

    return response.data.data; // return hanya bagian data (user dan token)
  } catch (error) {
    throw error.response?.data || { message: 'Username atau Password yang anda masukkan salah.' };
  }
};

/**
 * @function register
 * @param {Object} data - { fullName, username, email, password }
 * @returns {Promise<Object>} response.data
 */
export const register = async (data) => {
  try {
    const response = await axiosInstance.post('/register', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Registrasi gagal.' };
  }
};

export const forgotPassword = async ({ email }) => {
  try {
    const res = await axiosInstance.post("/forgot-password", { email });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Gagal kirim link reset" };
  }
};

export const resetPassword = async ({ token, newPassword, confirmPassword }) => {
  try {
    const res = await axiosInstance.post("/reset-password", {
      token,
      newPassword,
      confirmPassword,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Gagal reset password" };
  }
};