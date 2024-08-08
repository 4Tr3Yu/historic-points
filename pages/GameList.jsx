import React, { useEffect, useState } from "react";
import { ItemsList } from "../src/components/ItemsList";
import Modal from "../src/components/Modal";

const GameList = () => {
	const [games, setGames] = useState([]);
	const [newGame, setNewGame] = useState({ name: '', genre: '', tags:[] });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		getGames();
	}, [])

	const getGames = async () => {
		await fetch('api/games')
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
			<section className="top flex justify-between px-4 mb-5">
				<h2 className="text-2xl">Game List</h2>
				<Modal >
					<form onSubmit={handleCreateGame}>
						<input
						type="text"
						placeholder="Name"
						value={newGame.name}
						onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
						/>
						<input
						type="text"
						placeholder="Genre"
						value={newGame.genre}
						onChange={(e) => setNewGame({ ...newGame, genre: e.target.value })}
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