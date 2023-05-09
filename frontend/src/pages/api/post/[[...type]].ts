import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const type = req.query.type;
    const tag = req.query.tag;
   if (req.method === "GET") {
        let posts;
        if (type && tag) {
            console.log(req.query);
            posts = await getPostsByTypeAndTag(type.toString(), tag.toString());
        } else if (type) {
            console.log(req.query);
            posts = await getPostsByType(type.toString());
        } else {
            posts = await getAllPosts();
            console.log(posts);
        }
        res.status(200).json(posts.rows);
    }
}

function getAllPosts() {
    return db.query(
        `
        SELECT * FROM posts
        `
    );
}

function getPostsByType(type: string) {

    return db.query(
        `
        SELECT * FROM posts WHERE type = $1
        `,
        [type]
    );
}

function getPostsByTypeAndTag(type: string, tag: string) {
    return db.query(
        `
        SELECT * FROM posts WHERE type = $1 AND tag = $2
        `,
        [type, tag]
    );
}


