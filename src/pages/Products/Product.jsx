import React from "react";
import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Fotter";

const Product = () => {
  return (
    <div className="font-sans">
      <Navbar />

      <section className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-xl mx-auto mb-10">
          <div className="flex border-2 border-orange-500 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none placeholder-gray-500"
            />
            <button className="px-4 text-orange-500 text-lg">🔍</button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ProductCard title="Product Gratis" />
          <ProductCard title="Game" />
          <ProductCard title="Product Bayar" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;