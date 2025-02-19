import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={montserrat.variable}>
			<body>{children}</body>
		</html>
	);
}
