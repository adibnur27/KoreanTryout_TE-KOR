import React from "react";
import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Fotter";
import imgDflt from "../../assets/default-img.png";

const Tryouts = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">
        한
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[50%] right-[10%] rotate-[15deg] text-6xl opacity-10">
        글
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] left-1/2-translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">
        시
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[80%] right-[10%] -rotate-[15deg] text-6xl opacity-10">
        한
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[100%] left-[10%] rotate-[15deg] text-6xl opacity-10">
        글
      </span>
      <section className="py-16  pb-10 min-h-screen bg-gradient-to-t from-light-red pt-5 via-white  to-light-blue">
        <div className="max-w-xl mx-auto mt-20">
          <div className="flex border-2 border-black rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-gradient-to-l from-light-red via-white  to-light-blue"
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
            <img src={imgDflt} alt="No Image" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          </ProductCard>
          
          <ProductCard 
            title="Judul Product Berbayar"
            subtitle="Subjudul Product BerBayar"
            normalPrice={"Rp 129.000"}
            price={"Rp 29.000"}
            buttonText="Mulai"
            onButtonClick={() => console.log("Mulai diklik")}
          > 
            <img src={imgDflt} alt="No Image" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          </ProductCard>
          <ProductCard 
            title="Judul Product Berbayar"
            subtitle="Subjudul Product BerBayar"
            normalPrice={"Rp 129.000"}
            price={"Rp 29.000"}
            buttonText="Mulai"
            onButtonClick={() => console.log("Mulai diklik")}
          > 
            <img src={imgDflt} alt="No Image" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          </ProductCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tryouts;