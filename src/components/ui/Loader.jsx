import React from "react";
import { Gi3dMeeple } from "react-icons/gi";
import "../../styles/loader.scss";


export default function Loader() {
	return (
		<div className="loading-overlay">
			<div className="spinner">
				<Gi3dMeeple className="animate-spin text-6xl text-white"/>
			</div>
			<p>Loading...</p>
		</div>
	);
}