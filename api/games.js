import { createPool } from "@vercel/postgres";

export default async function handler(req, res) {
	try {
		const pool = createPool({
			connectionString: process.env.POSTGRES_URL,
		});

		const client = await pool.connect();
		const result = await client.query("SELECT * FROM games");
		client.release();

		res.status(200).json(result.rows);
	} catch (error) {
		console.error("Error fetching games:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
