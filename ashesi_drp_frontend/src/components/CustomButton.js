"use client"; 

import React from "react";

const CustomButton = ({
  text = "Click Me",
  bgColor = "bg-ashesi-red",
  textColor = "text-white",
  width = "w-40",
  height = "h-12",
  borderRadius = "rounded-md",
  onClick,
}) => {
  return (
    <button
      onClick={onClick} 
      className={`${bgColor} ${textColor} ${width} ${height} ${borderRadius} 
                  px-4 py-2 font-semibold transition duration-300 ease-in-out 
                  hover:opacity-80 active:scale-95`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
