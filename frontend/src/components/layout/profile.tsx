import Image from "next/image";
import styles from "./profile.module.css";
import Link from "next/link";

export const Profile = () => (
    <div className={styles.profile}>
        <div className={styles.profiletext}>
            <Link href="/about">
            <div className={styles.EN}>
            <h1>SEIEI NAGAHAMA</h1>
            B3 student<br></br>
            Dept. of ICS, Saitama University<br></br>
            Age : 21 <br></br>
            From : Sasebo, Nagasaki <br></br>
            a.k.a : 2xsei<br></br>
            </div>
            </Link>
            <a href="https://twitter.com/solehamugoiyo3">
                <Image
                    priority={true}
                    src="/twitter.svg"
                    alt="twitter"
                    width={30}
                    height={30}
                />
            </a>
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
);
