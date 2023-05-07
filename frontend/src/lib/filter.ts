import { BlogCardParams } from "../components/blog/card";

export const postFilter = (posts: BlogCardParams[], type: string) => {
    return posts.filter((post) => post.type === type);
};

export const postFilterByTag = (posts: BlogCardParams[], tag: string) => {
   const filteredPosts = posts.filter((post) => {
        const tags = post.tags.split(",");
        return tags.includes(tag);
    }
    );
    return filteredPosts;
};

export const tagstringToArray = (tags: string) => {
    return tags.split(",").map((tag) => tag.trim());
};
