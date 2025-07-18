import React from "react";

const Button = ({ 
  children, 
  onClick,
  type = "submit",
  width,
  height, 
  paddingBottom,
  borderRadius = "0.75rem",
  className = 'bg-kr-blue text-white px-6 rounded-xl text-lg font-semibold hover:bg-light-blue hover:text-black hover:border-kr-blue border-2 shadow font-inter'
}) => {
  return (
    <button
      type = {type}
      onClick={onClick}
      className={className}
      style={{
        width: width,
        height: height,
        padding: paddingBottom,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </button>
  );
};

export default Button;