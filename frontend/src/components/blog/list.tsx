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
};

export default function List({ blogs, startIndex=0 , endIndex =999}: Props) {
    const slicedBlogs = blogs.slice(startIndex, endIndex);
    return (
        <div className={styles.list}>
            {slicedBlogs.map((blog) => (
                <Card
                    title={blog.title}
                    date={blog.date}
                    slug={blog.slug}
                    author={blog.author}
                    key={blog.slug}
                />
            ))}
        </div>
    );
}
