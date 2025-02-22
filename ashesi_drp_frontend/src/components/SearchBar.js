"use client";

import { LuX, LuSearch } from "react-icons/lu";

import { useState } from "react";

export default function SearchBar() {
	const [searchText, setSearchText] = useState("");

	return (
		<div className="relative w-3/4">
			<input
				type="search"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				className="w-full h-12 pl-10 pr-10 border border-gray-700 
                           focus:border-ashesi-red focus:ring-1 focus:ring-ashesi-red 
                           outline-none text-center placeholder:text-center rounded-full
                           appearance-none text-sm md:texl-lg"
				placeholder="Search through database..."
			/>

			{/* Magnifying Glass (Hidden when there's text) */}
			{!searchText && (
				<LuSearch
					className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ashesi-red"
					size={20}
				/>
			)}

			{/* Custom Clear Button (Appears when there's text) */}
			{searchText && (
				<button
					className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ashesi-red hover:cursor-pointer"
					onClick={() => setSearchText("")}
				>
					<LuX size={20} />
				</button>
			)}
		</div>
	);
}
