import Link from "next/link";
import React from "react";

export default function SocialIcon({ icon, link }) {
	return (
		<Link href={link} target="_blank" rel="noopener noreferrer">
			<div className="cursor-pointer bg-ashesi-gray text-white hover:bg-gray-900 hover:text-ashesi-red transition-colors duration-300 p-2">
				{React.createElement(icon, { size: 24 })}
			</div>
		</Link>
	);
}
