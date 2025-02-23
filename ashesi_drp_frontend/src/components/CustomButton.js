"use client"; 

import React from "react";
import Link from "next/link";

const CustomButton = ({
  text = "Click Me",
  bgColor = "bg-ashesi-red",
  textColor = "text-white",
  width = "w-40",
  height = "h-12",
  borderRadius = "rounded-md",
  onClick,
  href
}) => {
  
  const buttonClass = `${bgColor} ${textColor} ${width} ${height} ${borderRadius} flex justify-center items-center px-4 py-2 font-semibold transition duration-300 ease-in-out 
                  hover:opacity-80 active:scale-95`;

  // If href is provided, render as a Link
  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {text}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
