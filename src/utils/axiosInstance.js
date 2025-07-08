import axios from "axios";
import { getToken, saveToken, removeToken } from "./token";
import { refreshToken as callRefreshToken } from "../services/authService";
import { store } from "../App/store";
import { clearUser } from "../features/auth/authSlice";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.request.use((config) => {
  const noAuthEndpoints = [
    "/register",
    "/login",
    "/forgot-password",
    "/reset-password",
    "/auth/refresh", // Tambahkan endpoint refresh token
  ];

  const needsAuth = !noAuthEndpoints.some((endpoint) =>
    config.url.includes(endpoint)
  );

  if (needsAuth) {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Jika error bukan 401 atau 403, atau sudah mencoba refresh
    if (
      (error.response.status !== 401 && error.response.status !== 403) ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    // Jika sedang dalam proses refresh token, tambahkan permintaan ke antrian
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      removeToken();
      store.dispatch(clearUser());
      return Promise.reject(error);
    }

    try {
      const response = await callRefreshToken(refreshToken);
      const newAccessToken = response.accessToken;
      const newRefreshToken = response.refreshToken;

      saveToken(newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);

      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newAccessToken}`;
      processQueue(null, newAccessToken);

      return axiosInstance(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      removeToken();
      store.dispatch(clearUser());
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);



export default axiosInstance;
