import { markdownToHtml } from "@/lib/markdownTohtml";
import styles from "./[slug].module.css";
import { BlogPostParams, getAllposts, getPostsBySlugAndLang, getSlugsbyType } from "@/lib/getposts";
import PostBody from "@/components/post/postBody";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { tagstringToArray } from "@/lib/filter";
import Link from "next/link";
import { useRouter } from "next/router";
import { get } from "http";
import c from "refractor/lang/c";

type Props = {
    blog: BlogPostParams;
    post_en: BlogPostParams;
    post_ja: BlogPostParams;
    content_en: string;
    content_ja: string;
    tags_en: string[];
    tags_ja: string[];
};

export default function Blog({
    post_en,
    post_ja,
    content_en,
    content_ja,
    tags_en,
    tags_ja,
}: Props) {
    return (
        <>
            <div className={styles.main} style={{ display: "var(--lang_en)" }}>
                <header className={styles.header}>
                    <Breadcrumb />
                </header>

                <div className={styles.content}>
                    <h1>{post_en.title}</h1>
                    <h2>{post_en.date} </h2>
                    <div className={styles.tags}>
                        {tags_en[0] ? (
                            <Link
                                href={{
                                    pathname: `/${post_en.type}`,
                                    query: { tag: tags_en[0] },
                                }}
                                className={styles.tag}
                            >
                                {tags_en.map((tag) => (
                                    <p key={tag}> {tag}</p>
                                ))}
                            </Link>
                        ) : (
                            <p></p>
                        )}
                    </div>
                    <PostBody content={content_en} />
                </div>
            </div>
            <div className={styles.main} style={{ display: "var(--lang_jp)" }}>
                <header className={styles.header}>
                    <Breadcrumb />
                </header>

                <div className={styles.content}>
                    <h1>{post_ja.title}</h1>
                    <h2>{post_ja.date} </h2>
                    <div className={styles.tags}>
                        {tags_ja[0] ? (
                            <Link
                                href={{
                                    pathname: `/${post_ja.type}`,
                                    query: { tag: tags_ja[0] },
                                }}
                                className={styles.tag}
                            >
                                {tags_ja.map((tag) => (
                                    <p key={tag}> {tag}</p>
                                ))}
                            </Link>
                        ) : (
                            <p></p>
                        )}
                    </div>
                    <PostBody content={content_ja} />
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async (blog: any) => {
    let blogPost_en = await getPostsBySlugAndLang(blog.params.slug, "en");
    let blogPost_ja = await getPostsBySlugAndLang(blog.params.slug, "ja");
    if (!blogPost_en) {
        blogPost_en = blogPost_ja;
    }

    if (!blogPost_ja) {
        blogPost_ja = blogPost_en;
    }
    const content_en = await markdownToHtml(blogPost_en?.content || "");
    const content_ja = await markdownToHtml(blogPost_ja?.content || "");
    const tags_en = tagstringToArray(blogPost_en?.tags || "");
    const tags_ja = tagstringToArray(blogPost_ja?.tags || "");
    return {
        props: {
            post_en: blogPost_en,
            post_ja: blogPost_ja,
            content_en,
            content_ja,
            tags_en,
            tags_ja,
        },
    };
};

export const getStaticPaths = async () => {
    const blogs = await getSlugsbyType("blog");
    const works = await getSlugsbyType("works");
  
    const paths =
        [
            ...blogs.map((blog) => ({
                params: {type : "blog", slug: blog },
            })),
            ...works.map((work) => ({
                params: { type : "works", slug: work },
            })),
        ] || [];
        console.log(paths);
    return {
        paths,
        fallback: false,
    };
};
        