import { postFilter } from "@/lib/postFilter";
import Card, { BlogCardParams } from "./card";
import styles from "./list.module.css";
/**
Path: src/components/blog/list.module.css
.list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
 */

type Props = {
    blogs: BlogCardParams[];
    startIndex?: number;
    endIndex?: number;
    type: string;
};

export default function List({
    blogs,
    startIndex = 0,
    endIndex = 999,
    type,
}: Props) {
     if (type) {
         blogs = postFilter(blogs, type);
     }
    const slicedPosts = blogs.slice(startIndex, endIndex);
    if (!type)  return <div></div>;
    return (
        <div className={styles.list}>
            {slicedPosts.map((blog) => (
                <Card
                    key={blog.slug}
                    title={blog.title}
                    date={blog.date}
                    slug={blog.slug}
                    author={blog.author}
                    type={blog.type}
                />
            ))}
        </div>
    );
}
