import React, { useState, useEffect } from "react";
import {
  uploadVocabularies,
  fetchVocabCategories,
  fetchVocabulariesByCategory,
  deleteVocabulary,
  downloadVocabulariesTemplate,
} from "../../../services/vocabService";

const VocabularyDashboard = () => {
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [vocabularies, setVocabularies] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isFetchingCategories, setIsFetchingCategories] = useState(false);
  const [isFetchingVocabs, setIsFetchingVocabs] = useState(false);
  const [deletingVocabId, setDeletingVocabId] = useState(null);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    setIsUploading(true);
    setError(null);
    try {
      await uploadVocabularies(file);
      const updatedCategories = await fetchVocabCategories();
      setCategories(updatedCategories);
      setFile(null);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "An error occurred during file upload."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteVocabulary = async (vocabularyId) => {
    if (!window.confirm("Are you sure you want to delete this vocabulary?"))
      return;
    setDeletingVocabId(vocabularyId);
    setError(null);
    try {
      await deleteVocabulary(vocabularyId);
      setVocabularies((prev) => prev.filter((v) => v.id !== vocabularyId));
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to delete vocabulary."
      );
    } finally {
      setDeletingVocabId(null);
    }
  };

  const handleSelectCategory = async (category) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    await fetchVocabularies(category, 0);
  };

  const fetchVocabularies = async (category, page) => {
    setIsFetchingVocabs(true);
    setError(null);
    try {
      const res = await fetchVocabulariesByCategory(category.name, page);
      console.log("API Response:", res); // 👉 debug
      console.log("Vocabularies:", res.content);
      setVocabularies(res.content);
      setTotalPages(res.totalPages);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          `Failed to fetch vocabularies for ${category.name}.`
      );
    } finally {
      setIsFetchingVocabs(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (selectedCategory) {
      fetchVocabularies(selectedCategory, page);
    }
  };

  const handleDownloadTemplate = async () => {
    try {
      const blob = await downloadVocabulariesTemplate();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "vocabularies-template.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      setError("Failed to download template.");
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      setIsFetchingCategories(true);
      try {
        const fetchedCategories = await fetchVocabCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to fetch categories."
        );
      } finally {
        setIsFetchingCategories(false);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vocabulary Dashboard</h1>

      {/* Upload Section */}
      <div className="mb-6 p-4 border rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-2">
          Upload Vocabulary Excel File
        </h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-2"
          accept=".xlsx, .xls, .csv"
        />
        <button
          onClick={handleUpload}
          disabled={isUploading || !file}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
        <button
          onClick={handleDownloadTemplate}
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        >
          Download Template
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category Sidebar */}
        <div className="md:col-span-1 p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Vocabulary Categories</h2>
          {isFetchingCategories && <p>Loading categories...</p>}
          <ul className="list-none">
            {categories.map((category) => (
              <li
                key={category.id}
                className="mb-2 p-2 rounded hover:bg-gray-100"
              >
                <span
                  onClick={() => handleSelectCategory(category)}
                  className={`cursor-pointer font-medium w-full block ${
                    selectedCategory?.id === category.id
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vocab List */}
        <div className="md:col-span-2 p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-2">
            Vocabularies {selectedCategory ? `in ${selectedCategory.name}` : ""}
          </h2>

          {isFetchingVocabs && <p>Loading vocabularies...</p>}
          {!isFetchingVocabs && !selectedCategory && (
            <p className="text-gray-500">
              Select a category to view vocabularies.
            </p>
          )}
          {!isFetchingVocabs &&
            selectedCategory &&
            vocabularies.length === 0 && (
              <p className="text-gray-500">
                No vocabularies found for this category.
              </p>
            )}

          {vocabularies.length > 0 && (
            <>
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">No</th>
                    <th className="py-2 px-4 border-b text-left">
                      Korean Word
                    </th>
                    <th className="py-2 px-4 border-b text-left">
                      Romanization
                    </th>
                    <th className="py-2 px-4 border-b text-left">
                      Translation
                    </th>
                    <th className="py-2 px-4 border-b text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vocabularies.map((vocab, i) => (
                    <tr key={vocab.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{++i}</td>
                      <td className="py-2 px-4 border-b">{vocab.koreanWord}</td>
                      <td className="py-2 px-4 border-b">
                        {vocab.romanization}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {vocab.translation}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <button
                          onClick={() => handleDeleteVocabulary(vocab.id)}
                          disabled={deletingVocabId === vocab.id}
                          className="bg-red-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
                        >
                          {deletingVocabId === vocab.id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i)}
                      className={`px-3 py-1 border rounded ${
                        currentPage === i
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VocabularyDashboard;
