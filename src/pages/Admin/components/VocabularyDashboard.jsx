import React, { useState, useEffect } from 'react';
import {
    uploadVocabularies,
    fetchVocabCategories,
    fetchVocabulariesByCategory,
    deleteVocabulary
} from '../../../services/vocabService';

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

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a file to upload.');
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
            setError(err.response?.data?.message || err.message || 'An error occurred during file upload.');
        } finally {
            setIsUploading(false);
        }
    };

    const handleDeleteVocabulary = async (vocabularyId) => {
        if (!window.confirm('Are you sure you want to delete this vocabulary?')) {
            return;
        }
        setDeletingVocabId(vocabularyId);
        setError(null);
        try {
            await deleteVocabulary(vocabularyId);
            setVocabularies(currentVocabs =>
                currentVocabs.filter(vocab => vocab.id !== vocabularyId)
            );
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Failed to delete vocabulary.');
        } finally {
            setDeletingVocabId(null);
        }
    };

    const handleSelectCategory = async (category) => {
        setSelectedCategory(category);
        setVocabularies([]);
        setIsFetchingVocabs(true);
        setError(null);
        try {
            const fetchedVocabs = await fetchVocabulariesByCategory(category.name);
            setVocabularies(fetchedVocabs);
        } catch (err) {
            setError(err.response?.data?.message || err.message || `Failed to fetch vocabularies for ${category.name}.`);
        } finally {
            setIsFetchingVocabs(false);
        }
    };

    useEffect(() => {
        const getCategories = async () => {
            setIsFetchingCategories(true);
            try {
                const fetchedCategories = await fetchVocabCategories();
                setCategories(fetchedCategories);
            } catch (err) {
                setError(err.response?.data?.message || err.message || 'Failed to fetch categories.');
            }
            setIsFetchingCategories(false);
        };
        getCategories();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Vocabulary Dashboard</h1>

            {/* Bagian Upload */}
            <div className="mb-6 p-4 border rounded shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Upload Vocabulary Excel File</h2>
                <input type="file" onChange={handleFileChange} className="mb-2" accept=".xlsx, .xls, .csv" />
                <button onClick={handleUpload} disabled={isUploading || !file} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400">
                    {isUploading ? 'Uploading...' : 'Upload'}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 p-4 border rounded shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">Vocabulary Categories</h2>
                    {isFetchingCategories && <p>Loading categories...</p>}
                    <ul className="list-none">
                        {categories.map(category => (
                            <li key={category.id} className="mb-2 p-2 rounded hover:bg-gray-100">
                                <span
                                    onClick={() => handleSelectCategory(category)}
                                    className={`cursor-pointer font-medium w-full block ${selectedCategory?.id === category.id ? 'text-blue-600' : 'text-gray-700'}`}
                                >
                                    {category.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2 p-4 border rounded shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">
                        Vocabularies {selectedCategory ? `in ${selectedCategory.name}` : ''}
                    </h2>
                    {isFetchingVocabs && <p>Loading vocabularies...</p>}
                    {!isFetchingVocabs && !selectedCategory && <p className="text-gray-500">Select a category to view vocabularies.</p>}
                    {!isFetchingVocabs && selectedCategory && vocabularies.length === 0 && <p className="text-gray-500">No vocabularies found for this category.</p>}

                    {vocabularies.length > 0 && (
                        <table className="min-w-full bg-white text-sm">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-2 px-4 border-b text-left">Korean Word</th>
                                    <th className="py-2 px-4 border-b text-left">Romanization</th>
                                    <th className="py-2 px-4 border-b text-left">Translation</th>
                                    <th className="py-2 px-4 border-b text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vocabularies.map(vocab => (
                                    <tr key={vocab.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b">{vocab.koreanWord}</td>
                                        <td className="py-2 px-4 border-b">{vocab.romanization}</td>
                                        <td className="py-2 px-4 border-b">{vocab.translation}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button
                                                onClick={() => handleDeleteVocabulary(vocab.id)}
                                                disabled={deletingVocabId === vocab.id}
                                                className="bg-red-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
                                            >
                                                {deletingVocabId === vocab.id ? 'Deleting...' : 'Delete'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VocabularyDashboard;