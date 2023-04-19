import { markdownToHtml } from "@/lib/markdownTohtml";
import styles from "./[slug].module.css";
import { BlogPostParams } from "@/lib/getposts";
import { getPostBySlug } from "@/lib/getposts";
import PostBody from "@/components/blog/postBody";
import { Breadcrumb } from "@/components/layout/breadcrumb";

type Props = {
    blog: BlogPostParams;
    content: string;
};

export default function Blog({ blog, content }: Props) {
    return (
        <div className={styles.main}>
            <div className={styles.breadcrumb}>
                <Breadcrumb />
            </div>
            <div className={styles.content}>
                <h1>{blog.title}</h1>
                <h2>{blog.date} </h2>
                <h4>{blog.author}</h4>
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
    // console.log(blogPost);
    return {
        props: {
            blog: blogPost,
            content,
        },
    };
};
