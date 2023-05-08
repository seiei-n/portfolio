import Image from "next/image";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import styles from "./about.module.css";

type Props = {
    posts: any;
};

export default function About({ posts }: Props) {
    const p = posts.posts;
    console.log(p);

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Breadcrumb />
                <h1>Profile</h1>
            </div>

            <div className="profile">
                <div className="profiletext">
                    <h1>SEIEI NAGAHAMA</h1>
                    B3 student<br></br>
                    Dept. of ICS, Saitama University<br></br>
                    Age : 21 <br></br>
                    From : Sasebo, Nagasaki <br></br>
                    a.k.a : 2xsei<br></br>
                    <a href="https://twitter.com/solehamugoiyo3">
                        <Image
                            priority={true}
                            src="/twitter.svg"
                            alt="twitter"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const posts = await fetch(
        "process.env.VERCEL_URL" + "/api/get"
    ).then((res) => res.json());
    return {
        props: {
            posts,
        },
        revalidate: 60,
    };
}
