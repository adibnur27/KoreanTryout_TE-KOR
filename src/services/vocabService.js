// src/services/vocabService.js
import axiosInstance from "../utils/axiosInstance"; // pastikan sudah setup axiosInstance


export const fetchVocabCategories = async () => {
  const response = await axiosInstance.get("/vocabularies/categories");
  return response.data.data; // assumed backend response structure
};

export const fetchVocabulariesByCategory = async (category) => {
  const response = await axiosInstance.get(`/vocabularies?category=${category}`);
  return response.data.data;
};
