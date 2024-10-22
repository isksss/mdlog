import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "mdblog",
	description: "blog by markdown.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
