import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const VocabList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [vocabularies, setVocabularies] = useState([]);
  const [error, setError] = useState("");

  // Fetch kategori vocab
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await axiosInstance.get("/vocabularies/categories");
        console.log(response.data.data);
        setCategories(response.data.data);
      } catch (err) {
        setError("Failed to load categories", err);
      }
    };
    loadCategories();
  }, []);

  // Fetch vocab berdasarkan kategori
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchVocabularies = async () => {
      try {
        const response = await axiosInstance.get(`/vocabularies?category=${selectedCategory}`);
        setVocabularies(response.data.data);
        console.log(response.data.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch vocabularies", err);
      }
    };

    fetchVocabularies();
  }, [selectedCategory]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Vocabulary Page</h1>

      {/* Dropdown */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">-- Choose a category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Vocabulary list */}
      <ul className="mt-4 space-y-2 font-serif">
        {vocabularies.map((vocab) => (
          <li key={vocab.id} className="border p-3 rounded shadow-sm">
            <strong>{vocab.koreanWord}</strong> — {vocab.translation}  - {vocab.romanization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VocabList;
