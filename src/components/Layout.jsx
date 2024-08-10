import React from "react";
import { Gi3dMeeple } from "react-icons/gi";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen bg-gradient-to-tr from-orange-800 via-amber-950 to-black">
			<header className="bg-black bg-opacity-50 text-white p-4">
				<h1 className="text-2xl font-bold">
					<Gi3dMeeple className="inline -mt-1 mr-1"/> Ludoteca 
				</h1>
			</header>
			<main className="container p-3 mx-auto min-h-screen pt-5 text-white">
				{children}
			</main>
			<Footer/>
		</div>
	)
}

export default Layout;