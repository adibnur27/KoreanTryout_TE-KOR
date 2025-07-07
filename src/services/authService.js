
import axiosInstance from '../utils/axiosInstance';
import { saveToken } from "../utils/token";

/**
 * @function login
 * @param {Object} credentials - { username, password }
 * @returns {Promise<Object>} response.data.data
 */
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials);

    const tokenData = response.data.data?.token;
    const userData = response.data.data?.user;

    if (tokenData?.accessToken) {
      saveToken(tokenData.accessToken);
      // Optional: Simpan refreshToken dan user ke localStorage
      localStorage.setItem("refreshToken", tokenData.refreshToken);
    }

    return response.data.data; // return hanya bagian data (user dan token)
  }  catch (error) {
    const message =
      error.response?.data?.message || error.message || "Username atau Password yang anda masukkan salah.";
    throw new Error(message); // penting agar ditangkap di catch Login.jsx
  }
};

/**
 * @function register
 * @param {Object} data - { fullName, username, email, password }
 * @returns {Promise<Object>} response.data
 */
export const register = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Registrasi gagal.' };
  }
};

export const forgotPassword = async ({ email }) => {
  try {
    const res = await axiosInstance.post("/auth/forgot-password", { email });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Gagal kirim link reset" };
  }
};

export const resetPassword = async ({ token, newPassword, confirmPassword }) => {
  try {
    const res = await axiosInstance.post("/auth/reset-password", {
      token,
      newPassword,
      confirmPassword,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Gagal reset password" };
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const response = await axiosInstance.post("/auth/refresh", refreshToken);
    return response.data.data; // Mengembalikan data token baru
  } catch (error) {
    throw error.response?.data || { message: "Gagal refresh token." };
  }
};


/**
 * @function loginAdmin
 * @param {Object} credentials - { username, password }
 * @returns {Promise<Object>} response.data.data
 */
export const loginAdmin = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);

  const tokenData = response.data.data?.token;
  if (tokenData?.accessToken) {
    saveToken(tokenData.accessToken);
    localStorage.setItem("refreshToken", tokenData.refreshToken);
  }

  return response.data.data;
};