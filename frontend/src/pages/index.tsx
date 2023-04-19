import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import List from "@/components/blog/list";
import { getAllposts } from "@/lib/getposts";
import { BlogCardParams } from "@/components/blog/card";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    blogs: BlogCardParams[];
};

export default function Home({ blogs }: Props) {
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
            <div className={styles.profile}>
                <div className={styles.profiletext}>
                    <h1>SEIEI NAGAHAMA</h1>
                    B3 student<br></br>
                    Dept. of ICS, Saitama University<br></br>
                    Age : 21 <br></br>
                    From : Sasebo, Nagasaki <br></br>
                    a.k.a : 2xsei<br></br>
                    {/* twitter icon */}
                    <a href="https://twitter.com/solehamugoiyo3">
                        <Image
                            priority={true}
                            src="/twitter.svg"
                            alt="twitter"
                            width={30}
                            height={30}
                        />
                    </a>
                    {/* github icon */}
                    <a href="https://github.com/seiei-n">
                        <Image
                            priority={true}
                            src="/github-mark.svg"
                            alt="github"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
                <a className={styles.profilepic}>
                    <Image
                        priority={true}
                        src="/face.webp"
                        alt="profile"
                        width={300}
                        height={300}
                    />
                </a>
            </div>
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
                        endIndex={3}
                        type="works"
                    />
                </div>
                <div className={styles.showmore}>
                    <Link href="/works">
                        <h2>Show More</h2>
                    </Link>
                </div>

                <div className={styles.content}>
                    <Link href="/blog">
                        <h1>Blog</h1>
                    </Link>
                </div>

                <div className={styles.bloglist}>
                    <List
                        blogs={blogs}
                        startIndex={0}
                        endIndex={3}
                        type="blog"
                    />
                </div>
                <div className={styles.showmore}>
                    <Link href="/blog">
                        <h2>Show More</h2>
                    </Link>
                </div>
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
