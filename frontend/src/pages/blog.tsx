import Card, { BlogCardParams } from "@/components/blog/card";
import List from "@/components/blog/list";
import { getAllposts } from "@/lib/getposts";
import { markdownToHtml } from "@/lib/markdownTohtml";
import styles from "./blog.module.css";

type Props = {
    blogs:BlogCardParams[];
};

export default function Blog({ blogs }: Props) {
    return (
        <div>
            <h1>Blog</h1>
            {/* show blogs */}
            <div className={styles.wrapper}>
                <List blogs={blogs} />
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
