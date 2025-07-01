import React from "react";

const Button = ({ children, onClick, width, height, paddingBottom}) => {
  return (
    <button
      onClick={onClick}
      className='bg-kr-blue text-white px-6 rounded-xl text-lg font-semibold hover:bg-light-blue hover:text-black hover:border-kr-blue border-2 shadow font-inter'
      style={{
        width: width,
        height: height,
        padding: paddingBottom,
      }}
    >
      {children}
    </button>
  );
};

export default Button;