import fs from "fs";
import path from "path";
import { BlogCardParams } from "../components/post/card";

const postdir = process.env.POSTS_DIR || "_posts";
console.log("postdir", postdir);

const postsDirectory = path.join(process.cwd(), "src", postdir);

export type BlogPostParams = {
    title: string;
    date: string;
    slug: string;
    content: string;
    author: string;
    type: string;
    lang: string;
    tags: string;
    thumbnail: string;
};

export const parseFrontMatter = <T extends object>(post: string) => {
    const [, frontMatter, ...content] = post.split("---");
    const parsedFrontMatter = frontMatter
        .split("\n")
        .filter((line) => line.trim() !== "")
        .reduce((acc, line) => {
            const [key, value] = line.split(":");
            return {
                ...acc,
                [key.trim().replace(/"/g, "")]: value.trim().replace(/"/g, ""),
            };
        }, {});

    return {
        frontMatter: parsedFrontMatter as T,
        content: content.join("---"),
    };
};

export const getAllposts = async () => {
    const paths = fs.readdirSync(postsDirectory);
    const posts = paths.map((p) => {
        const file = fs.readFileSync(path.join(postsDirectory, p));
        const parsed = parseFrontMatter<BlogCardParams>(file.toString());
        return {
            ...parsed.frontMatter,
        };
    });
    return posts;
};

export const getPostBySlug = async (slug: string) => {
    const paths = fs.readdirSync(postsDirectory);
    const post = paths
        .map((p) => {
            const file = fs.readFileSync(path.join(postsDirectory, p));
            const parsed = parseFrontMatter<BlogPostParams>(file.toString());
            return {
                ...parsed.frontMatter,
                content: parsed.content,
            };
        })
        .find((p) => p.slug === slug);
    //remove undefined
    if (!post) {
        return null;
    }
    return post;
};

export const getPostsBySlugAndLang = async (slug: string, lang: string) => {
    const paths = fs.readdirSync(postsDirectory);
    const post = paths
        .map((p) => {
            const file = fs.readFileSync(path.join(postsDirectory, p));
            const parsed = parseFrontMatter<BlogPostParams>(file.toString());
            return {
                ...parsed.frontMatter,
                content: parsed.content,
            };
        })
        .find((p) => p.slug === slug && p.lang === lang);
    //remove undefined
    if (!post) {
        return null;
    }

    return post;
};

export const getSlugsbyType = async (type: string) => {
    const paths = fs.readdirSync(postsDirectory);
    const posts = paths
        .map((p) => {
            const file = fs.readFileSync(path.join(postsDirectory, p));
            const parsed = parseFrontMatter<BlogPostParams>(file.toString());
            return {
                ...parsed.frontMatter,
                content: parsed.content,
            };
        })
        .filter((p) => p.type === type)
        .map((p) => p.slug);
    return posts;
}