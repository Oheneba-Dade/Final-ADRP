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
	disabled = false,
	border = "",
	href,
	icon: Icon,
	iconPosition = "left",
	iconClassName = "text-xl text-white", // Custom icon styling
	className = "", // Additional styles for customization
  }) => {
	const buttonClass = `${bgColor} ${textColor} ${width} ${height} ${borderRadius} ${border} flex justify-center items-center gap-2 px-4 py-2 font-semibold transition duration-300 ease-in-out 
					hover:opacity-80 active:scale-95 ${className}`;
  
	const ButtonContent = (
	  <>
		{Icon && iconPosition === "left" && <Icon className={iconClassName} />}
		<span>{text}</span>
		{Icon && iconPosition === "right" && <Icon className={iconClassName} />}
	  </>
	);
  
	return href ? (
	  <Link href={href} className={buttonClass}>
		{ButtonContent}
	  </Link>
	) : (
	  <button disabled={disabled} className={buttonClass} onClick={onClick}>
		{ButtonContent}
	  </button>
	);
  };
  
  export default CustomButton;
  

// const CustomButton = ({
// 	text = "Click Me",
// 	bgColor = "bg-ashesi-red",
// 	textColor = "text-white",
// 	width = "w-40",
// 	height = "h-12",
// 	borderRadius = "rounded-md",
// 	onClick,
// 	border = "",
// 	href,
// }) => {
// 	const buttonClass = `${bgColor} ${textColor} ${width} ${height} ${borderRadius} ${border} flex justify-center items-center px-4 py-2 font-semibold transition duration-300 ease-in-out 
//                   hover:opacity-80 active:scale-95`;

// 	// If href is provided, render as a Link
// 	if (href) {
// 		return (
// 			<Link href={href} className={buttonClass}>
// 				{text}
// 			</Link>
// 		);
// 	}

// 	return (
// 		<button className={buttonClass} onClick={onClick}>
// 			{text}
// 		</button>
// 	);
// };

// export default CustomButton;
