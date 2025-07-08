import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { GameCard } from "../../components/GameCard";
import { Footer } from "../../components/Fotter";
import { Navbar } from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  const items = [
    {
      frontTopText: "아빠",
      frontBottomText: "appa",
      backContent: "AYAH",
    },
    {
      frontTopText: "엄마",
      frontBottomText: "eomma",
      backContent: "IBU",
    },
  ];
  return (
    <div className="font-sans">
      <Navbar />
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[50%] right-[10%] rotate-[15deg] text-6xl opacity-10">글</span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] left-1/2-translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">시</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[80%] right-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[90%] left-[10%] rotate-[15deg] text-6xl opacity-10">글</span>
      <section className="py-16 min-h-screen pb-10 bg-gradient-to-t from-light-red pt-5 via-white  to-light-blue">
        <div className="max-w-xl mx-auto mt-20">
          <div className="flex border-2 border-black rounded-full overflow-hidden">
            <input type="text" placeholder="Search" className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-gradient-to-l from-light-red via-white  to-light-blue" />
            {/* <button className="px-4 text-orange-500 text-lg ">🔍</button> */}
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <ProductCard title="Game Balik Kartu" subtitle="Tebak kata dan balikkkan kartunya. Permainan yang seru dan membuat kamu menghafal kosa kata satu persatu" buttonText="Mulai" onButtonClick={() => navigate('/flipCard')}>
            <div className="flex gap-10">
              {items.map((item, i) => (
                <div key={i}>
                  <GameCard frontTopText={item.frontTopText} frontBottomText={item.frontBottomText} backContent={item.backContent} />
                </div>
              ))}
            </div>
          </ProductCard>
        </div>      
      </section>
      <Footer />
    </div>
  );
};

export default Games;
