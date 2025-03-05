"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/SearchBar";

export default function Navbar() {
	const pathname = usePathname();

	// Function to determine active styles
	const getLinkClass = (href) =>
		pathname === href
			? "font-normal border-b-2 border-ashesi-red pr-2"
			: "font-light hover:font-normal pr-2";

	return (
		<>
			{/* Navbar */}
			<div className="relative flex items-center gap-4 px-10 py-4 bg-white shadow-lg z-20">
				{/* Left Section */}
				<Link
					href="/"
					className="hidden md:flex w-1/4 gap-6 items-center"
				>
					<Image
						src="/images/logo.webp"
						alt="Ashesi Logo"
						width={45}
						height={45}
						className="object-contain"
					/>
					<div className="font-montserrat text-xl text-black">
						Data Repository
					</div>
				</Link>

				{/* Middle Section */}
				<div className="hidden md:flex w-1/2 items-center justify-center">
					<SearchBar />
				</div>

				{/* Right Section */}
				<div className="hidden md:flex w-1/4 gap-4 items-center justify-end">
					<Link href="/" className={getLinkClass("/")}>
						Home
					</Link>
					<Link href="/about" className={getLinkClass("/about")}>
						About
					</Link>
					<Link href="/auth" className={getLinkClass("/auth")}>
						Login
					</Link>
				</div>

				{/* Floating Div Below Navbar */}
				<div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-1/2 bg-white shadow-md p-4 text-center rounded-lg z-10 flex justify-around font-light">
					<Link href="/collections" className="hover:font-normal">
						Collections
					</Link>
					<Link href="/add_dataset" className="hover:font-normal">
						Contribute Dataset
					</Link>

					<Link href="/data_policy" className="hover:font-normal">
						Data Policy
					</Link>
				</div>
			</div>
		</>
	);
}
