import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ecommerce",
	description: "Ecommerce website built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation />
				<div className="mx-auto mb-5 max-w-md px-6 pt-24 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
					{children}
				</div>
			</body>
		</html>
	);
}
