import CustomButton from "@/components/CustomButton";
import KeywordInput from "@/components/KeywordInput";

export default function Filter() {
	return (
		<div className="flex flex-col items-center justify-center mt-96 w-64">
			<div className="mb-8">
				<label
					htmlFor="search-collection"
					className="mb-4 text-gray-600"
				>
					Search by collection name
				</label>
				<input
					type="text"
					className="w-96 outline-ashesi-red border border-ashesi-red rounded-md p-4"
				/>
			</div>

			<div className="mb-8">
				<label
					htmlFor="search-collection"
					className="mb-4 text-gray-600"
				>
					Search by keyword
				</label>
				<KeywordInput />
			</div>

			<div>
				<span className="text-center text-gray-600">
					PUBLISHED FROM
				</span>
			</div>
		</div>
	);
}
