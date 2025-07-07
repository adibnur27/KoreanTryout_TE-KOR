
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

export const fetchVocabulariesByCategory = async (category) => {
  const response = await axiosInstance.get(`/vocabularies?category=${category}`);
  console.log(response);
  return response.data.data;
};


export const deleteVocabulary = async (vocabularyId) => {
  const response = await axiosInstance.delete(`/vocabularies/${vocabularyId}`);
  return response.data;
};
