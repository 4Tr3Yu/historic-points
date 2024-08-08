import React, { useEffect, useState } from "react";
import { ItemsList } from "../src/components/ItemsList";

const GameList = () => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetch('/api/games')
			.then(response => response.json())
			.then(data => {
				setGames(data);
				console.log(data)
			})
			.catch(error => {
				console.error('Error fetching games:', error);
			})
			.finally(() => {
				setLoading(false)
			});
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