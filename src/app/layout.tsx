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
				<div className="mx-auto max-w-md p-6 sm:max-w-2xl sm:py-6 md:max-w-4xl lg:max-w-7xl ">
					<Navigation />
					{children}
				</div>
			</body>
		</html>
	);
}
