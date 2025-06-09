import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Blog - Kanade",
	description: "Kanade Sisidoのブログ．",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='jp'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
