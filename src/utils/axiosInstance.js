import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Ganti sesuai URL API-mu
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor bisa ditambahkan jika perlu token otomatis
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;