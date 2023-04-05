import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
                
                <a className={styles.profiletext}>
                    <h1>SEIEI NAGAHAMA</h1>
                    B3 student<br></br>
                    Dept. of ICS, Saitama University<br></br>
                    Age : 21 <br></br>
                    From : Sasebo, Nagasaki <br></br>
                    a.k.a : 2xsei<br></br>
                </a>
                <a className={styles.profilepic}>
                    <Image
                        src="/face.png"
                        alt="profile"
                        width={300}
                        height={300}
                    />
                </a>
            </div>
        </>
    );
}
