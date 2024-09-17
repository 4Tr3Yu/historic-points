export const handleDeleteGame = async (name) => {
	try {
		const response = await fetch(`/api/deleteGame/${id}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error("Failed to delete game");
		}
		fetchGames(); // Refresh the game list after deletion
	} catch (error) {
		console.error("Error deleting game:", error);
	}
};
