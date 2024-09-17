import React, { useEffect, useState } from "react";
import CommonError from "../src/components/CommonError";
import ItemsList from "../src/components/ItemsList";
import BackButton from "../src/components/ui/BackButton";
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
			<section className="top flex flex-wrap justify-between px-4 pb-5 mb-5 border-b">
				<BackButton classes="w-full mb-4 opacity-70 hover:opacity-100"/>
				<h2 className="text-3xl md:text-4xl mb-2 gradient-title">Listado de Juegos</h2>
			</section>
			<section className="px-4">
				<ItemsList items={games} setGames={setGames}/>
				{error && <CommonError error={error}/>}
			</section>
			
		</>
	)
}

export default GameList;