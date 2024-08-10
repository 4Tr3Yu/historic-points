import React, { useEffect, useState } from "react";
import { ItemsList } from "../src/components/ItemsList";
import Modal from "../src/components/Modal";

const GameList = () => {
	const [games, setGames] = useState([]);
	const [newGame, setNewGame] = useState({ name: '', location: '', tags:[] });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const gameLocations = [
		{ value: 'action', label: 'Action' },
		{ value: 'adventure', label: 'Adventure' },
		{ value: 'rpg', label: 'RPG' },
		{ value: 'strategy', label: 'Strategy' },
		{ value: 'sports', label: 'Sports' },
	];
	useEffect(() => {
		getGames();
	}, [])

	const getGames = async () => {
		try {
			const response  = await fetch('/api/games.js');
			if (!response.ok) {
				throw new Error('Failed fetching games')
			}
			const data = await response.json();
			setGames(data)
		} catch(error) {
			setError(error)
			console.log('Error fetching games: ', error)
		} finally {
			setLoading(false)
		}
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
			setError(error)
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
			<section className="top flex justify-between px-4 pb-5 mb-5 border-b">
				<h2 className="text-2xl">Game List</h2>
				<Modal >
					<form onSubmit={handleCreateGame}>
						<input

							type="text"
							placeholder="Name"
							value={newGame.name}
							onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
							/>
						<select>

						</select>
						<input
							type="text"
							placeholder="Genre"
							value={newGame.location}
							onChange={(e) => setNewGame({ ...newGame, location: e.target.value })}
						/>
						<button className="" type="submit">Add Game</button>
					</form>
				</Modal>
			</section>
			<section className="px-4">
				<ItemsList items={games}/>
			</section>
			
		</>
	)
}

export default GameList;