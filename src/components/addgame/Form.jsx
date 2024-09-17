"use client";
import { useState } from 'react';
import { useLoading } from '../../lib/loader';
export default function AddGameForm({ setGames, games }) {
	const [newGame, setNewGame] = useState({ name: '', location: '', tags:[] });
	const [genres, setGenres] = useState([]);
	const [error, setError] = useState(null);
	const { showLoading, hideLoading } = useLoading(); 
	const gameGenres = [
		{ value: "strategy", label: "Estrategia" },
		{ value: "party", label: "Fiesta" },
		{ value: "resources", label: "Recursos" },
		{ value: "puzzle", label: "Puzzle" },
		{ value: "tribia", label: "Tribia" },
		{ value: "building", label: "Construccion" },
		{ value: "manage", label: "Administracion" },
		{ value: "coop", label: "Cooperativo" },
	];
	const gameLocations = [
		{ value: "f", label: "Felipe"},
		{ value: "p", label: "Poli"},
		{ value: "n", label: "Natty"},
		{ value: "j", label: "Jo"},
		{ value: "o", label: "Otro 😟"}
	]
	const handleCreateGame = async (e) => {
		e.preventDefault();
		setNewGame({ ...newGame, tags: genres})
		try {
			showLoading();
			const response = await fetch('/api/createGame.js', {
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
			setGames([...games, data]);
			setNewGame({ name: '', genre: '', tags:[] });
		} catch (error) {
			setError(error)
			console.error('Error creating game:', error);
		} finally {
			hideLoading();
		}
	};
	return (
		<form onSubmit={handleCreateGame}>
			<div className="form-control mb-2">
				<label
					htmlFor="gameName"
					className="block text-sm font-lg font-bold text-amber-300"
				>
					Nombre:
				</label>
				<input
					id="gameName"
					type="text"
					placeholder="Nombre"
					value={newGame.name}
					onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
					required
					className="mt-1 block w-full px-3 py-2 border border-amber-300 bg-amber-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
				/>
			</div>
			<div className="form-control mb-2">
				<label
					htmlFor="location"
					className="block text-sm font-lg font-bold text-amber-300"
				>
					Quien lo tiene?:
				</label>
				<select
					id="location"
					value={newGame.location}
					onChange={(e) => setNewGame({ ...newGame, location: e.target.value })}
					required
					className="mt-1 block w-full pl-3 pr-10 py-2 border border-amber-300 bg-amber-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
				>
					<option value="" disabled>
						Seleccionar 1
					</option>
					{gameLocations.map((location) => (
						<option key={location.value} value={location.value}>
							{location.label}
						</option>
					))}
				</select>
			</div>

			<div className="form-control mb-5 hidden">
				<label
					htmlFor="genre"
					className="block text-sm font-lg font-bold text-amber-300"
				>
					Tags:
				</label>
				<select
					id="genre"
					value={genres}
					onChange={(e) =>
						setGenres(
							[...e.target.selectedOptions].map((option) => option.value),
						)
					}
					multiple
					required
					className="mt-1 block w-full pl-3 pr-10 py-2 border border-amber-300 bg-amber-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
				>
					{gameGenres.map((genre) => (
						<option key={genre.value} value={genre.value}>
							{genre.label}
						</option>
					))}
				</select>
			</div>

			<button
				className="w-full py-2 px-4 border border-amber-200 shadow-sm text-lg font-medium rounded-md text-white bg-amber-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
				type="submit"
			>
				Agregar
			</button>
		</form>
	);
}
