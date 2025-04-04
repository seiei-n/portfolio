import Image from "next/image";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import styles from "./about.module.css";

export default function About() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Breadcrumb />
            </div>

            <div className={styles.profile} style={{ display: "var(--lang_en)" }}>
                <h1>About Me</h1>
                <div className={styles.profiletext}>
                    <h1>SEIEI NAGAHAMA</h1>
                    Master 1<br></br>
                    Dept. of CS, Science Tokyo<br></br>
                    Age : 24 <br></br>
                    From : Sasebo, Nagasaki <br></br>
                    a.k.a : 2xsei<br></br>
                    <a href="https://twitter.com/solehamugoiyo3">
                        <Image
                            priority={true}
                            src="/twitter.svg"
                            alt="twitter"
                            width={30}
                            height={30}
                            style={{ filter: "invert(var(--invert))" }}
                        />
                    </a>
                    <a href="https://github.com/seiei-n">
                        <Image
                            priority={true}
                            src="/github-mark.svg"
                            alt="github"
                            width={30}
                            height={30}
                            style={{ filter: "invert(var(--invert))" }}
                        />
                    </a>
                </div>
            </div>
            <div className={styles.profile} style={{ display: "var(--lang_jp)" }}>
                <h1>私について</h1>
                <div className={styles.profiletext}>
                    <h1>長濱 聖英</h1>
                    東京科学大学 情報理工学院情報工学系 修士1年<br></br>
                    24歳<br></br>
                    出身地 : 長崎県佐世保市<br></br>
                    通称 : 2xsei<br></br>
                    <a href="https://twitter.com/solehamugoiyo3">
                        <Image
                            priority={true}
                            src="/twitter.svg"
                            alt="twitter"
                            width={30}
                            height={30}
                            style={{ filter: "invert(var(--invert))" }}
                        />
                    </a>
                    <a href="https://github.com/seiei-n">
                        <Image
                            priority={true}
                            src="/github-mark.svg"
                            alt="github"
                            width={30}
                            height={30}
                            style={{ filter: "invert(var(--invert))" }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
