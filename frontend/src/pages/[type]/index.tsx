import Card, { BlogCardParams } from "@/components/post/card";
import List from "@/components/post/list";
import { getAllposts } from "@/lib/getposts";
import styles from "./index.module.css";
import Pagination from "@/components/post/pagination";
import React, { useEffect } from "react";
import { useState } from "react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { useRouter } from "next/router";
import { getTotalPostsbylangandtype, postFilter } from "@/lib/filter";
import Link from "next/link";

type Props = {
    blogs: BlogCardParams[];
};

export default function Blog({ blogs }: Props) {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const router = useRouter();
    // To uppercase the first letter of the type
    const type = router.query.type;
    const Utype = functionToUppercaseFirstLetter(type as string);
    // Filter the posts by type
    const filteredPosts = postFilter(blogs, type as string);

    return (
        <>
            <div className={styles.main} style={{ display: "var(--lang_en)" }}>
                <div className={styles.header}>
                    <Breadcrumb />
                    <div className={styles.header2}>
                        <Link href={`/${type}`}>
                            <h1>{Utype}</h1>
                        </Link>

                        <h3>
                            {getTotalPostsbylangandtype(
                                blogs,
                                "en",
                                type as string,
                                router.query.tag as string
                            )}{" "}
                            {getTotalPostsbylangandtype(
                                blogs,
                                "en",
                                type as string,
                                router.query.tag as string
                            ) > 1
                                ? "posts"
                                : "post"}
                        </h3>
                    </div>

                    {router.query.tag ? (
                        <div className={styles.showtags}>
                            tag:
                            <div className={styles.tag}>
                                <span>{router.query.tag}</span>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className={styles.wrapper}>
                    <List
                        blogs={filteredPosts}
                        startIndex={indexOfFirstPost}
                        endIndex={indexOfLastPost}
                        type={type as string}
                        tags={
                            router.query.tag ? [router.query.tag as string] : []
                        }
                        lang="en"
                    />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={getTotalPostsbylangandtype(
                            blogs,
                            "en",
                            type as string,
                            router.query.tag as string
                        )}
                        paginate={paginate}
                    />
                </div>
            </div>
            <div className={styles.main} style={{ display: "var(--lang_jp)" }}>
                <div className={styles.header}>
                    <Breadcrumb />
                    <Link href={`/${type}`}>
                        <h1>{Utype}</h1>
                    </Link>
                    <div className={styles.totalPosts}>
                        <h3>
                            {getTotalPostsbylangandtype(
                                blogs,
                                "en",
                                type as string,
                                router.query.tag as string
                            )}{" "}
                            {getTotalPostsbylangandtype(
                                blogs,
                                "en",
                                type as string,
                                router.query.tag as string
                            ) > 1
                                ? "posts"
                                : "post"}
                        </h3>
                    </div>

                    {router.query.tag ? (
                        <div className={styles.showtags}>
                            tag:
                            <div className={styles.tag}>
                                <span>{router.query.tag}</span>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className={styles.wrapper}>
                    <List
                        blogs={filteredPosts}
                        startIndex={indexOfFirstPost}
                        endIndex={indexOfLastPost}
                        type={type as string}
                        tags={
                            router.query.tag ? [router.query.tag as string] : []
                        }
                        lang="ja"
                    />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={getTotalPostsbylangandtype(
                            blogs,
                            "ja",
                            type as string,
                            router.query.tag as string
                        )}
                        paginate={paginate}
                    />
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

//to uppercase the first letter of the type
const functionToUppercaseFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
