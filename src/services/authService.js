// src/services/authService.js
import axiosInstance from '../utils/axiosInstance';

/**
 * @function login
 * @param {Object} data - { email, password }
 * @returns {Promise<Object>} response.data
 */
export const login = async (data) => {
  try {
    const response = await axiosInstance.post('/login', data);
    return response.data; // biasanya mengandung token atau user data
  } catch (error) {
    throw error.response?.data || { message: 'Login gagal' };
  }
};

/**
 * @function register
 * @param {Object} data - { username, email, password, confirmPassword }
 * @returns {Promise<Object>} response.data
 */
export const register = async (data) => {
  try {
    const response = await axiosInstance.post('/register', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Registrasi gagal' };
  }
};
