import Link from "next/link";
import styles from "./navbar.module.css";

export function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.link}>
                <Link href="/">Home</Link>
                <Link href="/works">Works</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </header>
    );
}
