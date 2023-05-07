import Link from "next/link";
import styles from "./navbar.module.css";
import React, { useState } from "react";
import { LanguageToggle } from "./langTogglebtn";
import { ThemeToggle } from "./themeTogglebtn";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? "visible" : "hidden";
    };

    return (
        <div className={styles.main_nav}>
            <header className={styles.navbar}>
                <div className={styles.hamburger_menu}>
                    <button
                        className={
                            styles.hamburger_menu_icon +
                            " " +
                            (isOpen ? styles.active : "")
                        }
                        onClick={toggleMenu}
                    >
                        <i></i>
                    </button>
                    <nav>
                        <ul
                            className={
                                styles.hamburger_menu_content +
                                " " +
                                (isOpen ? styles.active : styles.inactive)
                            }
                        >
                            <li className={styles.hamburger_menu_content_item}>
                                <Link href="/" onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className={styles.hamburger_menu_content_item}>
                                <Link href="/about" onClick={toggleMenu}>
                                    About
                                </Link>
                            </li>
                            <li className={styles.hamburger_menu_content_item}>
                                <Link href="/works" onClick={toggleMenu}>
                                    Works
                                </Link>
                            </li>
                            <li className={styles.hamburger_menu_content_item}>
                                <Link href="/blog" onClick={toggleMenu}>
                                    Blog
                                </Link>
                            </li>
                            <li className={styles.hamburger_menu_content_item}>
                                <Link href="/contact" onClick={toggleMenu}>
                                    Contact
                                </Link>
                            </li>
                            <div className={styles.langbtn2}>
                                <LanguageToggle />
                            </div>
                            <div className={styles.themebtn2}>
                                <ThemeToggle />
                            </div>
                        </ul>
                    </nav>
                </div>

                <div className={styles.link}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/works">Works</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className={styles.langbtn}>
                    <LanguageToggle />
                </div>
                <div className={styles.themebtn}>
                    <ThemeToggle />
                </div>
            </header>
        </div>
    );
}
