import React, { useEffect, useState } from "react";
import { ItemsList } from "../src/components/ItemsList";
import Modal from "../src/components/Modal";
import AddGameForm from "../src/components/addgame/Form";
import { useLoading } from "../src/lib/loader";


const GameList = () => {
	const [games, setGames] = useState([]);
	const [error, setError] = useState(null);
	const { showLoading, hideLoading } = useLoading();

	
	useEffect(() => {
		getGames();
	}, [])

	const getGames = async () => {
		showLoading();
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
			hideLoading();
		}
	}
	
	return (
		<>
			<section className="top flex justify-between px-4 pb-5 mb-5 border-b">
				<h2 className="text-2xl">Listado de Juegos</h2>
				<Modal >
					<AddGameForm setGames={setGames} games={games}/>
				</Modal>
			</section>
			<section className="px-4">
				<ItemsList items={games}/>
			</section>
			
		</>
	)
}

export default GameList;