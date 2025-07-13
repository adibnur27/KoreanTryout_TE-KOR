import React from "react";

const LoadingCircle = ({ size = 24, color = "#000" }) => {
  return (
    <div
      className="animate-spin rounded-full border-4 border-t-transparent"
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderTopColor: "transparent",
      }}
    />
  );
};

export default LoadingCircle;
