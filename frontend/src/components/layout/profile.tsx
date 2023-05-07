import Image from "next/image";
import styles from "./profile.module.css";
import Link from "next/link";

export const Profile = () => (
    <div className={styles.profile}>
        <div className={styles.profiletext}>
            <Link href="/about">
                <div style={{ display: "var(--lang_en)" }}>
                    <h1>SEIEI NAGAHAMA</h1>
                    B3 student<br></br>
                    Dept. of ICS, Saitama University<br></br>
                    Age : 22 <br></br>
                    From : Sasebo, Nagasaki <br></br>
                    a.k.a : 2xsei<br></br>
                </div>
                <div style={{ display: "var(--lang_jp)" }}>
                    <h1>長濱 聖英</h1>
                    埼玉大学 工学部 情報工学科 3年<br></br>
                    22歳<br></br>
                    出身地 : 長崎県佐世保市<br></br>
                    通称 : 2xsei<br></br>
                </div>
            </Link>
            <a href="https://twitter.com/solehamugoiyo3">
                <Image
                    priority={true}
                    src="/twitter.svg"
                    alt="twitter"
                    width={30}
                    height={30}
                    style={{ filter : "invert(var(--invert))" }}
                />
            </a>
            <a href="https://github.com/seiei-n">
                <Image
                    priority={true}
                    src="/github-mark.svg"
                    alt="github"
                    width={30}
                    height={30}
                    style={{ filter : "invert(var(--invert))" }}
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
);
