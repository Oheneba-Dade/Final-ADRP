"use client";
import { useState } from "react";

export default function KeywordInput() {
	const [keywords, setKeywords] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			e.preventDefault();
			setKeywords([...keywords, inputValue.trim()]);
			setInputValue("");
		}
	};

	const removeKeyword = (index) => {
		setKeywords(keywords.filter((_, i) => i !== index));
	};

	return (
		<div className="flex items-center gap-4">
			<div className="flex flex-wrap items-center gap-2 p-2 border border-ashesi-red rounded-md w-96 min-h-[42px]">
				{/* Render Keywords */}
				{keywords.map((keyword, index) => (
					<span
						key={index}
						className="flex items-center gap-1 px-2 py-1 text-white bg-ashesi-red rounded-md"
					>
						{keyword}
						<button
							onClick={() => removeKeyword(index)}
							className="text-sm text-white hover:text-gray-200"
						>
							✕
						</button>
					</span>
				))}
				<input
					type="text"
					id="keywords"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Type and press Enter..."
					className="p-1 outline-none w-full"
				/>
			</div>
		</div>
	);
}
