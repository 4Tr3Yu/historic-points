import { GiLibertyWing, GiSharpAxe, GiWizardStaff } from "react-icons/gi";

export default function LocationIcon({location}) {
	console.log(location)
	const gameLocations = {
		f: { name: "Felipe", icons: GiWizardStaff },
		p: { name: "Poli", icons: GiLibertyWing },
		n: { name: "Natty", icons: GiLibertyWing },
		j: { name: "Jo", icons: GiSharpAxe },
		o: { name: "Otro 😟", icons: "👑" }
	}
	return (
		<span className="">
			{gameLocations[location].name} {gameLocations[location].icons}
		</span>
	);
}