import { BlogCardParams } from '../components/blog/card';

export const postFilter = (posts: BlogCardParams[], type : string) => {
    return posts.filter((post) => post.type === type);
}
