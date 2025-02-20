import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} flex flex-col `}>
				<Navbar />
				<main className="flex-1">{children}</main>
				<Footer />	
			</body>
		</html>
	);
}
