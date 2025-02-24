"use client";
import { useState } from "react";

export default function DynamicFieldGroup({ labelText, fields, namePrefix }) {
	// Ensure fields is always an array
	const safeFields =
		Array.isArray(fields) && fields.length > 0
			? fields
			: [{ type: "text", placeholder: "Enter text", name: "field" }];

	const [fieldGroups, setFieldGroups] = useState([
		createEmptyGroup(safeFields),
	]);

	function createEmptyGroup(fields) {
		return fields.map((field) => ({
			type: field.type,
			name: field.name || "field", // Assign a name if not provided
			placeholder: field.placeholder || "",
			value: field.type === "file" ? null : "",
		}));
	}

	const handleChange = (groupIndex, fieldIndex, value) => {
		const updatedGroups = [...fieldGroups];
		updatedGroups[groupIndex][fieldIndex].value = value;
		setFieldGroups(updatedGroups);
	};

	const addGroup = () => {
		setFieldGroups([...fieldGroups, createEmptyGroup(safeFields)]);
	};

	const removeGroup = (index) => {
		if (fieldGroups.length > 1) {
			setFieldGroups(fieldGroups.filter((_, i) => i !== index));
		}
	};

	return (
		<div className="flex items-center gap-4 mb-8">
			<label className="w-40 text-left">
				{labelText} <span className="text-red-500">*</span>
			</label>
			<div className="flex flex-col gap-2 w-3/4">
				{fieldGroups.map((group, groupIndex) => (
					<div key={groupIndex} className="flex items-center gap-4">
						{group.map((field, fieldIndex) => (
							<input
								key={fieldIndex}
								type={field.type}
								name={`${namePrefix}[${groupIndex}][${field.name}]`}
								value={
									field.type === "text"
										? field.value
										: undefined
								}
								onChange={(e) =>
									handleChange(
										groupIndex,
										fieldIndex,
										field.type === "file"
											? e.target.files[0]
											: e.target.value
									)
								}
								className="rounded-md w-full p-2 border border-ashesi-red focus:outline-ashesi-red"
								placeholder={field.placeholder}
							/>
						))}

						{/* Buttons */}
						{groupIndex === 0 ? (
							<button
								onClick={addGroup}
								type="button"
								className="p-2 bg-white text-ashesi-red border rounded-full border-ashesi-red hover:bg-ashesi-red hover:text-white"
							>
								+
							</button>
						) : (
							<button
								onClick={() => removeGroup(groupIndex)}
								type="button"
								className="p-2 bg-white text-ashesi-red border rounded-full border-ashesi-red hover:bg-ashesi-red hover:text-white"
							>
								-
							</button>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
