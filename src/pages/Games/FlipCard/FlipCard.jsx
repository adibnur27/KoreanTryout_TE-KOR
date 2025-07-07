import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import { Navbar } from '../../../components/Navbar';
import { GameCard } from '../../../components/GameCard';
import { FadeContent } from '../../../components/ui/FadeContent';
import { Footer } from '../../../components/Fotter';

const FlipCard = () => {
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
    <div className="min-h-screen max-w-full mx-auto bg-gradient-to-l from-light-red via-white  to-light-blue pt-40">
      <Navbar/>

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
      {/* <svg className='mx-auto mt-20' xmlns="http://www.w3.org/2000/svg" h mt-20eight="60px" viewBox="0 -960 960 960" width="60px" fill="#000000"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg> */}
      {/* Dropdown */}
      <div className="mb-4 pt-20 w-1/3 mx-auto">
        {/* <label className="block mb-1 font-medium text-xl">Permainan Balik Kartu</label> */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border-2 border-black p-2 rounded w-full text-center font-opensans"
        >
          <option value="">-- Pilih Kategorinya Disini --</option>
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
      <div className="mt-20 min-h-screen font-serif flex gap-10 justify-around flex-wrap w-4/5 mx-auto bg-transparent ">
        {[...vocabularies,...vocabularies].map((vocab) => (
      <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
            <GameCard frontTopText={vocab.koreanWord} frontBottomText={vocab.romanization} backContent={vocab.translation} />
      </FadeContent>
        ))}
      </div>
      
      <div className=''>
        
      <Footer/>
      </div>
    </div>
  )
}

export default FlipCard