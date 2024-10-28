import "./globals.css";

export const metadata = {
	title: "Docker",
	description: "App réalisé avec Docker",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="p-4 flex flex-col gap-4 from-indigo-500 to-blue-500 bg-gradient-to-tr bg-no-repeat min-h-screen">
				<p className="text-indigo-400 text-center text-3xl font-semibold">
					Docker
				</p>
				<div className="flex flex-col gap-4">{children}</div>
			</body>
		</html>
	);
}
