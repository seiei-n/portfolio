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
};

export default function List({ blogs }: Props) {
    return (
        <div className={styles.list}>
            {blogs.map((blog) => (
                <Card
                    title={blog.title}
                    date={blog.date}
                    slug={blog.slug}
                    key={blog.slug}
                />
            ))}
        </div>
    );
}
