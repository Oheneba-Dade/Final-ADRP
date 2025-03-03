"use client";
import CustomButton from "@/components/CustomButton";
import KeywordInput from "@/components/KeywordInput";
import { useState } from "react";

export default function Filter() {
	const [fromYear, setFromYear] = useState("1900");
	const [toYear, setToYear] = useState("2025");
	const [keywords, setKeywords] = useState([]);

	const handleFromChange = (e) => {
		let value = e.target.value.replace(/\D/g, "");
		if (value.length > 4) value = value.slice(0, 4);

		let numValue = parseInt(value, 10);
		if (isNaN(numValue) || numValue < 1900) numValue = 1900;
		if (numValue > toYear) numValue = toYear;

		setFromYear(numValue.toString());
	};

	const handleToChange = (e) => {
		let value = e.target.value.replace(/\D/g, "");
		if (value.length > 4) value = value.slice(0, 4);

		let numValue = parseInt(value, 10);
		if (isNaN(numValue) || numValue < fromYear) numValue = fromYear;
		if (numValue > 2100) numValue = 2100;

		setToYear(numValue.toString());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let collectionName =
			document.getElementsByName("collection-name")[0].value;
		console.log("Collection Name:", collectionName);
		console.log("Keywords:", keywords);
	};


	return ( 
		<form
			className="flex flex-col items-center bg-gray-50 py-8 rounded-lg justify-center mt-24 mb-8 ml-12 w-96 shadow-md"
			onSubmit={handleSubmit}
		>
			<div className="mb-8">
				<label
					htmlFor="search-collection"
					className="mb-4 text-gray-600"
				>
					Search by collection name{" "}
					<span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					className="w-96 outline-ashesi-red border border-ashesi-red rounded-md p-4"
					name="collection-name"
					required
				/>
			</div>

			<div className="mb-8">
				<label
					htmlFor="search-collection"
					className="mb-4 text-gray-600"
				>
					Search by keyword
				</label>
				<KeywordInput onKeywordsChange={setKeywords} />
			</div>

			<span className="text-center text-gray-600 mb-4">
				PUBLISHED FROM
			</span>
			<div className="flex justify-between w-full items-center mb-8">
				<input
					type="number"
					className="w-32 border border-ashesi-red rounded-md p-2 focus:outline-ashesi-red"
					placeholder="YYYY"
					value={fromYear}
					onChange={handleFromChange}
					onKeyDown={(e) => {
						if (["e", "E", "+", "-", "."].includes(e.key))
							e.preventDefault();
					}}
					onBlur={() => {
						if (!fromYear) setFromYear("1900");
					}}
				/>

				<span className="text-gray-600">TO</span>
				<input
					type="number"
					className="w-32 border border-ashesi-red rounded-md p-2 focus:outline-ashesi-red"
					placeholder="YYYY"
					value={toYear}
					onChange={handleToChange}
					onKeyDown={(e) => {
						if (["e", "E", "+", "-", "."].includes(e.key))
							e.preventDefault();
					}}
					onBlur={() => {
						if (!toYear) setToYear("2100");
					}}
				/>
			</div>
			<div className="mb-4">
				<CustomButton text="GO" width="w-80" />
			</div>
		</form>
	);
}
