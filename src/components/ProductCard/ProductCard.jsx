import React from "react";

const ProductCard = ({ title }) => {
  return (
    <div className="border-2 border-orange-500 p-8 mb-6 relative">
      <h2 className="text-xl font-bold border border-orange-500 px-4 py-1 w-fit mx-auto">{title}</h2>
      <button className="absolute bottom-4 right-4 border border-orange-500 px-4 py-1 rounded hover:bg-orange-500 hover:text-white transition-all">
        Detail Product
      </button>
    </div>
  );
};

export default ProductCard;