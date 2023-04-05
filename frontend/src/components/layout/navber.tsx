import Link from "next/link";
import styles from "./navbar.module.css";

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.link}>
                    <Link href="/works">Works</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>
              
            </div>
        </nav>
    );
}
