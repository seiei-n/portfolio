import Card, { BlogCardParams } from "@/components/blog/card";
import List from "@/components/blog/list";
import { getAllposts } from "@/lib/getposts";
import styles from "./works.module.css";
import { Breadcrumb } from "@/components/layout/breadcrumb";

type Props = {
    blogs: BlogCardParams[];
};

export default function Works({ blogs }: Props) {
    return (
        <div className={styles.main}>
          <Breadcrumb/>
            <h1 className="styles.title">Works</h1>
            <div className={styles.wrapper}>
                <List
                    blogs={blogs} startIndex={0} endIndex={1}
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
