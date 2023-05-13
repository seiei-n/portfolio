import Head from "next/head";
import styles from "@/styles/Home.module.css";
import List from "@/components/post/list";
import { getAllposts } from "@/lib/getposts";
import { BlogCardParams } from "@/components/post/card";
import Link from "next/link";
import { Profile } from "@/components/layout/profile";
import { postFilter } from "@/lib/filter";

type Props = {
    blogs: BlogCardParams[];
};

export default function Home({ blogs }: Props) {
    const num1 = postFilter(blogs, "works").length;
    const num2 = postFilter(blogs, "blog").length;
    const n1 = num1 > 3 ? 3 : num1;
    const n2 = num2 > 3 ? 3 : num2;
    return (
        <>
            <Head>
                <title>Seiei&apos;s portfolio</title>
                <meta name="description" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Profile />
            <div className={styles.showmore}>
                <Link href="/about">
                    <div style={{}}>
                        <h2>About Me</h2>
                    </div>
                </Link>
            </div>
            <div className={styles.other} style={{ display: "var(--lang_jp)" }}>
                <div className={styles.content}>
                    <Link href="/works">
                        <h1>Works</h1>
                    </Link>
                </div>
                <div className={styles.bloglist}>
                    <List
                        blogs={blogs}
                        startIndex={0}
                        endIndex={n1}
                        type="works"
                        lang="ja"
                    />
                </div>
                {num1 > 3 && (
                    <div className={styles.showmore}>
                        <Link href="/works">
                            <h2 className={styles.showmore}>More</h2>
                        </Link>
                    </div>
                )}

                <div className={styles.content}>
                    <Link href="/blog">
                        <h1>Blog</h1>
                    </Link>
                </div>

                <div className={styles.bloglist}>
                    <List
                        blogs={blogs}
                        startIndex={0}
                        endIndex={n2}
                        type="blog"
                        lang="ja"
                    />
                </div>
                {num2 >= 3 && (
                    <div className={styles.showmore}>
                        <Link href="/blog">
                            <h2 className={styles.showmore}>More</h2>
                        </Link>
                    </div>
                )}
            </div>
            <div className={styles.other} style={{ display: "var(--lang_en)" }}>
                <div className={styles.content}>
                    <Link href="/works">
                        <h1>Works</h1>
                    </Link>
                </div>
                <div className={styles.bloglist}>
                    <List
                        blogs={blogs}
                        startIndex={0}
                        endIndex={n1}
                        type="works"
                        lang="en"
                    />
                </div>
                {num1 > 3 && (
                    <div className={styles.showmore}>
                        <Link href="/works">
                            <h2 className={styles.showmore}>More</h2>
                        </Link>
                    </div>
                )}

                <div className={styles.content}>
                    <Link href="/blog">
                        <h1>Blog</h1>
                    </Link>
                </div>

                <div className={styles.bloglist}>
                    <List
                        blogs={blogs}
                        startIndex={0}
                        endIndex={n2}
                        type="blog"
                        lang="en"
                    />
                </div>
                {num2 >= 3 && (
                    <div className={styles.showmore}>
                        <Link href="/blog">
                            <h2 className={styles.showmore}>More</h2>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const blogs = await getAllposts();
    return {
        props: {
            blogs,
        },
    };
}
