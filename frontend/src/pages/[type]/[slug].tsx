import { markdownToHtml } from "@/lib/markdownTohtml";
import styles from "./[slug].module.css";
import { BlogPostParams } from "@/lib/getposts";
import { getPostBySlug } from "@/lib/getposts";
import PostBody from "@/components/blog/postBody";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { tagstringToArray } from "@/lib/filter";

type Props = {
    blog: BlogPostParams;
    content: string;
    tags: string[];
};

export default function Blog({ blog, content, tags }: Props) {
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <Breadcrumb />
            </header>

            <div className={styles.content}>
                <h1>{blog.title}</h1>
                <h2>{blog.date} </h2>
                <PostBody content={content} />
            </div>
        </div>
    );
}

export const getServerSideProps = async (blog: any) => {
    const blogPost = await getPostBySlug(blog.params.slug);
    if (!blogPost) {
        return {
            notFound: true,
        };
    }
    const content = await markdownToHtml(blogPost.content || "");
    const tags = tagstringToArray(blogPost.tags);
    // console.log(blogPost);
    return {
        props: {
            blog: blogPost,
            content,
            tags,
        },
    };
};
