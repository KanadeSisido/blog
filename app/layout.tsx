import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Blog - Kanade Sisido",
	description: "適当な情報科学生 Kanade Sisidoの日常+技術ブログ．",
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
