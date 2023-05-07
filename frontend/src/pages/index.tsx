import Head from "next/head";
import styles from "@/styles/Home.module.css";
import List from "@/components/blog/list";
import { getAllposts } from "@/lib/getposts";
import { BlogCardParams } from "@/components/blog/card";
import Link from "next/link";
import { Profile } from "@/components/layout/profile";
import { postFilter } from "@/lib/filter";

type Props = {
    blogs: BlogCardParams[];
};

export default function Home({ blogs }: Props) {
    const num1 = postFilter (blogs, "blog").length;
    const num2 = postFilter (blogs, "works").length;
    if (num1 > 3) {
        const num1 = 3;
    }
    if (num2 > 3) {
        const num2 =3;
    }
    return (
        <>
            <Head>
                <title>Seiei&apos;s portfolio</title>
                <meta name="description" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Profile />
            <div className={styles.other}>
                <div className={styles.content}>
                    <Link href="/works">
                        <h1>Works</h1>
                    </Link>
                </div>
                <div className={styles.bloglist}>
                    <List
                        blogs={blogs}
                        startIndex={0}
                        endIndex={num1+1}
                        type="works"
                    />
                </div>
                {num1 > 3 && (
                    <div className={styles.showmore}>
                        <Link href="/works">
                        <h1 className={styles.showmore}>More</h1>
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
                        endIndex={num2+1}
                        type="blog"
                    />
                </div>
                {num2  > 3 && (
                    <div className={styles.showmore}>
                        <Link href="/blog">
                        <h1 className={styles.showmore}>More</h1>
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
