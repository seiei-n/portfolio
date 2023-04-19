import Card, { BlogCardParams } from "@/components/blog/card";
import List from "@/components/blog/list";
import { getAllposts } from "@/lib/getposts";
import styles from "./blog.module.css";
import Pagination from "@/components/blog/pagination";
import React from "react";
import { useState } from "react";


type Props = {
    blogs: BlogCardParams[];

};




export default function Blog({ blogs }: Props ){
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    return (
        <div className={styles.main}>
            <h1 className="styles.title">Blog</h1>
            <div className={styles.wrapper}>
                <List blogs={blogs}  startIndex={indexOfFirstPost} endIndex={indexOfLastPost} />
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={blogs.length}
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
