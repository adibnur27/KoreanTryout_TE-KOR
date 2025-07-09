// src/utils/token.js

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("adminToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};

