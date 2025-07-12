import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { Navbar } from '../../../components/Navbar';
import { GameCard } from '../../../components/GameCard';
import { FadeContent } from '../../../components/ui/FadeContent';
import { Footer } from '../../../components/Fotter';
import { fetchVocabulariesByCategory } from '../../../services/vocabService';

const FlipCard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [vocabularies, setVocabularies] = useState([]);
  const [error, setError] = useState('');
  const [isFetchingVocabs, setIsFetchingVocabs] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch kategori vocab
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await axiosInstance.get("/vocabularies/categories");
        const categoryNames = response.data.data || [];
        setCategories(categoryNames.map(name => ({ id: name, name })));
      } catch (err) {
        setError("Failed to load categories");
      }
    };
    loadCategories();
  }, []);

  // Fetch vocab berdasarkan kategori & page
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchVocabularies = async (categoryName, page) => {
      setIsFetchingVocabs(true);
      setError(null);
      try {
        const res = await fetchVocabulariesByCategory(categoryName, page);
        setVocabularies(res.content || []);
        setTotalPages(res.totalPages || 0);
      } catch (err) {
        setError(
          err.response?.data?.message ||
          err.message ||
          `Failed to fetch vocabulary for ${categoryName}`
        );
      } finally {
        setIsFetchingVocabs(false);
      }
    };

    fetchVocabularies(selectedCategory.name, currentPage);
  }, [selectedCategory, currentPage]);

  return (
    <div className="min-h-screen max-w-full mx-auto bg-gradient-to-l from-light-red via-white  to-light-blue pt-40">
      <Navbar />

      {/* Animasi background */}
      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 top-[50%] right-[10%] rotate-[15deg] text-6xl opacity-10">글</span>
      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] left-1/2-translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">시</span>
      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 top-[80%] right-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 top-[90%] left-[10%] rotate-[15deg] text-6xl opacity-10">글</span>

      <h2 className='text-5xl font-bold text-center w-1/2 mx-auto font-montserrat'>
        GAME BALIK KARTU
      </h2>
      <h2 className='text-3xl font-medium text-center w-full mx-auto font-opensans mt-10'>
        Hafal Kosa Katanya Pelajari Penyebutannya Dan Cari Tahu Artinya 
      </h2>

      {/* Dropdown */}
      <div className="mb-4 pt-20 w-1/3 mx-auto">
        <select
          value={selectedCategory?.name || ""}
          onChange={(e) => {
            const selected = categories.find(cat => cat.name === e.target.value);
            setSelectedCategory(selected || null);
            setCurrentPage(0); // reset ke halaman pertama setiap ganti kategori
          }}
          className="border-2 border-black p-2 rounded w-full text-center font-opensans"
        >
          <option value="">-- Pilih Kategorinya Disini --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Vocabulary list */}
      <div className="mt-20 mb-10 min-h-screen font-serif flex gap-10 justify-around flex-wrap w-4/5 mx-auto bg-transparent">
        {isFetchingVocabs ? (
          <p className="text-center w-full">Loading...</p>
        ) : vocabularies.length === 0 ? (
          <p className="text-center w-full">Tidak ada data vocabulary untuk kategori ini.</p>
        ) : (
          vocabularies.map((vocab) => (
            <FadeContent
              key={vocab.id}
              blur={true}
              duration={500}
              easing="ease-out"
              initialOpacity={0}
            >
              <GameCard
                frontTopText={vocab.koreanWord}
                frontBottomText={vocab.romanization}
                backContent={vocab.translation}
              />
            </FadeContent>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 my-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Prev
          </button>
          <span className="font-semibold text-lg">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={currentPage + 1 >= totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FlipCard;
