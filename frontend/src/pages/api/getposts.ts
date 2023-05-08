import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const client = await db.connect();
    if (req.method === "GET") {
        const result = await client.query("SELECT * FROM posts_dev");
        const posts = result.rows.map((post) => {
            return {
                ...post,
                tags: post.tags.split(","),
            };
        });
        res.status(200).json(posts);
    }


}