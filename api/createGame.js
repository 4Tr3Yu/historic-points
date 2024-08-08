// api/createGame.js

import { createPool } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const { name, location , tags } = req.body;

    const pool = createPool({
      connectionString: process.env.DATABASE_URL
    });

    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO games (name, location, tags) VALUES ($1, $2, $3) RETURNING *',
      [name, location, tags]
    );
    client.release();

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
