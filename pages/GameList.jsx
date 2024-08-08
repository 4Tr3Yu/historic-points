import React, { useEffect, useState } from "react";
import { ItemsList } from "../src/components/ItemsList";

const GameList = () => {
	const [games, setGames] = useState([]);
	const [newGame, setNewGame] = useState({ name: '', genre: '', tags:[] });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		getGames();
	}, [])

	const getGames = async () => {
		await fetch('/api/games')
			.then(response => response.json())
			.then(data => {
				setGames(data);
				console.log('data from db',data)
			})
			.catch(error => {
				console.error('Error fetching games:', error);
			})
			.finally(() => {
				setLoading(false)
			});
	}

	const handleCreateGame = async () => {
		try {
			setLoading(true)
			const response = await fetch('/api/createGame', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newGame)
			});
			if (!response.ok) {
				throw new Error('Failed to create game');
			}
			const data = await response.json();
			setGames(games => [...games, data]);
			setNewGame({ name: '', genre: '', tags:[] });
		} catch (error) {
			console.error('Error creating game:', error);
		} finally {
			setLoading(false)
		}
	};

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