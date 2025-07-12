import axiosInstance from "../utils/axiosInstance";

export const uploadVocabularies = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axiosInstance.post("/vocabularies/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const fetchVocabCategories = async () => {
  const response = await axiosInstance.get("/vocabularies/categories");
  const categoryNames = response.data.data;

  return categoryNames.map(name => ({
    id: name,   
    name: name, 
  }));
};

export const fetchVocabulariesByCategory = async (categoryName, page = 0, size = 10) => {
  console.log("Fetching vocab with:", { categoryName, page, size });
  const res = await axiosInstance.get(`/vocabularies`, {
    params: {
      category: categoryName,
      page,
      size,
    },
  });
  return res.data.data; // format: { content: [...], totalPages, number, ... }
};

export const deleteVocabulary = async (vocabularyId) => {
  const response = await axiosInstance.delete(`/vocabularies/${vocabularyId}`);
  return response.data;
};

export const downloadVocabulariesTemplate = async () => {
  const response = await axiosInstance.get('/download/vocabularies-template', {
    responseType: 'blob',
  });
  return response.data;
};