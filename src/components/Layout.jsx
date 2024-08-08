import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen bg-gradient-to-tr from-orange-800 via-amber-950 to-black">
			<header className="bg-black bg-opacity-50 text-white p-4">
				<h1 className="text-2xl font-bold">Juegos 🀄</h1>
			</header>
			<main className="p-4">
				{children}
			</main>
			<Footer/>
		</div>
	)
}

export default Layout;