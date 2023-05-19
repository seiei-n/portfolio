import { BlogCardParams } from "../components/post/card";

export const postFilter = (posts: BlogCardParams[], type: string) => {
    return posts.filter((post) => post.type === type);
};

export const postFilterByTag = (posts: BlogCardParams[], tag: string) => {
    const filteredPosts = posts.filter((post) => {
        const tags = post.tags.split(",");

        return tags.includes(tag);
    });

    return filteredPosts;
};

export const postFilterByLang = (posts: BlogCardParams[], lang: string) => {
    return posts.filter((post) => post.lang === lang);
};

export const tagstringToArray = (tags: string) => {
    return tags.split(",").map((tag) => tag.trim());
};


export const getTotalPostsbylangandtype = (posts: BlogCardParams[], lang: string, type: string, tag?: string) => 
{
    if  (tag)
    {
        return postFilterByTag(postFilterByLang(postFilter(posts, type), lang), tag).length;
    }
    else
    {
        return postFilterByLang(postFilter(posts, type), lang).length;
    }
   
}