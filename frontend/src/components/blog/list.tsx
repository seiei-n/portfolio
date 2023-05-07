import { postFilter, postFilterByLang } from "@/lib/filter";
import Card, { BlogCardParams } from "./card";
import styles from "./list.module.css";
import { postFilterByTag } from "@/lib/filter";


type Props = {
    blogs: BlogCardParams[];
    startIndex?: number;
    endIndex?: number;
    type: string;
    lang?: string;
    tags?: string[];
};

export default function List({
    blogs,
    startIndex = 0,
    endIndex = 999,
    type,
    tags = [],
    lang,
}: Props) {
    if (type) {
        blogs = postFilter(blogs, type);

    }
    if (lang) {
        blogs = postFilterByLang(blogs, lang);
    }

    if (tags.length > 0) {

        for (let i = 0; i < tags.length; i++) {
            blogs = postFilterByTag(blogs, tags[i]);
        }
    }

    const slicedPosts = blogs.slice(startIndex, endIndex);
    if (!type) return <div></div>;
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
                    lang={blog.lang}
                    tags={blog.tags}
                />
            ))}
        </div>
    );
}
