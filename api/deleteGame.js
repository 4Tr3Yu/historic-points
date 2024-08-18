import { createPool } from "@vercel/postgres";

export default async function handler(req, res) {
	try {
		console.log("Deleting game: ", req.query);
		const { name } = req.query;

		const pool = createPool({
			connectionString: process.env.DATABASE_URL,
		});

		const client = await pool.connect();
		const result = await client.query(
			"DELETE FROM games WHERE name = $1 RETURNING *",
			[name],
		);
		client.release();

		res.status(200).json(result.rows[0]);
	} catch (error) {
		console.error("Error deleting game:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
