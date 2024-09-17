import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function BackButton({ classes }) {
	return (
		<Link to="/" className={`text-sm  text-amber-300 hover:underline ${classes}`}>
			<IoChevronBackOutline className="inline"/>
 			Volver
 		</Link>
	)
}