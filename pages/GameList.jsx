import React, { useEffect, useState } from "react";
import { ItemsList } from "../src/components/ItemsList";

const GameList = () => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getGame = async () => {
			try {
				
			} catch (error) {
				console.log('error', error)
				setError(error)
			} finally {
				setLoading(false)
			}
		};
		getGame();
	}, [])
	if ( loading ) {
		return <div className="loading">Loading...</div>
	}
	return (
		<>
			<h2>Game List</h2>
			<ItemsList items={games}/>
			
		</>
	)
}

export default GameList;