import { createPool } from "@vercel/postgres";

export default async function handler(req, res) {
	try {
		console.log("Updating game: ", req.body);
		const { name, newName, location, tags } = req.body;

		const pool = createPool({
			connectionString: process.env.DATABASE_URL,
		});

		const client = await pool.connect();
		const result = await client.query(
			"UPDATE games SET name = $1, location = $2, tags = $3 WHERE name = $4 RETURNING *",
			[newName, location, tags, name],
		);
		client.release();

		res.status(200).json(result.rows[0]);
	} catch (error) {
		console.error("Error updating game:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
