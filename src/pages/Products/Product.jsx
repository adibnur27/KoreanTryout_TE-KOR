import React from "react";
import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Fotter";
import { InfiniteScroll } from "../../components/ui/InfiniteScroll";

const Product = () => {
  const items = [
    { content: "카드 뒤집기 게임" },
    { content: <p>Game Balik Kartu</p> },
    { content: "그리고 단어를 맞춰보세요" },
    { content: <p>Dan Tebak Kata</p> },
    { content: "지금 플레이" },
    { content: <p>Mainkan Sekarang</p> },
    { content: "카드 뒤집기 게임" },
    { content: <p>Game Balik Kartu</p> },
    { content: "그리고 단어를 맞춰보세요" },
    { content: <p>Dan Tebak Kata</p> },
    { content: "지금 플레이" },
    { content: <p>Mainkan Sekarang</p> },
  ];
  return (
    <div className="font-sans">
      <Navbar />
      <section className="py-16 min-h-screen pb-10 bg-gradient-to-t from-orange-400 pt-5 via-orange-100  to-orange-300">
        <div className="max-w-xl mx-auto mt-20">
          <div className="flex border-2 border-orange-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
            />
            {/* <button className="px-4 text-orange-500 text-lg ">🔍</button> */}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ProductCard 
            title="Judul Product Gratis"
            price={"Gratis"}
            subtitle="Subjudul Product Gratis"
            buttonText="Mulai"
            onButtonClick={() => console.log("Mulai diklik")}
          >
            <p>Gambar Product Gratis</p>
          </ProductCard>
          <ProductCard
            title="Permainan Flip-Card"
            subtitle="Tebak kata dan balikkkan kartunya. Permainan yang seru dan membuat kamu menghafal kosa kata satu persatu"
            buttonText="Mulai"
            onButtonClick={() => console.log("Mulai diklik")}
          >
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.1}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </ProductCard>
          <ProductCard 
            title="Judul Product Berbayar"
            subtitle="Subjudul Product BerBayar"
            normalPrice={"Rp 129.000"}
            price={"Rp 29.000"}
            buttonText="Mulai"
            onButtonClick={() => console.log("Mulai diklik")}
          >
            <p>Gambar Product Gratis</p>
          </ProductCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;