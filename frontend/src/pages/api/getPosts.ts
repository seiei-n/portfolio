import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    _request: NextApiRequest,
    response: NextApiResponse
) {
    const client = await db.connect();
    try {
        const result = await client.query(`SELECT * FROM posts_dev`);
        const posts = result.rows.map((row) => {
            return {
                ...row,
            };
        });
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json({ error });
    } finally {
        client.release();
    }
}
