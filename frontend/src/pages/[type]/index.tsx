import Card, { BlogCardParams } from "@/components/blog/card";
import List from "@/components/blog/list";
import { getAllposts } from "@/lib/getposts";
import styles from "./index.module.css";
import Pagination from "@/components/blog/pagination";
import React from "react";
import { useState } from "react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { useRouter } from "next/router";
import { postFilter } from "@/lib/postFilter";

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
        <div className={styles.main}>
            <div className={styles.header}>
                <Breadcrumb />
                <h1>{Utype}</h1>
            </div>
            <div className={styles.wrapper}>
                <List
                    blogs={filteredPosts}
                    startIndex={indexOfFirstPost}
                    endIndex={indexOfLastPost}
                    type={type as string}
                />
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={filteredPosts.length}
                    paginate={paginate}
                />
            </div>
        </div>
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
