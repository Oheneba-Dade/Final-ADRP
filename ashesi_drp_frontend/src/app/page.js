import Navbar from "@/components/Navbar";
import "./globals.css"; // Import global styles if needed

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main className="min-h-screen">{children}</main>
			</body>
		</html>
	);
}
