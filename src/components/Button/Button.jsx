import React from "react";

const Button = ({ children, onClick, width, height }) => {
  return (
    <button
      onClick={onClick}
      className='bg-orange-500 text-white px-6 rounded-xl text-lg font-semibold hover:bg-orange-600 shadow font-inter'
      style={{
        width: width,
        height: height,
      }}
    >
      {children}
    </button>
  );
};

export default Button;